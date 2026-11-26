var Xx=Object.defineProperty;var jx=(s,e,t)=>e in s?Xx(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var $=(s,e,t)=>jx(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Yu={exports:{}},$o={},Qu={exports:{}},Rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function qx(){if(Mm)return Rt;Mm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function m(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,w={};function _(N,W,_e){this.props=N,this.context=W,this.refs=w,this.updater=_e||y}_.prototype.isReactComponent={},_.prototype.setState=function(N,W){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,W,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function M(){}M.prototype=_.prototype;function C(N,W,_e){this.props=N,this.context=W,this.refs=w,this.updater=_e||y}var L=C.prototype=new M;L.constructor=C,S(L,_.prototype),L.isPureReactComponent=!0;var P=Array.isArray,V=Object.prototype.hasOwnProperty,I={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function E(N,W,_e){var ye,ve={},X=null,ce=null;if(W!=null)for(ye in W.ref!==void 0&&(ce=W.ref),W.key!==void 0&&(X=""+W.key),W)V.call(W,ye)&&!z.hasOwnProperty(ye)&&(ve[ye]=W[ye]);var H=arguments.length-2;if(H===1)ve.children=_e;else if(1<H){for(var re=Array(H),Ae=0;Ae<H;Ae++)re[Ae]=arguments[Ae+2];ve.children=re}if(N&&N.defaultProps)for(ye in H=N.defaultProps,H)ve[ye]===void 0&&(ve[ye]=H[ye]);return{$$typeof:s,type:N,key:X,ref:ce,props:ve,_owner:I.current}}function F(N,W){return{$$typeof:s,type:N.type,key:W,ref:N.ref,props:N.props,_owner:N._owner}}function Q(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function B(N){var W={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(_e){return W[_e]})}var K=/\/+/g;function he(N,W){return typeof N=="object"&&N!==null&&N.key!=null?B(""+N.key):W.toString(36)}function le(N,W,_e,ye,ve){var X=typeof N;(X==="undefined"||X==="boolean")&&(N=null);var ce=!1;if(N===null)ce=!0;else switch(X){case"string":case"number":ce=!0;break;case"object":switch(N.$$typeof){case s:case e:ce=!0}}if(ce)return ce=N,ve=ve(ce),N=ye===""?"."+he(ce,0):ye,P(ve)?(_e="",N!=null&&(_e=N.replace(K,"$&/")+"/"),le(ve,W,_e,"",function(Ae){return Ae})):ve!=null&&(Q(ve)&&(ve=F(ve,_e+(!ve.key||ce&&ce.key===ve.key?"":(""+ve.key).replace(K,"$&/")+"/")+N)),W.push(ve)),1;if(ce=0,ye=ye===""?".":ye+":",P(N))for(var H=0;H<N.length;H++){X=N[H];var re=ye+he(X,H);ce+=le(X,W,_e,re,ve)}else if(re=m(N),typeof re=="function")for(N=re.call(N),H=0;!(X=N.next()).done;)X=X.value,re=ye+he(X,H++),ce+=le(X,W,_e,re,ve);else if(X==="object")throw W=String(N),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return ce}function D(N,W,_e){if(N==null)return N;var ye=[],ve=0;return le(N,ye,"","",function(X){return W.call(_e,X,ve++)}),ye}function te(N){if(N._status===-1){var W=N._result;W=W(),W.then(function(_e){(N._status===0||N._status===-1)&&(N._status=1,N._result=_e)},function(_e){(N._status===0||N._status===-1)&&(N._status=2,N._result=_e)}),N._status===-1&&(N._status=0,N._result=W)}if(N._status===1)return N._result.default;throw N._result}var G={current:null},Y={transition:null},O={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:Y,ReactCurrentOwner:I};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Rt.Children={map:D,forEach:function(N,W,_e){D(N,function(){W.apply(this,arguments)},_e)},count:function(N){var W=0;return D(N,function(){W++}),W},toArray:function(N){return D(N,function(W){return W})||[]},only:function(N){if(!Q(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Rt.Component=_,Rt.Fragment=t,Rt.Profiler=o,Rt.PureComponent=C,Rt.StrictMode=r,Rt.Suspense=h,Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,Rt.act=ie,Rt.cloneElement=function(N,W,_e){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var ye=S({},N.props),ve=N.key,X=N.ref,ce=N._owner;if(W!=null){if(W.ref!==void 0&&(X=W.ref,ce=I.current),W.key!==void 0&&(ve=""+W.key),N.type&&N.type.defaultProps)var H=N.type.defaultProps;for(re in W)V.call(W,re)&&!z.hasOwnProperty(re)&&(ye[re]=W[re]===void 0&&H!==void 0?H[re]:W[re])}var re=arguments.length-2;if(re===1)ye.children=_e;else if(1<re){H=Array(re);for(var Ae=0;Ae<re;Ae++)H[Ae]=arguments[Ae+2];ye.children=H}return{$$typeof:s,type:N.type,key:ve,ref:X,props:ye,_owner:ce}},Rt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},Rt.createElement=E,Rt.createFactory=function(N){var W=E.bind(null,N);return W.type=N,W},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(N){return{$$typeof:f,render:N}},Rt.isValidElement=Q,Rt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:te}},Rt.memo=function(N,W){return{$$typeof:d,type:N,compare:W===void 0?null:W}},Rt.startTransition=function(N){var W=Y.transition;Y.transition={};try{N()}finally{Y.transition=W}},Rt.unstable_act=ie,Rt.useCallback=function(N,W){return G.current.useCallback(N,W)},Rt.useContext=function(N){return G.current.useContext(N)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(N){return G.current.useDeferredValue(N)},Rt.useEffect=function(N,W){return G.current.useEffect(N,W)},Rt.useId=function(){return G.current.useId()},Rt.useImperativeHandle=function(N,W,_e){return G.current.useImperativeHandle(N,W,_e)},Rt.useInsertionEffect=function(N,W){return G.current.useInsertionEffect(N,W)},Rt.useLayoutEffect=function(N,W){return G.current.useLayoutEffect(N,W)},Rt.useMemo=function(N,W){return G.current.useMemo(N,W)},Rt.useReducer=function(N,W,_e){return G.current.useReducer(N,W,_e)},Rt.useRef=function(N){return G.current.useRef(N)},Rt.useState=function(N){return G.current.useState(N)},Rt.useSyncExternalStore=function(N,W,_e){return G.current.useSyncExternalStore(N,W,_e)},Rt.useTransition=function(){return G.current.useTransition()},Rt.version="18.3.1",Rt}var Sm;function Bh(){return Sm||(Sm=1,Qu.exports=qx()),Qu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function Kx(){if(Am)return $o;Am=1;var s=Bh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,d){var g,x={},m=null,y=null;d!==void 0&&(m=""+d),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(y=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(x[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)x[g]===void 0&&(x[g]=h[g]);return{$$typeof:e,type:f,key:m,ref:y,props:x,_owner:o.current}}return $o.Fragment=t,$o.jsx=c,$o.jsxs=c,$o}var Em;function Yx(){return Em||(Em=1,Yu.exports=Kx()),Yu.exports}var ze=Yx(),Ft=Bh(),Ml={},Zu={exports:{}},Zn={},Ju={exports:{}},$u={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function Qx(){return wm||(wm=1,(function(s){function e(Y,O){var ie=Y.length;Y.push(O);e:for(;0<ie;){var N=ie-1>>>1,W=Y[N];if(0<o(W,O))Y[N]=O,Y[ie]=W,ie=N;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var O=Y[0],ie=Y.pop();if(ie!==O){Y[0]=ie;e:for(var N=0,W=Y.length,_e=W>>>1;N<_e;){var ye=2*(N+1)-1,ve=Y[ye],X=ye+1,ce=Y[X];if(0>o(ve,ie))X<W&&0>o(ce,ve)?(Y[N]=ce,Y[X]=ie,N=X):(Y[N]=ve,Y[ye]=ie,N=ye);else if(X<W&&0>o(ce,ie))Y[N]=ce,Y[X]=ie,N=X;else break e}}return O}function o(Y,O){var ie=Y.sortIndex-O.sortIndex;return ie!==0?ie:Y.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],d=[],g=1,x=null,m=3,y=!1,S=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(Y){for(var O=t(d);O!==null;){if(O.callback===null)r(d);else if(O.startTime<=Y)r(d),O.sortIndex=O.expirationTime,e(h,O);else break;O=t(d)}}function P(Y){if(w=!1,L(Y),!S)if(t(h)!==null)S=!0,te(V);else{var O=t(d);O!==null&&G(P,O.startTime-Y)}}function V(Y,O){S=!1,w&&(w=!1,M(E),E=-1),y=!0;var ie=m;try{for(L(O),x=t(h);x!==null&&(!(x.expirationTime>O)||Y&&!B());){var N=x.callback;if(typeof N=="function"){x.callback=null,m=x.priorityLevel;var W=N(x.expirationTime<=O);O=s.unstable_now(),typeof W=="function"?x.callback=W:x===t(h)&&r(h),L(O)}else r(h);x=t(h)}if(x!==null)var _e=!0;else{var ye=t(d);ye!==null&&G(P,ye.startTime-O),_e=!1}return _e}finally{x=null,m=ie,y=!1}}var I=!1,z=null,E=-1,F=5,Q=-1;function B(){return!(s.unstable_now()-Q<F)}function K(){if(z!==null){var Y=s.unstable_now();Q=Y;var O=!0;try{O=z(!0,Y)}finally{O?he():(I=!1,z=null)}}else I=!1}var he;if(typeof C=="function")he=function(){C(K)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,D=le.port2;le.port1.onmessage=K,he=function(){D.postMessage(null)}}else he=function(){_(K,0)};function te(Y){z=Y,I||(I=!0,he())}function G(Y,O){E=_(function(){Y(s.unstable_now())},O)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){S||y||(S=!0,te(V))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(Y){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var ie=m;m=O;try{return Y()}finally{m=ie}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,O){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ie=m;m=Y;try{return O()}finally{m=ie}},s.unstable_scheduleCallback=function(Y,O,ie){var N=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?N+ie:N):ie=N,Y){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ie+W,Y={id:g++,callback:O,priorityLevel:Y,startTime:ie,expirationTime:W,sortIndex:-1},ie>N?(Y.sortIndex=ie,e(d,Y),t(h)===null&&Y===t(d)&&(w?(M(E),E=-1):w=!0,G(P,ie-N))):(Y.sortIndex=W,e(h,Y),S||y||(S=!0,te(V))),Y},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(Y){var O=m;return function(){var ie=m;m=O;try{return Y.apply(this,arguments)}finally{m=ie}}}})($u)),$u}var Tm;function Zx(){return Tm||(Tm=1,Ju.exports=Qx()),Ju.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function Jx(){if(Cm)return Zn;Cm=1;var s=Bh(),e=Zx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function m(n){return h.call(x,n)?!0:h.call(g,n)?!1:d.test(n)?x[n]=!0:(g[n]=!0,!1)}function y(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function S(n,i,a,u){if(i===null||typeof i>"u"||y(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,u,p,v,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=T}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(M,C);_[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(M,C);_[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(M,C);_[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,u){var p=_.hasOwnProperty(i)?_[i]:null;(p!==null?p.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(S(i,a,p,u)&&(a=null),u||p===null?m(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,u=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),I=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),B=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),Y=Symbol.iterator;function O(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,N;function W(n){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var _e=!1;function ye(n,i){if(!n||_e)return"";_e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(de){var u=de}Reflect.construct(n,[],i)}else{try{i.call()}catch(de){u=de}n.call(i.prototype)}else{try{throw Error()}catch(de){u=de}n()}}catch(de){if(de&&u&&typeof de.stack=="string"){for(var p=de.stack.split(`
`),v=u.stack.split(`
`),T=p.length-1,k=v.length-1;1<=T&&0<=k&&p[T]!==v[k];)k--;for(;1<=T&&0<=k;T--,k--)if(p[T]!==v[k]){if(T!==1||k!==1)do if(T--,k--,0>k||p[T]!==v[k]){var q=`
`+p[T].replace(" at new "," at ");return n.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",n.displayName)),q}while(1<=T&&0<=k);break}}}finally{_e=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function ve(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=ye(n.type,!1),n;case 11:return n=ye(n.type.render,!1),n;case 1:return n=ye(n.type,!0),n;default:return""}}function X(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case z:return"Fragment";case I:return"Portal";case F:return"Profiler";case E:return"StrictMode";case he:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case Q:return(n._context.displayName||"Context")+".Provider";case K:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case D:return i=n.displayName||null,i!==null?i:X(n.type)||"Memo";case te:i=n._payload,n=n._init;try{return X(n(i))}catch{}}return null}function ce(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function H(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function re(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ae(n){var i=re(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(T){u=""+T,v.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ne(n){n._valueTracker||(n._valueTracker=Ae(n))}function nt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=re(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function We(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ct(n,i){var a=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ke(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=H(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function je(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function Ve(n,i){je(n,i);var a=H(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?vt(n,i.type,a):i.hasOwnProperty("defaultValue")&&vt(n,i.type,H(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ut(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function vt(n,i,a){(i!=="number"||We(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var U=Array.isArray;function ot(n,i,a,u){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&u&&(n[a].defaultSelected=!0)}else{for(a=""+H(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function He(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function lt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(U(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:H(a)}}function Te(n,i){var a=H(i.value),u=H(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function _t(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function b(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function A(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?b(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ne,me=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,p)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ne=ne||document.createElement("div"),ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Me(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ce={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];Object.keys(Ce).forEach(function(n){be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ce[i]=Ce[n]})});function pe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ce.hasOwnProperty(n)&&Ce[n]?(""+i).trim():i+"px"}function ge(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=pe(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,p):n[a]=p}}var Be=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xe(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function De(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ie=null;function ft(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ht=null,Mt=null,j=null;function we(n){if(n=ko(n)){if(typeof ht!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Fa(i),ht(n.stateNode,n.type,i))}}function xe(n){Mt?j?j.push(n):j=[n]:Mt=n}function Ye(){if(Mt){var n=Mt,i=j;if(j=Mt=null,we(n),i)for(n=0;n<i.length;n++)we(i[n])}}function Fe(n,i){return n(i)}function Se(){}var Qe=!1;function qe(n,i,a){if(Qe)return n(i,a);Qe=!0;try{return Fe(n,i,a)}finally{Qe=!1,(Mt!==null||j!==null)&&(Se(),Ye())}}function At(n,i){var a=n.stateNode;if(a===null)return null;var u=Fa(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Lt=!1;if(f)try{var an={};Object.defineProperty(an,"passive",{get:function(){Lt=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{Lt=!1}function On(n,i,a,u,p,v,T,k,q){var de=Array.prototype.slice.call(arguments,3);try{i.apply(a,de)}catch(Re){this.onError(Re)}}var Si=!1,$i=null,Ai=!1,er=null,$n={onError:function(n){Si=!0,$i=n}};function qr(n,i,a,u,p,v,T,k,q){Si=!1,$i=null,On.apply($n,arguments)}function Ss(n,i,a,u,p,v,T,k,q){if(qr.apply(this,arguments),Si){if(Si){var de=$i;Si=!1,$i=null}else throw Error(t(198));Ai||(Ai=!0,er=de)}}function ln(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function wn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function kn(n){if(ln(n)!==n)throw Error(t(188))}function Tn(n){var i=n.alternate;if(!i){if(i=ln(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var p=a.return;if(p===null)break;var v=p.alternate;if(v===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===a)return kn(p),n;if(v===u)return kn(p),i;v=v.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=v;else{for(var T=!1,k=p.child;k;){if(k===a){T=!0,a=p,u=v;break}if(k===u){T=!0,u=p,a=v;break}k=k.sibling}if(!T){for(k=v.child;k;){if(k===a){T=!0,a=v,u=p;break}if(k===u){T=!0,u=v,a=p;break}k=k.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Bn(n){return n=Tn(n),n!==null?zn(n):null}function zn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=zn(n);if(i!==null)return i;n=n.sibling}return null}var Kr=e.unstable_scheduleCallback,Yr=e.unstable_cancelCallback,ci=e.unstable_shouldYield,ui=e.unstable_requestPaint,jt=e.unstable_now,Mo=e.unstable_getCurrentPriorityLevel,nn=e.unstable_ImmediatePriority,R=e.unstable_UserBlockingPriority,ee=e.unstable_NormalPriority,ue=e.unstable_LowPriority,ae=e.unstable_IdlePriority,oe=null,Oe=null;function Ge(n){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(oe,n,void 0,(n.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:dt,$e=Math.log,et=Math.LN2;function dt(n){return n>>>=0,n===0?32:31-($e(n)/et|0)|0}var pt=64,it=4194304;function Ct(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ot(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,p=n.suspendedLanes,v=n.pingedLanes,T=a&268435455;if(T!==0){var k=T&~p;k!==0?u=Ct(k):(v&=T,v!==0&&(u=Ct(v)))}else T=a&~p,T!==0?u=Ct(T):v!==0&&(u=Ct(v));if(u===0)return 0;if(i!==0&&i!==u&&(i&p)===0&&(p=u&-u,v=i&-i,p>=v||p===16&&(v&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Le(i),p=1<<a,u|=n[a],i&=~p;return u}function Wt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-Le(v),k=1<<T,q=p[T];q===-1?((k&a)===0||(k&u)!==0)&&(p[T]=Wt(k,i)):q<=i&&(n.expiredLanes|=k),v&=~k}}function Zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ze(){var n=pt;return pt<<=1,(pt&4194240)===0&&(pt=64),n}function rn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Et(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Le(i),n[i]=a}function gn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-Le(a),v=1<<p;i[p]=0,u[p]=-1,n[p]=-1,a&=~v}}function Sn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Le(a),p=1<<u;p&i|n[u]&i&&(n[u]|=i),a&=~p}}var St=0;function ei(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Bt,qt,Ei,Ht,wi,Bi=!1,Qr=[],_r=null,yr=null,Mr=null,So=new Map,Ao=new Map,Sr=[],dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rd(n,i){switch(n){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":So.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(i.pointerId)}}function Eo(n,i,a,u,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:v,targetContainers:[p]},i!==null&&(i=ko(i),i!==null&&qt(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function pv(n,i,a,u,p){switch(i){case"focusin":return _r=Eo(_r,n,i,a,u,p),!0;case"dragenter":return yr=Eo(yr,n,i,a,u,p),!0;case"mouseover":return Mr=Eo(Mr,n,i,a,u,p),!0;case"pointerover":var v=p.pointerId;return So.set(v,Eo(So.get(v)||null,n,i,a,u,p)),!0;case"gotpointercapture":return v=p.pointerId,Ao.set(v,Eo(Ao.get(v)||null,n,i,a,u,p)),!0}return!1}function sd(n){var i=Zr(n.target);if(i!==null){var a=ln(i);if(a!==null){if(i=a.tag,i===13){if(i=wn(a),i!==null){n.blockedOn=i,wi(n.priority,function(){Ei(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Sa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Sc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Ie=u,a.target.dispatchEvent(u),Ie=null}else return i=ko(a),i!==null&&qt(i),n.blockedOn=a,!1;i.shift()}return!0}function od(n,i,a){Sa(n)&&a.delete(i)}function mv(){Bi=!1,_r!==null&&Sa(_r)&&(_r=null),yr!==null&&Sa(yr)&&(yr=null),Mr!==null&&Sa(Mr)&&(Mr=null),So.forEach(od),Ao.forEach(od)}function wo(n,i){n.blockedOn===i&&(n.blockedOn=null,Bi||(Bi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,mv)))}function To(n){function i(p){return wo(p,n)}if(0<Qr.length){wo(Qr[0],n);for(var a=1;a<Qr.length;a++){var u=Qr[a];u.blockedOn===n&&(u.blockedOn=null)}}for(_r!==null&&wo(_r,n),yr!==null&&wo(yr,n),Mr!==null&&wo(Mr,n),So.forEach(i),Ao.forEach(i),a=0;a<Sr.length;a++)u=Sr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)sd(a),a.blockedOn===null&&Sr.shift()}var As=P.ReactCurrentBatchConfig,Aa=!0;function gv(n,i,a,u){var p=St,v=As.transition;As.transition=null;try{St=1,Mc(n,i,a,u)}finally{St=p,As.transition=v}}function vv(n,i,a,u){var p=St,v=As.transition;As.transition=null;try{St=4,Mc(n,i,a,u)}finally{St=p,As.transition=v}}function Mc(n,i,a,u){if(Aa){var p=Sc(n,i,a,u);if(p===null)Bc(n,i,u,Ea,a),rd(n,u);else if(pv(p,n,i,a,u))u.stopPropagation();else if(rd(n,u),i&4&&-1<dv.indexOf(n)){for(;p!==null;){var v=ko(p);if(v!==null&&Bt(v),v=Sc(n,i,a,u),v===null&&Bc(n,i,u,Ea,a),v===p)break;p=v}p!==null&&u.stopPropagation()}else Bc(n,i,u,null,a)}}var Ea=null;function Sc(n,i,a,u){if(Ea=null,n=ft(u),n=Zr(n),n!==null)if(i=ln(n),i===null)n=null;else if(a=i.tag,a===13){if(n=wn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ea=n,null}function ad(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mo()){case nn:return 1;case R:return 4;case ee:case ue:return 16;case ae:return 536870912;default:return 16}default:return 16}}var Ar=null,Ac=null,wa=null;function ld(){if(wa)return wa;var n,i=Ac,a=i.length,u,p="value"in Ar?Ar.value:Ar.textContent,v=p.length;for(n=0;n<a&&i[n]===p[n];n++);var T=a-n;for(u=1;u<=T&&i[a-u]===p[v-u];u++);return wa=p.slice(n,1<u?1-u:void 0)}function Ta(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ca(){return!0}function cd(){return!1}function ti(n){function i(a,u,p,v,T){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(a=n[k],this[k]=a?a(v):v[k]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ca:cd,this.isPropagationStopped=cd,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),i}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ec=ti(Es),Co=ie({},Es,{view:0,detail:0}),xv=ti(Co),wc,Tc,Ro,Ra=ie({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ro&&(Ro&&n.type==="mousemove"?(wc=n.screenX-Ro.screenX,Tc=n.screenY-Ro.screenY):Tc=wc=0,Ro=n),wc)},movementY:function(n){return"movementY"in n?n.movementY:Tc}}),ud=ti(Ra),_v=ie({},Ra,{dataTransfer:0}),yv=ti(_v),Mv=ie({},Co,{relatedTarget:0}),Cc=ti(Mv),Sv=ie({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=ti(Sv),Ev=ie({},Es,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),wv=ti(Ev),Tv=ie({},Es,{data:0}),fd=ti(Tv),Cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=bv[n])?!!i[n]:!1}function Rc(){return Pv}var Lv=ie({},Co,{key:function(n){if(n.key){var i=Cv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ta(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Rv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rc,charCode:function(n){return n.type==="keypress"?Ta(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ta(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Iv=ti(Lv),Nv=ie({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hd=ti(Nv),Dv=ie({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rc}),Uv=ti(Dv),Fv=ie({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ov=ti(Fv),kv=ie({},Ra,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=ti(kv),zv=[9,13,27,32],bc=f&&"CompositionEvent"in window,bo=null;f&&"documentMode"in document&&(bo=document.documentMode);var Hv=f&&"TextEvent"in window&&!bo,dd=f&&(!bc||bo&&8<bo&&11>=bo),pd=" ",md=!1;function gd(n,i){switch(n){case"keyup":return zv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ws=!1;function Vv(n,i){switch(n){case"compositionend":return vd(i);case"keypress":return i.which!==32?null:(md=!0,pd);case"textInput":return n=i.data,n===pd&&md?null:n;default:return null}}function Gv(n,i){if(ws)return n==="compositionend"||!bc&&gd(n,i)?(n=ld(),wa=Ac=Ar=null,ws=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return dd&&i.locale!=="ko"?null:i.data;default:return null}}var Wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Wv[n.type]:i==="textarea"}function _d(n,i,a,u){xe(u),i=Na(i,"onChange"),0<i.length&&(a=new Ec("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Po=null,Lo=null;function Xv(n){Od(n,0)}function ba(n){var i=Ps(n);if(nt(i))return n}function jv(n,i){if(n==="change")return i}var yd=!1;if(f){var Pc;if(f){var Lc="oninput"in document;if(!Lc){var Md=document.createElement("div");Md.setAttribute("oninput","return;"),Lc=typeof Md.oninput=="function"}Pc=Lc}else Pc=!1;yd=Pc&&(!document.documentMode||9<document.documentMode)}function Sd(){Po&&(Po.detachEvent("onpropertychange",Ad),Lo=Po=null)}function Ad(n){if(n.propertyName==="value"&&ba(Lo)){var i=[];_d(i,Lo,n,ft(n)),qe(Xv,i)}}function qv(n,i,a){n==="focusin"?(Sd(),Po=i,Lo=a,Po.attachEvent("onpropertychange",Ad)):n==="focusout"&&Sd()}function Kv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ba(Lo)}function Yv(n,i){if(n==="click")return ba(i)}function Qv(n,i){if(n==="input"||n==="change")return ba(i)}function Zv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ti=typeof Object.is=="function"?Object.is:Zv;function Io(n,i){if(Ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!h.call(i,p)||!Ti(n[p],i[p]))return!1}return!0}function Ed(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function wd(n,i){var a=Ed(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ed(a)}}function Td(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Td(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Cd(){for(var n=window,i=We();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=We(n.document)}return i}function Ic(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Jv(n){var i=Cd(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Td(a.ownerDocument.documentElement,a)){if(u!==null&&Ic(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,v=Math.min(u.start,p);u=u.end===void 0?v:Math.min(u.end,p),!n.extend&&v>u&&(p=u,u=v,v=p),p=wd(a,v);var T=wd(a,u);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),v>u?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var $v=f&&"documentMode"in document&&11>=document.documentMode,Ts=null,Nc=null,No=null,Dc=!1;function Rd(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Dc||Ts==null||Ts!==We(u)||(u=Ts,"selectionStart"in u&&Ic(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),No&&Io(No,u)||(No=u,u=Na(Nc,"onSelect"),0<u.length&&(i=new Ec("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Ts)))}function Pa(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Cs={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},Uc={},bd={};f&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function La(n){if(Uc[n])return Uc[n];if(!Cs[n])return n;var i=Cs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in bd)return Uc[n]=i[a];return n}var Pd=La("animationend"),Ld=La("animationiteration"),Id=La("animationstart"),Nd=La("transitionend"),Dd=new Map,Ud="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(n,i){Dd.set(n,i),l(i,[n])}for(var Fc=0;Fc<Ud.length;Fc++){var Oc=Ud[Fc],ex=Oc.toLowerCase(),tx=Oc[0].toUpperCase()+Oc.slice(1);Er(ex,"on"+tx)}Er(Pd,"onAnimationEnd"),Er(Ld,"onAnimationIteration"),Er(Id,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(Nd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function Fd(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Ss(u,i,void 0,n),n.currentTarget=null}function Od(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],p=u.event;u=u.listeners;e:{var v=void 0;if(i)for(var T=u.length-1;0<=T;T--){var k=u[T],q=k.instance,de=k.currentTarget;if(k=k.listener,q!==v&&p.isPropagationStopped())break e;Fd(p,k,de),v=q}else for(T=0;T<u.length;T++){if(k=u[T],q=k.instance,de=k.currentTarget,k=k.listener,q!==v&&p.isPropagationStopped())break e;Fd(p,k,de),v=q}}}if(Ai)throw n=er,Ai=!1,er=null,n}function Kt(n,i){var a=i[Xc];a===void 0&&(a=i[Xc]=new Set);var u=n+"__bubble";a.has(u)||(kd(i,n,2,!1),a.add(u))}function kc(n,i,a){var u=0;i&&(u|=4),kd(a,n,u,i)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function Uo(n){if(!n[Ia]){n[Ia]=!0,r.forEach(function(a){a!=="selectionchange"&&(nx.has(a)||kc(a,!1,n),kc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ia]||(i[Ia]=!0,kc("selectionchange",!1,i))}}function kd(n,i,a,u){switch(ad(i)){case 1:var p=gv;break;case 4:p=vv;break;default:p=Mc}a=p.bind(null,i,a,n),p=void 0,!Lt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function Bc(n,i,a,u,p){var v=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var k=u.stateNode.containerInfo;if(k===p||k.nodeType===8&&k.parentNode===p)break;if(T===4)for(T=u.return;T!==null;){var q=T.tag;if((q===3||q===4)&&(q=T.stateNode.containerInfo,q===p||q.nodeType===8&&q.parentNode===p))return;T=T.return}for(;k!==null;){if(T=Zr(k),T===null)return;if(q=T.tag,q===5||q===6){u=v=T;continue e}k=k.parentNode}}u=u.return}qe(function(){var de=v,Re=ft(a),Pe=[];e:{var Ee=Dd.get(n);if(Ee!==void 0){var Je=Ec,rt=n;switch(n){case"keypress":if(Ta(a)===0)break e;case"keydown":case"keyup":Je=Iv;break;case"focusin":rt="focus",Je=Cc;break;case"focusout":rt="blur",Je=Cc;break;case"beforeblur":case"afterblur":Je=Cc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Je=ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Je=yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Je=Uv;break;case Pd:case Ld:case Id:Je=Av;break;case Nd:Je=Ov;break;case"scroll":Je=xv;break;case"wheel":Je=Bv;break;case"copy":case"cut":case"paste":Je=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Je=hd}var st=(i&4)!==0,sn=!st&&n==="scroll",se=st?Ee!==null?Ee+"Capture":null:Ee;st=[];for(var J=de,fe;J!==null;){fe=J;var Ue=fe.stateNode;if(fe.tag===5&&Ue!==null&&(fe=Ue,se!==null&&(Ue=At(J,se),Ue!=null&&st.push(Fo(J,Ue,fe)))),sn)break;J=J.return}0<st.length&&(Ee=new Je(Ee,rt,null,a,Re),Pe.push({event:Ee,listeners:st}))}}if((i&7)===0){e:{if(Ee=n==="mouseover"||n==="pointerover",Je=n==="mouseout"||n==="pointerout",Ee&&a!==Ie&&(rt=a.relatedTarget||a.fromElement)&&(Zr(rt)||rt[tr]))break e;if((Je||Ee)&&(Ee=Re.window===Re?Re:(Ee=Re.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,Je?(rt=a.relatedTarget||a.toElement,Je=de,rt=rt?Zr(rt):null,rt!==null&&(sn=ln(rt),rt!==sn||rt.tag!==5&&rt.tag!==6)&&(rt=null)):(Je=null,rt=de),Je!==rt)){if(st=ud,Ue="onMouseLeave",se="onMouseEnter",J="mouse",(n==="pointerout"||n==="pointerover")&&(st=hd,Ue="onPointerLeave",se="onPointerEnter",J="pointer"),sn=Je==null?Ee:Ps(Je),fe=rt==null?Ee:Ps(rt),Ee=new st(Ue,J+"leave",Je,a,Re),Ee.target=sn,Ee.relatedTarget=fe,Ue=null,Zr(Re)===de&&(st=new st(se,J+"enter",rt,a,Re),st.target=fe,st.relatedTarget=sn,Ue=st),sn=Ue,Je&&rt)t:{for(st=Je,se=rt,J=0,fe=st;fe;fe=Rs(fe))J++;for(fe=0,Ue=se;Ue;Ue=Rs(Ue))fe++;for(;0<J-fe;)st=Rs(st),J--;for(;0<fe-J;)se=Rs(se),fe--;for(;J--;){if(st===se||se!==null&&st===se.alternate)break t;st=Rs(st),se=Rs(se)}st=null}else st=null;Je!==null&&Bd(Pe,Ee,Je,st,!1),rt!==null&&sn!==null&&Bd(Pe,sn,rt,st,!0)}}e:{if(Ee=de?Ps(de):window,Je=Ee.nodeName&&Ee.nodeName.toLowerCase(),Je==="select"||Je==="input"&&Ee.type==="file")var at=jv;else if(xd(Ee))if(yd)at=Qv;else{at=Kv;var mt=qv}else(Je=Ee.nodeName)&&Je.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(at=Yv);if(at&&(at=at(n,de))){_d(Pe,at,a,Re);break e}mt&&mt(n,Ee,de),n==="focusout"&&(mt=Ee._wrapperState)&&mt.controlled&&Ee.type==="number"&&vt(Ee,"number",Ee.value)}switch(mt=de?Ps(de):window,n){case"focusin":(xd(mt)||mt.contentEditable==="true")&&(Ts=mt,Nc=de,No=null);break;case"focusout":No=Nc=Ts=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,Rd(Pe,a,Re);break;case"selectionchange":if($v)break;case"keydown":case"keyup":Rd(Pe,a,Re)}var gt;if(bc)e:{switch(n){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else ws?gd(n,a)&&(yt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(dd&&a.locale!=="ko"&&(ws||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&ws&&(gt=ld()):(Ar=Re,Ac="value"in Ar?Ar.value:Ar.textContent,ws=!0)),mt=Na(de,yt),0<mt.length&&(yt=new fd(yt,n,null,a,Re),Pe.push({event:yt,listeners:mt}),gt?yt.data=gt:(gt=vd(a),gt!==null&&(yt.data=gt)))),(gt=Hv?Vv(n,a):Gv(n,a))&&(de=Na(de,"onBeforeInput"),0<de.length&&(Re=new fd("onBeforeInput","beforeinput",null,a,Re),Pe.push({event:Re,listeners:de}),Re.data=gt))}Od(Pe,i)})}function Fo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Na(n,i){for(var a=i+"Capture",u=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=At(n,a),v!=null&&u.unshift(Fo(n,v,p)),v=At(n,i),v!=null&&u.push(Fo(n,v,p))),n=n.return}return u}function Rs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Bd(n,i,a,u,p){for(var v=i._reactName,T=[];a!==null&&a!==u;){var k=a,q=k.alternate,de=k.stateNode;if(q!==null&&q===u)break;k.tag===5&&de!==null&&(k=de,p?(q=At(a,v),q!=null&&T.unshift(Fo(a,q,k))):p||(q=At(a,v),q!=null&&T.push(Fo(a,q,k)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var ix=/\r\n?/g,rx=/\u0000|\uFFFD/g;function zd(n){return(typeof n=="string"?n:""+n).replace(ix,`
`).replace(rx,"")}function Da(n,i,a){if(i=zd(i),zd(n)!==i&&a)throw Error(t(425))}function Ua(){}var zc=null,Hc=null;function Vc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(n){return Hd.resolve(null).then(n).catch(ax)}:Gc;function ax(n){setTimeout(function(){throw n})}function Wc(n,i){var a=i,u=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){n.removeChild(p),To(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);To(i)}function wr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Vd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var bs=Math.random().toString(36).slice(2),zi="__reactFiber$"+bs,Oo="__reactProps$"+bs,tr="__reactContainer$"+bs,Xc="__reactEvents$"+bs,lx="__reactListeners$"+bs,cx="__reactHandles$"+bs;function Zr(n){var i=n[zi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[tr]||a[zi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Vd(n);n!==null;){if(a=n[zi])return a;n=Vd(n)}return i}n=a,a=n.parentNode}return null}function ko(n){return n=n[zi]||n[tr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Fa(n){return n[Oo]||null}var jc=[],Ls=-1;function Tr(n){return{current:n}}function Yt(n){0>Ls||(n.current=jc[Ls],jc[Ls]=null,Ls--)}function Xt(n,i){Ls++,jc[Ls]=n.current,n.current=i}var Cr={},Cn=Tr(Cr),jn=Tr(!1),Jr=Cr;function Is(n,i){var a=n.type.contextTypes;if(!a)return Cr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in a)p[v]=i[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function qn(n){return n=n.childContextTypes,n!=null}function Oa(){Yt(jn),Yt(Cn)}function Gd(n,i,a){if(Cn.current!==Cr)throw Error(t(168));Xt(Cn,i),Xt(jn,a)}function Wd(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in i))throw Error(t(108,ce(n)||"Unknown",p));return ie({},a,u)}function ka(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Cr,Jr=Cn.current,Xt(Cn,n),Xt(jn,jn.current),!0}function Xd(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Wd(n,i,Jr),u.__reactInternalMemoizedMergedChildContext=n,Yt(jn),Yt(Cn),Xt(Cn,n)):Yt(jn),Xt(jn,a)}var nr=null,Ba=!1,qc=!1;function jd(n){nr===null?nr=[n]:nr.push(n)}function ux(n){Ba=!0,jd(n)}function Rr(){if(!qc&&nr!==null){qc=!0;var n=0,i=St;try{var a=nr;for(St=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}nr=null,Ba=!1}catch(p){throw nr!==null&&(nr=nr.slice(n+1)),Kr(nn,Rr),p}finally{St=i,qc=!1}}return null}var Ns=[],Ds=0,za=null,Ha=0,fi=[],hi=0,$r=null,ir=1,rr="";function es(n,i){Ns[Ds++]=Ha,Ns[Ds++]=za,za=n,Ha=i}function qd(n,i,a){fi[hi++]=ir,fi[hi++]=rr,fi[hi++]=$r,$r=n;var u=ir;n=rr;var p=32-Le(u)-1;u&=~(1<<p),a+=1;var v=32-Le(i)+p;if(30<v){var T=p-p%5;v=(u&(1<<T)-1).toString(32),u>>=T,p-=T,ir=1<<32-Le(i)+p|a<<p|u,rr=v+n}else ir=1<<v|a<<p|u,rr=n}function Kc(n){n.return!==null&&(es(n,1),qd(n,1,0))}function Yc(n){for(;n===za;)za=Ns[--Ds],Ns[Ds]=null,Ha=Ns[--Ds],Ns[Ds]=null;for(;n===$r;)$r=fi[--hi],fi[hi]=null,rr=fi[--hi],fi[hi]=null,ir=fi[--hi],fi[hi]=null}var ni=null,ii=null,Qt=!1,Ci=null;function Kd(n,i){var a=gi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Yd(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ni=n,ii=wr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ni=n,ii=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=$r!==null?{id:ir,overflow:rr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=gi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ni=n,ii=null,!0):!1;default:return!1}}function Qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Zc(n){if(Qt){var i=ii;if(i){var a=i;if(!Yd(n,i)){if(Qc(n))throw Error(t(418));i=wr(a.nextSibling);var u=ni;i&&Yd(n,i)?Kd(u,a):(n.flags=n.flags&-4097|2,Qt=!1,ni=n)}}else{if(Qc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qt=!1,ni=n}}}function Qd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ni=n}function Va(n){if(n!==ni)return!1;if(!Qt)return Qd(n),Qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Vc(n.type,n.memoizedProps)),i&&(i=ii)){if(Qc(n))throw Zd(),Error(t(418));for(;i;)Kd(n,i),i=wr(i.nextSibling)}if(Qd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ii=wr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ii=null}}else ii=ni?wr(n.stateNode.nextSibling):null;return!0}function Zd(){for(var n=ii;n;)n=wr(n.nextSibling)}function Us(){ii=ni=null,Qt=!1}function Jc(n){Ci===null?Ci=[n]:Ci.push(n)}var fx=P.ReactCurrentBatchConfig;function Bo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var p=u,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(T){var k=p.refs;T===null?delete k[v]:k[v]=T},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ga(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Jd(n){var i=n._init;return i(n._payload)}function $d(n){function i(se,J){if(n){var fe=se.deletions;fe===null?(se.deletions=[J],se.flags|=16):fe.push(J)}}function a(se,J){if(!n)return null;for(;J!==null;)i(se,J),J=J.sibling;return null}function u(se,J){for(se=new Map;J!==null;)J.key!==null?se.set(J.key,J):se.set(J.index,J),J=J.sibling;return se}function p(se,J){return se=Fr(se,J),se.index=0,se.sibling=null,se}function v(se,J,fe){return se.index=fe,n?(fe=se.alternate,fe!==null?(fe=fe.index,fe<J?(se.flags|=2,J):fe):(se.flags|=2,J)):(se.flags|=1048576,J)}function T(se){return n&&se.alternate===null&&(se.flags|=2),se}function k(se,J,fe,Ue){return J===null||J.tag!==6?(J=Gu(fe,se.mode,Ue),J.return=se,J):(J=p(J,fe),J.return=se,J)}function q(se,J,fe,Ue){var at=fe.type;return at===z?Re(se,J,fe.props.children,Ue,fe.key):J!==null&&(J.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===te&&Jd(at)===J.type)?(Ue=p(J,fe.props),Ue.ref=Bo(se,J,fe),Ue.return=se,Ue):(Ue=dl(fe.type,fe.key,fe.props,null,se.mode,Ue),Ue.ref=Bo(se,J,fe),Ue.return=se,Ue)}function de(se,J,fe,Ue){return J===null||J.tag!==4||J.stateNode.containerInfo!==fe.containerInfo||J.stateNode.implementation!==fe.implementation?(J=Wu(fe,se.mode,Ue),J.return=se,J):(J=p(J,fe.children||[]),J.return=se,J)}function Re(se,J,fe,Ue,at){return J===null||J.tag!==7?(J=ls(fe,se.mode,Ue,at),J.return=se,J):(J=p(J,fe),J.return=se,J)}function Pe(se,J,fe){if(typeof J=="string"&&J!==""||typeof J=="number")return J=Gu(""+J,se.mode,fe),J.return=se,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case V:return fe=dl(J.type,J.key,J.props,null,se.mode,fe),fe.ref=Bo(se,null,J),fe.return=se,fe;case I:return J=Wu(J,se.mode,fe),J.return=se,J;case te:var Ue=J._init;return Pe(se,Ue(J._payload),fe)}if(U(J)||O(J))return J=ls(J,se.mode,fe,null),J.return=se,J;Ga(se,J)}return null}function Ee(se,J,fe,Ue){var at=J!==null?J.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return at!==null?null:k(se,J,""+fe,Ue);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case V:return fe.key===at?q(se,J,fe,Ue):null;case I:return fe.key===at?de(se,J,fe,Ue):null;case te:return at=fe._init,Ee(se,J,at(fe._payload),Ue)}if(U(fe)||O(fe))return at!==null?null:Re(se,J,fe,Ue,null);Ga(se,fe)}return null}function Je(se,J,fe,Ue,at){if(typeof Ue=="string"&&Ue!==""||typeof Ue=="number")return se=se.get(fe)||null,k(J,se,""+Ue,at);if(typeof Ue=="object"&&Ue!==null){switch(Ue.$$typeof){case V:return se=se.get(Ue.key===null?fe:Ue.key)||null,q(J,se,Ue,at);case I:return se=se.get(Ue.key===null?fe:Ue.key)||null,de(J,se,Ue,at);case te:var mt=Ue._init;return Je(se,J,fe,mt(Ue._payload),at)}if(U(Ue)||O(Ue))return se=se.get(fe)||null,Re(J,se,Ue,at,null);Ga(J,Ue)}return null}function rt(se,J,fe,Ue){for(var at=null,mt=null,gt=J,yt=J=0,_n=null;gt!==null&&yt<fe.length;yt++){gt.index>yt?(_n=gt,gt=null):_n=gt.sibling;var Ut=Ee(se,gt,fe[yt],Ue);if(Ut===null){gt===null&&(gt=_n);break}n&&gt&&Ut.alternate===null&&i(se,gt),J=v(Ut,J,yt),mt===null?at=Ut:mt.sibling=Ut,mt=Ut,gt=_n}if(yt===fe.length)return a(se,gt),Qt&&es(se,yt),at;if(gt===null){for(;yt<fe.length;yt++)gt=Pe(se,fe[yt],Ue),gt!==null&&(J=v(gt,J,yt),mt===null?at=gt:mt.sibling=gt,mt=gt);return Qt&&es(se,yt),at}for(gt=u(se,gt);yt<fe.length;yt++)_n=Je(gt,se,yt,fe[yt],Ue),_n!==null&&(n&&_n.alternate!==null&&gt.delete(_n.key===null?yt:_n.key),J=v(_n,J,yt),mt===null?at=_n:mt.sibling=_n,mt=_n);return n&&gt.forEach(function(Or){return i(se,Or)}),Qt&&es(se,yt),at}function st(se,J,fe,Ue){var at=O(fe);if(typeof at!="function")throw Error(t(150));if(fe=at.call(fe),fe==null)throw Error(t(151));for(var mt=at=null,gt=J,yt=J=0,_n=null,Ut=fe.next();gt!==null&&!Ut.done;yt++,Ut=fe.next()){gt.index>yt?(_n=gt,gt=null):_n=gt.sibling;var Or=Ee(se,gt,Ut.value,Ue);if(Or===null){gt===null&&(gt=_n);break}n&&gt&&Or.alternate===null&&i(se,gt),J=v(Or,J,yt),mt===null?at=Or:mt.sibling=Or,mt=Or,gt=_n}if(Ut.done)return a(se,gt),Qt&&es(se,yt),at;if(gt===null){for(;!Ut.done;yt++,Ut=fe.next())Ut=Pe(se,Ut.value,Ue),Ut!==null&&(J=v(Ut,J,yt),mt===null?at=Ut:mt.sibling=Ut,mt=Ut);return Qt&&es(se,yt),at}for(gt=u(se,gt);!Ut.done;yt++,Ut=fe.next())Ut=Je(gt,se,yt,Ut.value,Ue),Ut!==null&&(n&&Ut.alternate!==null&&gt.delete(Ut.key===null?yt:Ut.key),J=v(Ut,J,yt),mt===null?at=Ut:mt.sibling=Ut,mt=Ut);return n&&gt.forEach(function(Wx){return i(se,Wx)}),Qt&&es(se,yt),at}function sn(se,J,fe,Ue){if(typeof fe=="object"&&fe!==null&&fe.type===z&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case V:e:{for(var at=fe.key,mt=J;mt!==null;){if(mt.key===at){if(at=fe.type,at===z){if(mt.tag===7){a(se,mt.sibling),J=p(mt,fe.props.children),J.return=se,se=J;break e}}else if(mt.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===te&&Jd(at)===mt.type){a(se,mt.sibling),J=p(mt,fe.props),J.ref=Bo(se,mt,fe),J.return=se,se=J;break e}a(se,mt);break}else i(se,mt);mt=mt.sibling}fe.type===z?(J=ls(fe.props.children,se.mode,Ue,fe.key),J.return=se,se=J):(Ue=dl(fe.type,fe.key,fe.props,null,se.mode,Ue),Ue.ref=Bo(se,J,fe),Ue.return=se,se=Ue)}return T(se);case I:e:{for(mt=fe.key;J!==null;){if(J.key===mt)if(J.tag===4&&J.stateNode.containerInfo===fe.containerInfo&&J.stateNode.implementation===fe.implementation){a(se,J.sibling),J=p(J,fe.children||[]),J.return=se,se=J;break e}else{a(se,J);break}else i(se,J);J=J.sibling}J=Wu(fe,se.mode,Ue),J.return=se,se=J}return T(se);case te:return mt=fe._init,sn(se,J,mt(fe._payload),Ue)}if(U(fe))return rt(se,J,fe,Ue);if(O(fe))return st(se,J,fe,Ue);Ga(se,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,J!==null&&J.tag===6?(a(se,J.sibling),J=p(J,fe),J.return=se,se=J):(a(se,J),J=Gu(fe,se.mode,Ue),J.return=se,se=J),T(se)):a(se,J)}return sn}var Fs=$d(!0),ep=$d(!1),Wa=Tr(null),Xa=null,Os=null,$c=null;function eu(){$c=Os=Xa=null}function tu(n){var i=Wa.current;Yt(Wa),n._currentValue=i}function nu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function ks(n,i){Xa=n,$c=Os=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Kn=!0),n.firstContext=null)}function di(n){var i=n._currentValue;if($c!==n)if(n={context:n,memoizedValue:i,next:null},Os===null){if(Xa===null)throw Error(t(308));Os=n,Xa.dependencies={lanes:0,firstContext:n}}else Os=Os.next=n;return i}var ts=null;function iu(n){ts===null?ts=[n]:ts.push(n)}function tp(n,i,a,u){var p=i.interleaved;return p===null?(a.next=a,iu(i)):(a.next=p.next,p.next=a),i.interleaved=a,sr(n,u)}function sr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var br=!1;function ru(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function np(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function or(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Pr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(It&2)!==0){var p=u.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),u.pending=i,sr(n,a)}return p=u.interleaved,p===null?(i.next=i,iu(u)):(i.next=p.next,p.next=i),u.interleaved=i,sr(n,a)}function ja(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Sn(n,a)}}function ip(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?p=v=T:v=v.next=T,a=a.next}while(a!==null);v===null?p=v=i:v=v.next=i}else p=v=i;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function qa(n,i,a,u){var p=n.updateQueue;br=!1;var v=p.firstBaseUpdate,T=p.lastBaseUpdate,k=p.shared.pending;if(k!==null){p.shared.pending=null;var q=k,de=q.next;q.next=null,T===null?v=de:T.next=de,T=q;var Re=n.alternate;Re!==null&&(Re=Re.updateQueue,k=Re.lastBaseUpdate,k!==T&&(k===null?Re.firstBaseUpdate=de:k.next=de,Re.lastBaseUpdate=q))}if(v!==null){var Pe=p.baseState;T=0,Re=de=q=null,k=v;do{var Ee=k.lane,Je=k.eventTime;if((u&Ee)===Ee){Re!==null&&(Re=Re.next={eventTime:Je,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var rt=n,st=k;switch(Ee=i,Je=a,st.tag){case 1:if(rt=st.payload,typeof rt=="function"){Pe=rt.call(Je,Pe,Ee);break e}Pe=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=st.payload,Ee=typeof rt=="function"?rt.call(Je,Pe,Ee):rt,Ee==null)break e;Pe=ie({},Pe,Ee);break e;case 2:br=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,Ee=p.effects,Ee===null?p.effects=[k]:Ee.push(k))}else Je={eventTime:Je,lane:Ee,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Re===null?(de=Re=Je,q=Pe):Re=Re.next=Je,T|=Ee;if(k=k.next,k===null){if(k=p.shared.pending,k===null)break;Ee=k,k=Ee.next,Ee.next=null,p.lastBaseUpdate=Ee,p.shared.pending=null}}while(!0);if(Re===null&&(q=Pe),p.baseState=q,p.firstBaseUpdate=de,p.lastBaseUpdate=Re,i=p.shared.interleaved,i!==null){p=i;do T|=p.lane,p=p.next;while(p!==i)}else v===null&&(p.shared.lanes=0);rs|=T,n.lanes=T,n.memoizedState=Pe}}function rp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var zo={},Hi=Tr(zo),Ho=Tr(zo),Vo=Tr(zo);function ns(n){if(n===zo)throw Error(t(174));return n}function su(n,i){switch(Xt(Vo,i),Xt(Ho,n),Xt(Hi,zo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:A(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=A(i,n)}Yt(Hi),Xt(Hi,i)}function Bs(){Yt(Hi),Yt(Ho),Yt(Vo)}function sp(n){ns(Vo.current);var i=ns(Hi.current),a=A(i,n.type);i!==a&&(Xt(Ho,n),Xt(Hi,a))}function ou(n){Ho.current===n&&(Yt(Hi),Yt(Ho))}var Jt=Tr(0);function Ka(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var au=[];function lu(){for(var n=0;n<au.length;n++)au[n]._workInProgressVersionPrimary=null;au.length=0}var Ya=P.ReactCurrentDispatcher,cu=P.ReactCurrentBatchConfig,is=0,$t=null,fn=null,vn=null,Qa=!1,Go=!1,Wo=0,hx=0;function Rn(){throw Error(t(321))}function uu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ti(n[a],i[a]))return!1;return!0}function fu(n,i,a,u,p,v){if(is=v,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ya.current=n===null||n.memoizedState===null?gx:vx,n=a(u,p),Go){v=0;do{if(Go=!1,Wo=0,25<=v)throw Error(t(301));v+=1,vn=fn=null,i.updateQueue=null,Ya.current=xx,n=a(u,p)}while(Go)}if(Ya.current=$a,i=fn!==null&&fn.next!==null,is=0,vn=fn=$t=null,Qa=!1,i)throw Error(t(300));return n}function hu(){var n=Wo!==0;return Wo=0,n}function Vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?$t.memoizedState=vn=n:vn=vn.next=n,vn}function pi(){if(fn===null){var n=$t.alternate;n=n!==null?n.memoizedState:null}else n=fn.next;var i=vn===null?$t.memoizedState:vn.next;if(i!==null)vn=i,fn=n;else{if(n===null)throw Error(t(310));fn=n,n={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},vn===null?$t.memoizedState=vn=n:vn=vn.next=n}return vn}function Xo(n,i){return typeof i=="function"?i(n):i}function du(n){var i=pi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=fn,p=u.baseQueue,v=a.pending;if(v!==null){if(p!==null){var T=p.next;p.next=v.next,v.next=T}u.baseQueue=p=v,a.pending=null}if(p!==null){v=p.next,u=u.baseState;var k=T=null,q=null,de=v;do{var Re=de.lane;if((is&Re)===Re)q!==null&&(q=q.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),u=de.hasEagerState?de.eagerState:n(u,de.action);else{var Pe={lane:Re,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};q===null?(k=q=Pe,T=u):q=q.next=Pe,$t.lanes|=Re,rs|=Re}de=de.next}while(de!==null&&de!==v);q===null?T=u:q.next=k,Ti(u,i.memoizedState)||(Kn=!0),i.memoizedState=u,i.baseState=T,i.baseQueue=q,a.lastRenderedState=u}if(n=a.interleaved,n!==null){p=n;do v=p.lane,$t.lanes|=v,rs|=v,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function pu(n){var i=pi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,p=a.pending,v=i.memoizedState;if(p!==null){a.pending=null;var T=p=p.next;do v=n(v,T.action),T=T.next;while(T!==p);Ti(v,i.memoizedState)||(Kn=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,u]}function op(){}function ap(n,i){var a=$t,u=pi(),p=i(),v=!Ti(u.memoizedState,p);if(v&&(u.memoizedState=p,Kn=!0),u=u.queue,mu(up.bind(null,a,u,n),[n]),u.getSnapshot!==i||v||vn!==null&&vn.memoizedState.tag&1){if(a.flags|=2048,jo(9,cp.bind(null,a,u,p,i),void 0,null),xn===null)throw Error(t(349));(is&30)!==0||lp(a,i,p)}return p}function lp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function cp(n,i,a,u){i.value=a,i.getSnapshot=u,fp(i)&&hp(n)}function up(n,i,a){return a(function(){fp(i)&&hp(n)})}function fp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ti(n,a)}catch{return!0}}function hp(n){var i=sr(n,1);i!==null&&Li(i,n,1,-1)}function dp(n){var i=Vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:n},i.queue=n,n=n.dispatch=mx.bind(null,$t,n),[i.memoizedState,n]}function jo(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function pp(){return pi().memoizedState}function Za(n,i,a,u){var p=Vi();$t.flags|=n,p.memoizedState=jo(1|i,a,void 0,u===void 0?null:u)}function Ja(n,i,a,u){var p=pi();u=u===void 0?null:u;var v=void 0;if(fn!==null){var T=fn.memoizedState;if(v=T.destroy,u!==null&&uu(u,T.deps)){p.memoizedState=jo(i,a,v,u);return}}$t.flags|=n,p.memoizedState=jo(1|i,a,v,u)}function mp(n,i){return Za(8390656,8,n,i)}function mu(n,i){return Ja(2048,8,n,i)}function gp(n,i){return Ja(4,2,n,i)}function vp(n,i){return Ja(4,4,n,i)}function xp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function _p(n,i,a){return a=a!=null?a.concat([n]):null,Ja(4,4,xp.bind(null,i,n),a)}function gu(){}function yp(n,i){var a=pi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&uu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Mp(n,i){var a=pi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&uu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Sp(n,i,a){return(is&21)===0?(n.baseState&&(n.baseState=!1,Kn=!0),n.memoizedState=a):(Ti(a,i)||(a=Ze(),$t.lanes|=a,rs|=a,n.baseState=!0),i)}function dx(n,i){var a=St;St=a!==0&&4>a?a:4,n(!0);var u=cu.transition;cu.transition={};try{n(!1),i()}finally{St=a,cu.transition=u}}function Ap(){return pi().memoizedState}function px(n,i,a){var u=Dr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Ep(n))wp(i,a);else if(a=tp(n,i,a,u),a!==null){var p=Vn();Li(a,n,u,p),Tp(a,i,u)}}function mx(n,i,a){var u=Dr(n),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ep(n))wp(i,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var T=i.lastRenderedState,k=v(T,a);if(p.hasEagerState=!0,p.eagerState=k,Ti(k,T)){var q=i.interleaved;q===null?(p.next=p,iu(i)):(p.next=q.next,q.next=p),i.interleaved=p;return}}catch{}finally{}a=tp(n,i,p,u),a!==null&&(p=Vn(),Li(a,n,u,p),Tp(a,i,u))}}function Ep(n){var i=n.alternate;return n===$t||i!==null&&i===$t}function wp(n,i){Go=Qa=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Tp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Sn(n,a)}}var $a={readContext:di,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},gx={readContext:di,useCallback:function(n,i){return Vi().memoizedState=[n,i===void 0?null:i],n},useContext:di,useEffect:mp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Za(4194308,4,xp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Za(4194308,4,n,i)},useInsertionEffect:function(n,i){return Za(4,2,n,i)},useMemo:function(n,i){var a=Vi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Vi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=px.bind(null,$t,n),[u.memoizedState,n]},useRef:function(n){var i=Vi();return n={current:n},i.memoizedState=n},useState:dp,useDebugValue:gu,useDeferredValue:function(n){return Vi().memoizedState=n},useTransition:function(){var n=dp(!1),i=n[0];return n=dx.bind(null,n[1]),Vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=$t,p=Vi();if(Qt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),xn===null)throw Error(t(349));(is&30)!==0||lp(u,i,a)}p.memoizedState=a;var v={value:a,getSnapshot:i};return p.queue=v,mp(up.bind(null,u,v,n),[n]),u.flags|=2048,jo(9,cp.bind(null,u,v,a,i),void 0,null),a},useId:function(){var n=Vi(),i=xn.identifierPrefix;if(Qt){var a=rr,u=ir;a=(u&~(1<<32-Le(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Wo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=hx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},vx={readContext:di,useCallback:yp,useContext:di,useEffect:mu,useImperativeHandle:_p,useInsertionEffect:gp,useLayoutEffect:vp,useMemo:Mp,useReducer:du,useRef:pp,useState:function(){return du(Xo)},useDebugValue:gu,useDeferredValue:function(n){var i=pi();return Sp(i,fn.memoizedState,n)},useTransition:function(){var n=du(Xo)[0],i=pi().memoizedState;return[n,i]},useMutableSource:op,useSyncExternalStore:ap,useId:Ap,unstable_isNewReconciler:!1},xx={readContext:di,useCallback:yp,useContext:di,useEffect:mu,useImperativeHandle:_p,useInsertionEffect:gp,useLayoutEffect:vp,useMemo:Mp,useReducer:pu,useRef:pp,useState:function(){return pu(Xo)},useDebugValue:gu,useDeferredValue:function(n){var i=pi();return fn===null?i.memoizedState=n:Sp(i,fn.memoizedState,n)},useTransition:function(){var n=pu(Xo)[0],i=pi().memoizedState;return[n,i]},useMutableSource:op,useSyncExternalStore:ap,useId:Ap,unstable_isNewReconciler:!1};function Ri(n,i){if(n&&n.defaultProps){i=ie({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function vu(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:ie({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var el={isMounted:function(n){return(n=n._reactInternals)?ln(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Vn(),p=Dr(n),v=or(u,p);v.payload=i,a!=null&&(v.callback=a),i=Pr(n,v,p),i!==null&&(Li(i,n,p,u),ja(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Vn(),p=Dr(n),v=or(u,p);v.tag=1,v.payload=i,a!=null&&(v.callback=a),i=Pr(n,v,p),i!==null&&(Li(i,n,p,u),ja(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Vn(),u=Dr(n),p=or(a,u);p.tag=2,i!=null&&(p.callback=i),i=Pr(n,p,u),i!==null&&(Li(i,n,u,a),ja(i,n,u))}};function Cp(n,i,a,u,p,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,T):i.prototype&&i.prototype.isPureReactComponent?!Io(a,u)||!Io(p,v):!0}function Rp(n,i,a){var u=!1,p=Cr,v=i.contextType;return typeof v=="object"&&v!==null?v=di(v):(p=qn(i)?Jr:Cn.current,u=i.contextTypes,v=(u=u!=null)?Is(n,p):Cr),i=new i(a,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=el,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),i}function bp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&el.enqueueReplaceState(i,i.state,null)}function xu(n,i,a,u){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},ru(n);var v=i.contextType;typeof v=="object"&&v!==null?p.context=di(v):(v=qn(i)?Jr:Cn.current,p.context=Is(n,v)),p.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(vu(n,i,v,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&el.enqueueReplaceState(p,p.state,null),qa(n,a,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function zs(n,i){try{var a="",u=i;do a+=ve(u),u=u.return;while(u);var p=a}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:p,digest:null}}function _u(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function yu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var _x=typeof WeakMap=="function"?WeakMap:Map;function Pp(n,i,a){a=or(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){al||(al=!0,Uu=u),yu(n,i)},a}function Lp(n,i,a){a=or(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=i.value;a.payload=function(){return u(p)},a.callback=function(){yu(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){yu(n,i),typeof u!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Ip(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new _x;var p=new Set;u.set(i,p)}else p=u.get(i),p===void 0&&(p=new Set,u.set(i,p));p.has(a)||(p.add(a),n=Nx.bind(null,n,i,a),i.then(n,n))}function Np(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Dp(n,i,a,u,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=or(-1,1),i.tag=2,Pr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var yx=P.ReactCurrentOwner,Kn=!1;function Hn(n,i,a,u){i.child=n===null?ep(i,null,a,u):Fs(i,n.child,a,u)}function Up(n,i,a,u,p){a=a.render;var v=i.ref;return ks(i,p),u=fu(n,i,a,u,v,p),a=hu(),n!==null&&!Kn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,ar(n,i,p)):(Qt&&a&&Kc(i),i.flags|=1,Hn(n,i,u,p),i.child)}function Fp(n,i,a,u,p){if(n===null){var v=a.type;return typeof v=="function"&&!Vu(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=v,Op(n,i,v,u,p)):(n=dl(a.type,null,u,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&p)===0){var T=v.memoizedProps;if(a=a.compare,a=a!==null?a:Io,a(T,u)&&n.ref===i.ref)return ar(n,i,p)}return i.flags|=1,n=Fr(v,u),n.ref=i.ref,n.return=i,i.child=n}function Op(n,i,a,u,p){if(n!==null){var v=n.memoizedProps;if(Io(v,u)&&n.ref===i.ref)if(Kn=!1,i.pendingProps=u=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Kn=!0);else return i.lanes=n.lanes,ar(n,i,p)}return Mu(n,i,a,u,p)}function kp(n,i,a){var u=i.pendingProps,p=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(Vs,ri),ri|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Xt(Vs,ri),ri|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:a,Xt(Vs,ri),ri|=u}else v!==null?(u=v.baseLanes|a,i.memoizedState=null):u=a,Xt(Vs,ri),ri|=u;return Hn(n,i,p,a),i.child}function Bp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Mu(n,i,a,u,p){var v=qn(a)?Jr:Cn.current;return v=Is(i,v),ks(i,p),a=fu(n,i,a,u,v,p),u=hu(),n!==null&&!Kn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,ar(n,i,p)):(Qt&&u&&Kc(i),i.flags|=1,Hn(n,i,a,p),i.child)}function zp(n,i,a,u,p){if(qn(a)){var v=!0;ka(i)}else v=!1;if(ks(i,p),i.stateNode===null)nl(n,i),Rp(i,a,u),xu(i,a,u,p),u=!0;else if(n===null){var T=i.stateNode,k=i.memoizedProps;T.props=k;var q=T.context,de=a.contextType;typeof de=="object"&&de!==null?de=di(de):(de=qn(a)?Jr:Cn.current,de=Is(i,de));var Re=a.getDerivedStateFromProps,Pe=typeof Re=="function"||typeof T.getSnapshotBeforeUpdate=="function";Pe||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==u||q!==de)&&bp(i,T,u,de),br=!1;var Ee=i.memoizedState;T.state=Ee,qa(i,u,T,p),q=i.memoizedState,k!==u||Ee!==q||jn.current||br?(typeof Re=="function"&&(vu(i,a,Re,u),q=i.memoizedState),(k=br||Cp(i,a,k,u,Ee,q,de))?(Pe||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=q),T.props=u,T.state=q,T.context=de,u=k):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{T=i.stateNode,np(n,i),k=i.memoizedProps,de=i.type===i.elementType?k:Ri(i.type,k),T.props=de,Pe=i.pendingProps,Ee=T.context,q=a.contextType,typeof q=="object"&&q!==null?q=di(q):(q=qn(a)?Jr:Cn.current,q=Is(i,q));var Je=a.getDerivedStateFromProps;(Re=typeof Je=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==Pe||Ee!==q)&&bp(i,T,u,q),br=!1,Ee=i.memoizedState,T.state=Ee,qa(i,u,T,p);var rt=i.memoizedState;k!==Pe||Ee!==rt||jn.current||br?(typeof Je=="function"&&(vu(i,a,Je,u),rt=i.memoizedState),(de=br||Cp(i,a,de,u,Ee,rt,q)||!1)?(Re||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,rt,q),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,rt,q)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||k===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=rt),T.props=u,T.state=rt,T.context=q,u=de):(typeof T.componentDidUpdate!="function"||k===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=1024),u=!1)}return Su(n,i,a,u,v,p)}function Su(n,i,a,u,p,v){Bp(n,i);var T=(i.flags&128)!==0;if(!u&&!T)return p&&Xd(i,a,!1),ar(n,i,v);u=i.stateNode,yx.current=i;var k=T&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&T?(i.child=Fs(i,n.child,null,v),i.child=Fs(i,null,k,v)):Hn(n,i,k,v),i.memoizedState=u.state,p&&Xd(i,a,!0),i.child}function Hp(n){var i=n.stateNode;i.pendingContext?Gd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Gd(n,i.context,!1),su(n,i.containerInfo)}function Vp(n,i,a,u,p){return Us(),Jc(p),i.flags|=256,Hn(n,i,a,u),i.child}var Au={dehydrated:null,treeContext:null,retryLane:0};function Eu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Gp(n,i,a){var u=i.pendingProps,p=Jt.current,v=!1,T=(i.flags&128)!==0,k;if((k=T)||(k=n!==null&&n.memoizedState===null?!1:(p&2)!==0),k?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Xt(Jt,p&1),n===null)return Zc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=u.children,n=u.fallback,v?(u=i.mode,v=i.child,T={mode:"hidden",children:T},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=pl(T,u,0,null),n=ls(n,u,a,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=Eu(a),i.memoizedState=Au,n):wu(i,T));if(p=n.memoizedState,p!==null&&(k=p.dehydrated,k!==null))return Mx(n,i,T,u,k,p,a);if(v){v=u.fallback,T=i.mode,p=n.child,k=p.sibling;var q={mode:"hidden",children:u.children};return(T&1)===0&&i.child!==p?(u=i.child,u.childLanes=0,u.pendingProps=q,i.deletions=null):(u=Fr(p,q),u.subtreeFlags=p.subtreeFlags&14680064),k!==null?v=Fr(k,v):(v=ls(v,T,a,null),v.flags|=2),v.return=i,u.return=i,u.sibling=v,i.child=u,u=v,v=i.child,T=n.child.memoizedState,T=T===null?Eu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~a,i.memoizedState=Au,u}return v=n.child,n=v.sibling,u=Fr(v,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function wu(n,i){return i=pl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function tl(n,i,a,u){return u!==null&&Jc(u),Fs(i,n.child,null,a),n=wu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Mx(n,i,a,u,p,v,T){if(a)return i.flags&256?(i.flags&=-257,u=_u(Error(t(422))),tl(n,i,T,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=u.fallback,p=i.mode,u=pl({mode:"visible",children:u.children},p,0,null),v=ls(v,p,T,null),v.flags|=2,u.return=i,v.return=i,u.sibling=v,i.child=u,(i.mode&1)!==0&&Fs(i,n.child,null,T),i.child.memoizedState=Eu(T),i.memoizedState=Au,v);if((i.mode&1)===0)return tl(n,i,T,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var k=u.dgst;return u=k,v=Error(t(419)),u=_u(v,u,void 0),tl(n,i,T,u)}if(k=(T&n.childLanes)!==0,Kn||k){if(u=xn,u!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|T))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,sr(n,p),Li(u,n,p,-1))}return Hu(),u=_u(Error(t(421))),tl(n,i,T,u)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=Dx.bind(null,n),p._reactRetry=i,null):(n=v.treeContext,ii=wr(p.nextSibling),ni=i,Qt=!0,Ci=null,n!==null&&(fi[hi++]=ir,fi[hi++]=rr,fi[hi++]=$r,ir=n.id,rr=n.overflow,$r=i),i=wu(i,u.children),i.flags|=4096,i)}function Wp(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),nu(n.return,i,a)}function Tu(n,i,a,u,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=a,v.tailMode=p)}function Xp(n,i,a){var u=i.pendingProps,p=u.revealOrder,v=u.tail;if(Hn(n,i,u.children,a),u=Jt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Wp(n,a,i);else if(n.tag===19)Wp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Xt(Jt,u),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&Ka(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),Tu(i,!1,p,a,v);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&Ka(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Tu(i,!0,a,null,v);break;case"together":Tu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function nl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ar(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),rs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Fr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Fr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Sx(n,i,a){switch(i.tag){case 3:Hp(i),Us();break;case 5:sp(i);break;case 1:qn(i.type)&&ka(i);break;case 4:su(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,p=i.memoizedProps.value;Xt(Wa,u._currentValue),u._currentValue=p;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Xt(Jt,Jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Gp(n,i,a):(Xt(Jt,Jt.current&1),n=ar(n,i,a),n!==null?n.sibling:null);Xt(Jt,Jt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Xp(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Xt(Jt,Jt.current),u)break;return null;case 22:case 23:return i.lanes=0,kp(n,i,a)}return ar(n,i,a)}var jp,Cu,qp,Kp;jp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Cu=function(){},qp=function(n,i,a,u){var p=n.memoizedProps;if(p!==u){n=i.stateNode,ns(Hi.current);var v=null;switch(a){case"input":p=ct(n,p),u=ct(n,u),v=[];break;case"select":p=ie({},p,{value:void 0}),u=ie({},u,{value:void 0}),v=[];break;case"textarea":p=He(n,p),u=He(n,u),v=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ua)}Xe(a,u);var T;a=null;for(de in p)if(!u.hasOwnProperty(de)&&p.hasOwnProperty(de)&&p[de]!=null)if(de==="style"){var k=p[de];for(T in k)k.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(o.hasOwnProperty(de)?v||(v=[]):(v=v||[]).push(de,null));for(de in u){var q=u[de];if(k=p!=null?p[de]:void 0,u.hasOwnProperty(de)&&q!==k&&(q!=null||k!=null))if(de==="style")if(k){for(T in k)!k.hasOwnProperty(T)||q&&q.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in q)q.hasOwnProperty(T)&&k[T]!==q[T]&&(a||(a={}),a[T]=q[T])}else a||(v||(v=[]),v.push(de,a)),a=q;else de==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,k=k?k.__html:void 0,q!=null&&k!==q&&(v=v||[]).push(de,q)):de==="children"?typeof q!="string"&&typeof q!="number"||(v=v||[]).push(de,""+q):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(o.hasOwnProperty(de)?(q!=null&&de==="onScroll"&&Kt("scroll",n),v||k===q||(v=[])):(v=v||[]).push(de,q))}a&&(v=v||[]).push("style",a);var de=v;(i.updateQueue=de)&&(i.flags|=4)}},Kp=function(n,i,a,u){a!==u&&(i.flags|=4)};function qo(n,i){if(!Qt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function bn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Ax(n,i,a){var u=i.pendingProps;switch(Yc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(i),null;case 1:return qn(i.type)&&Oa(),bn(i),null;case 3:return u=i.stateNode,Bs(),Yt(jn),Yt(Cn),lu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Va(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ci!==null&&(ku(Ci),Ci=null))),Cu(n,i),bn(i),null;case 5:ou(i);var p=ns(Vo.current);if(a=i.type,n!==null&&i.stateNode!=null)qp(n,i,a,u,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return bn(i),null}if(n=ns(Hi.current),Va(i)){u=i.stateNode,a=i.type;var v=i.memoizedProps;switch(u[zi]=i,u[Oo]=v,n=(i.mode&1)!==0,a){case"dialog":Kt("cancel",u),Kt("close",u);break;case"iframe":case"object":case"embed":Kt("load",u);break;case"video":case"audio":for(p=0;p<Do.length;p++)Kt(Do[p],u);break;case"source":Kt("error",u);break;case"img":case"image":case"link":Kt("error",u),Kt("load",u);break;case"details":Kt("toggle",u);break;case"input":ke(u,v),Kt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},Kt("invalid",u);break;case"textarea":lt(u,v),Kt("invalid",u)}Xe(a,v),p=null;for(var T in v)if(v.hasOwnProperty(T)){var k=v[T];T==="children"?typeof k=="string"?u.textContent!==k&&(v.suppressHydrationWarning!==!0&&Da(u.textContent,k,n),p=["children",k]):typeof k=="number"&&u.textContent!==""+k&&(v.suppressHydrationWarning!==!0&&Da(u.textContent,k,n),p=["children",""+k]):o.hasOwnProperty(T)&&k!=null&&T==="onScroll"&&Kt("scroll",u)}switch(a){case"input":Ne(u),ut(u,v,!0);break;case"textarea":Ne(u),_t(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=Ua)}u=p,i.updateQueue=u,u!==null&&(i.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=b(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(a,{is:u.is}):(n=T.createElement(a),a==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,a),n[zi]=i,n[Oo]=u,jp(n,i,!1,!1),i.stateNode=n;e:{switch(T=De(a,u),a){case"dialog":Kt("cancel",n),Kt("close",n),p=u;break;case"iframe":case"object":case"embed":Kt("load",n),p=u;break;case"video":case"audio":for(p=0;p<Do.length;p++)Kt(Do[p],n);p=u;break;case"source":Kt("error",n),p=u;break;case"img":case"image":case"link":Kt("error",n),Kt("load",n),p=u;break;case"details":Kt("toggle",n),p=u;break;case"input":ke(n,u),p=ct(n,u),Kt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=ie({},u,{value:void 0}),Kt("invalid",n);break;case"textarea":lt(n,u),p=He(n,u),Kt("invalid",n);break;default:p=u}Xe(a,p),k=p;for(v in k)if(k.hasOwnProperty(v)){var q=k[v];v==="style"?ge(n,q):v==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&me(n,q)):v==="children"?typeof q=="string"?(a!=="textarea"||q!=="")&&Me(n,q):typeof q=="number"&&Me(n,""+q):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?q!=null&&v==="onScroll"&&Kt("scroll",n):q!=null&&L(n,v,q,T))}switch(a){case"input":Ne(n),ut(n,u,!1);break;case"textarea":Ne(n),_t(n);break;case"option":u.value!=null&&n.setAttribute("value",""+H(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?ot(n,!!u.multiple,v,!1):u.defaultValue!=null&&ot(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Ua)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return bn(i),null;case 6:if(n&&i.stateNode!=null)Kp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=ns(Vo.current),ns(Hi.current),Va(i)){if(u=i.stateNode,a=i.memoizedProps,u[zi]=i,(v=u.nodeValue!==a)&&(n=ni,n!==null))switch(n.tag){case 3:Da(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Da(u.nodeValue,a,(n.mode&1)!==0)}v&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[zi]=i,i.stateNode=u}return bn(i),null;case 13:if(Yt(Jt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qt&&ii!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Zd(),Us(),i.flags|=98560,v=!1;else if(v=Va(i),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[zi]=i}else Us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bn(i),v=!1}else Ci!==null&&(ku(Ci),Ci=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Jt.current&1)!==0?hn===0&&(hn=3):Hu())),i.updateQueue!==null&&(i.flags|=4),bn(i),null);case 4:return Bs(),Cu(n,i),n===null&&Uo(i.stateNode.containerInfo),bn(i),null;case 10:return tu(i.type._context),bn(i),null;case 17:return qn(i.type)&&Oa(),bn(i),null;case 19:if(Yt(Jt),v=i.memoizedState,v===null)return bn(i),null;if(u=(i.flags&128)!==0,T=v.rendering,T===null)if(u)qo(v,!1);else{if(hn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Ka(n),T!==null){for(i.flags|=128,qo(v,!1),u=T.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)v=a,n=u,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Xt(Jt,Jt.current&1|2),i.child}n=n.sibling}v.tail!==null&&jt()>Gs&&(i.flags|=128,u=!0,qo(v,!1),i.lanes=4194304)}else{if(!u)if(n=Ka(T),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),qo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Qt)return bn(i),null}else 2*jt()-v.renderingStartTime>Gs&&a!==1073741824&&(i.flags|=128,u=!0,qo(v,!1),i.lanes=4194304);v.isBackwards?(T.sibling=i.child,i.child=T):(a=v.last,a!==null?a.sibling=T:i.child=T,v.last=T)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=jt(),i.sibling=null,a=Jt.current,Xt(Jt,u?a&1|2:a&1),i):(bn(i),null);case 22:case 23:return zu(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(ri&1073741824)!==0&&(bn(i),i.subtreeFlags&6&&(i.flags|=8192)):bn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Ex(n,i){switch(Yc(i),i.tag){case 1:return qn(i.type)&&Oa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Bs(),Yt(jn),Yt(Cn),lu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ou(i),null;case 13:if(Yt(Jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Us()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Yt(Jt),null;case 4:return Bs(),null;case 10:return tu(i.type._context),null;case 22:case 23:return zu(),null;case 24:return null;default:return null}}var il=!1,Pn=!1,wx=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Hs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){en(n,i,u)}else a.current=null}function Ru(n,i,a){try{a()}catch(u){en(n,i,u)}}var Yp=!1;function Tx(n,i){if(zc=Aa,n=Cd(),Ic(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var T=0,k=-1,q=-1,de=0,Re=0,Pe=n,Ee=null;t:for(;;){for(var Je;Pe!==a||p!==0&&Pe.nodeType!==3||(k=T+p),Pe!==v||u!==0&&Pe.nodeType!==3||(q=T+u),Pe.nodeType===3&&(T+=Pe.nodeValue.length),(Je=Pe.firstChild)!==null;)Ee=Pe,Pe=Je;for(;;){if(Pe===n)break t;if(Ee===a&&++de===p&&(k=T),Ee===v&&++Re===u&&(q=T),(Je=Pe.nextSibling)!==null)break;Pe=Ee,Ee=Pe.parentNode}Pe=Je}a=k===-1||q===-1?null:{start:k,end:q}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hc={focusedElem:n,selectionRange:a},Aa=!1,tt=i;tt!==null;)if(i=tt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,tt=n;else for(;tt!==null;){i=tt;try{var rt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(rt!==null){var st=rt.memoizedProps,sn=rt.memoizedState,se=i.stateNode,J=se.getSnapshotBeforeUpdate(i.elementType===i.type?st:Ri(i.type,st),sn);se.__reactInternalSnapshotBeforeUpdate=J}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ue){en(i,i.return,Ue)}if(n=i.sibling,n!==null){n.return=i.return,tt=n;break}tt=i.return}return rt=Yp,Yp=!1,rt}function Ko(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Ru(i,a,v)}p=p.next}while(p!==u)}}function rl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function bu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Qp(n){var i=n.alternate;i!==null&&(n.alternate=null,Qp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[zi],delete i[Oo],delete i[Xc],delete i[lx],delete i[cx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Zp(n){return n.tag===5||n.tag===3||n.tag===4}function Jp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Zp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Pu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ua));else if(u!==4&&(n=n.child,n!==null))for(Pu(n,i,a),n=n.sibling;n!==null;)Pu(n,i,a),n=n.sibling}function Lu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Lu(n,i,a),n=n.sibling;n!==null;)Lu(n,i,a),n=n.sibling}var An=null,bi=!1;function Lr(n,i,a){for(a=a.child;a!==null;)$p(n,i,a),a=a.sibling}function $p(n,i,a){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(oe,a)}catch{}switch(a.tag){case 5:Pn||Hs(a,i);case 6:var u=An,p=bi;An=null,Lr(n,i,a),An=u,bi=p,An!==null&&(bi?(n=An,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):An.removeChild(a.stateNode));break;case 18:An!==null&&(bi?(n=An,a=a.stateNode,n.nodeType===8?Wc(n.parentNode,a):n.nodeType===1&&Wc(n,a),To(n)):Wc(An,a.stateNode));break;case 4:u=An,p=bi,An=a.stateNode.containerInfo,bi=!0,Lr(n,i,a),An=u,bi=p;break;case 0:case 11:case 14:case 15:if(!Pn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var v=p,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&Ru(a,i,T),p=p.next}while(p!==u)}Lr(n,i,a);break;case 1:if(!Pn&&(Hs(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(k){en(a,i,k)}Lr(n,i,a);break;case 21:Lr(n,i,a);break;case 22:a.mode&1?(Pn=(u=Pn)||a.memoizedState!==null,Lr(n,i,a),Pn=u):Lr(n,i,a);break;default:Lr(n,i,a)}}function em(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new wx),i.forEach(function(u){var p=Ux.bind(null,n,u);a.has(u)||(a.add(u),u.then(p,p))})}}function Pi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var v=n,T=i,k=T;e:for(;k!==null;){switch(k.tag){case 5:An=k.stateNode,bi=!1;break e;case 3:An=k.stateNode.containerInfo,bi=!0;break e;case 4:An=k.stateNode.containerInfo,bi=!0;break e}k=k.return}if(An===null)throw Error(t(160));$p(v,T,p),An=null,bi=!1;var q=p.alternate;q!==null&&(q.return=null),p.return=null}catch(de){en(p,i,de)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)tm(i,n),i=i.sibling}function tm(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Pi(i,n),Gi(n),u&4){try{Ko(3,n,n.return),rl(3,n)}catch(st){en(n,n.return,st)}try{Ko(5,n,n.return)}catch(st){en(n,n.return,st)}}break;case 1:Pi(i,n),Gi(n),u&512&&a!==null&&Hs(a,a.return);break;case 5:if(Pi(i,n),Gi(n),u&512&&a!==null&&Hs(a,a.return),n.flags&32){var p=n.stateNode;try{Me(p,"")}catch(st){en(n,n.return,st)}}if(u&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,T=a!==null?a.memoizedProps:v,k=n.type,q=n.updateQueue;if(n.updateQueue=null,q!==null)try{k==="input"&&v.type==="radio"&&v.name!=null&&je(p,v),De(k,T);var de=De(k,v);for(T=0;T<q.length;T+=2){var Re=q[T],Pe=q[T+1];Re==="style"?ge(p,Pe):Re==="dangerouslySetInnerHTML"?me(p,Pe):Re==="children"?Me(p,Pe):L(p,Re,Pe,de)}switch(k){case"input":Ve(p,v);break;case"textarea":Te(p,v);break;case"select":var Ee=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Je=v.value;Je!=null?ot(p,!!v.multiple,Je,!1):Ee!==!!v.multiple&&(v.defaultValue!=null?ot(p,!!v.multiple,v.defaultValue,!0):ot(p,!!v.multiple,v.multiple?[]:"",!1))}p[Oo]=v}catch(st){en(n,n.return,st)}}break;case 6:if(Pi(i,n),Gi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(st){en(n,n.return,st)}}break;case 3:if(Pi(i,n),Gi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{To(i.containerInfo)}catch(st){en(n,n.return,st)}break;case 4:Pi(i,n),Gi(n);break;case 13:Pi(i,n),Gi(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Du=jt())),u&4&&em(n);break;case 22:if(Re=a!==null&&a.memoizedState!==null,n.mode&1?(Pn=(de=Pn)||Re,Pi(i,n),Pn=de):Pi(i,n),Gi(n),u&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!Re&&(n.mode&1)!==0)for(tt=n,Re=n.child;Re!==null;){for(Pe=tt=Re;tt!==null;){switch(Ee=tt,Je=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:Ko(4,Ee,Ee.return);break;case 1:Hs(Ee,Ee.return);var rt=Ee.stateNode;if(typeof rt.componentWillUnmount=="function"){u=Ee,a=Ee.return;try{i=u,rt.props=i.memoizedProps,rt.state=i.memoizedState,rt.componentWillUnmount()}catch(st){en(u,a,st)}}break;case 5:Hs(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){rm(Pe);continue}}Je!==null?(Je.return=Ee,tt=Je):rm(Pe)}Re=Re.sibling}e:for(Re=null,Pe=n;;){if(Pe.tag===5){if(Re===null){Re=Pe;try{p=Pe.stateNode,de?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(k=Pe.stateNode,q=Pe.memoizedProps.style,T=q!=null&&q.hasOwnProperty("display")?q.display:null,k.style.display=pe("display",T))}catch(st){en(n,n.return,st)}}}else if(Pe.tag===6){if(Re===null)try{Pe.stateNode.nodeValue=de?"":Pe.memoizedProps}catch(st){en(n,n.return,st)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===n)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===n)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===n)break e;Re===Pe&&(Re=null),Pe=Pe.return}Re===Pe&&(Re=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:Pi(i,n),Gi(n),u&4&&em(n);break;case 21:break;default:Pi(i,n),Gi(n)}}function Gi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Zp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Me(p,""),u.flags&=-33);var v=Jp(n);Lu(n,v,p);break;case 3:case 4:var T=u.stateNode.containerInfo,k=Jp(n);Pu(n,k,T);break;default:throw Error(t(161))}}catch(q){en(n,n.return,q)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Cx(n,i,a){tt=n,nm(n)}function nm(n,i,a){for(var u=(n.mode&1)!==0;tt!==null;){var p=tt,v=p.child;if(p.tag===22&&u){var T=p.memoizedState!==null||il;if(!T){var k=p.alternate,q=k!==null&&k.memoizedState!==null||Pn;k=il;var de=Pn;if(il=T,(Pn=q)&&!de)for(tt=p;tt!==null;)T=tt,q=T.child,T.tag===22&&T.memoizedState!==null?sm(p):q!==null?(q.return=T,tt=q):sm(p);for(;v!==null;)tt=v,nm(v),v=v.sibling;tt=p,il=k,Pn=de}im(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,tt=v):im(n)}}function im(n){for(;tt!==null;){var i=tt;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Pn||rl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Pn)if(a===null)u.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:Ri(i.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&rp(i,v,u);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}rp(i,T,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var q=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&a.focus();break;case"img":q.src&&(a.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var de=i.alternate;if(de!==null){var Re=de.memoizedState;if(Re!==null){var Pe=Re.dehydrated;Pe!==null&&To(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||i.flags&512&&bu(i)}catch(Ee){en(i,i.return,Ee)}}if(i===n){tt=null;break}if(a=i.sibling,a!==null){a.return=i.return,tt=a;break}tt=i.return}}function rm(n){for(;tt!==null;){var i=tt;if(i===n){tt=null;break}var a=i.sibling;if(a!==null){a.return=i.return,tt=a;break}tt=i.return}}function sm(n){for(;tt!==null;){var i=tt;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{rl(4,i)}catch(q){en(i,a,q)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var p=i.return;try{u.componentDidMount()}catch(q){en(i,p,q)}}var v=i.return;try{bu(i)}catch(q){en(i,v,q)}break;case 5:var T=i.return;try{bu(i)}catch(q){en(i,T,q)}}}catch(q){en(i,i.return,q)}if(i===n){tt=null;break}var k=i.sibling;if(k!==null){k.return=i.return,tt=k;break}tt=i.return}}var Rx=Math.ceil,sl=P.ReactCurrentDispatcher,Iu=P.ReactCurrentOwner,mi=P.ReactCurrentBatchConfig,It=0,xn=null,cn=null,En=0,ri=0,Vs=Tr(0),hn=0,Yo=null,rs=0,ol=0,Nu=0,Qo=null,Yn=null,Du=0,Gs=1/0,lr=null,al=!1,Uu=null,Ir=null,ll=!1,Nr=null,cl=0,Zo=0,Fu=null,ul=-1,fl=0;function Vn(){return(It&6)!==0?jt():ul!==-1?ul:ul=jt()}function Dr(n){return(n.mode&1)===0?1:(It&2)!==0&&En!==0?En&-En:fx.transition!==null?(fl===0&&(fl=Ze()),fl):(n=St,n!==0||(n=window.event,n=n===void 0?16:ad(n.type)),n)}function Li(n,i,a,u){if(50<Zo)throw Zo=0,Fu=null,Error(t(185));Et(n,a,u),((It&2)===0||n!==xn)&&(n===xn&&((It&2)===0&&(ol|=a),hn===4&&Ur(n,En)),Qn(n,u),a===1&&It===0&&(i.mode&1)===0&&(Gs=jt()+500,Ba&&Rr()))}function Qn(n,i){var a=n.callbackNode;kt(n,i);var u=Ot(n,n===xn?En:0);if(u===0)a!==null&&Yr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Yr(a),i===1)n.tag===0?ux(am.bind(null,n)):jd(am.bind(null,n)),ox(function(){(It&6)===0&&Rr()}),a=null;else{switch(ei(u)){case 1:a=nn;break;case 4:a=R;break;case 16:a=ee;break;case 536870912:a=ae;break;default:a=ee}a=mm(a,om.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function om(n,i){if(ul=-1,fl=0,(It&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ws()&&n.callbackNode!==a)return null;var u=Ot(n,n===xn?En:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=hl(n,u);else{i=u;var p=It;It|=2;var v=cm();(xn!==n||En!==i)&&(lr=null,Gs=jt()+500,os(n,i));do try{Lx();break}catch(k){lm(n,k)}while(!0);eu(),sl.current=v,It=p,cn!==null?i=0:(xn=null,En=0,i=hn)}if(i!==0){if(i===2&&(p=Zt(n),p!==0&&(u=p,i=Ou(n,p))),i===1)throw a=Yo,os(n,0),Ur(n,u),Qn(n,jt()),a;if(i===6)Ur(n,u);else{if(p=n.current.alternate,(u&30)===0&&!bx(p)&&(i=hl(n,u),i===2&&(v=Zt(n),v!==0&&(u=v,i=Ou(n,v))),i===1))throw a=Yo,os(n,0),Ur(n,u),Qn(n,jt()),a;switch(n.finishedWork=p,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:as(n,Yn,lr);break;case 3:if(Ur(n,u),(u&130023424)===u&&(i=Du+500-jt(),10<i)){if(Ot(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Vn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Gc(as.bind(null,n,Yn,lr),i);break}as(n,Yn,lr);break;case 4:if(Ur(n,u),(u&4194240)===u)break;for(i=n.eventTimes,p=-1;0<u;){var T=31-Le(u);v=1<<T,T=i[T],T>p&&(p=T),u&=~v}if(u=p,u=jt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Rx(u/1960))-u,10<u){n.timeoutHandle=Gc(as.bind(null,n,Yn,lr),u);break}as(n,Yn,lr);break;case 5:as(n,Yn,lr);break;default:throw Error(t(329))}}}return Qn(n,jt()),n.callbackNode===a?om.bind(null,n):null}function Ou(n,i){var a=Qo;return n.current.memoizedState.isDehydrated&&(os(n,i).flags|=256),n=hl(n,i),n!==2&&(i=Yn,Yn=a,i!==null&&ku(i)),n}function ku(n){Yn===null?Yn=n:Yn.push.apply(Yn,n)}function bx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],v=p.getSnapshot;p=p.value;try{if(!Ti(v(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ur(n,i){for(i&=~Nu,i&=~ol,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Le(i),u=1<<a;n[a]=-1,i&=~u}}function am(n){if((It&6)!==0)throw Error(t(327));Ws();var i=Ot(n,0);if((i&1)===0)return Qn(n,jt()),null;var a=hl(n,i);if(n.tag!==0&&a===2){var u=Zt(n);u!==0&&(i=u,a=Ou(n,u))}if(a===1)throw a=Yo,os(n,0),Ur(n,i),Qn(n,jt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,as(n,Yn,lr),Qn(n,jt()),null}function Bu(n,i){var a=It;It|=1;try{return n(i)}finally{It=a,It===0&&(Gs=jt()+500,Ba&&Rr())}}function ss(n){Nr!==null&&Nr.tag===0&&(It&6)===0&&Ws();var i=It;It|=1;var a=mi.transition,u=St;try{if(mi.transition=null,St=1,n)return n()}finally{St=u,mi.transition=a,It=i,(It&6)===0&&Rr()}}function zu(){ri=Vs.current,Yt(Vs)}function os(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,sx(a)),cn!==null)for(a=cn.return;a!==null;){var u=a;switch(Yc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Oa();break;case 3:Bs(),Yt(jn),Yt(Cn),lu();break;case 5:ou(u);break;case 4:Bs();break;case 13:Yt(Jt);break;case 19:Yt(Jt);break;case 10:tu(u.type._context);break;case 22:case 23:zu()}a=a.return}if(xn=n,cn=n=Fr(n.current,null),En=ri=i,hn=0,Yo=null,Nu=ol=rs=0,Yn=Qo=null,ts!==null){for(i=0;i<ts.length;i++)if(a=ts[i],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,v=a.pending;if(v!==null){var T=v.next;v.next=p,u.next=T}a.pending=u}ts=null}return n}function lm(n,i){do{var a=cn;try{if(eu(),Ya.current=$a,Qa){for(var u=$t.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Qa=!1}if(is=0,vn=fn=$t=null,Go=!1,Wo=0,Iu.current=null,a===null||a.return===null){hn=1,Yo=i,cn=null;break}e:{var v=n,T=a.return,k=a,q=i;if(i=En,k.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var de=q,Re=k,Pe=Re.tag;if((Re.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var Ee=Re.alternate;Ee?(Re.updateQueue=Ee.updateQueue,Re.memoizedState=Ee.memoizedState,Re.lanes=Ee.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var Je=Np(T);if(Je!==null){Je.flags&=-257,Dp(Je,T,k,v,i),Je.mode&1&&Ip(v,de,i),i=Je,q=de;var rt=i.updateQueue;if(rt===null){var st=new Set;st.add(q),i.updateQueue=st}else rt.add(q);break e}else{if((i&1)===0){Ip(v,de,i),Hu();break e}q=Error(t(426))}}else if(Qt&&k.mode&1){var sn=Np(T);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),Dp(sn,T,k,v,i),Jc(zs(q,k));break e}}v=q=zs(q,k),hn!==4&&(hn=2),Qo===null?Qo=[v]:Qo.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var se=Pp(v,q,i);ip(v,se);break e;case 1:k=q;var J=v.type,fe=v.stateNode;if((v.flags&128)===0&&(typeof J.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(Ir===null||!Ir.has(fe)))){v.flags|=65536,i&=-i,v.lanes|=i;var Ue=Lp(v,k,i);ip(v,Ue);break e}}v=v.return}while(v!==null)}fm(a)}catch(at){i=at,cn===a&&a!==null&&(cn=a=a.return);continue}break}while(!0)}function cm(){var n=sl.current;return sl.current=$a,n===null?$a:n}function Hu(){(hn===0||hn===3||hn===2)&&(hn=4),xn===null||(rs&268435455)===0&&(ol&268435455)===0||Ur(xn,En)}function hl(n,i){var a=It;It|=2;var u=cm();(xn!==n||En!==i)&&(lr=null,os(n,i));do try{Px();break}catch(p){lm(n,p)}while(!0);if(eu(),It=a,sl.current=u,cn!==null)throw Error(t(261));return xn=null,En=0,hn}function Px(){for(;cn!==null;)um(cn)}function Lx(){for(;cn!==null&&!ci();)um(cn)}function um(n){var i=pm(n.alternate,n,ri);n.memoizedProps=n.pendingProps,i===null?fm(n):cn=i,Iu.current=null}function fm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Ax(a,i,ri),a!==null){cn=a;return}}else{if(a=Ex(a,i),a!==null){a.flags&=32767,cn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{hn=6,cn=null;return}}if(i=i.sibling,i!==null){cn=i;return}cn=i=n}while(i!==null);hn===0&&(hn=5)}function as(n,i,a){var u=St,p=mi.transition;try{mi.transition=null,St=1,Ix(n,i,a,u)}finally{mi.transition=p,St=u}return null}function Ix(n,i,a,u){do Ws();while(Nr!==null);if((It&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(gn(n,v),n===xn&&(cn=xn=null,En=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ll||(ll=!0,mm(ee,function(){return Ws(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=mi.transition,mi.transition=null;var T=St;St=1;var k=It;It|=4,Iu.current=null,Tx(n,a),tm(a,n),Jv(Hc),Aa=!!zc,Hc=zc=null,n.current=a,Cx(a),ui(),It=k,St=T,mi.transition=v}else n.current=a;if(ll&&(ll=!1,Nr=n,cl=p),v=n.pendingLanes,v===0&&(Ir=null),Ge(a.stateNode),Qn(n,jt()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],u(p.value,{componentStack:p.stack,digest:p.digest});if(al)throw al=!1,n=Uu,Uu=null,n;return(cl&1)!==0&&n.tag!==0&&Ws(),v=n.pendingLanes,(v&1)!==0?n===Fu?Zo++:(Zo=0,Fu=n):Zo=0,Rr(),null}function Ws(){if(Nr!==null){var n=ei(cl),i=mi.transition,a=St;try{if(mi.transition=null,St=16>n?16:n,Nr===null)var u=!1;else{if(n=Nr,Nr=null,cl=0,(It&6)!==0)throw Error(t(331));var p=It;for(It|=4,tt=n.current;tt!==null;){var v=tt,T=v.child;if((tt.flags&16)!==0){var k=v.deletions;if(k!==null){for(var q=0;q<k.length;q++){var de=k[q];for(tt=de;tt!==null;){var Re=tt;switch(Re.tag){case 0:case 11:case 15:Ko(8,Re,v)}var Pe=Re.child;if(Pe!==null)Pe.return=Re,tt=Pe;else for(;tt!==null;){Re=tt;var Ee=Re.sibling,Je=Re.return;if(Qp(Re),Re===de){tt=null;break}if(Ee!==null){Ee.return=Je,tt=Ee;break}tt=Je}}}var rt=v.alternate;if(rt!==null){var st=rt.child;if(st!==null){rt.child=null;do{var sn=st.sibling;st.sibling=null,st=sn}while(st!==null)}}tt=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,tt=T;else e:for(;tt!==null;){if(v=tt,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Ko(9,v,v.return)}var se=v.sibling;if(se!==null){se.return=v.return,tt=se;break e}tt=v.return}}var J=n.current;for(tt=J;tt!==null;){T=tt;var fe=T.child;if((T.subtreeFlags&2064)!==0&&fe!==null)fe.return=T,tt=fe;else e:for(T=J;tt!==null;){if(k=tt,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:rl(9,k)}}catch(at){en(k,k.return,at)}if(k===T){tt=null;break e}var Ue=k.sibling;if(Ue!==null){Ue.return=k.return,tt=Ue;break e}tt=k.return}}if(It=p,Rr(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(oe,n)}catch{}u=!0}return u}finally{St=a,mi.transition=i}}return!1}function hm(n,i,a){i=zs(a,i),i=Pp(n,i,1),n=Pr(n,i,1),i=Vn(),n!==null&&(Et(n,1,i),Qn(n,i))}function en(n,i,a){if(n.tag===3)hm(n,n,a);else for(;i!==null;){if(i.tag===3){hm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ir===null||!Ir.has(u))){n=zs(a,n),n=Lp(i,n,1),i=Pr(i,n,1),n=Vn(),i!==null&&(Et(i,1,n),Qn(i,n));break}}i=i.return}}function Nx(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Vn(),n.pingedLanes|=n.suspendedLanes&a,xn===n&&(En&a)===a&&(hn===4||hn===3&&(En&130023424)===En&&500>jt()-Du?os(n,0):Nu|=a),Qn(n,i)}function dm(n,i){i===0&&((n.mode&1)===0?i=1:(i=it,it<<=1,(it&130023424)===0&&(it=4194304)));var a=Vn();n=sr(n,i),n!==null&&(Et(n,i,a),Qn(n,a))}function Dx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),dm(n,a)}function Ux(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),dm(n,a)}var pm;pm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||jn.current)Kn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Kn=!1,Sx(n,i,a);Kn=(n.flags&131072)!==0}else Kn=!1,Qt&&(i.flags&1048576)!==0&&qd(i,Ha,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;nl(n,i),n=i.pendingProps;var p=Is(i,Cn.current);ks(i,a),p=fu(null,i,u,n,p,a);var v=hu();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,qn(u)?(v=!0,ka(i)):v=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,ru(i),p.updater=el,i.stateNode=p,p._reactInternals=i,xu(i,u,n,a),i=Su(null,i,u,!0,v,a)):(i.tag=0,Qt&&v&&Kc(i),Hn(null,i,p,a),i=i.child),i;case 16:u=i.elementType;e:{switch(nl(n,i),n=i.pendingProps,p=u._init,u=p(u._payload),i.type=u,p=i.tag=Ox(u),n=Ri(u,n),p){case 0:i=Mu(null,i,u,n,a);break e;case 1:i=zp(null,i,u,n,a);break e;case 11:i=Up(null,i,u,n,a);break e;case 14:i=Fp(null,i,u,Ri(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ri(u,p),Mu(n,i,u,p,a);case 1:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ri(u,p),zp(n,i,u,p,a);case 3:e:{if(Hp(i),n===null)throw Error(t(387));u=i.pendingProps,v=i.memoizedState,p=v.element,np(n,i),qa(i,u,null,a);var T=i.memoizedState;if(u=T.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){p=zs(Error(t(423)),i),i=Vp(n,i,u,a,p);break e}else if(u!==p){p=zs(Error(t(424)),i),i=Vp(n,i,u,a,p);break e}else for(ii=wr(i.stateNode.containerInfo.firstChild),ni=i,Qt=!0,Ci=null,a=ep(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Us(),u===p){i=ar(n,i,a);break e}Hn(n,i,u,a)}i=i.child}return i;case 5:return sp(i),n===null&&Zc(i),u=i.type,p=i.pendingProps,v=n!==null?n.memoizedProps:null,T=p.children,Vc(u,p)?T=null:v!==null&&Vc(u,v)&&(i.flags|=32),Bp(n,i),Hn(n,i,T,a),i.child;case 6:return n===null&&Zc(i),null;case 13:return Gp(n,i,a);case 4:return su(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Fs(i,null,u,a):Hn(n,i,u,a),i.child;case 11:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ri(u,p),Up(n,i,u,p,a);case 7:return Hn(n,i,i.pendingProps,a),i.child;case 8:return Hn(n,i,i.pendingProps.children,a),i.child;case 12:return Hn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,p=i.pendingProps,v=i.memoizedProps,T=p.value,Xt(Wa,u._currentValue),u._currentValue=T,v!==null)if(Ti(v.value,T)){if(v.children===p.children&&!jn.current){i=ar(n,i,a);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var k=v.dependencies;if(k!==null){T=v.child;for(var q=k.firstContext;q!==null;){if(q.context===u){if(v.tag===1){q=or(-1,a&-a),q.tag=2;var de=v.updateQueue;if(de!==null){de=de.shared;var Re=de.pending;Re===null?q.next=q:(q.next=Re.next,Re.next=q),de.pending=q}}v.lanes|=a,q=v.alternate,q!==null&&(q.lanes|=a),nu(v.return,a,i),k.lanes|=a;break}q=q.next}}else if(v.tag===10)T=v.type===i.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=a,k=T.alternate,k!==null&&(k.lanes|=a),nu(T,a,i),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===i){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}Hn(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,u=i.pendingProps.children,ks(i,a),p=di(p),u=u(p),i.flags|=1,Hn(n,i,u,a),i.child;case 14:return u=i.type,p=Ri(u,i.pendingProps),p=Ri(u.type,p),Fp(n,i,u,p,a);case 15:return Op(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ri(u,p),nl(n,i),i.tag=1,qn(u)?(n=!0,ka(i)):n=!1,ks(i,a),Rp(i,u,p),xu(i,u,p,a),Su(null,i,u,!0,n,a);case 19:return Xp(n,i,a);case 22:return kp(n,i,a)}throw Error(t(156,i.tag))};function mm(n,i){return Kr(n,i)}function Fx(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(n,i,a,u){return new Fx(n,i,a,u)}function Vu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ox(n){if(typeof n=="function")return Vu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===K)return 11;if(n===D)return 14}return 2}function Fr(n,i){var a=n.alternate;return a===null?(a=gi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function dl(n,i,a,u,p,v){var T=2;if(u=n,typeof n=="function")Vu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case z:return ls(a.children,p,v,i);case E:T=8,p|=8;break;case F:return n=gi(12,a,i,p|2),n.elementType=F,n.lanes=v,n;case he:return n=gi(13,a,i,p),n.elementType=he,n.lanes=v,n;case le:return n=gi(19,a,i,p),n.elementType=le,n.lanes=v,n;case G:return pl(a,p,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Q:T=10;break e;case B:T=9;break e;case K:T=11;break e;case D:T=14;break e;case te:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=gi(T,a,i,p),i.elementType=n,i.type=u,i.lanes=v,i}function ls(n,i,a,u){return n=gi(7,n,u,i),n.lanes=a,n}function pl(n,i,a,u){return n=gi(22,n,u,i),n.elementType=G,n.lanes=a,n.stateNode={isHidden:!1},n}function Gu(n,i,a){return n=gi(6,n,null,i),n.lanes=a,n}function Wu(n,i,a){return i=gi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function kx(n,i,a,u,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rn(0),this.expirationTimes=rn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Xu(n,i,a,u,p,v,T,k,q){return n=new kx(n,i,a,k,q),i===1?(i=1,v===!0&&(i|=8)):i=0,v=gi(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ru(v),n}function Bx(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function gm(n){if(!n)return Cr;n=n._reactInternals;e:{if(ln(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(qn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(qn(a))return Wd(n,a,i)}return i}function vm(n,i,a,u,p,v,T,k,q){return n=Xu(a,u,!0,n,p,v,T,k,q),n.context=gm(null),a=n.current,u=Vn(),p=Dr(a),v=or(u,p),v.callback=i??null,Pr(a,v,p),n.current.lanes=p,Et(n,p,u),Qn(n,u),n}function ml(n,i,a,u){var p=i.current,v=Vn(),T=Dr(p);return a=gm(a),i.context===null?i.context=a:i.pendingContext=a,i=or(v,T),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Pr(p,i,T),n!==null&&(Li(n,p,T,v),ja(n,p,T)),T}function gl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function xm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ju(n,i){xm(n,i),(n=n.alternate)&&xm(n,i)}function zx(){return null}var _m=typeof reportError=="function"?reportError:function(n){console.error(n)};function qu(n){this._internalRoot=n}vl.prototype.render=qu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ml(n,i,null,null)},vl.prototype.unmount=qu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ss(function(){ml(null,n,null,null)}),i[tr]=null}};function vl(n){this._internalRoot=n}vl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ht();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Sr.length&&i!==0&&i<Sr[a].priority;a++);Sr.splice(a,0,n),a===0&&sd(n)}};function Ku(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ym(){}function Hx(n,i,a,u,p){if(p){if(typeof u=="function"){var v=u;u=function(){var de=gl(T);v.call(de)}}var T=vm(i,u,n,0,null,!1,!1,"",ym);return n._reactRootContainer=T,n[tr]=T.current,Uo(n.nodeType===8?n.parentNode:n),ss(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var k=u;u=function(){var de=gl(q);k.call(de)}}var q=Xu(n,0,!1,null,null,!1,!1,"",ym);return n._reactRootContainer=q,n[tr]=q.current,Uo(n.nodeType===8?n.parentNode:n),ss(function(){ml(i,q,a,u)}),q}function _l(n,i,a,u,p){var v=a._reactRootContainer;if(v){var T=v;if(typeof p=="function"){var k=p;p=function(){var q=gl(T);k.call(q)}}ml(i,T,n,p)}else T=Hx(a,i,n,p,u);return gl(T)}Bt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ct(i.pendingLanes);a!==0&&(Sn(i,a|1),Qn(i,jt()),(It&6)===0&&(Gs=jt()+500,Rr()))}break;case 13:ss(function(){var u=sr(n,1);if(u!==null){var p=Vn();Li(u,n,1,p)}}),ju(n,1)}},qt=function(n){if(n.tag===13){var i=sr(n,134217728);if(i!==null){var a=Vn();Li(i,n,134217728,a)}ju(n,134217728)}},Ei=function(n){if(n.tag===13){var i=Dr(n),a=sr(n,i);if(a!==null){var u=Vn();Li(a,n,i,u)}ju(n,i)}},Ht=function(){return St},wi=function(n,i){var a=St;try{return St=n,i()}finally{St=a}},ht=function(n,i,a){switch(i){case"input":if(Ve(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var p=Fa(u);if(!p)throw Error(t(90));nt(u),Ve(u,p)}}}break;case"textarea":Te(n,a);break;case"select":i=a.value,i!=null&&ot(n,!!a.multiple,i,!1)}},Fe=Bu,Se=ss;var Vx={usingClientEntryPoint:!1,Events:[ko,Ps,Fa,xe,Ye,Bu]},Jo={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gx={bundleType:Jo.bundleType,version:Jo.version,rendererPackageName:Jo.rendererPackageName,rendererConfig:Jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Bn(n),n===null?null:n.stateNode},findFiberByHostInstance:Jo.findFiberByHostInstance||zx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{oe=yl.inject(Gx),Oe=yl}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vx,Zn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ku(i))throw Error(t(200));return Bx(n,i,null,a)},Zn.createRoot=function(n,i){if(!Ku(n))throw Error(t(299));var a=!1,u="",p=_m;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=Xu(n,1,!1,null,null,a,!1,u,p),n[tr]=i.current,Uo(n.nodeType===8?n.parentNode:n),new qu(i)},Zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Bn(i),n=n===null?null:n.stateNode,n},Zn.flushSync=function(n){return ss(n)},Zn.hydrate=function(n,i,a){if(!xl(i))throw Error(t(200));return _l(null,n,i,!0,a)},Zn.hydrateRoot=function(n,i,a){if(!Ku(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,v="",T=_m;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=vm(i,null,n,1,a??null,p,!1,v,T),n[tr]=i.current,Uo(n),u)for(n=0;n<u.length;n++)a=u[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new vl(i)},Zn.render=function(n,i,a){if(!xl(i))throw Error(t(200));return _l(null,n,i,!1,a)},Zn.unmountComponentAtNode=function(n){if(!xl(n))throw Error(t(40));return n._reactRootContainer?(ss(function(){_l(null,null,n,!1,function(){n._reactRootContainer=null,n[tr]=null})}),!0):!1},Zn.unstable_batchedUpdates=Bu,Zn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!xl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return _l(n,i,a,!1,u)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var Rm;function $x(){if(Rm)return Zu.exports;Rm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Zu.exports=Jx(),Zu.exports}var bm;function e_(){if(bm)return Ml;bm=1;var s=$x();return Ml.createRoot=s.createRoot,Ml.hydrateRoot=s.hydrateRoot,Ml}var t_=e_();const Pm={field:{count:1400,size:1,drift:1},look:{trail:.35,grain:.5,glow:1},form:{circle:0},hands:{reach:1,clap:1},sound:{beat:1,sparks:1,bass:1}};function n_(s,e){let t=s;for(const r of e.split(".")){if(typeof t!="object"||t===null)return;t=t[r]}return typeof t=="number"?t:void 0}function va(s,e){const t=structuredClone(s);for(const[r,o]of Object.entries(e)){if(!Number.isFinite(o)||n_(s,r)===void 0)continue;const l=r.split("."),c=l.pop();let f=t;for(const h of l)f=f[h];f[c]=o}return t}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zh="184",i_=0,Lm=1,r_=2,Zl=1,s_=2,ca=3,jr=0,Jn=1,Fi=2,mr=0,uo=1,Im=2,Nm=3,Dm=4,o_=5,ps=100,a_=101,l_=102,c_=103,u_=104,f_=200,h_=201,d_=202,p_=203,Kf=204,Yf=205,m_=206,g_=207,v_=208,x_=209,__=210,y_=211,M_=212,S_=213,A_=214,Qf=0,Zf=1,Jf=2,ho=3,$f=4,eh=5,th=6,nh=7,mg=0,E_=1,w_=2,Yi=0,gg=1,vg=2,xg=3,_g=4,yg=5,Mg=6,Sg=7,Ag=300,xs=301,po=302,ef=303,tf=304,gc=306,sc=1e3,pr=1001,ih=1002,dn=1003,T_=1004,Sl=1005,Mn=1006,nf=1007,gs=1008,_i=1009,Eg=1010,wg=1011,pa=1012,Hh=1013,Ji=1014,ki=1015,vr=1016,Vh=1017,Gh=1018,ma=1020,Tg=35902,Cg=35899,Rg=1021,bg=1022,yi=1023,xr=1026,vs=1027,Pg=1028,Wh=1029,_s=1030,Xh=1031,jh=1033,Jl=33776,$l=33777,ec=33778,tc=33779,rh=35840,sh=35841,oh=35842,ah=35843,lh=36196,ch=37492,uh=37496,fh=37488,hh=37489,oc=37490,dh=37491,ph=37808,mh=37809,gh=37810,vh=37811,xh=37812,_h=37813,yh=37814,Mh=37815,Sh=37816,Ah=37817,Eh=37818,wh=37819,Th=37820,Ch=37821,Rh=36492,bh=36494,Ph=36495,Lh=36283,Ih=36284,ac=36285,Nh=36286,C_=3200,Um=0,R_=1,Wr="",xi="srgb",lc="srgb-linear",cc="linear",Vt="srgb",Xs=7680,Fm=519,b_=512,P_=513,L_=514,qh=515,I_=516,N_=517,Kh=518,D_=519,Om=35044,km=35048,Bm="300 es",qi=2e3,uc=2001;function U_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function fc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function F_(){const s=fc("canvas");return s.style.display="block",s}const zm={};function Hm(...s){const e="THREE."+s.shift();console.log(e,...s)}function Lg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function xt(...s){s=Lg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Nt(...s){s=Lg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Dh(...s){const e=s.join(" ");e in zm||(zm[e]=!0,xt(...s))}function O_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const k_={[Qf]:Zf,[Jf]:th,[$f]:nh,[ho]:eh,[Zf]:Qf,[th]:Jf,[nh]:$f,[eh]:ho};class Ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vm=1234567;const ha=Math.PI/180,ga=180/Math.PI;function vo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function Yh(s,e){return(s%e+e)%e}function B_(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function z_(s,e,t){return s!==e?(t-s)/(e-s):0}function da(s,e,t){return(1-t)*s+t*e}function H_(s,e,t,r){return da(s,e,1-Math.exp(-t*r))}function V_(s,e=1){return e-Math.abs(Yh(s,e*2)-e)}function G_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function W_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function X_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function j_(s,e){return s+Math.random()*(e-s)}function q_(s){return s*(.5-Math.random())}function K_(s){s!==void 0&&(Vm=s);let e=Vm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Y_(s){return s*ha}function Q_(s){return s*ga}function Z_(s){return(s&s-1)===0&&s!==0}function J_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ey(s,e,t,r,o){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),d=l((e+r)/2),g=c((e+r)/2),x=l((e-r)/2),m=c((e-r)/2),y=l((r-e)/2),S=c((r-e)/2);switch(o){case"XYX":s.set(f*g,h*x,h*m,f*d);break;case"YZY":s.set(h*m,f*g,h*x,f*d);break;case"ZXZ":s.set(h*x,h*m,f*g,f*d);break;case"XZX":s.set(f*g,h*S,h*y,f*d);break;case"YXY":s.set(h*y,f*g,h*S,f*d);break;case"ZYZ":s.set(h*S,h*y,f*g,f*d);break;default:xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function oo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const rf={DEG2RAD:ha,RAD2DEG:ga,generateUUID:vo,clamp:bt,euclideanModulo:Yh,mapLinear:B_,inverseLerp:z_,lerp:da,damp:H_,pingpong:V_,smoothstep:G_,smootherstep:W_,randInt:X_,randFloat:j_,randFloatSpread:q_,seededRandom:K_,degToRad:Y_,radToDeg:Q_,isPowerOfTwo:Z_,ceilPowerOfTwo:J_,floorPowerOfTwo:$_,setQuaternionFromProperEuler:ey,normalize:Gn,denormalize:oo},$h=class $h{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$h.prototype.isVector2=!0;let Dt=$h;class Qi{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let h=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3],m=l[c+0],y=l[c+1],S=l[c+2],w=l[c+3];if(x!==w||h!==m||d!==y||g!==S){let _=h*m+d*y+g*S+x*w;_<0&&(m=-m,y=-y,S=-S,w=-w,_=-_);let M=1-f;if(_<.9995){const C=Math.acos(_),L=Math.sin(C);M=Math.sin(M*C)/L,f=Math.sin(f*C)/L,h=h*M+m*f,d=d*M+y*f,g=g*M+S*f,x=x*M+w*f}else{h=h*M+m*f,d=d*M+y*f,g=g*M+S*f,x=x*M+w*f;const C=1/Math.sqrt(h*h+d*d+g*g+x*x);h*=C,d*=C,g*=C,x*=C}}e[t]=h,e[t+1]=d,e[t+2]=g,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],h=r[o+1],d=r[o+2],g=r[o+3],x=l[c],m=l[c+1],y=l[c+2],S=l[c+3];return e[t]=f*S+g*x+h*y-d*m,e[t+1]=h*S+g*m+d*x-f*y,e[t+2]=d*S+g*y+f*m-h*x,e[t+3]=g*S-f*x-h*m-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,d=f(r/2),g=f(o/2),x=f(l/2),m=h(r/2),y=h(o/2),S=h(l/2);switch(c){case"XYZ":this._x=m*g*x+d*y*S,this._y=d*y*x-m*g*S,this._z=d*g*S+m*y*x,this._w=d*g*x-m*y*S;break;case"YXZ":this._x=m*g*x+d*y*S,this._y=d*y*x-m*g*S,this._z=d*g*S-m*y*x,this._w=d*g*x+m*y*S;break;case"ZXY":this._x=m*g*x-d*y*S,this._y=d*y*x+m*g*S,this._z=d*g*S+m*y*x,this._w=d*g*x-m*y*S;break;case"ZYX":this._x=m*g*x-d*y*S,this._y=d*y*x+m*g*S,this._z=d*g*S-m*y*x,this._w=d*g*x+m*y*S;break;case"YZX":this._x=m*g*x+d*y*S,this._y=d*y*x+m*g*S,this._z=d*g*S-m*y*x,this._w=d*g*x-m*y*S;break;case"XZY":this._x=m*g*x-d*y*S,this._y=d*y*x-m*g*S,this._z=d*g*S+m*y*x,this._w=d*g*x+m*y*S;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],d=t[2],g=t[6],x=t[10],m=r+f+x;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(g-h)*y,this._y=(l-d)*y,this._z=(c-o)*y}else if(r>f&&r>x){const y=2*Math.sqrt(1+r-f-x);this._w=(g-h)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(l+d)/y}else if(f>x){const y=2*Math.sqrt(1+f-r-x);this._w=(l-d)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(h+g)/y}else{const y=2*Math.sqrt(1+x-r-f);this._w=(c-o)/y,this._x=(l+d)/y,this._y=(h+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,d=t._z,g=t._w;return this._x=r*g+c*f+o*d-l*h,this._y=o*g+c*h+l*f-r*d,this._z=l*g+c*d+r*h-o*f,this._w=c*g-r*f-o*h-l*d,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,c=-c,f=-f);let h=1-t;if(f<.9995){const d=Math.acos(f),g=Math.sin(d);h=Math.sin(h*d)/g,t=Math.sin(t*d)/g,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ed=class ed{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,d=2*(c*o-f*r),g=2*(f*t-l*o),x=2*(l*r-c*t);return this.x=t+h*d+c*x-f*g,this.y=r+h*g+f*d-l*x,this.z=o+h*x+l*g-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-r*h,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return sf.copy(this).projectOnVector(e),this.sub(sf)}reflect(e){return this.sub(sf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ed.prototype.isVector3=!0;let Z=ed;const sf=new Z,Gm=new Qi,td=class td{constructor(e,t,r,o,l,c,f,h,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,d)}set(e,t,r,o,l,c,f,h,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],d=r[1],g=r[4],x=r[7],m=r[2],y=r[5],S=r[8],w=o[0],_=o[3],M=o[6],C=o[1],L=o[4],P=o[7],V=o[2],I=o[5],z=o[8];return l[0]=c*w+f*C+h*V,l[3]=c*_+f*L+h*I,l[6]=c*M+f*P+h*z,l[1]=d*w+g*C+x*V,l[4]=d*_+g*L+x*I,l[7]=d*M+g*P+x*z,l[2]=m*w+y*C+S*V,l[5]=m*_+y*L+S*I,l[8]=m*M+y*P+S*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],g=e[8];return t*c*g-t*f*d-r*l*g+r*f*h+o*l*d-o*c*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],g=e[8],x=g*c-f*d,m=f*h-g*l,y=d*l-c*h,S=t*x+r*m+o*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/S;return e[0]=x*w,e[1]=(o*d-g*r)*w,e[2]=(f*r-o*c)*w,e[3]=m*w,e[4]=(g*t-o*h)*w,e[5]=(o*l-f*t)*w,e[6]=y*w,e[7]=(r*h-d*t)*w,e[8]=(c*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const h=Math.cos(l),d=Math.sin(l);return this.set(r*h,r*d,-r*(h*c+d*f)+c+e,-o*d,o*h,-o*(-d*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(of.makeScale(e,t)),this}rotate(e){return this.premultiply(of.makeRotation(-e)),this}translate(e,t){return this.premultiply(of.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};td.prototype.isMatrix3=!0;let wt=td;const of=new wt,Wm=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xm=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ty(){const s={enabled:!0,workingColorSpace:lc,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Vt&&(o.r=gr(o.r),o.g=gr(o.g),o.b=gr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Vt&&(o.r=fo(o.r),o.g=fo(o.g),o.b=fo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Wr?cc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Dh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Dh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[lc]:{primaries:e,whitePoint:r,transfer:cc,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),s}const Pt=ty();function gr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let js;class ny{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{js===void 0&&(js=fc("canvas")),js.width=e.width,js.height=e.height;const o=js.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=js}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=gr(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(gr(t[r]/255)*255):t[r]=gr(t[r]);return{data:t,width:e.width,height:e.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iy=0;class Qh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=vo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(af(o[c].image)):l.push(af(o[c]))}else l=af(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function af(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ny.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let ry=0;const lf=new Z;class Dn extends Ms{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,r=pr,o=pr,l=Mn,c=gs,f=yi,h=_i,d=Dn.DEFAULT_ANISOTROPY,g=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=vo(),this.name="",this.source=new Qh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(lf).x}get height(){return this.source.getSize(lf).y}get depth(){return this.source.getSize(lf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){xt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){xt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ag)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sc:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sc:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Ag;Dn.DEFAULT_ANISOTROPY=1;const nd=class nd{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,d=h[0],g=h[4],x=h[8],m=h[1],y=h[5],S=h[9],w=h[2],_=h[6],M=h[10];if(Math.abs(g-m)<.01&&Math.abs(x-w)<.01&&Math.abs(S-_)<.01){if(Math.abs(g+m)<.1&&Math.abs(x+w)<.1&&Math.abs(S+_)<.1&&Math.abs(d+y+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(d+1)/2,P=(y+1)/2,V=(M+1)/2,I=(g+m)/4,z=(x+w)/4,E=(S+_)/4;return L>P&&L>V?L<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(L),o=I/r,l=z/r):P>V?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=I/o,l=E/o):V<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),r=z/l,o=E/l),this.set(r,o,l,t),this}let C=Math.sqrt((_-S)*(_-S)+(x-w)*(x-w)+(m-g)*(m-g));return Math.abs(C)<.001&&(C=1),this.x=(_-S)/C,this.y=(x-w)/C,this.z=(m-g)/C,this.w=Math.acos((d+y+M-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nd.prototype.isVector4=!0;let on=nd;class sy extends Ms{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Dn(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Qh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends sy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Ig extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oy extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mc=class mc{constructor(e,t,r,o,l,c,f,h,d,g,x,m,y,S,w,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,d,g,x,m,y,S,w,_)}set(e,t,r,o,l,c,f,h,d,g,x,m,y,S,w,_){const M=this.elements;return M[0]=e,M[4]=t,M[8]=r,M[12]=o,M[1]=l,M[5]=c,M[9]=f,M[13]=h,M[2]=d,M[6]=g,M[10]=x,M[14]=m,M[3]=y,M[7]=S,M[11]=w,M[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/qs.setFromMatrixColumn(e,0).length(),l=1/qs.setFromMatrixColumn(e,1).length(),c=1/qs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(o),d=Math.sin(o),g=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const m=c*g,y=c*x,S=f*g,w=f*x;t[0]=h*g,t[4]=-h*x,t[8]=d,t[1]=y+S*d,t[5]=m-w*d,t[9]=-f*h,t[2]=w-m*d,t[6]=S+y*d,t[10]=c*h}else if(e.order==="YXZ"){const m=h*g,y=h*x,S=d*g,w=d*x;t[0]=m+w*f,t[4]=S*f-y,t[8]=c*d,t[1]=c*x,t[5]=c*g,t[9]=-f,t[2]=y*f-S,t[6]=w+m*f,t[10]=c*h}else if(e.order==="ZXY"){const m=h*g,y=h*x,S=d*g,w=d*x;t[0]=m-w*f,t[4]=-c*x,t[8]=S+y*f,t[1]=y+S*f,t[5]=c*g,t[9]=w-m*f,t[2]=-c*d,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const m=c*g,y=c*x,S=f*g,w=f*x;t[0]=h*g,t[4]=S*d-y,t[8]=m*d+w,t[1]=h*x,t[5]=w*d+m,t[9]=y*d-S,t[2]=-d,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const m=c*h,y=c*d,S=f*h,w=f*d;t[0]=h*g,t[4]=w-m*x,t[8]=S*x+y,t[1]=x,t[5]=c*g,t[9]=-f*g,t[2]=-d*g,t[6]=y*x+S,t[10]=m-w*x}else if(e.order==="XZY"){const m=c*h,y=c*d,S=f*h,w=f*d;t[0]=h*g,t[4]=-x,t[8]=d*g,t[1]=m*x+w,t[5]=c*g,t[9]=y*x-S,t[2]=S*x-y,t[6]=f*g,t[10]=w*x+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ay,e,ly)}lookAt(e,t,r){const o=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),kr.crossVectors(r,si),kr.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),kr.crossVectors(r,si)),kr.normalize(),Al.crossVectors(si,kr),o[0]=kr.x,o[4]=Al.x,o[8]=si.x,o[1]=kr.y,o[5]=Al.y,o[9]=si.y,o[2]=kr.z,o[6]=Al.z,o[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],d=r[12],g=r[1],x=r[5],m=r[9],y=r[13],S=r[2],w=r[6],_=r[10],M=r[14],C=r[3],L=r[7],P=r[11],V=r[15],I=o[0],z=o[4],E=o[8],F=o[12],Q=o[1],B=o[5],K=o[9],he=o[13],le=o[2],D=o[6],te=o[10],G=o[14],Y=o[3],O=o[7],ie=o[11],N=o[15];return l[0]=c*I+f*Q+h*le+d*Y,l[4]=c*z+f*B+h*D+d*O,l[8]=c*E+f*K+h*te+d*ie,l[12]=c*F+f*he+h*G+d*N,l[1]=g*I+x*Q+m*le+y*Y,l[5]=g*z+x*B+m*D+y*O,l[9]=g*E+x*K+m*te+y*ie,l[13]=g*F+x*he+m*G+y*N,l[2]=S*I+w*Q+_*le+M*Y,l[6]=S*z+w*B+_*D+M*O,l[10]=S*E+w*K+_*te+M*ie,l[14]=S*F+w*he+_*G+M*N,l[3]=C*I+L*Q+P*le+V*Y,l[7]=C*z+L*B+P*D+V*O,l[11]=C*E+L*K+P*te+V*ie,l[15]=C*F+L*he+P*G+V*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],d=e[13],g=e[2],x=e[6],m=e[10],y=e[14],S=e[3],w=e[7],_=e[11],M=e[15],C=h*y-d*m,L=f*y-d*x,P=f*m-h*x,V=c*y-d*g,I=c*m-h*g,z=c*x-f*g;return t*(w*C-_*L+M*P)-r*(S*C-_*V+M*I)+o*(S*L-w*V+M*z)-l*(S*P-w*I+_*z)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],g=e[8],x=e[9],m=e[10],y=e[11],S=e[12],w=e[13],_=e[14],M=e[15],C=t*f-r*c,L=t*h-o*c,P=t*d-l*c,V=r*h-o*f,I=r*d-l*f,z=o*d-l*h,E=g*w-x*S,F=g*_-m*S,Q=g*M-y*S,B=x*_-m*w,K=x*M-y*w,he=m*M-y*_,le=C*he-L*K+P*B+V*Q-I*F+z*E;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/le;return e[0]=(f*he-h*K+d*B)*D,e[1]=(o*K-r*he-l*B)*D,e[2]=(w*z-_*I+M*V)*D,e[3]=(m*I-x*z-y*V)*D,e[4]=(h*Q-c*he-d*F)*D,e[5]=(t*he-o*Q+l*F)*D,e[6]=(_*P-S*z-M*L)*D,e[7]=(g*z-m*P+y*L)*D,e[8]=(c*K-f*Q+d*E)*D,e[9]=(r*Q-t*K-l*E)*D,e[10]=(S*I-w*P+M*C)*D,e[11]=(x*P-g*I-y*C)*D,e[12]=(f*F-c*B-h*E)*D,e[13]=(t*B-r*F+o*E)*D,e[14]=(w*L-S*V-_*C)*D,e[15]=(g*V-x*L+m*C)*D,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,d=l*c,g=l*f;return this.set(d*c+r,d*f-o*h,d*h+o*f,0,d*f+o*h,g*f+r,g*h-o*c,0,d*h-o*f,g*h+o*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,d=l+l,g=c+c,x=f+f,m=l*d,y=l*g,S=l*x,w=c*g,_=c*x,M=f*x,C=h*d,L=h*g,P=h*x,V=r.x,I=r.y,z=r.z;return o[0]=(1-(w+M))*V,o[1]=(y+P)*V,o[2]=(S-L)*V,o[3]=0,o[4]=(y-P)*I,o[5]=(1-(m+M))*I,o[6]=(_+C)*I,o[7]=0,o[8]=(S+L)*z,o[9]=(_-C)*z,o[10]=(1-(m+w))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=qs.set(o[0],o[1],o[2]).length();const f=qs.set(o[4],o[5],o[6]).length(),h=qs.set(o[8],o[9],o[10]).length();l<0&&(c=-c),Ii.copy(this);const d=1/c,g=1/f,x=1/h;return Ii.elements[0]*=d,Ii.elements[1]*=d,Ii.elements[2]*=d,Ii.elements[4]*=g,Ii.elements[5]*=g,Ii.elements[6]*=g,Ii.elements[8]*=x,Ii.elements[9]*=x,Ii.elements[10]*=x,t.setFromRotationMatrix(Ii),r.x=c,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,c,f=qi,h=!1){const d=this.elements,g=2*l/(t-e),x=2*l/(r-o),m=(t+e)/(t-e),y=(r+o)/(r-o);let S,w;if(h)S=l/(c-l),w=c*l/(c-l);else if(f===qi)S=-(c+l)/(c-l),w=-2*c*l/(c-l);else if(f===uc)S=-c/(c-l),w=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=x,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=qi,h=!1){const d=this.elements,g=2/(t-e),x=2/(r-o),m=-(t+e)/(t-e),y=-(r+o)/(r-o);let S,w;if(h)S=1/(c-l),w=c/(c-l);else if(f===qi)S=-2/(c-l),w=-(c+l)/(c-l);else if(f===uc)S=-1/(c-l),w=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=0,d[12]=m,d[1]=0,d[5]=x,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=S,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};mc.prototype.isMatrix4=!0;let tn=mc;const qs=new Z,Ii=new tn,ay=new Z(0,0,0),ly=new Z(1,1,1),kr=new Z,Al=new Z,si=new Z,jm=new tn,qm=new Qi;class ys{constructor(e=0,t=0,r=0,o=ys.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],d=o[5],g=o[9],x=o[2],m=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-bt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,y),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qm.setFromEuler(this),this.setFromQuaternion(qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ys.DEFAULT_ORDER="XYZ";class Ng{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cy=0;const Km=new Z,Ks=new Qi,cr=new tn,El=new Z,ea=new Z,uy=new Z,fy=new Qi,Ym=new Z(1,0,0),Qm=new Z(0,1,0),Zm=new Z(0,0,1),Jm={type:"added"},hy={type:"removed"},Ys={type:"childadded",child:null},cf={type:"childremoved",child:null};class Xn extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new Z,t=new ys,r=new Qi,o=new Z(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new tn},normalMatrix:{value:new wt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ng,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(Ym,e)}rotateY(e){return this.rotateOnAxis(Qm,e)}rotateZ(e){return this.rotateOnAxis(Zm,e)}translateOnAxis(e,t){return Km.copy(e).applyQuaternion(this.quaternion),this.position.add(Km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ym,e)}translateY(e){return this.translateOnAxis(Qm,e)}translateZ(e){return this.translateOnAxis(Zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?El.copy(e):El.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(ea,El,this.up):cr.lookAt(El,ea,this.up),this.quaternion.setFromRotationMatrix(cr),o&&(cr.extractRotation(o.matrixWorld),Ks.setFromRotationMatrix(cr),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jm),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hy),cf.child=e,this.dispatchEvent(cf),cf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jm),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,uy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,fy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let d=0,g=h.length;d<g;d++){const x=h[d];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,d=this.material.length;h<d;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),d=c(e.textures),g=c(e.images),x=c(e.shapes),m=c(e.skeletons),y=c(e.animations),S=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),m.length>0&&(r.skeletons=m),y.length>0&&(r.animations=y),S.length>0&&(r.nodes=S)}return r.object=o,r;function c(f){const h=[];for(const d in f){const g=f[d];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Xn.DEFAULT_UP=new Z(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ki extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dy={type:"move"};class uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,r),M=this._getHandJoint(d,w);_!==null&&(M.matrix.fromArray(_.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=_.radius),M.visible=_!==null}const g=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],m=g.position.distanceTo(x.position),y=.02,S=.005;d.inputState.pinching&&m>y+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&m<=y-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(dy)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ki;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},wl={h:0,s:0,l:0};function ff(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class zt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Pt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Pt.workingColorSpace){if(e=Yh(e,1),t=bt(t,0,1),r=bt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=ff(c,l,e+1/3),this.g=ff(c,l,e),this.b=ff(c,l,e-1/3)}return Pt.colorSpaceToWorking(this,o),this}setStyle(e,t=xi){function r(l){l!==void 0&&parseFloat(l)<1&&xt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:xt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);xt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xi){const r=Dg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):xt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Pt.workingToColorSpace(In.copy(this),e),Math.round(bt(In.r*255,0,255))*65536+Math.round(bt(In.g*255,0,255))*256+Math.round(bt(In.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(In.copy(this),t);const r=In.r,o=In.g,l=In.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let h,d;const g=(f+c)/2;if(f===c)h=0,d=0;else{const x=c-f;switch(d=g<=.5?x/(c+f):x/(2-c-f),c){case r:h=(o-l)/x+(o<l?6:0);break;case o:h=(l-r)/x+2;break;case l:h=(r-o)/x+4;break}h/=6}return e.h=h,e.s=d,e.l=g,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=xi){Pt.workingToColorSpace(In.copy(this),e);const t=In.r,r=In.g,o=In.b;return e!==xi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(wl);const r=da(Br.h,wl.h,t),o=da(Br.s,wl.s,t),l=da(Br.l,wl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new zt;zt.NAMES=Dg;class Ug extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ys,this.environmentIntensity=1,this.environmentRotation=new ys,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ni=new Z,ur=new Z,hf=new Z,fr=new Z,Qs=new Z,Zs=new Z,$m=new Z,df=new Z,pf=new Z,mf=new Z,gf=new on,vf=new on,xf=new on;class Oi{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ni.subVectors(e,t),o.cross(Ni);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ni.subVectors(o,t),ur.subVectors(r,t),hf.subVectors(e,t);const c=Ni.dot(Ni),f=Ni.dot(ur),h=Ni.dot(hf),d=ur.dot(ur),g=ur.dot(hf),x=c*d-f*f;if(x===0)return l.set(0,0,0),null;const m=1/x,y=(d*h-f*g)*m,S=(c*g-f*h)*m;return l.set(1-y-S,S,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,t,r,o,l,c,f,h){return this.getBarycoord(e,t,r,o,fr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,fr.x),h.addScaledVector(c,fr.y),h.addScaledVector(f,fr.z),h)}static getInterpolatedAttribute(e,t,r,o,l,c){return gf.setScalar(0),vf.setScalar(0),xf.setScalar(0),gf.fromBufferAttribute(e,t),vf.fromBufferAttribute(e,r),xf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(gf,l.x),c.addScaledVector(vf,l.y),c.addScaledVector(xf,l.z),c}static isFrontFacing(e,t,r,o){return Ni.subVectors(r,t),ur.subVectors(e,t),Ni.cross(ur).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Ni.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Oi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;Qs.subVectors(o,r),Zs.subVectors(l,r),df.subVectors(e,r);const h=Qs.dot(df),d=Zs.dot(df);if(h<=0&&d<=0)return t.copy(r);pf.subVectors(e,o);const g=Qs.dot(pf),x=Zs.dot(pf);if(g>=0&&x<=g)return t.copy(o);const m=h*x-g*d;if(m<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(r).addScaledVector(Qs,c);mf.subVectors(e,l);const y=Qs.dot(mf),S=Zs.dot(mf);if(S>=0&&y<=S)return t.copy(l);const w=y*d-h*S;if(w<=0&&d>=0&&S<=0)return f=d/(d-S),t.copy(r).addScaledVector(Zs,f);const _=g*S-y*x;if(_<=0&&x-g>=0&&y-S>=0)return $m.subVectors(l,o),f=(x-g)/(x-g+(y-S)),t.copy(o).addScaledVector($m,f);const M=1/(_+w+m);return c=w*M,f=m*M,t.copy(r).addScaledVector(Qs,c).addScaledVector(Zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xa{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Di):Di.fromBufferAttribute(l,c),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Tl.copy(r.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),Cl.subVectors(this.max,ta),Js.subVectors(e.a,ta),$s.subVectors(e.b,ta),eo.subVectors(e.c,ta),zr.subVectors($s,Js),Hr.subVectors(eo,$s),cs.subVectors(Js,eo);let t=[0,-zr.z,zr.y,0,-Hr.z,Hr.y,0,-cs.z,cs.y,zr.z,0,-zr.x,Hr.z,0,-Hr.x,cs.z,0,-cs.x,-zr.y,zr.x,0,-Hr.y,Hr.x,0,-cs.y,cs.x,0];return!_f(t,Js,$s,eo,Cl)||(t=[1,0,0,0,1,0,0,0,1],!_f(t,Js,$s,eo,Cl))?!1:(Rl.crossVectors(zr,Hr),t=[Rl.x,Rl.y,Rl.z],_f(t,Js,$s,eo,Cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Di=new Z,Tl=new xa,Js=new Z,$s=new Z,eo=new Z,zr=new Z,Hr=new Z,cs=new Z,ta=new Z,Cl=new Z,Rl=new Z,us=new Z;function _f(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){us.fromArray(s,l);const f=o.x*Math.abs(us.x)+o.y*Math.abs(us.y)+o.z*Math.abs(us.z),h=e.dot(us),d=t.dot(us),g=r.dot(us);if(Math.max(-Math.max(h,d,g),Math.min(h,d,g))>f)return!1}return!0}const un=new Z,bl=new Dt;let py=0;class Gt extends Ms{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:py++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Om,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=oo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array),o=Gn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array),o=Gn(o,this.array),l=Gn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Om&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Fg extends Gt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Og extends Gt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class li extends Gt{constructor(e,t,r){super(new Float32Array(e),t,r)}}const my=new xa,na=new Z,yf=new Z;class xo{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):my.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const t=na.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(na,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(yf)),this.expandByPoint(na.copy(e.center).sub(yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gy=0;const vi=new tn,Mf=new Xn,to=new Z,oi=new xa,ia=new xa,yn=new Z;class Un extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U_(e)?Og:Fg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new wt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,r){return vi.makeTranslation(e,t,r),this.applyMatrix4(vi),this}scale(e,t,r){return vi.makeScale(e,t,r),this.applyMatrix4(vi),this}lookAt(e){return Mf.lookAt(e),Mf.updateMatrix(),this.applyMatrix4(Mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new li(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];oi.setFromBufferAttribute(l),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];ia.setFromBufferAttribute(f),this.morphTargetsRelative?(yn.addVectors(oi.min,ia.min),oi.expandByPoint(yn),yn.addVectors(oi.max,ia.max),oi.expandByPoint(yn)):(oi.expandByPoint(ia.min),oi.expandByPoint(ia.max))}oi.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)yn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(yn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let d=0,g=f.count;d<g;d++)yn.fromBufferAttribute(f,d),h&&(to.fromBufferAttribute(e,d),yn.add(to)),o=Math.max(o,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let E=0;E<r.count;E++)f[E]=new Z,h[E]=new Z;const d=new Z,g=new Z,x=new Z,m=new Dt,y=new Dt,S=new Dt,w=new Z,_=new Z;function M(E,F,Q){d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,F),x.fromBufferAttribute(r,Q),m.fromBufferAttribute(l,E),y.fromBufferAttribute(l,F),S.fromBufferAttribute(l,Q),g.sub(d),x.sub(d),y.sub(m),S.sub(m);const B=1/(y.x*S.y-S.x*y.y);isFinite(B)&&(w.copy(g).multiplyScalar(S.y).addScaledVector(x,-y.y).multiplyScalar(B),_.copy(x).multiplyScalar(y.x).addScaledVector(g,-S.x).multiplyScalar(B),f[E].add(w),f[F].add(w),f[Q].add(w),h[E].add(_),h[F].add(_),h[Q].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let E=0,F=C.length;E<F;++E){const Q=C[E],B=Q.start,K=Q.count;for(let he=B,le=B+K;he<le;he+=3)M(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const L=new Z,P=new Z,V=new Z,I=new Z;function z(E){V.fromBufferAttribute(o,E),I.copy(V);const F=f[E];L.copy(F),L.sub(V.multiplyScalar(V.dot(F))).normalize(),P.crossVectors(I,F);const B=P.dot(h[E])<0?-1:1;c.setXYZW(E,L.x,L.y,L.z,B)}for(let E=0,F=C.length;E<F;++E){const Q=C[E],B=Q.start,K=Q.count;for(let he=B,le=B+K;he<le;he+=3)z(e.getX(he+0)),z(e.getX(he+1)),z(e.getX(he+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,y=r.count;m<y;m++)r.setXYZ(m,0,0,0);const o=new Z,l=new Z,c=new Z,f=new Z,h=new Z,d=new Z,g=new Z,x=new Z;if(e)for(let m=0,y=e.count;m<y;m+=3){const S=e.getX(m+0),w=e.getX(m+1),_=e.getX(m+2);o.fromBufferAttribute(t,S),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,_),g.subVectors(c,l),x.subVectors(o,l),g.cross(x),f.fromBufferAttribute(r,S),h.fromBufferAttribute(r,w),d.fromBufferAttribute(r,_),f.add(g),h.add(g),d.add(g),r.setXYZ(S,f.x,f.y,f.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(_,d.x,d.y,d.z)}else for(let m=0,y=t.count;m<y;m+=3)o.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,l),x.subVectors(o,l),g.cross(x),r.setXYZ(m+0,g.x,g.y,g.z),r.setXYZ(m+1,g.x,g.y,g.z),r.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(f,h){const d=f.array,g=f.itemSize,x=f.normalized,m=new d.constructor(h.length*g);let y=0,S=0;for(let w=0,_=h.length;w<_;w++){f.isInterleavedBufferAttribute?y=h[w]*f.data.stride+f.offset:y=h[w]*g;for(let M=0;M<g;M++)m[S++]=d[y++]}return new Gt(m,g,x)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],d=e(h,r);t.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const h=[],d=l[f];for(let g=0,x=d.length;g<x;g++){const m=d[g],y=e(m,r);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const d=c[f];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const d=r[h];e.data.attributes[h]=d.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],g=[];for(let x=0,m=d.length;x<m;x++){const y=d[x];g.push(y.toJSON(e.data))}g.length>0&&(o[h]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(t))}const l=e.morphAttributes;for(const d in l){const g=[],x=l[d];for(let m=0,y=x.length;m<y;m++)g.push(x[m].clone(t));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,g=c.length;d<g;d++){const x=c[d];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let vy=0;class _o extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=uo,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kf,this.blendDst=Yf,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){xt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){xt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(r.blending=this.blending),this.side!==jr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Kf&&(r.blendSrc=this.blendSrc),this.blendDst!==Yf&&(r.blendDst=this.blendDst),this.blendEquation!==ps&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const dr=new Z,Sf=new Z,Pl=new Z,Vr=new Z,Af=new Z,Ll=new Z,Ef=new Z;class Zh{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dr.copy(this.origin).addScaledVector(this.direction,t),dr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Sf.copy(e).add(t).multiplyScalar(.5),Pl.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(Sf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Pl),f=Vr.dot(this.direction),h=-Vr.dot(Pl),d=Vr.lengthSq(),g=Math.abs(1-c*c);let x,m,y,S;if(g>0)if(x=c*h-f,m=c*f-h,S=l*g,x>=0)if(m>=-S)if(m<=S){const w=1/g;x*=w,m*=w,y=x*(x+c*m+2*f)+m*(c*x+m+2*h)+d}else m=l,x=Math.max(0,-(c*m+f)),y=-x*x+m*(m+2*h)+d;else m=-l,x=Math.max(0,-(c*m+f)),y=-x*x+m*(m+2*h)+d;else m<=-S?(x=Math.max(0,-(-c*l+f)),m=x>0?-l:Math.min(Math.max(-l,-h),l),y=-x*x+m*(m+2*h)+d):m<=S?(x=0,m=Math.min(Math.max(-l,-h),l),y=m*(m+2*h)+d):(x=Math.max(0,-(c*l+f)),m=x>0?l:Math.min(Math.max(-l,-h),l),y=-x*x+m*(m+2*h)+d);else m=c>0?-l:l,x=Math.max(0,-(c*m+f)),y=-x*x+m*(m+2*h)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Sf).addScaledVector(Pl,m),y}intersectSphere(e,t){dr.subVectors(e.center,this.origin);const r=dr.dot(this.direction),o=dr.dot(dr)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,h;const d=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,m=this.origin;return d>=0?(r=(e.min.x-m.x)*d,o=(e.max.x-m.x)*d):(r=(e.max.x-m.x)*d,o=(e.min.x-m.x)*d),g>=0?(l=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(l=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),x>=0?(f=(e.min.z-m.z)*x,h=(e.max.z-m.z)*x):(f=(e.max.z-m.z)*x,h=(e.min.z-m.z)*x),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,t,r,o,l){Af.subVectors(t,e),Ll.subVectors(r,e),Ef.crossVectors(Af,Ll);let c=this.direction.dot(Ef),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Vr.subVectors(this.origin,e);const h=f*this.direction.dot(Ll.crossVectors(Vr,Ll));if(h<0)return null;const d=f*this.direction.dot(Af.cross(Vr));if(d<0||h+d>c)return null;const g=-f*Vr.dot(Ef);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kg extends _o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ys,this.combine=mg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const e0=new tn,fs=new Zh,Il=new xo,t0=new Z,Nl=new Z,Dl=new Z,Ul=new Z,wf=new Z,Fl=new Z,n0=new Z,Ol=new Z;class Fn extends Xn{constructor(e=new Un,t=new kg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Fl.set(0,0,0);for(let h=0,d=l.length;h<d;h++){const g=f[h],x=l[h];g!==0&&(wf.fromBufferAttribute(x,e),c?Fl.addScaledVector(wf,g):Fl.addScaledVector(wf.sub(t),g))}t.add(Fl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Il.copy(r.boundingSphere),Il.applyMatrix4(l),fs.copy(e.ray).recast(e.near),!(Il.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Il,t0)===null||fs.origin.distanceToSquared(t0)>(e.far-e.near)**2))&&(e0.copy(l).invert(),fs.copy(e.ray).applyMatrix4(e0),!(r.boundingBox!==null&&fs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,d=l.attributes.uv,g=l.attributes.uv1,x=l.attributes.normal,m=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let S=0,w=m.length;S<w;S++){const _=m[S],M=c[_.materialIndex],C=Math.max(_.start,y.start),L=Math.min(f.count,Math.min(_.start+_.count,y.start+y.count));for(let P=C,V=L;P<V;P+=3){const I=f.getX(P),z=f.getX(P+1),E=f.getX(P+2);o=kl(this,M,e,r,d,g,x,I,z,E),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const S=Math.max(0,y.start),w=Math.min(f.count,y.start+y.count);for(let _=S,M=w;_<M;_+=3){const C=f.getX(_),L=f.getX(_+1),P=f.getX(_+2);o=kl(this,c,e,r,d,g,x,C,L,P),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let S=0,w=m.length;S<w;S++){const _=m[S],M=c[_.materialIndex],C=Math.max(_.start,y.start),L=Math.min(h.count,Math.min(_.start+_.count,y.start+y.count));for(let P=C,V=L;P<V;P+=3){const I=P,z=P+1,E=P+2;o=kl(this,M,e,r,d,g,x,I,z,E),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const S=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let _=S,M=w;_<M;_+=3){const C=_,L=_+1,P=_+2;o=kl(this,c,e,r,d,g,x,C,L,P),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function xy(s,e,t,r,o,l,c,f){let h;if(e.side===Jn?h=r.intersectTriangle(c,l,o,!0,f):h=r.intersectTriangle(o,l,c,e.side===jr,f),h===null)return null;Ol.copy(f),Ol.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(Ol);return d<t.near||d>t.far?null:{distance:d,point:Ol.clone(),object:s}}function kl(s,e,t,r,o,l,c,f,h,d){s.getVertexPosition(f,Nl),s.getVertexPosition(h,Dl),s.getVertexPosition(d,Ul);const g=xy(s,e,t,r,Nl,Dl,Ul,n0);if(g){const x=new Z;Oi.getBarycoord(n0,Nl,Dl,Ul,x),o&&(g.uv=Oi.getInterpolatedAttribute(o,f,h,d,x,new Dt)),l&&(g.uv1=Oi.getInterpolatedAttribute(l,f,h,d,x,new Dt)),c&&(g.normal=Oi.getInterpolatedAttribute(c,f,h,d,x,new Z),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const m={a:f,b:h,c:d,normal:new Z,materialIndex:0};Oi.getNormal(Nl,Dl,Ul,m.normal),g.face=m,g.barycoord=x}return g}class Bg extends Dn{constructor(e=null,t=1,r=1,o,l,c,f,h,d=dn,g=dn,x,m){super(null,c,f,h,d,g,o,l,x,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tf=new Z,_y=new Z,yy=new wt;class ds{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Tf.subVectors(r,t).cross(_y.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Tf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||yy.getNormalMatrix(e),o=this.coplanarPoint(Tf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new xo,My=new Dt(.5,.5),Bl=new Z;class zg{constructor(e=new ds,t=new ds,r=new ds,o=new ds,l=new ds,c=new ds){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=qi,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],d=l[3],g=l[4],x=l[5],m=l[6],y=l[7],S=l[8],w=l[9],_=l[10],M=l[11],C=l[12],L=l[13],P=l[14],V=l[15];if(o[0].setComponents(d-c,y-g,M-S,V-C).normalize(),o[1].setComponents(d+c,y+g,M+S,V+C).normalize(),o[2].setComponents(d+f,y+x,M+w,V+L).normalize(),o[3].setComponents(d-f,y-x,M-w,V-L).normalize(),r)o[4].setComponents(h,m,_,P).normalize(),o[5].setComponents(d-h,y-m,M-_,V-P).normalize();else if(o[4].setComponents(d-h,y-m,M-_,V-P).normalize(),t===qi)o[5].setComponents(d+h,y+m,M+_,V+P).normalize();else if(t===uc)o[5].setComponents(h,m,_,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const t=My.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Bl.x=o.normal.x>0?e.max.x:e.min.x,Bl.y=o.normal.y>0?e.max.y:e.min.y,Bl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sy extends _o{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hc=new Z,dc=new Z,i0=new tn,ra=new Zh,zl=new xo,Cf=new Z,r0=new Z;class Ay extends Xn{constructor(e=new Un,t=new Sy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)hc.fromBufferAttribute(t,o-1),dc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=hc.distanceTo(dc);e.setAttribute("lineDistance",new li(r,1))}else xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zl.copy(r.boundingSphere),zl.applyMatrix4(o),zl.radius+=l,e.ray.intersectsSphere(zl)===!1)return;i0.copy(o).invert(),ra.copy(e.ray).applyMatrix4(i0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=this.isLineSegments?2:1,g=r.index,m=r.attributes.position;if(g!==null){const y=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let w=y,_=S-1;w<_;w+=d){const M=g.getX(w),C=g.getX(w+1),L=Hl(this,e,ra,h,M,C,w);L&&t.push(L)}if(this.isLineLoop){const w=g.getX(S-1),_=g.getX(y),M=Hl(this,e,ra,h,w,_,S-1);M&&t.push(M)}}else{const y=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let w=y,_=S-1;w<_;w+=d){const M=Hl(this,e,ra,h,w,w+1,w);M&&t.push(M)}if(this.isLineLoop){const w=Hl(this,e,ra,h,S-1,y,S-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Hl(s,e,t,r,o,l,c){const f=s.geometry.attributes.position;if(hc.fromBufferAttribute(f,o),dc.fromBufferAttribute(f,l),t.distanceSqToSegment(hc,dc,Cf,r0)>r)return;Cf.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(Cf);if(!(d<e.near||d>e.far))return{distance:d,point:r0.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}class Ey extends _o{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const s0=new tn,Uh=new Zh,Vl=new xo,Gl=new Z;class wy extends Xn{constructor(e=new Un,t=new Ey){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vl.copy(r.boundingSphere),Vl.applyMatrix4(o),Vl.radius+=l,e.ray.intersectsSphere(Vl)===!1)return;s0.copy(o).invert(),Uh.copy(e.ray).applyMatrix4(s0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=r.index,x=r.attributes.position;if(d!==null){const m=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let S=m,w=y;S<w;S++){const _=d.getX(S);Gl.fromBufferAttribute(x,_),o0(Gl,_,h,o,e,t,this)}}else{const m=Math.max(0,c.start),y=Math.min(x.count,c.start+c.count);for(let S=m,w=y;S<w;S++)Gl.fromBufferAttribute(x,S),o0(Gl,S,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function o0(s,e,t,r,o,l,c){const f=Uh.distanceSqToPoint(s);if(f<t){const h=new Z;Uh.closestPointToPoint(s,h),h.applyMatrix4(r);const d=o.ray.origin.distanceTo(h);if(d<o.near||d>o.far)return;l.push({distance:d,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Hg extends Dn{constructor(e=[],t=xs,r,o,l,c,f,h,d,g){super(e,t,r,o,l,c,f,h,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ty extends Dn{constructor(e,t,r,o,l,c,f,h,d){super(e,t,r,o,l,c,f,h,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mo extends Dn{constructor(e,t,r=Ji,o,l,c,f=dn,h=dn,d,g=xr,x=1){if(g!==xr&&g!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:x};super(m,o,l,c,f,h,g,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cy extends mo{constructor(e,t=Ji,r=xs,o,l,c=dn,f=dn,h,d=xr){const g={width:e,height:e,depth:1},x=[g,g,g,g,g,g];super(e,e,t,r,o,l,c,f,h,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vg extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _a extends Un{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],d=[],g=[],x=[];let m=0,y=0;S("z","y","x",-1,-1,r,t,e,c,l,0),S("z","y","x",1,-1,r,t,-e,c,l,1),S("x","z","y",1,1,e,r,t,o,c,2),S("x","z","y",1,-1,e,r,-t,o,c,3),S("x","y","z",1,-1,e,t,r,o,l,4),S("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new li(d,3)),this.setAttribute("normal",new li(g,3)),this.setAttribute("uv",new li(x,2));function S(w,_,M,C,L,P,V,I,z,E,F){const Q=P/z,B=V/E,K=P/2,he=V/2,le=I/2,D=z+1,te=E+1;let G=0,Y=0;const O=new Z;for(let ie=0;ie<te;ie++){const N=ie*B-he;for(let W=0;W<D;W++){const _e=W*Q-K;O[w]=_e*C,O[_]=N*L,O[M]=le,d.push(O.x,O.y,O.z),O[w]=0,O[_]=0,O[M]=I>0?1:-1,g.push(O.x,O.y,O.z),x.push(W/z),x.push(1-ie/E),G+=1}}for(let ie=0;ie<E;ie++)for(let N=0;N<z;N++){const W=m+N+D*ie,_e=m+N+D*(ie+1),ye=m+(N+1)+D*(ie+1),ve=m+(N+1)+D*ie;h.push(W,_e,ve),h.push(_e,ye,ve),Y+=6}f.addGroup(y,Y,F),y+=Y,m+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ry{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){xt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,h=l-1,d;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),d=r[o]-c,d<0)f=o+1;else if(d>0)h=o-1;else{h=o;break}if(o=h,r[o]===c)return o/(l-1);const g=r[o],m=r[o+1]-g,y=(c-g)/m;return(o+y)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),h=t||(c.isVector2?new Dt:new Z);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new Z,o=[],l=[],c=[],f=new Z,h=new tn;for(let y=0;y<=e;y++){const S=y/e;o[y]=this.getTangentAt(S,new Z)}l[0]=new Z,c[0]=new Z;let d=Number.MAX_VALUE;const g=Math.abs(o[0].x),x=Math.abs(o[0].y),m=Math.abs(o[0].z);g<=d&&(d=g,r.set(1,0,0)),x<=d&&(d=x,r.set(0,1,0)),m<=d&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),c[y]=c[y-1].clone(),f.crossVectors(o[y-1],o[y]),f.length()>Number.EPSILON){f.normalize();const S=Math.acos(bt(o[y-1].dot(o[y]),-1,1));l[y].applyMatrix4(h.makeRotationAxis(f,S))}c[y].crossVectors(o[y],l[y])}if(t===!0){let y=Math.acos(bt(l[0].dot(l[e]),-1,1));y/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(y=-y);for(let S=1;S<=e;S++)l[S].applyMatrix4(h.makeRotationAxis(o[S],y*S)),c[S].crossVectors(o[S],l[S])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Jh(){let s=0,e=0,t=0,r=0;function o(l,c,f,h){s=l,e=f,t=-3*l+3*c-2*f-h,r=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,d){o(c,f,d*(f-l),d*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,d,g,x){let m=(c-l)/d-(f-l)/(d+g)+(f-c)/g,y=(f-c)/g-(h-c)/(g+x)+(h-f)/x;m*=g,y*=g,o(c,f,m,y)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const a0=new Z,l0=new Z,Rf=new Jh,bf=new Jh,Pf=new Jh;class by extends Ry{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new Z){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let d,g;this.closed||f>0?d=o[(f-1)%l]:(l0.subVectors(o[0],o[1]).add(o[0]),d=l0);const x=o[f%l],m=o[(f+1)%l];if(this.closed||f+2<l?g=o[(f+2)%l]:(a0.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=a0),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let S=Math.pow(d.distanceToSquared(x),y),w=Math.pow(x.distanceToSquared(m),y),_=Math.pow(m.distanceToSquared(g),y);w<1e-4&&(w=1),S<1e-4&&(S=w),_<1e-4&&(_=w),Rf.initNonuniformCatmullRom(d.x,x.x,m.x,g.x,S,w,_),bf.initNonuniformCatmullRom(d.y,x.y,m.y,g.y,S,w,_),Pf.initNonuniformCatmullRom(d.z,x.z,m.z,g.z,S,w,_)}else this.curveType==="catmullrom"&&(Rf.initCatmullRom(d.x,x.x,m.x,g.x,this.tension),bf.initCatmullRom(d.y,x.y,m.y,g.y,this.tension),Pf.initCatmullRom(d.z,x.z,m.z,g.z,this.tension));return r.set(Rf.calc(h),bf.calc(h),Pf.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Z().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class vc extends Un{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(o),d=f+1,g=h+1,x=e/f,m=t/h,y=[],S=[],w=[],_=[];for(let M=0;M<g;M++){const C=M*m-c;for(let L=0;L<d;L++){const P=L*x-l;S.push(P,-C,0),w.push(0,0,1),_.push(L/f),_.push(1-M/h)}}for(let M=0;M<h;M++)for(let C=0;C<f;C++){const L=C+d*M,P=C+d*(M+1),V=C+1+d*(M+1),I=C+1+d*M;y.push(L,P,I),y.push(P,V,I)}this.setIndex(y),this.setAttribute("position",new li(S,3)),this.setAttribute("normal",new li(w,3)),this.setAttribute("uv",new li(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.width,e.height,e.widthSegments,e.heightSegments)}}class pc extends Un{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+f,Math.PI);let d=0;const g=[],x=new Z,m=new Z,y=[],S=[],w=[],_=[];for(let M=0;M<=r;M++){const C=[],L=M/r;let P=0;M===0&&c===0?P=.5/t:M===r&&h===Math.PI&&(P=-.5/t);for(let V=0;V<=t;V++){const I=V/t;x.x=-e*Math.cos(o+I*l)*Math.sin(c+L*f),x.y=e*Math.cos(c+L*f),x.z=e*Math.sin(o+I*l)*Math.sin(c+L*f),S.push(x.x,x.y,x.z),m.copy(x).normalize(),w.push(m.x,m.y,m.z),_.push(I+P,1-L),C.push(d++)}g.push(C)}for(let M=0;M<r;M++)for(let C=0;C<t;C++){const L=g[M][C+1],P=g[M][C],V=g[M+1][C],I=g[M+1][C+1];(M!==0||c>0)&&y.push(L,P,I),(M!==r-1||h<Math.PI)&&y.push(P,V,I)}this.setIndex(y),this.setAttribute("position",new li(S,3)),this.setAttribute("normal",new li(w,3)),this.setAttribute("uv",new li(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function go(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(c0(o))o.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(c0(o[0])){const l=[];for(let c=0,f=o.length;c<f;c++)l[c]=o[c].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Wn(s){const e={};for(let t=0;t<s.length;t++){const r=go(s[t]);for(const o in r)e[o]=r[o]}return e}function c0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Py(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Ly={clone:go,merge:Wn};var Iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ny=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends _o{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iy,this.fragmentShader=Ny,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=Py(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Dy extends Mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Uy extends _o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fy extends _o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wl=new Z,Xl=new Qi,Wi=new Z;class Wg extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wl,Xl,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Wl,Xl,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Gr=new Z,u0=new Dt,f0=new Dt;class ai extends Wg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z)}getViewSize(e,t){return this.getViewBounds(e,u0,f0),t.subVectors(f0,u0)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*r/d,o*=c.width/h,r*=c.height/d}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Xg extends Wg{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const no=-90,io=1;class Oy extends Xn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ai(no,io,e,t);o.layers=this.layers,this.add(o);const l=new ai(no,io,e,t);l.layers=this.layers,this.add(l);const c=new ai(no,io,e,t);c.layers=this.layers,this.add(c);const f=new ai(no,io,e,t);f.layers=this.layers,this.add(f);const h=new ai(no,io,e,t);h.layers=this.layers,this.add(h);const d=new ai(no,io,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,h]=t;for(const d of t)this.remove(d);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===uc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,d,g]=this.children,x=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(x,m,y),e.xr.enabled=S,r.texture.needsPMREMUpdate=!0}}class ky extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const id=class id{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};id.prototype.isMatrix2=!0;let h0=id;function d0(s,e,t,r){const o=By(r);switch(t){case Rg:return s*e;case Pg:return s*e/o.components*o.byteLength;case Wh:return s*e/o.components*o.byteLength;case _s:return s*e*2/o.components*o.byteLength;case Xh:return s*e*2/o.components*o.byteLength;case bg:return s*e*3/o.components*o.byteLength;case yi:return s*e*4/o.components*o.byteLength;case jh:return s*e*4/o.components*o.byteLength;case Jl:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ec:case tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sh:case ah:return Math.max(s,16)*Math.max(e,8)/4;case rh:case oh:return Math.max(s,8)*Math.max(e,8)/2;case lh:case ch:case fh:case hh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uh:case oc:case dh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _h:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Th:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rh:case bh:case Ph:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Lh:case Ih:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ac:case Nh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function By(s){switch(s){case _i:case Eg:return{byteLength:1,components:1};case pa:case wg:case vr:return{byteLength:2,components:1};case Vh:case Gh:return{byteLength:2,components:4};case Ji:case Hh:case ki:return{byteLength:4,components:1};case Tg:case Cg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zh}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jg(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function zy(s){const e=new WeakMap;function t(f,h){const d=f.array,g=f.usage,x=d.byteLength,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,d,g),f.onUploadCallback();let y;if(d instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=s.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=s.SHORT;else if(d instanceof Uint32Array)y=s.UNSIGNED_INT;else if(d instanceof Int32Array)y=s.INT;else if(d instanceof Int8Array)y=s.BYTE;else if(d instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,h,d){const g=h.array,x=h.updateRanges;if(s.bindBuffer(d,f),x.length===0)s.bufferSubData(d,0,g);else{x.sort((y,S)=>y.start-S.start);let m=0;for(let y=1;y<x.length;y++){const S=x[m],w=x[y];w.start<=S.start+S.count+1?S.count=Math.max(S.count,w.start+w.count-S.start):(++m,x[m]=w)}x.length=m+1;for(let y=0,S=x.length;y<S;y++){const w=x[y];s.bufferSubData(d,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=e.get(f);if(d===void 0)e.set(f,t(f,h));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,f,h),d.version=f.version}}return{get:o,remove:l,update:c}}var Hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vy=`#ifdef USE_ALPHAHASH
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
#endif`,Gy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qy=`#ifdef USE_AOMAP
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
#endif`,Ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yy=`#ifdef USE_BATCHING
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
#endif`,Qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$y=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eM=`#ifdef USE_IRIDESCENCE
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
#endif`,tM=`#ifdef USE_BUMPMAP
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
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,aM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,uM=`#define PI 3.141592653589793
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
} // validated`,fM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vM="gl_FragColor = linearToOutputTexel( gl_FragColor );",xM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_M=`#ifdef USE_ENVMAP
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
#endif`,yM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
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
#endif`,AM=`#ifdef USE_ENVMAP
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
#endif`,EM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RM=`#ifdef USE_GRADIENTMAP
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
}`,bM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,NM=`#ifdef USE_ENVMAP
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
#endif`,DM=`ToonMaterial material;
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
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
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
#endif`,BM=`uniform sampler2D dfgLUT;
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
#endif`,HM=`#if defined( RE_IndirectDiffuse )
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
#endif`,VM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,WM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZM=`#if defined( USE_POINTS_UV )
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
#endif`,JM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$M=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iS=`#ifdef USE_MORPHTARGETS
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
#endif`,rS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uS=`#ifdef USE_NORMALMAP
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
#endif`,fS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_S=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ES=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TS=`float getShadowMask() {
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
}`,CS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RS=`#ifdef USE_SKINNING
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
#endif`,bS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PS=`#ifdef USE_SKINNING
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
#endif`,LS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,US=`#ifdef USE_TRANSMISSION
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
#endif`,FS=`#ifdef USE_TRANSMISSION
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
#endif`,OS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VS=`uniform sampler2D t2D;
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
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`#include <common>
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
}`,KS=`#if DEPTH_PACKING == 3200
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
}`,YS=`#define DISTANCE
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
}`,QS=`#define DISTANCE
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
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`uniform float scale;
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
}`,e1=`uniform vec3 diffuse;
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
}`,t1=`#include <common>
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
}`,n1=`uniform vec3 diffuse;
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
}`,i1=`#define LAMBERT
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
}`,r1=`#define LAMBERT
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
}`,s1=`#define MATCAP
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
}`,o1=`#define MATCAP
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
}`,a1=`#define NORMAL
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
}`,l1=`#define NORMAL
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
}`,c1=`#define PHONG
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
}`,u1=`#define PHONG
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
}`,f1=`#define STANDARD
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
}`,h1=`#define STANDARD
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
}`,d1=`#define TOON
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
}`,p1=`#define TOON
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
}`,m1=`uniform float size;
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
}`,g1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,x1=`uniform vec3 color;
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
}`,_1=`uniform float rotation;
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
}`,y1=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:Hy,alphahash_pars_fragment:Vy,alphamap_fragment:Gy,alphamap_pars_fragment:Wy,alphatest_fragment:Xy,alphatest_pars_fragment:jy,aomap_fragment:qy,aomap_pars_fragment:Ky,batching_pars_vertex:Yy,batching_vertex:Qy,begin_vertex:Zy,beginnormal_vertex:Jy,bsdfs:$y,iridescence_fragment:eM,bumpmap_pars_fragment:tM,clipping_planes_fragment:nM,clipping_planes_pars_fragment:iM,clipping_planes_pars_vertex:rM,clipping_planes_vertex:sM,color_fragment:oM,color_pars_fragment:aM,color_pars_vertex:lM,color_vertex:cM,common:uM,cube_uv_reflection_fragment:fM,defaultnormal_vertex:hM,displacementmap_pars_vertex:dM,displacementmap_vertex:pM,emissivemap_fragment:mM,emissivemap_pars_fragment:gM,colorspace_fragment:vM,colorspace_pars_fragment:xM,envmap_fragment:_M,envmap_common_pars_fragment:yM,envmap_pars_fragment:MM,envmap_pars_vertex:SM,envmap_physical_pars_fragment:NM,envmap_vertex:AM,fog_vertex:EM,fog_pars_vertex:wM,fog_fragment:TM,fog_pars_fragment:CM,gradientmap_pars_fragment:RM,lightmap_pars_fragment:bM,lights_lambert_fragment:PM,lights_lambert_pars_fragment:LM,lights_pars_begin:IM,lights_toon_fragment:DM,lights_toon_pars_fragment:UM,lights_phong_fragment:FM,lights_phong_pars_fragment:OM,lights_physical_fragment:kM,lights_physical_pars_fragment:BM,lights_fragment_begin:zM,lights_fragment_maps:HM,lights_fragment_end:VM,lightprobes_pars_fragment:GM,logdepthbuf_fragment:WM,logdepthbuf_pars_fragment:XM,logdepthbuf_pars_vertex:jM,logdepthbuf_vertex:qM,map_fragment:KM,map_pars_fragment:YM,map_particle_fragment:QM,map_particle_pars_fragment:ZM,metalnessmap_fragment:JM,metalnessmap_pars_fragment:$M,morphinstance_vertex:eS,morphcolor_vertex:tS,morphnormal_vertex:nS,morphtarget_pars_vertex:iS,morphtarget_vertex:rS,normal_fragment_begin:sS,normal_fragment_maps:oS,normal_pars_fragment:aS,normal_pars_vertex:lS,normal_vertex:cS,normalmap_pars_fragment:uS,clearcoat_normal_fragment_begin:fS,clearcoat_normal_fragment_maps:hS,clearcoat_pars_fragment:dS,iridescence_pars_fragment:pS,opaque_fragment:mS,packing:gS,premultiplied_alpha_fragment:vS,project_vertex:xS,dithering_fragment:_S,dithering_pars_fragment:yS,roughnessmap_fragment:MS,roughnessmap_pars_fragment:SS,shadowmap_pars_fragment:AS,shadowmap_pars_vertex:ES,shadowmap_vertex:wS,shadowmask_pars_fragment:TS,skinbase_vertex:CS,skinning_pars_vertex:RS,skinning_vertex:bS,skinnormal_vertex:PS,specularmap_fragment:LS,specularmap_pars_fragment:IS,tonemapping_fragment:NS,tonemapping_pars_fragment:DS,transmission_fragment:US,transmission_pars_fragment:FS,uv_pars_fragment:OS,uv_pars_vertex:kS,uv_vertex:BS,worldpos_vertex:zS,background_vert:HS,background_frag:VS,backgroundCube_vert:GS,backgroundCube_frag:WS,cube_vert:XS,cube_frag:jS,depth_vert:qS,depth_frag:KS,distance_vert:YS,distance_frag:QS,equirect_vert:ZS,equirect_frag:JS,linedashed_vert:$S,linedashed_frag:e1,meshbasic_vert:t1,meshbasic_frag:n1,meshlambert_vert:i1,meshlambert_frag:r1,meshmatcap_vert:s1,meshmatcap_frag:o1,meshnormal_vert:a1,meshnormal_frag:l1,meshphong_vert:c1,meshphong_frag:u1,meshphysical_vert:f1,meshphysical_frag:h1,meshtoon_vert:d1,meshtoon_frag:p1,points_vert:m1,points_frag:g1,shadow_vert:v1,shadow_frag:x1,sprite_vert:_1,sprite_frag:y1},Ke={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},ji={basic:{uniforms:Wn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Wn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Wn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Wn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Wn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new zt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Wn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Wn([Ke.points,Ke.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Wn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Wn([Ke.common,Ke.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Wn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Wn([Ke.sprite,Ke.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:Wn([Ke.common,Ke.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:Wn([Ke.lights,Ke.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};ji.physical={uniforms:Wn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const jl={r:0,b:0,g:0},M1=new tn,qg=new wt;qg.set(-1,0,0,0,1,0,0,0,1);function S1(s,e,t,r,o,l){const c=new zt(0);let f=o===!0?0:1,h,d,g=null,x=0,m=null;function y(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){const P=C.backgroundBlurriness>0;L=e.get(L,P)}return L}function S(C){let L=!1;const P=y(C);P===null?_(c,f):P&&P.isColor&&(_(P,1),L=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?t.buffers.color.setClear(0,0,0,1,l):V==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(C,L){const P=y(L);P&&(P.isCubeTexture||P.mapping===gc)?(d===void 0&&(d=new Fn(new _a(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:go(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(V,I,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=P,d.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(M1.makeRotationFromEuler(L.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(qg),d.material.toneMapped=Pt.getTransfer(P.colorSpace)!==Vt,(g!==P||x!==P.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,g=P,x=P.version,m=s.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new Fn(new vc(2,2),new Mi({name:"BackgroundMaterial",uniforms:go(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.toneMapped=Pt.getTransfer(P.colorSpace)!==Vt,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||x!==P.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,g=P,x=P.version,m=s.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function _(C,L){C.getRGB(jl,Gg(s)),t.buffers.color.setClear(jl.r,jl.g,jl.b,L,l)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,L=1){c.set(C),f=L,_(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,_(c,f)},render:S,addToRenderList:w,dispose:M}}function A1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=m(null);let l=o,c=!1;function f(B,K,he,le,D){let te=!1;const G=x(B,le,he,K);l!==G&&(l=G,d(l.object)),te=y(B,le,he,D),te&&S(B,le,he,D),D!==null&&e.update(D,s.ELEMENT_ARRAY_BUFFER),(te||c)&&(c=!1,P(B,K,he,le),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function h(){return s.createVertexArray()}function d(B){return s.bindVertexArray(B)}function g(B){return s.deleteVertexArray(B)}function x(B,K,he,le){const D=le.wireframe===!0;let te=r[K.id];te===void 0&&(te={},r[K.id]=te);const G=B.isInstancedMesh===!0?B.id:0;let Y=te[G];Y===void 0&&(Y={},te[G]=Y);let O=Y[he.id];O===void 0&&(O={},Y[he.id]=O);let ie=O[D];return ie===void 0&&(ie=m(h()),O[D]=ie),ie}function m(B){const K=[],he=[],le=[];for(let D=0;D<t;D++)K[D]=0,he[D]=0,le[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:he,attributeDivisors:le,object:B,attributes:{},index:null}}function y(B,K,he,le){const D=l.attributes,te=K.attributes;let G=0;const Y=he.getAttributes();for(const O in Y)if(Y[O].location>=0){const N=D[O];let W=te[O];if(W===void 0&&(O==="instanceMatrix"&&B.instanceMatrix&&(W=B.instanceMatrix),O==="instanceColor"&&B.instanceColor&&(W=B.instanceColor)),N===void 0||N.attribute!==W||W&&N.data!==W.data)return!0;G++}return l.attributesNum!==G||l.index!==le}function S(B,K,he,le){const D={},te=K.attributes;let G=0;const Y=he.getAttributes();for(const O in Y)if(Y[O].location>=0){let N=te[O];N===void 0&&(O==="instanceMatrix"&&B.instanceMatrix&&(N=B.instanceMatrix),O==="instanceColor"&&B.instanceColor&&(N=B.instanceColor));const W={};W.attribute=N,N&&N.data&&(W.data=N.data),D[O]=W,G++}l.attributes=D,l.attributesNum=G,l.index=le}function w(){const B=l.newAttributes;for(let K=0,he=B.length;K<he;K++)B[K]=0}function _(B){M(B,0)}function M(B,K){const he=l.newAttributes,le=l.enabledAttributes,D=l.attributeDivisors;he[B]=1,le[B]===0&&(s.enableVertexAttribArray(B),le[B]=1),D[B]!==K&&(s.vertexAttribDivisor(B,K),D[B]=K)}function C(){const B=l.newAttributes,K=l.enabledAttributes;for(let he=0,le=K.length;he<le;he++)K[he]!==B[he]&&(s.disableVertexAttribArray(he),K[he]=0)}function L(B,K,he,le,D,te,G){G===!0?s.vertexAttribIPointer(B,K,he,D,te):s.vertexAttribPointer(B,K,he,le,D,te)}function P(B,K,he,le){w();const D=le.attributes,te=he.getAttributes(),G=K.defaultAttributeValues;for(const Y in te){const O=te[Y];if(O.location>=0){let ie=D[Y];if(ie===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(ie=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(ie=B.instanceColor)),ie!==void 0){const N=ie.normalized,W=ie.itemSize,_e=e.get(ie);if(_e===void 0)continue;const ye=_e.buffer,ve=_e.type,X=_e.bytesPerElement,ce=ve===s.INT||ve===s.UNSIGNED_INT||ie.gpuType===Hh;if(ie.isInterleavedBufferAttribute){const H=ie.data,re=H.stride,Ae=ie.offset;if(H.isInstancedInterleavedBuffer){for(let Ne=0;Ne<O.locationSize;Ne++)M(O.location+Ne,H.meshPerAttribute);B.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Ne=0;Ne<O.locationSize;Ne++)_(O.location+Ne);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let Ne=0;Ne<O.locationSize;Ne++)L(O.location+Ne,W/O.locationSize,ve,N,re*X,(Ae+W/O.locationSize*Ne)*X,ce)}else{if(ie.isInstancedBufferAttribute){for(let H=0;H<O.locationSize;H++)M(O.location+H,ie.meshPerAttribute);B.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let H=0;H<O.locationSize;H++)_(O.location+H);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let H=0;H<O.locationSize;H++)L(O.location+H,W/O.locationSize,ve,N,W*X,W/O.locationSize*H*X,ce)}}else if(G!==void 0){const N=G[Y];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(O.location,N);break;case 3:s.vertexAttrib3fv(O.location,N);break;case 4:s.vertexAttrib4fv(O.location,N);break;default:s.vertexAttrib1fv(O.location,N)}}}}C()}function V(){F();for(const B in r){const K=r[B];for(const he in K){const le=K[he];for(const D in le){const te=le[D];for(const G in te)g(te[G].object),delete te[G];delete le[D]}}delete r[B]}}function I(B){if(r[B.id]===void 0)return;const K=r[B.id];for(const he in K){const le=K[he];for(const D in le){const te=le[D];for(const G in te)g(te[G].object),delete te[G];delete le[D]}}delete r[B.id]}function z(B){for(const K in r){const he=r[K];for(const le in he){const D=he[le];if(D[B.id]===void 0)continue;const te=D[B.id];for(const G in te)g(te[G].object),delete te[G];delete D[B.id]}}}function E(B){for(const K in r){const he=r[K],le=B.isInstancedMesh===!0?B.id:0,D=he[le];if(D!==void 0){for(const te in D){const G=D[te];for(const Y in G)g(G[Y].object),delete G[Y];delete D[te]}delete he[le],Object.keys(he).length===0&&delete r[K]}}}function F(){Q(),c=!0,l!==o&&(l=o,d(l.object))}function Q(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:F,resetDefaultState:Q,dispose:V,releaseStatesOfGeometry:I,releaseStatesOfObject:E,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:_,disableUnusedAttributes:C}}function E1(s,e,t){let r;function o(h){r=h}function l(h,d){s.drawArrays(r,h,d),t.update(d,r,1)}function c(h,d,g){g!==0&&(s.drawArraysInstanced(r,h,d,g),t.update(d,r,g))}function f(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,d,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y];t.update(m,r,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function w1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(z){return!(z!==yi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const E=z===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==_i&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ki&&!E)}function h(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const g=h(d);g!==d&&(xt("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const x=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:S,maxTextureSize:w,maxCubemapSize:_,maxAttributes:M,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:P,maxSamples:V,samples:I}}function T1(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new ds,f=new wt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,m){const y=x.length!==0||m||r!==0||o;return o=m,r=x.length,y},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,m){t=g(x,m,0)},this.setState=function(x,m,y){const S=x.clippingPlanes,w=x.clipIntersection,_=x.clipShadows,M=s.get(x);if(!o||S===null||S.length===0||l&&!_)l?g(null):d();else{const C=l?0:r,L=C*4;let P=M.clippingState||null;h.value=P,P=g(S,m,L,y);for(let V=0;V!==L;++V)P[V]=t[V];M.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,m,y,S){const w=x!==null?x.length:0;let _=null;if(w!==0){if(_=h.value,S!==!0||_===null){const M=y+w*4,C=m.matrixWorldInverse;f.getNormalMatrix(C),(_===null||_.length<M)&&(_=new Float32Array(M));for(let L=0,P=y;L!==w;++L,P+=4)c.copy(x[L]).applyMatrix4(C,f),c.normal.toArray(_,P),_[P+3]=c.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}const Xr=4,p0=[.125,.215,.35,.446,.526,.582],ms=20,C1=256,sa=new Xg,m0=new zt;let Lf=null,If=0,Nf=0,Df=!1;const R1=new Z;class g0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=R1}=l;Lf=this._renderer.getRenderTarget(),If=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lf,If,Nf),this._renderer.xr.enabled=Df,e.scissorTest=!1,ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lf=this._renderer.getRenderTarget(),If=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:vr,format:yi,colorSpace:lc,depthBuffer:!1},o=v0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=b1(l)),this._blurMaterial=L1(l,e,t),this._ggxMaterial=P1(l,e,t)}return o}_compileMaterial(e){const t=new Fn(new Un,e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,r,o,l){const h=new ai(90,1,t,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,m=x.autoClear,y=x.toneMapping;x.getClearColor(m0),x.toneMapping=Yi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fn(new _a,new kg({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,_=w.material;let M=!1;const C=e.background;C?C.isColor&&(_.color.copy(C),e.background=null,M=!0):(_.color.copy(m0),M=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(h.up.set(0,d[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[L],l.y,l.z)):P===1?(h.up.set(0,0,d[L]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[L],l.z)):(h.up.set(0,d[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[L]));const V=this._cubeSize;ro(o,P*V,L>2?V:0,V,V),x.setRenderTarget(o),M&&x.render(w,h),x.render(e,h)}x.toneMapping=y,x.autoClear=m,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===xs||e.mapping===po;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=_0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x0());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;ro(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,sa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,d=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),x=Math.sqrt(d*d-g*g),m=0+d*1.25,y=x*m,{_lodMax:S}=this,w=this._sizeLods[r],_=3*w*(r>S-Xr?r-S+Xr:0),M=4*(this._cubeSize-w);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=S-t,ro(l,_,M,3*w,2*w),o.setRenderTarget(l),o.render(f,sa),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=S-r,ro(e,_,M,3*w,2*w),o.setRenderTarget(e),o.render(f,sa)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[o];x.material=d;const m=d.uniforms,y=this._sizeLods[r]-1,S=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*ms-1),w=l/S,_=isFinite(l)?1+Math.floor(g*w):ms;_>ms&&xt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ms}`);const M=[];let C=0;for(let z=0;z<ms;++z){const E=z/w,F=Math.exp(-E*E/2);M.push(F),z===0?C+=F:z<_&&(C+=2*F)}for(let z=0;z<M.length;z++)M[z]=M[z]/C;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=M,m.latitudinal.value=c==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:L}=this;m.dTheta.value=S,m.mipInt.value=L-r;const P=this._sizeLods[o],V=3*P*(o>L-Xr?o-L+Xr:0),I=4*(this._cubeSize-P);ro(t,V,I,3*P,2*P),h.setRenderTarget(t),h.render(x,sa)}}function b1(s){const e=[],t=[],r=[];let o=s;const l=s-Xr+1+p0.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let h=1/f;c>s-Xr?h=p0[c-s+Xr-1]:c===0&&(h=0),t.push(h);const d=1/(f-2),g=-d,x=1+d,m=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,S=6,w=3,_=2,M=1,C=new Float32Array(w*S*y),L=new Float32Array(_*S*y),P=new Float32Array(M*S*y);for(let I=0;I<y;I++){const z=I%3*2/3-1,E=I>2?0:-1,F=[z,E,0,z+2/3,E,0,z+2/3,E+1,0,z,E,0,z+2/3,E+1,0,z,E+1,0];C.set(F,w*S*I),L.set(m,_*S*I);const Q=[I,I,I,I,I,I];P.set(Q,M*S*I)}const V=new Un;V.setAttribute("position",new Gt(C,w)),V.setAttribute("uv",new Gt(L,_)),V.setAttribute("faceIndex",new Gt(P,M)),r.push(new Fn(V,null)),o>Xr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function v0(s,e,t){const r=new Zi(s,e,t);return r.texture.mapping=gc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ro(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function P1(s,e,t){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function L1(s,e,t){const r=new Float32Array(ms),o=new Z(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:xc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function x0(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function _0(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function xc(){return`

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
	`}class Kg extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Hg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new _a(5,5,5),l=new Mi({name:"CubemapFromEquirect",uniforms:go(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:mr});l.uniforms.tEquirect.value=t;const c=new Fn(o,l),f=t.minFilter;return t.minFilter===gs&&(t.minFilter=Mn),new Oy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function I1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(m,y=!1){return m==null?null:y?c(m):l(m)}function l(m){if(m&&m.isTexture){const y=m.mapping;if(y===ef||y===tf)if(e.has(m)){const S=e.get(m).texture;return f(S,m.mapping)}else{const S=m.image;if(S&&S.height>0){const w=new Kg(S.height);return w.fromEquirectangularTexture(s,m),e.set(m,w),m.addEventListener("dispose",d),f(w.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const y=m.mapping,S=y===ef||y===tf,w=y===xs||y===po;if(S||w){let _=t.get(m);const M=_!==void 0?_.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==M)return r===null&&(r=new g0(s)),_=S?r.fromEquirectangular(m,_):r.fromCubemap(m,_),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),_.texture;if(_!==void 0)return _.texture;{const C=m.image;return S&&C&&C.height>0||w&&C&&h(C)?(r===null&&(r=new g0(s)),_=S?r.fromEquirectangular(m):r.fromCubemap(m),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),m.addEventListener("dispose",g),_.texture):null}}}return m}function f(m,y){return y===ef?m.mapping=xs:y===tf&&(m.mapping=po),m}function h(m){let y=0;const S=6;for(let w=0;w<S;w++)m[w]!==void 0&&y++;return y===S}function d(m){const y=m.target;y.removeEventListener("dispose",d);const S=e.get(y);S!==void 0&&(e.delete(y),S.dispose())}function g(m){const y=m.target;y.removeEventListener("dispose",g);const S=t.get(y);S!==void 0&&(t.delete(y),S.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function N1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Dh("WebGLRenderer: "+r+" extension not supported."),o}}}function D1(s,e,t,r){const o={},l=new WeakMap;function c(x){const m=x.target;m.index!==null&&e.remove(m.index);for(const S in m.attributes)e.remove(m.attributes[S]);m.removeEventListener("dispose",c),delete o[m.id];const y=l.get(m);y&&(e.remove(y),l.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(x,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function h(x){const m=x.attributes;for(const y in m)e.update(m[y],s.ARRAY_BUFFER)}function d(x){const m=[],y=x.index,S=x.attributes.position;let w=0;if(S===void 0)return;if(y!==null){const C=y.array;w=y.version;for(let L=0,P=C.length;L<P;L+=3){const V=C[L+0],I=C[L+1],z=C[L+2];m.push(V,I,I,z,z,V)}}else{const C=S.array;w=S.version;for(let L=0,P=C.length/3-1;L<P;L+=3){const V=L+0,I=L+1,z=L+2;m.push(V,I,I,z,z,V)}}const _=new(S.count>=65535?Og:Fg)(m,1);_.version=w;const M=l.get(x);M&&e.remove(M),l.set(x,_)}function g(x){const m=l.get(x);if(m){const y=x.index;y!==null&&m.version<y.version&&d(x)}else d(x);return l.get(x)}return{get:f,update:h,getWireframeAttribute:g}}function U1(s,e,t){let r;function o(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,m){s.drawElements(r,m,l,x*c),t.update(m,r,1)}function d(x,m,y){y!==0&&(s.drawElementsInstanced(r,m,l,x*c,y),t.update(m,r,y))}function g(x,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,l,x,0,y);let w=0;for(let _=0;_<y;_++)w+=m[_];t.update(w,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=d,this.renderMultiDraw=g}function F1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Nt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function O1(s,e,t){const r=new WeakMap,o=new on;function l(c,f,h){const d=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=g!==void 0?g.length:0;let m=r.get(f);if(m===void 0||m.count!==x){let Q=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",Q)};var y=Q;m!==void 0&&m.texture.dispose();const S=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;S===!0&&(P=1),w===!0&&(P=2),_===!0&&(P=3);let V=f.attributes.position.count*P,I=1;V>e.maxTextureSize&&(I=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const z=new Float32Array(V*I*4*x),E=new Ig(z,V,I,x);E.type=ki,E.needsUpdate=!0;const F=P*4;for(let B=0;B<x;B++){const K=M[B],he=C[B],le=L[B],D=V*I*4*B;for(let te=0;te<K.count;te++){const G=te*F;S===!0&&(o.fromBufferAttribute(K,te),z[D+G+0]=o.x,z[D+G+1]=o.y,z[D+G+2]=o.z,z[D+G+3]=0),w===!0&&(o.fromBufferAttribute(he,te),z[D+G+4]=o.x,z[D+G+5]=o.y,z[D+G+6]=o.z,z[D+G+7]=0),_===!0&&(o.fromBufferAttribute(le,te),z[D+G+8]=o.x,z[D+G+9]=o.y,z[D+G+10]=o.z,z[D+G+11]=le.itemSize===4?o.w:1)}}m={count:x,texture:E,size:new Dt(V,I)},r.set(f,m),f.addEventListener("dispose",Q)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let S=0;for(let _=0;_<d.length;_++)S+=d[_];const w=f.morphTargetsRelative?1:1-S;h.getUniforms().setValue(s,"morphTargetBaseInfluence",w),h.getUniforms().setValue(s,"morphTargetInfluences",d)}h.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:l}}function k1(s,e,t,r,o){let l=new WeakMap;function c(d){const g=o.render.frame,x=d.geometry,m=e.get(d,x);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),l.get(d)!==g&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),l.set(d,g))),d.isSkinnedMesh){const y=d.skeleton;l.get(y)!==g&&(y.update(),l.set(y,g))}return m}function f(){l=new WeakMap}function h(d){const g=d.target;g.removeEventListener("dispose",h),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:f}}const B1={[gg]:"LINEAR_TONE_MAPPING",[vg]:"REINHARD_TONE_MAPPING",[xg]:"CINEON_TONE_MAPPING",[_g]:"ACES_FILMIC_TONE_MAPPING",[Mg]:"AGX_TONE_MAPPING",[Sg]:"NEUTRAL_TONE_MAPPING",[yg]:"CUSTOM_TONE_MAPPING"};function z1(s,e,t,r,o){const l=new Zi(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new mo(e,t):void 0}),c=new Zi(e,t,{type:vr,depthBuffer:!1,stencilBuffer:!1}),f=new Un;f.setAttribute("position",new li([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new li([0,2,0,0,2,0],2));const h=new Dy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Fn(f,h),g=new Xg(-1,1,1,-1,0,1);let x=null,m=null,y=!1,S,w=null,_=[],M=!1;this.setSize=function(C,L){l.setSize(C,L),c.setSize(C,L);for(let P=0;P<_.length;P++){const V=_[P];V.setSize&&V.setSize(C,L)}},this.setEffects=function(C){_=C,M=_.length>0&&_[0].isRenderPass===!0;const L=l.width,P=l.height;for(let V=0;V<_.length;V++){const I=_[V];I.setSize&&I.setSize(L,P)}},this.begin=function(C,L){if(y||C.toneMapping===Yi&&_.length===0)return!1;if(w=L,L!==null){const P=L.width,V=L.height;(l.width!==P||l.height!==V)&&this.setSize(P,V)}return M===!1&&C.setRenderTarget(l),S=C.toneMapping,C.toneMapping=Yi,!0},this.hasRenderPass=function(){return M},this.end=function(C,L){C.toneMapping=S,y=!0;let P=l,V=c;for(let I=0;I<_.length;I++){const z=_[I];if(z.enabled!==!1&&(z.render(C,V,P,L),z.needsSwap!==!1)){const E=P;P=V,V=E}}if(x!==C.outputColorSpace||m!==C.toneMapping){x=C.outputColorSpace,m=C.toneMapping,h.defines={},Pt.getTransfer(x)===Vt&&(h.defines.SRGB_TRANSFER="");const I=B1[m];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(w),C.render(d,g),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),h.dispose()}}const Yg=new Dn,Fh=new mo(1,1),Qg=new Ig,Zg=new oy,Jg=new Hg,y0=[],M0=[],S0=new Float32Array(16),A0=new Float32Array(9),E0=new Float32Array(4);function yo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=y0[o];if(l===void 0&&(l=new Float32Array(o),y0[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function pn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function mn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function _c(s,e){let t=M0[e];t===void 0&&(t=new Int32Array(e),M0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function H1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function V1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2fv(this.addr,e),mn(t,e)}}function G1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;s.uniform3fv(this.addr,e),mn(t,e)}}function W1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4fv(this.addr,e),mn(t,e)}}function X1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;E0.set(r),s.uniformMatrix2fv(this.addr,!1,E0),mn(t,r)}}function j1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;A0.set(r),s.uniformMatrix3fv(this.addr,!1,A0),mn(t,r)}}function q1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;S0.set(r),s.uniformMatrix4fv(this.addr,!1,S0),mn(t,r)}}function K1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Y1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2iv(this.addr,e),mn(t,e)}}function Q1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3iv(this.addr,e),mn(t,e)}}function Z1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4iv(this.addr,e),mn(t,e)}}function J1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function $1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2uiv(this.addr,e),mn(t,e)}}function eA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3uiv(this.addr,e),mn(t,e)}}function tA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4uiv(this.addr,e),mn(t,e)}}function nA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Fh.compareFunction=t.isReversedDepthBuffer()?Kh:qh,l=Fh):l=Yg,t.setTexture2D(e||l,o)}function iA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Zg,o)}function rA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Jg,o)}function sA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Qg,o)}function oA(s){switch(s){case 5126:return H1;case 35664:return V1;case 35665:return G1;case 35666:return W1;case 35674:return X1;case 35675:return j1;case 35676:return q1;case 5124:case 35670:return K1;case 35667:case 35671:return Y1;case 35668:case 35672:return Q1;case 35669:case 35673:return Z1;case 5125:return J1;case 36294:return $1;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return sA}}function aA(s,e){s.uniform1fv(this.addr,e)}function lA(s,e){const t=yo(e,this.size,2);s.uniform2fv(this.addr,t)}function cA(s,e){const t=yo(e,this.size,3);s.uniform3fv(this.addr,t)}function uA(s,e){const t=yo(e,this.size,4);s.uniform4fv(this.addr,t)}function fA(s,e){const t=yo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function hA(s,e){const t=yo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function dA(s,e){const t=yo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function pA(s,e){s.uniform1iv(this.addr,e)}function mA(s,e){s.uniform2iv(this.addr,e)}function gA(s,e){s.uniform3iv(this.addr,e)}function vA(s,e){s.uniform4iv(this.addr,e)}function xA(s,e){s.uniform1uiv(this.addr,e)}function _A(s,e){s.uniform2uiv(this.addr,e)}function yA(s,e){s.uniform3uiv(this.addr,e)}function MA(s,e){s.uniform4uiv(this.addr,e)}function SA(s,e,t){const r=this.cache,o=e.length,l=_c(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Fh:c=Yg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function AA(s,e,t){const r=this.cache,o=e.length,l=_c(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Zg,l[c])}function EA(s,e,t){const r=this.cache,o=e.length,l=_c(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||Jg,l[c])}function wA(s,e,t){const r=this.cache,o=e.length,l=_c(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Qg,l[c])}function TA(s){switch(s){case 5126:return aA;case 35664:return lA;case 35665:return cA;case 35666:return uA;case 35674:return fA;case 35675:return hA;case 35676:return dA;case 5124:case 35670:return pA;case 35667:case 35671:return mA;case 35668:case 35672:return gA;case 35669:case 35673:return vA;case 5125:return xA;case 36294:return _A;case 36295:return yA;case 36296:return MA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return AA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return wA}}class CA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=oA(t.type)}}class RA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TA(t.type)}}class bA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Uf=/(\w+)(\])?(\[|\.)?/g;function w0(s,e){s.seq.push(e),s.map[e.id]=e}function PA(s,e,t){const r=s.name,o=r.length;for(Uf.lastIndex=0;;){const l=Uf.exec(r),c=Uf.lastIndex;let f=l[1];const h=l[2]==="]",d=l[3];if(h&&(f=f|0),d===void 0||d==="["&&c+2===o){w0(t,d===void 0?new CA(f,s,e):new RA(f,s,e));break}else{let x=t.map[f];x===void 0&&(x=new bA(f),w0(t,x)),t=x}}}class nc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),h=e.getUniformLocation(t,f.name);PA(f,h,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function T0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const LA=37297;let IA=0;function NA(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const C0=new wt;function DA(s){Pt._getMatrix(C0,Pt.workingColorSpace,s);const e=`mat3( ${C0.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(s)){case cc:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function R0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+NA(s.getShaderSource(e),f)}else return l}function UA(s,e){const t=DA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const FA={[gg]:"Linear",[vg]:"Reinhard",[xg]:"Cineon",[_g]:"ACESFilmic",[Mg]:"AgX",[Sg]:"Neutral",[yg]:"Custom"};function OA(s,e){const t=FA[e];return t===void 0?(xt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ql=new Z;function kA(){Pt.getLuminanceCoefficients(ql);const s=ql.x.toFixed(4),e=ql.y.toFixed(4),t=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function zA(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function HA(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function ua(s){return s!==""}function b0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function P0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(s){return s.replace(VA,WA)}const GA=new Map;function WA(s,e){let t=Tt[e];if(t===void 0){const r=GA.get(e);if(r!==void 0)t=Tt[r],xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Oh(t)}const XA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L0(s){return s.replace(XA,jA)}function jA(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function I0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const qA={[Zl]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function KA(s){return qA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const YA={[xs]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[gc]:"ENVMAP_TYPE_CUBE_UV"};function QA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":YA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const ZA={[po]:"ENVMAP_MODE_REFRACTION"};function JA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ZA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $A={[mg]:"ENVMAP_BLENDING_MULTIPLY",[E_]:"ENVMAP_BLENDING_MIX",[w_]:"ENVMAP_BLENDING_ADD"};function eE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":$A[s.combine]||"ENVMAP_BLENDING_NONE"}function tE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function nE(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=KA(t),d=QA(t),g=JA(t),x=eE(t),m=tE(t),y=BA(t),S=zA(l),w=o.createProgram();let _,M,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ua).join(`
`),_.length>0&&(_+=`
`),M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ua).join(`
`),M.length>0&&(M+=`
`)):(_=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),M=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Yi?OA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,UA("linearToOutputTexel",t.outputColorSpace),kA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ua).join(`
`)),c=Oh(c),c=b0(c,t),c=P0(c,t),f=Oh(f),f=b0(f,t),f=P0(f,t),c=L0(c),f=L0(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,M=["#define varying in",t.glslVersion===Bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const L=C+_+c,P=C+M+f,V=T0(o,o.VERTEX_SHADER,L),I=T0(o,o.FRAGMENT_SHADER,P);o.attachShader(w,V),o.attachShader(w,I),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function z(B){if(s.debug.checkShaderErrors){const K=o.getProgramInfoLog(w)||"",he=o.getShaderInfoLog(V)||"",le=o.getShaderInfoLog(I)||"",D=K.trim(),te=he.trim(),G=le.trim();let Y=!0,O=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,V,I);else{const ie=R0(o,V,"vertex"),N=R0(o,I,"fragment");Nt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+D+`
`+ie+`
`+N)}else D!==""?xt("WebGLProgram: Program Info Log:",D):(te===""||G==="")&&(O=!1);O&&(B.diagnostics={runnable:Y,programLog:D,vertexShader:{log:te,prefix:_},fragmentShader:{log:G,prefix:M}})}o.deleteShader(V),o.deleteShader(I),E=new nc(o,w),F=HA(o,w)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let F;this.getAttributes=function(){return F===void 0&&z(this),F};let Q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=o.getProgramParameter(w,LA)),Q},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=V,this.fragmentShader=I,this}let iE=0;class rE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new sE(e),t.set(e,r)),r}}class sE{constructor(e){this.id=iE++,this.code=e,this.usedTimes=0}}function oE(s){return s===_s||s===oc||s===ac}function aE(s,e,t,r,o,l){const c=new Ng,f=new rE,h=new Set,d=[],g=new Map,x=r.logarithmicDepthBuffer;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return h.add(E),E===0?"uv":`uv${E}`}function w(E,F,Q,B,K,he){const le=B.fog,D=K.geometry,te=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,Y=e.get(E.envMap||te,G),O=Y&&Y.mapping===gc?Y.image.height:null,ie=y[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&xt("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const N=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,W=N!==void 0?N.length:0;let _e=0;D.morphAttributes.position!==void 0&&(_e=1),D.morphAttributes.normal!==void 0&&(_e=2),D.morphAttributes.color!==void 0&&(_e=3);let ye,ve,X,ce;if(ie){const qe=ji[ie];ye=qe.vertexShader,ve=qe.fragmentShader}else ye=E.vertexShader,ve=E.fragmentShader,f.update(E),X=f.getVertexShaderID(E),ce=f.getFragmentShaderID(E);const H=s.getRenderTarget(),re=s.state.buffers.depth.getReversed(),Ae=K.isInstancedMesh===!0,Ne=K.isBatchedMesh===!0,nt=!!E.map,We=!!E.matcap,ct=!!Y,ke=!!E.aoMap,je=!!E.lightMap,Ve=!!E.bumpMap,ut=!!E.normalMap,vt=!!E.displacementMap,U=!!E.emissiveMap,ot=!!E.metalnessMap,He=!!E.roughnessMap,lt=E.anisotropy>0,Te=E.clearcoat>0,_t=E.dispersion>0,b=E.iridescence>0,A=E.sheen>0,ne=E.transmission>0,me=lt&&!!E.anisotropyMap,Me=Te&&!!E.clearcoatMap,Ce=Te&&!!E.clearcoatNormalMap,be=Te&&!!E.clearcoatRoughnessMap,pe=b&&!!E.iridescenceMap,ge=b&&!!E.iridescenceThicknessMap,Be=A&&!!E.sheenColorMap,Xe=A&&!!E.sheenRoughnessMap,De=!!E.specularMap,Ie=!!E.specularColorMap,ft=!!E.specularIntensityMap,ht=ne&&!!E.transmissionMap,Mt=ne&&!!E.thicknessMap,j=!!E.gradientMap,we=!!E.alphaMap,xe=E.alphaTest>0,Ye=!!E.alphaHash,Fe=!!E.extensions;let Se=Yi;E.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Se=s.toneMapping);const Qe={shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:ye,fragmentShader:ve,defines:E.defines,customVertexShaderID:X,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ne,batchingColor:Ne&&K._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&K.instanceColor!==null,instancingMorph:Ae&&K.morphTexture!==null,outputColorSpace:H===null?s.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:nt,matcap:We,envMap:ct,envMapMode:ct&&Y.mapping,envMapCubeUVHeight:O,aoMap:ke,lightMap:je,bumpMap:Ve,normalMap:ut,displacementMap:vt,emissiveMap:U,normalMapObjectSpace:ut&&E.normalMapType===R_,normalMapTangentSpace:ut&&E.normalMapType===Um,packedNormalMap:ut&&E.normalMapType===Um&&oE(E.normalMap.format),metalnessMap:ot,roughnessMap:He,anisotropy:lt,anisotropyMap:me,clearcoat:Te,clearcoatMap:Me,clearcoatNormalMap:Ce,clearcoatRoughnessMap:be,dispersion:_t,iridescence:b,iridescenceMap:pe,iridescenceThicknessMap:ge,sheen:A,sheenColorMap:Be,sheenRoughnessMap:Xe,specularMap:De,specularColorMap:Ie,specularIntensityMap:ft,transmission:ne,transmissionMap:ht,thicknessMap:Mt,gradientMap:j,opaque:E.transparent===!1&&E.blending===uo&&E.alphaToCoverage===!1,alphaMap:we,alphaTest:xe,alphaHash:Ye,combine:E.combine,mapUv:nt&&S(E.map.channel),aoMapUv:ke&&S(E.aoMap.channel),lightMapUv:je&&S(E.lightMap.channel),bumpMapUv:Ve&&S(E.bumpMap.channel),normalMapUv:ut&&S(E.normalMap.channel),displacementMapUv:vt&&S(E.displacementMap.channel),emissiveMapUv:U&&S(E.emissiveMap.channel),metalnessMapUv:ot&&S(E.metalnessMap.channel),roughnessMapUv:He&&S(E.roughnessMap.channel),anisotropyMapUv:me&&S(E.anisotropyMap.channel),clearcoatMapUv:Me&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&S(E.sheenRoughnessMap.channel),specularMapUv:De&&S(E.specularMap.channel),specularColorMapUv:Ie&&S(E.specularColorMap.channel),specularIntensityMapUv:ft&&S(E.specularIntensityMap.channel),transmissionMapUv:ht&&S(E.transmissionMap.channel),thicknessMapUv:Mt&&S(E.thicknessMap.channel),alphaMapUv:we&&S(E.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ut||lt),vertexNormals:!!D.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!D.attributes.uv&&(nt||we),fog:!!le,useFog:E.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||D.attributes.normal===void 0&&ut===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:re,skinning:K.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:_e,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:he.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&Q.length>0,shadowMapType:s.shadowMap.type,toneMapping:Se,decodeVideoTexture:nt&&E.map.isVideoTexture===!0&&Pt.getTransfer(E.map.colorSpace)===Vt,decodeVideoTextureEmissive:U&&E.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(E.emissiveMap.colorSpace)===Vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Fi,flipSided:E.side===Jn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Qe.vertexUv1s=h.has(1),Qe.vertexUv2s=h.has(2),Qe.vertexUv3s=h.has(3),h.clear(),Qe}function _(E){const F=[];if(E.shaderID?F.push(E.shaderID):(F.push(E.customVertexShaderID),F.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Q in E.defines)F.push(Q),F.push(E.defines[Q]);return E.isRawShaderMaterial===!1&&(M(F,E),C(F,E),F.push(s.outputColorSpace)),F.push(E.customProgramCacheKey),F.join()}function M(E,F){E.push(F.precision),E.push(F.outputColorSpace),E.push(F.envMapMode),E.push(F.envMapCubeUVHeight),E.push(F.mapUv),E.push(F.alphaMapUv),E.push(F.lightMapUv),E.push(F.aoMapUv),E.push(F.bumpMapUv),E.push(F.normalMapUv),E.push(F.displacementMapUv),E.push(F.emissiveMapUv),E.push(F.metalnessMapUv),E.push(F.roughnessMapUv),E.push(F.anisotropyMapUv),E.push(F.clearcoatMapUv),E.push(F.clearcoatNormalMapUv),E.push(F.clearcoatRoughnessMapUv),E.push(F.iridescenceMapUv),E.push(F.iridescenceThicknessMapUv),E.push(F.sheenColorMapUv),E.push(F.sheenRoughnessMapUv),E.push(F.specularMapUv),E.push(F.specularColorMapUv),E.push(F.specularIntensityMapUv),E.push(F.transmissionMapUv),E.push(F.thicknessMapUv),E.push(F.combine),E.push(F.fogExp2),E.push(F.sizeAttenuation),E.push(F.morphTargetsCount),E.push(F.morphAttributeCount),E.push(F.numDirLights),E.push(F.numPointLights),E.push(F.numSpotLights),E.push(F.numSpotLightMaps),E.push(F.numHemiLights),E.push(F.numRectAreaLights),E.push(F.numDirLightShadows),E.push(F.numPointLightShadows),E.push(F.numSpotLightShadows),E.push(F.numSpotLightShadowsWithMaps),E.push(F.numLightProbes),E.push(F.shadowMapType),E.push(F.toneMapping),E.push(F.numClippingPlanes),E.push(F.numClipIntersection),E.push(F.depthPacking)}function C(E,F){c.disableAll(),F.instancing&&c.enable(0),F.instancingColor&&c.enable(1),F.instancingMorph&&c.enable(2),F.matcap&&c.enable(3),F.envMap&&c.enable(4),F.normalMapObjectSpace&&c.enable(5),F.normalMapTangentSpace&&c.enable(6),F.clearcoat&&c.enable(7),F.iridescence&&c.enable(8),F.alphaTest&&c.enable(9),F.vertexColors&&c.enable(10),F.vertexAlphas&&c.enable(11),F.vertexUv1s&&c.enable(12),F.vertexUv2s&&c.enable(13),F.vertexUv3s&&c.enable(14),F.vertexTangents&&c.enable(15),F.anisotropy&&c.enable(16),F.alphaHash&&c.enable(17),F.batching&&c.enable(18),F.dispersion&&c.enable(19),F.batchingColor&&c.enable(20),F.gradientMap&&c.enable(21),F.packedNormalMap&&c.enable(22),F.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),F.fog&&c.enable(0),F.useFog&&c.enable(1),F.flatShading&&c.enable(2),F.logarithmicDepthBuffer&&c.enable(3),F.reversedDepthBuffer&&c.enable(4),F.skinning&&c.enable(5),F.morphTargets&&c.enable(6),F.morphNormals&&c.enable(7),F.morphColors&&c.enable(8),F.premultipliedAlpha&&c.enable(9),F.shadowMapEnabled&&c.enable(10),F.doubleSided&&c.enable(11),F.flipSided&&c.enable(12),F.useDepthPacking&&c.enable(13),F.dithering&&c.enable(14),F.transmission&&c.enable(15),F.sheen&&c.enable(16),F.opaque&&c.enable(17),F.pointsUvs&&c.enable(18),F.decodeVideoTexture&&c.enable(19),F.decodeVideoTextureEmissive&&c.enable(20),F.alphaToCoverage&&c.enable(21),F.numLightProbeGrids>0&&c.enable(22),E.push(c.mask)}function L(E){const F=y[E.type];let Q;if(F){const B=ji[F];Q=Ly.clone(B.uniforms)}else Q=E.uniforms;return Q}function P(E,F){let Q=g.get(F);return Q!==void 0?++Q.usedTimes:(Q=new nE(s,F,E,o),d.push(Q),g.set(F,Q)),Q}function V(E){if(--E.usedTimes===0){const F=d.indexOf(E);d[F]=d[d.length-1],d.pop(),g.delete(E.cacheKey),E.destroy()}}function I(E){f.remove(E)}function z(){f.dispose()}return{getParameters:w,getProgramCacheKey:_,getUniforms:L,acquireProgram:P,releaseProgram:V,releaseShaderCache:I,programs:d,dispose:z}}function lE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function cE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function N0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function D0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function f(m,y,S,w,_,M){let C=s[e];return C===void 0?(C={id:m.id,object:m,geometry:y,material:S,materialVariant:c(m),groupOrder:w,renderOrder:m.renderOrder,z:_,group:M},s[e]=C):(C.id=m.id,C.object=m,C.geometry=y,C.material=S,C.materialVariant=c(m),C.groupOrder=w,C.renderOrder=m.renderOrder,C.z=_,C.group=M),e++,C}function h(m,y,S,w,_,M){const C=f(m,y,S,w,_,M);S.transmission>0?r.push(C):S.transparent===!0?o.push(C):t.push(C)}function d(m,y,S,w,_,M){const C=f(m,y,S,w,_,M);S.transmission>0?r.unshift(C):S.transparent===!0?o.unshift(C):t.unshift(C)}function g(m,y){t.length>1&&t.sort(m||cE),r.length>1&&r.sort(y||N0),o.length>1&&o.sort(y||N0)}function x(){for(let m=e,y=s.length;m<y;m++){const S=s[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:d,finish:x,sort:g}}function uE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new D0,s.set(r,[c])):o>=l.length?(c=new D0,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function fE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new zt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new zt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":t={color:new zt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function hE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let dE=0;function pE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mE(s){const e=new fE,t=hE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new Z);const o=new Z,l=new tn,c=new tn;function f(d){let g=0,x=0,m=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let y=0,S=0,w=0,_=0,M=0,C=0,L=0,P=0,V=0,I=0,z=0;d.sort(pE);for(let F=0,Q=d.length;F<Q;F++){const B=d[F],K=B.color,he=B.intensity,le=B.distance;let D=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===_s?D=B.shadow.map.texture:D=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)g+=K.r*he,x+=K.g*he,m+=K.b*he;else if(B.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(B.sh.coefficients[te],he);z++}else if(B.isDirectionalLight){const te=e.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const G=B.shadow,Y=t.get(B);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=D,r.directionalShadowMatrix[y]=B.shadow.matrix,C++}r.directional[y]=te,y++}else if(B.isSpotLight){const te=e.get(B);te.position.setFromMatrixPosition(B.matrixWorld),te.color.copy(K).multiplyScalar(he),te.distance=le,te.coneCos=Math.cos(B.angle),te.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),te.decay=B.decay,r.spot[w]=te;const G=B.shadow;if(B.map&&(r.spotLightMap[V]=B.map,V++,G.updateMatrices(B),B.castShadow&&I++),r.spotLightMatrix[w]=G.matrix,B.castShadow){const Y=t.get(B);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,r.spotShadow[w]=Y,r.spotShadowMap[w]=D,P++}w++}else if(B.isRectAreaLight){const te=e.get(B);te.color.copy(K).multiplyScalar(he),te.halfWidth.set(B.width*.5,0,0),te.halfHeight.set(0,B.height*.5,0),r.rectArea[_]=te,_++}else if(B.isPointLight){const te=e.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity),te.distance=B.distance,te.decay=B.decay,B.castShadow){const G=B.shadow,Y=t.get(B);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,Y.shadowCameraNear=G.camera.near,Y.shadowCameraFar=G.camera.far,r.pointShadow[S]=Y,r.pointShadowMap[S]=D,r.pointShadowMatrix[S]=B.shadow.matrix,L++}r.point[S]=te,S++}else if(B.isHemisphereLight){const te=e.get(B);te.skyColor.copy(B.color).multiplyScalar(he),te.groundColor.copy(B.groundColor).multiplyScalar(he),r.hemi[M]=te,M++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ke.LTC_FLOAT_1,r.rectAreaLTC2=Ke.LTC_FLOAT_2):(r.rectAreaLTC1=Ke.LTC_HALF_1,r.rectAreaLTC2=Ke.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=m;const E=r.hash;(E.directionalLength!==y||E.pointLength!==S||E.spotLength!==w||E.rectAreaLength!==_||E.hemiLength!==M||E.numDirectionalShadows!==C||E.numPointShadows!==L||E.numSpotShadows!==P||E.numSpotMaps!==V||E.numLightProbes!==z)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=_,r.point.length=S,r.hemi.length=M,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+V-I,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=z,E.directionalLength=y,E.pointLength=S,E.spotLength=w,E.rectAreaLength=_,E.hemiLength=M,E.numDirectionalShadows=C,E.numPointShadows=L,E.numSpotShadows=P,E.numSpotMaps=V,E.numLightProbes=z,r.version=dE++)}function h(d,g){let x=0,m=0,y=0,S=0,w=0;const _=g.matrixWorldInverse;for(let M=0,C=d.length;M<C;M++){const L=d[M];if(L.isDirectionalLight){const P=r.directional[x];P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),x++}else if(L.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),y++}else if(L.isRectAreaLight){const P=r.rectArea[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),c.identity(),l.copy(L.matrixWorld),l.premultiply(_),c.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),S++}else if(L.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),m++}else if(L.isHemisphereLight){const P=r.hemi[w];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(_),w++}}}return{setup:f,setupView:h,state:r}}function U0(s){const e=new mE(s),t=[],r=[],o=[];function l(m){x.camera=m,t.length=0,r.length=0,o.length=0}function c(m){t.push(m)}function f(m){r.push(m)}function h(m){o.push(m)}function d(){e.setup(t)}function g(m){e.setupView(t,m)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:d,setupLightsView:g,pushLight:c,pushShadow:f,pushLightProbeGrid:h}}function gE(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new U0(s),e.set(o,[f])):l>=c.length?(f=new U0(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const vE=`void main() {
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
}`,_E=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],yE=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],F0=new tn,oa=new Z,Ff=new Z;function ME(s,e,t){let r=new zg;const o=new Dt,l=new Dt,c=new on,f=new Uy,h=new Fy,d={},g=t.maxTextureSize,x={[jr]:Jn,[Jn]:jr,[Fi]:Fi},m=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:vE,fragmentShader:xE}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const S=new Un;S.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Fn(S,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let M=this.type;this.render=function(I,z,E){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;this.type===s_&&(xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zl);const F=s.getRenderTarget(),Q=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),K=s.state;K.setBlending(mr),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const he=M!==this.type;he&&z.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(D=>D.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,D=I.length;le<D;le++){const te=I[le],G=te.shadow;if(G===void 0){xt("WebGLShadowMap:",te,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const Y=G.getFrameExtents();o.multiply(Y),l.copy(G.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/Y.x),o.x=l.x*Y.x,G.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/Y.y),o.y=l.y*Y.y,G.mapSize.y=l.y));const O=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=O,G.map===null||he===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ca){if(te.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Zi(o.x,o.y,{format:_s,type:vr,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),G.map.texture.name=te.name+".shadowMap",G.map.depthTexture=new mo(o.x,o.y,ki),G.map.depthTexture.name=te.name+".shadowMapDepth",G.map.depthTexture.format=xr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=dn,G.map.depthTexture.magFilter=dn}else te.isPointLight?(G.map=new Kg(o.x),G.map.depthTexture=new Cy(o.x,Ji)):(G.map=new Zi(o.x,o.y),G.map.depthTexture=new mo(o.x,o.y,Ji)),G.map.depthTexture.name=te.name+".shadowMap",G.map.depthTexture.format=xr,this.type===Zl?(G.map.depthTexture.compareFunction=O?Kh:qh,G.map.depthTexture.minFilter=Mn,G.map.depthTexture.magFilter=Mn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=dn,G.map.depthTexture.magFilter=dn);G.camera.updateProjectionMatrix()}const ie=G.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<ie;N++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,N),s.clear();else{N===0&&(s.setRenderTarget(G.map),s.clear());const W=G.getViewport(N);c.set(l.x*W.x,l.y*W.y,l.x*W.z,l.y*W.w),K.viewport(c)}if(te.isPointLight){const W=G.camera,_e=G.matrix,ye=te.distance||W.far;ye!==W.far&&(W.far=ye,W.updateProjectionMatrix()),oa.setFromMatrixPosition(te.matrixWorld),W.position.copy(oa),Ff.copy(W.position),Ff.add(_E[N]),W.up.copy(yE[N]),W.lookAt(Ff),W.updateMatrixWorld(),_e.makeTranslation(-oa.x,-oa.y,-oa.z),F0.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),G._frustum.setFromProjectionMatrix(F0,W.coordinateSystem,W.reversedDepth)}else G.updateMatrices(te);r=G.getFrustum(),P(z,E,G.camera,te,this.type)}G.isPointLightShadow!==!0&&this.type===ca&&C(G,E),G.needsUpdate=!1}M=this.type,_.needsUpdate=!1,s.setRenderTarget(F,Q,B)};function C(I,z){const E=e.update(w);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Zi(o.x,o.y,{format:_s,type:vr})),m.uniforms.shadow_pass.value=I.map.depthTexture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(z,null,E,m,w,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(z,null,E,y,w,null)}function L(I,z,E,F){let Q=null;const B=E.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)Q=B;else if(Q=E.isPointLight===!0?h:f,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const K=Q.uuid,he=z.uuid;let le=d[K];le===void 0&&(le={},d[K]=le);let D=le[he];D===void 0&&(D=Q.clone(),le[he]=D,z.addEventListener("dispose",V)),Q=D}if(Q.visible=z.visible,Q.wireframe=z.wireframe,F===ca?Q.side=z.shadowSide!==null?z.shadowSide:z.side:Q.side=z.shadowSide!==null?z.shadowSide:x[z.side],Q.alphaMap=z.alphaMap,Q.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,Q.map=z.map,Q.clipShadows=z.clipShadows,Q.clippingPlanes=z.clippingPlanes,Q.clipIntersection=z.clipIntersection,Q.displacementMap=z.displacementMap,Q.displacementScale=z.displacementScale,Q.displacementBias=z.displacementBias,Q.wireframeLinewidth=z.wireframeLinewidth,Q.linewidth=z.linewidth,E.isPointLight===!0&&Q.isMeshDistanceMaterial===!0){const K=s.properties.get(Q);K.light=E}return Q}function P(I,z,E,F,Q){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&Q===ca)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,I.matrixWorld);const he=e.update(I),le=I.material;if(Array.isArray(le)){const D=he.groups;for(let te=0,G=D.length;te<G;te++){const Y=D[te],O=le[Y.materialIndex];if(O&&O.visible){const ie=L(I,O,F,Q);I.onBeforeShadow(s,I,z,E,he,ie,Y),s.renderBufferDirect(E,null,he,ie,I,Y),I.onAfterShadow(s,I,z,E,he,ie,Y)}}}else if(le.visible){const D=L(I,le,F,Q);I.onBeforeShadow(s,I,z,E,he,D,null),s.renderBufferDirect(E,null,he,D,I,null),I.onAfterShadow(s,I,z,E,he,D,null)}}const K=I.children;for(let he=0,le=K.length;he<le;he++)P(K[he],z,E,F,Q)}function V(I){I.target.removeEventListener("dispose",V);for(const E in d){const F=d[E],Q=I.target.uuid;Q in F&&(F[Q].dispose(),delete F[Q])}}}function SE(s,e){function t(){let j=!1;const we=new on;let xe=null;const Ye=new on(0,0,0,0);return{setMask:function(Fe){xe!==Fe&&!j&&(s.colorMask(Fe,Fe,Fe,Fe),xe=Fe)},setLocked:function(Fe){j=Fe},setClear:function(Fe,Se,Qe,qe,At){At===!0&&(Fe*=qe,Se*=qe,Qe*=qe),we.set(Fe,Se,Qe,qe),Ye.equals(we)===!1&&(s.clearColor(Fe,Se,Qe,qe),Ye.copy(we))},reset:function(){j=!1,xe=null,Ye.set(-1,0,0,0)}}}function r(){let j=!1,we=!1,xe=null,Ye=null,Fe=null;return{setReversed:function(Se){if(we!==Se){const Qe=e.get("EXT_clip_control");Se?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),we=Se;const qe=Fe;Fe=null,this.setClear(qe)}},getReversed:function(){return we},setTest:function(Se){Se?H(s.DEPTH_TEST):re(s.DEPTH_TEST)},setMask:function(Se){xe!==Se&&!j&&(s.depthMask(Se),xe=Se)},setFunc:function(Se){if(we&&(Se=k_[Se]),Ye!==Se){switch(Se){case Qf:s.depthFunc(s.NEVER);break;case Zf:s.depthFunc(s.ALWAYS);break;case Jf:s.depthFunc(s.LESS);break;case ho:s.depthFunc(s.LEQUAL);break;case $f:s.depthFunc(s.EQUAL);break;case eh:s.depthFunc(s.GEQUAL);break;case th:s.depthFunc(s.GREATER);break;case nh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ye=Se}},setLocked:function(Se){j=Se},setClear:function(Se){Fe!==Se&&(Fe=Se,we&&(Se=1-Se),s.clearDepth(Se))},reset:function(){j=!1,xe=null,Ye=null,Fe=null,we=!1}}}function o(){let j=!1,we=null,xe=null,Ye=null,Fe=null,Se=null,Qe=null,qe=null,At=null;return{setTest:function(Lt){j||(Lt?H(s.STENCIL_TEST):re(s.STENCIL_TEST))},setMask:function(Lt){we!==Lt&&!j&&(s.stencilMask(Lt),we=Lt)},setFunc:function(Lt,an,On){(xe!==Lt||Ye!==an||Fe!==On)&&(s.stencilFunc(Lt,an,On),xe=Lt,Ye=an,Fe=On)},setOp:function(Lt,an,On){(Se!==Lt||Qe!==an||qe!==On)&&(s.stencilOp(Lt,an,On),Se=Lt,Qe=an,qe=On)},setLocked:function(Lt){j=Lt},setClear:function(Lt){At!==Lt&&(s.clearStencil(Lt),At=Lt)},reset:function(){j=!1,we=null,xe=null,Ye=null,Fe=null,Se=null,Qe=null,qe=null,At=null}}}const l=new t,c=new r,f=new o,h=new WeakMap,d=new WeakMap;let g={},x={},m={},y=new WeakMap,S=[],w=null,_=!1,M=null,C=null,L=null,P=null,V=null,I=null,z=null,E=new zt(0,0,0),F=0,Q=!1,B=null,K=null,he=null,le=null,D=null;const te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(O)[1]),G=Y>=1):O.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),G=Y>=2);let ie=null,N={};const W=s.getParameter(s.SCISSOR_BOX),_e=s.getParameter(s.VIEWPORT),ye=new on().fromArray(W),ve=new on().fromArray(_e);function X(j,we,xe,Ye){const Fe=new Uint8Array(4),Se=s.createTexture();s.bindTexture(j,Se),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<xe;Qe++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,Ye,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(we+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return Se}const ce={};ce[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),H(s.DEPTH_TEST),c.setFunc(ho),Ve(!1),ut(Lm),H(s.CULL_FACE),ke(mr);function H(j){g[j]!==!0&&(s.enable(j),g[j]=!0)}function re(j){g[j]!==!1&&(s.disable(j),g[j]=!1)}function Ae(j,we){return m[j]!==we?(s.bindFramebuffer(j,we),m[j]=we,j===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=we),j===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=we),!0):!1}function Ne(j,we){let xe=S,Ye=!1;if(j){xe=y.get(we),xe===void 0&&(xe=[],y.set(we,xe));const Fe=j.textures;if(xe.length!==Fe.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,Qe=Fe.length;Se<Qe;Se++)xe[Se]=s.COLOR_ATTACHMENT0+Se;xe.length=Fe.length,Ye=!0}}else xe[0]!==s.BACK&&(xe[0]=s.BACK,Ye=!0);Ye&&s.drawBuffers(xe)}function nt(j){return w!==j?(s.useProgram(j),w=j,!0):!1}const We={[ps]:s.FUNC_ADD,[a_]:s.FUNC_SUBTRACT,[l_]:s.FUNC_REVERSE_SUBTRACT};We[c_]=s.MIN,We[u_]=s.MAX;const ct={[f_]:s.ZERO,[h_]:s.ONE,[d_]:s.SRC_COLOR,[Kf]:s.SRC_ALPHA,[__]:s.SRC_ALPHA_SATURATE,[v_]:s.DST_COLOR,[m_]:s.DST_ALPHA,[p_]:s.ONE_MINUS_SRC_COLOR,[Yf]:s.ONE_MINUS_SRC_ALPHA,[x_]:s.ONE_MINUS_DST_COLOR,[g_]:s.ONE_MINUS_DST_ALPHA,[y_]:s.CONSTANT_COLOR,[M_]:s.ONE_MINUS_CONSTANT_COLOR,[S_]:s.CONSTANT_ALPHA,[A_]:s.ONE_MINUS_CONSTANT_ALPHA};function ke(j,we,xe,Ye,Fe,Se,Qe,qe,At,Lt){if(j===mr){_===!0&&(re(s.BLEND),_=!1);return}if(_===!1&&(H(s.BLEND),_=!0),j!==o_){if(j!==M||Lt!==Q){if((C!==ps||V!==ps)&&(s.blendEquation(s.FUNC_ADD),C=ps,V=ps),Lt)switch(j){case uo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Im:s.blendFunc(s.ONE,s.ONE);break;case Nm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Nt("WebGLState: Invalid blending: ",j);break}else switch(j){case uo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Im:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Nm:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dm:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",j);break}L=null,P=null,I=null,z=null,E.set(0,0,0),F=0,M=j,Q=Lt}return}Fe=Fe||we,Se=Se||xe,Qe=Qe||Ye,(we!==C||Fe!==V)&&(s.blendEquationSeparate(We[we],We[Fe]),C=we,V=Fe),(xe!==L||Ye!==P||Se!==I||Qe!==z)&&(s.blendFuncSeparate(ct[xe],ct[Ye],ct[Se],ct[Qe]),L=xe,P=Ye,I=Se,z=Qe),(qe.equals(E)===!1||At!==F)&&(s.blendColor(qe.r,qe.g,qe.b,At),E.copy(qe),F=At),M=j,Q=!1}function je(j,we){j.side===Fi?re(s.CULL_FACE):H(s.CULL_FACE);let xe=j.side===Jn;we&&(xe=!xe),Ve(xe),j.blending===uo&&j.transparent===!1?ke(mr):ke(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),l.setMask(j.colorWrite);const Ye=j.stencilWrite;f.setTest(Ye),Ye&&(f.setMask(j.stencilWriteMask),f.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),f.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),U(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?H(s.SAMPLE_ALPHA_TO_COVERAGE):re(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(j){B!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),B=j)}function ut(j){j!==i_?(H(s.CULL_FACE),j!==K&&(j===Lm?s.cullFace(s.BACK):j===r_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):re(s.CULL_FACE),K=j}function vt(j){j!==he&&(G&&s.lineWidth(j),he=j)}function U(j,we,xe){j?(H(s.POLYGON_OFFSET_FILL),(le!==we||D!==xe)&&(le=we,D=xe,c.getReversed()&&(we=-we),s.polygonOffset(we,xe))):re(s.POLYGON_OFFSET_FILL)}function ot(j){j?H(s.SCISSOR_TEST):re(s.SCISSOR_TEST)}function He(j){j===void 0&&(j=s.TEXTURE0+te-1),ie!==j&&(s.activeTexture(j),ie=j)}function lt(j,we,xe){xe===void 0&&(ie===null?xe=s.TEXTURE0+te-1:xe=ie);let Ye=N[xe];Ye===void 0&&(Ye={type:void 0,texture:void 0},N[xe]=Ye),(Ye.type!==j||Ye.texture!==we)&&(ie!==xe&&(s.activeTexture(xe),ie=xe),s.bindTexture(j,we||ce[j]),Ye.type=j,Ye.texture=we)}function Te(){const j=N[ie];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function _t(){try{s.compressedTexImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function b(){try{s.compressedTexImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function A(){try{s.texSubImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function ne(){try{s.texSubImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function me(){try{s.compressedTexSubImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function Me(){try{s.compressedTexSubImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function Ce(){try{s.texStorage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function be(){try{s.texStorage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function pe(){try{s.texImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function ge(){try{s.texImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function Be(j){return x[j]!==void 0?x[j]:s.getParameter(j)}function Xe(j,we){x[j]!==we&&(s.pixelStorei(j,we),x[j]=we)}function De(j){ye.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),ye.copy(j))}function Ie(j){ve.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),ve.copy(j))}function ft(j,we){let xe=d.get(we);xe===void 0&&(xe=new WeakMap,d.set(we,xe));let Ye=xe.get(j);Ye===void 0&&(Ye=s.getUniformBlockIndex(we,j.name),xe.set(j,Ye))}function ht(j,we){const Ye=d.get(we).get(j);h.get(we)!==Ye&&(s.uniformBlockBinding(we,Ye,j.__bindingPointIndex),h.set(we,Ye))}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},x={},ie=null,N={},m={},y=new WeakMap,S=[],w=null,_=!1,M=null,C=null,L=null,P=null,V=null,I=null,z=null,E=new zt(0,0,0),F=0,Q=!1,B=null,K=null,he=null,le=null,D=null,ye.set(0,0,s.canvas.width,s.canvas.height),ve.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:H,disable:re,bindFramebuffer:Ae,drawBuffers:Ne,useProgram:nt,setBlending:ke,setMaterial:je,setFlipSided:Ve,setCullFace:ut,setLineWidth:vt,setPolygonOffset:U,setScissorTest:ot,activeTexture:He,bindTexture:lt,unbindTexture:Te,compressedTexImage2D:_t,compressedTexImage3D:b,texImage2D:pe,texImage3D:ge,pixelStorei:Xe,getParameter:Be,updateUBOMapping:ft,uniformBlockBinding:ht,texStorage2D:Ce,texStorage3D:be,texSubImage2D:A,texSubImage3D:ne,compressedTexSubImage2D:me,compressedTexSubImage3D:Me,scissor:De,viewport:Ie,reset:Mt}}function AE(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Dt,g=new WeakMap,x=new Set;let m;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,A){return S?new OffscreenCanvas(b,A):fc("canvas")}function _(b,A,ne){let me=1;const Me=_t(b);if((Me.width>ne||Me.height>ne)&&(me=ne/Math.max(Me.width,Me.height)),me<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Ce=Math.floor(me*Me.width),be=Math.floor(me*Me.height);m===void 0&&(m=w(Ce,be));const pe=A?w(Ce,be):m;return pe.width=Ce,pe.height=be,pe.getContext("2d").drawImage(b,0,0,Ce,be),xt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+Ce+"x"+be+")."),pe}else return"data"in b&&xt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),b;return b}function M(b){return b.generateMipmaps}function C(b){s.generateMipmap(b)}function L(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(b,A,ne,me,Me,Ce=!1){if(b!==null){if(s[b]!==void 0)return s[b];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let be;me&&(be=e.get("EXT_texture_norm16"),be||xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=A;if(A===s.RED&&(ne===s.FLOAT&&(pe=s.R32F),ne===s.HALF_FLOAT&&(pe=s.R16F),ne===s.UNSIGNED_BYTE&&(pe=s.R8),ne===s.UNSIGNED_SHORT&&be&&(pe=be.R16_EXT),ne===s.SHORT&&be&&(pe=be.R16_SNORM_EXT)),A===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(pe=s.R8UI),ne===s.UNSIGNED_SHORT&&(pe=s.R16UI),ne===s.UNSIGNED_INT&&(pe=s.R32UI),ne===s.BYTE&&(pe=s.R8I),ne===s.SHORT&&(pe=s.R16I),ne===s.INT&&(pe=s.R32I)),A===s.RG&&(ne===s.FLOAT&&(pe=s.RG32F),ne===s.HALF_FLOAT&&(pe=s.RG16F),ne===s.UNSIGNED_BYTE&&(pe=s.RG8),ne===s.UNSIGNED_SHORT&&be&&(pe=be.RG16_EXT),ne===s.SHORT&&be&&(pe=be.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(pe=s.RG8UI),ne===s.UNSIGNED_SHORT&&(pe=s.RG16UI),ne===s.UNSIGNED_INT&&(pe=s.RG32UI),ne===s.BYTE&&(pe=s.RG8I),ne===s.SHORT&&(pe=s.RG16I),ne===s.INT&&(pe=s.RG32I)),A===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),ne===s.UNSIGNED_INT&&(pe=s.RGB32UI),ne===s.BYTE&&(pe=s.RGB8I),ne===s.SHORT&&(pe=s.RGB16I),ne===s.INT&&(pe=s.RGB32I)),A===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),ne===s.UNSIGNED_INT&&(pe=s.RGBA32UI),ne===s.BYTE&&(pe=s.RGBA8I),ne===s.SHORT&&(pe=s.RGBA16I),ne===s.INT&&(pe=s.RGBA32I)),A===s.RGB&&(ne===s.UNSIGNED_SHORT&&be&&(pe=be.RGB16_EXT),ne===s.SHORT&&be&&(pe=be.RGB16_SNORM_EXT),ne===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),ne===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),A===s.RGBA){const ge=Ce?cc:Pt.getTransfer(Me);ne===s.FLOAT&&(pe=s.RGBA32F),ne===s.HALF_FLOAT&&(pe=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(pe=ge===Vt?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT&&be&&(pe=be.RGBA16_EXT),ne===s.SHORT&&be&&(pe=be.RGBA16_SNORM_EXT),ne===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function V(b,A){let ne;return b?A===null||A===Ji||A===ma?ne=s.DEPTH24_STENCIL8:A===ki?ne=s.DEPTH32F_STENCIL8:A===pa&&(ne=s.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ji||A===ma?ne=s.DEPTH_COMPONENT24:A===ki?ne=s.DEPTH_COMPONENT32F:A===pa&&(ne=s.DEPTH_COMPONENT16),ne}function I(b,A){return M(b)===!0||b.isFramebufferTexture&&b.minFilter!==dn&&b.minFilter!==Mn?Math.log2(Math.max(A.width,A.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?A.mipmaps.length:1}function z(b){const A=b.target;A.removeEventListener("dispose",z),F(A),A.isVideoTexture&&g.delete(A),A.isHTMLTexture&&x.delete(A)}function E(b){const A=b.target;A.removeEventListener("dispose",E),B(A)}function F(b){const A=r.get(b);if(A.__webglInit===void 0)return;const ne=b.source,me=y.get(ne);if(me){const Me=me[A.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&Q(b),Object.keys(me).length===0&&y.delete(ne)}r.remove(b)}function Q(b){const A=r.get(b);s.deleteTexture(A.__webglTexture);const ne=b.source,me=y.get(ne);delete me[A.__cacheKey],c.memory.textures--}function B(b){const A=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(A.__webglFramebuffer[me]))for(let Me=0;Me<A.__webglFramebuffer[me].length;Me++)s.deleteFramebuffer(A.__webglFramebuffer[me][Me]);else s.deleteFramebuffer(A.__webglFramebuffer[me]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[me])}else{if(Array.isArray(A.__webglFramebuffer))for(let me=0;me<A.__webglFramebuffer.length;me++)s.deleteFramebuffer(A.__webglFramebuffer[me]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let me=0;me<A.__webglColorRenderbuffer.length;me++)A.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[me]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ne=b.textures;for(let me=0,Me=ne.length;me<Me;me++){const Ce=r.get(ne[me]);Ce.__webglTexture&&(s.deleteTexture(Ce.__webglTexture),c.memory.textures--),r.remove(ne[me])}r.remove(b)}let K=0;function he(){K=0}function le(){return K}function D(b){K=b}function te(){const b=K;return b>=o.maxTextures&&xt("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+o.maxTextures),K+=1,b}function G(b){const A=[];return A.push(b.wrapS),A.push(b.wrapT),A.push(b.wrapR||0),A.push(b.magFilter),A.push(b.minFilter),A.push(b.anisotropy),A.push(b.internalFormat),A.push(b.format),A.push(b.type),A.push(b.generateMipmaps),A.push(b.premultiplyAlpha),A.push(b.flipY),A.push(b.unpackAlignment),A.push(b.colorSpace),A.join()}function Y(b,A){const ne=r.get(b);if(b.isVideoTexture&&lt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&ne.__version!==b.version){const me=b.image;if(me===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{re(ne,b,A);return}}else b.isExternalTexture&&(ne.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+A)}function O(b,A){const ne=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&ne.__version!==b.version){re(ne,b,A);return}else b.isExternalTexture&&(ne.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+A)}function ie(b,A){const ne=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&ne.__version!==b.version){re(ne,b,A);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+A)}function N(b,A){const ne=r.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&ne.__version!==b.version){Ae(ne,b,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+A)}const W={[sc]:s.REPEAT,[pr]:s.CLAMP_TO_EDGE,[ih]:s.MIRRORED_REPEAT},_e={[dn]:s.NEAREST,[T_]:s.NEAREST_MIPMAP_NEAREST,[Sl]:s.NEAREST_MIPMAP_LINEAR,[Mn]:s.LINEAR,[nf]:s.LINEAR_MIPMAP_NEAREST,[gs]:s.LINEAR_MIPMAP_LINEAR},ye={[b_]:s.NEVER,[D_]:s.ALWAYS,[P_]:s.LESS,[qh]:s.LEQUAL,[L_]:s.EQUAL,[Kh]:s.GEQUAL,[I_]:s.GREATER,[N_]:s.NOTEQUAL};function ve(b,A){if(A.type===ki&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Mn||A.magFilter===nf||A.magFilter===Sl||A.magFilter===gs||A.minFilter===Mn||A.minFilter===nf||A.minFilter===Sl||A.minFilter===gs)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,W[A.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,W[A.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,W[A.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,_e[A.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,_e[A.minFilter]),A.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,ye[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===dn||A.minFilter!==Sl&&A.minFilter!==gs||A.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function X(b,A){let ne=!1;b.__webglInit===void 0&&(b.__webglInit=!0,A.addEventListener("dispose",z));const me=A.source;let Me=y.get(me);Me===void 0&&(Me={},y.set(me,Me));const Ce=G(A);if(Ce!==b.__cacheKey){Me[Ce]===void 0&&(Me[Ce]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ne=!0),Me[Ce].usedTimes++;const be=Me[b.__cacheKey];be!==void 0&&(Me[b.__cacheKey].usedTimes--,be.usedTimes===0&&Q(A)),b.__cacheKey=Ce,b.__webglTexture=Me[Ce].texture}return ne}function ce(b,A,ne){return Math.floor(Math.floor(b/ne)/A)}function H(b,A,ne,me){const Ce=b.updateRanges;if(Ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,ne,me,A.data);else{Ce.sort((Xe,De)=>Xe.start-De.start);let be=0;for(let Xe=1;Xe<Ce.length;Xe++){const De=Ce[be],Ie=Ce[Xe],ft=De.start+De.count,ht=ce(Ie.start,A.width,4),Mt=ce(De.start,A.width,4);Ie.start<=ft+1&&ht===Mt&&ce(Ie.start+Ie.count-1,A.width,4)===ht?De.count=Math.max(De.count,Ie.start+Ie.count-De.start):(++be,Ce[be]=Ie)}Ce.length=be+1;const pe=t.getParameter(s.UNPACK_ROW_LENGTH),ge=t.getParameter(s.UNPACK_SKIP_PIXELS),Be=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Xe=0,De=Ce.length;Xe<De;Xe++){const Ie=Ce[Xe],ft=Math.floor(Ie.start/4),ht=Math.ceil(Ie.count/4),Mt=ft%A.width,j=Math.floor(ft/A.width),we=ht,xe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Mt),t.pixelStorei(s.UNPACK_SKIP_ROWS,j),t.texSubImage2D(s.TEXTURE_2D,0,Mt,j,we,xe,ne,me,A.data)}b.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,pe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(s.UNPACK_SKIP_ROWS,Be)}}function re(b,A,ne){let me=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(me=s.TEXTURE_3D);const Me=X(b,A),Ce=A.source;t.bindTexture(me,b.__webglTexture,s.TEXTURE0+ne);const be=r.get(Ce);if(Ce.version!==be.__version||Me===!0){if(t.activeTexture(s.TEXTURE0+ne),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const xe=Pt.getPrimaries(Pt.workingColorSpace),Ye=A.colorSpace===Wr?null:Pt.getPrimaries(A.colorSpace),Fe=A.colorSpace===Wr||xe===Ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let ge=_(A.image,!1,o.maxTextureSize);ge=Te(A,ge);const Be=l.convert(A.format,A.colorSpace),Xe=l.convert(A.type);let De=P(A.internalFormat,Be,Xe,A.normalized,A.colorSpace,A.isVideoTexture);ve(me,A);let Ie;const ft=A.mipmaps,ht=A.isVideoTexture!==!0,Mt=be.__version===void 0||Me===!0,j=Ce.dataReady,we=I(A,ge);if(A.isDepthTexture)De=V(A.format===vs,A.type),Mt&&(ht?t.texStorage2D(s.TEXTURE_2D,1,De,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,De,ge.width,ge.height,0,Be,Xe,null));else if(A.isDataTexture)if(ft.length>0){ht&&Mt&&t.texStorage2D(s.TEXTURE_2D,we,De,ft[0].width,ft[0].height);for(let xe=0,Ye=ft.length;xe<Ye;xe++)Ie=ft[xe],ht?j&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Be,Xe,Ie.data):t.texImage2D(s.TEXTURE_2D,xe,De,Ie.width,Ie.height,0,Be,Xe,Ie.data);A.generateMipmaps=!1}else ht?(Mt&&t.texStorage2D(s.TEXTURE_2D,we,De,ge.width,ge.height),j&&H(A,ge,Be,Xe)):t.texImage2D(s.TEXTURE_2D,0,De,ge.width,ge.height,0,Be,Xe,ge.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ht&&Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,De,ft[0].width,ft[0].height,ge.depth);for(let xe=0,Ye=ft.length;xe<Ye;xe++)if(Ie=ft[xe],A.format!==yi)if(Be!==null)if(ht){if(j)if(A.layerUpdates.size>0){const Fe=d0(Ie.width,Ie.height,A.format,A.type);for(const Se of A.layerUpdates){const Qe=Ie.data.subarray(Se*Fe/Ie.data.BYTES_PER_ELEMENT,(Se+1)*Fe/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,Se,Ie.width,Ie.height,1,Be,Qe)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ie.width,Ie.height,ge.depth,Be,Ie.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,De,Ie.width,Ie.height,ge.depth,0,Ie.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?j&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ie.width,Ie.height,ge.depth,Be,Xe,Ie.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,De,Ie.width,Ie.height,ge.depth,0,Be,Xe,Ie.data)}else{ht&&Mt&&t.texStorage2D(s.TEXTURE_2D,we,De,ft[0].width,ft[0].height);for(let xe=0,Ye=ft.length;xe<Ye;xe++)Ie=ft[xe],A.format!==yi?Be!==null?ht?j&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Be,Ie.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,De,Ie.width,Ie.height,0,Ie.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?j&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Be,Xe,Ie.data):t.texImage2D(s.TEXTURE_2D,xe,De,Ie.width,Ie.height,0,Be,Xe,Ie.data)}else if(A.isDataArrayTexture)if(ht){if(Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,De,ge.width,ge.height,ge.depth),j)if(A.layerUpdates.size>0){const xe=d0(ge.width,ge.height,A.format,A.type);for(const Ye of A.layerUpdates){const Fe=ge.data.subarray(Ye*xe/ge.data.BYTES_PER_ELEMENT,(Ye+1)*xe/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ye,ge.width,ge.height,1,Be,Xe,Fe)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Be,Xe,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,ge.width,ge.height,ge.depth,0,Be,Xe,ge.data);else if(A.isData3DTexture)ht?(Mt&&t.texStorage3D(s.TEXTURE_3D,we,De,ge.width,ge.height,ge.depth),j&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Be,Xe,ge.data)):t.texImage3D(s.TEXTURE_3D,0,De,ge.width,ge.height,ge.depth,0,Be,Xe,ge.data);else if(A.isFramebufferTexture){if(Mt)if(ht)t.texStorage2D(s.TEXTURE_2D,we,De,ge.width,ge.height);else{let xe=ge.width,Ye=ge.height;for(let Fe=0;Fe<we;Fe++)t.texImage2D(s.TEXTURE_2D,Fe,De,xe,Ye,0,Be,Xe,null),xe>>=1,Ye>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){const xe=s.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),ge.parentNode!==xe){xe.appendChild(ge),x.add(A),xe.onpaint=qe=>{const At=qe.changedElements;for(const Lt of x)At.includes(Lt.image)&&(Lt.needsUpdate=!0)},xe.requestPaint();return}const Ye=0,Fe=s.RGBA,Se=s.RGBA,Qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Ye,Fe,Se,Qe,ge),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ft.length>0){if(ht&&Mt){const xe=_t(ft[0]);t.texStorage2D(s.TEXTURE_2D,we,De,xe.width,xe.height)}for(let xe=0,Ye=ft.length;xe<Ye;xe++)Ie=ft[xe],ht?j&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Be,Xe,Ie):t.texImage2D(s.TEXTURE_2D,xe,De,Be,Xe,Ie);A.generateMipmaps=!1}else if(ht){if(Mt){const xe=_t(ge);t.texStorage2D(s.TEXTURE_2D,we,De,xe.width,xe.height)}j&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,Xe,ge)}else t.texImage2D(s.TEXTURE_2D,0,De,Be,Xe,ge);M(A)&&C(me),be.__version=Ce.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function Ae(b,A,ne){if(A.image.length!==6)return;const me=X(b,A),Me=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+ne);const Ce=r.get(Me);if(Me.version!==Ce.__version||me===!0){t.activeTexture(s.TEXTURE0+ne);const be=Pt.getPrimaries(Pt.workingColorSpace),pe=A.colorSpace===Wr?null:Pt.getPrimaries(A.colorSpace),ge=A.colorSpace===Wr||be===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Be=A.isCompressedTexture||A.image[0].isCompressedTexture,Xe=A.image[0]&&A.image[0].isDataTexture,De=[];for(let Se=0;Se<6;Se++)!Be&&!Xe?De[Se]=_(A.image[Se],!0,o.maxCubemapSize):De[Se]=Xe?A.image[Se].image:A.image[Se],De[Se]=Te(A,De[Se]);const Ie=De[0],ft=l.convert(A.format,A.colorSpace),ht=l.convert(A.type),Mt=P(A.internalFormat,ft,ht,A.normalized,A.colorSpace),j=A.isVideoTexture!==!0,we=Ce.__version===void 0||me===!0,xe=Me.dataReady;let Ye=I(A,Ie);ve(s.TEXTURE_CUBE_MAP,A);let Fe;if(Be){j&&we&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ye,Mt,Ie.width,Ie.height);for(let Se=0;Se<6;Se++){Fe=De[Se].mipmaps;for(let Qe=0;Qe<Fe.length;Qe++){const qe=Fe[Qe];A.format!==yi?ft!==null?j?xe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Qe,0,0,qe.width,qe.height,ft,qe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Qe,Mt,qe.width,qe.height,0,qe.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Qe,0,0,qe.width,qe.height,ft,ht,qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Qe,Mt,qe.width,qe.height,0,ft,ht,qe.data)}}}else{if(Fe=A.mipmaps,j&&we){Fe.length>0&&Ye++;const Se=_t(De[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ye,Mt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Xe){j?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,De[Se].width,De[Se].height,ft,ht,De[Se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Mt,De[Se].width,De[Se].height,0,ft,ht,De[Se].data);for(let Qe=0;Qe<Fe.length;Qe++){const At=Fe[Qe].image[Se].image;j?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Qe+1,0,0,At.width,At.height,ft,ht,At.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Qe+1,Mt,At.width,At.height,0,ft,ht,At.data)}}else{j?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ft,ht,De[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Mt,ft,ht,De[Se]);for(let Qe=0;Qe<Fe.length;Qe++){const qe=Fe[Qe];j?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Qe+1,0,0,ft,ht,qe.image[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Qe+1,Mt,ft,ht,qe.image[Se])}}}M(A)&&C(s.TEXTURE_CUBE_MAP),Ce.__version=Me.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function Ne(b,A,ne,me,Me,Ce){const be=l.convert(ne.format,ne.colorSpace),pe=l.convert(ne.type),ge=P(ne.internalFormat,be,pe,ne.normalized,ne.colorSpace),Be=r.get(A),Xe=r.get(ne);if(Xe.__renderTarget=A,!Be.__hasExternalTextures){const De=Math.max(1,A.width>>Ce),Ie=Math.max(1,A.height>>Ce);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?t.texImage3D(Me,Ce,ge,De,Ie,A.depth,0,be,pe,null):t.texImage2D(Me,Ce,ge,De,Ie,0,be,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),He(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,Me,Xe.__webglTexture,0,ot(A)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,Me,Xe.__webglTexture,Ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(b,A,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,b),A.depthBuffer){const me=A.depthTexture,Me=me&&me.isDepthTexture?me.type:null,Ce=V(A.stencilBuffer,Me),be=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;He(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot(A),Ce,A.width,A.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot(A),Ce,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,b)}else{const me=A.textures;for(let Me=0;Me<me.length;Me++){const Ce=me[Me],be=l.convert(Ce.format,Ce.colorSpace),pe=l.convert(Ce.type),ge=P(Ce.internalFormat,be,pe,Ce.normalized,Ce.colorSpace);He(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot(A),ge,A.width,A.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot(A),ge,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ge,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function We(b,A,ne){const me=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Me=r.get(A.depthTexture);if(Me.__renderTarget=A,(!Me.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),me){if(Me.__webglInit===void 0&&(Me.__webglInit=!0,A.depthTexture.addEventListener("dispose",z)),Me.__webglTexture===void 0){Me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),ve(s.TEXTURE_CUBE_MAP,A.depthTexture);const Be=l.convert(A.depthTexture.format),Xe=l.convert(A.depthTexture.type);let De;A.depthTexture.format===xr?De=s.DEPTH_COMPONENT24:A.depthTexture.format===vs&&(De=s.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,De,A.width,A.height,0,Be,Xe,null)}}else Y(A.depthTexture,0);const Ce=Me.__webglTexture,be=ot(A),pe=me?s.TEXTURE_CUBE_MAP_POSITIVE_X+ne:s.TEXTURE_2D,ge=A.depthTexture.format===vs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===xr)He(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Ce,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Ce,0);else if(A.depthTexture.format===vs)He(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Ce,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Ce,0);else throw new Error("Unknown depthTexture format")}function ct(b){const A=r.get(b),ne=b.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==b.depthTexture){const me=b.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),me){const Me=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,me.removeEventListener("dispose",Me)};me.addEventListener("dispose",Me),A.__depthDisposeCallback=Me}A.__boundDepthTexture=me}if(b.depthTexture&&!A.__autoAllocateDepthBuffer)if(ne)for(let me=0;me<6;me++)We(A.__webglFramebuffer[me],b,me);else{const me=b.texture.mipmaps;me&&me.length>0?We(A.__webglFramebuffer[0],b,0):We(A.__webglFramebuffer,b,0)}else if(ne){A.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[me]),A.__webglDepthbuffer[me]===void 0)A.__webglDepthbuffer[me]=s.createRenderbuffer(),nt(A.__webglDepthbuffer[me],b,!1);else{const Me=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=A.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,Ce)}}else{const me=b.texture.mipmaps;if(me&&me.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),nt(A.__webglDepthbuffer,b,!1);else{const Me=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,Ce)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(b,A,ne){const me=r.get(b);A!==void 0&&Ne(me.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&ct(b)}function je(b){const A=b.texture,ne=r.get(b),me=r.get(A);b.addEventListener("dispose",E);const Me=b.textures,Ce=b.isWebGLCubeRenderTarget===!0,be=Me.length>1;if(be||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=A.version,c.memory.textures++),Ce){ne.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer[pe]=[];for(let ge=0;ge<A.mipmaps.length;ge++)ne.__webglFramebuffer[pe][ge]=s.createFramebuffer()}else ne.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer=[];for(let pe=0;pe<A.mipmaps.length;pe++)ne.__webglFramebuffer[pe]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(be)for(let pe=0,ge=Me.length;pe<ge;pe++){const Be=r.get(Me[pe]);Be.__webglTexture===void 0&&(Be.__webglTexture=s.createTexture(),c.memory.textures++)}if(b.samples>0&&He(b)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let pe=0;pe<Me.length;pe++){const ge=Me[pe];ne.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[pe]);const Be=l.convert(ge.format,ge.colorSpace),Xe=l.convert(ge.type),De=P(ge.internalFormat,Be,Xe,ge.normalized,ge.colorSpace,b.isXRRenderTarget===!0),Ie=ot(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,De,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,ne.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),nt(ne.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ce){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ve(s.TEXTURE_CUBE_MAP,A);for(let pe=0;pe<6;pe++)if(A.mipmaps&&A.mipmaps.length>0)for(let ge=0;ge<A.mipmaps.length;ge++)Ne(ne.__webglFramebuffer[pe][ge],b,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else Ne(ne.__webglFramebuffer[pe],b,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);M(A)&&C(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let pe=0,ge=Me.length;pe<ge;pe++){const Be=Me[pe],Xe=r.get(Be);let De=s.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(De=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,Xe.__webglTexture),ve(De,Be),Ne(ne.__webglFramebuffer,b,Be,s.COLOR_ATTACHMENT0+pe,De,0),M(Be)&&C(De)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(pe=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,me.__webglTexture),ve(pe,A),A.mipmaps&&A.mipmaps.length>0)for(let ge=0;ge<A.mipmaps.length;ge++)Ne(ne.__webglFramebuffer[ge],b,A,s.COLOR_ATTACHMENT0,pe,ge);else Ne(ne.__webglFramebuffer,b,A,s.COLOR_ATTACHMENT0,pe,0);M(A)&&C(pe),t.unbindTexture()}b.depthBuffer&&ct(b)}function Ve(b){const A=b.textures;for(let ne=0,me=A.length;ne<me;ne++){const Me=A[ne];if(M(Me)){const Ce=L(b),be=r.get(Me).__webglTexture;t.bindTexture(Ce,be),C(Ce),t.unbindTexture()}}}const ut=[],vt=[];function U(b){if(b.samples>0){if(He(b)===!1){const A=b.textures,ne=b.width,me=b.height;let Me=s.COLOR_BUFFER_BIT;const Ce=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=r.get(b),pe=A.length>1;if(pe)for(let Be=0;Be<A.length;Be++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const ge=b.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Be=0;Be<A.length;Be++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[Be]);const Xe=r.get(A[Be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xe,0)}s.blitFramebuffer(0,0,ne,me,0,0,ne,me,Me,s.NEAREST),h===!0&&(ut.length=0,vt.length=0,ut.push(s.COLOR_ATTACHMENT0+Be),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ut.push(Ce),vt.push(Ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,vt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Be=0;Be<A.length;Be++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,be.__webglColorRenderbuffer[Be]);const Xe=r.get(A[Be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,Xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const A=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function ot(b){return Math.min(o.maxSamples,b.samples)}function He(b){const A=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function lt(b){const A=c.render.frame;g.get(b)!==A&&(g.set(b,A),b.update())}function Te(b,A){const ne=b.colorSpace,me=b.format,Me=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||ne!==lc&&ne!==Wr&&(Pt.getTransfer(ne)===Vt?(me!==yi||Me!==_i)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",ne)),A}function _t(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(d.width=b.naturalWidth||b.width,d.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(d.width=b.displayWidth,d.height=b.displayHeight):(d.width=b.width,d.height=b.height),d}this.allocateTextureUnit=te,this.resetTextureUnits=he,this.getTextureUnits=le,this.setTextureUnits=D,this.setTexture2D=Y,this.setTexture2DArray=O,this.setTexture3D=ie,this.setTextureCube=N,this.rebindTextures=ke,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function EE(s,e){function t(r,o=Wr){let l;const c=Pt.getTransfer(o);if(r===_i)return s.UNSIGNED_BYTE;if(r===Vh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Gh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Tg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Cg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Eg)return s.BYTE;if(r===wg)return s.SHORT;if(r===pa)return s.UNSIGNED_SHORT;if(r===Hh)return s.INT;if(r===Ji)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===vr)return s.HALF_FLOAT;if(r===Rg)return s.ALPHA;if(r===bg)return s.RGB;if(r===yi)return s.RGBA;if(r===xr)return s.DEPTH_COMPONENT;if(r===vs)return s.DEPTH_STENCIL;if(r===Pg)return s.RED;if(r===Wh)return s.RED_INTEGER;if(r===_s)return s.RG;if(r===Xh)return s.RG_INTEGER;if(r===jh)return s.RGBA_INTEGER;if(r===Jl||r===$l||r===ec||r===tc)if(c===Vt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Jl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Jl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rh||r===sh||r===oh||r===ah)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===rh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ah)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lh||r===ch||r===uh||r===fh||r===hh||r===oc||r===dh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===lh||r===ch)return c===Vt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===uh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===fh)return l.COMPRESSED_R11_EAC;if(r===hh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===oc)return l.COMPRESSED_RG11_EAC;if(r===dh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ph||r===mh||r===gh||r===vh||r===xh||r===_h||r===yh||r===Mh||r===Sh||r===Ah||r===Eh||r===wh||r===Th||r===Ch)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===ph)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_h)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ah)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Th)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ch)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rh||r===bh||r===Ph)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Rh)return c===Vt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ph)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Lh||r===Ih||r===ac||r===Nh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Lh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Ih)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ac)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ma?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const wE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TE=`
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

}`;class CE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Vg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Mi({vertexShader:wE,fragmentShader:TE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fn(new vc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RE extends Ms{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",h=1,d=null,g=null,x=null,m=null,y=null,S=null;const w=typeof XRWebGLBinding<"u",_=new CE,M={},C=t.getContextAttributes();let L=null,P=null;const V=[],I=[],z=new Dt;let E=null;const F=new ai;F.viewport=new on;const Q=new ai;Q.viewport=new on;const B=[F,Q],K=new ky;let he=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ce=V[X];return ce===void 0&&(ce=new uf,V[X]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(X){let ce=V[X];return ce===void 0&&(ce=new uf,V[X]=ce),ce.getGripSpace()},this.getHand=function(X){let ce=V[X];return ce===void 0&&(ce=new uf,V[X]=ce),ce.getHandSpace()};function D(X){const ce=I.indexOf(X.inputSource);if(ce===-1)return;const H=V[ce];H!==void 0&&(H.update(X.inputSource,X.frame,d||c),H.dispatchEvent({type:X.type,data:X.inputSource}))}function te(){o.removeEventListener("select",D),o.removeEventListener("selectstart",D),o.removeEventListener("selectend",D),o.removeEventListener("squeeze",D),o.removeEventListener("squeezestart",D),o.removeEventListener("squeezeend",D),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",G);for(let X=0;X<V.length;X++){const ce=I[X];ce!==null&&(I[X]=null,V[X].disconnect(ce))}he=null,le=null,_.reset();for(const X in M)delete M[X];e.setRenderTarget(L),y=null,m=null,x=null,o=null,P=null,ve.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){l=X,r.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){f=X,r.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(X){d=X},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",D),o.addEventListener("selectstart",D),o.addEventListener("selectend",D),o.addEventListener("squeeze",D),o.addEventListener("squeezestart",D),o.addEventListener("squeezeend",D),o.addEventListener("end",te),o.addEventListener("inputsourceschange",G),C.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(z),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let H=null,re=null,Ae=null;C.depth&&(Ae=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=C.stencil?vs:xr,re=C.stencil?ma:Ji);const Ne={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};x=this.getBinding(),m=x.createProjectionLayer(Ne),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),P=new Zi(m.textureWidth,m.textureHeight,{format:yi,type:_i,depthTexture:new mo(m.textureWidth,m.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const H={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,H),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new Zi(y.framebufferWidth,y.framebufferHeight,{format:yi,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await o.requestReferenceSpace(f),ve.setContext(o),ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(X){for(let ce=0;ce<X.removed.length;ce++){const H=X.removed[ce],re=I.indexOf(H);re>=0&&(I[re]=null,V[re].disconnect(H))}for(let ce=0;ce<X.added.length;ce++){const H=X.added[ce];let re=I.indexOf(H);if(re===-1){for(let Ne=0;Ne<V.length;Ne++)if(Ne>=I.length){I.push(H),re=Ne;break}else if(I[Ne]===null){I[Ne]=H,re=Ne;break}if(re===-1)break}const Ae=V[re];Ae&&Ae.connect(H)}}const Y=new Z,O=new Z;function ie(X,ce,H){Y.setFromMatrixPosition(ce.matrixWorld),O.setFromMatrixPosition(H.matrixWorld);const re=Y.distanceTo(O),Ae=ce.projectionMatrix.elements,Ne=H.projectionMatrix.elements,nt=Ae[14]/(Ae[10]-1),We=Ae[14]/(Ae[10]+1),ct=(Ae[9]+1)/Ae[5],ke=(Ae[9]-1)/Ae[5],je=(Ae[8]-1)/Ae[0],Ve=(Ne[8]+1)/Ne[0],ut=nt*je,vt=nt*Ve,U=re/(-je+Ve),ot=U*-je;if(ce.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ot),X.translateZ(U),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ae[10]===-1)X.projectionMatrix.copy(ce.projectionMatrix),X.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const He=nt+U,lt=We+U,Te=ut-ot,_t=vt+(re-ot),b=ct*We/lt*He,A=ke*We/lt*He;X.projectionMatrix.makePerspective(Te,_t,b,A,He,lt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function N(X,ce){ce===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ce.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let ce=X.near,H=X.far;_.texture!==null&&(_.depthNear>0&&(ce=_.depthNear),_.depthFar>0&&(H=_.depthFar)),K.near=Q.near=F.near=ce,K.far=Q.far=F.far=H,(he!==K.near||le!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),he=K.near,le=K.far),K.layers.mask=X.layers.mask|6,F.layers.mask=K.layers.mask&-5,Q.layers.mask=K.layers.mask&-3;const re=X.parent,Ae=K.cameras;N(K,re);for(let Ne=0;Ne<Ae.length;Ne++)N(Ae[Ne],re);Ae.length===2?ie(K,F,Q):K.projectionMatrix.copy(F.projectionMatrix),W(X,K,re)};function W(X,ce,H){H===null?X.matrix.copy(ce.matrixWorld):(X.matrix.copy(H.matrixWorld),X.matrix.invert(),X.matrix.multiply(ce.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ce.projectionMatrix),X.projectionMatrixInverse.copy(ce.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ga*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(m===null&&y===null))return h},this.setFoveation=function(X){h=X,m!==null&&(m.fixedFoveation=X),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(K)},this.getCameraTexture=function(X){return M[X]};let _e=null;function ye(X,ce){if(g=ce.getViewerPose(d||c),S=ce,g!==null){const H=g.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let re=!1;H.length!==K.cameras.length&&(K.cameras.length=0,re=!0);for(let We=0;We<H.length;We++){const ct=H[We];let ke=null;if(y!==null)ke=y.getViewport(ct);else{const Ve=x.getViewSubImage(m,ct);ke=Ve.viewport,We===0&&(e.setRenderTargetTextures(P,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(P))}let je=B[We];je===void 0&&(je=new ai,je.layers.enable(We),je.viewport=new on,B[We]=je),je.matrix.fromArray(ct.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(ct.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ke.x,ke.y,ke.width,ke.height),We===0&&(K.matrix.copy(je.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),re===!0&&K.cameras.push(je)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){x=r.getBinding();const We=x.getDepthInformation(H[0]);We&&We.isValid&&We.texture&&_.init(We,o.renderState)}if(Ae&&Ae.includes("camera-access")&&w){e.state.unbindTexture(),x=r.getBinding();for(let We=0;We<H.length;We++){const ct=H[We].camera;if(ct){let ke=M[ct];ke||(ke=new Vg,M[ct]=ke);const je=x.getCameraImage(ct);ke.sourceTexture=je}}}}for(let H=0;H<V.length;H++){const re=I[H],Ae=V[H];re!==null&&Ae!==void 0&&Ae.update(re,ce,d||c)}_e&&_e(X,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),S=null}const ve=new jg;ve.setAnimationLoop(ye),this.setAnimationLoop=function(X){_e=X},this.dispose=function(){}}}const bE=new tn,$g=new wt;$g.set(-1,0,0,0,1,0,0,0,1);function PE(s,e){function t(_,M){_.matrixAutoUpdate===!0&&_.updateMatrix(),M.value.copy(_.matrix)}function r(_,M){M.color.getRGB(_.fogColor.value,Gg(s)),M.isFog?(_.fogNear.value=M.near,_.fogFar.value=M.far):M.isFogExp2&&(_.fogDensity.value=M.density)}function o(_,M,C,L,P){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?l(_,M):M.isMeshLambertMaterial?(l(_,M),M.envMap&&(_.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(l(_,M),x(_,M)):M.isMeshPhongMaterial?(l(_,M),g(_,M),M.envMap&&(_.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(l(_,M),m(_,M),M.isMeshPhysicalMaterial&&y(_,M,P)):M.isMeshMatcapMaterial?(l(_,M),S(_,M)):M.isMeshDepthMaterial?l(_,M):M.isMeshDistanceMaterial?(l(_,M),w(_,M)):M.isMeshNormalMaterial?l(_,M):M.isLineBasicMaterial?(c(_,M),M.isLineDashedMaterial&&f(_,M)):M.isPointsMaterial?h(_,M,C,L):M.isSpriteMaterial?d(_,M):M.isShadowMaterial?(_.color.value.copy(M.color),_.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function l(_,M){_.opacity.value=M.opacity,M.color&&_.diffuse.value.copy(M.color),M.emissive&&_.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(_.map.value=M.map,t(M.map,_.mapTransform)),M.alphaMap&&(_.alphaMap.value=M.alphaMap,t(M.alphaMap,_.alphaMapTransform)),M.bumpMap&&(_.bumpMap.value=M.bumpMap,t(M.bumpMap,_.bumpMapTransform),_.bumpScale.value=M.bumpScale,M.side===Jn&&(_.bumpScale.value*=-1)),M.normalMap&&(_.normalMap.value=M.normalMap,t(M.normalMap,_.normalMapTransform),_.normalScale.value.copy(M.normalScale),M.side===Jn&&_.normalScale.value.negate()),M.displacementMap&&(_.displacementMap.value=M.displacementMap,t(M.displacementMap,_.displacementMapTransform),_.displacementScale.value=M.displacementScale,_.displacementBias.value=M.displacementBias),M.emissiveMap&&(_.emissiveMap.value=M.emissiveMap,t(M.emissiveMap,_.emissiveMapTransform)),M.specularMap&&(_.specularMap.value=M.specularMap,t(M.specularMap,_.specularMapTransform)),M.alphaTest>0&&(_.alphaTest.value=M.alphaTest);const C=e.get(M),L=C.envMap,P=C.envMapRotation;L&&(_.envMap.value=L,_.envMapRotation.value.setFromMatrix4(bE.makeRotationFromEuler(P)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply($g),_.reflectivity.value=M.reflectivity,_.ior.value=M.ior,_.refractionRatio.value=M.refractionRatio),M.lightMap&&(_.lightMap.value=M.lightMap,_.lightMapIntensity.value=M.lightMapIntensity,t(M.lightMap,_.lightMapTransform)),M.aoMap&&(_.aoMap.value=M.aoMap,_.aoMapIntensity.value=M.aoMapIntensity,t(M.aoMap,_.aoMapTransform))}function c(_,M){_.diffuse.value.copy(M.color),_.opacity.value=M.opacity,M.map&&(_.map.value=M.map,t(M.map,_.mapTransform))}function f(_,M){_.dashSize.value=M.dashSize,_.totalSize.value=M.dashSize+M.gapSize,_.scale.value=M.scale}function h(_,M,C,L){_.diffuse.value.copy(M.color),_.opacity.value=M.opacity,_.size.value=M.size*C,_.scale.value=L*.5,M.map&&(_.map.value=M.map,t(M.map,_.uvTransform)),M.alphaMap&&(_.alphaMap.value=M.alphaMap,t(M.alphaMap,_.alphaMapTransform)),M.alphaTest>0&&(_.alphaTest.value=M.alphaTest)}function d(_,M){_.diffuse.value.copy(M.color),_.opacity.value=M.opacity,_.rotation.value=M.rotation,M.map&&(_.map.value=M.map,t(M.map,_.mapTransform)),M.alphaMap&&(_.alphaMap.value=M.alphaMap,t(M.alphaMap,_.alphaMapTransform)),M.alphaTest>0&&(_.alphaTest.value=M.alphaTest)}function g(_,M){_.specular.value.copy(M.specular),_.shininess.value=Math.max(M.shininess,1e-4)}function x(_,M){M.gradientMap&&(_.gradientMap.value=M.gradientMap)}function m(_,M){_.metalness.value=M.metalness,M.metalnessMap&&(_.metalnessMap.value=M.metalnessMap,t(M.metalnessMap,_.metalnessMapTransform)),_.roughness.value=M.roughness,M.roughnessMap&&(_.roughnessMap.value=M.roughnessMap,t(M.roughnessMap,_.roughnessMapTransform)),M.envMap&&(_.envMapIntensity.value=M.envMapIntensity)}function y(_,M,C){_.ior.value=M.ior,M.sheen>0&&(_.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),_.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(_.sheenColorMap.value=M.sheenColorMap,t(M.sheenColorMap,_.sheenColorMapTransform)),M.sheenRoughnessMap&&(_.sheenRoughnessMap.value=M.sheenRoughnessMap,t(M.sheenRoughnessMap,_.sheenRoughnessMapTransform))),M.clearcoat>0&&(_.clearcoat.value=M.clearcoat,_.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(_.clearcoatMap.value=M.clearcoatMap,t(M.clearcoatMap,_.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,t(M.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(_.clearcoatNormalMap.value=M.clearcoatNormalMap,t(M.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Jn&&_.clearcoatNormalScale.value.negate())),M.dispersion>0&&(_.dispersion.value=M.dispersion),M.iridescence>0&&(_.iridescence.value=M.iridescence,_.iridescenceIOR.value=M.iridescenceIOR,_.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(_.iridescenceMap.value=M.iridescenceMap,t(M.iridescenceMap,_.iridescenceMapTransform)),M.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=M.iridescenceThicknessMap,t(M.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),M.transmission>0&&(_.transmission.value=M.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),M.transmissionMap&&(_.transmissionMap.value=M.transmissionMap,t(M.transmissionMap,_.transmissionMapTransform)),_.thickness.value=M.thickness,M.thicknessMap&&(_.thicknessMap.value=M.thicknessMap,t(M.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=M.attenuationDistance,_.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(_.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(_.anisotropyMap.value=M.anisotropyMap,t(M.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=M.specularIntensity,_.specularColor.value.copy(M.specularColor),M.specularColorMap&&(_.specularColorMap.value=M.specularColorMap,t(M.specularColorMap,_.specularColorMapTransform)),M.specularIntensityMap&&(_.specularIntensityMap.value=M.specularIntensityMap,t(M.specularIntensityMap,_.specularIntensityMapTransform))}function S(_,M){M.matcap&&(_.matcap.value=M.matcap)}function w(_,M){const C=e.get(M).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function LE(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,L){const P=L.program;r.uniformBlockBinding(C,P)}function d(C,L){let P=o[C.id];P===void 0&&(S(C),P=g(C),o[C.id]=P,C.addEventListener("dispose",_));const V=L.program;r.updateUBOMapping(C,V);const I=e.render.frame;l[C.id]!==I&&(m(C),l[C.id]=I)}function g(C){const L=x();C.__bindingPointIndex=L;const P=s.createBuffer(),V=C.__size,I=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,V,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,P),P}function x(){for(let C=0;C<f;C++)if(c.indexOf(C)===-1)return c.push(C),C;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(C){const L=o[C.id],P=C.uniforms,V=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let I=0,z=P.length;I<z;I++){const E=Array.isArray(P[I])?P[I]:[P[I]];for(let F=0,Q=E.length;F<Q;F++){const B=E[F];if(y(B,I,F,V)===!0){const K=B.__offset,he=Array.isArray(B.value)?B.value:[B.value];let le=0;for(let D=0;D<he.length;D++){const te=he[D],G=w(te);typeof te=="number"||typeof te=="boolean"?(B.__data[0]=te,s.bufferSubData(s.UNIFORM_BUFFER,K+le,B.__data)):te.isMatrix3?(B.__data[0]=te.elements[0],B.__data[1]=te.elements[1],B.__data[2]=te.elements[2],B.__data[3]=0,B.__data[4]=te.elements[3],B.__data[5]=te.elements[4],B.__data[6]=te.elements[5],B.__data[7]=0,B.__data[8]=te.elements[6],B.__data[9]=te.elements[7],B.__data[10]=te.elements[8],B.__data[11]=0):ArrayBuffer.isView(te)?B.__data.set(new te.constructor(te.buffer,te.byteOffset,B.__data.length)):(te.toArray(B.__data,le),le+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(C,L,P,V){const I=C.value,z=L+"_"+P;if(V[z]===void 0)return typeof I=="number"||typeof I=="boolean"?V[z]=I:ArrayBuffer.isView(I)?V[z]=I.slice():V[z]=I.clone(),!0;{const E=V[z];if(typeof I=="number"||typeof I=="boolean"){if(E!==I)return V[z]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(E.equals(I)===!1)return E.copy(I),!0}}return!1}function S(C){const L=C.uniforms;let P=0;const V=16;for(let z=0,E=L.length;z<E;z++){const F=Array.isArray(L[z])?L[z]:[L[z]];for(let Q=0,B=F.length;Q<B;Q++){const K=F[Q],he=Array.isArray(K.value)?K.value:[K.value];for(let le=0,D=he.length;le<D;le++){const te=he[le],G=w(te),Y=P%V,O=Y%G.boundary,ie=Y+O;P+=O,ie!==0&&V-ie<G.storage&&(P+=V-ie),K.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=P,P+=G.storage}}}const I=P%V;return I>0&&(P+=V-I),C.__size=P,C.__cache={},this}function w(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):xt("WebGLRenderer: Unsupported uniform value type.",C),L}function _(C){const L=C.target;L.removeEventListener("dispose",_);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function M(){for(const C in o)s.deleteBuffer(o[C]);c=[],o={},l={}}return{bind:h,update:d,dispose:M}}const IE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function NE(){return Xi===null&&(Xi=new Bg(IE,16,16,_s,vr),Xi.name="DFG_LUT",Xi.minFilter=Mn,Xi.magFilter=Mn,Xi.wrapS=pr,Xi.wrapT=pr,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class DE{constructor(e={}){const{canvas:t=F_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:m=!1,outputBufferType:y=_i}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const w=y,_=new Set([jh,Xh,Wh]),M=new Set([_i,Ji,pa,ma,Vh,Gh]),C=new Uint32Array(4),L=new Int32Array(4),P=new Z;let V=null,I=null;const z=[],E=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Q=this;let B=!1,K=null;this._outputColorSpace=xi;let he=0,le=0,D=null,te=-1,G=null;const Y=new on,O=new on;let ie=null;const N=new zt(0);let W=0,_e=t.width,ye=t.height,ve=1,X=null,ce=null;const H=new on(0,0,_e,ye),re=new on(0,0,_e,ye);let Ae=!1;const Ne=new zg;let nt=!1,We=!1;const ct=new tn,ke=new Z,je=new on,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function vt(){return D===null?ve:1}let U=r;function ot(R,ee){return t.getContext(R,ee)}try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zh}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",qe,!1),U===null){const ee="webgl2";if(U=ot(ee,R),U===null)throw ot(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Nt("WebGLRenderer: "+R.message),R}let He,lt,Te,_t,b,A,ne,me,Me,Ce,be,pe,ge,Be,Xe,De,Ie,ft,ht,Mt,j,we,xe;function Ye(){He=new N1(U),He.init(),j=new EE(U,He),lt=new w1(U,He,e,j),Te=new SE(U,He),lt.reversedDepthBuffer&&m&&Te.buffers.depth.setReversed(!0),_t=new F1(U),b=new lE,A=new AE(U,He,Te,b,lt,j,_t),ne=new I1(Q),me=new zy(U),we=new A1(U,me),Me=new D1(U,me,_t,we),Ce=new k1(U,Me,me,we,_t),ft=new O1(U,lt,A),Xe=new T1(b),be=new aE(Q,ne,He,lt,we,Xe),pe=new PE(Q,b),ge=new uE,Be=new gE(He),Ie=new S1(Q,ne,Te,Ce,S,h),De=new ME(Q,Ce,lt),xe=new LE(U,_t,lt,Te),ht=new E1(U,He,_t),Mt=new U1(U,He,_t),_t.programs=be.programs,Q.capabilities=lt,Q.extensions=He,Q.properties=b,Q.renderLists=ge,Q.shadowMap=De,Q.state=Te,Q.info=_t}Ye(),w!==_i&&(F=new z1(w,t.width,t.height,o,l));const Fe=new RE(Q,U);this.xr=Fe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=He.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=He.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(R){R!==void 0&&(ve=R,this.setSize(_e,ye,!1))},this.getSize=function(R){return R.set(_e,ye)},this.setSize=function(R,ee,ue=!0){if(Fe.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=R,ye=ee,t.width=Math.floor(R*ve),t.height=Math.floor(ee*ve),ue===!0&&(t.style.width=R+"px",t.style.height=ee+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,R,ee)},this.getDrawingBufferSize=function(R){return R.set(_e*ve,ye*ve).floor()},this.setDrawingBufferSize=function(R,ee,ue){_e=R,ye=ee,ve=ue,t.width=Math.floor(R*ue),t.height=Math.floor(ee*ue),this.setViewport(0,0,R,ee)},this.setEffects=function(R){if(w===_i){Nt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let ee=0;ee<R.length;ee++)if(R[ee].isOutputPass===!0){xt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Y)},this.getViewport=function(R){return R.copy(H)},this.setViewport=function(R,ee,ue,ae){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,ee,ue,ae),Te.viewport(Y.copy(H).multiplyScalar(ve).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,ee,ue,ae){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,ee,ue,ae),Te.scissor(O.copy(re).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(R){Te.setScissorTest(Ae=R)},this.setOpaqueSort=function(R){X=R},this.setTransparentSort=function(R){ce=R},this.getClearColor=function(R){return R.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(R=!0,ee=!0,ue=!0){let ae=0;if(R){let oe=!1;if(D!==null){const Oe=D.texture.format;oe=_.has(Oe)}if(oe){const Oe=D.texture.type,Ge=M.has(Oe),Le=Ie.getClearColor(),$e=Ie.getClearAlpha(),et=Le.r,dt=Le.g,pt=Le.b;Ge?(C[0]=et,C[1]=dt,C[2]=pt,C[3]=$e,U.clearBufferuiv(U.COLOR,0,C)):(L[0]=et,L[1]=dt,L[2]=pt,L[3]=$e,U.clearBufferiv(U.COLOR,0,L))}else ae|=U.COLOR_BUFFER_BIT}ee&&(ae|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ae|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&U.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),K=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",qe,!1),Ie.dispose(),ge.dispose(),Be.dispose(),b.dispose(),ne.dispose(),Ce.dispose(),we.dispose(),xe.dispose(),be.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Ai),Fe.removeEventListener("sessionend",er),$n.stop()};function Se(R){R.preventDefault(),Hm("WebGLRenderer: Context Lost."),B=!0}function Qe(){Hm("WebGLRenderer: Context Restored."),B=!1;const R=_t.autoReset,ee=De.enabled,ue=De.autoUpdate,ae=De.needsUpdate,oe=De.type;Ye(),_t.autoReset=R,De.enabled=ee,De.autoUpdate=ue,De.needsUpdate=ae,De.type=oe}function qe(R){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function At(R){const ee=R.target;ee.removeEventListener("dispose",At),Lt(ee)}function Lt(R){an(R),b.remove(R)}function an(R){const ee=b.get(R).programs;ee!==void 0&&(ee.forEach(function(ue){be.releaseProgram(ue)}),R.isShaderMaterial&&be.releaseShaderCache(R))}this.renderBufferDirect=function(R,ee,ue,ae,oe,Oe){ee===null&&(ee=Ve);const Ge=oe.isMesh&&oe.matrixWorld.determinant()<0,Le=Yr(R,ee,ue,ae,oe);Te.setMaterial(ae,Ge);let $e=ue.index,et=1;if(ae.wireframe===!0){if($e=Me.getWireframeAttribute(ue),$e===void 0)return;et=2}const dt=ue.drawRange,pt=ue.attributes.position;let it=dt.start*et,Ct=(dt.start+dt.count)*et;Oe!==null&&(it=Math.max(it,Oe.start*et),Ct=Math.min(Ct,(Oe.start+Oe.count)*et)),$e!==null?(it=Math.max(it,0),Ct=Math.min(Ct,$e.count)):pt!=null&&(it=Math.max(it,0),Ct=Math.min(Ct,pt.count));const Ot=Ct-it;if(Ot<0||Ot===1/0)return;we.setup(oe,ae,Le,ue,$e);let Wt,kt=ht;if($e!==null&&(Wt=me.get($e),kt=Mt,kt.setIndex(Wt)),oe.isMesh)ae.wireframe===!0?(Te.setLineWidth(ae.wireframeLinewidth*vt()),kt.setMode(U.LINES)):kt.setMode(U.TRIANGLES);else if(oe.isLine){let Zt=ae.linewidth;Zt===void 0&&(Zt=1),Te.setLineWidth(Zt*vt()),oe.isLineSegments?kt.setMode(U.LINES):oe.isLineLoop?kt.setMode(U.LINE_LOOP):kt.setMode(U.LINE_STRIP)}else oe.isPoints?kt.setMode(U.POINTS):oe.isSprite&&kt.setMode(U.TRIANGLES);if(oe.isBatchedMesh)if(He.get("WEBGL_multi_draw"))kt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const Zt=oe._multiDrawStarts,Ze=oe._multiDrawCounts,rn=oe._multiDrawCount,Et=$e?me.get($e).bytesPerElement:1,gn=b.get(ae).currentProgram.getUniforms();for(let Sn=0;Sn<rn;Sn++)gn.setValue(U,"_gl_DrawID",Sn),kt.render(Zt[Sn]/Et,Ze[Sn])}else if(oe.isInstancedMesh)kt.renderInstances(it,Ot,oe.count);else if(ue.isInstancedBufferGeometry){const Zt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ze=Math.min(ue.instanceCount,Zt);kt.renderInstances(it,Ot,Ze)}else kt.render(it,Ot)};function On(R,ee,ue){R.transparent===!0&&R.side===Fi&&R.forceSinglePass===!1?(R.side=Jn,R.needsUpdate=!0,Tn(R,ee,ue),R.side=jr,R.needsUpdate=!0,Tn(R,ee,ue),R.side=Fi):Tn(R,ee,ue)}this.compile=function(R,ee,ue=null){ue===null&&(ue=R),I=Be.get(ue),I.init(ee),E.push(I),ue.traverseVisible(function(oe){oe.isLight&&oe.layers.test(ee.layers)&&(I.pushLight(oe),oe.castShadow&&I.pushShadow(oe))}),R!==ue&&R.traverseVisible(function(oe){oe.isLight&&oe.layers.test(ee.layers)&&(I.pushLight(oe),oe.castShadow&&I.pushShadow(oe))}),I.setupLights();const ae=new Set;return R.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Oe=oe.material;if(Oe)if(Array.isArray(Oe))for(let Ge=0;Ge<Oe.length;Ge++){const Le=Oe[Ge];On(Le,ue,oe),ae.add(Le)}else On(Oe,ue,oe),ae.add(Oe)}),I=E.pop(),ae},this.compileAsync=function(R,ee,ue=null){const ae=this.compile(R,ee,ue);return new Promise(oe=>{function Oe(){if(ae.forEach(function(Ge){b.get(Ge).currentProgram.isReady()&&ae.delete(Ge)}),ae.size===0){oe(R);return}setTimeout(Oe,10)}He.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Si=null;function $i(R){Si&&Si(R)}function Ai(){$n.stop()}function er(){$n.start()}const $n=new jg;$n.setAnimationLoop($i),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(R){Si=R,Fe.setAnimationLoop(R),R===null?$n.stop():$n.start()},Fe.addEventListener("sessionstart",Ai),Fe.addEventListener("sessionend",er),this.render=function(R,ee){if(ee!==void 0&&ee.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;K!==null&&K.renderStart(R,ee);const ue=Fe.enabled===!0&&Fe.isPresenting===!0,ae=F!==null&&(D===null||ue)&&F.begin(Q,D);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(ee),ee=Fe.getCamera()),R.isScene===!0&&R.onBeforeRender(Q,R,ee,D),I=Be.get(R,E.length),I.init(ee),I.state.textureUnits=A.getTextureUnits(),E.push(I),ct.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Ne.setFromProjectionMatrix(ct,qi,ee.reversedDepth),We=this.localClippingEnabled,nt=Xe.init(this.clippingPlanes,We),V=ge.get(R,z.length),V.init(),z.push(V),Fe.enabled===!0&&Fe.isPresenting===!0){const Ge=Q.xr.getDepthSensingMesh();Ge!==null&&qr(Ge,ee,-1/0,Q.sortObjects)}qr(R,ee,0,Q.sortObjects),V.finish(),Q.sortObjects===!0&&V.sort(X,ce),ut=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,ut&&Ie.addToRenderList(V,R),this.info.render.frame++,nt===!0&&Xe.beginShadows();const oe=I.state.shadowsArray;if(De.render(oe,R,ee),nt===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&F.hasRenderPass())===!1){const Ge=V.opaque,Le=V.transmissive;if(I.setupLights(),ee.isArrayCamera){const $e=ee.cameras;if(Le.length>0)for(let et=0,dt=$e.length;et<dt;et++){const pt=$e[et];ln(Ge,Le,R,pt)}ut&&Ie.render(R);for(let et=0,dt=$e.length;et<dt;et++){const pt=$e[et];Ss(V,R,pt,pt.viewport)}}else Le.length>0&&ln(Ge,Le,R,ee),ut&&Ie.render(R),Ss(V,R,ee)}D!==null&&le===0&&(A.updateMultisampleRenderTarget(D),A.updateRenderTargetMipmap(D)),ae&&F.end(Q),R.isScene===!0&&R.onAfterRender(Q,R,ee),we.resetDefaultState(),te=-1,G=null,E.pop(),E.length>0?(I=E[E.length-1],A.setTextureUnits(I.state.textureUnits),nt===!0&&Xe.setGlobalState(Q.clippingPlanes,I.state.camera)):I=null,z.pop(),z.length>0?V=z[z.length-1]:V=null,K!==null&&K.renderEnd()};function qr(R,ee,ue,ae){if(R.visible===!1)return;if(R.layers.test(ee.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(ee);else if(R.isLightProbeGrid)I.pushLightProbeGrid(R);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ne.intersectsSprite(R)){ae&&je.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ct);const Ge=Ce.update(R),Le=R.material;Le.visible&&V.push(R,Ge,Le,ue,je.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ne.intersectsObject(R))){const Ge=Ce.update(R),Le=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),je.copy(R.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),je.copy(Ge.boundingSphere.center)),je.applyMatrix4(R.matrixWorld).applyMatrix4(ct)),Array.isArray(Le)){const $e=Ge.groups;for(let et=0,dt=$e.length;et<dt;et++){const pt=$e[et],it=Le[pt.materialIndex];it&&it.visible&&V.push(R,Ge,it,ue,je.z,pt)}}else Le.visible&&V.push(R,Ge,Le,ue,je.z,null)}}const Oe=R.children;for(let Ge=0,Le=Oe.length;Ge<Le;Ge++)qr(Oe[Ge],ee,ue,ae)}function Ss(R,ee,ue,ae){const{opaque:oe,transmissive:Oe,transparent:Ge}=R;I.setupLightsView(ue),nt===!0&&Xe.setGlobalState(Q.clippingPlanes,ue),ae&&Te.viewport(Y.copy(ae)),oe.length>0&&wn(oe,ee,ue),Oe.length>0&&wn(Oe,ee,ue),Ge.length>0&&wn(Ge,ee,ue),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function ln(R,ee,ue,ae){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ae.id]===void 0){const it=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ae.id]=new Zi(1,1,{generateMipmaps:!0,type:it?vr:_i,minFilter:gs,samples:Math.max(4,lt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const Oe=I.state.transmissionRenderTarget[ae.id],Ge=ae.viewport||Y;Oe.setSize(Ge.z*Q.transmissionResolutionScale,Ge.w*Q.transmissionResolutionScale);const Le=Q.getRenderTarget(),$e=Q.getActiveCubeFace(),et=Q.getActiveMipmapLevel();Q.setRenderTarget(Oe),Q.getClearColor(N),W=Q.getClearAlpha(),W<1&&Q.setClearColor(16777215,.5),Q.clear(),ut&&Ie.render(ue);const dt=Q.toneMapping;Q.toneMapping=Yi;const pt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),I.setupLightsView(ae),nt===!0&&Xe.setGlobalState(Q.clippingPlanes,ae),wn(R,ue,ae),A.updateMultisampleRenderTarget(Oe),A.updateRenderTargetMipmap(Oe),He.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Ct=0,Ot=ee.length;Ct<Ot;Ct++){const Wt=ee[Ct],{object:kt,geometry:Zt,material:Ze,group:rn}=Wt;if(Ze.side===Fi&&kt.layers.test(ae.layers)){const Et=Ze.side;Ze.side=Jn,Ze.needsUpdate=!0,kn(kt,ue,ae,Zt,Ze,rn),Ze.side=Et,Ze.needsUpdate=!0,it=!0}}it===!0&&(A.updateMultisampleRenderTarget(Oe),A.updateRenderTargetMipmap(Oe))}Q.setRenderTarget(Le,$e,et),Q.setClearColor(N,W),pt!==void 0&&(ae.viewport=pt),Q.toneMapping=dt}function wn(R,ee,ue){const ae=ee.isScene===!0?ee.overrideMaterial:null;for(let oe=0,Oe=R.length;oe<Oe;oe++){const Ge=R[oe],{object:Le,geometry:$e,group:et}=Ge;let dt=Ge.material;dt.allowOverride===!0&&ae!==null&&(dt=ae),Le.layers.test(ue.layers)&&kn(Le,ee,ue,$e,dt,et)}}function kn(R,ee,ue,ae,oe,Oe){R.onBeforeRender(Q,ee,ue,ae,oe,Oe),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),oe.onBeforeRender(Q,ee,ue,ae,R,Oe),oe.transparent===!0&&oe.side===Fi&&oe.forceSinglePass===!1?(oe.side=Jn,oe.needsUpdate=!0,Q.renderBufferDirect(ue,ee,ae,oe,R,Oe),oe.side=jr,oe.needsUpdate=!0,Q.renderBufferDirect(ue,ee,ae,oe,R,Oe),oe.side=Fi):Q.renderBufferDirect(ue,ee,ae,oe,R,Oe),R.onAfterRender(Q,ee,ue,ae,oe,Oe)}function Tn(R,ee,ue){ee.isScene!==!0&&(ee=Ve);const ae=b.get(R),oe=I.state.lights,Oe=I.state.shadowsArray,Ge=oe.state.version,Le=be.getParameters(R,oe.state,Oe,ee,ue,I.state.lightProbeGridArray),$e=be.getProgramCacheKey(Le);let et=ae.programs;ae.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?ee.environment:null,ae.fog=ee.fog;const dt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ae.envMap=ne.get(R.envMap||ae.environment,dt),ae.envMapRotation=ae.environment!==null&&R.envMap===null?ee.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",At),et=new Map,ae.programs=et);let pt=et.get($e);if(pt!==void 0){if(ae.currentProgram===pt&&ae.lightsStateVersion===Ge)return zn(R,Le),pt}else Le.uniforms=be.getUniforms(R),K!==null&&R.isNodeMaterial&&K.build(R,ue,Le),R.onBeforeCompile(Le,Q),pt=be.acquireProgram(Le,$e),et.set($e,pt),ae.uniforms=Le.uniforms;const it=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(it.clippingPlanes=Xe.uniform),zn(R,Le),ae.needsLights=ui(R),ae.lightsStateVersion=Ge,ae.needsLights&&(it.ambientLightColor.value=oe.state.ambient,it.lightProbe.value=oe.state.probe,it.directionalLights.value=oe.state.directional,it.directionalLightShadows.value=oe.state.directionalShadow,it.spotLights.value=oe.state.spot,it.spotLightShadows.value=oe.state.spotShadow,it.rectAreaLights.value=oe.state.rectArea,it.ltc_1.value=oe.state.rectAreaLTC1,it.ltc_2.value=oe.state.rectAreaLTC2,it.pointLights.value=oe.state.point,it.pointLightShadows.value=oe.state.pointShadow,it.hemisphereLights.value=oe.state.hemi,it.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,it.spotLightMatrix.value=oe.state.spotLightMatrix,it.spotLightMap.value=oe.state.spotLightMap,it.pointShadowMatrix.value=oe.state.pointShadowMatrix),ae.lightProbeGrid=I.state.lightProbeGridArray.length>0,ae.currentProgram=pt,ae.uniformsList=null,pt}function Bn(R){if(R.uniformsList===null){const ee=R.currentProgram.getUniforms();R.uniformsList=nc.seqWithValue(ee.seq,R.uniforms)}return R.uniformsList}function zn(R,ee){const ue=b.get(R);ue.outputColorSpace=ee.outputColorSpace,ue.batching=ee.batching,ue.batchingColor=ee.batchingColor,ue.instancing=ee.instancing,ue.instancingColor=ee.instancingColor,ue.instancingMorph=ee.instancingMorph,ue.skinning=ee.skinning,ue.morphTargets=ee.morphTargets,ue.morphNormals=ee.morphNormals,ue.morphColors=ee.morphColors,ue.morphTargetsCount=ee.morphTargetsCount,ue.numClippingPlanes=ee.numClippingPlanes,ue.numIntersection=ee.numClipIntersection,ue.vertexAlphas=ee.vertexAlphas,ue.vertexTangents=ee.vertexTangents,ue.toneMapping=ee.toneMapping}function Kr(R,ee){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;P.setFromMatrixPosition(ee.matrixWorld);for(let ue=0,ae=R.length;ue<ae;ue++){const oe=R[ue];if(oe.texture!==null&&oe.boundingBox.containsPoint(P))return oe}return null}function Yr(R,ee,ue,ae,oe){ee.isScene!==!0&&(ee=Ve),A.resetTextureUnits();const Oe=ee.fog,Ge=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?ee.environment:null,Le=D===null?Q.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Pt.workingColorSpace,$e=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,et=ne.get(ae.envMap||Ge,$e),dt=ae.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pt=!!ue.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),it=!!ue.morphAttributes.position,Ct=!!ue.morphAttributes.normal,Ot=!!ue.morphAttributes.color;let Wt=Yi;ae.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Wt=Q.toneMapping);const kt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Zt=kt!==void 0?kt.length:0,Ze=b.get(ae),rn=I.state.lights;if(nt===!0&&(We===!0||R!==G)){const Ht=R===G&&ae.id===te;Xe.setState(ae,R,Ht)}let Et=!1;ae.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==rn.state.version||Ze.outputColorSpace!==Le||oe.isBatchedMesh&&Ze.batching===!1||!oe.isBatchedMesh&&Ze.batching===!0||oe.isBatchedMesh&&Ze.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&Ze.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&Ze.instancing===!1||!oe.isInstancedMesh&&Ze.instancing===!0||oe.isSkinnedMesh&&Ze.skinning===!1||!oe.isSkinnedMesh&&Ze.skinning===!0||oe.isInstancedMesh&&Ze.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ze.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ze.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ze.instancingMorph===!1&&oe.morphTexture!==null||Ze.envMap!==et||ae.fog===!0&&Ze.fog!==Oe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Xe.numPlanes||Ze.numIntersection!==Xe.numIntersection)||Ze.vertexAlphas!==dt||Ze.vertexTangents!==pt||Ze.morphTargets!==it||Ze.morphNormals!==Ct||Ze.morphColors!==Ot||Ze.toneMapping!==Wt||Ze.morphTargetsCount!==Zt||!!Ze.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,Ze.__version=ae.version);let gn=Ze.currentProgram;Et===!0&&(gn=Tn(ae,ee,oe),K&&ae.isNodeMaterial&&K.onUpdateProgram(ae,gn,Ze));let Sn=!1,St=!1,ei=!1;const Bt=gn.getUniforms(),qt=Ze.uniforms;if(Te.useProgram(gn.program)&&(Sn=!0,St=!0,ei=!0),ae.id!==te&&(te=ae.id,St=!0),Ze.needsLights){const Ht=Kr(I.state.lightProbeGridArray,oe);Ze.lightProbeGrid!==Ht&&(Ze.lightProbeGrid=Ht,St=!0)}if(Sn||G!==R){Te.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Bt.setValue(U,"projectionMatrix",R.projectionMatrix),Bt.setValue(U,"viewMatrix",R.matrixWorldInverse);const wi=Bt.map.cameraPosition;wi!==void 0&&wi.setValue(U,ke.setFromMatrixPosition(R.matrixWorld)),lt.logarithmicDepthBuffer&&Bt.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Bt.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),G!==R&&(G=R,St=!0,ei=!0)}if(Ze.needsLights&&(rn.state.directionalShadowMap.length>0&&Bt.setValue(U,"directionalShadowMap",rn.state.directionalShadowMap,A),rn.state.spotShadowMap.length>0&&Bt.setValue(U,"spotShadowMap",rn.state.spotShadowMap,A),rn.state.pointShadowMap.length>0&&Bt.setValue(U,"pointShadowMap",rn.state.pointShadowMap,A)),oe.isSkinnedMesh){Bt.setOptional(U,oe,"bindMatrix"),Bt.setOptional(U,oe,"bindMatrixInverse");const Ht=oe.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Bt.setValue(U,"boneTexture",Ht.boneTexture,A))}oe.isBatchedMesh&&(Bt.setOptional(U,oe,"batchingTexture"),Bt.setValue(U,"batchingTexture",oe._matricesTexture,A),Bt.setOptional(U,oe,"batchingIdTexture"),Bt.setValue(U,"batchingIdTexture",oe._indirectTexture,A),Bt.setOptional(U,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Bt.setValue(U,"batchingColorTexture",oe._colorsTexture,A));const Ei=ue.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&ft.update(oe,ue,gn),(St||Ze.receiveShadow!==oe.receiveShadow)&&(Ze.receiveShadow=oe.receiveShadow,Bt.setValue(U,"receiveShadow",oe.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&ee.environment!==null&&(qt.envMapIntensity.value=ee.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=NE()),St){if(Bt.setValue(U,"toneMappingExposure",Q.toneMappingExposure),Ze.needsLights&&ci(qt,ei),Oe&&ae.fog===!0&&pe.refreshFogUniforms(qt,Oe),pe.refreshMaterialUniforms(qt,ae,ve,ye,I.state.transmissionRenderTarget[R.id]),Ze.needsLights&&Ze.lightProbeGrid){const Ht=Ze.lightProbeGrid;qt.probesSH.value=Ht.texture,qt.probesMin.value.copy(Ht.boundingBox.min),qt.probesMax.value.copy(Ht.boundingBox.max),qt.probesResolution.value.copy(Ht.resolution)}nc.upload(U,Bn(Ze),qt,A)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(nc.upload(U,Bn(Ze),qt,A),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Bt.setValue(U,"center",oe.center),Bt.setValue(U,"modelViewMatrix",oe.modelViewMatrix),Bt.setValue(U,"normalMatrix",oe.normalMatrix),Bt.setValue(U,"modelMatrix",oe.matrixWorld),ae.uniformsGroups!==void 0){const Ht=ae.uniformsGroups;for(let wi=0,Bi=Ht.length;wi<Bi;wi++){const Qr=Ht[wi];xe.update(Qr,gn),xe.bind(Qr,gn)}}return gn}function ci(R,ee){R.ambientLightColor.needsUpdate=ee,R.lightProbe.needsUpdate=ee,R.directionalLights.needsUpdate=ee,R.directionalLightShadows.needsUpdate=ee,R.pointLights.needsUpdate=ee,R.pointLightShadows.needsUpdate=ee,R.spotLights.needsUpdate=ee,R.spotLightShadows.needsUpdate=ee,R.rectAreaLights.needsUpdate=ee,R.hemisphereLights.needsUpdate=ee}function ui(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return he},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,ee,ue){const ae=b.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=ee,b.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ue,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,ee){const ue=b.get(R);ue.__webglFramebuffer=ee,ue.__useDefaultFramebuffer=ee===void 0};const jt=U.createFramebuffer();this.setRenderTarget=function(R,ee=0,ue=0){D=R,he=ee,le=ue;let ae=null,oe=!1,Oe=!1;if(R){const Le=b.get(R);if(Le.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(U.FRAMEBUFFER,Le.__webglFramebuffer),Y.copy(R.viewport),O.copy(R.scissor),ie=R.scissorTest,Te.viewport(Y),Te.scissor(O),Te.setScissorTest(ie),te=-1;return}else if(Le.__webglFramebuffer===void 0)A.setupRenderTarget(R);else if(Le.__hasExternalTextures)A.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const dt=R.depthTexture;if(Le.__boundDepthTexture!==dt){if(dt!==null&&b.has(dt)&&(R.width!==dt.image.width||R.height!==dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Oe=!0);const et=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(et[ee])?ae=et[ee][ue]:ae=et[ee],oe=!0):R.samples>0&&A.useMultisampledRTT(R)===!1?ae=b.get(R).__webglMultisampledFramebuffer:Array.isArray(et)?ae=et[ue]:ae=et,Y.copy(R.viewport),O.copy(R.scissor),ie=R.scissorTest}else Y.copy(H).multiplyScalar(ve).floor(),O.copy(re).multiplyScalar(ve).floor(),ie=Ae;if(ue!==0&&(ae=jt),Te.bindFramebuffer(U.FRAMEBUFFER,ae)&&Te.drawBuffers(R,ae),Te.viewport(Y),Te.scissor(O),Te.setScissorTest(ie),oe){const Le=b.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Le.__webglTexture,ue)}else if(Oe){const Le=ee;for(let $e=0;$e<R.textures.length;$e++){const et=b.get(R.textures[$e]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+$e,et.__webglTexture,ue,Le)}}else if(R!==null&&ue!==0){const Le=b.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Le.__webglTexture,ue)}te=-1},this.readRenderTargetPixels=function(R,ee,ue,ae,oe,Oe,Ge,Le=0){if(!(R&&R.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&($e=$e[Ge]),$e){Te.bindFramebuffer(U.FRAMEBUFFER,$e);try{const et=R.textures[Le],dt=et.format,pt=et.type;if(R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Le),!lt.textureFormatReadable(dt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(pt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=R.width-ae&&ue>=0&&ue<=R.height-oe&&U.readPixels(ee,ue,ae,oe,j.convert(dt),j.convert(pt),Oe)}finally{const et=D!==null?b.get(D).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(R,ee,ue,ae,oe,Oe,Ge,Le=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&($e=$e[Ge]),$e)if(ee>=0&&ee<=R.width-ae&&ue>=0&&ue<=R.height-oe){Te.bindFramebuffer(U.FRAMEBUFFER,$e);const et=R.textures[Le],dt=et.format,pt=et.type;if(R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Le),!lt.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,it),U.bufferData(U.PIXEL_PACK_BUFFER,Oe.byteLength,U.STREAM_READ),U.readPixels(ee,ue,ae,oe,j.convert(dt),j.convert(pt),0);const Ct=D!==null?b.get(D).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,Ct);const Ot=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await O_(U,Ot,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,it),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Oe),U.deleteBuffer(it),U.deleteSync(Ot),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,ee=null,ue=0){const ae=Math.pow(2,-ue),oe=Math.floor(R.image.width*ae),Oe=Math.floor(R.image.height*ae),Ge=ee!==null?ee.x:0,Le=ee!==null?ee.y:0;A.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,ue,0,0,Ge,Le,oe,Oe),Te.unbindTexture()};const Mo=U.createFramebuffer(),nn=U.createFramebuffer();this.copyTextureToTexture=function(R,ee,ue=null,ae=null,oe=0,Oe=0){let Ge,Le,$e,et,dt,pt,it,Ct,Ot;const Wt=R.isCompressedTexture?R.mipmaps[Oe]:R.image;if(ue!==null)Ge=ue.max.x-ue.min.x,Le=ue.max.y-ue.min.y,$e=ue.isBox3?ue.max.z-ue.min.z:1,et=ue.min.x,dt=ue.min.y,pt=ue.isBox3?ue.min.z:0;else{const qt=Math.pow(2,-oe);Ge=Math.floor(Wt.width*qt),Le=Math.floor(Wt.height*qt),R.isDataArrayTexture?$e=Wt.depth:R.isData3DTexture?$e=Math.floor(Wt.depth*qt):$e=1,et=0,dt=0,pt=0}ae!==null?(it=ae.x,Ct=ae.y,Ot=ae.z):(it=0,Ct=0,Ot=0);const kt=j.convert(ee.format),Zt=j.convert(ee.type);let Ze;ee.isData3DTexture?(A.setTexture3D(ee,0),Ze=U.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(A.setTexture2DArray(ee,0),Ze=U.TEXTURE_2D_ARRAY):(A.setTexture2D(ee,0),Ze=U.TEXTURE_2D),Te.activeTexture(U.TEXTURE0),Te.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,ee.flipY),Te.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),Te.pixelStorei(U.UNPACK_ALIGNMENT,ee.unpackAlignment);const rn=Te.getParameter(U.UNPACK_ROW_LENGTH),Et=Te.getParameter(U.UNPACK_IMAGE_HEIGHT),gn=Te.getParameter(U.UNPACK_SKIP_PIXELS),Sn=Te.getParameter(U.UNPACK_SKIP_ROWS),St=Te.getParameter(U.UNPACK_SKIP_IMAGES);Te.pixelStorei(U.UNPACK_ROW_LENGTH,Wt.width),Te.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Wt.height),Te.pixelStorei(U.UNPACK_SKIP_PIXELS,et),Te.pixelStorei(U.UNPACK_SKIP_ROWS,dt),Te.pixelStorei(U.UNPACK_SKIP_IMAGES,pt);const ei=R.isDataArrayTexture||R.isData3DTexture,Bt=ee.isDataArrayTexture||ee.isData3DTexture;if(R.isDepthTexture){const qt=b.get(R),Ei=b.get(ee),Ht=b.get(qt.__renderTarget),wi=b.get(Ei.__renderTarget);Te.bindFramebuffer(U.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Bi=0;Bi<$e;Bi++)ei&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,b.get(R).__webglTexture,oe,pt+Bi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,b.get(ee).__webglTexture,Oe,Ot+Bi)),U.blitFramebuffer(et,dt,Ge,Le,it,Ct,Ge,Le,U.DEPTH_BUFFER_BIT,U.NEAREST);Te.bindFramebuffer(U.READ_FRAMEBUFFER,null),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(oe!==0||R.isRenderTargetTexture||b.has(R)){const qt=b.get(R),Ei=b.get(ee);Te.bindFramebuffer(U.READ_FRAMEBUFFER,Mo),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,nn);for(let Ht=0;Ht<$e;Ht++)ei?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qt.__webglTexture,oe,pt+Ht):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qt.__webglTexture,oe),Bt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ei.__webglTexture,Oe,Ot+Ht):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ei.__webglTexture,Oe),oe!==0?U.blitFramebuffer(et,dt,Ge,Le,it,Ct,Ge,Le,U.COLOR_BUFFER_BIT,U.NEAREST):Bt?U.copyTexSubImage3D(Ze,Oe,it,Ct,Ot+Ht,et,dt,Ge,Le):U.copyTexSubImage2D(Ze,Oe,it,Ct,et,dt,Ge,Le);Te.bindFramebuffer(U.READ_FRAMEBUFFER,null),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Bt?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(Ze,Oe,it,Ct,Ot,Ge,Le,$e,kt,Zt,Wt.data):ee.isCompressedArrayTexture?U.compressedTexSubImage3D(Ze,Oe,it,Ct,Ot,Ge,Le,$e,kt,Wt.data):U.texSubImage3D(Ze,Oe,it,Ct,Ot,Ge,Le,$e,kt,Zt,Wt):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Oe,it,Ct,Ge,Le,kt,Zt,Wt.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Oe,it,Ct,Wt.width,Wt.height,kt,Wt.data):U.texSubImage2D(U.TEXTURE_2D,Oe,it,Ct,Ge,Le,kt,Zt,Wt);Te.pixelStorei(U.UNPACK_ROW_LENGTH,rn),Te.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Et),Te.pixelStorei(U.UNPACK_SKIP_PIXELS,gn),Te.pixelStorei(U.UNPACK_SKIP_ROWS,Sn),Te.pixelStorei(U.UNPACK_SKIP_IMAGES,St),Oe===0&&ee.generateMipmaps&&U.generateMipmap(Ze),Te.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&A.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),Te.unbindTexture()},this.resetState=function(){he=0,le=0,D=null,Te.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}function aa(s,e,t){const r=e/100,o=t/100,l=(1-Math.abs(2*o-1))*r,c=l*(1-Math.abs(s/60%2-1)),f=o-l/2;let h=0,d=0,g=0;s<60?[h,d,g]=[l,c,0]:s<120?[h,d,g]=[c,l,0]:s<180?[h,d,g]=[0,l,c]:s<240?[h,d,g]=[0,c,l]:s<300?[h,d,g]=[c,0,l]:[h,d,g]=[l,0,c];const x=m=>Math.round((m+f)*255).toString(16).padStart(2,"0");return`#${x(h)}${x(d)}${x(g)}`}function ao(s,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[aa(s,e,50),"#FFFFFF",aa(s,e*.6,70),aa(s,e*.8,35)];const r=aa(s,e,50),o=aa((s+180)%360,e,50);return[r,o,r,o]}const O0=[1],fa=[0];let ev=0;const UE=new Set;function FE(s,e){for(let t=0;t<e.length;t++){const r=e[t]??1;O0[t]=r,fa[t]=(fa[t]??0)+s*r}for(const t of UE)fa[t]=(fa[t]??0)+s*(O0[t]??1)}function OE(s){ev=s}function kE(){return fa[ev]??0}const ic=12,Nn=Math.PI*2;function tv(s,e){if(e<=0)return 0;const t=Math.min(2.2,10/e);return Math.min(e,1+Math.floor(s/t))}const Kl=[[[0,"#5ea733"],[.1,"#a9c97a"],[.17,"#efe6c6"],[.26,"#f2b2c5"],[.36,"#df4a67"],[.45,"#b81f3d"],[.53,"#1a0d33"],[.61,"#2e44d8"],[.7,"#5f78f0"],[.79,"#dfe4f4"],[.87,"#eee6c4"],[.94,"#9cc46c"],[1,"#5ea733"]],[[0,"#e0a82e"],[.1,"#f0cd7a"],[.17,"#f6ead0"],[.26,"#f6b49a"],[.36,"#e8573a"],[.45,"#b52a1c"],[.53,"#2a0a0c"],[.61,"#a8401c"],[.7,"#e8823e"],[.79,"#f7dcc4"],[.87,"#f4e8c8"],[.94,"#e9c060"],[1,"#e0a82e"]],[[0,"#1f9a8a"],[.1,"#86d1bf"],[.17,"#eaf2e2"],[.26,"#9fe3e8"],[.36,"#25b5d4"],[.45,"#13708f"],[.53,"#0b1430"],[.61,"#5a35c8"],[.7,"#9a7cf0"],[.79,"#e6e0f6"],[.87,"#e4f2ea"],[.94,"#5cc2a6"],[1,"#1f9a8a"]],[[0,"#2b3f8f"],[.1,"#7d8fd0"],[.17,"#eef0f6"],[.26,"#c9d0ea"],[.36,"#5266b8"],[.45,"#22307a"],[.53,"#070a1c"],[.61,"#26357e"],[.7,"#6a7cc6"],[.79,"#e8ebf5"],[.87,"#f4f3ee"],[.94,"#8a9ad6"],[1,"#2b3f8f"]]],BE=["Inflated","Paper","Line","Print"],zE=`
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
}`,HE=`
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
}`,VE=0,GE=1,WE=2;function yc(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(m=>m+m).join(""):e,r=(parseInt(t.slice(0,2),16)||0)/255,o=(parseInt(t.slice(2,4),16)||0)/255,l=(parseInt(t.slice(4,6),16)||0)/255,c=Math.max(r,o,l),f=Math.min(r,o,l),h=(c+f)/2;if(c===f)return[0,0,h];const d=c-f,g=h>.5?d/(2-c-f):d/(c+f);let x;return c===r?x=((o-l)/d+(o<l?6:0))*60:c===o?x=((l-r)/d+2)*60:x=((r-o)/d+4)*60,[x,g,h]}function nv(s,e,t){return`hsl(${(s%360+360)%360} ${Math.max(0,Math.min(1,e))*100}% ${t*100}%)`}const k0=yc(ao(245,100,"contrast")[0]);function XE(s){const[e,t]=yc(s[0]??"#000000");return t===0?{hue:0,sat:0}:{hue:e-k0[0],sat:t/(k0[1]||1)}}function B0(s,e){const t=document.createElement("canvas");t.width=512,t.height=1;const r=t.getContext("2d"),o=r.createLinearGradient(0,0,512,0);for(const[c,f]of s){const[h,d,g]=yc(f);o.addColorStop(c,nv(h+e.hue,d*e.sat,g))}r.fillStyle=o,r.fillRect(0,0,512,1);const l=new Ty(t);return l.wrapS=sc,l.magFilter=Mn,l.minFilter=Mn,l.generateMipmaps=!1,l}class iv{constructor(){$(this,"textures");$(this,"turnKey","#reference");$(this,"palFrom",0);$(this,"palTo",0);$(this,"palMix",1);$(this,"styleUniform",{value:0});$(this,"turn",{hue:0,sat:1});this.textures=Kl.map(e=>B0(e,{hue:0,sat:1}))}shared(){return{uPalA:{value:this.textures[0]},uPalB:{value:this.textures[0]},uPalMix:{value:0},uT:{value:0},uOff:{value:0},uWA:{value:0},uWB:{value:0},uWC:{value:0},uDepth:{value:.32},uSpec:{value:.16},uCenter:{value:new Z}}}material(e,t,r={}){return new Mi({vertexShader:zE,fragmentShader:HE,side:Fi,uniforms:{...t,uStyle:this.styleUniform,uMode:{value:e},uAng:{value:0},uWS:{value:1},...r}})}update(e,t,r,o,l=0){this.styleUniform.value=Math.max(0,Math.min(BE.length-1,Math.round(l)));const c=e[0]??"";if(c!==this.turnKey){this.turnKey=c;const h=XE(e);this.turn=h;const d=this.textures;this.textures=Kl.map(g=>B0(g,h));for(const g of d)g.dispose()}const f=Math.max(0,Math.min(Kl.length-1,Math.round(t)));o&&(this.palFrom=this.palTo=f,this.palMix=1),f!==this.palTo&&(this.palFrom=this.palMix<.5?this.palFrom:this.palTo,this.palTo=f,this.palMix=0),this.palMix=Math.min(1,this.palMix+r)}apply(e,t,r){e.uPalA.value=this.textures[this.palFrom],e.uPalB.value=this.textures[this.palTo],e.uPalMix.value=this.palMix,e.uDepth.value=t,e.uSpec.value=r}backdrop(e,t,r,o){const l=this.styleUniform.value;if(l===0){sv(e,t,r,o);return}const c=Math.max(0,Math.min(1,o));if(e.globalCompositeOperation="source-over",e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,t,r),l===2||c<=0)return;const f=Kl[this.palTo],h=f.find(([m])=>m===(l===1?.53:.17))??f[0],[d,g,x]=yc(h[1]);e.globalAlpha=c,e.fillStyle=nv(d+this.turn.hue,g*this.turn.sat,l===1?x*1.25:x),e.fillRect(0,0,t,r),e.globalAlpha=1}dispose(){for(const e of this.textures)e.dispose();this.textures=[]}}function rv(s,e,t){const r=e/t,o=30,l=Math.tan(o/2*Math.PI/180),c=r<16/9?2*Math.atan(l*(16/9)/r)*180/Math.PI:o;(s.aspect!==r||s.fov!==c)&&(s.aspect=r,s.fov=c,s.updateProjectionMatrix())}function sv(s,e,t,r){const o=Math.max(0,Math.min(1,r)),l=c=>{const f=parseInt(c.slice(1),16),h=Math.round((f>>16&255)*o),d=Math.round((f>>8&255)*o),g=Math.round((f&255)*o);return`rgb(${h},${d},${g})`};if(s.globalCompositeOperation="source-over",s.globalAlpha=1,o<=0)s.fillStyle="#000";else{const c=s.createLinearGradient(0,0,0,t);c.addColorStop(0,l("#8e94a2")),c.addColorStop(.2,l("#bfc3d0")),c.addColorStop(.42,l("#dde1ec")),c.addColorStop(.68,l("#d9dde9")),c.addColorStop(1,l("#9ea2af")),s.fillStyle=c}s.fillRect(0,0,e,t)}function ov(s){const e=new DE({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"});return e.setPixelRatio(1),e.setClearColor(0,0),e}function av(s,e,t,r){s.fillStyle="#000",s.fillRect(0,0,e,t),s.fillStyle="rgba(255,255,255,0.4)",s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText(`${r} NEEDS WEBGL`,e/2,t/2)}class ya{constructor(e){$(this,"dt",1/60);$(this,"step",0);$(this,"openness");$(this,"aim",{x:0,y:0});$(this,"spread",.4);$(this,"depth",.35);$(this,"turn",0);$(this,"pinch",0);$(this,"fist",0);$(this,"clapped",!1);$(this,"clapStrength",0);$(this,"wasClapping",!1);$(this,"burst",0);$(this,"bump",0);$(this,"bass",0);$(this,"mid",0);$(this,"high",0);$(this,"kick",0);$(this,"snare",0);$(this,"hat",0);$(this,"energy",.5);$(this,"build",0);$(this,"drop",0);$(this,"bright",.5);$(this,"lastClock",null);$(this,"lastFrame",0);this.rest=e,this.openness=e}read(e,t){const r=performance.now(),o=this.lastFrame?Math.min(.1,(r-this.lastFrame)/1e3):1/60;this.lastFrame=r;const l=kE();this.step=this.lastClock===null?0:Math.max(-.2,Math.min(.2,l-this.lastClock)),this.lastClock=l,this.dt=o;const c=[e.left,e.right].filter(Boolean);let f=this.rest;if(c.length){const C=Math.max(...c.map(L=>L.gesture==="fist"?0:L.fingerCount??3));f=Math.max(0,Math.min(1,C/5))}this.openness+=(f-this.openness)*(1-Math.exp(-o*5));let h=0,d=0;c.length&&(h=(c.reduce((C,L)=>C+L.position.x,0)/c.length-.5)*2,d=(.5-c.reduce((C,L)=>C+L.position.y,0)/c.length)*2);const g=1-Math.exp(-o*4);this.aim.x+=(h-this.aim.x)*g,this.aim.y+=(d-this.aim.y)*g,this.spread+=((e.distanceBetweenHands??.4)-this.spread)*g;const x=c.map(C=>C.depth).filter(C=>C!==void 0);this.depth+=((x.length?Math.max(...x):.35)-this.depth)*g;const m=e.twist??(c.length===1?c[0].angle??0:0);this.turn+=(m-this.turn)*g;const y=c.length?Math.max(...c.map(C=>C.pinch??0)):0;this.pinch+=(y-this.pinch)*(1-Math.exp(-o*10));const S=c.length?Math.max(...c.map(C=>C.openness!==void 0?1-C.openness:C.gesture==="fist"?1:0)):0;this.fist+=(Math.min(1,Math.max(0,(S-.35)/.4))-this.fist)*(1-Math.exp(-o*8));const w=!!e.clapping&&!e.synthetic;this.clapped=w&&!this.wasClapping,this.clapStrength=this.clapped?Math.max(.6,e.clapIntensity??1):0,this.wasClapping=w;const _=e.clapping?e.clapIntensity??1:0;this.burst=Math.max(this.burst*Math.exp(-o*2.2),_);const M=(C,L,P,V)=>C+(L-C)*(1-Math.exp(-o*(L>C?P:V)));this.bass=M(this.bass,(t==null?void 0:t.bass)??0,6,1.5),this.mid=M(this.mid,(t==null?void 0:t.mid)??0,4,1),this.high=M(this.high,(t==null?void 0:t.high)??0,8,2.5),this.bump*=Math.exp(-o/.07),t!=null&&t.beat&&(this.bump=Math.max(this.bump,t.beatIntensity||1)),this.kick=(t==null?void 0:t.kick)??0,this.bump=Math.max(this.bump,this.kick*.9),this.snare=(t==null?void 0:t.snare)??0,this.hat=(t==null?void 0:t.hat)??0,this.energy=M(this.energy,t!=null&&t.live?t.energy??.5:.5,1,1),this.build=(t==null?void 0:t.build)??0,this.drop=(t==null?void 0:t.drop)??0,this.bright=M(this.bright,(t==null?void 0:t.bright)??.5,1,1)}}class jE{constructor(e,t){$(this,"canvas");$(this,"ctx");$(this,"cfg",Pm);$(this,"playing",new ya(.6));$(this,"n",0);$(this,"x",new Float32Array(0));$(this,"y",new Float32Array(0));$(this,"z",new Float32Array(0));$(this,"vx",new Float32Array(0));$(this,"vy",new Float32Array(0));$(this,"light",new Float32Array(0));$(this,"phase",new Float32Array(0));$(this,"time",0);$(this,"events",[]);$(this,"lastKick",0);$(this,"lastSnare",0);$(this,"lastHat",0);$(this,"kicks",0);$(this,"flow",[Math.random()*10,Math.random()*10,Math.random()*10]);$(this,"flowTo",[...this.flow]);$(this,"gather",0);$(this,"breath",0);$(this,"grain",document.createElement("canvas"));$(this,"aspect",16/9);this.canvas=e,this.ctx=t,this.grain.width=this.grain.height=256;const r=this.grain.getContext("2d"),o=r.createImageData(256,256);for(let l=0;l<o.data.length;l+=4){const c=Math.random()<.5?0:255;o.data[l]=o.data[l+1]=o.data[l+2]=c,o.data[l+3]=Math.random()<.35?255:0}r.putImageData(o,0,0)}setParams(e){this.cfg=va(Pm,e)}resize(e){const t=Math.min(this.n,e),r=o=>{const l=new Float32Array(e);return l.set(o.subarray(0,t)),l};this.x=r(this.x),this.y=r(this.y),this.z=r(this.z),this.vx=r(this.vx),this.vy=r(this.vy),this.light=r(this.light),this.phase=r(this.phase);for(let o=t;o<e;o++)this.x[o]=Math.random()*this.aspect,this.y[o]=Math.random(),this.z[o]=.25+.75*Math.pow(Math.random(),2.2),this.phase[o]=Math.random()*Math.PI*2,this.light[o]=0;this.n=e}angleAt(e,t,r){const[o,l,c]=this.flow;return Math.sin(e*1.3+o+r*.05)*1.7+Math.cos(t*1.7-l+r*.04)*1.5+Math.sin((e+t)*.8+c)*1.2}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,h=o.height;if(!f||!h)return;this.aspect=f/h;const d=this.aspect,g=this.playing;g.read(e,r);const x=Math.min(.1,g.dt),m=Math.min(.08,Math.max(0,g.step));this.time+=m;const y=Math.max(50,Math.min(6e3,Math.round(c.field.count)));y!==this.n&&this.resize(y);const S=!!(r!=null&&r.live),w=O=>1-Math.exp(-x*O),_=Math.max(g.kick,g.bump)*c.sound.beat;if(_>.45&&this.lastKick<=.45){this.kicks+=1;const O=Math.random(),ie=(.5+.6*Math.random())*Math.min(1.4,_),N=O<.5?0:O<.82?1:2;this.events.push({kind:N,x:Math.random()*d,y:.1+.8*Math.random(),age:0,strength:ie,angle:Math.random()*Math.PI,reach:.2+.5*Math.random()}),this.kicks%(6+Math.floor(Math.random()*6))===0&&(this.flowTo=this.flowTo.map(W=>W+(Math.random()-.5)*4))}this.lastKick=_;const M=(O,ie)=>{for(let N=0;N<O;N++){const W=Math.floor(Math.random()*this.n);this.light[W]=Math.max(this.light[W],ie)}},C=g.snare*c.sound.sparks;C>.5&&this.lastSnare<=.5&&M(Math.round(this.n*.012),1.1),this.lastSnare=C;const L=g.hat*c.sound.sparks;if(L>.5&&this.lastHat<=.5&&M(Math.round(this.n*.004),.7),this.lastHat=L,!S&&Math.random()<x*.35&&this.events.push({kind:0,x:Math.random()*d,y:Math.random(),age:0,strength:.45,angle:0,reach:.4}),g.clapped&&c.hands.clap>0)for(let O=0;O<this.n;O++){this.light[O]=Math.max(this.light[O],1.2*c.hands.clap);const ie=this.x[O]-d/2,N=this.y[O]-.5,W=Math.hypot(ie,N)+.05;this.vx[O]+=ie/W*.25*c.hands.clap,this.vy[O]+=N/W*.25*c.hands.clap}this.breath+=(g.bass*c.sound.bass-this.breath)*w(4);for(let O=0;O<3;O++)this.flow[O]+=(this.flowTo[O]-this.flow[O])*w(.3);const V=!e.synthetic?[e.left,e.right].filter(O=>!!O):[],I=V.length?g.fist:0,z=Math.max(Math.min(1,c.form.circle),I*Math.min(1,c.hands.reach));this.gather+=(z-this.gather)*w(z>this.gather?.9:.6);const E=.018*c.field.drift,F=this.time,Q=d/2,B=.5,K=.3,he=F*.04,le=Math.exp(-x*2.2);for(let O=0;O<this.n;O++){const ie=this.z[O],N=this.angleAt(this.x[O],this.y[O],F);let W=this.x[O]+(Math.cos(N)*E*ie+this.vx[O])*m,_e=this.y[O]+(Math.sin(N)*E*ie+this.vy[O])*m;W+=(W-Q)*this.breath*.004*ie,_e+=(_e-B)*this.breath*.004*ie;for(const ye of V){const ve=ye.position.x*d,X=ye.position.y,ce=W-ve,H=_e-X,re=ce*ce+H*H,Ae=Math.exp(-re/.02)*(1-I)*c.hands.reach;if(Ae>.01){const Ne=Math.sqrt(re)+.01;W+=ce/Ne*Ae*.006,_e+=H/Ne*Ae*.006,this.light[O]=Math.max(this.light[O],Ae*.9)}}if(this.gather>.002){const ye=this.phase[O]+he,ve=K*(.94+.12*(O*.618%1))*(1+.06*this.breath),X=Q+Math.cos(ye)*ve,ce=B+Math.sin(ye)*ve,H=this.gather*this.gather*w(1.6);W+=(X-W)*H,_e+=(ce-_e)*H}W<-.02?W+=d+.04:W>d+.02&&(W-=d+.04),_e<-.02?_e+=1.04:_e>1.02&&(_e-=1.04),this.x[O]=W,this.y[O]=_e,this.vx[O]*=le,this.vy[O]*=le,this.light[O]*=Math.exp(-x*(1.6+.8*Math.random()))}for(const O of this.events){O.age+=x;const ie=O.age*.55;for(let N=0;N<this.n;N++){const W=this.x[N]-O.x,_e=this.y[N]-O.y;let ye=0;if(O.kind===0){const ve=Math.hypot(W,_e)-ie;ye=Math.exp(-(ve*ve)/.0012)}else if(O.kind===1)O.age<x*1.5&&Math.hypot(W,_e)<O.reach*.6&&Math.random()<.35&&(ye=.6+Math.random()*.6);else{const ve=Math.cos(O.angle),X=Math.sin(O.angle),ce=W*-X+_e*ve-(O.age-.6)*.08;ye=Math.exp(-(ce*ce)/25e-5)*(Math.abs(W*ve+_e*X)<O.age*1.4?1:0)}ye>.02&&(this.light[N]=Math.max(this.light[N],1.6*ye*O.strength*(1-O.age/2.2)))}}this.events=this.events.filter(O=>O.age<2.2),l.globalCompositeOperation="source-over",l.globalAlpha=1-.92*Math.max(0,Math.min(1,c.look.trail)),l.fillStyle="#000",l.fillRect(0,0,f,h),l.globalAlpha=1;const D=8,te=[];for(let O=0;O<D;O++)te.push(new Path2D);const G=Math.max(.6,h/720*1.6*c.field.size),Y=.2*c.look.glow;for(let O=0;O<this.n;O++){const ie=this.z[O],N=.6+.4*Math.sin(F*.7+this.phase[O]*5),W=Math.min(1,(Y*N+this.light[O])*(.35+.65*ie)+.2*this.gather*ie);if(W<.03)continue;const _e=Math.min(D-1,Math.floor(W*D)),ye=G*(.5+ie)*(1+.6*Math.min(1,this.light[O]));te[_e].rect(this.x[O]*h-ye/2,this.y[O]*h-ye/2,ye,ye)}for(let O=0;O<D;O++)l.globalAlpha=(O+.5)/D,l.fillStyle="#fff",l.fill(te[O]);if(c.look.grain>.01){l.globalCompositeOperation="lighter",l.globalAlpha=.05*c.look.grain;const O=Math.floor(Math.random()*256),ie=Math.floor(Math.random()*256),N=l.createPattern(this.grain,"repeat");N&&(l.save(),l.translate(-O,-ie),l.fillStyle=N,l.fillRect(O,ie,f,h),l.restore())}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const z0={line:{count:14,weight:1,wave:1,birth:1,zoom:1,speed:1},hands:{open:1,pull:1,clap:1},sound:{beat:1,bass:1,grow:1}},H0=110,qE=5;function V0(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class KE{constructor(e,t){$(this,"canvas");$(this,"ctx");$(this,"cfg",z0);$(this,"playing",new ya(.5));$(this,"age",0);$(this,"time",0);$(this,"unfold",0);$(this,"breath",0);$(this,"shiver",0);$(this,"pulses",[]);$(this,"lastKick",0);$(this,"hand",{x:.5,y:.5,hold:0});$(this,"idle",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=va(z0,e)}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,h=o.height;if(!f||!h)return;const d=this.playing;d.read(e,r);const{dt:g}=d,x=Math.max(0,d.step);this.age+=x,this.time+=x*Math.max(0,c.line.speed),this.idle+=g;const m=O=>1-Math.exp(-g*O),y=[e.left,e.right].filter(Boolean),S=y.length>0&&!e.synthetic,w=!!(r!=null&&r.live);let _;S?_=(1-d.fist)*c.hands.open:w?_=(.12+.88*d.energy)*c.sound.grow:_=.35+.3*Math.sin(this.idle*.21),this.unfold+=(Math.min(1,Math.max(0,_))-this.unfold)*m(S?5:.8),this.breath+=(d.bass*c.sound.bass-this.breath)*m(3),d.clapped&&(this.shiver=Math.min(1.4,d.clapStrength*1.3*c.hands.clap)),this.shiver*=Math.exp(-g*2.4);const M=Math.max(d.kick,d.bump)*c.sound.beat;M>.45&&this.lastKick<=.45&&(this.pulses.push({at:0,strength:Math.min(1.2,M)}),this.pulses.length>qE&&this.pulses.shift()),this.lastKick=M;for(const O of this.pulses)O.at+=g*.75;if(this.pulses=this.pulses.filter(O=>O.at<.75),y.length){const O=y.reduce((N,W)=>N+W.position.x,0)/y.length,ie=y.reduce((N,W)=>N+W.position.y,0)/y.length;this.hand.x+=(O-this.hand.x)*m(8),this.hand.y+=(ie-this.hand.y)*m(8)}this.hand.hold+=((S?c.hands.pull:0)-this.hand.hold)*m(4);const C=c.line.birth,L=C<=0?1:Math.min(1,Math.max(0,(this.age-1.6*C)/(5*C))),P=L*L*(3-2*L),V=C<=0?0:Math.max(0,1-this.age/(2.4*C));l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,h);const I=Math.max(1,Math.round(c.line.count)),[z,E,F]=V0(t[0]??"#8899ff"),[Q,B,K]=V0(t[2]??t[1]??"#ffffff"),he=Math.max(.1,c.line.zoom),le=h*he,D=h/720*he,te=le*.74*this.unfold*(1+.12*this.breath),G=c.line.wave,Y=this.time;if(l.lineCap="round",l.lineJoin="round",l.globalCompositeOperation="lighter",V>.01){const O=(3+2.5*Math.sin(this.idle*2.2))*D*(1+this.breath);l.globalAlpha=Math.min(1,V*1.4),l.fillStyle="#fff",l.beginPath(),l.arc(f/2,h/2,Math.max(1,O),0,Math.PI*2),l.fill()}if(P>.002){const O=.5-.5*P,ie=.5+.5*P;for(let N=0;N<I;N++){const W=I===1?0:N/(I-1)*2-1,_e=W*2.6*this.unfold,ye=this.shiver*Math.sin(N*12.9898)*43758.5453,ve=(ye-Math.floor(ye)-.5)*this.shiver*le*.09;l.beginPath();let X=0,ce=0;for(let ct=0;ct<=H0;ct++){const ke=O+(ie-O)*(ct/H0),je=Math.sin(Math.PI*ke);let Ve=h/2+W*te*.5;Ve+=(Math.sin(ke*6.2+Y*.55+_e)*.6+Math.sin(ke*13.7-Y*.38+_e*1.7)*.25)*le*.035*G*je*(.35+.65*this.unfold+this.breath*.6),Ve+=ve*je*Math.sin(ke*20+N);for(const vt of this.pulses){const U=Math.abs(ke-.5)-vt.at;Ve-=Math.exp(-(U*U)/.0016)*vt.strength*le*.05*(1-vt.at/.75)*(W===0?1:Math.sign(W)*-1)}if(this.hand.hold>.01){const vt=ke-this.hand.x,U=Math.exp(-(vt*vt)/.022)*Math.min(1,this.hand.hold)*.85;Ve+=(this.hand.y*h-Ve)*U}const ut=ke*f;ct===0?l.moveTo(ut,Ve):l.quadraticCurveTo(X,ce,(X+ut)/2,(ce+Ve)/2),X=ut,ce=Ve}l.lineTo(X,ce);const H=Math.abs(W)*this.unfold,re=Math.round(255+(z+(Q-z)*(W*.5+.5)-255)*H),Ae=Math.round(255+(E+(B-E)*(W*.5+.5)-255)*H),Ne=Math.round(255+(F+(K-F)*(W*.5+.5)-255)*H),nt=1/(1+(I-1)*(1-this.unfold)),We=c.line.weight*D*(1+.35*M);l.strokeStyle=`rgb(${re},${Ae},${Ne})`,l.globalAlpha=Math.min(1,.16*nt*2.2),l.lineWidth=7*We,l.stroke(),l.globalAlpha=Math.min(1,.95*Math.max(nt,.3+.7*this.unfold)),l.lineWidth=1.5*We,l.stroke()}}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const G0={colour:{speed:1,offset:0,palette:0,depth:.32},field:{count:3,zoom:1,sway:1,bounce:0,drift:.2,backdrop:1},hands:{wind:1,release:1,follow:1,clap:1},sound:{wind:1,gust:1,mid:1,high:1}};function lv(s,e){s.traverse(t=>{if(t instanceof Fn||t instanceof wy||t instanceof Ay){t.geometry.dispose();const r=t.material;Array.isArray(r)?r.forEach(o=>o.dispose()):r.dispose()}}),s.clear(),e.dispose(),e.forceContextLoss()}const YE="/assets/dandelion-hJsSsoAd.bin";let la=null;function QE(){return la||(la=fetch(YE).then(s=>{if(!s.ok)throw new Error(`dandelion.bin: ${s.status}`);return s.arrayBuffer()}).then(ZE),la.catch(()=>{la=null})),la}function ZE(s){const e=new DataView(s);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="DNDL")throw new Error("Not a dandelion file");const r=e.getUint32(4,!0),o=JSON.parse(new TextDecoder().decode(new Uint8Array(s,8,r))),l=8+r,c=(X,ce)=>new Float32Array(s.slice(l+X,l+X+ce*4)),f=(X,ce)=>new Int8Array(s.slice(l+X,l+X+ce)),h=(X,ce)=>new Uint8Array(s.slice(l+X,l+X+ce)),d=(X,ce)=>new Uint32Array(s.slice(l+X,l+X+ce*4)),g=X=>{const ce=o.parts[X],H=c(ce.pos,ce.count*3),re=f(ce.nrm,ce.count*3),Ae=new Float32Array(ce.count*3);for(let Ne=0;Ne<Ae.length;Ne++)Ae[Ne]=re[Ne]/127;return{p:ce,position:H,normal:Ae,index:d(ce.idx,ce.index)}},x=["stem","base","bracts"].map(g);let m=0,y=0;for(const X of x)m+=X.p.count,y+=X.index.length;const S=new Float32Array(m*3),w=new Float32Array(m*3),_=new Float32Array(m),M=new Uint32Array(y);let C=0;{let X=0,ce=0;x.forEach((H,re)=>{S.set(H.position,X*3),w.set(H.normal,X*3),_.fill(re===0?0:1,X,X+H.p.count);for(let Ae=0;Ae<H.index.length;Ae++)M[ce+Ae]=H.index[Ae]+X;if(re===0)for(let Ae=1;Ae<H.position.length;Ae+=3)C=Math.min(C,H.position[Ae]);X+=H.p.count,ce+=H.index.length})}const L=new Un;L.setAttribute("position",new Gt(S,3)),L.setAttribute("normal",new Gt(w,3)),L.setAttribute("aRigid",new Gt(_,1)),L.setIndex(new Gt(M,1));const P=o.seeds,V=c(P.pivot,P.count*3),I=c(P.axis,P.count*3),z=g("achenes"),E=h(o.parts.achenes.seed,z.p.count),F=new Float32Array(z.p.count),Q=new Float32Array(z.p.count*3);for(let X=0;X<z.p.count;X++){const ce=E[X];F[X]=ce,Q[X*3]=V[ce*3],Q[X*3+1]=V[ce*3+1],Q[X*3+2]=V[ce*3+2]}const B=new Un;B.setAttribute("position",new Gt(z.position,3)),B.setAttribute("normal",new Gt(z.normal,3)),B.setAttribute("aSeed",new Gt(F,1)),B.setAttribute("aPivot",new Gt(Q,3)),B.setIndex(new Gt(z.index,1));const K=P.segments,he=c(P.a,K*3),le=c(P.b,K*3),D=h(P.seed,K),te=c(P.ta,K),G=c(P.tb,K),Y=new Float32Array(K*4*3),O=new Float32Array(K*4*3),ie=new Float32Array(K*4*3),N=new Float32Array(K*4*2),W=new Float32Array(K*4),_e=new Float32Array(K*4),ye=new Uint32Array(K*6);for(let X=0;X<K;X++){const ce=D[X];for(let re=0;re<4;re++){const Ae=X*4+re;Y.set(he.subarray(X*3,X*3+3),Ae*3),O.set(le.subarray(X*3,X*3+3),Ae*3),ie.set(V.subarray(ce*3,ce*3+3),Ae*3);const Ne=re>>1,nt=re&1?1:-1;N[Ae*2]=Ne,N[Ae*2+1]=nt,W[Ae]=ce,_e[Ae]=Ne?G[X]:te[X]}const H=X*4;ye.set([H,H+1,H+2,H+2,H+1,H+3],X*6)}const ve=new Un;ve.setAttribute("position",new Gt(Y,3)),ve.setAttribute("aB",new Gt(O,3)),ve.setAttribute("aPivot",new Gt(ie,3)),ve.setAttribute("aCorner",new Gt(N,2)),ve.setAttribute("aSeed",new Gt(W,1)),ve.setAttribute("aT",new Gt(_e,1)),ve.setIndex(new Gt(ye,1));for(const X of[L,B,ve])X.boundingSphere=new xo(new Z(0,-5,0),1e4);return{body:L,achenes:B,strokes:ve,seeds:P.count,pivot:V,axis:I,foot:C}}const lo=20,Of=[1.4,3.2],kf=[2.6,4.6],Ma=`
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
`,JE=`
${Ma}
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
}`,W0=`
${Ma}
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
}`,$E=`
${Ma}
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
}`,ew=`
${Ma}
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
}`,tw=`
${Ma}
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
}`;function Bf(s,e){let t=0,r=1/e;for(;s>0;)t+=s%e*r,s=Math.floor(s/e),r/=e;return t}function Ui(s){const e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)}const zf=Array.from({length:lo},(s,e)=>({x:e===0?0:Bf(e+1,2)*2-1,z:e===0?0:-4.6+Bf(e,3)*6,y:e===0?.3:-.4+Bf(e,5)*1.9,k:e===0?1:.85+Ui(e)*.3,yaw:Ui(e+40)*Nn,ph:Ui(e+80)*Nn,off:e*.137%1}));class nw{constructor(e,t,r=null){$(this,"canvas");$(this,"ctx");$(this,"cfg",G0);$(this,"surface");$(this,"renderer",null);$(this,"host");$(this,"scene");$(this,"camera");$(this,"group",new Ki);$(this,"depth",0);$(this,"scale",1);$(this,"look",null);$(this,"playing",new ya(.5));$(this,"failed",!1);$(this,"model",null);$(this,"flowers",[]);$(this,"materials",[]);$(this,"started",!1);$(this,"since",0);$(this,"seedTex",null);$(this,"seedData",new Float32Array(0));$(this,"off",new Float32Array(0));$(this,"vel",new Float32Array(0));$(this,"turn",new Float32Array(0));$(this,"hold",new Float32Array(0));$(this,"away",new Uint8Array(0));$(this,"thresh",new Float32Array(0));$(this,"flight",new Float32Array(0));$(this,"dest",new Float32Array(0));$(this,"phase",new Float32Array(0));$(this,"motionTime",0);$(this,"colourTime",0);$(this,"gust",0);$(this,"lastBeat",!1);$(this,"lastClap",!1);$(this,"hop",0);$(this,"dance",0);$(this,"sinceClap",99);$(this,"lastAim",{x:0,y:0});$(this,"swipe",new Dt);$(this,"present",0);$(this,"strokeWidth",null);$(this,"viewport",null);$(this,"time",null);this.canvas=e,this.ctx=t,this.host=r,this.scene=r?r.scene:new Ug,this.camera=r?r.camera:new ai(30,16/9,.1,200),this.surface=document.createElement("canvas");try{r||(this.renderer=ov(this.surface)),this.look=r?r.look:new iv}catch(o){console.error("Dandelion could not start:",o),this.failed=!0;return}QE().then(o=>{this.look&&this.build(o)}).catch(o=>{console.error("Dandelion model failed to load:",o),this.failed=!0})}setParams(e){this.cfg=va(G0,e)}isReady(){return this.model!==null||this.failed}build(e){const t=this.look,r=e.seeds,o=r*lo;this.seedData=new Float32Array(r*2*lo*4),this.seedTex=new Bg(this.seedData,r*2,lo,yi,ki),this.seedTex.magFilter=dn,this.seedTex.minFilter=dn,this.seedTex.needsUpdate=!0,this.off=new Float32Array(o*3),this.vel=new Float32Array(o*3),this.turn=new Float32Array(o*4);for(let g=0;g<o;g++)this.turn[g*4+3]=1;this.hold=new Float32Array(o),this.away=new Uint8Array(o),this.thresh=new Float32Array(o),this.flight=new Float32Array(o),this.dest=new Float32Array(o*3),this.phase=new Float32Array(o);for(let g=0;g<o;g++)this.thresh[g]=.12+Ui(g*3.7+1)*1,this.phase[g]=Ui(g*1.3+7)*Nn;const l={value:new Dt(1,1)},c={value:0},f={value:e.foot},h={value:this.seedTex},d={value:1.5};this.strokeWidth=d,this.viewport=l,this.time=c;for(let g=0;g<lo;g++){const x=t.shared(),m={uBend:{value:new Z},uWave:{value:new Dt},uWavePhase:{value:0},uRow:{value:g},uShimmer:{value:0}},y={...x,...m,uViewport:l,uTime:c,uFoot:f,uSeeds:h},S=(M,C,L={})=>{const P=new Mi({vertexShader:M,fragmentShader:C,uniforms:{...y,...L},side:Fi});return this.materials.push(P),P},w=new Ki;w.add(new Fn(e.body,S(JE,W0))),w.add(new Fn(e.achenes,S($E,W0)));const _=S(ew,tw,{uWidth:d});_.transparent=!0,_.depthWrite=!1,w.add(new Fn(e.strokes,_));for(const M of w.children)M.frustumCulled=!1;w.visible=!1,this.group.add(w),this.flowers.push({root:w,shared:x,u:m,presence:0,at:new Z,size:1,placed:!1,bend:new Dt})}this.scene.add(this.group),this.model=e}pickDestination(e,t,r){const o=-4+Math.random()*6,l=(15.5-o)*t;this.dest[e*3]=(Math.random()*2-1)*l*r*.92,this.dest[e*3+1]=.1+(Math.random()*1.75-.85)*l,this.dest[e*3+2]=o}destroy(){var e,t;this.host||(e=this.look)==null||e.dispose(),this.look=null,(t=this.seedTex)==null||t.dispose();for(const r of this.materials)r.dispose();for(const r of this.flowers)r.root.clear();this.scene.remove(this.group),this.renderer&&lv(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const h=this.renderer;if(this.failed||!h||!this.look){av(o,c,f,"DANDELION");return}sv(o,c,f,l.field.backdrop),this.model&&(rv(this.camera,c,f),this.camera.position.set(0,.5,15.5/Math.max(.3,l.field.zoom)),this.camera.lookAt(0,.1,0),this.update(e,t,r,c,f),(this.surface.width!==c||this.surface.height!==f)&&h.setSize(c,f,!1),h.render(this.scene,this.camera),o.drawImage(this.surface,0,0,c,f))}update(e,t,r,o,l){const{cfg:c}=this,f=this.look,h=this.model;if(!f||!h||this.failed)return;const d=this.playing;d.read(e,r);const{dt:g}=d,x=Math.max(0,d.step),m=e.left||e.right?1:0;this.present+=(m-this.present)*(1-Math.exp(-g*3));const y=Math.min(1,((r==null?void 0:r.overall)??0)*1.4)*c.sound.wind;this.motionTime+=x,this.colourTime+=(x*c.colour.speed*(1+d.mid*c.sound.mid*1.2)+g*d.burst*c.hands.clap*.9)/ic;const S=this.motionTime,w=!!(r!=null&&r.beat),_=w&&!this.lastBeat,M=_&&c.sound.gust>0;this.hop=Math.max(this.hop*Math.exp(-g*5),_?(r==null?void 0:r.beatIntensity)||1:0),this.dance+=x,this.lastBeat=w,M&&(this.gust=Math.max(this.gust,((r==null?void 0:r.beatIntensity)||1)*c.sound.gust)),this.gust*=Math.exp(-g*2.5);const C=!!e.clapping&&c.hands.clap>0,L=C&&!this.lastClap;this.lastClap=C,this.sinceClap+=g;const P=Math.min(1,this.sinceClap/4)**3;L&&(this.sinceClap=0);const V=d.aim.x-this.lastAim.x,I=d.aim.y-this.lastAim.y;this.lastAim={x:d.aim.x,y:d.aim.y};const z=m?V/Math.max(g,.001):0,E=m?I/Math.max(g,.001):0;this.swipe.x+=(z-this.swipe.x)*(1-Math.exp(-g*6)),this.swipe.y+=(E-this.swipe.y)*(1-Math.exp(-g*6));const F=.5*Math.sin(S*.11)+.25*Math.sin(S*.27+1.3),Q=.25+y*1.6+this.gust*1.2,B=new Z(Math.cos(F)*Q,.15*Math.sin(S*.19),Math.sin(F)*Q*.4);B.x+=rf.clamp(this.swipe.x,-4,4)*1.6*c.hands.wind,B.y+=rf.clamp(this.swipe.y,-4,4)*1*c.hands.wind;const K=m?rf.clamp((d.openness-.6)/.4,-1,1)*c.hands.release:0,he=c.field.drift,le=Math.min(1,he*2),D=Math.sqrt(Math.min(1,3/Math.max(1,Math.round(c.field.count)))),te=Math.min(.72,D*(he*(.25+y*.45)+K*.3*this.present*le)),G=P*Math.min(1,c.hands.clap)*le*D,Y=Math.min(1,te*5),O=m&&d.openness<.15&&c.hands.release>0,ie=!this.started;this.host||f.update(t,c.colour.palette,g,ie);const N=Math.tan(this.camera.fov/2*Math.PI/180),W=o/l,_e=Math.max(0,Math.min(lo,Math.round(c.field.count))),ye=Math.max(1,_e);this.since+=g;const ve=tv(this.since,_e),X=2.2*Math.pow(ye,-.42)*this.scale;let ce=0;for(let U=0;U<ye;U++)ce+=zf[U].x;ce/=ye;let H=0;for(let U=0;U<ye;U++)H=Math.max(H,Math.abs(zf[U].x-ce));const re=new Z(d.aim.x*5.2,.1+d.aim.y*3,2),Ae=1.2*Math.max(.4,1+(d.spread-.4)*1.6),Ne=h.seeds,nt=new Z,We=new Qi,ct=new Qi,ke=new Qi,je=new Z,Ve=new Z(0,1,0),ut=new Z(1,0,0),vt=this.seedData;this.flowers.forEach((U,ot)=>{const He=zf[ot],lt=ot<ve;if(U.presence+=((lt?1:0)-U.presence)*(1-Math.exp(-g*1.4)),ie&&(U.presence=0),!lt&&U.presence<.004&&(U.presence=0),U.root.visible=U.presence>.002,!U.root.visible){U.placed=!1,this.off.fill(0,ot*Ne*3,(ot+1)*Ne*3),this.vel.fill(0,ot*Ne*3,(ot+1)*Ne*3),this.away.fill(0,ot*Ne,(ot+1)*Ne),this.flight.fill(0,ot*Ne,(ot+1)*Ne);return}const Te=X*He.k,_t=(ye===1?0:He.z)+this.depth,b=(15.5-_t)*N*W,A=ye===1?0:(He.x-ce)/Math.max(.5,H)*b*(.66+.24*Math.min(1,(ye-1)/12)),ne=.1-(15.5-_t)*N,me=.1+(15.5-_t)*N;let Me=ye===1?He.y:He.y*Math.min(1,.5+ye*.1);Me=Math.min(Me,ne-h.foot*Te-.4,me-Te*1.5),nt.set(A,Me,_t),U.placed||(U.at.copy(nt),U.size=Te,U.placed=!0),U.at.lerp(nt,1-Math.exp(-g*1.2)),U.size+=(Te-U.size)*(1-Math.exp(-g*1.2));const Ce=1-Math.pow(1-U.presence,3);U.root.position.set(U.at.x,U.at.y-(1-Ce)*-h.foot*U.size*.8,U.at.z),U.root.rotation.y=He.yaw,U.root.scale.setScalar(U.size*(.6+.4*Ce));const be=U.root.scale.x,pe=Math.cos(He.yaw),ge=Math.sin(He.yaw),Be=this.dance,Xe=U.at.x*.35,De=c.field.sway*(.45+y*1),Ie=De*(.85*Math.sin(Nn*Be/5.2-Xe+He.ph*.3)+.15*Math.sin(Nn*Be/3.3+He.ph*1.7))+B.x*.22+this.gust*.5,ft=De*.3*Math.sin(Nn*Be/7.1+He.ph*2.3)+B.z*.22;U.bend.x+=(Ie-U.bend.x)*(1-Math.exp(-g*1.6)),U.bend.y+=(ft-U.bend.y)*(1-Math.exp(-g*1.6));const ht=U.bend.x,Mt=U.bend.y;U.u.uBend.value.set(ht*pe-Mt*ge,0,ht*ge+Mt*pe);const j=c.field.sway*(.12+y*.3);U.u.uWave.value.set(j*pe,j*ge),U.u.uWavePhase.value=Nn*Be/1.6-Xe*2+He.ph;const we=c.field.bounce*U.size*((.08+y*.22)*Math.sin(Nn*Be/1.2-Xe+He.ph)+.3*this.hop*(.6+.4*Ui(ot+7)));U.root.position.y+=we,U.u.uShimmer.value=d.high*c.sound.high*2;const xe=U.root.position.x+ht*be,Ye=U.root.position.y,Fe=U.root.position.z+Mt*be;for(let Qe=0;Qe<Ne;Qe++){const qe=ot*Ne+Qe,At=qe*3;L&&Ui(qe*1.37+S*7.3)<G?this.hold[qe]=kf[0]+Ui(qe+S)*(kf[1]-kf[0]):M&&Ui(qe*.71+S*13.1)<.008*c.sound.gust*he*D&&(this.hold[qe]=Of[0]+Ui(qe+S*3.1)*(Of[1]-Of[0])),this.hold[qe]=Math.max(0,this.hold[qe]-g);const Lt=.06*Y*Math.sin(S*.37+this.phase[qe]);O&&(this.flight[qe]=0);const an=!O&&(this.hold[qe]>0||this.flight[qe]>0||te+Lt>this.thresh[qe]),On=h.pivot[Qe*3],Si=h.pivot[Qe*3+1],$i=h.pivot[Qe*3+2],Ai=h.axis[Qe*3],er=h.axis[Qe*3+1],$n=h.axis[Qe*3+2],qr=Ai*pe+$n*ge,Ss=-Ai*ge+$n*pe;if(an&&!this.away[qe]){this.flight[qe]=6+Math.random()*6,this.pickDestination(qe,N,W);const nn=.4+(L&&this.hold[qe]>0?3.2*c.hands.clap*P:0);this.vel[At]+=qr*nn,this.vel[At+1]+=er*nn+.2,this.vel[At+2]+=Ss*nn}this.away[qe]=an?1:0;let ln=this.off[At],wn=this.off[At+1],kn=this.off[At+2],Tn=this.vel[At],Bn=this.vel[At+1],zn=this.vel[At+2];if(x>0||an){const nn=Math.max(x,0),R=xe+(On*pe+$i*ge)*be+ln,ee=Ye+Si*be+wn,ue=Fe+(-On*ge+$i*pe)*be+kn,ae=Math.sin(ee*.9+S*.7+this.phase[qe])*.6,oe=Math.sin(R*.7-S*.5+this.phase[qe]*.5)*.45,Oe=Math.sin(ue*.8+R*.5+S*.6)*.4;if(an){this.flight[qe]=Math.max(0,this.flight[qe]-nn);const Ge=qe*3;let Le=this.dest[Ge]-R,$e=this.dest[Ge+1]-ee,et=this.dest[Ge+2]-ue;const dt=Math.hypot(Le,$e,et);dt<.8&&this.pickDestination(qe,N,W);const pt=(1.2+.9*Ui(qe*2.9))*Math.min(1,dt/2);Le=Le/Math.max(dt,.001)*pt,$e=$e/Math.max(dt,.001)*pt,et=et/Math.max(dt,.001)*pt;let it=(Le-Tn)*.7+B.x*.3+ae*.8,Ct=($e-Bn)*.7+B.y*.3+oe*.8+.05,Ot=(et-zn)*.7+B.z*.3+Oe*.6;if(this.present>.01&&c.hands.follow>0){const Et=re.x-R,gn=re.y-ee,Sn=re.z-ue,St=Math.hypot(Et,gn,Sn)+.001,ei=this.present*c.hands.follow*Math.min(1,St/Ae-.6);it+=Et/St*ei*2.2-gn/St*this.present*c.hands.follow*1.4,Ct+=gn/St*ei*2.2+Et/St*this.present*c.hands.follow*1.4,Ot+=Sn/St*ei*1.2}const Wt=(15.5-ue)*N,kt=Wt*W,Zt=Math.abs(R)-kt*1.02;Zt>0&&(it-=Math.sign(R)*Zt*1.5);const Ze=Math.abs(ee-.1)-Wt*1.02;Ze>0&&(Ct-=Math.sign(ee-.1)*Ze*1.5),ue>6&&(Ot-=(ue-6)*1.5),ue<-8&&(Ot+=(-8-ue)*1.5),Tn+=it*nn*1.6,Bn+=Ct*nn*1.6,zn+=Ot*nn*1.6;const rn=Math.exp(-nn*.5);Tn*=rn,Bn*=rn,zn*=rn}else{const Ge=Math.hypot(ln,wn,kn),Le=Math.min(1.8,Ge*.9)/Math.max(Ge,1e-4),$e=-ln*Le+ae*Math.min(1,Ge)*.6,et=-wn*Le+oe*Math.min(1,Ge)*.6,dt=-kn*Le+Oe*Math.min(1,Ge)*.6,pt=1-Math.exp(-nn*2.4);Tn+=($e-Tn)*pt,Bn+=(et-Bn)*pt,zn+=(dt-zn)*pt,Ge<.004&&Math.hypot(Tn,Bn,zn)<.02&&(ln=wn=kn=Tn=Bn=zn=0)}ln+=Tn*nn,wn+=Bn*nn,kn+=zn*nn}this.off[At]=ln,this.off[At+1]=wn,this.off[At+2]=kn,this.vel[At]=Tn,this.vel[At+1]=Bn,this.vel[At+2]=zn;const Kr=Math.hypot(ln,wn,kn)/be,Yr=Math.min(1,Kr/.8),ci=this.turn.subarray(qe*4,qe*4+4);if(We.set(ci[0],ci[1],ci[2],ci[3]),Yr>.001){je.set(Ai,er,$n),ke.setFromUnitVectors(je,Ve);const nn=S*.6+this.phase[qe];ct.setFromAxisAngle(Ve,nn),ke.premultiply(ct),ct.setFromAxisAngle(ut,.3*Math.sin(S*1.3+this.phase[qe]*2)),ke.premultiply(ct),ct.identity().slerp(ke,Yr),We.slerp(ct,1-Math.exp(-g*3))}else We.slerp(ct.identity(),1-Math.exp(-g*6));ci[0]=We.x,ci[1]=We.y,ci[2]=We.z,ci[3]=We.w;const ui=(ot*Ne*2+Qe*2)*4,jt=(ln*pe-kn*ge)/be,Mo=(ln*ge+kn*pe)/be;vt[ui]=jt,vt[ui+1]=wn/be,vt[ui+2]=Mo,vt[ui+3]=1-Math.min(1,Kr/.6),vt[ui+4]=We.x,vt[ui+5]=We.y,vt[ui+6]=We.z,vt[ui+7]=We.w}const Se=U.shared;Se.uT.value=this.colourTime,Se.uOff.value=He.off+c.colour.offset,f.apply(Se,c.colour.depth,.16*(1+d.high*c.sound.high*2))}),this.started=!0,this.seedTex.needsUpdate=!0,this.viewport.value.set(o,l),this.time.value=S,this.strokeWidth.value=Math.max(1,l/620)}}const X0={colour:{speed:1,offset:0,palette:0,style:0,depth:.32},swarm:{count:4,zoom:1,height:0,size:1,drift:1,pulse:1,tentacles:1,backdrop:1},hands:{follow:1,spread:1,clap:1},sound:{beat:1,bass:1,mid:1,high:1,flow:1}};class iw{constructor(e,t,r=120,o=20){$(this,"mesh");$(this,"curve");$(this,"position");$(this,"normal");$(this,"points",[]);$(this,"tangents",[]);this.anchors=t,this.length=r,this.sides=o,this.curve=new by(t,!1,"centripetal");const l=(r+1)*(o+1),c=new Un;this.position=new Gt(new Float32Array(l*3),3),this.normal=new Gt(new Float32Array(l*3),3),this.position.setUsage(km),this.normal.setUsage(km);const f=new Float32Array(l*2),h=[];for(let d=0;d<=r;d++)for(let g=0;g<=o;g++){const x=d*(o+1)+g;if(f[x*2]=d/r,f[x*2+1]=g/o,d<r&&g<o){const m=x,y=x+o+1;h.push(m,y,m+1,y,y+1,m+1)}}c.setAttribute("position",this.position),c.setAttribute("normal",this.normal),c.setAttribute("uv",new Gt(f,2)),c.setIndex(h);for(let d=0;d<=r;d++)this.points.push(new Z),this.tangents.push(new Z);this.mesh=new Fn(c,e),this.mesh.frustumCulled=!1}update(e,t=1){const{curve:r,points:o,tangents:l,length:c,sides:f}=this;r.updateArcLengths();for(let S=0;S<=c;S++)r.getPointAt(S/c,o[S]);for(let S=0;S<=c;S++){const w=o[Math.max(0,S-1)],_=o[Math.min(c,S+1)];l[S].subVectors(_,w).normalize()}const h=new Z,d=new Z,g=new Z,x=l[0];h.set(0,0,1).addScaledVector(x,-x.z),h.lengthSq()<1e-6&&h.set(1,0,0).addScaledVector(x,-x.x),h.normalize();const m=this.position.array,y=this.normal.array;for(let S=0;S<=c;S++){const w=l[S];h.addScaledVector(w,-h.dot(w)).normalize(),d.crossVectors(w,h);const _=o[S],M=e*(1+(t-1)*(S/c));for(let C=0;C<=f;C++){const L=C/f*Nn;g.copy(h).multiplyScalar(-Math.cos(L)).addScaledVector(d,Math.sin(L));const P=(S*(f+1)+C)*3;m[P]=_.x+g.x*M,m[P+1]=_.y+g.y*M,m[P+2]=_.z+g.z*M,y[P]=g.x,y[P+1]=g.y,y[P+2]=g.z}}this.position.needsUpdate=!0,this.normal.needsUpdate=!0}}const j0=9,Yl=8,q0=4,Ql=9,K0=[{c:[.2,.9,0],a:[1.6,.5,.8],s:1.25,off:0,ph:0,pulses:6},{c:[-3.9,1.5,-1.2],a:[1.2,.6,.8],s:1,off:.37,ph:2.1,pulses:7},{c:[4.1,.4,-.8],a:[1.1,.7,.6],s:1.05,off:.71,ph:4,pulses:5},{c:[-2,-.9,1.2],a:[1.4,.4,.5],s:.8,off:.18,ph:1,pulses:8},{c:[2.4,2.4,-3],a:[1.3,.5,.8],s:.85,off:.55,ph:3.2,pulses:6},{c:[-5.6,-.4,-2.6],a:[.9,.6,.6],s:.8,off:.86,ph:5,pulses:7},{c:[5.8,2,-4],a:[.8,.5,.6],s:.7,off:.28,ph:.6,pulses:9},{c:[-.6,2.7,-5],a:[1.6,.4,.8],s:.7,off:.63,ph:2.7,pulses:8}],rw=[[],[0],[1,2],[0,1,2],[0,1,2,3],[0,1,2,3,4],[0,1,2,3,4,5],[0,1,2,3,4,5,6],[0,1,2,3,4,5,6,7]],Hf=.62,sw=.55;function Y0(s,e,t=new Z){return t.set(Math.sin(s)*.86*Math.cos(e),-.86*Math.sin(e)+.04,Math.cos(s)*.86*Math.cos(e))}function ow(s){const e=(s/Nn%1+1)%1;return e<.22?Math.sin(e/.22*(Math.PI/2)):.5+.5*Math.cos((e-.22)/.78*Math.PI)}class aw{constructor(e,t,r=null){$(this,"canvas");$(this,"ctx");$(this,"cfg",X0);$(this,"host");$(this,"surface");$(this,"renderer",null);$(this,"scene");$(this,"camera");$(this,"look",null);$(this,"group",new Ki);$(this,"swarm",[]);$(this,"geometries",[]);$(this,"failed",!1);$(this,"playing",new ya(.6));$(this,"motionTime",0);$(this,"pace",1);$(this,"handHold",0);$(this,"colourTime",0);$(this,"started",!1);$(this,"since",0);$(this,"current",0);$(this,"carry",0);this.canvas=e,this.ctx=t,this.host=r,this.surface=document.createElement("canvas"),this.scene=r?r.scene:new Ug,this.camera=r?r.camera:new ai(30,16/9,.1,100);try{r||(this.renderer=ov(this.surface)),this.look=r?r.look:new iv,this.build(this.look)}catch(o){console.error("Jellyfish could not start:",o),this.failed=!0}}setParams(e){this.cfg=va(X0,e)}build(e){const t=new pc(1,44,30),r=new pc(1,40,26);this.geometries.push(t,r),this.scene.add(this.group);for(const o of K0){const l=e.shared(),c=e.shared(),f=new Ki;this.group.add(f);const h=[],d=[];for(let y=0;y<j0;y++){const S=y/j0*Nn,w=new Ki;w.rotation.y=S;const _=new Ki;_.rotation.x=Hf,w.add(_);const M=new Fn(t,e.material(VE,l,{uAng:{value:S}}));M.scale.set(.42,.18,.52),M.position.set(0,y*5%3*.02,.48),_.add(M),f.add(w),h.push(_),d.push(M)}const g=new Fn(r,e.material(WE,l));g.scale.set(.44,.26,.44),g.position.y=-.1,f.add(g);const x=[],m=e.material(GE,c,{uWS:{value:.6}});for(let y=0;y<Yl+q0;y++){const S=y>=Yl,w=S?(y-Yl)/q0*Nn+.4:y/Yl*Nn+.2,_=S?new Z(Math.sin(w)*.08,-.25,Math.cos(w)*.08):Y0(w,Hf),M=Array.from({length:Ql},()=>new Z),C=new iw(m,M,S?48:64,S?10:6);this.group.add(C.mesh),x.push({tube:C,from:_,links:M,angle:S?null:w,link:S?.2:.42,radius:S?.085:.028,phase:w*1.7+y})}this.swarm.push({spec:o,root:f,tilts:h,lobes:d,cap:g,strands:x,shared:l,strandShared:c,presence:0,beat:o.ph,lift:0,rise:0,pull:new Z,up:new Z(0,1,0),last:null,primed:!1})}}destroy(){var e;this.host||(e=this.look)==null||e.dispose(),this.look=null;for(const t of this.geometries)t.dispose();this.host?(this.scene.remove(this.group),this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())})):this.renderer&&lv(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const h=this.renderer;if(this.failed||!h||!this.look){av(o,c,f,"JELLYFISH");return}rv(this.camera,c,f);const d=-l.swarm.height*4.5;this.camera.position.set(0,.5+d,15.5/Math.max(.3,l.swarm.zoom)),this.camera.lookAt(0,.1+d,0),this.update(e,t,r),(this.surface.width!==c||this.surface.height!==f)&&h.setSize(c,f,!1),h.render(this.scene,this.camera),this.look.backdrop(o,c,f,l.swarm.backdrop),o.drawImage(this.surface,0,0,c,f)}update(e,t,r){const{cfg:o}=this,l=this.look;if(!l||this.failed)return;const c=this.playing;c.read(e,r);const{dt:f}=c;this.pace+=(Math.max(0,c.step)-this.pace)*(1-Math.exp(-f*.6));const h=this.pace*.6,d=c.burst*o.hands.clap,g=c.bump*o.sound.beat,x=!e.synthetic&&(e.left||e.right)?1:0;this.handHold+=(x-this.handHold)*(1-Math.exp(-f*3)),this.motionTime+=h,this.colourTime+=(h*o.colour.speed*(1+c.mid*o.sound.mid*1.2)+f*d*.9)/ic;const m=this.motionTime,y=Nn*m/ic,S=Math.max(0,Math.min(8,Math.round(o.swarm.count))),w=!this.started;this.host||l.update(t,o.colour.palette,f,w,o.colour.style),this.since+=f;const _=new Set(rw[S].slice(0,tv(this.since*.55,S)));w&&(this.started=!0,this.swarm.forEach(D=>{D.presence=0}));const M=x?Math.max(.3,1+(c.spread-.4)*o.hands.spread*1.6):1,C=new Z(c.aim.x*4.6,c.aim.y*2.1,0).multiplyScalar(o.hands.follow*x),L=o.swarm.drift*(1+c.bass*o.sound.bass*.8),V=!!(r!=null&&r.live)?.35+.65*c.energy+.4*c.mid:.35;this.carry+=(o.sound.flow*V-this.carry)*(1-Math.exp(-f*.35)),this.current+=h*(.18+.5*this.carry);const I=.16*(1+c.high*o.sound.high*2.5),z=1+c.high*o.sound.high*1.5,E=o.swarm.size,F=new Z,Q=new Qi,B=new Z(0,1,0),K=new Z,he=new Z,le=new Z;this.swarm.forEach((D,te)=>{const G=_.has(te)?1:0;D.presence=G>D.presence?Math.min(G,D.presence+f/5):Math.max(G,D.presence-f/3),D.presence<.004&&G===0&&(D.presence=0);const Y=D.presence>.002;D.root.visible=Y;for(const Ve of D.strands)Ve.tube.mesh.visible=Y;if(!Y){D.last=null,D.primed=!1;return}const O=D.spec;D.beat+=h*Nn*(O.pulses/ic)+f*d*Nn*1.5;const ie=ow(D.beat),N=Math.min(1.3,Math.max(ie,g*.7)+d*.4),W=(D.grip??0)+(c.fist-(D.grip??0))*(1-Math.exp(-f*(7-te*.7))),_e=Math.max(0,(W-(D.gripWas??W))/Math.max(f,.001));D.gripWas=W,D.grip=W;const ye=this.handHold,ve=(N*(1-ye)+W*ye)*o.swarm.pulse,X=(Math.min(1.3,ie+g*.15+d*.4)*(1-ye)+Math.min(1.3,_e*.35)*ye)*o.swarm.pulse;D.rise+=(X*1.5-D.rise*1.2)*f,D.lift+=(D.rise-D.lift*.35)*f*.8,F.set(O.c[0]*M+O.a[0]*L*Math.sin(y+O.ph),O.c[1]*Math.min(1.4,M)+O.a[1]*L*Math.sin(2*y+O.ph*1.7),O.c[2]+O.a[2]*L*Math.cos(y+O.ph*.6));const ce=this.current-te*.35;F.x+=Math.sin(ce+O.ph*.5)*.9*this.carry,F.y+=Math.sin(ce*.63+O.ph)*.3*this.carry,F.z+=Math.cos(ce*.8+O.ph*1.3)*.5*this.carry;const H=.8+1.6*(1-te/K0.length);if(D.pull.lerp(C,1-Math.exp(-f*H)),F.add(D.pull),d>.001&&(K.set(F.x,F.y-.5,0),K.lengthSq()<.01&&K.set(te%2?1:-1,.4,0),F.addScaledVector(K.normalize(),d*2.6)),D.last){K.subVectors(F,D.last).divideScalar(Math.max(f,.001));const Ve=new Z(K.x*.12,1,K.z*.08).normalize();D.up.lerp(Ve,1-Math.exp(-f*1.5)).normalize()}D.last=(D.last??new Z).copy(F),F.addScaledVector(D.up,D.lift-.6);const re=D.presence,Ae=re*re*re*(re*(re*6-15)+10);F.y-=(1-Ae)*7,F.y-=.9;const Ne=O.s*E*(.3+.7*Ae)*(1+c.bass*o.sound.bass*.08+g*.04);{const Ve=this.camera.position,ut=Math.tan(this.camera.fov*Math.PI/360)*Math.max(1,Ve.z-F.z),U=Ve.y+ut-1.5*Ne-.8;F.y>U&&(F.y=U+.8*(1-Math.exp(-(F.y-U)/.8)))}D.root.position.copy(F),Q.setFromUnitVectors(B,D.up),D.root.quaternion.copy(Q),D.root.rotateY(Math.sin(y+O.ph)*.4),D.root.scale.setScalar(Ne);const nt=Hf+sw*ve;for(const Ve of D.tilts)Ve.rotation.x=nt;for(const Ve of D.lobes)Ve.scale.y=.18*(1-.18*ve);D.cap.scale.set(.44*(1-.2*ve),.26*(1+.08*ve),.44*(1-.2*ve)),D.root.updateMatrix();const We=o.swarm.tentacles,ct=D.up.clone().negate();he.set(1,0,0).applyQuaternion(D.root.quaternion);for(const Ve of D.strands){const ut=Ve.links;Ve.angle!==null&&Y0(Ve.angle,nt,Ve.from);const vt=ut[0].copy(Ve.from).applyMatrix4(D.root.matrix);if(!D.primed)for(let U=1;U<Ql;U++)ut[U].copy(vt).addScaledVector(ct,Ve.link*Ne*We*U);for(let U=1;U<Ql;U++){const ot=ut[U-1],He=ut[U];K.subVectors(He,ot),K.lengthSq()<1e-8&&K.copy(ct),K.normalize().lerp(ct,.22+.1*ve).normalize();const lt=Math.sin(Ve.phase+y*3*z-U*.75)*.06*z*(U/Ql);K.addScaledVector(he,lt).normalize(),He.copy(ot).addScaledVector(K,Ve.link*Ne*We)}Ve.tube.update(Ve.radius*Ne,.25)}D.primed=!0;const ke=D.shared;ke.uT.value=this.colourTime,ke.uOff.value=O.off+o.colour.offset,ke.uWA.value=1,ke.uWB.value=.6,ke.uWC.value=.8+.4*Math.sin(y+O.ph);const je=D.strandShared;je.uT.value=this.colourTime,je.uOff.value=O.off+.15+o.colour.offset,l.apply(ke,o.colour.depth,I),l.apply(je,o.colour.depth,I)}),this.scene.updateMatrixWorld(!0),this.camera.updateMatrixWorld(!0);for(const D of this.swarm)D.root.visible&&(D.cap.getWorldPosition(le),le.applyMatrix4(this.camera.matrixWorldInverse),D.shared.uCenter.value.copy(le))}}const Q0={picture:{detail:.6,camera:.8,dissolve:1,zoom:1},reading:{marks:1,words:1,hand:.7},hands:{clap:1},sound:{beat:1,arc:1}};let kh=null,cv=0,rc=0;function lw(){rc++;let s=!1;return()=>{s||(s=!0,rc=Math.max(0,rc-1))}}function cw(){return rc>0}function uw(s,e,t){if(s.length<e*t)return;const r=new Uint8Array(e*t);for(let o=0;o<t;o++)for(let l=0;l<e;l++)r[o*e+l]=s[o*e+(e-1-l)];kh={data:r,width:e,height:t},cv=performance.now()}const fw=4e3;function hw(){return kh&&performance.now()-cv<fw?kh:null}function dw(s,e,t){const r=Math.min(s.width-1.001,Math.max(0,e*(s.width-1))),o=Math.min(s.height-1.001,Math.max(0,t*(s.height-1))),l=Math.floor(r),c=Math.floor(o),f=r-l,h=o-c,d=c*s.width+l,g=s.data[d],x=s.data[d+1],m=s.data[d+s.width],y=s.data[d+s.width+1];return(g+(x-g)*f+(m-g)*h+(g-x-m+y)*f*h)/255}const pw=[30,55,90,150,250,400,650,1e3,1700,2800,4600,7500,14e3];new Float32Array(pw.length-1).fill(.2);(()=>{try{return localStorage.getItem("vj-tempo-listen")!=="off"}catch{return!0}})();const mw=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]],gw=[4,8,12,16,20];function Z0(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}function Vf(s,e,t,r,o,l){const c=Math.min(l,r/2,o/2);s.beginPath(),s.moveTo(e+c,t),s.arcTo(e+r,t,e+r,t+o,c),s.arcTo(e+r,t+o,e,t+o,c),s.arcTo(e,t+o,e,t,c),s.arcTo(e,t,e+r,t,c),s.closePath()}class vw{constructor(e,t){$(this,"canvas");$(this,"ctx");$(this,"cfg",Q0);$(this,"playing",new ya(.6));$(this,"video",null);$(this,"sample",document.createElement("canvas"));$(this,"sampleCtx");$(this,"release");$(this,"real",0);$(this,"apart",0);$(this,"swell",0);$(this,"lastDrop",0);$(this,"pulse",{kick:0,snare:0,hat:0});this.canvas=e,this.ctx=t,this.sampleCtx=this.sample.getContext("2d",{willReadFrequently:!0}),this.release=lw()}setParams(e){this.cfg=va(Q0,e)}setVideoElement(e){this.video=e}destroy(){this.release()}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,h=o.height;if(!f||!h)return;const d=this.playing;d.read(e,r);const{dt:g}=d;this.real+=g;const x=this.real,m=h/720,y=Math.max(d.kick,d.bump)*c.sound.beat;this.swell=Math.max(this.swell*Math.exp(-g*6),y),d.clapped&&(this.apart=Math.max(this.apart,1.3*d.clapStrength*c.hands.clap)),d.drop>.5&&this.lastDrop<=.5&&(this.apart=Math.max(this.apart,1.1*c.sound.arc)),this.lastDrop=d.drop;const S=d.build*.45*c.sound.arc;this.apart+=(S-this.apart)*(1-Math.exp(-g*(this.apart>S?1.3:3)));const w=this.apart*c.picture.dissolve;for(const ke of["kick","snare","hat"])this.pulse[ke]=Math.max(this.pulse[ke]*Math.exp(-g*7),(r==null?void 0:r[ke])??0);const _=Math.round(Math.max(16,Math.min(260,(48+80*Math.min(1,Math.max(0,c.picture.detail)))/Math.max(.2,c.picture.zoom)))),M=Math.max(8,Math.round(_*h/f)),C=f/_;let L=null;const P=this.video,V=this.sampleCtx;if(V&&P&&P.readyState>=2&&P.videoWidth>0&&c.picture.camera>0){(this.sample.width!==_||this.sample.height!==M)&&(this.sample.width=_,this.sample.height=M);try{V.setTransform(-1,0,0,1,_,0),V.drawImage(P,0,0,_,M),V.setTransform(1,0,0,1,0,0),L=V.getImageData(0,0,_,M).data}catch{L=null}}const I=hw();l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,h);const z=new Path2D,E=new Path2D,F=x*.11%1.2-.1;let Q=0,B=0,K=1,he=0,le=1,D=0;for(let ke=0;ke<M;ke++){const je=(ke+.5)/M;for(let Ve=0;Ve<_;Ve++){const ut=(Ve+.5)/_,vt=I?dw(I,ut,je):0;vt>.5&&(Q++,B+=vt,ut<K&&(K=ut),ut>he&&(he=ut),je<le&&(le=je),je>D&&(D=je));let U;if(L){const b=(ke*_+Ve)*4;U=(L[b]*.299+L[b+1]*.587+L[b+2]*.114)/255}else U=I?vt*.8:.25+.25*Math.sin(ut*9+x*.4)*Math.sin(je*7-x*.3);const ot=Math.exp(-Math.pow((je-F)/.03,2))*.35,He=C*.5*Math.min(1,(.1+.9*Math.pow(U,.8))*c.picture.camera+ot)*(1+.3*this.swell);if(He<.35)continue;let lt=ut*f,Te=je*h;if(w>.005){const b=Math.sin(Ve*127.1+ke*311.7)*43758.5453,A=Math.sin(Ve*269.5+ke*183.3)*43758.5453,ne=(b-Math.floor(b))*Math.PI*2+x*.3,me=(.5+(A-Math.floor(A))*5)*C*w*2.2;lt+=Math.cos(ne)*me,Te+=Math.sin(ne)*me}const _t=vt>.5?z:E;_t.moveTo(lt+He,Te),_t.arc(lt,Te,He,0,Math.PI*2)}}const[te,G,Y]=Z0(t[0]??"#7fd8ff"),O=(t[0]??"").toUpperCase()==="#FFFFFF"&&(t[1]??"")==="#000000",[ie,N,W]=O?[255,255,255]:Z0(t[1]??t[0]??"#9aa0b0"),_e=(ke,je)=>Math.round(ke+(255-ke)*je);l.fillStyle=`rgb(${_e(ie,.25)},${_e(N,.25)},${_e(W,.25)})`,l.globalAlpha=O?.95:.45,l.fill(E),l.fillStyle=`rgb(${_e(te,.12)},${_e(G,.12)},${_e(Y,.12)})`,l.globalAlpha=.95,l.fill(z);const ye=c.reading.marks,ve=c.reading.words,X=`rgb(${_e(te,.45)},${_e(G,.45)},${_e(Y,.45)})`,ce=`rgb(${_e(te,.7)},${_e(G,.7)},${_e(Y,.7)})`,H=Math.max(9,Math.round(11*m));l.font=`500 ${H}px ui-monospace, SFMono-Regular, Menlo, monospace`,l.textBaseline="middle",l.lineJoin="round",l.lineCap="round";const re=(ke,je,Ve)=>{const ut=l.measureText(ke).width+10*m,vt=H+7*m,U=Math.max(4,Math.min(f-ut-4,je)),ot=Math.max(4,Math.min(h-vt-4,Ve));l.globalAlpha=.85*ve,l.fillStyle="#000",Vf(l,U,ot,ut,vt,5*m),l.fill(),l.fillStyle=X,l.fillText(ke,U+5*m,ot+vt/2+.5)};(Q>M*_*.01?1:0)&&ye>.01&&(l.globalAlpha=.7*ye,l.strokeStyle=X,l.lineWidth=Math.max(1,1.4*m),Vf(l,(K-.012)*f,(le-.012)*h,(he-K+.012*2)*f,(D-le+.012*2)*h,14*m),l.stroke(),ve>.01&&re(`person  ${(B/Q).toFixed(2)}`,(K-.012)*f,(le-.012)*h-H-12*m));const Ne=ke=>`${ke.fingerCount??0} finger${ke.fingerCount===1?"":"s"} · ${ke.gesture==="none"?"half open":ke.gesture} · ${(ke.openness??0).toFixed(2)}`,nt=[["left hand",e.left],["right hand",e.right]],We=O?"#2f5cff":ce,ct=O?"#1f4fe6":X;for(const[ke,je]of nt){const Ve=e.synthetic||je==null?void 0:je.landmarks;if(!je||!Ve||Ve.length<21)continue;const ut=Math.max(.1,c.reading.hand),vt=(Ve[0].x+Ve[9].x)/2,U=(Ve[0].y+Ve[9].y)/2,ot=Ve.map(A=>({...A,x:vt+(A.x-vt)*ut,y:U+(A.y-U)*ut}));if(ye<=.01)continue;let He=1,lt=0,Te=1,_t=0;for(const A of ot)A.x<He&&(He=A.x),A.x>lt&&(lt=A.x),A.y<Te&&(Te=A.y),A.y>_t&&(_t=A.y);l.strokeStyle=We,l.lineWidth=Math.max(1,1.5*m),l.globalAlpha=.8*ye,l.beginPath();for(const[A,ne]of mw)l.moveTo(ot[A].x*f,ot[A].y*h),l.lineTo(ot[ne].x*f,ot[ne].y*h);l.stroke(),l.fillStyle=We,l.beginPath();for(const A of ot)l.moveTo(A.x*f+3*m,A.y*h),l.arc(A.x*f,A.y*h,3*m,0,Math.PI*2);l.fill();const b=.02;if(l.strokeStyle=ct,l.globalAlpha=.75*ye,Vf(l,(He-b)*f,(Te-b)*h,(lt-He+b*2)*f,(_t-Te+b*2)*h,12*m),l.stroke(),ve>.01){l.fillStyle=ct,l.globalAlpha=.8*ve;for(const A of gw)l.fillText(String(A),ot[A].x*f+6*m,ot[A].y*h-7*m);re(`${ke}  ${Ne(je)}`,(He-b)*f,(_t+b)*h+6*m)}}if(e.left&&e.right&&ye>.01&&!e.synthetic){const ke=e.left.position,je=e.right.position;l.globalAlpha=.45*ye,l.strokeStyle=ct,l.setLineDash([4*m,6*m]),l.beginPath(),l.moveTo(ke.x*f,ke.y*h),l.lineTo(je.x*f,je.y*h),l.stroke(),l.setLineDash([]),ve>.01&&re(`${(e.distanceBetweenHands??0).toFixed(2)} apart${e.clapping?" · clap":""}`,(ke.x+je.x)/2*f-40*m,(ke.y+je.y)/2*h-H)}l.globalAlpha=1}}const xw=1.4,_w=14,yw=1.2,J0=(s,e)=>1/(1+1/(2*Math.PI*s)/e);class so{constructor(e=xw,t=_w){$(this,"value",null);$(this,"speed",0);this.minCutoff=e,this.beta=t}next(e,t){if(this.value===null||t<=0)return this.value=e,this.speed=0,e;const r=(e-this.value)/t;this.speed+=(r-this.speed)*J0(yw,t);const o=this.minCutoff+this.beta*Math.abs(this.speed);return this.value+=(e-this.value)*J0(o,t),this.value}reset(){this.value=null,this.speed=0}}class Mw{constructor(e=5){$(this,"recent",[]);$(this,"held",null);this.size=e}next(e){this.recent.push(e),this.recent.length>this.size&&this.recent.shift();const t=new Map;let r=e,o=0;for(const l of this.recent){const c=(t.get(l)??0)+1;t.set(l,c),(c>o||c===o&&l===this.held)&&(r=l,o=c)}return this.held=r,r}reset(){this.recent=[],this.held=null}}const $0=[{tip:8,pip:6},{tip:12,pip:10},{tip:16,pip:14},{tip:20,pip:18}];function Sw(s,e){if(!s||s.length<21)return null;const t=(x,m)=>Math.hypot((x.x-m.x)*e,x.y-m.y,(x.z-m.z)*e),r=(x,m)=>Math.hypot((x.x-m.x)*e,x.y-m.y),o=s[0],l=s[9],c=r(o,l);if(c<1e-4)return null;let f=0,h=0;for(const x of $0){const m=t(s[x.tip],o),y=t(s[x.pip],o);m>y*1.12&&f++,h+=Math.min(1,Math.max(0,(m/c-1.05)/.85))}const d=s[17];return t(s[4],d)>t(s[3],d)*1.12&&f++,{fingers:f,pinchGap:t(s[4],s[8])/c,openness:h/$0.length,size:c,angle:Math.atan2((l.x-o.x)*e,o.y-l.y)}}const eg=.32,Gf=.5,Aw=180,tg=30,ng=.08,Ew=.32,ww=.115,ig=.16,Tw=1.3,Cw=.2,Rw=.28,bw=.7,Pw=200,Lw=.3,Iw=450,Nw=140;class rg{constructor(){$(this,"points",Array.from({length:21},()=>({x:new so,y:new so,z:new so(1,6)})));$(this,"size",new so(1,4));$(this,"angle",new so(1.2,3));$(this,"open",new so(2,6));$(this,"fingers",new Mw(5));$(this,"pinched",!1);$(this,"gesture","none");$(this,"gestureSince",0);$(this,"lastAngle",0);$(this,"lastAt",0);$(this,"hand",null);$(this,"seenAt",0)}read(e,t,r){const o=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const l=e.map((w,_)=>({x:this.points[_].x.next(w.x,o),y:this.points[_].y.next(w.y,o),z:this.points[_].z.next(w.z,o)})),c=Sw(e,r);if(!c)return this.hand;const f=this.fingers.next(c.fingers);this.pinched=c.pinchGap<(this.pinched?Gf:eg);const h=Math.max(0,f-1),d=this.pinched?"pinch":c.openness>.62?"open":c.openness<.28?"fist":h>=3?"open":h<=0?"fist":"none";d!==this.gesture&&(this.gesture=d,this.gestureSince=t);let g=c.angle;for(;g-this.lastAngle>Math.PI;)g-=2*Math.PI;for(;g-this.lastAngle<-Math.PI;)g+=2*Math.PI;this.lastAngle=this.angle.next(g,o);const x=Math.atan2(Math.sin(this.lastAngle),Math.cos(this.lastAngle)),m=this.size.next(c.size,o),y=this.points[9],S=Math.hypot(y.x.speed,y.y.speed);return this.seenAt=t,this.hand={position:{x:l[9].x,y:l[9].y},gesture:d,pinchDistance:this.pinched?c.pinchGap*c.size:void 0,velocity:Math.min(3,S*2),holdDuration:(t-this.gestureSince)/1e3,fingerCount:f,landmarks:l,pinch:Math.min(1,Math.max(0,(Gf+.25-c.pinchGap)/(Gf+.25-eg*.6))),openness:Math.min(1,Math.max(0,this.open.next(c.openness,o))),depth:Math.min(1,Math.max(0,(m-ng)/(Ew-ng))),angle:x},this.hand}forget(){for(const e of this.points)e.x.reset(),e.y.reset(),e.z.reset();this.size.reset(),this.angle.reset(),this.open.reset(),this.fingers.reset(),this.pinched=!1,this.gesture="none",this.lastAt=0,this.lastAngle=0,this.hand=null}}class Dw{constructor(){$(this,"kept",{left:new rg,right:new rg});$(this,"trail",[]);$(this,"lastAt",0);$(this,"clapAt",-1e9);$(this,"clapStrength",0);$(this,"gap",1);$(this,"gapAt",-1e9);$(this,"closing",0);$(this,"counted",!1);$(this,"held",!1)}next(e,t,r){const o={};(e.landmarks??[]).forEach((d,g)=>{var S,w,_,M;if(!d||d.length<21)return;const x=d.map(C=>({x:1-C.x,y:C.y,z:C.z}));let y=((M=(_=(w=(S=e.handedness)==null?void 0:S[g])==null?void 0:w[0])==null?void 0:_.categoryName)==null?void 0:M.toLowerCase())==="left"?"right":"left";if(o[y]){const C=o[y],L=x[9].x<C[9].x;o.left=L?x:C,o.right=L?C:x;return}o[y]=x});const c={left:null,right:null};for(const d of["left","right"]){const g=this.kept[d];o[d]?(c[d]=g.read(o[d],t,r),c[d]&&this.trail.push({...c[d].position,hand:d})):g.hand&&t-g.seenAt<=Aw?c[d]=g.hand:g.hand&&g.forget()}this.trail.length>tg&&(this.trail=this.trail.slice(-tg)),c.gestureTrail=[...this.trail];const f=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const h=d=>{this.counted||t-this.clapAt<Iw||(this.counted=!0,this.clapAt=t,this.clapStrength=Math.min(1,Math.max(.7,d)))};if(c.left&&c.right){const d=c.right.position.x-c.left.position.x,g=c.right.position.y-c.left.position.y;c.distanceBetweenHands=Math.hypot(d,g),c.twist=Math.atan2(g,d*r)}if(o.left&&o.right){const d=o.left[9],g=o.right[9],x=Math.hypot(g.x-d.x,g.y-d.y),m=(t-this.gapAt)/1e3,y=m>0&&m<.15?(this.gap-x)/m:0;this.closing=Math.max(y,this.closing*Math.exp(-f*12)),this.gap=x,this.gapAt=t,x>Lw&&(this.counted=!1),x<Cw&&this.closing>Tw&&h(this.closing/2.2),this.held=x<(this.held?ig:ww),this.held&&(h(.7+this.closing/3),c.clapping=!0,c.clapIntensity=Math.max(.6,1-x/ig))}else t-this.gapAt<Pw&&this.gap<Rw&&this.closing>bw&&h(.75+this.closing/3),this.closing*=Math.exp(-f*6),this.held=!1,t-this.gapAt>1200&&(this.counted=!1);return t-this.clapAt<=Nw&&(c.clapping=!0,c.clapIntensity=Math.max(c.clapIntensity??0,this.clapStrength)),c}}const Uw=25e3,Fw=5e3,Ow=2e4,kw=6e4,sg=640,Bw="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",og="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";function zw({videoElement:s,onHandData:e}){const t=Ft.useRef(new Dw);return Ft.useEffect(()=>{let r=!0,o=0,l=-1,c=null,f=null,h=0,d=0;const g=()=>s.videoWidth&&s.videoHeight?s.videoWidth/s.videoHeight:16/9,x=(_,M)=>{r&&e(t.current.next(_,M,g()))},m=async()=>{if(!(!r||f))try{const _=await import(og),M=await _.FilesetResolver.forVisionTasks(`${og}/wasm`),C=await _.HandLandmarker.createFromOptions(M,{baseOptions:{modelAssetPath:Bw,delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5});if(!r){C.close();return}f=C,console.log("✋ Hand tracking is running on the page.");const L=()=>{if(!(!r||!f)&&(o=requestAnimationFrame(L),s.currentTime!==l)){l=s.currentTime;try{const P=performance.now();x(f.detectForVideo(s,P),P)}catch(P){console.error("Hand detection error:",P)}}};L()}catch(_){console.error("Hand tracking could not start:",_)}},y=_=>{c&&(console.warn(`Hand tracking is moving to the page: ${_}`),window.clearTimeout(h),cancelAnimationFrame(o),c.terminate(),c=null,m())},S=()=>{if(typeof Worker>"u"||typeof createImageBitmap!="function"||typeof OffscreenCanvas>"u"){m();return}try{c=new Worker("/hand-worker.js")}catch{m();return}let _=!1,M=!1,C=!1,L=!1,P=!1,V=!1;h=window.setTimeout(()=>{_||y("it took too long to start")},Uw);const I=()=>{if(!r||!c)return;if(o=requestAnimationFrame(I),M){performance.now()-d>(P?kw:C?Fw:Ow)&&y("the worker stopped answering");return}if(s.currentTime===l||s.readyState<2)return;l=s.currentTime,M=!0,d=performance.now();const z=d,E=Math.min(sg,s.videoWidth||sg);createImageBitmap(s,{resizeWidth:E,resizeHeight:Math.max(1,Math.round(E/g())),resizeQuality:"low"}).then(F=>{if(!c){F.close();return}const Q=cw();Q&&!V&&(P=!0),c.postMessage({type:"frame",bitmap:F,time:z,mask:Q},[F])}).catch(()=>{M=!1})};c.onmessage=z=>{const E=z.data;E.type==="ready"?(_=!0,window.clearTimeout(h),console.log("✋ Hand tracking is running in a worker."),I()):E.type==="hands"?(M=!1,C=!0,E.mask&&(V=!0,P=!1,uw(E.mask.data,E.mask.width,E.mask.height)),x({landmarks:E.landmarks,handedness:E.handedness},E.time)):E.type==="note"?(V=!0,P=!1,console.warn(E.reason)):E.type==="failed"?y(E.reason):E.type==="error"&&(M=!1,L||(L=!0,console.warn("Hand tracking worker:",E.reason)),C||y(E.reason))},c.onerror=z=>y(z.message||"the worker failed"),c.postMessage({type:"init"})},w=()=>{r&&(s.readyState>=2?S():window.setTimeout(w,100))};return w(),()=>{r=!1,window.clearTimeout(h),cancelAnimationFrame(o),c==null||c.terminate(),c=null;try{f==null||f.close()}catch(_){console.warn("Error closing hand landmarker:",_)}f=null}},[s,e]),null}const Hw=40;class Wf{constructor(e,t){$(this,"history",[]);$(this,"last",0);$(this,"pulse",0);$(this,"threshold",0);$(this,"recent",[]);$(this,"peak",0);$(this,"flux",0);this.refractory=e,this.decay=t}measure(e,t,r,o){for(this.recent.push({at:r,rise:e,heard:t});this.recent.length&&r-this.recent[0].at>Hw;)this.recent.shift();let l=0,c=0;for(const m of this.recent)l+=m.rise,c+=m.heard;this.history.push(l),this.history.length>90&&this.history.shift();const f=this.history.length;let h=0;for(const m of this.history)h+=m;h/=f;let d=0;for(const m of this.history)d+=(m-h)**2;const g=Math.sqrt(d/f);return this.threshold=h+g*1.9*(1.5-o),this.flux=l,this.peak=Math.max(l,this.peak*.9985),f>=20&&l>this.threshold&&l>this.peak*.5&&c>1.2*(1.3-o*.8)&&r-this.last>this.refractory?l/Math.max(1e-9,this.threshold):0}commit(e,t,r){e&&(this.last=t);const o=this.peak>0?Math.min(1,this.flux/this.peak):0;this.pulse=Math.max(this.pulse*Math.exp(-r/this.decay),e?Math.max(.4,o):0)}}function Vw(s,e,t,r){const o=s.map(c=>c.hits.measure(c.flux,c.audible,e,r)),l=Math.max(...o);s.forEach((c,f)=>c.hits.commit(o[f]>0&&o[f]>=l*.7,e,t))}class ag{constructor(e){$(this,"ceiling",-100);$(this,"floor",0);$(this,"seen",!1);this.minSpan=e}place(e,t){this.seen||(this.seen=!0,this.ceiling=e,this.floor=e);const r=l=>1-Math.exp(-t/l);this.ceiling+=(e-this.ceiling)*r(e>this.ceiling?.5:60),this.floor+=(e-this.floor)*r(e<this.floor?2:60);const o=Math.min(this.floor,this.ceiling-this.minSpan);return Math.min(1,Math.max(0,(e-o)/(this.ceiling-o)))}}function Gw(){return{overall:new ag(14),bass:new ag(14),overallSlow:0,bassMid:0,highFast:0,highSlow:0,out:0,onsets:[],energy:0,build:0,drop:0,bright:.5,heard:0}}const lg=-75,Ww=2.5;function Xw(s,e,t,r){const o=w=>1-Math.exp(-r/w),l=w=>Math.pow(10,w/10),c=w=>w>1e-10?10*Math.log10(w):-100;if(s.overallSlow+=(l(e.overall)-s.overallSlow)*o(2),s.bassMid+=(l(e.bass)-s.bassMid)*o(.5),s.highFast+=(e.high-s.highFast)*o(1),s.drop*=Math.exp(-r/1.2),s.heard+=r,s.heard<Ww){s.highSlow=s.highFast,s.energy=.5;return}s.highSlow+=(e.high-s.highSlow)*o(8);const f=c(s.overallSlow)>lg;s.energy=f?s.overall.place(c(s.overallSlow),r):0;const h=s.bass.place(c(s.bassMid),r),d=s.bass.ceiling>lg;for(e.onset&&s.onsets.push(t);s.onsets.length&&t-s.onsets[0]>2e3;)s.onsets.shift();let g=!1;d&&h<.4?s.out=Math.min(30,s.out+r):h>.65&&(s.out>=2&&(s.drop=Math.max(s.drop,Math.min(1,.55+s.out/14)),g=!0),s.out=0);const x=Math.min(1,Math.max(0,(s.highFast-s.highSlow)/18)),m=Math.min(1,Math.max(0,(s.onsets.length/2-3)/5)),y=Math.min(1,s.out/6),S=f&&s.out>0?y*y*(3-2*y)*Math.max(.1,x,m):0;if(s.build+=(S-s.build)*o(g||S<s.build?.25:.7),e.centroid>0){const w=Math.min(1,Math.max(0,Math.log2(e.centroid/300)/Math.log2(16.666666666666668)));s.bright+=(w-s.bright)*o(1.5)}}const uv={bass:[20,160],lowMid:[160,800],mid:[800,4e3],high:[4e3,12e3]},jw=Object.keys(uv),qw=.002,Kw=.04,Yw=.25,Qw=.0016,Zw=6,Jw=90,$w=170,eT=1.9;function tT(){const s=()=>({floor:255,ceiling:0});return{envelopes:{bass:s(),lowMid:s(),mid:s(),high:s()},overall:s(),previous:null,flux:[],lastBeat:0,onset:0,rise:0,punch:0,lastNow:0,kick:new Wf(170,.16),snare:new Wf(170,.13),hat:new Wf(70,.06),sections:Gw()}}const co=new Float32Array(256);for(let s=0;s<256;s++)co[s]=Math.pow(10,(s/255*70-100)/20)*1e3;const Xf={kick:[30,150],snare:[1500,5e3],hat:[6e3,12e3]};function cg(s,e){s.floor+=(e-s.floor)*(e>s.floor?qw:Kw),s.ceiling+=(e-s.ceiling)*(e>s.ceiling?Yw:Qw);const t=s.ceiling-s.floor;return t<Zw?Math.min(1,e/190):Math.min(1,Math.max(0,(e-s.floor)/t))}function jf(s,e,t){const r=Math.max(0,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=s[c];return l/(o-r)}function ug(s,e,t){const r=Math.max(1,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=(co[s[c]]/1e3)**2;return l>0?Math.max(-100,10*Math.log10(l)):-100}function nT(s,e){const t=-100+10*Math.log10(Math.max(1,e))+5;return Math.min(1,Math.max(0,(s-t)/(-32-t)))}function iT(s,e,t,r,o){const l=e/2/s.length,c=G=>Math.round(G/l),f={};for(const G of jw){const[Y,O]=uv[G];f[G]=cg(t.envelopes[G],jf(s,c(Y),c(O)))}const h=cg(t.overall,jf(s,c(20),c(12e3))),d=c(1e4),g=new Float32Array(d);for(let G=0;G<d&&G<s.length;G++)g[G]=s[G];let x=0,m=0;if(t.previous){for(let G=0;G<g.length;G++){const Y=t.previous[G]??0,O=g[G]-Y;O>0&&(x+=O,m+=co[g[G]]-co[Y])}x/=g.length}t.punch=m;const y=t.lastNow?Math.min(.1,Math.max(.001,(o-t.lastNow)/1e3)):1/60;t.lastNow=o;const S=G=>{var ye;const Y=t.previous;if(!Y)return{flux:0,audible:0};const O=Math.max(1,c(G[0])),ie=Math.min(s.length,Math.max(O+1,c(G[1])));let N=0,W=0,_e=0;for(let ve=O;ve<ie;ve++){const X=ve<Y.length?Y[ve]:((ye=t.above)==null?void 0:ye[ve-Y.length])??s[ve];N+=co[s[ve]],W+=co[X],s[ve]>X&&(_e+=s[ve]-X)}return{flux:Math.max(0,N-W),audible:_e/(ie-O)}},w=S(Xf.kick);Vw([{hits:t.kick,...w},{hits:t.snare,...S(Xf.snare)},{hits:t.hat,...S(Xf.hat)}],o,y,r),t.rise=x+w.audible*.5,t.previous=g,t.above=s.slice(d),t.flux.push(x),t.flux.length>Jw&&t.flux.shift();const _=t.flux.reduce((G,Y)=>G+Y,0)/Math.max(1,t.flux.length);let M=0;for(const G of t.flux)M+=(G-_)**2;const C=Math.sqrt(M/Math.max(1,t.flux.length)),L=eT*(1.5-r*1),P=_+C*L,I=t.flux.length>=20&&x>P&&x>.35*(1.3-r*.8)&&o-t.lastBeat>$w;I&&(t.lastBeat=o);const z=P>0?Math.min(1,(x-P)/(P+.6)):0;t.onset=Math.max(t.onset*.9,I?Math.max(.35,z):0);let E=0,F=0;const Q=Math.min(s.length,c(1e4));for(let G=Math.max(1,c(100));G<Q;G++){const Y=(s[G]/255)**2;E+=Y,F+=Y*G*l}const B=ug(s,c(20),c(12e3));Xw(t.sections,{overall:B,bass:ug(s,c(30),c(160)),high:jf(s,c(2e3),c(12e3)),centroid:E>.05?F/E:0,onset:I},o,y);const K=.6+r*1.2,he=1.5-r,le=1,D=G=>le*Math.min(1,K*Math.pow(Math.max(0,G),he)),te=I&&le>.15;return{bass:D(f.bass),lowMid:D(f.lowMid),mid:D(f.mid),high:D(f.high),overall:D(h),beat:te,beatIntensity:te?le*Math.min(1,Math.max(.3,z)):0,onset:le*t.onset,kick:le*t.kick.pulse,snare:le*t.snare.pulse,hat:le*t.hat.pulse,energy:le*t.sections.energy,build:le*t.sections.build,drop:le*t.sections.drop,bright:t.sections.bright,input:nT(B,c(12e3)-Math.max(1,c(20)))}}const fg=[.35,.45,.8,1.15,1.5,1.9],rT=3.6,sT=2.2,oT=6;function aT(){return{rate:1,clap:0}}function hg(s){if(!s)return null;if(s.gesture==="fist")return fg[0];const e=s.fingerCount;return e===void 0?null:fg[Math.min(5,Math.max(1,Math.round(e)))]}function lT(s,e,t){const r=[hg(s.left),hg(s.right)].filter(c=>c!==null),o=r.length?Math.max(...r):1,l=Math.min(1,t*oT);return e.rate+=(o-e.rate)*l,s.clapping&&(e.clap=Math.max(e.clap,rT*Math.max(.5,s.clapIntensity??1))),e.clap=Math.max(0,e.clap-e.clap*sT*t),e.rate+e.clap}const cT={dust:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD51PXOBSjr0HNJjGAe3fFLz6k0ABBC5oOeMd/SnJI8Uquhw6nIIHepLhmaczSGMmUlzsAUDJ5GAAB9BxQBCFLNgcn0JpXRo5HRl2spIIPr6U9HRmxMZCoBxtI4Pbr2zTFXcRghB79KAG9PQ0oBHp1q8NKuJYY2t40lLMIx5UisXY5IGM5zx6enqKpvDJESHUjkjn260ANwcjPNA78+3FTW8E15PFbwohkY7F5CjJ9SSB+Zpz27szhSSsYwWA3KOmSWHGMnr9KAKw454IoweO1TpHE85WSb7OhxhiDJ/KkGwQjYru7A71KjC88YP/6qAIe2MClx0/nQFJIwcH0qxFbsy8XEKsWKMjPg9Mk+gHbr1oArqrM3AJPp3o6dyeeMd6nuRAZWe0ikS3Zj5fmuGfbnjJAAzjGeKW2vpbJJfs7mKWRShkRypCEYZfTB/pQBE0JWBZGaP5icKHG4Y9R1H41GQc5qZI5ViM4wE+7nI6kenWolxvAfJXPJA5x7UAA+g4o6c+npQeuRwPSkPH0oAMdADS854GKAADgjNHfpzQAAZ9qleFoZADtlAw3ynIwff+fvTXEZdRDubcBkY6N3A9fr+lOliVJGCiQLtBG8YOPWgBAyl2ZBs3NgKGzgfXv6VJdSRzzblt1hwoV9vQuOpAHAz6DimR4UkjJKNkleeP8A9eKsyvc3TRPLO+1VKRCQ5CruJ2gemSeMY5NAFdRvRuQ4QZAPUjPTHaljiacOqJGhRPM5IGQBzyfbPHftVu7jjikkUyW0xIAZ4sBVZiGO0DrjkcYHaokljjidkuTG8ZATEfMgOQfm7AADg/3jQBGbiJrMxGHMgIw6thcDPVQPmPPUn2pYI1nMnzKuzlsybPMGQNqjHJ6fgPap/swvFLIJC5H7hMfewwyOB1wSeoHv2oSOCRHhd5pCIN6Mq7yrLywI4wvXJ5wBnmgCo8SuFaNCiMTt3MDkEnHPr26YpPIkZgY4nG47ce//AOsU5gyXH79RKOVGG4OOOo9KbKrrMwm3iUcENx9KALHk74muDAkcZGxP3hAVxjPbk98f7Qq3GqarFbNd38MIt3jtgkrBSIfmO5cDBC4IOSTll684rXKxxW3lx28mHYMHkGOQMEKAT33Dqeg6VGUkaAs0yKYMbY3b5iDk5A/DJ+ooAnu4IgLiW0tpprXztsVw+chQDgEDjJBBOemMetQ2yxpFcLM0UTjAXzAxP3sEAAEAjrk44XA64qXSjch5Ra3kkMkimIxRhmaVWUhgAODxxg+tVZ4ZkYGY/M43AcHIPOeKAI2RScBwz/dxtI4+pphAB+U575qa2tXuZCqsi7VLEuwUYHYZIyfQDk9qaLeQAkjAAJ+bj9KAI+n9fejtSnk9OKQ4yORQAdunFAB7d6AcDjk0gJzigC1aCNXzJ5uwfe8r7y+/4fhU6LetCvkIj8sq+WA0hBByMdSuAe3HXrVa1nEEgYDD54bdgY7gjuD/AI1Zhv57aWaeCeS0W43xOts+zMbdUAz9zsRnpxQBSjZc5cE8fKQcYPY9OlaFrbG9mULtjVEYmQgkcZOeOQM8fjVaAbZgdp5PHl/NxjkDr29f6VO93LbPLb2pRU8w7QrCRgNpTAfHIwT04PWgBLm4+1xrNHCsflxBZv3jEyncdrHPGcFRxx8ueuaryxr521HUoFUZXOCcc9ff/wCtSJ5gUFBhc8Z+nX3+vamlCjI2QG+8Ce9AGxaWLXq3FqLuGHT7Y+ZJcmMgHoM4xvb5sYUdNxIAyaqSR2n9qrh5IbZuN08ZztI+9hPUY4GevXFQzh1u95TyJIgjDyyflGB8wJ5yTzn1NQt5pbO4s33gc5xk9/rQBOWQWySxNFvMxBUrukwACD0xjt9c1LcTs7JM4LyAbjJPhtx75z75IBz160TXc9zdx3UCi3kEYA8g7dowRxjpkZJ7/wAqrPNG/lrKnllIyCV5LtnqRnqen60AXZmsonYWlzK8JUshmXYd+fQMduVHXnk/iJLSSFNRjFvbbvNHlATShF8zGMiQgAAEq2Tg8cnmqDKt6ryqY4fKjUEEnMpzjI/r2qawlFtcwyxyzR3EbM4WFFbDAfKeTznkH+R6UAMjMlnKkkUhiuIf3u5X2OrZwMe4POBz1PSomlmEZiY+WDl+mS5Iwfm68jt0/Gnxh3uC6RIQrKxiY5D85xj09cfpTjJbvI8kYaCUu7/uhmMA9lU8jALdSe34gEDtuMmyMQgAEqrHGfoTnrUt5cxyTTC3eWSGVg5e4VTKTjnLD3J4+melRTSDA2xxgqqgFM4yBySDySfyznHGKhJCr1U7uc9x7UAIoyc/pRge2e9Jk55FL14z+dACfzNKPXNJnPTHHalCg9KAJUQtEwEeSo3FsgcD69f50szrO4CL5cYHCs5IXjnGfU5NTJNMYhaPJGsKHzFJJZVYjrgcEngHg9hwBUcsclodskUkc4AJWRdpAIBUgEccc59CMUANjaWONipG1uPXP4fjSpGJJGdX2x4yzycBSR0yM55/P2oCgQq0kJAbIDg43D+XBoJSMowLgEZBZeF5wSB0PegC4mnXlxpUl0kMv2eH95gAkAEAFvYcDk/QZ5xPbrpsHkJdEG5S4CujZMTRkcMGUg5HpnBH0qvYyxs6xPOsCIwYSPllVxwGIwSVHPAB7dadIJXa9EdwJosn5xtQOM5DYPb5eg5HHSgCoiC4fdLcqmCAwx8x9cdifrjNWJbJoIfOWzL20jZSVuSO2zIIBOSAR60p3XFtGk6pFDZgpgKeS2TyRyST/KoI7N7mNVg3SyRgsyohIRBjLH8T29KAH8OWiwSsS467VHXIOB2J6mh2mFnFBJNHKvVVDqwGecZ7H8eM0bY4p3aAh0cmMRSn94wI6kDpnPH+TVx7WK3uj9rdA6fLKsbDcjAbcKRkY6HJ64zQBDC8MmntHPHIZFAEUSIPmHzEncTlcZBwAc98Dmktra3SOCU30kbuctsjJKBWOCDnk8Dp6+1RzQm3jhjnlLFC2USUHyx347Z4PuAafZ7Yg264MZQgyQKv31HTvycnoOR1oAikij+zPcQoETIUgzAsWJJGB1xgYPoRyeQKdbRr5aCS7Ft5owAE3Dbzgn3JwPUYz6VA6rM4itkZtzEqAMn8vp25/rVq9aO30+G2WFA7gStui/eLkcAueSCMMAvy8jqc0AUmhmFuZRGxjVtjSgEruxkLnpnAJx3oS4ltxIkMp2yDa2B94fjQsjuDGrEKPmCkk5P4d6iJyxxhec4Ax+lACvHJFI0ciMjqcMGBBH4GkPA/xFS3Mv2i5kmLSMzncTI+9j9T3+tREc5xmgBOD649qU9e3PtQODx0oB4x1oAUEDGCQw65rTOs319FbWl5cNPDA2YEZc+Vk8hB2B9BxkD0FUYPKCSSSru+UqiZI+Yg/NkenX3pkZZJMgHeDgEckfSgCfc22S0Uq8KOXyuCeOM7sAkY7d/SrUeowxZQ2kE3zBkzn5T1AOfvAc/XPJOBVJpprto42b5YsiNGY7UGSxAz0BJJ+pqSGWORpBNIIozG2FEe8E4yqgZ4yQMntz16UARiKJk8zJBOMgdu2fzpgVlQuGHC464PPBA55q5Pd2zQLGIIi7BWd44yhU5OVAzjGMcjFMsZIPP8uZvLilGwuzkBcnqcA5GPXNACg+XZzROuDKq7Qr53HOd3vgdqVn+1yQrDOsQigyDIQnzKCSM9ySDjPPIFQ3EkayMloZfJ4P73aWyPQgevpipg89u6Tl/JuLYLIvzBSBxtI5znJHA5HWgBLLyZGDSxGRi43EOFY5I4GQfz5xnpVkNJZaki3FvFGFhLRiaJeUdSVYgj5zhgQSO49BVaO4uI4iihPMkIm8xQvmA4PRuuMdsjnHFVDIzhlBABIJGc89M5/E/nQBJclZZDIpGHbO3GNv8AjU0V5iVibaLe8ZiPyDHPGQOinGOR9etVwU2hW3K4Jy2Tz6DH+etSXF7NdGFLiUyLEpVM8BQSTwB7nOKAJPtL7AscxjDuPMLNwSDkZA6gdfzqOZnmcqH3BARgLtAAxnA/Cp7W9ksYw/ls3ng7g+CsiZHB7/eXtjpTLW7+z3AuEhhkEYOYpVypzkfjjIP4DrQBFDOIoZISiZYgrJt+ZcZGM+hzyPYdKieQSMWZVyRggDGD9KXz5MDcQwDb8MBjPHNM3fKAFAxnkdTQAhwPyo6HB/8ArUuffrTSfY+9ACjk9eaAB/jSZ4wO1A44zQBMs5WIRqEXnO8L82CMYz6e1Ai3TJGrxyF8AYYgAnjk8VDyMkfnT0fYwbCsc9CuR/8AXoAHXYzLkFgcEg5B+hFW7OzYxPeNbm4ggZfMXcVXnJwW7ZCN3z6A1UjZY2+aJX9mJ/pQZHEZjDHyyQxXPBI6E/r+dAASX7Dk5wBUsE6QxSAR5kZSqtxgAgg8EHsfb1ot7trWdJY44m2c7ZYw6k46lTkH+VNjnZbSW32RMkrK25kBZSucYbqM5OR0PGegoAC6tlY4gWfbjqWB9ue9W47r7DefarWSUyCMoTKoDISCreobjI6dD681TklDj5YUjzj7ue3fr1PrTQfnyVDH0YZoAkad5JIUlLOkfAC4zt9AcH8KdcRES72DRrIokjyAMp0HTHp1xyaYsMvkmaMZRANzL/Bk4APoTimxzNDHLGgTbKAGygJwCDwSMjkdRzjjpQA1mJzuO7vzVhLhrSeQ25IDxtEfMUEgMu1uD06nnqPrUKShIpkMUTmVQoZs5j5ByvPU4xzngn60u6N3VpC5yuDjGSccf0oATKlQNxOOx4/KnPIWt4kMUS7QRvC/M3J6nv1x+FNKYVW3KQewPI+o7UzLcZzgfpQA5ypJ2g4z3PNNHUUdR2xSZ56UAKP1ozj6CkHH8VL0P+FACE8gdqcB+lFFACN1x6DNIDkiiigBSAMflSNkAc9RzRRQAZJY+1OxzRRQAnv74oxljmiigBPQetKflAx2oooAB1/HFL0GfSiigBO+PYUYyM9zRRQAgGTjtQTx9aKKAFxjOO3NLjJC9jRRQB//2Q==",line:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5tooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKK04vDOuzDMWi6jJ/u2sh/pSyeF9ehGZNE1FB6tayD+lVyS7AZdFSzWs9u22aF4j6OpU/rUWCegzUgFFFFABRRRQAUUYPoaVUZjgDJ9KAEoqzHpl/L/q7K4k/3YmP9KnGgaww40q+P/bu/+FVyvsBn0VqL4X15zhNE1FvpayH+lWY/A3iubHl+GdYfP92xlP8A7LRyS7AYVFdXF8LvHU3KeEtYA9XtHQf+PAVY/wCFSeNVGZdFMH/Xa5hj/wDQnFNU5S2QHGUV2P8AwqvxUDg2+ng+h1W0z/6Npw+EnjNx+60mOf8A643lvJ/6DIaapzeyYHGUV1c/wu8c24JfwpqzD1jtXkH5qDWXceEvEVp/x86DqcP/AF0tJF/mtTyy7Ae+SatZn72q2LD1fxPrLfqIgKYmq6aTtXXdJjb0TxtqMB/8ix4rYfVrUr8ni3TA3oPiJcA/+PQYplnrd+9yEtPEGpXQzjbYeLtOvM/hPGM/jW6qv+rCKVpd391N5dnqusXQ/u2PjOxvx/3zOoJ+lNu9Cv5Z/wDTtJ1WZT31DwZa3wP/AG0tWDH61q6poeqTTia80nVrpGAO6/8ADOmakp/G2cMaoT+H7KFluI9HsYD3KeF9Y0xgf96FmUfhSVRpWA5298NeHPNIu9K8OKc8mXT9X0xvx4ZRVX/hDPBExH+jaCD3EXiK6X9GtSa7m2vPLURK8qbeixeI9ci/8daFq0oZL10B8jWXTpvTVdcnH/jluv8AOnzr+v8AhgOCtfht4WmYG30SC7/643+o3P6R2Y/nWzb/AAy0SFDJD4Vg+Xn99pl8wH/Arm4gX9K65tK1CWDzkF9dxqNzx3kOoFAPrd3kQ/Ssn/innnH7zRtNvVPVm0e3A/8ASh6XOrbfl+YGZFaeHbKTy1TRNPmX30a3wfqzXD1dTUTEu2HWI5R2Ftrcij/yWsAPyNan9q3n+r/tD7dGOn2PWblV/K1sVH5VE817KRsttXUn0v8AxDJ/6DGtHtX/AF/VgM1r65fObi9f/uL663/oMCimiS4kPH21v+33xC3/ALJWgy6geqa0B/108SN/SlW3upDh5NZTPrbeI5P5sKXtL/0v8hlVbO8kHzQ6kAe+3xHJ/hUi6BPOeLK7uT/dk0fVXH5z3aCro8P3E+3yoZr0n+G40TUiPznvFH51Xv8AR7WzYDVfDWm2oHV10vSoz+c925/Oj2jQinceH47Ubr3w9YxL/efSdORv/Ji9Y/mKp7dDgb5FtoSOyjw7F/8AFVc+2+HbNs2WpW9mR2N14fh/lG386kTxJvO2PX2l9Bb6roTH8jCKTqXeoFSMW91hIRNNnjEbeHZP0wKLnwvc48w+G7maM/xS+FdKvB+dvKD+Vac+kXuqWhni03Xb1R1L2Gg3q/khVjWanh+1aJ47rw9ZROOQbj4f3Ab/AL+WsmPyo57jKcnh+zij8w6HZ2zL1Z/B+p2Z/wC+reRhUcV7a2vyi8srbHprWuWf/jrI2KktrnTtLnwJ9KtMdv7S1rSMf8BIIFaa6zp78p4n0yM+n/Cw73+TQk0/aPf+v1EKnii5imAg8XGQ+lp4vsLg/gJoRV68tdU162FwbXX9U/vmez0LUEP4IysRVKLX7zVE8htY1G/B6CHVdCvR+UiKTUJ8Pzeb5svhdrlT/HeeELC7z+NtMP0qOTqMlTw/aNFsuPD1hayL0b/hAbpZD/wO1mI/EVPbWdxajbBb6mE9IIvEVoP++RuFV10SFG3RaUtmfS38I6tbY/78zkVfgs7wDbHcaqo7Kul66B+TXCj9aXKwJ4knchWXX4PcS+Ipf0IX+dXJbDUYYvO2zajaJywv7S52/wDk5fKP0rOmtLi2UveaXFcRf3r7Tdv/AKV3+PzFZq3egQTCSyutJsLkHJ/faNb8/RI52/WnyMC4JvDb3AktrnR9KvwctmTR7dR/3ys7/rV8+IbuU7Z7ptSUDANprF4B/wCStkoqi/iS4uOJNQkvvQ2+sX2PytbJB+Rqu9/dyHKSalGP+u/iOT+QFP2bAtyT3MjEpFrUf0ufEUv8kWmA35GRJrQ/7Z+JD/WqTG6frJfEH+9b+I2/9mpy2tzJ/wA/7Y/6h3iF/wCbilyAX0ju3OGudZUe9l4ik/nIKl/si6kYeTbTX+e1xoGoH9bi7UVnppNw/TS57rHaXw9qLD857tRVe50+ziGb7w/p1sB/F/ZGlQt+dxduf0p+zYF6+sNPt3B1bw1plpjq8emaTC3/AJHunP5iqses6RYP/wAS7W7axA7NqOgwY/74haqkWsadYHFnqdnZkdv7R0G3x+Cwvj86kPjK9Pyx+Ktw9IvFWlL+n2cCjlQi+fHl+SAnjBJPaHxDo5P5G3AqwLzWNdtX/eeJNRYDjyW0C+U/8BAUmqC6nrWpQFVn8Q3o/wCmNxoeog/8B2qTWRLYrE0j6po4UY5bV/AIYfjLat/Kn7PYZej0iFZJRqPh6FcqcvqXw/MxH1ktXx+NULC/0PTr7C3Xhyz5xiPU9W0I/wDfJBAqlpl9oVpcuba68K20g6C11vU9EcfRXBUVq2us6gZs2er6sw/6c/HNldj/AMjrU8oFmfW4EmJt/E1lGp6eR8RmkH5TRE0sfiWRuD4wgUeknji2H6rATWh/betFAZLvxI4xyZNR0CT9StVp/FeoQ5U6/qNqP+m+u6Hbj844iaOUDzp/iv4ev1/0yfWHPcXWkaXdj8zGhNEfjnwK+C8elg+s3g+BT+cVwteMUU/au9wPcF8deCIwCs2kgeieHrhf0+2AU2T4j+B1HNvbT/7nhqM/+jrpv5V4jRT9rID2X/hbPheyffYabfK3rDp2mWv8oJD+tNm+PLFdqWeuMo6A660Q/KGKMCvHKKXtZdAPU5vjdcSjH9k3rj/pr4h1Fv5TCqx+MUrZzoCn03axqJx/5MV5rRS9pID0Y/F6U/8AMvwH/e1TUD/7cVFJ8WJXHHhnST/11mvJf/Qrg159RR7SXcDtpviddPzH4Z8Lxn1OlrKf/IhaoR8UfEcR/wBGXSbP/r30i0T/ANpVx9FJ1JN3uB2g+LvjhT8muvGPRLeFR+QSkPxa8ZuMS6rHOPSayt5B/wCPRmuMoqvbVH9p/eFjsl+JN5Jn7d4e8M3+epl0mJGP4xBD+taWnfE3TrI5XwzJp7f39I1i6s8fQFnH6V53RSVSSA9ktfjFZGMpLrPjOFT/AATXNtqCflNGCaG+I3hu4O6fVJ5T/wBPPhPTZD+YYV43RTdRtWA9i/4T/wAIJz5yE/8ATLwhpyn8y5qVPi3oVmv+i3Otg/8ATDS9Ltv1ETGvGKKFUcdgCiiisgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k=",dandelion:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDovs3tR9m9q1fs3tR9m9q6TMyvs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDK+ze1H2b2rV+ze1H2b2oAyhaknAGSafJYtFjdt59GBrS+z+1Kbb5V4oAyfs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDK+ze1H2b2rV+ze1H2b2oAyvs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDV8gelHkD0q75VHlUgKXkD0o8gelXfKo8qgCkIMnpS+QFbDKeOoq55VHl55NAykYgeigfSneQBFkH5s4xirfkjBx1HIHrS+QAmF+8T0qWrrURSWJQ4JXIB6VOYUVVZCgck5H41MYSAM85HNI0GAp2e+RSd9GgKkke+TJXknpnpTfIHpV9oMHjGKb5VUgKXkD0oFuCcdPrV3yqQxcfWmBTNvtJBHSjyB6Vd8r2o8qgCl5A9KPIHpV3yqPKoApeQPSjyB6Vd8qjyqALvle1Hle1WOKOKQyv5XtSeVUsqoELSHGPekS4hIBVlYdetYutFOxo4JLVjPK9qTyvap0dXGR+tO4rVNNXRmV1hywB4HrStFk468YqcYFHFMCrGjGPBxgdKiWVEuHR2wh4GfX1qa8cRvEgJVC2Wx1I9KqCN5HQMzMHydxOMDNcVWq4+6t0Q30LCtE2QWwR6dMU7y1MhAIJAqOeARjBIGRgsajtilvNt8wEg8++e2KUK0r2Y79y15XtR5VWOKOK7iiv5XtR5XtVjijigCv5XtR5XtVjijigCv5XtR5XtVjijigBM1HcSPHbu6Y3KM0/NFKUeZNCMa4vZp5FSF/l/iGOv+FRvKCXXgRrx8o64/nWu1tCZA4QK47rxUI023DE4PJzivMlhal7p3M3GTGaUJPLdmbK8ADGMf5zWhmmqAihVGAKXNehSh7OCiWlZWFBIOfSjNJmjNaFCmPzTwRuHTIqMxSKFGPmzzn0p4Yg5HBFOMrFcZGfUisJ0eaVwKwM0lxIknQNhQB2Izz61Wn0+SS7DgKAGB3Y6D0q2pK37tz88Y69OD/9epi5PWlUwyk0ybJ7hmjNJmjNdJQuaM0maM0ALmjNJmjNAC5ozSZozQBH5go8wVQ8+jz/AHoA0N42/Wk8wVSeYqQM9AP15pvn0AX/ADBR5gqh59Hn0AX/ADBR5gqh59Hn0AX/ADBR5gqh59Hn0AWZZlS6tzn7xZP/AB3P/stTeYKyL2cqkDg/dnTP0Jx/WrHn1bWiYi/5go8wVQ8+jz6gZf8AMFHmCqHn0efQBf8AMFHmCqHn0efQBf8AMFHmCqHn0efQBn+f70CXcQPXis7z/epbSXdeRc/xZ/Ln+lAF6W4DTOQeMmm+f71m+fnnPWl8/wB6ANHz/ejz/es7z/ejz/egDR8/3o8/3rO8/wB6PP8AegDR8/3o8/3rO8/3o8/3oAsahKTYS4PK4b8mB/pVkz/Mee9ZNzKGtJgxwCjZ/KpBPkA56jNW/gXq/wBCeppef70ef71nef70ef71BRo+f70ef71nef70ef70AaPn+9Hn+9Z3n+9Hn+9AGj5/vR5/vWd5/vR5/vQBR3mprRyLjPorH/x00UUCIN5xS7zRRQMN5o3miigA3mjeaKKADeaN5oooAhu3P2G4/wCuTf8AoJp0EjG2iJ7op/QUUVp9j5k9STeaN5oorMoN5o3miigA3mjeaKKADeaN5oooA//Z",jellyfish:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDovs3tR9m9q1fs3tR9m9q6TMyvs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDK+ze1H2b2rV+ze1H2b2oAyvs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDK+ze1H2b2rV+ze1H2b2oAyvs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDK+ze1H2b2rV+ze1H2b2oA1fIHpR5A9Ku+VR5VICl5A9KPIHpV3yqPKoApeQPSjyB6Vd8qjyqAKXkD0o8gelXfKo8qgCl5A9KPIHpV3yqPKoApeQPSjyB6Vd8qjyqAKXkD0o8gelXfKo8qgCl5A9KPIHpV3yqPKoApeQPSjyB6Vd8qjyqAKXkD0o8gelXfKo8qgC75XtR5XtVjijikMr+V7UeV7VY4o4oAr+V7VyHxB8YN4PsLI2yRy313OEhjdSwIHJyB26Cu34rnPENrp11frdXNusktlAyRsR0eU4Ue+AC1a0knL3tiZWs7nn+n/FnxVJq4g1i0sp9PMg+aKApKqkgHGCRxz2r1rys9ORWHe6PZO6JFCEiSaCOJEAHLHL54/un9K6NikUJY52oufwArSv7PR01YaSS0OT8Z+LF8J21sEs3u7q6LCNckIirjczkA4HIHvmsfRfiG9zf21tqdnbwpdOI45beQnaxOBlT2zxkH8KreJL2TV7iW3jQ4kAM8jD+Ecqi+ij9Tk1n/YAmgyWgCNGzCSN84eBwcmojKKjZxPDrZhar7ktF5bnq/le1Hle1RaNNPcaLaSXSlbhol8zPUnHX8ev41d4rE9uMlJKS6lfyvajyvarHFHFBRX8r2o8r2qxxRxQBX8r2o8r2qxxRxQBX8r2o8r2qxxRxQAmaM0maM0wFzRmkzRmgBc1Qn06K6l/fJuUuX/HGBV7NIHDDg002iXZ6Mh8gNcI5HCO0n44wP0qd3CIzHoBmjcG5AqpqU3k2RJ7sB/X+lO/M0hSlaLZw14l1c/F+0DbhYi2/wBWvCPgOG3DofnK/lXbNp+nyTKhsrdtnAzGDjv/AIfnVCGKM6hZM4/eR+YS3sGbP/oJq1pMzXBaR/vEFj7bnb+iit6nK0nHojijFSaTW/8AT/P8DTUBRgf40uaTNGa5TvFzSbgW2g5b0HJrD8YeIH8N+HJr6GHz7lmEUKEErvOcFsdgAT74x3rwG48c+P8AU7aT7LrepWtt5hAaFNhkfqfmVRxz0B4rop4edVXiiW3eyPpvkUZrxH4X6n8QbTXUg1aDUb/Sro5eS7ViY2PQq7c/UdOO1e25rKUOV2CM1LYXNGaTNGaksXNGaTNGaAI/MFHmCqHn0efQBf8AMFHmCqHn0efQBdeQEAZ6nB+neq4mKwqeclCT9c8D/PpURmz1pPMHpQQ43LsTBVK5ztOP0FUtaJe0gC8j7TEG/wB0ttP86UTYqpqv+k6bJHuxgqwPoQwOfwxmmtx2urEUkhGpMAeTHdKPqC5/9mq3pMireXkfZVidf91gWH6k/lWe8haWG62/Mk7ll+qgsP0Ip1lI0OohN5KiEQ+x2sSjfirVbvYlQs7nReYKPMFUPPo8+szQvl1IIPINZ+9oi8XUKcr6ex/ofrS+fSFg7c9cYoMqkebUYywCG4it8pMmJUU9+4I/UGtJJlkjVx0YAis14VknhfJWSP7pBxkdwfapFk8tAo6Y4o06GdGDg2un9f8ABL/mCjzBVDz6PPoOkv8AmCjzBVDz6PPoAz/P96PP96zvP96PP96ANHz/AHo8/wB6zvP96PP96ANHz/ejz/es7z/ejz/egDR8/wB6QyhlKnkEYIrP8/3o8/3oAsIxTeCckOr59xxn8hQ/7ueOVeinafp/9Y/oared70vn+9XzAaPne9Hn+9Z3n+9Hn+9QBo+f70C4wQQeRWd5/vR5/vQBqPc52kHBHp2pHuNyisl7nYc544zSNc7ZsZ4K5qrGV2jV8/3o8/3rO8/3o8/3qTU0fP8Aejz/AHrO8/3o8/3oAo7zRvNFFABvNG80UUAG80bzRRQAbzRvNFFABvNG80UUAG80bzRRQAbzRvNFFACFiRijcePaiigQbjS7zRRQMN5o3miigD//2Q==",machine:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5u/Gitg6TFv2+enXHUf3iP71NGlxnH79O3ce/+17Vl7WIGR260ta39lx4/wBenTPUf3c/3qDpcYBPnJ37j0H+170e1iB7B8EzKPA915Zkx9vf7okx0t/7pAr0WN7jzU5n+8vabn963+1WL8AvDtnP8P7wyhJiNSlGcA8bYff/AGf1/P1BfDGnhg3kJ8pBHy+jlv61+e5jiYLEzXmbxi7HDRPcbYvmnHEfabj5X/2qjJufKz+/+50xN/zx/wB6u7XwtpyhB5CYXb/B6Bh6+9J/wimn7CPJjyV252f7G31rh+tQuVyM4WZrjbJzP0fnE3Pypx96kla481+Z/vN2m4/er/tV3UnhPTn3DyUAIbHydMhR6+1UdZ0rRNHspLu7CIm4kKFG5iXBwoJ5P+faqjiYyaSTuLkZyKNcmZMGc5Zegm5/et/tVFGbkLHzOOE7Tf3X/wBquf1vwr4n16CSRru1sbKZwY7VUj3oN7LjJw3qeveuUt9Q1nwzd2sUt8GtoXjY281tCokXDEruPzc5Iz7+wr16eGVSL5Jpvt/X9eZFz0dmuPJxun+56Tf88f8Aepk7XAEp3T9H7Tc/Kn+1XW+HNK0XxP4dttTtI1EcyYxsHysI9pHXsa1JPBWmuHGxBuDfweoUevtXmyxUIS5ZXui+Vs88ke481+Z/vN2m/wCeq/7VcB8WzKfCEAdpCPtqfeEnHE/94kV9AP4I01nZtq/MScbOmXDevtXmfx18JWVj4EtJIWVC2oxqTtAz8sx9f9r9K7cvxdN4iEfMUoNI+Z6Tt1rXGlxnH79O3ce/+17Uf2XHj/Xp0z1H93P96vvPaxMDJo/GtY6XGAT5yd+49B/te9OGkxb8eenXHUf3gP71HtYgZXnyZ++aPOk/vmmfjRWlgH+dJ/eNHnSf3zTO1FFgPf8A4Harc2vgW7WObaDfueqD+G3/AL3NekJr955qD7QOWXjdD/z1avK/gq4XwTcgyBT9vf8AjC9rf1U16Gso85P3w+8n/LZef3rf7FfAZhTi8TN26mq2L0fiC8Kxn7QOiZ+aH+69NOv3vlf8fAzs/vRf88aoQzDEX74ZxHz5y8fK/wDsUwyjyf8AWjGzp5y/88P9yuP2Ub/Ch3NGbxBegSYuez4+aL+6lcd4u1i81XxLa2M1ygiss3p3+UQ2ZTHt9O+e/Tp3rfmmBEpMoyQ+T5q8/Kn+zXA+ODeR+NrCSGTFtcqbZz5q8gSu+Og9ByQRXZg6MXUWiWjE2P1DXjAFWS5wSy8jyyB+8bv2rz7XZJb23W7WVvlCgglckYbJ/wDHfTvXUsga8ig1G5jkk2AMVYbH/ennG01m6qkW1UjZXVkVcb1xyreq172HUactESzoPhBrGo2mn6nCbuVYfkMamVSo/dyk7QxwO2ce2a9Hn8QXuJf9KPR+N0XHypXk3giR4tZgtre63RRRStMA+xQXhJUHIw2MHGM4wema9InmH7398Oj/APLVf7qf7NeXj6UXiHKy1Gti7Lr96Jm/0k/fb+KLn96tef8Axg1a5u/B1ukk5cC+RsZQ9p/7vNdfLMPOb98B8zf8tl/56r/sVwXxXkD+E7cBw3+mJx5gbHE/oopYCnFV4O3Ub2PI/Ok/vmjzpP7xplHavtrGQ/zpP75o8+TOd5plH40WQBRRRQAnalpO1LQB7r8FGYeCLoBmUfb34DOP4bf+6K9DSR/NT94/3l/5aS8fvW/2a87+CqsfA91hWb/T35Cue1v/AHSBXokcb+an7t/vL/yzl5/et/tV8FmFvrE/U1WwyGR9sXzueI+PMl5+V/8AZpjO/lf6x/udd8v/ADx6dKfCj7YvkccR8+XLx8r/AO1TCj+T/qn+702S/wDPH/erj0uMSV32SfO/R+N8vHyp/s1z/ja0v7rTxdWAae9sZmmhjLyfvGLhMdB2Y9x9e1dBKj7ZPkfo/OyXn5U96hv54rKOa5u2MEETMzu6yBUHnL1O6tqUuScZIDymzltr7TI7yJJ/OciOGRXYMAZGPzHHPIzx7d6rXsv2S3ghG4PlOC75JwxHb3rl9I1S80/UYkSaVYXmRplhXLNz0Gcc4HqK7e08NXBkhmcSTNIE2fu5MICG9MenvX01WCoyvJ6GZqeACqw37BdjsqFnVpAW/dP1IHPXA+tdlcu4E3zv0f8Ajl/up/s1x2hwXWhTzeZEJILhRnaku8EQnGOQOrc11swd4XYxSrlXOGjlyPlTr81eNirOrzdGWgmkczPmR87m/wCWkv8Az1X/AGa4H4ruzeErfLM3+mJ1Zznif+8AK7qVX8x/3b/eb/lnLz+9X/arhPisGHhSDKsP9MTqrjtP/eNaYG3toeonseQ0nalpO1fZGYtFFFAB+FFJxS0AHaik7UtMD3L4LxhvBNyTGG/05x/qw3a345YV6GkQ81P3I++uf3K8fvW/2687+DGz/hCbnOz/AI/n+95fpb/3ua9CTy/Nj/1f3lx/qP8Anq1fB5hf6xP1NVsJDCNsX7lc4jwPJXn5X/26jMa+T/qgBs6+Suf9T/vU6Hy9kf8Aq8Yjz/qf7r1m6tqkGmWyFgjSSIdoHk84hGe3vXLGMpSshkovbe4ur23RF326uZFMa5UYUZxv6cHmvPPiB44sLyxutK0xyxMrpLIIU2uvmA/KwY5GQORSeIdeuNPS+1DTEitpbkFXDrFNuBKZ6jj7x7VzPhnwfJr832y5byLAZALFVaQ7l4ALA4wwO7kHGPp7mFwtOn+/qvRbev8AWxDfQl8B+HJNR1Jb68svOtkK+USCAz+YMNwQCuNw7j29PTFsmWG3MdunWMNmNemHyR83/wCunadaWlsIhBFHFGuFVQYRx5zHpViJ4iIiRGOE6+T/AHXrnxOJlWm5dBpGLeWrLbKksJkJBYOIFGB5WccNWpZzLcWUgMUYePzEIEakkBUAP3u9Q3XlNan/AFfCekP/ADxrJtLkQaw1uFj2XAlBJ8njCA/0qLOcfQDopogJZP3I+82f3S/89V/264X4pKB4Wg+QA/a058sLnif/AGjXaXLxiZh+7++2P9Tx+9WuF+JpX/hGIgNuftaZA8v0m/u8/wCfpWuCT9tH1B7HldHaik7V9gZi0fhRScUgF/GiiigA7UUnalpge5fBeQL4KuQZAp+3P/y0C9rf1U16Ekw8xP3w+8uf3y8/vW/2K89+C7lfBFzhmA+3PwGcZ4t/7oxXoSSP5qfvH+8v/LSXj963tXwePX+0T06mq2I4p/li/fDonPmrx8r/AOzXJeIZN2pKGmJjWL5VMy4BMA6fLXXRyPtj+d+icb5eflf2rj/H2uRaVpcHmWj3dzKjiF97/u/3Khjzj+8Dx6VGFTdXlS3BnM6rCspkV3EkWXYgSrzwh/u+wrp4NShW2haBY7e3KEpGsqAIPNXCABOMCuZ0i+m1Tw2dQ3MShkjdQ8mVYLGCT1GCTxzn1qK4nmtrqRhLN5UjsxUSSbQfMHzEY74A9eletKnz2g+hJ20F4rNG3nD7y4/fL/z1b/YpkV0rog88ZPl8eaP7r/7FYuk6k85QeY4yy4+eX/nqfatTS3nPnuzPtJhKfPLgfu39q450+S90UFzcj7J/rRnZjiVf+eP+7XPxymXxZC4uMrGJsqJBjJix/dxW5dSsbX5XkX5Ozy/88fpVXRg4/tG681g0jSQkB5Odu32960g1GLdun5iNa4mHnP8Avl+82f3q8/vV/wBmuH+JkgbwzCBIG/0tcDeG/wCe3oortbiVzI/zvnc2Pnl4/er7Vw3xKdm8NxBnZv8ASkOCzn/nt/eFaYJfvY6dQZ5fR2opO1fWmYtH40UUgCij8KKAE7UtHaimB7j8GFY+CbnCsw+3PyFc44g9CBXoSI/mx/u3+8v8EvP71vevO/g0gbwXckoGP25wPkDdoPVhXoKxjzEzEPvLn9yvH71v9uvhMf8A7xPXqarYI0fbH8jgYTny5ePlf/arz34p6Zc3ul2Lw2l5K6Ej93C5RcpH94k5GccY9Dmu9jQYi/dL0T/liv8Adf8A2qieFGgw0CkbOhhX/nj/AL1ZYer7Gqqi6Azh/CPhr+yvDri7sZDc3YcyN5cvyqEjZVbkYwSe3U9TUN5ZEyzQOm5kdlcKsuM+avv/ADrrbxsmZY7cYHmDmFf7qf7VZ1xZIdQa4kt/myy7fJXAPmjn73PXFdsa8pS55PcVjjoLK90q4i+0RsAzqBuSTP8ArD16c8HpXWaKsxsBI6l0k8sABJTxtkB70y9sUugI2hB3FRkRD/no3+3VTR7mKCxhs50GBtAlMShGJEhADbsZ5x+Fa1J+1g31Ak1BnW0kQBtphOMpJ/zw+tW9PtxDosQihZVaEucJLjJSPJ+9WPfBZHiRIfNYMuQkQOB5YyeG6YreuY1VJQIVCgOB+6Xj5U/26znokrgNnV98nyOQGbnZL/z1X3riPiNn/hHIsqw/0pedrj/nt6kiuwuUHmP+6H3248lf+eq/7VcV8QRjw9HiML/pK/wAf89vQmujBr97HXqJnm9J2paO1fVEBRRR+FIAxRjpRRQAY4ox1oooA97+B2nx3Xge5Z2IP9oSLwiH+G39QfWvRRo8PnJ87cOv/LOP/nq3+zRRXwuP/wB4n6mq2GR6PAFi+dukf/LOP+6/+zUUmkQi2bDt/q/+ecf/ADx/3aKK5OozNm0iFY52DnP73/lnH/dT/ZpJtGg89xvb7zn/AFcf/PVf9miiuhdBGTLpscdncMsh3JtwTHHn/WN/s1gajp8cMVhsbA3xSY8uPGRv/wBnp7UUV30txMXRdOjuNRtZ3dt9wkwfCIB8kPy4G3A610tzpMP73526Sf8ALOP+6n+z70UUq3xr0/Vgind6TCJpPnP32/5Zx/8APVR/drhfiRZJb+HImVif9KVcbVH/AD29APSiiujB/wASPqJnl+OlGOKKK+nIDHWjFFFAH//Z"},uT=["w2","w1","w3","w5"].map(s=>({src:`/media/${s}.mp4`,poster:`/media/${s}.jpg`})),fT=["t2","t3","t1"].map(s=>({src:`/media/${s}.mp4`,poster:`/media/${s}.jpg`}));function hT({page:s,onClose:e,onGo:t}){return ze.jsx("div",{className:`page ${s==="performances"?"wide":""}`,onClick:e,children:ze.jsxs("article",{onClick:r=>r.stopPropagation(),children:[ze.jsxs("nav",{className:"tabs",children:[["about","instrument","performances"].map(r=>ze.jsx("button",{className:r===s?"on":"",onClick:()=>t(r),children:r},r)),ze.jsxs("button",{className:"close",onClick:e,"aria-label":"close",children:[ze.jsx("span",{className:"cl",children:"close "}),"×"]})]}),s==="about"&&ze.jsxs("section",{children:[ze.jsx("h2",{children:"The machine reads, the hand leads."}),ze.jsxs("p",{children:[ze.jsx("b",{children:"<N4TH>"})," is the visual instrument of Nathalia Cury, a Brazilian art director based in Stuttgart for six years. With a background in typography, editorial design and brand identity, she brings a designer's eye to the club."]}),ze.jsx("p",{children:"She built <N4TH> together with AI, using it as a design partner from the first sketches in Figma Make to hand tracking with MediaPipe and real-time graphics in Three.js. The result is a tool that sits between graphic design, code and performance."}),ze.jsx("p",{children:"On stage, a camera reads her hands and the music reads the room. Every gesture becomes a move in the visuals: a fist gathers, an open palm releases, a clap breaks everything open. She moves between 2D and 3D worlds, turns colour palettes live, or lets the system run on its own and evolve with the night."}),ze.jsx("h3",{children:"Contact"}),ze.jsxs("p",{children:[ze.jsx("a",{href:"mailto:cury.nathalia@gmail.com",children:"cury.nathalia@gmail.com"}),ze.jsx("br",{}),ze.jsx("a",{href:"https://instagram.com/nathcury",target:"_blank",rel:"noreferrer",children:"@nathcury"})]})]}),s==="instrument"&&ze.jsxs("section",{children:[ze.jsx("h2",{children:"Built with AI, played by hand."}),ze.jsx("p",{children:"The tool runs in a browser. It listens to the music — its kicks, its builds, its silences — and it watches the hands. Every visual answers both: the sound gives the pulse, the hand gives the decision."}),ze.jsxs("ul",{children:[ze.jsxs("li",{children:[ze.jsx("b",{children:"one finger"})," slow · ",ze.jsx("b",{children:"five"})," fast"]}),ze.jsxs("li",{children:[ze.jsx("b",{children:"a fist"})," gathers · ",ze.jsx("b",{children:"an open palm"})," releases"]}),ze.jsxs("li",{children:[ze.jsx("b",{children:"a clap"})," breaks everything open"]}),ze.jsx("li",{children:"the music: pulse, kicks, build-ups, the drop"})]}),ze.jsx("p",{children:"Every part of it — the visuals, the way they listen, the way they read a gesture — was written in conversation with AI. That is the question the performance stays with: who is listening to whom?"}),ze.jsxs("figure",{children:[ze.jsx("img",{src:"/media/instrument.jpg",alt:"The instrument: the visuals of the set, layers, effects, the sound and the hands"}),ze.jsx("figcaption",{children:"The instrument as it is played: the set of visuals, the layers, the effects, what it hears."})]})]}),s==="performances"&&ze.jsxs("section",{children:[ze.jsx("h2",{children:"Performances"}),ze.jsx("p",{className:"sub",children:"Stuttgart, November 2026 — Nische at Kultur Bunker. Live with a DJ set."}),ze.jsx("div",{className:"shows wide",children:uT.map(r=>ze.jsx("video",{src:r.src,poster:r.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,disablePictureInPicture:!0,disableRemotePlayback:!0},r.src))}),ze.jsx("div",{className:"shows tall",children:fT.map(r=>ze.jsx("video",{src:r.src,poster:r.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,disablePictureInPicture:!0,disableRemotePlayback:!0},r.src))})]})]})})}const dg=[{id:"dust",name:"Dust",note:"a fist gathers it into a circle"},{id:"line",name:"Line",note:"an open hand unfolds it"},{id:"dandelion",name:"Dandelion",note:"the hand moves the wind"},{id:"jellyfish",name:"Jellyfish",note:"a fist closes the bells"},{id:"machine",name:"Machine",note:"what the machine sees of you"}],fv={dust:{colors:ao(0,0,"grayscale"),params:{"look.glow":1.6,"field.size":1.3}},line:{colors:ao(268,70,"black"),params:{"line.weight":1.4}},dandelion:{colors:ao(200,60,"black"),params:{"field.count":3}},jellyfish:{colors:ao(200,70,"black"),params:{"swarm.backdrop":0,"swarm.height":.3}},machine:{colors:ao(225,80,"black"),params:{}}},hv={dust:{path:"field.count",min:200,max:5e3,start:.6},line:{path:"line.count",min:1,max:40,start:.33},dandelion:{path:"field.count",min:1,max:12,start:.2},jellyfish:{path:"swarm.count",min:1,max:8,start:.43},machine:{path:"picture.detail",min:.25,max:1,start:.47}},pg=[{name:"Johannex · m4n4th",src:"/tracks/m4n4th.mp3"}];function dT(s,e,t){return s==="dust"?new jE(e,t):s==="line"?new KE(e,t):s==="jellyfish"?new aw(e,t):s==="machine"?new vw(e,t):new nw(e,t)}const pT=(s,e)=>{const t=hv[s],r=t.min+e*(t.max-t.min);return{...fv[s].params,[t.path]:t.max>2?Math.round(r):r}};function mT(s){var r,o,l;const e=document.querySelector(s);if(!e||s===".stage")return{top:"42%",left:"50%",transform:"translate(-50%, -50%)"};const t=e.getBoundingClientRect();if(window.innerWidth<=720&&(s===".track"||s===".cards")){const c=(r=document.querySelector(".desk"))==null?void 0:r.getBoundingClientRect(),f=e.getBoundingClientRect();if(c)return{top:c.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}if(s===".fx"&&window.innerWidth<=720){const c=(o=document.querySelector(".fx.open"))==null?void 0:o.getBoundingClientRect();if(c)return{top:c.top-16,left:window.innerWidth/2,transform:"translate(-50%, -100%)"};const f=(l=document.querySelector(".fxbtn"))==null?void 0:l.getBoundingClientRect();if(f)return{top:f.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}return s===".fx"?{top:t.top+t.height/2,left:t.left-14,transform:"translate(-100%, -50%)"}:{top:t.top-16,left:t.left+t.width/2,transform:"translate(-50%, -100%)"}}const gT=Math.max(1,Math.min(5,Number(new URLSearchParams(location.search).get("guide"))||2)),vT={left:null,right:null},xT=["5 fingers","2 fingers","fist","pinch","clap"],_T={bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0};function yT(s,e,t){return{position:{x:s,y:e},gesture:t>.5?"fist":"open",openness:1-t,fingerCount:t>.5?0:3,velocity:0}}const qf=[{key:"play",at:".track",text:"Play a track — the visual moves with the music."},{key:"hand",at:".stage",text:"Raise your hand to the camera — or move the mouse."},{key:"fist",at:".stage",text:"Close your hand (or hold the mouse button) — then open it."},{key:"clap",at:".stage",text:"Clap (or click quickly)."},{key:"fx",at:".fx",text:"Shape it: trail, colour, amount."},{key:"switch",at:".cards",text:"Try another visual."}];function MT(){const s=Ft.useRef(null),[e,t]=Ft.useState("dust"),r=Ft.useRef(e);r.current=e;const[o,l]=Ft.useState(0),[c,f]=Ft.useState(0),[h,d]=Ft.useState(()=>Object.fromEntries(dg.map(H=>[H.id,hv[H.id].start]))),[g,x]=Ft.useState(!1),m=Ft.useRef({trail:o,hue:c,amounts:h});m.current={trail:o,hue:c,amounts:h};const[y,S]=Ft.useState(null),[w,_]=Ft.useState("off"),M=Ft.useRef(vT),C=Ft.useRef(null);C.current=y;const L=Ft.useRef({x:.5,y:.5,on:!1,down:0,closed:0,clapAt:0,moved:0}),P=Ft.useCallback(async()=>{_("asking");try{const H=await navigator.mediaDevices.getUserMedia({video:{width:640,height:360,facingMode:"user"}}),re=document.createElement("video");re.muted=!0,re.playsInline=!0,re.srcObject=H,await re.play(),S(re),_("on")}catch{_("refused")}},[]);Ft.useEffect(()=>{P()},[P]);const V=Ft.useRef(null),[I,z]=Ft.useState(null),E=Ft.useRef(null),F=Ft.useCallback(H=>{var Ae;let re=V.current;if(!re){re=new Audio,re.crossOrigin="anonymous",re.loop=!0,V.current=re;const Ne=new AudioContext,nt=Ne.createMediaElementSource(re),We=Ne.createAnalyser();We.fftSize=2048,We.smoothingTimeConstant=.55,nt.connect(We),We.connect(Ne.destination),E.current={ctx:Ne,analyser:We,data:new Uint8Array(We.frequencyBinCount),state:tT()}}if((Ae=E.current)==null||Ae.ctx.resume(),I===H){re.pause(),z(null);return}re.src=pg[H].src,re.play(),z(H)},[I]),[Q,B]=Ft.useState(new Set),[K,he]=Ft.useState(()=>{try{return!localStorage.getItem("n4th-guide-seen")}catch{return!0}}),le=H=>{he(H);try{localStorage.setItem("n4th-guide-seen","1")}catch{}},D=Ft.useCallback(H=>B(re=>re.has(H)?re:new Set(re).add(H)),[]);Ft.useEffect(()=>{I!==null&&D("play")},[I,D]);const te=qf.find(H=>!Q.has(H.key));Ft.useEffect(()=>{if(!te)try{localStorage.setItem("n4th-guide-seen","1")}catch{}},[te]),Ft.useEffect(()=>{const H=s.current,re=H.getContext("2d"),Ae=document.createElement("canvas"),Ne=Ae.getContext("2d");let nt=null,We=1,ct=performance.now(),ke=0;const je=aT();let Ve=0,ut=0,vt="";const U=()=>{const He=Math.min(window.devicePixelRatio||1,1920/Math.max(1,window.innerWidth)),lt=Math.round(window.innerWidth*He),Te=Math.round(window.innerHeight*He);(H.width!==lt||H.height!==Te)&&(H.width=lt,H.height=Te),(Ae.width!==lt||Ae.height!==Te)&&(Ae.width=lt,Ae.height=Te)},ot=He=>{var Be,Xe,De,Ie,ft,ht,Mt,j;ke=requestAnimationFrame(ot);const lt=Math.min(.1,(He-ct)/1e3);ct=He,U();const Te=r.current;!nt||nt.v!==Te?(We-=lt*3,(We<=0||!nt)&&((Xe=nt==null?void 0:(Be=nt.r).destroy)==null||Xe.call(Be),nt={v:Te,r:dT(Te,Ae,Ne),amount:-1},C.current&&((Ie=(De=nt.r).setVideoElement)==null||Ie.call(De,C.current)),We=0)):(We=Math.min(1,We+lt*1.2),C.current&&nt.video!==C.current&&((ht=(ft=nt.r).setVideoElement)==null||ht.call(ft,C.current),nt.video=C.current));const _t=L.current;_t.closed+=((_t.down&&He-_t.down>220?1:0)-_t.closed)*Math.min(1,lt*10);let b=M.current;!b.left&&!b.right&&_t.on&&He-_t.moved<4e3&&(b={left:yT(_t.x,_t.y,_t.closed),right:null,clapping:He-_t.clapAt<120,clapIntensity:1});let A=_T;const ne=E.current;ne&&V.current&&!V.current.paused&&(ne.analyser.getByteFrequencyData(ne.data),A={...iT(ne.data,ne.ctx.sampleRate,ne.state,.8,Date.now()),live:!0}),A.beat&&(Ve=Math.max(Ve,.6+.4*(A.beatIntensity||0))),Ve*=Math.exp(-lt*7);const me=new Set;for(const we of[b.left,b.right])we&&(we.gesture==="fist"?me.add("fist"):we.gesture==="pinch"?me.add("pinch"):we.fingerCount===2?me.add("2 fingers"):((we.fingerCount??0)>=5||(we.openness??0)>.85)&&me.add("5 fingers"));b.clapping&&(ut=He),He-ut<500&&me.add("clap");const Me=[...me].sort().join("|");Me!==vt&&(vt=Me,_e(me)),FE(lt,[lT(b,je,lt)]),OE(0);const Ce=m.current,be=Ce.amounts[nt.v];Math.abs(be-nt.amount)>.001&&((j=(Mt=nt.r).setParams)==null||j.call(Mt,pT(nt.v,be)),nt.amount=be),nt.r.render(b,fv[nt.v].colors,A),re.globalCompositeOperation="source-over";const pe=Ce.trail*Ce.trail*1.5,ge=pe<.005?0:Math.exp(-lt*Math.LN2/pe);if(re.globalAlpha=1-ge,re.fillStyle="#000",re.fillRect(0,0,H.width,H.height),re.globalAlpha=1,re.globalCompositeOperation=ge>0?"lighten":"source-over",re.filter=Ce.hue?nt.v==="dust"?`sepia(1) saturate(5) hue-rotate(${Ce.hue-40}deg)`:`hue-rotate(${Ce.hue}deg)`:"none",Ve>.01){const we=1+.035*Ve;re.filter=(re.filter==="none"?"":re.filter+" ")+`brightness(${1+.45*Ve})`,re.drawImage(Ae,H.width*(1-we)/2,H.height*(1-we)/2,H.width*we,H.height*we)}else re.drawImage(Ae,0,0);re.filter="none",re.globalCompositeOperation="source-over",re.globalAlpha=1,We<1&&(re.globalCompositeOperation="source-over",re.globalAlpha=1-We,re.fillStyle="#000",re.fillRect(0,0,H.width,H.height),re.globalAlpha=1)};return ke=requestAnimationFrame(ot),()=>{var He,lt;cancelAnimationFrame(ke),(lt=nt==null?void 0:(He=nt.r).destroy)==null||lt.call(He)}},[]);const G=H=>{const re=L.current;re.x=H.clientX/window.innerWidth,re.y=H.clientY/window.innerHeight,re.on=!0,re.moved=performance.now(),w!=="on"&&D("hand")},Y=H=>{G(H),L.current.down=performance.now()},O=()=>{const H=L.current,re=performance.now()-H.down;H.down&&re<220&&(H.clapAt=performance.now(),D("clap")),H.down&&re>400&&D("fist"),H.down=0},[ie,N]=Ft.useState(!1),[W,_e]=Ft.useState(new Set),ye=Ft.useCallback(H=>{var re,Ae;M.current=H,N(!!(H.left||H.right)),(H.left||H.right)&&D("hand"),(((re=H.left)==null?void 0:re.gesture)==="fist"||((Ae=H.right)==null?void 0:Ae.gesture)==="fist")&&D("fist"),H.clapping&&D("clap")},[D]),[ve,X]=Ft.useState(()=>{const H=location.pathname.replace(/^\/+|\/+$/g,"");return["about","instrument","performances"].includes(H)?H:null}),ce=H=>{X(H);try{history.replaceState(null,"","/"+(H??""))}catch{}};return ze.jsxs(ze.Fragment,{children:[ze.jsx("canvas",{ref:s,className:"stage",onPointerMove:G,onPointerDown:Y,onPointerUp:O,onPointerLeave:()=>{L.current.on=!1,L.current.down=0}}),y&&ze.jsx(zw,{videoElement:y,onHandData:ye}),ze.jsxs("header",{className:"top",children:[ze.jsx("div",{className:"brand",children:"<N4TH>"}),ze.jsx("nav",{children:["about","instrument","performances"].map(H=>ze.jsx("button",{onClick:()=>ce(H),children:H},H))})]}),K&&te&&!ve&&!(g&&window.innerWidth<=720)&&ze.jsxs("div",{className:`guide g${gT}`,style:mT(te.at),"data-at":te.at,children:[ze.jsxs("span",{className:"count",children:[qf.indexOf(te)+1,"/",qf.length]}),ze.jsx("span",{children:te.text}),te.key==="hand"&&w!=="on"&&ze.jsx("button",{className:"cam",onClick:P,disabled:w==="asking",children:w==="refused"?"camera not allowed — the mouse plays":w==="asking"?"…":"allow camera"}),ze.jsx("button",{className:"x",onClick:()=>le(!1),title:"Hide the guide",children:"×"})]}),ze.jsxs("aside",{className:`fx ${g?"open":""}`,onPointerDown:()=>D("fx"),children:[ze.jsx("div",{className:"fxt",children:"EFFECTS"}),ze.jsxs("label",{children:["Trail",ze.jsx("input",{type:"range",min:0,max:1,step:.01,value:o,onChange:H=>l(+H.target.value)})]}),ze.jsxs("label",{children:["Colour",ze.jsx("input",{type:"range",min:0,max:360,step:1,value:c,onChange:H=>f(+H.target.value)})]}),ze.jsxs("label",{children:["Amount",ze.jsx("input",{type:"range",min:0,max:1,step:.01,value:h[e],onChange:H=>d(re=>({...re,[e]:+H.target.value}))})]})]}),ze.jsxs("footer",{className:"desk",children:[ze.jsx("div",{className:"cards",children:dg.map((H,re)=>ze.jsxs("button",{className:`card ${e===H.id?"on":""}`,onClick:()=>{t(H.id),H.id!=="dust"&&D("switch")},title:H.note,children:[ze.jsx("img",{src:cT[H.id],alt:""}),ze.jsx("span",{className:"num",children:re+1}),ze.jsx("span",{className:"name",children:H.name})]},H.id))}),ze.jsx("div",{className:"sep"}),ze.jsx("div",{className:"tracks",children:pg.map((H,re)=>ze.jsxs("button",{className:`track ${I===re?"on":""}`,onClick:()=>F(re),children:[ze.jsx("span",{children:I===re?"❚❚":"▶"})," ",H.name]},H.src))}),ze.jsx("div",{className:"sep"}),ze.jsx("button",{className:`fxbtn ${g?"on":""}`,onClick:()=>{x(H=>!H),D("fx")},children:"FX"}),ze.jsx("button",{className:`camera ${w==="on"?"on":""}`,onClick:w==="on"?void 0:P,title:"Play with your hand through the camera",children:w==="on"?ze.jsxs(ze.Fragment,{children:[ze.jsx("span",{className:`dot ${ie?"seen":""}`,children:"●"})," hand"]}):w==="refused"?"mouse":"camera"}),ze.jsx("div",{className:"words",children:xT.map(H=>ze.jsx("span",{className:W.has(H)?"lit":"",children:H},H))})]}),ve&&ze.jsx(hT,{page:ve,onClose:()=>ce(null),onGo:ce})]})}t_.createRoot(document.getElementById("root")).render(ze.jsx(Ft.StrictMode,{children:ze.jsx(MT,{})}));
