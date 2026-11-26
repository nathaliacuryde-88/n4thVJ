var X_=Object.defineProperty;var j_=(s,e,t)=>e in s?X_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Q=(s,e,t)=>j_(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Qu={exports:{}},$o={},Zu={exports:{}},Rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function K_(){if(Mm)return Rt;Mm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function g(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,w={};function y(I,V,Me){this.props=I,this.context=V,this.refs=w,this.updater=Me||x}y.prototype.isReactComponent={},y.prototype.setState=function(I,V){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,V,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function M(){}M.prototype=y.prototype;function C(I,V,Me){this.props=I,this.context=V,this.refs=w,this.updater=Me||x}var P=C.prototype=new M;P.constructor=C,S(P,y.prototype),P.isPureReactComponent=!0;var L=Array.isArray,X=Object.prototype.hasOwnProperty,U={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function E(I,V,Me){var Ae,xe={},j=null,ae=null;if(V!=null)for(Ae in V.ref!==void 0&&(ae=V.ref),V.key!==void 0&&(j=""+V.key),V)X.call(V,Ae)&&!z.hasOwnProperty(Ae)&&(xe[Ae]=V[Ae]);var G=arguments.length-2;if(G===1)xe.children=Me;else if(1<G){for(var de=Array(G),Te=0;Te<G;Te++)de[Te]=arguments[Te+2];xe.children=de}if(I&&I.defaultProps)for(Ae in G=I.defaultProps,G)xe[Ae]===void 0&&(xe[Ae]=G[Ae]);return{$$typeof:s,type:I,key:j,ref:ae,props:xe,_owner:U.current}}function N(I,V){return{$$typeof:s,type:I.type,key:V,ref:I.ref,props:I.props,_owner:I._owner}}function Z(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function B(I){var V={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Me){return V[Me]})}var Y=/\/+/g;function ue(I,V){return typeof I=="object"&&I!==null&&I.key!=null?B(""+I.key):V.toString(36)}function fe(I,V,Me,Ae,xe){var j=typeof I;(j==="undefined"||j==="boolean")&&(I=null);var ae=!1;if(I===null)ae=!0;else switch(j){case"string":case"number":ae=!0;break;case"object":switch(I.$$typeof){case s:case e:ae=!0}}if(ae)return ae=I,xe=xe(ae),I=Ae===""?"."+ue(ae,0):Ae,L(xe)?(Me="",I!=null&&(Me=I.replace(Y,"$&/")+"/"),fe(xe,V,Me,"",function(Te){return Te})):xe!=null&&(Z(xe)&&(xe=N(xe,Me+(!xe.key||ae&&ae.key===xe.key?"":(""+xe.key).replace(Y,"$&/")+"/")+I)),V.push(xe)),1;if(ae=0,Ae=Ae===""?".":Ae+":",L(I))for(var G=0;G<I.length;G++){j=I[G];var de=Ae+ue(j,G);ae+=fe(j,V,Me,de,xe)}else if(de=g(I),typeof de=="function")for(I=de.call(I),G=0;!(j=I.next()).done;)j=j.value,de=Ae+ue(j,G++),ae+=fe(j,V,Me,de,xe);else if(j==="object")throw V=String(I),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return ae}function H(I,V,Me){if(I==null)return I;var Ae=[],xe=0;return fe(I,Ae,"","",function(j){return V.call(Me,j,xe++)}),Ae}function ne(I){if(I._status===-1){var V=I._result;V=V(),V.then(function(Me){(I._status===0||I._status===-1)&&(I._status=1,I._result=Me)},function(Me){(I._status===0||I._status===-1)&&(I._status=2,I._result=Me)}),I._status===-1&&(I._status=0,I._result=V)}if(I._status===1)return I._result.default;throw I._result}var W={current:null},O={transition:null},F={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:O,ReactCurrentOwner:U};function te(){throw Error("act(...) is not supported in production builds of React.")}return Rt.Children={map:H,forEach:function(I,V,Me){H(I,function(){V.apply(this,arguments)},Me)},count:function(I){var V=0;return H(I,function(){V++}),V},toArray:function(I){return H(I,function(V){return V})||[]},only:function(I){if(!Z(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Rt.Component=y,Rt.Fragment=t,Rt.Profiler=o,Rt.PureComponent=C,Rt.StrictMode=r,Rt.Suspense=p,Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,Rt.act=te,Rt.cloneElement=function(I,V,Me){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Ae=S({},I.props),xe=I.key,j=I.ref,ae=I._owner;if(V!=null){if(V.ref!==void 0&&(j=V.ref,ae=U.current),V.key!==void 0&&(xe=""+V.key),I.type&&I.type.defaultProps)var G=I.type.defaultProps;for(de in V)X.call(V,de)&&!z.hasOwnProperty(de)&&(Ae[de]=V[de]===void 0&&G!==void 0?G[de]:V[de])}var de=arguments.length-2;if(de===1)Ae.children=Me;else if(1<de){G=Array(de);for(var Te=0;Te<de;Te++)G[Te]=arguments[Te+2];Ae.children=G}return{$$typeof:s,type:I.type,key:xe,ref:j,props:Ae,_owner:ae}},Rt.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},Rt.createElement=E,Rt.createFactory=function(I){var V=E.bind(null,I);return V.type=I,V},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(I){return{$$typeof:f,render:I}},Rt.isValidElement=Z,Rt.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:ne}},Rt.memo=function(I,V){return{$$typeof:d,type:I,compare:V===void 0?null:V}},Rt.startTransition=function(I){var V=O.transition;O.transition={};try{I()}finally{O.transition=V}},Rt.unstable_act=te,Rt.useCallback=function(I,V){return W.current.useCallback(I,V)},Rt.useContext=function(I){return W.current.useContext(I)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(I){return W.current.useDeferredValue(I)},Rt.useEffect=function(I,V){return W.current.useEffect(I,V)},Rt.useId=function(){return W.current.useId()},Rt.useImperativeHandle=function(I,V,Me){return W.current.useImperativeHandle(I,V,Me)},Rt.useInsertionEffect=function(I,V){return W.current.useInsertionEffect(I,V)},Rt.useLayoutEffect=function(I,V){return W.current.useLayoutEffect(I,V)},Rt.useMemo=function(I,V){return W.current.useMemo(I,V)},Rt.useReducer=function(I,V,Me){return W.current.useReducer(I,V,Me)},Rt.useRef=function(I){return W.current.useRef(I)},Rt.useState=function(I){return W.current.useState(I)},Rt.useSyncExternalStore=function(I,V,Me){return W.current.useSyncExternalStore(I,V,Me)},Rt.useTransition=function(){return W.current.useTransition()},Rt.version="18.3.1",Rt}var Sm;function Bh(){return Sm||(Sm=1,Zu.exports=K_()),Zu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function q_(){if(Am)return $o;Am=1;var s=Bh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,d){var m,_={},g=null,x=null;d!==void 0&&(g=""+d),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(x=p.ref);for(m in p)r.call(p,m)&&!l.hasOwnProperty(m)&&(_[m]=p[m]);if(f&&f.defaultProps)for(m in p=f.defaultProps,p)_[m]===void 0&&(_[m]=p[m]);return{$$typeof:e,type:f,key:g,ref:x,props:_,_owner:o.current}}return $o.Fragment=t,$o.jsx=c,$o.jsxs=c,$o}var Em;function Y_(){return Em||(Em=1,Qu.exports=q_()),Qu.exports}var He=Y_(),Ft=Bh(),Sl={},Ju={exports:{}},Zn={},$u={exports:{}},ef={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function Q_(){return wm||(wm=1,(function(s){function e(O,F){var te=O.length;O.push(F);e:for(;0<te;){var I=te-1>>>1,V=O[I];if(0<o(V,F))O[I]=F,O[te]=V,te=I;else break e}}function t(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var F=O[0],te=O.pop();if(te!==F){O[0]=te;e:for(var I=0,V=O.length,Me=V>>>1;I<Me;){var Ae=2*(I+1)-1,xe=O[Ae],j=Ae+1,ae=O[j];if(0>o(xe,te))j<V&&0>o(ae,xe)?(O[I]=ae,O[j]=te,I=j):(O[I]=xe,O[Ae]=te,I=Ae);else if(j<V&&0>o(ae,te))O[I]=ae,O[j]=te,I=j;else break e}}return F}function o(O,F){var te=O.sortIndex-F.sortIndex;return te!==0?te:O.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var p=[],d=[],m=1,_=null,g=3,x=!1,S=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(O){for(var F=t(d);F!==null;){if(F.callback===null)r(d);else if(F.startTime<=O)r(d),F.sortIndex=F.expirationTime,e(p,F);else break;F=t(d)}}function L(O){if(w=!1,P(O),!S)if(t(p)!==null)S=!0,ne(X);else{var F=t(d);F!==null&&W(L,F.startTime-O)}}function X(O,F){S=!1,w&&(w=!1,M(E),E=-1),x=!0;var te=g;try{for(P(F),_=t(p);_!==null&&(!(_.expirationTime>F)||O&&!B());){var I=_.callback;if(typeof I=="function"){_.callback=null,g=_.priorityLevel;var V=I(_.expirationTime<=F);F=s.unstable_now(),typeof V=="function"?_.callback=V:_===t(p)&&r(p),P(F)}else r(p);_=t(p)}if(_!==null)var Me=!0;else{var Ae=t(d);Ae!==null&&W(L,Ae.startTime-F),Me=!1}return Me}finally{_=null,g=te,x=!1}}var U=!1,z=null,E=-1,N=5,Z=-1;function B(){return!(s.unstable_now()-Z<N)}function Y(){if(z!==null){var O=s.unstable_now();Z=O;var F=!0;try{F=z(!0,O)}finally{F?ue():(U=!1,z=null)}}else U=!1}var ue;if(typeof C=="function")ue=function(){C(Y)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,H=fe.port2;fe.port1.onmessage=Y,ue=function(){H.postMessage(null)}}else ue=function(){y(Y,0)};function ne(O){z=O,U||(U=!0,ue())}function W(O,F){E=y(function(){O(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_continueExecution=function(){S||x||(S=!0,ne(X))},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(O){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var te=g;g=F;try{return O()}finally{g=te}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var te=g;g=O;try{return F()}finally{g=te}},s.unstable_scheduleCallback=function(O,F,te){var I=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?I+te:I):te=I,O){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=te+V,O={id:m++,callback:F,priorityLevel:O,startTime:te,expirationTime:V,sortIndex:-1},te>I?(O.sortIndex=te,e(d,O),t(p)===null&&O===t(d)&&(w?(M(E),E=-1):w=!0,W(L,te-I))):(O.sortIndex=V,e(p,O),S||x||(S=!0,ne(X))),O},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(O){var F=g;return function(){var te=g;g=F;try{return O.apply(this,arguments)}finally{g=te}}}})(ef)),ef}var Tm;function Z_(){return Tm||(Tm=1,$u.exports=Q_()),$u.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function J_(){if(Cm)return Zn;Cm=1;var s=Bh(),e=Z_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},_={};function g(n){return p.call(_,n)?!0:p.call(m,n)?!1:d.test(n)?_[n]=!0:(m[n]=!0,!1)}function x(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function S(n,i,a,u){if(i===null||typeof i>"u"||x(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,u,h,v,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(M,C);y[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(M,C);y[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(M,C);y[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,u){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(S(i,a,h,u)&&(a=null),u||h===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,u=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),U=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),B=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),O=Symbol.iterator;function F(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,I;function V(n){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var Me=!1;function Ae(n,i){if(!n||Me)return"";Me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ge){var u=ge}Reflect.construct(n,[],i)}else{try{i.call()}catch(ge){u=ge}n.call(i.prototype)}else{try{throw Error()}catch(ge){u=ge}n()}}catch(ge){if(ge&&u&&typeof ge.stack=="string"){for(var h=ge.stack.split(`
`),v=u.stack.split(`
`),T=h.length-1,k=v.length-1;1<=T&&0<=k&&h[T]!==v[k];)k--;for(;1<=T&&0<=k;T--,k--)if(h[T]!==v[k]){if(T!==1||k!==1)do if(T--,k--,0>k||h[T]!==v[k]){var q=`
`+h[T].replace(" at new "," at ");return n.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",n.displayName)),q}while(1<=T&&0<=k);break}}}finally{Me=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?V(n):""}function xe(n){switch(n.tag){case 5:return V(n.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function j(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case z:return"Fragment";case U:return"Portal";case N:return"Profiler";case E:return"StrictMode";case ue:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case Z:return(n._context.displayName||"Context")+".Provider";case Y:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case H:return i=n.displayName||null,i!==null?i:j(n.type)||"Memo";case ne:i=n._payload,n=n._init;try{return j(n(i))}catch{}}return null}function ae(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return j(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function G(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function de(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Te(n){var i=de(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(T){u=""+T,v.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function pe(n){n._valueTracker||(n._valueTracker=Te(n))}function Fe(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=de(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Se(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ve(n,i){var a=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function tt(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=G(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function nt(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function it(n,i){nt(n,i);var a=G(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?yt(n,i.type,a):i.hasOwnProperty("defaultValue")&&yt(n,i.type,G(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ct(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function yt(n,i,a){(i!=="number"||Se(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var D=Array.isArray;function _t(n,i,a,u){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&u&&(n[a].defaultSelected=!0)}else{for(a=""+G(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function ot(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function gt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(D(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:G(a)}}function Ee(n,i){var a=G(i.value),u=G(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function lt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function b(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function A(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?b(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ie,_e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ie=ie||document.createElement("div"),ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ye(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Re).forEach(function(n){Pe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Re[i]=Re[n]})});function me(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Re.hasOwnProperty(n)&&Re[n]?(""+i).trim():i+"px"}function ve(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,h=me(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,h):n[a]=h}}var ze=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xe(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ue=null;function ut(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ft=null,Mt=null,K=null;function De(n){if(n=ko(n)){if(typeof ft!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Oa(i),ft(n.stateNode,n.type,i))}}function he(n){Mt?K?K.push(n):K=[n]:Mt=n}function We(){if(Mt){var n=Mt,i=K;if(K=Mt=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function Oe(n,i){return n(i)}function we(){}var qe=!1;function je(n,i,a){if(qe)return n(i,a);qe=!0;try{return Oe(n,i,a)}finally{qe=!1,(Mt!==null||K!==null)&&(we(),We())}}function At(n,i){var a=n.stateNode;if(a===null)return null;var u=Oa(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Lt=!1;if(f)try{var an={};Object.defineProperty(an,"passive",{get:function(){Lt=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{Lt=!1}function On(n,i,a,u,h,v,T,k,q){var ge=Array.prototype.slice.call(arguments,3);try{i.apply(a,ge)}catch(be){this.onError(be)}}var Si=!1,$i=null,Ai=!1,er=null,$n={onError:function(n){Si=!0,$i=n}};function Kr(n,i,a,u,h,v,T,k,q){Si=!1,$i=null,On.apply($n,arguments)}function Ss(n,i,a,u,h,v,T,k,q){if(Kr.apply(this,arguments),Si){if(Si){var ge=$i;Si=!1,$i=null}else throw Error(t(198));Ai||(Ai=!0,er=ge)}}function ln(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function wn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function kn(n){if(ln(n)!==n)throw Error(t(188))}function Tn(n){var i=n.alternate;if(!i){if(i=ln(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var h=a.return;if(h===null)break;var v=h.alternate;if(v===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===v.child){for(v=h.child;v;){if(v===a)return kn(h),n;if(v===u)return kn(h),i;v=v.sibling}throw Error(t(188))}if(a.return!==u.return)a=h,u=v;else{for(var T=!1,k=h.child;k;){if(k===a){T=!0,a=h,u=v;break}if(k===u){T=!0,u=h,a=v;break}k=k.sibling}if(!T){for(k=v.child;k;){if(k===a){T=!0,a=v,u=h;break}if(k===u){T=!0,u=v,a=h;break}k=k.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Bn(n){return n=Tn(n),n!==null?zn(n):null}function zn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=zn(n);if(i!==null)return i;n=n.sibling}return null}var qr=e.unstable_scheduleCallback,Yr=e.unstable_cancelCallback,ci=e.unstable_shouldYield,ui=e.unstable_requestPaint,jt=e.unstable_now,Mo=e.unstable_getCurrentPriorityLevel,nn=e.unstable_ImmediatePriority,R=e.unstable_UserBlockingPriority,ee=e.unstable_NormalPriority,le=e.unstable_LowPriority,oe=e.unstable_IdlePriority,se=null,Be=null;function Ge(n){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(se,n,void 0,(n.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:ht,Ze=Math.log,Je=Math.LN2;function ht(n){return n>>>=0,n===0?32:31-(Ze(n)/Je|0)|0}var dt=64,et=4194304;function Ct(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ot(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,h=n.suspendedLanes,v=n.pingedLanes,T=a&268435455;if(T!==0){var k=T&~h;k!==0?u=Ct(k):(v&=T,v!==0&&(u=Ct(v)))}else T=a&~h,T!==0?u=Ct(T):v!==0&&(u=Ct(v));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,v=i&-i,h>=v||h===16&&(v&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Ie(i),h=1<<a,u|=n[a],i&=~h;return u}function Wt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-Ie(v),k=1<<T,q=h[T];q===-1?((k&a)===0||(k&u)!==0)&&(h[T]=Wt(k,i)):q<=i&&(n.expiredLanes|=k),v&=~k}}function Zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ye(){var n=dt;return dt<<=1,(dt&4194240)===0&&(dt=64),n}function rn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Et(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ie(i),n[i]=a}function gn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-Ie(a),v=1<<h;i[h]=0,u[h]=-1,n[h]=-1,a&=~v}}function Sn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Ie(a),h=1<<u;h&i|n[u]&i&&(n[u]|=i),a&=~h}}var St=0;function ei(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Bt,Kt,Ei,Ht,wi,Bi=!1,Qr=[],xr=null,yr=null,Mr=null,So=new Map,Ao=new Map,Sr=[],dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rd(n,i){switch(n){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":So.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(i.pointerId)}}function Eo(n,i,a,u,h,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:v,targetContainers:[h]},i!==null&&(i=ko(i),i!==null&&Kt(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function pv(n,i,a,u,h){switch(i){case"focusin":return xr=Eo(xr,n,i,a,u,h),!0;case"dragenter":return yr=Eo(yr,n,i,a,u,h),!0;case"mouseover":return Mr=Eo(Mr,n,i,a,u,h),!0;case"pointerover":var v=h.pointerId;return So.set(v,Eo(So.get(v)||null,n,i,a,u,h)),!0;case"gotpointercapture":return v=h.pointerId,Ao.set(v,Eo(Ao.get(v)||null,n,i,a,u,h)),!0}return!1}function sd(n){var i=Zr(n.target);if(i!==null){var a=ln(i);if(a!==null){if(i=a.tag,i===13){if(i=wn(a),i!==null){n.blockedOn=i,wi(n.priority,function(){Ei(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Aa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ac(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Ue=u,a.target.dispatchEvent(u),Ue=null}else return i=ko(a),i!==null&&Kt(i),n.blockedOn=a,!1;i.shift()}return!0}function od(n,i,a){Aa(n)&&a.delete(i)}function mv(){Bi=!1,xr!==null&&Aa(xr)&&(xr=null),yr!==null&&Aa(yr)&&(yr=null),Mr!==null&&Aa(Mr)&&(Mr=null),So.forEach(od),Ao.forEach(od)}function wo(n,i){n.blockedOn===i&&(n.blockedOn=null,Bi||(Bi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,mv)))}function To(n){function i(h){return wo(h,n)}if(0<Qr.length){wo(Qr[0],n);for(var a=1;a<Qr.length;a++){var u=Qr[a];u.blockedOn===n&&(u.blockedOn=null)}}for(xr!==null&&wo(xr,n),yr!==null&&wo(yr,n),Mr!==null&&wo(Mr,n),So.forEach(i),Ao.forEach(i),a=0;a<Sr.length;a++)u=Sr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)sd(a),a.blockedOn===null&&Sr.shift()}var As=L.ReactCurrentBatchConfig,Ea=!0;function gv(n,i,a,u){var h=St,v=As.transition;As.transition=null;try{St=1,Sc(n,i,a,u)}finally{St=h,As.transition=v}}function vv(n,i,a,u){var h=St,v=As.transition;As.transition=null;try{St=4,Sc(n,i,a,u)}finally{St=h,As.transition=v}}function Sc(n,i,a,u){if(Ea){var h=Ac(n,i,a,u);if(h===null)zc(n,i,u,wa,a),rd(n,u);else if(pv(h,n,i,a,u))u.stopPropagation();else if(rd(n,u),i&4&&-1<dv.indexOf(n)){for(;h!==null;){var v=ko(h);if(v!==null&&Bt(v),v=Ac(n,i,a,u),v===null&&zc(n,i,u,wa,a),v===h)break;h=v}h!==null&&u.stopPropagation()}else zc(n,i,u,null,a)}}var wa=null;function Ac(n,i,a,u){if(wa=null,n=ut(u),n=Zr(n),n!==null)if(i=ln(n),i===null)n=null;else if(a=i.tag,a===13){if(n=wn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return wa=n,null}function ad(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mo()){case nn:return 1;case R:return 4;case ee:case le:return 16;case oe:return 536870912;default:return 16}default:return 16}}var Ar=null,Ec=null,Ta=null;function ld(){if(Ta)return Ta;var n,i=Ec,a=i.length,u,h="value"in Ar?Ar.value:Ar.textContent,v=h.length;for(n=0;n<a&&i[n]===h[n];n++);var T=a-n;for(u=1;u<=T&&i[a-u]===h[v-u];u++);return Ta=h.slice(n,1<u?1-u:void 0)}function Ca(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ra(){return!0}function cd(){return!1}function ti(n){function i(a,u,h,v,T){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(a=n[k],this[k]=a?a(v):v[k]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ra:cd,this.isPropagationStopped=cd,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),i}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wc=ti(Es),Co=te({},Es,{view:0,detail:0}),_v=ti(Co),Tc,Cc,Ro,ba=te({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ro&&(Ro&&n.type==="mousemove"?(Tc=n.screenX-Ro.screenX,Cc=n.screenY-Ro.screenY):Cc=Tc=0,Ro=n),Tc)},movementY:function(n){return"movementY"in n?n.movementY:Cc}}),ud=ti(ba),xv=te({},ba,{dataTransfer:0}),yv=ti(xv),Mv=te({},Co,{relatedTarget:0}),Rc=ti(Mv),Sv=te({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=ti(Sv),Ev=te({},Es,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),wv=ti(Ev),Tv=te({},Es,{data:0}),fd=ti(Tv),Cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=bv[n])?!!i[n]:!1}function bc(){return Pv}var Lv=te({},Co,{key:function(n){if(n.key){var i=Cv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ca(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Rv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bc,charCode:function(n){return n.type==="keypress"?Ca(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ca(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Iv=ti(Lv),Uv=te({},ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hd=ti(Uv),Dv=te({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bc}),Nv=ti(Dv),Fv=te({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ov=ti(Fv),kv=te({},ba,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=ti(kv),zv=[9,13,27,32],Pc=f&&"CompositionEvent"in window,bo=null;f&&"documentMode"in document&&(bo=document.documentMode);var Hv=f&&"TextEvent"in window&&!bo,dd=f&&(!Pc||bo&&8<bo&&11>=bo),pd=" ",md=!1;function gd(n,i){switch(n){case"keyup":return zv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ws=!1;function Vv(n,i){switch(n){case"compositionend":return vd(i);case"keypress":return i.which!==32?null:(md=!0,pd);case"textInput":return n=i.data,n===pd&&md?null:n;default:return null}}function Gv(n,i){if(ws)return n==="compositionend"||!Pc&&gd(n,i)?(n=ld(),Ta=Ec=Ar=null,ws=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return dd&&i.locale!=="ko"?null:i.data;default:return null}}var Wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _d(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Wv[n.type]:i==="textarea"}function xd(n,i,a,u){he(u),i=Da(i,"onChange"),0<i.length&&(a=new wc("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Po=null,Lo=null;function Xv(n){Od(n,0)}function Pa(n){var i=Ps(n);if(Fe(i))return n}function jv(n,i){if(n==="change")return i}var yd=!1;if(f){var Lc;if(f){var Ic="oninput"in document;if(!Ic){var Md=document.createElement("div");Md.setAttribute("oninput","return;"),Ic=typeof Md.oninput=="function"}Lc=Ic}else Lc=!1;yd=Lc&&(!document.documentMode||9<document.documentMode)}function Sd(){Po&&(Po.detachEvent("onpropertychange",Ad),Lo=Po=null)}function Ad(n){if(n.propertyName==="value"&&Pa(Lo)){var i=[];xd(i,Lo,n,ut(n)),je(Xv,i)}}function Kv(n,i,a){n==="focusin"?(Sd(),Po=i,Lo=a,Po.attachEvent("onpropertychange",Ad)):n==="focusout"&&Sd()}function qv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pa(Lo)}function Yv(n,i){if(n==="click")return Pa(i)}function Qv(n,i){if(n==="input"||n==="change")return Pa(i)}function Zv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ti=typeof Object.is=="function"?Object.is:Zv;function Io(n,i){if(Ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!p.call(i,h)||!Ti(n[h],i[h]))return!1}return!0}function Ed(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function wd(n,i){var a=Ed(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ed(a)}}function Td(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Td(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Cd(){for(var n=window,i=Se();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Se(n.document)}return i}function Uc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Jv(n){var i=Cd(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Td(a.ownerDocument.documentElement,a)){if(u!==null&&Uc(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,v=Math.min(u.start,h);u=u.end===void 0?v:Math.min(u.end,h),!n.extend&&v>u&&(h=u,u=v,v=h),h=wd(a,v);var T=wd(a,u);h&&T&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),v>u?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var $v=f&&"documentMode"in document&&11>=document.documentMode,Ts=null,Dc=null,Uo=null,Nc=!1;function Rd(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nc||Ts==null||Ts!==Se(u)||(u=Ts,"selectionStart"in u&&Uc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Uo&&Io(Uo,u)||(Uo=u,u=Da(Dc,"onSelect"),0<u.length&&(i=new wc("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Ts)))}function La(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Cs={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionend:La("Transition","TransitionEnd")},Fc={},bd={};f&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Ia(n){if(Fc[n])return Fc[n];if(!Cs[n])return n;var i=Cs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in bd)return Fc[n]=i[a];return n}var Pd=Ia("animationend"),Ld=Ia("animationiteration"),Id=Ia("animationstart"),Ud=Ia("transitionend"),Dd=new Map,Nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(n,i){Dd.set(n,i),l(i,[n])}for(var Oc=0;Oc<Nd.length;Oc++){var kc=Nd[Oc],e_=kc.toLowerCase(),t_=kc[0].toUpperCase()+kc.slice(1);Er(e_,"on"+t_)}Er(Pd,"onAnimationEnd"),Er(Ld,"onAnimationIteration"),Er(Id,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(Ud,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function Fd(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Ss(u,i,void 0,n),n.currentTarget=null}function Od(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],h=u.event;u=u.listeners;e:{var v=void 0;if(i)for(var T=u.length-1;0<=T;T--){var k=u[T],q=k.instance,ge=k.currentTarget;if(k=k.listener,q!==v&&h.isPropagationStopped())break e;Fd(h,k,ge),v=q}else for(T=0;T<u.length;T++){if(k=u[T],q=k.instance,ge=k.currentTarget,k=k.listener,q!==v&&h.isPropagationStopped())break e;Fd(h,k,ge),v=q}}}if(Ai)throw n=er,Ai=!1,er=null,n}function qt(n,i){var a=i[jc];a===void 0&&(a=i[jc]=new Set);var u=n+"__bubble";a.has(u)||(kd(i,n,2,!1),a.add(u))}function Bc(n,i,a){var u=0;i&&(u|=4),kd(a,n,u,i)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function No(n){if(!n[Ua]){n[Ua]=!0,r.forEach(function(a){a!=="selectionchange"&&(n_.has(a)||Bc(a,!1,n),Bc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ua]||(i[Ua]=!0,Bc("selectionchange",!1,i))}}function kd(n,i,a,u){switch(ad(i)){case 1:var h=gv;break;case 4:h=vv;break;default:h=Sc}a=h.bind(null,i,a,n),h=void 0,!Lt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function zc(n,i,a,u,h){var v=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var k=u.stateNode.containerInfo;if(k===h||k.nodeType===8&&k.parentNode===h)break;if(T===4)for(T=u.return;T!==null;){var q=T.tag;if((q===3||q===4)&&(q=T.stateNode.containerInfo,q===h||q.nodeType===8&&q.parentNode===h))return;T=T.return}for(;k!==null;){if(T=Zr(k),T===null)return;if(q=T.tag,q===5||q===6){u=v=T;continue e}k=k.parentNode}}u=u.return}je(function(){var ge=v,be=ut(a),Le=[];e:{var Ce=Dd.get(n);if(Ce!==void 0){var Qe=wc,rt=n;switch(n){case"keypress":if(Ca(a)===0)break e;case"keydown":case"keyup":Qe=Iv;break;case"focusin":rt="focus",Qe=Rc;break;case"focusout":rt="blur",Qe=Rc;break;case"beforeblur":case"afterblur":Qe=Rc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Qe=ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Qe=yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Qe=Nv;break;case Pd:case Ld:case Id:Qe=Av;break;case Ud:Qe=Ov;break;case"scroll":Qe=_v;break;case"wheel":Qe=Bv;break;case"copy":case"cut":case"paste":Qe=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Qe=hd}var st=(i&4)!==0,sn=!st&&n==="scroll",re=st?Ce!==null?Ce+"Capture":null:Ce;st=[];for(var $=ge,ce;$!==null;){ce=$;var ke=ce.stateNode;if(ce.tag===5&&ke!==null&&(ce=ke,re!==null&&(ke=At($,re),ke!=null&&st.push(Fo($,ke,ce)))),sn)break;$=$.return}0<st.length&&(Ce=new Qe(Ce,rt,null,a,be),Le.push({event:Ce,listeners:st}))}}if((i&7)===0){e:{if(Ce=n==="mouseover"||n==="pointerover",Qe=n==="mouseout"||n==="pointerout",Ce&&a!==Ue&&(rt=a.relatedTarget||a.fromElement)&&(Zr(rt)||rt[tr]))break e;if((Qe||Ce)&&(Ce=be.window===be?be:(Ce=be.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,Qe?(rt=a.relatedTarget||a.toElement,Qe=ge,rt=rt?Zr(rt):null,rt!==null&&(sn=ln(rt),rt!==sn||rt.tag!==5&&rt.tag!==6)&&(rt=null)):(Qe=null,rt=ge),Qe!==rt)){if(st=ud,ke="onMouseLeave",re="onMouseEnter",$="mouse",(n==="pointerout"||n==="pointerover")&&(st=hd,ke="onPointerLeave",re="onPointerEnter",$="pointer"),sn=Qe==null?Ce:Ps(Qe),ce=rt==null?Ce:Ps(rt),Ce=new st(ke,$+"leave",Qe,a,be),Ce.target=sn,Ce.relatedTarget=ce,ke=null,Zr(be)===ge&&(st=new st(re,$+"enter",rt,a,be),st.target=ce,st.relatedTarget=sn,ke=st),sn=ke,Qe&&rt)t:{for(st=Qe,re=rt,$=0,ce=st;ce;ce=Rs(ce))$++;for(ce=0,ke=re;ke;ke=Rs(ke))ce++;for(;0<$-ce;)st=Rs(st),$--;for(;0<ce-$;)re=Rs(re),ce--;for(;$--;){if(st===re||re!==null&&st===re.alternate)break t;st=Rs(st),re=Rs(re)}st=null}else st=null;Qe!==null&&Bd(Le,Ce,Qe,st,!1),rt!==null&&sn!==null&&Bd(Le,sn,rt,st,!0)}}e:{if(Ce=ge?Ps(ge):window,Qe=Ce.nodeName&&Ce.nodeName.toLowerCase(),Qe==="select"||Qe==="input"&&Ce.type==="file")var at=jv;else if(_d(Ce))if(yd)at=Qv;else{at=qv;var pt=Kv}else(Qe=Ce.nodeName)&&Qe.toLowerCase()==="input"&&(Ce.type==="checkbox"||Ce.type==="radio")&&(at=Yv);if(at&&(at=at(n,ge))){xd(Le,at,a,be);break e}pt&&pt(n,Ce,ge),n==="focusout"&&(pt=Ce._wrapperState)&&pt.controlled&&Ce.type==="number"&&yt(Ce,"number",Ce.value)}switch(pt=ge?Ps(ge):window,n){case"focusin":(_d(pt)||pt.contentEditable==="true")&&(Ts=pt,Dc=ge,Uo=null);break;case"focusout":Uo=Dc=Ts=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,Rd(Le,a,be);break;case"selectionchange":if($v)break;case"keydown":case"keyup":Rd(Le,a,be)}var mt;if(Pc)e:{switch(n){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else ws?gd(n,a)&&(xt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(dd&&a.locale!=="ko"&&(ws||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&ws&&(mt=ld()):(Ar=be,Ec="value"in Ar?Ar.value:Ar.textContent,ws=!0)),pt=Da(ge,xt),0<pt.length&&(xt=new fd(xt,n,null,a,be),Le.push({event:xt,listeners:pt}),mt?xt.data=mt:(mt=vd(a),mt!==null&&(xt.data=mt)))),(mt=Hv?Vv(n,a):Gv(n,a))&&(ge=Da(ge,"onBeforeInput"),0<ge.length&&(be=new fd("onBeforeInput","beforeinput",null,a,be),Le.push({event:be,listeners:ge}),be.data=mt))}Od(Le,i)})}function Fo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Da(n,i){for(var a=i+"Capture",u=[];n!==null;){var h=n,v=h.stateNode;h.tag===5&&v!==null&&(h=v,v=At(n,a),v!=null&&u.unshift(Fo(n,v,h)),v=At(n,i),v!=null&&u.push(Fo(n,v,h))),n=n.return}return u}function Rs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Bd(n,i,a,u,h){for(var v=i._reactName,T=[];a!==null&&a!==u;){var k=a,q=k.alternate,ge=k.stateNode;if(q!==null&&q===u)break;k.tag===5&&ge!==null&&(k=ge,h?(q=At(a,v),q!=null&&T.unshift(Fo(a,q,k))):h||(q=At(a,v),q!=null&&T.push(Fo(a,q,k)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var i_=/\r\n?/g,r_=/\u0000|\uFFFD/g;function zd(n){return(typeof n=="string"?n:""+n).replace(i_,`
`).replace(r_,"")}function Na(n,i,a){if(i=zd(i),zd(n)!==i&&a)throw Error(t(425))}function Fa(){}var Hc=null,Vc=null;function Gc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,s_=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,o_=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(n){return Hd.resolve(null).then(n).catch(a_)}:Wc;function a_(n){setTimeout(function(){throw n})}function Xc(n,i){var a=i,u=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(u===0){n.removeChild(h),To(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=h}while(a);To(i)}function wr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Vd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var bs=Math.random().toString(36).slice(2),zi="__reactFiber$"+bs,Oo="__reactProps$"+bs,tr="__reactContainer$"+bs,jc="__reactEvents$"+bs,l_="__reactListeners$"+bs,c_="__reactHandles$"+bs;function Zr(n){var i=n[zi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[tr]||a[zi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Vd(n);n!==null;){if(a=n[zi])return a;n=Vd(n)}return i}n=a,a=n.parentNode}return null}function ko(n){return n=n[zi]||n[tr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Oa(n){return n[Oo]||null}var Kc=[],Ls=-1;function Tr(n){return{current:n}}function Yt(n){0>Ls||(n.current=Kc[Ls],Kc[Ls]=null,Ls--)}function Xt(n,i){Ls++,Kc[Ls]=n.current,n.current=i}var Cr={},Cn=Tr(Cr),jn=Tr(!1),Jr=Cr;function Is(n,i){var a=n.type.contextTypes;if(!a)return Cr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},v;for(v in a)h[v]=i[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Kn(n){return n=n.childContextTypes,n!=null}function ka(){Yt(jn),Yt(Cn)}function Gd(n,i,a){if(Cn.current!==Cr)throw Error(t(168));Xt(Cn,i),Xt(jn,a)}function Wd(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(t(108,ae(n)||"Unknown",h));return te({},a,u)}function Ba(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Cr,Jr=Cn.current,Xt(Cn,n),Xt(jn,jn.current),!0}function Xd(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Wd(n,i,Jr),u.__reactInternalMemoizedMergedChildContext=n,Yt(jn),Yt(Cn),Xt(Cn,n)):Yt(jn),Xt(jn,a)}var nr=null,za=!1,qc=!1;function jd(n){nr===null?nr=[n]:nr.push(n)}function u_(n){za=!0,jd(n)}function Rr(){if(!qc&&nr!==null){qc=!0;var n=0,i=St;try{var a=nr;for(St=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}nr=null,za=!1}catch(h){throw nr!==null&&(nr=nr.slice(n+1)),qr(nn,Rr),h}finally{St=i,qc=!1}}return null}var Us=[],Ds=0,Ha=null,Va=0,fi=[],hi=0,$r=null,ir=1,rr="";function es(n,i){Us[Ds++]=Va,Us[Ds++]=Ha,Ha=n,Va=i}function Kd(n,i,a){fi[hi++]=ir,fi[hi++]=rr,fi[hi++]=$r,$r=n;var u=ir;n=rr;var h=32-Ie(u)-1;u&=~(1<<h),a+=1;var v=32-Ie(i)+h;if(30<v){var T=h-h%5;v=(u&(1<<T)-1).toString(32),u>>=T,h-=T,ir=1<<32-Ie(i)+h|a<<h|u,rr=v+n}else ir=1<<v|a<<h|u,rr=n}function Yc(n){n.return!==null&&(es(n,1),Kd(n,1,0))}function Qc(n){for(;n===Ha;)Ha=Us[--Ds],Us[Ds]=null,Va=Us[--Ds],Us[Ds]=null;for(;n===$r;)$r=fi[--hi],fi[hi]=null,rr=fi[--hi],fi[hi]=null,ir=fi[--hi],fi[hi]=null}var ni=null,ii=null,Qt=!1,Ci=null;function qd(n,i){var a=gi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Yd(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ni=n,ii=wr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ni=n,ii=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=$r!==null?{id:ir,overflow:rr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=gi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ni=n,ii=null,!0):!1;default:return!1}}function Zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Jc(n){if(Qt){var i=ii;if(i){var a=i;if(!Yd(n,i)){if(Zc(n))throw Error(t(418));i=wr(a.nextSibling);var u=ni;i&&Yd(n,i)?qd(u,a):(n.flags=n.flags&-4097|2,Qt=!1,ni=n)}}else{if(Zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qt=!1,ni=n}}}function Qd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ni=n}function Ga(n){if(n!==ni)return!1;if(!Qt)return Qd(n),Qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Gc(n.type,n.memoizedProps)),i&&(i=ii)){if(Zc(n))throw Zd(),Error(t(418));for(;i;)qd(n,i),i=wr(i.nextSibling)}if(Qd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ii=wr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ii=null}}else ii=ni?wr(n.stateNode.nextSibling):null;return!0}function Zd(){for(var n=ii;n;)n=wr(n.nextSibling)}function Ns(){ii=ni=null,Qt=!1}function $c(n){Ci===null?Ci=[n]:Ci.push(n)}var f_=L.ReactCurrentBatchConfig;function Bo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var h=u,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(T){var k=h.refs;T===null?delete k[v]:k[v]=T},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Wa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Jd(n){var i=n._init;return i(n._payload)}function $d(n){function i(re,$){if(n){var ce=re.deletions;ce===null?(re.deletions=[$],re.flags|=16):ce.push($)}}function a(re,$){if(!n)return null;for(;$!==null;)i(re,$),$=$.sibling;return null}function u(re,$){for(re=new Map;$!==null;)$.key!==null?re.set($.key,$):re.set($.index,$),$=$.sibling;return re}function h(re,$){return re=Fr(re,$),re.index=0,re.sibling=null,re}function v(re,$,ce){return re.index=ce,n?(ce=re.alternate,ce!==null?(ce=ce.index,ce<$?(re.flags|=2,$):ce):(re.flags|=2,$)):(re.flags|=1048576,$)}function T(re){return n&&re.alternate===null&&(re.flags|=2),re}function k(re,$,ce,ke){return $===null||$.tag!==6?($=Wu(ce,re.mode,ke),$.return=re,$):($=h($,ce),$.return=re,$)}function q(re,$,ce,ke){var at=ce.type;return at===z?be(re,$,ce.props.children,ke,ce.key):$!==null&&($.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===ne&&Jd(at)===$.type)?(ke=h($,ce.props),ke.ref=Bo(re,$,ce),ke.return=re,ke):(ke=pl(ce.type,ce.key,ce.props,null,re.mode,ke),ke.ref=Bo(re,$,ce),ke.return=re,ke)}function ge(re,$,ce,ke){return $===null||$.tag!==4||$.stateNode.containerInfo!==ce.containerInfo||$.stateNode.implementation!==ce.implementation?($=Xu(ce,re.mode,ke),$.return=re,$):($=h($,ce.children||[]),$.return=re,$)}function be(re,$,ce,ke,at){return $===null||$.tag!==7?($=ls(ce,re.mode,ke,at),$.return=re,$):($=h($,ce),$.return=re,$)}function Le(re,$,ce){if(typeof $=="string"&&$!==""||typeof $=="number")return $=Wu(""+$,re.mode,ce),$.return=re,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case X:return ce=pl($.type,$.key,$.props,null,re.mode,ce),ce.ref=Bo(re,null,$),ce.return=re,ce;case U:return $=Xu($,re.mode,ce),$.return=re,$;case ne:var ke=$._init;return Le(re,ke($._payload),ce)}if(D($)||F($))return $=ls($,re.mode,ce,null),$.return=re,$;Wa(re,$)}return null}function Ce(re,$,ce,ke){var at=$!==null?$.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return at!==null?null:k(re,$,""+ce,ke);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case X:return ce.key===at?q(re,$,ce,ke):null;case U:return ce.key===at?ge(re,$,ce,ke):null;case ne:return at=ce._init,Ce(re,$,at(ce._payload),ke)}if(D(ce)||F(ce))return at!==null?null:be(re,$,ce,ke,null);Wa(re,ce)}return null}function Qe(re,$,ce,ke,at){if(typeof ke=="string"&&ke!==""||typeof ke=="number")return re=re.get(ce)||null,k($,re,""+ke,at);if(typeof ke=="object"&&ke!==null){switch(ke.$$typeof){case X:return re=re.get(ke.key===null?ce:ke.key)||null,q($,re,ke,at);case U:return re=re.get(ke.key===null?ce:ke.key)||null,ge($,re,ke,at);case ne:var pt=ke._init;return Qe(re,$,ce,pt(ke._payload),at)}if(D(ke)||F(ke))return re=re.get(ce)||null,be($,re,ke,at,null);Wa($,ke)}return null}function rt(re,$,ce,ke){for(var at=null,pt=null,mt=$,xt=$=0,xn=null;mt!==null&&xt<ce.length;xt++){mt.index>xt?(xn=mt,mt=null):xn=mt.sibling;var Nt=Ce(re,mt,ce[xt],ke);if(Nt===null){mt===null&&(mt=xn);break}n&&mt&&Nt.alternate===null&&i(re,mt),$=v(Nt,$,xt),pt===null?at=Nt:pt.sibling=Nt,pt=Nt,mt=xn}if(xt===ce.length)return a(re,mt),Qt&&es(re,xt),at;if(mt===null){for(;xt<ce.length;xt++)mt=Le(re,ce[xt],ke),mt!==null&&($=v(mt,$,xt),pt===null?at=mt:pt.sibling=mt,pt=mt);return Qt&&es(re,xt),at}for(mt=u(re,mt);xt<ce.length;xt++)xn=Qe(mt,re,xt,ce[xt],ke),xn!==null&&(n&&xn.alternate!==null&&mt.delete(xn.key===null?xt:xn.key),$=v(xn,$,xt),pt===null?at=xn:pt.sibling=xn,pt=xn);return n&&mt.forEach(function(Or){return i(re,Or)}),Qt&&es(re,xt),at}function st(re,$,ce,ke){var at=F(ce);if(typeof at!="function")throw Error(t(150));if(ce=at.call(ce),ce==null)throw Error(t(151));for(var pt=at=null,mt=$,xt=$=0,xn=null,Nt=ce.next();mt!==null&&!Nt.done;xt++,Nt=ce.next()){mt.index>xt?(xn=mt,mt=null):xn=mt.sibling;var Or=Ce(re,mt,Nt.value,ke);if(Or===null){mt===null&&(mt=xn);break}n&&mt&&Or.alternate===null&&i(re,mt),$=v(Or,$,xt),pt===null?at=Or:pt.sibling=Or,pt=Or,mt=xn}if(Nt.done)return a(re,mt),Qt&&es(re,xt),at;if(mt===null){for(;!Nt.done;xt++,Nt=ce.next())Nt=Le(re,Nt.value,ke),Nt!==null&&($=v(Nt,$,xt),pt===null?at=Nt:pt.sibling=Nt,pt=Nt);return Qt&&es(re,xt),at}for(mt=u(re,mt);!Nt.done;xt++,Nt=ce.next())Nt=Qe(mt,re,xt,Nt.value,ke),Nt!==null&&(n&&Nt.alternate!==null&&mt.delete(Nt.key===null?xt:Nt.key),$=v(Nt,$,xt),pt===null?at=Nt:pt.sibling=Nt,pt=Nt);return n&&mt.forEach(function(W_){return i(re,W_)}),Qt&&es(re,xt),at}function sn(re,$,ce,ke){if(typeof ce=="object"&&ce!==null&&ce.type===z&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case X:e:{for(var at=ce.key,pt=$;pt!==null;){if(pt.key===at){if(at=ce.type,at===z){if(pt.tag===7){a(re,pt.sibling),$=h(pt,ce.props.children),$.return=re,re=$;break e}}else if(pt.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===ne&&Jd(at)===pt.type){a(re,pt.sibling),$=h(pt,ce.props),$.ref=Bo(re,pt,ce),$.return=re,re=$;break e}a(re,pt);break}else i(re,pt);pt=pt.sibling}ce.type===z?($=ls(ce.props.children,re.mode,ke,ce.key),$.return=re,re=$):(ke=pl(ce.type,ce.key,ce.props,null,re.mode,ke),ke.ref=Bo(re,$,ce),ke.return=re,re=ke)}return T(re);case U:e:{for(pt=ce.key;$!==null;){if($.key===pt)if($.tag===4&&$.stateNode.containerInfo===ce.containerInfo&&$.stateNode.implementation===ce.implementation){a(re,$.sibling),$=h($,ce.children||[]),$.return=re,re=$;break e}else{a(re,$);break}else i(re,$);$=$.sibling}$=Xu(ce,re.mode,ke),$.return=re,re=$}return T(re);case ne:return pt=ce._init,sn(re,$,pt(ce._payload),ke)}if(D(ce))return rt(re,$,ce,ke);if(F(ce))return st(re,$,ce,ke);Wa(re,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,$!==null&&$.tag===6?(a(re,$.sibling),$=h($,ce),$.return=re,re=$):(a(re,$),$=Wu(ce,re.mode,ke),$.return=re,re=$),T(re)):a(re,$)}return sn}var Fs=$d(!0),ep=$d(!1),Xa=Tr(null),ja=null,Os=null,eu=null;function tu(){eu=Os=ja=null}function nu(n){var i=Xa.current;Yt(Xa),n._currentValue=i}function iu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function ks(n,i){ja=n,eu=Os=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(qn=!0),n.firstContext=null)}function di(n){var i=n._currentValue;if(eu!==n)if(n={context:n,memoizedValue:i,next:null},Os===null){if(ja===null)throw Error(t(308));Os=n,ja.dependencies={lanes:0,firstContext:n}}else Os=Os.next=n;return i}var ts=null;function ru(n){ts===null?ts=[n]:ts.push(n)}function tp(n,i,a,u){var h=i.interleaved;return h===null?(a.next=a,ru(i)):(a.next=h.next,h.next=a),i.interleaved=a,sr(n,u)}function sr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var br=!1;function su(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function np(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function or(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Pr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(It&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,sr(n,a)}return h=u.interleaved,h===null?(i.next=i,ru(u)):(i.next=h.next,h.next=i),u.interleaved=i,sr(n,a)}function Ka(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Sn(n,a)}}function ip(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?h=v=T:v=v.next=T,a=a.next}while(a!==null);v===null?h=v=i:v=v.next=i}else h=v=i;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function qa(n,i,a,u){var h=n.updateQueue;br=!1;var v=h.firstBaseUpdate,T=h.lastBaseUpdate,k=h.shared.pending;if(k!==null){h.shared.pending=null;var q=k,ge=q.next;q.next=null,T===null?v=ge:T.next=ge,T=q;var be=n.alternate;be!==null&&(be=be.updateQueue,k=be.lastBaseUpdate,k!==T&&(k===null?be.firstBaseUpdate=ge:k.next=ge,be.lastBaseUpdate=q))}if(v!==null){var Le=h.baseState;T=0,be=ge=q=null,k=v;do{var Ce=k.lane,Qe=k.eventTime;if((u&Ce)===Ce){be!==null&&(be=be.next={eventTime:Qe,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var rt=n,st=k;switch(Ce=i,Qe=a,st.tag){case 1:if(rt=st.payload,typeof rt=="function"){Le=rt.call(Qe,Le,Ce);break e}Le=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=st.payload,Ce=typeof rt=="function"?rt.call(Qe,Le,Ce):rt,Ce==null)break e;Le=te({},Le,Ce);break e;case 2:br=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,Ce=h.effects,Ce===null?h.effects=[k]:Ce.push(k))}else Qe={eventTime:Qe,lane:Ce,tag:k.tag,payload:k.payload,callback:k.callback,next:null},be===null?(ge=be=Qe,q=Le):be=be.next=Qe,T|=Ce;if(k=k.next,k===null){if(k=h.shared.pending,k===null)break;Ce=k,k=Ce.next,Ce.next=null,h.lastBaseUpdate=Ce,h.shared.pending=null}}while(!0);if(be===null&&(q=Le),h.baseState=q,h.firstBaseUpdate=ge,h.lastBaseUpdate=be,i=h.shared.interleaved,i!==null){h=i;do T|=h.lane,h=h.next;while(h!==i)}else v===null&&(h.shared.lanes=0);rs|=T,n.lanes=T,n.memoizedState=Le}}function rp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],h=u.callback;if(h!==null){if(u.callback=null,u=a,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var zo={},Hi=Tr(zo),Ho=Tr(zo),Vo=Tr(zo);function ns(n){if(n===zo)throw Error(t(174));return n}function ou(n,i){switch(Xt(Vo,i),Xt(Ho,n),Xt(Hi,zo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:A(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=A(i,n)}Yt(Hi),Xt(Hi,i)}function Bs(){Yt(Hi),Yt(Ho),Yt(Vo)}function sp(n){ns(Vo.current);var i=ns(Hi.current),a=A(i,n.type);i!==a&&(Xt(Ho,n),Xt(Hi,a))}function au(n){Ho.current===n&&(Yt(Hi),Yt(Ho))}var Jt=Tr(0);function Ya(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var lu=[];function cu(){for(var n=0;n<lu.length;n++)lu[n]._workInProgressVersionPrimary=null;lu.length=0}var Qa=L.ReactCurrentDispatcher,uu=L.ReactCurrentBatchConfig,is=0,$t=null,fn=null,vn=null,Za=!1,Go=!1,Wo=0,h_=0;function Rn(){throw Error(t(321))}function fu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ti(n[a],i[a]))return!1;return!0}function hu(n,i,a,u,h,v){if(is=v,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Qa.current=n===null||n.memoizedState===null?g_:v_,n=a(u,h),Go){v=0;do{if(Go=!1,Wo=0,25<=v)throw Error(t(301));v+=1,vn=fn=null,i.updateQueue=null,Qa.current=__,n=a(u,h)}while(Go)}if(Qa.current=el,i=fn!==null&&fn.next!==null,is=0,vn=fn=$t=null,Za=!1,i)throw Error(t(300));return n}function du(){var n=Wo!==0;return Wo=0,n}function Vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?$t.memoizedState=vn=n:vn=vn.next=n,vn}function pi(){if(fn===null){var n=$t.alternate;n=n!==null?n.memoizedState:null}else n=fn.next;var i=vn===null?$t.memoizedState:vn.next;if(i!==null)vn=i,fn=n;else{if(n===null)throw Error(t(310));fn=n,n={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},vn===null?$t.memoizedState=vn=n:vn=vn.next=n}return vn}function Xo(n,i){return typeof i=="function"?i(n):i}function pu(n){var i=pi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=fn,h=u.baseQueue,v=a.pending;if(v!==null){if(h!==null){var T=h.next;h.next=v.next,v.next=T}u.baseQueue=h=v,a.pending=null}if(h!==null){v=h.next,u=u.baseState;var k=T=null,q=null,ge=v;do{var be=ge.lane;if((is&be)===be)q!==null&&(q=q.next={lane:0,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null}),u=ge.hasEagerState?ge.eagerState:n(u,ge.action);else{var Le={lane:be,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null};q===null?(k=q=Le,T=u):q=q.next=Le,$t.lanes|=be,rs|=be}ge=ge.next}while(ge!==null&&ge!==v);q===null?T=u:q.next=k,Ti(u,i.memoizedState)||(qn=!0),i.memoizedState=u,i.baseState=T,i.baseQueue=q,a.lastRenderedState=u}if(n=a.interleaved,n!==null){h=n;do v=h.lane,$t.lanes|=v,rs|=v,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function mu(n){var i=pi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,h=a.pending,v=i.memoizedState;if(h!==null){a.pending=null;var T=h=h.next;do v=n(v,T.action),T=T.next;while(T!==h);Ti(v,i.memoizedState)||(qn=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,u]}function op(){}function ap(n,i){var a=$t,u=pi(),h=i(),v=!Ti(u.memoizedState,h);if(v&&(u.memoizedState=h,qn=!0),u=u.queue,gu(up.bind(null,a,u,n),[n]),u.getSnapshot!==i||v||vn!==null&&vn.memoizedState.tag&1){if(a.flags|=2048,jo(9,cp.bind(null,a,u,h,i),void 0,null),_n===null)throw Error(t(349));(is&30)!==0||lp(a,i,h)}return h}function lp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function cp(n,i,a,u){i.value=a,i.getSnapshot=u,fp(i)&&hp(n)}function up(n,i,a){return a(function(){fp(i)&&hp(n)})}function fp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ti(n,a)}catch{return!0}}function hp(n){var i=sr(n,1);i!==null&&Li(i,n,1,-1)}function dp(n){var i=Vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:n},i.queue=n,n=n.dispatch=m_.bind(null,$t,n),[i.memoizedState,n]}function jo(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function pp(){return pi().memoizedState}function Ja(n,i,a,u){var h=Vi();$t.flags|=n,h.memoizedState=jo(1|i,a,void 0,u===void 0?null:u)}function $a(n,i,a,u){var h=pi();u=u===void 0?null:u;var v=void 0;if(fn!==null){var T=fn.memoizedState;if(v=T.destroy,u!==null&&fu(u,T.deps)){h.memoizedState=jo(i,a,v,u);return}}$t.flags|=n,h.memoizedState=jo(1|i,a,v,u)}function mp(n,i){return Ja(8390656,8,n,i)}function gu(n,i){return $a(2048,8,n,i)}function gp(n,i){return $a(4,2,n,i)}function vp(n,i){return $a(4,4,n,i)}function _p(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function xp(n,i,a){return a=a!=null?a.concat([n]):null,$a(4,4,_p.bind(null,i,n),a)}function vu(){}function yp(n,i){var a=pi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&fu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Mp(n,i){var a=pi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&fu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Sp(n,i,a){return(is&21)===0?(n.baseState&&(n.baseState=!1,qn=!0),n.memoizedState=a):(Ti(a,i)||(a=Ye(),$t.lanes|=a,rs|=a,n.baseState=!0),i)}function d_(n,i){var a=St;St=a!==0&&4>a?a:4,n(!0);var u=uu.transition;uu.transition={};try{n(!1),i()}finally{St=a,uu.transition=u}}function Ap(){return pi().memoizedState}function p_(n,i,a){var u=Dr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Ep(n))wp(i,a);else if(a=tp(n,i,a,u),a!==null){var h=Vn();Li(a,n,u,h),Tp(a,i,u)}}function m_(n,i,a){var u=Dr(n),h={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ep(n))wp(i,h);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var T=i.lastRenderedState,k=v(T,a);if(h.hasEagerState=!0,h.eagerState=k,Ti(k,T)){var q=i.interleaved;q===null?(h.next=h,ru(i)):(h.next=q.next,q.next=h),i.interleaved=h;return}}catch{}finally{}a=tp(n,i,h,u),a!==null&&(h=Vn(),Li(a,n,u,h),Tp(a,i,u))}}function Ep(n){var i=n.alternate;return n===$t||i!==null&&i===$t}function wp(n,i){Go=Za=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Tp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Sn(n,a)}}var el={readContext:di,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},g_={readContext:di,useCallback:function(n,i){return Vi().memoizedState=[n,i===void 0?null:i],n},useContext:di,useEffect:mp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ja(4194308,4,_p.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ja(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ja(4,2,n,i)},useMemo:function(n,i){var a=Vi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Vi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=p_.bind(null,$t,n),[u.memoizedState,n]},useRef:function(n){var i=Vi();return n={current:n},i.memoizedState=n},useState:dp,useDebugValue:vu,useDeferredValue:function(n){return Vi().memoizedState=n},useTransition:function(){var n=dp(!1),i=n[0];return n=d_.bind(null,n[1]),Vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=$t,h=Vi();if(Qt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),_n===null)throw Error(t(349));(is&30)!==0||lp(u,i,a)}h.memoizedState=a;var v={value:a,getSnapshot:i};return h.queue=v,mp(up.bind(null,u,v,n),[n]),u.flags|=2048,jo(9,cp.bind(null,u,v,a,i),void 0,null),a},useId:function(){var n=Vi(),i=_n.identifierPrefix;if(Qt){var a=rr,u=ir;a=(u&~(1<<32-Ie(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Wo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=h_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},v_={readContext:di,useCallback:yp,useContext:di,useEffect:gu,useImperativeHandle:xp,useInsertionEffect:gp,useLayoutEffect:vp,useMemo:Mp,useReducer:pu,useRef:pp,useState:function(){return pu(Xo)},useDebugValue:vu,useDeferredValue:function(n){var i=pi();return Sp(i,fn.memoizedState,n)},useTransition:function(){var n=pu(Xo)[0],i=pi().memoizedState;return[n,i]},useMutableSource:op,useSyncExternalStore:ap,useId:Ap,unstable_isNewReconciler:!1},__={readContext:di,useCallback:yp,useContext:di,useEffect:gu,useImperativeHandle:xp,useInsertionEffect:gp,useLayoutEffect:vp,useMemo:Mp,useReducer:mu,useRef:pp,useState:function(){return mu(Xo)},useDebugValue:vu,useDeferredValue:function(n){var i=pi();return fn===null?i.memoizedState=n:Sp(i,fn.memoizedState,n)},useTransition:function(){var n=mu(Xo)[0],i=pi().memoizedState;return[n,i]},useMutableSource:op,useSyncExternalStore:ap,useId:Ap,unstable_isNewReconciler:!1};function Ri(n,i){if(n&&n.defaultProps){i=te({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function _u(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:te({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var tl={isMounted:function(n){return(n=n._reactInternals)?ln(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Vn(),h=Dr(n),v=or(u,h);v.payload=i,a!=null&&(v.callback=a),i=Pr(n,v,h),i!==null&&(Li(i,n,h,u),Ka(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Vn(),h=Dr(n),v=or(u,h);v.tag=1,v.payload=i,a!=null&&(v.callback=a),i=Pr(n,v,h),i!==null&&(Li(i,n,h,u),Ka(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Vn(),u=Dr(n),h=or(a,u);h.tag=2,i!=null&&(h.callback=i),i=Pr(n,h,u),i!==null&&(Li(i,n,u,a),Ka(i,n,u))}};function Cp(n,i,a,u,h,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,T):i.prototype&&i.prototype.isPureReactComponent?!Io(a,u)||!Io(h,v):!0}function Rp(n,i,a){var u=!1,h=Cr,v=i.contextType;return typeof v=="object"&&v!==null?v=di(v):(h=Kn(i)?Jr:Cn.current,u=i.contextTypes,v=(u=u!=null)?Is(n,h):Cr),i=new i(a,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=v),i}function bp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&tl.enqueueReplaceState(i,i.state,null)}function xu(n,i,a,u){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},su(n);var v=i.contextType;typeof v=="object"&&v!==null?h.context=di(v):(v=Kn(i)?Jr:Cn.current,h.context=Is(n,v)),h.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(_u(n,i,v,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&tl.enqueueReplaceState(h,h.state,null),qa(n,a,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function zs(n,i){try{var a="",u=i;do a+=xe(u),u=u.return;while(u);var h=a}catch(v){h=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:h,digest:null}}function yu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Mu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var x_=typeof WeakMap=="function"?WeakMap:Map;function Pp(n,i,a){a=or(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){ll||(ll=!0,Fu=u),Mu(n,i)},a}function Lp(n,i,a){a=or(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;a.payload=function(){return u(h)},a.callback=function(){Mu(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Mu(n,i),typeof u!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Ip(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new x_;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(a)||(h.add(a),n=U_.bind(null,n,i,a),i.then(n,n))}function Up(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Dp(n,i,a,u,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=or(-1,1),i.tag=2,Pr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var y_=L.ReactCurrentOwner,qn=!1;function Hn(n,i,a,u){i.child=n===null?ep(i,null,a,u):Fs(i,n.child,a,u)}function Np(n,i,a,u,h){a=a.render;var v=i.ref;return ks(i,h),u=hu(n,i,a,u,v,h),a=du(),n!==null&&!qn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,ar(n,i,h)):(Qt&&a&&Yc(i),i.flags|=1,Hn(n,i,u,h),i.child)}function Fp(n,i,a,u,h){if(n===null){var v=a.type;return typeof v=="function"&&!Gu(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=v,Op(n,i,v,u,h)):(n=pl(a.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&h)===0){var T=v.memoizedProps;if(a=a.compare,a=a!==null?a:Io,a(T,u)&&n.ref===i.ref)return ar(n,i,h)}return i.flags|=1,n=Fr(v,u),n.ref=i.ref,n.return=i,i.child=n}function Op(n,i,a,u,h){if(n!==null){var v=n.memoizedProps;if(Io(v,u)&&n.ref===i.ref)if(qn=!1,i.pendingProps=u=v,(n.lanes&h)!==0)(n.flags&131072)!==0&&(qn=!0);else return i.lanes=n.lanes,ar(n,i,h)}return Su(n,i,a,u,h)}function kp(n,i,a){var u=i.pendingProps,h=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(Vs,ri),ri|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Xt(Vs,ri),ri|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:a,Xt(Vs,ri),ri|=u}else v!==null?(u=v.baseLanes|a,i.memoizedState=null):u=a,Xt(Vs,ri),ri|=u;return Hn(n,i,h,a),i.child}function Bp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Su(n,i,a,u,h){var v=Kn(a)?Jr:Cn.current;return v=Is(i,v),ks(i,h),a=hu(n,i,a,u,v,h),u=du(),n!==null&&!qn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,ar(n,i,h)):(Qt&&u&&Yc(i),i.flags|=1,Hn(n,i,a,h),i.child)}function zp(n,i,a,u,h){if(Kn(a)){var v=!0;Ba(i)}else v=!1;if(ks(i,h),i.stateNode===null)il(n,i),Rp(i,a,u),xu(i,a,u,h),u=!0;else if(n===null){var T=i.stateNode,k=i.memoizedProps;T.props=k;var q=T.context,ge=a.contextType;typeof ge=="object"&&ge!==null?ge=di(ge):(ge=Kn(a)?Jr:Cn.current,ge=Is(i,ge));var be=a.getDerivedStateFromProps,Le=typeof be=="function"||typeof T.getSnapshotBeforeUpdate=="function";Le||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==u||q!==ge)&&bp(i,T,u,ge),br=!1;var Ce=i.memoizedState;T.state=Ce,qa(i,u,T,h),q=i.memoizedState,k!==u||Ce!==q||jn.current||br?(typeof be=="function"&&(_u(i,a,be,u),q=i.memoizedState),(k=br||Cp(i,a,k,u,Ce,q,ge))?(Le||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=q),T.props=u,T.state=q,T.context=ge,u=k):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{T=i.stateNode,np(n,i),k=i.memoizedProps,ge=i.type===i.elementType?k:Ri(i.type,k),T.props=ge,Le=i.pendingProps,Ce=T.context,q=a.contextType,typeof q=="object"&&q!==null?q=di(q):(q=Kn(a)?Jr:Cn.current,q=Is(i,q));var Qe=a.getDerivedStateFromProps;(be=typeof Qe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==Le||Ce!==q)&&bp(i,T,u,q),br=!1,Ce=i.memoizedState,T.state=Ce,qa(i,u,T,h);var rt=i.memoizedState;k!==Le||Ce!==rt||jn.current||br?(typeof Qe=="function"&&(_u(i,a,Qe,u),rt=i.memoizedState),(ge=br||Cp(i,a,ge,u,Ce,rt,q)||!1)?(be||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,rt,q),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,rt,q)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||k===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=rt),T.props=u,T.state=rt,T.context=q,u=ge):(typeof T.componentDidUpdate!="function"||k===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),u=!1)}return Au(n,i,a,u,v,h)}function Au(n,i,a,u,h,v){Bp(n,i);var T=(i.flags&128)!==0;if(!u&&!T)return h&&Xd(i,a,!1),ar(n,i,v);u=i.stateNode,y_.current=i;var k=T&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&T?(i.child=Fs(i,n.child,null,v),i.child=Fs(i,null,k,v)):Hn(n,i,k,v),i.memoizedState=u.state,h&&Xd(i,a,!0),i.child}function Hp(n){var i=n.stateNode;i.pendingContext?Gd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Gd(n,i.context,!1),ou(n,i.containerInfo)}function Vp(n,i,a,u,h){return Ns(),$c(h),i.flags|=256,Hn(n,i,a,u),i.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function wu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Gp(n,i,a){var u=i.pendingProps,h=Jt.current,v=!1,T=(i.flags&128)!==0,k;if((k=T)||(k=n!==null&&n.memoizedState===null?!1:(h&2)!==0),k?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Xt(Jt,h&1),n===null)return Jc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=u.children,n=u.fallback,v?(u=i.mode,v=i.child,T={mode:"hidden",children:T},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=ml(T,u,0,null),n=ls(n,u,a,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=wu(a),i.memoizedState=Eu,n):Tu(i,T));if(h=n.memoizedState,h!==null&&(k=h.dehydrated,k!==null))return M_(n,i,T,u,k,h,a);if(v){v=u.fallback,T=i.mode,h=n.child,k=h.sibling;var q={mode:"hidden",children:u.children};return(T&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=q,i.deletions=null):(u=Fr(h,q),u.subtreeFlags=h.subtreeFlags&14680064),k!==null?v=Fr(k,v):(v=ls(v,T,a,null),v.flags|=2),v.return=i,u.return=i,u.sibling=v,i.child=u,u=v,v=i.child,T=n.child.memoizedState,T=T===null?wu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~a,i.memoizedState=Eu,u}return v=n.child,n=v.sibling,u=Fr(v,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Tu(n,i){return i=ml({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function nl(n,i,a,u){return u!==null&&$c(u),Fs(i,n.child,null,a),n=Tu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function M_(n,i,a,u,h,v,T){if(a)return i.flags&256?(i.flags&=-257,u=yu(Error(t(422))),nl(n,i,T,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=u.fallback,h=i.mode,u=ml({mode:"visible",children:u.children},h,0,null),v=ls(v,h,T,null),v.flags|=2,u.return=i,v.return=i,u.sibling=v,i.child=u,(i.mode&1)!==0&&Fs(i,n.child,null,T),i.child.memoizedState=wu(T),i.memoizedState=Eu,v);if((i.mode&1)===0)return nl(n,i,T,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var k=u.dgst;return u=k,v=Error(t(419)),u=yu(v,u,void 0),nl(n,i,T,u)}if(k=(T&n.childLanes)!==0,qn||k){if(u=_n,u!==null){switch(T&-T){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|T))!==0?0:h,h!==0&&h!==v.retryLane&&(v.retryLane=h,sr(n,h),Li(u,n,h,-1))}return Vu(),u=yu(Error(t(421))),nl(n,i,T,u)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=D_.bind(null,n),h._reactRetry=i,null):(n=v.treeContext,ii=wr(h.nextSibling),ni=i,Qt=!0,Ci=null,n!==null&&(fi[hi++]=ir,fi[hi++]=rr,fi[hi++]=$r,ir=n.id,rr=n.overflow,$r=i),i=Tu(i,u.children),i.flags|=4096,i)}function Wp(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),iu(n.return,i,a)}function Cu(n,i,a,u,h){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=a,v.tailMode=h)}function Xp(n,i,a){var u=i.pendingProps,h=u.revealOrder,v=u.tail;if(Hn(n,i,u.children,a),u=Jt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Wp(n,a,i);else if(n.tag===19)Wp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Xt(Jt,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&Ya(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Cu(i,!1,h,a,v);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Ya(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Cu(i,!0,a,null,v);break;case"together":Cu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function il(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ar(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),rs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Fr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Fr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function S_(n,i,a){switch(i.tag){case 3:Hp(i),Ns();break;case 5:sp(i);break;case 1:Kn(i.type)&&Ba(i);break;case 4:ou(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;Xt(Xa,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Xt(Jt,Jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Gp(n,i,a):(Xt(Jt,Jt.current&1),n=ar(n,i,a),n!==null?n.sibling:null);Xt(Jt,Jt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Xp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Xt(Jt,Jt.current),u)break;return null;case 22:case 23:return i.lanes=0,kp(n,i,a)}return ar(n,i,a)}var jp,Ru,Kp,qp;jp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ru=function(){},Kp=function(n,i,a,u){var h=n.memoizedProps;if(h!==u){n=i.stateNode,ns(Hi.current);var v=null;switch(a){case"input":h=Ve(n,h),u=Ve(n,u),v=[];break;case"select":h=te({},h,{value:void 0}),u=te({},u,{value:void 0}),v=[];break;case"textarea":h=ot(n,h),u=ot(n,u),v=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Fa)}Xe(a,u);var T;a=null;for(ge in h)if(!u.hasOwnProperty(ge)&&h.hasOwnProperty(ge)&&h[ge]!=null)if(ge==="style"){var k=h[ge];for(T in k)k.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ge!=="dangerouslySetInnerHTML"&&ge!=="children"&&ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&ge!=="autoFocus"&&(o.hasOwnProperty(ge)?v||(v=[]):(v=v||[]).push(ge,null));for(ge in u){var q=u[ge];if(k=h!=null?h[ge]:void 0,u.hasOwnProperty(ge)&&q!==k&&(q!=null||k!=null))if(ge==="style")if(k){for(T in k)!k.hasOwnProperty(T)||q&&q.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in q)q.hasOwnProperty(T)&&k[T]!==q[T]&&(a||(a={}),a[T]=q[T])}else a||(v||(v=[]),v.push(ge,a)),a=q;else ge==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,k=k?k.__html:void 0,q!=null&&k!==q&&(v=v||[]).push(ge,q)):ge==="children"?typeof q!="string"&&typeof q!="number"||(v=v||[]).push(ge,""+q):ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&(o.hasOwnProperty(ge)?(q!=null&&ge==="onScroll"&&qt("scroll",n),v||k===q||(v=[])):(v=v||[]).push(ge,q))}a&&(v=v||[]).push("style",a);var ge=v;(i.updateQueue=ge)&&(i.flags|=4)}},qp=function(n,i,a,u){a!==u&&(i.flags|=4)};function Ko(n,i){if(!Qt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function bn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function A_(n,i,a){var u=i.pendingProps;switch(Qc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(i),null;case 1:return Kn(i.type)&&ka(),bn(i),null;case 3:return u=i.stateNode,Bs(),Yt(jn),Yt(Cn),cu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ga(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ci!==null&&(Bu(Ci),Ci=null))),Ru(n,i),bn(i),null;case 5:au(i);var h=ns(Vo.current);if(a=i.type,n!==null&&i.stateNode!=null)Kp(n,i,a,u,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return bn(i),null}if(n=ns(Hi.current),Ga(i)){u=i.stateNode,a=i.type;var v=i.memoizedProps;switch(u[zi]=i,u[Oo]=v,n=(i.mode&1)!==0,a){case"dialog":qt("cancel",u),qt("close",u);break;case"iframe":case"object":case"embed":qt("load",u);break;case"video":case"audio":for(h=0;h<Do.length;h++)qt(Do[h],u);break;case"source":qt("error",u);break;case"img":case"image":case"link":qt("error",u),qt("load",u);break;case"details":qt("toggle",u);break;case"input":tt(u,v),qt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},qt("invalid",u);break;case"textarea":gt(u,v),qt("invalid",u)}Xe(a,v),h=null;for(var T in v)if(v.hasOwnProperty(T)){var k=v[T];T==="children"?typeof k=="string"?u.textContent!==k&&(v.suppressHydrationWarning!==!0&&Na(u.textContent,k,n),h=["children",k]):typeof k=="number"&&u.textContent!==""+k&&(v.suppressHydrationWarning!==!0&&Na(u.textContent,k,n),h=["children",""+k]):o.hasOwnProperty(T)&&k!=null&&T==="onScroll"&&qt("scroll",u)}switch(a){case"input":pe(u),ct(u,v,!0);break;case"textarea":pe(u),lt(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=Fa)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{T=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=b(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(a,{is:u.is}):(n=T.createElement(a),a==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,a),n[zi]=i,n[Oo]=u,jp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ne(a,u),a){case"dialog":qt("cancel",n),qt("close",n),h=u;break;case"iframe":case"object":case"embed":qt("load",n),h=u;break;case"video":case"audio":for(h=0;h<Do.length;h++)qt(Do[h],n);h=u;break;case"source":qt("error",n),h=u;break;case"img":case"image":case"link":qt("error",n),qt("load",n),h=u;break;case"details":qt("toggle",n),h=u;break;case"input":tt(n,u),h=Ve(n,u),qt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=te({},u,{value:void 0}),qt("invalid",n);break;case"textarea":gt(n,u),h=ot(n,u),qt("invalid",n);break;default:h=u}Xe(a,h),k=h;for(v in k)if(k.hasOwnProperty(v)){var q=k[v];v==="style"?ve(n,q):v==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&_e(n,q)):v==="children"?typeof q=="string"?(a!=="textarea"||q!=="")&&ye(n,q):typeof q=="number"&&ye(n,""+q):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?q!=null&&v==="onScroll"&&qt("scroll",n):q!=null&&P(n,v,q,T))}switch(a){case"input":pe(n),ct(n,u,!1);break;case"textarea":pe(n),lt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+G(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?_t(n,!!u.multiple,v,!1):u.defaultValue!=null&&_t(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Fa)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return bn(i),null;case 6:if(n&&i.stateNode!=null)qp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=ns(Vo.current),ns(Hi.current),Ga(i)){if(u=i.stateNode,a=i.memoizedProps,u[zi]=i,(v=u.nodeValue!==a)&&(n=ni,n!==null))switch(n.tag){case 3:Na(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Na(u.nodeValue,a,(n.mode&1)!==0)}v&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[zi]=i,i.stateNode=u}return bn(i),null;case 13:if(Yt(Jt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qt&&ii!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Zd(),Ns(),i.flags|=98560,v=!1;else if(v=Ga(i),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[zi]=i}else Ns(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bn(i),v=!1}else Ci!==null&&(Bu(Ci),Ci=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Jt.current&1)!==0?hn===0&&(hn=3):Vu())),i.updateQueue!==null&&(i.flags|=4),bn(i),null);case 4:return Bs(),Ru(n,i),n===null&&No(i.stateNode.containerInfo),bn(i),null;case 10:return nu(i.type._context),bn(i),null;case 17:return Kn(i.type)&&ka(),bn(i),null;case 19:if(Yt(Jt),v=i.memoizedState,v===null)return bn(i),null;if(u=(i.flags&128)!==0,T=v.rendering,T===null)if(u)Ko(v,!1);else{if(hn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Ya(n),T!==null){for(i.flags|=128,Ko(v,!1),u=T.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)v=a,n=u,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Xt(Jt,Jt.current&1|2),i.child}n=n.sibling}v.tail!==null&&jt()>Gs&&(i.flags|=128,u=!0,Ko(v,!1),i.lanes=4194304)}else{if(!u)if(n=Ya(T),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ko(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Qt)return bn(i),null}else 2*jt()-v.renderingStartTime>Gs&&a!==1073741824&&(i.flags|=128,u=!0,Ko(v,!1),i.lanes=4194304);v.isBackwards?(T.sibling=i.child,i.child=T):(a=v.last,a!==null?a.sibling=T:i.child=T,v.last=T)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=jt(),i.sibling=null,a=Jt.current,Xt(Jt,u?a&1|2:a&1),i):(bn(i),null);case 22:case 23:return Hu(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(ri&1073741824)!==0&&(bn(i),i.subtreeFlags&6&&(i.flags|=8192)):bn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function E_(n,i){switch(Qc(i),i.tag){case 1:return Kn(i.type)&&ka(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Bs(),Yt(jn),Yt(Cn),cu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return au(i),null;case 13:if(Yt(Jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ns()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Yt(Jt),null;case 4:return Bs(),null;case 10:return nu(i.type._context),null;case 22:case 23:return Hu(),null;case 24:return null;default:return null}}var rl=!1,Pn=!1,w_=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Hs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){en(n,i,u)}else a.current=null}function bu(n,i,a){try{a()}catch(u){en(n,i,u)}}var Yp=!1;function T_(n,i){if(Hc=Ea,n=Cd(),Uc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var T=0,k=-1,q=-1,ge=0,be=0,Le=n,Ce=null;t:for(;;){for(var Qe;Le!==a||h!==0&&Le.nodeType!==3||(k=T+h),Le!==v||u!==0&&Le.nodeType!==3||(q=T+u),Le.nodeType===3&&(T+=Le.nodeValue.length),(Qe=Le.firstChild)!==null;)Ce=Le,Le=Qe;for(;;){if(Le===n)break t;if(Ce===a&&++ge===h&&(k=T),Ce===v&&++be===u&&(q=T),(Qe=Le.nextSibling)!==null)break;Le=Ce,Ce=Le.parentNode}Le=Qe}a=k===-1||q===-1?null:{start:k,end:q}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vc={focusedElem:n,selectionRange:a},Ea=!1,$e=i;$e!==null;)if(i=$e,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,$e=n;else for(;$e!==null;){i=$e;try{var rt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(rt!==null){var st=rt.memoizedProps,sn=rt.memoizedState,re=i.stateNode,$=re.getSnapshotBeforeUpdate(i.elementType===i.type?st:Ri(i.type,st),sn);re.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var ce=i.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ke){en(i,i.return,ke)}if(n=i.sibling,n!==null){n.return=i.return,$e=n;break}$e=i.return}return rt=Yp,Yp=!1,rt}function qo(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var v=h.destroy;h.destroy=void 0,v!==void 0&&bu(i,a,v)}h=h.next}while(h!==u)}}function sl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Pu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Qp(n){var i=n.alternate;i!==null&&(n.alternate=null,Qp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[zi],delete i[Oo],delete i[jc],delete i[l_],delete i[c_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Zp(n){return n.tag===5||n.tag===3||n.tag===4}function Jp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Zp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Fa));else if(u!==4&&(n=n.child,n!==null))for(Lu(n,i,a),n=n.sibling;n!==null;)Lu(n,i,a),n=n.sibling}function Iu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Iu(n,i,a),n=n.sibling;n!==null;)Iu(n,i,a),n=n.sibling}var An=null,bi=!1;function Lr(n,i,a){for(a=a.child;a!==null;)$p(n,i,a),a=a.sibling}function $p(n,i,a){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(se,a)}catch{}switch(a.tag){case 5:Pn||Hs(a,i);case 6:var u=An,h=bi;An=null,Lr(n,i,a),An=u,bi=h,An!==null&&(bi?(n=An,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):An.removeChild(a.stateNode));break;case 18:An!==null&&(bi?(n=An,a=a.stateNode,n.nodeType===8?Xc(n.parentNode,a):n.nodeType===1&&Xc(n,a),To(n)):Xc(An,a.stateNode));break;case 4:u=An,h=bi,An=a.stateNode.containerInfo,bi=!0,Lr(n,i,a),An=u,bi=h;break;case 0:case 11:case 14:case 15:if(!Pn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var v=h,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&bu(a,i,T),h=h.next}while(h!==u)}Lr(n,i,a);break;case 1:if(!Pn&&(Hs(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(k){en(a,i,k)}Lr(n,i,a);break;case 21:Lr(n,i,a);break;case 22:a.mode&1?(Pn=(u=Pn)||a.memoizedState!==null,Lr(n,i,a),Pn=u):Lr(n,i,a);break;default:Lr(n,i,a)}}function em(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new w_),i.forEach(function(u){var h=N_.bind(null,n,u);a.has(u)||(a.add(u),u.then(h,h))})}}function Pi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u];try{var v=n,T=i,k=T;e:for(;k!==null;){switch(k.tag){case 5:An=k.stateNode,bi=!1;break e;case 3:An=k.stateNode.containerInfo,bi=!0;break e;case 4:An=k.stateNode.containerInfo,bi=!0;break e}k=k.return}if(An===null)throw Error(t(160));$p(v,T,h),An=null,bi=!1;var q=h.alternate;q!==null&&(q.return=null),h.return=null}catch(ge){en(h,i,ge)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)tm(i,n),i=i.sibling}function tm(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Pi(i,n),Gi(n),u&4){try{qo(3,n,n.return),sl(3,n)}catch(st){en(n,n.return,st)}try{qo(5,n,n.return)}catch(st){en(n,n.return,st)}}break;case 1:Pi(i,n),Gi(n),u&512&&a!==null&&Hs(a,a.return);break;case 5:if(Pi(i,n),Gi(n),u&512&&a!==null&&Hs(a,a.return),n.flags&32){var h=n.stateNode;try{ye(h,"")}catch(st){en(n,n.return,st)}}if(u&4&&(h=n.stateNode,h!=null)){var v=n.memoizedProps,T=a!==null?a.memoizedProps:v,k=n.type,q=n.updateQueue;if(n.updateQueue=null,q!==null)try{k==="input"&&v.type==="radio"&&v.name!=null&&nt(h,v),Ne(k,T);var ge=Ne(k,v);for(T=0;T<q.length;T+=2){var be=q[T],Le=q[T+1];be==="style"?ve(h,Le):be==="dangerouslySetInnerHTML"?_e(h,Le):be==="children"?ye(h,Le):P(h,be,Le,ge)}switch(k){case"input":it(h,v);break;case"textarea":Ee(h,v);break;case"select":var Ce=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!v.multiple;var Qe=v.value;Qe!=null?_t(h,!!v.multiple,Qe,!1):Ce!==!!v.multiple&&(v.defaultValue!=null?_t(h,!!v.multiple,v.defaultValue,!0):_t(h,!!v.multiple,v.multiple?[]:"",!1))}h[Oo]=v}catch(st){en(n,n.return,st)}}break;case 6:if(Pi(i,n),Gi(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,v=n.memoizedProps;try{h.nodeValue=v}catch(st){en(n,n.return,st)}}break;case 3:if(Pi(i,n),Gi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{To(i.containerInfo)}catch(st){en(n,n.return,st)}break;case 4:Pi(i,n),Gi(n);break;case 13:Pi(i,n),Gi(n),h=n.child,h.flags&8192&&(v=h.memoizedState!==null,h.stateNode.isHidden=v,!v||h.alternate!==null&&h.alternate.memoizedState!==null||(Nu=jt())),u&4&&em(n);break;case 22:if(be=a!==null&&a.memoizedState!==null,n.mode&1?(Pn=(ge=Pn)||be,Pi(i,n),Pn=ge):Pi(i,n),Gi(n),u&8192){if(ge=n.memoizedState!==null,(n.stateNode.isHidden=ge)&&!be&&(n.mode&1)!==0)for($e=n,be=n.child;be!==null;){for(Le=$e=be;$e!==null;){switch(Ce=$e,Qe=Ce.child,Ce.tag){case 0:case 11:case 14:case 15:qo(4,Ce,Ce.return);break;case 1:Hs(Ce,Ce.return);var rt=Ce.stateNode;if(typeof rt.componentWillUnmount=="function"){u=Ce,a=Ce.return;try{i=u,rt.props=i.memoizedProps,rt.state=i.memoizedState,rt.componentWillUnmount()}catch(st){en(u,a,st)}}break;case 5:Hs(Ce,Ce.return);break;case 22:if(Ce.memoizedState!==null){rm(Le);continue}}Qe!==null?(Qe.return=Ce,$e=Qe):rm(Le)}be=be.sibling}e:for(be=null,Le=n;;){if(Le.tag===5){if(be===null){be=Le;try{h=Le.stateNode,ge?(v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(k=Le.stateNode,q=Le.memoizedProps.style,T=q!=null&&q.hasOwnProperty("display")?q.display:null,k.style.display=me("display",T))}catch(st){en(n,n.return,st)}}}else if(Le.tag===6){if(be===null)try{Le.stateNode.nodeValue=ge?"":Le.memoizedProps}catch(st){en(n,n.return,st)}}else if((Le.tag!==22&&Le.tag!==23||Le.memoizedState===null||Le===n)&&Le.child!==null){Le.child.return=Le,Le=Le.child;continue}if(Le===n)break e;for(;Le.sibling===null;){if(Le.return===null||Le.return===n)break e;be===Le&&(be=null),Le=Le.return}be===Le&&(be=null),Le.sibling.return=Le.return,Le=Le.sibling}}break;case 19:Pi(i,n),Gi(n),u&4&&em(n);break;case 21:break;default:Pi(i,n),Gi(n)}}function Gi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Zp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(ye(h,""),u.flags&=-33);var v=Jp(n);Iu(n,v,h);break;case 3:case 4:var T=u.stateNode.containerInfo,k=Jp(n);Lu(n,k,T);break;default:throw Error(t(161))}}catch(q){en(n,n.return,q)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function C_(n,i,a){$e=n,nm(n)}function nm(n,i,a){for(var u=(n.mode&1)!==0;$e!==null;){var h=$e,v=h.child;if(h.tag===22&&u){var T=h.memoizedState!==null||rl;if(!T){var k=h.alternate,q=k!==null&&k.memoizedState!==null||Pn;k=rl;var ge=Pn;if(rl=T,(Pn=q)&&!ge)for($e=h;$e!==null;)T=$e,q=T.child,T.tag===22&&T.memoizedState!==null?sm(h):q!==null?(q.return=T,$e=q):sm(h);for(;v!==null;)$e=v,nm(v),v=v.sibling;$e=h,rl=k,Pn=ge}im(n)}else(h.subtreeFlags&8772)!==0&&v!==null?(v.return=h,$e=v):im(n)}}function im(n){for(;$e!==null;){var i=$e;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Pn||sl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Pn)if(a===null)u.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Ri(i.type,a.memoizedProps);u.componentDidUpdate(h,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&rp(i,v,u);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}rp(i,T,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var q=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&a.focus();break;case"img":q.src&&(a.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ge=i.alternate;if(ge!==null){var be=ge.memoizedState;if(be!==null){var Le=be.dehydrated;Le!==null&&To(Le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||i.flags&512&&Pu(i)}catch(Ce){en(i,i.return,Ce)}}if(i===n){$e=null;break}if(a=i.sibling,a!==null){a.return=i.return,$e=a;break}$e=i.return}}function rm(n){for(;$e!==null;){var i=$e;if(i===n){$e=null;break}var a=i.sibling;if(a!==null){a.return=i.return,$e=a;break}$e=i.return}}function sm(n){for(;$e!==null;){var i=$e;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{sl(4,i)}catch(q){en(i,a,q)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(q){en(i,h,q)}}var v=i.return;try{Pu(i)}catch(q){en(i,v,q)}break;case 5:var T=i.return;try{Pu(i)}catch(q){en(i,T,q)}}}catch(q){en(i,i.return,q)}if(i===n){$e=null;break}var k=i.sibling;if(k!==null){k.return=i.return,$e=k;break}$e=i.return}}var R_=Math.ceil,ol=L.ReactCurrentDispatcher,Uu=L.ReactCurrentOwner,mi=L.ReactCurrentBatchConfig,It=0,_n=null,cn=null,En=0,ri=0,Vs=Tr(0),hn=0,Yo=null,rs=0,al=0,Du=0,Qo=null,Yn=null,Nu=0,Gs=1/0,lr=null,ll=!1,Fu=null,Ir=null,cl=!1,Ur=null,ul=0,Zo=0,Ou=null,fl=-1,hl=0;function Vn(){return(It&6)!==0?jt():fl!==-1?fl:fl=jt()}function Dr(n){return(n.mode&1)===0?1:(It&2)!==0&&En!==0?En&-En:f_.transition!==null?(hl===0&&(hl=Ye()),hl):(n=St,n!==0||(n=window.event,n=n===void 0?16:ad(n.type)),n)}function Li(n,i,a,u){if(50<Zo)throw Zo=0,Ou=null,Error(t(185));Et(n,a,u),((It&2)===0||n!==_n)&&(n===_n&&((It&2)===0&&(al|=a),hn===4&&Nr(n,En)),Qn(n,u),a===1&&It===0&&(i.mode&1)===0&&(Gs=jt()+500,za&&Rr()))}function Qn(n,i){var a=n.callbackNode;kt(n,i);var u=Ot(n,n===_n?En:0);if(u===0)a!==null&&Yr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Yr(a),i===1)n.tag===0?u_(am.bind(null,n)):jd(am.bind(null,n)),o_(function(){(It&6)===0&&Rr()}),a=null;else{switch(ei(u)){case 1:a=nn;break;case 4:a=R;break;case 16:a=ee;break;case 536870912:a=oe;break;default:a=ee}a=mm(a,om.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function om(n,i){if(fl=-1,hl=0,(It&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ws()&&n.callbackNode!==a)return null;var u=Ot(n,n===_n?En:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=dl(n,u);else{i=u;var h=It;It|=2;var v=cm();(_n!==n||En!==i)&&(lr=null,Gs=jt()+500,os(n,i));do try{L_();break}catch(k){lm(n,k)}while(!0);tu(),ol.current=v,It=h,cn!==null?i=0:(_n=null,En=0,i=hn)}if(i!==0){if(i===2&&(h=Zt(n),h!==0&&(u=h,i=ku(n,h))),i===1)throw a=Yo,os(n,0),Nr(n,u),Qn(n,jt()),a;if(i===6)Nr(n,u);else{if(h=n.current.alternate,(u&30)===0&&!b_(h)&&(i=dl(n,u),i===2&&(v=Zt(n),v!==0&&(u=v,i=ku(n,v))),i===1))throw a=Yo,os(n,0),Nr(n,u),Qn(n,jt()),a;switch(n.finishedWork=h,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:as(n,Yn,lr);break;case 3:if(Nr(n,u),(u&130023424)===u&&(i=Nu+500-jt(),10<i)){if(Ot(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){Vn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Wc(as.bind(null,n,Yn,lr),i);break}as(n,Yn,lr);break;case 4:if(Nr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,h=-1;0<u;){var T=31-Ie(u);v=1<<T,T=i[T],T>h&&(h=T),u&=~v}if(u=h,u=jt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*R_(u/1960))-u,10<u){n.timeoutHandle=Wc(as.bind(null,n,Yn,lr),u);break}as(n,Yn,lr);break;case 5:as(n,Yn,lr);break;default:throw Error(t(329))}}}return Qn(n,jt()),n.callbackNode===a?om.bind(null,n):null}function ku(n,i){var a=Qo;return n.current.memoizedState.isDehydrated&&(os(n,i).flags|=256),n=dl(n,i),n!==2&&(i=Yn,Yn=a,i!==null&&Bu(i)),n}function Bu(n){Yn===null?Yn=n:Yn.push.apply(Yn,n)}function b_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var h=a[u],v=h.getSnapshot;h=h.value;try{if(!Ti(v(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Nr(n,i){for(i&=~Du,i&=~al,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ie(i),u=1<<a;n[a]=-1,i&=~u}}function am(n){if((It&6)!==0)throw Error(t(327));Ws();var i=Ot(n,0);if((i&1)===0)return Qn(n,jt()),null;var a=dl(n,i);if(n.tag!==0&&a===2){var u=Zt(n);u!==0&&(i=u,a=ku(n,u))}if(a===1)throw a=Yo,os(n,0),Nr(n,i),Qn(n,jt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,as(n,Yn,lr),Qn(n,jt()),null}function zu(n,i){var a=It;It|=1;try{return n(i)}finally{It=a,It===0&&(Gs=jt()+500,za&&Rr())}}function ss(n){Ur!==null&&Ur.tag===0&&(It&6)===0&&Ws();var i=It;It|=1;var a=mi.transition,u=St;try{if(mi.transition=null,St=1,n)return n()}finally{St=u,mi.transition=a,It=i,(It&6)===0&&Rr()}}function Hu(){ri=Vs.current,Yt(Vs)}function os(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,s_(a)),cn!==null)for(a=cn.return;a!==null;){var u=a;switch(Qc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ka();break;case 3:Bs(),Yt(jn),Yt(Cn),cu();break;case 5:au(u);break;case 4:Bs();break;case 13:Yt(Jt);break;case 19:Yt(Jt);break;case 10:nu(u.type._context);break;case 22:case 23:Hu()}a=a.return}if(_n=n,cn=n=Fr(n.current,null),En=ri=i,hn=0,Yo=null,Du=al=rs=0,Yn=Qo=null,ts!==null){for(i=0;i<ts.length;i++)if(a=ts[i],u=a.interleaved,u!==null){a.interleaved=null;var h=u.next,v=a.pending;if(v!==null){var T=v.next;v.next=h,u.next=T}a.pending=u}ts=null}return n}function lm(n,i){do{var a=cn;try{if(tu(),Qa.current=el,Za){for(var u=$t.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}Za=!1}if(is=0,vn=fn=$t=null,Go=!1,Wo=0,Uu.current=null,a===null||a.return===null){hn=1,Yo=i,cn=null;break}e:{var v=n,T=a.return,k=a,q=i;if(i=En,k.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var ge=q,be=k,Le=be.tag;if((be.mode&1)===0&&(Le===0||Le===11||Le===15)){var Ce=be.alternate;Ce?(be.updateQueue=Ce.updateQueue,be.memoizedState=Ce.memoizedState,be.lanes=Ce.lanes):(be.updateQueue=null,be.memoizedState=null)}var Qe=Up(T);if(Qe!==null){Qe.flags&=-257,Dp(Qe,T,k,v,i),Qe.mode&1&&Ip(v,ge,i),i=Qe,q=ge;var rt=i.updateQueue;if(rt===null){var st=new Set;st.add(q),i.updateQueue=st}else rt.add(q);break e}else{if((i&1)===0){Ip(v,ge,i),Vu();break e}q=Error(t(426))}}else if(Qt&&k.mode&1){var sn=Up(T);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),Dp(sn,T,k,v,i),$c(zs(q,k));break e}}v=q=zs(q,k),hn!==4&&(hn=2),Qo===null?Qo=[v]:Qo.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var re=Pp(v,q,i);ip(v,re);break e;case 1:k=q;var $=v.type,ce=v.stateNode;if((v.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Ir===null||!Ir.has(ce)))){v.flags|=65536,i&=-i,v.lanes|=i;var ke=Lp(v,k,i);ip(v,ke);break e}}v=v.return}while(v!==null)}fm(a)}catch(at){i=at,cn===a&&a!==null&&(cn=a=a.return);continue}break}while(!0)}function cm(){var n=ol.current;return ol.current=el,n===null?el:n}function Vu(){(hn===0||hn===3||hn===2)&&(hn=4),_n===null||(rs&268435455)===0&&(al&268435455)===0||Nr(_n,En)}function dl(n,i){var a=It;It|=2;var u=cm();(_n!==n||En!==i)&&(lr=null,os(n,i));do try{P_();break}catch(h){lm(n,h)}while(!0);if(tu(),It=a,ol.current=u,cn!==null)throw Error(t(261));return _n=null,En=0,hn}function P_(){for(;cn!==null;)um(cn)}function L_(){for(;cn!==null&&!ci();)um(cn)}function um(n){var i=pm(n.alternate,n,ri);n.memoizedProps=n.pendingProps,i===null?fm(n):cn=i,Uu.current=null}function fm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=A_(a,i,ri),a!==null){cn=a;return}}else{if(a=E_(a,i),a!==null){a.flags&=32767,cn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{hn=6,cn=null;return}}if(i=i.sibling,i!==null){cn=i;return}cn=i=n}while(i!==null);hn===0&&(hn=5)}function as(n,i,a){var u=St,h=mi.transition;try{mi.transition=null,St=1,I_(n,i,a,u)}finally{mi.transition=h,St=u}return null}function I_(n,i,a,u){do Ws();while(Ur!==null);if((It&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(gn(n,v),n===_n&&(cn=_n=null,En=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||cl||(cl=!0,mm(ee,function(){return Ws(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=mi.transition,mi.transition=null;var T=St;St=1;var k=It;It|=4,Uu.current=null,T_(n,a),tm(a,n),Jv(Vc),Ea=!!Hc,Vc=Hc=null,n.current=a,C_(a),ui(),It=k,St=T,mi.transition=v}else n.current=a;if(cl&&(cl=!1,Ur=n,ul=h),v=n.pendingLanes,v===0&&(Ir=null),Ge(a.stateNode),Qn(n,jt()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],u(h.value,{componentStack:h.stack,digest:h.digest});if(ll)throw ll=!1,n=Fu,Fu=null,n;return(ul&1)!==0&&n.tag!==0&&Ws(),v=n.pendingLanes,(v&1)!==0?n===Ou?Zo++:(Zo=0,Ou=n):Zo=0,Rr(),null}function Ws(){if(Ur!==null){var n=ei(ul),i=mi.transition,a=St;try{if(mi.transition=null,St=16>n?16:n,Ur===null)var u=!1;else{if(n=Ur,Ur=null,ul=0,(It&6)!==0)throw Error(t(331));var h=It;for(It|=4,$e=n.current;$e!==null;){var v=$e,T=v.child;if(($e.flags&16)!==0){var k=v.deletions;if(k!==null){for(var q=0;q<k.length;q++){var ge=k[q];for($e=ge;$e!==null;){var be=$e;switch(be.tag){case 0:case 11:case 15:qo(8,be,v)}var Le=be.child;if(Le!==null)Le.return=be,$e=Le;else for(;$e!==null;){be=$e;var Ce=be.sibling,Qe=be.return;if(Qp(be),be===ge){$e=null;break}if(Ce!==null){Ce.return=Qe,$e=Ce;break}$e=Qe}}}var rt=v.alternate;if(rt!==null){var st=rt.child;if(st!==null){rt.child=null;do{var sn=st.sibling;st.sibling=null,st=sn}while(st!==null)}}$e=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,$e=T;else e:for(;$e!==null;){if(v=$e,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:qo(9,v,v.return)}var re=v.sibling;if(re!==null){re.return=v.return,$e=re;break e}$e=v.return}}var $=n.current;for($e=$;$e!==null;){T=$e;var ce=T.child;if((T.subtreeFlags&2064)!==0&&ce!==null)ce.return=T,$e=ce;else e:for(T=$;$e!==null;){if(k=$e,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:sl(9,k)}}catch(at){en(k,k.return,at)}if(k===T){$e=null;break e}var ke=k.sibling;if(ke!==null){ke.return=k.return,$e=ke;break e}$e=k.return}}if(It=h,Rr(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(se,n)}catch{}u=!0}return u}finally{St=a,mi.transition=i}}return!1}function hm(n,i,a){i=zs(a,i),i=Pp(n,i,1),n=Pr(n,i,1),i=Vn(),n!==null&&(Et(n,1,i),Qn(n,i))}function en(n,i,a){if(n.tag===3)hm(n,n,a);else for(;i!==null;){if(i.tag===3){hm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ir===null||!Ir.has(u))){n=zs(a,n),n=Lp(i,n,1),i=Pr(i,n,1),n=Vn(),i!==null&&(Et(i,1,n),Qn(i,n));break}}i=i.return}}function U_(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Vn(),n.pingedLanes|=n.suspendedLanes&a,_n===n&&(En&a)===a&&(hn===4||hn===3&&(En&130023424)===En&&500>jt()-Nu?os(n,0):Du|=a),Qn(n,i)}function dm(n,i){i===0&&((n.mode&1)===0?i=1:(i=et,et<<=1,(et&130023424)===0&&(et=4194304)));var a=Vn();n=sr(n,i),n!==null&&(Et(n,i,a),Qn(n,a))}function D_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),dm(n,a)}function N_(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),dm(n,a)}var pm;pm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||jn.current)qn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return qn=!1,S_(n,i,a);qn=(n.flags&131072)!==0}else qn=!1,Qt&&(i.flags&1048576)!==0&&Kd(i,Va,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;il(n,i),n=i.pendingProps;var h=Is(i,Cn.current);ks(i,a),h=hu(null,i,u,n,h,a);var v=du();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Kn(u)?(v=!0,Ba(i)):v=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,su(i),h.updater=tl,i.stateNode=h,h._reactInternals=i,xu(i,u,n,a),i=Au(null,i,u,!0,v,a)):(i.tag=0,Qt&&v&&Yc(i),Hn(null,i,h,a),i=i.child),i;case 16:u=i.elementType;e:{switch(il(n,i),n=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=O_(u),n=Ri(u,n),h){case 0:i=Su(null,i,u,n,a);break e;case 1:i=zp(null,i,u,n,a);break e;case 11:i=Np(null,i,u,n,a);break e;case 14:i=Fp(null,i,u,Ri(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Ri(u,h),Su(n,i,u,h,a);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Ri(u,h),zp(n,i,u,h,a);case 3:e:{if(Hp(i),n===null)throw Error(t(387));u=i.pendingProps,v=i.memoizedState,h=v.element,np(n,i),qa(i,u,null,a);var T=i.memoizedState;if(u=T.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){h=zs(Error(t(423)),i),i=Vp(n,i,u,a,h);break e}else if(u!==h){h=zs(Error(t(424)),i),i=Vp(n,i,u,a,h);break e}else for(ii=wr(i.stateNode.containerInfo.firstChild),ni=i,Qt=!0,Ci=null,a=ep(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ns(),u===h){i=ar(n,i,a);break e}Hn(n,i,u,a)}i=i.child}return i;case 5:return sp(i),n===null&&Jc(i),u=i.type,h=i.pendingProps,v=n!==null?n.memoizedProps:null,T=h.children,Gc(u,h)?T=null:v!==null&&Gc(u,v)&&(i.flags|=32),Bp(n,i),Hn(n,i,T,a),i.child;case 6:return n===null&&Jc(i),null;case 13:return Gp(n,i,a);case 4:return ou(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Fs(i,null,u,a):Hn(n,i,u,a),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Ri(u,h),Np(n,i,u,h,a);case 7:return Hn(n,i,i.pendingProps,a),i.child;case 8:return Hn(n,i,i.pendingProps.children,a),i.child;case 12:return Hn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,v=i.memoizedProps,T=h.value,Xt(Xa,u._currentValue),u._currentValue=T,v!==null)if(Ti(v.value,T)){if(v.children===h.children&&!jn.current){i=ar(n,i,a);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var k=v.dependencies;if(k!==null){T=v.child;for(var q=k.firstContext;q!==null;){if(q.context===u){if(v.tag===1){q=or(-1,a&-a),q.tag=2;var ge=v.updateQueue;if(ge!==null){ge=ge.shared;var be=ge.pending;be===null?q.next=q:(q.next=be.next,be.next=q),ge.pending=q}}v.lanes|=a,q=v.alternate,q!==null&&(q.lanes|=a),iu(v.return,a,i),k.lanes|=a;break}q=q.next}}else if(v.tag===10)T=v.type===i.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=a,k=T.alternate,k!==null&&(k.lanes|=a),iu(T,a,i),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===i){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}Hn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,ks(i,a),h=di(h),u=u(h),i.flags|=1,Hn(n,i,u,a),i.child;case 14:return u=i.type,h=Ri(u,i.pendingProps),h=Ri(u.type,h),Fp(n,i,u,h,a);case 15:return Op(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Ri(u,h),il(n,i),i.tag=1,Kn(u)?(n=!0,Ba(i)):n=!1,ks(i,a),Rp(i,u,h),xu(i,u,h,a),Au(null,i,u,!0,n,a);case 19:return Xp(n,i,a);case 22:return kp(n,i,a)}throw Error(t(156,i.tag))};function mm(n,i){return qr(n,i)}function F_(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(n,i,a,u){return new F_(n,i,a,u)}function Gu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function O_(n){if(typeof n=="function")return Gu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Y)return 11;if(n===H)return 14}return 2}function Fr(n,i){var a=n.alternate;return a===null?(a=gi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function pl(n,i,a,u,h,v){var T=2;if(u=n,typeof n=="function")Gu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case z:return ls(a.children,h,v,i);case E:T=8,h|=8;break;case N:return n=gi(12,a,i,h|2),n.elementType=N,n.lanes=v,n;case ue:return n=gi(13,a,i,h),n.elementType=ue,n.lanes=v,n;case fe:return n=gi(19,a,i,h),n.elementType=fe,n.lanes=v,n;case W:return ml(a,h,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Z:T=10;break e;case B:T=9;break e;case Y:T=11;break e;case H:T=14;break e;case ne:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=gi(T,a,i,h),i.elementType=n,i.type=u,i.lanes=v,i}function ls(n,i,a,u){return n=gi(7,n,u,i),n.lanes=a,n}function ml(n,i,a,u){return n=gi(22,n,u,i),n.elementType=W,n.lanes=a,n.stateNode={isHidden:!1},n}function Wu(n,i,a){return n=gi(6,n,null,i),n.lanes=a,n}function Xu(n,i,a){return i=gi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function k_(n,i,a,u,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rn(0),this.expirationTimes=rn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function ju(n,i,a,u,h,v,T,k,q){return n=new k_(n,i,a,k,q),i===1?(i=1,v===!0&&(i|=8)):i=0,v=gi(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},su(v),n}function B_(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function gm(n){if(!n)return Cr;n=n._reactInternals;e:{if(ln(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kn(a))return Wd(n,a,i)}return i}function vm(n,i,a,u,h,v,T,k,q){return n=ju(a,u,!0,n,h,v,T,k,q),n.context=gm(null),a=n.current,u=Vn(),h=Dr(a),v=or(u,h),v.callback=i??null,Pr(a,v,h),n.current.lanes=h,Et(n,h,u),Qn(n,u),n}function gl(n,i,a,u){var h=i.current,v=Vn(),T=Dr(h);return a=gm(a),i.context===null?i.context=a:i.pendingContext=a,i=or(v,T),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Pr(h,i,T),n!==null&&(Li(n,h,T,v),Ka(n,h,T)),T}function vl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function _m(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ku(n,i){_m(n,i),(n=n.alternate)&&_m(n,i)}function z_(){return null}var xm=typeof reportError=="function"?reportError:function(n){console.error(n)};function qu(n){this._internalRoot=n}_l.prototype.render=qu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));gl(n,i,null,null)},_l.prototype.unmount=qu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ss(function(){gl(null,n,null,null)}),i[tr]=null}};function _l(n){this._internalRoot=n}_l.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ht();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Sr.length&&i!==0&&i<Sr[a].priority;a++);Sr.splice(a,0,n),a===0&&sd(n)}};function Yu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ym(){}function H_(n,i,a,u,h){if(h){if(typeof u=="function"){var v=u;u=function(){var ge=vl(T);v.call(ge)}}var T=vm(i,u,n,0,null,!1,!1,"",ym);return n._reactRootContainer=T,n[tr]=T.current,No(n.nodeType===8?n.parentNode:n),ss(),T}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var k=u;u=function(){var ge=vl(q);k.call(ge)}}var q=ju(n,0,!1,null,null,!1,!1,"",ym);return n._reactRootContainer=q,n[tr]=q.current,No(n.nodeType===8?n.parentNode:n),ss(function(){gl(i,q,a,u)}),q}function yl(n,i,a,u,h){var v=a._reactRootContainer;if(v){var T=v;if(typeof h=="function"){var k=h;h=function(){var q=vl(T);k.call(q)}}gl(i,T,n,h)}else T=H_(a,i,n,h,u);return vl(T)}Bt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ct(i.pendingLanes);a!==0&&(Sn(i,a|1),Qn(i,jt()),(It&6)===0&&(Gs=jt()+500,Rr()))}break;case 13:ss(function(){var u=sr(n,1);if(u!==null){var h=Vn();Li(u,n,1,h)}}),Ku(n,1)}},Kt=function(n){if(n.tag===13){var i=sr(n,134217728);if(i!==null){var a=Vn();Li(i,n,134217728,a)}Ku(n,134217728)}},Ei=function(n){if(n.tag===13){var i=Dr(n),a=sr(n,i);if(a!==null){var u=Vn();Li(a,n,i,u)}Ku(n,i)}},Ht=function(){return St},wi=function(n,i){var a=St;try{return St=n,i()}finally{St=a}},ft=function(n,i,a){switch(i){case"input":if(it(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var h=Oa(u);if(!h)throw Error(t(90));Fe(u),it(u,h)}}}break;case"textarea":Ee(n,a);break;case"select":i=a.value,i!=null&&_t(n,!!a.multiple,i,!1)}},Oe=zu,we=ss;var V_={usingClientEntryPoint:!1,Events:[ko,Ps,Oa,he,We,zu]},Jo={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G_={bundleType:Jo.bundleType,version:Jo.version,rendererPackageName:Jo.rendererPackageName,rendererConfig:Jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Bn(n),n===null?null:n.stateNode},findFiberByHostInstance:Jo.findFiberByHostInstance||z_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{se=Ml.inject(G_),Be=Ml}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V_,Zn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yu(i))throw Error(t(200));return B_(n,i,null,a)},Zn.createRoot=function(n,i){if(!Yu(n))throw Error(t(299));var a=!1,u="",h=xm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=ju(n,1,!1,null,null,a,!1,u,h),n[tr]=i.current,No(n.nodeType===8?n.parentNode:n),new qu(i)},Zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Bn(i),n=n===null?null:n.stateNode,n},Zn.flushSync=function(n){return ss(n)},Zn.hydrate=function(n,i,a){if(!xl(i))throw Error(t(200));return yl(null,n,i,!0,a)},Zn.hydrateRoot=function(n,i,a){if(!Yu(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,h=!1,v="",T=xm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=vm(i,null,n,1,a??null,h,!1,v,T),n[tr]=i.current,No(n),u)for(n=0;n<u.length;n++)a=u[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new _l(i)},Zn.render=function(n,i,a){if(!xl(i))throw Error(t(200));return yl(null,n,i,!1,a)},Zn.unmountComponentAtNode=function(n){if(!xl(n))throw Error(t(40));return n._reactRootContainer?(ss(function(){yl(null,null,n,!1,function(){n._reactRootContainer=null,n[tr]=null})}),!0):!1},Zn.unstable_batchedUpdates=zu,Zn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!xl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yl(n,i,a,!1,u)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var Rm;function $_(){if(Rm)return Ju.exports;Rm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ju.exports=J_(),Ju.exports}var bm;function ex(){if(bm)return Sl;bm=1;var s=$_();return Sl.createRoot=s.createRoot,Sl.hydrateRoot=s.hydrateRoot,Sl}var tx=ex();const Pm={field:{count:1400,size:1,drift:1},look:{trail:.35,grain:.5,glow:1},form:{circle:0},hands:{reach:1,clap:1},sound:{beat:1,sparks:1,bass:1}};function nx(s,e){let t=s;for(const r of e.split(".")){if(typeof t!="object"||t===null)return;t=t[r]}return typeof t=="number"?t:void 0}function _a(s,e){const t=structuredClone(s);for(const[r,o]of Object.entries(e)){if(!Number.isFinite(o)||nx(s,r)===void 0)continue;const l=r.split("."),c=l.pop();let f=t;for(const p of l)f=f[p];f[c]=o}return t}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zh="184",ix=0,Lm=1,rx=2,Jl=1,sx=2,ua=3,jr=0,Jn=1,Fi=2,mr=0,uo=1,Im=2,Um=3,Dm=4,ox=5,ps=100,ax=101,lx=102,cx=103,ux=104,fx=200,hx=201,dx=202,px=203,qf=204,Yf=205,mx=206,gx=207,vx=208,_x=209,xx=210,yx=211,Mx=212,Sx=213,Ax=214,Qf=0,Zf=1,Jf=2,ho=3,$f=4,eh=5,th=6,nh=7,mg=0,Ex=1,wx=2,Yi=0,gg=1,vg=2,_g=3,xg=4,yg=5,Mg=6,Sg=7,Ag=300,_s=301,po=302,tf=303,nf=304,vc=306,oc=1e3,pr=1001,ih=1002,dn=1003,Tx=1004,Al=1005,Mn=1006,rf=1007,gs=1008,xi=1009,Eg=1010,wg=1011,ma=1012,Hh=1013,Ji=1014,ki=1015,vr=1016,Vh=1017,Gh=1018,ga=1020,Tg=35902,Cg=35899,Rg=1021,bg=1022,yi=1023,_r=1026,vs=1027,Pg=1028,Wh=1029,xs=1030,Xh=1031,jh=1033,$l=33776,ec=33777,tc=33778,nc=33779,rh=35840,sh=35841,oh=35842,ah=35843,lh=36196,ch=37492,uh=37496,fh=37488,hh=37489,ac=37490,dh=37491,ph=37808,mh=37809,gh=37810,vh=37811,_h=37812,xh=37813,yh=37814,Mh=37815,Sh=37816,Ah=37817,Eh=37818,wh=37819,Th=37820,Ch=37821,Rh=36492,bh=36494,Ph=36495,Lh=36283,Ih=36284,lc=36285,Uh=36286,Cx=3200,Nm=0,Rx=1,Wr="",_i="srgb",cc="srgb-linear",uc="linear",Vt="srgb",Xs=7680,Fm=519,bx=512,Px=513,Lx=514,Kh=515,Ix=516,Ux=517,qh=518,Dx=519,Om=35044,km=35048,Bm="300 es",Ki=2e3,fc=2001;function Nx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function hc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fx(){const s=hc("canvas");return s.style.display="block",s}const zm={};function Hm(...s){const e="THREE."+s.shift();console.log(e,...s)}function Lg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function vt(...s){s=Lg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ut(...s){s=Lg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Dh(...s){const e=s.join(" ");e in zm||(zm[e]=!0,vt(...s))}function Ox(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const kx={[Qf]:Zf,[Jf]:th,[$f]:nh,[ho]:eh,[Zf]:Qf,[th]:Jf,[nh]:$f,[eh]:ho};class Ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vm=1234567;const da=Math.PI/180,va=180/Math.PI;function vo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function Yh(s,e){return(s%e+e)%e}function Bx(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function zx(s,e,t){return s!==e?(t-s)/(e-s):0}function pa(s,e,t){return(1-t)*s+t*e}function Hx(s,e,t,r){return pa(s,e,1-Math.exp(-t*r))}function Vx(s,e=1){return e-Math.abs(Yh(s,e*2)-e)}function Gx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Wx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Xx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function jx(s,e){return s+Math.random()*(e-s)}function Kx(s){return s*(.5-Math.random())}function qx(s){s!==void 0&&(Vm=s);let e=Vm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yx(s){return s*da}function Qx(s){return s*va}function Zx(s){return(s&s-1)===0&&s!==0}function Jx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $x(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ey(s,e,t,r,o){const l=Math.cos,c=Math.sin,f=l(t/2),p=c(t/2),d=l((e+r)/2),m=c((e+r)/2),_=l((e-r)/2),g=c((e-r)/2),x=l((r-e)/2),S=c((r-e)/2);switch(o){case"XYX":s.set(f*m,p*_,p*g,f*d);break;case"YZY":s.set(p*g,f*m,p*_,f*d);break;case"ZXZ":s.set(p*_,p*g,f*m,f*d);break;case"XZX":s.set(f*m,p*S,p*x,f*d);break;case"YXY":s.set(p*x,f*m,p*S,f*d);break;case"ZYZ":s.set(p*S,p*x,f*m,f*d);break;default:vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function oo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const sf={DEG2RAD:da,RAD2DEG:va,generateUUID:vo,clamp:bt,euclideanModulo:Yh,mapLinear:Bx,inverseLerp:zx,lerp:pa,damp:Hx,pingpong:Vx,smoothstep:Gx,smootherstep:Wx,randInt:Xx,randFloat:jx,randFloatSpread:Kx,seededRandom:qx,degToRad:Yx,radToDeg:Qx,isPowerOfTwo:Zx,ceilPowerOfTwo:Jx,floorPowerOfTwo:$x,setQuaternionFromProperEuler:ey,normalize:Gn,denormalize:oo},$h=class $h{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$h.prototype.isVector2=!0;let Dt=$h;class Qi{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let p=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3],g=l[c+0],x=l[c+1],S=l[c+2],w=l[c+3];if(_!==w||p!==g||d!==x||m!==S){let y=p*g+d*x+m*S+_*w;y<0&&(g=-g,x=-x,S=-S,w=-w,y=-y);let M=1-f;if(y<.9995){const C=Math.acos(y),P=Math.sin(C);M=Math.sin(M*C)/P,f=Math.sin(f*C)/P,p=p*M+g*f,d=d*M+x*f,m=m*M+S*f,_=_*M+w*f}else{p=p*M+g*f,d=d*M+x*f,m=m*M+S*f,_=_*M+w*f;const C=1/Math.sqrt(p*p+d*d+m*m+_*_);p*=C,d*=C,m*=C,_*=C}}e[t]=p,e[t+1]=d,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],p=r[o+1],d=r[o+2],m=r[o+3],_=l[c],g=l[c+1],x=l[c+2],S=l[c+3];return e[t]=f*S+m*_+p*x-d*g,e[t+1]=p*S+m*g+d*_-f*x,e[t+2]=d*S+m*x+f*g-p*_,e[t+3]=m*S-f*_-p*g-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,p=Math.sin,d=f(r/2),m=f(o/2),_=f(l/2),g=p(r/2),x=p(o/2),S=p(l/2);switch(c){case"XYZ":this._x=g*m*_+d*x*S,this._y=d*x*_-g*m*S,this._z=d*m*S+g*x*_,this._w=d*m*_-g*x*S;break;case"YXZ":this._x=g*m*_+d*x*S,this._y=d*x*_-g*m*S,this._z=d*m*S-g*x*_,this._w=d*m*_+g*x*S;break;case"ZXY":this._x=g*m*_-d*x*S,this._y=d*x*_+g*m*S,this._z=d*m*S+g*x*_,this._w=d*m*_-g*x*S;break;case"ZYX":this._x=g*m*_-d*x*S,this._y=d*x*_+g*m*S,this._z=d*m*S-g*x*_,this._w=d*m*_+g*x*S;break;case"YZX":this._x=g*m*_+d*x*S,this._y=d*x*_+g*m*S,this._z=d*m*S-g*x*_,this._w=d*m*_-g*x*S;break;case"XZY":this._x=g*m*_-d*x*S,this._y=d*x*_-g*m*S,this._z=d*m*S+g*x*_,this._w=d*m*_+g*x*S;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],p=t[9],d=t[2],m=t[6],_=t[10],g=r+f+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(m-p)*x,this._y=(l-d)*x,this._z=(c-o)*x}else if(r>f&&r>_){const x=2*Math.sqrt(1+r-f-_);this._w=(m-p)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(l+d)/x}else if(f>_){const x=2*Math.sqrt(1+f-r-_);this._w=(l-d)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(p+m)/x}else{const x=2*Math.sqrt(1+_-r-f);this._w=(c-o)/x,this._x=(l+d)/x,this._y=(p+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,p=t._y,d=t._z,m=t._w;return this._x=r*m+c*f+o*d-l*p,this._y=o*m+c*p+l*f-r*d,this._z=l*m+c*d+r*p-o*f,this._w=c*m-r*f-o*p-l*d,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,c=-c,f=-f);let p=1-t;if(f<.9995){const d=Math.acos(f),m=Math.sin(d);p=Math.sin(p*d)/m,t=Math.sin(t*d)/m,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+c*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ed=class ed{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,p=e.w,d=2*(c*o-f*r),m=2*(f*t-l*o),_=2*(l*r-c*t);return this.x=t+p*d+c*_-f*m,this.y=r+p*m+f*d-l*_,this.z=o+p*_+l*m-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,p=t.z;return this.x=o*p-l*f,this.y=l*c-r*p,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return of.copy(this).projectOnVector(e),this.sub(of)}reflect(e){return this.sub(of.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ed.prototype.isVector3=!0;let J=ed;const of=new J,Gm=new Qi,td=class td{constructor(e,t,r,o,l,c,f,p,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,p,d)}set(e,t,r,o,l,c,f,p,d){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=p,m[6]=r,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],p=r[6],d=r[1],m=r[4],_=r[7],g=r[2],x=r[5],S=r[8],w=o[0],y=o[3],M=o[6],C=o[1],P=o[4],L=o[7],X=o[2],U=o[5],z=o[8];return l[0]=c*w+f*C+p*X,l[3]=c*y+f*P+p*U,l[6]=c*M+f*L+p*z,l[1]=d*w+m*C+_*X,l[4]=d*y+m*P+_*U,l[7]=d*M+m*L+_*z,l[2]=g*w+x*C+S*X,l[5]=g*y+x*P+S*U,l[8]=g*M+x*L+S*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],m=e[8];return t*c*m-t*f*d-r*l*m+r*f*p+o*l*d-o*c*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],m=e[8],_=m*c-f*d,g=f*p-m*l,x=d*l-c*p,S=t*_+r*g+o*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/S;return e[0]=_*w,e[1]=(o*d-m*r)*w,e[2]=(f*r-o*c)*w,e[3]=g*w,e[4]=(m*t-o*p)*w,e[5]=(o*l-f*t)*w,e[6]=x*w,e[7]=(r*p-d*t)*w,e[8]=(c*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const p=Math.cos(l),d=Math.sin(l);return this.set(r*p,r*d,-r*(p*c+d*f)+c+e,-o*d,o*p,-o*(-d*c+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(af.makeScale(e,t)),this}rotate(e){return this.premultiply(af.makeRotation(-e)),this}translate(e,t){return this.premultiply(af.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};td.prototype.isMatrix3=!0;let wt=td;const af=new wt,Wm=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xm=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ty(){const s={enabled:!0,workingColorSpace:cc,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Vt&&(o.r=gr(o.r),o.g=gr(o.g),o.b=gr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Vt&&(o.r=fo(o.r),o.g=fo(o.g),o.b=fo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Wr?uc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Dh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Dh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[cc]:{primaries:e,whitePoint:r,transfer:uc,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),s}const Pt=ty();function gr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let js;class ny{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{js===void 0&&(js=hc("canvas")),js.width=e.width,js.height=e.height;const o=js.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=js}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=gr(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(gr(t[r]/255)*255):t[r]=gr(t[r]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iy=0;class Qh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=vo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(lf(o[c].image)):l.push(lf(o[c]))}else l=lf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function lf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ny.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let ry=0;const cf=new J;class Dn extends Ms{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,r=pr,o=pr,l=Mn,c=gs,f=yi,p=xi,d=Dn.DEFAULT_ANISOTROPY,m=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=vo(),this.name="",this.source=new Qh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cf).x}get height(){return this.source.getSize(cf).y}get depth(){return this.source.getSize(cf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ag)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oc:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oc:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Ag;Dn.DEFAULT_ANISOTROPY=1;const nd=class nd{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,d=p[0],m=p[4],_=p[8],g=p[1],x=p[5],S=p[9],w=p[2],y=p[6],M=p[10];if(Math.abs(m-g)<.01&&Math.abs(_-w)<.01&&Math.abs(S-y)<.01){if(Math.abs(m+g)<.1&&Math.abs(_+w)<.1&&Math.abs(S+y)<.1&&Math.abs(d+x+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(d+1)/2,L=(x+1)/2,X=(M+1)/2,U=(m+g)/4,z=(_+w)/4,E=(S+y)/4;return P>L&&P>X?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=U/r,l=z/r):L>X?L<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),r=U/o,l=E/o):X<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(X),r=z/l,o=E/l),this.set(r,o,l,t),this}let C=Math.sqrt((y-S)*(y-S)+(_-w)*(_-w)+(g-m)*(g-m));return Math.abs(C)<.001&&(C=1),this.x=(y-S)/C,this.y=(_-w)/C,this.z=(g-m)/C,this.w=Math.acos((d+x+M-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nd.prototype.isVector4=!0;let on=nd;class sy extends Ms{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Dn(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Qh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends sy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Ig extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oy extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gc=class gc{constructor(e,t,r,o,l,c,f,p,d,m,_,g,x,S,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,p,d,m,_,g,x,S,w,y)}set(e,t,r,o,l,c,f,p,d,m,_,g,x,S,w,y){const M=this.elements;return M[0]=e,M[4]=t,M[8]=r,M[12]=o,M[1]=l,M[5]=c,M[9]=f,M[13]=p,M[2]=d,M[6]=m,M[10]=_,M[14]=g,M[3]=x,M[7]=S,M[11]=w,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Ks.setFromMatrixColumn(e,0).length(),l=1/Ks.setFromMatrixColumn(e,1).length(),c=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),p=Math.cos(o),d=Math.sin(o),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=c*m,x=c*_,S=f*m,w=f*_;t[0]=p*m,t[4]=-p*_,t[8]=d,t[1]=x+S*d,t[5]=g-w*d,t[9]=-f*p,t[2]=w-g*d,t[6]=S+x*d,t[10]=c*p}else if(e.order==="YXZ"){const g=p*m,x=p*_,S=d*m,w=d*_;t[0]=g+w*f,t[4]=S*f-x,t[8]=c*d,t[1]=c*_,t[5]=c*m,t[9]=-f,t[2]=x*f-S,t[6]=w+g*f,t[10]=c*p}else if(e.order==="ZXY"){const g=p*m,x=p*_,S=d*m,w=d*_;t[0]=g-w*f,t[4]=-c*_,t[8]=S+x*f,t[1]=x+S*f,t[5]=c*m,t[9]=w-g*f,t[2]=-c*d,t[6]=f,t[10]=c*p}else if(e.order==="ZYX"){const g=c*m,x=c*_,S=f*m,w=f*_;t[0]=p*m,t[4]=S*d-x,t[8]=g*d+w,t[1]=p*_,t[5]=w*d+g,t[9]=x*d-S,t[2]=-d,t[6]=f*p,t[10]=c*p}else if(e.order==="YZX"){const g=c*p,x=c*d,S=f*p,w=f*d;t[0]=p*m,t[4]=w-g*_,t[8]=S*_+x,t[1]=_,t[5]=c*m,t[9]=-f*m,t[2]=-d*m,t[6]=x*_+S,t[10]=g-w*_}else if(e.order==="XZY"){const g=c*p,x=c*d,S=f*p,w=f*d;t[0]=p*m,t[4]=-_,t[8]=d*m,t[1]=g*_+w,t[5]=c*m,t[9]=x*_-S,t[2]=S*_-x,t[6]=f*m,t[10]=w*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ay,e,ly)}lookAt(e,t,r){const o=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),kr.crossVectors(r,si),kr.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),kr.crossVectors(r,si)),kr.normalize(),El.crossVectors(si,kr),o[0]=kr.x,o[4]=El.x,o[8]=si.x,o[1]=kr.y,o[5]=El.y,o[9]=si.y,o[2]=kr.z,o[6]=El.z,o[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],p=r[8],d=r[12],m=r[1],_=r[5],g=r[9],x=r[13],S=r[2],w=r[6],y=r[10],M=r[14],C=r[3],P=r[7],L=r[11],X=r[15],U=o[0],z=o[4],E=o[8],N=o[12],Z=o[1],B=o[5],Y=o[9],ue=o[13],fe=o[2],H=o[6],ne=o[10],W=o[14],O=o[3],F=o[7],te=o[11],I=o[15];return l[0]=c*U+f*Z+p*fe+d*O,l[4]=c*z+f*B+p*H+d*F,l[8]=c*E+f*Y+p*ne+d*te,l[12]=c*N+f*ue+p*W+d*I,l[1]=m*U+_*Z+g*fe+x*O,l[5]=m*z+_*B+g*H+x*F,l[9]=m*E+_*Y+g*ne+x*te,l[13]=m*N+_*ue+g*W+x*I,l[2]=S*U+w*Z+y*fe+M*O,l[6]=S*z+w*B+y*H+M*F,l[10]=S*E+w*Y+y*ne+M*te,l[14]=S*N+w*ue+y*W+M*I,l[3]=C*U+P*Z+L*fe+X*O,l[7]=C*z+P*B+L*H+X*F,l[11]=C*E+P*Y+L*ne+X*te,l[15]=C*N+P*ue+L*W+X*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],p=e[9],d=e[13],m=e[2],_=e[6],g=e[10],x=e[14],S=e[3],w=e[7],y=e[11],M=e[15],C=p*x-d*g,P=f*x-d*_,L=f*g-p*_,X=c*x-d*m,U=c*g-p*m,z=c*_-f*m;return t*(w*C-y*P+M*L)-r*(S*C-y*X+M*U)+o*(S*P-w*X+M*z)-l*(S*L-w*U+y*z)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],m=e[8],_=e[9],g=e[10],x=e[11],S=e[12],w=e[13],y=e[14],M=e[15],C=t*f-r*c,P=t*p-o*c,L=t*d-l*c,X=r*p-o*f,U=r*d-l*f,z=o*d-l*p,E=m*w-_*S,N=m*y-g*S,Z=m*M-x*S,B=_*y-g*w,Y=_*M-x*w,ue=g*M-x*y,fe=C*ue-P*Y+L*B+X*Z-U*N+z*E;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/fe;return e[0]=(f*ue-p*Y+d*B)*H,e[1]=(o*Y-r*ue-l*B)*H,e[2]=(w*z-y*U+M*X)*H,e[3]=(g*U-_*z-x*X)*H,e[4]=(p*Z-c*ue-d*N)*H,e[5]=(t*ue-o*Z+l*N)*H,e[6]=(y*L-S*z-M*P)*H,e[7]=(m*z-g*L+x*P)*H,e[8]=(c*Y-f*Z+d*E)*H,e[9]=(r*Z-t*Y-l*E)*H,e[10]=(S*U-w*L+M*C)*H,e[11]=(_*L-m*U-x*C)*H,e[12]=(f*N-c*B-p*E)*H,e[13]=(t*B-r*N+o*E)*H,e[14]=(w*P-S*X-y*C)*H,e[15]=(m*X-_*P+g*C)*H,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,p=e.z,d=l*c,m=l*f;return this.set(d*c+r,d*f-o*p,d*p+o*f,0,d*f+o*p,m*f+r,m*p-o*c,0,d*p-o*f,m*p+o*c,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,p=t._w,d=l+l,m=c+c,_=f+f,g=l*d,x=l*m,S=l*_,w=c*m,y=c*_,M=f*_,C=p*d,P=p*m,L=p*_,X=r.x,U=r.y,z=r.z;return o[0]=(1-(w+M))*X,o[1]=(x+L)*X,o[2]=(S-P)*X,o[3]=0,o[4]=(x-L)*U,o[5]=(1-(g+M))*U,o[6]=(y+C)*U,o[7]=0,o[8]=(S+P)*z,o[9]=(y-C)*z,o[10]=(1-(g+w))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=Ks.set(o[0],o[1],o[2]).length();const f=Ks.set(o[4],o[5],o[6]).length(),p=Ks.set(o[8],o[9],o[10]).length();l<0&&(c=-c),Ii.copy(this);const d=1/c,m=1/f,_=1/p;return Ii.elements[0]*=d,Ii.elements[1]*=d,Ii.elements[2]*=d,Ii.elements[4]*=m,Ii.elements[5]*=m,Ii.elements[6]*=m,Ii.elements[8]*=_,Ii.elements[9]*=_,Ii.elements[10]*=_,t.setFromRotationMatrix(Ii),r.x=c,r.y=f,r.z=p,this}makePerspective(e,t,r,o,l,c,f=Ki,p=!1){const d=this.elements,m=2*l/(t-e),_=2*l/(r-o),g=(t+e)/(t-e),x=(r+o)/(r-o);let S,w;if(p)S=l/(c-l),w=c*l/(c-l);else if(f===Ki)S=-(c+l)/(c-l),w=-2*c*l/(c-l);else if(f===fc)S=-c/(c-l),w=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=m,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=Ki,p=!1){const d=this.elements,m=2/(t-e),_=2/(r-o),g=-(t+e)/(t-e),x=-(r+o)/(r-o);let S,w;if(p)S=1/(c-l),w=c/(c-l);else if(f===Ki)S=-2/(c-l),w=-(c+l)/(c-l);else if(f===fc)S=-1/(c-l),w=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=m,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=S,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};gc.prototype.isMatrix4=!0;let tn=gc;const Ks=new J,Ii=new tn,ay=new J(0,0,0),ly=new J(1,1,1),kr=new J,El=new J,si=new J,jm=new tn,Km=new Qi;class ys{constructor(e=0,t=0,r=0,o=ys.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],p=o[1],d=o[5],m=o[9],_=o[2],g=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(bt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Km.setFromEuler(this),this.setFromQuaternion(Km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ys.DEFAULT_ORDER="XYZ";class Ug{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cy=0;const qm=new J,qs=new Qi,cr=new tn,wl=new J,ea=new J,uy=new J,fy=new Qi,Ym=new J(1,0,0),Qm=new J(0,1,0),Zm=new J(0,0,1),Jm={type:"added"},hy={type:"removed"},Ys={type:"childadded",child:null},uf={type:"childremoved",child:null};class Xn extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new J,t=new ys,r=new Qi,o=new J(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new tn},normalMatrix:{value:new wt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ug,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Ym,e)}rotateY(e){return this.rotateOnAxis(Qm,e)}rotateZ(e){return this.rotateOnAxis(Zm,e)}translateOnAxis(e,t){return qm.copy(e).applyQuaternion(this.quaternion),this.position.add(qm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ym,e)}translateY(e){return this.translateOnAxis(Qm,e)}translateZ(e){return this.translateOnAxis(Zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?wl.copy(e):wl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(ea,wl,this.up):cr.lookAt(wl,ea,this.up),this.quaternion.setFromRotationMatrix(cr),o&&(cr.extractRotation(o.matrixWorld),qs.setFromRotationMatrix(cr),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jm),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hy),uf.child=e,this.dispatchEvent(uf),uf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jm),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,uy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,fy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,m=p.length;d<m;d++){const _=p[d];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(t){const f=c(e.geometries),p=c(e.materials),d=c(e.textures),m=c(e.images),_=c(e.shapes),g=c(e.skeletons),x=c(e.animations),S=c(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),d.length>0&&(r.textures=d),m.length>0&&(r.images=m),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),x.length>0&&(r.animations=x),S.length>0&&(r.nodes=S)}return r.object=o,r;function c(f){const p=[];for(const d in f){const m=f[d];delete m.metadata,p.push(m)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Xn.DEFAULT_UP=new J(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qi extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dy={type:"move"};class ff{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,r),M=this._getHandJoint(d,w);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const m=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],g=m.position.distanceTo(_.position),x=.02,S=.005;d.inputState.pinching&&g>x+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=x-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(dy)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new qi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function hf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class zt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Pt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Pt.workingColorSpace){if(e=Yh(e,1),t=bt(t,0,1),r=bt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=hf(c,l,e+1/3),this.g=hf(c,l,e),this.b=hf(c,l,e-1/3)}return Pt.colorSpaceToWorking(this,o),this}setStyle(e,t=_i){function r(l){l!==void 0&&parseFloat(l)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_i){const r=Dg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return Pt.workingToColorSpace(In.copy(this),e),Math.round(bt(In.r*255,0,255))*65536+Math.round(bt(In.g*255,0,255))*256+Math.round(bt(In.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(In.copy(this),t);const r=In.r,o=In.g,l=In.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let p,d;const m=(f+c)/2;if(f===c)p=0,d=0;else{const _=c-f;switch(d=m<=.5?_/(c+f):_/(2-c-f),c){case r:p=(o-l)/_+(o<l?6:0);break;case o:p=(l-r)/_+2;break;case l:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=d,e.l=m,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=_i){Pt.workingToColorSpace(In.copy(this),e);const t=In.r,r=In.g,o=In.b;return e!==_i?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(Tl);const r=pa(Br.h,Tl.h,t),o=pa(Br.s,Tl.s,t),l=pa(Br.l,Tl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new zt;zt.NAMES=Dg;class Ng extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ys,this.environmentIntensity=1,this.environmentRotation=new ys,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ui=new J,ur=new J,df=new J,fr=new J,Qs=new J,Zs=new J,$m=new J,pf=new J,mf=new J,gf=new J,vf=new on,_f=new on,xf=new on;class Oi{constructor(e=new J,t=new J,r=new J){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ui.subVectors(e,t),o.cross(Ui);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ui.subVectors(o,t),ur.subVectors(r,t),df.subVectors(e,t);const c=Ui.dot(Ui),f=Ui.dot(ur),p=Ui.dot(df),d=ur.dot(ur),m=ur.dot(df),_=c*d-f*f;if(_===0)return l.set(0,0,0),null;const g=1/_,x=(d*p-f*m)*g,S=(c*m-f*p)*g;return l.set(1-x-S,S,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,t,r,o,l,c,f,p){return this.getBarycoord(e,t,r,o,fr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,fr.x),p.addScaledVector(c,fr.y),p.addScaledVector(f,fr.z),p)}static getInterpolatedAttribute(e,t,r,o,l,c){return vf.setScalar(0),_f.setScalar(0),xf.setScalar(0),vf.fromBufferAttribute(e,t),_f.fromBufferAttribute(e,r),xf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(vf,l.x),c.addScaledVector(_f,l.y),c.addScaledVector(xf,l.z),c}static isFrontFacing(e,t,r,o){return Ui.subVectors(r,t),ur.subVectors(e,t),Ui.cross(ur).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Ui.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Oi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;Qs.subVectors(o,r),Zs.subVectors(l,r),pf.subVectors(e,r);const p=Qs.dot(pf),d=Zs.dot(pf);if(p<=0&&d<=0)return t.copy(r);mf.subVectors(e,o);const m=Qs.dot(mf),_=Zs.dot(mf);if(m>=0&&_<=m)return t.copy(o);const g=p*_-m*d;if(g<=0&&p>=0&&m<=0)return c=p/(p-m),t.copy(r).addScaledVector(Qs,c);gf.subVectors(e,l);const x=Qs.dot(gf),S=Zs.dot(gf);if(S>=0&&x<=S)return t.copy(l);const w=x*d-p*S;if(w<=0&&d>=0&&S<=0)return f=d/(d-S),t.copy(r).addScaledVector(Zs,f);const y=m*S-x*_;if(y<=0&&_-m>=0&&x-S>=0)return $m.subVectors(l,o),f=(_-m)/(_-m+(x-S)),t.copy(o).addScaledVector($m,f);const M=1/(y+w+g);return c=w*M,f=g*M,t.copy(r).addScaledVector(Qs,c).addScaledVector(Zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xa{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Di):Di.fromBufferAttribute(l,c),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Cl.copy(r.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),Rl.subVectors(this.max,ta),Js.subVectors(e.a,ta),$s.subVectors(e.b,ta),eo.subVectors(e.c,ta),zr.subVectors($s,Js),Hr.subVectors(eo,$s),cs.subVectors(Js,eo);let t=[0,-zr.z,zr.y,0,-Hr.z,Hr.y,0,-cs.z,cs.y,zr.z,0,-zr.x,Hr.z,0,-Hr.x,cs.z,0,-cs.x,-zr.y,zr.x,0,-Hr.y,Hr.x,0,-cs.y,cs.x,0];return!yf(t,Js,$s,eo,Rl)||(t=[1,0,0,0,1,0,0,0,1],!yf(t,Js,$s,eo,Rl))?!1:(bl.crossVectors(zr,Hr),t=[bl.x,bl.y,bl.z],yf(t,Js,$s,eo,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hr=[new J,new J,new J,new J,new J,new J,new J,new J],Di=new J,Cl=new xa,Js=new J,$s=new J,eo=new J,zr=new J,Hr=new J,cs=new J,ta=new J,Rl=new J,bl=new J,us=new J;function yf(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){us.fromArray(s,l);const f=o.x*Math.abs(us.x)+o.y*Math.abs(us.y)+o.z*Math.abs(us.z),p=e.dot(us),d=t.dot(us),m=r.dot(us);if(Math.max(-Math.max(p,d,m),Math.min(p,d,m))>f)return!1}return!0}const un=new J,Pl=new Dt;let py=0;class Gt extends Ms{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:py++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Om,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=oo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array),o=Gn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array),o=Gn(o,this.array),l=Gn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Om&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Fg extends Gt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Og extends Gt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class li extends Gt{constructor(e,t,r){super(new Float32Array(e),t,r)}}const my=new xa,na=new J,Mf=new J;class _o{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):my.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const t=na.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(na,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Mf)),this.expandByPoint(na.copy(e.center).sub(Mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gy=0;const vi=new tn,Sf=new Xn,to=new J,oi=new xa,ia=new xa,yn=new J;class Nn extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nx(e)?Og:Fg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new wt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,r){return vi.makeTranslation(e,t,r),this.applyMatrix4(vi),this}scale(e,t,r){return vi.makeScale(e,t,r),this.applyMatrix4(vi),this}lookAt(e){return Sf.lookAt(e),Sf.updateMatrix(),this.applyMatrix4(Sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new li(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];oi.setFromBufferAttribute(l),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];ia.setFromBufferAttribute(f),this.morphTargetsRelative?(yn.addVectors(oi.min,ia.min),oi.expandByPoint(yn),yn.addVectors(oi.max,ia.max),oi.expandByPoint(yn)):(oi.expandByPoint(ia.min),oi.expandByPoint(ia.max))}oi.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)yn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(yn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],p=this.morphTargetsRelative;for(let d=0,m=f.count;d<m;d++)yn.fromBufferAttribute(f,d),p&&(to.fromBufferAttribute(e,d),yn.add(to)),o=Math.max(o,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let E=0;E<r.count;E++)f[E]=new J,p[E]=new J;const d=new J,m=new J,_=new J,g=new Dt,x=new Dt,S=new Dt,w=new J,y=new J;function M(E,N,Z){d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,N),_.fromBufferAttribute(r,Z),g.fromBufferAttribute(l,E),x.fromBufferAttribute(l,N),S.fromBufferAttribute(l,Z),m.sub(d),_.sub(d),x.sub(g),S.sub(g);const B=1/(x.x*S.y-S.x*x.y);isFinite(B)&&(w.copy(m).multiplyScalar(S.y).addScaledVector(_,-x.y).multiplyScalar(B),y.copy(_).multiplyScalar(x.x).addScaledVector(m,-S.x).multiplyScalar(B),f[E].add(w),f[N].add(w),f[Z].add(w),p[E].add(y),p[N].add(y),p[Z].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let E=0,N=C.length;E<N;++E){const Z=C[E],B=Z.start,Y=Z.count;for(let ue=B,fe=B+Y;ue<fe;ue+=3)M(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const P=new J,L=new J,X=new J,U=new J;function z(E){X.fromBufferAttribute(o,E),U.copy(X);const N=f[E];P.copy(N),P.sub(X.multiplyScalar(X.dot(N))).normalize(),L.crossVectors(U,N);const B=L.dot(p[E])<0?-1:1;c.setXYZW(E,P.x,P.y,P.z,B)}for(let E=0,N=C.length;E<N;++E){const Z=C[E],B=Z.start,Y=Z.count;for(let ue=B,fe=B+Y;ue<fe;ue+=3)z(e.getX(ue+0)),z(e.getX(ue+1)),z(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,x=r.count;g<x;g++)r.setXYZ(g,0,0,0);const o=new J,l=new J,c=new J,f=new J,p=new J,d=new J,m=new J,_=new J;if(e)for(let g=0,x=e.count;g<x;g+=3){const S=e.getX(g+0),w=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,S),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),m.subVectors(c,l),_.subVectors(o,l),m.cross(_),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,w),d.fromBufferAttribute(r,y),f.add(m),p.add(m),d.add(m),r.setXYZ(S,f.x,f.y,f.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,x=t.count;g<x;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),m.subVectors(c,l),_.subVectors(o,l),m.cross(_),r.setXYZ(g+0,m.x,m.y,m.z),r.setXYZ(g+1,m.x,m.y,m.z),r.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(f,p){const d=f.array,m=f.itemSize,_=f.normalized,g=new d.constructor(p.length*m);let x=0,S=0;for(let w=0,y=p.length;w<y;w++){f.isInterleavedBufferAttribute?x=p[w]*f.data.stride+f.offset:x=p[w]*m;for(let M=0;M<m;M++)g[S++]=d[x++]}return new Gt(g,m,_)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nn,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],d=e(p,r);t.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let m=0,_=d.length;m<_;m++){const g=d[m],x=e(g,r);p.push(x)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const d=r[p];e.data.attributes[p]=d.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],m=[];for(let _=0,g=d.length;_<g;_++){const x=d[_];m.push(x.toJSON(e.data))}m.length>0&&(o[p]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const m=o[d];this.setAttribute(d,m.clone(t))}const l=e.morphAttributes;for(const d in l){const m=[],_=l[d];for(let g=0,x=_.length;g<x;g++)m.push(_[g].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,m=c.length;d<m;d++){const _=c[d];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let vy=0;class xo extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=uo,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qf,this.blendDst=Yf,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(r.blending=this.blending),this.side!==jr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qf&&(r.blendSrc=this.blendSrc),this.blendDst!==Yf&&(r.blendDst=this.blendDst),this.blendEquation!==ps&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const dr=new J,Af=new J,Ll=new J,Vr=new J,Ef=new J,Il=new J,wf=new J;class Zh{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dr.copy(this.origin).addScaledVector(this.direction,t),dr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Af.copy(e).add(t).multiplyScalar(.5),Ll.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(Af);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Ll),f=Vr.dot(this.direction),p=-Vr.dot(Ll),d=Vr.lengthSq(),m=Math.abs(1-c*c);let _,g,x,S;if(m>0)if(_=c*p-f,g=c*f-p,S=l*m,_>=0)if(g>=-S)if(g<=S){const w=1/m;_*=w,g*=w,x=_*(_+c*g+2*f)+g*(c*_+g+2*p)+d}else g=l,_=Math.max(0,-(c*g+f)),x=-_*_+g*(g+2*p)+d;else g=-l,_=Math.max(0,-(c*g+f)),x=-_*_+g*(g+2*p)+d;else g<=-S?(_=Math.max(0,-(-c*l+f)),g=_>0?-l:Math.min(Math.max(-l,-p),l),x=-_*_+g*(g+2*p)+d):g<=S?(_=0,g=Math.min(Math.max(-l,-p),l),x=g*(g+2*p)+d):(_=Math.max(0,-(c*l+f)),g=_>0?l:Math.min(Math.max(-l,-p),l),x=-_*_+g*(g+2*p)+d);else g=c>0?-l:l,_=Math.max(0,-(c*g+f)),x=-_*_+g*(g+2*p)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Af).addScaledVector(Ll,g),x}intersectSphere(e,t){dr.subVectors(e.center,this.origin);const r=dr.dot(this.direction),o=dr.dot(dr)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,p=r+c;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,p;const d=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,g=this.origin;return d>=0?(r=(e.min.x-g.x)*d,o=(e.max.x-g.x)*d):(r=(e.max.x-g.x)*d,o=(e.min.x-g.x)*d),m>=0?(l=(e.min.y-g.y)*m,c=(e.max.y-g.y)*m):(l=(e.max.y-g.y)*m,c=(e.min.y-g.y)*m),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),_>=0?(f=(e.min.z-g.z)*_,p=(e.max.z-g.z)*_):(f=(e.max.z-g.z)*_,p=(e.min.z-g.z)*_),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,t,r,o,l){Ef.subVectors(t,e),Il.subVectors(r,e),wf.crossVectors(Ef,Il);let c=this.direction.dot(wf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Vr.subVectors(this.origin,e);const p=f*this.direction.dot(Il.crossVectors(Vr,Il));if(p<0)return null;const d=f*this.direction.dot(Ef.cross(Vr));if(d<0||p+d>c)return null;const m=-f*Vr.dot(wf);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kg extends xo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ys,this.combine=mg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const e0=new tn,fs=new Zh,Ul=new _o,t0=new J,Dl=new J,Nl=new J,Fl=new J,Tf=new J,Ol=new J,n0=new J,kl=new J;class Fn extends Xn{constructor(e=new Nn,t=new kg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Ol.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const m=f[p],_=l[p];m!==0&&(Tf.fromBufferAttribute(_,e),c?Ol.addScaledVector(Tf,m):Ol.addScaledVector(Tf.sub(t),m))}t.add(Ol)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ul.copy(r.boundingSphere),Ul.applyMatrix4(l),fs.copy(e.ray).recast(e.near),!(Ul.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Ul,t0)===null||fs.origin.distanceToSquared(t0)>(e.far-e.near)**2))&&(e0.copy(l).invert(),fs.copy(e.ray).applyMatrix4(e0),!(r.boundingBox!==null&&fs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,g=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let S=0,w=g.length;S<w;S++){const y=g[S],M=c[y.materialIndex],C=Math.max(y.start,x.start),P=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let L=C,X=P;L<X;L+=3){const U=f.getX(L),z=f.getX(L+1),E=f.getX(L+2);o=Bl(this,M,e,r,d,m,_,U,z,E),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,x.start),w=Math.min(f.count,x.start+x.count);for(let y=S,M=w;y<M;y+=3){const C=f.getX(y),P=f.getX(y+1),L=f.getX(y+2);o=Bl(this,c,e,r,d,m,_,C,P,L),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let S=0,w=g.length;S<w;S++){const y=g[S],M=c[y.materialIndex],C=Math.max(y.start,x.start),P=Math.min(p.count,Math.min(y.start+y.count,x.start+x.count));for(let L=C,X=P;L<X;L+=3){const U=L,z=L+1,E=L+2;o=Bl(this,M,e,r,d,m,_,U,z,E),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,x.start),w=Math.min(p.count,x.start+x.count);for(let y=S,M=w;y<M;y+=3){const C=y,P=y+1,L=y+2;o=Bl(this,c,e,r,d,m,_,C,P,L),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function _y(s,e,t,r,o,l,c,f){let p;if(e.side===Jn?p=r.intersectTriangle(c,l,o,!0,f):p=r.intersectTriangle(o,l,c,e.side===jr,f),p===null)return null;kl.copy(f),kl.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(kl);return d<t.near||d>t.far?null:{distance:d,point:kl.clone(),object:s}}function Bl(s,e,t,r,o,l,c,f,p,d){s.getVertexPosition(f,Dl),s.getVertexPosition(p,Nl),s.getVertexPosition(d,Fl);const m=_y(s,e,t,r,Dl,Nl,Fl,n0);if(m){const _=new J;Oi.getBarycoord(n0,Dl,Nl,Fl,_),o&&(m.uv=Oi.getInterpolatedAttribute(o,f,p,d,_,new Dt)),l&&(m.uv1=Oi.getInterpolatedAttribute(l,f,p,d,_,new Dt)),c&&(m.normal=Oi.getInterpolatedAttribute(c,f,p,d,_,new J),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const g={a:f,b:p,c:d,normal:new J,materialIndex:0};Oi.getNormal(Dl,Nl,Fl,g.normal),m.face=g,m.barycoord=_}return m}class Bg extends Dn{constructor(e=null,t=1,r=1,o,l,c,f,p,d=dn,m=dn,_,g){super(null,c,f,p,d,m,o,l,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cf=new J,xy=new J,yy=new wt;class ds{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Cf.subVectors(r,t).cross(xy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Cf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||yy.getNormalMatrix(e),o=this.coplanarPoint(Cf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new _o,My=new Dt(.5,.5),zl=new J;class zg{constructor(e=new ds,t=new ds,r=new ds,o=new ds,l=new ds,c=new ds){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ki,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],p=l[2],d=l[3],m=l[4],_=l[5],g=l[6],x=l[7],S=l[8],w=l[9],y=l[10],M=l[11],C=l[12],P=l[13],L=l[14],X=l[15];if(o[0].setComponents(d-c,x-m,M-S,X-C).normalize(),o[1].setComponents(d+c,x+m,M+S,X+C).normalize(),o[2].setComponents(d+f,x+_,M+w,X+P).normalize(),o[3].setComponents(d-f,x-_,M-w,X-P).normalize(),r)o[4].setComponents(p,g,y,L).normalize(),o[5].setComponents(d-p,x-g,M-y,X-L).normalize();else if(o[4].setComponents(d-p,x-g,M-y,X-L).normalize(),t===Ki)o[5].setComponents(d+p,x+g,M+y,X+L).normalize();else if(t===fc)o[5].setComponents(p,g,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const t=My.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(zl.x=o.normal.x>0?e.max.x:e.min.x,zl.y=o.normal.y>0?e.max.y:e.min.y,zl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sy extends xo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dc=new J,pc=new J,i0=new tn,ra=new Zh,Hl=new _o,Rf=new J,r0=new J;class Ay extends Xn{constructor(e=new Nn,t=new Sy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)dc.fromBufferAttribute(t,o-1),pc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=dc.distanceTo(pc);e.setAttribute("lineDistance",new li(r,1))}else vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Hl.copy(r.boundingSphere),Hl.applyMatrix4(o),Hl.radius+=l,e.ray.intersectsSphere(Hl)===!1)return;i0.copy(o).invert(),ra.copy(e.ray).applyMatrix4(i0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=this.isLineSegments?2:1,m=r.index,g=r.attributes.position;if(m!==null){const x=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let w=x,y=S-1;w<y;w+=d){const M=m.getX(w),C=m.getX(w+1),P=Vl(this,e,ra,p,M,C,w);P&&t.push(P)}if(this.isLineLoop){const w=m.getX(S-1),y=m.getX(x),M=Vl(this,e,ra,p,w,y,S-1);M&&t.push(M)}}else{const x=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let w=x,y=S-1;w<y;w+=d){const M=Vl(this,e,ra,p,w,w+1,w);M&&t.push(M)}if(this.isLineLoop){const w=Vl(this,e,ra,p,S-1,x,S-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Vl(s,e,t,r,o,l,c){const f=s.geometry.attributes.position;if(dc.fromBufferAttribute(f,o),pc.fromBufferAttribute(f,l),t.distanceSqToSegment(dc,pc,Rf,r0)>r)return;Rf.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(Rf);if(!(d<e.near||d>e.far))return{distance:d,point:r0.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}class Ey extends xo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const s0=new tn,Nh=new Zh,Gl=new _o,Wl=new J;class wy extends Xn{constructor(e=new Nn,t=new Ey){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gl.copy(r.boundingSphere),Gl.applyMatrix4(o),Gl.radius+=l,e.ray.intersectsSphere(Gl)===!1)return;s0.copy(o).invert(),Nh.copy(e.ray).applyMatrix4(s0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=r.index,_=r.attributes.position;if(d!==null){const g=Math.max(0,c.start),x=Math.min(d.count,c.start+c.count);for(let S=g,w=x;S<w;S++){const y=d.getX(S);Wl.fromBufferAttribute(_,y),o0(Wl,y,p,o,e,t,this)}}else{const g=Math.max(0,c.start),x=Math.min(_.count,c.start+c.count);for(let S=g,w=x;S<w;S++)Wl.fromBufferAttribute(_,S),o0(Wl,S,p,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function o0(s,e,t,r,o,l,c){const f=Nh.distanceSqToPoint(s);if(f<t){const p=new J;Nh.closestPointToPoint(s,p),p.applyMatrix4(r);const d=o.ray.origin.distanceTo(p);if(d<o.near||d>o.far)return;l.push({distance:d,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Hg extends Dn{constructor(e=[],t=_s,r,o,l,c,f,p,d,m){super(e,t,r,o,l,c,f,p,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ty extends Dn{constructor(e,t,r,o,l,c,f,p,d){super(e,t,r,o,l,c,f,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mo extends Dn{constructor(e,t,r=Ji,o,l,c,f=dn,p=dn,d,m=_r,_=1){if(m!==_r&&m!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,o,l,c,f,p,m,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cy extends mo{constructor(e,t=Ji,r=_s,o,l,c=dn,f=dn,p,d=_r){const m={width:e,height:e,depth:1},_=[m,m,m,m,m,m];super(e,e,t,r,o,l,c,f,p,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vg extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ya extends Nn{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const p=[],d=[],m=[],_=[];let g=0,x=0;S("z","y","x",-1,-1,r,t,e,c,l,0),S("z","y","x",1,-1,r,t,-e,c,l,1),S("x","z","y",1,1,e,r,t,o,c,2),S("x","z","y",1,-1,e,r,-t,o,c,3),S("x","y","z",1,-1,e,t,r,o,l,4),S("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new li(d,3)),this.setAttribute("normal",new li(m,3)),this.setAttribute("uv",new li(_,2));function S(w,y,M,C,P,L,X,U,z,E,N){const Z=L/z,B=X/E,Y=L/2,ue=X/2,fe=U/2,H=z+1,ne=E+1;let W=0,O=0;const F=new J;for(let te=0;te<ne;te++){const I=te*B-ue;for(let V=0;V<H;V++){const Me=V*Z-Y;F[w]=Me*C,F[y]=I*P,F[M]=fe,d.push(F.x,F.y,F.z),F[w]=0,F[y]=0,F[M]=U>0?1:-1,m.push(F.x,F.y,F.z),_.push(V/z),_.push(1-te/E),W+=1}}for(let te=0;te<E;te++)for(let I=0;I<z;I++){const V=g+I+H*te,Me=g+I+H*(te+1),Ae=g+(I+1)+H*(te+1),xe=g+(I+1)+H*te;p.push(V,Me,xe),p.push(Me,Ae,xe),O+=6}f.addGroup(x,O,N),x+=O,g+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ry{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){vt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,p=l-1,d;for(;f<=p;)if(o=Math.floor(f+(p-f)/2),d=r[o]-c,d<0)f=o+1;else if(d>0)p=o-1;else{p=o;break}if(o=p,r[o]===c)return o/(l-1);const m=r[o],g=r[o+1]-m,x=(c-m)/g;return(o+x)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),p=t||(c.isVector2?new Dt:new J);return p.copy(f).sub(c).normalize(),p}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new J,o=[],l=[],c=[],f=new J,p=new tn;for(let x=0;x<=e;x++){const S=x/e;o[x]=this.getTangentAt(S,new J)}l[0]=new J,c[0]=new J;let d=Number.MAX_VALUE;const m=Math.abs(o[0].x),_=Math.abs(o[0].y),g=Math.abs(o[0].z);m<=d&&(d=m,r.set(1,0,0)),_<=d&&(d=_,r.set(0,1,0)),g<=d&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let x=1;x<=e;x++){if(l[x]=l[x-1].clone(),c[x]=c[x-1].clone(),f.crossVectors(o[x-1],o[x]),f.length()>Number.EPSILON){f.normalize();const S=Math.acos(bt(o[x-1].dot(o[x]),-1,1));l[x].applyMatrix4(p.makeRotationAxis(f,S))}c[x].crossVectors(o[x],l[x])}if(t===!0){let x=Math.acos(bt(l[0].dot(l[e]),-1,1));x/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(x=-x);for(let S=1;S<=e;S++)l[S].applyMatrix4(p.makeRotationAxis(o[S],x*S)),c[S].crossVectors(o[S],l[S])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Jh(){let s=0,e=0,t=0,r=0;function o(l,c,f,p){s=l,e=f,t=-3*l+3*c-2*f-p,r=2*l-2*c+f+p}return{initCatmullRom:function(l,c,f,p,d){o(c,f,d*(f-l),d*(p-c))},initNonuniformCatmullRom:function(l,c,f,p,d,m,_){let g=(c-l)/d-(f-l)/(d+m)+(f-c)/m,x=(f-c)/m-(p-c)/(m+_)+(p-f)/_;g*=m,x*=m,o(c,f,g,x)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const a0=new J,l0=new J,bf=new Jh,Pf=new Jh,Lf=new Jh;class by extends Ry{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new J){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),p=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:p===0&&f===l-1&&(f=l-2,p=1);let d,m;this.closed||f>0?d=o[(f-1)%l]:(l0.subVectors(o[0],o[1]).add(o[0]),d=l0);const _=o[f%l],g=o[(f+1)%l];if(this.closed||f+2<l?m=o[(f+2)%l]:(a0.subVectors(o[l-1],o[l-2]).add(o[l-1]),m=a0),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let S=Math.pow(d.distanceToSquared(_),x),w=Math.pow(_.distanceToSquared(g),x),y=Math.pow(g.distanceToSquared(m),x);w<1e-4&&(w=1),S<1e-4&&(S=w),y<1e-4&&(y=w),bf.initNonuniformCatmullRom(d.x,_.x,g.x,m.x,S,w,y),Pf.initNonuniformCatmullRom(d.y,_.y,g.y,m.y,S,w,y),Lf.initNonuniformCatmullRom(d.z,_.z,g.z,m.z,S,w,y)}else this.curveType==="catmullrom"&&(bf.initCatmullRom(d.x,_.x,g.x,m.x,this.tension),Pf.initCatmullRom(d.y,_.y,g.y,m.y,this.tension),Lf.initCatmullRom(d.z,_.z,g.z,m.z,this.tension));return r.set(bf.calc(p),Pf.calc(p),Lf.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new J().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class _c extends Nn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),p=Math.floor(o),d=f+1,m=p+1,_=e/f,g=t/p,x=[],S=[],w=[],y=[];for(let M=0;M<m;M++){const C=M*g-c;for(let P=0;P<d;P++){const L=P*_-l;S.push(L,-C,0),w.push(0,0,1),y.push(P/f),y.push(1-M/p)}}for(let M=0;M<p;M++)for(let C=0;C<f;C++){const P=C+d*M,L=C+d*(M+1),X=C+1+d*(M+1),U=C+1+d*M;x.push(P,L,U),x.push(L,X,U)}this.setIndex(x),this.setAttribute("position",new li(S,3)),this.setAttribute("normal",new li(w,3)),this.setAttribute("uv",new li(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.width,e.height,e.widthSegments,e.heightSegments)}}class mc extends Nn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(c+f,Math.PI);let d=0;const m=[],_=new J,g=new J,x=[],S=[],w=[],y=[];for(let M=0;M<=r;M++){const C=[],P=M/r;let L=0;M===0&&c===0?L=.5/t:M===r&&p===Math.PI&&(L=-.5/t);for(let X=0;X<=t;X++){const U=X/t;_.x=-e*Math.cos(o+U*l)*Math.sin(c+P*f),_.y=e*Math.cos(c+P*f),_.z=e*Math.sin(o+U*l)*Math.sin(c+P*f),S.push(_.x,_.y,_.z),g.copy(_).normalize(),w.push(g.x,g.y,g.z),y.push(U+L,1-P),C.push(d++)}m.push(C)}for(let M=0;M<r;M++)for(let C=0;C<t;C++){const P=m[M][C+1],L=m[M][C],X=m[M+1][C],U=m[M+1][C+1];(M!==0||c>0)&&x.push(P,L,U),(M!==r-1||p<Math.PI)&&x.push(L,X,U)}this.setIndex(x),this.setAttribute("position",new li(S,3)),this.setAttribute("normal",new li(w,3)),this.setAttribute("uv",new li(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function go(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(c0(o))o.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(c0(o[0])){const l=[];for(let c=0,f=o.length;c<f;c++)l[c]=o[c].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Wn(s){const e={};for(let t=0;t<s.length;t++){const r=go(s[t]);for(const o in r)e[o]=r[o]}return e}function c0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Py(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Ly={clone:go,merge:Wn};var Iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends xo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iy,this.fragmentShader=Uy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=Py(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Dy extends Mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ny extends xo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fy extends xo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xl=new J,jl=new Qi,Wi=new J;class Wg extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xl,jl,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,jl,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Xl,jl,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,jl,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Gr=new J,u0=new Dt,f0=new Dt;class ai extends Wg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z)}getViewSize(e,t){return this.getViewBounds(e,u0,f0),t.subVectors(f0,u0)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(da*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;l+=c.offsetX*o/p,t-=c.offsetY*r/d,o*=c.width/p,r*=c.height/d}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Xg extends Wg{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=m*this.view.offsetY,p=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const no=-90,io=1;class Oy extends Xn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ai(no,io,e,t);o.layers=this.layers,this.add(o);const l=new ai(no,io,e,t);l.layers=this.layers,this.add(l);const c=new ai(no,io,e,t);c.layers=this.layers,this.add(c);const f=new ai(no,io,e,t);f.layers=this.layers,this.add(f);const p=new ai(no,io,e,t);p.layers=this.layers,this.add(p);const d=new ai(no,io,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,p]=t;for(const d of t)this.remove(d);if(e===Ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===fc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,d,m]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(_,g,x),e.xr.enabled=S,r.texture.needsPMREMUpdate=!0}}class ky extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const id=class id{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};id.prototype.isMatrix2=!0;let h0=id;function d0(s,e,t,r){const o=By(r);switch(t){case Rg:return s*e;case Pg:return s*e/o.components*o.byteLength;case Wh:return s*e/o.components*o.byteLength;case xs:return s*e*2/o.components*o.byteLength;case Xh:return s*e*2/o.components*o.byteLength;case bg:return s*e*3/o.components*o.byteLength;case yi:return s*e*4/o.components*o.byteLength;case jh:return s*e*4/o.components*o.byteLength;case $l:case ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case tc:case nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sh:case ah:return Math.max(s,16)*Math.max(e,8)/4;case rh:case oh:return Math.max(s,8)*Math.max(e,8)/2;case lh:case ch:case fh:case hh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uh:case ac:case dh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _h:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Th:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rh:case bh:case Ph:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Lh:case Ih:return Math.ceil(s/4)*Math.ceil(e/4)*8;case lc:case Uh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function By(s){switch(s){case xi:case Eg:return{byteLength:1,components:1};case ma:case wg:case vr:return{byteLength:2,components:1};case Vh:case Gh:return{byteLength:2,components:4};case Ji:case Hh:case ki:return{byteLength:4,components:1};case Tg:case Cg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zh}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jg(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function zy(s){const e=new WeakMap;function t(f,p){const d=f.array,m=f.usage,_=d.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,d,m),f.onUploadCallback();let x;if(d instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=s.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=s.SHORT;else if(d instanceof Uint32Array)x=s.UNSIGNED_INT;else if(d instanceof Int32Array)x=s.INT;else if(d instanceof Int8Array)x=s.BYTE;else if(d instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,p,d){const m=p.array,_=p.updateRanges;if(s.bindBuffer(d,f),_.length===0)s.bufferSubData(d,0,m);else{_.sort((x,S)=>x.start-S.start);let g=0;for(let x=1;x<_.length;x++){const S=_[g],w=_[x];w.start<=S.start+S.count+1?S.count=Math.max(S.count,w.start+w.count-S.start):(++g,_[g]=w)}_.length=g+1;for(let x=0,S=_.length;x<S;x++){const w=_[x];s.bufferSubData(d,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=e.get(f);if(d===void 0)e.set(f,t(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,f,p),d.version=f.version}}return{get:o,remove:l,update:c}}var Hy=`#ifdef USE_ALPHAHASH
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
#endif`,Ky=`#ifdef USE_AOMAP
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
#endif`,qy=`#ifdef USE_AOMAP
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
#endif`,vM="gl_FragColor = linearToOutputTexel( gl_FragColor );",_M=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xM=`#ifdef USE_ENVMAP
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
#include <lightprobes_pars_fragment>`,UM=`#ifdef USE_ENVMAP
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
material.diffuseColor = diffuseColor.rgb;`,NM=`varying vec3 vViewPosition;
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
#endif`,KM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
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
#endif`,_S=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xS=`#ifdef DITHERING
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
#endif`,US=`#if defined( TONE_MAPPING )
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NS=`#ifdef USE_TRANSMISSION
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
}`,KS=`#include <common>
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
}`,qS=`#if DEPTH_PACKING == 3200
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
}`,_1=`uniform vec3 color;
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
}`,x1=`uniform float rotation;
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
}`,Tt={alphahash_fragment:Hy,alphahash_pars_fragment:Vy,alphamap_fragment:Gy,alphamap_pars_fragment:Wy,alphatest_fragment:Xy,alphatest_pars_fragment:jy,aomap_fragment:Ky,aomap_pars_fragment:qy,batching_pars_vertex:Yy,batching_vertex:Qy,begin_vertex:Zy,beginnormal_vertex:Jy,bsdfs:$y,iridescence_fragment:eM,bumpmap_pars_fragment:tM,clipping_planes_fragment:nM,clipping_planes_pars_fragment:iM,clipping_planes_pars_vertex:rM,clipping_planes_vertex:sM,color_fragment:oM,color_pars_fragment:aM,color_pars_vertex:lM,color_vertex:cM,common:uM,cube_uv_reflection_fragment:fM,defaultnormal_vertex:hM,displacementmap_pars_vertex:dM,displacementmap_vertex:pM,emissivemap_fragment:mM,emissivemap_pars_fragment:gM,colorspace_fragment:vM,colorspace_pars_fragment:_M,envmap_fragment:xM,envmap_common_pars_fragment:yM,envmap_pars_fragment:MM,envmap_pars_vertex:SM,envmap_physical_pars_fragment:UM,envmap_vertex:AM,fog_vertex:EM,fog_pars_vertex:wM,fog_fragment:TM,fog_pars_fragment:CM,gradientmap_pars_fragment:RM,lightmap_pars_fragment:bM,lights_lambert_fragment:PM,lights_lambert_pars_fragment:LM,lights_pars_begin:IM,lights_toon_fragment:DM,lights_toon_pars_fragment:NM,lights_phong_fragment:FM,lights_phong_pars_fragment:OM,lights_physical_fragment:kM,lights_physical_pars_fragment:BM,lights_fragment_begin:zM,lights_fragment_maps:HM,lights_fragment_end:VM,lightprobes_pars_fragment:GM,logdepthbuf_fragment:WM,logdepthbuf_pars_fragment:XM,logdepthbuf_pars_vertex:jM,logdepthbuf_vertex:KM,map_fragment:qM,map_pars_fragment:YM,map_particle_fragment:QM,map_particle_pars_fragment:ZM,metalnessmap_fragment:JM,metalnessmap_pars_fragment:$M,morphinstance_vertex:eS,morphcolor_vertex:tS,morphnormal_vertex:nS,morphtarget_pars_vertex:iS,morphtarget_vertex:rS,normal_fragment_begin:sS,normal_fragment_maps:oS,normal_pars_fragment:aS,normal_pars_vertex:lS,normal_vertex:cS,normalmap_pars_fragment:uS,clearcoat_normal_fragment_begin:fS,clearcoat_normal_fragment_maps:hS,clearcoat_pars_fragment:dS,iridescence_pars_fragment:pS,opaque_fragment:mS,packing:gS,premultiplied_alpha_fragment:vS,project_vertex:_S,dithering_fragment:xS,dithering_pars_fragment:yS,roughnessmap_fragment:MS,roughnessmap_pars_fragment:SS,shadowmap_pars_fragment:AS,shadowmap_pars_vertex:ES,shadowmap_vertex:wS,shadowmask_pars_fragment:TS,skinbase_vertex:CS,skinning_pars_vertex:RS,skinning_vertex:bS,skinnormal_vertex:PS,specularmap_fragment:LS,specularmap_pars_fragment:IS,tonemapping_fragment:US,tonemapping_pars_fragment:DS,transmission_fragment:NS,transmission_pars_fragment:FS,uv_pars_fragment:OS,uv_pars_vertex:kS,uv_vertex:BS,worldpos_vertex:zS,background_vert:HS,background_frag:VS,backgroundCube_vert:GS,backgroundCube_frag:WS,cube_vert:XS,cube_frag:jS,depth_vert:KS,depth_frag:qS,distance_vert:YS,distance_frag:QS,equirect_vert:ZS,equirect_frag:JS,linedashed_vert:$S,linedashed_frag:e1,meshbasic_vert:t1,meshbasic_frag:n1,meshlambert_vert:i1,meshlambert_frag:r1,meshmatcap_vert:s1,meshmatcap_frag:o1,meshnormal_vert:a1,meshnormal_frag:l1,meshphong_vert:c1,meshphong_frag:u1,meshphysical_vert:f1,meshphysical_frag:h1,meshtoon_vert:d1,meshtoon_frag:p1,points_vert:m1,points_frag:g1,shadow_vert:v1,shadow_frag:_1,sprite_vert:x1,sprite_frag:y1},Ke={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},ji={basic:{uniforms:Wn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Wn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Wn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Wn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Wn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new zt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Wn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Wn([Ke.points,Ke.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Wn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Wn([Ke.common,Ke.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Wn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Wn([Ke.sprite,Ke.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:Wn([Ke.common,Ke.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:Wn([Ke.lights,Ke.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};ji.physical={uniforms:Wn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Kl={r:0,b:0,g:0},M1=new tn,Kg=new wt;Kg.set(-1,0,0,0,1,0,0,0,1);function S1(s,e,t,r,o,l){const c=new zt(0);let f=o===!0?0:1,p,d,m=null,_=0,g=null;function x(C){let P=C.isScene===!0?C.background:null;if(P&&P.isTexture){const L=C.backgroundBlurriness>0;P=e.get(P,L)}return P}function S(C){let P=!1;const L=x(C);L===null?y(c,f):L&&L.isColor&&(y(L,1),P=!0);const X=s.xr.getEnvironmentBlendMode();X==="additive"?t.buffers.color.setClear(0,0,0,1,l):X==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(C,P){const L=x(P);L&&(L.isCubeTexture||L.mapping===vc)?(d===void 0&&(d=new Fn(new ya(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:go(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(X,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=L,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(M1.makeRotationFromEuler(P.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Kg),d.material.toneMapped=Pt.getTransfer(L.colorSpace)!==Vt,(m!==L||_!==L.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,m=L,_=L.version,g=s.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new Fn(new _c(2,2),new Mi({name:"BackgroundMaterial",uniforms:go(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Pt.getTransfer(L.colorSpace)!==Vt,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(m!==L||_!==L.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,m=L,_=L.version,g=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function y(C,P){C.getRGB(Kl,Gg(s)),t.buffers.color.setClear(Kl.r,Kl.g,Kl.b,P,l)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,P=1){c.set(C),f=P,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,y(c,f)},render:S,addToRenderList:w,dispose:M}}function A1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,c=!1;function f(B,Y,ue,fe,H){let ne=!1;const W=_(B,fe,ue,Y);l!==W&&(l=W,d(l.object)),ne=x(B,fe,ue,H),ne&&S(B,fe,ue,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(ne||c)&&(c=!1,L(B,Y,ue,fe),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function p(){return s.createVertexArray()}function d(B){return s.bindVertexArray(B)}function m(B){return s.deleteVertexArray(B)}function _(B,Y,ue,fe){const H=fe.wireframe===!0;let ne=r[Y.id];ne===void 0&&(ne={},r[Y.id]=ne);const W=B.isInstancedMesh===!0?B.id:0;let O=ne[W];O===void 0&&(O={},ne[W]=O);let F=O[ue.id];F===void 0&&(F={},O[ue.id]=F);let te=F[H];return te===void 0&&(te=g(p()),F[H]=te),te}function g(B){const Y=[],ue=[],fe=[];for(let H=0;H<t;H++)Y[H]=0,ue[H]=0,fe[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ue,attributeDivisors:fe,object:B,attributes:{},index:null}}function x(B,Y,ue,fe){const H=l.attributes,ne=Y.attributes;let W=0;const O=ue.getAttributes();for(const F in O)if(O[F].location>=0){const I=H[F];let V=ne[F];if(V===void 0&&(F==="instanceMatrix"&&B.instanceMatrix&&(V=B.instanceMatrix),F==="instanceColor"&&B.instanceColor&&(V=B.instanceColor)),I===void 0||I.attribute!==V||V&&I.data!==V.data)return!0;W++}return l.attributesNum!==W||l.index!==fe}function S(B,Y,ue,fe){const H={},ne=Y.attributes;let W=0;const O=ue.getAttributes();for(const F in O)if(O[F].location>=0){let I=ne[F];I===void 0&&(F==="instanceMatrix"&&B.instanceMatrix&&(I=B.instanceMatrix),F==="instanceColor"&&B.instanceColor&&(I=B.instanceColor));const V={};V.attribute=I,I&&I.data&&(V.data=I.data),H[F]=V,W++}l.attributes=H,l.attributesNum=W,l.index=fe}function w(){const B=l.newAttributes;for(let Y=0,ue=B.length;Y<ue;Y++)B[Y]=0}function y(B){M(B,0)}function M(B,Y){const ue=l.newAttributes,fe=l.enabledAttributes,H=l.attributeDivisors;ue[B]=1,fe[B]===0&&(s.enableVertexAttribArray(B),fe[B]=1),H[B]!==Y&&(s.vertexAttribDivisor(B,Y),H[B]=Y)}function C(){const B=l.newAttributes,Y=l.enabledAttributes;for(let ue=0,fe=Y.length;ue<fe;ue++)Y[ue]!==B[ue]&&(s.disableVertexAttribArray(ue),Y[ue]=0)}function P(B,Y,ue,fe,H,ne,W){W===!0?s.vertexAttribIPointer(B,Y,ue,H,ne):s.vertexAttribPointer(B,Y,ue,fe,H,ne)}function L(B,Y,ue,fe){w();const H=fe.attributes,ne=ue.getAttributes(),W=Y.defaultAttributeValues;for(const O in ne){const F=ne[O];if(F.location>=0){let te=H[O];if(te===void 0&&(O==="instanceMatrix"&&B.instanceMatrix&&(te=B.instanceMatrix),O==="instanceColor"&&B.instanceColor&&(te=B.instanceColor)),te!==void 0){const I=te.normalized,V=te.itemSize,Me=e.get(te);if(Me===void 0)continue;const Ae=Me.buffer,xe=Me.type,j=Me.bytesPerElement,ae=xe===s.INT||xe===s.UNSIGNED_INT||te.gpuType===Hh;if(te.isInterleavedBufferAttribute){const G=te.data,de=G.stride,Te=te.offset;if(G.isInstancedInterleavedBuffer){for(let pe=0;pe<F.locationSize;pe++)M(F.location+pe,G.meshPerAttribute);B.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let pe=0;pe<F.locationSize;pe++)y(F.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let pe=0;pe<F.locationSize;pe++)P(F.location+pe,V/F.locationSize,xe,I,de*j,(Te+V/F.locationSize*pe)*j,ae)}else{if(te.isInstancedBufferAttribute){for(let G=0;G<F.locationSize;G++)M(F.location+G,te.meshPerAttribute);B.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let G=0;G<F.locationSize;G++)y(F.location+G);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let G=0;G<F.locationSize;G++)P(F.location+G,V/F.locationSize,xe,I,V*j,V/F.locationSize*G*j,ae)}}else if(W!==void 0){const I=W[O];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(F.location,I);break;case 3:s.vertexAttrib3fv(F.location,I);break;case 4:s.vertexAttrib4fv(F.location,I);break;default:s.vertexAttrib1fv(F.location,I)}}}}C()}function X(){N();for(const B in r){const Y=r[B];for(const ue in Y){const fe=Y[ue];for(const H in fe){const ne=fe[H];for(const W in ne)m(ne[W].object),delete ne[W];delete fe[H]}}delete r[B]}}function U(B){if(r[B.id]===void 0)return;const Y=r[B.id];for(const ue in Y){const fe=Y[ue];for(const H in fe){const ne=fe[H];for(const W in ne)m(ne[W].object),delete ne[W];delete fe[H]}}delete r[B.id]}function z(B){for(const Y in r){const ue=r[Y];for(const fe in ue){const H=ue[fe];if(H[B.id]===void 0)continue;const ne=H[B.id];for(const W in ne)m(ne[W].object),delete ne[W];delete H[B.id]}}}function E(B){for(const Y in r){const ue=r[Y],fe=B.isInstancedMesh===!0?B.id:0,H=ue[fe];if(H!==void 0){for(const ne in H){const W=H[ne];for(const O in W)m(W[O].object),delete W[O];delete H[ne]}delete ue[fe],Object.keys(ue).length===0&&delete r[Y]}}}function N(){Z(),c=!0,l!==o&&(l=o,d(l.object))}function Z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:N,resetDefaultState:Z,dispose:X,releaseStatesOfGeometry:U,releaseStatesOfObject:E,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:y,disableUnusedAttributes:C}}function E1(s,e,t){let r;function o(p){r=p}function l(p,d){s.drawArrays(r,p,d),t.update(d,r,1)}function c(p,d,m){m!==0&&(s.drawArraysInstanced(r,p,d,m),t.update(d,r,m))}function f(p,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,d,0,m);let g=0;for(let x=0;x<m;x++)g+=d[x];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function w1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(z){return!(z!==yi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const E=z===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==xi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ki&&!E)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=p(d);m!==d&&(vt("WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),X=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:S,maxTextureSize:w,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:C,maxVaryings:P,maxFragmentUniforms:L,maxSamples:X,samples:U}}function T1(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new ds,f=new wt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||r!==0||o;return o=g,r=_.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=m(_,g,0)},this.setState=function(_,g,x){const S=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,M=s.get(_);if(!o||S===null||S.length===0||l&&!y)l?m(null):d();else{const C=l?0:r,P=C*4;let L=M.clippingState||null;p.value=L,L=m(S,g,P,x);for(let X=0;X!==P;++X)L[X]=t[X];M.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function d(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(_,g,x,S){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=p.value,S!==!0||y===null){const M=x+w*4,C=g.matrixWorldInverse;f.getNormalMatrix(C),(y===null||y.length<M)&&(y=new Float32Array(M));for(let P=0,L=x;P!==w;++P,L+=4)c.copy(_[P]).applyMatrix4(C,f),c.normal.toArray(y,L),y[L+3]=c.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const Xr=4,p0=[.125,.215,.35,.446,.526,.582],ms=20,C1=256,sa=new Xg,m0=new zt;let If=null,Uf=0,Df=0,Nf=!1;const R1=new J;class g0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=R1}=l;If=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(If,Uf,Df),this._renderer.xr.enabled=Nf,e.scissorTest=!1,ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),If=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:vr,format:yi,colorSpace:cc,depthBuffer:!1},o=v0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=b1(l)),this._blurMaterial=L1(l,e,t),this._ggxMaterial=P1(l,e,t)}return o}_compileMaterial(e){const t=new Fn(new Nn,e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,r,o,l){const p=new ai(90,1,t,r),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(m0),_.toneMapping=Yi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fn(new ya,new kg({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let M=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,M=!0):(y.color.copy(m0),M=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(p.up.set(0,d[P],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+m[P],l.y,l.z)):L===1?(p.up.set(0,0,d[P]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+m[P],l.z)):(p.up.set(0,d[P],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+m[P]));const X=this._cubeSize;ro(o,L*X,P>2?X:0,X,X),_.setRenderTarget(o),M&&_.render(w,p),_.render(e,p)}_.toneMapping=x,_.autoClear=g,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===_s||e.mapping===po;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=x0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_0());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;ro(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(c,sa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const p=c.uniforms,d=r/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),_=Math.sqrt(d*d-m*m),g=0+d*1.25,x=_*g,{_lodMax:S}=this,w=this._sizeLods[r],y=3*w*(r>S-Xr?r-S+Xr:0),M=4*(this._cubeSize-w);p.envMap.value=e.texture,p.roughness.value=x,p.mipInt.value=S-t,ro(l,y,M,3*w,2*w),o.setRenderTarget(l),o.render(f,sa),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=S-r,ro(e,y,M,3*w,2*w),o.setRenderTarget(e),o.render(f,sa)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const m=3,_=this._lodMeshes[o];_.material=d;const g=d.uniforms,x=this._sizeLods[r]-1,S=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*ms-1),w=l/S,y=isFinite(l)?1+Math.floor(m*w):ms;y>ms&&vt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ms}`);const M=[];let C=0;for(let z=0;z<ms;++z){const E=z/w,N=Math.exp(-E*E/2);M.push(N),z===0?C+=N:z<y&&(C+=2*N)}for(let z=0;z<M.length;z++)M[z]=M[z]/C;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=M,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:P}=this;g.dTheta.value=S,g.mipInt.value=P-r;const L=this._sizeLods[o],X=3*L*(o>P-Xr?o-P+Xr:0),U=4*(this._cubeSize-L);ro(t,X,U,3*L,2*L),p.setRenderTarget(t),p.render(_,sa)}}function b1(s){const e=[],t=[],r=[];let o=s;const l=s-Xr+1+p0.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let p=1/f;c>s-Xr?p=p0[c-s+Xr-1]:c===0&&(p=0),t.push(p);const d=1/(f-2),m=-d,_=1+d,g=[m,m,_,m,_,_,m,m,_,_,m,_],x=6,S=6,w=3,y=2,M=1,C=new Float32Array(w*S*x),P=new Float32Array(y*S*x),L=new Float32Array(M*S*x);for(let U=0;U<x;U++){const z=U%3*2/3-1,E=U>2?0:-1,N=[z,E,0,z+2/3,E,0,z+2/3,E+1,0,z,E,0,z+2/3,E+1,0,z,E+1,0];C.set(N,w*S*U),P.set(g,y*S*U);const Z=[U,U,U,U,U,U];L.set(Z,M*S*U)}const X=new Nn;X.setAttribute("position",new Gt(C,w)),X.setAttribute("uv",new Gt(P,y)),X.setAttribute("faceIndex",new Gt(L,M)),r.push(new Fn(X,null)),o>Xr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function v0(s,e,t){const r=new Zi(s,e,t);return r.texture.mapping=vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ro(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function P1(s,e,t){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function L1(s,e,t){const r=new Float32Array(ms),o=new J(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:xc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function _0(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function x0(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

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
	`}class qg extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Hg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ya(5,5,5),l=new Mi({name:"CubemapFromEquirect",uniforms:go(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:mr});l.uniforms.tEquirect.value=t;const c=new Fn(o,l),f=t.minFilter;return t.minFilter===gs&&(t.minFilter=Mn),new Oy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function I1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,x=!1){return g==null?null:x?c(g):l(g)}function l(g){if(g&&g.isTexture){const x=g.mapping;if(x===tf||x===nf)if(e.has(g)){const S=e.get(g).texture;return f(S,g.mapping)}else{const S=g.image;if(S&&S.height>0){const w=new qg(S.height);return w.fromEquirectangularTexture(s,g),e.set(g,w),g.addEventListener("dispose",d),f(w.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const x=g.mapping,S=x===tf||x===nf,w=x===_s||x===po;if(S||w){let y=t.get(g);const M=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==M)return r===null&&(r=new g0(s)),y=S?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const C=g.image;return S&&C&&C.height>0||w&&C&&p(C)?(r===null&&(r=new g0(s)),y=S?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",m),y.texture):null}}}return g}function f(g,x){return x===tf?g.mapping=_s:x===nf&&(g.mapping=po),g}function p(g){let x=0;const S=6;for(let w=0;w<S;w++)g[w]!==void 0&&x++;return x===S}function d(g){const x=g.target;x.removeEventListener("dispose",d);const S=e.get(x);S!==void 0&&(e.delete(x),S.dispose())}function m(g){const x=g.target;x.removeEventListener("dispose",m);const S=t.get(x);S!==void 0&&(t.delete(x),S.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function U1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Dh("WebGLRenderer: "+r+" extension not supported."),o}}}function D1(s,e,t,r){const o={},l=new WeakMap;function c(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",c),delete o[g.id];const x=l.get(g);x&&(e.remove(x),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(_,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function p(_){const g=_.attributes;for(const x in g)e.update(g[x],s.ARRAY_BUFFER)}function d(_){const g=[],x=_.index,S=_.attributes.position;let w=0;if(S===void 0)return;if(x!==null){const C=x.array;w=x.version;for(let P=0,L=C.length;P<L;P+=3){const X=C[P+0],U=C[P+1],z=C[P+2];g.push(X,U,U,z,z,X)}}else{const C=S.array;w=S.version;for(let P=0,L=C.length/3-1;P<L;P+=3){const X=P+0,U=P+1,z=P+2;g.push(X,U,U,z,z,X)}}const y=new(S.count>=65535?Og:Fg)(g,1);y.version=w;const M=l.get(_);M&&e.remove(M),l.set(_,y)}function m(_){const g=l.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&d(_)}else d(_);return l.get(_)}return{get:f,update:p,getWireframeAttribute:m}}function N1(s,e,t){let r;function o(_){r=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function p(_,g){s.drawElements(r,g,l,_*c),t.update(g,r,1)}function d(_,g,x){x!==0&&(s.drawElementsInstanced(r,g,l,_*c,x),t.update(g,r,x))}function m(_,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,_,0,x);let w=0;for(let y=0;y<x;y++)w+=g[y];t.update(w,r,1)}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=m}function F1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ut("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function O1(s,e,t){const r=new WeakMap,o=new on;function l(c,f,p){const d=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=m!==void 0?m.length:0;let g=r.get(f);if(g===void 0||g.count!==_){let Z=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",Z)};var x=Z;g!==void 0&&g.texture.dispose();const S=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let L=0;S===!0&&(L=1),w===!0&&(L=2),y===!0&&(L=3);let X=f.attributes.position.count*L,U=1;X>e.maxTextureSize&&(U=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const z=new Float32Array(X*U*4*_),E=new Ig(z,X,U,_);E.type=ki,E.needsUpdate=!0;const N=L*4;for(let B=0;B<_;B++){const Y=M[B],ue=C[B],fe=P[B],H=X*U*4*B;for(let ne=0;ne<Y.count;ne++){const W=ne*N;S===!0&&(o.fromBufferAttribute(Y,ne),z[H+W+0]=o.x,z[H+W+1]=o.y,z[H+W+2]=o.z,z[H+W+3]=0),w===!0&&(o.fromBufferAttribute(ue,ne),z[H+W+4]=o.x,z[H+W+5]=o.y,z[H+W+6]=o.z,z[H+W+7]=0),y===!0&&(o.fromBufferAttribute(fe,ne),z[H+W+8]=o.x,z[H+W+9]=o.y,z[H+W+10]=o.z,z[H+W+11]=fe.itemSize===4?o.w:1)}}g={count:_,texture:E,size:new Dt(X,U)},r.set(f,g),f.addEventListener("dispose",Z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let S=0;for(let y=0;y<d.length;y++)S+=d[y];const w=f.morphTargetsRelative?1:1-S;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",d)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function k1(s,e,t,r,o){let l=new WeakMap;function c(d){const m=o.render.frame,_=d.geometry,g=e.get(d,_);if(l.get(g)!==m&&(e.update(g),l.set(g,m)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),l.get(d)!==m&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),l.set(d,m))),d.isSkinnedMesh){const x=d.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return g}function f(){l=new WeakMap}function p(d){const m=d.target;m.removeEventListener("dispose",p),r.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:f}}const B1={[gg]:"LINEAR_TONE_MAPPING",[vg]:"REINHARD_TONE_MAPPING",[_g]:"CINEON_TONE_MAPPING",[xg]:"ACES_FILMIC_TONE_MAPPING",[Mg]:"AGX_TONE_MAPPING",[Sg]:"NEUTRAL_TONE_MAPPING",[yg]:"CUSTOM_TONE_MAPPING"};function z1(s,e,t,r,o){const l=new Zi(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new mo(e,t):void 0}),c=new Zi(e,t,{type:vr,depthBuffer:!1,stencilBuffer:!1}),f=new Nn;f.setAttribute("position",new li([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new li([0,2,0,0,2,0],2));const p=new Dy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Fn(f,p),m=new Xg(-1,1,1,-1,0,1);let _=null,g=null,x=!1,S,w=null,y=[],M=!1;this.setSize=function(C,P){l.setSize(C,P),c.setSize(C,P);for(let L=0;L<y.length;L++){const X=y[L];X.setSize&&X.setSize(C,P)}},this.setEffects=function(C){y=C,M=y.length>0&&y[0].isRenderPass===!0;const P=l.width,L=l.height;for(let X=0;X<y.length;X++){const U=y[X];U.setSize&&U.setSize(P,L)}},this.begin=function(C,P){if(x||C.toneMapping===Yi&&y.length===0)return!1;if(w=P,P!==null){const L=P.width,X=P.height;(l.width!==L||l.height!==X)&&this.setSize(L,X)}return M===!1&&C.setRenderTarget(l),S=C.toneMapping,C.toneMapping=Yi,!0},this.hasRenderPass=function(){return M},this.end=function(C,P){C.toneMapping=S,x=!0;let L=l,X=c;for(let U=0;U<y.length;U++){const z=y[U];if(z.enabled!==!1&&(z.render(C,X,L,P),z.needsSwap!==!1)){const E=L;L=X,X=E}}if(_!==C.outputColorSpace||g!==C.toneMapping){_=C.outputColorSpace,g=C.toneMapping,p.defines={},Pt.getTransfer(_)===Vt&&(p.defines.SRGB_TRANSFER="");const U=B1[g];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(w),C.render(d,m),w=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),p.dispose()}}const Yg=new Dn,Fh=new mo(1,1),Qg=new Ig,Zg=new oy,Jg=new Hg,y0=[],M0=[],S0=new Float32Array(16),A0=new Float32Array(9),E0=new Float32Array(4);function yo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=y0[o];if(l===void 0&&(l=new Float32Array(o),y0[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function pn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function mn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function yc(s,e){let t=M0[e];t===void 0&&(t=new Int32Array(e),M0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function H1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function V1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2fv(this.addr,e),mn(t,e)}}function G1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;s.uniform3fv(this.addr,e),mn(t,e)}}function W1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4fv(this.addr,e),mn(t,e)}}function X1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;E0.set(r),s.uniformMatrix2fv(this.addr,!1,E0),mn(t,r)}}function j1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;A0.set(r),s.uniformMatrix3fv(this.addr,!1,A0),mn(t,r)}}function K1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;S0.set(r),s.uniformMatrix4fv(this.addr,!1,S0),mn(t,r)}}function q1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Y1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2iv(this.addr,e),mn(t,e)}}function Q1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3iv(this.addr,e),mn(t,e)}}function Z1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4iv(this.addr,e),mn(t,e)}}function J1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function $1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2uiv(this.addr,e),mn(t,e)}}function eA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3uiv(this.addr,e),mn(t,e)}}function tA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4uiv(this.addr,e),mn(t,e)}}function nA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Fh.compareFunction=t.isReversedDepthBuffer()?qh:Kh,l=Fh):l=Yg,t.setTexture2D(e||l,o)}function iA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Zg,o)}function rA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Jg,o)}function sA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Qg,o)}function oA(s){switch(s){case 5126:return H1;case 35664:return V1;case 35665:return G1;case 35666:return W1;case 35674:return X1;case 35675:return j1;case 35676:return K1;case 5124:case 35670:return q1;case 35667:case 35671:return Y1;case 35668:case 35672:return Q1;case 35669:case 35673:return Z1;case 5125:return J1;case 36294:return $1;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return sA}}function aA(s,e){s.uniform1fv(this.addr,e)}function lA(s,e){const t=yo(e,this.size,2);s.uniform2fv(this.addr,t)}function cA(s,e){const t=yo(e,this.size,3);s.uniform3fv(this.addr,t)}function uA(s,e){const t=yo(e,this.size,4);s.uniform4fv(this.addr,t)}function fA(s,e){const t=yo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function hA(s,e){const t=yo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function dA(s,e){const t=yo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function pA(s,e){s.uniform1iv(this.addr,e)}function mA(s,e){s.uniform2iv(this.addr,e)}function gA(s,e){s.uniform3iv(this.addr,e)}function vA(s,e){s.uniform4iv(this.addr,e)}function _A(s,e){s.uniform1uiv(this.addr,e)}function xA(s,e){s.uniform2uiv(this.addr,e)}function yA(s,e){s.uniform3uiv(this.addr,e)}function MA(s,e){s.uniform4uiv(this.addr,e)}function SA(s,e,t){const r=this.cache,o=e.length,l=yc(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Fh:c=Yg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function AA(s,e,t){const r=this.cache,o=e.length,l=yc(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Zg,l[c])}function EA(s,e,t){const r=this.cache,o=e.length,l=yc(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||Jg,l[c])}function wA(s,e,t){const r=this.cache,o=e.length,l=yc(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Qg,l[c])}function TA(s){switch(s){case 5126:return aA;case 35664:return lA;case 35665:return cA;case 35666:return uA;case 35674:return fA;case 35675:return hA;case 35676:return dA;case 5124:case 35670:return pA;case 35667:case 35671:return mA;case 35668:case 35672:return gA;case 35669:case 35673:return vA;case 5125:return _A;case 36294:return xA;case 36295:return yA;case 36296:return MA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return AA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return wA}}class CA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=oA(t.type)}}class RA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TA(t.type)}}class bA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Ff=/(\w+)(\])?(\[|\.)?/g;function w0(s,e){s.seq.push(e),s.map[e.id]=e}function PA(s,e,t){const r=s.name,o=r.length;for(Ff.lastIndex=0;;){const l=Ff.exec(r),c=Ff.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===o){w0(t,d===void 0?new CA(f,s,e):new RA(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new bA(f),w0(t,_)),t=_}}}class ic{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),p=e.getUniformLocation(t,f.name);PA(f,p,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function T0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const LA=37297;let IA=0;function UA(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const C0=new wt;function DA(s){Pt._getMatrix(C0,Pt.workingColorSpace,s);const e=`mat3( ${C0.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(s)){case uc:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function R0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+UA(s.getShaderSource(e),f)}else return l}function NA(s,e){const t=DA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const FA={[gg]:"Linear",[vg]:"Reinhard",[_g]:"Cineon",[xg]:"ACESFilmic",[Mg]:"AgX",[Sg]:"Neutral",[yg]:"Custom"};function OA(s,e){const t=FA[e];return t===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ql=new J;function kA(){Pt.getLuminanceCoefficients(ql);const s=ql.x.toFixed(4),e=ql.y.toFixed(4),t=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function zA(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function HA(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function fa(s){return s!==""}function b0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function P0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(s){return s.replace(VA,WA)}const GA=new Map;function WA(s,e){let t=Tt[e];if(t===void 0){const r=GA.get(e);if(r!==void 0)t=Tt[r],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Oh(t)}const XA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L0(s){return s.replace(XA,jA)}function jA(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function I0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const KA={[Jl]:"SHADOWMAP_TYPE_PCF",[ua]:"SHADOWMAP_TYPE_VSM"};function qA(s){return KA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const YA={[_s]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[vc]:"ENVMAP_TYPE_CUBE_UV"};function QA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":YA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const ZA={[po]:"ENVMAP_MODE_REFRACTION"};function JA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ZA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $A={[mg]:"ENVMAP_BLENDING_MULTIPLY",[Ex]:"ENVMAP_BLENDING_MIX",[wx]:"ENVMAP_BLENDING_ADD"};function eE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":$A[s.combine]||"ENVMAP_BLENDING_NONE"}function tE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function nE(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const p=qA(t),d=QA(t),m=JA(t),_=eE(t),g=tE(t),x=BA(t),S=zA(l),w=o.createProgram();let y,M,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(fa).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(fa).join(`
`),M.length>0&&(M+=`
`)):(y=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),M=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Yi?OA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,NA("linearToOutputTexel",t.outputColorSpace),kA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),c=Oh(c),c=b0(c,t),c=P0(c,t),f=Oh(f),f=b0(f,t),f=P0(f,t),c=L0(c),f=L0(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",t.glslVersion===Bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const P=C+y+c,L=C+M+f,X=T0(o,o.VERTEX_SHADER,P),U=T0(o,o.FRAGMENT_SHADER,L);o.attachShader(w,X),o.attachShader(w,U),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function z(B){if(s.debug.checkShaderErrors){const Y=o.getProgramInfoLog(w)||"",ue=o.getShaderInfoLog(X)||"",fe=o.getShaderInfoLog(U)||"",H=Y.trim(),ne=ue.trim(),W=fe.trim();let O=!0,F=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,X,U);else{const te=R0(o,X,"vertex"),I=R0(o,U,"fragment");Ut("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+H+`
`+te+`
`+I)}else H!==""?vt("WebGLProgram: Program Info Log:",H):(ne===""||W==="")&&(F=!1);F&&(B.diagnostics={runnable:O,programLog:H,vertexShader:{log:ne,prefix:y},fragmentShader:{log:W,prefix:M}})}o.deleteShader(X),o.deleteShader(U),E=new ic(o,w),N=HA(o,w)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let N;this.getAttributes=function(){return N===void 0&&z(this),N};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=o.getProgramParameter(w,LA)),Z},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=X,this.fragmentShader=U,this}let iE=0;class rE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new sE(e),t.set(e,r)),r}}class sE{constructor(e){this.id=iE++,this.code=e,this.usedTimes=0}}function oE(s){return s===xs||s===ac||s===lc}function aE(s,e,t,r,o,l){const c=new Ug,f=new rE,p=new Set,d=[],m=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return p.add(E),E===0?"uv":`uv${E}`}function w(E,N,Z,B,Y,ue){const fe=B.fog,H=Y.geometry,ne=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,O=e.get(E.envMap||ne,W),F=O&&O.mapping===vc?O.image.height:null,te=x[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&vt("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const I=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,V=I!==void 0?I.length:0;let Me=0;H.morphAttributes.position!==void 0&&(Me=1),H.morphAttributes.normal!==void 0&&(Me=2),H.morphAttributes.color!==void 0&&(Me=3);let Ae,xe,j,ae;if(te){const je=ji[te];Ae=je.vertexShader,xe=je.fragmentShader}else Ae=E.vertexShader,xe=E.fragmentShader,f.update(E),j=f.getVertexShaderID(E),ae=f.getFragmentShaderID(E);const G=s.getRenderTarget(),de=s.state.buffers.depth.getReversed(),Te=Y.isInstancedMesh===!0,pe=Y.isBatchedMesh===!0,Fe=!!E.map,Se=!!E.matcap,Ve=!!O,tt=!!E.aoMap,nt=!!E.lightMap,it=!!E.bumpMap,ct=!!E.normalMap,yt=!!E.displacementMap,D=!!E.emissiveMap,_t=!!E.metalnessMap,ot=!!E.roughnessMap,gt=E.anisotropy>0,Ee=E.clearcoat>0,lt=E.dispersion>0,b=E.iridescence>0,A=E.sheen>0,ie=E.transmission>0,_e=gt&&!!E.anisotropyMap,ye=Ee&&!!E.clearcoatMap,Re=Ee&&!!E.clearcoatNormalMap,Pe=Ee&&!!E.clearcoatRoughnessMap,me=b&&!!E.iridescenceMap,ve=b&&!!E.iridescenceThicknessMap,ze=A&&!!E.sheenColorMap,Xe=A&&!!E.sheenRoughnessMap,Ne=!!E.specularMap,Ue=!!E.specularColorMap,ut=!!E.specularIntensityMap,ft=ie&&!!E.transmissionMap,Mt=ie&&!!E.thicknessMap,K=!!E.gradientMap,De=!!E.alphaMap,he=E.alphaTest>0,We=!!E.alphaHash,Oe=!!E.extensions;let we=Yi;E.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(we=s.toneMapping);const qe={shaderID:te,shaderType:E.type,shaderName:E.name,vertexShader:Ae,fragmentShader:xe,defines:E.defines,customVertexShaderID:j,customFragmentShaderID:ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:pe,batchingColor:pe&&Y._colorsTexture!==null,instancing:Te,instancingColor:Te&&Y.instanceColor!==null,instancingMorph:Te&&Y.morphTexture!==null,outputColorSpace:G===null?s.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Fe,matcap:Se,envMap:Ve,envMapMode:Ve&&O.mapping,envMapCubeUVHeight:F,aoMap:tt,lightMap:nt,bumpMap:it,normalMap:ct,displacementMap:yt,emissiveMap:D,normalMapObjectSpace:ct&&E.normalMapType===Rx,normalMapTangentSpace:ct&&E.normalMapType===Nm,packedNormalMap:ct&&E.normalMapType===Nm&&oE(E.normalMap.format),metalnessMap:_t,roughnessMap:ot,anisotropy:gt,anisotropyMap:_e,clearcoat:Ee,clearcoatMap:ye,clearcoatNormalMap:Re,clearcoatRoughnessMap:Pe,dispersion:lt,iridescence:b,iridescenceMap:me,iridescenceThicknessMap:ve,sheen:A,sheenColorMap:ze,sheenRoughnessMap:Xe,specularMap:Ne,specularColorMap:Ue,specularIntensityMap:ut,transmission:ie,transmissionMap:ft,thicknessMap:Mt,gradientMap:K,opaque:E.transparent===!1&&E.blending===uo&&E.alphaToCoverage===!1,alphaMap:De,alphaTest:he,alphaHash:We,combine:E.combine,mapUv:Fe&&S(E.map.channel),aoMapUv:tt&&S(E.aoMap.channel),lightMapUv:nt&&S(E.lightMap.channel),bumpMapUv:it&&S(E.bumpMap.channel),normalMapUv:ct&&S(E.normalMap.channel),displacementMapUv:yt&&S(E.displacementMap.channel),emissiveMapUv:D&&S(E.emissiveMap.channel),metalnessMapUv:_t&&S(E.metalnessMap.channel),roughnessMapUv:ot&&S(E.roughnessMap.channel),anisotropyMapUv:_e&&S(E.anisotropyMap.channel),clearcoatMapUv:ye&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:Re&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&S(E.sheenRoughnessMap.channel),specularMapUv:Ne&&S(E.specularMap.channel),specularColorMapUv:Ue&&S(E.specularColorMap.channel),specularIntensityMapUv:ut&&S(E.specularIntensityMap.channel),transmissionMapUv:ft&&S(E.transmissionMap.channel),thicknessMapUv:Mt&&S(E.thicknessMap.channel),alphaMapUv:De&&S(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ct||gt),vertexNormals:!!H.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!H.attributes.uv&&(Fe||De),fog:!!fe,useFog:E.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||H.attributes.normal===void 0&&ct===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:de,skinning:Y.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Me,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&Z.length>0,shadowMapType:s.shadowMap.type,toneMapping:we,decodeVideoTexture:Fe&&E.map.isVideoTexture===!0&&Pt.getTransfer(E.map.colorSpace)===Vt,decodeVideoTextureEmissive:D&&E.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(E.emissiveMap.colorSpace)===Vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Fi,flipSided:E.side===Jn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Oe&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&E.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qe.vertexUv1s=p.has(1),qe.vertexUv2s=p.has(2),qe.vertexUv3s=p.has(3),p.clear(),qe}function y(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Z in E.defines)N.push(Z),N.push(E.defines[Z]);return E.isRawShaderMaterial===!1&&(M(N,E),C(N,E),N.push(s.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function M(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function C(E,N){c.disableAll(),N.instancing&&c.enable(0),N.instancingColor&&c.enable(1),N.instancingMorph&&c.enable(2),N.matcap&&c.enable(3),N.envMap&&c.enable(4),N.normalMapObjectSpace&&c.enable(5),N.normalMapTangentSpace&&c.enable(6),N.clearcoat&&c.enable(7),N.iridescence&&c.enable(8),N.alphaTest&&c.enable(9),N.vertexColors&&c.enable(10),N.vertexAlphas&&c.enable(11),N.vertexUv1s&&c.enable(12),N.vertexUv2s&&c.enable(13),N.vertexUv3s&&c.enable(14),N.vertexTangents&&c.enable(15),N.anisotropy&&c.enable(16),N.alphaHash&&c.enable(17),N.batching&&c.enable(18),N.dispersion&&c.enable(19),N.batchingColor&&c.enable(20),N.gradientMap&&c.enable(21),N.packedNormalMap&&c.enable(22),N.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.reversedDepthBuffer&&c.enable(4),N.skinning&&c.enable(5),N.morphTargets&&c.enable(6),N.morphNormals&&c.enable(7),N.morphColors&&c.enable(8),N.premultipliedAlpha&&c.enable(9),N.shadowMapEnabled&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.decodeVideoTextureEmissive&&c.enable(20),N.alphaToCoverage&&c.enable(21),N.numLightProbeGrids>0&&c.enable(22),E.push(c.mask)}function P(E){const N=x[E.type];let Z;if(N){const B=ji[N];Z=Ly.clone(B.uniforms)}else Z=E.uniforms;return Z}function L(E,N){let Z=m.get(N);return Z!==void 0?++Z.usedTimes:(Z=new nE(s,N,E,o),d.push(Z),m.set(N,Z)),Z}function X(E){if(--E.usedTimes===0){const N=d.indexOf(E);d[N]=d[d.length-1],d.pop(),m.delete(E.cacheKey),E.destroy()}}function U(E){f.remove(E)}function z(){f.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:P,acquireProgram:L,releaseProgram:X,releaseShaderCache:U,programs:d,dispose:z}}function lE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,p){s.get(c)[f]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function cE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function U0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function D0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function f(g,x,S,w,y,M){let C=s[e];return C===void 0?(C={id:g.id,object:g,geometry:x,material:S,materialVariant:c(g),groupOrder:w,renderOrder:g.renderOrder,z:y,group:M},s[e]=C):(C.id=g.id,C.object=g,C.geometry=x,C.material=S,C.materialVariant=c(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=y,C.group=M),e++,C}function p(g,x,S,w,y,M){const C=f(g,x,S,w,y,M);S.transmission>0?r.push(C):S.transparent===!0?o.push(C):t.push(C)}function d(g,x,S,w,y,M){const C=f(g,x,S,w,y,M);S.transmission>0?r.unshift(C):S.transparent===!0?o.unshift(C):t.unshift(C)}function m(g,x){t.length>1&&t.sort(g||cE),r.length>1&&r.sort(x||U0),o.length>1&&o.sort(x||U0)}function _(){for(let g=e,x=s.length;g<x;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:p,unshift:d,finish:_,sort:m}}function uE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new D0,s.set(r,[c])):o>=l.length?(c=new D0,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function fE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new zt};break;case"SpotLight":t={position:new J,direction:new J,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new zt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":t={color:new zt,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=t,t}}}function hE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let dE=0;function pE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mE(s){const e=new fE,t=hE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new J);const o=new J,l=new tn,c=new tn;function f(d){let m=0,_=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let x=0,S=0,w=0,y=0,M=0,C=0,P=0,L=0,X=0,U=0,z=0;d.sort(pE);for(let N=0,Z=d.length;N<Z;N++){const B=d[N],Y=B.color,ue=B.intensity,fe=B.distance;let H=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===xs?H=B.shadow.map.texture:H=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)m+=Y.r*ue,_+=Y.g*ue,g+=Y.b*ue;else if(B.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(B.sh.coefficients[ne],ue);z++}else if(B.isDirectionalLight){const ne=e.get(B);if(ne.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const W=B.shadow,O=t.get(B);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,r.directionalShadow[x]=O,r.directionalShadowMap[x]=H,r.directionalShadowMatrix[x]=B.shadow.matrix,C++}r.directional[x]=ne,x++}else if(B.isSpotLight){const ne=e.get(B);ne.position.setFromMatrixPosition(B.matrixWorld),ne.color.copy(Y).multiplyScalar(ue),ne.distance=fe,ne.coneCos=Math.cos(B.angle),ne.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ne.decay=B.decay,r.spot[w]=ne;const W=B.shadow;if(B.map&&(r.spotLightMap[X]=B.map,X++,W.updateMatrices(B),B.castShadow&&U++),r.spotLightMatrix[w]=W.matrix,B.castShadow){const O=t.get(B);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,r.spotShadow[w]=O,r.spotShadowMap[w]=H,L++}w++}else if(B.isRectAreaLight){const ne=e.get(B);ne.color.copy(Y).multiplyScalar(ue),ne.halfWidth.set(B.width*.5,0,0),ne.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=ne,y++}else if(B.isPointLight){const ne=e.get(B);if(ne.color.copy(B.color).multiplyScalar(B.intensity),ne.distance=B.distance,ne.decay=B.decay,B.castShadow){const W=B.shadow,O=t.get(B);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,O.shadowCameraNear=W.camera.near,O.shadowCameraFar=W.camera.far,r.pointShadow[S]=O,r.pointShadowMap[S]=H,r.pointShadowMatrix[S]=B.shadow.matrix,P++}r.point[S]=ne,S++}else if(B.isHemisphereLight){const ne=e.get(B);ne.skyColor.copy(B.color).multiplyScalar(ue),ne.groundColor.copy(B.groundColor).multiplyScalar(ue),r.hemi[M]=ne,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ke.LTC_FLOAT_1,r.rectAreaLTC2=Ke.LTC_FLOAT_2):(r.rectAreaLTC1=Ke.LTC_HALF_1,r.rectAreaLTC2=Ke.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=_,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==x||E.pointLength!==S||E.spotLength!==w||E.rectAreaLength!==y||E.hemiLength!==M||E.numDirectionalShadows!==C||E.numPointShadows!==P||E.numSpotShadows!==L||E.numSpotMaps!==X||E.numLightProbes!==z)&&(r.directional.length=x,r.spot.length=w,r.rectArea.length=y,r.point.length=S,r.hemi.length=M,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=L+X-U,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=z,E.directionalLength=x,E.pointLength=S,E.spotLength=w,E.rectAreaLength=y,E.hemiLength=M,E.numDirectionalShadows=C,E.numPointShadows=P,E.numSpotShadows=L,E.numSpotMaps=X,E.numLightProbes=z,r.version=dE++)}function p(d,m){let _=0,g=0,x=0,S=0,w=0;const y=m.matrixWorldInverse;for(let M=0,C=d.length;M<C;M++){const P=d[M];if(P.isDirectionalLight){const L=r.directional[_];L.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),_++}else if(P.isSpotLight){const L=r.spot[x];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),x++}else if(P.isRectAreaLight){const L=r.rectArea[S];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(y),c.identity(),l.copy(P.matrixWorld),l.premultiply(y),c.extractRotation(l),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),S++}else if(P.isPointLight){const L=r.point[g];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(y),g++}else if(P.isHemisphereLight){const L=r.hemi[w];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(y),w++}}}return{setup:f,setupView:p,state:r}}function N0(s){const e=new mE(s),t=[],r=[],o=[];function l(g){_.camera=g,t.length=0,r.length=0,o.length=0}function c(g){t.push(g)}function f(g){r.push(g)}function p(g){o.push(g)}function d(){e.setup(t)}function m(g){e.setupView(t,g)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f,pushLightProbeGrid:p}}function gE(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new N0(s),e.set(o,[f])):l>=c.length?(f=new N0(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const vE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_E=`uniform sampler2D shadow_pass;
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
}`,xE=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],yE=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],F0=new tn,oa=new J,Of=new J;function ME(s,e,t){let r=new zg;const o=new Dt,l=new Dt,c=new on,f=new Ny,p=new Fy,d={},m=t.maxTextureSize,_={[jr]:Jn,[Jn]:jr,[Fi]:Fi},g=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:vE,fragmentShader:_E}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const S=new Nn;S.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Fn(S,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl;let M=this.type;this.render=function(U,z,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===sx&&(vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jl);const N=s.getRenderTarget(),Z=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(mr),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ue=M!==this.type;ue&&z.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(H=>H.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,H=U.length;fe<H;fe++){const ne=U[fe],W=ne.shadow;if(W===void 0){vt("WebGLShadowMap:",ne,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const O=W.getFrameExtents();o.multiply(O),l.copy(W.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/O.x),o.x=l.x*O.x,W.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/O.y),o.y=l.y*O.y,W.mapSize.y=l.y));const F=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=F,W.map===null||ue===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ua){if(ne.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Zi(o.x,o.y,{format:xs,type:vr,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),W.map.texture.name=ne.name+".shadowMap",W.map.depthTexture=new mo(o.x,o.y,ki),W.map.depthTexture.name=ne.name+".shadowMapDepth",W.map.depthTexture.format=_r,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=dn,W.map.depthTexture.magFilter=dn}else ne.isPointLight?(W.map=new qg(o.x),W.map.depthTexture=new Cy(o.x,Ji)):(W.map=new Zi(o.x,o.y),W.map.depthTexture=new mo(o.x,o.y,Ji)),W.map.depthTexture.name=ne.name+".shadowMap",W.map.depthTexture.format=_r,this.type===Jl?(W.map.depthTexture.compareFunction=F?qh:Kh,W.map.depthTexture.minFilter=Mn,W.map.depthTexture.magFilter=Mn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=dn,W.map.depthTexture.magFilter=dn);W.camera.updateProjectionMatrix()}const te=W.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<te;I++){if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,I),s.clear();else{I===0&&(s.setRenderTarget(W.map),s.clear());const V=W.getViewport(I);c.set(l.x*V.x,l.y*V.y,l.x*V.z,l.y*V.w),Y.viewport(c)}if(ne.isPointLight){const V=W.camera,Me=W.matrix,Ae=ne.distance||V.far;Ae!==V.far&&(V.far=Ae,V.updateProjectionMatrix()),oa.setFromMatrixPosition(ne.matrixWorld),V.position.copy(oa),Of.copy(V.position),Of.add(xE[I]),V.up.copy(yE[I]),V.lookAt(Of),V.updateMatrixWorld(),Me.makeTranslation(-oa.x,-oa.y,-oa.z),F0.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),W._frustum.setFromProjectionMatrix(F0,V.coordinateSystem,V.reversedDepth)}else W.updateMatrices(ne);r=W.getFrustum(),L(z,E,W.camera,ne,this.type)}W.isPointLightShadow!==!0&&this.type===ua&&C(W,E),W.needsUpdate=!1}M=this.type,y.needsUpdate=!1,s.setRenderTarget(N,Z,B)};function C(U,z){const E=e.update(w);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,x.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Zi(o.x,o.y,{format:xs,type:vr})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(z,null,E,g,w,null),x.uniforms.shadow_pass.value=U.mapPass.texture,x.uniforms.resolution.value=U.mapSize,x.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(z,null,E,x,w,null)}function P(U,z,E,N){let Z=null;const B=E.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(B!==void 0)Z=B;else if(Z=E.isPointLight===!0?p:f,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Y=Z.uuid,ue=z.uuid;let fe=d[Y];fe===void 0&&(fe={},d[Y]=fe);let H=fe[ue];H===void 0&&(H=Z.clone(),fe[ue]=H,z.addEventListener("dispose",X)),Z=H}if(Z.visible=z.visible,Z.wireframe=z.wireframe,N===ua?Z.side=z.shadowSide!==null?z.shadowSide:z.side:Z.side=z.shadowSide!==null?z.shadowSide:_[z.side],Z.alphaMap=z.alphaMap,Z.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,Z.map=z.map,Z.clipShadows=z.clipShadows,Z.clippingPlanes=z.clippingPlanes,Z.clipIntersection=z.clipIntersection,Z.displacementMap=z.displacementMap,Z.displacementScale=z.displacementScale,Z.displacementBias=z.displacementBias,Z.wireframeLinewidth=z.wireframeLinewidth,Z.linewidth=z.linewidth,E.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const Y=s.properties.get(Z);Y.light=E}return Z}function L(U,z,E,N,Z){if(U.visible===!1)return;if(U.layers.test(z.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&Z===ua)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,U.matrixWorld);const ue=e.update(U),fe=U.material;if(Array.isArray(fe)){const H=ue.groups;for(let ne=0,W=H.length;ne<W;ne++){const O=H[ne],F=fe[O.materialIndex];if(F&&F.visible){const te=P(U,F,N,Z);U.onBeforeShadow(s,U,z,E,ue,te,O),s.renderBufferDirect(E,null,ue,te,U,O),U.onAfterShadow(s,U,z,E,ue,te,O)}}}else if(fe.visible){const H=P(U,fe,N,Z);U.onBeforeShadow(s,U,z,E,ue,H,null),s.renderBufferDirect(E,null,ue,H,U,null),U.onAfterShadow(s,U,z,E,ue,H,null)}}const Y=U.children;for(let ue=0,fe=Y.length;ue<fe;ue++)L(Y[ue],z,E,N,Z)}function X(U){U.target.removeEventListener("dispose",X);for(const E in d){const N=d[E],Z=U.target.uuid;Z in N&&(N[Z].dispose(),delete N[Z])}}}function SE(s,e){function t(){let K=!1;const De=new on;let he=null;const We=new on(0,0,0,0);return{setMask:function(Oe){he!==Oe&&!K&&(s.colorMask(Oe,Oe,Oe,Oe),he=Oe)},setLocked:function(Oe){K=Oe},setClear:function(Oe,we,qe,je,At){At===!0&&(Oe*=je,we*=je,qe*=je),De.set(Oe,we,qe,je),We.equals(De)===!1&&(s.clearColor(Oe,we,qe,je),We.copy(De))},reset:function(){K=!1,he=null,We.set(-1,0,0,0)}}}function r(){let K=!1,De=!1,he=null,We=null,Oe=null;return{setReversed:function(we){if(De!==we){const qe=e.get("EXT_clip_control");we?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),De=we;const je=Oe;Oe=null,this.setClear(je)}},getReversed:function(){return De},setTest:function(we){we?G(s.DEPTH_TEST):de(s.DEPTH_TEST)},setMask:function(we){he!==we&&!K&&(s.depthMask(we),he=we)},setFunc:function(we){if(De&&(we=kx[we]),We!==we){switch(we){case Qf:s.depthFunc(s.NEVER);break;case Zf:s.depthFunc(s.ALWAYS);break;case Jf:s.depthFunc(s.LESS);break;case ho:s.depthFunc(s.LEQUAL);break;case $f:s.depthFunc(s.EQUAL);break;case eh:s.depthFunc(s.GEQUAL);break;case th:s.depthFunc(s.GREATER);break;case nh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}We=we}},setLocked:function(we){K=we},setClear:function(we){Oe!==we&&(Oe=we,De&&(we=1-we),s.clearDepth(we))},reset:function(){K=!1,he=null,We=null,Oe=null,De=!1}}}function o(){let K=!1,De=null,he=null,We=null,Oe=null,we=null,qe=null,je=null,At=null;return{setTest:function(Lt){K||(Lt?G(s.STENCIL_TEST):de(s.STENCIL_TEST))},setMask:function(Lt){De!==Lt&&!K&&(s.stencilMask(Lt),De=Lt)},setFunc:function(Lt,an,On){(he!==Lt||We!==an||Oe!==On)&&(s.stencilFunc(Lt,an,On),he=Lt,We=an,Oe=On)},setOp:function(Lt,an,On){(we!==Lt||qe!==an||je!==On)&&(s.stencilOp(Lt,an,On),we=Lt,qe=an,je=On)},setLocked:function(Lt){K=Lt},setClear:function(Lt){At!==Lt&&(s.clearStencil(Lt),At=Lt)},reset:function(){K=!1,De=null,he=null,We=null,Oe=null,we=null,qe=null,je=null,At=null}}}const l=new t,c=new r,f=new o,p=new WeakMap,d=new WeakMap;let m={},_={},g={},x=new WeakMap,S=[],w=null,y=!1,M=null,C=null,P=null,L=null,X=null,U=null,z=null,E=new zt(0,0,0),N=0,Z=!1,B=null,Y=null,ue=null,fe=null,H=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,O=0;const F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(F)[1]),W=O>=1):F.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),W=O>=2);let te=null,I={};const V=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),Ae=new on().fromArray(V),xe=new on().fromArray(Me);function j(K,De,he,We){const Oe=new Uint8Array(4),we=s.createTexture();s.bindTexture(K,we),s.texParameteri(K,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(K,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<he;qe++)K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,We,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(De+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return we}const ae={};ae[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),G(s.DEPTH_TEST),c.setFunc(ho),it(!1),ct(Lm),G(s.CULL_FACE),tt(mr);function G(K){m[K]!==!0&&(s.enable(K),m[K]=!0)}function de(K){m[K]!==!1&&(s.disable(K),m[K]=!1)}function Te(K,De){return g[K]!==De?(s.bindFramebuffer(K,De),g[K]=De,K===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=De),K===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=De),!0):!1}function pe(K,De){let he=S,We=!1;if(K){he=x.get(De),he===void 0&&(he=[],x.set(De,he));const Oe=K.textures;if(he.length!==Oe.length||he[0]!==s.COLOR_ATTACHMENT0){for(let we=0,qe=Oe.length;we<qe;we++)he[we]=s.COLOR_ATTACHMENT0+we;he.length=Oe.length,We=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,We=!0);We&&s.drawBuffers(he)}function Fe(K){return w!==K?(s.useProgram(K),w=K,!0):!1}const Se={[ps]:s.FUNC_ADD,[ax]:s.FUNC_SUBTRACT,[lx]:s.FUNC_REVERSE_SUBTRACT};Se[cx]=s.MIN,Se[ux]=s.MAX;const Ve={[fx]:s.ZERO,[hx]:s.ONE,[dx]:s.SRC_COLOR,[qf]:s.SRC_ALPHA,[xx]:s.SRC_ALPHA_SATURATE,[vx]:s.DST_COLOR,[mx]:s.DST_ALPHA,[px]:s.ONE_MINUS_SRC_COLOR,[Yf]:s.ONE_MINUS_SRC_ALPHA,[_x]:s.ONE_MINUS_DST_COLOR,[gx]:s.ONE_MINUS_DST_ALPHA,[yx]:s.CONSTANT_COLOR,[Mx]:s.ONE_MINUS_CONSTANT_COLOR,[Sx]:s.CONSTANT_ALPHA,[Ax]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(K,De,he,We,Oe,we,qe,je,At,Lt){if(K===mr){y===!0&&(de(s.BLEND),y=!1);return}if(y===!1&&(G(s.BLEND),y=!0),K!==ox){if(K!==M||Lt!==Z){if((C!==ps||X!==ps)&&(s.blendEquation(s.FUNC_ADD),C=ps,X=ps),Lt)switch(K){case uo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Im:s.blendFunc(s.ONE,s.ONE);break;case Um:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",K);break}else switch(K){case uo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Im:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Um:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dm:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",K);break}P=null,L=null,U=null,z=null,E.set(0,0,0),N=0,M=K,Z=Lt}return}Oe=Oe||De,we=we||he,qe=qe||We,(De!==C||Oe!==X)&&(s.blendEquationSeparate(Se[De],Se[Oe]),C=De,X=Oe),(he!==P||We!==L||we!==U||qe!==z)&&(s.blendFuncSeparate(Ve[he],Ve[We],Ve[we],Ve[qe]),P=he,L=We,U=we,z=qe),(je.equals(E)===!1||At!==N)&&(s.blendColor(je.r,je.g,je.b,At),E.copy(je),N=At),M=K,Z=!1}function nt(K,De){K.side===Fi?de(s.CULL_FACE):G(s.CULL_FACE);let he=K.side===Jn;De&&(he=!he),it(he),K.blending===uo&&K.transparent===!1?tt(mr):tt(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),c.setFunc(K.depthFunc),c.setTest(K.depthTest),c.setMask(K.depthWrite),l.setMask(K.colorWrite);const We=K.stencilWrite;f.setTest(We),We&&(f.setMask(K.stencilWriteMask),f.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),f.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),D(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?G(s.SAMPLE_ALPHA_TO_COVERAGE):de(s.SAMPLE_ALPHA_TO_COVERAGE)}function it(K){B!==K&&(K?s.frontFace(s.CW):s.frontFace(s.CCW),B=K)}function ct(K){K!==ix?(G(s.CULL_FACE),K!==Y&&(K===Lm?s.cullFace(s.BACK):K===rx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):de(s.CULL_FACE),Y=K}function yt(K){K!==ue&&(W&&s.lineWidth(K),ue=K)}function D(K,De,he){K?(G(s.POLYGON_OFFSET_FILL),(fe!==De||H!==he)&&(fe=De,H=he,c.getReversed()&&(De=-De),s.polygonOffset(De,he))):de(s.POLYGON_OFFSET_FILL)}function _t(K){K?G(s.SCISSOR_TEST):de(s.SCISSOR_TEST)}function ot(K){K===void 0&&(K=s.TEXTURE0+ne-1),te!==K&&(s.activeTexture(K),te=K)}function gt(K,De,he){he===void 0&&(te===null?he=s.TEXTURE0+ne-1:he=te);let We=I[he];We===void 0&&(We={type:void 0,texture:void 0},I[he]=We),(We.type!==K||We.texture!==De)&&(te!==he&&(s.activeTexture(he),te=he),s.bindTexture(K,De||ae[K]),We.type=K,We.texture=De)}function Ee(){const K=I[te];K!==void 0&&K.type!==void 0&&(s.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function lt(){try{s.compressedTexImage2D(...arguments)}catch(K){Ut("WebGLState:",K)}}function b(){try{s.compressedTexImage3D(...arguments)}catch(K){Ut("WebGLState:",K)}}function A(){try{s.texSubImage2D(...arguments)}catch(K){Ut("WebGLState:",K)}}function ie(){try{s.texSubImage3D(...arguments)}catch(K){Ut("WebGLState:",K)}}function _e(){try{s.compressedTexSubImage2D(...arguments)}catch(K){Ut("WebGLState:",K)}}function ye(){try{s.compressedTexSubImage3D(...arguments)}catch(K){Ut("WebGLState:",K)}}function Re(){try{s.texStorage2D(...arguments)}catch(K){Ut("WebGLState:",K)}}function Pe(){try{s.texStorage3D(...arguments)}catch(K){Ut("WebGLState:",K)}}function me(){try{s.texImage2D(...arguments)}catch(K){Ut("WebGLState:",K)}}function ve(){try{s.texImage3D(...arguments)}catch(K){Ut("WebGLState:",K)}}function ze(K){return _[K]!==void 0?_[K]:s.getParameter(K)}function Xe(K,De){_[K]!==De&&(s.pixelStorei(K,De),_[K]=De)}function Ne(K){Ae.equals(K)===!1&&(s.scissor(K.x,K.y,K.z,K.w),Ae.copy(K))}function Ue(K){xe.equals(K)===!1&&(s.viewport(K.x,K.y,K.z,K.w),xe.copy(K))}function ut(K,De){let he=d.get(De);he===void 0&&(he=new WeakMap,d.set(De,he));let We=he.get(K);We===void 0&&(We=s.getUniformBlockIndex(De,K.name),he.set(K,We))}function ft(K,De){const We=d.get(De).get(K);p.get(De)!==We&&(s.uniformBlockBinding(De,We,K.__bindingPointIndex),p.set(De,We))}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),m={},_={},te=null,I={},g={},x=new WeakMap,S=[],w=null,y=!1,M=null,C=null,P=null,L=null,X=null,U=null,z=null,E=new zt(0,0,0),N=0,Z=!1,B=null,Y=null,ue=null,fe=null,H=null,Ae.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:G,disable:de,bindFramebuffer:Te,drawBuffers:pe,useProgram:Fe,setBlending:tt,setMaterial:nt,setFlipSided:it,setCullFace:ct,setLineWidth:yt,setPolygonOffset:D,setScissorTest:_t,activeTexture:ot,bindTexture:gt,unbindTexture:Ee,compressedTexImage2D:lt,compressedTexImage3D:b,texImage2D:me,texImage3D:ve,pixelStorei:Xe,getParameter:ze,updateUBOMapping:ut,uniformBlockBinding:ft,texStorage2D:Re,texStorage3D:Pe,texSubImage2D:A,texSubImage3D:ie,compressedTexSubImage2D:_e,compressedTexSubImage3D:ye,scissor:Ne,viewport:Ue,reset:Mt}}function AE(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Dt,m=new WeakMap,_=new Set;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,A){return S?new OffscreenCanvas(b,A):hc("canvas")}function y(b,A,ie){let _e=1;const ye=lt(b);if((ye.width>ie||ye.height>ie)&&(_e=ie/Math.max(ye.width,ye.height)),_e<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Re=Math.floor(_e*ye.width),Pe=Math.floor(_e*ye.height);g===void 0&&(g=w(Re,Pe));const me=A?w(Re,Pe):g;return me.width=Re,me.height=Pe,me.getContext("2d").drawImage(b,0,0,Re,Pe),vt("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+Re+"x"+Pe+")."),me}else return"data"in b&&vt("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),b;return b}function M(b){return b.generateMipmaps}function C(b){s.generateMipmap(b)}function P(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(b,A,ie,_e,ye,Re=!1){if(b!==null){if(s[b]!==void 0)return s[b];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Pe;_e&&(Pe=e.get("EXT_texture_norm16"),Pe||vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=A;if(A===s.RED&&(ie===s.FLOAT&&(me=s.R32F),ie===s.HALF_FLOAT&&(me=s.R16F),ie===s.UNSIGNED_BYTE&&(me=s.R8),ie===s.UNSIGNED_SHORT&&Pe&&(me=Pe.R16_EXT),ie===s.SHORT&&Pe&&(me=Pe.R16_SNORM_EXT)),A===s.RED_INTEGER&&(ie===s.UNSIGNED_BYTE&&(me=s.R8UI),ie===s.UNSIGNED_SHORT&&(me=s.R16UI),ie===s.UNSIGNED_INT&&(me=s.R32UI),ie===s.BYTE&&(me=s.R8I),ie===s.SHORT&&(me=s.R16I),ie===s.INT&&(me=s.R32I)),A===s.RG&&(ie===s.FLOAT&&(me=s.RG32F),ie===s.HALF_FLOAT&&(me=s.RG16F),ie===s.UNSIGNED_BYTE&&(me=s.RG8),ie===s.UNSIGNED_SHORT&&Pe&&(me=Pe.RG16_EXT),ie===s.SHORT&&Pe&&(me=Pe.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(ie===s.UNSIGNED_BYTE&&(me=s.RG8UI),ie===s.UNSIGNED_SHORT&&(me=s.RG16UI),ie===s.UNSIGNED_INT&&(me=s.RG32UI),ie===s.BYTE&&(me=s.RG8I),ie===s.SHORT&&(me=s.RG16I),ie===s.INT&&(me=s.RG32I)),A===s.RGB_INTEGER&&(ie===s.UNSIGNED_BYTE&&(me=s.RGB8UI),ie===s.UNSIGNED_SHORT&&(me=s.RGB16UI),ie===s.UNSIGNED_INT&&(me=s.RGB32UI),ie===s.BYTE&&(me=s.RGB8I),ie===s.SHORT&&(me=s.RGB16I),ie===s.INT&&(me=s.RGB32I)),A===s.RGBA_INTEGER&&(ie===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),ie===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),ie===s.UNSIGNED_INT&&(me=s.RGBA32UI),ie===s.BYTE&&(me=s.RGBA8I),ie===s.SHORT&&(me=s.RGBA16I),ie===s.INT&&(me=s.RGBA32I)),A===s.RGB&&(ie===s.UNSIGNED_SHORT&&Pe&&(me=Pe.RGB16_EXT),ie===s.SHORT&&Pe&&(me=Pe.RGB16_SNORM_EXT),ie===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),ie===s.UNSIGNED_INT_10F_11F_11F_REV&&(me=s.R11F_G11F_B10F)),A===s.RGBA){const ve=Re?uc:Pt.getTransfer(ye);ie===s.FLOAT&&(me=s.RGBA32F),ie===s.HALF_FLOAT&&(me=s.RGBA16F),ie===s.UNSIGNED_BYTE&&(me=ve===Vt?s.SRGB8_ALPHA8:s.RGBA8),ie===s.UNSIGNED_SHORT&&Pe&&(me=Pe.RGBA16_EXT),ie===s.SHORT&&Pe&&(me=Pe.RGBA16_SNORM_EXT),ie===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),ie===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function X(b,A){let ie;return b?A===null||A===Ji||A===ga?ie=s.DEPTH24_STENCIL8:A===ki?ie=s.DEPTH32F_STENCIL8:A===ma&&(ie=s.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ji||A===ga?ie=s.DEPTH_COMPONENT24:A===ki?ie=s.DEPTH_COMPONENT32F:A===ma&&(ie=s.DEPTH_COMPONENT16),ie}function U(b,A){return M(b)===!0||b.isFramebufferTexture&&b.minFilter!==dn&&b.minFilter!==Mn?Math.log2(Math.max(A.width,A.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?A.mipmaps.length:1}function z(b){const A=b.target;A.removeEventListener("dispose",z),N(A),A.isVideoTexture&&m.delete(A),A.isHTMLTexture&&_.delete(A)}function E(b){const A=b.target;A.removeEventListener("dispose",E),B(A)}function N(b){const A=r.get(b);if(A.__webglInit===void 0)return;const ie=b.source,_e=x.get(ie);if(_e){const ye=_e[A.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&Z(b),Object.keys(_e).length===0&&x.delete(ie)}r.remove(b)}function Z(b){const A=r.get(b);s.deleteTexture(A.__webglTexture);const ie=b.source,_e=x.get(ie);delete _e[A.__cacheKey],c.memory.textures--}function B(b){const A=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(A.__webglFramebuffer[_e]))for(let ye=0;ye<A.__webglFramebuffer[_e].length;ye++)s.deleteFramebuffer(A.__webglFramebuffer[_e][ye]);else s.deleteFramebuffer(A.__webglFramebuffer[_e]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[_e])}else{if(Array.isArray(A.__webglFramebuffer))for(let _e=0;_e<A.__webglFramebuffer.length;_e++)s.deleteFramebuffer(A.__webglFramebuffer[_e]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _e=0;_e<A.__webglColorRenderbuffer.length;_e++)A.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[_e]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ie=b.textures;for(let _e=0,ye=ie.length;_e<ye;_e++){const Re=r.get(ie[_e]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),c.memory.textures--),r.remove(ie[_e])}r.remove(b)}let Y=0;function ue(){Y=0}function fe(){return Y}function H(b){Y=b}function ne(){const b=Y;return b>=o.maxTextures&&vt("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+o.maxTextures),Y+=1,b}function W(b){const A=[];return A.push(b.wrapS),A.push(b.wrapT),A.push(b.wrapR||0),A.push(b.magFilter),A.push(b.minFilter),A.push(b.anisotropy),A.push(b.internalFormat),A.push(b.format),A.push(b.type),A.push(b.generateMipmaps),A.push(b.premultiplyAlpha),A.push(b.flipY),A.push(b.unpackAlignment),A.push(b.colorSpace),A.join()}function O(b,A){const ie=r.get(b);if(b.isVideoTexture&&gt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&ie.__version!==b.version){const _e=b.image;if(_e===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{de(ie,b,A);return}}else b.isExternalTexture&&(ie.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture,s.TEXTURE0+A)}function F(b,A){const ie=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&ie.__version!==b.version){de(ie,b,A);return}else b.isExternalTexture&&(ie.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ie.__webglTexture,s.TEXTURE0+A)}function te(b,A){const ie=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&ie.__version!==b.version){de(ie,b,A);return}t.bindTexture(s.TEXTURE_3D,ie.__webglTexture,s.TEXTURE0+A)}function I(b,A){const ie=r.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&ie.__version!==b.version){Te(ie,b,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture,s.TEXTURE0+A)}const V={[oc]:s.REPEAT,[pr]:s.CLAMP_TO_EDGE,[ih]:s.MIRRORED_REPEAT},Me={[dn]:s.NEAREST,[Tx]:s.NEAREST_MIPMAP_NEAREST,[Al]:s.NEAREST_MIPMAP_LINEAR,[Mn]:s.LINEAR,[rf]:s.LINEAR_MIPMAP_NEAREST,[gs]:s.LINEAR_MIPMAP_LINEAR},Ae={[bx]:s.NEVER,[Dx]:s.ALWAYS,[Px]:s.LESS,[Kh]:s.LEQUAL,[Lx]:s.EQUAL,[qh]:s.GEQUAL,[Ix]:s.GREATER,[Ux]:s.NOTEQUAL};function xe(b,A){if(A.type===ki&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Mn||A.magFilter===rf||A.magFilter===Al||A.magFilter===gs||A.minFilter===Mn||A.minFilter===rf||A.minFilter===Al||A.minFilter===gs)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,V[A.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,V[A.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,V[A.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,Me[A.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,Me[A.minFilter]),A.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,Ae[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===dn||A.minFilter!==Al&&A.minFilter!==gs||A.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function j(b,A){let ie=!1;b.__webglInit===void 0&&(b.__webglInit=!0,A.addEventListener("dispose",z));const _e=A.source;let ye=x.get(_e);ye===void 0&&(ye={},x.set(_e,ye));const Re=W(A);if(Re!==b.__cacheKey){ye[Re]===void 0&&(ye[Re]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ie=!0),ye[Re].usedTimes++;const Pe=ye[b.__cacheKey];Pe!==void 0&&(ye[b.__cacheKey].usedTimes--,Pe.usedTimes===0&&Z(A)),b.__cacheKey=Re,b.__webglTexture=ye[Re].texture}return ie}function ae(b,A,ie){return Math.floor(Math.floor(b/ie)/A)}function G(b,A,ie,_e){const Re=b.updateRanges;if(Re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,ie,_e,A.data);else{Re.sort((Xe,Ne)=>Xe.start-Ne.start);let Pe=0;for(let Xe=1;Xe<Re.length;Xe++){const Ne=Re[Pe],Ue=Re[Xe],ut=Ne.start+Ne.count,ft=ae(Ue.start,A.width,4),Mt=ae(Ne.start,A.width,4);Ue.start<=ut+1&&ft===Mt&&ae(Ue.start+Ue.count-1,A.width,4)===ft?Ne.count=Math.max(Ne.count,Ue.start+Ue.count-Ne.start):(++Pe,Re[Pe]=Ue)}Re.length=Pe+1;const me=t.getParameter(s.UNPACK_ROW_LENGTH),ve=t.getParameter(s.UNPACK_SKIP_PIXELS),ze=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Xe=0,Ne=Re.length;Xe<Ne;Xe++){const Ue=Re[Xe],ut=Math.floor(Ue.start/4),ft=Math.ceil(Ue.count/4),Mt=ut%A.width,K=Math.floor(ut/A.width),De=ft,he=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Mt),t.pixelStorei(s.UNPACK_SKIP_ROWS,K),t.texSubImage2D(s.TEXTURE_2D,0,Mt,K,De,he,ie,_e,A.data)}b.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,me),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(s.UNPACK_SKIP_ROWS,ze)}}function de(b,A,ie){let _e=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_e=s.TEXTURE_3D);const ye=j(b,A),Re=A.source;t.bindTexture(_e,b.__webglTexture,s.TEXTURE0+ie);const Pe=r.get(Re);if(Re.version!==Pe.__version||ye===!0){if(t.activeTexture(s.TEXTURE0+ie),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const he=Pt.getPrimaries(Pt.workingColorSpace),We=A.colorSpace===Wr?null:Pt.getPrimaries(A.colorSpace),Oe=A.colorSpace===Wr||he===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let ve=y(A.image,!1,o.maxTextureSize);ve=Ee(A,ve);const ze=l.convert(A.format,A.colorSpace),Xe=l.convert(A.type);let Ne=L(A.internalFormat,ze,Xe,A.normalized,A.colorSpace,A.isVideoTexture);xe(_e,A);let Ue;const ut=A.mipmaps,ft=A.isVideoTexture!==!0,Mt=Pe.__version===void 0||ye===!0,K=Re.dataReady,De=U(A,ve);if(A.isDepthTexture)Ne=X(A.format===vs,A.type),Mt&&(ft?t.texStorage2D(s.TEXTURE_2D,1,Ne,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,Ne,ve.width,ve.height,0,ze,Xe,null));else if(A.isDataTexture)if(ut.length>0){ft&&Mt&&t.texStorage2D(s.TEXTURE_2D,De,Ne,ut[0].width,ut[0].height);for(let he=0,We=ut.length;he<We;he++)Ue=ut[he],ft?K&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ue.width,Ue.height,ze,Xe,Ue.data):t.texImage2D(s.TEXTURE_2D,he,Ne,Ue.width,Ue.height,0,ze,Xe,Ue.data);A.generateMipmaps=!1}else ft?(Mt&&t.texStorage2D(s.TEXTURE_2D,De,Ne,ve.width,ve.height),K&&G(A,ve,ze,Xe)):t.texImage2D(s.TEXTURE_2D,0,Ne,ve.width,ve.height,0,ze,Xe,ve.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ft&&Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Ne,ut[0].width,ut[0].height,ve.depth);for(let he=0,We=ut.length;he<We;he++)if(Ue=ut[he],A.format!==yi)if(ze!==null)if(ft){if(K)if(A.layerUpdates.size>0){const Oe=d0(Ue.width,Ue.height,A.format,A.type);for(const we of A.layerUpdates){const qe=Ue.data.subarray(we*Oe/Ue.data.BYTES_PER_ELEMENT,(we+1)*Oe/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,we,Ue.width,Ue.height,1,ze,qe)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ue.width,Ue.height,ve.depth,ze,Ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,Ne,Ue.width,Ue.height,ve.depth,0,Ue.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?K&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ue.width,Ue.height,ve.depth,ze,Xe,Ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,Ne,Ue.width,Ue.height,ve.depth,0,ze,Xe,Ue.data)}else{ft&&Mt&&t.texStorage2D(s.TEXTURE_2D,De,Ne,ut[0].width,ut[0].height);for(let he=0,We=ut.length;he<We;he++)Ue=ut[he],A.format!==yi?ze!==null?ft?K&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Ue.width,Ue.height,ze,Ue.data):t.compressedTexImage2D(s.TEXTURE_2D,he,Ne,Ue.width,Ue.height,0,Ue.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?K&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ue.width,Ue.height,ze,Xe,Ue.data):t.texImage2D(s.TEXTURE_2D,he,Ne,Ue.width,Ue.height,0,ze,Xe,Ue.data)}else if(A.isDataArrayTexture)if(ft){if(Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Ne,ve.width,ve.height,ve.depth),K)if(A.layerUpdates.size>0){const he=d0(ve.width,ve.height,A.format,A.type);for(const We of A.layerUpdates){const Oe=ve.data.subarray(We*he/ve.data.BYTES_PER_ELEMENT,(We+1)*he/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,We,ve.width,ve.height,1,ze,Xe,Oe)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,ze,Xe,ve.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,ve.width,ve.height,ve.depth,0,ze,Xe,ve.data);else if(A.isData3DTexture)ft?(Mt&&t.texStorage3D(s.TEXTURE_3D,De,Ne,ve.width,ve.height,ve.depth),K&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,ze,Xe,ve.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,ve.width,ve.height,ve.depth,0,ze,Xe,ve.data);else if(A.isFramebufferTexture){if(Mt)if(ft)t.texStorage2D(s.TEXTURE_2D,De,Ne,ve.width,ve.height);else{let he=ve.width,We=ve.height;for(let Oe=0;Oe<De;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,Ne,he,We,0,ze,Xe,null),he>>=1,We>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){const he=s.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),ve.parentNode!==he){he.appendChild(ve),_.add(A),he.onpaint=je=>{const At=je.changedElements;for(const Lt of _)At.includes(Lt.image)&&(Lt.needsUpdate=!0)},he.requestPaint();return}const We=0,Oe=s.RGBA,we=s.RGBA,qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,We,Oe,we,qe,ve),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ut.length>0){if(ft&&Mt){const he=lt(ut[0]);t.texStorage2D(s.TEXTURE_2D,De,Ne,he.width,he.height)}for(let he=0,We=ut.length;he<We;he++)Ue=ut[he],ft?K&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,ze,Xe,Ue):t.texImage2D(s.TEXTURE_2D,he,Ne,ze,Xe,Ue);A.generateMipmaps=!1}else if(ft){if(Mt){const he=lt(ve);t.texStorage2D(s.TEXTURE_2D,De,Ne,he.width,he.height)}K&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Xe,ve)}else t.texImage2D(s.TEXTURE_2D,0,Ne,ze,Xe,ve);M(A)&&C(_e),Pe.__version=Re.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function Te(b,A,ie){if(A.image.length!==6)return;const _e=j(b,A),ye=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+ie);const Re=r.get(ye);if(ye.version!==Re.__version||_e===!0){t.activeTexture(s.TEXTURE0+ie);const Pe=Pt.getPrimaries(Pt.workingColorSpace),me=A.colorSpace===Wr?null:Pt.getPrimaries(A.colorSpace),ve=A.colorSpace===Wr||Pe===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const ze=A.isCompressedTexture||A.image[0].isCompressedTexture,Xe=A.image[0]&&A.image[0].isDataTexture,Ne=[];for(let we=0;we<6;we++)!ze&&!Xe?Ne[we]=y(A.image[we],!0,o.maxCubemapSize):Ne[we]=Xe?A.image[we].image:A.image[we],Ne[we]=Ee(A,Ne[we]);const Ue=Ne[0],ut=l.convert(A.format,A.colorSpace),ft=l.convert(A.type),Mt=L(A.internalFormat,ut,ft,A.normalized,A.colorSpace),K=A.isVideoTexture!==!0,De=Re.__version===void 0||_e===!0,he=ye.dataReady;let We=U(A,Ue);xe(s.TEXTURE_CUBE_MAP,A);let Oe;if(ze){K&&De&&t.texStorage2D(s.TEXTURE_CUBE_MAP,We,Mt,Ue.width,Ue.height);for(let we=0;we<6;we++){Oe=Ne[we].mipmaps;for(let qe=0;qe<Oe.length;qe++){const je=Oe[qe];A.format!==yi?ut!==null?K?he&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe,0,0,je.width,je.height,ut,je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe,Mt,je.width,je.height,0,je.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe,0,0,je.width,je.height,ut,ft,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe,Mt,je.width,je.height,0,ut,ft,je.data)}}}else{if(Oe=A.mipmaps,K&&De){Oe.length>0&&We++;const we=lt(Ne[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,We,Mt,we.width,we.height)}for(let we=0;we<6;we++)if(Xe){K?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Ne[we].width,Ne[we].height,ut,ft,Ne[we].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Mt,Ne[we].width,Ne[we].height,0,ut,ft,Ne[we].data);for(let qe=0;qe<Oe.length;qe++){const At=Oe[qe].image[we].image;K?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe+1,0,0,At.width,At.height,ut,ft,At.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe+1,Mt,At.width,At.height,0,ut,ft,At.data)}}else{K?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ut,ft,Ne[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Mt,ut,ft,Ne[we]);for(let qe=0;qe<Oe.length;qe++){const je=Oe[qe];K?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe+1,0,0,ut,ft,je.image[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe+1,Mt,ut,ft,je.image[we])}}}M(A)&&C(s.TEXTURE_CUBE_MAP),Re.__version=ye.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function pe(b,A,ie,_e,ye,Re){const Pe=l.convert(ie.format,ie.colorSpace),me=l.convert(ie.type),ve=L(ie.internalFormat,Pe,me,ie.normalized,ie.colorSpace),ze=r.get(A),Xe=r.get(ie);if(Xe.__renderTarget=A,!ze.__hasExternalTextures){const Ne=Math.max(1,A.width>>Re),Ue=Math.max(1,A.height>>Re);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?t.texImage3D(ye,Re,ve,Ne,Ue,A.depth,0,Pe,me,null):t.texImage2D(ye,Re,ve,Ne,Ue,0,Pe,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),ot(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,ye,Xe.__webglTexture,0,_t(A)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,ye,Xe.__webglTexture,Re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(b,A,ie){if(s.bindRenderbuffer(s.RENDERBUFFER,b),A.depthBuffer){const _e=A.depthTexture,ye=_e&&_e.isDepthTexture?_e.type:null,Re=X(A.stencilBuffer,ye),Pe=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ot(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t(A),Re,A.width,A.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t(A),Re,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Re,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,b)}else{const _e=A.textures;for(let ye=0;ye<_e.length;ye++){const Re=_e[ye],Pe=l.convert(Re.format,Re.colorSpace),me=l.convert(Re.type),ve=L(Re.internalFormat,Pe,me,Re.normalized,Re.colorSpace);ot(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t(A),ve,A.width,A.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t(A),ve,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ve,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(b,A,ie){const _e=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(A.depthTexture);if(ye.__renderTarget=A,(!ye.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),_e){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,A.depthTexture.addEventListener("dispose",z)),ye.__webglTexture===void 0){ye.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),xe(s.TEXTURE_CUBE_MAP,A.depthTexture);const ze=l.convert(A.depthTexture.format),Xe=l.convert(A.depthTexture.type);let Ne;A.depthTexture.format===_r?Ne=s.DEPTH_COMPONENT24:A.depthTexture.format===vs&&(Ne=s.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ne,A.width,A.height,0,ze,Xe,null)}}else O(A.depthTexture,0);const Re=ye.__webglTexture,Pe=_t(A),me=_e?s.TEXTURE_CUBE_MAP_POSITIVE_X+ie:s.TEXTURE_2D,ve=A.depthTexture.format===vs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===_r)ot(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,me,Re,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,ve,me,Re,0);else if(A.depthTexture.format===vs)ot(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,me,Re,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,ve,me,Re,0);else throw new Error("Unknown depthTexture format")}function Ve(b){const A=r.get(b),ie=b.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==b.depthTexture){const _e=b.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_e){const ye=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_e.removeEventListener("dispose",ye)};_e.addEventListener("dispose",ye),A.__depthDisposeCallback=ye}A.__boundDepthTexture=_e}if(b.depthTexture&&!A.__autoAllocateDepthBuffer)if(ie)for(let _e=0;_e<6;_e++)Se(A.__webglFramebuffer[_e],b,_e);else{const _e=b.texture.mipmaps;_e&&_e.length>0?Se(A.__webglFramebuffer[0],b,0):Se(A.__webglFramebuffer,b,0)}else if(ie){A.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[_e]),A.__webglDepthbuffer[_e]===void 0)A.__webglDepthbuffer[_e]=s.createRenderbuffer(),Fe(A.__webglDepthbuffer[_e],b,!1);else{const ye=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=A.__webglDepthbuffer[_e];s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,Re)}}else{const _e=b.texture.mipmaps;if(_e&&_e.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Fe(A.__webglDepthbuffer,b,!1);else{const ye=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,Re)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(b,A,ie){const _e=r.get(b);A!==void 0&&pe(_e.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ie!==void 0&&Ve(b)}function nt(b){const A=b.texture,ie=r.get(b),_e=r.get(A);b.addEventListener("dispose",E);const ye=b.textures,Re=b.isWebGLCubeRenderTarget===!0,Pe=ye.length>1;if(Pe||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=A.version,c.memory.textures++),Re){ie.__webglFramebuffer=[];for(let me=0;me<6;me++)if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer[me]=[];for(let ve=0;ve<A.mipmaps.length;ve++)ie.__webglFramebuffer[me][ve]=s.createFramebuffer()}else ie.__webglFramebuffer[me]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer=[];for(let me=0;me<A.mipmaps.length;me++)ie.__webglFramebuffer[me]=s.createFramebuffer()}else ie.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let me=0,ve=ye.length;me<ve;me++){const ze=r.get(ye[me]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),c.memory.textures++)}if(b.samples>0&&ot(b)===!1){ie.__webglMultisampledFramebuffer=s.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let me=0;me<ye.length;me++){const ve=ye[me];ie.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ie.__webglColorRenderbuffer[me]);const ze=l.convert(ve.format,ve.colorSpace),Xe=l.convert(ve.type),Ne=L(ve.internalFormat,ze,Xe,ve.normalized,ve.colorSpace,b.isXRRenderTarget===!0),Ue=_t(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,Ne,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,ie.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(ie.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(ie.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Re){t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),xe(s.TEXTURE_CUBE_MAP,A);for(let me=0;me<6;me++)if(A.mipmaps&&A.mipmaps.length>0)for(let ve=0;ve<A.mipmaps.length;ve++)pe(ie.__webglFramebuffer[me][ve],b,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else pe(ie.__webglFramebuffer[me],b,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);M(A)&&C(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let me=0,ve=ye.length;me<ve;me++){const ze=ye[me],Xe=r.get(ze);let Ne=s.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ne=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Xe.__webglTexture),xe(Ne,ze),pe(ie.__webglFramebuffer,b,ze,s.COLOR_ATTACHMENT0+me,Ne,0),M(ze)&&C(Ne)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(me=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,_e.__webglTexture),xe(me,A),A.mipmaps&&A.mipmaps.length>0)for(let ve=0;ve<A.mipmaps.length;ve++)pe(ie.__webglFramebuffer[ve],b,A,s.COLOR_ATTACHMENT0,me,ve);else pe(ie.__webglFramebuffer,b,A,s.COLOR_ATTACHMENT0,me,0);M(A)&&C(me),t.unbindTexture()}b.depthBuffer&&Ve(b)}function it(b){const A=b.textures;for(let ie=0,_e=A.length;ie<_e;ie++){const ye=A[ie];if(M(ye)){const Re=P(b),Pe=r.get(ye).__webglTexture;t.bindTexture(Re,Pe),C(Re),t.unbindTexture()}}}const ct=[],yt=[];function D(b){if(b.samples>0){if(ot(b)===!1){const A=b.textures,ie=b.width,_e=b.height;let ye=s.COLOR_BUFFER_BIT;const Re=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(b),me=A.length>1;if(me)for(let ze=0;ze<A.length;ze++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ve=b.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ze=0;ze<A.length;ze++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[ze]);const Xe=r.get(A[ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xe,0)}s.blitFramebuffer(0,0,ie,_e,0,0,ie,_e,ye,s.NEAREST),p===!0&&(ct.length=0,yt.length=0,ct.push(s.COLOR_ATTACHMENT0+ze),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ct.push(Re),yt.push(Re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,yt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let ze=0;ze<A.length;ze++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[ze]);const Xe=r.get(A[ze]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,Xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const A=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function _t(b){return Math.min(o.maxSamples,b.samples)}function ot(b){const A=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function gt(b){const A=c.render.frame;m.get(b)!==A&&(m.set(b,A),b.update())}function Ee(b,A){const ie=b.colorSpace,_e=b.format,ye=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||ie!==cc&&ie!==Wr&&(Pt.getTransfer(ie)===Vt?(_e!==yi||ye!==xi)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",ie)),A}function lt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(d.width=b.naturalWidth||b.width,d.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(d.width=b.displayWidth,d.height=b.displayHeight):(d.width=b.width,d.height=b.height),d}this.allocateTextureUnit=ne,this.resetTextureUnits=ue,this.getTextureUnits=fe,this.setTextureUnits=H,this.setTexture2D=O,this.setTexture2DArray=F,this.setTexture3D=te,this.setTextureCube=I,this.rebindTextures=tt,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function EE(s,e){function t(r,o=Wr){let l;const c=Pt.getTransfer(o);if(r===xi)return s.UNSIGNED_BYTE;if(r===Vh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Gh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Tg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Cg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Eg)return s.BYTE;if(r===wg)return s.SHORT;if(r===ma)return s.UNSIGNED_SHORT;if(r===Hh)return s.INT;if(r===Ji)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===vr)return s.HALF_FLOAT;if(r===Rg)return s.ALPHA;if(r===bg)return s.RGB;if(r===yi)return s.RGBA;if(r===_r)return s.DEPTH_COMPONENT;if(r===vs)return s.DEPTH_STENCIL;if(r===Pg)return s.RED;if(r===Wh)return s.RED_INTEGER;if(r===xs)return s.RG;if(r===Xh)return s.RG_INTEGER;if(r===jh)return s.RGBA_INTEGER;if(r===$l||r===ec||r===tc||r===nc)if(c===Vt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===$l)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===$l)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rh||r===sh||r===oh||r===ah)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===rh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ah)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lh||r===ch||r===uh||r===fh||r===hh||r===ac||r===dh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===lh||r===ch)return c===Vt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===uh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===fh)return l.COMPRESSED_R11_EAC;if(r===hh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===ac)return l.COMPRESSED_RG11_EAC;if(r===dh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ph||r===mh||r===gh||r===vh||r===_h||r===xh||r===yh||r===Mh||r===Sh||r===Ah||r===Eh||r===wh||r===Th||r===Ch)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===ph)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_h)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ah)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Th)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ch)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rh||r===bh||r===Ph)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Rh)return c===Vt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ph)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Lh||r===Ih||r===lc||r===Uh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Lh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Ih)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ga?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const wE=`
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

}`;class CE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Vg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Mi({vertexShader:wE,fragmentShader:TE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fn(new _c(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RE extends Ms{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",p=1,d=null,m=null,_=null,g=null,x=null,S=null;const w=typeof XRWebGLBinding<"u",y=new CE,M={},C=t.getContextAttributes();let P=null,L=null;const X=[],U=[],z=new Dt;let E=null;const N=new ai;N.viewport=new on;const Z=new ai;Z.viewport=new on;const B=[N,Z],Y=new ky;let ue=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=X[j];return ae===void 0&&(ae=new ff,X[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=X[j];return ae===void 0&&(ae=new ff,X[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=X[j];return ae===void 0&&(ae=new ff,X[j]=ae),ae.getHandSpace()};function H(j){const ae=U.indexOf(j.inputSource);if(ae===-1)return;const G=X[ae];G!==void 0&&(G.update(j.inputSource,j.frame,d||c),G.dispatchEvent({type:j.type,data:j.inputSource}))}function ne(){o.removeEventListener("select",H),o.removeEventListener("selectstart",H),o.removeEventListener("selectend",H),o.removeEventListener("squeeze",H),o.removeEventListener("squeezestart",H),o.removeEventListener("squeezeend",H),o.removeEventListener("end",ne),o.removeEventListener("inputsourceschange",W);for(let j=0;j<X.length;j++){const ae=U[j];ae!==null&&(U[j]=null,X[j].disconnect(ae))}ue=null,fe=null,y.reset();for(const j in M)delete M[j];e.setRenderTarget(P),x=null,g=null,_=null,o=null,L=null,xe.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){l=j,r.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){f=j,r.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(j){d=j},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(j){if(o=j,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",H),o.addEventListener("selectstart",H),o.addEventListener("selectend",H),o.addEventListener("squeeze",H),o.addEventListener("squeezestart",H),o.addEventListener("squeezeend",H),o.addEventListener("end",ne),o.addEventListener("inputsourceschange",W),C.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(z),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let G=null,de=null,Te=null;C.depth&&(Te=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=C.stencil?vs:_r,de=C.stencil?ga:Ji);const pe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(pe),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new Zi(g.textureWidth,g.textureHeight,{format:yi,type:xi,depthTexture:new mo(g.textureWidth,g.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const G={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,G),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new Zi(x.framebufferWidth,x.framebufferHeight,{format:yi,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await o.requestReferenceSpace(f),xe.setContext(o),xe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(j){for(let ae=0;ae<j.removed.length;ae++){const G=j.removed[ae],de=U.indexOf(G);de>=0&&(U[de]=null,X[de].disconnect(G))}for(let ae=0;ae<j.added.length;ae++){const G=j.added[ae];let de=U.indexOf(G);if(de===-1){for(let pe=0;pe<X.length;pe++)if(pe>=U.length){U.push(G),de=pe;break}else if(U[pe]===null){U[pe]=G,de=pe;break}if(de===-1)break}const Te=X[de];Te&&Te.connect(G)}}const O=new J,F=new J;function te(j,ae,G){O.setFromMatrixPosition(ae.matrixWorld),F.setFromMatrixPosition(G.matrixWorld);const de=O.distanceTo(F),Te=ae.projectionMatrix.elements,pe=G.projectionMatrix.elements,Fe=Te[14]/(Te[10]-1),Se=Te[14]/(Te[10]+1),Ve=(Te[9]+1)/Te[5],tt=(Te[9]-1)/Te[5],nt=(Te[8]-1)/Te[0],it=(pe[8]+1)/pe[0],ct=Fe*nt,yt=Fe*it,D=de/(-nt+it),_t=D*-nt;if(ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(_t),j.translateZ(D),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Te[10]===-1)j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const ot=Fe+D,gt=Se+D,Ee=ct-_t,lt=yt+(de-_t),b=Ve*Se/gt*ot,A=tt*Se/gt*ot;j.projectionMatrix.makePerspective(Ee,lt,b,A,ot,gt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function I(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(o===null)return;let ae=j.near,G=j.far;y.texture!==null&&(y.depthNear>0&&(ae=y.depthNear),y.depthFar>0&&(G=y.depthFar)),Y.near=Z.near=N.near=ae,Y.far=Z.far=N.far=G,(ue!==Y.near||fe!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),ue=Y.near,fe=Y.far),Y.layers.mask=j.layers.mask|6,N.layers.mask=Y.layers.mask&-5,Z.layers.mask=Y.layers.mask&-3;const de=j.parent,Te=Y.cameras;I(Y,de);for(let pe=0;pe<Te.length;pe++)I(Te[pe],de);Te.length===2?te(Y,N,Z):Y.projectionMatrix.copy(N.projectionMatrix),V(j,Y,de)};function V(j,ae,G){G===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(G.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=va*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&x===null))return p},this.setFoveation=function(j){p=j,g!==null&&(g.fixedFoveation=j),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(j){return M[j]};let Me=null;function Ae(j,ae){if(m=ae.getViewerPose(d||c),S=ae,m!==null){const G=m.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let de=!1;G.length!==Y.cameras.length&&(Y.cameras.length=0,de=!0);for(let Se=0;Se<G.length;Se++){const Ve=G[Se];let tt=null;if(x!==null)tt=x.getViewport(Ve);else{const it=_.getViewSubImage(g,Ve);tt=it.viewport,Se===0&&(e.setRenderTargetTextures(L,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(L))}let nt=B[Se];nt===void 0&&(nt=new ai,nt.layers.enable(Se),nt.viewport=new on,B[Se]=nt),nt.matrix.fromArray(Ve.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Ve.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(tt.x,tt.y,tt.width,tt.height),Se===0&&(Y.matrix.copy(nt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),de===!0&&Y.cameras.push(nt)}const Te=o.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){_=r.getBinding();const Se=_.getDepthInformation(G[0]);Se&&Se.isValid&&Se.texture&&y.init(Se,o.renderState)}if(Te&&Te.includes("camera-access")&&w){e.state.unbindTexture(),_=r.getBinding();for(let Se=0;Se<G.length;Se++){const Ve=G[Se].camera;if(Ve){let tt=M[Ve];tt||(tt=new Vg,M[Ve]=tt);const nt=_.getCameraImage(Ve);tt.sourceTexture=nt}}}}for(let G=0;G<X.length;G++){const de=U[G],Te=X[G];de!==null&&Te!==void 0&&Te.update(de,ae,d||c)}Me&&Me(j,ae),ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ae}),S=null}const xe=new jg;xe.setAnimationLoop(Ae),this.setAnimationLoop=function(j){Me=j},this.dispose=function(){}}}const bE=new tn,$g=new wt;$g.set(-1,0,0,0,1,0,0,0,1);function PE(s,e){function t(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,Gg(s)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,C,P,L){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?l(y,M):M.isMeshLambertMaterial?(l(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(l(y,M),_(y,M)):M.isMeshPhongMaterial?(l(y,M),m(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(l(y,M),g(y,M),M.isMeshPhysicalMaterial&&x(y,M,L)):M.isMeshMatcapMaterial?(l(y,M),S(y,M)):M.isMeshDepthMaterial?l(y,M):M.isMeshDistanceMaterial?(l(y,M),w(y,M)):M.isMeshNormalMaterial?l(y,M):M.isLineBasicMaterial?(c(y,M),M.isLineDashedMaterial&&f(y,M)):M.isPointsMaterial?p(y,M,C,P):M.isSpriteMaterial?d(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function l(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,t(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===Jn&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,t(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===Jn&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,t(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,t(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,t(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const C=e.get(M),P=C.envMap,L=C.envMapRotation;P&&(y.envMap.value=P,y.envMapRotation.value.setFromMatrix4(bE.makeRotationFromEuler(L)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply($g),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,t(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,t(M.aoMap,y.aoMapTransform))}function c(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform))}function f(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function p(y,M,C,P){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*C,y.scale.value=P*.5,M.map&&(y.map.value=M.map,t(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function d(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function m(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function _(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function g(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,t(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,t(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function x(y,M,C){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,t(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,t(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,t(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,t(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,t(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Jn&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,t(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,t(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,t(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,t(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,t(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,t(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,t(M.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,M){M.matcap&&(y.matcap.value=M.matcap)}function w(y,M){const C=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function LE(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,P){const L=P.program;r.uniformBlockBinding(C,L)}function d(C,P){let L=o[C.id];L===void 0&&(S(C),L=m(C),o[C.id]=L,C.addEventListener("dispose",y));const X=P.program;r.updateUBOMapping(C,X);const U=e.render.frame;l[C.id]!==U&&(g(C),l[C.id]=U)}function m(C){const P=_();C.__bindingPointIndex=P;const L=s.createBuffer(),X=C.__size,U=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,X,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,L),L}function _(){for(let C=0;C<f;C++)if(c.indexOf(C)===-1)return c.push(C),C;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const P=o[C.id],L=C.uniforms,X=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let U=0,z=L.length;U<z;U++){const E=Array.isArray(L[U])?L[U]:[L[U]];for(let N=0,Z=E.length;N<Z;N++){const B=E[N];if(x(B,U,N,X)===!0){const Y=B.__offset,ue=Array.isArray(B.value)?B.value:[B.value];let fe=0;for(let H=0;H<ue.length;H++){const ne=ue[H],W=w(ne);typeof ne=="number"||typeof ne=="boolean"?(B.__data[0]=ne,s.bufferSubData(s.UNIFORM_BUFFER,Y+fe,B.__data)):ne.isMatrix3?(B.__data[0]=ne.elements[0],B.__data[1]=ne.elements[1],B.__data[2]=ne.elements[2],B.__data[3]=0,B.__data[4]=ne.elements[3],B.__data[5]=ne.elements[4],B.__data[6]=ne.elements[5],B.__data[7]=0,B.__data[8]=ne.elements[6],B.__data[9]=ne.elements[7],B.__data[10]=ne.elements[8],B.__data[11]=0):ArrayBuffer.isView(ne)?B.__data.set(new ne.constructor(ne.buffer,ne.byteOffset,B.__data.length)):(ne.toArray(B.__data,fe),fe+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(C,P,L,X){const U=C.value,z=P+"_"+L;if(X[z]===void 0)return typeof U=="number"||typeof U=="boolean"?X[z]=U:ArrayBuffer.isView(U)?X[z]=U.slice():X[z]=U.clone(),!0;{const E=X[z];if(typeof U=="number"||typeof U=="boolean"){if(E!==U)return X[z]=U,!0}else{if(ArrayBuffer.isView(U))return!0;if(E.equals(U)===!1)return E.copy(U),!0}}return!1}function S(C){const P=C.uniforms;let L=0;const X=16;for(let z=0,E=P.length;z<E;z++){const N=Array.isArray(P[z])?P[z]:[P[z]];for(let Z=0,B=N.length;Z<B;Z++){const Y=N[Z],ue=Array.isArray(Y.value)?Y.value:[Y.value];for(let fe=0,H=ue.length;fe<H;fe++){const ne=ue[fe],W=w(ne),O=L%X,F=O%W.boundary,te=O+F;L+=F,te!==0&&X-te<W.storage&&(L+=X-te),Y.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=L,L+=W.storage}}}const U=L%X;return U>0&&(L+=X-U),C.__size=L,C.__cache={},this}function w(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(P.boundary=16,P.storage=C.byteLength):vt("WebGLRenderer: Unsupported uniform value type.",C),P}function y(C){const P=C.target;P.removeEventListener("dispose",y);const L=c.indexOf(P.__bindingPointIndex);c.splice(L,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function M(){for(const C in o)s.deleteBuffer(o[C]);c=[],o={},l={}}return{bind:p,update:d,dispose:M}}const IE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function UE(){return Xi===null&&(Xi=new Bg(IE,16,16,xs,vr),Xi.name="DFG_LUT",Xi.minFilter=Mn,Xi.magFilter=Mn,Xi.wrapS=pr,Xi.wrapT=pr,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class DE{constructor(e={}){const{canvas:t=Fx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:x=xi}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const w=x,y=new Set([jh,Xh,Wh]),M=new Set([xi,Ji,ma,ga,Vh,Gh]),C=new Uint32Array(4),P=new Int32Array(4),L=new J;let X=null,U=null;const z=[],E=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Z=this;let B=!1,Y=null;this._outputColorSpace=_i;let ue=0,fe=0,H=null,ne=-1,W=null;const O=new on,F=new on;let te=null;const I=new zt(0);let V=0,Me=t.width,Ae=t.height,xe=1,j=null,ae=null;const G=new on(0,0,Me,Ae),de=new on(0,0,Me,Ae);let Te=!1;const pe=new zg;let Fe=!1,Se=!1;const Ve=new tn,tt=new J,nt=new on,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function yt(){return H===null?xe:1}let D=r;function _t(R,ee){return t.getContext(R,ee)}try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zh}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",je,!1),D===null){const ee="webgl2";if(D=_t(ee,R),D===null)throw _t(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ut("WebGLRenderer: "+R.message),R}let ot,gt,Ee,lt,b,A,ie,_e,ye,Re,Pe,me,ve,ze,Xe,Ne,Ue,ut,ft,Mt,K,De,he;function We(){ot=new U1(D),ot.init(),K=new EE(D,ot),gt=new w1(D,ot,e,K),Ee=new SE(D,ot),gt.reversedDepthBuffer&&g&&Ee.buffers.depth.setReversed(!0),lt=new F1(D),b=new lE,A=new AE(D,ot,Ee,b,gt,K,lt),ie=new I1(Z),_e=new zy(D),De=new A1(D,_e),ye=new D1(D,_e,lt,De),Re=new k1(D,ye,_e,De,lt),ut=new O1(D,gt,A),Xe=new T1(b),Pe=new aE(Z,ie,ot,gt,De,Xe),me=new PE(Z,b),ve=new uE,ze=new gE(ot),Ue=new S1(Z,ie,Ee,Re,S,p),Ne=new ME(Z,Re,gt),he=new LE(D,lt,gt,Ee),ft=new E1(D,ot,lt),Mt=new N1(D,ot,lt),lt.programs=Pe.programs,Z.capabilities=gt,Z.extensions=ot,Z.properties=b,Z.renderLists=ve,Z.shadowMap=Ne,Z.state=Ee,Z.info=lt}We(),w!==xi&&(N=new z1(w,t.width,t.height,o,l));const Oe=new RE(Z,D);this.xr=Oe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=ot.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ot.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(R){R!==void 0&&(xe=R,this.setSize(Me,Ae,!1))},this.getSize=function(R){return R.set(Me,Ae)},this.setSize=function(R,ee,le=!0){if(Oe.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=R,Ae=ee,t.width=Math.floor(R*xe),t.height=Math.floor(ee*xe),le===!0&&(t.style.width=R+"px",t.style.height=ee+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,R,ee)},this.getDrawingBufferSize=function(R){return R.set(Me*xe,Ae*xe).floor()},this.setDrawingBufferSize=function(R,ee,le){Me=R,Ae=ee,xe=le,t.width=Math.floor(R*le),t.height=Math.floor(ee*le),this.setViewport(0,0,R,ee)},this.setEffects=function(R){if(w===xi){Ut("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let ee=0;ee<R.length;ee++)if(R[ee].isOutputPass===!0){vt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(G)},this.setViewport=function(R,ee,le,oe){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,ee,le,oe),Ee.viewport(O.copy(G).multiplyScalar(xe).round())},this.getScissor=function(R){return R.copy(de)},this.setScissor=function(R,ee,le,oe){R.isVector4?de.set(R.x,R.y,R.z,R.w):de.set(R,ee,le,oe),Ee.scissor(F.copy(de).multiplyScalar(xe).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(R){Ee.setScissorTest(Te=R)},this.setOpaqueSort=function(R){j=R},this.setTransparentSort=function(R){ae=R},this.getClearColor=function(R){return R.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(R=!0,ee=!0,le=!0){let oe=0;if(R){let se=!1;if(H!==null){const Be=H.texture.format;se=y.has(Be)}if(se){const Be=H.texture.type,Ge=M.has(Be),Ie=Ue.getClearColor(),Ze=Ue.getClearAlpha(),Je=Ie.r,ht=Ie.g,dt=Ie.b;Ge?(C[0]=Je,C[1]=ht,C[2]=dt,C[3]=Ze,D.clearBufferuiv(D.COLOR,0,C)):(P[0]=Je,P[1]=ht,P[2]=dt,P[3]=Ze,D.clearBufferiv(D.COLOR,0,P))}else oe|=D.COLOR_BUFFER_BIT}ee&&(oe|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(oe|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&D.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Y=R},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",je,!1),Ue.dispose(),ve.dispose(),ze.dispose(),b.dispose(),ie.dispose(),Re.dispose(),De.dispose(),he.dispose(),Pe.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Ai),Oe.removeEventListener("sessionend",er),$n.stop()};function we(R){R.preventDefault(),Hm("WebGLRenderer: Context Lost."),B=!0}function qe(){Hm("WebGLRenderer: Context Restored."),B=!1;const R=lt.autoReset,ee=Ne.enabled,le=Ne.autoUpdate,oe=Ne.needsUpdate,se=Ne.type;We(),lt.autoReset=R,Ne.enabled=ee,Ne.autoUpdate=le,Ne.needsUpdate=oe,Ne.type=se}function je(R){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function At(R){const ee=R.target;ee.removeEventListener("dispose",At),Lt(ee)}function Lt(R){an(R),b.remove(R)}function an(R){const ee=b.get(R).programs;ee!==void 0&&(ee.forEach(function(le){Pe.releaseProgram(le)}),R.isShaderMaterial&&Pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,ee,le,oe,se,Be){ee===null&&(ee=it);const Ge=se.isMesh&&se.matrixWorld.determinant()<0,Ie=Yr(R,ee,le,oe,se);Ee.setMaterial(oe,Ge);let Ze=le.index,Je=1;if(oe.wireframe===!0){if(Ze=ye.getWireframeAttribute(le),Ze===void 0)return;Je=2}const ht=le.drawRange,dt=le.attributes.position;let et=ht.start*Je,Ct=(ht.start+ht.count)*Je;Be!==null&&(et=Math.max(et,Be.start*Je),Ct=Math.min(Ct,(Be.start+Be.count)*Je)),Ze!==null?(et=Math.max(et,0),Ct=Math.min(Ct,Ze.count)):dt!=null&&(et=Math.max(et,0),Ct=Math.min(Ct,dt.count));const Ot=Ct-et;if(Ot<0||Ot===1/0)return;De.setup(se,oe,Ie,le,Ze);let Wt,kt=ft;if(Ze!==null&&(Wt=_e.get(Ze),kt=Mt,kt.setIndex(Wt)),se.isMesh)oe.wireframe===!0?(Ee.setLineWidth(oe.wireframeLinewidth*yt()),kt.setMode(D.LINES)):kt.setMode(D.TRIANGLES);else if(se.isLine){let Zt=oe.linewidth;Zt===void 0&&(Zt=1),Ee.setLineWidth(Zt*yt()),se.isLineSegments?kt.setMode(D.LINES):se.isLineLoop?kt.setMode(D.LINE_LOOP):kt.setMode(D.LINE_STRIP)}else se.isPoints?kt.setMode(D.POINTS):se.isSprite&&kt.setMode(D.TRIANGLES);if(se.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))kt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const Zt=se._multiDrawStarts,Ye=se._multiDrawCounts,rn=se._multiDrawCount,Et=Ze?_e.get(Ze).bytesPerElement:1,gn=b.get(oe).currentProgram.getUniforms();for(let Sn=0;Sn<rn;Sn++)gn.setValue(D,"_gl_DrawID",Sn),kt.render(Zt[Sn]/Et,Ye[Sn])}else if(se.isInstancedMesh)kt.renderInstances(et,Ot,se.count);else if(le.isInstancedBufferGeometry){const Zt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ye=Math.min(le.instanceCount,Zt);kt.renderInstances(et,Ot,Ye)}else kt.render(et,Ot)};function On(R,ee,le){R.transparent===!0&&R.side===Fi&&R.forceSinglePass===!1?(R.side=Jn,R.needsUpdate=!0,Tn(R,ee,le),R.side=jr,R.needsUpdate=!0,Tn(R,ee,le),R.side=Fi):Tn(R,ee,le)}this.compile=function(R,ee,le=null){le===null&&(le=R),U=ze.get(le),U.init(ee),E.push(U),le.traverseVisible(function(se){se.isLight&&se.layers.test(ee.layers)&&(U.pushLight(se),se.castShadow&&U.pushShadow(se))}),R!==le&&R.traverseVisible(function(se){se.isLight&&se.layers.test(ee.layers)&&(U.pushLight(se),se.castShadow&&U.pushShadow(se))}),U.setupLights();const oe=new Set;return R.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Be=se.material;if(Be)if(Array.isArray(Be))for(let Ge=0;Ge<Be.length;Ge++){const Ie=Be[Ge];On(Ie,le,se),oe.add(Ie)}else On(Be,le,se),oe.add(Be)}),U=E.pop(),oe},this.compileAsync=function(R,ee,le=null){const oe=this.compile(R,ee,le);return new Promise(se=>{function Be(){if(oe.forEach(function(Ge){b.get(Ge).currentProgram.isReady()&&oe.delete(Ge)}),oe.size===0){se(R);return}setTimeout(Be,10)}ot.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Si=null;function $i(R){Si&&Si(R)}function Ai(){$n.stop()}function er(){$n.start()}const $n=new jg;$n.setAnimationLoop($i),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(R){Si=R,Oe.setAnimationLoop(R),R===null?$n.stop():$n.start()},Oe.addEventListener("sessionstart",Ai),Oe.addEventListener("sessionend",er),this.render=function(R,ee){if(ee!==void 0&&ee.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;Y!==null&&Y.renderStart(R,ee);const le=Oe.enabled===!0&&Oe.isPresenting===!0,oe=N!==null&&(H===null||le)&&N.begin(Z,H);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(ee),ee=Oe.getCamera()),R.isScene===!0&&R.onBeforeRender(Z,R,ee,H),U=ze.get(R,E.length),U.init(ee),U.state.textureUnits=A.getTextureUnits(),E.push(U),Ve.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),pe.setFromProjectionMatrix(Ve,Ki,ee.reversedDepth),Se=this.localClippingEnabled,Fe=Xe.init(this.clippingPlanes,Se),X=ve.get(R,z.length),X.init(),z.push(X),Oe.enabled===!0&&Oe.isPresenting===!0){const Ge=Z.xr.getDepthSensingMesh();Ge!==null&&Kr(Ge,ee,-1/0,Z.sortObjects)}Kr(R,ee,0,Z.sortObjects),X.finish(),Z.sortObjects===!0&&X.sort(j,ae),ct=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,ct&&Ue.addToRenderList(X,R),this.info.render.frame++,Fe===!0&&Xe.beginShadows();const se=U.state.shadowsArray;if(Ne.render(se,R,ee),Fe===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&N.hasRenderPass())===!1){const Ge=X.opaque,Ie=X.transmissive;if(U.setupLights(),ee.isArrayCamera){const Ze=ee.cameras;if(Ie.length>0)for(let Je=0,ht=Ze.length;Je<ht;Je++){const dt=Ze[Je];ln(Ge,Ie,R,dt)}ct&&Ue.render(R);for(let Je=0,ht=Ze.length;Je<ht;Je++){const dt=Ze[Je];Ss(X,R,dt,dt.viewport)}}else Ie.length>0&&ln(Ge,Ie,R,ee),ct&&Ue.render(R),Ss(X,R,ee)}H!==null&&fe===0&&(A.updateMultisampleRenderTarget(H),A.updateRenderTargetMipmap(H)),oe&&N.end(Z),R.isScene===!0&&R.onAfterRender(Z,R,ee),De.resetDefaultState(),ne=-1,W=null,E.pop(),E.length>0?(U=E[E.length-1],A.setTextureUnits(U.state.textureUnits),Fe===!0&&Xe.setGlobalState(Z.clippingPlanes,U.state.camera)):U=null,z.pop(),z.length>0?X=z[z.length-1]:X=null,Y!==null&&Y.renderEnd()};function Kr(R,ee,le,oe){if(R.visible===!1)return;if(R.layers.test(ee.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(ee);else if(R.isLightProbeGrid)U.pushLightProbeGrid(R);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||pe.intersectsSprite(R)){oe&&nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ve);const Ge=Re.update(R),Ie=R.material;Ie.visible&&X.push(R,Ge,Ie,le,nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||pe.intersectsObject(R))){const Ge=Re.update(R),Ie=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),nt.copy(R.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),nt.copy(Ge.boundingSphere.center)),nt.applyMatrix4(R.matrixWorld).applyMatrix4(Ve)),Array.isArray(Ie)){const Ze=Ge.groups;for(let Je=0,ht=Ze.length;Je<ht;Je++){const dt=Ze[Je],et=Ie[dt.materialIndex];et&&et.visible&&X.push(R,Ge,et,le,nt.z,dt)}}else Ie.visible&&X.push(R,Ge,Ie,le,nt.z,null)}}const Be=R.children;for(let Ge=0,Ie=Be.length;Ge<Ie;Ge++)Kr(Be[Ge],ee,le,oe)}function Ss(R,ee,le,oe){const{opaque:se,transmissive:Be,transparent:Ge}=R;U.setupLightsView(le),Fe===!0&&Xe.setGlobalState(Z.clippingPlanes,le),oe&&Ee.viewport(O.copy(oe)),se.length>0&&wn(se,ee,le),Be.length>0&&wn(Be,ee,le),Ge.length>0&&wn(Ge,ee,le),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ln(R,ee,le,oe){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[oe.id]===void 0){const et=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[oe.id]=new Zi(1,1,{generateMipmaps:!0,type:et?vr:xi,minFilter:gs,samples:Math.max(4,gt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const Be=U.state.transmissionRenderTarget[oe.id],Ge=oe.viewport||O;Be.setSize(Ge.z*Z.transmissionResolutionScale,Ge.w*Z.transmissionResolutionScale);const Ie=Z.getRenderTarget(),Ze=Z.getActiveCubeFace(),Je=Z.getActiveMipmapLevel();Z.setRenderTarget(Be),Z.getClearColor(I),V=Z.getClearAlpha(),V<1&&Z.setClearColor(16777215,.5),Z.clear(),ct&&Ue.render(le);const ht=Z.toneMapping;Z.toneMapping=Yi;const dt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),U.setupLightsView(oe),Fe===!0&&Xe.setGlobalState(Z.clippingPlanes,oe),wn(R,le,oe),A.updateMultisampleRenderTarget(Be),A.updateRenderTargetMipmap(Be),ot.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ct=0,Ot=ee.length;Ct<Ot;Ct++){const Wt=ee[Ct],{object:kt,geometry:Zt,material:Ye,group:rn}=Wt;if(Ye.side===Fi&&kt.layers.test(oe.layers)){const Et=Ye.side;Ye.side=Jn,Ye.needsUpdate=!0,kn(kt,le,oe,Zt,Ye,rn),Ye.side=Et,Ye.needsUpdate=!0,et=!0}}et===!0&&(A.updateMultisampleRenderTarget(Be),A.updateRenderTargetMipmap(Be))}Z.setRenderTarget(Ie,Ze,Je),Z.setClearColor(I,V),dt!==void 0&&(oe.viewport=dt),Z.toneMapping=ht}function wn(R,ee,le){const oe=ee.isScene===!0?ee.overrideMaterial:null;for(let se=0,Be=R.length;se<Be;se++){const Ge=R[se],{object:Ie,geometry:Ze,group:Je}=Ge;let ht=Ge.material;ht.allowOverride===!0&&oe!==null&&(ht=oe),Ie.layers.test(le.layers)&&kn(Ie,ee,le,Ze,ht,Je)}}function kn(R,ee,le,oe,se,Be){R.onBeforeRender(Z,ee,le,oe,se,Be),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),se.onBeforeRender(Z,ee,le,oe,R,Be),se.transparent===!0&&se.side===Fi&&se.forceSinglePass===!1?(se.side=Jn,se.needsUpdate=!0,Z.renderBufferDirect(le,ee,oe,se,R,Be),se.side=jr,se.needsUpdate=!0,Z.renderBufferDirect(le,ee,oe,se,R,Be),se.side=Fi):Z.renderBufferDirect(le,ee,oe,se,R,Be),R.onAfterRender(Z,ee,le,oe,se,Be)}function Tn(R,ee,le){ee.isScene!==!0&&(ee=it);const oe=b.get(R),se=U.state.lights,Be=U.state.shadowsArray,Ge=se.state.version,Ie=Pe.getParameters(R,se.state,Be,ee,le,U.state.lightProbeGridArray),Ze=Pe.getProgramCacheKey(Ie);let Je=oe.programs;oe.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?ee.environment:null,oe.fog=ee.fog;const ht=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;oe.envMap=ie.get(R.envMap||oe.environment,ht),oe.envMapRotation=oe.environment!==null&&R.envMap===null?ee.environmentRotation:R.envMapRotation,Je===void 0&&(R.addEventListener("dispose",At),Je=new Map,oe.programs=Je);let dt=Je.get(Ze);if(dt!==void 0){if(oe.currentProgram===dt&&oe.lightsStateVersion===Ge)return zn(R,Ie),dt}else Ie.uniforms=Pe.getUniforms(R),Y!==null&&R.isNodeMaterial&&Y.build(R,le,Ie),R.onBeforeCompile(Ie,Z),dt=Pe.acquireProgram(Ie,Ze),Je.set(Ze,dt),oe.uniforms=Ie.uniforms;const et=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=Xe.uniform),zn(R,Ie),oe.needsLights=ui(R),oe.lightsStateVersion=Ge,oe.needsLights&&(et.ambientLightColor.value=se.state.ambient,et.lightProbe.value=se.state.probe,et.directionalLights.value=se.state.directional,et.directionalLightShadows.value=se.state.directionalShadow,et.spotLights.value=se.state.spot,et.spotLightShadows.value=se.state.spotShadow,et.rectAreaLights.value=se.state.rectArea,et.ltc_1.value=se.state.rectAreaLTC1,et.ltc_2.value=se.state.rectAreaLTC2,et.pointLights.value=se.state.point,et.pointLightShadows.value=se.state.pointShadow,et.hemisphereLights.value=se.state.hemi,et.directionalShadowMatrix.value=se.state.directionalShadowMatrix,et.spotLightMatrix.value=se.state.spotLightMatrix,et.spotLightMap.value=se.state.spotLightMap,et.pointShadowMatrix.value=se.state.pointShadowMatrix),oe.lightProbeGrid=U.state.lightProbeGridArray.length>0,oe.currentProgram=dt,oe.uniformsList=null,dt}function Bn(R){if(R.uniformsList===null){const ee=R.currentProgram.getUniforms();R.uniformsList=ic.seqWithValue(ee.seq,R.uniforms)}return R.uniformsList}function zn(R,ee){const le=b.get(R);le.outputColorSpace=ee.outputColorSpace,le.batching=ee.batching,le.batchingColor=ee.batchingColor,le.instancing=ee.instancing,le.instancingColor=ee.instancingColor,le.instancingMorph=ee.instancingMorph,le.skinning=ee.skinning,le.morphTargets=ee.morphTargets,le.morphNormals=ee.morphNormals,le.morphColors=ee.morphColors,le.morphTargetsCount=ee.morphTargetsCount,le.numClippingPlanes=ee.numClippingPlanes,le.numIntersection=ee.numClipIntersection,le.vertexAlphas=ee.vertexAlphas,le.vertexTangents=ee.vertexTangents,le.toneMapping=ee.toneMapping}function qr(R,ee){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;L.setFromMatrixPosition(ee.matrixWorld);for(let le=0,oe=R.length;le<oe;le++){const se=R[le];if(se.texture!==null&&se.boundingBox.containsPoint(L))return se}return null}function Yr(R,ee,le,oe,se){ee.isScene!==!0&&(ee=it),A.resetTextureUnits();const Be=ee.fog,Ge=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?ee.environment:null,Ie=H===null?Z.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Pt.workingColorSpace,Ze=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,Je=ie.get(oe.envMap||Ge,Ze),ht=oe.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,dt=!!le.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),et=!!le.morphAttributes.position,Ct=!!le.morphAttributes.normal,Ot=!!le.morphAttributes.color;let Wt=Yi;oe.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Wt=Z.toneMapping);const kt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Zt=kt!==void 0?kt.length:0,Ye=b.get(oe),rn=U.state.lights;if(Fe===!0&&(Se===!0||R!==W)){const Ht=R===W&&oe.id===ne;Xe.setState(oe,R,Ht)}let Et=!1;oe.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==rn.state.version||Ye.outputColorSpace!==Ie||se.isBatchedMesh&&Ye.batching===!1||!se.isBatchedMesh&&Ye.batching===!0||se.isBatchedMesh&&Ye.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&Ye.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&Ye.instancing===!1||!se.isInstancedMesh&&Ye.instancing===!0||se.isSkinnedMesh&&Ye.skinning===!1||!se.isSkinnedMesh&&Ye.skinning===!0||se.isInstancedMesh&&Ye.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ye.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Ye.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Ye.instancingMorph===!1&&se.morphTexture!==null||Ye.envMap!==Je||oe.fog===!0&&Ye.fog!==Be||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Xe.numPlanes||Ye.numIntersection!==Xe.numIntersection)||Ye.vertexAlphas!==ht||Ye.vertexTangents!==dt||Ye.morphTargets!==et||Ye.morphNormals!==Ct||Ye.morphColors!==Ot||Ye.toneMapping!==Wt||Ye.morphTargetsCount!==Zt||!!Ye.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,Ye.__version=oe.version);let gn=Ye.currentProgram;Et===!0&&(gn=Tn(oe,ee,se),Y&&oe.isNodeMaterial&&Y.onUpdateProgram(oe,gn,Ye));let Sn=!1,St=!1,ei=!1;const Bt=gn.getUniforms(),Kt=Ye.uniforms;if(Ee.useProgram(gn.program)&&(Sn=!0,St=!0,ei=!0),oe.id!==ne&&(ne=oe.id,St=!0),Ye.needsLights){const Ht=qr(U.state.lightProbeGridArray,se);Ye.lightProbeGrid!==Ht&&(Ye.lightProbeGrid=Ht,St=!0)}if(Sn||W!==R){Ee.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Bt.setValue(D,"projectionMatrix",R.projectionMatrix),Bt.setValue(D,"viewMatrix",R.matrixWorldInverse);const wi=Bt.map.cameraPosition;wi!==void 0&&wi.setValue(D,tt.setFromMatrixPosition(R.matrixWorld)),gt.logarithmicDepthBuffer&&Bt.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Bt.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),W!==R&&(W=R,St=!0,ei=!0)}if(Ye.needsLights&&(rn.state.directionalShadowMap.length>0&&Bt.setValue(D,"directionalShadowMap",rn.state.directionalShadowMap,A),rn.state.spotShadowMap.length>0&&Bt.setValue(D,"spotShadowMap",rn.state.spotShadowMap,A),rn.state.pointShadowMap.length>0&&Bt.setValue(D,"pointShadowMap",rn.state.pointShadowMap,A)),se.isSkinnedMesh){Bt.setOptional(D,se,"bindMatrix"),Bt.setOptional(D,se,"bindMatrixInverse");const Ht=se.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Bt.setValue(D,"boneTexture",Ht.boneTexture,A))}se.isBatchedMesh&&(Bt.setOptional(D,se,"batchingTexture"),Bt.setValue(D,"batchingTexture",se._matricesTexture,A),Bt.setOptional(D,se,"batchingIdTexture"),Bt.setValue(D,"batchingIdTexture",se._indirectTexture,A),Bt.setOptional(D,se,"batchingColorTexture"),se._colorsTexture!==null&&Bt.setValue(D,"batchingColorTexture",se._colorsTexture,A));const Ei=le.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&ut.update(se,le,gn),(St||Ye.receiveShadow!==se.receiveShadow)&&(Ye.receiveShadow=se.receiveShadow,Bt.setValue(D,"receiveShadow",se.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&ee.environment!==null&&(Kt.envMapIntensity.value=ee.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=UE()),St){if(Bt.setValue(D,"toneMappingExposure",Z.toneMappingExposure),Ye.needsLights&&ci(Kt,ei),Be&&oe.fog===!0&&me.refreshFogUniforms(Kt,Be),me.refreshMaterialUniforms(Kt,oe,xe,Ae,U.state.transmissionRenderTarget[R.id]),Ye.needsLights&&Ye.lightProbeGrid){const Ht=Ye.lightProbeGrid;Kt.probesSH.value=Ht.texture,Kt.probesMin.value.copy(Ht.boundingBox.min),Kt.probesMax.value.copy(Ht.boundingBox.max),Kt.probesResolution.value.copy(Ht.resolution)}ic.upload(D,Bn(Ye),Kt,A)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(ic.upload(D,Bn(Ye),Kt,A),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Bt.setValue(D,"center",se.center),Bt.setValue(D,"modelViewMatrix",se.modelViewMatrix),Bt.setValue(D,"normalMatrix",se.normalMatrix),Bt.setValue(D,"modelMatrix",se.matrixWorld),oe.uniformsGroups!==void 0){const Ht=oe.uniformsGroups;for(let wi=0,Bi=Ht.length;wi<Bi;wi++){const Qr=Ht[wi];he.update(Qr,gn),he.bind(Qr,gn)}}return gn}function ci(R,ee){R.ambientLightColor.needsUpdate=ee,R.lightProbe.needsUpdate=ee,R.directionalLights.needsUpdate=ee,R.directionalLightShadows.needsUpdate=ee,R.pointLights.needsUpdate=ee,R.pointLightShadows.needsUpdate=ee,R.spotLights.needsUpdate=ee,R.spotLightShadows.needsUpdate=ee,R.rectAreaLights.needsUpdate=ee,R.hemisphereLights.needsUpdate=ee}function ui(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return fe},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(R,ee,le){const oe=b.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=ee,b.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:le,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,ee){const le=b.get(R);le.__webglFramebuffer=ee,le.__useDefaultFramebuffer=ee===void 0};const jt=D.createFramebuffer();this.setRenderTarget=function(R,ee=0,le=0){H=R,ue=ee,fe=le;let oe=null,se=!1,Be=!1;if(R){const Ie=b.get(R);if(Ie.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(D.FRAMEBUFFER,Ie.__webglFramebuffer),O.copy(R.viewport),F.copy(R.scissor),te=R.scissorTest,Ee.viewport(O),Ee.scissor(F),Ee.setScissorTest(te),ne=-1;return}else if(Ie.__webglFramebuffer===void 0)A.setupRenderTarget(R);else if(Ie.__hasExternalTextures)A.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ht=R.depthTexture;if(Ie.__boundDepthTexture!==ht){if(ht!==null&&b.has(ht)&&(R.width!==ht.image.width||R.height!==ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(R)}}const Ze=R.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Be=!0);const Je=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[ee])?oe=Je[ee][le]:oe=Je[ee],se=!0):R.samples>0&&A.useMultisampledRTT(R)===!1?oe=b.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?oe=Je[le]:oe=Je,O.copy(R.viewport),F.copy(R.scissor),te=R.scissorTest}else O.copy(G).multiplyScalar(xe).floor(),F.copy(de).multiplyScalar(xe).floor(),te=Te;if(le!==0&&(oe=jt),Ee.bindFramebuffer(D.FRAMEBUFFER,oe)&&Ee.drawBuffers(R,oe),Ee.viewport(O),Ee.scissor(F),Ee.setScissorTest(te),se){const Ie=b.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie.__webglTexture,le)}else if(Be){const Ie=ee;for(let Ze=0;Ze<R.textures.length;Ze++){const Je=b.get(R.textures[Ze]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ze,Je.__webglTexture,le,Ie)}}else if(R!==null&&le!==0){const Ie=b.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ie.__webglTexture,le)}ne=-1},this.readRenderTargetPixels=function(R,ee,le,oe,se,Be,Ge,Ie=0){if(!(R&&R.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ze=Ze[Ge]),Ze){Ee.bindFramebuffer(D.FRAMEBUFFER,Ze);try{const Je=R.textures[Ie],ht=Je.format,dt=Je.type;if(R.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),!gt.textureFormatReadable(ht)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(dt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=R.width-oe&&le>=0&&le<=R.height-se&&D.readPixels(ee,le,oe,se,K.convert(ht),K.convert(dt),Be)}finally{const Je=H!==null?b.get(H).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(R,ee,le,oe,se,Be,Ge,Ie=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ze=Ze[Ge]),Ze)if(ee>=0&&ee<=R.width-oe&&le>=0&&le<=R.height-se){Ee.bindFramebuffer(D.FRAMEBUFFER,Ze);const Je=R.textures[Ie],ht=Je.format,dt=Je.type;if(R.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),!gt.textureFormatReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.bufferData(D.PIXEL_PACK_BUFFER,Be.byteLength,D.STREAM_READ),D.readPixels(ee,le,oe,se,K.convert(ht),K.convert(dt),0);const Ct=H!==null?b.get(H).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Ct);const Ot=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ox(D,Ot,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Be),D.deleteBuffer(et),D.deleteSync(Ot),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,ee=null,le=0){const oe=Math.pow(2,-le),se=Math.floor(R.image.width*oe),Be=Math.floor(R.image.height*oe),Ge=ee!==null?ee.x:0,Ie=ee!==null?ee.y:0;A.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,le,0,0,Ge,Ie,se,Be),Ee.unbindTexture()};const Mo=D.createFramebuffer(),nn=D.createFramebuffer();this.copyTextureToTexture=function(R,ee,le=null,oe=null,se=0,Be=0){let Ge,Ie,Ze,Je,ht,dt,et,Ct,Ot;const Wt=R.isCompressedTexture?R.mipmaps[Be]:R.image;if(le!==null)Ge=le.max.x-le.min.x,Ie=le.max.y-le.min.y,Ze=le.isBox3?le.max.z-le.min.z:1,Je=le.min.x,ht=le.min.y,dt=le.isBox3?le.min.z:0;else{const Kt=Math.pow(2,-se);Ge=Math.floor(Wt.width*Kt),Ie=Math.floor(Wt.height*Kt),R.isDataArrayTexture?Ze=Wt.depth:R.isData3DTexture?Ze=Math.floor(Wt.depth*Kt):Ze=1,Je=0,ht=0,dt=0}oe!==null?(et=oe.x,Ct=oe.y,Ot=oe.z):(et=0,Ct=0,Ot=0);const kt=K.convert(ee.format),Zt=K.convert(ee.type);let Ye;ee.isData3DTexture?(A.setTexture3D(ee,0),Ye=D.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(A.setTexture2DArray(ee,0),Ye=D.TEXTURE_2D_ARRAY):(A.setTexture2D(ee,0),Ye=D.TEXTURE_2D),Ee.activeTexture(D.TEXTURE0),Ee.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,ee.flipY),Ee.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),Ee.pixelStorei(D.UNPACK_ALIGNMENT,ee.unpackAlignment);const rn=Ee.getParameter(D.UNPACK_ROW_LENGTH),Et=Ee.getParameter(D.UNPACK_IMAGE_HEIGHT),gn=Ee.getParameter(D.UNPACK_SKIP_PIXELS),Sn=Ee.getParameter(D.UNPACK_SKIP_ROWS),St=Ee.getParameter(D.UNPACK_SKIP_IMAGES);Ee.pixelStorei(D.UNPACK_ROW_LENGTH,Wt.width),Ee.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Wt.height),Ee.pixelStorei(D.UNPACK_SKIP_PIXELS,Je),Ee.pixelStorei(D.UNPACK_SKIP_ROWS,ht),Ee.pixelStorei(D.UNPACK_SKIP_IMAGES,dt);const ei=R.isDataArrayTexture||R.isData3DTexture,Bt=ee.isDataArrayTexture||ee.isData3DTexture;if(R.isDepthTexture){const Kt=b.get(R),Ei=b.get(ee),Ht=b.get(Kt.__renderTarget),wi=b.get(Ei.__renderTarget);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Bi=0;Bi<Ze;Bi++)ei&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,b.get(R).__webglTexture,se,dt+Bi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,b.get(ee).__webglTexture,Be,Ot+Bi)),D.blitFramebuffer(Je,ht,Ge,Ie,et,Ct,Ge,Ie,D.DEPTH_BUFFER_BIT,D.NEAREST);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(se!==0||R.isRenderTargetTexture||b.has(R)){const Kt=b.get(R),Ei=b.get(ee);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,Mo),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,nn);for(let Ht=0;Ht<Ze;Ht++)ei?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Kt.__webglTexture,se,dt+Ht):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Kt.__webglTexture,se),Bt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ei.__webglTexture,Be,Ot+Ht):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ei.__webglTexture,Be),se!==0?D.blitFramebuffer(Je,ht,Ge,Ie,et,Ct,Ge,Ie,D.COLOR_BUFFER_BIT,D.NEAREST):Bt?D.copyTexSubImage3D(Ye,Be,et,Ct,Ot+Ht,Je,ht,Ge,Ie):D.copyTexSubImage2D(Ye,Be,et,Ct,Je,ht,Ge,Ie);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Bt?R.isDataTexture||R.isData3DTexture?D.texSubImage3D(Ye,Be,et,Ct,Ot,Ge,Ie,Ze,kt,Zt,Wt.data):ee.isCompressedArrayTexture?D.compressedTexSubImage3D(Ye,Be,et,Ct,Ot,Ge,Ie,Ze,kt,Wt.data):D.texSubImage3D(Ye,Be,et,Ct,Ot,Ge,Ie,Ze,kt,Zt,Wt):R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Be,et,Ct,Ge,Ie,kt,Zt,Wt.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Be,et,Ct,Wt.width,Wt.height,kt,Wt.data):D.texSubImage2D(D.TEXTURE_2D,Be,et,Ct,Ge,Ie,kt,Zt,Wt);Ee.pixelStorei(D.UNPACK_ROW_LENGTH,rn),Ee.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Et),Ee.pixelStorei(D.UNPACK_SKIP_PIXELS,gn),Ee.pixelStorei(D.UNPACK_SKIP_ROWS,Sn),Ee.pixelStorei(D.UNPACK_SKIP_IMAGES,St),Be===0&&ee.generateMipmaps&&D.generateMipmap(Ye),Ee.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&A.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),Ee.unbindTexture()},this.resetState=function(){ue=0,fe=0,H=null,Ee.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}function aa(s,e,t){const r=e/100,o=t/100,l=(1-Math.abs(2*o-1))*r,c=l*(1-Math.abs(s/60%2-1)),f=o-l/2;let p=0,d=0,m=0;s<60?[p,d,m]=[l,c,0]:s<120?[p,d,m]=[c,l,0]:s<180?[p,d,m]=[0,l,c]:s<240?[p,d,m]=[0,c,l]:s<300?[p,d,m]=[c,0,l]:[p,d,m]=[l,0,c];const _=g=>Math.round((g+f)*255).toString(16).padStart(2,"0");return`#${_(p)}${_(d)}${_(m)}`}function ao(s,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[aa(s,e,50),"#FFFFFF",aa(s,e*.6,70),aa(s,e*.8,35)];const r=aa(s,e,50),o=aa((s+180)%360,e,50);return[r,o,r,o]}const O0=[1],ha=[0];let ev=0;const NE=new Set;function FE(s,e){for(let t=0;t<e.length;t++){const r=e[t]??1;O0[t]=r,ha[t]=(ha[t]??0)+s*r}for(const t of NE)ha[t]=(ha[t]??0)+s*(O0[t]??1)}function OE(s){ev=s}function kE(){return ha[ev]??0}const rc=12,Un=Math.PI*2;function tv(s,e){if(e<=0)return 0;const t=Math.min(2.2,10/e);return Math.min(e,1+Math.floor(s/t))}const Yl=[[[0,"#5ea733"],[.1,"#a9c97a"],[.17,"#efe6c6"],[.26,"#f2b2c5"],[.36,"#df4a67"],[.45,"#b81f3d"],[.53,"#1a0d33"],[.61,"#2e44d8"],[.7,"#5f78f0"],[.79,"#dfe4f4"],[.87,"#eee6c4"],[.94,"#9cc46c"],[1,"#5ea733"]],[[0,"#e0a82e"],[.1,"#f0cd7a"],[.17,"#f6ead0"],[.26,"#f6b49a"],[.36,"#e8573a"],[.45,"#b52a1c"],[.53,"#2a0a0c"],[.61,"#a8401c"],[.7,"#e8823e"],[.79,"#f7dcc4"],[.87,"#f4e8c8"],[.94,"#e9c060"],[1,"#e0a82e"]],[[0,"#1f9a8a"],[.1,"#86d1bf"],[.17,"#eaf2e2"],[.26,"#9fe3e8"],[.36,"#25b5d4"],[.45,"#13708f"],[.53,"#0b1430"],[.61,"#5a35c8"],[.7,"#9a7cf0"],[.79,"#e6e0f6"],[.87,"#e4f2ea"],[.94,"#5cc2a6"],[1,"#1f9a8a"]],[[0,"#2b3f8f"],[.1,"#7d8fd0"],[.17,"#eef0f6"],[.26,"#c9d0ea"],[.36,"#5266b8"],[.45,"#22307a"],[.53,"#070a1c"],[.61,"#26357e"],[.7,"#6a7cc6"],[.79,"#e8ebf5"],[.87,"#f4f3ee"],[.94,"#8a9ad6"],[1,"#2b3f8f"]]],BE=["Inflated","Paper","Line","Print"],zE=`
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
}`,VE=0,GE=1,WE=2;function Mc(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(g=>g+g).join(""):e,r=(parseInt(t.slice(0,2),16)||0)/255,o=(parseInt(t.slice(2,4),16)||0)/255,l=(parseInt(t.slice(4,6),16)||0)/255,c=Math.max(r,o,l),f=Math.min(r,o,l),p=(c+f)/2;if(c===f)return[0,0,p];const d=c-f,m=p>.5?d/(2-c-f):d/(c+f);let _;return c===r?_=((o-l)/d+(o<l?6:0))*60:c===o?_=((l-r)/d+2)*60:_=((r-o)/d+4)*60,[_,m,p]}function nv(s,e,t){return`hsl(${(s%360+360)%360} ${Math.max(0,Math.min(1,e))*100}% ${t*100}%)`}const k0=Mc(ao(245,100,"contrast")[0]);function XE(s){const[e,t]=Mc(s[0]??"#000000");return t===0?{hue:0,sat:0}:{hue:e-k0[0],sat:t/(k0[1]||1)}}function B0(s,e){const t=document.createElement("canvas");t.width=512,t.height=1;const r=t.getContext("2d"),o=r.createLinearGradient(0,0,512,0);for(const[c,f]of s){const[p,d,m]=Mc(f);o.addColorStop(c,nv(p+e.hue,d*e.sat,m))}r.fillStyle=o,r.fillRect(0,0,512,1);const l=new Ty(t);return l.wrapS=oc,l.magFilter=Mn,l.minFilter=Mn,l.generateMipmaps=!1,l}class iv{constructor(){Q(this,"textures");Q(this,"turnKey","#reference");Q(this,"palFrom",0);Q(this,"palTo",0);Q(this,"palMix",1);Q(this,"styleUniform",{value:0});Q(this,"turn",{hue:0,sat:1});this.textures=Yl.map(e=>B0(e,{hue:0,sat:1}))}shared(){return{uPalA:{value:this.textures[0]},uPalB:{value:this.textures[0]},uPalMix:{value:0},uT:{value:0},uOff:{value:0},uWA:{value:0},uWB:{value:0},uWC:{value:0},uDepth:{value:.32},uSpec:{value:.16},uCenter:{value:new J}}}material(e,t,r={}){return new Mi({vertexShader:zE,fragmentShader:HE,side:Fi,uniforms:{...t,uStyle:this.styleUniform,uMode:{value:e},uAng:{value:0},uWS:{value:1},...r}})}update(e,t,r,o,l=0){this.styleUniform.value=Math.max(0,Math.min(BE.length-1,Math.round(l)));const c=e[0]??"";if(c!==this.turnKey){this.turnKey=c;const p=XE(e);this.turn=p;const d=this.textures;this.textures=Yl.map(m=>B0(m,p));for(const m of d)m.dispose()}const f=Math.max(0,Math.min(Yl.length-1,Math.round(t)));o&&(this.palFrom=this.palTo=f,this.palMix=1),f!==this.palTo&&(this.palFrom=this.palMix<.5?this.palFrom:this.palTo,this.palTo=f,this.palMix=0),this.palMix=Math.min(1,this.palMix+r)}apply(e,t,r){e.uPalA.value=this.textures[this.palFrom],e.uPalB.value=this.textures[this.palTo],e.uPalMix.value=this.palMix,e.uDepth.value=t,e.uSpec.value=r}backdrop(e,t,r,o){const l=this.styleUniform.value;if(l===0){sv(e,t,r,o);return}const c=Math.max(0,Math.min(1,o));if(e.globalCompositeOperation="source-over",e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,t,r),l===2||c<=0)return;const f=Yl[this.palTo],p=f.find(([g])=>g===(l===1?.53:.17))??f[0],[d,m,_]=Mc(p[1]);e.globalAlpha=c,e.fillStyle=nv(d+this.turn.hue,m*this.turn.sat,l===1?_*1.25:_),e.fillRect(0,0,t,r),e.globalAlpha=1}dispose(){for(const e of this.textures)e.dispose();this.textures=[]}}function rv(s,e,t){const r=e/t,o=30,l=Math.tan(o/2*Math.PI/180),c=r<16/9?2*Math.atan(l*(16/9)/r)*180/Math.PI:o;(s.aspect!==r||s.fov!==c)&&(s.aspect=r,s.fov=c,s.updateProjectionMatrix())}function sv(s,e,t,r){const o=Math.max(0,Math.min(1,r)),l=c=>{const f=parseInt(c.slice(1),16),p=Math.round((f>>16&255)*o),d=Math.round((f>>8&255)*o),m=Math.round((f&255)*o);return`rgb(${p},${d},${m})`};if(s.globalCompositeOperation="source-over",s.globalAlpha=1,o<=0)s.fillStyle="#000";else{const c=s.createLinearGradient(0,0,0,t);c.addColorStop(0,l("#8e94a2")),c.addColorStop(.2,l("#bfc3d0")),c.addColorStop(.42,l("#dde1ec")),c.addColorStop(.68,l("#d9dde9")),c.addColorStop(1,l("#9ea2af")),s.fillStyle=c}s.fillRect(0,0,e,t)}function ov(s){const e=new DE({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"});return e.setPixelRatio(1),e.setClearColor(0,0),e}function av(s,e,t,r){s.fillStyle="#000",s.fillRect(0,0,e,t),s.fillStyle="rgba(255,255,255,0.4)",s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText(`${r} NEEDS WEBGL`,e/2,t/2)}class Ma{constructor(e){Q(this,"dt",1/60);Q(this,"step",0);Q(this,"openness");Q(this,"aim",{x:0,y:0});Q(this,"spread",.4);Q(this,"depth",.35);Q(this,"turn",0);Q(this,"pinch",0);Q(this,"fist",0);Q(this,"clapped",!1);Q(this,"clapStrength",0);Q(this,"wasClapping",!1);Q(this,"burst",0);Q(this,"bump",0);Q(this,"bass",0);Q(this,"mid",0);Q(this,"high",0);Q(this,"kick",0);Q(this,"snare",0);Q(this,"hat",0);Q(this,"energy",.5);Q(this,"build",0);Q(this,"drop",0);Q(this,"bright",.5);Q(this,"lastClock",null);Q(this,"lastFrame",0);this.rest=e,this.openness=e}read(e,t){const r=performance.now(),o=this.lastFrame?Math.min(.1,(r-this.lastFrame)/1e3):1/60;this.lastFrame=r;const l=kE();this.step=this.lastClock===null?0:Math.max(-.2,Math.min(.2,l-this.lastClock)),this.lastClock=l,this.dt=o;const c=[e.left,e.right].filter(Boolean);let f=this.rest;if(c.length){const C=Math.max(...c.map(P=>P.gesture==="fist"?0:P.fingerCount??3));f=Math.max(0,Math.min(1,C/5))}this.openness+=(f-this.openness)*(1-Math.exp(-o*5));let p=0,d=0;c.length&&(p=(c.reduce((C,P)=>C+P.position.x,0)/c.length-.5)*2,d=(.5-c.reduce((C,P)=>C+P.position.y,0)/c.length)*2);const m=1-Math.exp(-o*4);this.aim.x+=(p-this.aim.x)*m,this.aim.y+=(d-this.aim.y)*m,this.spread+=((e.distanceBetweenHands??.4)-this.spread)*m;const _=c.map(C=>C.depth).filter(C=>C!==void 0);this.depth+=((_.length?Math.max(..._):.35)-this.depth)*m;const g=e.twist??(c.length===1?c[0].angle??0:0);this.turn+=(g-this.turn)*m;const x=c.length?Math.max(...c.map(C=>C.pinch??0)):0;this.pinch+=(x-this.pinch)*(1-Math.exp(-o*10));const S=c.length?Math.max(...c.map(C=>C.openness!==void 0?1-C.openness:C.gesture==="fist"?1:0)):0;this.fist+=(Math.min(1,Math.max(0,(S-.35)/.4))-this.fist)*(1-Math.exp(-o*8));const w=!!e.clapping&&!e.synthetic;this.clapped=w&&!this.wasClapping,this.clapStrength=this.clapped?Math.max(.6,e.clapIntensity??1):0,this.wasClapping=w;const y=e.clapping?e.clapIntensity??1:0;this.burst=Math.max(this.burst*Math.exp(-o*2.2),y);const M=(C,P,L,X)=>C+(P-C)*(1-Math.exp(-o*(P>C?L:X)));this.bass=M(this.bass,(t==null?void 0:t.bass)??0,6,1.5),this.mid=M(this.mid,(t==null?void 0:t.mid)??0,4,1),this.high=M(this.high,(t==null?void 0:t.high)??0,8,2.5),this.bump*=Math.exp(-o/.07),t!=null&&t.beat&&(this.bump=Math.max(this.bump,t.beatIntensity||1)),this.kick=(t==null?void 0:t.kick)??0,this.bump=Math.max(this.bump,this.kick*.9),this.snare=(t==null?void 0:t.snare)??0,this.hat=(t==null?void 0:t.hat)??0,this.energy=M(this.energy,t!=null&&t.live?t.energy??.5:.5,1,1),this.build=(t==null?void 0:t.build)??0,this.drop=(t==null?void 0:t.drop)??0,this.bright=M(this.bright,(t==null?void 0:t.bright)??.5,1,1)}}class jE{constructor(e,t){Q(this,"canvas");Q(this,"ctx");Q(this,"cfg",Pm);Q(this,"playing",new Ma(.6));Q(this,"n",0);Q(this,"x",new Float32Array(0));Q(this,"y",new Float32Array(0));Q(this,"z",new Float32Array(0));Q(this,"vx",new Float32Array(0));Q(this,"vy",new Float32Array(0));Q(this,"light",new Float32Array(0));Q(this,"phase",new Float32Array(0));Q(this,"time",0);Q(this,"events",[]);Q(this,"lastKick",0);Q(this,"lastSnare",0);Q(this,"lastHat",0);Q(this,"kicks",0);Q(this,"flow",[Math.random()*10,Math.random()*10,Math.random()*10]);Q(this,"flowTo",[...this.flow]);Q(this,"gather",0);Q(this,"breath",0);Q(this,"grain",document.createElement("canvas"));Q(this,"aspect",16/9);this.canvas=e,this.ctx=t,this.grain.width=this.grain.height=256;const r=this.grain.getContext("2d"),o=r.createImageData(256,256);for(let l=0;l<o.data.length;l+=4){const c=Math.random()<.5?0:255;o.data[l]=o.data[l+1]=o.data[l+2]=c,o.data[l+3]=Math.random()<.35?255:0}r.putImageData(o,0,0)}setParams(e){this.cfg=_a(Pm,e)}resize(e){const t=Math.min(this.n,e),r=o=>{const l=new Float32Array(e);return l.set(o.subarray(0,t)),l};this.x=r(this.x),this.y=r(this.y),this.z=r(this.z),this.vx=r(this.vx),this.vy=r(this.vy),this.light=r(this.light),this.phase=r(this.phase);for(let o=t;o<e;o++)this.x[o]=Math.random()*this.aspect,this.y[o]=Math.random(),this.z[o]=.25+.75*Math.pow(Math.random(),2.2),this.phase[o]=Math.random()*Math.PI*2,this.light[o]=0;this.n=e}angleAt(e,t,r){const[o,l,c]=this.flow;return Math.sin(e*1.3+o+r*.05)*1.7+Math.cos(t*1.7-l+r*.04)*1.5+Math.sin((e+t)*.8+c)*1.2}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,p=o.height;if(!f||!p)return;this.aspect=f/p;const d=this.aspect,m=this.playing;m.read(e,r);const _=Math.min(.1,m.dt),g=Math.min(.08,Math.max(0,m.step));this.time+=g;const x=Math.max(50,Math.min(6e3,Math.round(c.field.count)));x!==this.n&&this.resize(x);const S=!!(r!=null&&r.live),w=F=>1-Math.exp(-_*F),y=Math.max(m.kick,m.bump)*c.sound.beat;if(y>.45&&this.lastKick<=.45){this.kicks+=1;const F=Math.random(),te=(.5+.6*Math.random())*Math.min(1.4,y),I=F<.5?0:F<.82?1:2;this.events.push({kind:I,x:Math.random()*d,y:.1+.8*Math.random(),age:0,strength:te,angle:Math.random()*Math.PI,reach:.2+.5*Math.random()}),this.kicks%(6+Math.floor(Math.random()*6))===0&&(this.flowTo=this.flowTo.map(V=>V+(Math.random()-.5)*4))}this.lastKick=y;const M=(F,te)=>{for(let I=0;I<F;I++){const V=Math.floor(Math.random()*this.n);this.light[V]=Math.max(this.light[V],te)}},C=m.snare*c.sound.sparks;C>.5&&this.lastSnare<=.5&&M(Math.round(this.n*.012),1.1),this.lastSnare=C;const P=m.hat*c.sound.sparks;if(P>.5&&this.lastHat<=.5&&M(Math.round(this.n*.004),.7),this.lastHat=P,!S&&Math.random()<_*.35&&this.events.push({kind:0,x:Math.random()*d,y:Math.random(),age:0,strength:.45,angle:0,reach:.4}),m.clapped&&c.hands.clap>0)for(let F=0;F<this.n;F++){this.light[F]=Math.max(this.light[F],1.2*c.hands.clap);const te=this.x[F]-d/2,I=this.y[F]-.5,V=Math.hypot(te,I)+.05;this.vx[F]+=te/V*.25*c.hands.clap,this.vy[F]+=I/V*.25*c.hands.clap}this.breath+=(m.bass*c.sound.bass-this.breath)*w(4);for(let F=0;F<3;F++)this.flow[F]+=(this.flowTo[F]-this.flow[F])*w(.3);const X=!e.synthetic?[e.left,e.right].filter(F=>!!F):[],U=X.length?m.fist:0,z=Math.max(Math.min(1,c.form.circle),U*Math.min(1,c.hands.reach));this.gather+=(z-this.gather)*w(z>this.gather?.9:.6);const E=.018*c.field.drift,N=this.time,Z=d/2,B=.5,Y=.3,ue=N*.04,fe=Math.exp(-_*2.2);for(let F=0;F<this.n;F++){const te=this.z[F],I=this.angleAt(this.x[F],this.y[F],N);let V=this.x[F]+(Math.cos(I)*E*te+this.vx[F])*g,Me=this.y[F]+(Math.sin(I)*E*te+this.vy[F])*g;V+=(V-Z)*this.breath*.004*te,Me+=(Me-B)*this.breath*.004*te;for(const Ae of X){const xe=Ae.position.x*d,j=Ae.position.y,ae=V-xe,G=Me-j,de=ae*ae+G*G,Te=Math.exp(-de/.02)*(1-U)*c.hands.reach;if(Te>.01){const pe=Math.sqrt(de)+.01;V+=ae/pe*Te*.006,Me+=G/pe*Te*.006,this.light[F]=Math.max(this.light[F],Te*.9)}}if(this.gather>.002){const Ae=this.phase[F]+ue,xe=Y*(.94+.12*(F*.618%1))*(1+.06*this.breath),j=Z+Math.cos(Ae)*xe,ae=B+Math.sin(Ae)*xe,G=this.gather*this.gather*w(1.6);V+=(j-V)*G,Me+=(ae-Me)*G}V<-.02?V+=d+.04:V>d+.02&&(V-=d+.04),Me<-.02?Me+=1.04:Me>1.02&&(Me-=1.04),this.x[F]=V,this.y[F]=Me,this.vx[F]*=fe,this.vy[F]*=fe,this.light[F]*=Math.exp(-_*(1.6+.8*Math.random()))}for(const F of this.events){F.age+=_;const te=F.age*.55;for(let I=0;I<this.n;I++){const V=this.x[I]-F.x,Me=this.y[I]-F.y;let Ae=0;if(F.kind===0){const xe=Math.hypot(V,Me)-te;Ae=Math.exp(-(xe*xe)/.0012)}else if(F.kind===1)F.age<_*1.5&&Math.hypot(V,Me)<F.reach*.6&&Math.random()<.35&&(Ae=.6+Math.random()*.6);else{const xe=Math.cos(F.angle),j=Math.sin(F.angle),ae=V*-j+Me*xe-(F.age-.6)*.08;Ae=Math.exp(-(ae*ae)/25e-5)*(Math.abs(V*xe+Me*j)<F.age*1.4?1:0)}Ae>.02&&(this.light[I]=Math.max(this.light[I],1.6*Ae*F.strength*(1-F.age/2.2)))}}this.events=this.events.filter(F=>F.age<2.2),l.globalCompositeOperation="source-over",l.globalAlpha=1-.92*Math.max(0,Math.min(1,c.look.trail)),l.fillStyle="#000",l.fillRect(0,0,f,p),l.globalAlpha=1;const H=8,ne=[];for(let F=0;F<H;F++)ne.push(new Path2D);const W=Math.max(.6,p/720*1.6*c.field.size),O=.2*c.look.glow;for(let F=0;F<this.n;F++){const te=this.z[F],I=.6+.4*Math.sin(N*.7+this.phase[F]*5),V=Math.min(1,(O*I+this.light[F])*(.35+.65*te)+.2*this.gather*te);if(V<.03)continue;const Me=Math.min(H-1,Math.floor(V*H)),Ae=W*(.5+te)*(1+.6*Math.min(1,this.light[F]));ne[Me].rect(this.x[F]*p-Ae/2,this.y[F]*p-Ae/2,Ae,Ae)}for(let F=0;F<H;F++)l.globalAlpha=(F+.5)/H,l.fillStyle="#fff",l.fill(ne[F]);if(c.look.grain>.01){l.globalCompositeOperation="lighter",l.globalAlpha=.05*c.look.grain;const F=Math.floor(Math.random()*256),te=Math.floor(Math.random()*256),I=l.createPattern(this.grain,"repeat");I&&(l.save(),l.translate(-F,-te),l.fillStyle=I,l.fillRect(F,te,f,p),l.restore())}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const z0={line:{count:14,weight:1,wave:1,birth:1,zoom:1,speed:1},hands:{open:1,pull:1,clap:1},sound:{beat:1,bass:1,grow:1}},H0=110,KE=5;function V0(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class qE{constructor(e,t){Q(this,"canvas");Q(this,"ctx");Q(this,"cfg",z0);Q(this,"playing",new Ma(.5));Q(this,"age",0);Q(this,"time",0);Q(this,"unfold",0);Q(this,"breath",0);Q(this,"shiver",0);Q(this,"pulses",[]);Q(this,"lastKick",0);Q(this,"hand",{x:.5,y:.5,hold:0});Q(this,"idle",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=_a(z0,e)}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,p=o.height;if(!f||!p)return;const d=this.playing;d.read(e,r);const{dt:m}=d,_=Math.max(0,d.step);this.age+=_,this.time+=_*Math.max(0,c.line.speed),this.idle+=m;const g=F=>1-Math.exp(-m*F),x=[e.left,e.right].filter(Boolean),S=x.length>0&&!e.synthetic,w=!!(r!=null&&r.live);let y;S?y=(1-d.fist)*c.hands.open:w?y=(.12+.88*d.energy)*c.sound.grow:y=.35+.3*Math.sin(this.idle*.21),this.unfold+=(Math.min(1,Math.max(0,y))-this.unfold)*g(S?5:.8),this.breath+=(d.bass*c.sound.bass-this.breath)*g(3),d.clapped&&(this.shiver=Math.min(1.4,d.clapStrength*1.3*c.hands.clap)),this.shiver*=Math.exp(-m*2.4);const M=Math.max(d.kick,d.bump)*c.sound.beat;M>.45&&this.lastKick<=.45&&(this.pulses.push({at:0,strength:Math.min(1.2,M)}),this.pulses.length>KE&&this.pulses.shift()),this.lastKick=M;for(const F of this.pulses)F.at+=m*.75;if(this.pulses=this.pulses.filter(F=>F.at<.75),x.length){const F=x.reduce((I,V)=>I+V.position.x,0)/x.length,te=x.reduce((I,V)=>I+V.position.y,0)/x.length;this.hand.x+=(F-this.hand.x)*g(8),this.hand.y+=(te-this.hand.y)*g(8)}this.hand.hold+=((S?c.hands.pull:0)-this.hand.hold)*g(4);const C=c.line.birth,P=C<=0?1:Math.min(1,Math.max(0,(this.age-1.6*C)/(5*C))),L=P*P*(3-2*P),X=C<=0?0:Math.max(0,1-this.age/(2.4*C));l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,p);const U=Math.max(1,Math.round(c.line.count)),[z,E,N]=V0(t[0]??"#8899ff"),[Z,B,Y]=V0(t[2]??t[1]??"#ffffff"),ue=Math.max(.1,c.line.zoom),fe=p*ue,H=p/720*ue,ne=fe*.74*this.unfold*(1+.12*this.breath),W=c.line.wave,O=this.time;if(l.lineCap="round",l.lineJoin="round",l.globalCompositeOperation="lighter",X>.01){const F=(3+2.5*Math.sin(this.idle*2.2))*H*(1+this.breath);l.globalAlpha=Math.min(1,X*1.4),l.fillStyle="#fff",l.beginPath(),l.arc(f/2,p/2,Math.max(1,F),0,Math.PI*2),l.fill()}if(L>.002){const F=.5-.5*L,te=.5+.5*L;for(let I=0;I<U;I++){const V=U===1?0:I/(U-1)*2-1,Me=V*2.6*this.unfold,Ae=this.shiver*Math.sin(I*12.9898)*43758.5453,xe=(Ae-Math.floor(Ae)-.5)*this.shiver*fe*.09;l.beginPath();let j=0,ae=0;for(let Ve=0;Ve<=H0;Ve++){const tt=F+(te-F)*(Ve/H0),nt=Math.sin(Math.PI*tt);let it=p/2+V*ne*.5;it+=(Math.sin(tt*6.2+O*.55+Me)*.6+Math.sin(tt*13.7-O*.38+Me*1.7)*.25)*fe*.035*W*nt*(.35+.65*this.unfold+this.breath*.6),it+=xe*nt*Math.sin(tt*20+I);for(const yt of this.pulses){const D=Math.abs(tt-.5)-yt.at;it-=Math.exp(-(D*D)/.0016)*yt.strength*fe*.05*(1-yt.at/.75)*(V===0?1:Math.sign(V)*-1)}if(this.hand.hold>.01){const yt=tt-this.hand.x,D=Math.exp(-(yt*yt)/.022)*Math.min(1,this.hand.hold)*.85;it+=(this.hand.y*p-it)*D}const ct=tt*f;Ve===0?l.moveTo(ct,it):l.quadraticCurveTo(j,ae,(j+ct)/2,(ae+it)/2),j=ct,ae=it}l.lineTo(j,ae);const G=Math.abs(V)*this.unfold,de=Math.round(255+(z+(Z-z)*(V*.5+.5)-255)*G),Te=Math.round(255+(E+(B-E)*(V*.5+.5)-255)*G),pe=Math.round(255+(N+(Y-N)*(V*.5+.5)-255)*G),Fe=1/(1+(U-1)*(1-this.unfold)),Se=c.line.weight*H*(1+.35*M);l.strokeStyle=`rgb(${de},${Te},${pe})`,l.globalAlpha=Math.min(1,.16*Fe*2.2),l.lineWidth=7*Se,l.stroke(),l.globalAlpha=Math.min(1,.95*Math.max(Fe,.3+.7*this.unfold)),l.lineWidth=1.5*Se,l.stroke()}}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const G0={colour:{speed:1,offset:0,palette:0,depth:.32},field:{count:3,zoom:1,sway:1,bounce:0,drift:.2,backdrop:1},hands:{wind:1,release:1,follow:1,clap:1},sound:{wind:1,gust:1,mid:1,high:1}};function lv(s,e){s.traverse(t=>{if(t instanceof Fn||t instanceof wy||t instanceof Ay){t.geometry.dispose();const r=t.material;Array.isArray(r)?r.forEach(o=>o.dispose()):r.dispose()}}),s.clear(),e.dispose(),e.forceContextLoss()}const YE="/assets/dandelion-hJsSsoAd.bin";let la=null;function QE(){return la||(la=fetch(YE).then(s=>{if(!s.ok)throw new Error(`dandelion.bin: ${s.status}`);return s.arrayBuffer()}).then(ZE),la.catch(()=>{la=null})),la}function ZE(s){const e=new DataView(s);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="DNDL")throw new Error("Not a dandelion file");const r=e.getUint32(4,!0),o=JSON.parse(new TextDecoder().decode(new Uint8Array(s,8,r))),l=8+r,c=(j,ae)=>new Float32Array(s.slice(l+j,l+j+ae*4)),f=(j,ae)=>new Int8Array(s.slice(l+j,l+j+ae)),p=(j,ae)=>new Uint8Array(s.slice(l+j,l+j+ae)),d=(j,ae)=>new Uint32Array(s.slice(l+j,l+j+ae*4)),m=j=>{const ae=o.parts[j],G=c(ae.pos,ae.count*3),de=f(ae.nrm,ae.count*3),Te=new Float32Array(ae.count*3);for(let pe=0;pe<Te.length;pe++)Te[pe]=de[pe]/127;return{p:ae,position:G,normal:Te,index:d(ae.idx,ae.index)}},_=["stem","base","bracts"].map(m);let g=0,x=0;for(const j of _)g+=j.p.count,x+=j.index.length;const S=new Float32Array(g*3),w=new Float32Array(g*3),y=new Float32Array(g),M=new Uint32Array(x);let C=0;{let j=0,ae=0;_.forEach((G,de)=>{S.set(G.position,j*3),w.set(G.normal,j*3),y.fill(de===0?0:1,j,j+G.p.count);for(let Te=0;Te<G.index.length;Te++)M[ae+Te]=G.index[Te]+j;if(de===0)for(let Te=1;Te<G.position.length;Te+=3)C=Math.min(C,G.position[Te]);j+=G.p.count,ae+=G.index.length})}const P=new Nn;P.setAttribute("position",new Gt(S,3)),P.setAttribute("normal",new Gt(w,3)),P.setAttribute("aRigid",new Gt(y,1)),P.setIndex(new Gt(M,1));const L=o.seeds,X=c(L.pivot,L.count*3),U=c(L.axis,L.count*3),z=m("achenes"),E=p(o.parts.achenes.seed,z.p.count),N=new Float32Array(z.p.count),Z=new Float32Array(z.p.count*3);for(let j=0;j<z.p.count;j++){const ae=E[j];N[j]=ae,Z[j*3]=X[ae*3],Z[j*3+1]=X[ae*3+1],Z[j*3+2]=X[ae*3+2]}const B=new Nn;B.setAttribute("position",new Gt(z.position,3)),B.setAttribute("normal",new Gt(z.normal,3)),B.setAttribute("aSeed",new Gt(N,1)),B.setAttribute("aPivot",new Gt(Z,3)),B.setIndex(new Gt(z.index,1));const Y=L.segments,ue=c(L.a,Y*3),fe=c(L.b,Y*3),H=p(L.seed,Y),ne=c(L.ta,Y),W=c(L.tb,Y),O=new Float32Array(Y*4*3),F=new Float32Array(Y*4*3),te=new Float32Array(Y*4*3),I=new Float32Array(Y*4*2),V=new Float32Array(Y*4),Me=new Float32Array(Y*4),Ae=new Uint32Array(Y*6);for(let j=0;j<Y;j++){const ae=H[j];for(let de=0;de<4;de++){const Te=j*4+de;O.set(ue.subarray(j*3,j*3+3),Te*3),F.set(fe.subarray(j*3,j*3+3),Te*3),te.set(X.subarray(ae*3,ae*3+3),Te*3);const pe=de>>1,Fe=de&1?1:-1;I[Te*2]=pe,I[Te*2+1]=Fe,V[Te]=ae,Me[Te]=pe?W[j]:ne[j]}const G=j*4;Ae.set([G,G+1,G+2,G+2,G+1,G+3],j*6)}const xe=new Nn;xe.setAttribute("position",new Gt(O,3)),xe.setAttribute("aB",new Gt(F,3)),xe.setAttribute("aPivot",new Gt(te,3)),xe.setAttribute("aCorner",new Gt(I,2)),xe.setAttribute("aSeed",new Gt(V,1)),xe.setAttribute("aT",new Gt(Me,1)),xe.setIndex(new Gt(Ae,1));for(const j of[P,B,xe])j.boundingSphere=new _o(new J(0,-5,0),1e4);return{body:P,achenes:B,strokes:xe,seeds:L.count,pivot:X,axis:U,foot:C}}const lo=20,kf=[1.4,3.2],Bf=[2.6,4.6],Sa=`
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
${Sa}
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
${Sa}
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
${Sa}
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
${Sa}
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
${Sa}
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
}`;function zf(s,e){let t=0,r=1/e;for(;s>0;)t+=s%e*r,s=Math.floor(s/e),r/=e;return t}function Ni(s){const e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)}const Hf=Array.from({length:lo},(s,e)=>({x:e===0?0:zf(e+1,2)*2-1,z:e===0?0:-4.6+zf(e,3)*6,y:e===0?.3:-.4+zf(e,5)*1.9,k:e===0?1:.85+Ni(e)*.3,yaw:Ni(e+40)*Un,ph:Ni(e+80)*Un,off:e*.137%1}));class nw{constructor(e,t,r=null){Q(this,"canvas");Q(this,"ctx");Q(this,"cfg",G0);Q(this,"surface");Q(this,"renderer",null);Q(this,"host");Q(this,"scene");Q(this,"camera");Q(this,"group",new qi);Q(this,"depth",0);Q(this,"scale",1);Q(this,"look",null);Q(this,"playing",new Ma(.5));Q(this,"failed",!1);Q(this,"model",null);Q(this,"flowers",[]);Q(this,"materials",[]);Q(this,"started",!1);Q(this,"since",0);Q(this,"seedTex",null);Q(this,"seedData",new Float32Array(0));Q(this,"off",new Float32Array(0));Q(this,"vel",new Float32Array(0));Q(this,"turn",new Float32Array(0));Q(this,"hold",new Float32Array(0));Q(this,"away",new Uint8Array(0));Q(this,"thresh",new Float32Array(0));Q(this,"flight",new Float32Array(0));Q(this,"dest",new Float32Array(0));Q(this,"phase",new Float32Array(0));Q(this,"motionTime",0);Q(this,"colourTime",0);Q(this,"gust",0);Q(this,"lastBeat",!1);Q(this,"lastClap",!1);Q(this,"hop",0);Q(this,"dance",0);Q(this,"sinceClap",99);Q(this,"lastAim",{x:0,y:0});Q(this,"swipe",new Dt);Q(this,"present",0);Q(this,"strokeWidth",null);Q(this,"viewport",null);Q(this,"time",null);this.canvas=e,this.ctx=t,this.host=r,this.scene=r?r.scene:new Ng,this.camera=r?r.camera:new ai(30,16/9,.1,200),this.surface=document.createElement("canvas");try{r||(this.renderer=ov(this.surface)),this.look=r?r.look:new iv}catch(o){console.error("Dandelion could not start:",o),this.failed=!0;return}QE().then(o=>{this.look&&this.build(o)}).catch(o=>{console.error("Dandelion model failed to load:",o),this.failed=!0})}setParams(e){this.cfg=_a(G0,e)}isReady(){return this.model!==null||this.failed}build(e){const t=this.look,r=e.seeds,o=r*lo;this.seedData=new Float32Array(r*2*lo*4),this.seedTex=new Bg(this.seedData,r*2,lo,yi,ki),this.seedTex.magFilter=dn,this.seedTex.minFilter=dn,this.seedTex.needsUpdate=!0,this.off=new Float32Array(o*3),this.vel=new Float32Array(o*3),this.turn=new Float32Array(o*4);for(let m=0;m<o;m++)this.turn[m*4+3]=1;this.hold=new Float32Array(o),this.away=new Uint8Array(o),this.thresh=new Float32Array(o),this.flight=new Float32Array(o),this.dest=new Float32Array(o*3),this.phase=new Float32Array(o);for(let m=0;m<o;m++)this.thresh[m]=.12+Ni(m*3.7+1)*1,this.phase[m]=Ni(m*1.3+7)*Un;const l={value:new Dt(1,1)},c={value:0},f={value:e.foot},p={value:this.seedTex},d={value:1.5};this.strokeWidth=d,this.viewport=l,this.time=c;for(let m=0;m<lo;m++){const _=t.shared(),g={uBend:{value:new J},uWave:{value:new Dt},uWavePhase:{value:0},uRow:{value:m},uShimmer:{value:0}},x={..._,...g,uViewport:l,uTime:c,uFoot:f,uSeeds:p},S=(M,C,P={})=>{const L=new Mi({vertexShader:M,fragmentShader:C,uniforms:{...x,...P},side:Fi});return this.materials.push(L),L},w=new qi;w.add(new Fn(e.body,S(JE,W0))),w.add(new Fn(e.achenes,S($E,W0)));const y=S(ew,tw,{uWidth:d});y.transparent=!0,y.depthWrite=!1,w.add(new Fn(e.strokes,y));for(const M of w.children)M.frustumCulled=!1;w.visible=!1,this.group.add(w),this.flowers.push({root:w,shared:_,u:g,presence:0,at:new J,size:1,placed:!1,bend:new Dt})}this.scene.add(this.group),this.model=e}pickDestination(e,t,r){const o=-4+Math.random()*6,l=(15.5-o)*t;this.dest[e*3]=(Math.random()*2-1)*l*r*.92,this.dest[e*3+1]=.1+(Math.random()*1.75-.85)*l,this.dest[e*3+2]=o}destroy(){var e,t;this.host||(e=this.look)==null||e.dispose(),this.look=null,(t=this.seedTex)==null||t.dispose();for(const r of this.materials)r.dispose();for(const r of this.flowers)r.root.clear();this.scene.remove(this.group),this.renderer&&lv(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const p=this.renderer;if(this.failed||!p||!this.look){av(o,c,f,"DANDELION");return}sv(o,c,f,l.field.backdrop),this.model&&(rv(this.camera,c,f),this.camera.position.set(0,.5,15.5/Math.max(.3,l.field.zoom)),this.camera.lookAt(0,.1,0),this.update(e,t,r,c,f),(this.surface.width!==c||this.surface.height!==f)&&p.setSize(c,f,!1),p.render(this.scene,this.camera),o.drawImage(this.surface,0,0,c,f))}update(e,t,r,o,l){const{cfg:c}=this,f=this.look,p=this.model;if(!f||!p||this.failed)return;const d=this.playing;d.read(e,r);const{dt:m}=d,_=Math.max(0,d.step),g=e.left||e.right?1:0;this.present+=(g-this.present)*(1-Math.exp(-m*3));const x=Math.min(1,((r==null?void 0:r.overall)??0)*1.4)*c.sound.wind;this.motionTime+=_,this.colourTime+=(_*c.colour.speed*(1+d.mid*c.sound.mid*1.2)+m*d.burst*c.hands.clap*.9)/rc;const S=this.motionTime,w=!!(r!=null&&r.beat),y=w&&!this.lastBeat,M=y&&c.sound.gust>0;this.hop=Math.max(this.hop*Math.exp(-m*5),y?(r==null?void 0:r.beatIntensity)||1:0),this.dance+=_,this.lastBeat=w,M&&(this.gust=Math.max(this.gust,((r==null?void 0:r.beatIntensity)||1)*c.sound.gust)),this.gust*=Math.exp(-m*2.5);const C=!!e.clapping&&c.hands.clap>0,P=C&&!this.lastClap;this.lastClap=C,this.sinceClap+=m;const L=Math.min(1,this.sinceClap/4)**3;P&&(this.sinceClap=0);const X=d.aim.x-this.lastAim.x,U=d.aim.y-this.lastAim.y;this.lastAim={x:d.aim.x,y:d.aim.y};const z=g?X/Math.max(m,.001):0,E=g?U/Math.max(m,.001):0;this.swipe.x+=(z-this.swipe.x)*(1-Math.exp(-m*6)),this.swipe.y+=(E-this.swipe.y)*(1-Math.exp(-m*6));const N=.5*Math.sin(S*.11)+.25*Math.sin(S*.27+1.3),Z=.25+x*1.6+this.gust*1.2,B=new J(Math.cos(N)*Z,.15*Math.sin(S*.19),Math.sin(N)*Z*.4);B.x+=sf.clamp(this.swipe.x,-4,4)*1.6*c.hands.wind,B.y+=sf.clamp(this.swipe.y,-4,4)*1*c.hands.wind;const Y=g?sf.clamp((d.openness-.6)/.4,-1,1)*c.hands.release:0,ue=c.field.drift,fe=Math.min(1,ue*2),H=Math.sqrt(Math.min(1,3/Math.max(1,Math.round(c.field.count)))),ne=Math.min(.72,H*(ue*(.25+x*.45)+Y*.3*this.present*fe)),W=L*Math.min(1,c.hands.clap)*fe*H,O=Math.min(1,ne*5),F=g&&d.openness<.15&&c.hands.release>0,te=!this.started;this.host||f.update(t,c.colour.palette,m,te);const I=Math.tan(this.camera.fov/2*Math.PI/180),V=o/l,Me=Math.max(0,Math.min(lo,Math.round(c.field.count))),Ae=Math.max(1,Me);this.since+=m;const xe=tv(this.since,Me),j=2.2*Math.pow(Ae,-.42)*this.scale;let ae=0;for(let D=0;D<Ae;D++)ae+=Hf[D].x;ae/=Ae;let G=0;for(let D=0;D<Ae;D++)G=Math.max(G,Math.abs(Hf[D].x-ae));const de=new J(d.aim.x*5.2,.1+d.aim.y*3,2),Te=1.2*Math.max(.4,1+(d.spread-.4)*1.6),pe=p.seeds,Fe=new J,Se=new Qi,Ve=new Qi,tt=new Qi,nt=new J,it=new J(0,1,0),ct=new J(1,0,0),yt=this.seedData;this.flowers.forEach((D,_t)=>{const ot=Hf[_t],gt=_t<xe;if(D.presence+=((gt?1:0)-D.presence)*(1-Math.exp(-m*1.4)),te&&(D.presence=0),!gt&&D.presence<.004&&(D.presence=0),D.root.visible=D.presence>.002,!D.root.visible){D.placed=!1,this.off.fill(0,_t*pe*3,(_t+1)*pe*3),this.vel.fill(0,_t*pe*3,(_t+1)*pe*3),this.away.fill(0,_t*pe,(_t+1)*pe),this.flight.fill(0,_t*pe,(_t+1)*pe);return}const Ee=j*ot.k,lt=(Ae===1?0:ot.z)+this.depth,b=(15.5-lt)*I*V,A=Ae===1?0:(ot.x-ae)/Math.max(.5,G)*b*(.66+.24*Math.min(1,(Ae-1)/12)),ie=.1-(15.5-lt)*I,_e=.1+(15.5-lt)*I;let ye=Ae===1?ot.y:ot.y*Math.min(1,.5+Ae*.1);ye=Math.min(ye,ie-p.foot*Ee-.4,_e-Ee*1.5),Fe.set(A,ye,lt),D.placed||(D.at.copy(Fe),D.size=Ee,D.placed=!0),D.at.lerp(Fe,1-Math.exp(-m*1.2)),D.size+=(Ee-D.size)*(1-Math.exp(-m*1.2));const Re=1-Math.pow(1-D.presence,3);D.root.position.set(D.at.x,D.at.y-(1-Re)*-p.foot*D.size*.8,D.at.z),D.root.rotation.y=ot.yaw,D.root.scale.setScalar(D.size*(.6+.4*Re));const Pe=D.root.scale.x,me=Math.cos(ot.yaw),ve=Math.sin(ot.yaw),ze=this.dance,Xe=D.at.x*.35,Ne=c.field.sway*(.45+x*1),Ue=Ne*(.85*Math.sin(Un*ze/5.2-Xe+ot.ph*.3)+.15*Math.sin(Un*ze/3.3+ot.ph*1.7))+B.x*.22+this.gust*.5,ut=Ne*.3*Math.sin(Un*ze/7.1+ot.ph*2.3)+B.z*.22;D.bend.x+=(Ue-D.bend.x)*(1-Math.exp(-m*1.6)),D.bend.y+=(ut-D.bend.y)*(1-Math.exp(-m*1.6));const ft=D.bend.x,Mt=D.bend.y;D.u.uBend.value.set(ft*me-Mt*ve,0,ft*ve+Mt*me);const K=c.field.sway*(.12+x*.3);D.u.uWave.value.set(K*me,K*ve),D.u.uWavePhase.value=Un*ze/1.6-Xe*2+ot.ph;const De=c.field.bounce*D.size*((.08+x*.22)*Math.sin(Un*ze/1.2-Xe+ot.ph)+.3*this.hop*(.6+.4*Ni(_t+7)));D.root.position.y+=De,D.u.uShimmer.value=d.high*c.sound.high*2;const he=D.root.position.x+ft*Pe,We=D.root.position.y,Oe=D.root.position.z+Mt*Pe;for(let qe=0;qe<pe;qe++){const je=_t*pe+qe,At=je*3;P&&Ni(je*1.37+S*7.3)<W?this.hold[je]=Bf[0]+Ni(je+S)*(Bf[1]-Bf[0]):M&&Ni(je*.71+S*13.1)<.008*c.sound.gust*ue*H&&(this.hold[je]=kf[0]+Ni(je+S*3.1)*(kf[1]-kf[0])),this.hold[je]=Math.max(0,this.hold[je]-m);const Lt=.06*O*Math.sin(S*.37+this.phase[je]);F&&(this.flight[je]=0);const an=!F&&(this.hold[je]>0||this.flight[je]>0||ne+Lt>this.thresh[je]),On=p.pivot[qe*3],Si=p.pivot[qe*3+1],$i=p.pivot[qe*3+2],Ai=p.axis[qe*3],er=p.axis[qe*3+1],$n=p.axis[qe*3+2],Kr=Ai*me+$n*ve,Ss=-Ai*ve+$n*me;if(an&&!this.away[je]){this.flight[je]=6+Math.random()*6,this.pickDestination(je,I,V);const nn=.4+(P&&this.hold[je]>0?3.2*c.hands.clap*L:0);this.vel[At]+=Kr*nn,this.vel[At+1]+=er*nn+.2,this.vel[At+2]+=Ss*nn}this.away[je]=an?1:0;let ln=this.off[At],wn=this.off[At+1],kn=this.off[At+2],Tn=this.vel[At],Bn=this.vel[At+1],zn=this.vel[At+2];if(_>0||an){const nn=Math.max(_,0),R=he+(On*me+$i*ve)*Pe+ln,ee=We+Si*Pe+wn,le=Oe+(-On*ve+$i*me)*Pe+kn,oe=Math.sin(ee*.9+S*.7+this.phase[je])*.6,se=Math.sin(R*.7-S*.5+this.phase[je]*.5)*.45,Be=Math.sin(le*.8+R*.5+S*.6)*.4;if(an){this.flight[je]=Math.max(0,this.flight[je]-nn);const Ge=je*3;let Ie=this.dest[Ge]-R,Ze=this.dest[Ge+1]-ee,Je=this.dest[Ge+2]-le;const ht=Math.hypot(Ie,Ze,Je);ht<.8&&this.pickDestination(je,I,V);const dt=(1.2+.9*Ni(je*2.9))*Math.min(1,ht/2);Ie=Ie/Math.max(ht,.001)*dt,Ze=Ze/Math.max(ht,.001)*dt,Je=Je/Math.max(ht,.001)*dt;let et=(Ie-Tn)*.7+B.x*.3+oe*.8,Ct=(Ze-Bn)*.7+B.y*.3+se*.8+.05,Ot=(Je-zn)*.7+B.z*.3+Be*.6;if(this.present>.01&&c.hands.follow>0){const Et=de.x-R,gn=de.y-ee,Sn=de.z-le,St=Math.hypot(Et,gn,Sn)+.001,ei=this.present*c.hands.follow*Math.min(1,St/Te-.6);et+=Et/St*ei*2.2-gn/St*this.present*c.hands.follow*1.4,Ct+=gn/St*ei*2.2+Et/St*this.present*c.hands.follow*1.4,Ot+=Sn/St*ei*1.2}const Wt=(15.5-le)*I,kt=Wt*V,Zt=Math.abs(R)-kt*1.02;Zt>0&&(et-=Math.sign(R)*Zt*1.5);const Ye=Math.abs(ee-.1)-Wt*1.02;Ye>0&&(Ct-=Math.sign(ee-.1)*Ye*1.5),le>6&&(Ot-=(le-6)*1.5),le<-8&&(Ot+=(-8-le)*1.5),Tn+=et*nn*1.6,Bn+=Ct*nn*1.6,zn+=Ot*nn*1.6;const rn=Math.exp(-nn*.5);Tn*=rn,Bn*=rn,zn*=rn}else{const Ge=Math.hypot(ln,wn,kn),Ie=Math.min(1.8,Ge*.9)/Math.max(Ge,1e-4),Ze=-ln*Ie+oe*Math.min(1,Ge)*.6,Je=-wn*Ie+se*Math.min(1,Ge)*.6,ht=-kn*Ie+Be*Math.min(1,Ge)*.6,dt=1-Math.exp(-nn*2.4);Tn+=(Ze-Tn)*dt,Bn+=(Je-Bn)*dt,zn+=(ht-zn)*dt,Ge<.004&&Math.hypot(Tn,Bn,zn)<.02&&(ln=wn=kn=Tn=Bn=zn=0)}ln+=Tn*nn,wn+=Bn*nn,kn+=zn*nn}this.off[At]=ln,this.off[At+1]=wn,this.off[At+2]=kn,this.vel[At]=Tn,this.vel[At+1]=Bn,this.vel[At+2]=zn;const qr=Math.hypot(ln,wn,kn)/Pe,Yr=Math.min(1,qr/.8),ci=this.turn.subarray(je*4,je*4+4);if(Se.set(ci[0],ci[1],ci[2],ci[3]),Yr>.001){nt.set(Ai,er,$n),tt.setFromUnitVectors(nt,it);const nn=S*.6+this.phase[je];Ve.setFromAxisAngle(it,nn),tt.premultiply(Ve),Ve.setFromAxisAngle(ct,.3*Math.sin(S*1.3+this.phase[je]*2)),tt.premultiply(Ve),Ve.identity().slerp(tt,Yr),Se.slerp(Ve,1-Math.exp(-m*3))}else Se.slerp(Ve.identity(),1-Math.exp(-m*6));ci[0]=Se.x,ci[1]=Se.y,ci[2]=Se.z,ci[3]=Se.w;const ui=(_t*pe*2+qe*2)*4,jt=(ln*me-kn*ve)/Pe,Mo=(ln*ve+kn*me)/Pe;yt[ui]=jt,yt[ui+1]=wn/Pe,yt[ui+2]=Mo,yt[ui+3]=1-Math.min(1,qr/.6),yt[ui+4]=Se.x,yt[ui+5]=Se.y,yt[ui+6]=Se.z,yt[ui+7]=Se.w}const we=D.shared;we.uT.value=this.colourTime,we.uOff.value=ot.off+c.colour.offset,f.apply(we,c.colour.depth,.16*(1+d.high*c.sound.high*2))}),this.started=!0,this.seedTex.needsUpdate=!0,this.viewport.value.set(o,l),this.time.value=S,this.strokeWidth.value=Math.max(1,l/620)}}const X0={colour:{speed:1,offset:0,palette:0,style:0,depth:.32},swarm:{count:4,zoom:1,height:0,size:1,drift:1,pulse:1,tentacles:1,backdrop:1},hands:{follow:1,spread:1,clap:1},sound:{beat:1,bass:1,mid:1,high:1,flow:1,swell:0}};class iw{constructor(e,t,r=120,o=20){Q(this,"mesh");Q(this,"curve");Q(this,"position");Q(this,"normal");Q(this,"points",[]);Q(this,"tangents",[]);this.anchors=t,this.length=r,this.sides=o,this.curve=new by(t,!1,"centripetal");const l=(r+1)*(o+1),c=new Nn;this.position=new Gt(new Float32Array(l*3),3),this.normal=new Gt(new Float32Array(l*3),3),this.position.setUsage(km),this.normal.setUsage(km);const f=new Float32Array(l*2),p=[];for(let d=0;d<=r;d++)for(let m=0;m<=o;m++){const _=d*(o+1)+m;if(f[_*2]=d/r,f[_*2+1]=m/o,d<r&&m<o){const g=_,x=_+o+1;p.push(g,x,g+1,x,x+1,g+1)}}c.setAttribute("position",this.position),c.setAttribute("normal",this.normal),c.setAttribute("uv",new Gt(f,2)),c.setIndex(p);for(let d=0;d<=r;d++)this.points.push(new J),this.tangents.push(new J);this.mesh=new Fn(c,e),this.mesh.frustumCulled=!1}update(e,t=1){const{curve:r,points:o,tangents:l,length:c,sides:f}=this;r.updateArcLengths();for(let S=0;S<=c;S++)r.getPointAt(S/c,o[S]);for(let S=0;S<=c;S++){const w=o[Math.max(0,S-1)],y=o[Math.min(c,S+1)];l[S].subVectors(y,w).normalize()}const p=new J,d=new J,m=new J,_=l[0];p.set(0,0,1).addScaledVector(_,-_.z),p.lengthSq()<1e-6&&p.set(1,0,0).addScaledVector(_,-_.x),p.normalize();const g=this.position.array,x=this.normal.array;for(let S=0;S<=c;S++){const w=l[S];p.addScaledVector(w,-p.dot(w)).normalize(),d.crossVectors(w,p);const y=o[S],M=e*(1+(t-1)*(S/c));for(let C=0;C<=f;C++){const P=C/f*Un;m.copy(p).multiplyScalar(-Math.cos(P)).addScaledVector(d,Math.sin(P));const L=(S*(f+1)+C)*3;g[L]=y.x+m.x*M,g[L+1]=y.y+m.y*M,g[L+2]=y.z+m.z*M,x[L]=m.x,x[L+1]=m.y,x[L+2]=m.z}}this.position.needsUpdate=!0,this.normal.needsUpdate=!0}}const j0=9,Ql=8,K0=4,Zl=9,q0=[{c:[.2,.9,0],a:[1.6,.5,.8],s:1.25,off:0,ph:0,pulses:6},{c:[-3.9,1.5,-1.2],a:[1.2,.6,.8],s:1,off:.37,ph:2.1,pulses:7},{c:[4.1,.4,-.8],a:[1.1,.7,.6],s:1.05,off:.71,ph:4,pulses:5},{c:[-2,-.9,1.2],a:[1.4,.4,.5],s:.8,off:.18,ph:1,pulses:8},{c:[2.4,2.4,-3],a:[1.3,.5,.8],s:.85,off:.55,ph:3.2,pulses:6},{c:[-5.6,-.4,-2.6],a:[.9,.6,.6],s:.8,off:.86,ph:5,pulses:7},{c:[5.8,2,-4],a:[.8,.5,.6],s:.7,off:.28,ph:.6,pulses:9},{c:[-.6,2.7,-5],a:[1.6,.4,.8],s:.7,off:.63,ph:2.7,pulses:8}],rw=[[],[0],[1,2],[0,1,2],[0,1,2,3],[0,1,2,3,4],[0,1,2,3,4,5],[0,1,2,3,4,5,6],[0,1,2,3,4,5,6,7]],Vf=.62,sw=.55;function Y0(s,e,t=new J){return t.set(Math.sin(s)*.86*Math.cos(e),-.86*Math.sin(e)+.04,Math.cos(s)*.86*Math.cos(e))}function ow(s){const e=(s/Un%1+1)%1;return e<.22?Math.sin(e/.22*(Math.PI/2)):.5+.5*Math.cos((e-.22)/.78*Math.PI)}class aw{constructor(e,t,r=null){Q(this,"canvas");Q(this,"ctx");Q(this,"cfg",X0);Q(this,"host");Q(this,"surface");Q(this,"renderer",null);Q(this,"scene");Q(this,"camera");Q(this,"look",null);Q(this,"group",new qi);Q(this,"swarm",[]);Q(this,"geometries",[]);Q(this,"failed",!1);Q(this,"playing",new Ma(.6));Q(this,"motionTime",0);Q(this,"pace",1);Q(this,"handHold",0);Q(this,"colourTime",0);Q(this,"started",!1);Q(this,"since",0);Q(this,"current",0);Q(this,"carry",0);Q(this,"swell",0);Q(this,"bassAvg",0);this.canvas=e,this.ctx=t,this.host=r,this.surface=document.createElement("canvas"),this.scene=r?r.scene:new Ng,this.camera=r?r.camera:new ai(30,16/9,.1,100);try{r||(this.renderer=ov(this.surface)),this.look=r?r.look:new iv,this.build(this.look)}catch(o){console.error("Jellyfish could not start:",o),this.failed=!0}}setParams(e){this.cfg=_a(X0,e)}build(e){const t=new mc(1,44,30),r=new mc(1,40,26);this.geometries.push(t,r),this.scene.add(this.group);for(const o of q0){const l=e.shared(),c=e.shared(),f=new qi;this.group.add(f);const p=[],d=[];for(let x=0;x<j0;x++){const S=x/j0*Un,w=new qi;w.rotation.y=S;const y=new qi;y.rotation.x=Vf,w.add(y);const M=new Fn(t,e.material(VE,l,{uAng:{value:S}}));M.scale.set(.42,.18,.52),M.position.set(0,x*5%3*.02,.48),y.add(M),f.add(w),p.push(y),d.push(M)}const m=new Fn(r,e.material(WE,l));m.scale.set(.44,.26,.44),m.position.y=-.1,f.add(m);const _=[],g=e.material(GE,c,{uWS:{value:.6}});for(let x=0;x<Ql+K0;x++){const S=x>=Ql,w=S?(x-Ql)/K0*Un+.4:x/Ql*Un+.2,y=S?new J(Math.sin(w)*.08,-.25,Math.cos(w)*.08):Y0(w,Vf),M=Array.from({length:Zl},()=>new J),C=new iw(g,M,S?48:64,S?10:6);this.group.add(C.mesh),_.push({tube:C,from:y,links:M,angle:S?null:w,link:S?.2:.42,radius:S?.085:.028,phase:w*1.7+x})}this.swarm.push({spec:o,root:f,tilts:p,lobes:d,cap:m,strands:_,shared:l,strandShared:c,presence:0,beat:o.ph,lift:0,rise:0,pull:new J,up:new J(0,1,0),last:null,primed:!1})}}destroy(){var e;this.host||(e=this.look)==null||e.dispose(),this.look=null;for(const t of this.geometries)t.dispose();this.host?(this.scene.remove(this.group),this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())})):this.renderer&&lv(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const p=this.renderer;if(this.failed||!p||!this.look){av(o,c,f,"JELLYFISH");return}rv(this.camera,c,f);const d=-l.swarm.height*4.5;this.camera.position.set(0,.5+d,15.5/Math.max(.3,l.swarm.zoom)),this.camera.lookAt(0,.1+d,0),this.update(e,t,r),(this.surface.width!==c||this.surface.height!==f)&&p.setSize(c,f,!1),p.render(this.scene,this.camera),this.look.backdrop(o,c,f,l.swarm.backdrop),o.drawImage(this.surface,0,0,c,f)}update(e,t,r){const{cfg:o}=this,l=this.look;if(!l||this.failed)return;const c=this.playing;c.read(e,r);const{dt:f}=c;this.pace+=(Math.max(0,c.step)-this.pace)*(1-Math.exp(-f*.6));const p=this.pace*.6,d=c.burst*o.hands.clap,m=c.bump*o.sound.beat,_=!e.synthetic&&(e.left||e.right)?1:0;this.handHold+=(_-this.handHold)*(1-Math.exp(-f*3)),this.motionTime+=p,this.colourTime+=(p*o.colour.speed*(1+c.mid*o.sound.mid*1.2)+f*d*.9)/rc;const g=this.motionTime,x=Un*g/rc,S=Math.max(0,Math.min(8,Math.round(o.swarm.count))),w=!this.started;this.host||l.update(t,o.colour.palette,f,w,o.colour.style),this.since+=f;const y=new Set(rw[S].slice(0,tv(this.since*.55,S)));w&&(this.started=!0,this.swarm.forEach(O=>{O.presence=0}));const M=r!=null&&r.live?r.bass:0,C=Math.max(0,M-this.bassAvg-.12);this.bassAvg+=(M-this.bassAvg)*(1-Math.exp(-f*.5));const P=Math.min(1,C*2.2)*o.sound.swell;this.swell+=(P-this.swell)*(1-Math.exp(-f*(P>this.swell?2.5:.45)));const L=(_?Math.max(.3,1+(c.spread-.4)*o.hands.spread*1.6):1)*(1+this.swell*.9),X=new J(c.aim.x*4.6,c.aim.y*2.1,0).multiplyScalar(o.hands.follow*_),U=o.swarm.drift*(1+c.bass*o.sound.bass*.8),E=!!(r!=null&&r.live)?.35+.65*c.energy+.4*c.mid:.35;this.carry+=(o.sound.flow*E-this.carry)*(1-Math.exp(-f*.35)),this.current+=p*(.18+.5*this.carry);const N=.16*(1+c.high*o.sound.high*2.5),Z=1+c.high*o.sound.high*1.5,B=o.swarm.size,Y=new J,ue=new Qi,fe=new J(0,1,0),H=new J,ne=new J,W=new J;this.swarm.forEach((O,F)=>{const te=y.has(F)?1:0;O.presence=te>O.presence?Math.min(te,O.presence+f/5):Math.max(te,O.presence-f/3),O.presence<.004&&te===0&&(O.presence=0);const I=O.presence>.002;O.root.visible=I;for(const D of O.strands)D.tube.mesh.visible=I;if(!I){O.last=null,O.primed=!1;return}const V=O.spec;O.beat+=p*Un*(V.pulses/rc)+f*d*Un*1.5;const Me=ow(O.beat),Ae=Math.min(1.3,Math.max(Me,m*.7)+d*.4),xe=(O.grip??0)+(c.fist-(O.grip??0))*(1-Math.exp(-f*(7-F*.7))),j=Math.max(0,(xe-(O.gripWas??xe))/Math.max(f,.001));O.gripWas=xe,O.grip=xe;const ae=this.handHold,G=(Ae*(1-ae)+xe*ae)*o.swarm.pulse,de=(Math.min(1.3,Me+m*.15+d*.4+this.swell*.5)*(1-ae)+Math.min(1.3,j*.35)*ae)*o.swarm.pulse;O.rise+=(de*1.5-O.rise*1.2)*f,O.lift+=(O.rise-O.lift*.35)*f*.8,Y.set(V.c[0]*L+V.a[0]*U*Math.sin(x+V.ph),V.c[1]*Math.min(1.4,L)+V.a[1]*U*Math.sin(2*x+V.ph*1.7),V.c[2]+V.a[2]*U*Math.cos(x+V.ph*.6));const Te=this.current-F*.35;Y.x+=Math.sin(Te+V.ph*.5)*.9*this.carry,Y.y+=Math.sin(Te*.63+V.ph)*.3*this.carry,Y.z+=Math.cos(Te*.8+V.ph*1.3)*.5*this.carry;const pe=.8+1.6*(1-F/q0.length);if(O.pull.lerp(X,1-Math.exp(-f*pe)),Y.add(O.pull),d>.001&&(H.set(Y.x,Y.y-.5,0),H.lengthSq()<.01&&H.set(F%2?1:-1,.4,0),Y.addScaledVector(H.normalize(),d*2.6)),O.last){H.subVectors(Y,O.last).divideScalar(Math.max(f,.001));const D=new J(H.x*.12,1,H.z*.08).normalize();O.up.lerp(D,1-Math.exp(-f*1.5)).normalize()}O.last=(O.last??new J).copy(Y),Y.addScaledVector(O.up,O.lift-.6);const Fe=O.presence,Se=Fe*Fe*Fe*(Fe*(Fe*6-15)+10);Y.y-=(1-Se)*7,Y.y-=.9;const Ve=V.s*B*(.3+.7*Se)*(1+c.bass*o.sound.bass*.08+m*.04);{const D=this.camera.position,_t=Math.tan(this.camera.fov*Math.PI/360)*Math.max(1,D.z-Y.z),gt=D.y+_t-1.5*Ve-.8;Y.y>gt&&(Y.y=gt+.8*(1-Math.exp(-(Y.y-gt)/.8)))}O.root.position.copy(Y),ue.setFromUnitVectors(fe,O.up),O.root.quaternion.copy(ue),O.root.rotateY(Math.sin(x+V.ph)*.4),O.root.scale.setScalar(Ve);const tt=Vf+sw*G;for(const D of O.tilts)D.rotation.x=tt;for(const D of O.lobes)D.scale.y=.18*(1-.18*G);O.cap.scale.set(.44*(1-.2*G),.26*(1+.08*G),.44*(1-.2*G)),O.root.updateMatrix();const nt=o.swarm.tentacles,it=O.up.clone().negate();ne.set(1,0,0).applyQuaternion(O.root.quaternion);for(const D of O.strands){const _t=D.links;D.angle!==null&&Y0(D.angle,tt,D.from);const ot=_t[0].copy(D.from).applyMatrix4(O.root.matrix);if(!O.primed)for(let gt=1;gt<Zl;gt++)_t[gt].copy(ot).addScaledVector(it,D.link*Ve*nt*gt);for(let gt=1;gt<Zl;gt++){const Ee=_t[gt-1],lt=_t[gt];H.subVectors(lt,Ee),H.lengthSq()<1e-8&&H.copy(it),H.normalize().lerp(it,.22+.1*G).normalize();const b=Math.sin(D.phase+x*3*Z-gt*.75)*.06*Z*(gt/Zl);H.addScaledVector(ne,b).normalize(),lt.copy(Ee).addScaledVector(H,D.link*Ve*nt)}D.tube.update(D.radius*Ve,.25)}O.primed=!0;const ct=O.shared;ct.uT.value=this.colourTime,ct.uOff.value=V.off+o.colour.offset,ct.uWA.value=1,ct.uWB.value=.6,ct.uWC.value=.8+.4*Math.sin(x+V.ph);const yt=O.strandShared;yt.uT.value=this.colourTime,yt.uOff.value=V.off+.15+o.colour.offset,l.apply(ct,o.colour.depth,N),l.apply(yt,o.colour.depth,N)}),this.scene.updateMatrixWorld(!0),this.camera.updateMatrixWorld(!0);for(const O of this.swarm)O.root.visible&&(O.cap.getWorldPosition(W),W.applyMatrix4(this.camera.matrixWorldInverse),O.shared.uCenter.value.copy(W))}}const Q0={grid:{detail:.5,field:.5,figure:.4,words:1,zoom:1},hands:{light:1,close:1,clap:1},sound:{beat:1,quiet:1}};let kh=null,cv=0,sc=0;function lw(){sc++;let s=!1;return()=>{s||(s=!0,sc=Math.max(0,sc-1))}}function cw(){return sc>0}function uw(s,e,t){if(s.length<e*t)return;const r=new Uint8Array(e*t);for(let o=0;o<t;o++)for(let l=0;l<e;l++)r[o*e+l]=s[o*e+(e-1-l)];kh={data:r,width:e,height:t},cv=performance.now()}const fw=4e3;function hw(){return kh&&performance.now()-cv<fw?kh:null}function dw(s,e,t){const r=Math.min(s.width-1.001,Math.max(0,e*(s.width-1))),o=Math.min(s.height-1.001,Math.max(0,t*(s.height-1))),l=Math.floor(r),c=Math.floor(o),f=r-l,p=o-c,d=c*s.width+l,m=s.data[d],_=s.data[d+1],g=s.data[d+s.width],x=s.data[d+s.width+1];return(m+(_-m)*f+(g-m)*p+(m-_-g+x)*f*p)/255}const ca=8;function Z0(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class pw{constructor(e,t){Q(this,"canvas");Q(this,"ctx");Q(this,"cfg",Q0);Q(this,"playing",new Ma(.6));Q(this,"lit",new Float32Array(0));Q(this,"columns",0);Q(this,"rows",0);Q(this,"time",0);Q(this,"real",0);Q(this,"closed",0);Q(this,"focus",{x:.89,y:.5});Q(this,"rings",[]);Q(this,"lastKick",0);Q(this,"breath",0);Q(this,"release",null);Q(this,"glow",document.createElement("canvas"));Q(this,"glowKey","");this.canvas=e,this.ctx=t}setParams(e){this.cfg=_a(Q0,e)}destroy(){var e;(e=this.release)==null||e.call(this),this.release=null}tint(e){if(e===this.glowKey)return;this.glowKey=e;const[t,r,o]=Z0(e);this.glow.width=this.glow.height=96;const l=this.glow.getContext("2d");l.clearRect(0,0,96,96);const c=l.createRadialGradient(48,48,0,48,48,48),f=p=>Math.round(p+(255-p)*.6);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.1,`rgba(${f(t)},${f(r)},${f(o)},0.9)`),c.addColorStop(.35,`rgba(${t},${r},${o},0.25)`),c.addColorStop(1,`rgba(${t},${r},${o},0)`),l.fillStyle=c,l.fillRect(0,0,96,96)}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,p=o.height;if(!f||!p)return;const d=f/p,m=this.playing;m.read(e,r);const{dt:_}=m,g=Math.min(.08,Math.max(0,m.step));this.time+=g,this.real+=_;const x=pe=>1-Math.exp(-_*pe);this.tint(t[0]??"#8fb4ff"),c.grid.figure>.01&&!this.release&&(this.release=lw()),c.grid.figure<=.01&&this.release&&(this.release(),this.release=null);const S=Math.round(Math.max(8,Math.min(150,(22+34*Math.max(0,Math.min(1,c.grid.detail)))/Math.max(.2,c.grid.zoom)))),w=Math.round(S*d);(S!==this.rows||w!==this.columns)&&(this.rows=S,this.columns=w,this.lit=new Float32Array(S*w));const y=1/S,M=[e.left,e.right].filter(Boolean),C=M.length>0&&!e.synthetic;let P=M.map(pe=>{const Fe=pe.openness??(pe.gesture==="fist"?0:1),Se=pe.depth??.35;return{x:pe.position.x*d,y:pe.position.y,reach:(.04+.19*Fe*Fe)*c.hands.light*(.8+.6*Se),power:.85+.5*Se}});if(P.length&&!C&&(P=[{x:P.reduce((pe,Fe)=>pe+Fe.x,0)/P.length,y:P.reduce((pe,Fe)=>pe+Fe.y,0)/P.length,reach:.13*c.hands.light,power:.7}]),P.length){const pe=P.reduce((Se,Ve)=>Se+Ve.x,0)/P.length,Fe=P.reduce((Se,Ve)=>Se+Ve.y,0)/P.length;this.focus.x+=(pe-this.focus.x)*x(6),this.focus.y+=(Fe-this.focus.y)*x(6)}else this.focus.x+=(d/2-this.focus.x)*x(.8),this.focus.y+=(.5-this.focus.y)*x(.8);const L=!!(r!=null&&r.live);let X=0;C?X=m.fist*c.hands.close:L&&(X=Math.max(0,Math.min(.8,(.3-m.energy)*3.2))*c.sound.quiet),this.closed+=(Math.min(1,X)-this.closed)*x(X>this.closed?1.7:2.6),m.clapped&&c.hands.clap>0&&(this.rings.push({x:this.focus.x,y:this.focus.y,at:0,strength:m.clapStrength*c.hands.clap}),this.closed*=.25);const U=(pe,Fe,Se)=>{const Ve=Math.max(0,Math.min(1,(Se-pe)/(Fe-pe)));return Ve*Ve*(3-2*Ve)},z=U(.04,.62,this.closed),E=U(.55,1,this.closed),N=Math.max(m.kick,m.bump)*c.sound.beat;N>.45&&this.lastKick<=.45&&(this.rings.push({x:this.focus.x,y:this.focus.y,at:0,strength:.16+.14*Math.min(1,N)}),this.rings.length>6&&this.rings.shift()),this.lastKick=N;for(const pe of this.rings)pe.at+=_;this.rings=this.rings.filter(pe=>pe.at<2.6),this.breath+=(m.bass-this.breath)*x(3);const Z=this.release?hw():null,B=c.grid.figure,Y=c.grid.field,ue=this.time,fe=this.lit,H=x(16),ne=x(2.4),W=P[0],O=P[1];let F=0,te=0,I=0;W&&O&&(F=O.x-W.x,te=O.y-W.y,I=F*F+te*te);for(let pe=0;pe<S;pe++){const Fe=(pe+.5)*y;for(let Se=0;Se<w;Se++){const Ve=(Se+.5)*y;let tt=Y*(.16+.07*Math.sin(Ve*2.1+Fe*1.3-ue*.5)+.04*Math.sin(Ve*.9-Fe*2.7+ue*.31));Z&&B>.01&&(tt+=dw(Z,Ve/d,Fe)*.34*B);for(const it of P){const ct=Ve-it.x,yt=Fe-it.y;tt+=it.power*Math.exp(-(ct*ct+yt*yt)/(it.reach*it.reach))}if(I>1e-5){const it=Math.max(0,Math.min(1,((Ve-W.x)*F+(Fe-W.y)*te)/I)),ct=Math.hypot(Ve-(W.x+F*it),Fe-(W.y+te*it));tt+=.55*Math.exp(-(ct*ct)/(y*y*.5))}for(const it of this.rings){const ct=Math.hypot(Ve-it.x,Fe-it.y)-it.at*.85;ct>-.09&&ct<.09&&(tt+=it.strength*Math.exp(-(ct*ct)/.0011)*(1-it.at/2.6))}const nt=pe*w+Se;fe[nt]+=(tt-fe[nt])*(tt>fe[nt]?H:ne)}}l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,p);const V=[];for(let pe=0;pe<ca;pe++)V.push(new Path2D);const Me=y*p,Ae=1+.18*this.breath,xe=this.focus.x,j=this.focus.y;for(let pe=0;pe<S;pe++){if(z>.97&&pe%3!==0)continue;const Fe=(pe+.5)*y,Se=(j+(Fe-j)*(1-z))*p;for(let Ve=0;Ve<w;Ve++){const tt=fe[pe*w+Ve];if(tt<.03)continue;const nt=(Ve+.5)*y,it=(xe+(nt-xe)*(1-E))*p,ct=Math.min(ca-1,Math.floor(Math.min(.999,tt)*ca)),yt=Me*Math.min(.5,.07+.4*Math.min(1,tt))*Ae*(1-.45*z),D=V[ct];D.moveTo(it+yt,Se),D.arc(it,Se,yt,0,Math.PI*2)}}const[ae,G,de]=Z0(t[0]??"#8fb4ff"),Te=1-.82*z;for(let pe=0;pe<ca;pe++){const Fe=pe/(ca-1),Se=(Ve,tt)=>{const nt=tt+(255-tt)*Math.min(1,.35+Math.max(0,Fe*1.6-.6));return Math.round(Ve+(nt-Ve)*Math.min(1,Fe*1.4))};l.fillStyle=`rgb(${Se(150,ae)},${Se(156,G)},${Se(170,de)})`,l.globalAlpha=Math.min(1,(.3+.7*Fe)*Te),l.fill(V[pe])}if(E>.02){const pe=Me*(2.4+5*E)*(1+.25*this.breath);l.globalCompositeOperation="lighter",l.globalAlpha=Math.min(1,E*1.2),l.drawImage(this.glow,xe*p-pe,j*p-pe,pe*2,pe*2),l.globalCompositeOperation="source-over"}if(c.grid.words>.01){const pe=p/720,Fe=Math.max(9,Math.round(11*pe));l.font=`500 ${Fe}px ui-monospace, SFMono-Regular, Menlo, monospace`,l.textBaseline="alphabetic",l.textAlign="left";let Se;this.closed>.9?Se="standby":this.closed>.25?Se="closing":C?Se=P.length>1?"two hands":"one hand":Se=L?"listening":"waiting";const Ve=it=>Math.round(it+(255-it)*.7);l.fillStyle=`rgb(${Ve(ae)},${Ve(G)},${Ve(de)})`,l.globalAlpha=.6*c.grid.words;const tt=20*pe,nt=p-20*pe;if(l.fillText(Se,tt,nt),Math.floor(this.real*1.6)%2===0){const it=l.measureText(Se).width;l.fillRect(tt+it+5*pe,nt-Fe*.82,Fe*.55,Fe)}}l.globalAlpha=1}}const mw=1.4,gw=14,vw=1.2,J0=(s,e)=>1/(1+1/(2*Math.PI*s)/e);class so{constructor(e=mw,t=gw){Q(this,"value",null);Q(this,"speed",0);this.minCutoff=e,this.beta=t}next(e,t){if(this.value===null||t<=0)return this.value=e,this.speed=0,e;const r=(e-this.value)/t;this.speed+=(r-this.speed)*J0(vw,t);const o=this.minCutoff+this.beta*Math.abs(this.speed);return this.value+=(e-this.value)*J0(o,t),this.value}reset(){this.value=null,this.speed=0}}class _w{constructor(e=5){Q(this,"recent",[]);Q(this,"held",null);this.size=e}next(e){this.recent.push(e),this.recent.length>this.size&&this.recent.shift();const t=new Map;let r=e,o=0;for(const l of this.recent){const c=(t.get(l)??0)+1;t.set(l,c),(c>o||c===o&&l===this.held)&&(r=l,o=c)}return this.held=r,r}reset(){this.recent=[],this.held=null}}const $0=[{tip:8,pip:6},{tip:12,pip:10},{tip:16,pip:14},{tip:20,pip:18}];function xw(s,e){if(!s||s.length<21)return null;const t=(_,g)=>Math.hypot((_.x-g.x)*e,_.y-g.y,(_.z-g.z)*e),r=(_,g)=>Math.hypot((_.x-g.x)*e,_.y-g.y),o=s[0],l=s[9],c=r(o,l);if(c<1e-4)return null;let f=0,p=0;for(const _ of $0){const g=t(s[_.tip],o),x=t(s[_.pip],o);g>x*1.12&&f++,p+=Math.min(1,Math.max(0,(g/c-1.05)/.85))}const d=s[17];return t(s[4],d)>t(s[3],d)*1.12&&f++,{fingers:f,pinchGap:t(s[4],s[8])/c,openness:p/$0.length,size:c,angle:Math.atan2((l.x-o.x)*e,o.y-l.y)}}const eg=.32,Gf=.5,yw=180,tg=30,ng=.08,Mw=.32,Sw=.115,ig=.16,Aw=1.3,Ew=.2,ww=.28,Tw=.7,Cw=200,Rw=.3,bw=450,Pw=140;class rg{constructor(){Q(this,"points",Array.from({length:21},()=>({x:new so,y:new so,z:new so(1,6)})));Q(this,"size",new so(1,4));Q(this,"angle",new so(1.2,3));Q(this,"open",new so(2,6));Q(this,"fingers",new _w(5));Q(this,"pinched",!1);Q(this,"gesture","none");Q(this,"gestureSince",0);Q(this,"lastAngle",0);Q(this,"lastAt",0);Q(this,"hand",null);Q(this,"seenAt",0)}read(e,t,r){const o=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const l=e.map((w,y)=>({x:this.points[y].x.next(w.x,o),y:this.points[y].y.next(w.y,o),z:this.points[y].z.next(w.z,o)})),c=xw(e,r);if(!c)return this.hand;const f=this.fingers.next(c.fingers);this.pinched=c.pinchGap<(this.pinched?Gf:eg);const p=Math.max(0,f-1),d=this.pinched?"pinch":c.openness>.62?"open":c.openness<.28?"fist":p>=3?"open":p<=0?"fist":"none";d!==this.gesture&&(this.gesture=d,this.gestureSince=t);let m=c.angle;for(;m-this.lastAngle>Math.PI;)m-=2*Math.PI;for(;m-this.lastAngle<-Math.PI;)m+=2*Math.PI;this.lastAngle=this.angle.next(m,o);const _=Math.atan2(Math.sin(this.lastAngle),Math.cos(this.lastAngle)),g=this.size.next(c.size,o),x=this.points[9],S=Math.hypot(x.x.speed,x.y.speed);return this.seenAt=t,this.hand={position:{x:l[9].x,y:l[9].y},gesture:d,pinchDistance:this.pinched?c.pinchGap*c.size:void 0,velocity:Math.min(3,S*2),holdDuration:(t-this.gestureSince)/1e3,fingerCount:f,landmarks:l,pinch:Math.min(1,Math.max(0,(Gf+.25-c.pinchGap)/(Gf+.25-eg*.6))),openness:Math.min(1,Math.max(0,this.open.next(c.openness,o))),depth:Math.min(1,Math.max(0,(g-ng)/(Mw-ng))),angle:_},this.hand}forget(){for(const e of this.points)e.x.reset(),e.y.reset(),e.z.reset();this.size.reset(),this.angle.reset(),this.open.reset(),this.fingers.reset(),this.pinched=!1,this.gesture="none",this.lastAt=0,this.lastAngle=0,this.hand=null}}class Lw{constructor(){Q(this,"kept",{left:new rg,right:new rg});Q(this,"trail",[]);Q(this,"lastAt",0);Q(this,"clapAt",-1e9);Q(this,"clapStrength",0);Q(this,"gap",1);Q(this,"gapAt",-1e9);Q(this,"closing",0);Q(this,"counted",!1);Q(this,"held",!1)}next(e,t,r){const o={};(e.landmarks??[]).forEach((d,m)=>{var S,w,y,M;if(!d||d.length<21)return;const _=d.map(C=>({x:1-C.x,y:C.y,z:C.z}));let x=((M=(y=(w=(S=e.handedness)==null?void 0:S[m])==null?void 0:w[0])==null?void 0:y.categoryName)==null?void 0:M.toLowerCase())==="left"?"right":"left";if(o[x]){const C=o[x],P=_[9].x<C[9].x;o.left=P?_:C,o.right=P?C:_;return}o[x]=_});const c={left:null,right:null};for(const d of["left","right"]){const m=this.kept[d];o[d]?(c[d]=m.read(o[d],t,r),c[d]&&this.trail.push({...c[d].position,hand:d})):m.hand&&t-m.seenAt<=yw?c[d]=m.hand:m.hand&&m.forget()}this.trail.length>tg&&(this.trail=this.trail.slice(-tg)),c.gestureTrail=[...this.trail];const f=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const p=d=>{this.counted||t-this.clapAt<bw||(this.counted=!0,this.clapAt=t,this.clapStrength=Math.min(1,Math.max(.7,d)))};if(c.left&&c.right){const d=c.right.position.x-c.left.position.x,m=c.right.position.y-c.left.position.y;c.distanceBetweenHands=Math.hypot(d,m),c.twist=Math.atan2(m,d*r)}if(o.left&&o.right){const d=o.left[9],m=o.right[9],_=Math.hypot(m.x-d.x,m.y-d.y),g=(t-this.gapAt)/1e3,x=g>0&&g<.15?(this.gap-_)/g:0;this.closing=Math.max(x,this.closing*Math.exp(-f*12)),this.gap=_,this.gapAt=t,_>Rw&&(this.counted=!1),_<Ew&&this.closing>Aw&&p(this.closing/2.2),this.held=_<(this.held?ig:Sw),this.held&&(p(.7+this.closing/3),c.clapping=!0,c.clapIntensity=Math.max(.6,1-_/ig))}else t-this.gapAt<Cw&&this.gap<ww&&this.closing>Tw&&p(.75+this.closing/3),this.closing*=Math.exp(-f*6),this.held=!1,t-this.gapAt>1200&&(this.counted=!1);return t-this.clapAt<=Pw&&(c.clapping=!0,c.clapIntensity=Math.max(c.clapIntensity??0,this.clapStrength)),c}}const Iw=25e3,Uw=5e3,Dw=2e4,Nw=6e4,sg=640,Fw="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",og="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";function Ow({videoElement:s,onHandData:e}){const t=Ft.useRef(new Lw);return Ft.useEffect(()=>{let r=!0,o=0,l=-1,c=null,f=null,p=0,d=0;const m=()=>s.videoWidth&&s.videoHeight?s.videoWidth/s.videoHeight:16/9,_=(y,M)=>{r&&e(t.current.next(y,M,m()))},g=async()=>{if(!(!r||f))try{const y=await import(og),M=await y.FilesetResolver.forVisionTasks(`${og}/wasm`),C=await y.HandLandmarker.createFromOptions(M,{baseOptions:{modelAssetPath:Fw,delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5});if(!r){C.close();return}f=C,console.log("✋ Hand tracking is running on the page.");const P=()=>{if(!(!r||!f)&&(o=requestAnimationFrame(P),s.currentTime!==l)){l=s.currentTime;try{const L=performance.now();_(f.detectForVideo(s,L),L)}catch(L){console.error("Hand detection error:",L)}}};P()}catch(y){console.error("Hand tracking could not start:",y)}},x=y=>{c&&(console.warn(`Hand tracking is moving to the page: ${y}`),window.clearTimeout(p),cancelAnimationFrame(o),c.terminate(),c=null,g())},S=()=>{if(typeof Worker>"u"||typeof createImageBitmap!="function"||typeof OffscreenCanvas>"u"){g();return}try{c=new Worker("/hand-worker.js")}catch{g();return}let y=!1,M=!1,C=!1,P=!1,L=!1,X=!1;p=window.setTimeout(()=>{y||x("it took too long to start")},Iw);const U=()=>{if(!r||!c)return;if(o=requestAnimationFrame(U),M){performance.now()-d>(L?Nw:C?Uw:Dw)&&x("the worker stopped answering");return}if(s.currentTime===l||s.readyState<2)return;l=s.currentTime,M=!0,d=performance.now();const z=d,E=Math.min(sg,s.videoWidth||sg);createImageBitmap(s,{resizeWidth:E,resizeHeight:Math.max(1,Math.round(E/m())),resizeQuality:"low"}).then(N=>{if(!c){N.close();return}const Z=cw();Z&&!X&&(L=!0),c.postMessage({type:"frame",bitmap:N,time:z,mask:Z},[N])}).catch(()=>{M=!1})};c.onmessage=z=>{const E=z.data;E.type==="ready"?(y=!0,window.clearTimeout(p),console.log("✋ Hand tracking is running in a worker."),U()):E.type==="hands"?(M=!1,C=!0,E.mask&&(X=!0,L=!1,uw(E.mask.data,E.mask.width,E.mask.height)),_({landmarks:E.landmarks,handedness:E.handedness},E.time)):E.type==="note"?(X=!0,L=!1,console.warn(E.reason)):E.type==="failed"?x(E.reason):E.type==="error"&&(M=!1,P||(P=!0,console.warn("Hand tracking worker:",E.reason)),C||x(E.reason))},c.onerror=z=>x(z.message||"the worker failed"),c.postMessage({type:"init"})},w=()=>{r&&(s.readyState>=2?S():window.setTimeout(w,100))};return w(),()=>{r=!1,window.clearTimeout(p),cancelAnimationFrame(o),c==null||c.terminate(),c=null;try{f==null||f.close()}catch(y){console.warn("Error closing hand landmarker:",y)}f=null}},[s,e]),null}const kw=40;class Wf{constructor(e,t){Q(this,"history",[]);Q(this,"last",0);Q(this,"pulse",0);Q(this,"threshold",0);Q(this,"recent",[]);Q(this,"peak",0);Q(this,"flux",0);this.refractory=e,this.decay=t}measure(e,t,r,o){for(this.recent.push({at:r,rise:e,heard:t});this.recent.length&&r-this.recent[0].at>kw;)this.recent.shift();let l=0,c=0;for(const g of this.recent)l+=g.rise,c+=g.heard;this.history.push(l),this.history.length>90&&this.history.shift();const f=this.history.length;let p=0;for(const g of this.history)p+=g;p/=f;let d=0;for(const g of this.history)d+=(g-p)**2;const m=Math.sqrt(d/f);return this.threshold=p+m*1.9*(1.5-o),this.flux=l,this.peak=Math.max(l,this.peak*.9985),f>=20&&l>this.threshold&&l>this.peak*.5&&c>1.2*(1.3-o*.8)&&r-this.last>this.refractory?l/Math.max(1e-9,this.threshold):0}commit(e,t,r){e&&(this.last=t);const o=this.peak>0?Math.min(1,this.flux/this.peak):0;this.pulse=Math.max(this.pulse*Math.exp(-r/this.decay),e?Math.max(.4,o):0)}}function Bw(s,e,t,r){const o=s.map(c=>c.hits.measure(c.flux,c.audible,e,r)),l=Math.max(...o);s.forEach((c,f)=>c.hits.commit(o[f]>0&&o[f]>=l*.7,e,t))}class ag{constructor(e){Q(this,"ceiling",-100);Q(this,"floor",0);Q(this,"seen",!1);this.minSpan=e}place(e,t){this.seen||(this.seen=!0,this.ceiling=e,this.floor=e);const r=l=>1-Math.exp(-t/l);this.ceiling+=(e-this.ceiling)*r(e>this.ceiling?.5:60),this.floor+=(e-this.floor)*r(e<this.floor?2:60);const o=Math.min(this.floor,this.ceiling-this.minSpan);return Math.min(1,Math.max(0,(e-o)/(this.ceiling-o)))}}function zw(){return{overall:new ag(14),bass:new ag(14),overallSlow:0,bassMid:0,highFast:0,highSlow:0,out:0,onsets:[],energy:0,build:0,drop:0,bright:.5,heard:0}}const lg=-75,Hw=2.5;function Vw(s,e,t,r){const o=w=>1-Math.exp(-r/w),l=w=>Math.pow(10,w/10),c=w=>w>1e-10?10*Math.log10(w):-100;if(s.overallSlow+=(l(e.overall)-s.overallSlow)*o(2),s.bassMid+=(l(e.bass)-s.bassMid)*o(.5),s.highFast+=(e.high-s.highFast)*o(1),s.drop*=Math.exp(-r/1.2),s.heard+=r,s.heard<Hw){s.highSlow=s.highFast,s.energy=.5;return}s.highSlow+=(e.high-s.highSlow)*o(8);const f=c(s.overallSlow)>lg;s.energy=f?s.overall.place(c(s.overallSlow),r):0;const p=s.bass.place(c(s.bassMid),r),d=s.bass.ceiling>lg;for(e.onset&&s.onsets.push(t);s.onsets.length&&t-s.onsets[0]>2e3;)s.onsets.shift();let m=!1;d&&p<.4?s.out=Math.min(30,s.out+r):p>.65&&(s.out>=2&&(s.drop=Math.max(s.drop,Math.min(1,.55+s.out/14)),m=!0),s.out=0);const _=Math.min(1,Math.max(0,(s.highFast-s.highSlow)/18)),g=Math.min(1,Math.max(0,(s.onsets.length/2-3)/5)),x=Math.min(1,s.out/6),S=f&&s.out>0?x*x*(3-2*x)*Math.max(.1,_,g):0;if(s.build+=(S-s.build)*o(m||S<s.build?.25:.7),e.centroid>0){const w=Math.min(1,Math.max(0,Math.log2(e.centroid/300)/Math.log2(16.666666666666668)));s.bright+=(w-s.bright)*o(1.5)}}const uv={bass:[20,160],lowMid:[160,800],mid:[800,4e3],high:[4e3,12e3]},Gw=Object.keys(uv),Ww=.002,Xw=.04,jw=.25,Kw=.0016,qw=6,Yw=90,Qw=170,Zw=1.9;function Jw(){const s=()=>({floor:255,ceiling:0});return{envelopes:{bass:s(),lowMid:s(),mid:s(),high:s()},overall:s(),previous:null,flux:[],lastBeat:0,onset:0,rise:0,punch:0,lastNow:0,kick:new Wf(170,.16),snare:new Wf(170,.13),hat:new Wf(70,.06),sections:zw()}}const co=new Float32Array(256);for(let s=0;s<256;s++)co[s]=Math.pow(10,(s/255*70-100)/20)*1e3;const Xf={kick:[30,150],snare:[1500,5e3],hat:[6e3,12e3]};function cg(s,e){s.floor+=(e-s.floor)*(e>s.floor?Ww:Xw),s.ceiling+=(e-s.ceiling)*(e>s.ceiling?jw:Kw);const t=s.ceiling-s.floor;return t<qw?Math.min(1,e/190):Math.min(1,Math.max(0,(e-s.floor)/t))}function jf(s,e,t){const r=Math.max(0,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=s[c];return l/(o-r)}function ug(s,e,t){const r=Math.max(1,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=(co[s[c]]/1e3)**2;return l>0?Math.max(-100,10*Math.log10(l)):-100}function $w(s,e){const t=-100+10*Math.log10(Math.max(1,e))+5;return Math.min(1,Math.max(0,(s-t)/(-32-t)))}function eT(s,e,t,r,o){const l=e/2/s.length,c=W=>Math.round(W/l),f={};for(const W of Gw){const[O,F]=uv[W];f[W]=cg(t.envelopes[W],jf(s,c(O),c(F)))}const p=cg(t.overall,jf(s,c(20),c(12e3))),d=c(1e4),m=new Float32Array(d);for(let W=0;W<d&&W<s.length;W++)m[W]=s[W];let _=0,g=0;if(t.previous){for(let W=0;W<m.length;W++){const O=t.previous[W]??0,F=m[W]-O;F>0&&(_+=F,g+=co[m[W]]-co[O])}_/=m.length}t.punch=g;const x=t.lastNow?Math.min(.1,Math.max(.001,(o-t.lastNow)/1e3)):1/60;t.lastNow=o;const S=W=>{var Ae;const O=t.previous;if(!O)return{flux:0,audible:0};const F=Math.max(1,c(W[0])),te=Math.min(s.length,Math.max(F+1,c(W[1])));let I=0,V=0,Me=0;for(let xe=F;xe<te;xe++){const j=xe<O.length?O[xe]:((Ae=t.above)==null?void 0:Ae[xe-O.length])??s[xe];I+=co[s[xe]],V+=co[j],s[xe]>j&&(Me+=s[xe]-j)}return{flux:Math.max(0,I-V),audible:Me/(te-F)}},w=S(Xf.kick);Bw([{hits:t.kick,...w},{hits:t.snare,...S(Xf.snare)},{hits:t.hat,...S(Xf.hat)}],o,x,r),t.rise=_+w.audible*.5,t.previous=m,t.above=s.slice(d),t.flux.push(_),t.flux.length>Yw&&t.flux.shift();const y=t.flux.reduce((W,O)=>W+O,0)/Math.max(1,t.flux.length);let M=0;for(const W of t.flux)M+=(W-y)**2;const C=Math.sqrt(M/Math.max(1,t.flux.length)),P=Zw*(1.5-r*1),L=y+C*P,U=t.flux.length>=20&&_>L&&_>.35*(1.3-r*.8)&&o-t.lastBeat>Qw;U&&(t.lastBeat=o);const z=L>0?Math.min(1,(_-L)/(L+.6)):0;t.onset=Math.max(t.onset*.9,U?Math.max(.35,z):0);let E=0,N=0;const Z=Math.min(s.length,c(1e4));for(let W=Math.max(1,c(100));W<Z;W++){const O=(s[W]/255)**2;E+=O,N+=O*W*l}const B=ug(s,c(20),c(12e3));Vw(t.sections,{overall:B,bass:ug(s,c(30),c(160)),high:jf(s,c(2e3),c(12e3)),centroid:E>.05?N/E:0,onset:U},o,x);const Y=.6+r*1.2,ue=1.5-r,fe=1,H=W=>fe*Math.min(1,Y*Math.pow(Math.max(0,W),ue)),ne=U&&fe>.15;return{bass:H(f.bass),lowMid:H(f.lowMid),mid:H(f.mid),high:H(f.high),overall:H(p),beat:ne,beatIntensity:ne?fe*Math.min(1,Math.max(.3,z)):0,onset:fe*t.onset,kick:fe*t.kick.pulse,snare:fe*t.snare.pulse,hat:fe*t.hat.pulse,energy:fe*t.sections.energy,build:fe*t.sections.build,drop:fe*t.sections.drop,bright:t.sections.bright,input:$w(B,c(12e3)-Math.max(1,c(20)))}}const fg=[.35,.45,.8,1.15,1.5,1.9],tT=3.6,nT=2.2,iT=6;function rT(){return{rate:1,clap:0}}function hg(s){if(!s)return null;if(s.gesture==="fist")return fg[0];const e=s.fingerCount;return e===void 0?null:fg[Math.min(5,Math.max(1,Math.round(e)))]}function sT(s,e,t){const r=[hg(s.left),hg(s.right)].filter(c=>c!==null),o=r.length?Math.max(...r):1,l=Math.min(1,t*iT);return e.rate+=(o-e.rate)*l,s.clapping&&(e.clap=Math.max(e.clap,tT*Math.max(.5,s.clapIntensity??1))),e.clap=Math.max(0,e.clap-e.clap*nT*t),e.rate+e.clap}const oT={dust:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD51PXOBSjr0HNJjGAe3fFLz6k0ABBC5oOeMd/SnJI8Uquhw6nIIHepLhmaczSGMmUlzsAUDJ5GAAB9BxQBCFLNgcn0JpXRo5HRl2spIIPr6U9HRmxMZCoBxtI4Pbr2zTFXcRghB79KAG9PQ0oBHp1q8NKuJYY2t40lLMIx5UisXY5IGM5zx6enqKpvDJESHUjkjn260ANwcjPNA78+3FTW8E15PFbwohkY7F5CjJ9SSB+Zpz27szhSSsYwWA3KOmSWHGMnr9KAKw454IoweO1TpHE85WSb7OhxhiDJ/KkGwQjYru7A71KjC88YP/6qAIe2MClx0/nQFJIwcH0qxFbsy8XEKsWKMjPg9Mk+gHbr1oArqrM3AJPp3o6dyeeMd6nuRAZWe0ikS3Zj5fmuGfbnjJAAzjGeKW2vpbJJfs7mKWRShkRypCEYZfTB/pQBE0JWBZGaP5icKHG4Y9R1H41GQc5qZI5ViM4wE+7nI6kenWolxvAfJXPJA5x7UAA+g4o6c+npQeuRwPSkPH0oAMdADS854GKAADgjNHfpzQAAZ9qleFoZADtlAw3ynIwff+fvTXEZdRDubcBkY6N3A9fr+lOliVJGCiQLtBG8YOPWgBAyl2ZBs3NgKGzgfXv6VJdSRzzblt1hwoV9vQuOpAHAz6DimR4UkjJKNkleeP8A9eKsyvc3TRPLO+1VKRCQ5CruJ2gemSeMY5NAFdRvRuQ4QZAPUjPTHaljiacOqJGhRPM5IGQBzyfbPHftVu7jjikkUyW0xIAZ4sBVZiGO0DrjkcYHaokljjidkuTG8ZATEfMgOQfm7AADg/3jQBGbiJrMxGHMgIw6thcDPVQPmPPUn2pYI1nMnzKuzlsybPMGQNqjHJ6fgPap/swvFLIJC5H7hMfewwyOB1wSeoHv2oSOCRHhd5pCIN6Mq7yrLywI4wvXJ5wBnmgCo8SuFaNCiMTt3MDkEnHPr26YpPIkZgY4nG47ce//AOsU5gyXH79RKOVGG4OOOo9KbKrrMwm3iUcENx9KALHk74muDAkcZGxP3hAVxjPbk98f7Qq3GqarFbNd38MIt3jtgkrBSIfmO5cDBC4IOSTll684rXKxxW3lx28mHYMHkGOQMEKAT33Dqeg6VGUkaAs0yKYMbY3b5iDk5A/DJ+ooAnu4IgLiW0tpprXztsVw+chQDgEDjJBBOemMetQ2yxpFcLM0UTjAXzAxP3sEAAEAjrk44XA64qXSjch5Ra3kkMkimIxRhmaVWUhgAODxxg+tVZ4ZkYGY/M43AcHIPOeKAI2RScBwz/dxtI4+pphAB+U575qa2tXuZCqsi7VLEuwUYHYZIyfQDk9qaLeQAkjAAJ+bj9KAI+n9fejtSnk9OKQ4yORQAdunFAB7d6AcDjk0gJzigC1aCNXzJ5uwfe8r7y+/4fhU6LetCvkIj8sq+WA0hBByMdSuAe3HXrVa1nEEgYDD54bdgY7gjuD/AI1Zhv57aWaeCeS0W43xOts+zMbdUAz9zsRnpxQBSjZc5cE8fKQcYPY9OlaFrbG9mULtjVEYmQgkcZOeOQM8fjVaAbZgdp5PHl/NxjkDr29f6VO93LbPLb2pRU8w7QrCRgNpTAfHIwT04PWgBLm4+1xrNHCsflxBZv3jEyncdrHPGcFRxx8ueuaryxr521HUoFUZXOCcc9ff/wCtSJ5gUFBhc8Z+nX3+vamlCjI2QG+8Ce9AGxaWLXq3FqLuGHT7Y+ZJcmMgHoM4xvb5sYUdNxIAyaqSR2n9qrh5IbZuN08ZztI+9hPUY4GevXFQzh1u95TyJIgjDyyflGB8wJ5yTzn1NQt5pbO4s33gc5xk9/rQBOWQWySxNFvMxBUrukwACD0xjt9c1LcTs7JM4LyAbjJPhtx75z75IBz160TXc9zdx3UCi3kEYA8g7dowRxjpkZJ7/wAqrPNG/lrKnllIyCV5LtnqRnqen60AXZmsonYWlzK8JUshmXYd+fQMduVHXnk/iJLSSFNRjFvbbvNHlATShF8zGMiQgAAEq2Tg8cnmqDKt6ryqY4fKjUEEnMpzjI/r2qawlFtcwyxyzR3EbM4WFFbDAfKeTznkH+R6UAMjMlnKkkUhiuIf3u5X2OrZwMe4POBz1PSomlmEZiY+WDl+mS5Iwfm68jt0/Gnxh3uC6RIQrKxiY5D85xj09cfpTjJbvI8kYaCUu7/uhmMA9lU8jALdSe34gEDtuMmyMQgAEqrHGfoTnrUt5cxyTTC3eWSGVg5e4VTKTjnLD3J4+melRTSDA2xxgqqgFM4yBySDySfyznHGKhJCr1U7uc9x7UAIoyc/pRge2e9Jk55FL14z+dACfzNKPXNJnPTHHalCg9KAJUQtEwEeSo3FsgcD69f50szrO4CL5cYHCs5IXjnGfU5NTJNMYhaPJGsKHzFJJZVYjrgcEngHg9hwBUcsclodskUkc4AJWRdpAIBUgEccc59CMUANjaWONipG1uPXP4fjSpGJJGdX2x4yzycBSR0yM55/P2oCgQq0kJAbIDg43D+XBoJSMowLgEZBZeF5wSB0PegC4mnXlxpUl0kMv2eH95gAkAEAFvYcDk/QZ5xPbrpsHkJdEG5S4CujZMTRkcMGUg5HpnBH0qvYyxs6xPOsCIwYSPllVxwGIwSVHPAB7dadIJXa9EdwJosn5xtQOM5DYPb5eg5HHSgCoiC4fdLcqmCAwx8x9cdifrjNWJbJoIfOWzL20jZSVuSO2zIIBOSAR60p3XFtGk6pFDZgpgKeS2TyRyST/KoI7N7mNVg3SyRgsyohIRBjLH8T29KAH8OWiwSsS467VHXIOB2J6mh2mFnFBJNHKvVVDqwGecZ7H8eM0bY4p3aAh0cmMRSn94wI6kDpnPH+TVx7WK3uj9rdA6fLKsbDcjAbcKRkY6HJ64zQBDC8MmntHPHIZFAEUSIPmHzEncTlcZBwAc98Dmktra3SOCU30kbuctsjJKBWOCDnk8Dp6+1RzQm3jhjnlLFC2USUHyx347Z4PuAafZ7Yg264MZQgyQKv31HTvycnoOR1oAikij+zPcQoETIUgzAsWJJGB1xgYPoRyeQKdbRr5aCS7Ft5owAE3Dbzgn3JwPUYz6VA6rM4itkZtzEqAMn8vp25/rVq9aO30+G2WFA7gStui/eLkcAueSCMMAvy8jqc0AUmhmFuZRGxjVtjSgEruxkLnpnAJx3oS4ltxIkMp2yDa2B94fjQsjuDGrEKPmCkk5P4d6iJyxxhec4Ax+lACvHJFI0ciMjqcMGBBH4GkPA/xFS3Mv2i5kmLSMzncTI+9j9T3+tREc5xmgBOD649qU9e3PtQODx0oB4x1oAUEDGCQw65rTOs319FbWl5cNPDA2YEZc+Vk8hB2B9BxkD0FUYPKCSSSru+UqiZI+Yg/NkenX3pkZZJMgHeDgEckfSgCfc22S0Uq8KOXyuCeOM7sAkY7d/SrUeowxZQ2kE3zBkzn5T1AOfvAc/XPJOBVJpprto42b5YsiNGY7UGSxAz0BJJ+pqSGWORpBNIIozG2FEe8E4yqgZ4yQMntz16UARiKJk8zJBOMgdu2fzpgVlQuGHC464PPBA55q5Pd2zQLGIIi7BWd44yhU5OVAzjGMcjFMsZIPP8uZvLilGwuzkBcnqcA5GPXNACg+XZzROuDKq7Qr53HOd3vgdqVn+1yQrDOsQigyDIQnzKCSM9ySDjPPIFQ3EkayMloZfJ4P73aWyPQgevpipg89u6Tl/JuLYLIvzBSBxtI5znJHA5HWgBLLyZGDSxGRi43EOFY5I4GQfz5xnpVkNJZaki3FvFGFhLRiaJeUdSVYgj5zhgQSO49BVaO4uI4iihPMkIm8xQvmA4PRuuMdsjnHFVDIzhlBABIJGc89M5/E/nQBJclZZDIpGHbO3GNv8AjU0V5iVibaLe8ZiPyDHPGQOinGOR9etVwU2hW3K4Jy2Tz6DH+etSXF7NdGFLiUyLEpVM8BQSTwB7nOKAJPtL7AscxjDuPMLNwSDkZA6gdfzqOZnmcqH3BARgLtAAxnA/Cp7W9ksYw/ls3ng7g+CsiZHB7/eXtjpTLW7+z3AuEhhkEYOYpVypzkfjjIP4DrQBFDOIoZISiZYgrJt+ZcZGM+hzyPYdKieQSMWZVyRggDGD9KXz5MDcQwDb8MBjPHNM3fKAFAxnkdTQAhwPyo6HB/8ArUuffrTSfY+9ACjk9eaAB/jSZ4wO1A44zQBMs5WIRqEXnO8L82CMYz6e1Ai3TJGrxyF8AYYgAnjk8VDyMkfnT0fYwbCsc9CuR/8AXoAHXYzLkFgcEg5B+hFW7OzYxPeNbm4ggZfMXcVXnJwW7ZCN3z6A1UjZY2+aJX9mJ/pQZHEZjDHyyQxXPBI6E/r+dAASX7Dk5wBUsE6QxSAR5kZSqtxgAgg8EHsfb1ot7trWdJY44m2c7ZYw6k46lTkH+VNjnZbSW32RMkrK25kBZSucYbqM5OR0PGegoAC6tlY4gWfbjqWB9ue9W47r7DefarWSUyCMoTKoDISCreobjI6dD681TklDj5YUjzj7ue3fr1PrTQfnyVDH0YZoAkad5JIUlLOkfAC4zt9AcH8KdcRES72DRrIokjyAMp0HTHp1xyaYsMvkmaMZRANzL/Bk4APoTimxzNDHLGgTbKAGygJwCDwSMjkdRzjjpQA1mJzuO7vzVhLhrSeQ25IDxtEfMUEgMu1uD06nnqPrUKShIpkMUTmVQoZs5j5ByvPU4xzngn60u6N3VpC5yuDjGSccf0oATKlQNxOOx4/KnPIWt4kMUS7QRvC/M3J6nv1x+FNKYVW3KQewPI+o7UzLcZzgfpQA5ypJ2g4z3PNNHUUdR2xSZ56UAKP1ozj6CkHH8VL0P+FACE8gdqcB+lFFACN1x6DNIDkiiigBSAMflSNkAc9RzRRQAZJY+1OxzRRQAnv74oxljmiigBPQetKflAx2oooAB1/HFL0GfSiigBO+PYUYyM9zRRQAgGTjtQTx9aKKAFxjOO3NLjJC9jRRQB//2Q==",line:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5tooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKK04vDOuzDMWi6jJ/u2sh/pSyeF9ehGZNE1FB6tayD+lVyS7AZdFSzWs9u22aF4j6OpU/rUWCegzUgFFFFABRRRQAUUYPoaVUZjgDJ9KAEoqzHpl/L/q7K4k/3YmP9KnGgaww40q+P/bu/+FVyvsBn0VqL4X15zhNE1FvpayH+lWY/A3iubHl+GdYfP92xlP8A7LRyS7AYVFdXF8LvHU3KeEtYA9XtHQf+PAVY/wCFSeNVGZdFMH/Xa5hj/wDQnFNU5S2QHGUV2P8AwqvxUDg2+ng+h1W0z/6Npw+EnjNx+60mOf8A643lvJ/6DIaapzeyYHGUV1c/wu8c24JfwpqzD1jtXkH5qDWXceEvEVp/x86DqcP/AF0tJF/mtTyy7Ae+SatZn72q2LD1fxPrLfqIgKYmq6aTtXXdJjb0TxtqMB/8ix4rYfVrUr8ni3TA3oPiJcA/+PQYplnrd+9yEtPEGpXQzjbYeLtOvM/hPGM/jW6qv+rCKVpd391N5dnqusXQ/u2PjOxvx/3zOoJ+lNu9Cv5Z/wDTtJ1WZT31DwZa3wP/AG0tWDH61q6poeqTTia80nVrpGAO6/8ADOmakp/G2cMaoT+H7KFluI9HsYD3KeF9Y0xgf96FmUfhSVRpWA5298NeHPNIu9K8OKc8mXT9X0xvx4ZRVX/hDPBExH+jaCD3EXiK6X9GtSa7m2vPLURK8qbeixeI9ci/8daFq0oZL10B8jWXTpvTVdcnH/jluv8AOnzr+v8AhgOCtfht4WmYG30SC7/643+o3P6R2Y/nWzb/AAy0SFDJD4Vg+Xn99pl8wH/Arm4gX9K65tK1CWDzkF9dxqNzx3kOoFAPrd3kQ/Ssn/innnH7zRtNvVPVm0e3A/8ASh6XOrbfl+YGZFaeHbKTy1TRNPmX30a3wfqzXD1dTUTEu2HWI5R2Ftrcij/yWsAPyNan9q3n+r/tD7dGOn2PWblV/K1sVH5VE817KRsttXUn0v8AxDJ/6DGtHtX/AF/VgM1r65fObi9f/uL663/oMCimiS4kPH21v+33xC3/ALJWgy6geqa0B/108SN/SlW3upDh5NZTPrbeI5P5sKXtL/0v8hlVbO8kHzQ6kAe+3xHJ/hUi6BPOeLK7uT/dk0fVXH5z3aCro8P3E+3yoZr0n+G40TUiPznvFH51Xv8AR7WzYDVfDWm2oHV10vSoz+c925/Oj2jQinceH47Ubr3w9YxL/efSdORv/Ji9Y/mKp7dDgb5FtoSOyjw7F/8AFVc+2+HbNs2WpW9mR2N14fh/lG386kTxJvO2PX2l9Bb6roTH8jCKTqXeoFSMW91hIRNNnjEbeHZP0wKLnwvc48w+G7maM/xS+FdKvB+dvKD+Vac+kXuqWhni03Xb1R1L2Gg3q/khVjWanh+1aJ47rw9ZROOQbj4f3Ab/AL+WsmPyo57jKcnh+zij8w6HZ2zL1Z/B+p2Z/wC+reRhUcV7a2vyi8srbHprWuWf/jrI2KktrnTtLnwJ9KtMdv7S1rSMf8BIIFaa6zp78p4n0yM+n/Cw73+TQk0/aPf+v1EKnii5imAg8XGQ+lp4vsLg/gJoRV68tdU162FwbXX9U/vmez0LUEP4IysRVKLX7zVE8htY1G/B6CHVdCvR+UiKTUJ8Pzeb5svhdrlT/HeeELC7z+NtMP0qOTqMlTw/aNFsuPD1hayL0b/hAbpZD/wO1mI/EVPbWdxajbBb6mE9IIvEVoP++RuFV10SFG3RaUtmfS38I6tbY/78zkVfgs7wDbHcaqo7Kul66B+TXCj9aXKwJ4knchWXX4PcS+Ipf0IX+dXJbDUYYvO2zajaJywv7S52/wDk5fKP0rOmtLi2UveaXFcRf3r7Tdv/AKV3+PzFZq3egQTCSyutJsLkHJ/faNb8/RI52/WnyMC4JvDb3AktrnR9KvwctmTR7dR/3ys7/rV8+IbuU7Z7ptSUDANprF4B/wCStkoqi/iS4uOJNQkvvQ2+sX2PytbJB+Rqu9/dyHKSalGP+u/iOT+QFP2bAtyT3MjEpFrUf0ufEUv8kWmA35GRJrQ/7Z+JD/WqTG6frJfEH+9b+I2/9mpy2tzJ/wA/7Y/6h3iF/wCbilyAX0ju3OGudZUe9l4ik/nIKl/si6kYeTbTX+e1xoGoH9bi7UVnppNw/TS57rHaXw9qLD857tRVe50+ziGb7w/p1sB/F/ZGlQt+dxduf0p+zYF6+sNPt3B1bw1plpjq8emaTC3/AJHunP5iqses6RYP/wAS7W7axA7NqOgwY/74haqkWsadYHFnqdnZkdv7R0G3x+Cwvj86kPjK9Pyx+Ktw9IvFWlL+n2cCjlQi+fHl+SAnjBJPaHxDo5P5G3AqwLzWNdtX/eeJNRYDjyW0C+U/8BAUmqC6nrWpQFVn8Q3o/wCmNxoeog/8B2qTWRLYrE0j6po4UY5bV/AIYfjLat/Kn7PYZej0iFZJRqPh6FcqcvqXw/MxH1ktXx+NULC/0PTr7C3Xhyz5xiPU9W0I/wDfJBAqlpl9oVpcuba68K20g6C11vU9EcfRXBUVq2us6gZs2er6sw/6c/HNldj/AMjrU8oFmfW4EmJt/E1lGp6eR8RmkH5TRE0sfiWRuD4wgUeknji2H6rATWh/betFAZLvxI4xyZNR0CT9StVp/FeoQ5U6/qNqP+m+u6Hbj844iaOUDzp/iv4ev1/0yfWHPcXWkaXdj8zGhNEfjnwK+C8elg+s3g+BT+cVwteMUU/au9wPcF8deCIwCs2kgeieHrhf0+2AU2T4j+B1HNvbT/7nhqM/+jrpv5V4jRT9rID2X/hbPheyffYabfK3rDp2mWv8oJD+tNm+PLFdqWeuMo6A660Q/KGKMCvHKKXtZdAPU5vjdcSjH9k3rj/pr4h1Fv5TCqx+MUrZzoCn03axqJx/5MV5rRS9pID0Y/F6U/8AMvwH/e1TUD/7cVFJ8WJXHHhnST/11mvJf/Qrg159RR7SXcDtpviddPzH4Z8Lxn1OlrKf/IhaoR8UfEcR/wBGXSbP/r30i0T/ANpVx9FJ1JN3uB2g+LvjhT8muvGPRLeFR+QSkPxa8ZuMS6rHOPSayt5B/wCPRmuMoqvbVH9p/eFjsl+JN5Jn7d4e8M3+epl0mJGP4xBD+taWnfE3TrI5XwzJp7f39I1i6s8fQFnH6V53RSVSSA9ktfjFZGMpLrPjOFT/AATXNtqCflNGCaG+I3hu4O6fVJ5T/wBPPhPTZD+YYV43RTdRtWA9i/4T/wAIJz5yE/8ATLwhpyn8y5qVPi3oVmv+i3Otg/8ATDS9Ltv1ETGvGKKFUcdgCiiisgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k=",dandelion:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDovs3tR9m9q1fs3tR9m9q6TMyvs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDK+ze1H2b2rV+ze1H2b2oAyhaknAGSafJYtFjdt59GBrS+z+1Kbb5V4oAyfs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDK+ze1H2b2rV+ze1H2b2oAyvs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDV8gelHkD0q75VHlUgKXkD0o8gelXfKo8qgCkIMnpS+QFbDKeOoq55VHl55NAykYgeigfSneQBFkH5s4xirfkjBx1HIHrS+QAmF+8T0qWrrURSWJQ4JXIB6VOYUVVZCgck5H41MYSAM85HNI0GAp2e+RSd9GgKkke+TJXknpnpTfIHpV9oMHjGKb5VUgKXkD0oFuCcdPrV3yqQxcfWmBTNvtJBHSjyB6Vd8r2o8qgCl5A9KPIHpV3yqPKoApeQPSjyB6Vd8qjyqALvle1Hle1WOKOKQyv5XtSeVUsqoELSHGPekS4hIBVlYdetYutFOxo4JLVjPK9qTyvap0dXGR+tO4rVNNXRmV1hywB4HrStFk468YqcYFHFMCrGjGPBxgdKiWVEuHR2wh4GfX1qa8cRvEgJVC2Wx1I9KqCN5HQMzMHydxOMDNcVWq4+6t0Q30LCtE2QWwR6dMU7y1MhAIJAqOeARjBIGRgsajtilvNt8wEg8++e2KUK0r2Y79y15XtR5VWOKOK7iiv5XtR5XtVjijigCv5XtR5XtVjijigCv5XtR5XtVjijigBM1HcSPHbu6Y3KM0/NFKUeZNCMa4vZp5FSF/l/iGOv+FRvKCXXgRrx8o64/nWu1tCZA4QK47rxUI023DE4PJzivMlhal7p3M3GTGaUJPLdmbK8ADGMf5zWhmmqAihVGAKXNehSh7OCiWlZWFBIOfSjNJmjNaFCmPzTwRuHTIqMxSKFGPmzzn0p4Yg5HBFOMrFcZGfUisJ0eaVwKwM0lxIknQNhQB2Izz61Wn0+SS7DgKAGB3Y6D0q2pK37tz88Y69OD/9epi5PWlUwyk0ybJ7hmjNJmjNdJQuaM0maM0ALmjNJmjNAC5ozSZozQBH5go8wVQ8+jz/AHoA0N42/Wk8wVSeYqQM9AP15pvn0AX/ADBR5gqh59Hn0AX/ADBR5gqh59Hn0AX/ADBR5gqh59Hn0AWZZlS6tzn7xZP/AB3P/stTeYKyL2cqkDg/dnTP0Jx/WrHn1bWiYi/5go8wVQ8+jz6gZf8AMFHmCqHn0efQBf8AMFHmCqHn0efQBf8AMFHmCqHn0efQBn+f70CXcQPXis7z/epbSXdeRc/xZ/Ln+lAF6W4DTOQeMmm+f71m+fnnPWl8/wB6ANHz/ejz/es7z/ejz/egDR8/3o8/3rO8/wB6PP8AegDR8/3o8/3rO8/3o8/3oAsahKTYS4PK4b8mB/pVkz/Mee9ZNzKGtJgxwCjZ/KpBPkA56jNW/gXq/wBCeppef70ef71nef70ef71BRo+f70ef71nef70ef70AaPn+9Hn+9Z3n+9Hn+9AGj5/vR5/vWd5/vR5/vQBR3mprRyLjPorH/x00UUCIN5xS7zRRQMN5o3miigA3mjeaKKADeaN5oooAhu3P2G4/wCuTf8AoJp0EjG2iJ7op/QUUVp9j5k9STeaN5oorMoN5o3miigA3mjeaKKADeaN5oooA//Z",jellyfish:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5UoopcUAJRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABX058MNV+Hvw98Aafqk/g4a7qlwVF7d3UcZKOwLbI94IAAGMDHua+bNNjE2oW0bKGVpFBB6EZ717Fq+m+IPFM1hp+nWcy6daHzC+NqySN1k9/QAdvrW1KF02c9apytJF742N4P8beH7TxB4W8Itouo/aGjkNsqCOZAuSrqnAk6EccjPJ4x4NX0h4P+FSpe6nFr2t3Ol2V3bKsbRQb1eUMOXjPYDOCCCCevavKPiZ8N9R8G6tPKjQ32mO2Y7y1OUOf7y9UOc8H8CaKlO2qQUqqejZw1FFFYnQFFFFABRRRQAUUUUAFFFFABVyDSru4jWRIsI33WchQ30z1/CpvD+lvq+q29sImki3hptvG2MH5iT24zXqel/DrU/FNx/alg0cFlIWjtfMQ5nC9BGo/h4wCcDitIQvqzKdSzsjya50q8tF3ywsEH8Q5FU69x1rwdrGlxPbXWisjwxPK7rMrrIijLMvfgdR1rxrVoEt76RIxtQ4YL6ZGcfrTqQS1TFSqOTakinRRRWRsKrFGDKSCDkEdq9g0n4j+K7jwvHqOhXqTz6ZGI9SsZIUc+SCNs0fGQvZtuCDjtivHqvaLrd/4e1KHUtNuGt7mE5VhyCO4I6EEcEHg1UZNETgpHpXiHx14u1LSoNe0TxJqV5o9uym6sZnDNYSHgLKuPnibor9OxwcCq/hjxNq3z33hgm7SLMl94cunM2U6s8GfmZOpIB3r1O4AtTNMurTX7o634TeDRvEKowutKfBtrxSPnCBuCrDqjceuMbji6jpIkll1vw1Fc6VqOnt515pauwmsWU582FvvNEDz/eTvkYcvmfQXItmJ4m0Q+IILnxXoEVvNp64N5b20Ijk089B5ka8bCeki/KT1Ck7a42vSNH8Xxa5qMWpw3cPhzxfGCPtyKEs9TyMMs6Y2o7DgnGx8/MAeTR8Q+G4daluptN006RrlqC9/oeCAQBky2/qmOSnJA5GV6S9SlpocLRRRSKCiiigAooooAKKK0dA0DUfE2qQ6Zpdu09zMcADgKO7MTwFAySTwAMmhK4m7HunwM+FlzrHh9NSlCW1nNJ5t1K65aVB92JR6EfMSfUdc17TpunTvrMF9DbBbGzcR7AOkeNp2j2Bz9BWbo/xQ8P8A9nWfhjwzEl4LGzLXkkCnZEkShWZWwAw4+9nnjGc1s+GPiv4QtkW3srxJ3T7wUltme7HrXWk+XRHDKUee7fmbfj3w6IPD97cW0fmTRrvjZVyVXjJ+mMg+2a+OfjZ4QtPD2r2N9pwdbTUIBJsPSJsn5Qe4/wAK+3tE8Z6Pqkr6dPe2sjPkwnoJEP8ADg9xnGO45r5y/a3t9K0LQvD2iWc6yym8uLpF7xxFVG0/iePpWTXLFxkjdSUpKcXofMlFFFYnQFFFFADo5HhkWSN2R0IZWU4II6EGutsfGYv3tjq801tf2xH2XWLYYmhI6bwPvr+v15zyFFFxNXOu1rS4NYk3wR2trqxG4xWxH2XUF/56QdlY94+BnOMH5Bn23iS5FvBY6g8ubMj7HdKSLiyYHgK3Urn+A9Oowc5zrDUBbBoZ4/OtnOWTOCp/vKezD9ehrSvoor/Z58wZ5B+5vMY83/Zk9G7Zq/QjXZj9VtH1WR7hxCmpMvmkRACO9Q9ZI8cBvVeO/AIIrniCpIIII6g1q2sz2xOn3jeUobfDIefJf1B/unvTNREc8RmYBJ0O1wOhP/1+oP4dgSmNXWhmUUUVJYUUVasLFr6YrvWKJBuklf7sa+p/oOpPFCVxN21NPwh4Q1DxlqyWFkAiDBmuHHyQr6n3PYdSa9W1HTNP8Nw/8Ib4fVTczpm9Zjh5EGCXuHH3Ihwdg5Y44JKiufsvHkuh6QPDfhjS7eyvyMtftJ81uuDvkbPAlI6tkiMZUc8jA1LxAvh6wfT9MlkN3cHzLi6fPmux/jbPIbk7V/hByfnPy9ELQRyz5ptfl+rN/wAWeObfwrolx4P8Kysr3HGqagBtknI/5Z8fdA5G0H5RkZJLEwaEE+E+gr4julU+LdUhI0i3YZOnwMMG6cf32BIjB6ZLelYXhXT7HRLL/hKtcgWeGNiLCxfpeTDu3/TNTyfU8VJpiv4p1K/8YeLZpJtPt38y4OcNdSfwW6emeAcfdX8KlpvUtNLRbfm+xs6b4r1nwL4Lku5dRnl1fX+bOG4Pm/ZbYN81xh84eRhsU/3Vc91NcV4h8W654re2fWtRlvWtY/KhLgDYucnoBk5PU8/lUOv65d+I9WuNTvSvmzEYRBhI0AwqKOyqoAA7AVnVm5X06GsYpa21CiiipLCiiigAooooAKk85/J8nOU3bgD2NR0UAOLsyqpYlVzgE9KSkooAKKKKAHIjSOEUZJOK1ILgwRpHajcQ37rjmST++fZe35+tVIbciNecNKCc/wB1B1P6H8qef3ZfgrhcN6qvZfqe/wCPvVx0IlqXftqaXamOBhJLIctJ18xgev8AuKeg/ibk9AKg0eyS+uXub52FrEd8zk8v3xn1Pr/9as/57iXtk/kB/gKuTSF40soTtjX5mJ4/E/z/ACHai99xctlpuaU08/i/VlMh8iygAjRFHywx9lUdMn/6/QVH4m15L9bfTLFRFpliCsMa9HY/ec+pPqf61Vub0Wtr9kgyu4HPqAeuf9pu/oOO5rLpyl0FGCvftsFFFFZmoUUVYs5ktnMxAZ0H7sEZG7sT9Ov1xQDK9FFFABRRRQAUUUUAFFFFABUttA91cRwR/ekYKPqTUVbXhfT2vbuVhlVjjI3Zxt3fLn8ix/Cmldik7K4+6Mdpbm6A/wBadlup/uL90/oG+uPes29Bh222fmX5pD6ueo/Dp9c1fnu49Q1h7hVAtLVS0adtifdH4nH51Rs4RcSyXNyS0MX7yU55ck8L9Sf6ntVN32Iiraskgt/Jh3uMsVDkf7P8I/4Ef0FLMn2OMtIcysef9pu/4A/mfpWnDHst5L26JUIRK5Ax+8YfIq+6ryPQt7VgXNw1zKXICjoqjooHQCh6IFdsjJLEkkknkk0lFFQaBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXU6Ufsvgy9uIuJZZmRm9lVAP/RrfpRRTiTIw7c7dLvHHVnijJ/2Tub+aj8qvwwRs+j2ZX9zPieUf32LsvPthcfifWiimhSE8Q3MrW+n25b92YBcsAMbpJCSzH36AegArEoooluOGwUUUVJQUUUUAFFFFAH/2Q==",standby:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5voFH4UAdKAFHb/PpQO3+fSkA6cf54pQOn+fSgAHb/PpSUoHTj/PFGKADmj/P86Me1BH+cfWgAOef8+tKe/Xv/WjHXj1/r7UpB549e319qYAc89e/9aDnnr/nNBHXj17fX2oI5PH6fX2oAOc96Bnjr/nFGOen6f8A1qAPb9Pp7UAA7de39KBnjr2/pQB049O309qAOnHp2+ntQADPHXt/Sk5wP8+lAHTj07fT2oxx0/zx7UAJQc0dv/rUEcHikAmPagD/ADijv0/SgD2/SgAA6cfp9PalA6cfp9PakA6cfp9PalA6cfp9PagAA6cfp9PagD2/T/61AHTj9Pp7UY9v0/8ArUAGPb9P/rUuODx+n19qTHt+n/1qcF4PH6fX2oAXZ149e319v8/yeYW+b5Dxn+E/7X+z7fp+UsVsZA2EPQn7h9H/ANn2/wA9t+38M3c4mCWc29FkOPs7k8LOScCHt5Z9MY7YOzSMLgc48DDd8h4z/Cf9r/Z9v89mMhBPy/p9faus1bwlfaeZPPsZoyC4ANtIucNMD1hHTyz+XbB285c2rRuwMZBBP8BHc/7A/wA/oShbUCpt56fp/wDWoA56fp9PalK89P0/+tSAcjj9Pp7VAAB04/T6e3+f5gHTj07fT2/z/NAOnH6fT2/z/MA6cfp9Pb/P80AY4HH6fT2/z/NAOnH6fT2oA6cfp9PagD2/T6e1ABj2/T/61GODx+n/ANajHHT9P/rUEcHj9P8A61ACd+lAHtRRigAHbj/PFA7cf54oH+f0oHb/AD6UAGPb/PFAo/z/ACooAXHt/n8qeB7fp9fao6eP8/rTA2dNtklaQNFnCOeE9EkP/PM+n6duo9t0Hwzb3OlvI1jH/qpufsiZPGoD/n0/2R+Q9Ao8PsHCFztUkqw5UHgrJ7f5/l7d4d1C3h0qcDYQsM6sqIhwdmpYz+79/wAvbgbNXjoIu+MvCtokV2oshjfMdy2qgjDXp6i09h37DsAw8L1u2CX02IlUBjwIwvc/9M1/l/8AW9s8fazCy3hjSDd5kwQPGuSDJegnHl57+vp+HiGssjXspQLtLNjAGOp9FFCVo6gY7Lg9P0/+tTMe36fT2pzYz0/z+VMrEYAdOP0+ntQB04/T6e1A7f59KB2/z6UgAduP0+ntQPp+n/1qB2/z6UgoAXHtSH6UUUAFFFFAAO3+fSgdv8+lA/z+lAPT/PpQAen+fSij/P8AKgUAFOHf/PrTacD7/wCefegC3FLt3YI6MP0f3966e1157e3nQTOu4SDKPjOVuRz83P3/AMj+fIh8BufXv/ve/wDn+dr7SQr4fs3G7/rp/te/6/ntCVhHU6zrzXElwDMZW3yYZ3DDl5z13f7X+e/K3Uu+Rvm7nv7n3p1xcl2fL9S38Xu/+17/AOe9WR9zE7u57/X3onK4EZPNMFOJ9/1/+vSZrEYD/P6UDt/n0oB6f59KAen+fSgBB2/z6UUDt/n0ooAKKM0fjQAZ560A9Of1oz7/AK//AF6Aff8AX/69AAD05/zxSg9Of1+nvQD05/X6e9APTn9fp70AID7/AK/T3oz7/r/9elz7/r9PekB9/wBf/r0AGff9f/r0uevP6/8A16M+/wCv/wBejPv+v196AHbuDz69/r7/AOf5vMhw3zev8X+97+/+e8e7rz+v196cW68+vf6+/wDn+bAe8hO75yev8X+9/te/+e8bNyef1+vvQz9efXv9ff8Az/NC2e/6/wD16AEz7/r/APXoz7/r/wDXoz7/AK//AF6M+/6//XpAAPTn9fp70A9Of1+nvQD05/X6e9APTn9fp70AID05/wA8e9GfegHpz+v096M0AH40fjRn3ozQAZ5/+vQO3NFLyMdeaAEB6c/5496UHpz/AJ496B2/z6UDt/n0oAQHpz+v096M+9Hp/n0ozQAZ96M+/wCtGaKAFJ68/r9fegnrz+v196D3/wA+tB7/AOfWgAJ68/r9fegnrz+v/wBekPfn/PNGaADPvRnpzRmigAB/z+VGff8AzxR6f59KM/5/KgAz/n8qM+9HpSZoAXNGaSigCxFd3EMflxzuiZztB4zTrm+ur1YVuZ3lEQKoGP3QW3H9STRRTuwK4HT/AD6UAdP8+lFFIAA6f59KO1FFABijFFFAB6/59aCOv+fWiigAI/z+dIe9FFABjmlFFFACDt/n0oA/z+VFFAB6f59KKKKAEo9aKKAP/9k="},aT=["w2","w1","w3","w5"].map(s=>({src:`/media/${s}.mp4`,poster:`/media/${s}.jpg`})),lT=["t2","t3","t1"].map(s=>({src:`/media/${s}.mp4`,poster:`/media/${s}.jpg`}));function cT({page:s,onClose:e,onGo:t}){return He.jsx("div",{className:`page ${s==="performances"?"wide":""}`,onClick:e,children:He.jsxs("article",{onClick:r=>r.stopPropagation(),children:[He.jsxs("nav",{className:"tabs",children:[["about","instrument","performances"].map(r=>He.jsx("button",{className:r===s?"on":"",onClick:()=>t(r),children:r},r)),He.jsxs("button",{className:"close",onClick:e,"aria-label":"close",children:[He.jsx("span",{className:"cl",children:"close "}),"×"]})]}),s==="about"&&He.jsxs("section",{children:[He.jsx("h2",{children:"The machine reads, the hand leads."}),He.jsxs("p",{children:[He.jsx("b",{children:"<N4TH>"})," is the visual instrument of Nathalia Cury, a Brazilian art director based in Stuttgart for six years. With a background in typography, editorial design and brand identity, she brings a designer's eye to the club."]}),He.jsx("p",{children:"She built <N4TH> together with AI, using it as a design partner from the first sketches in Figma Make to hand tracking with MediaPipe and real-time graphics in Three.js. The result is a tool that sits between graphic design, code and performance."}),He.jsx("p",{children:"On stage, a camera reads her hands and the music reads the room. Every gesture becomes a move in the visuals: a fist gathers, an open palm releases, a clap breaks everything open. She moves between 2D and 3D worlds, turns colour palettes live, or lets the system run on its own and evolve with the night."}),He.jsx("h3",{children:"Contact"}),He.jsxs("p",{children:[He.jsx("a",{href:"mailto:cury.nathalia@gmail.com",children:"cury.nathalia@gmail.com"}),He.jsx("br",{}),He.jsx("a",{href:"https://instagram.com/nathcury",target:"_blank",rel:"noreferrer",children:"@nathcury"})]})]}),s==="instrument"&&He.jsxs("section",{children:[He.jsx("h2",{children:"Built with AI, played by hand."}),He.jsx("p",{children:"The tool runs in a browser. It listens to the music — its kicks, its builds, its silences — and it watches the hands. Every visual answers both: the sound gives the pulse, the hand gives the decision."}),He.jsxs("ul",{children:[He.jsxs("li",{children:[He.jsx("b",{children:"one finger"})," slow · ",He.jsx("b",{children:"five"})," fast"]}),He.jsxs("li",{children:[He.jsx("b",{children:"a fist"})," gathers · ",He.jsx("b",{children:"an open palm"})," releases"]}),He.jsxs("li",{children:[He.jsx("b",{children:"a clap"})," breaks everything open"]}),He.jsx("li",{children:"the music: pulse, kicks, build-ups, the drop"})]}),He.jsx("p",{children:"Every part of it — the visuals, the way they listen, the way they read a gesture — was written in conversation with AI. That is the question the performance stays with: who is listening to whom?"}),He.jsxs("figure",{children:[He.jsx("img",{src:"/media/instrument.jpg",alt:"The instrument: the visuals of the set, layers, effects, the sound and the hands"}),He.jsx("figcaption",{children:"The instrument as it is played: the set of visuals, the layers, the effects, what it hears."})]})]}),s==="performances"&&He.jsxs("section",{children:[He.jsx("h2",{children:"Performances"}),He.jsx("p",{className:"sub",children:"Stuttgart, November 2026 — Nische at Kultur Bunker. Live with a DJ set."}),He.jsx("div",{className:"shows wide",children:aT.map(r=>He.jsx("video",{src:r.src,poster:r.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,disablePictureInPicture:!0,disableRemotePlayback:!0},r.src))}),He.jsx("div",{className:"shows tall",children:lT.map(r=>He.jsx("video",{src:r.src,poster:r.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,disablePictureInPicture:!0,disableRemotePlayback:!0},r.src))})]})]})})}const dg=[{id:"dust",name:"Dust",note:"a fist gathers it into a circle"},{id:"line",name:"Line",note:"an open hand unfolds it"},{id:"dandelion",name:"Dandelion",note:"the hand moves the wind"},{id:"jellyfish",name:"Jellyfish",note:"a fist closes the bells"},{id:"standby",name:"Standby",note:"a fist closes the picture to a point"}],fv={dust:{colors:ao(0,0,"grayscale"),params:{"look.glow":1.6,"field.size":1.3,"sound.beat":.35}},line:{colors:ao(268,70,"black"),params:{"line.weight":1.4}},dandelion:{colors:ao(200,60,"black"),params:{"field.count":3}},jellyfish:{colors:ao(215,70,"black"),params:{"swarm.backdrop":0,"swarm.height":.3,"colour.palette":3,"sound.flow":1.7,"swarm.drift":1.3,"sound.swell":1.2,"sound.beat":.6}},standby:{colors:ao(0,0,"grayscale"),params:{"sound.quiet":.4}}},hv={dust:{path:"field.count",min:200,max:5e3,start:.6},line:{path:"line.count",min:1,max:40,start:.33},dandelion:{path:"field.count",min:1,max:12,start:.2},jellyfish:{path:"swarm.count",min:1,max:8,start:.43},standby:{path:"grid.detail",min:.2,max:1,start:.38}},pg=[{name:"Johannex · m4n4th",src:"/tracks/m4n4th.mp3"}];function uT(s,e,t){return s==="dust"?new jE(e,t):s==="line"?new qE(e,t):s==="jellyfish"?new aw(e,t):s==="standby"?new pw(e,t):new nw(e,t)}const fT=(s,e)=>{const t=hv[s],r=t.min+e*(t.max-t.min);return{...fv[s].params,[t.path]:t.max>2?Math.round(r):r}};function hT(s){var r,o,l;const e=document.querySelector(s);if(!e||s===".stage")return{top:"42%",left:"50%",transform:"translate(-50%, -50%)"};const t=e.getBoundingClientRect();if(window.innerWidth<=720&&(s===".track"||s===".cards")){const c=(r=document.querySelector(".desk"))==null?void 0:r.getBoundingClientRect(),f=e.getBoundingClientRect();if(c)return{top:c.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}if(s===".fx"&&window.innerWidth<=720){const c=(o=document.querySelector(".fx.open"))==null?void 0:o.getBoundingClientRect();if(c)return{top:c.top-16,left:window.innerWidth/2,transform:"translate(-50%, -100%)"};const f=(l=document.querySelector(".fxbtn"))==null?void 0:l.getBoundingClientRect();if(f)return{top:f.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}return s===".fx"?{top:t.top+t.height/2,left:t.left-14,transform:"translate(-100%, -50%)"}:{top:t.top-16,left:t.left+t.width/2,transform:"translate(-50%, -100%)"}}const dT=Math.max(1,Math.min(5,Number(new URLSearchParams(location.search).get("guide"))||2)),pT={left:null,right:null},mT=["5 fingers","2 fingers","fist","pinch","clap"],gT={bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0};function vT(s,e,t){return{position:{x:s,y:e},gesture:t>.5?"fist":"open",openness:1-t,fingerCount:t>.5?0:3,velocity:0}}const Kf=[{key:"play",at:".track",text:"Play a track — the visual moves with the music."},{key:"hand",at:".stage",text:"Raise your hand to the camera — or move the mouse."},{key:"fist",at:".stage",text:"Close your hand (or hold the mouse button) — then open it."},{key:"clap",at:".stage",text:"Clap (or click quickly)."},{key:"fx",at:".fx",text:"Shape it: trail, colour, amount."},{key:"switch",at:".cards",text:"Try another visual."}];function _T(){const s=Ft.useRef(null),[e,t]=Ft.useState("dust"),r=Ft.useRef(e);r.current=e;const[o,l]=Ft.useState(0),[c,f]=Ft.useState(0),[p,d]=Ft.useState(()=>Object.fromEntries(dg.map(G=>[G.id,hv[G.id].start]))),[m,_]=Ft.useState(!1),g=Ft.useRef({trail:o,hue:c,amounts:p});g.current={trail:o,hue:c,amounts:p};const[x,S]=Ft.useState(null),[w,y]=Ft.useState("off"),M=Ft.useRef(pT),C=Ft.useRef(null);C.current=x;const P=Ft.useRef({x:.5,y:.5,on:!1,down:0,closed:0,clapAt:0,moved:0}),L=Ft.useCallback(async()=>{y("asking");try{const G=await navigator.mediaDevices.getUserMedia({video:{width:640,height:360,facingMode:"user"}}),de=document.createElement("video");de.muted=!0,de.playsInline=!0,de.srcObject=G,await de.play(),S(de),y("on")}catch{y("refused")}},[]);Ft.useEffect(()=>{L()},[L]);const X=Ft.useRef(null),[U,z]=Ft.useState(null),E=Ft.useRef(null),N=Ft.useCallback(G=>{var Te;let de=X.current;if(!de){de=new Audio,de.crossOrigin="anonymous",de.loop=!0,X.current=de;const pe=new AudioContext,Fe=pe.createMediaElementSource(de),Se=pe.createAnalyser();Se.fftSize=2048,Se.smoothingTimeConstant=.55,Fe.connect(Se),Se.connect(pe.destination),E.current={ctx:pe,analyser:Se,data:new Uint8Array(Se.frequencyBinCount),state:Jw()}}if((Te=E.current)==null||Te.ctx.resume(),U===G){de.pause(),z(null);return}de.src=pg[G].src,de.play(),z(G)},[U]),[Z,B]=Ft.useState(new Set),[Y,ue]=Ft.useState(()=>{try{return!localStorage.getItem("n4th-guide-seen")}catch{return!0}}),fe=G=>{ue(G);try{localStorage.setItem("n4th-guide-seen","1")}catch{}},H=Ft.useCallback(G=>B(de=>de.has(G)?de:new Set(de).add(G)),[]);Ft.useEffect(()=>{U!==null&&H("play")},[U,H]);const ne=Kf.find(G=>!Z.has(G.key));Ft.useEffect(()=>{if(!ne)try{localStorage.setItem("n4th-guide-seen","1")}catch{}},[ne]),Ft.useEffect(()=>{const G=s.current,de=G.getContext("2d"),Te=document.createElement("canvas"),pe=Te.getContext("2d");let Fe=null,Se=null;const Ve=2.5;let tt=performance.now(),nt=0;const it=rT();let ct=0,yt="";const D=(Ee,lt,b)=>{(Ee.width!==lt||Ee.height!==b)&&(Ee.width=lt,Ee.height=b)},_t=()=>{const Ee=Math.min(window.devicePixelRatio||1,1920/Math.max(1,window.innerWidth)),lt=Math.round(window.innerWidth*Ee),b=Math.round(window.innerHeight*Ee);D(G,lt,b),D(Te,lt,b),Fe&&D(Fe.work,lt,b),Se&&D(Se.work,lt,b)},ot=Ee=>{const lt=document.createElement("canvas");lt.width=G.width,lt.height=G.height;const b=uT(Ee,lt,lt.getContext("2d"));return{v:Ee,r:b,amount:-1,work:lt,alpha:0}},gt=Ee=>{var Xe,Ne,Ue,ut,ft,Mt,K,De;nt=requestAnimationFrame(gt);const lt=Math.min(.1,(Ee-tt)/1e3);tt=Ee,_t();const b=r.current;Fe?Fe.v!==b&&((Ne=Se==null?void 0:(Xe=Se.r).destroy)==null||Ne.call(Xe),Se=Fe,Fe=ot(b)):(Fe=ot(b),Fe.alpha=1),Fe.alpha=Math.min(1,Fe.alpha+lt/Ve),Se&&(Se.alpha=Math.max(0,Se.alpha-lt/Ve),Se.alpha<=0&&((ut=(Ue=Se.r).destroy)==null||ut.call(Ue),Se=null));for(const he of[Fe,Se])he&&C.current&&he.video!==C.current&&((Mt=(ft=he.r).setVideoElement)==null||Mt.call(ft,C.current),he.video=C.current);const A=P.current;A.closed+=((A.down&&Ee-A.down>220?1:0)-A.closed)*Math.min(1,lt*10);let ie=M.current;!ie.left&&!ie.right&&A.on&&Ee-A.moved<4e3&&(ie={left:vT(A.x,A.y,A.closed),right:null,clapping:Ee-A.clapAt<120,clapIntensity:1});let _e=gT;const ye=E.current;ye&&X.current&&!X.current.paused&&(ye.analyser.getByteFrequencyData(ye.data),_e={...eT(ye.data,ye.ctx.sampleRate,ye.state,.8,Date.now()),live:!0});const Re=new Set;for(const he of[ie.left,ie.right])he&&(he.gesture==="fist"?Re.add("fist"):he.gesture==="pinch"?Re.add("pinch"):he.fingerCount===2?Re.add("2 fingers"):((he.fingerCount??0)>=5||(he.openness??0)>.85)&&Re.add("5 fingers"));ie.clapping&&(ct=Ee),Ee-ct<500&&Re.add("clap");const Pe=[...Re].sort().join("|");Pe!==yt&&(yt=Pe,Me(Re)),FE(lt,[sT(ie,it,lt)]),OE(0);const me=g.current;pe.globalCompositeOperation="source-over",pe.globalAlpha=1,pe.fillStyle="#000",pe.fillRect(0,0,Te.width,Te.height);for(const he of[Se,Fe]){if(!he)continue;const We=me.amounts[he.v];Math.abs(We-he.amount)>.001&&((De=(K=he.r).setParams)==null||De.call(K,fT(he.v,We)),he.amount=We),he.r.render(ie,fv[he.v].colors,_e);const Oe=he.alpha*he.alpha*(3-2*he.alpha);pe.filter=me.hue?he.v==="dust"?`sepia(1) saturate(5) hue-rotate(${me.hue-40}deg)`:`hue-rotate(${me.hue}deg)`:"none",pe.globalAlpha=Oe,pe.globalCompositeOperation="lighter",pe.drawImage(he.work,0,0)}pe.filter="none",pe.globalCompositeOperation="source-over",pe.globalAlpha=1,de.globalCompositeOperation="source-over";const ve=me.trail*me.trail*1.5,ze=ve<.005?0:Math.exp(-lt*Math.LN2/ve);de.globalAlpha=1-ze,de.fillStyle="#000",de.fillRect(0,0,G.width,G.height),de.globalAlpha=1,de.globalCompositeOperation=ze>0?"lighten":"source-over",de.drawImage(Te,0,0),de.globalCompositeOperation="source-over"};return nt=requestAnimationFrame(gt),()=>{var Ee,lt,b,A;cancelAnimationFrame(nt),(lt=Fe==null?void 0:(Ee=Fe.r).destroy)==null||lt.call(Ee),(A=Se==null?void 0:(b=Se.r).destroy)==null||A.call(b)}},[]);const W=G=>{const de=P.current;de.x=G.clientX/window.innerWidth,de.y=G.clientY/window.innerHeight,de.on=!0,de.moved=performance.now(),w!=="on"&&H("hand")},O=G=>{W(G),P.current.down=performance.now()},F=()=>{const G=P.current,de=performance.now()-G.down;G.down&&de<220&&(G.clapAt=performance.now(),H("clap")),G.down&&de>400&&H("fist"),G.down=0},[te,I]=Ft.useState(!1),[V,Me]=Ft.useState(new Set),Ae=Ft.useCallback(G=>{var de,Te;M.current=G,I(!!(G.left||G.right)),(G.left||G.right)&&H("hand"),(((de=G.left)==null?void 0:de.gesture)==="fist"||((Te=G.right)==null?void 0:Te.gesture)==="fist")&&H("fist"),G.clapping&&H("clap")},[H]),[xe,j]=Ft.useState(()=>{const G=location.pathname.replace(/^\/+|\/+$/g,"");return["about","instrument","performances"].includes(G)?G:null}),ae=G=>{j(G);try{history.replaceState(null,"","/"+(G??""))}catch{}};return He.jsxs(He.Fragment,{children:[He.jsx("canvas",{ref:s,className:"stage",onPointerMove:W,onPointerDown:O,onPointerUp:F,onPointerLeave:()=>{P.current.on=!1,P.current.down=0}}),x&&He.jsx(Ow,{videoElement:x,onHandData:Ae}),He.jsxs("header",{className:"top",children:[He.jsx("div",{className:"brand",children:"<N4TH>"}),He.jsx("nav",{children:["about","instrument","performances"].map(G=>He.jsx("button",{onClick:()=>ae(G),children:G},G))})]}),Y&&ne&&!xe&&!(m&&window.innerWidth<=720)&&He.jsxs("div",{className:`guide g${dT}`,style:hT(ne.at),"data-at":ne.at,children:[He.jsxs("span",{className:"count",children:[Kf.indexOf(ne)+1,"/",Kf.length]}),He.jsx("span",{children:ne.text}),ne.key==="hand"&&w!=="on"&&He.jsx("button",{className:"cam",onClick:L,disabled:w==="asking",children:w==="refused"?"camera not allowed — the mouse plays":w==="asking"?"…":"allow camera"}),He.jsx("button",{className:"x",onClick:()=>fe(!1),title:"Hide the guide",children:"×"})]}),He.jsxs("aside",{className:`fx ${m?"open":""}`,onPointerDown:()=>H("fx"),children:[He.jsx("div",{className:"fxt",children:"EFFECTS"}),He.jsxs("label",{children:["Trail",He.jsx("input",{type:"range",min:0,max:1,step:.01,value:o,onChange:G=>l(+G.target.value)})]}),He.jsxs("label",{children:["Colour",He.jsx("input",{type:"range",min:0,max:360,step:1,value:c,onChange:G=>f(+G.target.value)})]}),He.jsxs("label",{children:["Amount",He.jsx("input",{type:"range",min:0,max:1,step:.01,value:p[e],onChange:G=>d(de=>({...de,[e]:+G.target.value}))})]})]}),He.jsxs("footer",{className:"desk",children:[He.jsx("div",{className:"cards",children:dg.map((G,de)=>He.jsxs("button",{className:`card ${e===G.id?"on":""}`,onClick:()=>{t(G.id),G.id!=="dust"&&H("switch")},title:G.note,children:[He.jsx("img",{src:oT[G.id],alt:""}),He.jsx("span",{className:"num",children:de+1}),He.jsx("span",{className:"name",children:G.name})]},G.id))}),He.jsx("div",{className:"sep"}),He.jsx("div",{className:"tracks",children:pg.map((G,de)=>He.jsxs("button",{className:`track ${U===de?"on":""}`,onClick:()=>N(de),children:[He.jsx("span",{children:U===de?"❚❚":"▶"})," ",G.name]},G.src))}),He.jsx("div",{className:"sep"}),He.jsx("button",{className:`fxbtn ${m?"on":""}`,onClick:()=>{_(G=>!G),H("fx")},children:"FX"}),He.jsx("button",{className:`camera ${w==="on"?"on":""}`,onClick:w==="on"?void 0:L,title:"Play with your hand through the camera",children:w==="on"?He.jsxs(He.Fragment,{children:[He.jsx("span",{className:`dot ${te?"seen":""}`,children:"●"})," hand"]}):w==="refused"?"mouse":"camera"}),He.jsx("div",{className:"words",children:mT.map(G=>He.jsx("span",{className:V.has(G)?"lit":"",children:G},G))})]}),xe&&He.jsx(cT,{page:xe,onClose:()=>ae(null),onGo:ae})]})}tx.createRoot(document.getElementById("root")).render(He.jsx(Ft.StrictMode,{children:He.jsx(_T,{})}));
