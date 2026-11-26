var o_=Object.defineProperty;var a_=(s,e,t)=>e in s?o_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var V=(s,e,t)=>a_(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var $u={exports:{}},na={},ef={exports:{}},Lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function l_(){if(Nm)return Lt;Nm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function m(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function y(D,B,ve){this.props=D,this.context=B,this.refs=T,this.updater=ve||_}y.prototype.isReactComponent={},y.prototype.setState=function(D,B){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,B,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function M(){}M.prototype=y.prototype;function E(D,B,ve){this.props=D,this.context=B,this.refs=T,this.updater=ve||_}var P=E.prototype=new M;P.constructor=E,S(P,y.prototype),P.isPureReactComponent=!0;var R=Array.isArray,H=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function A(D,B,ve){var we,me={},X=null,ie=null;if(B!=null)for(we in B.ref!==void 0&&(ie=B.ref),B.key!==void 0&&(X=""+B.key),B)H.call(B,we)&&!O.hasOwnProperty(we)&&(me[we]=B[we]);var se=arguments.length-2;if(se===1)me.children=ve;else if(1<se){for(var be=Array(se),Ie=0;Ie<se;Ie++)be[Ie]=arguments[Ie+2];me.children=be}if(D&&D.defaultProps)for(we in se=D.defaultProps,se)me[we]===void 0&&(me[we]=se[we]);return{$$typeof:s,type:D,key:X,ref:ie,props:me,_owner:I.current}}function U(D,B){return{$$typeof:s,type:D.type,key:B,ref:D.ref,props:D.props,_owner:D._owner}}function K(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function z(D){var B={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ve){return B[ve]})}var j=/\/+/g;function le(D,B){return typeof D=="object"&&D!==null&&D.key!=null?z(""+D.key):B.toString(36)}function ce(D,B,ve,we,me){var X=typeof D;(X==="undefined"||X==="boolean")&&(D=null);var ie=!1;if(D===null)ie=!0;else switch(X){case"string":case"number":ie=!0;break;case"object":switch(D.$$typeof){case s:case e:ie=!0}}if(ie)return ie=D,me=me(ie),D=we===""?"."+le(ie,0):we,R(me)?(ve="",D!=null&&(ve=D.replace(j,"$&/")+"/"),ce(me,B,ve,"",function(Ie){return Ie})):me!=null&&(K(me)&&(me=U(me,ve+(!me.key||ie&&ie.key===me.key?"":(""+me.key).replace(j,"$&/")+"/")+D)),B.push(me)),1;if(ie=0,we=we===""?".":we+":",R(D))for(var se=0;se<D.length;se++){X=D[se];var be=we+le(X,se);ie+=ce(X,B,ve,be,me)}else if(be=m(D),typeof be=="function")for(D=be.call(D),se=0;!(X=D.next()).done;)X=X.value,be=we+le(X,se++),ie+=ce(X,B,ve,be,me);else if(X==="object")throw B=String(D),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return ie}function q(D,B,ve){if(D==null)return D;var we=[],me=0;return ce(D,we,"","",function(X){return B.call(ve,X,me++)}),we}function te(D){if(D._status===-1){var B=D._result;B=B(),B.then(function(ve){(D._status===0||D._status===-1)&&(D._status=1,D._result=ve)},function(ve){(D._status===0||D._status===-1)&&(D._status=2,D._result=ve)}),D._status===-1&&(D._status=0,D._result=B)}if(D._status===1)return D._result.default;throw D._result}var W={current:null},F={transition:null},k={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:F,ReactCurrentOwner:I};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Lt.Children={map:q,forEach:function(D,B,ve){q(D,function(){B.apply(this,arguments)},ve)},count:function(D){var B=0;return q(D,function(){B++}),B},toArray:function(D){return q(D,function(B){return B})||[]},only:function(D){if(!K(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Lt.Component=y,Lt.Fragment=t,Lt.Profiler=o,Lt.PureComponent=E,Lt.StrictMode=r,Lt.Suspense=d,Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k,Lt.act=ee,Lt.cloneElement=function(D,B,ve){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var we=S({},D.props),me=D.key,X=D.ref,ie=D._owner;if(B!=null){if(B.ref!==void 0&&(X=B.ref,ie=I.current),B.key!==void 0&&(me=""+B.key),D.type&&D.type.defaultProps)var se=D.type.defaultProps;for(be in B)H.call(B,be)&&!O.hasOwnProperty(be)&&(we[be]=B[be]===void 0&&se!==void 0?se[be]:B[be])}var be=arguments.length-2;if(be===1)we.children=ve;else if(1<be){se=Array(be);for(var Ie=0;Ie<be;Ie++)se[Ie]=arguments[Ie+2];we.children=se}return{$$typeof:s,type:D.type,key:me,ref:X,props:we,_owner:ie}},Lt.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},Lt.createElement=A,Lt.createFactory=function(D){var B=A.bind(null,D);return B.type=D,B},Lt.createRef=function(){return{current:null}},Lt.forwardRef=function(D){return{$$typeof:f,render:D}},Lt.isValidElement=K,Lt.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:te}},Lt.memo=function(D,B){return{$$typeof:h,type:D,compare:B===void 0?null:B}},Lt.startTransition=function(D){var B=F.transition;F.transition={};try{D()}finally{F.transition=B}},Lt.unstable_act=ee,Lt.useCallback=function(D,B){return W.current.useCallback(D,B)},Lt.useContext=function(D){return W.current.useContext(D)},Lt.useDebugValue=function(){},Lt.useDeferredValue=function(D){return W.current.useDeferredValue(D)},Lt.useEffect=function(D,B){return W.current.useEffect(D,B)},Lt.useId=function(){return W.current.useId()},Lt.useImperativeHandle=function(D,B,ve){return W.current.useImperativeHandle(D,B,ve)},Lt.useInsertionEffect=function(D,B){return W.current.useInsertionEffect(D,B)},Lt.useLayoutEffect=function(D,B){return W.current.useLayoutEffect(D,B)},Lt.useMemo=function(D,B){return W.current.useMemo(D,B)},Lt.useReducer=function(D,B,ve){return W.current.useReducer(D,B,ve)},Lt.useRef=function(D){return W.current.useRef(D)},Lt.useState=function(D){return W.current.useState(D)},Lt.useSyncExternalStore=function(D,B,ve){return W.current.useSyncExternalStore(D,B,ve)},Lt.useTransition=function(){return W.current.useTransition()},Lt.version="18.3.1",Lt}var Fm;function jh(){return Fm||(Fm=1,ef.exports=l_()),ef.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function c_(){if(Om)return na;Om=1;var s=jh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var g,x={},m=null,_=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(_=d.ref);for(g in d)r.call(d,g)&&!l.hasOwnProperty(g)&&(x[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)x[g]===void 0&&(x[g]=d[g]);return{$$typeof:e,type:f,key:m,ref:_,props:x,_owner:o.current}}return na.Fragment=t,na.jsx=c,na.jsxs=c,na}var km;function u_(){return km||(km=1,$u.exports=c_()),$u.exports}var Be=u_(),bt=jh(),El={},tf={exports:{}},si={},nf={exports:{}},rf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function f_(){return Bm||(Bm=1,(function(s){function e(F,k){var ee=F.length;F.push(k);e:for(;0<ee;){var D=ee-1>>>1,B=F[D];if(0<o(B,k))F[D]=k,F[ee]=B,ee=D;else break e}}function t(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var k=F[0],ee=F.pop();if(ee!==k){F[0]=ee;e:for(var D=0,B=F.length,ve=B>>>1;D<ve;){var we=2*(D+1)-1,me=F[we],X=we+1,ie=F[X];if(0>o(me,ee))X<B&&0>o(ie,me)?(F[D]=ie,F[X]=ee,D=X):(F[D]=me,F[we]=ee,D=we);else if(X<B&&0>o(ie,ee))F[D]=ie,F[X]=ee,D=X;else break e}}return k}function o(F,k){var ee=F.sortIndex-k.sortIndex;return ee!==0?ee:F.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var d=[],h=[],g=1,x=null,m=3,_=!1,S=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(F){for(var k=t(h);k!==null;){if(k.callback===null)r(h);else if(k.startTime<=F)r(h),k.sortIndex=k.expirationTime,e(d,k);else break;k=t(h)}}function R(F){if(T=!1,P(F),!S)if(t(d)!==null)S=!0,te(H);else{var k=t(h);k!==null&&W(R,k.startTime-F)}}function H(F,k){S=!1,T&&(T=!1,M(A),A=-1),_=!0;var ee=m;try{for(P(k),x=t(d);x!==null&&(!(x.expirationTime>k)||F&&!z());){var D=x.callback;if(typeof D=="function"){x.callback=null,m=x.priorityLevel;var B=D(x.expirationTime<=k);k=s.unstable_now(),typeof B=="function"?x.callback=B:x===t(d)&&r(d),P(k)}else r(d);x=t(d)}if(x!==null)var ve=!0;else{var we=t(h);we!==null&&W(R,we.startTime-k),ve=!1}return ve}finally{x=null,m=ee,_=!1}}var I=!1,O=null,A=-1,U=5,K=-1;function z(){return!(s.unstable_now()-K<U)}function j(){if(O!==null){var F=s.unstable_now();K=F;var k=!0;try{k=O(!0,F)}finally{k?le():(I=!1,O=null)}}else I=!1}var le;if(typeof E=="function")le=function(){E(j)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,q=ce.port2;ce.port1.onmessage=j,le=function(){q.postMessage(null)}}else le=function(){y(j,0)};function te(F){O=F,I||(I=!0,le())}function W(F,k){A=y(function(){F(s.unstable_now())},k)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_continueExecution=function(){S||_||(S=!0,te(H))},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(F){switch(m){case 1:case 2:case 3:var k=3;break;default:k=m}var ee=m;m=k;try{return F()}finally{m=ee}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(F,k){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ee=m;m=F;try{return k()}finally{m=ee}},s.unstable_scheduleCallback=function(F,k,ee){var D=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?D+ee:D):ee=D,F){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=ee+B,F={id:g++,callback:k,priorityLevel:F,startTime:ee,expirationTime:B,sortIndex:-1},ee>D?(F.sortIndex=ee,e(h,F),t(d)===null&&F===t(h)&&(T?(M(A),A=-1):T=!0,W(R,ee-D))):(F.sortIndex=B,e(d,F),S||_||(S=!0,te(H))),F},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(F){var k=m;return function(){var ee=m;m=k;try{return F.apply(this,arguments)}finally{m=ee}}}})(rf)),rf}var zm;function h_(){return zm||(zm=1,nf.exports=f_()),nf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function d_(){if(Hm)return si;Hm=1;var s=jh(),e=h_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function m(n){return d.call(x,n)?!0:d.call(g,n)?!1:h.test(n)?x[n]=!0:(g[n]=!0,!1)}function _(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function S(n,i,a,u){if(i===null||typeof i>"u"||_(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,a,u,p,v,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=b}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function E(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(M,E);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(M,E);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(M,E);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,u){var p=y.hasOwnProperty(i)?y[i]:null;(p!==null?p.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(S(i,a,p,u)&&(a=null),u||p===null?m(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,u=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),z=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),F=Symbol.iterator;function k(n){return n===null||typeof n!="object"?null:(n=F&&n[F]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,D;function B(n){if(D===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+n}var ve=!1;function we(n,i){if(!n||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(de){var u=de}Reflect.construct(n,[],i)}else{try{i.call()}catch(de){u=de}n.call(i.prototype)}else{try{throw Error()}catch(de){u=de}n()}}catch(de){if(de&&u&&typeof de.stack=="string"){for(var p=de.stack.split(`
`),v=u.stack.split(`
`),b=p.length-1,G=v.length-1;1<=b&&0<=G&&p[b]!==v[G];)G--;for(;1<=b&&0<=G;b--,G--)if(p[b]!==v[G]){if(b!==1||G!==1)do if(b--,G--,0>G||p[b]!==v[G]){var Q=`
`+p[b].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=b&&0<=G);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?B(n):""}function me(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=we(n.type,!1),n;case 11:return n=we(n.type.render,!1),n;case 1:return n=we(n.type,!0),n;default:return""}}function X(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case I:return"Portal";case U:return"Profiler";case A:return"StrictMode";case le:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case K:return(n._context.displayName||"Context")+".Provider";case j:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case q:return i=n.displayName||null,i!==null?i:X(n.type)||"Memo";case te:i=n._payload,n=n._init;try{return X(n(i))}catch{}}return null}function ie(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ie(n){var i=be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(b){u=""+b,v.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ye(n){n._valueTracker||(n._valueTracker=Ie(n))}function Ke(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=be(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function We(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Xe(n,i){var a=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function tt(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=se(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function it(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function ut(n,i){it(n,i);var a=se(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?xe(n,i.type,a):i.hasOwnProperty("defaultValue")&&xe(n,i.type,se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function pt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function xe(n,i,a){(i!=="number"||We(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var N=Array.isArray;function Se(n,i,a,u){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&u&&(n[a].defaultSelected=!0)}else{for(a=""+se(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function He(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Qe(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(N(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:se(a)}}function _e(n,i){var a=se(i.value),u=se(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function Rt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function L(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?L(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ne,Me=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,p)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ne=ne||document.createElement("div"),ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Te(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Re).forEach(function(n){Oe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Re[i]=Re[n]})});function pe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Re.hasOwnProperty(n)&&Re[n]?(""+i).trim():i+"px"}function ge(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=pe(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,p):n[a]=p}}var Ve=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(n,i){if(i){if(Ve[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fe=null;function dt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Mt=null,At=null,Y=null;function Ae(n){if(n=Ho(n)){if(typeof Mt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ba(i),Mt(n.stateNode,n.type,i))}}function he(n){At?Y?Y.push(n):Y=[n]:At=n}function ke(){if(At){var n=At,i=Y;if(Y=At=null,Ae(n),i)for(n=0;n<i.length;n++)Ae(i[n])}}function Pe(n,i){return n(i)}function Ee(){}var Je=!1;function rt(n,i,a){if(Je)return n(i,a);Je=!0;try{return Pe(n,i,a)}finally{Je=!1,(At!==null||Y!==null)&&(Ee(),ke())}}function st(n,i){var a=n.stateNode;if(a===null)return null;var u=Ba(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var xt=!1;if(f)try{var Zt={};Object.defineProperty(Zt,"passive",{get:function(){xt=!0}}),window.addEventListener("test",Zt,Zt),window.removeEventListener("test",Zt,Zt)}catch{xt=!1}function cn(n,i,a,u,p,v,b,G,Q){var de=Array.prototype.slice.call(arguments,3);try{i.apply(a,de)}catch(Le){this.onError(Le)}}var jn=!1,Ci=null,li=!1,ci=null,Kn={onError:function(n){jn=!0,Ci=n}};function vi(n,i,a,u,p,v,b,G,Q){jn=!1,Ci=null,cn.apply(Kn,arguments)}function sr(n,i,a,u,p,v,b,G,Q){if(vi.apply(this,arguments),jn){if(jn){var de=Ci;jn=!1,Ci=null}else throw Error(t(198));li||(li=!0,ci=de)}}function qn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function un(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Pn(n){if(qn(n)!==n)throw Error(t(188))}function pn(n){var i=n.alternate;if(!i){if(i=qn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var p=a.return;if(p===null)break;var v=p.alternate;if(v===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===a)return Pn(p),n;if(v===u)return Pn(p),i;v=v.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=v;else{for(var b=!1,G=p.child;G;){if(G===a){b=!0,a=p,u=v;break}if(G===u){b=!0,u=p,a=v;break}G=G.sibling}if(!b){for(G=v.child;G;){if(G===a){b=!0,a=v,u=p;break}if(G===u){b=!0,u=v,a=p;break}G=G.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Mn(n){return n=pn(n),n!==null?Sn(n):null}function Sn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Sn(n);if(i!==null)return i;n=n.sibling}return null}var lt=e.unstable_scheduleCallback,Kt=e.unstable_cancelCallback,mn=e.unstable_shouldYield,Ln=e.unstable_requestPaint,Nt=e.unstable_now,In=e.unstable_getCurrentPriorityLevel,Xi=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,Z=e.unstable_NormalPriority,ue=e.unstable_LowPriority,re=e.unstable_IdlePriority,ae=null,Ge=null;function Ze(n){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(ae,n,void 0,(n.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:_t,$e=Math.log,ot=Math.LN2;function _t(n){return n>>>=0,n===0?32:31-($e(n)/ot|0)|0}var mt=64,nt=4194304;function Pt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Gt(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,p=n.suspendedLanes,v=n.pingedLanes,b=a&268435455;if(b!==0){var G=b&~p;G!==0?u=Pt(G):(v&=b,v!==0&&(u=Pt(v)))}else b=a&~p,b!==0?u=Pt(b):v!==0&&(u=Pt(v));if(u===0)return 0;if(i!==0&&i!==u&&(i&p)===0&&(p=u&-u,v=i&-i,p>=v||p===16&&(v&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-De(i),p=1<<a,u|=n[a],i&=~p;return u}function Wt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var b=31-De(v),G=1<<b,Q=p[b];Q===-1?((G&a)===0||(G&u)!==0)&&(p[b]=Wt(G,i)):Q<=i&&(n.expiredLanes|=G),v&=~G}}function rn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ye(){var n=mt;return mt<<=1,(mt&4194240)===0&&(mt=64),n}function fn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Et(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-De(i),n[i]=a}function An(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-De(a),v=1<<p;i[p]=0,u[p]=-1,n[p]=-1,a&=~v}}function En(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-De(a),p=1<<u;p&i|n[u]&i&&(n[u]|=i),a&=~p}}var Tt=0;function On(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ft,Yt,Ri,Xt,Pi,ji=!1,$r=[],Er=null,wr=null,Tr=null,wo=new Map,To=new Map,br=[],Cv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xd(n,i){switch(n){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":wo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(i.pointerId)}}function bo(n,i,a,u,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:v,targetContainers:[p]},i!==null&&(i=Ho(i),i!==null&&Yt(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function Rv(n,i,a,u,p){switch(i){case"focusin":return Er=bo(Er,n,i,a,u,p),!0;case"dragenter":return wr=bo(wr,n,i,a,u,p),!0;case"mouseover":return Tr=bo(Tr,n,i,a,u,p),!0;case"pointerover":var v=p.pointerId;return wo.set(v,bo(wo.get(v)||null,n,i,a,u,p)),!0;case"gotpointercapture":return v=p.pointerId,To.set(v,bo(To.get(v)||null,n,i,a,u,p)),!0}return!1}function _d(n){var i=es(n.target);if(i!==null){var a=qn(i);if(a!==null){if(i=a.tag,i===13){if(i=un(a),i!==null){n.blockedOn=i,Pi(n.priority,function(){Ri(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function wa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Tc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Fe=u,a.target.dispatchEvent(u),Fe=null}else return i=Ho(a),i!==null&&Yt(i),n.blockedOn=a,!1;i.shift()}return!0}function yd(n,i,a){wa(n)&&a.delete(i)}function Pv(){ji=!1,Er!==null&&wa(Er)&&(Er=null),wr!==null&&wa(wr)&&(wr=null),Tr!==null&&wa(Tr)&&(Tr=null),wo.forEach(yd),To.forEach(yd)}function Co(n,i){n.blockedOn===i&&(n.blockedOn=null,ji||(ji=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Pv)))}function Ro(n){function i(p){return Co(p,n)}if(0<$r.length){Co($r[0],n);for(var a=1;a<$r.length;a++){var u=$r[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Er!==null&&Co(Er,n),wr!==null&&Co(wr,n),Tr!==null&&Co(Tr,n),wo.forEach(i),To.forEach(i),a=0;a<br.length;a++)u=br[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<br.length&&(a=br[0],a.blockedOn===null);)_d(a),a.blockedOn===null&&br.shift()}var bs=R.ReactCurrentBatchConfig,Ta=!0;function Lv(n,i,a,u){var p=Tt,v=bs.transition;bs.transition=null;try{Tt=1,wc(n,i,a,u)}finally{Tt=p,bs.transition=v}}function Iv(n,i,a,u){var p=Tt,v=bs.transition;bs.transition=null;try{Tt=4,wc(n,i,a,u)}finally{Tt=p,bs.transition=v}}function wc(n,i,a,u){if(Ta){var p=Tc(n,i,a,u);if(p===null)Gc(n,i,u,ba,a),xd(n,u);else if(Rv(p,n,i,a,u))u.stopPropagation();else if(xd(n,u),i&4&&-1<Cv.indexOf(n)){for(;p!==null;){var v=Ho(p);if(v!==null&&Ft(v),v=Tc(n,i,a,u),v===null&&Gc(n,i,u,ba,a),v===p)break;p=v}p!==null&&u.stopPropagation()}else Gc(n,i,u,null,a)}}var ba=null;function Tc(n,i,a,u){if(ba=null,n=dt(u),n=es(n),n!==null)if(i=qn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=un(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ba=n,null}function Md(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(In()){case Xi:return 1;case C:return 4;case Z:case ue:return 16;case re:return 536870912;default:return 16}default:return 16}}var Cr=null,bc=null,Ca=null;function Sd(){if(Ca)return Ca;var n,i=bc,a=i.length,u,p="value"in Cr?Cr.value:Cr.textContent,v=p.length;for(n=0;n<a&&i[n]===p[n];n++);var b=a-n;for(u=1;u<=b&&i[a-u]===p[v-u];u++);return Ca=p.slice(n,1<u?1-u:void 0)}function Ra(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Pa(){return!0}function Ad(){return!1}function ui(n){function i(a,u,p,v,b){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=v,this.target=b,this.currentTarget=null;for(var G in n)n.hasOwnProperty(G)&&(a=n[G],this[G]=a?a(v):v[G]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Pa:Ad,this.isPropagationStopped=Ad,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),i}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cc=ui(Cs),Po=ee({},Cs,{view:0,detail:0}),Dv=ui(Po),Rc,Pc,Lo,La=ee({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Lo&&(Lo&&n.type==="mousemove"?(Rc=n.screenX-Lo.screenX,Pc=n.screenY-Lo.screenY):Pc=Rc=0,Lo=n),Rc)},movementY:function(n){return"movementY"in n?n.movementY:Pc}}),Ed=ui(La),Uv=ee({},La,{dataTransfer:0}),Nv=ui(Uv),Fv=ee({},Po,{relatedTarget:0}),Lc=ui(Fv),Ov=ee({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),kv=ui(Ov),Bv=ee({},Cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),zv=ui(Bv),Hv=ee({},Cs,{data:0}),wd=ui(Hv),Vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Wv[n])?!!i[n]:!1}function Ic(){return Xv}var jv=ee({},Po,{key:function(n){if(n.key){var i=Vv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ra(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Gv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(n){return n.type==="keypress"?Ra(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ra(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Kv=ui(jv),qv=ee({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=ui(qv),Yv=ee({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),Qv=ui(Yv),Jv=ee({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zv=ui(Jv),$v=ee({},La,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ex=ui($v),tx=[9,13,27,32],Dc=f&&"CompositionEvent"in window,Io=null;f&&"documentMode"in document&&(Io=document.documentMode);var nx=f&&"TextEvent"in window&&!Io,bd=f&&(!Dc||Io&&8<Io&&11>=Io),Cd=" ",Rd=!1;function Pd(n,i){switch(n){case"keyup":return tx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ld(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Rs=!1;function ix(n,i){switch(n){case"compositionend":return Ld(i);case"keypress":return i.which!==32?null:(Rd=!0,Cd);case"textInput":return n=i.data,n===Cd&&Rd?null:n;default:return null}}function rx(n,i){if(Rs)return n==="compositionend"||!Dc&&Pd(n,i)?(n=Sd(),Ca=bc=Cr=null,Rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return bd&&i.locale!=="ko"?null:i.data;default:return null}}var sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!sx[n.type]:i==="textarea"}function Dd(n,i,a,u){he(u),i=Fa(i,"onChange"),0<i.length&&(a=new Cc("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Do=null,Uo=null;function ox(n){Jd(n,0)}function Ia(n){var i=Us(n);if(Ke(i))return n}function ax(n,i){if(n==="change")return i}var Ud=!1;if(f){var Uc;if(f){var Nc="oninput"in document;if(!Nc){var Nd=document.createElement("div");Nd.setAttribute("oninput","return;"),Nc=typeof Nd.oninput=="function"}Uc=Nc}else Uc=!1;Ud=Uc&&(!document.documentMode||9<document.documentMode)}function Fd(){Do&&(Do.detachEvent("onpropertychange",Od),Uo=Do=null)}function Od(n){if(n.propertyName==="value"&&Ia(Uo)){var i=[];Dd(i,Uo,n,dt(n)),rt(ox,i)}}function lx(n,i,a){n==="focusin"?(Fd(),Do=i,Uo=a,Do.attachEvent("onpropertychange",Od)):n==="focusout"&&Fd()}function cx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ia(Uo)}function ux(n,i){if(n==="click")return Ia(i)}function fx(n,i){if(n==="input"||n==="change")return Ia(i)}function hx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Li=typeof Object.is=="function"?Object.is:hx;function No(n,i){if(Li(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!d.call(i,p)||!Li(n[p],i[p]))return!1}return!0}function kd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Bd(n,i){var a=kd(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=kd(a)}}function zd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?zd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Hd(){for(var n=window,i=We();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=We(n.document)}return i}function Fc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function dx(n){var i=Hd(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&zd(a.ownerDocument.documentElement,a)){if(u!==null&&Fc(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,v=Math.min(u.start,p);u=u.end===void 0?v:Math.min(u.end,p),!n.extend&&v>u&&(p=u,u=v,v=p),p=Bd(a,v);var b=Bd(a,u);p&&b&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),v>u?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var px=f&&"documentMode"in document&&11>=document.documentMode,Ps=null,Oc=null,Fo=null,kc=!1;function Vd(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kc||Ps==null||Ps!==We(u)||(u=Ps,"selectionStart"in u&&Fc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Fo&&No(Fo,u)||(Fo=u,u=Fa(Oc,"onSelect"),0<u.length&&(i=new Cc("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Ps)))}function Da(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ls={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},Bc={},Gd={};f&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Ua(n){if(Bc[n])return Bc[n];if(!Ls[n])return n;var i=Ls[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Gd)return Bc[n]=i[a];return n}var Wd=Ua("animationend"),Xd=Ua("animationiteration"),jd=Ua("animationstart"),Kd=Ua("transitionend"),qd=new Map,Yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(n,i){qd.set(n,i),l(i,[n])}for(var zc=0;zc<Yd.length;zc++){var Hc=Yd[zc],mx=Hc.toLowerCase(),gx=Hc[0].toUpperCase()+Hc.slice(1);Rr(mx,"on"+gx)}Rr(Wd,"onAnimationEnd"),Rr(Xd,"onAnimationIteration"),Rr(jd,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(Kd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function Qd(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,sr(u,i,void 0,n),n.currentTarget=null}function Jd(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],p=u.event;u=u.listeners;e:{var v=void 0;if(i)for(var b=u.length-1;0<=b;b--){var G=u[b],Q=G.instance,de=G.currentTarget;if(G=G.listener,Q!==v&&p.isPropagationStopped())break e;Qd(p,G,de),v=Q}else for(b=0;b<u.length;b++){if(G=u[b],Q=G.instance,de=G.currentTarget,G=G.listener,Q!==v&&p.isPropagationStopped())break e;Qd(p,G,de),v=Q}}}if(li)throw n=ci,li=!1,ci=null,n}function Qt(n,i){var a=i[Yc];a===void 0&&(a=i[Yc]=new Set);var u=n+"__bubble";a.has(u)||(Zd(i,n,2,!1),a.add(u))}function Vc(n,i,a){var u=0;i&&(u|=4),Zd(a,n,u,i)}var Na="_reactListening"+Math.random().toString(36).slice(2);function ko(n){if(!n[Na]){n[Na]=!0,r.forEach(function(a){a!=="selectionchange"&&(vx.has(a)||Vc(a,!1,n),Vc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Na]||(i[Na]=!0,Vc("selectionchange",!1,i))}}function Zd(n,i,a,u){switch(Md(i)){case 1:var p=Lv;break;case 4:p=Iv;break;default:p=wc}a=p.bind(null,i,a,n),p=void 0,!xt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function Gc(n,i,a,u,p){var v=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var G=u.stateNode.containerInfo;if(G===p||G.nodeType===8&&G.parentNode===p)break;if(b===4)for(b=u.return;b!==null;){var Q=b.tag;if((Q===3||Q===4)&&(Q=b.stateNode.containerInfo,Q===p||Q.nodeType===8&&Q.parentNode===p))return;b=b.return}for(;G!==null;){if(b=es(G),b===null)return;if(Q=b.tag,Q===5||Q===6){u=v=b;continue e}G=G.parentNode}}u=u.return}rt(function(){var de=v,Le=dt(a),Ue=[];e:{var Ce=qd.get(n);if(Ce!==void 0){var et=Cc,ct=n;switch(n){case"keypress":if(Ra(a)===0)break e;case"keydown":case"keyup":et=Kv;break;case"focusin":ct="focus",et=Lc;break;case"focusout":ct="blur",et=Lc;break;case"beforeblur":case"afterblur":et=Lc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=Nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=Qv;break;case Wd:case Xd:case jd:et=kv;break;case Kd:et=Zv;break;case"scroll":et=Dv;break;case"wheel":et=ex;break;case"copy":case"cut":case"paste":et=zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=Td}var ft=(i&4)!==0,an=!ft&&n==="scroll",oe=ft?Ce!==null?Ce+"Capture":null:Ce;ft=[];for(var $=de,fe;$!==null;){fe=$;var ze=fe.stateNode;if(fe.tag===5&&ze!==null&&(fe=ze,oe!==null&&(ze=st($,oe),ze!=null&&ft.push(Bo($,ze,fe)))),an)break;$=$.return}0<ft.length&&(Ce=new et(Ce,ct,null,a,Le),Ue.push({event:Ce,listeners:ft}))}}if((i&7)===0){e:{if(Ce=n==="mouseover"||n==="pointerover",et=n==="mouseout"||n==="pointerout",Ce&&a!==Fe&&(ct=a.relatedTarget||a.fromElement)&&(es(ct)||ct[or]))break e;if((et||Ce)&&(Ce=Le.window===Le?Le:(Ce=Le.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,et?(ct=a.relatedTarget||a.toElement,et=de,ct=ct?es(ct):null,ct!==null&&(an=qn(ct),ct!==an||ct.tag!==5&&ct.tag!==6)&&(ct=null)):(et=null,ct=de),et!==ct)){if(ft=Ed,ze="onMouseLeave",oe="onMouseEnter",$="mouse",(n==="pointerout"||n==="pointerover")&&(ft=Td,ze="onPointerLeave",oe="onPointerEnter",$="pointer"),an=et==null?Ce:Us(et),fe=ct==null?Ce:Us(ct),Ce=new ft(ze,$+"leave",et,a,Le),Ce.target=an,Ce.relatedTarget=fe,ze=null,es(Le)===de&&(ft=new ft(oe,$+"enter",ct,a,Le),ft.target=fe,ft.relatedTarget=an,ze=ft),an=ze,et&&ct)t:{for(ft=et,oe=ct,$=0,fe=ft;fe;fe=Is(fe))$++;for(fe=0,ze=oe;ze;ze=Is(ze))fe++;for(;0<$-fe;)ft=Is(ft),$--;for(;0<fe-$;)oe=Is(oe),fe--;for(;$--;){if(ft===oe||oe!==null&&ft===oe.alternate)break t;ft=Is(ft),oe=Is(oe)}ft=null}else ft=null;et!==null&&$d(Ue,Ce,et,ft,!1),ct!==null&&an!==null&&$d(Ue,an,ct,ft,!0)}}e:{if(Ce=de?Us(de):window,et=Ce.nodeName&&Ce.nodeName.toLowerCase(),et==="select"||et==="input"&&Ce.type==="file")var ht=ax;else if(Id(Ce))if(Ud)ht=fx;else{ht=cx;var gt=lx}else(et=Ce.nodeName)&&et.toLowerCase()==="input"&&(Ce.type==="checkbox"||Ce.type==="radio")&&(ht=ux);if(ht&&(ht=ht(n,de))){Dd(Ue,ht,a,Le);break e}gt&&gt(n,Ce,de),n==="focusout"&&(gt=Ce._wrapperState)&&gt.controlled&&Ce.type==="number"&&xe(Ce,"number",Ce.value)}switch(gt=de?Us(de):window,n){case"focusin":(Id(gt)||gt.contentEditable==="true")&&(Ps=gt,Oc=de,Fo=null);break;case"focusout":Fo=Oc=Ps=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,Vd(Ue,a,Le);break;case"selectionchange":if(px)break;case"keydown":case"keyup":Vd(Ue,a,Le)}var vt;if(Dc)e:{switch(n){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Rs?Pd(n,a)&&(St="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(bd&&a.locale!=="ko"&&(Rs||St!=="onCompositionStart"?St==="onCompositionEnd"&&Rs&&(vt=Sd()):(Cr=Le,bc="value"in Cr?Cr.value:Cr.textContent,Rs=!0)),gt=Fa(de,St),0<gt.length&&(St=new wd(St,n,null,a,Le),Ue.push({event:St,listeners:gt}),vt?St.data=vt:(vt=Ld(a),vt!==null&&(St.data=vt)))),(vt=nx?ix(n,a):rx(n,a))&&(de=Fa(de,"onBeforeInput"),0<de.length&&(Le=new wd("onBeforeInput","beforeinput",null,a,Le),Ue.push({event:Le,listeners:de}),Le.data=vt))}Jd(Ue,i)})}function Bo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Fa(n,i){for(var a=i+"Capture",u=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=st(n,a),v!=null&&u.unshift(Bo(n,v,p)),v=st(n,i),v!=null&&u.push(Bo(n,v,p))),n=n.return}return u}function Is(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $d(n,i,a,u,p){for(var v=i._reactName,b=[];a!==null&&a!==u;){var G=a,Q=G.alternate,de=G.stateNode;if(Q!==null&&Q===u)break;G.tag===5&&de!==null&&(G=de,p?(Q=st(a,v),Q!=null&&b.unshift(Bo(a,Q,G))):p||(Q=st(a,v),Q!=null&&b.push(Bo(a,Q,G)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var xx=/\r\n?/g,_x=/\u0000|\uFFFD/g;function ep(n){return(typeof n=="string"?n:""+n).replace(xx,`
`).replace(_x,"")}function Oa(n,i,a){if(i=ep(i),ep(n)!==i&&a)throw Error(t(425))}function ka(){}var Wc=null,Xc=null;function jc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,yx=typeof clearTimeout=="function"?clearTimeout:void 0,tp=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof tp<"u"?function(n){return tp.resolve(null).then(n).catch(Sx)}:Kc;function Sx(n){setTimeout(function(){throw n})}function qc(n,i){var a=i,u=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){n.removeChild(p),Ro(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);Ro(i)}function Pr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function np(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Ki="__reactFiber$"+Ds,zo="__reactProps$"+Ds,or="__reactContainer$"+Ds,Yc="__reactEvents$"+Ds,Ax="__reactListeners$"+Ds,Ex="__reactHandles$"+Ds;function es(n){var i=n[Ki];if(i)return i;for(var a=n.parentNode;a;){if(i=a[or]||a[Ki]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=np(n);n!==null;){if(a=n[Ki])return a;n=np(n)}return i}n=a,a=n.parentNode}return null}function Ho(n){return n=n[Ki]||n[or],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ba(n){return n[zo]||null}var Qc=[],Ns=-1;function Lr(n){return{current:n}}function Jt(n){0>Ns||(n.current=Qc[Ns],Qc[Ns]=null,Ns--)}function qt(n,i){Ns++,Qc[Ns]=n.current,n.current=i}var Ir={},kn=Lr(Ir),ei=Lr(!1),ts=Ir;function Fs(n,i){var a=n.type.contextTypes;if(!a)return Ir;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in a)p[v]=i[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function ti(n){return n=n.childContextTypes,n!=null}function za(){Jt(ei),Jt(kn)}function ip(n,i,a){if(kn.current!==Ir)throw Error(t(168));qt(kn,i),qt(ei,a)}function rp(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in i))throw Error(t(108,ie(n)||"Unknown",p));return ee({},a,u)}function Ha(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ir,ts=kn.current,qt(kn,n),qt(ei,ei.current),!0}function sp(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=rp(n,i,ts),u.__reactInternalMemoizedMergedChildContext=n,Jt(ei),Jt(kn),qt(kn,n)):Jt(ei),qt(ei,a)}var ar=null,Va=!1,Jc=!1;function op(n){ar===null?ar=[n]:ar.push(n)}function wx(n){Va=!0,op(n)}function Dr(){if(!Jc&&ar!==null){Jc=!0;var n=0,i=Tt;try{var a=ar;for(Tt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}ar=null,Va=!1}catch(p){throw ar!==null&&(ar=ar.slice(n+1)),lt(Xi,Dr),p}finally{Tt=i,Jc=!1}}return null}var Os=[],ks=0,Ga=null,Wa=0,xi=[],_i=0,ns=null,lr=1,cr="";function is(n,i){Os[ks++]=Wa,Os[ks++]=Ga,Ga=n,Wa=i}function ap(n,i,a){xi[_i++]=lr,xi[_i++]=cr,xi[_i++]=ns,ns=n;var u=lr;n=cr;var p=32-De(u)-1;u&=~(1<<p),a+=1;var v=32-De(i)+p;if(30<v){var b=p-p%5;v=(u&(1<<b)-1).toString(32),u>>=b,p-=b,lr=1<<32-De(i)+p|a<<p|u,cr=v+n}else lr=1<<v|a<<p|u,cr=n}function Zc(n){n.return!==null&&(is(n,1),ap(n,1,0))}function $c(n){for(;n===Ga;)Ga=Os[--ks],Os[ks]=null,Wa=Os[--ks],Os[ks]=null;for(;n===ns;)ns=xi[--_i],xi[_i]=null,cr=xi[--_i],xi[_i]=null,lr=xi[--_i],xi[_i]=null}var fi=null,hi=null,$t=!1,Ii=null;function lp(n,i){var a=Ai(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function cp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,fi=n,hi=Pr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,fi=n,hi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ns!==null?{id:lr,overflow:cr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ai(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,fi=n,hi=null,!0):!1;default:return!1}}function eu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function tu(n){if($t){var i=hi;if(i){var a=i;if(!cp(n,i)){if(eu(n))throw Error(t(418));i=Pr(a.nextSibling);var u=fi;i&&cp(n,i)?lp(u,a):(n.flags=n.flags&-4097|2,$t=!1,fi=n)}}else{if(eu(n))throw Error(t(418));n.flags=n.flags&-4097|2,$t=!1,fi=n}}}function up(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;fi=n}function Xa(n){if(n!==fi)return!1;if(!$t)return up(n),$t=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!jc(n.type,n.memoizedProps)),i&&(i=hi)){if(eu(n))throw fp(),Error(t(418));for(;i;)lp(n,i),i=Pr(i.nextSibling)}if(up(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){hi=Pr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}hi=null}}else hi=fi?Pr(n.stateNode.nextSibling):null;return!0}function fp(){for(var n=hi;n;)n=Pr(n.nextSibling)}function Bs(){hi=fi=null,$t=!1}function nu(n){Ii===null?Ii=[n]:Ii.push(n)}var Tx=R.ReactCurrentBatchConfig;function Vo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var p=u,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(b){var G=p.refs;b===null?delete G[v]:G[v]=b},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ja(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function hp(n){var i=n._init;return i(n._payload)}function dp(n){function i(oe,$){if(n){var fe=oe.deletions;fe===null?(oe.deletions=[$],oe.flags|=16):fe.push($)}}function a(oe,$){if(!n)return null;for(;$!==null;)i(oe,$),$=$.sibling;return null}function u(oe,$){for(oe=new Map;$!==null;)$.key!==null?oe.set($.key,$):oe.set($.index,$),$=$.sibling;return oe}function p(oe,$){return oe=Hr(oe,$),oe.index=0,oe.sibling=null,oe}function v(oe,$,fe){return oe.index=fe,n?(fe=oe.alternate,fe!==null?(fe=fe.index,fe<$?(oe.flags|=2,$):fe):(oe.flags|=2,$)):(oe.flags|=1048576,$)}function b(oe){return n&&oe.alternate===null&&(oe.flags|=2),oe}function G(oe,$,fe,ze){return $===null||$.tag!==6?($=Ku(fe,oe.mode,ze),$.return=oe,$):($=p($,fe),$.return=oe,$)}function Q(oe,$,fe,ze){var ht=fe.type;return ht===O?Le(oe,$,fe.props.children,ze,fe.key):$!==null&&($.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===te&&hp(ht)===$.type)?(ze=p($,fe.props),ze.ref=Vo(oe,$,fe),ze.return=oe,ze):(ze=gl(fe.type,fe.key,fe.props,null,oe.mode,ze),ze.ref=Vo(oe,$,fe),ze.return=oe,ze)}function de(oe,$,fe,ze){return $===null||$.tag!==4||$.stateNode.containerInfo!==fe.containerInfo||$.stateNode.implementation!==fe.implementation?($=qu(fe,oe.mode,ze),$.return=oe,$):($=p($,fe.children||[]),$.return=oe,$)}function Le(oe,$,fe,ze,ht){return $===null||$.tag!==7?($=fs(fe,oe.mode,ze,ht),$.return=oe,$):($=p($,fe),$.return=oe,$)}function Ue(oe,$,fe){if(typeof $=="string"&&$!==""||typeof $=="number")return $=Ku(""+$,oe.mode,fe),$.return=oe,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case H:return fe=gl($.type,$.key,$.props,null,oe.mode,fe),fe.ref=Vo(oe,null,$),fe.return=oe,fe;case I:return $=qu($,oe.mode,fe),$.return=oe,$;case te:var ze=$._init;return Ue(oe,ze($._payload),fe)}if(N($)||k($))return $=fs($,oe.mode,fe,null),$.return=oe,$;ja(oe,$)}return null}function Ce(oe,$,fe,ze){var ht=$!==null?$.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return ht!==null?null:G(oe,$,""+fe,ze);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case H:return fe.key===ht?Q(oe,$,fe,ze):null;case I:return fe.key===ht?de(oe,$,fe,ze):null;case te:return ht=fe._init,Ce(oe,$,ht(fe._payload),ze)}if(N(fe)||k(fe))return ht!==null?null:Le(oe,$,fe,ze,null);ja(oe,fe)}return null}function et(oe,$,fe,ze,ht){if(typeof ze=="string"&&ze!==""||typeof ze=="number")return oe=oe.get(fe)||null,G($,oe,""+ze,ht);if(typeof ze=="object"&&ze!==null){switch(ze.$$typeof){case H:return oe=oe.get(ze.key===null?fe:ze.key)||null,Q($,oe,ze,ht);case I:return oe=oe.get(ze.key===null?fe:ze.key)||null,de($,oe,ze,ht);case te:var gt=ze._init;return et(oe,$,fe,gt(ze._payload),ht)}if(N(ze)||k(ze))return oe=oe.get(fe)||null,Le($,oe,ze,ht,null);ja($,ze)}return null}function ct(oe,$,fe,ze){for(var ht=null,gt=null,vt=$,St=$=0,bn=null;vt!==null&&St<fe.length;St++){vt.index>St?(bn=vt,vt=null):bn=vt.sibling;var Vt=Ce(oe,vt,fe[St],ze);if(Vt===null){vt===null&&(vt=bn);break}n&&vt&&Vt.alternate===null&&i(oe,vt),$=v(Vt,$,St),gt===null?ht=Vt:gt.sibling=Vt,gt=Vt,vt=bn}if(St===fe.length)return a(oe,vt),$t&&is(oe,St),ht;if(vt===null){for(;St<fe.length;St++)vt=Ue(oe,fe[St],ze),vt!==null&&($=v(vt,$,St),gt===null?ht=vt:gt.sibling=vt,gt=vt);return $t&&is(oe,St),ht}for(vt=u(oe,vt);St<fe.length;St++)bn=et(vt,oe,St,fe[St],ze),bn!==null&&(n&&bn.alternate!==null&&vt.delete(bn.key===null?St:bn.key),$=v(bn,$,St),gt===null?ht=bn:gt.sibling=bn,gt=bn);return n&&vt.forEach(function(Vr){return i(oe,Vr)}),$t&&is(oe,St),ht}function ft(oe,$,fe,ze){var ht=k(fe);if(typeof ht!="function")throw Error(t(150));if(fe=ht.call(fe),fe==null)throw Error(t(151));for(var gt=ht=null,vt=$,St=$=0,bn=null,Vt=fe.next();vt!==null&&!Vt.done;St++,Vt=fe.next()){vt.index>St?(bn=vt,vt=null):bn=vt.sibling;var Vr=Ce(oe,vt,Vt.value,ze);if(Vr===null){vt===null&&(vt=bn);break}n&&vt&&Vr.alternate===null&&i(oe,vt),$=v(Vr,$,St),gt===null?ht=Vr:gt.sibling=Vr,gt=Vr,vt=bn}if(Vt.done)return a(oe,vt),$t&&is(oe,St),ht;if(vt===null){for(;!Vt.done;St++,Vt=fe.next())Vt=Ue(oe,Vt.value,ze),Vt!==null&&($=v(Vt,$,St),gt===null?ht=Vt:gt.sibling=Vt,gt=Vt);return $t&&is(oe,St),ht}for(vt=u(oe,vt);!Vt.done;St++,Vt=fe.next())Vt=et(vt,oe,St,Vt.value,ze),Vt!==null&&(n&&Vt.alternate!==null&&vt.delete(Vt.key===null?St:Vt.key),$=v(Vt,$,St),gt===null?ht=Vt:gt.sibling=Vt,gt=Vt);return n&&vt.forEach(function(s_){return i(oe,s_)}),$t&&is(oe,St),ht}function an(oe,$,fe,ze){if(typeof fe=="object"&&fe!==null&&fe.type===O&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case H:e:{for(var ht=fe.key,gt=$;gt!==null;){if(gt.key===ht){if(ht=fe.type,ht===O){if(gt.tag===7){a(oe,gt.sibling),$=p(gt,fe.props.children),$.return=oe,oe=$;break e}}else if(gt.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===te&&hp(ht)===gt.type){a(oe,gt.sibling),$=p(gt,fe.props),$.ref=Vo(oe,gt,fe),$.return=oe,oe=$;break e}a(oe,gt);break}else i(oe,gt);gt=gt.sibling}fe.type===O?($=fs(fe.props.children,oe.mode,ze,fe.key),$.return=oe,oe=$):(ze=gl(fe.type,fe.key,fe.props,null,oe.mode,ze),ze.ref=Vo(oe,$,fe),ze.return=oe,oe=ze)}return b(oe);case I:e:{for(gt=fe.key;$!==null;){if($.key===gt)if($.tag===4&&$.stateNode.containerInfo===fe.containerInfo&&$.stateNode.implementation===fe.implementation){a(oe,$.sibling),$=p($,fe.children||[]),$.return=oe,oe=$;break e}else{a(oe,$);break}else i(oe,$);$=$.sibling}$=qu(fe,oe.mode,ze),$.return=oe,oe=$}return b(oe);case te:return gt=fe._init,an(oe,$,gt(fe._payload),ze)}if(N(fe))return ct(oe,$,fe,ze);if(k(fe))return ft(oe,$,fe,ze);ja(oe,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,$!==null&&$.tag===6?(a(oe,$.sibling),$=p($,fe),$.return=oe,oe=$):(a(oe,$),$=Ku(fe,oe.mode,ze),$.return=oe,oe=$),b(oe)):a(oe,$)}return an}var zs=dp(!0),pp=dp(!1),Ka=Lr(null),qa=null,Hs=null,iu=null;function ru(){iu=Hs=qa=null}function su(n){var i=Ka.current;Jt(Ka),n._currentValue=i}function ou(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Vs(n,i){qa=n,iu=Hs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ni=!0),n.firstContext=null)}function yi(n){var i=n._currentValue;if(iu!==n)if(n={context:n,memoizedValue:i,next:null},Hs===null){if(qa===null)throw Error(t(308));Hs=n,qa.dependencies={lanes:0,firstContext:n}}else Hs=Hs.next=n;return i}var rs=null;function au(n){rs===null?rs=[n]:rs.push(n)}function mp(n,i,a,u){var p=i.interleaved;return p===null?(a.next=a,au(i)):(a.next=p.next,p.next=a),i.interleaved=a,ur(n,u)}function ur(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Ur=!1;function lu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Nr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ot&2)!==0){var p=u.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),u.pending=i,ur(n,a)}return p=u.interleaved,p===null?(i.next=i,au(u)):(i.next=p.next,p.next=i),u.interleaved=i,ur(n,a)}function Ya(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,En(n,a)}}function vp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?p=v=b:v=v.next=b,a=a.next}while(a!==null);v===null?p=v=i:v=v.next=i}else p=v=i;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Qa(n,i,a,u){var p=n.updateQueue;Ur=!1;var v=p.firstBaseUpdate,b=p.lastBaseUpdate,G=p.shared.pending;if(G!==null){p.shared.pending=null;var Q=G,de=Q.next;Q.next=null,b===null?v=de:b.next=de,b=Q;var Le=n.alternate;Le!==null&&(Le=Le.updateQueue,G=Le.lastBaseUpdate,G!==b&&(G===null?Le.firstBaseUpdate=de:G.next=de,Le.lastBaseUpdate=Q))}if(v!==null){var Ue=p.baseState;b=0,Le=de=Q=null,G=v;do{var Ce=G.lane,et=G.eventTime;if((u&Ce)===Ce){Le!==null&&(Le=Le.next={eventTime:et,lane:0,tag:G.tag,payload:G.payload,callback:G.callback,next:null});e:{var ct=n,ft=G;switch(Ce=i,et=a,ft.tag){case 1:if(ct=ft.payload,typeof ct=="function"){Ue=ct.call(et,Ue,Ce);break e}Ue=ct;break e;case 3:ct.flags=ct.flags&-65537|128;case 0:if(ct=ft.payload,Ce=typeof ct=="function"?ct.call(et,Ue,Ce):ct,Ce==null)break e;Ue=ee({},Ue,Ce);break e;case 2:Ur=!0}}G.callback!==null&&G.lane!==0&&(n.flags|=64,Ce=p.effects,Ce===null?p.effects=[G]:Ce.push(G))}else et={eventTime:et,lane:Ce,tag:G.tag,payload:G.payload,callback:G.callback,next:null},Le===null?(de=Le=et,Q=Ue):Le=Le.next=et,b|=Ce;if(G=G.next,G===null){if(G=p.shared.pending,G===null)break;Ce=G,G=Ce.next,Ce.next=null,p.lastBaseUpdate=Ce,p.shared.pending=null}}while(!0);if(Le===null&&(Q=Ue),p.baseState=Q,p.firstBaseUpdate=de,p.lastBaseUpdate=Le,i=p.shared.interleaved,i!==null){p=i;do b|=p.lane,p=p.next;while(p!==i)}else v===null&&(p.shared.lanes=0);as|=b,n.lanes=b,n.memoizedState=Ue}}function xp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var Go={},qi=Lr(Go),Wo=Lr(Go),Xo=Lr(Go);function ss(n){if(n===Go)throw Error(t(174));return n}function cu(n,i){switch(qt(Xo,i),qt(Wo,n),qt(qi,Go),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:w(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=w(i,n)}Jt(qi),qt(qi,i)}function Gs(){Jt(qi),Jt(Wo),Jt(Xo)}function _p(n){ss(Xo.current);var i=ss(qi.current),a=w(i,n.type);i!==a&&(qt(Wo,n),qt(qi,a))}function uu(n){Wo.current===n&&(Jt(qi),Jt(Wo))}var en=Lr(0);function Ja(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var fu=[];function hu(){for(var n=0;n<fu.length;n++)fu[n]._workInProgressVersionPrimary=null;fu.length=0}var Za=R.ReactCurrentDispatcher,du=R.ReactCurrentBatchConfig,os=0,tn=null,gn=null,wn=null,$a=!1,jo=!1,Ko=0,bx=0;function Bn(){throw Error(t(321))}function pu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Li(n[a],i[a]))return!1;return!0}function mu(n,i,a,u,p,v){if(os=v,tn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Za.current=n===null||n.memoizedState===null?Lx:Ix,n=a(u,p),jo){v=0;do{if(jo=!1,Ko=0,25<=v)throw Error(t(301));v+=1,wn=gn=null,i.updateQueue=null,Za.current=Dx,n=a(u,p)}while(jo)}if(Za.current=nl,i=gn!==null&&gn.next!==null,os=0,wn=gn=tn=null,$a=!1,i)throw Error(t(300));return n}function gu(){var n=Ko!==0;return Ko=0,n}function Yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?tn.memoizedState=wn=n:wn=wn.next=n,wn}function Mi(){if(gn===null){var n=tn.alternate;n=n!==null?n.memoizedState:null}else n=gn.next;var i=wn===null?tn.memoizedState:wn.next;if(i!==null)wn=i,gn=n;else{if(n===null)throw Error(t(310));gn=n,n={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},wn===null?tn.memoizedState=wn=n:wn=wn.next=n}return wn}function qo(n,i){return typeof i=="function"?i(n):i}function vu(n){var i=Mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=gn,p=u.baseQueue,v=a.pending;if(v!==null){if(p!==null){var b=p.next;p.next=v.next,v.next=b}u.baseQueue=p=v,a.pending=null}if(p!==null){v=p.next,u=u.baseState;var G=b=null,Q=null,de=v;do{var Le=de.lane;if((os&Le)===Le)Q!==null&&(Q=Q.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),u=de.hasEagerState?de.eagerState:n(u,de.action);else{var Ue={lane:Le,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};Q===null?(G=Q=Ue,b=u):Q=Q.next=Ue,tn.lanes|=Le,as|=Le}de=de.next}while(de!==null&&de!==v);Q===null?b=u:Q.next=G,Li(u,i.memoizedState)||(ni=!0),i.memoizedState=u,i.baseState=b,i.baseQueue=Q,a.lastRenderedState=u}if(n=a.interleaved,n!==null){p=n;do v=p.lane,tn.lanes|=v,as|=v,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function xu(n){var i=Mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,p=a.pending,v=i.memoizedState;if(p!==null){a.pending=null;var b=p=p.next;do v=n(v,b.action),b=b.next;while(b!==p);Li(v,i.memoizedState)||(ni=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,u]}function yp(){}function Mp(n,i){var a=tn,u=Mi(),p=i(),v=!Li(u.memoizedState,p);if(v&&(u.memoizedState=p,ni=!0),u=u.queue,_u(Ep.bind(null,a,u,n),[n]),u.getSnapshot!==i||v||wn!==null&&wn.memoizedState.tag&1){if(a.flags|=2048,Yo(9,Ap.bind(null,a,u,p,i),void 0,null),Tn===null)throw Error(t(349));(os&30)!==0||Sp(a,i,p)}return p}function Sp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Ap(n,i,a,u){i.value=a,i.getSnapshot=u,wp(i)&&Tp(n)}function Ep(n,i,a){return a(function(){wp(i)&&Tp(n)})}function wp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Li(n,a)}catch{return!0}}function Tp(n){var i=ur(n,1);i!==null&&Fi(i,n,1,-1)}function bp(n){var i=Yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:n},i.queue=n,n=n.dispatch=Px.bind(null,tn,n),[i.memoizedState,n]}function Yo(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Cp(){return Mi().memoizedState}function el(n,i,a,u){var p=Yi();tn.flags|=n,p.memoizedState=Yo(1|i,a,void 0,u===void 0?null:u)}function tl(n,i,a,u){var p=Mi();u=u===void 0?null:u;var v=void 0;if(gn!==null){var b=gn.memoizedState;if(v=b.destroy,u!==null&&pu(u,b.deps)){p.memoizedState=Yo(i,a,v,u);return}}tn.flags|=n,p.memoizedState=Yo(1|i,a,v,u)}function Rp(n,i){return el(8390656,8,n,i)}function _u(n,i){return tl(2048,8,n,i)}function Pp(n,i){return tl(4,2,n,i)}function Lp(n,i){return tl(4,4,n,i)}function Ip(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Dp(n,i,a){return a=a!=null?a.concat([n]):null,tl(4,4,Ip.bind(null,i,n),a)}function yu(){}function Up(n,i){var a=Mi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&pu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Np(n,i){var a=Mi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&pu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Fp(n,i,a){return(os&21)===0?(n.baseState&&(n.baseState=!1,ni=!0),n.memoizedState=a):(Li(a,i)||(a=Ye(),tn.lanes|=a,as|=a,n.baseState=!0),i)}function Cx(n,i){var a=Tt;Tt=a!==0&&4>a?a:4,n(!0);var u=du.transition;du.transition={};try{n(!1),i()}finally{Tt=a,du.transition=u}}function Op(){return Mi().memoizedState}function Rx(n,i,a){var u=Br(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},kp(n))Bp(i,a);else if(a=mp(n,i,a,u),a!==null){var p=Qn();Fi(a,n,u,p),zp(a,i,u)}}function Px(n,i,a){var u=Br(n),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(kp(n))Bp(i,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var b=i.lastRenderedState,G=v(b,a);if(p.hasEagerState=!0,p.eagerState=G,Li(G,b)){var Q=i.interleaved;Q===null?(p.next=p,au(i)):(p.next=Q.next,Q.next=p),i.interleaved=p;return}}catch{}finally{}a=mp(n,i,p,u),a!==null&&(p=Qn(),Fi(a,n,u,p),zp(a,i,u))}}function kp(n){var i=n.alternate;return n===tn||i!==null&&i===tn}function Bp(n,i){jo=$a=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function zp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,En(n,a)}}var nl={readContext:yi,useCallback:Bn,useContext:Bn,useEffect:Bn,useImperativeHandle:Bn,useInsertionEffect:Bn,useLayoutEffect:Bn,useMemo:Bn,useReducer:Bn,useRef:Bn,useState:Bn,useDebugValue:Bn,useDeferredValue:Bn,useTransition:Bn,useMutableSource:Bn,useSyncExternalStore:Bn,useId:Bn,unstable_isNewReconciler:!1},Lx={readContext:yi,useCallback:function(n,i){return Yi().memoizedState=[n,i===void 0?null:i],n},useContext:yi,useEffect:Rp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,el(4194308,4,Ip.bind(null,i,n),a)},useLayoutEffect:function(n,i){return el(4194308,4,n,i)},useInsertionEffect:function(n,i){return el(4,2,n,i)},useMemo:function(n,i){var a=Yi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Yi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Rx.bind(null,tn,n),[u.memoizedState,n]},useRef:function(n){var i=Yi();return n={current:n},i.memoizedState=n},useState:bp,useDebugValue:yu,useDeferredValue:function(n){return Yi().memoizedState=n},useTransition:function(){var n=bp(!1),i=n[0];return n=Cx.bind(null,n[1]),Yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=tn,p=Yi();if($t){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Tn===null)throw Error(t(349));(os&30)!==0||Sp(u,i,a)}p.memoizedState=a;var v={value:a,getSnapshot:i};return p.queue=v,Rp(Ep.bind(null,u,v,n),[n]),u.flags|=2048,Yo(9,Ap.bind(null,u,v,a,i),void 0,null),a},useId:function(){var n=Yi(),i=Tn.identifierPrefix;if($t){var a=cr,u=lr;a=(u&~(1<<32-De(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ko++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=bx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Ix={readContext:yi,useCallback:Up,useContext:yi,useEffect:_u,useImperativeHandle:Dp,useInsertionEffect:Pp,useLayoutEffect:Lp,useMemo:Np,useReducer:vu,useRef:Cp,useState:function(){return vu(qo)},useDebugValue:yu,useDeferredValue:function(n){var i=Mi();return Fp(i,gn.memoizedState,n)},useTransition:function(){var n=vu(qo)[0],i=Mi().memoizedState;return[n,i]},useMutableSource:yp,useSyncExternalStore:Mp,useId:Op,unstable_isNewReconciler:!1},Dx={readContext:yi,useCallback:Up,useContext:yi,useEffect:_u,useImperativeHandle:Dp,useInsertionEffect:Pp,useLayoutEffect:Lp,useMemo:Np,useReducer:xu,useRef:Cp,useState:function(){return xu(qo)},useDebugValue:yu,useDeferredValue:function(n){var i=Mi();return gn===null?i.memoizedState=n:Fp(i,gn.memoizedState,n)},useTransition:function(){var n=xu(qo)[0],i=Mi().memoizedState;return[n,i]},useMutableSource:yp,useSyncExternalStore:Mp,useId:Op,unstable_isNewReconciler:!1};function Di(n,i){if(n&&n.defaultProps){i=ee({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Mu(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:ee({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var il={isMounted:function(n){return(n=n._reactInternals)?qn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Qn(),p=Br(n),v=fr(u,p);v.payload=i,a!=null&&(v.callback=a),i=Nr(n,v,p),i!==null&&(Fi(i,n,p,u),Ya(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Qn(),p=Br(n),v=fr(u,p);v.tag=1,v.payload=i,a!=null&&(v.callback=a),i=Nr(n,v,p),i!==null&&(Fi(i,n,p,u),Ya(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Qn(),u=Br(n),p=fr(a,u);p.tag=2,i!=null&&(p.callback=i),i=Nr(n,p,u),i!==null&&(Fi(i,n,u,a),Ya(i,n,u))}};function Hp(n,i,a,u,p,v,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,b):i.prototype&&i.prototype.isPureReactComponent?!No(a,u)||!No(p,v):!0}function Vp(n,i,a){var u=!1,p=Ir,v=i.contextType;return typeof v=="object"&&v!==null?v=yi(v):(p=ti(i)?ts:kn.current,u=i.contextTypes,v=(u=u!=null)?Fs(n,p):Ir),i=new i(a,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=il,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),i}function Gp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&il.enqueueReplaceState(i,i.state,null)}function Su(n,i,a,u){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},lu(n);var v=i.contextType;typeof v=="object"&&v!==null?p.context=yi(v):(v=ti(i)?ts:kn.current,p.context=Fs(n,v)),p.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(Mu(n,i,v,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&il.enqueueReplaceState(p,p.state,null),Qa(n,a,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Ws(n,i){try{var a="",u=i;do a+=me(u),u=u.return;while(u);var p=a}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:p,digest:null}}function Au(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Eu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Ux=typeof WeakMap=="function"?WeakMap:Map;function Wp(n,i,a){a=fr(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){ul||(ul=!0,Bu=u),Eu(n,i)},a}function Xp(n,i,a){a=fr(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=i.value;a.payload=function(){return u(p)},a.callback=function(){Eu(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Eu(n,i),typeof u!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function jp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Ux;var p=new Set;u.set(i,p)}else p=u.get(i),p===void 0&&(p=new Set,u.set(i,p));p.has(a)||(p.add(a),n=qx.bind(null,n,i,a),i.then(n,n))}function Kp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function qp(n,i,a,u,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=fr(-1,1),i.tag=2,Nr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Nx=R.ReactCurrentOwner,ni=!1;function Yn(n,i,a,u){i.child=n===null?pp(i,null,a,u):zs(i,n.child,a,u)}function Yp(n,i,a,u,p){a=a.render;var v=i.ref;return Vs(i,p),u=mu(n,i,a,u,v,p),a=gu(),n!==null&&!ni?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,hr(n,i,p)):($t&&a&&Zc(i),i.flags|=1,Yn(n,i,u,p),i.child)}function Qp(n,i,a,u,p){if(n===null){var v=a.type;return typeof v=="function"&&!ju(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=v,Jp(n,i,v,u,p)):(n=gl(a.type,null,u,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&p)===0){var b=v.memoizedProps;if(a=a.compare,a=a!==null?a:No,a(b,u)&&n.ref===i.ref)return hr(n,i,p)}return i.flags|=1,n=Hr(v,u),n.ref=i.ref,n.return=i,i.child=n}function Jp(n,i,a,u,p){if(n!==null){var v=n.memoizedProps;if(No(v,u)&&n.ref===i.ref)if(ni=!1,i.pendingProps=u=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(ni=!0);else return i.lanes=n.lanes,hr(n,i,p)}return wu(n,i,a,u,p)}function Zp(n,i,a){var u=i.pendingProps,p=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qt(js,di),di|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qt(js,di),di|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:a,qt(js,di),di|=u}else v!==null?(u=v.baseLanes|a,i.memoizedState=null):u=a,qt(js,di),di|=u;return Yn(n,i,p,a),i.child}function $p(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function wu(n,i,a,u,p){var v=ti(a)?ts:kn.current;return v=Fs(i,v),Vs(i,p),a=mu(n,i,a,u,v,p),u=gu(),n!==null&&!ni?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,hr(n,i,p)):($t&&u&&Zc(i),i.flags|=1,Yn(n,i,a,p),i.child)}function em(n,i,a,u,p){if(ti(a)){var v=!0;Ha(i)}else v=!1;if(Vs(i,p),i.stateNode===null)sl(n,i),Vp(i,a,u),Su(i,a,u,p),u=!0;else if(n===null){var b=i.stateNode,G=i.memoizedProps;b.props=G;var Q=b.context,de=a.contextType;typeof de=="object"&&de!==null?de=yi(de):(de=ti(a)?ts:kn.current,de=Fs(i,de));var Le=a.getDerivedStateFromProps,Ue=typeof Le=="function"||typeof b.getSnapshotBeforeUpdate=="function";Ue||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(G!==u||Q!==de)&&Gp(i,b,u,de),Ur=!1;var Ce=i.memoizedState;b.state=Ce,Qa(i,u,b,p),Q=i.memoizedState,G!==u||Ce!==Q||ei.current||Ur?(typeof Le=="function"&&(Mu(i,a,Le,u),Q=i.memoizedState),(G=Ur||Hp(i,a,G,u,Ce,Q,de))?(Ue||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=Q),b.props=u,b.state=Q,b.context=de,u=G):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{b=i.stateNode,gp(n,i),G=i.memoizedProps,de=i.type===i.elementType?G:Di(i.type,G),b.props=de,Ue=i.pendingProps,Ce=b.context,Q=a.contextType,typeof Q=="object"&&Q!==null?Q=yi(Q):(Q=ti(a)?ts:kn.current,Q=Fs(i,Q));var et=a.getDerivedStateFromProps;(Le=typeof et=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(G!==Ue||Ce!==Q)&&Gp(i,b,u,Q),Ur=!1,Ce=i.memoizedState,b.state=Ce,Qa(i,u,b,p);var ct=i.memoizedState;G!==Ue||Ce!==ct||ei.current||Ur?(typeof et=="function"&&(Mu(i,a,et,u),ct=i.memoizedState),(de=Ur||Hp(i,a,de,u,Ce,ct,Q)||!1)?(Le||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(u,ct,Q),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(u,ct,Q)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||G===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||G===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ct),b.props=u,b.state=ct,b.context=Q,u=de):(typeof b.componentDidUpdate!="function"||G===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||G===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),u=!1)}return Tu(n,i,a,u,v,p)}function Tu(n,i,a,u,p,v){$p(n,i);var b=(i.flags&128)!==0;if(!u&&!b)return p&&sp(i,a,!1),hr(n,i,v);u=i.stateNode,Nx.current=i;var G=b&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&b?(i.child=zs(i,n.child,null,v),i.child=zs(i,null,G,v)):Yn(n,i,G,v),i.memoizedState=u.state,p&&sp(i,a,!0),i.child}function tm(n){var i=n.stateNode;i.pendingContext?ip(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ip(n,i.context,!1),cu(n,i.containerInfo)}function nm(n,i,a,u,p){return Bs(),nu(p),i.flags|=256,Yn(n,i,a,u),i.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Cu(n){return{baseLanes:n,cachePool:null,transitions:null}}function im(n,i,a){var u=i.pendingProps,p=en.current,v=!1,b=(i.flags&128)!==0,G;if((G=b)||(G=n!==null&&n.memoizedState===null?!1:(p&2)!==0),G?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),qt(en,p&1),n===null)return tu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=u.children,n=u.fallback,v?(u=i.mode,v=i.child,b={mode:"hidden",children:b},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=b):v=vl(b,u,0,null),n=fs(n,u,a,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=Cu(a),i.memoizedState=bu,n):Ru(i,b));if(p=n.memoizedState,p!==null&&(G=p.dehydrated,G!==null))return Fx(n,i,b,u,G,p,a);if(v){v=u.fallback,b=i.mode,p=n.child,G=p.sibling;var Q={mode:"hidden",children:u.children};return(b&1)===0&&i.child!==p?(u=i.child,u.childLanes=0,u.pendingProps=Q,i.deletions=null):(u=Hr(p,Q),u.subtreeFlags=p.subtreeFlags&14680064),G!==null?v=Hr(G,v):(v=fs(v,b,a,null),v.flags|=2),v.return=i,u.return=i,u.sibling=v,i.child=u,u=v,v=i.child,b=n.child.memoizedState,b=b===null?Cu(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},v.memoizedState=b,v.childLanes=n.childLanes&~a,i.memoizedState=bu,u}return v=n.child,n=v.sibling,u=Hr(v,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Ru(n,i){return i=vl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function rl(n,i,a,u){return u!==null&&nu(u),zs(i,n.child,null,a),n=Ru(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Fx(n,i,a,u,p,v,b){if(a)return i.flags&256?(i.flags&=-257,u=Au(Error(t(422))),rl(n,i,b,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=u.fallback,p=i.mode,u=vl({mode:"visible",children:u.children},p,0,null),v=fs(v,p,b,null),v.flags|=2,u.return=i,v.return=i,u.sibling=v,i.child=u,(i.mode&1)!==0&&zs(i,n.child,null,b),i.child.memoizedState=Cu(b),i.memoizedState=bu,v);if((i.mode&1)===0)return rl(n,i,b,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var G=u.dgst;return u=G,v=Error(t(419)),u=Au(v,u,void 0),rl(n,i,b,u)}if(G=(b&n.childLanes)!==0,ni||G){if(u=Tn,u!==null){switch(b&-b){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|b))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,ur(n,p),Fi(u,n,p,-1))}return Xu(),u=Au(Error(t(421))),rl(n,i,b,u)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=Yx.bind(null,n),p._reactRetry=i,null):(n=v.treeContext,hi=Pr(p.nextSibling),fi=i,$t=!0,Ii=null,n!==null&&(xi[_i++]=lr,xi[_i++]=cr,xi[_i++]=ns,lr=n.id,cr=n.overflow,ns=i),i=Ru(i,u.children),i.flags|=4096,i)}function rm(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),ou(n.return,i,a)}function Pu(n,i,a,u,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=a,v.tailMode=p)}function sm(n,i,a){var u=i.pendingProps,p=u.revealOrder,v=u.tail;if(Yn(n,i,u.children,a),u=en.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&rm(n,a,i);else if(n.tag===19)rm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(qt(en,u),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&Ja(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),Pu(i,!1,p,a,v);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&Ja(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Pu(i,!0,a,null,v);break;case"together":Pu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function sl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function hr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),as|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Hr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Hr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Ox(n,i,a){switch(i.tag){case 3:tm(i),Bs();break;case 5:_p(i);break;case 1:ti(i.type)&&Ha(i);break;case 4:cu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,p=i.memoizedProps.value;qt(Ka,u._currentValue),u._currentValue=p;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(qt(en,en.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?im(n,i,a):(qt(en,en.current&1),n=hr(n,i,a),n!==null?n.sibling:null);qt(en,en.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return sm(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),qt(en,en.current),u)break;return null;case 22:case 23:return i.lanes=0,Zp(n,i,a)}return hr(n,i,a)}var om,Lu,am,lm;om=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Lu=function(){},am=function(n,i,a,u){var p=n.memoizedProps;if(p!==u){n=i.stateNode,ss(qi.current);var v=null;switch(a){case"input":p=Xe(n,p),u=Xe(n,u),v=[];break;case"select":p=ee({},p,{value:void 0}),u=ee({},u,{value:void 0}),v=[];break;case"textarea":p=He(n,p),u=He(n,u),v=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ka)}je(a,u);var b;a=null;for(de in p)if(!u.hasOwnProperty(de)&&p.hasOwnProperty(de)&&p[de]!=null)if(de==="style"){var G=p[de];for(b in G)G.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(o.hasOwnProperty(de)?v||(v=[]):(v=v||[]).push(de,null));for(de in u){var Q=u[de];if(G=p!=null?p[de]:void 0,u.hasOwnProperty(de)&&Q!==G&&(Q!=null||G!=null))if(de==="style")if(G){for(b in G)!G.hasOwnProperty(b)||Q&&Q.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in Q)Q.hasOwnProperty(b)&&G[b]!==Q[b]&&(a||(a={}),a[b]=Q[b])}else a||(v||(v=[]),v.push(de,a)),a=Q;else de==="dangerouslySetInnerHTML"?(Q=Q?Q.__html:void 0,G=G?G.__html:void 0,Q!=null&&G!==Q&&(v=v||[]).push(de,Q)):de==="children"?typeof Q!="string"&&typeof Q!="number"||(v=v||[]).push(de,""+Q):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(o.hasOwnProperty(de)?(Q!=null&&de==="onScroll"&&Qt("scroll",n),v||G===Q||(v=[])):(v=v||[]).push(de,Q))}a&&(v=v||[]).push("style",a);var de=v;(i.updateQueue=de)&&(i.flags|=4)}},lm=function(n,i,a,u){a!==u&&(i.flags|=4)};function Qo(n,i){if(!$t)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function zn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function kx(n,i,a){var u=i.pendingProps;switch($c(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zn(i),null;case 1:return ti(i.type)&&za(),zn(i),null;case 3:return u=i.stateNode,Gs(),Jt(ei),Jt(kn),hu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Xa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ii!==null&&(Vu(Ii),Ii=null))),Lu(n,i),zn(i),null;case 5:uu(i);var p=ss(Xo.current);if(a=i.type,n!==null&&i.stateNode!=null)am(n,i,a,u,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return zn(i),null}if(n=ss(qi.current),Xa(i)){u=i.stateNode,a=i.type;var v=i.memoizedProps;switch(u[Ki]=i,u[zo]=v,n=(i.mode&1)!==0,a){case"dialog":Qt("cancel",u),Qt("close",u);break;case"iframe":case"object":case"embed":Qt("load",u);break;case"video":case"audio":for(p=0;p<Oo.length;p++)Qt(Oo[p],u);break;case"source":Qt("error",u);break;case"img":case"image":case"link":Qt("error",u),Qt("load",u);break;case"details":Qt("toggle",u);break;case"input":tt(u,v),Qt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},Qt("invalid",u);break;case"textarea":Qe(u,v),Qt("invalid",u)}je(a,v),p=null;for(var b in v)if(v.hasOwnProperty(b)){var G=v[b];b==="children"?typeof G=="string"?u.textContent!==G&&(v.suppressHydrationWarning!==!0&&Oa(u.textContent,G,n),p=["children",G]):typeof G=="number"&&u.textContent!==""+G&&(v.suppressHydrationWarning!==!0&&Oa(u.textContent,G,n),p=["children",""+G]):o.hasOwnProperty(b)&&G!=null&&b==="onScroll"&&Qt("scroll",u)}switch(a){case"input":ye(u),pt(u,v,!0);break;case"textarea":ye(u),Rt(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=ka)}u=p,i.updateQueue=u,u!==null&&(i.flags|=4)}else{b=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=L(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=b.createElement(a,{is:u.is}):(n=b.createElement(a),a==="select"&&(b=n,u.multiple?b.multiple=!0:u.size&&(b.size=u.size))):n=b.createElementNS(n,a),n[Ki]=i,n[zo]=u,om(n,i,!1,!1),i.stateNode=n;e:{switch(b=Ne(a,u),a){case"dialog":Qt("cancel",n),Qt("close",n),p=u;break;case"iframe":case"object":case"embed":Qt("load",n),p=u;break;case"video":case"audio":for(p=0;p<Oo.length;p++)Qt(Oo[p],n);p=u;break;case"source":Qt("error",n),p=u;break;case"img":case"image":case"link":Qt("error",n),Qt("load",n),p=u;break;case"details":Qt("toggle",n),p=u;break;case"input":tt(n,u),p=Xe(n,u),Qt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=ee({},u,{value:void 0}),Qt("invalid",n);break;case"textarea":Qe(n,u),p=He(n,u),Qt("invalid",n);break;default:p=u}je(a,p),G=p;for(v in G)if(G.hasOwnProperty(v)){var Q=G[v];v==="style"?ge(n,Q):v==="dangerouslySetInnerHTML"?(Q=Q?Q.__html:void 0,Q!=null&&Me(n,Q)):v==="children"?typeof Q=="string"?(a!=="textarea"||Q!=="")&&Te(n,Q):typeof Q=="number"&&Te(n,""+Q):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?Q!=null&&v==="onScroll"&&Qt("scroll",n):Q!=null&&P(n,v,Q,b))}switch(a){case"input":ye(n),pt(n,u,!1);break;case"textarea":ye(n),Rt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+se(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?Se(n,!!u.multiple,v,!1):u.defaultValue!=null&&Se(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=ka)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return zn(i),null;case 6:if(n&&i.stateNode!=null)lm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=ss(Xo.current),ss(qi.current),Xa(i)){if(u=i.stateNode,a=i.memoizedProps,u[Ki]=i,(v=u.nodeValue!==a)&&(n=fi,n!==null))switch(n.tag){case 3:Oa(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Oa(u.nodeValue,a,(n.mode&1)!==0)}v&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Ki]=i,i.stateNode=u}return zn(i),null;case 13:if(Jt(en),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if($t&&hi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)fp(),Bs(),i.flags|=98560,v=!1;else if(v=Xa(i),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Ki]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;zn(i),v=!1}else Ii!==null&&(Vu(Ii),Ii=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(en.current&1)!==0?vn===0&&(vn=3):Xu())),i.updateQueue!==null&&(i.flags|=4),zn(i),null);case 4:return Gs(),Lu(n,i),n===null&&ko(i.stateNode.containerInfo),zn(i),null;case 10:return su(i.type._context),zn(i),null;case 17:return ti(i.type)&&za(),zn(i),null;case 19:if(Jt(en),v=i.memoizedState,v===null)return zn(i),null;if(u=(i.flags&128)!==0,b=v.rendering,b===null)if(u)Qo(v,!1);else{if(vn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=Ja(n),b!==null){for(i.flags|=128,Qo(v,!1),u=b.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)v=a,n=u,v.flags&=14680066,b=v.alternate,b===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=b.childLanes,v.lanes=b.lanes,v.child=b.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=b.memoizedProps,v.memoizedState=b.memoizedState,v.updateQueue=b.updateQueue,v.type=b.type,n=b.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qt(en,en.current&1|2),i.child}n=n.sibling}v.tail!==null&&Nt()>Ks&&(i.flags|=128,u=!0,Qo(v,!1),i.lanes=4194304)}else{if(!u)if(n=Ja(b),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Qo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!b.alternate&&!$t)return zn(i),null}else 2*Nt()-v.renderingStartTime>Ks&&a!==1073741824&&(i.flags|=128,u=!0,Qo(v,!1),i.lanes=4194304);v.isBackwards?(b.sibling=i.child,i.child=b):(a=v.last,a!==null?a.sibling=b:i.child=b,v.last=b)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=Nt(),i.sibling=null,a=en.current,qt(en,u?a&1|2:a&1),i):(zn(i),null);case 22:case 23:return Wu(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(di&1073741824)!==0&&(zn(i),i.subtreeFlags&6&&(i.flags|=8192)):zn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Bx(n,i){switch($c(i),i.tag){case 1:return ti(i.type)&&za(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Gs(),Jt(ei),Jt(kn),hu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return uu(i),null;case 13:if(Jt(en),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Jt(en),null;case 4:return Gs(),null;case 10:return su(i.type._context),null;case 22:case 23:return Wu(),null;case 24:return null;default:return null}}var ol=!1,Hn=!1,zx=typeof WeakSet=="function"?WeakSet:Set,at=null;function Xs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){sn(n,i,u)}else a.current=null}function Iu(n,i,a){try{a()}catch(u){sn(n,i,u)}}var cm=!1;function Hx(n,i){if(Wc=Ta,n=Hd(),Fc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var b=0,G=-1,Q=-1,de=0,Le=0,Ue=n,Ce=null;t:for(;;){for(var et;Ue!==a||p!==0&&Ue.nodeType!==3||(G=b+p),Ue!==v||u!==0&&Ue.nodeType!==3||(Q=b+u),Ue.nodeType===3&&(b+=Ue.nodeValue.length),(et=Ue.firstChild)!==null;)Ce=Ue,Ue=et;for(;;){if(Ue===n)break t;if(Ce===a&&++de===p&&(G=b),Ce===v&&++Le===u&&(Q=b),(et=Ue.nextSibling)!==null)break;Ue=Ce,Ce=Ue.parentNode}Ue=et}a=G===-1||Q===-1?null:{start:G,end:Q}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xc={focusedElem:n,selectionRange:a},Ta=!1,at=i;at!==null;)if(i=at,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,at=n;else for(;at!==null;){i=at;try{var ct=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ct!==null){var ft=ct.memoizedProps,an=ct.memoizedState,oe=i.stateNode,$=oe.getSnapshotBeforeUpdate(i.elementType===i.type?ft:Di(i.type,ft),an);oe.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ze){sn(i,i.return,ze)}if(n=i.sibling,n!==null){n.return=i.return,at=n;break}at=i.return}return ct=cm,cm=!1,ct}function Jo(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Iu(i,a,v)}p=p.next}while(p!==u)}}function al(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Du(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function um(n){var i=n.alternate;i!==null&&(n.alternate=null,um(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ki],delete i[zo],delete i[Yc],delete i[Ax],delete i[Ex])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function fm(n){return n.tag===5||n.tag===3||n.tag===4}function hm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||fm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Uu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ka));else if(u!==4&&(n=n.child,n!==null))for(Uu(n,i,a),n=n.sibling;n!==null;)Uu(n,i,a),n=n.sibling}function Nu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Nu(n,i,a),n=n.sibling;n!==null;)Nu(n,i,a),n=n.sibling}var Dn=null,Ui=!1;function Fr(n,i,a){for(a=a.child;a!==null;)dm(n,i,a),a=a.sibling}function dm(n,i,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 5:Hn||Xs(a,i);case 6:var u=Dn,p=Ui;Dn=null,Fr(n,i,a),Dn=u,Ui=p,Dn!==null&&(Ui?(n=Dn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Dn.removeChild(a.stateNode));break;case 18:Dn!==null&&(Ui?(n=Dn,a=a.stateNode,n.nodeType===8?qc(n.parentNode,a):n.nodeType===1&&qc(n,a),Ro(n)):qc(Dn,a.stateNode));break;case 4:u=Dn,p=Ui,Dn=a.stateNode.containerInfo,Ui=!0,Fr(n,i,a),Dn=u,Ui=p;break;case 0:case 11:case 14:case 15:if(!Hn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var v=p,b=v.destroy;v=v.tag,b!==void 0&&((v&2)!==0||(v&4)!==0)&&Iu(a,i,b),p=p.next}while(p!==u)}Fr(n,i,a);break;case 1:if(!Hn&&(Xs(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(G){sn(a,i,G)}Fr(n,i,a);break;case 21:Fr(n,i,a);break;case 22:a.mode&1?(Hn=(u=Hn)||a.memoizedState!==null,Fr(n,i,a),Hn=u):Fr(n,i,a);break;default:Fr(n,i,a)}}function pm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new zx),i.forEach(function(u){var p=Qx.bind(null,n,u);a.has(u)||(a.add(u),u.then(p,p))})}}function Ni(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var v=n,b=i,G=b;e:for(;G!==null;){switch(G.tag){case 5:Dn=G.stateNode,Ui=!1;break e;case 3:Dn=G.stateNode.containerInfo,Ui=!0;break e;case 4:Dn=G.stateNode.containerInfo,Ui=!0;break e}G=G.return}if(Dn===null)throw Error(t(160));dm(v,b,p),Dn=null,Ui=!1;var Q=p.alternate;Q!==null&&(Q.return=null),p.return=null}catch(de){sn(p,i,de)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)mm(i,n),i=i.sibling}function mm(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ni(i,n),Qi(n),u&4){try{Jo(3,n,n.return),al(3,n)}catch(ft){sn(n,n.return,ft)}try{Jo(5,n,n.return)}catch(ft){sn(n,n.return,ft)}}break;case 1:Ni(i,n),Qi(n),u&512&&a!==null&&Xs(a,a.return);break;case 5:if(Ni(i,n),Qi(n),u&512&&a!==null&&Xs(a,a.return),n.flags&32){var p=n.stateNode;try{Te(p,"")}catch(ft){sn(n,n.return,ft)}}if(u&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,b=a!==null?a.memoizedProps:v,G=n.type,Q=n.updateQueue;if(n.updateQueue=null,Q!==null)try{G==="input"&&v.type==="radio"&&v.name!=null&&it(p,v),Ne(G,b);var de=Ne(G,v);for(b=0;b<Q.length;b+=2){var Le=Q[b],Ue=Q[b+1];Le==="style"?ge(p,Ue):Le==="dangerouslySetInnerHTML"?Me(p,Ue):Le==="children"?Te(p,Ue):P(p,Le,Ue,de)}switch(G){case"input":ut(p,v);break;case"textarea":_e(p,v);break;case"select":var Ce=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var et=v.value;et!=null?Se(p,!!v.multiple,et,!1):Ce!==!!v.multiple&&(v.defaultValue!=null?Se(p,!!v.multiple,v.defaultValue,!0):Se(p,!!v.multiple,v.multiple?[]:"",!1))}p[zo]=v}catch(ft){sn(n,n.return,ft)}}break;case 6:if(Ni(i,n),Qi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(ft){sn(n,n.return,ft)}}break;case 3:if(Ni(i,n),Qi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Ro(i.containerInfo)}catch(ft){sn(n,n.return,ft)}break;case 4:Ni(i,n),Qi(n);break;case 13:Ni(i,n),Qi(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(ku=Nt())),u&4&&pm(n);break;case 22:if(Le=a!==null&&a.memoizedState!==null,n.mode&1?(Hn=(de=Hn)||Le,Ni(i,n),Hn=de):Ni(i,n),Qi(n),u&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!Le&&(n.mode&1)!==0)for(at=n,Le=n.child;Le!==null;){for(Ue=at=Le;at!==null;){switch(Ce=at,et=Ce.child,Ce.tag){case 0:case 11:case 14:case 15:Jo(4,Ce,Ce.return);break;case 1:Xs(Ce,Ce.return);var ct=Ce.stateNode;if(typeof ct.componentWillUnmount=="function"){u=Ce,a=Ce.return;try{i=u,ct.props=i.memoizedProps,ct.state=i.memoizedState,ct.componentWillUnmount()}catch(ft){sn(u,a,ft)}}break;case 5:Xs(Ce,Ce.return);break;case 22:if(Ce.memoizedState!==null){xm(Ue);continue}}et!==null?(et.return=Ce,at=et):xm(Ue)}Le=Le.sibling}e:for(Le=null,Ue=n;;){if(Ue.tag===5){if(Le===null){Le=Ue;try{p=Ue.stateNode,de?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(G=Ue.stateNode,Q=Ue.memoizedProps.style,b=Q!=null&&Q.hasOwnProperty("display")?Q.display:null,G.style.display=pe("display",b))}catch(ft){sn(n,n.return,ft)}}}else if(Ue.tag===6){if(Le===null)try{Ue.stateNode.nodeValue=de?"":Ue.memoizedProps}catch(ft){sn(n,n.return,ft)}}else if((Ue.tag!==22&&Ue.tag!==23||Ue.memoizedState===null||Ue===n)&&Ue.child!==null){Ue.child.return=Ue,Ue=Ue.child;continue}if(Ue===n)break e;for(;Ue.sibling===null;){if(Ue.return===null||Ue.return===n)break e;Le===Ue&&(Le=null),Ue=Ue.return}Le===Ue&&(Le=null),Ue.sibling.return=Ue.return,Ue=Ue.sibling}}break;case 19:Ni(i,n),Qi(n),u&4&&pm(n);break;case 21:break;default:Ni(i,n),Qi(n)}}function Qi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(fm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Te(p,""),u.flags&=-33);var v=hm(n);Nu(n,v,p);break;case 3:case 4:var b=u.stateNode.containerInfo,G=hm(n);Uu(n,G,b);break;default:throw Error(t(161))}}catch(Q){sn(n,n.return,Q)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Vx(n,i,a){at=n,gm(n)}function gm(n,i,a){for(var u=(n.mode&1)!==0;at!==null;){var p=at,v=p.child;if(p.tag===22&&u){var b=p.memoizedState!==null||ol;if(!b){var G=p.alternate,Q=G!==null&&G.memoizedState!==null||Hn;G=ol;var de=Hn;if(ol=b,(Hn=Q)&&!de)for(at=p;at!==null;)b=at,Q=b.child,b.tag===22&&b.memoizedState!==null?_m(p):Q!==null?(Q.return=b,at=Q):_m(p);for(;v!==null;)at=v,gm(v),v=v.sibling;at=p,ol=G,Hn=de}vm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,at=v):vm(n)}}function vm(n){for(;at!==null;){var i=at;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Hn||al(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Hn)if(a===null)u.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:Di(i.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&xp(i,v,u);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}xp(i,b,a)}break;case 5:var G=i.stateNode;if(a===null&&i.flags&4){a=G;var Q=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Q.autoFocus&&a.focus();break;case"img":Q.src&&(a.src=Q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var de=i.alternate;if(de!==null){var Le=de.memoizedState;if(Le!==null){var Ue=Le.dehydrated;Ue!==null&&Ro(Ue)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Hn||i.flags&512&&Du(i)}catch(Ce){sn(i,i.return,Ce)}}if(i===n){at=null;break}if(a=i.sibling,a!==null){a.return=i.return,at=a;break}at=i.return}}function xm(n){for(;at!==null;){var i=at;if(i===n){at=null;break}var a=i.sibling;if(a!==null){a.return=i.return,at=a;break}at=i.return}}function _m(n){for(;at!==null;){var i=at;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{al(4,i)}catch(Q){sn(i,a,Q)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var p=i.return;try{u.componentDidMount()}catch(Q){sn(i,p,Q)}}var v=i.return;try{Du(i)}catch(Q){sn(i,v,Q)}break;case 5:var b=i.return;try{Du(i)}catch(Q){sn(i,b,Q)}}}catch(Q){sn(i,i.return,Q)}if(i===n){at=null;break}var G=i.sibling;if(G!==null){G.return=i.return,at=G;break}at=i.return}}var Gx=Math.ceil,ll=R.ReactCurrentDispatcher,Fu=R.ReactCurrentOwner,Si=R.ReactCurrentBatchConfig,Ot=0,Tn=null,hn=null,Un=0,di=0,js=Lr(0),vn=0,Zo=null,as=0,cl=0,Ou=0,$o=null,ii=null,ku=0,Ks=1/0,dr=null,ul=!1,Bu=null,Or=null,fl=!1,kr=null,hl=0,ea=0,zu=null,dl=-1,pl=0;function Qn(){return(Ot&6)!==0?Nt():dl!==-1?dl:dl=Nt()}function Br(n){return(n.mode&1)===0?1:(Ot&2)!==0&&Un!==0?Un&-Un:Tx.transition!==null?(pl===0&&(pl=Ye()),pl):(n=Tt,n!==0||(n=window.event,n=n===void 0?16:Md(n.type)),n)}function Fi(n,i,a,u){if(50<ea)throw ea=0,zu=null,Error(t(185));Et(n,a,u),((Ot&2)===0||n!==Tn)&&(n===Tn&&((Ot&2)===0&&(cl|=a),vn===4&&zr(n,Un)),ri(n,u),a===1&&Ot===0&&(i.mode&1)===0&&(Ks=Nt()+500,Va&&Dr()))}function ri(n,i){var a=n.callbackNode;Ht(n,i);var u=Gt(n,n===Tn?Un:0);if(u===0)a!==null&&Kt(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Kt(a),i===1)n.tag===0?wx(Mm.bind(null,n)):op(Mm.bind(null,n)),Mx(function(){(Ot&6)===0&&Dr()}),a=null;else{switch(On(u)){case 1:a=Xi;break;case 4:a=C;break;case 16:a=Z;break;case 536870912:a=re;break;default:a=Z}a=Rm(a,ym.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function ym(n,i){if(dl=-1,pl=0,(Ot&6)!==0)throw Error(t(327));var a=n.callbackNode;if(qs()&&n.callbackNode!==a)return null;var u=Gt(n,n===Tn?Un:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=ml(n,u);else{i=u;var p=Ot;Ot|=2;var v=Am();(Tn!==n||Un!==i)&&(dr=null,Ks=Nt()+500,cs(n,i));do try{jx();break}catch(G){Sm(n,G)}while(!0);ru(),ll.current=v,Ot=p,hn!==null?i=0:(Tn=null,Un=0,i=vn)}if(i!==0){if(i===2&&(p=rn(n),p!==0&&(u=p,i=Hu(n,p))),i===1)throw a=Zo,cs(n,0),zr(n,u),ri(n,Nt()),a;if(i===6)zr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!Wx(p)&&(i=ml(n,u),i===2&&(v=rn(n),v!==0&&(u=v,i=Hu(n,v))),i===1))throw a=Zo,cs(n,0),zr(n,u),ri(n,Nt()),a;switch(n.finishedWork=p,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:us(n,ii,dr);break;case 3:if(zr(n,u),(u&130023424)===u&&(i=ku+500-Nt(),10<i)){if(Gt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Qn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Kc(us.bind(null,n,ii,dr),i);break}us(n,ii,dr);break;case 4:if(zr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,p=-1;0<u;){var b=31-De(u);v=1<<b,b=i[b],b>p&&(p=b),u&=~v}if(u=p,u=Nt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Gx(u/1960))-u,10<u){n.timeoutHandle=Kc(us.bind(null,n,ii,dr),u);break}us(n,ii,dr);break;case 5:us(n,ii,dr);break;default:throw Error(t(329))}}}return ri(n,Nt()),n.callbackNode===a?ym.bind(null,n):null}function Hu(n,i){var a=$o;return n.current.memoizedState.isDehydrated&&(cs(n,i).flags|=256),n=ml(n,i),n!==2&&(i=ii,ii=a,i!==null&&Vu(i)),n}function Vu(n){ii===null?ii=n:ii.push.apply(ii,n)}function Wx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],v=p.getSnapshot;p=p.value;try{if(!Li(v(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function zr(n,i){for(i&=~Ou,i&=~cl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-De(i),u=1<<a;n[a]=-1,i&=~u}}function Mm(n){if((Ot&6)!==0)throw Error(t(327));qs();var i=Gt(n,0);if((i&1)===0)return ri(n,Nt()),null;var a=ml(n,i);if(n.tag!==0&&a===2){var u=rn(n);u!==0&&(i=u,a=Hu(n,u))}if(a===1)throw a=Zo,cs(n,0),zr(n,i),ri(n,Nt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,us(n,ii,dr),ri(n,Nt()),null}function Gu(n,i){var a=Ot;Ot|=1;try{return n(i)}finally{Ot=a,Ot===0&&(Ks=Nt()+500,Va&&Dr())}}function ls(n){kr!==null&&kr.tag===0&&(Ot&6)===0&&qs();var i=Ot;Ot|=1;var a=Si.transition,u=Tt;try{if(Si.transition=null,Tt=1,n)return n()}finally{Tt=u,Si.transition=a,Ot=i,(Ot&6)===0&&Dr()}}function Wu(){di=js.current,Jt(js)}function cs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,yx(a)),hn!==null)for(a=hn.return;a!==null;){var u=a;switch($c(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&za();break;case 3:Gs(),Jt(ei),Jt(kn),hu();break;case 5:uu(u);break;case 4:Gs();break;case 13:Jt(en);break;case 19:Jt(en);break;case 10:su(u.type._context);break;case 22:case 23:Wu()}a=a.return}if(Tn=n,hn=n=Hr(n.current,null),Un=di=i,vn=0,Zo=null,Ou=cl=as=0,ii=$o=null,rs!==null){for(i=0;i<rs.length;i++)if(a=rs[i],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,v=a.pending;if(v!==null){var b=v.next;v.next=p,u.next=b}a.pending=u}rs=null}return n}function Sm(n,i){do{var a=hn;try{if(ru(),Za.current=nl,$a){for(var u=tn.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}$a=!1}if(os=0,wn=gn=tn=null,jo=!1,Ko=0,Fu.current=null,a===null||a.return===null){vn=1,Zo=i,hn=null;break}e:{var v=n,b=a.return,G=a,Q=i;if(i=Un,G.flags|=32768,Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var de=Q,Le=G,Ue=Le.tag;if((Le.mode&1)===0&&(Ue===0||Ue===11||Ue===15)){var Ce=Le.alternate;Ce?(Le.updateQueue=Ce.updateQueue,Le.memoizedState=Ce.memoizedState,Le.lanes=Ce.lanes):(Le.updateQueue=null,Le.memoizedState=null)}var et=Kp(b);if(et!==null){et.flags&=-257,qp(et,b,G,v,i),et.mode&1&&jp(v,de,i),i=et,Q=de;var ct=i.updateQueue;if(ct===null){var ft=new Set;ft.add(Q),i.updateQueue=ft}else ct.add(Q);break e}else{if((i&1)===0){jp(v,de,i),Xu();break e}Q=Error(t(426))}}else if($t&&G.mode&1){var an=Kp(b);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),qp(an,b,G,v,i),nu(Ws(Q,G));break e}}v=Q=Ws(Q,G),vn!==4&&(vn=2),$o===null?$o=[v]:$o.push(v),v=b;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var oe=Wp(v,Q,i);vp(v,oe);break e;case 1:G=Q;var $=v.type,fe=v.stateNode;if((v.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(Or===null||!Or.has(fe)))){v.flags|=65536,i&=-i,v.lanes|=i;var ze=Xp(v,G,i);vp(v,ze);break e}}v=v.return}while(v!==null)}wm(a)}catch(ht){i=ht,hn===a&&a!==null&&(hn=a=a.return);continue}break}while(!0)}function Am(){var n=ll.current;return ll.current=nl,n===null?nl:n}function Xu(){(vn===0||vn===3||vn===2)&&(vn=4),Tn===null||(as&268435455)===0&&(cl&268435455)===0||zr(Tn,Un)}function ml(n,i){var a=Ot;Ot|=2;var u=Am();(Tn!==n||Un!==i)&&(dr=null,cs(n,i));do try{Xx();break}catch(p){Sm(n,p)}while(!0);if(ru(),Ot=a,ll.current=u,hn!==null)throw Error(t(261));return Tn=null,Un=0,vn}function Xx(){for(;hn!==null;)Em(hn)}function jx(){for(;hn!==null&&!mn();)Em(hn)}function Em(n){var i=Cm(n.alternate,n,di);n.memoizedProps=n.pendingProps,i===null?wm(n):hn=i,Fu.current=null}function wm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=kx(a,i,di),a!==null){hn=a;return}}else{if(a=Bx(a,i),a!==null){a.flags&=32767,hn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vn=6,hn=null;return}}if(i=i.sibling,i!==null){hn=i;return}hn=i=n}while(i!==null);vn===0&&(vn=5)}function us(n,i,a){var u=Tt,p=Si.transition;try{Si.transition=null,Tt=1,Kx(n,i,a,u)}finally{Si.transition=p,Tt=u}return null}function Kx(n,i,a,u){do qs();while(kr!==null);if((Ot&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(An(n,v),n===Tn&&(hn=Tn=null,Un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||fl||(fl=!0,Rm(Z,function(){return qs(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=Si.transition,Si.transition=null;var b=Tt;Tt=1;var G=Ot;Ot|=4,Fu.current=null,Hx(n,a),mm(a,n),dx(Xc),Ta=!!Wc,Xc=Wc=null,n.current=a,Vx(a),Ln(),Ot=G,Tt=b,Si.transition=v}else n.current=a;if(fl&&(fl=!1,kr=n,hl=p),v=n.pendingLanes,v===0&&(Or=null),Ze(a.stateNode),ri(n,Nt()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],u(p.value,{componentStack:p.stack,digest:p.digest});if(ul)throw ul=!1,n=Bu,Bu=null,n;return(hl&1)!==0&&n.tag!==0&&qs(),v=n.pendingLanes,(v&1)!==0?n===zu?ea++:(ea=0,zu=n):ea=0,Dr(),null}function qs(){if(kr!==null){var n=On(hl),i=Si.transition,a=Tt;try{if(Si.transition=null,Tt=16>n?16:n,kr===null)var u=!1;else{if(n=kr,kr=null,hl=0,(Ot&6)!==0)throw Error(t(331));var p=Ot;for(Ot|=4,at=n.current;at!==null;){var v=at,b=v.child;if((at.flags&16)!==0){var G=v.deletions;if(G!==null){for(var Q=0;Q<G.length;Q++){var de=G[Q];for(at=de;at!==null;){var Le=at;switch(Le.tag){case 0:case 11:case 15:Jo(8,Le,v)}var Ue=Le.child;if(Ue!==null)Ue.return=Le,at=Ue;else for(;at!==null;){Le=at;var Ce=Le.sibling,et=Le.return;if(um(Le),Le===de){at=null;break}if(Ce!==null){Ce.return=et,at=Ce;break}at=et}}}var ct=v.alternate;if(ct!==null){var ft=ct.child;if(ft!==null){ct.child=null;do{var an=ft.sibling;ft.sibling=null,ft=an}while(ft!==null)}}at=v}}if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,at=b;else e:for(;at!==null;){if(v=at,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Jo(9,v,v.return)}var oe=v.sibling;if(oe!==null){oe.return=v.return,at=oe;break e}at=v.return}}var $=n.current;for(at=$;at!==null;){b=at;var fe=b.child;if((b.subtreeFlags&2064)!==0&&fe!==null)fe.return=b,at=fe;else e:for(b=$;at!==null;){if(G=at,(G.flags&2048)!==0)try{switch(G.tag){case 0:case 11:case 15:al(9,G)}}catch(ht){sn(G,G.return,ht)}if(G===b){at=null;break e}var ze=G.sibling;if(ze!==null){ze.return=G.return,at=ze;break e}at=G.return}}if(Ot=p,Dr(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(ae,n)}catch{}u=!0}return u}finally{Tt=a,Si.transition=i}}return!1}function Tm(n,i,a){i=Ws(a,i),i=Wp(n,i,1),n=Nr(n,i,1),i=Qn(),n!==null&&(Et(n,1,i),ri(n,i))}function sn(n,i,a){if(n.tag===3)Tm(n,n,a);else for(;i!==null;){if(i.tag===3){Tm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Or===null||!Or.has(u))){n=Ws(a,n),n=Xp(i,n,1),i=Nr(i,n,1),n=Qn(),i!==null&&(Et(i,1,n),ri(i,n));break}}i=i.return}}function qx(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Qn(),n.pingedLanes|=n.suspendedLanes&a,Tn===n&&(Un&a)===a&&(vn===4||vn===3&&(Un&130023424)===Un&&500>Nt()-ku?cs(n,0):Ou|=a),ri(n,i)}function bm(n,i){i===0&&((n.mode&1)===0?i=1:(i=nt,nt<<=1,(nt&130023424)===0&&(nt=4194304)));var a=Qn();n=ur(n,i),n!==null&&(Et(n,i,a),ri(n,a))}function Yx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),bm(n,a)}function Qx(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),bm(n,a)}var Cm;Cm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ei.current)ni=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ni=!1,Ox(n,i,a);ni=(n.flags&131072)!==0}else ni=!1,$t&&(i.flags&1048576)!==0&&ap(i,Wa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;sl(n,i),n=i.pendingProps;var p=Fs(i,kn.current);Vs(i,a),p=mu(null,i,u,n,p,a);var v=gu();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ti(u)?(v=!0,Ha(i)):v=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,lu(i),p.updater=il,i.stateNode=p,p._reactInternals=i,Su(i,u,n,a),i=Tu(null,i,u,!0,v,a)):(i.tag=0,$t&&v&&Zc(i),Yn(null,i,p,a),i=i.child),i;case 16:u=i.elementType;e:{switch(sl(n,i),n=i.pendingProps,p=u._init,u=p(u._payload),i.type=u,p=i.tag=Zx(u),n=Di(u,n),p){case 0:i=wu(null,i,u,n,a);break e;case 1:i=em(null,i,u,n,a);break e;case 11:i=Yp(null,i,u,n,a);break e;case 14:i=Qp(null,i,u,Di(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Di(u,p),wu(n,i,u,p,a);case 1:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Di(u,p),em(n,i,u,p,a);case 3:e:{if(tm(i),n===null)throw Error(t(387));u=i.pendingProps,v=i.memoizedState,p=v.element,gp(n,i),Qa(i,u,null,a);var b=i.memoizedState;if(u=b.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){p=Ws(Error(t(423)),i),i=nm(n,i,u,a,p);break e}else if(u!==p){p=Ws(Error(t(424)),i),i=nm(n,i,u,a,p);break e}else for(hi=Pr(i.stateNode.containerInfo.firstChild),fi=i,$t=!0,Ii=null,a=pp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Bs(),u===p){i=hr(n,i,a);break e}Yn(n,i,u,a)}i=i.child}return i;case 5:return _p(i),n===null&&tu(i),u=i.type,p=i.pendingProps,v=n!==null?n.memoizedProps:null,b=p.children,jc(u,p)?b=null:v!==null&&jc(u,v)&&(i.flags|=32),$p(n,i),Yn(n,i,b,a),i.child;case 6:return n===null&&tu(i),null;case 13:return im(n,i,a);case 4:return cu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=zs(i,null,u,a):Yn(n,i,u,a),i.child;case 11:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Di(u,p),Yp(n,i,u,p,a);case 7:return Yn(n,i,i.pendingProps,a),i.child;case 8:return Yn(n,i,i.pendingProps.children,a),i.child;case 12:return Yn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,p=i.pendingProps,v=i.memoizedProps,b=p.value,qt(Ka,u._currentValue),u._currentValue=b,v!==null)if(Li(v.value,b)){if(v.children===p.children&&!ei.current){i=hr(n,i,a);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var G=v.dependencies;if(G!==null){b=v.child;for(var Q=G.firstContext;Q!==null;){if(Q.context===u){if(v.tag===1){Q=fr(-1,a&-a),Q.tag=2;var de=v.updateQueue;if(de!==null){de=de.shared;var Le=de.pending;Le===null?Q.next=Q:(Q.next=Le.next,Le.next=Q),de.pending=Q}}v.lanes|=a,Q=v.alternate,Q!==null&&(Q.lanes|=a),ou(v.return,a,i),G.lanes|=a;break}Q=Q.next}}else if(v.tag===10)b=v.type===i.type?null:v.child;else if(v.tag===18){if(b=v.return,b===null)throw Error(t(341));b.lanes|=a,G=b.alternate,G!==null&&(G.lanes|=a),ou(b,a,i),b=v.sibling}else b=v.child;if(b!==null)b.return=v;else for(b=v;b!==null;){if(b===i){b=null;break}if(v=b.sibling,v!==null){v.return=b.return,b=v;break}b=b.return}v=b}Yn(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,u=i.pendingProps.children,Vs(i,a),p=yi(p),u=u(p),i.flags|=1,Yn(n,i,u,a),i.child;case 14:return u=i.type,p=Di(u,i.pendingProps),p=Di(u.type,p),Qp(n,i,u,p,a);case 15:return Jp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Di(u,p),sl(n,i),i.tag=1,ti(u)?(n=!0,Ha(i)):n=!1,Vs(i,a),Vp(i,u,p),Su(i,u,p,a),Tu(null,i,u,!0,n,a);case 19:return sm(n,i,a);case 22:return Zp(n,i,a)}throw Error(t(156,i.tag))};function Rm(n,i){return lt(n,i)}function Jx(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(n,i,a,u){return new Jx(n,i,a,u)}function ju(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Zx(n){if(typeof n=="function")return ju(n)?1:0;if(n!=null){if(n=n.$$typeof,n===j)return 11;if(n===q)return 14}return 2}function Hr(n,i){var a=n.alternate;return a===null?(a=Ai(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function gl(n,i,a,u,p,v){var b=2;if(u=n,typeof n=="function")ju(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case O:return fs(a.children,p,v,i);case A:b=8,p|=8;break;case U:return n=Ai(12,a,i,p|2),n.elementType=U,n.lanes=v,n;case le:return n=Ai(13,a,i,p),n.elementType=le,n.lanes=v,n;case ce:return n=Ai(19,a,i,p),n.elementType=ce,n.lanes=v,n;case W:return vl(a,p,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case K:b=10;break e;case z:b=9;break e;case j:b=11;break e;case q:b=14;break e;case te:b=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ai(b,a,i,p),i.elementType=n,i.type=u,i.lanes=v,i}function fs(n,i,a,u){return n=Ai(7,n,u,i),n.lanes=a,n}function vl(n,i,a,u){return n=Ai(22,n,u,i),n.elementType=W,n.lanes=a,n.stateNode={isHidden:!1},n}function Ku(n,i,a){return n=Ai(6,n,null,i),n.lanes=a,n}function qu(n,i,a){return i=Ai(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function $x(n,i,a,u,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fn(0),this.expirationTimes=fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Yu(n,i,a,u,p,v,b,G,Q){return n=new $x(n,i,a,G,Q),i===1?(i=1,v===!0&&(i|=8)):i=0,v=Ai(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},lu(v),n}function e_(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Pm(n){if(!n)return Ir;n=n._reactInternals;e:{if(qn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ti(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ti(a))return rp(n,a,i)}return i}function Lm(n,i,a,u,p,v,b,G,Q){return n=Yu(a,u,!0,n,p,v,b,G,Q),n.context=Pm(null),a=n.current,u=Qn(),p=Br(a),v=fr(u,p),v.callback=i??null,Nr(a,v,p),n.current.lanes=p,Et(n,p,u),ri(n,u),n}function xl(n,i,a,u){var p=i.current,v=Qn(),b=Br(p);return a=Pm(a),i.context===null?i.context=a:i.pendingContext=a,i=fr(v,b),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Nr(p,i,b),n!==null&&(Fi(n,p,b,v),Ya(n,p,b)),b}function _l(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Im(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Qu(n,i){Im(n,i),(n=n.alternate)&&Im(n,i)}function t_(){return null}var Dm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ju(n){this._internalRoot=n}yl.prototype.render=Ju.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));xl(n,i,null,null)},yl.prototype.unmount=Ju.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ls(function(){xl(null,n,null,null)}),i[or]=null}};function yl(n){this._internalRoot=n}yl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Xt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<br.length&&i!==0&&i<br[a].priority;a++);br.splice(a,0,n),a===0&&_d(n)}};function Zu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Um(){}function n_(n,i,a,u,p){if(p){if(typeof u=="function"){var v=u;u=function(){var de=_l(b);v.call(de)}}var b=Lm(i,u,n,0,null,!1,!1,"",Um);return n._reactRootContainer=b,n[or]=b.current,ko(n.nodeType===8?n.parentNode:n),ls(),b}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var G=u;u=function(){var de=_l(Q);G.call(de)}}var Q=Yu(n,0,!1,null,null,!1,!1,"",Um);return n._reactRootContainer=Q,n[or]=Q.current,ko(n.nodeType===8?n.parentNode:n),ls(function(){xl(i,Q,a,u)}),Q}function Sl(n,i,a,u,p){var v=a._reactRootContainer;if(v){var b=v;if(typeof p=="function"){var G=p;p=function(){var Q=_l(b);G.call(Q)}}xl(i,b,n,p)}else b=n_(a,i,n,p,u);return _l(b)}Ft=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Pt(i.pendingLanes);a!==0&&(En(i,a|1),ri(i,Nt()),(Ot&6)===0&&(Ks=Nt()+500,Dr()))}break;case 13:ls(function(){var u=ur(n,1);if(u!==null){var p=Qn();Fi(u,n,1,p)}}),Qu(n,1)}},Yt=function(n){if(n.tag===13){var i=ur(n,134217728);if(i!==null){var a=Qn();Fi(i,n,134217728,a)}Qu(n,134217728)}},Ri=function(n){if(n.tag===13){var i=Br(n),a=ur(n,i);if(a!==null){var u=Qn();Fi(a,n,i,u)}Qu(n,i)}},Xt=function(){return Tt},Pi=function(n,i){var a=Tt;try{return Tt=n,i()}finally{Tt=a}},Mt=function(n,i,a){switch(i){case"input":if(ut(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var p=Ba(u);if(!p)throw Error(t(90));Ke(u),ut(u,p)}}}break;case"textarea":_e(n,a);break;case"select":i=a.value,i!=null&&Se(n,!!a.multiple,i,!1)}},Pe=Gu,Ee=ls;var i_={usingClientEntryPoint:!1,Events:[Ho,Us,Ba,he,ke,Gu]},ta={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},r_={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Mn(n),n===null?null:n.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||t_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{ae=Al.inject(r_),Ge=Al}catch{}}return si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i_,si.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zu(i))throw Error(t(200));return e_(n,i,null,a)},si.createRoot=function(n,i){if(!Zu(n))throw Error(t(299));var a=!1,u="",p=Dm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=Yu(n,1,!1,null,null,a,!1,u,p),n[or]=i.current,ko(n.nodeType===8?n.parentNode:n),new Ju(i)},si.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Mn(i),n=n===null?null:n.stateNode,n},si.flushSync=function(n){return ls(n)},si.hydrate=function(n,i,a){if(!Ml(i))throw Error(t(200));return Sl(null,n,i,!0,a)},si.hydrateRoot=function(n,i,a){if(!Zu(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,v="",b=Dm;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=Lm(i,null,n,1,a??null,p,!1,v,b),n[or]=i.current,ko(n),u)for(n=0;n<u.length;n++)a=u[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new yl(i)},si.render=function(n,i,a){if(!Ml(i))throw Error(t(200));return Sl(null,n,i,!1,a)},si.unmountComponentAtNode=function(n){if(!Ml(n))throw Error(t(40));return n._reactRootContainer?(ls(function(){Sl(null,null,n,!1,function(){n._reactRootContainer=null,n[or]=null})}),!0):!1},si.unstable_batchedUpdates=Gu,si.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Ml(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Sl(n,i,a,!1,u)},si.version="18.3.1-next-f1338f8080-20240426",si}var Vm;function p_(){if(Vm)return tf.exports;Vm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),tf.exports=d_(),tf.exports}var Gm;function m_(){if(Gm)return El;Gm=1;var s=p_();return El.createRoot=s.createRoot,El.hydrateRoot=s.hydrateRoot,El}var g_=m_();const Wm={field:{count:1400,size:1,drift:1},look:{trail:.35,grain:.5,glow:1},form:{circle:0},hands:{reach:1,clap:1},sound:{beat:1,sparks:1,bass:1,quiet:0}};function v_(s,e){let t=s;for(const r of e.split(".")){if(typeof t!="object"||t===null)return;t=t[r]}return typeof t=="number"?t:void 0}function Es(s,e){const t=structuredClone(s);for(const[r,o]of Object.entries(e)){if(!Number.isFinite(o)||v_(s,r)===void 0)continue;const l=r.split("."),c=l.pop();let f=t;for(const d of l)f=f[d];f[c]=o}return t}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kh="184",x_=0,Xm=1,__=2,ec=1,y_=2,pa=3,Zr=0,ai=1,Hi=2,yr=0,mo=1,jm=2,Km=3,qm=4,M_=5,vs=100,S_=101,A_=102,E_=103,w_=104,T_=200,b_=201,C_=202,R_=203,Zf=204,$f=205,P_=206,L_=207,I_=208,D_=209,U_=210,N_=211,F_=212,O_=213,k_=214,eh=0,th=1,nh=2,vo=3,ih=4,rh=5,sh=6,oh=7,Ig=0,B_=1,z_=2,tr=0,Dg=1,Ug=2,Ng=3,Fg=4,Og=5,kg=6,Bg=7,zg=300,Ms=301,xo=302,sf=303,of=304,_c=306,lc=1e3,_r=1001,ah=1002,xn=1003,H_=1004,wl=1005,Rn=1006,af=1007,_s=1008,Ti=1009,Hg=1010,Vg=1011,_a=1012,qh=1013,rr=1014,Gi=1015,Sr=1016,Yh=1017,Qh=1018,ya=1020,Gg=35902,Wg=35899,Xg=1021,jg=1022,bi=1023,Ar=1026,ys=1027,Kg=1028,Jh=1029,Ss=1030,Zh=1031,$h=1033,tc=33776,nc=33777,ic=33778,rc=33779,lh=35840,ch=35841,uh=35842,fh=35843,hh=36196,dh=37492,ph=37496,mh=37488,gh=37489,cc=37490,vh=37491,xh=37808,_h=37809,yh=37810,Mh=37811,Sh=37812,Ah=37813,Eh=37814,wh=37815,Th=37816,bh=37817,Ch=37818,Rh=37819,Ph=37820,Lh=37821,Ih=36492,Dh=36494,Uh=36495,Nh=36283,Fh=36284,uc=36285,Oh=36286,V_=3200,Ym=0,G_=1,Qr="",wi="srgb",fc="srgb-linear",hc="linear",jt="srgb",Ys=7680,Qm=519,W_=512,X_=513,j_=514,ed=515,K_=516,q_=517,td=518,Y_=519,Jm=35044,Zm=35048,$m="300 es",er=2e3,dc=2001;function Q_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function pc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function J_(){const s=pc("canvas");return s.style.display="block",s}const e0={};function t0(...s){const e="THREE."+s.shift();console.log(e,...s)}function qg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function yt(...s){s=qg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Bt(...s){s=qg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function kh(...s){const e=s.join(" ");e in e0||(e0[e]=!0,yt(...s))}function Z_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const $_={[eh]:th,[nh]:sh,[ih]:oh,[vo]:rh,[th]:eh,[sh]:nh,[oh]:ih,[rh]:vo};class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let n0=1234567;const va=Math.PI/180,Ma=180/Math.PI;function Mo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Vn[s&255]+Vn[s>>8&255]+Vn[s>>16&255]+Vn[s>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]).toLowerCase()}function It(s,e,t){return Math.max(e,Math.min(t,s))}function nd(s,e){return(s%e+e)%e}function ey(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function ty(s,e,t){return s!==e?(t-s)/(e-s):0}function xa(s,e,t){return(1-t)*s+t*e}function ny(s,e,t,r){return xa(s,e,1-Math.exp(-t*r))}function iy(s,e=1){return e-Math.abs(nd(s,e*2)-e)}function ry(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function sy(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function oy(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ay(s,e){return s+Math.random()*(e-s)}function ly(s){return s*(.5-Math.random())}function cy(s){s!==void 0&&(n0=s);let e=n0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uy(s){return s*va}function fy(s){return s*Ma}function hy(s){return(s&s-1)===0&&s!==0}function dy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function py(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function my(s,e,t,r,o){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),h=l((e+r)/2),g=c((e+r)/2),x=l((e-r)/2),m=c((e-r)/2),_=l((r-e)/2),S=c((r-e)/2);switch(o){case"XYX":s.set(f*g,d*x,d*m,f*h);break;case"YZY":s.set(d*m,f*g,d*x,f*h);break;case"ZXZ":s.set(d*x,d*m,f*g,f*h);break;case"XZX":s.set(f*g,d*S,d*_,f*h);break;case"YXY":s.set(d*_,f*g,d*S,f*h);break;case"ZYZ":s.set(d*S,d*_,f*g,f*h);break;default:yt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function uo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const lf={DEG2RAD:va,RAD2DEG:Ma,generateUUID:Mo,clamp:It,euclideanModulo:nd,mapLinear:ey,inverseLerp:ty,lerp:xa,damp:ny,pingpong:iy,smoothstep:ry,smootherstep:sy,randInt:oy,randFloat:ay,randFloatSpread:ly,seededRandom:cy,degToRad:uy,radToDeg:fy,isPowerOfTwo:hy,ceilPowerOfTwo:dy,floorPowerOfTwo:py,setQuaternionFromProperEuler:my,normalize:Jn,denormalize:uo},dd=class dd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(It(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dd.prototype.isVector2=!0;let Dt=dd;class nr{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let d=r[o+0],h=r[o+1],g=r[o+2],x=r[o+3],m=l[c+0],_=l[c+1],S=l[c+2],T=l[c+3];if(x!==T||d!==m||h!==_||g!==S){let y=d*m+h*_+g*S+x*T;y<0&&(m=-m,_=-_,S=-S,T=-T,y=-y);let M=1-f;if(y<.9995){const E=Math.acos(y),P=Math.sin(E);M=Math.sin(M*E)/P,f=Math.sin(f*E)/P,d=d*M+m*f,h=h*M+_*f,g=g*M+S*f,x=x*M+T*f}else{d=d*M+m*f,h=h*M+_*f,g=g*M+S*f,x=x*M+T*f;const E=1/Math.sqrt(d*d+h*h+g*g+x*x);d*=E,h*=E,g*=E,x*=E}}e[t]=d,e[t+1]=h,e[t+2]=g,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],d=r[o+1],h=r[o+2],g=r[o+3],x=l[c],m=l[c+1],_=l[c+2],S=l[c+3];return e[t]=f*S+g*x+d*_-h*m,e[t+1]=d*S+g*m+h*x-f*_,e[t+2]=h*S+g*_+f*m-d*x,e[t+3]=g*S-f*x-d*m-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(r/2),g=f(o/2),x=f(l/2),m=d(r/2),_=d(o/2),S=d(l/2);switch(c){case"XYZ":this._x=m*g*x+h*_*S,this._y=h*_*x-m*g*S,this._z=h*g*S+m*_*x,this._w=h*g*x-m*_*S;break;case"YXZ":this._x=m*g*x+h*_*S,this._y=h*_*x-m*g*S,this._z=h*g*S-m*_*x,this._w=h*g*x+m*_*S;break;case"ZXY":this._x=m*g*x-h*_*S,this._y=h*_*x+m*g*S,this._z=h*g*S+m*_*x,this._w=h*g*x-m*_*S;break;case"ZYX":this._x=m*g*x-h*_*S,this._y=h*_*x+m*g*S,this._z=h*g*S-m*_*x,this._w=h*g*x+m*_*S;break;case"YZX":this._x=m*g*x+h*_*S,this._y=h*_*x+m*g*S,this._z=h*g*S-m*_*x,this._w=h*g*x-m*_*S;break;case"XZY":this._x=m*g*x-h*_*S,this._y=h*_*x-m*g*S,this._z=h*g*S+m*_*x,this._w=h*g*x+m*_*S;break;default:yt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],d=t[9],h=t[2],g=t[6],x=t[10],m=r+f+x;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(g-d)*_,this._y=(l-h)*_,this._z=(c-o)*_}else if(r>f&&r>x){const _=2*Math.sqrt(1+r-f-x);this._w=(g-d)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(l+h)/_}else if(f>x){const _=2*Math.sqrt(1+f-r-x);this._w=(l-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(d+g)/_}else{const _=2*Math.sqrt(1+x-r-f);this._w=(c-o)/_,this._x=(l+h)/_,this._y=(d+g)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,d=t._y,h=t._z,g=t._w;return this._x=r*g+c*f+o*h-l*d,this._y=o*g+c*d+l*f-r*h,this._z=l*g+c*h+r*d-o*f,this._w=c*g-r*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,c=-c,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);d=Math.sin(d*h)/g,t=Math.sin(t*h)/g,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const pd=class pd{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(i0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(i0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*o-f*r),g=2*(f*t-l*o),x=2*(l*r-c*t);return this.x=t+d*h+c*x-f*g,this.y=r+d*g+f*h-l*x,this.z=o+d*x+l*g-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*c-r*d,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return cf.copy(this).projectOnVector(e),this.sub(cf)}reflect(e){return this.sub(cf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(It(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pd.prototype.isVector3=!0;let J=pd;const cf=new J,i0=new nr,md=class md{constructor(e,t,r,o,l,c,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h)}set(e,t,r,o,l,c,f,d,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=d,g[6]=r,g[7]=c,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],d=r[6],h=r[1],g=r[4],x=r[7],m=r[2],_=r[5],S=r[8],T=o[0],y=o[3],M=o[6],E=o[1],P=o[4],R=o[7],H=o[2],I=o[5],O=o[8];return l[0]=c*T+f*E+d*H,l[3]=c*y+f*P+d*I,l[6]=c*M+f*R+d*O,l[1]=h*T+g*E+x*H,l[4]=h*y+g*P+x*I,l[7]=h*M+g*R+x*O,l[2]=m*T+_*E+S*H,l[5]=m*y+_*P+S*I,l[8]=m*M+_*R+S*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8];return t*c*g-t*f*h-r*l*g+r*f*d+o*l*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],x=g*c-f*h,m=f*d-g*l,_=h*l-c*d,S=t*x+r*m+o*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=x*T,e[1]=(o*h-g*r)*T,e[2]=(f*r-o*c)*T,e[3]=m*T,e[4]=(g*t-o*d)*T,e[5]=(o*l-f*t)*T,e[6]=_*T,e[7]=(r*d-h*t)*T,e[8]=(c*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*c+h*f)+c+e,-o*h,o*d,-o*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(uf.makeScale(e,t)),this}rotate(e){return this.premultiply(uf.makeRotation(-e)),this}translate(e,t){return this.premultiply(uf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};md.prototype.isMatrix3=!0;let wt=md;const uf=new wt,r0=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),s0=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gy(){const s={enabled:!0,workingColorSpace:fc,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===jt&&(o.r=Mr(o.r),o.g=Mr(o.g),o.b=Mr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===jt&&(o.r=go(o.r),o.g=go(o.g),o.b=go(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Qr?hc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return kh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return kh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[fc]:{primaries:e,whitePoint:r,transfer:hc,toXYZ:r0,fromXYZ:s0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wi},outputColorSpaceConfig:{drawingBufferColorSpace:wi}},[wi]:{primaries:e,whitePoint:r,transfer:jt,toXYZ:r0,fromXYZ:s0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wi}}}),s}const Ut=gy();function Mr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function go(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qs;class vy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qs===void 0&&(Qs=pc("canvas")),Qs.width=e.width,Qs.height=e.height;const o=Qs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Qs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Mr(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Mr(t[r]/255)*255):t[r]=Mr(t[r]);return{data:t,width:e.width,height:e.height}}else return yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xy=0;class id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(ff(o[c].image)):l.push(ff(o[c]))}else l=ff(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ff(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(yt("Texture: Unable to serialize Texture."),{})}let _y=0;const hf=new J;class Xn extends ws{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,r=_r,o=_r,l=Rn,c=_s,f=bi,d=Ti,h=Xn.DEFAULT_ANISOTROPY,g=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Mo(),this.name="",this.source=new id(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hf).x}get height(){return this.source.getSize(hf).y}get depth(){return this.source.getSize(hf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){yt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){yt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lc:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lc:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=zg;Xn.DEFAULT_ANISOTROPY=1;const gd=class gd{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],g=d[4],x=d[8],m=d[1],_=d[5],S=d[9],T=d[2],y=d[6],M=d[10];if(Math.abs(g-m)<.01&&Math.abs(x-T)<.01&&Math.abs(S-y)<.01){if(Math.abs(g+m)<.1&&Math.abs(x+T)<.1&&Math.abs(S+y)<.1&&Math.abs(h+_+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,R=(_+1)/2,H=(M+1)/2,I=(g+m)/4,O=(x+T)/4,A=(S+y)/4;return P>R&&P>H?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=I/r,l=O/r):R>H?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=I/o,l=A/o):H<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(H),r=O/l,o=A/l),this.set(r,o,l,t),this}let E=Math.sqrt((y-S)*(y-S)+(x-T)*(x-T)+(m-g)*(m-g));return Math.abs(E)<.001&&(E=1),this.x=(y-S)/E,this.y=(x-T)/E,this.z=(m-g)/E,this.w=Math.acos((h+_+M-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this.w=It(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this.w=It(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gd.prototype.isVector4=!0;let nn=gd;class yy extends ws{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Xn(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new id(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends yy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Yg extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=xn,this.minFilter=xn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class My extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=xn,this.minFilter=xn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xc=class xc{constructor(e,t,r,o,l,c,f,d,h,g,x,m,_,S,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h,g,x,m,_,S,T,y)}set(e,t,r,o,l,c,f,d,h,g,x,m,_,S,T,y){const M=this.elements;return M[0]=e,M[4]=t,M[8]=r,M[12]=o,M[1]=l,M[5]=c,M[9]=f,M[13]=d,M[2]=h,M[6]=g,M[10]=x,M[14]=m,M[3]=_,M[7]=S,M[11]=T,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Js.setFromMatrixColumn(e,0).length(),l=1/Js.setFromMatrixColumn(e,1).length(),c=1/Js.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),g=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const m=c*g,_=c*x,S=f*g,T=f*x;t[0]=d*g,t[4]=-d*x,t[8]=h,t[1]=_+S*h,t[5]=m-T*h,t[9]=-f*d,t[2]=T-m*h,t[6]=S+_*h,t[10]=c*d}else if(e.order==="YXZ"){const m=d*g,_=d*x,S=h*g,T=h*x;t[0]=m+T*f,t[4]=S*f-_,t[8]=c*h,t[1]=c*x,t[5]=c*g,t[9]=-f,t[2]=_*f-S,t[6]=T+m*f,t[10]=c*d}else if(e.order==="ZXY"){const m=d*g,_=d*x,S=h*g,T=h*x;t[0]=m-T*f,t[4]=-c*x,t[8]=S+_*f,t[1]=_+S*f,t[5]=c*g,t[9]=T-m*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const m=c*g,_=c*x,S=f*g,T=f*x;t[0]=d*g,t[4]=S*h-_,t[8]=m*h+T,t[1]=d*x,t[5]=T*h+m,t[9]=_*h-S,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const m=c*d,_=c*h,S=f*d,T=f*h;t[0]=d*g,t[4]=T-m*x,t[8]=S*x+_,t[1]=x,t[5]=c*g,t[9]=-f*g,t[2]=-h*g,t[6]=_*x+S,t[10]=m-T*x}else if(e.order==="XZY"){const m=c*d,_=c*h,S=f*d,T=f*h;t[0]=d*g,t[4]=-x,t[8]=h*g,t[1]=m*x+T,t[5]=c*g,t[9]=_*x-S,t[2]=S*x-_,t[6]=f*g,t[10]=T*x+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sy,e,Ay)}lookAt(e,t,r){const o=this.elements;return pi.subVectors(e,t),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Gr.crossVectors(r,pi),Gr.lengthSq()===0&&(Math.abs(r.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Gr.crossVectors(r,pi)),Gr.normalize(),Tl.crossVectors(pi,Gr),o[0]=Gr.x,o[4]=Tl.x,o[8]=pi.x,o[1]=Gr.y,o[5]=Tl.y,o[9]=pi.y,o[2]=Gr.z,o[6]=Tl.z,o[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],d=r[8],h=r[12],g=r[1],x=r[5],m=r[9],_=r[13],S=r[2],T=r[6],y=r[10],M=r[14],E=r[3],P=r[7],R=r[11],H=r[15],I=o[0],O=o[4],A=o[8],U=o[12],K=o[1],z=o[5],j=o[9],le=o[13],ce=o[2],q=o[6],te=o[10],W=o[14],F=o[3],k=o[7],ee=o[11],D=o[15];return l[0]=c*I+f*K+d*ce+h*F,l[4]=c*O+f*z+d*q+h*k,l[8]=c*A+f*j+d*te+h*ee,l[12]=c*U+f*le+d*W+h*D,l[1]=g*I+x*K+m*ce+_*F,l[5]=g*O+x*z+m*q+_*k,l[9]=g*A+x*j+m*te+_*ee,l[13]=g*U+x*le+m*W+_*D,l[2]=S*I+T*K+y*ce+M*F,l[6]=S*O+T*z+y*q+M*k,l[10]=S*A+T*j+y*te+M*ee,l[14]=S*U+T*le+y*W+M*D,l[3]=E*I+P*K+R*ce+H*F,l[7]=E*O+P*z+R*q+H*k,l[11]=E*A+P*j+R*te+H*ee,l[15]=E*U+P*le+R*W+H*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],d=e[9],h=e[13],g=e[2],x=e[6],m=e[10],_=e[14],S=e[3],T=e[7],y=e[11],M=e[15],E=d*_-h*m,P=f*_-h*x,R=f*m-d*x,H=c*_-h*g,I=c*m-d*g,O=c*x-f*g;return t*(T*E-y*P+M*R)-r*(S*E-y*H+M*I)+o*(S*P-T*H+M*O)-l*(S*R-T*I+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],x=e[9],m=e[10],_=e[11],S=e[12],T=e[13],y=e[14],M=e[15],E=t*f-r*c,P=t*d-o*c,R=t*h-l*c,H=r*d-o*f,I=r*h-l*f,O=o*h-l*d,A=g*T-x*S,U=g*y-m*S,K=g*M-_*S,z=x*y-m*T,j=x*M-_*T,le=m*M-_*y,ce=E*le-P*j+R*z+H*K-I*U+O*A;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/ce;return e[0]=(f*le-d*j+h*z)*q,e[1]=(o*j-r*le-l*z)*q,e[2]=(T*O-y*I+M*H)*q,e[3]=(m*I-x*O-_*H)*q,e[4]=(d*K-c*le-h*U)*q,e[5]=(t*le-o*K+l*U)*q,e[6]=(y*R-S*O-M*P)*q,e[7]=(g*O-m*R+_*P)*q,e[8]=(c*j-f*K+h*A)*q,e[9]=(r*K-t*j-l*A)*q,e[10]=(S*I-T*R+M*E)*q,e[11]=(x*R-g*I-_*E)*q,e[12]=(f*U-c*z-d*A)*q,e[13]=(t*z-r*U+o*A)*q,e[14]=(T*P-S*H-y*E)*q,e[15]=(g*H-x*P+m*E)*q,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,d=e.z,h=l*c,g=l*f;return this.set(h*c+r,h*f-o*d,h*d+o*f,0,h*f+o*d,g*f+r,g*d-o*c,0,h*d-o*f,g*d+o*c,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,h=l+l,g=c+c,x=f+f,m=l*h,_=l*g,S=l*x,T=c*g,y=c*x,M=f*x,E=d*h,P=d*g,R=d*x,H=r.x,I=r.y,O=r.z;return o[0]=(1-(T+M))*H,o[1]=(_+R)*H,o[2]=(S-P)*H,o[3]=0,o[4]=(_-R)*I,o[5]=(1-(m+M))*I,o[6]=(y+E)*I,o[7]=0,o[8]=(S+P)*O,o[9]=(y-E)*O,o[10]=(1-(m+T))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=Js.set(o[0],o[1],o[2]).length();const f=Js.set(o[4],o[5],o[6]).length(),d=Js.set(o[8],o[9],o[10]).length();l<0&&(c=-c),Oi.copy(this);const h=1/c,g=1/f,x=1/d;return Oi.elements[0]*=h,Oi.elements[1]*=h,Oi.elements[2]*=h,Oi.elements[4]*=g,Oi.elements[5]*=g,Oi.elements[6]*=g,Oi.elements[8]*=x,Oi.elements[9]*=x,Oi.elements[10]*=x,t.setFromRotationMatrix(Oi),r.x=c,r.y=f,r.z=d,this}makePerspective(e,t,r,o,l,c,f=er,d=!1){const h=this.elements,g=2*l/(t-e),x=2*l/(r-o),m=(t+e)/(t-e),_=(r+o)/(r-o);let S,T;if(d)S=l/(c-l),T=c*l/(c-l);else if(f===er)S=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(f===dc)S=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=x,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=er,d=!1){const h=this.elements,g=2/(t-e),x=2/(r-o),m=-(t+e)/(t-e),_=-(r+o)/(r-o);let S,T;if(d)S=1/(c-l),T=c/(c-l);else if(f===er)S=-2/(c-l),T=-(c+l)/(c-l);else if(f===dc)S=-1/(c-l),T=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=x,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};xc.prototype.isMatrix4=!0;let on=xc;const Js=new J,Oi=new on,Sy=new J(0,0,0),Ay=new J(1,1,1),Gr=new J,Tl=new J,pi=new J,o0=new on,a0=new nr;class As{constructor(e=0,t=0,r=0,o=As.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],d=o[1],h=o[5],g=o[9],x=o[2],m=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,_),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-It(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(It(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-x,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-It(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,_));break;case"XZY":this._z=Math.asin(-It(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,_),this._y=0);break;default:yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return o0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(o0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return a0.setFromEuler(this),this.setFromQuaternion(a0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}As.DEFAULT_ORDER="XYZ";class Qg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ey=0;const l0=new J,Zs=new nr,pr=new on,bl=new J,ia=new J,wy=new J,Ty=new nr,c0=new J(1,0,0),u0=new J(0,1,0),f0=new J(0,0,1),h0={type:"added"},by={type:"removed"},$s={type:"childadded",child:null},df={type:"childremoved",child:null};class $n extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new J,t=new As,r=new nr,o=new J(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new on},normalMatrix:{value:new wt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(c0,e)}rotateY(e){return this.rotateOnAxis(u0,e)}rotateZ(e){return this.rotateOnAxis(f0,e)}translateOnAxis(e,t){return l0.copy(e).applyQuaternion(this.quaternion),this.position.add(l0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(c0,e)}translateY(e){return this.translateOnAxis(u0,e)}translateZ(e){return this.translateOnAxis(f0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?bl.copy(e):bl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(ia,bl,this.up):pr.lookAt(bl,ia,this.up),this.quaternion.setFromRotationMatrix(pr),o&&(pr.extractRotation(o.matrixWorld),Zs.setFromRotationMatrix(pr),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(h0),$s.child=e,this.dispatchEvent($s),$s.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(by),df.child=e,this.dispatchEvent(df),df.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(h0),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,wy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,Ty,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,g=d.length;h<g;h++){const x=d[h];l(e.shapes,x)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),g=c(e.images),x=c(e.shapes),m=c(e.skeletons),_=c(e.animations),S=c(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),m.length>0&&(r.skeletons=m),_.length>0&&(r.animations=_),S.length>0&&(r.nodes=S)}return r.object=o,r;function c(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}$n.DEFAULT_UP=new J(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wi extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cy={type:"move"};class pf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),M=this._getHandJoint(h,T);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],m=g.position.distanceTo(x.position),_=.02,S=.005;h.inputState.pinching&&m>_+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=_-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Cy)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Wi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function mf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class zt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ut.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ut.workingColorSpace){if(e=nd(e,1),t=It(t,0,1),r=It(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=mf(c,l,e+1/3),this.g=mf(c,l,e),this.b=mf(c,l,e-1/3)}return Ut.colorSpaceToWorking(this,o),this}setStyle(e,t=wi){function r(l){l!==void 0&&parseFloat(l)<1&&yt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:yt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);yt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wi){const r=Jg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):yt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wi){return Ut.workingToColorSpace(Gn.copy(this),e),Math.round(It(Gn.r*255,0,255))*65536+Math.round(It(Gn.g*255,0,255))*256+Math.round(It(Gn.b*255,0,255))}getHexString(e=wi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(Gn.copy(this),t);const r=Gn.r,o=Gn.g,l=Gn.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let d,h;const g=(f+c)/2;if(f===c)d=0,h=0;else{const x=c-f;switch(h=g<=.5?x/(c+f):x/(2-c-f),c){case r:d=(o-l)/x+(o<l?6:0);break;case o:d=(l-r)/x+2;break;case l:d=(r-o)/x+4;break}d/=6}return e.h=d,e.s=h,e.l=g,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=wi){Ut.workingToColorSpace(Gn.copy(this),e);const t=Gn.r,r=Gn.g,o=Gn.b;return e!==wi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(Cl);const r=xa(Wr.h,Cl.h,t),o=xa(Wr.s,Cl.s,t),l=xa(Wr.l,Cl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new zt;zt.NAMES=Jg;class yc extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new As,this.environmentIntensity=1,this.environmentRotation=new As,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ki=new J,mr=new J,gf=new J,gr=new J,eo=new J,to=new J,d0=new J,vf=new J,xf=new J,_f=new J,yf=new nn,Mf=new nn,Sf=new nn;class Vi{constructor(e=new J,t=new J,r=new J){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ki.subVectors(e,t),o.cross(ki);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ki.subVectors(o,t),mr.subVectors(r,t),gf.subVectors(e,t);const c=ki.dot(ki),f=ki.dot(mr),d=ki.dot(gf),h=mr.dot(mr),g=mr.dot(gf),x=c*h-f*f;if(x===0)return l.set(0,0,0),null;const m=1/x,_=(h*d-f*g)*m,S=(c*g-f*d)*m;return l.set(1-_-S,S,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(e,t,r,o,l,c,f,d){return this.getBarycoord(e,t,r,o,gr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,gr.x),d.addScaledVector(c,gr.y),d.addScaledVector(f,gr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,c){return yf.setScalar(0),Mf.setScalar(0),Sf.setScalar(0),yf.fromBufferAttribute(e,t),Mf.fromBufferAttribute(e,r),Sf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(yf,l.x),c.addScaledVector(Mf,l.y),c.addScaledVector(Sf,l.z),c}static isFrontFacing(e,t,r,o){return ki.subVectors(r,t),mr.subVectors(e,t),ki.cross(mr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),ki.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Vi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;eo.subVectors(o,r),to.subVectors(l,r),vf.subVectors(e,r);const d=eo.dot(vf),h=to.dot(vf);if(d<=0&&h<=0)return t.copy(r);xf.subVectors(e,o);const g=eo.dot(xf),x=to.dot(xf);if(g>=0&&x<=g)return t.copy(o);const m=d*x-g*h;if(m<=0&&d>=0&&g<=0)return c=d/(d-g),t.copy(r).addScaledVector(eo,c);_f.subVectors(e,l);const _=eo.dot(_f),S=to.dot(_f);if(S>=0&&_<=S)return t.copy(l);const T=_*h-d*S;if(T<=0&&h>=0&&S<=0)return f=h/(h-S),t.copy(r).addScaledVector(to,f);const y=g*S-_*x;if(y<=0&&x-g>=0&&_-S>=0)return d0.subVectors(l,o),f=(x-g)/(x-g+(_-S)),t.copy(o).addScaledVector(d0,f);const M=1/(y+T+m);return c=T*M,f=m*M,t.copy(r).addScaledVector(eo,c).addScaledVector(to,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Sa{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Bi):Bi.fromBufferAttribute(l,c),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Rl.copy(r.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Pl.subVectors(this.max,ra),no.subVectors(e.a,ra),io.subVectors(e.b,ra),ro.subVectors(e.c,ra),Xr.subVectors(io,no),jr.subVectors(ro,io),hs.subVectors(no,ro);let t=[0,-Xr.z,Xr.y,0,-jr.z,jr.y,0,-hs.z,hs.y,Xr.z,0,-Xr.x,jr.z,0,-jr.x,hs.z,0,-hs.x,-Xr.y,Xr.x,0,-jr.y,jr.x,0,-hs.y,hs.x,0];return!Af(t,no,io,ro,Pl)||(t=[1,0,0,0,1,0,0,0,1],!Af(t,no,io,ro,Pl))?!1:(Ll.crossVectors(Xr,jr),t=[Ll.x,Ll.y,Ll.z],Af(t,no,io,ro,Pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vr=[new J,new J,new J,new J,new J,new J,new J,new J],Bi=new J,Rl=new Sa,no=new J,io=new J,ro=new J,Xr=new J,jr=new J,hs=new J,ra=new J,Pl=new J,Ll=new J,ds=new J;function Af(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){ds.fromArray(s,l);const f=o.x*Math.abs(ds.x)+o.y*Math.abs(ds.y)+o.z*Math.abs(ds.z),d=e.dot(ds),h=t.dot(ds),g=r.dot(ds);if(Math.max(-Math.max(d,h,g),Math.min(d,h,g))>f)return!1}return!0}const dn=new J,Il=new Dt;let Ry=0;class kt extends ws{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ry++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Jm,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Il.fromBufferAttribute(this,t),Il.applyMatrix3(e),this.setXY(t,Il.x,Il.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=uo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Jn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=uo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=uo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=uo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=uo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),r=Jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),r=Jn(r,this.array),o=Jn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),r=Jn(r,this.array),o=Jn(o,this.array),l=Jn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Zg extends kt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class $g extends kt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Nn extends kt{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Py=new Sa,sa=new J,Ef=new J;class So{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Py.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const t=sa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(sa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ef.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(Ef)),this.expandByPoint(sa.copy(e.center).sub(Ef))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ly=0;const Ei=new on,wf=new $n,so=new J,mi=new Sa,oa=new Sa,Cn=new J;class ln extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=Mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Q_(e)?$g:Zg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new wt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,r){return Ei.makeTranslation(e,t,r),this.applyMatrix4(Ei),this}scale(e,t,r){return Ei.makeScale(e,t,r),this.applyMatrix4(Ei),this}lookAt(e){return wf.lookAt(e),wf.updateMatrix(),this.applyMatrix4(wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Nn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];mi.setFromBufferAttribute(l),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];oa.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(mi.min,oa.min),mi.expandByPoint(Cn),Cn.addVectors(mi.max,oa.max),mi.expandByPoint(Cn)):(mi.expandByPoint(oa.min),mi.expandByPoint(oa.max))}mi.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)Cn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Cn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)Cn.fromBufferAttribute(f,h),d&&(so.fromBufferAttribute(e,h),Cn.add(so)),o=Math.max(o,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let A=0;A<r.count;A++)f[A]=new J,d[A]=new J;const h=new J,g=new J,x=new J,m=new Dt,_=new Dt,S=new Dt,T=new J,y=new J;function M(A,U,K){h.fromBufferAttribute(r,A),g.fromBufferAttribute(r,U),x.fromBufferAttribute(r,K),m.fromBufferAttribute(l,A),_.fromBufferAttribute(l,U),S.fromBufferAttribute(l,K),g.sub(h),x.sub(h),_.sub(m),S.sub(m);const z=1/(_.x*S.y-S.x*_.y);isFinite(z)&&(T.copy(g).multiplyScalar(S.y).addScaledVector(x,-_.y).multiplyScalar(z),y.copy(x).multiplyScalar(_.x).addScaledVector(g,-S.x).multiplyScalar(z),f[A].add(T),f[U].add(T),f[K].add(T),d[A].add(y),d[U].add(y),d[K].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let A=0,U=E.length;A<U;++A){const K=E[A],z=K.start,j=K.count;for(let le=z,ce=z+j;le<ce;le+=3)M(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const P=new J,R=new J,H=new J,I=new J;function O(A){H.fromBufferAttribute(o,A),I.copy(H);const U=f[A];P.copy(U),P.sub(H.multiplyScalar(H.dot(U))).normalize(),R.crossVectors(I,U);const z=R.dot(d[A])<0?-1:1;c.setXYZW(A,P.x,P.y,P.z,z)}for(let A=0,U=E.length;A<U;++A){const K=E[A],z=K.start,j=K.count;for(let le=z,ce=z+j;le<ce;le+=3)O(e.getX(le+0)),O(e.getX(le+1)),O(e.getX(le+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,_=r.count;m<_;m++)r.setXYZ(m,0,0,0);const o=new J,l=new J,c=new J,f=new J,d=new J,h=new J,g=new J,x=new J;if(e)for(let m=0,_=e.count;m<_;m+=3){const S=e.getX(m+0),T=e.getX(m+1),y=e.getX(m+2);o.fromBufferAttribute(t,S),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,y),g.subVectors(c,l),x.subVectors(o,l),g.cross(x),f.fromBufferAttribute(r,S),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,y),f.add(g),d.add(g),h.add(g),r.setXYZ(S,f.x,f.y,f.z),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,_=t.count;m<_;m+=3)o.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,l),x.subVectors(o,l),g.cross(x),r.setXYZ(m+0,g.x,g.y,g.z),r.setXYZ(m+1,g.x,g.y,g.z),r.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(f,d){const h=f.array,g=f.itemSize,x=f.normalized,m=new h.constructor(d.length*g);let _=0,S=0;for(let T=0,y=d.length;T<y;T++){f.isInterleavedBufferAttribute?_=d[T]*f.data.stride+f.offset:_=d[T]*g;for(let M=0;M<g;M++)m[S++]=h[_++]}return new kt(m,g,x)}if(this.index===null)return yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let g=0,x=h.length;g<x;g++){const m=h[g],_=e(m,r);d.push(_)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],g=[];for(let x=0,m=h.length;x<m;x++){const _=h[x];g.push(_.toJSON(e.data))}g.length>0&&(o[d]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(t))}const l=e.morphAttributes;for(const h in l){const g=[],x=l[h];for(let m=0,_=x.length;m<_;m++)g.push(x[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,g=c.length;h<g;h++){const x=c[h];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Iy=0;class Ao extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Mo(),this.name="",this.type="Material",this.blending=mo,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zf,this.blendDst=$f,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){yt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){yt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(r.blending=this.blending),this.side!==Zr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Zf&&(r.blendSrc=this.blendSrc),this.blendDst!==$f&&(r.blendDst=this.blendDst),this.blendEquation!==vs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xr=new J,Tf=new J,Dl=new J,Kr=new J,bf=new J,Ul=new J,Cf=new J;class rd{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Tf.copy(e).add(t).multiplyScalar(.5),Dl.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(Tf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Dl),f=Kr.dot(this.direction),d=-Kr.dot(Dl),h=Kr.lengthSq(),g=Math.abs(1-c*c);let x,m,_,S;if(g>0)if(x=c*d-f,m=c*f-d,S=l*g,x>=0)if(m>=-S)if(m<=S){const T=1/g;x*=T,m*=T,_=x*(x+c*m+2*f)+m*(c*x+m+2*d)+h}else m=l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;else m=-l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;else m<=-S?(x=Math.max(0,-(-c*l+f)),m=x>0?-l:Math.min(Math.max(-l,-d),l),_=-x*x+m*(m+2*d)+h):m<=S?(x=0,m=Math.min(Math.max(-l,-d),l),_=m*(m+2*d)+h):(x=Math.max(0,-(c*l+f)),m=x>0?l:Math.min(Math.max(-l,-d),l),_=-x*x+m*(m+2*d)+h);else m=c>0?-l:l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Tf).addScaledVector(Dl,m),_}intersectSphere(e,t){xr.subVectors(e.center,this.origin);const r=xr.dot(this.direction),o=xr.dot(xr)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,d;const h=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,m=this.origin;return h>=0?(r=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(r=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),g>=0?(l=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(l=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),x>=0?(f=(e.min.z-m.z)*x,d=(e.max.z-m.z)*x):(f=(e.max.z-m.z)*x,d=(e.min.z-m.z)*x),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,r,o,l){bf.subVectors(t,e),Ul.subVectors(r,e),Cf.crossVectors(bf,Ul);let c=this.direction.dot(Cf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Kr.subVectors(this.origin,e);const d=f*this.direction.dot(Ul.crossVectors(Kr,Ul));if(d<0)return null;const h=f*this.direction.dot(bf.cross(Kr));if(h<0||d+h>c)return null;const g=-f*Kr.dot(Cf);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ev extends Ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new As,this.combine=Ig,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const p0=new on,ps=new rd,Nl=new So,m0=new J,Fl=new J,Ol=new J,kl=new J,Rf=new J,Bl=new J,g0=new J,zl=new J;class Fn extends $n{constructor(e=new ln,t=new ev){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Bl.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const g=f[d],x=l[d];g!==0&&(Rf.fromBufferAttribute(x,e),c?Bl.addScaledVector(Rf,g):Bl.addScaledVector(Rf.sub(t),g))}t.add(Bl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(l),ps.copy(e.ray).recast(e.near),!(Nl.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Nl,m0)===null||ps.origin.distanceToSquared(m0)>(e.far-e.near)**2))&&(p0.copy(l).invert(),ps.copy(e.ray).applyMatrix4(p0),!(r.boundingBox!==null&&ps.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,g=l.attributes.uv1,x=l.attributes.normal,m=l.groups,_=l.drawRange;if(f!==null)if(Array.isArray(c))for(let S=0,T=m.length;S<T;S++){const y=m[S],M=c[y.materialIndex],E=Math.max(y.start,_.start),P=Math.min(f.count,Math.min(y.start+y.count,_.start+_.count));for(let R=E,H=P;R<H;R+=3){const I=f.getX(R),O=f.getX(R+1),A=f.getX(R+2);o=Hl(this,M,e,r,h,g,x,I,O,A),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,_.start),T=Math.min(f.count,_.start+_.count);for(let y=S,M=T;y<M;y+=3){const E=f.getX(y),P=f.getX(y+1),R=f.getX(y+2);o=Hl(this,c,e,r,h,g,x,E,P,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let S=0,T=m.length;S<T;S++){const y=m[S],M=c[y.materialIndex],E=Math.max(y.start,_.start),P=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let R=E,H=P;R<H;R+=3){const I=R,O=R+1,A=R+2;o=Hl(this,M,e,r,h,g,x,I,O,A),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,_.start),T=Math.min(d.count,_.start+_.count);for(let y=S,M=T;y<M;y+=3){const E=y,P=y+1,R=y+2;o=Hl(this,c,e,r,h,g,x,E,P,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Dy(s,e,t,r,o,l,c,f){let d;if(e.side===ai?d=r.intersectTriangle(c,l,o,!0,f):d=r.intersectTriangle(o,l,c,e.side===Zr,f),d===null)return null;zl.copy(f),zl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(zl);return h<t.near||h>t.far?null:{distance:h,point:zl.clone(),object:s}}function Hl(s,e,t,r,o,l,c,f,d,h){s.getVertexPosition(f,Fl),s.getVertexPosition(d,Ol),s.getVertexPosition(h,kl);const g=Dy(s,e,t,r,Fl,Ol,kl,g0);if(g){const x=new J;Vi.getBarycoord(g0,Fl,Ol,kl,x),o&&(g.uv=Vi.getInterpolatedAttribute(o,f,d,h,x,new Dt)),l&&(g.uv1=Vi.getInterpolatedAttribute(l,f,d,h,x,new Dt)),c&&(g.normal=Vi.getInterpolatedAttribute(c,f,d,h,x,new J),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const m={a:f,b:d,c:h,normal:new J,materialIndex:0};Vi.getNormal(Fl,Ol,kl,m.normal),g.face=m,g.barycoord=x}return g}class tv extends Xn{constructor(e=null,t=1,r=1,o,l,c,f,d,h=xn,g=xn,x,m){super(null,c,f,d,h,g,o,l,x,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pf=new J,Uy=new J,Ny=new wt;class gs{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Pf.subVectors(r,t).cross(Uy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Pf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Ny.getNormalMatrix(e),o=this.coplanarPoint(Pf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new So,Fy=new Dt(.5,.5),Vl=new J;class nv{constructor(e=new gs,t=new gs,r=new gs,o=new gs,l=new gs,c=new gs){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=er,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],h=l[3],g=l[4],x=l[5],m=l[6],_=l[7],S=l[8],T=l[9],y=l[10],M=l[11],E=l[12],P=l[13],R=l[14],H=l[15];if(o[0].setComponents(h-c,_-g,M-S,H-E).normalize(),o[1].setComponents(h+c,_+g,M+S,H+E).normalize(),o[2].setComponents(h+f,_+x,M+T,H+P).normalize(),o[3].setComponents(h-f,_-x,M-T,H-P).normalize(),r)o[4].setComponents(d,m,y,R).normalize(),o[5].setComponents(h-d,_-m,M-y,H-R).normalize();else if(o[4].setComponents(h-d,_-m,M-y,H-R).normalize(),t===er)o[5].setComponents(h+d,_+m,M+y,H+R).normalize();else if(t===dc)o[5].setComponents(d,m,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const t=Fy.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Vl.x=o.normal.x>0?e.max.x:e.min.x,Vl.y=o.normal.y>0?e.max.y:e.min.y,Vl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iv extends Ao{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mc=new J,gc=new J,v0=new on,aa=new rd,Gl=new So,Lf=new J,x0=new J;class rv extends $n{constructor(e=new ln,t=new iv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)mc.fromBufferAttribute(t,o-1),gc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=mc.distanceTo(gc);e.setAttribute("lineDistance",new Nn(r,1))}else yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gl.copy(r.boundingSphere),Gl.applyMatrix4(o),Gl.radius+=l,e.ray.intersectsSphere(Gl)===!1)return;v0.copy(o).invert(),aa.copy(e.ray).applyMatrix4(v0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,g=r.index,m=r.attributes.position;if(g!==null){const _=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let T=_,y=S-1;T<y;T+=h){const M=g.getX(T),E=g.getX(T+1),P=Wl(this,e,aa,d,M,E,T);P&&t.push(P)}if(this.isLineLoop){const T=g.getX(S-1),y=g.getX(_),M=Wl(this,e,aa,d,T,y,S-1);M&&t.push(M)}}else{const _=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let T=_,y=S-1;T<y;T+=h){const M=Wl(this,e,aa,d,T,T+1,T);M&&t.push(M)}if(this.isLineLoop){const T=Wl(this,e,aa,d,S-1,_,S-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Wl(s,e,t,r,o,l,c){const f=s.geometry.attributes.position;if(mc.fromBufferAttribute(f,o),gc.fromBufferAttribute(f,l),t.distanceSqToSegment(mc,gc,Lf,x0)>r)return;Lf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Lf);if(!(h<e.near||h>e.far))return{distance:h,point:x0.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const _0=new J,y0=new J;class Oy extends rv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)_0.fromBufferAttribute(t,o),y0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+_0.distanceTo(y0);e.setAttribute("lineDistance",new Nn(r,1))}else yt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bh extends Ao{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const M0=new on,zh=new rd,Xl=new So,jl=new J;class Hh extends $n{constructor(e=new ln,t=new Bh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xl.copy(r.boundingSphere),Xl.applyMatrix4(o),Xl.radius+=l,e.ray.intersectsSphere(Xl)===!1)return;M0.copy(o).invert(),zh.copy(e.ray).applyMatrix4(M0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=r.index,x=r.attributes.position;if(h!==null){const m=Math.max(0,c.start),_=Math.min(h.count,c.start+c.count);for(let S=m,T=_;S<T;S++){const y=h.getX(S);jl.fromBufferAttribute(x,y),S0(jl,y,d,o,e,t,this)}}else{const m=Math.max(0,c.start),_=Math.min(x.count,c.start+c.count);for(let S=m,T=_;S<T;S++)jl.fromBufferAttribute(x,S),S0(jl,S,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function S0(s,e,t,r,o,l,c){const f=zh.distanceSqToPoint(s);if(f<t){const d=new J;zh.closestPointToPoint(s,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class sv extends Xn{constructor(e=[],t=Ms,r,o,l,c,f,d,h,g){super(e,t,r,o,l,c,f,d,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ky extends Xn{constructor(e,t,r,o,l,c,f,d,h){super(e,t,r,o,l,c,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _o extends Xn{constructor(e,t,r=rr,o,l,c,f=xn,d=xn,h,g=Ar,x=1){if(g!==Ar&&g!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:x};super(m,o,l,c,f,d,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new id(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class By extends _o{constructor(e,t=rr,r=Ms,o,l,c=xn,f=xn,d,h=Ar){const g={width:e,height:e,depth:1},x=[g,g,g,g,g,g];super(e,e,t,r,o,l,c,f,d,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ov extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Aa extends ln{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],g=[],x=[];let m=0,_=0;S("z","y","x",-1,-1,r,t,e,c,l,0),S("z","y","x",1,-1,r,t,-e,c,l,1),S("x","z","y",1,1,e,r,t,o,c,2),S("x","z","y",1,-1,e,r,-t,o,c,3),S("x","y","z",1,-1,e,t,r,o,l,4),S("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Nn(h,3)),this.setAttribute("normal",new Nn(g,3)),this.setAttribute("uv",new Nn(x,2));function S(T,y,M,E,P,R,H,I,O,A,U){const K=R/O,z=H/A,j=R/2,le=H/2,ce=I/2,q=O+1,te=A+1;let W=0,F=0;const k=new J;for(let ee=0;ee<te;ee++){const D=ee*z-le;for(let B=0;B<q;B++){const ve=B*K-j;k[T]=ve*E,k[y]=D*P,k[M]=ce,h.push(k.x,k.y,k.z),k[T]=0,k[y]=0,k[M]=I>0?1:-1,g.push(k.x,k.y,k.z),x.push(B/O),x.push(1-ee/A),W+=1}}for(let ee=0;ee<A;ee++)for(let D=0;D<O;D++){const B=m+D+q*ee,ve=m+D+q*(ee+1),we=m+(D+1)+q*(ee+1),me=m+(D+1)+q*ee;d.push(B,ve,me),d.push(ve,we,me),F+=6}f.addGroup(_,F,U),_+=F,m+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class sd extends ln{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],c=[];f(o),h(r),g(),this.setAttribute("position",new Nn(l,3)),this.setAttribute("normal",new Nn(l.slice(),3)),this.setAttribute("uv",new Nn(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(E){const P=new J,R=new J,H=new J;for(let I=0;I<t.length;I+=3)_(t[I+0],P),_(t[I+1],R),_(t[I+2],H),d(P,R,H,E)}function d(E,P,R,H){const I=H+1,O=[];for(let A=0;A<=I;A++){O[A]=[];const U=E.clone().lerp(R,A/I),K=P.clone().lerp(R,A/I),z=I-A;for(let j=0;j<=z;j++)j===0&&A===I?O[A][j]=U:O[A][j]=U.clone().lerp(K,j/z)}for(let A=0;A<I;A++)for(let U=0;U<2*(I-A)-1;U++){const K=Math.floor(U/2);U%2===0?(m(O[A][K+1]),m(O[A+1][K]),m(O[A][K])):(m(O[A][K+1]),m(O[A+1][K+1]),m(O[A+1][K]))}}function h(E){const P=new J;for(let R=0;R<l.length;R+=3)P.x=l[R+0],P.y=l[R+1],P.z=l[R+2],P.normalize().multiplyScalar(E),l[R+0]=P.x,l[R+1]=P.y,l[R+2]=P.z}function g(){const E=new J;for(let P=0;P<l.length;P+=3){E.x=l[P+0],E.y=l[P+1],E.z=l[P+2];const R=y(E)/2/Math.PI+.5,H=M(E)/Math.PI+.5;c.push(R,1-H)}S(),x()}function x(){for(let E=0;E<c.length;E+=6){const P=c[E+0],R=c[E+2],H=c[E+4],I=Math.max(P,R,H),O=Math.min(P,R,H);I>.9&&O<.1&&(P<.2&&(c[E+0]+=1),R<.2&&(c[E+2]+=1),H<.2&&(c[E+4]+=1))}}function m(E){l.push(E.x,E.y,E.z)}function _(E,P){const R=E*3;P.x=e[R+0],P.y=e[R+1],P.z=e[R+2]}function S(){const E=new J,P=new J,R=new J,H=new J,I=new Dt,O=new Dt,A=new Dt;for(let U=0,K=0;U<l.length;U+=9,K+=6){E.set(l[U+0],l[U+1],l[U+2]),P.set(l[U+3],l[U+4],l[U+5]),R.set(l[U+6],l[U+7],l[U+8]),I.set(c[K+0],c[K+1]),O.set(c[K+2],c[K+3]),A.set(c[K+4],c[K+5]),H.copy(E).add(P).add(R).divideScalar(3);const z=y(H);T(I,K+0,E,z),T(O,K+2,P,z),T(A,K+4,R,z)}}function T(E,P,R,H){H<0&&E.x===1&&(c[P]=E.x-1),R.x===0&&R.z===0&&(c[P]=H/2/Math.PI+.5)}function y(E){return Math.atan2(E.z,-E.x)}function M(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sd(e.vertices,e.indices,e.radius,e.detail)}}class zy{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){yt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,d=l-1,h;for(;f<=d;)if(o=Math.floor(f+(d-f)/2),h=r[o]-c,h<0)f=o+1;else if(h>0)d=o-1;else{d=o;break}if(o=d,r[o]===c)return o/(l-1);const g=r[o],m=r[o+1]-g,_=(c-g)/m;return(o+_)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),d=t||(c.isVector2?new Dt:new J);return d.copy(f).sub(c).normalize(),d}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new J,o=[],l=[],c=[],f=new J,d=new on;for(let _=0;_<=e;_++){const S=_/e;o[_]=this.getTangentAt(S,new J)}l[0]=new J,c[0]=new J;let h=Number.MAX_VALUE;const g=Math.abs(o[0].x),x=Math.abs(o[0].y),m=Math.abs(o[0].z);g<=h&&(h=g,r.set(1,0,0)),x<=h&&(h=x,r.set(0,1,0)),m<=h&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let _=1;_<=e;_++){if(l[_]=l[_-1].clone(),c[_]=c[_-1].clone(),f.crossVectors(o[_-1],o[_]),f.length()>Number.EPSILON){f.normalize();const S=Math.acos(It(o[_-1].dot(o[_]),-1,1));l[_].applyMatrix4(d.makeRotationAxis(f,S))}c[_].crossVectors(o[_],l[_])}if(t===!0){let _=Math.acos(It(l[0].dot(l[e]),-1,1));_/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(_=-_);for(let S=1;S<=e;S++)l[S].applyMatrix4(d.makeRotationAxis(o[S],_*S)),c[S].crossVectors(o[S],l[S])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function od(){let s=0,e=0,t=0,r=0;function o(l,c,f,d){s=l,e=f,t=-3*l+3*c-2*f-d,r=2*l-2*c+f+d}return{initCatmullRom:function(l,c,f,d,h){o(c,f,h*(f-l),h*(d-c))},initNonuniformCatmullRom:function(l,c,f,d,h,g,x){let m=(c-l)/h-(f-l)/(h+g)+(f-c)/g,_=(f-c)/g-(d-c)/(g+x)+(d-f)/x;m*=g,_*=g,o(c,f,m,_)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const A0=new J,E0=new J,If=new od,Df=new od,Uf=new od;class Hy extends zy{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new J){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),d=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:d===0&&f===l-1&&(f=l-2,d=1);let h,g;this.closed||f>0?h=o[(f-1)%l]:(E0.subVectors(o[0],o[1]).add(o[0]),h=E0);const x=o[f%l],m=o[(f+1)%l];if(this.closed||f+2<l?g=o[(f+2)%l]:(A0.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=A0),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let S=Math.pow(h.distanceToSquared(x),_),T=Math.pow(x.distanceToSquared(m),_),y=Math.pow(m.distanceToSquared(g),_);T<1e-4&&(T=1),S<1e-4&&(S=T),y<1e-4&&(y=T),If.initNonuniformCatmullRom(h.x,x.x,m.x,g.x,S,T,y),Df.initNonuniformCatmullRom(h.y,x.y,m.y,g.y,S,T,y),Uf.initNonuniformCatmullRom(h.z,x.z,m.z,g.z,S,T,y)}else this.curveType==="catmullrom"&&(If.initCatmullRom(h.x,x.x,m.x,g.x,this.tension),Df.initCatmullRom(h.y,x.y,m.y,g.y,this.tension),Uf.initCatmullRom(h.z,x.z,m.z,g.z,this.tension));return r.set(If.calc(d),Df.calc(d),Uf.calc(d)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new J().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class ad extends sd{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ad(e.radius,e.detail)}}class Mc extends ln{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,g=d+1,x=e/f,m=t/d,_=[],S=[],T=[],y=[];for(let M=0;M<g;M++){const E=M*m-c;for(let P=0;P<h;P++){const R=P*x-l;S.push(R,-E,0),T.push(0,0,1),y.push(P/f),y.push(1-M/d)}}for(let M=0;M<d;M++)for(let E=0;E<f;E++){const P=E+h*M,R=E+h*(M+1),H=E+1+h*(M+1),I=E+1+h*M;_.push(P,R,I),_.push(R,H,I)}this.setIndex(_),this.setAttribute("position",new Nn(S,3)),this.setAttribute("normal",new Nn(T,3)),this.setAttribute("uv",new Nn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.width,e.height,e.widthSegments,e.heightSegments)}}class vc extends ln{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(c+f,Math.PI);let h=0;const g=[],x=new J,m=new J,_=[],S=[],T=[],y=[];for(let M=0;M<=r;M++){const E=[],P=M/r;let R=0;M===0&&c===0?R=.5/t:M===r&&d===Math.PI&&(R=-.5/t);for(let H=0;H<=t;H++){const I=H/t;x.x=-e*Math.cos(o+I*l)*Math.sin(c+P*f),x.y=e*Math.cos(c+P*f),x.z=e*Math.sin(o+I*l)*Math.sin(c+P*f),S.push(x.x,x.y,x.z),m.copy(x).normalize(),T.push(m.x,m.y,m.z),y.push(I+R,1-P),E.push(h++)}g.push(E)}for(let M=0;M<r;M++)for(let E=0;E<t;E++){const P=g[M][E+1],R=g[M][E],H=g[M+1][E],I=g[M+1][E+1];(M!==0||c>0)&&_.push(P,R,I),(M!==r-1||d<Math.PI)&&_.push(R,H,I)}this.setIndex(_),this.setAttribute("position",new Nn(S,3)),this.setAttribute("normal",new Nn(T,3)),this.setAttribute("uv",new Nn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function yo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(w0(o))o.isRenderTargetTexture?(yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(w0(o[0])){const l=[];for(let c=0,f=o.length;c<f;c++)l[c]=o[c].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Zn(s){const e={};for(let t=0;t<s.length;t++){const r=yo(s[t]);for(const o in r)e[o]=r[o]}return e}function w0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Vy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function av(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const Gy={clone:yo,merge:Zn};var Wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wy,this.fragmentShader=Xy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=Vy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class jy extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ky extends Ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=V_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qy extends Ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kl=new J,ql=new nr,Ji=new J;class lv extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=er,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kl,ql,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kl,ql,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Kl,ql,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kl,ql,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qr=new J,T0=new Dt,b0=new Dt;class oi extends lv{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,t){return this.getViewBounds(e,T0,b0),t.subVectors(b0,T0)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(va*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ld extends lv{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const oo=-90,ao=1;class Yy extends $n{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new oi(oo,ao,e,t);o.layers=this.layers,this.add(o);const l=new oi(oo,ao,e,t);l.layers=this.layers,this.add(l);const c=new oi(oo,ao,e,t);c.layers=this.layers,this.add(c);const f=new oi(oo,ao,e,t);f.layers=this.layers,this.add(f);const d=new oi(oo,ao,e,t);d.layers=this.layers,this.add(d);const h=new oi(oo,ao,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,d]=t;for(const h of t)this.remove(h);if(e===er)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===dc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,g]=this.children,x=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(x,m,_),e.xr.enabled=S,r.texture.needsPMREMUpdate=!0}}class Qy extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const vd=class vd{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};vd.prototype.isMatrix2=!0;let C0=vd;function R0(s,e,t,r){const o=Jy(r);switch(t){case Xg:return s*e;case Kg:return s*e/o.components*o.byteLength;case Jh:return s*e/o.components*o.byteLength;case Ss:return s*e*2/o.components*o.byteLength;case Zh:return s*e*2/o.components*o.byteLength;case jg:return s*e*3/o.components*o.byteLength;case bi:return s*e*4/o.components*o.byteLength;case $h:return s*e*4/o.components*o.byteLength;case tc:case nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ic:case rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ch:case fh:return Math.max(s,16)*Math.max(e,8)/4;case lh:case uh:return Math.max(s,8)*Math.max(e,8)/2;case hh:case dh:case mh:case gh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ph:case cc:case vh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case yh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case wh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Th:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ih:case Dh:case Uh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Nh:case Fh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case uc:case Oh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jy(s){switch(s){case Ti:case Hg:return{byteLength:1,components:1};case _a:case Vg:case Sr:return{byteLength:2,components:1};case Yh:case Qh:return{byteLength:2,components:4};case rr:case qh:case Gi:return{byteLength:4,components:1};case Gg:case Wg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kh}}));typeof window<"u"&&(window.__THREE__?yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cv(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Zy(s){const e=new WeakMap;function t(f,d){const h=f.array,g=f.usage,x=h.byteLength,m=s.createBuffer();s.bindBuffer(d,m),s.bufferData(d,h,g),f.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,d,h){const g=d.array,x=d.updateRanges;if(s.bindBuffer(h,f),x.length===0)s.bufferSubData(h,0,g);else{x.sort((_,S)=>_.start-S.start);let m=0;for(let _=1;_<x.length;_++){const S=x[m],T=x[_];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++m,x[m]=T)}x.length=m+1;for(let _=0,S=x.length;_<S;_++){const T=x[_];s.bufferSubData(h,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:c}}var $y=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eM=`#ifdef USE_ALPHAHASH
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
#endif`,tM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sM=`#ifdef USE_AOMAP
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
#endif`,oM=`#ifdef USE_AOMAP
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
#endif`,lM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fM=`float G_BlinnPhong_Implicit( ) {
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
#endif`,dM=`#ifdef USE_BUMPMAP
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
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,MM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
} // validated`,AM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EM=`vec3 transformedNormal = objectNormal;
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
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RM="gl_FragColor = linearToOutputTexel( gl_FragColor );",PM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LM=`#ifdef USE_ENVMAP
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
#endif`,IM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
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
#endif`,UM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BM=`#ifdef USE_FOG
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
}`,HM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,XM=`#ifdef USE_ENVMAP
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
#endif`,jM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QM=`PhysicalMaterial material;
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
#endif`,JM=`uniform sampler2D dfgLUT;
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
#endif`,$M=`#if defined( RE_IndirectDiffuse )
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
#endif`,eS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,nS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cS=`#if defined( USE_POINTS_UV )
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
#endif`,uS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mS=`#ifdef USE_MORPHTARGETS
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
#endif`,gS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SS=`#ifdef USE_NORMALMAP
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
#endif`,AS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ES=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,US=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kS=`float getShadowMask() {
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
}`,BS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zS=`#ifdef USE_SKINNING
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
#endif`,HS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VS=`#ifdef USE_SKINNING
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
#endif`,GS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KS=`#ifdef USE_TRANSMISSION
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
#endif`,qS=`#ifdef USE_TRANSMISSION
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
#endif`,YS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $S=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e1=`uniform sampler2D t2D;
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
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`#include <common>
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
}`,o1=`#if DEPTH_PACKING == 3200
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
}`,a1=`#define DISTANCE
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
}`,l1=`#define DISTANCE
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
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`uniform float scale;
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
}`,h1=`uniform vec3 diffuse;
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
}`,d1=`#include <common>
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
}`,p1=`uniform vec3 diffuse;
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
}`,m1=`#define LAMBERT
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
}`,g1=`#define LAMBERT
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
}`,v1=`#define MATCAP
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
}`,x1=`#define MATCAP
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
}`,_1=`#define NORMAL
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
}`,y1=`#define NORMAL
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
}`,M1=`#define PHONG
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
}`,S1=`#define PHONG
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
}`,A1=`#define STANDARD
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
}`,E1=`#define STANDARD
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
}`,w1=`#define TOON
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
}`,T1=`#define TOON
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
}`,b1=`uniform float size;
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
}`,C1=`uniform vec3 diffuse;
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
}`,R1=`#include <common>
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
}`,P1=`uniform vec3 color;
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
}`,L1=`uniform float rotation;
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
}`,I1=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:$y,alphahash_pars_fragment:eM,alphamap_fragment:tM,alphamap_pars_fragment:nM,alphatest_fragment:iM,alphatest_pars_fragment:rM,aomap_fragment:sM,aomap_pars_fragment:oM,batching_pars_vertex:aM,batching_vertex:lM,begin_vertex:cM,beginnormal_vertex:uM,bsdfs:fM,iridescence_fragment:hM,bumpmap_pars_fragment:dM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:vM,color_fragment:xM,color_pars_fragment:_M,color_pars_vertex:yM,color_vertex:MM,common:SM,cube_uv_reflection_fragment:AM,defaultnormal_vertex:EM,displacementmap_pars_vertex:wM,displacementmap_vertex:TM,emissivemap_fragment:bM,emissivemap_pars_fragment:CM,colorspace_fragment:RM,colorspace_pars_fragment:PM,envmap_fragment:LM,envmap_common_pars_fragment:IM,envmap_pars_fragment:DM,envmap_pars_vertex:UM,envmap_physical_pars_fragment:XM,envmap_vertex:NM,fog_vertex:FM,fog_pars_vertex:OM,fog_fragment:kM,fog_pars_fragment:BM,gradientmap_pars_fragment:zM,lightmap_pars_fragment:HM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:GM,lights_pars_begin:WM,lights_toon_fragment:jM,lights_toon_pars_fragment:KM,lights_phong_fragment:qM,lights_phong_pars_fragment:YM,lights_physical_fragment:QM,lights_physical_pars_fragment:JM,lights_fragment_begin:ZM,lights_fragment_maps:$M,lights_fragment_end:eS,lightprobes_pars_fragment:tS,logdepthbuf_fragment:nS,logdepthbuf_pars_fragment:iS,logdepthbuf_pars_vertex:rS,logdepthbuf_vertex:sS,map_fragment:oS,map_pars_fragment:aS,map_particle_fragment:lS,map_particle_pars_fragment:cS,metalnessmap_fragment:uS,metalnessmap_pars_fragment:fS,morphinstance_vertex:hS,morphcolor_vertex:dS,morphnormal_vertex:pS,morphtarget_pars_vertex:mS,morphtarget_vertex:gS,normal_fragment_begin:vS,normal_fragment_maps:xS,normal_pars_fragment:_S,normal_pars_vertex:yS,normal_vertex:MS,normalmap_pars_fragment:SS,clearcoat_normal_fragment_begin:AS,clearcoat_normal_fragment_maps:ES,clearcoat_pars_fragment:wS,iridescence_pars_fragment:TS,opaque_fragment:bS,packing:CS,premultiplied_alpha_fragment:RS,project_vertex:PS,dithering_fragment:LS,dithering_pars_fragment:IS,roughnessmap_fragment:DS,roughnessmap_pars_fragment:US,shadowmap_pars_fragment:NS,shadowmap_pars_vertex:FS,shadowmap_vertex:OS,shadowmask_pars_fragment:kS,skinbase_vertex:BS,skinning_pars_vertex:zS,skinning_vertex:HS,skinnormal_vertex:VS,specularmap_fragment:GS,specularmap_pars_fragment:WS,tonemapping_fragment:XS,tonemapping_pars_fragment:jS,transmission_fragment:KS,transmission_pars_fragment:qS,uv_pars_fragment:YS,uv_pars_vertex:QS,uv_vertex:JS,worldpos_vertex:ZS,background_vert:$S,background_frag:e1,backgroundCube_vert:t1,backgroundCube_frag:n1,cube_vert:i1,cube_frag:r1,depth_vert:s1,depth_frag:o1,distance_vert:a1,distance_frag:l1,equirect_vert:c1,equirect_frag:u1,linedashed_vert:f1,linedashed_frag:h1,meshbasic_vert:d1,meshbasic_frag:p1,meshlambert_vert:m1,meshlambert_frag:g1,meshmatcap_vert:v1,meshmatcap_frag:x1,meshnormal_vert:_1,meshnormal_frag:y1,meshphong_vert:M1,meshphong_frag:S1,meshphysical_vert:A1,meshphysical_frag:E1,meshtoon_vert:w1,meshtoon_frag:T1,points_vert:b1,points_frag:C1,shadow_vert:R1,shadow_frag:P1,sprite_vert:L1,sprite_frag:I1},qe={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},$i={basic:{uniforms:Zn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Zn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Zn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Zn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Zn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Zn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Zn([qe.points,qe.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Zn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Zn([qe.common,qe.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Zn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Zn([qe.sprite,qe.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:Zn([qe.common,qe.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:Zn([qe.lights,qe.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};$i.physical={uniforms:Zn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const Yl={r:0,b:0,g:0},D1=new on,uv=new wt;uv.set(-1,0,0,0,1,0,0,0,1);function U1(s,e,t,r,o,l){const c=new zt(0);let f=o===!0?0:1,d,h,g=null,x=0,m=null;function _(E){let P=E.isScene===!0?E.background:null;if(P&&P.isTexture){const R=E.backgroundBlurriness>0;P=e.get(P,R)}return P}function S(E){let P=!1;const R=_(E);R===null?y(c,f):R&&R.isColor&&(y(R,1),P=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?t.buffers.color.setClear(0,0,0,1,l):H==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function T(E,P){const R=_(P);R&&(R.isCubeTexture||R.mapping===_c)?(h===void 0&&(h=new Fn(new Aa(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:yo($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(H,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(D1.makeRotationFromEuler(P.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(uv),h.material.toneMapped=Ut.getTransfer(R.colorSpace)!==jt,(g!==R||x!==R.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,g=R,x=R.version,m=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new Fn(new Mc(2,2),new gi({name:"BackgroundMaterial",uniforms:yo($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.toneMapped=Ut.getTransfer(R.colorSpace)!==jt,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||x!==R.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,g=R,x=R.version,m=s.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null))}function y(E,P){E.getRGB(Yl,av(s)),t.buffers.color.setClear(Yl.r,Yl.g,Yl.b,P,l)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(E,P=1){c.set(E),f=P,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(E){f=E,y(c,f)},render:S,addToRenderList:T,dispose:M}}function N1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=m(null);let l=o,c=!1;function f(z,j,le,ce,q){let te=!1;const W=x(z,ce,le,j);l!==W&&(l=W,h(l.object)),te=_(z,ce,le,q),te&&S(z,ce,le,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(te||c)&&(c=!1,R(z,j,le,ce),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return s.createVertexArray()}function h(z){return s.bindVertexArray(z)}function g(z){return s.deleteVertexArray(z)}function x(z,j,le,ce){const q=ce.wireframe===!0;let te=r[j.id];te===void 0&&(te={},r[j.id]=te);const W=z.isInstancedMesh===!0?z.id:0;let F=te[W];F===void 0&&(F={},te[W]=F);let k=F[le.id];k===void 0&&(k={},F[le.id]=k);let ee=k[q];return ee===void 0&&(ee=m(d()),k[q]=ee),ee}function m(z){const j=[],le=[],ce=[];for(let q=0;q<t;q++)j[q]=0,le[q]=0,ce[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:le,attributeDivisors:ce,object:z,attributes:{},index:null}}function _(z,j,le,ce){const q=l.attributes,te=j.attributes;let W=0;const F=le.getAttributes();for(const k in F)if(F[k].location>=0){const D=q[k];let B=te[k];if(B===void 0&&(k==="instanceMatrix"&&z.instanceMatrix&&(B=z.instanceMatrix),k==="instanceColor"&&z.instanceColor&&(B=z.instanceColor)),D===void 0||D.attribute!==B||B&&D.data!==B.data)return!0;W++}return l.attributesNum!==W||l.index!==ce}function S(z,j,le,ce){const q={},te=j.attributes;let W=0;const F=le.getAttributes();for(const k in F)if(F[k].location>=0){let D=te[k];D===void 0&&(k==="instanceMatrix"&&z.instanceMatrix&&(D=z.instanceMatrix),k==="instanceColor"&&z.instanceColor&&(D=z.instanceColor));const B={};B.attribute=D,D&&D.data&&(B.data=D.data),q[k]=B,W++}l.attributes=q,l.attributesNum=W,l.index=ce}function T(){const z=l.newAttributes;for(let j=0,le=z.length;j<le;j++)z[j]=0}function y(z){M(z,0)}function M(z,j){const le=l.newAttributes,ce=l.enabledAttributes,q=l.attributeDivisors;le[z]=1,ce[z]===0&&(s.enableVertexAttribArray(z),ce[z]=1),q[z]!==j&&(s.vertexAttribDivisor(z,j),q[z]=j)}function E(){const z=l.newAttributes,j=l.enabledAttributes;for(let le=0,ce=j.length;le<ce;le++)j[le]!==z[le]&&(s.disableVertexAttribArray(le),j[le]=0)}function P(z,j,le,ce,q,te,W){W===!0?s.vertexAttribIPointer(z,j,le,q,te):s.vertexAttribPointer(z,j,le,ce,q,te)}function R(z,j,le,ce){T();const q=ce.attributes,te=le.getAttributes(),W=j.defaultAttributeValues;for(const F in te){const k=te[F];if(k.location>=0){let ee=q[F];if(ee===void 0&&(F==="instanceMatrix"&&z.instanceMatrix&&(ee=z.instanceMatrix),F==="instanceColor"&&z.instanceColor&&(ee=z.instanceColor)),ee!==void 0){const D=ee.normalized,B=ee.itemSize,ve=e.get(ee);if(ve===void 0)continue;const we=ve.buffer,me=ve.type,X=ve.bytesPerElement,ie=me===s.INT||me===s.UNSIGNED_INT||ee.gpuType===qh;if(ee.isInterleavedBufferAttribute){const se=ee.data,be=se.stride,Ie=ee.offset;if(se.isInstancedInterleavedBuffer){for(let ye=0;ye<k.locationSize;ye++)M(k.location+ye,se.meshPerAttribute);z.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ye=0;ye<k.locationSize;ye++)y(k.location+ye);s.bindBuffer(s.ARRAY_BUFFER,we);for(let ye=0;ye<k.locationSize;ye++)P(k.location+ye,B/k.locationSize,me,D,be*X,(Ie+B/k.locationSize*ye)*X,ie)}else{if(ee.isInstancedBufferAttribute){for(let se=0;se<k.locationSize;se++)M(k.location+se,ee.meshPerAttribute);z.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let se=0;se<k.locationSize;se++)y(k.location+se);s.bindBuffer(s.ARRAY_BUFFER,we);for(let se=0;se<k.locationSize;se++)P(k.location+se,B/k.locationSize,me,D,B*X,B/k.locationSize*se*X,ie)}}else if(W!==void 0){const D=W[F];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(k.location,D);break;case 3:s.vertexAttrib3fv(k.location,D);break;case 4:s.vertexAttrib4fv(k.location,D);break;default:s.vertexAttrib1fv(k.location,D)}}}}E()}function H(){U();for(const z in r){const j=r[z];for(const le in j){const ce=j[le];for(const q in ce){const te=ce[q];for(const W in te)g(te[W].object),delete te[W];delete ce[q]}}delete r[z]}}function I(z){if(r[z.id]===void 0)return;const j=r[z.id];for(const le in j){const ce=j[le];for(const q in ce){const te=ce[q];for(const W in te)g(te[W].object),delete te[W];delete ce[q]}}delete r[z.id]}function O(z){for(const j in r){const le=r[j];for(const ce in le){const q=le[ce];if(q[z.id]===void 0)continue;const te=q[z.id];for(const W in te)g(te[W].object),delete te[W];delete q[z.id]}}}function A(z){for(const j in r){const le=r[j],ce=z.isInstancedMesh===!0?z.id:0,q=le[ce];if(q!==void 0){for(const te in q){const W=q[te];for(const F in W)g(W[F].object),delete W[F];delete q[te]}delete le[ce],Object.keys(le).length===0&&delete r[j]}}}function U(){K(),c=!0,l!==o&&(l=o,h(l.object))}function K(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:U,resetDefaultState:K,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfObject:A,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:y,disableUnusedAttributes:E}}function F1(s,e,t){let r;function o(d){r=d}function l(d,h){s.drawArrays(r,d,h),t.update(h,r,1)}function c(d,h,g){g!==0&&(s.drawArraysInstanced(r,d,h,g),t.update(h,r,g))}function f(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,g);let m=0;for(let _=0;_<g;_++)m+=h[_];t.update(m,r,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function O1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==bi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const A=O===Sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ti&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Gi&&!A)}function d(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=d(h);g!==h&&(yt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const x=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:E,maxVaryings:P,maxFragmentUniforms:R,maxSamples:H,samples:I}}function k1(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new gs,f=new wt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,m){const _=x.length!==0||m||r!==0||o;return o=m,r=x.length,_},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,m){t=g(x,m,0)},this.setState=function(x,m,_){const S=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,M=s.get(x);if(!o||S===null||S.length===0||l&&!y)l?g(null):h();else{const E=l?0:r,P=E*4;let R=M.clippingState||null;d.value=R,R=g(S,m,P,_);for(let H=0;H!==P;++H)R[H]=t[H];M.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=E}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,m,_,S){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=d.value,S!==!0||y===null){const M=_+T*4,E=m.matrixWorldInverse;f.getNormalMatrix(E),(y===null||y.length<M)&&(y=new Float32Array(M));for(let P=0,R=_;P!==T;++P,R+=4)c.copy(x[P]).applyMatrix4(E,f),c.normal.toArray(y,R),y[R+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}const Jr=4,P0=[.125,.215,.35,.446,.526,.582],xs=20,B1=256,la=new ld,L0=new zt;let Nf=null,Ff=0,Of=0,kf=!1;const z1=new J;class I0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=z1}=l;Nf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nf,Ff,Of),this._renderer.xr.enabled=kf,e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Sr,format:bi,colorSpace:fc,depthBuffer:!1},o=D0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=H1(l)),this._blurMaterial=G1(l,e,t),this._ggxMaterial=V1(l,e,t)}return o}_compileMaterial(e){const t=new Fn(new ln,e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,r,o,l){const d=new oi(90,1,t,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,m=x.autoClear,_=x.toneMapping;x.getClearColor(L0),x.toneMapping=tr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fn(new Aa,new ev({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let M=!1;const E=e.background;E?E.isColor&&(y.color.copy(E),e.background=null,M=!0):(y.color.copy(L0),M=!0);for(let P=0;P<6;P++){const R=P%3;R===0?(d.up.set(0,h[P],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+g[P],l.y,l.z)):R===1?(d.up.set(0,0,h[P]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+g[P],l.z)):(d.up.set(0,h[P],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+g[P]));const H=this._cubeSize;lo(o,R*H,P>2?H:0,H,H),x.setRenderTarget(o),M&&x.render(T,d),x.render(e,d)}x.toneMapping=_,x.autoClear=m,e.background=E}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ms||e.mapping===xo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=N0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U0());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;lo(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,la)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),x=Math.sqrt(h*h-g*g),m=0+h*1.25,_=x*m,{_lodMax:S}=this,T=this._sizeLods[r],y=3*T*(r>S-Jr?r-S+Jr:0),M=4*(this._cubeSize-T);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=S-t,lo(l,y,M,3*T,2*T),o.setRenderTarget(l),o.render(f,la),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=S-r,lo(e,y,M,3*T,2*T),o.setRenderTarget(e),o.render(f,la)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Bt("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[o];x.material=h;const m=h.uniforms,_=this._sizeLods[r]-1,S=isFinite(l)?Math.PI/(2*_):2*Math.PI/(2*xs-1),T=l/S,y=isFinite(l)?1+Math.floor(g*T):xs;y>xs&&yt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${xs}`);const M=[];let E=0;for(let O=0;O<xs;++O){const A=O/T,U=Math.exp(-A*A/2);M.push(U),O===0?E+=U:O<y&&(E+=2*U)}for(let O=0;O<M.length;O++)M[O]=M[O]/E;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=M,m.latitudinal.value=c==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:P}=this;m.dTheta.value=S,m.mipInt.value=P-r;const R=this._sizeLods[o],H=3*R*(o>P-Jr?o-P+Jr:0),I=4*(this._cubeSize-R);lo(t,H,I,3*R,2*R),d.setRenderTarget(t),d.render(x,la)}}function H1(s){const e=[],t=[],r=[];let o=s;const l=s-Jr+1+P0.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let d=1/f;c>s-Jr?d=P0[c-s+Jr-1]:c===0&&(d=0),t.push(d);const h=1/(f-2),g=-h,x=1+h,m=[g,g,x,g,x,x,g,g,x,x,g,x],_=6,S=6,T=3,y=2,M=1,E=new Float32Array(T*S*_),P=new Float32Array(y*S*_),R=new Float32Array(M*S*_);for(let I=0;I<_;I++){const O=I%3*2/3-1,A=I>2?0:-1,U=[O,A,0,O+2/3,A,0,O+2/3,A+1,0,O,A,0,O+2/3,A+1,0,O,A+1,0];E.set(U,T*S*I),P.set(m,y*S*I);const K=[I,I,I,I,I,I];R.set(K,M*S*I)}const H=new ln;H.setAttribute("position",new kt(E,T)),H.setAttribute("uv",new kt(P,y)),H.setAttribute("faceIndex",new kt(R,M)),r.push(new Fn(H,null)),o>Jr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function D0(s,e,t){const r=new ir(s,e,t);return r.texture.mapping=_c,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function lo(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function V1(s,e,t){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:B1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function G1(s,e,t){const r=new Float32Array(xs),o=new J(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function U0(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function N0(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Sc(){return`

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
	`}class fv extends ir{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new sv(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Aa(5,5,5),l=new gi({name:"CubemapFromEquirect",uniforms:yo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ai,blending:yr});l.uniforms.tEquirect.value=t;const c=new Fn(o,l),f=t.minFilter;return t.minFilter===_s&&(t.minFilter=Rn),new Yy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function W1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(m,_=!1){return m==null?null:_?c(m):l(m)}function l(m){if(m&&m.isTexture){const _=m.mapping;if(_===sf||_===of)if(e.has(m)){const S=e.get(m).texture;return f(S,m.mapping)}else{const S=m.image;if(S&&S.height>0){const T=new fv(S.height);return T.fromEquirectangularTexture(s,m),e.set(m,T),m.addEventListener("dispose",h),f(T.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const _=m.mapping,S=_===sf||_===of,T=_===Ms||_===xo;if(S||T){let y=t.get(m);const M=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==M)return r===null&&(r=new I0(s)),y=S?r.fromEquirectangular(m,y):r.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const E=m.image;return S&&E&&E.height>0||T&&E&&d(E)?(r===null&&(r=new I0(s)),y=S?r.fromEquirectangular(m):r.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",g),y.texture):null}}}return m}function f(m,_){return _===sf?m.mapping=Ms:_===of&&(m.mapping=xo),m}function d(m){let _=0;const S=6;for(let T=0;T<S;T++)m[T]!==void 0&&_++;return _===S}function h(m){const _=m.target;_.removeEventListener("dispose",h);const S=e.get(_);S!==void 0&&(e.delete(_),S.dispose())}function g(m){const _=m.target;_.removeEventListener("dispose",g);const S=t.get(_);S!==void 0&&(t.delete(_),S.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function X1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&kh("WebGLRenderer: "+r+" extension not supported."),o}}}function j1(s,e,t,r){const o={},l=new WeakMap;function c(x){const m=x.target;m.index!==null&&e.remove(m.index);for(const S in m.attributes)e.remove(m.attributes[S]);m.removeEventListener("dispose",c),delete o[m.id];const _=l.get(m);_&&(e.remove(_),l.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(x,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function d(x){const m=x.attributes;for(const _ in m)e.update(m[_],s.ARRAY_BUFFER)}function h(x){const m=[],_=x.index,S=x.attributes.position;let T=0;if(S===void 0)return;if(_!==null){const E=_.array;T=_.version;for(let P=0,R=E.length;P<R;P+=3){const H=E[P+0],I=E[P+1],O=E[P+2];m.push(H,I,I,O,O,H)}}else{const E=S.array;T=S.version;for(let P=0,R=E.length/3-1;P<R;P+=3){const H=P+0,I=P+1,O=P+2;m.push(H,I,I,O,O,H)}}const y=new(S.count>=65535?$g:Zg)(m,1);y.version=T;const M=l.get(x);M&&e.remove(M),l.set(x,y)}function g(x){const m=l.get(x);if(m){const _=x.index;_!==null&&m.version<_.version&&h(x)}else h(x);return l.get(x)}return{get:f,update:d,getWireframeAttribute:g}}function K1(s,e,t){let r;function o(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function d(x,m){s.drawElements(r,m,l,x*c),t.update(m,r,1)}function h(x,m,_){_!==0&&(s.drawElementsInstanced(r,m,l,x*c,_),t.update(m,r,_))}function g(x,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,l,x,0,_);let T=0;for(let y=0;y<_;y++)T+=m[y];t.update(T,r,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=g}function q1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Bt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Y1(s,e,t){const r=new WeakMap,o=new nn;function l(c,f,d){const h=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=g!==void 0?g.length:0;let m=r.get(f);if(m===void 0||m.count!==x){let K=function(){A.dispose(),r.delete(f),f.removeEventListener("dispose",K)};var _=K;m!==void 0&&m.texture.dispose();const S=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],E=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let R=0;S===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let H=f.attributes.position.count*R,I=1;H>e.maxTextureSize&&(I=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const O=new Float32Array(H*I*4*x),A=new Yg(O,H,I,x);A.type=Gi,A.needsUpdate=!0;const U=R*4;for(let z=0;z<x;z++){const j=M[z],le=E[z],ce=P[z],q=H*I*4*z;for(let te=0;te<j.count;te++){const W=te*U;S===!0&&(o.fromBufferAttribute(j,te),O[q+W+0]=o.x,O[q+W+1]=o.y,O[q+W+2]=o.z,O[q+W+3]=0),T===!0&&(o.fromBufferAttribute(le,te),O[q+W+4]=o.x,O[q+W+5]=o.y,O[q+W+6]=o.z,O[q+W+7]=0),y===!0&&(o.fromBufferAttribute(ce,te),O[q+W+8]=o.x,O[q+W+9]=o.y,O[q+W+10]=o.z,O[q+W+11]=ce.itemSize===4?o.w:1)}}m={count:x,texture:A,size:new Dt(H,I)},r.set(f,m),f.addEventListener("dispose",K)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let S=0;for(let y=0;y<h.length;y++)S+=h[y];const T=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(s,"morphTargetBaseInfluence",T),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:l}}function Q1(s,e,t,r,o){let l=new WeakMap;function c(h){const g=o.render.frame,x=h.geometry,m=e.get(h,x);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==g&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,g))),h.isSkinnedMesh){const _=h.skeleton;l.get(_)!==g&&(_.update(),l.set(_,g))}return m}function f(){l=new WeakMap}function d(h){const g=h.target;g.removeEventListener("dispose",d),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:f}}const J1={[Dg]:"LINEAR_TONE_MAPPING",[Ug]:"REINHARD_TONE_MAPPING",[Ng]:"CINEON_TONE_MAPPING",[Fg]:"ACES_FILMIC_TONE_MAPPING",[kg]:"AGX_TONE_MAPPING",[Bg]:"NEUTRAL_TONE_MAPPING",[Og]:"CUSTOM_TONE_MAPPING"};function Z1(s,e,t,r,o){const l=new ir(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new _o(e,t):void 0}),c=new ir(e,t,{type:Sr,depthBuffer:!1,stencilBuffer:!1}),f=new ln;f.setAttribute("position",new Nn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Nn([0,2,0,0,2,0],2));const d=new jy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Fn(f,d),g=new ld(-1,1,1,-1,0,1);let x=null,m=null,_=!1,S,T=null,y=[],M=!1;this.setSize=function(E,P){l.setSize(E,P),c.setSize(E,P);for(let R=0;R<y.length;R++){const H=y[R];H.setSize&&H.setSize(E,P)}},this.setEffects=function(E){y=E,M=y.length>0&&y[0].isRenderPass===!0;const P=l.width,R=l.height;for(let H=0;H<y.length;H++){const I=y[H];I.setSize&&I.setSize(P,R)}},this.begin=function(E,P){if(_||E.toneMapping===tr&&y.length===0)return!1;if(T=P,P!==null){const R=P.width,H=P.height;(l.width!==R||l.height!==H)&&this.setSize(R,H)}return M===!1&&E.setRenderTarget(l),S=E.toneMapping,E.toneMapping=tr,!0},this.hasRenderPass=function(){return M},this.end=function(E,P){E.toneMapping=S,_=!0;let R=l,H=c;for(let I=0;I<y.length;I++){const O=y[I];if(O.enabled!==!1&&(O.render(E,H,R,P),O.needsSwap!==!1)){const A=R;R=H,H=A}}if(x!==E.outputColorSpace||m!==E.toneMapping){x=E.outputColorSpace,m=E.toneMapping,d.defines={},Ut.getTransfer(x)===jt&&(d.defines.SRGB_TRANSFER="");const I=J1[m];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=R.texture,E.setRenderTarget(T),E.render(h,g),T=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),d.dispose()}}const hv=new Xn,Vh=new _o(1,1),dv=new Yg,pv=new My,mv=new sv,F0=[],O0=[],k0=new Float32Array(16),B0=new Float32Array(9),z0=new Float32Array(4);function Eo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=F0[o];if(l===void 0&&(l=new Float32Array(o),F0[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function _n(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function yn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Ac(s,e){let t=O0[e];t===void 0&&(t=new Int32Array(e),O0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function $1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function eA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;s.uniform2fv(this.addr,e),yn(t,e)}}function tA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;s.uniform3fv(this.addr,e),yn(t,e)}}function nA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;s.uniform4fv(this.addr,e),yn(t,e)}}function iA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(_n(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,r))return;z0.set(r),s.uniformMatrix2fv(this.addr,!1,z0),yn(t,r)}}function rA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(_n(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,r))return;B0.set(r),s.uniformMatrix3fv(this.addr,!1,B0),yn(t,r)}}function sA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(_n(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,r))return;k0.set(r),s.uniformMatrix4fv(this.addr,!1,k0),yn(t,r)}}function oA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function aA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;s.uniform2iv(this.addr,e),yn(t,e)}}function lA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;s.uniform3iv(this.addr,e),yn(t,e)}}function cA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;s.uniform4iv(this.addr,e),yn(t,e)}}function uA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function fA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;s.uniform2uiv(this.addr,e),yn(t,e)}}function hA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;s.uniform3uiv(this.addr,e),yn(t,e)}}function dA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;s.uniform4uiv(this.addr,e),yn(t,e)}}function pA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Vh.compareFunction=t.isReversedDepthBuffer()?td:ed,l=Vh):l=hv,t.setTexture2D(e||l,o)}function mA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||pv,o)}function gA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||mv,o)}function vA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||dv,o)}function xA(s){switch(s){case 5126:return $1;case 35664:return eA;case 35665:return tA;case 35666:return nA;case 35674:return iA;case 35675:return rA;case 35676:return sA;case 5124:case 35670:return oA;case 35667:case 35671:return aA;case 35668:case 35672:return lA;case 35669:case 35673:return cA;case 5125:return uA;case 36294:return fA;case 36295:return hA;case 36296:return dA;case 35678:case 36198:case 36298:case 36306:case 35682:return pA;case 35679:case 36299:case 36307:return mA;case 35680:case 36300:case 36308:case 36293:return gA;case 36289:case 36303:case 36311:case 36292:return vA}}function _A(s,e){s.uniform1fv(this.addr,e)}function yA(s,e){const t=Eo(e,this.size,2);s.uniform2fv(this.addr,t)}function MA(s,e){const t=Eo(e,this.size,3);s.uniform3fv(this.addr,t)}function SA(s,e){const t=Eo(e,this.size,4);s.uniform4fv(this.addr,t)}function AA(s,e){const t=Eo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function EA(s,e){const t=Eo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function wA(s,e){const t=Eo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function TA(s,e){s.uniform1iv(this.addr,e)}function bA(s,e){s.uniform2iv(this.addr,e)}function CA(s,e){s.uniform3iv(this.addr,e)}function RA(s,e){s.uniform4iv(this.addr,e)}function PA(s,e){s.uniform1uiv(this.addr,e)}function LA(s,e){s.uniform2uiv(this.addr,e)}function IA(s,e){s.uniform3uiv(this.addr,e)}function DA(s,e){s.uniform4uiv(this.addr,e)}function UA(s,e,t){const r=this.cache,o=e.length,l=Ac(t,o);_n(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Vh:c=hv;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function NA(s,e,t){const r=this.cache,o=e.length,l=Ac(t,o);_n(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||pv,l[c])}function FA(s,e,t){const r=this.cache,o=e.length,l=Ac(t,o);_n(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||mv,l[c])}function OA(s,e,t){const r=this.cache,o=e.length,l=Ac(t,o);_n(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||dv,l[c])}function kA(s){switch(s){case 5126:return _A;case 35664:return yA;case 35665:return MA;case 35666:return SA;case 35674:return AA;case 35675:return EA;case 35676:return wA;case 5124:case 35670:return TA;case 35667:case 35671:return bA;case 35668:case 35672:return CA;case 35669:case 35673:return RA;case 5125:return PA;case 36294:return LA;case 36295:return IA;case 36296:return DA;case 35678:case 36198:case 36298:case 36306:case 35682:return UA;case 35679:case 36299:case 36307:return NA;case 35680:case 36300:case 36308:case 36293:return FA;case 36289:case 36303:case 36311:case 36292:return OA}}class BA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=xA(t.type)}}class zA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kA(t.type)}}class HA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Bf=/(\w+)(\])?(\[|\.)?/g;function H0(s,e){s.seq.push(e),s.map[e.id]=e}function VA(s,e,t){const r=s.name,o=r.length;for(Bf.lastIndex=0;;){const l=Bf.exec(r),c=Bf.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===o){H0(t,h===void 0?new BA(f,s,e):new zA(f,s,e));break}else{let x=t.map[f];x===void 0&&(x=new HA(f),H0(t,x)),t=x}}}class sc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),d=e.getUniformLocation(t,f.name);VA(f,d,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function V0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const GA=37297;let WA=0;function XA(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const G0=new wt;function jA(s){Ut._getMatrix(G0,Ut.workingColorSpace,s);const e=`mat3( ${G0.elements.map(t=>t.toFixed(4))} )`;switch(Ut.getTransfer(s)){case hc:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return yt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function W0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+XA(s.getShaderSource(e),f)}else return l}function KA(s,e){const t=jA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qA={[Dg]:"Linear",[Ug]:"Reinhard",[Ng]:"Cineon",[Fg]:"ACESFilmic",[kg]:"AgX",[Bg]:"Neutral",[Og]:"Custom"};function YA(s,e){const t=qA[e];return t===void 0?(yt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ql=new J;function QA(){Ut.getLuminanceCoefficients(Ql);const s=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function ZA(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function $A(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function ma(s){return s!==""}function X0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function j0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(s){return s.replace(eE,nE)}const tE=new Map;function nE(s,e){let t=Ct[e];if(t===void 0){const r=tE.get(e);if(r!==void 0)t=Ct[r],yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Gh(t)}const iE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K0(s){return s.replace(iE,rE)}function rE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function q0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const sE={[ec]:"SHADOWMAP_TYPE_PCF",[pa]:"SHADOWMAP_TYPE_VSM"};function oE(s){return sE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aE={[Ms]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE",[_c]:"ENVMAP_TYPE_CUBE_UV"};function lE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":aE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const cE={[xo]:"ENVMAP_MODE_REFRACTION"};function uE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":cE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fE={[Ig]:"ENVMAP_BLENDING_MULTIPLY",[B_]:"ENVMAP_BLENDING_MIX",[z_]:"ENVMAP_BLENDING_ADD"};function hE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":fE[s.combine]||"ENVMAP_BLENDING_NONE"}function dE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function pE(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=oE(t),h=lE(t),g=uE(t),x=hE(t),m=dE(t),_=JA(t),S=ZA(l),T=o.createProgram();let y,M,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ma).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ma).join(`
`),M.length>0&&(M+=`
`)):(y=[q0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),M=[q0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?Ct.tonemapping_pars_fragment:"",t.toneMapping!==tr?YA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,KA("linearToOutputTexel",t.outputColorSpace),QA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),c=Gh(c),c=X0(c,t),c=j0(c,t),f=Gh(f),f=X0(f,t),f=j0(f,t),c=K0(c),f=K0(f),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",t.glslVersion===$m?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const P=E+y+c,R=E+M+f,H=V0(o,o.VERTEX_SHADER,P),I=V0(o,o.FRAGMENT_SHADER,R);o.attachShader(T,H),o.attachShader(T,I),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function O(z){if(s.debug.checkShaderErrors){const j=o.getProgramInfoLog(T)||"",le=o.getShaderInfoLog(H)||"",ce=o.getShaderInfoLog(I)||"",q=j.trim(),te=le.trim(),W=ce.trim();let F=!0,k=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,H,I);else{const ee=W0(o,H,"vertex"),D=W0(o,I,"fragment");Bt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+q+`
`+ee+`
`+D)}else q!==""?yt("WebGLProgram: Program Info Log:",q):(te===""||W==="")&&(k=!1);k&&(z.diagnostics={runnable:F,programLog:q,vertexShader:{log:te,prefix:y},fragmentShader:{log:W,prefix:M}})}o.deleteShader(H),o.deleteShader(I),A=new sc(o,T),U=$A(o,T)}let A;this.getUniforms=function(){return A===void 0&&O(this),A};let U;this.getAttributes=function(){return U===void 0&&O(this),U};let K=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=o.getProgramParameter(T,GA)),K},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=H,this.fragmentShader=I,this}let mE=0;class gE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new vE(e),t.set(e,r)),r}}class vE{constructor(e){this.id=mE++,this.code=e,this.usedTimes=0}}function xE(s){return s===Ss||s===cc||s===uc}function _E(s,e,t,r,o,l){const c=new Qg,f=new gE,d=new Set,h=[],g=new Map,x=r.logarithmicDepthBuffer;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(A){return d.add(A),A===0?"uv":`uv${A}`}function T(A,U,K,z,j,le){const ce=z.fog,q=j.geometry,te=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,W=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,F=e.get(A.envMap||te,W),k=F&&F.mapping===_c?F.image.height:null,ee=_[A.type];A.precision!==null&&(m=r.getMaxPrecision(A.precision),m!==A.precision&&yt("WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const D=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,B=D!==void 0?D.length:0;let ve=0;q.morphAttributes.position!==void 0&&(ve=1),q.morphAttributes.normal!==void 0&&(ve=2),q.morphAttributes.color!==void 0&&(ve=3);let we,me,X,ie;if(ee){const rt=$i[ee];we=rt.vertexShader,me=rt.fragmentShader}else we=A.vertexShader,me=A.fragmentShader,f.update(A),X=f.getVertexShaderID(A),ie=f.getFragmentShaderID(A);const se=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Ie=j.isInstancedMesh===!0,ye=j.isBatchedMesh===!0,Ke=!!A.map,We=!!A.matcap,Xe=!!F,tt=!!A.aoMap,it=!!A.lightMap,ut=!!A.bumpMap,pt=!!A.normalMap,xe=!!A.displacementMap,N=!!A.emissiveMap,Se=!!A.metalnessMap,He=!!A.roughnessMap,Qe=A.anisotropy>0,_e=A.clearcoat>0,Rt=A.dispersion>0,L=A.iridescence>0,w=A.sheen>0,ne=A.transmission>0,Me=Qe&&!!A.anisotropyMap,Te=_e&&!!A.clearcoatMap,Re=_e&&!!A.clearcoatNormalMap,Oe=_e&&!!A.clearcoatRoughnessMap,pe=L&&!!A.iridescenceMap,ge=L&&!!A.iridescenceThicknessMap,Ve=w&&!!A.sheenColorMap,je=w&&!!A.sheenRoughnessMap,Ne=!!A.specularMap,Fe=!!A.specularColorMap,dt=!!A.specularIntensityMap,Mt=ne&&!!A.transmissionMap,At=ne&&!!A.thicknessMap,Y=!!A.gradientMap,Ae=!!A.alphaMap,he=A.alphaTest>0,ke=!!A.alphaHash,Pe=!!A.extensions;let Ee=tr;A.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ee=s.toneMapping);const Je={shaderID:ee,shaderType:A.type,shaderName:A.name,vertexShader:we,fragmentShader:me,defines:A.defines,customVertexShaderID:X,customFragmentShaderID:ie,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:ye,batchingColor:ye&&j._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&j.instanceColor!==null,instancingMorph:Ie&&j.morphTexture!==null,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Ke,matcap:We,envMap:Xe,envMapMode:Xe&&F.mapping,envMapCubeUVHeight:k,aoMap:tt,lightMap:it,bumpMap:ut,normalMap:pt,displacementMap:xe,emissiveMap:N,normalMapObjectSpace:pt&&A.normalMapType===G_,normalMapTangentSpace:pt&&A.normalMapType===Ym,packedNormalMap:pt&&A.normalMapType===Ym&&xE(A.normalMap.format),metalnessMap:Se,roughnessMap:He,anisotropy:Qe,anisotropyMap:Me,clearcoat:_e,clearcoatMap:Te,clearcoatNormalMap:Re,clearcoatRoughnessMap:Oe,dispersion:Rt,iridescence:L,iridescenceMap:pe,iridescenceThicknessMap:ge,sheen:w,sheenColorMap:Ve,sheenRoughnessMap:je,specularMap:Ne,specularColorMap:Fe,specularIntensityMap:dt,transmission:ne,transmissionMap:Mt,thicknessMap:At,gradientMap:Y,opaque:A.transparent===!1&&A.blending===mo&&A.alphaToCoverage===!1,alphaMap:Ae,alphaTest:he,alphaHash:ke,combine:A.combine,mapUv:Ke&&S(A.map.channel),aoMapUv:tt&&S(A.aoMap.channel),lightMapUv:it&&S(A.lightMap.channel),bumpMapUv:ut&&S(A.bumpMap.channel),normalMapUv:pt&&S(A.normalMap.channel),displacementMapUv:xe&&S(A.displacementMap.channel),emissiveMapUv:N&&S(A.emissiveMap.channel),metalnessMapUv:Se&&S(A.metalnessMap.channel),roughnessMapUv:He&&S(A.roughnessMap.channel),anisotropyMapUv:Me&&S(A.anisotropyMap.channel),clearcoatMapUv:Te&&S(A.clearcoatMap.channel),clearcoatNormalMapUv:Re&&S(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&S(A.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&S(A.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&S(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&S(A.sheenColorMap.channel),sheenRoughnessMapUv:je&&S(A.sheenRoughnessMap.channel),specularMapUv:Ne&&S(A.specularMap.channel),specularColorMapUv:Fe&&S(A.specularColorMap.channel),specularIntensityMapUv:dt&&S(A.specularIntensityMap.channel),transmissionMapUv:Mt&&S(A.transmissionMap.channel),thicknessMapUv:At&&S(A.thicknessMap.channel),alphaMapUv:Ae&&S(A.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(pt||Qe),vertexNormals:!!q.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!q.attributes.uv&&(Ke||Ae),fog:!!ce,useFog:A.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||q.attributes.normal===void 0&&pt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:be,skinning:j.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:ve,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:le.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&K.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Ke&&A.map.isVideoTexture===!0&&Ut.getTransfer(A.map.colorSpace)===jt,decodeVideoTextureEmissive:N&&A.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(A.emissiveMap.colorSpace)===jt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Hi,flipSided:A.side===ai,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Pe&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&A.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Je.vertexUv1s=d.has(1),Je.vertexUv2s=d.has(2),Je.vertexUv3s=d.has(3),d.clear(),Je}function y(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const K in A.defines)U.push(K),U.push(A.defines[K]);return A.isRawShaderMaterial===!1&&(M(U,A),E(U,A),U.push(s.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function M(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function E(A,U){c.disableAll(),U.instancing&&c.enable(0),U.instancingColor&&c.enable(1),U.instancingMorph&&c.enable(2),U.matcap&&c.enable(3),U.envMap&&c.enable(4),U.normalMapObjectSpace&&c.enable(5),U.normalMapTangentSpace&&c.enable(6),U.clearcoat&&c.enable(7),U.iridescence&&c.enable(8),U.alphaTest&&c.enable(9),U.vertexColors&&c.enable(10),U.vertexAlphas&&c.enable(11),U.vertexUv1s&&c.enable(12),U.vertexUv2s&&c.enable(13),U.vertexUv3s&&c.enable(14),U.vertexTangents&&c.enable(15),U.anisotropy&&c.enable(16),U.alphaHash&&c.enable(17),U.batching&&c.enable(18),U.dispersion&&c.enable(19),U.batchingColor&&c.enable(20),U.gradientMap&&c.enable(21),U.packedNormalMap&&c.enable(22),U.vertexNormals&&c.enable(23),A.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.reversedDepthBuffer&&c.enable(4),U.skinning&&c.enable(5),U.morphTargets&&c.enable(6),U.morphNormals&&c.enable(7),U.morphColors&&c.enable(8),U.premultipliedAlpha&&c.enable(9),U.shadowMapEnabled&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.decodeVideoTextureEmissive&&c.enable(20),U.alphaToCoverage&&c.enable(21),U.numLightProbeGrids>0&&c.enable(22),A.push(c.mask)}function P(A){const U=_[A.type];let K;if(U){const z=$i[U];K=Gy.clone(z.uniforms)}else K=A.uniforms;return K}function R(A,U){let K=g.get(U);return K!==void 0?++K.usedTimes:(K=new pE(s,U,A,o),h.push(K),g.set(U,K)),K}function H(A){if(--A.usedTimes===0){const U=h.indexOf(A);h[U]=h[h.length-1],h.pop(),g.delete(A.cacheKey),A.destroy()}}function I(A){f.remove(A)}function O(){f.dispose()}return{getParameters:T,getProgramCacheKey:y,getUniforms:P,acquireProgram:R,releaseProgram:H,releaseShaderCache:I,programs:h,dispose:O}}function yE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,d){s.get(c)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function ME(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Y0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Q0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function f(m,_,S,T,y,M){let E=s[e];return E===void 0?(E={id:m.id,object:m,geometry:_,material:S,materialVariant:c(m),groupOrder:T,renderOrder:m.renderOrder,z:y,group:M},s[e]=E):(E.id=m.id,E.object=m,E.geometry=_,E.material=S,E.materialVariant=c(m),E.groupOrder=T,E.renderOrder=m.renderOrder,E.z=y,E.group=M),e++,E}function d(m,_,S,T,y,M){const E=f(m,_,S,T,y,M);S.transmission>0?r.push(E):S.transparent===!0?o.push(E):t.push(E)}function h(m,_,S,T,y,M){const E=f(m,_,S,T,y,M);S.transmission>0?r.unshift(E):S.transparent===!0?o.unshift(E):t.unshift(E)}function g(m,_){t.length>1&&t.sort(m||ME),r.length>1&&r.sort(_||Y0),o.length>1&&o.sort(_||Y0)}function x(){for(let m=e,_=s.length;m<_;m++){const S=s[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:x,sort:g}}function SE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new Q0,s.set(r,[c])):o>=l.length?(c=new Q0,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function AE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new zt};break;case"SpotLight":t={position:new J,direction:new J,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new zt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":t={color:new zt,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=t,t}}}function EE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let wE=0;function TE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function bE(s){const e=new AE,t=EE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new J);const o=new J,l=new on,c=new on;function f(h){let g=0,x=0,m=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let _=0,S=0,T=0,y=0,M=0,E=0,P=0,R=0,H=0,I=0,O=0;h.sort(TE);for(let U=0,K=h.length;U<K;U++){const z=h[U],j=z.color,le=z.intensity,ce=z.distance;let q=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Ss?q=z.shadow.map.texture:q=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)g+=j.r*le,x+=j.g*le,m+=j.b*le;else if(z.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(z.sh.coefficients[te],le);O++}else if(z.isDirectionalLight){const te=e.get(z);if(te.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const W=z.shadow,F=t.get(z);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,r.directionalShadow[_]=F,r.directionalShadowMap[_]=q,r.directionalShadowMatrix[_]=z.shadow.matrix,E++}r.directional[_]=te,_++}else if(z.isSpotLight){const te=e.get(z);te.position.setFromMatrixPosition(z.matrixWorld),te.color.copy(j).multiplyScalar(le),te.distance=ce,te.coneCos=Math.cos(z.angle),te.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),te.decay=z.decay,r.spot[T]=te;const W=z.shadow;if(z.map&&(r.spotLightMap[H]=z.map,H++,W.updateMatrices(z),z.castShadow&&I++),r.spotLightMatrix[T]=W.matrix,z.castShadow){const F=t.get(z);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,r.spotShadow[T]=F,r.spotShadowMap[T]=q,R++}T++}else if(z.isRectAreaLight){const te=e.get(z);te.color.copy(j).multiplyScalar(le),te.halfWidth.set(z.width*.5,0,0),te.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=te,y++}else if(z.isPointLight){const te=e.get(z);if(te.color.copy(z.color).multiplyScalar(z.intensity),te.distance=z.distance,te.decay=z.decay,z.castShadow){const W=z.shadow,F=t.get(z);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,F.shadowCameraNear=W.camera.near,F.shadowCameraFar=W.camera.far,r.pointShadow[S]=F,r.pointShadowMap[S]=q,r.pointShadowMatrix[S]=z.shadow.matrix,P++}r.point[S]=te,S++}else if(z.isHemisphereLight){const te=e.get(z);te.skyColor.copy(z.color).multiplyScalar(le),te.groundColor.copy(z.groundColor).multiplyScalar(le),r.hemi[M]=te,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qe.LTC_FLOAT_1,r.rectAreaLTC2=qe.LTC_FLOAT_2):(r.rectAreaLTC1=qe.LTC_HALF_1,r.rectAreaLTC2=qe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=m;const A=r.hash;(A.directionalLength!==_||A.pointLength!==S||A.spotLength!==T||A.rectAreaLength!==y||A.hemiLength!==M||A.numDirectionalShadows!==E||A.numPointShadows!==P||A.numSpotShadows!==R||A.numSpotMaps!==H||A.numLightProbes!==O)&&(r.directional.length=_,r.spot.length=T,r.rectArea.length=y,r.point.length=S,r.hemi.length=M,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+H-I,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,A.directionalLength=_,A.pointLength=S,A.spotLength=T,A.rectAreaLength=y,A.hemiLength=M,A.numDirectionalShadows=E,A.numPointShadows=P,A.numSpotShadows=R,A.numSpotMaps=H,A.numLightProbes=O,r.version=wE++)}function d(h,g){let x=0,m=0,_=0,S=0,T=0;const y=g.matrixWorldInverse;for(let M=0,E=h.length;M<E;M++){const P=h[M];if(P.isDirectionalLight){const R=r.directional[x];R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),x++}else if(P.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(P.isRectAreaLight){const R=r.rectArea[S];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),c.identity(),l.copy(P.matrixWorld),l.premultiply(y),c.extractRotation(l),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),S++}else if(P.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),m++}else if(P.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:f,setupView:d,state:r}}function J0(s){const e=new bE(s),t=[],r=[],o=[];function l(m){x.camera=m,t.length=0,r.length=0,o.length=0}function c(m){t.push(m)}function f(m){r.push(m)}function d(m){o.push(m)}function h(){e.setup(t)}function g(m){e.setupView(t,m)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:h,setupLightsView:g,pushLight:c,pushShadow:f,pushLightProbeGrid:d}}function CE(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new J0(s),e.set(o,[f])):l>=c.length?(f=new J0(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const RE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PE=`uniform sampler2D shadow_pass;
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
}`,LE=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],IE=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Z0=new on,ca=new J,zf=new J;function DE(s,e,t){let r=new nv;const o=new Dt,l=new Dt,c=new nn,f=new Ky,d=new qy,h={},g=t.maxTextureSize,x={[Zr]:ai,[ai]:Zr,[Hi]:Hi},m=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:RE,fragmentShader:PE}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const S=new ln;S.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Fn(S,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let M=this.type;this.render=function(I,O,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===y_&&(yt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ec);const U=s.getRenderTarget(),K=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),j=s.state;j.setBlending(yr),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const le=M!==this.type;le&&O.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(q=>q.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,q=I.length;ce<q;ce++){const te=I[ce],W=te.shadow;if(W===void 0){yt("WebGLShadowMap:",te,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const F=W.getFrameExtents();o.multiply(F),l.copy(W.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/F.x),o.x=l.x*F.x,W.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/F.y),o.y=l.y*F.y,W.mapSize.y=l.y));const k=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=k,W.map===null||le===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===pa){if(te.isPointLight){yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ir(o.x,o.y,{format:Ss,type:Sr,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),W.map.texture.name=te.name+".shadowMap",W.map.depthTexture=new _o(o.x,o.y,Gi),W.map.depthTexture.name=te.name+".shadowMapDepth",W.map.depthTexture.format=Ar,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=xn,W.map.depthTexture.magFilter=xn}else te.isPointLight?(W.map=new fv(o.x),W.map.depthTexture=new By(o.x,rr)):(W.map=new ir(o.x,o.y),W.map.depthTexture=new _o(o.x,o.y,rr)),W.map.depthTexture.name=te.name+".shadowMap",W.map.depthTexture.format=Ar,this.type===ec?(W.map.depthTexture.compareFunction=k?td:ed,W.map.depthTexture.minFilter=Rn,W.map.depthTexture.magFilter=Rn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=xn,W.map.depthTexture.magFilter=xn);W.camera.updateProjectionMatrix()}const ee=W.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<ee;D++){if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,D),s.clear();else{D===0&&(s.setRenderTarget(W.map),s.clear());const B=W.getViewport(D);c.set(l.x*B.x,l.y*B.y,l.x*B.z,l.y*B.w),j.viewport(c)}if(te.isPointLight){const B=W.camera,ve=W.matrix,we=te.distance||B.far;we!==B.far&&(B.far=we,B.updateProjectionMatrix()),ca.setFromMatrixPosition(te.matrixWorld),B.position.copy(ca),zf.copy(B.position),zf.add(LE[D]),B.up.copy(IE[D]),B.lookAt(zf),B.updateMatrixWorld(),ve.makeTranslation(-ca.x,-ca.y,-ca.z),Z0.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Z0,B.coordinateSystem,B.reversedDepth)}else W.updateMatrices(te);r=W.getFrustum(),R(O,A,W.camera,te,this.type)}W.isPointLightShadow!==!0&&this.type===pa&&E(W,A),W.needsUpdate=!1}M=this.type,y.needsUpdate=!1,s.setRenderTarget(U,K,z)};function E(I,O){const A=e.update(T);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ir(o.x,o.y,{format:Ss,type:Sr})),m.uniforms.shadow_pass.value=I.map.depthTexture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(O,null,A,m,T,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(O,null,A,_,T,null)}function P(I,O,A,U){let K=null;const z=A.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(z!==void 0)K=z;else if(K=A.isPointLight===!0?d:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const j=K.uuid,le=O.uuid;let ce=h[j];ce===void 0&&(ce={},h[j]=ce);let q=ce[le];q===void 0&&(q=K.clone(),ce[le]=q,O.addEventListener("dispose",H)),K=q}if(K.visible=O.visible,K.wireframe=O.wireframe,U===pa?K.side=O.shadowSide!==null?O.shadowSide:O.side:K.side=O.shadowSide!==null?O.shadowSide:x[O.side],K.alphaMap=O.alphaMap,K.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,K.map=O.map,K.clipShadows=O.clipShadows,K.clippingPlanes=O.clippingPlanes,K.clipIntersection=O.clipIntersection,K.displacementMap=O.displacementMap,K.displacementScale=O.displacementScale,K.displacementBias=O.displacementBias,K.wireframeLinewidth=O.wireframeLinewidth,K.linewidth=O.linewidth,A.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const j=s.properties.get(K);j.light=A}return K}function R(I,O,A,U,K){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&K===pa)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,I.matrixWorld);const le=e.update(I),ce=I.material;if(Array.isArray(ce)){const q=le.groups;for(let te=0,W=q.length;te<W;te++){const F=q[te],k=ce[F.materialIndex];if(k&&k.visible){const ee=P(I,k,U,K);I.onBeforeShadow(s,I,O,A,le,ee,F),s.renderBufferDirect(A,null,le,ee,I,F),I.onAfterShadow(s,I,O,A,le,ee,F)}}}else if(ce.visible){const q=P(I,ce,U,K);I.onBeforeShadow(s,I,O,A,le,q,null),s.renderBufferDirect(A,null,le,q,I,null),I.onAfterShadow(s,I,O,A,le,q,null)}}const j=I.children;for(let le=0,ce=j.length;le<ce;le++)R(j[le],O,A,U,K)}function H(I){I.target.removeEventListener("dispose",H);for(const A in h){const U=h[A],K=I.target.uuid;K in U&&(U[K].dispose(),delete U[K])}}}function UE(s,e){function t(){let Y=!1;const Ae=new nn;let he=null;const ke=new nn(0,0,0,0);return{setMask:function(Pe){he!==Pe&&!Y&&(s.colorMask(Pe,Pe,Pe,Pe),he=Pe)},setLocked:function(Pe){Y=Pe},setClear:function(Pe,Ee,Je,rt,st){st===!0&&(Pe*=rt,Ee*=rt,Je*=rt),Ae.set(Pe,Ee,Je,rt),ke.equals(Ae)===!1&&(s.clearColor(Pe,Ee,Je,rt),ke.copy(Ae))},reset:function(){Y=!1,he=null,ke.set(-1,0,0,0)}}}function r(){let Y=!1,Ae=!1,he=null,ke=null,Pe=null;return{setReversed:function(Ee){if(Ae!==Ee){const Je=e.get("EXT_clip_control");Ee?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Ae=Ee;const rt=Pe;Pe=null,this.setClear(rt)}},getReversed:function(){return Ae},setTest:function(Ee){Ee?se(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(Ee){he!==Ee&&!Y&&(s.depthMask(Ee),he=Ee)},setFunc:function(Ee){if(Ae&&(Ee=$_[Ee]),ke!==Ee){switch(Ee){case eh:s.depthFunc(s.NEVER);break;case th:s.depthFunc(s.ALWAYS);break;case nh:s.depthFunc(s.LESS);break;case vo:s.depthFunc(s.LEQUAL);break;case ih:s.depthFunc(s.EQUAL);break;case rh:s.depthFunc(s.GEQUAL);break;case sh:s.depthFunc(s.GREATER);break;case oh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ke=Ee}},setLocked:function(Ee){Y=Ee},setClear:function(Ee){Pe!==Ee&&(Pe=Ee,Ae&&(Ee=1-Ee),s.clearDepth(Ee))},reset:function(){Y=!1,he=null,ke=null,Pe=null,Ae=!1}}}function o(){let Y=!1,Ae=null,he=null,ke=null,Pe=null,Ee=null,Je=null,rt=null,st=null;return{setTest:function(xt){Y||(xt?se(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(xt){Ae!==xt&&!Y&&(s.stencilMask(xt),Ae=xt)},setFunc:function(xt,Zt,cn){(he!==xt||ke!==Zt||Pe!==cn)&&(s.stencilFunc(xt,Zt,cn),he=xt,ke=Zt,Pe=cn)},setOp:function(xt,Zt,cn){(Ee!==xt||Je!==Zt||rt!==cn)&&(s.stencilOp(xt,Zt,cn),Ee=xt,Je=Zt,rt=cn)},setLocked:function(xt){Y=xt},setClear:function(xt){st!==xt&&(s.clearStencil(xt),st=xt)},reset:function(){Y=!1,Ae=null,he=null,ke=null,Pe=null,Ee=null,Je=null,rt=null,st=null}}}const l=new t,c=new r,f=new o,d=new WeakMap,h=new WeakMap;let g={},x={},m={},_=new WeakMap,S=[],T=null,y=!1,M=null,E=null,P=null,R=null,H=null,I=null,O=null,A=new zt(0,0,0),U=0,K=!1,z=null,j=null,le=null,ce=null,q=null;const te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,F=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=F>=1):k.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=F>=2);let ee=null,D={};const B=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),we=new nn().fromArray(B),me=new nn().fromArray(ve);function X(Y,Ae,he,ke){const Pe=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(Y,Ee),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<he;Je++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,ke,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(Ae+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return Ee}const ie={};ie[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),se(s.DEPTH_TEST),c.setFunc(vo),ut(!1),pt(Xm),se(s.CULL_FACE),tt(yr);function se(Y){g[Y]!==!0&&(s.enable(Y),g[Y]=!0)}function be(Y){g[Y]!==!1&&(s.disable(Y),g[Y]=!1)}function Ie(Y,Ae){return m[Y]!==Ae?(s.bindFramebuffer(Y,Ae),m[Y]=Ae,Y===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Ae),Y===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function ye(Y,Ae){let he=S,ke=!1;if(Y){he=_.get(Ae),he===void 0&&(he=[],_.set(Ae,he));const Pe=Y.textures;if(he.length!==Pe.length||he[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,Je=Pe.length;Ee<Je;Ee++)he[Ee]=s.COLOR_ATTACHMENT0+Ee;he.length=Pe.length,ke=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,ke=!0);ke&&s.drawBuffers(he)}function Ke(Y){return T!==Y?(s.useProgram(Y),T=Y,!0):!1}const We={[vs]:s.FUNC_ADD,[S_]:s.FUNC_SUBTRACT,[A_]:s.FUNC_REVERSE_SUBTRACT};We[E_]=s.MIN,We[w_]=s.MAX;const Xe={[T_]:s.ZERO,[b_]:s.ONE,[C_]:s.SRC_COLOR,[Zf]:s.SRC_ALPHA,[U_]:s.SRC_ALPHA_SATURATE,[I_]:s.DST_COLOR,[P_]:s.DST_ALPHA,[R_]:s.ONE_MINUS_SRC_COLOR,[$f]:s.ONE_MINUS_SRC_ALPHA,[D_]:s.ONE_MINUS_DST_COLOR,[L_]:s.ONE_MINUS_DST_ALPHA,[N_]:s.CONSTANT_COLOR,[F_]:s.ONE_MINUS_CONSTANT_COLOR,[O_]:s.CONSTANT_ALPHA,[k_]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(Y,Ae,he,ke,Pe,Ee,Je,rt,st,xt){if(Y===yr){y===!0&&(be(s.BLEND),y=!1);return}if(y===!1&&(se(s.BLEND),y=!0),Y!==M_){if(Y!==M||xt!==K){if((E!==vs||H!==vs)&&(s.blendEquation(s.FUNC_ADD),E=vs,H=vs),xt)switch(Y){case mo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jm:s.blendFunc(s.ONE,s.ONE);break;case Km:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Bt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case mo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Km:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qm:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",Y);break}P=null,R=null,I=null,O=null,A.set(0,0,0),U=0,M=Y,K=xt}return}Pe=Pe||Ae,Ee=Ee||he,Je=Je||ke,(Ae!==E||Pe!==H)&&(s.blendEquationSeparate(We[Ae],We[Pe]),E=Ae,H=Pe),(he!==P||ke!==R||Ee!==I||Je!==O)&&(s.blendFuncSeparate(Xe[he],Xe[ke],Xe[Ee],Xe[Je]),P=he,R=ke,I=Ee,O=Je),(rt.equals(A)===!1||st!==U)&&(s.blendColor(rt.r,rt.g,rt.b,st),A.copy(rt),U=st),M=Y,K=!1}function it(Y,Ae){Y.side===Hi?be(s.CULL_FACE):se(s.CULL_FACE);let he=Y.side===ai;Ae&&(he=!he),ut(he),Y.blending===mo&&Y.transparent===!1?tt(yr):tt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const ke=Y.stencilWrite;f.setTest(ke),ke&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),N(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(Y){z!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),z=Y)}function pt(Y){Y!==x_?(se(s.CULL_FACE),Y!==j&&(Y===Xm?s.cullFace(s.BACK):Y===__?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),j=Y}function xe(Y){Y!==le&&(W&&s.lineWidth(Y),le=Y)}function N(Y,Ae,he){Y?(se(s.POLYGON_OFFSET_FILL),(ce!==Ae||q!==he)&&(ce=Ae,q=he,c.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,he))):be(s.POLYGON_OFFSET_FILL)}function Se(Y){Y?se(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function He(Y){Y===void 0&&(Y=s.TEXTURE0+te-1),ee!==Y&&(s.activeTexture(Y),ee=Y)}function Qe(Y,Ae,he){he===void 0&&(ee===null?he=s.TEXTURE0+te-1:he=ee);let ke=D[he];ke===void 0&&(ke={type:void 0,texture:void 0},D[he]=ke),(ke.type!==Y||ke.texture!==Ae)&&(ee!==he&&(s.activeTexture(he),ee=he),s.bindTexture(Y,Ae||ie[Y]),ke.type=Y,ke.texture=Ae)}function _e(){const Y=D[ee];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Rt(){try{s.compressedTexImage2D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function w(){try{s.texSubImage2D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function ne(){try{s.texSubImage3D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function Me(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function Te(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function Re(){try{s.texStorage2D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function Oe(){try{s.texStorage3D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function pe(){try{s.texImage2D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function ge(){try{s.texImage3D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function Ve(Y){return x[Y]!==void 0?x[Y]:s.getParameter(Y)}function je(Y,Ae){x[Y]!==Ae&&(s.pixelStorei(Y,Ae),x[Y]=Ae)}function Ne(Y){we.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),we.copy(Y))}function Fe(Y){me.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),me.copy(Y))}function dt(Y,Ae){let he=h.get(Ae);he===void 0&&(he=new WeakMap,h.set(Ae,he));let ke=he.get(Y);ke===void 0&&(ke=s.getUniformBlockIndex(Ae,Y.name),he.set(Y,ke))}function Mt(Y,Ae){const ke=h.get(Ae).get(Y);d.get(Ae)!==ke&&(s.uniformBlockBinding(Ae,ke,Y.__bindingPointIndex),d.set(Ae,ke))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},x={},ee=null,D={},m={},_=new WeakMap,S=[],T=null,y=!1,M=null,E=null,P=null,R=null,H=null,I=null,O=null,A=new zt(0,0,0),U=0,K=!1,z=null,j=null,le=null,ce=null,q=null,we.set(0,0,s.canvas.width,s.canvas.height),me.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:se,disable:be,bindFramebuffer:Ie,drawBuffers:ye,useProgram:Ke,setBlending:tt,setMaterial:it,setFlipSided:ut,setCullFace:pt,setLineWidth:xe,setPolygonOffset:N,setScissorTest:Se,activeTexture:He,bindTexture:Qe,unbindTexture:_e,compressedTexImage2D:Rt,compressedTexImage3D:L,texImage2D:pe,texImage3D:ge,pixelStorei:je,getParameter:Ve,updateUBOMapping:dt,uniformBlockBinding:Mt,texStorage2D:Re,texStorage3D:Oe,texSubImage2D:w,texSubImage3D:ne,compressedTexSubImage2D:Me,compressedTexSubImage3D:Te,scissor:Ne,viewport:Fe,reset:At}}function NE(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Dt,g=new WeakMap,x=new Set;let m;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,w){return S?new OffscreenCanvas(L,w):pc("canvas")}function y(L,w,ne){let Me=1;const Te=Rt(L);if((Te.width>ne||Te.height>ne)&&(Me=ne/Math.max(Te.width,Te.height)),Me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Re=Math.floor(Me*Te.width),Oe=Math.floor(Me*Te.height);m===void 0&&(m=T(Re,Oe));const pe=w?T(Re,Oe):m;return pe.width=Re,pe.height=Oe,pe.getContext("2d").drawImage(L,0,0,Re,Oe),yt("WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+Re+"x"+Oe+")."),pe}else return"data"in L&&yt("WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),L;return L}function M(L){return L.generateMipmaps}function E(L){s.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(L,w,ne,Me,Te,Re=!1){if(L!==null){if(s[L]!==void 0)return s[L];yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Oe;Me&&(Oe=e.get("EXT_texture_norm16"),Oe||yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=w;if(w===s.RED&&(ne===s.FLOAT&&(pe=s.R32F),ne===s.HALF_FLOAT&&(pe=s.R16F),ne===s.UNSIGNED_BYTE&&(pe=s.R8),ne===s.UNSIGNED_SHORT&&Oe&&(pe=Oe.R16_EXT),ne===s.SHORT&&Oe&&(pe=Oe.R16_SNORM_EXT)),w===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(pe=s.R8UI),ne===s.UNSIGNED_SHORT&&(pe=s.R16UI),ne===s.UNSIGNED_INT&&(pe=s.R32UI),ne===s.BYTE&&(pe=s.R8I),ne===s.SHORT&&(pe=s.R16I),ne===s.INT&&(pe=s.R32I)),w===s.RG&&(ne===s.FLOAT&&(pe=s.RG32F),ne===s.HALF_FLOAT&&(pe=s.RG16F),ne===s.UNSIGNED_BYTE&&(pe=s.RG8),ne===s.UNSIGNED_SHORT&&Oe&&(pe=Oe.RG16_EXT),ne===s.SHORT&&Oe&&(pe=Oe.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(pe=s.RG8UI),ne===s.UNSIGNED_SHORT&&(pe=s.RG16UI),ne===s.UNSIGNED_INT&&(pe=s.RG32UI),ne===s.BYTE&&(pe=s.RG8I),ne===s.SHORT&&(pe=s.RG16I),ne===s.INT&&(pe=s.RG32I)),w===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),ne===s.UNSIGNED_INT&&(pe=s.RGB32UI),ne===s.BYTE&&(pe=s.RGB8I),ne===s.SHORT&&(pe=s.RGB16I),ne===s.INT&&(pe=s.RGB32I)),w===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),ne===s.UNSIGNED_INT&&(pe=s.RGBA32UI),ne===s.BYTE&&(pe=s.RGBA8I),ne===s.SHORT&&(pe=s.RGBA16I),ne===s.INT&&(pe=s.RGBA32I)),w===s.RGB&&(ne===s.UNSIGNED_SHORT&&Oe&&(pe=Oe.RGB16_EXT),ne===s.SHORT&&Oe&&(pe=Oe.RGB16_SNORM_EXT),ne===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),ne===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),w===s.RGBA){const ge=Re?hc:Ut.getTransfer(Te);ne===s.FLOAT&&(pe=s.RGBA32F),ne===s.HALF_FLOAT&&(pe=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(pe=ge===jt?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT&&Oe&&(pe=Oe.RGBA16_EXT),ne===s.SHORT&&Oe&&(pe=Oe.RGBA16_SNORM_EXT),ne===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function H(L,w){let ne;return L?w===null||w===rr||w===ya?ne=s.DEPTH24_STENCIL8:w===Gi?ne=s.DEPTH32F_STENCIL8:w===_a&&(ne=s.DEPTH24_STENCIL8,yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===rr||w===ya?ne=s.DEPTH_COMPONENT24:w===Gi?ne=s.DEPTH_COMPONENT32F:w===_a&&(ne=s.DEPTH_COMPONENT16),ne}function I(L,w){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==xn&&L.minFilter!==Rn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function O(L){const w=L.target;w.removeEventListener("dispose",O),U(w),w.isVideoTexture&&g.delete(w),w.isHTMLTexture&&x.delete(w)}function A(L){const w=L.target;w.removeEventListener("dispose",A),z(w)}function U(L){const w=r.get(L);if(w.__webglInit===void 0)return;const ne=L.source,Me=_.get(ne);if(Me){const Te=Me[w.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&K(L),Object.keys(Me).length===0&&_.delete(ne)}r.remove(L)}function K(L){const w=r.get(L);s.deleteTexture(w.__webglTexture);const ne=L.source,Me=_.get(ne);delete Me[w.__cacheKey],c.memory.textures--}function z(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(w.__webglFramebuffer[Me]))for(let Te=0;Te<w.__webglFramebuffer[Me].length;Te++)s.deleteFramebuffer(w.__webglFramebuffer[Me][Te]);else s.deleteFramebuffer(w.__webglFramebuffer[Me]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Me])}else{if(Array.isArray(w.__webglFramebuffer))for(let Me=0;Me<w.__webglFramebuffer.length;Me++)s.deleteFramebuffer(w.__webglFramebuffer[Me]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Me=0;Me<w.__webglColorRenderbuffer.length;Me++)w.__webglColorRenderbuffer[Me]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Me]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ne=L.textures;for(let Me=0,Te=ne.length;Me<Te;Me++){const Re=r.get(ne[Me]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),c.memory.textures--),r.remove(ne[Me])}r.remove(L)}let j=0;function le(){j=0}function ce(){return j}function q(L){j=L}function te(){const L=j;return L>=o.maxTextures&&yt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),j+=1,L}function W(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function F(L,w){const ne=r.get(L);if(L.isVideoTexture&&Qe(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&ne.__version!==L.version){const Me=L.image;if(Me===null)yt("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)yt("WebGLRenderer: Texture marked for update but image is incomplete");else{be(ne,L,w);return}}else L.isExternalTexture&&(ne.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+w)}function k(L,w){const ne=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){be(ne,L,w);return}else L.isExternalTexture&&(ne.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+w)}function ee(L,w){const ne=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){be(ne,L,w);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+w)}function D(L,w){const ne=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&ne.__version!==L.version){Ie(ne,L,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+w)}const B={[lc]:s.REPEAT,[_r]:s.CLAMP_TO_EDGE,[ah]:s.MIRRORED_REPEAT},ve={[xn]:s.NEAREST,[H_]:s.NEAREST_MIPMAP_NEAREST,[wl]:s.NEAREST_MIPMAP_LINEAR,[Rn]:s.LINEAR,[af]:s.LINEAR_MIPMAP_NEAREST,[_s]:s.LINEAR_MIPMAP_LINEAR},we={[W_]:s.NEVER,[Y_]:s.ALWAYS,[X_]:s.LESS,[ed]:s.LEQUAL,[j_]:s.EQUAL,[td]:s.GEQUAL,[K_]:s.GREATER,[q_]:s.NOTEQUAL};function me(L,w){if(w.type===Gi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Rn||w.magFilter===af||w.magFilter===wl||w.magFilter===_s||w.minFilter===Rn||w.minFilter===af||w.minFilter===wl||w.minFilter===_s)&&yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,B[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,B[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,B[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ve[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ve[w.minFilter]),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,we[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===xn||w.minFilter!==wl&&w.minFilter!==_s||w.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function X(L,w){let ne=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",O));const Me=w.source;let Te=_.get(Me);Te===void 0&&(Te={},_.set(Me,Te));const Re=W(w);if(Re!==L.__cacheKey){Te[Re]===void 0&&(Te[Re]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ne=!0),Te[Re].usedTimes++;const Oe=Te[L.__cacheKey];Oe!==void 0&&(Te[L.__cacheKey].usedTimes--,Oe.usedTimes===0&&K(w)),L.__cacheKey=Re,L.__webglTexture=Te[Re].texture}return ne}function ie(L,w,ne){return Math.floor(Math.floor(L/ne)/w)}function se(L,w,ne,Me){const Re=L.updateRanges;if(Re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,ne,Me,w.data);else{Re.sort((je,Ne)=>je.start-Ne.start);let Oe=0;for(let je=1;je<Re.length;je++){const Ne=Re[Oe],Fe=Re[je],dt=Ne.start+Ne.count,Mt=ie(Fe.start,w.width,4),At=ie(Ne.start,w.width,4);Fe.start<=dt+1&&Mt===At&&ie(Fe.start+Fe.count-1,w.width,4)===Mt?Ne.count=Math.max(Ne.count,Fe.start+Fe.count-Ne.start):(++Oe,Re[Oe]=Fe)}Re.length=Oe+1;const pe=t.getParameter(s.UNPACK_ROW_LENGTH),ge=t.getParameter(s.UNPACK_SKIP_PIXELS),Ve=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let je=0,Ne=Re.length;je<Ne;je++){const Fe=Re[je],dt=Math.floor(Fe.start/4),Mt=Math.ceil(Fe.count/4),At=dt%w.width,Y=Math.floor(dt/w.width),Ae=Mt,he=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,At),t.pixelStorei(s.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(s.TEXTURE_2D,0,At,Y,Ae,he,ne,Me,w.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,pe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ve)}}function be(L,w,ne){let Me=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Me=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Me=s.TEXTURE_3D);const Te=X(L,w),Re=w.source;t.bindTexture(Me,L.__webglTexture,s.TEXTURE0+ne);const Oe=r.get(Re);if(Re.version!==Oe.__version||Te===!0){if(t.activeTexture(s.TEXTURE0+ne),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const he=Ut.getPrimaries(Ut.workingColorSpace),ke=w.colorSpace===Qr?null:Ut.getPrimaries(w.colorSpace),Pe=w.colorSpace===Qr||he===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let ge=y(w.image,!1,o.maxTextureSize);ge=_e(w,ge);const Ve=l.convert(w.format,w.colorSpace),je=l.convert(w.type);let Ne=R(w.internalFormat,Ve,je,w.normalized,w.colorSpace,w.isVideoTexture);me(Me,w);let Fe;const dt=w.mipmaps,Mt=w.isVideoTexture!==!0,At=Oe.__version===void 0||Te===!0,Y=Re.dataReady,Ae=I(w,ge);if(w.isDepthTexture)Ne=H(w.format===ys,w.type),At&&(Mt?t.texStorage2D(s.TEXTURE_2D,1,Ne,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,Ne,ge.width,ge.height,0,Ve,je,null));else if(w.isDataTexture)if(dt.length>0){Mt&&At&&t.texStorage2D(s.TEXTURE_2D,Ae,Ne,dt[0].width,dt[0].height);for(let he=0,ke=dt.length;he<ke;he++)Fe=dt[he],Mt?Y&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Fe.width,Fe.height,Ve,je,Fe.data):t.texImage2D(s.TEXTURE_2D,he,Ne,Fe.width,Fe.height,0,Ve,je,Fe.data);w.generateMipmaps=!1}else Mt?(At&&t.texStorage2D(s.TEXTURE_2D,Ae,Ne,ge.width,ge.height),Y&&se(w,ge,Ve,je)):t.texImage2D(s.TEXTURE_2D,0,Ne,ge.width,ge.height,0,Ve,je,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Mt&&At&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ne,dt[0].width,dt[0].height,ge.depth);for(let he=0,ke=dt.length;he<ke;he++)if(Fe=dt[he],w.format!==bi)if(Ve!==null)if(Mt){if(Y)if(w.layerUpdates.size>0){const Pe=R0(Fe.width,Fe.height,w.format,w.type);for(const Ee of w.layerUpdates){const Je=Fe.data.subarray(Ee*Pe/Fe.data.BYTES_PER_ELEMENT,(Ee+1)*Pe/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,Ee,Fe.width,Fe.height,1,Ve,Je)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Fe.width,Fe.height,ge.depth,Ve,Fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,Ne,Fe.width,Fe.height,ge.depth,0,Fe.data,0,0);else yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Mt?Y&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Fe.width,Fe.height,ge.depth,Ve,je,Fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,Ne,Fe.width,Fe.height,ge.depth,0,Ve,je,Fe.data)}else{Mt&&At&&t.texStorage2D(s.TEXTURE_2D,Ae,Ne,dt[0].width,dt[0].height);for(let he=0,ke=dt.length;he<ke;he++)Fe=dt[he],w.format!==bi?Ve!==null?Mt?Y&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Fe.width,Fe.height,Ve,Fe.data):t.compressedTexImage2D(s.TEXTURE_2D,he,Ne,Fe.width,Fe.height,0,Fe.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?Y&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Fe.width,Fe.height,Ve,je,Fe.data):t.texImage2D(s.TEXTURE_2D,he,Ne,Fe.width,Fe.height,0,Ve,je,Fe.data)}else if(w.isDataArrayTexture)if(Mt){if(At&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ne,ge.width,ge.height,ge.depth),Y)if(w.layerUpdates.size>0){const he=R0(ge.width,ge.height,w.format,w.type);for(const ke of w.layerUpdates){const Pe=ge.data.subarray(ke*he/ge.data.BYTES_PER_ELEMENT,(ke+1)*he/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ke,ge.width,ge.height,1,Ve,je,Pe)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ve,je,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,ge.width,ge.height,ge.depth,0,Ve,je,ge.data);else if(w.isData3DTexture)Mt?(At&&t.texStorage3D(s.TEXTURE_3D,Ae,Ne,ge.width,ge.height,ge.depth),Y&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ve,je,ge.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,ge.width,ge.height,ge.depth,0,Ve,je,ge.data);else if(w.isFramebufferTexture){if(At)if(Mt)t.texStorage2D(s.TEXTURE_2D,Ae,Ne,ge.width,ge.height);else{let he=ge.width,ke=ge.height;for(let Pe=0;Pe<Ae;Pe++)t.texImage2D(s.TEXTURE_2D,Pe,Ne,he,ke,0,Ve,je,null),he>>=1,ke>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const he=s.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),ge.parentNode!==he){he.appendChild(ge),x.add(w),he.onpaint=rt=>{const st=rt.changedElements;for(const xt of x)st.includes(xt.image)&&(xt.needsUpdate=!0)},he.requestPaint();return}const ke=0,Pe=s.RGBA,Ee=s.RGBA,Je=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,ke,Pe,Ee,Je,ge),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(dt.length>0){if(Mt&&At){const he=Rt(dt[0]);t.texStorage2D(s.TEXTURE_2D,Ae,Ne,he.width,he.height)}for(let he=0,ke=dt.length;he<ke;he++)Fe=dt[he],Mt?Y&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ve,je,Fe):t.texImage2D(s.TEXTURE_2D,he,Ne,Ve,je,Fe);w.generateMipmaps=!1}else if(Mt){if(At){const he=Rt(ge);t.texStorage2D(s.TEXTURE_2D,Ae,Ne,he.width,he.height)}Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ve,je,ge)}else t.texImage2D(s.TEXTURE_2D,0,Ne,Ve,je,ge);M(w)&&E(Me),Oe.__version=Re.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ie(L,w,ne){if(w.image.length!==6)return;const Me=X(L,w),Te=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+ne);const Re=r.get(Te);if(Te.version!==Re.__version||Me===!0){t.activeTexture(s.TEXTURE0+ne);const Oe=Ut.getPrimaries(Ut.workingColorSpace),pe=w.colorSpace===Qr?null:Ut.getPrimaries(w.colorSpace),ge=w.colorSpace===Qr||Oe===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ve=w.isCompressedTexture||w.image[0].isCompressedTexture,je=w.image[0]&&w.image[0].isDataTexture,Ne=[];for(let Ee=0;Ee<6;Ee++)!Ve&&!je?Ne[Ee]=y(w.image[Ee],!0,o.maxCubemapSize):Ne[Ee]=je?w.image[Ee].image:w.image[Ee],Ne[Ee]=_e(w,Ne[Ee]);const Fe=Ne[0],dt=l.convert(w.format,w.colorSpace),Mt=l.convert(w.type),At=R(w.internalFormat,dt,Mt,w.normalized,w.colorSpace),Y=w.isVideoTexture!==!0,Ae=Re.__version===void 0||Me===!0,he=Te.dataReady;let ke=I(w,Fe);me(s.TEXTURE_CUBE_MAP,w);let Pe;if(Ve){Y&&Ae&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,At,Fe.width,Fe.height);for(let Ee=0;Ee<6;Ee++){Pe=Ne[Ee].mipmaps;for(let Je=0;Je<Pe.length;Je++){const rt=Pe[Je];w.format!==bi?dt!==null?Y?he&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je,0,0,rt.width,rt.height,dt,rt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je,At,rt.width,rt.height,0,rt.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je,0,0,rt.width,rt.height,dt,Mt,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je,At,rt.width,rt.height,0,dt,Mt,rt.data)}}}else{if(Pe=w.mipmaps,Y&&Ae){Pe.length>0&&ke++;const Ee=Rt(Ne[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,At,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(je){Y?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ne[Ee].width,Ne[Ee].height,dt,Mt,Ne[Ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,At,Ne[Ee].width,Ne[Ee].height,0,dt,Mt,Ne[Ee].data);for(let Je=0;Je<Pe.length;Je++){const st=Pe[Je].image[Ee].image;Y?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je+1,0,0,st.width,st.height,dt,Mt,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je+1,At,st.width,st.height,0,dt,Mt,st.data)}}else{Y?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,dt,Mt,Ne[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,At,dt,Mt,Ne[Ee]);for(let Je=0;Je<Pe.length;Je++){const rt=Pe[Je];Y?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je+1,0,0,dt,Mt,rt.image[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je+1,At,dt,Mt,rt.image[Ee])}}}M(w)&&E(s.TEXTURE_CUBE_MAP),Re.__version=Te.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ye(L,w,ne,Me,Te,Re){const Oe=l.convert(ne.format,ne.colorSpace),pe=l.convert(ne.type),ge=R(ne.internalFormat,Oe,pe,ne.normalized,ne.colorSpace),Ve=r.get(w),je=r.get(ne);if(je.__renderTarget=w,!Ve.__hasExternalTextures){const Ne=Math.max(1,w.width>>Re),Fe=Math.max(1,w.height>>Re);Te===s.TEXTURE_3D||Te===s.TEXTURE_2D_ARRAY?t.texImage3D(Te,Re,ge,Ne,Fe,w.depth,0,Oe,pe,null):t.texImage2D(Te,Re,ge,Ne,Fe,0,Oe,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),He(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,Te,je.__webglTexture,0,Se(w)):(Te===s.TEXTURE_2D||Te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Me,Te,je.__webglTexture,Re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(L,w,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer){const Me=w.depthTexture,Te=Me&&Me.isDepthTexture?Me.type:null,Re=H(w.stencilBuffer,Te),Oe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;He(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se(w),Re,w.width,w.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se(w),Re,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Re,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Oe,s.RENDERBUFFER,L)}else{const Me=w.textures;for(let Te=0;Te<Me.length;Te++){const Re=Me[Te],Oe=l.convert(Re.format,Re.colorSpace),pe=l.convert(Re.type),ge=R(Re.internalFormat,Oe,pe,Re.normalized,Re.colorSpace);He(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se(w),ge,w.width,w.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se(w),ge,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ge,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function We(L,w,ne){const Me=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Te=r.get(w.depthTexture);if(Te.__renderTarget=w,(!Te.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Me){if(Te.__webglInit===void 0&&(Te.__webglInit=!0,w.depthTexture.addEventListener("dispose",O)),Te.__webglTexture===void 0){Te.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Te.__webglTexture),me(s.TEXTURE_CUBE_MAP,w.depthTexture);const Ve=l.convert(w.depthTexture.format),je=l.convert(w.depthTexture.type);let Ne;w.depthTexture.format===Ar?Ne=s.DEPTH_COMPONENT24:w.depthTexture.format===ys&&(Ne=s.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ne,w.width,w.height,0,Ve,je,null)}}else F(w.depthTexture,0);const Re=Te.__webglTexture,Oe=Se(w),pe=Me?s.TEXTURE_CUBE_MAP_POSITIVE_X+ne:s.TEXTURE_2D,ge=w.depthTexture.format===ys?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ar)He(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Re,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Re,0);else if(w.depthTexture.format===ys)He(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Re,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Re,0);else throw new Error("Unknown depthTexture format")}function Xe(L){const w=r.get(L),ne=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const Me=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Me){const Te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Me.removeEventListener("dispose",Te)};Me.addEventListener("dispose",Te),w.__depthDisposeCallback=Te}w.__boundDepthTexture=Me}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if(ne)for(let Me=0;Me<6;Me++)We(w.__webglFramebuffer[Me],L,Me);else{const Me=L.texture.mipmaps;Me&&Me.length>0?We(w.__webglFramebuffer[0],L,0):We(w.__webglFramebuffer,L,0)}else if(ne){w.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Me]),w.__webglDepthbuffer[Me]===void 0)w.__webglDepthbuffer[Me]=s.createRenderbuffer(),Ke(w.__webglDepthbuffer[Me],L,!1);else{const Te=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=w.__webglDepthbuffer[Me];s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,Re)}}else{const Me=L.texture.mipmaps;if(Me&&Me.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Ke(w.__webglDepthbuffer,L,!1);else{const Te=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,Re)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(L,w,ne){const Me=r.get(L);w!==void 0&&ye(Me.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&Xe(L)}function it(L){const w=L.texture,ne=r.get(L),Me=r.get(w);L.addEventListener("dispose",A);const Te=L.textures,Re=L.isWebGLCubeRenderTarget===!0,Oe=Te.length>1;if(Oe||(Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture()),Me.__version=w.version,c.memory.textures++),Re){ne.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer[pe]=[];for(let ge=0;ge<w.mipmaps.length;ge++)ne.__webglFramebuffer[pe][ge]=s.createFramebuffer()}else ne.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)ne.__webglFramebuffer[pe]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(Oe)for(let pe=0,ge=Te.length;pe<ge;pe++){const Ve=r.get(Te[pe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&He(L)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let pe=0;pe<Te.length;pe++){const ge=Te[pe];ne.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[pe]);const Ve=l.convert(ge.format,ge.colorSpace),je=l.convert(ge.type),Ne=R(ge.internalFormat,Ve,je,ge.normalized,ge.colorSpace,L.isXRRenderTarget===!0),Fe=Se(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Ne,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,ne.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),Ke(ne.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Re){t.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),me(s.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ye(ne.__webglFramebuffer[pe][ge],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else ye(ne.__webglFramebuffer[pe],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);M(w)&&E(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let pe=0,ge=Te.length;pe<ge;pe++){const Ve=Te[pe],je=r.get(Ve);let Ne=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ne=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ne,je.__webglTexture),me(Ne,Ve),ye(ne.__webglFramebuffer,L,Ve,s.COLOR_ATTACHMENT0+pe,Ne,0),M(Ve)&&E(Ne)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,Me.__webglTexture),me(pe,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ye(ne.__webglFramebuffer[ge],L,w,s.COLOR_ATTACHMENT0,pe,ge);else ye(ne.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,pe,0);M(w)&&E(pe),t.unbindTexture()}L.depthBuffer&&Xe(L)}function ut(L){const w=L.textures;for(let ne=0,Me=w.length;ne<Me;ne++){const Te=w[ne];if(M(Te)){const Re=P(L),Oe=r.get(Te).__webglTexture;t.bindTexture(Re,Oe),E(Re),t.unbindTexture()}}}const pt=[],xe=[];function N(L){if(L.samples>0){if(He(L)===!1){const w=L.textures,ne=L.width,Me=L.height;let Te=s.COLOR_BUFFER_BIT;const Re=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=r.get(L),pe=w.length>1;if(pe)for(let Ve=0;Ve<w.length;Ve++)t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const ge=L.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ve=0;Ve<w.length;Ve++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Te|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Te|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ve]);const je=r.get(w[Ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,je,0)}s.blitFramebuffer(0,0,ne,Me,0,0,ne,Me,Te,s.NEAREST),d===!0&&(pt.length=0,xe.length=0,pt.push(s.COLOR_ATTACHMENT0+Ve),L.depthBuffer&&L.resolveDepthBuffer===!1&&(pt.push(Re),xe.push(Re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,xe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Ve=0;Ve<w.length;Ve++){t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ve]);const je=r.get(w[Ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const w=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Se(L){return Math.min(o.maxSamples,L.samples)}function He(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Qe(L){const w=c.render.frame;g.get(L)!==w&&(g.set(L,w),L.update())}function _e(L,w){const ne=L.colorSpace,Me=L.format,Te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ne!==fc&&ne!==Qr&&(Ut.getTransfer(ne)===jt?(Me!==bi||Te!==Ti)&&yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",ne)),w}function Rt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=te,this.resetTextureUnits=le,this.getTextureUnits=ce,this.setTextureUnits=q,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=ee,this.setTextureCube=D,this.rebindTextures=tt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function FE(s,e){function t(r,o=Qr){let l;const c=Ut.getTransfer(o);if(r===Ti)return s.UNSIGNED_BYTE;if(r===Yh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Qh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Gg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Wg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Hg)return s.BYTE;if(r===Vg)return s.SHORT;if(r===_a)return s.UNSIGNED_SHORT;if(r===qh)return s.INT;if(r===rr)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===Sr)return s.HALF_FLOAT;if(r===Xg)return s.ALPHA;if(r===jg)return s.RGB;if(r===bi)return s.RGBA;if(r===Ar)return s.DEPTH_COMPONENT;if(r===ys)return s.DEPTH_STENCIL;if(r===Kg)return s.RED;if(r===Jh)return s.RED_INTEGER;if(r===Ss)return s.RG;if(r===Zh)return s.RG_INTEGER;if(r===$h)return s.RGBA_INTEGER;if(r===tc||r===nc||r===ic||r===rc)if(c===jt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===tc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ic)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===tc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ic)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===rc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lh||r===ch||r===uh||r===fh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===lh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ch)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hh||r===dh||r===ph||r===mh||r===gh||r===cc||r===vh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===hh||r===dh)return c===jt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===ph)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===mh)return l.COMPRESSED_R11_EAC;if(r===gh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===cc)return l.COMPRESSED_RG11_EAC;if(r===vh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===xh||r===_h||r===yh||r===Mh||r===Sh||r===Ah||r===Eh||r===wh||r===Th||r===bh||r===Ch||r===Rh||r===Ph||r===Lh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===xh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_h)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ah)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Eh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Th)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ch)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ph)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Lh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ih||r===Dh||r===Uh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ih)return c===jt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Dh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Uh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nh||r===Fh||r===uc||r===Oh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Nh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Fh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Oh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ya?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const OE=`
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

}`;class BE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new ov(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new gi({vertexShader:OE,fragmentShader:kE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fn(new Mc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zE extends ws{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",d=1,h=null,g=null,x=null,m=null,_=null,S=null;const T=typeof XRWebGLBinding<"u",y=new BE,M={},E=t.getContextAttributes();let P=null,R=null;const H=[],I=[],O=new Dt;let A=null;const U=new oi;U.viewport=new nn;const K=new oi;K.viewport=new nn;const z=[U,K],j=new Qy;let le=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=H[X];return ie===void 0&&(ie=new pf,H[X]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=H[X];return ie===void 0&&(ie=new pf,H[X]=ie),ie.getGripSpace()},this.getHand=function(X){let ie=H[X];return ie===void 0&&(ie=new pf,H[X]=ie),ie.getHandSpace()};function q(X){const ie=I.indexOf(X.inputSource);if(ie===-1)return;const se=H[ie];se!==void 0&&(se.update(X.inputSource,X.frame,h||c),se.dispatchEvent({type:X.type,data:X.inputSource}))}function te(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",W);for(let X=0;X<H.length;X++){const ie=I[X];ie!==null&&(I[X]=null,H[X].disconnect(ie))}le=null,ce=null,y.reset();for(const X in M)delete M[X];e.setRenderTarget(P),_=null,m=null,x=null,o=null,R=null,me.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){l=X,r.isPresenting===!0&&yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){f=X,r.isPresenting===!0&&yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return x===null&&T&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",te),o.addEventListener("inputsourceschange",W),E.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,be=null,Ie=null;E.depth&&(Ie=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=E.stencil?ys:Ar,be=E.stencil?ya:rr);const ye={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:l};x=this.getBinding(),m=x.createProjectionLayer(ye),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),R=new ir(m.textureWidth,m.textureHeight,{format:bi,type:Ti,depthTexture:new _o(m.textureWidth,m.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const se={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:l};_=new XRWebGLLayer(o,t,se),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new ir(_.framebufferWidth,_.framebufferHeight,{format:bi,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(f),me.setContext(o),me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(X){for(let ie=0;ie<X.removed.length;ie++){const se=X.removed[ie],be=I.indexOf(se);be>=0&&(I[be]=null,H[be].disconnect(se))}for(let ie=0;ie<X.added.length;ie++){const se=X.added[ie];let be=I.indexOf(se);if(be===-1){for(let ye=0;ye<H.length;ye++)if(ye>=I.length){I.push(se),be=ye;break}else if(I[ye]===null){I[ye]=se,be=ye;break}if(be===-1)break}const Ie=H[be];Ie&&Ie.connect(se)}}const F=new J,k=new J;function ee(X,ie,se){F.setFromMatrixPosition(ie.matrixWorld),k.setFromMatrixPosition(se.matrixWorld);const be=F.distanceTo(k),Ie=ie.projectionMatrix.elements,ye=se.projectionMatrix.elements,Ke=Ie[14]/(Ie[10]-1),We=Ie[14]/(Ie[10]+1),Xe=(Ie[9]+1)/Ie[5],tt=(Ie[9]-1)/Ie[5],it=(Ie[8]-1)/Ie[0],ut=(ye[8]+1)/ye[0],pt=Ke*it,xe=Ke*ut,N=be/(-it+ut),Se=N*-it;if(ie.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Se),X.translateZ(N),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ie[10]===-1)X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const He=Ke+N,Qe=We+N,_e=pt-Se,Rt=xe+(be-Se),L=Xe*We/Qe*He,w=tt*We/Qe*He;X.projectionMatrix.makePerspective(_e,Rt,L,w,He,Qe),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function D(X,ie){ie===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let ie=X.near,se=X.far;y.texture!==null&&(y.depthNear>0&&(ie=y.depthNear),y.depthFar>0&&(se=y.depthFar)),j.near=K.near=U.near=ie,j.far=K.far=U.far=se,(le!==j.near||ce!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),le=j.near,ce=j.far),j.layers.mask=X.layers.mask|6,U.layers.mask=j.layers.mask&-5,K.layers.mask=j.layers.mask&-3;const be=X.parent,Ie=j.cameras;D(j,be);for(let ye=0;ye<Ie.length;ye++)D(Ie[ye],be);Ie.length===2?ee(j,U,K):j.projectionMatrix.copy(U.projectionMatrix),B(X,j,be)};function B(X,ie,se){se===null?X.matrix.copy(ie.matrixWorld):(X.matrix.copy(se.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ma*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(m===null&&_===null))return d},this.setFoveation=function(X){d=X,m!==null&&(m.fixedFoveation=X),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(X){return M[X]};let ve=null;function we(X,ie){if(g=ie.getViewerPose(h||c),S=ie,g!==null){const se=g.views;_!==null&&(e.setRenderTargetFramebuffer(R,_.framebuffer),e.setRenderTarget(R));let be=!1;se.length!==j.cameras.length&&(j.cameras.length=0,be=!0);for(let We=0;We<se.length;We++){const Xe=se[We];let tt=null;if(_!==null)tt=_.getViewport(Xe);else{const ut=x.getViewSubImage(m,Xe);tt=ut.viewport,We===0&&(e.setRenderTargetTextures(R,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(R))}let it=z[We];it===void 0&&(it=new oi,it.layers.enable(We),it.viewport=new nn,z[We]=it),it.matrix.fromArray(Xe.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Xe.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(tt.x,tt.y,tt.width,tt.height),We===0&&(j.matrix.copy(it.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),be===!0&&j.cameras.push(it)}const Ie=o.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){x=r.getBinding();const We=x.getDepthInformation(se[0]);We&&We.isValid&&We.texture&&y.init(We,o.renderState)}if(Ie&&Ie.includes("camera-access")&&T){e.state.unbindTexture(),x=r.getBinding();for(let We=0;We<se.length;We++){const Xe=se[We].camera;if(Xe){let tt=M[Xe];tt||(tt=new ov,M[Xe]=tt);const it=x.getCameraImage(Xe);tt.sourceTexture=it}}}}for(let se=0;se<H.length;se++){const be=I[se],Ie=H[se];be!==null&&Ie!==void 0&&Ie.update(be,ie,h||c)}ve&&ve(X,ie),ie.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ie}),S=null}const me=new cv;me.setAnimationLoop(we),this.setAnimationLoop=function(X){ve=X},this.dispose=function(){}}}const HE=new on,gv=new wt;gv.set(-1,0,0,0,1,0,0,0,1);function VE(s,e){function t(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,av(s)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,E,P,R){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?l(y,M):M.isMeshLambertMaterial?(l(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(l(y,M),x(y,M)):M.isMeshPhongMaterial?(l(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(l(y,M),m(y,M),M.isMeshPhysicalMaterial&&_(y,M,R)):M.isMeshMatcapMaterial?(l(y,M),S(y,M)):M.isMeshDepthMaterial?l(y,M):M.isMeshDistanceMaterial?(l(y,M),T(y,M)):M.isMeshNormalMaterial?l(y,M):M.isLineBasicMaterial?(c(y,M),M.isLineDashedMaterial&&f(y,M)):M.isPointsMaterial?d(y,M,E,P):M.isSpriteMaterial?h(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function l(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,t(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===ai&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,t(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===ai&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,t(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,t(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,t(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const E=e.get(M),P=E.envMap,R=E.envMapRotation;P&&(y.envMap.value=P,y.envMapRotation.value.setFromMatrix4(HE.makeRotationFromEuler(R)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(gv),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,t(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,t(M.aoMap,y.aoMapTransform))}function c(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform))}function f(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function d(y,M,E,P){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*E,y.scale.value=P*.5,M.map&&(y.map.value=M.map,t(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function h(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function x(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function m(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,t(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,t(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function _(y,M,E){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,t(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,t(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,t(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,t(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,t(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===ai&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,t(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,t(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=E.texture,y.transmissionSamplerSize.value.set(E.width,E.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,t(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,t(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,t(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,t(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,t(M.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,M){M.matcap&&(y.matcap.value=M.matcap)}function T(y,M){const E=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(E.matrixWorld),y.nearDistance.value=E.shadow.camera.near,y.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function GE(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(E,P){const R=P.program;r.uniformBlockBinding(E,R)}function h(E,P){let R=o[E.id];R===void 0&&(S(E),R=g(E),o[E.id]=R,E.addEventListener("dispose",y));const H=P.program;r.updateUBOMapping(E,H);const I=e.render.frame;l[E.id]!==I&&(m(E),l[E.id]=I)}function g(E){const P=x();E.__bindingPointIndex=P;const R=s.createBuffer(),H=E.__size,I=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,H,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,R),R}function x(){for(let E=0;E<f;E++)if(c.indexOf(E)===-1)return c.push(E),E;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const P=o[E.id],R=E.uniforms,H=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let I=0,O=R.length;I<O;I++){const A=Array.isArray(R[I])?R[I]:[R[I]];for(let U=0,K=A.length;U<K;U++){const z=A[U];if(_(z,I,U,H)===!0){const j=z.__offset,le=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let q=0;q<le.length;q++){const te=le[q],W=T(te);typeof te=="number"||typeof te=="boolean"?(z.__data[0]=te,s.bufferSubData(s.UNIFORM_BUFFER,j+ce,z.__data)):te.isMatrix3?(z.__data[0]=te.elements[0],z.__data[1]=te.elements[1],z.__data[2]=te.elements[2],z.__data[3]=0,z.__data[4]=te.elements[3],z.__data[5]=te.elements[4],z.__data[6]=te.elements[5],z.__data[7]=0,z.__data[8]=te.elements[6],z.__data[9]=te.elements[7],z.__data[10]=te.elements[8],z.__data[11]=0):ArrayBuffer.isView(te)?z.__data.set(new te.constructor(te.buffer,te.byteOffset,z.__data.length)):(te.toArray(z.__data,ce),ce+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(E,P,R,H){const I=E.value,O=P+"_"+R;if(H[O]===void 0)return typeof I=="number"||typeof I=="boolean"?H[O]=I:ArrayBuffer.isView(I)?H[O]=I.slice():H[O]=I.clone(),!0;{const A=H[O];if(typeof I=="number"||typeof I=="boolean"){if(A!==I)return H[O]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(A.equals(I)===!1)return A.copy(I),!0}}return!1}function S(E){const P=E.uniforms;let R=0;const H=16;for(let O=0,A=P.length;O<A;O++){const U=Array.isArray(P[O])?P[O]:[P[O]];for(let K=0,z=U.length;K<z;K++){const j=U[K],le=Array.isArray(j.value)?j.value:[j.value];for(let ce=0,q=le.length;ce<q;ce++){const te=le[ce],W=T(te),F=R%H,k=F%W.boundary,ee=F+k;R+=k,ee!==0&&H-ee<W.storage&&(R+=H-ee),j.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=R,R+=W.storage}}}const I=R%H;return I>0&&(R+=H-I),E.__size=R,E.__cache={},this}function T(E){const P={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(P.boundary=4,P.storage=4):E.isVector2?(P.boundary=8,P.storage=8):E.isVector3||E.isColor?(P.boundary=16,P.storage=12):E.isVector4?(P.boundary=16,P.storage=16):E.isMatrix3?(P.boundary=48,P.storage=48):E.isMatrix4?(P.boundary=64,P.storage=64):E.isTexture?yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(P.boundary=16,P.storage=E.byteLength):yt("WebGLRenderer: Unsupported uniform value type.",E),P}function y(E){const P=E.target;P.removeEventListener("dispose",y);const R=c.indexOf(P.__bindingPointIndex);c.splice(R,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function M(){for(const E in o)s.deleteBuffer(o[E]);c=[],o={},l={}}return{bind:d,update:h,dispose:M}}const WE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function XE(){return Zi===null&&(Zi=new tv(WE,16,16,Ss,Sr),Zi.name="DFG_LUT",Zi.minFilter=Rn,Zi.magFilter=Rn,Zi.wrapS=_r,Zi.wrapT=_r,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class vv{constructor(e={}){const{canvas:t=J_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:m=!1,outputBufferType:_=Ti}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const T=_,y=new Set([$h,Zh,Jh]),M=new Set([Ti,rr,_a,ya,Yh,Qh]),E=new Uint32Array(4),P=new Int32Array(4),R=new J;let H=null,I=null;const O=[],A=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const K=this;let z=!1,j=null;this._outputColorSpace=wi;let le=0,ce=0,q=null,te=-1,W=null;const F=new nn,k=new nn;let ee=null;const D=new zt(0);let B=0,ve=t.width,we=t.height,me=1,X=null,ie=null;const se=new nn(0,0,ve,we),be=new nn(0,0,ve,we);let Ie=!1;const ye=new nv;let Ke=!1,We=!1;const Xe=new on,tt=new J,it=new nn,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function xe(){return q===null?me:1}let N=r;function Se(C,Z){return t.getContext(C,Z)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kh}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",rt,!1),N===null){const Z="webgl2";if(N=Se(Z,C),N===null)throw Se(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Bt("WebGLRenderer: "+C.message),C}let He,Qe,_e,Rt,L,w,ne,Me,Te,Re,Oe,pe,ge,Ve,je,Ne,Fe,dt,Mt,At,Y,Ae,he;function ke(){He=new X1(N),He.init(),Y=new FE(N,He),Qe=new O1(N,He,e,Y),_e=new UE(N,He),Qe.reversedDepthBuffer&&m&&_e.buffers.depth.setReversed(!0),Rt=new q1(N),L=new yE,w=new NE(N,He,_e,L,Qe,Y,Rt),ne=new W1(K),Me=new Zy(N),Ae=new N1(N,Me),Te=new j1(N,Me,Rt,Ae),Re=new Q1(N,Te,Me,Ae,Rt),dt=new Y1(N,Qe,w),je=new k1(L),Oe=new _E(K,ne,He,Qe,Ae,je),pe=new VE(K,L),ge=new SE,Ve=new CE(He),Fe=new U1(K,ne,_e,Re,S,d),Ne=new DE(K,Re,Qe),he=new GE(N,Rt,Qe,_e),Mt=new F1(N,He,Rt),At=new K1(N,He,Rt),Rt.programs=Oe.programs,K.capabilities=Qe,K.extensions=He,K.properties=L,K.renderLists=ge,K.shadowMap=Ne,K.state=_e,K.info=Rt}ke(),T!==Ti&&(U=new Z1(T,t.width,t.height,o,l));const Pe=new zE(K,N);this.xr=Pe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=He.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=He.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(C){C!==void 0&&(me=C,this.setSize(ve,we,!1))},this.getSize=function(C){return C.set(ve,we)},this.setSize=function(C,Z,ue=!0){if(Pe.isPresenting){yt("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=C,we=Z,t.width=Math.floor(C*me),t.height=Math.floor(Z*me),ue===!0&&(t.style.width=C+"px",t.style.height=Z+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(ve*me,we*me).floor()},this.setDrawingBufferSize=function(C,Z,ue){ve=C,we=Z,me=ue,t.width=Math.floor(C*ue),t.height=Math.floor(Z*ue),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(T===Ti){Bt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){yt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(se)},this.setViewport=function(C,Z,ue,re){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,Z,ue,re),_e.viewport(F.copy(se).multiplyScalar(me).round())},this.getScissor=function(C){return C.copy(be)},this.setScissor=function(C,Z,ue,re){C.isVector4?be.set(C.x,C.y,C.z,C.w):be.set(C,Z,ue,re),_e.scissor(k.copy(be).multiplyScalar(me).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(C){_e.setScissorTest(Ie=C)},this.setOpaqueSort=function(C){X=C},this.setTransparentSort=function(C){ie=C},this.getClearColor=function(C){return C.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,ue=!0){let re=0;if(C){let ae=!1;if(q!==null){const Ge=q.texture.format;ae=y.has(Ge)}if(ae){const Ge=q.texture.type,Ze=M.has(Ge),De=Fe.getClearColor(),$e=Fe.getClearAlpha(),ot=De.r,_t=De.g,mt=De.b;Ze?(E[0]=ot,E[1]=_t,E[2]=mt,E[3]=$e,N.clearBufferuiv(N.COLOR,0,E)):(P[0]=ot,P[1]=_t,P[2]=mt,P[3]=$e,N.clearBufferiv(N.COLOR,0,P))}else re|=N.COLOR_BUFFER_BIT}Z&&(re|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(re|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&N.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),j=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),Fe.dispose(),ge.dispose(),Ve.dispose(),L.dispose(),ne.dispose(),Re.dispose(),Ae.dispose(),he.dispose(),Oe.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",li),Pe.removeEventListener("sessionend",ci),Kn.stop()};function Ee(C){C.preventDefault(),t0("WebGLRenderer: Context Lost."),z=!0}function Je(){t0("WebGLRenderer: Context Restored."),z=!1;const C=Rt.autoReset,Z=Ne.enabled,ue=Ne.autoUpdate,re=Ne.needsUpdate,ae=Ne.type;ke(),Rt.autoReset=C,Ne.enabled=Z,Ne.autoUpdate=ue,Ne.needsUpdate=re,Ne.type=ae}function rt(C){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function st(C){const Z=C.target;Z.removeEventListener("dispose",st),xt(Z)}function xt(C){Zt(C),L.remove(C)}function Zt(C){const Z=L.get(C).programs;Z!==void 0&&(Z.forEach(function(ue){Oe.releaseProgram(ue)}),C.isShaderMaterial&&Oe.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,ue,re,ae,Ge){Z===null&&(Z=ut);const Ze=ae.isMesh&&ae.matrixWorld.determinant()<0,De=Kt(C,Z,ue,re,ae);_e.setMaterial(re,Ze);let $e=ue.index,ot=1;if(re.wireframe===!0){if($e=Te.getWireframeAttribute(ue),$e===void 0)return;ot=2}const _t=ue.drawRange,mt=ue.attributes.position;let nt=_t.start*ot,Pt=(_t.start+_t.count)*ot;Ge!==null&&(nt=Math.max(nt,Ge.start*ot),Pt=Math.min(Pt,(Ge.start+Ge.count)*ot)),$e!==null?(nt=Math.max(nt,0),Pt=Math.min(Pt,$e.count)):mt!=null&&(nt=Math.max(nt,0),Pt=Math.min(Pt,mt.count));const Gt=Pt-nt;if(Gt<0||Gt===1/0)return;Ae.setup(ae,re,De,ue,$e);let Wt,Ht=Mt;if($e!==null&&(Wt=Me.get($e),Ht=At,Ht.setIndex(Wt)),ae.isMesh)re.wireframe===!0?(_e.setLineWidth(re.wireframeLinewidth*xe()),Ht.setMode(N.LINES)):Ht.setMode(N.TRIANGLES);else if(ae.isLine){let rn=re.linewidth;rn===void 0&&(rn=1),_e.setLineWidth(rn*xe()),ae.isLineSegments?Ht.setMode(N.LINES):ae.isLineLoop?Ht.setMode(N.LINE_LOOP):Ht.setMode(N.LINE_STRIP)}else ae.isPoints?Ht.setMode(N.POINTS):ae.isSprite&&Ht.setMode(N.TRIANGLES);if(ae.isBatchedMesh)if(He.get("WEBGL_multi_draw"))Ht.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const rn=ae._multiDrawStarts,Ye=ae._multiDrawCounts,fn=ae._multiDrawCount,Et=$e?Me.get($e).bytesPerElement:1,An=L.get(re).currentProgram.getUniforms();for(let En=0;En<fn;En++)An.setValue(N,"_gl_DrawID",En),Ht.render(rn[En]/Et,Ye[En])}else if(ae.isInstancedMesh)Ht.renderInstances(nt,Gt,ae.count);else if(ue.isInstancedBufferGeometry){const rn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ye=Math.min(ue.instanceCount,rn);Ht.renderInstances(nt,Gt,Ye)}else Ht.render(nt,Gt)};function cn(C,Z,ue){C.transparent===!0&&C.side===Hi&&C.forceSinglePass===!1?(C.side=ai,C.needsUpdate=!0,pn(C,Z,ue),C.side=Zr,C.needsUpdate=!0,pn(C,Z,ue),C.side=Hi):pn(C,Z,ue)}this.compile=function(C,Z,ue=null){ue===null&&(ue=C),I=Ve.get(ue),I.init(Z),A.push(I),ue.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(I.pushLight(ae),ae.castShadow&&I.pushShadow(ae))}),C!==ue&&C.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(I.pushLight(ae),ae.castShadow&&I.pushShadow(ae))}),I.setupLights();const re=new Set;return C.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Ge=ae.material;if(Ge)if(Array.isArray(Ge))for(let Ze=0;Ze<Ge.length;Ze++){const De=Ge[Ze];cn(De,ue,ae),re.add(De)}else cn(Ge,ue,ae),re.add(Ge)}),I=A.pop(),re},this.compileAsync=function(C,Z,ue=null){const re=this.compile(C,Z,ue);return new Promise(ae=>{function Ge(){if(re.forEach(function(Ze){L.get(Ze).currentProgram.isReady()&&re.delete(Ze)}),re.size===0){ae(C);return}setTimeout(Ge,10)}He.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let jn=null;function Ci(C){jn&&jn(C)}function li(){Kn.stop()}function ci(){Kn.start()}const Kn=new cv;Kn.setAnimationLoop(Ci),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(C){jn=C,Pe.setAnimationLoop(C),C===null?Kn.stop():Kn.start()},Pe.addEventListener("sessionstart",li),Pe.addEventListener("sessionend",ci),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;j!==null&&j.renderStart(C,Z);const ue=Pe.enabled===!0&&Pe.isPresenting===!0,re=U!==null&&(q===null||ue)&&U.begin(K,q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(Z),Z=Pe.getCamera()),C.isScene===!0&&C.onBeforeRender(K,C,Z,q),I=Ve.get(C,A.length),I.init(Z),I.state.textureUnits=w.getTextureUnits(),A.push(I),Xe.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ye.setFromProjectionMatrix(Xe,er,Z.reversedDepth),We=this.localClippingEnabled,Ke=je.init(this.clippingPlanes,We),H=ge.get(C,O.length),H.init(),O.push(H),Pe.enabled===!0&&Pe.isPresenting===!0){const Ze=K.xr.getDepthSensingMesh();Ze!==null&&vi(Ze,Z,-1/0,K.sortObjects)}vi(C,Z,0,K.sortObjects),H.finish(),K.sortObjects===!0&&H.sort(X,ie),pt=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,pt&&Fe.addToRenderList(H,C),this.info.render.frame++,Ke===!0&&je.beginShadows();const ae=I.state.shadowsArray;if(Ne.render(ae,C,Z),Ke===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&U.hasRenderPass())===!1){const Ze=H.opaque,De=H.transmissive;if(I.setupLights(),Z.isArrayCamera){const $e=Z.cameras;if(De.length>0)for(let ot=0,_t=$e.length;ot<_t;ot++){const mt=$e[ot];qn(Ze,De,C,mt)}pt&&Fe.render(C);for(let ot=0,_t=$e.length;ot<_t;ot++){const mt=$e[ot];sr(H,C,mt,mt.viewport)}}else De.length>0&&qn(Ze,De,C,Z),pt&&Fe.render(C),sr(H,C,Z)}q!==null&&ce===0&&(w.updateMultisampleRenderTarget(q),w.updateRenderTargetMipmap(q)),re&&U.end(K),C.isScene===!0&&C.onAfterRender(K,C,Z),Ae.resetDefaultState(),te=-1,W=null,A.pop(),A.length>0?(I=A[A.length-1],w.setTextureUnits(I.state.textureUnits),Ke===!0&&je.setGlobalState(K.clippingPlanes,I.state.camera)):I=null,O.pop(),O.length>0?H=O[O.length-1]:H=null,j!==null&&j.renderEnd()};function vi(C,Z,ue,re){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)ue=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLightProbeGrid)I.pushLightProbeGrid(C);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ye.intersectsSprite(C)){re&&it.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Xe);const Ze=Re.update(C),De=C.material;De.visible&&H.push(C,Ze,De,ue,it.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ye.intersectsObject(C))){const Ze=Re.update(C),De=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),it.copy(C.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),it.copy(Ze.boundingSphere.center)),it.applyMatrix4(C.matrixWorld).applyMatrix4(Xe)),Array.isArray(De)){const $e=Ze.groups;for(let ot=0,_t=$e.length;ot<_t;ot++){const mt=$e[ot],nt=De[mt.materialIndex];nt&&nt.visible&&H.push(C,Ze,nt,ue,it.z,mt)}}else De.visible&&H.push(C,Ze,De,ue,it.z,null)}}const Ge=C.children;for(let Ze=0,De=Ge.length;Ze<De;Ze++)vi(Ge[Ze],Z,ue,re)}function sr(C,Z,ue,re){const{opaque:ae,transmissive:Ge,transparent:Ze}=C;I.setupLightsView(ue),Ke===!0&&je.setGlobalState(K.clippingPlanes,ue),re&&_e.viewport(F.copy(re)),ae.length>0&&un(ae,Z,ue),Ge.length>0&&un(Ge,Z,ue),Ze.length>0&&un(Ze,Z,ue),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function qn(C,Z,ue,re){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[re.id]===void 0){const nt=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[re.id]=new ir(1,1,{generateMipmaps:!0,type:nt?Sr:Ti,minFilter:_s,samples:Math.max(4,Qe.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const Ge=I.state.transmissionRenderTarget[re.id],Ze=re.viewport||F;Ge.setSize(Ze.z*K.transmissionResolutionScale,Ze.w*K.transmissionResolutionScale);const De=K.getRenderTarget(),$e=K.getActiveCubeFace(),ot=K.getActiveMipmapLevel();K.setRenderTarget(Ge),K.getClearColor(D),B=K.getClearAlpha(),B<1&&K.setClearColor(16777215,.5),K.clear(),pt&&Fe.render(ue);const _t=K.toneMapping;K.toneMapping=tr;const mt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),I.setupLightsView(re),Ke===!0&&je.setGlobalState(K.clippingPlanes,re),un(C,ue,re),w.updateMultisampleRenderTarget(Ge),w.updateRenderTargetMipmap(Ge),He.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Pt=0,Gt=Z.length;Pt<Gt;Pt++){const Wt=Z[Pt],{object:Ht,geometry:rn,material:Ye,group:fn}=Wt;if(Ye.side===Hi&&Ht.layers.test(re.layers)){const Et=Ye.side;Ye.side=ai,Ye.needsUpdate=!0,Pn(Ht,ue,re,rn,Ye,fn),Ye.side=Et,Ye.needsUpdate=!0,nt=!0}}nt===!0&&(w.updateMultisampleRenderTarget(Ge),w.updateRenderTargetMipmap(Ge))}K.setRenderTarget(De,$e,ot),K.setClearColor(D,B),mt!==void 0&&(re.viewport=mt),K.toneMapping=_t}function un(C,Z,ue){const re=Z.isScene===!0?Z.overrideMaterial:null;for(let ae=0,Ge=C.length;ae<Ge;ae++){const Ze=C[ae],{object:De,geometry:$e,group:ot}=Ze;let _t=Ze.material;_t.allowOverride===!0&&re!==null&&(_t=re),De.layers.test(ue.layers)&&Pn(De,Z,ue,$e,_t,ot)}}function Pn(C,Z,ue,re,ae,Ge){C.onBeforeRender(K,Z,ue,re,ae,Ge),C.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ae.onBeforeRender(K,Z,ue,re,C,Ge),ae.transparent===!0&&ae.side===Hi&&ae.forceSinglePass===!1?(ae.side=ai,ae.needsUpdate=!0,K.renderBufferDirect(ue,Z,re,ae,C,Ge),ae.side=Zr,ae.needsUpdate=!0,K.renderBufferDirect(ue,Z,re,ae,C,Ge),ae.side=Hi):K.renderBufferDirect(ue,Z,re,ae,C,Ge),C.onAfterRender(K,Z,ue,re,ae,Ge)}function pn(C,Z,ue){Z.isScene!==!0&&(Z=ut);const re=L.get(C),ae=I.state.lights,Ge=I.state.shadowsArray,Ze=ae.state.version,De=Oe.getParameters(C,ae.state,Ge,Z,ue,I.state.lightProbeGridArray),$e=Oe.getProgramCacheKey(De);let ot=re.programs;re.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Z.environment:null,re.fog=Z.fog;const _t=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;re.envMap=ne.get(C.envMap||re.environment,_t),re.envMapRotation=re.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,ot===void 0&&(C.addEventListener("dispose",st),ot=new Map,re.programs=ot);let mt=ot.get($e);if(mt!==void 0){if(re.currentProgram===mt&&re.lightsStateVersion===Ze)return Sn(C,De),mt}else De.uniforms=Oe.getUniforms(C),j!==null&&C.isNodeMaterial&&j.build(C,ue,De),C.onBeforeCompile(De,K),mt=Oe.acquireProgram(De,$e),ot.set($e,mt),re.uniforms=De.uniforms;const nt=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(nt.clippingPlanes=je.uniform),Sn(C,De),re.needsLights=Ln(C),re.lightsStateVersion=Ze,re.needsLights&&(nt.ambientLightColor.value=ae.state.ambient,nt.lightProbe.value=ae.state.probe,nt.directionalLights.value=ae.state.directional,nt.directionalLightShadows.value=ae.state.directionalShadow,nt.spotLights.value=ae.state.spot,nt.spotLightShadows.value=ae.state.spotShadow,nt.rectAreaLights.value=ae.state.rectArea,nt.ltc_1.value=ae.state.rectAreaLTC1,nt.ltc_2.value=ae.state.rectAreaLTC2,nt.pointLights.value=ae.state.point,nt.pointLightShadows.value=ae.state.pointShadow,nt.hemisphereLights.value=ae.state.hemi,nt.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,nt.spotLightMatrix.value=ae.state.spotLightMatrix,nt.spotLightMap.value=ae.state.spotLightMap,nt.pointShadowMatrix.value=ae.state.pointShadowMatrix),re.lightProbeGrid=I.state.lightProbeGridArray.length>0,re.currentProgram=mt,re.uniformsList=null,mt}function Mn(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=sc.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Sn(C,Z){const ue=L.get(C);ue.outputColorSpace=Z.outputColorSpace,ue.batching=Z.batching,ue.batchingColor=Z.batchingColor,ue.instancing=Z.instancing,ue.instancingColor=Z.instancingColor,ue.instancingMorph=Z.instancingMorph,ue.skinning=Z.skinning,ue.morphTargets=Z.morphTargets,ue.morphNormals=Z.morphNormals,ue.morphColors=Z.morphColors,ue.morphTargetsCount=Z.morphTargetsCount,ue.numClippingPlanes=Z.numClippingPlanes,ue.numIntersection=Z.numClipIntersection,ue.vertexAlphas=Z.vertexAlphas,ue.vertexTangents=Z.vertexTangents,ue.toneMapping=Z.toneMapping}function lt(C,Z){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition(Z.matrixWorld);for(let ue=0,re=C.length;ue<re;ue++){const ae=C[ue];if(ae.texture!==null&&ae.boundingBox.containsPoint(R))return ae}return null}function Kt(C,Z,ue,re,ae){Z.isScene!==!0&&(Z=ut),w.resetTextureUnits();const Ge=Z.fog,Ze=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?Z.environment:null,De=q===null?K.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ut.workingColorSpace,$e=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,ot=ne.get(re.envMap||Ze,$e),_t=re.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,mt=!!ue.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),nt=!!ue.morphAttributes.position,Pt=!!ue.morphAttributes.normal,Gt=!!ue.morphAttributes.color;let Wt=tr;re.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Wt=K.toneMapping);const Ht=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,rn=Ht!==void 0?Ht.length:0,Ye=L.get(re),fn=I.state.lights;if(Ke===!0&&(We===!0||C!==W)){const Xt=C===W&&re.id===te;je.setState(re,C,Xt)}let Et=!1;re.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==fn.state.version||Ye.outputColorSpace!==De||ae.isBatchedMesh&&Ye.batching===!1||!ae.isBatchedMesh&&Ye.batching===!0||ae.isBatchedMesh&&Ye.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&Ye.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&Ye.instancing===!1||!ae.isInstancedMesh&&Ye.instancing===!0||ae.isSkinnedMesh&&Ye.skinning===!1||!ae.isSkinnedMesh&&Ye.skinning===!0||ae.isInstancedMesh&&Ye.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ye.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ye.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ye.instancingMorph===!1&&ae.morphTexture!==null||Ye.envMap!==ot||re.fog===!0&&Ye.fog!==Ge||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==je.numPlanes||Ye.numIntersection!==je.numIntersection)||Ye.vertexAlphas!==_t||Ye.vertexTangents!==mt||Ye.morphTargets!==nt||Ye.morphNormals!==Pt||Ye.morphColors!==Gt||Ye.toneMapping!==Wt||Ye.morphTargetsCount!==rn||!!Ye.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,Ye.__version=re.version);let An=Ye.currentProgram;Et===!0&&(An=pn(re,Z,ae),j&&re.isNodeMaterial&&j.onUpdateProgram(re,An,Ye));let En=!1,Tt=!1,On=!1;const Ft=An.getUniforms(),Yt=Ye.uniforms;if(_e.useProgram(An.program)&&(En=!0,Tt=!0,On=!0),re.id!==te&&(te=re.id,Tt=!0),Ye.needsLights){const Xt=lt(I.state.lightProbeGridArray,ae);Ye.lightProbeGrid!==Xt&&(Ye.lightProbeGrid=Xt,Tt=!0)}if(En||W!==C){_e.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ft.setValue(N,"projectionMatrix",C.projectionMatrix),Ft.setValue(N,"viewMatrix",C.matrixWorldInverse);const Pi=Ft.map.cameraPosition;Pi!==void 0&&Pi.setValue(N,tt.setFromMatrixPosition(C.matrixWorld)),Qe.logarithmicDepthBuffer&&Ft.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ft.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),W!==C&&(W=C,Tt=!0,On=!0)}if(Ye.needsLights&&(fn.state.directionalShadowMap.length>0&&Ft.setValue(N,"directionalShadowMap",fn.state.directionalShadowMap,w),fn.state.spotShadowMap.length>0&&Ft.setValue(N,"spotShadowMap",fn.state.spotShadowMap,w),fn.state.pointShadowMap.length>0&&Ft.setValue(N,"pointShadowMap",fn.state.pointShadowMap,w)),ae.isSkinnedMesh){Ft.setOptional(N,ae,"bindMatrix"),Ft.setOptional(N,ae,"bindMatrixInverse");const Xt=ae.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Ft.setValue(N,"boneTexture",Xt.boneTexture,w))}ae.isBatchedMesh&&(Ft.setOptional(N,ae,"batchingTexture"),Ft.setValue(N,"batchingTexture",ae._matricesTexture,w),Ft.setOptional(N,ae,"batchingIdTexture"),Ft.setValue(N,"batchingIdTexture",ae._indirectTexture,w),Ft.setOptional(N,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Ft.setValue(N,"batchingColorTexture",ae._colorsTexture,w));const Ri=ue.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&dt.update(ae,ue,An),(Tt||Ye.receiveShadow!==ae.receiveShadow)&&(Ye.receiveShadow=ae.receiveShadow,Ft.setValue(N,"receiveShadow",ae.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&Z.environment!==null&&(Yt.envMapIntensity.value=Z.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=XE()),Tt){if(Ft.setValue(N,"toneMappingExposure",K.toneMappingExposure),Ye.needsLights&&mn(Yt,On),Ge&&re.fog===!0&&pe.refreshFogUniforms(Yt,Ge),pe.refreshMaterialUniforms(Yt,re,me,we,I.state.transmissionRenderTarget[C.id]),Ye.needsLights&&Ye.lightProbeGrid){const Xt=Ye.lightProbeGrid;Yt.probesSH.value=Xt.texture,Yt.probesMin.value.copy(Xt.boundingBox.min),Yt.probesMax.value.copy(Xt.boundingBox.max),Yt.probesResolution.value.copy(Xt.resolution)}sc.upload(N,Mn(Ye),Yt,w)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(sc.upload(N,Mn(Ye),Yt,w),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ft.setValue(N,"center",ae.center),Ft.setValue(N,"modelViewMatrix",ae.modelViewMatrix),Ft.setValue(N,"normalMatrix",ae.normalMatrix),Ft.setValue(N,"modelMatrix",ae.matrixWorld),re.uniformsGroups!==void 0){const Xt=re.uniformsGroups;for(let Pi=0,ji=Xt.length;Pi<ji;Pi++){const $r=Xt[Pi];he.update($r,An),he.bind($r,An)}}return An}function mn(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Ln(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,Z,ue){const re=L.get(C);re.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),L.get(C.texture).__webglTexture=Z,L.get(C.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ue,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const ue=L.get(C);ue.__webglFramebuffer=Z,ue.__useDefaultFramebuffer=Z===void 0};const Nt=N.createFramebuffer();this.setRenderTarget=function(C,Z=0,ue=0){q=C,le=Z,ce=ue;let re=null,ae=!1,Ge=!1;if(C){const De=L.get(C);if(De.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(N.FRAMEBUFFER,De.__webglFramebuffer),F.copy(C.viewport),k.copy(C.scissor),ee=C.scissorTest,_e.viewport(F),_e.scissor(k),_e.setScissorTest(ee),te=-1;return}else if(De.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(De.__hasExternalTextures)w.rebindTextures(C,L.get(C.texture).__webglTexture,L.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const _t=C.depthTexture;if(De.__boundDepthTexture!==_t){if(_t!==null&&L.has(_t)&&(C.width!==_t.image.width||C.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ge=!0);const ot=L.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ot[Z])?re=ot[Z][ue]:re=ot[Z],ae=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?re=L.get(C).__webglMultisampledFramebuffer:Array.isArray(ot)?re=ot[ue]:re=ot,F.copy(C.viewport),k.copy(C.scissor),ee=C.scissorTest}else F.copy(se).multiplyScalar(me).floor(),k.copy(be).multiplyScalar(me).floor(),ee=Ie;if(ue!==0&&(re=Nt),_e.bindFramebuffer(N.FRAMEBUFFER,re)&&_e.drawBuffers(C,re),_e.viewport(F),_e.scissor(k),_e.setScissorTest(ee),ae){const De=L.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+Z,De.__webglTexture,ue)}else if(Ge){const De=Z;for(let $e=0;$e<C.textures.length;$e++){const ot=L.get(C.textures[$e]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+$e,ot.__webglTexture,ue,De)}}else if(C!==null&&ue!==0){const De=L.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,De.__webglTexture,ue)}te=-1},this.readRenderTargetPixels=function(C,Z,ue,re,ae,Ge,Ze,De=0){if(!(C&&C.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ze!==void 0&&($e=$e[Ze]),$e){_e.bindFramebuffer(N.FRAMEBUFFER,$e);try{const ot=C.textures[De],_t=ot.format,mt=ot.type;if(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+De),!Qe.textureFormatReadable(_t)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(mt)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-re&&ue>=0&&ue<=C.height-ae&&N.readPixels(Z,ue,re,ae,Y.convert(_t),Y.convert(mt),Ge)}finally{const ot=q!==null?L.get(q).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(C,Z,ue,re,ae,Ge,Ze,De=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ze!==void 0&&($e=$e[Ze]),$e)if(Z>=0&&Z<=C.width-re&&ue>=0&&ue<=C.height-ae){_e.bindFramebuffer(N.FRAMEBUFFER,$e);const ot=C.textures[De],_t=ot.format,mt=ot.type;if(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+De),!Qe.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,nt),N.bufferData(N.PIXEL_PACK_BUFFER,Ge.byteLength,N.STREAM_READ),N.readPixels(Z,ue,re,ae,Y.convert(_t),Y.convert(mt),0);const Pt=q!==null?L.get(q).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,Pt);const Gt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Z_(N,Gt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,nt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ge),N.deleteBuffer(nt),N.deleteSync(Gt),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,ue=0){const re=Math.pow(2,-ue),ae=Math.floor(C.image.width*re),Ge=Math.floor(C.image.height*re),Ze=Z!==null?Z.x:0,De=Z!==null?Z.y:0;w.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,ue,0,0,Ze,De,ae,Ge),_e.unbindTexture()};const In=N.createFramebuffer(),Xi=N.createFramebuffer();this.copyTextureToTexture=function(C,Z,ue=null,re=null,ae=0,Ge=0){let Ze,De,$e,ot,_t,mt,nt,Pt,Gt;const Wt=C.isCompressedTexture?C.mipmaps[Ge]:C.image;if(ue!==null)Ze=ue.max.x-ue.min.x,De=ue.max.y-ue.min.y,$e=ue.isBox3?ue.max.z-ue.min.z:1,ot=ue.min.x,_t=ue.min.y,mt=ue.isBox3?ue.min.z:0;else{const Yt=Math.pow(2,-ae);Ze=Math.floor(Wt.width*Yt),De=Math.floor(Wt.height*Yt),C.isDataArrayTexture?$e=Wt.depth:C.isData3DTexture?$e=Math.floor(Wt.depth*Yt):$e=1,ot=0,_t=0,mt=0}re!==null?(nt=re.x,Pt=re.y,Gt=re.z):(nt=0,Pt=0,Gt=0);const Ht=Y.convert(Z.format),rn=Y.convert(Z.type);let Ye;Z.isData3DTexture?(w.setTexture3D(Z,0),Ye=N.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(w.setTexture2DArray(Z,0),Ye=N.TEXTURE_2D_ARRAY):(w.setTexture2D(Z,0),Ye=N.TEXTURE_2D),_e.activeTexture(N.TEXTURE0),_e.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Z.flipY),_e.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),_e.pixelStorei(N.UNPACK_ALIGNMENT,Z.unpackAlignment);const fn=_e.getParameter(N.UNPACK_ROW_LENGTH),Et=_e.getParameter(N.UNPACK_IMAGE_HEIGHT),An=_e.getParameter(N.UNPACK_SKIP_PIXELS),En=_e.getParameter(N.UNPACK_SKIP_ROWS),Tt=_e.getParameter(N.UNPACK_SKIP_IMAGES);_e.pixelStorei(N.UNPACK_ROW_LENGTH,Wt.width),_e.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Wt.height),_e.pixelStorei(N.UNPACK_SKIP_PIXELS,ot),_e.pixelStorei(N.UNPACK_SKIP_ROWS,_t),_e.pixelStorei(N.UNPACK_SKIP_IMAGES,mt);const On=C.isDataArrayTexture||C.isData3DTexture,Ft=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const Yt=L.get(C),Ri=L.get(Z),Xt=L.get(Yt.__renderTarget),Pi=L.get(Ri.__renderTarget);_e.bindFramebuffer(N.READ_FRAMEBUFFER,Xt.__webglFramebuffer),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let ji=0;ji<$e;ji++)On&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,L.get(C).__webglTexture,ae,mt+ji),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,L.get(Z).__webglTexture,Ge,Gt+ji)),N.blitFramebuffer(ot,_t,Ze,De,nt,Pt,Ze,De,N.DEPTH_BUFFER_BIT,N.NEAREST);_e.bindFramebuffer(N.READ_FRAMEBUFFER,null),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(ae!==0||C.isRenderTargetTexture||L.has(C)){const Yt=L.get(C),Ri=L.get(Z);_e.bindFramebuffer(N.READ_FRAMEBUFFER,In),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,Xi);for(let Xt=0;Xt<$e;Xt++)On?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Yt.__webglTexture,ae,mt+Xt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Yt.__webglTexture,ae),Ft?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ri.__webglTexture,Ge,Gt+Xt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ri.__webglTexture,Ge),ae!==0?N.blitFramebuffer(ot,_t,Ze,De,nt,Pt,Ze,De,N.COLOR_BUFFER_BIT,N.NEAREST):Ft?N.copyTexSubImage3D(Ye,Ge,nt,Pt,Gt+Xt,ot,_t,Ze,De):N.copyTexSubImage2D(Ye,Ge,nt,Pt,ot,_t,Ze,De);_e.bindFramebuffer(N.READ_FRAMEBUFFER,null),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ft?C.isDataTexture||C.isData3DTexture?N.texSubImage3D(Ye,Ge,nt,Pt,Gt,Ze,De,$e,Ht,rn,Wt.data):Z.isCompressedArrayTexture?N.compressedTexSubImage3D(Ye,Ge,nt,Pt,Gt,Ze,De,$e,Ht,Wt.data):N.texSubImage3D(Ye,Ge,nt,Pt,Gt,Ze,De,$e,Ht,rn,Wt):C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ge,nt,Pt,Ze,De,Ht,rn,Wt.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ge,nt,Pt,Wt.width,Wt.height,Ht,Wt.data):N.texSubImage2D(N.TEXTURE_2D,Ge,nt,Pt,Ze,De,Ht,rn,Wt);_e.pixelStorei(N.UNPACK_ROW_LENGTH,fn),_e.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Et),_e.pixelStorei(N.UNPACK_SKIP_PIXELS,An),_e.pixelStorei(N.UNPACK_SKIP_ROWS,En),_e.pixelStorei(N.UNPACK_SKIP_IMAGES,Tt),Ge===0&&Z.generateMipmaps&&N.generateMipmap(Ye),_e.unbindTexture()},this.initRenderTarget=function(C){L.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),_e.unbindTexture()},this.resetState=function(){le=0,ce=0,q=null,_e.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}}function ua(s,e,t){const r=e/100,o=t/100,l=(1-Math.abs(2*o-1))*r,c=l*(1-Math.abs(s/60%2-1)),f=o-l/2;let d=0,h=0,g=0;s<60?[d,h,g]=[l,c,0]:s<120?[d,h,g]=[c,l,0]:s<180?[d,h,g]=[0,l,c]:s<240?[d,h,g]=[0,c,l]:s<300?[d,h,g]=[c,0,l]:[d,h,g]=[l,0,c];const x=m=>Math.round((m+f)*255).toString(16).padStart(2,"0");return`#${x(d)}${x(h)}${x(g)}`}function Yr(s,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[ua(s,e,50),"#FFFFFF",ua(s,e*.6,70),ua(s,e*.8,35)];const r=ua(s,e,50),o=ua((s+180)%360,e,50);return[r,o,r,o]}const $0=[1],ga=[0];let xv=0;const jE=new Set;function KE(s,e){for(let t=0;t<e.length;t++){const r=e[t]??1;$0[t]=r,ga[t]=(ga[t]??0)+s*r}for(const t of jE)ga[t]=(ga[t]??0)+s*($0[t]??1)}function qE(s){xv=s}function YE(){return ga[xv]??0}const oc=12,Wn=Math.PI*2;function _v(s,e){if(e<=0)return 0;const t=Math.min(2.2,10/e);return Math.min(e,1+Math.floor(s/t))}const Jl=[[[0,"#5ea733"],[.1,"#a9c97a"],[.17,"#efe6c6"],[.26,"#f2b2c5"],[.36,"#df4a67"],[.45,"#b81f3d"],[.53,"#1a0d33"],[.61,"#2e44d8"],[.7,"#5f78f0"],[.79,"#dfe4f4"],[.87,"#eee6c4"],[.94,"#9cc46c"],[1,"#5ea733"]],[[0,"#e0a82e"],[.1,"#f0cd7a"],[.17,"#f6ead0"],[.26,"#f6b49a"],[.36,"#e8573a"],[.45,"#b52a1c"],[.53,"#2a0a0c"],[.61,"#a8401c"],[.7,"#e8823e"],[.79,"#f7dcc4"],[.87,"#f4e8c8"],[.94,"#e9c060"],[1,"#e0a82e"]],[[0,"#1f9a8a"],[.1,"#86d1bf"],[.17,"#eaf2e2"],[.26,"#9fe3e8"],[.36,"#25b5d4"],[.45,"#13708f"],[.53,"#0b1430"],[.61,"#5a35c8"],[.7,"#9a7cf0"],[.79,"#e6e0f6"],[.87,"#e4f2ea"],[.94,"#5cc2a6"],[1,"#1f9a8a"]],[[0,"#2b3f8f"],[.1,"#7d8fd0"],[.17,"#eef0f6"],[.26,"#c9d0ea"],[.36,"#5266b8"],[.45,"#22307a"],[.53,"#070a1c"],[.61,"#26357e"],[.7,"#6a7cc6"],[.79,"#e8ebf5"],[.87,"#f4f3ee"],[.94,"#8a9ad6"],[1,"#2b3f8f"]]],QE=["Inflated","Paper","Line","Print"],JE=`
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
}`,ZE=`
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
}`,$E=0,ew=1,tw=2;function Ec(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(m=>m+m).join(""):e,r=(parseInt(t.slice(0,2),16)||0)/255,o=(parseInt(t.slice(2,4),16)||0)/255,l=(parseInt(t.slice(4,6),16)||0)/255,c=Math.max(r,o,l),f=Math.min(r,o,l),d=(c+f)/2;if(c===f)return[0,0,d];const h=c-f,g=d>.5?h/(2-c-f):h/(c+f);let x;return c===r?x=((o-l)/h+(o<l?6:0))*60:c===o?x=((l-r)/h+2)*60:x=((r-o)/h+4)*60,[x,g,d]}function yv(s,e,t){return`hsl(${(s%360+360)%360} ${Math.max(0,Math.min(1,e))*100}% ${t*100}%)`}const eg=Ec(Yr(245,100,"contrast")[0]);function Mv(s){const[e,t]=Ec(s[0]??"#000000");return t===0?{hue:0,sat:0}:{hue:e-eg[0],sat:t/(eg[1]||1)}}function tg(s,e){const t=document.createElement("canvas");t.width=512,t.height=1;const r=t.getContext("2d"),o=r.createLinearGradient(0,0,512,0);for(const[c,f]of s){const[d,h,g]=Ec(f);o.addColorStop(c,yv(d+e.hue,h*e.sat,g))}r.fillStyle=o,r.fillRect(0,0,512,1);const l=new ky(t);return l.wrapS=lc,l.magFilter=Rn,l.minFilter=Rn,l.generateMipmaps=!1,l}class Sv{constructor(){V(this,"textures");V(this,"turnKey","#reference");V(this,"palFrom",0);V(this,"palTo",0);V(this,"palMix",1);V(this,"styleUniform",{value:0});V(this,"turn",{hue:0,sat:1});this.textures=Jl.map(e=>tg(e,{hue:0,sat:1}))}shared(){return{uPalA:{value:this.textures[0]},uPalB:{value:this.textures[0]},uPalMix:{value:0},uT:{value:0},uOff:{value:0},uWA:{value:0},uWB:{value:0},uWC:{value:0},uDepth:{value:.32},uSpec:{value:.16},uCenter:{value:new J}}}material(e,t,r={}){return new gi({vertexShader:JE,fragmentShader:ZE,side:Hi,uniforms:{...t,uStyle:this.styleUniform,uMode:{value:e},uAng:{value:0},uWS:{value:1},...r}})}update(e,t,r,o,l=0){this.styleUniform.value=Math.max(0,Math.min(QE.length-1,Math.round(l)));const c=e[0]??"";if(c!==this.turnKey){this.turnKey=c;const d=Mv(e);this.turn=d;const h=this.textures;this.textures=Jl.map(g=>tg(g,d));for(const g of h)g.dispose()}const f=Math.max(0,Math.min(Jl.length-1,Math.round(t)));o&&(this.palFrom=this.palTo=f,this.palMix=1),f!==this.palTo&&(this.palFrom=this.palMix<.5?this.palFrom:this.palTo,this.palTo=f,this.palMix=0),this.palMix=Math.min(1,this.palMix+r)}apply(e,t,r){e.uPalA.value=this.textures[this.palFrom],e.uPalB.value=this.textures[this.palTo],e.uPalMix.value=this.palMix,e.uDepth.value=t,e.uSpec.value=r}backdrop(e,t,r,o){const l=this.styleUniform.value;if(l===0){Ev(e,t,r,o);return}const c=Math.max(0,Math.min(1,o));if(e.globalCompositeOperation="source-over",e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,t,r),l===2||c<=0)return;const f=Jl[this.palTo],d=f.find(([m])=>m===(l===1?.53:.17))??f[0],[h,g,x]=Ec(d[1]);e.globalAlpha=c,e.fillStyle=yv(h+this.turn.hue,g*this.turn.sat,l===1?x*1.25:x),e.fillRect(0,0,t,r),e.globalAlpha=1}dispose(){for(const e of this.textures)e.dispose();this.textures=[]}}function Av(s,e,t){const r=e/t,o=30,l=Math.tan(o/2*Math.PI/180),c=r<16/9?2*Math.atan(l*(16/9)/r)*180/Math.PI:o;(s.aspect!==r||s.fov!==c)&&(s.aspect=r,s.fov=c,s.updateProjectionMatrix())}function Ev(s,e,t,r){const o=Math.max(0,Math.min(1,r)),l=c=>{const f=parseInt(c.slice(1),16),d=Math.round((f>>16&255)*o),h=Math.round((f>>8&255)*o),g=Math.round((f&255)*o);return`rgb(${d},${h},${g})`};if(s.globalCompositeOperation="source-over",s.globalAlpha=1,o<=0)s.fillStyle="#000";else{const c=s.createLinearGradient(0,0,0,t);c.addColorStop(0,l("#8e94a2")),c.addColorStop(.2,l("#bfc3d0")),c.addColorStop(.42,l("#dde1ec")),c.addColorStop(.68,l("#d9dde9")),c.addColorStop(1,l("#9ea2af")),s.fillStyle=c}s.fillRect(0,0,e,t)}function cd(s){const e=new vv({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"});return e.setPixelRatio(1),e.setClearColor(0,0),e}function ud(s,e,t,r){s.fillStyle="#000",s.fillRect(0,0,e,t),s.fillStyle="rgba(255,255,255,0.4)",s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText(`${r} NEEDS WEBGL`,e/2,t/2)}class Ts{constructor(e){V(this,"dt",1/60);V(this,"step",0);V(this,"openness");V(this,"aim",{x:0,y:0});V(this,"spread",.4);V(this,"depth",.35);V(this,"turn",0);V(this,"pinch",0);V(this,"fist",0);V(this,"clapped",!1);V(this,"clapStrength",0);V(this,"wasClapping",!1);V(this,"burst",0);V(this,"bump",0);V(this,"bass",0);V(this,"mid",0);V(this,"high",0);V(this,"kick",0);V(this,"snare",0);V(this,"hat",0);V(this,"energy",.5);V(this,"build",0);V(this,"drop",0);V(this,"bright",.5);V(this,"lastClock",null);V(this,"lastFrame",0);this.rest=e,this.openness=e}read(e,t){const r=performance.now(),o=this.lastFrame?Math.min(.1,(r-this.lastFrame)/1e3):1/60;this.lastFrame=r;const l=YE();this.step=this.lastClock===null?0:Math.max(-.2,Math.min(.2,l-this.lastClock)),this.lastClock=l,this.dt=o;const c=[e.left,e.right].filter(Boolean);let f=this.rest;if(c.length){const E=Math.max(...c.map(P=>P.gesture==="fist"?0:P.fingerCount??3));f=Math.max(0,Math.min(1,E/5))}this.openness+=(f-this.openness)*(1-Math.exp(-o*5));let d=0,h=0;c.length&&(d=(c.reduce((E,P)=>E+P.position.x,0)/c.length-.5)*2,h=(.5-c.reduce((E,P)=>E+P.position.y,0)/c.length)*2);const g=1-Math.exp(-o*4);this.aim.x+=(d-this.aim.x)*g,this.aim.y+=(h-this.aim.y)*g,this.spread+=((e.distanceBetweenHands??.4)-this.spread)*g;const x=c.map(E=>E.depth).filter(E=>E!==void 0);this.depth+=((x.length?Math.max(...x):.35)-this.depth)*g;const m=e.twist??(c.length===1?c[0].angle??0:0);this.turn+=(m-this.turn)*g;const _=c.length?Math.max(...c.map(E=>E.pinch??0)):0;this.pinch+=(_-this.pinch)*(1-Math.exp(-o*10));const S=c.length?Math.max(...c.map(E=>E.openness!==void 0?1-E.openness:E.gesture==="fist"?1:0)):0;this.fist+=(Math.min(1,Math.max(0,(S-.35)/.4))-this.fist)*(1-Math.exp(-o*8));const T=!!e.clapping&&!e.synthetic;this.clapped=T&&!this.wasClapping,this.clapStrength=this.clapped?Math.max(.6,e.clapIntensity??1):0,this.wasClapping=T;const y=e.clapping?e.clapIntensity??1:0;this.burst=Math.max(this.burst*Math.exp(-o*2.2),y);const M=(E,P,R,H)=>E+(P-E)*(1-Math.exp(-o*(P>E?R:H)));this.bass=M(this.bass,(t==null?void 0:t.bass)??0,6,1.5),this.mid=M(this.mid,(t==null?void 0:t.mid)??0,4,1),this.high=M(this.high,(t==null?void 0:t.high)??0,8,2.5),this.bump*=Math.exp(-o/.07),t!=null&&t.beat&&(this.bump=Math.max(this.bump,t.beatIntensity||1)),this.kick=(t==null?void 0:t.kick)??0,this.bump=Math.max(this.bump,this.kick*.9),this.snare=(t==null?void 0:t.snare)??0,this.hat=(t==null?void 0:t.hat)??0,this.energy=M(this.energy,t!=null&&t.live?t.energy??.5:.5,1,1),this.build=(t==null?void 0:t.build)??0,this.drop=(t==null?void 0:t.drop)??0,this.bright=M(this.bright,(t==null?void 0:t.bright)??.5,1,1)}}class nw{constructor(e,t){V(this,"canvas");V(this,"ctx");V(this,"cfg",Wm);V(this,"playing",new Ts(.6));V(this,"n",0);V(this,"x",new Float32Array(0));V(this,"y",new Float32Array(0));V(this,"z",new Float32Array(0));V(this,"vx",new Float32Array(0));V(this,"vy",new Float32Array(0));V(this,"light",new Float32Array(0));V(this,"phase",new Float32Array(0));V(this,"time",0);V(this,"events",[]);V(this,"lastKick",0);V(this,"lastSnare",0);V(this,"lastHat",0);V(this,"kicks",0);V(this,"flow",[Math.random()*10,Math.random()*10,Math.random()*10]);V(this,"flowTo",[...this.flow]);V(this,"gather",0);V(this,"breath",0);V(this,"grain",document.createElement("canvas"));V(this,"aspect",16/9);this.canvas=e,this.ctx=t,this.grain.width=this.grain.height=256;const r=this.grain.getContext("2d"),o=r.createImageData(256,256);for(let l=0;l<o.data.length;l+=4){const c=Math.random()<.5?0:255;o.data[l]=o.data[l+1]=o.data[l+2]=c,o.data[l+3]=Math.random()<.35?255:0}r.putImageData(o,0,0)}setParams(e){this.cfg=Es(Wm,e)}resize(e){const t=Math.min(this.n,e),r=o=>{const l=new Float32Array(e);return l.set(o.subarray(0,t)),l};this.x=r(this.x),this.y=r(this.y),this.z=r(this.z),this.vx=r(this.vx),this.vy=r(this.vy),this.light=r(this.light),this.phase=r(this.phase);for(let o=t;o<e;o++)this.x[o]=Math.random()*this.aspect,this.y[o]=Math.random(),this.z[o]=.25+.75*Math.pow(Math.random(),2.2),this.phase[o]=Math.random()*Math.PI*2,this.light[o]=0;this.n=e}angleAt(e,t,r){const[o,l,c]=this.flow;return Math.sin(e*1.3+o+r*.05)*1.7+Math.cos(t*1.7-l+r*.04)*1.5+Math.sin((e+t)*.8+c)*1.2}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;this.aspect=f/d;const h=this.aspect,g=this.playing;g.read(e,r);const x=Math.min(.1,g.dt),m=Math.min(.08,Math.max(0,g.step));this.time+=m;const _=Math.max(50,Math.min(6e3,Math.round(c.field.count)));_!==this.n&&this.resize(_);const S=!!(r!=null&&r.live),T=k=>1-Math.exp(-x*k),y=Math.max(g.kick,g.bump)*c.sound.beat;if(y>.45&&this.lastKick<=.45){this.kicks+=1;const k=Math.random(),ee=(.5+.6*Math.random())*Math.min(1.4,y),D=k<.5?0:k<.82?1:2;this.events.push({kind:D,x:Math.random()*h,y:.1+.8*Math.random(),age:0,strength:ee,angle:Math.random()*Math.PI,reach:.2+.5*Math.random()}),this.kicks%(6+Math.floor(Math.random()*6))===0&&(this.flowTo=this.flowTo.map(B=>B+(Math.random()-.5)*4))}this.lastKick=y;const M=(k,ee)=>{for(let D=0;D<k;D++){const B=Math.floor(Math.random()*this.n);this.light[B]=Math.max(this.light[B],ee)}},E=g.snare*c.sound.sparks;E>.5&&this.lastSnare<=.5&&M(Math.round(this.n*.012),1.1),this.lastSnare=E;const P=g.hat*c.sound.sparks;if(P>.5&&this.lastHat<=.5&&M(Math.round(this.n*.004),.7),this.lastHat=P,Math.random()<x*.35*(S?c.sound.quiet:1)&&this.events.push({kind:0,x:Math.random()*h,y:Math.random(),age:0,strength:.45,angle:0,reach:.4}),g.clapped&&c.hands.clap>0)for(let k=0;k<this.n;k++){this.light[k]=Math.max(this.light[k],1.2*c.hands.clap);const ee=this.x[k]-h/2,D=this.y[k]-.5,B=Math.hypot(ee,D)+.05;this.vx[k]+=ee/B*.25*c.hands.clap,this.vy[k]+=D/B*.25*c.hands.clap}this.breath+=(g.bass*c.sound.bass-this.breath)*T(4);for(let k=0;k<3;k++)this.flow[k]+=(this.flowTo[k]-this.flow[k])*T(.3);const H=!e.synthetic?[e.left,e.right].filter(k=>!!k):[],I=H.length?g.fist:0,O=Math.max(Math.min(1,c.form.circle),I*Math.min(1,c.hands.reach));this.gather+=(O-this.gather)*T(O>this.gather?.9:.6);const A=.018*c.field.drift,U=this.time,K=h/2,z=.5,j=.3,le=U*.04,ce=Math.exp(-x*2.2);for(let k=0;k<this.n;k++){const ee=this.z[k],D=this.angleAt(this.x[k],this.y[k],U);let B=this.x[k]+(Math.cos(D)*A*ee+this.vx[k])*m,ve=this.y[k]+(Math.sin(D)*A*ee+this.vy[k])*m;B+=(B-K)*this.breath*.004*ee,ve+=(ve-z)*this.breath*.004*ee;for(const we of H){const me=we.position.x*h,X=we.position.y,ie=B-me,se=ve-X,be=ie*ie+se*se,Ie=Math.exp(-be/.02)*(1-I)*c.hands.reach;if(Ie>.01){const ye=Math.sqrt(be)+.01;B+=ie/ye*Ie*.006,ve+=se/ye*Ie*.006,this.light[k]=Math.max(this.light[k],Ie*.9)}}if(this.gather>.002){const we=this.phase[k]+le,me=j*(.94+.12*(k*.618%1))*(1+.06*this.breath),X=K+Math.cos(we)*me,ie=z+Math.sin(we)*me,se=this.gather*this.gather*T(1.6);B+=(X-B)*se,ve+=(ie-ve)*se}B<-.02?B+=h+.04:B>h+.02&&(B-=h+.04),ve<-.02?ve+=1.04:ve>1.02&&(ve-=1.04),this.x[k]=B,this.y[k]=ve,this.vx[k]*=ce,this.vy[k]*=ce,this.light[k]*=Math.exp(-x*(1.6+.8*Math.random()))}for(const k of this.events){k.age+=x;const ee=k.age*.55;for(let D=0;D<this.n;D++){const B=this.x[D]-k.x,ve=this.y[D]-k.y;let we=0;if(k.kind===0){const me=Math.hypot(B,ve)-ee;we=Math.exp(-(me*me)/.0012)}else if(k.kind===1)k.age<x*1.5&&Math.hypot(B,ve)<k.reach*.6&&Math.random()<.35&&(we=.6+Math.random()*.6);else{const me=Math.cos(k.angle),X=Math.sin(k.angle),ie=B*-X+ve*me-(k.age-.6)*.08;we=Math.exp(-(ie*ie)/25e-5)*(Math.abs(B*me+ve*X)<k.age*1.4?1:0)}we>.02&&(this.light[D]=Math.max(this.light[D],1.6*we*k.strength*(1-k.age/2.2)))}}this.events=this.events.filter(k=>k.age<2.2),l.globalCompositeOperation="source-over",l.globalAlpha=1-.92*Math.max(0,Math.min(1,c.look.trail)),l.fillStyle="#000",l.fillRect(0,0,f,d),l.globalAlpha=1;const q=8,te=[];for(let k=0;k<q;k++)te.push(new Path2D);const W=Math.max(.6,d/720*1.6*c.field.size),F=.2*c.look.glow;for(let k=0;k<this.n;k++){const ee=this.z[k],D=.6+.4*Math.sin(U*.7+this.phase[k]*5),B=Math.min(1,(F*D+this.light[k])*(.35+.65*ee)+.2*this.gather*ee);if(B<.03)continue;const ve=Math.min(q-1,Math.floor(B*q)),we=W*(.5+ee)*(1+.6*Math.min(1,this.light[k]));te[ve].rect(this.x[k]*d-we/2,this.y[k]*d-we/2,we,we)}for(let k=0;k<q;k++)l.globalAlpha=(k+.5)/q,l.fillStyle="#fff",l.fill(te[k]);if(c.look.grain>.01){l.globalCompositeOperation="lighter",l.globalAlpha=.05*c.look.grain;const k=Math.floor(Math.random()*256),ee=Math.floor(Math.random()*256),D=l.createPattern(this.grain,"repeat");D&&(l.save(),l.translate(-k,-ee),l.fillStyle=D,l.fillRect(k,ee,f,d),l.restore())}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const ng={line:{count:14,weight:1,wave:1,birth:1,zoom:1,speed:1},hands:{open:1,pull:1,clap:1},sound:{beat:1,bass:1,grow:1}},ig=110,iw=5;function rg(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class rw{constructor(e,t){V(this,"canvas");V(this,"ctx");V(this,"cfg",ng);V(this,"playing",new Ts(.5));V(this,"age",0);V(this,"time",0);V(this,"unfold",0);V(this,"breath",0);V(this,"shiver",0);V(this,"pulses",[]);V(this,"lastKick",0);V(this,"hand",{x:.5,y:.5,hold:0});V(this,"idle",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Es(ng,e)}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=Math.max(0,h.step);this.age+=x,this.time+=x*Math.max(0,c.line.speed),this.idle+=g;const m=k=>1-Math.exp(-g*k),_=[e.left,e.right].filter(Boolean),S=_.length>0&&!e.synthetic,T=!!(r!=null&&r.live);let y;S?y=(1-h.fist)*c.hands.open:T?y=(.12+.88*h.energy)*c.sound.grow:y=.35+.3*Math.sin(this.idle*.21),this.unfold+=(Math.min(1,Math.max(0,y))-this.unfold)*m(S?5:.8),this.breath+=(h.bass*c.sound.bass-this.breath)*m(3),h.clapped&&(this.shiver=Math.min(1.4,h.clapStrength*1.3*c.hands.clap)),this.shiver*=Math.exp(-g*2.4);const M=Math.max(h.kick,h.bump)*c.sound.beat;M>.45&&this.lastKick<=.45&&(this.pulses.push({at:0,strength:Math.min(1.2,M)}),this.pulses.length>iw&&this.pulses.shift()),this.lastKick=M;for(const k of this.pulses)k.at+=g*.75;if(this.pulses=this.pulses.filter(k=>k.at<.75),_.length){const k=_.reduce((D,B)=>D+B.position.x,0)/_.length,ee=_.reduce((D,B)=>D+B.position.y,0)/_.length;this.hand.x+=(k-this.hand.x)*m(8),this.hand.y+=(ee-this.hand.y)*m(8)}this.hand.hold+=((S?c.hands.pull:0)-this.hand.hold)*m(4);const E=c.line.birth,P=E<=0?1:Math.min(1,Math.max(0,(this.age-1.6*E)/(5*E))),R=P*P*(3-2*P),H=E<=0?0:Math.max(0,1-this.age/(2.4*E));l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,d);const I=Math.max(1,Math.round(c.line.count)),[O,A,U]=rg(t[0]??"#8899ff"),[K,z,j]=rg(t[2]??t[1]??"#ffffff"),le=Math.max(.1,c.line.zoom),ce=d*le,q=d/720*le,te=ce*.74*this.unfold*(1+.12*this.breath),W=c.line.wave,F=this.time;if(l.lineCap="round",l.lineJoin="round",l.globalCompositeOperation="lighter",H>.01){const k=(3+2.5*Math.sin(this.idle*2.2))*q*(1+this.breath);l.globalAlpha=Math.min(1,H*1.4),l.fillStyle="#fff",l.beginPath(),l.arc(f/2,d/2,Math.max(1,k),0,Math.PI*2),l.fill()}if(R>.002){const k=.5-.5*R,ee=.5+.5*R;for(let D=0;D<I;D++){const B=I===1?0:D/(I-1)*2-1,ve=B*2.6*this.unfold,we=this.shiver*Math.sin(D*12.9898)*43758.5453,me=(we-Math.floor(we)-.5)*this.shiver*ce*.09;l.beginPath();let X=0,ie=0;for(let Xe=0;Xe<=ig;Xe++){const tt=k+(ee-k)*(Xe/ig),it=Math.sin(Math.PI*tt);let ut=d/2+B*te*.5;ut+=(Math.sin(tt*6.2+F*.55+ve)*.6+Math.sin(tt*13.7-F*.38+ve*1.7)*.25)*ce*.035*W*it*(.35+.65*this.unfold+this.breath*.6),ut+=me*it*Math.sin(tt*20+D);for(const xe of this.pulses){const N=Math.abs(tt-.5)-xe.at;ut-=Math.exp(-(N*N)/.0016)*xe.strength*ce*.05*(1-xe.at/.75)*(B===0?1:Math.sign(B)*-1)}if(this.hand.hold>.01){const xe=tt-this.hand.x,N=Math.exp(-(xe*xe)/.022)*Math.min(1,this.hand.hold)*.85;ut+=(this.hand.y*d-ut)*N}const pt=tt*f;Xe===0?l.moveTo(pt,ut):l.quadraticCurveTo(X,ie,(X+pt)/2,(ie+ut)/2),X=pt,ie=ut}l.lineTo(X,ie);const se=Math.abs(B)*this.unfold,be=Math.round(255+(O+(K-O)*(B*.5+.5)-255)*se),Ie=Math.round(255+(A+(z-A)*(B*.5+.5)-255)*se),ye=Math.round(255+(U+(j-U)*(B*.5+.5)-255)*se),Ke=1/(1+(I-1)*(1-this.unfold)),We=c.line.weight*q*(1+.35*M);l.strokeStyle=`rgb(${be},${Ie},${ye})`,l.globalAlpha=Math.min(1,.16*Ke*2.2),l.lineWidth=7*We,l.stroke(),l.globalAlpha=Math.min(1,.95*Math.max(Ke,.3+.7*this.unfold)),l.lineWidth=1.5*We,l.stroke()}}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const sg={colour:{speed:1,offset:0,palette:0,depth:.32},field:{count:3,zoom:1,sway:1,bounce:0,drift:.2,backdrop:1,return:1},hands:{wind:1,release:1,follow:1,clap:1},sound:{wind:1,gust:1,mid:1,high:1}};function fd(s,e){s.traverse(t=>{if(t instanceof Fn||t instanceof Hh||t instanceof rv){t.geometry.dispose();const r=t.material;Array.isArray(r)?r.forEach(o=>o.dispose()):r.dispose()}}),s.clear(),e.dispose(),e.forceContextLoss()}const sw="/assets/dandelion-hJsSsoAd.bin";let fa=null;function ow(){return fa||(fa=fetch(sw).then(s=>{if(!s.ok)throw new Error(`dandelion.bin: ${s.status}`);return s.arrayBuffer()}).then(aw),fa.catch(()=>{fa=null})),fa}function aw(s){const e=new DataView(s);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="DNDL")throw new Error("Not a dandelion file");const r=e.getUint32(4,!0),o=JSON.parse(new TextDecoder().decode(new Uint8Array(s,8,r))),l=8+r,c=(X,ie)=>new Float32Array(s.slice(l+X,l+X+ie*4)),f=(X,ie)=>new Int8Array(s.slice(l+X,l+X+ie)),d=(X,ie)=>new Uint8Array(s.slice(l+X,l+X+ie)),h=(X,ie)=>new Uint32Array(s.slice(l+X,l+X+ie*4)),g=X=>{const ie=o.parts[X],se=c(ie.pos,ie.count*3),be=f(ie.nrm,ie.count*3),Ie=new Float32Array(ie.count*3);for(let ye=0;ye<Ie.length;ye++)Ie[ye]=be[ye]/127;return{p:ie,position:se,normal:Ie,index:h(ie.idx,ie.index)}},x=["stem","base","bracts"].map(g);let m=0,_=0;for(const X of x)m+=X.p.count,_+=X.index.length;const S=new Float32Array(m*3),T=new Float32Array(m*3),y=new Float32Array(m),M=new Uint32Array(_);let E=0;{let X=0,ie=0;x.forEach((se,be)=>{S.set(se.position,X*3),T.set(se.normal,X*3),y.fill(be===0?0:1,X,X+se.p.count);for(let Ie=0;Ie<se.index.length;Ie++)M[ie+Ie]=se.index[Ie]+X;if(be===0)for(let Ie=1;Ie<se.position.length;Ie+=3)E=Math.min(E,se.position[Ie]);X+=se.p.count,ie+=se.index.length})}const P=new ln;P.setAttribute("position",new kt(S,3)),P.setAttribute("normal",new kt(T,3)),P.setAttribute("aRigid",new kt(y,1)),P.setIndex(new kt(M,1));const R=o.seeds,H=c(R.pivot,R.count*3),I=c(R.axis,R.count*3),O=g("achenes"),A=d(o.parts.achenes.seed,O.p.count),U=new Float32Array(O.p.count),K=new Float32Array(O.p.count*3);for(let X=0;X<O.p.count;X++){const ie=A[X];U[X]=ie,K[X*3]=H[ie*3],K[X*3+1]=H[ie*3+1],K[X*3+2]=H[ie*3+2]}const z=new ln;z.setAttribute("position",new kt(O.position,3)),z.setAttribute("normal",new kt(O.normal,3)),z.setAttribute("aSeed",new kt(U,1)),z.setAttribute("aPivot",new kt(K,3)),z.setIndex(new kt(O.index,1));const j=R.segments,le=c(R.a,j*3),ce=c(R.b,j*3),q=d(R.seed,j),te=c(R.ta,j),W=c(R.tb,j),F=new Float32Array(j*4*3),k=new Float32Array(j*4*3),ee=new Float32Array(j*4*3),D=new Float32Array(j*4*2),B=new Float32Array(j*4),ve=new Float32Array(j*4),we=new Uint32Array(j*6);for(let X=0;X<j;X++){const ie=q[X];for(let be=0;be<4;be++){const Ie=X*4+be;F.set(le.subarray(X*3,X*3+3),Ie*3),k.set(ce.subarray(X*3,X*3+3),Ie*3),ee.set(H.subarray(ie*3,ie*3+3),Ie*3);const ye=be>>1,Ke=be&1?1:-1;D[Ie*2]=ye,D[Ie*2+1]=Ke,B[Ie]=ie,ve[Ie]=ye?W[X]:te[X]}const se=X*4;we.set([se,se+1,se+2,se+2,se+1,se+3],X*6)}const me=new ln;me.setAttribute("position",new kt(F,3)),me.setAttribute("aB",new kt(k,3)),me.setAttribute("aPivot",new kt(ee,3)),me.setAttribute("aCorner",new kt(D,2)),me.setAttribute("aSeed",new kt(B,1)),me.setAttribute("aT",new kt(ve,1)),me.setIndex(new kt(we,1));for(const X of[P,z,me])X.boundingSphere=new So(new J(0,-5,0),1e4);return{body:P,achenes:z,strokes:me,seeds:R.count,pivot:H,axis:I,foot:E}}const fo=20,Hf=[1.4,3.2],Vf=[2.6,4.6],Ea=`
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
`,lw=`
${Ea}
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
}`,og=`
${Ea}
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
}`,cw=`
${Ea}
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
}`,uw=`
${Ea}
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
}`,fw=`
${Ea}
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
}`;function Gf(s,e){let t=0,r=1/e;for(;s>0;)t+=s%e*r,s=Math.floor(s/e),r/=e;return t}function zi(s){const e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)}const Wf=Array.from({length:fo},(s,e)=>({x:e===0?0:Gf(e+1,2)*2-1,z:e===0?0:-4.6+Gf(e,3)*6,y:e===0?.3:-.4+Gf(e,5)*1.9,k:e===0?1:.85+zi(e)*.3,yaw:zi(e+40)*Wn,ph:zi(e+80)*Wn,off:e*.137%1}));class hw{constructor(e,t,r=null){V(this,"canvas");V(this,"ctx");V(this,"cfg",sg);V(this,"surface");V(this,"renderer",null);V(this,"host");V(this,"scene");V(this,"camera");V(this,"group",new Wi);V(this,"depth",0);V(this,"scale",1);V(this,"look",null);V(this,"playing",new Ts(.5));V(this,"failed",!1);V(this,"model",null);V(this,"flowers",[]);V(this,"materials",[]);V(this,"started",!1);V(this,"since",0);V(this,"seedTex",null);V(this,"seedData",new Float32Array(0));V(this,"off",new Float32Array(0));V(this,"vel",new Float32Array(0));V(this,"turn",new Float32Array(0));V(this,"hold",new Float32Array(0));V(this,"away",new Uint8Array(0));V(this,"thresh",new Float32Array(0));V(this,"flight",new Float32Array(0));V(this,"dest",new Float32Array(0));V(this,"phase",new Float32Array(0));V(this,"motionTime",0);V(this,"colourTime",0);V(this,"gust",0);V(this,"lastBeat",!1);V(this,"lastClap",!1);V(this,"hop",0);V(this,"dance",0);V(this,"sinceClap",99);V(this,"lastAim",{x:0,y:0});V(this,"swipe",new Dt);V(this,"present",0);V(this,"strokeWidth",null);V(this,"viewport",null);V(this,"time",null);this.canvas=e,this.ctx=t,this.host=r,this.scene=r?r.scene:new yc,this.camera=r?r.camera:new oi(30,16/9,.1,200),this.surface=document.createElement("canvas");try{r||(this.renderer=cd(this.surface)),this.look=r?r.look:new Sv}catch(o){console.error("Dandelion could not start:",o),this.failed=!0;return}ow().then(o=>{this.look&&this.build(o)}).catch(o=>{console.error("Dandelion model failed to load:",o),this.failed=!0})}setParams(e){this.cfg=Es(sg,e)}isReady(){return this.model!==null||this.failed}build(e){const t=this.look,r=e.seeds,o=r*fo;this.seedData=new Float32Array(r*2*fo*4),this.seedTex=new tv(this.seedData,r*2,fo,bi,Gi),this.seedTex.magFilter=xn,this.seedTex.minFilter=xn,this.seedTex.needsUpdate=!0,this.off=new Float32Array(o*3),this.vel=new Float32Array(o*3),this.turn=new Float32Array(o*4);for(let g=0;g<o;g++)this.turn[g*4+3]=1;this.hold=new Float32Array(o),this.away=new Uint8Array(o),this.thresh=new Float32Array(o),this.flight=new Float32Array(o),this.dest=new Float32Array(o*3),this.phase=new Float32Array(o);for(let g=0;g<o;g++)this.thresh[g]=.12+zi(g*3.7+1)*1,this.phase[g]=zi(g*1.3+7)*Wn;const l={value:new Dt(1,1)},c={value:0},f={value:e.foot},d={value:this.seedTex},h={value:1.5};this.strokeWidth=h,this.viewport=l,this.time=c;for(let g=0;g<fo;g++){const x=t.shared(),m={uBend:{value:new J},uWave:{value:new Dt},uWavePhase:{value:0},uRow:{value:g},uShimmer:{value:0}},_={...x,...m,uViewport:l,uTime:c,uFoot:f,uSeeds:d},S=(M,E,P={})=>{const R=new gi({vertexShader:M,fragmentShader:E,uniforms:{..._,...P},side:Hi});return this.materials.push(R),R},T=new Wi;T.add(new Fn(e.body,S(lw,og))),T.add(new Fn(e.achenes,S(cw,og)));const y=S(uw,fw,{uWidth:h});y.transparent=!0,y.depthWrite=!1,T.add(new Fn(e.strokes,y));for(const M of T.children)M.frustumCulled=!1;T.visible=!1,this.group.add(T),this.flowers.push({root:T,shared:x,u:m,presence:0,at:new J,size:1,placed:!1,bend:new Dt})}this.scene.add(this.group),this.model=e}pickDestination(e,t,r){const o=-4+Math.random()*6,l=(15.5-o)*t;this.dest[e*3]=(Math.random()*2-1)*l*r*.92,this.dest[e*3+1]=.1+(Math.random()*1.75-.85)*l,this.dest[e*3+2]=o}destroy(){var e,t;this.host||(e=this.look)==null||e.dispose(),this.look=null,(t=this.seedTex)==null||t.dispose();for(const r of this.materials)r.dispose();for(const r of this.flowers)r.root.clear();this.scene.remove(this.group),this.renderer&&fd(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const d=this.renderer;if(this.failed||!d||!this.look){ud(o,c,f,"DANDELION");return}Ev(o,c,f,l.field.backdrop),this.model&&(Av(this.camera,c,f),this.camera.position.set(0,.5,15.5/Math.max(.3,l.field.zoom)),this.camera.lookAt(0,.1,0),this.update(e,t,r,c,f),(this.surface.width!==c||this.surface.height!==f)&&d.setSize(c,f,!1),d.render(this.scene,this.camera),o.drawImage(this.surface,0,0,c,f))}update(e,t,r,o,l){const{cfg:c}=this,f=this.look,d=this.model;if(!f||!d||this.failed)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=Math.max(0,h.step),m=e.left||e.right?1:0;this.present+=(m-this.present)*(1-Math.exp(-g*3));const _=Math.min(1,((r==null?void 0:r.overall)??0)*1.4)*c.sound.wind;this.motionTime+=x,this.colourTime+=(x*c.colour.speed*(1+h.mid*c.sound.mid*1.2)+g*h.burst*c.hands.clap*.9)/oc;const S=this.motionTime,T=!!(r!=null&&r.beat),y=T&&!this.lastBeat,M=y&&c.sound.gust>0;this.hop=Math.max(this.hop*Math.exp(-g*5),y?(r==null?void 0:r.beatIntensity)||1:0),this.dance+=x,this.lastBeat=T,M&&(this.gust=Math.max(this.gust,((r==null?void 0:r.beatIntensity)||1)*c.sound.gust)),this.gust*=Math.exp(-g*2.5);const E=!!e.clapping&&c.hands.clap>0,P=E&&!this.lastClap;this.lastClap=E,this.sinceClap+=g;const R=Math.min(1,this.sinceClap/4)**3;P&&(this.sinceClap=0);const H=h.aim.x-this.lastAim.x,I=h.aim.y-this.lastAim.y;this.lastAim={x:h.aim.x,y:h.aim.y};const O=m?H/Math.max(g,.001):0,A=m?I/Math.max(g,.001):0;this.swipe.x+=(O-this.swipe.x)*(1-Math.exp(-g*6)),this.swipe.y+=(A-this.swipe.y)*(1-Math.exp(-g*6));const U=.5*Math.sin(S*.11)+.25*Math.sin(S*.27+1.3),K=.25+_*1.6+this.gust*1.2,z=new J(Math.cos(U)*K,.15*Math.sin(S*.19),Math.sin(U)*K*.4);z.x+=lf.clamp(this.swipe.x,-4,4)*1.6*c.hands.wind,z.y+=lf.clamp(this.swipe.y,-4,4)*1*c.hands.wind;const j=m?lf.clamp((h.openness-.6)/.4,-1,1)*c.hands.release:0,le=c.field.drift,ce=Math.min(1,le*2),q=Math.sqrt(Math.min(1,3/Math.max(1,Math.round(c.field.count)))),te=Math.min(.72,q*(le*(.25+_*.45)+j*.3*this.present*ce)),W=R*Math.min(1,c.hands.clap)*ce*q,F=Math.max(.25,c.field.return??1),k=Math.min(1,te*5),ee=m&&h.openness<.15&&c.hands.release>0,D=!this.started;this.host||f.update(t,c.colour.palette,g,D);const B=Math.tan(this.camera.fov/2*Math.PI/180),ve=o/l,we=Math.max(0,Math.min(fo,Math.round(c.field.count))),me=Math.max(1,we);this.since+=g;const X=_v(this.since,we),ie=2.2*Math.pow(me,-.42)*this.scale;let se=0;for(let Se=0;Se<me;Se++)se+=Wf[Se].x;se/=me;let be=0;for(let Se=0;Se<me;Se++)be=Math.max(be,Math.abs(Wf[Se].x-se));const Ie=new J(h.aim.x*5.2,.1+h.aim.y*3,2),ye=1.2*Math.max(.4,1+(h.spread-.4)*1.6),Ke=d.seeds,We=new J,Xe=new nr,tt=new nr,it=new nr,ut=new J,pt=new J(0,1,0),xe=new J(1,0,0),N=this.seedData;this.flowers.forEach((Se,He)=>{const Qe=Wf[He],_e=He<X;if(Se.presence+=((_e?1:0)-Se.presence)*(1-Math.exp(-g*1.4)),D&&(Se.presence=0),!_e&&Se.presence<.004&&(Se.presence=0),Se.root.visible=Se.presence>.002,!Se.root.visible){Se.placed=!1,this.off.fill(0,He*Ke*3,(He+1)*Ke*3),this.vel.fill(0,He*Ke*3,(He+1)*Ke*3),this.away.fill(0,He*Ke,(He+1)*Ke),this.flight.fill(0,He*Ke,(He+1)*Ke);return}const Rt=ie*Qe.k,L=(me===1?0:Qe.z)+this.depth,w=(15.5-L)*B*ve,ne=me===1?0:(Qe.x-se)/Math.max(.5,be)*w*(.66+.24*Math.min(1,(me-1)/12)),Me=.1-(15.5-L)*B,Te=.1+(15.5-L)*B;let Re=me===1?Qe.y:Qe.y*Math.min(1,.5+me*.1);Re=Math.min(Re,Me-d.foot*Rt-.4,Te-Rt*1.5),We.set(ne,Re,L),Se.placed||(Se.at.copy(We),Se.size=Rt,Se.placed=!0),Se.at.lerp(We,1-Math.exp(-g*1.2)),Se.size+=(Rt-Se.size)*(1-Math.exp(-g*1.2));const Oe=1-Math.pow(1-Se.presence,3);Se.root.position.set(Se.at.x,Se.at.y-(1-Oe)*-d.foot*Se.size*.8,Se.at.z),Se.root.rotation.y=Qe.yaw,Se.root.scale.setScalar(Se.size*(.6+.4*Oe));const pe=Se.root.scale.x,ge=Math.cos(Qe.yaw),Ve=Math.sin(Qe.yaw),je=this.dance,Ne=Se.at.x*.35,Fe=c.field.sway*(.45+_*1),dt=Fe*(.85*Math.sin(Wn*je/5.2-Ne+Qe.ph*.3)+.15*Math.sin(Wn*je/3.3+Qe.ph*1.7))+z.x*.22+this.gust*.5,Mt=Fe*.3*Math.sin(Wn*je/7.1+Qe.ph*2.3)+z.z*.22;Se.bend.x+=(dt-Se.bend.x)*(1-Math.exp(-g*1.6)),Se.bend.y+=(Mt-Se.bend.y)*(1-Math.exp(-g*1.6));const At=Se.bend.x,Y=Se.bend.y;Se.u.uBend.value.set(At*ge-Y*Ve,0,At*Ve+Y*ge);const Ae=c.field.sway*(.12+_*.3);Se.u.uWave.value.set(Ae*ge,Ae*Ve),Se.u.uWavePhase.value=Wn*je/1.6-Ne*2+Qe.ph;const he=c.field.bounce*Se.size*((.08+_*.22)*Math.sin(Wn*je/1.2-Ne+Qe.ph)+.3*this.hop*(.6+.4*zi(He+7)));Se.root.position.y+=he,Se.u.uShimmer.value=h.high*c.sound.high*2;const ke=Se.root.position.x+At*pe,Pe=Se.root.position.y,Ee=Se.root.position.z+Y*pe;for(let rt=0;rt<Ke;rt++){const st=He*Ke+rt,xt=st*3;P&&zi(st*1.37+S*7.3)<W?this.hold[st]=(Vf[0]+zi(st+S)*(Vf[1]-Vf[0]))/F:M&&zi(st*.71+S*13.1)<.008*c.sound.gust*le*q&&(this.hold[st]=(Hf[0]+zi(st+S*3.1)*(Hf[1]-Hf[0]))/F),this.hold[st]=Math.max(0,this.hold[st]-g);const Zt=.06*k*Math.sin(S*.37+this.phase[st]);ee&&(this.flight[st]=0);const cn=!ee&&(this.hold[st]>0||this.flight[st]>0||te+Zt>this.thresh[st]),jn=d.pivot[rt*3],Ci=d.pivot[rt*3+1],li=d.pivot[rt*3+2],ci=d.axis[rt*3],Kn=d.axis[rt*3+1],vi=d.axis[rt*3+2],sr=ci*ge+vi*Ve,qn=-ci*Ve+vi*ge;if(cn&&!this.away[st]){this.flight[st]=(6+Math.random()*6)/F,this.pickDestination(st,B,ve);const C=.4+(P&&this.hold[st]>0?3.2*c.hands.clap*R:0);this.vel[xt]+=sr*C,this.vel[xt+1]+=Kn*C+.2,this.vel[xt+2]+=qn*C}this.away[st]=cn?1:0;let un=this.off[xt],Pn=this.off[xt+1],pn=this.off[xt+2],Mn=this.vel[xt],Sn=this.vel[xt+1],lt=this.vel[xt+2];if(x>0||cn){const C=Math.max(x,0),Z=ke+(jn*ge+li*Ve)*pe+un,ue=Pe+Ci*pe+Pn,re=Ee+(-jn*Ve+li*ge)*pe+pn,ae=Math.sin(ue*.9+S*.7+this.phase[st])*.6,Ge=Math.sin(Z*.7-S*.5+this.phase[st]*.5)*.45,Ze=Math.sin(re*.8+Z*.5+S*.6)*.4;if(cn){this.flight[st]=Math.max(0,this.flight[st]-C);const De=st*3;let $e=this.dest[De]-Z,ot=this.dest[De+1]-ue,_t=this.dest[De+2]-re;const mt=Math.hypot($e,ot,_t);mt<.8&&this.pickDestination(st,B,ve);const nt=(1.2+.9*zi(st*2.9))*Math.min(1,mt/2);$e=$e/Math.max(mt,.001)*nt,ot=ot/Math.max(mt,.001)*nt,_t=_t/Math.max(mt,.001)*nt;let Pt=($e-Mn)*.7+z.x*.3+ae*.8,Gt=(ot-Sn)*.7+z.y*.3+Ge*.8+.05,Wt=(_t-lt)*.7+z.z*.3+Ze*.6;if(this.present>.01&&c.hands.follow>0){const An=Ie.x-Z,En=Ie.y-ue,Tt=Ie.z-re,On=Math.hypot(An,En,Tt)+.001,Ft=this.present*c.hands.follow*Math.min(1,On/ye-.6);Pt+=An/On*Ft*2.2-En/On*this.present*c.hands.follow*1.4,Gt+=En/On*Ft*2.2+An/On*this.present*c.hands.follow*1.4,Wt+=Tt/On*Ft*1.2}const Ht=(15.5-re)*B,rn=Ht*ve,Ye=Math.abs(Z)-rn*1.02;Ye>0&&(Pt-=Math.sign(Z)*Ye*1.5);const fn=Math.abs(ue-.1)-Ht*1.02;fn>0&&(Gt-=Math.sign(ue-.1)*fn*1.5),re>6&&(Wt-=(re-6)*1.5),re<-8&&(Wt+=(-8-re)*1.5),Mn+=Pt*C*1.6,Sn+=Gt*C*1.6,lt+=Wt*C*1.6;const Et=Math.exp(-C*.5);Mn*=Et,Sn*=Et,lt*=Et}else{const De=Math.hypot(un,Pn,pn),$e=Math.min(1.8*F,De*.9*F)/Math.max(De,1e-4),ot=-un*$e+ae*Math.min(1,De)*.6,_t=-Pn*$e+Ge*Math.min(1,De)*.6,mt=-pn*$e+Ze*Math.min(1,De)*.6,nt=1-Math.exp(-C*2.4);Mn+=(ot-Mn)*nt,Sn+=(_t-Sn)*nt,lt+=(mt-lt)*nt,De<.004&&Math.hypot(Mn,Sn,lt)<.02&&(un=Pn=pn=Mn=Sn=lt=0)}un+=Mn*C,Pn+=Sn*C,pn+=lt*C}this.off[xt]=un,this.off[xt+1]=Pn,this.off[xt+2]=pn,this.vel[xt]=Mn,this.vel[xt+1]=Sn,this.vel[xt+2]=lt;const Kt=Math.hypot(un,Pn,pn)/pe,mn=Math.min(1,Kt/.8),Ln=this.turn.subarray(st*4,st*4+4);if(Xe.set(Ln[0],Ln[1],Ln[2],Ln[3]),mn>.001){ut.set(ci,Kn,vi),it.setFromUnitVectors(ut,pt);const C=S*.6+this.phase[st];tt.setFromAxisAngle(pt,C),it.premultiply(tt),tt.setFromAxisAngle(xe,.3*Math.sin(S*1.3+this.phase[st]*2)),it.premultiply(tt),tt.identity().slerp(it,mn),Xe.slerp(tt,1-Math.exp(-g*3))}else Xe.slerp(tt.identity(),1-Math.exp(-g*6));Ln[0]=Xe.x,Ln[1]=Xe.y,Ln[2]=Xe.z,Ln[3]=Xe.w;const Nt=(He*Ke*2+rt*2)*4,In=(un*ge-pn*Ve)/pe,Xi=(un*Ve+pn*ge)/pe;N[Nt]=In,N[Nt+1]=Pn/pe,N[Nt+2]=Xi,N[Nt+3]=1-Math.min(1,Kt/.6),N[Nt+4]=Xe.x,N[Nt+5]=Xe.y,N[Nt+6]=Xe.z,N[Nt+7]=Xe.w}const Je=Se.shared;Je.uT.value=this.colourTime,Je.uOff.value=Qe.off+c.colour.offset,f.apply(Je,c.colour.depth,.16*(1+h.high*c.sound.high*2))}),this.started=!0,this.seedTex.needsUpdate=!0,this.viewport.value.set(o,l),this.time.value=S,this.strokeWidth.value=Math.max(1,l/620)}}const ag={colour:{speed:1,offset:0,palette:0,style:0,depth:.32},swarm:{count:4,zoom:1,height:0,size:1,drift:1,pulse:1,tentacles:1,backdrop:1,arrival:5},hands:{follow:1,spread:1,clap:1},sound:{beat:1,bass:1,mid:1,high:1,flow:1,swell:0}};class dw{constructor(e,t,r=120,o=20){V(this,"mesh");V(this,"curve");V(this,"position");V(this,"normal");V(this,"points",[]);V(this,"tangents",[]);this.anchors=t,this.length=r,this.sides=o,this.curve=new Hy(t,!1,"centripetal");const l=(r+1)*(o+1),c=new ln;this.position=new kt(new Float32Array(l*3),3),this.normal=new kt(new Float32Array(l*3),3),this.position.setUsage(Zm),this.normal.setUsage(Zm);const f=new Float32Array(l*2),d=[];for(let h=0;h<=r;h++)for(let g=0;g<=o;g++){const x=h*(o+1)+g;if(f[x*2]=h/r,f[x*2+1]=g/o,h<r&&g<o){const m=x,_=x+o+1;d.push(m,_,m+1,_,_+1,m+1)}}c.setAttribute("position",this.position),c.setAttribute("normal",this.normal),c.setAttribute("uv",new kt(f,2)),c.setIndex(d);for(let h=0;h<=r;h++)this.points.push(new J),this.tangents.push(new J);this.mesh=new Fn(c,e),this.mesh.frustumCulled=!1}update(e,t=1){const{curve:r,points:o,tangents:l,length:c,sides:f}=this;r.updateArcLengths();for(let S=0;S<=c;S++)r.getPointAt(S/c,o[S]);for(let S=0;S<=c;S++){const T=o[Math.max(0,S-1)],y=o[Math.min(c,S+1)];l[S].subVectors(y,T).normalize()}const d=new J,h=new J,g=new J,x=l[0];d.set(0,0,1).addScaledVector(x,-x.z),d.lengthSq()<1e-6&&d.set(1,0,0).addScaledVector(x,-x.x),d.normalize();const m=this.position.array,_=this.normal.array;for(let S=0;S<=c;S++){const T=l[S];d.addScaledVector(T,-d.dot(T)).normalize(),h.crossVectors(T,d);const y=o[S],M=e*(1+(t-1)*(S/c));for(let E=0;E<=f;E++){const P=E/f*Wn;g.copy(d).multiplyScalar(-Math.cos(P)).addScaledVector(h,Math.sin(P));const R=(S*(f+1)+E)*3;m[R]=y.x+g.x*M,m[R+1]=y.y+g.y*M,m[R+2]=y.z+g.z*M,_[R]=g.x,_[R+1]=g.y,_[R+2]=g.z}}this.position.needsUpdate=!0,this.normal.needsUpdate=!0}}const lg=9,Zl=8,cg=4,$l=9,ug=[{c:[.2,.9,0],a:[1.6,.5,.8],s:1.25,off:0,ph:0,pulses:6},{c:[-3.9,1.5,-1.2],a:[1.2,.6,.8],s:1,off:.37,ph:2.1,pulses:7},{c:[4.1,.4,-.8],a:[1.1,.7,.6],s:1.05,off:.71,ph:4,pulses:5},{c:[-2,-.9,1.2],a:[1.4,.4,.5],s:.8,off:.18,ph:1,pulses:8},{c:[2.4,2.4,-3],a:[1.3,.5,.8],s:.85,off:.55,ph:3.2,pulses:6},{c:[-5.6,-.4,-2.6],a:[.9,.6,.6],s:.8,off:.86,ph:5,pulses:7},{c:[5.8,2,-4],a:[.8,.5,.6],s:.7,off:.28,ph:.6,pulses:9},{c:[-.6,2.7,-5],a:[1.6,.4,.8],s:.7,off:.63,ph:2.7,pulses:8}],pw=[[],[0],[1,2],[0,1,2],[0,1,2,3],[0,1,2,3,4],[0,1,2,3,4,5],[0,1,2,3,4,5,6],[0,1,2,3,4,5,6,7]],Xf=.62,mw=.55;function fg(s,e,t=new J){return t.set(Math.sin(s)*.86*Math.cos(e),-.86*Math.sin(e)+.04,Math.cos(s)*.86*Math.cos(e))}function gw(s){const e=(s/Wn%1+1)%1;return e<.22?Math.sin(e/.22*(Math.PI/2)):.5+.5*Math.cos((e-.22)/.78*Math.PI)}class vw{constructor(e,t,r=null){V(this,"canvas");V(this,"ctx");V(this,"cfg",ag);V(this,"host");V(this,"surface");V(this,"renderer",null);V(this,"scene");V(this,"camera");V(this,"look",null);V(this,"group",new Wi);V(this,"swarm",[]);V(this,"geometries",[]);V(this,"failed",!1);V(this,"playing",new Ts(.6));V(this,"motionTime",0);V(this,"pace",1);V(this,"handHold",0);V(this,"colourTime",0);V(this,"started",!1);V(this,"since",0);V(this,"current",0);V(this,"carry",0);V(this,"swell",0);V(this,"bassAvg",0);this.canvas=e,this.ctx=t,this.host=r,this.surface=document.createElement("canvas"),this.scene=r?r.scene:new yc,this.camera=r?r.camera:new oi(30,16/9,.1,100);try{r||(this.renderer=cd(this.surface)),this.look=r?r.look:new Sv,this.build(this.look)}catch(o){console.error("Jellyfish could not start:",o),this.failed=!0}}setParams(e){this.cfg=Es(ag,e)}build(e){const t=new vc(1,44,30),r=new vc(1,40,26);this.geometries.push(t,r),this.scene.add(this.group);for(const o of ug){const l=e.shared(),c=e.shared(),f=new Wi;this.group.add(f);const d=[],h=[];for(let _=0;_<lg;_++){const S=_/lg*Wn,T=new Wi;T.rotation.y=S;const y=new Wi;y.rotation.x=Xf,T.add(y);const M=new Fn(t,e.material($E,l,{uAng:{value:S}}));M.scale.set(.42,.18,.52),M.position.set(0,_*5%3*.02,.48),y.add(M),f.add(T),d.push(y),h.push(M)}const g=new Fn(r,e.material(tw,l));g.scale.set(.44,.26,.44),g.position.y=-.1,f.add(g);const x=[],m=e.material(ew,c,{uWS:{value:.6}});for(let _=0;_<Zl+cg;_++){const S=_>=Zl,T=S?(_-Zl)/cg*Wn+.4:_/Zl*Wn+.2,y=S?new J(Math.sin(T)*.08,-.25,Math.cos(T)*.08):fg(T,Xf),M=Array.from({length:$l},()=>new J),E=new dw(m,M,S?48:64,S?10:6);this.group.add(E.mesh),x.push({tube:E,from:y,links:M,angle:S?null:T,link:S?.2:.42,radius:S?.085:.028,phase:T*1.7+_})}this.swarm.push({spec:o,root:f,tilts:d,lobes:h,cap:g,strands:x,shared:l,strandShared:c,presence:0,beat:o.ph,lift:0,rise:0,pull:new J,up:new J(0,1,0),last:null,primed:!1})}}destroy(){var e;this.host||(e=this.look)==null||e.dispose(),this.look=null;for(const t of this.geometries)t.dispose();this.host?(this.scene.remove(this.group),this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())})):this.renderer&&fd(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const d=this.renderer;if(this.failed||!d||!this.look){ud(o,c,f,"JELLYFISH");return}Av(this.camera,c,f);const h=-l.swarm.height*4.5;this.camera.position.set(0,.5+h,15.5/Math.max(.3,l.swarm.zoom)),this.camera.lookAt(0,.1+h,0),this.update(e,t,r),(this.surface.width!==c||this.surface.height!==f)&&d.setSize(c,f,!1),d.render(this.scene,this.camera),this.look.backdrop(o,c,f,l.swarm.backdrop),o.drawImage(this.surface,0,0,c,f)}update(e,t,r){const{cfg:o}=this,l=this.look;if(!l||this.failed)return;const c=this.playing;c.read(e,r);const{dt:f}=c;this.pace+=(Math.max(0,c.step)-this.pace)*(1-Math.exp(-f*.6));const d=this.pace*.6,h=c.burst*o.hands.clap,g=c.bump*o.sound.beat,x=!e.synthetic&&(e.left||e.right)?1:0;this.handHold+=(x-this.handHold)*(1-Math.exp(-f*3)),this.motionTime+=d,this.colourTime+=(d*o.colour.speed*(1+c.mid*o.sound.mid*1.2)+f*h*.9)/oc;const m=this.motionTime,_=Wn*m/oc,S=Math.max(0,Math.min(8,Math.round(o.swarm.count))),T=!this.started;this.host||l.update(t,o.colour.palette,f,T,o.colour.style),this.since+=f;const y=new Set(pw[S].slice(0,_v(this.since*.55*(5/Math.max(1,o.swarm.arrival)),S)));T&&(this.started=!0,this.swarm.forEach(F=>{F.presence=0}));const M=r!=null&&r.live?r.bass:0,E=Math.max(0,M-this.bassAvg-.12);this.bassAvg+=(M-this.bassAvg)*(1-Math.exp(-f*.5));const P=Math.min(1,E*2.2)*o.sound.swell;this.swell+=(P-this.swell)*(1-Math.exp(-f*(P>this.swell?2.5:.45)));const R=(x?Math.max(.3,1+(c.spread-.4)*o.hands.spread*1.6):1)*(1+this.swell*.9),H=new J(c.aim.x*4.6,c.aim.y*2.1,0).multiplyScalar(o.hands.follow*x),I=o.swarm.drift*(1+c.bass*o.sound.bass*.8),A=!!(r!=null&&r.live)?.35+.65*c.energy+.4*c.mid:.35;this.carry+=(o.sound.flow*A-this.carry)*(1-Math.exp(-f*.35)),this.current+=d*(.18+.5*this.carry);const U=.16*(1+c.high*o.sound.high*2.5),K=1+c.high*o.sound.high*1.5,z=o.swarm.size,j=new J,le=new nr,ce=new J(0,1,0),q=new J,te=new J,W=new J;this.swarm.forEach((F,k)=>{const ee=y.has(k)?1:0;F.presence=ee>F.presence?Math.min(ee,F.presence+f/Math.max(1,o.swarm.arrival)):Math.max(ee,F.presence-f/3),F.presence<.004&&ee===0&&(F.presence=0);const D=F.presence>.002;F.root.visible=D;for(const Se of F.strands)Se.tube.mesh.visible=D;if(!D){F.last=null,F.primed=!1;return}const B=F.spec;F.beat+=d*Wn*(B.pulses/oc)+f*h*Wn*1.5;const ve=gw(F.beat),we=Math.min(1.3,Math.max(ve,g*.7)+h*.4),me=(F.grip??0)+(c.fist-(F.grip??0))*(1-Math.exp(-f*(7-k*.7))),X=Math.max(0,(me-(F.gripWas??me))/Math.max(f,.001));F.gripWas=me,F.grip=me;const ie=this.handHold,se=(we*(1-ie)+me*ie)*o.swarm.pulse,be=(Math.min(1.3,ve+g*.15+h*.4+this.swell*.5)*(1-ie)+Math.min(1.3,X*.35)*ie)*o.swarm.pulse,Ie=F.presence*F.presence;F.rise+=(be*1.5*Ie-F.rise*1.2)*f,F.lift+=(F.rise-F.lift*.35)*f*.8,j.set(B.c[0]*R+B.a[0]*I*Math.sin(_+B.ph),B.c[1]*Math.min(1.4,R)+B.a[1]*I*Math.sin(2*_+B.ph*1.7),B.c[2]+B.a[2]*I*Math.cos(_+B.ph*.6));const ye=this.current-k*.35;j.x+=Math.sin(ye+B.ph*.5)*.9*this.carry,j.y+=Math.sin(ye*.63+B.ph)*.3*this.carry,j.z+=Math.cos(ye*.8+B.ph*1.3)*.5*this.carry;const Ke=.8+1.6*(1-k/ug.length);F.pull.lerp(H,1-Math.exp(-f*Ke)),j.add(F.pull),h>.001&&(q.set(j.x,j.y-.5,0),q.lengthSq()<.01&&q.set(k%2?1:-1,.4,0),j.addScaledVector(q.normalize(),h*2.6));{const Se=F.presence,He=.15+.85*Se*Se*Se,Qe=B.c[0]*R,_e=B.c[2];j.x=Qe+(j.x-Qe)*He,j.z=_e+(j.z-_e)*He}if(F.last){q.subVectors(j,F.last).divideScalar(Math.max(f,.001));const Se=new J(q.x*.12,1,q.z*.08).normalize();F.up.lerp(Se,1-Math.exp(-f*1.5)).normalize()}F.last=(F.last??new J).copy(j),j.addScaledVector(F.up,F.lift-.6);const We=F.presence,Xe=We*We*We*(We*(We*6-15)+10);j.y-=(1-Xe)*7,j.y-=.9;const tt=B.s*z*(.3+.7*Xe)*(1+c.bass*o.sound.bass*.08+g*.04);{const Se=this.camera.position,He=Math.tan(this.camera.fov*Math.PI/360)*Math.max(1,Se.z-j.z),_e=Se.y+He-1.5*tt-.8;j.y>_e&&(j.y=_e+.8*(1-Math.exp(-(j.y-_e)/.8)))}F.root.position.copy(j),le.setFromUnitVectors(ce,F.up),F.root.quaternion.copy(le),F.root.rotateY(Math.sin(_+B.ph)*.4*F.presence),F.root.scale.setScalar(tt);const it=Xf+mw*se;for(const Se of F.tilts)Se.rotation.x=it;for(const Se of F.lobes)Se.scale.y=.18*(1-.18*se);F.cap.scale.set(.44*(1-.2*se),.26*(1+.08*se),.44*(1-.2*se)),F.root.updateMatrix();const ut=o.swarm.tentacles,pt=F.up.clone().negate();te.set(1,0,0).applyQuaternion(F.root.quaternion);for(const Se of F.strands){const He=Se.links;Se.angle!==null&&fg(Se.angle,it,Se.from);const Qe=He[0].copy(Se.from).applyMatrix4(F.root.matrix);if(!F.primed)for(let _e=1;_e<$l;_e++)He[_e].copy(Qe).addScaledVector(pt,Se.link*tt*ut*_e);for(let _e=1;_e<$l;_e++){const Rt=He[_e-1],L=He[_e];q.subVectors(L,Rt),q.lengthSq()<1e-8&&q.copy(pt),q.normalize().lerp(pt,.22+.1*se).normalize();const w=Math.sin(Se.phase+_*3*K-_e*.75)*.06*K*(_e/$l);q.addScaledVector(te,w).normalize(),L.copy(Rt).addScaledVector(q,Se.link*tt*ut)}Se.tube.update(Se.radius*tt,.25)}F.primed=!0;const xe=F.shared;xe.uT.value=this.colourTime,xe.uOff.value=B.off+o.colour.offset,xe.uWA.value=1,xe.uWB.value=.6,xe.uWC.value=.8+.4*Math.sin(_+B.ph);const N=F.strandShared;N.uT.value=this.colourTime,N.uOff.value=B.off+.15+o.colour.offset,l.apply(xe,o.colour.depth,U),l.apply(N,o.colour.depth,U)}),this.scene.updateMatrixWorld(!0),this.camera.updateMatrixWorld(!0);for(const F of this.swarm)F.root.visible&&(F.cap.getWorldPosition(W),W.applyMatrix4(this.camera.matrixWorldInverse),F.shared.uCenter.value.copy(W))}}const hg={grid:{detail:.5,field:.5,figure:.4,words:1,zoom:1},hands:{light:1,close:1,clap:1},sound:{beat:1,quiet:1}};let Wh=null,wv=0,ac=0;function xw(){ac++;let s=!1;return()=>{s||(s=!0,ac=Math.max(0,ac-1))}}function _w(){return ac>0}function yw(s,e,t){if(s.length<e*t)return;const r=new Uint8Array(e*t);for(let o=0;o<t;o++)for(let l=0;l<e;l++)r[o*e+l]=s[o*e+(e-1-l)];Wh={data:r,width:e,height:t},wv=performance.now()}const Mw=4e3;function Sw(){return Wh&&performance.now()-wv<Mw?Wh:null}function Aw(s,e,t){const r=Math.min(s.width-1.001,Math.max(0,e*(s.width-1))),o=Math.min(s.height-1.001,Math.max(0,t*(s.height-1))),l=Math.floor(r),c=Math.floor(o),f=r-l,d=o-c,h=c*s.width+l,g=s.data[h],x=s.data[h+1],m=s.data[h+s.width],_=s.data[h+s.width+1];return(g+(x-g)*f+(m-g)*d+(g-x-m+_)*f*d)/255}const ha=8;function dg(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class Ew{constructor(e,t){V(this,"canvas");V(this,"ctx");V(this,"cfg",hg);V(this,"playing",new Ts(.6));V(this,"lit",new Float32Array(0));V(this,"columns",0);V(this,"rows",0);V(this,"time",0);V(this,"real",0);V(this,"closed",0);V(this,"focus",{x:.89,y:.5});V(this,"rings",[]);V(this,"lastKick",0);V(this,"breath",0);V(this,"release",null);V(this,"glow",document.createElement("canvas"));V(this,"glowKey","");this.canvas=e,this.ctx=t}setParams(e){this.cfg=Es(hg,e)}destroy(){var e;(e=this.release)==null||e.call(this),this.release=null}tint(e){if(e===this.glowKey)return;this.glowKey=e;const[t,r,o]=dg(e);this.glow.width=this.glow.height=96;const l=this.glow.getContext("2d");l.clearRect(0,0,96,96);const c=l.createRadialGradient(48,48,0,48,48,48),f=d=>Math.round(d+(255-d)*.6);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.1,`rgba(${f(t)},${f(r)},${f(o)},0.9)`),c.addColorStop(.35,`rgba(${t},${r},${o},0.25)`),c.addColorStop(1,`rgba(${t},${r},${o},0)`),l.fillStyle=c,l.fillRect(0,0,96,96)}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=f/d,g=this.playing;g.read(e,r);const{dt:x}=g,m=Math.min(.08,Math.max(0,g.step));this.time+=m,this.real+=x;const _=ye=>1-Math.exp(-x*ye);this.tint(t[0]??"#8fb4ff"),c.grid.figure>.01&&!this.release&&(this.release=xw()),c.grid.figure<=.01&&this.release&&(this.release(),this.release=null);const S=Math.round(Math.max(8,Math.min(150,(22+34*Math.max(0,Math.min(1,c.grid.detail)))/Math.max(.2,c.grid.zoom)))),T=Math.round(S*h);(S!==this.rows||T!==this.columns)&&(this.rows=S,this.columns=T,this.lit=new Float32Array(S*T));const y=1/S,M=[e.left,e.right].filter(Boolean),E=M.length>0&&!e.synthetic;let P=M.map(ye=>{const Ke=ye.openness??(ye.gesture==="fist"?0:1),We=ye.depth??.35;return{x:ye.position.x*h,y:ye.position.y,reach:(.04+.19*Ke*Ke)*c.hands.light*(.8+.6*We),power:.85+.5*We}});if(P.length&&!E&&(P=[{x:P.reduce((ye,Ke)=>ye+Ke.x,0)/P.length,y:P.reduce((ye,Ke)=>ye+Ke.y,0)/P.length,reach:.13*c.hands.light,power:.7}]),P.length){const ye=P.reduce((We,Xe)=>We+Xe.x,0)/P.length,Ke=P.reduce((We,Xe)=>We+Xe.y,0)/P.length;this.focus.x+=(ye-this.focus.x)*_(6),this.focus.y+=(Ke-this.focus.y)*_(6)}else this.focus.x+=(h/2-this.focus.x)*_(.8),this.focus.y+=(.5-this.focus.y)*_(.8);const R=!!(r!=null&&r.live);let H=0;E?H=g.fist*c.hands.close:R&&(H=Math.max(0,Math.min(.8,(.3-g.energy)*3.2))*c.sound.quiet),this.closed+=(Math.min(1,H)-this.closed)*_(H>this.closed?1.7:2.6),g.clapped&&c.hands.clap>0&&(this.rings.push({x:this.focus.x,y:this.focus.y,at:0,strength:g.clapStrength*c.hands.clap}),this.closed*=.25);const I=(ye,Ke,We)=>{const Xe=Math.max(0,Math.min(1,(We-ye)/(Ke-ye)));return Xe*Xe*(3-2*Xe)},O=I(.04,.62,this.closed),A=I(.55,1,this.closed),U=Math.max(g.kick,g.bump)*c.sound.beat;U>.45&&this.lastKick<=.45&&(this.rings.push({x:this.focus.x,y:this.focus.y,at:0,strength:.16+.14*Math.min(1,U)}),this.rings.length>6&&this.rings.shift()),this.lastKick=U;for(const ye of this.rings)ye.at+=x;this.rings=this.rings.filter(ye=>ye.at<2.6),this.breath+=(g.bass-this.breath)*_(3);const K=this.release?Sw():null,z=c.grid.figure,j=c.grid.field,le=this.time,ce=this.lit,q=_(16),te=_(2.4),W=P[0],F=P[1];let k=0,ee=0,D=0;W&&F&&(k=F.x-W.x,ee=F.y-W.y,D=k*k+ee*ee);for(let ye=0;ye<S;ye++){const Ke=(ye+.5)*y;for(let We=0;We<T;We++){const Xe=(We+.5)*y;let tt=j*(.16+.07*Math.sin(Xe*2.1+Ke*1.3-le*.5)+.04*Math.sin(Xe*.9-Ke*2.7+le*.31));K&&z>.01&&(tt+=Aw(K,Xe/h,Ke)*.34*z);for(const ut of P){const pt=Xe-ut.x,xe=Ke-ut.y;tt+=ut.power*Math.exp(-(pt*pt+xe*xe)/(ut.reach*ut.reach))}if(D>1e-5){const ut=Math.max(0,Math.min(1,((Xe-W.x)*k+(Ke-W.y)*ee)/D)),pt=Math.hypot(Xe-(W.x+k*ut),Ke-(W.y+ee*ut));tt+=.55*Math.exp(-(pt*pt)/(y*y*.5))}for(const ut of this.rings){const pt=Math.hypot(Xe-ut.x,Ke-ut.y)-ut.at*.85;pt>-.09&&pt<.09&&(tt+=ut.strength*Math.exp(-(pt*pt)/.0011)*(1-ut.at/2.6))}const it=ye*T+We;ce[it]+=(tt-ce[it])*(tt>ce[it]?q:te)}}l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,d);const B=[];for(let ye=0;ye<ha;ye++)B.push(new Path2D);const ve=y*d,we=1+.18*this.breath,me=this.focus.x,X=this.focus.y;for(let ye=0;ye<S;ye++){if(O>.97&&ye%3!==0)continue;const Ke=(ye+.5)*y,We=(X+(Ke-X)*(1-O))*d;for(let Xe=0;Xe<T;Xe++){const tt=ce[ye*T+Xe];if(tt<.03)continue;const it=(Xe+.5)*y,ut=(me+(it-me)*(1-A))*d,pt=Math.min(ha-1,Math.floor(Math.min(.999,tt)*ha)),xe=ve*Math.min(.5,.07+.4*Math.min(1,tt))*we*(1-.45*O),N=B[pt];N.moveTo(ut+xe,We),N.arc(ut,We,xe,0,Math.PI*2)}}const[ie,se,be]=dg(t[0]??"#8fb4ff"),Ie=1-.82*O;for(let ye=0;ye<ha;ye++){const Ke=ye/(ha-1),We=(Xe,tt)=>{const it=tt+(255-tt)*Math.min(1,.35+Math.max(0,Ke*1.6-.6));return Math.round(Xe+(it-Xe)*Math.min(1,Ke*1.4))};l.fillStyle=`rgb(${We(150,ie)},${We(156,se)},${We(170,be)})`,l.globalAlpha=Math.min(1,(.3+.7*Ke)*Ie),l.fill(B[ye])}if(A>.02){const ye=ve*(2.4+5*A)*(1+.25*this.breath);l.globalCompositeOperation="lighter",l.globalAlpha=Math.min(1,A*1.2),l.drawImage(this.glow,me*d-ye,X*d-ye,ye*2,ye*2),l.globalCompositeOperation="source-over"}if(c.grid.words>.01){const ye=d/720,Ke=Math.max(9,Math.round(11*ye));l.font=`500 ${Ke}px ui-monospace, SFMono-Regular, Menlo, monospace`,l.textBaseline="alphabetic",l.textAlign="left";let We;this.closed>.9?We="standby":this.closed>.25?We="closing":E?We=P.length>1?"two hands":"one hand":We=R?"listening":"waiting";const Xe=ut=>Math.round(ut+(255-ut)*.7);l.fillStyle=`rgb(${Xe(ie)},${Xe(se)},${Xe(be)})`,l.globalAlpha=.6*c.grid.words;const tt=20*ye,it=d-20*ye;if(l.fillText(We,tt,it),Math.floor(this.real*1.6)%2===0){const ut=l.measureText(We).width;l.fillRect(tt+ut+5*ye,it-Ke*.82,Ke*.55,Ke)}}l.globalAlpha=1}}const pg={shape:{size:1,morph:.12,lobes:1,detail:4,style:2,steady:0},motion:{spin:1,flow:1,dust:.5,points:1400},hands:{shape:1,follow:.25,clap:1},sound:{bass:1,beat:1,spin:1,drop:1,squash:0}};class ww{constructor(e,t){V(this,"canvas");V(this,"ctx");V(this,"cfg",pg);V(this,"playing",new Ts(.6));V(this,"surface",document.createElement("canvas"));V(this,"scene",new yc);V(this,"camera",new oi(50,16/9,.1,100));V(this,"renderer");V(this,"group",new Wi);V(this,"corners",new Float32Array(0));V(this,"edges",new Uint32Array(0));V(this,"shaped",new Float32Array(0));V(this,"points",null);V(this,"lines",null);V(this,"builtDetail",-1);V(this,"wire");V(this,"dots");V(this,"dust");V(this,"time",0);V(this,"flow",0);V(this,"spin",0);V(this,"pull",0);V(this,"swell",0);V(this,"pulse",0);V(this,"burst",0);V(this,"lastDrop",0);V(this,"dent",0);V(this,"dentDir",new J(1,0,0));V(this,"lastSquash",0);V(this,"at",new Dt);this.canvas=e,this.ctx=t,this.renderer=new vv({canvas:this.surface,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(1),this.renderer.setClearColor(0,1),this.camera.position.set(0,0,7.5),this.camera.lookAt(0,0,0),this.scene.add(this.group),this.wire=new iv({color:6737151,transparent:!0,opacity:.85}),this.dots=new Bh({color:6737151,size:.09,transparent:!0,opacity:1,depthWrite:!1});const r=6e3,o=new Float32Array(r*3);for(let c=0;c<r;c++){const f=4+Math.random()*14,d=Math.random()*Math.PI*2,h=Math.random()*2-1,g=Math.sqrt(1-h*h);o.set([f*g*Math.cos(d),f*h,-Math.abs(f*g*Math.sin(d))-3],c*3)}const l=new ln;l.setAttribute("position",new kt(o,3)),this.dust=new Hh(l,new Bh({color:16777215,size:.03,transparent:!0,opacity:.5,depthWrite:!1})),this.scene.add(this.dust)}setParams(e){this.cfg=Es(pg,e)}build(e){this.points&&(this.group.remove(this.points,this.lines),this.points.geometry.dispose(),this.lines.geometry.dispose());const t=new ad(1,e),r=t.attributes.position.array,o=new Map,l=[],c=[];for(let m=0;m<r.length;m+=3){const _=`${r[m].toFixed(4)},${r[m+1].toFixed(4)},${r[m+2].toFixed(4)}`;let S=o.get(_);S===void 0&&(S=l.length/3,o.set(_,S),l.push(r[m],r[m+1],r[m+2])),c.push(S)}const f=new Set,d=[],h=l.length/3;for(let m=0;m<c.length;m+=3)for(const[_,S]of[[c[m],c[m+1]],[c[m+1],c[m+2]],[c[m+2],c[m]]]){const T=_<S?_*h+S:S*h+_;f.has(T)||(f.add(T),d.push(_,S))}t.dispose(),this.corners=Float32Array.from(l),this.shaped=new Float32Array(l.length),this.edges=Uint32Array.from(d);const g=new ln;g.setAttribute("position",new kt(this.shaped,3));const x=new ln;x.setAttribute("position",new kt(new Float32Array(d.length*2*3),3)),this.points=new Hh(g,this.dots),this.lines=new Oy(x,this.wire),this.points.frustumCulled=!1,this.lines.frustumCulled=!1,this.group.add(this.lines,this.points),this.builtDetail=e}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=Math.max(0,h.step),m=D=>1-Math.exp(-g*D);this.time+=x;const _=Math.max(2,Math.min(6,Math.round(c.shape.detail)));_!==this.builtDetail&&this.build(_);const S=[e.left,e.right],T=!e.synthetic&&S.some(Boolean),y=T?Math.max(h.fist,h.pinch):0;this.pull+=(y*c.hands.shape-this.pull)*m(4),this.swell+=(h.bass*c.sound.bass-this.swell)*m(5);const M=Math.max(h.kick,h.bump)*c.sound.beat;this.pulse=Math.max(this.pulse*Math.exp(-g*6),Math.min(1,M)),h.clapped&&c.hands.clap>0&&(this.burst=Math.max(this.burst,h.clapStrength*c.hands.clap)),h.drop>.5&&this.lastDrop<=.5&&(this.burst=Math.max(this.burst,.9*c.sound.drop));const E=Math.max(h.kick,h.bump);c.sound.squash>0&&E>.45&&this.lastSquash<=.45&&(this.dent=Math.max(this.dent,Math.min(1,E)*c.sound.squash),this.dentDir.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize()),this.lastSquash=E,this.dent*=Math.exp(-g*2.6),this.lastDrop=h.drop,this.burst*=Math.exp(-g*2.2);const P=c.shape.morph+.35*this.swell+.5*this.pull+.25*h.build;this.flow+=x*.35*c.motion.flow*(1+this.swell);const R=1.1*Math.max(.3,c.shape.lobes),H=this.flow,I=this.corners,O=this.shaped;let A=0;for(let D=0;D<I.length;D+=3){const B=I[D],ve=I[D+1],we=I[D+2],me=Math.sin(B*R*1.7+H)*.5+Math.sin(ve*R*2.1-H*.8+1.3)*.35+Math.sin((B+we)*R*1.4+H*1.3+2.1)*.3+Math.sin((ve-we)*R*2.6-H*.6)*.15*(.5+this.pull),X=Math.max(0,B*this.dentDir.x+ve*this.dentDir.y+we*this.dentDir.z),ie=1+me*P+this.pulse*.08*(.6+.4*Math.sin(ve*3+H))+this.burst*.6*(.7+.3*me)-this.dent*.35*X*X;O[D]=B*ie,O[D+1]=ve*ie,O[D+2]=we*ie,A+=Math.max(0,ie)}if(c.shape.steady>0){const D=A/Math.max(1,I.length/3),B=1+(1/Math.max(.3,D)-1)*Math.min(1,c.shape.steady);for(let ve=0;ve<O.length;ve++)O[ve]*=B}this.points.geometry.attributes.position.needsUpdate=!0;const U=Math.max(0,Math.min(2,c.shape.style)),K=.5*Math.min(1,U/2),z=this.lines.geometry.attributes.position,j=z.array,le=this.edges;for(let D=0,B=0;D<le.length;D+=2){const ve=le[D]*3,we=le[D+1]*3,me=O[ve],X=O[ve+1],ie=O[ve+2],se=O[we],be=O[we+1],Ie=O[we+2];j[B++]=me,j[B++]=X,j[B++]=ie,j[B++]=me+(se-me)*K,j[B++]=X+(be-X)*K,j[B++]=ie+(Ie-ie)*K,j[B++]=se,j[B++]=be,j[B++]=Ie,j[B++]=se+(me-se)*K,j[B++]=be+(X-be)*K,j[B++]=Ie+(ie-Ie)*K}z.needsUpdate=!0,this.lines.visible=K>.004,this.spin+=x*.35*c.motion.spin*(1+c.sound.spin*(.8*h.mid+.6*h.energy)),this.group.rotation.set(.35+Math.sin(this.time*.13)*.25,this.spin,Math.sin(this.time*.09)*.2);const ce=T?c.hands.follow:c.hands.follow*.3;this.at.x+=(h.aim.x*2.2*ce-this.at.x)*m(2),this.at.y+=(h.aim.y*1.3*ce-this.at.y)*m(2),this.group.position.set(this.at.x,this.at.y,0),this.group.scale.setScalar(1.6*Math.max(.2,c.shape.size)*(1+.05*this.pulse));const q=Math.min(1,U/2),te=new zt(t[0]??"#66ccff"),W=new zt(t[1]??t[0]??"#3300ff"),F=te.clone().lerp(new zt(1,1,1),.25+.4*this.pulse);this.wire.color.copy(F),this.dots.color.copy(F.clone().lerp(W,.3)),this.dots.size=(.08+.05*this.pulse)*(1-.35*q),this.dots.opacity=1,this.wire.opacity=.55+.4*Math.min(1,this.swell+this.pulse);const k=this.dust.material;k.opacity=Math.max(0,Math.min(1,c.motion.dust));const ee=Math.max(0,Math.min(6e3,Math.round(c.motion.points)));this.dust.geometry.setDrawRange(0,ee),this.dust.visible=c.motion.dust>.01&&ee>0,this.dust.rotation.y=-this.time*.03,(this.surface.width!==f||this.surface.height!==d)&&this.renderer.setSize(f,d,!1),this.camera.aspect=f/d,this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera),l.globalCompositeOperation="source-over",l.globalAlpha=1,l.drawImage(this.surface,0,0,f,d)}destroy(){fd(this.scene,this.renderer)}}const mg={look:{flow:1,zoom:1,detail:1,veins:1,grain:.5},hands:{follow:1,clap:1},sound:{beat:1,bass:1}},Tw=`
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,bw=`
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
}`;class Cw{constructor(e,t,r){V(this,"canvas");V(this,"ctx");V(this,"cfg",mg);V(this,"surface",document.createElement("canvas"));V(this,"renderer",null);V(this,"failed",!1);V(this,"scene",new yc);V(this,"camera",new ld(-1,1,1,-1,0,2));V(this,"material");V(this,"geometry");V(this,"playing",new Ts(.6));V(this,"time",0);V(this,"kick",0);V(this,"breath",0);V(this,"hand",new J);V(this,"drops",Array.from({length:8},()=>new nn(0,0,-99,0)));V(this,"nextDrop",0);V(this,"lastDrop",-99);V(this,"lastBurst",0);V(this,"style");this.style=r,this.canvas=e,this.ctx=t,this.geometry=new ln,this.geometry.setAttribute("position",new kt(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),this.material=new gi({vertexShader:Tw,fragmentShader:bw,depthTest:!1,depthWrite:!1,uniforms:{uRes:{value:new Dt(1,1)},uTime:{value:0},uReal:{value:0},uStyle:{value:0},uFlow:{value:1},uDetail:{value:1},uVeins:{value:1},uGrain:{value:.5},uBass:{value:0},uKick:{value:0},uBurst:{value:0},uTurn:{value:0},uZoom:{value:1},uHand:{value:new J},uDrops:{value:Array.from({length:8},()=>new nn(0,0,-99,0))}}});const o=new Fn(this.geometry,this.material);o.frustumCulled=!1,this.scene.add(o);try{this.renderer=cd(this.surface)}catch(l){console.error("Macro could not start:",l),this.failed=!0}}setParams(e){this.cfg=Es(mg,e)}destroy(){var e,t;this.geometry.dispose(),this.material.dispose(),(e=this.renderer)==null||e.dispose(),(t=this.renderer)==null||t.forceContextLoss(),this.renderer=null}render(e,t,r){const o=this.canvas.width,l=this.canvas.height;if(o===0||l===0)return;const c=this.renderer;if(this.failed||!c){ud(this.ctx,o,l,"MACRO");return}const{cfg:f}=this,d=this.playing;d.read(e,r);const{dt:h}=d;this.time+=Math.max(0,d.step)*3,this.kick=Math.max(this.kick*Math.exp(-h*5),d.bump*f.sound.beat),this.breath+=(d.bass*f.sound.bass-this.breath)*(1-Math.exp(-h*3));const g=e.left||e.right?1:0,x=1-Math.exp(-h*3);if(this.hand.x+=((d.aim.x+1)/2-this.hand.x)*x,this.hand.y+=((d.aim.y+1)/2-this.hand.y)*x,this.hand.z+=(g*f.hands.follow-this.hand.z)*x,this.style===4){const _=this.time*f.look.flow,S=o/l,T=(P,R,H)=>{this.drops[this.nextDrop].set(P,R,_,H),this.nextDrop=(this.nextDrop+1)%this.drops.length,this.lastDrop=_},y=()=>[(Math.random()-.5)*S*.8,(Math.random()-.5)*.8],M=()=>[(this.hand.x-.5)*S/f.look.zoom,(this.hand.y-.5)/f.look.zoom],E=d.burst*f.hands.clap;if(E>.6&&this.lastBurst<=.6){const[P,R]=g?M():y();T(P,R,2.2)}else if(d.bump>.5&&_-this.lastDrop>.6){const[P,R]=g?M():y();T(P,R,.8+d.bump*.6)}else if(_-this.lastDrop>2.6){const[P,R]=y();T(P,R,.7)}this.lastBurst=E}const m=this.material.uniforms;m.uRes.value.set(o,l),m.uTime.value=this.time,m.uReal.value=performance.now()/1e3%1e3,m.uStyle.value=this.style,m.uFlow.value=f.look.flow,m.uDetail.value=f.look.detail,m.uVeins.value=f.look.veins,m.uGrain.value=f.look.grain,m.uZoom.value=f.look.zoom,m.uBass.value=this.breath,m.uKick.value=this.kick,m.uBurst.value=d.burst*f.hands.clap,m.uTurn.value=Mv(t).hue*Math.PI/180,m.uHand.value.copy(this.hand),m.uDrops.value.forEach((_,S)=>_.copy(this.drops[S])),(this.surface.width!==o||this.surface.height!==l)&&c.setSize(o,l,!1),c.render(this.scene,this.camera),this.ctx.globalCompositeOperation="source-over",this.ctx.globalAlpha=1,this.ctx.drawImage(this.surface,0,0,o,l)}}const Rw=1.4,Pw=14,Lw=1.2,gg=(s,e)=>1/(1+1/(2*Math.PI*s)/e);class co{constructor(e=Rw,t=Pw){V(this,"value",null);V(this,"speed",0);this.minCutoff=e,this.beta=t}next(e,t){if(this.value===null||t<=0)return this.value=e,this.speed=0,e;const r=(e-this.value)/t;this.speed+=(r-this.speed)*gg(Lw,t);const o=this.minCutoff+this.beta*Math.abs(this.speed);return this.value+=(e-this.value)*gg(o,t),this.value}reset(){this.value=null,this.speed=0}}class Iw{constructor(e=5){V(this,"recent",[]);V(this,"held",null);this.size=e}next(e){this.recent.push(e),this.recent.length>this.size&&this.recent.shift();const t=new Map;let r=e,o=0;for(const l of this.recent){const c=(t.get(l)??0)+1;t.set(l,c),(c>o||c===o&&l===this.held)&&(r=l,o=c)}return this.held=r,r}reset(){this.recent=[],this.held=null}}const vg=[{tip:8,pip:6},{tip:12,pip:10},{tip:16,pip:14},{tip:20,pip:18}];function Dw(s,e){if(!s||s.length<21)return null;const t=(x,m)=>Math.hypot((x.x-m.x)*e,x.y-m.y,(x.z-m.z)*e),r=(x,m)=>Math.hypot((x.x-m.x)*e,x.y-m.y),o=s[0],l=s[9],c=r(o,l);if(c<1e-4)return null;let f=0,d=0;for(const x of vg){const m=t(s[x.tip],o),_=t(s[x.pip],o);m>_*1.12&&f++,d+=Math.min(1,Math.max(0,(m/c-1.05)/.85))}const h=s[17];return t(s[4],h)>t(s[3],h)*1.12&&f++,{fingers:f,pinchGap:t(s[4],s[8])/c,openness:d/vg.length,size:c,angle:Math.atan2((l.x-o.x)*e,o.y-l.y)}}const xg=.32,jf=.5,Uw=180,_g=30,yg=.08,Nw=.32,Fw=.115,Mg=.16,Ow=1.3,kw=.2,Bw=.28,zw=.7,Hw=200,Vw=.3,Gw=450,Ww=140;class Sg{constructor(){V(this,"points",Array.from({length:21},()=>({x:new co,y:new co,z:new co(1,6)})));V(this,"size",new co(1,4));V(this,"angle",new co(1.2,3));V(this,"open",new co(2,6));V(this,"fingers",new Iw(5));V(this,"pinched",!1);V(this,"gesture","none");V(this,"gestureSince",0);V(this,"lastAngle",0);V(this,"lastAt",0);V(this,"hand",null);V(this,"seenAt",0)}read(e,t,r){const o=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const l=e.map((T,y)=>({x:this.points[y].x.next(T.x,o),y:this.points[y].y.next(T.y,o),z:this.points[y].z.next(T.z,o)})),c=Dw(e,r);if(!c)return this.hand;const f=this.fingers.next(c.fingers);this.pinched=c.pinchGap<(this.pinched?jf:xg);const d=Math.max(0,f-1),h=this.pinched?"pinch":c.openness>.62?"open":c.openness<.28?"fist":d>=3?"open":d<=0?"fist":"none";h!==this.gesture&&(this.gesture=h,this.gestureSince=t);let g=c.angle;for(;g-this.lastAngle>Math.PI;)g-=2*Math.PI;for(;g-this.lastAngle<-Math.PI;)g+=2*Math.PI;this.lastAngle=this.angle.next(g,o);const x=Math.atan2(Math.sin(this.lastAngle),Math.cos(this.lastAngle)),m=this.size.next(c.size,o),_=this.points[9],S=Math.hypot(_.x.speed,_.y.speed);return this.seenAt=t,this.hand={position:{x:l[9].x,y:l[9].y},gesture:h,pinchDistance:this.pinched?c.pinchGap*c.size:void 0,velocity:Math.min(3,S*2),holdDuration:(t-this.gestureSince)/1e3,fingerCount:f,landmarks:l,pinch:Math.min(1,Math.max(0,(jf+.25-c.pinchGap)/(jf+.25-xg*.6))),openness:Math.min(1,Math.max(0,this.open.next(c.openness,o))),depth:Math.min(1,Math.max(0,(m-yg)/(Nw-yg))),angle:x},this.hand}forget(){for(const e of this.points)e.x.reset(),e.y.reset(),e.z.reset();this.size.reset(),this.angle.reset(),this.open.reset(),this.fingers.reset(),this.pinched=!1,this.gesture="none",this.lastAt=0,this.lastAngle=0,this.hand=null}}class Xw{constructor(){V(this,"kept",{left:new Sg,right:new Sg});V(this,"trail",[]);V(this,"lastAt",0);V(this,"clapAt",-1e9);V(this,"clapStrength",0);V(this,"gap",1);V(this,"gapAt",-1e9);V(this,"closing",0);V(this,"counted",!1);V(this,"held",!1)}next(e,t,r){const o={};(e.landmarks??[]).forEach((h,g)=>{var S,T,y,M;if(!h||h.length<21)return;const x=h.map(E=>({x:1-E.x,y:E.y,z:E.z}));let _=((M=(y=(T=(S=e.handedness)==null?void 0:S[g])==null?void 0:T[0])==null?void 0:y.categoryName)==null?void 0:M.toLowerCase())==="left"?"right":"left";if(o[_]){const E=o[_],P=x[9].x<E[9].x;o.left=P?x:E,o.right=P?E:x;return}o[_]=x});const c={left:null,right:null};for(const h of["left","right"]){const g=this.kept[h];o[h]?(c[h]=g.read(o[h],t,r),c[h]&&this.trail.push({...c[h].position,hand:h})):g.hand&&t-g.seenAt<=Uw?c[h]=g.hand:g.hand&&g.forget()}this.trail.length>_g&&(this.trail=this.trail.slice(-_g)),c.gestureTrail=[...this.trail];const f=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const d=h=>{this.counted||t-this.clapAt<Gw||(this.counted=!0,this.clapAt=t,this.clapStrength=Math.min(1,Math.max(.7,h)))};if(c.left&&c.right){const h=c.right.position.x-c.left.position.x,g=c.right.position.y-c.left.position.y;c.distanceBetweenHands=Math.hypot(h,g),c.twist=Math.atan2(g,h*r)}if(o.left&&o.right){const h=o.left[9],g=o.right[9],x=Math.hypot(g.x-h.x,g.y-h.y),m=(t-this.gapAt)/1e3,_=m>0&&m<.15?(this.gap-x)/m:0;this.closing=Math.max(_,this.closing*Math.exp(-f*12)),this.gap=x,this.gapAt=t,x>Vw&&(this.counted=!1),x<kw&&this.closing>Ow&&d(this.closing/2.2),this.held=x<(this.held?Mg:Fw),this.held&&(d(.7+this.closing/3),c.clapping=!0,c.clapIntensity=Math.max(.6,1-x/Mg))}else t-this.gapAt<Hw&&this.gap<Bw&&this.closing>zw&&d(.75+this.closing/3),this.closing*=Math.exp(-f*6),this.held=!1,t-this.gapAt>1200&&(this.counted=!1);return t-this.clapAt<=Ww&&(c.clapping=!0,c.clapIntensity=Math.max(c.clapIntensity??0,this.clapStrength)),c}}const jw=25e3,Kw=5e3,qw=2e4,Yw=6e4,Ag=640,Qw="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",Eg="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";function Jw({videoElement:s,onHandData:e}){const t=bt.useRef(new Xw);return bt.useEffect(()=>{let r=!0,o=0,l=-1,c=null,f=null,d=0,h=0;const g=()=>s.videoWidth&&s.videoHeight?s.videoWidth/s.videoHeight:16/9,x=(y,M)=>{r&&e(t.current.next(y,M,g()))},m=async()=>{if(!(!r||f))try{const y=await import(Eg),M=await y.FilesetResolver.forVisionTasks(`${Eg}/wasm`),E=await y.HandLandmarker.createFromOptions(M,{baseOptions:{modelAssetPath:Qw,delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5});if(!r){E.close();return}f=E,console.log("✋ Hand tracking is running on the page.");const P=()=>{if(!(!r||!f)&&(o=requestAnimationFrame(P),s.currentTime!==l)){l=s.currentTime;try{const R=performance.now();x(f.detectForVideo(s,R),R)}catch(R){console.error("Hand detection error:",R)}}};P()}catch(y){console.error("Hand tracking could not start:",y)}},_=y=>{c&&(console.warn(`Hand tracking is moving to the page: ${y}`),window.clearTimeout(d),cancelAnimationFrame(o),c.terminate(),c=null,m())},S=()=>{if(typeof Worker>"u"||typeof createImageBitmap!="function"||typeof OffscreenCanvas>"u"){m();return}try{c=new Worker("/hand-worker.js")}catch{m();return}let y=!1,M=!1,E=!1,P=!1,R=!1,H=!1;d=window.setTimeout(()=>{y||_("it took too long to start")},jw);const I=()=>{if(!r||!c)return;if(o=requestAnimationFrame(I),M){performance.now()-h>(R?Yw:E?Kw:qw)&&_("the worker stopped answering");return}if(s.currentTime===l||s.readyState<2)return;l=s.currentTime,M=!0,h=performance.now();const O=h,A=Math.min(Ag,s.videoWidth||Ag);createImageBitmap(s,{resizeWidth:A,resizeHeight:Math.max(1,Math.round(A/g())),resizeQuality:"low"}).then(U=>{if(!c){U.close();return}const K=_w();K&&!H&&(R=!0),c.postMessage({type:"frame",bitmap:U,time:O,mask:K},[U])}).catch(()=>{M=!1})};c.onmessage=O=>{const A=O.data;A.type==="ready"?(y=!0,window.clearTimeout(d),console.log("✋ Hand tracking is running in a worker."),I()):A.type==="hands"?(M=!1,E=!0,A.mask&&(H=!0,R=!1,yw(A.mask.data,A.mask.width,A.mask.height)),x({landmarks:A.landmarks,handedness:A.handedness},A.time)):A.type==="note"?(H=!0,R=!1,console.warn(A.reason)):A.type==="failed"?_(A.reason):A.type==="error"&&(M=!1,P||(P=!0,console.warn("Hand tracking worker:",A.reason)),E||_(A.reason))},c.onerror=O=>_(O.message||"the worker failed"),c.postMessage({type:"init"})},T=()=>{r&&(s.readyState>=2?S():window.setTimeout(T,100))};return T(),()=>{r=!1,window.clearTimeout(d),cancelAnimationFrame(o),c==null||c.terminate(),c=null;try{f==null||f.close()}catch(y){console.warn("Error closing hand landmarker:",y)}f=null}},[s,e]),null}const Zw=40;class Kf{constructor(e,t){V(this,"history",[]);V(this,"last",0);V(this,"pulse",0);V(this,"threshold",0);V(this,"recent",[]);V(this,"peak",0);V(this,"flux",0);this.refractory=e,this.decay=t}measure(e,t,r,o){for(this.recent.push({at:r,rise:e,heard:t});this.recent.length&&r-this.recent[0].at>Zw;)this.recent.shift();let l=0,c=0;for(const m of this.recent)l+=m.rise,c+=m.heard;this.history.push(l),this.history.length>90&&this.history.shift();const f=this.history.length;let d=0;for(const m of this.history)d+=m;d/=f;let h=0;for(const m of this.history)h+=(m-d)**2;const g=Math.sqrt(h/f);return this.threshold=d+g*1.9*(1.5-o),this.flux=l,this.peak=Math.max(l,this.peak*.9985),f>=20&&l>this.threshold&&l>this.peak*.5&&c>1.2*(1.3-o*.8)&&r-this.last>this.refractory?l/Math.max(1e-9,this.threshold):0}commit(e,t,r){e&&(this.last=t);const o=this.peak>0?Math.min(1,this.flux/this.peak):0;this.pulse=Math.max(this.pulse*Math.exp(-r/this.decay),e?Math.max(.4,o):0)}}function $w(s,e,t,r){const o=s.map(c=>c.hits.measure(c.flux,c.audible,e,r)),l=Math.max(...o);s.forEach((c,f)=>c.hits.commit(o[f]>0&&o[f]>=l*.7,e,t))}class wg{constructor(e){V(this,"ceiling",-100);V(this,"floor",0);V(this,"seen",!1);this.minSpan=e}place(e,t){this.seen||(this.seen=!0,this.ceiling=e,this.floor=e);const r=l=>1-Math.exp(-t/l);this.ceiling+=(e-this.ceiling)*r(e>this.ceiling?.5:60),this.floor+=(e-this.floor)*r(e<this.floor?2:60);const o=Math.min(this.floor,this.ceiling-this.minSpan);return Math.min(1,Math.max(0,(e-o)/(this.ceiling-o)))}}function eT(){return{overall:new wg(14),bass:new wg(14),overallSlow:0,bassMid:0,highFast:0,highSlow:0,out:0,onsets:[],energy:0,build:0,drop:0,bright:.5,heard:0}}const Tg=-75,tT=2.5;function nT(s,e,t,r){const o=T=>1-Math.exp(-r/T),l=T=>Math.pow(10,T/10),c=T=>T>1e-10?10*Math.log10(T):-100;if(s.overallSlow+=(l(e.overall)-s.overallSlow)*o(2),s.bassMid+=(l(e.bass)-s.bassMid)*o(.5),s.highFast+=(e.high-s.highFast)*o(1),s.drop*=Math.exp(-r/1.2),s.heard+=r,s.heard<tT){s.highSlow=s.highFast,s.energy=.5;return}s.highSlow+=(e.high-s.highSlow)*o(8);const f=c(s.overallSlow)>Tg;s.energy=f?s.overall.place(c(s.overallSlow),r):0;const d=s.bass.place(c(s.bassMid),r),h=s.bass.ceiling>Tg;for(e.onset&&s.onsets.push(t);s.onsets.length&&t-s.onsets[0]>2e3;)s.onsets.shift();let g=!1;h&&d<.4?s.out=Math.min(30,s.out+r):d>.65&&(s.out>=2&&(s.drop=Math.max(s.drop,Math.min(1,.55+s.out/14)),g=!0),s.out=0);const x=Math.min(1,Math.max(0,(s.highFast-s.highSlow)/18)),m=Math.min(1,Math.max(0,(s.onsets.length/2-3)/5)),_=Math.min(1,s.out/6),S=f&&s.out>0?_*_*(3-2*_)*Math.max(.1,x,m):0;if(s.build+=(S-s.build)*o(g||S<s.build?.25:.7),e.centroid>0){const T=Math.min(1,Math.max(0,Math.log2(e.centroid/300)/Math.log2(16.666666666666668)));s.bright+=(T-s.bright)*o(1.5)}}const Tv={bass:[20,160],lowMid:[160,800],mid:[800,4e3],high:[4e3,12e3]},iT=Object.keys(Tv),rT=.002,sT=.04,oT=.25,aT=.0016,lT=6,cT=90,uT=170,fT=1.9;function hT(){const s=()=>({floor:255,ceiling:0});return{envelopes:{bass:s(),lowMid:s(),mid:s(),high:s()},overall:s(),previous:null,flux:[],lastBeat:0,onset:0,rise:0,punch:0,lastNow:0,kick:new Kf(170,.16),snare:new Kf(170,.13),hat:new Kf(70,.06),sections:eT()}}const po=new Float32Array(256);for(let s=0;s<256;s++)po[s]=Math.pow(10,(s/255*70-100)/20)*1e3;const qf={kick:[30,150],snare:[1500,5e3],hat:[6e3,12e3]};function bg(s,e){s.floor+=(e-s.floor)*(e>s.floor?rT:sT),s.ceiling+=(e-s.ceiling)*(e>s.ceiling?oT:aT);const t=s.ceiling-s.floor;return t<lT?Math.min(1,e/190):Math.min(1,Math.max(0,(e-s.floor)/t))}function Yf(s,e,t){const r=Math.max(0,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=s[c];return l/(o-r)}function Cg(s,e,t){const r=Math.max(1,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=(po[s[c]]/1e3)**2;return l>0?Math.max(-100,10*Math.log10(l)):-100}function dT(s,e){const t=-100+10*Math.log10(Math.max(1,e))+5;return Math.min(1,Math.max(0,(s-t)/(-32-t)))}function pT(s,e,t,r,o){const l=e/2/s.length,c=W=>Math.round(W/l),f={};for(const W of iT){const[F,k]=Tv[W];f[W]=bg(t.envelopes[W],Yf(s,c(F),c(k)))}const d=bg(t.overall,Yf(s,c(20),c(12e3))),h=c(1e4),g=new Float32Array(h);for(let W=0;W<h&&W<s.length;W++)g[W]=s[W];let x=0,m=0;if(t.previous){for(let W=0;W<g.length;W++){const F=t.previous[W]??0,k=g[W]-F;k>0&&(x+=k,m+=po[g[W]]-po[F])}x/=g.length}t.punch=m;const _=t.lastNow?Math.min(.1,Math.max(.001,(o-t.lastNow)/1e3)):1/60;t.lastNow=o;const S=W=>{var we;const F=t.previous;if(!F)return{flux:0,audible:0};const k=Math.max(1,c(W[0])),ee=Math.min(s.length,Math.max(k+1,c(W[1])));let D=0,B=0,ve=0;for(let me=k;me<ee;me++){const X=me<F.length?F[me]:((we=t.above)==null?void 0:we[me-F.length])??s[me];D+=po[s[me]],B+=po[X],s[me]>X&&(ve+=s[me]-X)}return{flux:Math.max(0,D-B),audible:ve/(ee-k)}},T=S(qf.kick);$w([{hits:t.kick,...T},{hits:t.snare,...S(qf.snare)},{hits:t.hat,...S(qf.hat)}],o,_,r),t.rise=x+T.audible*.5,t.previous=g,t.above=s.slice(h),t.flux.push(x),t.flux.length>cT&&t.flux.shift();const y=t.flux.reduce((W,F)=>W+F,0)/Math.max(1,t.flux.length);let M=0;for(const W of t.flux)M+=(W-y)**2;const E=Math.sqrt(M/Math.max(1,t.flux.length)),P=fT*(1.5-r*1),R=y+E*P,I=t.flux.length>=20&&x>R&&x>.35*(1.3-r*.8)&&o-t.lastBeat>uT;I&&(t.lastBeat=o);const O=R>0?Math.min(1,(x-R)/(R+.6)):0;t.onset=Math.max(t.onset*.9,I?Math.max(.35,O):0);let A=0,U=0;const K=Math.min(s.length,c(1e4));for(let W=Math.max(1,c(100));W<K;W++){const F=(s[W]/255)**2;A+=F,U+=F*W*l}const z=Cg(s,c(20),c(12e3));nT(t.sections,{overall:z,bass:Cg(s,c(30),c(160)),high:Yf(s,c(2e3),c(12e3)),centroid:A>.05?U/A:0,onset:I},o,_);const j=.6+r*1.2,le=1.5-r,ce=1,q=W=>ce*Math.min(1,j*Math.pow(Math.max(0,W),le)),te=I&&ce>.15;return{bass:q(f.bass),lowMid:q(f.lowMid),mid:q(f.mid),high:q(f.high),overall:q(d),beat:te,beatIntensity:te?ce*Math.min(1,Math.max(.3,O)):0,onset:ce*t.onset,kick:ce*t.kick.pulse,snare:ce*t.snare.pulse,hat:ce*t.hat.pulse,energy:ce*t.sections.energy,build:ce*t.sections.build,drop:ce*t.sections.drop,bright:t.sections.bright,input:dT(z,c(12e3)-Math.max(1,c(20)))}}const Rg=[.35,.45,.8,1.15,1.5,1.9],mT=3.6,gT=2.2,vT=6;function xT(){return{rate:1,clap:0}}function Pg(s){if(!s)return null;if(s.gesture==="fist")return Rg[0];const e=s.fingerCount;return e===void 0?null:Rg[Math.min(5,Math.max(1,Math.round(e)))]}function _T(s,e,t){const r=[Pg(s.left),Pg(s.right)].filter(c=>c!==null),o=r.length?Math.max(...r):1,l=Math.min(1,t*vT);return e.rate+=(o-e.rate)*l,s.clapping&&(e.clap=Math.max(e.clap,mT*Math.max(.5,s.clapIntensity??1))),e.clap=Math.max(0,e.clap-e.clap*gT*t),e.rate+e.clap}const yT={dust:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD51PXOBSjr0HNJjGAe3fFLz6k0ABBC5oOeMd/SnJI8Uquhw6nIIHepLhmaczSGMmUlzsAUDJ5GAAB9BxQBCFLNgcn0JpXRo5HRl2spIIPr6U9HRmxMZCoBxtI4Pbr2zTFXcRghB79KAG9PQ0oBHp1q8NKuJYY2t40lLMIx5UisXY5IGM5zx6enqKpvDJESHUjkjn260ANwcjPNA78+3FTW8E15PFbwohkY7F5CjJ9SSB+Zpz27szhSSsYwWA3KOmSWHGMnr9KAKw454IoweO1TpHE85WSb7OhxhiDJ/KkGwQjYru7A71KjC88YP/6qAIe2MClx0/nQFJIwcH0qxFbsy8XEKsWKMjPg9Mk+gHbr1oArqrM3AJPp3o6dyeeMd6nuRAZWe0ikS3Zj5fmuGfbnjJAAzjGeKW2vpbJJfs7mKWRShkRypCEYZfTB/pQBE0JWBZGaP5icKHG4Y9R1H41GQc5qZI5ViM4wE+7nI6kenWolxvAfJXPJA5x7UAA+g4o6c+npQeuRwPSkPH0oAMdADS854GKAADgjNHfpzQAAZ9qleFoZADtlAw3ynIwff+fvTXEZdRDubcBkY6N3A9fr+lOliVJGCiQLtBG8YOPWgBAyl2ZBs3NgKGzgfXv6VJdSRzzblt1hwoV9vQuOpAHAz6DimR4UkjJKNkleeP8A9eKsyvc3TRPLO+1VKRCQ5CruJ2gemSeMY5NAFdRvRuQ4QZAPUjPTHaljiacOqJGhRPM5IGQBzyfbPHftVu7jjikkUyW0xIAZ4sBVZiGO0DrjkcYHaokljjidkuTG8ZATEfMgOQfm7AADg/3jQBGbiJrMxGHMgIw6thcDPVQPmPPUn2pYI1nMnzKuzlsybPMGQNqjHJ6fgPap/swvFLIJC5H7hMfewwyOB1wSeoHv2oSOCRHhd5pCIN6Mq7yrLywI4wvXJ5wBnmgCo8SuFaNCiMTt3MDkEnHPr26YpPIkZgY4nG47ce//AOsU5gyXH79RKOVGG4OOOo9KbKrrMwm3iUcENx9KALHk74muDAkcZGxP3hAVxjPbk98f7Qq3GqarFbNd38MIt3jtgkrBSIfmO5cDBC4IOSTll684rXKxxW3lx28mHYMHkGOQMEKAT33Dqeg6VGUkaAs0yKYMbY3b5iDk5A/DJ+ooAnu4IgLiW0tpprXztsVw+chQDgEDjJBBOemMetQ2yxpFcLM0UTjAXzAxP3sEAAEAjrk44XA64qXSjch5Ra3kkMkimIxRhmaVWUhgAODxxg+tVZ4ZkYGY/M43AcHIPOeKAI2RScBwz/dxtI4+pphAB+U575qa2tXuZCqsi7VLEuwUYHYZIyfQDk9qaLeQAkjAAJ+bj9KAI+n9fejtSnk9OKQ4yORQAdunFAB7d6AcDjk0gJzigC1aCNXzJ5uwfe8r7y+/4fhU6LetCvkIj8sq+WA0hBByMdSuAe3HXrVa1nEEgYDD54bdgY7gjuD/AI1Zhv57aWaeCeS0W43xOts+zMbdUAz9zsRnpxQBSjZc5cE8fKQcYPY9OlaFrbG9mULtjVEYmQgkcZOeOQM8fjVaAbZgdp5PHl/NxjkDr29f6VO93LbPLb2pRU8w7QrCRgNpTAfHIwT04PWgBLm4+1xrNHCsflxBZv3jEyncdrHPGcFRxx8ueuaryxr521HUoFUZXOCcc9ff/wCtSJ5gUFBhc8Z+nX3+vamlCjI2QG+8Ce9AGxaWLXq3FqLuGHT7Y+ZJcmMgHoM4xvb5sYUdNxIAyaqSR2n9qrh5IbZuN08ZztI+9hPUY4GevXFQzh1u95TyJIgjDyyflGB8wJ5yTzn1NQt5pbO4s33gc5xk9/rQBOWQWySxNFvMxBUrukwACD0xjt9c1LcTs7JM4LyAbjJPhtx75z75IBz160TXc9zdx3UCi3kEYA8g7dowRxjpkZJ7/wAqrPNG/lrKnllIyCV5LtnqRnqen60AXZmsonYWlzK8JUshmXYd+fQMduVHXnk/iJLSSFNRjFvbbvNHlATShF8zGMiQgAAEq2Tg8cnmqDKt6ryqY4fKjUEEnMpzjI/r2qawlFtcwyxyzR3EbM4WFFbDAfKeTznkH+R6UAMjMlnKkkUhiuIf3u5X2OrZwMe4POBz1PSomlmEZiY+WDl+mS5Iwfm68jt0/Gnxh3uC6RIQrKxiY5D85xj09cfpTjJbvI8kYaCUu7/uhmMA9lU8jALdSe34gEDtuMmyMQgAEqrHGfoTnrUt5cxyTTC3eWSGVg5e4VTKTjnLD3J4+melRTSDA2xxgqqgFM4yBySDySfyznHGKhJCr1U7uc9x7UAIoyc/pRge2e9Jk55FL14z+dACfzNKPXNJnPTHHalCg9KAJUQtEwEeSo3FsgcD69f50szrO4CL5cYHCs5IXjnGfU5NTJNMYhaPJGsKHzFJJZVYjrgcEngHg9hwBUcsclodskUkc4AJWRdpAIBUgEccc59CMUANjaWONipG1uPXP4fjSpGJJGdX2x4yzycBSR0yM55/P2oCgQq0kJAbIDg43D+XBoJSMowLgEZBZeF5wSB0PegC4mnXlxpUl0kMv2eH95gAkAEAFvYcDk/QZ5xPbrpsHkJdEG5S4CujZMTRkcMGUg5HpnBH0qvYyxs6xPOsCIwYSPllVxwGIwSVHPAB7dadIJXa9EdwJosn5xtQOM5DYPb5eg5HHSgCoiC4fdLcqmCAwx8x9cdifrjNWJbJoIfOWzL20jZSVuSO2zIIBOSAR60p3XFtGk6pFDZgpgKeS2TyRyST/KoI7N7mNVg3SyRgsyohIRBjLH8T29KAH8OWiwSsS467VHXIOB2J6mh2mFnFBJNHKvVVDqwGecZ7H8eM0bY4p3aAh0cmMRSn94wI6kDpnPH+TVx7WK3uj9rdA6fLKsbDcjAbcKRkY6HJ64zQBDC8MmntHPHIZFAEUSIPmHzEncTlcZBwAc98Dmktra3SOCU30kbuctsjJKBWOCDnk8Dp6+1RzQm3jhjnlLFC2USUHyx347Z4PuAafZ7Yg264MZQgyQKv31HTvycnoOR1oAikij+zPcQoETIUgzAsWJJGB1xgYPoRyeQKdbRr5aCS7Ft5owAE3Dbzgn3JwPUYz6VA6rM4itkZtzEqAMn8vp25/rVq9aO30+G2WFA7gStui/eLkcAueSCMMAvy8jqc0AUmhmFuZRGxjVtjSgEruxkLnpnAJx3oS4ltxIkMp2yDa2B94fjQsjuDGrEKPmCkk5P4d6iJyxxhec4Ax+lACvHJFI0ciMjqcMGBBH4GkPA/xFS3Mv2i5kmLSMzncTI+9j9T3+tREc5xmgBOD649qU9e3PtQODx0oB4x1oAUEDGCQw65rTOs319FbWl5cNPDA2YEZc+Vk8hB2B9BxkD0FUYPKCSSSru+UqiZI+Yg/NkenX3pkZZJMgHeDgEckfSgCfc22S0Uq8KOXyuCeOM7sAkY7d/SrUeowxZQ2kE3zBkzn5T1AOfvAc/XPJOBVJpprto42b5YsiNGY7UGSxAz0BJJ+pqSGWORpBNIIozG2FEe8E4yqgZ4yQMntz16UARiKJk8zJBOMgdu2fzpgVlQuGHC464PPBA55q5Pd2zQLGIIi7BWd44yhU5OVAzjGMcjFMsZIPP8uZvLilGwuzkBcnqcA5GPXNACg+XZzROuDKq7Qr53HOd3vgdqVn+1yQrDOsQigyDIQnzKCSM9ySDjPPIFQ3EkayMloZfJ4P73aWyPQgevpipg89u6Tl/JuLYLIvzBSBxtI5znJHA5HWgBLLyZGDSxGRi43EOFY5I4GQfz5xnpVkNJZaki3FvFGFhLRiaJeUdSVYgj5zhgQSO49BVaO4uI4iihPMkIm8xQvmA4PRuuMdsjnHFVDIzhlBABIJGc89M5/E/nQBJclZZDIpGHbO3GNv8AjU0V5iVibaLe8ZiPyDHPGQOinGOR9etVwU2hW3K4Jy2Tz6DH+etSXF7NdGFLiUyLEpVM8BQSTwB7nOKAJPtL7AscxjDuPMLNwSDkZA6gdfzqOZnmcqH3BARgLtAAxnA/Cp7W9ksYw/ls3ng7g+CsiZHB7/eXtjpTLW7+z3AuEhhkEYOYpVypzkfjjIP4DrQBFDOIoZISiZYgrJt+ZcZGM+hzyPYdKieQSMWZVyRggDGD9KXz5MDcQwDb8MBjPHNM3fKAFAxnkdTQAhwPyo6HB/8ArUuffrTSfY+9ACjk9eaAB/jSZ4wO1A44zQBMs5WIRqEXnO8L82CMYz6e1Ai3TJGrxyF8AYYgAnjk8VDyMkfnT0fYwbCsc9CuR/8AXoAHXYzLkFgcEg5B+hFW7OzYxPeNbm4ggZfMXcVXnJwW7ZCN3z6A1UjZY2+aJX9mJ/pQZHEZjDHyyQxXPBI6E/r+dAASX7Dk5wBUsE6QxSAR5kZSqtxgAgg8EHsfb1ot7trWdJY44m2c7ZYw6k46lTkH+VNjnZbSW32RMkrK25kBZSucYbqM5OR0PGegoAC6tlY4gWfbjqWB9ue9W47r7DefarWSUyCMoTKoDISCreobjI6dD681TklDj5YUjzj7ue3fr1PrTQfnyVDH0YZoAkad5JIUlLOkfAC4zt9AcH8KdcRES72DRrIokjyAMp0HTHp1xyaYsMvkmaMZRANzL/Bk4APoTimxzNDHLGgTbKAGygJwCDwSMjkdRzjjpQA1mJzuO7vzVhLhrSeQ25IDxtEfMUEgMu1uD06nnqPrUKShIpkMUTmVQoZs5j5ByvPU4xzngn60u6N3VpC5yuDjGSccf0oATKlQNxOOx4/KnPIWt4kMUS7QRvC/M3J6nv1x+FNKYVW3KQewPI+o7UzLcZzgfpQA5ypJ2g4z3PNNHUUdR2xSZ56UAKP1ozj6CkHH8VL0P+FACE8gdqcB+lFFACN1x6DNIDkiiigBSAMflSNkAc9RzRRQAZJY+1OxzRRQAnv74oxljmiigBPQetKflAx2oooAB1/HFL0GfSiigBO+PYUYyM9zRRQAgGTjtQTx9aKKAFxjOO3NLjJC9jRRQB//2Q==",line:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5UooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA0/7CbGTqOmD/t5FA0PIz/aWmD/ALeP/rVuD7Rv+V7vn00KKl/0pG4Oof8Agkj/AMa7fYx7fl/mYc77/wBfcYY0MYz/AGnpn/f/AP8ArUf2IoGTqumf9/j/APE1vYvByv8Aah/7gkf+NA+2A5/4m4Ptosf+NHsY9v6+8Od9/wCvuMBtGjX/AJi2mn6SN/8AE0g0eMnH9rab+Lv/APE10Bmux1l1UD1OjR/41A106sTJfXMZ/wCmmkR/40nSj2/r7wU3/X/DGONFBPy6lpp/7bY/mKQ6FOThLnT3Ptdxj+ZFab3lsTzqlgx7ibSwP5KaMxTcCTw3MPdHhz+i0vZwf/D/APDj5pGb/wAI3qpXdHZtMP8Apiyyf+gk1VuNMvrQZuLO5hH/AE0iZf5itxdNWYnbolrN6GyvwT+ALN/KnYNimCPEmm49PnX/ANkpOiv6/wCGQ1UZzFFdKdQEuANbtLj/AGb+y5/Pa386Q2yzH/jy0O594LvymP4Fh/Ko9jfZ/wBfK4+fujm6K6U6Cj/MdD1RBjrBOso/9B/rUZ8PQkf8emvx/WxDD89wo+rzD2iOeoroE8MqzY8vW/8AwXf4vUp8N2sIzN9vTjP74wQf+hSUvq8+we0ic1RXV2ugWMnMcBn9cTvNj/v1Hj/x6rcVjZwEotvaI/8Ad8tC35O0jf8AjlWsLJ9ROqjjIoZZ32RRvIx7KCT+lXl0DUiNz2rQL63DLEP/AB8iuwmMkMQEjTJH2D70T/x5oV/8dqnHc20bZWa1jbsY5oUb/wAhxu3/AI9Wn1aK+Jk+1b2RXVYx1Fuf+40tI0cLf8s7XPvrSn+tIUI6kj/uCJSs0agBpIhn+9oiCtP66E/11GmOMf8ALO0P01hf8aDGhPFrGf8Ad1lP8aa09tHkNcWI/wB/SQP6U37VZY4utDY+j2Dr/Jan3f6sGv8AVyZYJgBss7vnp5Wrof0wak8u9iPEHieP1MVz5n8lFVSlrMOF8NSfR5oz+pFImnxMcppdrJjva6mufwySafp/X3IPX+vxJpr+eD5ZNT12Adxd2ocfq39KhF6kx/5COjT+1zYbD+YT+tWEhuYBlYPE1so7xSeao/ILUL3+Tsn1dhj+G/04N+Z+Y0m31/r72gX9f1YaLOOd/wDkG6Rc5/59b3yz+Rf+lPSzltCSlj4gsh628nmKPyA/nTQtvPyT4cuB9ZID/wCyinRWMTMGh02NT62urIP5kmhLqv6+5fqO/f8Ar8Qe/O0rLrE/+7f6eH/X5qaXtJutx4clyP4oJYj/AOOqK0Y4r+NcI2vxj0F/G4/pStJdLhpJ9RB9ZZbYfqTV8re/6/5k3Rm/Z9OIyYtCBHdLucfpmpY0s2IEKae56bY57p//AEEVeS8dmwt5OGPZdQh3H8Io2NSssqj/AEh7gL2E8s5B/wC+3iH6U1BdLfcJyfX8yt/Z8EYDS2cCY/ia1lx+c8qip7W36vbIn1gjQfrFG2P++6khgWMebFEEHeRIwP8Ax4L/AO1Ka00dw4AMc7DvxK36CY/qK0UUtSbtjmKTEo7LO4/hZhK35Eyn/wAdFPkWaNNrpOkf911dVH4O8S/+O1HL9pdSHgvGUccwTsPyeRF/8dqr9n2PuFsy/wC7a2iH9Sxobt0BCF4o/uPaRsOpW4s4z+aq5/Wnf2gRnOpZOP8AoMMB/wCOoBUm+627Y01EDsENtj9BUcg1FRgxa6B7WsUn8qnXz+4ehX3ycELMT/s65HSqLtjlU1LP+xrMZP8AKsQa9IOthpjfW0T+gpP7aQ/e0rTW/wC2RH8mFc3to9/y/wAjXkf9f8OdCItQ+9s8SkY6perJ/IU2Sa/Rfnl8SIO3m2gkH6kVz/8AalmxzJotl/wB5V/9nNSx6tYpjbZ3kP8A1wvSv81NV7aPf8/8hcj7f195oyX6H/Xajbbv7t3pSj9QCaj/ANGl/h8O3A+ssB/9lFIniCEYxqWvRezSrMPyOKBqtvLnfqaPn/n50yNv1GTRzRfX+vmws1/X+SJY7FM5t9NCsP4rLVEP6HJq2n9oIu0N4oQegUTr/MVQ86wkHM2gufR7eePP/fIFOiTTVbcf7FU/7FzcrVJpbP8AH/JCfmWiJ3b99JdHHGLjREY/ieactkrEEwROPX+xnH8qhNxYxAkXWnj2F3dH+S1HJqWmcF57dxjoi3Mn/ociinePVr72Kz/pF/7CoG77CoHqdJCgfi8gFLFbwGTCCDf/ANM47ZSPwjWVqyf7d02AfubXefa2hj/Vg5/Wo5/Fk7rsit0C/wDTWR5P/Hchf/HaXtaa6j5JM6bc0aiOWaRR2Ekzrn6Kzx/+gGmhDCPMWNolP8aRlAf+BARD/wAfNcdJ4g1N12rdNAv923URD/x0CqEkjysXkdnY9SxyamWLj0Q1RfVnbS3tmriR57ZWz95pot35qsrf+PVWm1m0kIV7+B177pLuT9MqP0rkKKzeKl2KVFHTm/0lSdsmnnPf+z2b/wBCemm903kLcaYc/wB7TiP5ZrmqKj277L8f8yvZrudKZbGXkP4fb2aGeP8AkKWO2tCflstHc+sWotGf/H2rmaKPb91/X4h7PzCiiisDQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k=",dandelion:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5UooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK3PD+iQ3Ucmo6gV/s+2I8yIXCxTTA5/1e4EHBxn696AMOirF8kEd3KlusqxKxCiRgzfiQBVegAorWg8K63Pbx3K6ZdLBKcJK8ZVG+hPGORW9F8I/FVxbRTW8FjOX5eOO+hJhXGQ0h3YUHnGT2NFxXOLoq5qmj3+i3klnqNrLbTxnDI49geD0IwQcj1qnQMKKKKACiiigAooooAKKKKACup8P/DTxN4jaQWuntCsSB3e5zGAD04IzzkY45re+Efga41mSbxNJZR3enaTMgkjkCsjuVJAZTwwwOnckds19BeGLS/1K0uhZpe/2jc7jclyIwBtAB6fKQpXhffB7DCrOS0giZSsfM158KvElrLcxRRWl3JbY82O3uUZ15x90kN146c9s1gTbLO0ksrqwRLsOR5h3LJGQeQRnHf0zwK+vNXt9ItNRsLaxtnOptGILtPL8yaeMfMRvPB+Y5OeOAM9q4L9obwK2peErbxvHZwxz27CCaSElQ9vu2xsVxjdlhk5yM45AyLi5rSRMZpnzfWto9/BaWl+tzYW92kkIjHmZDISwIKsOhGD9e9ZNaMiW0egQOkjNdTXMgkTsqKqbfxJd/wAhWiLZUuzm6m5z8559ea6/wP4TupjY648cUqG7EVrasqyNduOqhDxjOMk8Vy+rak+r6hLeyRRxvLtysYwuQoGfxxn8a+gdH0ux03RvDg1O0kZbK1Se0aJQrFpBne/o2WA59B15q4Q5jOpPlR1Vist5ZPb6hp3mXdwfnsmufONvtIDAEDG0jAGOgz0rF8QS2VlBLo0enrZafEIT5in94ThtwCgAsCOvXOOvau00XSIIo5LGOH7TJI3zNGcyKGwCQ3HTitTWPhudKaXUhc3NwxQ77aOP5gcDlXzz0I5/vHvWzoxSscqqu9zz6z8L+EJtNh07xBDHPaXELSNd3Eg861Qg4ZGXIO1iAwzjpgV86eLfDcvhfW57B2MsIYtBNxiaPJw3BI+o7HIr3SHwzquoeKYtGupj/Z0pLPbFBELfk5AJ4J78cHivPfi74Q1LQrDRr/ULhJ/N822RlcFdqHcNuOxD5PoeKynC2qR0U562bPM6KKKzNwooooAKcn3voCf0ptOTr+B/lQA2iiigD6k/ZH8SadH4Y17RbiRRd290l8iO2N6MoQ4H1UA/71ey3WpWcN5bwgRfbDJiRYyrMkeTtJUYOOlfn7Z3tzp9wtxaTyQTJ9142KsPxFelab8VvEkPhaa91K9lubgSLYWVyzDzVUgNLyfvYXYMnnLirhyp3OerTb1R9O+Nb++ntvO0v7Gb1TiPKHlMkH5gCV5479TxXK/ErxLaeHfhFrmlX887y3FqLRI5lOwzNtwsYx0ABPtgd64rQv2h/DsgM2owXdjKkeFCL5m7A6AdAxPfjr1ryn4qfE26+Imrho42ttKtmb7LbtjdzgF3I6scD1x0HvtUcHHQypU582pw5q3Lqc02lW2mMF8m3nlnQ990ixhvw/dr+tU6K5jtFFfYnwmhg8QfDrw7qYii1ApGLKWBFDG3ZGKjcSfkGAp5B7ECvjqvS/gr8Ybn4Y6nNbXSyTaHqBAu44uJYyOkkZ9R3HccelVGVjOpDmR9E32vx+HNVe2khuJ7mRsxInDhVBZmKdh7DluTntWl46+IjWvhjw/PCZFkvL1YJwXC7RsLYb3PUdvlP0PlGv8Axm8Halq1xf2V5dQXc9mkC6hPb+ar45Kyx4yO+GUZyQc4zXJf8JqfH3hTxhBrU0ZNlFaahE1pb+W0uyfy2J564nHP44rV1DCNFnt1rcWuvXcVxpl5FLFNGSsyrkyru2kqeuQQQMHH6V5D+0zqUdtPofhmOQM9jE9xKCPmBkxj8wCfxFYulfG1PC0QXQtKkMvkKvm3s28LJnczBVAGCcDHTGTjJrzvxL4m1XxfrM+sa1dm6vZ8b5CoUYAwAAOAABiida8bDp0HGV2ZdFFFYHUFFFFABTk6/gf5U2nJ1/A/yoAbRRRQAtb/AItY2RsNCBwum24Eo4/18nzyZ9wSE/7ZimeCNPh1DxLZi6ANpblry5BGQYYVMjg/UIR+NZV/ezajfXF7cNumuJGlkb1ZiSf1NPoTuyvRRRSKCiiigAooooAK7H4X5uda1HSQAf7U0i+tQD3cQNIn/j8SVx1dL8Nr9dM8f+HbqQgRJqMAlz/zzZwrf+Ok0Ajmz1pKva3pr6PrN/psn37O4kt2+qMV/pVGgAooooAKKKKAClU7TnrSUUAFFSogYcL+Zp3k9fk6e9AG/wCHv9A8KeI9TyytKkGmRH3lfzG/8cgYf8Crma2JdUlTw7FpGxBbm6N2SCdzMUCDPsADj/eNZwiyMhBz/tUCRBRUh2j+Hp70fJ6D86BkdFSfJ6D86T5f7uPxoAZRUnyeg/M1PYWTajeQ2kIQPK20M7EKvqTx0A5oAqU+GV4ZUljba6EMp9COa1TpukA4/ttD7i1k5p8OiWN4xistVimuNrMkTQum/AJIDHIBwDjNAGr8XIEi+JGvyR/curk3q4/uzKJR+j1x9bfibV5Ndvob65SMS/ZLeAlMjcsUSxqx9yqDPvWTtX0H5mgCKinkqD9z9aTcn9w/nQA2inbk/uH86Nyf3D+dADaKduT+4fzo3J/cP50AWbQfLmrL/wCrJoooArzjcsanpsJ/Sg/eNFFAEVwMMfoK9l8MwWTeGbCeTTrGWRYIwGkhDH7o5+tFFVEC4k0MsrRfYLFVH92ADNeFkAs/+9RRTe6A6LR7iay0nWYIJCkc8XlyDAO5eD/Sqmg/utbsdo/hJ/NDRRWlVasiJrXUdnZ6p4ZeDTrRf9HjaVSGYTtn7zgnk/TAqnZTi58avMIood8kh2RLtUfI3QUUVnLYuPwXMS6H7qBu+wClu7yW6S3WTbiCIRJtUD5QSecdTz1ooqQKzdR9BWjLpsMUulqC5F3EjyZPQl2Xj8BRRSA3/wDhD9PLY8257fxL6Z9Ky9I0K2v9ZkspXmEab8FSAflIx296KKAJNe8P2mmWCTwtMXLIPnYEcg+3tWVpNql5eRwyFgrE5K9eFJ/pRRQB/9k=",jellyfish:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5VooHegVSV7AJRRS9qSQCUUtJSAKKKKAJrVd0orR1VNsS1SsBmYVpayuIM+9erQj+4Zzzfvow6KKK8o6AooooAKKKKACiiigAooooAcoycUKOaVeGFPC4kxXVShdL1JbIiMGnAZBpZV2vUkUe4N/u04UvfaE5aXIdvy5ptWfL/wBH3VWrOvDlsOLuFFFFYFF7Sl3XCj1rT11Ntsn51T0GLzLpa0/ESfuF9hXsUV+5sc0n75zFJTgODTa8lq1jpCilNJUgFFFFABRRRQAUoFJVi0hMsqjHHU1pSg5yshN2VyNlwM1Pt/fIfUA0NETBnHbNTCMmOB/Yj8jXoxhZv5GLloR3cW1lP4VNZRbvxU1Yv4MKpx3z+YqfTYM7fxFbKHv3IcvdsU0gzZsfrWUeDXTxW+bSQY6E1zUq7WIrmxsPdTLpPVjKUUYpUGTXBGDbSNrnQeFod0+7HQVoa9Futj7U3wpBhWbH8NaGrw7rSQ46CvYhpGxyy+K5wgX5WNMUZNWTHiFj61FAm5jXBOn70UdCloyNhzQUYAEggHpnvX0V+zV4e8EWGman4t8Wram7hnEdmL2EvHFGBzKq4IYluM842+9eq+IvGHhnUVjtL2/srizvA3lpd2ebaVBweWXA6jsKungalWTsvwfr+RnOuoI+HqK7P4ueHtF8N+Nrq18PXEcumyxx3ESo5YQ71yY8nk7TkDPOMZ5rjK4pRcW0zZO6ugoooqRigZNbGmQiOAzEct0rKiQtnH0roJovJgSIdgB/jXpYKFlzMwqy6FXyP3JGP4TVmO1zp8Jx0JqyttuUDHtV21gEmmqMcoxBr0VBGDkUtTt8W0L/AEBqXTIeE4/iP8qu6lbl9NUgdMGnabCNqEDv/Sjl1FfQrW8X7qZfc1yV8mydh713UUODN9a4zVUxdsP9quXEq8TSk9Slt6U+3Tc4qbycY+hqeygyQfaueNPVGzlodd4bt9lqTjqKsavHixmPtU+kReXaKPUCk1gf6BJ71u5a2MThZodtvnHbNXPBmgP4j1y00xCR9okwzDqqAFmP/fKmn38Oy0bj+ECtX4f6y3hHXLHWxbi4FsxLwscCRCpVlz2yGPNKMVzpspv3XY9i8aaxbW39leEvDqwpp8ltDBcSKuSSQD5a+mMYOOSWIrsvEngG5n06ySS1aI2cYEYxyM43bvcnHHbGK5n4UfELTNd8VXV3p/g5Xlt0DefdXIdoNzhR5eEwD94kkZwvHer15+17p9prAs7vwlcNabEcNHdK0gYjPIIA6Ed69zEYz2CprCw0ju21dt6f8A44UnO/tHr+hxPxl+HUqeAbHW7a0IfSiYrhgvPls3G76Ej8q+f6+kvH37U2l+J/CPiHw/beF7i2bUoDbwzPOpxkjczgDqMcAZ5r5uPWvmcwqOpWc5Kze530I8sbCUUVLbxGaVUHc1yRi5OyNm7GlpFkZpoQR1bcfoK2LmLfN06VPpFoIkkmxwq7F+tSiHhnNe1TSirHHJ3dyVIMSMmPeprKPb9qh9DuFTBQ0sUg6OAfzqRYvK1DHaSPFdLZkKYPNsCuO1QaZGRGn4f4Vp2qZgwagtYdgI/uuw/Ws3LUZH5OJJR681xGtw7bxuP4q9BZP3hPqK43xLBtugcdWFZVdUXDRlF7f5Dx2NT6bDkJx1q08P7ljjoMVPpsHEf+8BWb3LudPbJsgUe1V9UXfbbfUirqjCge1QXSb9o7c1nfULHMaxCREEx94gU5bcxWgAHJAH5mtDV4d0iLjpVk2e8QRquSWHHritaVnNLuKWiPY/2afDaaR4C8TeJb1VU325LfdxlIo3yR9Xcj/gNfNAikvtUMknJ2B29uB/iK9/0LxjNpnw5OlpIATI+nWcQ5yfLaNnx/vPM5+i149p9gJZNRmjXjcYk/BWP9Fr0fq/LUvLrLT0Sv/kZKrdO3Y4+7Uq6g/wB0N+fP9agrQ1mMR6lcIPuxt5Y/Dj+lUMcV8/io/vZWO2DvFABWzodmWYykZxwPrWZDEXcADNdtotgIUjBH3RuP1rbDUrO7Iqz0sW/J8mCOBeo5P1qK8KwW5Ge1XQmWLGsHxDdeXGwzyeAK73ZK5zLV2NjSz52nW7dSvymtC6jw8Eo7HBrN8N/NYlD1U/8A1q3Hj3xAenNHNsFtRtuMKR70yJMNL/11P8hUsQxxSRD55v8Af/8AZRWcpajSArz+Fcv4pt/3kbY/irrCKxfEcG+FG9Gpc19BpGXLFizJ9TVvS4Plh92H6A0+eDNivHerdhFs8gegY/p/9eokykaGKay5xT6MVzyZaM67h8y5TitTS4ozqULy/wCrhSSZ/okbN/SqzJmYH0FbOkaSdQ07WJB98Wy20P8A10mkVP0XcaqnU5Zxl2CUbpo5yyjaG6s5ZM7rexku29mZXk/9mWrnhHT1FlA8g48q6u3z6IqD+h/Op54FurfxHqEIzBFAlvEfZ5UjT/xxDVv7LJZ+FLy9T5Ut9HCMfUz3ZXH5Ka64Yhq3l/wP8jJwPIdSUyXEznqzEn61UERLhfata5hxEC3Vjk1BbwbmeTH0/D/69cbjdm17FnRLDzrlTjjP8q7WCEJGeOtZXh+z8tC5HQYFbmMDFdMNFYylqyFxtQ1xevTB7pu6wjP1PauzuW2xMfQVwWtsVVVP35WMjfTtTqy5YNipq8jsvDow06DoGNby/dooqnsLqIB81Ni/1s3+8P8A0EUUViykSGqGsIGtefWiikMrlQbFc+tWoVAeLH9xv6UUUS2AsGkoorNlDf4jXVaQTb+DNUuI+JFjnlB/2lEYU/huJ+tFFYSNEZMKCLwJeqnAm1C3Vx6hACo/N2qz4jAh+Gg2DHni0V/cK7EfqxoorSHQlnlV8o3KOwFLaxKVUY4O3/GiitkSdbaxrHCoUY71LRRWqMyrqH/Hs3vxXA66xbU5geiYUD0GKKKit8JdL4j/2Q==",standby:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5voFH4UAdKAFHb/PpQO3+fSkA6cf54pQOn+fSgAHb/PpSUoHTj/PFGKADmj/P86Me1BH+cfWgAOef8+tKe/Xv/WjHXj1/r7UpB549e319qYAc89e/9aDnnr/nNBHXj17fX2oI5PH6fX2oAOc96Bnjr/nFGOen6f8A1qAPb9Pp7UAA7de39KBnjr2/pQB049O309qAOnHp2+ntQADPHXt/Sk5wP8+lAHTj07fT2oxx0/zx7UAJQc0dv/rUEcHikAmPagD/ADijv0/SgD2/SgAA6cfp9PalA6cfp9PakA6cfp9PalA6cfp9PagAA6cfp9PagD2/T/61AHTj9Pp7UY9v0/8ArUAGPb9P/rUuODx+n19qTHt+n/1qcF4PH6fX2oAXZ149e319v8/yeYW+b5Dxn+E/7X+z7fp+UsVsZA2EPQn7h9H/ANn2/wA9t+38M3c4mCWc29FkOPs7k8LOScCHt5Z9MY7YOzSMLgc48DDd8h4z/Cf9r/Z9v89mMhBPy/p9faus1bwlfaeZPPsZoyC4ANtIucNMD1hHTyz+XbB285c2rRuwMZBBP8BHc/7A/wA/oShbUCpt56fp/wDWoA56fp9PalK89P0/+tSAcjj9Pp7VAAB04/T6e3+f5gHTj07fT2/z/NAOnH6fT2/z/MA6cfp9Pb/P80AY4HH6fT2/z/NAOnH6fT2oA6cfp9PagD2/T6e1ABj2/T/61GODx+n/ANajHHT9P/rUEcHj9P8A61ACd+lAHtRRigAHbj/PFA7cf54oH+f0oHb/AD6UAGPb/PFAo/z/ACooAXHt/n8qeB7fp9fao6eP8/rTA2dNtklaQNFnCOeE9EkP/PM+n6duo9t0Hwzb3OlvI1jH/qpufsiZPGoD/n0/2R+Q9Ao8PsHCFztUkqw5UHgrJ7f5/l7d4d1C3h0qcDYQsM6sqIhwdmpYz+79/wAvbgbNXjoIu+MvCtokV2oshjfMdy2qgjDXp6i09h37DsAw8L1u2CX02IlUBjwIwvc/9M1/l/8AW9s8fazCy3hjSDd5kwQPGuSDJegnHl57+vp+HiGssjXspQLtLNjAGOp9FFCVo6gY7Lg9P0/+tTMe36fT2pzYz0/z+VMrEYAdOP0+ntQB04/T6e1A7f59KB2/z6UgAduP0+ntQPp+n/1qB2/z6UgoAXHtSH6UUUAFFFFAAO3+fSgdv8+lA/z+lAPT/PpQAen+fSij/P8AKgUAFOHf/PrTacD7/wCefegC3FLt3YI6MP0f3966e1157e3nQTOu4SDKPjOVuRz83P3/AMj+fIh8BufXv/ve/wDn+dr7SQr4fs3G7/rp/te/6/ntCVhHU6zrzXElwDMZW3yYZ3DDl5z13f7X+e/K3Uu+Rvm7nv7n3p1xcl2fL9S38Xu/+17/AOe9WR9zE7u57/X3onK4EZPNMFOJ9/1/+vSZrEYD/P6UDt/n0oB6f59KAen+fSgBB2/z6UUDt/n0ooAKKM0fjQAZ560A9Of1oz7/AK//AF6Aff8AX/69AAD05/zxSg9Of1+nvQD05/X6e9APTn9fp70AID7/AK/T3oz7/r/9elz7/r9PekB9/wBf/r0AGff9f/r0uevP6/8A16M+/wCv/wBejPv+v196AHbuDz69/r7/AOf5vMhw3zev8X+97+/+e8e7rz+v196cW68+vf6+/wDn+bAe8hO75yev8X+9/te/+e8bNyef1+vvQz9efXv9ff8Az/NC2e/6/wD16AEz7/r/APXoz7/r/wDXoz7/AK//AF6M+/6//XpAAPTn9fp70A9Of1+nvQD05/X6e9APTn9fp70AID05/wA8e9GfegHpz+v096M0AH40fjRn3ozQAZ5/+vQO3NFLyMdeaAEB6c/5496UHpz/AJ496B2/z6UDt/n0oAQHpz+v096M+9Hp/n0ozQAZ96M+/wCtGaKAFJ68/r9fegnrz+v196D3/wA+tB7/AOfWgAJ68/r9fegnrz+v/wBekPfn/PNGaADPvRnpzRmigAB/z+VGff8AzxR6f59KM/5/KgAz/n8qM+9HpSZoAXNGaSigCxFd3EMflxzuiZztB4zTrm+ur1YVuZ3lEQKoGP3QW3H9STRRTuwK4HT/AD6UAdP8+lFFIAA6f59KO1FFABijFFFAB6/59aCOv+fWiigAI/z+dIe9FFABjmlFFFACDt/n0oA/z+VFFAB6f59KKKKAEo9aKKAP/9k=",sphere:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5VGM89KXI7KKTFB9cCgBcjBHqKVOTg9PpTcH0oAzQAvGMevpSYqSGB7idIIEaWSQhUVRyzHsBV5dFuNzCbCbfvLkcfU9B+tAGaAPrV620ieZfMlkgtVxlTcNt389AOv49PerccMUGRBLChA+aQjcV/Pp/nimyf2a0KAyXk8rsS7thVcjAHYt3P59KAKj6XIjFfPgYjsrEn8sZpn2FySMjP+4/+Fafnx2n7oWVrIG+XfJmVYjnjknGfXjHtUVvq90s5O+SHystiF/LAI9h74oAgXR2A/fXdpBnp5rkE+2AD+Z496gudOurXiWJsDoyncv5jirL30V0S00sqSE/fKq4P1H9ant55InSJXjPmYVD5WM/THBHt/KgDGIweDmj610N/bW5kJeOyKkAh4ZGKkY9edreobvVH7BZXAeOC5kjnUHbFKnDHjjdxjv1FAGaCCOQTRgnk8d6GRo2KOCrDggjkH0pMkjGTQAZ+XHvQQRQKd1XB6L+tACfKRknBx0ApKDjJx0o7UAGKCO+MA0dqOp7/hQAp9cmko5z61d0+0EjLNKv7sHAGM7yOTj6D+lAD4EFpbGVyVeQbQR1VSOce5HH0Jq5eSboII55F8sA/wCh7yuxuCWyeASCM9zjnAxVaS4VrsMOSgJA6iJRzj3Y9z6mq0qyziLHzO25yc9OeSTQAt1b3OFYKWhzhNg+Ue3HepZAbeOOOIFrg7gcc+X9Pf37VNp0zabIWifDSxsmcAlgQR8oI4/3uvpSTas01tEk0UTxAsu1RsI6HqOT175oApJE8DAtMIT6A5b8h/WrxmtJbV5Hhy8jLG0xO3B5PKjscD34qr5cMvMMRf8A2Q+GH4HOfwq1ZQWr2+JmuY4pXIG0KxaRV+UDJHcgE9gfwoAqeVhiPs8Sgcl2Ylceuc1Zt9QFok3kwwNHt2MWXO8njj04zg9aYiSXKiNAs0A6ImQU9xnv/Oi906e1iijfYPMzJ95RkHgcZ46Hj3oADKI4RJHGuF6OpKkoT0Iz2PUe9S2lzY3EwW8jlijCnMsZDFFIx0OM9emarWkTo3lyxsYnBDbSDtz3FJeWk2nj7PMjJI3zNkcEfw49eDn8RQBbns2uEPmukjxjalwh+VgOgfuD6E/4VlSIY2KMpVh1Bq5biURpcrI0LINu4dXXtgd/T06Voyi01q2WRoPs1yqlfMTpIw6Ar0GcgZXAHXHJoAwQpOepA7ijooIJz9KQjbx3/lTiSec9u/egBFIDc8ikH545xRyp5pUGc+v0zQAnX04oyc8fpRQQR7EcUAFdBJdotpJC0cKOIYo42EeAVCgsDjkZLckde9YAHQZOTwRWrdbmvEhTq8W3HfJHH/stAEYt0jt2eaFrdZDtDg5UgcnaD17d6kuBFDBAsEiFihyki7dp3E854J5Bx0GaYt04tQpcyW9q21Ub5lJbngH1IJ+lQrJDcQvvBRw28kfMOeDx19O9AEYSZLqOWUMRvHz9c8+tNdcQOv8Ackxn6g/4U6OG4jObdjIDxmIkn8utaRmihNyJY45mY79y4VgRzhSOOhOTg+3rQBnx2oiUS3DtHFnKgD5nPsO31q22pGeGNikaeW52yBQXUYGM+o4qpMftb+Yky7+AEYbSPoen65pqRSCF4jGfM3qQpHPQ9qAHXcU32ry2YvuYeWScgg9CPzp4uWl8yGNyRnMakZHAxjHTkD9KmhkSLyVdVkZ1KbcnarYIByO/3en45qpEI5ZUWOGXzCQAEfv+IoAdAYZSXltxhepjOCx7DHTmtG5XEEE8Nx51wwZJoXXAVgeOOQx246dMd6ivfs0JEdtNgsu5mZeA38WCPcEZ9KjtbKW7glhh8uU53qEYdgSTj6CgCKGZZrg+fGynGJGXgBe+Qf6Yqa4/0KQi3cNHBJuiYjG4dCSOxPGR26VXluwALd1Mka8Fm4bP19PQGrUMDXV20FurT/aFA8lfvklcjA7nOOlAFbUoV3+fGSY2OPocZGfwqlkjofyrYt7V9qJIjPBKpjduBjHIbk9Rn+lZt3bPa3Mts7IXhcxnYdykg4OCOtAEIx3NKMn1oBxkEUgI6EUAKOOGFIDgH3pTwSOvbmkGc8daAJrWL7RdQwryzuqj3ya051cX5uyFUKQEDOowc49ewH8qxs+vWtrWPKvoLS7gJjLxYlDYAMoJ3EHtnAOD70AV5LOSKWWyBRggZTtkU5YHOevtge1Q2tpN5yqI2O/5MDng8VJOHS5dihEkTbiCPvJnP6fy+lQw2/8ApjqANsWWyegA6E/pQBMLeSyZvNV4nj4duQQf7oPr7/WnS6lLcyw3NwEl+URHK9FUYAyP9nAqO4uWeNXgd1VDtbBIyf7x9z/SltZHuElVxGyqN5LoOMe45yRmgCP7PE8rx4aIqTuOdyr/AFH61bgeRIpba2ZJkZOd3JbBzwDyB16VBd3EM3l/umiQqD+7bIJHBJz1PHr3plrAJbmPyHVyzAbD8pPr14/WgCRIkkTywslvMHBVSCck8fXrj1qa9t3spJI7dklkkGZJImDhQedox9eT+H1mWa60X7RYxMSZEaKWT7y4HO1SeOqjJHXtx1os8c8cJ8khiSmYzggjkcdO/tQBB5ZlhVF+Zkcrj2P/AOo/nU9tMkDNEhD/AC5Zuu7HOB7cVZgnASWCO4jmLociYcnHOAew47EZqrGsUUsbTQyQjcMsvzKR36/40ARl5BN5BAmwxUBx/I9auXEsFmInt4i02wBmdshCOoGMdsdexp89obMK6PHLPIgwqnlMZU5B7/L/AJ5qgiPIrwsH8zO8AjnPf9OfwoAutJI8Zs92ImkWfYowMZwOB7EmqF8xa8uGJ+9IzH8TVxMSXSshyPKeL8lKj/2WqNyP9Il65Dnj8aAIjwcgYFGQOn40EHJzx3o6cg0AAxnnkUoO00AgYP50lAByO+K1NPuI2spreXiIMCc9lOASPcHafz9ay81NZ3ktjL5kRGSCpDDIZSMEH2IoAtXE01temJlWXbt+XqD8o6H0Pt61oX2noNPhntvMjW5VRKZ12hWX+AN6Y2ntn8qJ3fWbPzIJ382BAME4O0fwsR1x2b069KoG5MMlwhXcqMA6P0ZR8pz+Q9xQA23szG43yRvG3yv5X7zj8PTrQ6bZwtuyskbcL0ZsdSQe59s1FPbhCJrZmaLG4f3lHv8A41M5nnuZF+WQbz/rBnGenPWgBjWkr5tkRi6yfKDwSrDrz06frSSypaRNbQMru3Ekw7/7K+3v3+laf9owfZTa2qsuIzHNJnf5vO4YVvurxjAPOAT1xWYVik6LE30Yxn9ePyoAFnkiuY5Y2YbwrYXuehH5g1YkmWKO4tXSKSRSC7gbWGDgqCPrzSywxW1qC3nRTAlTuTIjU8jnPXr24+vRsNobm7VY5ov3qc7iVVflwSSRgAEZz7UAVoET7QjRPltw/duME+3oasyxvocskUmRcjIMYP3Pr2zUZmWxYw22fP8AuvOQQR7KO316/SoZZ2WaVTtkTe3yN25PT0oAtanfNdTtPPDA7s7A7Ywg7HgLgDrUlldR2zpIfMDFWKxtiRVG084P6Cie2Qo8owXEuUt2+82V6+44Huc9KqQKdzz3BJJRiFPV+MflQBoWFvbz2zu0iQ/OuwgMrEZyxxyMAKCeRWXezRTXdw8O/wAppGaPcMNgnjOOM4q1du1taiI7RJKMuR2H90emMAfXPpWbnFABjnmg8nilzjnHWjOBgdPpQAgz2JyeMUdvejJBznmkoAUe/SlHPBPHWkzjoaCc0AWLC+uNPuY7i3Yh0YMARkEg9x3rfe3tdUk8+BIIkuOAd6psJz8jZ4GD06ZAH0HMjk5qS3nmtZN8bFTjBHZh6Ed6AL6QR2khgaVmkz90/uyjdM5PX8OtT6nFLb7PtNo9rJKgOI1IVBjrg92GDnPQ+9PgMOtlYnKx3ORje3BH16jHrz7jjNNNneusyxRSXESMZF8o5Ma9CQVyAOnPTigDPsw1vcJLGVmQH5lU/MR34PNEtu2nzsjDdLnCLjt2bHv2qWSV7dA0c32kjqzgEIfoe/v0q1e6tcSW8ImOXUbZZF+WRieRuPcY4x7GgCnZEwuyyzsvmfKUQ5Oc8Z7DnHr9KsXd9mxt0a1hjyGH7sbXYbjyx7nPHTsaghXzQZA0Lxr1DRqrE+g9T+NTXctxcpFNDGsTbcOka7dnJ7nkA/XrmgBlrbJePGpMkRLDbJIMKOehb098cUyeB7aSTYizSEkl1wwX6D+p/wDr0wIkMZlnmLO+VUJ8xx3OTx7d+9WrAGY/NEsMKLu85+Sg+p7fT8KAGXkbRuPMjZ3cbghBJJboT36AfWrNnC028XId7p0Ox+f3SrgszHHICg4Hb14xUlybqa6nu5b2V4iSXud7EyDoAM8rkDoefbtWbc6pIyvFbloomG18Mdzj0J9PbpQBXvbgXEzOowmcKO4UdBUJ6kDp9aMAg4x0zQu4HIH6UAJyT7mlHGc9P50ZxzzmkzQAA4OaVxtYgdqKKAAgYJ6YxSdqKKAHDBU57U0c/lRRQA7c0MgaNmVlIIYHBB9a39MuJdSS4muHbzYvnDqcEk9c9vyHNFFAFZr+e31RI9yzJvUYmUPwccc9vark0aTWjXaxxxNPlmSONdoOc8Ag4oooAx57qbe6B9qxkqoUAAc1ZmvrprqC1knklhVUjCSHcArYJ4PuSaKKAJtSEdrqP2dIIiASocjkAHHbj9K2dZ0u20bRrK5hVppbiLz3aY7vm3ED04AHH1NFFAHKXN7cXTBZJWKZBCDhQfYDjvVZuWNFFADto37e1DDaOPU0UUAIvLgdM+lIfvUUUAf/2Q=="},MT=["w2","w1","w3","w5"].map(s=>({src:`/media/${s}.mp4`,poster:`/media/${s}.jpg`})),ST=["t2","t3","t1"].map(s=>({src:`/media/${s}.mp4`,poster:`/media/${s}.jpg`}));function AT({page:s,onClose:e,onGo:t}){return Be.jsx("div",{className:`page ${s==="performances"?"wide":""}`,onClick:e,children:Be.jsxs("article",{onClick:r=>r.stopPropagation(),children:[Be.jsxs("nav",{className:"tabs",children:[["about","instrument","performances"].map(r=>Be.jsx("button",{className:r===s?"on":"",onClick:()=>t(r),children:r},r)),Be.jsxs("button",{className:"close",onClick:e,"aria-label":"close",children:[Be.jsx("span",{className:"cl",children:"close "}),"×"]})]}),s==="about"&&Be.jsxs("section",{children:[Be.jsx("h2",{children:"The machine reads, the hand leads."}),Be.jsxs("p",{children:[Be.jsx("b",{children:"<N4TH>"})," is the visual instrument of Nathalia Cury, a Brazilian art director based in Stuttgart for six years. With a background in typography, editorial design and brand identity, she brings a designer's eye to the club."]}),Be.jsx("p",{children:"She built <N4TH> together with AI, using it as a design partner from the first sketches in Figma Make to hand tracking with MediaPipe and real-time graphics in Three.js. The result is a tool that sits between graphic design, code and performance."}),Be.jsx("p",{children:"On stage, a camera reads her hands and the music reads the room. Every gesture becomes a move in the visuals: a fist gathers, an open palm releases, a clap breaks everything open. She moves between 2D and 3D worlds, turns colour palettes live, or lets the system run on its own and evolve with the night."}),Be.jsx("h3",{children:"Contact"}),Be.jsxs("p",{children:[Be.jsx("a",{href:"mailto:cury.nathalia@gmail.com",children:"cury.nathalia@gmail.com"}),Be.jsx("br",{}),Be.jsx("a",{href:"https://instagram.com/nathcury",target:"_blank",rel:"noreferrer",children:"@nathcury"})]})]}),s==="instrument"&&Be.jsxs("section",{children:[Be.jsx("h2",{children:"Built with AI, played by hand."}),Be.jsx("p",{children:"The tool runs in a browser. It listens to the music — its kicks, its builds, its silences — and it watches the hands. Every visual answers both: the sound gives the pulse, the hand gives the decision."}),Be.jsxs("ul",{children:[Be.jsxs("li",{children:[Be.jsx("b",{children:"one finger"})," slow · ",Be.jsx("b",{children:"five"})," fast"]}),Be.jsxs("li",{children:[Be.jsx("b",{children:"a fist"})," gathers · ",Be.jsx("b",{children:"an open palm"})," releases"]}),Be.jsxs("li",{children:[Be.jsx("b",{children:"a clap"})," breaks everything open"]}),Be.jsx("li",{children:"the music: pulse, kicks, build-ups, the drop"})]}),Be.jsx("p",{children:"Every part of it — the visuals, the way they listen, the way they read a gesture — was written in conversation with AI. The machine can play on its own, so the performance stays with the question: who leads and who follows?"}),Be.jsxs("figure",{children:[Be.jsx("img",{src:"/media/instrument.jpg",alt:"The instrument: the visuals of the set, layers, effects, the sound and the hands"}),Be.jsx("figcaption",{children:"The instrument as it is played: the set of visuals, the layers, the effects, what it hears."})]}),Be.jsxs("figure",{children:[Be.jsx("img",{src:"/media/library.jpg",alt:"The library of visuals, and the set chosen from it"}),Be.jsx("figcaption",{children:"The library: every visual of the instrument, and below, the set chosen for the night."})]})]}),s==="performances"&&Be.jsxs("section",{children:[Be.jsx("h2",{children:"Performances"}),Be.jsx("p",{className:"sub",children:"Stuttgart, November 2026 — Nische at Kultur Bunker. Live with a DJ set."}),Be.jsx("div",{className:"shows wide",children:MT.map(r=>Be.jsx("video",{src:r.src,poster:r.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,disablePictureInPicture:!0,disableRemotePlayback:!0},r.src))}),Be.jsx("div",{className:"shows tall",children:ST.map(r=>Be.jsx("video",{src:r.src,poster:r.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,disablePictureInPicture:!0,disableRemotePlayback:!0},r.src))})]})]})})}const ho=[{id:"dust",name:"Dust",note:"a fist gathers it into a circle"},{id:"sphere",name:"Planet",note:"a fist pulls it out of shape"},{id:"line",name:"Line",note:"an open hand unfolds it"},{id:"jellyfish",name:"Jelly",note:"a fist closes the bells"},{id:"dandelion",name:"Dandelion",note:"the hand moves the wind"},{id:"standby",name:"Standby",note:"a fist closes the picture to a point"}],hd={dust:{colors:Yr(0,0,"grayscale"),params:{"look.glow":2.2,"field.size":1.3,"field.drift":1.8,"look.trail":.55,"sound.beat":.12,"sound.sparks":.5,"sound.bass":.4}},line:{colors:Yr(0,0,"grayscale"),params:{"line.zoom":.9,"line.weight":1.4,"line.wave":2.65,"line.speed":.65,"line.birth":.6,"hands.open":1,"hands.pull":1,"hands.clap":1,"sound.beat":.7,"sound.bass":2,"sound.grow":.75}},dandelion:{colors:Yr(200,60,"black"),params:{"sound.gust":0,"sound.wind":1.4,"field.return":7.5,"field.sway":1.9,"field.bounce":0,"field.drift":.44,"field.backdrop":0,"colour.speed":2.5,"colour.offset":0,"colour.palette":0,"colour.depth":.32}},jellyfish:{colors:Yr(245,100,"contrast"),params:{"swarm.backdrop":0,"swarm.height":.3,"swarm.arrival":11,"colour.palette":3,"sound.flow":1.7,"swarm.drift":1.3,"sound.swell":1.2,"sound.beat":.6}},standby:{colors:Yr(0,0,"grayscale"),params:{"sound.quiet":.4,"grid.words":0}},sphere:{colors:Yr(0,0,"grayscale"),params:{"shape.style":2,"shape.size":1.2,"shape.morph":.32,"shape.lobes":1.05,"shape.detail":2,"motion.spin":.4,"motion.flow":1,"motion.dust":1,"motion.points":3600,"sound.beat":0,"sound.drop":0,"sound.bass":.3,"sound.squash":1,"sound.spin":1.4,"shape.steady":1}}},ET={dandelion:"hue-rotate(2.59rad) saturate(0.95) contrast(1.28)",line:"sepia(1) saturate(4) hue-rotate(188deg) brightness(1.15)"},wT=Yr(110,70,"contrast"),Xh={dust:{path:"field.count",min:200,max:5e3,start:.8},line:{path:"line.count",min:1,max:40,start:11/39},dandelion:{path:"field.count",min:1,max:12,start:.2},jellyfish:{path:"swarm.count",min:1,max:8,start:.43},standby:{path:"grid.detail",min:.2,max:1,start:1},sphere:{path:"shape.detail",min:2,max:6,start:0}},bv=362,Lg=s=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`,da=[{name:"Johannex · m4n4th",src:"/tracks/m4n4th.mp3"}];class TT{constructor(e,t){V(this,"parts");this.canvas=e,this.ctx=t;const r=()=>{const f=document.createElement("canvas");return f.width=e.width,f.height=e.height,f},o=r(),l=r(),c=new Cw(o,o.getContext("2d"),0);c.setParams({"look.flow":2.65,"look.zoom":2.85,"look.detail":2,"look.veins":1.35,"look.grain":.3}),this.parts=[{r:c,c:o,filter:"hue-rotate(-0.2rad) contrast(1.3)",alpha:.45,blend:"source-over",colors:wT},{r:new vw(l,l.getContext("2d")),c:l,filter:"saturate(1.88) contrast(1.3)",alpha:.94,blend:"screen",colors:hd.jellyfish.colors}]}setParams(e){var t,r;(r=(t=this.parts[1].r).setParams)==null||r.call(t,e)}render(e,t,r){const{canvas:o,ctx:l}=this;l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,o.width,o.height);for(const c of this.parts)(c.c.width!==o.width||c.c.height!==o.height)&&(c.c.width=o.width,c.c.height=o.height),c.r.render(e,c.colors,r),l.globalAlpha=c.alpha,c.blend==="screen"?(l.filter=`${c.filter} invert(1)`,l.globalCompositeOperation="multiply",l.drawImage(c.c,0,0),l.globalCompositeOperation="lighter"):l.globalCompositeOperation=c.blend,l.filter=c.filter,l.drawImage(c.c,0,0);l.filter="none",l.globalAlpha=1,l.globalCompositeOperation="source-over"}destroy(){var e,t;for(const r of this.parts)(t=(e=r.r).destroy)==null||t.call(e)}}function bT(s,e,t){return s==="dust"?new nw(e,t):s==="line"?new rw(e,t):s==="jellyfish"?new TT(e,t):s==="standby"?new Ew(e,t):s==="sphere"?new ww(e,t):new hw(e,t)}const Qf=(s,e)=>{const t=Xh[s],r=t.min+e*(t.max-t.min);return{...hd[s].params,[t.path]:t.max>2?Math.round(r):r}};function CT(s){var r,o,l;const e=document.querySelector(s);if(!e||s===".stage")return{top:"42%",left:"50%",transform:"translate(-50%, -50%)"};const t=e.getBoundingClientRect();if(window.innerWidth<=720&&(s===".track"||s===".cards")){const c=(r=document.querySelector(".desk"))==null?void 0:r.getBoundingClientRect(),f=e.getBoundingClientRect();if(c)return{top:c.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}if(s===".fx"&&window.innerWidth<=720){const c=(o=document.querySelector(".fx.open"))==null?void 0:o.getBoundingClientRect();if(c)return{top:c.top-16,left:window.innerWidth/2,transform:"translate(-50%, -100%)"};const f=(l=document.querySelector(".fxbtn"))==null?void 0:l.getBoundingClientRect();if(f)return{top:f.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}return s===".fx"?{top:t.top+t.height/2,left:t.left-14,transform:"translate(-100%, -50%)"}:{top:t.top-16,left:t.left+t.width/2,transform:"translate(-50%, -100%)"}}const RT=Math.max(1,Math.min(5,Number(new URLSearchParams(location.search).get("guide"))||2)),PT={left:null,right:null},LT={dust:.35,sphere:0,line:.8,jellyfish:.7,dandelion:.35,standby:.8},IT=bv/ho.length,DT=["5 fingers","2 fingers","fist","pinch","clap"],UT={bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0};function NT(s,e,t){return{position:{x:s,y:e},gesture:t>.5?"fist":"open",openness:1-t,fingerCount:t>.5?0:3,velocity:0}}const Jf=[{key:"play",at:".track",text:"Play a track — the visual moves with the music."},{key:"hand",at:".stage",text:"Raise your hand to the camera — or move the mouse."},{key:"fist",at:".stage",text:"Close your hand (or hold the mouse button) — then open it."},{key:"clap",at:".stage",text:"Clap (or click quickly)."},{key:"fx",at:".fx",text:"Shape it: trail, colour, amount."},{key:"switch",at:".cards",text:"Try another visual."}];function FT(){const s=bt.useRef(null),[e,t]=bt.useState("dust"),[r,o]=bt.useState(!0),[l,c]=bt.useState(0),f=xe=>{t(xe),c(N=>N+1)};bt.useEffect(()=>{if(!r)return;const xe=window.setInterval(()=>{t(N=>ho[(ho.findIndex(Se=>Se.id===N)+1)%ho.length].id)},IT*1e3);return()=>window.clearInterval(xe)},[r,l]);const d=bt.useRef(e);d.current=e;const[h,g]=bt.useState(0),[x,m]=bt.useState(0),[_,S]=bt.useState(()=>Object.fromEntries(ho.map(xe=>[xe.id,Xh[xe.id].start]))),[T,y]=bt.useState(!1);bt.useEffect(()=>{g(0),m(0),S(xe=>({...xe,[e]:Xh[e].start}))},[e]);const M=bt.useRef({trail:h,hue:x,amounts:_});M.current={trail:h,hue:x,amounts:_};const[E,P]=bt.useState(null),[R,H]=bt.useState("off"),I=bt.useRef(PT),O=bt.useRef(null);O.current=E;const A=bt.useRef({x:.5,y:.5,on:!1,down:0,closed:0,clapAt:0,moved:0}),U=bt.useCallback(async()=>{H("asking");try{const xe=await navigator.mediaDevices.getUserMedia({video:{width:640,height:360,facingMode:"user"}}),N=document.createElement("video");N.muted=!0,N.playsInline=!0,N.srcObject=xe,await N.play(),P(N),H("on")}catch{H("refused")}},[]);bt.useEffect(()=>{U()},[U]);const K=bt.useRef(null),[z,j]=bt.useState(null),[le,ce]=bt.useState(0),[q,te]=bt.useState(bv),W=bt.useRef(0),F=bt.useRef("");W.current=le;const k=bt.useRef(null),ee=bt.useCallback(xe=>{var Se;let N=K.current;if(!N){N=new Audio,N.crossOrigin="anonymous",N.loop=!0,N.addEventListener("timeupdate",()=>ce(N.currentTime)),N.addEventListener("loadedmetadata",()=>{te(N.duration||0),Math.abs(N.currentTime-W.current)>1&&(N.currentTime=W.current)}),K.current=N;const He=new AudioContext,Qe=He.createMediaElementSource(N),_e=He.createAnalyser();_e.fftSize=2048,_e.smoothingTimeConstant=.55,Qe.connect(_e),_e.connect(He.destination),k.current={ctx:He,analyser:_e,data:new Uint8Array(_e.frequencyBinCount),state:hT()}}if((Se=k.current)==null||Se.ctx.resume(),z===xe){N.pause(),j(null);return}if(F.current!==da[xe].src){F.current=da[xe].src,N.src=da[xe].src,N.currentTime=W.current;const He=N;fetch(da[xe].src).then(Qe=>Qe.blob()).then(Qe=>{const _e=He.currentTime,Rt=!He.paused;He.src=URL.createObjectURL(Qe),He.currentTime=_e,Rt&&He.play().catch(()=>{})}).catch(()=>{})}N.play().catch(()=>{}),j(xe)},[z]),[D,B]=bt.useState(new Set),[ve,we]=bt.useState(()=>{try{return!localStorage.getItem("n4th-guide-seen")}catch{return!0}}),me=xe=>{we(xe);try{localStorage.setItem("n4th-guide-seen","1")}catch{}},X=bt.useCallback(xe=>B(N=>N.has(xe)?N:new Set(N).add(xe)),[]);bt.useEffect(()=>{z!==null&&X("play")},[z,X]);const ie=Jf.find(xe=>!D.has(xe.key));bt.useEffect(()=>{if(!ie)try{localStorage.setItem("n4th-guide-seen","1")}catch{}},[ie]),bt.useEffect(()=>{const xe=s.current,N=xe.getContext("2d"),Se=document.createElement("canvas"),He=Se.getContext("2d");let Qe=null,_e=null;const Rt=3;let L=performance.now(),w=0;const ne=xT();let Me=0,Te="",Re=.3,Oe=-1,pe=0,ge=-1e9,Ve=0,je=0,Ne=450;const Fe=new Uint8Array(300),dt=(Ae,he,ke)=>{(Ae.width!==he||Ae.height!==ke)&&(Ae.width=he,Ae.height=ke)},Mt=()=>{const Ae=Math.min(window.devicePixelRatio||1,1920/Math.max(1,window.innerWidth)),he=Math.round(window.innerWidth*Ae),ke=Math.round(window.innerHeight*Ae);dt(xe,he,ke),dt(Se,he,ke),Qe&&dt(Qe.work,he,ke),_e&&dt(_e.work,he,ke)},At=Ae=>{const he=document.createElement("canvas");he.width=xe.width,he.height=xe.height;const ke=bT(Ae,he,he.getContext("2d"));return{v:Ae,r:ke,amount:-1,work:he,alpha:0,circle:-1,go:-1}},Y=Ae=>{var Ci,li,ci,Kn,vi,sr,qn,un,Pn,pn,Mn,Sn;w=requestAnimationFrame(Y);const he=Math.min(.1,(Ae-L)/1e3);L=Ae,Mt();const ke=d.current;Qe?Qe.v!==ke&&((li=_e==null?void 0:(Ci=_e.r).destroy)==null||li.call(Ci),_e=Qe,Qe=At(ke)):(Qe=At(ke),Qe.alpha=1),Qe.alpha=Math.min(1,Qe.alpha+he/Rt),_e&&(_e.alpha=Math.max(0,_e.alpha-he/Rt),_e.alpha<=0&&((Kn=(ci=_e.r).destroy)==null||Kn.call(ci),_e=null));for(const lt of[Qe,_e])lt&&O.current&&lt.video!==O.current&&((sr=(vi=lt.r).setVideoElement)==null||sr.call(vi,O.current),lt.video=O.current);const Pe=A.current;Pe.closed+=((Pe.down&&Ae-Pe.down>220?1:0)-Pe.closed)*Math.min(1,he*10);let Ee=I.current;!Ee.left&&!Ee.right&&Pe.on&&Ae-Pe.moved<4e3&&(Ee={left:NT(Pe.x,Pe.y,Pe.closed),right:null,clapping:Ae-Pe.clapAt<120,clapIntensity:1});let Je=UT;const rt=k.current;if(rt&&K.current&&!K.current.paused){rt.analyser.getByteFrequencyData(rt.data);let lt=0;for(let mn=1;mn<300;mn++){const Ln=rt.data[mn]-(Fe[mn]??0);Ln>0&&(lt+=Ln),Fe[mn]=rt.data[mn]}Ne+=(lt-Ne)*(1-Math.exp(-he*.25));let Kt=0;for(let mn=1;mn<=6;mn++)Kt+=rt.data[mn];Kt/=6,Oe<0&&(Oe=Kt),Kt-Oe>40&&Kt-pe>12&&Ae-ge>1e3&&(ge=Ae,Ve=Math.min(1,.7+(Kt-Oe-40)/30)),Oe+=(Kt-Oe)*(1-Math.exp(-he*.6)),pe=Kt,Je={...pT(rt.data,rt.ctx.sampleRate,rt.state,.8,Date.now()),live:!0}}const st=new Set;for(const lt of[Ee.left,Ee.right])lt&&(lt.gesture==="fist"?st.add("fist"):lt.gesture==="pinch"?st.add("pinch"):lt.fingerCount===2?st.add("2 fingers"):((lt.fingerCount??0)>=5||(lt.openness??0)>.85)&&st.add("5 fingers"));Ee.clapping&&(Me=Ae),Ae-Me<500&&st.add("clap");const xt=[...st].sort().join("|");xt!==Te&&(Te=xt,Xe(st)),KE(he,[_T(Ee,ne,he)]),qE(0);const Zt=M.current;He.globalCompositeOperation="source-over",He.globalAlpha=1,He.fillStyle="#000",He.fillRect(0,0,Se.width,Se.height);for(const lt of[_e,Qe]){if(!lt)continue;const Kt=Zt.amounts[lt.v];if(lt.v==="dust"){const In=Je.live?Math.max(0,Math.min(1,(Ne-520)/260)):0;Re+=((1-In*.6)*.3-Re)*(1-Math.exp(-he*.3)),(Math.abs(Re-lt.circle)>.01||Math.abs(In-lt.go)>.04||Math.abs(Kt-lt.amount)>.001)&&((un=(qn=lt.r).setParams)==null||un.call(qn,{...Qf(lt.v,Kt),"form.circle":Re,"sound.quiet":1.6*(1-In)+.4,"sound.beat":.12+.8*In,"sound.sparks":.5+1.3*In,"sound.bass":.4+.8*In,"field.drift":1.8+.8*In}),lt.amount=Kt,lt.circle=Re,lt.go=In)}else if(lt.v==="sphere"){const In=(Ae-ge)/1e3,Xi=In<.25?1:Math.exp(-(In-.25)*1.1);je+=(Xi-je)*(1-Math.exp(-he*(Xi>je?10:3)));const C=Je.live?Math.max(0,Math.min(1,(Ne-520)/260)):0,Z=.32+.22*C,ue=Z+(.85-Z)*je;(Math.abs(ue-lt.circle)>.005||Math.abs(C-lt.go)>.03||Math.abs(Kt-lt.amount)>.001)&&((pn=(Pn=lt.r).setParams)==null||pn.call(Pn,{...Qf(lt.v,Kt),"shape.morph":ue,"motion.flow":1+1.6*C,"motion.spin":.4+.5*C}),lt.amount=Kt,lt.circle=ue,lt.go=C)}else Math.abs(Kt-lt.amount)>.001&&((Sn=(Mn=lt.r).setParams)==null||Sn.call(Mn,Qf(lt.v,Kt)),lt.amount=Kt);const mn=Ae-ge<140&&!Ee.clapping?{...Ee,clapping:!0,clapIntensity:Ve*LT[lt.v]}:Ee;lt.r.render(mn,hd[lt.v].colors,Je);const Ln=lt.alpha*lt.alpha*(3-2*lt.alpha),Nt=Zt.hue?lt.v==="dust"||lt.v==="standby"?`sepia(1) saturate(5) hue-rotate(${Zt.hue-40}deg)`:`hue-rotate(${Zt.hue}deg)`:"";He.filter=[ET[lt.v],Nt].filter(Boolean).join(" ")||"none",He.globalAlpha=Ln,He.globalCompositeOperation="lighter",He.drawImage(lt.work,0,0)}He.filter="none",He.globalCompositeOperation="source-over",He.globalAlpha=1,N.globalCompositeOperation="source-over";const cn=Zt.trail*Zt.trail*1.5,jn=cn<.005?0:Math.exp(-he*Math.LN2/cn);N.globalAlpha=1-jn,N.fillStyle="#000",N.fillRect(0,0,xe.width,xe.height),N.globalAlpha=1,N.globalCompositeOperation=jn>0?"lighten":"source-over",N.drawImage(Se,0,0),N.globalCompositeOperation="source-over"};return w=requestAnimationFrame(Y),()=>{var Ae,he,ke,Pe;cancelAnimationFrame(w),(he=Qe==null?void 0:(Ae=Qe.r).destroy)==null||he.call(Ae),(Pe=_e==null?void 0:(ke=_e.r).destroy)==null||Pe.call(ke)}},[]);const se=xe=>{const N=A.current;N.x=xe.clientX/window.innerWidth,N.y=xe.clientY/window.innerHeight,N.on=!0,N.moved=performance.now(),R!=="on"&&X("hand")},be=xe=>{se(xe),A.current.down=performance.now()},Ie=()=>{const xe=A.current,N=performance.now()-xe.down;xe.down&&N<220&&(xe.clapAt=performance.now(),X("clap")),xe.down&&N>400&&X("fist"),xe.down=0},[ye,Ke]=bt.useState(!1),[We,Xe]=bt.useState(new Set),tt=bt.useCallback(xe=>{var N,Se;I.current=xe,Ke(!!(xe.left||xe.right)),(xe.left||xe.right)&&X("hand"),(((N=xe.left)==null?void 0:N.gesture)==="fist"||((Se=xe.right)==null?void 0:Se.gesture)==="fist")&&X("fist"),xe.clapping&&X("clap")},[X]),[it,ut]=bt.useState(()=>{const xe=location.pathname.replace(/^\/+|\/+$/g,"");return["about","instrument","performances"].includes(xe)?xe:null}),pt=xe=>{ut(xe);try{history.replaceState(null,"","/"+(xe??""))}catch{}};return Be.jsxs(Be.Fragment,{children:[Be.jsx("canvas",{ref:s,className:"stage",onPointerMove:se,onPointerDown:be,onPointerUp:Ie,onPointerLeave:()=>{A.current.on=!1,A.current.down=0}}),E&&Be.jsx(Jw,{videoElement:E,onHandData:tt}),Be.jsxs("header",{className:"top",children:[Be.jsx("div",{className:"brand",children:"<N4TH>"}),Be.jsx("nav",{children:["about","instrument","performances"].map(xe=>Be.jsx("button",{onClick:()=>pt(xe),children:xe},xe))})]}),ve&&ie&&!it&&!(T&&window.innerWidth<=720)&&Be.jsxs("div",{className:`guide g${RT}`,style:CT(ie.at),"data-at":ie.at,children:[Be.jsxs("span",{className:"count",children:[Jf.indexOf(ie)+1,"/",Jf.length]}),Be.jsx("span",{children:ie.text}),ie.key==="hand"&&R!=="on"&&Be.jsx("button",{className:"cam",onClick:U,disabled:R==="asking",children:R==="refused"?"camera not allowed — the mouse plays":R==="asking"?"…":"allow camera"}),Be.jsx("button",{className:"x",onClick:()=>me(!1),title:"Hide the guide",children:"×"})]}),Be.jsxs("aside",{className:`fx ${T?"open":""}`,onPointerDown:()=>X("fx"),children:[Be.jsx("div",{className:"fxt",children:"EFFECTS"}),Be.jsxs("label",{children:["Trail",Be.jsx("input",{type:"range",min:0,max:1,step:.01,value:h,onChange:xe=>g(+xe.target.value)})]}),Be.jsxs("label",{children:["Colour",Be.jsx("input",{type:"range",min:0,max:360,step:1,value:x,onChange:xe=>m(+xe.target.value)})]}),Be.jsxs("label",{children:["Amount",Be.jsx("input",{type:"range",min:0,max:1,step:.01,value:_[e],onChange:xe=>S(N=>({...N,[e]:+xe.target.value}))})]})]}),Be.jsxs("footer",{className:"desk",children:[Be.jsx("div",{className:"cards",children:ho.map((xe,N)=>Be.jsxs("button",{className:`card ${e===xe.id?"on":""}`,onClick:()=>{f(xe.id),xe.id!=="dust"&&X("switch")},title:xe.note,children:[Be.jsx("img",{src:yT[xe.id],alt:""}),Be.jsx("span",{className:"num",children:N+1}),Be.jsx("span",{className:"name",children:xe.name})]},xe.id))}),Be.jsx("div",{className:"sep"}),Be.jsxs("div",{className:"tracks",children:[da.map((xe,N)=>Be.jsxs("button",{className:`track ${z===N?"on":""}`,onClick:()=>ee(N),children:[Be.jsx("span",{children:z===N?"❚❚":"▶"})," ",xe.name]},xe.src)),Be.jsxs("div",{className:"timeline",children:[Be.jsx("input",{type:"range",min:0,max:Math.max(1,q),step:.1,value:le,onChange:xe=>{const N=K.current,Se=+xe.target.value;ce(Se),N&&(N.currentTime=Se)}}),Be.jsxs("span",{children:[Lg(le)," / ",Lg(q)]})]})]}),Be.jsx("div",{className:"sep"}),Be.jsx("button",{className:`autobtn ${r?"on":""}`,onClick:()=>o(xe=>!xe),title:"Auto: the track shared among the visuals, one after the other",children:"auto"}),Be.jsx("button",{className:`fxbtn ${T?"on":""}`,onClick:()=>{y(xe=>!xe),X("fx")},children:"FX"}),Be.jsx("button",{className:`camera ${R==="on"?"on":""}`,onClick:R==="on"?void 0:U,title:"Play with your hand through the camera",children:R==="on"?Be.jsxs(Be.Fragment,{children:[Be.jsx("span",{className:`dot ${ye?"seen":""}`,children:"●"})," hand"]}):R==="refused"?"mouse":"camera"}),Be.jsx("div",{className:"words",children:DT.map(xe=>Be.jsx("span",{className:We.has(xe)?"lit":"",children:xe},xe))})]}),it&&Be.jsx(AT,{page:it,onClose:()=>pt(null),onGo:pt})]})}g_.createRoot(document.getElementById("root")).render(Be.jsx(bt.StrictMode,{children:Be.jsx(FT,{})}));
