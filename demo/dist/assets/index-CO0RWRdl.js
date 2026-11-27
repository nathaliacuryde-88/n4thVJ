var s_=Object.defineProperty;var o_=(s,e,t)=>e in s?s_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var B=(s,e,t)=>o_(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var $u={exports:{}},ia={},ef={exports:{}},It={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function a_(){if(Nm)return It;Nm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function m(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function y(U,V,Ae){this.props=U,this.context=V,this.refs=T,this.updater=Ae||_}y.prototype.isReactComponent={},y.prototype.setState=function(U,V){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,V,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function M(){}M.prototype=y.prototype;function w(U,V,Ae){this.props=U,this.context=V,this.refs=T,this.updater=Ae||_}var P=w.prototype=new M;P.constructor=w,S(P,y.prototype),P.isPureReactComponent=!0;var R=Array.isArray,z=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function E(U,V,Ae){var Se,de={},X=null,le=null;if(V!=null)for(Se in V.ref!==void 0&&(le=V.ref),V.key!==void 0&&(X=""+V.key),V)z.call(V,Se)&&!O.hasOwnProperty(Se)&&(de[Se]=V[Se]);var se=arguments.length-2;if(se===1)de.children=Ae;else if(1<se){for(var Me=Array(se),be=0;be<se;be++)Me[be]=arguments[be+2];de.children=Me}if(U&&U.defaultProps)for(Se in se=U.defaultProps,se)de[Se]===void 0&&(de[Se]=se[Se]);return{$$typeof:s,type:U,key:X,ref:le,props:de,_owner:I.current}}function D(U,V){return{$$typeof:s,type:U.type,key:V,ref:U.ref,props:U.props,_owner:U._owner}}function K(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function k(U){var V={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ae){return V[Ae]})}var j=/\/+/g;function ce(U,V){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):V.toString(36)}function re(U,V,Ae,Se,de){var X=typeof U;(X==="undefined"||X==="boolean")&&(U=null);var le=!1;if(U===null)le=!0;else switch(X){case"string":case"number":le=!0;break;case"object":switch(U.$$typeof){case s:case e:le=!0}}if(le)return le=U,de=de(le),U=Se===""?"."+ce(le,0):Se,R(de)?(Ae="",U!=null&&(Ae=U.replace(j,"$&/")+"/"),re(de,V,Ae,"",function(be){return be})):de!=null&&(K(de)&&(de=D(de,Ae+(!de.key||le&&le.key===de.key?"":(""+de.key).replace(j,"$&/")+"/")+U)),V.push(de)),1;if(le=0,Se=Se===""?".":Se+":",R(U))for(var se=0;se<U.length;se++){X=U[se];var Me=Se+ce(X,se);le+=re(X,V,Ae,Me,de)}else if(Me=m(U),typeof Me=="function")for(U=Me.call(U),se=0;!(X=U.next()).done;)X=X.value,Me=Se+ce(X,se++),le+=re(X,V,Ae,Me,de);else if(X==="object")throw V=String(U),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return le}function W(U,V,Ae){if(U==null)return U;var Se=[],de=0;return re(U,Se,"","",function(X){return V.call(Ae,X,de++)}),Se}function te(U){if(U._status===-1){var V=U._result;V=V(),V.then(function(Ae){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ae)},function(Ae){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ae)}),U._status===-1&&(U._status=0,U._result=V)}if(U._status===1)return U._result.default;throw U._result}var G={current:null},N={transition:null},F={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:N,ReactCurrentOwner:I};function $(){throw Error("act(...) is not supported in production builds of React.")}return It.Children={map:W,forEach:function(U,V,Ae){W(U,function(){V.apply(this,arguments)},Ae)},count:function(U){var V=0;return W(U,function(){V++}),V},toArray:function(U){return W(U,function(V){return V})||[]},only:function(U){if(!K(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},It.Component=y,It.Fragment=t,It.Profiler=o,It.PureComponent=w,It.StrictMode=r,It.Suspense=d,It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,It.act=$,It.cloneElement=function(U,V,Ae){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Se=S({},U.props),de=U.key,X=U.ref,le=U._owner;if(V!=null){if(V.ref!==void 0&&(X=V.ref,le=I.current),V.key!==void 0&&(de=""+V.key),U.type&&U.type.defaultProps)var se=U.type.defaultProps;for(Me in V)z.call(V,Me)&&!O.hasOwnProperty(Me)&&(Se[Me]=V[Me]===void 0&&se!==void 0?se[Me]:V[Me])}var Me=arguments.length-2;if(Me===1)Se.children=Ae;else if(1<Me){se=Array(Me);for(var be=0;be<Me;be++)se[be]=arguments[be+2];Se.children=se}return{$$typeof:s,type:U.type,key:de,ref:X,props:Se,_owner:le}},It.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},It.createElement=E,It.createFactory=function(U){var V=E.bind(null,U);return V.type=U,V},It.createRef=function(){return{current:null}},It.forwardRef=function(U){return{$$typeof:f,render:U}},It.isValidElement=K,It.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:te}},It.memo=function(U,V){return{$$typeof:h,type:U,compare:V===void 0?null:V}},It.startTransition=function(U){var V=N.transition;N.transition={};try{U()}finally{N.transition=V}},It.unstable_act=$,It.useCallback=function(U,V){return G.current.useCallback(U,V)},It.useContext=function(U){return G.current.useContext(U)},It.useDebugValue=function(){},It.useDeferredValue=function(U){return G.current.useDeferredValue(U)},It.useEffect=function(U,V){return G.current.useEffect(U,V)},It.useId=function(){return G.current.useId()},It.useImperativeHandle=function(U,V,Ae){return G.current.useImperativeHandle(U,V,Ae)},It.useInsertionEffect=function(U,V){return G.current.useInsertionEffect(U,V)},It.useLayoutEffect=function(U,V){return G.current.useLayoutEffect(U,V)},It.useMemo=function(U,V){return G.current.useMemo(U,V)},It.useReducer=function(U,V,Ae){return G.current.useReducer(U,V,Ae)},It.useRef=function(U){return G.current.useRef(U)},It.useState=function(U){return G.current.useState(U)},It.useSyncExternalStore=function(U,V,Ae){return G.current.useSyncExternalStore(U,V,Ae)},It.useTransition=function(){return G.current.useTransition()},It.version="18.3.1",It}var Fm;function jh(){return Fm||(Fm=1,ef.exports=a_()),ef.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function l_(){if(Om)return ia;Om=1;var s=jh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var g,x={},m=null,_=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(_=d.ref);for(g in d)r.call(d,g)&&!l.hasOwnProperty(g)&&(x[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)x[g]===void 0&&(x[g]=d[g]);return{$$typeof:e,type:f,key:m,ref:_,props:x,_owner:o.current}}return ia.Fragment=t,ia.jsx=c,ia.jsxs=c,ia}var km;function c_(){return km||(km=1,$u.exports=l_()),$u.exports}var ze=c_(),Rt=jh(),El={},tf={exports:{}},ri={},nf={exports:{}},rf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function u_(){return Bm||(Bm=1,(function(s){function e(N,F){var $=N.length;N.push(F);e:for(;0<$;){var U=$-1>>>1,V=N[U];if(0<o(V,F))N[U]=F,N[$]=V,$=U;else break e}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var F=N[0],$=N.pop();if($!==F){N[0]=$;e:for(var U=0,V=N.length,Ae=V>>>1;U<Ae;){var Se=2*(U+1)-1,de=N[Se],X=Se+1,le=N[X];if(0>o(de,$))X<V&&0>o(le,de)?(N[U]=le,N[X]=$,U=X):(N[U]=de,N[Se]=$,U=Se);else if(X<V&&0>o(le,$))N[U]=le,N[X]=$,U=X;else break e}}return F}function o(N,F){var $=N.sortIndex-F.sortIndex;return $!==0?$:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var d=[],h=[],g=1,x=null,m=3,_=!1,S=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(N){for(var F=t(h);F!==null;){if(F.callback===null)r(h);else if(F.startTime<=N)r(h),F.sortIndex=F.expirationTime,e(d,F);else break;F=t(h)}}function R(N){if(T=!1,P(N),!S)if(t(d)!==null)S=!0,te(z);else{var F=t(h);F!==null&&G(R,F.startTime-N)}}function z(N,F){S=!1,T&&(T=!1,M(E),E=-1),_=!0;var $=m;try{for(P(F),x=t(d);x!==null&&(!(x.expirationTime>F)||N&&!k());){var U=x.callback;if(typeof U=="function"){x.callback=null,m=x.priorityLevel;var V=U(x.expirationTime<=F);F=s.unstable_now(),typeof V=="function"?x.callback=V:x===t(d)&&r(d),P(F)}else r(d);x=t(d)}if(x!==null)var Ae=!0;else{var Se=t(h);Se!==null&&G(R,Se.startTime-F),Ae=!1}return Ae}finally{x=null,m=$,_=!1}}var I=!1,O=null,E=-1,D=5,K=-1;function k(){return!(s.unstable_now()-K<D)}function j(){if(O!==null){var N=s.unstable_now();K=N;var F=!0;try{F=O(!0,N)}finally{F?ce():(I=!1,O=null)}}else I=!1}var ce;if(typeof w=="function")ce=function(){w(j)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,W=re.port2;re.port1.onmessage=j,ce=function(){W.postMessage(null)}}else ce=function(){y(j,0)};function te(N){O=N,I||(I=!0,ce())}function G(N,F){E=y(function(){N(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(N){N.callback=null},s.unstable_continueExecution=function(){S||_||(S=!0,te(z))},s.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(N){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var $=m;m=F;try{return N()}finally{m=$}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var $=m;m=N;try{return F()}finally{m=$}},s.unstable_scheduleCallback=function(N,F,$){var U=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?U+$:U):$=U,N){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=$+V,N={id:g++,callback:F,priorityLevel:N,startTime:$,expirationTime:V,sortIndex:-1},$>U?(N.sortIndex=$,e(h,N),t(d)===null&&N===t(h)&&(T?(M(E),E=-1):T=!0,G(R,$-U))):(N.sortIndex=V,e(d,N),S||_||(S=!0,te(z))),N},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(N){var F=m;return function(){var $=m;m=F;try{return N.apply(this,arguments)}finally{m=$}}}})(rf)),rf}var zm;function f_(){return zm||(zm=1,nf.exports=u_()),nf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function h_(){if(Hm)return ri;Hm=1;var s=jh(),e=f_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function m(n){return d.call(x,n)?!0:d.call(g,n)?!1:h.test(n)?x[n]=!0:(g[n]=!0,!1)}function _(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function S(n,i,a,u){if(i===null||typeof i>"u"||_(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,a,u,p,v,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=b}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function w(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(M,w);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(M,w);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(M,w);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,u){var p=y.hasOwnProperty(i)?y[i]:null;(p!==null?p.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(S(i,a,p,u)&&(a=null),u||p===null?m(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,u=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),k=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),N=Symbol.iterator;function F(n){return n===null||typeof n!="object"?null:(n=N&&n[N]||n["@@iterator"],typeof n=="function"?n:null)}var $=Object.assign,U;function V(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ae=!1;function Se(n,i){if(!n||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(pe){var u=pe}Reflect.construct(n,[],i)}else{try{i.call()}catch(pe){u=pe}n.call(i.prototype)}else{try{throw Error()}catch(pe){u=pe}n()}}catch(pe){if(pe&&u&&typeof pe.stack=="string"){for(var p=pe.stack.split(`
`),v=u.stack.split(`
`),b=p.length-1,H=v.length-1;1<=b&&0<=H&&p[b]!==v[H];)H--;for(;1<=b&&0<=H;b--,H--)if(p[b]!==v[H]){if(b!==1||H!==1)do if(b--,H--,0>H||p[b]!==v[H]){var J=`
`+p[b].replace(" at new "," at ");return n.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",n.displayName)),J}while(1<=b&&0<=H);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?V(n):""}function de(n){switch(n.tag){case 5:return V(n.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function X(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case I:return"Portal";case D:return"Profiler";case E:return"StrictMode";case ce:return"Suspense";case re:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case K:return(n._context.displayName||"Context")+".Provider";case j:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return i=n.displayName||null,i!==null?i:X(n.type)||"Memo";case te:i=n._payload,n=n._init;try{return X(n(i))}catch{}}return null}function le(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Me(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function be(n){var i=Me(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(b){u=""+b,v.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function xe(n){n._valueTracker||(n._valueTracker=be(n))}function Xe(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Me(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function He(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function je(n,i){var a=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function tt(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=se(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ot(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function lt(n,i){ot(n,i);var a=se(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?wt(n,i.type,a):i.hasOwnProperty("defaultValue")&&wt(n,i.type,se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function mt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function wt(n,i,a){(i!=="number"||He(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var q=Array.isArray;function Re(n,i,a,u){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&u&&(n[a].defaultSelected=!0)}else{for(a=""+se(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function ue(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function we(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(q(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:se(a)}}function Ee(n,i){var a=se(i.value),u=se(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function ht(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function L(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function A(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?L(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ne,ye=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,p)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ne=ne||document.createElement("div"),ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ce(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ie={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ve=["Webkit","ms","Moz","O"];Object.keys(Ie).forEach(function(n){Ve.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ie[i]=Ie[n]})});function me(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ie.hasOwnProperty(n)&&Ie[n]?(""+i).trim():i+"px"}function ge(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=me(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,p):n[a]=p}}var ke=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(n,i){if(i){if(ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fe=null;function dt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gt=null,Et=null,Y=null;function Oe(n){if(n=Vo(n)){if(typeof gt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ba(i),gt(n.stateNode,n.type,i))}}function _e(n){Et?Y?Y.push(n):Y=[n]:Et=n}function qe(){if(Et){var n=Et,i=Y;if(Y=Et=null,Oe(n),i)for(n=0;n<i.length;n++)Oe(i[n])}}function Te(n,i){return n(i)}function ve(){}var We=!1;function $e(n,i,a){if(We)return n(i,a);We=!0;try{return Te(n,i,a)}finally{We=!1,(Et!==null||Y!==null)&&(ve(),qe())}}function nt(n,i){var a=n.stateNode;if(a===null)return null;var u=Ba(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var pt=!1;if(f)try{var Kt={};Object.defineProperty(Kt,"passive",{get:function(){pt=!0}}),window.addEventListener("test",Kt,Kt),window.removeEventListener("test",Kt,Kt)}catch{pt=!1}function Yt(n,i,a,u,p,v,b,H,J){var pe=Array.prototype.slice.call(arguments,3);try{i.apply(a,pe)}catch(Le){this.onError(Le)}}var Wn=!1,Xn=null,ai=!1,li=null,jn={onError:function(n){Wn=!0,Xn=n}};function gi(n,i,a,u,p,v,b,H,J){Wn=!1,Xn=null,Yt.apply(jn,arguments)}function rr(n,i,a,u,p,v,b,H,J){if(gi.apply(this,arguments),Wn){if(Wn){var pe=Xn;Wn=!1,Xn=null}else throw Error(t(198));ai||(ai=!0,li=pe)}}function Kn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function cn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Rn(n){if(Kn(n)!==n)throw Error(t(188))}function dn(n){var i=n.alternate;if(!i){if(i=Kn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var p=a.return;if(p===null)break;var v=p.alternate;if(v===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===a)return Rn(p),n;if(v===u)return Rn(p),i;v=v.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=v;else{for(var b=!1,H=p.child;H;){if(H===a){b=!0,a=p,u=v;break}if(H===u){b=!0,u=p,a=v;break}H=H.sibling}if(!b){for(H=v.child;H;){if(H===a){b=!0,a=v,u=p;break}if(H===u){b=!0,u=v,a=p;break}H=H.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function _n(n){return n=dn(n),n!==null?yn(n):null}function yn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=yn(n);if(i!==null)return i;n=n.sibling}return null}var Pn=e.unstable_scheduleCallback,Wi=e.unstable_cancelCallback,sr=e.unstable_shouldYield,ct=e.unstable_requestPaint,yt=e.unstable_now,Mn=e.unstable_getCurrentPriorityLevel,vi=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,Z=e.unstable_NormalPriority,fe=e.unstable_LowPriority,ie=e.unstable_IdlePriority,oe=null,Be=null;function Je(n){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(oe,n,void 0,(n.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Mt,Ze=Math.log,rt=Math.LN2;function Mt(n){return n>>>=0,n===0?32:31-(Ze(n)/rt|0)|0}var vt=64,it=4194304;function Lt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Gt(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,p=n.suspendedLanes,v=n.pingedLanes,b=a&268435455;if(b!==0){var H=b&~p;H!==0?u=Lt(H):(v&=b,v!==0&&(u=Lt(v)))}else b=a&~p,b!==0?u=Lt(b):v!==0&&(u=Lt(v));if(u===0)return 0;if(i!==0&&i!==u&&(i&p)===0&&(p=u&-u,v=i&-i,p>=v||p===16&&(v&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-De(i),p=1<<a,u|=n[a],i&=~p;return u}function Wt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var b=31-De(v),H=1<<b,J=p[b];J===-1?((H&a)===0||(H&u)!==0)&&(p[b]=Wt(H,i)):J<=i&&(n.expiredLanes|=H),v&=~H}}function rn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Qe(){var n=vt;return vt<<=1,(vt&4194240)===0&&(vt=64),n}function un(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Tt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-De(i),n[i]=a}function Sn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-De(a),v=1<<p;i[p]=0,u[p]=-1,n[p]=-1,a&=~v}}function An(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-De(a),p=1<<u;p&i|n[u]&i&&(n[u]|=i),a&=~p}}var Ct=0;function Nn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ft,Qt,Ci,Xt,Ri,Xi=!1,es=[],Er=null,wr=null,Tr=null,To=new Map,bo=new Map,br=[],bv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xd(n,i){switch(n){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":To.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(i.pointerId)}}function Co(n,i,a,u,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:v,targetContainers:[p]},i!==null&&(i=Vo(i),i!==null&&Qt(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function Cv(n,i,a,u,p){switch(i){case"focusin":return Er=Co(Er,n,i,a,u,p),!0;case"dragenter":return wr=Co(wr,n,i,a,u,p),!0;case"mouseover":return Tr=Co(Tr,n,i,a,u,p),!0;case"pointerover":var v=p.pointerId;return To.set(v,Co(To.get(v)||null,n,i,a,u,p)),!0;case"gotpointercapture":return v=p.pointerId,bo.set(v,Co(bo.get(v)||null,n,i,a,u,p)),!0}return!1}function _d(n){var i=ts(n.target);if(i!==null){var a=Kn(i);if(a!==null){if(i=a.tag,i===13){if(i=cn(a),i!==null){n.blockedOn=i,Ri(n.priority,function(){Ci(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function wa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Tc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Fe=u,a.target.dispatchEvent(u),Fe=null}else return i=Vo(a),i!==null&&Qt(i),n.blockedOn=a,!1;i.shift()}return!0}function yd(n,i,a){wa(n)&&a.delete(i)}function Rv(){Xi=!1,Er!==null&&wa(Er)&&(Er=null),wr!==null&&wa(wr)&&(wr=null),Tr!==null&&wa(Tr)&&(Tr=null),To.forEach(yd),bo.forEach(yd)}function Ro(n,i){n.blockedOn===i&&(n.blockedOn=null,Xi||(Xi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rv)))}function Po(n){function i(p){return Ro(p,n)}if(0<es.length){Ro(es[0],n);for(var a=1;a<es.length;a++){var u=es[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Er!==null&&Ro(Er,n),wr!==null&&Ro(wr,n),Tr!==null&&Ro(Tr,n),To.forEach(i),bo.forEach(i),a=0;a<br.length;a++)u=br[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<br.length&&(a=br[0],a.blockedOn===null);)_d(a),a.blockedOn===null&&br.shift()}var Rs=R.ReactCurrentBatchConfig,Ta=!0;function Pv(n,i,a,u){var p=Ct,v=Rs.transition;Rs.transition=null;try{Ct=1,wc(n,i,a,u)}finally{Ct=p,Rs.transition=v}}function Lv(n,i,a,u){var p=Ct,v=Rs.transition;Rs.transition=null;try{Ct=4,wc(n,i,a,u)}finally{Ct=p,Rs.transition=v}}function wc(n,i,a,u){if(Ta){var p=Tc(n,i,a,u);if(p===null)Gc(n,i,u,ba,a),xd(n,u);else if(Cv(p,n,i,a,u))u.stopPropagation();else if(xd(n,u),i&4&&-1<bv.indexOf(n)){for(;p!==null;){var v=Vo(p);if(v!==null&&Ft(v),v=Tc(n,i,a,u),v===null&&Gc(n,i,u,ba,a),v===p)break;p=v}p!==null&&u.stopPropagation()}else Gc(n,i,u,null,a)}}var ba=null;function Tc(n,i,a,u){if(ba=null,n=dt(u),n=ts(n),n!==null)if(i=Kn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=cn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ba=n,null}function Md(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mn()){case vi:return 1;case C:return 4;case Z:case fe:return 16;case ie:return 536870912;default:return 16}default:return 16}}var Cr=null,bc=null,Ca=null;function Sd(){if(Ca)return Ca;var n,i=bc,a=i.length,u,p="value"in Cr?Cr.value:Cr.textContent,v=p.length;for(n=0;n<a&&i[n]===p[n];n++);var b=a-n;for(u=1;u<=b&&i[a-u]===p[v-u];u++);return Ca=p.slice(n,1<u?1-u:void 0)}function Ra(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Pa(){return!0}function Ad(){return!1}function ci(n){function i(a,u,p,v,b){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=v,this.target=b,this.currentTarget=null;for(var H in n)n.hasOwnProperty(H)&&(a=n[H],this[H]=a?a(v):v[H]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Pa:Ad,this.isPropagationStopped=Ad,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),i}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cc=ci(Ps),Lo=$({},Ps,{view:0,detail:0}),Iv=ci(Lo),Rc,Pc,Io,La=$({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Io&&(Io&&n.type==="mousemove"?(Rc=n.screenX-Io.screenX,Pc=n.screenY-Io.screenY):Pc=Rc=0,Io=n),Rc)},movementY:function(n){return"movementY"in n?n.movementY:Pc}}),Ed=ci(La),Dv=$({},La,{dataTransfer:0}),Uv=ci(Dv),Nv=$({},Lo,{relatedTarget:0}),Lc=ci(Nv),Fv=$({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Ov=ci(Fv),kv=$({},Ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Bv=ci(kv),zv=$({},Ps,{data:0}),wd=ci(zv),Hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Gv[n])?!!i[n]:!1}function Ic(){return Wv}var Xv=$({},Lo,{key:function(n){if(n.key){var i=Hv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ra(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Vv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(n){return n.type==="keypress"?Ra(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ra(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),jv=ci(Xv),Kv=$({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=ci(Kv),qv=$({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),Yv=ci(qv),Qv=$({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jv=ci(Qv),Zv=$({},La,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=ci(Zv),ex=[9,13,27,32],Dc=f&&"CompositionEvent"in window,Do=null;f&&"documentMode"in document&&(Do=document.documentMode);var tx=f&&"TextEvent"in window&&!Do,bd=f&&(!Dc||Do&&8<Do&&11>=Do),Cd=" ",Rd=!1;function Pd(n,i){switch(n){case"keyup":return ex.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ld(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function nx(n,i){switch(n){case"compositionend":return Ld(i);case"keypress":return i.which!==32?null:(Rd=!0,Cd);case"textInput":return n=i.data,n===Cd&&Rd?null:n;default:return null}}function ix(n,i){if(Ls)return n==="compositionend"||!Dc&&Pd(n,i)?(n=Sd(),Ca=bc=Cr=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return bd&&i.locale!=="ko"?null:i.data;default:return null}}var rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!rx[n.type]:i==="textarea"}function Dd(n,i,a,u){_e(u),i=Fa(i,"onChange"),0<i.length&&(a=new Cc("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Uo=null,No=null;function sx(n){Jd(n,0)}function Ia(n){var i=Fs(n);if(Xe(i))return n}function ox(n,i){if(n==="change")return i}var Ud=!1;if(f){var Uc;if(f){var Nc="oninput"in document;if(!Nc){var Nd=document.createElement("div");Nd.setAttribute("oninput","return;"),Nc=typeof Nd.oninput=="function"}Uc=Nc}else Uc=!1;Ud=Uc&&(!document.documentMode||9<document.documentMode)}function Fd(){Uo&&(Uo.detachEvent("onpropertychange",Od),No=Uo=null)}function Od(n){if(n.propertyName==="value"&&Ia(No)){var i=[];Dd(i,No,n,dt(n)),$e(sx,i)}}function ax(n,i,a){n==="focusin"?(Fd(),Uo=i,No=a,Uo.attachEvent("onpropertychange",Od)):n==="focusout"&&Fd()}function lx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ia(No)}function cx(n,i){if(n==="click")return Ia(i)}function ux(n,i){if(n==="input"||n==="change")return Ia(i)}function fx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Pi=typeof Object.is=="function"?Object.is:fx;function Fo(n,i){if(Pi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!d.call(i,p)||!Pi(n[p],i[p]))return!1}return!0}function kd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Bd(n,i){var a=kd(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=kd(a)}}function zd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?zd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Hd(){for(var n=window,i=He();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=He(n.document)}return i}function Fc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function hx(n){var i=Hd(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&zd(a.ownerDocument.documentElement,a)){if(u!==null&&Fc(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,v=Math.min(u.start,p);u=u.end===void 0?v:Math.min(u.end,p),!n.extend&&v>u&&(p=u,u=v,v=p),p=Bd(a,v);var b=Bd(a,u);p&&b&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),v>u?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var dx=f&&"documentMode"in document&&11>=document.documentMode,Is=null,Oc=null,Oo=null,kc=!1;function Vd(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kc||Is==null||Is!==He(u)||(u=Is,"selectionStart"in u&&Fc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Oo&&Fo(Oo,u)||(Oo=u,u=Fa(Oc,"onSelect"),0<u.length&&(i=new Cc("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Is)))}function Da(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ds={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},Bc={},Gd={};f&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Ua(n){if(Bc[n])return Bc[n];if(!Ds[n])return n;var i=Ds[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Gd)return Bc[n]=i[a];return n}var Wd=Ua("animationend"),Xd=Ua("animationiteration"),jd=Ua("animationstart"),Kd=Ua("transitionend"),qd=new Map,Yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(n,i){qd.set(n,i),l(i,[n])}for(var zc=0;zc<Yd.length;zc++){var Hc=Yd[zc],px=Hc.toLowerCase(),mx=Hc[0].toUpperCase()+Hc.slice(1);Rr(px,"on"+mx)}Rr(Wd,"onAnimationEnd"),Rr(Xd,"onAnimationIteration"),Rr(jd,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(Kd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function Qd(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,rr(u,i,void 0,n),n.currentTarget=null}function Jd(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],p=u.event;u=u.listeners;e:{var v=void 0;if(i)for(var b=u.length-1;0<=b;b--){var H=u[b],J=H.instance,pe=H.currentTarget;if(H=H.listener,J!==v&&p.isPropagationStopped())break e;Qd(p,H,pe),v=J}else for(b=0;b<u.length;b++){if(H=u[b],J=H.instance,pe=H.currentTarget,H=H.listener,J!==v&&p.isPropagationStopped())break e;Qd(p,H,pe),v=J}}}if(ai)throw n=li,ai=!1,li=null,n}function Jt(n,i){var a=i[Yc];a===void 0&&(a=i[Yc]=new Set);var u=n+"__bubble";a.has(u)||(Zd(i,n,2,!1),a.add(u))}function Vc(n,i,a){var u=0;i&&(u|=4),Zd(a,n,u,i)}var Na="_reactListening"+Math.random().toString(36).slice(2);function Bo(n){if(!n[Na]){n[Na]=!0,r.forEach(function(a){a!=="selectionchange"&&(gx.has(a)||Vc(a,!1,n),Vc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Na]||(i[Na]=!0,Vc("selectionchange",!1,i))}}function Zd(n,i,a,u){switch(Md(i)){case 1:var p=Pv;break;case 4:p=Lv;break;default:p=wc}a=p.bind(null,i,a,n),p=void 0,!pt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function Gc(n,i,a,u,p){var v=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var H=u.stateNode.containerInfo;if(H===p||H.nodeType===8&&H.parentNode===p)break;if(b===4)for(b=u.return;b!==null;){var J=b.tag;if((J===3||J===4)&&(J=b.stateNode.containerInfo,J===p||J.nodeType===8&&J.parentNode===p))return;b=b.return}for(;H!==null;){if(b=ts(H),b===null)return;if(J=b.tag,J===5||J===6){u=v=b;continue e}H=H.parentNode}}u=u.return}$e(function(){var pe=v,Le=dt(a),Ue=[];e:{var Pe=qd.get(n);if(Pe!==void 0){var et=Cc,at=n;switch(n){case"keypress":if(Ra(a)===0)break e;case"keydown":case"keyup":et=jv;break;case"focusin":at="focus",et=Lc;break;case"focusout":at="blur",et=Lc;break;case"beforeblur":case"afterblur":et=Lc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=Yv;break;case Wd:case Xd:case jd:et=Ov;break;case Kd:et=Jv;break;case"scroll":et=Iv;break;case"wheel":et=$v;break;case"copy":case"cut":case"paste":et=Bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=Td}var ut=(i&4)!==0,an=!ut&&n==="scroll",ae=ut?Pe!==null?Pe+"Capture":null:Pe;ut=[];for(var ee=pe,he;ee!==null;){he=ee;var Ge=he.stateNode;if(he.tag===5&&Ge!==null&&(he=Ge,ae!==null&&(Ge=nt(ee,ae),Ge!=null&&ut.push(zo(ee,Ge,he)))),an)break;ee=ee.return}0<ut.length&&(Pe=new et(Pe,at,null,a,Le),Ue.push({event:Pe,listeners:ut}))}}if((i&7)===0){e:{if(Pe=n==="mouseover"||n==="pointerover",et=n==="mouseout"||n==="pointerout",Pe&&a!==Fe&&(at=a.relatedTarget||a.fromElement)&&(ts(at)||at[or]))break e;if((et||Pe)&&(Pe=Le.window===Le?Le:(Pe=Le.ownerDocument)?Pe.defaultView||Pe.parentWindow:window,et?(at=a.relatedTarget||a.toElement,et=pe,at=at?ts(at):null,at!==null&&(an=Kn(at),at!==an||at.tag!==5&&at.tag!==6)&&(at=null)):(et=null,at=pe),et!==at)){if(ut=Ed,Ge="onMouseLeave",ae="onMouseEnter",ee="mouse",(n==="pointerout"||n==="pointerover")&&(ut=Td,Ge="onPointerLeave",ae="onPointerEnter",ee="pointer"),an=et==null?Pe:Fs(et),he=at==null?Pe:Fs(at),Pe=new ut(Ge,ee+"leave",et,a,Le),Pe.target=an,Pe.relatedTarget=he,Ge=null,ts(Le)===pe&&(ut=new ut(ae,ee+"enter",at,a,Le),ut.target=he,ut.relatedTarget=an,Ge=ut),an=Ge,et&&at)t:{for(ut=et,ae=at,ee=0,he=ut;he;he=Us(he))ee++;for(he=0,Ge=ae;Ge;Ge=Us(Ge))he++;for(;0<ee-he;)ut=Us(ut),ee--;for(;0<he-ee;)ae=Us(ae),he--;for(;ee--;){if(ut===ae||ae!==null&&ut===ae.alternate)break t;ut=Us(ut),ae=Us(ae)}ut=null}else ut=null;et!==null&&$d(Ue,Pe,et,ut,!1),at!==null&&an!==null&&$d(Ue,an,at,ut,!0)}}e:{if(Pe=pe?Fs(pe):window,et=Pe.nodeName&&Pe.nodeName.toLowerCase(),et==="select"||et==="input"&&Pe.type==="file")var ft=ox;else if(Id(Pe))if(Ud)ft=ux;else{ft=lx;var xt=ax}else(et=Pe.nodeName)&&et.toLowerCase()==="input"&&(Pe.type==="checkbox"||Pe.type==="radio")&&(ft=cx);if(ft&&(ft=ft(n,pe))){Dd(Ue,ft,a,Le);break e}xt&&xt(n,Pe,pe),n==="focusout"&&(xt=Pe._wrapperState)&&xt.controlled&&Pe.type==="number"&&wt(Pe,"number",Pe.value)}switch(xt=pe?Fs(pe):window,n){case"focusin":(Id(xt)||xt.contentEditable==="true")&&(Is=xt,Oc=pe,Oo=null);break;case"focusout":Oo=Oc=Is=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,Vd(Ue,a,Le);break;case"selectionchange":if(dx)break;case"keydown":case"keyup":Vd(Ue,a,Le)}var _t;if(Dc)e:{switch(n){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else Ls?Pd(n,a)&&(At="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(At="onCompositionStart");At&&(bd&&a.locale!=="ko"&&(Ls||At!=="onCompositionStart"?At==="onCompositionEnd"&&Ls&&(_t=Sd()):(Cr=Le,bc="value"in Cr?Cr.value:Cr.textContent,Ls=!0)),xt=Fa(pe,At),0<xt.length&&(At=new wd(At,n,null,a,Le),Ue.push({event:At,listeners:xt}),_t?At.data=_t:(_t=Ld(a),_t!==null&&(At.data=_t)))),(_t=tx?nx(n,a):ix(n,a))&&(pe=Fa(pe,"onBeforeInput"),0<pe.length&&(Le=new wd("onBeforeInput","beforeinput",null,a,Le),Ue.push({event:Le,listeners:pe}),Le.data=_t))}Jd(Ue,i)})}function zo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Fa(n,i){for(var a=i+"Capture",u=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=nt(n,a),v!=null&&u.unshift(zo(n,v,p)),v=nt(n,i),v!=null&&u.push(zo(n,v,p))),n=n.return}return u}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $d(n,i,a,u,p){for(var v=i._reactName,b=[];a!==null&&a!==u;){var H=a,J=H.alternate,pe=H.stateNode;if(J!==null&&J===u)break;H.tag===5&&pe!==null&&(H=pe,p?(J=nt(a,v),J!=null&&b.unshift(zo(a,J,H))):p||(J=nt(a,v),J!=null&&b.push(zo(a,J,H)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var vx=/\r\n?/g,xx=/\u0000|\uFFFD/g;function ep(n){return(typeof n=="string"?n:""+n).replace(vx,`
`).replace(xx,"")}function Oa(n,i,a){if(i=ep(i),ep(n)!==i&&a)throw Error(t(425))}function ka(){}var Wc=null,Xc=null;function jc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,_x=typeof clearTimeout=="function"?clearTimeout:void 0,tp=typeof Promise=="function"?Promise:void 0,yx=typeof queueMicrotask=="function"?queueMicrotask:typeof tp<"u"?function(n){return tp.resolve(null).then(n).catch(Mx)}:Kc;function Mx(n){setTimeout(function(){throw n})}function qc(n,i){var a=i,u=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){n.removeChild(p),Po(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);Po(i)}function Pr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function np(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),ji="__reactFiber$"+Ns,Ho="__reactProps$"+Ns,or="__reactContainer$"+Ns,Yc="__reactEvents$"+Ns,Sx="__reactListeners$"+Ns,Ax="__reactHandles$"+Ns;function ts(n){var i=n[ji];if(i)return i;for(var a=n.parentNode;a;){if(i=a[or]||a[ji]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=np(n);n!==null;){if(a=n[ji])return a;n=np(n)}return i}n=a,a=n.parentNode}return null}function Vo(n){return n=n[ji]||n[or],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ba(n){return n[Ho]||null}var Qc=[],Os=-1;function Lr(n){return{current:n}}function Zt(n){0>Os||(n.current=Qc[Os],Qc[Os]=null,Os--)}function qt(n,i){Os++,Qc[Os]=n.current,n.current=i}var Ir={},Fn=Lr(Ir),$n=Lr(!1),ns=Ir;function ks(n,i){var a=n.type.contextTypes;if(!a)return Ir;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in a)p[v]=i[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function ei(n){return n=n.childContextTypes,n!=null}function za(){Zt($n),Zt(Fn)}function ip(n,i,a){if(Fn.current!==Ir)throw Error(t(168));qt(Fn,i),qt($n,a)}function rp(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in i))throw Error(t(108,le(n)||"Unknown",p));return $({},a,u)}function Ha(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ir,ns=Fn.current,qt(Fn,n),qt($n,$n.current),!0}function sp(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=rp(n,i,ns),u.__reactInternalMemoizedMergedChildContext=n,Zt($n),Zt(Fn),qt(Fn,n)):Zt($n),qt($n,a)}var ar=null,Va=!1,Jc=!1;function op(n){ar===null?ar=[n]:ar.push(n)}function Ex(n){Va=!0,op(n)}function Dr(){if(!Jc&&ar!==null){Jc=!0;var n=0,i=Ct;try{var a=ar;for(Ct=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}ar=null,Va=!1}catch(p){throw ar!==null&&(ar=ar.slice(n+1)),Pn(vi,Dr),p}finally{Ct=i,Jc=!1}}return null}var Bs=[],zs=0,Ga=null,Wa=0,xi=[],_i=0,is=null,lr=1,cr="";function rs(n,i){Bs[zs++]=Wa,Bs[zs++]=Ga,Ga=n,Wa=i}function ap(n,i,a){xi[_i++]=lr,xi[_i++]=cr,xi[_i++]=is,is=n;var u=lr;n=cr;var p=32-De(u)-1;u&=~(1<<p),a+=1;var v=32-De(i)+p;if(30<v){var b=p-p%5;v=(u&(1<<b)-1).toString(32),u>>=b,p-=b,lr=1<<32-De(i)+p|a<<p|u,cr=v+n}else lr=1<<v|a<<p|u,cr=n}function Zc(n){n.return!==null&&(rs(n,1),ap(n,1,0))}function $c(n){for(;n===Ga;)Ga=Bs[--zs],Bs[zs]=null,Wa=Bs[--zs],Bs[zs]=null;for(;n===is;)is=xi[--_i],xi[_i]=null,cr=xi[--_i],xi[_i]=null,lr=xi[--_i],xi[_i]=null}var ui=null,fi=null,$t=!1,Li=null;function lp(n,i){var a=Ai(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function cp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ui=n,fi=Pr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ui=n,fi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=is!==null?{id:lr,overflow:cr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ai(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ui=n,fi=null,!0):!1;default:return!1}}function eu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function tu(n){if($t){var i=fi;if(i){var a=i;if(!cp(n,i)){if(eu(n))throw Error(t(418));i=Pr(a.nextSibling);var u=ui;i&&cp(n,i)?lp(u,a):(n.flags=n.flags&-4097|2,$t=!1,ui=n)}}else{if(eu(n))throw Error(t(418));n.flags=n.flags&-4097|2,$t=!1,ui=n}}}function up(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ui=n}function Xa(n){if(n!==ui)return!1;if(!$t)return up(n),$t=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!jc(n.type,n.memoizedProps)),i&&(i=fi)){if(eu(n))throw fp(),Error(t(418));for(;i;)lp(n,i),i=Pr(i.nextSibling)}if(up(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){fi=Pr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}fi=null}}else fi=ui?Pr(n.stateNode.nextSibling):null;return!0}function fp(){for(var n=fi;n;)n=Pr(n.nextSibling)}function Hs(){fi=ui=null,$t=!1}function nu(n){Li===null?Li=[n]:Li.push(n)}var wx=R.ReactCurrentBatchConfig;function Go(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var p=u,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(b){var H=p.refs;b===null?delete H[v]:H[v]=b},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ja(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function hp(n){var i=n._init;return i(n._payload)}function dp(n){function i(ae,ee){if(n){var he=ae.deletions;he===null?(ae.deletions=[ee],ae.flags|=16):he.push(ee)}}function a(ae,ee){if(!n)return null;for(;ee!==null;)i(ae,ee),ee=ee.sibling;return null}function u(ae,ee){for(ae=new Map;ee!==null;)ee.key!==null?ae.set(ee.key,ee):ae.set(ee.index,ee),ee=ee.sibling;return ae}function p(ae,ee){return ae=Hr(ae,ee),ae.index=0,ae.sibling=null,ae}function v(ae,ee,he){return ae.index=he,n?(he=ae.alternate,he!==null?(he=he.index,he<ee?(ae.flags|=2,ee):he):(ae.flags|=2,ee)):(ae.flags|=1048576,ee)}function b(ae){return n&&ae.alternate===null&&(ae.flags|=2),ae}function H(ae,ee,he,Ge){return ee===null||ee.tag!==6?(ee=Ku(he,ae.mode,Ge),ee.return=ae,ee):(ee=p(ee,he),ee.return=ae,ee)}function J(ae,ee,he,Ge){var ft=he.type;return ft===O?Le(ae,ee,he.props.children,Ge,he.key):ee!==null&&(ee.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===te&&hp(ft)===ee.type)?(Ge=p(ee,he.props),Ge.ref=Go(ae,ee,he),Ge.return=ae,Ge):(Ge=gl(he.type,he.key,he.props,null,ae.mode,Ge),Ge.ref=Go(ae,ee,he),Ge.return=ae,Ge)}function pe(ae,ee,he,Ge){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==he.containerInfo||ee.stateNode.implementation!==he.implementation?(ee=qu(he,ae.mode,Ge),ee.return=ae,ee):(ee=p(ee,he.children||[]),ee.return=ae,ee)}function Le(ae,ee,he,Ge,ft){return ee===null||ee.tag!==7?(ee=hs(he,ae.mode,Ge,ft),ee.return=ae,ee):(ee=p(ee,he),ee.return=ae,ee)}function Ue(ae,ee,he){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return ee=Ku(""+ee,ae.mode,he),ee.return=ae,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case z:return he=gl(ee.type,ee.key,ee.props,null,ae.mode,he),he.ref=Go(ae,null,ee),he.return=ae,he;case I:return ee=qu(ee,ae.mode,he),ee.return=ae,ee;case te:var Ge=ee._init;return Ue(ae,Ge(ee._payload),he)}if(q(ee)||F(ee))return ee=hs(ee,ae.mode,he,null),ee.return=ae,ee;ja(ae,ee)}return null}function Pe(ae,ee,he,Ge){var ft=ee!==null?ee.key:null;if(typeof he=="string"&&he!==""||typeof he=="number")return ft!==null?null:H(ae,ee,""+he,Ge);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case z:return he.key===ft?J(ae,ee,he,Ge):null;case I:return he.key===ft?pe(ae,ee,he,Ge):null;case te:return ft=he._init,Pe(ae,ee,ft(he._payload),Ge)}if(q(he)||F(he))return ft!==null?null:Le(ae,ee,he,Ge,null);ja(ae,he)}return null}function et(ae,ee,he,Ge,ft){if(typeof Ge=="string"&&Ge!==""||typeof Ge=="number")return ae=ae.get(he)||null,H(ee,ae,""+Ge,ft);if(typeof Ge=="object"&&Ge!==null){switch(Ge.$$typeof){case z:return ae=ae.get(Ge.key===null?he:Ge.key)||null,J(ee,ae,Ge,ft);case I:return ae=ae.get(Ge.key===null?he:Ge.key)||null,pe(ee,ae,Ge,ft);case te:var xt=Ge._init;return et(ae,ee,he,xt(Ge._payload),ft)}if(q(Ge)||F(Ge))return ae=ae.get(he)||null,Le(ee,ae,Ge,ft,null);ja(ee,Ge)}return null}function at(ae,ee,he,Ge){for(var ft=null,xt=null,_t=ee,At=ee=0,Tn=null;_t!==null&&At<he.length;At++){_t.index>At?(Tn=_t,_t=null):Tn=_t.sibling;var Vt=Pe(ae,_t,he[At],Ge);if(Vt===null){_t===null&&(_t=Tn);break}n&&_t&&Vt.alternate===null&&i(ae,_t),ee=v(Vt,ee,At),xt===null?ft=Vt:xt.sibling=Vt,xt=Vt,_t=Tn}if(At===he.length)return a(ae,_t),$t&&rs(ae,At),ft;if(_t===null){for(;At<he.length;At++)_t=Ue(ae,he[At],Ge),_t!==null&&(ee=v(_t,ee,At),xt===null?ft=_t:xt.sibling=_t,xt=_t);return $t&&rs(ae,At),ft}for(_t=u(ae,_t);At<he.length;At++)Tn=et(_t,ae,At,he[At],Ge),Tn!==null&&(n&&Tn.alternate!==null&&_t.delete(Tn.key===null?At:Tn.key),ee=v(Tn,ee,At),xt===null?ft=Tn:xt.sibling=Tn,xt=Tn);return n&&_t.forEach(function(Vr){return i(ae,Vr)}),$t&&rs(ae,At),ft}function ut(ae,ee,he,Ge){var ft=F(he);if(typeof ft!="function")throw Error(t(150));if(he=ft.call(he),he==null)throw Error(t(151));for(var xt=ft=null,_t=ee,At=ee=0,Tn=null,Vt=he.next();_t!==null&&!Vt.done;At++,Vt=he.next()){_t.index>At?(Tn=_t,_t=null):Tn=_t.sibling;var Vr=Pe(ae,_t,Vt.value,Ge);if(Vr===null){_t===null&&(_t=Tn);break}n&&_t&&Vr.alternate===null&&i(ae,_t),ee=v(Vr,ee,At),xt===null?ft=Vr:xt.sibling=Vr,xt=Vr,_t=Tn}if(Vt.done)return a(ae,_t),$t&&rs(ae,At),ft;if(_t===null){for(;!Vt.done;At++,Vt=he.next())Vt=Ue(ae,Vt.value,Ge),Vt!==null&&(ee=v(Vt,ee,At),xt===null?ft=Vt:xt.sibling=Vt,xt=Vt);return $t&&rs(ae,At),ft}for(_t=u(ae,_t);!Vt.done;At++,Vt=he.next())Vt=et(_t,ae,At,Vt.value,Ge),Vt!==null&&(n&&Vt.alternate!==null&&_t.delete(Vt.key===null?At:Vt.key),ee=v(Vt,ee,At),xt===null?ft=Vt:xt.sibling=Vt,xt=Vt);return n&&_t.forEach(function(r_){return i(ae,r_)}),$t&&rs(ae,At),ft}function an(ae,ee,he,Ge){if(typeof he=="object"&&he!==null&&he.type===O&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case z:e:{for(var ft=he.key,xt=ee;xt!==null;){if(xt.key===ft){if(ft=he.type,ft===O){if(xt.tag===7){a(ae,xt.sibling),ee=p(xt,he.props.children),ee.return=ae,ae=ee;break e}}else if(xt.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===te&&hp(ft)===xt.type){a(ae,xt.sibling),ee=p(xt,he.props),ee.ref=Go(ae,xt,he),ee.return=ae,ae=ee;break e}a(ae,xt);break}else i(ae,xt);xt=xt.sibling}he.type===O?(ee=hs(he.props.children,ae.mode,Ge,he.key),ee.return=ae,ae=ee):(Ge=gl(he.type,he.key,he.props,null,ae.mode,Ge),Ge.ref=Go(ae,ee,he),Ge.return=ae,ae=Ge)}return b(ae);case I:e:{for(xt=he.key;ee!==null;){if(ee.key===xt)if(ee.tag===4&&ee.stateNode.containerInfo===he.containerInfo&&ee.stateNode.implementation===he.implementation){a(ae,ee.sibling),ee=p(ee,he.children||[]),ee.return=ae,ae=ee;break e}else{a(ae,ee);break}else i(ae,ee);ee=ee.sibling}ee=qu(he,ae.mode,Ge),ee.return=ae,ae=ee}return b(ae);case te:return xt=he._init,an(ae,ee,xt(he._payload),Ge)}if(q(he))return at(ae,ee,he,Ge);if(F(he))return ut(ae,ee,he,Ge);ja(ae,he)}return typeof he=="string"&&he!==""||typeof he=="number"?(he=""+he,ee!==null&&ee.tag===6?(a(ae,ee.sibling),ee=p(ee,he),ee.return=ae,ae=ee):(a(ae,ee),ee=Ku(he,ae.mode,Ge),ee.return=ae,ae=ee),b(ae)):a(ae,ee)}return an}var Vs=dp(!0),pp=dp(!1),Ka=Lr(null),qa=null,Gs=null,iu=null;function ru(){iu=Gs=qa=null}function su(n){var i=Ka.current;Zt(Ka),n._currentValue=i}function ou(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Ws(n,i){qa=n,iu=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ti=!0),n.firstContext=null)}function yi(n){var i=n._currentValue;if(iu!==n)if(n={context:n,memoizedValue:i,next:null},Gs===null){if(qa===null)throw Error(t(308));Gs=n,qa.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return i}var ss=null;function au(n){ss===null?ss=[n]:ss.push(n)}function mp(n,i,a,u){var p=i.interleaved;return p===null?(a.next=a,au(i)):(a.next=p.next,p.next=a),i.interleaved=a,ur(n,u)}function ur(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Ur=!1;function lu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Nr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ot&2)!==0){var p=u.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),u.pending=i,ur(n,a)}return p=u.interleaved,p===null?(i.next=i,au(u)):(i.next=p.next,p.next=i),u.interleaved=i,ur(n,a)}function Ya(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,An(n,a)}}function vp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?p=v=b:v=v.next=b,a=a.next}while(a!==null);v===null?p=v=i:v=v.next=i}else p=v=i;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Qa(n,i,a,u){var p=n.updateQueue;Ur=!1;var v=p.firstBaseUpdate,b=p.lastBaseUpdate,H=p.shared.pending;if(H!==null){p.shared.pending=null;var J=H,pe=J.next;J.next=null,b===null?v=pe:b.next=pe,b=J;var Le=n.alternate;Le!==null&&(Le=Le.updateQueue,H=Le.lastBaseUpdate,H!==b&&(H===null?Le.firstBaseUpdate=pe:H.next=pe,Le.lastBaseUpdate=J))}if(v!==null){var Ue=p.baseState;b=0,Le=pe=J=null,H=v;do{var Pe=H.lane,et=H.eventTime;if((u&Pe)===Pe){Le!==null&&(Le=Le.next={eventTime:et,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var at=n,ut=H;switch(Pe=i,et=a,ut.tag){case 1:if(at=ut.payload,typeof at=="function"){Ue=at.call(et,Ue,Pe);break e}Ue=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=ut.payload,Pe=typeof at=="function"?at.call(et,Ue,Pe):at,Pe==null)break e;Ue=$({},Ue,Pe);break e;case 2:Ur=!0}}H.callback!==null&&H.lane!==0&&(n.flags|=64,Pe=p.effects,Pe===null?p.effects=[H]:Pe.push(H))}else et={eventTime:et,lane:Pe,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Le===null?(pe=Le=et,J=Ue):Le=Le.next=et,b|=Pe;if(H=H.next,H===null){if(H=p.shared.pending,H===null)break;Pe=H,H=Pe.next,Pe.next=null,p.lastBaseUpdate=Pe,p.shared.pending=null}}while(!0);if(Le===null&&(J=Ue),p.baseState=J,p.firstBaseUpdate=pe,p.lastBaseUpdate=Le,i=p.shared.interleaved,i!==null){p=i;do b|=p.lane,p=p.next;while(p!==i)}else v===null&&(p.shared.lanes=0);ls|=b,n.lanes=b,n.memoizedState=Ue}}function xp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var Wo={},Ki=Lr(Wo),Xo=Lr(Wo),jo=Lr(Wo);function os(n){if(n===Wo)throw Error(t(174));return n}function cu(n,i){switch(qt(jo,i),qt(Xo,n),qt(Ki,Wo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:A(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=A(i,n)}Zt(Ki),qt(Ki,i)}function Xs(){Zt(Ki),Zt(Xo),Zt(jo)}function _p(n){os(jo.current);var i=os(Ki.current),a=A(i,n.type);i!==a&&(qt(Xo,n),qt(Ki,a))}function uu(n){Xo.current===n&&(Zt(Ki),Zt(Xo))}var en=Lr(0);function Ja(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var fu=[];function hu(){for(var n=0;n<fu.length;n++)fu[n]._workInProgressVersionPrimary=null;fu.length=0}var Za=R.ReactCurrentDispatcher,du=R.ReactCurrentBatchConfig,as=0,tn=null,pn=null,En=null,$a=!1,Ko=!1,qo=0,Tx=0;function On(){throw Error(t(321))}function pu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Pi(n[a],i[a]))return!1;return!0}function mu(n,i,a,u,p,v){if(as=v,tn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Za.current=n===null||n.memoizedState===null?Px:Lx,n=a(u,p),Ko){v=0;do{if(Ko=!1,qo=0,25<=v)throw Error(t(301));v+=1,En=pn=null,i.updateQueue=null,Za.current=Ix,n=a(u,p)}while(Ko)}if(Za.current=nl,i=pn!==null&&pn.next!==null,as=0,En=pn=tn=null,$a=!1,i)throw Error(t(300));return n}function gu(){var n=qo!==0;return qo=0,n}function qi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?tn.memoizedState=En=n:En=En.next=n,En}function Mi(){if(pn===null){var n=tn.alternate;n=n!==null?n.memoizedState:null}else n=pn.next;var i=En===null?tn.memoizedState:En.next;if(i!==null)En=i,pn=n;else{if(n===null)throw Error(t(310));pn=n,n={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},En===null?tn.memoizedState=En=n:En=En.next=n}return En}function Yo(n,i){return typeof i=="function"?i(n):i}function vu(n){var i=Mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=pn,p=u.baseQueue,v=a.pending;if(v!==null){if(p!==null){var b=p.next;p.next=v.next,v.next=b}u.baseQueue=p=v,a.pending=null}if(p!==null){v=p.next,u=u.baseState;var H=b=null,J=null,pe=v;do{var Le=pe.lane;if((as&Le)===Le)J!==null&&(J=J.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),u=pe.hasEagerState?pe.eagerState:n(u,pe.action);else{var Ue={lane:Le,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};J===null?(H=J=Ue,b=u):J=J.next=Ue,tn.lanes|=Le,ls|=Le}pe=pe.next}while(pe!==null&&pe!==v);J===null?b=u:J.next=H,Pi(u,i.memoizedState)||(ti=!0),i.memoizedState=u,i.baseState=b,i.baseQueue=J,a.lastRenderedState=u}if(n=a.interleaved,n!==null){p=n;do v=p.lane,tn.lanes|=v,ls|=v,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function xu(n){var i=Mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,p=a.pending,v=i.memoizedState;if(p!==null){a.pending=null;var b=p=p.next;do v=n(v,b.action),b=b.next;while(b!==p);Pi(v,i.memoizedState)||(ti=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,u]}function yp(){}function Mp(n,i){var a=tn,u=Mi(),p=i(),v=!Pi(u.memoizedState,p);if(v&&(u.memoizedState=p,ti=!0),u=u.queue,_u(Ep.bind(null,a,u,n),[n]),u.getSnapshot!==i||v||En!==null&&En.memoizedState.tag&1){if(a.flags|=2048,Qo(9,Ap.bind(null,a,u,p,i),void 0,null),wn===null)throw Error(t(349));(as&30)!==0||Sp(a,i,p)}return p}function Sp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Ap(n,i,a,u){i.value=a,i.getSnapshot=u,wp(i)&&Tp(n)}function Ep(n,i,a){return a(function(){wp(i)&&Tp(n)})}function wp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Pi(n,a)}catch{return!0}}function Tp(n){var i=ur(n,1);i!==null&&Ni(i,n,1,-1)}function bp(n){var i=qi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:n},i.queue=n,n=n.dispatch=Rx.bind(null,tn,n),[i.memoizedState,n]}function Qo(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Cp(){return Mi().memoizedState}function el(n,i,a,u){var p=qi();tn.flags|=n,p.memoizedState=Qo(1|i,a,void 0,u===void 0?null:u)}function tl(n,i,a,u){var p=Mi();u=u===void 0?null:u;var v=void 0;if(pn!==null){var b=pn.memoizedState;if(v=b.destroy,u!==null&&pu(u,b.deps)){p.memoizedState=Qo(i,a,v,u);return}}tn.flags|=n,p.memoizedState=Qo(1|i,a,v,u)}function Rp(n,i){return el(8390656,8,n,i)}function _u(n,i){return tl(2048,8,n,i)}function Pp(n,i){return tl(4,2,n,i)}function Lp(n,i){return tl(4,4,n,i)}function Ip(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Dp(n,i,a){return a=a!=null?a.concat([n]):null,tl(4,4,Ip.bind(null,i,n),a)}function yu(){}function Up(n,i){var a=Mi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&pu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Np(n,i){var a=Mi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&pu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Fp(n,i,a){return(as&21)===0?(n.baseState&&(n.baseState=!1,ti=!0),n.memoizedState=a):(Pi(a,i)||(a=Qe(),tn.lanes|=a,ls|=a,n.baseState=!0),i)}function bx(n,i){var a=Ct;Ct=a!==0&&4>a?a:4,n(!0);var u=du.transition;du.transition={};try{n(!1),i()}finally{Ct=a,du.transition=u}}function Op(){return Mi().memoizedState}function Cx(n,i,a){var u=Br(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},kp(n))Bp(i,a);else if(a=mp(n,i,a,u),a!==null){var p=Yn();Ni(a,n,u,p),zp(a,i,u)}}function Rx(n,i,a){var u=Br(n),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(kp(n))Bp(i,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var b=i.lastRenderedState,H=v(b,a);if(p.hasEagerState=!0,p.eagerState=H,Pi(H,b)){var J=i.interleaved;J===null?(p.next=p,au(i)):(p.next=J.next,J.next=p),i.interleaved=p;return}}catch{}finally{}a=mp(n,i,p,u),a!==null&&(p=Yn(),Ni(a,n,u,p),zp(a,i,u))}}function kp(n){var i=n.alternate;return n===tn||i!==null&&i===tn}function Bp(n,i){Ko=$a=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function zp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,An(n,a)}}var nl={readContext:yi,useCallback:On,useContext:On,useEffect:On,useImperativeHandle:On,useInsertionEffect:On,useLayoutEffect:On,useMemo:On,useReducer:On,useRef:On,useState:On,useDebugValue:On,useDeferredValue:On,useTransition:On,useMutableSource:On,useSyncExternalStore:On,useId:On,unstable_isNewReconciler:!1},Px={readContext:yi,useCallback:function(n,i){return qi().memoizedState=[n,i===void 0?null:i],n},useContext:yi,useEffect:Rp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,el(4194308,4,Ip.bind(null,i,n),a)},useLayoutEffect:function(n,i){return el(4194308,4,n,i)},useInsertionEffect:function(n,i){return el(4,2,n,i)},useMemo:function(n,i){var a=qi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=qi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Cx.bind(null,tn,n),[u.memoizedState,n]},useRef:function(n){var i=qi();return n={current:n},i.memoizedState=n},useState:bp,useDebugValue:yu,useDeferredValue:function(n){return qi().memoizedState=n},useTransition:function(){var n=bp(!1),i=n[0];return n=bx.bind(null,n[1]),qi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=tn,p=qi();if($t){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),wn===null)throw Error(t(349));(as&30)!==0||Sp(u,i,a)}p.memoizedState=a;var v={value:a,getSnapshot:i};return p.queue=v,Rp(Ep.bind(null,u,v,n),[n]),u.flags|=2048,Qo(9,Ap.bind(null,u,v,a,i),void 0,null),a},useId:function(){var n=qi(),i=wn.identifierPrefix;if($t){var a=cr,u=lr;a=(u&~(1<<32-De(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=qo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Tx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Lx={readContext:yi,useCallback:Up,useContext:yi,useEffect:_u,useImperativeHandle:Dp,useInsertionEffect:Pp,useLayoutEffect:Lp,useMemo:Np,useReducer:vu,useRef:Cp,useState:function(){return vu(Yo)},useDebugValue:yu,useDeferredValue:function(n){var i=Mi();return Fp(i,pn.memoizedState,n)},useTransition:function(){var n=vu(Yo)[0],i=Mi().memoizedState;return[n,i]},useMutableSource:yp,useSyncExternalStore:Mp,useId:Op,unstable_isNewReconciler:!1},Ix={readContext:yi,useCallback:Up,useContext:yi,useEffect:_u,useImperativeHandle:Dp,useInsertionEffect:Pp,useLayoutEffect:Lp,useMemo:Np,useReducer:xu,useRef:Cp,useState:function(){return xu(Yo)},useDebugValue:yu,useDeferredValue:function(n){var i=Mi();return pn===null?i.memoizedState=n:Fp(i,pn.memoizedState,n)},useTransition:function(){var n=xu(Yo)[0],i=Mi().memoizedState;return[n,i]},useMutableSource:yp,useSyncExternalStore:Mp,useId:Op,unstable_isNewReconciler:!1};function Ii(n,i){if(n&&n.defaultProps){i=$({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Mu(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:$({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var il={isMounted:function(n){return(n=n._reactInternals)?Kn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Yn(),p=Br(n),v=fr(u,p);v.payload=i,a!=null&&(v.callback=a),i=Nr(n,v,p),i!==null&&(Ni(i,n,p,u),Ya(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Yn(),p=Br(n),v=fr(u,p);v.tag=1,v.payload=i,a!=null&&(v.callback=a),i=Nr(n,v,p),i!==null&&(Ni(i,n,p,u),Ya(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Yn(),u=Br(n),p=fr(a,u);p.tag=2,i!=null&&(p.callback=i),i=Nr(n,p,u),i!==null&&(Ni(i,n,u,a),Ya(i,n,u))}};function Hp(n,i,a,u,p,v,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,b):i.prototype&&i.prototype.isPureReactComponent?!Fo(a,u)||!Fo(p,v):!0}function Vp(n,i,a){var u=!1,p=Ir,v=i.contextType;return typeof v=="object"&&v!==null?v=yi(v):(p=ei(i)?ns:Fn.current,u=i.contextTypes,v=(u=u!=null)?ks(n,p):Ir),i=new i(a,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=il,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),i}function Gp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&il.enqueueReplaceState(i,i.state,null)}function Su(n,i,a,u){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},lu(n);var v=i.contextType;typeof v=="object"&&v!==null?p.context=yi(v):(v=ei(i)?ns:Fn.current,p.context=ks(n,v)),p.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(Mu(n,i,v,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&il.enqueueReplaceState(p,p.state,null),Qa(n,a,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function js(n,i){try{var a="",u=i;do a+=de(u),u=u.return;while(u);var p=a}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:p,digest:null}}function Au(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Eu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Dx=typeof WeakMap=="function"?WeakMap:Map;function Wp(n,i,a){a=fr(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){ul||(ul=!0,Bu=u),Eu(n,i)},a}function Xp(n,i,a){a=fr(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=i.value;a.payload=function(){return u(p)},a.callback=function(){Eu(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Eu(n,i),typeof u!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function jp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Dx;var p=new Set;u.set(i,p)}else p=u.get(i),p===void 0&&(p=new Set,u.set(i,p));p.has(a)||(p.add(a),n=Kx.bind(null,n,i,a),i.then(n,n))}function Kp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function qp(n,i,a,u,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=fr(-1,1),i.tag=2,Nr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Ux=R.ReactCurrentOwner,ti=!1;function qn(n,i,a,u){i.child=n===null?pp(i,null,a,u):Vs(i,n.child,a,u)}function Yp(n,i,a,u,p){a=a.render;var v=i.ref;return Ws(i,p),u=mu(n,i,a,u,v,p),a=gu(),n!==null&&!ti?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,hr(n,i,p)):($t&&a&&Zc(i),i.flags|=1,qn(n,i,u,p),i.child)}function Qp(n,i,a,u,p){if(n===null){var v=a.type;return typeof v=="function"&&!ju(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=v,Jp(n,i,v,u,p)):(n=gl(a.type,null,u,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&p)===0){var b=v.memoizedProps;if(a=a.compare,a=a!==null?a:Fo,a(b,u)&&n.ref===i.ref)return hr(n,i,p)}return i.flags|=1,n=Hr(v,u),n.ref=i.ref,n.return=i,i.child=n}function Jp(n,i,a,u,p){if(n!==null){var v=n.memoizedProps;if(Fo(v,u)&&n.ref===i.ref)if(ti=!1,i.pendingProps=u=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(ti=!0);else return i.lanes=n.lanes,hr(n,i,p)}return wu(n,i,a,u,p)}function Zp(n,i,a){var u=i.pendingProps,p=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qt(qs,hi),hi|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qt(qs,hi),hi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:a,qt(qs,hi),hi|=u}else v!==null?(u=v.baseLanes|a,i.memoizedState=null):u=a,qt(qs,hi),hi|=u;return qn(n,i,p,a),i.child}function $p(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function wu(n,i,a,u,p){var v=ei(a)?ns:Fn.current;return v=ks(i,v),Ws(i,p),a=mu(n,i,a,u,v,p),u=gu(),n!==null&&!ti?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,hr(n,i,p)):($t&&u&&Zc(i),i.flags|=1,qn(n,i,a,p),i.child)}function em(n,i,a,u,p){if(ei(a)){var v=!0;Ha(i)}else v=!1;if(Ws(i,p),i.stateNode===null)sl(n,i),Vp(i,a,u),Su(i,a,u,p),u=!0;else if(n===null){var b=i.stateNode,H=i.memoizedProps;b.props=H;var J=b.context,pe=a.contextType;typeof pe=="object"&&pe!==null?pe=yi(pe):(pe=ei(a)?ns:Fn.current,pe=ks(i,pe));var Le=a.getDerivedStateFromProps,Ue=typeof Le=="function"||typeof b.getSnapshotBeforeUpdate=="function";Ue||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(H!==u||J!==pe)&&Gp(i,b,u,pe),Ur=!1;var Pe=i.memoizedState;b.state=Pe,Qa(i,u,b,p),J=i.memoizedState,H!==u||Pe!==J||$n.current||Ur?(typeof Le=="function"&&(Mu(i,a,Le,u),J=i.memoizedState),(H=Ur||Hp(i,a,H,u,Pe,J,pe))?(Ue||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=J),b.props=u,b.state=J,b.context=pe,u=H):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{b=i.stateNode,gp(n,i),H=i.memoizedProps,pe=i.type===i.elementType?H:Ii(i.type,H),b.props=pe,Ue=i.pendingProps,Pe=b.context,J=a.contextType,typeof J=="object"&&J!==null?J=yi(J):(J=ei(a)?ns:Fn.current,J=ks(i,J));var et=a.getDerivedStateFromProps;(Le=typeof et=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(H!==Ue||Pe!==J)&&Gp(i,b,u,J),Ur=!1,Pe=i.memoizedState,b.state=Pe,Qa(i,u,b,p);var at=i.memoizedState;H!==Ue||Pe!==at||$n.current||Ur?(typeof et=="function"&&(Mu(i,a,et,u),at=i.memoizedState),(pe=Ur||Hp(i,a,pe,u,Pe,at,J)||!1)?(Le||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(u,at,J),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(u,at,J)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||H===n.memoizedProps&&Pe===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Pe===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=at),b.props=u,b.state=at,b.context=J,u=pe):(typeof b.componentDidUpdate!="function"||H===n.memoizedProps&&Pe===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Pe===n.memoizedState||(i.flags|=1024),u=!1)}return Tu(n,i,a,u,v,p)}function Tu(n,i,a,u,p,v){$p(n,i);var b=(i.flags&128)!==0;if(!u&&!b)return p&&sp(i,a,!1),hr(n,i,v);u=i.stateNode,Ux.current=i;var H=b&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&b?(i.child=Vs(i,n.child,null,v),i.child=Vs(i,null,H,v)):qn(n,i,H,v),i.memoizedState=u.state,p&&sp(i,a,!0),i.child}function tm(n){var i=n.stateNode;i.pendingContext?ip(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ip(n,i.context,!1),cu(n,i.containerInfo)}function nm(n,i,a,u,p){return Hs(),nu(p),i.flags|=256,qn(n,i,a,u),i.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Cu(n){return{baseLanes:n,cachePool:null,transitions:null}}function im(n,i,a){var u=i.pendingProps,p=en.current,v=!1,b=(i.flags&128)!==0,H;if((H=b)||(H=n!==null&&n.memoizedState===null?!1:(p&2)!==0),H?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),qt(en,p&1),n===null)return tu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=u.children,n=u.fallback,v?(u=i.mode,v=i.child,b={mode:"hidden",children:b},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=b):v=vl(b,u,0,null),n=hs(n,u,a,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=Cu(a),i.memoizedState=bu,n):Ru(i,b));if(p=n.memoizedState,p!==null&&(H=p.dehydrated,H!==null))return Nx(n,i,b,u,H,p,a);if(v){v=u.fallback,b=i.mode,p=n.child,H=p.sibling;var J={mode:"hidden",children:u.children};return(b&1)===0&&i.child!==p?(u=i.child,u.childLanes=0,u.pendingProps=J,i.deletions=null):(u=Hr(p,J),u.subtreeFlags=p.subtreeFlags&14680064),H!==null?v=Hr(H,v):(v=hs(v,b,a,null),v.flags|=2),v.return=i,u.return=i,u.sibling=v,i.child=u,u=v,v=i.child,b=n.child.memoizedState,b=b===null?Cu(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},v.memoizedState=b,v.childLanes=n.childLanes&~a,i.memoizedState=bu,u}return v=n.child,n=v.sibling,u=Hr(v,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Ru(n,i){return i=vl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function rl(n,i,a,u){return u!==null&&nu(u),Vs(i,n.child,null,a),n=Ru(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Nx(n,i,a,u,p,v,b){if(a)return i.flags&256?(i.flags&=-257,u=Au(Error(t(422))),rl(n,i,b,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=u.fallback,p=i.mode,u=vl({mode:"visible",children:u.children},p,0,null),v=hs(v,p,b,null),v.flags|=2,u.return=i,v.return=i,u.sibling=v,i.child=u,(i.mode&1)!==0&&Vs(i,n.child,null,b),i.child.memoizedState=Cu(b),i.memoizedState=bu,v);if((i.mode&1)===0)return rl(n,i,b,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var H=u.dgst;return u=H,v=Error(t(419)),u=Au(v,u,void 0),rl(n,i,b,u)}if(H=(b&n.childLanes)!==0,ti||H){if(u=wn,u!==null){switch(b&-b){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|b))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,ur(n,p),Ni(u,n,p,-1))}return Xu(),u=Au(Error(t(421))),rl(n,i,b,u)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=qx.bind(null,n),p._reactRetry=i,null):(n=v.treeContext,fi=Pr(p.nextSibling),ui=i,$t=!0,Li=null,n!==null&&(xi[_i++]=lr,xi[_i++]=cr,xi[_i++]=is,lr=n.id,cr=n.overflow,is=i),i=Ru(i,u.children),i.flags|=4096,i)}function rm(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),ou(n.return,i,a)}function Pu(n,i,a,u,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=a,v.tailMode=p)}function sm(n,i,a){var u=i.pendingProps,p=u.revealOrder,v=u.tail;if(qn(n,i,u.children,a),u=en.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&rm(n,a,i);else if(n.tag===19)rm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(qt(en,u),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&Ja(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),Pu(i,!1,p,a,v);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&Ja(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Pu(i,!0,a,null,v);break;case"together":Pu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function sl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function hr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ls|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Hr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Hr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Fx(n,i,a){switch(i.tag){case 3:tm(i),Hs();break;case 5:_p(i);break;case 1:ei(i.type)&&Ha(i);break;case 4:cu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,p=i.memoizedProps.value;qt(Ka,u._currentValue),u._currentValue=p;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(qt(en,en.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?im(n,i,a):(qt(en,en.current&1),n=hr(n,i,a),n!==null?n.sibling:null);qt(en,en.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return sm(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),qt(en,en.current),u)break;return null;case 22:case 23:return i.lanes=0,Zp(n,i,a)}return hr(n,i,a)}var om,Lu,am,lm;om=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Lu=function(){},am=function(n,i,a,u){var p=n.memoizedProps;if(p!==u){n=i.stateNode,os(Ki.current);var v=null;switch(a){case"input":p=je(n,p),u=je(n,u),v=[];break;case"select":p=$({},p,{value:void 0}),u=$({},u,{value:void 0}),v=[];break;case"textarea":p=ue(n,p),u=ue(n,u),v=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ka)}Ke(a,u);var b;a=null;for(pe in p)if(!u.hasOwnProperty(pe)&&p.hasOwnProperty(pe)&&p[pe]!=null)if(pe==="style"){var H=p[pe];for(b in H)H.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(o.hasOwnProperty(pe)?v||(v=[]):(v=v||[]).push(pe,null));for(pe in u){var J=u[pe];if(H=p!=null?p[pe]:void 0,u.hasOwnProperty(pe)&&J!==H&&(J!=null||H!=null))if(pe==="style")if(H){for(b in H)!H.hasOwnProperty(b)||J&&J.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in J)J.hasOwnProperty(b)&&H[b]!==J[b]&&(a||(a={}),a[b]=J[b])}else a||(v||(v=[]),v.push(pe,a)),a=J;else pe==="dangerouslySetInnerHTML"?(J=J?J.__html:void 0,H=H?H.__html:void 0,J!=null&&H!==J&&(v=v||[]).push(pe,J)):pe==="children"?typeof J!="string"&&typeof J!="number"||(v=v||[]).push(pe,""+J):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(o.hasOwnProperty(pe)?(J!=null&&pe==="onScroll"&&Jt("scroll",n),v||H===J||(v=[])):(v=v||[]).push(pe,J))}a&&(v=v||[]).push("style",a);var pe=v;(i.updateQueue=pe)&&(i.flags|=4)}},lm=function(n,i,a,u){a!==u&&(i.flags|=4)};function Jo(n,i){if(!$t)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function kn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Ox(n,i,a){var u=i.pendingProps;switch($c(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kn(i),null;case 1:return ei(i.type)&&za(),kn(i),null;case 3:return u=i.stateNode,Xs(),Zt($n),Zt(Fn),hu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Xa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Li!==null&&(Vu(Li),Li=null))),Lu(n,i),kn(i),null;case 5:uu(i);var p=os(jo.current);if(a=i.type,n!==null&&i.stateNode!=null)am(n,i,a,u,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return kn(i),null}if(n=os(Ki.current),Xa(i)){u=i.stateNode,a=i.type;var v=i.memoizedProps;switch(u[ji]=i,u[Ho]=v,n=(i.mode&1)!==0,a){case"dialog":Jt("cancel",u),Jt("close",u);break;case"iframe":case"object":case"embed":Jt("load",u);break;case"video":case"audio":for(p=0;p<ko.length;p++)Jt(ko[p],u);break;case"source":Jt("error",u);break;case"img":case"image":case"link":Jt("error",u),Jt("load",u);break;case"details":Jt("toggle",u);break;case"input":tt(u,v),Jt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},Jt("invalid",u);break;case"textarea":we(u,v),Jt("invalid",u)}Ke(a,v),p=null;for(var b in v)if(v.hasOwnProperty(b)){var H=v[b];b==="children"?typeof H=="string"?u.textContent!==H&&(v.suppressHydrationWarning!==!0&&Oa(u.textContent,H,n),p=["children",H]):typeof H=="number"&&u.textContent!==""+H&&(v.suppressHydrationWarning!==!0&&Oa(u.textContent,H,n),p=["children",""+H]):o.hasOwnProperty(b)&&H!=null&&b==="onScroll"&&Jt("scroll",u)}switch(a){case"input":xe(u),mt(u,v,!0);break;case"textarea":xe(u),ht(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=ka)}u=p,i.updateQueue=u,u!==null&&(i.flags|=4)}else{b=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=L(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=b.createElement(a,{is:u.is}):(n=b.createElement(a),a==="select"&&(b=n,u.multiple?b.multiple=!0:u.size&&(b.size=u.size))):n=b.createElementNS(n,a),n[ji]=i,n[Ho]=u,om(n,i,!1,!1),i.stateNode=n;e:{switch(b=Ne(a,u),a){case"dialog":Jt("cancel",n),Jt("close",n),p=u;break;case"iframe":case"object":case"embed":Jt("load",n),p=u;break;case"video":case"audio":for(p=0;p<ko.length;p++)Jt(ko[p],n);p=u;break;case"source":Jt("error",n),p=u;break;case"img":case"image":case"link":Jt("error",n),Jt("load",n),p=u;break;case"details":Jt("toggle",n),p=u;break;case"input":tt(n,u),p=je(n,u),Jt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=$({},u,{value:void 0}),Jt("invalid",n);break;case"textarea":we(n,u),p=ue(n,u),Jt("invalid",n);break;default:p=u}Ke(a,p),H=p;for(v in H)if(H.hasOwnProperty(v)){var J=H[v];v==="style"?ge(n,J):v==="dangerouslySetInnerHTML"?(J=J?J.__html:void 0,J!=null&&ye(n,J)):v==="children"?typeof J=="string"?(a!=="textarea"||J!=="")&&Ce(n,J):typeof J=="number"&&Ce(n,""+J):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?J!=null&&v==="onScroll"&&Jt("scroll",n):J!=null&&P(n,v,J,b))}switch(a){case"input":xe(n),mt(n,u,!1);break;case"textarea":xe(n),ht(n);break;case"option":u.value!=null&&n.setAttribute("value",""+se(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?Re(n,!!u.multiple,v,!1):u.defaultValue!=null&&Re(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=ka)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return kn(i),null;case 6:if(n&&i.stateNode!=null)lm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=os(jo.current),os(Ki.current),Xa(i)){if(u=i.stateNode,a=i.memoizedProps,u[ji]=i,(v=u.nodeValue!==a)&&(n=ui,n!==null))switch(n.tag){case 3:Oa(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Oa(u.nodeValue,a,(n.mode&1)!==0)}v&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[ji]=i,i.stateNode=u}return kn(i),null;case 13:if(Zt(en),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if($t&&fi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)fp(),Hs(),i.flags|=98560,v=!1;else if(v=Xa(i),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[ji]=i}else Hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;kn(i),v=!1}else Li!==null&&(Vu(Li),Li=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(en.current&1)!==0?mn===0&&(mn=3):Xu())),i.updateQueue!==null&&(i.flags|=4),kn(i),null);case 4:return Xs(),Lu(n,i),n===null&&Bo(i.stateNode.containerInfo),kn(i),null;case 10:return su(i.type._context),kn(i),null;case 17:return ei(i.type)&&za(),kn(i),null;case 19:if(Zt(en),v=i.memoizedState,v===null)return kn(i),null;if(u=(i.flags&128)!==0,b=v.rendering,b===null)if(u)Jo(v,!1);else{if(mn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=Ja(n),b!==null){for(i.flags|=128,Jo(v,!1),u=b.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)v=a,n=u,v.flags&=14680066,b=v.alternate,b===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=b.childLanes,v.lanes=b.lanes,v.child=b.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=b.memoizedProps,v.memoizedState=b.memoizedState,v.updateQueue=b.updateQueue,v.type=b.type,n=b.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qt(en,en.current&1|2),i.child}n=n.sibling}v.tail!==null&&yt()>Ys&&(i.flags|=128,u=!0,Jo(v,!1),i.lanes=4194304)}else{if(!u)if(n=Ja(b),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Jo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!b.alternate&&!$t)return kn(i),null}else 2*yt()-v.renderingStartTime>Ys&&a!==1073741824&&(i.flags|=128,u=!0,Jo(v,!1),i.lanes=4194304);v.isBackwards?(b.sibling=i.child,i.child=b):(a=v.last,a!==null?a.sibling=b:i.child=b,v.last=b)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=yt(),i.sibling=null,a=en.current,qt(en,u?a&1|2:a&1),i):(kn(i),null);case 22:case 23:return Wu(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(hi&1073741824)!==0&&(kn(i),i.subtreeFlags&6&&(i.flags|=8192)):kn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function kx(n,i){switch($c(i),i.tag){case 1:return ei(i.type)&&za(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Xs(),Zt($n),Zt(Fn),hu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return uu(i),null;case 13:if(Zt(en),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Hs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Zt(en),null;case 4:return Xs(),null;case 10:return su(i.type._context),null;case 22:case 23:return Wu(),null;case 24:return null;default:return null}}var ol=!1,Bn=!1,Bx=typeof WeakSet=="function"?WeakSet:Set,st=null;function Ks(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){sn(n,i,u)}else a.current=null}function Iu(n,i,a){try{a()}catch(u){sn(n,i,u)}}var cm=!1;function zx(n,i){if(Wc=Ta,n=Hd(),Fc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var b=0,H=-1,J=-1,pe=0,Le=0,Ue=n,Pe=null;t:for(;;){for(var et;Ue!==a||p!==0&&Ue.nodeType!==3||(H=b+p),Ue!==v||u!==0&&Ue.nodeType!==3||(J=b+u),Ue.nodeType===3&&(b+=Ue.nodeValue.length),(et=Ue.firstChild)!==null;)Pe=Ue,Ue=et;for(;;){if(Ue===n)break t;if(Pe===a&&++pe===p&&(H=b),Pe===v&&++Le===u&&(J=b),(et=Ue.nextSibling)!==null)break;Ue=Pe,Pe=Ue.parentNode}Ue=et}a=H===-1||J===-1?null:{start:H,end:J}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xc={focusedElem:n,selectionRange:a},Ta=!1,st=i;st!==null;)if(i=st,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,st=n;else for(;st!==null;){i=st;try{var at=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(at!==null){var ut=at.memoizedProps,an=at.memoizedState,ae=i.stateNode,ee=ae.getSnapshotBeforeUpdate(i.elementType===i.type?ut:Ii(i.type,ut),an);ae.__reactInternalSnapshotBeforeUpdate=ee}break;case 3:var he=i.stateNode.containerInfo;he.nodeType===1?he.textContent="":he.nodeType===9&&he.documentElement&&he.removeChild(he.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ge){sn(i,i.return,Ge)}if(n=i.sibling,n!==null){n.return=i.return,st=n;break}st=i.return}return at=cm,cm=!1,at}function Zo(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Iu(i,a,v)}p=p.next}while(p!==u)}}function al(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Du(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function um(n){var i=n.alternate;i!==null&&(n.alternate=null,um(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[ji],delete i[Ho],delete i[Yc],delete i[Sx],delete i[Ax])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function fm(n){return n.tag===5||n.tag===3||n.tag===4}function hm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||fm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Uu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ka));else if(u!==4&&(n=n.child,n!==null))for(Uu(n,i,a),n=n.sibling;n!==null;)Uu(n,i,a),n=n.sibling}function Nu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Nu(n,i,a),n=n.sibling;n!==null;)Nu(n,i,a),n=n.sibling}var Ln=null,Di=!1;function Fr(n,i,a){for(a=a.child;a!==null;)dm(n,i,a),a=a.sibling}function dm(n,i,a){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(oe,a)}catch{}switch(a.tag){case 5:Bn||Ks(a,i);case 6:var u=Ln,p=Di;Ln=null,Fr(n,i,a),Ln=u,Di=p,Ln!==null&&(Di?(n=Ln,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ln.removeChild(a.stateNode));break;case 18:Ln!==null&&(Di?(n=Ln,a=a.stateNode,n.nodeType===8?qc(n.parentNode,a):n.nodeType===1&&qc(n,a),Po(n)):qc(Ln,a.stateNode));break;case 4:u=Ln,p=Di,Ln=a.stateNode.containerInfo,Di=!0,Fr(n,i,a),Ln=u,Di=p;break;case 0:case 11:case 14:case 15:if(!Bn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var v=p,b=v.destroy;v=v.tag,b!==void 0&&((v&2)!==0||(v&4)!==0)&&Iu(a,i,b),p=p.next}while(p!==u)}Fr(n,i,a);break;case 1:if(!Bn&&(Ks(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(H){sn(a,i,H)}Fr(n,i,a);break;case 21:Fr(n,i,a);break;case 22:a.mode&1?(Bn=(u=Bn)||a.memoizedState!==null,Fr(n,i,a),Bn=u):Fr(n,i,a);break;default:Fr(n,i,a)}}function pm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Bx),i.forEach(function(u){var p=Yx.bind(null,n,u);a.has(u)||(a.add(u),u.then(p,p))})}}function Ui(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var v=n,b=i,H=b;e:for(;H!==null;){switch(H.tag){case 5:Ln=H.stateNode,Di=!1;break e;case 3:Ln=H.stateNode.containerInfo,Di=!0;break e;case 4:Ln=H.stateNode.containerInfo,Di=!0;break e}H=H.return}if(Ln===null)throw Error(t(160));dm(v,b,p),Ln=null,Di=!1;var J=p.alternate;J!==null&&(J.return=null),p.return=null}catch(pe){sn(p,i,pe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)mm(i,n),i=i.sibling}function mm(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ui(i,n),Yi(n),u&4){try{Zo(3,n,n.return),al(3,n)}catch(ut){sn(n,n.return,ut)}try{Zo(5,n,n.return)}catch(ut){sn(n,n.return,ut)}}break;case 1:Ui(i,n),Yi(n),u&512&&a!==null&&Ks(a,a.return);break;case 5:if(Ui(i,n),Yi(n),u&512&&a!==null&&Ks(a,a.return),n.flags&32){var p=n.stateNode;try{Ce(p,"")}catch(ut){sn(n,n.return,ut)}}if(u&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,b=a!==null?a.memoizedProps:v,H=n.type,J=n.updateQueue;if(n.updateQueue=null,J!==null)try{H==="input"&&v.type==="radio"&&v.name!=null&&ot(p,v),Ne(H,b);var pe=Ne(H,v);for(b=0;b<J.length;b+=2){var Le=J[b],Ue=J[b+1];Le==="style"?ge(p,Ue):Le==="dangerouslySetInnerHTML"?ye(p,Ue):Le==="children"?Ce(p,Ue):P(p,Le,Ue,pe)}switch(H){case"input":lt(p,v);break;case"textarea":Ee(p,v);break;case"select":var Pe=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var et=v.value;et!=null?Re(p,!!v.multiple,et,!1):Pe!==!!v.multiple&&(v.defaultValue!=null?Re(p,!!v.multiple,v.defaultValue,!0):Re(p,!!v.multiple,v.multiple?[]:"",!1))}p[Ho]=v}catch(ut){sn(n,n.return,ut)}}break;case 6:if(Ui(i,n),Yi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(ut){sn(n,n.return,ut)}}break;case 3:if(Ui(i,n),Yi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Po(i.containerInfo)}catch(ut){sn(n,n.return,ut)}break;case 4:Ui(i,n),Yi(n);break;case 13:Ui(i,n),Yi(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(ku=yt())),u&4&&pm(n);break;case 22:if(Le=a!==null&&a.memoizedState!==null,n.mode&1?(Bn=(pe=Bn)||Le,Ui(i,n),Bn=pe):Ui(i,n),Yi(n),u&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!Le&&(n.mode&1)!==0)for(st=n,Le=n.child;Le!==null;){for(Ue=st=Le;st!==null;){switch(Pe=st,et=Pe.child,Pe.tag){case 0:case 11:case 14:case 15:Zo(4,Pe,Pe.return);break;case 1:Ks(Pe,Pe.return);var at=Pe.stateNode;if(typeof at.componentWillUnmount=="function"){u=Pe,a=Pe.return;try{i=u,at.props=i.memoizedProps,at.state=i.memoizedState,at.componentWillUnmount()}catch(ut){sn(u,a,ut)}}break;case 5:Ks(Pe,Pe.return);break;case 22:if(Pe.memoizedState!==null){xm(Ue);continue}}et!==null?(et.return=Pe,st=et):xm(Ue)}Le=Le.sibling}e:for(Le=null,Ue=n;;){if(Ue.tag===5){if(Le===null){Le=Ue;try{p=Ue.stateNode,pe?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(H=Ue.stateNode,J=Ue.memoizedProps.style,b=J!=null&&J.hasOwnProperty("display")?J.display:null,H.style.display=me("display",b))}catch(ut){sn(n,n.return,ut)}}}else if(Ue.tag===6){if(Le===null)try{Ue.stateNode.nodeValue=pe?"":Ue.memoizedProps}catch(ut){sn(n,n.return,ut)}}else if((Ue.tag!==22&&Ue.tag!==23||Ue.memoizedState===null||Ue===n)&&Ue.child!==null){Ue.child.return=Ue,Ue=Ue.child;continue}if(Ue===n)break e;for(;Ue.sibling===null;){if(Ue.return===null||Ue.return===n)break e;Le===Ue&&(Le=null),Ue=Ue.return}Le===Ue&&(Le=null),Ue.sibling.return=Ue.return,Ue=Ue.sibling}}break;case 19:Ui(i,n),Yi(n),u&4&&pm(n);break;case 21:break;default:Ui(i,n),Yi(n)}}function Yi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(fm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Ce(p,""),u.flags&=-33);var v=hm(n);Nu(n,v,p);break;case 3:case 4:var b=u.stateNode.containerInfo,H=hm(n);Uu(n,H,b);break;default:throw Error(t(161))}}catch(J){sn(n,n.return,J)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Hx(n,i,a){st=n,gm(n)}function gm(n,i,a){for(var u=(n.mode&1)!==0;st!==null;){var p=st,v=p.child;if(p.tag===22&&u){var b=p.memoizedState!==null||ol;if(!b){var H=p.alternate,J=H!==null&&H.memoizedState!==null||Bn;H=ol;var pe=Bn;if(ol=b,(Bn=J)&&!pe)for(st=p;st!==null;)b=st,J=b.child,b.tag===22&&b.memoizedState!==null?_m(p):J!==null?(J.return=b,st=J):_m(p);for(;v!==null;)st=v,gm(v),v=v.sibling;st=p,ol=H,Bn=pe}vm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,st=v):vm(n)}}function vm(n){for(;st!==null;){var i=st;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Bn||al(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Bn)if(a===null)u.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:Ii(i.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&xp(i,v,u);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}xp(i,b,a)}break;case 5:var H=i.stateNode;if(a===null&&i.flags&4){a=H;var J=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":J.autoFocus&&a.focus();break;case"img":J.src&&(a.src=J.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var pe=i.alternate;if(pe!==null){var Le=pe.memoizedState;if(Le!==null){var Ue=Le.dehydrated;Ue!==null&&Po(Ue)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Bn||i.flags&512&&Du(i)}catch(Pe){sn(i,i.return,Pe)}}if(i===n){st=null;break}if(a=i.sibling,a!==null){a.return=i.return,st=a;break}st=i.return}}function xm(n){for(;st!==null;){var i=st;if(i===n){st=null;break}var a=i.sibling;if(a!==null){a.return=i.return,st=a;break}st=i.return}}function _m(n){for(;st!==null;){var i=st;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{al(4,i)}catch(J){sn(i,a,J)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var p=i.return;try{u.componentDidMount()}catch(J){sn(i,p,J)}}var v=i.return;try{Du(i)}catch(J){sn(i,v,J)}break;case 5:var b=i.return;try{Du(i)}catch(J){sn(i,b,J)}}}catch(J){sn(i,i.return,J)}if(i===n){st=null;break}var H=i.sibling;if(H!==null){H.return=i.return,st=H;break}st=i.return}}var Vx=Math.ceil,ll=R.ReactCurrentDispatcher,Fu=R.ReactCurrentOwner,Si=R.ReactCurrentBatchConfig,Ot=0,wn=null,fn=null,In=0,hi=0,qs=Lr(0),mn=0,$o=null,ls=0,cl=0,Ou=0,ea=null,ni=null,ku=0,Ys=1/0,dr=null,ul=!1,Bu=null,Or=null,fl=!1,kr=null,hl=0,ta=0,zu=null,dl=-1,pl=0;function Yn(){return(Ot&6)!==0?yt():dl!==-1?dl:dl=yt()}function Br(n){return(n.mode&1)===0?1:(Ot&2)!==0&&In!==0?In&-In:wx.transition!==null?(pl===0&&(pl=Qe()),pl):(n=Ct,n!==0||(n=window.event,n=n===void 0?16:Md(n.type)),n)}function Ni(n,i,a,u){if(50<ta)throw ta=0,zu=null,Error(t(185));Tt(n,a,u),((Ot&2)===0||n!==wn)&&(n===wn&&((Ot&2)===0&&(cl|=a),mn===4&&zr(n,In)),ii(n,u),a===1&&Ot===0&&(i.mode&1)===0&&(Ys=yt()+500,Va&&Dr()))}function ii(n,i){var a=n.callbackNode;Ht(n,i);var u=Gt(n,n===wn?In:0);if(u===0)a!==null&&Wi(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Wi(a),i===1)n.tag===0?Ex(Mm.bind(null,n)):op(Mm.bind(null,n)),yx(function(){(Ot&6)===0&&Dr()}),a=null;else{switch(Nn(u)){case 1:a=vi;break;case 4:a=C;break;case 16:a=Z;break;case 536870912:a=ie;break;default:a=Z}a=Rm(a,ym.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function ym(n,i){if(dl=-1,pl=0,(Ot&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Qs()&&n.callbackNode!==a)return null;var u=Gt(n,n===wn?In:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=ml(n,u);else{i=u;var p=Ot;Ot|=2;var v=Am();(wn!==n||In!==i)&&(dr=null,Ys=yt()+500,us(n,i));do try{Xx();break}catch(H){Sm(n,H)}while(!0);ru(),ll.current=v,Ot=p,fn!==null?i=0:(wn=null,In=0,i=mn)}if(i!==0){if(i===2&&(p=rn(n),p!==0&&(u=p,i=Hu(n,p))),i===1)throw a=$o,us(n,0),zr(n,u),ii(n,yt()),a;if(i===6)zr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!Gx(p)&&(i=ml(n,u),i===2&&(v=rn(n),v!==0&&(u=v,i=Hu(n,v))),i===1))throw a=$o,us(n,0),zr(n,u),ii(n,yt()),a;switch(n.finishedWork=p,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:fs(n,ni,dr);break;case 3:if(zr(n,u),(u&130023424)===u&&(i=ku+500-yt(),10<i)){if(Gt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Yn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Kc(fs.bind(null,n,ni,dr),i);break}fs(n,ni,dr);break;case 4:if(zr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,p=-1;0<u;){var b=31-De(u);v=1<<b,b=i[b],b>p&&(p=b),u&=~v}if(u=p,u=yt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Vx(u/1960))-u,10<u){n.timeoutHandle=Kc(fs.bind(null,n,ni,dr),u);break}fs(n,ni,dr);break;case 5:fs(n,ni,dr);break;default:throw Error(t(329))}}}return ii(n,yt()),n.callbackNode===a?ym.bind(null,n):null}function Hu(n,i){var a=ea;return n.current.memoizedState.isDehydrated&&(us(n,i).flags|=256),n=ml(n,i),n!==2&&(i=ni,ni=a,i!==null&&Vu(i)),n}function Vu(n){ni===null?ni=n:ni.push.apply(ni,n)}function Gx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],v=p.getSnapshot;p=p.value;try{if(!Pi(v(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function zr(n,i){for(i&=~Ou,i&=~cl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-De(i),u=1<<a;n[a]=-1,i&=~u}}function Mm(n){if((Ot&6)!==0)throw Error(t(327));Qs();var i=Gt(n,0);if((i&1)===0)return ii(n,yt()),null;var a=ml(n,i);if(n.tag!==0&&a===2){var u=rn(n);u!==0&&(i=u,a=Hu(n,u))}if(a===1)throw a=$o,us(n,0),zr(n,i),ii(n,yt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,fs(n,ni,dr),ii(n,yt()),null}function Gu(n,i){var a=Ot;Ot|=1;try{return n(i)}finally{Ot=a,Ot===0&&(Ys=yt()+500,Va&&Dr())}}function cs(n){kr!==null&&kr.tag===0&&(Ot&6)===0&&Qs();var i=Ot;Ot|=1;var a=Si.transition,u=Ct;try{if(Si.transition=null,Ct=1,n)return n()}finally{Ct=u,Si.transition=a,Ot=i,(Ot&6)===0&&Dr()}}function Wu(){hi=qs.current,Zt(qs)}function us(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,_x(a)),fn!==null)for(a=fn.return;a!==null;){var u=a;switch($c(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&za();break;case 3:Xs(),Zt($n),Zt(Fn),hu();break;case 5:uu(u);break;case 4:Xs();break;case 13:Zt(en);break;case 19:Zt(en);break;case 10:su(u.type._context);break;case 22:case 23:Wu()}a=a.return}if(wn=n,fn=n=Hr(n.current,null),In=hi=i,mn=0,$o=null,Ou=cl=ls=0,ni=ea=null,ss!==null){for(i=0;i<ss.length;i++)if(a=ss[i],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,v=a.pending;if(v!==null){var b=v.next;v.next=p,u.next=b}a.pending=u}ss=null}return n}function Sm(n,i){do{var a=fn;try{if(ru(),Za.current=nl,$a){for(var u=tn.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}$a=!1}if(as=0,En=pn=tn=null,Ko=!1,qo=0,Fu.current=null,a===null||a.return===null){mn=1,$o=i,fn=null;break}e:{var v=n,b=a.return,H=a,J=i;if(i=In,H.flags|=32768,J!==null&&typeof J=="object"&&typeof J.then=="function"){var pe=J,Le=H,Ue=Le.tag;if((Le.mode&1)===0&&(Ue===0||Ue===11||Ue===15)){var Pe=Le.alternate;Pe?(Le.updateQueue=Pe.updateQueue,Le.memoizedState=Pe.memoizedState,Le.lanes=Pe.lanes):(Le.updateQueue=null,Le.memoizedState=null)}var et=Kp(b);if(et!==null){et.flags&=-257,qp(et,b,H,v,i),et.mode&1&&jp(v,pe,i),i=et,J=pe;var at=i.updateQueue;if(at===null){var ut=new Set;ut.add(J),i.updateQueue=ut}else at.add(J);break e}else{if((i&1)===0){jp(v,pe,i),Xu();break e}J=Error(t(426))}}else if($t&&H.mode&1){var an=Kp(b);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),qp(an,b,H,v,i),nu(js(J,H));break e}}v=J=js(J,H),mn!==4&&(mn=2),ea===null?ea=[v]:ea.push(v),v=b;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var ae=Wp(v,J,i);vp(v,ae);break e;case 1:H=J;var ee=v.type,he=v.stateNode;if((v.flags&128)===0&&(typeof ee.getDerivedStateFromError=="function"||he!==null&&typeof he.componentDidCatch=="function"&&(Or===null||!Or.has(he)))){v.flags|=65536,i&=-i,v.lanes|=i;var Ge=Xp(v,H,i);vp(v,Ge);break e}}v=v.return}while(v!==null)}wm(a)}catch(ft){i=ft,fn===a&&a!==null&&(fn=a=a.return);continue}break}while(!0)}function Am(){var n=ll.current;return ll.current=nl,n===null?nl:n}function Xu(){(mn===0||mn===3||mn===2)&&(mn=4),wn===null||(ls&268435455)===0&&(cl&268435455)===0||zr(wn,In)}function ml(n,i){var a=Ot;Ot|=2;var u=Am();(wn!==n||In!==i)&&(dr=null,us(n,i));do try{Wx();break}catch(p){Sm(n,p)}while(!0);if(ru(),Ot=a,ll.current=u,fn!==null)throw Error(t(261));return wn=null,In=0,mn}function Wx(){for(;fn!==null;)Em(fn)}function Xx(){for(;fn!==null&&!sr();)Em(fn)}function Em(n){var i=Cm(n.alternate,n,hi);n.memoizedProps=n.pendingProps,i===null?wm(n):fn=i,Fu.current=null}function wm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Ox(a,i,hi),a!==null){fn=a;return}}else{if(a=kx(a,i),a!==null){a.flags&=32767,fn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mn=6,fn=null;return}}if(i=i.sibling,i!==null){fn=i;return}fn=i=n}while(i!==null);mn===0&&(mn=5)}function fs(n,i,a){var u=Ct,p=Si.transition;try{Si.transition=null,Ct=1,jx(n,i,a,u)}finally{Si.transition=p,Ct=u}return null}function jx(n,i,a,u){do Qs();while(kr!==null);if((Ot&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(Sn(n,v),n===wn&&(fn=wn=null,In=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||fl||(fl=!0,Rm(Z,function(){return Qs(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=Si.transition,Si.transition=null;var b=Ct;Ct=1;var H=Ot;Ot|=4,Fu.current=null,zx(n,a),mm(a,n),hx(Xc),Ta=!!Wc,Xc=Wc=null,n.current=a,Hx(a),ct(),Ot=H,Ct=b,Si.transition=v}else n.current=a;if(fl&&(fl=!1,kr=n,hl=p),v=n.pendingLanes,v===0&&(Or=null),Je(a.stateNode),ii(n,yt()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],u(p.value,{componentStack:p.stack,digest:p.digest});if(ul)throw ul=!1,n=Bu,Bu=null,n;return(hl&1)!==0&&n.tag!==0&&Qs(),v=n.pendingLanes,(v&1)!==0?n===zu?ta++:(ta=0,zu=n):ta=0,Dr(),null}function Qs(){if(kr!==null){var n=Nn(hl),i=Si.transition,a=Ct;try{if(Si.transition=null,Ct=16>n?16:n,kr===null)var u=!1;else{if(n=kr,kr=null,hl=0,(Ot&6)!==0)throw Error(t(331));var p=Ot;for(Ot|=4,st=n.current;st!==null;){var v=st,b=v.child;if((st.flags&16)!==0){var H=v.deletions;if(H!==null){for(var J=0;J<H.length;J++){var pe=H[J];for(st=pe;st!==null;){var Le=st;switch(Le.tag){case 0:case 11:case 15:Zo(8,Le,v)}var Ue=Le.child;if(Ue!==null)Ue.return=Le,st=Ue;else for(;st!==null;){Le=st;var Pe=Le.sibling,et=Le.return;if(um(Le),Le===pe){st=null;break}if(Pe!==null){Pe.return=et,st=Pe;break}st=et}}}var at=v.alternate;if(at!==null){var ut=at.child;if(ut!==null){at.child=null;do{var an=ut.sibling;ut.sibling=null,ut=an}while(ut!==null)}}st=v}}if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,st=b;else e:for(;st!==null;){if(v=st,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Zo(9,v,v.return)}var ae=v.sibling;if(ae!==null){ae.return=v.return,st=ae;break e}st=v.return}}var ee=n.current;for(st=ee;st!==null;){b=st;var he=b.child;if((b.subtreeFlags&2064)!==0&&he!==null)he.return=b,st=he;else e:for(b=ee;st!==null;){if(H=st,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:al(9,H)}}catch(ft){sn(H,H.return,ft)}if(H===b){st=null;break e}var Ge=H.sibling;if(Ge!==null){Ge.return=H.return,st=Ge;break e}st=H.return}}if(Ot=p,Dr(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(oe,n)}catch{}u=!0}return u}finally{Ct=a,Si.transition=i}}return!1}function Tm(n,i,a){i=js(a,i),i=Wp(n,i,1),n=Nr(n,i,1),i=Yn(),n!==null&&(Tt(n,1,i),ii(n,i))}function sn(n,i,a){if(n.tag===3)Tm(n,n,a);else for(;i!==null;){if(i.tag===3){Tm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Or===null||!Or.has(u))){n=js(a,n),n=Xp(i,n,1),i=Nr(i,n,1),n=Yn(),i!==null&&(Tt(i,1,n),ii(i,n));break}}i=i.return}}function Kx(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Yn(),n.pingedLanes|=n.suspendedLanes&a,wn===n&&(In&a)===a&&(mn===4||mn===3&&(In&130023424)===In&&500>yt()-ku?us(n,0):Ou|=a),ii(n,i)}function bm(n,i){i===0&&((n.mode&1)===0?i=1:(i=it,it<<=1,(it&130023424)===0&&(it=4194304)));var a=Yn();n=ur(n,i),n!==null&&(Tt(n,i,a),ii(n,a))}function qx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),bm(n,a)}function Yx(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),bm(n,a)}var Cm;Cm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||$n.current)ti=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ti=!1,Fx(n,i,a);ti=(n.flags&131072)!==0}else ti=!1,$t&&(i.flags&1048576)!==0&&ap(i,Wa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;sl(n,i),n=i.pendingProps;var p=ks(i,Fn.current);Ws(i,a),p=mu(null,i,u,n,p,a);var v=gu();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ei(u)?(v=!0,Ha(i)):v=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,lu(i),p.updater=il,i.stateNode=p,p._reactInternals=i,Su(i,u,n,a),i=Tu(null,i,u,!0,v,a)):(i.tag=0,$t&&v&&Zc(i),qn(null,i,p,a),i=i.child),i;case 16:u=i.elementType;e:{switch(sl(n,i),n=i.pendingProps,p=u._init,u=p(u._payload),i.type=u,p=i.tag=Jx(u),n=Ii(u,n),p){case 0:i=wu(null,i,u,n,a);break e;case 1:i=em(null,i,u,n,a);break e;case 11:i=Yp(null,i,u,n,a);break e;case 14:i=Qp(null,i,u,Ii(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ii(u,p),wu(n,i,u,p,a);case 1:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ii(u,p),em(n,i,u,p,a);case 3:e:{if(tm(i),n===null)throw Error(t(387));u=i.pendingProps,v=i.memoizedState,p=v.element,gp(n,i),Qa(i,u,null,a);var b=i.memoizedState;if(u=b.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){p=js(Error(t(423)),i),i=nm(n,i,u,a,p);break e}else if(u!==p){p=js(Error(t(424)),i),i=nm(n,i,u,a,p);break e}else for(fi=Pr(i.stateNode.containerInfo.firstChild),ui=i,$t=!0,Li=null,a=pp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),u===p){i=hr(n,i,a);break e}qn(n,i,u,a)}i=i.child}return i;case 5:return _p(i),n===null&&tu(i),u=i.type,p=i.pendingProps,v=n!==null?n.memoizedProps:null,b=p.children,jc(u,p)?b=null:v!==null&&jc(u,v)&&(i.flags|=32),$p(n,i),qn(n,i,b,a),i.child;case 6:return n===null&&tu(i),null;case 13:return im(n,i,a);case 4:return cu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Vs(i,null,u,a):qn(n,i,u,a),i.child;case 11:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ii(u,p),Yp(n,i,u,p,a);case 7:return qn(n,i,i.pendingProps,a),i.child;case 8:return qn(n,i,i.pendingProps.children,a),i.child;case 12:return qn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,p=i.pendingProps,v=i.memoizedProps,b=p.value,qt(Ka,u._currentValue),u._currentValue=b,v!==null)if(Pi(v.value,b)){if(v.children===p.children&&!$n.current){i=hr(n,i,a);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var H=v.dependencies;if(H!==null){b=v.child;for(var J=H.firstContext;J!==null;){if(J.context===u){if(v.tag===1){J=fr(-1,a&-a),J.tag=2;var pe=v.updateQueue;if(pe!==null){pe=pe.shared;var Le=pe.pending;Le===null?J.next=J:(J.next=Le.next,Le.next=J),pe.pending=J}}v.lanes|=a,J=v.alternate,J!==null&&(J.lanes|=a),ou(v.return,a,i),H.lanes|=a;break}J=J.next}}else if(v.tag===10)b=v.type===i.type?null:v.child;else if(v.tag===18){if(b=v.return,b===null)throw Error(t(341));b.lanes|=a,H=b.alternate,H!==null&&(H.lanes|=a),ou(b,a,i),b=v.sibling}else b=v.child;if(b!==null)b.return=v;else for(b=v;b!==null;){if(b===i){b=null;break}if(v=b.sibling,v!==null){v.return=b.return,b=v;break}b=b.return}v=b}qn(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,u=i.pendingProps.children,Ws(i,a),p=yi(p),u=u(p),i.flags|=1,qn(n,i,u,a),i.child;case 14:return u=i.type,p=Ii(u,i.pendingProps),p=Ii(u.type,p),Qp(n,i,u,p,a);case 15:return Jp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ii(u,p),sl(n,i),i.tag=1,ei(u)?(n=!0,Ha(i)):n=!1,Ws(i,a),Vp(i,u,p),Su(i,u,p,a),Tu(null,i,u,!0,n,a);case 19:return sm(n,i,a);case 22:return Zp(n,i,a)}throw Error(t(156,i.tag))};function Rm(n,i){return Pn(n,i)}function Qx(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(n,i,a,u){return new Qx(n,i,a,u)}function ju(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Jx(n){if(typeof n=="function")return ju(n)?1:0;if(n!=null){if(n=n.$$typeof,n===j)return 11;if(n===W)return 14}return 2}function Hr(n,i){var a=n.alternate;return a===null?(a=Ai(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function gl(n,i,a,u,p,v){var b=2;if(u=n,typeof n=="function")ju(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case O:return hs(a.children,p,v,i);case E:b=8,p|=8;break;case D:return n=Ai(12,a,i,p|2),n.elementType=D,n.lanes=v,n;case ce:return n=Ai(13,a,i,p),n.elementType=ce,n.lanes=v,n;case re:return n=Ai(19,a,i,p),n.elementType=re,n.lanes=v,n;case G:return vl(a,p,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case K:b=10;break e;case k:b=9;break e;case j:b=11;break e;case W:b=14;break e;case te:b=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ai(b,a,i,p),i.elementType=n,i.type=u,i.lanes=v,i}function hs(n,i,a,u){return n=Ai(7,n,u,i),n.lanes=a,n}function vl(n,i,a,u){return n=Ai(22,n,u,i),n.elementType=G,n.lanes=a,n.stateNode={isHidden:!1},n}function Ku(n,i,a){return n=Ai(6,n,null,i),n.lanes=a,n}function qu(n,i,a){return i=Ai(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Zx(n,i,a,u,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=un(0),this.expirationTimes=un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=un(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Yu(n,i,a,u,p,v,b,H,J){return n=new Zx(n,i,a,H,J),i===1?(i=1,v===!0&&(i|=8)):i=0,v=Ai(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},lu(v),n}function $x(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Pm(n){if(!n)return Ir;n=n._reactInternals;e:{if(Kn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ei(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ei(a))return rp(n,a,i)}return i}function Lm(n,i,a,u,p,v,b,H,J){return n=Yu(a,u,!0,n,p,v,b,H,J),n.context=Pm(null),a=n.current,u=Yn(),p=Br(a),v=fr(u,p),v.callback=i??null,Nr(a,v,p),n.current.lanes=p,Tt(n,p,u),ii(n,u),n}function xl(n,i,a,u){var p=i.current,v=Yn(),b=Br(p);return a=Pm(a),i.context===null?i.context=a:i.pendingContext=a,i=fr(v,b),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Nr(p,i,b),n!==null&&(Ni(n,p,b,v),Ya(n,p,b)),b}function _l(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Im(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Qu(n,i){Im(n,i),(n=n.alternate)&&Im(n,i)}function e_(){return null}var Dm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ju(n){this._internalRoot=n}yl.prototype.render=Ju.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));xl(n,i,null,null)},yl.prototype.unmount=Ju.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;cs(function(){xl(null,n,null,null)}),i[or]=null}};function yl(n){this._internalRoot=n}yl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Xt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<br.length&&i!==0&&i<br[a].priority;a++);br.splice(a,0,n),a===0&&_d(n)}};function Zu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Um(){}function t_(n,i,a,u,p){if(p){if(typeof u=="function"){var v=u;u=function(){var pe=_l(b);v.call(pe)}}var b=Lm(i,u,n,0,null,!1,!1,"",Um);return n._reactRootContainer=b,n[or]=b.current,Bo(n.nodeType===8?n.parentNode:n),cs(),b}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var H=u;u=function(){var pe=_l(J);H.call(pe)}}var J=Yu(n,0,!1,null,null,!1,!1,"",Um);return n._reactRootContainer=J,n[or]=J.current,Bo(n.nodeType===8?n.parentNode:n),cs(function(){xl(i,J,a,u)}),J}function Sl(n,i,a,u,p){var v=a._reactRootContainer;if(v){var b=v;if(typeof p=="function"){var H=p;p=function(){var J=_l(b);H.call(J)}}xl(i,b,n,p)}else b=t_(a,i,n,p,u);return _l(b)}Ft=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Lt(i.pendingLanes);a!==0&&(An(i,a|1),ii(i,yt()),(Ot&6)===0&&(Ys=yt()+500,Dr()))}break;case 13:cs(function(){var u=ur(n,1);if(u!==null){var p=Yn();Ni(u,n,1,p)}}),Qu(n,1)}},Qt=function(n){if(n.tag===13){var i=ur(n,134217728);if(i!==null){var a=Yn();Ni(i,n,134217728,a)}Qu(n,134217728)}},Ci=function(n){if(n.tag===13){var i=Br(n),a=ur(n,i);if(a!==null){var u=Yn();Ni(a,n,i,u)}Qu(n,i)}},Xt=function(){return Ct},Ri=function(n,i){var a=Ct;try{return Ct=n,i()}finally{Ct=a}},gt=function(n,i,a){switch(i){case"input":if(lt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var p=Ba(u);if(!p)throw Error(t(90));Xe(u),lt(u,p)}}}break;case"textarea":Ee(n,a);break;case"select":i=a.value,i!=null&&Re(n,!!a.multiple,i,!1)}},Te=Gu,ve=cs;var n_={usingClientEntryPoint:!1,Events:[Vo,Fs,Ba,_e,qe,Gu]},na={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},i_={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=_n(n),n===null?null:n.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||e_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{oe=Al.inject(i_),Be=Al}catch{}}return ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n_,ri.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zu(i))throw Error(t(200));return $x(n,i,null,a)},ri.createRoot=function(n,i){if(!Zu(n))throw Error(t(299));var a=!1,u="",p=Dm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=Yu(n,1,!1,null,null,a,!1,u,p),n[or]=i.current,Bo(n.nodeType===8?n.parentNode:n),new Ju(i)},ri.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=_n(i),n=n===null?null:n.stateNode,n},ri.flushSync=function(n){return cs(n)},ri.hydrate=function(n,i,a){if(!Ml(i))throw Error(t(200));return Sl(null,n,i,!0,a)},ri.hydrateRoot=function(n,i,a){if(!Zu(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,v="",b=Dm;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=Lm(i,null,n,1,a??null,p,!1,v,b),n[or]=i.current,Bo(n),u)for(n=0;n<u.length;n++)a=u[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new yl(i)},ri.render=function(n,i,a){if(!Ml(i))throw Error(t(200));return Sl(null,n,i,!1,a)},ri.unmountComponentAtNode=function(n){if(!Ml(n))throw Error(t(40));return n._reactRootContainer?(cs(function(){Sl(null,null,n,!1,function(){n._reactRootContainer=null,n[or]=null})}),!0):!1},ri.unstable_batchedUpdates=Gu,ri.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Ml(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Sl(n,i,a,!1,u)},ri.version="18.3.1-next-f1338f8080-20240426",ri}var Vm;function d_(){if(Vm)return tf.exports;Vm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),tf.exports=h_(),tf.exports}var Gm;function p_(){if(Gm)return El;Gm=1;var s=d_();return El.createRoot=s.createRoot,El.hydrateRoot=s.hydrateRoot,El}var m_=p_();const Wm={field:{count:1400,size:1,drift:1},look:{trail:.35,grain:.5,glow:1},form:{circle:0},hands:{reach:1,clap:1},sound:{beat:1,sparks:1,bass:1,quiet:0}};function g_(s,e){let t=s;for(const r of e.split(".")){if(typeof t!="object"||t===null)return;t=t[r]}return typeof t=="number"?t:void 0}function Ts(s,e){const t=structuredClone(s);for(const[r,o]of Object.entries(e)){if(!Number.isFinite(o)||g_(s,r)===void 0)continue;const l=r.split("."),c=l.pop();let f=t;for(const d of l)f=f[d];f[c]=o}return t}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kh="184",v_=0,Xm=1,x_=2,ec=1,__=2,pa=3,$r=0,oi=1,zi=2,yr=0,go=1,jm=2,Km=3,qm=4,y_=5,_s=100,M_=101,S_=102,A_=103,E_=104,w_=200,T_=201,b_=202,C_=203,Zf=204,$f=205,R_=206,P_=207,L_=208,I_=209,D_=210,U_=211,N_=212,F_=213,O_=214,eh=0,th=1,nh=2,xo=3,ih=4,rh=5,sh=6,oh=7,Ig=0,k_=1,B_=2,er=0,Dg=1,Ug=2,Ng=3,Fg=4,Og=5,kg=6,Bg=7,zg=300,As=301,_o=302,sf=303,of=304,_c=306,lc=1e3,_r=1001,ah=1002,gn=1003,z_=1004,wl=1005,Cn=1006,af=1007,Ms=1008,Ti=1009,Hg=1010,Vg=1011,_a=1012,qh=1013,ir=1014,Vi=1015,Sr=1016,Yh=1017,Qh=1018,ya=1020,Gg=35902,Wg=35899,Xg=1021,jg=1022,bi=1023,Ar=1026,Ss=1027,Kg=1028,Jh=1029,Es=1030,Zh=1031,$h=1033,tc=33776,nc=33777,ic=33778,rc=33779,lh=35840,ch=35841,uh=35842,fh=35843,hh=36196,dh=37492,ph=37496,mh=37488,gh=37489,cc=37490,vh=37491,xh=37808,_h=37809,yh=37810,Mh=37811,Sh=37812,Ah=37813,Eh=37814,wh=37815,Th=37816,bh=37817,Ch=37818,Rh=37819,Ph=37820,Lh=37821,Ih=36492,Dh=36494,Uh=36495,Nh=36283,Fh=36284,uc=36285,Oh=36286,H_=3200,Ym=0,V_=1,Jr="",wi="srgb",fc="srgb-linear",hc="linear",jt="srgb",Js=7680,Qm=519,G_=512,W_=513,X_=514,ed=515,j_=516,K_=517,td=518,q_=519,Jm=35044,Zm=35048,$m="300 es",$i=2e3,dc=2001;function Y_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function pc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Q_(){const s=pc("canvas");return s.style.display="block",s}const e0={};function t0(...s){const e="THREE."+s.shift();console.log(e,...s)}function qg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function St(...s){s=qg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Bt(...s){s=qg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function kh(...s){const e=s.join(" ");e in e0||(e0[e]=!0,St(...s))}function J_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Z_={[eh]:th,[nh]:sh,[ih]:oh,[xo]:rh,[th]:eh,[sh]:nh,[oh]:ih,[rh]:xo};class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let n0=1234567;const va=Math.PI/180,Ma=180/Math.PI;function So(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]).toLowerCase()}function Dt(s,e,t){return Math.max(e,Math.min(t,s))}function nd(s,e){return(s%e+e)%e}function $_(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function ey(s,e,t){return s!==e?(t-s)/(e-s):0}function xa(s,e,t){return(1-t)*s+t*e}function ty(s,e,t,r){return xa(s,e,1-Math.exp(-t*r))}function ny(s,e=1){return e-Math.abs(nd(s,e*2)-e)}function iy(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ry(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function sy(s,e){return s+Math.floor(Math.random()*(e-s+1))}function oy(s,e){return s+Math.random()*(e-s)}function ay(s){return s*(.5-Math.random())}function ly(s){s!==void 0&&(n0=s);let e=n0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cy(s){return s*va}function uy(s){return s*Ma}function fy(s){return(s&s-1)===0&&s!==0}function hy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function dy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function py(s,e,t,r,o){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),h=l((e+r)/2),g=c((e+r)/2),x=l((e-r)/2),m=c((e-r)/2),_=l((r-e)/2),S=c((r-e)/2);switch(o){case"XYX":s.set(f*g,d*x,d*m,f*h);break;case"YZY":s.set(d*m,f*g,d*x,f*h);break;case"ZXZ":s.set(d*x,d*m,f*g,f*h);break;case"XZX":s.set(f*g,d*S,d*_,f*h);break;case"YXY":s.set(d*_,f*g,d*S,f*h);break;case"ZYZ":s.set(d*S,d*_,f*g,f*h);break;default:St("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ho(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const lf={DEG2RAD:va,RAD2DEG:Ma,generateUUID:So,clamp:Dt,euclideanModulo:nd,mapLinear:$_,inverseLerp:ey,lerp:xa,damp:ty,pingpong:ny,smoothstep:iy,smootherstep:ry,randInt:sy,randFloat:oy,randFloatSpread:ay,seededRandom:ly,degToRad:cy,radToDeg:uy,isPowerOfTwo:fy,ceilPowerOfTwo:hy,floorPowerOfTwo:dy,setQuaternionFromProperEuler:py,normalize:Qn,denormalize:ho},dd=class dd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dd.prototype.isVector2=!0;let Ut=dd;class tr{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let d=r[o+0],h=r[o+1],g=r[o+2],x=r[o+3],m=l[c+0],_=l[c+1],S=l[c+2],T=l[c+3];if(x!==T||d!==m||h!==_||g!==S){let y=d*m+h*_+g*S+x*T;y<0&&(m=-m,_=-_,S=-S,T=-T,y=-y);let M=1-f;if(y<.9995){const w=Math.acos(y),P=Math.sin(w);M=Math.sin(M*w)/P,f=Math.sin(f*w)/P,d=d*M+m*f,h=h*M+_*f,g=g*M+S*f,x=x*M+T*f}else{d=d*M+m*f,h=h*M+_*f,g=g*M+S*f,x=x*M+T*f;const w=1/Math.sqrt(d*d+h*h+g*g+x*x);d*=w,h*=w,g*=w,x*=w}}e[t]=d,e[t+1]=h,e[t+2]=g,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],d=r[o+1],h=r[o+2],g=r[o+3],x=l[c],m=l[c+1],_=l[c+2],S=l[c+3];return e[t]=f*S+g*x+d*_-h*m,e[t+1]=d*S+g*m+h*x-f*_,e[t+2]=h*S+g*_+f*m-d*x,e[t+3]=g*S-f*x-d*m-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(r/2),g=f(o/2),x=f(l/2),m=d(r/2),_=d(o/2),S=d(l/2);switch(c){case"XYZ":this._x=m*g*x+h*_*S,this._y=h*_*x-m*g*S,this._z=h*g*S+m*_*x,this._w=h*g*x-m*_*S;break;case"YXZ":this._x=m*g*x+h*_*S,this._y=h*_*x-m*g*S,this._z=h*g*S-m*_*x,this._w=h*g*x+m*_*S;break;case"ZXY":this._x=m*g*x-h*_*S,this._y=h*_*x+m*g*S,this._z=h*g*S+m*_*x,this._w=h*g*x-m*_*S;break;case"ZYX":this._x=m*g*x-h*_*S,this._y=h*_*x+m*g*S,this._z=h*g*S-m*_*x,this._w=h*g*x+m*_*S;break;case"YZX":this._x=m*g*x+h*_*S,this._y=h*_*x+m*g*S,this._z=h*g*S-m*_*x,this._w=h*g*x-m*_*S;break;case"XZY":this._x=m*g*x-h*_*S,this._y=h*_*x-m*g*S,this._z=h*g*S+m*_*x,this._w=h*g*x+m*_*S;break;default:St("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],d=t[9],h=t[2],g=t[6],x=t[10],m=r+f+x;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(g-d)*_,this._y=(l-h)*_,this._z=(c-o)*_}else if(r>f&&r>x){const _=2*Math.sqrt(1+r-f-x);this._w=(g-d)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(l+h)/_}else if(f>x){const _=2*Math.sqrt(1+f-r-x);this._w=(l-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(d+g)/_}else{const _=2*Math.sqrt(1+x-r-f);this._w=(c-o)/_,this._x=(l+h)/_,this._y=(d+g)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,d=t._y,h=t._z,g=t._w;return this._x=r*g+c*f+o*h-l*d,this._y=o*g+c*d+l*f-r*h,this._z=l*g+c*h+r*d-o*f,this._w=c*g-r*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,c=-c,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);d=Math.sin(d*h)/g,t=Math.sin(t*h)/g,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const pd=class pd{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(i0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(i0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*o-f*r),g=2*(f*t-l*o),x=2*(l*r-c*t);return this.x=t+d*h+c*x-f*g,this.y=r+d*g+f*h-l*x,this.z=o+d*x+l*g-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*c-r*d,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return cf.copy(this).projectOnVector(e),this.sub(cf)}reflect(e){return this.sub(cf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pd.prototype.isVector3=!0;let Q=pd;const cf=new Q,i0=new tr,md=class md{constructor(e,t,r,o,l,c,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h)}set(e,t,r,o,l,c,f,d,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=d,g[6]=r,g[7]=c,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],d=r[6],h=r[1],g=r[4],x=r[7],m=r[2],_=r[5],S=r[8],T=o[0],y=o[3],M=o[6],w=o[1],P=o[4],R=o[7],z=o[2],I=o[5],O=o[8];return l[0]=c*T+f*w+d*z,l[3]=c*y+f*P+d*I,l[6]=c*M+f*R+d*O,l[1]=h*T+g*w+x*z,l[4]=h*y+g*P+x*I,l[7]=h*M+g*R+x*O,l[2]=m*T+_*w+S*z,l[5]=m*y+_*P+S*I,l[8]=m*M+_*R+S*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8];return t*c*g-t*f*h-r*l*g+r*f*d+o*l*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],x=g*c-f*h,m=f*d-g*l,_=h*l-c*d,S=t*x+r*m+o*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=x*T,e[1]=(o*h-g*r)*T,e[2]=(f*r-o*c)*T,e[3]=m*T,e[4]=(g*t-o*d)*T,e[5]=(o*l-f*t)*T,e[6]=_*T,e[7]=(r*d-h*t)*T,e[8]=(c*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*c+h*f)+c+e,-o*h,o*d,-o*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(uf.makeScale(e,t)),this}rotate(e){return this.premultiply(uf.makeRotation(-e)),this}translate(e,t){return this.premultiply(uf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};md.prototype.isMatrix3=!0;let bt=md;const uf=new bt,r0=new bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),s0=new bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function my(){const s={enabled:!0,workingColorSpace:fc,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===jt&&(o.r=Mr(o.r),o.g=Mr(o.g),o.b=Mr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===jt&&(o.r=vo(o.r),o.g=vo(o.g),o.b=vo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Jr?hc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return kh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return kh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[fc]:{primaries:e,whitePoint:r,transfer:hc,toXYZ:r0,fromXYZ:s0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wi},outputColorSpaceConfig:{drawingBufferColorSpace:wi}},[wi]:{primaries:e,whitePoint:r,transfer:jt,toXYZ:r0,fromXYZ:s0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wi}}}),s}const Nt=my();function Mr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zs;class gy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Zs===void 0&&(Zs=pc("canvas")),Zs.width=e.width,Zs.height=e.height;const o=Zs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Zs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Mr(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Mr(t[r]/255)*255):t[r]=Mr(t[r]);return{data:t,width:e.width,height:e.height}}else return St("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vy=0;class id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=So(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(ff(o[c].image)):l.push(ff(o[c]))}else l=ff(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ff(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(St("Texture: Unable to serialize Texture."),{})}let xy=0;const hf=new Q;class Gn extends bs{constructor(e=Gn.DEFAULT_IMAGE,t=Gn.DEFAULT_MAPPING,r=_r,o=_r,l=Cn,c=Ms,f=bi,d=Ti,h=Gn.DEFAULT_ANISOTROPY,g=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=So(),this.name="",this.source=new id(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hf).x}get height(){return this.source.getSize(hf).y}get depth(){return this.source.getSize(hf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){St(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){St(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lc:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lc:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=zg;Gn.DEFAULT_ANISOTROPY=1;const gd=class gd{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],g=d[4],x=d[8],m=d[1],_=d[5],S=d[9],T=d[2],y=d[6],M=d[10];if(Math.abs(g-m)<.01&&Math.abs(x-T)<.01&&Math.abs(S-y)<.01){if(Math.abs(g+m)<.1&&Math.abs(x+T)<.1&&Math.abs(S+y)<.1&&Math.abs(h+_+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,R=(_+1)/2,z=(M+1)/2,I=(g+m)/4,O=(x+T)/4,E=(S+y)/4;return P>R&&P>z?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=I/r,l=O/r):R>z?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=I/o,l=E/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=O/l,o=E/l),this.set(r,o,l,t),this}let w=Math.sqrt((y-S)*(y-S)+(x-T)*(x-T)+(m-g)*(m-g));return Math.abs(w)<.001&&(w=1),this.x=(y-S)/w,this.y=(x-T)/w,this.z=(m-g)/w,this.w=Math.acos((h+_+M-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this.w=Dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this.w=Dt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gd.prototype.isVector4=!0;let nn=gd;class _y extends bs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Gn(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new id(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends _y{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Yg extends Gn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yy extends Gn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xc=class xc{constructor(e,t,r,o,l,c,f,d,h,g,x,m,_,S,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h,g,x,m,_,S,T,y)}set(e,t,r,o,l,c,f,d,h,g,x,m,_,S,T,y){const M=this.elements;return M[0]=e,M[4]=t,M[8]=r,M[12]=o,M[1]=l,M[5]=c,M[9]=f,M[13]=d,M[2]=h,M[6]=g,M[10]=x,M[14]=m,M[3]=_,M[7]=S,M[11]=T,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/$s.setFromMatrixColumn(e,0).length(),l=1/$s.setFromMatrixColumn(e,1).length(),c=1/$s.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),g=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const m=c*g,_=c*x,S=f*g,T=f*x;t[0]=d*g,t[4]=-d*x,t[8]=h,t[1]=_+S*h,t[5]=m-T*h,t[9]=-f*d,t[2]=T-m*h,t[6]=S+_*h,t[10]=c*d}else if(e.order==="YXZ"){const m=d*g,_=d*x,S=h*g,T=h*x;t[0]=m+T*f,t[4]=S*f-_,t[8]=c*h,t[1]=c*x,t[5]=c*g,t[9]=-f,t[2]=_*f-S,t[6]=T+m*f,t[10]=c*d}else if(e.order==="ZXY"){const m=d*g,_=d*x,S=h*g,T=h*x;t[0]=m-T*f,t[4]=-c*x,t[8]=S+_*f,t[1]=_+S*f,t[5]=c*g,t[9]=T-m*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const m=c*g,_=c*x,S=f*g,T=f*x;t[0]=d*g,t[4]=S*h-_,t[8]=m*h+T,t[1]=d*x,t[5]=T*h+m,t[9]=_*h-S,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const m=c*d,_=c*h,S=f*d,T=f*h;t[0]=d*g,t[4]=T-m*x,t[8]=S*x+_,t[1]=x,t[5]=c*g,t[9]=-f*g,t[2]=-h*g,t[6]=_*x+S,t[10]=m-T*x}else if(e.order==="XZY"){const m=c*d,_=c*h,S=f*d,T=f*h;t[0]=d*g,t[4]=-x,t[8]=h*g,t[1]=m*x+T,t[5]=c*g,t[9]=_*x-S,t[2]=S*x-_,t[6]=f*g,t[10]=T*x+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(My,e,Sy)}lookAt(e,t,r){const o=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),Gr.crossVectors(r,di),Gr.lengthSq()===0&&(Math.abs(r.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),Gr.crossVectors(r,di)),Gr.normalize(),Tl.crossVectors(di,Gr),o[0]=Gr.x,o[4]=Tl.x,o[8]=di.x,o[1]=Gr.y,o[5]=Tl.y,o[9]=di.y,o[2]=Gr.z,o[6]=Tl.z,o[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],d=r[8],h=r[12],g=r[1],x=r[5],m=r[9],_=r[13],S=r[2],T=r[6],y=r[10],M=r[14],w=r[3],P=r[7],R=r[11],z=r[15],I=o[0],O=o[4],E=o[8],D=o[12],K=o[1],k=o[5],j=o[9],ce=o[13],re=o[2],W=o[6],te=o[10],G=o[14],N=o[3],F=o[7],$=o[11],U=o[15];return l[0]=c*I+f*K+d*re+h*N,l[4]=c*O+f*k+d*W+h*F,l[8]=c*E+f*j+d*te+h*$,l[12]=c*D+f*ce+d*G+h*U,l[1]=g*I+x*K+m*re+_*N,l[5]=g*O+x*k+m*W+_*F,l[9]=g*E+x*j+m*te+_*$,l[13]=g*D+x*ce+m*G+_*U,l[2]=S*I+T*K+y*re+M*N,l[6]=S*O+T*k+y*W+M*F,l[10]=S*E+T*j+y*te+M*$,l[14]=S*D+T*ce+y*G+M*U,l[3]=w*I+P*K+R*re+z*N,l[7]=w*O+P*k+R*W+z*F,l[11]=w*E+P*j+R*te+z*$,l[15]=w*D+P*ce+R*G+z*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],d=e[9],h=e[13],g=e[2],x=e[6],m=e[10],_=e[14],S=e[3],T=e[7],y=e[11],M=e[15],w=d*_-h*m,P=f*_-h*x,R=f*m-d*x,z=c*_-h*g,I=c*m-d*g,O=c*x-f*g;return t*(T*w-y*P+M*R)-r*(S*w-y*z+M*I)+o*(S*P-T*z+M*O)-l*(S*R-T*I+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],x=e[9],m=e[10],_=e[11],S=e[12],T=e[13],y=e[14],M=e[15],w=t*f-r*c,P=t*d-o*c,R=t*h-l*c,z=r*d-o*f,I=r*h-l*f,O=o*h-l*d,E=g*T-x*S,D=g*y-m*S,K=g*M-_*S,k=x*y-m*T,j=x*M-_*T,ce=m*M-_*y,re=w*ce-P*j+R*k+z*K-I*D+O*E;if(re===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/re;return e[0]=(f*ce-d*j+h*k)*W,e[1]=(o*j-r*ce-l*k)*W,e[2]=(T*O-y*I+M*z)*W,e[3]=(m*I-x*O-_*z)*W,e[4]=(d*K-c*ce-h*D)*W,e[5]=(t*ce-o*K+l*D)*W,e[6]=(y*R-S*O-M*P)*W,e[7]=(g*O-m*R+_*P)*W,e[8]=(c*j-f*K+h*E)*W,e[9]=(r*K-t*j-l*E)*W,e[10]=(S*I-T*R+M*w)*W,e[11]=(x*R-g*I-_*w)*W,e[12]=(f*D-c*k-d*E)*W,e[13]=(t*k-r*D+o*E)*W,e[14]=(T*P-S*z-y*w)*W,e[15]=(g*z-x*P+m*w)*W,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,d=e.z,h=l*c,g=l*f;return this.set(h*c+r,h*f-o*d,h*d+o*f,0,h*f+o*d,g*f+r,g*d-o*c,0,h*d-o*f,g*d+o*c,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,h=l+l,g=c+c,x=f+f,m=l*h,_=l*g,S=l*x,T=c*g,y=c*x,M=f*x,w=d*h,P=d*g,R=d*x,z=r.x,I=r.y,O=r.z;return o[0]=(1-(T+M))*z,o[1]=(_+R)*z,o[2]=(S-P)*z,o[3]=0,o[4]=(_-R)*I,o[5]=(1-(m+M))*I,o[6]=(y+w)*I,o[7]=0,o[8]=(S+P)*O,o[9]=(y-w)*O,o[10]=(1-(m+T))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=$s.set(o[0],o[1],o[2]).length();const f=$s.set(o[4],o[5],o[6]).length(),d=$s.set(o[8],o[9],o[10]).length();l<0&&(c=-c),Fi.copy(this);const h=1/c,g=1/f,x=1/d;return Fi.elements[0]*=h,Fi.elements[1]*=h,Fi.elements[2]*=h,Fi.elements[4]*=g,Fi.elements[5]*=g,Fi.elements[6]*=g,Fi.elements[8]*=x,Fi.elements[9]*=x,Fi.elements[10]*=x,t.setFromRotationMatrix(Fi),r.x=c,r.y=f,r.z=d,this}makePerspective(e,t,r,o,l,c,f=$i,d=!1){const h=this.elements,g=2*l/(t-e),x=2*l/(r-o),m=(t+e)/(t-e),_=(r+o)/(r-o);let S,T;if(d)S=l/(c-l),T=c*l/(c-l);else if(f===$i)S=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(f===dc)S=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=x,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=$i,d=!1){const h=this.elements,g=2/(t-e),x=2/(r-o),m=-(t+e)/(t-e),_=-(r+o)/(r-o);let S,T;if(d)S=1/(c-l),T=c/(c-l);else if(f===$i)S=-2/(c-l),T=-(c+l)/(c-l);else if(f===dc)S=-1/(c-l),T=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=x,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};xc.prototype.isMatrix4=!0;let on=xc;const $s=new Q,Fi=new on,My=new Q(0,0,0),Sy=new Q(1,1,1),Gr=new Q,Tl=new Q,di=new Q,o0=new on,a0=new tr;class ws{constructor(e=0,t=0,r=0,o=ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],d=o[1],h=o[5],g=o[9],x=o[2],m=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,_),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-x,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Dt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,_));break;case"XZY":this._z=Math.asin(-Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,_),this._y=0);break;default:St("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return o0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(o0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return a0.setFromEuler(this),this.setFromQuaternion(a0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ws.DEFAULT_ORDER="XYZ";class Qg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ay=0;const l0=new Q,eo=new tr,pr=new on,bl=new Q,ra=new Q,Ey=new Q,wy=new tr,c0=new Q(1,0,0),u0=new Q(0,1,0),f0=new Q(0,0,1),h0={type:"added"},Ty={type:"removed"},to={type:"childadded",child:null},df={type:"childremoved",child:null};class Zn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const e=new Q,t=new ws,r=new tr,o=new Q(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new on},normalMatrix:{value:new bt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(c0,e)}rotateY(e){return this.rotateOnAxis(u0,e)}rotateZ(e){return this.rotateOnAxis(f0,e)}translateOnAxis(e,t){return l0.copy(e).applyQuaternion(this.quaternion),this.position.add(l0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(c0,e)}translateY(e){return this.translateOnAxis(u0,e)}translateZ(e){return this.translateOnAxis(f0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?bl.copy(e):bl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(ra,bl,this.up):pr.lookAt(bl,ra,this.up),this.quaternion.setFromRotationMatrix(pr),o&&(pr.extractRotation(o.matrixWorld),eo.setFromRotationMatrix(pr),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(h0),to.child=e,this.dispatchEvent(to),to.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ty),df.child=e,this.dispatchEvent(df),df.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(h0),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,Ey),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,wy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,g=d.length;h<g;h++){const x=d[h];l(e.shapes,x)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),g=c(e.images),x=c(e.shapes),m=c(e.skeletons),_=c(e.animations),S=c(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),m.length>0&&(r.skeletons=m),_.length>0&&(r.animations=_),S.length>0&&(r.nodes=S)}return r.object=o,r;function c(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Zn.DEFAULT_UP=new Q(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gi extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const by={type:"move"};class pf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),M=this._getHandJoint(h,T);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],m=g.position.distanceTo(x.position),_=.02,S=.005;h.inputState.pinching&&m>_+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=_-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(by)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Gi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function mf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class zt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Nt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Nt.workingColorSpace){if(e=nd(e,1),t=Dt(t,0,1),r=Dt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=mf(c,l,e+1/3),this.g=mf(c,l,e),this.b=mf(c,l,e-1/3)}return Nt.colorSpaceToWorking(this,o),this}setStyle(e,t=wi){function r(l){l!==void 0&&parseFloat(l)<1&&St("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:St("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);St("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wi){const r=Jg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):St("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wi){return Nt.workingToColorSpace(Hn.copy(this),e),Math.round(Dt(Hn.r*255,0,255))*65536+Math.round(Dt(Hn.g*255,0,255))*256+Math.round(Dt(Hn.b*255,0,255))}getHexString(e=wi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(Hn.copy(this),t);const r=Hn.r,o=Hn.g,l=Hn.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let d,h;const g=(f+c)/2;if(f===c)d=0,h=0;else{const x=c-f;switch(h=g<=.5?x/(c+f):x/(2-c-f),c){case r:d=(o-l)/x+(o<l?6:0);break;case o:d=(l-r)/x+2;break;case l:d=(r-o)/x+4;break}d/=6}return e.h=d,e.s=h,e.l=g,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=wi){Nt.workingToColorSpace(Hn.copy(this),e);const t=Hn.r,r=Hn.g,o=Hn.b;return e!==wi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(Cl);const r=xa(Wr.h,Cl.h,t),o=xa(Wr.s,Cl.s,t),l=xa(Wr.l,Cl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new zt;zt.NAMES=Jg;class yc extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ws,this.environmentIntensity=1,this.environmentRotation=new ws,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Oi=new Q,mr=new Q,gf=new Q,gr=new Q,no=new Q,io=new Q,d0=new Q,vf=new Q,xf=new Q,_f=new Q,yf=new nn,Mf=new nn,Sf=new nn;class Hi{constructor(e=new Q,t=new Q,r=new Q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Oi.subVectors(e,t),o.cross(Oi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Oi.subVectors(o,t),mr.subVectors(r,t),gf.subVectors(e,t);const c=Oi.dot(Oi),f=Oi.dot(mr),d=Oi.dot(gf),h=mr.dot(mr),g=mr.dot(gf),x=c*h-f*f;if(x===0)return l.set(0,0,0),null;const m=1/x,_=(h*d-f*g)*m,S=(c*g-f*d)*m;return l.set(1-_-S,S,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(e,t,r,o,l,c,f,d){return this.getBarycoord(e,t,r,o,gr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,gr.x),d.addScaledVector(c,gr.y),d.addScaledVector(f,gr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,c){return yf.setScalar(0),Mf.setScalar(0),Sf.setScalar(0),yf.fromBufferAttribute(e,t),Mf.fromBufferAttribute(e,r),Sf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(yf,l.x),c.addScaledVector(Mf,l.y),c.addScaledVector(Sf,l.z),c}static isFrontFacing(e,t,r,o){return Oi.subVectors(r,t),mr.subVectors(e,t),Oi.cross(mr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Oi.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Hi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;no.subVectors(o,r),io.subVectors(l,r),vf.subVectors(e,r);const d=no.dot(vf),h=io.dot(vf);if(d<=0&&h<=0)return t.copy(r);xf.subVectors(e,o);const g=no.dot(xf),x=io.dot(xf);if(g>=0&&x<=g)return t.copy(o);const m=d*x-g*h;if(m<=0&&d>=0&&g<=0)return c=d/(d-g),t.copy(r).addScaledVector(no,c);_f.subVectors(e,l);const _=no.dot(_f),S=io.dot(_f);if(S>=0&&_<=S)return t.copy(l);const T=_*h-d*S;if(T<=0&&h>=0&&S<=0)return f=h/(h-S),t.copy(r).addScaledVector(io,f);const y=g*S-_*x;if(y<=0&&x-g>=0&&_-S>=0)return d0.subVectors(l,o),f=(x-g)/(x-g+(_-S)),t.copy(o).addScaledVector(d0,f);const M=1/(y+T+m);return c=T*M,f=m*M,t.copy(r).addScaledVector(no,c).addScaledVector(io,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Sa{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ki):ki.fromBufferAttribute(l,c),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Rl.copy(r.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),Pl.subVectors(this.max,sa),ro.subVectors(e.a,sa),so.subVectors(e.b,sa),oo.subVectors(e.c,sa),Xr.subVectors(so,ro),jr.subVectors(oo,so),ds.subVectors(ro,oo);let t=[0,-Xr.z,Xr.y,0,-jr.z,jr.y,0,-ds.z,ds.y,Xr.z,0,-Xr.x,jr.z,0,-jr.x,ds.z,0,-ds.x,-Xr.y,Xr.x,0,-jr.y,jr.x,0,-ds.y,ds.x,0];return!Af(t,ro,so,oo,Pl)||(t=[1,0,0,0,1,0,0,0,1],!Af(t,ro,so,oo,Pl))?!1:(Ll.crossVectors(Xr,jr),t=[Ll.x,Ll.y,Ll.z],Af(t,ro,so,oo,Pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vr=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ki=new Q,Rl=new Sa,ro=new Q,so=new Q,oo=new Q,Xr=new Q,jr=new Q,ds=new Q,sa=new Q,Pl=new Q,Ll=new Q,ps=new Q;function Af(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){ps.fromArray(s,l);const f=o.x*Math.abs(ps.x)+o.y*Math.abs(ps.y)+o.z*Math.abs(ps.z),d=e.dot(ps),h=t.dot(ps),g=r.dot(ps);if(Math.max(-Math.max(d,h,g),Math.min(d,h,g))>f)return!1}return!0}const hn=new Q,Il=new Ut;let Cy=0;class kt extends bs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Jm,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Il.fromBufferAttribute(this,t),Il.applyMatrix3(e),this.setXY(t,Il.x,Il.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ho(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Qn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ho(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ho(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ho(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ho(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array),o=Qn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array),o=Qn(o,this.array),l=Qn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Zg extends kt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class $g extends kt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Dn extends kt{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Ry=new Sa,oa=new Q,Ef=new Q;class Ao{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Ry.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const t=oa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(oa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ef.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(Ef)),this.expandByPoint(oa.copy(e.center).sub(Ef))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Py=0;const Ei=new on,wf=new Zn,ao=new Q,pi=new Sa,aa=new Sa,bn=new Q;class ln extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y_(e)?$g:Zg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new bt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,r){return Ei.makeTranslation(e,t,r),this.applyMatrix4(Ei),this}scale(e,t,r){return Ei.makeScale(e,t,r),this.applyMatrix4(Ei),this}lookAt(e){return wf.lookAt(e),wf.updateMatrix(),this.applyMatrix4(wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Dn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&St("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];pi.setFromBufferAttribute(l),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];aa.setFromBufferAttribute(f),this.morphTargetsRelative?(bn.addVectors(pi.min,aa.min),pi.expandByPoint(bn),bn.addVectors(pi.max,aa.max),pi.expandByPoint(bn)):(pi.expandByPoint(aa.min),pi.expandByPoint(aa.max))}pi.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)bn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(bn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)bn.fromBufferAttribute(f,h),d&&(ao.fromBufferAttribute(e,h),bn.add(ao)),o=Math.max(o,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let E=0;E<r.count;E++)f[E]=new Q,d[E]=new Q;const h=new Q,g=new Q,x=new Q,m=new Ut,_=new Ut,S=new Ut,T=new Q,y=new Q;function M(E,D,K){h.fromBufferAttribute(r,E),g.fromBufferAttribute(r,D),x.fromBufferAttribute(r,K),m.fromBufferAttribute(l,E),_.fromBufferAttribute(l,D),S.fromBufferAttribute(l,K),g.sub(h),x.sub(h),_.sub(m),S.sub(m);const k=1/(_.x*S.y-S.x*_.y);isFinite(k)&&(T.copy(g).multiplyScalar(S.y).addScaledVector(x,-_.y).multiplyScalar(k),y.copy(x).multiplyScalar(_.x).addScaledVector(g,-S.x).multiplyScalar(k),f[E].add(T),f[D].add(T),f[K].add(T),d[E].add(y),d[D].add(y),d[K].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,D=w.length;E<D;++E){const K=w[E],k=K.start,j=K.count;for(let ce=k,re=k+j;ce<re;ce+=3)M(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const P=new Q,R=new Q,z=new Q,I=new Q;function O(E){z.fromBufferAttribute(o,E),I.copy(z);const D=f[E];P.copy(D),P.sub(z.multiplyScalar(z.dot(D))).normalize(),R.crossVectors(I,D);const k=R.dot(d[E])<0?-1:1;c.setXYZW(E,P.x,P.y,P.z,k)}for(let E=0,D=w.length;E<D;++E){const K=w[E],k=K.start,j=K.count;for(let ce=k,re=k+j;ce<re;ce+=3)O(e.getX(ce+0)),O(e.getX(ce+1)),O(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,_=r.count;m<_;m++)r.setXYZ(m,0,0,0);const o=new Q,l=new Q,c=new Q,f=new Q,d=new Q,h=new Q,g=new Q,x=new Q;if(e)for(let m=0,_=e.count;m<_;m+=3){const S=e.getX(m+0),T=e.getX(m+1),y=e.getX(m+2);o.fromBufferAttribute(t,S),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,y),g.subVectors(c,l),x.subVectors(o,l),g.cross(x),f.fromBufferAttribute(r,S),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,y),f.add(g),d.add(g),h.add(g),r.setXYZ(S,f.x,f.y,f.z),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,_=t.count;m<_;m+=3)o.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,l),x.subVectors(o,l),g.cross(x),r.setXYZ(m+0,g.x,g.y,g.z),r.setXYZ(m+1,g.x,g.y,g.z),r.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(f,d){const h=f.array,g=f.itemSize,x=f.normalized,m=new h.constructor(d.length*g);let _=0,S=0;for(let T=0,y=d.length;T<y;T++){f.isInterleavedBufferAttribute?_=d[T]*f.data.stride+f.offset:_=d[T]*g;for(let M=0;M<g;M++)m[S++]=h[_++]}return new kt(m,g,x)}if(this.index===null)return St("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let g=0,x=h.length;g<x;g++){const m=h[g],_=e(m,r);d.push(_)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],g=[];for(let x=0,m=h.length;x<m;x++){const _=h[x];g.push(_.toJSON(e.data))}g.length>0&&(o[d]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(t))}const l=e.morphAttributes;for(const h in l){const g=[],x=l[h];for(let m=0,_=x.length;m<_;m++)g.push(x[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,g=c.length;h<g;h++){const x=c[h];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Ly=0;class Eo extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=So(),this.name="",this.type="Material",this.blending=go,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zf,this.blendDst=$f,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){St(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){St(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(r.blending=this.blending),this.side!==$r&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Zf&&(r.blendSrc=this.blendSrc),this.blendDst!==$f&&(r.blendDst=this.blendDst),this.blendEquation!==_s&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==xo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xr=new Q,Tf=new Q,Dl=new Q,Kr=new Q,bf=new Q,Ul=new Q,Cf=new Q;class rd{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Tf.copy(e).add(t).multiplyScalar(.5),Dl.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(Tf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Dl),f=Kr.dot(this.direction),d=-Kr.dot(Dl),h=Kr.lengthSq(),g=Math.abs(1-c*c);let x,m,_,S;if(g>0)if(x=c*d-f,m=c*f-d,S=l*g,x>=0)if(m>=-S)if(m<=S){const T=1/g;x*=T,m*=T,_=x*(x+c*m+2*f)+m*(c*x+m+2*d)+h}else m=l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;else m=-l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;else m<=-S?(x=Math.max(0,-(-c*l+f)),m=x>0?-l:Math.min(Math.max(-l,-d),l),_=-x*x+m*(m+2*d)+h):m<=S?(x=0,m=Math.min(Math.max(-l,-d),l),_=m*(m+2*d)+h):(x=Math.max(0,-(c*l+f)),m=x>0?l:Math.min(Math.max(-l,-d),l),_=-x*x+m*(m+2*d)+h);else m=c>0?-l:l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Tf).addScaledVector(Dl,m),_}intersectSphere(e,t){xr.subVectors(e.center,this.origin);const r=xr.dot(this.direction),o=xr.dot(xr)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,d;const h=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,m=this.origin;return h>=0?(r=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(r=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),g>=0?(l=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(l=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),x>=0?(f=(e.min.z-m.z)*x,d=(e.max.z-m.z)*x):(f=(e.max.z-m.z)*x,d=(e.min.z-m.z)*x),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,r,o,l){bf.subVectors(t,e),Ul.subVectors(r,e),Cf.crossVectors(bf,Ul);let c=this.direction.dot(Cf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Kr.subVectors(this.origin,e);const d=f*this.direction.dot(Ul.crossVectors(Kr,Ul));if(d<0)return null;const h=f*this.direction.dot(bf.cross(Kr));if(h<0||d+h>c)return null;const g=-f*Kr.dot(Cf);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ev extends Eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ws,this.combine=Ig,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const p0=new on,ms=new rd,Nl=new Ao,m0=new Q,Fl=new Q,Ol=new Q,kl=new Q,Rf=new Q,Bl=new Q,g0=new Q,zl=new Q;class Un extends Zn{constructor(e=new ln,t=new ev){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Bl.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const g=f[d],x=l[d];g!==0&&(Rf.fromBufferAttribute(x,e),c?Bl.addScaledVector(Rf,g):Bl.addScaledVector(Rf.sub(t),g))}t.add(Bl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(l),ms.copy(e.ray).recast(e.near),!(Nl.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Nl,m0)===null||ms.origin.distanceToSquared(m0)>(e.far-e.near)**2))&&(p0.copy(l).invert(),ms.copy(e.ray).applyMatrix4(p0),!(r.boundingBox!==null&&ms.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,g=l.attributes.uv1,x=l.attributes.normal,m=l.groups,_=l.drawRange;if(f!==null)if(Array.isArray(c))for(let S=0,T=m.length;S<T;S++){const y=m[S],M=c[y.materialIndex],w=Math.max(y.start,_.start),P=Math.min(f.count,Math.min(y.start+y.count,_.start+_.count));for(let R=w,z=P;R<z;R+=3){const I=f.getX(R),O=f.getX(R+1),E=f.getX(R+2);o=Hl(this,M,e,r,h,g,x,I,O,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,_.start),T=Math.min(f.count,_.start+_.count);for(let y=S,M=T;y<M;y+=3){const w=f.getX(y),P=f.getX(y+1),R=f.getX(y+2);o=Hl(this,c,e,r,h,g,x,w,P,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let S=0,T=m.length;S<T;S++){const y=m[S],M=c[y.materialIndex],w=Math.max(y.start,_.start),P=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let R=w,z=P;R<z;R+=3){const I=R,O=R+1,E=R+2;o=Hl(this,M,e,r,h,g,x,I,O,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,_.start),T=Math.min(d.count,_.start+_.count);for(let y=S,M=T;y<M;y+=3){const w=y,P=y+1,R=y+2;o=Hl(this,c,e,r,h,g,x,w,P,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Iy(s,e,t,r,o,l,c,f){let d;if(e.side===oi?d=r.intersectTriangle(c,l,o,!0,f):d=r.intersectTriangle(o,l,c,e.side===$r,f),d===null)return null;zl.copy(f),zl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(zl);return h<t.near||h>t.far?null:{distance:h,point:zl.clone(),object:s}}function Hl(s,e,t,r,o,l,c,f,d,h){s.getVertexPosition(f,Fl),s.getVertexPosition(d,Ol),s.getVertexPosition(h,kl);const g=Iy(s,e,t,r,Fl,Ol,kl,g0);if(g){const x=new Q;Hi.getBarycoord(g0,Fl,Ol,kl,x),o&&(g.uv=Hi.getInterpolatedAttribute(o,f,d,h,x,new Ut)),l&&(g.uv1=Hi.getInterpolatedAttribute(l,f,d,h,x,new Ut)),c&&(g.normal=Hi.getInterpolatedAttribute(c,f,d,h,x,new Q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const m={a:f,b:d,c:h,normal:new Q,materialIndex:0};Hi.getNormal(Fl,Ol,kl,m.normal),g.face=m,g.barycoord=x}return g}class tv extends Gn{constructor(e=null,t=1,r=1,o,l,c,f,d,h=gn,g=gn,x,m){super(null,c,f,d,h,g,o,l,x,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pf=new Q,Dy=new Q,Uy=new bt;class xs{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Pf.subVectors(r,t).cross(Dy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Pf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Uy.getNormalMatrix(e),o=this.coplanarPoint(Pf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Ao,Ny=new Ut(.5,.5),Vl=new Q;class nv{constructor(e=new xs,t=new xs,r=new xs,o=new xs,l=new xs,c=new xs){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=$i,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],h=l[3],g=l[4],x=l[5],m=l[6],_=l[7],S=l[8],T=l[9],y=l[10],M=l[11],w=l[12],P=l[13],R=l[14],z=l[15];if(o[0].setComponents(h-c,_-g,M-S,z-w).normalize(),o[1].setComponents(h+c,_+g,M+S,z+w).normalize(),o[2].setComponents(h+f,_+x,M+T,z+P).normalize(),o[3].setComponents(h-f,_-x,M-T,z-P).normalize(),r)o[4].setComponents(d,m,y,R).normalize(),o[5].setComponents(h-d,_-m,M-y,z-R).normalize();else if(o[4].setComponents(h-d,_-m,M-y,z-R).normalize(),t===$i)o[5].setComponents(h+d,_+m,M+y,z+R).normalize();else if(t===dc)o[5].setComponents(d,m,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);const t=Ny.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Vl.x=o.normal.x>0?e.max.x:e.min.x,Vl.y=o.normal.y>0?e.max.y:e.min.y,Vl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iv extends Eo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mc=new Q,gc=new Q,v0=new on,la=new rd,Gl=new Ao,Lf=new Q,x0=new Q;class rv extends Zn{constructor(e=new ln,t=new iv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)mc.fromBufferAttribute(t,o-1),gc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=mc.distanceTo(gc);e.setAttribute("lineDistance",new Dn(r,1))}else St("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gl.copy(r.boundingSphere),Gl.applyMatrix4(o),Gl.radius+=l,e.ray.intersectsSphere(Gl)===!1)return;v0.copy(o).invert(),la.copy(e.ray).applyMatrix4(v0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,g=r.index,m=r.attributes.position;if(g!==null){const _=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let T=_,y=S-1;T<y;T+=h){const M=g.getX(T),w=g.getX(T+1),P=Wl(this,e,la,d,M,w,T);P&&t.push(P)}if(this.isLineLoop){const T=g.getX(S-1),y=g.getX(_),M=Wl(this,e,la,d,T,y,S-1);M&&t.push(M)}}else{const _=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let T=_,y=S-1;T<y;T+=h){const M=Wl(this,e,la,d,T,T+1,T);M&&t.push(M)}if(this.isLineLoop){const T=Wl(this,e,la,d,S-1,_,S-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Wl(s,e,t,r,o,l,c){const f=s.geometry.attributes.position;if(mc.fromBufferAttribute(f,o),gc.fromBufferAttribute(f,l),t.distanceSqToSegment(mc,gc,Lf,x0)>r)return;Lf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Lf);if(!(h<e.near||h>e.far))return{distance:h,point:x0.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const _0=new Q,y0=new Q;class Fy extends rv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)_0.fromBufferAttribute(t,o),y0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+_0.distanceTo(y0);e.setAttribute("lineDistance",new Dn(r,1))}else St("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bh extends Eo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const M0=new on,zh=new rd,Xl=new Ao,jl=new Q;class Hh extends Zn{constructor(e=new ln,t=new Bh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xl.copy(r.boundingSphere),Xl.applyMatrix4(o),Xl.radius+=l,e.ray.intersectsSphere(Xl)===!1)return;M0.copy(o).invert(),zh.copy(e.ray).applyMatrix4(M0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=r.index,x=r.attributes.position;if(h!==null){const m=Math.max(0,c.start),_=Math.min(h.count,c.start+c.count);for(let S=m,T=_;S<T;S++){const y=h.getX(S);jl.fromBufferAttribute(x,y),S0(jl,y,d,o,e,t,this)}}else{const m=Math.max(0,c.start),_=Math.min(x.count,c.start+c.count);for(let S=m,T=_;S<T;S++)jl.fromBufferAttribute(x,S),S0(jl,S,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function S0(s,e,t,r,o,l,c){const f=zh.distanceSqToPoint(s);if(f<t){const d=new Q;zh.closestPointToPoint(s,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class sv extends Gn{constructor(e=[],t=As,r,o,l,c,f,d,h,g){super(e,t,r,o,l,c,f,d,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Oy extends Gn{constructor(e,t,r,o,l,c,f,d,h){super(e,t,r,o,l,c,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yo extends Gn{constructor(e,t,r=ir,o,l,c,f=gn,d=gn,h,g=Ar,x=1){if(g!==Ar&&g!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:x};super(m,o,l,c,f,d,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new id(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ky extends yo{constructor(e,t=ir,r=As,o,l,c=gn,f=gn,d,h=Ar){const g={width:e,height:e,depth:1},x=[g,g,g,g,g,g];super(e,e,t,r,o,l,c,f,d,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ov extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Aa extends ln{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],g=[],x=[];let m=0,_=0;S("z","y","x",-1,-1,r,t,e,c,l,0),S("z","y","x",1,-1,r,t,-e,c,l,1),S("x","z","y",1,1,e,r,t,o,c,2),S("x","z","y",1,-1,e,r,-t,o,c,3),S("x","y","z",1,-1,e,t,r,o,l,4),S("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Dn(h,3)),this.setAttribute("normal",new Dn(g,3)),this.setAttribute("uv",new Dn(x,2));function S(T,y,M,w,P,R,z,I,O,E,D){const K=R/O,k=z/E,j=R/2,ce=z/2,re=I/2,W=O+1,te=E+1;let G=0,N=0;const F=new Q;for(let $=0;$<te;$++){const U=$*k-ce;for(let V=0;V<W;V++){const Ae=V*K-j;F[T]=Ae*w,F[y]=U*P,F[M]=re,h.push(F.x,F.y,F.z),F[T]=0,F[y]=0,F[M]=I>0?1:-1,g.push(F.x,F.y,F.z),x.push(V/O),x.push(1-$/E),G+=1}}for(let $=0;$<E;$++)for(let U=0;U<O;U++){const V=m+U+W*$,Ae=m+U+W*($+1),Se=m+(U+1)+W*($+1),de=m+(U+1)+W*$;d.push(V,Ae,de),d.push(Ae,Se,de),N+=6}f.addGroup(_,N,D),_+=N,m+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class sd extends ln{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],c=[];f(o),h(r),g(),this.setAttribute("position",new Dn(l,3)),this.setAttribute("normal",new Dn(l.slice(),3)),this.setAttribute("uv",new Dn(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(w){const P=new Q,R=new Q,z=new Q;for(let I=0;I<t.length;I+=3)_(t[I+0],P),_(t[I+1],R),_(t[I+2],z),d(P,R,z,w)}function d(w,P,R,z){const I=z+1,O=[];for(let E=0;E<=I;E++){O[E]=[];const D=w.clone().lerp(R,E/I),K=P.clone().lerp(R,E/I),k=I-E;for(let j=0;j<=k;j++)j===0&&E===I?O[E][j]=D:O[E][j]=D.clone().lerp(K,j/k)}for(let E=0;E<I;E++)for(let D=0;D<2*(I-E)-1;D++){const K=Math.floor(D/2);D%2===0?(m(O[E][K+1]),m(O[E+1][K]),m(O[E][K])):(m(O[E][K+1]),m(O[E+1][K+1]),m(O[E+1][K]))}}function h(w){const P=new Q;for(let R=0;R<l.length;R+=3)P.x=l[R+0],P.y=l[R+1],P.z=l[R+2],P.normalize().multiplyScalar(w),l[R+0]=P.x,l[R+1]=P.y,l[R+2]=P.z}function g(){const w=new Q;for(let P=0;P<l.length;P+=3){w.x=l[P+0],w.y=l[P+1],w.z=l[P+2];const R=y(w)/2/Math.PI+.5,z=M(w)/Math.PI+.5;c.push(R,1-z)}S(),x()}function x(){for(let w=0;w<c.length;w+=6){const P=c[w+0],R=c[w+2],z=c[w+4],I=Math.max(P,R,z),O=Math.min(P,R,z);I>.9&&O<.1&&(P<.2&&(c[w+0]+=1),R<.2&&(c[w+2]+=1),z<.2&&(c[w+4]+=1))}}function m(w){l.push(w.x,w.y,w.z)}function _(w,P){const R=w*3;P.x=e[R+0],P.y=e[R+1],P.z=e[R+2]}function S(){const w=new Q,P=new Q,R=new Q,z=new Q,I=new Ut,O=new Ut,E=new Ut;for(let D=0,K=0;D<l.length;D+=9,K+=6){w.set(l[D+0],l[D+1],l[D+2]),P.set(l[D+3],l[D+4],l[D+5]),R.set(l[D+6],l[D+7],l[D+8]),I.set(c[K+0],c[K+1]),O.set(c[K+2],c[K+3]),E.set(c[K+4],c[K+5]),z.copy(w).add(P).add(R).divideScalar(3);const k=y(z);T(I,K+0,w,k),T(O,K+2,P,k),T(E,K+4,R,k)}}function T(w,P,R,z){z<0&&w.x===1&&(c[P]=w.x-1),R.x===0&&R.z===0&&(c[P]=z/2/Math.PI+.5)}function y(w){return Math.atan2(w.z,-w.x)}function M(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sd(e.vertices,e.indices,e.radius,e.detail)}}class By{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){St("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,d=l-1,h;for(;f<=d;)if(o=Math.floor(f+(d-f)/2),h=r[o]-c,h<0)f=o+1;else if(h>0)d=o-1;else{d=o;break}if(o=d,r[o]===c)return o/(l-1);const g=r[o],m=r[o+1]-g,_=(c-g)/m;return(o+_)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),d=t||(c.isVector2?new Ut:new Q);return d.copy(f).sub(c).normalize(),d}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new Q,o=[],l=[],c=[],f=new Q,d=new on;for(let _=0;_<=e;_++){const S=_/e;o[_]=this.getTangentAt(S,new Q)}l[0]=new Q,c[0]=new Q;let h=Number.MAX_VALUE;const g=Math.abs(o[0].x),x=Math.abs(o[0].y),m=Math.abs(o[0].z);g<=h&&(h=g,r.set(1,0,0)),x<=h&&(h=x,r.set(0,1,0)),m<=h&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let _=1;_<=e;_++){if(l[_]=l[_-1].clone(),c[_]=c[_-1].clone(),f.crossVectors(o[_-1],o[_]),f.length()>Number.EPSILON){f.normalize();const S=Math.acos(Dt(o[_-1].dot(o[_]),-1,1));l[_].applyMatrix4(d.makeRotationAxis(f,S))}c[_].crossVectors(o[_],l[_])}if(t===!0){let _=Math.acos(Dt(l[0].dot(l[e]),-1,1));_/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(_=-_);for(let S=1;S<=e;S++)l[S].applyMatrix4(d.makeRotationAxis(o[S],_*S)),c[S].crossVectors(o[S],l[S])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function od(){let s=0,e=0,t=0,r=0;function o(l,c,f,d){s=l,e=f,t=-3*l+3*c-2*f-d,r=2*l-2*c+f+d}return{initCatmullRom:function(l,c,f,d,h){o(c,f,h*(f-l),h*(d-c))},initNonuniformCatmullRom:function(l,c,f,d,h,g,x){let m=(c-l)/h-(f-l)/(h+g)+(f-c)/g,_=(f-c)/g-(d-c)/(g+x)+(d-f)/x;m*=g,_*=g,o(c,f,m,_)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const A0=new Q,E0=new Q,If=new od,Df=new od,Uf=new od;class zy extends By{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new Q){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),d=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:d===0&&f===l-1&&(f=l-2,d=1);let h,g;this.closed||f>0?h=o[(f-1)%l]:(E0.subVectors(o[0],o[1]).add(o[0]),h=E0);const x=o[f%l],m=o[(f+1)%l];if(this.closed||f+2<l?g=o[(f+2)%l]:(A0.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=A0),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let S=Math.pow(h.distanceToSquared(x),_),T=Math.pow(x.distanceToSquared(m),_),y=Math.pow(m.distanceToSquared(g),_);T<1e-4&&(T=1),S<1e-4&&(S=T),y<1e-4&&(y=T),If.initNonuniformCatmullRom(h.x,x.x,m.x,g.x,S,T,y),Df.initNonuniformCatmullRom(h.y,x.y,m.y,g.y,S,T,y),Uf.initNonuniformCatmullRom(h.z,x.z,m.z,g.z,S,T,y)}else this.curveType==="catmullrom"&&(If.initCatmullRom(h.x,x.x,m.x,g.x,this.tension),Df.initCatmullRom(h.y,x.y,m.y,g.y,this.tension),Uf.initCatmullRom(h.z,x.z,m.z,g.z,this.tension));return r.set(If.calc(d),Df.calc(d),Uf.calc(d)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Q().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class ad extends sd{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ad(e.radius,e.detail)}}class Mc extends ln{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,g=d+1,x=e/f,m=t/d,_=[],S=[],T=[],y=[];for(let M=0;M<g;M++){const w=M*m-c;for(let P=0;P<h;P++){const R=P*x-l;S.push(R,-w,0),T.push(0,0,1),y.push(P/f),y.push(1-M/d)}}for(let M=0;M<d;M++)for(let w=0;w<f;w++){const P=w+h*M,R=w+h*(M+1),z=w+1+h*(M+1),I=w+1+h*M;_.push(P,R,I),_.push(R,z,I)}this.setIndex(_),this.setAttribute("position",new Dn(S,3)),this.setAttribute("normal",new Dn(T,3)),this.setAttribute("uv",new Dn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.width,e.height,e.widthSegments,e.heightSegments)}}class vc extends ln{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(c+f,Math.PI);let h=0;const g=[],x=new Q,m=new Q,_=[],S=[],T=[],y=[];for(let M=0;M<=r;M++){const w=[],P=M/r;let R=0;M===0&&c===0?R=.5/t:M===r&&d===Math.PI&&(R=-.5/t);for(let z=0;z<=t;z++){const I=z/t;x.x=-e*Math.cos(o+I*l)*Math.sin(c+P*f),x.y=e*Math.cos(c+P*f),x.z=e*Math.sin(o+I*l)*Math.sin(c+P*f),S.push(x.x,x.y,x.z),m.copy(x).normalize(),T.push(m.x,m.y,m.z),y.push(I+R,1-P),w.push(h++)}g.push(w)}for(let M=0;M<r;M++)for(let w=0;w<t;w++){const P=g[M][w+1],R=g[M][w],z=g[M+1][w],I=g[M+1][w+1];(M!==0||c>0)&&_.push(P,R,I),(M!==r-1||d<Math.PI)&&_.push(R,z,I)}this.setIndex(_),this.setAttribute("position",new Dn(S,3)),this.setAttribute("normal",new Dn(T,3)),this.setAttribute("uv",new Dn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Mo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(w0(o))o.isRenderTargetTexture?(St("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(w0(o[0])){const l=[];for(let c=0,f=o.length;c<f;c++)l[c]=o[c].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Jn(s){const e={};for(let t=0;t<s.length;t++){const r=Mo(s[t]);for(const o in r)e[o]=r[o]}return e}function w0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Hy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function av(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const Vy={clone:Mo,merge:Jn};var Gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends Eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gy,this.fragmentShader=Wy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mo(e.uniforms),this.uniformsGroups=Hy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Xy extends mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jy extends Eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ky extends Eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kl=new Q,ql=new tr,Qi=new Q;class lv extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kl,ql,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kl,ql,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Kl,ql,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kl,ql,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qr=new Q,T0=new Ut,b0=new Ut;class si extends lv{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,t){return this.getViewBounds(e,T0,b0),t.subVectors(b0,T0)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(va*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ld extends lv{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lo=-90,co=1;class qy extends Zn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new si(lo,co,e,t);o.layers=this.layers,this.add(o);const l=new si(lo,co,e,t);l.layers=this.layers,this.add(l);const c=new si(lo,co,e,t);c.layers=this.layers,this.add(c);const f=new si(lo,co,e,t);f.layers=this.layers,this.add(f);const d=new si(lo,co,e,t);d.layers=this.layers,this.add(d);const h=new si(lo,co,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,d]=t;for(const h of t)this.remove(h);if(e===$i)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===dc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,g]=this.children,x=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(x,m,_),e.xr.enabled=S,r.texture.needsPMREMUpdate=!0}}class Yy extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const vd=class vd{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};vd.prototype.isMatrix2=!0;let C0=vd;function R0(s,e,t,r){const o=Qy(r);switch(t){case Xg:return s*e;case Kg:return s*e/o.components*o.byteLength;case Jh:return s*e/o.components*o.byteLength;case Es:return s*e*2/o.components*o.byteLength;case Zh:return s*e*2/o.components*o.byteLength;case jg:return s*e*3/o.components*o.byteLength;case bi:return s*e*4/o.components*o.byteLength;case $h:return s*e*4/o.components*o.byteLength;case tc:case nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ic:case rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ch:case fh:return Math.max(s,16)*Math.max(e,8)/4;case lh:case uh:return Math.max(s,8)*Math.max(e,8)/2;case hh:case dh:case mh:case gh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ph:case cc:case vh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case yh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case wh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Th:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ih:case Dh:case Uh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Nh:case Fh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case uc:case Oh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qy(s){switch(s){case Ti:case Hg:return{byteLength:1,components:1};case _a:case Vg:case Sr:return{byteLength:2,components:1};case Yh:case Qh:return{byteLength:2,components:4};case ir:case qh:case Vi:return{byteLength:4,components:1};case Gg:case Wg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kh}}));typeof window<"u"&&(window.__THREE__?St("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cv(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Jy(s){const e=new WeakMap;function t(f,d){const h=f.array,g=f.usage,x=h.byteLength,m=s.createBuffer();s.bindBuffer(d,m),s.bufferData(d,h,g),f.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,d,h){const g=d.array,x=d.updateRanges;if(s.bindBuffer(h,f),x.length===0)s.bufferSubData(h,0,g);else{x.sort((_,S)=>_.start-S.start);let m=0;for(let _=1;_<x.length;_++){const S=x[m],T=x[_];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++m,x[m]=T)}x.length=m+1;for(let _=0,S=x.length;_<S;_++){const T=x[_];s.bufferSubData(h,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:c}}var Zy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$y=`#ifdef USE_ALPHAHASH
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
#endif`,oM=`#ifdef USE_BATCHING
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
#endif`,aM=`#ifdef USE_BATCHING
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
} // validated`,fM=`#ifdef USE_IRIDESCENCE
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
#endif`,hM=`#ifdef USE_BUMPMAP
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
#endif`,vM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
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
#endif`,MM=`#define PI 3.141592653589793
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
} // validated`,SM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,AM=`vec3 transformedNormal = objectNormal;
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
#endif`,EM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CM="gl_FragColor = linearToOutputTexel( gl_FragColor );",RM=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,DM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BM=`#ifdef USE_GRADIENTMAP
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
}`,zM=`#ifdef USE_LIGHTMAP
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YM=`PhysicalMaterial material;
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
#endif`,QM=`uniform sampler2D dfgLUT;
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
}`,JM=`
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
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
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
#endif`,$M=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,tS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lS=`#if defined( USE_POINTS_UV )
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
#endif`,cS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pS=`#ifdef USE_MORPHTARGETS
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
#endif`,mS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MS=`#ifdef USE_NORMALMAP
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
#endif`,SS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ES=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,US=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,OS=`float getShadowMask() {
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
}`,kS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BS=`#ifdef USE_SKINNING
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
#endif`,zS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HS=`#ifdef USE_SKINNING
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
#endif`,VS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jS=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#ifdef USE_TRANSMISSION
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
#endif`,qS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$S=`uniform sampler2D t2D;
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`#include <common>
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
}`,s1=`#if DEPTH_PACKING == 3200
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
}`,o1=`#define DISTANCE
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
}`,a1=`#define DISTANCE
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
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`uniform float scale;
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
}`,f1=`uniform vec3 diffuse;
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
}`,h1=`#include <common>
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
}`,d1=`uniform vec3 diffuse;
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
}`,p1=`#define LAMBERT
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
}`,m1=`#define LAMBERT
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
}`,g1=`#define MATCAP
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
}`,v1=`#define MATCAP
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
}`,x1=`#define NORMAL
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
}`,_1=`#define NORMAL
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
}`,y1=`#define PHONG
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
}`,M1=`#define PHONG
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
}`,S1=`#define STANDARD
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
}`,A1=`#define STANDARD
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
}`,E1=`#define TOON
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
}`,w1=`#define TOON
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
}`,T1=`uniform float size;
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
}`,b1=`uniform vec3 diffuse;
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
}`,C1=`#include <common>
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
}`,R1=`uniform vec3 color;
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
}`,P1=`uniform float rotation;
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
}`,L1=`uniform vec3 diffuse;
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
}`,Pt={alphahash_fragment:Zy,alphahash_pars_fragment:$y,alphamap_fragment:eM,alphamap_pars_fragment:tM,alphatest_fragment:nM,alphatest_pars_fragment:iM,aomap_fragment:rM,aomap_pars_fragment:sM,batching_pars_vertex:oM,batching_vertex:aM,begin_vertex:lM,beginnormal_vertex:cM,bsdfs:uM,iridescence_fragment:fM,bumpmap_pars_fragment:hM,clipping_planes_fragment:dM,clipping_planes_pars_fragment:pM,clipping_planes_pars_vertex:mM,clipping_planes_vertex:gM,color_fragment:vM,color_pars_fragment:xM,color_pars_vertex:_M,color_vertex:yM,common:MM,cube_uv_reflection_fragment:SM,defaultnormal_vertex:AM,displacementmap_pars_vertex:EM,displacementmap_vertex:wM,emissivemap_fragment:TM,emissivemap_pars_fragment:bM,colorspace_fragment:CM,colorspace_pars_fragment:RM,envmap_fragment:PM,envmap_common_pars_fragment:LM,envmap_pars_fragment:IM,envmap_pars_vertex:DM,envmap_physical_pars_fragment:WM,envmap_vertex:UM,fog_vertex:NM,fog_pars_vertex:FM,fog_fragment:OM,fog_pars_fragment:kM,gradientmap_pars_fragment:BM,lightmap_pars_fragment:zM,lights_lambert_fragment:HM,lights_lambert_pars_fragment:VM,lights_pars_begin:GM,lights_toon_fragment:XM,lights_toon_pars_fragment:jM,lights_phong_fragment:KM,lights_phong_pars_fragment:qM,lights_physical_fragment:YM,lights_physical_pars_fragment:QM,lights_fragment_begin:JM,lights_fragment_maps:ZM,lights_fragment_end:$M,lightprobes_pars_fragment:eS,logdepthbuf_fragment:tS,logdepthbuf_pars_fragment:nS,logdepthbuf_pars_vertex:iS,logdepthbuf_vertex:rS,map_fragment:sS,map_pars_fragment:oS,map_particle_fragment:aS,map_particle_pars_fragment:lS,metalnessmap_fragment:cS,metalnessmap_pars_fragment:uS,morphinstance_vertex:fS,morphcolor_vertex:hS,morphnormal_vertex:dS,morphtarget_pars_vertex:pS,morphtarget_vertex:mS,normal_fragment_begin:gS,normal_fragment_maps:vS,normal_pars_fragment:xS,normal_pars_vertex:_S,normal_vertex:yS,normalmap_pars_fragment:MS,clearcoat_normal_fragment_begin:SS,clearcoat_normal_fragment_maps:AS,clearcoat_pars_fragment:ES,iridescence_pars_fragment:wS,opaque_fragment:TS,packing:bS,premultiplied_alpha_fragment:CS,project_vertex:RS,dithering_fragment:PS,dithering_pars_fragment:LS,roughnessmap_fragment:IS,roughnessmap_pars_fragment:DS,shadowmap_pars_fragment:US,shadowmap_pars_vertex:NS,shadowmap_vertex:FS,shadowmask_pars_fragment:OS,skinbase_vertex:kS,skinning_pars_vertex:BS,skinning_vertex:zS,skinnormal_vertex:HS,specularmap_fragment:VS,specularmap_pars_fragment:GS,tonemapping_fragment:WS,tonemapping_pars_fragment:XS,transmission_fragment:jS,transmission_pars_fragment:KS,uv_pars_fragment:qS,uv_pars_vertex:YS,uv_vertex:QS,worldpos_vertex:JS,background_vert:ZS,background_frag:$S,backgroundCube_vert:e1,backgroundCube_frag:t1,cube_vert:n1,cube_frag:i1,depth_vert:r1,depth_frag:s1,distance_vert:o1,distance_frag:a1,equirect_vert:l1,equirect_frag:c1,linedashed_vert:u1,linedashed_frag:f1,meshbasic_vert:h1,meshbasic_frag:d1,meshlambert_vert:p1,meshlambert_frag:m1,meshmatcap_vert:g1,meshmatcap_frag:v1,meshnormal_vert:x1,meshnormal_frag:_1,meshphong_vert:y1,meshphong_frag:M1,meshphysical_vert:S1,meshphysical_frag:A1,meshtoon_vert:E1,meshtoon_frag:w1,points_vert:T1,points_frag:b1,shadow_vert:C1,shadow_frag:R1,sprite_vert:P1,sprite_frag:L1},Ye={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},Zi={basic:{uniforms:Jn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Jn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Jn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Jn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Jn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new zt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Jn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Jn([Ye.points,Ye.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Jn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Jn([Ye.common,Ye.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Jn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Jn([Ye.sprite,Ye.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distance:{uniforms:Jn([Ye.common,Ye.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distance_vert,fragmentShader:Pt.distance_frag},shadow:{uniforms:Jn([Ye.lights,Ye.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};Zi.physical={uniforms:Jn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const Yl={r:0,b:0,g:0},I1=new on,uv=new bt;uv.set(-1,0,0,0,1,0,0,0,1);function D1(s,e,t,r,o,l){const c=new zt(0);let f=o===!0?0:1,d,h,g=null,x=0,m=null;function _(w){let P=w.isScene===!0?w.background:null;if(P&&P.isTexture){const R=w.backgroundBlurriness>0;P=e.get(P,R)}return P}function S(w){let P=!1;const R=_(w);R===null?y(c,f):R&&R.isColor&&(y(R,1),P=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?t.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function T(w,P){const R=_(P);R&&(R.isCubeTexture||R.mapping===_c)?(h===void 0&&(h=new Un(new Aa(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Mo(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(I1.makeRotationFromEuler(P.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(uv),h.material.toneMapped=Nt.getTransfer(R.colorSpace)!==jt,(g!==R||x!==R.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,g=R,x=R.version,m=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new Un(new Mc(2,2),new mi({name:"BackgroundMaterial",uniforms:Mo(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.toneMapped=Nt.getTransfer(R.colorSpace)!==jt,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||x!==R.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,g=R,x=R.version,m=s.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function y(w,P){w.getRGB(Yl,av(s)),t.buffers.color.setClear(Yl.r,Yl.g,Yl.b,P,l)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(w,P=1){c.set(w),f=P,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(w){f=w,y(c,f)},render:S,addToRenderList:T,dispose:M}}function U1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=m(null);let l=o,c=!1;function f(k,j,ce,re,W){let te=!1;const G=x(k,re,ce,j);l!==G&&(l=G,h(l.object)),te=_(k,re,ce,W),te&&S(k,re,ce,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(te||c)&&(c=!1,R(k,j,ce,re),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function d(){return s.createVertexArray()}function h(k){return s.bindVertexArray(k)}function g(k){return s.deleteVertexArray(k)}function x(k,j,ce,re){const W=re.wireframe===!0;let te=r[j.id];te===void 0&&(te={},r[j.id]=te);const G=k.isInstancedMesh===!0?k.id:0;let N=te[G];N===void 0&&(N={},te[G]=N);let F=N[ce.id];F===void 0&&(F={},N[ce.id]=F);let $=F[W];return $===void 0&&($=m(d()),F[W]=$),$}function m(k){const j=[],ce=[],re=[];for(let W=0;W<t;W++)j[W]=0,ce[W]=0,re[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ce,attributeDivisors:re,object:k,attributes:{},index:null}}function _(k,j,ce,re){const W=l.attributes,te=j.attributes;let G=0;const N=ce.getAttributes();for(const F in N)if(N[F].location>=0){const U=W[F];let V=te[F];if(V===void 0&&(F==="instanceMatrix"&&k.instanceMatrix&&(V=k.instanceMatrix),F==="instanceColor"&&k.instanceColor&&(V=k.instanceColor)),U===void 0||U.attribute!==V||V&&U.data!==V.data)return!0;G++}return l.attributesNum!==G||l.index!==re}function S(k,j,ce,re){const W={},te=j.attributes;let G=0;const N=ce.getAttributes();for(const F in N)if(N[F].location>=0){let U=te[F];U===void 0&&(F==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),F==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));const V={};V.attribute=U,U&&U.data&&(V.data=U.data),W[F]=V,G++}l.attributes=W,l.attributesNum=G,l.index=re}function T(){const k=l.newAttributes;for(let j=0,ce=k.length;j<ce;j++)k[j]=0}function y(k){M(k,0)}function M(k,j){const ce=l.newAttributes,re=l.enabledAttributes,W=l.attributeDivisors;ce[k]=1,re[k]===0&&(s.enableVertexAttribArray(k),re[k]=1),W[k]!==j&&(s.vertexAttribDivisor(k,j),W[k]=j)}function w(){const k=l.newAttributes,j=l.enabledAttributes;for(let ce=0,re=j.length;ce<re;ce++)j[ce]!==k[ce]&&(s.disableVertexAttribArray(ce),j[ce]=0)}function P(k,j,ce,re,W,te,G){G===!0?s.vertexAttribIPointer(k,j,ce,W,te):s.vertexAttribPointer(k,j,ce,re,W,te)}function R(k,j,ce,re){T();const W=re.attributes,te=ce.getAttributes(),G=j.defaultAttributeValues;for(const N in te){const F=te[N];if(F.location>=0){let $=W[N];if($===void 0&&(N==="instanceMatrix"&&k.instanceMatrix&&($=k.instanceMatrix),N==="instanceColor"&&k.instanceColor&&($=k.instanceColor)),$!==void 0){const U=$.normalized,V=$.itemSize,Ae=e.get($);if(Ae===void 0)continue;const Se=Ae.buffer,de=Ae.type,X=Ae.bytesPerElement,le=de===s.INT||de===s.UNSIGNED_INT||$.gpuType===qh;if($.isInterleavedBufferAttribute){const se=$.data,Me=se.stride,be=$.offset;if(se.isInstancedInterleavedBuffer){for(let xe=0;xe<F.locationSize;xe++)M(F.location+xe,se.meshPerAttribute);k.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let xe=0;xe<F.locationSize;xe++)y(F.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let xe=0;xe<F.locationSize;xe++)P(F.location+xe,V/F.locationSize,de,U,Me*X,(be+V/F.locationSize*xe)*X,le)}else{if($.isInstancedBufferAttribute){for(let se=0;se<F.locationSize;se++)M(F.location+se,$.meshPerAttribute);k.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let se=0;se<F.locationSize;se++)y(F.location+se);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let se=0;se<F.locationSize;se++)P(F.location+se,V/F.locationSize,de,U,V*X,V/F.locationSize*se*X,le)}}else if(G!==void 0){const U=G[N];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(F.location,U);break;case 3:s.vertexAttrib3fv(F.location,U);break;case 4:s.vertexAttrib4fv(F.location,U);break;default:s.vertexAttrib1fv(F.location,U)}}}}w()}function z(){D();for(const k in r){const j=r[k];for(const ce in j){const re=j[ce];for(const W in re){const te=re[W];for(const G in te)g(te[G].object),delete te[G];delete re[W]}}delete r[k]}}function I(k){if(r[k.id]===void 0)return;const j=r[k.id];for(const ce in j){const re=j[ce];for(const W in re){const te=re[W];for(const G in te)g(te[G].object),delete te[G];delete re[W]}}delete r[k.id]}function O(k){for(const j in r){const ce=r[j];for(const re in ce){const W=ce[re];if(W[k.id]===void 0)continue;const te=W[k.id];for(const G in te)g(te[G].object),delete te[G];delete W[k.id]}}}function E(k){for(const j in r){const ce=r[j],re=k.isInstancedMesh===!0?k.id:0,W=ce[re];if(W!==void 0){for(const te in W){const G=W[te];for(const N in G)g(G[N].object),delete G[N];delete W[te]}delete ce[re],Object.keys(ce).length===0&&delete r[j]}}}function D(){K(),c=!0,l!==o&&(l=o,h(l.object))}function K(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:D,resetDefaultState:K,dispose:z,releaseStatesOfGeometry:I,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:y,disableUnusedAttributes:w}}function N1(s,e,t){let r;function o(d){r=d}function l(d,h){s.drawArrays(r,d,h),t.update(h,r,1)}function c(d,h,g){g!==0&&(s.drawArraysInstanced(r,d,h,g),t.update(h,r,g))}function f(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,g);let m=0;for(let _=0;_<g;_++)m+=h[_];t.update(m,r,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function F1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==bi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const E=O===Sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ti&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Vi&&!E)}function d(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=d(h);g!==h&&(St("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const x=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&St("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:w,maxVaryings:P,maxFragmentUniforms:R,maxSamples:z,samples:I}}function O1(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new xs,f=new bt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,m){const _=x.length!==0||m||r!==0||o;return o=m,r=x.length,_},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,m){t=g(x,m,0)},this.setState=function(x,m,_){const S=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,M=s.get(x);if(!o||S===null||S.length===0||l&&!y)l?g(null):h();else{const w=l?0:r,P=w*4;let R=M.clippingState||null;d.value=R,R=g(S,m,P,_);for(let z=0;z!==P;++z)R[z]=t[z];M.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,m,_,S){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=d.value,S!==!0||y===null){const M=_+T*4,w=m.matrixWorldInverse;f.getNormalMatrix(w),(y===null||y.length<M)&&(y=new Float32Array(M));for(let P=0,R=_;P!==T;++P,R+=4)c.copy(x[P]).applyMatrix4(w,f),c.normal.toArray(y,R),y[R+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}const Zr=4,P0=[.125,.215,.35,.446,.526,.582],ys=20,k1=256,ca=new ld,L0=new zt;let Nf=null,Ff=0,Of=0,kf=!1;const B1=new Q;class I0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=B1}=l;Nf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nf,Ff,Of),this._renderer.xr.enabled=kf,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Sr,format:bi,colorSpace:fc,depthBuffer:!1},o=D0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=z1(l)),this._blurMaterial=V1(l,e,t),this._ggxMaterial=H1(l,e,t)}return o}_compileMaterial(e){const t=new Un(new ln,e);this._renderer.compile(t,ca)}_sceneToCubeUV(e,t,r,o,l){const d=new si(90,1,t,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,m=x.autoClear,_=x.toneMapping;x.getClearColor(L0),x.toneMapping=er,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new Aa,new ev({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let M=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,M=!0):(y.color.copy(L0),M=!0);for(let P=0;P<6;P++){const R=P%3;R===0?(d.up.set(0,h[P],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+g[P],l.y,l.z)):R===1?(d.up.set(0,0,h[P]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+g[P],l.z)):(d.up.set(0,h[P],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+g[P]));const z=this._cubeSize;uo(o,R*z,P>2?z:0,z,z),x.setRenderTarget(o),M&&x.render(T,d),x.render(e,d)}x.toneMapping=_,x.autoClear=m,e.background=w}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===As||e.mapping===_o;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=N0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U0());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;uo(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,ca)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),x=Math.sqrt(h*h-g*g),m=0+h*1.25,_=x*m,{_lodMax:S}=this,T=this._sizeLods[r],y=3*T*(r>S-Zr?r-S+Zr:0),M=4*(this._cubeSize-T);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=S-t,uo(l,y,M,3*T,2*T),o.setRenderTarget(l),o.render(f,ca),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=S-r,uo(e,y,M,3*T,2*T),o.setRenderTarget(e),o.render(f,ca)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Bt("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[o];x.material=h;const m=h.uniforms,_=this._sizeLods[r]-1,S=isFinite(l)?Math.PI/(2*_):2*Math.PI/(2*ys-1),T=l/S,y=isFinite(l)?1+Math.floor(g*T):ys;y>ys&&St(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ys}`);const M=[];let w=0;for(let O=0;O<ys;++O){const E=O/T,D=Math.exp(-E*E/2);M.push(D),O===0?w+=D:O<y&&(w+=2*D)}for(let O=0;O<M.length;O++)M[O]=M[O]/w;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=M,m.latitudinal.value=c==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:P}=this;m.dTheta.value=S,m.mipInt.value=P-r;const R=this._sizeLods[o],z=3*R*(o>P-Zr?o-P+Zr:0),I=4*(this._cubeSize-R);uo(t,z,I,3*R,2*R),d.setRenderTarget(t),d.render(x,ca)}}function z1(s){const e=[],t=[],r=[];let o=s;const l=s-Zr+1+P0.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let d=1/f;c>s-Zr?d=P0[c-s+Zr-1]:c===0&&(d=0),t.push(d);const h=1/(f-2),g=-h,x=1+h,m=[g,g,x,g,x,x,g,g,x,x,g,x],_=6,S=6,T=3,y=2,M=1,w=new Float32Array(T*S*_),P=new Float32Array(y*S*_),R=new Float32Array(M*S*_);for(let I=0;I<_;I++){const O=I%3*2/3-1,E=I>2?0:-1,D=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];w.set(D,T*S*I),P.set(m,y*S*I);const K=[I,I,I,I,I,I];R.set(K,M*S*I)}const z=new ln;z.setAttribute("position",new kt(w,T)),z.setAttribute("uv",new kt(P,y)),z.setAttribute("faceIndex",new kt(R,M)),r.push(new Un(z,null)),o>Zr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function D0(s,e,t){const r=new nr(s,e,t);return r.texture.mapping=_c,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function uo(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function H1(s,e,t){return new mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:k1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function V1(s,e,t){const r=new Float32Array(ys),o=new Q(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function U0(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function N0(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

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
	`}class fv extends nr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new sv(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Aa(5,5,5),l=new mi({name:"CubemapFromEquirect",uniforms:Mo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:oi,blending:yr});l.uniforms.tEquirect.value=t;const c=new Un(o,l),f=t.minFilter;return t.minFilter===Ms&&(t.minFilter=Cn),new qy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function G1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(m,_=!1){return m==null?null:_?c(m):l(m)}function l(m){if(m&&m.isTexture){const _=m.mapping;if(_===sf||_===of)if(e.has(m)){const S=e.get(m).texture;return f(S,m.mapping)}else{const S=m.image;if(S&&S.height>0){const T=new fv(S.height);return T.fromEquirectangularTexture(s,m),e.set(m,T),m.addEventListener("dispose",h),f(T.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const _=m.mapping,S=_===sf||_===of,T=_===As||_===_o;if(S||T){let y=t.get(m);const M=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==M)return r===null&&(r=new I0(s)),y=S?r.fromEquirectangular(m,y):r.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const w=m.image;return S&&w&&w.height>0||T&&w&&d(w)?(r===null&&(r=new I0(s)),y=S?r.fromEquirectangular(m):r.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",g),y.texture):null}}}return m}function f(m,_){return _===sf?m.mapping=As:_===of&&(m.mapping=_o),m}function d(m){let _=0;const S=6;for(let T=0;T<S;T++)m[T]!==void 0&&_++;return _===S}function h(m){const _=m.target;_.removeEventListener("dispose",h);const S=e.get(_);S!==void 0&&(e.delete(_),S.dispose())}function g(m){const _=m.target;_.removeEventListener("dispose",g);const S=t.get(_);S!==void 0&&(t.delete(_),S.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function W1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&kh("WebGLRenderer: "+r+" extension not supported."),o}}}function X1(s,e,t,r){const o={},l=new WeakMap;function c(x){const m=x.target;m.index!==null&&e.remove(m.index);for(const S in m.attributes)e.remove(m.attributes[S]);m.removeEventListener("dispose",c),delete o[m.id];const _=l.get(m);_&&(e.remove(_),l.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(x,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function d(x){const m=x.attributes;for(const _ in m)e.update(m[_],s.ARRAY_BUFFER)}function h(x){const m=[],_=x.index,S=x.attributes.position;let T=0;if(S===void 0)return;if(_!==null){const w=_.array;T=_.version;for(let P=0,R=w.length;P<R;P+=3){const z=w[P+0],I=w[P+1],O=w[P+2];m.push(z,I,I,O,O,z)}}else{const w=S.array;T=S.version;for(let P=0,R=w.length/3-1;P<R;P+=3){const z=P+0,I=P+1,O=P+2;m.push(z,I,I,O,O,z)}}const y=new(S.count>=65535?$g:Zg)(m,1);y.version=T;const M=l.get(x);M&&e.remove(M),l.set(x,y)}function g(x){const m=l.get(x);if(m){const _=x.index;_!==null&&m.version<_.version&&h(x)}else h(x);return l.get(x)}return{get:f,update:d,getWireframeAttribute:g}}function j1(s,e,t){let r;function o(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function d(x,m){s.drawElements(r,m,l,x*c),t.update(m,r,1)}function h(x,m,_){_!==0&&(s.drawElementsInstanced(r,m,l,x*c,_),t.update(m,r,_))}function g(x,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,l,x,0,_);let T=0;for(let y=0;y<_;y++)T+=m[y];t.update(T,r,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=g}function K1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Bt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function q1(s,e,t){const r=new WeakMap,o=new nn;function l(c,f,d){const h=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=g!==void 0?g.length:0;let m=r.get(f);if(m===void 0||m.count!==x){let K=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",K)};var _=K;m!==void 0&&m.texture.dispose();const S=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let R=0;S===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let z=f.attributes.position.count*R,I=1;z>e.maxTextureSize&&(I=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const O=new Float32Array(z*I*4*x),E=new Yg(O,z,I,x);E.type=Vi,E.needsUpdate=!0;const D=R*4;for(let k=0;k<x;k++){const j=M[k],ce=w[k],re=P[k],W=z*I*4*k;for(let te=0;te<j.count;te++){const G=te*D;S===!0&&(o.fromBufferAttribute(j,te),O[W+G+0]=o.x,O[W+G+1]=o.y,O[W+G+2]=o.z,O[W+G+3]=0),T===!0&&(o.fromBufferAttribute(ce,te),O[W+G+4]=o.x,O[W+G+5]=o.y,O[W+G+6]=o.z,O[W+G+7]=0),y===!0&&(o.fromBufferAttribute(re,te),O[W+G+8]=o.x,O[W+G+9]=o.y,O[W+G+10]=o.z,O[W+G+11]=re.itemSize===4?o.w:1)}}m={count:x,texture:E,size:new Ut(z,I)},r.set(f,m),f.addEventListener("dispose",K)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let S=0;for(let y=0;y<h.length;y++)S+=h[y];const T=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(s,"morphTargetBaseInfluence",T),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:l}}function Y1(s,e,t,r,o){let l=new WeakMap;function c(h){const g=o.render.frame,x=h.geometry,m=e.get(h,x);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==g&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,g))),h.isSkinnedMesh){const _=h.skeleton;l.get(_)!==g&&(_.update(),l.set(_,g))}return m}function f(){l=new WeakMap}function d(h){const g=h.target;g.removeEventListener("dispose",d),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:f}}const Q1={[Dg]:"LINEAR_TONE_MAPPING",[Ug]:"REINHARD_TONE_MAPPING",[Ng]:"CINEON_TONE_MAPPING",[Fg]:"ACES_FILMIC_TONE_MAPPING",[kg]:"AGX_TONE_MAPPING",[Bg]:"NEUTRAL_TONE_MAPPING",[Og]:"CUSTOM_TONE_MAPPING"};function J1(s,e,t,r,o){const l=new nr(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new yo(e,t):void 0}),c=new nr(e,t,{type:Sr,depthBuffer:!1,stencilBuffer:!1}),f=new ln;f.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Dn([0,2,0,0,2,0],2));const d=new Xy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Un(f,d),g=new ld(-1,1,1,-1,0,1);let x=null,m=null,_=!1,S,T=null,y=[],M=!1;this.setSize=function(w,P){l.setSize(w,P),c.setSize(w,P);for(let R=0;R<y.length;R++){const z=y[R];z.setSize&&z.setSize(w,P)}},this.setEffects=function(w){y=w,M=y.length>0&&y[0].isRenderPass===!0;const P=l.width,R=l.height;for(let z=0;z<y.length;z++){const I=y[z];I.setSize&&I.setSize(P,R)}},this.begin=function(w,P){if(_||w.toneMapping===er&&y.length===0)return!1;if(T=P,P!==null){const R=P.width,z=P.height;(l.width!==R||l.height!==z)&&this.setSize(R,z)}return M===!1&&w.setRenderTarget(l),S=w.toneMapping,w.toneMapping=er,!0},this.hasRenderPass=function(){return M},this.end=function(w,P){w.toneMapping=S,_=!0;let R=l,z=c;for(let I=0;I<y.length;I++){const O=y[I];if(O.enabled!==!1&&(O.render(w,z,R,P),O.needsSwap!==!1)){const E=R;R=z,z=E}}if(x!==w.outputColorSpace||m!==w.toneMapping){x=w.outputColorSpace,m=w.toneMapping,d.defines={},Nt.getTransfer(x)===jt&&(d.defines.SRGB_TRANSFER="");const I=Q1[m];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=R.texture,w.setRenderTarget(T),w.render(h,g),T=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),d.dispose()}}const hv=new Gn,Vh=new yo(1,1),dv=new Yg,pv=new yy,mv=new sv,F0=[],O0=[],k0=new Float32Array(16),B0=new Float32Array(9),z0=new Float32Array(4);function wo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=F0[o];if(l===void 0&&(l=new Float32Array(o),F0[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function vn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function xn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Ac(s,e){let t=O0[e];t===void 0&&(t=new Int32Array(e),O0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function Z1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2fv(this.addr,e),xn(t,e)}}function eA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;s.uniform3fv(this.addr,e),xn(t,e)}}function tA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4fv(this.addr,e),xn(t,e)}}function nA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,r))return;z0.set(r),s.uniformMatrix2fv(this.addr,!1,z0),xn(t,r)}}function iA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,r))return;B0.set(r),s.uniformMatrix3fv(this.addr,!1,B0),xn(t,r)}}function rA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,r))return;k0.set(r),s.uniformMatrix4fv(this.addr,!1,k0),xn(t,r)}}function sA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function oA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2iv(this.addr,e),xn(t,e)}}function aA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3iv(this.addr,e),xn(t,e)}}function lA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4iv(this.addr,e),xn(t,e)}}function cA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function uA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2uiv(this.addr,e),xn(t,e)}}function fA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3uiv(this.addr,e),xn(t,e)}}function hA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4uiv(this.addr,e),xn(t,e)}}function dA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Vh.compareFunction=t.isReversedDepthBuffer()?td:ed,l=Vh):l=hv,t.setTexture2D(e||l,o)}function pA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||pv,o)}function mA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||mv,o)}function gA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||dv,o)}function vA(s){switch(s){case 5126:return Z1;case 35664:return $1;case 35665:return eA;case 35666:return tA;case 35674:return nA;case 35675:return iA;case 35676:return rA;case 5124:case 35670:return sA;case 35667:case 35671:return oA;case 35668:case 35672:return aA;case 35669:case 35673:return lA;case 5125:return cA;case 36294:return uA;case 36295:return fA;case 36296:return hA;case 35678:case 36198:case 36298:case 36306:case 35682:return dA;case 35679:case 36299:case 36307:return pA;case 35680:case 36300:case 36308:case 36293:return mA;case 36289:case 36303:case 36311:case 36292:return gA}}function xA(s,e){s.uniform1fv(this.addr,e)}function _A(s,e){const t=wo(e,this.size,2);s.uniform2fv(this.addr,t)}function yA(s,e){const t=wo(e,this.size,3);s.uniform3fv(this.addr,t)}function MA(s,e){const t=wo(e,this.size,4);s.uniform4fv(this.addr,t)}function SA(s,e){const t=wo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function AA(s,e){const t=wo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function EA(s,e){const t=wo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function wA(s,e){s.uniform1iv(this.addr,e)}function TA(s,e){s.uniform2iv(this.addr,e)}function bA(s,e){s.uniform3iv(this.addr,e)}function CA(s,e){s.uniform4iv(this.addr,e)}function RA(s,e){s.uniform1uiv(this.addr,e)}function PA(s,e){s.uniform2uiv(this.addr,e)}function LA(s,e){s.uniform3uiv(this.addr,e)}function IA(s,e){s.uniform4uiv(this.addr,e)}function DA(s,e,t){const r=this.cache,o=e.length,l=Ac(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),xn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Vh:c=hv;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function UA(s,e,t){const r=this.cache,o=e.length,l=Ac(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),xn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||pv,l[c])}function NA(s,e,t){const r=this.cache,o=e.length,l=Ac(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),xn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||mv,l[c])}function FA(s,e,t){const r=this.cache,o=e.length,l=Ac(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),xn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||dv,l[c])}function OA(s){switch(s){case 5126:return xA;case 35664:return _A;case 35665:return yA;case 35666:return MA;case 35674:return SA;case 35675:return AA;case 35676:return EA;case 5124:case 35670:return wA;case 35667:case 35671:return TA;case 35668:case 35672:return bA;case 35669:case 35673:return CA;case 5125:return RA;case 36294:return PA;case 36295:return LA;case 36296:return IA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return UA;case 35680:case 36300:case 36308:case 36293:return NA;case 36289:case 36303:case 36311:case 36292:return FA}}class kA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=vA(t.type)}}class BA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OA(t.type)}}class zA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Bf=/(\w+)(\])?(\[|\.)?/g;function H0(s,e){s.seq.push(e),s.map[e.id]=e}function HA(s,e,t){const r=s.name,o=r.length;for(Bf.lastIndex=0;;){const l=Bf.exec(r),c=Bf.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===o){H0(t,h===void 0?new kA(f,s,e):new BA(f,s,e));break}else{let x=t.map[f];x===void 0&&(x=new zA(f),H0(t,x)),t=x}}}class sc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),d=e.getUniformLocation(t,f.name);HA(f,d,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function V0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const VA=37297;let GA=0;function WA(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const G0=new bt;function XA(s){Nt._getMatrix(G0,Nt.workingColorSpace,s);const e=`mat3( ${G0.elements.map(t=>t.toFixed(4))} )`;switch(Nt.getTransfer(s)){case hc:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return St("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function W0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+WA(s.getShaderSource(e),f)}else return l}function jA(s,e){const t=XA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const KA={[Dg]:"Linear",[Ug]:"Reinhard",[Ng]:"Cineon",[Fg]:"ACESFilmic",[kg]:"AgX",[Bg]:"Neutral",[Og]:"Custom"};function qA(s,e){const t=KA[e];return t===void 0?(St("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ql=new Q;function YA(){Nt.getLuminanceCoefficients(Ql);const s=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function JA(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function ZA(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function ma(s){return s!==""}function X0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function j0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $A=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(s){return s.replace($A,tE)}const eE=new Map;function tE(s,e){let t=Pt[e];if(t===void 0){const r=eE.get(e);if(r!==void 0)t=Pt[r],St('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Gh(t)}const nE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K0(s){return s.replace(nE,iE)}function iE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function q0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const rE={[ec]:"SHADOWMAP_TYPE_PCF",[pa]:"SHADOWMAP_TYPE_VSM"};function sE(s){return rE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const oE={[As]:"ENVMAP_TYPE_CUBE",[_o]:"ENVMAP_TYPE_CUBE",[_c]:"ENVMAP_TYPE_CUBE_UV"};function aE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":oE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const lE={[_o]:"ENVMAP_MODE_REFRACTION"};function cE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":lE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uE={[Ig]:"ENVMAP_BLENDING_MULTIPLY",[k_]:"ENVMAP_BLENDING_MIX",[B_]:"ENVMAP_BLENDING_ADD"};function fE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":uE[s.combine]||"ENVMAP_BLENDING_NONE"}function hE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function dE(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=sE(t),h=aE(t),g=cE(t),x=fE(t),m=hE(t),_=QA(t),S=JA(l),T=o.createProgram();let y,M,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ma).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ma).join(`
`),M.length>0&&(M+=`
`)):(y=[q0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),M=[q0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?Pt.tonemapping_pars_fragment:"",t.toneMapping!==er?qA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,jA("linearToOutputTexel",t.outputColorSpace),YA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),c=Gh(c),c=X0(c,t),c=j0(c,t),f=Gh(f),f=X0(f,t),f=j0(f,t),c=K0(c),f=K0(f),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",t.glslVersion===$m?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const P=w+y+c,R=w+M+f,z=V0(o,o.VERTEX_SHADER,P),I=V0(o,o.FRAGMENT_SHADER,R);o.attachShader(T,z),o.attachShader(T,I),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function O(k){if(s.debug.checkShaderErrors){const j=o.getProgramInfoLog(T)||"",ce=o.getShaderInfoLog(z)||"",re=o.getShaderInfoLog(I)||"",W=j.trim(),te=ce.trim(),G=re.trim();let N=!0,F=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,z,I);else{const $=W0(o,z,"vertex"),U=W0(o,I,"fragment");Bt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+W+`
`+$+`
`+U)}else W!==""?St("WebGLProgram: Program Info Log:",W):(te===""||G==="")&&(F=!1);F&&(k.diagnostics={runnable:N,programLog:W,vertexShader:{log:te,prefix:y},fragmentShader:{log:G,prefix:M}})}o.deleteShader(z),o.deleteShader(I),E=new sc(o,T),D=ZA(o,T)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let K=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=o.getProgramParameter(T,VA)),K},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=I,this}let pE=0;class mE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new gE(e),t.set(e,r)),r}}class gE{constructor(e){this.id=pE++,this.code=e,this.usedTimes=0}}function vE(s){return s===Es||s===cc||s===uc}function xE(s,e,t,r,o,l){const c=new Qg,f=new mE,d=new Set,h=[],g=new Map,x=r.logarithmicDepthBuffer;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return d.add(E),E===0?"uv":`uv${E}`}function T(E,D,K,k,j,ce){const re=k.fog,W=j.geometry,te=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,N=e.get(E.envMap||te,G),F=N&&N.mapping===_c?N.image.height:null,$=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&St("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const U=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,V=U!==void 0?U.length:0;let Ae=0;W.morphAttributes.position!==void 0&&(Ae=1),W.morphAttributes.normal!==void 0&&(Ae=2),W.morphAttributes.color!==void 0&&(Ae=3);let Se,de,X,le;if($){const $e=Zi[$];Se=$e.vertexShader,de=$e.fragmentShader}else Se=E.vertexShader,de=E.fragmentShader,f.update(E),X=f.getVertexShaderID(E),le=f.getFragmentShaderID(E);const se=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),be=j.isInstancedMesh===!0,xe=j.isBatchedMesh===!0,Xe=!!E.map,He=!!E.matcap,je=!!N,tt=!!E.aoMap,ot=!!E.lightMap,lt=!!E.bumpMap,mt=!!E.normalMap,wt=!!E.displacementMap,q=!!E.emissiveMap,Re=!!E.metalnessMap,ue=!!E.roughnessMap,we=E.anisotropy>0,Ee=E.clearcoat>0,ht=E.dispersion>0,L=E.iridescence>0,A=E.sheen>0,ne=E.transmission>0,ye=we&&!!E.anisotropyMap,Ce=Ee&&!!E.clearcoatMap,Ie=Ee&&!!E.clearcoatNormalMap,Ve=Ee&&!!E.clearcoatRoughnessMap,me=L&&!!E.iridescenceMap,ge=L&&!!E.iridescenceThicknessMap,ke=A&&!!E.sheenColorMap,Ke=A&&!!E.sheenRoughnessMap,Ne=!!E.specularMap,Fe=!!E.specularColorMap,dt=!!E.specularIntensityMap,gt=ne&&!!E.transmissionMap,Et=ne&&!!E.thicknessMap,Y=!!E.gradientMap,Oe=!!E.alphaMap,_e=E.alphaTest>0,qe=!!E.alphaHash,Te=!!E.extensions;let ve=er;E.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ve=s.toneMapping);const We={shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:Se,fragmentShader:de,defines:E.defines,customVertexShaderID:X,customFragmentShaderID:le,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:xe,batchingColor:xe&&j._colorsTexture!==null,instancing:be,instancingColor:be&&j.instanceColor!==null,instancingMorph:be&&j.morphTexture!==null,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Xe,matcap:He,envMap:je,envMapMode:je&&N.mapping,envMapCubeUVHeight:F,aoMap:tt,lightMap:ot,bumpMap:lt,normalMap:mt,displacementMap:wt,emissiveMap:q,normalMapObjectSpace:mt&&E.normalMapType===V_,normalMapTangentSpace:mt&&E.normalMapType===Ym,packedNormalMap:mt&&E.normalMapType===Ym&&vE(E.normalMap.format),metalnessMap:Re,roughnessMap:ue,anisotropy:we,anisotropyMap:ye,clearcoat:Ee,clearcoatMap:Ce,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Ve,dispersion:ht,iridescence:L,iridescenceMap:me,iridescenceThicknessMap:ge,sheen:A,sheenColorMap:ke,sheenRoughnessMap:Ke,specularMap:Ne,specularColorMap:Fe,specularIntensityMap:dt,transmission:ne,transmissionMap:gt,thicknessMap:Et,gradientMap:Y,opaque:E.transparent===!1&&E.blending===go&&E.alphaToCoverage===!1,alphaMap:Oe,alphaTest:_e,alphaHash:qe,combine:E.combine,mapUv:Xe&&S(E.map.channel),aoMapUv:tt&&S(E.aoMap.channel),lightMapUv:ot&&S(E.lightMap.channel),bumpMapUv:lt&&S(E.bumpMap.channel),normalMapUv:mt&&S(E.normalMap.channel),displacementMapUv:wt&&S(E.displacementMap.channel),emissiveMapUv:q&&S(E.emissiveMap.channel),metalnessMapUv:Re&&S(E.metalnessMap.channel),roughnessMapUv:ue&&S(E.roughnessMap.channel),anisotropyMapUv:ye&&S(E.anisotropyMap.channel),clearcoatMapUv:Ce&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&S(E.sheenRoughnessMap.channel),specularMapUv:Ne&&S(E.specularMap.channel),specularColorMapUv:Fe&&S(E.specularColorMap.channel),specularIntensityMapUv:dt&&S(E.specularIntensityMap.channel),transmissionMapUv:gt&&S(E.transmissionMap.channel),thicknessMapUv:Et&&S(E.thicknessMap.channel),alphaMapUv:Oe&&S(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(mt||we),vertexNormals:!!W.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!W.attributes.uv&&(Xe||Oe),fog:!!re,useFog:E.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||W.attributes.normal===void 0&&mt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Me,skinning:j.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Ae,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&K.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:Xe&&E.map.isVideoTexture===!0&&Nt.getTransfer(E.map.colorSpace)===jt,decodeVideoTextureEmissive:q&&E.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(E.emissiveMap.colorSpace)===jt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===zi,flipSided:E.side===oi,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Te&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&E.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return We.vertexUv1s=d.has(1),We.vertexUv2s=d.has(2),We.vertexUv3s=d.has(3),d.clear(),We}function y(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const K in E.defines)D.push(K),D.push(E.defines[K]);return E.isRawShaderMaterial===!1&&(M(D,E),w(D,E),D.push(s.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function M(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function w(E,D){c.disableAll(),D.instancing&&c.enable(0),D.instancingColor&&c.enable(1),D.instancingMorph&&c.enable(2),D.matcap&&c.enable(3),D.envMap&&c.enable(4),D.normalMapObjectSpace&&c.enable(5),D.normalMapTangentSpace&&c.enable(6),D.clearcoat&&c.enable(7),D.iridescence&&c.enable(8),D.alphaTest&&c.enable(9),D.vertexColors&&c.enable(10),D.vertexAlphas&&c.enable(11),D.vertexUv1s&&c.enable(12),D.vertexUv2s&&c.enable(13),D.vertexUv3s&&c.enable(14),D.vertexTangents&&c.enable(15),D.anisotropy&&c.enable(16),D.alphaHash&&c.enable(17),D.batching&&c.enable(18),D.dispersion&&c.enable(19),D.batchingColor&&c.enable(20),D.gradientMap&&c.enable(21),D.packedNormalMap&&c.enable(22),D.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.reversedDepthBuffer&&c.enable(4),D.skinning&&c.enable(5),D.morphTargets&&c.enable(6),D.morphNormals&&c.enable(7),D.morphColors&&c.enable(8),D.premultipliedAlpha&&c.enable(9),D.shadowMapEnabled&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.decodeVideoTextureEmissive&&c.enable(20),D.alphaToCoverage&&c.enable(21),D.numLightProbeGrids>0&&c.enable(22),E.push(c.mask)}function P(E){const D=_[E.type];let K;if(D){const k=Zi[D];K=Vy.clone(k.uniforms)}else K=E.uniforms;return K}function R(E,D){let K=g.get(D);return K!==void 0?++K.usedTimes:(K=new dE(s,D,E,o),h.push(K),g.set(D,K)),K}function z(E){if(--E.usedTimes===0){const D=h.indexOf(E);h[D]=h[h.length-1],h.pop(),g.delete(E.cacheKey),E.destroy()}}function I(E){f.remove(E)}function O(){f.dispose()}return{getParameters:T,getProgramCacheKey:y,getUniforms:P,acquireProgram:R,releaseProgram:z,releaseShaderCache:I,programs:h,dispose:O}}function _E(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,d){s.get(c)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function yE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Y0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Q0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function f(m,_,S,T,y,M){let w=s[e];return w===void 0?(w={id:m.id,object:m,geometry:_,material:S,materialVariant:c(m),groupOrder:T,renderOrder:m.renderOrder,z:y,group:M},s[e]=w):(w.id=m.id,w.object=m,w.geometry=_,w.material=S,w.materialVariant=c(m),w.groupOrder=T,w.renderOrder=m.renderOrder,w.z=y,w.group=M),e++,w}function d(m,_,S,T,y,M){const w=f(m,_,S,T,y,M);S.transmission>0?r.push(w):S.transparent===!0?o.push(w):t.push(w)}function h(m,_,S,T,y,M){const w=f(m,_,S,T,y,M);S.transmission>0?r.unshift(w):S.transparent===!0?o.unshift(w):t.unshift(w)}function g(m,_){t.length>1&&t.sort(m||yE),r.length>1&&r.sort(_||Y0),o.length>1&&o.sort(_||Y0)}function x(){for(let m=e,_=s.length;m<_;m++){const S=s[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:x,sort:g}}function ME(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new Q0,s.set(r,[c])):o>=l.length?(c=new Q0,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function SE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new zt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new zt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":t={color:new zt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=t,t}}}function AE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let EE=0;function wE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function TE(s){const e=new SE,t=AE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new Q);const o=new Q,l=new on,c=new on;function f(h){let g=0,x=0,m=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let _=0,S=0,T=0,y=0,M=0,w=0,P=0,R=0,z=0,I=0,O=0;h.sort(wE);for(let D=0,K=h.length;D<K;D++){const k=h[D],j=k.color,ce=k.intensity,re=k.distance;let W=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Es?W=k.shadow.map.texture:W=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=j.r*ce,x+=j.g*ce,m+=j.b*ce;else if(k.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(k.sh.coefficients[te],ce);O++}else if(k.isDirectionalLight){const te=e.get(k);if(te.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,N=t.get(k);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,r.directionalShadow[_]=N,r.directionalShadowMap[_]=W,r.directionalShadowMatrix[_]=k.shadow.matrix,w++}r.directional[_]=te,_++}else if(k.isSpotLight){const te=e.get(k);te.position.setFromMatrixPosition(k.matrixWorld),te.color.copy(j).multiplyScalar(ce),te.distance=re,te.coneCos=Math.cos(k.angle),te.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),te.decay=k.decay,r.spot[T]=te;const G=k.shadow;if(k.map&&(r.spotLightMap[z]=k.map,z++,G.updateMatrices(k),k.castShadow&&I++),r.spotLightMatrix[T]=G.matrix,k.castShadow){const N=t.get(k);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,r.spotShadow[T]=N,r.spotShadowMap[T]=W,R++}T++}else if(k.isRectAreaLight){const te=e.get(k);te.color.copy(j).multiplyScalar(ce),te.halfWidth.set(k.width*.5,0,0),te.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=te,y++}else if(k.isPointLight){const te=e.get(k);if(te.color.copy(k.color).multiplyScalar(k.intensity),te.distance=k.distance,te.decay=k.decay,k.castShadow){const G=k.shadow,N=t.get(k);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,N.shadowCameraNear=G.camera.near,N.shadowCameraFar=G.camera.far,r.pointShadow[S]=N,r.pointShadowMap[S]=W,r.pointShadowMatrix[S]=k.shadow.matrix,P++}r.point[S]=te,S++}else if(k.isHemisphereLight){const te=e.get(k);te.skyColor.copy(k.color).multiplyScalar(ce),te.groundColor.copy(k.groundColor).multiplyScalar(ce),r.hemi[M]=te,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ye.LTC_FLOAT_1,r.rectAreaLTC2=Ye.LTC_FLOAT_2):(r.rectAreaLTC1=Ye.LTC_HALF_1,r.rectAreaLTC2=Ye.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=m;const E=r.hash;(E.directionalLength!==_||E.pointLength!==S||E.spotLength!==T||E.rectAreaLength!==y||E.hemiLength!==M||E.numDirectionalShadows!==w||E.numPointShadows!==P||E.numSpotShadows!==R||E.numSpotMaps!==z||E.numLightProbes!==O)&&(r.directional.length=_,r.spot.length=T,r.rectArea.length=y,r.point.length=S,r.hemi.length=M,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+z-I,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,E.directionalLength=_,E.pointLength=S,E.spotLength=T,E.rectAreaLength=y,E.hemiLength=M,E.numDirectionalShadows=w,E.numPointShadows=P,E.numSpotShadows=R,E.numSpotMaps=z,E.numLightProbes=O,r.version=EE++)}function d(h,g){let x=0,m=0,_=0,S=0,T=0;const y=g.matrixWorldInverse;for(let M=0,w=h.length;M<w;M++){const P=h[M];if(P.isDirectionalLight){const R=r.directional[x];R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),x++}else if(P.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(P.isRectAreaLight){const R=r.rectArea[S];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),c.identity(),l.copy(P.matrixWorld),l.premultiply(y),c.extractRotation(l),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),S++}else if(P.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),m++}else if(P.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:f,setupView:d,state:r}}function J0(s){const e=new TE(s),t=[],r=[],o=[];function l(m){x.camera=m,t.length=0,r.length=0,o.length=0}function c(m){t.push(m)}function f(m){r.push(m)}function d(m){o.push(m)}function h(){e.setup(t)}function g(m){e.setupView(t,m)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:h,setupLightsView:g,pushLight:c,pushShadow:f,pushLightProbeGrid:d}}function bE(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new J0(s),e.set(o,[f])):l>=c.length?(f=new J0(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const CE=`void main() {
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
}`,PE=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],LE=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Z0=new on,ua=new Q,zf=new Q;function IE(s,e,t){let r=new nv;const o=new Ut,l=new Ut,c=new nn,f=new jy,d=new Ky,h={},g=t.maxTextureSize,x={[$r]:oi,[oi]:$r,[zi]:zi},m=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:CE,fragmentShader:RE}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const S=new ln;S.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Un(S,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let M=this.type;this.render=function(I,O,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===__&&(St("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ec);const D=s.getRenderTarget(),K=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),j=s.state;j.setBlending(yr),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ce=M!==this.type;ce&&O.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(W=>W.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,W=I.length;re<W;re++){const te=I[re],G=te.shadow;if(G===void 0){St("WebGLShadowMap:",te,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const N=G.getFrameExtents();o.multiply(N),l.copy(G.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/N.x),o.x=l.x*N.x,G.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/N.y),o.y=l.y*N.y,G.mapSize.y=l.y));const F=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=F,G.map===null||ce===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===pa){if(te.isPointLight){St("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new nr(o.x,o.y,{format:Es,type:Sr,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),G.map.texture.name=te.name+".shadowMap",G.map.depthTexture=new yo(o.x,o.y,Vi),G.map.depthTexture.name=te.name+".shadowMapDepth",G.map.depthTexture.format=Ar,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=gn,G.map.depthTexture.magFilter=gn}else te.isPointLight?(G.map=new fv(o.x),G.map.depthTexture=new ky(o.x,ir)):(G.map=new nr(o.x,o.y),G.map.depthTexture=new yo(o.x,o.y,ir)),G.map.depthTexture.name=te.name+".shadowMap",G.map.depthTexture.format=Ar,this.type===ec?(G.map.depthTexture.compareFunction=F?td:ed,G.map.depthTexture.minFilter=Cn,G.map.depthTexture.magFilter=Cn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=gn,G.map.depthTexture.magFilter=gn);G.camera.updateProjectionMatrix()}const $=G.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<$;U++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,U),s.clear();else{U===0&&(s.setRenderTarget(G.map),s.clear());const V=G.getViewport(U);c.set(l.x*V.x,l.y*V.y,l.x*V.z,l.y*V.w),j.viewport(c)}if(te.isPointLight){const V=G.camera,Ae=G.matrix,Se=te.distance||V.far;Se!==V.far&&(V.far=Se,V.updateProjectionMatrix()),ua.setFromMatrixPosition(te.matrixWorld),V.position.copy(ua),zf.copy(V.position),zf.add(PE[U]),V.up.copy(LE[U]),V.lookAt(zf),V.updateMatrixWorld(),Ae.makeTranslation(-ua.x,-ua.y,-ua.z),Z0.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Z0,V.coordinateSystem,V.reversedDepth)}else G.updateMatrices(te);r=G.getFrustum(),R(O,E,G.camera,te,this.type)}G.isPointLightShadow!==!0&&this.type===pa&&w(G,E),G.needsUpdate=!1}M=this.type,y.needsUpdate=!1,s.setRenderTarget(D,K,k)};function w(I,O){const E=e.update(T);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new nr(o.x,o.y,{format:Es,type:Sr})),m.uniforms.shadow_pass.value=I.map.depthTexture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(O,null,E,m,T,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(O,null,E,_,T,null)}function P(I,O,E,D){let K=null;const k=E.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)K=k;else if(K=E.isPointLight===!0?d:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const j=K.uuid,ce=O.uuid;let re=h[j];re===void 0&&(re={},h[j]=re);let W=re[ce];W===void 0&&(W=K.clone(),re[ce]=W,O.addEventListener("dispose",z)),K=W}if(K.visible=O.visible,K.wireframe=O.wireframe,D===pa?K.side=O.shadowSide!==null?O.shadowSide:O.side:K.side=O.shadowSide!==null?O.shadowSide:x[O.side],K.alphaMap=O.alphaMap,K.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,K.map=O.map,K.clipShadows=O.clipShadows,K.clippingPlanes=O.clippingPlanes,K.clipIntersection=O.clipIntersection,K.displacementMap=O.displacementMap,K.displacementScale=O.displacementScale,K.displacementBias=O.displacementBias,K.wireframeLinewidth=O.wireframeLinewidth,K.linewidth=O.linewidth,E.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const j=s.properties.get(K);j.light=E}return K}function R(I,O,E,D,K){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&K===pa)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,I.matrixWorld);const ce=e.update(I),re=I.material;if(Array.isArray(re)){const W=ce.groups;for(let te=0,G=W.length;te<G;te++){const N=W[te],F=re[N.materialIndex];if(F&&F.visible){const $=P(I,F,D,K);I.onBeforeShadow(s,I,O,E,ce,$,N),s.renderBufferDirect(E,null,ce,$,I,N),I.onAfterShadow(s,I,O,E,ce,$,N)}}}else if(re.visible){const W=P(I,re,D,K);I.onBeforeShadow(s,I,O,E,ce,W,null),s.renderBufferDirect(E,null,ce,W,I,null),I.onAfterShadow(s,I,O,E,ce,W,null)}}const j=I.children;for(let ce=0,re=j.length;ce<re;ce++)R(j[ce],O,E,D,K)}function z(I){I.target.removeEventListener("dispose",z);for(const E in h){const D=h[E],K=I.target.uuid;K in D&&(D[K].dispose(),delete D[K])}}}function DE(s,e){function t(){let Y=!1;const Oe=new nn;let _e=null;const qe=new nn(0,0,0,0);return{setMask:function(Te){_e!==Te&&!Y&&(s.colorMask(Te,Te,Te,Te),_e=Te)},setLocked:function(Te){Y=Te},setClear:function(Te,ve,We,$e,nt){nt===!0&&(Te*=$e,ve*=$e,We*=$e),Oe.set(Te,ve,We,$e),qe.equals(Oe)===!1&&(s.clearColor(Te,ve,We,$e),qe.copy(Oe))},reset:function(){Y=!1,_e=null,qe.set(-1,0,0,0)}}}function r(){let Y=!1,Oe=!1,_e=null,qe=null,Te=null;return{setReversed:function(ve){if(Oe!==ve){const We=e.get("EXT_clip_control");ve?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Oe=ve;const $e=Te;Te=null,this.setClear($e)}},getReversed:function(){return Oe},setTest:function(ve){ve?se(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(ve){_e!==ve&&!Y&&(s.depthMask(ve),_e=ve)},setFunc:function(ve){if(Oe&&(ve=Z_[ve]),qe!==ve){switch(ve){case eh:s.depthFunc(s.NEVER);break;case th:s.depthFunc(s.ALWAYS);break;case nh:s.depthFunc(s.LESS);break;case xo:s.depthFunc(s.LEQUAL);break;case ih:s.depthFunc(s.EQUAL);break;case rh:s.depthFunc(s.GEQUAL);break;case sh:s.depthFunc(s.GREATER);break;case oh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}qe=ve}},setLocked:function(ve){Y=ve},setClear:function(ve){Te!==ve&&(Te=ve,Oe&&(ve=1-ve),s.clearDepth(ve))},reset:function(){Y=!1,_e=null,qe=null,Te=null,Oe=!1}}}function o(){let Y=!1,Oe=null,_e=null,qe=null,Te=null,ve=null,We=null,$e=null,nt=null;return{setTest:function(pt){Y||(pt?se(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(pt){Oe!==pt&&!Y&&(s.stencilMask(pt),Oe=pt)},setFunc:function(pt,Kt,Yt){(_e!==pt||qe!==Kt||Te!==Yt)&&(s.stencilFunc(pt,Kt,Yt),_e=pt,qe=Kt,Te=Yt)},setOp:function(pt,Kt,Yt){(ve!==pt||We!==Kt||$e!==Yt)&&(s.stencilOp(pt,Kt,Yt),ve=pt,We=Kt,$e=Yt)},setLocked:function(pt){Y=pt},setClear:function(pt){nt!==pt&&(s.clearStencil(pt),nt=pt)},reset:function(){Y=!1,Oe=null,_e=null,qe=null,Te=null,ve=null,We=null,$e=null,nt=null}}}const l=new t,c=new r,f=new o,d=new WeakMap,h=new WeakMap;let g={},x={},m={},_=new WeakMap,S=[],T=null,y=!1,M=null,w=null,P=null,R=null,z=null,I=null,O=null,E=new zt(0,0,0),D=0,K=!1,k=null,j=null,ce=null,re=null,W=null;const te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,N=0;const F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(F)[1]),G=N>=1):F.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),G=N>=2);let $=null,U={};const V=s.getParameter(s.SCISSOR_BOX),Ae=s.getParameter(s.VIEWPORT),Se=new nn().fromArray(V),de=new nn().fromArray(Ae);function X(Y,Oe,_e,qe){const Te=new Uint8Array(4),ve=s.createTexture();s.bindTexture(Y,ve),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<_e;We++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Oe,0,s.RGBA,1,1,qe,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Oe+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return ve}const le={};le[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),se(s.DEPTH_TEST),c.setFunc(xo),lt(!1),mt(Xm),se(s.CULL_FACE),tt(yr);function se(Y){g[Y]!==!0&&(s.enable(Y),g[Y]=!0)}function Me(Y){g[Y]!==!1&&(s.disable(Y),g[Y]=!1)}function be(Y,Oe){return m[Y]!==Oe?(s.bindFramebuffer(Y,Oe),m[Y]=Oe,Y===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Oe),Y===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Oe),!0):!1}function xe(Y,Oe){let _e=S,qe=!1;if(Y){_e=_.get(Oe),_e===void 0&&(_e=[],_.set(Oe,_e));const Te=Y.textures;if(_e.length!==Te.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,We=Te.length;ve<We;ve++)_e[ve]=s.COLOR_ATTACHMENT0+ve;_e.length=Te.length,qe=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,qe=!0);qe&&s.drawBuffers(_e)}function Xe(Y){return T!==Y?(s.useProgram(Y),T=Y,!0):!1}const He={[_s]:s.FUNC_ADD,[M_]:s.FUNC_SUBTRACT,[S_]:s.FUNC_REVERSE_SUBTRACT};He[A_]=s.MIN,He[E_]=s.MAX;const je={[w_]:s.ZERO,[T_]:s.ONE,[b_]:s.SRC_COLOR,[Zf]:s.SRC_ALPHA,[D_]:s.SRC_ALPHA_SATURATE,[L_]:s.DST_COLOR,[R_]:s.DST_ALPHA,[C_]:s.ONE_MINUS_SRC_COLOR,[$f]:s.ONE_MINUS_SRC_ALPHA,[I_]:s.ONE_MINUS_DST_COLOR,[P_]:s.ONE_MINUS_DST_ALPHA,[U_]:s.CONSTANT_COLOR,[N_]:s.ONE_MINUS_CONSTANT_COLOR,[F_]:s.CONSTANT_ALPHA,[O_]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(Y,Oe,_e,qe,Te,ve,We,$e,nt,pt){if(Y===yr){y===!0&&(Me(s.BLEND),y=!1);return}if(y===!1&&(se(s.BLEND),y=!0),Y!==y_){if(Y!==M||pt!==K){if((w!==_s||z!==_s)&&(s.blendEquation(s.FUNC_ADD),w=_s,z=_s),pt)switch(Y){case go:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jm:s.blendFunc(s.ONE,s.ONE);break;case Km:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Bt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case go:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Km:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qm:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",Y);break}P=null,R=null,I=null,O=null,E.set(0,0,0),D=0,M=Y,K=pt}return}Te=Te||Oe,ve=ve||_e,We=We||qe,(Oe!==w||Te!==z)&&(s.blendEquationSeparate(He[Oe],He[Te]),w=Oe,z=Te),(_e!==P||qe!==R||ve!==I||We!==O)&&(s.blendFuncSeparate(je[_e],je[qe],je[ve],je[We]),P=_e,R=qe,I=ve,O=We),($e.equals(E)===!1||nt!==D)&&(s.blendColor($e.r,$e.g,$e.b,nt),E.copy($e),D=nt),M=Y,K=!1}function ot(Y,Oe){Y.side===zi?Me(s.CULL_FACE):se(s.CULL_FACE);let _e=Y.side===oi;Oe&&(_e=!_e),lt(_e),Y.blending===go&&Y.transparent===!1?tt(yr):tt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const qe=Y.stencilWrite;f.setTest(qe),qe&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),q(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(Y){k!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),k=Y)}function mt(Y){Y!==v_?(se(s.CULL_FACE),Y!==j&&(Y===Xm?s.cullFace(s.BACK):Y===x_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),j=Y}function wt(Y){Y!==ce&&(G&&s.lineWidth(Y),ce=Y)}function q(Y,Oe,_e){Y?(se(s.POLYGON_OFFSET_FILL),(re!==Oe||W!==_e)&&(re=Oe,W=_e,c.getReversed()&&(Oe=-Oe),s.polygonOffset(Oe,_e))):Me(s.POLYGON_OFFSET_FILL)}function Re(Y){Y?se(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function ue(Y){Y===void 0&&(Y=s.TEXTURE0+te-1),$!==Y&&(s.activeTexture(Y),$=Y)}function we(Y,Oe,_e){_e===void 0&&($===null?_e=s.TEXTURE0+te-1:_e=$);let qe=U[_e];qe===void 0&&(qe={type:void 0,texture:void 0},U[_e]=qe),(qe.type!==Y||qe.texture!==Oe)&&($!==_e&&(s.activeTexture(_e),$=_e),s.bindTexture(Y,Oe||le[Y]),qe.type=Y,qe.texture=Oe)}function Ee(){const Y=U[$];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ht(){try{s.compressedTexImage2D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function A(){try{s.texSubImage2D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function ne(){try{s.texSubImage3D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function ye(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function Ce(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function Ie(){try{s.texStorage2D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function Ve(){try{s.texStorage3D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function me(){try{s.texImage2D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function ge(){try{s.texImage3D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function ke(Y){return x[Y]!==void 0?x[Y]:s.getParameter(Y)}function Ke(Y,Oe){x[Y]!==Oe&&(s.pixelStorei(Y,Oe),x[Y]=Oe)}function Ne(Y){Se.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),Se.copy(Y))}function Fe(Y){de.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),de.copy(Y))}function dt(Y,Oe){let _e=h.get(Oe);_e===void 0&&(_e=new WeakMap,h.set(Oe,_e));let qe=_e.get(Y);qe===void 0&&(qe=s.getUniformBlockIndex(Oe,Y.name),_e.set(Y,qe))}function gt(Y,Oe){const qe=h.get(Oe).get(Y);d.get(Oe)!==qe&&(s.uniformBlockBinding(Oe,qe,Y.__bindingPointIndex),d.set(Oe,qe))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},x={},$=null,U={},m={},_=new WeakMap,S=[],T=null,y=!1,M=null,w=null,P=null,R=null,z=null,I=null,O=null,E=new zt(0,0,0),D=0,K=!1,k=null,j=null,ce=null,re=null,W=null,Se.set(0,0,s.canvas.width,s.canvas.height),de.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:se,disable:Me,bindFramebuffer:be,drawBuffers:xe,useProgram:Xe,setBlending:tt,setMaterial:ot,setFlipSided:lt,setCullFace:mt,setLineWidth:wt,setPolygonOffset:q,setScissorTest:Re,activeTexture:ue,bindTexture:we,unbindTexture:Ee,compressedTexImage2D:ht,compressedTexImage3D:L,texImage2D:me,texImage3D:ge,pixelStorei:Ke,getParameter:ke,updateUBOMapping:dt,uniformBlockBinding:gt,texStorage2D:Ie,texStorage3D:Ve,texSubImage2D:A,texSubImage3D:ne,compressedTexSubImage2D:ye,compressedTexSubImage3D:Ce,scissor:Ne,viewport:Fe,reset:Et}}function UE(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ut,g=new WeakMap,x=new Set;let m;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,A){return S?new OffscreenCanvas(L,A):pc("canvas")}function y(L,A,ne){let ye=1;const Ce=ht(L);if((Ce.width>ne||Ce.height>ne)&&(ye=ne/Math.max(Ce.width,Ce.height)),ye<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ie=Math.floor(ye*Ce.width),Ve=Math.floor(ye*Ce.height);m===void 0&&(m=T(Ie,Ve));const me=A?T(Ie,Ve):m;return me.width=Ie,me.height=Ve,me.getContext("2d").drawImage(L,0,0,Ie,Ve),St("WebGLRenderer: Texture has been resized from ("+Ce.width+"x"+Ce.height+") to ("+Ie+"x"+Ve+")."),me}else return"data"in L&&St("WebGLRenderer: Image in DataTexture is too big ("+Ce.width+"x"+Ce.height+")."),L;return L}function M(L){return L.generateMipmaps}function w(L){s.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(L,A,ne,ye,Ce,Ie=!1){if(L!==null){if(s[L]!==void 0)return s[L];St("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ve;ye&&(Ve=e.get("EXT_texture_norm16"),Ve||St("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=A;if(A===s.RED&&(ne===s.FLOAT&&(me=s.R32F),ne===s.HALF_FLOAT&&(me=s.R16F),ne===s.UNSIGNED_BYTE&&(me=s.R8),ne===s.UNSIGNED_SHORT&&Ve&&(me=Ve.R16_EXT),ne===s.SHORT&&Ve&&(me=Ve.R16_SNORM_EXT)),A===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(me=s.R8UI),ne===s.UNSIGNED_SHORT&&(me=s.R16UI),ne===s.UNSIGNED_INT&&(me=s.R32UI),ne===s.BYTE&&(me=s.R8I),ne===s.SHORT&&(me=s.R16I),ne===s.INT&&(me=s.R32I)),A===s.RG&&(ne===s.FLOAT&&(me=s.RG32F),ne===s.HALF_FLOAT&&(me=s.RG16F),ne===s.UNSIGNED_BYTE&&(me=s.RG8),ne===s.UNSIGNED_SHORT&&Ve&&(me=Ve.RG16_EXT),ne===s.SHORT&&Ve&&(me=Ve.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(me=s.RG8UI),ne===s.UNSIGNED_SHORT&&(me=s.RG16UI),ne===s.UNSIGNED_INT&&(me=s.RG32UI),ne===s.BYTE&&(me=s.RG8I),ne===s.SHORT&&(me=s.RG16I),ne===s.INT&&(me=s.RG32I)),A===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(me=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(me=s.RGB16UI),ne===s.UNSIGNED_INT&&(me=s.RGB32UI),ne===s.BYTE&&(me=s.RGB8I),ne===s.SHORT&&(me=s.RGB16I),ne===s.INT&&(me=s.RGB32I)),A===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),ne===s.UNSIGNED_INT&&(me=s.RGBA32UI),ne===s.BYTE&&(me=s.RGBA8I),ne===s.SHORT&&(me=s.RGBA16I),ne===s.INT&&(me=s.RGBA32I)),A===s.RGB&&(ne===s.UNSIGNED_SHORT&&Ve&&(me=Ve.RGB16_EXT),ne===s.SHORT&&Ve&&(me=Ve.RGB16_SNORM_EXT),ne===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),ne===s.UNSIGNED_INT_10F_11F_11F_REV&&(me=s.R11F_G11F_B10F)),A===s.RGBA){const ge=Ie?hc:Nt.getTransfer(Ce);ne===s.FLOAT&&(me=s.RGBA32F),ne===s.HALF_FLOAT&&(me=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(me=ge===jt?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT&&Ve&&(me=Ve.RGBA16_EXT),ne===s.SHORT&&Ve&&(me=Ve.RGBA16_SNORM_EXT),ne===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function z(L,A){let ne;return L?A===null||A===ir||A===ya?ne=s.DEPTH24_STENCIL8:A===Vi?ne=s.DEPTH32F_STENCIL8:A===_a&&(ne=s.DEPTH24_STENCIL8,St("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ir||A===ya?ne=s.DEPTH_COMPONENT24:A===Vi?ne=s.DEPTH_COMPONENT32F:A===_a&&(ne=s.DEPTH_COMPONENT16),ne}function I(L,A){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==gn&&L.minFilter!==Cn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function O(L){const A=L.target;A.removeEventListener("dispose",O),D(A),A.isVideoTexture&&g.delete(A),A.isHTMLTexture&&x.delete(A)}function E(L){const A=L.target;A.removeEventListener("dispose",E),k(A)}function D(L){const A=r.get(L);if(A.__webglInit===void 0)return;const ne=L.source,ye=_.get(ne);if(ye){const Ce=ye[A.__cacheKey];Ce.usedTimes--,Ce.usedTimes===0&&K(L),Object.keys(ye).length===0&&_.delete(ne)}r.remove(L)}function K(L){const A=r.get(L);s.deleteTexture(A.__webglTexture);const ne=L.source,ye=_.get(ne);delete ye[A.__cacheKey],c.memory.textures--}function k(L){const A=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(A.__webglFramebuffer[ye]))for(let Ce=0;Ce<A.__webglFramebuffer[ye].length;Ce++)s.deleteFramebuffer(A.__webglFramebuffer[ye][Ce]);else s.deleteFramebuffer(A.__webglFramebuffer[ye]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ye])}else{if(Array.isArray(A.__webglFramebuffer))for(let ye=0;ye<A.__webglFramebuffer.length;ye++)s.deleteFramebuffer(A.__webglFramebuffer[ye]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ye=0;ye<A.__webglColorRenderbuffer.length;ye++)A.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ye]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ne=L.textures;for(let ye=0,Ce=ne.length;ye<Ce;ye++){const Ie=r.get(ne[ye]);Ie.__webglTexture&&(s.deleteTexture(Ie.__webglTexture),c.memory.textures--),r.remove(ne[ye])}r.remove(L)}let j=0;function ce(){j=0}function re(){return j}function W(L){j=L}function te(){const L=j;return L>=o.maxTextures&&St("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),j+=1,L}function G(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function N(L,A){const ne=r.get(L);if(L.isVideoTexture&&we(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&ne.__version!==L.version){const ye=L.image;if(ye===null)St("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)St("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(ne,L,A);return}}else L.isExternalTexture&&(ne.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+A)}function F(L,A){const ne=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){Me(ne,L,A);return}else L.isExternalTexture&&(ne.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+A)}function $(L,A){const ne=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){Me(ne,L,A);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+A)}function U(L,A){const ne=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&ne.__version!==L.version){be(ne,L,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+A)}const V={[lc]:s.REPEAT,[_r]:s.CLAMP_TO_EDGE,[ah]:s.MIRRORED_REPEAT},Ae={[gn]:s.NEAREST,[z_]:s.NEAREST_MIPMAP_NEAREST,[wl]:s.NEAREST_MIPMAP_LINEAR,[Cn]:s.LINEAR,[af]:s.LINEAR_MIPMAP_NEAREST,[Ms]:s.LINEAR_MIPMAP_LINEAR},Se={[G_]:s.NEVER,[q_]:s.ALWAYS,[W_]:s.LESS,[ed]:s.LEQUAL,[X_]:s.EQUAL,[td]:s.GEQUAL,[j_]:s.GREATER,[K_]:s.NOTEQUAL};function de(L,A){if(A.type===Vi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Cn||A.magFilter===af||A.magFilter===wl||A.magFilter===Ms||A.minFilter===Cn||A.minFilter===af||A.minFilter===wl||A.minFilter===Ms)&&St("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,V[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,V[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,V[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Ae[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Ae[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Se[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===gn||A.minFilter!==wl&&A.minFilter!==Ms||A.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function X(L,A){let ne=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",O));const ye=A.source;let Ce=_.get(ye);Ce===void 0&&(Ce={},_.set(ye,Ce));const Ie=G(A);if(Ie!==L.__cacheKey){Ce[Ie]===void 0&&(Ce[Ie]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ne=!0),Ce[Ie].usedTimes++;const Ve=Ce[L.__cacheKey];Ve!==void 0&&(Ce[L.__cacheKey].usedTimes--,Ve.usedTimes===0&&K(A)),L.__cacheKey=Ie,L.__webglTexture=Ce[Ie].texture}return ne}function le(L,A,ne){return Math.floor(Math.floor(L/ne)/A)}function se(L,A,ne,ye){const Ie=L.updateRanges;if(Ie.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,ne,ye,A.data);else{Ie.sort((Ke,Ne)=>Ke.start-Ne.start);let Ve=0;for(let Ke=1;Ke<Ie.length;Ke++){const Ne=Ie[Ve],Fe=Ie[Ke],dt=Ne.start+Ne.count,gt=le(Fe.start,A.width,4),Et=le(Ne.start,A.width,4);Fe.start<=dt+1&&gt===Et&&le(Fe.start+Fe.count-1,A.width,4)===gt?Ne.count=Math.max(Ne.count,Fe.start+Fe.count-Ne.start):(++Ve,Ie[Ve]=Fe)}Ie.length=Ve+1;const me=t.getParameter(s.UNPACK_ROW_LENGTH),ge=t.getParameter(s.UNPACK_SKIP_PIXELS),ke=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Ke=0,Ne=Ie.length;Ke<Ne;Ke++){const Fe=Ie[Ke],dt=Math.floor(Fe.start/4),gt=Math.ceil(Fe.count/4),Et=dt%A.width,Y=Math.floor(dt/A.width),Oe=gt,_e=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Et),t.pixelStorei(s.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(s.TEXTURE_2D,0,Et,Y,Oe,_e,ne,ye,A.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,me),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(s.UNPACK_SKIP_ROWS,ke)}}function Me(L,A,ne){let ye=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ye=s.TEXTURE_3D);const Ce=X(L,A),Ie=A.source;t.bindTexture(ye,L.__webglTexture,s.TEXTURE0+ne);const Ve=r.get(Ie);if(Ie.version!==Ve.__version||Ce===!0){if(t.activeTexture(s.TEXTURE0+ne),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const _e=Nt.getPrimaries(Nt.workingColorSpace),qe=A.colorSpace===Jr?null:Nt.getPrimaries(A.colorSpace),Te=A.colorSpace===Jr||_e===qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let ge=y(A.image,!1,o.maxTextureSize);ge=Ee(A,ge);const ke=l.convert(A.format,A.colorSpace),Ke=l.convert(A.type);let Ne=R(A.internalFormat,ke,Ke,A.normalized,A.colorSpace,A.isVideoTexture);de(ye,A);let Fe;const dt=A.mipmaps,gt=A.isVideoTexture!==!0,Et=Ve.__version===void 0||Ce===!0,Y=Ie.dataReady,Oe=I(A,ge);if(A.isDepthTexture)Ne=z(A.format===Ss,A.type),Et&&(gt?t.texStorage2D(s.TEXTURE_2D,1,Ne,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,Ne,ge.width,ge.height,0,ke,Ke,null));else if(A.isDataTexture)if(dt.length>0){gt&&Et&&t.texStorage2D(s.TEXTURE_2D,Oe,Ne,dt[0].width,dt[0].height);for(let _e=0,qe=dt.length;_e<qe;_e++)Fe=dt[_e],gt?Y&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Fe.width,Fe.height,ke,Ke,Fe.data):t.texImage2D(s.TEXTURE_2D,_e,Ne,Fe.width,Fe.height,0,ke,Ke,Fe.data);A.generateMipmaps=!1}else gt?(Et&&t.texStorage2D(s.TEXTURE_2D,Oe,Ne,ge.width,ge.height),Y&&se(A,ge,ke,Ke)):t.texImage2D(s.TEXTURE_2D,0,Ne,ge.width,ge.height,0,ke,Ke,ge.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){gt&&Et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,Ne,dt[0].width,dt[0].height,ge.depth);for(let _e=0,qe=dt.length;_e<qe;_e++)if(Fe=dt[_e],A.format!==bi)if(ke!==null)if(gt){if(Y)if(A.layerUpdates.size>0){const Te=R0(Fe.width,Fe.height,A.format,A.type);for(const ve of A.layerUpdates){const We=Fe.data.subarray(ve*Te/Fe.data.BYTES_PER_ELEMENT,(ve+1)*Te/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,ve,Fe.width,Fe.height,1,ke,We)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Fe.width,Fe.height,ge.depth,ke,Fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,Ne,Fe.width,Fe.height,ge.depth,0,Fe.data,0,0);else St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?Y&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Fe.width,Fe.height,ge.depth,ke,Ke,Fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_e,Ne,Fe.width,Fe.height,ge.depth,0,ke,Ke,Fe.data)}else{gt&&Et&&t.texStorage2D(s.TEXTURE_2D,Oe,Ne,dt[0].width,dt[0].height);for(let _e=0,qe=dt.length;_e<qe;_e++)Fe=dt[_e],A.format!==bi?ke!==null?gt?Y&&t.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,Fe.width,Fe.height,ke,Fe.data):t.compressedTexImage2D(s.TEXTURE_2D,_e,Ne,Fe.width,Fe.height,0,Fe.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?Y&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Fe.width,Fe.height,ke,Ke,Fe.data):t.texImage2D(s.TEXTURE_2D,_e,Ne,Fe.width,Fe.height,0,ke,Ke,Fe.data)}else if(A.isDataArrayTexture)if(gt){if(Et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,Ne,ge.width,ge.height,ge.depth),Y)if(A.layerUpdates.size>0){const _e=R0(ge.width,ge.height,A.format,A.type);for(const qe of A.layerUpdates){const Te=ge.data.subarray(qe*_e/ge.data.BYTES_PER_ELEMENT,(qe+1)*_e/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,qe,ge.width,ge.height,1,ke,Ke,Te)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,ke,Ke,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,ge.width,ge.height,ge.depth,0,ke,Ke,ge.data);else if(A.isData3DTexture)gt?(Et&&t.texStorage3D(s.TEXTURE_3D,Oe,Ne,ge.width,ge.height,ge.depth),Y&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,ke,Ke,ge.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,ge.width,ge.height,ge.depth,0,ke,Ke,ge.data);else if(A.isFramebufferTexture){if(Et)if(gt)t.texStorage2D(s.TEXTURE_2D,Oe,Ne,ge.width,ge.height);else{let _e=ge.width,qe=ge.height;for(let Te=0;Te<Oe;Te++)t.texImage2D(s.TEXTURE_2D,Te,Ne,_e,qe,0,ke,Ke,null),_e>>=1,qe>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){const _e=s.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ge.parentNode!==_e){_e.appendChild(ge),x.add(A),_e.onpaint=$e=>{const nt=$e.changedElements;for(const pt of x)nt.includes(pt.image)&&(pt.needsUpdate=!0)},_e.requestPaint();return}const qe=0,Te=s.RGBA,ve=s.RGBA,We=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,qe,Te,ve,We,ge),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(dt.length>0){if(gt&&Et){const _e=ht(dt[0]);t.texStorage2D(s.TEXTURE_2D,Oe,Ne,_e.width,_e.height)}for(let _e=0,qe=dt.length;_e<qe;_e++)Fe=dt[_e],gt?Y&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,ke,Ke,Fe):t.texImage2D(s.TEXTURE_2D,_e,Ne,ke,Ke,Fe);A.generateMipmaps=!1}else if(gt){if(Et){const _e=ht(ge);t.texStorage2D(s.TEXTURE_2D,Oe,Ne,_e.width,_e.height)}Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,Ke,ge)}else t.texImage2D(s.TEXTURE_2D,0,Ne,ke,Ke,ge);M(A)&&w(ye),Ve.__version=Ie.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function be(L,A,ne){if(A.image.length!==6)return;const ye=X(L,A),Ce=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+ne);const Ie=r.get(Ce);if(Ce.version!==Ie.__version||ye===!0){t.activeTexture(s.TEXTURE0+ne);const Ve=Nt.getPrimaries(Nt.workingColorSpace),me=A.colorSpace===Jr?null:Nt.getPrimaries(A.colorSpace),ge=A.colorSpace===Jr||Ve===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ke=A.isCompressedTexture||A.image[0].isCompressedTexture,Ke=A.image[0]&&A.image[0].isDataTexture,Ne=[];for(let ve=0;ve<6;ve++)!ke&&!Ke?Ne[ve]=y(A.image[ve],!0,o.maxCubemapSize):Ne[ve]=Ke?A.image[ve].image:A.image[ve],Ne[ve]=Ee(A,Ne[ve]);const Fe=Ne[0],dt=l.convert(A.format,A.colorSpace),gt=l.convert(A.type),Et=R(A.internalFormat,dt,gt,A.normalized,A.colorSpace),Y=A.isVideoTexture!==!0,Oe=Ie.__version===void 0||ye===!0,_e=Ce.dataReady;let qe=I(A,Fe);de(s.TEXTURE_CUBE_MAP,A);let Te;if(ke){Y&&Oe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,qe,Et,Fe.width,Fe.height);for(let ve=0;ve<6;ve++){Te=Ne[ve].mipmaps;for(let We=0;We<Te.length;We++){const $e=Te[We];A.format!==bi?dt!==null?Y?_e&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,0,0,$e.width,$e.height,dt,$e.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,Et,$e.width,$e.height,0,$e.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,0,0,$e.width,$e.height,dt,gt,$e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,Et,$e.width,$e.height,0,dt,gt,$e.data)}}}else{if(Te=A.mipmaps,Y&&Oe){Te.length>0&&qe++;const ve=ht(Ne[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,qe,Et,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ke){Y?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ne[ve].width,Ne[ve].height,dt,gt,Ne[ve].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Et,Ne[ve].width,Ne[ve].height,0,dt,gt,Ne[ve].data);for(let We=0;We<Te.length;We++){const nt=Te[We].image[ve].image;Y?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,0,0,nt.width,nt.height,dt,gt,nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,Et,nt.width,nt.height,0,dt,gt,nt.data)}}else{Y?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,dt,gt,Ne[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Et,dt,gt,Ne[ve]);for(let We=0;We<Te.length;We++){const $e=Te[We];Y?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,0,0,dt,gt,$e.image[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,Et,dt,gt,$e.image[ve])}}}M(A)&&w(s.TEXTURE_CUBE_MAP),Ie.__version=Ce.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function xe(L,A,ne,ye,Ce,Ie){const Ve=l.convert(ne.format,ne.colorSpace),me=l.convert(ne.type),ge=R(ne.internalFormat,Ve,me,ne.normalized,ne.colorSpace),ke=r.get(A),Ke=r.get(ne);if(Ke.__renderTarget=A,!ke.__hasExternalTextures){const Ne=Math.max(1,A.width>>Ie),Fe=Math.max(1,A.height>>Ie);Ce===s.TEXTURE_3D||Ce===s.TEXTURE_2D_ARRAY?t.texImage3D(Ce,Ie,ge,Ne,Fe,A.depth,0,Ve,me,null):t.texImage2D(Ce,Ie,ge,Ne,Fe,0,Ve,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ue(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,Ce,Ke.__webglTexture,0,Re(A)):(Ce===s.TEXTURE_2D||Ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,Ce,Ke.__webglTexture,Ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(L,A,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){const ye=A.depthTexture,Ce=ye&&ye.isDepthTexture?ye.type:null,Ie=z(A.stencilBuffer,Ce),Ve=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ue(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re(A),Ie,A.width,A.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re(A),Ie,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,L)}else{const ye=A.textures;for(let Ce=0;Ce<ye.length;Ce++){const Ie=ye[Ce],Ve=l.convert(Ie.format,Ie.colorSpace),me=l.convert(Ie.type),ge=R(Ie.internalFormat,Ve,me,Ie.normalized,Ie.colorSpace);ue(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re(A),ge,A.width,A.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re(A),ge,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ge,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function He(L,A,ne){const ye=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ce=r.get(A.depthTexture);if(Ce.__renderTarget=A,(!Ce.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ye){if(Ce.__webglInit===void 0&&(Ce.__webglInit=!0,A.depthTexture.addEventListener("dispose",O)),Ce.__webglTexture===void 0){Ce.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Ce.__webglTexture),de(s.TEXTURE_CUBE_MAP,A.depthTexture);const ke=l.convert(A.depthTexture.format),Ke=l.convert(A.depthTexture.type);let Ne;A.depthTexture.format===Ar?Ne=s.DEPTH_COMPONENT24:A.depthTexture.format===Ss&&(Ne=s.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ne,A.width,A.height,0,ke,Ke,null)}}else N(A.depthTexture,0);const Ie=Ce.__webglTexture,Ve=Re(A),me=ye?s.TEXTURE_CUBE_MAP_POSITIVE_X+ne:s.TEXTURE_2D,ge=A.depthTexture.format===Ss?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ar)ue(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,me,Ie,0,Ve):s.framebufferTexture2D(s.FRAMEBUFFER,ge,me,Ie,0);else if(A.depthTexture.format===Ss)ue(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,me,Ie,0,Ve):s.framebufferTexture2D(s.FRAMEBUFFER,ge,me,Ie,0);else throw new Error("Unknown depthTexture format")}function je(L){const A=r.get(L),ne=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const ye=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ye){const Ce=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ye.removeEventListener("dispose",Ce)};ye.addEventListener("dispose",Ce),A.__depthDisposeCallback=Ce}A.__boundDepthTexture=ye}if(L.depthTexture&&!A.__autoAllocateDepthBuffer)if(ne)for(let ye=0;ye<6;ye++)He(A.__webglFramebuffer[ye],L,ye);else{const ye=L.texture.mipmaps;ye&&ye.length>0?He(A.__webglFramebuffer[0],L,0):He(A.__webglFramebuffer,L,0)}else if(ne){A.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ye]),A.__webglDepthbuffer[ye]===void 0)A.__webglDepthbuffer[ye]=s.createRenderbuffer(),Xe(A.__webglDepthbuffer[ye],L,!1);else{const Ce=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=A.__webglDepthbuffer[ye];s.bindRenderbuffer(s.RENDERBUFFER,Ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ce,s.RENDERBUFFER,Ie)}}else{const ye=L.texture.mipmaps;if(ye&&ye.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Xe(A.__webglDepthbuffer,L,!1);else{const Ce=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ce,s.RENDERBUFFER,Ie)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(L,A,ne){const ye=r.get(L);A!==void 0&&xe(ye.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&je(L)}function ot(L){const A=L.texture,ne=r.get(L),ye=r.get(A);L.addEventListener("dispose",E);const Ce=L.textures,Ie=L.isWebGLCubeRenderTarget===!0,Ve=Ce.length>1;if(Ve||(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=A.version,c.memory.textures++),Ie){ne.__webglFramebuffer=[];for(let me=0;me<6;me++)if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer[me]=[];for(let ge=0;ge<A.mipmaps.length;ge++)ne.__webglFramebuffer[me][ge]=s.createFramebuffer()}else ne.__webglFramebuffer[me]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer=[];for(let me=0;me<A.mipmaps.length;me++)ne.__webglFramebuffer[me]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let me=0,ge=Ce.length;me<ge;me++){const ke=r.get(Ce[me]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&ue(L)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let me=0;me<Ce.length;me++){const ge=Ce[me];ne.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[me]);const ke=l.convert(ge.format,ge.colorSpace),Ke=l.convert(ge.type),Ne=R(ge.internalFormat,ke,Ke,ge.normalized,ge.colorSpace,L.isXRRenderTarget===!0),Fe=Re(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Ne,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,ne.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(ne.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ie){t.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),de(s.TEXTURE_CUBE_MAP,A);for(let me=0;me<6;me++)if(A.mipmaps&&A.mipmaps.length>0)for(let ge=0;ge<A.mipmaps.length;ge++)xe(ne.__webglFramebuffer[me][ge],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ge);else xe(ne.__webglFramebuffer[me],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);M(A)&&w(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let me=0,ge=Ce.length;me<ge;me++){const ke=Ce[me],Ke=r.get(ke);let Ne=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ne=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Ke.__webglTexture),de(Ne,ke),xe(ne.__webglFramebuffer,L,ke,s.COLOR_ATTACHMENT0+me,Ne,0),M(ke)&&w(Ne)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(me=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,ye.__webglTexture),de(me,A),A.mipmaps&&A.mipmaps.length>0)for(let ge=0;ge<A.mipmaps.length;ge++)xe(ne.__webglFramebuffer[ge],L,A,s.COLOR_ATTACHMENT0,me,ge);else xe(ne.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,me,0);M(A)&&w(me),t.unbindTexture()}L.depthBuffer&&je(L)}function lt(L){const A=L.textures;for(let ne=0,ye=A.length;ne<ye;ne++){const Ce=A[ne];if(M(Ce)){const Ie=P(L),Ve=r.get(Ce).__webglTexture;t.bindTexture(Ie,Ve),w(Ie),t.unbindTexture()}}}const mt=[],wt=[];function q(L){if(L.samples>0){if(ue(L)===!1){const A=L.textures,ne=L.width,ye=L.height;let Ce=s.COLOR_BUFFER_BIT;const Ie=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(L),me=A.length>1;if(me)for(let ke=0;ke<A.length;ke++)t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const ge=L.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let ke=0;ke<A.length;ke++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Ce|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Ce|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[ke]);const Ke=r.get(A[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,ne,ye,0,0,ne,ye,Ce,s.NEAREST),d===!0&&(mt.length=0,wt.length=0,mt.push(s.COLOR_ATTACHMENT0+ke),L.depthBuffer&&L.resolveDepthBuffer===!1&&(mt.push(Ie),wt.push(Ie),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,wt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let ke=0;ke<A.length;ke++){t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[ke]);const Ke=r.get(A[ke]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,Ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Re(L){return Math.min(o.maxSamples,L.samples)}function ue(L){const A=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function we(L){const A=c.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function Ee(L,A){const ne=L.colorSpace,ye=L.format,Ce=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ne!==fc&&ne!==Jr&&(Nt.getTransfer(ne)===jt?(ye!==bi||Ce!==Ti)&&St("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",ne)),A}function ht(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=te,this.resetTextureUnits=ce,this.getTextureUnits=re,this.setTextureUnits=W,this.setTexture2D=N,this.setTexture2DArray=F,this.setTexture3D=$,this.setTextureCube=U,this.rebindTextures=tt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function NE(s,e){function t(r,o=Jr){let l;const c=Nt.getTransfer(o);if(r===Ti)return s.UNSIGNED_BYTE;if(r===Yh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Qh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Gg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Wg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Hg)return s.BYTE;if(r===Vg)return s.SHORT;if(r===_a)return s.UNSIGNED_SHORT;if(r===qh)return s.INT;if(r===ir)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===Sr)return s.HALF_FLOAT;if(r===Xg)return s.ALPHA;if(r===jg)return s.RGB;if(r===bi)return s.RGBA;if(r===Ar)return s.DEPTH_COMPONENT;if(r===Ss)return s.DEPTH_STENCIL;if(r===Kg)return s.RED;if(r===Jh)return s.RED_INTEGER;if(r===Es)return s.RG;if(r===Zh)return s.RG_INTEGER;if(r===$h)return s.RGBA_INTEGER;if(r===tc||r===nc||r===ic||r===rc)if(c===jt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===tc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ic)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===tc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ic)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===rc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lh||r===ch||r===uh||r===fh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===lh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ch)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hh||r===dh||r===ph||r===mh||r===gh||r===cc||r===vh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===hh||r===dh)return c===jt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===ph)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===mh)return l.COMPRESSED_R11_EAC;if(r===gh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===cc)return l.COMPRESSED_RG11_EAC;if(r===vh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===xh||r===_h||r===yh||r===Mh||r===Sh||r===Ah||r===Eh||r===wh||r===Th||r===bh||r===Ch||r===Rh||r===Ph||r===Lh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===xh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_h)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ah)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Eh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Th)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ch)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ph)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Lh)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ih||r===Dh||r===Uh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ih)return c===jt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Dh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Uh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nh||r===Fh||r===uc||r===Oh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Nh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Fh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Oh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ya?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const FE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OE=`
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

}`;class kE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new ov(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new mi({vertexShader:FE,fragmentShader:OE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new Mc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BE extends bs{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",d=1,h=null,g=null,x=null,m=null,_=null,S=null;const T=typeof XRWebGLBinding<"u",y=new kE,M={},w=t.getContextAttributes();let P=null,R=null;const z=[],I=[],O=new Ut;let E=null;const D=new si;D.viewport=new nn;const K=new si;K.viewport=new nn;const k=[D,K],j=new Yy;let ce=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let le=z[X];return le===void 0&&(le=new pf,z[X]=le),le.getTargetRaySpace()},this.getControllerGrip=function(X){let le=z[X];return le===void 0&&(le=new pf,z[X]=le),le.getGripSpace()},this.getHand=function(X){let le=z[X];return le===void 0&&(le=new pf,z[X]=le),le.getHandSpace()};function W(X){const le=I.indexOf(X.inputSource);if(le===-1)return;const se=z[le];se!==void 0&&(se.update(X.inputSource,X.frame,h||c),se.dispatchEvent({type:X.type,data:X.inputSource}))}function te(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",G);for(let X=0;X<z.length;X++){const le=I[X];le!==null&&(I[X]=null,z[X].disconnect(le))}ce=null,re=null,y.reset();for(const X in M)delete M[X];e.setRenderTarget(P),_=null,m=null,x=null,o=null,R=null,de.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){l=X,r.isPresenting===!0&&St("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){f=X,r.isPresenting===!0&&St("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return x===null&&T&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",te),o.addEventListener("inputsourceschange",G),w.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Me=null,be=null;w.depth&&(be=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=w.stencil?Ss:Ar,Me=w.stencil?ya:ir);const xe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:l};x=this.getBinding(),m=x.createProjectionLayer(xe),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),R=new nr(m.textureWidth,m.textureHeight,{format:bi,type:Ti,depthTexture:new yo(m.textureWidth,m.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const se={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:l};_=new XRWebGLLayer(o,t,se),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new nr(_.framebufferWidth,_.framebufferHeight,{format:bi,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(f),de.setContext(o),de.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(X){for(let le=0;le<X.removed.length;le++){const se=X.removed[le],Me=I.indexOf(se);Me>=0&&(I[Me]=null,z[Me].disconnect(se))}for(let le=0;le<X.added.length;le++){const se=X.added[le];let Me=I.indexOf(se);if(Me===-1){for(let xe=0;xe<z.length;xe++)if(xe>=I.length){I.push(se),Me=xe;break}else if(I[xe]===null){I[xe]=se,Me=xe;break}if(Me===-1)break}const be=z[Me];be&&be.connect(se)}}const N=new Q,F=new Q;function $(X,le,se){N.setFromMatrixPosition(le.matrixWorld),F.setFromMatrixPosition(se.matrixWorld);const Me=N.distanceTo(F),be=le.projectionMatrix.elements,xe=se.projectionMatrix.elements,Xe=be[14]/(be[10]-1),He=be[14]/(be[10]+1),je=(be[9]+1)/be[5],tt=(be[9]-1)/be[5],ot=(be[8]-1)/be[0],lt=(xe[8]+1)/xe[0],mt=Xe*ot,wt=Xe*lt,q=Me/(-ot+lt),Re=q*-ot;if(le.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Re),X.translateZ(q),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),be[10]===-1)X.projectionMatrix.copy(le.projectionMatrix),X.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const ue=Xe+q,we=He+q,Ee=mt-Re,ht=wt+(Me-Re),L=je*He/we*ue,A=tt*He/we*ue;X.projectionMatrix.makePerspective(Ee,ht,L,A,ue,we),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function U(X,le){le===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(le.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let le=X.near,se=X.far;y.texture!==null&&(y.depthNear>0&&(le=y.depthNear),y.depthFar>0&&(se=y.depthFar)),j.near=K.near=D.near=le,j.far=K.far=D.far=se,(ce!==j.near||re!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),ce=j.near,re=j.far),j.layers.mask=X.layers.mask|6,D.layers.mask=j.layers.mask&-5,K.layers.mask=j.layers.mask&-3;const Me=X.parent,be=j.cameras;U(j,Me);for(let xe=0;xe<be.length;xe++)U(be[xe],Me);be.length===2?$(j,D,K):j.projectionMatrix.copy(D.projectionMatrix),V(X,j,Me)};function V(X,le,se){se===null?X.matrix.copy(le.matrixWorld):(X.matrix.copy(se.matrixWorld),X.matrix.invert(),X.matrix.multiply(le.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(le.projectionMatrix),X.projectionMatrixInverse.copy(le.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ma*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(m===null&&_===null))return d},this.setFoveation=function(X){d=X,m!==null&&(m.fixedFoveation=X),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(X){return M[X]};let Ae=null;function Se(X,le){if(g=le.getViewerPose(h||c),S=le,g!==null){const se=g.views;_!==null&&(e.setRenderTargetFramebuffer(R,_.framebuffer),e.setRenderTarget(R));let Me=!1;se.length!==j.cameras.length&&(j.cameras.length=0,Me=!0);for(let He=0;He<se.length;He++){const je=se[He];let tt=null;if(_!==null)tt=_.getViewport(je);else{const lt=x.getViewSubImage(m,je);tt=lt.viewport,He===0&&(e.setRenderTargetTextures(R,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(R))}let ot=k[He];ot===void 0&&(ot=new si,ot.layers.enable(He),ot.viewport=new nn,k[He]=ot),ot.matrix.fromArray(je.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(je.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(tt.x,tt.y,tt.width,tt.height),He===0&&(j.matrix.copy(ot.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Me===!0&&j.cameras.push(ot)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){x=r.getBinding();const He=x.getDepthInformation(se[0]);He&&He.isValid&&He.texture&&y.init(He,o.renderState)}if(be&&be.includes("camera-access")&&T){e.state.unbindTexture(),x=r.getBinding();for(let He=0;He<se.length;He++){const je=se[He].camera;if(je){let tt=M[je];tt||(tt=new ov,M[je]=tt);const ot=x.getCameraImage(je);tt.sourceTexture=ot}}}}for(let se=0;se<z.length;se++){const Me=I[se],be=z[se];Me!==null&&be!==void 0&&be.update(Me,le,h||c)}Ae&&Ae(X,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),S=null}const de=new cv;de.setAnimationLoop(Se),this.setAnimationLoop=function(X){Ae=X},this.dispose=function(){}}}const zE=new on,gv=new bt;gv.set(-1,0,0,0,1,0,0,0,1);function HE(s,e){function t(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,av(s)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,w,P,R){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?l(y,M):M.isMeshLambertMaterial?(l(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(l(y,M),x(y,M)):M.isMeshPhongMaterial?(l(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(l(y,M),m(y,M),M.isMeshPhysicalMaterial&&_(y,M,R)):M.isMeshMatcapMaterial?(l(y,M),S(y,M)):M.isMeshDepthMaterial?l(y,M):M.isMeshDistanceMaterial?(l(y,M),T(y,M)):M.isMeshNormalMaterial?l(y,M):M.isLineBasicMaterial?(c(y,M),M.isLineDashedMaterial&&f(y,M)):M.isPointsMaterial?d(y,M,w,P):M.isSpriteMaterial?h(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function l(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,t(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===oi&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,t(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===oi&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,t(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,t(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,t(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const w=e.get(M),P=w.envMap,R=w.envMapRotation;P&&(y.envMap.value=P,y.envMapRotation.value.setFromMatrix4(zE.makeRotationFromEuler(R)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(gv),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,t(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,t(M.aoMap,y.aoMapTransform))}function c(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform))}function f(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function d(y,M,w,P){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*w,y.scale.value=P*.5,M.map&&(y.map.value=M.map,t(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function h(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function x(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function m(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,t(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,t(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function _(y,M,w){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,t(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,t(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,t(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,t(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,t(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===oi&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,t(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,t(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,t(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,t(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,t(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,t(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,t(M.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,M){M.matcap&&(y.matcap.value=M.matcap)}function T(y,M){const w=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function VE(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(w,P){const R=P.program;r.uniformBlockBinding(w,R)}function h(w,P){let R=o[w.id];R===void 0&&(S(w),R=g(w),o[w.id]=R,w.addEventListener("dispose",y));const z=P.program;r.updateUBOMapping(w,z);const I=e.render.frame;l[w.id]!==I&&(m(w),l[w.id]=I)}function g(w){const P=x();w.__bindingPointIndex=P;const R=s.createBuffer(),z=w.__size,I=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,z,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,R),R}function x(){for(let w=0;w<f;w++)if(c.indexOf(w)===-1)return c.push(w),w;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(w){const P=o[w.id],R=w.uniforms,z=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let I=0,O=R.length;I<O;I++){const E=Array.isArray(R[I])?R[I]:[R[I]];for(let D=0,K=E.length;D<K;D++){const k=E[D];if(_(k,I,D,z)===!0){const j=k.__offset,ce=Array.isArray(k.value)?k.value:[k.value];let re=0;for(let W=0;W<ce.length;W++){const te=ce[W],G=T(te);typeof te=="number"||typeof te=="boolean"?(k.__data[0]=te,s.bufferSubData(s.UNIFORM_BUFFER,j+re,k.__data)):te.isMatrix3?(k.__data[0]=te.elements[0],k.__data[1]=te.elements[1],k.__data[2]=te.elements[2],k.__data[3]=0,k.__data[4]=te.elements[3],k.__data[5]=te.elements[4],k.__data[6]=te.elements[5],k.__data[7]=0,k.__data[8]=te.elements[6],k.__data[9]=te.elements[7],k.__data[10]=te.elements[8],k.__data[11]=0):ArrayBuffer.isView(te)?k.__data.set(new te.constructor(te.buffer,te.byteOffset,k.__data.length)):(te.toArray(k.__data,re),re+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(w,P,R,z){const I=w.value,O=P+"_"+R;if(z[O]===void 0)return typeof I=="number"||typeof I=="boolean"?z[O]=I:ArrayBuffer.isView(I)?z[O]=I.slice():z[O]=I.clone(),!0;{const E=z[O];if(typeof I=="number"||typeof I=="boolean"){if(E!==I)return z[O]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(E.equals(I)===!1)return E.copy(I),!0}}return!1}function S(w){const P=w.uniforms;let R=0;const z=16;for(let O=0,E=P.length;O<E;O++){const D=Array.isArray(P[O])?P[O]:[P[O]];for(let K=0,k=D.length;K<k;K++){const j=D[K],ce=Array.isArray(j.value)?j.value:[j.value];for(let re=0,W=ce.length;re<W;re++){const te=ce[re],G=T(te),N=R%z,F=N%G.boundary,$=N+F;R+=F,$!==0&&z-$<G.storage&&(R+=z-$),j.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=R,R+=G.storage}}}const I=R%z;return I>0&&(R+=z-I),w.__size=R,w.__cache={},this}function T(w){const P={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(P.boundary=4,P.storage=4):w.isVector2?(P.boundary=8,P.storage=8):w.isVector3||w.isColor?(P.boundary=16,P.storage=12):w.isVector4?(P.boundary=16,P.storage=16):w.isMatrix3?(P.boundary=48,P.storage=48):w.isMatrix4?(P.boundary=64,P.storage=64):w.isTexture?St("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(P.boundary=16,P.storage=w.byteLength):St("WebGLRenderer: Unsupported uniform value type.",w),P}function y(w){const P=w.target;P.removeEventListener("dispose",y);const R=c.indexOf(P.__bindingPointIndex);c.splice(R,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function M(){for(const w in o)s.deleteBuffer(o[w]);c=[],o={},l={}}return{bind:d,update:h,dispose:M}}const GE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function WE(){return Ji===null&&(Ji=new tv(GE,16,16,Es,Sr),Ji.name="DFG_LUT",Ji.minFilter=Cn,Ji.magFilter=Cn,Ji.wrapS=_r,Ji.wrapT=_r,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class vv{constructor(e={}){const{canvas:t=Q_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:m=!1,outputBufferType:_=Ti}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const T=_,y=new Set([$h,Zh,Jh]),M=new Set([Ti,ir,_a,ya,Yh,Qh]),w=new Uint32Array(4),P=new Int32Array(4),R=new Q;let z=null,I=null;const O=[],E=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const K=this;let k=!1,j=null;this._outputColorSpace=wi;let ce=0,re=0,W=null,te=-1,G=null;const N=new nn,F=new nn;let $=null;const U=new zt(0);let V=0,Ae=t.width,Se=t.height,de=1,X=null,le=null;const se=new nn(0,0,Ae,Se),Me=new nn(0,0,Ae,Se);let be=!1;const xe=new nv;let Xe=!1,He=!1;const je=new on,tt=new Q,ot=new nn,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function wt(){return W===null?de:1}let q=r;function Re(C,Z){return t.getContext(C,Z)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kh}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",$e,!1),q===null){const Z="webgl2";if(q=Re(Z,C),q===null)throw Re(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Bt("WebGLRenderer: "+C.message),C}let ue,we,Ee,ht,L,A,ne,ye,Ce,Ie,Ve,me,ge,ke,Ke,Ne,Fe,dt,gt,Et,Y,Oe,_e;function qe(){ue=new W1(q),ue.init(),Y=new NE(q,ue),we=new F1(q,ue,e,Y),Ee=new DE(q,ue),we.reversedDepthBuffer&&m&&Ee.buffers.depth.setReversed(!0),ht=new K1(q),L=new _E,A=new UE(q,ue,Ee,L,we,Y,ht),ne=new G1(K),ye=new Jy(q),Oe=new U1(q,ye),Ce=new X1(q,ye,ht,Oe),Ie=new Y1(q,Ce,ye,Oe,ht),dt=new q1(q,we,A),Ke=new O1(L),Ve=new xE(K,ne,ue,we,Oe,Ke),me=new HE(K,L),ge=new ME,ke=new bE(ue),Fe=new D1(K,ne,Ee,Ie,S,d),Ne=new IE(K,Ie,we),_e=new VE(q,ht,we,Ee),gt=new N1(q,ue,ht),Et=new j1(q,ue,ht),ht.programs=Ve.programs,K.capabilities=we,K.extensions=ue,K.properties=L,K.renderLists=ge,K.shadowMap=Ne,K.state=Ee,K.info=ht}qe(),T!==Ti&&(D=new J1(T,t.width,t.height,o,l));const Te=new BE(K,q);this.xr=Te,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const C=ue.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ue.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(C){C!==void 0&&(de=C,this.setSize(Ae,Se,!1))},this.getSize=function(C){return C.set(Ae,Se)},this.setSize=function(C,Z,fe=!0){if(Te.isPresenting){St("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=C,Se=Z,t.width=Math.floor(C*de),t.height=Math.floor(Z*de),fe===!0&&(t.style.width=C+"px",t.style.height=Z+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(Ae*de,Se*de).floor()},this.setDrawingBufferSize=function(C,Z,fe){Ae=C,Se=Z,de=fe,t.width=Math.floor(C*fe),t.height=Math.floor(Z*fe),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(T===Ti){Bt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){St("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(se)},this.setViewport=function(C,Z,fe,ie){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,Z,fe,ie),Ee.viewport(N.copy(se).multiplyScalar(de).round())},this.getScissor=function(C){return C.copy(Me)},this.setScissor=function(C,Z,fe,ie){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,Z,fe,ie),Ee.scissor(F.copy(Me).multiplyScalar(de).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(C){Ee.setScissorTest(be=C)},this.setOpaqueSort=function(C){X=C},this.setTransparentSort=function(C){le=C},this.getClearColor=function(C){return C.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,fe=!0){let ie=0;if(C){let oe=!1;if(W!==null){const Be=W.texture.format;oe=y.has(Be)}if(oe){const Be=W.texture.type,Je=M.has(Be),De=Fe.getClearColor(),Ze=Fe.getClearAlpha(),rt=De.r,Mt=De.g,vt=De.b;Je?(w[0]=rt,w[1]=Mt,w[2]=vt,w[3]=Ze,q.clearBufferuiv(q.COLOR,0,w)):(P[0]=rt,P[1]=Mt,P[2]=vt,P[3]=Ze,q.clearBufferiv(q.COLOR,0,P))}else ie|=q.COLOR_BUFFER_BIT}Z&&(ie|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ie|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&q.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),j=C},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",$e,!1),Fe.dispose(),ge.dispose(),ke.dispose(),L.dispose(),ne.dispose(),Ie.dispose(),Oe.dispose(),_e.dispose(),Ve.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",ai),Te.removeEventListener("sessionend",li),jn.stop()};function ve(C){C.preventDefault(),t0("WebGLRenderer: Context Lost."),k=!0}function We(){t0("WebGLRenderer: Context Restored."),k=!1;const C=ht.autoReset,Z=Ne.enabled,fe=Ne.autoUpdate,ie=Ne.needsUpdate,oe=Ne.type;qe(),ht.autoReset=C,Ne.enabled=Z,Ne.autoUpdate=fe,Ne.needsUpdate=ie,Ne.type=oe}function $e(C){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function nt(C){const Z=C.target;Z.removeEventListener("dispose",nt),pt(Z)}function pt(C){Kt(C),L.remove(C)}function Kt(C){const Z=L.get(C).programs;Z!==void 0&&(Z.forEach(function(fe){Ve.releaseProgram(fe)}),C.isShaderMaterial&&Ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,fe,ie,oe,Be){Z===null&&(Z=lt);const Je=oe.isMesh&&oe.matrixWorld.determinant()<0,De=Wi(C,Z,fe,ie,oe);Ee.setMaterial(ie,Je);let Ze=fe.index,rt=1;if(ie.wireframe===!0){if(Ze=Ce.getWireframeAttribute(fe),Ze===void 0)return;rt=2}const Mt=fe.drawRange,vt=fe.attributes.position;let it=Mt.start*rt,Lt=(Mt.start+Mt.count)*rt;Be!==null&&(it=Math.max(it,Be.start*rt),Lt=Math.min(Lt,(Be.start+Be.count)*rt)),Ze!==null?(it=Math.max(it,0),Lt=Math.min(Lt,Ze.count)):vt!=null&&(it=Math.max(it,0),Lt=Math.min(Lt,vt.count));const Gt=Lt-it;if(Gt<0||Gt===1/0)return;Oe.setup(oe,ie,De,fe,Ze);let Wt,Ht=gt;if(Ze!==null&&(Wt=ye.get(Ze),Ht=Et,Ht.setIndex(Wt)),oe.isMesh)ie.wireframe===!0?(Ee.setLineWidth(ie.wireframeLinewidth*wt()),Ht.setMode(q.LINES)):Ht.setMode(q.TRIANGLES);else if(oe.isLine){let rn=ie.linewidth;rn===void 0&&(rn=1),Ee.setLineWidth(rn*wt()),oe.isLineSegments?Ht.setMode(q.LINES):oe.isLineLoop?Ht.setMode(q.LINE_LOOP):Ht.setMode(q.LINE_STRIP)}else oe.isPoints?Ht.setMode(q.POINTS):oe.isSprite&&Ht.setMode(q.TRIANGLES);if(oe.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))Ht.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const rn=oe._multiDrawStarts,Qe=oe._multiDrawCounts,un=oe._multiDrawCount,Tt=Ze?ye.get(Ze).bytesPerElement:1,Sn=L.get(ie).currentProgram.getUniforms();for(let An=0;An<un;An++)Sn.setValue(q,"_gl_DrawID",An),Ht.render(rn[An]/Tt,Qe[An])}else if(oe.isInstancedMesh)Ht.renderInstances(it,Gt,oe.count);else if(fe.isInstancedBufferGeometry){const rn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Qe=Math.min(fe.instanceCount,rn);Ht.renderInstances(it,Gt,Qe)}else Ht.render(it,Gt)};function Yt(C,Z,fe){C.transparent===!0&&C.side===zi&&C.forceSinglePass===!1?(C.side=oi,C.needsUpdate=!0,dn(C,Z,fe),C.side=$r,C.needsUpdate=!0,dn(C,Z,fe),C.side=zi):dn(C,Z,fe)}this.compile=function(C,Z,fe=null){fe===null&&(fe=C),I=ke.get(fe),I.init(Z),E.push(I),fe.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Z.layers)&&(I.pushLight(oe),oe.castShadow&&I.pushShadow(oe))}),C!==fe&&C.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Z.layers)&&(I.pushLight(oe),oe.castShadow&&I.pushShadow(oe))}),I.setupLights();const ie=new Set;return C.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Be=oe.material;if(Be)if(Array.isArray(Be))for(let Je=0;Je<Be.length;Je++){const De=Be[Je];Yt(De,fe,oe),ie.add(De)}else Yt(Be,fe,oe),ie.add(Be)}),I=E.pop(),ie},this.compileAsync=function(C,Z,fe=null){const ie=this.compile(C,Z,fe);return new Promise(oe=>{function Be(){if(ie.forEach(function(Je){L.get(Je).currentProgram.isReady()&&ie.delete(Je)}),ie.size===0){oe(C);return}setTimeout(Be,10)}ue.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Wn=null;function Xn(C){Wn&&Wn(C)}function ai(){jn.stop()}function li(){jn.start()}const jn=new cv;jn.setAnimationLoop(Xn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(C){Wn=C,Te.setAnimationLoop(C),C===null?jn.stop():jn.start()},Te.addEventListener("sessionstart",ai),Te.addEventListener("sessionend",li),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;j!==null&&j.renderStart(C,Z);const fe=Te.enabled===!0&&Te.isPresenting===!0,ie=D!==null&&(W===null||fe)&&D.begin(K,W);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(Z),Z=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(K,C,Z,W),I=ke.get(C,E.length),I.init(Z),I.state.textureUnits=A.getTextureUnits(),E.push(I),je.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),xe.setFromProjectionMatrix(je,$i,Z.reversedDepth),He=this.localClippingEnabled,Xe=Ke.init(this.clippingPlanes,He),z=ge.get(C,O.length),z.init(),O.push(z),Te.enabled===!0&&Te.isPresenting===!0){const Je=K.xr.getDepthSensingMesh();Je!==null&&gi(Je,Z,-1/0,K.sortObjects)}gi(C,Z,0,K.sortObjects),z.finish(),K.sortObjects===!0&&z.sort(X,le),mt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,mt&&Fe.addToRenderList(z,C),this.info.render.frame++,Xe===!0&&Ke.beginShadows();const oe=I.state.shadowsArray;if(Ne.render(oe,C,Z),Xe===!0&&Ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&D.hasRenderPass())===!1){const Je=z.opaque,De=z.transmissive;if(I.setupLights(),Z.isArrayCamera){const Ze=Z.cameras;if(De.length>0)for(let rt=0,Mt=Ze.length;rt<Mt;rt++){const vt=Ze[rt];Kn(Je,De,C,vt)}mt&&Fe.render(C);for(let rt=0,Mt=Ze.length;rt<Mt;rt++){const vt=Ze[rt];rr(z,C,vt,vt.viewport)}}else De.length>0&&Kn(Je,De,C,Z),mt&&Fe.render(C),rr(z,C,Z)}W!==null&&re===0&&(A.updateMultisampleRenderTarget(W),A.updateRenderTargetMipmap(W)),ie&&D.end(K),C.isScene===!0&&C.onAfterRender(K,C,Z),Oe.resetDefaultState(),te=-1,G=null,E.pop(),E.length>0?(I=E[E.length-1],A.setTextureUnits(I.state.textureUnits),Xe===!0&&Ke.setGlobalState(K.clippingPlanes,I.state.camera)):I=null,O.pop(),O.length>0?z=O[O.length-1]:z=null,j!==null&&j.renderEnd()};function gi(C,Z,fe,ie){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)fe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLightProbeGrid)I.pushLightProbeGrid(C);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||xe.intersectsSprite(C)){ie&&ot.setFromMatrixPosition(C.matrixWorld).applyMatrix4(je);const Je=Ie.update(C),De=C.material;De.visible&&z.push(C,Je,De,fe,ot.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||xe.intersectsObject(C))){const Je=Ie.update(C),De=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ot.copy(C.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),ot.copy(Je.boundingSphere.center)),ot.applyMatrix4(C.matrixWorld).applyMatrix4(je)),Array.isArray(De)){const Ze=Je.groups;for(let rt=0,Mt=Ze.length;rt<Mt;rt++){const vt=Ze[rt],it=De[vt.materialIndex];it&&it.visible&&z.push(C,Je,it,fe,ot.z,vt)}}else De.visible&&z.push(C,Je,De,fe,ot.z,null)}}const Be=C.children;for(let Je=0,De=Be.length;Je<De;Je++)gi(Be[Je],Z,fe,ie)}function rr(C,Z,fe,ie){const{opaque:oe,transmissive:Be,transparent:Je}=C;I.setupLightsView(fe),Xe===!0&&Ke.setGlobalState(K.clippingPlanes,fe),ie&&Ee.viewport(N.copy(ie)),oe.length>0&&cn(oe,Z,fe),Be.length>0&&cn(Be,Z,fe),Je.length>0&&cn(Je,Z,fe),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Kn(C,Z,fe,ie){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ie.id]===void 0){const it=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ie.id]=new nr(1,1,{generateMipmaps:!0,type:it?Sr:Ti,minFilter:Ms,samples:Math.max(4,we.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Be=I.state.transmissionRenderTarget[ie.id],Je=ie.viewport||N;Be.setSize(Je.z*K.transmissionResolutionScale,Je.w*K.transmissionResolutionScale);const De=K.getRenderTarget(),Ze=K.getActiveCubeFace(),rt=K.getActiveMipmapLevel();K.setRenderTarget(Be),K.getClearColor(U),V=K.getClearAlpha(),V<1&&K.setClearColor(16777215,.5),K.clear(),mt&&Fe.render(fe);const Mt=K.toneMapping;K.toneMapping=er;const vt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),I.setupLightsView(ie),Xe===!0&&Ke.setGlobalState(K.clippingPlanes,ie),cn(C,fe,ie),A.updateMultisampleRenderTarget(Be),A.updateRenderTargetMipmap(Be),ue.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Lt=0,Gt=Z.length;Lt<Gt;Lt++){const Wt=Z[Lt],{object:Ht,geometry:rn,material:Qe,group:un}=Wt;if(Qe.side===zi&&Ht.layers.test(ie.layers)){const Tt=Qe.side;Qe.side=oi,Qe.needsUpdate=!0,Rn(Ht,fe,ie,rn,Qe,un),Qe.side=Tt,Qe.needsUpdate=!0,it=!0}}it===!0&&(A.updateMultisampleRenderTarget(Be),A.updateRenderTargetMipmap(Be))}K.setRenderTarget(De,Ze,rt),K.setClearColor(U,V),vt!==void 0&&(ie.viewport=vt),K.toneMapping=Mt}function cn(C,Z,fe){const ie=Z.isScene===!0?Z.overrideMaterial:null;for(let oe=0,Be=C.length;oe<Be;oe++){const Je=C[oe],{object:De,geometry:Ze,group:rt}=Je;let Mt=Je.material;Mt.allowOverride===!0&&ie!==null&&(Mt=ie),De.layers.test(fe.layers)&&Rn(De,Z,fe,Ze,Mt,rt)}}function Rn(C,Z,fe,ie,oe,Be){C.onBeforeRender(K,Z,fe,ie,oe,Be),C.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),oe.onBeforeRender(K,Z,fe,ie,C,Be),oe.transparent===!0&&oe.side===zi&&oe.forceSinglePass===!1?(oe.side=oi,oe.needsUpdate=!0,K.renderBufferDirect(fe,Z,ie,oe,C,Be),oe.side=$r,oe.needsUpdate=!0,K.renderBufferDirect(fe,Z,ie,oe,C,Be),oe.side=zi):K.renderBufferDirect(fe,Z,ie,oe,C,Be),C.onAfterRender(K,Z,fe,ie,oe,Be)}function dn(C,Z,fe){Z.isScene!==!0&&(Z=lt);const ie=L.get(C),oe=I.state.lights,Be=I.state.shadowsArray,Je=oe.state.version,De=Ve.getParameters(C,oe.state,Be,Z,fe,I.state.lightProbeGridArray),Ze=Ve.getProgramCacheKey(De);let rt=ie.programs;ie.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Z.environment:null,ie.fog=Z.fog;const Mt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ie.envMap=ne.get(C.envMap||ie.environment,Mt),ie.envMapRotation=ie.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,rt===void 0&&(C.addEventListener("dispose",nt),rt=new Map,ie.programs=rt);let vt=rt.get(Ze);if(vt!==void 0){if(ie.currentProgram===vt&&ie.lightsStateVersion===Je)return yn(C,De),vt}else De.uniforms=Ve.getUniforms(C),j!==null&&C.isNodeMaterial&&j.build(C,fe,De),C.onBeforeCompile(De,K),vt=Ve.acquireProgram(De,Ze),rt.set(Ze,vt),ie.uniforms=De.uniforms;const it=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(it.clippingPlanes=Ke.uniform),yn(C,De),ie.needsLights=ct(C),ie.lightsStateVersion=Je,ie.needsLights&&(it.ambientLightColor.value=oe.state.ambient,it.lightProbe.value=oe.state.probe,it.directionalLights.value=oe.state.directional,it.directionalLightShadows.value=oe.state.directionalShadow,it.spotLights.value=oe.state.spot,it.spotLightShadows.value=oe.state.spotShadow,it.rectAreaLights.value=oe.state.rectArea,it.ltc_1.value=oe.state.rectAreaLTC1,it.ltc_2.value=oe.state.rectAreaLTC2,it.pointLights.value=oe.state.point,it.pointLightShadows.value=oe.state.pointShadow,it.hemisphereLights.value=oe.state.hemi,it.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,it.spotLightMatrix.value=oe.state.spotLightMatrix,it.spotLightMap.value=oe.state.spotLightMap,it.pointShadowMatrix.value=oe.state.pointShadowMatrix),ie.lightProbeGrid=I.state.lightProbeGridArray.length>0,ie.currentProgram=vt,ie.uniformsList=null,vt}function _n(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=sc.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function yn(C,Z){const fe=L.get(C);fe.outputColorSpace=Z.outputColorSpace,fe.batching=Z.batching,fe.batchingColor=Z.batchingColor,fe.instancing=Z.instancing,fe.instancingColor=Z.instancingColor,fe.instancingMorph=Z.instancingMorph,fe.skinning=Z.skinning,fe.morphTargets=Z.morphTargets,fe.morphNormals=Z.morphNormals,fe.morphColors=Z.morphColors,fe.morphTargetsCount=Z.morphTargetsCount,fe.numClippingPlanes=Z.numClippingPlanes,fe.numIntersection=Z.numClipIntersection,fe.vertexAlphas=Z.vertexAlphas,fe.vertexTangents=Z.vertexTangents,fe.toneMapping=Z.toneMapping}function Pn(C,Z){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition(Z.matrixWorld);for(let fe=0,ie=C.length;fe<ie;fe++){const oe=C[fe];if(oe.texture!==null&&oe.boundingBox.containsPoint(R))return oe}return null}function Wi(C,Z,fe,ie,oe){Z.isScene!==!0&&(Z=lt),A.resetTextureUnits();const Be=Z.fog,Je=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Z.environment:null,De=W===null?K.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Nt.workingColorSpace,Ze=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,rt=ne.get(ie.envMap||Je,Ze),Mt=ie.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,vt=!!fe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),it=!!fe.morphAttributes.position,Lt=!!fe.morphAttributes.normal,Gt=!!fe.morphAttributes.color;let Wt=er;ie.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Wt=K.toneMapping);const Ht=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,rn=Ht!==void 0?Ht.length:0,Qe=L.get(ie),un=I.state.lights;if(Xe===!0&&(He===!0||C!==G)){const Xt=C===G&&ie.id===te;Ke.setState(ie,C,Xt)}let Tt=!1;ie.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==un.state.version||Qe.outputColorSpace!==De||oe.isBatchedMesh&&Qe.batching===!1||!oe.isBatchedMesh&&Qe.batching===!0||oe.isBatchedMesh&&Qe.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&Qe.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&Qe.instancing===!1||!oe.isInstancedMesh&&Qe.instancing===!0||oe.isSkinnedMesh&&Qe.skinning===!1||!oe.isSkinnedMesh&&Qe.skinning===!0||oe.isInstancedMesh&&Qe.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Qe.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Qe.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Qe.instancingMorph===!1&&oe.morphTexture!==null||Qe.envMap!==rt||ie.fog===!0&&Qe.fog!==Be||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ke.numPlanes||Qe.numIntersection!==Ke.numIntersection)||Qe.vertexAlphas!==Mt||Qe.vertexTangents!==vt||Qe.morphTargets!==it||Qe.morphNormals!==Lt||Qe.morphColors!==Gt||Qe.toneMapping!==Wt||Qe.morphTargetsCount!==rn||!!Qe.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Tt=!0):(Tt=!0,Qe.__version=ie.version);let Sn=Qe.currentProgram;Tt===!0&&(Sn=dn(ie,Z,oe),j&&ie.isNodeMaterial&&j.onUpdateProgram(ie,Sn,Qe));let An=!1,Ct=!1,Nn=!1;const Ft=Sn.getUniforms(),Qt=Qe.uniforms;if(Ee.useProgram(Sn.program)&&(An=!0,Ct=!0,Nn=!0),ie.id!==te&&(te=ie.id,Ct=!0),Qe.needsLights){const Xt=Pn(I.state.lightProbeGridArray,oe);Qe.lightProbeGrid!==Xt&&(Qe.lightProbeGrid=Xt,Ct=!0)}if(An||G!==C){Ee.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ft.setValue(q,"projectionMatrix",C.projectionMatrix),Ft.setValue(q,"viewMatrix",C.matrixWorldInverse);const Ri=Ft.map.cameraPosition;Ri!==void 0&&Ri.setValue(q,tt.setFromMatrixPosition(C.matrixWorld)),we.logarithmicDepthBuffer&&Ft.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ft.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),G!==C&&(G=C,Ct=!0,Nn=!0)}if(Qe.needsLights&&(un.state.directionalShadowMap.length>0&&Ft.setValue(q,"directionalShadowMap",un.state.directionalShadowMap,A),un.state.spotShadowMap.length>0&&Ft.setValue(q,"spotShadowMap",un.state.spotShadowMap,A),un.state.pointShadowMap.length>0&&Ft.setValue(q,"pointShadowMap",un.state.pointShadowMap,A)),oe.isSkinnedMesh){Ft.setOptional(q,oe,"bindMatrix"),Ft.setOptional(q,oe,"bindMatrixInverse");const Xt=oe.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Ft.setValue(q,"boneTexture",Xt.boneTexture,A))}oe.isBatchedMesh&&(Ft.setOptional(q,oe,"batchingTexture"),Ft.setValue(q,"batchingTexture",oe._matricesTexture,A),Ft.setOptional(q,oe,"batchingIdTexture"),Ft.setValue(q,"batchingIdTexture",oe._indirectTexture,A),Ft.setOptional(q,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Ft.setValue(q,"batchingColorTexture",oe._colorsTexture,A));const Ci=fe.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&dt.update(oe,fe,Sn),(Ct||Qe.receiveShadow!==oe.receiveShadow)&&(Qe.receiveShadow=oe.receiveShadow,Ft.setValue(q,"receiveShadow",oe.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Z.environment!==null&&(Qt.envMapIntensity.value=Z.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=WE()),Ct){if(Ft.setValue(q,"toneMappingExposure",K.toneMappingExposure),Qe.needsLights&&sr(Qt,Nn),Be&&ie.fog===!0&&me.refreshFogUniforms(Qt,Be),me.refreshMaterialUniforms(Qt,ie,de,Se,I.state.transmissionRenderTarget[C.id]),Qe.needsLights&&Qe.lightProbeGrid){const Xt=Qe.lightProbeGrid;Qt.probesSH.value=Xt.texture,Qt.probesMin.value.copy(Xt.boundingBox.min),Qt.probesMax.value.copy(Xt.boundingBox.max),Qt.probesResolution.value.copy(Xt.resolution)}sc.upload(q,_n(Qe),Qt,A)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(sc.upload(q,_n(Qe),Qt,A),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ft.setValue(q,"center",oe.center),Ft.setValue(q,"modelViewMatrix",oe.modelViewMatrix),Ft.setValue(q,"normalMatrix",oe.normalMatrix),Ft.setValue(q,"modelMatrix",oe.matrixWorld),ie.uniformsGroups!==void 0){const Xt=ie.uniformsGroups;for(let Ri=0,Xi=Xt.length;Ri<Xi;Ri++){const es=Xt[Ri];_e.update(es,Sn),_e.bind(es,Sn)}}return Sn}function sr(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function ct(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,Z,fe){const ie=L.get(C);ie.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),L.get(C.texture).__webglTexture=Z,L.get(C.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:fe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const fe=L.get(C);fe.__webglFramebuffer=Z,fe.__useDefaultFramebuffer=Z===void 0};const yt=q.createFramebuffer();this.setRenderTarget=function(C,Z=0,fe=0){W=C,ce=Z,re=fe;let ie=null,oe=!1,Be=!1;if(C){const De=L.get(C);if(De.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(q.FRAMEBUFFER,De.__webglFramebuffer),N.copy(C.viewport),F.copy(C.scissor),$=C.scissorTest,Ee.viewport(N),Ee.scissor(F),Ee.setScissorTest($),te=-1;return}else if(De.__webglFramebuffer===void 0)A.setupRenderTarget(C);else if(De.__hasExternalTextures)A.rebindTextures(C,L.get(C.texture).__webglTexture,L.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Mt=C.depthTexture;if(De.__boundDepthTexture!==Mt){if(Mt!==null&&L.has(Mt)&&(C.width!==Mt.image.width||C.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(C)}}const Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Be=!0);const rt=L.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(rt[Z])?ie=rt[Z][fe]:ie=rt[Z],oe=!0):C.samples>0&&A.useMultisampledRTT(C)===!1?ie=L.get(C).__webglMultisampledFramebuffer:Array.isArray(rt)?ie=rt[fe]:ie=rt,N.copy(C.viewport),F.copy(C.scissor),$=C.scissorTest}else N.copy(se).multiplyScalar(de).floor(),F.copy(Me).multiplyScalar(de).floor(),$=be;if(fe!==0&&(ie=yt),Ee.bindFramebuffer(q.FRAMEBUFFER,ie)&&Ee.drawBuffers(C,ie),Ee.viewport(N),Ee.scissor(F),Ee.setScissorTest($),oe){const De=L.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Z,De.__webglTexture,fe)}else if(Be){const De=Z;for(let Ze=0;Ze<C.textures.length;Ze++){const rt=L.get(C.textures[Ze]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ze,rt.__webglTexture,fe,De)}}else if(C!==null&&fe!==0){const De=L.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,De.__webglTexture,fe)}te=-1},this.readRenderTargetPixels=function(C,Z,fe,ie,oe,Be,Je,De=0){if(!(C&&C.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Je!==void 0&&(Ze=Ze[Je]),Ze){Ee.bindFramebuffer(q.FRAMEBUFFER,Ze);try{const rt=C.textures[De],Mt=rt.format,vt=rt.type;if(C.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+De),!we.textureFormatReadable(Mt)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(vt)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-ie&&fe>=0&&fe<=C.height-oe&&q.readPixels(Z,fe,ie,oe,Y.convert(Mt),Y.convert(vt),Be)}finally{const rt=W!==null?L.get(W).__webglFramebuffer:null;Ee.bindFramebuffer(q.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(C,Z,fe,ie,oe,Be,Je,De=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Je!==void 0&&(Ze=Ze[Je]),Ze)if(Z>=0&&Z<=C.width-ie&&fe>=0&&fe<=C.height-oe){Ee.bindFramebuffer(q.FRAMEBUFFER,Ze);const rt=C.textures[De],Mt=rt.format,vt=rt.type;if(C.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+De),!we.textureFormatReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,it),q.bufferData(q.PIXEL_PACK_BUFFER,Be.byteLength,q.STREAM_READ),q.readPixels(Z,fe,ie,oe,Y.convert(Mt),Y.convert(vt),0);const Lt=W!==null?L.get(W).__webglFramebuffer:null;Ee.bindFramebuffer(q.FRAMEBUFFER,Lt);const Gt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await J_(q,Gt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,it),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Be),q.deleteBuffer(it),q.deleteSync(Gt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,fe=0){const ie=Math.pow(2,-fe),oe=Math.floor(C.image.width*ie),Be=Math.floor(C.image.height*ie),Je=Z!==null?Z.x:0,De=Z!==null?Z.y:0;A.setTexture2D(C,0),q.copyTexSubImage2D(q.TEXTURE_2D,fe,0,0,Je,De,oe,Be),Ee.unbindTexture()};const Mn=q.createFramebuffer(),vi=q.createFramebuffer();this.copyTextureToTexture=function(C,Z,fe=null,ie=null,oe=0,Be=0){let Je,De,Ze,rt,Mt,vt,it,Lt,Gt;const Wt=C.isCompressedTexture?C.mipmaps[Be]:C.image;if(fe!==null)Je=fe.max.x-fe.min.x,De=fe.max.y-fe.min.y,Ze=fe.isBox3?fe.max.z-fe.min.z:1,rt=fe.min.x,Mt=fe.min.y,vt=fe.isBox3?fe.min.z:0;else{const Qt=Math.pow(2,-oe);Je=Math.floor(Wt.width*Qt),De=Math.floor(Wt.height*Qt),C.isDataArrayTexture?Ze=Wt.depth:C.isData3DTexture?Ze=Math.floor(Wt.depth*Qt):Ze=1,rt=0,Mt=0,vt=0}ie!==null?(it=ie.x,Lt=ie.y,Gt=ie.z):(it=0,Lt=0,Gt=0);const Ht=Y.convert(Z.format),rn=Y.convert(Z.type);let Qe;Z.isData3DTexture?(A.setTexture3D(Z,0),Qe=q.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(A.setTexture2DArray(Z,0),Qe=q.TEXTURE_2D_ARRAY):(A.setTexture2D(Z,0),Qe=q.TEXTURE_2D),Ee.activeTexture(q.TEXTURE0),Ee.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Z.flipY),Ee.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Ee.pixelStorei(q.UNPACK_ALIGNMENT,Z.unpackAlignment);const un=Ee.getParameter(q.UNPACK_ROW_LENGTH),Tt=Ee.getParameter(q.UNPACK_IMAGE_HEIGHT),Sn=Ee.getParameter(q.UNPACK_SKIP_PIXELS),An=Ee.getParameter(q.UNPACK_SKIP_ROWS),Ct=Ee.getParameter(q.UNPACK_SKIP_IMAGES);Ee.pixelStorei(q.UNPACK_ROW_LENGTH,Wt.width),Ee.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Wt.height),Ee.pixelStorei(q.UNPACK_SKIP_PIXELS,rt),Ee.pixelStorei(q.UNPACK_SKIP_ROWS,Mt),Ee.pixelStorei(q.UNPACK_SKIP_IMAGES,vt);const Nn=C.isDataArrayTexture||C.isData3DTexture,Ft=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const Qt=L.get(C),Ci=L.get(Z),Xt=L.get(Qt.__renderTarget),Ri=L.get(Ci.__renderTarget);Ee.bindFramebuffer(q.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Ee.bindFramebuffer(q.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Xi=0;Xi<Ze;Xi++)Nn&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,L.get(C).__webglTexture,oe,vt+Xi),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,L.get(Z).__webglTexture,Be,Gt+Xi)),q.blitFramebuffer(rt,Mt,Je,De,it,Lt,Je,De,q.DEPTH_BUFFER_BIT,q.NEAREST);Ee.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(oe!==0||C.isRenderTargetTexture||L.has(C)){const Qt=L.get(C),Ci=L.get(Z);Ee.bindFramebuffer(q.READ_FRAMEBUFFER,Mn),Ee.bindFramebuffer(q.DRAW_FRAMEBUFFER,vi);for(let Xt=0;Xt<Ze;Xt++)Nn?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Qt.__webglTexture,oe,vt+Xt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Qt.__webglTexture,oe),Ft?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ci.__webglTexture,Be,Gt+Xt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ci.__webglTexture,Be),oe!==0?q.blitFramebuffer(rt,Mt,Je,De,it,Lt,Je,De,q.COLOR_BUFFER_BIT,q.NEAREST):Ft?q.copyTexSubImage3D(Qe,Be,it,Lt,Gt+Xt,rt,Mt,Je,De):q.copyTexSubImage2D(Qe,Be,it,Lt,rt,Mt,Je,De);Ee.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ft?C.isDataTexture||C.isData3DTexture?q.texSubImage3D(Qe,Be,it,Lt,Gt,Je,De,Ze,Ht,rn,Wt.data):Z.isCompressedArrayTexture?q.compressedTexSubImage3D(Qe,Be,it,Lt,Gt,Je,De,Ze,Ht,Wt.data):q.texSubImage3D(Qe,Be,it,Lt,Gt,Je,De,Ze,Ht,rn,Wt):C.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Be,it,Lt,Je,De,Ht,rn,Wt.data):C.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Be,it,Lt,Wt.width,Wt.height,Ht,Wt.data):q.texSubImage2D(q.TEXTURE_2D,Be,it,Lt,Je,De,Ht,rn,Wt);Ee.pixelStorei(q.UNPACK_ROW_LENGTH,un),Ee.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Tt),Ee.pixelStorei(q.UNPACK_SKIP_PIXELS,Sn),Ee.pixelStorei(q.UNPACK_SKIP_ROWS,An),Ee.pixelStorei(q.UNPACK_SKIP_IMAGES,Ct),Be===0&&Z.generateMipmaps&&q.generateMipmap(Qe),Ee.unbindTexture()},this.initRenderTarget=function(C){L.get(C).__webglFramebuffer===void 0&&A.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),Ee.unbindTexture()},this.resetState=function(){ce=0,re=0,W=null,Ee.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}}function fa(s,e,t){const r=e/100,o=t/100,l=(1-Math.abs(2*o-1))*r,c=l*(1-Math.abs(s/60%2-1)),f=o-l/2;let d=0,h=0,g=0;s<60?[d,h,g]=[l,c,0]:s<120?[d,h,g]=[c,l,0]:s<180?[d,h,g]=[0,l,c]:s<240?[d,h,g]=[0,c,l]:s<300?[d,h,g]=[c,0,l]:[d,h,g]=[l,0,c];const x=m=>Math.round((m+f)*255).toString(16).padStart(2,"0");return`#${x(d)}${x(h)}${x(g)}`}function Qr(s,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[fa(s,e,50),"#FFFFFF",fa(s,e*.6,70),fa(s,e*.8,35)];const r=fa(s,e,50),o=fa((s+180)%360,e,50);return[r,o,r,o]}const $0=[1],ga=[0];let xv=0;const XE=new Set;function jE(s,e){for(let t=0;t<e.length;t++){const r=e[t]??1;$0[t]=r,ga[t]=(ga[t]??0)+s*r}for(const t of XE)ga[t]=(ga[t]??0)+s*($0[t]??1)}function KE(s){xv=s}function qE(){return ga[xv]??0}const oc=12,Vn=Math.PI*2;function _v(s,e){if(e<=0)return 0;const t=Math.min(2.2,10/e);return Math.min(e,1+Math.floor(s/t))}const Jl=[[[0,"#5ea733"],[.1,"#a9c97a"],[.17,"#efe6c6"],[.26,"#f2b2c5"],[.36,"#df4a67"],[.45,"#b81f3d"],[.53,"#1a0d33"],[.61,"#2e44d8"],[.7,"#5f78f0"],[.79,"#dfe4f4"],[.87,"#eee6c4"],[.94,"#9cc46c"],[1,"#5ea733"]],[[0,"#e0a82e"],[.1,"#f0cd7a"],[.17,"#f6ead0"],[.26,"#f6b49a"],[.36,"#e8573a"],[.45,"#b52a1c"],[.53,"#2a0a0c"],[.61,"#a8401c"],[.7,"#e8823e"],[.79,"#f7dcc4"],[.87,"#f4e8c8"],[.94,"#e9c060"],[1,"#e0a82e"]],[[0,"#1f9a8a"],[.1,"#86d1bf"],[.17,"#eaf2e2"],[.26,"#9fe3e8"],[.36,"#25b5d4"],[.45,"#13708f"],[.53,"#0b1430"],[.61,"#5a35c8"],[.7,"#9a7cf0"],[.79,"#e6e0f6"],[.87,"#e4f2ea"],[.94,"#5cc2a6"],[1,"#1f9a8a"]],[[0,"#2b3f8f"],[.1,"#7d8fd0"],[.17,"#eef0f6"],[.26,"#c9d0ea"],[.36,"#5266b8"],[.45,"#22307a"],[.53,"#070a1c"],[.61,"#26357e"],[.7,"#6a7cc6"],[.79,"#e8ebf5"],[.87,"#f4f3ee"],[.94,"#8a9ad6"],[1,"#2b3f8f"]]],YE=["Inflated","Paper","Line","Print"],QE=`
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
}`,JE=`
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
}`,ZE=0,$E=1,ew=2;function Ec(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(m=>m+m).join(""):e,r=(parseInt(t.slice(0,2),16)||0)/255,o=(parseInt(t.slice(2,4),16)||0)/255,l=(parseInt(t.slice(4,6),16)||0)/255,c=Math.max(r,o,l),f=Math.min(r,o,l),d=(c+f)/2;if(c===f)return[0,0,d];const h=c-f,g=d>.5?h/(2-c-f):h/(c+f);let x;return c===r?x=((o-l)/h+(o<l?6:0))*60:c===o?x=((l-r)/h+2)*60:x=((r-o)/h+4)*60,[x,g,d]}function yv(s,e,t){return`hsl(${(s%360+360)%360} ${Math.max(0,Math.min(1,e))*100}% ${t*100}%)`}const eg=Ec(Qr(245,100,"contrast")[0]);function Mv(s){const[e,t]=Ec(s[0]??"#000000");return t===0?{hue:0,sat:0}:{hue:e-eg[0],sat:t/(eg[1]||1)}}function tg(s,e){const t=document.createElement("canvas");t.width=512,t.height=1;const r=t.getContext("2d"),o=r.createLinearGradient(0,0,512,0);for(const[c,f]of s){const[d,h,g]=Ec(f);o.addColorStop(c,yv(d+e.hue,h*e.sat,g))}r.fillStyle=o,r.fillRect(0,0,512,1);const l=new Oy(t);return l.wrapS=lc,l.magFilter=Cn,l.minFilter=Cn,l.generateMipmaps=!1,l}class Sv{constructor(){B(this,"textures");B(this,"turnKey","#reference");B(this,"palFrom",0);B(this,"palTo",0);B(this,"palMix",1);B(this,"styleUniform",{value:0});B(this,"turn",{hue:0,sat:1});this.textures=Jl.map(e=>tg(e,{hue:0,sat:1}))}shared(){return{uPalA:{value:this.textures[0]},uPalB:{value:this.textures[0]},uPalMix:{value:0},uT:{value:0},uOff:{value:0},uWA:{value:0},uWB:{value:0},uWC:{value:0},uDepth:{value:.32},uSpec:{value:.16},uCenter:{value:new Q}}}material(e,t,r={}){return new mi({vertexShader:QE,fragmentShader:JE,side:zi,uniforms:{...t,uStyle:this.styleUniform,uMode:{value:e},uAng:{value:0},uWS:{value:1},...r}})}update(e,t,r,o,l=0){this.styleUniform.value=Math.max(0,Math.min(YE.length-1,Math.round(l)));const c=e[0]??"";if(c!==this.turnKey){this.turnKey=c;const d=Mv(e);this.turn=d;const h=this.textures;this.textures=Jl.map(g=>tg(g,d));for(const g of h)g.dispose()}const f=Math.max(0,Math.min(Jl.length-1,Math.round(t)));o&&(this.palFrom=this.palTo=f,this.palMix=1),f!==this.palTo&&(this.palFrom=this.palMix<.5?this.palFrom:this.palTo,this.palTo=f,this.palMix=0),this.palMix=Math.min(1,this.palMix+r)}apply(e,t,r){e.uPalA.value=this.textures[this.palFrom],e.uPalB.value=this.textures[this.palTo],e.uPalMix.value=this.palMix,e.uDepth.value=t,e.uSpec.value=r}backdrop(e,t,r,o){const l=this.styleUniform.value;if(l===0){Ev(e,t,r,o);return}const c=Math.max(0,Math.min(1,o));if(e.globalCompositeOperation="source-over",e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,t,r),l===2||c<=0)return;const f=Jl[this.palTo],d=f.find(([m])=>m===(l===1?.53:.17))??f[0],[h,g,x]=Ec(d[1]);e.globalAlpha=c,e.fillStyle=yv(h+this.turn.hue,g*this.turn.sat,l===1?x*1.25:x),e.fillRect(0,0,t,r),e.globalAlpha=1}dispose(){for(const e of this.textures)e.dispose();this.textures=[]}}function Av(s,e,t){const r=e/t,o=30,l=Math.tan(o/2*Math.PI/180),c=r<16/9?2*Math.atan(l*(16/9)/r)*180/Math.PI:o;(s.aspect!==r||s.fov!==c)&&(s.aspect=r,s.fov=c,s.updateProjectionMatrix())}function Ev(s,e,t,r){const o=Math.max(0,Math.min(1,r)),l=c=>{const f=parseInt(c.slice(1),16),d=Math.round((f>>16&255)*o),h=Math.round((f>>8&255)*o),g=Math.round((f&255)*o);return`rgb(${d},${h},${g})`};if(s.globalCompositeOperation="source-over",s.globalAlpha=1,o<=0)s.fillStyle="#000";else{const c=s.createLinearGradient(0,0,0,t);c.addColorStop(0,l("#8e94a2")),c.addColorStop(.2,l("#bfc3d0")),c.addColorStop(.42,l("#dde1ec")),c.addColorStop(.68,l("#d9dde9")),c.addColorStop(1,l("#9ea2af")),s.fillStyle=c}s.fillRect(0,0,e,t)}function cd(s){const e=new vv({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"});return e.setPixelRatio(1),e.setClearColor(0,0),e}function ud(s,e,t,r){s.fillStyle="#000",s.fillRect(0,0,e,t),s.fillStyle="rgba(255,255,255,0.4)",s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText(`${r} NEEDS WEBGL`,e/2,t/2)}class Cs{constructor(e){B(this,"dt",1/60);B(this,"step",0);B(this,"openness");B(this,"aim",{x:0,y:0});B(this,"spread",.4);B(this,"depth",.35);B(this,"turn",0);B(this,"pinch",0);B(this,"fist",0);B(this,"clapped",!1);B(this,"clapStrength",0);B(this,"wasClapping",!1);B(this,"burst",0);B(this,"bump",0);B(this,"bass",0);B(this,"mid",0);B(this,"high",0);B(this,"kick",0);B(this,"snare",0);B(this,"hat",0);B(this,"energy",.5);B(this,"build",0);B(this,"drop",0);B(this,"bright",.5);B(this,"lastClock",null);B(this,"lastFrame",0);this.rest=e,this.openness=e}read(e,t){const r=performance.now(),o=this.lastFrame?Math.min(.1,(r-this.lastFrame)/1e3):1/60;this.lastFrame=r;const l=qE();this.step=this.lastClock===null?0:Math.max(-.2,Math.min(.2,l-this.lastClock)),this.lastClock=l,this.dt=o;const c=[e.left,e.right].filter(Boolean);let f=this.rest;if(c.length){const w=Math.max(...c.map(P=>P.gesture==="fist"?0:P.fingerCount??3));f=Math.max(0,Math.min(1,w/5))}this.openness+=(f-this.openness)*(1-Math.exp(-o*5));let d=0,h=0;c.length&&(d=(c.reduce((w,P)=>w+P.position.x,0)/c.length-.5)*2,h=(.5-c.reduce((w,P)=>w+P.position.y,0)/c.length)*2);const g=1-Math.exp(-o*4);this.aim.x+=(d-this.aim.x)*g,this.aim.y+=(h-this.aim.y)*g,this.spread+=((e.distanceBetweenHands??.4)-this.spread)*g;const x=c.map(w=>w.depth).filter(w=>w!==void 0);this.depth+=((x.length?Math.max(...x):.35)-this.depth)*g;const m=e.twist??(c.length===1?c[0].angle??0:0);this.turn+=(m-this.turn)*g;const _=c.length?Math.max(...c.map(w=>w.pinch??0)):0;this.pinch+=(_-this.pinch)*(1-Math.exp(-o*10));const S=c.length?Math.max(...c.map(w=>w.openness!==void 0?1-w.openness:w.gesture==="fist"?1:0)):0;this.fist+=(Math.min(1,Math.max(0,(S-.35)/.4))-this.fist)*(1-Math.exp(-o*8));const T=!!e.clapping&&!e.synthetic;this.clapped=T&&!this.wasClapping,this.clapStrength=this.clapped?Math.max(.6,e.clapIntensity??1):0,this.wasClapping=T;const y=e.clapping?e.clapIntensity??1:0;this.burst=Math.max(this.burst*Math.exp(-o*2.2),y);const M=(w,P,R,z)=>w+(P-w)*(1-Math.exp(-o*(P>w?R:z)));this.bass=M(this.bass,(t==null?void 0:t.bass)??0,6,1.5),this.mid=M(this.mid,(t==null?void 0:t.mid)??0,4,1),this.high=M(this.high,(t==null?void 0:t.high)??0,8,2.5),this.bump*=Math.exp(-o/.07),t!=null&&t.beat&&(this.bump=Math.max(this.bump,t.beatIntensity||1)),this.kick=(t==null?void 0:t.kick)??0,this.bump=Math.max(this.bump,this.kick*.9),this.snare=(t==null?void 0:t.snare)??0,this.hat=(t==null?void 0:t.hat)??0,this.energy=M(this.energy,t!=null&&t.live?t.energy??.5:.5,1,1),this.build=(t==null?void 0:t.build)??0,this.drop=(t==null?void 0:t.drop)??0,this.bright=M(this.bright,(t==null?void 0:t.bright)??.5,1,1)}}class tw{constructor(e,t){B(this,"canvas");B(this,"ctx");B(this,"cfg",Wm);B(this,"playing",new Cs(.6));B(this,"n",0);B(this,"x",new Float32Array(0));B(this,"y",new Float32Array(0));B(this,"z",new Float32Array(0));B(this,"vx",new Float32Array(0));B(this,"vy",new Float32Array(0));B(this,"light",new Float32Array(0));B(this,"phase",new Float32Array(0));B(this,"time",0);B(this,"events",[]);B(this,"lastKick",0);B(this,"lastSnare",0);B(this,"lastHat",0);B(this,"kicks",0);B(this,"flow",[Math.random()*10,Math.random()*10,Math.random()*10]);B(this,"flowTo",[...this.flow]);B(this,"gather",0);B(this,"breath",0);B(this,"grain",document.createElement("canvas"));B(this,"aspect",16/9);this.canvas=e,this.ctx=t,this.grain.width=this.grain.height=256;const r=this.grain.getContext("2d"),o=r.createImageData(256,256);for(let l=0;l<o.data.length;l+=4){const c=Math.random()<.5?0:255;o.data[l]=o.data[l+1]=o.data[l+2]=c,o.data[l+3]=Math.random()<.35?255:0}r.putImageData(o,0,0)}setParams(e){this.cfg=Ts(Wm,e)}resize(e){const t=Math.min(this.n,e),r=o=>{const l=new Float32Array(e);return l.set(o.subarray(0,t)),l};this.x=r(this.x),this.y=r(this.y),this.z=r(this.z),this.vx=r(this.vx),this.vy=r(this.vy),this.light=r(this.light),this.phase=r(this.phase);for(let o=t;o<e;o++)this.x[o]=Math.random()*this.aspect,this.y[o]=Math.random(),this.z[o]=.25+.75*Math.pow(Math.random(),2.2),this.phase[o]=Math.random()*Math.PI*2,this.light[o]=0;this.n=e}angleAt(e,t,r){const[o,l,c]=this.flow;return Math.sin(e*1.3+o+r*.05)*1.7+Math.cos(t*1.7-l+r*.04)*1.5+Math.sin((e+t)*.8+c)*1.2}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;this.aspect=f/d;const h=this.aspect,g=this.playing;g.read(e,r);const x=Math.min(.1,g.dt),m=Math.min(.08,Math.max(0,g.step));this.time+=m;const _=Math.max(50,Math.min(6e3,Math.round(c.field.count)));_!==this.n&&this.resize(_);const S=!!(r!=null&&r.live),T=F=>1-Math.exp(-x*F),y=Math.max(g.kick,g.bump)*c.sound.beat;if(y>.45&&this.lastKick<=.45){this.kicks+=1;const F=Math.random(),$=(.5+.6*Math.random())*Math.min(1.4,y),U=F<.5?0:F<.82?1:2;this.events.push({kind:U,x:Math.random()*h,y:.1+.8*Math.random(),age:0,strength:$,angle:Math.random()*Math.PI,reach:.2+.5*Math.random()}),this.kicks%(6+Math.floor(Math.random()*6))===0&&(this.flowTo=this.flowTo.map(V=>V+(Math.random()-.5)*4))}this.lastKick=y;const M=(F,$)=>{for(let U=0;U<F;U++){const V=Math.floor(Math.random()*this.n);this.light[V]=Math.max(this.light[V],$)}},w=g.snare*c.sound.sparks;w>.5&&this.lastSnare<=.5&&M(Math.round(this.n*.012),1.1),this.lastSnare=w;const P=g.hat*c.sound.sparks;if(P>.5&&this.lastHat<=.5&&M(Math.round(this.n*.004),.7),this.lastHat=P,Math.random()<x*.35*(S?c.sound.quiet:1)&&this.events.push({kind:0,x:Math.random()*h,y:Math.random(),age:0,strength:.45,angle:0,reach:.4}),g.clapped&&c.hands.clap>0)for(let F=0;F<this.n;F++){this.light[F]=Math.max(this.light[F],1.2*c.hands.clap);const $=this.x[F]-h/2,U=this.y[F]-.5,V=Math.hypot($,U)+.05;this.vx[F]+=$/V*.25*c.hands.clap,this.vy[F]+=U/V*.25*c.hands.clap}this.breath+=(g.bass*c.sound.bass-this.breath)*T(4);for(let F=0;F<3;F++)this.flow[F]+=(this.flowTo[F]-this.flow[F])*T(.3);const z=!e.synthetic?[e.left,e.right].filter(F=>!!F):[],I=z.length?g.fist:0,O=Math.max(Math.min(1,c.form.circle),I*Math.min(1,c.hands.reach));this.gather+=(O-this.gather)*T(O>this.gather?.9:.6);const E=.018*c.field.drift,D=this.time,K=h/2,k=.5,j=.3,ce=D*.04,re=Math.exp(-x*2.2);for(let F=0;F<this.n;F++){const $=this.z[F],U=this.angleAt(this.x[F],this.y[F],D);let V=this.x[F]+(Math.cos(U)*E*$+this.vx[F])*m,Ae=this.y[F]+(Math.sin(U)*E*$+this.vy[F])*m;V+=(V-K)*this.breath*.004*$,Ae+=(Ae-k)*this.breath*.004*$;for(const Se of z){const de=Se.position.x*h,X=Se.position.y,le=V-de,se=Ae-X,Me=le*le+se*se,be=Math.exp(-Me/.02)*(1-I)*c.hands.reach;if(be>.01){const xe=Math.sqrt(Me)+.01;V+=le/xe*be*.006,Ae+=se/xe*be*.006,this.light[F]=Math.max(this.light[F],be*.9)}}if(this.gather>.002){const Se=this.phase[F]+ce,de=j*(.94+.12*(F*.618%1))*(1+.06*this.breath),X=K+Math.cos(Se)*de,le=k+Math.sin(Se)*de,se=this.gather*this.gather*T(1.6);V+=(X-V)*se,Ae+=(le-Ae)*se}V<-.02?V+=h+.04:V>h+.02&&(V-=h+.04),Ae<-.02?Ae+=1.04:Ae>1.02&&(Ae-=1.04),this.x[F]=V,this.y[F]=Ae,this.vx[F]*=re,this.vy[F]*=re,this.light[F]*=Math.exp(-x*(1.6+.8*Math.random()))}for(const F of this.events){F.age+=x;const $=F.age*.55;for(let U=0;U<this.n;U++){const V=this.x[U]-F.x,Ae=this.y[U]-F.y;let Se=0;if(F.kind===0){const de=Math.hypot(V,Ae)-$;Se=Math.exp(-(de*de)/.0012)}else if(F.kind===1)F.age<x*1.5&&Math.hypot(V,Ae)<F.reach*.6&&Math.random()<.35&&(Se=.6+Math.random()*.6);else{const de=Math.cos(F.angle),X=Math.sin(F.angle),le=V*-X+Ae*de-(F.age-.6)*.08;Se=Math.exp(-(le*le)/25e-5)*(Math.abs(V*de+Ae*X)<F.age*1.4?1:0)}Se>.02&&(this.light[U]=Math.max(this.light[U],1.6*Se*F.strength*(1-F.age/2.2)))}}this.events=this.events.filter(F=>F.age<2.2),l.globalCompositeOperation="source-over",l.globalAlpha=1-.92*Math.max(0,Math.min(1,c.look.trail)),l.fillStyle="#000",l.fillRect(0,0,f,d),l.globalAlpha=1;const W=8,te=[];for(let F=0;F<W;F++)te.push(new Path2D);const G=Math.max(.6,d/720*1.6*c.field.size),N=.2*c.look.glow;for(let F=0;F<this.n;F++){const $=this.z[F],U=.6+.4*Math.sin(D*.7+this.phase[F]*5),V=Math.min(1,(N*U+this.light[F])*(.35+.65*$)+.2*this.gather*$);if(V<.03)continue;const Ae=Math.min(W-1,Math.floor(V*W)),Se=G*(.5+$)*(1+.6*Math.min(1,this.light[F]));te[Ae].rect(this.x[F]*d-Se/2,this.y[F]*d-Se/2,Se,Se)}for(let F=0;F<W;F++)l.globalAlpha=(F+.5)/W,l.fillStyle="#fff",l.fill(te[F]);if(c.look.grain>.01){l.globalCompositeOperation="lighter",l.globalAlpha=.05*c.look.grain;const F=Math.floor(Math.random()*256),$=Math.floor(Math.random()*256),U=l.createPattern(this.grain,"repeat");U&&(l.save(),l.translate(-F,-$),l.fillStyle=U,l.fillRect(F,$,f,d),l.restore())}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const ng={line:{count:14,weight:1,wave:1,birth:1,zoom:1,speed:1},hands:{open:1,pull:1,clap:1},sound:{beat:1,bass:1,grow:1}},ig=110,nw=5;function rg(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class iw{constructor(e,t){B(this,"canvas");B(this,"ctx");B(this,"cfg",ng);B(this,"playing",new Cs(.5));B(this,"age",0);B(this,"time",0);B(this,"unfold",0);B(this,"breath",0);B(this,"shiver",0);B(this,"pulses",[]);B(this,"lastKick",0);B(this,"hand",{x:.5,y:.5,hold:0});B(this,"idle",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ts(ng,e)}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=Math.max(0,h.step);this.age+=x,this.time+=x*Math.max(0,c.line.speed),this.idle+=g;const m=F=>1-Math.exp(-g*F),_=[e.left,e.right].filter(Boolean),S=_.length>0&&!e.synthetic,T=!!(r!=null&&r.live);let y;S?y=(1-h.fist)*c.hands.open:T?y=(.12+.88*h.energy)*c.sound.grow:y=.35+.3*Math.sin(this.idle*.21),this.unfold+=(Math.min(1,Math.max(0,y))-this.unfold)*m(S?5:.8),this.breath+=(h.bass*c.sound.bass-this.breath)*m(3),h.clapped&&(this.shiver=Math.min(1.4,h.clapStrength*1.3*c.hands.clap)),this.shiver*=Math.exp(-g*2.4);const M=Math.max(h.kick,h.bump)*c.sound.beat;M>.45&&this.lastKick<=.45&&(this.pulses.push({at:0,strength:Math.min(1.2,M)}),this.pulses.length>nw&&this.pulses.shift()),this.lastKick=M;for(const F of this.pulses)F.at+=g*.75;if(this.pulses=this.pulses.filter(F=>F.at<.75),_.length){const F=_.reduce((U,V)=>U+V.position.x,0)/_.length,$=_.reduce((U,V)=>U+V.position.y,0)/_.length;this.hand.x+=(F-this.hand.x)*m(8),this.hand.y+=($-this.hand.y)*m(8)}this.hand.hold+=((S?c.hands.pull:0)-this.hand.hold)*m(4);const w=c.line.birth,P=w<=0?1:Math.min(1,Math.max(0,(this.age-1.6*w)/(5*w))),R=P*P*(3-2*P),z=w<=0?0:Math.max(0,1-this.age/(2.4*w));l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,d);const I=Math.max(1,Math.round(c.line.count)),[O,E,D]=rg(t[0]??"#8899ff"),[K,k,j]=rg(t[2]??t[1]??"#ffffff"),ce=Math.max(.1,c.line.zoom),re=d*ce,W=d/720*ce,te=re*.74*this.unfold*(1+.12*this.breath),G=c.line.wave,N=this.time;if(l.lineCap="round",l.lineJoin="round",l.globalCompositeOperation="lighter",z>.01){const F=(3+2.5*Math.sin(this.idle*2.2))*W*(1+this.breath);l.globalAlpha=Math.min(1,z*1.4),l.fillStyle="#fff",l.beginPath(),l.arc(f/2,d/2,Math.max(1,F),0,Math.PI*2),l.fill()}if(R>.002){const F=.5-.5*R,$=.5+.5*R;for(let U=0;U<I;U++){const V=I===1?0:U/(I-1)*2-1,Ae=V*2.6*this.unfold,Se=this.shiver*Math.sin(U*12.9898)*43758.5453,de=(Se-Math.floor(Se)-.5)*this.shiver*re*.09;l.beginPath();let X=0,le=0;for(let je=0;je<=ig;je++){const tt=F+($-F)*(je/ig),ot=Math.sin(Math.PI*tt);let lt=d/2+V*te*.5;lt+=(Math.sin(tt*6.2+N*.55+Ae)*.6+Math.sin(tt*13.7-N*.38+Ae*1.7)*.25)*re*.035*G*ot*(.35+.65*this.unfold+this.breath*.6),lt+=de*ot*Math.sin(tt*20+U);for(const wt of this.pulses){const q=Math.abs(tt-.5)-wt.at;lt-=Math.exp(-(q*q)/.0016)*wt.strength*re*.05*(1-wt.at/.75)*(V===0?1:Math.sign(V)*-1)}if(this.hand.hold>.01){const wt=tt-this.hand.x,q=Math.exp(-(wt*wt)/.022)*Math.min(1,this.hand.hold)*.85;lt+=(this.hand.y*d-lt)*q}const mt=tt*f;je===0?l.moveTo(mt,lt):l.quadraticCurveTo(X,le,(X+mt)/2,(le+lt)/2),X=mt,le=lt}l.lineTo(X,le);const se=Math.abs(V)*this.unfold,Me=Math.round(255+(O+(K-O)*(V*.5+.5)-255)*se),be=Math.round(255+(E+(k-E)*(V*.5+.5)-255)*se),xe=Math.round(255+(D+(j-D)*(V*.5+.5)-255)*se),Xe=1/(1+(I-1)*(1-this.unfold)),He=c.line.weight*W*(1+.35*M);l.strokeStyle=`rgb(${Me},${be},${xe})`,l.globalAlpha=Math.min(1,.16*Xe*2.2),l.lineWidth=7*He,l.stroke(),l.globalAlpha=Math.min(1,.95*Math.max(Xe,.3+.7*this.unfold)),l.lineWidth=1.5*He,l.stroke()}}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const sg={colour:{speed:1,offset:0,palette:0,depth:.32},field:{count:3,zoom:1,sway:1,bounce:0,drift:.2,backdrop:1,return:1},hands:{wind:1,release:1,follow:1,clap:1},sound:{wind:1,gust:1,mid:1,high:1}};function fd(s,e){s.traverse(t=>{if(t instanceof Un||t instanceof Hh||t instanceof rv){t.geometry.dispose();const r=t.material;Array.isArray(r)?r.forEach(o=>o.dispose()):r.dispose()}}),s.clear(),e.dispose(),e.forceContextLoss()}const rw="/assets/dandelion-hJsSsoAd.bin";let ha=null;function sw(){return ha||(ha=fetch(rw).then(s=>{if(!s.ok)throw new Error(`dandelion.bin: ${s.status}`);return s.arrayBuffer()}).then(ow),ha.catch(()=>{ha=null})),ha}function ow(s){const e=new DataView(s);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="DNDL")throw new Error("Not a dandelion file");const r=e.getUint32(4,!0),o=JSON.parse(new TextDecoder().decode(new Uint8Array(s,8,r))),l=8+r,c=(X,le)=>new Float32Array(s.slice(l+X,l+X+le*4)),f=(X,le)=>new Int8Array(s.slice(l+X,l+X+le)),d=(X,le)=>new Uint8Array(s.slice(l+X,l+X+le)),h=(X,le)=>new Uint32Array(s.slice(l+X,l+X+le*4)),g=X=>{const le=o.parts[X],se=c(le.pos,le.count*3),Me=f(le.nrm,le.count*3),be=new Float32Array(le.count*3);for(let xe=0;xe<be.length;xe++)be[xe]=Me[xe]/127;return{p:le,position:se,normal:be,index:h(le.idx,le.index)}},x=["stem","base","bracts"].map(g);let m=0,_=0;for(const X of x)m+=X.p.count,_+=X.index.length;const S=new Float32Array(m*3),T=new Float32Array(m*3),y=new Float32Array(m),M=new Uint32Array(_);let w=0;{let X=0,le=0;x.forEach((se,Me)=>{S.set(se.position,X*3),T.set(se.normal,X*3),y.fill(Me===0?0:1,X,X+se.p.count);for(let be=0;be<se.index.length;be++)M[le+be]=se.index[be]+X;if(Me===0)for(let be=1;be<se.position.length;be+=3)w=Math.min(w,se.position[be]);X+=se.p.count,le+=se.index.length})}const P=new ln;P.setAttribute("position",new kt(S,3)),P.setAttribute("normal",new kt(T,3)),P.setAttribute("aRigid",new kt(y,1)),P.setIndex(new kt(M,1));const R=o.seeds,z=c(R.pivot,R.count*3),I=c(R.axis,R.count*3),O=g("achenes"),E=d(o.parts.achenes.seed,O.p.count),D=new Float32Array(O.p.count),K=new Float32Array(O.p.count*3);for(let X=0;X<O.p.count;X++){const le=E[X];D[X]=le,K[X*3]=z[le*3],K[X*3+1]=z[le*3+1],K[X*3+2]=z[le*3+2]}const k=new ln;k.setAttribute("position",new kt(O.position,3)),k.setAttribute("normal",new kt(O.normal,3)),k.setAttribute("aSeed",new kt(D,1)),k.setAttribute("aPivot",new kt(K,3)),k.setIndex(new kt(O.index,1));const j=R.segments,ce=c(R.a,j*3),re=c(R.b,j*3),W=d(R.seed,j),te=c(R.ta,j),G=c(R.tb,j),N=new Float32Array(j*4*3),F=new Float32Array(j*4*3),$=new Float32Array(j*4*3),U=new Float32Array(j*4*2),V=new Float32Array(j*4),Ae=new Float32Array(j*4),Se=new Uint32Array(j*6);for(let X=0;X<j;X++){const le=W[X];for(let Me=0;Me<4;Me++){const be=X*4+Me;N.set(ce.subarray(X*3,X*3+3),be*3),F.set(re.subarray(X*3,X*3+3),be*3),$.set(z.subarray(le*3,le*3+3),be*3);const xe=Me>>1,Xe=Me&1?1:-1;U[be*2]=xe,U[be*2+1]=Xe,V[be]=le,Ae[be]=xe?G[X]:te[X]}const se=X*4;Se.set([se,se+1,se+2,se+2,se+1,se+3],X*6)}const de=new ln;de.setAttribute("position",new kt(N,3)),de.setAttribute("aB",new kt(F,3)),de.setAttribute("aPivot",new kt($,3)),de.setAttribute("aCorner",new kt(U,2)),de.setAttribute("aSeed",new kt(V,1)),de.setAttribute("aT",new kt(Ae,1)),de.setIndex(new kt(Se,1));for(const X of[P,k,de])X.boundingSphere=new Ao(new Q(0,-5,0),1e4);return{body:P,achenes:k,strokes:de,seeds:R.count,pivot:z,axis:I,foot:w}}const po=20,Hf=[1.4,3.2],Vf=[2.6,4.6],Ea=`
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
`,aw=`
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
}`,lw=`
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
}`,cw=`
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
}`,uw=`
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
}`;function Gf(s,e){let t=0,r=1/e;for(;s>0;)t+=s%e*r,s=Math.floor(s/e),r/=e;return t}function Bi(s){const e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)}const Wf=Array.from({length:po},(s,e)=>({x:e===0?0:Gf(e+1,2)*2-1,z:e===0?0:-4.6+Gf(e,3)*6,y:e===0?.3:-.4+Gf(e,5)*1.9,k:e===0?1:.85+Bi(e)*.3,yaw:Bi(e+40)*Vn,ph:Bi(e+80)*Vn,off:e*.137%1}));class fw{constructor(e,t,r=null){B(this,"canvas");B(this,"ctx");B(this,"cfg",sg);B(this,"surface");B(this,"renderer",null);B(this,"host");B(this,"scene");B(this,"camera");B(this,"group",new Gi);B(this,"depth",0);B(this,"scale",1);B(this,"look",null);B(this,"playing",new Cs(.5));B(this,"failed",!1);B(this,"model",null);B(this,"flowers",[]);B(this,"materials",[]);B(this,"started",!1);B(this,"since",0);B(this,"seedTex",null);B(this,"seedData",new Float32Array(0));B(this,"off",new Float32Array(0));B(this,"vel",new Float32Array(0));B(this,"turn",new Float32Array(0));B(this,"hold",new Float32Array(0));B(this,"away",new Uint8Array(0));B(this,"thresh",new Float32Array(0));B(this,"flight",new Float32Array(0));B(this,"dest",new Float32Array(0));B(this,"phase",new Float32Array(0));B(this,"motionTime",0);B(this,"colourTime",0);B(this,"gust",0);B(this,"lastBeat",!1);B(this,"lastClap",!1);B(this,"hop",0);B(this,"dance",0);B(this,"sinceClap",99);B(this,"lastAim",{x:0,y:0});B(this,"swipe",new Ut);B(this,"present",0);B(this,"strokeWidth",null);B(this,"viewport",null);B(this,"time",null);this.canvas=e,this.ctx=t,this.host=r,this.scene=r?r.scene:new yc,this.camera=r?r.camera:new si(30,16/9,.1,200),this.surface=document.createElement("canvas");try{r||(this.renderer=cd(this.surface)),this.look=r?r.look:new Sv}catch(o){console.error("Dandelion could not start:",o),this.failed=!0;return}sw().then(o=>{this.look&&this.build(o)}).catch(o=>{console.error("Dandelion model failed to load:",o),this.failed=!0})}setParams(e){this.cfg=Ts(sg,e)}isReady(){return this.model!==null||this.failed}build(e){const t=this.look,r=e.seeds,o=r*po;this.seedData=new Float32Array(r*2*po*4),this.seedTex=new tv(this.seedData,r*2,po,bi,Vi),this.seedTex.magFilter=gn,this.seedTex.minFilter=gn,this.seedTex.needsUpdate=!0,this.off=new Float32Array(o*3),this.vel=new Float32Array(o*3),this.turn=new Float32Array(o*4);for(let g=0;g<o;g++)this.turn[g*4+3]=1;this.hold=new Float32Array(o),this.away=new Uint8Array(o),this.thresh=new Float32Array(o),this.flight=new Float32Array(o),this.dest=new Float32Array(o*3),this.phase=new Float32Array(o);for(let g=0;g<o;g++)this.thresh[g]=.12+Bi(g*3.7+1)*1,this.phase[g]=Bi(g*1.3+7)*Vn;const l={value:new Ut(1,1)},c={value:0},f={value:e.foot},d={value:this.seedTex},h={value:1.5};this.strokeWidth=h,this.viewport=l,this.time=c;for(let g=0;g<po;g++){const x=t.shared(),m={uBend:{value:new Q},uWave:{value:new Ut},uWavePhase:{value:0},uRow:{value:g},uShimmer:{value:0}},_={...x,...m,uViewport:l,uTime:c,uFoot:f,uSeeds:d},S=(M,w,P={})=>{const R=new mi({vertexShader:M,fragmentShader:w,uniforms:{..._,...P},side:zi});return this.materials.push(R),R},T=new Gi;T.add(new Un(e.body,S(aw,og))),T.add(new Un(e.achenes,S(lw,og)));const y=S(cw,uw,{uWidth:h});y.transparent=!0,y.depthWrite=!1,T.add(new Un(e.strokes,y));for(const M of T.children)M.frustumCulled=!1;T.visible=!1,this.group.add(T),this.flowers.push({root:T,shared:x,u:m,presence:0,at:new Q,size:1,placed:!1,bend:new Ut})}this.scene.add(this.group),this.model=e}pickDestination(e,t,r){const o=-4+Math.random()*6,l=(15.5-o)*t;this.dest[e*3]=(Math.random()*2-1)*l*r*.92,this.dest[e*3+1]=.1+(Math.random()*1.75-.85)*l,this.dest[e*3+2]=o}destroy(){var e,t;this.host||(e=this.look)==null||e.dispose(),this.look=null,(t=this.seedTex)==null||t.dispose();for(const r of this.materials)r.dispose();for(const r of this.flowers)r.root.clear();this.scene.remove(this.group),this.renderer&&fd(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const d=this.renderer;if(this.failed||!d||!this.look){ud(o,c,f,"DANDELION");return}Ev(o,c,f,l.field.backdrop),this.model&&(Av(this.camera,c,f),this.camera.position.set(0,.5,15.5/Math.max(.3,l.field.zoom)),this.camera.lookAt(0,.1,0),this.update(e,t,r,c,f),(this.surface.width!==c||this.surface.height!==f)&&d.setSize(c,f,!1),d.render(this.scene,this.camera),o.drawImage(this.surface,0,0,c,f))}update(e,t,r,o,l){const{cfg:c}=this,f=this.look,d=this.model;if(!f||!d||this.failed)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=Math.max(0,h.step),m=e.left||e.right?1:0;this.present+=(m-this.present)*(1-Math.exp(-g*3));const _=Math.min(1,((r==null?void 0:r.overall)??0)*1.4)*c.sound.wind;this.motionTime+=x,this.colourTime+=(x*c.colour.speed*(1+h.mid*c.sound.mid*1.2)+g*h.burst*c.hands.clap*.9)/oc;const S=this.motionTime,T=!!(r!=null&&r.beat),y=T&&!this.lastBeat,M=y&&c.sound.gust>0;this.hop=Math.max(this.hop*Math.exp(-g*5),y?(r==null?void 0:r.beatIntensity)||1:0),this.dance+=x,this.lastBeat=T,M&&(this.gust=Math.max(this.gust,((r==null?void 0:r.beatIntensity)||1)*c.sound.gust)),this.gust*=Math.exp(-g*2.5);const w=!!e.clapping&&c.hands.clap>0,P=w&&!this.lastClap;this.lastClap=w,this.sinceClap+=g;const R=Math.min(1,this.sinceClap/4)**3;P&&(this.sinceClap=0);const z=h.aim.x-this.lastAim.x,I=h.aim.y-this.lastAim.y;this.lastAim={x:h.aim.x,y:h.aim.y};const O=m?z/Math.max(g,.001):0,E=m?I/Math.max(g,.001):0;this.swipe.x+=(O-this.swipe.x)*(1-Math.exp(-g*6)),this.swipe.y+=(E-this.swipe.y)*(1-Math.exp(-g*6));const D=.5*Math.sin(S*.11)+.25*Math.sin(S*.27+1.3),K=.25+_*1.6+this.gust*1.2,k=new Q(Math.cos(D)*K,.15*Math.sin(S*.19),Math.sin(D)*K*.4);k.x+=lf.clamp(this.swipe.x,-4,4)*1.6*c.hands.wind,k.y+=lf.clamp(this.swipe.y,-4,4)*1*c.hands.wind;const j=m?lf.clamp((h.openness-.6)/.4,-1,1)*c.hands.release:0,ce=c.field.drift,re=Math.min(1,ce*2),W=Math.sqrt(Math.min(1,3/Math.max(1,Math.round(c.field.count)))),te=Math.min(.72,W*(ce*(.25+_*.45)+j*.3*this.present*re)),G=R*Math.min(1,c.hands.clap)*re*W,N=Math.max(.25,c.field.return??1),F=Math.min(1,te*5),$=m&&h.openness<.15&&c.hands.release>0,U=!this.started;this.host||f.update(t,c.colour.palette,g,U);const V=Math.tan(this.camera.fov/2*Math.PI/180),Ae=o/l,Se=Math.max(0,Math.min(po,Math.round(c.field.count))),de=Math.max(1,Se);this.since+=g;const X=_v(this.since,Se),le=2.2*Math.pow(de,-.42)*this.scale;let se=0;for(let Re=0;Re<de;Re++)se+=Wf[Re].x;se/=de;let Me=0;for(let Re=0;Re<de;Re++)Me=Math.max(Me,Math.abs(Wf[Re].x-se));const be=new Q(h.aim.x*5.2,.1+h.aim.y*3,2),xe=1.2*Math.max(.4,1+(h.spread-.4)*1.6),Xe=d.seeds,He=new Q,je=new tr,tt=new tr,ot=new tr,lt=new Q,mt=new Q(0,1,0),wt=new Q(1,0,0),q=this.seedData;this.flowers.forEach((Re,ue)=>{const we=Wf[ue],Ee=ue<X;if(Re.presence+=((Ee?1:0)-Re.presence)*(1-Math.exp(-g*1.4)),U&&(Re.presence=0),!Ee&&Re.presence<.004&&(Re.presence=0),Re.root.visible=Re.presence>.002,!Re.root.visible){Re.placed=!1,this.off.fill(0,ue*Xe*3,(ue+1)*Xe*3),this.vel.fill(0,ue*Xe*3,(ue+1)*Xe*3),this.away.fill(0,ue*Xe,(ue+1)*Xe),this.flight.fill(0,ue*Xe,(ue+1)*Xe);return}const ht=le*we.k,L=(de===1?0:we.z)+this.depth,A=(15.5-L)*V*Ae,ne=de===1?0:(we.x-se)/Math.max(.5,Me)*A*(.66+.24*Math.min(1,(de-1)/12)),ye=.1-(15.5-L)*V,Ce=.1+(15.5-L)*V;let Ie=de===1?we.y:we.y*Math.min(1,.5+de*.1);Ie=Math.min(Ie,ye-d.foot*ht-.4,Ce-ht*1.5),He.set(ne,Ie,L),Re.placed||(Re.at.copy(He),Re.size=ht,Re.placed=!0),Re.at.lerp(He,1-Math.exp(-g*1.2)),Re.size+=(ht-Re.size)*(1-Math.exp(-g*1.2));const Ve=1-Math.pow(1-Re.presence,3);Re.root.position.set(Re.at.x,Re.at.y-(1-Ve)*-d.foot*Re.size*.8,Re.at.z),Re.root.rotation.y=we.yaw,Re.root.scale.setScalar(Re.size*(.6+.4*Ve));const me=Re.root.scale.x,ge=Math.cos(we.yaw),ke=Math.sin(we.yaw),Ke=this.dance,Ne=Re.at.x*.35,Fe=c.field.sway*(.45+_*1),dt=Fe*(.85*Math.sin(Vn*Ke/5.2-Ne+we.ph*.3)+.15*Math.sin(Vn*Ke/3.3+we.ph*1.7))+k.x*.22+this.gust*.5,gt=Fe*.3*Math.sin(Vn*Ke/7.1+we.ph*2.3)+k.z*.22;Re.bend.x+=(dt-Re.bend.x)*(1-Math.exp(-g*1.6)),Re.bend.y+=(gt-Re.bend.y)*(1-Math.exp(-g*1.6));const Et=Re.bend.x,Y=Re.bend.y;Re.u.uBend.value.set(Et*ge-Y*ke,0,Et*ke+Y*ge);const Oe=c.field.sway*(.12+_*.3);Re.u.uWave.value.set(Oe*ge,Oe*ke),Re.u.uWavePhase.value=Vn*Ke/1.6-Ne*2+we.ph;const _e=c.field.bounce*Re.size*((.08+_*.22)*Math.sin(Vn*Ke/1.2-Ne+we.ph)+.3*this.hop*(.6+.4*Bi(ue+7)));Re.root.position.y+=_e,Re.u.uShimmer.value=h.high*c.sound.high*2;const qe=Re.root.position.x+Et*me,Te=Re.root.position.y,ve=Re.root.position.z+Y*me;for(let $e=0;$e<Xe;$e++){const nt=ue*Xe+$e,pt=nt*3;P&&Bi(nt*1.37+S*7.3)<G?this.hold[nt]=(Vf[0]+Bi(nt+S)*(Vf[1]-Vf[0]))/N:M&&Bi(nt*.71+S*13.1)<.008*c.sound.gust*ce*W&&(this.hold[nt]=(Hf[0]+Bi(nt+S*3.1)*(Hf[1]-Hf[0]))/N),this.hold[nt]=Math.max(0,this.hold[nt]-g);const Kt=.06*F*Math.sin(S*.37+this.phase[nt]);$&&(this.flight[nt]=0);const Yt=!$&&(this.hold[nt]>0||this.flight[nt]>0||te+Kt>this.thresh[nt]),Wn=d.pivot[$e*3],Xn=d.pivot[$e*3+1],ai=d.pivot[$e*3+2],li=d.axis[$e*3],jn=d.axis[$e*3+1],gi=d.axis[$e*3+2],rr=li*ge+gi*ke,Kn=-li*ke+gi*ge;if(Yt&&!this.away[nt]){this.flight[nt]=(6+Math.random()*6)/N,this.pickDestination(nt,V,Ae);const C=.4+(P&&this.hold[nt]>0?3.2*c.hands.clap*R:0);this.vel[pt]+=rr*C,this.vel[pt+1]+=jn*C+.2,this.vel[pt+2]+=Kn*C}this.away[nt]=Yt?1:0;let cn=this.off[pt],Rn=this.off[pt+1],dn=this.off[pt+2],_n=this.vel[pt],yn=this.vel[pt+1],Pn=this.vel[pt+2];if(x>0||Yt){const C=Math.max(x,0),Z=qe+(Wn*ge+ai*ke)*me+cn,fe=Te+Xn*me+Rn,ie=ve+(-Wn*ke+ai*ge)*me+dn,oe=Math.sin(fe*.9+S*.7+this.phase[nt])*.6,Be=Math.sin(Z*.7-S*.5+this.phase[nt]*.5)*.45,Je=Math.sin(ie*.8+Z*.5+S*.6)*.4;if(Yt){this.flight[nt]=Math.max(0,this.flight[nt]-C);const De=nt*3;let Ze=this.dest[De]-Z,rt=this.dest[De+1]-fe,Mt=this.dest[De+2]-ie;const vt=Math.hypot(Ze,rt,Mt);vt<.8&&this.pickDestination(nt,V,Ae);const it=(1.2+.9*Bi(nt*2.9))*Math.min(1,vt/2);Ze=Ze/Math.max(vt,.001)*it,rt=rt/Math.max(vt,.001)*it,Mt=Mt/Math.max(vt,.001)*it;let Lt=(Ze-_n)*.7+k.x*.3+oe*.8,Gt=(rt-yn)*.7+k.y*.3+Be*.8+.05,Wt=(Mt-Pn)*.7+k.z*.3+Je*.6;if(this.present>.01&&c.hands.follow>0){const Sn=be.x-Z,An=be.y-fe,Ct=be.z-ie,Nn=Math.hypot(Sn,An,Ct)+.001,Ft=this.present*c.hands.follow*Math.min(1,Nn/xe-.6);Lt+=Sn/Nn*Ft*2.2-An/Nn*this.present*c.hands.follow*1.4,Gt+=An/Nn*Ft*2.2+Sn/Nn*this.present*c.hands.follow*1.4,Wt+=Ct/Nn*Ft*1.2}const Ht=(15.5-ie)*V,rn=Ht*Ae,Qe=Math.abs(Z)-rn*1.02;Qe>0&&(Lt-=Math.sign(Z)*Qe*1.5);const un=Math.abs(fe-.1)-Ht*1.02;un>0&&(Gt-=Math.sign(fe-.1)*un*1.5),ie>6&&(Wt-=(ie-6)*1.5),ie<-8&&(Wt+=(-8-ie)*1.5),_n+=Lt*C*1.6,yn+=Gt*C*1.6,Pn+=Wt*C*1.6;const Tt=Math.exp(-C*.5);_n*=Tt,yn*=Tt,Pn*=Tt}else{const De=Math.hypot(cn,Rn,dn),Ze=Math.min(1.8*N,De*.9*N)/Math.max(De,1e-4),rt=-cn*Ze+oe*Math.min(1,De)*.6,Mt=-Rn*Ze+Be*Math.min(1,De)*.6,vt=-dn*Ze+Je*Math.min(1,De)*.6,it=1-Math.exp(-C*2.4);_n+=(rt-_n)*it,yn+=(Mt-yn)*it,Pn+=(vt-Pn)*it,De<.004&&Math.hypot(_n,yn,Pn)<.02&&(cn=Rn=dn=_n=yn=Pn=0)}cn+=_n*C,Rn+=yn*C,dn+=Pn*C}this.off[pt]=cn,this.off[pt+1]=Rn,this.off[pt+2]=dn,this.vel[pt]=_n,this.vel[pt+1]=yn,this.vel[pt+2]=Pn;const Wi=Math.hypot(cn,Rn,dn)/me,sr=Math.min(1,Wi/.8),ct=this.turn.subarray(nt*4,nt*4+4);if(je.set(ct[0],ct[1],ct[2],ct[3]),sr>.001){lt.set(li,jn,gi),ot.setFromUnitVectors(lt,mt);const C=S*.6+this.phase[nt];tt.setFromAxisAngle(mt,C),ot.premultiply(tt),tt.setFromAxisAngle(wt,.3*Math.sin(S*1.3+this.phase[nt]*2)),ot.premultiply(tt),tt.identity().slerp(ot,sr),je.slerp(tt,1-Math.exp(-g*3))}else je.slerp(tt.identity(),1-Math.exp(-g*6));ct[0]=je.x,ct[1]=je.y,ct[2]=je.z,ct[3]=je.w;const yt=(ue*Xe*2+$e*2)*4,Mn=(cn*ge-dn*ke)/me,vi=(cn*ke+dn*ge)/me;q[yt]=Mn,q[yt+1]=Rn/me,q[yt+2]=vi,q[yt+3]=1-Math.min(1,Wi/.6),q[yt+4]=je.x,q[yt+5]=je.y,q[yt+6]=je.z,q[yt+7]=je.w}const We=Re.shared;We.uT.value=this.colourTime,We.uOff.value=we.off+c.colour.offset,f.apply(We,c.colour.depth,.16*(1+h.high*c.sound.high*2))}),this.started=!0,this.seedTex.needsUpdate=!0,this.viewport.value.set(o,l),this.time.value=S,this.strokeWidth.value=Math.max(1,l/620)}}const ag={colour:{speed:1,offset:0,palette:0,style:0,depth:.32},swarm:{count:4,zoom:1,height:0,size:1,drift:1,pulse:1,tentacles:1,backdrop:1,arrival:5},hands:{follow:1,spread:1,clap:1},sound:{beat:1,bass:1,mid:1,high:1,flow:1,swell:0}};class hw{constructor(e,t,r=120,o=20){B(this,"mesh");B(this,"curve");B(this,"position");B(this,"normal");B(this,"points",[]);B(this,"tangents",[]);this.anchors=t,this.length=r,this.sides=o,this.curve=new zy(t,!1,"centripetal");const l=(r+1)*(o+1),c=new ln;this.position=new kt(new Float32Array(l*3),3),this.normal=new kt(new Float32Array(l*3),3),this.position.setUsage(Zm),this.normal.setUsage(Zm);const f=new Float32Array(l*2),d=[];for(let h=0;h<=r;h++)for(let g=0;g<=o;g++){const x=h*(o+1)+g;if(f[x*2]=h/r,f[x*2+1]=g/o,h<r&&g<o){const m=x,_=x+o+1;d.push(m,_,m+1,_,_+1,m+1)}}c.setAttribute("position",this.position),c.setAttribute("normal",this.normal),c.setAttribute("uv",new kt(f,2)),c.setIndex(d);for(let h=0;h<=r;h++)this.points.push(new Q),this.tangents.push(new Q);this.mesh=new Un(c,e),this.mesh.frustumCulled=!1}update(e,t=1){const{curve:r,points:o,tangents:l,length:c,sides:f}=this;r.updateArcLengths();for(let S=0;S<=c;S++)r.getPointAt(S/c,o[S]);for(let S=0;S<=c;S++){const T=o[Math.max(0,S-1)],y=o[Math.min(c,S+1)];l[S].subVectors(y,T).normalize()}const d=new Q,h=new Q,g=new Q,x=l[0];d.set(0,0,1).addScaledVector(x,-x.z),d.lengthSq()<1e-6&&d.set(1,0,0).addScaledVector(x,-x.x),d.normalize();const m=this.position.array,_=this.normal.array;for(let S=0;S<=c;S++){const T=l[S];d.addScaledVector(T,-d.dot(T)).normalize(),h.crossVectors(T,d);const y=o[S],M=e*(1+(t-1)*(S/c));for(let w=0;w<=f;w++){const P=w/f*Vn;g.copy(d).multiplyScalar(-Math.cos(P)).addScaledVector(h,Math.sin(P));const R=(S*(f+1)+w)*3;m[R]=y.x+g.x*M,m[R+1]=y.y+g.y*M,m[R+2]=y.z+g.z*M,_[R]=g.x,_[R+1]=g.y,_[R+2]=g.z}}this.position.needsUpdate=!0,this.normal.needsUpdate=!0}}const lg=9,Zl=8,cg=4,$l=9,ug=[{c:[.2,.9,0],a:[1.6,.5,.8],s:1.25,off:0,ph:0,pulses:6},{c:[-3.9,1.5,-1.2],a:[1.2,.6,.8],s:1,off:.37,ph:2.1,pulses:7},{c:[4.1,.4,-.8],a:[1.1,.7,.6],s:1.05,off:.71,ph:4,pulses:5},{c:[-2,-.9,1.2],a:[1.4,.4,.5],s:.8,off:.18,ph:1,pulses:8},{c:[2.4,2.4,-3],a:[1.3,.5,.8],s:.85,off:.55,ph:3.2,pulses:6},{c:[-5.6,-.4,-2.6],a:[.9,.6,.6],s:.8,off:.86,ph:5,pulses:7},{c:[5.8,2,-4],a:[.8,.5,.6],s:.7,off:.28,ph:.6,pulses:9},{c:[-.6,2.7,-5],a:[1.6,.4,.8],s:.7,off:.63,ph:2.7,pulses:8}],dw=[[],[0],[1,2],[0,1,2],[0,1,2,3],[0,1,2,3,4],[0,1,2,3,4,5],[0,1,2,3,4,5,6],[0,1,2,3,4,5,6,7]],Xf=.62,pw=.55;function fg(s,e,t=new Q){return t.set(Math.sin(s)*.86*Math.cos(e),-.86*Math.sin(e)+.04,Math.cos(s)*.86*Math.cos(e))}function mw(s){const e=(s/Vn%1+1)%1;return e<.22?Math.sin(e/.22*(Math.PI/2)):.5+.5*Math.cos((e-.22)/.78*Math.PI)}class gw{constructor(e,t,r=null){B(this,"canvas");B(this,"ctx");B(this,"cfg",ag);B(this,"host");B(this,"surface");B(this,"renderer",null);B(this,"scene");B(this,"camera");B(this,"look",null);B(this,"group",new Gi);B(this,"swarm",[]);B(this,"geometries",[]);B(this,"failed",!1);B(this,"playing",new Cs(.6));B(this,"motionTime",0);B(this,"pace",1);B(this,"handHold",0);B(this,"colourTime",0);B(this,"started",!1);B(this,"since",0);B(this,"current",0);B(this,"carry",0);B(this,"swell",0);B(this,"bassAvg",0);this.canvas=e,this.ctx=t,this.host=r,this.surface=document.createElement("canvas"),this.scene=r?r.scene:new yc,this.camera=r?r.camera:new si(30,16/9,.1,100);try{r||(this.renderer=cd(this.surface)),this.look=r?r.look:new Sv,this.build(this.look)}catch(o){console.error("Jellyfish could not start:",o),this.failed=!0}}setParams(e){this.cfg=Ts(ag,e)}build(e){const t=new vc(1,44,30),r=new vc(1,40,26);this.geometries.push(t,r),this.scene.add(this.group);for(const o of ug){const l=e.shared(),c=e.shared(),f=new Gi;this.group.add(f);const d=[],h=[];for(let _=0;_<lg;_++){const S=_/lg*Vn,T=new Gi;T.rotation.y=S;const y=new Gi;y.rotation.x=Xf,T.add(y);const M=new Un(t,e.material(ZE,l,{uAng:{value:S}}));M.scale.set(.42,.18,.52),M.position.set(0,_*5%3*.02,.48),y.add(M),f.add(T),d.push(y),h.push(M)}const g=new Un(r,e.material(ew,l));g.scale.set(.44,.26,.44),g.position.y=-.1,f.add(g);const x=[],m=e.material($E,c,{uWS:{value:.6}});for(let _=0;_<Zl+cg;_++){const S=_>=Zl,T=S?(_-Zl)/cg*Vn+.4:_/Zl*Vn+.2,y=S?new Q(Math.sin(T)*.08,-.25,Math.cos(T)*.08):fg(T,Xf),M=Array.from({length:$l},()=>new Q),w=new hw(m,M,S?48:64,S?10:6);this.group.add(w.mesh),x.push({tube:w,from:y,links:M,angle:S?null:T,link:S?.2:.42,radius:S?.085:.028,phase:T*1.7+_})}this.swarm.push({spec:o,root:f,tilts:d,lobes:h,cap:g,strands:x,shared:l,strandShared:c,presence:0,beat:o.ph,lift:0,rise:0,pull:new Q,up:new Q(0,1,0),last:null,primed:!1})}}destroy(){var e;this.host||(e=this.look)==null||e.dispose(),this.look=null;for(const t of this.geometries)t.dispose();this.host?(this.scene.remove(this.group),this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())})):this.renderer&&fd(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const d=this.renderer;if(this.failed||!d||!this.look){ud(o,c,f,"JELLYFISH");return}Av(this.camera,c,f);const h=-l.swarm.height*4.5;this.camera.position.set(0,.5+h,15.5/Math.max(.3,l.swarm.zoom)),this.camera.lookAt(0,.1+h,0),this.update(e,t,r),(this.surface.width!==c||this.surface.height!==f)&&d.setSize(c,f,!1),d.render(this.scene,this.camera),this.look.backdrop(o,c,f,l.swarm.backdrop),o.drawImage(this.surface,0,0,c,f)}update(e,t,r){const{cfg:o}=this,l=this.look;if(!l||this.failed)return;const c=this.playing;c.read(e,r);const{dt:f}=c;this.pace+=(Math.max(0,c.step)-this.pace)*(1-Math.exp(-f*.6));const d=this.pace*.6,h=c.burst*o.hands.clap,g=c.bump*o.sound.beat,x=!e.synthetic&&(e.left||e.right)?1:0;this.handHold+=(x-this.handHold)*(1-Math.exp(-f*3)),this.motionTime+=d,this.colourTime+=(d*o.colour.speed*(1+c.mid*o.sound.mid*1.2)+f*h*.9)/oc;const m=this.motionTime,_=Vn*m/oc,S=Math.max(0,Math.min(8,Math.round(o.swarm.count))),T=!this.started;this.host||l.update(t,o.colour.palette,f,T,o.colour.style),this.since+=f;const y=new Set(dw[S].slice(0,_v(this.since*.55*(5/Math.max(1,o.swarm.arrival)),S)));T&&(this.started=!0,this.swarm.forEach(N=>{N.presence=0}));const M=r!=null&&r.live?r.bass:0,w=Math.max(0,M-this.bassAvg-.12);this.bassAvg+=(M-this.bassAvg)*(1-Math.exp(-f*.5));const P=Math.min(1,w*2.2)*o.sound.swell;this.swell+=(P-this.swell)*(1-Math.exp(-f*(P>this.swell?2.5:.45)));const R=(x?Math.max(.3,1+(c.spread-.4)*o.hands.spread*1.6):1)*(1+this.swell*.9),z=new Q(c.aim.x*4.6,c.aim.y*2.1,0).multiplyScalar(o.hands.follow*x),I=o.swarm.drift*(1+c.bass*o.sound.bass*.8),E=!!(r!=null&&r.live)?.35+.65*c.energy+.4*c.mid:.35;this.carry+=(o.sound.flow*E-this.carry)*(1-Math.exp(-f*.35)),this.current+=d*(.18+.5*this.carry);const D=.16*(1+c.high*o.sound.high*2.5),K=1+c.high*o.sound.high*1.5,k=o.swarm.size,j=new Q,ce=new tr,re=new Q(0,1,0),W=new Q,te=new Q,G=new Q;this.swarm.forEach((N,F)=>{const $=y.has(F)?1:0;N.presence=$>N.presence?Math.min($,N.presence+f/Math.max(1,o.swarm.arrival)):Math.max($,N.presence-f/3),N.presence<.004&&$===0&&(N.presence=0);const U=N.presence>.002;N.root.visible=U;for(const Re of N.strands)Re.tube.mesh.visible=U;if(!U){N.last=null,N.primed=!1;return}const V=N.spec;N.beat+=d*Vn*(V.pulses/oc)+f*h*Vn*1.5;const Ae=mw(N.beat),Se=Math.min(1.3,Math.max(Ae,g*.7)+h*.4),de=(N.grip??0)+(c.fist-(N.grip??0))*(1-Math.exp(-f*(7-F*.7))),X=Math.max(0,(de-(N.gripWas??de))/Math.max(f,.001));N.gripWas=de,N.grip=de;const le=this.handHold,se=(Se*(1-le)+de*le)*o.swarm.pulse,Me=(Math.min(1.3,Ae+g*.15+h*.4+this.swell*.5)*(1-le)+Math.min(1.3,X*.35)*le)*o.swarm.pulse,be=N.presence*N.presence;N.rise+=(Me*1.5*be-N.rise*1.2)*f,N.lift+=(N.rise-N.lift*.35)*f*.8,j.set(V.c[0]*R+V.a[0]*I*Math.sin(_+V.ph),V.c[1]*Math.min(1.4,R)+V.a[1]*I*Math.sin(2*_+V.ph*1.7),V.c[2]+V.a[2]*I*Math.cos(_+V.ph*.6));const xe=this.current-F*.35;j.x+=Math.sin(xe+V.ph*.5)*.9*this.carry,j.y+=Math.sin(xe*.63+V.ph)*.3*this.carry,j.z+=Math.cos(xe*.8+V.ph*1.3)*.5*this.carry;const Xe=.8+1.6*(1-F/ug.length);N.pull.lerp(z,1-Math.exp(-f*Xe)),j.add(N.pull),h>.001&&(W.set(j.x,j.y-.5,0),W.lengthSq()<.01&&W.set(F%2?1:-1,.4,0),j.addScaledVector(W.normalize(),h*2.6));{const Re=N.presence,ue=.15+.85*Re*Re*Re,we=V.c[0]*R,Ee=V.c[2];j.x=we+(j.x-we)*ue,j.z=Ee+(j.z-Ee)*ue}if(N.last){W.subVectors(j,N.last).divideScalar(Math.max(f,.001));const Re=new Q(W.x*.12,1,W.z*.08).normalize();N.up.lerp(Re,1-Math.exp(-f*1.5)).normalize()}N.last=(N.last??new Q).copy(j),j.addScaledVector(N.up,N.lift-.6);const He=N.presence,je=He*He*He*(He*(He*6-15)+10);j.y-=(1-je)*7,j.y-=.9;const tt=V.s*k*(.3+.7*je)*(1+c.bass*o.sound.bass*.08+g*.04);{const Re=this.camera.position,ue=Math.tan(this.camera.fov*Math.PI/360)*Math.max(1,Re.z-j.z),Ee=Re.y+ue-1.5*tt-.8;j.y>Ee&&(j.y=Ee+.8*(1-Math.exp(-(j.y-Ee)/.8)))}N.root.position.copy(j),ce.setFromUnitVectors(re,N.up),N.root.quaternion.copy(ce),N.root.rotateY(Math.sin(_+V.ph)*.4*N.presence),N.root.scale.setScalar(tt);const ot=Xf+pw*se;for(const Re of N.tilts)Re.rotation.x=ot;for(const Re of N.lobes)Re.scale.y=.18*(1-.18*se);N.cap.scale.set(.44*(1-.2*se),.26*(1+.08*se),.44*(1-.2*se)),N.root.updateMatrix();const lt=o.swarm.tentacles,mt=N.up.clone().negate();te.set(1,0,0).applyQuaternion(N.root.quaternion);for(const Re of N.strands){const ue=Re.links;Re.angle!==null&&fg(Re.angle,ot,Re.from);const we=ue[0].copy(Re.from).applyMatrix4(N.root.matrix);if(!N.primed)for(let Ee=1;Ee<$l;Ee++)ue[Ee].copy(we).addScaledVector(mt,Re.link*tt*lt*Ee);for(let Ee=1;Ee<$l;Ee++){const ht=ue[Ee-1],L=ue[Ee];W.subVectors(L,ht),W.lengthSq()<1e-8&&W.copy(mt),W.normalize().lerp(mt,.22+.1*se).normalize();const A=Math.sin(Re.phase+_*3*K-Ee*.75)*.06*K*(Ee/$l);W.addScaledVector(te,A).normalize(),L.copy(ht).addScaledVector(W,Re.link*tt*lt)}Re.tube.update(Re.radius*tt,.25)}N.primed=!0;const wt=N.shared;wt.uT.value=this.colourTime,wt.uOff.value=V.off+o.colour.offset,wt.uWA.value=1,wt.uWB.value=.6,wt.uWC.value=.8+.4*Math.sin(_+V.ph);const q=N.strandShared;q.uT.value=this.colourTime,q.uOff.value=V.off+.15+o.colour.offset,l.apply(wt,o.colour.depth,D),l.apply(q,o.colour.depth,D)}),this.scene.updateMatrixWorld(!0),this.camera.updateMatrixWorld(!0);for(const N of this.swarm)N.root.visible&&(N.cap.getWorldPosition(G),G.applyMatrix4(this.camera.matrixWorldInverse),N.shared.uCenter.value.copy(G))}}const hg={grid:{detail:.5,field:.5,figure:.4,words:1,zoom:1},hands:{light:1,close:1,clap:1},sound:{beat:1,quiet:1}};let Wh=null,wv=0,ac=0;function vw(){ac++;let s=!1;return()=>{s||(s=!0,ac=Math.max(0,ac-1))}}function xw(){return ac>0}function _w(s,e,t){if(s.length<e*t)return;const r=new Uint8Array(e*t);for(let o=0;o<t;o++)for(let l=0;l<e;l++)r[o*e+l]=s[o*e+(e-1-l)];Wh={data:r,width:e,height:t},wv=performance.now()}const yw=4e3;function Mw(){return Wh&&performance.now()-wv<yw?Wh:null}function Sw(s,e,t){const r=Math.min(s.width-1.001,Math.max(0,e*(s.width-1))),o=Math.min(s.height-1.001,Math.max(0,t*(s.height-1))),l=Math.floor(r),c=Math.floor(o),f=r-l,d=o-c,h=c*s.width+l,g=s.data[h],x=s.data[h+1],m=s.data[h+s.width],_=s.data[h+s.width+1];return(g+(x-g)*f+(m-g)*d+(g-x-m+_)*f*d)/255}const da=8;function dg(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class Aw{constructor(e,t){B(this,"canvas");B(this,"ctx");B(this,"cfg",hg);B(this,"playing",new Cs(.6));B(this,"lit",new Float32Array(0));B(this,"columns",0);B(this,"rows",0);B(this,"time",0);B(this,"real",0);B(this,"closed",0);B(this,"focus",{x:.89,y:.5});B(this,"rings",[]);B(this,"lastKick",0);B(this,"breath",0);B(this,"release",null);B(this,"glow",document.createElement("canvas"));B(this,"glowKey","");this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ts(hg,e)}destroy(){var e;(e=this.release)==null||e.call(this),this.release=null}tint(e){if(e===this.glowKey)return;this.glowKey=e;const[t,r,o]=dg(e);this.glow.width=this.glow.height=96;const l=this.glow.getContext("2d");l.clearRect(0,0,96,96);const c=l.createRadialGradient(48,48,0,48,48,48),f=d=>Math.round(d+(255-d)*.6);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.1,`rgba(${f(t)},${f(r)},${f(o)},0.9)`),c.addColorStop(.35,`rgba(${t},${r},${o},0.25)`),c.addColorStop(1,`rgba(${t},${r},${o},0)`),l.fillStyle=c,l.fillRect(0,0,96,96)}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=f/d,g=this.playing;g.read(e,r);const{dt:x}=g,m=Math.min(.08,Math.max(0,g.step));this.time+=m,this.real+=x;const _=xe=>1-Math.exp(-x*xe);this.tint(t[0]??"#8fb4ff"),c.grid.figure>.01&&!this.release&&(this.release=vw()),c.grid.figure<=.01&&this.release&&(this.release(),this.release=null);const S=Math.round(Math.max(8,Math.min(150,(22+34*Math.max(0,Math.min(1,c.grid.detail)))/Math.max(.2,c.grid.zoom)))),T=Math.round(S*h);(S!==this.rows||T!==this.columns)&&(this.rows=S,this.columns=T,this.lit=new Float32Array(S*T));const y=1/S,M=[e.left,e.right].filter(Boolean),w=M.length>0&&!e.synthetic;let P=M.map(xe=>{const Xe=xe.openness??(xe.gesture==="fist"?0:1),He=xe.depth??.35;return{x:xe.position.x*h,y:xe.position.y,reach:(.04+.19*Xe*Xe)*c.hands.light*(.8+.6*He),power:.85+.5*He}});if(P.length&&!w&&(P=[{x:P.reduce((xe,Xe)=>xe+Xe.x,0)/P.length,y:P.reduce((xe,Xe)=>xe+Xe.y,0)/P.length,reach:.13*c.hands.light,power:.7}]),P.length){const xe=P.reduce((He,je)=>He+je.x,0)/P.length,Xe=P.reduce((He,je)=>He+je.y,0)/P.length;this.focus.x+=(xe-this.focus.x)*_(6),this.focus.y+=(Xe-this.focus.y)*_(6)}else this.focus.x+=(h/2-this.focus.x)*_(.8),this.focus.y+=(.5-this.focus.y)*_(.8);const R=!!(r!=null&&r.live);let z=0;w?z=g.fist*c.hands.close:R&&(z=Math.max(0,Math.min(.8,(.3-g.energy)*3.2))*c.sound.quiet),this.closed+=(Math.min(1,z)-this.closed)*_(z>this.closed?1.7:2.6),g.clapped&&c.hands.clap>0&&(this.rings.push({x:this.focus.x,y:this.focus.y,at:0,strength:g.clapStrength*c.hands.clap}),this.closed*=.25);const I=(xe,Xe,He)=>{const je=Math.max(0,Math.min(1,(He-xe)/(Xe-xe)));return je*je*(3-2*je)},O=I(.04,.62,this.closed),E=I(.55,1,this.closed),D=Math.max(g.kick,g.bump)*c.sound.beat;D>.45&&this.lastKick<=.45&&(this.rings.push({x:this.focus.x,y:this.focus.y,at:0,strength:.16+.14*Math.min(1,D)}),this.rings.length>6&&this.rings.shift()),this.lastKick=D;for(const xe of this.rings)xe.at+=x;this.rings=this.rings.filter(xe=>xe.at<2.6),this.breath+=(g.bass-this.breath)*_(3);const K=this.release?Mw():null,k=c.grid.figure,j=c.grid.field,ce=this.time,re=this.lit,W=_(16),te=_(2.4),G=P[0],N=P[1];let F=0,$=0,U=0;G&&N&&(F=N.x-G.x,$=N.y-G.y,U=F*F+$*$);for(let xe=0;xe<S;xe++){const Xe=(xe+.5)*y;for(let He=0;He<T;He++){const je=(He+.5)*y;let tt=j*(.16+.07*Math.sin(je*2.1+Xe*1.3-ce*.5)+.04*Math.sin(je*.9-Xe*2.7+ce*.31));K&&k>.01&&(tt+=Sw(K,je/h,Xe)*.34*k);for(const lt of P){const mt=je-lt.x,wt=Xe-lt.y;tt+=lt.power*Math.exp(-(mt*mt+wt*wt)/(lt.reach*lt.reach))}if(U>1e-5){const lt=Math.max(0,Math.min(1,((je-G.x)*F+(Xe-G.y)*$)/U)),mt=Math.hypot(je-(G.x+F*lt),Xe-(G.y+$*lt));tt+=.55*Math.exp(-(mt*mt)/(y*y*.5))}for(const lt of this.rings){const mt=Math.hypot(je-lt.x,Xe-lt.y)-lt.at*.85;mt>-.09&&mt<.09&&(tt+=lt.strength*Math.exp(-(mt*mt)/.0011)*(1-lt.at/2.6))}const ot=xe*T+He;re[ot]+=(tt-re[ot])*(tt>re[ot]?W:te)}}l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,d);const V=[];for(let xe=0;xe<da;xe++)V.push(new Path2D);const Ae=y*d,Se=1+.18*this.breath,de=this.focus.x,X=this.focus.y;for(let xe=0;xe<S;xe++){if(O>.97&&xe%3!==0)continue;const Xe=(xe+.5)*y,He=(X+(Xe-X)*(1-O))*d;for(let je=0;je<T;je++){const tt=re[xe*T+je];if(tt<.03)continue;const ot=(je+.5)*y,lt=(de+(ot-de)*(1-E))*d,mt=Math.min(da-1,Math.floor(Math.min(.999,tt)*da)),wt=Ae*Math.min(.5,.07+.4*Math.min(1,tt))*Se*(1-.45*O),q=V[mt];q.moveTo(lt+wt,He),q.arc(lt,He,wt,0,Math.PI*2)}}const[le,se,Me]=dg(t[0]??"#8fb4ff"),be=1-.82*O;for(let xe=0;xe<da;xe++){const Xe=xe/(da-1),He=(je,tt)=>{const ot=tt+(255-tt)*Math.min(1,.35+Math.max(0,Xe*1.6-.6));return Math.round(je+(ot-je)*Math.min(1,Xe*1.4))};l.fillStyle=`rgb(${He(150,le)},${He(156,se)},${He(170,Me)})`,l.globalAlpha=Math.min(1,(.3+.7*Xe)*be),l.fill(V[xe])}if(E>.02){const xe=Ae*(2.4+5*E)*(1+.25*this.breath);l.globalCompositeOperation="lighter",l.globalAlpha=Math.min(1,E*1.2),l.drawImage(this.glow,de*d-xe,X*d-xe,xe*2,xe*2),l.globalCompositeOperation="source-over"}if(c.grid.words>.01){const xe=d/720,Xe=Math.max(9,Math.round(11*xe));l.font=`500 ${Xe}px ui-monospace, SFMono-Regular, Menlo, monospace`,l.textBaseline="alphabetic",l.textAlign="left";let He;this.closed>.9?He="standby":this.closed>.25?He="closing":w?He=P.length>1?"two hands":"one hand":He=R?"listening":"waiting";const je=lt=>Math.round(lt+(255-lt)*.7);l.fillStyle=`rgb(${je(le)},${je(se)},${je(Me)})`,l.globalAlpha=.6*c.grid.words;const tt=20*xe,ot=d-20*xe;if(l.fillText(He,tt,ot),Math.floor(this.real*1.6)%2===0){const lt=l.measureText(He).width;l.fillRect(tt+lt+5*xe,ot-Xe*.82,Xe*.55,Xe)}}l.globalAlpha=1}}const pg={shape:{size:1,morph:.12,lobes:1,detail:4,style:2,steady:0},motion:{spin:1,flow:1,dust:.5,points:1400,glide:0},hands:{shape:1,follow:.25,clap:1},sound:{bass:1,beat:1,spin:1,drop:1,squash:0}};class Ew{constructor(e,t){B(this,"canvas");B(this,"ctx");B(this,"cfg",pg);B(this,"playing",new Cs(.6));B(this,"surface",document.createElement("canvas"));B(this,"scene",new yc);B(this,"camera",new si(50,16/9,.1,100));B(this,"renderer");B(this,"group",new Gi);B(this,"corners",new Float32Array(0));B(this,"edges",new Uint32Array(0));B(this,"shaped",new Float32Array(0));B(this,"points",null);B(this,"lines",null);B(this,"builtDetail",-1);B(this,"wire");B(this,"dots");B(this,"dust");B(this,"time",0);B(this,"flow",0);B(this,"spin",0);B(this,"pull",0);B(this,"swell",0);B(this,"pulse",0);B(this,"burst",0);B(this,"lastDrop",0);B(this,"dent",0);B(this,"dentDir",new Q(1,0,0));B(this,"dentAim",new Q(1,0,0));B(this,"dentTo",0);B(this,"pace",0);B(this,"turn",0);B(this,"lastSquash",0);B(this,"at",new Ut);this.canvas=e,this.ctx=t,this.renderer=new vv({canvas:this.surface,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(1),this.renderer.setClearColor(0,1),this.camera.position.set(0,0,7.5),this.camera.lookAt(0,0,0),this.scene.add(this.group),this.wire=new iv({color:6737151,transparent:!0,opacity:.85}),this.dots=new Bh({color:6737151,size:.09,transparent:!0,opacity:1,depthWrite:!1});const r=6e3,o=new Float32Array(r*3);for(let c=0;c<r;c++){const f=4+Math.random()*14,d=Math.random()*Math.PI*2,h=Math.random()*2-1,g=Math.sqrt(1-h*h);o.set([f*g*Math.cos(d),f*h,-Math.abs(f*g*Math.sin(d))-3],c*3)}const l=new ln;l.setAttribute("position",new kt(o,3)),this.dust=new Hh(l,new Bh({color:16777215,size:.03,transparent:!0,opacity:.5,depthWrite:!1})),this.scene.add(this.dust)}setParams(e){this.cfg=Ts(pg,e)}build(e){this.points&&(this.group.remove(this.points,this.lines),this.points.geometry.dispose(),this.lines.geometry.dispose());const t=new ad(1,e),r=t.attributes.position.array,o=new Map,l=[],c=[];for(let m=0;m<r.length;m+=3){const _=`${r[m].toFixed(4)},${r[m+1].toFixed(4)},${r[m+2].toFixed(4)}`;let S=o.get(_);S===void 0&&(S=l.length/3,o.set(_,S),l.push(r[m],r[m+1],r[m+2])),c.push(S)}const f=new Set,d=[],h=l.length/3;for(let m=0;m<c.length;m+=3)for(const[_,S]of[[c[m],c[m+1]],[c[m+1],c[m+2]],[c[m+2],c[m]]]){const T=_<S?_*h+S:S*h+_;f.has(T)||(f.add(T),d.push(_,S))}t.dispose(),this.corners=Float32Array.from(l),this.shaped=new Float32Array(l.length),this.edges=Uint32Array.from(d);const g=new ln;g.setAttribute("position",new kt(this.shaped,3));const x=new ln;x.setAttribute("position",new kt(new Float32Array(d.length*2*3),3)),this.points=new Hh(g,this.dots),this.lines=new Fy(x,this.wire),this.points.frustumCulled=!1,this.lines.frustumCulled=!1,this.group.add(this.lines,this.points),this.builtDetail=e}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=Se=>1-Math.exp(-g*Se),m=Math.max(0,c.motion.glide),_=Math.max(0,h.step);this.pace+=(_-this.pace)*(m>0?x(.7/m):1);const S=this.pace;this.time+=S;const T=Math.max(2,Math.min(6,Math.round(c.shape.detail)));T!==this.builtDetail&&this.build(T);const y=[e.left,e.right],M=!e.synthetic&&y.some(Boolean),w=M?Math.max(h.fist,h.pinch):0;this.pull+=(w*c.hands.shape-this.pull)*x(4),this.swell+=(h.bass*c.sound.bass-this.swell)*x(m>0?1.2/m:5);const P=Math.max(h.kick,h.bump)*c.sound.beat;this.pulse=Math.max(this.pulse*Math.exp(-g*6),Math.min(1,P)),h.clapped&&c.hands.clap>0&&(this.burst=Math.max(this.burst,h.clapStrength*c.hands.clap)),h.drop>.5&&this.lastDrop<=.5&&(this.burst=Math.max(this.burst,.9*c.sound.drop));const R=Math.max(h.kick,h.bump);c.sound.squash>0&&R>.45&&this.lastSquash<=.45&&(this.dentTo=Math.max(this.dentTo,Math.min(1,R)*c.sound.squash),this.dentAim.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize()),this.lastSquash=R,this.dent+=(this.dentTo-this.dent)*(m>0?x(9/m):1),this.dentTo*=Math.exp(-g*2.6),m>0?this.dentDir.lerp(this.dentAim,x(6/m)).normalize():this.dentDir.copy(this.dentAim),this.lastDrop=h.drop,this.burst*=Math.exp(-g*2.2);const z=c.shape.morph+.35*this.swell+.5*this.pull+.25*h.build;this.flow+=S*.35*c.motion.flow*(1+this.swell);const I=1.1*Math.max(.3,c.shape.lobes),O=this.flow,E=this.corners,D=this.shaped;let K=0;for(let Se=0;Se<E.length;Se+=3){const de=E[Se],X=E[Se+1],le=E[Se+2],se=Math.sin(de*I*1.7+O)*.5+Math.sin(X*I*2.1-O*.8+1.3)*.35+Math.sin((de+le)*I*1.4+O*1.3+2.1)*.3+Math.sin((X-le)*I*2.6-O*.6)*.15*(.5+this.pull),Me=Math.max(0,de*this.dentDir.x+X*this.dentDir.y+le*this.dentDir.z),be=1+se*z+this.pulse*.08*(.6+.4*Math.sin(X*3+O))+this.burst*.6*(.7+.3*se)-this.dent*.35*Me*Me;D[Se]=de*be,D[Se+1]=X*be,D[Se+2]=le*be,K+=Math.max(0,be)}if(c.shape.steady>0){const Se=K/Math.max(1,E.length/3),de=1+(1/Math.max(.3,Se)-1)*Math.min(1,c.shape.steady);for(let X=0;X<D.length;X++)D[X]*=de}this.points.geometry.attributes.position.needsUpdate=!0;const k=Math.max(0,Math.min(2,c.shape.style)),j=.5*Math.min(1,k/2),ce=this.lines.geometry.attributes.position,re=ce.array,W=this.edges;for(let Se=0,de=0;Se<W.length;Se+=2){const X=W[Se]*3,le=W[Se+1]*3,se=D[X],Me=D[X+1],be=D[X+2],xe=D[le],Xe=D[le+1],He=D[le+2];re[de++]=se,re[de++]=Me,re[de++]=be,re[de++]=se+(xe-se)*j,re[de++]=Me+(Xe-Me)*j,re[de++]=be+(He-be)*j,re[de++]=xe,re[de++]=Xe,re[de++]=He,re[de++]=xe+(se-xe)*j,re[de++]=Xe+(Me-Xe)*j,re[de++]=He+(be-He)*j}ce.needsUpdate=!0,this.lines.visible=j>.004;const te=.8*h.mid+.6*h.energy;this.turn+=(te-this.turn)*(m>0?x(.8/m):1),this.spin+=S*.35*c.motion.spin*(1+c.sound.spin*this.turn),this.group.rotation.set(.35+Math.sin(this.time*.13)*.25,this.spin,Math.sin(this.time*.09)*.2);const G=M?c.hands.follow:c.hands.follow*.3;this.at.x+=(h.aim.x*2.2*G-this.at.x)*x(2),this.at.y+=(h.aim.y*1.3*G-this.at.y)*x(2),this.group.position.set(this.at.x,this.at.y,0),this.group.scale.setScalar(1.6*Math.max(.2,c.shape.size)*(1+.05*this.pulse));const N=Math.min(1,k/2),F=new zt(t[0]??"#66ccff"),$=new zt(t[1]??t[0]??"#3300ff"),U=F.clone().lerp(new zt(1,1,1),.25+.4*this.pulse);this.wire.color.copy(U),this.dots.color.copy(U.clone().lerp($,.3)),this.dots.size=(.08+.05*this.pulse)*(1-.35*N),this.dots.opacity=1,this.wire.opacity=.55+.4*Math.min(1,this.swell+this.pulse);const V=this.dust.material;V.opacity=Math.max(0,Math.min(1,c.motion.dust));const Ae=Math.max(0,Math.min(6e3,Math.round(c.motion.points)));this.dust.geometry.setDrawRange(0,Ae),this.dust.visible=c.motion.dust>.01&&Ae>0,this.dust.rotation.y=-this.time*.03,(this.surface.width!==f||this.surface.height!==d)&&this.renderer.setSize(f,d,!1),this.camera.aspect=f/d,this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera),l.globalCompositeOperation="source-over",l.globalAlpha=1,l.drawImage(this.surface,0,0,f,d)}destroy(){fd(this.scene,this.renderer)}}const mg={look:{flow:1,zoom:1,detail:1,veins:1,grain:.5},hands:{follow:1,clap:1},sound:{beat:1,bass:1}},ww=`
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Tw=`
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
}`;class bw{constructor(e,t,r){B(this,"canvas");B(this,"ctx");B(this,"cfg",mg);B(this,"surface",document.createElement("canvas"));B(this,"renderer",null);B(this,"failed",!1);B(this,"scene",new yc);B(this,"camera",new ld(-1,1,1,-1,0,2));B(this,"material");B(this,"geometry");B(this,"playing",new Cs(.6));B(this,"time",0);B(this,"kick",0);B(this,"breath",0);B(this,"hand",new Q);B(this,"drops",Array.from({length:8},()=>new nn(0,0,-99,0)));B(this,"nextDrop",0);B(this,"lastDrop",-99);B(this,"lastBurst",0);B(this,"style");this.style=r,this.canvas=e,this.ctx=t,this.geometry=new ln,this.geometry.setAttribute("position",new kt(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),this.material=new mi({vertexShader:ww,fragmentShader:Tw,depthTest:!1,depthWrite:!1,uniforms:{uRes:{value:new Ut(1,1)},uTime:{value:0},uReal:{value:0},uStyle:{value:0},uFlow:{value:1},uDetail:{value:1},uVeins:{value:1},uGrain:{value:.5},uBass:{value:0},uKick:{value:0},uBurst:{value:0},uTurn:{value:0},uZoom:{value:1},uHand:{value:new Q},uDrops:{value:Array.from({length:8},()=>new nn(0,0,-99,0))}}});const o=new Un(this.geometry,this.material);o.frustumCulled=!1,this.scene.add(o);try{this.renderer=cd(this.surface)}catch(l){console.error("Macro could not start:",l),this.failed=!0}}setParams(e){this.cfg=Ts(mg,e)}destroy(){var e,t;this.geometry.dispose(),this.material.dispose(),(e=this.renderer)==null||e.dispose(),(t=this.renderer)==null||t.forceContextLoss(),this.renderer=null}render(e,t,r){const o=this.canvas.width,l=this.canvas.height;if(o===0||l===0)return;const c=this.renderer;if(this.failed||!c){ud(this.ctx,o,l,"MACRO");return}const{cfg:f}=this,d=this.playing;d.read(e,r);const{dt:h}=d;this.time+=Math.max(0,d.step)*3,this.kick=Math.max(this.kick*Math.exp(-h*5),d.bump*f.sound.beat),this.breath+=(d.bass*f.sound.bass-this.breath)*(1-Math.exp(-h*3));const g=e.left||e.right?1:0,x=1-Math.exp(-h*3);if(this.hand.x+=((d.aim.x+1)/2-this.hand.x)*x,this.hand.y+=((d.aim.y+1)/2-this.hand.y)*x,this.hand.z+=(g*f.hands.follow-this.hand.z)*x,this.style===4){const _=this.time*f.look.flow,S=o/l,T=(P,R,z)=>{this.drops[this.nextDrop].set(P,R,_,z),this.nextDrop=(this.nextDrop+1)%this.drops.length,this.lastDrop=_},y=()=>[(Math.random()-.5)*S*.8,(Math.random()-.5)*.8],M=()=>[(this.hand.x-.5)*S/f.look.zoom,(this.hand.y-.5)/f.look.zoom],w=d.burst*f.hands.clap;if(w>.6&&this.lastBurst<=.6){const[P,R]=g?M():y();T(P,R,2.2)}else if(d.bump>.5&&_-this.lastDrop>.6){const[P,R]=g?M():y();T(P,R,.8+d.bump*.6)}else if(_-this.lastDrop>2.6){const[P,R]=y();T(P,R,.7)}this.lastBurst=w}const m=this.material.uniforms;m.uRes.value.set(o,l),m.uTime.value=this.time,m.uReal.value=performance.now()/1e3%1e3,m.uStyle.value=this.style,m.uFlow.value=f.look.flow,m.uDetail.value=f.look.detail,m.uVeins.value=f.look.veins,m.uGrain.value=f.look.grain,m.uZoom.value=f.look.zoom,m.uBass.value=this.breath,m.uKick.value=this.kick,m.uBurst.value=d.burst*f.hands.clap,m.uTurn.value=Mv(t).hue*Math.PI/180,m.uHand.value.copy(this.hand),m.uDrops.value.forEach((_,S)=>_.copy(this.drops[S])),(this.surface.width!==o||this.surface.height!==l)&&c.setSize(o,l,!1),c.render(this.scene,this.camera),this.ctx.globalCompositeOperation="source-over",this.ctx.globalAlpha=1,this.ctx.drawImage(this.surface,0,0,o,l)}}const Cw=1.4,Rw=14,Pw=1.2,gg=(s,e)=>1/(1+1/(2*Math.PI*s)/e);class fo{constructor(e=Cw,t=Rw){B(this,"value",null);B(this,"speed",0);this.minCutoff=e,this.beta=t}next(e,t){if(this.value===null||t<=0)return this.value=e,this.speed=0,e;const r=(e-this.value)/t;this.speed+=(r-this.speed)*gg(Pw,t);const o=this.minCutoff+this.beta*Math.abs(this.speed);return this.value+=(e-this.value)*gg(o,t),this.value}reset(){this.value=null,this.speed=0}}class Lw{constructor(e=5){B(this,"recent",[]);B(this,"held",null);this.size=e}next(e){this.recent.push(e),this.recent.length>this.size&&this.recent.shift();const t=new Map;let r=e,o=0;for(const l of this.recent){const c=(t.get(l)??0)+1;t.set(l,c),(c>o||c===o&&l===this.held)&&(r=l,o=c)}return this.held=r,r}reset(){this.recent=[],this.held=null}}const vg=[{tip:8,pip:6},{tip:12,pip:10},{tip:16,pip:14},{tip:20,pip:18}];function Iw(s,e){if(!s||s.length<21)return null;const t=(x,m)=>Math.hypot((x.x-m.x)*e,x.y-m.y,(x.z-m.z)*e),r=(x,m)=>Math.hypot((x.x-m.x)*e,x.y-m.y),o=s[0],l=s[9],c=r(o,l);if(c<1e-4)return null;let f=0,d=0;for(const x of vg){const m=t(s[x.tip],o),_=t(s[x.pip],o);m>_*1.12&&f++,d+=Math.min(1,Math.max(0,(m/c-1.05)/.85))}const h=s[17];return t(s[4],h)>t(s[3],h)*1.12&&f++,{fingers:f,pinchGap:t(s[4],s[8])/c,openness:d/vg.length,size:c,angle:Math.atan2((l.x-o.x)*e,o.y-l.y)}}const xg=.32,jf=.5,Dw=180,_g=30,yg=.08,Uw=.32,Nw=.115,Mg=.16,Fw=1.3,Ow=.2,kw=.28,Bw=.7,zw=200,Hw=.3,Vw=450,Gw=140;class Sg{constructor(){B(this,"points",Array.from({length:21},()=>({x:new fo,y:new fo,z:new fo(1,6)})));B(this,"size",new fo(1,4));B(this,"angle",new fo(1.2,3));B(this,"open",new fo(2,6));B(this,"fingers",new Lw(5));B(this,"pinched",!1);B(this,"gesture","none");B(this,"gestureSince",0);B(this,"lastAngle",0);B(this,"lastAt",0);B(this,"hand",null);B(this,"seenAt",0)}read(e,t,r){const o=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const l=e.map((T,y)=>({x:this.points[y].x.next(T.x,o),y:this.points[y].y.next(T.y,o),z:this.points[y].z.next(T.z,o)})),c=Iw(e,r);if(!c)return this.hand;const f=this.fingers.next(c.fingers);this.pinched=c.pinchGap<(this.pinched?jf:xg);const d=Math.max(0,f-1),h=this.pinched?"pinch":c.openness>.62?"open":c.openness<.28?"fist":d>=3?"open":d<=0?"fist":"none";h!==this.gesture&&(this.gesture=h,this.gestureSince=t);let g=c.angle;for(;g-this.lastAngle>Math.PI;)g-=2*Math.PI;for(;g-this.lastAngle<-Math.PI;)g+=2*Math.PI;this.lastAngle=this.angle.next(g,o);const x=Math.atan2(Math.sin(this.lastAngle),Math.cos(this.lastAngle)),m=this.size.next(c.size,o),_=this.points[9],S=Math.hypot(_.x.speed,_.y.speed);return this.seenAt=t,this.hand={position:{x:l[9].x,y:l[9].y},gesture:h,pinchDistance:this.pinched?c.pinchGap*c.size:void 0,velocity:Math.min(3,S*2),holdDuration:(t-this.gestureSince)/1e3,fingerCount:f,landmarks:l,pinch:Math.min(1,Math.max(0,(jf+.25-c.pinchGap)/(jf+.25-xg*.6))),openness:Math.min(1,Math.max(0,this.open.next(c.openness,o))),depth:Math.min(1,Math.max(0,(m-yg)/(Uw-yg))),angle:x},this.hand}forget(){for(const e of this.points)e.x.reset(),e.y.reset(),e.z.reset();this.size.reset(),this.angle.reset(),this.open.reset(),this.fingers.reset(),this.pinched=!1,this.gesture="none",this.lastAt=0,this.lastAngle=0,this.hand=null}}class Ww{constructor(){B(this,"kept",{left:new Sg,right:new Sg});B(this,"trail",[]);B(this,"lastAt",0);B(this,"clapAt",-1e9);B(this,"clapStrength",0);B(this,"gap",1);B(this,"gapAt",-1e9);B(this,"closing",0);B(this,"counted",!1);B(this,"held",!1)}next(e,t,r){const o={};(e.landmarks??[]).forEach((h,g)=>{var S,T,y,M;if(!h||h.length<21)return;const x=h.map(w=>({x:1-w.x,y:w.y,z:w.z}));let _=((M=(y=(T=(S=e.handedness)==null?void 0:S[g])==null?void 0:T[0])==null?void 0:y.categoryName)==null?void 0:M.toLowerCase())==="left"?"right":"left";if(o[_]){const w=o[_],P=x[9].x<w[9].x;o.left=P?x:w,o.right=P?w:x;return}o[_]=x});const c={left:null,right:null};for(const h of["left","right"]){const g=this.kept[h];o[h]?(c[h]=g.read(o[h],t,r),c[h]&&this.trail.push({...c[h].position,hand:h})):g.hand&&t-g.seenAt<=Dw?c[h]=g.hand:g.hand&&g.forget()}this.trail.length>_g&&(this.trail=this.trail.slice(-_g)),c.gestureTrail=[...this.trail];const f=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const d=h=>{this.counted||t-this.clapAt<Vw||(this.counted=!0,this.clapAt=t,this.clapStrength=Math.min(1,Math.max(.7,h)))};if(c.left&&c.right){const h=c.right.position.x-c.left.position.x,g=c.right.position.y-c.left.position.y;c.distanceBetweenHands=Math.hypot(h,g),c.twist=Math.atan2(g,h*r)}if(o.left&&o.right){const h=o.left[9],g=o.right[9],x=Math.hypot(g.x-h.x,g.y-h.y),m=(t-this.gapAt)/1e3,_=m>0&&m<.15?(this.gap-x)/m:0;this.closing=Math.max(_,this.closing*Math.exp(-f*12)),this.gap=x,this.gapAt=t,x>Hw&&(this.counted=!1),x<Ow&&this.closing>Fw&&d(this.closing/2.2),this.held=x<(this.held?Mg:Nw),this.held&&(d(.7+this.closing/3),c.clapping=!0,c.clapIntensity=Math.max(.6,1-x/Mg))}else t-this.gapAt<zw&&this.gap<kw&&this.closing>Bw&&d(.75+this.closing/3),this.closing*=Math.exp(-f*6),this.held=!1,t-this.gapAt>1200&&(this.counted=!1);return t-this.clapAt<=Gw&&(c.clapping=!0,c.clapIntensity=Math.max(c.clapIntensity??0,this.clapStrength)),c}}const Xw=25e3,jw=5e3,Kw=2e4,qw=6e4,Ag=640,Yw="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",Eg="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";function Qw({videoElement:s,onHandData:e}){const t=Rt.useRef(new Ww);return Rt.useEffect(()=>{let r=!0,o=0,l=-1,c=null,f=null,d=0,h=0;const g=()=>s.videoWidth&&s.videoHeight?s.videoWidth/s.videoHeight:16/9,x=(y,M)=>{r&&e(t.current.next(y,M,g()))},m=async()=>{if(!(!r||f))try{const y=await import(Eg),M=await y.FilesetResolver.forVisionTasks(`${Eg}/wasm`),w=await y.HandLandmarker.createFromOptions(M,{baseOptions:{modelAssetPath:Yw,delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5});if(!r){w.close();return}f=w,console.log("✋ Hand tracking is running on the page.");const P=()=>{if(!(!r||!f)&&(o=requestAnimationFrame(P),s.currentTime!==l)){l=s.currentTime;try{const R=performance.now();x(f.detectForVideo(s,R),R)}catch(R){console.error("Hand detection error:",R)}}};P()}catch(y){console.error("Hand tracking could not start:",y)}},_=y=>{c&&(console.warn(`Hand tracking is moving to the page: ${y}`),window.clearTimeout(d),cancelAnimationFrame(o),c.terminate(),c=null,m())},S=()=>{if(typeof Worker>"u"||typeof createImageBitmap!="function"||typeof OffscreenCanvas>"u"){m();return}try{c=new Worker("/hand-worker.js")}catch{m();return}let y=!1,M=!1,w=!1,P=!1,R=!1,z=!1;d=window.setTimeout(()=>{y||_("it took too long to start")},Xw);const I=()=>{if(!r||!c)return;if(o=requestAnimationFrame(I),M){performance.now()-h>(R?qw:w?jw:Kw)&&_("the worker stopped answering");return}if(s.currentTime===l||s.readyState<2)return;l=s.currentTime,M=!0,h=performance.now();const O=h,E=Math.min(Ag,s.videoWidth||Ag);createImageBitmap(s,{resizeWidth:E,resizeHeight:Math.max(1,Math.round(E/g())),resizeQuality:"low"}).then(D=>{if(!c){D.close();return}const K=xw();K&&!z&&(R=!0),c.postMessage({type:"frame",bitmap:D,time:O,mask:K},[D])}).catch(()=>{M=!1})};c.onmessage=O=>{const E=O.data;E.type==="ready"?(y=!0,window.clearTimeout(d),console.log("✋ Hand tracking is running in a worker."),I()):E.type==="hands"?(M=!1,w=!0,E.mask&&(z=!0,R=!1,_w(E.mask.data,E.mask.width,E.mask.height)),x({landmarks:E.landmarks,handedness:E.handedness},E.time)):E.type==="note"?(z=!0,R=!1,console.warn(E.reason)):E.type==="failed"?_(E.reason):E.type==="error"&&(M=!1,P||(P=!0,console.warn("Hand tracking worker:",E.reason)),w||_(E.reason))},c.onerror=O=>_(O.message||"the worker failed"),c.postMessage({type:"init"})},T=()=>{r&&(s.readyState>=2?S():window.setTimeout(T,100))};return T(),()=>{r=!1,window.clearTimeout(d),cancelAnimationFrame(o),c==null||c.terminate(),c=null;try{f==null||f.close()}catch(y){console.warn("Error closing hand landmarker:",y)}f=null}},[s,e]),null}const Jw=40;class Kf{constructor(e,t){B(this,"history",[]);B(this,"last",0);B(this,"pulse",0);B(this,"threshold",0);B(this,"recent",[]);B(this,"peak",0);B(this,"flux",0);this.refractory=e,this.decay=t}measure(e,t,r,o){for(this.recent.push({at:r,rise:e,heard:t});this.recent.length&&r-this.recent[0].at>Jw;)this.recent.shift();let l=0,c=0;for(const m of this.recent)l+=m.rise,c+=m.heard;this.history.push(l),this.history.length>90&&this.history.shift();const f=this.history.length;let d=0;for(const m of this.history)d+=m;d/=f;let h=0;for(const m of this.history)h+=(m-d)**2;const g=Math.sqrt(h/f);return this.threshold=d+g*1.9*(1.5-o),this.flux=l,this.peak=Math.max(l,this.peak*.9985),f>=20&&l>this.threshold&&l>this.peak*.5&&c>1.2*(1.3-o*.8)&&r-this.last>this.refractory?l/Math.max(1e-9,this.threshold):0}commit(e,t,r){e&&(this.last=t);const o=this.peak>0?Math.min(1,this.flux/this.peak):0;this.pulse=Math.max(this.pulse*Math.exp(-r/this.decay),e?Math.max(.4,o):0)}}function Zw(s,e,t,r){const o=s.map(c=>c.hits.measure(c.flux,c.audible,e,r)),l=Math.max(...o);s.forEach((c,f)=>c.hits.commit(o[f]>0&&o[f]>=l*.7,e,t))}class wg{constructor(e){B(this,"ceiling",-100);B(this,"floor",0);B(this,"seen",!1);this.minSpan=e}place(e,t){this.seen||(this.seen=!0,this.ceiling=e,this.floor=e);const r=l=>1-Math.exp(-t/l);this.ceiling+=(e-this.ceiling)*r(e>this.ceiling?.5:60),this.floor+=(e-this.floor)*r(e<this.floor?2:60);const o=Math.min(this.floor,this.ceiling-this.minSpan);return Math.min(1,Math.max(0,(e-o)/(this.ceiling-o)))}}function $w(){return{overall:new wg(14),bass:new wg(14),overallSlow:0,bassMid:0,highFast:0,highSlow:0,out:0,onsets:[],energy:0,build:0,drop:0,bright:.5,heard:0}}const Tg=-75,eT=2.5;function tT(s,e,t,r){const o=T=>1-Math.exp(-r/T),l=T=>Math.pow(10,T/10),c=T=>T>1e-10?10*Math.log10(T):-100;if(s.overallSlow+=(l(e.overall)-s.overallSlow)*o(2),s.bassMid+=(l(e.bass)-s.bassMid)*o(.5),s.highFast+=(e.high-s.highFast)*o(1),s.drop*=Math.exp(-r/1.2),s.heard+=r,s.heard<eT){s.highSlow=s.highFast,s.energy=.5;return}s.highSlow+=(e.high-s.highSlow)*o(8);const f=c(s.overallSlow)>Tg;s.energy=f?s.overall.place(c(s.overallSlow),r):0;const d=s.bass.place(c(s.bassMid),r),h=s.bass.ceiling>Tg;for(e.onset&&s.onsets.push(t);s.onsets.length&&t-s.onsets[0]>2e3;)s.onsets.shift();let g=!1;h&&d<.4?s.out=Math.min(30,s.out+r):d>.65&&(s.out>=2&&(s.drop=Math.max(s.drop,Math.min(1,.55+s.out/14)),g=!0),s.out=0);const x=Math.min(1,Math.max(0,(s.highFast-s.highSlow)/18)),m=Math.min(1,Math.max(0,(s.onsets.length/2-3)/5)),_=Math.min(1,s.out/6),S=f&&s.out>0?_*_*(3-2*_)*Math.max(.1,x,m):0;if(s.build+=(S-s.build)*o(g||S<s.build?.25:.7),e.centroid>0){const T=Math.min(1,Math.max(0,Math.log2(e.centroid/300)/Math.log2(16.666666666666668)));s.bright+=(T-s.bright)*o(1.5)}}const Tv={bass:[20,160],lowMid:[160,800],mid:[800,4e3],high:[4e3,12e3]},nT=Object.keys(Tv),iT=.002,rT=.04,sT=.25,oT=.0016,aT=6,lT=90,cT=170,uT=1.9;function fT(){const s=()=>({floor:255,ceiling:0});return{envelopes:{bass:s(),lowMid:s(),mid:s(),high:s()},overall:s(),previous:null,flux:[],lastBeat:0,onset:0,rise:0,punch:0,lastNow:0,kick:new Kf(170,.16),snare:new Kf(170,.13),hat:new Kf(70,.06),sections:$w()}}const mo=new Float32Array(256);for(let s=0;s<256;s++)mo[s]=Math.pow(10,(s/255*70-100)/20)*1e3;const qf={kick:[30,150],snare:[1500,5e3],hat:[6e3,12e3]};function bg(s,e){s.floor+=(e-s.floor)*(e>s.floor?iT:rT),s.ceiling+=(e-s.ceiling)*(e>s.ceiling?sT:oT);const t=s.ceiling-s.floor;return t<aT?Math.min(1,e/190):Math.min(1,Math.max(0,(e-s.floor)/t))}function Yf(s,e,t){const r=Math.max(0,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=s[c];return l/(o-r)}function Cg(s,e,t){const r=Math.max(1,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=(mo[s[c]]/1e3)**2;return l>0?Math.max(-100,10*Math.log10(l)):-100}function hT(s,e){const t=-100+10*Math.log10(Math.max(1,e))+5;return Math.min(1,Math.max(0,(s-t)/(-32-t)))}function dT(s,e,t,r,o){const l=e/2/s.length,c=G=>Math.round(G/l),f={};for(const G of nT){const[N,F]=Tv[G];f[G]=bg(t.envelopes[G],Yf(s,c(N),c(F)))}const d=bg(t.overall,Yf(s,c(20),c(12e3))),h=c(1e4),g=new Float32Array(h);for(let G=0;G<h&&G<s.length;G++)g[G]=s[G];let x=0,m=0;if(t.previous){for(let G=0;G<g.length;G++){const N=t.previous[G]??0,F=g[G]-N;F>0&&(x+=F,m+=mo[g[G]]-mo[N])}x/=g.length}t.punch=m;const _=t.lastNow?Math.min(.1,Math.max(.001,(o-t.lastNow)/1e3)):1/60;t.lastNow=o;const S=G=>{var Se;const N=t.previous;if(!N)return{flux:0,audible:0};const F=Math.max(1,c(G[0])),$=Math.min(s.length,Math.max(F+1,c(G[1])));let U=0,V=0,Ae=0;for(let de=F;de<$;de++){const X=de<N.length?N[de]:((Se=t.above)==null?void 0:Se[de-N.length])??s[de];U+=mo[s[de]],V+=mo[X],s[de]>X&&(Ae+=s[de]-X)}return{flux:Math.max(0,U-V),audible:Ae/($-F)}},T=S(qf.kick);Zw([{hits:t.kick,...T},{hits:t.snare,...S(qf.snare)},{hits:t.hat,...S(qf.hat)}],o,_,r),t.rise=x+T.audible*.5,t.previous=g,t.above=s.slice(h),t.flux.push(x),t.flux.length>lT&&t.flux.shift();const y=t.flux.reduce((G,N)=>G+N,0)/Math.max(1,t.flux.length);let M=0;for(const G of t.flux)M+=(G-y)**2;const w=Math.sqrt(M/Math.max(1,t.flux.length)),P=uT*(1.5-r*1),R=y+w*P,I=t.flux.length>=20&&x>R&&x>.35*(1.3-r*.8)&&o-t.lastBeat>cT;I&&(t.lastBeat=o);const O=R>0?Math.min(1,(x-R)/(R+.6)):0;t.onset=Math.max(t.onset*.9,I?Math.max(.35,O):0);let E=0,D=0;const K=Math.min(s.length,c(1e4));for(let G=Math.max(1,c(100));G<K;G++){const N=(s[G]/255)**2;E+=N,D+=N*G*l}const k=Cg(s,c(20),c(12e3));tT(t.sections,{overall:k,bass:Cg(s,c(30),c(160)),high:Yf(s,c(2e3),c(12e3)),centroid:E>.05?D/E:0,onset:I},o,_);const j=.6+r*1.2,ce=1.5-r,re=1,W=G=>re*Math.min(1,j*Math.pow(Math.max(0,G),ce)),te=I&&re>.15;return{bass:W(f.bass),lowMid:W(f.lowMid),mid:W(f.mid),high:W(f.high),overall:W(d),beat:te,beatIntensity:te?re*Math.min(1,Math.max(.3,O)):0,onset:re*t.onset,kick:re*t.kick.pulse,snare:re*t.snare.pulse,hat:re*t.hat.pulse,energy:re*t.sections.energy,build:re*t.sections.build,drop:re*t.sections.drop,bright:t.sections.bright,input:hT(k,c(12e3)-Math.max(1,c(20)))}}const Rg=[.35,.45,.8,1.15,1.5,1.9],pT=3.6,mT=2.2,gT=6;function vT(){return{rate:1,clap:0}}function Pg(s){if(!s)return null;if(s.gesture==="fist")return Rg[0];const e=s.fingerCount;return e===void 0?null:Rg[Math.min(5,Math.max(1,Math.round(e)))]}function xT(s,e,t){const r=[Pg(s.left),Pg(s.right)].filter(c=>c!==null),o=r.length?Math.max(...r):1,l=Math.min(1,t*gT);return e.rate+=(o-e.rate)*l,s.clapping&&(e.clap=Math.max(e.clap,pT*Math.max(.5,s.clapIntensity??1))),e.clap=Math.max(0,e.clap-e.clap*mT*t),e.rate+e.clap}const _T={dust:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD51PXOBSjr0HNJjGAe3fFLz6k0ABBC5oOeMd/SnJI8Uquhw6nIIHepLhmaczSGMmUlzsAUDJ5GAAB9BxQBCFLNgcn0JpXRo5HRl2spIIPr6U9HRmxMZCoBxtI4Pbr2zTFXcRghB79KAG9PQ0oBHp1q8NKuJYY2t40lLMIx5UisXY5IGM5zx6enqKpvDJESHUjkjn260ANwcjPNA78+3FTW8E15PFbwohkY7F5CjJ9SSB+Zpz27szhSSsYwWA3KOmSWHGMnr9KAKw454IoweO1TpHE85WSb7OhxhiDJ/KkGwQjYru7A71KjC88YP/6qAIe2MClx0/nQFJIwcH0qxFbsy8XEKsWKMjPg9Mk+gHbr1oArqrM3AJPp3o6dyeeMd6nuRAZWe0ikS3Zj5fmuGfbnjJAAzjGeKW2vpbJJfs7mKWRShkRypCEYZfTB/pQBE0JWBZGaP5icKHG4Y9R1H41GQc5qZI5ViM4wE+7nI6kenWolxvAfJXPJA5x7UAA+g4o6c+npQeuRwPSkPH0oAMdADS854GKAADgjNHfpzQAAZ9qleFoZADtlAw3ynIwff+fvTXEZdRDubcBkY6N3A9fr+lOliVJGCiQLtBG8YOPWgBAyl2ZBs3NgKGzgfXv6VJdSRzzblt1hwoV9vQuOpAHAz6DimR4UkjJKNkleeP8A9eKsyvc3TRPLO+1VKRCQ5CruJ2gemSeMY5NAFdRvRuQ4QZAPUjPTHaljiacOqJGhRPM5IGQBzyfbPHftVu7jjikkUyW0xIAZ4sBVZiGO0DrjkcYHaokljjidkuTG8ZATEfMgOQfm7AADg/3jQBGbiJrMxGHMgIw6thcDPVQPmPPUn2pYI1nMnzKuzlsybPMGQNqjHJ6fgPap/swvFLIJC5H7hMfewwyOB1wSeoHv2oSOCRHhd5pCIN6Mq7yrLywI4wvXJ5wBnmgCo8SuFaNCiMTt3MDkEnHPr26YpPIkZgY4nG47ce//AOsU5gyXH79RKOVGG4OOOo9KbKrrMwm3iUcENx9KALHk74muDAkcZGxP3hAVxjPbk98f7Qq3GqarFbNd38MIt3jtgkrBSIfmO5cDBC4IOSTll684rXKxxW3lx28mHYMHkGOQMEKAT33Dqeg6VGUkaAs0yKYMbY3b5iDk5A/DJ+ooAnu4IgLiW0tpprXztsVw+chQDgEDjJBBOemMetQ2yxpFcLM0UTjAXzAxP3sEAAEAjrk44XA64qXSjch5Ra3kkMkimIxRhmaVWUhgAODxxg+tVZ4ZkYGY/M43AcHIPOeKAI2RScBwz/dxtI4+pphAB+U575qa2tXuZCqsi7VLEuwUYHYZIyfQDk9qaLeQAkjAAJ+bj9KAI+n9fejtSnk9OKQ4yORQAdunFAB7d6AcDjk0gJzigC1aCNXzJ5uwfe8r7y+/4fhU6LetCvkIj8sq+WA0hBByMdSuAe3HXrVa1nEEgYDD54bdgY7gjuD/AI1Zhv57aWaeCeS0W43xOts+zMbdUAz9zsRnpxQBSjZc5cE8fKQcYPY9OlaFrbG9mULtjVEYmQgkcZOeOQM8fjVaAbZgdp5PHl/NxjkDr29f6VO93LbPLb2pRU8w7QrCRgNpTAfHIwT04PWgBLm4+1xrNHCsflxBZv3jEyncdrHPGcFRxx8ueuaryxr521HUoFUZXOCcc9ff/wCtSJ5gUFBhc8Z+nX3+vamlCjI2QG+8Ce9AGxaWLXq3FqLuGHT7Y+ZJcmMgHoM4xvb5sYUdNxIAyaqSR2n9qrh5IbZuN08ZztI+9hPUY4GevXFQzh1u95TyJIgjDyyflGB8wJ5yTzn1NQt5pbO4s33gc5xk9/rQBOWQWySxNFvMxBUrukwACD0xjt9c1LcTs7JM4LyAbjJPhtx75z75IBz160TXc9zdx3UCi3kEYA8g7dowRxjpkZJ7/wAqrPNG/lrKnllIyCV5LtnqRnqen60AXZmsonYWlzK8JUshmXYd+fQMduVHXnk/iJLSSFNRjFvbbvNHlATShF8zGMiQgAAEq2Tg8cnmqDKt6ryqY4fKjUEEnMpzjI/r2qawlFtcwyxyzR3EbM4WFFbDAfKeTznkH+R6UAMjMlnKkkUhiuIf3u5X2OrZwMe4POBz1PSomlmEZiY+WDl+mS5Iwfm68jt0/Gnxh3uC6RIQrKxiY5D85xj09cfpTjJbvI8kYaCUu7/uhmMA9lU8jALdSe34gEDtuMmyMQgAEqrHGfoTnrUt5cxyTTC3eWSGVg5e4VTKTjnLD3J4+melRTSDA2xxgqqgFM4yBySDySfyznHGKhJCr1U7uc9x7UAIoyc/pRge2e9Jk55FL14z+dACfzNKPXNJnPTHHalCg9KAJUQtEwEeSo3FsgcD69f50szrO4CL5cYHCs5IXjnGfU5NTJNMYhaPJGsKHzFJJZVYjrgcEngHg9hwBUcsclodskUkc4AJWRdpAIBUgEccc59CMUANjaWONipG1uPXP4fjSpGJJGdX2x4yzycBSR0yM55/P2oCgQq0kJAbIDg43D+XBoJSMowLgEZBZeF5wSB0PegC4mnXlxpUl0kMv2eH95gAkAEAFvYcDk/QZ5xPbrpsHkJdEG5S4CujZMTRkcMGUg5HpnBH0qvYyxs6xPOsCIwYSPllVxwGIwSVHPAB7dadIJXa9EdwJosn5xtQOM5DYPb5eg5HHSgCoiC4fdLcqmCAwx8x9cdifrjNWJbJoIfOWzL20jZSVuSO2zIIBOSAR60p3XFtGk6pFDZgpgKeS2TyRyST/KoI7N7mNVg3SyRgsyohIRBjLH8T29KAH8OWiwSsS467VHXIOB2J6mh2mFnFBJNHKvVVDqwGecZ7H8eM0bY4p3aAh0cmMRSn94wI6kDpnPH+TVx7WK3uj9rdA6fLKsbDcjAbcKRkY6HJ64zQBDC8MmntHPHIZFAEUSIPmHzEncTlcZBwAc98Dmktra3SOCU30kbuctsjJKBWOCDnk8Dp6+1RzQm3jhjnlLFC2USUHyx347Z4PuAafZ7Yg264MZQgyQKv31HTvycnoOR1oAikij+zPcQoETIUgzAsWJJGB1xgYPoRyeQKdbRr5aCS7Ft5owAE3Dbzgn3JwPUYz6VA6rM4itkZtzEqAMn8vp25/rVq9aO30+G2WFA7gStui/eLkcAueSCMMAvy8jqc0AUmhmFuZRGxjVtjSgEruxkLnpnAJx3oS4ltxIkMp2yDa2B94fjQsjuDGrEKPmCkk5P4d6iJyxxhec4Ax+lACvHJFI0ciMjqcMGBBH4GkPA/xFS3Mv2i5kmLSMzncTI+9j9T3+tREc5xmgBOD649qU9e3PtQODx0oB4x1oAUEDGCQw65rTOs319FbWl5cNPDA2YEZc+Vk8hB2B9BxkD0FUYPKCSSSru+UqiZI+Yg/NkenX3pkZZJMgHeDgEckfSgCfc22S0Uq8KOXyuCeOM7sAkY7d/SrUeowxZQ2kE3zBkzn5T1AOfvAc/XPJOBVJpprto42b5YsiNGY7UGSxAz0BJJ+pqSGWORpBNIIozG2FEe8E4yqgZ4yQMntz16UARiKJk8zJBOMgdu2fzpgVlQuGHC464PPBA55q5Pd2zQLGIIi7BWd44yhU5OVAzjGMcjFMsZIPP8uZvLilGwuzkBcnqcA5GPXNACg+XZzROuDKq7Qr53HOd3vgdqVn+1yQrDOsQigyDIQnzKCSM9ySDjPPIFQ3EkayMloZfJ4P73aWyPQgevpipg89u6Tl/JuLYLIvzBSBxtI5znJHA5HWgBLLyZGDSxGRi43EOFY5I4GQfz5xnpVkNJZaki3FvFGFhLRiaJeUdSVYgj5zhgQSO49BVaO4uI4iihPMkIm8xQvmA4PRuuMdsjnHFVDIzhlBABIJGc89M5/E/nQBJclZZDIpGHbO3GNv8AjU0V5iVibaLe8ZiPyDHPGQOinGOR9etVwU2hW3K4Jy2Tz6DH+etSXF7NdGFLiUyLEpVM8BQSTwB7nOKAJPtL7AscxjDuPMLNwSDkZA6gdfzqOZnmcqH3BARgLtAAxnA/Cp7W9ksYw/ls3ng7g+CsiZHB7/eXtjpTLW7+z3AuEhhkEYOYpVypzkfjjIP4DrQBFDOIoZISiZYgrJt+ZcZGM+hzyPYdKieQSMWZVyRggDGD9KXz5MDcQwDb8MBjPHNM3fKAFAxnkdTQAhwPyo6HB/8ArUuffrTSfY+9ACjk9eaAB/jSZ4wO1A44zQBMs5WIRqEXnO8L82CMYz6e1Ai3TJGrxyF8AYYgAnjk8VDyMkfnT0fYwbCsc9CuR/8AXoAHXYzLkFgcEg5B+hFW7OzYxPeNbm4ggZfMXcVXnJwW7ZCN3z6A1UjZY2+aJX9mJ/pQZHEZjDHyyQxXPBI6E/r+dAASX7Dk5wBUsE6QxSAR5kZSqtxgAgg8EHsfb1ot7trWdJY44m2c7ZYw6k46lTkH+VNjnZbSW32RMkrK25kBZSucYbqM5OR0PGegoAC6tlY4gWfbjqWB9ue9W47r7DefarWSUyCMoTKoDISCreobjI6dD681TklDj5YUjzj7ue3fr1PrTQfnyVDH0YZoAkad5JIUlLOkfAC4zt9AcH8KdcRES72DRrIokjyAMp0HTHp1xyaYsMvkmaMZRANzL/Bk4APoTimxzNDHLGgTbKAGygJwCDwSMjkdRzjjpQA1mJzuO7vzVhLhrSeQ25IDxtEfMUEgMu1uD06nnqPrUKShIpkMUTmVQoZs5j5ByvPU4xzngn60u6N3VpC5yuDjGSccf0oATKlQNxOOx4/KnPIWt4kMUS7QRvC/M3J6nv1x+FNKYVW3KQewPI+o7UzLcZzgfpQA5ypJ2g4z3PNNHUUdR2xSZ56UAKP1ozj6CkHH8VL0P+FACE8gdqcB+lFFACN1x6DNIDkiiigBSAMflSNkAc9RzRRQAZJY+1OxzRRQAnv74oxljmiigBPQetKflAx2oooAB1/HFL0GfSiigBO+PYUYyM9zRRQAgGTjtQTx9aKKAFxjOO3NLjJC9jRRQB//2Q==",line:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5UooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA0/7CbGTqOmD/t5FA0PIz/aWmD/ALeP/rVuD7Rv+V7vn00KKl/0pG4Oof8Agkj/AMa7fYx7fl/mYc77/wBfcYY0MYz/AGnpn/f/AP8ArUf2IoGTqumf9/j/APE1vYvByv8Aah/7gkf+NA+2A5/4m4Ptosf+NHsY9v6+8Od9/wCvuMBtGjX/AJi2mn6SN/8AE0g0eMnH9rab+Lv/APE10Bmux1l1UD1OjR/41A106sTJfXMZ/wCmmkR/40nSj2/r7wU3/X/DGONFBPy6lpp/7bY/mKQ6FOThLnT3Ptdxj+ZFab3lsTzqlgx7ibSwP5KaMxTcCTw3MPdHhz+i0vZwf/D/APDj5pGb/wAI3qpXdHZtMP8Apiyyf+gk1VuNMvrQZuLO5hH/AE0iZf5itxdNWYnbolrN6GyvwT+ALN/KnYNimCPEmm49PnX/ANkpOiv6/wCGQ1UZzFFdKdQEuANbtLj/AGb+y5/Pa386Q2yzH/jy0O594LvymP4Fh/Ko9jfZ/wBfK4+fujm6K6U6Cj/MdD1RBjrBOso/9B/rUZ8PQkf8emvx/WxDD89wo+rzD2iOeoroE8MqzY8vW/8AwXf4vUp8N2sIzN9vTjP74wQf+hSUvq8+we0ic1RXV2ugWMnMcBn9cTvNj/v1Hj/x6rcVjZwEotvaI/8Ad8tC35O0jf8AjlWsLJ9ROqjjIoZZ32RRvIx7KCT+lXl0DUiNz2rQL63DLEP/AB8iuwmMkMQEjTJH2D70T/x5oV/8dqnHc20bZWa1jbsY5oUb/wAhxu3/AI9Wn1aK+Jk+1b2RXVYx1Fuf+40tI0cLf8s7XPvrSn+tIUI6kj/uCJSs0agBpIhn+9oiCtP66E/11GmOMf8ALO0P01hf8aDGhPFrGf8Ad1lP8aa09tHkNcWI/wB/SQP6U37VZY4utDY+j2Dr/Jan3f6sGv8AVyZYJgBss7vnp5Wrof0wak8u9iPEHieP1MVz5n8lFVSlrMOF8NSfR5oz+pFImnxMcppdrJjva6mufwySafp/X3IPX+vxJpr+eD5ZNT12Adxd2ocfq39KhF6kx/5COjT+1zYbD+YT+tWEhuYBlYPE1so7xSeao/ILUL3+Tsn1dhj+G/04N+Z+Y0m31/r72gX9f1YaLOOd/wDkG6Rc5/59b3yz+Rf+lPSzltCSlj4gsh628nmKPyA/nTQtvPyT4cuB9ZID/wCyinRWMTMGh02NT62urIP5kmhLqv6+5fqO/f8Ar8Qe/O0rLrE/+7f6eH/X5qaXtJutx4clyP4oJYj/AOOqK0Y4r+NcI2vxj0F/G4/pStJdLhpJ9RB9ZZbYfqTV8re/6/5k3Rm/Z9OIyYtCBHdLucfpmpY0s2IEKae56bY57p//AEEVeS8dmwt5OGPZdQh3H8Io2NSssqj/AEh7gL2E8s5B/wC+3iH6U1BdLfcJyfX8yt/Z8EYDS2cCY/ia1lx+c8qip7W36vbIn1gjQfrFG2P++6khgWMebFEEHeRIwP8Ax4L/AO1Ka00dw4AMc7DvxK36CY/qK0UUtSbtjmKTEo7LO4/hZhK35Eyn/wAdFPkWaNNrpOkf911dVH4O8S/+O1HL9pdSHgvGUccwTsPyeRF/8dqr9n2PuFsy/wC7a2iH9Sxobt0BCF4o/uPaRsOpW4s4z+aq5/Wnf2gRnOpZOP8AoMMB/wCOoBUm+627Y01EDsENtj9BUcg1FRgxa6B7WsUn8qnXz+4ehX3ycELMT/s65HSqLtjlU1LP+xrMZP8AKsQa9IOthpjfW0T+gpP7aQ/e0rTW/wC2RH8mFc3to9/y/wAjXkf9f8OdCItQ+9s8SkY6perJ/IU2Sa/Rfnl8SIO3m2gkH6kVz/8AalmxzJotl/wB5V/9nNSx6tYpjbZ3kP8A1wvSv81NV7aPf8/8hcj7f195oyX6H/Xajbbv7t3pSj9QCaj/ANGl/h8O3A+ssB/9lFIniCEYxqWvRezSrMPyOKBqtvLnfqaPn/n50yNv1GTRzRfX+vmws1/X+SJY7FM5t9NCsP4rLVEP6HJq2n9oIu0N4oQegUTr/MVQ86wkHM2gufR7eePP/fIFOiTTVbcf7FU/7FzcrVJpbP8AH/JCfmWiJ3b99JdHHGLjREY/ieactkrEEwROPX+xnH8qhNxYxAkXWnj2F3dH+S1HJqWmcF57dxjoi3Mn/ociinePVr72Kz/pF/7CoG77CoHqdJCgfi8gFLFbwGTCCDf/ANM47ZSPwjWVqyf7d02AfubXefa2hj/Vg5/Wo5/Fk7rsit0C/wDTWR5P/Hchf/HaXtaa6j5JM6bc0aiOWaRR2Ekzrn6Kzx/+gGmhDCPMWNolP8aRlAf+BARD/wAfNcdJ4g1N12rdNAv923URD/x0CqEkjysXkdnY9SxyamWLj0Q1RfVnbS3tmriR57ZWz95pot35qsrf+PVWm1m0kIV7+B177pLuT9MqP0rkKKzeKl2KVFHTm/0lSdsmnnPf+z2b/wBCemm903kLcaYc/wB7TiP5ZrmqKj277L8f8yvZrudKZbGXkP4fb2aGeP8AkKWO2tCflstHc+sWotGf/H2rmaKPb91/X4h7PzCiiisDQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k=",dandelion:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5UooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK3PD+iQ3Ucmo6gV/s+2I8yIXCxTTA5/1e4EHBxn696AMOirF8kEd3KlusqxKxCiRgzfiQBVegAorWg8K63Pbx3K6ZdLBKcJK8ZVG+hPGORW9F8I/FVxbRTW8FjOX5eOO+hJhXGQ0h3YUHnGT2NFxXOLoq5qmj3+i3klnqNrLbTxnDI49geD0IwQcj1qnQMKKKKACiiigAooooAKKKKACup8P/DTxN4jaQWuntCsSB3e5zGAD04IzzkY45re+Efga41mSbxNJZR3enaTMgkjkCsjuVJAZTwwwOnckds19BeGLS/1K0uhZpe/2jc7jclyIwBtAB6fKQpXhffB7DCrOS0giZSsfM158KvElrLcxRRWl3JbY82O3uUZ15x90kN146c9s1gTbLO0ksrqwRLsOR5h3LJGQeQRnHf0zwK+vNXt9ItNRsLaxtnOptGILtPL8yaeMfMRvPB+Y5OeOAM9q4L9obwK2peErbxvHZwxz27CCaSElQ9vu2xsVxjdlhk5yM45AyLi5rSRMZpnzfWto9/BaWl+tzYW92kkIjHmZDISwIKsOhGD9e9ZNaMiW0egQOkjNdTXMgkTsqKqbfxJd/wAhWiLZUuzm6m5z8559ea6/wP4TupjY648cUqG7EVrasqyNduOqhDxjOMk8Vy+rak+r6hLeyRRxvLtysYwuQoGfxxn8a+gdH0ux03RvDg1O0kZbK1Se0aJQrFpBne/o2WA59B15q4Q5jOpPlR1Vist5ZPb6hp3mXdwfnsmufONvtIDAEDG0jAGOgz0rF8QS2VlBLo0enrZafEIT5in94ThtwCgAsCOvXOOvau00XSIIo5LGOH7TJI3zNGcyKGwCQ3HTitTWPhudKaXUhc3NwxQ77aOP5gcDlXzz0I5/vHvWzoxSscqqu9zz6z8L+EJtNh07xBDHPaXELSNd3Eg861Qg4ZGXIO1iAwzjpgV86eLfDcvhfW57B2MsIYtBNxiaPJw3BI+o7HIr3SHwzquoeKYtGupj/Z0pLPbFBELfk5AJ4J78cHivPfi74Q1LQrDRr/ULhJ/N822RlcFdqHcNuOxD5PoeKynC2qR0U562bPM6KKKzNwooooAKcn3voCf0ptOTr+B/lQA2iiigD6k/ZH8SadH4Y17RbiRRd290l8iO2N6MoQ4H1UA/71ey3WpWcN5bwgRfbDJiRYyrMkeTtJUYOOlfn7Z3tzp9wtxaTyQTJ9142KsPxFelab8VvEkPhaa91K9lubgSLYWVyzDzVUgNLyfvYXYMnnLirhyp3OerTb1R9O+Nb++ntvO0v7Gb1TiPKHlMkH5gCV5479TxXK/ErxLaeHfhFrmlX887y3FqLRI5lOwzNtwsYx0ABPtgd64rQv2h/DsgM2owXdjKkeFCL5m7A6AdAxPfjr1ryn4qfE26+Imrho42ttKtmb7LbtjdzgF3I6scD1x0HvtUcHHQypU582pw5q3Lqc02lW2mMF8m3nlnQ990ixhvw/dr+tU6K5jtFFfYnwmhg8QfDrw7qYii1ApGLKWBFDG3ZGKjcSfkGAp5B7ECvjqvS/gr8Ybn4Y6nNbXSyTaHqBAu44uJYyOkkZ9R3HccelVGVjOpDmR9E32vx+HNVe2khuJ7mRsxInDhVBZmKdh7DluTntWl46+IjWvhjw/PCZFkvL1YJwXC7RsLYb3PUdvlP0PlGv8Axm8Halq1xf2V5dQXc9mkC6hPb+ar45Kyx4yO+GUZyQc4zXJf8JqfH3hTxhBrU0ZNlFaahE1pb+W0uyfy2J564nHP44rV1DCNFnt1rcWuvXcVxpl5FLFNGSsyrkyru2kqeuQQQMHH6V5D+0zqUdtPofhmOQM9jE9xKCPmBkxj8wCfxFYulfG1PC0QXQtKkMvkKvm3s28LJnczBVAGCcDHTGTjJrzvxL4m1XxfrM+sa1dm6vZ8b5CoUYAwAAOAABiida8bDp0HGV2ZdFFFYHUFFFFABTk6/gf5U2nJ1/A/yoAbRRRQAtb/AItY2RsNCBwum24Eo4/18nzyZ9wSE/7ZimeCNPh1DxLZi6ANpblry5BGQYYVMjg/UIR+NZV/ezajfXF7cNumuJGlkb1ZiSf1NPoTuyvRRRSKCiiigAooooAK7H4X5uda1HSQAf7U0i+tQD3cQNIn/j8SVx1dL8Nr9dM8f+HbqQgRJqMAlz/zzZwrf+Ok0Ajmz1pKva3pr6PrN/psn37O4kt2+qMV/pVGgAooooAKKKKAClU7TnrSUUAFFSogYcL+Zp3k9fk6e9AG/wCHv9A8KeI9TyytKkGmRH3lfzG/8cgYf8Crma2JdUlTw7FpGxBbm6N2SCdzMUCDPsADj/eNZwiyMhBz/tUCRBRUh2j+Hp70fJ6D86BkdFSfJ6D86T5f7uPxoAZRUnyeg/M1PYWTajeQ2kIQPK20M7EKvqTx0A5oAqU+GV4ZUljba6EMp9COa1TpukA4/ttD7i1k5p8OiWN4xistVimuNrMkTQum/AJIDHIBwDjNAGr8XIEi+JGvyR/curk3q4/uzKJR+j1x9bfibV5Ndvob65SMS/ZLeAlMjcsUSxqx9yqDPvWTtX0H5mgCKinkqD9z9aTcn9w/nQA2inbk/uH86Nyf3D+dADaKduT+4fzo3J/cP50AWbQfLmrL/wCrJoooArzjcsanpsJ/Sg/eNFFAEVwMMfoK9l8MwWTeGbCeTTrGWRYIwGkhDH7o5+tFFVEC4k0MsrRfYLFVH92ADNeFkAs/+9RRTe6A6LR7iay0nWYIJCkc8XlyDAO5eD/Sqmg/utbsdo/hJ/NDRRWlVasiJrXUdnZ6p4ZeDTrRf9HjaVSGYTtn7zgnk/TAqnZTi58avMIood8kh2RLtUfI3QUUVnLYuPwXMS6H7qBu+wClu7yW6S3WTbiCIRJtUD5QSecdTz1ooqQKzdR9BWjLpsMUulqC5F3EjyZPQl2Xj8BRRSA3/wDhD9PLY8257fxL6Z9Ky9I0K2v9ZkspXmEab8FSAflIx296KKAJNe8P2mmWCTwtMXLIPnYEcg+3tWVpNql5eRwyFgrE5K9eFJ/pRRQB/9k=",jellyfish:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5VooHegVSV7AJRRS9qSQCUUtJSAKKKKAJrVd0orR1VNsS1SsBmYVpayuIM+9erQj+4Zzzfvow6KKK8o6AooooAKKKKACiiigAooooAcoycUKOaVeGFPC4kxXVShdL1JbIiMGnAZBpZV2vUkUe4N/u04UvfaE5aXIdvy5ptWfL/wBH3VWrOvDlsOLuFFFFYFF7Sl3XCj1rT11Ntsn51T0GLzLpa0/ESfuF9hXsUV+5sc0n75zFJTgODTa8lq1jpCilNJUgFFFFABRRRQAUoFJVi0hMsqjHHU1pSg5yshN2VyNlwM1Pt/fIfUA0NETBnHbNTCMmOB/Yj8jXoxhZv5GLloR3cW1lP4VNZRbvxU1Yv4MKpx3z+YqfTYM7fxFbKHv3IcvdsU0gzZsfrWUeDXTxW+bSQY6E1zUq7WIrmxsPdTLpPVjKUUYpUGTXBGDbSNrnQeFod0+7HQVoa9Futj7U3wpBhWbH8NaGrw7rSQ46CvYhpGxyy+K5wgX5WNMUZNWTHiFj61FAm5jXBOn70UdCloyNhzQUYAEggHpnvX0V+zV4e8EWGman4t8Wram7hnEdmL2EvHFGBzKq4IYluM842+9eq+IvGHhnUVjtL2/srizvA3lpd2ebaVBweWXA6jsKungalWTsvwfr+RnOuoI+HqK7P4ueHtF8N+Nrq18PXEcumyxx3ESo5YQ71yY8nk7TkDPOMZ5rjK4pRcW0zZO6ugoooqRigZNbGmQiOAzEct0rKiQtnH0roJovJgSIdgB/jXpYKFlzMwqy6FXyP3JGP4TVmO1zp8Jx0JqyttuUDHtV21gEmmqMcoxBr0VBGDkUtTt8W0L/AEBqXTIeE4/iP8qu6lbl9NUgdMGnabCNqEDv/Sjl1FfQrW8X7qZfc1yV8mydh713UUODN9a4zVUxdsP9quXEq8TSk9Slt6U+3Tc4qbycY+hqeygyQfaueNPVGzlodd4bt9lqTjqKsavHixmPtU+kReXaKPUCk1gf6BJ71u5a2MThZodtvnHbNXPBmgP4j1y00xCR9okwzDqqAFmP/fKmn38Oy0bj+ECtX4f6y3hHXLHWxbi4FsxLwscCRCpVlz2yGPNKMVzpspv3XY9i8aaxbW39leEvDqwpp8ltDBcSKuSSQD5a+mMYOOSWIrsvEngG5n06ySS1aI2cYEYxyM43bvcnHHbGK5n4UfELTNd8VXV3p/g5Xlt0DefdXIdoNzhR5eEwD94kkZwvHer15+17p9prAs7vwlcNabEcNHdK0gYjPIIA6Ed69zEYz2CprCw0ju21dt6f8A44UnO/tHr+hxPxl+HUqeAbHW7a0IfSiYrhgvPls3G76Ej8q+f6+kvH37U2l+J/CPiHw/beF7i2bUoDbwzPOpxkjczgDqMcAZ5r5uPWvmcwqOpWc5Kze530I8sbCUUVLbxGaVUHc1yRi5OyNm7GlpFkZpoQR1bcfoK2LmLfN06VPpFoIkkmxwq7F+tSiHhnNe1TSirHHJ3dyVIMSMmPeprKPb9qh9DuFTBQ0sUg6OAfzqRYvK1DHaSPFdLZkKYPNsCuO1QaZGRGn4f4Vp2qZgwagtYdgI/uuw/Ws3LUZH5OJJR681xGtw7bxuP4q9BZP3hPqK43xLBtugcdWFZVdUXDRlF7f5Dx2NT6bDkJx1q08P7ljjoMVPpsHEf+8BWb3LudPbJsgUe1V9UXfbbfUirqjCge1QXSb9o7c1nfULHMaxCREEx94gU5bcxWgAHJAH5mtDV4d0iLjpVk2e8QRquSWHHritaVnNLuKWiPY/2afDaaR4C8TeJb1VU325LfdxlIo3yR9Xcj/gNfNAikvtUMknJ2B29uB/iK9/0LxjNpnw5OlpIATI+nWcQ5yfLaNnx/vPM5+i149p9gJZNRmjXjcYk/BWP9Fr0fq/LUvLrLT0Sv/kZKrdO3Y4+7Uq6g/wB0N+fP9agrQ1mMR6lcIPuxt5Y/Dj+lUMcV8/io/vZWO2DvFABWzodmWYykZxwPrWZDEXcADNdtotgIUjBH3RuP1rbDUrO7Iqz0sW/J8mCOBeo5P1qK8KwW5Ge1XQmWLGsHxDdeXGwzyeAK73ZK5zLV2NjSz52nW7dSvymtC6jw8Eo7HBrN8N/NYlD1U/8A1q3Hj3xAenNHNsFtRtuMKR70yJMNL/11P8hUsQxxSRD55v8Af/8AZRWcpajSArz+Fcv4pt/3kbY/irrCKxfEcG+FG9Gpc19BpGXLFizJ9TVvS4Plh92H6A0+eDNivHerdhFs8gegY/p/9eokykaGKay5xT6MVzyZaM67h8y5TitTS4ozqULy/wCrhSSZ/okbN/SqzJmYH0FbOkaSdQ07WJB98Wy20P8A10mkVP0XcaqnU5Zxl2CUbpo5yyjaG6s5ZM7rexku29mZXk/9mWrnhHT1FlA8g48q6u3z6IqD+h/Op54FurfxHqEIzBFAlvEfZ5UjT/xxDVv7LJZ+FLy9T5Ut9HCMfUz3ZXH5Ka64Yhq3l/wP8jJwPIdSUyXEznqzEn61UERLhfata5hxEC3Vjk1BbwbmeTH0/D/69cbjdm17FnRLDzrlTjjP8q7WCEJGeOtZXh+z8tC5HQYFbmMDFdMNFYylqyFxtQ1xevTB7pu6wjP1PauzuW2xMfQVwWtsVVVP35WMjfTtTqy5YNipq8jsvDow06DoGNby/dooqnsLqIB81Ni/1s3+8P8A0EUUViykSGqGsIGtefWiikMrlQbFc+tWoVAeLH9xv6UUUS2AsGkoorNlDf4jXVaQTb+DNUuI+JFjnlB/2lEYU/huJ+tFFYSNEZMKCLwJeqnAm1C3Vx6hACo/N2qz4jAh+Gg2DHni0V/cK7EfqxoorSHQlnlV8o3KOwFLaxKVUY4O3/GiitkSdbaxrHCoUY71LRRWqMyrqH/Hs3vxXA66xbU5geiYUD0GKKKit8JdL4j/2Q==",standby:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5voFH4UAdKAFHb/PpQO3+fSkA6cf54pQOn+fSgAHb/PpSUoHTj/PFGKADmj/P86Me1BH+cfWgAOef8+tKe/Xv/WjHXj1/r7UpB549e319qYAc89e/9aDnnr/nNBHXj17fX2oI5PH6fX2oAOc96Bnjr/nFGOen6f8A1qAPb9Pp7UAA7de39KBnjr2/pQB049O309qAOnHp2+ntQADPHXt/Sk5wP8+lAHTj07fT2oxx0/zx7UAJQc0dv/rUEcHikAmPagD/ADijv0/SgD2/SgAA6cfp9PalA6cfp9PakA6cfp9PalA6cfp9PagAA6cfp9PagD2/T/61AHTj9Pp7UY9v0/8ArUAGPb9P/rUuODx+n19qTHt+n/1qcF4PH6fX2oAXZ149e319v8/yeYW+b5Dxn+E/7X+z7fp+UsVsZA2EPQn7h9H/ANn2/wA9t+38M3c4mCWc29FkOPs7k8LOScCHt5Z9MY7YOzSMLgc48DDd8h4z/Cf9r/Z9v89mMhBPy/p9faus1bwlfaeZPPsZoyC4ANtIucNMD1hHTyz+XbB285c2rRuwMZBBP8BHc/7A/wA/oShbUCpt56fp/wDWoA56fp9PalK89P0/+tSAcjj9Pp7VAAB04/T6e3+f5gHTj07fT2/z/NAOnH6fT2/z/MA6cfp9Pb/P80AY4HH6fT2/z/NAOnH6fT2oA6cfp9PagD2/T6e1ABj2/T/61GODx+n/ANajHHT9P/rUEcHj9P8A61ACd+lAHtRRigAHbj/PFA7cf54oH+f0oHb/AD6UAGPb/PFAo/z/ACooAXHt/n8qeB7fp9fao6eP8/rTA2dNtklaQNFnCOeE9EkP/PM+n6duo9t0Hwzb3OlvI1jH/qpufsiZPGoD/n0/2R+Q9Ao8PsHCFztUkqw5UHgrJ7f5/l7d4d1C3h0qcDYQsM6sqIhwdmpYz+79/wAvbgbNXjoIu+MvCtokV2oshjfMdy2qgjDXp6i09h37DsAw8L1u2CX02IlUBjwIwvc/9M1/l/8AW9s8fazCy3hjSDd5kwQPGuSDJegnHl57+vp+HiGssjXspQLtLNjAGOp9FFCVo6gY7Lg9P0/+tTMe36fT2pzYz0/z+VMrEYAdOP0+ntQB04/T6e1A7f59KB2/z6UgAduP0+ntQPp+n/1qB2/z6UgoAXHtSH6UUUAFFFFAAO3+fSgdv8+lA/z+lAPT/PpQAen+fSij/P8AKgUAFOHf/PrTacD7/wCefegC3FLt3YI6MP0f3966e1157e3nQTOu4SDKPjOVuRz83P3/AMj+fIh8BufXv/ve/wDn+dr7SQr4fs3G7/rp/te/6/ntCVhHU6zrzXElwDMZW3yYZ3DDl5z13f7X+e/K3Uu+Rvm7nv7n3p1xcl2fL9S38Xu/+17/AOe9WR9zE7u57/X3onK4EZPNMFOJ9/1/+vSZrEYD/P6UDt/n0oB6f59KAen+fSgBB2/z6UUDt/n0ooAKKM0fjQAZ560A9Of1oz7/AK//AF6Aff8AX/69AAD05/zxSg9Of1+nvQD05/X6e9APTn9fp70AID7/AK/T3oz7/r/9elz7/r9PekB9/wBf/r0AGff9f/r0uevP6/8A16M+/wCv/wBejPv+v196AHbuDz69/r7/AOf5vMhw3zev8X+97+/+e8e7rz+v196cW68+vf6+/wDn+bAe8hO75yev8X+9/te/+e8bNyef1+vvQz9efXv9ff8Az/NC2e/6/wD16AEz7/r/APXoz7/r/wDXoz7/AK//AF6M+/6//XpAAPTn9fp70A9Of1+nvQD05/X6e9APTn9fp70AID05/wA8e9GfegHpz+v096M0AH40fjRn3ozQAZ5/+vQO3NFLyMdeaAEB6c/5496UHpz/AJ496B2/z6UDt/n0oAQHpz+v096M+9Hp/n0ozQAZ96M+/wCtGaKAFJ68/r9fegnrz+v196D3/wA+tB7/AOfWgAJ68/r9fegnrz+v/wBekPfn/PNGaADPvRnpzRmigAB/z+VGff8AzxR6f59KM/5/KgAz/n8qM+9HpSZoAXNGaSigCxFd3EMflxzuiZztB4zTrm+ur1YVuZ3lEQKoGP3QW3H9STRRTuwK4HT/AD6UAdP8+lFFIAA6f59KO1FFABijFFFAB6/59aCOv+fWiigAI/z+dIe9FFABjmlFFFACDt/n0oA/z+VFFAB6f59KKKKAEo9aKKAP/9k=",sphere:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5VGM89KXI7KKTFB9cCgBcjBHqKVOTg9PpTcH0oAzQAvGMevpSYqSGB7idIIEaWSQhUVRyzHsBV5dFuNzCbCbfvLkcfU9B+tAGaAPrV620ieZfMlkgtVxlTcNt389AOv49PerccMUGRBLChA+aQjcV/Pp/nimyf2a0KAyXk8rsS7thVcjAHYt3P59KAKj6XIjFfPgYjsrEn8sZpn2FySMjP+4/+Fafnx2n7oWVrIG+XfJmVYjnjknGfXjHtUVvq90s5O+SHystiF/LAI9h74oAgXR2A/fXdpBnp5rkE+2AD+Z496gudOurXiWJsDoyncv5jirL30V0S00sqSE/fKq4P1H9ant55InSJXjPmYVD5WM/THBHt/KgDGIweDmj610N/bW5kJeOyKkAh4ZGKkY9edreobvVH7BZXAeOC5kjnUHbFKnDHjjdxjv1FAGaCCOQTRgnk8d6GRo2KOCrDggjkH0pMkjGTQAZ+XHvQQRQKd1XB6L+tACfKRknBx0ApKDjJx0o7UAGKCO+MA0dqOp7/hQAp9cmko5z61d0+0EjLNKv7sHAGM7yOTj6D+lAD4EFpbGVyVeQbQR1VSOce5HH0Jq5eSboII55F8sA/wCh7yuxuCWyeASCM9zjnAxVaS4VrsMOSgJA6iJRzj3Y9z6mq0qyziLHzO25yc9OeSTQAt1b3OFYKWhzhNg+Ue3HepZAbeOOOIFrg7gcc+X9Pf37VNp0zabIWifDSxsmcAlgQR8oI4/3uvpSTas01tEk0UTxAsu1RsI6HqOT175oApJE8DAtMIT6A5b8h/WrxmtJbV5Hhy8jLG0xO3B5PKjscD34qr5cMvMMRf8A2Q+GH4HOfwq1ZQWr2+JmuY4pXIG0KxaRV+UDJHcgE9gfwoAqeVhiPs8Sgcl2Ylceuc1Zt9QFok3kwwNHt2MWXO8njj04zg9aYiSXKiNAs0A6ImQU9xnv/Oi906e1iijfYPMzJ95RkHgcZ46Hj3oADKI4RJHGuF6OpKkoT0Iz2PUe9S2lzY3EwW8jlijCnMsZDFFIx0OM9emarWkTo3lyxsYnBDbSDtz3FJeWk2nj7PMjJI3zNkcEfw49eDn8RQBbns2uEPmukjxjalwh+VgOgfuD6E/4VlSIY2KMpVh1Bq5biURpcrI0LINu4dXXtgd/T06Voyi01q2WRoPs1yqlfMTpIw6Ar0GcgZXAHXHJoAwQpOepA7ijooIJz9KQjbx3/lTiSec9u/egBFIDc8ikH545xRyp5pUGc+v0zQAnX04oyc8fpRQQR7EcUAFdBJdotpJC0cKOIYo42EeAVCgsDjkZLckde9YAHQZOTwRWrdbmvEhTq8W3HfJHH/stAEYt0jt2eaFrdZDtDg5UgcnaD17d6kuBFDBAsEiFihyki7dp3E854J5Bx0GaYt04tQpcyW9q21Ub5lJbngH1IJ+lQrJDcQvvBRw28kfMOeDx19O9AEYSZLqOWUMRvHz9c8+tNdcQOv8Ackxn6g/4U6OG4jObdjIDxmIkn8utaRmihNyJY45mY79y4VgRzhSOOhOTg+3rQBnx2oiUS3DtHFnKgD5nPsO31q22pGeGNikaeW52yBQXUYGM+o4qpMftb+Yky7+AEYbSPoen65pqRSCF4jGfM3qQpHPQ9qAHXcU32ry2YvuYeWScgg9CPzp4uWl8yGNyRnMakZHAxjHTkD9KmhkSLyVdVkZ1KbcnarYIByO/3en45qpEI5ZUWOGXzCQAEfv+IoAdAYZSXltxhepjOCx7DHTmtG5XEEE8Nx51wwZJoXXAVgeOOQx246dMd6ivfs0JEdtNgsu5mZeA38WCPcEZ9KjtbKW7glhh8uU53qEYdgSTj6CgCKGZZrg+fGynGJGXgBe+Qf6Yqa4/0KQi3cNHBJuiYjG4dCSOxPGR26VXluwALd1Mka8Fm4bP19PQGrUMDXV20FurT/aFA8lfvklcjA7nOOlAFbUoV3+fGSY2OPocZGfwqlkjofyrYt7V9qJIjPBKpjduBjHIbk9Rn+lZt3bPa3Mts7IXhcxnYdykg4OCOtAEIx3NKMn1oBxkEUgI6EUAKOOGFIDgH3pTwSOvbmkGc8daAJrWL7RdQwryzuqj3ya051cX5uyFUKQEDOowc49ewH8qxs+vWtrWPKvoLS7gJjLxYlDYAMoJ3EHtnAOD70AV5LOSKWWyBRggZTtkU5YHOevtge1Q2tpN5yqI2O/5MDng8VJOHS5dihEkTbiCPvJnP6fy+lQw2/8ApjqANsWWyegA6E/pQBMLeSyZvNV4nj4duQQf7oPr7/WnS6lLcyw3NwEl+URHK9FUYAyP9nAqO4uWeNXgd1VDtbBIyf7x9z/SltZHuElVxGyqN5LoOMe45yRmgCP7PE8rx4aIqTuOdyr/AFH61bgeRIpba2ZJkZOd3JbBzwDyB16VBd3EM3l/umiQqD+7bIJHBJz1PHr3plrAJbmPyHVyzAbD8pPr14/WgCRIkkTywslvMHBVSCck8fXrj1qa9t3spJI7dklkkGZJImDhQedox9eT+H1mWa60X7RYxMSZEaKWT7y4HO1SeOqjJHXtx1os8c8cJ8khiSmYzggjkcdO/tQBB5ZlhVF+Zkcrj2P/AOo/nU9tMkDNEhD/AC5Zuu7HOB7cVZgnASWCO4jmLociYcnHOAew47EZqrGsUUsbTQyQjcMsvzKR36/40ARl5BN5BAmwxUBx/I9auXEsFmInt4i02wBmdshCOoGMdsdexp89obMK6PHLPIgwqnlMZU5B7/L/AJ5qgiPIrwsH8zO8AjnPf9OfwoAutJI8Zs92ImkWfYowMZwOB7EmqF8xa8uGJ+9IzH8TVxMSXSshyPKeL8lKj/2WqNyP9Il65Dnj8aAIjwcgYFGQOn40EHJzx3o6cg0AAxnnkUoO00AgYP50lAByO+K1NPuI2spreXiIMCc9lOASPcHafz9ay81NZ3ktjL5kRGSCpDDIZSMEH2IoAtXE01temJlWXbt+XqD8o6H0Pt61oX2noNPhntvMjW5VRKZ12hWX+AN6Y2ntn8qJ3fWbPzIJ382BAME4O0fwsR1x2b069KoG5MMlwhXcqMA6P0ZR8pz+Q9xQA23szG43yRvG3yv5X7zj8PTrQ6bZwtuyskbcL0ZsdSQe59s1FPbhCJrZmaLG4f3lHv8A41M5nnuZF+WQbz/rBnGenPWgBjWkr5tkRi6yfKDwSrDrz06frSSypaRNbQMru3Ekw7/7K+3v3+laf9owfZTa2qsuIzHNJnf5vO4YVvurxjAPOAT1xWYVik6LE30Yxn9ePyoAFnkiuY5Y2YbwrYXuehH5g1YkmWKO4tXSKSRSC7gbWGDgqCPrzSywxW1qC3nRTAlTuTIjU8jnPXr24+vRsNobm7VY5ov3qc7iVVflwSSRgAEZz7UAVoET7QjRPltw/duME+3oasyxvocskUmRcjIMYP3Pr2zUZmWxYw22fP8AuvOQQR7KO316/SoZZ2WaVTtkTe3yN25PT0oAtanfNdTtPPDA7s7A7Ywg7HgLgDrUlldR2zpIfMDFWKxtiRVG084P6Cie2Qo8owXEuUt2+82V6+44Huc9KqQKdzz3BJJRiFPV+MflQBoWFvbz2zu0iQ/OuwgMrEZyxxyMAKCeRWXezRTXdw8O/wAppGaPcMNgnjOOM4q1du1taiI7RJKMuR2H90emMAfXPpWbnFABjnmg8nilzjnHWjOBgdPpQAgz2JyeMUdvejJBznmkoAUe/SlHPBPHWkzjoaCc0AWLC+uNPuY7i3Yh0YMARkEg9x3rfe3tdUk8+BIIkuOAd6psJz8jZ4GD06ZAH0HMjk5qS3nmtZN8bFTjBHZh6Ed6AL6QR2khgaVmkz90/uyjdM5PX8OtT6nFLb7PtNo9rJKgOI1IVBjrg92GDnPQ+9PgMOtlYnKx3ORje3BH16jHrz7jjNNNneusyxRSXESMZF8o5Ma9CQVyAOnPTigDPsw1vcJLGVmQH5lU/MR34PNEtu2nzsjDdLnCLjt2bHv2qWSV7dA0c32kjqzgEIfoe/v0q1e6tcSW8ImOXUbZZF+WRieRuPcY4x7GgCnZEwuyyzsvmfKUQ5Oc8Z7DnHr9KsXd9mxt0a1hjyGH7sbXYbjyx7nPHTsaghXzQZA0Lxr1DRqrE+g9T+NTXctxcpFNDGsTbcOka7dnJ7nkA/XrmgBlrbJePGpMkRLDbJIMKOehb098cUyeB7aSTYizSEkl1wwX6D+p/wDr0wIkMZlnmLO+VUJ8xx3OTx7d+9WrAGY/NEsMKLu85+Sg+p7fT8KAGXkbRuPMjZ3cbghBJJboT36AfWrNnC028XId7p0Ox+f3SrgszHHICg4Hb14xUlybqa6nu5b2V4iSXud7EyDoAM8rkDoefbtWbc6pIyvFbloomG18Mdzj0J9PbpQBXvbgXEzOowmcKO4UdBUJ6kDp9aMAg4x0zQu4HIH6UAJyT7mlHGc9P50ZxzzmkzQAA4OaVxtYgdqKKAAgYJ6YxSdqKKAHDBU57U0c/lRRQA7c0MgaNmVlIIYHBB9a39MuJdSS4muHbzYvnDqcEk9c9vyHNFFAFZr+e31RI9yzJvUYmUPwccc9vark0aTWjXaxxxNPlmSONdoOc8Ag4oooAx57qbe6B9qxkqoUAAc1ZmvrprqC1knklhVUjCSHcArYJ4PuSaKKAJtSEdrqP2dIIiASocjkAHHbj9K2dZ0u20bRrK5hVppbiLz3aY7vm3ED04AHH1NFFAHKXN7cXTBZJWKZBCDhQfYDjvVZuWNFFADto37e1DDaOPU0UUAIvLgdM+lIfvUUUAf/2Q=="},yT=["w2","w1","w3","w5"].map(s=>({src:`/media/${s}.mp4`,poster:`/media/${s}.jpg`})),MT=["t2","t3","t1"].map(s=>({src:`/media/${s}.mp4`,poster:`/media/${s}.jpg`}));function ST({page:s,onClose:e,onGo:t}){return ze.jsx("div",{className:`page ${s==="performances"?"wide":""}`,onClick:e,children:ze.jsxs("article",{onClick:r=>r.stopPropagation(),children:[ze.jsxs("nav",{className:"tabs",children:[["about","instrument","performances"].map(r=>ze.jsx("button",{className:r===s?"on":"",onClick:()=>t(r),children:r},r)),ze.jsxs("button",{className:"close",onClick:e,"aria-label":"close",children:[ze.jsx("span",{className:"cl",children:"close "}),"×"]})]}),s==="about"&&ze.jsxs("section",{children:[ze.jsx("h2",{children:"The machine reads, the hand leads."}),ze.jsxs("p",{children:[ze.jsx("b",{children:"<N4TH>"})," is the visual instrument of Nathalia Cury, a Brazilian art director based in Stuttgart for six years. With a background in typography, editorial design and brand identity, she brings a designer's eye to the club."]}),ze.jsx("p",{children:"She built <N4TH> together with AI, using it as a design partner from the first sketches in Figma Make to hand tracking with MediaPipe and real-time graphics in Three.js. The result is a tool that sits between graphic design, code and performance."}),ze.jsx("p",{children:"On stage, a camera reads her hands and the music reads the room. Every gesture becomes a move in the visuals: a fist gathers, an open palm releases, a clap breaks everything open. She moves between 2D and 3D worlds, turns colour palettes live, or lets the system run on its own and evolve with the night."}),ze.jsx("h3",{children:"Contact"}),ze.jsxs("p",{children:[ze.jsx("a",{href:"mailto:cury.nathalia@gmail.com",children:"cury.nathalia@gmail.com"}),ze.jsx("br",{}),ze.jsx("a",{href:"https://instagram.com/nathcury",target:"_blank",rel:"noreferrer",children:"@nathcury"})]})]}),s==="instrument"&&ze.jsxs("section",{children:[ze.jsx("h2",{children:"Built with AI, played by hand."}),ze.jsx("p",{children:"The tool runs in a browser. It listens to the music — its kicks, its builds, its silences — and it watches the hands. Every visual answers both: the sound gives the pulse, the hand gives the decision."}),ze.jsxs("ul",{children:[ze.jsxs("li",{children:[ze.jsx("b",{children:"one finger"})," slow · ",ze.jsx("b",{children:"five"})," fast"]}),ze.jsxs("li",{children:[ze.jsx("b",{children:"a fist"})," gathers · ",ze.jsx("b",{children:"an open palm"})," releases"]}),ze.jsxs("li",{children:[ze.jsx("b",{children:"a clap"})," breaks everything open"]}),ze.jsx("li",{children:"the music: pulse, kicks, build-ups, the drop"})]}),ze.jsx("p",{children:"Every part of it — the visuals, the way they listen, the way they read a gesture — was written in conversation with AI. The machine can play on its own, so the performance stays with the question: who leads and who follows?"}),ze.jsxs("figure",{children:[ze.jsx("img",{src:"/media/instrument.jpg",alt:"The instrument: the visuals of the set, layers, effects, the sound and the hands"}),ze.jsx("figcaption",{children:"The instrument as it is played: the set of visuals, the layers, the effects, what it hears."})]}),ze.jsxs("figure",{children:[ze.jsx("img",{src:"/media/library.jpg",alt:"The library of visuals, and the set chosen from it"}),ze.jsx("figcaption",{children:"The library: every visual of the instrument, and below, the set chosen for the night."})]})]}),s==="performances"&&ze.jsxs("section",{children:[ze.jsx("h2",{children:"Performances"}),ze.jsx("p",{className:"sub",children:"Stuttgart, November 2026 — Nische at Kultur Bunker. Live with a DJ set."}),ze.jsx("div",{className:"shows wide",children:yT.map(r=>ze.jsx("video",{src:r.src,poster:r.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,disablePictureInPicture:!0,disableRemotePlayback:!0},r.src))}),ze.jsx("div",{className:"shows tall",children:MT.map(r=>ze.jsx("video",{src:r.src,poster:r.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,disablePictureInPicture:!0,disableRemotePlayback:!0},r.src))})]})]})})}const vs=[{id:"dust",name:"Dust",note:"a fist gathers it into a circle"},{id:"sphere",name:"Planet",note:"a fist pulls it out of shape"},{id:"line",name:"Line",note:"an open hand unfolds it"},{id:"jellyfish",name:"Jelly",note:"a fist closes the bells"},{id:"dandelion",name:"Dandelion",note:"the hand moves the wind"},{id:"standby",name:"Standby",note:"a fist closes the picture to a point"}],hd={dust:{colors:Qr(0,0,"grayscale"),params:{"look.glow":2.2,"field.size":1.3,"field.drift":1.8,"look.trail":.55,"sound.beat":.12,"sound.sparks":.5,"sound.bass":.4}},line:{colors:Qr(0,0,"grayscale"),params:{"line.zoom":.9,"line.weight":1.4,"line.wave":2.65,"line.speed":.65,"line.birth":.6,"hands.open":1,"hands.pull":1,"hands.clap":1,"sound.beat":.7,"sound.bass":2,"sound.grow":.75}},dandelion:{colors:Qr(200,60,"black"),params:{"sound.gust":0,"sound.wind":1.4,"field.return":7.5,"field.sway":1.9,"field.bounce":0,"field.drift":.44,"field.backdrop":0,"colour.speed":2.5,"colour.offset":0,"colour.palette":0,"colour.depth":.32}},jellyfish:{colors:Qr(245,100,"contrast"),params:{"swarm.backdrop":0,"swarm.height":.3,"swarm.arrival":11,"colour.palette":3,"sound.flow":1.7,"swarm.drift":1.3,"sound.swell":1.2,"sound.beat":.6}},standby:{colors:Qr(0,0,"grayscale"),params:{"sound.quiet":.4,"grid.words":0}},sphere:{colors:Qr(0,0,"grayscale"),params:{"shape.style":2,"shape.size":1.2,"shape.morph":.32,"shape.lobes":1.05,"shape.detail":2,"motion.spin":.4,"motion.flow":1,"motion.dust":1,"motion.points":3600,"sound.beat":0,"sound.drop":0,"sound.bass":.3,"sound.squash":1,"sound.spin":1.4,"shape.steady":1,"motion.glide":2}}},AT={dandelion:"hue-rotate(2.59rad) saturate(0.95) contrast(1.28)",line:"sepia(1) saturate(4) hue-rotate(188deg) brightness(1.15)"},ET=Qr(110,70,"contrast"),Xh={dust:{path:"field.count",min:200,max:5e3,start:.8},line:{path:"line.count",min:1,max:40,start:11/39},dandelion:{path:"field.count",min:1,max:12,start:.2},jellyfish:{path:"swarm.count",min:1,max:8,start:.43},standby:{path:"grid.detail",min:.2,max:1,start:1},sphere:{path:"shape.detail",min:2,max:6,start:0}},Lg=s=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`,Yr=[{name:"Johan Nex · Machine",src:"/tracks/m4n4th.mp3",seconds:362},{name:"Johan Nex · Human",src:"/tracks/human.mp3",seconds:395}];class wT{constructor(e,t){B(this,"parts");this.canvas=e,this.ctx=t;const r=()=>{const f=document.createElement("canvas");return f.width=e.width,f.height=e.height,f},o=r(),l=r(),c=new bw(o,o.getContext("2d"),0);c.setParams({"look.flow":2.65,"look.zoom":2.85,"look.detail":2,"look.veins":1.35,"look.grain":.3}),this.parts=[{r:c,c:o,filter:"hue-rotate(-0.2rad) contrast(1.3)",alpha:.45,blend:"source-over",colors:ET},{r:new gw(l,l.getContext("2d")),c:l,filter:"saturate(1.88) contrast(1.3)",alpha:.94,blend:"screen",colors:hd.jellyfish.colors}]}setParams(e){var t,r;(r=(t=this.parts[1].r).setParams)==null||r.call(t,e)}render(e,t,r){const{canvas:o,ctx:l}=this;l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,o.width,o.height);for(const c of this.parts)(c.c.width!==o.width||c.c.height!==o.height)&&(c.c.width=o.width,c.c.height=o.height),c.r.render(e,c.colors,r),l.globalAlpha=c.alpha,c.blend==="screen"?(l.filter=`${c.filter} invert(1)`,l.globalCompositeOperation="multiply",l.drawImage(c.c,0,0),l.globalCompositeOperation="lighter"):l.globalCompositeOperation=c.blend,l.filter=c.filter,l.drawImage(c.c,0,0);l.filter="none",l.globalAlpha=1,l.globalCompositeOperation="source-over"}destroy(){var e,t;for(const r of this.parts)(t=(e=r.r).destroy)==null||t.call(e)}}function TT(s,e,t){return s==="dust"?new tw(e,t):s==="line"?new iw(e,t):s==="jellyfish"?new wT(e,t):s==="standby"?new Aw(e,t):s==="sphere"?new Ew(e,t):new fw(e,t)}const Qf=(s,e)=>{const t=Xh[s],r=t.min+e*(t.max-t.min);return{...hd[s].params,[t.path]:t.max>2?Math.round(r):r}};function bT(s){var r,o,l;const e=document.querySelector(s);if(!e||s===".stage")return{top:"42%",left:"50%",transform:"translate(-50%, -50%)"};const t=e.getBoundingClientRect();if(window.innerWidth<=720&&(s===".track"||s===".cards")){const c=(r=document.querySelector(".desk"))==null?void 0:r.getBoundingClientRect(),f=e.getBoundingClientRect();if(c)return{top:c.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}if(s===".fx"&&window.innerWidth<=720){const c=(o=document.querySelector(".fx.open"))==null?void 0:o.getBoundingClientRect();if(c)return{top:c.top-16,left:window.innerWidth/2,transform:"translate(-50%, -100%)"};const f=(l=document.querySelector(".fxbtn"))==null?void 0:l.getBoundingClientRect();if(f)return{top:f.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}return s===".fx"?{top:t.top+t.height/2,left:t.left-14,transform:"translate(-100%, -50%)"}:{top:t.top-16,left:t.left+t.width/2,transform:"translate(-50%, -100%)"}}const CT=Math.max(1,Math.min(5,Number(new URLSearchParams(location.search).get("guide"))||2)),RT={left:null,right:null},PT={dust:.35,sphere:0,line:.8,jellyfish:.7,dandelion:.35,standby:.8},LT=["5 fingers","2 fingers","fist","pinch","clap"],IT={bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0};function DT(s,e,t){return{position:{x:s,y:e},gesture:t>.5?"fist":"open",openness:1-t,fingerCount:t>.5?0:3,velocity:0}}const Jf=[{key:"play",at:".track",text:"Play a track — the visual moves with the music."},{key:"hand",at:".stage",text:"Raise your hand to the camera — or move the mouse."},{key:"fist",at:".stage",text:"Close your hand (or hold the mouse button) — then open it."},{key:"clap",at:".stage",text:"Clap (or click quickly)."},{key:"fx",at:".fx",text:"Shape it: trail, colour, amount."},{key:"switch",at:".cards",text:"Try another visual."}];function UT(){const s=Rt.useRef(null),[e,t]=Rt.useState("dust"),[r,o]=Rt.useState(!0),[l,c]=Rt.useState(0),[f,d]=Rt.useState(Yr[0].seconds/vs.length),h=ue=>{t(ue),c(we=>we+1)};Rt.useEffect(()=>{if(!r)return;const ue=window.setInterval(()=>{t(we=>vs[(vs.findIndex(Ee=>Ee.id===we)+1)%vs.length].id)},f*1e3);return()=>window.clearInterval(ue)},[r,l,f]);const g=Rt.useRef(e);g.current=e;const[x,m]=Rt.useState(0),[_,S]=Rt.useState(0),[T,y]=Rt.useState(()=>Object.fromEntries(vs.map(ue=>[ue.id,Xh[ue.id].start]))),[M,w]=Rt.useState(!1);Rt.useEffect(()=>{m(0),S(0),y(ue=>({...ue,[e]:Xh[e].start}))},[e]);const P=Rt.useRef({trail:x,hue:_,amounts:T});P.current={trail:x,hue:_,amounts:T};const[R,z]=Rt.useState(null),[I,O]=Rt.useState("off"),E=Rt.useRef(RT),D=Rt.useRef(null);D.current=R;const K=Rt.useRef({x:.5,y:.5,on:!1,down:0,closed:0,clapAt:0,moved:0}),k=Rt.useCallback(async()=>{O("asking");try{const ue=await navigator.mediaDevices.getUserMedia({video:{width:640,height:360,facingMode:"user"}}),we=document.createElement("video");we.muted=!0,we.playsInline=!0,we.srcObject=ue,await we.play(),z(we),O("on")}catch{O("refused")}},[]);Rt.useEffect(()=>{k()},[k]);const j=Rt.useRef(null),[ce,re]=Rt.useState(null),[W,te]=Rt.useState(0),[G,N]=Rt.useState(Yr[0].seconds),F=ue=>{N(ue),ue>0&&d(ue/vs.length)},$=Rt.useRef(0),U=Rt.useRef("");$.current=W;const V=Rt.useRef(null),Ae=Rt.useCallback(ue=>{var Ee;let we=j.current;if(!we){we=new Audio,we.crossOrigin="anonymous",we.loop=!0,we.addEventListener("timeupdate",()=>te(we.currentTime)),we.addEventListener("loadedmetadata",()=>{F(we.duration||0),Math.abs(we.currentTime-$.current)>1&&(we.currentTime=$.current)}),j.current=we;const ht=new AudioContext,L=ht.createMediaElementSource(we),A=ht.createAnalyser();A.fftSize=2048,A.smoothingTimeConstant=.55,L.connect(A),A.connect(ht.destination),V.current={ctx:ht,analyser:A,data:new Uint8Array(A.frequencyBinCount),state:fT()}}if((Ee=V.current)==null||Ee.ctx.resume(),ce===ue){we.pause(),re(null);return}if(U.current!==Yr[ue].src){U.current&&($.current=0,te(0)),F(Yr[ue].seconds),U.current=Yr[ue].src,we.src=Yr[ue].src,we.currentTime=$.current;const ht=we;fetch(Yr[ue].src).then(L=>L.blob()).then(L=>{const A=ht.currentTime,ne=!ht.paused;ht.src=URL.createObjectURL(L),ht.currentTime=A,ne&&ht.play().catch(()=>{})}).catch(()=>{})}we.play().catch(()=>{}),re(ue)},[ce]),[Se,de]=Rt.useState(new Set),[X,le]=Rt.useState(()=>{try{return!localStorage.getItem("n4th-guide-seen")}catch{return!0}}),se=ue=>{le(ue);try{localStorage.setItem("n4th-guide-seen","1")}catch{}},Me=Rt.useCallback(ue=>de(we=>we.has(ue)?we:new Set(we).add(ue)),[]);Rt.useEffect(()=>{ce!==null&&Me("play")},[ce,Me]);const be=Jf.find(ue=>!Se.has(ue.key));Rt.useEffect(()=>{if(!be)try{localStorage.setItem("n4th-guide-seen","1")}catch{}},[be]),Rt.useEffect(()=>{const ue=s.current,we=ue.getContext("2d"),Ee=document.createElement("canvas"),ht=Ee.getContext("2d");let L=null,A=null;const ne=3;let ye=performance.now(),Ce=0;const Ie=vT();let Ve=0,me="",ge=.3,ke=-1,Ke=0,Ne=-1e9,Fe=0,dt=0,gt=450;const Et=new Uint8Array(300),Y=(Te,ve,We)=>{(Te.width!==ve||Te.height!==We)&&(Te.width=ve,Te.height=We)},Oe=()=>{const Te=Math.min(window.devicePixelRatio||1,1920/Math.max(1,window.innerWidth)),ve=Math.round(window.innerWidth*Te),We=Math.round(window.innerHeight*Te);Y(ue,ve,We),Y(Ee,ve,We),L&&Y(L.work,ve,We),A&&Y(A.work,ve,We)},_e=Te=>{const ve=document.createElement("canvas");ve.width=ue.width,ve.height=ue.height;const We=TT(Te,ve,ve.getContext("2d"));return{v:Te,r:We,amount:-1,work:ve,alpha:0,circle:-1,go:-1}},qe=Te=>{var jn,gi,rr,Kn,cn,Rn,dn,_n,yn,Pn,Wi,sr;Ce=requestAnimationFrame(qe);const ve=Math.min(.1,(Te-ye)/1e3);ye=Te,Oe();const We=g.current;L?L.v!==We&&((gi=A==null?void 0:(jn=A.r).destroy)==null||gi.call(jn),A=L,L=_e(We)):(L=_e(We),L.alpha=1),L.alpha=Math.min(1,L.alpha+ve/ne),A&&(A.alpha=Math.max(0,A.alpha-ve/ne),A.alpha<=0&&((Kn=(rr=A.r).destroy)==null||Kn.call(rr),A=null));for(const ct of[L,A])ct&&D.current&&ct.video!==D.current&&((Rn=(cn=ct.r).setVideoElement)==null||Rn.call(cn,D.current),ct.video=D.current);const $e=K.current;$e.closed+=(($e.down&&Te-$e.down>220?1:0)-$e.closed)*Math.min(1,ve*10);let nt=E.current;!nt.left&&!nt.right&&$e.on&&Te-$e.moved<4e3&&(nt={left:DT($e.x,$e.y,$e.closed),right:null,clapping:Te-$e.clapAt<120,clapIntensity:1});let pt=IT;const Kt=V.current;if(Kt&&j.current&&!j.current.paused){Kt.analyser.getByteFrequencyData(Kt.data);let ct=0;for(let Mn=1;Mn<300;Mn++){const vi=Kt.data[Mn]-(Et[Mn]??0);vi>0&&(ct+=vi),Et[Mn]=Kt.data[Mn]}gt+=(ct-gt)*(1-Math.exp(-ve*.25));let yt=0;for(let Mn=1;Mn<=6;Mn++)yt+=Kt.data[Mn];yt/=6,ke<0&&(ke=yt),yt-ke>40&&yt-Ke>12&&Te-Ne>1e3&&(Ne=Te,Fe=Math.min(1,.7+(yt-ke-40)/30)),ke+=(yt-ke)*(1-Math.exp(-ve*.6)),Ke=yt,pt={...dT(Kt.data,Kt.ctx.sampleRate,Kt.state,.8,Date.now()),live:!0}}const Yt=new Set;for(const ct of[nt.left,nt.right])ct&&(ct.gesture==="fist"?Yt.add("fist"):ct.gesture==="pinch"?Yt.add("pinch"):ct.fingerCount===2?Yt.add("2 fingers"):((ct.fingerCount??0)>=5||(ct.openness??0)>.85)&&Yt.add("5 fingers"));nt.clapping&&(Ve=Te),Te-Ve<500&&Yt.add("clap");const Wn=[...Yt].sort().join("|");Wn!==me&&(me=Wn,lt(Yt)),jE(ve,[xT(nt,Ie,ve)]),KE(0);const Xn=P.current;ht.globalCompositeOperation="source-over",ht.globalAlpha=1,ht.fillStyle="#000",ht.fillRect(0,0,Ee.width,Ee.height);for(const ct of[A,L]){if(!ct)continue;const yt=Xn.amounts[ct.v];if(ct.v==="dust"){const Z=pt.live?Math.max(0,Math.min(1,(gt-520)/260)):0;ge+=((1-Z*.6)*.3-ge)*(1-Math.exp(-ve*.3)),(Math.abs(ge-ct.circle)>.01||Math.abs(Z-ct.go)>.04||Math.abs(yt-ct.amount)>.001)&&((_n=(dn=ct.r).setParams)==null||_n.call(dn,{...Qf(ct.v,yt),"form.circle":ge,"sound.quiet":1.6*(1-Z)+.4,"sound.beat":.12+.8*Z,"sound.sparks":.5+1.3*Z,"sound.bass":.4+.8*Z,"field.drift":1.8+.8*Z}),ct.amount=yt,ct.circle=ge,ct.go=Z)}else if(ct.v==="sphere"){const Z=(Te-Ne)/1e3,fe=Z<.25?1:Math.exp(-(Z-.25)*1.1);dt+=(fe-dt)*(1-Math.exp(-ve*(fe>dt?10:3)));const ie=pt.live?Math.max(0,Math.min(1,(gt-520)/260)):0,oe=.32+.22*ie,Be=oe+(.85-oe)*dt;(Math.abs(Be-ct.circle)>.003||Math.abs(ie-ct.go)>.008||Math.abs(yt-ct.amount)>.001)&&((Pn=(yn=ct.r).setParams)==null||Pn.call(yn,{...Qf(ct.v,yt),"shape.morph":Be,"motion.flow":1+1.6*ie,"motion.spin":.4+.5*ie}),ct.amount=yt,ct.circle=Be,ct.go=ie)}else Math.abs(yt-ct.amount)>.001&&((sr=(Wi=ct.r).setParams)==null||sr.call(Wi,Qf(ct.v,yt)),ct.amount=yt);const Mn=Te-Ne<140&&!nt.clapping?{...nt,clapping:!0,clapIntensity:Fe*PT[ct.v]}:nt;ct.r.render(Mn,hd[ct.v].colors,pt);const vi=ct.alpha*ct.alpha*(3-2*ct.alpha),C=Xn.hue?ct.v==="dust"||ct.v==="standby"?`sepia(1) saturate(5) hue-rotate(${Xn.hue-40}deg)`:`hue-rotate(${Xn.hue}deg)`:"";ht.filter=[AT[ct.v],C].filter(Boolean).join(" ")||"none",ht.globalAlpha=vi,ht.globalCompositeOperation="lighter",ht.drawImage(ct.work,0,0)}ht.filter="none",ht.globalCompositeOperation="source-over",ht.globalAlpha=1,we.globalCompositeOperation="source-over";const ai=Xn.trail*Xn.trail*1.5,li=ai<.005?0:Math.exp(-ve*Math.LN2/ai);we.globalAlpha=1-li,we.fillStyle="#000",we.fillRect(0,0,ue.width,ue.height),we.globalAlpha=1,we.globalCompositeOperation=li>0?"lighten":"source-over",we.drawImage(Ee,0,0),we.globalCompositeOperation="source-over"};return Ce=requestAnimationFrame(qe),()=>{var Te,ve,We,$e;cancelAnimationFrame(Ce),(ve=L==null?void 0:(Te=L.r).destroy)==null||ve.call(Te),($e=A==null?void 0:(We=A.r).destroy)==null||$e.call(We)}},[]);const xe=ue=>{const we=K.current;we.x=ue.clientX/window.innerWidth,we.y=ue.clientY/window.innerHeight,we.on=!0,we.moved=performance.now(),I!=="on"&&Me("hand")},Xe=ue=>{xe(ue),K.current.down=performance.now()},He=()=>{const ue=K.current,we=performance.now()-ue.down;ue.down&&we<220&&(ue.clapAt=performance.now(),Me("clap")),ue.down&&we>400&&Me("fist"),ue.down=0},[je,tt]=Rt.useState(!1),[ot,lt]=Rt.useState(new Set),mt=Rt.useCallback(ue=>{var we,Ee;E.current=ue,tt(!!(ue.left||ue.right)),(ue.left||ue.right)&&Me("hand"),(((we=ue.left)==null?void 0:we.gesture)==="fist"||((Ee=ue.right)==null?void 0:Ee.gesture)==="fist")&&Me("fist"),ue.clapping&&Me("clap")},[Me]),[wt,q]=Rt.useState(()=>{const ue=location.pathname.replace(/^\/+|\/+$/g,"");return["about","instrument","performances"].includes(ue)?ue:null}),Re=ue=>{q(ue);try{history.replaceState(null,"","/"+(ue??""))}catch{}};return ze.jsxs(ze.Fragment,{children:[ze.jsx("canvas",{ref:s,className:"stage",onPointerMove:xe,onPointerDown:Xe,onPointerUp:He,onPointerLeave:()=>{K.current.on=!1,K.current.down=0}}),R&&ze.jsx(Qw,{videoElement:R,onHandData:mt}),ze.jsxs("header",{className:"top",children:[ze.jsx("div",{className:"brand",children:"<N4TH>"}),ze.jsx("nav",{children:["about","instrument","performances"].map(ue=>ze.jsx("button",{onClick:()=>Re(ue),children:ue},ue))})]}),X&&be&&!wt&&!(M&&window.innerWidth<=720)&&ze.jsxs("div",{className:`guide g${CT}`,style:bT(be.at),"data-at":be.at,children:[ze.jsxs("span",{className:"count",children:[Jf.indexOf(be)+1,"/",Jf.length]}),ze.jsx("span",{children:be.text}),be.key==="hand"&&I!=="on"&&ze.jsx("button",{className:"cam",onClick:k,disabled:I==="asking",children:I==="refused"?"camera not allowed — the mouse plays":I==="asking"?"…":"allow camera"}),ze.jsx("button",{className:"x",onClick:()=>se(!1),title:"Hide the guide",children:"×"})]}),ze.jsxs("aside",{className:`fx ${M?"open":""}`,onPointerDown:()=>Me("fx"),children:[ze.jsx("div",{className:"fxt",children:"EFFECTS"}),ze.jsxs("label",{children:["Trail",ze.jsx("input",{type:"range",min:0,max:1,step:.01,value:x,onChange:ue=>m(+ue.target.value)})]}),ze.jsxs("label",{children:["Colour",ze.jsx("input",{type:"range",min:0,max:360,step:1,value:_,onChange:ue=>S(+ue.target.value)})]}),ze.jsxs("label",{children:["Amount",ze.jsx("input",{type:"range",min:0,max:1,step:.01,value:T[e],onChange:ue=>y(we=>({...we,[e]:+ue.target.value}))})]})]}),ze.jsxs("footer",{className:"desk",children:[ze.jsx("div",{className:"cards",children:vs.map((ue,we)=>ze.jsxs("button",{className:`card ${e===ue.id?"on":""}`,onClick:()=>{h(ue.id),ue.id!=="dust"&&Me("switch")},title:ue.note,children:[ze.jsx("img",{src:_T[ue.id],alt:""}),ze.jsx("span",{className:"num",children:we+1}),ze.jsx("span",{className:"name",children:ue.name})]},ue.id))}),ze.jsx("div",{className:"sep"}),ze.jsxs("div",{className:"tracks",children:[Yr.map((ue,we)=>ze.jsxs("button",{className:`track ${ce===we?"on":""}`,onClick:()=>Ae(we),children:[ze.jsx("span",{children:ce===we?"❚❚":"▶"})," ",ue.name]},ue.src)),ze.jsxs("div",{className:"timeline",children:[ze.jsx("input",{type:"range",min:0,max:Math.max(1,G),step:.1,value:W,onChange:ue=>{const we=j.current,Ee=+ue.target.value;te(Ee),we&&(we.currentTime=Ee)}}),ze.jsxs("span",{children:[Lg(W)," / ",Lg(G)]})]})]}),ze.jsx("div",{className:"sep"}),ze.jsx("button",{className:`autobtn ${r?"on":""}`,onClick:()=>o(ue=>!ue),title:"Auto: the track shared among the visuals, one after the other",children:"auto"}),ze.jsx("button",{className:`fxbtn ${M?"on":""}`,onClick:()=>{w(ue=>!ue),Me("fx")},children:"FX"}),ze.jsx("button",{className:`camera ${I==="on"?"on":""}`,onClick:I==="on"?void 0:k,title:"Play with your hand through the camera",children:I==="on"?ze.jsxs(ze.Fragment,{children:[ze.jsx("span",{className:`dot ${je?"seen":""}`,children:"●"})," hand"]}):I==="refused"?"mouse":"camera"}),ze.jsx("div",{className:"words",children:LT.map(ue=>ze.jsx("span",{className:ot.has(ue)?"lit":"",children:ue},ue))})]}),wt&&ze.jsx(ST,{page:wt,onClose:()=>Re(null),onGo:Re})]})}m_.createRoot(document.getElementById("root")).render(ze.jsx(Rt.StrictMode,{children:ze.jsx(UT,{})}));
