var i_=Object.defineProperty;var r_=(s,e,t)=>e in s?i_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var G=(s,e,t)=>r_(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Zu={exports:{}},ta={},$u={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function s_(){if(Im)return bt;Im=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function m(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function y(D,V,Se){this.props=D,this.context=V,this.refs=T,this.updater=Se||_}y.prototype.isReactComponent={},y.prototype.setState=function(D,V){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,V,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function M(){}M.prototype=y.prototype;function E(D,V,Se){this.props=D,this.context=V,this.refs=T,this.updater=Se||_}var P=E.prototype=new M;P.constructor=E,S(P,y.prototype),P.isPureReactComponent=!0;var b=Array.isArray,z=Object.prototype.hasOwnProperty,L={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function A(D,V,Se){var Ae,Me={},K=null,oe=null;if(V!=null)for(Ae in V.ref!==void 0&&(oe=V.ref),V.key!==void 0&&(K=""+V.key),V)z.call(V,Ae)&&!k.hasOwnProperty(Ae)&&(Me[Ae]=V[Ae]);var se=arguments.length-2;if(se===1)Me.children=Se;else if(1<se){for(var Pe=Array(se),Ue=0;Ue<se;Ue++)Pe[Ue]=arguments[Ue+2];Me.children=Pe}if(D&&D.defaultProps)for(Ae in se=D.defaultProps,se)Me[Ae]===void 0&&(Me[Ae]=se[Ae]);return{$$typeof:s,type:D,key:K,ref:oe,props:Me,_owner:L.current}}function U(D,V){return{$$typeof:s,type:D.type,key:V,ref:D.ref,props:D.props,_owner:D._owner}}function W(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function B(D){var V={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Se){return V[Se]})}var q=/\/+/g;function ce(D,V){return typeof D=="object"&&D!==null&&D.key!=null?B(""+D.key):V.toString(36)}function ue(D,V,Se,Ae,Me){var K=typeof D;(K==="undefined"||K==="boolean")&&(D=null);var oe=!1;if(D===null)oe=!0;else switch(K){case"string":case"number":oe=!0;break;case"object":switch(D.$$typeof){case s:case e:oe=!0}}if(oe)return oe=D,Me=Me(oe),D=Ae===""?"."+ce(oe,0):Ae,b(Me)?(Se="",D!=null&&(Se=D.replace(q,"$&/")+"/"),ue(Me,V,Se,"",function(Ue){return Ue})):Me!=null&&(W(Me)&&(Me=U(Me,Se+(!Me.key||oe&&oe.key===Me.key?"":(""+Me.key).replace(q,"$&/")+"/")+D)),V.push(Me)),1;if(oe=0,Ae=Ae===""?".":Ae+":",b(D))for(var se=0;se<D.length;se++){K=D[se];var Pe=Ae+ce(K,se);oe+=ue(K,V,Se,Pe,Me)}else if(Pe=m(D),typeof Pe=="function")for(D=Pe.call(D),se=0;!(K=D.next()).done;)K=K.value,Pe=Ae+ce(K,se++),oe+=ue(K,V,Se,Pe,Me);else if(K==="object")throw V=String(D),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return oe}function j(D,V,Se){if(D==null)return D;var Ae=[],Me=0;return ue(D,Ae,"","",function(K){return V.call(Se,K,Me++)}),Ae}function te(D){if(D._status===-1){var V=D._result;V=V(),V.then(function(Se){(D._status===0||D._status===-1)&&(D._status=1,D._result=Se)},function(Se){(D._status===0||D._status===-1)&&(D._status=2,D._result=Se)}),D._status===-1&&(D._status=0,D._result=V)}if(D._status===1)return D._result.default;throw D._result}var X={current:null},F={transition:null},N={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:F,ReactCurrentOwner:L};function Y(){throw Error("act(...) is not supported in production builds of React.")}return bt.Children={map:j,forEach:function(D,V,Se){j(D,function(){V.apply(this,arguments)},Se)},count:function(D){var V=0;return j(D,function(){V++}),V},toArray:function(D){return j(D,function(V){return V})||[]},only:function(D){if(!W(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},bt.Component=y,bt.Fragment=t,bt.Profiler=o,bt.PureComponent=E,bt.StrictMode=r,bt.Suspense=d,bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,bt.act=Y,bt.cloneElement=function(D,V,Se){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ae=S({},D.props),Me=D.key,K=D.ref,oe=D._owner;if(V!=null){if(V.ref!==void 0&&(K=V.ref,oe=L.current),V.key!==void 0&&(Me=""+V.key),D.type&&D.type.defaultProps)var se=D.type.defaultProps;for(Pe in V)z.call(V,Pe)&&!k.hasOwnProperty(Pe)&&(Ae[Pe]=V[Pe]===void 0&&se!==void 0?se[Pe]:V[Pe])}var Pe=arguments.length-2;if(Pe===1)Ae.children=Se;else if(1<Pe){se=Array(Pe);for(var Ue=0;Ue<Pe;Ue++)se[Ue]=arguments[Ue+2];Ae.children=se}return{$$typeof:s,type:D.type,key:Me,ref:K,props:Ae,_owner:oe}},bt.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},bt.createElement=A,bt.createFactory=function(D){var V=A.bind(null,D);return V.type=D,V},bt.createRef=function(){return{current:null}},bt.forwardRef=function(D){return{$$typeof:f,render:D}},bt.isValidElement=W,bt.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:te}},bt.memo=function(D,V){return{$$typeof:h,type:D,compare:V===void 0?null:V}},bt.startTransition=function(D){var V=F.transition;F.transition={};try{D()}finally{F.transition=V}},bt.unstable_act=Y,bt.useCallback=function(D,V){return X.current.useCallback(D,V)},bt.useContext=function(D){return X.current.useContext(D)},bt.useDebugValue=function(){},bt.useDeferredValue=function(D){return X.current.useDeferredValue(D)},bt.useEffect=function(D,V){return X.current.useEffect(D,V)},bt.useId=function(){return X.current.useId()},bt.useImperativeHandle=function(D,V,Se){return X.current.useImperativeHandle(D,V,Se)},bt.useInsertionEffect=function(D,V){return X.current.useInsertionEffect(D,V)},bt.useLayoutEffect=function(D,V){return X.current.useLayoutEffect(D,V)},bt.useMemo=function(D,V){return X.current.useMemo(D,V)},bt.useReducer=function(D,V,Se){return X.current.useReducer(D,V,Se)},bt.useRef=function(D){return X.current.useRef(D)},bt.useState=function(D){return X.current.useState(D)},bt.useSyncExternalStore=function(D,V,Se){return X.current.useSyncExternalStore(D,V,Se)},bt.useTransition=function(){return X.current.useTransition()},bt.version="18.3.1",bt}var Dm;function Gh(){return Dm||(Dm=1,$u.exports=s_()),$u.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function o_(){if(Um)return ta;Um=1;var s=Gh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var g,x={},m=null,_=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(_=d.ref);for(g in d)r.call(d,g)&&!l.hasOwnProperty(g)&&(x[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)x[g]===void 0&&(x[g]=d[g]);return{$$typeof:e,type:f,key:m,ref:_,props:x,_owner:o.current}}return ta.Fragment=t,ta.jsx=c,ta.jsxs=c,ta}var Nm;function a_(){return Nm||(Nm=1,Zu.exports=o_()),Zu.exports}var Ve=a_(),It=Gh(),Al={},ef={exports:{}},Zn={},tf={exports:{}},nf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function l_(){return Fm||(Fm=1,(function(s){function e(F,N){var Y=F.length;F.push(N);e:for(;0<Y;){var D=Y-1>>>1,V=F[D];if(0<o(V,N))F[D]=N,F[Y]=V,Y=D;else break e}}function t(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var N=F[0],Y=F.pop();if(Y!==N){F[0]=Y;e:for(var D=0,V=F.length,Se=V>>>1;D<Se;){var Ae=2*(D+1)-1,Me=F[Ae],K=Ae+1,oe=F[K];if(0>o(Me,Y))K<V&&0>o(oe,Me)?(F[D]=oe,F[K]=Y,D=K):(F[D]=Me,F[Ae]=Y,D=Ae);else if(K<V&&0>o(oe,Y))F[D]=oe,F[K]=Y,D=K;else break e}}return N}function o(F,N){var Y=F.sortIndex-N.sortIndex;return Y!==0?Y:F.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var d=[],h=[],g=1,x=null,m=3,_=!1,S=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(F){for(var N=t(h);N!==null;){if(N.callback===null)r(h);else if(N.startTime<=F)r(h),N.sortIndex=N.expirationTime,e(d,N);else break;N=t(h)}}function b(F){if(T=!1,P(F),!S)if(t(d)!==null)S=!0,te(z);else{var N=t(h);N!==null&&X(b,N.startTime-F)}}function z(F,N){S=!1,T&&(T=!1,M(A),A=-1),_=!0;var Y=m;try{for(P(N),x=t(d);x!==null&&(!(x.expirationTime>N)||F&&!B());){var D=x.callback;if(typeof D=="function"){x.callback=null,m=x.priorityLevel;var V=D(x.expirationTime<=N);N=s.unstable_now(),typeof V=="function"?x.callback=V:x===t(d)&&r(d),P(N)}else r(d);x=t(d)}if(x!==null)var Se=!0;else{var Ae=t(h);Ae!==null&&X(b,Ae.startTime-N),Se=!1}return Se}finally{x=null,m=Y,_=!1}}var L=!1,k=null,A=-1,U=5,W=-1;function B(){return!(s.unstable_now()-W<U)}function q(){if(k!==null){var F=s.unstable_now();W=F;var N=!0;try{N=k(!0,F)}finally{N?ce():(L=!1,k=null)}}else L=!1}var ce;if(typeof E=="function")ce=function(){E(q)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,j=ue.port2;ue.port1.onmessage=q,ce=function(){j.postMessage(null)}}else ce=function(){y(q,0)};function te(F){k=F,L||(L=!0,ce())}function X(F,N){A=y(function(){F(s.unstable_now())},N)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_continueExecution=function(){S||_||(S=!0,te(z))},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(F){switch(m){case 1:case 2:case 3:var N=3;break;default:N=m}var Y=m;m=N;try{return F()}finally{m=Y}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(F,N){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Y=m;m=F;try{return N()}finally{m=Y}},s.unstable_scheduleCallback=function(F,N,Y){var D=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?D+Y:D):Y=D,F){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=Y+V,F={id:g++,callback:N,priorityLevel:F,startTime:Y,expirationTime:V,sortIndex:-1},Y>D?(F.sortIndex=Y,e(h,F),t(d)===null&&F===t(h)&&(T?(M(A),A=-1):T=!0,X(b,Y-D))):(F.sortIndex=V,e(d,F),S||_||(S=!0,te(z))),F},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(F){var N=m;return function(){var Y=m;m=N;try{return F.apply(this,arguments)}finally{m=Y}}}})(nf)),nf}var Om;function c_(){return Om||(Om=1,tf.exports=l_()),tf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function u_(){if(km)return Zn;km=1;var s=Gh(),e=c_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function m(n){return d.call(x,n)?!0:d.call(g,n)?!1:h.test(n)?x[n]=!0:(g[n]=!0,!1)}function _(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function S(n,i,a,u){if(i===null||typeof i>"u"||_(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,a,u,p,v,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=C}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function E(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(M,E);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(M,E);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(M,E);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,u){var p=y.hasOwnProperty(i)?y[i]:null;(p!==null?p.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(S(i,a,p,u)&&(a=null),u||p===null?m(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,u=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),L=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),B=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),F=Symbol.iterator;function N(n){return n===null||typeof n!="object"?null:(n=F&&n[F]||n["@@iterator"],typeof n=="function"?n:null)}var Y=Object.assign,D;function V(n){if(D===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+n}var Se=!1;function Ae(n,i){if(!n||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(pe){var u=pe}Reflect.construct(n,[],i)}else{try{i.call()}catch(pe){u=pe}n.call(i.prototype)}else{try{throw Error()}catch(pe){u=pe}n()}}catch(pe){if(pe&&u&&typeof pe.stack=="string"){for(var p=pe.stack.split(`
`),v=u.stack.split(`
`),C=p.length-1,H=v.length-1;1<=C&&0<=H&&p[C]!==v[H];)H--;for(;1<=C&&0<=H;C--,H--)if(p[C]!==v[H]){if(C!==1||H!==1)do if(C--,H--,0>H||p[C]!==v[H]){var J=`
`+p[C].replace(" at new "," at ");return n.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",n.displayName)),J}while(1<=C&&0<=H);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?V(n):""}function Me(n){switch(n.tag){case 5:return V(n.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function K(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case L:return"Portal";case U:return"Profiler";case A:return"StrictMode";case ce:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case W:return(n._context.displayName||"Context")+".Provider";case q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case j:return i=n.displayName||null,i!==null?i:K(n.type)||"Memo";case te:i=n._payload,n=n._init;try{return K(n(i))}catch{}}return null}function oe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return K(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Pe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ue(n){var i=Pe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(C){u=""+C,v.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(C){u=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ge(n){n._valueTracker||(n._valueTracker=Ue(n))}function $e(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Pe(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function ie(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function _e(n,i){var a=i.checked;return Y({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function je(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=se(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ke(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function We(n,i){Ke(n,i);var a=se(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?vt(n,i.type,a):i.hasOwnProperty("defaultValue")&&vt(n,i.type,se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Je(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function vt(n,i,a){(i!=="number"||ie(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var O=Array.isArray;function et(n,i,a,u){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&u&&(n[a].defaultSelected=!0)}else{for(a=""+se(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function it(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Y({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Et(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(O(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:se(a)}}function Ce(n,i){var a=se(i.value),u=se(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function Tt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function I(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?I(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ne,me=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,p)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ne=ne||document.createElement("div"),ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ve(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Te=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Te.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function de(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function xe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=de(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,p):n[a]=p}}var ze=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Oe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ie=null;function ut(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ft=null,yt=null,Q=null;function Fe(n){if(n=zo(n)){if(typeof ft!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ka(i),ft(n.stateNode,n.type,i))}}function ye(n){yt?Q?Q.push(n):Q=[n]:yt=n}function qe(){if(yt){var n=yt,i=Q;if(Q=yt=null,Fe(n),i)for(n=0;n<i.length;n++)Fe(i[n])}}function ke(n,i){return n(i)}function we(){}var Ye=!1;function be(n,i,a){if(Ye)return n(i,a);Ye=!0;try{return ke(n,i,a)}finally{Ye=!1,(yt!==null||Q!==null)&&(we(),qe())}}function xt(n,i){var a=n.stateNode;if(a===null)return null;var u=ka(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Lt=!1;if(f)try{var tn={};Object.defineProperty(tn,"passive",{get:function(){Lt=!0}}),window.addEventListener("test",tn,tn),window.removeEventListener("test",tn,tn)}catch{Lt=!1}function kn(n,i,a,u,p,v,C,H,J){var pe=Array.prototype.slice.call(arguments,3);try{i.apply(a,pe)}catch(Le){this.onError(Le)}}var Si=!1,$i=null,Ai=!1,er=null,ti={onError:function(n){Si=!0,$i=n}};function qr(n,i,a,u,p,v,C,H,J){Si=!1,$i=null,kn.apply(ti,arguments)}function ws(n,i,a,u,p,v,C,H,J){if(qr.apply(this,arguments),Si){if(Si){var pe=$i;Si=!1,$i=null}else throw Error(t(198));Ai||(Ai=!0,er=pe)}}function cn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function bn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Bn(n){if(cn(n)!==n)throw Error(t(188))}function Rn(n){var i=n.alternate;if(!i){if(i=cn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var p=a.return;if(p===null)break;var v=p.alternate;if(v===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===a)return Bn(p),n;if(v===u)return Bn(p),i;v=v.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=v;else{for(var C=!1,H=p.child;H;){if(H===a){C=!0,a=p,u=v;break}if(H===u){C=!0,u=p,a=v;break}H=H.sibling}if(!C){for(H=v.child;H;){if(H===a){C=!0,a=v,u=p;break}if(H===u){C=!0,u=v,a=p;break}H=H.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function zn(n){return n=Rn(n),n!==null?Hn(n):null}function Hn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Hn(n);if(i!==null)return i;n=n.sibling}return null}var Yr=e.unstable_scheduleCallback,Qr=e.unstable_cancelCallback,ui=e.unstable_shouldYield,fi=e.unstable_requestPaint,jt=e.unstable_now,Ao=e.unstable_getCurrentPriorityLevel,sn=e.unstable_ImmediatePriority,R=e.unstable_UserBlockingPriority,ee=e.unstable_NormalPriority,fe=e.unstable_LowPriority,le=e.unstable_IdlePriority,ae=null,He=null;function Xe(n){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(ae,n,void 0,(n.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:ht,nt=Math.log,rt=Math.LN2;function ht(n){return n>>>=0,n===0?32:31-(nt(n)/rt|0)|0}var dt=64,ot=4194304;function Ct(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Bt(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,p=n.suspendedLanes,v=n.pingedLanes,C=a&268435455;if(C!==0){var H=C&~p;H!==0?u=Ct(H):(v&=C,v!==0&&(u=Ct(v)))}else C=a&~p,C!==0?u=Ct(C):v!==0&&(u=Ct(v));if(u===0)return 0;if(i!==0&&i!==u&&(i&p)===0&&(p=u&-u,v=i&-i,p>=v||p===16&&(v&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Ne(i),p=1<<a,u|=n[a],i&=~p;return u}function Wt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var C=31-Ne(v),H=1<<C,J=p[C];J===-1?((H&a)===0||(H&u)!==0)&&(p[C]=Wt(H,i)):J<=i&&(n.expiredLanes|=H),v&=~H}}function Jt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ze(){var n=dt;return dt<<=1,(dt&4194240)===0&&(dt=64),n}function on(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function St(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ne(i),n[i]=a}function vn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-Ne(a),v=1<<p;i[p]=0,u[p]=-1,n[p]=-1,a&=~v}}function An(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Ne(a),p=1<<u;p&i|n[u]&i&&(n[u]|=i),a&=~p}}var Mt=0;function ni(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ht,Kt,Ei,Vt,wi,zi=!1,Jr=[],_r=null,yr=null,Mr=null,Eo=new Map,wo=new Map,Sr=[],wv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(n,i){switch(n){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":Eo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(i.pointerId)}}function To(n,i,a,u,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:v,targetContainers:[p]},i!==null&&(i=zo(i),i!==null&&Kt(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function Tv(n,i,a,u,p){switch(i){case"focusin":return _r=To(_r,n,i,a,u,p),!0;case"dragenter":return yr=To(yr,n,i,a,u,p),!0;case"mouseover":return Mr=To(Mr,n,i,a,u,p),!0;case"pointerover":var v=p.pointerId;return Eo.set(v,To(Eo.get(v)||null,n,i,a,u,p)),!0;case"gotpointercapture":return v=p.pointerId,wo.set(v,To(wo.get(v)||null,n,i,a,u,p)),!0}return!1}function gd(n){var i=Zr(n.target);if(i!==null){var a=cn(i);if(a!==null){if(i=a.tag,i===13){if(i=bn(a),i!==null){n.blockedOn=i,wi(n.priority,function(){Ei(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ea(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=wc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Ie=u,a.target.dispatchEvent(u),Ie=null}else return i=zo(a),i!==null&&Kt(i),n.blockedOn=a,!1;i.shift()}return!0}function vd(n,i,a){Ea(n)&&a.delete(i)}function Cv(){zi=!1,_r!==null&&Ea(_r)&&(_r=null),yr!==null&&Ea(yr)&&(yr=null),Mr!==null&&Ea(Mr)&&(Mr=null),Eo.forEach(vd),wo.forEach(vd)}function Co(n,i){n.blockedOn===i&&(n.blockedOn=null,zi||(zi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Cv)))}function bo(n){function i(p){return Co(p,n)}if(0<Jr.length){Co(Jr[0],n);for(var a=1;a<Jr.length;a++){var u=Jr[a];u.blockedOn===n&&(u.blockedOn=null)}}for(_r!==null&&Co(_r,n),yr!==null&&Co(yr,n),Mr!==null&&Co(Mr,n),Eo.forEach(i),wo.forEach(i),a=0;a<Sr.length;a++)u=Sr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)gd(a),a.blockedOn===null&&Sr.shift()}var Ts=b.ReactCurrentBatchConfig,wa=!0;function bv(n,i,a,u){var p=Mt,v=Ts.transition;Ts.transition=null;try{Mt=1,Ec(n,i,a,u)}finally{Mt=p,Ts.transition=v}}function Rv(n,i,a,u){var p=Mt,v=Ts.transition;Ts.transition=null;try{Mt=4,Ec(n,i,a,u)}finally{Mt=p,Ts.transition=v}}function Ec(n,i,a,u){if(wa){var p=wc(n,i,a,u);if(p===null)Vc(n,i,u,Ta,a),md(n,u);else if(Tv(p,n,i,a,u))u.stopPropagation();else if(md(n,u),i&4&&-1<wv.indexOf(n)){for(;p!==null;){var v=zo(p);if(v!==null&&Ht(v),v=wc(n,i,a,u),v===null&&Vc(n,i,u,Ta,a),v===p)break;p=v}p!==null&&u.stopPropagation()}else Vc(n,i,u,null,a)}}var Ta=null;function wc(n,i,a,u){if(Ta=null,n=ut(u),n=Zr(n),n!==null)if(i=cn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=bn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ta=n,null}function xd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ao()){case sn:return 1;case R:return 4;case ee:case fe:return 16;case le:return 536870912;default:return 16}default:return 16}}var Ar=null,Tc=null,Ca=null;function _d(){if(Ca)return Ca;var n,i=Tc,a=i.length,u,p="value"in Ar?Ar.value:Ar.textContent,v=p.length;for(n=0;n<a&&i[n]===p[n];n++);var C=a-n;for(u=1;u<=C&&i[a-u]===p[v-u];u++);return Ca=p.slice(n,1<u?1-u:void 0)}function ba(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ra(){return!0}function yd(){return!1}function ii(n){function i(a,u,p,v,C){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=v,this.target=C,this.currentTarget=null;for(var H in n)n.hasOwnProperty(H)&&(a=n[H],this[H]=a?a(v):v[H]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ra:yd,this.isPropagationStopped=yd,this}return Y(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),i}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cc=ii(Cs),Ro=Y({},Cs,{view:0,detail:0}),Pv=ii(Ro),bc,Rc,Po,Pa=Y({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Po&&(Po&&n.type==="mousemove"?(bc=n.screenX-Po.screenX,Rc=n.screenY-Po.screenY):Rc=bc=0,Po=n),bc)},movementY:function(n){return"movementY"in n?n.movementY:Rc}}),Md=ii(Pa),Lv=Y({},Pa,{dataTransfer:0}),Iv=ii(Lv),Dv=Y({},Ro,{relatedTarget:0}),Pc=ii(Dv),Uv=Y({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Nv=ii(Uv),Fv=Y({},Cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ov=ii(Fv),kv=Y({},Cs,{data:0}),Sd=ii(kv),Bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Hv[n])?!!i[n]:!1}function Lc(){return Vv}var Gv=Y({},Ro,{key:function(n){if(n.key){var i=Bv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ba(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lc,charCode:function(n){return n.type==="keypress"?ba(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ba(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Wv=ii(Gv),Xv=Y({},Pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=ii(Xv),jv=Y({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lc}),Kv=ii(jv),qv=Y({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yv=ii(qv),Qv=Y({},Pa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Jv=ii(Qv),Zv=[9,13,27,32],Ic=f&&"CompositionEvent"in window,Lo=null;f&&"documentMode"in document&&(Lo=document.documentMode);var $v=f&&"TextEvent"in window&&!Lo,Ed=f&&(!Ic||Lo&&8<Lo&&11>=Lo),wd=" ",Td=!1;function Cd(n,i){switch(n){case"keyup":return Zv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function ex(n,i){switch(n){case"compositionend":return bd(i);case"keypress":return i.which!==32?null:(Td=!0,wd);case"textInput":return n=i.data,n===wd&&Td?null:n;default:return null}}function tx(n,i){if(bs)return n==="compositionend"||!Ic&&Cd(n,i)?(n=_d(),Ca=Tc=Ar=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ed&&i.locale!=="ko"?null:i.data;default:return null}}var nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!nx[n.type]:i==="textarea"}function Pd(n,i,a,u){ye(u),i=Na(i,"onChange"),0<i.length&&(a=new Cc("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Io=null,Do=null;function ix(n){qd(n,0)}function La(n){var i=Ds(n);if($e(i))return n}function rx(n,i){if(n==="change")return i}var Ld=!1;if(f){var Dc;if(f){var Uc="oninput"in document;if(!Uc){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),Uc=typeof Id.oninput=="function"}Dc=Uc}else Dc=!1;Ld=Dc&&(!document.documentMode||9<document.documentMode)}function Dd(){Io&&(Io.detachEvent("onpropertychange",Ud),Do=Io=null)}function Ud(n){if(n.propertyName==="value"&&La(Do)){var i=[];Pd(i,Do,n,ut(n)),be(ix,i)}}function sx(n,i,a){n==="focusin"?(Dd(),Io=i,Do=a,Io.attachEvent("onpropertychange",Ud)):n==="focusout"&&Dd()}function ox(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return La(Do)}function ax(n,i){if(n==="click")return La(i)}function lx(n,i){if(n==="input"||n==="change")return La(i)}function cx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ti=typeof Object.is=="function"?Object.is:cx;function Uo(n,i){if(Ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!d.call(i,p)||!Ti(n[p],i[p]))return!1}return!0}function Nd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Fd(n,i){var a=Nd(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nd(a)}}function Od(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Od(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function kd(){for(var n=window,i=ie();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ie(n.document)}return i}function Nc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function ux(n){var i=kd(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Od(a.ownerDocument.documentElement,a)){if(u!==null&&Nc(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,v=Math.min(u.start,p);u=u.end===void 0?v:Math.min(u.end,p),!n.extend&&v>u&&(p=u,u=v,v=p),p=Fd(a,v);var C=Fd(a,u);p&&C&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),v>u?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var fx=f&&"documentMode"in document&&11>=document.documentMode,Rs=null,Fc=null,No=null,Oc=!1;function Bd(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Oc||Rs==null||Rs!==ie(u)||(u=Rs,"selectionStart"in u&&Nc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),No&&Uo(No,u)||(No=u,u=Na(Fc,"onSelect"),0<u.length&&(i=new Cc("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Rs)))}function Ia(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ps={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionend:Ia("Transition","TransitionEnd")},kc={},zd={};f&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Da(n){if(kc[n])return kc[n];if(!Ps[n])return n;var i=Ps[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in zd)return kc[n]=i[a];return n}var Hd=Da("animationend"),Vd=Da("animationiteration"),Gd=Da("animationstart"),Wd=Da("transitionend"),Xd=new Map,jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(n,i){Xd.set(n,i),l(i,[n])}for(var Bc=0;Bc<jd.length;Bc++){var zc=jd[Bc],hx=zc.toLowerCase(),dx=zc[0].toUpperCase()+zc.slice(1);Er(hx,"on"+dx)}Er(Hd,"onAnimationEnd"),Er(Vd,"onAnimationIteration"),Er(Gd,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(Wd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),px=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function Kd(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,ws(u,i,void 0,n),n.currentTarget=null}function qd(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],p=u.event;u=u.listeners;e:{var v=void 0;if(i)for(var C=u.length-1;0<=C;C--){var H=u[C],J=H.instance,pe=H.currentTarget;if(H=H.listener,J!==v&&p.isPropagationStopped())break e;Kd(p,H,pe),v=J}else for(C=0;C<u.length;C++){if(H=u[C],J=H.instance,pe=H.currentTarget,H=H.listener,J!==v&&p.isPropagationStopped())break e;Kd(p,H,pe),v=J}}}if(Ai)throw n=er,Ai=!1,er=null,n}function qt(n,i){var a=i[qc];a===void 0&&(a=i[qc]=new Set);var u=n+"__bubble";a.has(u)||(Yd(i,n,2,!1),a.add(u))}function Hc(n,i,a){var u=0;i&&(u|=4),Yd(a,n,u,i)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function Oo(n){if(!n[Ua]){n[Ua]=!0,r.forEach(function(a){a!=="selectionchange"&&(px.has(a)||Hc(a,!1,n),Hc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ua]||(i[Ua]=!0,Hc("selectionchange",!1,i))}}function Yd(n,i,a,u){switch(xd(i)){case 1:var p=bv;break;case 4:p=Rv;break;default:p=Ec}a=p.bind(null,i,a,n),p=void 0,!Lt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function Vc(n,i,a,u,p){var v=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var C=u.tag;if(C===3||C===4){var H=u.stateNode.containerInfo;if(H===p||H.nodeType===8&&H.parentNode===p)break;if(C===4)for(C=u.return;C!==null;){var J=C.tag;if((J===3||J===4)&&(J=C.stateNode.containerInfo,J===p||J.nodeType===8&&J.parentNode===p))return;C=C.return}for(;H!==null;){if(C=Zr(H),C===null)return;if(J=C.tag,J===5||J===6){u=v=C;continue e}H=H.parentNode}}u=u.return}be(function(){var pe=v,Le=ut(a),De=[];e:{var Re=Xd.get(n);if(Re!==void 0){var tt=Cc,at=n;switch(n){case"keypress":if(ba(a)===0)break e;case"keydown":case"keyup":tt=Wv;break;case"focusin":at="focus",tt=Pc;break;case"focusout":at="blur",tt=Pc;break;case"beforeblur":case"afterblur":tt=Pc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=Md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=Iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=Kv;break;case Hd:case Vd:case Gd:tt=Nv;break;case Wd:tt=Yv;break;case"scroll":tt=Pv;break;case"wheel":tt=Jv;break;case"copy":case"cut":case"paste":tt=Ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=Ad}var lt=(i&4)!==0,an=!lt&&n==="scroll",re=lt?Re!==null?Re+"Capture":null:Re;lt=[];for(var $=pe,he;$!==null;){he=$;var Be=he.stateNode;if(he.tag===5&&Be!==null&&(he=Be,re!==null&&(Be=xt($,re),Be!=null&&lt.push(ko($,Be,he)))),an)break;$=$.return}0<lt.length&&(Re=new tt(Re,at,null,a,Le),De.push({event:Re,listeners:lt}))}}if((i&7)===0){e:{if(Re=n==="mouseover"||n==="pointerover",tt=n==="mouseout"||n==="pointerout",Re&&a!==Ie&&(at=a.relatedTarget||a.fromElement)&&(Zr(at)||at[tr]))break e;if((tt||Re)&&(Re=Le.window===Le?Le:(Re=Le.ownerDocument)?Re.defaultView||Re.parentWindow:window,tt?(at=a.relatedTarget||a.toElement,tt=pe,at=at?Zr(at):null,at!==null&&(an=cn(at),at!==an||at.tag!==5&&at.tag!==6)&&(at=null)):(tt=null,at=pe),tt!==at)){if(lt=Md,Be="onMouseLeave",re="onMouseEnter",$="mouse",(n==="pointerout"||n==="pointerover")&&(lt=Ad,Be="onPointerLeave",re="onPointerEnter",$="pointer"),an=tt==null?Re:Ds(tt),he=at==null?Re:Ds(at),Re=new lt(Be,$+"leave",tt,a,Le),Re.target=an,Re.relatedTarget=he,Be=null,Zr(Le)===pe&&(lt=new lt(re,$+"enter",at,a,Le),lt.target=he,lt.relatedTarget=an,Be=lt),an=Be,tt&&at)t:{for(lt=tt,re=at,$=0,he=lt;he;he=Ls(he))$++;for(he=0,Be=re;Be;Be=Ls(Be))he++;for(;0<$-he;)lt=Ls(lt),$--;for(;0<he-$;)re=Ls(re),he--;for(;$--;){if(lt===re||re!==null&&lt===re.alternate)break t;lt=Ls(lt),re=Ls(re)}lt=null}else lt=null;tt!==null&&Qd(De,Re,tt,lt,!1),at!==null&&an!==null&&Qd(De,an,at,lt,!0)}}e:{if(Re=pe?Ds(pe):window,tt=Re.nodeName&&Re.nodeName.toLowerCase(),tt==="select"||tt==="input"&&Re.type==="file")var ct=rx;else if(Rd(Re))if(Ld)ct=lx;else{ct=ox;var pt=sx}else(tt=Re.nodeName)&&tt.toLowerCase()==="input"&&(Re.type==="checkbox"||Re.type==="radio")&&(ct=ax);if(ct&&(ct=ct(n,pe))){Pd(De,ct,a,Le);break e}pt&&pt(n,Re,pe),n==="focusout"&&(pt=Re._wrapperState)&&pt.controlled&&Re.type==="number"&&vt(Re,"number",Re.value)}switch(pt=pe?Ds(pe):window,n){case"focusin":(Rd(pt)||pt.contentEditable==="true")&&(Rs=pt,Fc=pe,No=null);break;case"focusout":No=Fc=Rs=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,Bd(De,a,Le);break;case"selectionchange":if(fx)break;case"keydown":case"keyup":Bd(De,a,Le)}var mt;if(Ic)e:{switch(n){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else bs?Cd(n,a)&&(_t="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(Ed&&a.locale!=="ko"&&(bs||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&bs&&(mt=_d()):(Ar=Le,Tc="value"in Ar?Ar.value:Ar.textContent,bs=!0)),pt=Na(pe,_t),0<pt.length&&(_t=new Sd(_t,n,null,a,Le),De.push({event:_t,listeners:pt}),mt?_t.data=mt:(mt=bd(a),mt!==null&&(_t.data=mt)))),(mt=$v?ex(n,a):tx(n,a))&&(pe=Na(pe,"onBeforeInput"),0<pe.length&&(Le=new Sd("onBeforeInput","beforeinput",null,a,Le),De.push({event:Le,listeners:pe}),Le.data=mt))}qd(De,i)})}function ko(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Na(n,i){for(var a=i+"Capture",u=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=xt(n,a),v!=null&&u.unshift(ko(n,v,p)),v=xt(n,i),v!=null&&u.push(ko(n,v,p))),n=n.return}return u}function Ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Qd(n,i,a,u,p){for(var v=i._reactName,C=[];a!==null&&a!==u;){var H=a,J=H.alternate,pe=H.stateNode;if(J!==null&&J===u)break;H.tag===5&&pe!==null&&(H=pe,p?(J=xt(a,v),J!=null&&C.unshift(ko(a,J,H))):p||(J=xt(a,v),J!=null&&C.push(ko(a,J,H)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var mx=/\r\n?/g,gx=/\u0000|\uFFFD/g;function Jd(n){return(typeof n=="string"?n:""+n).replace(mx,`
`).replace(gx,"")}function Fa(n,i,a){if(i=Jd(i),Jd(n)!==i&&a)throw Error(t(425))}function Oa(){}var Gc=null,Wc=null;function Xc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var jc=typeof setTimeout=="function"?setTimeout:void 0,vx=typeof clearTimeout=="function"?clearTimeout:void 0,Zd=typeof Promise=="function"?Promise:void 0,xx=typeof queueMicrotask=="function"?queueMicrotask:typeof Zd<"u"?function(n){return Zd.resolve(null).then(n).catch(_x)}:jc;function _x(n){setTimeout(function(){throw n})}function Kc(n,i){var a=i,u=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){n.removeChild(p),bo(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);bo(i)}function wr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function $d(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Hi="__reactFiber$"+Is,Bo="__reactProps$"+Is,tr="__reactContainer$"+Is,qc="__reactEvents$"+Is,yx="__reactListeners$"+Is,Mx="__reactHandles$"+Is;function Zr(n){var i=n[Hi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[tr]||a[Hi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=$d(n);n!==null;){if(a=n[Hi])return a;n=$d(n)}return i}n=a,a=n.parentNode}return null}function zo(n){return n=n[Hi]||n[tr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ka(n){return n[Bo]||null}var Yc=[],Us=-1;function Tr(n){return{current:n}}function Yt(n){0>Us||(n.current=Yc[Us],Yc[Us]=null,Us--)}function Xt(n,i){Us++,Yc[Us]=n.current,n.current=i}var Cr={},Pn=Tr(Cr),Kn=Tr(!1),$r=Cr;function Ns(n,i){var a=n.type.contextTypes;if(!a)return Cr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in a)p[v]=i[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function qn(n){return n=n.childContextTypes,n!=null}function Ba(){Yt(Kn),Yt(Pn)}function ep(n,i,a){if(Pn.current!==Cr)throw Error(t(168));Xt(Pn,i),Xt(Kn,a)}function tp(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in i))throw Error(t(108,oe(n)||"Unknown",p));return Y({},a,u)}function za(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Cr,$r=Pn.current,Xt(Pn,n),Xt(Kn,Kn.current),!0}function np(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=tp(n,i,$r),u.__reactInternalMemoizedMergedChildContext=n,Yt(Kn),Yt(Pn),Xt(Pn,n)):Yt(Kn),Xt(Kn,a)}var nr=null,Ha=!1,Qc=!1;function ip(n){nr===null?nr=[n]:nr.push(n)}function Sx(n){Ha=!0,ip(n)}function br(){if(!Qc&&nr!==null){Qc=!0;var n=0,i=Mt;try{var a=nr;for(Mt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}nr=null,Ha=!1}catch(p){throw nr!==null&&(nr=nr.slice(n+1)),Yr(sn,br),p}finally{Mt=i,Qc=!1}}return null}var Fs=[],Os=0,Va=null,Ga=0,hi=[],di=0,es=null,ir=1,rr="";function ts(n,i){Fs[Os++]=Ga,Fs[Os++]=Va,Va=n,Ga=i}function rp(n,i,a){hi[di++]=ir,hi[di++]=rr,hi[di++]=es,es=n;var u=ir;n=rr;var p=32-Ne(u)-1;u&=~(1<<p),a+=1;var v=32-Ne(i)+p;if(30<v){var C=p-p%5;v=(u&(1<<C)-1).toString(32),u>>=C,p-=C,ir=1<<32-Ne(i)+p|a<<p|u,rr=v+n}else ir=1<<v|a<<p|u,rr=n}function Jc(n){n.return!==null&&(ts(n,1),rp(n,1,0))}function Zc(n){for(;n===Va;)Va=Fs[--Os],Fs[Os]=null,Ga=Fs[--Os],Fs[Os]=null;for(;n===es;)es=hi[--di],hi[di]=null,rr=hi[--di],hi[di]=null,ir=hi[--di],hi[di]=null}var ri=null,si=null,Qt=!1,Ci=null;function sp(n,i){var a=vi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function op(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ri=n,si=wr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ri=n,si=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=es!==null?{id:ir,overflow:rr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=vi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ri=n,si=null,!0):!1;default:return!1}}function $c(n){return(n.mode&1)!==0&&(n.flags&128)===0}function eu(n){if(Qt){var i=si;if(i){var a=i;if(!op(n,i)){if($c(n))throw Error(t(418));i=wr(a.nextSibling);var u=ri;i&&op(n,i)?sp(u,a):(n.flags=n.flags&-4097|2,Qt=!1,ri=n)}}else{if($c(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qt=!1,ri=n}}}function ap(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ri=n}function Wa(n){if(n!==ri)return!1;if(!Qt)return ap(n),Qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Xc(n.type,n.memoizedProps)),i&&(i=si)){if($c(n))throw lp(),Error(t(418));for(;i;)sp(n,i),i=wr(i.nextSibling)}if(ap(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){si=wr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}si=null}}else si=ri?wr(n.stateNode.nextSibling):null;return!0}function lp(){for(var n=si;n;)n=wr(n.nextSibling)}function ks(){si=ri=null,Qt=!1}function tu(n){Ci===null?Ci=[n]:Ci.push(n)}var Ax=b.ReactCurrentBatchConfig;function Ho(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var p=u,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(C){var H=p.refs;C===null?delete H[v]:H[v]=C},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Xa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function cp(n){var i=n._init;return i(n._payload)}function up(n){function i(re,$){if(n){var he=re.deletions;he===null?(re.deletions=[$],re.flags|=16):he.push($)}}function a(re,$){if(!n)return null;for(;$!==null;)i(re,$),$=$.sibling;return null}function u(re,$){for(re=new Map;$!==null;)$.key!==null?re.set($.key,$):re.set($.index,$),$=$.sibling;return re}function p(re,$){return re=Fr(re,$),re.index=0,re.sibling=null,re}function v(re,$,he){return re.index=he,n?(he=re.alternate,he!==null?(he=he.index,he<$?(re.flags|=2,$):he):(re.flags|=2,$)):(re.flags|=1048576,$)}function C(re){return n&&re.alternate===null&&(re.flags|=2),re}function H(re,$,he,Be){return $===null||$.tag!==6?($=ju(he,re.mode,Be),$.return=re,$):($=p($,he),$.return=re,$)}function J(re,$,he,Be){var ct=he.type;return ct===k?Le(re,$,he.props.children,Be,he.key):$!==null&&($.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===te&&cp(ct)===$.type)?(Be=p($,he.props),Be.ref=Ho(re,$,he),Be.return=re,Be):(Be=ml(he.type,he.key,he.props,null,re.mode,Be),Be.ref=Ho(re,$,he),Be.return=re,Be)}function pe(re,$,he,Be){return $===null||$.tag!==4||$.stateNode.containerInfo!==he.containerInfo||$.stateNode.implementation!==he.implementation?($=Ku(he,re.mode,Be),$.return=re,$):($=p($,he.children||[]),$.return=re,$)}function Le(re,$,he,Be,ct){return $===null||$.tag!==7?($=cs(he,re.mode,Be,ct),$.return=re,$):($=p($,he),$.return=re,$)}function De(re,$,he){if(typeof $=="string"&&$!==""||typeof $=="number")return $=ju(""+$,re.mode,he),$.return=re,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case z:return he=ml($.type,$.key,$.props,null,re.mode,he),he.ref=Ho(re,null,$),he.return=re,he;case L:return $=Ku($,re.mode,he),$.return=re,$;case te:var Be=$._init;return De(re,Be($._payload),he)}if(O($)||N($))return $=cs($,re.mode,he,null),$.return=re,$;Xa(re,$)}return null}function Re(re,$,he,Be){var ct=$!==null?$.key:null;if(typeof he=="string"&&he!==""||typeof he=="number")return ct!==null?null:H(re,$,""+he,Be);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case z:return he.key===ct?J(re,$,he,Be):null;case L:return he.key===ct?pe(re,$,he,Be):null;case te:return ct=he._init,Re(re,$,ct(he._payload),Be)}if(O(he)||N(he))return ct!==null?null:Le(re,$,he,Be,null);Xa(re,he)}return null}function tt(re,$,he,Be,ct){if(typeof Be=="string"&&Be!==""||typeof Be=="number")return re=re.get(he)||null,H($,re,""+Be,ct);if(typeof Be=="object"&&Be!==null){switch(Be.$$typeof){case z:return re=re.get(Be.key===null?he:Be.key)||null,J($,re,Be,ct);case L:return re=re.get(Be.key===null?he:Be.key)||null,pe($,re,Be,ct);case te:var pt=Be._init;return tt(re,$,he,pt(Be._payload),ct)}if(O(Be)||N(Be))return re=re.get(he)||null,Le($,re,Be,ct,null);Xa($,Be)}return null}function at(re,$,he,Be){for(var ct=null,pt=null,mt=$,_t=$=0,yn=null;mt!==null&&_t<he.length;_t++){mt.index>_t?(yn=mt,mt=null):yn=mt.sibling;var kt=Re(re,mt,he[_t],Be);if(kt===null){mt===null&&(mt=yn);break}n&&mt&&kt.alternate===null&&i(re,mt),$=v(kt,$,_t),pt===null?ct=kt:pt.sibling=kt,pt=kt,mt=yn}if(_t===he.length)return a(re,mt),Qt&&ts(re,_t),ct;if(mt===null){for(;_t<he.length;_t++)mt=De(re,he[_t],Be),mt!==null&&($=v(mt,$,_t),pt===null?ct=mt:pt.sibling=mt,pt=mt);return Qt&&ts(re,_t),ct}for(mt=u(re,mt);_t<he.length;_t++)yn=tt(mt,re,_t,he[_t],Be),yn!==null&&(n&&yn.alternate!==null&&mt.delete(yn.key===null?_t:yn.key),$=v(yn,$,_t),pt===null?ct=yn:pt.sibling=yn,pt=yn);return n&&mt.forEach(function(Or){return i(re,Or)}),Qt&&ts(re,_t),ct}function lt(re,$,he,Be){var ct=N(he);if(typeof ct!="function")throw Error(t(150));if(he=ct.call(he),he==null)throw Error(t(151));for(var pt=ct=null,mt=$,_t=$=0,yn=null,kt=he.next();mt!==null&&!kt.done;_t++,kt=he.next()){mt.index>_t?(yn=mt,mt=null):yn=mt.sibling;var Or=Re(re,mt,kt.value,Be);if(Or===null){mt===null&&(mt=yn);break}n&&mt&&Or.alternate===null&&i(re,mt),$=v(Or,$,_t),pt===null?ct=Or:pt.sibling=Or,pt=Or,mt=yn}if(kt.done)return a(re,mt),Qt&&ts(re,_t),ct;if(mt===null){for(;!kt.done;_t++,kt=he.next())kt=De(re,kt.value,Be),kt!==null&&($=v(kt,$,_t),pt===null?ct=kt:pt.sibling=kt,pt=kt);return Qt&&ts(re,_t),ct}for(mt=u(re,mt);!kt.done;_t++,kt=he.next())kt=tt(mt,re,_t,kt.value,Be),kt!==null&&(n&&kt.alternate!==null&&mt.delete(kt.key===null?_t:kt.key),$=v(kt,$,_t),pt===null?ct=kt:pt.sibling=kt,pt=kt);return n&&mt.forEach(function(n_){return i(re,n_)}),Qt&&ts(re,_t),ct}function an(re,$,he,Be){if(typeof he=="object"&&he!==null&&he.type===k&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case z:e:{for(var ct=he.key,pt=$;pt!==null;){if(pt.key===ct){if(ct=he.type,ct===k){if(pt.tag===7){a(re,pt.sibling),$=p(pt,he.props.children),$.return=re,re=$;break e}}else if(pt.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===te&&cp(ct)===pt.type){a(re,pt.sibling),$=p(pt,he.props),$.ref=Ho(re,pt,he),$.return=re,re=$;break e}a(re,pt);break}else i(re,pt);pt=pt.sibling}he.type===k?($=cs(he.props.children,re.mode,Be,he.key),$.return=re,re=$):(Be=ml(he.type,he.key,he.props,null,re.mode,Be),Be.ref=Ho(re,$,he),Be.return=re,re=Be)}return C(re);case L:e:{for(pt=he.key;$!==null;){if($.key===pt)if($.tag===4&&$.stateNode.containerInfo===he.containerInfo&&$.stateNode.implementation===he.implementation){a(re,$.sibling),$=p($,he.children||[]),$.return=re,re=$;break e}else{a(re,$);break}else i(re,$);$=$.sibling}$=Ku(he,re.mode,Be),$.return=re,re=$}return C(re);case te:return pt=he._init,an(re,$,pt(he._payload),Be)}if(O(he))return at(re,$,he,Be);if(N(he))return lt(re,$,he,Be);Xa(re,he)}return typeof he=="string"&&he!==""||typeof he=="number"?(he=""+he,$!==null&&$.tag===6?(a(re,$.sibling),$=p($,he),$.return=re,re=$):(a(re,$),$=ju(he,re.mode,Be),$.return=re,re=$),C(re)):a(re,$)}return an}var Bs=up(!0),fp=up(!1),ja=Tr(null),Ka=null,zs=null,nu=null;function iu(){nu=zs=Ka=null}function ru(n){var i=ja.current;Yt(ja),n._currentValue=i}function su(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Hs(n,i){Ka=n,nu=zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Yn=!0),n.firstContext=null)}function pi(n){var i=n._currentValue;if(nu!==n)if(n={context:n,memoizedValue:i,next:null},zs===null){if(Ka===null)throw Error(t(308));zs=n,Ka.dependencies={lanes:0,firstContext:n}}else zs=zs.next=n;return i}var ns=null;function ou(n){ns===null?ns=[n]:ns.push(n)}function hp(n,i,a,u){var p=i.interleaved;return p===null?(a.next=a,ou(i)):(a.next=p.next,p.next=a),i.interleaved=a,sr(n,u)}function sr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Rr=!1;function au(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function or(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Pr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ut&2)!==0){var p=u.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),u.pending=i,sr(n,a)}return p=u.interleaved,p===null?(i.next=i,ou(u)):(i.next=p.next,p.next=i),u.interleaved=i,sr(n,a)}function qa(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,An(n,a)}}function pp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?p=v=C:v=v.next=C,a=a.next}while(a!==null);v===null?p=v=i:v=v.next=i}else p=v=i;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ya(n,i,a,u){var p=n.updateQueue;Rr=!1;var v=p.firstBaseUpdate,C=p.lastBaseUpdate,H=p.shared.pending;if(H!==null){p.shared.pending=null;var J=H,pe=J.next;J.next=null,C===null?v=pe:C.next=pe,C=J;var Le=n.alternate;Le!==null&&(Le=Le.updateQueue,H=Le.lastBaseUpdate,H!==C&&(H===null?Le.firstBaseUpdate=pe:H.next=pe,Le.lastBaseUpdate=J))}if(v!==null){var De=p.baseState;C=0,Le=pe=J=null,H=v;do{var Re=H.lane,tt=H.eventTime;if((u&Re)===Re){Le!==null&&(Le=Le.next={eventTime:tt,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var at=n,lt=H;switch(Re=i,tt=a,lt.tag){case 1:if(at=lt.payload,typeof at=="function"){De=at.call(tt,De,Re);break e}De=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=lt.payload,Re=typeof at=="function"?at.call(tt,De,Re):at,Re==null)break e;De=Y({},De,Re);break e;case 2:Rr=!0}}H.callback!==null&&H.lane!==0&&(n.flags|=64,Re=p.effects,Re===null?p.effects=[H]:Re.push(H))}else tt={eventTime:tt,lane:Re,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Le===null?(pe=Le=tt,J=De):Le=Le.next=tt,C|=Re;if(H=H.next,H===null){if(H=p.shared.pending,H===null)break;Re=H,H=Re.next,Re.next=null,p.lastBaseUpdate=Re,p.shared.pending=null}}while(!0);if(Le===null&&(J=De),p.baseState=J,p.firstBaseUpdate=pe,p.lastBaseUpdate=Le,i=p.shared.interleaved,i!==null){p=i;do C|=p.lane,p=p.next;while(p!==i)}else v===null&&(p.shared.lanes=0);ss|=C,n.lanes=C,n.memoizedState=De}}function mp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var Vo={},Vi=Tr(Vo),Go=Tr(Vo),Wo=Tr(Vo);function is(n){if(n===Vo)throw Error(t(174));return n}function lu(n,i){switch(Xt(Wo,i),Xt(Go,n),Xt(Vi,Vo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:w(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=w(i,n)}Yt(Vi),Xt(Vi,i)}function Vs(){Yt(Vi),Yt(Go),Yt(Wo)}function gp(n){is(Wo.current);var i=is(Vi.current),a=w(i,n.type);i!==a&&(Xt(Go,n),Xt(Vi,a))}function cu(n){Go.current===n&&(Yt(Vi),Yt(Go))}var Zt=Tr(0);function Qa(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var uu=[];function fu(){for(var n=0;n<uu.length;n++)uu[n]._workInProgressVersionPrimary=null;uu.length=0}var Ja=b.ReactCurrentDispatcher,hu=b.ReactCurrentBatchConfig,rs=0,$t=null,hn=null,xn=null,Za=!1,Xo=!1,jo=0,Ex=0;function Ln(){throw Error(t(321))}function du(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ti(n[a],i[a]))return!1;return!0}function pu(n,i,a,u,p,v){if(rs=v,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ja.current=n===null||n.memoizedState===null?bx:Rx,n=a(u,p),Xo){v=0;do{if(Xo=!1,jo=0,25<=v)throw Error(t(301));v+=1,xn=hn=null,i.updateQueue=null,Ja.current=Px,n=a(u,p)}while(Xo)}if(Ja.current=tl,i=hn!==null&&hn.next!==null,rs=0,xn=hn=$t=null,Za=!1,i)throw Error(t(300));return n}function mu(){var n=jo!==0;return jo=0,n}function Gi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?$t.memoizedState=xn=n:xn=xn.next=n,xn}function mi(){if(hn===null){var n=$t.alternate;n=n!==null?n.memoizedState:null}else n=hn.next;var i=xn===null?$t.memoizedState:xn.next;if(i!==null)xn=i,hn=n;else{if(n===null)throw Error(t(310));hn=n,n={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},xn===null?$t.memoizedState=xn=n:xn=xn.next=n}return xn}function Ko(n,i){return typeof i=="function"?i(n):i}function gu(n){var i=mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=hn,p=u.baseQueue,v=a.pending;if(v!==null){if(p!==null){var C=p.next;p.next=v.next,v.next=C}u.baseQueue=p=v,a.pending=null}if(p!==null){v=p.next,u=u.baseState;var H=C=null,J=null,pe=v;do{var Le=pe.lane;if((rs&Le)===Le)J!==null&&(J=J.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),u=pe.hasEagerState?pe.eagerState:n(u,pe.action);else{var De={lane:Le,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};J===null?(H=J=De,C=u):J=J.next=De,$t.lanes|=Le,ss|=Le}pe=pe.next}while(pe!==null&&pe!==v);J===null?C=u:J.next=H,Ti(u,i.memoizedState)||(Yn=!0),i.memoizedState=u,i.baseState=C,i.baseQueue=J,a.lastRenderedState=u}if(n=a.interleaved,n!==null){p=n;do v=p.lane,$t.lanes|=v,ss|=v,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function vu(n){var i=mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,p=a.pending,v=i.memoizedState;if(p!==null){a.pending=null;var C=p=p.next;do v=n(v,C.action),C=C.next;while(C!==p);Ti(v,i.memoizedState)||(Yn=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,u]}function vp(){}function xp(n,i){var a=$t,u=mi(),p=i(),v=!Ti(u.memoizedState,p);if(v&&(u.memoizedState=p,Yn=!0),u=u.queue,xu(Mp.bind(null,a,u,n),[n]),u.getSnapshot!==i||v||xn!==null&&xn.memoizedState.tag&1){if(a.flags|=2048,qo(9,yp.bind(null,a,u,p,i),void 0,null),_n===null)throw Error(t(349));(rs&30)!==0||_p(a,i,p)}return p}function _p(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function yp(n,i,a,u){i.value=a,i.getSnapshot=u,Sp(i)&&Ap(n)}function Mp(n,i,a){return a(function(){Sp(i)&&Ap(n)})}function Sp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ti(n,a)}catch{return!0}}function Ap(n){var i=sr(n,1);i!==null&&Li(i,n,1,-1)}function Ep(n){var i=Gi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:n},i.queue=n,n=n.dispatch=Cx.bind(null,$t,n),[i.memoizedState,n]}function qo(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function wp(){return mi().memoizedState}function $a(n,i,a,u){var p=Gi();$t.flags|=n,p.memoizedState=qo(1|i,a,void 0,u===void 0?null:u)}function el(n,i,a,u){var p=mi();u=u===void 0?null:u;var v=void 0;if(hn!==null){var C=hn.memoizedState;if(v=C.destroy,u!==null&&du(u,C.deps)){p.memoizedState=qo(i,a,v,u);return}}$t.flags|=n,p.memoizedState=qo(1|i,a,v,u)}function Tp(n,i){return $a(8390656,8,n,i)}function xu(n,i){return el(2048,8,n,i)}function Cp(n,i){return el(4,2,n,i)}function bp(n,i){return el(4,4,n,i)}function Rp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Pp(n,i,a){return a=a!=null?a.concat([n]):null,el(4,4,Rp.bind(null,i,n),a)}function _u(){}function Lp(n,i){var a=mi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&du(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Ip(n,i){var a=mi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&du(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Dp(n,i,a){return(rs&21)===0?(n.baseState&&(n.baseState=!1,Yn=!0),n.memoizedState=a):(Ti(a,i)||(a=Ze(),$t.lanes|=a,ss|=a,n.baseState=!0),i)}function wx(n,i){var a=Mt;Mt=a!==0&&4>a?a:4,n(!0);var u=hu.transition;hu.transition={};try{n(!1),i()}finally{Mt=a,hu.transition=u}}function Up(){return mi().memoizedState}function Tx(n,i,a){var u=Ur(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Np(n))Fp(i,a);else if(a=hp(n,i,a,u),a!==null){var p=Gn();Li(a,n,u,p),Op(a,i,u)}}function Cx(n,i,a){var u=Ur(n),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Np(n))Fp(i,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var C=i.lastRenderedState,H=v(C,a);if(p.hasEagerState=!0,p.eagerState=H,Ti(H,C)){var J=i.interleaved;J===null?(p.next=p,ou(i)):(p.next=J.next,J.next=p),i.interleaved=p;return}}catch{}finally{}a=hp(n,i,p,u),a!==null&&(p=Gn(),Li(a,n,u,p),Op(a,i,u))}}function Np(n){var i=n.alternate;return n===$t||i!==null&&i===$t}function Fp(n,i){Xo=Za=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Op(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,An(n,a)}}var tl={readContext:pi,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useInsertionEffect:Ln,useLayoutEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useMutableSource:Ln,useSyncExternalStore:Ln,useId:Ln,unstable_isNewReconciler:!1},bx={readContext:pi,useCallback:function(n,i){return Gi().memoizedState=[n,i===void 0?null:i],n},useContext:pi,useEffect:Tp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,$a(4194308,4,Rp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return $a(4194308,4,n,i)},useInsertionEffect:function(n,i){return $a(4,2,n,i)},useMemo:function(n,i){var a=Gi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Gi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Tx.bind(null,$t,n),[u.memoizedState,n]},useRef:function(n){var i=Gi();return n={current:n},i.memoizedState=n},useState:Ep,useDebugValue:_u,useDeferredValue:function(n){return Gi().memoizedState=n},useTransition:function(){var n=Ep(!1),i=n[0];return n=wx.bind(null,n[1]),Gi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=$t,p=Gi();if(Qt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),_n===null)throw Error(t(349));(rs&30)!==0||_p(u,i,a)}p.memoizedState=a;var v={value:a,getSnapshot:i};return p.queue=v,Tp(Mp.bind(null,u,v,n),[n]),u.flags|=2048,qo(9,yp.bind(null,u,v,a,i),void 0,null),a},useId:function(){var n=Gi(),i=_n.identifierPrefix;if(Qt){var a=rr,u=ir;a=(u&~(1<<32-Ne(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=jo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ex++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Rx={readContext:pi,useCallback:Lp,useContext:pi,useEffect:xu,useImperativeHandle:Pp,useInsertionEffect:Cp,useLayoutEffect:bp,useMemo:Ip,useReducer:gu,useRef:wp,useState:function(){return gu(Ko)},useDebugValue:_u,useDeferredValue:function(n){var i=mi();return Dp(i,hn.memoizedState,n)},useTransition:function(){var n=gu(Ko)[0],i=mi().memoizedState;return[n,i]},useMutableSource:vp,useSyncExternalStore:xp,useId:Up,unstable_isNewReconciler:!1},Px={readContext:pi,useCallback:Lp,useContext:pi,useEffect:xu,useImperativeHandle:Pp,useInsertionEffect:Cp,useLayoutEffect:bp,useMemo:Ip,useReducer:vu,useRef:wp,useState:function(){return vu(Ko)},useDebugValue:_u,useDeferredValue:function(n){var i=mi();return hn===null?i.memoizedState=n:Dp(i,hn.memoizedState,n)},useTransition:function(){var n=vu(Ko)[0],i=mi().memoizedState;return[n,i]},useMutableSource:vp,useSyncExternalStore:xp,useId:Up,unstable_isNewReconciler:!1};function bi(n,i){if(n&&n.defaultProps){i=Y({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function yu(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:Y({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var nl={isMounted:function(n){return(n=n._reactInternals)?cn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Gn(),p=Ur(n),v=or(u,p);v.payload=i,a!=null&&(v.callback=a),i=Pr(n,v,p),i!==null&&(Li(i,n,p,u),qa(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Gn(),p=Ur(n),v=or(u,p);v.tag=1,v.payload=i,a!=null&&(v.callback=a),i=Pr(n,v,p),i!==null&&(Li(i,n,p,u),qa(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Gn(),u=Ur(n),p=or(a,u);p.tag=2,i!=null&&(p.callback=i),i=Pr(n,p,u),i!==null&&(Li(i,n,u,a),qa(i,n,u))}};function kp(n,i,a,u,p,v,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,C):i.prototype&&i.prototype.isPureReactComponent?!Uo(a,u)||!Uo(p,v):!0}function Bp(n,i,a){var u=!1,p=Cr,v=i.contextType;return typeof v=="object"&&v!==null?v=pi(v):(p=qn(i)?$r:Pn.current,u=i.contextTypes,v=(u=u!=null)?Ns(n,p):Cr),i=new i(a,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=nl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),i}function zp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&nl.enqueueReplaceState(i,i.state,null)}function Mu(n,i,a,u){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},au(n);var v=i.contextType;typeof v=="object"&&v!==null?p.context=pi(v):(v=qn(i)?$r:Pn.current,p.context=Ns(n,v)),p.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(yu(n,i,v,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&nl.enqueueReplaceState(p,p.state,null),Ya(n,a,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,i){try{var a="",u=i;do a+=Me(u),u=u.return;while(u);var p=a}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:p,digest:null}}function Su(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Au(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Lx=typeof WeakMap=="function"?WeakMap:Map;function Hp(n,i,a){a=or(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){cl||(cl=!0,ku=u),Au(n,i)},a}function Vp(n,i,a){a=or(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=i.value;a.payload=function(){return u(p)},a.callback=function(){Au(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Au(n,i),typeof u!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function Gp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Lx;var p=new Set;u.set(i,p)}else p=u.get(i),p===void 0&&(p=new Set,u.set(i,p));p.has(a)||(p.add(a),n=Xx.bind(null,n,i,a),i.then(n,n))}function Wp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Xp(n,i,a,u,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=or(-1,1),i.tag=2,Pr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Ix=b.ReactCurrentOwner,Yn=!1;function Vn(n,i,a,u){i.child=n===null?fp(i,null,a,u):Bs(i,n.child,a,u)}function jp(n,i,a,u,p){a=a.render;var v=i.ref;return Hs(i,p),u=pu(n,i,a,u,v,p),a=mu(),n!==null&&!Yn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,ar(n,i,p)):(Qt&&a&&Jc(i),i.flags|=1,Vn(n,i,u,p),i.child)}function Kp(n,i,a,u,p){if(n===null){var v=a.type;return typeof v=="function"&&!Xu(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=v,qp(n,i,v,u,p)):(n=ml(a.type,null,u,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&p)===0){var C=v.memoizedProps;if(a=a.compare,a=a!==null?a:Uo,a(C,u)&&n.ref===i.ref)return ar(n,i,p)}return i.flags|=1,n=Fr(v,u),n.ref=i.ref,n.return=i,i.child=n}function qp(n,i,a,u,p){if(n!==null){var v=n.memoizedProps;if(Uo(v,u)&&n.ref===i.ref)if(Yn=!1,i.pendingProps=u=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Yn=!0);else return i.lanes=n.lanes,ar(n,i,p)}return Eu(n,i,a,u,p)}function Yp(n,i,a){var u=i.pendingProps,p=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(Xs,oi),oi|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Xt(Xs,oi),oi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:a,Xt(Xs,oi),oi|=u}else v!==null?(u=v.baseLanes|a,i.memoizedState=null):u=a,Xt(Xs,oi),oi|=u;return Vn(n,i,p,a),i.child}function Qp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Eu(n,i,a,u,p){var v=qn(a)?$r:Pn.current;return v=Ns(i,v),Hs(i,p),a=pu(n,i,a,u,v,p),u=mu(),n!==null&&!Yn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,ar(n,i,p)):(Qt&&u&&Jc(i),i.flags|=1,Vn(n,i,a,p),i.child)}function Jp(n,i,a,u,p){if(qn(a)){var v=!0;za(i)}else v=!1;if(Hs(i,p),i.stateNode===null)rl(n,i),Bp(i,a,u),Mu(i,a,u,p),u=!0;else if(n===null){var C=i.stateNode,H=i.memoizedProps;C.props=H;var J=C.context,pe=a.contextType;typeof pe=="object"&&pe!==null?pe=pi(pe):(pe=qn(a)?$r:Pn.current,pe=Ns(i,pe));var Le=a.getDerivedStateFromProps,De=typeof Le=="function"||typeof C.getSnapshotBeforeUpdate=="function";De||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(H!==u||J!==pe)&&zp(i,C,u,pe),Rr=!1;var Re=i.memoizedState;C.state=Re,Ya(i,u,C,p),J=i.memoizedState,H!==u||Re!==J||Kn.current||Rr?(typeof Le=="function"&&(yu(i,a,Le,u),J=i.memoizedState),(H=Rr||kp(i,a,H,u,Re,J,pe))?(De||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=J),C.props=u,C.state=J,C.context=pe,u=H):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{C=i.stateNode,dp(n,i),H=i.memoizedProps,pe=i.type===i.elementType?H:bi(i.type,H),C.props=pe,De=i.pendingProps,Re=C.context,J=a.contextType,typeof J=="object"&&J!==null?J=pi(J):(J=qn(a)?$r:Pn.current,J=Ns(i,J));var tt=a.getDerivedStateFromProps;(Le=typeof tt=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(H!==De||Re!==J)&&zp(i,C,u,J),Rr=!1,Re=i.memoizedState,C.state=Re,Ya(i,u,C,p);var at=i.memoizedState;H!==De||Re!==at||Kn.current||Rr?(typeof tt=="function"&&(yu(i,a,tt,u),at=i.memoizedState),(pe=Rr||kp(i,a,pe,u,Re,at,J)||!1)?(Le||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(u,at,J),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(u,at,J)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||H===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=at),C.props=u,C.state=at,C.context=J,u=pe):(typeof C.componentDidUpdate!="function"||H===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),u=!1)}return wu(n,i,a,u,v,p)}function wu(n,i,a,u,p,v){Qp(n,i);var C=(i.flags&128)!==0;if(!u&&!C)return p&&np(i,a,!1),ar(n,i,v);u=i.stateNode,Ix.current=i;var H=C&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&C?(i.child=Bs(i,n.child,null,v),i.child=Bs(i,null,H,v)):Vn(n,i,H,v),i.memoizedState=u.state,p&&np(i,a,!0),i.child}function Zp(n){var i=n.stateNode;i.pendingContext?ep(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ep(n,i.context,!1),lu(n,i.containerInfo)}function $p(n,i,a,u,p){return ks(),tu(p),i.flags|=256,Vn(n,i,a,u),i.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function Cu(n){return{baseLanes:n,cachePool:null,transitions:null}}function em(n,i,a){var u=i.pendingProps,p=Zt.current,v=!1,C=(i.flags&128)!==0,H;if((H=C)||(H=n!==null&&n.memoizedState===null?!1:(p&2)!==0),H?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Xt(Zt,p&1),n===null)return eu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=u.children,n=u.fallback,v?(u=i.mode,v=i.child,C={mode:"hidden",children:C},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=C):v=gl(C,u,0,null),n=cs(n,u,a,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=Cu(a),i.memoizedState=Tu,n):bu(i,C));if(p=n.memoizedState,p!==null&&(H=p.dehydrated,H!==null))return Dx(n,i,C,u,H,p,a);if(v){v=u.fallback,C=i.mode,p=n.child,H=p.sibling;var J={mode:"hidden",children:u.children};return(C&1)===0&&i.child!==p?(u=i.child,u.childLanes=0,u.pendingProps=J,i.deletions=null):(u=Fr(p,J),u.subtreeFlags=p.subtreeFlags&14680064),H!==null?v=Fr(H,v):(v=cs(v,C,a,null),v.flags|=2),v.return=i,u.return=i,u.sibling=v,i.child=u,u=v,v=i.child,C=n.child.memoizedState,C=C===null?Cu(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},v.memoizedState=C,v.childLanes=n.childLanes&~a,i.memoizedState=Tu,u}return v=n.child,n=v.sibling,u=Fr(v,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function bu(n,i){return i=gl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function il(n,i,a,u){return u!==null&&tu(u),Bs(i,n.child,null,a),n=bu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Dx(n,i,a,u,p,v,C){if(a)return i.flags&256?(i.flags&=-257,u=Su(Error(t(422))),il(n,i,C,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=u.fallback,p=i.mode,u=gl({mode:"visible",children:u.children},p,0,null),v=cs(v,p,C,null),v.flags|=2,u.return=i,v.return=i,u.sibling=v,i.child=u,(i.mode&1)!==0&&Bs(i,n.child,null,C),i.child.memoizedState=Cu(C),i.memoizedState=Tu,v);if((i.mode&1)===0)return il(n,i,C,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var H=u.dgst;return u=H,v=Error(t(419)),u=Su(v,u,void 0),il(n,i,C,u)}if(H=(C&n.childLanes)!==0,Yn||H){if(u=_n,u!==null){switch(C&-C){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|C))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,sr(n,p),Li(u,n,p,-1))}return Wu(),u=Su(Error(t(421))),il(n,i,C,u)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=jx.bind(null,n),p._reactRetry=i,null):(n=v.treeContext,si=wr(p.nextSibling),ri=i,Qt=!0,Ci=null,n!==null&&(hi[di++]=ir,hi[di++]=rr,hi[di++]=es,ir=n.id,rr=n.overflow,es=i),i=bu(i,u.children),i.flags|=4096,i)}function tm(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),su(n.return,i,a)}function Ru(n,i,a,u,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=a,v.tailMode=p)}function nm(n,i,a){var u=i.pendingProps,p=u.revealOrder,v=u.tail;if(Vn(n,i,u.children,a),u=Zt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&tm(n,a,i);else if(n.tag===19)tm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Xt(Zt,u),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&Qa(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),Ru(i,!1,p,a,v);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&Qa(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Ru(i,!0,a,null,v);break;case"together":Ru(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function rl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ar(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ss|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Fr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Fr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Ux(n,i,a){switch(i.tag){case 3:Zp(i),ks();break;case 5:gp(i);break;case 1:qn(i.type)&&za(i);break;case 4:lu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,p=i.memoizedProps.value;Xt(ja,u._currentValue),u._currentValue=p;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Xt(Zt,Zt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?em(n,i,a):(Xt(Zt,Zt.current&1),n=ar(n,i,a),n!==null?n.sibling:null);Xt(Zt,Zt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return nm(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Xt(Zt,Zt.current),u)break;return null;case 22:case 23:return i.lanes=0,Yp(n,i,a)}return ar(n,i,a)}var im,Pu,rm,sm;im=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Pu=function(){},rm=function(n,i,a,u){var p=n.memoizedProps;if(p!==u){n=i.stateNode,is(Vi.current);var v=null;switch(a){case"input":p=_e(n,p),u=_e(n,u),v=[];break;case"select":p=Y({},p,{value:void 0}),u=Y({},u,{value:void 0}),v=[];break;case"textarea":p=it(n,p),u=it(n,u),v=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Oa)}Ge(a,u);var C;a=null;for(pe in p)if(!u.hasOwnProperty(pe)&&p.hasOwnProperty(pe)&&p[pe]!=null)if(pe==="style"){var H=p[pe];for(C in H)H.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(o.hasOwnProperty(pe)?v||(v=[]):(v=v||[]).push(pe,null));for(pe in u){var J=u[pe];if(H=p!=null?p[pe]:void 0,u.hasOwnProperty(pe)&&J!==H&&(J!=null||H!=null))if(pe==="style")if(H){for(C in H)!H.hasOwnProperty(C)||J&&J.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in J)J.hasOwnProperty(C)&&H[C]!==J[C]&&(a||(a={}),a[C]=J[C])}else a||(v||(v=[]),v.push(pe,a)),a=J;else pe==="dangerouslySetInnerHTML"?(J=J?J.__html:void 0,H=H?H.__html:void 0,J!=null&&H!==J&&(v=v||[]).push(pe,J)):pe==="children"?typeof J!="string"&&typeof J!="number"||(v=v||[]).push(pe,""+J):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(o.hasOwnProperty(pe)?(J!=null&&pe==="onScroll"&&qt("scroll",n),v||H===J||(v=[])):(v=v||[]).push(pe,J))}a&&(v=v||[]).push("style",a);var pe=v;(i.updateQueue=pe)&&(i.flags|=4)}},sm=function(n,i,a,u){a!==u&&(i.flags|=4)};function Yo(n,i){if(!Qt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function In(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Nx(n,i,a){var u=i.pendingProps;switch(Zc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(i),null;case 1:return qn(i.type)&&Ba(),In(i),null;case 3:return u=i.stateNode,Vs(),Yt(Kn),Yt(Pn),fu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Wa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ci!==null&&(Hu(Ci),Ci=null))),Pu(n,i),In(i),null;case 5:cu(i);var p=is(Wo.current);if(a=i.type,n!==null&&i.stateNode!=null)rm(n,i,a,u,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return In(i),null}if(n=is(Vi.current),Wa(i)){u=i.stateNode,a=i.type;var v=i.memoizedProps;switch(u[Hi]=i,u[Bo]=v,n=(i.mode&1)!==0,a){case"dialog":qt("cancel",u),qt("close",u);break;case"iframe":case"object":case"embed":qt("load",u);break;case"video":case"audio":for(p=0;p<Fo.length;p++)qt(Fo[p],u);break;case"source":qt("error",u);break;case"img":case"image":case"link":qt("error",u),qt("load",u);break;case"details":qt("toggle",u);break;case"input":je(u,v),qt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},qt("invalid",u);break;case"textarea":Et(u,v),qt("invalid",u)}Ge(a,v),p=null;for(var C in v)if(v.hasOwnProperty(C)){var H=v[C];C==="children"?typeof H=="string"?u.textContent!==H&&(v.suppressHydrationWarning!==!0&&Fa(u.textContent,H,n),p=["children",H]):typeof H=="number"&&u.textContent!==""+H&&(v.suppressHydrationWarning!==!0&&Fa(u.textContent,H,n),p=["children",""+H]):o.hasOwnProperty(C)&&H!=null&&C==="onScroll"&&qt("scroll",u)}switch(a){case"input":ge(u),Je(u,v,!0);break;case"textarea":ge(u),Tt(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=Oa)}u=p,i.updateQueue=u,u!==null&&(i.flags|=4)}else{C=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=I(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=C.createElement(a,{is:u.is}):(n=C.createElement(a),a==="select"&&(C=n,u.multiple?C.multiple=!0:u.size&&(C.size=u.size))):n=C.createElementNS(n,a),n[Hi]=i,n[Bo]=u,im(n,i,!1,!1),i.stateNode=n;e:{switch(C=Oe(a,u),a){case"dialog":qt("cancel",n),qt("close",n),p=u;break;case"iframe":case"object":case"embed":qt("load",n),p=u;break;case"video":case"audio":for(p=0;p<Fo.length;p++)qt(Fo[p],n);p=u;break;case"source":qt("error",n),p=u;break;case"img":case"image":case"link":qt("error",n),qt("load",n),p=u;break;case"details":qt("toggle",n),p=u;break;case"input":je(n,u),p=_e(n,u),qt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=Y({},u,{value:void 0}),qt("invalid",n);break;case"textarea":Et(n,u),p=it(n,u),qt("invalid",n);break;default:p=u}Ge(a,p),H=p;for(v in H)if(H.hasOwnProperty(v)){var J=H[v];v==="style"?xe(n,J):v==="dangerouslySetInnerHTML"?(J=J?J.__html:void 0,J!=null&&me(n,J)):v==="children"?typeof J=="string"?(a!=="textarea"||J!=="")&&ve(n,J):typeof J=="number"&&ve(n,""+J):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?J!=null&&v==="onScroll"&&qt("scroll",n):J!=null&&P(n,v,J,C))}switch(a){case"input":ge(n),Je(n,u,!1);break;case"textarea":ge(n),Tt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+se(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?et(n,!!u.multiple,v,!1):u.defaultValue!=null&&et(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Oa)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return In(i),null;case 6:if(n&&i.stateNode!=null)sm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=is(Wo.current),is(Vi.current),Wa(i)){if(u=i.stateNode,a=i.memoizedProps,u[Hi]=i,(v=u.nodeValue!==a)&&(n=ri,n!==null))switch(n.tag){case 3:Fa(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fa(u.nodeValue,a,(n.mode&1)!==0)}v&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Hi]=i,i.stateNode=u}return In(i),null;case 13:if(Yt(Zt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qt&&si!==null&&(i.mode&1)!==0&&(i.flags&128)===0)lp(),ks(),i.flags|=98560,v=!1;else if(v=Wa(i),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Hi]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;In(i),v=!1}else Ci!==null&&(Hu(Ci),Ci=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Zt.current&1)!==0?dn===0&&(dn=3):Wu())),i.updateQueue!==null&&(i.flags|=4),In(i),null);case 4:return Vs(),Pu(n,i),n===null&&Oo(i.stateNode.containerInfo),In(i),null;case 10:return ru(i.type._context),In(i),null;case 17:return qn(i.type)&&Ba(),In(i),null;case 19:if(Yt(Zt),v=i.memoizedState,v===null)return In(i),null;if(u=(i.flags&128)!==0,C=v.rendering,C===null)if(u)Yo(v,!1);else{if(dn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=Qa(n),C!==null){for(i.flags|=128,Yo(v,!1),u=C.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)v=a,n=u,v.flags&=14680066,C=v.alternate,C===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=C.childLanes,v.lanes=C.lanes,v.child=C.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=C.memoizedProps,v.memoizedState=C.memoizedState,v.updateQueue=C.updateQueue,v.type=C.type,n=C.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Xt(Zt,Zt.current&1|2),i.child}n=n.sibling}v.tail!==null&&jt()>js&&(i.flags|=128,u=!0,Yo(v,!1),i.lanes=4194304)}else{if(!u)if(n=Qa(C),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Yo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!C.alternate&&!Qt)return In(i),null}else 2*jt()-v.renderingStartTime>js&&a!==1073741824&&(i.flags|=128,u=!0,Yo(v,!1),i.lanes=4194304);v.isBackwards?(C.sibling=i.child,i.child=C):(a=v.last,a!==null?a.sibling=C:i.child=C,v.last=C)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=jt(),i.sibling=null,a=Zt.current,Xt(Zt,u?a&1|2:a&1),i):(In(i),null);case 22:case 23:return Gu(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(oi&1073741824)!==0&&(In(i),i.subtreeFlags&6&&(i.flags|=8192)):In(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Fx(n,i){switch(Zc(i),i.tag){case 1:return qn(i.type)&&Ba(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Vs(),Yt(Kn),Yt(Pn),fu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return cu(i),null;case 13:if(Yt(Zt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ks()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Yt(Zt),null;case 4:return Vs(),null;case 10:return ru(i.type._context),null;case 22:case 23:return Gu(),null;case 24:return null;default:return null}}var sl=!1,Dn=!1,Ox=typeof WeakSet=="function"?WeakSet:Set,st=null;function Ws(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){nn(n,i,u)}else a.current=null}function Lu(n,i,a){try{a()}catch(u){nn(n,i,u)}}var om=!1;function kx(n,i){if(Gc=wa,n=kd(),Nc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var C=0,H=-1,J=-1,pe=0,Le=0,De=n,Re=null;t:for(;;){for(var tt;De!==a||p!==0&&De.nodeType!==3||(H=C+p),De!==v||u!==0&&De.nodeType!==3||(J=C+u),De.nodeType===3&&(C+=De.nodeValue.length),(tt=De.firstChild)!==null;)Re=De,De=tt;for(;;){if(De===n)break t;if(Re===a&&++pe===p&&(H=C),Re===v&&++Le===u&&(J=C),(tt=De.nextSibling)!==null)break;De=Re,Re=De.parentNode}De=tt}a=H===-1||J===-1?null:{start:H,end:J}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wc={focusedElem:n,selectionRange:a},wa=!1,st=i;st!==null;)if(i=st,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,st=n;else for(;st!==null;){i=st;try{var at=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(at!==null){var lt=at.memoizedProps,an=at.memoizedState,re=i.stateNode,$=re.getSnapshotBeforeUpdate(i.elementType===i.type?lt:bi(i.type,lt),an);re.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var he=i.stateNode.containerInfo;he.nodeType===1?he.textContent="":he.nodeType===9&&he.documentElement&&he.removeChild(he.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Be){nn(i,i.return,Be)}if(n=i.sibling,n!==null){n.return=i.return,st=n;break}st=i.return}return at=om,om=!1,at}function Qo(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Lu(i,a,v)}p=p.next}while(p!==u)}}function ol(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Iu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function am(n){var i=n.alternate;i!==null&&(n.alternate=null,am(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Hi],delete i[Bo],delete i[qc],delete i[yx],delete i[Mx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function lm(n){return n.tag===5||n.tag===3||n.tag===4}function cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||lm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Du(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Oa));else if(u!==4&&(n=n.child,n!==null))for(Du(n,i,a),n=n.sibling;n!==null;)Du(n,i,a),n=n.sibling}function Uu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Uu(n,i,a),n=n.sibling;n!==null;)Uu(n,i,a),n=n.sibling}var En=null,Ri=!1;function Lr(n,i,a){for(a=a.child;a!==null;)um(n,i,a),a=a.sibling}function um(n,i,a){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 5:Dn||Ws(a,i);case 6:var u=En,p=Ri;En=null,Lr(n,i,a),En=u,Ri=p,En!==null&&(Ri?(n=En,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):En.removeChild(a.stateNode));break;case 18:En!==null&&(Ri?(n=En,a=a.stateNode,n.nodeType===8?Kc(n.parentNode,a):n.nodeType===1&&Kc(n,a),bo(n)):Kc(En,a.stateNode));break;case 4:u=En,p=Ri,En=a.stateNode.containerInfo,Ri=!0,Lr(n,i,a),En=u,Ri=p;break;case 0:case 11:case 14:case 15:if(!Dn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var v=p,C=v.destroy;v=v.tag,C!==void 0&&((v&2)!==0||(v&4)!==0)&&Lu(a,i,C),p=p.next}while(p!==u)}Lr(n,i,a);break;case 1:if(!Dn&&(Ws(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(H){nn(a,i,H)}Lr(n,i,a);break;case 21:Lr(n,i,a);break;case 22:a.mode&1?(Dn=(u=Dn)||a.memoizedState!==null,Lr(n,i,a),Dn=u):Lr(n,i,a);break;default:Lr(n,i,a)}}function fm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Ox),i.forEach(function(u){var p=Kx.bind(null,n,u);a.has(u)||(a.add(u),u.then(p,p))})}}function Pi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var v=n,C=i,H=C;e:for(;H!==null;){switch(H.tag){case 5:En=H.stateNode,Ri=!1;break e;case 3:En=H.stateNode.containerInfo,Ri=!0;break e;case 4:En=H.stateNode.containerInfo,Ri=!0;break e}H=H.return}if(En===null)throw Error(t(160));um(v,C,p),En=null,Ri=!1;var J=p.alternate;J!==null&&(J.return=null),p.return=null}catch(pe){nn(p,i,pe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)hm(i,n),i=i.sibling}function hm(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Pi(i,n),Wi(n),u&4){try{Qo(3,n,n.return),ol(3,n)}catch(lt){nn(n,n.return,lt)}try{Qo(5,n,n.return)}catch(lt){nn(n,n.return,lt)}}break;case 1:Pi(i,n),Wi(n),u&512&&a!==null&&Ws(a,a.return);break;case 5:if(Pi(i,n),Wi(n),u&512&&a!==null&&Ws(a,a.return),n.flags&32){var p=n.stateNode;try{ve(p,"")}catch(lt){nn(n,n.return,lt)}}if(u&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,C=a!==null?a.memoizedProps:v,H=n.type,J=n.updateQueue;if(n.updateQueue=null,J!==null)try{H==="input"&&v.type==="radio"&&v.name!=null&&Ke(p,v),Oe(H,C);var pe=Oe(H,v);for(C=0;C<J.length;C+=2){var Le=J[C],De=J[C+1];Le==="style"?xe(p,De):Le==="dangerouslySetInnerHTML"?me(p,De):Le==="children"?ve(p,De):P(p,Le,De,pe)}switch(H){case"input":We(p,v);break;case"textarea":Ce(p,v);break;case"select":var Re=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var tt=v.value;tt!=null?et(p,!!v.multiple,tt,!1):Re!==!!v.multiple&&(v.defaultValue!=null?et(p,!!v.multiple,v.defaultValue,!0):et(p,!!v.multiple,v.multiple?[]:"",!1))}p[Bo]=v}catch(lt){nn(n,n.return,lt)}}break;case 6:if(Pi(i,n),Wi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(lt){nn(n,n.return,lt)}}break;case 3:if(Pi(i,n),Wi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{bo(i.containerInfo)}catch(lt){nn(n,n.return,lt)}break;case 4:Pi(i,n),Wi(n);break;case 13:Pi(i,n),Wi(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Ou=jt())),u&4&&fm(n);break;case 22:if(Le=a!==null&&a.memoizedState!==null,n.mode&1?(Dn=(pe=Dn)||Le,Pi(i,n),Dn=pe):Pi(i,n),Wi(n),u&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!Le&&(n.mode&1)!==0)for(st=n,Le=n.child;Le!==null;){for(De=st=Le;st!==null;){switch(Re=st,tt=Re.child,Re.tag){case 0:case 11:case 14:case 15:Qo(4,Re,Re.return);break;case 1:Ws(Re,Re.return);var at=Re.stateNode;if(typeof at.componentWillUnmount=="function"){u=Re,a=Re.return;try{i=u,at.props=i.memoizedProps,at.state=i.memoizedState,at.componentWillUnmount()}catch(lt){nn(u,a,lt)}}break;case 5:Ws(Re,Re.return);break;case 22:if(Re.memoizedState!==null){mm(De);continue}}tt!==null?(tt.return=Re,st=tt):mm(De)}Le=Le.sibling}e:for(Le=null,De=n;;){if(De.tag===5){if(Le===null){Le=De;try{p=De.stateNode,pe?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(H=De.stateNode,J=De.memoizedProps.style,C=J!=null&&J.hasOwnProperty("display")?J.display:null,H.style.display=de("display",C))}catch(lt){nn(n,n.return,lt)}}}else if(De.tag===6){if(Le===null)try{De.stateNode.nodeValue=pe?"":De.memoizedProps}catch(lt){nn(n,n.return,lt)}}else if((De.tag!==22&&De.tag!==23||De.memoizedState===null||De===n)&&De.child!==null){De.child.return=De,De=De.child;continue}if(De===n)break e;for(;De.sibling===null;){if(De.return===null||De.return===n)break e;Le===De&&(Le=null),De=De.return}Le===De&&(Le=null),De.sibling.return=De.return,De=De.sibling}}break;case 19:Pi(i,n),Wi(n),u&4&&fm(n);break;case 21:break;default:Pi(i,n),Wi(n)}}function Wi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(lm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(ve(p,""),u.flags&=-33);var v=cm(n);Uu(n,v,p);break;case 3:case 4:var C=u.stateNode.containerInfo,H=cm(n);Du(n,H,C);break;default:throw Error(t(161))}}catch(J){nn(n,n.return,J)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Bx(n,i,a){st=n,dm(n)}function dm(n,i,a){for(var u=(n.mode&1)!==0;st!==null;){var p=st,v=p.child;if(p.tag===22&&u){var C=p.memoizedState!==null||sl;if(!C){var H=p.alternate,J=H!==null&&H.memoizedState!==null||Dn;H=sl;var pe=Dn;if(sl=C,(Dn=J)&&!pe)for(st=p;st!==null;)C=st,J=C.child,C.tag===22&&C.memoizedState!==null?gm(p):J!==null?(J.return=C,st=J):gm(p);for(;v!==null;)st=v,dm(v),v=v.sibling;st=p,sl=H,Dn=pe}pm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,st=v):pm(n)}}function pm(n){for(;st!==null;){var i=st;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Dn||ol(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Dn)if(a===null)u.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:bi(i.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&mp(i,v,u);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}mp(i,C,a)}break;case 5:var H=i.stateNode;if(a===null&&i.flags&4){a=H;var J=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":J.autoFocus&&a.focus();break;case"img":J.src&&(a.src=J.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var pe=i.alternate;if(pe!==null){var Le=pe.memoizedState;if(Le!==null){var De=Le.dehydrated;De!==null&&bo(De)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dn||i.flags&512&&Iu(i)}catch(Re){nn(i,i.return,Re)}}if(i===n){st=null;break}if(a=i.sibling,a!==null){a.return=i.return,st=a;break}st=i.return}}function mm(n){for(;st!==null;){var i=st;if(i===n){st=null;break}var a=i.sibling;if(a!==null){a.return=i.return,st=a;break}st=i.return}}function gm(n){for(;st!==null;){var i=st;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ol(4,i)}catch(J){nn(i,a,J)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var p=i.return;try{u.componentDidMount()}catch(J){nn(i,p,J)}}var v=i.return;try{Iu(i)}catch(J){nn(i,v,J)}break;case 5:var C=i.return;try{Iu(i)}catch(J){nn(i,C,J)}}}catch(J){nn(i,i.return,J)}if(i===n){st=null;break}var H=i.sibling;if(H!==null){H.return=i.return,st=H;break}st=i.return}}var zx=Math.ceil,al=b.ReactCurrentDispatcher,Nu=b.ReactCurrentOwner,gi=b.ReactCurrentBatchConfig,Ut=0,_n=null,un=null,wn=0,oi=0,Xs=Tr(0),dn=0,Jo=null,ss=0,ll=0,Fu=0,Zo=null,Qn=null,Ou=0,js=1/0,lr=null,cl=!1,ku=null,Ir=null,ul=!1,Dr=null,fl=0,$o=0,Bu=null,hl=-1,dl=0;function Gn(){return(Ut&6)!==0?jt():hl!==-1?hl:hl=jt()}function Ur(n){return(n.mode&1)===0?1:(Ut&2)!==0&&wn!==0?wn&-wn:Ax.transition!==null?(dl===0&&(dl=Ze()),dl):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:xd(n.type)),n)}function Li(n,i,a,u){if(50<$o)throw $o=0,Bu=null,Error(t(185));St(n,a,u),((Ut&2)===0||n!==_n)&&(n===_n&&((Ut&2)===0&&(ll|=a),dn===4&&Nr(n,wn)),Jn(n,u),a===1&&Ut===0&&(i.mode&1)===0&&(js=jt()+500,Ha&&br()))}function Jn(n,i){var a=n.callbackNode;zt(n,i);var u=Bt(n,n===_n?wn:0);if(u===0)a!==null&&Qr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Qr(a),i===1)n.tag===0?Sx(xm.bind(null,n)):ip(xm.bind(null,n)),xx(function(){(Ut&6)===0&&br()}),a=null;else{switch(ni(u)){case 1:a=sn;break;case 4:a=R;break;case 16:a=ee;break;case 536870912:a=le;break;default:a=ee}a=Tm(a,vm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function vm(n,i){if(hl=-1,dl=0,(Ut&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ks()&&n.callbackNode!==a)return null;var u=Bt(n,n===_n?wn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=pl(n,u);else{i=u;var p=Ut;Ut|=2;var v=ym();(_n!==n||wn!==i)&&(lr=null,js=jt()+500,as(n,i));do try{Gx();break}catch(H){_m(n,H)}while(!0);iu(),al.current=v,Ut=p,un!==null?i=0:(_n=null,wn=0,i=dn)}if(i!==0){if(i===2&&(p=Jt(n),p!==0&&(u=p,i=zu(n,p))),i===1)throw a=Jo,as(n,0),Nr(n,u),Jn(n,jt()),a;if(i===6)Nr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!Hx(p)&&(i=pl(n,u),i===2&&(v=Jt(n),v!==0&&(u=v,i=zu(n,v))),i===1))throw a=Jo,as(n,0),Nr(n,u),Jn(n,jt()),a;switch(n.finishedWork=p,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:ls(n,Qn,lr);break;case 3:if(Nr(n,u),(u&130023424)===u&&(i=Ou+500-jt(),10<i)){if(Bt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Gn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=jc(ls.bind(null,n,Qn,lr),i);break}ls(n,Qn,lr);break;case 4:if(Nr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,p=-1;0<u;){var C=31-Ne(u);v=1<<C,C=i[C],C>p&&(p=C),u&=~v}if(u=p,u=jt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*zx(u/1960))-u,10<u){n.timeoutHandle=jc(ls.bind(null,n,Qn,lr),u);break}ls(n,Qn,lr);break;case 5:ls(n,Qn,lr);break;default:throw Error(t(329))}}}return Jn(n,jt()),n.callbackNode===a?vm.bind(null,n):null}function zu(n,i){var a=Zo;return n.current.memoizedState.isDehydrated&&(as(n,i).flags|=256),n=pl(n,i),n!==2&&(i=Qn,Qn=a,i!==null&&Hu(i)),n}function Hu(n){Qn===null?Qn=n:Qn.push.apply(Qn,n)}function Hx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],v=p.getSnapshot;p=p.value;try{if(!Ti(v(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Nr(n,i){for(i&=~Fu,i&=~ll,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ne(i),u=1<<a;n[a]=-1,i&=~u}}function xm(n){if((Ut&6)!==0)throw Error(t(327));Ks();var i=Bt(n,0);if((i&1)===0)return Jn(n,jt()),null;var a=pl(n,i);if(n.tag!==0&&a===2){var u=Jt(n);u!==0&&(i=u,a=zu(n,u))}if(a===1)throw a=Jo,as(n,0),Nr(n,i),Jn(n,jt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ls(n,Qn,lr),Jn(n,jt()),null}function Vu(n,i){var a=Ut;Ut|=1;try{return n(i)}finally{Ut=a,Ut===0&&(js=jt()+500,Ha&&br())}}function os(n){Dr!==null&&Dr.tag===0&&(Ut&6)===0&&Ks();var i=Ut;Ut|=1;var a=gi.transition,u=Mt;try{if(gi.transition=null,Mt=1,n)return n()}finally{Mt=u,gi.transition=a,Ut=i,(Ut&6)===0&&br()}}function Gu(){oi=Xs.current,Yt(Xs)}function as(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,vx(a)),un!==null)for(a=un.return;a!==null;){var u=a;switch(Zc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ba();break;case 3:Vs(),Yt(Kn),Yt(Pn),fu();break;case 5:cu(u);break;case 4:Vs();break;case 13:Yt(Zt);break;case 19:Yt(Zt);break;case 10:ru(u.type._context);break;case 22:case 23:Gu()}a=a.return}if(_n=n,un=n=Fr(n.current,null),wn=oi=i,dn=0,Jo=null,Fu=ll=ss=0,Qn=Zo=null,ns!==null){for(i=0;i<ns.length;i++)if(a=ns[i],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,v=a.pending;if(v!==null){var C=v.next;v.next=p,u.next=C}a.pending=u}ns=null}return n}function _m(n,i){do{var a=un;try{if(iu(),Ja.current=tl,Za){for(var u=$t.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Za=!1}if(rs=0,xn=hn=$t=null,Xo=!1,jo=0,Nu.current=null,a===null||a.return===null){dn=1,Jo=i,un=null;break}e:{var v=n,C=a.return,H=a,J=i;if(i=wn,H.flags|=32768,J!==null&&typeof J=="object"&&typeof J.then=="function"){var pe=J,Le=H,De=Le.tag;if((Le.mode&1)===0&&(De===0||De===11||De===15)){var Re=Le.alternate;Re?(Le.updateQueue=Re.updateQueue,Le.memoizedState=Re.memoizedState,Le.lanes=Re.lanes):(Le.updateQueue=null,Le.memoizedState=null)}var tt=Wp(C);if(tt!==null){tt.flags&=-257,Xp(tt,C,H,v,i),tt.mode&1&&Gp(v,pe,i),i=tt,J=pe;var at=i.updateQueue;if(at===null){var lt=new Set;lt.add(J),i.updateQueue=lt}else at.add(J);break e}else{if((i&1)===0){Gp(v,pe,i),Wu();break e}J=Error(t(426))}}else if(Qt&&H.mode&1){var an=Wp(C);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),Xp(an,C,H,v,i),tu(Gs(J,H));break e}}v=J=Gs(J,H),dn!==4&&(dn=2),Zo===null?Zo=[v]:Zo.push(v),v=C;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var re=Hp(v,J,i);pp(v,re);break e;case 1:H=J;var $=v.type,he=v.stateNode;if((v.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||he!==null&&typeof he.componentDidCatch=="function"&&(Ir===null||!Ir.has(he)))){v.flags|=65536,i&=-i,v.lanes|=i;var Be=Vp(v,H,i);pp(v,Be);break e}}v=v.return}while(v!==null)}Sm(a)}catch(ct){i=ct,un===a&&a!==null&&(un=a=a.return);continue}break}while(!0)}function ym(){var n=al.current;return al.current=tl,n===null?tl:n}function Wu(){(dn===0||dn===3||dn===2)&&(dn=4),_n===null||(ss&268435455)===0&&(ll&268435455)===0||Nr(_n,wn)}function pl(n,i){var a=Ut;Ut|=2;var u=ym();(_n!==n||wn!==i)&&(lr=null,as(n,i));do try{Vx();break}catch(p){_m(n,p)}while(!0);if(iu(),Ut=a,al.current=u,un!==null)throw Error(t(261));return _n=null,wn=0,dn}function Vx(){for(;un!==null;)Mm(un)}function Gx(){for(;un!==null&&!ui();)Mm(un)}function Mm(n){var i=wm(n.alternate,n,oi);n.memoizedProps=n.pendingProps,i===null?Sm(n):un=i,Nu.current=null}function Sm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Nx(a,i,oi),a!==null){un=a;return}}else{if(a=Fx(a,i),a!==null){a.flags&=32767,un=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dn=6,un=null;return}}if(i=i.sibling,i!==null){un=i;return}un=i=n}while(i!==null);dn===0&&(dn=5)}function ls(n,i,a){var u=Mt,p=gi.transition;try{gi.transition=null,Mt=1,Wx(n,i,a,u)}finally{gi.transition=p,Mt=u}return null}function Wx(n,i,a,u){do Ks();while(Dr!==null);if((Ut&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(vn(n,v),n===_n&&(un=_n=null,wn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ul||(ul=!0,Tm(ee,function(){return Ks(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=gi.transition,gi.transition=null;var C=Mt;Mt=1;var H=Ut;Ut|=4,Nu.current=null,kx(n,a),hm(a,n),ux(Wc),wa=!!Gc,Wc=Gc=null,n.current=a,Bx(a),fi(),Ut=H,Mt=C,gi.transition=v}else n.current=a;if(ul&&(ul=!1,Dr=n,fl=p),v=n.pendingLanes,v===0&&(Ir=null),Xe(a.stateNode),Jn(n,jt()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],u(p.value,{componentStack:p.stack,digest:p.digest});if(cl)throw cl=!1,n=ku,ku=null,n;return(fl&1)!==0&&n.tag!==0&&Ks(),v=n.pendingLanes,(v&1)!==0?n===Bu?$o++:($o=0,Bu=n):$o=0,br(),null}function Ks(){if(Dr!==null){var n=ni(fl),i=gi.transition,a=Mt;try{if(gi.transition=null,Mt=16>n?16:n,Dr===null)var u=!1;else{if(n=Dr,Dr=null,fl=0,(Ut&6)!==0)throw Error(t(331));var p=Ut;for(Ut|=4,st=n.current;st!==null;){var v=st,C=v.child;if((st.flags&16)!==0){var H=v.deletions;if(H!==null){for(var J=0;J<H.length;J++){var pe=H[J];for(st=pe;st!==null;){var Le=st;switch(Le.tag){case 0:case 11:case 15:Qo(8,Le,v)}var De=Le.child;if(De!==null)De.return=Le,st=De;else for(;st!==null;){Le=st;var Re=Le.sibling,tt=Le.return;if(am(Le),Le===pe){st=null;break}if(Re!==null){Re.return=tt,st=Re;break}st=tt}}}var at=v.alternate;if(at!==null){var lt=at.child;if(lt!==null){at.child=null;do{var an=lt.sibling;lt.sibling=null,lt=an}while(lt!==null)}}st=v}}if((v.subtreeFlags&2064)!==0&&C!==null)C.return=v,st=C;else e:for(;st!==null;){if(v=st,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Qo(9,v,v.return)}var re=v.sibling;if(re!==null){re.return=v.return,st=re;break e}st=v.return}}var $=n.current;for(st=$;st!==null;){C=st;var he=C.child;if((C.subtreeFlags&2064)!==0&&he!==null)he.return=C,st=he;else e:for(C=$;st!==null;){if(H=st,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:ol(9,H)}}catch(ct){nn(H,H.return,ct)}if(H===C){st=null;break e}var Be=H.sibling;if(Be!==null){Be.return=H.return,st=Be;break e}st=H.return}}if(Ut=p,br(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(ae,n)}catch{}u=!0}return u}finally{Mt=a,gi.transition=i}}return!1}function Am(n,i,a){i=Gs(a,i),i=Hp(n,i,1),n=Pr(n,i,1),i=Gn(),n!==null&&(St(n,1,i),Jn(n,i))}function nn(n,i,a){if(n.tag===3)Am(n,n,a);else for(;i!==null;){if(i.tag===3){Am(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ir===null||!Ir.has(u))){n=Gs(a,n),n=Vp(i,n,1),i=Pr(i,n,1),n=Gn(),i!==null&&(St(i,1,n),Jn(i,n));break}}i=i.return}}function Xx(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Gn(),n.pingedLanes|=n.suspendedLanes&a,_n===n&&(wn&a)===a&&(dn===4||dn===3&&(wn&130023424)===wn&&500>jt()-Ou?as(n,0):Fu|=a),Jn(n,i)}function Em(n,i){i===0&&((n.mode&1)===0?i=1:(i=ot,ot<<=1,(ot&130023424)===0&&(ot=4194304)));var a=Gn();n=sr(n,i),n!==null&&(St(n,i,a),Jn(n,a))}function jx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Em(n,a)}function Kx(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Em(n,a)}var wm;wm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Kn.current)Yn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Yn=!1,Ux(n,i,a);Yn=(n.flags&131072)!==0}else Yn=!1,Qt&&(i.flags&1048576)!==0&&rp(i,Ga,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;rl(n,i),n=i.pendingProps;var p=Ns(i,Pn.current);Hs(i,a),p=pu(null,i,u,n,p,a);var v=mu();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,qn(u)?(v=!0,za(i)):v=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,au(i),p.updater=nl,i.stateNode=p,p._reactInternals=i,Mu(i,u,n,a),i=wu(null,i,u,!0,v,a)):(i.tag=0,Qt&&v&&Jc(i),Vn(null,i,p,a),i=i.child),i;case 16:u=i.elementType;e:{switch(rl(n,i),n=i.pendingProps,p=u._init,u=p(u._payload),i.type=u,p=i.tag=Yx(u),n=bi(u,n),p){case 0:i=Eu(null,i,u,n,a);break e;case 1:i=Jp(null,i,u,n,a);break e;case 11:i=jp(null,i,u,n,a);break e;case 14:i=Kp(null,i,u,bi(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:bi(u,p),Eu(n,i,u,p,a);case 1:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:bi(u,p),Jp(n,i,u,p,a);case 3:e:{if(Zp(i),n===null)throw Error(t(387));u=i.pendingProps,v=i.memoizedState,p=v.element,dp(n,i),Ya(i,u,null,a);var C=i.memoizedState;if(u=C.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){p=Gs(Error(t(423)),i),i=$p(n,i,u,a,p);break e}else if(u!==p){p=Gs(Error(t(424)),i),i=$p(n,i,u,a,p);break e}else for(si=wr(i.stateNode.containerInfo.firstChild),ri=i,Qt=!0,Ci=null,a=fp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ks(),u===p){i=ar(n,i,a);break e}Vn(n,i,u,a)}i=i.child}return i;case 5:return gp(i),n===null&&eu(i),u=i.type,p=i.pendingProps,v=n!==null?n.memoizedProps:null,C=p.children,Xc(u,p)?C=null:v!==null&&Xc(u,v)&&(i.flags|=32),Qp(n,i),Vn(n,i,C,a),i.child;case 6:return n===null&&eu(i),null;case 13:return em(n,i,a);case 4:return lu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Bs(i,null,u,a):Vn(n,i,u,a),i.child;case 11:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:bi(u,p),jp(n,i,u,p,a);case 7:return Vn(n,i,i.pendingProps,a),i.child;case 8:return Vn(n,i,i.pendingProps.children,a),i.child;case 12:return Vn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,p=i.pendingProps,v=i.memoizedProps,C=p.value,Xt(ja,u._currentValue),u._currentValue=C,v!==null)if(Ti(v.value,C)){if(v.children===p.children&&!Kn.current){i=ar(n,i,a);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var H=v.dependencies;if(H!==null){C=v.child;for(var J=H.firstContext;J!==null;){if(J.context===u){if(v.tag===1){J=or(-1,a&-a),J.tag=2;var pe=v.updateQueue;if(pe!==null){pe=pe.shared;var Le=pe.pending;Le===null?J.next=J:(J.next=Le.next,Le.next=J),pe.pending=J}}v.lanes|=a,J=v.alternate,J!==null&&(J.lanes|=a),su(v.return,a,i),H.lanes|=a;break}J=J.next}}else if(v.tag===10)C=v.type===i.type?null:v.child;else if(v.tag===18){if(C=v.return,C===null)throw Error(t(341));C.lanes|=a,H=C.alternate,H!==null&&(H.lanes|=a),su(C,a,i),C=v.sibling}else C=v.child;if(C!==null)C.return=v;else for(C=v;C!==null;){if(C===i){C=null;break}if(v=C.sibling,v!==null){v.return=C.return,C=v;break}C=C.return}v=C}Vn(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,u=i.pendingProps.children,Hs(i,a),p=pi(p),u=u(p),i.flags|=1,Vn(n,i,u,a),i.child;case 14:return u=i.type,p=bi(u,i.pendingProps),p=bi(u.type,p),Kp(n,i,u,p,a);case 15:return qp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:bi(u,p),rl(n,i),i.tag=1,qn(u)?(n=!0,za(i)):n=!1,Hs(i,a),Bp(i,u,p),Mu(i,u,p,a),wu(null,i,u,!0,n,a);case 19:return nm(n,i,a);case 22:return Yp(n,i,a)}throw Error(t(156,i.tag))};function Tm(n,i){return Yr(n,i)}function qx(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(n,i,a,u){return new qx(n,i,a,u)}function Xu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yx(n){if(typeof n=="function")return Xu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===q)return 11;if(n===j)return 14}return 2}function Fr(n,i){var a=n.alternate;return a===null?(a=vi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ml(n,i,a,u,p,v){var C=2;if(u=n,typeof n=="function")Xu(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case k:return cs(a.children,p,v,i);case A:C=8,p|=8;break;case U:return n=vi(12,a,i,p|2),n.elementType=U,n.lanes=v,n;case ce:return n=vi(13,a,i,p),n.elementType=ce,n.lanes=v,n;case ue:return n=vi(19,a,i,p),n.elementType=ue,n.lanes=v,n;case X:return gl(a,p,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case W:C=10;break e;case B:C=9;break e;case q:C=11;break e;case j:C=14;break e;case te:C=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=vi(C,a,i,p),i.elementType=n,i.type=u,i.lanes=v,i}function cs(n,i,a,u){return n=vi(7,n,u,i),n.lanes=a,n}function gl(n,i,a,u){return n=vi(22,n,u,i),n.elementType=X,n.lanes=a,n.stateNode={isHidden:!1},n}function ju(n,i,a){return n=vi(6,n,null,i),n.lanes=a,n}function Ku(n,i,a){return i=vi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Qx(n,i,a,u,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=on(0),this.expirationTimes=on(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=on(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function qu(n,i,a,u,p,v,C,H,J){return n=new Qx(n,i,a,H,J),i===1?(i=1,v===!0&&(i|=8)):i=0,v=vi(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},au(v),n}function Jx(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Cm(n){if(!n)return Cr;n=n._reactInternals;e:{if(cn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(qn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(qn(a))return tp(n,a,i)}return i}function bm(n,i,a,u,p,v,C,H,J){return n=qu(a,u,!0,n,p,v,C,H,J),n.context=Cm(null),a=n.current,u=Gn(),p=Ur(a),v=or(u,p),v.callback=i??null,Pr(a,v,p),n.current.lanes=p,St(n,p,u),Jn(n,u),n}function vl(n,i,a,u){var p=i.current,v=Gn(),C=Ur(p);return a=Cm(a),i.context===null?i.context=a:i.pendingContext=a,i=or(v,C),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Pr(p,i,C),n!==null&&(Li(n,p,C,v),qa(n,p,C)),C}function xl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Rm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Yu(n,i){Rm(n,i),(n=n.alternate)&&Rm(n,i)}function Zx(){return null}var Pm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Qu(n){this._internalRoot=n}_l.prototype.render=Qu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));vl(n,i,null,null)},_l.prototype.unmount=Qu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;os(function(){vl(null,n,null,null)}),i[tr]=null}};function _l(n){this._internalRoot=n}_l.prototype.unstable_scheduleHydration=function(n){if(n){var i=Vt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Sr.length&&i!==0&&i<Sr[a].priority;a++);Sr.splice(a,0,n),a===0&&gd(n)}};function Ju(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function yl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Lm(){}function $x(n,i,a,u,p){if(p){if(typeof u=="function"){var v=u;u=function(){var pe=xl(C);v.call(pe)}}var C=bm(i,u,n,0,null,!1,!1,"",Lm);return n._reactRootContainer=C,n[tr]=C.current,Oo(n.nodeType===8?n.parentNode:n),os(),C}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var H=u;u=function(){var pe=xl(J);H.call(pe)}}var J=qu(n,0,!1,null,null,!1,!1,"",Lm);return n._reactRootContainer=J,n[tr]=J.current,Oo(n.nodeType===8?n.parentNode:n),os(function(){vl(i,J,a,u)}),J}function Ml(n,i,a,u,p){var v=a._reactRootContainer;if(v){var C=v;if(typeof p=="function"){var H=p;p=function(){var J=xl(C);H.call(J)}}vl(i,C,n,p)}else C=$x(a,i,n,p,u);return xl(C)}Ht=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ct(i.pendingLanes);a!==0&&(An(i,a|1),Jn(i,jt()),(Ut&6)===0&&(js=jt()+500,br()))}break;case 13:os(function(){var u=sr(n,1);if(u!==null){var p=Gn();Li(u,n,1,p)}}),Yu(n,1)}},Kt=function(n){if(n.tag===13){var i=sr(n,134217728);if(i!==null){var a=Gn();Li(i,n,134217728,a)}Yu(n,134217728)}},Ei=function(n){if(n.tag===13){var i=Ur(n),a=sr(n,i);if(a!==null){var u=Gn();Li(a,n,i,u)}Yu(n,i)}},Vt=function(){return Mt},wi=function(n,i){var a=Mt;try{return Mt=n,i()}finally{Mt=a}},ft=function(n,i,a){switch(i){case"input":if(We(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var p=ka(u);if(!p)throw Error(t(90));$e(u),We(u,p)}}}break;case"textarea":Ce(n,a);break;case"select":i=a.value,i!=null&&et(n,!!a.multiple,i,!1)}},ke=Vu,we=os;var e_={usingClientEntryPoint:!1,Events:[zo,Ds,ka,ye,qe,Vu]},ea={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t_={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zn(n),n===null?null:n.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||Zx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{ae=Sl.inject(t_),He=Sl}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e_,Zn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ju(i))throw Error(t(200));return Jx(n,i,null,a)},Zn.createRoot=function(n,i){if(!Ju(n))throw Error(t(299));var a=!1,u="",p=Pm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=qu(n,1,!1,null,null,a,!1,u,p),n[tr]=i.current,Oo(n.nodeType===8?n.parentNode:n),new Qu(i)},Zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=zn(i),n=n===null?null:n.stateNode,n},Zn.flushSync=function(n){return os(n)},Zn.hydrate=function(n,i,a){if(!yl(i))throw Error(t(200));return Ml(null,n,i,!0,a)},Zn.hydrateRoot=function(n,i,a){if(!Ju(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,v="",C=Pm;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=bm(i,null,n,1,a??null,p,!1,v,C),n[tr]=i.current,Oo(n),u)for(n=0;n<u.length;n++)a=u[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new _l(i)},Zn.render=function(n,i,a){if(!yl(i))throw Error(t(200));return Ml(null,n,i,!1,a)},Zn.unmountComponentAtNode=function(n){if(!yl(n))throw Error(t(40));return n._reactRootContainer?(os(function(){Ml(null,null,n,!1,function(){n._reactRootContainer=null,n[tr]=null})}),!0):!1},Zn.unstable_batchedUpdates=Vu,Zn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!yl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ml(n,i,a,!1,u)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var Bm;function f_(){if(Bm)return ef.exports;Bm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ef.exports=u_(),ef.exports}var zm;function h_(){if(zm)return Al;zm=1;var s=f_();return Al.createRoot=s.createRoot,Al.hydrateRoot=s.hydrateRoot,Al}var d_=h_();const Hm={field:{count:1400,size:1,drift:1},look:{trail:.35,grain:.5,glow:1},form:{circle:0},hands:{reach:1,clap:1},sound:{beat:1,sparks:1,bass:1}};function p_(s,e){let t=s;for(const r of e.split(".")){if(typeof t!="object"||t===null)return;t=t[r]}return typeof t=="number"?t:void 0}function Ss(s,e){const t=structuredClone(s);for(const[r,o]of Object.entries(e)){if(!Number.isFinite(o)||p_(s,r)===void 0)continue;const l=r.split("."),c=l.pop();let f=t;for(const d of l)f=f[d];f[c]=o}return t}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wh="184",m_=0,Vm=1,g_=2,$l=1,v_=2,da=3,Kr=0,ei=1,Fi=2,mr=0,ho=1,Gm=2,Wm=3,Xm=4,x_=5,ms=100,__=101,y_=102,M_=103,S_=104,A_=200,E_=201,w_=202,T_=203,Qf=204,Jf=205,C_=206,b_=207,R_=208,P_=209,L_=210,I_=211,D_=212,U_=213,N_=214,Zf=0,$f=1,eh=2,mo=3,th=4,nh=5,ih=6,rh=7,Rg=0,F_=1,O_=2,Yi=0,Pg=1,Lg=2,Ig=3,Dg=4,Ug=5,Ng=6,Fg=7,Og=300,_s=301,go=302,rf=303,sf=304,xc=306,ac=1e3,pr=1001,sh=1002,pn=1003,k_=1004,El=1005,Sn=1006,of=1007,vs=1008,yi=1009,kg=1010,Bg=1011,xa=1012,Xh=1013,Zi=1014,ki=1015,vr=1016,jh=1017,Kh=1018,_a=1020,zg=35902,Hg=35899,Vg=1021,Gg=1022,Mi=1023,xr=1026,xs=1027,Wg=1028,qh=1029,ys=1030,Yh=1031,Qh=1033,ec=33776,tc=33777,nc=33778,ic=33779,oh=35840,ah=35841,lh=35842,ch=35843,uh=36196,fh=37492,hh=37496,dh=37488,ph=37489,lc=37490,mh=37491,gh=37808,vh=37809,xh=37810,_h=37811,yh=37812,Mh=37813,Sh=37814,Ah=37815,Eh=37816,wh=37817,Th=37818,Ch=37819,bh=37820,Rh=37821,Ph=36492,Lh=36494,Ih=36495,Dh=36283,Uh=36284,cc=36285,Nh=36286,B_=3200,jm=0,z_=1,Xr="",_i="srgb",uc="srgb-linear",fc="linear",Gt="srgb",qs=7680,Km=519,H_=512,V_=513,G_=514,Jh=515,W_=516,X_=517,Zh=518,j_=519,qm=35044,Ym=35048,Qm="300 es",qi=2e3,hc=2001;function K_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function dc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function q_(){const s=dc("canvas");return s.style.display="block",s}const Jm={};function Zm(...s){const e="THREE."+s.shift();console.log(e,...s)}function Xg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function gt(...s){s=Xg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ft(...s){s=Xg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Fh(...s){const e=s.join(" ");e in Jm||(Jm[e]=!0,gt(...s))}function Y_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Q_={[Zf]:$f,[eh]:ih,[th]:rh,[mo]:nh,[$f]:Zf,[ih]:eh,[rh]:th,[nh]:mo};class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $m=1234567;const ga=Math.PI/180,ya=180/Math.PI;function _o(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function $h(s,e){return(s%e+e)%e}function J_(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function Z_(s,e,t){return s!==e?(t-s)/(e-s):0}function va(s,e,t){return(1-t)*s+t*e}function $_(s,e,t,r){return va(s,e,1-Math.exp(-t*r))}function ey(s,e=1){return e-Math.abs($h(s,e*2)-e)}function ty(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ny(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function iy(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ry(s,e){return s+Math.random()*(e-s)}function sy(s){return s*(.5-Math.random())}function oy(s){s!==void 0&&($m=s);let e=$m+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ay(s){return s*ga}function ly(s){return s*ya}function cy(s){return(s&s-1)===0&&s!==0}function uy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function fy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hy(s,e,t,r,o){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),h=l((e+r)/2),g=c((e+r)/2),x=l((e-r)/2),m=c((e-r)/2),_=l((r-e)/2),S=c((r-e)/2);switch(o){case"XYX":s.set(f*g,d*x,d*m,f*h);break;case"YZY":s.set(d*m,f*g,d*x,f*h);break;case"ZXZ":s.set(d*x,d*m,f*g,f*h);break;case"XZX":s.set(f*g,d*S,d*_,f*h);break;case"YXY":s.set(d*_,f*g,d*S,f*h);break;case"ZYZ":s.set(d*S,d*_,f*g,f*h);break;default:gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function co(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const af={DEG2RAD:ga,RAD2DEG:ya,generateUUID:_o,clamp:Rt,euclideanModulo:$h,mapLinear:J_,inverseLerp:Z_,lerp:va,damp:$_,pingpong:ey,smoothstep:ty,smootherstep:ny,randInt:iy,randFloat:ry,randFloatSpread:sy,seededRandom:oy,degToRad:ay,radToDeg:ly,isPowerOfTwo:cy,ceilPowerOfTwo:uy,floorPowerOfTwo:fy,setQuaternionFromProperEuler:hy,normalize:Wn,denormalize:co},ud=class ud{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ud.prototype.isVector2=!0;let Pt=ud;class Qi{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let d=r[o+0],h=r[o+1],g=r[o+2],x=r[o+3],m=l[c+0],_=l[c+1],S=l[c+2],T=l[c+3];if(x!==T||d!==m||h!==_||g!==S){let y=d*m+h*_+g*S+x*T;y<0&&(m=-m,_=-_,S=-S,T=-T,y=-y);let M=1-f;if(y<.9995){const E=Math.acos(y),P=Math.sin(E);M=Math.sin(M*E)/P,f=Math.sin(f*E)/P,d=d*M+m*f,h=h*M+_*f,g=g*M+S*f,x=x*M+T*f}else{d=d*M+m*f,h=h*M+_*f,g=g*M+S*f,x=x*M+T*f;const E=1/Math.sqrt(d*d+h*h+g*g+x*x);d*=E,h*=E,g*=E,x*=E}}e[t]=d,e[t+1]=h,e[t+2]=g,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],d=r[o+1],h=r[o+2],g=r[o+3],x=l[c],m=l[c+1],_=l[c+2],S=l[c+3];return e[t]=f*S+g*x+d*_-h*m,e[t+1]=d*S+g*m+h*x-f*_,e[t+2]=h*S+g*_+f*m-d*x,e[t+3]=g*S-f*x-d*m-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(r/2),g=f(o/2),x=f(l/2),m=d(r/2),_=d(o/2),S=d(l/2);switch(c){case"XYZ":this._x=m*g*x+h*_*S,this._y=h*_*x-m*g*S,this._z=h*g*S+m*_*x,this._w=h*g*x-m*_*S;break;case"YXZ":this._x=m*g*x+h*_*S,this._y=h*_*x-m*g*S,this._z=h*g*S-m*_*x,this._w=h*g*x+m*_*S;break;case"ZXY":this._x=m*g*x-h*_*S,this._y=h*_*x+m*g*S,this._z=h*g*S+m*_*x,this._w=h*g*x-m*_*S;break;case"ZYX":this._x=m*g*x-h*_*S,this._y=h*_*x+m*g*S,this._z=h*g*S-m*_*x,this._w=h*g*x+m*_*S;break;case"YZX":this._x=m*g*x+h*_*S,this._y=h*_*x+m*g*S,this._z=h*g*S-m*_*x,this._w=h*g*x-m*_*S;break;case"XZY":this._x=m*g*x-h*_*S,this._y=h*_*x-m*g*S,this._z=h*g*S+m*_*x,this._w=h*g*x+m*_*S;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],d=t[9],h=t[2],g=t[6],x=t[10],m=r+f+x;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(g-d)*_,this._y=(l-h)*_,this._z=(c-o)*_}else if(r>f&&r>x){const _=2*Math.sqrt(1+r-f-x);this._w=(g-d)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(l+h)/_}else if(f>x){const _=2*Math.sqrt(1+f-r-x);this._w=(l-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(d+g)/_}else{const _=2*Math.sqrt(1+x-r-f);this._w=(c-o)/_,this._x=(l+h)/_,this._y=(d+g)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,d=t._y,h=t._z,g=t._w;return this._x=r*g+c*f+o*h-l*d,this._y=o*g+c*d+l*f-r*h,this._z=l*g+c*h+r*d-o*f,this._w=c*g-r*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,c=-c,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);d=Math.sin(d*h)/g,t=Math.sin(t*h)/g,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fd=class fd{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(e0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(e0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*o-f*r),g=2*(f*t-l*o),x=2*(l*r-c*t);return this.x=t+d*h+c*x-f*g,this.y=r+d*g+f*h-l*x,this.z=o+d*x+l*g-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*c-r*d,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return lf.copy(this).projectOnVector(e),this.sub(lf)}reflect(e){return this.sub(lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fd.prototype.isVector3=!0;let Z=fd;const lf=new Z,e0=new Qi,hd=class hd{constructor(e,t,r,o,l,c,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h)}set(e,t,r,o,l,c,f,d,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=d,g[6]=r,g[7]=c,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],d=r[6],h=r[1],g=r[4],x=r[7],m=r[2],_=r[5],S=r[8],T=o[0],y=o[3],M=o[6],E=o[1],P=o[4],b=o[7],z=o[2],L=o[5],k=o[8];return l[0]=c*T+f*E+d*z,l[3]=c*y+f*P+d*L,l[6]=c*M+f*b+d*k,l[1]=h*T+g*E+x*z,l[4]=h*y+g*P+x*L,l[7]=h*M+g*b+x*k,l[2]=m*T+_*E+S*z,l[5]=m*y+_*P+S*L,l[8]=m*M+_*b+S*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8];return t*c*g-t*f*h-r*l*g+r*f*d+o*l*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],x=g*c-f*h,m=f*d-g*l,_=h*l-c*d,S=t*x+r*m+o*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=x*T,e[1]=(o*h-g*r)*T,e[2]=(f*r-o*c)*T,e[3]=m*T,e[4]=(g*t-o*d)*T,e[5]=(o*l-f*t)*T,e[6]=_*T,e[7]=(r*d-h*t)*T,e[8]=(c*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*c+h*f)+c+e,-o*h,o*d,-o*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(cf.makeScale(e,t)),this}rotate(e){return this.premultiply(cf.makeRotation(-e)),this}translate(e,t){return this.premultiply(cf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hd.prototype.isMatrix3=!0;let At=hd;const cf=new At,t0=new At().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n0=new At().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dy(){const s={enabled:!0,workingColorSpace:uc,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Gt&&(o.r=gr(o.r),o.g=gr(o.g),o.b=gr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Gt&&(o.r=po(o.r),o.g=po(o.g),o.b=po(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Xr?fc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Fh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Fh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[uc]:{primaries:e,whitePoint:r,transfer:fc,toXYZ:t0,fromXYZ:n0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:r,transfer:Gt,toXYZ:t0,fromXYZ:n0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),s}const Dt=dy();function gr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function po(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ys;class py{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ys===void 0&&(Ys=dc("canvas")),Ys.width=e.width,Ys.height=e.height;const o=Ys.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ys}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=gr(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(gr(t[r]/255)*255):t[r]=gr(t[r]);return{data:t,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let my=0;class ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=_o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(uf(o[c].image)):l.push(uf(o[c]))}else l=uf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function uf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?py.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let gy=0;const ff=new Z;class On extends As{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,r=pr,o=pr,l=Sn,c=vs,f=Mi,d=yi,h=On.DEFAULT_ANISOTROPY,g=Xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=_o(),this.name="",this.source=new ed(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ff).x}get height(){return this.source.getSize(ff).y}get depth(){return this.source.getSize(ff).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ac:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ac:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Og;On.DEFAULT_ANISOTROPY=1;const dd=class dd{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],g=d[4],x=d[8],m=d[1],_=d[5],S=d[9],T=d[2],y=d[6],M=d[10];if(Math.abs(g-m)<.01&&Math.abs(x-T)<.01&&Math.abs(S-y)<.01){if(Math.abs(g+m)<.1&&Math.abs(x+T)<.1&&Math.abs(S+y)<.1&&Math.abs(h+_+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,b=(_+1)/2,z=(M+1)/2,L=(g+m)/4,k=(x+T)/4,A=(S+y)/4;return P>b&&P>z?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=L/r,l=k/r):b>z?b<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),r=L/o,l=A/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=k/l,o=A/l),this.set(r,o,l,t),this}let E=Math.sqrt((y-S)*(y-S)+(x-T)*(x-T)+(m-g)*(m-g));return Math.abs(E)<.001&&(E=1),this.x=(y-S)/E,this.y=(x-T)/E,this.z=(m-g)/E,this.w=Math.acos((h+_+M-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dd.prototype.isVector4=!0;let en=dd;class vy extends As{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new On(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new ed(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends vy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class jg extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=pn,this.minFilter=pn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xy extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=pn,this.minFilter=pn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vc=class vc{constructor(e,t,r,o,l,c,f,d,h,g,x,m,_,S,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h,g,x,m,_,S,T,y)}set(e,t,r,o,l,c,f,d,h,g,x,m,_,S,T,y){const M=this.elements;return M[0]=e,M[4]=t,M[8]=r,M[12]=o,M[1]=l,M[5]=c,M[9]=f,M[13]=d,M[2]=h,M[6]=g,M[10]=x,M[14]=m,M[3]=_,M[7]=S,M[11]=T,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Qs.setFromMatrixColumn(e,0).length(),l=1/Qs.setFromMatrixColumn(e,1).length(),c=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),g=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const m=c*g,_=c*x,S=f*g,T=f*x;t[0]=d*g,t[4]=-d*x,t[8]=h,t[1]=_+S*h,t[5]=m-T*h,t[9]=-f*d,t[2]=T-m*h,t[6]=S+_*h,t[10]=c*d}else if(e.order==="YXZ"){const m=d*g,_=d*x,S=h*g,T=h*x;t[0]=m+T*f,t[4]=S*f-_,t[8]=c*h,t[1]=c*x,t[5]=c*g,t[9]=-f,t[2]=_*f-S,t[6]=T+m*f,t[10]=c*d}else if(e.order==="ZXY"){const m=d*g,_=d*x,S=h*g,T=h*x;t[0]=m-T*f,t[4]=-c*x,t[8]=S+_*f,t[1]=_+S*f,t[5]=c*g,t[9]=T-m*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const m=c*g,_=c*x,S=f*g,T=f*x;t[0]=d*g,t[4]=S*h-_,t[8]=m*h+T,t[1]=d*x,t[5]=T*h+m,t[9]=_*h-S,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const m=c*d,_=c*h,S=f*d,T=f*h;t[0]=d*g,t[4]=T-m*x,t[8]=S*x+_,t[1]=x,t[5]=c*g,t[9]=-f*g,t[2]=-h*g,t[6]=_*x+S,t[10]=m-T*x}else if(e.order==="XZY"){const m=c*d,_=c*h,S=f*d,T=f*h;t[0]=d*g,t[4]=-x,t[8]=h*g,t[1]=m*x+T,t[5]=c*g,t[9]=_*x-S,t[2]=S*x-_,t[6]=f*g,t[10]=T*x+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_y,e,yy)}lookAt(e,t,r){const o=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),kr.crossVectors(r,ai),kr.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),kr.crossVectors(r,ai)),kr.normalize(),wl.crossVectors(ai,kr),o[0]=kr.x,o[4]=wl.x,o[8]=ai.x,o[1]=kr.y,o[5]=wl.y,o[9]=ai.y,o[2]=kr.z,o[6]=wl.z,o[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],d=r[8],h=r[12],g=r[1],x=r[5],m=r[9],_=r[13],S=r[2],T=r[6],y=r[10],M=r[14],E=r[3],P=r[7],b=r[11],z=r[15],L=o[0],k=o[4],A=o[8],U=o[12],W=o[1],B=o[5],q=o[9],ce=o[13],ue=o[2],j=o[6],te=o[10],X=o[14],F=o[3],N=o[7],Y=o[11],D=o[15];return l[0]=c*L+f*W+d*ue+h*F,l[4]=c*k+f*B+d*j+h*N,l[8]=c*A+f*q+d*te+h*Y,l[12]=c*U+f*ce+d*X+h*D,l[1]=g*L+x*W+m*ue+_*F,l[5]=g*k+x*B+m*j+_*N,l[9]=g*A+x*q+m*te+_*Y,l[13]=g*U+x*ce+m*X+_*D,l[2]=S*L+T*W+y*ue+M*F,l[6]=S*k+T*B+y*j+M*N,l[10]=S*A+T*q+y*te+M*Y,l[14]=S*U+T*ce+y*X+M*D,l[3]=E*L+P*W+b*ue+z*F,l[7]=E*k+P*B+b*j+z*N,l[11]=E*A+P*q+b*te+z*Y,l[15]=E*U+P*ce+b*X+z*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],d=e[9],h=e[13],g=e[2],x=e[6],m=e[10],_=e[14],S=e[3],T=e[7],y=e[11],M=e[15],E=d*_-h*m,P=f*_-h*x,b=f*m-d*x,z=c*_-h*g,L=c*m-d*g,k=c*x-f*g;return t*(T*E-y*P+M*b)-r*(S*E-y*z+M*L)+o*(S*P-T*z+M*k)-l*(S*b-T*L+y*k)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],x=e[9],m=e[10],_=e[11],S=e[12],T=e[13],y=e[14],M=e[15],E=t*f-r*c,P=t*d-o*c,b=t*h-l*c,z=r*d-o*f,L=r*h-l*f,k=o*h-l*d,A=g*T-x*S,U=g*y-m*S,W=g*M-_*S,B=x*y-m*T,q=x*M-_*T,ce=m*M-_*y,ue=E*ce-P*q+b*B+z*W-L*U+k*A;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/ue;return e[0]=(f*ce-d*q+h*B)*j,e[1]=(o*q-r*ce-l*B)*j,e[2]=(T*k-y*L+M*z)*j,e[3]=(m*L-x*k-_*z)*j,e[4]=(d*W-c*ce-h*U)*j,e[5]=(t*ce-o*W+l*U)*j,e[6]=(y*b-S*k-M*P)*j,e[7]=(g*k-m*b+_*P)*j,e[8]=(c*q-f*W+h*A)*j,e[9]=(r*W-t*q-l*A)*j,e[10]=(S*L-T*b+M*E)*j,e[11]=(x*b-g*L-_*E)*j,e[12]=(f*U-c*B-d*A)*j,e[13]=(t*B-r*U+o*A)*j,e[14]=(T*P-S*z-y*E)*j,e[15]=(g*z-x*P+m*E)*j,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,d=e.z,h=l*c,g=l*f;return this.set(h*c+r,h*f-o*d,h*d+o*f,0,h*f+o*d,g*f+r,g*d-o*c,0,h*d-o*f,g*d+o*c,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,h=l+l,g=c+c,x=f+f,m=l*h,_=l*g,S=l*x,T=c*g,y=c*x,M=f*x,E=d*h,P=d*g,b=d*x,z=r.x,L=r.y,k=r.z;return o[0]=(1-(T+M))*z,o[1]=(_+b)*z,o[2]=(S-P)*z,o[3]=0,o[4]=(_-b)*L,o[5]=(1-(m+M))*L,o[6]=(y+E)*L,o[7]=0,o[8]=(S+P)*k,o[9]=(y-E)*k,o[10]=(1-(m+T))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=Qs.set(o[0],o[1],o[2]).length();const f=Qs.set(o[4],o[5],o[6]).length(),d=Qs.set(o[8],o[9],o[10]).length();l<0&&(c=-c),Ii.copy(this);const h=1/c,g=1/f,x=1/d;return Ii.elements[0]*=h,Ii.elements[1]*=h,Ii.elements[2]*=h,Ii.elements[4]*=g,Ii.elements[5]*=g,Ii.elements[6]*=g,Ii.elements[8]*=x,Ii.elements[9]*=x,Ii.elements[10]*=x,t.setFromRotationMatrix(Ii),r.x=c,r.y=f,r.z=d,this}makePerspective(e,t,r,o,l,c,f=qi,d=!1){const h=this.elements,g=2*l/(t-e),x=2*l/(r-o),m=(t+e)/(t-e),_=(r+o)/(r-o);let S,T;if(d)S=l/(c-l),T=c*l/(c-l);else if(f===qi)S=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(f===hc)S=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=x,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=qi,d=!1){const h=this.elements,g=2/(t-e),x=2/(r-o),m=-(t+e)/(t-e),_=-(r+o)/(r-o);let S,T;if(d)S=1/(c-l),T=c/(c-l);else if(f===qi)S=-2/(c-l),T=-(c+l)/(c-l);else if(f===hc)S=-1/(c-l),T=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=x,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};vc.prototype.isMatrix4=!0;let rn=vc;const Qs=new Z,Ii=new rn,_y=new Z(0,0,0),yy=new Z(1,1,1),kr=new Z,wl=new Z,ai=new Z,i0=new rn,r0=new Qi;class Ms{constructor(e=0,t=0,r=0,o=Ms.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],d=o[1],h=o[5],g=o[9],x=o[2],m=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,_),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-x,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Rt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,_));break;case"XZY":this._z=Math.asin(-Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,_),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return i0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(i0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return r0.setFromEuler(this),this.setFromQuaternion(r0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ms.DEFAULT_ORDER="XYZ";class Kg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let My=0;const s0=new Z,Js=new Qi,cr=new rn,Tl=new Z,na=new Z,Sy=new Z,Ay=new Qi,o0=new Z(1,0,0),a0=new Z(0,1,0),l0=new Z(0,0,1),c0={type:"added"},Ey={type:"removed"},Zs={type:"childadded",child:null},hf={type:"childremoved",child:null};class jn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new Z,t=new Ms,r=new Qi,o=new Z(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new rn},normalMatrix:{value:new At}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(o0,e)}rotateY(e){return this.rotateOnAxis(a0,e)}rotateZ(e){return this.rotateOnAxis(l0,e)}translateOnAxis(e,t){return s0.copy(e).applyQuaternion(this.quaternion),this.position.add(s0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(o0,e)}translateY(e){return this.translateOnAxis(a0,e)}translateZ(e){return this.translateOnAxis(l0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Tl.copy(e):Tl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(na,Tl,this.up):cr.lookAt(Tl,na,this.up),this.quaternion.setFromRotationMatrix(cr),o&&(cr.extractRotation(o.matrixWorld),Js.setFromRotationMatrix(cr),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(c0),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ey),hf.child=e,this.dispatchEvent(hf),hf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(c0),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,Sy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,Ay,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,g=d.length;h<g;h++){const x=d[h];l(e.shapes,x)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),g=c(e.images),x=c(e.shapes),m=c(e.skeletons),_=c(e.animations),S=c(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),m.length>0&&(r.skeletons=m),_.length>0&&(r.animations=_),S.length>0&&(r.nodes=S)}return r.object=o,r;function c(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}jn.DEFAULT_UP=new Z(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bi extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wy={type:"move"};class df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),M=this._getHandJoint(h,T);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],m=g.position.distanceTo(x.position),_=.02,S=.005;h.inputState.pinching&&m>_+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=_-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(wy)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Bi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function pf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ot{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Dt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Dt.workingColorSpace){if(e=$h(e,1),t=Rt(t,0,1),r=Rt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=pf(c,l,e+1/3),this.g=pf(c,l,e),this.b=pf(c,l,e-1/3)}return Dt.colorSpaceToWorking(this,o),this}setStyle(e,t=_i){function r(l){l!==void 0&&parseFloat(l)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:gt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_i){const r=qg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return Dt.workingToColorSpace(Nn.copy(this),e),Math.round(Rt(Nn.r*255,0,255))*65536+Math.round(Rt(Nn.g*255,0,255))*256+Math.round(Rt(Nn.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.workingToColorSpace(Nn.copy(this),t);const r=Nn.r,o=Nn.g,l=Nn.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let d,h;const g=(f+c)/2;if(f===c)d=0,h=0;else{const x=c-f;switch(h=g<=.5?x/(c+f):x/(2-c-f),c){case r:d=(o-l)/x+(o<l?6:0);break;case o:d=(l-r)/x+2;break;case l:d=(r-o)/x+4;break}d/=6}return e.h=d,e.s=h,e.l=g,e}getRGB(e,t=Dt.workingColorSpace){return Dt.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=_i){Dt.workingToColorSpace(Nn.copy(this),e);const t=Nn.r,r=Nn.g,o=Nn.b;return e!==_i?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(Cl);const r=va(Br.h,Cl.h,t),o=va(Br.s,Cl.s,t),l=va(Br.l,Cl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Ot;Ot.NAMES=qg;class _c extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ms,this.environmentIntensity=1,this.environmentRotation=new Ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Di=new Z,ur=new Z,mf=new Z,fr=new Z,$s=new Z,eo=new Z,u0=new Z,gf=new Z,vf=new Z,xf=new Z,_f=new en,yf=new en,Mf=new en;class Oi{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Di.subVectors(e,t),o.cross(Di);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Di.subVectors(o,t),ur.subVectors(r,t),mf.subVectors(e,t);const c=Di.dot(Di),f=Di.dot(ur),d=Di.dot(mf),h=ur.dot(ur),g=ur.dot(mf),x=c*h-f*f;if(x===0)return l.set(0,0,0),null;const m=1/x,_=(h*d-f*g)*m,S=(c*g-f*d)*m;return l.set(1-_-S,S,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,t,r,o,l,c,f,d){return this.getBarycoord(e,t,r,o,fr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,fr.x),d.addScaledVector(c,fr.y),d.addScaledVector(f,fr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,c){return _f.setScalar(0),yf.setScalar(0),Mf.setScalar(0),_f.fromBufferAttribute(e,t),yf.fromBufferAttribute(e,r),Mf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(_f,l.x),c.addScaledVector(yf,l.y),c.addScaledVector(Mf,l.z),c}static isFrontFacing(e,t,r,o){return Di.subVectors(r,t),ur.subVectors(e,t),Di.cross(ur).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Di.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Oi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;$s.subVectors(o,r),eo.subVectors(l,r),gf.subVectors(e,r);const d=$s.dot(gf),h=eo.dot(gf);if(d<=0&&h<=0)return t.copy(r);vf.subVectors(e,o);const g=$s.dot(vf),x=eo.dot(vf);if(g>=0&&x<=g)return t.copy(o);const m=d*x-g*h;if(m<=0&&d>=0&&g<=0)return c=d/(d-g),t.copy(r).addScaledVector($s,c);xf.subVectors(e,l);const _=$s.dot(xf),S=eo.dot(xf);if(S>=0&&_<=S)return t.copy(l);const T=_*h-d*S;if(T<=0&&h>=0&&S<=0)return f=h/(h-S),t.copy(r).addScaledVector(eo,f);const y=g*S-_*x;if(y<=0&&x-g>=0&&_-S>=0)return u0.subVectors(l,o),f=(x-g)/(x-g+(_-S)),t.copy(o).addScaledVector(u0,f);const M=1/(y+T+m);return c=T*M,f=m*M,t.copy(r).addScaledVector($s,c).addScaledVector(eo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ma{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Ui):Ui.fromBufferAttribute(l,c),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),bl.copy(r.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),Rl.subVectors(this.max,ia),to.subVectors(e.a,ia),no.subVectors(e.b,ia),io.subVectors(e.c,ia),zr.subVectors(no,to),Hr.subVectors(io,no),us.subVectors(to,io);let t=[0,-zr.z,zr.y,0,-Hr.z,Hr.y,0,-us.z,us.y,zr.z,0,-zr.x,Hr.z,0,-Hr.x,us.z,0,-us.x,-zr.y,zr.x,0,-Hr.y,Hr.x,0,-us.y,us.x,0];return!Sf(t,to,no,io,Rl)||(t=[1,0,0,0,1,0,0,0,1],!Sf(t,to,no,io,Rl))?!1:(Pl.crossVectors(zr,Hr),t=[Pl.x,Pl.y,Pl.z],Sf(t,to,no,io,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ui=new Z,bl=new Ma,to=new Z,no=new Z,io=new Z,zr=new Z,Hr=new Z,us=new Z,ia=new Z,Rl=new Z,Pl=new Z,fs=new Z;function Sf(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){fs.fromArray(s,l);const f=o.x*Math.abs(fs.x)+o.y*Math.abs(fs.y)+o.z*Math.abs(fs.z),d=e.dot(fs),h=t.dot(fs),g=r.dot(fs);if(Math.max(-Math.max(d,h,g),Math.min(d,h,g))>f)return!1}return!0}const fn=new Z,Ll=new Pt;let Ty=0;class Nt extends As{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ty++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=qm,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ll.fromBufferAttribute(this,t),Ll.applyMatrix3(e),this.setXY(t,Ll.x,Ll.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=co(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Wn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=co(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=co(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=co(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=co(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array),o=Wn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array),o=Wn(o,this.array),l=Wn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Yg extends Nt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Qg extends Nt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Tn extends Nt{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Cy=new Ma,ra=new Z,Af=new Z;class yo{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Cy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);const t=ra.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ra,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(Af)),this.expandByPoint(ra.copy(e.center).sub(Af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let by=0;const xi=new rn,Ef=new jn,ro=new Z,li=new Ma,sa=new Ma,Mn=new Z;class ln extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K_(e)?Qg:Yg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new At().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,r){return xi.makeTranslation(e,t,r),this.applyMatrix4(xi),this}scale(e,t,r){return xi.makeScale(e,t,r),this.applyMatrix4(xi),this}lookAt(e){return Ef.lookAt(e),Ef.updateMatrix(),this.applyMatrix4(Ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Tn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];li.setFromBufferAttribute(l),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];sa.setFromBufferAttribute(f),this.morphTargetsRelative?(Mn.addVectors(li.min,sa.min),li.expandByPoint(Mn),Mn.addVectors(li.max,sa.max),li.expandByPoint(Mn)):(li.expandByPoint(sa.min),li.expandByPoint(sa.max))}li.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)Mn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Mn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)Mn.fromBufferAttribute(f,h),d&&(ro.fromBufferAttribute(e,h),Mn.add(ro)),o=Math.max(o,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let A=0;A<r.count;A++)f[A]=new Z,d[A]=new Z;const h=new Z,g=new Z,x=new Z,m=new Pt,_=new Pt,S=new Pt,T=new Z,y=new Z;function M(A,U,W){h.fromBufferAttribute(r,A),g.fromBufferAttribute(r,U),x.fromBufferAttribute(r,W),m.fromBufferAttribute(l,A),_.fromBufferAttribute(l,U),S.fromBufferAttribute(l,W),g.sub(h),x.sub(h),_.sub(m),S.sub(m);const B=1/(_.x*S.y-S.x*_.y);isFinite(B)&&(T.copy(g).multiplyScalar(S.y).addScaledVector(x,-_.y).multiplyScalar(B),y.copy(x).multiplyScalar(_.x).addScaledVector(g,-S.x).multiplyScalar(B),f[A].add(T),f[U].add(T),f[W].add(T),d[A].add(y),d[U].add(y),d[W].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let A=0,U=E.length;A<U;++A){const W=E[A],B=W.start,q=W.count;for(let ce=B,ue=B+q;ce<ue;ce+=3)M(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const P=new Z,b=new Z,z=new Z,L=new Z;function k(A){z.fromBufferAttribute(o,A),L.copy(z);const U=f[A];P.copy(U),P.sub(z.multiplyScalar(z.dot(U))).normalize(),b.crossVectors(L,U);const B=b.dot(d[A])<0?-1:1;c.setXYZW(A,P.x,P.y,P.z,B)}for(let A=0,U=E.length;A<U;++A){const W=E[A],B=W.start,q=W.count;for(let ce=B,ue=B+q;ce<ue;ce+=3)k(e.getX(ce+0)),k(e.getX(ce+1)),k(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,_=r.count;m<_;m++)r.setXYZ(m,0,0,0);const o=new Z,l=new Z,c=new Z,f=new Z,d=new Z,h=new Z,g=new Z,x=new Z;if(e)for(let m=0,_=e.count;m<_;m+=3){const S=e.getX(m+0),T=e.getX(m+1),y=e.getX(m+2);o.fromBufferAttribute(t,S),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,y),g.subVectors(c,l),x.subVectors(o,l),g.cross(x),f.fromBufferAttribute(r,S),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,y),f.add(g),d.add(g),h.add(g),r.setXYZ(S,f.x,f.y,f.z),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,_=t.count;m<_;m+=3)o.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,l),x.subVectors(o,l),g.cross(x),r.setXYZ(m+0,g.x,g.y,g.z),r.setXYZ(m+1,g.x,g.y,g.z),r.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(f,d){const h=f.array,g=f.itemSize,x=f.normalized,m=new h.constructor(d.length*g);let _=0,S=0;for(let T=0,y=d.length;T<y;T++){f.isInterleavedBufferAttribute?_=d[T]*f.data.stride+f.offset:_=d[T]*g;for(let M=0;M<g;M++)m[S++]=h[_++]}return new Nt(m,g,x)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let g=0,x=h.length;g<x;g++){const m=h[g],_=e(m,r);d.push(_)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],g=[];for(let x=0,m=h.length;x<m;x++){const _=h[x];g.push(_.toJSON(e.data))}g.length>0&&(o[d]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(t))}const l=e.morphAttributes;for(const h in l){const g=[],x=l[h];for(let m=0,_=x.length;m<_;m++)g.push(x[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,g=c.length;h<g;h++){const x=c[h];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Ry=0;class Mo extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=ho,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qf,this.blendDst=Jf,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){gt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(r.blending=this.blending),this.side!==Kr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qf&&(r.blendSrc=this.blendSrc),this.blendDst!==Jf&&(r.blendDst=this.blendDst),this.blendEquation!==ms&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Km&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const dr=new Z,wf=new Z,Il=new Z,Vr=new Z,Tf=new Z,Dl=new Z,Cf=new Z;class td{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dr.copy(this.origin).addScaledVector(this.direction,t),dr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){wf.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(wf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Il),f=Vr.dot(this.direction),d=-Vr.dot(Il),h=Vr.lengthSq(),g=Math.abs(1-c*c);let x,m,_,S;if(g>0)if(x=c*d-f,m=c*f-d,S=l*g,x>=0)if(m>=-S)if(m<=S){const T=1/g;x*=T,m*=T,_=x*(x+c*m+2*f)+m*(c*x+m+2*d)+h}else m=l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;else m=-l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;else m<=-S?(x=Math.max(0,-(-c*l+f)),m=x>0?-l:Math.min(Math.max(-l,-d),l),_=-x*x+m*(m+2*d)+h):m<=S?(x=0,m=Math.min(Math.max(-l,-d),l),_=m*(m+2*d)+h):(x=Math.max(0,-(c*l+f)),m=x>0?l:Math.min(Math.max(-l,-d),l),_=-x*x+m*(m+2*d)+h);else m=c>0?-l:l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(wf).addScaledVector(Il,m),_}intersectSphere(e,t){dr.subVectors(e.center,this.origin);const r=dr.dot(this.direction),o=dr.dot(dr)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,d;const h=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,m=this.origin;return h>=0?(r=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(r=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),g>=0?(l=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(l=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),x>=0?(f=(e.min.z-m.z)*x,d=(e.max.z-m.z)*x):(f=(e.max.z-m.z)*x,d=(e.min.z-m.z)*x),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,t,r,o,l){Tf.subVectors(t,e),Dl.subVectors(r,e),Cf.crossVectors(Tf,Dl);let c=this.direction.dot(Cf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Vr.subVectors(this.origin,e);const d=f*this.direction.dot(Dl.crossVectors(Vr,Dl));if(d<0)return null;const h=f*this.direction.dot(Tf.cross(Vr));if(h<0||d+h>c)return null;const g=-f*Vr.dot(Cf);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jg extends Mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.combine=Rg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const f0=new rn,hs=new td,Ul=new yo,h0=new Z,Nl=new Z,Fl=new Z,Ol=new Z,bf=new Z,kl=new Z,d0=new Z,Bl=new Z;class Cn extends jn{constructor(e=new ln,t=new Jg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){kl.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const g=f[d],x=l[d];g!==0&&(bf.fromBufferAttribute(x,e),c?kl.addScaledVector(bf,g):kl.addScaledVector(bf.sub(t),g))}t.add(kl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ul.copy(r.boundingSphere),Ul.applyMatrix4(l),hs.copy(e.ray).recast(e.near),!(Ul.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Ul,h0)===null||hs.origin.distanceToSquared(h0)>(e.far-e.near)**2))&&(f0.copy(l).invert(),hs.copy(e.ray).applyMatrix4(f0),!(r.boundingBox!==null&&hs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,g=l.attributes.uv1,x=l.attributes.normal,m=l.groups,_=l.drawRange;if(f!==null)if(Array.isArray(c))for(let S=0,T=m.length;S<T;S++){const y=m[S],M=c[y.materialIndex],E=Math.max(y.start,_.start),P=Math.min(f.count,Math.min(y.start+y.count,_.start+_.count));for(let b=E,z=P;b<z;b+=3){const L=f.getX(b),k=f.getX(b+1),A=f.getX(b+2);o=zl(this,M,e,r,h,g,x,L,k,A),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,_.start),T=Math.min(f.count,_.start+_.count);for(let y=S,M=T;y<M;y+=3){const E=f.getX(y),P=f.getX(y+1),b=f.getX(y+2);o=zl(this,c,e,r,h,g,x,E,P,b),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let S=0,T=m.length;S<T;S++){const y=m[S],M=c[y.materialIndex],E=Math.max(y.start,_.start),P=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let b=E,z=P;b<z;b+=3){const L=b,k=b+1,A=b+2;o=zl(this,M,e,r,h,g,x,L,k,A),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,_.start),T=Math.min(d.count,_.start+_.count);for(let y=S,M=T;y<M;y+=3){const E=y,P=y+1,b=y+2;o=zl(this,c,e,r,h,g,x,E,P,b),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Py(s,e,t,r,o,l,c,f){let d;if(e.side===ei?d=r.intersectTriangle(c,l,o,!0,f):d=r.intersectTriangle(o,l,c,e.side===Kr,f),d===null)return null;Bl.copy(f),Bl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Bl);return h<t.near||h>t.far?null:{distance:h,point:Bl.clone(),object:s}}function zl(s,e,t,r,o,l,c,f,d,h){s.getVertexPosition(f,Nl),s.getVertexPosition(d,Fl),s.getVertexPosition(h,Ol);const g=Py(s,e,t,r,Nl,Fl,Ol,d0);if(g){const x=new Z;Oi.getBarycoord(d0,Nl,Fl,Ol,x),o&&(g.uv=Oi.getInterpolatedAttribute(o,f,d,h,x,new Pt)),l&&(g.uv1=Oi.getInterpolatedAttribute(l,f,d,h,x,new Pt)),c&&(g.normal=Oi.getInterpolatedAttribute(c,f,d,h,x,new Z),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const m={a:f,b:d,c:h,normal:new Z,materialIndex:0};Oi.getNormal(Nl,Fl,Ol,m.normal),g.face=m,g.barycoord=x}return g}class Zg extends On{constructor(e=null,t=1,r=1,o,l,c,f,d,h=pn,g=pn,x,m){super(null,c,f,d,h,g,o,l,x,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rf=new Z,Ly=new Z,Iy=new At;class ps{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Rf.subVectors(r,t).cross(Ly.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Rf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Iy.getNormalMatrix(e),o=this.coplanarPoint(Rf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new yo,Dy=new Pt(.5,.5),Hl=new Z;class $g{constructor(e=new ps,t=new ps,r=new ps,o=new ps,l=new ps,c=new ps){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=qi,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],h=l[3],g=l[4],x=l[5],m=l[6],_=l[7],S=l[8],T=l[9],y=l[10],M=l[11],E=l[12],P=l[13],b=l[14],z=l[15];if(o[0].setComponents(h-c,_-g,M-S,z-E).normalize(),o[1].setComponents(h+c,_+g,M+S,z+E).normalize(),o[2].setComponents(h+f,_+x,M+T,z+P).normalize(),o[3].setComponents(h-f,_-x,M-T,z-P).normalize(),r)o[4].setComponents(d,m,y,b).normalize(),o[5].setComponents(h-d,_-m,M-y,z-b).normalize();else if(o[4].setComponents(h-d,_-m,M-y,z-b).normalize(),t===qi)o[5].setComponents(h+d,_+m,M+y,z+b).normalize();else if(t===hc)o[5].setComponents(d,m,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);const t=Dy.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Hl.x=o.normal.x>0?e.max.x:e.min.x,Hl.y=o.normal.y>0?e.max.y:e.min.y,Hl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ev extends Mo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pc=new Z,mc=new Z,p0=new rn,oa=new td,Vl=new yo,Pf=new Z,m0=new Z;class tv extends jn{constructor(e=new ln,t=new ev){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)pc.fromBufferAttribute(t,o-1),mc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=pc.distanceTo(mc);e.setAttribute("lineDistance",new Tn(r,1))}else gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vl.copy(r.boundingSphere),Vl.applyMatrix4(o),Vl.radius+=l,e.ray.intersectsSphere(Vl)===!1)return;p0.copy(o).invert(),oa.copy(e.ray).applyMatrix4(p0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,g=r.index,m=r.attributes.position;if(g!==null){const _=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let T=_,y=S-1;T<y;T+=h){const M=g.getX(T),E=g.getX(T+1),P=Gl(this,e,oa,d,M,E,T);P&&t.push(P)}if(this.isLineLoop){const T=g.getX(S-1),y=g.getX(_),M=Gl(this,e,oa,d,T,y,S-1);M&&t.push(M)}}else{const _=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let T=_,y=S-1;T<y;T+=h){const M=Gl(this,e,oa,d,T,T+1,T);M&&t.push(M)}if(this.isLineLoop){const T=Gl(this,e,oa,d,S-1,_,S-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Gl(s,e,t,r,o,l,c){const f=s.geometry.attributes.position;if(pc.fromBufferAttribute(f,o),mc.fromBufferAttribute(f,l),t.distanceSqToSegment(pc,mc,Pf,m0)>r)return;Pf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Pf);if(!(h<e.near||h>e.far))return{distance:h,point:m0.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const g0=new Z,v0=new Z;class Uy extends tv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)g0.fromBufferAttribute(t,o),v0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+g0.distanceTo(v0);e.setAttribute("lineDistance",new Tn(r,1))}else gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Oh extends Mo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const x0=new rn,kh=new td,Wl=new yo,Xl=new Z;class Bh extends jn{constructor(e=new ln,t=new Oh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Wl.copy(r.boundingSphere),Wl.applyMatrix4(o),Wl.radius+=l,e.ray.intersectsSphere(Wl)===!1)return;x0.copy(o).invert(),kh.copy(e.ray).applyMatrix4(x0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=r.index,x=r.attributes.position;if(h!==null){const m=Math.max(0,c.start),_=Math.min(h.count,c.start+c.count);for(let S=m,T=_;S<T;S++){const y=h.getX(S);Xl.fromBufferAttribute(x,y),_0(Xl,y,d,o,e,t,this)}}else{const m=Math.max(0,c.start),_=Math.min(x.count,c.start+c.count);for(let S=m,T=_;S<T;S++)Xl.fromBufferAttribute(x,S),_0(Xl,S,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function _0(s,e,t,r,o,l,c){const f=kh.distanceSqToPoint(s);if(f<t){const d=new Z;kh.closestPointToPoint(s,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class nv extends On{constructor(e=[],t=_s,r,o,l,c,f,d,h,g){super(e,t,r,o,l,c,f,d,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ny extends On{constructor(e,t,r,o,l,c,f,d,h){super(e,t,r,o,l,c,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vo extends On{constructor(e,t,r=Zi,o,l,c,f=pn,d=pn,h,g=xr,x=1){if(g!==xr&&g!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:x};super(m,o,l,c,f,d,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ed(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fy extends vo{constructor(e,t=Zi,r=_s,o,l,c=pn,f=pn,d,h=xr){const g={width:e,height:e,depth:1},x=[g,g,g,g,g,g];super(e,e,t,r,o,l,c,f,d,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class iv extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sa extends ln{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],g=[],x=[];let m=0,_=0;S("z","y","x",-1,-1,r,t,e,c,l,0),S("z","y","x",1,-1,r,t,-e,c,l,1),S("x","z","y",1,1,e,r,t,o,c,2),S("x","z","y",1,-1,e,r,-t,o,c,3),S("x","y","z",1,-1,e,t,r,o,l,4),S("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Tn(h,3)),this.setAttribute("normal",new Tn(g,3)),this.setAttribute("uv",new Tn(x,2));function S(T,y,M,E,P,b,z,L,k,A,U){const W=b/k,B=z/A,q=b/2,ce=z/2,ue=L/2,j=k+1,te=A+1;let X=0,F=0;const N=new Z;for(let Y=0;Y<te;Y++){const D=Y*B-ce;for(let V=0;V<j;V++){const Se=V*W-q;N[T]=Se*E,N[y]=D*P,N[M]=ue,h.push(N.x,N.y,N.z),N[T]=0,N[y]=0,N[M]=L>0?1:-1,g.push(N.x,N.y,N.z),x.push(V/k),x.push(1-Y/A),X+=1}}for(let Y=0;Y<A;Y++)for(let D=0;D<k;D++){const V=m+D+j*Y,Se=m+D+j*(Y+1),Ae=m+(D+1)+j*(Y+1),Me=m+(D+1)+j*Y;d.push(V,Se,Me),d.push(Se,Ae,Me),F+=6}f.addGroup(_,F,U),_+=F,m+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class nd extends ln{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],c=[];f(o),h(r),g(),this.setAttribute("position",new Tn(l,3)),this.setAttribute("normal",new Tn(l.slice(),3)),this.setAttribute("uv",new Tn(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(E){const P=new Z,b=new Z,z=new Z;for(let L=0;L<t.length;L+=3)_(t[L+0],P),_(t[L+1],b),_(t[L+2],z),d(P,b,z,E)}function d(E,P,b,z){const L=z+1,k=[];for(let A=0;A<=L;A++){k[A]=[];const U=E.clone().lerp(b,A/L),W=P.clone().lerp(b,A/L),B=L-A;for(let q=0;q<=B;q++)q===0&&A===L?k[A][q]=U:k[A][q]=U.clone().lerp(W,q/B)}for(let A=0;A<L;A++)for(let U=0;U<2*(L-A)-1;U++){const W=Math.floor(U/2);U%2===0?(m(k[A][W+1]),m(k[A+1][W]),m(k[A][W])):(m(k[A][W+1]),m(k[A+1][W+1]),m(k[A+1][W]))}}function h(E){const P=new Z;for(let b=0;b<l.length;b+=3)P.x=l[b+0],P.y=l[b+1],P.z=l[b+2],P.normalize().multiplyScalar(E),l[b+0]=P.x,l[b+1]=P.y,l[b+2]=P.z}function g(){const E=new Z;for(let P=0;P<l.length;P+=3){E.x=l[P+0],E.y=l[P+1],E.z=l[P+2];const b=y(E)/2/Math.PI+.5,z=M(E)/Math.PI+.5;c.push(b,1-z)}S(),x()}function x(){for(let E=0;E<c.length;E+=6){const P=c[E+0],b=c[E+2],z=c[E+4],L=Math.max(P,b,z),k=Math.min(P,b,z);L>.9&&k<.1&&(P<.2&&(c[E+0]+=1),b<.2&&(c[E+2]+=1),z<.2&&(c[E+4]+=1))}}function m(E){l.push(E.x,E.y,E.z)}function _(E,P){const b=E*3;P.x=e[b+0],P.y=e[b+1],P.z=e[b+2]}function S(){const E=new Z,P=new Z,b=new Z,z=new Z,L=new Pt,k=new Pt,A=new Pt;for(let U=0,W=0;U<l.length;U+=9,W+=6){E.set(l[U+0],l[U+1],l[U+2]),P.set(l[U+3],l[U+4],l[U+5]),b.set(l[U+6],l[U+7],l[U+8]),L.set(c[W+0],c[W+1]),k.set(c[W+2],c[W+3]),A.set(c[W+4],c[W+5]),z.copy(E).add(P).add(b).divideScalar(3);const B=y(z);T(L,W+0,E,B),T(k,W+2,P,B),T(A,W+4,b,B)}}function T(E,P,b,z){z<0&&E.x===1&&(c[P]=E.x-1),b.x===0&&b.z===0&&(c[P]=z/2/Math.PI+.5)}function y(E){return Math.atan2(E.z,-E.x)}function M(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nd(e.vertices,e.indices,e.radius,e.detail)}}class Oy{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){gt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,d=l-1,h;for(;f<=d;)if(o=Math.floor(f+(d-f)/2),h=r[o]-c,h<0)f=o+1;else if(h>0)d=o-1;else{d=o;break}if(o=d,r[o]===c)return o/(l-1);const g=r[o],m=r[o+1]-g,_=(c-g)/m;return(o+_)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),d=t||(c.isVector2?new Pt:new Z);return d.copy(f).sub(c).normalize(),d}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new Z,o=[],l=[],c=[],f=new Z,d=new rn;for(let _=0;_<=e;_++){const S=_/e;o[_]=this.getTangentAt(S,new Z)}l[0]=new Z,c[0]=new Z;let h=Number.MAX_VALUE;const g=Math.abs(o[0].x),x=Math.abs(o[0].y),m=Math.abs(o[0].z);g<=h&&(h=g,r.set(1,0,0)),x<=h&&(h=x,r.set(0,1,0)),m<=h&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let _=1;_<=e;_++){if(l[_]=l[_-1].clone(),c[_]=c[_-1].clone(),f.crossVectors(o[_-1],o[_]),f.length()>Number.EPSILON){f.normalize();const S=Math.acos(Rt(o[_-1].dot(o[_]),-1,1));l[_].applyMatrix4(d.makeRotationAxis(f,S))}c[_].crossVectors(o[_],l[_])}if(t===!0){let _=Math.acos(Rt(l[0].dot(l[e]),-1,1));_/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(_=-_);for(let S=1;S<=e;S++)l[S].applyMatrix4(d.makeRotationAxis(o[S],_*S)),c[S].crossVectors(o[S],l[S])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function id(){let s=0,e=0,t=0,r=0;function o(l,c,f,d){s=l,e=f,t=-3*l+3*c-2*f-d,r=2*l-2*c+f+d}return{initCatmullRom:function(l,c,f,d,h){o(c,f,h*(f-l),h*(d-c))},initNonuniformCatmullRom:function(l,c,f,d,h,g,x){let m=(c-l)/h-(f-l)/(h+g)+(f-c)/g,_=(f-c)/g-(d-c)/(g+x)+(d-f)/x;m*=g,_*=g,o(c,f,m,_)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const y0=new Z,M0=new Z,Lf=new id,If=new id,Df=new id;class ky extends Oy{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new Z){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),d=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:d===0&&f===l-1&&(f=l-2,d=1);let h,g;this.closed||f>0?h=o[(f-1)%l]:(M0.subVectors(o[0],o[1]).add(o[0]),h=M0);const x=o[f%l],m=o[(f+1)%l];if(this.closed||f+2<l?g=o[(f+2)%l]:(y0.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=y0),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let S=Math.pow(h.distanceToSquared(x),_),T=Math.pow(x.distanceToSquared(m),_),y=Math.pow(m.distanceToSquared(g),_);T<1e-4&&(T=1),S<1e-4&&(S=T),y<1e-4&&(y=T),Lf.initNonuniformCatmullRom(h.x,x.x,m.x,g.x,S,T,y),If.initNonuniformCatmullRom(h.y,x.y,m.y,g.y,S,T,y),Df.initNonuniformCatmullRom(h.z,x.z,m.z,g.z,S,T,y)}else this.curveType==="catmullrom"&&(Lf.initCatmullRom(h.x,x.x,m.x,g.x,this.tension),If.initCatmullRom(h.y,x.y,m.y,g.y,this.tension),Df.initCatmullRom(h.z,x.z,m.z,g.z,this.tension));return r.set(Lf.calc(d),If.calc(d),Df.calc(d)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Z().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class rd extends nd{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rd(e.radius,e.detail)}}class yc extends ln{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,g=d+1,x=e/f,m=t/d,_=[],S=[],T=[],y=[];for(let M=0;M<g;M++){const E=M*m-c;for(let P=0;P<h;P++){const b=P*x-l;S.push(b,-E,0),T.push(0,0,1),y.push(P/f),y.push(1-M/d)}}for(let M=0;M<d;M++)for(let E=0;E<f;E++){const P=E+h*M,b=E+h*(M+1),z=E+1+h*(M+1),L=E+1+h*M;_.push(P,b,L),_.push(b,z,L)}this.setIndex(_),this.setAttribute("position",new Tn(S,3)),this.setAttribute("normal",new Tn(T,3)),this.setAttribute("uv",new Tn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.width,e.height,e.widthSegments,e.heightSegments)}}class gc extends ln{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(c+f,Math.PI);let h=0;const g=[],x=new Z,m=new Z,_=[],S=[],T=[],y=[];for(let M=0;M<=r;M++){const E=[],P=M/r;let b=0;M===0&&c===0?b=.5/t:M===r&&d===Math.PI&&(b=-.5/t);for(let z=0;z<=t;z++){const L=z/t;x.x=-e*Math.cos(o+L*l)*Math.sin(c+P*f),x.y=e*Math.cos(c+P*f),x.z=e*Math.sin(o+L*l)*Math.sin(c+P*f),S.push(x.x,x.y,x.z),m.copy(x).normalize(),T.push(m.x,m.y,m.z),y.push(L+b,1-P),E.push(h++)}g.push(E)}for(let M=0;M<r;M++)for(let E=0;E<t;E++){const P=g[M][E+1],b=g[M][E],z=g[M+1][E],L=g[M+1][E+1];(M!==0||c>0)&&_.push(P,b,L),(M!==r-1||d<Math.PI)&&_.push(b,z,L)}this.setIndex(_),this.setAttribute("position",new Tn(S,3)),this.setAttribute("normal",new Tn(T,3)),this.setAttribute("uv",new Tn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function xo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(S0(o))o.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(S0(o[0])){const l=[];for(let c=0,f=o.length;c<f;c++)l[c]=o[c].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Xn(s){const e={};for(let t=0;t<s.length;t++){const r=xo(s[t]);for(const o in r)e[o]=r[o]}return e}function S0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function By(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function rv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const zy={clone:xo,merge:Xn};var Hy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hy,this.fragmentShader=Vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=By(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Gy extends ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wy extends Mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xy extends Mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jl=new Z,Kl=new Qi,Xi=new Z;class sv extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(jl,Kl,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jl,Kl,Xi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(jl,Kl,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jl,Kl,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Gr=new Z,A0=new Pt,E0=new Pt;class $n extends sv{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z)}getViewSize(e,t){return this.getViewBounds(e,A0,E0),t.subVectors(E0,A0)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ga*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class sd extends sv{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const so=-90,oo=1;class jy extends jn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new $n(so,oo,e,t);o.layers=this.layers,this.add(o);const l=new $n(so,oo,e,t);l.layers=this.layers,this.add(l);const c=new $n(so,oo,e,t);c.layers=this.layers,this.add(c);const f=new $n(so,oo,e,t);f.layers=this.layers,this.add(f);const d=new $n(so,oo,e,t);d.layers=this.layers,this.add(d);const h=new $n(so,oo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,d]=t;for(const h of t)this.remove(h);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===hc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,g]=this.children,x=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(x,m,_),e.xr.enabled=S,r.texture.needsPMREMUpdate=!0}}class Ky extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const pd=class pd{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};pd.prototype.isMatrix2=!0;let w0=pd;function T0(s,e,t,r){const o=qy(r);switch(t){case Vg:return s*e;case Wg:return s*e/o.components*o.byteLength;case qh:return s*e/o.components*o.byteLength;case ys:return s*e*2/o.components*o.byteLength;case Yh:return s*e*2/o.components*o.byteLength;case Gg:return s*e*3/o.components*o.byteLength;case Mi:return s*e*4/o.components*o.byteLength;case Qh:return s*e*4/o.components*o.byteLength;case ec:case tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case nc:case ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ah:case ch:return Math.max(s,16)*Math.max(e,8)/4;case oh:case lh:return Math.max(s,8)*Math.max(e,8)/2;case uh:case fh:case dh:case ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hh:case lc:case mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case xh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _h:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Th:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case bh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ph:case Lh:case Ih:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Dh:case Uh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case cc:case Nh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qy(s){switch(s){case yi:case kg:return{byteLength:1,components:1};case xa:case Bg:case vr:return{byteLength:2,components:1};case jh:case Kh:return{byteLength:2,components:4};case Zi:case Xh:case ki:return{byteLength:4,components:1};case zg:case Hg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ov(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Yy(s){const e=new WeakMap;function t(f,d){const h=f.array,g=f.usage,x=h.byteLength,m=s.createBuffer();s.bindBuffer(d,m),s.bufferData(d,h,g),f.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,d,h){const g=d.array,x=d.updateRanges;if(s.bindBuffer(h,f),x.length===0)s.bufferSubData(h,0,g);else{x.sort((_,S)=>_.start-S.start);let m=0;for(let _=1;_<x.length;_++){const S=x[m],T=x[_];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++m,x[m]=T)}x.length=m+1;for(let _=0,S=x.length;_<S;_++){const T=x[_];s.bufferSubData(h,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:c}}var Qy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jy=`#ifdef USE_ALPHAHASH
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
#endif`,Zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nM=`#ifdef USE_AOMAP
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
#endif`,iM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rM=`#ifdef USE_BATCHING
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
#endif`,sM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cM=`#ifdef USE_IRIDESCENCE
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
#endif`,uM=`#ifdef USE_BUMPMAP
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
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_M=`#define PI 3.141592653589793
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
} // validated`,yM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,MM=`vec3 transformedNormal = objectNormal;
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
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TM="gl_FragColor = linearToOutputTexel( gl_FragColor );",CM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bM=`#ifdef USE_ENVMAP
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
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,DM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OM=`#ifdef USE_GRADIENTMAP
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
}`,kM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,VM=`#ifdef USE_ENVMAP
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
#endif`,GM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KM=`PhysicalMaterial material;
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
#endif`,qM=`uniform sampler2D dfgLUT;
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
}`,YM=`
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
#endif`,ZM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oS=`#if defined( USE_POINTS_UV )
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
#endif`,aS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hS=`#ifdef USE_MORPHTARGETS
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
#endif`,dS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_S=`#ifdef USE_NORMALMAP
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
#endif`,yS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ES=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,US=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,NS=`float getShadowMask() {
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
}`,FS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OS=`#ifdef USE_SKINNING
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
#endif`,kS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BS=`#ifdef USE_SKINNING
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
#endif`,zS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,WS=`#ifdef USE_TRANSMISSION
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
#endif`,XS=`#ifdef USE_TRANSMISSION
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
#endif`,jS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JS=`uniform sampler2D t2D;
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
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$S=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
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
}`,i1=`#if DEPTH_PACKING == 3200
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
}`,r1=`#define DISTANCE
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
}`,s1=`#define DISTANCE
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
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
}`,c1=`uniform vec3 diffuse;
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
}`,u1=`#include <common>
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
}`,f1=`uniform vec3 diffuse;
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
}`,h1=`#define LAMBERT
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
}`,d1=`#define LAMBERT
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
}`,p1=`#define MATCAP
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
}`,m1=`#define MATCAP
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
}`,g1=`#define NORMAL
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
}`,v1=`#define NORMAL
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
}`,x1=`#define PHONG
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
}`,_1=`#define PHONG
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
}`,y1=`#define STANDARD
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
}`,M1=`#define STANDARD
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
}`,S1=`#define TOON
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
}`,A1=`#define TOON
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
}`,E1=`uniform float size;
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
}`,w1=`uniform vec3 diffuse;
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
}`,T1=`#include <common>
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
}`,C1=`uniform vec3 color;
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
}`,b1=`uniform float rotation;
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
}`,R1=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:Qy,alphahash_pars_fragment:Jy,alphamap_fragment:Zy,alphamap_pars_fragment:$y,alphatest_fragment:eM,alphatest_pars_fragment:tM,aomap_fragment:nM,aomap_pars_fragment:iM,batching_pars_vertex:rM,batching_vertex:sM,begin_vertex:oM,beginnormal_vertex:aM,bsdfs:lM,iridescence_fragment:cM,bumpmap_pars_fragment:uM,clipping_planes_fragment:fM,clipping_planes_pars_fragment:hM,clipping_planes_pars_vertex:dM,clipping_planes_vertex:pM,color_fragment:mM,color_pars_fragment:gM,color_pars_vertex:vM,color_vertex:xM,common:_M,cube_uv_reflection_fragment:yM,defaultnormal_vertex:MM,displacementmap_pars_vertex:SM,displacementmap_vertex:AM,emissivemap_fragment:EM,emissivemap_pars_fragment:wM,colorspace_fragment:TM,colorspace_pars_fragment:CM,envmap_fragment:bM,envmap_common_pars_fragment:RM,envmap_pars_fragment:PM,envmap_pars_vertex:LM,envmap_physical_pars_fragment:VM,envmap_vertex:IM,fog_vertex:DM,fog_pars_vertex:UM,fog_fragment:NM,fog_pars_fragment:FM,gradientmap_pars_fragment:OM,lightmap_pars_fragment:kM,lights_lambert_fragment:BM,lights_lambert_pars_fragment:zM,lights_pars_begin:HM,lights_toon_fragment:GM,lights_toon_pars_fragment:WM,lights_phong_fragment:XM,lights_phong_pars_fragment:jM,lights_physical_fragment:KM,lights_physical_pars_fragment:qM,lights_fragment_begin:YM,lights_fragment_maps:QM,lights_fragment_end:JM,lightprobes_pars_fragment:ZM,logdepthbuf_fragment:$M,logdepthbuf_pars_fragment:eS,logdepthbuf_pars_vertex:tS,logdepthbuf_vertex:nS,map_fragment:iS,map_pars_fragment:rS,map_particle_fragment:sS,map_particle_pars_fragment:oS,metalnessmap_fragment:aS,metalnessmap_pars_fragment:lS,morphinstance_vertex:cS,morphcolor_vertex:uS,morphnormal_vertex:fS,morphtarget_pars_vertex:hS,morphtarget_vertex:dS,normal_fragment_begin:pS,normal_fragment_maps:mS,normal_pars_fragment:gS,normal_pars_vertex:vS,normal_vertex:xS,normalmap_pars_fragment:_S,clearcoat_normal_fragment_begin:yS,clearcoat_normal_fragment_maps:MS,clearcoat_pars_fragment:SS,iridescence_pars_fragment:AS,opaque_fragment:ES,packing:wS,premultiplied_alpha_fragment:TS,project_vertex:CS,dithering_fragment:bS,dithering_pars_fragment:RS,roughnessmap_fragment:PS,roughnessmap_pars_fragment:LS,shadowmap_pars_fragment:IS,shadowmap_pars_vertex:DS,shadowmap_vertex:US,shadowmask_pars_fragment:NS,skinbase_vertex:FS,skinning_pars_vertex:OS,skinning_vertex:kS,skinnormal_vertex:BS,specularmap_fragment:zS,specularmap_pars_fragment:HS,tonemapping_fragment:VS,tonemapping_pars_fragment:GS,transmission_fragment:WS,transmission_pars_fragment:XS,uv_pars_fragment:jS,uv_pars_vertex:KS,uv_vertex:qS,worldpos_vertex:YS,background_vert:QS,background_frag:JS,backgroundCube_vert:ZS,backgroundCube_frag:$S,cube_vert:e1,cube_frag:t1,depth_vert:n1,depth_frag:i1,distance_vert:r1,distance_frag:s1,equirect_vert:o1,equirect_frag:a1,linedashed_vert:l1,linedashed_frag:c1,meshbasic_vert:u1,meshbasic_frag:f1,meshlambert_vert:h1,meshlambert_frag:d1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:g1,meshnormal_frag:v1,meshphong_vert:x1,meshphong_frag:_1,meshphysical_vert:y1,meshphysical_frag:M1,meshtoon_vert:S1,meshtoon_frag:A1,points_vert:E1,points_frag:w1,shadow_vert:T1,shadow_frag:C1,sprite_vert:b1,sprite_frag:R1},Qe={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Ki={basic:{uniforms:Xn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Xn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Xn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Xn([Qe.common,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.roughnessmap,Qe.metalnessmap,Qe.fog,Qe.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Xn([Qe.common,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.gradientmap,Qe.fog,Qe.lights,{emissive:{value:new Ot(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Xn([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Xn([Qe.points,Qe.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Xn([Qe.common,Qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Xn([Qe.common,Qe.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Xn([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Xn([Qe.sprite,Qe.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Xn([Qe.common,Qe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Xn([Qe.lights,Qe.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Ki.physical={uniforms:Xn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const ql={r:0,b:0,g:0},P1=new rn,av=new At;av.set(-1,0,0,0,1,0,0,0,1);function L1(s,e,t,r,o,l){const c=new Ot(0);let f=o===!0?0:1,d,h,g=null,x=0,m=null;function _(E){let P=E.isScene===!0?E.background:null;if(P&&P.isTexture){const b=E.backgroundBlurriness>0;P=e.get(P,b)}return P}function S(E){let P=!1;const b=_(E);b===null?y(c,f):b&&b.isColor&&(y(b,1),P=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?t.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function T(E,P){const b=_(P);b&&(b.isCubeTexture||b.mapping===xc)?(h===void 0&&(h=new Cn(new Sa(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:xo(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(P1.makeRotationFromEuler(P.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(av),h.material.toneMapped=Dt.getTransfer(b.colorSpace)!==Gt,(g!==b||x!==b.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,g=b,x=b.version,m=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(d===void 0&&(d=new Cn(new yc(2,2),new ci({name:"BackgroundMaterial",uniforms:xo(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=b,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.toneMapped=Dt.getTransfer(b.colorSpace)!==Gt,b.matrixAutoUpdate===!0&&b.updateMatrix(),d.material.uniforms.uvTransform.value.copy(b.matrix),(g!==b||x!==b.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,g=b,x=b.version,m=s.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null))}function y(E,P){E.getRGB(ql,rv(s)),t.buffers.color.setClear(ql.r,ql.g,ql.b,P,l)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(E,P=1){c.set(E),f=P,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(E){f=E,y(c,f)},render:S,addToRenderList:T,dispose:M}}function I1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=m(null);let l=o,c=!1;function f(B,q,ce,ue,j){let te=!1;const X=x(B,ue,ce,q);l!==X&&(l=X,h(l.object)),te=_(B,ue,ce,j),te&&S(B,ue,ce,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(te||c)&&(c=!1,b(B,q,ce,ue),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function d(){return s.createVertexArray()}function h(B){return s.bindVertexArray(B)}function g(B){return s.deleteVertexArray(B)}function x(B,q,ce,ue){const j=ue.wireframe===!0;let te=r[q.id];te===void 0&&(te={},r[q.id]=te);const X=B.isInstancedMesh===!0?B.id:0;let F=te[X];F===void 0&&(F={},te[X]=F);let N=F[ce.id];N===void 0&&(N={},F[ce.id]=N);let Y=N[j];return Y===void 0&&(Y=m(d()),N[j]=Y),Y}function m(B){const q=[],ce=[],ue=[];for(let j=0;j<t;j++)q[j]=0,ce[j]=0,ue[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ce,attributeDivisors:ue,object:B,attributes:{},index:null}}function _(B,q,ce,ue){const j=l.attributes,te=q.attributes;let X=0;const F=ce.getAttributes();for(const N in F)if(F[N].location>=0){const D=j[N];let V=te[N];if(V===void 0&&(N==="instanceMatrix"&&B.instanceMatrix&&(V=B.instanceMatrix),N==="instanceColor"&&B.instanceColor&&(V=B.instanceColor)),D===void 0||D.attribute!==V||V&&D.data!==V.data)return!0;X++}return l.attributesNum!==X||l.index!==ue}function S(B,q,ce,ue){const j={},te=q.attributes;let X=0;const F=ce.getAttributes();for(const N in F)if(F[N].location>=0){let D=te[N];D===void 0&&(N==="instanceMatrix"&&B.instanceMatrix&&(D=B.instanceMatrix),N==="instanceColor"&&B.instanceColor&&(D=B.instanceColor));const V={};V.attribute=D,D&&D.data&&(V.data=D.data),j[N]=V,X++}l.attributes=j,l.attributesNum=X,l.index=ue}function T(){const B=l.newAttributes;for(let q=0,ce=B.length;q<ce;q++)B[q]=0}function y(B){M(B,0)}function M(B,q){const ce=l.newAttributes,ue=l.enabledAttributes,j=l.attributeDivisors;ce[B]=1,ue[B]===0&&(s.enableVertexAttribArray(B),ue[B]=1),j[B]!==q&&(s.vertexAttribDivisor(B,q),j[B]=q)}function E(){const B=l.newAttributes,q=l.enabledAttributes;for(let ce=0,ue=q.length;ce<ue;ce++)q[ce]!==B[ce]&&(s.disableVertexAttribArray(ce),q[ce]=0)}function P(B,q,ce,ue,j,te,X){X===!0?s.vertexAttribIPointer(B,q,ce,j,te):s.vertexAttribPointer(B,q,ce,ue,j,te)}function b(B,q,ce,ue){T();const j=ue.attributes,te=ce.getAttributes(),X=q.defaultAttributeValues;for(const F in te){const N=te[F];if(N.location>=0){let Y=j[F];if(Y===void 0&&(F==="instanceMatrix"&&B.instanceMatrix&&(Y=B.instanceMatrix),F==="instanceColor"&&B.instanceColor&&(Y=B.instanceColor)),Y!==void 0){const D=Y.normalized,V=Y.itemSize,Se=e.get(Y);if(Se===void 0)continue;const Ae=Se.buffer,Me=Se.type,K=Se.bytesPerElement,oe=Me===s.INT||Me===s.UNSIGNED_INT||Y.gpuType===Xh;if(Y.isInterleavedBufferAttribute){const se=Y.data,Pe=se.stride,Ue=Y.offset;if(se.isInstancedInterleavedBuffer){for(let ge=0;ge<N.locationSize;ge++)M(N.location+ge,se.meshPerAttribute);B.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ge=0;ge<N.locationSize;ge++)y(N.location+ge);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let ge=0;ge<N.locationSize;ge++)P(N.location+ge,V/N.locationSize,Me,D,Pe*K,(Ue+V/N.locationSize*ge)*K,oe)}else{if(Y.isInstancedBufferAttribute){for(let se=0;se<N.locationSize;se++)M(N.location+se,Y.meshPerAttribute);B.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let se=0;se<N.locationSize;se++)y(N.location+se);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let se=0;se<N.locationSize;se++)P(N.location+se,V/N.locationSize,Me,D,V*K,V/N.locationSize*se*K,oe)}}else if(X!==void 0){const D=X[F];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(N.location,D);break;case 3:s.vertexAttrib3fv(N.location,D);break;case 4:s.vertexAttrib4fv(N.location,D);break;default:s.vertexAttrib1fv(N.location,D)}}}}E()}function z(){U();for(const B in r){const q=r[B];for(const ce in q){const ue=q[ce];for(const j in ue){const te=ue[j];for(const X in te)g(te[X].object),delete te[X];delete ue[j]}}delete r[B]}}function L(B){if(r[B.id]===void 0)return;const q=r[B.id];for(const ce in q){const ue=q[ce];for(const j in ue){const te=ue[j];for(const X in te)g(te[X].object),delete te[X];delete ue[j]}}delete r[B.id]}function k(B){for(const q in r){const ce=r[q];for(const ue in ce){const j=ce[ue];if(j[B.id]===void 0)continue;const te=j[B.id];for(const X in te)g(te[X].object),delete te[X];delete j[B.id]}}}function A(B){for(const q in r){const ce=r[q],ue=B.isInstancedMesh===!0?B.id:0,j=ce[ue];if(j!==void 0){for(const te in j){const X=j[te];for(const F in X)g(X[F].object),delete X[F];delete j[te]}delete ce[ue],Object.keys(ce).length===0&&delete r[q]}}}function U(){W(),c=!0,l!==o&&(l=o,h(l.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:U,resetDefaultState:W,dispose:z,releaseStatesOfGeometry:L,releaseStatesOfObject:A,releaseStatesOfProgram:k,initAttributes:T,enableAttribute:y,disableUnusedAttributes:E}}function D1(s,e,t){let r;function o(d){r=d}function l(d,h){s.drawArrays(r,d,h),t.update(h,r,1)}function c(d,h,g){g!==0&&(s.drawArraysInstanced(r,d,h,g),t.update(h,r,g))}function f(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,g);let m=0;for(let _=0;_<g;_++)m+=h[_];t.update(m,r,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function U1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(k){return!(k!==Mi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const A=k===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==yi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==ki&&!A)}function d(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=d(h);g!==h&&(gt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const x=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:E,maxVaryings:P,maxFragmentUniforms:b,maxSamples:z,samples:L}}function N1(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new ps,f=new At,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,m){const _=x.length!==0||m||r!==0||o;return o=m,r=x.length,_},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,m){t=g(x,m,0)},this.setState=function(x,m,_){const S=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,M=s.get(x);if(!o||S===null||S.length===0||l&&!y)l?g(null):h();else{const E=l?0:r,P=E*4;let b=M.clippingState||null;d.value=b,b=g(S,m,P,_);for(let z=0;z!==P;++z)b[z]=t[z];M.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=E}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,m,_,S){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=d.value,S!==!0||y===null){const M=_+T*4,E=m.matrixWorldInverse;f.getNormalMatrix(E),(y===null||y.length<M)&&(y=new Float32Array(M));for(let P=0,b=_;P!==T;++P,b+=4)c.copy(x[P]).applyMatrix4(E,f),c.normal.toArray(y,b),y[b+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}const jr=4,C0=[.125,.215,.35,.446,.526,.582],gs=20,F1=256,aa=new sd,b0=new Ot;let Uf=null,Nf=0,Ff=0,Of=!1;const O1=new Z;class R0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=O1}=l;Uf=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uf,Nf,Ff),this._renderer.xr.enabled=Of,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uf=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:vr,format:Mi,colorSpace:uc,depthBuffer:!1},o=P0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=k1(l)),this._blurMaterial=z1(l,e,t),this._ggxMaterial=B1(l,e,t)}return o}_compileMaterial(e){const t=new Cn(new ln,e);this._renderer.compile(t,aa)}_sceneToCubeUV(e,t,r,o,l){const d=new $n(90,1,t,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,m=x.autoClear,_=x.toneMapping;x.getClearColor(b0),x.toneMapping=Yi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Cn(new Sa,new Jg({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let M=!1;const E=e.background;E?E.isColor&&(y.color.copy(E),e.background=null,M=!0):(y.color.copy(b0),M=!0);for(let P=0;P<6;P++){const b=P%3;b===0?(d.up.set(0,h[P],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+g[P],l.y,l.z)):b===1?(d.up.set(0,0,h[P]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+g[P],l.z)):(d.up.set(0,h[P],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+g[P]));const z=this._cubeSize;ao(o,b*z,P>2?z:0,z,z),x.setRenderTarget(o),M&&x.render(T,d),x.render(e,d)}x.toneMapping=_,x.autoClear=m,e.background=E}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===_s||e.mapping===go;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=I0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L0());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;ao(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,aa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),x=Math.sqrt(h*h-g*g),m=0+h*1.25,_=x*m,{_lodMax:S}=this,T=this._sizeLods[r],y=3*T*(r>S-jr?r-S+jr:0),M=4*(this._cubeSize-T);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=S-t,ao(l,y,M,3*T,2*T),o.setRenderTarget(l),o.render(f,aa),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=S-r,ao(e,y,M,3*T,2*T),o.setRenderTarget(e),o.render(f,aa)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ft("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[o];x.material=h;const m=h.uniforms,_=this._sizeLods[r]-1,S=isFinite(l)?Math.PI/(2*_):2*Math.PI/(2*gs-1),T=l/S,y=isFinite(l)?1+Math.floor(g*T):gs;y>gs&&gt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${gs}`);const M=[];let E=0;for(let k=0;k<gs;++k){const A=k/T,U=Math.exp(-A*A/2);M.push(U),k===0?E+=U:k<y&&(E+=2*U)}for(let k=0;k<M.length;k++)M[k]=M[k]/E;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=M,m.latitudinal.value=c==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:P}=this;m.dTheta.value=S,m.mipInt.value=P-r;const b=this._sizeLods[o],z=3*b*(o>P-jr?o-P+jr:0),L=4*(this._cubeSize-b);ao(t,z,L,3*b,2*b),d.setRenderTarget(t),d.render(x,aa)}}function k1(s){const e=[],t=[],r=[];let o=s;const l=s-jr+1+C0.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let d=1/f;c>s-jr?d=C0[c-s+jr-1]:c===0&&(d=0),t.push(d);const h=1/(f-2),g=-h,x=1+h,m=[g,g,x,g,x,x,g,g,x,x,g,x],_=6,S=6,T=3,y=2,M=1,E=new Float32Array(T*S*_),P=new Float32Array(y*S*_),b=new Float32Array(M*S*_);for(let L=0;L<_;L++){const k=L%3*2/3-1,A=L>2?0:-1,U=[k,A,0,k+2/3,A,0,k+2/3,A+1,0,k,A,0,k+2/3,A+1,0,k,A+1,0];E.set(U,T*S*L),P.set(m,y*S*L);const W=[L,L,L,L,L,L];b.set(W,M*S*L)}const z=new ln;z.setAttribute("position",new Nt(E,T)),z.setAttribute("uv",new Nt(P,y)),z.setAttribute("faceIndex",new Nt(b,M)),r.push(new Cn(z,null)),o>jr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function P0(s,e,t){const r=new Ji(s,e,t);return r.texture.mapping=xc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ao(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function B1(s,e,t){return new ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:F1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function z1(s,e,t){const r=new Float32Array(gs),o=new Z(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function L0(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function I0(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Mc(){return`

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
	`}class lv extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new nv(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Sa(5,5,5),l=new ci({name:"CubemapFromEquirect",uniforms:xo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ei,blending:mr});l.uniforms.tEquirect.value=t;const c=new Cn(o,l),f=t.minFilter;return t.minFilter===vs&&(t.minFilter=Sn),new jy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function H1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(m,_=!1){return m==null?null:_?c(m):l(m)}function l(m){if(m&&m.isTexture){const _=m.mapping;if(_===rf||_===sf)if(e.has(m)){const S=e.get(m).texture;return f(S,m.mapping)}else{const S=m.image;if(S&&S.height>0){const T=new lv(S.height);return T.fromEquirectangularTexture(s,m),e.set(m,T),m.addEventListener("dispose",h),f(T.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const _=m.mapping,S=_===rf||_===sf,T=_===_s||_===go;if(S||T){let y=t.get(m);const M=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==M)return r===null&&(r=new R0(s)),y=S?r.fromEquirectangular(m,y):r.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const E=m.image;return S&&E&&E.height>0||T&&E&&d(E)?(r===null&&(r=new R0(s)),y=S?r.fromEquirectangular(m):r.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",g),y.texture):null}}}return m}function f(m,_){return _===rf?m.mapping=_s:_===sf&&(m.mapping=go),m}function d(m){let _=0;const S=6;for(let T=0;T<S;T++)m[T]!==void 0&&_++;return _===S}function h(m){const _=m.target;_.removeEventListener("dispose",h);const S=e.get(_);S!==void 0&&(e.delete(_),S.dispose())}function g(m){const _=m.target;_.removeEventListener("dispose",g);const S=t.get(_);S!==void 0&&(t.delete(_),S.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function V1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Fh("WebGLRenderer: "+r+" extension not supported."),o}}}function G1(s,e,t,r){const o={},l=new WeakMap;function c(x){const m=x.target;m.index!==null&&e.remove(m.index);for(const S in m.attributes)e.remove(m.attributes[S]);m.removeEventListener("dispose",c),delete o[m.id];const _=l.get(m);_&&(e.remove(_),l.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(x,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function d(x){const m=x.attributes;for(const _ in m)e.update(m[_],s.ARRAY_BUFFER)}function h(x){const m=[],_=x.index,S=x.attributes.position;let T=0;if(S===void 0)return;if(_!==null){const E=_.array;T=_.version;for(let P=0,b=E.length;P<b;P+=3){const z=E[P+0],L=E[P+1],k=E[P+2];m.push(z,L,L,k,k,z)}}else{const E=S.array;T=S.version;for(let P=0,b=E.length/3-1;P<b;P+=3){const z=P+0,L=P+1,k=P+2;m.push(z,L,L,k,k,z)}}const y=new(S.count>=65535?Qg:Yg)(m,1);y.version=T;const M=l.get(x);M&&e.remove(M),l.set(x,y)}function g(x){const m=l.get(x);if(m){const _=x.index;_!==null&&m.version<_.version&&h(x)}else h(x);return l.get(x)}return{get:f,update:d,getWireframeAttribute:g}}function W1(s,e,t){let r;function o(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function d(x,m){s.drawElements(r,m,l,x*c),t.update(m,r,1)}function h(x,m,_){_!==0&&(s.drawElementsInstanced(r,m,l,x*c,_),t.update(m,r,_))}function g(x,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,l,x,0,_);let T=0;for(let y=0;y<_;y++)T+=m[y];t.update(T,r,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=g}function X1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ft("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function j1(s,e,t){const r=new WeakMap,o=new en;function l(c,f,d){const h=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=g!==void 0?g.length:0;let m=r.get(f);if(m===void 0||m.count!==x){let W=function(){A.dispose(),r.delete(f),f.removeEventListener("dispose",W)};var _=W;m!==void 0&&m.texture.dispose();const S=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],E=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let b=0;S===!0&&(b=1),T===!0&&(b=2),y===!0&&(b=3);let z=f.attributes.position.count*b,L=1;z>e.maxTextureSize&&(L=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const k=new Float32Array(z*L*4*x),A=new jg(k,z,L,x);A.type=ki,A.needsUpdate=!0;const U=b*4;for(let B=0;B<x;B++){const q=M[B],ce=E[B],ue=P[B],j=z*L*4*B;for(let te=0;te<q.count;te++){const X=te*U;S===!0&&(o.fromBufferAttribute(q,te),k[j+X+0]=o.x,k[j+X+1]=o.y,k[j+X+2]=o.z,k[j+X+3]=0),T===!0&&(o.fromBufferAttribute(ce,te),k[j+X+4]=o.x,k[j+X+5]=o.y,k[j+X+6]=o.z,k[j+X+7]=0),y===!0&&(o.fromBufferAttribute(ue,te),k[j+X+8]=o.x,k[j+X+9]=o.y,k[j+X+10]=o.z,k[j+X+11]=ue.itemSize===4?o.w:1)}}m={count:x,texture:A,size:new Pt(z,L)},r.set(f,m),f.addEventListener("dispose",W)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let S=0;for(let y=0;y<h.length;y++)S+=h[y];const T=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(s,"morphTargetBaseInfluence",T),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:l}}function K1(s,e,t,r,o){let l=new WeakMap;function c(h){const g=o.render.frame,x=h.geometry,m=e.get(h,x);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==g&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,g))),h.isSkinnedMesh){const _=h.skeleton;l.get(_)!==g&&(_.update(),l.set(_,g))}return m}function f(){l=new WeakMap}function d(h){const g=h.target;g.removeEventListener("dispose",d),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:f}}const q1={[Pg]:"LINEAR_TONE_MAPPING",[Lg]:"REINHARD_TONE_MAPPING",[Ig]:"CINEON_TONE_MAPPING",[Dg]:"ACES_FILMIC_TONE_MAPPING",[Ng]:"AGX_TONE_MAPPING",[Fg]:"NEUTRAL_TONE_MAPPING",[Ug]:"CUSTOM_TONE_MAPPING"};function Y1(s,e,t,r,o){const l=new Ji(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new vo(e,t):void 0}),c=new Ji(e,t,{type:vr,depthBuffer:!1,stencilBuffer:!1}),f=new ln;f.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Tn([0,2,0,0,2,0],2));const d=new Gy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Cn(f,d),g=new sd(-1,1,1,-1,0,1);let x=null,m=null,_=!1,S,T=null,y=[],M=!1;this.setSize=function(E,P){l.setSize(E,P),c.setSize(E,P);for(let b=0;b<y.length;b++){const z=y[b];z.setSize&&z.setSize(E,P)}},this.setEffects=function(E){y=E,M=y.length>0&&y[0].isRenderPass===!0;const P=l.width,b=l.height;for(let z=0;z<y.length;z++){const L=y[z];L.setSize&&L.setSize(P,b)}},this.begin=function(E,P){if(_||E.toneMapping===Yi&&y.length===0)return!1;if(T=P,P!==null){const b=P.width,z=P.height;(l.width!==b||l.height!==z)&&this.setSize(b,z)}return M===!1&&E.setRenderTarget(l),S=E.toneMapping,E.toneMapping=Yi,!0},this.hasRenderPass=function(){return M},this.end=function(E,P){E.toneMapping=S,_=!0;let b=l,z=c;for(let L=0;L<y.length;L++){const k=y[L];if(k.enabled!==!1&&(k.render(E,z,b,P),k.needsSwap!==!1)){const A=b;b=z,z=A}}if(x!==E.outputColorSpace||m!==E.toneMapping){x=E.outputColorSpace,m=E.toneMapping,d.defines={},Dt.getTransfer(x)===Gt&&(d.defines.SRGB_TRANSFER="");const L=q1[m];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=b.texture,E.setRenderTarget(T),E.render(h,g),T=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),d.dispose()}}const cv=new On,zh=new vo(1,1),uv=new jg,fv=new xy,hv=new nv,D0=[],U0=[],N0=new Float32Array(16),F0=new Float32Array(9),O0=new Float32Array(4);function So(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=D0[o];if(l===void 0&&(l=new Float32Array(o),D0[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function mn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function gn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Sc(s,e){let t=U0[e];t===void 0&&(t=new Int32Array(e),U0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function Q1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function J1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2fv(this.addr,e),gn(t,e)}}function Z1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;s.uniform3fv(this.addr,e),gn(t,e)}}function $1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4fv(this.addr,e),gn(t,e)}}function eA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;O0.set(r),s.uniformMatrix2fv(this.addr,!1,O0),gn(t,r)}}function tA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;F0.set(r),s.uniformMatrix3fv(this.addr,!1,F0),gn(t,r)}}function nA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;N0.set(r),s.uniformMatrix4fv(this.addr,!1,N0),gn(t,r)}}function iA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function rA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2iv(this.addr,e),gn(t,e)}}function sA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3iv(this.addr,e),gn(t,e)}}function oA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4iv(this.addr,e),gn(t,e)}}function aA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function lA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2uiv(this.addr,e),gn(t,e)}}function cA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3uiv(this.addr,e),gn(t,e)}}function uA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4uiv(this.addr,e),gn(t,e)}}function fA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(zh.compareFunction=t.isReversedDepthBuffer()?Zh:Jh,l=zh):l=cv,t.setTexture2D(e||l,o)}function hA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||fv,o)}function dA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||hv,o)}function pA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||uv,o)}function mA(s){switch(s){case 5126:return Q1;case 35664:return J1;case 35665:return Z1;case 35666:return $1;case 35674:return eA;case 35675:return tA;case 35676:return nA;case 5124:case 35670:return iA;case 35667:case 35671:return rA;case 35668:case 35672:return sA;case 35669:case 35673:return oA;case 5125:return aA;case 36294:return lA;case 36295:return cA;case 36296:return uA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return hA;case 35680:case 36300:case 36308:case 36293:return dA;case 36289:case 36303:case 36311:case 36292:return pA}}function gA(s,e){s.uniform1fv(this.addr,e)}function vA(s,e){const t=So(e,this.size,2);s.uniform2fv(this.addr,t)}function xA(s,e){const t=So(e,this.size,3);s.uniform3fv(this.addr,t)}function _A(s,e){const t=So(e,this.size,4);s.uniform4fv(this.addr,t)}function yA(s,e){const t=So(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function MA(s,e){const t=So(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function SA(s,e){const t=So(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function AA(s,e){s.uniform1iv(this.addr,e)}function EA(s,e){s.uniform2iv(this.addr,e)}function wA(s,e){s.uniform3iv(this.addr,e)}function TA(s,e){s.uniform4iv(this.addr,e)}function CA(s,e){s.uniform1uiv(this.addr,e)}function bA(s,e){s.uniform2uiv(this.addr,e)}function RA(s,e){s.uniform3uiv(this.addr,e)}function PA(s,e){s.uniform4uiv(this.addr,e)}function LA(s,e,t){const r=this.cache,o=e.length,l=Sc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=zh:c=cv;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function IA(s,e,t){const r=this.cache,o=e.length,l=Sc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||fv,l[c])}function DA(s,e,t){const r=this.cache,o=e.length,l=Sc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||hv,l[c])}function UA(s,e,t){const r=this.cache,o=e.length,l=Sc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||uv,l[c])}function NA(s){switch(s){case 5126:return gA;case 35664:return vA;case 35665:return xA;case 35666:return _A;case 35674:return yA;case 35675:return MA;case 35676:return SA;case 5124:case 35670:return AA;case 35667:case 35671:return EA;case 35668:case 35672:return wA;case 35669:case 35673:return TA;case 5125:return CA;case 36294:return bA;case 36295:return RA;case 36296:return PA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return IA;case 35680:case 36300:case 36308:case 36293:return DA;case 36289:case 36303:case 36311:case 36292:return UA}}class FA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=mA(t.type)}}class OA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=NA(t.type)}}class kA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const kf=/(\w+)(\])?(\[|\.)?/g;function k0(s,e){s.seq.push(e),s.map[e.id]=e}function BA(s,e,t){const r=s.name,o=r.length;for(kf.lastIndex=0;;){const l=kf.exec(r),c=kf.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===o){k0(t,h===void 0?new FA(f,s,e):new OA(f,s,e));break}else{let x=t.map[f];x===void 0&&(x=new kA(f),k0(t,x)),t=x}}}class rc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),d=e.getUniformLocation(t,f.name);BA(f,d,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function B0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const zA=37297;let HA=0;function VA(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const z0=new At;function GA(s){Dt._getMatrix(z0,Dt.workingColorSpace,s);const e=`mat3( ${z0.elements.map(t=>t.toFixed(4))} )`;switch(Dt.getTransfer(s)){case fc:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function H0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+VA(s.getShaderSource(e),f)}else return l}function WA(s,e){const t=GA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const XA={[Pg]:"Linear",[Lg]:"Reinhard",[Ig]:"Cineon",[Dg]:"ACESFilmic",[Ng]:"AgX",[Fg]:"Neutral",[Ug]:"Custom"};function jA(s,e){const t=XA[e];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yl=new Z;function KA(){Dt.getLuminanceCoefficients(Yl);const s=Yl.x.toFixed(4),e=Yl.y.toFixed(4),t=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function YA(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function QA(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function pa(s){return s!==""}function V0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function G0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(s){return s.replace(JA,$A)}const ZA=new Map;function $A(s,e){let t=wt[e];if(t===void 0){const r=ZA.get(e);if(r!==void 0)t=wt[r],gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Hh(t)}const eE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W0(s){return s.replace(eE,tE)}function tE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function X0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const nE={[$l]:"SHADOWMAP_TYPE_PCF",[da]:"SHADOWMAP_TYPE_VSM"};function iE(s){return nE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rE={[_s]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE",[xc]:"ENVMAP_TYPE_CUBE_UV"};function sE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":rE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const oE={[go]:"ENVMAP_MODE_REFRACTION"};function aE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":oE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lE={[Rg]:"ENVMAP_BLENDING_MULTIPLY",[F_]:"ENVMAP_BLENDING_MIX",[O_]:"ENVMAP_BLENDING_ADD"};function cE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":lE[s.combine]||"ENVMAP_BLENDING_NONE"}function uE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function fE(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=iE(t),h=sE(t),g=aE(t),x=cE(t),m=uE(t),_=qA(t),S=YA(l),T=o.createProgram();let y,M,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(pa).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(pa).join(`
`),M.length>0&&(M+=`
`)):(y=[X0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),M=[X0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?wt.tonemapping_pars_fragment:"",t.toneMapping!==Yi?jA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,WA("linearToOutputTexel",t.outputColorSpace),KA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),c=Hh(c),c=V0(c,t),c=G0(c,t),f=Hh(f),f=V0(f,t),f=G0(f,t),c=W0(c),f=W0(f),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",t.glslVersion===Qm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const P=E+y+c,b=E+M+f,z=B0(o,o.VERTEX_SHADER,P),L=B0(o,o.FRAGMENT_SHADER,b);o.attachShader(T,z),o.attachShader(T,L),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function k(B){if(s.debug.checkShaderErrors){const q=o.getProgramInfoLog(T)||"",ce=o.getShaderInfoLog(z)||"",ue=o.getShaderInfoLog(L)||"",j=q.trim(),te=ce.trim(),X=ue.trim();let F=!0,N=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,z,L);else{const Y=H0(o,z,"vertex"),D=H0(o,L,"fragment");Ft("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+j+`
`+Y+`
`+D)}else j!==""?gt("WebGLProgram: Program Info Log:",j):(te===""||X==="")&&(N=!1);N&&(B.diagnostics={runnable:F,programLog:j,vertexShader:{log:te,prefix:y},fragmentShader:{log:X,prefix:M}})}o.deleteShader(z),o.deleteShader(L),A=new rc(o,T),U=QA(o,T)}let A;this.getUniforms=function(){return A===void 0&&k(this),A};let U;this.getAttributes=function(){return U===void 0&&k(this),U};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(T,zA)),W},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=L,this}let hE=0;class dE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new pE(e),t.set(e,r)),r}}class pE{constructor(e){this.id=hE++,this.code=e,this.usedTimes=0}}function mE(s){return s===ys||s===lc||s===cc}function gE(s,e,t,r,o,l){const c=new Kg,f=new dE,d=new Set,h=[],g=new Map,x=r.logarithmicDepthBuffer;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(A){return d.add(A),A===0?"uv":`uv${A}`}function T(A,U,W,B,q,ce){const ue=B.fog,j=q.geometry,te=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,X=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,F=e.get(A.envMap||te,X),N=F&&F.mapping===xc?F.image.height:null,Y=_[A.type];A.precision!==null&&(m=r.getMaxPrecision(A.precision),m!==A.precision&&gt("WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const D=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,V=D!==void 0?D.length:0;let Se=0;j.morphAttributes.position!==void 0&&(Se=1),j.morphAttributes.normal!==void 0&&(Se=2),j.morphAttributes.color!==void 0&&(Se=3);let Ae,Me,K,oe;if(Y){const be=Ki[Y];Ae=be.vertexShader,Me=be.fragmentShader}else Ae=A.vertexShader,Me=A.fragmentShader,f.update(A),K=f.getVertexShaderID(A),oe=f.getFragmentShaderID(A);const se=s.getRenderTarget(),Pe=s.state.buffers.depth.getReversed(),Ue=q.isInstancedMesh===!0,ge=q.isBatchedMesh===!0,$e=!!A.map,ie=!!A.matcap,_e=!!F,je=!!A.aoMap,Ke=!!A.lightMap,We=!!A.bumpMap,Je=!!A.normalMap,vt=!!A.displacementMap,O=!!A.emissiveMap,et=!!A.metalnessMap,it=!!A.roughnessMap,Et=A.anisotropy>0,Ce=A.clearcoat>0,Tt=A.dispersion>0,I=A.iridescence>0,w=A.sheen>0,ne=A.transmission>0,me=Et&&!!A.anisotropyMap,ve=Ce&&!!A.clearcoatMap,Ee=Ce&&!!A.clearcoatNormalMap,Te=Ce&&!!A.clearcoatRoughnessMap,de=I&&!!A.iridescenceMap,xe=I&&!!A.iridescenceThicknessMap,ze=w&&!!A.sheenColorMap,Ge=w&&!!A.sheenRoughnessMap,Oe=!!A.specularMap,Ie=!!A.specularColorMap,ut=!!A.specularIntensityMap,ft=ne&&!!A.transmissionMap,yt=ne&&!!A.thicknessMap,Q=!!A.gradientMap,Fe=!!A.alphaMap,ye=A.alphaTest>0,qe=!!A.alphaHash,ke=!!A.extensions;let we=Yi;A.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(we=s.toneMapping);const Ye={shaderID:Y,shaderType:A.type,shaderName:A.name,vertexShader:Ae,fragmentShader:Me,defines:A.defines,customVertexShaderID:K,customFragmentShaderID:oe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:ge,batchingColor:ge&&q._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&q.instanceColor!==null,instancingMorph:Ue&&q.morphTexture!==null,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:$e,matcap:ie,envMap:_e,envMapMode:_e&&F.mapping,envMapCubeUVHeight:N,aoMap:je,lightMap:Ke,bumpMap:We,normalMap:Je,displacementMap:vt,emissiveMap:O,normalMapObjectSpace:Je&&A.normalMapType===z_,normalMapTangentSpace:Je&&A.normalMapType===jm,packedNormalMap:Je&&A.normalMapType===jm&&mE(A.normalMap.format),metalnessMap:et,roughnessMap:it,anisotropy:Et,anisotropyMap:me,clearcoat:Ce,clearcoatMap:ve,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Te,dispersion:Tt,iridescence:I,iridescenceMap:de,iridescenceThicknessMap:xe,sheen:w,sheenColorMap:ze,sheenRoughnessMap:Ge,specularMap:Oe,specularColorMap:Ie,specularIntensityMap:ut,transmission:ne,transmissionMap:ft,thicknessMap:yt,gradientMap:Q,opaque:A.transparent===!1&&A.blending===ho&&A.alphaToCoverage===!1,alphaMap:Fe,alphaTest:ye,alphaHash:qe,combine:A.combine,mapUv:$e&&S(A.map.channel),aoMapUv:je&&S(A.aoMap.channel),lightMapUv:Ke&&S(A.lightMap.channel),bumpMapUv:We&&S(A.bumpMap.channel),normalMapUv:Je&&S(A.normalMap.channel),displacementMapUv:vt&&S(A.displacementMap.channel),emissiveMapUv:O&&S(A.emissiveMap.channel),metalnessMapUv:et&&S(A.metalnessMap.channel),roughnessMapUv:it&&S(A.roughnessMap.channel),anisotropyMapUv:me&&S(A.anisotropyMap.channel),clearcoatMapUv:ve&&S(A.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&S(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&S(A.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&S(A.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&S(A.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&S(A.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&S(A.sheenRoughnessMap.channel),specularMapUv:Oe&&S(A.specularMap.channel),specularColorMapUv:Ie&&S(A.specularColorMap.channel),specularIntensityMapUv:ut&&S(A.specularIntensityMap.channel),transmissionMapUv:ft&&S(A.transmissionMap.channel),thicknessMapUv:yt&&S(A.thicknessMap.channel),alphaMapUv:Fe&&S(A.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Je||Et),vertexNormals:!!j.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!j.attributes.uv&&($e||Fe),fog:!!ue,useFog:A.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||j.attributes.normal===void 0&&Je===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Pe,skinning:q.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Se,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:we,decodeVideoTexture:$e&&A.map.isVideoTexture===!0&&Dt.getTransfer(A.map.colorSpace)===Gt,decodeVideoTextureEmissive:O&&A.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(A.emissiveMap.colorSpace)===Gt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Fi,flipSided:A.side===ei,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ke&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&A.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ye.vertexUv1s=d.has(1),Ye.vertexUv2s=d.has(2),Ye.vertexUv3s=d.has(3),d.clear(),Ye}function y(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const W in A.defines)U.push(W),U.push(A.defines[W]);return A.isRawShaderMaterial===!1&&(M(U,A),E(U,A),U.push(s.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function M(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function E(A,U){c.disableAll(),U.instancing&&c.enable(0),U.instancingColor&&c.enable(1),U.instancingMorph&&c.enable(2),U.matcap&&c.enable(3),U.envMap&&c.enable(4),U.normalMapObjectSpace&&c.enable(5),U.normalMapTangentSpace&&c.enable(6),U.clearcoat&&c.enable(7),U.iridescence&&c.enable(8),U.alphaTest&&c.enable(9),U.vertexColors&&c.enable(10),U.vertexAlphas&&c.enable(11),U.vertexUv1s&&c.enable(12),U.vertexUv2s&&c.enable(13),U.vertexUv3s&&c.enable(14),U.vertexTangents&&c.enable(15),U.anisotropy&&c.enable(16),U.alphaHash&&c.enable(17),U.batching&&c.enable(18),U.dispersion&&c.enable(19),U.batchingColor&&c.enable(20),U.gradientMap&&c.enable(21),U.packedNormalMap&&c.enable(22),U.vertexNormals&&c.enable(23),A.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.reversedDepthBuffer&&c.enable(4),U.skinning&&c.enable(5),U.morphTargets&&c.enable(6),U.morphNormals&&c.enable(7),U.morphColors&&c.enable(8),U.premultipliedAlpha&&c.enable(9),U.shadowMapEnabled&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.decodeVideoTextureEmissive&&c.enable(20),U.alphaToCoverage&&c.enable(21),U.numLightProbeGrids>0&&c.enable(22),A.push(c.mask)}function P(A){const U=_[A.type];let W;if(U){const B=Ki[U];W=zy.clone(B.uniforms)}else W=A.uniforms;return W}function b(A,U){let W=g.get(U);return W!==void 0?++W.usedTimes:(W=new fE(s,U,A,o),h.push(W),g.set(U,W)),W}function z(A){if(--A.usedTimes===0){const U=h.indexOf(A);h[U]=h[h.length-1],h.pop(),g.delete(A.cacheKey),A.destroy()}}function L(A){f.remove(A)}function k(){f.dispose()}return{getParameters:T,getProgramCacheKey:y,getUniforms:P,acquireProgram:b,releaseProgram:z,releaseShaderCache:L,programs:h,dispose:k}}function vE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,d){s.get(c)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function xE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function j0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function K0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function f(m,_,S,T,y,M){let E=s[e];return E===void 0?(E={id:m.id,object:m,geometry:_,material:S,materialVariant:c(m),groupOrder:T,renderOrder:m.renderOrder,z:y,group:M},s[e]=E):(E.id=m.id,E.object=m,E.geometry=_,E.material=S,E.materialVariant=c(m),E.groupOrder=T,E.renderOrder=m.renderOrder,E.z=y,E.group=M),e++,E}function d(m,_,S,T,y,M){const E=f(m,_,S,T,y,M);S.transmission>0?r.push(E):S.transparent===!0?o.push(E):t.push(E)}function h(m,_,S,T,y,M){const E=f(m,_,S,T,y,M);S.transmission>0?r.unshift(E):S.transparent===!0?o.unshift(E):t.unshift(E)}function g(m,_){t.length>1&&t.sort(m||xE),r.length>1&&r.sort(_||j0),o.length>1&&o.sort(_||j0)}function x(){for(let m=e,_=s.length;m<_;m++){const S=s[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:x,sort:g}}function _E(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new K0,s.set(r,[c])):o>=l.length?(c=new K0,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function yE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Ot};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function ME(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let SE=0;function AE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function EE(s){const e=new yE,t=ME(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new Z);const o=new Z,l=new rn,c=new rn;function f(h){let g=0,x=0,m=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let _=0,S=0,T=0,y=0,M=0,E=0,P=0,b=0,z=0,L=0,k=0;h.sort(AE);for(let U=0,W=h.length;U<W;U++){const B=h[U],q=B.color,ce=B.intensity,ue=B.distance;let j=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ys?j=B.shadow.map.texture:j=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)g+=q.r*ce,x+=q.g*ce,m+=q.b*ce;else if(B.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(B.sh.coefficients[te],ce);k++}else if(B.isDirectionalLight){const te=e.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const X=B.shadow,F=t.get(B);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,r.directionalShadow[_]=F,r.directionalShadowMap[_]=j,r.directionalShadowMatrix[_]=B.shadow.matrix,E++}r.directional[_]=te,_++}else if(B.isSpotLight){const te=e.get(B);te.position.setFromMatrixPosition(B.matrixWorld),te.color.copy(q).multiplyScalar(ce),te.distance=ue,te.coneCos=Math.cos(B.angle),te.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),te.decay=B.decay,r.spot[T]=te;const X=B.shadow;if(B.map&&(r.spotLightMap[z]=B.map,z++,X.updateMatrices(B),B.castShadow&&L++),r.spotLightMatrix[T]=X.matrix,B.castShadow){const F=t.get(B);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,r.spotShadow[T]=F,r.spotShadowMap[T]=j,b++}T++}else if(B.isRectAreaLight){const te=e.get(B);te.color.copy(q).multiplyScalar(ce),te.halfWidth.set(B.width*.5,0,0),te.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=te,y++}else if(B.isPointLight){const te=e.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity),te.distance=B.distance,te.decay=B.decay,B.castShadow){const X=B.shadow,F=t.get(B);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,F.shadowCameraNear=X.camera.near,F.shadowCameraFar=X.camera.far,r.pointShadow[S]=F,r.pointShadowMap[S]=j,r.pointShadowMatrix[S]=B.shadow.matrix,P++}r.point[S]=te,S++}else if(B.isHemisphereLight){const te=e.get(B);te.skyColor.copy(B.color).multiplyScalar(ce),te.groundColor.copy(B.groundColor).multiplyScalar(ce),r.hemi[M]=te,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Qe.LTC_FLOAT_1,r.rectAreaLTC2=Qe.LTC_FLOAT_2):(r.rectAreaLTC1=Qe.LTC_HALF_1,r.rectAreaLTC2=Qe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=m;const A=r.hash;(A.directionalLength!==_||A.pointLength!==S||A.spotLength!==T||A.rectAreaLength!==y||A.hemiLength!==M||A.numDirectionalShadows!==E||A.numPointShadows!==P||A.numSpotShadows!==b||A.numSpotMaps!==z||A.numLightProbes!==k)&&(r.directional.length=_,r.spot.length=T,r.rectArea.length=y,r.point.length=S,r.hemi.length=M,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=b+z-L,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=k,A.directionalLength=_,A.pointLength=S,A.spotLength=T,A.rectAreaLength=y,A.hemiLength=M,A.numDirectionalShadows=E,A.numPointShadows=P,A.numSpotShadows=b,A.numSpotMaps=z,A.numLightProbes=k,r.version=SE++)}function d(h,g){let x=0,m=0,_=0,S=0,T=0;const y=g.matrixWorldInverse;for(let M=0,E=h.length;M<E;M++){const P=h[M];if(P.isDirectionalLight){const b=r.directional[x];b.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(y),x++}else if(P.isSpotLight){const b=r.spot[_];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(y),_++}else if(P.isRectAreaLight){const b=r.rectArea[S];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(y),c.identity(),l.copy(P.matrixWorld),l.premultiply(y),c.extractRotation(l),b.halfWidth.set(P.width*.5,0,0),b.halfHeight.set(0,P.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),S++}else if(P.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(y),m++}else if(P.isHemisphereLight){const b=r.hemi[T];b.direction.setFromMatrixPosition(P.matrixWorld),b.direction.transformDirection(y),T++}}}return{setup:f,setupView:d,state:r}}function q0(s){const e=new EE(s),t=[],r=[],o=[];function l(m){x.camera=m,t.length=0,r.length=0,o.length=0}function c(m){t.push(m)}function f(m){r.push(m)}function d(m){o.push(m)}function h(){e.setup(t)}function g(m){e.setupView(t,m)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:h,setupLightsView:g,pushLight:c,pushShadow:f,pushLightProbeGrid:d}}function wE(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new q0(s),e.set(o,[f])):l>=c.length?(f=new q0(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const TE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CE=`uniform sampler2D shadow_pass;
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
}`,bE=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],RE=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Y0=new rn,la=new Z,Bf=new Z;function PE(s,e,t){let r=new $g;const o=new Pt,l=new Pt,c=new en,f=new Wy,d=new Xy,h={},g=t.maxTextureSize,x={[Kr]:ei,[ei]:Kr,[Fi]:Fi},m=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:TE,fragmentShader:CE}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const S=new ln;S.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Cn(S,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let M=this.type;this.render=function(L,k,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===v_&&(gt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$l);const U=s.getRenderTarget(),W=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),q=s.state;q.setBlending(mr),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ce=M!==this.type;ce&&k.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(j=>j.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,j=L.length;ue<j;ue++){const te=L[ue],X=te.shadow;if(X===void 0){gt("WebGLShadowMap:",te,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const F=X.getFrameExtents();o.multiply(F),l.copy(X.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/F.x),o.x=l.x*F.x,X.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/F.y),o.y=l.y*F.y,X.mapSize.y=l.y));const N=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=N,X.map===null||ce===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===da){if(te.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ji(o.x,o.y,{format:ys,type:vr,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),X.map.texture.name=te.name+".shadowMap",X.map.depthTexture=new vo(o.x,o.y,ki),X.map.depthTexture.name=te.name+".shadowMapDepth",X.map.depthTexture.format=xr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=pn,X.map.depthTexture.magFilter=pn}else te.isPointLight?(X.map=new lv(o.x),X.map.depthTexture=new Fy(o.x,Zi)):(X.map=new Ji(o.x,o.y),X.map.depthTexture=new vo(o.x,o.y,Zi)),X.map.depthTexture.name=te.name+".shadowMap",X.map.depthTexture.format=xr,this.type===$l?(X.map.depthTexture.compareFunction=N?Zh:Jh,X.map.depthTexture.minFilter=Sn,X.map.depthTexture.magFilter=Sn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=pn,X.map.depthTexture.magFilter=pn);X.camera.updateProjectionMatrix()}const Y=X.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<Y;D++){if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,D),s.clear();else{D===0&&(s.setRenderTarget(X.map),s.clear());const V=X.getViewport(D);c.set(l.x*V.x,l.y*V.y,l.x*V.z,l.y*V.w),q.viewport(c)}if(te.isPointLight){const V=X.camera,Se=X.matrix,Ae=te.distance||V.far;Ae!==V.far&&(V.far=Ae,V.updateProjectionMatrix()),la.setFromMatrixPosition(te.matrixWorld),V.position.copy(la),Bf.copy(V.position),Bf.add(bE[D]),V.up.copy(RE[D]),V.lookAt(Bf),V.updateMatrixWorld(),Se.makeTranslation(-la.x,-la.y,-la.z),Y0.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Y0,V.coordinateSystem,V.reversedDepth)}else X.updateMatrices(te);r=X.getFrustum(),b(k,A,X.camera,te,this.type)}X.isPointLightShadow!==!0&&this.type===da&&E(X,A),X.needsUpdate=!1}M=this.type,y.needsUpdate=!1,s.setRenderTarget(U,W,B)};function E(L,k){const A=e.update(T);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,_.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ji(o.x,o.y,{format:ys,type:vr})),m.uniforms.shadow_pass.value=L.map.depthTexture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(k,null,A,m,T,null),_.uniforms.shadow_pass.value=L.mapPass.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(k,null,A,_,T,null)}function P(L,k,A,U){let W=null;const B=A.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)W=B;else if(W=A.isPointLight===!0?d:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const q=W.uuid,ce=k.uuid;let ue=h[q];ue===void 0&&(ue={},h[q]=ue);let j=ue[ce];j===void 0&&(j=W.clone(),ue[ce]=j,k.addEventListener("dispose",z)),W=j}if(W.visible=k.visible,W.wireframe=k.wireframe,U===da?W.side=k.shadowSide!==null?k.shadowSide:k.side:W.side=k.shadowSide!==null?k.shadowSide:x[k.side],W.alphaMap=k.alphaMap,W.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,W.map=k.map,W.clipShadows=k.clipShadows,W.clippingPlanes=k.clippingPlanes,W.clipIntersection=k.clipIntersection,W.displacementMap=k.displacementMap,W.displacementScale=k.displacementScale,W.displacementBias=k.displacementBias,W.wireframeLinewidth=k.wireframeLinewidth,W.linewidth=k.linewidth,A.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const q=s.properties.get(W);q.light=A}return W}function b(L,k,A,U,W){if(L.visible===!1)return;if(L.layers.test(k.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&W===da)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,L.matrixWorld);const ce=e.update(L),ue=L.material;if(Array.isArray(ue)){const j=ce.groups;for(let te=0,X=j.length;te<X;te++){const F=j[te],N=ue[F.materialIndex];if(N&&N.visible){const Y=P(L,N,U,W);L.onBeforeShadow(s,L,k,A,ce,Y,F),s.renderBufferDirect(A,null,ce,Y,L,F),L.onAfterShadow(s,L,k,A,ce,Y,F)}}}else if(ue.visible){const j=P(L,ue,U,W);L.onBeforeShadow(s,L,k,A,ce,j,null),s.renderBufferDirect(A,null,ce,j,L,null),L.onAfterShadow(s,L,k,A,ce,j,null)}}const q=L.children;for(let ce=0,ue=q.length;ce<ue;ce++)b(q[ce],k,A,U,W)}function z(L){L.target.removeEventListener("dispose",z);for(const A in h){const U=h[A],W=L.target.uuid;W in U&&(U[W].dispose(),delete U[W])}}}function LE(s,e){function t(){let Q=!1;const Fe=new en;let ye=null;const qe=new en(0,0,0,0);return{setMask:function(ke){ye!==ke&&!Q&&(s.colorMask(ke,ke,ke,ke),ye=ke)},setLocked:function(ke){Q=ke},setClear:function(ke,we,Ye,be,xt){xt===!0&&(ke*=be,we*=be,Ye*=be),Fe.set(ke,we,Ye,be),qe.equals(Fe)===!1&&(s.clearColor(ke,we,Ye,be),qe.copy(Fe))},reset:function(){Q=!1,ye=null,qe.set(-1,0,0,0)}}}function r(){let Q=!1,Fe=!1,ye=null,qe=null,ke=null;return{setReversed:function(we){if(Fe!==we){const Ye=e.get("EXT_clip_control");we?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Fe=we;const be=ke;ke=null,this.setClear(be)}},getReversed:function(){return Fe},setTest:function(we){we?se(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(we){ye!==we&&!Q&&(s.depthMask(we),ye=we)},setFunc:function(we){if(Fe&&(we=Q_[we]),qe!==we){switch(we){case Zf:s.depthFunc(s.NEVER);break;case $f:s.depthFunc(s.ALWAYS);break;case eh:s.depthFunc(s.LESS);break;case mo:s.depthFunc(s.LEQUAL);break;case th:s.depthFunc(s.EQUAL);break;case nh:s.depthFunc(s.GEQUAL);break;case ih:s.depthFunc(s.GREATER);break;case rh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}qe=we}},setLocked:function(we){Q=we},setClear:function(we){ke!==we&&(ke=we,Fe&&(we=1-we),s.clearDepth(we))},reset:function(){Q=!1,ye=null,qe=null,ke=null,Fe=!1}}}function o(){let Q=!1,Fe=null,ye=null,qe=null,ke=null,we=null,Ye=null,be=null,xt=null;return{setTest:function(Lt){Q||(Lt?se(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(Lt){Fe!==Lt&&!Q&&(s.stencilMask(Lt),Fe=Lt)},setFunc:function(Lt,tn,kn){(ye!==Lt||qe!==tn||ke!==kn)&&(s.stencilFunc(Lt,tn,kn),ye=Lt,qe=tn,ke=kn)},setOp:function(Lt,tn,kn){(we!==Lt||Ye!==tn||be!==kn)&&(s.stencilOp(Lt,tn,kn),we=Lt,Ye=tn,be=kn)},setLocked:function(Lt){Q=Lt},setClear:function(Lt){xt!==Lt&&(s.clearStencil(Lt),xt=Lt)},reset:function(){Q=!1,Fe=null,ye=null,qe=null,ke=null,we=null,Ye=null,be=null,xt=null}}}const l=new t,c=new r,f=new o,d=new WeakMap,h=new WeakMap;let g={},x={},m={},_=new WeakMap,S=[],T=null,y=!1,M=null,E=null,P=null,b=null,z=null,L=null,k=null,A=new Ot(0,0,0),U=0,W=!1,B=null,q=null,ce=null,ue=null,j=null;const te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,F=0;const N=s.getParameter(s.VERSION);N.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(N)[1]),X=F>=1):N.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),X=F>=2);let Y=null,D={};const V=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),Ae=new en().fromArray(V),Me=new en().fromArray(Se);function K(Q,Fe,ye,qe){const ke=new Uint8Array(4),we=s.createTexture();s.bindTexture(Q,we),s.texParameteri(Q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<ye;Ye++)Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?s.texImage3D(Fe,0,s.RGBA,1,1,qe,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Fe+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return we}const oe={};oe[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),se(s.DEPTH_TEST),c.setFunc(mo),We(!1),Je(Vm),se(s.CULL_FACE),je(mr);function se(Q){g[Q]!==!0&&(s.enable(Q),g[Q]=!0)}function Pe(Q){g[Q]!==!1&&(s.disable(Q),g[Q]=!1)}function Ue(Q,Fe){return m[Q]!==Fe?(s.bindFramebuffer(Q,Fe),m[Q]=Fe,Q===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Fe),Q===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Fe),!0):!1}function ge(Q,Fe){let ye=S,qe=!1;if(Q){ye=_.get(Fe),ye===void 0&&(ye=[],_.set(Fe,ye));const ke=Q.textures;if(ye.length!==ke.length||ye[0]!==s.COLOR_ATTACHMENT0){for(let we=0,Ye=ke.length;we<Ye;we++)ye[we]=s.COLOR_ATTACHMENT0+we;ye.length=ke.length,qe=!0}}else ye[0]!==s.BACK&&(ye[0]=s.BACK,qe=!0);qe&&s.drawBuffers(ye)}function $e(Q){return T!==Q?(s.useProgram(Q),T=Q,!0):!1}const ie={[ms]:s.FUNC_ADD,[__]:s.FUNC_SUBTRACT,[y_]:s.FUNC_REVERSE_SUBTRACT};ie[M_]=s.MIN,ie[S_]=s.MAX;const _e={[A_]:s.ZERO,[E_]:s.ONE,[w_]:s.SRC_COLOR,[Qf]:s.SRC_ALPHA,[L_]:s.SRC_ALPHA_SATURATE,[R_]:s.DST_COLOR,[C_]:s.DST_ALPHA,[T_]:s.ONE_MINUS_SRC_COLOR,[Jf]:s.ONE_MINUS_SRC_ALPHA,[P_]:s.ONE_MINUS_DST_COLOR,[b_]:s.ONE_MINUS_DST_ALPHA,[I_]:s.CONSTANT_COLOR,[D_]:s.ONE_MINUS_CONSTANT_COLOR,[U_]:s.CONSTANT_ALPHA,[N_]:s.ONE_MINUS_CONSTANT_ALPHA};function je(Q,Fe,ye,qe,ke,we,Ye,be,xt,Lt){if(Q===mr){y===!0&&(Pe(s.BLEND),y=!1);return}if(y===!1&&(se(s.BLEND),y=!0),Q!==x_){if(Q!==M||Lt!==W){if((E!==ms||z!==ms)&&(s.blendEquation(s.FUNC_ADD),E=ms,z=ms),Lt)switch(Q){case ho:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gm:s.blendFunc(s.ONE,s.ONE);break;case Wm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ft("WebGLState: Invalid blending: ",Q);break}else switch(Q){case ho:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Wm:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xm:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",Q);break}P=null,b=null,L=null,k=null,A.set(0,0,0),U=0,M=Q,W=Lt}return}ke=ke||Fe,we=we||ye,Ye=Ye||qe,(Fe!==E||ke!==z)&&(s.blendEquationSeparate(ie[Fe],ie[ke]),E=Fe,z=ke),(ye!==P||qe!==b||we!==L||Ye!==k)&&(s.blendFuncSeparate(_e[ye],_e[qe],_e[we],_e[Ye]),P=ye,b=qe,L=we,k=Ye),(be.equals(A)===!1||xt!==U)&&(s.blendColor(be.r,be.g,be.b,xt),A.copy(be),U=xt),M=Q,W=!1}function Ke(Q,Fe){Q.side===Fi?Pe(s.CULL_FACE):se(s.CULL_FACE);let ye=Q.side===ei;Fe&&(ye=!ye),We(ye),Q.blending===ho&&Q.transparent===!1?je(mr):je(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),c.setFunc(Q.depthFunc),c.setTest(Q.depthTest),c.setMask(Q.depthWrite),l.setMask(Q.colorWrite);const qe=Q.stencilWrite;f.setTest(qe),qe&&(f.setMask(Q.stencilWriteMask),f.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),f.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),O(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(Q){B!==Q&&(Q?s.frontFace(s.CW):s.frontFace(s.CCW),B=Q)}function Je(Q){Q!==m_?(se(s.CULL_FACE),Q!==q&&(Q===Vm?s.cullFace(s.BACK):Q===g_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),q=Q}function vt(Q){Q!==ce&&(X&&s.lineWidth(Q),ce=Q)}function O(Q,Fe,ye){Q?(se(s.POLYGON_OFFSET_FILL),(ue!==Fe||j!==ye)&&(ue=Fe,j=ye,c.getReversed()&&(Fe=-Fe),s.polygonOffset(Fe,ye))):Pe(s.POLYGON_OFFSET_FILL)}function et(Q){Q?se(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function it(Q){Q===void 0&&(Q=s.TEXTURE0+te-1),Y!==Q&&(s.activeTexture(Q),Y=Q)}function Et(Q,Fe,ye){ye===void 0&&(Y===null?ye=s.TEXTURE0+te-1:ye=Y);let qe=D[ye];qe===void 0&&(qe={type:void 0,texture:void 0},D[ye]=qe),(qe.type!==Q||qe.texture!==Fe)&&(Y!==ye&&(s.activeTexture(ye),Y=ye),s.bindTexture(Q,Fe||oe[Q]),qe.type=Q,qe.texture=Fe)}function Ce(){const Q=D[Y];Q!==void 0&&Q.type!==void 0&&(s.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function Tt(){try{s.compressedTexImage2D(...arguments)}catch(Q){Ft("WebGLState:",Q)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(Q){Ft("WebGLState:",Q)}}function w(){try{s.texSubImage2D(...arguments)}catch(Q){Ft("WebGLState:",Q)}}function ne(){try{s.texSubImage3D(...arguments)}catch(Q){Ft("WebGLState:",Q)}}function me(){try{s.compressedTexSubImage2D(...arguments)}catch(Q){Ft("WebGLState:",Q)}}function ve(){try{s.compressedTexSubImage3D(...arguments)}catch(Q){Ft("WebGLState:",Q)}}function Ee(){try{s.texStorage2D(...arguments)}catch(Q){Ft("WebGLState:",Q)}}function Te(){try{s.texStorage3D(...arguments)}catch(Q){Ft("WebGLState:",Q)}}function de(){try{s.texImage2D(...arguments)}catch(Q){Ft("WebGLState:",Q)}}function xe(){try{s.texImage3D(...arguments)}catch(Q){Ft("WebGLState:",Q)}}function ze(Q){return x[Q]!==void 0?x[Q]:s.getParameter(Q)}function Ge(Q,Fe){x[Q]!==Fe&&(s.pixelStorei(Q,Fe),x[Q]=Fe)}function Oe(Q){Ae.equals(Q)===!1&&(s.scissor(Q.x,Q.y,Q.z,Q.w),Ae.copy(Q))}function Ie(Q){Me.equals(Q)===!1&&(s.viewport(Q.x,Q.y,Q.z,Q.w),Me.copy(Q))}function ut(Q,Fe){let ye=h.get(Fe);ye===void 0&&(ye=new WeakMap,h.set(Fe,ye));let qe=ye.get(Q);qe===void 0&&(qe=s.getUniformBlockIndex(Fe,Q.name),ye.set(Q,qe))}function ft(Q,Fe){const qe=h.get(Fe).get(Q);d.get(Fe)!==qe&&(s.uniformBlockBinding(Fe,qe,Q.__bindingPointIndex),d.set(Fe,qe))}function yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},x={},Y=null,D={},m={},_=new WeakMap,S=[],T=null,y=!1,M=null,E=null,P=null,b=null,z=null,L=null,k=null,A=new Ot(0,0,0),U=0,W=!1,B=null,q=null,ce=null,ue=null,j=null,Ae.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:se,disable:Pe,bindFramebuffer:Ue,drawBuffers:ge,useProgram:$e,setBlending:je,setMaterial:Ke,setFlipSided:We,setCullFace:Je,setLineWidth:vt,setPolygonOffset:O,setScissorTest:et,activeTexture:it,bindTexture:Et,unbindTexture:Ce,compressedTexImage2D:Tt,compressedTexImage3D:I,texImage2D:de,texImage3D:xe,pixelStorei:Ge,getParameter:ze,updateUBOMapping:ut,uniformBlockBinding:ft,texStorage2D:Ee,texStorage3D:Te,texSubImage2D:w,texSubImage3D:ne,compressedTexSubImage2D:me,compressedTexSubImage3D:ve,scissor:Oe,viewport:Ie,reset:yt}}function IE(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Pt,g=new WeakMap,x=new Set;let m;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(I,w){return S?new OffscreenCanvas(I,w):dc("canvas")}function y(I,w,ne){let me=1;const ve=Tt(I);if((ve.width>ne||ve.height>ne)&&(me=ne/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ee=Math.floor(me*ve.width),Te=Math.floor(me*ve.height);m===void 0&&(m=T(Ee,Te));const de=w?T(Ee,Te):m;return de.width=Ee,de.height=Te,de.getContext("2d").drawImage(I,0,0,Ee,Te),gt("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+Ee+"x"+Te+")."),de}else return"data"in I&&gt("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),I;return I}function M(I){return I.generateMipmaps}function E(I){s.generateMipmap(I)}function P(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(I,w,ne,me,ve,Ee=!1){if(I!==null){if(s[I]!==void 0)return s[I];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Te;me&&(Te=e.get("EXT_texture_norm16"),Te||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=w;if(w===s.RED&&(ne===s.FLOAT&&(de=s.R32F),ne===s.HALF_FLOAT&&(de=s.R16F),ne===s.UNSIGNED_BYTE&&(de=s.R8),ne===s.UNSIGNED_SHORT&&Te&&(de=Te.R16_EXT),ne===s.SHORT&&Te&&(de=Te.R16_SNORM_EXT)),w===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(de=s.R8UI),ne===s.UNSIGNED_SHORT&&(de=s.R16UI),ne===s.UNSIGNED_INT&&(de=s.R32UI),ne===s.BYTE&&(de=s.R8I),ne===s.SHORT&&(de=s.R16I),ne===s.INT&&(de=s.R32I)),w===s.RG&&(ne===s.FLOAT&&(de=s.RG32F),ne===s.HALF_FLOAT&&(de=s.RG16F),ne===s.UNSIGNED_BYTE&&(de=s.RG8),ne===s.UNSIGNED_SHORT&&Te&&(de=Te.RG16_EXT),ne===s.SHORT&&Te&&(de=Te.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(de=s.RG8UI),ne===s.UNSIGNED_SHORT&&(de=s.RG16UI),ne===s.UNSIGNED_INT&&(de=s.RG32UI),ne===s.BYTE&&(de=s.RG8I),ne===s.SHORT&&(de=s.RG16I),ne===s.INT&&(de=s.RG32I)),w===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(de=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(de=s.RGB16UI),ne===s.UNSIGNED_INT&&(de=s.RGB32UI),ne===s.BYTE&&(de=s.RGB8I),ne===s.SHORT&&(de=s.RGB16I),ne===s.INT&&(de=s.RGB32I)),w===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),ne===s.UNSIGNED_INT&&(de=s.RGBA32UI),ne===s.BYTE&&(de=s.RGBA8I),ne===s.SHORT&&(de=s.RGBA16I),ne===s.INT&&(de=s.RGBA32I)),w===s.RGB&&(ne===s.UNSIGNED_SHORT&&Te&&(de=Te.RGB16_EXT),ne===s.SHORT&&Te&&(de=Te.RGB16_SNORM_EXT),ne===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),ne===s.UNSIGNED_INT_10F_11F_11F_REV&&(de=s.R11F_G11F_B10F)),w===s.RGBA){const xe=Ee?fc:Dt.getTransfer(ve);ne===s.FLOAT&&(de=s.RGBA32F),ne===s.HALF_FLOAT&&(de=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(de=xe===Gt?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT&&Te&&(de=Te.RGBA16_EXT),ne===s.SHORT&&Te&&(de=Te.RGBA16_SNORM_EXT),ne===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function z(I,w){let ne;return I?w===null||w===Zi||w===_a?ne=s.DEPTH24_STENCIL8:w===ki?ne=s.DEPTH32F_STENCIL8:w===xa&&(ne=s.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Zi||w===_a?ne=s.DEPTH_COMPONENT24:w===ki?ne=s.DEPTH_COMPONENT32F:w===xa&&(ne=s.DEPTH_COMPONENT16),ne}function L(I,w){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==pn&&I.minFilter!==Sn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function k(I){const w=I.target;w.removeEventListener("dispose",k),U(w),w.isVideoTexture&&g.delete(w),w.isHTMLTexture&&x.delete(w)}function A(I){const w=I.target;w.removeEventListener("dispose",A),B(w)}function U(I){const w=r.get(I);if(w.__webglInit===void 0)return;const ne=I.source,me=_.get(ne);if(me){const ve=me[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&W(I),Object.keys(me).length===0&&_.delete(ne)}r.remove(I)}function W(I){const w=r.get(I);s.deleteTexture(w.__webglTexture);const ne=I.source,me=_.get(ne);delete me[w.__cacheKey],c.memory.textures--}function B(I){const w=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let ve=0;ve<w.__webglFramebuffer[me].length;ve++)s.deleteFramebuffer(w.__webglFramebuffer[me][ve]);else s.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)s.deleteFramebuffer(w.__webglFramebuffer[me]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ne=I.textures;for(let me=0,ve=ne.length;me<ve;me++){const Ee=r.get(ne[me]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),c.memory.textures--),r.remove(ne[me])}r.remove(I)}let q=0;function ce(){q=0}function ue(){return q}function j(I){q=I}function te(){const I=q;return I>=o.maxTextures&&gt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),q+=1,I}function X(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function F(I,w){const ne=r.get(I);if(I.isVideoTexture&&Et(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ne.__version!==I.version){const me=I.image;if(me===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(ne,I,w);return}}else I.isExternalTexture&&(ne.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+w)}function N(I,w){const ne=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){Pe(ne,I,w);return}else I.isExternalTexture&&(ne.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+w)}function Y(I,w){const ne=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){Pe(ne,I,w);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+w)}function D(I,w){const ne=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&ne.__version!==I.version){Ue(ne,I,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+w)}const V={[ac]:s.REPEAT,[pr]:s.CLAMP_TO_EDGE,[sh]:s.MIRRORED_REPEAT},Se={[pn]:s.NEAREST,[k_]:s.NEAREST_MIPMAP_NEAREST,[El]:s.NEAREST_MIPMAP_LINEAR,[Sn]:s.LINEAR,[of]:s.LINEAR_MIPMAP_NEAREST,[vs]:s.LINEAR_MIPMAP_LINEAR},Ae={[H_]:s.NEVER,[j_]:s.ALWAYS,[V_]:s.LESS,[Jh]:s.LEQUAL,[G_]:s.EQUAL,[Zh]:s.GEQUAL,[W_]:s.GREATER,[X_]:s.NOTEQUAL};function Me(I,w){if(w.type===ki&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Sn||w.magFilter===of||w.magFilter===El||w.magFilter===vs||w.minFilter===Sn||w.minFilter===of||w.minFilter===El||w.minFilter===vs)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,V[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,V[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,V[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Se[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Se[w.minFilter]),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Ae[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===pn||w.minFilter!==El&&w.minFilter!==vs||w.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function K(I,w){let ne=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",k));const me=w.source;let ve=_.get(me);ve===void 0&&(ve={},_.set(me,ve));const Ee=X(w);if(Ee!==I.__cacheKey){ve[Ee]===void 0&&(ve[Ee]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ne=!0),ve[Ee].usedTimes++;const Te=ve[I.__cacheKey];Te!==void 0&&(ve[I.__cacheKey].usedTimes--,Te.usedTimes===0&&W(w)),I.__cacheKey=Ee,I.__webglTexture=ve[Ee].texture}return ne}function oe(I,w,ne){return Math.floor(Math.floor(I/ne)/w)}function se(I,w,ne,me){const Ee=I.updateRanges;if(Ee.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,ne,me,w.data);else{Ee.sort((Ge,Oe)=>Ge.start-Oe.start);let Te=0;for(let Ge=1;Ge<Ee.length;Ge++){const Oe=Ee[Te],Ie=Ee[Ge],ut=Oe.start+Oe.count,ft=oe(Ie.start,w.width,4),yt=oe(Oe.start,w.width,4);Ie.start<=ut+1&&ft===yt&&oe(Ie.start+Ie.count-1,w.width,4)===ft?Oe.count=Math.max(Oe.count,Ie.start+Ie.count-Oe.start):(++Te,Ee[Te]=Ie)}Ee.length=Te+1;const de=t.getParameter(s.UNPACK_ROW_LENGTH),xe=t.getParameter(s.UNPACK_SKIP_PIXELS),ze=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Ge=0,Oe=Ee.length;Ge<Oe;Ge++){const Ie=Ee[Ge],ut=Math.floor(Ie.start/4),ft=Math.ceil(Ie.count/4),yt=ut%w.width,Q=Math.floor(ut/w.width),Fe=ft,ye=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,yt),t.pixelStorei(s.UNPACK_SKIP_ROWS,Q),t.texSubImage2D(s.TEXTURE_2D,0,yt,Q,Fe,ye,ne,me,w.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,de),t.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,ze)}}function Pe(I,w,ne){let me=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=s.TEXTURE_3D);const ve=K(I,w),Ee=w.source;t.bindTexture(me,I.__webglTexture,s.TEXTURE0+ne);const Te=r.get(Ee);if(Ee.version!==Te.__version||ve===!0){if(t.activeTexture(s.TEXTURE0+ne),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ye=Dt.getPrimaries(Dt.workingColorSpace),qe=w.colorSpace===Xr?null:Dt.getPrimaries(w.colorSpace),ke=w.colorSpace===Xr||ye===qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let xe=y(w.image,!1,o.maxTextureSize);xe=Ce(w,xe);const ze=l.convert(w.format,w.colorSpace),Ge=l.convert(w.type);let Oe=b(w.internalFormat,ze,Ge,w.normalized,w.colorSpace,w.isVideoTexture);Me(me,w);let Ie;const ut=w.mipmaps,ft=w.isVideoTexture!==!0,yt=Te.__version===void 0||ve===!0,Q=Ee.dataReady,Fe=L(w,xe);if(w.isDepthTexture)Oe=z(w.format===xs,w.type),yt&&(ft?t.texStorage2D(s.TEXTURE_2D,1,Oe,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,Oe,xe.width,xe.height,0,ze,Ge,null));else if(w.isDataTexture)if(ut.length>0){ft&&yt&&t.texStorage2D(s.TEXTURE_2D,Fe,Oe,ut[0].width,ut[0].height);for(let ye=0,qe=ut.length;ye<qe;ye++)Ie=ut[ye],ft?Q&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,ze,Ge,Ie.data):t.texImage2D(s.TEXTURE_2D,ye,Oe,Ie.width,Ie.height,0,ze,Ge,Ie.data);w.generateMipmaps=!1}else ft?(yt&&t.texStorage2D(s.TEXTURE_2D,Fe,Oe,xe.width,xe.height),Q&&se(w,xe,ze,Ge)):t.texImage2D(s.TEXTURE_2D,0,Oe,xe.width,xe.height,0,ze,Ge,xe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ft&&yt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Oe,ut[0].width,ut[0].height,xe.depth);for(let ye=0,qe=ut.length;ye<qe;ye++)if(Ie=ut[ye],w.format!==Mi)if(ze!==null)if(ft){if(Q)if(w.layerUpdates.size>0){const ke=T0(Ie.width,Ie.height,w.format,w.type);for(const we of w.layerUpdates){const Ye=Ie.data.subarray(we*ke/Ie.data.BYTES_PER_ELEMENT,(we+1)*ke/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,we,Ie.width,Ie.height,1,ze,Ye)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Ie.width,Ie.height,xe.depth,ze,Ie.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,Oe,Ie.width,Ie.height,xe.depth,0,Ie.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?Q&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Ie.width,Ie.height,xe.depth,ze,Ge,Ie.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ye,Oe,Ie.width,Ie.height,xe.depth,0,ze,Ge,Ie.data)}else{ft&&yt&&t.texStorage2D(s.TEXTURE_2D,Fe,Oe,ut[0].width,ut[0].height);for(let ye=0,qe=ut.length;ye<qe;ye++)Ie=ut[ye],w.format!==Mi?ze!==null?ft?Q&&t.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,ze,Ie.data):t.compressedTexImage2D(s.TEXTURE_2D,ye,Oe,Ie.width,Ie.height,0,Ie.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?Q&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,ze,Ge,Ie.data):t.texImage2D(s.TEXTURE_2D,ye,Oe,Ie.width,Ie.height,0,ze,Ge,Ie.data)}else if(w.isDataArrayTexture)if(ft){if(yt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Oe,xe.width,xe.height,xe.depth),Q)if(w.layerUpdates.size>0){const ye=T0(xe.width,xe.height,w.format,w.type);for(const qe of w.layerUpdates){const ke=xe.data.subarray(qe*ye/xe.data.BYTES_PER_ELEMENT,(qe+1)*ye/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,qe,xe.width,xe.height,1,ze,Ge,ke)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,ze,Ge,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,xe.width,xe.height,xe.depth,0,ze,Ge,xe.data);else if(w.isData3DTexture)ft?(yt&&t.texStorage3D(s.TEXTURE_3D,Fe,Oe,xe.width,xe.height,xe.depth),Q&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,ze,Ge,xe.data)):t.texImage3D(s.TEXTURE_3D,0,Oe,xe.width,xe.height,xe.depth,0,ze,Ge,xe.data);else if(w.isFramebufferTexture){if(yt)if(ft)t.texStorage2D(s.TEXTURE_2D,Fe,Oe,xe.width,xe.height);else{let ye=xe.width,qe=xe.height;for(let ke=0;ke<Fe;ke++)t.texImage2D(s.TEXTURE_2D,ke,Oe,ye,qe,0,ze,Ge,null),ye>>=1,qe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const ye=s.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),xe.parentNode!==ye){ye.appendChild(xe),x.add(w),ye.onpaint=be=>{const xt=be.changedElements;for(const Lt of x)xt.includes(Lt.image)&&(Lt.needsUpdate=!0)},ye.requestPaint();return}const qe=0,ke=s.RGBA,we=s.RGBA,Ye=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,qe,ke,we,Ye,xe),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ut.length>0){if(ft&&yt){const ye=Tt(ut[0]);t.texStorage2D(s.TEXTURE_2D,Fe,Oe,ye.width,ye.height)}for(let ye=0,qe=ut.length;ye<qe;ye++)Ie=ut[ye],ft?Q&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,ze,Ge,Ie):t.texImage2D(s.TEXTURE_2D,ye,Oe,ze,Ge,Ie);w.generateMipmaps=!1}else if(ft){if(yt){const ye=Tt(xe);t.texStorage2D(s.TEXTURE_2D,Fe,Oe,ye.width,ye.height)}Q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Ge,xe)}else t.texImage2D(s.TEXTURE_2D,0,Oe,ze,Ge,xe);M(w)&&E(me),Te.__version=Ee.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Ue(I,w,ne){if(w.image.length!==6)return;const me=K(I,w),ve=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+ne);const Ee=r.get(ve);if(ve.version!==Ee.__version||me===!0){t.activeTexture(s.TEXTURE0+ne);const Te=Dt.getPrimaries(Dt.workingColorSpace),de=w.colorSpace===Xr?null:Dt.getPrimaries(w.colorSpace),xe=w.colorSpace===Xr||Te===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ze=w.isCompressedTexture||w.image[0].isCompressedTexture,Ge=w.image[0]&&w.image[0].isDataTexture,Oe=[];for(let we=0;we<6;we++)!ze&&!Ge?Oe[we]=y(w.image[we],!0,o.maxCubemapSize):Oe[we]=Ge?w.image[we].image:w.image[we],Oe[we]=Ce(w,Oe[we]);const Ie=Oe[0],ut=l.convert(w.format,w.colorSpace),ft=l.convert(w.type),yt=b(w.internalFormat,ut,ft,w.normalized,w.colorSpace),Q=w.isVideoTexture!==!0,Fe=Ee.__version===void 0||me===!0,ye=ve.dataReady;let qe=L(w,Ie);Me(s.TEXTURE_CUBE_MAP,w);let ke;if(ze){Q&&Fe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,qe,yt,Ie.width,Ie.height);for(let we=0;we<6;we++){ke=Oe[we].mipmaps;for(let Ye=0;Ye<ke.length;Ye++){const be=ke[Ye];w.format!==Mi?ut!==null?Q?ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ye,0,0,be.width,be.height,ut,be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ye,yt,be.width,be.height,0,be.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ye,0,0,be.width,be.height,ut,ft,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ye,yt,be.width,be.height,0,ut,ft,be.data)}}}else{if(ke=w.mipmaps,Q&&Fe){ke.length>0&&qe++;const we=Tt(Oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,qe,yt,we.width,we.height)}for(let we=0;we<6;we++)if(Ge){Q?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Oe[we].width,Oe[we].height,ut,ft,Oe[we].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,yt,Oe[we].width,Oe[we].height,0,ut,ft,Oe[we].data);for(let Ye=0;Ye<ke.length;Ye++){const xt=ke[Ye].image[we].image;Q?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ye+1,0,0,xt.width,xt.height,ut,ft,xt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ye+1,yt,xt.width,xt.height,0,ut,ft,xt.data)}}else{Q?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ut,ft,Oe[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,yt,ut,ft,Oe[we]);for(let Ye=0;Ye<ke.length;Ye++){const be=ke[Ye];Q?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ye+1,0,0,ut,ft,be.image[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ye+1,yt,ut,ft,be.image[we])}}}M(w)&&E(s.TEXTURE_CUBE_MAP),Ee.__version=ve.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ge(I,w,ne,me,ve,Ee){const Te=l.convert(ne.format,ne.colorSpace),de=l.convert(ne.type),xe=b(ne.internalFormat,Te,de,ne.normalized,ne.colorSpace),ze=r.get(w),Ge=r.get(ne);if(Ge.__renderTarget=w,!ze.__hasExternalTextures){const Oe=Math.max(1,w.width>>Ee),Ie=Math.max(1,w.height>>Ee);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?t.texImage3D(ve,Ee,xe,Oe,Ie,w.depth,0,Te,de,null):t.texImage2D(ve,Ee,xe,Oe,Ie,0,Te,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),it(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ve,Ge.__webglTexture,0,et(w)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,ve,Ge.__webglTexture,Ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(I,w,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer){const me=w.depthTexture,ve=me&&me.isDepthTexture?me.type:null,Ee=z(w.stencilBuffer,ve),Te=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;it(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et(w),Ee,w.width,w.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,et(w),Ee,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,I)}else{const me=w.textures;for(let ve=0;ve<me.length;ve++){const Ee=me[ve],Te=l.convert(Ee.format,Ee.colorSpace),de=l.convert(Ee.type),xe=b(Ee.internalFormat,Te,de,Ee.normalized,Ee.colorSpace);it(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et(w),xe,w.width,w.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,et(w),xe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,xe,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ie(I,w,ne){const me=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(w.depthTexture);if(ve.__renderTarget=w,(!ve.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),me){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,w.depthTexture.addEventListener("dispose",k)),ve.__webglTexture===void 0){ve.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),Me(s.TEXTURE_CUBE_MAP,w.depthTexture);const ze=l.convert(w.depthTexture.format),Ge=l.convert(w.depthTexture.type);let Oe;w.depthTexture.format===xr?Oe=s.DEPTH_COMPONENT24:w.depthTexture.format===xs&&(Oe=s.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Oe,w.width,w.height,0,ze,Ge,null)}}else F(w.depthTexture,0);const Ee=ve.__webglTexture,Te=et(w),de=me?s.TEXTURE_CUBE_MAP_POSITIVE_X+ne:s.TEXTURE_2D,xe=w.depthTexture.format===xs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===xr)it(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,de,Ee,0,Te):s.framebufferTexture2D(s.FRAMEBUFFER,xe,de,Ee,0);else if(w.depthTexture.format===xs)it(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,de,Ee,0,Te):s.framebufferTexture2D(s.FRAMEBUFFER,xe,de,Ee,0);else throw new Error("Unknown depthTexture format")}function _e(I){const w=r.get(I),ne=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const me=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=me}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(ne)for(let me=0;me<6;me++)ie(w.__webglFramebuffer[me],I,me);else{const me=I.texture.mipmaps;me&&me.length>0?ie(w.__webglFramebuffer[0],I,0):ie(w.__webglFramebuffer,I,0)}else if(ne){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=s.createRenderbuffer(),$e(w.__webglDepthbuffer[me],I,!1);else{const ve=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=w.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,Ee)}}else{const me=I.texture.mipmaps;if(me&&me.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),$e(w.__webglDepthbuffer,I,!1);else{const ve=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,Ee)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function je(I,w,ne){const me=r.get(I);w!==void 0&&ge(me.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&_e(I)}function Ke(I){const w=I.texture,ne=r.get(I),me=r.get(w);I.addEventListener("dispose",A);const ve=I.textures,Ee=I.isWebGLCubeRenderTarget===!0,Te=ve.length>1;if(Te||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=w.version,c.memory.textures++),Ee){ne.__webglFramebuffer=[];for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer[de]=[];for(let xe=0;xe<w.mipmaps.length;xe++)ne.__webglFramebuffer[de][xe]=s.createFramebuffer()}else ne.__webglFramebuffer[de]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer=[];for(let de=0;de<w.mipmaps.length;de++)ne.__webglFramebuffer[de]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(Te)for(let de=0,xe=ve.length;de<xe;de++){const ze=r.get(ve[de]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),c.memory.textures++)}if(I.samples>0&&it(I)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let de=0;de<ve.length;de++){const xe=ve[de];ne.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[de]);const ze=l.convert(xe.format,xe.colorSpace),Ge=l.convert(xe.type),Oe=b(xe.internalFormat,ze,Ge,xe.normalized,xe.colorSpace,I.isXRRenderTarget===!0),Ie=et(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,Oe,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,ne.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),$e(ne.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),Me(s.TEXTURE_CUBE_MAP,w);for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)ge(ne.__webglFramebuffer[de][xe],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else ge(ne.__webglFramebuffer[de],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);M(w)&&E(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let de=0,xe=ve.length;de<xe;de++){const ze=ve[de],Ge=r.get(ze);let Oe=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Oe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Oe,Ge.__webglTexture),Me(Oe,ze),ge(ne.__webglFramebuffer,I,ze,s.COLOR_ATTACHMENT0+de,Oe,0),M(ze)&&E(Oe)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(de=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,me.__webglTexture),Me(de,w),w.mipmaps&&w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)ge(ne.__webglFramebuffer[xe],I,w,s.COLOR_ATTACHMENT0,de,xe);else ge(ne.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,de,0);M(w)&&E(de),t.unbindTexture()}I.depthBuffer&&_e(I)}function We(I){const w=I.textures;for(let ne=0,me=w.length;ne<me;ne++){const ve=w[ne];if(M(ve)){const Ee=P(I),Te=r.get(ve).__webglTexture;t.bindTexture(Ee,Te),E(Ee),t.unbindTexture()}}}const Je=[],vt=[];function O(I){if(I.samples>0){if(it(I)===!1){const w=I.textures,ne=I.width,me=I.height;let ve=s.COLOR_BUFFER_BIT;const Ee=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=r.get(I),de=w.length>1;if(de)for(let ze=0;ze<w.length;ze++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const xe=I.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ze=0;ze<w.length;ze++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[ze]);const Ge=r.get(w[ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ge,0)}s.blitFramebuffer(0,0,ne,me,0,0,ne,me,ve,s.NEAREST),d===!0&&(Je.length=0,vt.length=0,Je.push(s.COLOR_ATTACHMENT0+ze),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Je.push(Ee),vt.push(Ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,vt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let ze=0;ze<w.length;ze++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,Te.__webglColorRenderbuffer[ze]);const Ge=r.get(w[ze]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,Ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const w=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function et(I){return Math.min(o.maxSamples,I.samples)}function it(I){const w=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Et(I){const w=c.render.frame;g.get(I)!==w&&(g.set(I,w),I.update())}function Ce(I,w){const ne=I.colorSpace,me=I.format,ve=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ne!==uc&&ne!==Xr&&(Dt.getTransfer(ne)===Gt?(me!==Mi||ve!==yi)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",ne)),w}function Tt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=te,this.resetTextureUnits=ce,this.getTextureUnits=ue,this.setTextureUnits=j,this.setTexture2D=F,this.setTexture2DArray=N,this.setTexture3D=Y,this.setTextureCube=D,this.rebindTextures=je,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function DE(s,e){function t(r,o=Xr){let l;const c=Dt.getTransfer(o);if(r===yi)return s.UNSIGNED_BYTE;if(r===jh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Kh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===zg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Hg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===kg)return s.BYTE;if(r===Bg)return s.SHORT;if(r===xa)return s.UNSIGNED_SHORT;if(r===Xh)return s.INT;if(r===Zi)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===vr)return s.HALF_FLOAT;if(r===Vg)return s.ALPHA;if(r===Gg)return s.RGB;if(r===Mi)return s.RGBA;if(r===xr)return s.DEPTH_COMPONENT;if(r===xs)return s.DEPTH_STENCIL;if(r===Wg)return s.RED;if(r===qh)return s.RED_INTEGER;if(r===ys)return s.RG;if(r===Yh)return s.RG_INTEGER;if(r===Qh)return s.RGBA_INTEGER;if(r===ec||r===tc||r===nc||r===ic)if(c===Gt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ec)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===tc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===nc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ic)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ec)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===tc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===nc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ic)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===oh||r===ah||r===lh||r===ch)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===oh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ah)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ch)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===uh||r===fh||r===hh||r===dh||r===ph||r===lc||r===mh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===uh||r===fh)return c===Gt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===hh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===dh)return l.COMPRESSED_R11_EAC;if(r===ph)return l.COMPRESSED_SIGNED_R11_EAC;if(r===lc)return l.COMPRESSED_RG11_EAC;if(r===mh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===gh||r===vh||r===xh||r===_h||r===yh||r===Mh||r===Sh||r===Ah||r===Eh||r===wh||r===Th||r===Ch||r===bh||r===Rh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===gh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_h)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Mh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ah)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Eh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Th)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ch)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ph||r===Lh||r===Ih)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ph)return c===Gt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Lh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ih)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dh||r===Uh||r===cc||r===Nh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Dh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Uh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_a?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const UE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NE=`
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

}`;class FE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new iv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ci({vertexShader:UE,fragmentShader:NE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Cn(new yc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OE extends As{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",d=1,h=null,g=null,x=null,m=null,_=null,S=null;const T=typeof XRWebGLBinding<"u",y=new FE,M={},E=t.getContextAttributes();let P=null,b=null;const z=[],L=[],k=new Pt;let A=null;const U=new $n;U.viewport=new en;const W=new $n;W.viewport=new en;const B=[U,W],q=new Ky;let ce=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=z[K];return oe===void 0&&(oe=new df,z[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=z[K];return oe===void 0&&(oe=new df,z[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=z[K];return oe===void 0&&(oe=new df,z[K]=oe),oe.getHandSpace()};function j(K){const oe=L.indexOf(K.inputSource);if(oe===-1)return;const se=z[oe];se!==void 0&&(se.update(K.inputSource,K.frame,h||c),se.dispatchEvent({type:K.type,data:K.inputSource}))}function te(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",X);for(let K=0;K<z.length;K++){const oe=L[K];oe!==null&&(L[K]=null,z[K].disconnect(oe))}ce=null,ue=null,y.reset();for(const K in M)delete M[K];e.setRenderTarget(P),_=null,m=null,x=null,o=null,b=null,Me.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,r.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return x===null&&T&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",te),o.addEventListener("inputsourceschange",X),E.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(k),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Pe=null,Ue=null;E.depth&&(Ue=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=E.stencil?xs:xr,Pe=E.stencil?_a:Zi);const ge={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:l};x=this.getBinding(),m=x.createProjectionLayer(ge),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),b=new Ji(m.textureWidth,m.textureHeight,{format:Mi,type:yi,depthTexture:new vo(m.textureWidth,m.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const se={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:l};_=new XRWebGLLayer(o,t,se),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),b=new Ji(_.framebufferWidth,_.framebufferHeight,{format:Mi,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(f),Me.setContext(o),Me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(K){for(let oe=0;oe<K.removed.length;oe++){const se=K.removed[oe],Pe=L.indexOf(se);Pe>=0&&(L[Pe]=null,z[Pe].disconnect(se))}for(let oe=0;oe<K.added.length;oe++){const se=K.added[oe];let Pe=L.indexOf(se);if(Pe===-1){for(let ge=0;ge<z.length;ge++)if(ge>=L.length){L.push(se),Pe=ge;break}else if(L[ge]===null){L[ge]=se,Pe=ge;break}if(Pe===-1)break}const Ue=z[Pe];Ue&&Ue.connect(se)}}const F=new Z,N=new Z;function Y(K,oe,se){F.setFromMatrixPosition(oe.matrixWorld),N.setFromMatrixPosition(se.matrixWorld);const Pe=F.distanceTo(N),Ue=oe.projectionMatrix.elements,ge=se.projectionMatrix.elements,$e=Ue[14]/(Ue[10]-1),ie=Ue[14]/(Ue[10]+1),_e=(Ue[9]+1)/Ue[5],je=(Ue[9]-1)/Ue[5],Ke=(Ue[8]-1)/Ue[0],We=(ge[8]+1)/ge[0],Je=$e*Ke,vt=$e*We,O=Pe/(-Ke+We),et=O*-Ke;if(oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(et),K.translateZ(O),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ue[10]===-1)K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const it=$e+O,Et=ie+O,Ce=Je-et,Tt=vt+(Pe-et),I=_e*ie/Et*it,w=je*ie/Et*it;K.projectionMatrix.makePerspective(Ce,Tt,I,w,it,Et),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function D(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let oe=K.near,se=K.far;y.texture!==null&&(y.depthNear>0&&(oe=y.depthNear),y.depthFar>0&&(se=y.depthFar)),q.near=W.near=U.near=oe,q.far=W.far=U.far=se,(ce!==q.near||ue!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),ce=q.near,ue=q.far),q.layers.mask=K.layers.mask|6,U.layers.mask=q.layers.mask&-5,W.layers.mask=q.layers.mask&-3;const Pe=K.parent,Ue=q.cameras;D(q,Pe);for(let ge=0;ge<Ue.length;ge++)D(Ue[ge],Pe);Ue.length===2?Y(q,U,W):q.projectionMatrix.copy(U.projectionMatrix),V(K,q,Pe)};function V(K,oe,se){se===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(se.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ya*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(m===null&&_===null))return d},this.setFoveation=function(K){d=K,m!==null&&(m.fixedFoveation=K),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(K){return M[K]};let Se=null;function Ae(K,oe){if(g=oe.getViewerPose(h||c),S=oe,g!==null){const se=g.views;_!==null&&(e.setRenderTargetFramebuffer(b,_.framebuffer),e.setRenderTarget(b));let Pe=!1;se.length!==q.cameras.length&&(q.cameras.length=0,Pe=!0);for(let ie=0;ie<se.length;ie++){const _e=se[ie];let je=null;if(_!==null)je=_.getViewport(_e);else{const We=x.getViewSubImage(m,_e);je=We.viewport,ie===0&&(e.setRenderTargetTextures(b,We.colorTexture,We.depthStencilTexture),e.setRenderTarget(b))}let Ke=B[ie];Ke===void 0&&(Ke=new $n,Ke.layers.enable(ie),Ke.viewport=new en,B[ie]=Ke),Ke.matrix.fromArray(_e.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(_e.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(je.x,je.y,je.width,je.height),ie===0&&(q.matrix.copy(Ke.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Pe===!0&&q.cameras.push(Ke)}const Ue=o.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){x=r.getBinding();const ie=x.getDepthInformation(se[0]);ie&&ie.isValid&&ie.texture&&y.init(ie,o.renderState)}if(Ue&&Ue.includes("camera-access")&&T){e.state.unbindTexture(),x=r.getBinding();for(let ie=0;ie<se.length;ie++){const _e=se[ie].camera;if(_e){let je=M[_e];je||(je=new iv,M[_e]=je);const Ke=x.getCameraImage(_e);je.sourceTexture=Ke}}}}for(let se=0;se<z.length;se++){const Pe=L[se],Ue=z[se];Pe!==null&&Ue!==void 0&&Ue.update(Pe,oe,h||c)}Se&&Se(K,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),S=null}const Me=new ov;Me.setAnimationLoop(Ae),this.setAnimationLoop=function(K){Se=K},this.dispose=function(){}}}const kE=new rn,dv=new At;dv.set(-1,0,0,0,1,0,0,0,1);function BE(s,e){function t(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,rv(s)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,E,P,b){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?l(y,M):M.isMeshLambertMaterial?(l(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(l(y,M),x(y,M)):M.isMeshPhongMaterial?(l(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(l(y,M),m(y,M),M.isMeshPhysicalMaterial&&_(y,M,b)):M.isMeshMatcapMaterial?(l(y,M),S(y,M)):M.isMeshDepthMaterial?l(y,M):M.isMeshDistanceMaterial?(l(y,M),T(y,M)):M.isMeshNormalMaterial?l(y,M):M.isLineBasicMaterial?(c(y,M),M.isLineDashedMaterial&&f(y,M)):M.isPointsMaterial?d(y,M,E,P):M.isSpriteMaterial?h(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function l(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,t(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===ei&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,t(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===ei&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,t(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,t(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,t(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const E=e.get(M),P=E.envMap,b=E.envMapRotation;P&&(y.envMap.value=P,y.envMapRotation.value.setFromMatrix4(kE.makeRotationFromEuler(b)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(dv),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,t(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,t(M.aoMap,y.aoMapTransform))}function c(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform))}function f(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function d(y,M,E,P){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*E,y.scale.value=P*.5,M.map&&(y.map.value=M.map,t(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function h(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function x(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function m(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,t(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,t(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function _(y,M,E){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,t(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,t(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,t(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,t(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,t(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===ei&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,t(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,t(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=E.texture,y.transmissionSamplerSize.value.set(E.width,E.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,t(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,t(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,t(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,t(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,t(M.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,M){M.matcap&&(y.matcap.value=M.matcap)}function T(y,M){const E=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(E.matrixWorld),y.nearDistance.value=E.shadow.camera.near,y.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function zE(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(E,P){const b=P.program;r.uniformBlockBinding(E,b)}function h(E,P){let b=o[E.id];b===void 0&&(S(E),b=g(E),o[E.id]=b,E.addEventListener("dispose",y));const z=P.program;r.updateUBOMapping(E,z);const L=e.render.frame;l[E.id]!==L&&(m(E),l[E.id]=L)}function g(E){const P=x();E.__bindingPointIndex=P;const b=s.createBuffer(),z=E.__size,L=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,z,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,b),b}function x(){for(let E=0;E<f;E++)if(c.indexOf(E)===-1)return c.push(E),E;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const P=o[E.id],b=E.uniforms,z=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let L=0,k=b.length;L<k;L++){const A=Array.isArray(b[L])?b[L]:[b[L]];for(let U=0,W=A.length;U<W;U++){const B=A[U];if(_(B,L,U,z)===!0){const q=B.__offset,ce=Array.isArray(B.value)?B.value:[B.value];let ue=0;for(let j=0;j<ce.length;j++){const te=ce[j],X=T(te);typeof te=="number"||typeof te=="boolean"?(B.__data[0]=te,s.bufferSubData(s.UNIFORM_BUFFER,q+ue,B.__data)):te.isMatrix3?(B.__data[0]=te.elements[0],B.__data[1]=te.elements[1],B.__data[2]=te.elements[2],B.__data[3]=0,B.__data[4]=te.elements[3],B.__data[5]=te.elements[4],B.__data[6]=te.elements[5],B.__data[7]=0,B.__data[8]=te.elements[6],B.__data[9]=te.elements[7],B.__data[10]=te.elements[8],B.__data[11]=0):ArrayBuffer.isView(te)?B.__data.set(new te.constructor(te.buffer,te.byteOffset,B.__data.length)):(te.toArray(B.__data,ue),ue+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(E,P,b,z){const L=E.value,k=P+"_"+b;if(z[k]===void 0)return typeof L=="number"||typeof L=="boolean"?z[k]=L:ArrayBuffer.isView(L)?z[k]=L.slice():z[k]=L.clone(),!0;{const A=z[k];if(typeof L=="number"||typeof L=="boolean"){if(A!==L)return z[k]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(A.equals(L)===!1)return A.copy(L),!0}}return!1}function S(E){const P=E.uniforms;let b=0;const z=16;for(let k=0,A=P.length;k<A;k++){const U=Array.isArray(P[k])?P[k]:[P[k]];for(let W=0,B=U.length;W<B;W++){const q=U[W],ce=Array.isArray(q.value)?q.value:[q.value];for(let ue=0,j=ce.length;ue<j;ue++){const te=ce[ue],X=T(te),F=b%z,N=F%X.boundary,Y=F+N;b+=N,Y!==0&&z-Y<X.storage&&(b+=z-Y),q.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=b,b+=X.storage}}}const L=b%z;return L>0&&(b+=z-L),E.__size=b,E.__cache={},this}function T(E){const P={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(P.boundary=4,P.storage=4):E.isVector2?(P.boundary=8,P.storage=8):E.isVector3||E.isColor?(P.boundary=16,P.storage=12):E.isVector4?(P.boundary=16,P.storage=16):E.isMatrix3?(P.boundary=48,P.storage=48):E.isMatrix4?(P.boundary=64,P.storage=64):E.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(P.boundary=16,P.storage=E.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",E),P}function y(E){const P=E.target;P.removeEventListener("dispose",y);const b=c.indexOf(P.__bindingPointIndex);c.splice(b,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function M(){for(const E in o)s.deleteBuffer(o[E]);c=[],o={},l={}}return{bind:d,update:h,dispose:M}}const HE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function VE(){return ji===null&&(ji=new Zg(HE,16,16,ys,vr),ji.name="DFG_LUT",ji.minFilter=Sn,ji.magFilter=Sn,ji.wrapS=pr,ji.wrapT=pr,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class pv{constructor(e={}){const{canvas:t=q_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:m=!1,outputBufferType:_=yi}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const T=_,y=new Set([Qh,Yh,qh]),M=new Set([yi,Zi,xa,_a,jh,Kh]),E=new Uint32Array(4),P=new Int32Array(4),b=new Z;let z=null,L=null;const k=[],A=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let B=!1,q=null;this._outputColorSpace=_i;let ce=0,ue=0,j=null,te=-1,X=null;const F=new en,N=new en;let Y=null;const D=new Ot(0);let V=0,Se=t.width,Ae=t.height,Me=1,K=null,oe=null;const se=new en(0,0,Se,Ae),Pe=new en(0,0,Se,Ae);let Ue=!1;const ge=new $g;let $e=!1,ie=!1;const _e=new rn,je=new Z,Ke=new en,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function vt(){return j===null?Me:1}let O=r;function et(R,ee){return t.getContext(R,ee)}try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wh}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",be,!1),O===null){const ee="webgl2";if(O=et(ee,R),O===null)throw et(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ft("WebGLRenderer: "+R.message),R}let it,Et,Ce,Tt,I,w,ne,me,ve,Ee,Te,de,xe,ze,Ge,Oe,Ie,ut,ft,yt,Q,Fe,ye;function qe(){it=new V1(O),it.init(),Q=new DE(O,it),Et=new U1(O,it,e,Q),Ce=new LE(O,it),Et.reversedDepthBuffer&&m&&Ce.buffers.depth.setReversed(!0),Tt=new X1(O),I=new vE,w=new IE(O,it,Ce,I,Et,Q,Tt),ne=new H1(W),me=new Yy(O),Fe=new I1(O,me),ve=new G1(O,me,Tt,Fe),Ee=new K1(O,ve,me,Fe,Tt),ut=new j1(O,Et,w),Ge=new N1(I),Te=new gE(W,ne,it,Et,Fe,Ge),de=new BE(W,I),xe=new _E,ze=new wE(it),Ie=new L1(W,ne,Ce,Ee,S,d),Oe=new PE(W,Ee,Et),ye=new zE(O,Tt,Et,Ce),ft=new D1(O,it,Tt),yt=new W1(O,it,Tt),Tt.programs=Te.programs,W.capabilities=Et,W.extensions=it,W.properties=I,W.renderLists=xe,W.shadowMap=Oe,W.state=Ce,W.info=Tt}qe(),T!==yi&&(U=new Y1(T,t.width,t.height,o,l));const ke=new OE(W,O);this.xr=ke,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=it.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=it.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(R){R!==void 0&&(Me=R,this.setSize(Se,Ae,!1))},this.getSize=function(R){return R.set(Se,Ae)},this.setSize=function(R,ee,fe=!0){if(ke.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=R,Ae=ee,t.width=Math.floor(R*Me),t.height=Math.floor(ee*Me),fe===!0&&(t.style.width=R+"px",t.style.height=ee+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,R,ee)},this.getDrawingBufferSize=function(R){return R.set(Se*Me,Ae*Me).floor()},this.setDrawingBufferSize=function(R,ee,fe){Se=R,Ae=ee,Me=fe,t.width=Math.floor(R*fe),t.height=Math.floor(ee*fe),this.setViewport(0,0,R,ee)},this.setEffects=function(R){if(T===yi){Ft("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let ee=0;ee<R.length;ee++)if(R[ee].isOutputPass===!0){gt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(se)},this.setViewport=function(R,ee,fe,le){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,ee,fe,le),Ce.viewport(F.copy(se).multiplyScalar(Me).round())},this.getScissor=function(R){return R.copy(Pe)},this.setScissor=function(R,ee,fe,le){R.isVector4?Pe.set(R.x,R.y,R.z,R.w):Pe.set(R,ee,fe,le),Ce.scissor(N.copy(Pe).multiplyScalar(Me).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(R){Ce.setScissorTest(Ue=R)},this.setOpaqueSort=function(R){K=R},this.setTransparentSort=function(R){oe=R},this.getClearColor=function(R){return R.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(R=!0,ee=!0,fe=!0){let le=0;if(R){let ae=!1;if(j!==null){const He=j.texture.format;ae=y.has(He)}if(ae){const He=j.texture.type,Xe=M.has(He),Ne=Ie.getClearColor(),nt=Ie.getClearAlpha(),rt=Ne.r,ht=Ne.g,dt=Ne.b;Xe?(E[0]=rt,E[1]=ht,E[2]=dt,E[3]=nt,O.clearBufferuiv(O.COLOR,0,E)):(P[0]=rt,P[1]=ht,P[2]=dt,P[3]=nt,O.clearBufferiv(O.COLOR,0,P))}else le|=O.COLOR_BUFFER_BIT}ee&&(le|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(le|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&O.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),q=R},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ie.dispose(),xe.dispose(),ze.dispose(),I.dispose(),ne.dispose(),Ee.dispose(),Fe.dispose(),ye.dispose(),Te.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Ai),ke.removeEventListener("sessionend",er),ti.stop()};function we(R){R.preventDefault(),Zm("WebGLRenderer: Context Lost."),B=!0}function Ye(){Zm("WebGLRenderer: Context Restored."),B=!1;const R=Tt.autoReset,ee=Oe.enabled,fe=Oe.autoUpdate,le=Oe.needsUpdate,ae=Oe.type;qe(),Tt.autoReset=R,Oe.enabled=ee,Oe.autoUpdate=fe,Oe.needsUpdate=le,Oe.type=ae}function be(R){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xt(R){const ee=R.target;ee.removeEventListener("dispose",xt),Lt(ee)}function Lt(R){tn(R),I.remove(R)}function tn(R){const ee=I.get(R).programs;ee!==void 0&&(ee.forEach(function(fe){Te.releaseProgram(fe)}),R.isShaderMaterial&&Te.releaseShaderCache(R))}this.renderBufferDirect=function(R,ee,fe,le,ae,He){ee===null&&(ee=We);const Xe=ae.isMesh&&ae.matrixWorld.determinant()<0,Ne=Qr(R,ee,fe,le,ae);Ce.setMaterial(le,Xe);let nt=fe.index,rt=1;if(le.wireframe===!0){if(nt=ve.getWireframeAttribute(fe),nt===void 0)return;rt=2}const ht=fe.drawRange,dt=fe.attributes.position;let ot=ht.start*rt,Ct=(ht.start+ht.count)*rt;He!==null&&(ot=Math.max(ot,He.start*rt),Ct=Math.min(Ct,(He.start+He.count)*rt)),nt!==null?(ot=Math.max(ot,0),Ct=Math.min(Ct,nt.count)):dt!=null&&(ot=Math.max(ot,0),Ct=Math.min(Ct,dt.count));const Bt=Ct-ot;if(Bt<0||Bt===1/0)return;Fe.setup(ae,le,Ne,fe,nt);let Wt,zt=ft;if(nt!==null&&(Wt=me.get(nt),zt=yt,zt.setIndex(Wt)),ae.isMesh)le.wireframe===!0?(Ce.setLineWidth(le.wireframeLinewidth*vt()),zt.setMode(O.LINES)):zt.setMode(O.TRIANGLES);else if(ae.isLine){let Jt=le.linewidth;Jt===void 0&&(Jt=1),Ce.setLineWidth(Jt*vt()),ae.isLineSegments?zt.setMode(O.LINES):ae.isLineLoop?zt.setMode(O.LINE_LOOP):zt.setMode(O.LINE_STRIP)}else ae.isPoints?zt.setMode(O.POINTS):ae.isSprite&&zt.setMode(O.TRIANGLES);if(ae.isBatchedMesh)if(it.get("WEBGL_multi_draw"))zt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Jt=ae._multiDrawStarts,Ze=ae._multiDrawCounts,on=ae._multiDrawCount,St=nt?me.get(nt).bytesPerElement:1,vn=I.get(le).currentProgram.getUniforms();for(let An=0;An<on;An++)vn.setValue(O,"_gl_DrawID",An),zt.render(Jt[An]/St,Ze[An])}else if(ae.isInstancedMesh)zt.renderInstances(ot,Bt,ae.count);else if(fe.isInstancedBufferGeometry){const Jt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Ze=Math.min(fe.instanceCount,Jt);zt.renderInstances(ot,Bt,Ze)}else zt.render(ot,Bt)};function kn(R,ee,fe){R.transparent===!0&&R.side===Fi&&R.forceSinglePass===!1?(R.side=ei,R.needsUpdate=!0,Rn(R,ee,fe),R.side=Kr,R.needsUpdate=!0,Rn(R,ee,fe),R.side=Fi):Rn(R,ee,fe)}this.compile=function(R,ee,fe=null){fe===null&&(fe=R),L=ze.get(fe),L.init(ee),A.push(L),fe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ee.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),R!==fe&&R.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ee.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),L.setupLights();const le=new Set;return R.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const He=ae.material;if(He)if(Array.isArray(He))for(let Xe=0;Xe<He.length;Xe++){const Ne=He[Xe];kn(Ne,fe,ae),le.add(Ne)}else kn(He,fe,ae),le.add(He)}),L=A.pop(),le},this.compileAsync=function(R,ee,fe=null){const le=this.compile(R,ee,fe);return new Promise(ae=>{function He(){if(le.forEach(function(Xe){I.get(Xe).currentProgram.isReady()&&le.delete(Xe)}),le.size===0){ae(R);return}setTimeout(He,10)}it.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Si=null;function $i(R){Si&&Si(R)}function Ai(){ti.stop()}function er(){ti.start()}const ti=new ov;ti.setAnimationLoop($i),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(R){Si=R,ke.setAnimationLoop(R),R===null?ti.stop():ti.start()},ke.addEventListener("sessionstart",Ai),ke.addEventListener("sessionend",er),this.render=function(R,ee){if(ee!==void 0&&ee.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;q!==null&&q.renderStart(R,ee);const fe=ke.enabled===!0&&ke.isPresenting===!0,le=U!==null&&(j===null||fe)&&U.begin(W,j);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(ee),ee=ke.getCamera()),R.isScene===!0&&R.onBeforeRender(W,R,ee,j),L=ze.get(R,A.length),L.init(ee),L.state.textureUnits=w.getTextureUnits(),A.push(L),_e.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),ge.setFromProjectionMatrix(_e,qi,ee.reversedDepth),ie=this.localClippingEnabled,$e=Ge.init(this.clippingPlanes,ie),z=xe.get(R,k.length),z.init(),k.push(z),ke.enabled===!0&&ke.isPresenting===!0){const Xe=W.xr.getDepthSensingMesh();Xe!==null&&qr(Xe,ee,-1/0,W.sortObjects)}qr(R,ee,0,W.sortObjects),z.finish(),W.sortObjects===!0&&z.sort(K,oe),Je=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Je&&Ie.addToRenderList(z,R),this.info.render.frame++,$e===!0&&Ge.beginShadows();const ae=L.state.shadowsArray;if(Oe.render(ae,R,ee),$e===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le&&U.hasRenderPass())===!1){const Xe=z.opaque,Ne=z.transmissive;if(L.setupLights(),ee.isArrayCamera){const nt=ee.cameras;if(Ne.length>0)for(let rt=0,ht=nt.length;rt<ht;rt++){const dt=nt[rt];cn(Xe,Ne,R,dt)}Je&&Ie.render(R);for(let rt=0,ht=nt.length;rt<ht;rt++){const dt=nt[rt];ws(z,R,dt,dt.viewport)}}else Ne.length>0&&cn(Xe,Ne,R,ee),Je&&Ie.render(R),ws(z,R,ee)}j!==null&&ue===0&&(w.updateMultisampleRenderTarget(j),w.updateRenderTargetMipmap(j)),le&&U.end(W),R.isScene===!0&&R.onAfterRender(W,R,ee),Fe.resetDefaultState(),te=-1,X=null,A.pop(),A.length>0?(L=A[A.length-1],w.setTextureUnits(L.state.textureUnits),$e===!0&&Ge.setGlobalState(W.clippingPlanes,L.state.camera)):L=null,k.pop(),k.length>0?z=k[k.length-1]:z=null,q!==null&&q.renderEnd()};function qr(R,ee,fe,le){if(R.visible===!1)return;if(R.layers.test(ee.layers)){if(R.isGroup)fe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(ee);else if(R.isLightProbeGrid)L.pushLightProbeGrid(R);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ge.intersectsSprite(R)){le&&Ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_e);const Xe=Ee.update(R),Ne=R.material;Ne.visible&&z.push(R,Xe,Ne,fe,Ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ge.intersectsObject(R))){const Xe=Ee.update(R),Ne=R.material;if(le&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ke.copy(R.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Ke.copy(Xe.boundingSphere.center)),Ke.applyMatrix4(R.matrixWorld).applyMatrix4(_e)),Array.isArray(Ne)){const nt=Xe.groups;for(let rt=0,ht=nt.length;rt<ht;rt++){const dt=nt[rt],ot=Ne[dt.materialIndex];ot&&ot.visible&&z.push(R,Xe,ot,fe,Ke.z,dt)}}else Ne.visible&&z.push(R,Xe,Ne,fe,Ke.z,null)}}const He=R.children;for(let Xe=0,Ne=He.length;Xe<Ne;Xe++)qr(He[Xe],ee,fe,le)}function ws(R,ee,fe,le){const{opaque:ae,transmissive:He,transparent:Xe}=R;L.setupLightsView(fe),$e===!0&&Ge.setGlobalState(W.clippingPlanes,fe),le&&Ce.viewport(F.copy(le)),ae.length>0&&bn(ae,ee,fe),He.length>0&&bn(He,ee,fe),Xe.length>0&&bn(Xe,ee,fe),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function cn(R,ee,fe,le){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[le.id]===void 0){const ot=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[le.id]=new Ji(1,1,{generateMipmaps:!0,type:ot?vr:yi,minFilter:vs,samples:Math.max(4,Et.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const He=L.state.transmissionRenderTarget[le.id],Xe=le.viewport||F;He.setSize(Xe.z*W.transmissionResolutionScale,Xe.w*W.transmissionResolutionScale);const Ne=W.getRenderTarget(),nt=W.getActiveCubeFace(),rt=W.getActiveMipmapLevel();W.setRenderTarget(He),W.getClearColor(D),V=W.getClearAlpha(),V<1&&W.setClearColor(16777215,.5),W.clear(),Je&&Ie.render(fe);const ht=W.toneMapping;W.toneMapping=Yi;const dt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),L.setupLightsView(le),$e===!0&&Ge.setGlobalState(W.clippingPlanes,le),bn(R,fe,le),w.updateMultisampleRenderTarget(He),w.updateRenderTargetMipmap(He),it.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ct=0,Bt=ee.length;Ct<Bt;Ct++){const Wt=ee[Ct],{object:zt,geometry:Jt,material:Ze,group:on}=Wt;if(Ze.side===Fi&&zt.layers.test(le.layers)){const St=Ze.side;Ze.side=ei,Ze.needsUpdate=!0,Bn(zt,fe,le,Jt,Ze,on),Ze.side=St,Ze.needsUpdate=!0,ot=!0}}ot===!0&&(w.updateMultisampleRenderTarget(He),w.updateRenderTargetMipmap(He))}W.setRenderTarget(Ne,nt,rt),W.setClearColor(D,V),dt!==void 0&&(le.viewport=dt),W.toneMapping=ht}function bn(R,ee,fe){const le=ee.isScene===!0?ee.overrideMaterial:null;for(let ae=0,He=R.length;ae<He;ae++){const Xe=R[ae],{object:Ne,geometry:nt,group:rt}=Xe;let ht=Xe.material;ht.allowOverride===!0&&le!==null&&(ht=le),Ne.layers.test(fe.layers)&&Bn(Ne,ee,fe,nt,ht,rt)}}function Bn(R,ee,fe,le,ae,He){R.onBeforeRender(W,ee,fe,le,ae,He),R.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ae.onBeforeRender(W,ee,fe,le,R,He),ae.transparent===!0&&ae.side===Fi&&ae.forceSinglePass===!1?(ae.side=ei,ae.needsUpdate=!0,W.renderBufferDirect(fe,ee,le,ae,R,He),ae.side=Kr,ae.needsUpdate=!0,W.renderBufferDirect(fe,ee,le,ae,R,He),ae.side=Fi):W.renderBufferDirect(fe,ee,le,ae,R,He),R.onAfterRender(W,ee,fe,le,ae,He)}function Rn(R,ee,fe){ee.isScene!==!0&&(ee=We);const le=I.get(R),ae=L.state.lights,He=L.state.shadowsArray,Xe=ae.state.version,Ne=Te.getParameters(R,ae.state,He,ee,fe,L.state.lightProbeGridArray),nt=Te.getProgramCacheKey(Ne);let rt=le.programs;le.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?ee.environment:null,le.fog=ee.fog;const ht=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;le.envMap=ne.get(R.envMap||le.environment,ht),le.envMapRotation=le.environment!==null&&R.envMap===null?ee.environmentRotation:R.envMapRotation,rt===void 0&&(R.addEventListener("dispose",xt),rt=new Map,le.programs=rt);let dt=rt.get(nt);if(dt!==void 0){if(le.currentProgram===dt&&le.lightsStateVersion===Xe)return Hn(R,Ne),dt}else Ne.uniforms=Te.getUniforms(R),q!==null&&R.isNodeMaterial&&q.build(R,fe,Ne),R.onBeforeCompile(Ne,W),dt=Te.acquireProgram(Ne,nt),rt.set(nt,dt),le.uniforms=Ne.uniforms;const ot=le.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ot.clippingPlanes=Ge.uniform),Hn(R,Ne),le.needsLights=fi(R),le.lightsStateVersion=Xe,le.needsLights&&(ot.ambientLightColor.value=ae.state.ambient,ot.lightProbe.value=ae.state.probe,ot.directionalLights.value=ae.state.directional,ot.directionalLightShadows.value=ae.state.directionalShadow,ot.spotLights.value=ae.state.spot,ot.spotLightShadows.value=ae.state.spotShadow,ot.rectAreaLights.value=ae.state.rectArea,ot.ltc_1.value=ae.state.rectAreaLTC1,ot.ltc_2.value=ae.state.rectAreaLTC2,ot.pointLights.value=ae.state.point,ot.pointLightShadows.value=ae.state.pointShadow,ot.hemisphereLights.value=ae.state.hemi,ot.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,ot.spotLightMatrix.value=ae.state.spotLightMatrix,ot.spotLightMap.value=ae.state.spotLightMap,ot.pointShadowMatrix.value=ae.state.pointShadowMatrix),le.lightProbeGrid=L.state.lightProbeGridArray.length>0,le.currentProgram=dt,le.uniformsList=null,dt}function zn(R){if(R.uniformsList===null){const ee=R.currentProgram.getUniforms();R.uniformsList=rc.seqWithValue(ee.seq,R.uniforms)}return R.uniformsList}function Hn(R,ee){const fe=I.get(R);fe.outputColorSpace=ee.outputColorSpace,fe.batching=ee.batching,fe.batchingColor=ee.batchingColor,fe.instancing=ee.instancing,fe.instancingColor=ee.instancingColor,fe.instancingMorph=ee.instancingMorph,fe.skinning=ee.skinning,fe.morphTargets=ee.morphTargets,fe.morphNormals=ee.morphNormals,fe.morphColors=ee.morphColors,fe.morphTargetsCount=ee.morphTargetsCount,fe.numClippingPlanes=ee.numClippingPlanes,fe.numIntersection=ee.numClipIntersection,fe.vertexAlphas=ee.vertexAlphas,fe.vertexTangents=ee.vertexTangents,fe.toneMapping=ee.toneMapping}function Yr(R,ee){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;b.setFromMatrixPosition(ee.matrixWorld);for(let fe=0,le=R.length;fe<le;fe++){const ae=R[fe];if(ae.texture!==null&&ae.boundingBox.containsPoint(b))return ae}return null}function Qr(R,ee,fe,le,ae){ee.isScene!==!0&&(ee=We),w.resetTextureUnits();const He=ee.fog,Xe=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?ee.environment:null,Ne=j===null?W.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Dt.workingColorSpace,nt=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,rt=ne.get(le.envMap||Xe,nt),ht=le.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,dt=!!fe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),ot=!!fe.morphAttributes.position,Ct=!!fe.morphAttributes.normal,Bt=!!fe.morphAttributes.color;let Wt=Yi;le.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Wt=W.toneMapping);const zt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Jt=zt!==void 0?zt.length:0,Ze=I.get(le),on=L.state.lights;if($e===!0&&(ie===!0||R!==X)){const Vt=R===X&&le.id===te;Ge.setState(le,R,Vt)}let St=!1;le.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==on.state.version||Ze.outputColorSpace!==Ne||ae.isBatchedMesh&&Ze.batching===!1||!ae.isBatchedMesh&&Ze.batching===!0||ae.isBatchedMesh&&Ze.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&Ze.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&Ze.instancing===!1||!ae.isInstancedMesh&&Ze.instancing===!0||ae.isSkinnedMesh&&Ze.skinning===!1||!ae.isSkinnedMesh&&Ze.skinning===!0||ae.isInstancedMesh&&Ze.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ze.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ze.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ze.instancingMorph===!1&&ae.morphTexture!==null||Ze.envMap!==rt||le.fog===!0&&Ze.fog!==He||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ge.numPlanes||Ze.numIntersection!==Ge.numIntersection)||Ze.vertexAlphas!==ht||Ze.vertexTangents!==dt||Ze.morphTargets!==ot||Ze.morphNormals!==Ct||Ze.morphColors!==Bt||Ze.toneMapping!==Wt||Ze.morphTargetsCount!==Jt||!!Ze.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,Ze.__version=le.version);let vn=Ze.currentProgram;St===!0&&(vn=Rn(le,ee,ae),q&&le.isNodeMaterial&&q.onUpdateProgram(le,vn,Ze));let An=!1,Mt=!1,ni=!1;const Ht=vn.getUniforms(),Kt=Ze.uniforms;if(Ce.useProgram(vn.program)&&(An=!0,Mt=!0,ni=!0),le.id!==te&&(te=le.id,Mt=!0),Ze.needsLights){const Vt=Yr(L.state.lightProbeGridArray,ae);Ze.lightProbeGrid!==Vt&&(Ze.lightProbeGrid=Vt,Mt=!0)}if(An||X!==R){Ce.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ht.setValue(O,"projectionMatrix",R.projectionMatrix),Ht.setValue(O,"viewMatrix",R.matrixWorldInverse);const wi=Ht.map.cameraPosition;wi!==void 0&&wi.setValue(O,je.setFromMatrixPosition(R.matrixWorld)),Et.logarithmicDepthBuffer&&Ht.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Ht.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),X!==R&&(X=R,Mt=!0,ni=!0)}if(Ze.needsLights&&(on.state.directionalShadowMap.length>0&&Ht.setValue(O,"directionalShadowMap",on.state.directionalShadowMap,w),on.state.spotShadowMap.length>0&&Ht.setValue(O,"spotShadowMap",on.state.spotShadowMap,w),on.state.pointShadowMap.length>0&&Ht.setValue(O,"pointShadowMap",on.state.pointShadowMap,w)),ae.isSkinnedMesh){Ht.setOptional(O,ae,"bindMatrix"),Ht.setOptional(O,ae,"bindMatrixInverse");const Vt=ae.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Ht.setValue(O,"boneTexture",Vt.boneTexture,w))}ae.isBatchedMesh&&(Ht.setOptional(O,ae,"batchingTexture"),Ht.setValue(O,"batchingTexture",ae._matricesTexture,w),Ht.setOptional(O,ae,"batchingIdTexture"),Ht.setValue(O,"batchingIdTexture",ae._indirectTexture,w),Ht.setOptional(O,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Ht.setValue(O,"batchingColorTexture",ae._colorsTexture,w));const Ei=fe.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&ut.update(ae,fe,vn),(Mt||Ze.receiveShadow!==ae.receiveShadow)&&(Ze.receiveShadow=ae.receiveShadow,Ht.setValue(O,"receiveShadow",ae.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&ee.environment!==null&&(Kt.envMapIntensity.value=ee.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=VE()),Mt){if(Ht.setValue(O,"toneMappingExposure",W.toneMappingExposure),Ze.needsLights&&ui(Kt,ni),He&&le.fog===!0&&de.refreshFogUniforms(Kt,He),de.refreshMaterialUniforms(Kt,le,Me,Ae,L.state.transmissionRenderTarget[R.id]),Ze.needsLights&&Ze.lightProbeGrid){const Vt=Ze.lightProbeGrid;Kt.probesSH.value=Vt.texture,Kt.probesMin.value.copy(Vt.boundingBox.min),Kt.probesMax.value.copy(Vt.boundingBox.max),Kt.probesResolution.value.copy(Vt.resolution)}rc.upload(O,zn(Ze),Kt,w)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(rc.upload(O,zn(Ze),Kt,w),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Ht.setValue(O,"center",ae.center),Ht.setValue(O,"modelViewMatrix",ae.modelViewMatrix),Ht.setValue(O,"normalMatrix",ae.normalMatrix),Ht.setValue(O,"modelMatrix",ae.matrixWorld),le.uniformsGroups!==void 0){const Vt=le.uniformsGroups;for(let wi=0,zi=Vt.length;wi<zi;wi++){const Jr=Vt[wi];ye.update(Jr,vn),ye.bind(Jr,vn)}}return vn}function ui(R,ee){R.ambientLightColor.needsUpdate=ee,R.lightProbe.needsUpdate=ee,R.directionalLights.needsUpdate=ee,R.directionalLightShadows.needsUpdate=ee,R.pointLights.needsUpdate=ee,R.pointLightShadows.needsUpdate=ee,R.spotLights.needsUpdate=ee,R.spotLightShadows.needsUpdate=ee,R.rectAreaLights.needsUpdate=ee,R.hemisphereLights.needsUpdate=ee}function fi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,ee,fe){const le=I.get(R);le.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),I.get(R.texture).__webglTexture=ee,I.get(R.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:fe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,ee){const fe=I.get(R);fe.__webglFramebuffer=ee,fe.__useDefaultFramebuffer=ee===void 0};const jt=O.createFramebuffer();this.setRenderTarget=function(R,ee=0,fe=0){j=R,ce=ee,ue=fe;let le=null,ae=!1,He=!1;if(R){const Ne=I.get(R);if(Ne.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(O.FRAMEBUFFER,Ne.__webglFramebuffer),F.copy(R.viewport),N.copy(R.scissor),Y=R.scissorTest,Ce.viewport(F),Ce.scissor(N),Ce.setScissorTest(Y),te=-1;return}else if(Ne.__webglFramebuffer===void 0)w.setupRenderTarget(R);else if(Ne.__hasExternalTextures)w.rebindTextures(R,I.get(R.texture).__webglTexture,I.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ht=R.depthTexture;if(Ne.__boundDepthTexture!==ht){if(ht!==null&&I.has(ht)&&(R.width!==ht.image.width||R.height!==ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(R)}}const nt=R.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(He=!0);const rt=I.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(rt[ee])?le=rt[ee][fe]:le=rt[ee],ae=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?le=I.get(R).__webglMultisampledFramebuffer:Array.isArray(rt)?le=rt[fe]:le=rt,F.copy(R.viewport),N.copy(R.scissor),Y=R.scissorTest}else F.copy(se).multiplyScalar(Me).floor(),N.copy(Pe).multiplyScalar(Me).floor(),Y=Ue;if(fe!==0&&(le=jt),Ce.bindFramebuffer(O.FRAMEBUFFER,le)&&Ce.drawBuffers(R,le),Ce.viewport(F),Ce.scissor(N),Ce.setScissorTest(Y),ae){const Ne=I.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ne.__webglTexture,fe)}else if(He){const Ne=ee;for(let nt=0;nt<R.textures.length;nt++){const rt=I.get(R.textures[nt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+nt,rt.__webglTexture,fe,Ne)}}else if(R!==null&&fe!==0){const Ne=I.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ne.__webglTexture,fe)}te=-1},this.readRenderTargetPixels=function(R,ee,fe,le,ae,He,Xe,Ne=0){if(!(R&&R.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=I.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&(nt=nt[Xe]),nt){Ce.bindFramebuffer(O.FRAMEBUFFER,nt);try{const rt=R.textures[Ne],ht=rt.format,dt=rt.type;if(R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ne),!Et.textureFormatReadable(ht)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(dt)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=R.width-le&&fe>=0&&fe<=R.height-ae&&O.readPixels(ee,fe,le,ae,Q.convert(ht),Q.convert(dt),He)}finally{const rt=j!==null?I.get(j).__webglFramebuffer:null;Ce.bindFramebuffer(O.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(R,ee,fe,le,ae,He,Xe,Ne=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let nt=I.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&(nt=nt[Xe]),nt)if(ee>=0&&ee<=R.width-le&&fe>=0&&fe<=R.height-ae){Ce.bindFramebuffer(O.FRAMEBUFFER,nt);const rt=R.textures[Ne],ht=rt.format,dt=rt.type;if(R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ne),!Et.textureFormatReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ot),O.bufferData(O.PIXEL_PACK_BUFFER,He.byteLength,O.STREAM_READ),O.readPixels(ee,fe,le,ae,Q.convert(ht),Q.convert(dt),0);const Ct=j!==null?I.get(j).__webglFramebuffer:null;Ce.bindFramebuffer(O.FRAMEBUFFER,Ct);const Bt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Y_(O,Bt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ot),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,He),O.deleteBuffer(ot),O.deleteSync(Bt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,ee=null,fe=0){const le=Math.pow(2,-fe),ae=Math.floor(R.image.width*le),He=Math.floor(R.image.height*le),Xe=ee!==null?ee.x:0,Ne=ee!==null?ee.y:0;w.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,fe,0,0,Xe,Ne,ae,He),Ce.unbindTexture()};const Ao=O.createFramebuffer(),sn=O.createFramebuffer();this.copyTextureToTexture=function(R,ee,fe=null,le=null,ae=0,He=0){let Xe,Ne,nt,rt,ht,dt,ot,Ct,Bt;const Wt=R.isCompressedTexture?R.mipmaps[He]:R.image;if(fe!==null)Xe=fe.max.x-fe.min.x,Ne=fe.max.y-fe.min.y,nt=fe.isBox3?fe.max.z-fe.min.z:1,rt=fe.min.x,ht=fe.min.y,dt=fe.isBox3?fe.min.z:0;else{const Kt=Math.pow(2,-ae);Xe=Math.floor(Wt.width*Kt),Ne=Math.floor(Wt.height*Kt),R.isDataArrayTexture?nt=Wt.depth:R.isData3DTexture?nt=Math.floor(Wt.depth*Kt):nt=1,rt=0,ht=0,dt=0}le!==null?(ot=le.x,Ct=le.y,Bt=le.z):(ot=0,Ct=0,Bt=0);const zt=Q.convert(ee.format),Jt=Q.convert(ee.type);let Ze;ee.isData3DTexture?(w.setTexture3D(ee,0),Ze=O.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(w.setTexture2DArray(ee,0),Ze=O.TEXTURE_2D_ARRAY):(w.setTexture2D(ee,0),Ze=O.TEXTURE_2D),Ce.activeTexture(O.TEXTURE0),Ce.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,ee.flipY),Ce.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),Ce.pixelStorei(O.UNPACK_ALIGNMENT,ee.unpackAlignment);const on=Ce.getParameter(O.UNPACK_ROW_LENGTH),St=Ce.getParameter(O.UNPACK_IMAGE_HEIGHT),vn=Ce.getParameter(O.UNPACK_SKIP_PIXELS),An=Ce.getParameter(O.UNPACK_SKIP_ROWS),Mt=Ce.getParameter(O.UNPACK_SKIP_IMAGES);Ce.pixelStorei(O.UNPACK_ROW_LENGTH,Wt.width),Ce.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Wt.height),Ce.pixelStorei(O.UNPACK_SKIP_PIXELS,rt),Ce.pixelStorei(O.UNPACK_SKIP_ROWS,ht),Ce.pixelStorei(O.UNPACK_SKIP_IMAGES,dt);const ni=R.isDataArrayTexture||R.isData3DTexture,Ht=ee.isDataArrayTexture||ee.isData3DTexture;if(R.isDepthTexture){const Kt=I.get(R),Ei=I.get(ee),Vt=I.get(Kt.__renderTarget),wi=I.get(Ei.__renderTarget);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let zi=0;zi<nt;zi++)ni&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,I.get(R).__webglTexture,ae,dt+zi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,I.get(ee).__webglTexture,He,Bt+zi)),O.blitFramebuffer(rt,ht,Xe,Ne,ot,Ct,Xe,Ne,O.DEPTH_BUFFER_BIT,O.NEAREST);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(ae!==0||R.isRenderTargetTexture||I.has(R)){const Kt=I.get(R),Ei=I.get(ee);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,Ao),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,sn);for(let Vt=0;Vt<nt;Vt++)ni?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Kt.__webglTexture,ae,dt+Vt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Kt.__webglTexture,ae),Ht?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ei.__webglTexture,He,Bt+Vt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ei.__webglTexture,He),ae!==0?O.blitFramebuffer(rt,ht,Xe,Ne,ot,Ct,Xe,Ne,O.COLOR_BUFFER_BIT,O.NEAREST):Ht?O.copyTexSubImage3D(Ze,He,ot,Ct,Bt+Vt,rt,ht,Xe,Ne):O.copyTexSubImage2D(Ze,He,ot,Ct,rt,ht,Xe,Ne);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ht?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Ze,He,ot,Ct,Bt,Xe,Ne,nt,zt,Jt,Wt.data):ee.isCompressedArrayTexture?O.compressedTexSubImage3D(Ze,He,ot,Ct,Bt,Xe,Ne,nt,zt,Wt.data):O.texSubImage3D(Ze,He,ot,Ct,Bt,Xe,Ne,nt,zt,Jt,Wt):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,He,ot,Ct,Xe,Ne,zt,Jt,Wt.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,He,ot,Ct,Wt.width,Wt.height,zt,Wt.data):O.texSubImage2D(O.TEXTURE_2D,He,ot,Ct,Xe,Ne,zt,Jt,Wt);Ce.pixelStorei(O.UNPACK_ROW_LENGTH,on),Ce.pixelStorei(O.UNPACK_IMAGE_HEIGHT,St),Ce.pixelStorei(O.UNPACK_SKIP_PIXELS,vn),Ce.pixelStorei(O.UNPACK_SKIP_ROWS,An),Ce.pixelStorei(O.UNPACK_SKIP_IMAGES,Mt),He===0&&ee.generateMipmaps&&O.generateMipmap(Ze),Ce.unbindTexture()},this.initRenderTarget=function(R){I.get(R).__webglFramebuffer===void 0&&w.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),Ce.unbindTexture()},this.resetState=function(){ce=0,ue=0,j=null,Ce.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dt._getUnpackColorSpace()}}function ca(s,e,t){const r=e/100,o=t/100,l=(1-Math.abs(2*o-1))*r,c=l*(1-Math.abs(s/60%2-1)),f=o-l/2;let d=0,h=0,g=0;s<60?[d,h,g]=[l,c,0]:s<120?[d,h,g]=[c,l,0]:s<180?[d,h,g]=[0,l,c]:s<240?[d,h,g]=[0,c,l]:s<300?[d,h,g]=[c,0,l]:[d,h,g]=[l,0,c];const x=m=>Math.round((m+f)*255).toString(16).padStart(2,"0");return`#${x(d)}${x(h)}${x(g)}`}function Wr(s,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[ca(s,e,50),"#FFFFFF",ca(s,e*.6,70),ca(s,e*.8,35)];const r=ca(s,e,50),o=ca((s+180)%360,e,50);return[r,o,r,o]}const Q0=[1],ma=[0];let mv=0;const GE=new Set;function WE(s,e){for(let t=0;t<e.length;t++){const r=e[t]??1;Q0[t]=r,ma[t]=(ma[t]??0)+s*r}for(const t of GE)ma[t]=(ma[t]??0)+s*(Q0[t]??1)}function XE(s){mv=s}function jE(){return ma[mv]??0}const sc=12,Fn=Math.PI*2;function gv(s,e){if(e<=0)return 0;const t=Math.min(2.2,10/e);return Math.min(e,1+Math.floor(s/t))}const Ql=[[[0,"#5ea733"],[.1,"#a9c97a"],[.17,"#efe6c6"],[.26,"#f2b2c5"],[.36,"#df4a67"],[.45,"#b81f3d"],[.53,"#1a0d33"],[.61,"#2e44d8"],[.7,"#5f78f0"],[.79,"#dfe4f4"],[.87,"#eee6c4"],[.94,"#9cc46c"],[1,"#5ea733"]],[[0,"#e0a82e"],[.1,"#f0cd7a"],[.17,"#f6ead0"],[.26,"#f6b49a"],[.36,"#e8573a"],[.45,"#b52a1c"],[.53,"#2a0a0c"],[.61,"#a8401c"],[.7,"#e8823e"],[.79,"#f7dcc4"],[.87,"#f4e8c8"],[.94,"#e9c060"],[1,"#e0a82e"]],[[0,"#1f9a8a"],[.1,"#86d1bf"],[.17,"#eaf2e2"],[.26,"#9fe3e8"],[.36,"#25b5d4"],[.45,"#13708f"],[.53,"#0b1430"],[.61,"#5a35c8"],[.7,"#9a7cf0"],[.79,"#e6e0f6"],[.87,"#e4f2ea"],[.94,"#5cc2a6"],[1,"#1f9a8a"]],[[0,"#2b3f8f"],[.1,"#7d8fd0"],[.17,"#eef0f6"],[.26,"#c9d0ea"],[.36,"#5266b8"],[.45,"#22307a"],[.53,"#070a1c"],[.61,"#26357e"],[.7,"#6a7cc6"],[.79,"#e8ebf5"],[.87,"#f4f3ee"],[.94,"#8a9ad6"],[1,"#2b3f8f"]]],KE=["Inflated","Paper","Line","Print"],qE=`
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
}`,YE=`
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
}`,QE=0,JE=1,ZE=2;function Ac(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(m=>m+m).join(""):e,r=(parseInt(t.slice(0,2),16)||0)/255,o=(parseInt(t.slice(2,4),16)||0)/255,l=(parseInt(t.slice(4,6),16)||0)/255,c=Math.max(r,o,l),f=Math.min(r,o,l),d=(c+f)/2;if(c===f)return[0,0,d];const h=c-f,g=d>.5?h/(2-c-f):h/(c+f);let x;return c===r?x=((o-l)/h+(o<l?6:0))*60:c===o?x=((l-r)/h+2)*60:x=((r-o)/h+4)*60,[x,g,d]}function vv(s,e,t){return`hsl(${(s%360+360)%360} ${Math.max(0,Math.min(1,e))*100}% ${t*100}%)`}const J0=Ac(Wr(245,100,"contrast")[0]);function xv(s){const[e,t]=Ac(s[0]??"#000000");return t===0?{hue:0,sat:0}:{hue:e-J0[0],sat:t/(J0[1]||1)}}function Z0(s,e){const t=document.createElement("canvas");t.width=512,t.height=1;const r=t.getContext("2d"),o=r.createLinearGradient(0,0,512,0);for(const[c,f]of s){const[d,h,g]=Ac(f);o.addColorStop(c,vv(d+e.hue,h*e.sat,g))}r.fillStyle=o,r.fillRect(0,0,512,1);const l=new Ny(t);return l.wrapS=ac,l.magFilter=Sn,l.minFilter=Sn,l.generateMipmaps=!1,l}class _v{constructor(){G(this,"textures");G(this,"turnKey","#reference");G(this,"palFrom",0);G(this,"palTo",0);G(this,"palMix",1);G(this,"styleUniform",{value:0});G(this,"turn",{hue:0,sat:1});this.textures=Ql.map(e=>Z0(e,{hue:0,sat:1}))}shared(){return{uPalA:{value:this.textures[0]},uPalB:{value:this.textures[0]},uPalMix:{value:0},uT:{value:0},uOff:{value:0},uWA:{value:0},uWB:{value:0},uWC:{value:0},uDepth:{value:.32},uSpec:{value:.16},uCenter:{value:new Z}}}material(e,t,r={}){return new ci({vertexShader:qE,fragmentShader:YE,side:Fi,uniforms:{...t,uStyle:this.styleUniform,uMode:{value:e},uAng:{value:0},uWS:{value:1},...r}})}update(e,t,r,o,l=0){this.styleUniform.value=Math.max(0,Math.min(KE.length-1,Math.round(l)));const c=e[0]??"";if(c!==this.turnKey){this.turnKey=c;const d=xv(e);this.turn=d;const h=this.textures;this.textures=Ql.map(g=>Z0(g,d));for(const g of h)g.dispose()}const f=Math.max(0,Math.min(Ql.length-1,Math.round(t)));o&&(this.palFrom=this.palTo=f,this.palMix=1),f!==this.palTo&&(this.palFrom=this.palMix<.5?this.palFrom:this.palTo,this.palTo=f,this.palMix=0),this.palMix=Math.min(1,this.palMix+r)}apply(e,t,r){e.uPalA.value=this.textures[this.palFrom],e.uPalB.value=this.textures[this.palTo],e.uPalMix.value=this.palMix,e.uDepth.value=t,e.uSpec.value=r}backdrop(e,t,r,o){const l=this.styleUniform.value;if(l===0){Mv(e,t,r,o);return}const c=Math.max(0,Math.min(1,o));if(e.globalCompositeOperation="source-over",e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,t,r),l===2||c<=0)return;const f=Ql[this.palTo],d=f.find(([m])=>m===(l===1?.53:.17))??f[0],[h,g,x]=Ac(d[1]);e.globalAlpha=c,e.fillStyle=vv(h+this.turn.hue,g*this.turn.sat,l===1?x*1.25:x),e.fillRect(0,0,t,r),e.globalAlpha=1}dispose(){for(const e of this.textures)e.dispose();this.textures=[]}}function yv(s,e,t){const r=e/t,o=30,l=Math.tan(o/2*Math.PI/180),c=r<16/9?2*Math.atan(l*(16/9)/r)*180/Math.PI:o;(s.aspect!==r||s.fov!==c)&&(s.aspect=r,s.fov=c,s.updateProjectionMatrix())}function Mv(s,e,t,r){const o=Math.max(0,Math.min(1,r)),l=c=>{const f=parseInt(c.slice(1),16),d=Math.round((f>>16&255)*o),h=Math.round((f>>8&255)*o),g=Math.round((f&255)*o);return`rgb(${d},${h},${g})`};if(s.globalCompositeOperation="source-over",s.globalAlpha=1,o<=0)s.fillStyle="#000";else{const c=s.createLinearGradient(0,0,0,t);c.addColorStop(0,l("#8e94a2")),c.addColorStop(.2,l("#bfc3d0")),c.addColorStop(.42,l("#dde1ec")),c.addColorStop(.68,l("#d9dde9")),c.addColorStop(1,l("#9ea2af")),s.fillStyle=c}s.fillRect(0,0,e,t)}function od(s){const e=new pv({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"});return e.setPixelRatio(1),e.setClearColor(0,0),e}function ad(s,e,t,r){s.fillStyle="#000",s.fillRect(0,0,e,t),s.fillStyle="rgba(255,255,255,0.4)",s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText(`${r} NEEDS WEBGL`,e/2,t/2)}class Es{constructor(e){G(this,"dt",1/60);G(this,"step",0);G(this,"openness");G(this,"aim",{x:0,y:0});G(this,"spread",.4);G(this,"depth",.35);G(this,"turn",0);G(this,"pinch",0);G(this,"fist",0);G(this,"clapped",!1);G(this,"clapStrength",0);G(this,"wasClapping",!1);G(this,"burst",0);G(this,"bump",0);G(this,"bass",0);G(this,"mid",0);G(this,"high",0);G(this,"kick",0);G(this,"snare",0);G(this,"hat",0);G(this,"energy",.5);G(this,"build",0);G(this,"drop",0);G(this,"bright",.5);G(this,"lastClock",null);G(this,"lastFrame",0);this.rest=e,this.openness=e}read(e,t){const r=performance.now(),o=this.lastFrame?Math.min(.1,(r-this.lastFrame)/1e3):1/60;this.lastFrame=r;const l=jE();this.step=this.lastClock===null?0:Math.max(-.2,Math.min(.2,l-this.lastClock)),this.lastClock=l,this.dt=o;const c=[e.left,e.right].filter(Boolean);let f=this.rest;if(c.length){const E=Math.max(...c.map(P=>P.gesture==="fist"?0:P.fingerCount??3));f=Math.max(0,Math.min(1,E/5))}this.openness+=(f-this.openness)*(1-Math.exp(-o*5));let d=0,h=0;c.length&&(d=(c.reduce((E,P)=>E+P.position.x,0)/c.length-.5)*2,h=(.5-c.reduce((E,P)=>E+P.position.y,0)/c.length)*2);const g=1-Math.exp(-o*4);this.aim.x+=(d-this.aim.x)*g,this.aim.y+=(h-this.aim.y)*g,this.spread+=((e.distanceBetweenHands??.4)-this.spread)*g;const x=c.map(E=>E.depth).filter(E=>E!==void 0);this.depth+=((x.length?Math.max(...x):.35)-this.depth)*g;const m=e.twist??(c.length===1?c[0].angle??0:0);this.turn+=(m-this.turn)*g;const _=c.length?Math.max(...c.map(E=>E.pinch??0)):0;this.pinch+=(_-this.pinch)*(1-Math.exp(-o*10));const S=c.length?Math.max(...c.map(E=>E.openness!==void 0?1-E.openness:E.gesture==="fist"?1:0)):0;this.fist+=(Math.min(1,Math.max(0,(S-.35)/.4))-this.fist)*(1-Math.exp(-o*8));const T=!!e.clapping&&!e.synthetic;this.clapped=T&&!this.wasClapping,this.clapStrength=this.clapped?Math.max(.6,e.clapIntensity??1):0,this.wasClapping=T;const y=e.clapping?e.clapIntensity??1:0;this.burst=Math.max(this.burst*Math.exp(-o*2.2),y);const M=(E,P,b,z)=>E+(P-E)*(1-Math.exp(-o*(P>E?b:z)));this.bass=M(this.bass,(t==null?void 0:t.bass)??0,6,1.5),this.mid=M(this.mid,(t==null?void 0:t.mid)??0,4,1),this.high=M(this.high,(t==null?void 0:t.high)??0,8,2.5),this.bump*=Math.exp(-o/.07),t!=null&&t.beat&&(this.bump=Math.max(this.bump,t.beatIntensity||1)),this.kick=(t==null?void 0:t.kick)??0,this.bump=Math.max(this.bump,this.kick*.9),this.snare=(t==null?void 0:t.snare)??0,this.hat=(t==null?void 0:t.hat)??0,this.energy=M(this.energy,t!=null&&t.live?t.energy??.5:.5,1,1),this.build=(t==null?void 0:t.build)??0,this.drop=(t==null?void 0:t.drop)??0,this.bright=M(this.bright,(t==null?void 0:t.bright)??.5,1,1)}}class $E{constructor(e,t){G(this,"canvas");G(this,"ctx");G(this,"cfg",Hm);G(this,"playing",new Es(.6));G(this,"n",0);G(this,"x",new Float32Array(0));G(this,"y",new Float32Array(0));G(this,"z",new Float32Array(0));G(this,"vx",new Float32Array(0));G(this,"vy",new Float32Array(0));G(this,"light",new Float32Array(0));G(this,"phase",new Float32Array(0));G(this,"time",0);G(this,"events",[]);G(this,"lastKick",0);G(this,"lastSnare",0);G(this,"lastHat",0);G(this,"kicks",0);G(this,"flow",[Math.random()*10,Math.random()*10,Math.random()*10]);G(this,"flowTo",[...this.flow]);G(this,"gather",0);G(this,"breath",0);G(this,"grain",document.createElement("canvas"));G(this,"aspect",16/9);this.canvas=e,this.ctx=t,this.grain.width=this.grain.height=256;const r=this.grain.getContext("2d"),o=r.createImageData(256,256);for(let l=0;l<o.data.length;l+=4){const c=Math.random()<.5?0:255;o.data[l]=o.data[l+1]=o.data[l+2]=c,o.data[l+3]=Math.random()<.35?255:0}r.putImageData(o,0,0)}setParams(e){this.cfg=Ss(Hm,e)}resize(e){const t=Math.min(this.n,e),r=o=>{const l=new Float32Array(e);return l.set(o.subarray(0,t)),l};this.x=r(this.x),this.y=r(this.y),this.z=r(this.z),this.vx=r(this.vx),this.vy=r(this.vy),this.light=r(this.light),this.phase=r(this.phase);for(let o=t;o<e;o++)this.x[o]=Math.random()*this.aspect,this.y[o]=Math.random(),this.z[o]=.25+.75*Math.pow(Math.random(),2.2),this.phase[o]=Math.random()*Math.PI*2,this.light[o]=0;this.n=e}angleAt(e,t,r){const[o,l,c]=this.flow;return Math.sin(e*1.3+o+r*.05)*1.7+Math.cos(t*1.7-l+r*.04)*1.5+Math.sin((e+t)*.8+c)*1.2}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;this.aspect=f/d;const h=this.aspect,g=this.playing;g.read(e,r);const x=Math.min(.1,g.dt),m=Math.min(.08,Math.max(0,g.step));this.time+=m;const _=Math.max(50,Math.min(6e3,Math.round(c.field.count)));_!==this.n&&this.resize(_);const S=!!(r!=null&&r.live),T=N=>1-Math.exp(-x*N),y=Math.max(g.kick,g.bump)*c.sound.beat;if(y>.45&&this.lastKick<=.45){this.kicks+=1;const N=Math.random(),Y=(.5+.6*Math.random())*Math.min(1.4,y),D=N<.5?0:N<.82?1:2;this.events.push({kind:D,x:Math.random()*h,y:.1+.8*Math.random(),age:0,strength:Y,angle:Math.random()*Math.PI,reach:.2+.5*Math.random()}),this.kicks%(6+Math.floor(Math.random()*6))===0&&(this.flowTo=this.flowTo.map(V=>V+(Math.random()-.5)*4))}this.lastKick=y;const M=(N,Y)=>{for(let D=0;D<N;D++){const V=Math.floor(Math.random()*this.n);this.light[V]=Math.max(this.light[V],Y)}},E=g.snare*c.sound.sparks;E>.5&&this.lastSnare<=.5&&M(Math.round(this.n*.012),1.1),this.lastSnare=E;const P=g.hat*c.sound.sparks;if(P>.5&&this.lastHat<=.5&&M(Math.round(this.n*.004),.7),this.lastHat=P,!S&&Math.random()<x*.35&&this.events.push({kind:0,x:Math.random()*h,y:Math.random(),age:0,strength:.45,angle:0,reach:.4}),g.clapped&&c.hands.clap>0)for(let N=0;N<this.n;N++){this.light[N]=Math.max(this.light[N],1.2*c.hands.clap);const Y=this.x[N]-h/2,D=this.y[N]-.5,V=Math.hypot(Y,D)+.05;this.vx[N]+=Y/V*.25*c.hands.clap,this.vy[N]+=D/V*.25*c.hands.clap}this.breath+=(g.bass*c.sound.bass-this.breath)*T(4);for(let N=0;N<3;N++)this.flow[N]+=(this.flowTo[N]-this.flow[N])*T(.3);const z=!e.synthetic?[e.left,e.right].filter(N=>!!N):[],L=z.length?g.fist:0,k=Math.max(Math.min(1,c.form.circle),L*Math.min(1,c.hands.reach));this.gather+=(k-this.gather)*T(k>this.gather?.9:.6);const A=.018*c.field.drift,U=this.time,W=h/2,B=.5,q=.3,ce=U*.04,ue=Math.exp(-x*2.2);for(let N=0;N<this.n;N++){const Y=this.z[N],D=this.angleAt(this.x[N],this.y[N],U);let V=this.x[N]+(Math.cos(D)*A*Y+this.vx[N])*m,Se=this.y[N]+(Math.sin(D)*A*Y+this.vy[N])*m;V+=(V-W)*this.breath*.004*Y,Se+=(Se-B)*this.breath*.004*Y;for(const Ae of z){const Me=Ae.position.x*h,K=Ae.position.y,oe=V-Me,se=Se-K,Pe=oe*oe+se*se,Ue=Math.exp(-Pe/.02)*(1-L)*c.hands.reach;if(Ue>.01){const ge=Math.sqrt(Pe)+.01;V+=oe/ge*Ue*.006,Se+=se/ge*Ue*.006,this.light[N]=Math.max(this.light[N],Ue*.9)}}if(this.gather>.002){const Ae=this.phase[N]+ce,Me=q*(.94+.12*(N*.618%1))*(1+.06*this.breath),K=W+Math.cos(Ae)*Me,oe=B+Math.sin(Ae)*Me,se=this.gather*this.gather*T(1.6);V+=(K-V)*se,Se+=(oe-Se)*se}V<-.02?V+=h+.04:V>h+.02&&(V-=h+.04),Se<-.02?Se+=1.04:Se>1.02&&(Se-=1.04),this.x[N]=V,this.y[N]=Se,this.vx[N]*=ue,this.vy[N]*=ue,this.light[N]*=Math.exp(-x*(1.6+.8*Math.random()))}for(const N of this.events){N.age+=x;const Y=N.age*.55;for(let D=0;D<this.n;D++){const V=this.x[D]-N.x,Se=this.y[D]-N.y;let Ae=0;if(N.kind===0){const Me=Math.hypot(V,Se)-Y;Ae=Math.exp(-(Me*Me)/.0012)}else if(N.kind===1)N.age<x*1.5&&Math.hypot(V,Se)<N.reach*.6&&Math.random()<.35&&(Ae=.6+Math.random()*.6);else{const Me=Math.cos(N.angle),K=Math.sin(N.angle),oe=V*-K+Se*Me-(N.age-.6)*.08;Ae=Math.exp(-(oe*oe)/25e-5)*(Math.abs(V*Me+Se*K)<N.age*1.4?1:0)}Ae>.02&&(this.light[D]=Math.max(this.light[D],1.6*Ae*N.strength*(1-N.age/2.2)))}}this.events=this.events.filter(N=>N.age<2.2),l.globalCompositeOperation="source-over",l.globalAlpha=1-.92*Math.max(0,Math.min(1,c.look.trail)),l.fillStyle="#000",l.fillRect(0,0,f,d),l.globalAlpha=1;const j=8,te=[];for(let N=0;N<j;N++)te.push(new Path2D);const X=Math.max(.6,d/720*1.6*c.field.size),F=.2*c.look.glow;for(let N=0;N<this.n;N++){const Y=this.z[N],D=.6+.4*Math.sin(U*.7+this.phase[N]*5),V=Math.min(1,(F*D+this.light[N])*(.35+.65*Y)+.2*this.gather*Y);if(V<.03)continue;const Se=Math.min(j-1,Math.floor(V*j)),Ae=X*(.5+Y)*(1+.6*Math.min(1,this.light[N]));te[Se].rect(this.x[N]*d-Ae/2,this.y[N]*d-Ae/2,Ae,Ae)}for(let N=0;N<j;N++)l.globalAlpha=(N+.5)/j,l.fillStyle="#fff",l.fill(te[N]);if(c.look.grain>.01){l.globalCompositeOperation="lighter",l.globalAlpha=.05*c.look.grain;const N=Math.floor(Math.random()*256),Y=Math.floor(Math.random()*256),D=l.createPattern(this.grain,"repeat");D&&(l.save(),l.translate(-N,-Y),l.fillStyle=D,l.fillRect(N,Y,f,d),l.restore())}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const $0={line:{count:14,weight:1,wave:1,birth:1,zoom:1,speed:1},hands:{open:1,pull:1,clap:1},sound:{beat:1,bass:1,grow:1}},eg=110,ew=5;function tg(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class tw{constructor(e,t){G(this,"canvas");G(this,"ctx");G(this,"cfg",$0);G(this,"playing",new Es(.5));G(this,"age",0);G(this,"time",0);G(this,"unfold",0);G(this,"breath",0);G(this,"shiver",0);G(this,"pulses",[]);G(this,"lastKick",0);G(this,"hand",{x:.5,y:.5,hold:0});G(this,"idle",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ss($0,e)}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=Math.max(0,h.step);this.age+=x,this.time+=x*Math.max(0,c.line.speed),this.idle+=g;const m=N=>1-Math.exp(-g*N),_=[e.left,e.right].filter(Boolean),S=_.length>0&&!e.synthetic,T=!!(r!=null&&r.live);let y;S?y=(1-h.fist)*c.hands.open:T?y=(.12+.88*h.energy)*c.sound.grow:y=.35+.3*Math.sin(this.idle*.21),this.unfold+=(Math.min(1,Math.max(0,y))-this.unfold)*m(S?5:.8),this.breath+=(h.bass*c.sound.bass-this.breath)*m(3),h.clapped&&(this.shiver=Math.min(1.4,h.clapStrength*1.3*c.hands.clap)),this.shiver*=Math.exp(-g*2.4);const M=Math.max(h.kick,h.bump)*c.sound.beat;M>.45&&this.lastKick<=.45&&(this.pulses.push({at:0,strength:Math.min(1.2,M)}),this.pulses.length>ew&&this.pulses.shift()),this.lastKick=M;for(const N of this.pulses)N.at+=g*.75;if(this.pulses=this.pulses.filter(N=>N.at<.75),_.length){const N=_.reduce((D,V)=>D+V.position.x,0)/_.length,Y=_.reduce((D,V)=>D+V.position.y,0)/_.length;this.hand.x+=(N-this.hand.x)*m(8),this.hand.y+=(Y-this.hand.y)*m(8)}this.hand.hold+=((S?c.hands.pull:0)-this.hand.hold)*m(4);const E=c.line.birth,P=E<=0?1:Math.min(1,Math.max(0,(this.age-1.6*E)/(5*E))),b=P*P*(3-2*P),z=E<=0?0:Math.max(0,1-this.age/(2.4*E));l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,d);const L=Math.max(1,Math.round(c.line.count)),[k,A,U]=tg(t[0]??"#8899ff"),[W,B,q]=tg(t[2]??t[1]??"#ffffff"),ce=Math.max(.1,c.line.zoom),ue=d*ce,j=d/720*ce,te=ue*.74*this.unfold*(1+.12*this.breath),X=c.line.wave,F=this.time;if(l.lineCap="round",l.lineJoin="round",l.globalCompositeOperation="lighter",z>.01){const N=(3+2.5*Math.sin(this.idle*2.2))*j*(1+this.breath);l.globalAlpha=Math.min(1,z*1.4),l.fillStyle="#fff",l.beginPath(),l.arc(f/2,d/2,Math.max(1,N),0,Math.PI*2),l.fill()}if(b>.002){const N=.5-.5*b,Y=.5+.5*b;for(let D=0;D<L;D++){const V=L===1?0:D/(L-1)*2-1,Se=V*2.6*this.unfold,Ae=this.shiver*Math.sin(D*12.9898)*43758.5453,Me=(Ae-Math.floor(Ae)-.5)*this.shiver*ue*.09;l.beginPath();let K=0,oe=0;for(let _e=0;_e<=eg;_e++){const je=N+(Y-N)*(_e/eg),Ke=Math.sin(Math.PI*je);let We=d/2+V*te*.5;We+=(Math.sin(je*6.2+F*.55+Se)*.6+Math.sin(je*13.7-F*.38+Se*1.7)*.25)*ue*.035*X*Ke*(.35+.65*this.unfold+this.breath*.6),We+=Me*Ke*Math.sin(je*20+D);for(const vt of this.pulses){const O=Math.abs(je-.5)-vt.at;We-=Math.exp(-(O*O)/.0016)*vt.strength*ue*.05*(1-vt.at/.75)*(V===0?1:Math.sign(V)*-1)}if(this.hand.hold>.01){const vt=je-this.hand.x,O=Math.exp(-(vt*vt)/.022)*Math.min(1,this.hand.hold)*.85;We+=(this.hand.y*d-We)*O}const Je=je*f;_e===0?l.moveTo(Je,We):l.quadraticCurveTo(K,oe,(K+Je)/2,(oe+We)/2),K=Je,oe=We}l.lineTo(K,oe);const se=Math.abs(V)*this.unfold,Pe=Math.round(255+(k+(W-k)*(V*.5+.5)-255)*se),Ue=Math.round(255+(A+(B-A)*(V*.5+.5)-255)*se),ge=Math.round(255+(U+(q-U)*(V*.5+.5)-255)*se),$e=1/(1+(L-1)*(1-this.unfold)),ie=c.line.weight*j*(1+.35*M);l.strokeStyle=`rgb(${Pe},${Ue},${ge})`,l.globalAlpha=Math.min(1,.16*$e*2.2),l.lineWidth=7*ie,l.stroke(),l.globalAlpha=Math.min(1,.95*Math.max($e,.3+.7*this.unfold)),l.lineWidth=1.5*ie,l.stroke()}}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const ng={colour:{speed:1,offset:0,palette:0,depth:.32},field:{count:3,zoom:1,sway:1,bounce:0,drift:.2,backdrop:1},hands:{wind:1,release:1,follow:1,clap:1},sound:{wind:1,gust:1,mid:1,high:1}};function ld(s,e){s.traverse(t=>{if(t instanceof Cn||t instanceof Bh||t instanceof tv){t.geometry.dispose();const r=t.material;Array.isArray(r)?r.forEach(o=>o.dispose()):r.dispose()}}),s.clear(),e.dispose(),e.forceContextLoss()}const nw="/assets/dandelion-hJsSsoAd.bin";let ua=null;function iw(){return ua||(ua=fetch(nw).then(s=>{if(!s.ok)throw new Error(`dandelion.bin: ${s.status}`);return s.arrayBuffer()}).then(rw),ua.catch(()=>{ua=null})),ua}function rw(s){const e=new DataView(s);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="DNDL")throw new Error("Not a dandelion file");const r=e.getUint32(4,!0),o=JSON.parse(new TextDecoder().decode(new Uint8Array(s,8,r))),l=8+r,c=(K,oe)=>new Float32Array(s.slice(l+K,l+K+oe*4)),f=(K,oe)=>new Int8Array(s.slice(l+K,l+K+oe)),d=(K,oe)=>new Uint8Array(s.slice(l+K,l+K+oe)),h=(K,oe)=>new Uint32Array(s.slice(l+K,l+K+oe*4)),g=K=>{const oe=o.parts[K],se=c(oe.pos,oe.count*3),Pe=f(oe.nrm,oe.count*3),Ue=new Float32Array(oe.count*3);for(let ge=0;ge<Ue.length;ge++)Ue[ge]=Pe[ge]/127;return{p:oe,position:se,normal:Ue,index:h(oe.idx,oe.index)}},x=["stem","base","bracts"].map(g);let m=0,_=0;for(const K of x)m+=K.p.count,_+=K.index.length;const S=new Float32Array(m*3),T=new Float32Array(m*3),y=new Float32Array(m),M=new Uint32Array(_);let E=0;{let K=0,oe=0;x.forEach((se,Pe)=>{S.set(se.position,K*3),T.set(se.normal,K*3),y.fill(Pe===0?0:1,K,K+se.p.count);for(let Ue=0;Ue<se.index.length;Ue++)M[oe+Ue]=se.index[Ue]+K;if(Pe===0)for(let Ue=1;Ue<se.position.length;Ue+=3)E=Math.min(E,se.position[Ue]);K+=se.p.count,oe+=se.index.length})}const P=new ln;P.setAttribute("position",new Nt(S,3)),P.setAttribute("normal",new Nt(T,3)),P.setAttribute("aRigid",new Nt(y,1)),P.setIndex(new Nt(M,1));const b=o.seeds,z=c(b.pivot,b.count*3),L=c(b.axis,b.count*3),k=g("achenes"),A=d(o.parts.achenes.seed,k.p.count),U=new Float32Array(k.p.count),W=new Float32Array(k.p.count*3);for(let K=0;K<k.p.count;K++){const oe=A[K];U[K]=oe,W[K*3]=z[oe*3],W[K*3+1]=z[oe*3+1],W[K*3+2]=z[oe*3+2]}const B=new ln;B.setAttribute("position",new Nt(k.position,3)),B.setAttribute("normal",new Nt(k.normal,3)),B.setAttribute("aSeed",new Nt(U,1)),B.setAttribute("aPivot",new Nt(W,3)),B.setIndex(new Nt(k.index,1));const q=b.segments,ce=c(b.a,q*3),ue=c(b.b,q*3),j=d(b.seed,q),te=c(b.ta,q),X=c(b.tb,q),F=new Float32Array(q*4*3),N=new Float32Array(q*4*3),Y=new Float32Array(q*4*3),D=new Float32Array(q*4*2),V=new Float32Array(q*4),Se=new Float32Array(q*4),Ae=new Uint32Array(q*6);for(let K=0;K<q;K++){const oe=j[K];for(let Pe=0;Pe<4;Pe++){const Ue=K*4+Pe;F.set(ce.subarray(K*3,K*3+3),Ue*3),N.set(ue.subarray(K*3,K*3+3),Ue*3),Y.set(z.subarray(oe*3,oe*3+3),Ue*3);const ge=Pe>>1,$e=Pe&1?1:-1;D[Ue*2]=ge,D[Ue*2+1]=$e,V[Ue]=oe,Se[Ue]=ge?X[K]:te[K]}const se=K*4;Ae.set([se,se+1,se+2,se+2,se+1,se+3],K*6)}const Me=new ln;Me.setAttribute("position",new Nt(F,3)),Me.setAttribute("aB",new Nt(N,3)),Me.setAttribute("aPivot",new Nt(Y,3)),Me.setAttribute("aCorner",new Nt(D,2)),Me.setAttribute("aSeed",new Nt(V,1)),Me.setAttribute("aT",new Nt(Se,1)),Me.setIndex(new Nt(Ae,1));for(const K of[P,B,Me])K.boundingSphere=new yo(new Z(0,-5,0),1e4);return{body:P,achenes:B,strokes:Me,seeds:b.count,pivot:z,axis:L,foot:E}}const uo=20,zf=[1.4,3.2],Hf=[2.6,4.6],Aa=`
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
`,sw=`
${Aa}
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
}`,ig=`
${Aa}
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
}`,ow=`
${Aa}
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
}`,aw=`
${Aa}
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
}`,lw=`
${Aa}
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
}`;function Vf(s,e){let t=0,r=1/e;for(;s>0;)t+=s%e*r,s=Math.floor(s/e),r/=e;return t}function Ni(s){const e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)}const Gf=Array.from({length:uo},(s,e)=>({x:e===0?0:Vf(e+1,2)*2-1,z:e===0?0:-4.6+Vf(e,3)*6,y:e===0?.3:-.4+Vf(e,5)*1.9,k:e===0?1:.85+Ni(e)*.3,yaw:Ni(e+40)*Fn,ph:Ni(e+80)*Fn,off:e*.137%1}));class cw{constructor(e,t,r=null){G(this,"canvas");G(this,"ctx");G(this,"cfg",ng);G(this,"surface");G(this,"renderer",null);G(this,"host");G(this,"scene");G(this,"camera");G(this,"group",new Bi);G(this,"depth",0);G(this,"scale",1);G(this,"look",null);G(this,"playing",new Es(.5));G(this,"failed",!1);G(this,"model",null);G(this,"flowers",[]);G(this,"materials",[]);G(this,"started",!1);G(this,"since",0);G(this,"seedTex",null);G(this,"seedData",new Float32Array(0));G(this,"off",new Float32Array(0));G(this,"vel",new Float32Array(0));G(this,"turn",new Float32Array(0));G(this,"hold",new Float32Array(0));G(this,"away",new Uint8Array(0));G(this,"thresh",new Float32Array(0));G(this,"flight",new Float32Array(0));G(this,"dest",new Float32Array(0));G(this,"phase",new Float32Array(0));G(this,"motionTime",0);G(this,"colourTime",0);G(this,"gust",0);G(this,"lastBeat",!1);G(this,"lastClap",!1);G(this,"hop",0);G(this,"dance",0);G(this,"sinceClap",99);G(this,"lastAim",{x:0,y:0});G(this,"swipe",new Pt);G(this,"present",0);G(this,"strokeWidth",null);G(this,"viewport",null);G(this,"time",null);this.canvas=e,this.ctx=t,this.host=r,this.scene=r?r.scene:new _c,this.camera=r?r.camera:new $n(30,16/9,.1,200),this.surface=document.createElement("canvas");try{r||(this.renderer=od(this.surface)),this.look=r?r.look:new _v}catch(o){console.error("Dandelion could not start:",o),this.failed=!0;return}iw().then(o=>{this.look&&this.build(o)}).catch(o=>{console.error("Dandelion model failed to load:",o),this.failed=!0})}setParams(e){this.cfg=Ss(ng,e)}isReady(){return this.model!==null||this.failed}build(e){const t=this.look,r=e.seeds,o=r*uo;this.seedData=new Float32Array(r*2*uo*4),this.seedTex=new Zg(this.seedData,r*2,uo,Mi,ki),this.seedTex.magFilter=pn,this.seedTex.minFilter=pn,this.seedTex.needsUpdate=!0,this.off=new Float32Array(o*3),this.vel=new Float32Array(o*3),this.turn=new Float32Array(o*4);for(let g=0;g<o;g++)this.turn[g*4+3]=1;this.hold=new Float32Array(o),this.away=new Uint8Array(o),this.thresh=new Float32Array(o),this.flight=new Float32Array(o),this.dest=new Float32Array(o*3),this.phase=new Float32Array(o);for(let g=0;g<o;g++)this.thresh[g]=.12+Ni(g*3.7+1)*1,this.phase[g]=Ni(g*1.3+7)*Fn;const l={value:new Pt(1,1)},c={value:0},f={value:e.foot},d={value:this.seedTex},h={value:1.5};this.strokeWidth=h,this.viewport=l,this.time=c;for(let g=0;g<uo;g++){const x=t.shared(),m={uBend:{value:new Z},uWave:{value:new Pt},uWavePhase:{value:0},uRow:{value:g},uShimmer:{value:0}},_={...x,...m,uViewport:l,uTime:c,uFoot:f,uSeeds:d},S=(M,E,P={})=>{const b=new ci({vertexShader:M,fragmentShader:E,uniforms:{..._,...P},side:Fi});return this.materials.push(b),b},T=new Bi;T.add(new Cn(e.body,S(sw,ig))),T.add(new Cn(e.achenes,S(ow,ig)));const y=S(aw,lw,{uWidth:h});y.transparent=!0,y.depthWrite=!1,T.add(new Cn(e.strokes,y));for(const M of T.children)M.frustumCulled=!1;T.visible=!1,this.group.add(T),this.flowers.push({root:T,shared:x,u:m,presence:0,at:new Z,size:1,placed:!1,bend:new Pt})}this.scene.add(this.group),this.model=e}pickDestination(e,t,r){const o=-4+Math.random()*6,l=(15.5-o)*t;this.dest[e*3]=(Math.random()*2-1)*l*r*.92,this.dest[e*3+1]=.1+(Math.random()*1.75-.85)*l,this.dest[e*3+2]=o}destroy(){var e,t;this.host||(e=this.look)==null||e.dispose(),this.look=null,(t=this.seedTex)==null||t.dispose();for(const r of this.materials)r.dispose();for(const r of this.flowers)r.root.clear();this.scene.remove(this.group),this.renderer&&ld(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const d=this.renderer;if(this.failed||!d||!this.look){ad(o,c,f,"DANDELION");return}Mv(o,c,f,l.field.backdrop),this.model&&(yv(this.camera,c,f),this.camera.position.set(0,.5,15.5/Math.max(.3,l.field.zoom)),this.camera.lookAt(0,.1,0),this.update(e,t,r,c,f),(this.surface.width!==c||this.surface.height!==f)&&d.setSize(c,f,!1),d.render(this.scene,this.camera),o.drawImage(this.surface,0,0,c,f))}update(e,t,r,o,l){const{cfg:c}=this,f=this.look,d=this.model;if(!f||!d||this.failed)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=Math.max(0,h.step),m=e.left||e.right?1:0;this.present+=(m-this.present)*(1-Math.exp(-g*3));const _=Math.min(1,((r==null?void 0:r.overall)??0)*1.4)*c.sound.wind;this.motionTime+=x,this.colourTime+=(x*c.colour.speed*(1+h.mid*c.sound.mid*1.2)+g*h.burst*c.hands.clap*.9)/sc;const S=this.motionTime,T=!!(r!=null&&r.beat),y=T&&!this.lastBeat,M=y&&c.sound.gust>0;this.hop=Math.max(this.hop*Math.exp(-g*5),y?(r==null?void 0:r.beatIntensity)||1:0),this.dance+=x,this.lastBeat=T,M&&(this.gust=Math.max(this.gust,((r==null?void 0:r.beatIntensity)||1)*c.sound.gust)),this.gust*=Math.exp(-g*2.5);const E=!!e.clapping&&c.hands.clap>0,P=E&&!this.lastClap;this.lastClap=E,this.sinceClap+=g;const b=Math.min(1,this.sinceClap/4)**3;P&&(this.sinceClap=0);const z=h.aim.x-this.lastAim.x,L=h.aim.y-this.lastAim.y;this.lastAim={x:h.aim.x,y:h.aim.y};const k=m?z/Math.max(g,.001):0,A=m?L/Math.max(g,.001):0;this.swipe.x+=(k-this.swipe.x)*(1-Math.exp(-g*6)),this.swipe.y+=(A-this.swipe.y)*(1-Math.exp(-g*6));const U=.5*Math.sin(S*.11)+.25*Math.sin(S*.27+1.3),W=.25+_*1.6+this.gust*1.2,B=new Z(Math.cos(U)*W,.15*Math.sin(S*.19),Math.sin(U)*W*.4);B.x+=af.clamp(this.swipe.x,-4,4)*1.6*c.hands.wind,B.y+=af.clamp(this.swipe.y,-4,4)*1*c.hands.wind;const q=m?af.clamp((h.openness-.6)/.4,-1,1)*c.hands.release:0,ce=c.field.drift,ue=Math.min(1,ce*2),j=Math.sqrt(Math.min(1,3/Math.max(1,Math.round(c.field.count)))),te=Math.min(.72,j*(ce*(.25+_*.45)+q*.3*this.present*ue)),X=b*Math.min(1,c.hands.clap)*ue*j,F=Math.min(1,te*5),N=m&&h.openness<.15&&c.hands.release>0,Y=!this.started;this.host||f.update(t,c.colour.palette,g,Y);const D=Math.tan(this.camera.fov/2*Math.PI/180),V=o/l,Se=Math.max(0,Math.min(uo,Math.round(c.field.count))),Ae=Math.max(1,Se);this.since+=g;const Me=gv(this.since,Se),K=2.2*Math.pow(Ae,-.42)*this.scale;let oe=0;for(let O=0;O<Ae;O++)oe+=Gf[O].x;oe/=Ae;let se=0;for(let O=0;O<Ae;O++)se=Math.max(se,Math.abs(Gf[O].x-oe));const Pe=new Z(h.aim.x*5.2,.1+h.aim.y*3,2),Ue=1.2*Math.max(.4,1+(h.spread-.4)*1.6),ge=d.seeds,$e=new Z,ie=new Qi,_e=new Qi,je=new Qi,Ke=new Z,We=new Z(0,1,0),Je=new Z(1,0,0),vt=this.seedData;this.flowers.forEach((O,et)=>{const it=Gf[et],Et=et<Me;if(O.presence+=((Et?1:0)-O.presence)*(1-Math.exp(-g*1.4)),Y&&(O.presence=0),!Et&&O.presence<.004&&(O.presence=0),O.root.visible=O.presence>.002,!O.root.visible){O.placed=!1,this.off.fill(0,et*ge*3,(et+1)*ge*3),this.vel.fill(0,et*ge*3,(et+1)*ge*3),this.away.fill(0,et*ge,(et+1)*ge),this.flight.fill(0,et*ge,(et+1)*ge);return}const Ce=K*it.k,Tt=(Ae===1?0:it.z)+this.depth,I=(15.5-Tt)*D*V,w=Ae===1?0:(it.x-oe)/Math.max(.5,se)*I*(.66+.24*Math.min(1,(Ae-1)/12)),ne=.1-(15.5-Tt)*D,me=.1+(15.5-Tt)*D;let ve=Ae===1?it.y:it.y*Math.min(1,.5+Ae*.1);ve=Math.min(ve,ne-d.foot*Ce-.4,me-Ce*1.5),$e.set(w,ve,Tt),O.placed||(O.at.copy($e),O.size=Ce,O.placed=!0),O.at.lerp($e,1-Math.exp(-g*1.2)),O.size+=(Ce-O.size)*(1-Math.exp(-g*1.2));const Ee=1-Math.pow(1-O.presence,3);O.root.position.set(O.at.x,O.at.y-(1-Ee)*-d.foot*O.size*.8,O.at.z),O.root.rotation.y=it.yaw,O.root.scale.setScalar(O.size*(.6+.4*Ee));const Te=O.root.scale.x,de=Math.cos(it.yaw),xe=Math.sin(it.yaw),ze=this.dance,Ge=O.at.x*.35,Oe=c.field.sway*(.45+_*1),Ie=Oe*(.85*Math.sin(Fn*ze/5.2-Ge+it.ph*.3)+.15*Math.sin(Fn*ze/3.3+it.ph*1.7))+B.x*.22+this.gust*.5,ut=Oe*.3*Math.sin(Fn*ze/7.1+it.ph*2.3)+B.z*.22;O.bend.x+=(Ie-O.bend.x)*(1-Math.exp(-g*1.6)),O.bend.y+=(ut-O.bend.y)*(1-Math.exp(-g*1.6));const ft=O.bend.x,yt=O.bend.y;O.u.uBend.value.set(ft*de-yt*xe,0,ft*xe+yt*de);const Q=c.field.sway*(.12+_*.3);O.u.uWave.value.set(Q*de,Q*xe),O.u.uWavePhase.value=Fn*ze/1.6-Ge*2+it.ph;const Fe=c.field.bounce*O.size*((.08+_*.22)*Math.sin(Fn*ze/1.2-Ge+it.ph)+.3*this.hop*(.6+.4*Ni(et+7)));O.root.position.y+=Fe,O.u.uShimmer.value=h.high*c.sound.high*2;const ye=O.root.position.x+ft*Te,qe=O.root.position.y,ke=O.root.position.z+yt*Te;for(let Ye=0;Ye<ge;Ye++){const be=et*ge+Ye,xt=be*3;P&&Ni(be*1.37+S*7.3)<X?this.hold[be]=Hf[0]+Ni(be+S)*(Hf[1]-Hf[0]):M&&Ni(be*.71+S*13.1)<.008*c.sound.gust*ce*j&&(this.hold[be]=zf[0]+Ni(be+S*3.1)*(zf[1]-zf[0])),this.hold[be]=Math.max(0,this.hold[be]-g);const Lt=.06*F*Math.sin(S*.37+this.phase[be]);N&&(this.flight[be]=0);const tn=!N&&(this.hold[be]>0||this.flight[be]>0||te+Lt>this.thresh[be]),kn=d.pivot[Ye*3],Si=d.pivot[Ye*3+1],$i=d.pivot[Ye*3+2],Ai=d.axis[Ye*3],er=d.axis[Ye*3+1],ti=d.axis[Ye*3+2],qr=Ai*de+ti*xe,ws=-Ai*xe+ti*de;if(tn&&!this.away[be]){this.flight[be]=6+Math.random()*6,this.pickDestination(be,D,V);const sn=.4+(P&&this.hold[be]>0?3.2*c.hands.clap*b:0);this.vel[xt]+=qr*sn,this.vel[xt+1]+=er*sn+.2,this.vel[xt+2]+=ws*sn}this.away[be]=tn?1:0;let cn=this.off[xt],bn=this.off[xt+1],Bn=this.off[xt+2],Rn=this.vel[xt],zn=this.vel[xt+1],Hn=this.vel[xt+2];if(x>0||tn){const sn=Math.max(x,0),R=ye+(kn*de+$i*xe)*Te+cn,ee=qe+Si*Te+bn,fe=ke+(-kn*xe+$i*de)*Te+Bn,le=Math.sin(ee*.9+S*.7+this.phase[be])*.6,ae=Math.sin(R*.7-S*.5+this.phase[be]*.5)*.45,He=Math.sin(fe*.8+R*.5+S*.6)*.4;if(tn){this.flight[be]=Math.max(0,this.flight[be]-sn);const Xe=be*3;let Ne=this.dest[Xe]-R,nt=this.dest[Xe+1]-ee,rt=this.dest[Xe+2]-fe;const ht=Math.hypot(Ne,nt,rt);ht<.8&&this.pickDestination(be,D,V);const dt=(1.2+.9*Ni(be*2.9))*Math.min(1,ht/2);Ne=Ne/Math.max(ht,.001)*dt,nt=nt/Math.max(ht,.001)*dt,rt=rt/Math.max(ht,.001)*dt;let ot=(Ne-Rn)*.7+B.x*.3+le*.8,Ct=(nt-zn)*.7+B.y*.3+ae*.8+.05,Bt=(rt-Hn)*.7+B.z*.3+He*.6;if(this.present>.01&&c.hands.follow>0){const St=Pe.x-R,vn=Pe.y-ee,An=Pe.z-fe,Mt=Math.hypot(St,vn,An)+.001,ni=this.present*c.hands.follow*Math.min(1,Mt/Ue-.6);ot+=St/Mt*ni*2.2-vn/Mt*this.present*c.hands.follow*1.4,Ct+=vn/Mt*ni*2.2+St/Mt*this.present*c.hands.follow*1.4,Bt+=An/Mt*ni*1.2}const Wt=(15.5-fe)*D,zt=Wt*V,Jt=Math.abs(R)-zt*1.02;Jt>0&&(ot-=Math.sign(R)*Jt*1.5);const Ze=Math.abs(ee-.1)-Wt*1.02;Ze>0&&(Ct-=Math.sign(ee-.1)*Ze*1.5),fe>6&&(Bt-=(fe-6)*1.5),fe<-8&&(Bt+=(-8-fe)*1.5),Rn+=ot*sn*1.6,zn+=Ct*sn*1.6,Hn+=Bt*sn*1.6;const on=Math.exp(-sn*.5);Rn*=on,zn*=on,Hn*=on}else{const Xe=Math.hypot(cn,bn,Bn),Ne=Math.min(1.8,Xe*.9)/Math.max(Xe,1e-4),nt=-cn*Ne+le*Math.min(1,Xe)*.6,rt=-bn*Ne+ae*Math.min(1,Xe)*.6,ht=-Bn*Ne+He*Math.min(1,Xe)*.6,dt=1-Math.exp(-sn*2.4);Rn+=(nt-Rn)*dt,zn+=(rt-zn)*dt,Hn+=(ht-Hn)*dt,Xe<.004&&Math.hypot(Rn,zn,Hn)<.02&&(cn=bn=Bn=Rn=zn=Hn=0)}cn+=Rn*sn,bn+=zn*sn,Bn+=Hn*sn}this.off[xt]=cn,this.off[xt+1]=bn,this.off[xt+2]=Bn,this.vel[xt]=Rn,this.vel[xt+1]=zn,this.vel[xt+2]=Hn;const Yr=Math.hypot(cn,bn,Bn)/Te,Qr=Math.min(1,Yr/.8),ui=this.turn.subarray(be*4,be*4+4);if(ie.set(ui[0],ui[1],ui[2],ui[3]),Qr>.001){Ke.set(Ai,er,ti),je.setFromUnitVectors(Ke,We);const sn=S*.6+this.phase[be];_e.setFromAxisAngle(We,sn),je.premultiply(_e),_e.setFromAxisAngle(Je,.3*Math.sin(S*1.3+this.phase[be]*2)),je.premultiply(_e),_e.identity().slerp(je,Qr),ie.slerp(_e,1-Math.exp(-g*3))}else ie.slerp(_e.identity(),1-Math.exp(-g*6));ui[0]=ie.x,ui[1]=ie.y,ui[2]=ie.z,ui[3]=ie.w;const fi=(et*ge*2+Ye*2)*4,jt=(cn*de-Bn*xe)/Te,Ao=(cn*xe+Bn*de)/Te;vt[fi]=jt,vt[fi+1]=bn/Te,vt[fi+2]=Ao,vt[fi+3]=1-Math.min(1,Yr/.6),vt[fi+4]=ie.x,vt[fi+5]=ie.y,vt[fi+6]=ie.z,vt[fi+7]=ie.w}const we=O.shared;we.uT.value=this.colourTime,we.uOff.value=it.off+c.colour.offset,f.apply(we,c.colour.depth,.16*(1+h.high*c.sound.high*2))}),this.started=!0,this.seedTex.needsUpdate=!0,this.viewport.value.set(o,l),this.time.value=S,this.strokeWidth.value=Math.max(1,l/620)}}const rg={colour:{speed:1,offset:0,palette:0,style:0,depth:.32},swarm:{count:4,zoom:1,height:0,size:1,drift:1,pulse:1,tentacles:1,backdrop:1,arrival:5},hands:{follow:1,spread:1,clap:1},sound:{beat:1,bass:1,mid:1,high:1,flow:1,swell:0}};class uw{constructor(e,t,r=120,o=20){G(this,"mesh");G(this,"curve");G(this,"position");G(this,"normal");G(this,"points",[]);G(this,"tangents",[]);this.anchors=t,this.length=r,this.sides=o,this.curve=new ky(t,!1,"centripetal");const l=(r+1)*(o+1),c=new ln;this.position=new Nt(new Float32Array(l*3),3),this.normal=new Nt(new Float32Array(l*3),3),this.position.setUsage(Ym),this.normal.setUsage(Ym);const f=new Float32Array(l*2),d=[];for(let h=0;h<=r;h++)for(let g=0;g<=o;g++){const x=h*(o+1)+g;if(f[x*2]=h/r,f[x*2+1]=g/o,h<r&&g<o){const m=x,_=x+o+1;d.push(m,_,m+1,_,_+1,m+1)}}c.setAttribute("position",this.position),c.setAttribute("normal",this.normal),c.setAttribute("uv",new Nt(f,2)),c.setIndex(d);for(let h=0;h<=r;h++)this.points.push(new Z),this.tangents.push(new Z);this.mesh=new Cn(c,e),this.mesh.frustumCulled=!1}update(e,t=1){const{curve:r,points:o,tangents:l,length:c,sides:f}=this;r.updateArcLengths();for(let S=0;S<=c;S++)r.getPointAt(S/c,o[S]);for(let S=0;S<=c;S++){const T=o[Math.max(0,S-1)],y=o[Math.min(c,S+1)];l[S].subVectors(y,T).normalize()}const d=new Z,h=new Z,g=new Z,x=l[0];d.set(0,0,1).addScaledVector(x,-x.z),d.lengthSq()<1e-6&&d.set(1,0,0).addScaledVector(x,-x.x),d.normalize();const m=this.position.array,_=this.normal.array;for(let S=0;S<=c;S++){const T=l[S];d.addScaledVector(T,-d.dot(T)).normalize(),h.crossVectors(T,d);const y=o[S],M=e*(1+(t-1)*(S/c));for(let E=0;E<=f;E++){const P=E/f*Fn;g.copy(d).multiplyScalar(-Math.cos(P)).addScaledVector(h,Math.sin(P));const b=(S*(f+1)+E)*3;m[b]=y.x+g.x*M,m[b+1]=y.y+g.y*M,m[b+2]=y.z+g.z*M,_[b]=g.x,_[b+1]=g.y,_[b+2]=g.z}}this.position.needsUpdate=!0,this.normal.needsUpdate=!0}}const sg=9,Jl=8,og=4,Zl=9,ag=[{c:[.2,.9,0],a:[1.6,.5,.8],s:1.25,off:0,ph:0,pulses:6},{c:[-3.9,1.5,-1.2],a:[1.2,.6,.8],s:1,off:.37,ph:2.1,pulses:7},{c:[4.1,.4,-.8],a:[1.1,.7,.6],s:1.05,off:.71,ph:4,pulses:5},{c:[-2,-.9,1.2],a:[1.4,.4,.5],s:.8,off:.18,ph:1,pulses:8},{c:[2.4,2.4,-3],a:[1.3,.5,.8],s:.85,off:.55,ph:3.2,pulses:6},{c:[-5.6,-.4,-2.6],a:[.9,.6,.6],s:.8,off:.86,ph:5,pulses:7},{c:[5.8,2,-4],a:[.8,.5,.6],s:.7,off:.28,ph:.6,pulses:9},{c:[-.6,2.7,-5],a:[1.6,.4,.8],s:.7,off:.63,ph:2.7,pulses:8}],fw=[[],[0],[1,2],[0,1,2],[0,1,2,3],[0,1,2,3,4],[0,1,2,3,4,5],[0,1,2,3,4,5,6],[0,1,2,3,4,5,6,7]],Wf=.62,hw=.55;function lg(s,e,t=new Z){return t.set(Math.sin(s)*.86*Math.cos(e),-.86*Math.sin(e)+.04,Math.cos(s)*.86*Math.cos(e))}function dw(s){const e=(s/Fn%1+1)%1;return e<.22?Math.sin(e/.22*(Math.PI/2)):.5+.5*Math.cos((e-.22)/.78*Math.PI)}class pw{constructor(e,t,r=null){G(this,"canvas");G(this,"ctx");G(this,"cfg",rg);G(this,"host");G(this,"surface");G(this,"renderer",null);G(this,"scene");G(this,"camera");G(this,"look",null);G(this,"group",new Bi);G(this,"swarm",[]);G(this,"geometries",[]);G(this,"failed",!1);G(this,"playing",new Es(.6));G(this,"motionTime",0);G(this,"pace",1);G(this,"handHold",0);G(this,"colourTime",0);G(this,"started",!1);G(this,"since",0);G(this,"current",0);G(this,"carry",0);G(this,"swell",0);G(this,"bassAvg",0);this.canvas=e,this.ctx=t,this.host=r,this.surface=document.createElement("canvas"),this.scene=r?r.scene:new _c,this.camera=r?r.camera:new $n(30,16/9,.1,100);try{r||(this.renderer=od(this.surface)),this.look=r?r.look:new _v,this.build(this.look)}catch(o){console.error("Jellyfish could not start:",o),this.failed=!0}}setParams(e){this.cfg=Ss(rg,e)}build(e){const t=new gc(1,44,30),r=new gc(1,40,26);this.geometries.push(t,r),this.scene.add(this.group);for(const o of ag){const l=e.shared(),c=e.shared(),f=new Bi;this.group.add(f);const d=[],h=[];for(let _=0;_<sg;_++){const S=_/sg*Fn,T=new Bi;T.rotation.y=S;const y=new Bi;y.rotation.x=Wf,T.add(y);const M=new Cn(t,e.material(QE,l,{uAng:{value:S}}));M.scale.set(.42,.18,.52),M.position.set(0,_*5%3*.02,.48),y.add(M),f.add(T),d.push(y),h.push(M)}const g=new Cn(r,e.material(ZE,l));g.scale.set(.44,.26,.44),g.position.y=-.1,f.add(g);const x=[],m=e.material(JE,c,{uWS:{value:.6}});for(let _=0;_<Jl+og;_++){const S=_>=Jl,T=S?(_-Jl)/og*Fn+.4:_/Jl*Fn+.2,y=S?new Z(Math.sin(T)*.08,-.25,Math.cos(T)*.08):lg(T,Wf),M=Array.from({length:Zl},()=>new Z),E=new uw(m,M,S?48:64,S?10:6);this.group.add(E.mesh),x.push({tube:E,from:y,links:M,angle:S?null:T,link:S?.2:.42,radius:S?.085:.028,phase:T*1.7+_})}this.swarm.push({spec:o,root:f,tilts:d,lobes:h,cap:g,strands:x,shared:l,strandShared:c,presence:0,beat:o.ph,lift:0,rise:0,pull:new Z,up:new Z(0,1,0),last:null,primed:!1})}}destroy(){var e;this.host||(e=this.look)==null||e.dispose(),this.look=null;for(const t of this.geometries)t.dispose();this.host?(this.scene.remove(this.group),this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())})):this.renderer&&ld(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const d=this.renderer;if(this.failed||!d||!this.look){ad(o,c,f,"JELLYFISH");return}yv(this.camera,c,f);const h=-l.swarm.height*4.5;this.camera.position.set(0,.5+h,15.5/Math.max(.3,l.swarm.zoom)),this.camera.lookAt(0,.1+h,0),this.update(e,t,r),(this.surface.width!==c||this.surface.height!==f)&&d.setSize(c,f,!1),d.render(this.scene,this.camera),this.look.backdrop(o,c,f,l.swarm.backdrop),o.drawImage(this.surface,0,0,c,f)}update(e,t,r){const{cfg:o}=this,l=this.look;if(!l||this.failed)return;const c=this.playing;c.read(e,r);const{dt:f}=c;this.pace+=(Math.max(0,c.step)-this.pace)*(1-Math.exp(-f*.6));const d=this.pace*.6,h=c.burst*o.hands.clap,g=c.bump*o.sound.beat,x=!e.synthetic&&(e.left||e.right)?1:0;this.handHold+=(x-this.handHold)*(1-Math.exp(-f*3)),this.motionTime+=d,this.colourTime+=(d*o.colour.speed*(1+c.mid*o.sound.mid*1.2)+f*h*.9)/sc;const m=this.motionTime,_=Fn*m/sc,S=Math.max(0,Math.min(8,Math.round(o.swarm.count))),T=!this.started;this.host||l.update(t,o.colour.palette,f,T,o.colour.style),this.since+=f;const y=new Set(fw[S].slice(0,gv(this.since*.55*(5/Math.max(1,o.swarm.arrival)),S)));T&&(this.started=!0,this.swarm.forEach(F=>{F.presence=0}));const M=r!=null&&r.live?r.bass:0,E=Math.max(0,M-this.bassAvg-.12);this.bassAvg+=(M-this.bassAvg)*(1-Math.exp(-f*.5));const P=Math.min(1,E*2.2)*o.sound.swell;this.swell+=(P-this.swell)*(1-Math.exp(-f*(P>this.swell?2.5:.45)));const b=(x?Math.max(.3,1+(c.spread-.4)*o.hands.spread*1.6):1)*(1+this.swell*.9),z=new Z(c.aim.x*4.6,c.aim.y*2.1,0).multiplyScalar(o.hands.follow*x),L=o.swarm.drift*(1+c.bass*o.sound.bass*.8),A=!!(r!=null&&r.live)?.35+.65*c.energy+.4*c.mid:.35;this.carry+=(o.sound.flow*A-this.carry)*(1-Math.exp(-f*.35)),this.current+=d*(.18+.5*this.carry);const U=.16*(1+c.high*o.sound.high*2.5),W=1+c.high*o.sound.high*1.5,B=o.swarm.size,q=new Z,ce=new Qi,ue=new Z(0,1,0),j=new Z,te=new Z,X=new Z;this.swarm.forEach((F,N)=>{const Y=y.has(N)?1:0;F.presence=Y>F.presence?Math.min(Y,F.presence+f/Math.max(1,o.swarm.arrival)):Math.max(Y,F.presence-f/3),F.presence<.004&&Y===0&&(F.presence=0);const D=F.presence>.002;F.root.visible=D;for(const et of F.strands)et.tube.mesh.visible=D;if(!D){F.last=null,F.primed=!1;return}const V=F.spec;F.beat+=d*Fn*(V.pulses/sc)+f*h*Fn*1.5;const Se=dw(F.beat),Ae=Math.min(1.3,Math.max(Se,g*.7)+h*.4),Me=(F.grip??0)+(c.fist-(F.grip??0))*(1-Math.exp(-f*(7-N*.7))),K=Math.max(0,(Me-(F.gripWas??Me))/Math.max(f,.001));F.gripWas=Me,F.grip=Me;const oe=this.handHold,se=(Ae*(1-oe)+Me*oe)*o.swarm.pulse,Pe=(Math.min(1.3,Se+g*.15+h*.4+this.swell*.5)*(1-oe)+Math.min(1.3,K*.35)*oe)*o.swarm.pulse,Ue=F.presence*F.presence;F.rise+=(Pe*1.5*Ue-F.rise*1.2)*f,F.lift+=(F.rise-F.lift*.35)*f*.8,q.set(V.c[0]*b+V.a[0]*L*Math.sin(_+V.ph),V.c[1]*Math.min(1.4,b)+V.a[1]*L*Math.sin(2*_+V.ph*1.7),V.c[2]+V.a[2]*L*Math.cos(_+V.ph*.6));const ge=this.current-N*.35;q.x+=Math.sin(ge+V.ph*.5)*.9*this.carry,q.y+=Math.sin(ge*.63+V.ph)*.3*this.carry,q.z+=Math.cos(ge*.8+V.ph*1.3)*.5*this.carry;const $e=.8+1.6*(1-N/ag.length);F.pull.lerp(z,1-Math.exp(-f*$e)),q.add(F.pull),h>.001&&(j.set(q.x,q.y-.5,0),j.lengthSq()<.01&&j.set(N%2?1:-1,.4,0),q.addScaledVector(j.normalize(),h*2.6));{const et=F.presence,it=.15+.85*et*et*et,Et=V.c[0]*b,Ce=V.c[2];q.x=Et+(q.x-Et)*it,q.z=Ce+(q.z-Ce)*it}if(F.last){j.subVectors(q,F.last).divideScalar(Math.max(f,.001));const et=new Z(j.x*.12,1,j.z*.08).normalize();F.up.lerp(et,1-Math.exp(-f*1.5)).normalize()}F.last=(F.last??new Z).copy(q),q.addScaledVector(F.up,F.lift-.6);const ie=F.presence,_e=ie*ie*ie*(ie*(ie*6-15)+10);q.y-=(1-_e)*7,q.y-=.9;const je=V.s*B*(.3+.7*_e)*(1+c.bass*o.sound.bass*.08+g*.04);{const et=this.camera.position,it=Math.tan(this.camera.fov*Math.PI/360)*Math.max(1,et.z-q.z),Ce=et.y+it-1.5*je-.8;q.y>Ce&&(q.y=Ce+.8*(1-Math.exp(-(q.y-Ce)/.8)))}F.root.position.copy(q),ce.setFromUnitVectors(ue,F.up),F.root.quaternion.copy(ce),F.root.rotateY(Math.sin(_+V.ph)*.4*F.presence),F.root.scale.setScalar(je);const Ke=Wf+hw*se;for(const et of F.tilts)et.rotation.x=Ke;for(const et of F.lobes)et.scale.y=.18*(1-.18*se);F.cap.scale.set(.44*(1-.2*se),.26*(1+.08*se),.44*(1-.2*se)),F.root.updateMatrix();const We=o.swarm.tentacles,Je=F.up.clone().negate();te.set(1,0,0).applyQuaternion(F.root.quaternion);for(const et of F.strands){const it=et.links;et.angle!==null&&lg(et.angle,Ke,et.from);const Et=it[0].copy(et.from).applyMatrix4(F.root.matrix);if(!F.primed)for(let Ce=1;Ce<Zl;Ce++)it[Ce].copy(Et).addScaledVector(Je,et.link*je*We*Ce);for(let Ce=1;Ce<Zl;Ce++){const Tt=it[Ce-1],I=it[Ce];j.subVectors(I,Tt),j.lengthSq()<1e-8&&j.copy(Je),j.normalize().lerp(Je,.22+.1*se).normalize();const w=Math.sin(et.phase+_*3*W-Ce*.75)*.06*W*(Ce/Zl);j.addScaledVector(te,w).normalize(),I.copy(Tt).addScaledVector(j,et.link*je*We)}et.tube.update(et.radius*je,.25)}F.primed=!0;const vt=F.shared;vt.uT.value=this.colourTime,vt.uOff.value=V.off+o.colour.offset,vt.uWA.value=1,vt.uWB.value=.6,vt.uWC.value=.8+.4*Math.sin(_+V.ph);const O=F.strandShared;O.uT.value=this.colourTime,O.uOff.value=V.off+.15+o.colour.offset,l.apply(vt,o.colour.depth,U),l.apply(O,o.colour.depth,U)}),this.scene.updateMatrixWorld(!0),this.camera.updateMatrixWorld(!0);for(const F of this.swarm)F.root.visible&&(F.cap.getWorldPosition(X),X.applyMatrix4(this.camera.matrixWorldInverse),F.shared.uCenter.value.copy(X))}}const cg={grid:{detail:.5,field:.5,figure:.4,words:1,zoom:1},hands:{light:1,close:1,clap:1},sound:{beat:1,quiet:1}};let Vh=null,Sv=0,oc=0;function mw(){oc++;let s=!1;return()=>{s||(s=!0,oc=Math.max(0,oc-1))}}function gw(){return oc>0}function vw(s,e,t){if(s.length<e*t)return;const r=new Uint8Array(e*t);for(let o=0;o<t;o++)for(let l=0;l<e;l++)r[o*e+l]=s[o*e+(e-1-l)];Vh={data:r,width:e,height:t},Sv=performance.now()}const xw=4e3;function _w(){return Vh&&performance.now()-Sv<xw?Vh:null}function yw(s,e,t){const r=Math.min(s.width-1.001,Math.max(0,e*(s.width-1))),o=Math.min(s.height-1.001,Math.max(0,t*(s.height-1))),l=Math.floor(r),c=Math.floor(o),f=r-l,d=o-c,h=c*s.width+l,g=s.data[h],x=s.data[h+1],m=s.data[h+s.width],_=s.data[h+s.width+1];return(g+(x-g)*f+(m-g)*d+(g-x-m+_)*f*d)/255}const fa=8;function ug(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class Mw{constructor(e,t){G(this,"canvas");G(this,"ctx");G(this,"cfg",cg);G(this,"playing",new Es(.6));G(this,"lit",new Float32Array(0));G(this,"columns",0);G(this,"rows",0);G(this,"time",0);G(this,"real",0);G(this,"closed",0);G(this,"focus",{x:.89,y:.5});G(this,"rings",[]);G(this,"lastKick",0);G(this,"breath",0);G(this,"release",null);G(this,"glow",document.createElement("canvas"));G(this,"glowKey","");this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ss(cg,e)}destroy(){var e;(e=this.release)==null||e.call(this),this.release=null}tint(e){if(e===this.glowKey)return;this.glowKey=e;const[t,r,o]=ug(e);this.glow.width=this.glow.height=96;const l=this.glow.getContext("2d");l.clearRect(0,0,96,96);const c=l.createRadialGradient(48,48,0,48,48,48),f=d=>Math.round(d+(255-d)*.6);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.1,`rgba(${f(t)},${f(r)},${f(o)},0.9)`),c.addColorStop(.35,`rgba(${t},${r},${o},0.25)`),c.addColorStop(1,`rgba(${t},${r},${o},0)`),l.fillStyle=c,l.fillRect(0,0,96,96)}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=f/d,g=this.playing;g.read(e,r);const{dt:x}=g,m=Math.min(.08,Math.max(0,g.step));this.time+=m,this.real+=x;const _=ge=>1-Math.exp(-x*ge);this.tint(t[0]??"#8fb4ff"),c.grid.figure>.01&&!this.release&&(this.release=mw()),c.grid.figure<=.01&&this.release&&(this.release(),this.release=null);const S=Math.round(Math.max(8,Math.min(150,(22+34*Math.max(0,Math.min(1,c.grid.detail)))/Math.max(.2,c.grid.zoom)))),T=Math.round(S*h);(S!==this.rows||T!==this.columns)&&(this.rows=S,this.columns=T,this.lit=new Float32Array(S*T));const y=1/S,M=[e.left,e.right].filter(Boolean),E=M.length>0&&!e.synthetic;let P=M.map(ge=>{const $e=ge.openness??(ge.gesture==="fist"?0:1),ie=ge.depth??.35;return{x:ge.position.x*h,y:ge.position.y,reach:(.04+.19*$e*$e)*c.hands.light*(.8+.6*ie),power:.85+.5*ie}});if(P.length&&!E&&(P=[{x:P.reduce((ge,$e)=>ge+$e.x,0)/P.length,y:P.reduce((ge,$e)=>ge+$e.y,0)/P.length,reach:.13*c.hands.light,power:.7}]),P.length){const ge=P.reduce((ie,_e)=>ie+_e.x,0)/P.length,$e=P.reduce((ie,_e)=>ie+_e.y,0)/P.length;this.focus.x+=(ge-this.focus.x)*_(6),this.focus.y+=($e-this.focus.y)*_(6)}else this.focus.x+=(h/2-this.focus.x)*_(.8),this.focus.y+=(.5-this.focus.y)*_(.8);const b=!!(r!=null&&r.live);let z=0;E?z=g.fist*c.hands.close:b&&(z=Math.max(0,Math.min(.8,(.3-g.energy)*3.2))*c.sound.quiet),this.closed+=(Math.min(1,z)-this.closed)*_(z>this.closed?1.7:2.6),g.clapped&&c.hands.clap>0&&(this.rings.push({x:this.focus.x,y:this.focus.y,at:0,strength:g.clapStrength*c.hands.clap}),this.closed*=.25);const L=(ge,$e,ie)=>{const _e=Math.max(0,Math.min(1,(ie-ge)/($e-ge)));return _e*_e*(3-2*_e)},k=L(.04,.62,this.closed),A=L(.55,1,this.closed),U=Math.max(g.kick,g.bump)*c.sound.beat;U>.45&&this.lastKick<=.45&&(this.rings.push({x:this.focus.x,y:this.focus.y,at:0,strength:.16+.14*Math.min(1,U)}),this.rings.length>6&&this.rings.shift()),this.lastKick=U;for(const ge of this.rings)ge.at+=x;this.rings=this.rings.filter(ge=>ge.at<2.6),this.breath+=(g.bass-this.breath)*_(3);const W=this.release?_w():null,B=c.grid.figure,q=c.grid.field,ce=this.time,ue=this.lit,j=_(16),te=_(2.4),X=P[0],F=P[1];let N=0,Y=0,D=0;X&&F&&(N=F.x-X.x,Y=F.y-X.y,D=N*N+Y*Y);for(let ge=0;ge<S;ge++){const $e=(ge+.5)*y;for(let ie=0;ie<T;ie++){const _e=(ie+.5)*y;let je=q*(.16+.07*Math.sin(_e*2.1+$e*1.3-ce*.5)+.04*Math.sin(_e*.9-$e*2.7+ce*.31));W&&B>.01&&(je+=yw(W,_e/h,$e)*.34*B);for(const We of P){const Je=_e-We.x,vt=$e-We.y;je+=We.power*Math.exp(-(Je*Je+vt*vt)/(We.reach*We.reach))}if(D>1e-5){const We=Math.max(0,Math.min(1,((_e-X.x)*N+($e-X.y)*Y)/D)),Je=Math.hypot(_e-(X.x+N*We),$e-(X.y+Y*We));je+=.55*Math.exp(-(Je*Je)/(y*y*.5))}for(const We of this.rings){const Je=Math.hypot(_e-We.x,$e-We.y)-We.at*.85;Je>-.09&&Je<.09&&(je+=We.strength*Math.exp(-(Je*Je)/.0011)*(1-We.at/2.6))}const Ke=ge*T+ie;ue[Ke]+=(je-ue[Ke])*(je>ue[Ke]?j:te)}}l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,d);const V=[];for(let ge=0;ge<fa;ge++)V.push(new Path2D);const Se=y*d,Ae=1+.18*this.breath,Me=this.focus.x,K=this.focus.y;for(let ge=0;ge<S;ge++){if(k>.97&&ge%3!==0)continue;const $e=(ge+.5)*y,ie=(K+($e-K)*(1-k))*d;for(let _e=0;_e<T;_e++){const je=ue[ge*T+_e];if(je<.03)continue;const Ke=(_e+.5)*y,We=(Me+(Ke-Me)*(1-A))*d,Je=Math.min(fa-1,Math.floor(Math.min(.999,je)*fa)),vt=Se*Math.min(.5,.07+.4*Math.min(1,je))*Ae*(1-.45*k),O=V[Je];O.moveTo(We+vt,ie),O.arc(We,ie,vt,0,Math.PI*2)}}const[oe,se,Pe]=ug(t[0]??"#8fb4ff"),Ue=1-.82*k;for(let ge=0;ge<fa;ge++){const $e=ge/(fa-1),ie=(_e,je)=>{const Ke=je+(255-je)*Math.min(1,.35+Math.max(0,$e*1.6-.6));return Math.round(_e+(Ke-_e)*Math.min(1,$e*1.4))};l.fillStyle=`rgb(${ie(150,oe)},${ie(156,se)},${ie(170,Pe)})`,l.globalAlpha=Math.min(1,(.3+.7*$e)*Ue),l.fill(V[ge])}if(A>.02){const ge=Se*(2.4+5*A)*(1+.25*this.breath);l.globalCompositeOperation="lighter",l.globalAlpha=Math.min(1,A*1.2),l.drawImage(this.glow,Me*d-ge,K*d-ge,ge*2,ge*2),l.globalCompositeOperation="source-over"}if(c.grid.words>.01){const ge=d/720,$e=Math.max(9,Math.round(11*ge));l.font=`500 ${$e}px ui-monospace, SFMono-Regular, Menlo, monospace`,l.textBaseline="alphabetic",l.textAlign="left";let ie;this.closed>.9?ie="standby":this.closed>.25?ie="closing":E?ie=P.length>1?"two hands":"one hand":ie=b?"listening":"waiting";const _e=We=>Math.round(We+(255-We)*.7);l.fillStyle=`rgb(${_e(oe)},${_e(se)},${_e(Pe)})`,l.globalAlpha=.6*c.grid.words;const je=20*ge,Ke=d-20*ge;if(l.fillText(ie,je,Ke),Math.floor(this.real*1.6)%2===0){const We=l.measureText(ie).width;l.fillRect(je+We+5*ge,Ke-$e*.82,$e*.55,$e)}}l.globalAlpha=1}}const fg={shape:{size:1,morph:.12,lobes:1,detail:4,style:2},motion:{spin:1,flow:1,dust:.5,points:1400},hands:{shape:1,follow:.25,clap:1},sound:{bass:1,beat:1,spin:1}};class Sw{constructor(e,t){G(this,"canvas");G(this,"ctx");G(this,"cfg",fg);G(this,"playing",new Es(.6));G(this,"surface",document.createElement("canvas"));G(this,"scene",new _c);G(this,"camera",new $n(50,16/9,.1,100));G(this,"renderer");G(this,"group",new Bi);G(this,"corners",new Float32Array(0));G(this,"edges",new Uint32Array(0));G(this,"shaped",new Float32Array(0));G(this,"points",null);G(this,"lines",null);G(this,"builtDetail",-1);G(this,"wire");G(this,"dots");G(this,"dust");G(this,"time",0);G(this,"flow",0);G(this,"spin",0);G(this,"pull",0);G(this,"swell",0);G(this,"pulse",0);G(this,"burst",0);G(this,"lastDrop",0);G(this,"at",new Pt);this.canvas=e,this.ctx=t,this.renderer=new pv({canvas:this.surface,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(1),this.renderer.setClearColor(0,1),this.camera.position.set(0,0,7.5),this.camera.lookAt(0,0,0),this.scene.add(this.group),this.wire=new ev({color:6737151,transparent:!0,opacity:.85}),this.dots=new Oh({color:6737151,size:.09,transparent:!0,opacity:1,depthWrite:!1});const r=6e3,o=new Float32Array(r*3);for(let c=0;c<r;c++){const f=4+Math.random()*14,d=Math.random()*Math.PI*2,h=Math.random()*2-1,g=Math.sqrt(1-h*h);o.set([f*g*Math.cos(d),f*h,-Math.abs(f*g*Math.sin(d))-3],c*3)}const l=new ln;l.setAttribute("position",new Nt(o,3)),this.dust=new Bh(l,new Oh({color:16777215,size:.03,transparent:!0,opacity:.5,depthWrite:!1})),this.scene.add(this.dust)}setParams(e){this.cfg=Ss(fg,e)}build(e){this.points&&(this.group.remove(this.points,this.lines),this.points.geometry.dispose(),this.lines.geometry.dispose());const t=new rd(1,e),r=t.attributes.position.array,o=new Map,l=[],c=[];for(let m=0;m<r.length;m+=3){const _=`${r[m].toFixed(4)},${r[m+1].toFixed(4)},${r[m+2].toFixed(4)}`;let S=o.get(_);S===void 0&&(S=l.length/3,o.set(_,S),l.push(r[m],r[m+1],r[m+2])),c.push(S)}const f=new Set,d=[],h=l.length/3;for(let m=0;m<c.length;m+=3)for(const[_,S]of[[c[m],c[m+1]],[c[m+1],c[m+2]],[c[m+2],c[m]]]){const T=_<S?_*h+S:S*h+_;f.has(T)||(f.add(T),d.push(_,S))}t.dispose(),this.corners=Float32Array.from(l),this.shaped=new Float32Array(l.length),this.edges=Uint32Array.from(d);const g=new ln;g.setAttribute("position",new Nt(this.shaped,3));const x=new ln;x.setAttribute("position",new Nt(new Float32Array(d.length*2*3),3)),this.points=new Bh(g,this.dots),this.lines=new Uy(x,this.wire),this.points.frustumCulled=!1,this.lines.frustumCulled=!1,this.group.add(this.lines,this.points),this.builtDetail=e}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=Math.max(0,h.step),m=N=>1-Math.exp(-g*N);this.time+=x;const _=Math.max(2,Math.min(6,Math.round(c.shape.detail)));_!==this.builtDetail&&this.build(_);const S=[e.left,e.right],T=!e.synthetic&&S.some(Boolean),y=T?Math.max(h.fist,h.pinch):0;this.pull+=(y*c.hands.shape-this.pull)*m(4),this.swell+=(h.bass*c.sound.bass-this.swell)*m(5);const M=Math.max(h.kick,h.bump)*c.sound.beat;this.pulse=Math.max(this.pulse*Math.exp(-g*6),Math.min(1,M)),h.clapped&&c.hands.clap>0&&(this.burst=Math.max(this.burst,h.clapStrength*c.hands.clap)),h.drop>.5&&this.lastDrop<=.5&&(this.burst=Math.max(this.burst,.9)),this.lastDrop=h.drop,this.burst*=Math.exp(-g*2.2);const E=c.shape.morph+.35*this.swell+.5*this.pull+.25*h.build;this.flow+=x*.35*c.motion.flow*(1+this.swell);const P=1.1*Math.max(.3,c.shape.lobes),b=this.flow,z=this.corners,L=this.shaped;for(let N=0;N<z.length;N+=3){const Y=z[N],D=z[N+1],V=z[N+2],Se=Math.sin(Y*P*1.7+b)*.5+Math.sin(D*P*2.1-b*.8+1.3)*.35+Math.sin((Y+V)*P*1.4+b*1.3+2.1)*.3+Math.sin((D-V)*P*2.6-b*.6)*.15*(.5+this.pull),Ae=1+Se*E+this.pulse*.08*(.6+.4*Math.sin(D*3+b))+this.burst*.6*(.7+.3*Se);L[N]=Y*Ae,L[N+1]=D*Ae,L[N+2]=V*Ae}this.points.geometry.attributes.position.needsUpdate=!0;const k=Math.max(0,Math.min(2,c.shape.style)),A=.5*Math.min(1,k/2),U=this.lines.geometry.attributes.position,W=U.array,B=this.edges;for(let N=0,Y=0;N<B.length;N+=2){const D=B[N]*3,V=B[N+1]*3,Se=L[D],Ae=L[D+1],Me=L[D+2],K=L[V],oe=L[V+1],se=L[V+2];W[Y++]=Se,W[Y++]=Ae,W[Y++]=Me,W[Y++]=Se+(K-Se)*A,W[Y++]=Ae+(oe-Ae)*A,W[Y++]=Me+(se-Me)*A,W[Y++]=K,W[Y++]=oe,W[Y++]=se,W[Y++]=K+(Se-K)*A,W[Y++]=oe+(Ae-oe)*A,W[Y++]=se+(Me-se)*A}U.needsUpdate=!0,this.lines.visible=A>.004,this.spin+=x*.35*c.motion.spin*(1+c.sound.spin*(.8*h.mid+.6*h.energy)),this.group.rotation.set(.35+Math.sin(this.time*.13)*.25,this.spin,Math.sin(this.time*.09)*.2);const q=T?c.hands.follow:c.hands.follow*.3;this.at.x+=(h.aim.x*2.2*q-this.at.x)*m(2),this.at.y+=(h.aim.y*1.3*q-this.at.y)*m(2),this.group.position.set(this.at.x,this.at.y,0),this.group.scale.setScalar(1.6*Math.max(.2,c.shape.size)*(1+.05*this.pulse));const ce=Math.min(1,k/2),ue=new Ot(t[0]??"#66ccff"),j=new Ot(t[1]??t[0]??"#3300ff"),te=ue.clone().lerp(new Ot(1,1,1),.25+.4*this.pulse);this.wire.color.copy(te),this.dots.color.copy(te.clone().lerp(j,.3)),this.dots.size=(.08+.05*this.pulse)*(1-.35*ce),this.dots.opacity=1,this.wire.opacity=.55+.4*Math.min(1,this.swell+this.pulse);const X=this.dust.material;X.opacity=Math.max(0,Math.min(1,c.motion.dust));const F=Math.max(0,Math.min(6e3,Math.round(c.motion.points)));this.dust.geometry.setDrawRange(0,F),this.dust.visible=c.motion.dust>.01&&F>0,this.dust.rotation.y=-this.time*.03,(this.surface.width!==f||this.surface.height!==d)&&this.renderer.setSize(f,d,!1),this.camera.aspect=f/d,this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera),l.globalCompositeOperation="source-over",l.globalAlpha=1,l.drawImage(this.surface,0,0,f,d)}destroy(){ld(this.scene,this.renderer)}}const hg={look:{flow:1,zoom:1,detail:1,veins:1,grain:.5},hands:{follow:1,clap:1},sound:{beat:1,bass:1}},Aw=`
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Ew=`
precision highp float;
varying vec2 vUv;
uniform vec2 uRes;
uniform float uTime, uReal, uStyle, uFlow, uDetail, uVeins, uGrain, uBass, uKick, uBurst, uTurn, uZoom;
uniform vec3 uHand;
uniform vec4 uDrops[8];       // ripples: x, y, when, how hard

float hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float s = 0.0, a = 0.5;
  mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = r * p * 2.02 + 3.1; a *= 0.5; }
  return s;
}
/* Domain warping: noise fed through itself — the liquid in everything. */
vec2 warp(vec2 p, float t) {
  vec2 q = vec2(fbm(p + vec2(0.0, t * 0.11)), fbm(p + vec2(5.2, 1.3) - t * 0.09));
  vec2 r = vec2(fbm(p + 3.0 * q + vec2(1.7, 9.2) + t * 0.05), fbm(p + 3.0 * q + vec2(8.3, 2.8) - t * 0.04));
  return r;
}
vec3 hueTurn(vec3 c, float a) {
  const vec3 k = vec3(0.57735);
  return c * cos(a) + cross(k, c) * sin(a) + k * dot(k, c) * (1.0 - cos(a));
}
vec3 spectrum(float x) {
  return clamp(abs(fract(x + vec3(0.0, 0.33, 0.67)) * 6.0 - 3.0) - 1.0, 0.0, 1.0);
}

// ── INK WING ────────────────────────────────────────────────────────────────
/* A wing of ink spreading on wet paper: an orange rim, a black band bleeding
   inward with feathered edges, a peach and cyan heart, an eye near its root,
   fine dark veins. It breathes and the ink keeps travelling. */
vec3 inkWing(vec2 p, float t) {
  vec3 paper = vec3(0.87, 0.86, 0.84);
  vec3 haze = vec3(0.58, 0.64, 0.92);
  vec2 root = vec2(-0.05, -0.62) + uHand.z * (uHand.xy - vec2(0.5)) * vec2(0.3, 0.2);
  vec2 d = p - root;
  float ang = atan(d.y, d.x);
  float r = length(d);
  vec2 w = warp(p * 1.2, t);
  // The wing: one big lobe, its edge wandering slowly.
  float reach = (1.05 + 0.14 * sin(ang * 2.0 + t * 0.07) + 0.3 * (w.x - 0.5)) * (1.0 + uBass * 0.08 + uKick * 0.04);
  float lobe = smoothstep(0.1, 1.2, ang) * smoothstep(2.9, 1.9, ang);
  reach *= mix(0.3, 1.0, lobe);
  float inside = reach - r;
  vec3 col = mix(paper, haze, smoothstep(0.45, 0.0, abs(inside)) * 0.6);
  float s = clamp(inside / reach, 0.0, 1.0);              // 0 at the rim, 1 at the root
  // Ink travels outward in hairs: streaks along the radius.
  float hairs = fbm(vec2(ang * 26.0, r * 3.0 - t * 0.05) + w * 2.0);
  float feather = (hairs - 0.5) * 0.16 * uDetail + (w.y - 0.5) * 0.22;
  vec3 orange = vec3(0.98, 0.38, 0.12);
  vec3 peach = vec3(1.0, 0.64, 0.58);
  vec3 cyan = vec3(0.42, 0.82, 0.88);
  vec3 ink = vec3(0.025, 0.02, 0.03);
  vec3 heart = mix(peach, cyan, smoothstep(0.3, 0.8, w.x + (s - 0.65) * 0.9));
  heart = mix(heart, vec3(0.95, 0.85, 0.82), smoothstep(0.75, 0.95, w.y) * 0.5);
  vec3 c = mix(orange, heart, smoothstep(0.36, 0.58, s + feather));
  float band = smoothstep(0.1, 0.28, s + feather) * (1.0 - smoothstep(0.36, 0.6, s + feather * 1.5));
  c = mix(c, ink, band * 0.97);
  // The eye near the root, soft as if photographed: navy, a blue iris with a
  // rainbow sheen at its edge, black, a cyan halo.
  vec2 eyeC = root + vec2(0.05, 0.32);
  float e = length((p - eyeC) * vec2(1.0, 1.3)) + (w.x - 0.5) * 0.04;
  float er = 0.11 * (1.0 + uKick * 0.15);
  c = mix(c, vec3(0.55, 0.86, 0.92), smoothstep(er * 2.1, er * 1.3, e) * 0.8);
  c = mix(c, ink, smoothstep(er * 1.35, er * 1.05, e));
  vec3 iris = mix(vec3(0.2, 0.42, 0.85), vec3(0.03, 0.06, 0.22), smoothstep(er * 0.95, er * 0.25, e));
  c = mix(c, iris, smoothstep(er * 1.02, er * 0.85, e));
  c += spectrum(e * 9.0 + w.y) * 0.18 * smoothstep(0.03, 0.0, abs(e - er * 0.98));
  // Fine veins, faint, curving with the flow.
  float va = ang * 7.0 + (w.y - 0.5) * 1.2 + r * 0.6;
  float vein = 1.0 - smoothstep(0.0, 0.02, abs(fract(va) - 0.5));
  c = mix(c, vec3(0.15, 0.07, 0.06), vein * 0.35 * uVeins * smoothstep(0.15, 0.5, r) * (1.0 - band));
  // Volume: the paper and the pigment lie in soft folds.
  float h = fbm(p * 2.5 + w * 1.5);
  float shade = 0.92 + 0.16 * (h - 0.5) * 2.0;
  c *= shade;
  // A wet edge catching the light, and the colour bleeding just past it.
  c = mix(c, vec3(1.0, 0.75, 0.5), smoothstep(0.03, 0.0, abs(s - 0.005)) * 0.4);
  col = mix(col, c, smoothstep(-0.03, 0.02, inside));
  return col;
}

// ── PETALS ──────────────────────────────────────────────────────────────────
/* Petals out of focus, so close they are mostly colour: layer over layer,
   the near ones blurred wide, pink to peach to cream, freckled orange. */
vec3 petals(vec2 p, float t) {
  vec2 w = warp(p * 0.7, t * 0.6);
  vec3 col = mix(vec3(0.08, 0.42, 0.52), vec3(0.93, 0.42, 0.6), smoothstep(0.25, 0.75, w.x));
  col = mix(col, vec3(0.03, 0.09, 0.12), smoothstep(0.6, 0.9, w.y) * 0.7);
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    float depth = fi / 4.0;                       // 0 far, 1 nearest and softest
    // Drifting through the frame, each at its own pace, and swaying as they go;
    // the kick lifts them a little and the bass breathes them wider.
    vec2 c = vec2(sin(t * 0.11 * (1.0 + fi * 0.3) + fi * 2.1) * 0.62, cos(t * 0.09 * (1.0 + fi * 0.2) + fi * 1.3) * 0.38);
    c.y += uKick * 0.05 * (0.5 + depth);
    float a = fi * 1.25 + 0.4 + t * 0.05 + sin(t * 0.45 + fi * 1.7) * 0.22 + (w.x - 0.5) * 0.5;
    vec2 q = mat2(cos(a), -sin(a), sin(a), cos(a)) * (p - c);
    float len = 0.6 + 0.25 * hash(vec2(fi, 3.0));
    float along = q.y / len;                     // -1 base, 1 tip
    float halfw = 0.42 * (0.5 + 0.5 * hash(vec2(fi, 9.0))) * sqrt(max(0.0, 1.0 - along * along)) * (0.45 + 0.55 * (along * 0.5 + 0.5));
    // The edges flutter, as thin petals do in moving air.
    halfw *= 1.0 + (fbm(q * 2.0 + fi + vec2(t * 0.12, -t * 0.08)) - 0.5) * 0.45 + uBass * 0.08;
    float sd = abs(q.x) - halfw;
    float soft = mix(0.015, 0.2, depth * depth) * (1.0 + uBass * 0.4);
    float m = smoothstep(soft, -soft, sd) * smoothstep(1.05, 0.85, abs(along)) * smoothstep(0.0, 0.03, halfw) * mix(0.75, 0.92, depth);
    float t01 = clamp(along * 0.5 + 0.5, 0.0, 1.0);
    vec3 tip = mix(vec3(0.98, 0.52, 0.62), vec3(1.0, 0.6, 0.32), hash(vec2(fi, 7.0)));
    vec3 pc = mix(vec3(1.0, 0.95, 0.9), tip, smoothstep(0.15, 0.95, t01 + (w.y - 0.5) * 0.3));
    // Light through the petal: brighter at its middle, faint lines along it.
    pc *= 0.9 + 0.12 * (1.0 - abs(q.x) / max(halfw, 0.01));
    // Freckles toward the base: round, scattered, soft with depth.
    vec2 cell = floor(q * 28.0);
    vec2 loc = fract(q * 28.0) - 0.5 - (vec2(hash(cell), hash(cell + 3.1)) - 0.5) * 0.5;
    float dot1 = smoothstep(0.24 + depth * 0.2, 0.08, length(loc)) * step(0.8, hash(cell + fi));
    float fr = dot1 * smoothstep(0.75, 0.1, t01) * (1.0 - depth * 0.8);
    pc = mix(pc, vec3(0.8, 0.32, 0.12), fr * 0.8 * uDetail);
    col = mix(col, pc, m);
  }
  return col;
}

// ── FILAMENTS ───────────────────────────────────────────────────────────────
/* Thousands of fine filaments fanning into a narrow dark slit, cream to
   orange to navy, a void behind — like the gills of a mushroom seen close. */
vec3 filaments(vec2 p, float t) {
  vec2 c = vec2(0.25, -0.22) + uHand.z * (uHand.xy - vec2(0.5)) * 0.2;
  vec2 d = p - c;
  vec2 w = warp(p * 1.0, t * 0.6);
  float r = length(d);
  // The lines curl as they leave the slit, and drift with a slow flow.
  float ang = atan(d.y, d.x) + 0.35 * r + (w.x - 0.5) * 0.18;
  float n = 300.0 * (0.5 + uDetail * 0.5);
  float fine = 0.5 + 0.5 * sin(ang * n);
  float coarse = 0.5 + 0.5 * sin(ang * n * 0.13 + w.y * 4.0);
  float lines = mix(fine, coarse, 0.35);
  vec3 cream = vec3(0.96, 0.93, 0.88);
  vec3 orange = vec3(0.96, 0.56, 0.3);
  vec3 lilac = vec3(0.82, 0.8, 0.92);
  vec3 navy = vec3(0.03, 0.05, 0.12);
  float k = smoothstep(-0.6, 0.9, -p.y * 0.9 + p.x * 0.2 + (w.x - 0.5) * 0.6);
  vec3 col = mix(cream, orange, k);
  col = mix(col, lilac, smoothstep(0.55, 0.85, w.y) * 0.45);
  // The void: dark, sweeping round behind the slit to the right.
  float voidField = (d.x - 0.04) - 0.5 * d.y * d.y + (w.y - 0.5) * 0.12;
  float dark = smoothstep(-0.02, 0.08, voidField) * smoothstep(0.9, 0.0, d.y + 0.2 - d.x * 0.3);
  col = mix(col, navy, dark);
  // On the dark side the filaments glow orange near the slit and fade.
  vec3 glowC = mix(vec3(1.0, 0.62, 0.3), navy, smoothstep(0.05, 0.6, r));
  col = mix(col, glowC, dark * smoothstep(0.65, 0.0, r) * 0.85);
  float contrast = mix(0.18, 0.45, dark);
  col *= 1.0 - contrast * 0.5 + contrast * lines * smoothstep(0.015, 0.15, r);
  // A blue line along the edge of the void.
  col = mix(col, vec3(0.25, 0.4, 0.75), smoothstep(0.02, 0.0, abs(voidField - 0.03)) * 0.35 * (1.0 - smoothstep(0.0, 0.9, r)));
  // The slit, opening on the bass.
  float slit = length(d * vec2(3.2, 0.95)) - 0.04 * (1.0 + uBass * 0.8 + uKick * 0.5);
  col = mix(col, vec3(0.3, 0.12, 0.04), smoothstep(0.012, -0.012, slit));
  col = mix(col, vec3(1.0, 0.78, 0.5), smoothstep(0.015, 0.0, abs(slit)) * 0.55);
  return col;
}

// ── PRISM ───────────────────────────────────────────────────────────────────
/* Grey: dark petals and leaves against pale light, soft with depth, and a
   prism's rainbow sliding across them. */
vec3 prism(vec2 p, float t) {
  vec2 w = warp(p * 0.9, t * 0.5);
  vec3 col = vec3(0.84, 0.83, 0.82) - (fbm(p * 1.3 + w) - 0.5) * 0.18;
  // Leaves far behind, out of focus.
  float far = smoothstep(0.5, 0.66, fbm(p * 1.1 + vec2(t * 0.01, 0.0) + w * 0.7));
  col = mix(col, vec3(0.45), far * 0.6);
  // The near petals: dark, rounded, their edges soft but clear.
  float near = fbm(p * 0.8 + w * 1.1 - vec2(0.0, t * 0.012));
  float m = smoothstep(0.49, 0.545, near);
  vec3 dark = vec3(0.07) + (fbm(p * 4.0 + w) - 0.5) * 0.06;
  // Their surface: a sheen along the curve of each petal.
  float sheen = smoothstep(0.55, 0.75, near) * (0.5 + 0.5 * sin(near * 40.0 + w.x * 3.0));
  dark += vec3(0.18) * sheen * 0.5;
  col = mix(col, dark, m);
  // The prism: a soft band of spectrum sliding over, brightest on the petals.
  float x = (p.x * 0.7 + p.y * 0.6) - t * 0.035 - uKick * 0.04;
  float band = exp(-pow((fract(x * 0.45) - 0.5) * 5.0, 2.0)) * (0.55 + uBass * 0.4 + uBurst * 0.7);
  vec3 rainbow = spectrum(x * 2.5 + near * 1.5);
  col += rainbow * band * (0.22 + m * (0.5 + sheen * 0.5));
  return col;
}

// ── RINGS ───────────────────────────────────────────────────────────────────
/* Real ripples on still water, seen from above: drops fall (on the kick, on
   a clap, under the hand, now and then on their own) and rings of waves run
   out from each, fading as they spread. The surface has height: the sky
   reflects in it, a light glints off the crests, and the stones on the
   bottom swim through it. */
float dropHeight(vec2 p, float t) {
  float h = 0.0;
  for (int i = 0; i < 8; i++) {
    vec4 d = uDrops[i];
    float age = t - d.z;
    if (d.w <= 0.0 || age < 0.0 || age > 9.0) continue;
    float r = length(p - d.xy);
    float front = age * 0.32;
    float x = r - front;
    // A train of waves behind the front, wider and lower as it travels.
    float width = 0.08 + age * 0.05;
    float env = exp(-x * x / (width * width)) * step(-width * 3.0, x) ;
    env += exp(-pow((x + width * 1.5) / (width * 1.6), 2.0)) * 0.6;
    h += sin(x * 150.0 / (1.0 + age * 0.3)) * env * d.w / (1.0 + age * 1.4 + r * 2.0);
  }
  return h;
}
float waterHeight(vec2 p, float t) {
  // The still surface is never quite still: a faint breath of wind.
  float wind = (fbm(p * 3.0 + vec2(t * 0.05, t * 0.03)) - 0.5) * 0.006;
  wind += sin(p.x * 40.0 + p.y * 25.0 + t * 1.3 + fbm(p * 4.0) * 6.0) * 0.0004 * uDetail;
  return dropHeight(p, t) * 0.018 * (1.0 + uBass * 0.5) + wind;
}
vec3 rings(vec2 p, float t) {
  float e = 0.0025;
  float h0 = waterHeight(p, t);
  float hx = waterHeight(p + vec2(e, 0.0), t) - h0;
  float hy = waterHeight(p + vec2(0.0, e), t) - h0;
  vec3 n = normalize(vec3(-hx / e, -hy / e, 1.0));
  // The bottom: pale stones and sand, seen through the water and bent by it.
  vec2 under = p + n.xy * 0.08;
  float stones = fbm(under * 3.0);
  vec3 bottom = mix(vec3(0.1, 0.14, 0.13), vec3(0.34, 0.34, 0.28), smoothstep(0.35, 0.75, stones));
  // Light gathering on the bottom where the surface curves like a lens.
  float lens = clamp(-(hx + hy) / e * 0.6, -1.0, 1.0);
  bottom *= 1.0 + lens * 0.5;
  vec3 tint = vec3(0.1, 0.3, 0.32);
  vec3 seen = mix(bottom, tint, 0.65);
  // The sky in the surface: pale where a slope faces the light, deep where it turns away.
  vec3 L = normalize(vec3(-0.45, 0.6, 0.65));
  float facing = dot(n.xy, L.xy) * 6.0;
  vec3 sky = mix(vec3(0.05, 0.13, 0.16), vec3(0.78, 0.86, 0.88), smoothstep(-0.6, 0.9, facing + 0.15));
  float fresnel = 0.25 + 0.6 * pow(1.0 - n.z, 0.6);
  vec3 col = mix(seen, sky, fresnel);
  // Glints off the crests.
  vec3 R = reflect(-L, n);
  float spec = pow(max(R.z, 0.0), 220.0);
  col += vec3(1.0, 0.96, 0.88) * spec * (1.4 + uKick);
  return col;
}

// ── WATER ───────────────────────────────────────────────────────────────────
/* Light reflected on moving water: a bright band broken by ripples into
   cells and wobbling ribbons, dark lines running through it, the water
   between grey-green, a dark shore above. */
vec3 water(vec2 p, float t) {
  // The water from above: small waves crossing, moving at the clock's pace.
  vec2 q = p * vec2(1.0, 1.25);
  float wave = fbm(q * 3.0 + vec2(t * 0.15, t * 0.08))
             + 0.6 * fbm(q * 6.0 - vec2(t * 0.11, -t * 0.17))
             + 0.25 * sin(q.x * 9.0 + q.y * 4.0 - t * 0.9);
  // A lit wall or sky reflected as bands; the waves bend them into wobbling
  // ribbons that break into blobs and rings.
  float fine = fbm(q * 11.0 + vec2(-t * 0.3, t * 0.2));
  float bend = (wave - 0.9) * (0.2 + uBass * 0.08) + (fine - 0.5) * 0.05;
  float stripes = sin((p.y + bend) * 62.0 + (p.x + bend * 0.5) * 8.0);
  // Where the light falls: a wide diagonal, the rest grey water, a dark
  // bank across the top corner.
  float diag = p.y - p.x * 0.45 + (wave - 0.9) * 0.15;
  float lightZone = smoothstep(0.32, 0.12, diag) * smoothstep(-0.75, -0.45, diag);
  float bank = smoothstep(0.18, 0.34, diag);
  vec3 waterC = vec3(0.4, 0.41, 0.38) + (wave - 0.9) * 0.12 + stripes * 0.02;
  vec3 col = mix(waterC, vec3(0.13, 0.1, 0.06) + (wave - 0.9) * 0.08, bank);
  // The ribbons: a bright rim, a deeper red inside, a dark hole where a crest
  // turns away.
  float rib = smoothstep(0.35, 0.6, stripes);
  float core = smoothstep(0.8, 0.95, stripes);
  vec3 bright = vec3(1.0, 0.26, 0.1) * (1.0 + uKick * 0.2);
  vec3 deep = vec3(0.6, 0.08, 0.05);
  vec3 lit = mix(bright, deep, core * 0.75);
  col = mix(col, lit, rib * lightZone * (0.92 + uBurst * 0.08));
  // Fainter ribbons trailing out of the light.
  col = mix(col, bright * 0.75, rib * smoothstep(0.55, 0.25, abs(diag + 0.1)) * (1.0 - lightZone) * 0.35);
  // Glints of warm light in the dark water by the bank.
  col += vec3(0.9, 0.72, 0.3) * smoothstep(0.9, 0.98, stripes) * bank * smoothstep(1.1, 1.3, wave) * 0.6;
  return col;
}

void main() {
  vec2 p = (vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0) / uZoom;
  float t = uTime * uFlow;
  vec3 col;
  if (uStyle < 0.5) col = inkWing(p, t);
  else if (uStyle < 1.5) col = petals(p, t);
  else if (uStyle < 2.5) col = filaments(p, t);
  else if (uStyle < 3.5) col = prism(p, t);
  else if (uStyle < 4.5) col = rings(p, t);
  else col = water(p, t);
  col = hueTurn(col, uTurn);
  // Film: a soft vignette and a fine moving grain.
  float v = smoothstep(1.3, 0.35, length((vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0)));
  col *= mix(0.8, 1.0, v);
  col += (hash(gl_FragCoord.xy + floor(uReal * 24.0) * 7.0) - 0.5) * 0.05 * uGrain;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;class ww{constructor(e,t,r){G(this,"canvas");G(this,"ctx");G(this,"cfg",hg);G(this,"surface",document.createElement("canvas"));G(this,"renderer",null);G(this,"failed",!1);G(this,"scene",new _c);G(this,"camera",new sd(-1,1,1,-1,0,2));G(this,"material");G(this,"geometry");G(this,"playing",new Es(.6));G(this,"time",0);G(this,"kick",0);G(this,"breath",0);G(this,"hand",new Z);G(this,"drops",Array.from({length:8},()=>new en(0,0,-99,0)));G(this,"nextDrop",0);G(this,"lastDrop",-99);G(this,"lastBurst",0);G(this,"style");this.style=r,this.canvas=e,this.ctx=t,this.geometry=new ln,this.geometry.setAttribute("position",new Nt(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),this.material=new ci({vertexShader:Aw,fragmentShader:Ew,depthTest:!1,depthWrite:!1,uniforms:{uRes:{value:new Pt(1,1)},uTime:{value:0},uReal:{value:0},uStyle:{value:0},uFlow:{value:1},uDetail:{value:1},uVeins:{value:1},uGrain:{value:.5},uBass:{value:0},uKick:{value:0},uBurst:{value:0},uTurn:{value:0},uZoom:{value:1},uHand:{value:new Z},uDrops:{value:Array.from({length:8},()=>new en(0,0,-99,0))}}});const o=new Cn(this.geometry,this.material);o.frustumCulled=!1,this.scene.add(o);try{this.renderer=od(this.surface)}catch(l){console.error("Macro could not start:",l),this.failed=!0}}setParams(e){this.cfg=Ss(hg,e)}destroy(){var e,t;this.geometry.dispose(),this.material.dispose(),(e=this.renderer)==null||e.dispose(),(t=this.renderer)==null||t.forceContextLoss(),this.renderer=null}render(e,t,r){const o=this.canvas.width,l=this.canvas.height;if(o===0||l===0)return;const c=this.renderer;if(this.failed||!c){ad(this.ctx,o,l,"MACRO");return}const{cfg:f}=this,d=this.playing;d.read(e,r);const{dt:h}=d;this.time+=Math.max(0,d.step)*3,this.kick=Math.max(this.kick*Math.exp(-h*5),d.bump*f.sound.beat),this.breath+=(d.bass*f.sound.bass-this.breath)*(1-Math.exp(-h*3));const g=e.left||e.right?1:0,x=1-Math.exp(-h*3);if(this.hand.x+=((d.aim.x+1)/2-this.hand.x)*x,this.hand.y+=((d.aim.y+1)/2-this.hand.y)*x,this.hand.z+=(g*f.hands.follow-this.hand.z)*x,this.style===4){const _=this.time*f.look.flow,S=o/l,T=(P,b,z)=>{this.drops[this.nextDrop].set(P,b,_,z),this.nextDrop=(this.nextDrop+1)%this.drops.length,this.lastDrop=_},y=()=>[(Math.random()-.5)*S*.8,(Math.random()-.5)*.8],M=()=>[(this.hand.x-.5)*S/f.look.zoom,(this.hand.y-.5)/f.look.zoom],E=d.burst*f.hands.clap;if(E>.6&&this.lastBurst<=.6){const[P,b]=g?M():y();T(P,b,2.2)}else if(d.bump>.5&&_-this.lastDrop>.6){const[P,b]=g?M():y();T(P,b,.8+d.bump*.6)}else if(_-this.lastDrop>2.6){const[P,b]=y();T(P,b,.7)}this.lastBurst=E}const m=this.material.uniforms;m.uRes.value.set(o,l),m.uTime.value=this.time,m.uReal.value=performance.now()/1e3%1e3,m.uStyle.value=this.style,m.uFlow.value=f.look.flow,m.uDetail.value=f.look.detail,m.uVeins.value=f.look.veins,m.uGrain.value=f.look.grain,m.uZoom.value=f.look.zoom,m.uBass.value=this.breath,m.uKick.value=this.kick,m.uBurst.value=d.burst*f.hands.clap,m.uTurn.value=xv(t).hue*Math.PI/180,m.uHand.value.copy(this.hand),m.uDrops.value.forEach((_,S)=>_.copy(this.drops[S])),(this.surface.width!==o||this.surface.height!==l)&&c.setSize(o,l,!1),c.render(this.scene,this.camera),this.ctx.globalCompositeOperation="source-over",this.ctx.globalAlpha=1,this.ctx.drawImage(this.surface,0,0,o,l)}}const Tw=1.4,Cw=14,bw=1.2,dg=(s,e)=>1/(1+1/(2*Math.PI*s)/e);class lo{constructor(e=Tw,t=Cw){G(this,"value",null);G(this,"speed",0);this.minCutoff=e,this.beta=t}next(e,t){if(this.value===null||t<=0)return this.value=e,this.speed=0,e;const r=(e-this.value)/t;this.speed+=(r-this.speed)*dg(bw,t);const o=this.minCutoff+this.beta*Math.abs(this.speed);return this.value+=(e-this.value)*dg(o,t),this.value}reset(){this.value=null,this.speed=0}}class Rw{constructor(e=5){G(this,"recent",[]);G(this,"held",null);this.size=e}next(e){this.recent.push(e),this.recent.length>this.size&&this.recent.shift();const t=new Map;let r=e,o=0;for(const l of this.recent){const c=(t.get(l)??0)+1;t.set(l,c),(c>o||c===o&&l===this.held)&&(r=l,o=c)}return this.held=r,r}reset(){this.recent=[],this.held=null}}const pg=[{tip:8,pip:6},{tip:12,pip:10},{tip:16,pip:14},{tip:20,pip:18}];function Pw(s,e){if(!s||s.length<21)return null;const t=(x,m)=>Math.hypot((x.x-m.x)*e,x.y-m.y,(x.z-m.z)*e),r=(x,m)=>Math.hypot((x.x-m.x)*e,x.y-m.y),o=s[0],l=s[9],c=r(o,l);if(c<1e-4)return null;let f=0,d=0;for(const x of pg){const m=t(s[x.tip],o),_=t(s[x.pip],o);m>_*1.12&&f++,d+=Math.min(1,Math.max(0,(m/c-1.05)/.85))}const h=s[17];return t(s[4],h)>t(s[3],h)*1.12&&f++,{fingers:f,pinchGap:t(s[4],s[8])/c,openness:d/pg.length,size:c,angle:Math.atan2((l.x-o.x)*e,o.y-l.y)}}const mg=.32,Xf=.5,Lw=180,gg=30,vg=.08,Iw=.32,Dw=.115,xg=.16,Uw=1.3,Nw=.2,Fw=.28,Ow=.7,kw=200,Bw=.3,zw=450,Hw=140;class _g{constructor(){G(this,"points",Array.from({length:21},()=>({x:new lo,y:new lo,z:new lo(1,6)})));G(this,"size",new lo(1,4));G(this,"angle",new lo(1.2,3));G(this,"open",new lo(2,6));G(this,"fingers",new Rw(5));G(this,"pinched",!1);G(this,"gesture","none");G(this,"gestureSince",0);G(this,"lastAngle",0);G(this,"lastAt",0);G(this,"hand",null);G(this,"seenAt",0)}read(e,t,r){const o=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const l=e.map((T,y)=>({x:this.points[y].x.next(T.x,o),y:this.points[y].y.next(T.y,o),z:this.points[y].z.next(T.z,o)})),c=Pw(e,r);if(!c)return this.hand;const f=this.fingers.next(c.fingers);this.pinched=c.pinchGap<(this.pinched?Xf:mg);const d=Math.max(0,f-1),h=this.pinched?"pinch":c.openness>.62?"open":c.openness<.28?"fist":d>=3?"open":d<=0?"fist":"none";h!==this.gesture&&(this.gesture=h,this.gestureSince=t);let g=c.angle;for(;g-this.lastAngle>Math.PI;)g-=2*Math.PI;for(;g-this.lastAngle<-Math.PI;)g+=2*Math.PI;this.lastAngle=this.angle.next(g,o);const x=Math.atan2(Math.sin(this.lastAngle),Math.cos(this.lastAngle)),m=this.size.next(c.size,o),_=this.points[9],S=Math.hypot(_.x.speed,_.y.speed);return this.seenAt=t,this.hand={position:{x:l[9].x,y:l[9].y},gesture:h,pinchDistance:this.pinched?c.pinchGap*c.size:void 0,velocity:Math.min(3,S*2),holdDuration:(t-this.gestureSince)/1e3,fingerCount:f,landmarks:l,pinch:Math.min(1,Math.max(0,(Xf+.25-c.pinchGap)/(Xf+.25-mg*.6))),openness:Math.min(1,Math.max(0,this.open.next(c.openness,o))),depth:Math.min(1,Math.max(0,(m-vg)/(Iw-vg))),angle:x},this.hand}forget(){for(const e of this.points)e.x.reset(),e.y.reset(),e.z.reset();this.size.reset(),this.angle.reset(),this.open.reset(),this.fingers.reset(),this.pinched=!1,this.gesture="none",this.lastAt=0,this.lastAngle=0,this.hand=null}}class Vw{constructor(){G(this,"kept",{left:new _g,right:new _g});G(this,"trail",[]);G(this,"lastAt",0);G(this,"clapAt",-1e9);G(this,"clapStrength",0);G(this,"gap",1);G(this,"gapAt",-1e9);G(this,"closing",0);G(this,"counted",!1);G(this,"held",!1)}next(e,t,r){const o={};(e.landmarks??[]).forEach((h,g)=>{var S,T,y,M;if(!h||h.length<21)return;const x=h.map(E=>({x:1-E.x,y:E.y,z:E.z}));let _=((M=(y=(T=(S=e.handedness)==null?void 0:S[g])==null?void 0:T[0])==null?void 0:y.categoryName)==null?void 0:M.toLowerCase())==="left"?"right":"left";if(o[_]){const E=o[_],P=x[9].x<E[9].x;o.left=P?x:E,o.right=P?E:x;return}o[_]=x});const c={left:null,right:null};for(const h of["left","right"]){const g=this.kept[h];o[h]?(c[h]=g.read(o[h],t,r),c[h]&&this.trail.push({...c[h].position,hand:h})):g.hand&&t-g.seenAt<=Lw?c[h]=g.hand:g.hand&&g.forget()}this.trail.length>gg&&(this.trail=this.trail.slice(-gg)),c.gestureTrail=[...this.trail];const f=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const d=h=>{this.counted||t-this.clapAt<zw||(this.counted=!0,this.clapAt=t,this.clapStrength=Math.min(1,Math.max(.7,h)))};if(c.left&&c.right){const h=c.right.position.x-c.left.position.x,g=c.right.position.y-c.left.position.y;c.distanceBetweenHands=Math.hypot(h,g),c.twist=Math.atan2(g,h*r)}if(o.left&&o.right){const h=o.left[9],g=o.right[9],x=Math.hypot(g.x-h.x,g.y-h.y),m=(t-this.gapAt)/1e3,_=m>0&&m<.15?(this.gap-x)/m:0;this.closing=Math.max(_,this.closing*Math.exp(-f*12)),this.gap=x,this.gapAt=t,x>Bw&&(this.counted=!1),x<Nw&&this.closing>Uw&&d(this.closing/2.2),this.held=x<(this.held?xg:Dw),this.held&&(d(.7+this.closing/3),c.clapping=!0,c.clapIntensity=Math.max(.6,1-x/xg))}else t-this.gapAt<kw&&this.gap<Fw&&this.closing>Ow&&d(.75+this.closing/3),this.closing*=Math.exp(-f*6),this.held=!1,t-this.gapAt>1200&&(this.counted=!1);return t-this.clapAt<=Hw&&(c.clapping=!0,c.clapIntensity=Math.max(c.clapIntensity??0,this.clapStrength)),c}}const Gw=25e3,Ww=5e3,Xw=2e4,jw=6e4,yg=640,Kw="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",Mg="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";function qw({videoElement:s,onHandData:e}){const t=It.useRef(new Vw);return It.useEffect(()=>{let r=!0,o=0,l=-1,c=null,f=null,d=0,h=0;const g=()=>s.videoWidth&&s.videoHeight?s.videoWidth/s.videoHeight:16/9,x=(y,M)=>{r&&e(t.current.next(y,M,g()))},m=async()=>{if(!(!r||f))try{const y=await import(Mg),M=await y.FilesetResolver.forVisionTasks(`${Mg}/wasm`),E=await y.HandLandmarker.createFromOptions(M,{baseOptions:{modelAssetPath:Kw,delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5});if(!r){E.close();return}f=E,console.log("✋ Hand tracking is running on the page.");const P=()=>{if(!(!r||!f)&&(o=requestAnimationFrame(P),s.currentTime!==l)){l=s.currentTime;try{const b=performance.now();x(f.detectForVideo(s,b),b)}catch(b){console.error("Hand detection error:",b)}}};P()}catch(y){console.error("Hand tracking could not start:",y)}},_=y=>{c&&(console.warn(`Hand tracking is moving to the page: ${y}`),window.clearTimeout(d),cancelAnimationFrame(o),c.terminate(),c=null,m())},S=()=>{if(typeof Worker>"u"||typeof createImageBitmap!="function"||typeof OffscreenCanvas>"u"){m();return}try{c=new Worker("/hand-worker.js")}catch{m();return}let y=!1,M=!1,E=!1,P=!1,b=!1,z=!1;d=window.setTimeout(()=>{y||_("it took too long to start")},Gw);const L=()=>{if(!r||!c)return;if(o=requestAnimationFrame(L),M){performance.now()-h>(b?jw:E?Ww:Xw)&&_("the worker stopped answering");return}if(s.currentTime===l||s.readyState<2)return;l=s.currentTime,M=!0,h=performance.now();const k=h,A=Math.min(yg,s.videoWidth||yg);createImageBitmap(s,{resizeWidth:A,resizeHeight:Math.max(1,Math.round(A/g())),resizeQuality:"low"}).then(U=>{if(!c){U.close();return}const W=gw();W&&!z&&(b=!0),c.postMessage({type:"frame",bitmap:U,time:k,mask:W},[U])}).catch(()=>{M=!1})};c.onmessage=k=>{const A=k.data;A.type==="ready"?(y=!0,window.clearTimeout(d),console.log("✋ Hand tracking is running in a worker."),L()):A.type==="hands"?(M=!1,E=!0,A.mask&&(z=!0,b=!1,vw(A.mask.data,A.mask.width,A.mask.height)),x({landmarks:A.landmarks,handedness:A.handedness},A.time)):A.type==="note"?(z=!0,b=!1,console.warn(A.reason)):A.type==="failed"?_(A.reason):A.type==="error"&&(M=!1,P||(P=!0,console.warn("Hand tracking worker:",A.reason)),E||_(A.reason))},c.onerror=k=>_(k.message||"the worker failed"),c.postMessage({type:"init"})},T=()=>{r&&(s.readyState>=2?S():window.setTimeout(T,100))};return T(),()=>{r=!1,window.clearTimeout(d),cancelAnimationFrame(o),c==null||c.terminate(),c=null;try{f==null||f.close()}catch(y){console.warn("Error closing hand landmarker:",y)}f=null}},[s,e]),null}const Yw=40;class jf{constructor(e,t){G(this,"history",[]);G(this,"last",0);G(this,"pulse",0);G(this,"threshold",0);G(this,"recent",[]);G(this,"peak",0);G(this,"flux",0);this.refractory=e,this.decay=t}measure(e,t,r,o){for(this.recent.push({at:r,rise:e,heard:t});this.recent.length&&r-this.recent[0].at>Yw;)this.recent.shift();let l=0,c=0;for(const m of this.recent)l+=m.rise,c+=m.heard;this.history.push(l),this.history.length>90&&this.history.shift();const f=this.history.length;let d=0;for(const m of this.history)d+=m;d/=f;let h=0;for(const m of this.history)h+=(m-d)**2;const g=Math.sqrt(h/f);return this.threshold=d+g*1.9*(1.5-o),this.flux=l,this.peak=Math.max(l,this.peak*.9985),f>=20&&l>this.threshold&&l>this.peak*.5&&c>1.2*(1.3-o*.8)&&r-this.last>this.refractory?l/Math.max(1e-9,this.threshold):0}commit(e,t,r){e&&(this.last=t);const o=this.peak>0?Math.min(1,this.flux/this.peak):0;this.pulse=Math.max(this.pulse*Math.exp(-r/this.decay),e?Math.max(.4,o):0)}}function Qw(s,e,t,r){const o=s.map(c=>c.hits.measure(c.flux,c.audible,e,r)),l=Math.max(...o);s.forEach((c,f)=>c.hits.commit(o[f]>0&&o[f]>=l*.7,e,t))}class Sg{constructor(e){G(this,"ceiling",-100);G(this,"floor",0);G(this,"seen",!1);this.minSpan=e}place(e,t){this.seen||(this.seen=!0,this.ceiling=e,this.floor=e);const r=l=>1-Math.exp(-t/l);this.ceiling+=(e-this.ceiling)*r(e>this.ceiling?.5:60),this.floor+=(e-this.floor)*r(e<this.floor?2:60);const o=Math.min(this.floor,this.ceiling-this.minSpan);return Math.min(1,Math.max(0,(e-o)/(this.ceiling-o)))}}function Jw(){return{overall:new Sg(14),bass:new Sg(14),overallSlow:0,bassMid:0,highFast:0,highSlow:0,out:0,onsets:[],energy:0,build:0,drop:0,bright:.5,heard:0}}const Ag=-75,Zw=2.5;function $w(s,e,t,r){const o=T=>1-Math.exp(-r/T),l=T=>Math.pow(10,T/10),c=T=>T>1e-10?10*Math.log10(T):-100;if(s.overallSlow+=(l(e.overall)-s.overallSlow)*o(2),s.bassMid+=(l(e.bass)-s.bassMid)*o(.5),s.highFast+=(e.high-s.highFast)*o(1),s.drop*=Math.exp(-r/1.2),s.heard+=r,s.heard<Zw){s.highSlow=s.highFast,s.energy=.5;return}s.highSlow+=(e.high-s.highSlow)*o(8);const f=c(s.overallSlow)>Ag;s.energy=f?s.overall.place(c(s.overallSlow),r):0;const d=s.bass.place(c(s.bassMid),r),h=s.bass.ceiling>Ag;for(e.onset&&s.onsets.push(t);s.onsets.length&&t-s.onsets[0]>2e3;)s.onsets.shift();let g=!1;h&&d<.4?s.out=Math.min(30,s.out+r):d>.65&&(s.out>=2&&(s.drop=Math.max(s.drop,Math.min(1,.55+s.out/14)),g=!0),s.out=0);const x=Math.min(1,Math.max(0,(s.highFast-s.highSlow)/18)),m=Math.min(1,Math.max(0,(s.onsets.length/2-3)/5)),_=Math.min(1,s.out/6),S=f&&s.out>0?_*_*(3-2*_)*Math.max(.1,x,m):0;if(s.build+=(S-s.build)*o(g||S<s.build?.25:.7),e.centroid>0){const T=Math.min(1,Math.max(0,Math.log2(e.centroid/300)/Math.log2(16.666666666666668)));s.bright+=(T-s.bright)*o(1.5)}}const Av={bass:[20,160],lowMid:[160,800],mid:[800,4e3],high:[4e3,12e3]},eT=Object.keys(Av),tT=.002,nT=.04,iT=.25,rT=.0016,sT=6,oT=90,aT=170,lT=1.9;function cT(){const s=()=>({floor:255,ceiling:0});return{envelopes:{bass:s(),lowMid:s(),mid:s(),high:s()},overall:s(),previous:null,flux:[],lastBeat:0,onset:0,rise:0,punch:0,lastNow:0,kick:new jf(170,.16),snare:new jf(170,.13),hat:new jf(70,.06),sections:Jw()}}const fo=new Float32Array(256);for(let s=0;s<256;s++)fo[s]=Math.pow(10,(s/255*70-100)/20)*1e3;const Kf={kick:[30,150],snare:[1500,5e3],hat:[6e3,12e3]};function Eg(s,e){s.floor+=(e-s.floor)*(e>s.floor?tT:nT),s.ceiling+=(e-s.ceiling)*(e>s.ceiling?iT:rT);const t=s.ceiling-s.floor;return t<sT?Math.min(1,e/190):Math.min(1,Math.max(0,(e-s.floor)/t))}function qf(s,e,t){const r=Math.max(0,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=s[c];return l/(o-r)}function wg(s,e,t){const r=Math.max(1,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=(fo[s[c]]/1e3)**2;return l>0?Math.max(-100,10*Math.log10(l)):-100}function uT(s,e){const t=-100+10*Math.log10(Math.max(1,e))+5;return Math.min(1,Math.max(0,(s-t)/(-32-t)))}function fT(s,e,t,r,o){const l=e/2/s.length,c=X=>Math.round(X/l),f={};for(const X of eT){const[F,N]=Av[X];f[X]=Eg(t.envelopes[X],qf(s,c(F),c(N)))}const d=Eg(t.overall,qf(s,c(20),c(12e3))),h=c(1e4),g=new Float32Array(h);for(let X=0;X<h&&X<s.length;X++)g[X]=s[X];let x=0,m=0;if(t.previous){for(let X=0;X<g.length;X++){const F=t.previous[X]??0,N=g[X]-F;N>0&&(x+=N,m+=fo[g[X]]-fo[F])}x/=g.length}t.punch=m;const _=t.lastNow?Math.min(.1,Math.max(.001,(o-t.lastNow)/1e3)):1/60;t.lastNow=o;const S=X=>{var Ae;const F=t.previous;if(!F)return{flux:0,audible:0};const N=Math.max(1,c(X[0])),Y=Math.min(s.length,Math.max(N+1,c(X[1])));let D=0,V=0,Se=0;for(let Me=N;Me<Y;Me++){const K=Me<F.length?F[Me]:((Ae=t.above)==null?void 0:Ae[Me-F.length])??s[Me];D+=fo[s[Me]],V+=fo[K],s[Me]>K&&(Se+=s[Me]-K)}return{flux:Math.max(0,D-V),audible:Se/(Y-N)}},T=S(Kf.kick);Qw([{hits:t.kick,...T},{hits:t.snare,...S(Kf.snare)},{hits:t.hat,...S(Kf.hat)}],o,_,r),t.rise=x+T.audible*.5,t.previous=g,t.above=s.slice(h),t.flux.push(x),t.flux.length>oT&&t.flux.shift();const y=t.flux.reduce((X,F)=>X+F,0)/Math.max(1,t.flux.length);let M=0;for(const X of t.flux)M+=(X-y)**2;const E=Math.sqrt(M/Math.max(1,t.flux.length)),P=lT*(1.5-r*1),b=y+E*P,L=t.flux.length>=20&&x>b&&x>.35*(1.3-r*.8)&&o-t.lastBeat>aT;L&&(t.lastBeat=o);const k=b>0?Math.min(1,(x-b)/(b+.6)):0;t.onset=Math.max(t.onset*.9,L?Math.max(.35,k):0);let A=0,U=0;const W=Math.min(s.length,c(1e4));for(let X=Math.max(1,c(100));X<W;X++){const F=(s[X]/255)**2;A+=F,U+=F*X*l}const B=wg(s,c(20),c(12e3));$w(t.sections,{overall:B,bass:wg(s,c(30),c(160)),high:qf(s,c(2e3),c(12e3)),centroid:A>.05?U/A:0,onset:L},o,_);const q=.6+r*1.2,ce=1.5-r,ue=1,j=X=>ue*Math.min(1,q*Math.pow(Math.max(0,X),ce)),te=L&&ue>.15;return{bass:j(f.bass),lowMid:j(f.lowMid),mid:j(f.mid),high:j(f.high),overall:j(d),beat:te,beatIntensity:te?ue*Math.min(1,Math.max(.3,k)):0,onset:ue*t.onset,kick:ue*t.kick.pulse,snare:ue*t.snare.pulse,hat:ue*t.hat.pulse,energy:ue*t.sections.energy,build:ue*t.sections.build,drop:ue*t.sections.drop,bright:t.sections.bright,input:uT(B,c(12e3)-Math.max(1,c(20)))}}const Tg=[.35,.45,.8,1.15,1.5,1.9],hT=3.6,dT=2.2,pT=6;function mT(){return{rate:1,clap:0}}function Cg(s){if(!s)return null;if(s.gesture==="fist")return Tg[0];const e=s.fingerCount;return e===void 0?null:Tg[Math.min(5,Math.max(1,Math.round(e)))]}function gT(s,e,t){const r=[Cg(s.left),Cg(s.right)].filter(c=>c!==null),o=r.length?Math.max(...r):1,l=Math.min(1,t*pT);return e.rate+=(o-e.rate)*l,s.clapping&&(e.clap=Math.max(e.clap,hT*Math.max(.5,s.clapIntensity??1))),e.clap=Math.max(0,e.clap-e.clap*dT*t),e.rate+e.clap}const vT={dust:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD51PXOBSjr0HNJjGAe3fFLz6k0ABBC5oOeMd/SnJI8Uquhw6nIIHepLhmaczSGMmUlzsAUDJ5GAAB9BxQBCFLNgcn0JpXRo5HRl2spIIPr6U9HRmxMZCoBxtI4Pbr2zTFXcRghB79KAG9PQ0oBHp1q8NKuJYY2t40lLMIx5UisXY5IGM5zx6enqKpvDJESHUjkjn260ANwcjPNA78+3FTW8E15PFbwohkY7F5CjJ9SSB+Zpz27szhSSsYwWA3KOmSWHGMnr9KAKw454IoweO1TpHE85WSb7OhxhiDJ/KkGwQjYru7A71KjC88YP/6qAIe2MClx0/nQFJIwcH0qxFbsy8XEKsWKMjPg9Mk+gHbr1oArqrM3AJPp3o6dyeeMd6nuRAZWe0ikS3Zj5fmuGfbnjJAAzjGeKW2vpbJJfs7mKWRShkRypCEYZfTB/pQBE0JWBZGaP5icKHG4Y9R1H41GQc5qZI5ViM4wE+7nI6kenWolxvAfJXPJA5x7UAA+g4o6c+npQeuRwPSkPH0oAMdADS854GKAADgjNHfpzQAAZ9qleFoZADtlAw3ynIwff+fvTXEZdRDubcBkY6N3A9fr+lOliVJGCiQLtBG8YOPWgBAyl2ZBs3NgKGzgfXv6VJdSRzzblt1hwoV9vQuOpAHAz6DimR4UkjJKNkleeP8A9eKsyvc3TRPLO+1VKRCQ5CruJ2gemSeMY5NAFdRvRuQ4QZAPUjPTHaljiacOqJGhRPM5IGQBzyfbPHftVu7jjikkUyW0xIAZ4sBVZiGO0DrjkcYHaokljjidkuTG8ZATEfMgOQfm7AADg/3jQBGbiJrMxGHMgIw6thcDPVQPmPPUn2pYI1nMnzKuzlsybPMGQNqjHJ6fgPap/swvFLIJC5H7hMfewwyOB1wSeoHv2oSOCRHhd5pCIN6Mq7yrLywI4wvXJ5wBnmgCo8SuFaNCiMTt3MDkEnHPr26YpPIkZgY4nG47ce//AOsU5gyXH79RKOVGG4OOOo9KbKrrMwm3iUcENx9KALHk74muDAkcZGxP3hAVxjPbk98f7Qq3GqarFbNd38MIt3jtgkrBSIfmO5cDBC4IOSTll684rXKxxW3lx28mHYMHkGOQMEKAT33Dqeg6VGUkaAs0yKYMbY3b5iDk5A/DJ+ooAnu4IgLiW0tpprXztsVw+chQDgEDjJBBOemMetQ2yxpFcLM0UTjAXzAxP3sEAAEAjrk44XA64qXSjch5Ra3kkMkimIxRhmaVWUhgAODxxg+tVZ4ZkYGY/M43AcHIPOeKAI2RScBwz/dxtI4+pphAB+U575qa2tXuZCqsi7VLEuwUYHYZIyfQDk9qaLeQAkjAAJ+bj9KAI+n9fejtSnk9OKQ4yORQAdunFAB7d6AcDjk0gJzigC1aCNXzJ5uwfe8r7y+/4fhU6LetCvkIj8sq+WA0hBByMdSuAe3HXrVa1nEEgYDD54bdgY7gjuD/AI1Zhv57aWaeCeS0W43xOts+zMbdUAz9zsRnpxQBSjZc5cE8fKQcYPY9OlaFrbG9mULtjVEYmQgkcZOeOQM8fjVaAbZgdp5PHl/NxjkDr29f6VO93LbPLb2pRU8w7QrCRgNpTAfHIwT04PWgBLm4+1xrNHCsflxBZv3jEyncdrHPGcFRxx8ueuaryxr521HUoFUZXOCcc9ff/wCtSJ5gUFBhc8Z+nX3+vamlCjI2QG+8Ce9AGxaWLXq3FqLuGHT7Y+ZJcmMgHoM4xvb5sYUdNxIAyaqSR2n9qrh5IbZuN08ZztI+9hPUY4GevXFQzh1u95TyJIgjDyyflGB8wJ5yTzn1NQt5pbO4s33gc5xk9/rQBOWQWySxNFvMxBUrukwACD0xjt9c1LcTs7JM4LyAbjJPhtx75z75IBz160TXc9zdx3UCi3kEYA8g7dowRxjpkZJ7/wAqrPNG/lrKnllIyCV5LtnqRnqen60AXZmsonYWlzK8JUshmXYd+fQMduVHXnk/iJLSSFNRjFvbbvNHlATShF8zGMiQgAAEq2Tg8cnmqDKt6ryqY4fKjUEEnMpzjI/r2qawlFtcwyxyzR3EbM4WFFbDAfKeTznkH+R6UAMjMlnKkkUhiuIf3u5X2OrZwMe4POBz1PSomlmEZiY+WDl+mS5Iwfm68jt0/Gnxh3uC6RIQrKxiY5D85xj09cfpTjJbvI8kYaCUu7/uhmMA9lU8jALdSe34gEDtuMmyMQgAEqrHGfoTnrUt5cxyTTC3eWSGVg5e4VTKTjnLD3J4+melRTSDA2xxgqqgFM4yBySDySfyznHGKhJCr1U7uc9x7UAIoyc/pRge2e9Jk55FL14z+dACfzNKPXNJnPTHHalCg9KAJUQtEwEeSo3FsgcD69f50szrO4CL5cYHCs5IXjnGfU5NTJNMYhaPJGsKHzFJJZVYjrgcEngHg9hwBUcsclodskUkc4AJWRdpAIBUgEccc59CMUANjaWONipG1uPXP4fjSpGJJGdX2x4yzycBSR0yM55/P2oCgQq0kJAbIDg43D+XBoJSMowLgEZBZeF5wSB0PegC4mnXlxpUl0kMv2eH95gAkAEAFvYcDk/QZ5xPbrpsHkJdEG5S4CujZMTRkcMGUg5HpnBH0qvYyxs6xPOsCIwYSPllVxwGIwSVHPAB7dadIJXa9EdwJosn5xtQOM5DYPb5eg5HHSgCoiC4fdLcqmCAwx8x9cdifrjNWJbJoIfOWzL20jZSVuSO2zIIBOSAR60p3XFtGk6pFDZgpgKeS2TyRyST/KoI7N7mNVg3SyRgsyohIRBjLH8T29KAH8OWiwSsS467VHXIOB2J6mh2mFnFBJNHKvVVDqwGecZ7H8eM0bY4p3aAh0cmMRSn94wI6kDpnPH+TVx7WK3uj9rdA6fLKsbDcjAbcKRkY6HJ64zQBDC8MmntHPHIZFAEUSIPmHzEncTlcZBwAc98Dmktra3SOCU30kbuctsjJKBWOCDnk8Dp6+1RzQm3jhjnlLFC2USUHyx347Z4PuAafZ7Yg264MZQgyQKv31HTvycnoOR1oAikij+zPcQoETIUgzAsWJJGB1xgYPoRyeQKdbRr5aCS7Ft5owAE3Dbzgn3JwPUYz6VA6rM4itkZtzEqAMn8vp25/rVq9aO30+G2WFA7gStui/eLkcAueSCMMAvy8jqc0AUmhmFuZRGxjVtjSgEruxkLnpnAJx3oS4ltxIkMp2yDa2B94fjQsjuDGrEKPmCkk5P4d6iJyxxhec4Ax+lACvHJFI0ciMjqcMGBBH4GkPA/xFS3Mv2i5kmLSMzncTI+9j9T3+tREc5xmgBOD649qU9e3PtQODx0oB4x1oAUEDGCQw65rTOs319FbWl5cNPDA2YEZc+Vk8hB2B9BxkD0FUYPKCSSSru+UqiZI+Yg/NkenX3pkZZJMgHeDgEckfSgCfc22S0Uq8KOXyuCeOM7sAkY7d/SrUeowxZQ2kE3zBkzn5T1AOfvAc/XPJOBVJpprto42b5YsiNGY7UGSxAz0BJJ+pqSGWORpBNIIozG2FEe8E4yqgZ4yQMntz16UARiKJk8zJBOMgdu2fzpgVlQuGHC464PPBA55q5Pd2zQLGIIi7BWd44yhU5OVAzjGMcjFMsZIPP8uZvLilGwuzkBcnqcA5GPXNACg+XZzROuDKq7Qr53HOd3vgdqVn+1yQrDOsQigyDIQnzKCSM9ySDjPPIFQ3EkayMloZfJ4P73aWyPQgevpipg89u6Tl/JuLYLIvzBSBxtI5znJHA5HWgBLLyZGDSxGRi43EOFY5I4GQfz5xnpVkNJZaki3FvFGFhLRiaJeUdSVYgj5zhgQSO49BVaO4uI4iihPMkIm8xQvmA4PRuuMdsjnHFVDIzhlBABIJGc89M5/E/nQBJclZZDIpGHbO3GNv8AjU0V5iVibaLe8ZiPyDHPGQOinGOR9etVwU2hW3K4Jy2Tz6DH+etSXF7NdGFLiUyLEpVM8BQSTwB7nOKAJPtL7AscxjDuPMLNwSDkZA6gdfzqOZnmcqH3BARgLtAAxnA/Cp7W9ksYw/ls3ng7g+CsiZHB7/eXtjpTLW7+z3AuEhhkEYOYpVypzkfjjIP4DrQBFDOIoZISiZYgrJt+ZcZGM+hzyPYdKieQSMWZVyRggDGD9KXz5MDcQwDb8MBjPHNM3fKAFAxnkdTQAhwPyo6HB/8ArUuffrTSfY+9ACjk9eaAB/jSZ4wO1A44zQBMs5WIRqEXnO8L82CMYz6e1Ai3TJGrxyF8AYYgAnjk8VDyMkfnT0fYwbCsc9CuR/8AXoAHXYzLkFgcEg5B+hFW7OzYxPeNbm4ggZfMXcVXnJwW7ZCN3z6A1UjZY2+aJX9mJ/pQZHEZjDHyyQxXPBI6E/r+dAASX7Dk5wBUsE6QxSAR5kZSqtxgAgg8EHsfb1ot7trWdJY44m2c7ZYw6k46lTkH+VNjnZbSW32RMkrK25kBZSucYbqM5OR0PGegoAC6tlY4gWfbjqWB9ue9W47r7DefarWSUyCMoTKoDISCreobjI6dD681TklDj5YUjzj7ue3fr1PrTQfnyVDH0YZoAkad5JIUlLOkfAC4zt9AcH8KdcRES72DRrIokjyAMp0HTHp1xyaYsMvkmaMZRANzL/Bk4APoTimxzNDHLGgTbKAGygJwCDwSMjkdRzjjpQA1mJzuO7vzVhLhrSeQ25IDxtEfMUEgMu1uD06nnqPrUKShIpkMUTmVQoZs5j5ByvPU4xzngn60u6N3VpC5yuDjGSccf0oATKlQNxOOx4/KnPIWt4kMUS7QRvC/M3J6nv1x+FNKYVW3KQewPI+o7UzLcZzgfpQA5ypJ2g4z3PNNHUUdR2xSZ56UAKP1ozj6CkHH8VL0P+FACE8gdqcB+lFFACN1x6DNIDkiiigBSAMflSNkAc9RzRRQAZJY+1OxzRRQAnv74oxljmiigBPQetKflAx2oooAB1/HFL0GfSiigBO+PYUYyM9zRRQAgGTjtQTx9aKKAFxjOO3NLjJC9jRRQB//2Q==",line:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5tooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKK04vDOuzDMWi6jJ/u2sh/pSyeF9ehGZNE1FB6tayD+lVyS7AZdFSzWs9u22aF4j6OpU/rUWCegzUgFFFFABRRRQAUUYPoaVUZjgDJ9KAEoqzHpl/L/q7K4k/3YmP9KnGgaww40q+P/bu/+FVyvsBn0VqL4X15zhNE1FvpayH+lWY/A3iubHl+GdYfP92xlP8A7LRyS7AYVFdXF8LvHU3KeEtYA9XtHQf+PAVY/wCFSeNVGZdFMH/Xa5hj/wDQnFNU5S2QHGUV2P8AwqvxUDg2+ng+h1W0z/6Npw+EnjNx+60mOf8A643lvJ/6DIaapzeyYHGUV1c/wu8c24JfwpqzD1jtXkH5qDWXceEvEVp/x86DqcP/AF0tJF/mtTyy7Ae+SatZn72q2LD1fxPrLfqIgKYmq6aTtXXdJjb0TxtqMB/8ix4rYfVrUr8ni3TA3oPiJcA/+PQYplnrd+9yEtPEGpXQzjbYeLtOvM/hPGM/jW6qv+rCKVpd391N5dnqusXQ/u2PjOxvx/3zOoJ+lNu9Cv5Z/wDTtJ1WZT31DwZa3wP/AG0tWDH61q6poeqTTia80nVrpGAO6/8ADOmakp/G2cMaoT+H7KFluI9HsYD3KeF9Y0xgf96FmUfhSVRpWA5298NeHPNIu9K8OKc8mXT9X0xvx4ZRVX/hDPBExH+jaCD3EXiK6X9GtSa7m2vPLURK8qbeixeI9ci/8daFq0oZL10B8jWXTpvTVdcnH/jluv8AOnzr+v8AhgOCtfht4WmYG30SC7/643+o3P6R2Y/nWzb/AAy0SFDJD4Vg+Xn99pl8wH/Arm4gX9K65tK1CWDzkF9dxqNzx3kOoFAPrd3kQ/Ssn/innnH7zRtNvVPVm0e3A/8ASh6XOrbfl+YGZFaeHbKTy1TRNPmX30a3wfqzXD1dTUTEu2HWI5R2Ftrcij/yWsAPyNan9q3n+r/tD7dGOn2PWblV/K1sVH5VE817KRsttXUn0v8AxDJ/6DGtHtX/AF/VgM1r65fObi9f/uL663/oMCimiS4kPH21v+33xC3/ALJWgy6geqa0B/108SN/SlW3upDh5NZTPrbeI5P5sKXtL/0v8hlVbO8kHzQ6kAe+3xHJ/hUi6BPOeLK7uT/dk0fVXH5z3aCro8P3E+3yoZr0n+G40TUiPznvFH51Xv8AR7WzYDVfDWm2oHV10vSoz+c925/Oj2jQinceH47Ubr3w9YxL/efSdORv/Ji9Y/mKp7dDgb5FtoSOyjw7F/8AFVc+2+HbNs2WpW9mR2N14fh/lG386kTxJvO2PX2l9Bb6roTH8jCKTqXeoFSMW91hIRNNnjEbeHZP0wKLnwvc48w+G7maM/xS+FdKvB+dvKD+Vac+kXuqWhni03Xb1R1L2Gg3q/khVjWanh+1aJ47rw9ZROOQbj4f3Ab/AL+WsmPyo57jKcnh+zij8w6HZ2zL1Z/B+p2Z/wC+reRhUcV7a2vyi8srbHprWuWf/jrI2KktrnTtLnwJ9KtMdv7S1rSMf8BIIFaa6zp78p4n0yM+n/Cw73+TQk0/aPf+v1EKnii5imAg8XGQ+lp4vsLg/gJoRV68tdU162FwbXX9U/vmez0LUEP4IysRVKLX7zVE8htY1G/B6CHVdCvR+UiKTUJ8Pzeb5svhdrlT/HeeELC7z+NtMP0qOTqMlTw/aNFsuPD1hayL0b/hAbpZD/wO1mI/EVPbWdxajbBb6mE9IIvEVoP++RuFV10SFG3RaUtmfS38I6tbY/78zkVfgs7wDbHcaqo7Kul66B+TXCj9aXKwJ4knchWXX4PcS+Ipf0IX+dXJbDUYYvO2zajaJywv7S52/wDk5fKP0rOmtLi2UveaXFcRf3r7Tdv/AKV3+PzFZq3egQTCSyutJsLkHJ/faNb8/RI52/WnyMC4JvDb3AktrnR9KvwctmTR7dR/3ys7/rV8+IbuU7Z7ptSUDANprF4B/wCStkoqi/iS4uOJNQkvvQ2+sX2PytbJB+Rqu9/dyHKSalGP+u/iOT+QFP2bAtyT3MjEpFrUf0ufEUv8kWmA35GRJrQ/7Z+JD/WqTG6frJfEH+9b+I2/9mpy2tzJ/wA/7Y/6h3iF/wCbilyAX0ju3OGudZUe9l4ik/nIKl/si6kYeTbTX+e1xoGoH9bi7UVnppNw/TS57rHaXw9qLD857tRVe50+ziGb7w/p1sB/F/ZGlQt+dxduf0p+zYF6+sNPt3B1bw1plpjq8emaTC3/AJHunP5iqses6RYP/wAS7W7axA7NqOgwY/74haqkWsadYHFnqdnZkdv7R0G3x+Cwvj86kPjK9Pyx+Ktw9IvFWlL+n2cCjlQi+fHl+SAnjBJPaHxDo5P5G3AqwLzWNdtX/eeJNRYDjyW0C+U/8BAUmqC6nrWpQFVn8Q3o/wCmNxoeog/8B2qTWRLYrE0j6po4UY5bV/AIYfjLat/Kn7PYZej0iFZJRqPh6FcqcvqXw/MxH1ktXx+NULC/0PTr7C3Xhyz5xiPU9W0I/wDfJBAqlpl9oVpcuba68K20g6C11vU9EcfRXBUVq2us6gZs2er6sw/6c/HNldj/AMjrU8oFmfW4EmJt/E1lGp6eR8RmkH5TRE0sfiWRuD4wgUeknji2H6rATWh/betFAZLvxI4xyZNR0CT9StVp/FeoQ5U6/qNqP+m+u6Hbj844iaOUDzp/iv4ev1/0yfWHPcXWkaXdj8zGhNEfjnwK+C8elg+s3g+BT+cVwteMUU/au9wPcF8deCIwCs2kgeieHrhf0+2AU2T4j+B1HNvbT/7nhqM/+jrpv5V4jRT9rID2X/hbPheyffYabfK3rDp2mWv8oJD+tNm+PLFdqWeuMo6A660Q/KGKMCvHKKXtZdAPU5vjdcSjH9k3rj/pr4h1Fv5TCqx+MUrZzoCn03axqJx/5MV5rRS9pID0Y/F6U/8AMvwH/e1TUD/7cVFJ8WJXHHhnST/11mvJf/Qrg159RR7SXcDtpviddPzH4Z8Lxn1OlrKf/IhaoR8UfEcR/wBGXSbP/r30i0T/ANpVx9FJ1JN3uB2g+LvjhT8muvGPRLeFR+QSkPxa8ZuMS6rHOPSayt5B/wCPRmuMoqvbVH9p/eFjsl+JN5Jn7d4e8M3+epl0mJGP4xBD+taWnfE3TrI5XwzJp7f39I1i6s8fQFnH6V53RSVSSA9ktfjFZGMpLrPjOFT/AATXNtqCflNGCaG+I3hu4O6fVJ5T/wBPPhPTZD+YYV43RTdRtWA9i/4T/wAIJz5yE/8ATLwhpyn8y5qVPi3oVmv+i3Otg/8ATDS9Ltv1ETGvGKKFUcdgCiiisgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k=",dandelion:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5UooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopaApIzjigBKKKKACiiigAooooAKKKKACiiigAortPAPwq13x9cW5tY/s1jNM0H2uRcruUZYAdyAQT9a9J1L9nPSdJvbWzm1DWbhncRzSW0MTi3YnALjdlR0PfhqAPAqK9S8dfAbWfDOjnXtKkOqaZHjzgq/voBjO9lXI2e4PHGeteW0WEmnsFFFFAwrS0DRLjxBqcFjBx5kiq74z5ak4LEeg61m16T4L0af/hHM20gt572ZWkZ1xmAZGMjnaT29qqKuyZXtodf4e8AeEYUkgWRJWhIP2ySXcJXBxgqOAMnp/OuhkOm6Xpq6XdW+m3t+uJYFSxjZVZsjIXHzduT14+tRWVlCY47kvFArABLaNMRkjPzZ7daXVNCuJZvtLJNEJF2mRH2qTtGM9wOtdKp9jnhQqVNb7GDdfBqy8W6fJd2Rh0vUpCzxRwrmGUgD5SB/q8446DJPFeIX1jcabeTWd1GY54XKOh7EHBr3Gz1bU4b7+w4o5rN2jAguIWKbvQkDgjpg4/OvPfiUtzfS2mrXMW2WRWglbbhndCcs3r1AHsKxnFWuh0pTUuWWxxFFFFZHSFFFFABRRRQAVf0HS31vW7DTIyA93cRwAk4xuYD+tUKv6Dqr6HrdjqkYYvaTpOArYJKsDjP4UCfkfXOi2F34Y+x6XJYeZb6RbfZoJMhUjOR84IAO7GcsCc/hWtq15e2mmX0enGy1OS53eYp+VU4x97v+fqfaqlv4r0nxNaw6rpl5BcWlxH5xiDAurd0Izwwzgg1zkF9ZvLPbiPEbMZfKjJUqOcgjPY+ldcaaPNVSVRvm0safhvUYnk/s7VPLuke3MTiJNyxqTkxnHVeB8x57Zr5j+JPhuLwn411TSreQSW8cu+Fh/zzYblB9wDj8K95gmt9HF/dqI7YzASXTZI2gcng9Dj8/rXzv4t1tvEPiK+1I7ts0p2AnOFHCj8gKzq2SOihCak23oY9FFFYHWFe3eA7RdW8E6a0Yb9zJNbSMmeGJ3LkdxyPYYrxGvQ/hN48tvDV3LpWsSEaReMCx25EUnQMe+PX8+1a0mlLU1o8vNaWzPT4JYrWR0kKlY48AuMgn34xyfzrpdZ1iKPw2t1cRRlXdYRuHIB46d8c59s1jeKobBb2xmj1CxCbj+7EoIuD/CVbpnnAB6k1zF54oj12w1Hwv9lOnz2lm9zCXmUxLJEVbI7527z+frXW5KOh2csYXX3G9Pbi1uI7uzjRnEZKMnRc+o/z0rg/jLOsWlaZakZkdmlJAwMgY/rVrQviFpejWscN/qAvAyu7rBCSxc9yWxnOM9cDArzrxp4ok8Xa7LqLRCCLaI4Ygc7EHTJ9TyT9awqzTjoclaEG+dbmDRRRXMYhRRRQAUUUUAFFFFAE9tc3MDr9nlkRt2RsJHNdJqPjHWNO1Ro7a/ctaxC1EmAWO0Ybn3bNY2gRbtQE7LmO0RrlvT5BkD8W2j8az3ZncsxJYnJJ7mrvaJTiuXXqb+s+O9d1yzNnd3f7hjl0Rdu/pjd64xXPUUVLbe5IUUUUgCiiigCVbmZUKCR9hIJXPGRWv4KuUt/FOnCYjyZ5fs0uenlygxt+jmsOnI7RuHUlWU5BHY007O44uzTJLu2ksrqa1mG2SF2jcehBwf5VDXR/EGJV8VXd1GMR36xX6H1E0ay/zcj8K5yhqzsElZtBRRRSEFFFFABRRRQAUUUUAa1pm18PX1xj5rqVLVT6qP3j/qI/zrJrX1fNvpelWWMYia6b/ekbj/x1ErJwaqXYufRCUUuDRg+hqSBKKXB9DRg0AJRS4NGDQAlLRg0YNAHUeLd15oHhXUjjLWD2bn/ahmcD/wAcaOuWrqZQLv4aW7HJfT9YkT6LPCpH6wNXL4NNlS3EopcGjBpEiUUuDRg0AJRS4NGDQAlPT/AUUUAWyvmlS5Ynp17VVckMcE/nRRQAgYk9TX0Z8Dvhl4V8U+BIdS1fS47q6a4lQyMTkgHAFFFVBaiYvxv+GPhTwv4CuNT0nSo7a7SeJVkUnIBbBr55voxbXHloWI2I3J9VBP8AOiinNagiKQFJGUE4B7mj+FTk8+9FFQMWIbnwSSOe9Eo2ngkcZ60UUATxO32G4Tc23cpxk4zVPc394/nRRTGG5v7x/OlLEHqenrRRSEJub+8fzo3N/eP50UUAG5v7x/Ojc394/nRRQB//2Q==",jellyfish:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5VbrSUp60lVLdgFFFFSAUUUUAFOXoabTl6GtKXxCYuODTKlAytR45rSvHZghKKKK5xhRRRQAUUUUALmikop3AWkopQMnFCTbASlFJSr1pxV2kAlFKeKSpAKKKKACnr92m07sK2paXYmSLjZUeMtTk+7REu6XFdUve5UTtcZjFNqylrNc3EdvBE8ssrBUjjUszsegAHJNe5eAPgZ4GkksrXxz4xaHW7zGzRtPB3xE/wySbGG71AAAPGTXLWhyuxSdzwSivr/Xv2RPBN7FLb6HrGr6dfom5fPIniJ7bhtU4+hr5a8XeEdY8Ea5c6NrVpJb3MDlQSpCyrnAdCR8ynqDWIzFooooAKKKKACp4I+rHtTI4mcgAZJq3MnkR49P513Yei178uhnOXRFClX7wpKUdRXHHdGgrjDGm1LMuGzUVVWjyzaEtgpcUAZNSmM4FVSpOabBuxHj5aUfdpxA8rPfNMB+U1o4qLS8hXuTRgFD9aW3X99+dNg+ZStXbeDa6kjjODXZSjzqLMpO10fVvwW+Dtv4c8EReKLiON/EGrwq0Ej8CygcfKFP8LMDlm64OB3z6p4P+G2ieD7h7+GEXGrTDbLeyj5gP7qD+Bfpye5r5Lg+M/j9dLTSrXWyLW1RY0gMCOrqFICsGByvGMdMkViR/GP4jSG3gi8XarDDcEhI4pNiqwJAUADgZxx05rkxNOUW3LqXTkmtD76xkZx7ZrmPiH8OdE+JugS6NrNuC+0tbXSrmW0c9HU9cZ6jow4+nmvhjT5vEHwNfxja6nqGn69NpU909za3LxK9xF5gLsinYS2wE8da+Zn8Y+K769TUJde1Jp5BEzTidg5VyVILZzjd0HQdsVyGhzfiTQbvwvr+oaJfAC6sLh7eTb0JU4yPY9R7Gs2rWqXt5qOo3F3qFxLcXcshaWWRsszdyTVWgApVGTSVJGPmFaUo80hNmnpcIYmQj7tR6mwyE7nk1qWNsY7MHHXk1g3kheV3Pc8fSvXqvkp6nND3pXK1FKeppK8V6M6ixKN0efSq9TocxkVBXTidbSREOw+NS3T1q46ZGB/dpljH5it7EVfEHK8e1dmGp+4n3MqktTM8smM/TNRKMg1qi2yjcfwmsxV4as6tL3kyoSvcks1zJituOPfLGuOMisazO2UH3roNIHmzgnnaa6MNpFIzq7l3SEZLm5KruZLeSZR6mPEn8kP51Q1exXTFvGgGRp2opJGfWKVdyH8kX866LwzEj+JLCJ8bZpHhbPo6Mn82qlJGNQsAij5tR8PLIBjrLaylePfZAw/GubHvVIuhsfTr3SeC/2ZbkxHzFXRp/KKjOBcSME/AecM/SvlBLYx+F1vEPK2ZPTGCt4v5/fFeweNvG1zp/wv0zwY8iPG3hgPcOOcyJcJGq5/2XSQH6CvL/AC1j+H3AJZ9OmkJPb/iYQKMf98n86843OY8U232TxHqUI6C4cjjsTkfzrKrovHwP/CTzsST5kNtJk9fmgjb+tc7QAVYsozNcIg7mq9a/hy1M14Xxworow0eaoiJu0Wb9yogsDjsuBXH3PEpHpxXY604itQOwGTXFyHcSfU1341+7YxoLW41utJStSV5U/iZ0k0HPFRMMGprX7xH41G4yxArokuakiE/eZoaMu8yL9K1/LVXXPUc4rB06cwuxHsauvdl5o3B713YaolSRhUj7xqG1IUjHfFYgtSHk46ZrrhGHtvOHcBqw70JBFcv/ALIxWtSzJjcxrbn8Dmuk8PLwzHua5eBiA1dfpMf2fS0mxyQTWOHd0VVJbS+OnXVtfk48m6jkz7LICf5GtWWJNK8Q+GbZDs/f39juU4IDXEsYwe2N1cvrswis/JHZQPxJrd1ydm8V+D5CWZbjyL/HBw005dhj65rlxr95I0orQiN3NqPwta+upDI1nIdHRj12yTLdKCe/KzHn1ptyUg8Jvasw3p4dhbHu+oiT/wBBYVnRRqfhnqDrJJuOtQMI/wCDasMoJ+uXUVpRWh1PXbjSSAfM0ixtRnI24+zMx59PmP51x2NjB8e7R4pvI0AAiWKIgHOCkSKf1Brnq0NfvxquuahfjOLm5kmGewZiR+hrPpWAK7Tw7ZG209ZMfPKf0rlLC3NzdxxjnJr0RIPIgiQcBF/WvSwMLXkznry6HP8AiubEUcKn7x5+grlZPvY9K39abzrl5D92MYFc8xyc0sZIdHYfMmxyKaq7sirupwbHDgcMKrWvM6g9CcVzzharZ9TRS924yJ9j5o3/ADZpZojFKyHsaZUc0oLl7DsnqPiyH4q5Cnzj2aqKNtcN6VYt7grKSe+a1oTSVmTNHoFrFv0np/BXL6+rJE49cV02iTeZpQLHO7ArnfE7gIQO+K66j91mMdzDs03kj14ru4Lf/iXWkeOCpYj/AD9a4vSoTJcRge5r0YQBDBHj7sQ/nU0HyxQ6mrOH8T/JOyjoGFa18YotS0K5SNV+wWIWUDvJEnmEn/vtRWR4nO+9KjqzkVJqF55ltqkgPzG8aKP/AHW+9+kSj8a48S71DWn8JJDMqeDJ7cMcttcjb/EZcde/CVuNcPpviXxHegjNvpkkSls/fkiSNce4BLD/AHaw9OjM2hRKQNrzkEA9RGGY5H1kWrOuXWyS7O4s91CJ2J7goiL/ADk/OkoWhfuVfWxybjqe1Iozk+lTXC7FUevNNjjJiGOrtgUOPv2C+hteEbMzXwcjgV2Wpyi3t2PfFZ/hKw8i3aUjnpVjVUa7mES9B1r0qS5Y2OWbu7nJ6sTHZ5P3pGrBrf8AFLBZ44V6Iv61jWkBuLhIx3PNceKvKooo3p6Rua14A+lwOw+baOax4DiZfrRRRW+OIQ2ZpaxEgZXA5K81lUUVnidyobCgfIT70qfeooqF0Gd14fJOiIff+lYfiX+H60UV3y+AwXxCeHEVr+MEcY/rXoLj/SH9kXH60UUo7Clued64SdUi/wCun9arTOXt5QcfNNvP1y/+AoorjqfxTePwm7oyKNFiYAZVJCD7k8/yFZmsnN0w/wCmcCdSeAv/ANYUUVs/hRPVmXqHE4HYKKuafErzWqkcYz+NFFRH+IxvY9AtAIdNXZxmoLc5kkY8kLRRXbA55Hn+sSvNfyFznmrHhyJZLwlh0oorlh/HNn8B/9k=",standby:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5voFH4UAdKAFHb/PpQO3+fSkA6cf54pQOn+fSgAHb/PpSUoHTj/PFGKADmj/P86Me1BH+cfWgAOef8+tKe/Xv/WjHXj1/r7UpB549e319qYAc89e/9aDnnr/nNBHXj17fX2oI5PH6fX2oAOc96Bnjr/nFGOen6f8A1qAPb9Pp7UAA7de39KBnjr2/pQB049O309qAOnHp2+ntQADPHXt/Sk5wP8+lAHTj07fT2oxx0/zx7UAJQc0dv/rUEcHikAmPagD/ADijv0/SgD2/SgAA6cfp9PalA6cfp9PakA6cfp9PalA6cfp9PagAA6cfp9PagD2/T/61AHTj9Pp7UY9v0/8ArUAGPb9P/rUuODx+n19qTHt+n/1qcF4PH6fX2oAXZ149e319v8/yeYW+b5Dxn+E/7X+z7fp+UsVsZA2EPQn7h9H/ANn2/wA9t+38M3c4mCWc29FkOPs7k8LOScCHt5Z9MY7YOzSMLgc48DDd8h4z/Cf9r/Z9v89mMhBPy/p9faus1bwlfaeZPPsZoyC4ANtIucNMD1hHTyz+XbB285c2rRuwMZBBP8BHc/7A/wA/oShbUCpt56fp/wDWoA56fp9PalK89P0/+tSAcjj9Pp7VAAB04/T6e3+f5gHTj07fT2/z/NAOnH6fT2/z/MA6cfp9Pb/P80AY4HH6fT2/z/NAOnH6fT2oA6cfp9PagD2/T6e1ABj2/T/61GODx+n/ANajHHT9P/rUEcHj9P8A61ACd+lAHtRRigAHbj/PFA7cf54oH+f0oHb/AD6UAGPb/PFAo/z/ACooAXHt/n8qeB7fp9fao6eP8/rTA2dNtklaQNFnCOeE9EkP/PM+n6duo9t0Hwzb3OlvI1jH/qpufsiZPGoD/n0/2R+Q9Ao8PsHCFztUkqw5UHgrJ7f5/l7d4d1C3h0qcDYQsM6sqIhwdmpYz+79/wAvbgbNXjoIu+MvCtokV2oshjfMdy2qgjDXp6i09h37DsAw8L1u2CX02IlUBjwIwvc/9M1/l/8AW9s8fazCy3hjSDd5kwQPGuSDJegnHl57+vp+HiGssjXspQLtLNjAGOp9FFCVo6gY7Lg9P0/+tTMe36fT2pzYz0/z+VMrEYAdOP0+ntQB04/T6e1A7f59KB2/z6UgAduP0+ntQPp+n/1qB2/z6UgoAXHtSH6UUUAFFFFAAO3+fSgdv8+lA/z+lAPT/PpQAen+fSij/P8AKgUAFOHf/PrTacD7/wCefegC3FLt3YI6MP0f3966e1157e3nQTOu4SDKPjOVuRz83P3/AMj+fIh8BufXv/ve/wDn+dr7SQr4fs3G7/rp/te/6/ntCVhHU6zrzXElwDMZW3yYZ3DDl5z13f7X+e/K3Uu+Rvm7nv7n3p1xcl2fL9S38Xu/+17/AOe9WR9zE7u57/X3onK4EZPNMFOJ9/1/+vSZrEYD/P6UDt/n0oB6f59KAen+fSgBB2/z6UUDt/n0ooAKKM0fjQAZ560A9Of1oz7/AK//AF6Aff8AX/69AAD05/zxSg9Of1+nvQD05/X6e9APTn9fp70AID7/AK/T3oz7/r/9elz7/r9PekB9/wBf/r0AGff9f/r0uevP6/8A16M+/wCv/wBejPv+v196AHbuDz69/r7/AOf5vMhw3zev8X+97+/+e8e7rz+v196cW68+vf6+/wDn+bAe8hO75yev8X+9/te/+e8bNyef1+vvQz9efXv9ff8Az/NC2e/6/wD16AEz7/r/APXoz7/r/wDXoz7/AK//AF6M+/6//XpAAPTn9fp70A9Of1+nvQD05/X6e9APTn9fp70AID05/wA8e9GfegHpz+v096M0AH40fjRn3ozQAZ5/+vQO3NFLyMdeaAEB6c/5496UHpz/AJ496B2/z6UDt/n0oAQHpz+v096M+9Hp/n0ozQAZ96M+/wCtGaKAFJ68/r9fegnrz+v196D3/wA+tB7/AOfWgAJ68/r9fegnrz+v/wBekPfn/PNGaADPvRnpzRmigAB/z+VGff8AzxR6f59KM/5/KgAz/n8qM+9HpSZoAXNGaSigCxFd3EMflxzuiZztB4zTrm+ur1YVuZ3lEQKoGP3QW3H9STRRTuwK4HT/AD6UAdP8+lFFIAA6f59KO1FFABijFFFAB6/59aCOv+fWiigAI/z+dIe9FFABjmlFFFACDt/n0oA/z+VFFAB6f59KKKKAEo9aKKAP/9k=",sphere:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5VGM89KXI7KKTFB9cCgBcjBHqKVOTg9PpTcH0oAzQAvGMevpSYqSGB7idIIEaWSQhUVRyzHsBV5dFuNzCbCbfvLkcfU9B+tAGaAPrV620ieZfMlkgtVxlTcNt389AOv49PerccMUGRBLChA+aQjcV/Pp/nimyf2a0KAyXk8rsS7thVcjAHYt3P59KAKj6XIjFfPgYjsrEn8sZpn2FySMjP+4/+Fafnx2n7oWVrIG+XfJmVYjnjknGfXjHtUVvq90s5O+SHystiF/LAI9h74oAgXR2A/fXdpBnp5rkE+2AD+Z496gudOurXiWJsDoyncv5jirL30V0S00sqSE/fKq4P1H9ant55InSJXjPmYVD5WM/THBHt/KgDGIweDmj610N/bW5kJeOyKkAh4ZGKkY9edreobvVH7BZXAeOC5kjnUHbFKnDHjjdxjv1FAGaCCOQTRgnk8d6GRo2KOCrDggjkH0pMkjGTQAZ+XHvQQRQKd1XB6L+tACfKRknBx0ApKDjJx0o7UAGKCO+MA0dqOp7/hQAp9cmko5z61d0+0EjLNKv7sHAGM7yOTj6D+lAD4EFpbGVyVeQbQR1VSOce5HH0Jq5eSboII55F8sA/wCh7yuxuCWyeASCM9zjnAxVaS4VrsMOSgJA6iJRzj3Y9z6mq0qyziLHzO25yc9OeSTQAt1b3OFYKWhzhNg+Ue3HepZAbeOOOIFrg7gcc+X9Pf37VNp0zabIWifDSxsmcAlgQR8oI4/3uvpSTas01tEk0UTxAsu1RsI6HqOT175oApJE8DAtMIT6A5b8h/WrxmtJbV5Hhy8jLG0xO3B5PKjscD34qr5cMvMMRf8A2Q+GH4HOfwq1ZQWr2+JmuY4pXIG0KxaRV+UDJHcgE9gfwoAqeVhiPs8Sgcl2Ylceuc1Zt9QFok3kwwNHt2MWXO8njj04zg9aYiSXKiNAs0A6ImQU9xnv/Oi906e1iijfYPMzJ95RkHgcZ46Hj3oADKI4RJHGuF6OpKkoT0Iz2PUe9S2lzY3EwW8jlijCnMsZDFFIx0OM9emarWkTo3lyxsYnBDbSDtz3FJeWk2nj7PMjJI3zNkcEfw49eDn8RQBbns2uEPmukjxjalwh+VgOgfuD6E/4VlSIY2KMpVh1Bq5biURpcrI0LINu4dXXtgd/T06Voyi01q2WRoPs1yqlfMTpIw6Ar0GcgZXAHXHJoAwQpOepA7ijooIJz9KQjbx3/lTiSec9u/egBFIDc8ikH545xRyp5pUGc+v0zQAnX04oyc8fpRQQR7EcUAFdBJdotpJC0cKOIYo42EeAVCgsDjkZLckde9YAHQZOTwRWrdbmvEhTq8W3HfJHH/stAEYt0jt2eaFrdZDtDg5UgcnaD17d6kuBFDBAsEiFihyki7dp3E854J5Bx0GaYt04tQpcyW9q21Ub5lJbngH1IJ+lQrJDcQvvBRw28kfMOeDx19O9AEYSZLqOWUMRvHz9c8+tNdcQOv8Ackxn6g/4U6OG4jObdjIDxmIkn8utaRmihNyJY45mY79y4VgRzhSOOhOTg+3rQBnx2oiUS3DtHFnKgD5nPsO31q22pGeGNikaeW52yBQXUYGM+o4qpMftb+Yky7+AEYbSPoen65pqRSCF4jGfM3qQpHPQ9qAHXcU32ry2YvuYeWScgg9CPzp4uWl8yGNyRnMakZHAxjHTkD9KmhkSLyVdVkZ1KbcnarYIByO/3en45qpEI5ZUWOGXzCQAEfv+IoAdAYZSXltxhepjOCx7DHTmtG5XEEE8Nx51wwZJoXXAVgeOOQx246dMd6ivfs0JEdtNgsu5mZeA38WCPcEZ9KjtbKW7glhh8uU53qEYdgSTj6CgCKGZZrg+fGynGJGXgBe+Qf6Yqa4/0KQi3cNHBJuiYjG4dCSOxPGR26VXluwALd1Mka8Fm4bP19PQGrUMDXV20FurT/aFA8lfvklcjA7nOOlAFbUoV3+fGSY2OPocZGfwqlkjofyrYt7V9qJIjPBKpjduBjHIbk9Rn+lZt3bPa3Mts7IXhcxnYdykg4OCOtAEIx3NKMn1oBxkEUgI6EUAKOOGFIDgH3pTwSOvbmkGc8daAJrWL7RdQwryzuqj3ya051cX5uyFUKQEDOowc49ewH8qxs+vWtrWPKvoLS7gJjLxYlDYAMoJ3EHtnAOD70AV5LOSKWWyBRggZTtkU5YHOevtge1Q2tpN5yqI2O/5MDng8VJOHS5dihEkTbiCPvJnP6fy+lQw2/8ApjqANsWWyegA6E/pQBMLeSyZvNV4nj4duQQf7oPr7/WnS6lLcyw3NwEl+URHK9FUYAyP9nAqO4uWeNXgd1VDtbBIyf7x9z/SltZHuElVxGyqN5LoOMe45yRmgCP7PE8rx4aIqTuOdyr/AFH61bgeRIpba2ZJkZOd3JbBzwDyB16VBd3EM3l/umiQqD+7bIJHBJz1PHr3plrAJbmPyHVyzAbD8pPr14/WgCRIkkTywslvMHBVSCck8fXrj1qa9t3spJI7dklkkGZJImDhQedox9eT+H1mWa60X7RYxMSZEaKWT7y4HO1SeOqjJHXtx1os8c8cJ8khiSmYzggjkcdO/tQBB5ZlhVF+Zkcrj2P/AOo/nU9tMkDNEhD/AC5Zuu7HOB7cVZgnASWCO4jmLociYcnHOAew47EZqrGsUUsbTQyQjcMsvzKR36/40ARl5BN5BAmwxUBx/I9auXEsFmInt4i02wBmdshCOoGMdsdexp89obMK6PHLPIgwqnlMZU5B7/L/AJ5qgiPIrwsH8zO8AjnPf9OfwoAutJI8Zs92ImkWfYowMZwOB7EmqF8xa8uGJ+9IzH8TVxMSXSshyPKeL8lKj/2WqNyP9Il65Dnj8aAIjwcgYFGQOn40EHJzx3o6cg0AAxnnkUoO00AgYP50lAByO+K1NPuI2spreXiIMCc9lOASPcHafz9ay81NZ3ktjL5kRGSCpDDIZSMEH2IoAtXE01temJlWXbt+XqD8o6H0Pt61oX2noNPhntvMjW5VRKZ12hWX+AN6Y2ntn8qJ3fWbPzIJ382BAME4O0fwsR1x2b069KoG5MMlwhXcqMA6P0ZR8pz+Q9xQA23szG43yRvG3yv5X7zj8PTrQ6bZwtuyskbcL0ZsdSQe59s1FPbhCJrZmaLG4f3lHv8A41M5nnuZF+WQbz/rBnGenPWgBjWkr5tkRi6yfKDwSrDrz06frSSypaRNbQMru3Ekw7/7K+3v3+laf9owfZTa2qsuIzHNJnf5vO4YVvurxjAPOAT1xWYVik6LE30Yxn9ePyoAFnkiuY5Y2YbwrYXuehH5g1YkmWKO4tXSKSRSC7gbWGDgqCPrzSywxW1qC3nRTAlTuTIjU8jnPXr24+vRsNobm7VY5ov3qc7iVVflwSSRgAEZz7UAVoET7QjRPltw/duME+3oasyxvocskUmRcjIMYP3Pr2zUZmWxYw22fP8AuvOQQR7KO316/SoZZ2WaVTtkTe3yN25PT0oAtanfNdTtPPDA7s7A7Ywg7HgLgDrUlldR2zpIfMDFWKxtiRVG084P6Cie2Qo8owXEuUt2+82V6+44Huc9KqQKdzz3BJJRiFPV+MflQBoWFvbz2zu0iQ/OuwgMrEZyxxyMAKCeRWXezRTXdw8O/wAppGaPcMNgnjOOM4q1du1taiI7RJKMuR2H90emMAfXPpWbnFABjnmg8nilzjnHWjOBgdPpQAgz2JyeMUdvejJBznmkoAUe/SlHPBPHWkzjoaCc0AWLC+uNPuY7i3Yh0YMARkEg9x3rfe3tdUk8+BIIkuOAd6psJz8jZ4GD06ZAH0HMjk5qS3nmtZN8bFTjBHZh6Ed6AL6QR2khgaVmkz90/uyjdM5PX8OtT6nFLb7PtNo9rJKgOI1IVBjrg92GDnPQ+9PgMOtlYnKx3ORje3BH16jHrz7jjNNNneusyxRSXESMZF8o5Ma9CQVyAOnPTigDPsw1vcJLGVmQH5lU/MR34PNEtu2nzsjDdLnCLjt2bHv2qWSV7dA0c32kjqzgEIfoe/v0q1e6tcSW8ImOXUbZZF+WRieRuPcY4x7GgCnZEwuyyzsvmfKUQ5Oc8Z7DnHr9KsXd9mxt0a1hjyGH7sbXYbjyx7nPHTsaghXzQZA0Lxr1DRqrE+g9T+NTXctxcpFNDGsTbcOka7dnJ7nkA/XrmgBlrbJePGpMkRLDbJIMKOehb098cUyeB7aSTYizSEkl1wwX6D+p/wDr0wIkMZlnmLO+VUJ8xx3OTx7d+9WrAGY/NEsMKLu85+Sg+p7fT8KAGXkbRuPMjZ3cbghBJJboT36AfWrNnC028XId7p0Ox+f3SrgszHHICg4Hb14xUlybqa6nu5b2V4iSXud7EyDoAM8rkDoefbtWbc6pIyvFbloomG18Mdzj0J9PbpQBXvbgXEzOowmcKO4UdBUJ6kDp9aMAg4x0zQu4HIH6UAJyT7mlHGc9P50ZxzzmkzQAA4OaVxtYgdqKKAAgYJ6YxSdqKKAHDBU57U0c/lRRQA7c0MgaNmVlIIYHBB9a39MuJdSS4muHbzYvnDqcEk9c9vyHNFFAFZr+e31RI9yzJvUYmUPwccc9vark0aTWjXaxxxNPlmSONdoOc8Ag4oooAx57qbe6B9qxkqoUAAc1ZmvrprqC1knklhVUjCSHcArYJ4PuSaKKAJtSEdrqP2dIIiASocjkAHHbj9K2dZ0u20bRrK5hVppbiLz3aY7vm3ED04AHH1NFFAHKXN7cXTBZJWKZBCDhQfYDjvVZuWNFFADto37e1DDaOPU0UUAIvLgdM+lIfvUUUAf/2Q=="},xT=["w2","w1","w3","w5"].map(s=>({src:`/media/${s}.mp4`,poster:`/media/${s}.jpg`})),_T=["t2","t3","t1"].map(s=>({src:`/media/${s}.mp4`,poster:`/media/${s}.jpg`}));function yT({page:s,onClose:e,onGo:t}){return Ve.jsx("div",{className:`page ${s==="performances"?"wide":""}`,onClick:e,children:Ve.jsxs("article",{onClick:r=>r.stopPropagation(),children:[Ve.jsxs("nav",{className:"tabs",children:[["about","instrument","performances"].map(r=>Ve.jsx("button",{className:r===s?"on":"",onClick:()=>t(r),children:r},r)),Ve.jsxs("button",{className:"close",onClick:e,"aria-label":"close",children:[Ve.jsx("span",{className:"cl",children:"close "}),"×"]})]}),s==="about"&&Ve.jsxs("section",{children:[Ve.jsx("h2",{children:"The machine reads, the hand leads."}),Ve.jsxs("p",{children:[Ve.jsx("b",{children:"<N4TH>"})," is the visual instrument of Nathalia Cury, a Brazilian art director based in Stuttgart for six years. With a background in typography, editorial design and brand identity, she brings a designer's eye to the club."]}),Ve.jsx("p",{children:"She built <N4TH> together with AI, using it as a design partner from the first sketches in Figma Make to hand tracking with MediaPipe and real-time graphics in Three.js. The result is a tool that sits between graphic design, code and performance."}),Ve.jsx("p",{children:"On stage, a camera reads her hands and the music reads the room. Every gesture becomes a move in the visuals: a fist gathers, an open palm releases, a clap breaks everything open. She moves between 2D and 3D worlds, turns colour palettes live, or lets the system run on its own and evolve with the night."}),Ve.jsx("h3",{children:"Contact"}),Ve.jsxs("p",{children:[Ve.jsx("a",{href:"mailto:cury.nathalia@gmail.com",children:"cury.nathalia@gmail.com"}),Ve.jsx("br",{}),Ve.jsx("a",{href:"https://instagram.com/nathcury",target:"_blank",rel:"noreferrer",children:"@nathcury"})]})]}),s==="instrument"&&Ve.jsxs("section",{children:[Ve.jsx("h2",{children:"Built with AI, played by hand."}),Ve.jsx("p",{children:"The tool runs in a browser. It listens to the music — its kicks, its builds, its silences — and it watches the hands. Every visual answers both: the sound gives the pulse, the hand gives the decision."}),Ve.jsxs("ul",{children:[Ve.jsxs("li",{children:[Ve.jsx("b",{children:"one finger"})," slow · ",Ve.jsx("b",{children:"five"})," fast"]}),Ve.jsxs("li",{children:[Ve.jsx("b",{children:"a fist"})," gathers · ",Ve.jsx("b",{children:"an open palm"})," releases"]}),Ve.jsxs("li",{children:[Ve.jsx("b",{children:"a clap"})," breaks everything open"]}),Ve.jsx("li",{children:"the music: pulse, kicks, build-ups, the drop"})]}),Ve.jsx("p",{children:"Every part of it — the visuals, the way they listen, the way they read a gesture — was written in conversation with AI. The machine can play on its own, so the performance stays with the question: who leads and who follows?"}),Ve.jsxs("figure",{children:[Ve.jsx("img",{src:"/media/instrument.jpg",alt:"The instrument: the visuals of the set, layers, effects, the sound and the hands"}),Ve.jsx("figcaption",{children:"The instrument as it is played: the set of visuals, the layers, the effects, what it hears."})]}),Ve.jsxs("figure",{children:[Ve.jsx("img",{src:"/media/library.jpg",alt:"The library of visuals, and the set chosen from it"}),Ve.jsx("figcaption",{children:"The library: every visual of the instrument, and below, the set chosen for the night."})]})]}),s==="performances"&&Ve.jsxs("section",{children:[Ve.jsx("h2",{children:"Performances"}),Ve.jsx("p",{className:"sub",children:"Stuttgart, November 2026 — Nische at Kultur Bunker. Live with a DJ set."}),Ve.jsx("div",{className:"shows wide",children:xT.map(r=>Ve.jsx("video",{src:r.src,poster:r.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,disablePictureInPicture:!0,disableRemotePlayback:!0},r.src))}),Ve.jsx("div",{className:"shows tall",children:_T.map(r=>Ve.jsx("video",{src:r.src,poster:r.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,disablePictureInPicture:!0,disableRemotePlayback:!0},r.src))})]})]})})}const ha=[{id:"dust",name:"Dust",note:"a fist gathers it into a circle"},{id:"sphere",name:"Planet",note:"a fist pulls it out of shape"},{id:"line",name:"Line",note:"an open hand unfolds it"},{id:"jellyfish",name:"Jelly",note:"a fist closes the bells"},{id:"dandelion",name:"Dandelion",note:"the hand moves the wind"},{id:"standby",name:"Standby",note:"a fist closes the picture to a point"}],cd={dust:{colors:Wr(0,0,"grayscale"),params:{"look.glow":1.6,"field.size":1.3,"sound.beat":.35}},line:{colors:Wr(268,70,"black"),params:{"line.weight":1.4}},dandelion:{colors:Wr(200,60,"black"),params:{"field.count":3,"field.backdrop":0}},jellyfish:{colors:Wr(215,70,"black"),params:{"swarm.backdrop":0,"swarm.height":.3,"swarm.arrival":11,"colour.palette":3,"sound.flow":1.7,"swarm.drift":1.3,"sound.swell":1.2,"sound.beat":.6}},standby:{colors:Wr(0,0,"grayscale"),params:{"sound.quiet":.4}},sphere:{colors:Wr(0,0,"grayscale"),params:{"shape.style":2,"shape.size":1.2,"shape.morph":.32,"shape.lobes":1.05,"shape.detail":2,"motion.spin":.4,"motion.flow":1,"motion.dust":1,"sound.beat":0}}},MT={dandelion:"hue-rotate(2.59rad) saturate(0.95) contrast(1.28)"},ST=Wr(110,70,"contrast"),Ev={dust:{path:"field.count",min:200,max:5e3,start:.6},line:{path:"line.count",min:1,max:40,start:.33},dandelion:{path:"field.count",min:1,max:12,start:.2},jellyfish:{path:"swarm.count",min:1,max:8,start:.43},standby:{path:"grid.detail",min:.2,max:1,start:.38},sphere:{path:"motion.points",min:0,max:6e3,start:.6}},bg=[{name:"Johannex · m4n4th",src:"/tracks/m4n4th.mp3"}];class AT{constructor(e,t){G(this,"parts");this.canvas=e,this.ctx=t;const r=()=>{const f=document.createElement("canvas");return f.width=e.width,f.height=e.height,f},o=r(),l=r(),c=new ww(o,o.getContext("2d"),0);c.setParams({"look.flow":2.65,"look.zoom":2.85,"look.detail":2,"look.veins":1.35,"look.grain":.3}),this.parts=[{r:c,c:o,filter:"hue-rotate(-0.2rad) contrast(1.3)",alpha:.45,blend:"source-over",colors:ST},{r:new pw(l,l.getContext("2d")),c:l,filter:"hue-rotate(3.14rad) saturate(0) contrast(2.25)",alpha:.94,blend:"screen",colors:cd.jellyfish.colors}]}setParams(e){var t,r;(r=(t=this.parts[1].r).setParams)==null||r.call(t,e)}render(e,t,r){const{canvas:o,ctx:l}=this;l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,o.width,o.height);for(const c of this.parts)(c.c.width!==o.width||c.c.height!==o.height)&&(c.c.width=o.width,c.c.height=o.height),c.r.render(e,c.colors,r),l.filter=c.filter,l.globalAlpha=c.alpha,l.globalCompositeOperation=c.blend,l.drawImage(c.c,0,0);l.filter="none",l.globalAlpha=1,l.globalCompositeOperation="source-over"}destroy(){var e,t;for(const r of this.parts)(t=(e=r.r).destroy)==null||t.call(e)}}function ET(s,e,t){return s==="dust"?new $E(e,t):s==="line"?new tw(e,t):s==="jellyfish"?new AT(e,t):s==="standby"?new Mw(e,t):s==="sphere"?new Sw(e,t):new cw(e,t)}const wT=(s,e)=>{const t=Ev[s],r=t.min+e*(t.max-t.min);return{...cd[s].params,[t.path]:t.max>2?Math.round(r):r}};function TT(s){var r,o,l;const e=document.querySelector(s);if(!e||s===".stage")return{top:"42%",left:"50%",transform:"translate(-50%, -50%)"};const t=e.getBoundingClientRect();if(window.innerWidth<=720&&(s===".track"||s===".cards")){const c=(r=document.querySelector(".desk"))==null?void 0:r.getBoundingClientRect(),f=e.getBoundingClientRect();if(c)return{top:c.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}if(s===".fx"&&window.innerWidth<=720){const c=(o=document.querySelector(".fx.open"))==null?void 0:o.getBoundingClientRect();if(c)return{top:c.top-16,left:window.innerWidth/2,transform:"translate(-50%, -100%)"};const f=(l=document.querySelector(".fxbtn"))==null?void 0:l.getBoundingClientRect();if(f)return{top:f.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}return s===".fx"?{top:t.top+t.height/2,left:t.left-14,transform:"translate(-100%, -50%)"}:{top:t.top-16,left:t.left+t.width/2,transform:"translate(-50%, -100%)"}}const CT=Math.max(1,Math.min(5,Number(new URLSearchParams(location.search).get("guide"))||2)),bT={left:null,right:null},RT=30,PT=["5 fingers","2 fingers","fist","pinch","clap"],LT={bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0};function IT(s,e,t){return{position:{x:s,y:e},gesture:t>.5?"fist":"open",openness:1-t,fingerCount:t>.5?0:3,velocity:0}}const Yf=[{key:"play",at:".track",text:"Play a track — the visual moves with the music."},{key:"hand",at:".stage",text:"Raise your hand to the camera — or move the mouse."},{key:"fist",at:".stage",text:"Close your hand (or hold the mouse button) — then open it."},{key:"clap",at:".stage",text:"Clap (or click quickly)."},{key:"fx",at:".fx",text:"Shape it: trail, colour, amount."},{key:"switch",at:".cards",text:"Try another visual."}];function DT(){const s=It.useRef(null),[e,t]=It.useState("dust"),[r,o]=It.useState(!0),[l,c]=It.useState(0),f=ie=>{t(ie),c(_e=>_e+1)};It.useEffect(()=>{if(!r)return;const ie=window.setInterval(()=>{t(_e=>ha[(ha.findIndex(je=>je.id===_e)+1)%ha.length].id)},RT*1e3);return()=>window.clearInterval(ie)},[r,l]);const d=It.useRef(e);d.current=e;const[h,g]=It.useState(0),[x,m]=It.useState(0),[_,S]=It.useState(()=>Object.fromEntries(ha.map(ie=>[ie.id,Ev[ie.id].start]))),[T,y]=It.useState(!1),M=It.useRef({trail:h,hue:x,amounts:_});M.current={trail:h,hue:x,amounts:_};const[E,P]=It.useState(null),[b,z]=It.useState("off"),L=It.useRef(bT),k=It.useRef(null);k.current=E;const A=It.useRef({x:.5,y:.5,on:!1,down:0,closed:0,clapAt:0,moved:0}),U=It.useCallback(async()=>{z("asking");try{const ie=await navigator.mediaDevices.getUserMedia({video:{width:640,height:360,facingMode:"user"}}),_e=document.createElement("video");_e.muted=!0,_e.playsInline=!0,_e.srcObject=ie,await _e.play(),P(_e),z("on")}catch{z("refused")}},[]);It.useEffect(()=>{U()},[U]);const W=It.useRef(null),[B,q]=It.useState(null),ce=It.useRef(null),ue=It.useCallback(ie=>{var je;let _e=W.current;if(!_e){_e=new Audio,_e.crossOrigin="anonymous",_e.loop=!0,W.current=_e;const Ke=new AudioContext,We=Ke.createMediaElementSource(_e),Je=Ke.createAnalyser();Je.fftSize=2048,Je.smoothingTimeConstant=.55,We.connect(Je),Je.connect(Ke.destination),ce.current={ctx:Ke,analyser:Je,data:new Uint8Array(Je.frequencyBinCount),state:cT()}}if((je=ce.current)==null||je.ctx.resume(),B===ie){_e.pause(),q(null);return}_e.src=bg[ie].src,_e.play(),q(ie)},[B]),[j,te]=It.useState(new Set),[X,F]=It.useState(()=>{try{return!localStorage.getItem("n4th-guide-seen")}catch{return!0}}),N=ie=>{F(ie);try{localStorage.setItem("n4th-guide-seen","1")}catch{}},Y=It.useCallback(ie=>te(_e=>_e.has(ie)?_e:new Set(_e).add(ie)),[]);It.useEffect(()=>{B!==null&&Y("play")},[B,Y]);const D=Yf.find(ie=>!j.has(ie.key));It.useEffect(()=>{if(!D)try{localStorage.setItem("n4th-guide-seen","1")}catch{}},[D]),It.useEffect(()=>{const ie=s.current,_e=ie.getContext("2d"),je=document.createElement("canvas"),Ke=je.getContext("2d");let We=null,Je=null;const vt=2.5;let O=performance.now(),et=0;const it=mT();let Et=0,Ce="";const Tt=(me,ve,Ee)=>{(me.width!==ve||me.height!==Ee)&&(me.width=ve,me.height=Ee)},I=()=>{const me=Math.min(window.devicePixelRatio||1,1920/Math.max(1,window.innerWidth)),ve=Math.round(window.innerWidth*me),Ee=Math.round(window.innerHeight*me);Tt(ie,ve,Ee),Tt(je,ve,Ee),We&&Tt(We.work,ve,Ee),Je&&Tt(Je.work,ve,Ee)},w=me=>{const ve=document.createElement("canvas");ve.width=ie.width,ve.height=ie.height;const Ee=ET(me,ve,ve.getContext("2d"));return{v:me,r:Ee,amount:-1,work:ve,alpha:0}},ne=me=>{var yt,Q,Fe,ye,qe,ke,we,Ye;et=requestAnimationFrame(ne);const ve=Math.min(.1,(me-O)/1e3);O=me,I();const Ee=d.current;We?We.v!==Ee&&((Q=Je==null?void 0:(yt=Je.r).destroy)==null||Q.call(yt),Je=We,We=w(Ee)):(We=w(Ee),We.alpha=1),We.alpha=Math.min(1,We.alpha+ve/vt),Je&&(Je.alpha=Math.max(0,Je.alpha-ve/vt),Je.alpha<=0&&((ye=(Fe=Je.r).destroy)==null||ye.call(Fe),Je=null));for(const be of[We,Je])be&&k.current&&be.video!==k.current&&((ke=(qe=be.r).setVideoElement)==null||ke.call(qe,k.current),be.video=k.current);const Te=A.current;Te.closed+=((Te.down&&me-Te.down>220?1:0)-Te.closed)*Math.min(1,ve*10);let de=L.current;!de.left&&!de.right&&Te.on&&me-Te.moved<4e3&&(de={left:IT(Te.x,Te.y,Te.closed),right:null,clapping:me-Te.clapAt<120,clapIntensity:1});let xe=LT;const ze=ce.current;ze&&W.current&&!W.current.paused&&(ze.analyser.getByteFrequencyData(ze.data),xe={...fT(ze.data,ze.ctx.sampleRate,ze.state,.8,Date.now()),live:!0});const Ge=new Set;for(const be of[de.left,de.right])be&&(be.gesture==="fist"?Ge.add("fist"):be.gesture==="pinch"?Ge.add("pinch"):be.fingerCount===2?Ge.add("2 fingers"):((be.fingerCount??0)>=5||(be.openness??0)>.85)&&Ge.add("5 fingers"));de.clapping&&(Et=me),me-Et<500&&Ge.add("clap");const Oe=[...Ge].sort().join("|");Oe!==Ce&&(Ce=Oe,se(Ge)),WE(ve,[gT(de,it,ve)]),XE(0);const Ie=M.current;Ke.globalCompositeOperation="source-over",Ke.globalAlpha=1,Ke.fillStyle="#000",Ke.fillRect(0,0,je.width,je.height);for(const be of[Je,We]){if(!be)continue;const xt=Ie.amounts[be.v];Math.abs(xt-be.amount)>.001&&((Ye=(we=be.r).setParams)==null||Ye.call(we,wT(be.v,xt)),be.amount=xt),be.r.render(de,cd[be.v].colors,xe);const Lt=be.alpha*be.alpha*(3-2*be.alpha),tn=Ie.hue?be.v==="dust"?`sepia(1) saturate(5) hue-rotate(${Ie.hue-40}deg)`:`hue-rotate(${Ie.hue}deg)`:"";Ke.filter=[MT[be.v],tn].filter(Boolean).join(" ")||"none",Ke.globalAlpha=Lt,Ke.globalCompositeOperation="lighter",Ke.drawImage(be.work,0,0)}Ke.filter="none",Ke.globalCompositeOperation="source-over",Ke.globalAlpha=1,_e.globalCompositeOperation="source-over";const ut=Ie.trail*Ie.trail*1.5,ft=ut<.005?0:Math.exp(-ve*Math.LN2/ut);_e.globalAlpha=1-ft,_e.fillStyle="#000",_e.fillRect(0,0,ie.width,ie.height),_e.globalAlpha=1,_e.globalCompositeOperation=ft>0?"lighten":"source-over",_e.drawImage(je,0,0),_e.globalCompositeOperation="source-over"};return et=requestAnimationFrame(ne),()=>{var me,ve,Ee,Te;cancelAnimationFrame(et),(ve=We==null?void 0:(me=We.r).destroy)==null||ve.call(me),(Te=Je==null?void 0:(Ee=Je.r).destroy)==null||Te.call(Ee)}},[]);const V=ie=>{const _e=A.current;_e.x=ie.clientX/window.innerWidth,_e.y=ie.clientY/window.innerHeight,_e.on=!0,_e.moved=performance.now(),b!=="on"&&Y("hand")},Se=ie=>{V(ie),A.current.down=performance.now()},Ae=()=>{const ie=A.current,_e=performance.now()-ie.down;ie.down&&_e<220&&(ie.clapAt=performance.now(),Y("clap")),ie.down&&_e>400&&Y("fist"),ie.down=0},[Me,K]=It.useState(!1),[oe,se]=It.useState(new Set),Pe=It.useCallback(ie=>{var _e,je;L.current=ie,K(!!(ie.left||ie.right)),(ie.left||ie.right)&&Y("hand"),(((_e=ie.left)==null?void 0:_e.gesture)==="fist"||((je=ie.right)==null?void 0:je.gesture)==="fist")&&Y("fist"),ie.clapping&&Y("clap")},[Y]),[Ue,ge]=It.useState(()=>{const ie=location.pathname.replace(/^\/+|\/+$/g,"");return["about","instrument","performances"].includes(ie)?ie:null}),$e=ie=>{ge(ie);try{history.replaceState(null,"","/"+(ie??""))}catch{}};return Ve.jsxs(Ve.Fragment,{children:[Ve.jsx("canvas",{ref:s,className:"stage",onPointerMove:V,onPointerDown:Se,onPointerUp:Ae,onPointerLeave:()=>{A.current.on=!1,A.current.down=0}}),E&&Ve.jsx(qw,{videoElement:E,onHandData:Pe}),Ve.jsxs("header",{className:"top",children:[Ve.jsx("div",{className:"brand",children:"<N4TH>"}),Ve.jsx("nav",{children:["about","instrument","performances"].map(ie=>Ve.jsx("button",{onClick:()=>$e(ie),children:ie},ie))})]}),X&&D&&!Ue&&!(T&&window.innerWidth<=720)&&Ve.jsxs("div",{className:`guide g${CT}`,style:TT(D.at),"data-at":D.at,children:[Ve.jsxs("span",{className:"count",children:[Yf.indexOf(D)+1,"/",Yf.length]}),Ve.jsx("span",{children:D.text}),D.key==="hand"&&b!=="on"&&Ve.jsx("button",{className:"cam",onClick:U,disabled:b==="asking",children:b==="refused"?"camera not allowed — the mouse plays":b==="asking"?"…":"allow camera"}),Ve.jsx("button",{className:"x",onClick:()=>N(!1),title:"Hide the guide",children:"×"})]}),Ve.jsxs("aside",{className:`fx ${T?"open":""}`,onPointerDown:()=>Y("fx"),children:[Ve.jsx("div",{className:"fxt",children:"EFFECTS"}),Ve.jsxs("label",{children:["Trail",Ve.jsx("input",{type:"range",min:0,max:1,step:.01,value:h,onChange:ie=>g(+ie.target.value)})]}),Ve.jsxs("label",{children:["Colour",Ve.jsx("input",{type:"range",min:0,max:360,step:1,value:x,onChange:ie=>m(+ie.target.value)})]}),Ve.jsxs("label",{children:["Amount",Ve.jsx("input",{type:"range",min:0,max:1,step:.01,value:_[e],onChange:ie=>S(_e=>({..._e,[e]:+ie.target.value}))})]})]}),Ve.jsxs("footer",{className:"desk",children:[Ve.jsx("div",{className:"cards",children:ha.map((ie,_e)=>Ve.jsxs("button",{className:`card ${e===ie.id?"on":""}`,onClick:()=>{f(ie.id),ie.id!=="dust"&&Y("switch")},title:ie.note,children:[Ve.jsx("img",{src:vT[ie.id],alt:""}),Ve.jsx("span",{className:"num",children:_e+1}),Ve.jsx("span",{className:"name",children:ie.name})]},ie.id))}),Ve.jsx("div",{className:"sep"}),Ve.jsx("div",{className:"tracks",children:bg.map((ie,_e)=>Ve.jsxs("button",{className:`track ${B===_e?"on":""}`,onClick:()=>ue(_e),children:[Ve.jsx("span",{children:B===_e?"❚❚":"▶"})," ",ie.name]},ie.src))}),Ve.jsx("div",{className:"sep"}),Ve.jsx("button",{className:`autobtn ${r?"on":""}`,onClick:()=>o(ie=>!ie),title:"Auto: the next visual every 30 seconds",children:"auto"}),Ve.jsx("button",{className:`fxbtn ${T?"on":""}`,onClick:()=>{y(ie=>!ie),Y("fx")},children:"FX"}),Ve.jsx("button",{className:`camera ${b==="on"?"on":""}`,onClick:b==="on"?void 0:U,title:"Play with your hand through the camera",children:b==="on"?Ve.jsxs(Ve.Fragment,{children:[Ve.jsx("span",{className:`dot ${Me?"seen":""}`,children:"●"})," hand"]}):b==="refused"?"mouse":"camera"}),Ve.jsx("div",{className:"words",children:PT.map(ie=>Ve.jsx("span",{className:oe.has(ie)?"lit":"",children:ie},ie))})]}),Ue&&Ve.jsx(yT,{page:Ue,onClose:()=>$e(null),onGo:$e})]})}d_.createRoot(document.getElementById("root")).render(Ve.jsx(It.StrictMode,{children:Ve.jsx(DT,{})}));
