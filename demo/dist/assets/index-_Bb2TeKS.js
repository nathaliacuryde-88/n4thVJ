var p_=Object.defineProperty;var m_=(r,e,t)=>e in r?p_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ce=(r,e,t)=>m_(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Gu={exports:{}},Jo={},Wu={exports:{}},Tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function g_(){if(um)return Tt;um=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(b){return b===null||typeof b!="object"?null:(b=_&&b[_]||b["@@iterator"],typeof b=="function"?b:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function x(b,N,_e){this.props=b,this.context=N,this.refs=C,this.updater=_e||M}x.prototype.isReactComponent={},x.prototype.setState=function(b,N){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,N,"setState")},x.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function S(){}S.prototype=x.prototype;function R(b,N,_e){this.props=b,this.context=N,this.refs=C,this.updater=_e||M}var I=R.prototype=new S;I.constructor=R,E(I,x.prototype),I.isPureReactComponent=!0;var L=Array.isArray,V=Object.prototype.hasOwnProperty,D={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function w(b,N,_e){var xe,pe={},H=null,ue=null;if(N!=null)for(xe in N.ref!==void 0&&(ue=N.ref),N.key!==void 0&&(H=""+N.key),N)V.call(N,xe)&&!B.hasOwnProperty(xe)&&(pe[xe]=N[xe]);var fe=arguments.length-2;if(fe===1)pe.children=_e;else if(1<fe){for(var Ae=Array(fe),Le=0;Le<fe;Le++)Ae[Le]=arguments[Le+2];pe.children=Ae}if(b&&b.defaultProps)for(xe in fe=b.defaultProps,fe)pe[xe]===void 0&&(pe[xe]=fe[xe]);return{$$typeof:r,type:b,key:H,ref:ue,props:pe,_owner:D.current}}function F(b,N){return{$$typeof:r,type:b.type,key:N,ref:b.ref,props:b.props,_owner:b._owner}}function Y(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function z(b){var N={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(_e){return N[_e]})}var Q=/\/+/g;function oe(b,N){return typeof b=="object"&&b!==null&&b.key!=null?z(""+b.key):N.toString(36)}function ie(b,N,_e,xe,pe){var H=typeof b;(H==="undefined"||H==="boolean")&&(b=null);var ue=!1;if(b===null)ue=!0;else switch(H){case"string":case"number":ue=!0;break;case"object":switch(b.$$typeof){case r:case e:ue=!0}}if(ue)return ue=b,pe=pe(ue),b=xe===""?"."+oe(ue,0):xe,L(pe)?(_e="",b!=null&&(_e=b.replace(Q,"$&/")+"/"),ie(pe,N,_e,"",function(Le){return Le})):pe!=null&&(Y(pe)&&(pe=F(pe,_e+(!pe.key||ue&&ue.key===pe.key?"":(""+pe.key).replace(Q,"$&/")+"/")+b)),N.push(pe)),1;if(ue=0,xe=xe===""?".":xe+":",L(b))for(var fe=0;fe<b.length;fe++){H=b[fe];var Ae=xe+oe(H,fe);ue+=ie(H,N,_e,Ae,pe)}else if(Ae=g(b),typeof Ae=="function")for(b=Ae.call(b),fe=0;!(H=b.next()).done;)H=H.value,Ae=xe+oe(H,fe++),ue+=ie(H,N,_e,Ae,pe);else if(H==="object")throw N=String(b),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return ue}function j(b,N,_e){if(b==null)return b;var xe=[],pe=0;return ie(b,xe,"","",function(H){return N.call(_e,H,pe++)}),xe}function $(b){if(b._status===-1){var N=b._result;N=N(),N.then(function(_e){(b._status===0||b._status===-1)&&(b._status=1,b._result=_e)},function(_e){(b._status===0||b._status===-1)&&(b._status=2,b._result=_e)}),b._status===-1&&(b._status=0,b._result=N)}if(b._status===1)return b._result.default;throw b._result}var X={current:null},q={transition:null},O={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:q,ReactCurrentOwner:D};function J(){throw Error("act(...) is not supported in production builds of React.")}return Tt.Children={map:j,forEach:function(b,N,_e){j(b,function(){N.apply(this,arguments)},_e)},count:function(b){var N=0;return j(b,function(){N++}),N},toArray:function(b){return j(b,function(N){return N})||[]},only:function(b){if(!Y(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Tt.Component=x,Tt.Fragment=t,Tt.Profiler=a,Tt.PureComponent=R,Tt.StrictMode=s,Tt.Suspense=p,Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,Tt.act=J,Tt.cloneElement=function(b,N,_e){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var xe=E({},b.props),pe=b.key,H=b.ref,ue=b._owner;if(N!=null){if(N.ref!==void 0&&(H=N.ref,ue=D.current),N.key!==void 0&&(pe=""+N.key),b.type&&b.type.defaultProps)var fe=b.type.defaultProps;for(Ae in N)V.call(N,Ae)&&!B.hasOwnProperty(Ae)&&(xe[Ae]=N[Ae]===void 0&&fe!==void 0?fe[Ae]:N[Ae])}var Ae=arguments.length-2;if(Ae===1)xe.children=_e;else if(1<Ae){fe=Array(Ae);for(var Le=0;Le<Ae;Le++)fe[Le]=arguments[Le+2];xe.children=fe}return{$$typeof:r,type:b.type,key:pe,ref:H,props:xe,_owner:ue}},Tt.createContext=function(b){return b={$$typeof:u,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:l,_context:b},b.Consumer=b},Tt.createElement=w,Tt.createFactory=function(b){var N=w.bind(null,b);return N.type=b,N},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(b){return{$$typeof:h,render:b}},Tt.isValidElement=Y,Tt.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:$}},Tt.memo=function(b,N){return{$$typeof:d,type:b,compare:N===void 0?null:N}},Tt.startTransition=function(b){var N=q.transition;q.transition={};try{b()}finally{q.transition=N}},Tt.unstable_act=J,Tt.useCallback=function(b,N){return X.current.useCallback(b,N)},Tt.useContext=function(b){return X.current.useContext(b)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(b){return X.current.useDeferredValue(b)},Tt.useEffect=function(b,N){return X.current.useEffect(b,N)},Tt.useId=function(){return X.current.useId()},Tt.useImperativeHandle=function(b,N,_e){return X.current.useImperativeHandle(b,N,_e)},Tt.useInsertionEffect=function(b,N){return X.current.useInsertionEffect(b,N)},Tt.useLayoutEffect=function(b,N){return X.current.useLayoutEffect(b,N)},Tt.useMemo=function(b,N){return X.current.useMemo(b,N)},Tt.useReducer=function(b,N,_e){return X.current.useReducer(b,N,_e)},Tt.useRef=function(b){return X.current.useRef(b)},Tt.useState=function(b){return X.current.useState(b)},Tt.useSyncExternalStore=function(b,N,_e){return X.current.useSyncExternalStore(b,N,_e)},Tt.useTransition=function(){return X.current.useTransition()},Tt.version="18.3.1",Tt}var fm;function Ch(){return fm||(fm=1,Wu.exports=g_()),Wu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function v_(){if(hm)return Jo;hm=1;var r=Ch(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(h,p,d){var v,_={},g=null,M=null;d!==void 0&&(g=""+d),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)s.call(p,v)&&!l.hasOwnProperty(v)&&(_[v]=p[v]);if(h&&h.defaultProps)for(v in p=h.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:h,key:g,ref:M,props:_,_owner:a.current}}return Jo.Fragment=t,Jo.jsx=u,Jo.jsxs=u,Jo}var dm;function __(){return dm||(dm=1,Gu.exports=v_()),Gu.exports}var ze=__(),Vt=Ch(),_l={},Xu={exports:{}},Kn={},ju={exports:{}},qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function x_(){return pm||(pm=1,(function(r){function e(q,O){var J=q.length;q.push(O);e:for(;0<J;){var b=J-1>>>1,N=q[b];if(0<a(N,O))q[b]=O,q[J]=N,J=b;else break e}}function t(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var O=q[0],J=q.pop();if(J!==O){q[0]=J;e:for(var b=0,N=q.length,_e=N>>>1;b<_e;){var xe=2*(b+1)-1,pe=q[xe],H=xe+1,ue=q[H];if(0>a(pe,J))H<N&&0>a(ue,pe)?(q[b]=ue,q[H]=J,b=H):(q[b]=pe,q[xe]=J,b=xe);else if(H<N&&0>a(ue,J))q[b]=ue,q[H]=J,b=H;else break e}}return O}function a(q,O){var J=q.sortIndex-O.sortIndex;return J!==0?J:q.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();r.unstable_now=function(){return u.now()-h}}var p=[],d=[],v=1,_=null,g=3,M=!1,E=!1,C=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(q){for(var O=t(d);O!==null;){if(O.callback===null)s(d);else if(O.startTime<=q)s(d),O.sortIndex=O.expirationTime,e(p,O);else break;O=t(d)}}function L(q){if(C=!1,I(q),!E)if(t(p)!==null)E=!0,$(V);else{var O=t(d);O!==null&&X(L,O.startTime-q)}}function V(q,O){E=!1,C&&(C=!1,S(w),w=-1),M=!0;var J=g;try{for(I(O),_=t(p);_!==null&&(!(_.expirationTime>O)||q&&!z());){var b=_.callback;if(typeof b=="function"){_.callback=null,g=_.priorityLevel;var N=b(_.expirationTime<=O);O=r.unstable_now(),typeof N=="function"?_.callback=N:_===t(p)&&s(p),I(O)}else s(p);_=t(p)}if(_!==null)var _e=!0;else{var xe=t(d);xe!==null&&X(L,xe.startTime-O),_e=!1}return _e}finally{_=null,g=J,M=!1}}var D=!1,B=null,w=-1,F=5,Y=-1;function z(){return!(r.unstable_now()-Y<F)}function Q(){if(B!==null){var q=r.unstable_now();Y=q;var O=!0;try{O=B(!0,q)}finally{O?oe():(D=!1,B=null)}}else D=!1}var oe;if(typeof R=="function")oe=function(){R(Q)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,j=ie.port2;ie.port1.onmessage=Q,oe=function(){j.postMessage(null)}}else oe=function(){x(Q,0)};function $(q){B=q,D||(D=!0,oe())}function X(q,O){w=x(function(){q(r.unstable_now())},O)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(q){q.callback=null},r.unstable_continueExecution=function(){E||M||(E=!0,$(V))},r.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<q?Math.floor(1e3/q):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(q){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var J=g;g=O;try{return q()}finally{g=J}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(q,O){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var J=g;g=q;try{return O()}finally{g=J}},r.unstable_scheduleCallback=function(q,O,J){var b=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?b+J:b):J=b,q){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=J+N,q={id:v++,callback:O,priorityLevel:q,startTime:J,expirationTime:N,sortIndex:-1},J>b?(q.sortIndex=J,e(d,q),t(p)===null&&q===t(d)&&(C?(S(w),w=-1):C=!0,X(L,J-b))):(q.sortIndex=N,e(p,q),E||M||(E=!0,$(V))),q},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(q){var O=g;return function(){var J=g;g=O;try{return q.apply(this,arguments)}finally{g=J}}}})(qu)),qu}var mm;function S_(){return mm||(mm=1,ju.exports=x_()),ju.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function M_(){if(gm)return Kn;gm=1;var r=Ch(),e=S_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(n){return p.call(_,n)?!0:p.call(v,n)?!1:d.test(n)?_[n]=!0:(v[n]=!0,!1)}function M(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,c){if(i===null||typeof i>"u"||M(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,o,c,f,m,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=A}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,R);x[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,R);x[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,R);x[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,i,o,c){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,c)&&(o=null),c||f===null?g(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var L=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),D=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),z=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),q=Symbol.iterator;function O(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var J=Object.assign,b;function N(n){if(b===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);b=i&&i[1]||""}return`
`+b+n}var _e=!1;function xe(n,i){if(!n||_e)return"";_e=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(he){var c=he}Reflect.construct(n,[],i)}else{try{i.call()}catch(he){c=he}n.call(i.prototype)}else{try{throw Error()}catch(he){c=he}n()}}catch(he){if(he&&c&&typeof he.stack=="string"){for(var f=he.stack.split(`
`),m=c.stack.split(`
`),A=f.length-1,k=m.length-1;1<=A&&0<=k&&f[A]!==m[k];)k--;for(;1<=A&&0<=k;A--,k--)if(f[A]!==m[k]){if(A!==1||k!==1)do if(A--,k--,0>k||f[A]!==m[k]){var W=`
`+f[A].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=A&&0<=k);break}}}finally{_e=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?N(n):""}function pe(n){switch(n.tag){case 5:return N(n.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return n=xe(n.type,!1),n;case 11:return n=xe(n.type.render,!1),n;case 1:return n=xe(n.type,!0),n;default:return""}}function H(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case B:return"Fragment";case D:return"Portal";case F:return"Profiler";case w:return"StrictMode";case oe:return"Suspense";case ie:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case Y:return(n._context.displayName||"Context")+".Provider";case Q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case j:return i=n.displayName||null,i!==null?i:H(n.type)||"Memo";case $:i=n._payload,n=n._init;try{return H(n(i))}catch{}}return null}function ue(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Le(n){var i=Ae(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(A){c=""+A,m.call(this,A)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Oe(n){n._valueTracker||(n._valueTracker=Le(n))}function dt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Ae(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function qe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function it(n,i){var o=i.checked;return J({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function rt(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=fe(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function st(n,i){i=i.checked,i!=null&&I(n,"checked",i,!1)}function At(n,i){st(n,i);var o=fe(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Mt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Mt(n,i.type,fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Et(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Mt(n,i,o){(i!=="number"||qe(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var U=Array.isArray;function gt(n,i,o,c){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+fe(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function nt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return J({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Rt(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(U(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:fe(o)}}function Fe(n,i){var o=fe(i.value),c=fe(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Lt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function P(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function y(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?P(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ee,ve=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ee=ee||document.createElement("div"),ee.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ee.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Se(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ce={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];Object.keys(Ce).forEach(function(n){Re.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ce[i]=Ce[n]})});function de(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ce.hasOwnProperty(n)&&Ce[n]?(""+i).trim():i+"px"}function me(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=de(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var ke=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(n,i){if(i){if(ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ie(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function ut(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ft=null,vt=null,G=null;function Pe(n){if(n=Oo(n)){if(typeof ft!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Da(i),ft(n.stateNode,n.type,i))}}function ge(n){vt?G?G.push(n):G=[n]:vt=n}function We(){if(vt){var n=vt,i=G;if(G=vt=null,Pe(n),i)for(n=0;n<i.length;n++)Pe(i[n])}}function Ne(n,i){return n(i)}function Me(){}var Xe=!1;function He(n,i,o){if(Xe)return n(i,o);Xe=!0;try{return Ne(n,i,o)}finally{Xe=!1,(vt!==null||G!==null)&&(Me(),We())}}function _t(n,i){var o=n.stateNode;if(o===null)return null;var c=Da(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Pt=!1;if(h)try{var an={};Object.defineProperty(an,"passive",{get:function(){Pt=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{Pt=!1}function Nn(n,i,o,c,f,m,A,k,W){var he=Array.prototype.slice.call(arguments,3);try{i.apply(o,he)}catch(Ee){this.onError(Ee)}}var Si=!1,Zi=null,Mi=!1,Qi=null,Qn={onError:function(n){Si=!0,Zi=n}};function jr(n,i,o,c,f,m,A,k,W){Si=!1,Zi=null,Nn.apply(Qn,arguments)}function Ms(n,i,o,c,f,m,A,k,W){if(jr.apply(this,arguments),Si){if(Si){var he=Zi;Si=!1,Zi=null}else throw Error(t(198));Mi||(Mi=!0,Qi=he)}}function ln(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function wn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Un(n){if(ln(n)!==n)throw Error(t(188))}function Tn(n){var i=n.alternate;if(!i){if(i=ln(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return Un(f),n;if(m===c)return Un(f),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=m;else{for(var A=!1,k=f.child;k;){if(k===o){A=!0,o=f,c=m;break}if(k===c){A=!0,c=f,o=m;break}k=k.sibling}if(!A){for(k=m.child;k;){if(k===o){A=!0,o=m,c=f;break}if(k===c){A=!0,c=m,o=f;break}k=k.sibling}if(!A)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Fn(n){return n=Tn(n),n!==null?On(n):null}function On(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=On(n);if(i!==null)return i;n=n.sibling}return null}var qr=e.unstable_scheduleCallback,Kr=e.unstable_cancelCallback,oi=e.unstable_shouldYield,ai=e.unstable_requestPaint,jt=e.unstable_now,So=e.unstable_getCurrentPriorityLevel,tn=e.unstable_ImmediatePriority,T=e.unstable_UserBlockingPriority,Z=e.unstable_NormalPriority,ae=e.unstable_LowPriority,se=e.unstable_IdlePriority,re=null,Ue=null;function Be(n){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(re,n,void 0,(n.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:ot,Ye=Math.log,Ze=Math.LN2;function ot(n){return n>>>=0,n===0?32:31-(Ye(n)/Ze|0)|0}var at=64,Je=4194304;function wt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ft(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,A=o&268435455;if(A!==0){var k=A&~f;k!==0?c=wt(k):(m&=A,m!==0&&(c=wt(m)))}else A=o&~f,A!==0?c=wt(A):m!==0&&(c=wt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-Te(i),f=1<<o,c|=n[o],i&=~f;return c}function Gt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var A=31-Te(m),k=1<<A,W=f[A];W===-1?((k&o)===0||(k&c)!==0)&&(f[A]=Gt(k,i)):W<=i&&(n.expiredLanes|=k),m&=~k}}function Qt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function je(){var n=at;return at<<=1,(at&4194240)===0&&(at=64),n}function nn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function xt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Te(i),n[i]=o}function gn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-Te(o),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,o&=~m}}function yn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-Te(o),f=1<<c;f&i|n[c]&i&&(n[c]|=i),o&=~f}}var mt=0;function Jn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var kt,qt,yi,zt,Ei,Oi=!1,Yr=[],vr=null,_r=null,xr=null,Mo=new Map,yo=new Map,Sr=[],Fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qh(n,i){switch(n){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":Mo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(i.pointerId)}}function Eo(n,i,o,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Oo(i),i!==null&&qt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Og(n,i,o,c,f){switch(i){case"focusin":return vr=Eo(vr,n,i,o,c,f),!0;case"dragenter":return _r=Eo(_r,n,i,o,c,f),!0;case"mouseover":return xr=Eo(xr,n,i,o,c,f),!0;case"pointerover":var m=f.pointerId;return Mo.set(m,Eo(Mo.get(m)||null,n,i,o,c,f)),!0;case"gotpointercapture":return m=f.pointerId,yo.set(m,Eo(yo.get(m)||null,n,i,o,c,f)),!0}return!1}function Kh(n){var i=Zr(n.target);if(i!==null){var o=ln(i);if(o!==null){if(i=o.tag,i===13){if(i=wn(o),i!==null){n.blockedOn=i,Ei(n.priority,function(){yi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=gc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);be=c,o.target.dispatchEvent(c),be=null}else return i=Oo(o),i!==null&&qt(i),n.blockedOn=o,!1;i.shift()}return!0}function Yh(n,i,o){xa(n)&&o.delete(i)}function kg(){Oi=!1,vr!==null&&xa(vr)&&(vr=null),_r!==null&&xa(_r)&&(_r=null),xr!==null&&xa(xr)&&(xr=null),Mo.forEach(Yh),yo.forEach(Yh)}function Ao(n,i){n.blockedOn===i&&(n.blockedOn=null,Oi||(Oi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,kg)))}function wo(n){function i(f){return Ao(f,n)}if(0<Yr.length){Ao(Yr[0],n);for(var o=1;o<Yr.length;o++){var c=Yr[o];c.blockedOn===n&&(c.blockedOn=null)}}for(vr!==null&&Ao(vr,n),_r!==null&&Ao(_r,n),xr!==null&&Ao(xr,n),Mo.forEach(i),yo.forEach(i),o=0;o<Sr.length;o++)c=Sr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Sr.length&&(o=Sr[0],o.blockedOn===null);)Kh(o),o.blockedOn===null&&Sr.shift()}var ys=L.ReactCurrentBatchConfig,Sa=!0;function Bg(n,i,o,c){var f=mt,m=ys.transition;ys.transition=null;try{mt=1,mc(n,i,o,c)}finally{mt=f,ys.transition=m}}function zg(n,i,o,c){var f=mt,m=ys.transition;ys.transition=null;try{mt=4,mc(n,i,o,c)}finally{mt=f,ys.transition=m}}function mc(n,i,o,c){if(Sa){var f=gc(n,i,o,c);if(f===null)Dc(n,i,c,Ma,o),qh(n,c);else if(Og(f,n,i,o,c))c.stopPropagation();else if(qh(n,c),i&4&&-1<Fg.indexOf(n)){for(;f!==null;){var m=Oo(f);if(m!==null&&kt(m),m=gc(n,i,o,c),m===null&&Dc(n,i,c,Ma,o),m===f)break;f=m}f!==null&&c.stopPropagation()}else Dc(n,i,c,null,o)}}var Ma=null;function gc(n,i,o,c){if(Ma=null,n=ut(c),n=Zr(n),n!==null)if(i=ln(n),i===null)n=null;else if(o=i.tag,o===13){if(n=wn(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ma=n,null}function Zh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(So()){case tn:return 1;case T:return 4;case Z:case ae:return 16;case se:return 536870912;default:return 16}default:return 16}}var Mr=null,vc=null,ya=null;function Qh(){if(ya)return ya;var n,i=vc,o=i.length,c,f="value"in Mr?Mr.value:Mr.textContent,m=f.length;for(n=0;n<o&&i[n]===f[n];n++);var A=o-n;for(c=1;c<=A&&i[o-c]===f[m-c];c++);return ya=f.slice(n,1<c?1-c:void 0)}function Ea(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Aa(){return!0}function Jh(){return!1}function $n(n){function i(o,c,f,m,A){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=A,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(o=n[k],this[k]=o?o(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Aa:Jh,this.isPropagationStopped=Jh,this}return J(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),i}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_c=$n(Es),To=J({},Es,{view:0,detail:0}),Hg=$n(To),xc,Sc,Co,wa=J({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Co&&(Co&&n.type==="mousemove"?(xc=n.screenX-Co.screenX,Sc=n.screenY-Co.screenY):Sc=xc=0,Co=n),xc)},movementY:function(n){return"movementY"in n?n.movementY:Sc}}),$h=$n(wa),Vg=J({},wa,{dataTransfer:0}),Gg=$n(Vg),Wg=J({},To,{relatedTarget:0}),Mc=$n(Wg),Xg=J({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),jg=$n(Xg),qg=J({},Es,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Kg=$n(qg),Yg=J({},Es,{data:0}),ed=$n(Yg),Zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $g(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Jg[n])?!!i[n]:!1}function yc(){return $g}var ev=J({},To,{key:function(n){if(n.key){var i=Zg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ea(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Qg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yc,charCode:function(n){return n.type==="keypress"?Ea(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ea(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),tv=$n(ev),nv=J({},wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),td=$n(nv),iv=J({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yc}),rv=$n(iv),sv=J({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),ov=$n(sv),av=J({},wa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),lv=$n(av),cv=[9,13,27,32],Ec=h&&"CompositionEvent"in window,Ro=null;h&&"documentMode"in document&&(Ro=document.documentMode);var uv=h&&"TextEvent"in window&&!Ro,nd=h&&(!Ec||Ro&&8<Ro&&11>=Ro),id=" ",rd=!1;function sd(n,i){switch(n){case"keyup":return cv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function od(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var As=!1;function fv(n,i){switch(n){case"compositionend":return od(i);case"keypress":return i.which!==32?null:(rd=!0,id);case"textInput":return n=i.data,n===id&&rd?null:n;default:return null}}function hv(n,i){if(As)return n==="compositionend"||!Ec&&sd(n,i)?(n=Qh(),ya=vc=Mr=null,As=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return nd&&i.locale!=="ko"?null:i.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ad(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!dv[n.type]:i==="textarea"}function ld(n,i,o,c){ge(c),i=Pa(i,"onChange"),0<i.length&&(o=new _c("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var bo=null,Po=null;function pv(n){Td(n,0)}function Ta(n){var i=bs(n);if(dt(i))return n}function mv(n,i){if(n==="change")return i}var cd=!1;if(h){var Ac;if(h){var wc="oninput"in document;if(!wc){var ud=document.createElement("div");ud.setAttribute("oninput","return;"),wc=typeof ud.oninput=="function"}Ac=wc}else Ac=!1;cd=Ac&&(!document.documentMode||9<document.documentMode)}function fd(){bo&&(bo.detachEvent("onpropertychange",hd),Po=bo=null)}function hd(n){if(n.propertyName==="value"&&Ta(Po)){var i=[];ld(i,Po,n,ut(n)),He(pv,i)}}function gv(n,i,o){n==="focusin"?(fd(),bo=i,Po=o,bo.attachEvent("onpropertychange",hd)):n==="focusout"&&fd()}function vv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ta(Po)}function _v(n,i){if(n==="click")return Ta(i)}function xv(n,i){if(n==="input"||n==="change")return Ta(i)}function Sv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ai=typeof Object.is=="function"?Object.is:Sv;function Lo(n,i){if(Ai(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!p.call(i,f)||!Ai(n[f],i[f]))return!1}return!0}function dd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function pd(n,i){var o=dd(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=dd(o)}}function md(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?md(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function gd(){for(var n=window,i=qe();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=qe(n.document)}return i}function Tc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Mv(n){var i=gd(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&md(o.ownerDocument.documentElement,o)){if(c!==null&&Tc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=pd(o,m);var A=pd(o,c);f&&A&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var yv=h&&"documentMode"in document&&11>=document.documentMode,ws=null,Cc=null,Io=null,Rc=!1;function vd(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Rc||ws==null||ws!==qe(c)||(c=ws,"selectionStart"in c&&Tc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Io&&Lo(Io,c)||(Io=c,c=Pa(Cc,"onSelect"),0<c.length&&(i=new _c("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=ws)))}function Ca(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Ts={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},bc={},_d={};h&&(_d=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Ra(n){if(bc[n])return bc[n];if(!Ts[n])return n;var i=Ts[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in _d)return bc[n]=i[o];return n}var xd=Ra("animationend"),Sd=Ra("animationiteration"),Md=Ra("animationstart"),yd=Ra("transitionend"),Ed=new Map,Ad="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(n,i){Ed.set(n,i),l(i,[n])}for(var Pc=0;Pc<Ad.length;Pc++){var Lc=Ad[Pc],Ev=Lc.toLowerCase(),Av=Lc[0].toUpperCase()+Lc.slice(1);yr(Ev,"on"+Av)}yr(xd,"onAnimationEnd"),yr(Sd,"onAnimationIteration"),yr(Md,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(yd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function wd(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,Ms(c,i,void 0,n),n.currentTarget=null}function Td(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var A=c.length-1;0<=A;A--){var k=c[A],W=k.instance,he=k.currentTarget;if(k=k.listener,W!==m&&f.isPropagationStopped())break e;wd(f,k,he),m=W}else for(A=0;A<c.length;A++){if(k=c[A],W=k.instance,he=k.currentTarget,k=k.listener,W!==m&&f.isPropagationStopped())break e;wd(f,k,he),m=W}}}if(Mi)throw n=Qi,Mi=!1,Qi=null,n}function Kt(n,i){var o=i[Bc];o===void 0&&(o=i[Bc]=new Set);var c=n+"__bubble";o.has(c)||(Cd(i,n,2,!1),o.add(c))}function Ic(n,i,o){var c=0;i&&(c|=4),Cd(o,n,c,i)}var ba="_reactListening"+Math.random().toString(36).slice(2);function No(n){if(!n[ba]){n[ba]=!0,s.forEach(function(o){o!=="selectionchange"&&(wv.has(o)||Ic(o,!1,n),Ic(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ba]||(i[ba]=!0,Ic("selectionchange",!1,i))}}function Cd(n,i,o,c){switch(Zh(i)){case 1:var f=Bg;break;case 4:f=zg;break;default:f=mc}o=f.bind(null,i,o,n),f=void 0,!Pt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function Dc(n,i,o,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var k=c.stateNode.containerInfo;if(k===f||k.nodeType===8&&k.parentNode===f)break;if(A===4)for(A=c.return;A!==null;){var W=A.tag;if((W===3||W===4)&&(W=A.stateNode.containerInfo,W===f||W.nodeType===8&&W.parentNode===f))return;A=A.return}for(;k!==null;){if(A=Zr(k),A===null)return;if(W=A.tag,W===5||W===6){c=m=A;continue e}k=k.parentNode}}c=c.return}He(function(){var he=m,Ee=ut(o),we=[];e:{var ye=Ed.get(n);if(ye!==void 0){var Ke=_c,$e=n;switch(n){case"keypress":if(Ea(o)===0)break e;case"keydown":case"keyup":Ke=tv;break;case"focusin":$e="focus",Ke=Mc;break;case"focusout":$e="blur",Ke=Mc;break;case"beforeblur":case"afterblur":Ke=Mc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ke=$h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ke=Gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ke=rv;break;case xd:case Sd:case Md:Ke=jg;break;case yd:Ke=ov;break;case"scroll":Ke=Hg;break;case"wheel":Ke=lv;break;case"copy":case"cut":case"paste":Ke=Kg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ke=td}var et=(i&4)!==0,rn=!et&&n==="scroll",ne=et?ye!==null?ye+"Capture":null:ye;et=[];for(var K=he,le;K!==null;){le=K;var De=le.stateNode;if(le.tag===5&&De!==null&&(le=De,ne!==null&&(De=_t(K,ne),De!=null&&et.push(Uo(K,De,le)))),rn)break;K=K.return}0<et.length&&(ye=new Ke(ye,$e,null,o,Ee),we.push({event:ye,listeners:et}))}}if((i&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",Ke=n==="mouseout"||n==="pointerout",ye&&o!==be&&($e=o.relatedTarget||o.fromElement)&&(Zr($e)||$e[Ji]))break e;if((Ke||ye)&&(ye=Ee.window===Ee?Ee:(ye=Ee.ownerDocument)?ye.defaultView||ye.parentWindow:window,Ke?($e=o.relatedTarget||o.toElement,Ke=he,$e=$e?Zr($e):null,$e!==null&&(rn=ln($e),$e!==rn||$e.tag!==5&&$e.tag!==6)&&($e=null)):(Ke=null,$e=he),Ke!==$e)){if(et=$h,De="onMouseLeave",ne="onMouseEnter",K="mouse",(n==="pointerout"||n==="pointerover")&&(et=td,De="onPointerLeave",ne="onPointerEnter",K="pointer"),rn=Ke==null?ye:bs(Ke),le=$e==null?ye:bs($e),ye=new et(De,K+"leave",Ke,o,Ee),ye.target=rn,ye.relatedTarget=le,De=null,Zr(Ee)===he&&(et=new et(ne,K+"enter",$e,o,Ee),et.target=le,et.relatedTarget=rn,De=et),rn=De,Ke&&$e)t:{for(et=Ke,ne=$e,K=0,le=et;le;le=Cs(le))K++;for(le=0,De=ne;De;De=Cs(De))le++;for(;0<K-le;)et=Cs(et),K--;for(;0<le-K;)ne=Cs(ne),le--;for(;K--;){if(et===ne||ne!==null&&et===ne.alternate)break t;et=Cs(et),ne=Cs(ne)}et=null}else et=null;Ke!==null&&Rd(we,ye,Ke,et,!1),$e!==null&&rn!==null&&Rd(we,rn,$e,et,!0)}}e:{if(ye=he?bs(he):window,Ke=ye.nodeName&&ye.nodeName.toLowerCase(),Ke==="select"||Ke==="input"&&ye.type==="file")var tt=mv;else if(ad(ye))if(cd)tt=xv;else{tt=vv;var lt=gv}else(Ke=ye.nodeName)&&Ke.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(tt=_v);if(tt&&(tt=tt(n,he))){ld(we,tt,o,Ee);break e}lt&&lt(n,ye,he),n==="focusout"&&(lt=ye._wrapperState)&&lt.controlled&&ye.type==="number"&&Mt(ye,"number",ye.value)}switch(lt=he?bs(he):window,n){case"focusin":(ad(lt)||lt.contentEditable==="true")&&(ws=lt,Cc=he,Io=null);break;case"focusout":Io=Cc=ws=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,vd(we,o,Ee);break;case"selectionchange":if(yv)break;case"keydown":case"keyup":vd(we,o,Ee)}var ct;if(Ec)e:{switch(n){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else As?sd(n,o)&&(pt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(pt="onCompositionStart");pt&&(nd&&o.locale!=="ko"&&(As||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&As&&(ct=Qh()):(Mr=Ee,vc="value"in Mr?Mr.value:Mr.textContent,As=!0)),lt=Pa(he,pt),0<lt.length&&(pt=new ed(pt,n,null,o,Ee),we.push({event:pt,listeners:lt}),ct?pt.data=ct:(ct=od(o),ct!==null&&(pt.data=ct)))),(ct=uv?fv(n,o):hv(n,o))&&(he=Pa(he,"onBeforeInput"),0<he.length&&(Ee=new ed("onBeforeInput","beforeinput",null,o,Ee),we.push({event:Ee,listeners:he}),Ee.data=ct))}Td(we,i)})}function Uo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Pa(n,i){for(var o=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=_t(n,o),m!=null&&c.unshift(Uo(n,m,f)),m=_t(n,i),m!=null&&c.push(Uo(n,m,f))),n=n.return}return c}function Cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Rd(n,i,o,c,f){for(var m=i._reactName,A=[];o!==null&&o!==c;){var k=o,W=k.alternate,he=k.stateNode;if(W!==null&&W===c)break;k.tag===5&&he!==null&&(k=he,f?(W=_t(o,m),W!=null&&A.unshift(Uo(o,W,k))):f||(W=_t(o,m),W!=null&&A.push(Uo(o,W,k)))),o=o.return}A.length!==0&&n.push({event:i,listeners:A})}var Tv=/\r\n?/g,Cv=/\u0000|\uFFFD/g;function bd(n){return(typeof n=="string"?n:""+n).replace(Tv,`
`).replace(Cv,"")}function La(n,i,o){if(i=bd(i),bd(n)!==i&&o)throw Error(t(425))}function Ia(){}var Nc=null,Uc=null;function Fc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,Rv=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,bv=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(n){return Pd.resolve(null).then(n).catch(Pv)}:Oc;function Pv(n){setTimeout(function(){throw n})}function kc(n,i){var o=i,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),wo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);wo(i)}function Er(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ld(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),ki="__reactFiber$"+Rs,Fo="__reactProps$"+Rs,Ji="__reactContainer$"+Rs,Bc="__reactEvents$"+Rs,Lv="__reactListeners$"+Rs,Iv="__reactHandles$"+Rs;function Zr(n){var i=n[ki];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ji]||o[ki]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Ld(n);n!==null;){if(o=n[ki])return o;n=Ld(n)}return i}n=o,o=n.parentNode}return null}function Oo(n){return n=n[ki]||n[Ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Da(n){return n[Fo]||null}var zc=[],Ps=-1;function Ar(n){return{current:n}}function Yt(n){0>Ps||(n.current=zc[Ps],zc[Ps]=null,Ps--)}function Wt(n,i){Ps++,zc[Ps]=n.current,n.current=i}var wr={},Cn=Ar(wr),Gn=Ar(!1),Qr=wr;function Ls(n,i){var o=n.type.contextTypes;if(!o)return wr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in o)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Wn(n){return n=n.childContextTypes,n!=null}function Na(){Yt(Gn),Yt(Cn)}function Id(n,i,o){if(Cn.current!==wr)throw Error(t(168));Wt(Cn,i),Wt(Gn,o)}function Dd(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,ue(n)||"Unknown",f));return J({},o,c)}function Ua(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||wr,Qr=Cn.current,Wt(Cn,n),Wt(Gn,Gn.current),!0}function Nd(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Dd(n,i,Qr),c.__reactInternalMemoizedMergedChildContext=n,Yt(Gn),Yt(Cn),Wt(Cn,n)):Yt(Gn),Wt(Gn,o)}var $i=null,Fa=!1,Hc=!1;function Ud(n){$i===null?$i=[n]:$i.push(n)}function Dv(n){Fa=!0,Ud(n)}function Tr(){if(!Hc&&$i!==null){Hc=!0;var n=0,i=mt;try{var o=$i;for(mt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}$i=null,Fa=!1}catch(f){throw $i!==null&&($i=$i.slice(n+1)),qr(tn,Tr),f}finally{mt=i,Hc=!1}}return null}var Is=[],Ds=0,Oa=null,ka=0,li=[],ci=0,Jr=null,er=1,tr="";function $r(n,i){Is[Ds++]=ka,Is[Ds++]=Oa,Oa=n,ka=i}function Fd(n,i,o){li[ci++]=er,li[ci++]=tr,li[ci++]=Jr,Jr=n;var c=er;n=tr;var f=32-Te(c)-1;c&=~(1<<f),o+=1;var m=32-Te(i)+f;if(30<m){var A=f-f%5;m=(c&(1<<A)-1).toString(32),c>>=A,f-=A,er=1<<32-Te(i)+f|o<<f|c,tr=m+n}else er=1<<m|o<<f|c,tr=n}function Vc(n){n.return!==null&&($r(n,1),Fd(n,1,0))}function Gc(n){for(;n===Oa;)Oa=Is[--Ds],Is[Ds]=null,ka=Is[--Ds],Is[Ds]=null;for(;n===Jr;)Jr=li[--ci],li[ci]=null,tr=li[--ci],li[ci]=null,er=li[--ci],li[ci]=null}var ei=null,ti=null,Zt=!1,wi=null;function Od(n,i){var o=di(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function kd(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ei=n,ti=Er(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ei=n,ti=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Jr!==null?{id:er,overflow:tr}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=di(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,ei=n,ti=null,!0):!1;default:return!1}}function Wc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xc(n){if(Zt){var i=ti;if(i){var o=i;if(!kd(n,i)){if(Wc(n))throw Error(t(418));i=Er(o.nextSibling);var c=ei;i&&kd(n,i)?Od(c,o):(n.flags=n.flags&-4097|2,Zt=!1,ei=n)}}else{if(Wc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Zt=!1,ei=n}}}function Bd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ei=n}function Ba(n){if(n!==ei)return!1;if(!Zt)return Bd(n),Zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Fc(n.type,n.memoizedProps)),i&&(i=ti)){if(Wc(n))throw zd(),Error(t(418));for(;i;)Od(n,i),i=Er(i.nextSibling)}if(Bd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){ti=Er(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}ti=null}}else ti=ei?Er(n.stateNode.nextSibling):null;return!0}function zd(){for(var n=ti;n;)n=Er(n.nextSibling)}function Ns(){ti=ei=null,Zt=!1}function jc(n){wi===null?wi=[n]:wi.push(n)}var Nv=L.ReactCurrentBatchConfig;function ko(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(A){var k=f.refs;A===null?delete k[m]:k[m]=A},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function za(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Hd(n){var i=n._init;return i(n._payload)}function Vd(n){function i(ne,K){if(n){var le=ne.deletions;le===null?(ne.deletions=[K],ne.flags|=16):le.push(K)}}function o(ne,K){if(!n)return null;for(;K!==null;)i(ne,K),K=K.sibling;return null}function c(ne,K){for(ne=new Map;K!==null;)K.key!==null?ne.set(K.key,K):ne.set(K.index,K),K=K.sibling;return ne}function f(ne,K){return ne=Nr(ne,K),ne.index=0,ne.sibling=null,ne}function m(ne,K,le){return ne.index=le,n?(le=ne.alternate,le!==null?(le=le.index,le<K?(ne.flags|=2,K):le):(ne.flags|=2,K)):(ne.flags|=1048576,K)}function A(ne){return n&&ne.alternate===null&&(ne.flags|=2),ne}function k(ne,K,le,De){return K===null||K.tag!==6?(K=Ou(le,ne.mode,De),K.return=ne,K):(K=f(K,le),K.return=ne,K)}function W(ne,K,le,De){var tt=le.type;return tt===B?Ee(ne,K,le.props.children,De,le.key):K!==null&&(K.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===$&&Hd(tt)===K.type)?(De=f(K,le.props),De.ref=ko(ne,K,le),De.return=ne,De):(De=ul(le.type,le.key,le.props,null,ne.mode,De),De.ref=ko(ne,K,le),De.return=ne,De)}function he(ne,K,le,De){return K===null||K.tag!==4||K.stateNode.containerInfo!==le.containerInfo||K.stateNode.implementation!==le.implementation?(K=ku(le,ne.mode,De),K.return=ne,K):(K=f(K,le.children||[]),K.return=ne,K)}function Ee(ne,K,le,De,tt){return K===null||K.tag!==7?(K=as(le,ne.mode,De,tt),K.return=ne,K):(K=f(K,le),K.return=ne,K)}function we(ne,K,le){if(typeof K=="string"&&K!==""||typeof K=="number")return K=Ou(""+K,ne.mode,le),K.return=ne,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case V:return le=ul(K.type,K.key,K.props,null,ne.mode,le),le.ref=ko(ne,null,K),le.return=ne,le;case D:return K=ku(K,ne.mode,le),K.return=ne,K;case $:var De=K._init;return we(ne,De(K._payload),le)}if(U(K)||O(K))return K=as(K,ne.mode,le,null),K.return=ne,K;za(ne,K)}return null}function ye(ne,K,le,De){var tt=K!==null?K.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return tt!==null?null:k(ne,K,""+le,De);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case V:return le.key===tt?W(ne,K,le,De):null;case D:return le.key===tt?he(ne,K,le,De):null;case $:return tt=le._init,ye(ne,K,tt(le._payload),De)}if(U(le)||O(le))return tt!==null?null:Ee(ne,K,le,De,null);za(ne,le)}return null}function Ke(ne,K,le,De,tt){if(typeof De=="string"&&De!==""||typeof De=="number")return ne=ne.get(le)||null,k(K,ne,""+De,tt);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case V:return ne=ne.get(De.key===null?le:De.key)||null,W(K,ne,De,tt);case D:return ne=ne.get(De.key===null?le:De.key)||null,he(K,ne,De,tt);case $:var lt=De._init;return Ke(ne,K,le,lt(De._payload),tt)}if(U(De)||O(De))return ne=ne.get(le)||null,Ee(K,ne,De,tt,null);za(K,De)}return null}function $e(ne,K,le,De){for(var tt=null,lt=null,ct=K,pt=K=0,xn=null;ct!==null&&pt<le.length;pt++){ct.index>pt?(xn=ct,ct=null):xn=ct.sibling;var Nt=ye(ne,ct,le[pt],De);if(Nt===null){ct===null&&(ct=xn);break}n&&ct&&Nt.alternate===null&&i(ne,ct),K=m(Nt,K,pt),lt===null?tt=Nt:lt.sibling=Nt,lt=Nt,ct=xn}if(pt===le.length)return o(ne,ct),Zt&&$r(ne,pt),tt;if(ct===null){for(;pt<le.length;pt++)ct=we(ne,le[pt],De),ct!==null&&(K=m(ct,K,pt),lt===null?tt=ct:lt.sibling=ct,lt=ct);return Zt&&$r(ne,pt),tt}for(ct=c(ne,ct);pt<le.length;pt++)xn=Ke(ct,ne,pt,le[pt],De),xn!==null&&(n&&xn.alternate!==null&&ct.delete(xn.key===null?pt:xn.key),K=m(xn,K,pt),lt===null?tt=xn:lt.sibling=xn,lt=xn);return n&&ct.forEach(function(Ur){return i(ne,Ur)}),Zt&&$r(ne,pt),tt}function et(ne,K,le,De){var tt=O(le);if(typeof tt!="function")throw Error(t(150));if(le=tt.call(le),le==null)throw Error(t(151));for(var lt=tt=null,ct=K,pt=K=0,xn=null,Nt=le.next();ct!==null&&!Nt.done;pt++,Nt=le.next()){ct.index>pt?(xn=ct,ct=null):xn=ct.sibling;var Ur=ye(ne,ct,Nt.value,De);if(Ur===null){ct===null&&(ct=xn);break}n&&ct&&Ur.alternate===null&&i(ne,ct),K=m(Ur,K,pt),lt===null?tt=Ur:lt.sibling=Ur,lt=Ur,ct=xn}if(Nt.done)return o(ne,ct),Zt&&$r(ne,pt),tt;if(ct===null){for(;!Nt.done;pt++,Nt=le.next())Nt=we(ne,Nt.value,De),Nt!==null&&(K=m(Nt,K,pt),lt===null?tt=Nt:lt.sibling=Nt,lt=Nt);return Zt&&$r(ne,pt),tt}for(ct=c(ne,ct);!Nt.done;pt++,Nt=le.next())Nt=Ke(ct,ne,pt,Nt.value,De),Nt!==null&&(n&&Nt.alternate!==null&&ct.delete(Nt.key===null?pt:Nt.key),K=m(Nt,K,pt),lt===null?tt=Nt:lt.sibling=Nt,lt=Nt);return n&&ct.forEach(function(d_){return i(ne,d_)}),Zt&&$r(ne,pt),tt}function rn(ne,K,le,De){if(typeof le=="object"&&le!==null&&le.type===B&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case V:e:{for(var tt=le.key,lt=K;lt!==null;){if(lt.key===tt){if(tt=le.type,tt===B){if(lt.tag===7){o(ne,lt.sibling),K=f(lt,le.props.children),K.return=ne,ne=K;break e}}else if(lt.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===$&&Hd(tt)===lt.type){o(ne,lt.sibling),K=f(lt,le.props),K.ref=ko(ne,lt,le),K.return=ne,ne=K;break e}o(ne,lt);break}else i(ne,lt);lt=lt.sibling}le.type===B?(K=as(le.props.children,ne.mode,De,le.key),K.return=ne,ne=K):(De=ul(le.type,le.key,le.props,null,ne.mode,De),De.ref=ko(ne,K,le),De.return=ne,ne=De)}return A(ne);case D:e:{for(lt=le.key;K!==null;){if(K.key===lt)if(K.tag===4&&K.stateNode.containerInfo===le.containerInfo&&K.stateNode.implementation===le.implementation){o(ne,K.sibling),K=f(K,le.children||[]),K.return=ne,ne=K;break e}else{o(ne,K);break}else i(ne,K);K=K.sibling}K=ku(le,ne.mode,De),K.return=ne,ne=K}return A(ne);case $:return lt=le._init,rn(ne,K,lt(le._payload),De)}if(U(le))return $e(ne,K,le,De);if(O(le))return et(ne,K,le,De);za(ne,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,K!==null&&K.tag===6?(o(ne,K.sibling),K=f(K,le),K.return=ne,ne=K):(o(ne,K),K=Ou(le,ne.mode,De),K.return=ne,ne=K),A(ne)):o(ne,K)}return rn}var Us=Vd(!0),Gd=Vd(!1),Ha=Ar(null),Va=null,Fs=null,qc=null;function Kc(){qc=Fs=Va=null}function Yc(n){var i=Ha.current;Yt(Ha),n._currentValue=i}function Zc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Os(n,i){Va=n,qc=Fs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Xn=!0),n.firstContext=null)}function ui(n){var i=n._currentValue;if(qc!==n)if(n={context:n,memoizedValue:i,next:null},Fs===null){if(Va===null)throw Error(t(308));Fs=n,Va.dependencies={lanes:0,firstContext:n}}else Fs=Fs.next=n;return i}var es=null;function Qc(n){es===null?es=[n]:es.push(n)}function Wd(n,i,o,c){var f=i.interleaved;return f===null?(o.next=o,Qc(i)):(o.next=f.next,f.next=o),i.interleaved=o,nr(n,c)}function nr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Cr=!1;function Jc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xd(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ir(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Rr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(It&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,nr(n,o)}return f=c.interleaved,f===null?(i.next=i,Qc(c)):(i.next=f.next,f.next=i),c.interleaved=i,nr(n,o)}function Ga(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,yn(n,o)}}function jd(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var A={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?f=m=A:m=m.next=A,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Wa(n,i,o,c){var f=n.updateQueue;Cr=!1;var m=f.firstBaseUpdate,A=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var W=k,he=W.next;W.next=null,A===null?m=he:A.next=he,A=W;var Ee=n.alternate;Ee!==null&&(Ee=Ee.updateQueue,k=Ee.lastBaseUpdate,k!==A&&(k===null?Ee.firstBaseUpdate=he:k.next=he,Ee.lastBaseUpdate=W))}if(m!==null){var we=f.baseState;A=0,Ee=he=W=null,k=m;do{var ye=k.lane,Ke=k.eventTime;if((c&ye)===ye){Ee!==null&&(Ee=Ee.next={eventTime:Ke,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var $e=n,et=k;switch(ye=i,Ke=o,et.tag){case 1:if($e=et.payload,typeof $e=="function"){we=$e.call(Ke,we,ye);break e}we=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=et.payload,ye=typeof $e=="function"?$e.call(Ke,we,ye):$e,ye==null)break e;we=J({},we,ye);break e;case 2:Cr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,ye=f.effects,ye===null?f.effects=[k]:ye.push(k))}else Ke={eventTime:Ke,lane:ye,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Ee===null?(he=Ee=Ke,W=we):Ee=Ee.next=Ke,A|=ye;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;ye=k,k=ye.next,ye.next=null,f.lastBaseUpdate=ye,f.shared.pending=null}}while(!0);if(Ee===null&&(W=we),f.baseState=W,f.firstBaseUpdate=he,f.lastBaseUpdate=Ee,i=f.shared.interleaved,i!==null){f=i;do A|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);is|=A,n.lanes=A,n.memoizedState=we}}function qd(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Bo={},Bi=Ar(Bo),zo=Ar(Bo),Ho=Ar(Bo);function ts(n){if(n===Bo)throw Error(t(174));return n}function $c(n,i){switch(Wt(Ho,i),Wt(zo,n),Wt(Bi,Bo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:y(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=y(i,n)}Yt(Bi),Wt(Bi,i)}function ks(){Yt(Bi),Yt(zo),Yt(Ho)}function Kd(n){ts(Ho.current);var i=ts(Bi.current),o=y(i,n.type);i!==o&&(Wt(zo,n),Wt(Bi,o))}function eu(n){zo.current===n&&(Yt(Bi),Yt(zo))}var Jt=Ar(0);function Xa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var tu=[];function nu(){for(var n=0;n<tu.length;n++)tu[n]._workInProgressVersionPrimary=null;tu.length=0}var ja=L.ReactCurrentDispatcher,iu=L.ReactCurrentBatchConfig,ns=0,$t=null,fn=null,vn=null,qa=!1,Vo=!1,Go=0,Uv=0;function Rn(){throw Error(t(321))}function ru(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Ai(n[o],i[o]))return!1;return!0}function su(n,i,o,c,f,m){if(ns=m,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ja.current=n===null||n.memoizedState===null?Bv:zv,n=o(c,f),Vo){m=0;do{if(Vo=!1,Go=0,25<=m)throw Error(t(301));m+=1,vn=fn=null,i.updateQueue=null,ja.current=Hv,n=o(c,f)}while(Vo)}if(ja.current=Za,i=fn!==null&&fn.next!==null,ns=0,vn=fn=$t=null,qa=!1,i)throw Error(t(300));return n}function ou(){var n=Go!==0;return Go=0,n}function zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?$t.memoizedState=vn=n:vn=vn.next=n,vn}function fi(){if(fn===null){var n=$t.alternate;n=n!==null?n.memoizedState:null}else n=fn.next;var i=vn===null?$t.memoizedState:vn.next;if(i!==null)vn=i,fn=n;else{if(n===null)throw Error(t(310));fn=n,n={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},vn===null?$t.memoizedState=vn=n:vn=vn.next=n}return vn}function Wo(n,i){return typeof i=="function"?i(n):i}function au(n){var i=fi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=fn,f=c.baseQueue,m=o.pending;if(m!==null){if(f!==null){var A=f.next;f.next=m.next,m.next=A}c.baseQueue=f=m,o.pending=null}if(f!==null){m=f.next,c=c.baseState;var k=A=null,W=null,he=m;do{var Ee=he.lane;if((ns&Ee)===Ee)W!==null&&(W=W.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),c=he.hasEagerState?he.eagerState:n(c,he.action);else{var we={lane:Ee,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};W===null?(k=W=we,A=c):W=W.next=we,$t.lanes|=Ee,is|=Ee}he=he.next}while(he!==null&&he!==m);W===null?A=c:W.next=k,Ai(c,i.memoizedState)||(Xn=!0),i.memoizedState=c,i.baseState=A,i.baseQueue=W,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do m=f.lane,$t.lanes|=m,is|=m,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function lu(n){var i=fi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var A=f=f.next;do m=n(m,A.action),A=A.next;while(A!==f);Ai(m,i.memoizedState)||(Xn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function Yd(){}function Zd(n,i){var o=$t,c=fi(),f=i(),m=!Ai(c.memoizedState,f);if(m&&(c.memoizedState=f,Xn=!0),c=c.queue,cu($d.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||vn!==null&&vn.memoizedState.tag&1){if(o.flags|=2048,Xo(9,Jd.bind(null,o,c,f,i),void 0,null),_n===null)throw Error(t(349));(ns&30)!==0||Qd(o,i,f)}return f}function Qd(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Jd(n,i,o,c){i.value=o,i.getSnapshot=c,ep(i)&&tp(n)}function $d(n,i,o){return o(function(){ep(i)&&tp(n)})}function ep(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Ai(n,o)}catch{return!0}}function tp(n){var i=nr(n,1);i!==null&&bi(i,n,1,-1)}function np(n){var i=zi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:n},i.queue=n,n=n.dispatch=kv.bind(null,$t,n),[i.memoizedState,n]}function Xo(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function ip(){return fi().memoizedState}function Ka(n,i,o,c){var f=zi();$t.flags|=n,f.memoizedState=Xo(1|i,o,void 0,c===void 0?null:c)}function Ya(n,i,o,c){var f=fi();c=c===void 0?null:c;var m=void 0;if(fn!==null){var A=fn.memoizedState;if(m=A.destroy,c!==null&&ru(c,A.deps)){f.memoizedState=Xo(i,o,m,c);return}}$t.flags|=n,f.memoizedState=Xo(1|i,o,m,c)}function rp(n,i){return Ka(8390656,8,n,i)}function cu(n,i){return Ya(2048,8,n,i)}function sp(n,i){return Ya(4,2,n,i)}function op(n,i){return Ya(4,4,n,i)}function ap(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function lp(n,i,o){return o=o!=null?o.concat([n]):null,Ya(4,4,ap.bind(null,i,n),o)}function uu(){}function cp(n,i){var o=fi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&ru(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function up(n,i){var o=fi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&ru(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function fp(n,i,o){return(ns&21)===0?(n.baseState&&(n.baseState=!1,Xn=!0),n.memoizedState=o):(Ai(o,i)||(o=je(),$t.lanes|=o,is|=o,n.baseState=!0),i)}function Fv(n,i){var o=mt;mt=o!==0&&4>o?o:4,n(!0);var c=iu.transition;iu.transition={};try{n(!1),i()}finally{mt=o,iu.transition=c}}function hp(){return fi().memoizedState}function Ov(n,i,o){var c=Ir(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},dp(n))pp(i,o);else if(o=Wd(n,i,o,c),o!==null){var f=Bn();bi(o,n,c,f),mp(o,i,c)}}function kv(n,i,o){var c=Ir(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(dp(n))pp(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var A=i.lastRenderedState,k=m(A,o);if(f.hasEagerState=!0,f.eagerState=k,Ai(k,A)){var W=i.interleaved;W===null?(f.next=f,Qc(i)):(f.next=W.next,W.next=f),i.interleaved=f;return}}catch{}finally{}o=Wd(n,i,f,c),o!==null&&(f=Bn(),bi(o,n,c,f),mp(o,i,c))}}function dp(n){var i=n.alternate;return n===$t||i!==null&&i===$t}function pp(n,i){Vo=qa=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function mp(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,yn(n,o)}}var Za={readContext:ui,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},Bv={readContext:ui,useCallback:function(n,i){return zi().memoizedState=[n,i===void 0?null:i],n},useContext:ui,useEffect:rp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ka(4194308,4,ap.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ka(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ka(4,2,n,i)},useMemo:function(n,i){var o=zi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=zi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Ov.bind(null,$t,n),[c.memoizedState,n]},useRef:function(n){var i=zi();return n={current:n},i.memoizedState=n},useState:np,useDebugValue:uu,useDeferredValue:function(n){return zi().memoizedState=n},useTransition:function(){var n=np(!1),i=n[0];return n=Fv.bind(null,n[1]),zi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=$t,f=zi();if(Zt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),_n===null)throw Error(t(349));(ns&30)!==0||Qd(c,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,rp($d.bind(null,c,m,n),[n]),c.flags|=2048,Xo(9,Jd.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=zi(),i=_n.identifierPrefix;if(Zt){var o=tr,c=er;o=(c&~(1<<32-Te(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Go++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Uv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},zv={readContext:ui,useCallback:cp,useContext:ui,useEffect:cu,useImperativeHandle:lp,useInsertionEffect:sp,useLayoutEffect:op,useMemo:up,useReducer:au,useRef:ip,useState:function(){return au(Wo)},useDebugValue:uu,useDeferredValue:function(n){var i=fi();return fp(i,fn.memoizedState,n)},useTransition:function(){var n=au(Wo)[0],i=fi().memoizedState;return[n,i]},useMutableSource:Yd,useSyncExternalStore:Zd,useId:hp,unstable_isNewReconciler:!1},Hv={readContext:ui,useCallback:cp,useContext:ui,useEffect:cu,useImperativeHandle:lp,useInsertionEffect:sp,useLayoutEffect:op,useMemo:up,useReducer:lu,useRef:ip,useState:function(){return lu(Wo)},useDebugValue:uu,useDeferredValue:function(n){var i=fi();return fn===null?i.memoizedState=n:fp(i,fn.memoizedState,n)},useTransition:function(){var n=lu(Wo)[0],i=fi().memoizedState;return[n,i]},useMutableSource:Yd,useSyncExternalStore:Zd,useId:hp,unstable_isNewReconciler:!1};function Ti(n,i){if(n&&n.defaultProps){i=J({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function fu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:J({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Qa={isMounted:function(n){return(n=n._reactInternals)?ln(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Bn(),f=Ir(n),m=ir(c,f);m.payload=i,o!=null&&(m.callback=o),i=Rr(n,m,f),i!==null&&(bi(i,n,f,c),Ga(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Bn(),f=Ir(n),m=ir(c,f);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=Rr(n,m,f),i!==null&&(bi(i,n,f,c),Ga(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Bn(),c=Ir(n),f=ir(o,c);f.tag=2,i!=null&&(f.callback=i),i=Rr(n,f,c),i!==null&&(bi(i,n,c,o),Ga(i,n,c))}};function gp(n,i,o,c,f,m,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,A):i.prototype&&i.prototype.isPureReactComponent?!Lo(o,c)||!Lo(f,m):!0}function vp(n,i,o){var c=!1,f=wr,m=i.contextType;return typeof m=="object"&&m!==null?m=ui(m):(f=Wn(i)?Qr:Cn.current,c=i.contextTypes,m=(c=c!=null)?Ls(n,f):wr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qa,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function _p(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Qa.enqueueReplaceState(i,i.state,null)}function hu(n,i,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Jc(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=ui(m):(m=Wn(i)?Qr:Cn.current,f.context=Ls(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(fu(n,i,m,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Qa.enqueueReplaceState(f,f.state,null),Wa(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Bs(n,i){try{var o="",c=i;do o+=pe(c),c=c.return;while(c);var f=o}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function du(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function pu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Vv=typeof WeakMap=="function"?WeakMap:Map;function xp(n,i,o){o=ir(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){rl||(rl=!0,bu=c),pu(n,i)},o}function Sp(n,i,o){o=ir(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){pu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){pu(n,i),typeof c!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),o}function Mp(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new Vv;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),n=n_.bind(null,n,i,o),i.then(n,n))}function yp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Ep(n,i,o,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=ir(-1,1),i.tag=2,Rr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var Gv=L.ReactCurrentOwner,Xn=!1;function kn(n,i,o,c){i.child=n===null?Gd(i,null,o,c):Us(i,n.child,o,c)}function Ap(n,i,o,c,f){o=o.render;var m=i.ref;return Os(i,f),c=su(n,i,o,c,m,f),o=ou(),n!==null&&!Xn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,rr(n,i,f)):(Zt&&o&&Vc(i),i.flags|=1,kn(n,i,c,f),i.child)}function wp(n,i,o,c,f){if(n===null){var m=o.type;return typeof m=="function"&&!Fu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Tp(n,i,m,c,f)):(n=ul(o.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var A=m.memoizedProps;if(o=o.compare,o=o!==null?o:Lo,o(A,c)&&n.ref===i.ref)return rr(n,i,f)}return i.flags|=1,n=Nr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Tp(n,i,o,c,f){if(n!==null){var m=n.memoizedProps;if(Lo(m,c)&&n.ref===i.ref)if(Xn=!1,i.pendingProps=c=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Xn=!0);else return i.lanes=n.lanes,rr(n,i,f)}return mu(n,i,o,c,f)}function Cp(n,i,o){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Wt(Hs,ni),ni|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Wt(Hs,ni),ni|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,Wt(Hs,ni),ni|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,Wt(Hs,ni),ni|=c;return kn(n,i,f,o),i.child}function Rp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function mu(n,i,o,c,f){var m=Wn(o)?Qr:Cn.current;return m=Ls(i,m),Os(i,f),o=su(n,i,o,c,m,f),c=ou(),n!==null&&!Xn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,rr(n,i,f)):(Zt&&c&&Vc(i),i.flags|=1,kn(n,i,o,f),i.child)}function bp(n,i,o,c,f){if(Wn(o)){var m=!0;Ua(i)}else m=!1;if(Os(i,f),i.stateNode===null)$a(n,i),vp(i,o,c),hu(i,o,c,f),c=!0;else if(n===null){var A=i.stateNode,k=i.memoizedProps;A.props=k;var W=A.context,he=o.contextType;typeof he=="object"&&he!==null?he=ui(he):(he=Wn(o)?Qr:Cn.current,he=Ls(i,he));var Ee=o.getDerivedStateFromProps,we=typeof Ee=="function"||typeof A.getSnapshotBeforeUpdate=="function";we||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==c||W!==he)&&_p(i,A,c,he),Cr=!1;var ye=i.memoizedState;A.state=ye,Wa(i,c,A,f),W=i.memoizedState,k!==c||ye!==W||Gn.current||Cr?(typeof Ee=="function"&&(fu(i,o,Ee,c),W=i.memoizedState),(k=Cr||gp(i,o,k,c,ye,W,he))?(we||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=W),A.props=c,A.state=W,A.context=he,c=k):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{A=i.stateNode,Xd(n,i),k=i.memoizedProps,he=i.type===i.elementType?k:Ti(i.type,k),A.props=he,we=i.pendingProps,ye=A.context,W=o.contextType,typeof W=="object"&&W!==null?W=ui(W):(W=Wn(o)?Qr:Cn.current,W=Ls(i,W));var Ke=o.getDerivedStateFromProps;(Ee=typeof Ke=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==we||ye!==W)&&_p(i,A,c,W),Cr=!1,ye=i.memoizedState,A.state=ye,Wa(i,c,A,f);var $e=i.memoizedState;k!==we||ye!==$e||Gn.current||Cr?(typeof Ke=="function"&&(fu(i,o,Ke,c),$e=i.memoizedState),(he=Cr||gp(i,o,he,c,ye,$e,W)||!1)?(Ee||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,$e,W),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,$e,W)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||k===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=$e),A.props=c,A.state=$e,A.context=W,c=he):(typeof A.componentDidUpdate!="function"||k===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),c=!1)}return gu(n,i,o,c,m,f)}function gu(n,i,o,c,f,m){Rp(n,i);var A=(i.flags&128)!==0;if(!c&&!A)return f&&Nd(i,o,!1),rr(n,i,m);c=i.stateNode,Gv.current=i;var k=A&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&A?(i.child=Us(i,n.child,null,m),i.child=Us(i,null,k,m)):kn(n,i,k,m),i.memoizedState=c.state,f&&Nd(i,o,!0),i.child}function Pp(n){var i=n.stateNode;i.pendingContext?Id(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Id(n,i.context,!1),$c(n,i.containerInfo)}function Lp(n,i,o,c,f){return Ns(),jc(f),i.flags|=256,kn(n,i,o,c),i.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function _u(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ip(n,i,o){var c=i.pendingProps,f=Jt.current,m=!1,A=(i.flags&128)!==0,k;if((k=A)||(k=n!==null&&n.memoizedState===null?!1:(f&2)!==0),k?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Wt(Jt,f&1),n===null)return Xc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=c.children,n=c.fallback,m?(c=i.mode,m=i.child,A={mode:"hidden",children:A},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=A):m=fl(A,c,0,null),n=as(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=_u(o),i.memoizedState=vu,n):xu(i,A));if(f=n.memoizedState,f!==null&&(k=f.dehydrated,k!==null))return Wv(n,i,A,c,k,f,o);if(m){m=c.fallback,A=i.mode,f=n.child,k=f.sibling;var W={mode:"hidden",children:c.children};return(A&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=W,i.deletions=null):(c=Nr(f,W),c.subtreeFlags=f.subtreeFlags&14680064),k!==null?m=Nr(k,m):(m=as(m,A,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,A=n.child.memoizedState,A=A===null?_u(o):{baseLanes:A.baseLanes|o,cachePool:null,transitions:A.transitions},m.memoizedState=A,m.childLanes=n.childLanes&~o,i.memoizedState=vu,c}return m=n.child,n=m.sibling,c=Nr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function xu(n,i){return i=fl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ja(n,i,o,c){return c!==null&&jc(c),Us(i,n.child,null,o),n=xu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Wv(n,i,o,c,f,m,A){if(o)return i.flags&256?(i.flags&=-257,c=du(Error(t(422))),Ja(n,i,A,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=fl({mode:"visible",children:c.children},f,0,null),m=as(m,f,A,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Us(i,n.child,null,A),i.child.memoizedState=_u(A),i.memoizedState=vu,m);if((i.mode&1)===0)return Ja(n,i,A,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var k=c.dgst;return c=k,m=Error(t(419)),c=du(m,c,void 0),Ja(n,i,A,c)}if(k=(A&n.childLanes)!==0,Xn||k){if(c=_n,c!==null){switch(A&-A){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|A))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,nr(n,f),bi(c,n,f,-1))}return Uu(),c=du(Error(t(421))),Ja(n,i,A,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=i_.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,ti=Er(f.nextSibling),ei=i,Zt=!0,wi=null,n!==null&&(li[ci++]=er,li[ci++]=tr,li[ci++]=Jr,er=n.id,tr=n.overflow,Jr=i),i=xu(i,c.children),i.flags|=4096,i)}function Dp(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Zc(n.return,i,o)}function Su(n,i,o,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=f)}function Np(n,i,o){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(kn(n,i,c.children,o),c=Jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dp(n,o,i);else if(n.tag===19)Dp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Wt(Jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&Xa(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Su(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Xa(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Su(i,!0,o,null,m);break;case"together":Su(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $a(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function rr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),is|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Nr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Nr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Xv(n,i,o){switch(i.tag){case 3:Pp(i),Ns();break;case 5:Kd(i);break;case 1:Wn(i.type)&&Ua(i);break;case 4:$c(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Wt(Ha,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Wt(Jt,Jt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Ip(n,i,o):(Wt(Jt,Jt.current&1),n=rr(n,i,o),n!==null?n.sibling:null);Wt(Jt,Jt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Np(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Wt(Jt,Jt.current),c)break;return null;case 22:case 23:return i.lanes=0,Cp(n,i,o)}return rr(n,i,o)}var Up,Mu,Fp,Op;Up=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Mu=function(){},Fp=function(n,i,o,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,ts(Bi.current);var m=null;switch(o){case"input":f=it(n,f),c=it(n,c),m=[];break;case"select":f=J({},f,{value:void 0}),c=J({},c,{value:void 0}),m=[];break;case"textarea":f=nt(n,f),c=nt(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ia)}Ge(o,c);var A;o=null;for(he in f)if(!c.hasOwnProperty(he)&&f.hasOwnProperty(he)&&f[he]!=null)if(he==="style"){var k=f[he];for(A in k)k.hasOwnProperty(A)&&(o||(o={}),o[A]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(a.hasOwnProperty(he)?m||(m=[]):(m=m||[]).push(he,null));for(he in c){var W=c[he];if(k=f!=null?f[he]:void 0,c.hasOwnProperty(he)&&W!==k&&(W!=null||k!=null))if(he==="style")if(k){for(A in k)!k.hasOwnProperty(A)||W&&W.hasOwnProperty(A)||(o||(o={}),o[A]="");for(A in W)W.hasOwnProperty(A)&&k[A]!==W[A]&&(o||(o={}),o[A]=W[A])}else o||(m||(m=[]),m.push(he,o)),o=W;else he==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,k=k?k.__html:void 0,W!=null&&k!==W&&(m=m||[]).push(he,W)):he==="children"?typeof W!="string"&&typeof W!="number"||(m=m||[]).push(he,""+W):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(a.hasOwnProperty(he)?(W!=null&&he==="onScroll"&&Kt("scroll",n),m||k===W||(m=[])):(m=m||[]).push(he,W))}o&&(m=m||[]).push("style",o);var he=m;(i.updateQueue=he)&&(i.flags|=4)}},Op=function(n,i,o,c){o!==c&&(i.flags|=4)};function jo(n,i){if(!Zt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function bn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function jv(n,i,o){var c=i.pendingProps;switch(Gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(i),null;case 1:return Wn(i.type)&&Na(),bn(i),null;case 3:return c=i.stateNode,ks(),Yt(Gn),Yt(Cn),nu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ba(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,wi!==null&&(Iu(wi),wi=null))),Mu(n,i),bn(i),null;case 5:eu(i);var f=ts(Ho.current);if(o=i.type,n!==null&&i.stateNode!=null)Fp(n,i,o,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return bn(i),null}if(n=ts(Bi.current),Ba(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[ki]=i,c[Fo]=m,n=(i.mode&1)!==0,o){case"dialog":Kt("cancel",c),Kt("close",c);break;case"iframe":case"object":case"embed":Kt("load",c);break;case"video":case"audio":for(f=0;f<Do.length;f++)Kt(Do[f],c);break;case"source":Kt("error",c);break;case"img":case"image":case"link":Kt("error",c),Kt("load",c);break;case"details":Kt("toggle",c);break;case"input":rt(c,m),Kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Kt("invalid",c);break;case"textarea":Rt(c,m),Kt("invalid",c)}Ge(o,m),f=null;for(var A in m)if(m.hasOwnProperty(A)){var k=m[A];A==="children"?typeof k=="string"?c.textContent!==k&&(m.suppressHydrationWarning!==!0&&La(c.textContent,k,n),f=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(m.suppressHydrationWarning!==!0&&La(c.textContent,k,n),f=["children",""+k]):a.hasOwnProperty(A)&&k!=null&&A==="onScroll"&&Kt("scroll",c)}switch(o){case"input":Oe(c),Et(c,m,!0);break;case"textarea":Oe(c),Lt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Ia)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{A=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=P(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(o,{is:c.is}):(n=A.createElement(o),o==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,o),n[ki]=i,n[Fo]=c,Up(n,i,!1,!1),i.stateNode=n;e:{switch(A=Ie(o,c),o){case"dialog":Kt("cancel",n),Kt("close",n),f=c;break;case"iframe":case"object":case"embed":Kt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Do.length;f++)Kt(Do[f],n);f=c;break;case"source":Kt("error",n),f=c;break;case"img":case"image":case"link":Kt("error",n),Kt("load",n),f=c;break;case"details":Kt("toggle",n),f=c;break;case"input":rt(n,c),f=it(n,c),Kt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=J({},c,{value:void 0}),Kt("invalid",n);break;case"textarea":Rt(n,c),f=nt(n,c),Kt("invalid",n);break;default:f=c}Ge(o,f),k=f;for(m in k)if(k.hasOwnProperty(m)){var W=k[m];m==="style"?me(n,W):m==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&ve(n,W)):m==="children"?typeof W=="string"?(o!=="textarea"||W!=="")&&Se(n,W):typeof W=="number"&&Se(n,""+W):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?W!=null&&m==="onScroll"&&Kt("scroll",n):W!=null&&I(n,m,W,A))}switch(o){case"input":Oe(n),Et(n,c,!1);break;case"textarea":Oe(n),Lt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+fe(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?gt(n,!!c.multiple,m,!1):c.defaultValue!=null&&gt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Ia)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return bn(i),null;case 6:if(n&&i.stateNode!=null)Op(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=ts(Ho.current),ts(Bi.current),Ba(i)){if(c=i.stateNode,o=i.memoizedProps,c[ki]=i,(m=c.nodeValue!==o)&&(n=ei,n!==null))switch(n.tag){case 3:La(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&La(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[ki]=i,i.stateNode=c}return bn(i),null;case 13:if(Yt(Jt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Zt&&ti!==null&&(i.mode&1)!==0&&(i.flags&128)===0)zd(),Ns(),i.flags|=98560,m=!1;else if(m=Ba(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[ki]=i}else Ns(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bn(i),m=!1}else wi!==null&&(Iu(wi),wi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Jt.current&1)!==0?hn===0&&(hn=3):Uu())),i.updateQueue!==null&&(i.flags|=4),bn(i),null);case 4:return ks(),Mu(n,i),n===null&&No(i.stateNode.containerInfo),bn(i),null;case 10:return Yc(i.type._context),bn(i),null;case 17:return Wn(i.type)&&Na(),bn(i),null;case 19:if(Yt(Jt),m=i.memoizedState,m===null)return bn(i),null;if(c=(i.flags&128)!==0,A=m.rendering,A===null)if(c)jo(m,!1);else{if(hn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(A=Xa(n),A!==null){for(i.flags|=128,jo(m,!1),c=A.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,A=m.alternate,A===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=A.childLanes,m.lanes=A.lanes,m.child=A.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=A.memoizedProps,m.memoizedState=A.memoizedState,m.updateQueue=A.updateQueue,m.type=A.type,n=A.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Wt(Jt,Jt.current&1|2),i.child}n=n.sibling}m.tail!==null&&jt()>Vs&&(i.flags|=128,c=!0,jo(m,!1),i.lanes=4194304)}else{if(!c)if(n=Xa(A),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),jo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!A.alternate&&!Zt)return bn(i),null}else 2*jt()-m.renderingStartTime>Vs&&o!==1073741824&&(i.flags|=128,c=!0,jo(m,!1),i.lanes=4194304);m.isBackwards?(A.sibling=i.child,i.child=A):(o=m.last,o!==null?o.sibling=A:i.child=A,m.last=A)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=jt(),i.sibling=null,o=Jt.current,Wt(Jt,c?o&1|2:o&1),i):(bn(i),null);case 22:case 23:return Nu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ni&1073741824)!==0&&(bn(i),i.subtreeFlags&6&&(i.flags|=8192)):bn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function qv(n,i){switch(Gc(i),i.tag){case 1:return Wn(i.type)&&Na(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ks(),Yt(Gn),Yt(Cn),nu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return eu(i),null;case 13:if(Yt(Jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ns()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Yt(Jt),null;case 4:return ks(),null;case 10:return Yc(i.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var el=!1,Pn=!1,Kv=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function zs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){en(n,i,c)}else o.current=null}function yu(n,i,o){try{o()}catch(c){en(n,i,c)}}var kp=!1;function Yv(n,i){if(Nc=Sa,n=gd(),Tc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var A=0,k=-1,W=-1,he=0,Ee=0,we=n,ye=null;t:for(;;){for(var Ke;we!==o||f!==0&&we.nodeType!==3||(k=A+f),we!==m||c!==0&&we.nodeType!==3||(W=A+c),we.nodeType===3&&(A+=we.nodeValue.length),(Ke=we.firstChild)!==null;)ye=we,we=Ke;for(;;){if(we===n)break t;if(ye===o&&++he===f&&(k=A),ye===m&&++Ee===c&&(W=A),(Ke=we.nextSibling)!==null)break;we=ye,ye=we.parentNode}we=Ke}o=k===-1||W===-1?null:{start:k,end:W}}else o=null}o=o||{start:0,end:0}}else o=null;for(Uc={focusedElem:n,selectionRange:o},Sa=!1,Qe=i;Qe!==null;)if(i=Qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Qe=n;else for(;Qe!==null;){i=Qe;try{var $e=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var et=$e.memoizedProps,rn=$e.memoizedState,ne=i.stateNode,K=ne.getSnapshotBeforeUpdate(i.elementType===i.type?et:Ti(i.type,et),rn);ne.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var le=i.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(De){en(i,i.return,De)}if(n=i.sibling,n!==null){n.return=i.return,Qe=n;break}Qe=i.return}return $e=kp,kp=!1,$e}function qo(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&yu(i,o,m)}f=f.next}while(f!==c)}}function tl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function Eu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Bp(n){var i=n.alternate;i!==null&&(n.alternate=null,Bp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[ki],delete i[Fo],delete i[Bc],delete i[Lv],delete i[Iv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function zp(n){return n.tag===5||n.tag===3||n.tag===4}function Hp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||zp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Au(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ia));else if(c!==4&&(n=n.child,n!==null))for(Au(n,i,o),n=n.sibling;n!==null;)Au(n,i,o),n=n.sibling}function wu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(wu(n,i,o),n=n.sibling;n!==null;)wu(n,i,o),n=n.sibling}var En=null,Ci=!1;function br(n,i,o){for(o=o.child;o!==null;)Vp(n,i,o),o=o.sibling}function Vp(n,i,o){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(re,o)}catch{}switch(o.tag){case 5:Pn||zs(o,i);case 6:var c=En,f=Ci;En=null,br(n,i,o),En=c,Ci=f,En!==null&&(Ci?(n=En,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):En.removeChild(o.stateNode));break;case 18:En!==null&&(Ci?(n=En,o=o.stateNode,n.nodeType===8?kc(n.parentNode,o):n.nodeType===1&&kc(n,o),wo(n)):kc(En,o.stateNode));break;case 4:c=En,f=Ci,En=o.stateNode.containerInfo,Ci=!0,br(n,i,o),En=c,Ci=f;break;case 0:case 11:case 14:case 15:if(!Pn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,A=m.destroy;m=m.tag,A!==void 0&&((m&2)!==0||(m&4)!==0)&&yu(o,i,A),f=f.next}while(f!==c)}br(n,i,o);break;case 1:if(!Pn&&(zs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(k){en(o,i,k)}br(n,i,o);break;case 21:br(n,i,o);break;case 22:o.mode&1?(Pn=(c=Pn)||o.memoizedState!==null,br(n,i,o),Pn=c):br(n,i,o);break;default:br(n,i,o)}}function Gp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Kv),i.forEach(function(c){var f=r_.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function Ri(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var m=n,A=i,k=A;e:for(;k!==null;){switch(k.tag){case 5:En=k.stateNode,Ci=!1;break e;case 3:En=k.stateNode.containerInfo,Ci=!0;break e;case 4:En=k.stateNode.containerInfo,Ci=!0;break e}k=k.return}if(En===null)throw Error(t(160));Vp(m,A,f),En=null,Ci=!1;var W=f.alternate;W!==null&&(W.return=null),f.return=null}catch(he){en(f,i,he)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Wp(i,n),i=i.sibling}function Wp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ri(i,n),Hi(n),c&4){try{qo(3,n,n.return),tl(3,n)}catch(et){en(n,n.return,et)}try{qo(5,n,n.return)}catch(et){en(n,n.return,et)}}break;case 1:Ri(i,n),Hi(n),c&512&&o!==null&&zs(o,o.return);break;case 5:if(Ri(i,n),Hi(n),c&512&&o!==null&&zs(o,o.return),n.flags&32){var f=n.stateNode;try{Se(f,"")}catch(et){en(n,n.return,et)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,A=o!==null?o.memoizedProps:m,k=n.type,W=n.updateQueue;if(n.updateQueue=null,W!==null)try{k==="input"&&m.type==="radio"&&m.name!=null&&st(f,m),Ie(k,A);var he=Ie(k,m);for(A=0;A<W.length;A+=2){var Ee=W[A],we=W[A+1];Ee==="style"?me(f,we):Ee==="dangerouslySetInnerHTML"?ve(f,we):Ee==="children"?Se(f,we):I(f,Ee,we,he)}switch(k){case"input":At(f,m);break;case"textarea":Fe(f,m);break;case"select":var ye=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Ke=m.value;Ke!=null?gt(f,!!m.multiple,Ke,!1):ye!==!!m.multiple&&(m.defaultValue!=null?gt(f,!!m.multiple,m.defaultValue,!0):gt(f,!!m.multiple,m.multiple?[]:"",!1))}f[Fo]=m}catch(et){en(n,n.return,et)}}break;case 6:if(Ri(i,n),Hi(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(et){en(n,n.return,et)}}break;case 3:if(Ri(i,n),Hi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{wo(i.containerInfo)}catch(et){en(n,n.return,et)}break;case 4:Ri(i,n),Hi(n);break;case 13:Ri(i,n),Hi(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Ru=jt())),c&4&&Gp(n);break;case 22:if(Ee=o!==null&&o.memoizedState!==null,n.mode&1?(Pn=(he=Pn)||Ee,Ri(i,n),Pn=he):Ri(i,n),Hi(n),c&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!Ee&&(n.mode&1)!==0)for(Qe=n,Ee=n.child;Ee!==null;){for(we=Qe=Ee;Qe!==null;){switch(ye=Qe,Ke=ye.child,ye.tag){case 0:case 11:case 14:case 15:qo(4,ye,ye.return);break;case 1:zs(ye,ye.return);var $e=ye.stateNode;if(typeof $e.componentWillUnmount=="function"){c=ye,o=ye.return;try{i=c,$e.props=i.memoizedProps,$e.state=i.memoizedState,$e.componentWillUnmount()}catch(et){en(c,o,et)}}break;case 5:zs(ye,ye.return);break;case 22:if(ye.memoizedState!==null){qp(we);continue}}Ke!==null?(Ke.return=ye,Qe=Ke):qp(we)}Ee=Ee.sibling}e:for(Ee=null,we=n;;){if(we.tag===5){if(Ee===null){Ee=we;try{f=we.stateNode,he?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(k=we.stateNode,W=we.memoizedProps.style,A=W!=null&&W.hasOwnProperty("display")?W.display:null,k.style.display=de("display",A))}catch(et){en(n,n.return,et)}}}else if(we.tag===6){if(Ee===null)try{we.stateNode.nodeValue=he?"":we.memoizedProps}catch(et){en(n,n.return,et)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===n)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===n)break e;for(;we.sibling===null;){if(we.return===null||we.return===n)break e;Ee===we&&(Ee=null),we=we.return}Ee===we&&(Ee=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:Ri(i,n),Hi(n),c&4&&Gp(n);break;case 21:break;default:Ri(i,n),Hi(n)}}function Hi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(zp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Se(f,""),c.flags&=-33);var m=Hp(n);wu(n,m,f);break;case 3:case 4:var A=c.stateNode.containerInfo,k=Hp(n);Au(n,k,A);break;default:throw Error(t(161))}}catch(W){en(n,n.return,W)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Zv(n,i,o){Qe=n,Xp(n)}function Xp(n,i,o){for(var c=(n.mode&1)!==0;Qe!==null;){var f=Qe,m=f.child;if(f.tag===22&&c){var A=f.memoizedState!==null||el;if(!A){var k=f.alternate,W=k!==null&&k.memoizedState!==null||Pn;k=el;var he=Pn;if(el=A,(Pn=W)&&!he)for(Qe=f;Qe!==null;)A=Qe,W=A.child,A.tag===22&&A.memoizedState!==null?Kp(f):W!==null?(W.return=A,Qe=W):Kp(f);for(;m!==null;)Qe=m,Xp(m),m=m.sibling;Qe=f,el=k,Pn=he}jp(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Qe=m):jp(n)}}function jp(n){for(;Qe!==null;){var i=Qe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Pn||tl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Pn)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Ti(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&qd(i,m,c);break;case 3:var A=i.updateQueue;if(A!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}qd(i,A,o)}break;case 5:var k=i.stateNode;if(o===null&&i.flags&4){o=k;var W=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&o.focus();break;case"img":W.src&&(o.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var he=i.alternate;if(he!==null){var Ee=he.memoizedState;if(Ee!==null){var we=Ee.dehydrated;we!==null&&wo(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||i.flags&512&&Eu(i)}catch(ye){en(i,i.return,ye)}}if(i===n){Qe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Qe=o;break}Qe=i.return}}function qp(n){for(;Qe!==null;){var i=Qe;if(i===n){Qe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Qe=o;break}Qe=i.return}}function Kp(n){for(;Qe!==null;){var i=Qe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{tl(4,i)}catch(W){en(i,o,W)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(W){en(i,f,W)}}var m=i.return;try{Eu(i)}catch(W){en(i,m,W)}break;case 5:var A=i.return;try{Eu(i)}catch(W){en(i,A,W)}}}catch(W){en(i,i.return,W)}if(i===n){Qe=null;break}var k=i.sibling;if(k!==null){k.return=i.return,Qe=k;break}Qe=i.return}}var Qv=Math.ceil,nl=L.ReactCurrentDispatcher,Tu=L.ReactCurrentOwner,hi=L.ReactCurrentBatchConfig,It=0,_n=null,cn=null,An=0,ni=0,Hs=Ar(0),hn=0,Ko=null,is=0,il=0,Cu=0,Yo=null,jn=null,Ru=0,Vs=1/0,sr=null,rl=!1,bu=null,Pr=null,sl=!1,Lr=null,ol=0,Zo=0,Pu=null,al=-1,ll=0;function Bn(){return(It&6)!==0?jt():al!==-1?al:al=jt()}function Ir(n){return(n.mode&1)===0?1:(It&2)!==0&&An!==0?An&-An:Nv.transition!==null?(ll===0&&(ll=je()),ll):(n=mt,n!==0||(n=window.event,n=n===void 0?16:Zh(n.type)),n)}function bi(n,i,o,c){if(50<Zo)throw Zo=0,Pu=null,Error(t(185));xt(n,o,c),((It&2)===0||n!==_n)&&(n===_n&&((It&2)===0&&(il|=o),hn===4&&Dr(n,An)),qn(n,c),o===1&&It===0&&(i.mode&1)===0&&(Vs=jt()+500,Fa&&Tr()))}function qn(n,i){var o=n.callbackNode;Ot(n,i);var c=Ft(n,n===_n?An:0);if(c===0)o!==null&&Kr(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&Kr(o),i===1)n.tag===0?Dv(Zp.bind(null,n)):Ud(Zp.bind(null,n)),bv(function(){(It&6)===0&&Tr()}),o=null;else{switch(Jn(c)){case 1:o=tn;break;case 4:o=T;break;case 16:o=Z;break;case 536870912:o=se;break;default:o=Z}o=rm(o,Yp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Yp(n,i){if(al=-1,ll=0,(It&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Gs()&&n.callbackNode!==o)return null;var c=Ft(n,n===_n?An:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=cl(n,c);else{i=c;var f=It;It|=2;var m=Jp();(_n!==n||An!==i)&&(sr=null,Vs=jt()+500,ss(n,i));do try{e_();break}catch(k){Qp(n,k)}while(!0);Kc(),nl.current=m,It=f,cn!==null?i=0:(_n=null,An=0,i=hn)}if(i!==0){if(i===2&&(f=Qt(n),f!==0&&(c=f,i=Lu(n,f))),i===1)throw o=Ko,ss(n,0),Dr(n,c),qn(n,jt()),o;if(i===6)Dr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!Jv(f)&&(i=cl(n,c),i===2&&(m=Qt(n),m!==0&&(c=m,i=Lu(n,m))),i===1))throw o=Ko,ss(n,0),Dr(n,c),qn(n,jt()),o;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:os(n,jn,sr);break;case 3:if(Dr(n,c),(c&130023424)===c&&(i=Ru+500-jt(),10<i)){if(Ft(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Bn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Oc(os.bind(null,n,jn,sr),i);break}os(n,jn,sr);break;case 4:if(Dr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var A=31-Te(c);m=1<<A,A=i[A],A>f&&(f=A),c&=~m}if(c=f,c=jt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Qv(c/1960))-c,10<c){n.timeoutHandle=Oc(os.bind(null,n,jn,sr),c);break}os(n,jn,sr);break;case 5:os(n,jn,sr);break;default:throw Error(t(329))}}}return qn(n,jt()),n.callbackNode===o?Yp.bind(null,n):null}function Lu(n,i){var o=Yo;return n.current.memoizedState.isDehydrated&&(ss(n,i).flags|=256),n=cl(n,i),n!==2&&(i=jn,jn=o,i!==null&&Iu(i)),n}function Iu(n){jn===null?jn=n:jn.push.apply(jn,n)}function Jv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],m=f.getSnapshot;f=f.value;try{if(!Ai(m(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Dr(n,i){for(i&=~Cu,i&=~il,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Te(i),c=1<<o;n[o]=-1,i&=~c}}function Zp(n){if((It&6)!==0)throw Error(t(327));Gs();var i=Ft(n,0);if((i&1)===0)return qn(n,jt()),null;var o=cl(n,i);if(n.tag!==0&&o===2){var c=Qt(n);c!==0&&(i=c,o=Lu(n,c))}if(o===1)throw o=Ko,ss(n,0),Dr(n,i),qn(n,jt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,os(n,jn,sr),qn(n,jt()),null}function Du(n,i){var o=It;It|=1;try{return n(i)}finally{It=o,It===0&&(Vs=jt()+500,Fa&&Tr())}}function rs(n){Lr!==null&&Lr.tag===0&&(It&6)===0&&Gs();var i=It;It|=1;var o=hi.transition,c=mt;try{if(hi.transition=null,mt=1,n)return n()}finally{mt=c,hi.transition=o,It=i,(It&6)===0&&Tr()}}function Nu(){ni=Hs.current,Yt(Hs)}function ss(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Rv(o)),cn!==null)for(o=cn.return;o!==null;){var c=o;switch(Gc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Na();break;case 3:ks(),Yt(Gn),Yt(Cn),nu();break;case 5:eu(c);break;case 4:ks();break;case 13:Yt(Jt);break;case 19:Yt(Jt);break;case 10:Yc(c.type._context);break;case 22:case 23:Nu()}o=o.return}if(_n=n,cn=n=Nr(n.current,null),An=ni=i,hn=0,Ko=null,Cu=il=is=0,jn=Yo=null,es!==null){for(i=0;i<es.length;i++)if(o=es[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,m=o.pending;if(m!==null){var A=m.next;m.next=f,c.next=A}o.pending=c}es=null}return n}function Qp(n,i){do{var o=cn;try{if(Kc(),ja.current=Za,qa){for(var c=$t.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}qa=!1}if(ns=0,vn=fn=$t=null,Vo=!1,Go=0,Tu.current=null,o===null||o.return===null){hn=1,Ko=i,cn=null;break}e:{var m=n,A=o.return,k=o,W=i;if(i=An,k.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var he=W,Ee=k,we=Ee.tag;if((Ee.mode&1)===0&&(we===0||we===11||we===15)){var ye=Ee.alternate;ye?(Ee.updateQueue=ye.updateQueue,Ee.memoizedState=ye.memoizedState,Ee.lanes=ye.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var Ke=yp(A);if(Ke!==null){Ke.flags&=-257,Ep(Ke,A,k,m,i),Ke.mode&1&&Mp(m,he,i),i=Ke,W=he;var $e=i.updateQueue;if($e===null){var et=new Set;et.add(W),i.updateQueue=et}else $e.add(W);break e}else{if((i&1)===0){Mp(m,he,i),Uu();break e}W=Error(t(426))}}else if(Zt&&k.mode&1){var rn=yp(A);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),Ep(rn,A,k,m,i),jc(Bs(W,k));break e}}m=W=Bs(W,k),hn!==4&&(hn=2),Yo===null?Yo=[m]:Yo.push(m),m=A;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ne=xp(m,W,i);jd(m,ne);break e;case 1:k=W;var K=m.type,le=m.stateNode;if((m.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(Pr===null||!Pr.has(le)))){m.flags|=65536,i&=-i,m.lanes|=i;var De=Sp(m,k,i);jd(m,De);break e}}m=m.return}while(m!==null)}em(o)}catch(tt){i=tt,cn===o&&o!==null&&(cn=o=o.return);continue}break}while(!0)}function Jp(){var n=nl.current;return nl.current=Za,n===null?Za:n}function Uu(){(hn===0||hn===3||hn===2)&&(hn=4),_n===null||(is&268435455)===0&&(il&268435455)===0||Dr(_n,An)}function cl(n,i){var o=It;It|=2;var c=Jp();(_n!==n||An!==i)&&(sr=null,ss(n,i));do try{$v();break}catch(f){Qp(n,f)}while(!0);if(Kc(),It=o,nl.current=c,cn!==null)throw Error(t(261));return _n=null,An=0,hn}function $v(){for(;cn!==null;)$p(cn)}function e_(){for(;cn!==null&&!oi();)$p(cn)}function $p(n){var i=im(n.alternate,n,ni);n.memoizedProps=n.pendingProps,i===null?em(n):cn=i,Tu.current=null}function em(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=jv(o,i,ni),o!==null){cn=o;return}}else{if(o=qv(o,i),o!==null){o.flags&=32767,cn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{hn=6,cn=null;return}}if(i=i.sibling,i!==null){cn=i;return}cn=i=n}while(i!==null);hn===0&&(hn=5)}function os(n,i,o){var c=mt,f=hi.transition;try{hi.transition=null,mt=1,t_(n,i,o,c)}finally{hi.transition=f,mt=c}return null}function t_(n,i,o,c){do Gs();while(Lr!==null);if((It&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(gn(n,m),n===_n&&(cn=_n=null,An=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||sl||(sl=!0,rm(Z,function(){return Gs(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=hi.transition,hi.transition=null;var A=mt;mt=1;var k=It;It|=4,Tu.current=null,Yv(n,o),Wp(o,n),Mv(Uc),Sa=!!Nc,Uc=Nc=null,n.current=o,Zv(o),ai(),It=k,mt=A,hi.transition=m}else n.current=o;if(sl&&(sl=!1,Lr=n,ol=f),m=n.pendingLanes,m===0&&(Pr=null),Be(o.stateNode),qn(n,jt()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(rl)throw rl=!1,n=bu,bu=null,n;return(ol&1)!==0&&n.tag!==0&&Gs(),m=n.pendingLanes,(m&1)!==0?n===Pu?Zo++:(Zo=0,Pu=n):Zo=0,Tr(),null}function Gs(){if(Lr!==null){var n=Jn(ol),i=hi.transition,o=mt;try{if(hi.transition=null,mt=16>n?16:n,Lr===null)var c=!1;else{if(n=Lr,Lr=null,ol=0,(It&6)!==0)throw Error(t(331));var f=It;for(It|=4,Qe=n.current;Qe!==null;){var m=Qe,A=m.child;if((Qe.flags&16)!==0){var k=m.deletions;if(k!==null){for(var W=0;W<k.length;W++){var he=k[W];for(Qe=he;Qe!==null;){var Ee=Qe;switch(Ee.tag){case 0:case 11:case 15:qo(8,Ee,m)}var we=Ee.child;if(we!==null)we.return=Ee,Qe=we;else for(;Qe!==null;){Ee=Qe;var ye=Ee.sibling,Ke=Ee.return;if(Bp(Ee),Ee===he){Qe=null;break}if(ye!==null){ye.return=Ke,Qe=ye;break}Qe=Ke}}}var $e=m.alternate;if($e!==null){var et=$e.child;if(et!==null){$e.child=null;do{var rn=et.sibling;et.sibling=null,et=rn}while(et!==null)}}Qe=m}}if((m.subtreeFlags&2064)!==0&&A!==null)A.return=m,Qe=A;else e:for(;Qe!==null;){if(m=Qe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:qo(9,m,m.return)}var ne=m.sibling;if(ne!==null){ne.return=m.return,Qe=ne;break e}Qe=m.return}}var K=n.current;for(Qe=K;Qe!==null;){A=Qe;var le=A.child;if((A.subtreeFlags&2064)!==0&&le!==null)le.return=A,Qe=le;else e:for(A=K;Qe!==null;){if(k=Qe,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:tl(9,k)}}catch(tt){en(k,k.return,tt)}if(k===A){Qe=null;break e}var De=k.sibling;if(De!==null){De.return=k.return,Qe=De;break e}Qe=k.return}}if(It=f,Tr(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(re,n)}catch{}c=!0}return c}finally{mt=o,hi.transition=i}}return!1}function tm(n,i,o){i=Bs(o,i),i=xp(n,i,1),n=Rr(n,i,1),i=Bn(),n!==null&&(xt(n,1,i),qn(n,i))}function en(n,i,o){if(n.tag===3)tm(n,n,o);else for(;i!==null;){if(i.tag===3){tm(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Pr===null||!Pr.has(c))){n=Bs(o,n),n=Sp(i,n,1),i=Rr(i,n,1),n=Bn(),i!==null&&(xt(i,1,n),qn(i,n));break}}i=i.return}}function n_(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Bn(),n.pingedLanes|=n.suspendedLanes&o,_n===n&&(An&o)===o&&(hn===4||hn===3&&(An&130023424)===An&&500>jt()-Ru?ss(n,0):Cu|=o),qn(n,i)}function nm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Je,Je<<=1,(Je&130023424)===0&&(Je=4194304)));var o=Bn();n=nr(n,i),n!==null&&(xt(n,i,o),qn(n,o))}function i_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),nm(n,o)}function r_(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),nm(n,o)}var im;im=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Gn.current)Xn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Xn=!1,Xv(n,i,o);Xn=(n.flags&131072)!==0}else Xn=!1,Zt&&(i.flags&1048576)!==0&&Fd(i,ka,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;$a(n,i),n=i.pendingProps;var f=Ls(i,Cn.current);Os(i,o),f=su(null,i,c,n,f,o);var m=ou();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Wn(c)?(m=!0,Ua(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Jc(i),f.updater=Qa,i.stateNode=f,f._reactInternals=i,hu(i,c,n,o),i=gu(null,i,c,!0,m,o)):(i.tag=0,Zt&&m&&Vc(i),kn(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch($a(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=o_(c),n=Ti(c,n),f){case 0:i=mu(null,i,c,n,o);break e;case 1:i=bp(null,i,c,n,o);break e;case 11:i=Ap(null,i,c,n,o);break e;case 14:i=wp(null,i,c,Ti(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Ti(c,f),mu(n,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Ti(c,f),bp(n,i,c,f,o);case 3:e:{if(Pp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,Xd(n,i),Wa(i,c,null,o);var A=i.memoizedState;if(c=A.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Bs(Error(t(423)),i),i=Lp(n,i,c,o,f);break e}else if(c!==f){f=Bs(Error(t(424)),i),i=Lp(n,i,c,o,f);break e}else for(ti=Er(i.stateNode.containerInfo.firstChild),ei=i,Zt=!0,wi=null,o=Gd(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ns(),c===f){i=rr(n,i,o);break e}kn(n,i,c,o)}i=i.child}return i;case 5:return Kd(i),n===null&&Xc(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,A=f.children,Fc(c,f)?A=null:m!==null&&Fc(c,m)&&(i.flags|=32),Rp(n,i),kn(n,i,A,o),i.child;case 6:return n===null&&Xc(i),null;case 13:return Ip(n,i,o);case 4:return $c(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Us(i,null,c,o):kn(n,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Ti(c,f),Ap(n,i,c,f,o);case 7:return kn(n,i,i.pendingProps,o),i.child;case 8:return kn(n,i,i.pendingProps.children,o),i.child;case 12:return kn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,A=f.value,Wt(Ha,c._currentValue),c._currentValue=A,m!==null)if(Ai(m.value,A)){if(m.children===f.children&&!Gn.current){i=rr(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var k=m.dependencies;if(k!==null){A=m.child;for(var W=k.firstContext;W!==null;){if(W.context===c){if(m.tag===1){W=ir(-1,o&-o),W.tag=2;var he=m.updateQueue;if(he!==null){he=he.shared;var Ee=he.pending;Ee===null?W.next=W:(W.next=Ee.next,Ee.next=W),he.pending=W}}m.lanes|=o,W=m.alternate,W!==null&&(W.lanes|=o),Zc(m.return,o,i),k.lanes|=o;break}W=W.next}}else if(m.tag===10)A=m.type===i.type?null:m.child;else if(m.tag===18){if(A=m.return,A===null)throw Error(t(341));A.lanes|=o,k=A.alternate,k!==null&&(k.lanes|=o),Zc(A,o,i),A=m.sibling}else A=m.child;if(A!==null)A.return=m;else for(A=m;A!==null;){if(A===i){A=null;break}if(m=A.sibling,m!==null){m.return=A.return,A=m;break}A=A.return}m=A}kn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Os(i,o),f=ui(f),c=c(f),i.flags|=1,kn(n,i,c,o),i.child;case 14:return c=i.type,f=Ti(c,i.pendingProps),f=Ti(c.type,f),wp(n,i,c,f,o);case 15:return Tp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Ti(c,f),$a(n,i),i.tag=1,Wn(c)?(n=!0,Ua(i)):n=!1,Os(i,o),vp(i,c,f),hu(i,c,f,o),gu(null,i,c,!0,n,o);case 19:return Np(n,i,o);case 22:return Cp(n,i,o)}throw Error(t(156,i.tag))};function rm(n,i){return qr(n,i)}function s_(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,i,o,c){return new s_(n,i,o,c)}function Fu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function o_(n){if(typeof n=="function")return Fu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===j)return 14}return 2}function Nr(n,i){var o=n.alternate;return o===null?(o=di(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function ul(n,i,o,c,f,m){var A=2;if(c=n,typeof n=="function")Fu(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case B:return as(o.children,f,m,i);case w:A=8,f|=8;break;case F:return n=di(12,o,i,f|2),n.elementType=F,n.lanes=m,n;case oe:return n=di(13,o,i,f),n.elementType=oe,n.lanes=m,n;case ie:return n=di(19,o,i,f),n.elementType=ie,n.lanes=m,n;case X:return fl(o,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Y:A=10;break e;case z:A=9;break e;case Q:A=11;break e;case j:A=14;break e;case $:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=di(A,o,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function as(n,i,o,c){return n=di(7,n,c,i),n.lanes=o,n}function fl(n,i,o,c){return n=di(22,n,c,i),n.elementType=X,n.lanes=o,n.stateNode={isHidden:!1},n}function Ou(n,i,o){return n=di(6,n,null,i),n.lanes=o,n}function ku(n,i,o){return i=di(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function a_(n,i,o,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nn(0),this.expirationTimes=nn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Bu(n,i,o,c,f,m,A,k,W){return n=new a_(n,i,o,k,W),i===1?(i=1,m===!0&&(i|=8)):i=0,m=di(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jc(m),n}function l_(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function sm(n){if(!n)return wr;n=n._reactInternals;e:{if(ln(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Wn(o))return Dd(n,o,i)}return i}function om(n,i,o,c,f,m,A,k,W){return n=Bu(o,c,!0,n,f,m,A,k,W),n.context=sm(null),o=n.current,c=Bn(),f=Ir(o),m=ir(c,f),m.callback=i??null,Rr(o,m,f),n.current.lanes=f,xt(n,f,c),qn(n,c),n}function hl(n,i,o,c){var f=i.current,m=Bn(),A=Ir(f);return o=sm(o),i.context===null?i.context=o:i.pendingContext=o,i=ir(m,A),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Rr(f,i,A),n!==null&&(bi(n,f,A,m),Ga(n,f,A)),A}function dl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function am(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function zu(n,i){am(n,i),(n=n.alternate)&&am(n,i)}function c_(){return null}var lm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hu(n){this._internalRoot=n}pl.prototype.render=Hu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));hl(n,i,null,null)},pl.prototype.unmount=Hu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;rs(function(){hl(null,n,null,null)}),i[Ji]=null}};function pl(n){this._internalRoot=n}pl.prototype.unstable_scheduleHydration=function(n){if(n){var i=zt();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Sr.length&&i!==0&&i<Sr[o].priority;o++);Sr.splice(o,0,n),o===0&&Kh(n)}};function Vu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function cm(){}function u_(n,i,o,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var he=dl(A);m.call(he)}}var A=om(i,c,n,0,null,!1,!1,"",cm);return n._reactRootContainer=A,n[Ji]=A.current,No(n.nodeType===8?n.parentNode:n),rs(),A}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var k=c;c=function(){var he=dl(W);k.call(he)}}var W=Bu(n,0,!1,null,null,!1,!1,"",cm);return n._reactRootContainer=W,n[Ji]=W.current,No(n.nodeType===8?n.parentNode:n),rs(function(){hl(i,W,o,c)}),W}function gl(n,i,o,c,f){var m=o._reactRootContainer;if(m){var A=m;if(typeof f=="function"){var k=f;f=function(){var W=dl(A);k.call(W)}}hl(i,A,n,f)}else A=u_(o,i,n,f,c);return dl(A)}kt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=wt(i.pendingLanes);o!==0&&(yn(i,o|1),qn(i,jt()),(It&6)===0&&(Vs=jt()+500,Tr()))}break;case 13:rs(function(){var c=nr(n,1);if(c!==null){var f=Bn();bi(c,n,1,f)}}),zu(n,1)}},qt=function(n){if(n.tag===13){var i=nr(n,134217728);if(i!==null){var o=Bn();bi(i,n,134217728,o)}zu(n,134217728)}},yi=function(n){if(n.tag===13){var i=Ir(n),o=nr(n,i);if(o!==null){var c=Bn();bi(o,n,i,c)}zu(n,i)}},zt=function(){return mt},Ei=function(n,i){var o=mt;try{return mt=n,i()}finally{mt=o}},ft=function(n,i,o){switch(i){case"input":if(At(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var f=Da(c);if(!f)throw Error(t(90));dt(c),At(c,f)}}}break;case"textarea":Fe(n,o);break;case"select":i=o.value,i!=null&&gt(n,!!o.multiple,i,!1)}},Ne=Du,Me=rs;var f_={usingClientEntryPoint:!1,Events:[Oo,bs,Da,ge,We,Du]},Qo={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},h_={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Fn(n),n===null?null:n.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||c_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{re=vl.inject(h_),Ue=vl}catch{}}return Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f_,Kn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vu(i))throw Error(t(200));return l_(n,i,null,o)},Kn.createRoot=function(n,i){if(!Vu(n))throw Error(t(299));var o=!1,c="",f=lm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Bu(n,1,!1,null,null,o,!1,c,f),n[Ji]=i.current,No(n.nodeType===8?n.parentNode:n),new Hu(i)},Kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Fn(i),n=n===null?null:n.stateNode,n},Kn.flushSync=function(n){return rs(n)},Kn.hydrate=function(n,i,o){if(!ml(i))throw Error(t(200));return gl(null,n,i,!0,o)},Kn.hydrateRoot=function(n,i,o){if(!Vu(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,m="",A=lm;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(A=o.onRecoverableError)),i=om(i,null,n,1,o??null,f,!1,m,A),n[Ji]=i.current,No(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new pl(i)},Kn.render=function(n,i,o){if(!ml(i))throw Error(t(200));return gl(null,n,i,!1,o)},Kn.unmountComponentAtNode=function(n){if(!ml(n))throw Error(t(40));return n._reactRootContainer?(rs(function(){gl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ji]=null})}),!0):!1},Kn.unstable_batchedUpdates=Du,Kn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!ml(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gl(n,i,o,!1,c)},Kn.version="18.3.1-next-f1338f8080-20240426",Kn}var vm;function y_(){if(vm)return Xu.exports;vm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Xu.exports=M_(),Xu.exports}var _m;function E_(){if(_m)return _l;_m=1;var r=y_();return _l.createRoot=r.createRoot,_l.hydrateRoot=r.hydrateRoot,_l}var A_=E_();const xm={field:{count:1400,size:1,drift:1},look:{trail:.35,grain:.5,glow:1},form:{circle:0},hands:{reach:1,clap:1},sound:{beat:1,sparks:1,bass:1}};function w_(r,e){let t=r;for(const s of e.split(".")){if(typeof t!="object"||t===null)return;t=t[s]}return typeof t=="number"?t:void 0}function Rh(r,e){const t=structuredClone(r);for(const[s,a]of Object.entries(e)){if(!Number.isFinite(a)||w_(r,s)===void 0)continue;const l=s.split("."),u=l.pop();let h=t;for(const p of l)h=h[p];h[u]=a}return t}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bh="184",T_=0,Sm=1,C_=2,jl=1,R_=2,la=3,Xr=0,Yn=1,Ni=2,hr=0,co=1,Mm=2,ym=3,Em=4,b_=5,ds=100,P_=101,L_=102,I_=103,D_=104,N_=200,U_=201,F_=202,O_=203,Of=204,kf=205,k_=206,B_=207,z_=208,H_=209,V_=210,G_=211,W_=212,X_=213,j_=214,Bf=0,zf=1,Hf=2,fo=3,Vf=4,Gf=5,Wf=6,Xf=7,q0=0,q_=1,K_=2,ji=0,K0=1,Y0=2,Z0=3,Q0=4,J0=5,$0=6,eg=7,tg=300,vs=301,ho=302,Ku=303,Yu=304,uc=306,ec=1e3,fr=1001,jf=1002,dn=1003,Y_=1004,xl=1005,Mn=1006,Zu=1007,ms=1008,vi=1009,ng=1010,ig=1011,da=1012,Ph=1013,Yi=1014,Fi=1015,mr=1016,Lh=1017,Ih=1018,pa=1020,rg=35902,sg=35899,og=1021,ag=1022,_i=1023,gr=1026,gs=1027,lg=1028,Dh=1029,_s=1030,Nh=1031,Uh=1033,ql=33776,Kl=33777,Yl=33778,Zl=33779,qf=35840,Kf=35841,Yf=35842,Zf=35843,Qf=36196,Jf=37492,$f=37496,eh=37488,th=37489,tc=37490,nh=37491,ih=37808,rh=37809,sh=37810,oh=37811,ah=37812,lh=37813,ch=37814,uh=37815,fh=37816,hh=37817,dh=37818,ph=37819,mh=37820,gh=37821,vh=36492,_h=36494,xh=36495,Sh=36283,Mh=36284,nc=36285,yh=36286,Z_=3200,Am=0,Q_=1,Gr="",mi="srgb",ic="srgb-linear",rc="linear",Ht="srgb",Ws=7680,wm=519,J_=512,$_=513,ex=514,Fh=515,tx=516,nx=517,Oh=518,ix=519,Tm=35044,Cm="300 es",Xi=2e3,sc=2001;function rx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function oc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sx(){const r=oc("canvas");return r.style.display="block",r}const Rm={};function bm(...r){const e="THREE."+r.shift();console.log(e,...r)}function cg(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ht(...r){r=cg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Dt(...r){r=cg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Eh(...r){const e=r.join(" ");e in Rm||(Rm[e]=!0,ht(...r))}function ox(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const ax={[Bf]:zf,[Hf]:Wf,[Vf]:Xf,[fo]:Gf,[zf]:Bf,[Wf]:Hf,[Xf]:Vf,[Gf]:fo};class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pm=1234567;const fa=Math.PI/180,ma=180/Math.PI;function go(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function Ct(r,e,t){return Math.max(e,Math.min(t,r))}function kh(r,e){return(r%e+e)%e}function lx(r,e,t,s,a){return s+(r-e)*(a-s)/(t-e)}function cx(r,e,t){return r!==e?(t-r)/(e-r):0}function ha(r,e,t){return(1-t)*r+t*e}function ux(r,e,t,s){return ha(r,e,1-Math.exp(-t*s))}function fx(r,e=1){return e-Math.abs(kh(r,e*2)-e)}function hx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function dx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function px(r,e){return r+Math.floor(Math.random()*(e-r+1))}function mx(r,e){return r+Math.random()*(e-r)}function gx(r){return r*(.5-Math.random())}function vx(r){r!==void 0&&(Pm=r);let e=Pm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _x(r){return r*fa}function xx(r){return r*ma}function Sx(r){return(r&r-1)===0&&r!==0}function Mx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function yx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ex(r,e,t,s,a){const l=Math.cos,u=Math.sin,h=l(t/2),p=u(t/2),d=l((e+s)/2),v=u((e+s)/2),_=l((e-s)/2),g=u((e-s)/2),M=l((s-e)/2),E=u((s-e)/2);switch(a){case"XYX":r.set(h*v,p*_,p*g,h*d);break;case"YZY":r.set(p*g,h*v,p*_,h*d);break;case"ZXZ":r.set(p*_,p*g,h*v,h*d);break;case"XZX":r.set(h*v,p*E,p*M,h*d);break;case"YXY":r.set(p*M,h*v,p*E,h*d);break;case"ZYZ":r.set(p*E,p*M,h*v,h*d);break;default:ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function so(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function zn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Qu={DEG2RAD:fa,RAD2DEG:ma,generateUUID:go,clamp:Ct,euclideanModulo:kh,mapLinear:lx,inverseLerp:cx,lerp:ha,damp:ux,pingpong:fx,smoothstep:hx,smootherstep:dx,randInt:px,randFloat:mx,randFloatSpread:gx,seededRandom:vx,degToRad:_x,radToDeg:xx,isPowerOfTwo:Sx,ceilPowerOfTwo:Mx,floorPowerOfTwo:yx,setQuaternionFromProperEuler:Ex,normalize:zn,denormalize:so},Vh=class Vh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ct(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Ct(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*a+e.x,this.y=l*a+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vh.prototype.isVector2=!0;let Ut=Vh;class dr{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,u,h){let p=s[a+0],d=s[a+1],v=s[a+2],_=s[a+3],g=l[u+0],M=l[u+1],E=l[u+2],C=l[u+3];if(_!==C||p!==g||d!==M||v!==E){let x=p*g+d*M+v*E+_*C;x<0&&(g=-g,M=-M,E=-E,C=-C,x=-x);let S=1-h;if(x<.9995){const R=Math.acos(x),I=Math.sin(R);S=Math.sin(S*R)/I,h=Math.sin(h*R)/I,p=p*S+g*h,d=d*S+M*h,v=v*S+E*h,_=_*S+C*h}else{p=p*S+g*h,d=d*S+M*h,v=v*S+E*h,_=_*S+C*h;const R=1/Math.sqrt(p*p+d*d+v*v+_*_);p*=R,d*=R,v*=R,_*=R}}e[t]=p,e[t+1]=d,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,a,l,u){const h=s[a],p=s[a+1],d=s[a+2],v=s[a+3],_=l[u],g=l[u+1],M=l[u+2],E=l[u+3];return e[t]=h*E+v*_+p*M-d*g,e[t+1]=p*E+v*g+d*_-h*M,e[t+2]=d*E+v*M+h*g-p*_,e[t+3]=v*E-h*_-p*g-d*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,u=e._order,h=Math.cos,p=Math.sin,d=h(s/2),v=h(a/2),_=h(l/2),g=p(s/2),M=p(a/2),E=p(l/2);switch(u){case"XYZ":this._x=g*v*_+d*M*E,this._y=d*M*_-g*v*E,this._z=d*v*E+g*M*_,this._w=d*v*_-g*M*E;break;case"YXZ":this._x=g*v*_+d*M*E,this._y=d*M*_-g*v*E,this._z=d*v*E-g*M*_,this._w=d*v*_+g*M*E;break;case"ZXY":this._x=g*v*_-d*M*E,this._y=d*M*_+g*v*E,this._z=d*v*E+g*M*_,this._w=d*v*_-g*M*E;break;case"ZYX":this._x=g*v*_-d*M*E,this._y=d*M*_+g*v*E,this._z=d*v*E-g*M*_,this._w=d*v*_+g*M*E;break;case"YZX":this._x=g*v*_+d*M*E,this._y=d*M*_+g*v*E,this._z=d*v*E-g*M*_,this._w=d*v*_-g*M*E;break;case"XZY":this._x=g*v*_-d*M*E,this._y=d*M*_-g*v*E,this._z=d*v*E+g*M*_,this._w=d*v*_+g*M*E;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],u=t[1],h=t[5],p=t[9],d=t[2],v=t[6],_=t[10],g=s+h+_;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-p)*M,this._y=(l-d)*M,this._z=(u-a)*M}else if(s>h&&s>_){const M=2*Math.sqrt(1+s-h-_);this._w=(v-p)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(l+d)/M}else if(h>_){const M=2*Math.sqrt(1+h-s-_);this._w=(l-d)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+_-s-h);this._w=(u-a)/M,this._x=(l+d)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,u=e._w,h=t._x,p=t._y,d=t._z,v=t._w;return this._x=s*v+u*h+a*d-l*p,this._y=a*v+u*p+l*h-s*d,this._z=l*v+u*d+s*p-a*h,this._w=u*v-s*h-a*p-l*d,this._onChangeCallback(),this}slerp(e,t){let s=e._x,a=e._y,l=e._z,u=e._w,h=this.dot(e);h<0&&(s=-s,a=-a,l=-l,u=-u,h=-h);let p=1-t;if(h<.9995){const d=Math.acos(h),v=Math.sin(d);p=Math.sin(p*d)/v,t=Math.sin(t*d)/v,this._x=this._x*p+s*t,this._y=this._y*p+a*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+s*t,this._y=this._y*p+a*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Gh=class Gh{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,u=e.y,h=e.z,p=e.w,d=2*(u*a-h*s),v=2*(h*t-l*a),_=2*(l*s-u*t);return this.x=t+p*d+u*_-h*v,this.y=s+p*v+h*d-l*_,this.z=a+p*_+l*v-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ct(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,u=t.x,h=t.y,p=t.z;return this.x=a*p-l*h,this.y=l*u-s*p,this.z=s*h-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ju.copy(this).projectOnVector(e),this.sub(Ju)}reflect(e){return this.sub(Ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Ct(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gh.prototype.isVector3=!0;let te=Gh;const Ju=new te,Lm=new dr,Wh=class Wh{constructor(e,t,s,a,l,u,h,p,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,u,h,p,d)}set(e,t,s,a,l,u,h,p,d){const v=this.elements;return v[0]=e,v[1]=a,v[2]=h,v[3]=t,v[4]=l,v[5]=p,v[6]=s,v[7]=u,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,u=s[0],h=s[3],p=s[6],d=s[1],v=s[4],_=s[7],g=s[2],M=s[5],E=s[8],C=a[0],x=a[3],S=a[6],R=a[1],I=a[4],L=a[7],V=a[2],D=a[5],B=a[8];return l[0]=u*C+h*R+p*V,l[3]=u*x+h*I+p*D,l[6]=u*S+h*L+p*B,l[1]=d*C+v*R+_*V,l[4]=d*x+v*I+_*D,l[7]=d*S+v*L+_*B,l[2]=g*C+M*R+E*V,l[5]=g*x+M*I+E*D,l[8]=g*S+M*L+E*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],h=e[5],p=e[6],d=e[7],v=e[8];return t*u*v-t*h*d-s*l*v+s*h*p+a*l*d-a*u*p}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],h=e[5],p=e[6],d=e[7],v=e[8],_=v*u-h*d,g=h*p-v*l,M=d*l-u*p,E=t*_+s*g+a*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=_*C,e[1]=(a*d-v*s)*C,e[2]=(h*s-a*u)*C,e[3]=g*C,e[4]=(v*t-a*p)*C,e[5]=(a*l-h*t)*C,e[6]=M*C,e[7]=(s*p-d*t)*C,e[8]=(u*t-s*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,u,h){const p=Math.cos(l),d=Math.sin(l);return this.set(s*p,s*d,-s*(p*u+d*h)+u+e,-a*d,a*p,-a*(-d*u+p*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply($u.makeScale(e,t)),this}rotate(e){return this.premultiply($u.makeRotation(-e)),this}translate(e,t){return this.premultiply($u.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wh.prototype.isMatrix3=!0;let St=Wh;const $u=new St,Im=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dm=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ax(){const r={enabled:!0,workingColorSpace:ic,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ht&&(a.r=pr(a.r),a.g=pr(a.g),a.b=pr(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ht&&(a.r=uo(a.r),a.g=uo(a.g),a.b=uo(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Gr?rc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Eh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Eh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ic]:{primaries:e,whitePoint:s,transfer:rc,toXYZ:Im,fromXYZ:Dm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:s,transfer:Ht,toXYZ:Im,fromXYZ:Dm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),r}const bt=Ax();function pr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function uo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Xs;class wx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Xs===void 0&&(Xs=oc("canvas")),Xs.width=e.width,Xs.height=e.height;const a=Xs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=Xs}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=pr(l[u]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(pr(t[s]/255)*255):t[s]=pr(t[s]);return{data:t,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tx=0;class Bh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=go(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,h=a.length;u<h;u++)a[u].isDataTexture?l.push(ef(a[u].image)):l.push(ef(a[u]))}else l=ef(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function ef(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let Cx=0;const tf=new te;class Dn extends Ss{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,s=fr,a=fr,l=Mn,u=ms,h=_i,p=vi,d=Dn.DEFAULT_ANISOTROPY,v=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=go(),this.name="",this.source=new Bh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tf).x}get height(){return this.source.getSize(tf).y}get depth(){return this.source.getSize(tf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){ht(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ht(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ec:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ec:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=tg;Dn.DEFAULT_ANISOTROPY=1;const Xh=class Xh{constructor(e=0,t=0,s=0,a=1){this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const p=e.elements,d=p[0],v=p[4],_=p[8],g=p[1],M=p[5],E=p[9],C=p[2],x=p[6],S=p[10];if(Math.abs(v-g)<.01&&Math.abs(_-C)<.01&&Math.abs(E-x)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+C)<.1&&Math.abs(E+x)<.1&&Math.abs(d+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(d+1)/2,L=(M+1)/2,V=(S+1)/2,D=(v+g)/4,B=(_+C)/4,w=(E+x)/4;return I>L&&I>V?I<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(I),a=D/s,l=B/s):L>V?L<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(L),s=D/a,l=w/a):V<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(V),s=B/l,a=w/l),this.set(s,a,l,t),this}let R=Math.sqrt((x-E)*(x-E)+(_-C)*(_-C)+(g-v)*(g-v));return Math.abs(R)<.001&&(R=1),this.x=(x-E)/R,this.y=(_-C)/R,this.z=(g-v)/R,this.w=Math.acos((d+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ct(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xh.prototype.isVector4=!0;let sn=Xh;class Rx extends Ss{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:s.depth},l=new Dn(a),u=s.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Bh(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Rx{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class ug extends Dn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=dn,this.minFilter=dn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bx extends Dn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=dn,this.minFilter=dn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cc=class cc{constructor(e,t,s,a,l,u,h,p,d,v,_,g,M,E,C,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,u,h,p,d,v,_,g,M,E,C,x)}set(e,t,s,a,l,u,h,p,d,v,_,g,M,E,C,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=s,S[12]=a,S[1]=l,S[5]=u,S[9]=h,S[13]=p,S[2]=d,S[6]=v,S[10]=_,S[14]=g,S[3]=M,S[7]=E,S[11]=C,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cc().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,s=e.elements,a=1/js.setFromMatrixColumn(e,0).length(),l=1/js.setFromMatrixColumn(e,1).length(),u=1/js.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,u=Math.cos(s),h=Math.sin(s),p=Math.cos(a),d=Math.sin(a),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=u*v,M=u*_,E=h*v,C=h*_;t[0]=p*v,t[4]=-p*_,t[8]=d,t[1]=M+E*d,t[5]=g-C*d,t[9]=-h*p,t[2]=C-g*d,t[6]=E+M*d,t[10]=u*p}else if(e.order==="YXZ"){const g=p*v,M=p*_,E=d*v,C=d*_;t[0]=g+C*h,t[4]=E*h-M,t[8]=u*d,t[1]=u*_,t[5]=u*v,t[9]=-h,t[2]=M*h-E,t[6]=C+g*h,t[10]=u*p}else if(e.order==="ZXY"){const g=p*v,M=p*_,E=d*v,C=d*_;t[0]=g-C*h,t[4]=-u*_,t[8]=E+M*h,t[1]=M+E*h,t[5]=u*v,t[9]=C-g*h,t[2]=-u*d,t[6]=h,t[10]=u*p}else if(e.order==="ZYX"){const g=u*v,M=u*_,E=h*v,C=h*_;t[0]=p*v,t[4]=E*d-M,t[8]=g*d+C,t[1]=p*_,t[5]=C*d+g,t[9]=M*d-E,t[2]=-d,t[6]=h*p,t[10]=u*p}else if(e.order==="YZX"){const g=u*p,M=u*d,E=h*p,C=h*d;t[0]=p*v,t[4]=C-g*_,t[8]=E*_+M,t[1]=_,t[5]=u*v,t[9]=-h*v,t[2]=-d*v,t[6]=M*_+E,t[10]=g-C*_}else if(e.order==="XZY"){const g=u*p,M=u*d,E=h*p,C=h*d;t[0]=p*v,t[4]=-_,t[8]=d*v,t[1]=g*_+C,t[5]=u*v,t[9]=M*_-E,t[2]=E*_-M,t[6]=h*v,t[10]=C*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Px,e,Lx)}lookAt(e,t,s){const a=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Fr.crossVectors(s,ii),Fr.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Fr.crossVectors(s,ii)),Fr.normalize(),Sl.crossVectors(ii,Fr),a[0]=Fr.x,a[4]=Sl.x,a[8]=ii.x,a[1]=Fr.y,a[5]=Sl.y,a[9]=ii.y,a[2]=Fr.z,a[6]=Sl.z,a[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,u=s[0],h=s[4],p=s[8],d=s[12],v=s[1],_=s[5],g=s[9],M=s[13],E=s[2],C=s[6],x=s[10],S=s[14],R=s[3],I=s[7],L=s[11],V=s[15],D=a[0],B=a[4],w=a[8],F=a[12],Y=a[1],z=a[5],Q=a[9],oe=a[13],ie=a[2],j=a[6],$=a[10],X=a[14],q=a[3],O=a[7],J=a[11],b=a[15];return l[0]=u*D+h*Y+p*ie+d*q,l[4]=u*B+h*z+p*j+d*O,l[8]=u*w+h*Q+p*$+d*J,l[12]=u*F+h*oe+p*X+d*b,l[1]=v*D+_*Y+g*ie+M*q,l[5]=v*B+_*z+g*j+M*O,l[9]=v*w+_*Q+g*$+M*J,l[13]=v*F+_*oe+g*X+M*b,l[2]=E*D+C*Y+x*ie+S*q,l[6]=E*B+C*z+x*j+S*O,l[10]=E*w+C*Q+x*$+S*J,l[14]=E*F+C*oe+x*X+S*b,l[3]=R*D+I*Y+L*ie+V*q,l[7]=R*B+I*z+L*j+V*O,l[11]=R*w+I*Q+L*$+V*J,l[15]=R*F+I*oe+L*X+V*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],u=e[1],h=e[5],p=e[9],d=e[13],v=e[2],_=e[6],g=e[10],M=e[14],E=e[3],C=e[7],x=e[11],S=e[15],R=p*M-d*g,I=h*M-d*_,L=h*g-p*_,V=u*M-d*v,D=u*g-p*v,B=u*_-h*v;return t*(C*R-x*I+S*L)-s*(E*R-x*V+S*D)+a*(E*I-C*V+S*B)-l*(E*L-C*D+x*B)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],h=e[5],p=e[6],d=e[7],v=e[8],_=e[9],g=e[10],M=e[11],E=e[12],C=e[13],x=e[14],S=e[15],R=t*h-s*u,I=t*p-a*u,L=t*d-l*u,V=s*p-a*h,D=s*d-l*h,B=a*d-l*p,w=v*C-_*E,F=v*x-g*E,Y=v*S-M*E,z=_*x-g*C,Q=_*S-M*C,oe=g*S-M*x,ie=R*oe-I*Q+L*z+V*Y-D*F+B*w;if(ie===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/ie;return e[0]=(h*oe-p*Q+d*z)*j,e[1]=(a*Q-s*oe-l*z)*j,e[2]=(C*B-x*D+S*V)*j,e[3]=(g*D-_*B-M*V)*j,e[4]=(p*Y-u*oe-d*F)*j,e[5]=(t*oe-a*Y+l*F)*j,e[6]=(x*L-E*B-S*I)*j,e[7]=(v*B-g*L+M*I)*j,e[8]=(u*Q-h*Y+d*w)*j,e[9]=(s*Y-t*Q-l*w)*j,e[10]=(E*D-C*L+S*R)*j,e[11]=(_*L-v*D-M*R)*j,e[12]=(h*F-u*z-p*w)*j,e[13]=(t*z-s*F+a*w)*j,e[14]=(C*I-E*V-x*R)*j,e[15]=(v*V-_*I+g*R)*j,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,u=e.x,h=e.y,p=e.z,d=l*u,v=l*h;return this.set(d*u+s,d*h-a*p,d*p+a*h,0,d*h+a*p,v*h+s,v*p-a*u,0,d*p-a*h,v*p+a*u,l*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,u){return this.set(1,s,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,u=t._y,h=t._z,p=t._w,d=l+l,v=u+u,_=h+h,g=l*d,M=l*v,E=l*_,C=u*v,x=u*_,S=h*_,R=p*d,I=p*v,L=p*_,V=s.x,D=s.y,B=s.z;return a[0]=(1-(C+S))*V,a[1]=(M+L)*V,a[2]=(E-I)*V,a[3]=0,a[4]=(M-L)*D,a[5]=(1-(g+S))*D,a[6]=(x+R)*D,a[7]=0,a[8]=(E+I)*B,a[9]=(x-R)*B,a[10]=(1-(g+C))*B,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinant();if(l===0)return s.set(1,1,1),t.identity(),this;let u=js.set(a[0],a[1],a[2]).length();const h=js.set(a[4],a[5],a[6]).length(),p=js.set(a[8],a[9],a[10]).length();l<0&&(u=-u),Pi.copy(this);const d=1/u,v=1/h,_=1/p;return Pi.elements[0]*=d,Pi.elements[1]*=d,Pi.elements[2]*=d,Pi.elements[4]*=v,Pi.elements[5]*=v,Pi.elements[6]*=v,Pi.elements[8]*=_,Pi.elements[9]*=_,Pi.elements[10]*=_,t.setFromRotationMatrix(Pi),s.x=u,s.y=h,s.z=p,this}makePerspective(e,t,s,a,l,u,h=Xi,p=!1){const d=this.elements,v=2*l/(t-e),_=2*l/(s-a),g=(t+e)/(t-e),M=(s+a)/(s-a);let E,C;if(p)E=l/(u-l),C=u*l/(u-l);else if(h===Xi)E=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(h===sc)E=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=v,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=_,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,s,a,l,u,h=Xi,p=!1){const d=this.elements,v=2/(t-e),_=2/(s-a),g=-(t+e)/(t-e),M=-(s+a)/(s-a);let E,C;if(p)E=1/(u-l),C=u/(u-l);else if(h===Xi)E=-2/(u-l),C=-(u+l)/(u-l);else if(h===sc)E=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=v,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=_,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=E,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};cc.prototype.isMatrix4=!0;let on=cc;const js=new te,Pi=new on,Px=new te(0,0,0),Lx=new te(1,1,1),Fr=new te,Sl=new te,ii=new te,Nm=new on,Um=new dr;class xs{constructor(e=0,t=0,s=0,a=xs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],u=a[4],h=a[8],p=a[1],d=a[5],v=a[9],_=a[2],g=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Ct(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Ct(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Um.setFromEuler(this),this.setFromQuaternion(Um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xs.DEFAULT_ORDER="XYZ";class fg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ix=0;const Fm=new te,qs=new dr,or=new on,Ml=new te,$o=new te,Dx=new te,Nx=new dr,Om=new te(1,0,0),km=new te(0,1,0),Bm=new te(0,0,1),zm={type:"added"},Ux={type:"removed"},Ks={type:"childadded",child:null},nf={type:"childremoved",child:null};class Vn extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new te,t=new xs,s=new dr,a=new te(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new on},normalMatrix:{value:new St}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Om,e)}rotateY(e){return this.rotateOnAxis(km,e)}rotateZ(e){return this.rotateOnAxis(Bm,e)}translateOnAxis(e,t){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Om,e)}translateY(e){return this.translateOnAxis(km,e)}translateZ(e){return this.translateOnAxis(Bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Ml.copy(e):Ml.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt($o,Ml,this.up):or.lookAt(Ml,$o,this.up),this.quaternion.setFromRotationMatrix(or),a&&(or.extractRotation(a.matrixWorld),qs.setFromRotationMatrix(or),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zm),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ux),nf.child=e,this.dispatchEvent(nf),nf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zm),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,Dx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,Nx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*a,l[13]+=s-l[1]*t-l[5]*s-l[9]*a,l[14]+=a-l[2]*t-l[6]*s-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,v=p.length;d<v;d++){const _=p[d];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(l(e.materials,this.material[p]));a.material=h}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];a.animations.push(l(e.animations,p))}}if(t){const h=u(e.geometries),p=u(e.materials),d=u(e.textures),v=u(e.images),_=u(e.shapes),g=u(e.skeletons),M=u(e.animations),E=u(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),d.length>0&&(s.textures=d),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=a,s;function u(h){const p=[];for(const d in h){const v=h[d];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}Vn.DEFAULT_UP=new te(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ao extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fx={type:"move"};class rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const C of e.hand.values()){const x=t.getJointPose(C,s),S=this._getHandJoint(d,C);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const v=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],g=v.position.distanceTo(_.position),M=.02,E=.005;d.inputState.pinching&&g>M+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=M-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Fx)))}return h!==null&&(h.visible=a!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new ao;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},yl={h:0,s:0,l:0};function sf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Bt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,a=bt.workingColorSpace){return this.r=e,this.g=t,this.b=s,bt.colorSpaceToWorking(this,a),this}setHSL(e,t,s,a=bt.workingColorSpace){if(e=kh(e,1),t=Ct(t,0,1),s=Ct(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=sf(u,l,e+1/3),this.g=sf(u,l,e),this.b=sf(u,l,e-1/3)}return bt.colorSpaceToWorking(this,a),this}setStyle(e,t=mi){function s(l){l!==void 0&&parseFloat(l)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],h=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ht("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const s=hg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return bt.workingToColorSpace(In.copy(this),e),Math.round(Ct(In.r*255,0,255))*65536+Math.round(Ct(In.g*255,0,255))*256+Math.round(Ct(In.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(In.copy(this),t);const s=In.r,a=In.g,l=In.b,u=Math.max(s,a,l),h=Math.min(s,a,l);let p,d;const v=(h+u)/2;if(h===u)p=0,d=0;else{const _=u-h;switch(d=v<=.5?_/(u+h):_/(2-u-h),u){case s:p=(a-l)/_+(a<l?6:0);break;case a:p=(l-s)/_+2;break;case l:p=(s-a)/_+4;break}p/=6}return e.h=p,e.s=d,e.l=v,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=mi){bt.workingToColorSpace(In.copy(this),e);const t=In.r,s=In.g,a=In.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+t,Or.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Or),e.getHSL(yl);const s=ha(Or.h,yl.h,t),a=ha(Or.s,yl.s,t),l=ha(Or.l,yl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Bt;Bt.NAMES=hg;class Ox extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xs,this.environmentIntensity=1,this.environmentRotation=new xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Li=new te,ar=new te,of=new te,lr=new te,Ys=new te,Zs=new te,Hm=new te,af=new te,lf=new te,cf=new te,uf=new sn,ff=new sn,hf=new sn;class Ui{constructor(e=new te,t=new te,s=new te){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),Li.subVectors(e,t),a.cross(Li);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){Li.subVectors(a,t),ar.subVectors(s,t),of.subVectors(e,t);const u=Li.dot(Li),h=Li.dot(ar),p=Li.dot(of),d=ar.dot(ar),v=ar.dot(of),_=u*d-h*h;if(_===0)return l.set(0,0,0),null;const g=1/_,M=(d*p-h*v)*g,E=(u*v-h*p)*g;return l.set(1-M-E,E,M)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,s,a,l,u,h,p){return this.getBarycoord(e,t,s,a,lr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,lr.x),p.addScaledVector(u,lr.y),p.addScaledVector(h,lr.z),p)}static getInterpolatedAttribute(e,t,s,a,l,u){return uf.setScalar(0),ff.setScalar(0),hf.setScalar(0),uf.fromBufferAttribute(e,t),ff.fromBufferAttribute(e,s),hf.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(uf,l.x),u.addScaledVector(ff,l.y),u.addScaledVector(hf,l.z),u}static isFrontFacing(e,t,s,a){return Li.subVectors(s,t),ar.subVectors(e,t),Li.cross(ar).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Li.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return Ui.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let u,h;Ys.subVectors(a,s),Zs.subVectors(l,s),af.subVectors(e,s);const p=Ys.dot(af),d=Zs.dot(af);if(p<=0&&d<=0)return t.copy(s);lf.subVectors(e,a);const v=Ys.dot(lf),_=Zs.dot(lf);if(v>=0&&_<=v)return t.copy(a);const g=p*_-v*d;if(g<=0&&p>=0&&v<=0)return u=p/(p-v),t.copy(s).addScaledVector(Ys,u);cf.subVectors(e,l);const M=Ys.dot(cf),E=Zs.dot(cf);if(E>=0&&M<=E)return t.copy(l);const C=M*d-p*E;if(C<=0&&d>=0&&E<=0)return h=d/(d-E),t.copy(s).addScaledVector(Zs,h);const x=v*E-M*_;if(x<=0&&_-v>=0&&M-E>=0)return Hm.subVectors(l,a),h=(_-v)/(_-v+(M-E)),t.copy(a).addScaledVector(Hm,h);const S=1/(x+C+g);return u=C*S,h=g*S,t.copy(s).addScaledVector(Ys,u).addScaledVector(Zs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ga{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Ii):Ii.fromBufferAttribute(l,u),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),El.copy(s.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),Al.subVectors(this.max,ea),Qs.subVectors(e.a,ea),Js.subVectors(e.b,ea),$s.subVectors(e.c,ea),kr.subVectors(Js,Qs),Br.subVectors($s,Js),ls.subVectors(Qs,$s);let t=[0,-kr.z,kr.y,0,-Br.z,Br.y,0,-ls.z,ls.y,kr.z,0,-kr.x,Br.z,0,-Br.x,ls.z,0,-ls.x,-kr.y,kr.x,0,-Br.y,Br.x,0,-ls.y,ls.x,0];return!df(t,Qs,Js,$s,Al)||(t=[1,0,0,0,1,0,0,0,1],!df(t,Qs,Js,$s,Al))?!1:(wl.crossVectors(kr,Br),t=[wl.x,wl.y,wl.z],df(t,Qs,Js,$s,Al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cr=[new te,new te,new te,new te,new te,new te,new te,new te],Ii=new te,El=new ga,Qs=new te,Js=new te,$s=new te,kr=new te,Br=new te,ls=new te,ea=new te,Al=new te,wl=new te,cs=new te;function df(r,e,t,s,a){for(let l=0,u=r.length-3;l<=u;l+=3){cs.fromArray(r,l);const h=a.x*Math.abs(cs.x)+a.y*Math.abs(cs.y)+a.z*Math.abs(cs.z),p=e.dot(cs),d=t.dot(cs),v=s.dot(cs);if(Math.max(-Math.max(p,d,v),Math.min(p,d,v))>h)return!1}return!0}const un=new te,Tl=new Ut;let kx=0;class Xt extends Ss{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Tm,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=so(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=zn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=so(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=so(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=so(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=so(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),s=zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),s=zn(s,this.array),a=zn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),s=zn(s,this.array),a=zn(a,this.array),l=zn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class dg extends Xt{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class pg extends Xt{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Ki extends Xt{constructor(e,t,s){super(new Float32Array(e),t,s)}}const Bx=new ga,ta=new te,pf=new te;class vo{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):Bx.setFromPoints(e).getCenter(s);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);const t=ta.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(ta,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(pf)),this.expandByPoint(ta.copy(e.center).sub(pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zx=0;const pi=new on,mf=new Vn,eo=new te,ri=new ga,na=new ga,Sn=new te;class Zn extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rx(e)?pg:dg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new St().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,s){return pi.makeTranslation(e,t,s),this.applyMatrix4(pi),this}scale(e,t,s){return pi.makeScale(e,t,s),this.applyMatrix4(pi),this}lookAt(e){return mf.lookAt(e),mf.updateMatrix(),this.applyMatrix4(mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ki(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];ri.setFromBufferAttribute(l),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const h=t[l];na.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(ri.min,na.min),ri.expandByPoint(Sn),Sn.addVectors(ri.max,na.max),ri.expandByPoint(Sn)):(ri.expandByPoint(na.min),ri.expandByPoint(na.max))}ri.getCenter(s);let a=0;for(let l=0,u=e.count;l<u;l++)Sn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(Sn));if(t)for(let l=0,u=t.length;l<u;l++){const h=t[l],p=this.morphTargetsRelative;for(let d=0,v=h.count;d<v;d++)Sn.fromBufferAttribute(h,d),p&&(eo.fromBufferAttribute(e,d),Sn.add(eo)),a=Math.max(a,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let w=0;w<s.count;w++)h[w]=new te,p[w]=new te;const d=new te,v=new te,_=new te,g=new Ut,M=new Ut,E=new Ut,C=new te,x=new te;function S(w,F,Y){d.fromBufferAttribute(s,w),v.fromBufferAttribute(s,F),_.fromBufferAttribute(s,Y),g.fromBufferAttribute(l,w),M.fromBufferAttribute(l,F),E.fromBufferAttribute(l,Y),v.sub(d),_.sub(d),M.sub(g),E.sub(g);const z=1/(M.x*E.y-E.x*M.y);isFinite(z)&&(C.copy(v).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(z),x.copy(_).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(z),h[w].add(C),h[F].add(C),h[Y].add(C),p[w].add(x),p[F].add(x),p[Y].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let w=0,F=R.length;w<F;++w){const Y=R[w],z=Y.start,Q=Y.count;for(let oe=z,ie=z+Q;oe<ie;oe+=3)S(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const I=new te,L=new te,V=new te,D=new te;function B(w){V.fromBufferAttribute(a,w),D.copy(V);const F=h[w];I.copy(F),I.sub(V.multiplyScalar(V.dot(F))).normalize(),L.crossVectors(D,F);const z=L.dot(p[w])<0?-1:1;u.setXYZW(w,I.x,I.y,I.z,z)}for(let w=0,F=R.length;w<F;++w){const Y=R[w],z=Y.start,Q=Y.count;for(let oe=z,ie=z+Q;oe<ie;oe+=3)B(e.getX(oe+0)),B(e.getX(oe+1)),B(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const a=new te,l=new te,u=new te,h=new te,p=new te,d=new te,v=new te,_=new te;if(e)for(let g=0,M=e.count;g<M;g+=3){const E=e.getX(g+0),C=e.getX(g+1),x=e.getX(g+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,x),v.subVectors(u,l),_.subVectors(a,l),v.cross(_),h.fromBufferAttribute(s,E),p.fromBufferAttribute(s,C),d.fromBufferAttribute(s,x),h.add(v),p.add(v),d.add(v),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(x,d.x,d.y,d.z)}else for(let g=0,M=t.count;g<M;g+=3)a.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),_.subVectors(a,l),v.cross(_),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(h,p){const d=h.array,v=h.itemSize,_=h.normalized,g=new d.constructor(p.length*v);let M=0,E=0;for(let C=0,x=p.length;C<x;C++){h.isInterleavedBufferAttribute?M=p[C]*h.data.stride+h.offset:M=p[C]*v;for(let S=0;S<v;S++)g[E++]=d[M++]}return new Xt(g,v,_)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,s=this.index.array,a=this.attributes;for(const h in a){const p=a[h],d=e(p,s);t.setAttribute(h,d)}const l=this.morphAttributes;for(const h in l){const p=[],d=l[h];for(let v=0,_=d.length;v<_;v++){const g=d[v],M=e(g,s);p.push(M)}t.morphAttributes[h]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const p in s){const d=s[p];e.data.attributes[p]=d.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],v=[];for(let _=0,g=d.length;_<g;_++){const M=d[_];v.push(M.toJSON(e.data))}v.length>0&&(a[p]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const d in a){const v=a[d];this.setAttribute(d,v.clone(t))}const l=e.morphAttributes;for(const d in l){const v=[],_=l[d];for(let g=0,M=_.length;g<M;g++)v.push(_[g].clone(t));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,v=u.length;d<v;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Hx=0;class _o extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=go(),this.name="",this.type="Material",this.blending=co,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Of,this.blendDst=kf,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){ht(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ht(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(s.blending=this.blending),this.side!==Xr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Of&&(s.blendSrc=this.blendSrc),this.blendDst!==kf&&(s.blendDst=this.blendDst),this.blendEquation!==ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const u=[];for(const h in l){const p=l[h];delete p.metadata,u.push(p)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ur=new te,gf=new te,Cl=new te,zr=new te,vf=new te,Rl=new te,_f=new te;class zh{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){gf.copy(e).add(t).multiplyScalar(.5),Cl.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(gf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Cl),h=zr.dot(this.direction),p=-zr.dot(Cl),d=zr.lengthSq(),v=Math.abs(1-u*u);let _,g,M,E;if(v>0)if(_=u*p-h,g=u*h-p,E=l*v,_>=0)if(g>=-E)if(g<=E){const C=1/v;_*=C,g*=C,M=_*(_+u*g+2*h)+g*(u*_+g+2*p)+d}else g=l,_=Math.max(0,-(u*g+h)),M=-_*_+g*(g+2*p)+d;else g=-l,_=Math.max(0,-(u*g+h)),M=-_*_+g*(g+2*p)+d;else g<=-E?(_=Math.max(0,-(-u*l+h)),g=_>0?-l:Math.min(Math.max(-l,-p),l),M=-_*_+g*(g+2*p)+d):g<=E?(_=0,g=Math.min(Math.max(-l,-p),l),M=g*(g+2*p)+d):(_=Math.max(0,-(u*l+h)),g=_>0?l:Math.min(Math.max(-l,-p),l),M=-_*_+g*(g+2*p)+d);else g=u>0?-l:l,_=Math.max(0,-(u*g+h)),M=-_*_+g*(g+2*p)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(gf).addScaledVector(Cl,g),M}intersectSphere(e,t){ur.subVectors(e.center,this.origin);const s=ur.dot(this.direction),a=ur.dot(ur)-s*s,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),h=s-u,p=s+u;return p<0?null:h<0?this.at(p,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,u,h,p;const d=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return d>=0?(s=(e.min.x-g.x)*d,a=(e.max.x-g.x)*d):(s=(e.max.x-g.x)*d,a=(e.min.x-g.x)*d),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),s>u||l>a||((l>s||isNaN(s))&&(s=l),(u<a||isNaN(a))&&(a=u),_>=0?(h=(e.min.z-g.z)*_,p=(e.max.z-g.z)*_):(h=(e.max.z-g.z)*_,p=(e.min.z-g.z)*_),s>p||h>a)||((h>s||s!==s)&&(s=h),(p<a||a!==a)&&(a=p),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,s,a,l){vf.subVectors(t,e),Rl.subVectors(s,e),_f.crossVectors(vf,Rl);let u=this.direction.dot(_f),h;if(u>0){if(a)return null;h=1}else if(u<0)h=-1,u=-u;else return null;zr.subVectors(this.origin,e);const p=h*this.direction.dot(Rl.crossVectors(zr,Rl));if(p<0)return null;const d=h*this.direction.dot(vf.cross(zr));if(d<0||p+d>u)return null;const v=-h*zr.dot(_f);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mg extends _o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xs,this.combine=q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vm=new on,us=new zh,bl=new vo,Gm=new te,Pl=new te,Ll=new te,Il=new te,xf=new te,Dl=new te,Wm=new te,Nl=new te;class si extends Vn{constructor(e=new Zn,t=new mg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(l&&h){Dl.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const v=h[p],_=l[p];v!==0&&(xf.fromBufferAttribute(_,e),u?Dl.addScaledVector(xf,v):Dl.addScaledVector(xf.sub(t),v))}t.add(Dl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),bl.copy(s.boundingSphere),bl.applyMatrix4(l),us.copy(e.ray).recast(e.near),!(bl.containsPoint(us.origin)===!1&&(us.intersectSphere(bl,Gm)===null||us.origin.distanceToSquared(Gm)>(e.far-e.near)**2))&&(Vm.copy(l).invert(),us.copy(e.ray).applyMatrix4(Vm),!(s.boundingBox!==null&&us.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,s){let a;const l=this.geometry,u=this.material,h=l.index,p=l.attributes.position,d=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,g=l.groups,M=l.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,C=g.length;E<C;E++){const x=g[E],S=u[x.materialIndex],R=Math.max(x.start,M.start),I=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let L=R,V=I;L<V;L+=3){const D=h.getX(L),B=h.getX(L+1),w=h.getX(L+2);a=Ul(this,S,e,s,d,v,_,D,B,w),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let x=E,S=C;x<S;x+=3){const R=h.getX(x),I=h.getX(x+1),L=h.getX(x+2);a=Ul(this,u,e,s,d,v,_,R,I,L),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,C=g.length;E<C;E++){const x=g[E],S=u[x.materialIndex],R=Math.max(x.start,M.start),I=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let L=R,V=I;L<V;L+=3){const D=L,B=L+1,w=L+2;a=Ul(this,S,e,s,d,v,_,D,B,w),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let x=E,S=C;x<S;x+=3){const R=x,I=x+1,L=x+2;a=Ul(this,u,e,s,d,v,_,R,I,L),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function Vx(r,e,t,s,a,l,u,h){let p;if(e.side===Yn?p=s.intersectTriangle(u,l,a,!0,h):p=s.intersectTriangle(a,l,u,e.side===Xr,h),p===null)return null;Nl.copy(h),Nl.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(Nl);return d<t.near||d>t.far?null:{distance:d,point:Nl.clone(),object:r}}function Ul(r,e,t,s,a,l,u,h,p,d){r.getVertexPosition(h,Pl),r.getVertexPosition(p,Ll),r.getVertexPosition(d,Il);const v=Vx(r,e,t,s,Pl,Ll,Il,Wm);if(v){const _=new te;Ui.getBarycoord(Wm,Pl,Ll,Il,_),a&&(v.uv=Ui.getInterpolatedAttribute(a,h,p,d,_,new Ut)),l&&(v.uv1=Ui.getInterpolatedAttribute(l,h,p,d,_,new Ut)),u&&(v.normal=Ui.getInterpolatedAttribute(u,h,p,d,_,new te),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:h,b:p,c:d,normal:new te,materialIndex:0};Ui.getNormal(Pl,Ll,Il,g.normal),v.face=g,v.barycoord=_}return v}class gg extends Dn{constructor(e=null,t=1,s=1,a,l,u,h,p,d=dn,v=dn,_,g){super(null,u,h,p,d,v,a,l,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sf=new te,Gx=new te,Wx=new St;class hs{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Sf.subVectors(s,t).cross(Gx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const a=e.delta(Sf),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Wx.getNormalMatrix(e),a=this.coplanarPoint(Sf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new vo,Xx=new Ut(.5,.5),Fl=new te;class vg{constructor(e=new hs,t=new hs,s=new hs,a=new hs,l=new hs,u=new hs){this.planes=[e,t,s,a,l,u]}set(e,t,s,a,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(s),h[3].copy(a),h[4].copy(l),h[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Xi,s=!1){const a=this.planes,l=e.elements,u=l[0],h=l[1],p=l[2],d=l[3],v=l[4],_=l[5],g=l[6],M=l[7],E=l[8],C=l[9],x=l[10],S=l[11],R=l[12],I=l[13],L=l[14],V=l[15];if(a[0].setComponents(d-u,M-v,S-E,V-R).normalize(),a[1].setComponents(d+u,M+v,S+E,V+R).normalize(),a[2].setComponents(d+h,M+_,S+C,V+I).normalize(),a[3].setComponents(d-h,M-_,S-C,V-I).normalize(),s)a[4].setComponents(p,g,x,L).normalize(),a[5].setComponents(d-p,M-g,S-x,V-L).normalize();else if(a[4].setComponents(d-p,M-g,S-x,V-L).normalize(),t===Xi)a[5].setComponents(d+p,M+g,S+x,V+L).normalize();else if(t===sc)a[5].setComponents(p,g,x,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);const t=Xx.distanceTo(e.center);return fs.radius=.7071067811865476+t,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Fl.x=a.normal.x>0?e.max.x:e.min.x,Fl.y=a.normal.y>0?e.max.y:e.min.y,Fl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jx extends _o{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ac=new te,lc=new te,Xm=new on,ia=new zh,Ol=new vo,Mf=new te,jm=new te;class qx extends Vn{constructor(e=new Zn,t=new jx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,l=t.count;a<l;a++)ac.fromBufferAttribute(t,a-1),lc.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=ac.distanceTo(lc);e.setAttribute("lineDistance",new Ki(s,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ol.copy(s.boundingSphere),Ol.applyMatrix4(a),Ol.radius+=l,e.ray.intersectsSphere(Ol)===!1)return;Xm.copy(a).invert(),ia.copy(e.ray).applyMatrix4(Xm);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const M=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let C=M,x=E-1;C<x;C+=d){const S=v.getX(C),R=v.getX(C+1),I=kl(this,e,ia,p,S,R,C);I&&t.push(I)}if(this.isLineLoop){const C=v.getX(E-1),x=v.getX(M),S=kl(this,e,ia,p,C,x,E-1);S&&t.push(S)}}else{const M=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let C=M,x=E-1;C<x;C+=d){const S=kl(this,e,ia,p,C,C+1,C);S&&t.push(S)}if(this.isLineLoop){const C=kl(this,e,ia,p,E-1,M,E-1);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function kl(r,e,t,s,a,l,u){const h=r.geometry.attributes.position;if(ac.fromBufferAttribute(h,a),lc.fromBufferAttribute(h,l),t.distanceSqToSegment(ac,lc,Mf,jm)>s)return;Mf.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(Mf);if(!(d<e.near||d>e.far))return{distance:d,point:jm.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}class Kx extends _o{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qm=new on,Ah=new zh,Bl=new vo,zl=new te;class Yx extends Vn{constructor(e=new Zn,t=new Kx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Bl.copy(s.boundingSphere),Bl.applyMatrix4(a),Bl.radius+=l,e.ray.intersectsSphere(Bl)===!1)return;qm.copy(a).invert(),Ah.copy(e.ray).applyMatrix4(qm);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=s.index,_=s.attributes.position;if(d!==null){const g=Math.max(0,u.start),M=Math.min(d.count,u.start+u.count);for(let E=g,C=M;E<C;E++){const x=d.getX(E);zl.fromBufferAttribute(_,x),Km(zl,x,p,a,e,t,this)}}else{const g=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let E=g,C=M;E<C;E++)zl.fromBufferAttribute(_,E),Km(zl,E,p,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Km(r,e,t,s,a,l,u){const h=Ah.distanceSqToPoint(r);if(h<t){const p=new te;Ah.closestPointToPoint(r,p),p.applyMatrix4(s);const d=a.ray.origin.distanceTo(p);if(d<a.near||d>a.far)return;l.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class _g extends Dn{constructor(e=[],t=vs,s,a,l,u,h,p,d,v){super(e,t,s,a,l,u,h,p,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zx extends Dn{constructor(e,t,s,a,l,u,h,p,d){super(e,t,s,a,l,u,h,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class po extends Dn{constructor(e,t,s=Yi,a,l,u,h=dn,p=dn,d,v=gr,_=1){if(v!==gr&&v!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,a,l,u,h,p,v,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qx extends po{constructor(e,t=Yi,s=vs,a,l,u=dn,h=dn,p,d=gr){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,t,s,a,l,u,h,p,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xg extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class va extends Zn{constructor(e=1,t=1,s=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:u};const h=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const p=[],d=[],v=[],_=[];let g=0,M=0;E("z","y","x",-1,-1,s,t,e,u,l,0),E("z","y","x",1,-1,s,t,-e,u,l,1),E("x","z","y",1,1,e,s,t,a,u,2),E("x","z","y",1,-1,e,s,-t,a,u,3),E("x","y","z",1,-1,e,t,s,a,l,4),E("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(p),this.setAttribute("position",new Ki(d,3)),this.setAttribute("normal",new Ki(v,3)),this.setAttribute("uv",new Ki(_,2));function E(C,x,S,R,I,L,V,D,B,w,F){const Y=L/B,z=V/w,Q=L/2,oe=V/2,ie=D/2,j=B+1,$=w+1;let X=0,q=0;const O=new te;for(let J=0;J<$;J++){const b=J*z-oe;for(let N=0;N<j;N++){const _e=N*Y-Q;O[C]=_e*R,O[x]=b*I,O[S]=ie,d.push(O.x,O.y,O.z),O[C]=0,O[x]=0,O[S]=D>0?1:-1,v.push(O.x,O.y,O.z),_.push(N/B),_.push(1-J/w),X+=1}}for(let J=0;J<w;J++)for(let b=0;b<B;b++){const N=g+b+j*J,_e=g+b+j*(J+1),xe=g+(b+1)+j*(J+1),pe=g+(b+1)+j*J;p.push(N,_e,pe),p.push(_e,xe,pe),q+=6}h.addGroup(M,q,F),M+=q,g+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fc extends Zn{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,u=t/2,h=Math.floor(s),p=Math.floor(a),d=h+1,v=p+1,_=e/h,g=t/p,M=[],E=[],C=[],x=[];for(let S=0;S<v;S++){const R=S*g-u;for(let I=0;I<d;I++){const L=I*_-l;E.push(L,-R,0),C.push(0,0,1),x.push(I/h),x.push(1-S/p)}}for(let S=0;S<p;S++)for(let R=0;R<h;R++){const I=R+d*S,L=R+d*(S+1),V=R+1+d*(S+1),D=R+1+d*S;M.push(I,L,D),M.push(L,V,D)}this.setIndex(M),this.setAttribute("position",new Ki(E,3)),this.setAttribute("normal",new Ki(C,3)),this.setAttribute("uv",new Ki(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.width,e.height,e.widthSegments,e.heightSegments)}}function mo(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];if(Ym(a))a.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone();else if(Array.isArray(a))if(Ym(a[0])){const l=[];for(let u=0,h=a.length;u<h;u++)l[u]=a[u].clone();e[t][s]=l}else e[t][s]=a.slice();else e[t][s]=a}}return e}function Hn(r){const e={};for(let t=0;t<r.length;t++){const s=mo(r[t]);for(const a in s)e[a]=s[a]}return e}function Ym(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Jx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Sg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const $x={clone:mo,merge:Hn};var eS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends _o{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eS,this.fragmentShader=tS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=Jx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class nS extends xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class iS extends _o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rS extends _o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hl=new te,Vl=new dr,Vi=new te;class Mg extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hl,Vl,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Vl,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Hl,Vl,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Vl,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new te,Zm=new Ut,Qm=new Ut;class gi extends Mg{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,t){return this.getViewBounds(e,Zm,Qm),t.subVectors(Qm,Zm)}setViewOffset(e,t,s,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fa*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;l+=u.offsetX*a/p,t-=u.offsetY*s/d,a*=u.width/p,s*=u.height/d}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class yg extends Mg{constructor(e=-1,t=1,s=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,u=s+e,h=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,u=l+d*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const to=-90,no=1;class sS extends Vn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new gi(to,no,e,t);a.layers=this.layers,this.add(a);const l=new gi(to,no,e,t);l.layers=this.layers,this.add(l);const u=new gi(to,no,e,t);u.layers=this.layers,this.add(u);const h=new gi(to,no,e,t);h.layers=this.layers,this.add(h);const p=new gi(to,no,e,t);p.layers=this.layers,this.add(p);const d=new gi(to,no,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,u,h,p]=t;for(const d of t)this.remove(d);if(e===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===sc)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,p,d,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(s,0,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,2,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,3,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(s,4,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(_,g,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class oS extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const jh=class jh{constructor(e,t,s,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=a,this}};jh.prototype.isMatrix2=!0;let Jm=jh;function $m(r,e,t,s){const a=aS(s);switch(t){case og:return r*e;case lg:return r*e/a.components*a.byteLength;case Dh:return r*e/a.components*a.byteLength;case _s:return r*e*2/a.components*a.byteLength;case Nh:return r*e*2/a.components*a.byteLength;case ag:return r*e*3/a.components*a.byteLength;case _i:return r*e*4/a.components*a.byteLength;case Uh:return r*e*4/a.components*a.byteLength;case ql:case Kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Yl:case Zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kf:case Zf:return Math.max(r,16)*Math.max(e,8)/4;case qf:case Yf:return Math.max(r,8)*Math.max(e,8)/2;case Qf:case Jf:case eh:case th:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $f:case tc:case nh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case sh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case oh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case lh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case fh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case hh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case dh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ph:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case mh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case gh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case vh:case _h:case xh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Sh:case Mh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case nc:case yh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function aS(r){switch(r){case vi:case ng:return{byteLength:1,components:1};case da:case ig:case mr:return{byteLength:2,components:1};case Lh:case Ih:return{byteLength:2,components:4};case Yi:case Ph:case Fi:return{byteLength:4,components:1};case rg:case sg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Eg(){let r=null,e=!1,t=null,s=null;function a(l,u){t(l,u),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function lS(r){const e=new WeakMap;function t(h,p){const d=h.array,v=h.usage,_=d.byteLength,g=r.createBuffer();r.bindBuffer(p,g),r.bufferData(p,d,v),h.onUploadCallback();let M;if(d instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=r.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=r.SHORT;else if(d instanceof Uint32Array)M=r.UNSIGNED_INT;else if(d instanceof Int32Array)M=r.INT;else if(d instanceof Int8Array)M=r.BYTE;else if(d instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,p,d){const v=p.array,_=p.updateRanges;if(r.bindBuffer(d,h),_.length===0)r.bufferSubData(d,0,v);else{_.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<_.length;M++){const E=_[g],C=_[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,_[g]=C)}_.length=g+1;for(let M=0,E=_.length;M<E;M++){const C=_[M];r.bufferSubData(d,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(r.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,t(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,h,p),d.version=h.version}}return{get:a,remove:l,update:u}}var cS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uS=`#ifdef USE_ALPHAHASH
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
#endif`,fS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mS=`#ifdef USE_AOMAP
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
#endif`,gS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vS=`#ifdef USE_BATCHING
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
#endif`,_S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yS=`#ifdef USE_IRIDESCENCE
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
#endif`,ES=`#ifdef USE_BUMPMAP
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
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,PS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,LS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,IS=`#define PI 3.141592653589793
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
} // validated`,DS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NS=`vec3 transformedNormal = objectNormal;
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
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BS="gl_FragColor = linearToOutputTexel( gl_FragColor );",zS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HS=`#ifdef USE_ENVMAP
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
#endif`,VS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
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
#endif`,WS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
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
#endif`,jS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qS=`#ifdef USE_FOG
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
#endif`,ZS=`#ifdef USE_GRADIENTMAP
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
}`,QS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,tM=`#ifdef USE_ENVMAP
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
#endif`,nM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oM=`PhysicalMaterial material;
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
#endif`,aM=`uniform sampler2D dfgLUT;
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
}`,lM=`
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
#endif`,cM=`#if defined( RE_IndirectDiffuse )
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
#endif`,uM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,hM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xM=`#if defined( USE_POINTS_UV )
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
#endif`,SM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wM=`#ifdef USE_MORPHTARGETS
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
#endif`,TM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,RM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IM=`#ifdef USE_NORMALMAP
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
#endif`,DM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,BM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZM=`#ifdef USE_SKINNING
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
#endif`,QM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JM=`#ifdef USE_SKINNING
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
#endif`,$M=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ey=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ty=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ny=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iy=`#ifdef USE_TRANSMISSION
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
#endif`,ry=`#ifdef USE_TRANSMISSION
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
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ly=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uy=`uniform sampler2D t2D;
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
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`#include <common>
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
}`,gy=`#if DEPTH_PACKING == 3200
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
}`,vy=`#define DISTANCE
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
}`,_y=`#define DISTANCE
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`uniform float scale;
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
}`,yy=`uniform vec3 diffuse;
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
}`,Ey=`#include <common>
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
}`,Ay=`uniform vec3 diffuse;
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
}`,wy=`#define LAMBERT
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
}`,Ty=`#define LAMBERT
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
}`,Cy=`#define MATCAP
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
}`,Ry=`#define MATCAP
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
}`,by=`#define NORMAL
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
}`,Py=`#define NORMAL
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
}`,Ly=`#define PHONG
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
}`,Iy=`#define PHONG
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
}`,Dy=`#define STANDARD
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
}`,Ny=`#define STANDARD
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
}`,Uy=`#define TOON
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
}`,Fy=`#define TOON
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
}`,Oy=`uniform float size;
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
}`,ky=`uniform vec3 diffuse;
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
}`,By=`#include <common>
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
}`,zy=`uniform vec3 color;
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
}`,Hy=`uniform float rotation;
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
}`,Vy=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:cS,alphahash_pars_fragment:uS,alphamap_fragment:fS,alphamap_pars_fragment:hS,alphatest_fragment:dS,alphatest_pars_fragment:pS,aomap_fragment:mS,aomap_pars_fragment:gS,batching_pars_vertex:vS,batching_vertex:_S,begin_vertex:xS,beginnormal_vertex:SS,bsdfs:MS,iridescence_fragment:yS,bumpmap_pars_fragment:ES,clipping_planes_fragment:AS,clipping_planes_pars_fragment:wS,clipping_planes_pars_vertex:TS,clipping_planes_vertex:CS,color_fragment:RS,color_pars_fragment:bS,color_pars_vertex:PS,color_vertex:LS,common:IS,cube_uv_reflection_fragment:DS,defaultnormal_vertex:NS,displacementmap_pars_vertex:US,displacementmap_vertex:FS,emissivemap_fragment:OS,emissivemap_pars_fragment:kS,colorspace_fragment:BS,colorspace_pars_fragment:zS,envmap_fragment:HS,envmap_common_pars_fragment:VS,envmap_pars_fragment:GS,envmap_pars_vertex:WS,envmap_physical_pars_fragment:tM,envmap_vertex:XS,fog_vertex:jS,fog_pars_vertex:qS,fog_fragment:KS,fog_pars_fragment:YS,gradientmap_pars_fragment:ZS,lightmap_pars_fragment:QS,lights_lambert_fragment:JS,lights_lambert_pars_fragment:$S,lights_pars_begin:eM,lights_toon_fragment:nM,lights_toon_pars_fragment:iM,lights_phong_fragment:rM,lights_phong_pars_fragment:sM,lights_physical_fragment:oM,lights_physical_pars_fragment:aM,lights_fragment_begin:lM,lights_fragment_maps:cM,lights_fragment_end:uM,lightprobes_pars_fragment:fM,logdepthbuf_fragment:hM,logdepthbuf_pars_fragment:dM,logdepthbuf_pars_vertex:pM,logdepthbuf_vertex:mM,map_fragment:gM,map_pars_fragment:vM,map_particle_fragment:_M,map_particle_pars_fragment:xM,metalnessmap_fragment:SM,metalnessmap_pars_fragment:MM,morphinstance_vertex:yM,morphcolor_vertex:EM,morphnormal_vertex:AM,morphtarget_pars_vertex:wM,morphtarget_vertex:TM,normal_fragment_begin:CM,normal_fragment_maps:RM,normal_pars_fragment:bM,normal_pars_vertex:PM,normal_vertex:LM,normalmap_pars_fragment:IM,clearcoat_normal_fragment_begin:DM,clearcoat_normal_fragment_maps:NM,clearcoat_pars_fragment:UM,iridescence_pars_fragment:FM,opaque_fragment:OM,packing:kM,premultiplied_alpha_fragment:BM,project_vertex:zM,dithering_fragment:HM,dithering_pars_fragment:VM,roughnessmap_fragment:GM,roughnessmap_pars_fragment:WM,shadowmap_pars_fragment:XM,shadowmap_pars_vertex:jM,shadowmap_vertex:qM,shadowmask_pars_fragment:KM,skinbase_vertex:YM,skinning_pars_vertex:ZM,skinning_vertex:QM,skinnormal_vertex:JM,specularmap_fragment:$M,specularmap_pars_fragment:ey,tonemapping_fragment:ty,tonemapping_pars_fragment:ny,transmission_fragment:iy,transmission_pars_fragment:ry,uv_pars_fragment:sy,uv_pars_vertex:oy,uv_vertex:ay,worldpos_vertex:ly,background_vert:cy,background_frag:uy,backgroundCube_vert:fy,backgroundCube_frag:hy,cube_vert:dy,cube_frag:py,depth_vert:my,depth_frag:gy,distance_vert:vy,distance_frag:_y,equirect_vert:xy,equirect_frag:Sy,linedashed_vert:My,linedashed_frag:yy,meshbasic_vert:Ey,meshbasic_frag:Ay,meshlambert_vert:wy,meshlambert_frag:Ty,meshmatcap_vert:Cy,meshmatcap_frag:Ry,meshnormal_vert:by,meshnormal_frag:Py,meshphong_vert:Ly,meshphong_frag:Iy,meshphysical_vert:Dy,meshphysical_frag:Ny,meshtoon_vert:Uy,meshtoon_frag:Fy,points_vert:Oy,points_frag:ky,shadow_vert:By,shadow_frag:zy,sprite_vert:Hy,sprite_frag:Vy},Ve={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},Wi={basic:{uniforms:Hn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Hn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Hn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Hn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Hn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Bt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Hn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Hn([Ve.points,Ve.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Hn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Hn([Ve.common,Ve.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Hn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Hn([Ve.sprite,Ve.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:Hn([Ve.common,Ve.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:Hn([Ve.lights,Ve.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Wi.physical={uniforms:Hn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Gl={r:0,b:0,g:0},Gy=new on,Ag=new St;Ag.set(-1,0,0,0,1,0,0,0,1);function Wy(r,e,t,s,a,l){const u=new Bt(0);let h=a===!0?0:1,p,d,v=null,_=0,g=null;function M(R){let I=R.isScene===!0?R.background:null;if(I&&I.isTexture){const L=R.backgroundBlurriness>0;I=e.get(I,L)}return I}function E(R){let I=!1;const L=M(R);L===null?x(u,h):L&&L.isColor&&(x(L,1),I=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?t.buffers.color.setClear(0,0,0,1,l):V==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(R,I){const L=M(I);L&&(L.isCubeTexture||L.mapping===uc)?(d===void 0&&(d=new si(new va(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:mo(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(V,D,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=L,d.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(I.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Ag),d.material.toneMapped=bt.getTransfer(L.colorSpace)!==Ht,(v!==L||_!==L.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,v=L,_=L.version,g=r.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new si(new fc(2,2),new xi({name:"BackgroundMaterial",uniforms:mo(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=bt.getTransfer(L.colorSpace)!==Ht,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||_!==L.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=L,_=L.version,g=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function x(R,I){R.getRGB(Gl,Sg(r)),t.buffers.color.setClear(Gl.r,Gl.g,Gl.b,I,l)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,I=1){u.set(R),h=I,x(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,x(u,h)},render:E,addToRenderList:C,dispose:S}}function Xy(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=g(null);let l=a,u=!1;function h(z,Q,oe,ie,j){let $=!1;const X=_(z,ie,oe,Q);l!==X&&(l=X,d(l.object)),$=M(z,ie,oe,j),$&&E(z,ie,oe,j),j!==null&&e.update(j,r.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,L(z,Q,oe,ie),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function p(){return r.createVertexArray()}function d(z){return r.bindVertexArray(z)}function v(z){return r.deleteVertexArray(z)}function _(z,Q,oe,ie){const j=ie.wireframe===!0;let $=s[Q.id];$===void 0&&($={},s[Q.id]=$);const X=z.isInstancedMesh===!0?z.id:0;let q=$[X];q===void 0&&(q={},$[X]=q);let O=q[oe.id];O===void 0&&(O={},q[oe.id]=O);let J=O[j];return J===void 0&&(J=g(p()),O[j]=J),J}function g(z){const Q=[],oe=[],ie=[];for(let j=0;j<t;j++)Q[j]=0,oe[j]=0,ie[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:oe,attributeDivisors:ie,object:z,attributes:{},index:null}}function M(z,Q,oe,ie){const j=l.attributes,$=Q.attributes;let X=0;const q=oe.getAttributes();for(const O in q)if(q[O].location>=0){const b=j[O];let N=$[O];if(N===void 0&&(O==="instanceMatrix"&&z.instanceMatrix&&(N=z.instanceMatrix),O==="instanceColor"&&z.instanceColor&&(N=z.instanceColor)),b===void 0||b.attribute!==N||N&&b.data!==N.data)return!0;X++}return l.attributesNum!==X||l.index!==ie}function E(z,Q,oe,ie){const j={},$=Q.attributes;let X=0;const q=oe.getAttributes();for(const O in q)if(q[O].location>=0){let b=$[O];b===void 0&&(O==="instanceMatrix"&&z.instanceMatrix&&(b=z.instanceMatrix),O==="instanceColor"&&z.instanceColor&&(b=z.instanceColor));const N={};N.attribute=b,b&&b.data&&(N.data=b.data),j[O]=N,X++}l.attributes=j,l.attributesNum=X,l.index=ie}function C(){const z=l.newAttributes;for(let Q=0,oe=z.length;Q<oe;Q++)z[Q]=0}function x(z){S(z,0)}function S(z,Q){const oe=l.newAttributes,ie=l.enabledAttributes,j=l.attributeDivisors;oe[z]=1,ie[z]===0&&(r.enableVertexAttribArray(z),ie[z]=1),j[z]!==Q&&(r.vertexAttribDivisor(z,Q),j[z]=Q)}function R(){const z=l.newAttributes,Q=l.enabledAttributes;for(let oe=0,ie=Q.length;oe<ie;oe++)Q[oe]!==z[oe]&&(r.disableVertexAttribArray(oe),Q[oe]=0)}function I(z,Q,oe,ie,j,$,X){X===!0?r.vertexAttribIPointer(z,Q,oe,j,$):r.vertexAttribPointer(z,Q,oe,ie,j,$)}function L(z,Q,oe,ie){C();const j=ie.attributes,$=oe.getAttributes(),X=Q.defaultAttributeValues;for(const q in $){const O=$[q];if(O.location>=0){let J=j[q];if(J===void 0&&(q==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),q==="instanceColor"&&z.instanceColor&&(J=z.instanceColor)),J!==void 0){const b=J.normalized,N=J.itemSize,_e=e.get(J);if(_e===void 0)continue;const xe=_e.buffer,pe=_e.type,H=_e.bytesPerElement,ue=pe===r.INT||pe===r.UNSIGNED_INT||J.gpuType===Ph;if(J.isInterleavedBufferAttribute){const fe=J.data,Ae=fe.stride,Le=J.offset;if(fe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<O.locationSize;Oe++)S(O.location+Oe,fe.meshPerAttribute);z.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Oe=0;Oe<O.locationSize;Oe++)x(O.location+Oe);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let Oe=0;Oe<O.locationSize;Oe++)I(O.location+Oe,N/O.locationSize,pe,b,Ae*H,(Le+N/O.locationSize*Oe)*H,ue)}else{if(J.isInstancedBufferAttribute){for(let fe=0;fe<O.locationSize;fe++)S(O.location+fe,J.meshPerAttribute);z.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let fe=0;fe<O.locationSize;fe++)x(O.location+fe);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let fe=0;fe<O.locationSize;fe++)I(O.location+fe,N/O.locationSize,pe,b,N*H,N/O.locationSize*fe*H,ue)}}else if(X!==void 0){const b=X[q];if(b!==void 0)switch(b.length){case 2:r.vertexAttrib2fv(O.location,b);break;case 3:r.vertexAttrib3fv(O.location,b);break;case 4:r.vertexAttrib4fv(O.location,b);break;default:r.vertexAttrib1fv(O.location,b)}}}}R()}function V(){F();for(const z in s){const Q=s[z];for(const oe in Q){const ie=Q[oe];for(const j in ie){const $=ie[j];for(const X in $)v($[X].object),delete $[X];delete ie[j]}}delete s[z]}}function D(z){if(s[z.id]===void 0)return;const Q=s[z.id];for(const oe in Q){const ie=Q[oe];for(const j in ie){const $=ie[j];for(const X in $)v($[X].object),delete $[X];delete ie[j]}}delete s[z.id]}function B(z){for(const Q in s){const oe=s[Q];for(const ie in oe){const j=oe[ie];if(j[z.id]===void 0)continue;const $=j[z.id];for(const X in $)v($[X].object),delete $[X];delete j[z.id]}}}function w(z){for(const Q in s){const oe=s[Q],ie=z.isInstancedMesh===!0?z.id:0,j=oe[ie];if(j!==void 0){for(const $ in j){const X=j[$];for(const q in X)v(X[q].object),delete X[q];delete j[$]}delete oe[ie],Object.keys(oe).length===0&&delete s[Q]}}}function F(){Y(),u=!0,l!==a&&(l=a,d(l.object))}function Y(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:F,resetDefaultState:Y,dispose:V,releaseStatesOfGeometry:D,releaseStatesOfObject:w,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:x,disableUnusedAttributes:R}}function jy(r,e,t){let s;function a(p){s=p}function l(p,d){r.drawArrays(s,p,d),t.update(d,s,1)}function u(p,d,v){v!==0&&(r.drawArraysInstanced(s,p,d,v),t.update(d,s,v))}function h(p,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,d,0,v);let g=0;for(let M=0;M<v;M++)g+=d[M];t.update(g,s,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function qy(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(B){return!(B!==_i&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const w=B===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==vi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Fi&&!w)}function p(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const v=p(d);v!==d&&(ht("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=r.getParameter(r.MAX_SAMPLES),D=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:R,maxVaryings:I,maxFragmentUniforms:L,maxSamples:V,samples:D}}function Ky(r){const e=this;let t=null,s=0,a=!1,l=!1;const u=new hs,h=new St,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const M=_.length!==0||g||s!==0||a;return a=g,s=_.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=v(_,g,0)},this.setState=function(_,g,M){const E=_.clippingPlanes,C=_.clipIntersection,x=_.clipShadows,S=r.get(_);if(!a||E===null||E.length===0||l&&!x)l?v(null):d();else{const R=l?0:s,I=R*4;let L=S.clippingState||null;p.value=L,L=v(E,g,I,M);for(let V=0;V!==I;++V)L[V]=t[V];S.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function d(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(_,g,M,E){const C=_!==null?_.length:0;let x=null;if(C!==0){if(x=p.value,E!==!0||x===null){const S=M+C*4,R=g.matrixWorldInverse;h.getNormalMatrix(R),(x===null||x.length<S)&&(x=new Float32Array(S));for(let I=0,L=M;I!==C;++I,L+=4)u.copy(_[I]).applyMatrix4(R,h),u.normal.toArray(x,L),x[L+3]=u.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,x}}const Wr=4,e0=[.125,.215,.35,.446,.526,.582],ps=20,Yy=256,ra=new yg,t0=new Bt;let yf=null,Ef=0,Af=0,wf=!1;const Zy=new te;class n0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,a=100,l={}){const{size:u=256,position:h=Zy}=l;yf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,a,p,h),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yf,Ef,Af),this._renderer.xr.enabled=wf,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:mr,format:_i,colorSpace:ic,depthBuffer:!1},a=i0(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=i0(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Qy(l)),this._blurMaterial=$y(l,e,t),this._ggxMaterial=Jy(l,e,t)}return a}_compileMaterial(e){const t=new si(new Zn,e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,s,a,l){const p=new gi(90,1,t,s),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,M=_.toneMapping;_.getClearColor(t0),_.toneMapping=ji,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new si(new va,new mg({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,x=C.material;let S=!1;const R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,S=!0):(x.color.copy(t0),S=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(p.up.set(0,d[I],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+v[I],l.y,l.z)):L===1?(p.up.set(0,0,d[I]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+v[I],l.z)):(p.up.set(0,d[I],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+v[I]));const V=this._cubeSize;io(a,L*V,I>2?V:0,V,V),_.setRenderTarget(a),S&&_.render(C,p),_.render(e,p)}_.toneMapping=M,_.autoClear=g,e.background=R}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===vs||e.mapping===ho;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=s0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r0());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const h=l.uniforms;h.envMap.value=e;const p=this._cubeSize;io(t,0,0,3*p,2*p),s.setRenderTarget(t),s.render(u,ra)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[s];h.material=u;const p=u.uniforms,d=s/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),_=Math.sqrt(d*d-v*v),g=0+d*1.25,M=_*g,{_lodMax:E}=this,C=this._sizeLods[s],x=3*C*(s>E-Wr?s-E+Wr:0),S=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=E-t,io(l,x,S,3*C,2*C),a.setRenderTarget(l),a.render(h,ra),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=E-s,io(e,x,S,3*C,2*C),a.setRenderTarget(e),a.render(h,ra)}_blur(e,t,s,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,a,"latitudinal",l),this._halfBlur(u,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[a];_.material=d;const g=d.uniforms,M=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*ps-1),C=l/E,x=isFinite(l)?1+Math.floor(v*C):ps;x>ps&&ht(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ps}`);const S=[];let R=0;for(let B=0;B<ps;++B){const w=B/C,F=Math.exp(-w*w/2);S.push(F),B===0?R+=F:B<x&&(R+=2*F)}for(let B=0;B<S.length;B++)S[B]=S[B]/R;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=S,g.latitudinal.value=u==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:I}=this;g.dTheta.value=E,g.mipInt.value=I-s;const L=this._sizeLods[a],V=3*L*(a>I-Wr?a-I+Wr:0),D=4*(this._cubeSize-L);io(t,V,D,3*L,2*L),p.setRenderTarget(t),p.render(_,ra)}}function Qy(r){const e=[],t=[],s=[];let a=r;const l=r-Wr+1+e0.length;for(let u=0;u<l;u++){const h=Math.pow(2,a);e.push(h);let p=1/h;u>r-Wr?p=e0[u-r+Wr-1]:u===0&&(p=0),t.push(p);const d=1/(h-2),v=-d,_=1+d,g=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,E=6,C=3,x=2,S=1,R=new Float32Array(C*E*M),I=new Float32Array(x*E*M),L=new Float32Array(S*E*M);for(let D=0;D<M;D++){const B=D%3*2/3-1,w=D>2?0:-1,F=[B,w,0,B+2/3,w,0,B+2/3,w+1,0,B,w,0,B+2/3,w+1,0,B,w+1,0];R.set(F,C*E*D),I.set(g,x*E*D);const Y=[D,D,D,D,D,D];L.set(Y,S*E*D)}const V=new Zn;V.setAttribute("position",new Xt(R,C)),V.setAttribute("uv",new Xt(I,x)),V.setAttribute("faceIndex",new Xt(L,S)),s.push(new si(V,null)),a>Wr&&a--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function i0(r,e,t){const s=new qi(r,e,t);return s.texture.mapping=uc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function io(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function Jy(r,e,t){return new xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function $y(r,e,t){const s=new Float32Array(ps),a=new te(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:hc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function r0(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function s0(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function hc(){return`

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
	`}class wg extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new _g(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new va(5,5,5),l=new xi({name:"CubemapFromEquirect",uniforms:mo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:hr});l.uniforms.tEquirect.value=t;const u=new si(a,l),h=t.minFilter;return t.minFilter===ms&&(t.minFilter=Mn),new sS(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,a);e.setRenderTarget(l)}}function eE(r){let e=new WeakMap,t=new WeakMap,s=null;function a(g,M=!1){return g==null?null:M?u(g):l(g)}function l(g){if(g&&g.isTexture){const M=g.mapping;if(M===Ku||M===Yu)if(e.has(g)){const E=e.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const C=new wg(E.height);return C.fromEquirectangularTexture(r,g),e.set(g,C),g.addEventListener("dispose",d),h(C.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,E=M===Ku||M===Yu,C=M===vs||M===ho;if(E||C){let x=t.get(g);const S=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new n0(r)),x=E?s.fromEquirectangular(g,x):s.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const R=g.image;return E&&R&&R.height>0||C&&R&&p(R)?(s===null&&(s=new n0(r)),x=E?s.fromEquirectangular(g):s.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",v),x.texture):null}}}return g}function h(g,M){return M===Ku?g.mapping=vs:M===Yu&&(g.mapping=ho),g}function p(g){let M=0;const E=6;for(let C=0;C<E;C++)g[C]!==void 0&&M++;return M===E}function d(g){const M=g.target;M.removeEventListener("dispose",d);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function _(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:a,dispose:_}}function tE(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const a=r.getExtension(s);return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&Eh("WebGLRenderer: "+s+" extension not supported."),a}}}function nE(r,e,t,s){const a={},l=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete a[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function h(_,g){return a[g.id]===!0||(g.addEventListener("dispose",u),a[g.id]=!0,t.memory.geometries++),g}function p(_){const g=_.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER)}function d(_){const g=[],M=_.index,E=_.attributes.position;let C=0;if(E===void 0)return;if(M!==null){const R=M.array;C=M.version;for(let I=0,L=R.length;I<L;I+=3){const V=R[I+0],D=R[I+1],B=R[I+2];g.push(V,D,D,B,B,V)}}else{const R=E.array;C=E.version;for(let I=0,L=R.length/3-1;I<L;I+=3){const V=I+0,D=I+1,B=I+2;g.push(V,D,D,B,B,V)}}const x=new(E.count>=65535?pg:dg)(g,1);x.version=C;const S=l.get(_);S&&e.remove(S),l.set(_,x)}function v(_){const g=l.get(_);if(g){const M=_.index;M!==null&&g.version<M.version&&d(_)}else d(_);return l.get(_)}return{get:h,update:p,getWireframeAttribute:v}}function iE(r,e,t){let s;function a(_){s=_}let l,u;function h(_){l=_.type,u=_.bytesPerElement}function p(_,g){r.drawElements(s,g,l,_*u),t.update(g,s,1)}function d(_,g,M){M!==0&&(r.drawElementsInstanced(s,g,l,_*u,M),t.update(g,s,M))}function v(_,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,l,_,0,M);let C=0;for(let x=0;x<M;x++)C+=g[x];t.update(C,s,1)}this.setMode=a,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=v}function rE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,h){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=h*(l/3);break;case r.LINES:t.lines+=h*(l/2);break;case r.LINE_STRIP:t.lines+=h*(l-1);break;case r.LINE_LOOP:t.lines+=h*l;break;case r.POINTS:t.points+=h*l;break;default:Dt("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function sE(r,e,t){const s=new WeakMap,a=new sn;function l(u,h,p){const d=u.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let g=s.get(h);if(g===void 0||g.count!==_){let F=function(){B.dispose(),s.delete(h),h.removeEventListener("dispose",F)};g!==void 0&&g.texture.dispose();const M=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let I=0;M===!0&&(I=1),E===!0&&(I=2),C===!0&&(I=3);let L=h.attributes.position.count*I,V=1;L>e.maxTextureSize&&(V=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const D=new Float32Array(L*V*4*_),B=new ug(D,L,V,_);B.type=Fi,B.needsUpdate=!0;const w=I*4;for(let Y=0;Y<_;Y++){const z=x[Y],Q=S[Y],oe=R[Y],ie=L*V*4*Y;for(let j=0;j<z.count;j++){const $=j*w;M===!0&&(a.fromBufferAttribute(z,j),D[ie+$+0]=a.x,D[ie+$+1]=a.y,D[ie+$+2]=a.z,D[ie+$+3]=0),E===!0&&(a.fromBufferAttribute(Q,j),D[ie+$+4]=a.x,D[ie+$+5]=a.y,D[ie+$+6]=a.z,D[ie+$+7]=0),C===!0&&(a.fromBufferAttribute(oe,j),D[ie+$+8]=a.x,D[ie+$+9]=a.y,D[ie+$+10]=a.z,D[ie+$+11]=oe.itemSize===4?a.w:1)}}g={count:_,texture:B,size:new Ut(L,V)},s.set(h,g),h.addEventListener("dispose",F)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let M=0;for(let C=0;C<d.length;C++)M+=d[C];const E=h.morphTargetsRelative?1:1-M;p.getUniforms().setValue(r,"morphTargetBaseInfluence",E),p.getUniforms().setValue(r,"morphTargetInfluences",d)}p.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:l}}function oE(r,e,t,s,a){let l=new WeakMap;function u(d){const v=a.render.frame,_=d.geometry,g=e.get(d,_);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),l.get(d)!==v&&(t.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,r.ARRAY_BUFFER),l.set(d,v))),d.isSkinnedMesh){const M=d.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return g}function h(){l=new WeakMap}function p(d){const v=d.target;v.removeEventListener("dispose",p),s.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:h}}const aE={[K0]:"LINEAR_TONE_MAPPING",[Y0]:"REINHARD_TONE_MAPPING",[Z0]:"CINEON_TONE_MAPPING",[Q0]:"ACES_FILMIC_TONE_MAPPING",[$0]:"AGX_TONE_MAPPING",[eg]:"NEUTRAL_TONE_MAPPING",[J0]:"CUSTOM_TONE_MAPPING"};function lE(r,e,t,s,a){const l=new qi(e,t,{type:r,depthBuffer:s,stencilBuffer:a,depthTexture:s?new po(e,t):void 0}),u=new qi(e,t,{type:mr,depthBuffer:!1,stencilBuffer:!1}),h=new Zn;h.setAttribute("position",new Ki([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ki([0,2,0,0,2,0],2));const p=new nS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new si(h,p),v=new yg(-1,1,1,-1,0,1);let _=null,g=null,M=!1,E,C=null,x=[],S=!1;this.setSize=function(R,I){l.setSize(R,I),u.setSize(R,I);for(let L=0;L<x.length;L++){const V=x[L];V.setSize&&V.setSize(R,I)}},this.setEffects=function(R){x=R,S=x.length>0&&x[0].isRenderPass===!0;const I=l.width,L=l.height;for(let V=0;V<x.length;V++){const D=x[V];D.setSize&&D.setSize(I,L)}},this.begin=function(R,I){if(M||R.toneMapping===ji&&x.length===0)return!1;if(C=I,I!==null){const L=I.width,V=I.height;(l.width!==L||l.height!==V)&&this.setSize(L,V)}return S===!1&&R.setRenderTarget(l),E=R.toneMapping,R.toneMapping=ji,!0},this.hasRenderPass=function(){return S},this.end=function(R,I){R.toneMapping=E,M=!0;let L=l,V=u;for(let D=0;D<x.length;D++){const B=x[D];if(B.enabled!==!1&&(B.render(R,V,L,I),B.needsSwap!==!1)){const w=L;L=V,V=w}}if(_!==R.outputColorSpace||g!==R.toneMapping){_=R.outputColorSpace,g=R.toneMapping,p.defines={},bt.getTransfer(_)===Ht&&(p.defines.SRGB_TRANSFER="");const D=aE[g];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,R.setRenderTarget(C),R.render(d,v),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),h.dispose(),p.dispose()}}const Tg=new Dn,wh=new po(1,1),Cg=new ug,Rg=new bx,bg=new _g,o0=[],a0=[],l0=new Float32Array(16),c0=new Float32Array(9),u0=new Float32Array(4);function xo(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=o0[a];if(l===void 0&&(l=new Float32Array(a),o0[a]=l),e!==0){s.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=t,r[u].toArray(l,h)}return l}function pn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function mn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function dc(r,e){let t=a0[e];t===void 0&&(t=new Int32Array(e),a0[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function cE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function uE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;r.uniform2fv(this.addr,e),mn(t,e)}}function fE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;r.uniform3fv(this.addr,e),mn(t,e)}}function hE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;r.uniform4fv(this.addr,e),mn(t,e)}}function dE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(pn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,s))return;u0.set(s),r.uniformMatrix2fv(this.addr,!1,u0),mn(t,s)}}function pE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(pn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,s))return;c0.set(s),r.uniformMatrix3fv(this.addr,!1,c0),mn(t,s)}}function mE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(pn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,s))return;l0.set(s),r.uniformMatrix4fv(this.addr,!1,l0),mn(t,s)}}function gE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function vE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;r.uniform2iv(this.addr,e),mn(t,e)}}function _E(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;r.uniform3iv(this.addr,e),mn(t,e)}}function xE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;r.uniform4iv(this.addr,e),mn(t,e)}}function SE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ME(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;r.uniform2uiv(this.addr,e),mn(t,e)}}function yE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;r.uniform3uiv(this.addr,e),mn(t,e)}}function EE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;r.uniform4uiv(this.addr,e),mn(t,e)}}function AE(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(wh.compareFunction=t.isReversedDepthBuffer()?Oh:Fh,l=wh):l=Tg,t.setTexture2D(e||l,a)}function wE(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||Rg,a)}function TE(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||bg,a)}function CE(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||Cg,a)}function RE(r){switch(r){case 5126:return cE;case 35664:return uE;case 35665:return fE;case 35666:return hE;case 35674:return dE;case 35675:return pE;case 35676:return mE;case 5124:case 35670:return gE;case 35667:case 35671:return vE;case 35668:case 35672:return _E;case 35669:case 35673:return xE;case 5125:return SE;case 36294:return ME;case 36295:return yE;case 36296:return EE;case 35678:case 36198:case 36298:case 36306:case 35682:return AE;case 35679:case 36299:case 36307:return wE;case 35680:case 36300:case 36308:case 36293:return TE;case 36289:case 36303:case 36311:case 36292:return CE}}function bE(r,e){r.uniform1fv(this.addr,e)}function PE(r,e){const t=xo(e,this.size,2);r.uniform2fv(this.addr,t)}function LE(r,e){const t=xo(e,this.size,3);r.uniform3fv(this.addr,t)}function IE(r,e){const t=xo(e,this.size,4);r.uniform4fv(this.addr,t)}function DE(r,e){const t=xo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function NE(r,e){const t=xo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function UE(r,e){const t=xo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function FE(r,e){r.uniform1iv(this.addr,e)}function OE(r,e){r.uniform2iv(this.addr,e)}function kE(r,e){r.uniform3iv(this.addr,e)}function BE(r,e){r.uniform4iv(this.addr,e)}function zE(r,e){r.uniform1uiv(this.addr,e)}function HE(r,e){r.uniform2uiv(this.addr,e)}function VE(r,e){r.uniform3uiv(this.addr,e)}function GE(r,e){r.uniform4uiv(this.addr,e)}function WE(r,e,t){const s=this.cache,a=e.length,l=dc(t,a);pn(s,l)||(r.uniform1iv(this.addr,l),mn(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=wh:u=Tg;for(let h=0;h!==a;++h)t.setTexture2D(e[h]||u,l[h])}function XE(r,e,t){const s=this.cache,a=e.length,l=dc(t,a);pn(s,l)||(r.uniform1iv(this.addr,l),mn(s,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Rg,l[u])}function jE(r,e,t){const s=this.cache,a=e.length,l=dc(t,a);pn(s,l)||(r.uniform1iv(this.addr,l),mn(s,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||bg,l[u])}function qE(r,e,t){const s=this.cache,a=e.length,l=dc(t,a);pn(s,l)||(r.uniform1iv(this.addr,l),mn(s,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||Cg,l[u])}function KE(r){switch(r){case 5126:return bE;case 35664:return PE;case 35665:return LE;case 35666:return IE;case 35674:return DE;case 35675:return NE;case 35676:return UE;case 5124:case 35670:return FE;case 35667:case 35671:return OE;case 35668:case 35672:return kE;case 35669:case 35673:return BE;case 5125:return zE;case 36294:return HE;case 36295:return VE;case 36296:return GE;case 35678:case 36198:case 36298:case 36306:case 35682:return WE;case 35679:case 36299:case 36307:return XE;case 35680:case 36300:case 36308:case 36293:return jE;case 36289:case 36303:case 36311:case 36292:return qE}}class YE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=RE(t.type)}}class ZE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KE(t.type)}}class QE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const h=a[l];h.setValue(e,t[h.id],s)}}}const Tf=/(\w+)(\])?(\[|\.)?/g;function f0(r,e){r.seq.push(e),r.map[e.id]=e}function JE(r,e,t){const s=r.name,a=s.length;for(Tf.lastIndex=0;;){const l=Tf.exec(s),u=Tf.lastIndex;let h=l[1];const p=l[2]==="]",d=l[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===a){f0(t,d===void 0?new YE(h,r,e):new ZE(h,r,e));break}else{let _=t.map[h];_===void 0&&(_=new QE(h),f0(t,_)),t=_}}}class Ql{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const h=e.getActiveUniform(t,u),p=e.getUniformLocation(t,h.name);JE(h,p,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,u=t.length;l!==u;++l){const h=t[l],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&s.push(u)}return s}}function h0(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const $E=37297;let e1=0;function t1(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const h=u+1;s.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return s.join(`
`)}const d0=new St;function n1(r){bt._getMatrix(d0,bt.workingColorSpace,r);const e=`mat3( ${d0.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(r)){case rc:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function p0(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+t1(r.getShaderSource(e),h)}else return l}function i1(r,e){const t=n1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const r1={[K0]:"Linear",[Y0]:"Reinhard",[Z0]:"Cineon",[Q0]:"ACESFilmic",[$0]:"AgX",[eg]:"Neutral",[J0]:"Custom"};function s1(r,e){const t=r1[e];return t===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new te;function o1(){bt.getLuminanceCoefficients(Wl);const r=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function l1(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function c1(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),u=l.name;let h=1;l.type===r.FLOAT_MAT2&&(h=2),l.type===r.FLOAT_MAT3&&(h=3),l.type===r.FLOAT_MAT4&&(h=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:h}}return t}function ca(r){return r!==""}function m0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function g0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(r){return r.replace(u1,h1)}const f1=new Map;function h1(r,e){let t=yt[e];if(t===void 0){const s=f1.get(e);if(s!==void 0)t=yt[s],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Th(t)}const d1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v0(r){return r.replace(d1,p1)}function p1(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function _0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const m1={[jl]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"};function g1(r){return m1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const v1={[vs]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE",[uc]:"ENVMAP_TYPE_CUBE_UV"};function _1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":v1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const x1={[ho]:"ENVMAP_MODE_REFRACTION"};function S1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":x1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const M1={[q0]:"ENVMAP_BLENDING_MULTIPLY",[q_]:"ENVMAP_BLENDING_MIX",[K_]:"ENVMAP_BLENDING_ADD"};function y1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":M1[r.combine]||"ENVMAP_BLENDING_NONE"}function E1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function A1(r,e,t,s){const a=r.getContext(),l=t.defines;let u=t.vertexShader,h=t.fragmentShader;const p=g1(t),d=_1(t),v=S1(t),_=y1(t),g=E1(t),M=a1(t),E=l1(l),C=a.createProgram();let x,S,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ca).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ca).join(`
`),S.length>0&&(S+=`
`)):(x=[_0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),S=[_0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?yt.tonemapping_pars_fragment:"",t.toneMapping!==ji?s1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,i1("linearToOutputTexel",t.outputColorSpace),o1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),u=Th(u),u=m0(u,t),u=g0(u,t),h=Th(h),h=m0(h,t),h=g0(h,t),u=v0(u),h=v0(h),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const I=R+x+u,L=R+S+h,V=h0(a,a.VERTEX_SHADER,I),D=h0(a,a.FRAGMENT_SHADER,L);a.attachShader(C,V),a.attachShader(C,D),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function B(z){if(r.debug.checkShaderErrors){const Q=a.getProgramInfoLog(C)||"",oe=a.getShaderInfoLog(V)||"",ie=a.getShaderInfoLog(D)||"",j=Q.trim(),$=oe.trim(),X=ie.trim();let q=!0,O=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,C,V,D);else{const J=p0(a,V,"vertex"),b=p0(a,D,"fragment");Dt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+j+`
`+J+`
`+b)}else j!==""?ht("WebGLProgram: Program Info Log:",j):($===""||X==="")&&(O=!1);O&&(z.diagnostics={runnable:q,programLog:j,vertexShader:{log:$,prefix:x},fragmentShader:{log:X,prefix:S}})}a.deleteShader(V),a.deleteShader(D),w=new Ql(a,C),F=c1(a,C)}let w;this.getUniforms=function(){return w===void 0&&B(this),w};let F;this.getAttributes=function(){return F===void 0&&B(this),F};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=a.getProgramParameter(C,$E)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=D,this}let w1=0;class T1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new C1(e),t.set(e,s)),s}}class C1{constructor(e){this.id=w1++,this.code=e,this.usedTimes=0}}function R1(r){return r===_s||r===tc||r===nc}function b1(r,e,t,s,a,l){const u=new fg,h=new T1,p=new Set,d=[],v=new Map,_=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return p.add(w),w===0?"uv":`uv${w}`}function C(w,F,Y,z,Q,oe){const ie=z.fog,j=Q.geometry,$=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,X=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,q=e.get(w.envMap||$,X),O=q&&q.mapping===uc?q.image.height:null,J=M[w.type];w.precision!==null&&(g=s.getMaxPrecision(w.precision),g!==w.precision&&ht("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const b=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,N=b!==void 0?b.length:0;let _e=0;j.morphAttributes.position!==void 0&&(_e=1),j.morphAttributes.normal!==void 0&&(_e=2),j.morphAttributes.color!==void 0&&(_e=3);let xe,pe,H,ue;if(J){const He=Wi[J];xe=He.vertexShader,pe=He.fragmentShader}else xe=w.vertexShader,pe=w.fragmentShader,h.update(w),H=h.getVertexShaderID(w),ue=h.getFragmentShaderID(w);const fe=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Le=Q.isInstancedMesh===!0,Oe=Q.isBatchedMesh===!0,dt=!!w.map,qe=!!w.matcap,it=!!q,rt=!!w.aoMap,st=!!w.lightMap,At=!!w.bumpMap,Et=!!w.normalMap,Mt=!!w.displacementMap,U=!!w.emissiveMap,gt=!!w.metalnessMap,nt=!!w.roughnessMap,Rt=w.anisotropy>0,Fe=w.clearcoat>0,Lt=w.dispersion>0,P=w.iridescence>0,y=w.sheen>0,ee=w.transmission>0,ve=Rt&&!!w.anisotropyMap,Se=Fe&&!!w.clearcoatMap,Ce=Fe&&!!w.clearcoatNormalMap,Re=Fe&&!!w.clearcoatRoughnessMap,de=P&&!!w.iridescenceMap,me=P&&!!w.iridescenceThicknessMap,ke=y&&!!w.sheenColorMap,Ge=y&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,be=!!w.specularColorMap,ut=!!w.specularIntensityMap,ft=ee&&!!w.transmissionMap,vt=ee&&!!w.thicknessMap,G=!!w.gradientMap,Pe=!!w.alphaMap,ge=w.alphaTest>0,We=!!w.alphaHash,Ne=!!w.extensions;let Me=ji;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Me=r.toneMapping);const Xe={shaderID:J,shaderType:w.type,shaderName:w.name,vertexShader:xe,fragmentShader:pe,defines:w.defines,customVertexShaderID:H,customFragmentShaderID:ue,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Oe,batchingColor:Oe&&Q._colorsTexture!==null,instancing:Le,instancingColor:Le&&Q.instanceColor!==null,instancingMorph:Le&&Q.morphTexture!==null,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:dt,matcap:qe,envMap:it,envMapMode:it&&q.mapping,envMapCubeUVHeight:O,aoMap:rt,lightMap:st,bumpMap:At,normalMap:Et,displacementMap:Mt,emissiveMap:U,normalMapObjectSpace:Et&&w.normalMapType===Q_,normalMapTangentSpace:Et&&w.normalMapType===Am,packedNormalMap:Et&&w.normalMapType===Am&&R1(w.normalMap.format),metalnessMap:gt,roughnessMap:nt,anisotropy:Rt,anisotropyMap:ve,clearcoat:Fe,clearcoatMap:Se,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Re,dispersion:Lt,iridescence:P,iridescenceMap:de,iridescenceThicknessMap:me,sheen:y,sheenColorMap:ke,sheenRoughnessMap:Ge,specularMap:Ie,specularColorMap:be,specularIntensityMap:ut,transmission:ee,transmissionMap:ft,thicknessMap:vt,gradientMap:G,opaque:w.transparent===!1&&w.blending===co&&w.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ge,alphaHash:We,combine:w.combine,mapUv:dt&&E(w.map.channel),aoMapUv:rt&&E(w.aoMap.channel),lightMapUv:st&&E(w.lightMap.channel),bumpMapUv:At&&E(w.bumpMap.channel),normalMapUv:Et&&E(w.normalMap.channel),displacementMapUv:Mt&&E(w.displacementMap.channel),emissiveMapUv:U&&E(w.emissiveMap.channel),metalnessMapUv:gt&&E(w.metalnessMap.channel),roughnessMapUv:nt&&E(w.roughnessMap.channel),anisotropyMapUv:ve&&E(w.anisotropyMap.channel),clearcoatMapUv:Se&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:me&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&E(w.sheenRoughnessMap.channel),specularMapUv:Ie&&E(w.specularMap.channel),specularColorMapUv:be&&E(w.specularColorMap.channel),specularIntensityMapUv:ut&&E(w.specularIntensityMap.channel),transmissionMapUv:ft&&E(w.transmissionMap.channel),thicknessMapUv:vt&&E(w.thicknessMap.channel),alphaMapUv:Pe&&E(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Et||Rt),vertexNormals:!!j.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!j.attributes.uv&&(dt||Pe),fog:!!ie,useFog:w.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||j.attributes.normal===void 0&&Et===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ae,skinning:Q.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:_e,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:oe.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:Me,decodeVideoTexture:dt&&w.map.isVideoTexture===!0&&bt.getTransfer(w.map.colorSpace)===Ht,decodeVideoTextureEmissive:U&&w.emissiveMap.isVideoTexture===!0&&bt.getTransfer(w.emissiveMap.colorSpace)===Ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ni,flipSided:w.side===Yn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ne&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&w.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Xe.vertexUv1s=p.has(1),Xe.vertexUv2s=p.has(2),Xe.vertexUv3s=p.has(3),p.clear(),Xe}function x(w){const F=[];if(w.shaderID?F.push(w.shaderID):(F.push(w.customVertexShaderID),F.push(w.customFragmentShaderID)),w.defines!==void 0)for(const Y in w.defines)F.push(Y),F.push(w.defines[Y]);return w.isRawShaderMaterial===!1&&(S(F,w),R(F,w),F.push(r.outputColorSpace)),F.push(w.customProgramCacheKey),F.join()}function S(w,F){w.push(F.precision),w.push(F.outputColorSpace),w.push(F.envMapMode),w.push(F.envMapCubeUVHeight),w.push(F.mapUv),w.push(F.alphaMapUv),w.push(F.lightMapUv),w.push(F.aoMapUv),w.push(F.bumpMapUv),w.push(F.normalMapUv),w.push(F.displacementMapUv),w.push(F.emissiveMapUv),w.push(F.metalnessMapUv),w.push(F.roughnessMapUv),w.push(F.anisotropyMapUv),w.push(F.clearcoatMapUv),w.push(F.clearcoatNormalMapUv),w.push(F.clearcoatRoughnessMapUv),w.push(F.iridescenceMapUv),w.push(F.iridescenceThicknessMapUv),w.push(F.sheenColorMapUv),w.push(F.sheenRoughnessMapUv),w.push(F.specularMapUv),w.push(F.specularColorMapUv),w.push(F.specularIntensityMapUv),w.push(F.transmissionMapUv),w.push(F.thicknessMapUv),w.push(F.combine),w.push(F.fogExp2),w.push(F.sizeAttenuation),w.push(F.morphTargetsCount),w.push(F.morphAttributeCount),w.push(F.numDirLights),w.push(F.numPointLights),w.push(F.numSpotLights),w.push(F.numSpotLightMaps),w.push(F.numHemiLights),w.push(F.numRectAreaLights),w.push(F.numDirLightShadows),w.push(F.numPointLightShadows),w.push(F.numSpotLightShadows),w.push(F.numSpotLightShadowsWithMaps),w.push(F.numLightProbes),w.push(F.shadowMapType),w.push(F.toneMapping),w.push(F.numClippingPlanes),w.push(F.numClipIntersection),w.push(F.depthPacking)}function R(w,F){u.disableAll(),F.instancing&&u.enable(0),F.instancingColor&&u.enable(1),F.instancingMorph&&u.enable(2),F.matcap&&u.enable(3),F.envMap&&u.enable(4),F.normalMapObjectSpace&&u.enable(5),F.normalMapTangentSpace&&u.enable(6),F.clearcoat&&u.enable(7),F.iridescence&&u.enable(8),F.alphaTest&&u.enable(9),F.vertexColors&&u.enable(10),F.vertexAlphas&&u.enable(11),F.vertexUv1s&&u.enable(12),F.vertexUv2s&&u.enable(13),F.vertexUv3s&&u.enable(14),F.vertexTangents&&u.enable(15),F.anisotropy&&u.enable(16),F.alphaHash&&u.enable(17),F.batching&&u.enable(18),F.dispersion&&u.enable(19),F.batchingColor&&u.enable(20),F.gradientMap&&u.enable(21),F.packedNormalMap&&u.enable(22),F.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),F.fog&&u.enable(0),F.useFog&&u.enable(1),F.flatShading&&u.enable(2),F.logarithmicDepthBuffer&&u.enable(3),F.reversedDepthBuffer&&u.enable(4),F.skinning&&u.enable(5),F.morphTargets&&u.enable(6),F.morphNormals&&u.enable(7),F.morphColors&&u.enable(8),F.premultipliedAlpha&&u.enable(9),F.shadowMapEnabled&&u.enable(10),F.doubleSided&&u.enable(11),F.flipSided&&u.enable(12),F.useDepthPacking&&u.enable(13),F.dithering&&u.enable(14),F.transmission&&u.enable(15),F.sheen&&u.enable(16),F.opaque&&u.enable(17),F.pointsUvs&&u.enable(18),F.decodeVideoTexture&&u.enable(19),F.decodeVideoTextureEmissive&&u.enable(20),F.alphaToCoverage&&u.enable(21),F.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function I(w){const F=M[w.type];let Y;if(F){const z=Wi[F];Y=$x.clone(z.uniforms)}else Y=w.uniforms;return Y}function L(w,F){let Y=v.get(F);return Y!==void 0?++Y.usedTimes:(Y=new A1(r,F,w,a),d.push(Y),v.set(F,Y)),Y}function V(w){if(--w.usedTimes===0){const F=d.indexOf(w);d[F]=d[d.length-1],d.pop(),v.delete(w.cacheKey),w.destroy()}}function D(w){h.remove(w)}function B(){h.dispose()}return{getParameters:C,getProgramCacheKey:x,getUniforms:I,acquireProgram:L,releaseProgram:V,releaseShaderCache:D,programs:d,dispose:B}}function P1(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function s(u){r.delete(u)}function a(u,h,p){r.get(u)[h]=p}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function L1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function x0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function S0(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,E,C,x,S){let R=r[e];return R===void 0?(R={id:g.id,object:g,geometry:M,material:E,materialVariant:u(g),groupOrder:C,renderOrder:g.renderOrder,z:x,group:S},r[e]=R):(R.id=g.id,R.object=g,R.geometry=M,R.material=E,R.materialVariant=u(g),R.groupOrder=C,R.renderOrder=g.renderOrder,R.z=x,R.group=S),e++,R}function p(g,M,E,C,x,S){const R=h(g,M,E,C,x,S);E.transmission>0?s.push(R):E.transparent===!0?a.push(R):t.push(R)}function d(g,M,E,C,x,S){const R=h(g,M,E,C,x,S);E.transmission>0?s.unshift(R):E.transparent===!0?a.unshift(R):t.unshift(R)}function v(g,M){t.length>1&&t.sort(g||L1),s.length>1&&s.sort(M||x0),a.length>1&&a.sort(M||x0)}function _(){for(let g=e,M=r.length;g<M;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:p,unshift:d,finish:_,sort:v}}function I1(){let r=new WeakMap;function e(s,a){const l=r.get(s);let u;return l===void 0?(u=new S0,r.set(s,[u])):a>=l.length?(u=new S0,l.push(u)):u=l[a],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function D1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new Bt};break;case"SpotLight":t={position:new te,direction:new te,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":t={color:new Bt,position:new te,halfWidth:new te,halfHeight:new te};break}return r[e.id]=t,t}}}function N1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let U1=0;function F1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function O1(r){const e=new D1,t=N1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new te);const a=new te,l=new on,u=new on;function h(d){let v=0,_=0,g=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let M=0,E=0,C=0,x=0,S=0,R=0,I=0,L=0,V=0,D=0,B=0;d.sort(F1);for(let F=0,Y=d.length;F<Y;F++){const z=d[F],Q=z.color,oe=z.intensity,ie=z.distance;let j=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===_s?j=z.shadow.map.texture:j=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)v+=Q.r*oe,_+=Q.g*oe,g+=Q.b*oe;else if(z.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(z.sh.coefficients[$],oe);B++}else if(z.isDirectionalLight){const $=e.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const X=z.shadow,q=t.get(z);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,s.directionalShadow[M]=q,s.directionalShadowMap[M]=j,s.directionalShadowMatrix[M]=z.shadow.matrix,R++}s.directional[M]=$,M++}else if(z.isSpotLight){const $=e.get(z);$.position.setFromMatrixPosition(z.matrixWorld),$.color.copy(Q).multiplyScalar(oe),$.distance=ie,$.coneCos=Math.cos(z.angle),$.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),$.decay=z.decay,s.spot[C]=$;const X=z.shadow;if(z.map&&(s.spotLightMap[V]=z.map,V++,X.updateMatrices(z),z.castShadow&&D++),s.spotLightMatrix[C]=X.matrix,z.castShadow){const q=t.get(z);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,s.spotShadow[C]=q,s.spotShadowMap[C]=j,L++}C++}else if(z.isRectAreaLight){const $=e.get(z);$.color.copy(Q).multiplyScalar(oe),$.halfWidth.set(z.width*.5,0,0),$.halfHeight.set(0,z.height*.5,0),s.rectArea[x]=$,x++}else if(z.isPointLight){const $=e.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity),$.distance=z.distance,$.decay=z.decay,z.castShadow){const X=z.shadow,q=t.get(z);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,q.shadowCameraNear=X.camera.near,q.shadowCameraFar=X.camera.far,s.pointShadow[E]=q,s.pointShadowMap[E]=j,s.pointShadowMatrix[E]=z.shadow.matrix,I++}s.point[E]=$,E++}else if(z.isHemisphereLight){const $=e.get(z);$.skyColor.copy(z.color).multiplyScalar(oe),$.groundColor.copy(z.groundColor).multiplyScalar(oe),s.hemi[S]=$,S++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=g;const w=s.hash;(w.directionalLength!==M||w.pointLength!==E||w.spotLength!==C||w.rectAreaLength!==x||w.hemiLength!==S||w.numDirectionalShadows!==R||w.numPointShadows!==I||w.numSpotShadows!==L||w.numSpotMaps!==V||w.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=x,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=L+V-D,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=B,w.directionalLength=M,w.pointLength=E,w.spotLength=C,w.rectAreaLength=x,w.hemiLength=S,w.numDirectionalShadows=R,w.numPointShadows=I,w.numSpotShadows=L,w.numSpotMaps=V,w.numLightProbes=B,s.version=U1++)}function p(d,v){let _=0,g=0,M=0,E=0,C=0;const x=v.matrixWorldInverse;for(let S=0,R=d.length;S<R;S++){const I=d[S];if(I.isDirectionalLight){const L=s.directional[_];L.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(x),_++}else if(I.isSpotLight){const L=s.spot[M];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(x),M++}else if(I.isRectAreaLight){const L=s.rectArea[E];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(x),u.identity(),l.copy(I.matrixWorld),l.premultiply(x),u.extractRotation(l),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),E++}else if(I.isPointLight){const L=s.point[g];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(x),g++}else if(I.isHemisphereLight){const L=s.hemi[C];L.direction.setFromMatrixPosition(I.matrixWorld),L.direction.transformDirection(x),C++}}}return{setup:h,setupView:p,state:s}}function M0(r){const e=new O1(r),t=[],s=[],a=[];function l(g){_.camera=g,t.length=0,s.length=0,a.length=0}function u(g){t.push(g)}function h(g){s.push(g)}function p(g){a.push(g)}function d(){e.setup(t)}function v(g){e.setupView(t,g)}const _={lightsArray:t,shadowsArray:s,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:d,setupLightsView:v,pushLight:u,pushShadow:h,pushLightProbeGrid:p}}function k1(r){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let h;return u===void 0?(h=new M0(r),e.set(a,[h])):l>=u.length?(h=new M0(r),u.push(h)):h=u[l],h}function s(){e=new WeakMap}return{get:t,dispose:s}}const B1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z1=`uniform sampler2D shadow_pass;
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
}`,H1=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],V1=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],y0=new on,sa=new te,Cf=new te;function G1(r,e,t){let s=new vg;const a=new Ut,l=new Ut,u=new sn,h=new iS,p=new rS,d={},v=t.maxTextureSize,_={[Xr]:Yn,[Yn]:Xr,[Ni]:Ni},g=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:B1,fragmentShader:z1}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new Zn;E.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new si(E,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jl;let S=this.type;this.render=function(D,B,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;this.type===R_&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jl);const F=r.getRenderTarget(),Y=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(hr),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const oe=S!==this.type;oe&&B.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(j=>j.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,j=D.length;ie<j;ie++){const $=D[ie],X=$.shadow;if(X===void 0){ht("WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;a.copy(X.mapSize);const q=X.getFrameExtents();a.multiply(q),l.copy(X.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/q.x),a.x=l.x*q.x,X.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/q.y),a.y=l.y*q.y,X.mapSize.y=l.y));const O=r.state.buffers.depth.getReversed();if(X.camera._reversedDepth=O,X.map===null||oe===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===la){if($.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new qi(a.x,a.y,{format:_s,type:mr,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),X.map.texture.name=$.name+".shadowMap",X.map.depthTexture=new po(a.x,a.y,Fi),X.map.depthTexture.name=$.name+".shadowMapDepth",X.map.depthTexture.format=gr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=dn,X.map.depthTexture.magFilter=dn}else $.isPointLight?(X.map=new wg(a.x),X.map.depthTexture=new Qx(a.x,Yi)):(X.map=new qi(a.x,a.y),X.map.depthTexture=new po(a.x,a.y,Yi)),X.map.depthTexture.name=$.name+".shadowMap",X.map.depthTexture.format=gr,this.type===jl?(X.map.depthTexture.compareFunction=O?Oh:Fh,X.map.depthTexture.minFilter=Mn,X.map.depthTexture.magFilter=Mn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=dn,X.map.depthTexture.magFilter=dn);X.camera.updateProjectionMatrix()}const J=X.map.isWebGLCubeRenderTarget?6:1;for(let b=0;b<J;b++){if(X.map.isWebGLCubeRenderTarget)r.setRenderTarget(X.map,b),r.clear();else{b===0&&(r.setRenderTarget(X.map),r.clear());const N=X.getViewport(b);u.set(l.x*N.x,l.y*N.y,l.x*N.z,l.y*N.w),Q.viewport(u)}if($.isPointLight){const N=X.camera,_e=X.matrix,xe=$.distance||N.far;xe!==N.far&&(N.far=xe,N.updateProjectionMatrix()),sa.setFromMatrixPosition($.matrixWorld),N.position.copy(sa),Cf.copy(N.position),Cf.add(H1[b]),N.up.copy(V1[b]),N.lookAt(Cf),N.updateMatrixWorld(),_e.makeTranslation(-sa.x,-sa.y,-sa.z),y0.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X._frustum.setFromProjectionMatrix(y0,N.coordinateSystem,N.reversedDepth)}else X.updateMatrices($);s=X.getFrustum(),L(B,w,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===la&&R(X,w),X.needsUpdate=!1}S=this.type,x.needsUpdate=!1,r.setRenderTarget(F,Y,z)};function R(D,B){const w=e.update(C);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new qi(a.x,a.y,{format:_s,type:mr})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(B,null,w,g,C,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value=D.mapSize,M.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(B,null,w,M,C,null)}function I(D,B,w,F){let Y=null;const z=w.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(z!==void 0)Y=z;else if(Y=w.isPointLight===!0?p:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Q=Y.uuid,oe=B.uuid;let ie=d[Q];ie===void 0&&(ie={},d[Q]=ie);let j=ie[oe];j===void 0&&(j=Y.clone(),ie[oe]=j,B.addEventListener("dispose",V)),Y=j}if(Y.visible=B.visible,Y.wireframe=B.wireframe,F===la?Y.side=B.shadowSide!==null?B.shadowSide:B.side:Y.side=B.shadowSide!==null?B.shadowSide:_[B.side],Y.alphaMap=B.alphaMap,Y.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,Y.map=B.map,Y.clipShadows=B.clipShadows,Y.clippingPlanes=B.clippingPlanes,Y.clipIntersection=B.clipIntersection,Y.displacementMap=B.displacementMap,Y.displacementScale=B.displacementScale,Y.displacementBias=B.displacementBias,Y.wireframeLinewidth=B.wireframeLinewidth,Y.linewidth=B.linewidth,w.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const Q=r.properties.get(Y);Q.light=w}return Y}function L(D,B,w,F,Y){if(D.visible===!1)return;if(D.layers.test(B.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&Y===la)&&(!D.frustumCulled||s.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,D.matrixWorld);const oe=e.update(D),ie=D.material;if(Array.isArray(ie)){const j=oe.groups;for(let $=0,X=j.length;$<X;$++){const q=j[$],O=ie[q.materialIndex];if(O&&O.visible){const J=I(D,O,F,Y);D.onBeforeShadow(r,D,B,w,oe,J,q),r.renderBufferDirect(w,null,oe,J,D,q),D.onAfterShadow(r,D,B,w,oe,J,q)}}}else if(ie.visible){const j=I(D,ie,F,Y);D.onBeforeShadow(r,D,B,w,oe,j,null),r.renderBufferDirect(w,null,oe,j,D,null),D.onAfterShadow(r,D,B,w,oe,j,null)}}const Q=D.children;for(let oe=0,ie=Q.length;oe<ie;oe++)L(Q[oe],B,w,F,Y)}function V(D){D.target.removeEventListener("dispose",V);for(const w in d){const F=d[w],Y=D.target.uuid;Y in F&&(F[Y].dispose(),delete F[Y])}}}function W1(r,e){function t(){let G=!1;const Pe=new sn;let ge=null;const We=new sn(0,0,0,0);return{setMask:function(Ne){ge!==Ne&&!G&&(r.colorMask(Ne,Ne,Ne,Ne),ge=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,Me,Xe,He,_t){_t===!0&&(Ne*=He,Me*=He,Xe*=He),Pe.set(Ne,Me,Xe,He),We.equals(Pe)===!1&&(r.clearColor(Ne,Me,Xe,He),We.copy(Pe))},reset:function(){G=!1,ge=null,We.set(-1,0,0,0)}}}function s(){let G=!1,Pe=!1,ge=null,We=null,Ne=null;return{setReversed:function(Me){if(Pe!==Me){const Xe=e.get("EXT_clip_control");Me?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Pe=Me;const He=Ne;Ne=null,this.setClear(He)}},getReversed:function(){return Pe},setTest:function(Me){Me?fe(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(Me){ge!==Me&&!G&&(r.depthMask(Me),ge=Me)},setFunc:function(Me){if(Pe&&(Me=ax[Me]),We!==Me){switch(Me){case Bf:r.depthFunc(r.NEVER);break;case zf:r.depthFunc(r.ALWAYS);break;case Hf:r.depthFunc(r.LESS);break;case fo:r.depthFunc(r.LEQUAL);break;case Vf:r.depthFunc(r.EQUAL);break;case Gf:r.depthFunc(r.GEQUAL);break;case Wf:r.depthFunc(r.GREATER);break;case Xf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}We=Me}},setLocked:function(Me){G=Me},setClear:function(Me){Ne!==Me&&(Ne=Me,Pe&&(Me=1-Me),r.clearDepth(Me))},reset:function(){G=!1,ge=null,We=null,Ne=null,Pe=!1}}}function a(){let G=!1,Pe=null,ge=null,We=null,Ne=null,Me=null,Xe=null,He=null,_t=null;return{setTest:function(Pt){G||(Pt?fe(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(Pt){Pe!==Pt&&!G&&(r.stencilMask(Pt),Pe=Pt)},setFunc:function(Pt,an,Nn){(ge!==Pt||We!==an||Ne!==Nn)&&(r.stencilFunc(Pt,an,Nn),ge=Pt,We=an,Ne=Nn)},setOp:function(Pt,an,Nn){(Me!==Pt||Xe!==an||He!==Nn)&&(r.stencilOp(Pt,an,Nn),Me=Pt,Xe=an,He=Nn)},setLocked:function(Pt){G=Pt},setClear:function(Pt){_t!==Pt&&(r.clearStencil(Pt),_t=Pt)},reset:function(){G=!1,Pe=null,ge=null,We=null,Ne=null,Me=null,Xe=null,He=null,_t=null}}}const l=new t,u=new s,h=new a,p=new WeakMap,d=new WeakMap;let v={},_={},g={},M=new WeakMap,E=[],C=null,x=!1,S=null,R=null,I=null,L=null,V=null,D=null,B=null,w=new Bt(0,0,0),F=0,Y=!1,z=null,Q=null,oe=null,ie=null,j=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,q=0;const O=r.getParameter(r.VERSION);O.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(O)[1]),X=q>=1):O.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),X=q>=2);let J=null,b={};const N=r.getParameter(r.SCISSOR_BOX),_e=r.getParameter(r.VIEWPORT),xe=new sn().fromArray(N),pe=new sn().fromArray(_e);function H(G,Pe,ge,We){const Ne=new Uint8Array(4),Me=r.createTexture();r.bindTexture(G,Me),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xe=0;Xe<ge;Xe++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Pe,0,r.RGBA,1,1,We,0,r.RGBA,r.UNSIGNED_BYTE,Ne):r.texImage2D(Pe+Xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ne);return Me}const ue={};ue[r.TEXTURE_2D]=H(r.TEXTURE_2D,r.TEXTURE_2D,1),ue[r.TEXTURE_CUBE_MAP]=H(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[r.TEXTURE_2D_ARRAY]=H(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ue[r.TEXTURE_3D]=H(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),fe(r.DEPTH_TEST),u.setFunc(fo),At(!1),Et(Sm),fe(r.CULL_FACE),rt(hr);function fe(G){v[G]!==!0&&(r.enable(G),v[G]=!0)}function Ae(G){v[G]!==!1&&(r.disable(G),v[G]=!1)}function Le(G,Pe){return g[G]!==Pe?(r.bindFramebuffer(G,Pe),g[G]=Pe,G===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Pe),G===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Oe(G,Pe){let ge=E,We=!1;if(G){ge=M.get(Pe),ge===void 0&&(ge=[],M.set(Pe,ge));const Ne=G.textures;if(ge.length!==Ne.length||ge[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,Xe=Ne.length;Me<Xe;Me++)ge[Me]=r.COLOR_ATTACHMENT0+Me;ge.length=Ne.length,We=!0}}else ge[0]!==r.BACK&&(ge[0]=r.BACK,We=!0);We&&r.drawBuffers(ge)}function dt(G){return C!==G?(r.useProgram(G),C=G,!0):!1}const qe={[ds]:r.FUNC_ADD,[P_]:r.FUNC_SUBTRACT,[L_]:r.FUNC_REVERSE_SUBTRACT};qe[I_]=r.MIN,qe[D_]=r.MAX;const it={[N_]:r.ZERO,[U_]:r.ONE,[F_]:r.SRC_COLOR,[Of]:r.SRC_ALPHA,[V_]:r.SRC_ALPHA_SATURATE,[z_]:r.DST_COLOR,[k_]:r.DST_ALPHA,[O_]:r.ONE_MINUS_SRC_COLOR,[kf]:r.ONE_MINUS_SRC_ALPHA,[H_]:r.ONE_MINUS_DST_COLOR,[B_]:r.ONE_MINUS_DST_ALPHA,[G_]:r.CONSTANT_COLOR,[W_]:r.ONE_MINUS_CONSTANT_COLOR,[X_]:r.CONSTANT_ALPHA,[j_]:r.ONE_MINUS_CONSTANT_ALPHA};function rt(G,Pe,ge,We,Ne,Me,Xe,He,_t,Pt){if(G===hr){x===!0&&(Ae(r.BLEND),x=!1);return}if(x===!1&&(fe(r.BLEND),x=!0),G!==b_){if(G!==S||Pt!==Y){if((R!==ds||V!==ds)&&(r.blendEquation(r.FUNC_ADD),R=ds,V=ds),Pt)switch(G){case co:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mm:r.blendFunc(r.ONE,r.ONE);break;case ym:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Em:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Dt("WebGLState: Invalid blending: ",G);break}else switch(G){case co:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ym:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Em:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",G);break}I=null,L=null,D=null,B=null,w.set(0,0,0),F=0,S=G,Y=Pt}return}Ne=Ne||Pe,Me=Me||ge,Xe=Xe||We,(Pe!==R||Ne!==V)&&(r.blendEquationSeparate(qe[Pe],qe[Ne]),R=Pe,V=Ne),(ge!==I||We!==L||Me!==D||Xe!==B)&&(r.blendFuncSeparate(it[ge],it[We],it[Me],it[Xe]),I=ge,L=We,D=Me,B=Xe),(He.equals(w)===!1||_t!==F)&&(r.blendColor(He.r,He.g,He.b,_t),w.copy(He),F=_t),S=G,Y=!1}function st(G,Pe){G.side===Ni?Ae(r.CULL_FACE):fe(r.CULL_FACE);let ge=G.side===Yn;Pe&&(ge=!ge),At(ge),G.blending===co&&G.transparent===!1?rt(hr):rt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const We=G.stencilWrite;h.setTest(We),We&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),U(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function At(G){z!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),z=G)}function Et(G){G!==T_?(fe(r.CULL_FACE),G!==Q&&(G===Sm?r.cullFace(r.BACK):G===C_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),Q=G}function Mt(G){G!==oe&&(X&&r.lineWidth(G),oe=G)}function U(G,Pe,ge){G?(fe(r.POLYGON_OFFSET_FILL),(ie!==Pe||j!==ge)&&(ie=Pe,j=ge,u.getReversed()&&(Pe=-Pe),r.polygonOffset(Pe,ge))):Ae(r.POLYGON_OFFSET_FILL)}function gt(G){G?fe(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function nt(G){G===void 0&&(G=r.TEXTURE0+$-1),J!==G&&(r.activeTexture(G),J=G)}function Rt(G,Pe,ge){ge===void 0&&(J===null?ge=r.TEXTURE0+$-1:ge=J);let We=b[ge];We===void 0&&(We={type:void 0,texture:void 0},b[ge]=We),(We.type!==G||We.texture!==Pe)&&(J!==ge&&(r.activeTexture(ge),J=ge),r.bindTexture(G,Pe||ue[G]),We.type=G,We.texture=Pe)}function Fe(){const G=b[J];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Lt(){try{r.compressedTexImage2D(...arguments)}catch(G){Dt("WebGLState:",G)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(G){Dt("WebGLState:",G)}}function y(){try{r.texSubImage2D(...arguments)}catch(G){Dt("WebGLState:",G)}}function ee(){try{r.texSubImage3D(...arguments)}catch(G){Dt("WebGLState:",G)}}function ve(){try{r.compressedTexSubImage2D(...arguments)}catch(G){Dt("WebGLState:",G)}}function Se(){try{r.compressedTexSubImage3D(...arguments)}catch(G){Dt("WebGLState:",G)}}function Ce(){try{r.texStorage2D(...arguments)}catch(G){Dt("WebGLState:",G)}}function Re(){try{r.texStorage3D(...arguments)}catch(G){Dt("WebGLState:",G)}}function de(){try{r.texImage2D(...arguments)}catch(G){Dt("WebGLState:",G)}}function me(){try{r.texImage3D(...arguments)}catch(G){Dt("WebGLState:",G)}}function ke(G){return _[G]!==void 0?_[G]:r.getParameter(G)}function Ge(G,Pe){_[G]!==Pe&&(r.pixelStorei(G,Pe),_[G]=Pe)}function Ie(G){xe.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),xe.copy(G))}function be(G){pe.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),pe.copy(G))}function ut(G,Pe){let ge=d.get(Pe);ge===void 0&&(ge=new WeakMap,d.set(Pe,ge));let We=ge.get(G);We===void 0&&(We=r.getUniformBlockIndex(Pe,G.name),ge.set(G,We))}function ft(G,Pe){const We=d.get(Pe).get(G);p.get(Pe)!==We&&(r.uniformBlockBinding(Pe,We,G.__bindingPointIndex),p.set(Pe,We))}function vt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},_={},J=null,b={},g={},M=new WeakMap,E=[],C=null,x=!1,S=null,R=null,I=null,L=null,V=null,D=null,B=null,w=new Bt(0,0,0),F=0,Y=!1,z=null,Q=null,oe=null,ie=null,j=null,xe.set(0,0,r.canvas.width,r.canvas.height),pe.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:fe,disable:Ae,bindFramebuffer:Le,drawBuffers:Oe,useProgram:dt,setBlending:rt,setMaterial:st,setFlipSided:At,setCullFace:Et,setLineWidth:Mt,setPolygonOffset:U,setScissorTest:gt,activeTexture:nt,bindTexture:Rt,unbindTexture:Fe,compressedTexImage2D:Lt,compressedTexImage3D:P,texImage2D:de,texImage3D:me,pixelStorei:Ge,getParameter:ke,updateUBOMapping:ut,uniformBlockBinding:ft,texStorage2D:Ce,texStorage3D:Re,texSubImage2D:y,texSubImage3D:ee,compressedTexSubImage2D:ve,compressedTexSubImage3D:Se,scissor:Ie,viewport:be,reset:vt}}function X1(r,e,t,s,a,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ut,v=new WeakMap,_=new Set;let g;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(P,y){return E?new OffscreenCanvas(P,y):oc("canvas")}function x(P,y,ee){let ve=1;const Se=Lt(P);if((Se.width>ee||Se.height>ee)&&(ve=ee/Math.max(Se.width,Se.height)),ve<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ce=Math.floor(ve*Se.width),Re=Math.floor(ve*Se.height);g===void 0&&(g=C(Ce,Re));const de=y?C(Ce,Re):g;return de.width=Ce,de.height=Re,de.getContext("2d").drawImage(P,0,0,Ce,Re),ht("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+Ce+"x"+Re+")."),de}else return"data"in P&&ht("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),P;return P}function S(P){return P.generateMipmaps}function R(P){r.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,y,ee,ve,Se,Ce=!1){if(P!==null){if(r[P]!==void 0)return r[P];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Re;ve&&(Re=e.get("EXT_texture_norm16"),Re||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=y;if(y===r.RED&&(ee===r.FLOAT&&(de=r.R32F),ee===r.HALF_FLOAT&&(de=r.R16F),ee===r.UNSIGNED_BYTE&&(de=r.R8),ee===r.UNSIGNED_SHORT&&Re&&(de=Re.R16_EXT),ee===r.SHORT&&Re&&(de=Re.R16_SNORM_EXT)),y===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(de=r.R8UI),ee===r.UNSIGNED_SHORT&&(de=r.R16UI),ee===r.UNSIGNED_INT&&(de=r.R32UI),ee===r.BYTE&&(de=r.R8I),ee===r.SHORT&&(de=r.R16I),ee===r.INT&&(de=r.R32I)),y===r.RG&&(ee===r.FLOAT&&(de=r.RG32F),ee===r.HALF_FLOAT&&(de=r.RG16F),ee===r.UNSIGNED_BYTE&&(de=r.RG8),ee===r.UNSIGNED_SHORT&&Re&&(de=Re.RG16_EXT),ee===r.SHORT&&Re&&(de=Re.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(de=r.RG8UI),ee===r.UNSIGNED_SHORT&&(de=r.RG16UI),ee===r.UNSIGNED_INT&&(de=r.RG32UI),ee===r.BYTE&&(de=r.RG8I),ee===r.SHORT&&(de=r.RG16I),ee===r.INT&&(de=r.RG32I)),y===r.RGB_INTEGER&&(ee===r.UNSIGNED_BYTE&&(de=r.RGB8UI),ee===r.UNSIGNED_SHORT&&(de=r.RGB16UI),ee===r.UNSIGNED_INT&&(de=r.RGB32UI),ee===r.BYTE&&(de=r.RGB8I),ee===r.SHORT&&(de=r.RGB16I),ee===r.INT&&(de=r.RGB32I)),y===r.RGBA_INTEGER&&(ee===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),ee===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),ee===r.UNSIGNED_INT&&(de=r.RGBA32UI),ee===r.BYTE&&(de=r.RGBA8I),ee===r.SHORT&&(de=r.RGBA16I),ee===r.INT&&(de=r.RGBA32I)),y===r.RGB&&(ee===r.UNSIGNED_SHORT&&Re&&(de=Re.RGB16_EXT),ee===r.SHORT&&Re&&(de=Re.RGB16_SNORM_EXT),ee===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),ee===r.UNSIGNED_INT_10F_11F_11F_REV&&(de=r.R11F_G11F_B10F)),y===r.RGBA){const me=Ce?rc:bt.getTransfer(Se);ee===r.FLOAT&&(de=r.RGBA32F),ee===r.HALF_FLOAT&&(de=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(de=me===Ht?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT&&Re&&(de=Re.RGBA16_EXT),ee===r.SHORT&&Re&&(de=Re.RGBA16_SNORM_EXT),ee===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function V(P,y){let ee;return P?y===null||y===Yi||y===pa?ee=r.DEPTH24_STENCIL8:y===Fi?ee=r.DEPTH32F_STENCIL8:y===da&&(ee=r.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Yi||y===pa?ee=r.DEPTH_COMPONENT24:y===Fi?ee=r.DEPTH_COMPONENT32F:y===da&&(ee=r.DEPTH_COMPONENT16),ee}function D(P,y){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==dn&&P.minFilter!==Mn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function B(P){const y=P.target;y.removeEventListener("dispose",B),F(y),y.isVideoTexture&&v.delete(y),y.isHTMLTexture&&_.delete(y)}function w(P){const y=P.target;y.removeEventListener("dispose",w),z(y)}function F(P){const y=s.get(P);if(y.__webglInit===void 0)return;const ee=P.source,ve=M.get(ee);if(ve){const Se=ve[y.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&Y(P),Object.keys(ve).length===0&&M.delete(ee)}s.remove(P)}function Y(P){const y=s.get(P);r.deleteTexture(y.__webglTexture);const ee=P.source,ve=M.get(ee);delete ve[y.__cacheKey],u.memory.textures--}function z(P){const y=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(y.__webglFramebuffer[ve]))for(let Se=0;Se<y.__webglFramebuffer[ve].length;Se++)r.deleteFramebuffer(y.__webglFramebuffer[ve][Se]);else r.deleteFramebuffer(y.__webglFramebuffer[ve]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[ve])}else{if(Array.isArray(y.__webglFramebuffer))for(let ve=0;ve<y.__webglFramebuffer.length;ve++)r.deleteFramebuffer(y.__webglFramebuffer[ve]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ve=0;ve<y.__webglColorRenderbuffer.length;ve++)y.__webglColorRenderbuffer[ve]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[ve]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const ee=P.textures;for(let ve=0,Se=ee.length;ve<Se;ve++){const Ce=s.get(ee[ve]);Ce.__webglTexture&&(r.deleteTexture(Ce.__webglTexture),u.memory.textures--),s.remove(ee[ve])}s.remove(P)}let Q=0;function oe(){Q=0}function ie(){return Q}function j(P){Q=P}function $(){const P=Q;return P>=a.maxTextures&&ht("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),Q+=1,P}function X(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function q(P,y){const ee=s.get(P);if(P.isVideoTexture&&Rt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&ee.__version!==P.version){const ve=P.image;if(ve===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(ee,P,y);return}}else P.isExternalTexture&&(ee.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+y)}function O(P,y){const ee=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){Ae(ee,P,y);return}else P.isExternalTexture&&(ee.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+y)}function J(P,y){const ee=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){Ae(ee,P,y);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+y)}function b(P,y){const ee=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&ee.__version!==P.version){Le(ee,P,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+y)}const N={[ec]:r.REPEAT,[fr]:r.CLAMP_TO_EDGE,[jf]:r.MIRRORED_REPEAT},_e={[dn]:r.NEAREST,[Y_]:r.NEAREST_MIPMAP_NEAREST,[xl]:r.NEAREST_MIPMAP_LINEAR,[Mn]:r.LINEAR,[Zu]:r.LINEAR_MIPMAP_NEAREST,[ms]:r.LINEAR_MIPMAP_LINEAR},xe={[J_]:r.NEVER,[ix]:r.ALWAYS,[$_]:r.LESS,[Fh]:r.LEQUAL,[ex]:r.EQUAL,[Oh]:r.GEQUAL,[tx]:r.GREATER,[nx]:r.NOTEQUAL};function pe(P,y){if(y.type===Fi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Mn||y.magFilter===Zu||y.magFilter===xl||y.magFilter===ms||y.minFilter===Mn||y.minFilter===Zu||y.minFilter===xl||y.minFilter===ms)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,N[y.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,N[y.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,N[y.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,_e[y.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,_e[y.minFilter]),y.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,xe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===dn||y.minFilter!==xl&&y.minFilter!==ms||y.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function H(P,y){let ee=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",B));const ve=y.source;let Se=M.get(ve);Se===void 0&&(Se={},M.set(ve,Se));const Ce=X(y);if(Ce!==P.__cacheKey){Se[Ce]===void 0&&(Se[Ce]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),Se[Ce].usedTimes++;const Re=Se[P.__cacheKey];Re!==void 0&&(Se[P.__cacheKey].usedTimes--,Re.usedTimes===0&&Y(y)),P.__cacheKey=Ce,P.__webglTexture=Se[Ce].texture}return ee}function ue(P,y,ee){return Math.floor(Math.floor(P/ee)/y)}function fe(P,y,ee,ve){const Ce=P.updateRanges;if(Ce.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,ee,ve,y.data);else{Ce.sort((Ge,Ie)=>Ge.start-Ie.start);let Re=0;for(let Ge=1;Ge<Ce.length;Ge++){const Ie=Ce[Re],be=Ce[Ge],ut=Ie.start+Ie.count,ft=ue(be.start,y.width,4),vt=ue(Ie.start,y.width,4);be.start<=ut+1&&ft===vt&&ue(be.start+be.count-1,y.width,4)===ft?Ie.count=Math.max(Ie.count,be.start+be.count-Ie.start):(++Re,Ce[Re]=be)}Ce.length=Re+1;const de=t.getParameter(r.UNPACK_ROW_LENGTH),me=t.getParameter(r.UNPACK_SKIP_PIXELS),ke=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Ge=0,Ie=Ce.length;Ge<Ie;Ge++){const be=Ce[Ge],ut=Math.floor(be.start/4),ft=Math.ceil(be.count/4),vt=ut%y.width,G=Math.floor(ut/y.width),Pe=ft,ge=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,vt),t.pixelStorei(r.UNPACK_SKIP_ROWS,G),t.texSubImage2D(r.TEXTURE_2D,0,vt,G,Pe,ge,ee,ve,y.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,de),t.pixelStorei(r.UNPACK_SKIP_PIXELS,me),t.pixelStorei(r.UNPACK_SKIP_ROWS,ke)}}function Ae(P,y,ee){let ve=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ve=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ve=r.TEXTURE_3D);const Se=H(P,y),Ce=y.source;t.bindTexture(ve,P.__webglTexture,r.TEXTURE0+ee);const Re=s.get(Ce);if(Ce.version!==Re.__version||Se===!0){if(t.activeTexture(r.TEXTURE0+ee),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ge=bt.getPrimaries(bt.workingColorSpace),We=y.colorSpace===Gr?null:bt.getPrimaries(y.colorSpace),Ne=y.colorSpace===Gr||ge===We?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let me=x(y.image,!1,a.maxTextureSize);me=Fe(y,me);const ke=l.convert(y.format,y.colorSpace),Ge=l.convert(y.type);let Ie=L(y.internalFormat,ke,Ge,y.normalized,y.colorSpace,y.isVideoTexture);pe(ve,y);let be;const ut=y.mipmaps,ft=y.isVideoTexture!==!0,vt=Re.__version===void 0||Se===!0,G=Ce.dataReady,Pe=D(y,me);if(y.isDepthTexture)Ie=V(y.format===gs,y.type),vt&&(ft?t.texStorage2D(r.TEXTURE_2D,1,Ie,me.width,me.height):t.texImage2D(r.TEXTURE_2D,0,Ie,me.width,me.height,0,ke,Ge,null));else if(y.isDataTexture)if(ut.length>0){ft&&vt&&t.texStorage2D(r.TEXTURE_2D,Pe,Ie,ut[0].width,ut[0].height);for(let ge=0,We=ut.length;ge<We;ge++)be=ut[ge],ft?G&&t.texSubImage2D(r.TEXTURE_2D,ge,0,0,be.width,be.height,ke,Ge,be.data):t.texImage2D(r.TEXTURE_2D,ge,Ie,be.width,be.height,0,ke,Ge,be.data);y.generateMipmaps=!1}else ft?(vt&&t.texStorage2D(r.TEXTURE_2D,Pe,Ie,me.width,me.height),G&&fe(y,me,ke,Ge)):t.texImage2D(r.TEXTURE_2D,0,Ie,me.width,me.height,0,ke,Ge,me.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ft&&vt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,Ie,ut[0].width,ut[0].height,me.depth);for(let ge=0,We=ut.length;ge<We;ge++)if(be=ut[ge],y.format!==_i)if(ke!==null)if(ft){if(G)if(y.layerUpdates.size>0){const Ne=$m(be.width,be.height,y.format,y.type);for(const Me of y.layerUpdates){const Xe=be.data.subarray(Me*Ne/be.data.BYTES_PER_ELEMENT,(Me+1)*Ne/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,Me,be.width,be.height,1,ke,Xe)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,be.width,be.height,me.depth,ke,be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ge,Ie,be.width,be.height,me.depth,0,be.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?G&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,be.width,be.height,me.depth,ke,Ge,be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ge,Ie,be.width,be.height,me.depth,0,ke,Ge,be.data)}else{ft&&vt&&t.texStorage2D(r.TEXTURE_2D,Pe,Ie,ut[0].width,ut[0].height);for(let ge=0,We=ut.length;ge<We;ge++)be=ut[ge],y.format!==_i?ke!==null?ft?G&&t.compressedTexSubImage2D(r.TEXTURE_2D,ge,0,0,be.width,be.height,ke,be.data):t.compressedTexImage2D(r.TEXTURE_2D,ge,Ie,be.width,be.height,0,be.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?G&&t.texSubImage2D(r.TEXTURE_2D,ge,0,0,be.width,be.height,ke,Ge,be.data):t.texImage2D(r.TEXTURE_2D,ge,Ie,be.width,be.height,0,ke,Ge,be.data)}else if(y.isDataArrayTexture)if(ft){if(vt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,Ie,me.width,me.height,me.depth),G)if(y.layerUpdates.size>0){const ge=$m(me.width,me.height,y.format,y.type);for(const We of y.layerUpdates){const Ne=me.data.subarray(We*ge/me.data.BYTES_PER_ELEMENT,(We+1)*ge/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,We,me.width,me.height,1,ke,Ge,Ne)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ke,Ge,me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ie,me.width,me.height,me.depth,0,ke,Ge,me.data);else if(y.isData3DTexture)ft?(vt&&t.texStorage3D(r.TEXTURE_3D,Pe,Ie,me.width,me.height,me.depth),G&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ke,Ge,me.data)):t.texImage3D(r.TEXTURE_3D,0,Ie,me.width,me.height,me.depth,0,ke,Ge,me.data);else if(y.isFramebufferTexture){if(vt)if(ft)t.texStorage2D(r.TEXTURE_2D,Pe,Ie,me.width,me.height);else{let ge=me.width,We=me.height;for(let Ne=0;Ne<Pe;Ne++)t.texImage2D(r.TEXTURE_2D,Ne,Ie,ge,We,0,ke,Ge,null),ge>>=1,We>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){const ge=r.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),me.parentNode!==ge){ge.appendChild(me),_.add(y),ge.onpaint=He=>{const _t=He.changedElements;for(const Pt of _)_t.includes(Pt.image)&&(Pt.needsUpdate=!0)},ge.requestPaint();return}const We=0,Ne=r.RGBA,Me=r.RGBA,Xe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,We,Ne,Me,Xe,me),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ut.length>0){if(ft&&vt){const ge=Lt(ut[0]);t.texStorage2D(r.TEXTURE_2D,Pe,Ie,ge.width,ge.height)}for(let ge=0,We=ut.length;ge<We;ge++)be=ut[ge],ft?G&&t.texSubImage2D(r.TEXTURE_2D,ge,0,0,ke,Ge,be):t.texImage2D(r.TEXTURE_2D,ge,Ie,ke,Ge,be);y.generateMipmaps=!1}else if(ft){if(vt){const ge=Lt(me);t.texStorage2D(r.TEXTURE_2D,Pe,Ie,ge.width,ge.height)}G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,Ge,me)}else t.texImage2D(r.TEXTURE_2D,0,Ie,ke,Ge,me);S(y)&&R(ve),Re.__version=Ce.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Le(P,y,ee){if(y.image.length!==6)return;const ve=H(P,y),Se=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+ee);const Ce=s.get(Se);if(Se.version!==Ce.__version||ve===!0){t.activeTexture(r.TEXTURE0+ee);const Re=bt.getPrimaries(bt.workingColorSpace),de=y.colorSpace===Gr?null:bt.getPrimaries(y.colorSpace),me=y.colorSpace===Gr||Re===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const ke=y.isCompressedTexture||y.image[0].isCompressedTexture,Ge=y.image[0]&&y.image[0].isDataTexture,Ie=[];for(let Me=0;Me<6;Me++)!ke&&!Ge?Ie[Me]=x(y.image[Me],!0,a.maxCubemapSize):Ie[Me]=Ge?y.image[Me].image:y.image[Me],Ie[Me]=Fe(y,Ie[Me]);const be=Ie[0],ut=l.convert(y.format,y.colorSpace),ft=l.convert(y.type),vt=L(y.internalFormat,ut,ft,y.normalized,y.colorSpace),G=y.isVideoTexture!==!0,Pe=Ce.__version===void 0||ve===!0,ge=Se.dataReady;let We=D(y,be);pe(r.TEXTURE_CUBE_MAP,y);let Ne;if(ke){G&&Pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,We,vt,be.width,be.height);for(let Me=0;Me<6;Me++){Ne=Ie[Me].mipmaps;for(let Xe=0;Xe<Ne.length;Xe++){const He=Ne[Xe];y.format!==_i?ut!==null?G?ge&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Xe,0,0,He.width,He.height,ut,He.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Xe,vt,He.width,He.height,0,He.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Xe,0,0,He.width,He.height,ut,ft,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Xe,vt,He.width,He.height,0,ut,ft,He.data)}}}else{if(Ne=y.mipmaps,G&&Pe){Ne.length>0&&We++;const Me=Lt(Ie[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,We,vt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ge){G?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ie[Me].width,Ie[Me].height,ut,ft,Ie[Me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,vt,Ie[Me].width,Ie[Me].height,0,ut,ft,Ie[Me].data);for(let Xe=0;Xe<Ne.length;Xe++){const _t=Ne[Xe].image[Me].image;G?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Xe+1,0,0,_t.width,_t.height,ut,ft,_t.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Xe+1,vt,_t.width,_t.height,0,ut,ft,_t.data)}}else{G?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ut,ft,Ie[Me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,vt,ut,ft,Ie[Me]);for(let Xe=0;Xe<Ne.length;Xe++){const He=Ne[Xe];G?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Xe+1,0,0,ut,ft,He.image[Me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Xe+1,vt,ut,ft,He.image[Me])}}}S(y)&&R(r.TEXTURE_CUBE_MAP),Ce.__version=Se.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Oe(P,y,ee,ve,Se,Ce){const Re=l.convert(ee.format,ee.colorSpace),de=l.convert(ee.type),me=L(ee.internalFormat,Re,de,ee.normalized,ee.colorSpace),ke=s.get(y),Ge=s.get(ee);if(Ge.__renderTarget=y,!ke.__hasExternalTextures){const Ie=Math.max(1,y.width>>Ce),be=Math.max(1,y.height>>Ce);Se===r.TEXTURE_3D||Se===r.TEXTURE_2D_ARRAY?t.texImage3D(Se,Ce,me,Ie,be,y.depth,0,Re,de,null):t.texImage2D(Se,Ce,me,Ie,be,0,Re,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),nt(y)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,Se,Ge.__webglTexture,0,gt(y)):(Se===r.TEXTURE_2D||Se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ve,Se,Ge.__webglTexture,Ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function dt(P,y,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,P),y.depthBuffer){const ve=y.depthTexture,Se=ve&&ve.isDepthTexture?ve.type:null,Ce=V(y.stencilBuffer,Se),Re=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;nt(y)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,gt(y),Ce,y.width,y.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,gt(y),Ce,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Re,r.RENDERBUFFER,P)}else{const ve=y.textures;for(let Se=0;Se<ve.length;Se++){const Ce=ve[Se],Re=l.convert(Ce.format,Ce.colorSpace),de=l.convert(Ce.type),me=L(Ce.internalFormat,Re,de,Ce.normalized,Ce.colorSpace);nt(y)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,gt(y),me,y.width,y.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,gt(y),me,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,me,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qe(P,y,ee){const ve=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=s.get(y.depthTexture);if(Se.__renderTarget=y,(!Se.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ve){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,y.depthTexture.addEventListener("dispose",B)),Se.__webglTexture===void 0){Se.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Se.__webglTexture),pe(r.TEXTURE_CUBE_MAP,y.depthTexture);const ke=l.convert(y.depthTexture.format),Ge=l.convert(y.depthTexture.type);let Ie;y.depthTexture.format===gr?Ie=r.DEPTH_COMPONENT24:y.depthTexture.format===gs&&(Ie=r.DEPTH24_STENCIL8);for(let be=0;be<6;be++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ie,y.width,y.height,0,ke,Ge,null)}}else q(y.depthTexture,0);const Ce=Se.__webglTexture,Re=gt(y),de=ve?r.TEXTURE_CUBE_MAP_POSITIVE_X+ee:r.TEXTURE_2D,me=y.depthTexture.format===gs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===gr)nt(y)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,de,Ce,0,Re):r.framebufferTexture2D(r.FRAMEBUFFER,me,de,Ce,0);else if(y.depthTexture.format===gs)nt(y)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,de,Ce,0,Re):r.framebufferTexture2D(r.FRAMEBUFFER,me,de,Ce,0);else throw new Error("Unknown depthTexture format")}function it(P){const y=s.get(P),ee=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const ve=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ve){const Se=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ve.removeEventListener("dispose",Se)};ve.addEventListener("dispose",Se),y.__depthDisposeCallback=Se}y.__boundDepthTexture=ve}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(ee)for(let ve=0;ve<6;ve++)qe(y.__webglFramebuffer[ve],P,ve);else{const ve=P.texture.mipmaps;ve&&ve.length>0?qe(y.__webglFramebuffer[0],P,0):qe(y.__webglFramebuffer,P,0)}else if(ee){y.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[ve]),y.__webglDepthbuffer[ve]===void 0)y.__webglDepthbuffer[ve]=r.createRenderbuffer(),dt(y.__webglDepthbuffer[ve],P,!1);else{const Se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=y.__webglDepthbuffer[ve];r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,Ce)}}else{const ve=P.texture.mipmaps;if(ve&&ve.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),dt(y.__webglDepthbuffer,P,!1);else{const Se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,Ce)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(P,y,ee){const ve=s.get(P);y!==void 0&&Oe(ve.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&it(P)}function st(P){const y=P.texture,ee=s.get(P),ve=s.get(y);P.addEventListener("dispose",w);const Se=P.textures,Ce=P.isWebGLCubeRenderTarget===!0,Re=Se.length>1;if(Re||(ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture()),ve.__version=y.version,u.memory.textures++),Ce){ee.__webglFramebuffer=[];for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0){ee.__webglFramebuffer[de]=[];for(let me=0;me<y.mipmaps.length;me++)ee.__webglFramebuffer[de][me]=r.createFramebuffer()}else ee.__webglFramebuffer[de]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){ee.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)ee.__webglFramebuffer[de]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(Re)for(let de=0,me=Se.length;de<me;de++){const ke=s.get(Se[de]);ke.__webglTexture===void 0&&(ke.__webglTexture=r.createTexture(),u.memory.textures++)}if(P.samples>0&&nt(P)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let de=0;de<Se.length;de++){const me=Se[de];ee.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[de]);const ke=l.convert(me.format,me.colorSpace),Ge=l.convert(me.type),Ie=L(me.internalFormat,ke,Ge,me.normalized,me.colorSpace,P.isXRRenderTarget===!0),be=gt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,be,Ie,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,ee.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),dt(ee.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ce){t.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),pe(r.TEXTURE_CUBE_MAP,y);for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)Oe(ee.__webglFramebuffer[de][me],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,me);else Oe(ee.__webglFramebuffer[de],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);S(y)&&R(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let de=0,me=Se.length;de<me;de++){const ke=Se[de],Ge=s.get(ke);let Ie=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ie=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Ge.__webglTexture),pe(Ie,ke),Oe(ee.__webglFramebuffer,P,ke,r.COLOR_ATTACHMENT0+de,Ie,0),S(ke)&&R(Ie)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,ve.__webglTexture),pe(de,y),y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)Oe(ee.__webglFramebuffer[me],P,y,r.COLOR_ATTACHMENT0,de,me);else Oe(ee.__webglFramebuffer,P,y,r.COLOR_ATTACHMENT0,de,0);S(y)&&R(de),t.unbindTexture()}P.depthBuffer&&it(P)}function At(P){const y=P.textures;for(let ee=0,ve=y.length;ee<ve;ee++){const Se=y[ee];if(S(Se)){const Ce=I(P),Re=s.get(Se).__webglTexture;t.bindTexture(Ce,Re),R(Ce),t.unbindTexture()}}}const Et=[],Mt=[];function U(P){if(P.samples>0){if(nt(P)===!1){const y=P.textures,ee=P.width,ve=P.height;let Se=r.COLOR_BUFFER_BIT;const Ce=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=s.get(P),de=y.length>1;if(de)for(let ke=0;ke<y.length;ke++)t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const me=P.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ke=0;ke<y.length;ke++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Se|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Se|=r.STENCIL_BUFFER_BIT)),de){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Re.__webglColorRenderbuffer[ke]);const Ge=s.get(y[ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ge,0)}r.blitFramebuffer(0,0,ee,ve,0,0,ee,ve,Se,r.NEAREST),p===!0&&(Et.length=0,Mt.length=0,Et.push(r.COLOR_ATTACHMENT0+ke),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Et.push(Ce),Mt.push(Ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Mt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let ke=0;ke<y.length;ke++){t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,Re.__webglColorRenderbuffer[ke]);const Ge=s.get(y[ke]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,Ge,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const y=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function gt(P){return Math.min(a.maxSamples,P.samples)}function nt(P){const y=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Rt(P){const y=u.render.frame;v.get(P)!==y&&(v.set(P,y),P.update())}function Fe(P,y){const ee=P.colorSpace,ve=P.format,Se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ee!==ic&&ee!==Gr&&(bt.getTransfer(ee)===Ht?(ve!==_i||Se!==vi)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",ee)),y}function Lt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=$,this.resetTextureUnits=oe,this.getTextureUnits=ie,this.setTextureUnits=j,this.setTexture2D=q,this.setTexture2DArray=O,this.setTexture3D=J,this.setTextureCube=b,this.rebindTextures=rt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=nt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function j1(r,e){function t(s,a=Gr){let l;const u=bt.getTransfer(a);if(s===vi)return r.UNSIGNED_BYTE;if(s===Lh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ih)return r.UNSIGNED_SHORT_5_5_5_1;if(s===rg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===sg)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===ng)return r.BYTE;if(s===ig)return r.SHORT;if(s===da)return r.UNSIGNED_SHORT;if(s===Ph)return r.INT;if(s===Yi)return r.UNSIGNED_INT;if(s===Fi)return r.FLOAT;if(s===mr)return r.HALF_FLOAT;if(s===og)return r.ALPHA;if(s===ag)return r.RGB;if(s===_i)return r.RGBA;if(s===gr)return r.DEPTH_COMPONENT;if(s===gs)return r.DEPTH_STENCIL;if(s===lg)return r.RED;if(s===Dh)return r.RED_INTEGER;if(s===_s)return r.RG;if(s===Nh)return r.RG_INTEGER;if(s===Uh)return r.RGBA_INTEGER;if(s===ql||s===Kl||s===Yl||s===Zl)if(u===Ht)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===ql)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===ql)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qf||s===Kf||s===Yf||s===Zf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===qf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qf||s===Jf||s===$f||s===eh||s===th||s===tc||s===nh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Qf||s===Jf)return u===Ht?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===$f)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===eh)return l.COMPRESSED_R11_EAC;if(s===th)return l.COMPRESSED_SIGNED_R11_EAC;if(s===tc)return l.COMPRESSED_RG11_EAC;if(s===nh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ih||s===rh||s===sh||s===oh||s===ah||s===lh||s===ch||s===uh||s===fh||s===hh||s===dh||s===ph||s===mh||s===gh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===ih)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===oh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ah)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ch)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===uh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===dh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ph)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vh||s===_h||s===xh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===vh)return u===Ht?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_h)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Sh||s===Mh||s===nc||s===yh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Sh)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Mh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===pa?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const q1=`
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

}`;class Y1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new xg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new xi({vertexShader:q1,fragmentShader:K1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new si(new fc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z1 extends Ss{constructor(e,t){super();const s=this;let a=null,l=1,u=null,h="local-floor",p=1,d=null,v=null,_=null,g=null,M=null,E=null;const C=typeof XRWebGLBinding<"u",x=new Y1,S={},R=t.getContextAttributes();let I=null,L=null;const V=[],D=[],B=new Ut;let w=null;const F=new gi;F.viewport=new sn;const Y=new gi;Y.viewport=new sn;const z=[F,Y],Q=new oS;let oe=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ue=V[H];return ue===void 0&&(ue=new rf,V[H]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(H){let ue=V[H];return ue===void 0&&(ue=new rf,V[H]=ue),ue.getGripSpace()},this.getHand=function(H){let ue=V[H];return ue===void 0&&(ue=new rf,V[H]=ue),ue.getHandSpace()};function j(H){const ue=D.indexOf(H.inputSource);if(ue===-1)return;const fe=V[ue];fe!==void 0&&(fe.update(H.inputSource,H.frame,d||u),fe.dispatchEvent({type:H.type,data:H.inputSource}))}function $(){a.removeEventListener("select",j),a.removeEventListener("selectstart",j),a.removeEventListener("selectend",j),a.removeEventListener("squeeze",j),a.removeEventListener("squeezestart",j),a.removeEventListener("squeezeend",j),a.removeEventListener("end",$),a.removeEventListener("inputsourceschange",X);for(let H=0;H<V.length;H++){const ue=D[H];ue!==null&&(D[H]=null,V[H].disconnect(ue))}oe=null,ie=null,x.reset();for(const H in S)delete S[H];e.setRenderTarget(I),M=null,g=null,_=null,a=null,L=null,pe.stop(),s.isPresenting=!1,e.setPixelRatio(w),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){l=H,s.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){h=H,s.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(H){d=H},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(H){if(a=H,a!==null){if(I=e.getRenderTarget(),a.addEventListener("select",j),a.addEventListener("selectstart",j),a.addEventListener("selectend",j),a.addEventListener("squeeze",j),a.addEventListener("squeezestart",j),a.addEventListener("squeezeend",j),a.addEventListener("end",$),a.addEventListener("inputsourceschange",X),R.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ae=null,Le=null;R.depth&&(Le=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=R.stencil?gs:gr,Ae=R.stencil?pa:Yi);const Oe={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(Oe),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new qi(g.textureWidth,g.textureHeight,{format:_i,type:vi,depthTexture:new po(g.textureWidth,g.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const fe={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,t,fe),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new qi(M.framebufferWidth,M.framebufferHeight,{format:_i,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await a.requestReferenceSpace(h),pe.setContext(a),pe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(H){for(let ue=0;ue<H.removed.length;ue++){const fe=H.removed[ue],Ae=D.indexOf(fe);Ae>=0&&(D[Ae]=null,V[Ae].disconnect(fe))}for(let ue=0;ue<H.added.length;ue++){const fe=H.added[ue];let Ae=D.indexOf(fe);if(Ae===-1){for(let Oe=0;Oe<V.length;Oe++)if(Oe>=D.length){D.push(fe),Ae=Oe;break}else if(D[Oe]===null){D[Oe]=fe,Ae=Oe;break}if(Ae===-1)break}const Le=V[Ae];Le&&Le.connect(fe)}}const q=new te,O=new te;function J(H,ue,fe){q.setFromMatrixPosition(ue.matrixWorld),O.setFromMatrixPosition(fe.matrixWorld);const Ae=q.distanceTo(O),Le=ue.projectionMatrix.elements,Oe=fe.projectionMatrix.elements,dt=Le[14]/(Le[10]-1),qe=Le[14]/(Le[10]+1),it=(Le[9]+1)/Le[5],rt=(Le[9]-1)/Le[5],st=(Le[8]-1)/Le[0],At=(Oe[8]+1)/Oe[0],Et=dt*st,Mt=dt*At,U=Ae/(-st+At),gt=U*-st;if(ue.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(gt),H.translateZ(U),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Le[10]===-1)H.projectionMatrix.copy(ue.projectionMatrix),H.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const nt=dt+U,Rt=qe+U,Fe=Et-gt,Lt=Mt+(Ae-gt),P=it*qe/Rt*nt,y=rt*qe/Rt*nt;H.projectionMatrix.makePerspective(Fe,Lt,P,y,nt,Rt),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function b(H,ue){ue===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ue.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(a===null)return;let ue=H.near,fe=H.far;x.texture!==null&&(x.depthNear>0&&(ue=x.depthNear),x.depthFar>0&&(fe=x.depthFar)),Q.near=Y.near=F.near=ue,Q.far=Y.far=F.far=fe,(oe!==Q.near||ie!==Q.far)&&(a.updateRenderState({depthNear:Q.near,depthFar:Q.far}),oe=Q.near,ie=Q.far),Q.layers.mask=H.layers.mask|6,F.layers.mask=Q.layers.mask&-5,Y.layers.mask=Q.layers.mask&-3;const Ae=H.parent,Le=Q.cameras;b(Q,Ae);for(let Oe=0;Oe<Le.length;Oe++)b(Le[Oe],Ae);Le.length===2?J(Q,F,Y):Q.projectionMatrix.copy(F.projectionMatrix),N(H,Q,Ae)};function N(H,ue,fe){fe===null?H.matrix.copy(ue.matrixWorld):(H.matrix.copy(fe.matrixWorld),H.matrix.invert(),H.matrix.multiply(ue.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ue.projectionMatrix),H.projectionMatrixInverse.copy(ue.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ma*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&M===null))return p},this.setFoveation=function(H){p=H,g!==null&&(g.fixedFoveation=H),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Q)},this.getCameraTexture=function(H){return S[H]};let _e=null;function xe(H,ue){if(v=ue.getViewerPose(d||u),E=ue,v!==null){const fe=v.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let Ae=!1;fe.length!==Q.cameras.length&&(Q.cameras.length=0,Ae=!0);for(let qe=0;qe<fe.length;qe++){const it=fe[qe];let rt=null;if(M!==null)rt=M.getViewport(it);else{const At=_.getViewSubImage(g,it);rt=At.viewport,qe===0&&(e.setRenderTargetTextures(L,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(L))}let st=z[qe];st===void 0&&(st=new gi,st.layers.enable(qe),st.viewport=new sn,z[qe]=st),st.matrix.fromArray(it.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(it.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(rt.x,rt.y,rt.width,rt.height),qe===0&&(Q.matrix.copy(st.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ae===!0&&Q.cameras.push(st)}const Le=a.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){_=s.getBinding();const qe=_.getDepthInformation(fe[0]);qe&&qe.isValid&&qe.texture&&x.init(qe,a.renderState)}if(Le&&Le.includes("camera-access")&&C){e.state.unbindTexture(),_=s.getBinding();for(let qe=0;qe<fe.length;qe++){const it=fe[qe].camera;if(it){let rt=S[it];rt||(rt=new xg,S[it]=rt);const st=_.getCameraImage(it);rt.sourceTexture=st}}}}for(let fe=0;fe<V.length;fe++){const Ae=D[fe],Le=V[fe];Ae!==null&&Le!==void 0&&Le.update(Ae,ue,d||u)}_e&&_e(H,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),E=null}const pe=new Eg;pe.setAnimationLoop(xe),this.setAnimationLoop=function(H){_e=H},this.dispose=function(){}}}const Q1=new on,Pg=new St;Pg.set(-1,0,0,0,1,0,0,0,1);function J1(r,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function s(x,S){S.color.getRGB(x.fogColor.value,Sg(r)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function a(x,S,R,I,L){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(x,S):S.isMeshLambertMaterial?(l(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(x,S),_(x,S)):S.isMeshPhongMaterial?(l(x,S),v(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(x,S),g(x,S),S.isMeshPhysicalMaterial&&M(x,S,L)):S.isMeshMatcapMaterial?(l(x,S),E(x,S)):S.isMeshDepthMaterial?l(x,S):S.isMeshDistanceMaterial?(l(x,S),C(x,S)):S.isMeshNormalMaterial?l(x,S):S.isLineBasicMaterial?(u(x,S),S.isLineDashedMaterial&&h(x,S)):S.isPointsMaterial?p(x,S,R,I):S.isSpriteMaterial?d(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Yn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Yn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const R=e.get(S),I=R.envMap,L=R.envMapRotation;I&&(x.envMap.value=I,x.envMapRotation.value.setFromMatrix4(Q1.makeRotationFromEuler(L)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Pg),x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function u(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function h(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function p(x,S,R,I){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*R,x.scale.value=I*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function d(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function v(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function _(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function g(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function M(x,S,R){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Yn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,S){S.matcap&&(x.matcap.value=S.matcap)}function C(x,S){const R=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function $1(r,e,t,s){let a={},l={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,I){const L=I.program;s.uniformBlockBinding(R,L)}function d(R,I){let L=a[R.id];L===void 0&&(E(R),L=v(R),a[R.id]=L,R.addEventListener("dispose",x));const V=I.program;s.updateUBOMapping(R,V);const D=e.render.frame;l[R.id]!==D&&(g(R),l[R.id]=D)}function v(R){const I=_();R.__bindingPointIndex=I;const L=r.createBuffer(),V=R.__size,D=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,V,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,L),L}function _(){for(let R=0;R<h;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const I=a[R.id],L=R.uniforms,V=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let D=0,B=L.length;D<B;D++){const w=Array.isArray(L[D])?L[D]:[L[D]];for(let F=0,Y=w.length;F<Y;F++){const z=w[F];if(M(z,D,F,V)===!0){const Q=z.__offset,oe=Array.isArray(z.value)?z.value:[z.value];let ie=0;for(let j=0;j<oe.length;j++){const $=oe[j],X=C($);typeof $=="number"||typeof $=="boolean"?(z.__data[0]=$,r.bufferSubData(r.UNIFORM_BUFFER,Q+ie,z.__data)):$.isMatrix3?(z.__data[0]=$.elements[0],z.__data[1]=$.elements[1],z.__data[2]=$.elements[2],z.__data[3]=0,z.__data[4]=$.elements[3],z.__data[5]=$.elements[4],z.__data[6]=$.elements[5],z.__data[7]=0,z.__data[8]=$.elements[6],z.__data[9]=$.elements[7],z.__data[10]=$.elements[8],z.__data[11]=0):ArrayBuffer.isView($)?z.__data.set(new $.constructor($.buffer,$.byteOffset,z.__data.length)):($.toArray(z.__data,ie),ie+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(R,I,L,V){const D=R.value,B=I+"_"+L;if(V[B]===void 0)return typeof D=="number"||typeof D=="boolean"?V[B]=D:ArrayBuffer.isView(D)?V[B]=D.slice():V[B]=D.clone(),!0;{const w=V[B];if(typeof D=="number"||typeof D=="boolean"){if(w!==D)return V[B]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(w.equals(D)===!1)return w.copy(D),!0}}return!1}function E(R){const I=R.uniforms;let L=0;const V=16;for(let B=0,w=I.length;B<w;B++){const F=Array.isArray(I[B])?I[B]:[I[B]];for(let Y=0,z=F.length;Y<z;Y++){const Q=F[Y],oe=Array.isArray(Q.value)?Q.value:[Q.value];for(let ie=0,j=oe.length;ie<j;ie++){const $=oe[ie],X=C($),q=L%V,O=q%X.boundary,J=q+O;L+=O,J!==0&&V-J<X.storage&&(L+=V-J),Q.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=L,L+=X.storage}}}const D=L%V;return D>0&&(L+=V-D),R.__size=L,R.__cache={},this}function C(R){const I={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(I.boundary=4,I.storage=4):R.isVector2?(I.boundary=8,I.storage=8):R.isVector3||R.isColor?(I.boundary=16,I.storage=12):R.isVector4?(I.boundary=16,I.storage=16):R.isMatrix3?(I.boundary=48,I.storage=48):R.isMatrix4?(I.boundary=64,I.storage=64):R.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(I.boundary=16,I.storage=R.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",R),I}function x(R){const I=R.target;I.removeEventListener("dispose",x);const L=u.indexOf(I.__bindingPointIndex);u.splice(L,1),r.deleteBuffer(a[I.id]),delete a[I.id],delete l[I.id]}function S(){for(const R in a)r.deleteBuffer(a[R]);u=[],a={},l={}}return{bind:p,update:d,dispose:S}}const eA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function tA(){return Gi===null&&(Gi=new gg(eA,16,16,_s,mr),Gi.name="DFG_LUT",Gi.minFilter=Mn,Gi.magFilter=Mn,Gi.wrapS=fr,Gi.wrapT=fr,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class nA{constructor(e={}){const{canvas:t=sx(),context:s=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:M=vi}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=u;const C=M,x=new Set([Uh,Nh,Dh]),S=new Set([vi,Yi,da,pa,Lh,Ih]),R=new Uint32Array(4),I=new Int32Array(4),L=new te;let V=null,D=null;const B=[],w=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let z=!1,Q=null;this._outputColorSpace=mi;let oe=0,ie=0,j=null,$=-1,X=null;const q=new sn,O=new sn;let J=null;const b=new Bt(0);let N=0,_e=t.width,xe=t.height,pe=1,H=null,ue=null;const fe=new sn(0,0,_e,xe),Ae=new sn(0,0,_e,xe);let Le=!1;const Oe=new vg;let dt=!1,qe=!1;const it=new on,rt=new te,st=new sn,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Mt(){return j===null?pe:1}let U=s;function gt(T,Z){return t.getContext(T,Z)}try{const T={alpha:!0,depth:a,stencil:l,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bh}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",He,!1),U===null){const Z="webgl2";if(U=gt(Z,T),U===null)throw gt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Dt("WebGLRenderer: "+T.message),T}let nt,Rt,Fe,Lt,P,y,ee,ve,Se,Ce,Re,de,me,ke,Ge,Ie,be,ut,ft,vt,G,Pe,ge;function We(){nt=new tE(U),nt.init(),G=new j1(U,nt),Rt=new qy(U,nt,e,G),Fe=new W1(U,nt),Rt.reversedDepthBuffer&&g&&Fe.buffers.depth.setReversed(!0),Lt=new rE(U),P=new P1,y=new X1(U,nt,Fe,P,Rt,G,Lt),ee=new eE(Y),ve=new lS(U),Pe=new Xy(U,ve),Se=new nE(U,ve,Lt,Pe),Ce=new oE(U,Se,ve,Pe,Lt),ut=new sE(U,Rt,y),Ge=new Ky(P),Re=new b1(Y,ee,nt,Rt,Pe,Ge),de=new J1(Y,P),me=new I1,ke=new k1(nt),be=new Wy(Y,ee,Fe,Ce,E,p),Ie=new G1(Y,Ce,Rt),ge=new $1(U,Lt,Rt,Fe),ft=new jy(U,nt,Lt),vt=new iE(U,nt,Lt),Lt.programs=Re.programs,Y.capabilities=Rt,Y.extensions=nt,Y.properties=P,Y.renderLists=me,Y.shadowMap=Ie,Y.state=Fe,Y.info=Lt}We(),C!==vi&&(F=new lE(C,t.width,t.height,a,l));const Ne=new Z1(Y,U);this.xr=Ne,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(T){T!==void 0&&(pe=T,this.setSize(_e,xe,!1))},this.getSize=function(T){return T.set(_e,xe)},this.setSize=function(T,Z,ae=!0){if(Ne.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=T,xe=Z,t.width=Math.floor(T*pe),t.height=Math.floor(Z*pe),ae===!0&&(t.style.width=T+"px",t.style.height=Z+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,T,Z)},this.getDrawingBufferSize=function(T){return T.set(_e*pe,xe*pe).floor()},this.setDrawingBufferSize=function(T,Z,ae){_e=T,xe=Z,pe=ae,t.width=Math.floor(T*ae),t.height=Math.floor(Z*ae),this.setViewport(0,0,T,Z)},this.setEffects=function(T){if(C===vi){Dt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let Z=0;Z<T.length;Z++)if(T[Z].isOutputPass===!0){ht("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(q)},this.getViewport=function(T){return T.copy(fe)},this.setViewport=function(T,Z,ae,se){T.isVector4?fe.set(T.x,T.y,T.z,T.w):fe.set(T,Z,ae,se),Fe.viewport(q.copy(fe).multiplyScalar(pe).round())},this.getScissor=function(T){return T.copy(Ae)},this.setScissor=function(T,Z,ae,se){T.isVector4?Ae.set(T.x,T.y,T.z,T.w):Ae.set(T,Z,ae,se),Fe.scissor(O.copy(Ae).multiplyScalar(pe).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(T){Fe.setScissorTest(Le=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){ue=T},this.getClearColor=function(T){return T.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(T=!0,Z=!0,ae=!0){let se=0;if(T){let re=!1;if(j!==null){const Ue=j.texture.format;re=x.has(Ue)}if(re){const Ue=j.texture.type,Be=S.has(Ue),Te=be.getClearColor(),Ye=be.getClearAlpha(),Ze=Te.r,ot=Te.g,at=Te.b;Be?(R[0]=Ze,R[1]=ot,R[2]=at,R[3]=Ye,U.clearBufferuiv(U.COLOR,0,R)):(I[0]=Ze,I[1]=ot,I[2]=at,I[3]=Ye,U.clearBufferiv(U.COLOR,0,I))}else se|=U.COLOR_BUFFER_BIT}Z&&(se|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(se|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&U.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),Q=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",He,!1),be.dispose(),me.dispose(),ke.dispose(),P.dispose(),ee.dispose(),Ce.dispose(),Pe.dispose(),ge.dispose(),Re.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Mi),Ne.removeEventListener("sessionend",Qi),Qn.stop()};function Me(T){T.preventDefault(),bm("WebGLRenderer: Context Lost."),z=!0}function Xe(){bm("WebGLRenderer: Context Restored."),z=!1;const T=Lt.autoReset,Z=Ie.enabled,ae=Ie.autoUpdate,se=Ie.needsUpdate,re=Ie.type;We(),Lt.autoReset=T,Ie.enabled=Z,Ie.autoUpdate=ae,Ie.needsUpdate=se,Ie.type=re}function He(T){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function _t(T){const Z=T.target;Z.removeEventListener("dispose",_t),Pt(Z)}function Pt(T){an(T),P.remove(T)}function an(T){const Z=P.get(T).programs;Z!==void 0&&(Z.forEach(function(ae){Re.releaseProgram(ae)}),T.isShaderMaterial&&Re.releaseShaderCache(T))}this.renderBufferDirect=function(T,Z,ae,se,re,Ue){Z===null&&(Z=At);const Be=re.isMesh&&re.matrixWorld.determinant()<0,Te=Kr(T,Z,ae,se,re);Fe.setMaterial(se,Be);let Ye=ae.index,Ze=1;if(se.wireframe===!0){if(Ye=Se.getWireframeAttribute(ae),Ye===void 0)return;Ze=2}const ot=ae.drawRange,at=ae.attributes.position;let Je=ot.start*Ze,wt=(ot.start+ot.count)*Ze;Ue!==null&&(Je=Math.max(Je,Ue.start*Ze),wt=Math.min(wt,(Ue.start+Ue.count)*Ze)),Ye!==null?(Je=Math.max(Je,0),wt=Math.min(wt,Ye.count)):at!=null&&(Je=Math.max(Je,0),wt=Math.min(wt,at.count));const Ft=wt-Je;if(Ft<0||Ft===1/0)return;Pe.setup(re,se,Te,ae,Ye);let Gt,Ot=ft;if(Ye!==null&&(Gt=ve.get(Ye),Ot=vt,Ot.setIndex(Gt)),re.isMesh)se.wireframe===!0?(Fe.setLineWidth(se.wireframeLinewidth*Mt()),Ot.setMode(U.LINES)):Ot.setMode(U.TRIANGLES);else if(re.isLine){let Qt=se.linewidth;Qt===void 0&&(Qt=1),Fe.setLineWidth(Qt*Mt()),re.isLineSegments?Ot.setMode(U.LINES):re.isLineLoop?Ot.setMode(U.LINE_LOOP):Ot.setMode(U.LINE_STRIP)}else re.isPoints?Ot.setMode(U.POINTS):re.isSprite&&Ot.setMode(U.TRIANGLES);if(re.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Qt=re._multiDrawStarts,je=re._multiDrawCounts,nn=re._multiDrawCount,xt=Ye?ve.get(Ye).bytesPerElement:1,gn=P.get(se).currentProgram.getUniforms();for(let yn=0;yn<nn;yn++)gn.setValue(U,"_gl_DrawID",yn),Ot.render(Qt[yn]/xt,je[yn])}else if(re.isInstancedMesh)Ot.renderInstances(Je,Ft,re.count);else if(ae.isInstancedBufferGeometry){const Qt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,je=Math.min(ae.instanceCount,Qt);Ot.renderInstances(Je,Ft,je)}else Ot.render(Je,Ft)};function Nn(T,Z,ae){T.transparent===!0&&T.side===Ni&&T.forceSinglePass===!1?(T.side=Yn,T.needsUpdate=!0,Tn(T,Z,ae),T.side=Xr,T.needsUpdate=!0,Tn(T,Z,ae),T.side=Ni):Tn(T,Z,ae)}this.compile=function(T,Z,ae=null){ae===null&&(ae=T),D=ke.get(ae),D.init(Z),w.push(D),ae.traverseVisible(function(re){re.isLight&&re.layers.test(Z.layers)&&(D.pushLight(re),re.castShadow&&D.pushShadow(re))}),T!==ae&&T.traverseVisible(function(re){re.isLight&&re.layers.test(Z.layers)&&(D.pushLight(re),re.castShadow&&D.pushShadow(re))}),D.setupLights();const se=new Set;return T.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ue=re.material;if(Ue)if(Array.isArray(Ue))for(let Be=0;Be<Ue.length;Be++){const Te=Ue[Be];Nn(Te,ae,re),se.add(Te)}else Nn(Ue,ae,re),se.add(Ue)}),D=w.pop(),se},this.compileAsync=function(T,Z,ae=null){const se=this.compile(T,Z,ae);return new Promise(re=>{function Ue(){if(se.forEach(function(Be){P.get(Be).currentProgram.isReady()&&se.delete(Be)}),se.size===0){re(T);return}setTimeout(Ue,10)}nt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Si=null;function Zi(T){Si&&Si(T)}function Mi(){Qn.stop()}function Qi(){Qn.start()}const Qn=new Eg;Qn.setAnimationLoop(Zi),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(T){Si=T,Ne.setAnimationLoop(T),T===null?Qn.stop():Qn.start()},Ne.addEventListener("sessionstart",Mi),Ne.addEventListener("sessionend",Qi),this.render=function(T,Z){if(Z!==void 0&&Z.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;Q!==null&&Q.renderStart(T,Z);const ae=Ne.enabled===!0&&Ne.isPresenting===!0,se=F!==null&&(j===null||ae)&&F.begin(Y,j);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(Z),Z=Ne.getCamera()),T.isScene===!0&&T.onBeforeRender(Y,T,Z,j),D=ke.get(T,w.length),D.init(Z),D.state.textureUnits=y.getTextureUnits(),w.push(D),it.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Oe.setFromProjectionMatrix(it,Xi,Z.reversedDepth),qe=this.localClippingEnabled,dt=Ge.init(this.clippingPlanes,qe),V=me.get(T,B.length),V.init(),B.push(V),Ne.enabled===!0&&Ne.isPresenting===!0){const Be=Y.xr.getDepthSensingMesh();Be!==null&&jr(Be,Z,-1/0,Y.sortObjects)}jr(T,Z,0,Y.sortObjects),V.finish(),Y.sortObjects===!0&&V.sort(H,ue),Et=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,Et&&be.addToRenderList(V,T),this.info.render.frame++,dt===!0&&Ge.beginShadows();const re=D.state.shadowsArray;if(Ie.render(re,T,Z),dt===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&F.hasRenderPass())===!1){const Be=V.opaque,Te=V.transmissive;if(D.setupLights(),Z.isArrayCamera){const Ye=Z.cameras;if(Te.length>0)for(let Ze=0,ot=Ye.length;Ze<ot;Ze++){const at=Ye[Ze];ln(Be,Te,T,at)}Et&&be.render(T);for(let Ze=0,ot=Ye.length;Ze<ot;Ze++){const at=Ye[Ze];Ms(V,T,at,at.viewport)}}else Te.length>0&&ln(Be,Te,T,Z),Et&&be.render(T),Ms(V,T,Z)}j!==null&&ie===0&&(y.updateMultisampleRenderTarget(j),y.updateRenderTargetMipmap(j)),se&&F.end(Y),T.isScene===!0&&T.onAfterRender(Y,T,Z),Pe.resetDefaultState(),$=-1,X=null,w.pop(),w.length>0?(D=w[w.length-1],y.setTextureUnits(D.state.textureUnits),dt===!0&&Ge.setGlobalState(Y.clippingPlanes,D.state.camera)):D=null,B.pop(),B.length>0?V=B[B.length-1]:V=null,Q!==null&&Q.renderEnd()};function jr(T,Z,ae,se){if(T.visible===!1)return;if(T.layers.test(Z.layers)){if(T.isGroup)ae=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Z);else if(T.isLightProbeGrid)D.pushLightProbeGrid(T);else if(T.isLight)D.pushLight(T),T.castShadow&&D.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Oe.intersectsSprite(T)){se&&st.setFromMatrixPosition(T.matrixWorld).applyMatrix4(it);const Be=Ce.update(T),Te=T.material;Te.visible&&V.push(T,Be,Te,ae,st.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Oe.intersectsObject(T))){const Be=Ce.update(T),Te=T.material;if(se&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),st.copy(T.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),st.copy(Be.boundingSphere.center)),st.applyMatrix4(T.matrixWorld).applyMatrix4(it)),Array.isArray(Te)){const Ye=Be.groups;for(let Ze=0,ot=Ye.length;Ze<ot;Ze++){const at=Ye[Ze],Je=Te[at.materialIndex];Je&&Je.visible&&V.push(T,Be,Je,ae,st.z,at)}}else Te.visible&&V.push(T,Be,Te,ae,st.z,null)}}const Ue=T.children;for(let Be=0,Te=Ue.length;Be<Te;Be++)jr(Ue[Be],Z,ae,se)}function Ms(T,Z,ae,se){const{opaque:re,transmissive:Ue,transparent:Be}=T;D.setupLightsView(ae),dt===!0&&Ge.setGlobalState(Y.clippingPlanes,ae),se&&Fe.viewport(q.copy(se)),re.length>0&&wn(re,Z,ae),Ue.length>0&&wn(Ue,Z,ae),Be.length>0&&wn(Be,Z,ae),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function ln(T,Z,ae,se){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[se.id]===void 0){const Je=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[se.id]=new qi(1,1,{generateMipmaps:!0,type:Je?mr:vi,minFilter:ms,samples:Math.max(4,Rt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Ue=D.state.transmissionRenderTarget[se.id],Be=se.viewport||q;Ue.setSize(Be.z*Y.transmissionResolutionScale,Be.w*Y.transmissionResolutionScale);const Te=Y.getRenderTarget(),Ye=Y.getActiveCubeFace(),Ze=Y.getActiveMipmapLevel();Y.setRenderTarget(Ue),Y.getClearColor(b),N=Y.getClearAlpha(),N<1&&Y.setClearColor(16777215,.5),Y.clear(),Et&&be.render(ae);const ot=Y.toneMapping;Y.toneMapping=ji;const at=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),D.setupLightsView(se),dt===!0&&Ge.setGlobalState(Y.clippingPlanes,se),wn(T,ae,se),y.updateMultisampleRenderTarget(Ue),y.updateRenderTargetMipmap(Ue),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let wt=0,Ft=Z.length;wt<Ft;wt++){const Gt=Z[wt],{object:Ot,geometry:Qt,material:je,group:nn}=Gt;if(je.side===Ni&&Ot.layers.test(se.layers)){const xt=je.side;je.side=Yn,je.needsUpdate=!0,Un(Ot,ae,se,Qt,je,nn),je.side=xt,je.needsUpdate=!0,Je=!0}}Je===!0&&(y.updateMultisampleRenderTarget(Ue),y.updateRenderTargetMipmap(Ue))}Y.setRenderTarget(Te,Ye,Ze),Y.setClearColor(b,N),at!==void 0&&(se.viewport=at),Y.toneMapping=ot}function wn(T,Z,ae){const se=Z.isScene===!0?Z.overrideMaterial:null;for(let re=0,Ue=T.length;re<Ue;re++){const Be=T[re],{object:Te,geometry:Ye,group:Ze}=Be;let ot=Be.material;ot.allowOverride===!0&&se!==null&&(ot=se),Te.layers.test(ae.layers)&&Un(Te,Z,ae,Ye,ot,Ze)}}function Un(T,Z,ae,se,re,Ue){T.onBeforeRender(Y,Z,ae,se,re,Ue),T.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),re.onBeforeRender(Y,Z,ae,se,T,Ue),re.transparent===!0&&re.side===Ni&&re.forceSinglePass===!1?(re.side=Yn,re.needsUpdate=!0,Y.renderBufferDirect(ae,Z,se,re,T,Ue),re.side=Xr,re.needsUpdate=!0,Y.renderBufferDirect(ae,Z,se,re,T,Ue),re.side=Ni):Y.renderBufferDirect(ae,Z,se,re,T,Ue),T.onAfterRender(Y,Z,ae,se,re,Ue)}function Tn(T,Z,ae){Z.isScene!==!0&&(Z=At);const se=P.get(T),re=D.state.lights,Ue=D.state.shadowsArray,Be=re.state.version,Te=Re.getParameters(T,re.state,Ue,Z,ae,D.state.lightProbeGridArray),Ye=Re.getProgramCacheKey(Te);let Ze=se.programs;se.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?Z.environment:null,se.fog=Z.fog;const ot=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;se.envMap=ee.get(T.envMap||se.environment,ot),se.envMapRotation=se.environment!==null&&T.envMap===null?Z.environmentRotation:T.envMapRotation,Ze===void 0&&(T.addEventListener("dispose",_t),Ze=new Map,se.programs=Ze);let at=Ze.get(Ye);if(at!==void 0){if(se.currentProgram===at&&se.lightsStateVersion===Be)return On(T,Te),at}else Te.uniforms=Re.getUniforms(T),Q!==null&&T.isNodeMaterial&&Q.build(T,ae,Te),T.onBeforeCompile(Te,Y),at=Re.acquireProgram(Te,Ye),Ze.set(Ye,at),se.uniforms=Te.uniforms;const Je=se.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Je.clippingPlanes=Ge.uniform),On(T,Te),se.needsLights=ai(T),se.lightsStateVersion=Be,se.needsLights&&(Je.ambientLightColor.value=re.state.ambient,Je.lightProbe.value=re.state.probe,Je.directionalLights.value=re.state.directional,Je.directionalLightShadows.value=re.state.directionalShadow,Je.spotLights.value=re.state.spot,Je.spotLightShadows.value=re.state.spotShadow,Je.rectAreaLights.value=re.state.rectArea,Je.ltc_1.value=re.state.rectAreaLTC1,Je.ltc_2.value=re.state.rectAreaLTC2,Je.pointLights.value=re.state.point,Je.pointLightShadows.value=re.state.pointShadow,Je.hemisphereLights.value=re.state.hemi,Je.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Je.spotLightMatrix.value=re.state.spotLightMatrix,Je.spotLightMap.value=re.state.spotLightMap,Je.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=D.state.lightProbeGridArray.length>0,se.currentProgram=at,se.uniformsList=null,at}function Fn(T){if(T.uniformsList===null){const Z=T.currentProgram.getUniforms();T.uniformsList=Ql.seqWithValue(Z.seq,T.uniforms)}return T.uniformsList}function On(T,Z){const ae=P.get(T);ae.outputColorSpace=Z.outputColorSpace,ae.batching=Z.batching,ae.batchingColor=Z.batchingColor,ae.instancing=Z.instancing,ae.instancingColor=Z.instancingColor,ae.instancingMorph=Z.instancingMorph,ae.skinning=Z.skinning,ae.morphTargets=Z.morphTargets,ae.morphNormals=Z.morphNormals,ae.morphColors=Z.morphColors,ae.morphTargetsCount=Z.morphTargetsCount,ae.numClippingPlanes=Z.numClippingPlanes,ae.numIntersection=Z.numClipIntersection,ae.vertexAlphas=Z.vertexAlphas,ae.vertexTangents=Z.vertexTangents,ae.toneMapping=Z.toneMapping}function qr(T,Z){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;L.setFromMatrixPosition(Z.matrixWorld);for(let ae=0,se=T.length;ae<se;ae++){const re=T[ae];if(re.texture!==null&&re.boundingBox.containsPoint(L))return re}return null}function Kr(T,Z,ae,se,re){Z.isScene!==!0&&(Z=At),y.resetTextureUnits();const Ue=Z.fog,Be=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?Z.environment:null,Te=j===null?Y.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:bt.workingColorSpace,Ye=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Ze=ee.get(se.envMap||Be,Ye),ot=se.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,at=!!ae.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Je=!!ae.morphAttributes.position,wt=!!ae.morphAttributes.normal,Ft=!!ae.morphAttributes.color;let Gt=ji;se.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Gt=Y.toneMapping);const Ot=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Qt=Ot!==void 0?Ot.length:0,je=P.get(se),nn=D.state.lights;if(dt===!0&&(qe===!0||T!==X)){const zt=T===X&&se.id===$;Ge.setState(se,T,zt)}let xt=!1;se.version===je.__version?(je.needsLights&&je.lightsStateVersion!==nn.state.version||je.outputColorSpace!==Te||re.isBatchedMesh&&je.batching===!1||!re.isBatchedMesh&&je.batching===!0||re.isBatchedMesh&&je.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&je.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&je.instancing===!1||!re.isInstancedMesh&&je.instancing===!0||re.isSkinnedMesh&&je.skinning===!1||!re.isSkinnedMesh&&je.skinning===!0||re.isInstancedMesh&&je.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&je.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&je.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&je.instancingMorph===!1&&re.morphTexture!==null||je.envMap!==Ze||se.fog===!0&&je.fog!==Ue||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ge.numPlanes||je.numIntersection!==Ge.numIntersection)||je.vertexAlphas!==ot||je.vertexTangents!==at||je.morphTargets!==Je||je.morphNormals!==wt||je.morphColors!==Ft||je.toneMapping!==Gt||je.morphTargetsCount!==Qt||!!je.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,je.__version=se.version);let gn=je.currentProgram;xt===!0&&(gn=Tn(se,Z,re),Q&&se.isNodeMaterial&&Q.onUpdateProgram(se,gn,je));let yn=!1,mt=!1,Jn=!1;const kt=gn.getUniforms(),qt=je.uniforms;if(Fe.useProgram(gn.program)&&(yn=!0,mt=!0,Jn=!0),se.id!==$&&($=se.id,mt=!0),je.needsLights){const zt=qr(D.state.lightProbeGridArray,re);je.lightProbeGrid!==zt&&(je.lightProbeGrid=zt,mt=!0)}if(yn||X!==T){Fe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),kt.setValue(U,"projectionMatrix",T.projectionMatrix),kt.setValue(U,"viewMatrix",T.matrixWorldInverse);const Ei=kt.map.cameraPosition;Ei!==void 0&&Ei.setValue(U,rt.setFromMatrixPosition(T.matrixWorld)),Rt.logarithmicDepthBuffer&&kt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&kt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,mt=!0,Jn=!0)}if(je.needsLights&&(nn.state.directionalShadowMap.length>0&&kt.setValue(U,"directionalShadowMap",nn.state.directionalShadowMap,y),nn.state.spotShadowMap.length>0&&kt.setValue(U,"spotShadowMap",nn.state.spotShadowMap,y),nn.state.pointShadowMap.length>0&&kt.setValue(U,"pointShadowMap",nn.state.pointShadowMap,y)),re.isSkinnedMesh){kt.setOptional(U,re,"bindMatrix"),kt.setOptional(U,re,"bindMatrixInverse");const zt=re.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),kt.setValue(U,"boneTexture",zt.boneTexture,y))}re.isBatchedMesh&&(kt.setOptional(U,re,"batchingTexture"),kt.setValue(U,"batchingTexture",re._matricesTexture,y),kt.setOptional(U,re,"batchingIdTexture"),kt.setValue(U,"batchingIdTexture",re._indirectTexture,y),kt.setOptional(U,re,"batchingColorTexture"),re._colorsTexture!==null&&kt.setValue(U,"batchingColorTexture",re._colorsTexture,y));const yi=ae.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&ut.update(re,ae,gn),(mt||je.receiveShadow!==re.receiveShadow)&&(je.receiveShadow=re.receiveShadow,kt.setValue(U,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&Z.environment!==null&&(qt.envMapIntensity.value=Z.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=tA()),mt){if(kt.setValue(U,"toneMappingExposure",Y.toneMappingExposure),je.needsLights&&oi(qt,Jn),Ue&&se.fog===!0&&de.refreshFogUniforms(qt,Ue),de.refreshMaterialUniforms(qt,se,pe,xe,D.state.transmissionRenderTarget[T.id]),je.needsLights&&je.lightProbeGrid){const zt=je.lightProbeGrid;qt.probesSH.value=zt.texture,qt.probesMin.value.copy(zt.boundingBox.min),qt.probesMax.value.copy(zt.boundingBox.max),qt.probesResolution.value.copy(zt.resolution)}Ql.upload(U,Fn(je),qt,y)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Ql.upload(U,Fn(je),qt,y),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&kt.setValue(U,"center",re.center),kt.setValue(U,"modelViewMatrix",re.modelViewMatrix),kt.setValue(U,"normalMatrix",re.normalMatrix),kt.setValue(U,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const zt=se.uniformsGroups;for(let Ei=0,Oi=zt.length;Ei<Oi;Ei++){const Yr=zt[Ei];ge.update(Yr,gn),ge.bind(Yr,gn)}}return gn}function oi(T,Z){T.ambientLightColor.needsUpdate=Z,T.lightProbe.needsUpdate=Z,T.directionalLights.needsUpdate=Z,T.directionalLightShadows.needsUpdate=Z,T.pointLights.needsUpdate=Z,T.pointLightShadows.needsUpdate=Z,T.spotLights.needsUpdate=Z,T.spotLightShadows.needsUpdate=Z,T.rectAreaLights.needsUpdate=Z,T.hemisphereLights.needsUpdate=Z}function ai(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(T,Z,ae){const se=P.get(T);se.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),P.get(T.texture).__webglTexture=Z,P.get(T.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ae,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,Z){const ae=P.get(T);ae.__webglFramebuffer=Z,ae.__useDefaultFramebuffer=Z===void 0};const jt=U.createFramebuffer();this.setRenderTarget=function(T,Z=0,ae=0){j=T,oe=Z,ie=ae;let se=null,re=!1,Ue=!1;if(T){const Te=P.get(T);if(Te.__useDefaultFramebuffer!==void 0){Fe.bindFramebuffer(U.FRAMEBUFFER,Te.__webglFramebuffer),q.copy(T.viewport),O.copy(T.scissor),J=T.scissorTest,Fe.viewport(q),Fe.scissor(O),Fe.setScissorTest(J),$=-1;return}else if(Te.__webglFramebuffer===void 0)y.setupRenderTarget(T);else if(Te.__hasExternalTextures)y.rebindTextures(T,P.get(T.texture).__webglTexture,P.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ot=T.depthTexture;if(Te.__boundDepthTexture!==ot){if(ot!==null&&P.has(ot)&&(T.width!==ot.image.width||T.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(T)}}const Ye=T.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ue=!0);const Ze=P.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ze[Z])?se=Ze[Z][ae]:se=Ze[Z],re=!0):T.samples>0&&y.useMultisampledRTT(T)===!1?se=P.get(T).__webglMultisampledFramebuffer:Array.isArray(Ze)?se=Ze[ae]:se=Ze,q.copy(T.viewport),O.copy(T.scissor),J=T.scissorTest}else q.copy(fe).multiplyScalar(pe).floor(),O.copy(Ae).multiplyScalar(pe).floor(),J=Le;if(ae!==0&&(se=jt),Fe.bindFramebuffer(U.FRAMEBUFFER,se)&&Fe.drawBuffers(T,se),Fe.viewport(q),Fe.scissor(O),Fe.setScissorTest(J),re){const Te=P.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te.__webglTexture,ae)}else if(Ue){const Te=Z;for(let Ye=0;Ye<T.textures.length;Ye++){const Ze=P.get(T.textures[Ye]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ye,Ze.__webglTexture,ae,Te)}}else if(T!==null&&ae!==0){const Te=P.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Te.__webglTexture,ae)}$=-1},this.readRenderTargetPixels=function(T,Z,ae,se,re,Ue,Be,Te=0){if(!(T&&T.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=P.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Be!==void 0&&(Ye=Ye[Be]),Ye){Fe.bindFramebuffer(U.FRAMEBUFFER,Ye);try{const Ze=T.textures[Te],ot=Ze.format,at=Ze.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Te),!Rt.textureFormatReadable(ot)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(at)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=T.width-se&&ae>=0&&ae<=T.height-re&&U.readPixels(Z,ae,se,re,G.convert(ot),G.convert(at),Ue)}finally{const Ze=j!==null?P.get(j).__webglFramebuffer:null;Fe.bindFramebuffer(U.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(T,Z,ae,se,re,Ue,Be,Te=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=P.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Be!==void 0&&(Ye=Ye[Be]),Ye)if(Z>=0&&Z<=T.width-se&&ae>=0&&ae<=T.height-re){Fe.bindFramebuffer(U.FRAMEBUFFER,Ye);const Ze=T.textures[Te],ot=Ze.format,at=Ze.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Te),!Rt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.bufferData(U.PIXEL_PACK_BUFFER,Ue.byteLength,U.STREAM_READ),U.readPixels(Z,ae,se,re,G.convert(ot),G.convert(at),0);const wt=j!==null?P.get(j).__webglFramebuffer:null;Fe.bindFramebuffer(U.FRAMEBUFFER,wt);const Ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ox(U,Ft,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ue),U.deleteBuffer(Je),U.deleteSync(Ft),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,Z=null,ae=0){const se=Math.pow(2,-ae),re=Math.floor(T.image.width*se),Ue=Math.floor(T.image.height*se),Be=Z!==null?Z.x:0,Te=Z!==null?Z.y:0;y.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,ae,0,0,Be,Te,re,Ue),Fe.unbindTexture()};const So=U.createFramebuffer(),tn=U.createFramebuffer();this.copyTextureToTexture=function(T,Z,ae=null,se=null,re=0,Ue=0){let Be,Te,Ye,Ze,ot,at,Je,wt,Ft;const Gt=T.isCompressedTexture?T.mipmaps[Ue]:T.image;if(ae!==null)Be=ae.max.x-ae.min.x,Te=ae.max.y-ae.min.y,Ye=ae.isBox3?ae.max.z-ae.min.z:1,Ze=ae.min.x,ot=ae.min.y,at=ae.isBox3?ae.min.z:0;else{const qt=Math.pow(2,-re);Be=Math.floor(Gt.width*qt),Te=Math.floor(Gt.height*qt),T.isDataArrayTexture?Ye=Gt.depth:T.isData3DTexture?Ye=Math.floor(Gt.depth*qt):Ye=1,Ze=0,ot=0,at=0}se!==null?(Je=se.x,wt=se.y,Ft=se.z):(Je=0,wt=0,Ft=0);const Ot=G.convert(Z.format),Qt=G.convert(Z.type);let je;Z.isData3DTexture?(y.setTexture3D(Z,0),je=U.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(y.setTexture2DArray(Z,0),je=U.TEXTURE_2D_ARRAY):(y.setTexture2D(Z,0),je=U.TEXTURE_2D),Fe.activeTexture(U.TEXTURE0),Fe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Z.flipY),Fe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Fe.pixelStorei(U.UNPACK_ALIGNMENT,Z.unpackAlignment);const nn=Fe.getParameter(U.UNPACK_ROW_LENGTH),xt=Fe.getParameter(U.UNPACK_IMAGE_HEIGHT),gn=Fe.getParameter(U.UNPACK_SKIP_PIXELS),yn=Fe.getParameter(U.UNPACK_SKIP_ROWS),mt=Fe.getParameter(U.UNPACK_SKIP_IMAGES);Fe.pixelStorei(U.UNPACK_ROW_LENGTH,Gt.width),Fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Gt.height),Fe.pixelStorei(U.UNPACK_SKIP_PIXELS,Ze),Fe.pixelStorei(U.UNPACK_SKIP_ROWS,ot),Fe.pixelStorei(U.UNPACK_SKIP_IMAGES,at);const Jn=T.isDataArrayTexture||T.isData3DTexture,kt=Z.isDataArrayTexture||Z.isData3DTexture;if(T.isDepthTexture){const qt=P.get(T),yi=P.get(Z),zt=P.get(qt.__renderTarget),Ei=P.get(yi.__renderTarget);Fe.bindFramebuffer(U.READ_FRAMEBUFFER,zt.__webglFramebuffer),Fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Oi=0;Oi<Ye;Oi++)Jn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,P.get(T).__webglTexture,re,at+Oi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,P.get(Z).__webglTexture,Ue,Ft+Oi)),U.blitFramebuffer(Ze,ot,Be,Te,Je,wt,Be,Te,U.DEPTH_BUFFER_BIT,U.NEAREST);Fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(re!==0||T.isRenderTargetTexture||P.has(T)){const qt=P.get(T),yi=P.get(Z);Fe.bindFramebuffer(U.READ_FRAMEBUFFER,So),Fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,tn);for(let zt=0;zt<Ye;zt++)Jn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qt.__webglTexture,re,at+zt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qt.__webglTexture,re),kt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yi.__webglTexture,Ue,Ft+zt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,yi.__webglTexture,Ue),re!==0?U.blitFramebuffer(Ze,ot,Be,Te,Je,wt,Be,Te,U.COLOR_BUFFER_BIT,U.NEAREST):kt?U.copyTexSubImage3D(je,Ue,Je,wt,Ft+zt,Ze,ot,Be,Te):U.copyTexSubImage2D(je,Ue,Je,wt,Ze,ot,Be,Te);Fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else kt?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(je,Ue,Je,wt,Ft,Be,Te,Ye,Ot,Qt,Gt.data):Z.isCompressedArrayTexture?U.compressedTexSubImage3D(je,Ue,Je,wt,Ft,Be,Te,Ye,Ot,Gt.data):U.texSubImage3D(je,Ue,Je,wt,Ft,Be,Te,Ye,Ot,Qt,Gt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ue,Je,wt,Be,Te,Ot,Qt,Gt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ue,Je,wt,Gt.width,Gt.height,Ot,Gt.data):U.texSubImage2D(U.TEXTURE_2D,Ue,Je,wt,Be,Te,Ot,Qt,Gt);Fe.pixelStorei(U.UNPACK_ROW_LENGTH,nn),Fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt),Fe.pixelStorei(U.UNPACK_SKIP_PIXELS,gn),Fe.pixelStorei(U.UNPACK_SKIP_ROWS,yn),Fe.pixelStorei(U.UNPACK_SKIP_IMAGES,mt),Ue===0&&Z.generateMipmaps&&U.generateMipmap(je),Fe.unbindTexture()},this.initRenderTarget=function(T){P.get(T).__webglFramebuffer===void 0&&y.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?y.setTextureCube(T,0):T.isData3DTexture?y.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?y.setTexture2DArray(T,0):y.setTexture2D(T,0),Fe.unbindTexture()},this.resetState=function(){oe=0,ie=0,j=null,Fe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}function oa(r,e,t){const s=e/100,a=t/100,l=(1-Math.abs(2*a-1))*s,u=l*(1-Math.abs(r/60%2-1)),h=a-l/2;let p=0,d=0,v=0;r<60?[p,d,v]=[l,u,0]:r<120?[p,d,v]=[u,l,0]:r<180?[p,d,v]=[0,l,u]:r<240?[p,d,v]=[0,u,l]:r<300?[p,d,v]=[u,0,l]:[p,d,v]=[l,0,u];const _=g=>Math.round((g+h)*255).toString(16).padStart(2,"0");return`#${_(p)}${_(d)}${_(v)}`}function Jl(r,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[oa(r,e,50),"#FFFFFF",oa(r,e*.6,70),oa(r,e*.8,35)];const s=oa(r,e,50),a=oa((r+180)%360,e,50);return[s,a,s,a]}const E0=[1],ua=[0];let Lg=0;const iA=new Set;function rA(r,e){for(let t=0;t<e.length;t++){const s=e[t]??1;E0[t]=s,ua[t]=(ua[t]??0)+r*s}for(const t of iA)ua[t]=(ua[t]??0)+r*(E0[t]??1)}function sA(r){Lg=r}function oA(){return ua[Lg]??0}const aA=12,Vr=Math.PI*2;function lA(r,e){if(e<=0)return 0;const t=Math.min(2.2,10/e);return Math.min(e,1+Math.floor(r/t))}const Xl=[[[0,"#5ea733"],[.1,"#a9c97a"],[.17,"#efe6c6"],[.26,"#f2b2c5"],[.36,"#df4a67"],[.45,"#b81f3d"],[.53,"#1a0d33"],[.61,"#2e44d8"],[.7,"#5f78f0"],[.79,"#dfe4f4"],[.87,"#eee6c4"],[.94,"#9cc46c"],[1,"#5ea733"]],[[0,"#e0a82e"],[.1,"#f0cd7a"],[.17,"#f6ead0"],[.26,"#f6b49a"],[.36,"#e8573a"],[.45,"#b52a1c"],[.53,"#2a0a0c"],[.61,"#a8401c"],[.7,"#e8823e"],[.79,"#f7dcc4"],[.87,"#f4e8c8"],[.94,"#e9c060"],[1,"#e0a82e"]],[[0,"#1f9a8a"],[.1,"#86d1bf"],[.17,"#eaf2e2"],[.26,"#9fe3e8"],[.36,"#25b5d4"],[.45,"#13708f"],[.53,"#0b1430"],[.61,"#5a35c8"],[.7,"#9a7cf0"],[.79,"#e6e0f6"],[.87,"#e4f2ea"],[.94,"#5cc2a6"],[1,"#1f9a8a"]],[[0,"#2b3f8f"],[.1,"#7d8fd0"],[.17,"#eef0f6"],[.26,"#c9d0ea"],[.36,"#5266b8"],[.45,"#22307a"],[.53,"#070a1c"],[.61,"#26357e"],[.7,"#6a7cc6"],[.79,"#e8ebf5"],[.87,"#f4f3ee"],[.94,"#8a9ad6"],[1,"#2b3f8f"]]],cA=["Inflated","Paper","Line","Print"],uA=`
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
}`,fA=`
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
}`;function pc(r){const e=r.replace("#",""),t=e.length===3?e.split("").map(g=>g+g).join(""):e,s=(parseInt(t.slice(0,2),16)||0)/255,a=(parseInt(t.slice(2,4),16)||0)/255,l=(parseInt(t.slice(4,6),16)||0)/255,u=Math.max(s,a,l),h=Math.min(s,a,l),p=(u+h)/2;if(u===h)return[0,0,p];const d=u-h,v=p>.5?d/(2-u-h):d/(u+h);let _;return u===s?_=((a-l)/d+(a<l?6:0))*60:u===a?_=((l-s)/d+2)*60:_=((s-a)/d+4)*60,[_,v,p]}function Ig(r,e,t){return`hsl(${(r%360+360)%360} ${Math.max(0,Math.min(1,e))*100}% ${t*100}%)`}const A0=pc(Jl(245,100,"contrast")[0]);function hA(r){const[e,t]=pc(r[0]??"#000000");return t===0?{hue:0,sat:0}:{hue:e-A0[0],sat:t/(A0[1]||1)}}function w0(r,e){const t=document.createElement("canvas");t.width=512,t.height=1;const s=t.getContext("2d"),a=s.createLinearGradient(0,0,512,0);for(const[u,h]of r){const[p,d,v]=pc(h);a.addColorStop(u,Ig(p+e.hue,d*e.sat,v))}s.fillStyle=a,s.fillRect(0,0,512,1);const l=new Zx(t);return l.wrapS=ec,l.magFilter=Mn,l.minFilter=Mn,l.generateMipmaps=!1,l}class dA{constructor(){ce(this,"textures");ce(this,"turnKey","#reference");ce(this,"palFrom",0);ce(this,"palTo",0);ce(this,"palMix",1);ce(this,"styleUniform",{value:0});ce(this,"turn",{hue:0,sat:1});this.textures=Xl.map(e=>w0(e,{hue:0,sat:1}))}shared(){return{uPalA:{value:this.textures[0]},uPalB:{value:this.textures[0]},uPalMix:{value:0},uT:{value:0},uOff:{value:0},uWA:{value:0},uWB:{value:0},uWC:{value:0},uDepth:{value:.32},uSpec:{value:.16},uCenter:{value:new te}}}material(e,t,s={}){return new xi({vertexShader:uA,fragmentShader:fA,side:Ni,uniforms:{...t,uStyle:this.styleUniform,uMode:{value:e},uAng:{value:0},uWS:{value:1},...s}})}update(e,t,s,a,l=0){this.styleUniform.value=Math.max(0,Math.min(cA.length-1,Math.round(l)));const u=e[0]??"";if(u!==this.turnKey){this.turnKey=u;const p=hA(e);this.turn=p;const d=this.textures;this.textures=Xl.map(v=>w0(v,p));for(const v of d)v.dispose()}const h=Math.max(0,Math.min(Xl.length-1,Math.round(t)));a&&(this.palFrom=this.palTo=h,this.palMix=1),h!==this.palTo&&(this.palFrom=this.palMix<.5?this.palFrom:this.palTo,this.palTo=h,this.palMix=0),this.palMix=Math.min(1,this.palMix+s)}apply(e,t,s){e.uPalA.value=this.textures[this.palFrom],e.uPalB.value=this.textures[this.palTo],e.uPalMix.value=this.palMix,e.uDepth.value=t,e.uSpec.value=s}backdrop(e,t,s,a){const l=this.styleUniform.value;if(l===0){Dg(e,t,s,a);return}const u=Math.max(0,Math.min(1,a));if(e.globalCompositeOperation="source-over",e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,t,s),l===2||u<=0)return;const h=Xl[this.palTo],p=h.find(([g])=>g===(l===1?.53:.17))??h[0],[d,v,_]=pc(p[1]);e.globalAlpha=u,e.fillStyle=Ig(d+this.turn.hue,v*this.turn.sat,l===1?_*1.25:_),e.fillRect(0,0,t,s),e.globalAlpha=1}dispose(){for(const e of this.textures)e.dispose();this.textures=[]}}function pA(r,e,t){const s=e/t,a=30,l=Math.tan(a/2*Math.PI/180),u=s<16/9?2*Math.atan(l*(16/9)/s)*180/Math.PI:a;(r.aspect!==s||r.fov!==u)&&(r.aspect=s,r.fov=u,r.updateProjectionMatrix())}function Dg(r,e,t,s){const a=Math.max(0,Math.min(1,s)),l=u=>{const h=parseInt(u.slice(1),16),p=Math.round((h>>16&255)*a),d=Math.round((h>>8&255)*a),v=Math.round((h&255)*a);return`rgb(${p},${d},${v})`};if(r.globalCompositeOperation="source-over",r.globalAlpha=1,a<=0)r.fillStyle="#000";else{const u=r.createLinearGradient(0,0,0,t);u.addColorStop(0,l("#8e94a2")),u.addColorStop(.2,l("#bfc3d0")),u.addColorStop(.42,l("#dde1ec")),u.addColorStop(.68,l("#d9dde9")),u.addColorStop(1,l("#9ea2af")),r.fillStyle=u}r.fillRect(0,0,e,t)}function mA(r){const e=new nA({canvas:r,antialias:!0,alpha:!0,powerPreference:"high-performance"});return e.setPixelRatio(1),e.setClearColor(0,0),e}function gA(r,e,t,s){r.fillStyle="#000",r.fillRect(0,0,e,t),r.fillStyle="rgba(255,255,255,0.4)",r.font="500 14px ui-monospace, monospace",r.textAlign="center",r.fillText(`${s} NEEDS WEBGL`,e/2,t/2)}class Hh{constructor(e){ce(this,"dt",1/60);ce(this,"step",0);ce(this,"openness");ce(this,"aim",{x:0,y:0});ce(this,"spread",.4);ce(this,"depth",.35);ce(this,"turn",0);ce(this,"pinch",0);ce(this,"fist",0);ce(this,"clapped",!1);ce(this,"clapStrength",0);ce(this,"wasClapping",!1);ce(this,"burst",0);ce(this,"bump",0);ce(this,"bass",0);ce(this,"mid",0);ce(this,"high",0);ce(this,"kick",0);ce(this,"snare",0);ce(this,"hat",0);ce(this,"energy",.5);ce(this,"build",0);ce(this,"drop",0);ce(this,"bright",.5);ce(this,"lastClock",null);ce(this,"lastFrame",0);this.rest=e,this.openness=e}read(e,t){const s=performance.now(),a=this.lastFrame?Math.min(.1,(s-this.lastFrame)/1e3):1/60;this.lastFrame=s;const l=oA();this.step=this.lastClock===null?0:Math.max(-.2,Math.min(.2,l-this.lastClock)),this.lastClock=l,this.dt=a;const u=[e.left,e.right].filter(Boolean);let h=this.rest;if(u.length){const R=Math.max(...u.map(I=>I.gesture==="fist"?0:I.fingerCount??3));h=Math.max(0,Math.min(1,R/5))}this.openness+=(h-this.openness)*(1-Math.exp(-a*5));let p=0,d=0;u.length&&(p=(u.reduce((R,I)=>R+I.position.x,0)/u.length-.5)*2,d=(.5-u.reduce((R,I)=>R+I.position.y,0)/u.length)*2);const v=1-Math.exp(-a*4);this.aim.x+=(p-this.aim.x)*v,this.aim.y+=(d-this.aim.y)*v,this.spread+=((e.distanceBetweenHands??.4)-this.spread)*v;const _=u.map(R=>R.depth).filter(R=>R!==void 0);this.depth+=((_.length?Math.max(..._):.35)-this.depth)*v;const g=e.twist??(u.length===1?u[0].angle??0:0);this.turn+=(g-this.turn)*v;const M=u.length?Math.max(...u.map(R=>R.pinch??0)):0;this.pinch+=(M-this.pinch)*(1-Math.exp(-a*10));const E=u.length?Math.max(...u.map(R=>R.openness!==void 0?1-R.openness:R.gesture==="fist"?1:0)):0;this.fist+=(Math.min(1,Math.max(0,(E-.35)/.4))-this.fist)*(1-Math.exp(-a*8));const C=!!e.clapping&&!e.synthetic;this.clapped=C&&!this.wasClapping,this.clapStrength=this.clapped?Math.max(.6,e.clapIntensity??1):0,this.wasClapping=C;const x=e.clapping?e.clapIntensity??1:0;this.burst=Math.max(this.burst*Math.exp(-a*2.2),x);const S=(R,I,L,V)=>R+(I-R)*(1-Math.exp(-a*(I>R?L:V)));this.bass=S(this.bass,(t==null?void 0:t.bass)??0,6,1.5),this.mid=S(this.mid,(t==null?void 0:t.mid)??0,4,1),this.high=S(this.high,(t==null?void 0:t.high)??0,8,2.5),this.bump*=Math.exp(-a/.07),t!=null&&t.beat&&(this.bump=Math.max(this.bump,t.beatIntensity||1)),this.kick=(t==null?void 0:t.kick)??0,this.bump=Math.max(this.bump,this.kick*.9),this.snare=(t==null?void 0:t.snare)??0,this.hat=(t==null?void 0:t.hat)??0,this.energy=S(this.energy,t!=null&&t.live?t.energy??.5:.5,1,1),this.build=(t==null?void 0:t.build)??0,this.drop=(t==null?void 0:t.drop)??0,this.bright=S(this.bright,(t==null?void 0:t.bright)??.5,1,1)}}class vA{constructor(e,t){ce(this,"canvas");ce(this,"ctx");ce(this,"cfg",xm);ce(this,"playing",new Hh(.6));ce(this,"n",0);ce(this,"x",new Float32Array(0));ce(this,"y",new Float32Array(0));ce(this,"z",new Float32Array(0));ce(this,"vx",new Float32Array(0));ce(this,"vy",new Float32Array(0));ce(this,"light",new Float32Array(0));ce(this,"phase",new Float32Array(0));ce(this,"time",0);ce(this,"events",[]);ce(this,"lastKick",0);ce(this,"lastSnare",0);ce(this,"lastHat",0);ce(this,"kicks",0);ce(this,"flow",[Math.random()*10,Math.random()*10,Math.random()*10]);ce(this,"flowTo",[...this.flow]);ce(this,"gather",0);ce(this,"breath",0);ce(this,"grain",document.createElement("canvas"));ce(this,"aspect",16/9);this.canvas=e,this.ctx=t,this.grain.width=this.grain.height=256;const s=this.grain.getContext("2d"),a=s.createImageData(256,256);for(let l=0;l<a.data.length;l+=4){const u=Math.random()<.5?0:255;a.data[l]=a.data[l+1]=a.data[l+2]=u,a.data[l+3]=Math.random()<.35?255:0}s.putImageData(a,0,0)}setParams(e){this.cfg=Rh(xm,e)}resize(e){const t=Math.min(this.n,e),s=a=>{const l=new Float32Array(e);return l.set(a.subarray(0,t)),l};this.x=s(this.x),this.y=s(this.y),this.z=s(this.z),this.vx=s(this.vx),this.vy=s(this.vy),this.light=s(this.light),this.phase=s(this.phase);for(let a=t;a<e;a++)this.x[a]=Math.random()*this.aspect,this.y[a]=Math.random(),this.z[a]=.25+.75*Math.pow(Math.random(),2.2),this.phase[a]=Math.random()*Math.PI*2,this.light[a]=0;this.n=e}angleAt(e,t,s){const[a,l,u]=this.flow;return Math.sin(e*1.3+a+s*.05)*1.7+Math.cos(t*1.7-l+s*.04)*1.5+Math.sin((e+t)*.8+u)*1.2}render(e,t,s){const{canvas:a,ctx:l,cfg:u}=this,h=a.width,p=a.height;if(!h||!p)return;this.aspect=h/p;const d=this.aspect,v=this.playing;v.read(e,s);const _=Math.min(.1,v.dt),g=Math.min(.08,Math.max(0,v.step));this.time+=g;const M=Math.max(50,Math.min(6e3,Math.round(u.field.count)));M!==this.n&&this.resize(M);const E=!!(s!=null&&s.live),C=O=>1-Math.exp(-_*O),x=Math.max(v.kick,v.bump)*u.sound.beat;if(x>.45&&this.lastKick<=.45){this.kicks+=1;const O=Math.random(),J=(.5+.6*Math.random())*Math.min(1.4,x),b=O<.5?0:O<.82?1:2;this.events.push({kind:b,x:Math.random()*d,y:.1+.8*Math.random(),age:0,strength:J,angle:Math.random()*Math.PI,reach:.2+.5*Math.random()}),this.kicks%(6+Math.floor(Math.random()*6))===0&&(this.flowTo=this.flowTo.map(N=>N+(Math.random()-.5)*4))}this.lastKick=x;const S=(O,J)=>{for(let b=0;b<O;b++){const N=Math.floor(Math.random()*this.n);this.light[N]=Math.max(this.light[N],J)}},R=v.snare*u.sound.sparks;R>.5&&this.lastSnare<=.5&&S(Math.round(this.n*.012),1.1),this.lastSnare=R;const I=v.hat*u.sound.sparks;if(I>.5&&this.lastHat<=.5&&S(Math.round(this.n*.004),.7),this.lastHat=I,!E&&Math.random()<_*.35&&this.events.push({kind:0,x:Math.random()*d,y:Math.random(),age:0,strength:.45,angle:0,reach:.4}),v.clapped&&u.hands.clap>0)for(let O=0;O<this.n;O++){this.light[O]=Math.max(this.light[O],1.2*u.hands.clap);const J=this.x[O]-d/2,b=this.y[O]-.5,N=Math.hypot(J,b)+.05;this.vx[O]+=J/N*.25*u.hands.clap,this.vy[O]+=b/N*.25*u.hands.clap}this.breath+=(v.bass*u.sound.bass-this.breath)*C(4);for(let O=0;O<3;O++)this.flow[O]+=(this.flowTo[O]-this.flow[O])*C(.3);const V=!e.synthetic?[e.left,e.right].filter(O=>!!O):[],D=V.length?v.fist:0,B=Math.max(Math.min(1,u.form.circle),D*Math.min(1,u.hands.reach));this.gather+=(B-this.gather)*C(B>this.gather?.9:.6);const w=.018*u.field.drift,F=this.time,Y=d/2,z=.5,Q=.3,oe=F*.04,ie=Math.exp(-_*2.2);for(let O=0;O<this.n;O++){const J=this.z[O],b=this.angleAt(this.x[O],this.y[O],F);let N=this.x[O]+(Math.cos(b)*w*J+this.vx[O])*g,_e=this.y[O]+(Math.sin(b)*w*J+this.vy[O])*g;N+=(N-Y)*this.breath*.004*J,_e+=(_e-z)*this.breath*.004*J;for(const xe of V){const pe=xe.position.x*d,H=xe.position.y,ue=N-pe,fe=_e-H,Ae=ue*ue+fe*fe,Le=Math.exp(-Ae/.02)*(1-D)*u.hands.reach;if(Le>.01){const Oe=Math.sqrt(Ae)+.01;N+=ue/Oe*Le*.006,_e+=fe/Oe*Le*.006,this.light[O]=Math.max(this.light[O],Le*.9)}}if(this.gather>.002){const xe=this.phase[O]+oe,pe=Q*(.94+.12*(O*.618%1))*(1+.06*this.breath),H=Y+Math.cos(xe)*pe,ue=z+Math.sin(xe)*pe,fe=this.gather*this.gather*C(1.6);N+=(H-N)*fe,_e+=(ue-_e)*fe}N<-.02?N+=d+.04:N>d+.02&&(N-=d+.04),_e<-.02?_e+=1.04:_e>1.02&&(_e-=1.04),this.x[O]=N,this.y[O]=_e,this.vx[O]*=ie,this.vy[O]*=ie,this.light[O]*=Math.exp(-_*(1.6+.8*Math.random()))}for(const O of this.events){O.age+=_;const J=O.age*.55;for(let b=0;b<this.n;b++){const N=this.x[b]-O.x,_e=this.y[b]-O.y;let xe=0;if(O.kind===0){const pe=Math.hypot(N,_e)-J;xe=Math.exp(-(pe*pe)/.0012)}else if(O.kind===1)O.age<_*1.5&&Math.hypot(N,_e)<O.reach*.6&&Math.random()<.35&&(xe=.6+Math.random()*.6);else{const pe=Math.cos(O.angle),H=Math.sin(O.angle),ue=N*-H+_e*pe-(O.age-.6)*.08;xe=Math.exp(-(ue*ue)/25e-5)*(Math.abs(N*pe+_e*H)<O.age*1.4?1:0)}xe>.02&&(this.light[b]=Math.max(this.light[b],1.6*xe*O.strength*(1-O.age/2.2)))}}this.events=this.events.filter(O=>O.age<2.2),l.globalCompositeOperation="source-over",l.globalAlpha=1-.92*Math.max(0,Math.min(1,u.look.trail)),l.fillStyle="#000",l.fillRect(0,0,h,p),l.globalAlpha=1;const j=8,$=[];for(let O=0;O<j;O++)$.push(new Path2D);const X=Math.max(.6,p/720*1.6*u.field.size),q=.2*u.look.glow;for(let O=0;O<this.n;O++){const J=this.z[O],b=.6+.4*Math.sin(F*.7+this.phase[O]*5),N=Math.min(1,(q*b+this.light[O])*(.35+.65*J)+.2*this.gather*J);if(N<.03)continue;const _e=Math.min(j-1,Math.floor(N*j)),xe=X*(.5+J)*(1+.6*Math.min(1,this.light[O]));$[_e].rect(this.x[O]*p-xe/2,this.y[O]*p-xe/2,xe,xe)}for(let O=0;O<j;O++)l.globalAlpha=(O+.5)/j,l.fillStyle="#fff",l.fill($[O]);if(u.look.grain>.01){l.globalCompositeOperation="lighter",l.globalAlpha=.05*u.look.grain;const O=Math.floor(Math.random()*256),J=Math.floor(Math.random()*256),b=l.createPattern(this.grain,"repeat");b&&(l.save(),l.translate(-O,-J),l.fillStyle=b,l.fillRect(O,J,h,p),l.restore())}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const T0={line:{count:14,weight:1,wave:1,birth:1,zoom:1,speed:1},hands:{open:1,pull:1,clap:1},sound:{beat:1,bass:1,grow:1}},C0=110,_A=5;function R0(r){const e=r.replace("#",""),t=e.length===3?e.split("").map(s=>s+s).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class xA{constructor(e,t){ce(this,"canvas");ce(this,"ctx");ce(this,"cfg",T0);ce(this,"playing",new Hh(.5));ce(this,"age",0);ce(this,"time",0);ce(this,"unfold",0);ce(this,"breath",0);ce(this,"shiver",0);ce(this,"pulses",[]);ce(this,"lastKick",0);ce(this,"hand",{x:.5,y:.5,hold:0});ce(this,"idle",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Rh(T0,e)}render(e,t,s){const{canvas:a,ctx:l,cfg:u}=this,h=a.width,p=a.height;if(!h||!p)return;const d=this.playing;d.read(e,s);const{dt:v}=d,_=Math.max(0,d.step);this.age+=_,this.time+=_*Math.max(0,u.line.speed),this.idle+=v;const g=O=>1-Math.exp(-v*O),M=[e.left,e.right].filter(Boolean),E=M.length>0&&!e.synthetic,C=!!(s!=null&&s.live);let x;E?x=(1-d.fist)*u.hands.open:C?x=(.12+.88*d.energy)*u.sound.grow:x=.35+.3*Math.sin(this.idle*.21),this.unfold+=(Math.min(1,Math.max(0,x))-this.unfold)*g(E?5:.8),this.breath+=(d.bass*u.sound.bass-this.breath)*g(3),d.clapped&&(this.shiver=Math.min(1.4,d.clapStrength*1.3*u.hands.clap)),this.shiver*=Math.exp(-v*2.4);const S=Math.max(d.kick,d.bump)*u.sound.beat;S>.45&&this.lastKick<=.45&&(this.pulses.push({at:0,strength:Math.min(1.2,S)}),this.pulses.length>_A&&this.pulses.shift()),this.lastKick=S;for(const O of this.pulses)O.at+=v*.75;if(this.pulses=this.pulses.filter(O=>O.at<.75),M.length){const O=M.reduce((b,N)=>b+N.position.x,0)/M.length,J=M.reduce((b,N)=>b+N.position.y,0)/M.length;this.hand.x+=(O-this.hand.x)*g(8),this.hand.y+=(J-this.hand.y)*g(8)}this.hand.hold+=((E?u.hands.pull:0)-this.hand.hold)*g(4);const R=u.line.birth,I=R<=0?1:Math.min(1,Math.max(0,(this.age-1.6*R)/(5*R))),L=I*I*(3-2*I),V=R<=0?0:Math.max(0,1-this.age/(2.4*R));l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,h,p);const D=Math.max(1,Math.round(u.line.count)),[B,w,F]=R0(t[0]??"#8899ff"),[Y,z,Q]=R0(t[2]??t[1]??"#ffffff"),oe=Math.max(.1,u.line.zoom),ie=p*oe,j=p/720*oe,$=ie*.74*this.unfold*(1+.12*this.breath),X=u.line.wave,q=this.time;if(l.lineCap="round",l.lineJoin="round",l.globalCompositeOperation="lighter",V>.01){const O=(3+2.5*Math.sin(this.idle*2.2))*j*(1+this.breath);l.globalAlpha=Math.min(1,V*1.4),l.fillStyle="#fff",l.beginPath(),l.arc(h/2,p/2,Math.max(1,O),0,Math.PI*2),l.fill()}if(L>.002){const O=.5-.5*L,J=.5+.5*L;for(let b=0;b<D;b++){const N=D===1?0:b/(D-1)*2-1,_e=N*2.6*this.unfold,xe=this.shiver*Math.sin(b*12.9898)*43758.5453,pe=(xe-Math.floor(xe)-.5)*this.shiver*ie*.09;l.beginPath();let H=0,ue=0;for(let it=0;it<=C0;it++){const rt=O+(J-O)*(it/C0),st=Math.sin(Math.PI*rt);let At=p/2+N*$*.5;At+=(Math.sin(rt*6.2+q*.55+_e)*.6+Math.sin(rt*13.7-q*.38+_e*1.7)*.25)*ie*.035*X*st*(.35+.65*this.unfold+this.breath*.6),At+=pe*st*Math.sin(rt*20+b);for(const Mt of this.pulses){const U=Math.abs(rt-.5)-Mt.at;At-=Math.exp(-(U*U)/.0016)*Mt.strength*ie*.05*(1-Mt.at/.75)*(N===0?1:Math.sign(N)*-1)}if(this.hand.hold>.01){const Mt=rt-this.hand.x,U=Math.exp(-(Mt*Mt)/.022)*Math.min(1,this.hand.hold)*.85;At+=(this.hand.y*p-At)*U}const Et=rt*h;it===0?l.moveTo(Et,At):l.quadraticCurveTo(H,ue,(H+Et)/2,(ue+At)/2),H=Et,ue=At}l.lineTo(H,ue);const fe=Math.abs(N)*this.unfold,Ae=Math.round(255+(B+(Y-B)*(N*.5+.5)-255)*fe),Le=Math.round(255+(w+(z-w)*(N*.5+.5)-255)*fe),Oe=Math.round(255+(F+(Q-F)*(N*.5+.5)-255)*fe),dt=1/(1+(D-1)*(1-this.unfold)),qe=u.line.weight*j*(1+.35*S);l.strokeStyle=`rgb(${Ae},${Le},${Oe})`,l.globalAlpha=Math.min(1,.16*dt*2.2),l.lineWidth=7*qe,l.stroke(),l.globalAlpha=Math.min(1,.95*Math.max(dt,.3+.7*this.unfold)),l.lineWidth=1.5*qe,l.stroke()}}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const b0={colour:{speed:1,offset:0,palette:0,depth:.32},field:{count:3,zoom:1,sway:1,bounce:0,drift:.2,backdrop:1},hands:{wind:1,release:1,follow:1,clap:1},sound:{wind:1,gust:1,mid:1,high:1}};function SA(r,e){r.traverse(t=>{if(t instanceof si||t instanceof Yx||t instanceof qx){t.geometry.dispose();const s=t.material;Array.isArray(s)?s.forEach(a=>a.dispose()):s.dispose()}}),r.clear(),e.dispose(),e.forceContextLoss()}const MA=""+new URL("dandelion-hJsSsoAd.bin",import.meta.url).href;let aa=null;function yA(){return aa||(aa=fetch(MA).then(r=>{if(!r.ok)throw new Error(`dandelion.bin: ${r.status}`);return r.arrayBuffer()}).then(EA),aa.catch(()=>{aa=null})),aa}function EA(r){const e=new DataView(r);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="DNDL")throw new Error("Not a dandelion file");const s=e.getUint32(4,!0),a=JSON.parse(new TextDecoder().decode(new Uint8Array(r,8,s))),l=8+s,u=(H,ue)=>new Float32Array(r.slice(l+H,l+H+ue*4)),h=(H,ue)=>new Int8Array(r.slice(l+H,l+H+ue)),p=(H,ue)=>new Uint8Array(r.slice(l+H,l+H+ue)),d=(H,ue)=>new Uint32Array(r.slice(l+H,l+H+ue*4)),v=H=>{const ue=a.parts[H],fe=u(ue.pos,ue.count*3),Ae=h(ue.nrm,ue.count*3),Le=new Float32Array(ue.count*3);for(let Oe=0;Oe<Le.length;Oe++)Le[Oe]=Ae[Oe]/127;return{p:ue,position:fe,normal:Le,index:d(ue.idx,ue.index)}},_=["stem","base","bracts"].map(v);let g=0,M=0;for(const H of _)g+=H.p.count,M+=H.index.length;const E=new Float32Array(g*3),C=new Float32Array(g*3),x=new Float32Array(g),S=new Uint32Array(M);let R=0;{let H=0,ue=0;_.forEach((fe,Ae)=>{E.set(fe.position,H*3),C.set(fe.normal,H*3),x.fill(Ae===0?0:1,H,H+fe.p.count);for(let Le=0;Le<fe.index.length;Le++)S[ue+Le]=fe.index[Le]+H;if(Ae===0)for(let Le=1;Le<fe.position.length;Le+=3)R=Math.min(R,fe.position[Le]);H+=fe.p.count,ue+=fe.index.length})}const I=new Zn;I.setAttribute("position",new Xt(E,3)),I.setAttribute("normal",new Xt(C,3)),I.setAttribute("aRigid",new Xt(x,1)),I.setIndex(new Xt(S,1));const L=a.seeds,V=u(L.pivot,L.count*3),D=u(L.axis,L.count*3),B=v("achenes"),w=p(a.parts.achenes.seed,B.p.count),F=new Float32Array(B.p.count),Y=new Float32Array(B.p.count*3);for(let H=0;H<B.p.count;H++){const ue=w[H];F[H]=ue,Y[H*3]=V[ue*3],Y[H*3+1]=V[ue*3+1],Y[H*3+2]=V[ue*3+2]}const z=new Zn;z.setAttribute("position",new Xt(B.position,3)),z.setAttribute("normal",new Xt(B.normal,3)),z.setAttribute("aSeed",new Xt(F,1)),z.setAttribute("aPivot",new Xt(Y,3)),z.setIndex(new Xt(B.index,1));const Q=L.segments,oe=u(L.a,Q*3),ie=u(L.b,Q*3),j=p(L.seed,Q),$=u(L.ta,Q),X=u(L.tb,Q),q=new Float32Array(Q*4*3),O=new Float32Array(Q*4*3),J=new Float32Array(Q*4*3),b=new Float32Array(Q*4*2),N=new Float32Array(Q*4),_e=new Float32Array(Q*4),xe=new Uint32Array(Q*6);for(let H=0;H<Q;H++){const ue=j[H];for(let Ae=0;Ae<4;Ae++){const Le=H*4+Ae;q.set(oe.subarray(H*3,H*3+3),Le*3),O.set(ie.subarray(H*3,H*3+3),Le*3),J.set(V.subarray(ue*3,ue*3+3),Le*3);const Oe=Ae>>1,dt=Ae&1?1:-1;b[Le*2]=Oe,b[Le*2+1]=dt,N[Le]=ue,_e[Le]=Oe?X[H]:$[H]}const fe=H*4;xe.set([fe,fe+1,fe+2,fe+2,fe+1,fe+3],H*6)}const pe=new Zn;pe.setAttribute("position",new Xt(q,3)),pe.setAttribute("aB",new Xt(O,3)),pe.setAttribute("aPivot",new Xt(J,3)),pe.setAttribute("aCorner",new Xt(b,2)),pe.setAttribute("aSeed",new Xt(N,1)),pe.setAttribute("aT",new Xt(_e,1)),pe.setIndex(new Xt(xe,1));for(const H of[I,z,pe])H.boundingSphere=new vo(new te(0,-5,0),1e4);return{body:I,achenes:z,strokes:pe,seeds:L.count,pivot:V,axis:D,foot:R}}const oo=20,Rf=[1.4,3.2],bf=[2.6,4.6],_a=`
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
`,AA=`
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
}`,P0=`
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
}`,wA=`
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
}`,TA=`
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
}`,CA=`
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
}`;function Pf(r,e){let t=0,s=1/e;for(;r>0;)t+=r%e*s,r=Math.floor(r/e),s/=e;return t}function Di(r){const e=Math.sin(r*127.1+311.7)*43758.5453;return e-Math.floor(e)}const Lf=Array.from({length:oo},(r,e)=>({x:e===0?0:Pf(e+1,2)*2-1,z:e===0?0:-4.6+Pf(e,3)*6,y:e===0?.3:-.4+Pf(e,5)*1.9,k:e===0?1:.85+Di(e)*.3,yaw:Di(e+40)*Vr,ph:Di(e+80)*Vr,off:e*.137%1}));class RA{constructor(e,t,s=null){ce(this,"canvas");ce(this,"ctx");ce(this,"cfg",b0);ce(this,"surface");ce(this,"renderer",null);ce(this,"host");ce(this,"scene");ce(this,"camera");ce(this,"group",new ao);ce(this,"depth",0);ce(this,"scale",1);ce(this,"look",null);ce(this,"playing",new Hh(.5));ce(this,"failed",!1);ce(this,"model",null);ce(this,"flowers",[]);ce(this,"materials",[]);ce(this,"started",!1);ce(this,"since",0);ce(this,"seedTex",null);ce(this,"seedData",new Float32Array(0));ce(this,"off",new Float32Array(0));ce(this,"vel",new Float32Array(0));ce(this,"turn",new Float32Array(0));ce(this,"hold",new Float32Array(0));ce(this,"away",new Uint8Array(0));ce(this,"thresh",new Float32Array(0));ce(this,"flight",new Float32Array(0));ce(this,"dest",new Float32Array(0));ce(this,"phase",new Float32Array(0));ce(this,"motionTime",0);ce(this,"colourTime",0);ce(this,"gust",0);ce(this,"lastBeat",!1);ce(this,"lastClap",!1);ce(this,"hop",0);ce(this,"dance",0);ce(this,"sinceClap",99);ce(this,"lastAim",{x:0,y:0});ce(this,"swipe",new Ut);ce(this,"present",0);ce(this,"strokeWidth",null);ce(this,"viewport",null);ce(this,"time",null);this.canvas=e,this.ctx=t,this.host=s,this.scene=s?s.scene:new Ox,this.camera=s?s.camera:new gi(30,16/9,.1,200),this.surface=document.createElement("canvas");try{s||(this.renderer=mA(this.surface)),this.look=s?s.look:new dA}catch(a){console.error("Dandelion could not start:",a),this.failed=!0;return}yA().then(a=>{this.look&&this.build(a)}).catch(a=>{console.error("Dandelion model failed to load:",a),this.failed=!0})}setParams(e){this.cfg=Rh(b0,e)}isReady(){return this.model!==null||this.failed}build(e){const t=this.look,s=e.seeds,a=s*oo;this.seedData=new Float32Array(s*2*oo*4),this.seedTex=new gg(this.seedData,s*2,oo,_i,Fi),this.seedTex.magFilter=dn,this.seedTex.minFilter=dn,this.seedTex.needsUpdate=!0,this.off=new Float32Array(a*3),this.vel=new Float32Array(a*3),this.turn=new Float32Array(a*4);for(let v=0;v<a;v++)this.turn[v*4+3]=1;this.hold=new Float32Array(a),this.away=new Uint8Array(a),this.thresh=new Float32Array(a),this.flight=new Float32Array(a),this.dest=new Float32Array(a*3),this.phase=new Float32Array(a);for(let v=0;v<a;v++)this.thresh[v]=.12+Di(v*3.7+1)*1,this.phase[v]=Di(v*1.3+7)*Vr;const l={value:new Ut(1,1)},u={value:0},h={value:e.foot},p={value:this.seedTex},d={value:1.5};this.strokeWidth=d,this.viewport=l,this.time=u;for(let v=0;v<oo;v++){const _=t.shared(),g={uBend:{value:new te},uWave:{value:new Ut},uWavePhase:{value:0},uRow:{value:v},uShimmer:{value:0}},M={..._,...g,uViewport:l,uTime:u,uFoot:h,uSeeds:p},E=(S,R,I={})=>{const L=new xi({vertexShader:S,fragmentShader:R,uniforms:{...M,...I},side:Ni});return this.materials.push(L),L},C=new ao;C.add(new si(e.body,E(AA,P0))),C.add(new si(e.achenes,E(wA,P0)));const x=E(TA,CA,{uWidth:d});x.transparent=!0,x.depthWrite=!1,C.add(new si(e.strokes,x));for(const S of C.children)S.frustumCulled=!1;C.visible=!1,this.group.add(C),this.flowers.push({root:C,shared:_,u:g,presence:0,at:new te,size:1,placed:!1,bend:new Ut})}this.scene.add(this.group),this.model=e}pickDestination(e,t,s){const a=-4+Math.random()*6,l=(15.5-a)*t;this.dest[e*3]=(Math.random()*2-1)*l*s*.92,this.dest[e*3+1]=.1+(Math.random()*1.75-.85)*l,this.dest[e*3+2]=a}destroy(){var e,t;this.host||(e=this.look)==null||e.dispose(),this.look=null,(t=this.seedTex)==null||t.dispose();for(const s of this.materials)s.dispose();for(const s of this.flowers)s.root.clear();this.scene.remove(this.group),this.renderer&&SA(this.scene,this.renderer),this.renderer=null}render(e,t,s){const{ctx:a,cfg:l}=this,u=this.canvas.width,h=this.canvas.height;if(u===0||h===0)return;const p=this.renderer;if(this.failed||!p||!this.look){gA(a,u,h,"DANDELION");return}Dg(a,u,h,l.field.backdrop),this.model&&(pA(this.camera,u,h),this.camera.position.set(0,.5,15.5/Math.max(.3,l.field.zoom)),this.camera.lookAt(0,.1,0),this.update(e,t,s,u,h),(this.surface.width!==u||this.surface.height!==h)&&p.setSize(u,h,!1),p.render(this.scene,this.camera),a.drawImage(this.surface,0,0,u,h))}update(e,t,s,a,l){const{cfg:u}=this,h=this.look,p=this.model;if(!h||!p||this.failed)return;const d=this.playing;d.read(e,s);const{dt:v}=d,_=Math.max(0,d.step),g=e.left||e.right?1:0;this.present+=(g-this.present)*(1-Math.exp(-v*3));const M=Math.min(1,((s==null?void 0:s.overall)??0)*1.4)*u.sound.wind;this.motionTime+=_,this.colourTime+=(_*u.colour.speed*(1+d.mid*u.sound.mid*1.2)+v*d.burst*u.hands.clap*.9)/aA;const E=this.motionTime,C=!!(s!=null&&s.beat),x=C&&!this.lastBeat,S=x&&u.sound.gust>0;this.hop=Math.max(this.hop*Math.exp(-v*5),x?(s==null?void 0:s.beatIntensity)||1:0),this.dance+=_,this.lastBeat=C,S&&(this.gust=Math.max(this.gust,((s==null?void 0:s.beatIntensity)||1)*u.sound.gust)),this.gust*=Math.exp(-v*2.5);const R=!!e.clapping&&u.hands.clap>0,I=R&&!this.lastClap;this.lastClap=R,this.sinceClap+=v;const L=Math.min(1,this.sinceClap/4)**3;I&&(this.sinceClap=0);const V=d.aim.x-this.lastAim.x,D=d.aim.y-this.lastAim.y;this.lastAim={x:d.aim.x,y:d.aim.y};const B=g?V/Math.max(v,.001):0,w=g?D/Math.max(v,.001):0;this.swipe.x+=(B-this.swipe.x)*(1-Math.exp(-v*6)),this.swipe.y+=(w-this.swipe.y)*(1-Math.exp(-v*6));const F=.5*Math.sin(E*.11)+.25*Math.sin(E*.27+1.3),Y=.25+M*1.6+this.gust*1.2,z=new te(Math.cos(F)*Y,.15*Math.sin(E*.19),Math.sin(F)*Y*.4);z.x+=Qu.clamp(this.swipe.x,-4,4)*1.6*u.hands.wind,z.y+=Qu.clamp(this.swipe.y,-4,4)*1*u.hands.wind;const Q=g?Qu.clamp((d.openness-.6)/.4,-1,1)*u.hands.release:0,oe=u.field.drift,ie=Math.min(1,oe*2),j=Math.sqrt(Math.min(1,3/Math.max(1,Math.round(u.field.count)))),$=Math.min(.72,j*(oe*(.25+M*.45)+Q*.3*this.present*ie)),X=L*Math.min(1,u.hands.clap)*ie*j,q=Math.min(1,$*5),O=g&&d.openness<.15&&u.hands.release>0,J=!this.started;this.host||h.update(t,u.colour.palette,v,J);const b=Math.tan(this.camera.fov/2*Math.PI/180),N=a/l,_e=Math.max(0,Math.min(oo,Math.round(u.field.count))),xe=Math.max(1,_e);this.since+=v;const pe=lA(this.since,_e),H=2.2*Math.pow(xe,-.42)*this.scale;let ue=0;for(let U=0;U<xe;U++)ue+=Lf[U].x;ue/=xe;let fe=0;for(let U=0;U<xe;U++)fe=Math.max(fe,Math.abs(Lf[U].x-ue));const Ae=new te(d.aim.x*5.2,.1+d.aim.y*3,2),Le=1.2*Math.max(.4,1+(d.spread-.4)*1.6),Oe=p.seeds,dt=new te,qe=new dr,it=new dr,rt=new dr,st=new te,At=new te(0,1,0),Et=new te(1,0,0),Mt=this.seedData;this.flowers.forEach((U,gt)=>{const nt=Lf[gt],Rt=gt<pe;if(U.presence+=((Rt?1:0)-U.presence)*(1-Math.exp(-v*1.4)),J&&(U.presence=0),!Rt&&U.presence<.004&&(U.presence=0),U.root.visible=U.presence>.002,!U.root.visible){U.placed=!1,this.off.fill(0,gt*Oe*3,(gt+1)*Oe*3),this.vel.fill(0,gt*Oe*3,(gt+1)*Oe*3),this.away.fill(0,gt*Oe,(gt+1)*Oe),this.flight.fill(0,gt*Oe,(gt+1)*Oe);return}const Fe=H*nt.k,Lt=(xe===1?0:nt.z)+this.depth,P=(15.5-Lt)*b*N,y=xe===1?0:(nt.x-ue)/Math.max(.5,fe)*P*(.66+.24*Math.min(1,(xe-1)/12)),ee=.1-(15.5-Lt)*b,ve=.1+(15.5-Lt)*b;let Se=xe===1?nt.y:nt.y*Math.min(1,.5+xe*.1);Se=Math.min(Se,ee-p.foot*Fe-.4,ve-Fe*1.5),dt.set(y,Se,Lt),U.placed||(U.at.copy(dt),U.size=Fe,U.placed=!0),U.at.lerp(dt,1-Math.exp(-v*1.2)),U.size+=(Fe-U.size)*(1-Math.exp(-v*1.2));const Ce=1-Math.pow(1-U.presence,3);U.root.position.set(U.at.x,U.at.y-(1-Ce)*-p.foot*U.size*.8,U.at.z),U.root.rotation.y=nt.yaw,U.root.scale.setScalar(U.size*(.6+.4*Ce));const Re=U.root.scale.x,de=Math.cos(nt.yaw),me=Math.sin(nt.yaw),ke=this.dance,Ge=U.at.x*.35,Ie=u.field.sway*(.45+M*1),be=Ie*(.85*Math.sin(Vr*ke/5.2-Ge+nt.ph*.3)+.15*Math.sin(Vr*ke/3.3+nt.ph*1.7))+z.x*.22+this.gust*.5,ut=Ie*.3*Math.sin(Vr*ke/7.1+nt.ph*2.3)+z.z*.22;U.bend.x+=(be-U.bend.x)*(1-Math.exp(-v*1.6)),U.bend.y+=(ut-U.bend.y)*(1-Math.exp(-v*1.6));const ft=U.bend.x,vt=U.bend.y;U.u.uBend.value.set(ft*de-vt*me,0,ft*me+vt*de);const G=u.field.sway*(.12+M*.3);U.u.uWave.value.set(G*de,G*me),U.u.uWavePhase.value=Vr*ke/1.6-Ge*2+nt.ph;const Pe=u.field.bounce*U.size*((.08+M*.22)*Math.sin(Vr*ke/1.2-Ge+nt.ph)+.3*this.hop*(.6+.4*Di(gt+7)));U.root.position.y+=Pe,U.u.uShimmer.value=d.high*u.sound.high*2;const ge=U.root.position.x+ft*Re,We=U.root.position.y,Ne=U.root.position.z+vt*Re;for(let Xe=0;Xe<Oe;Xe++){const He=gt*Oe+Xe,_t=He*3;I&&Di(He*1.37+E*7.3)<X?this.hold[He]=bf[0]+Di(He+E)*(bf[1]-bf[0]):S&&Di(He*.71+E*13.1)<.008*u.sound.gust*oe*j&&(this.hold[He]=Rf[0]+Di(He+E*3.1)*(Rf[1]-Rf[0])),this.hold[He]=Math.max(0,this.hold[He]-v);const Pt=.06*q*Math.sin(E*.37+this.phase[He]);O&&(this.flight[He]=0);const an=!O&&(this.hold[He]>0||this.flight[He]>0||$+Pt>this.thresh[He]),Nn=p.pivot[Xe*3],Si=p.pivot[Xe*3+1],Zi=p.pivot[Xe*3+2],Mi=p.axis[Xe*3],Qi=p.axis[Xe*3+1],Qn=p.axis[Xe*3+2],jr=Mi*de+Qn*me,Ms=-Mi*me+Qn*de;if(an&&!this.away[He]){this.flight[He]=6+Math.random()*6,this.pickDestination(He,b,N);const tn=.4+(I&&this.hold[He]>0?3.2*u.hands.clap*L:0);this.vel[_t]+=jr*tn,this.vel[_t+1]+=Qi*tn+.2,this.vel[_t+2]+=Ms*tn}this.away[He]=an?1:0;let ln=this.off[_t],wn=this.off[_t+1],Un=this.off[_t+2],Tn=this.vel[_t],Fn=this.vel[_t+1],On=this.vel[_t+2];if(_>0||an){const tn=Math.max(_,0),T=ge+(Nn*de+Zi*me)*Re+ln,Z=We+Si*Re+wn,ae=Ne+(-Nn*me+Zi*de)*Re+Un,se=Math.sin(Z*.9+E*.7+this.phase[He])*.6,re=Math.sin(T*.7-E*.5+this.phase[He]*.5)*.45,Ue=Math.sin(ae*.8+T*.5+E*.6)*.4;if(an){this.flight[He]=Math.max(0,this.flight[He]-tn);const Be=He*3;let Te=this.dest[Be]-T,Ye=this.dest[Be+1]-Z,Ze=this.dest[Be+2]-ae;const ot=Math.hypot(Te,Ye,Ze);ot<.8&&this.pickDestination(He,b,N);const at=(1.2+.9*Di(He*2.9))*Math.min(1,ot/2);Te=Te/Math.max(ot,.001)*at,Ye=Ye/Math.max(ot,.001)*at,Ze=Ze/Math.max(ot,.001)*at;let Je=(Te-Tn)*.7+z.x*.3+se*.8,wt=(Ye-Fn)*.7+z.y*.3+re*.8+.05,Ft=(Ze-On)*.7+z.z*.3+Ue*.6;if(this.present>.01&&u.hands.follow>0){const xt=Ae.x-T,gn=Ae.y-Z,yn=Ae.z-ae,mt=Math.hypot(xt,gn,yn)+.001,Jn=this.present*u.hands.follow*Math.min(1,mt/Le-.6);Je+=xt/mt*Jn*2.2-gn/mt*this.present*u.hands.follow*1.4,wt+=gn/mt*Jn*2.2+xt/mt*this.present*u.hands.follow*1.4,Ft+=yn/mt*Jn*1.2}const Gt=(15.5-ae)*b,Ot=Gt*N,Qt=Math.abs(T)-Ot*1.02;Qt>0&&(Je-=Math.sign(T)*Qt*1.5);const je=Math.abs(Z-.1)-Gt*1.02;je>0&&(wt-=Math.sign(Z-.1)*je*1.5),ae>6&&(Ft-=(ae-6)*1.5),ae<-8&&(Ft+=(-8-ae)*1.5),Tn+=Je*tn*1.6,Fn+=wt*tn*1.6,On+=Ft*tn*1.6;const nn=Math.exp(-tn*.5);Tn*=nn,Fn*=nn,On*=nn}else{const Be=Math.hypot(ln,wn,Un),Te=Math.min(1.8,Be*.9)/Math.max(Be,1e-4),Ye=-ln*Te+se*Math.min(1,Be)*.6,Ze=-wn*Te+re*Math.min(1,Be)*.6,ot=-Un*Te+Ue*Math.min(1,Be)*.6,at=1-Math.exp(-tn*2.4);Tn+=(Ye-Tn)*at,Fn+=(Ze-Fn)*at,On+=(ot-On)*at,Be<.004&&Math.hypot(Tn,Fn,On)<.02&&(ln=wn=Un=Tn=Fn=On=0)}ln+=Tn*tn,wn+=Fn*tn,Un+=On*tn}this.off[_t]=ln,this.off[_t+1]=wn,this.off[_t+2]=Un,this.vel[_t]=Tn,this.vel[_t+1]=Fn,this.vel[_t+2]=On;const qr=Math.hypot(ln,wn,Un)/Re,Kr=Math.min(1,qr/.8),oi=this.turn.subarray(He*4,He*4+4);if(qe.set(oi[0],oi[1],oi[2],oi[3]),Kr>.001){st.set(Mi,Qi,Qn),rt.setFromUnitVectors(st,At);const tn=E*.6+this.phase[He];it.setFromAxisAngle(At,tn),rt.premultiply(it),it.setFromAxisAngle(Et,.3*Math.sin(E*1.3+this.phase[He]*2)),rt.premultiply(it),it.identity().slerp(rt,Kr),qe.slerp(it,1-Math.exp(-v*3))}else qe.slerp(it.identity(),1-Math.exp(-v*6));oi[0]=qe.x,oi[1]=qe.y,oi[2]=qe.z,oi[3]=qe.w;const ai=(gt*Oe*2+Xe*2)*4,jt=(ln*de-Un*me)/Re,So=(ln*me+Un*de)/Re;Mt[ai]=jt,Mt[ai+1]=wn/Re,Mt[ai+2]=So,Mt[ai+3]=1-Math.min(1,qr/.6),Mt[ai+4]=qe.x,Mt[ai+5]=qe.y,Mt[ai+6]=qe.z,Mt[ai+7]=qe.w}const Me=U.shared;Me.uT.value=this.colourTime,Me.uOff.value=nt.off+u.colour.offset,h.apply(Me,u.colour.depth,.16*(1+d.high*u.sound.high*2))}),this.started=!0,this.seedTex.needsUpdate=!0,this.viewport.value.set(a,l),this.time.value=E,this.strokeWidth.value=Math.max(1,l/620)}}const bA=1.4,PA=14,LA=1.2,L0=(r,e)=>1/(1+1/(2*Math.PI*r)/e);class ro{constructor(e=bA,t=PA){ce(this,"value",null);ce(this,"speed",0);this.minCutoff=e,this.beta=t}next(e,t){if(this.value===null||t<=0)return this.value=e,this.speed=0,e;const s=(e-this.value)/t;this.speed+=(s-this.speed)*L0(LA,t);const a=this.minCutoff+this.beta*Math.abs(this.speed);return this.value+=(e-this.value)*L0(a,t),this.value}reset(){this.value=null,this.speed=0}}class IA{constructor(e=5){ce(this,"recent",[]);ce(this,"held",null);this.size=e}next(e){this.recent.push(e),this.recent.length>this.size&&this.recent.shift();const t=new Map;let s=e,a=0;for(const l of this.recent){const u=(t.get(l)??0)+1;t.set(l,u),(u>a||u===a&&l===this.held)&&(s=l,a=u)}return this.held=s,s}reset(){this.recent=[],this.held=null}}const I0=[{tip:8,pip:6},{tip:12,pip:10},{tip:16,pip:14},{tip:20,pip:18}];function DA(r,e){if(!r||r.length<21)return null;const t=(_,g)=>Math.hypot((_.x-g.x)*e,_.y-g.y,(_.z-g.z)*e),s=(_,g)=>Math.hypot((_.x-g.x)*e,_.y-g.y),a=r[0],l=r[9],u=s(a,l);if(u<1e-4)return null;let h=0,p=0;for(const _ of I0){const g=t(r[_.tip],a),M=t(r[_.pip],a);g>M*1.12&&h++,p+=Math.min(1,Math.max(0,(g/u-1.05)/.85))}const d=r[17];return t(r[4],d)>t(r[3],d)*1.12&&h++,{fingers:h,pinchGap:t(r[4],r[8])/u,openness:p/I0.length,size:u,angle:Math.atan2((l.x-a.x)*e,a.y-l.y)}}const D0=.32,If=.5,NA=180,N0=30,U0=.08,UA=.32,FA=.115,F0=.16,OA=1.3,kA=.2,BA=.28,zA=.7,HA=200,VA=.3,GA=450,WA=140;class O0{constructor(){ce(this,"points",Array.from({length:21},()=>({x:new ro,y:new ro,z:new ro(1,6)})));ce(this,"size",new ro(1,4));ce(this,"angle",new ro(1.2,3));ce(this,"open",new ro(2,6));ce(this,"fingers",new IA(5));ce(this,"pinched",!1);ce(this,"gesture","none");ce(this,"gestureSince",0);ce(this,"lastAngle",0);ce(this,"lastAt",0);ce(this,"hand",null);ce(this,"seenAt",0)}read(e,t,s){const a=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const l=e.map((C,x)=>({x:this.points[x].x.next(C.x,a),y:this.points[x].y.next(C.y,a),z:this.points[x].z.next(C.z,a)})),u=DA(e,s);if(!u)return this.hand;const h=this.fingers.next(u.fingers);this.pinched=u.pinchGap<(this.pinched?If:D0);const p=Math.max(0,h-1),d=this.pinched?"pinch":u.openness>.62?"open":u.openness<.28?"fist":p>=3?"open":p<=0?"fist":"none";d!==this.gesture&&(this.gesture=d,this.gestureSince=t);let v=u.angle;for(;v-this.lastAngle>Math.PI;)v-=2*Math.PI;for(;v-this.lastAngle<-Math.PI;)v+=2*Math.PI;this.lastAngle=this.angle.next(v,a);const _=Math.atan2(Math.sin(this.lastAngle),Math.cos(this.lastAngle)),g=this.size.next(u.size,a),M=this.points[9],E=Math.hypot(M.x.speed,M.y.speed);return this.seenAt=t,this.hand={position:{x:l[9].x,y:l[9].y},gesture:d,pinchDistance:this.pinched?u.pinchGap*u.size:void 0,velocity:Math.min(3,E*2),holdDuration:(t-this.gestureSince)/1e3,fingerCount:h,landmarks:l,pinch:Math.min(1,Math.max(0,(If+.25-u.pinchGap)/(If+.25-D0*.6))),openness:Math.min(1,Math.max(0,this.open.next(u.openness,a))),depth:Math.min(1,Math.max(0,(g-U0)/(UA-U0))),angle:_},this.hand}forget(){for(const e of this.points)e.x.reset(),e.y.reset(),e.z.reset();this.size.reset(),this.angle.reset(),this.open.reset(),this.fingers.reset(),this.pinched=!1,this.gesture="none",this.lastAt=0,this.lastAngle=0,this.hand=null}}class XA{constructor(){ce(this,"kept",{left:new O0,right:new O0});ce(this,"trail",[]);ce(this,"lastAt",0);ce(this,"clapAt",-1e9);ce(this,"clapStrength",0);ce(this,"gap",1);ce(this,"gapAt",-1e9);ce(this,"closing",0);ce(this,"counted",!1);ce(this,"held",!1)}next(e,t,s){const a={};(e.landmarks??[]).forEach((d,v)=>{var E,C,x,S;if(!d||d.length<21)return;const _=d.map(R=>({x:1-R.x,y:R.y,z:R.z}));let M=((S=(x=(C=(E=e.handedness)==null?void 0:E[v])==null?void 0:C[0])==null?void 0:x.categoryName)==null?void 0:S.toLowerCase())==="left"?"right":"left";if(a[M]){const R=a[M],I=_[9].x<R[9].x;a.left=I?_:R,a.right=I?R:_;return}a[M]=_});const u={left:null,right:null};for(const d of["left","right"]){const v=this.kept[d];a[d]?(u[d]=v.read(a[d],t,s),u[d]&&this.trail.push({...u[d].position,hand:d})):v.hand&&t-v.seenAt<=NA?u[d]=v.hand:v.hand&&v.forget()}this.trail.length>N0&&(this.trail=this.trail.slice(-N0)),u.gestureTrail=[...this.trail];const h=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const p=d=>{this.counted||t-this.clapAt<GA||(this.counted=!0,this.clapAt=t,this.clapStrength=Math.min(1,Math.max(.7,d)))};if(u.left&&u.right){const d=u.right.position.x-u.left.position.x,v=u.right.position.y-u.left.position.y;u.distanceBetweenHands=Math.hypot(d,v),u.twist=Math.atan2(v,d*s)}if(a.left&&a.right){const d=a.left[9],v=a.right[9],_=Math.hypot(v.x-d.x,v.y-d.y),g=(t-this.gapAt)/1e3,M=g>0&&g<.15?(this.gap-_)/g:0;this.closing=Math.max(M,this.closing*Math.exp(-h*12)),this.gap=_,this.gapAt=t,_>VA&&(this.counted=!1),_<kA&&this.closing>OA&&p(this.closing/2.2),this.held=_<(this.held?F0:FA),this.held&&(p(.7+this.closing/3),u.clapping=!0,u.clapIntensity=Math.max(.6,1-_/F0))}else t-this.gapAt<HA&&this.gap<BA&&this.closing>zA&&p(.75+this.closing/3),this.closing*=Math.exp(-h*6),this.held=!1,t-this.gapAt>1200&&(this.counted=!1);return t-this.clapAt<=WA&&(u.clapping=!0,u.clapIntensity=Math.max(u.clapIntensity??0,this.clapStrength)),u}}let jA=0;function qA(){return jA>0}function KA(r,e,t){if(r.length<e*t)return;const s=new Uint8Array(e*t);for(let a=0;a<t;a++)for(let l=0;l<e;l++)s[a*e+l]=r[a*e+(e-1-l)];performance.now()}const YA=25e3,ZA=5e3,QA=2e4,JA=6e4,k0=640,$A="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",B0="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";function ew({videoElement:r,onHandData:e}){const t=Vt.useRef(new XA);return Vt.useEffect(()=>{let s=!0,a=0,l=-1,u=null,h=null,p=0,d=0;const v=()=>r.videoWidth&&r.videoHeight?r.videoWidth/r.videoHeight:16/9,_=(x,S)=>{s&&e(t.current.next(x,S,v()))},g=async()=>{if(!(!s||h))try{const x=await import(B0),S=await x.FilesetResolver.forVisionTasks(`${B0}/wasm`),R=await x.HandLandmarker.createFromOptions(S,{baseOptions:{modelAssetPath:$A,delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5});if(!s){R.close();return}h=R,console.log("✋ Hand tracking is running on the page.");const I=()=>{if(!(!s||!h)&&(a=requestAnimationFrame(I),r.currentTime!==l)){l=r.currentTime;try{const L=performance.now();_(h.detectForVideo(r,L),L)}catch(L){console.error("Hand detection error:",L)}}};I()}catch(x){console.error("Hand tracking could not start:",x)}},M=x=>{u&&(console.warn(`Hand tracking is moving to the page: ${x}`),window.clearTimeout(p),cancelAnimationFrame(a),u.terminate(),u=null,g())},E=()=>{if(typeof Worker>"u"||typeof createImageBitmap!="function"||typeof OffscreenCanvas>"u"){g();return}try{u=new Worker("./hand-worker.js")}catch{g();return}let x=!1,S=!1,R=!1,I=!1,L=!1;p=window.setTimeout(()=>{x||M("it took too long to start")},YA);const V=()=>{if(!s||!u)return;if(a=requestAnimationFrame(V),S){performance.now()-d>(L?JA:R?ZA:QA)&&M("the worker stopped answering");return}if(r.currentTime===l||r.readyState<2)return;l=r.currentTime,S=!0,d=performance.now();const D=d,B=Math.min(k0,r.videoWidth||k0);createImageBitmap(r,{resizeWidth:B,resizeHeight:Math.max(1,Math.round(B/v())),resizeQuality:"low"}).then(w=>{if(!u){w.close();return}const F=qA();u.postMessage({type:"frame",bitmap:w,time:D,mask:F},[w])}).catch(()=>{S=!1})};u.onmessage=D=>{const B=D.data;B.type==="ready"?(x=!0,window.clearTimeout(p),console.log("✋ Hand tracking is running in a worker."),V()):B.type==="hands"?(S=!1,R=!0,B.mask&&(L=!1,KA(B.mask.data,B.mask.width,B.mask.height)),_({landmarks:B.landmarks,handedness:B.handedness},B.time)):B.type==="note"?(L=!1,console.warn(B.reason)):B.type==="failed"?M(B.reason):B.type==="error"&&(S=!1,I||(I=!0,console.warn("Hand tracking worker:",B.reason)),R||M(B.reason))},u.onerror=D=>M(D.message||"the worker failed"),u.postMessage({type:"init"})},C=()=>{s&&(r.readyState>=2?E():window.setTimeout(C,100))};return C(),()=>{s=!1,window.clearTimeout(p),cancelAnimationFrame(a),u==null||u.terminate(),u=null;try{h==null||h.close()}catch(x){console.warn("Error closing hand landmarker:",x)}h=null}},[r,e]),null}const tw=40;class Df{constructor(e,t){ce(this,"history",[]);ce(this,"last",0);ce(this,"pulse",0);ce(this,"threshold",0);ce(this,"recent",[]);ce(this,"peak",0);ce(this,"flux",0);this.refractory=e,this.decay=t}measure(e,t,s,a){for(this.recent.push({at:s,rise:e,heard:t});this.recent.length&&s-this.recent[0].at>tw;)this.recent.shift();let l=0,u=0;for(const g of this.recent)l+=g.rise,u+=g.heard;this.history.push(l),this.history.length>90&&this.history.shift();const h=this.history.length;let p=0;for(const g of this.history)p+=g;p/=h;let d=0;for(const g of this.history)d+=(g-p)**2;const v=Math.sqrt(d/h);return this.threshold=p+v*1.9*(1.5-a),this.flux=l,this.peak=Math.max(l,this.peak*.9985),h>=20&&l>this.threshold&&l>this.peak*.5&&u>1.2*(1.3-a*.8)&&s-this.last>this.refractory?l/Math.max(1e-9,this.threshold):0}commit(e,t,s){e&&(this.last=t);const a=this.peak>0?Math.min(1,this.flux/this.peak):0;this.pulse=Math.max(this.pulse*Math.exp(-s/this.decay),e?Math.max(.4,a):0)}}function nw(r,e,t,s){const a=r.map(u=>u.hits.measure(u.flux,u.audible,e,s)),l=Math.max(...a);r.forEach((u,h)=>u.hits.commit(a[h]>0&&a[h]>=l*.7,e,t))}class z0{constructor(e){ce(this,"ceiling",-100);ce(this,"floor",0);ce(this,"seen",!1);this.minSpan=e}place(e,t){this.seen||(this.seen=!0,this.ceiling=e,this.floor=e);const s=l=>1-Math.exp(-t/l);this.ceiling+=(e-this.ceiling)*s(e>this.ceiling?.5:60),this.floor+=(e-this.floor)*s(e<this.floor?2:60);const a=Math.min(this.floor,this.ceiling-this.minSpan);return Math.min(1,Math.max(0,(e-a)/(this.ceiling-a)))}}function iw(){return{overall:new z0(14),bass:new z0(14),overallSlow:0,bassMid:0,highFast:0,highSlow:0,out:0,onsets:[],energy:0,build:0,drop:0,bright:.5,heard:0}}const H0=-75,rw=2.5;function sw(r,e,t,s){const a=C=>1-Math.exp(-s/C),l=C=>Math.pow(10,C/10),u=C=>C>1e-10?10*Math.log10(C):-100;if(r.overallSlow+=(l(e.overall)-r.overallSlow)*a(2),r.bassMid+=(l(e.bass)-r.bassMid)*a(.5),r.highFast+=(e.high-r.highFast)*a(1),r.drop*=Math.exp(-s/1.2),r.heard+=s,r.heard<rw){r.highSlow=r.highFast,r.energy=.5;return}r.highSlow+=(e.high-r.highSlow)*a(8);const h=u(r.overallSlow)>H0;r.energy=h?r.overall.place(u(r.overallSlow),s):0;const p=r.bass.place(u(r.bassMid),s),d=r.bass.ceiling>H0;for(e.onset&&r.onsets.push(t);r.onsets.length&&t-r.onsets[0]>2e3;)r.onsets.shift();let v=!1;d&&p<.4?r.out=Math.min(30,r.out+s):p>.65&&(r.out>=2&&(r.drop=Math.max(r.drop,Math.min(1,.55+r.out/14)),v=!0),r.out=0);const _=Math.min(1,Math.max(0,(r.highFast-r.highSlow)/18)),g=Math.min(1,Math.max(0,(r.onsets.length/2-3)/5)),M=Math.min(1,r.out/6),E=h&&r.out>0?M*M*(3-2*M)*Math.max(.1,_,g):0;if(r.build+=(E-r.build)*a(v||E<r.build?.25:.7),e.centroid>0){const C=Math.min(1,Math.max(0,Math.log2(e.centroid/300)/Math.log2(16.666666666666668)));r.bright+=(C-r.bright)*a(1.5)}}const Ng={bass:[20,160],lowMid:[160,800],mid:[800,4e3],high:[4e3,12e3]},ow=Object.keys(Ng),aw=.002,lw=.04,cw=.25,uw=.0016,fw=6,hw=90,dw=170,pw=1.9;function mw(){const r=()=>({floor:255,ceiling:0});return{envelopes:{bass:r(),lowMid:r(),mid:r(),high:r()},overall:r(),previous:null,flux:[],lastBeat:0,onset:0,rise:0,punch:0,lastNow:0,kick:new Df(170,.16),snare:new Df(170,.13),hat:new Df(70,.06),sections:iw()}}const lo=new Float32Array(256);for(let r=0;r<256;r++)lo[r]=Math.pow(10,(r/255*70-100)/20)*1e3;const Nf={kick:[30,150],snare:[1500,5e3],hat:[6e3,12e3]};function V0(r,e){r.floor+=(e-r.floor)*(e>r.floor?aw:lw),r.ceiling+=(e-r.ceiling)*(e>r.ceiling?cw:uw);const t=r.ceiling-r.floor;return t<fw?Math.min(1,e/190):Math.min(1,Math.max(0,(e-r.floor)/t))}function Uf(r,e,t){const s=Math.max(0,Math.min(r.length-1,e)),a=Math.max(s+1,Math.min(r.length,t));let l=0;for(let u=s;u<a;u++)l+=r[u];return l/(a-s)}function G0(r,e,t){const s=Math.max(1,Math.min(r.length-1,e)),a=Math.max(s+1,Math.min(r.length,t));let l=0;for(let u=s;u<a;u++)l+=(lo[r[u]]/1e3)**2;return l>0?Math.max(-100,10*Math.log10(l)):-100}function gw(r,e){const t=-100+10*Math.log10(Math.max(1,e))+5;return Math.min(1,Math.max(0,(r-t)/(-32-t)))}function vw(r,e,t,s,a){const l=e/2/r.length,u=X=>Math.round(X/l),h={};for(const X of ow){const[q,O]=Ng[X];h[X]=V0(t.envelopes[X],Uf(r,u(q),u(O)))}const p=V0(t.overall,Uf(r,u(20),u(12e3))),d=u(1e4),v=new Float32Array(d);for(let X=0;X<d&&X<r.length;X++)v[X]=r[X];let _=0,g=0;if(t.previous){for(let X=0;X<v.length;X++){const q=t.previous[X]??0,O=v[X]-q;O>0&&(_+=O,g+=lo[v[X]]-lo[q])}_/=v.length}t.punch=g;const M=t.lastNow?Math.min(.1,Math.max(.001,(a-t.lastNow)/1e3)):1/60;t.lastNow=a;const E=X=>{var xe;const q=t.previous;if(!q)return{flux:0,audible:0};const O=Math.max(1,u(X[0])),J=Math.min(r.length,Math.max(O+1,u(X[1])));let b=0,N=0,_e=0;for(let pe=O;pe<J;pe++){const H=pe<q.length?q[pe]:((xe=t.above)==null?void 0:xe[pe-q.length])??r[pe];b+=lo[r[pe]],N+=lo[H],r[pe]>H&&(_e+=r[pe]-H)}return{flux:Math.max(0,b-N),audible:_e/(J-O)}},C=E(Nf.kick);nw([{hits:t.kick,...C},{hits:t.snare,...E(Nf.snare)},{hits:t.hat,...E(Nf.hat)}],a,M,s),t.rise=_+C.audible*.5,t.previous=v,t.above=r.slice(d),t.flux.push(_),t.flux.length>hw&&t.flux.shift();const x=t.flux.reduce((X,q)=>X+q,0)/Math.max(1,t.flux.length);let S=0;for(const X of t.flux)S+=(X-x)**2;const R=Math.sqrt(S/Math.max(1,t.flux.length)),I=pw*(1.5-s*1),L=x+R*I,D=t.flux.length>=20&&_>L&&_>.35*(1.3-s*.8)&&a-t.lastBeat>dw;D&&(t.lastBeat=a);const B=L>0?Math.min(1,(_-L)/(L+.6)):0;t.onset=Math.max(t.onset*.9,D?Math.max(.35,B):0);let w=0,F=0;const Y=Math.min(r.length,u(1e4));for(let X=Math.max(1,u(100));X<Y;X++){const q=(r[X]/255)**2;w+=q,F+=q*X*l}const z=G0(r,u(20),u(12e3));sw(t.sections,{overall:z,bass:G0(r,u(30),u(160)),high:Uf(r,u(2e3),u(12e3)),centroid:w>.05?F/w:0,onset:D},a,M);const Q=.6+s*1.2,oe=1.5-s,ie=1,j=X=>ie*Math.min(1,Q*Math.pow(Math.max(0,X),oe)),$=D&&ie>.15;return{bass:j(h.bass),lowMid:j(h.lowMid),mid:j(h.mid),high:j(h.high),overall:j(p),beat:$,beatIntensity:$?ie*Math.min(1,Math.max(.3,B)):0,onset:ie*t.onset,kick:ie*t.kick.pulse,snare:ie*t.snare.pulse,hat:ie*t.hat.pulse,energy:ie*t.sections.energy,build:ie*t.sections.build,drop:ie*t.sections.drop,bright:t.sections.bright,input:gw(z,u(12e3)-Math.max(1,u(20)))}}const W0=[.35,.45,.8,1.15,1.5,1.9],_w=3.6,xw=2.2,Sw=6;function Mw(){return{rate:1,clap:0}}function X0(r){if(!r)return null;if(r.gesture==="fist")return W0[0];const e=r.fingerCount;return e===void 0?null:W0[Math.min(5,Math.max(1,Math.round(e)))]}function yw(r,e,t){const s=[X0(r.left),X0(r.right)].filter(u=>u!==null),a=s.length?Math.max(...s):1,l=Math.min(1,t*Sw);return e.rate+=(a-e.rate)*l,r.clapping&&(e.clap=Math.max(e.clap,_w*Math.max(.5,r.clapIntensity??1))),e.clap=Math.max(0,e.clap-e.clap*xw*t),e.rate+e.clap}const Ew={dust:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD51PXOBSjr0HNJjGAe3fFLz6k0ABBC5oOeMd/SnJI8Uquhw6nIIHepLhmaczSGMmUlzsAUDJ5GAAB9BxQBCFLNgcn0JpXRo5HRl2spIIPr6U9HRmxMZCoBxtI4Pbr2zTFXcRghB79KAG9PQ0oBHp1q8NKuJYY2t40lLMIx5UisXY5IGM5zx6enqKpvDJESHUjkjn260ANwcjPNA78+3FTW8E15PFbwohkY7F5CjJ9SSB+Zpz27szhSSsYwWA3KOmSWHGMnr9KAKw454IoweO1TpHE85WSb7OhxhiDJ/KkGwQjYru7A71KjC88YP/6qAIe2MClx0/nQFJIwcH0qxFbsy8XEKsWKMjPg9Mk+gHbr1oArqrM3AJPp3o6dyeeMd6nuRAZWe0ikS3Zj5fmuGfbnjJAAzjGeKW2vpbJJfs7mKWRShkRypCEYZfTB/pQBE0JWBZGaP5icKHG4Y9R1H41GQc5qZI5ViM4wE+7nI6kenWolxvAfJXPJA5x7UAA+g4o6c+npQeuRwPSkPH0oAMdADS854GKAADgjNHfpzQAAZ9qleFoZADtlAw3ynIwff+fvTXEZdRDubcBkY6N3A9fr+lOliVJGCiQLtBG8YOPWgBAyl2ZBs3NgKGzgfXv6VJdSRzzblt1hwoV9vQuOpAHAz6DimR4UkjJKNkleeP8A9eKsyvc3TRPLO+1VKRCQ5CruJ2gemSeMY5NAFdRvRuQ4QZAPUjPTHaljiacOqJGhRPM5IGQBzyfbPHftVu7jjikkUyW0xIAZ4sBVZiGO0DrjkcYHaokljjidkuTG8ZATEfMgOQfm7AADg/3jQBGbiJrMxGHMgIw6thcDPVQPmPPUn2pYI1nMnzKuzlsybPMGQNqjHJ6fgPap/swvFLIJC5H7hMfewwyOB1wSeoHv2oSOCRHhd5pCIN6Mq7yrLywI4wvXJ5wBnmgCo8SuFaNCiMTt3MDkEnHPr26YpPIkZgY4nG47ce//AOsU5gyXH79RKOVGG4OOOo9KbKrrMwm3iUcENx9KALHk74muDAkcZGxP3hAVxjPbk98f7Qq3GqarFbNd38MIt3jtgkrBSIfmO5cDBC4IOSTll684rXKxxW3lx28mHYMHkGOQMEKAT33Dqeg6VGUkaAs0yKYMbY3b5iDk5A/DJ+ooAnu4IgLiW0tpprXztsVw+chQDgEDjJBBOemMetQ2yxpFcLM0UTjAXzAxP3sEAAEAjrk44XA64qXSjch5Ra3kkMkimIxRhmaVWUhgAODxxg+tVZ4ZkYGY/M43AcHIPOeKAI2RScBwz/dxtI4+pphAB+U575qa2tXuZCqsi7VLEuwUYHYZIyfQDk9qaLeQAkjAAJ+bj9KAI+n9fejtSnk9OKQ4yORQAdunFAB7d6AcDjk0gJzigC1aCNXzJ5uwfe8r7y+/4fhU6LetCvkIj8sq+WA0hBByMdSuAe3HXrVa1nEEgYDD54bdgY7gjuD/AI1Zhv57aWaeCeS0W43xOts+zMbdUAz9zsRnpxQBSjZc5cE8fKQcYPY9OlaFrbG9mULtjVEYmQgkcZOeOQM8fjVaAbZgdp5PHl/NxjkDr29f6VO93LbPLb2pRU8w7QrCRgNpTAfHIwT04PWgBLm4+1xrNHCsflxBZv3jEyncdrHPGcFRxx8ueuaryxr521HUoFUZXOCcc9ff/wCtSJ5gUFBhc8Z+nX3+vamlCjI2QG+8Ce9AGxaWLXq3FqLuGHT7Y+ZJcmMgHoM4xvb5sYUdNxIAyaqSR2n9qrh5IbZuN08ZztI+9hPUY4GevXFQzh1u95TyJIgjDyyflGB8wJ5yTzn1NQt5pbO4s33gc5xk9/rQBOWQWySxNFvMxBUrukwACD0xjt9c1LcTs7JM4LyAbjJPhtx75z75IBz160TXc9zdx3UCi3kEYA8g7dowRxjpkZJ7/wAqrPNG/lrKnllIyCV5LtnqRnqen60AXZmsonYWlzK8JUshmXYd+fQMduVHXnk/iJLSSFNRjFvbbvNHlATShF8zGMiQgAAEq2Tg8cnmqDKt6ryqY4fKjUEEnMpzjI/r2qawlFtcwyxyzR3EbM4WFFbDAfKeTznkH+R6UAMjMlnKkkUhiuIf3u5X2OrZwMe4POBz1PSomlmEZiY+WDl+mS5Iwfm68jt0/Gnxh3uC6RIQrKxiY5D85xj09cfpTjJbvI8kYaCUu7/uhmMA9lU8jALdSe34gEDtuMmyMQgAEqrHGfoTnrUt5cxyTTC3eWSGVg5e4VTKTjnLD3J4+melRTSDA2xxgqqgFM4yBySDySfyznHGKhJCr1U7uc9x7UAIoyc/pRge2e9Jk55FL14z+dACfzNKPXNJnPTHHalCg9KAJUQtEwEeSo3FsgcD69f50szrO4CL5cYHCs5IXjnGfU5NTJNMYhaPJGsKHzFJJZVYjrgcEngHg9hwBUcsclodskUkc4AJWRdpAIBUgEccc59CMUANjaWONipG1uPXP4fjSpGJJGdX2x4yzycBSR0yM55/P2oCgQq0kJAbIDg43D+XBoJSMowLgEZBZeF5wSB0PegC4mnXlxpUl0kMv2eH95gAkAEAFvYcDk/QZ5xPbrpsHkJdEG5S4CujZMTRkcMGUg5HpnBH0qvYyxs6xPOsCIwYSPllVxwGIwSVHPAB7dadIJXa9EdwJosn5xtQOM5DYPb5eg5HHSgCoiC4fdLcqmCAwx8x9cdifrjNWJbJoIfOWzL20jZSVuSO2zIIBOSAR60p3XFtGk6pFDZgpgKeS2TyRyST/KoI7N7mNVg3SyRgsyohIRBjLH8T29KAH8OWiwSsS467VHXIOB2J6mh2mFnFBJNHKvVVDqwGecZ7H8eM0bY4p3aAh0cmMRSn94wI6kDpnPH+TVx7WK3uj9rdA6fLKsbDcjAbcKRkY6HJ64zQBDC8MmntHPHIZFAEUSIPmHzEncTlcZBwAc98Dmktra3SOCU30kbuctsjJKBWOCDnk8Dp6+1RzQm3jhjnlLFC2USUHyx347Z4PuAafZ7Yg264MZQgyQKv31HTvycnoOR1oAikij+zPcQoETIUgzAsWJJGB1xgYPoRyeQKdbRr5aCS7Ft5owAE3Dbzgn3JwPUYz6VA6rM4itkZtzEqAMn8vp25/rVq9aO30+G2WFA7gStui/eLkcAueSCMMAvy8jqc0AUmhmFuZRGxjVtjSgEruxkLnpnAJx3oS4ltxIkMp2yDa2B94fjQsjuDGrEKPmCkk5P4d6iJyxxhec4Ax+lACvHJFI0ciMjqcMGBBH4GkPA/xFS3Mv2i5kmLSMzncTI+9j9T3+tREc5xmgBOD649qU9e3PtQODx0oB4x1oAUEDGCQw65rTOs319FbWl5cNPDA2YEZc+Vk8hB2B9BxkD0FUYPKCSSSru+UqiZI+Yg/NkenX3pkZZJMgHeDgEckfSgCfc22S0Uq8KOXyuCeOM7sAkY7d/SrUeowxZQ2kE3zBkzn5T1AOfvAc/XPJOBVJpprto42b5YsiNGY7UGSxAz0BJJ+pqSGWORpBNIIozG2FEe8E4yqgZ4yQMntz16UARiKJk8zJBOMgdu2fzpgVlQuGHC464PPBA55q5Pd2zQLGIIi7BWd44yhU5OVAzjGMcjFMsZIPP8uZvLilGwuzkBcnqcA5GPXNACg+XZzROuDKq7Qr53HOd3vgdqVn+1yQrDOsQigyDIQnzKCSM9ySDjPPIFQ3EkayMloZfJ4P73aWyPQgevpipg89u6Tl/JuLYLIvzBSBxtI5znJHA5HWgBLLyZGDSxGRi43EOFY5I4GQfz5xnpVkNJZaki3FvFGFhLRiaJeUdSVYgj5zhgQSO49BVaO4uI4iihPMkIm8xQvmA4PRuuMdsjnHFVDIzhlBABIJGc89M5/E/nQBJclZZDIpGHbO3GNv8AjU0V5iVibaLe8ZiPyDHPGQOinGOR9etVwU2hW3K4Jy2Tz6DH+etSXF7NdGFLiUyLEpVM8BQSTwB7nOKAJPtL7AscxjDuPMLNwSDkZA6gdfzqOZnmcqH3BARgLtAAxnA/Cp7W9ksYw/ls3ng7g+CsiZHB7/eXtjpTLW7+z3AuEhhkEYOYpVypzkfjjIP4DrQBFDOIoZISiZYgrJt+ZcZGM+hzyPYdKieQSMWZVyRggDGD9KXz5MDcQwDb8MBjPHNM3fKAFAxnkdTQAhwPyo6HB/8ArUuffrTSfY+9ACjk9eaAB/jSZ4wO1A44zQBMs5WIRqEXnO8L82CMYz6e1Ai3TJGrxyF8AYYgAnjk8VDyMkfnT0fYwbCsc9CuR/8AXoAHXYzLkFgcEg5B+hFW7OzYxPeNbm4ggZfMXcVXnJwW7ZCN3z6A1UjZY2+aJX9mJ/pQZHEZjDHyyQxXPBI6E/r+dAASX7Dk5wBUsE6QxSAR5kZSqtxgAgg8EHsfb1ot7trWdJY44m2c7ZYw6k46lTkH+VNjnZbSW32RMkrK25kBZSucYbqM5OR0PGegoAC6tlY4gWfbjqWB9ue9W47r7DefarWSUyCMoTKoDISCreobjI6dD681TklDj5YUjzj7ue3fr1PrTQfnyVDH0YZoAkad5JIUlLOkfAC4zt9AcH8KdcRES72DRrIokjyAMp0HTHp1xyaYsMvkmaMZRANzL/Bk4APoTimxzNDHLGgTbKAGygJwCDwSMjkdRzjjpQA1mJzuO7vzVhLhrSeQ25IDxtEfMUEgMu1uD06nnqPrUKShIpkMUTmVQoZs5j5ByvPU4xzngn60u6N3VpC5yuDjGSccf0oATKlQNxOOx4/KnPIWt4kMUS7QRvC/M3J6nv1x+FNKYVW3KQewPI+o7UzLcZzgfpQA5ypJ2g4z3PNNHUUdR2xSZ56UAKP1ozj6CkHH8VL0P+FACE8gdqcB+lFFACN1x6DNIDkiiigBSAMflSNkAc9RzRRQAZJY+1OxzRRQAnv74oxljmiigBPQetKflAx2oooAB1/HFL0GfSiigBO+PYUYyM9zRRQAgGTjtQTx9aKKAFxjOO3NLjJC9jRRQB//2Q==",line:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5tooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKK04vDOuzDMWi6jJ/u2sh/pSyeF9ehGZNE1FB6tayD+lVyS7AZdFSzWs9u22aF4j6OpU/rUWCegzUgFFFFABRRRQAUUYPoaVUZjgDJ9KAEoqzHpl/L/q7K4k/3YmP9KnGgaww40q+P/bu/+FVyvsBn0VqL4X15zhNE1FvpayH+lWY/A3iubHl+GdYfP92xlP8A7LRyS7AYVFdXF8LvHU3KeEtYA9XtHQf+PAVY/wCFSeNVGZdFMH/Xa5hj/wDQnFNU5S2QHGUV2P8AwqvxUDg2+ng+h1W0z/6Npw+EnjNx+60mOf8A643lvJ/6DIaapzeyYHGUV1c/wu8c24JfwpqzD1jtXkH5qDWXceEvEVp/x86DqcP/AF0tJF/mtTyy7Ae+SatZn72q2LD1fxPrLfqIgKYmq6aTtXXdJjb0TxtqMB/8ix4rYfVrUr8ni3TA3oPiJcA/+PQYplnrd+9yEtPEGpXQzjbYeLtOvM/hPGM/jW6qv+rCKVpd391N5dnqusXQ/u2PjOxvx/3zOoJ+lNu9Cv5Z/wDTtJ1WZT31DwZa3wP/AG0tWDH61q6poeqTTia80nVrpGAO6/8ADOmakp/G2cMaoT+H7KFluI9HsYD3KeF9Y0xgf96FmUfhSVRpWA5298NeHPNIu9K8OKc8mXT9X0xvx4ZRVX/hDPBExH+jaCD3EXiK6X9GtSa7m2vPLURK8qbeixeI9ci/8daFq0oZL10B8jWXTpvTVdcnH/jluv8AOnzr+v8AhgOCtfht4WmYG30SC7/643+o3P6R2Y/nWzb/AAy0SFDJD4Vg+Xn99pl8wH/Arm4gX9K65tK1CWDzkF9dxqNzx3kOoFAPrd3kQ/Ssn/innnH7zRtNvVPVm0e3A/8ASh6XOrbfl+YGZFaeHbKTy1TRNPmX30a3wfqzXD1dTUTEu2HWI5R2Ftrcij/yWsAPyNan9q3n+r/tD7dGOn2PWblV/K1sVH5VE817KRsttXUn0v8AxDJ/6DGtHtX/AF/VgM1r65fObi9f/uL663/oMCimiS4kPH21v+33xC3/ALJWgy6geqa0B/108SN/SlW3upDh5NZTPrbeI5P5sKXtL/0v8hlVbO8kHzQ6kAe+3xHJ/hUi6BPOeLK7uT/dk0fVXH5z3aCro8P3E+3yoZr0n+G40TUiPznvFH51Xv8AR7WzYDVfDWm2oHV10vSoz+c925/Oj2jQinceH47Ubr3w9YxL/efSdORv/Ji9Y/mKp7dDgb5FtoSOyjw7F/8AFVc+2+HbNs2WpW9mR2N14fh/lG386kTxJvO2PX2l9Bb6roTH8jCKTqXeoFSMW91hIRNNnjEbeHZP0wKLnwvc48w+G7maM/xS+FdKvB+dvKD+Vac+kXuqWhni03Xb1R1L2Gg3q/khVjWanh+1aJ47rw9ZROOQbj4f3Ab/AL+WsmPyo57jKcnh+zij8w6HZ2zL1Z/B+p2Z/wC+reRhUcV7a2vyi8srbHprWuWf/jrI2KktrnTtLnwJ9KtMdv7S1rSMf8BIIFaa6zp78p4n0yM+n/Cw73+TQk0/aPf+v1EKnii5imAg8XGQ+lp4vsLg/gJoRV68tdU162FwbXX9U/vmez0LUEP4IysRVKLX7zVE8htY1G/B6CHVdCvR+UiKTUJ8Pzeb5svhdrlT/HeeELC7z+NtMP0qOTqMlTw/aNFsuPD1hayL0b/hAbpZD/wO1mI/EVPbWdxajbBb6mE9IIvEVoP++RuFV10SFG3RaUtmfS38I6tbY/78zkVfgs7wDbHcaqo7Kul66B+TXCj9aXKwJ4knchWXX4PcS+Ipf0IX+dXJbDUYYvO2zajaJywv7S52/wDk5fKP0rOmtLi2UveaXFcRf3r7Tdv/AKV3+PzFZq3egQTCSyutJsLkHJ/faNb8/RI52/WnyMC4JvDb3AktrnR9KvwctmTR7dR/3ys7/rV8+IbuU7Z7ptSUDANprF4B/wCStkoqi/iS4uOJNQkvvQ2+sX2PytbJB+Rqu9/dyHKSalGP+u/iOT+QFP2bAtyT3MjEpFrUf0ufEUv8kWmA35GRJrQ/7Z+JD/WqTG6frJfEH+9b+I2/9mpy2tzJ/wA/7Y/6h3iF/wCbilyAX0ju3OGudZUe9l4ik/nIKl/si6kYeTbTX+e1xoGoH9bi7UVnppNw/TS57rHaXw9qLD857tRVe50+ziGb7w/p1sB/F/ZGlQt+dxduf0p+zYF6+sNPt3B1bw1plpjq8emaTC3/AJHunP5iqses6RYP/wAS7W7axA7NqOgwY/74haqkWsadYHFnqdnZkdv7R0G3x+Cwvj86kPjK9Pyx+Ktw9IvFWlL+n2cCjlQi+fHl+SAnjBJPaHxDo5P5G3AqwLzWNdtX/eeJNRYDjyW0C+U/8BAUmqC6nrWpQFVn8Q3o/wCmNxoeog/8B2qTWRLYrE0j6po4UY5bV/AIYfjLat/Kn7PYZej0iFZJRqPh6FcqcvqXw/MxH1ktXx+NULC/0PTr7C3Xhyz5xiPU9W0I/wDfJBAqlpl9oVpcuba68K20g6C11vU9EcfRXBUVq2us6gZs2er6sw/6c/HNldj/AMjrU8oFmfW4EmJt/E1lGp6eR8RmkH5TRE0sfiWRuD4wgUeknji2H6rATWh/betFAZLvxI4xyZNR0CT9StVp/FeoQ5U6/qNqP+m+u6Hbj844iaOUDzp/iv4ev1/0yfWHPcXWkaXdj8zGhNEfjnwK+C8elg+s3g+BT+cVwteMUU/au9wPcF8deCIwCs2kgeieHrhf0+2AU2T4j+B1HNvbT/7nhqM/+jrpv5V4jRT9rID2X/hbPheyffYabfK3rDp2mWv8oJD+tNm+PLFdqWeuMo6A660Q/KGKMCvHKKXtZdAPU5vjdcSjH9k3rj/pr4h1Fv5TCqx+MUrZzoCn03axqJx/5MV5rRS9pID0Y/F6U/8AMvwH/e1TUD/7cVFJ8WJXHHhnST/11mvJf/Qrg159RR7SXcDtpviddPzH4Z8Lxn1OlrKf/IhaoR8UfEcR/wBGXSbP/r30i0T/ANpVx9FJ1JN3uB2g+LvjhT8muvGPRLeFR+QSkPxa8ZuMS6rHOPSayt5B/wCPRmuMoqvbVH9p/eFjsl+JN5Jn7d4e8M3+epl0mJGP4xBD+taWnfE3TrI5XwzJp7f39I1i6s8fQFnH6V53RSVSSA9ktfjFZGMpLrPjOFT/AATXNtqCflNGCaG+I3hu4O6fVJ5T/wBPPhPTZD+YYV43RTdRtWA9i/4T/wAIJz5yE/8ATLwhpyn8y5qVPi3oVmv+i3Otg/8ATDS9Ltv1ETGvGKKFUcdgCiiisgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k=",dandelion:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDovs3tR9m9q1fs3tR9m9q6TMyvs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDK+ze1H2b2rV+ze1H2b2oAyhaknAGSafJYtFjdt59GBrS+z+1Kbb5V4oAyfs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDK+ze1H2b2rV+ze1H2b2oAyvs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDV8gelHkD0q75VHlUgKXkD0o8gelXfKo8qgCkIMnpS+QFbDKeOoq55VHl55NAykYgeigfSneQBFkH5s4xirfkjBx1HIHrS+QAmF+8T0qWrrURSWJQ4JXIB6VOYUVVZCgck5H41MYSAM85HNI0GAp2e+RSd9GgKkke+TJXknpnpTfIHpV9oMHjGKb5VUgKXkD0oFuCcdPrV3yqQxcfWmBTNvtJBHSjyB6Vd8r2o8qgCl5A9KPIHpV3yqPKoApeQPSjyB6Vd8qjyqALvle1Hle1WOKOKQyv5XtSeVUsqoELSHGPekS4hIBVlYdetYutFOxo4JLVjPK9qTyvap0dXGR+tO4rVNNXRmV1hywB4HrStFk468YqcYFHFMCrGjGPBxgdKiWVEuHR2wh4GfX1qa8cRvEgJVC2Wx1I9KqCN5HQMzMHydxOMDNcVWq4+6t0Q30LCtE2QWwR6dMU7y1MhAIJAqOeARjBIGRgsajtilvNt8wEg8++e2KUK0r2Y79y15XtR5VWOKOK7iiv5XtR5XtVjijigCv5XtR5XtVjijigCv5XtR5XtVjijigBM1HcSPHbu6Y3KM0/NFKUeZNCMa4vZp5FSF/l/iGOv+FRvKCXXgRrx8o64/nWu1tCZA4QK47rxUI023DE4PJzivMlhal7p3M3GTGaUJPLdmbK8ADGMf5zWhmmqAihVGAKXNehSh7OCiWlZWFBIOfSjNJmjNaFCmPzTwRuHTIqMxSKFGPmzzn0p4Yg5HBFOMrFcZGfUisJ0eaVwKwM0lxIknQNhQB2Izz61Wn0+SS7DgKAGB3Y6D0q2pK37tz88Y69OD/9epi5PWlUwyk0ybJ7hmjNJmjNdJQuaM0maM0ALmjNJmjNAC5ozSZozQBH5go8wVQ8+jz/AHoA0N42/Wk8wVSeYqQM9AP15pvn0AX/ADBR5gqh59Hn0AX/ADBR5gqh59Hn0AX/ADBR5gqh59Hn0AWZZlS6tzn7xZP/AB3P/stTeYKyL2cqkDg/dnTP0Jx/WrHn1bWiYi/5go8wVQ8+jz6gZf8AMFHmCqHn0efQBf8AMFHmCqHn0efQBf8AMFHmCqHn0efQBn+f70CXcQPXis7z/epbSXdeRc/xZ/Ln+lAF6W4DTOQeMmm+f71m+fnnPWl8/wB6ANHz/ejz/es7z/ejz/egDR8/3o8/3rO8/wB6PP8AegDR8/3o8/3rO8/3o8/3oAsahKTYS4PK4b8mB/pVkz/Mee9ZNzKGtJgxwCjZ/KpBPkA56jNW/gXq/wBCeppef70ef71nef70ef71BRo+f70ef71nef70ef70AaPn+9Hn+9Z3n+9Hn+9AGj5/vR5/vWd5/vR5/vQBR3mprRyLjPorH/x00UUCIN5xS7zRRQMN5o3miigA3mjeaKKADeaN5oooAhu3P2G4/wCuTf8AoJp0EjG2iJ7op/QUUVp9j5k9STeaN5oorMoN5o3miigA3mjeaKKADeaN5oooA//Z"},Aw=["w2","w1","w3"].map(r=>({src:`./media/${r}.mp4`,poster:`./media/${r}.jpg`})),ww=["t2","t3","t4","t1"].map(r=>({src:`./media/${r}.mp4`,poster:`./media/${r}.jpg`}));function Tw({page:r,onClose:e,onGo:t}){return ze.jsx("div",{className:`page ${r==="performances"?"wide":""}`,onClick:e,children:ze.jsxs("article",{onClick:s=>s.stopPropagation(),children:[ze.jsxs("nav",{className:"tabs",children:[["about","instrument","performances"].map(s=>ze.jsx("button",{className:s===r?"on":"",onClick:()=>t(s),children:s},s)),ze.jsxs("button",{className:"close",onClick:e,"aria-label":"close",children:[ze.jsx("span",{className:"cl",children:"close "}),"×"]})]}),r==="about"&&ze.jsxs("section",{children:[ze.jsx("h2",{children:"The machine reads, the hand leads."}),ze.jsxs("p",{children:[ze.jsx("b",{children:"<N4TH>"})," is the visual instrument of Nathalia Cury, a Brazilian art director based in Stuttgart for six years. With a background in typography, editorial design and brand identity, she brings a designer's eye to the club."]}),ze.jsx("p",{children:"She built <N4TH> together with AI, using it as a design partner from the first sketches in Figma Make to hand tracking with MediaPipe and real-time graphics in Three.js. The result is a tool that sits between graphic design, code and performance."}),ze.jsx("p",{children:"On stage, a camera reads her hands and the music reads the room. Every gesture becomes a move in the visuals: a fist gathers, an open palm releases, a clap breaks everything open. She moves between 2D and 3D worlds, turns colour palettes live, or lets the system run on its own and evolve with the night."}),ze.jsx("h3",{children:"Contact"}),ze.jsxs("p",{children:[ze.jsx("a",{href:"mailto:cury.nathalia@gmail.com",children:"cury.nathalia@gmail.com"}),ze.jsx("br",{}),ze.jsx("a",{href:"https://instagram.com/nathcury",target:"_blank",rel:"noreferrer",children:"@nathcury"})]})]}),r==="instrument"&&ze.jsxs("section",{children:[ze.jsx("h2",{children:"Built with AI, played by hand."}),ze.jsx("p",{children:"The tool runs in a browser. It listens to the music — its kicks, its builds, its silences — and it watches the hands. Every visual answers both: the sound gives the pulse, the hand gives the decision."}),ze.jsxs("ul",{children:[ze.jsxs("li",{children:[ze.jsx("b",{children:"one finger"})," slow · ",ze.jsx("b",{children:"five"})," fast"]}),ze.jsxs("li",{children:[ze.jsx("b",{children:"a fist"})," gathers · ",ze.jsx("b",{children:"an open palm"})," releases"]}),ze.jsxs("li",{children:[ze.jsx("b",{children:"a clap"})," breaks everything open"]}),ze.jsx("li",{children:"the music: pulse, kicks, build-ups, the drop"})]}),ze.jsx("p",{children:"Every part of it — the visuals, the way they listen, the way they read a gesture — was written in conversation with AI. That is the question the performance stays with: who is listening to whom?"}),ze.jsxs("figure",{children:[ze.jsx("img",{src:"./media/instrument.jpg",alt:"The instrument: the visuals of the set, layers, effects, the sound and the hands"}),ze.jsx("figcaption",{children:"The instrument as it is played: the set of visuals, the layers, the effects, what it hears."})]})]}),r==="performances"&&ze.jsxs("section",{children:[ze.jsx("h2",{children:"Performances"}),ze.jsx("p",{className:"sub",children:"Stuttgart, November 2026 — live with a DJ set."}),ze.jsx("div",{className:"shows wide",children:Aw.map(s=>ze.jsx("video",{src:s.src,poster:s.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,disablePictureInPicture:!0,disableRemotePlayback:!0},s.src))}),ze.jsx("div",{className:"shows tall",children:ww.map(s=>ze.jsx("video",{src:s.src,poster:s.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,disablePictureInPicture:!0,disableRemotePlayback:!0},s.src))})]})]})})}const Cw=[{id:"dust",name:"Dust",note:"a fist gathers it into a circle"},{id:"line",name:"Line",note:"an open hand unfolds it"},{id:"dandelion",name:"Dandelion",note:"the hand moves the wind"}],Ug={dust:{colors:Jl(0,0,"grayscale"),params:{"look.glow":1.6,"field.size":1.3}},line:{colors:Jl(268,70,"black"),params:{"line.weight":1.4}},dandelion:{colors:Jl(200,60,"black"),params:{"field.count":3}}},$l={dust:{path:"field.count",min:200,max:5e3,start:.3},line:{path:"line.count",min:1,max:40,start:.33},dandelion:{path:"field.count",min:1,max:12,start:.2}},j0=[{name:"Test track · 124 bpm",src:"./tracks/test-124.mp3"}];function Rw(r,e,t){return r==="dust"?new vA(e,t):r==="line"?new xA(e,t):new RA(e,t)}const bw=(r,e)=>{const t=$l[r];return{...Ug[r].params,[t.path]:Math.round(t.min+e*(t.max-t.min))}};function Pw(r){var s,a;const e=document.querySelector(r);if(!e||r===".stage")return{top:"42%",left:"50%",transform:"translate(-50%, -50%)"};const t=e.getBoundingClientRect();if(window.innerWidth<=720&&(r===".track"||r===".cards")){const l=(s=document.querySelector(".desk"))==null?void 0:s.getBoundingClientRect(),u=e.getBoundingClientRect();if(l)return{top:l.top-16,left:Math.min(window.innerWidth-150,Math.max(150,u.left+u.width/2)),transform:"translate(-50%, -100%)"}}if(r===".fx"&&window.innerWidth<=720){const l=(a=document.querySelector(".fxbtn"))==null?void 0:a.getBoundingClientRect();if(l)return{top:l.top-16,left:Math.min(window.innerWidth-150,Math.max(150,l.left+l.width/2)),transform:"translate(-50%, -100%)"}}return r===".fx"?{top:t.top+t.height/2,left:t.left-14,transform:"translate(-100%, -50%)"}:{top:t.top-16,left:t.left+t.width/2,transform:"translate(-50%, -100%)"}}const Lw=Math.max(1,Math.min(5,Number(new URLSearchParams(location.search).get("guide"))||2)),Iw={left:null,right:null},Dw={bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0};function Nw(r,e,t){return{position:{x:r,y:e},gesture:t>.5?"fist":"open",openness:1-t,fingerCount:t>.5?0:3,velocity:0}}const Ff=[{key:"play",at:".track",text:"Play a track — the visual moves with the music."},{key:"hand",at:".stage",text:"Raise your hand to the camera — or move the mouse."},{key:"fist",at:".stage",text:"Close your hand (or hold the mouse button) — then open it."},{key:"clap",at:".stage",text:"Clap (or click quickly)."},{key:"fx",at:".fx",text:"Shape it: trail, colour, amount."},{key:"switch",at:".cards",text:"Try another visual."}];function Uw(){const r=Vt.useRef(null),[e,t]=Vt.useState("dust"),s=Vt.useRef(e);s.current=e;const[a,l]=Vt.useState(0),[u,h]=Vt.useState(0),[p,d]=Vt.useState({dust:$l.dust.start,line:$l.line.start,dandelion:$l.dandelion.start}),[v,_]=Vt.useState(!1),g=Vt.useRef({trail:a,hue:u,amounts:p});g.current={trail:a,hue:u,amounts:p};const[M,E]=Vt.useState(null),[C,x]=Vt.useState("off"),S=Vt.useRef(Iw),R=Vt.useRef({x:.5,y:.5,on:!1,down:0,closed:0,clapAt:0,moved:0}),I=Vt.useCallback(async()=>{x("asking");try{const b=await navigator.mediaDevices.getUserMedia({video:{width:640,height:360,facingMode:"user"}}),N=document.createElement("video");N.muted=!0,N.playsInline=!0,N.srcObject=b,await N.play(),E(N),x("on")}catch{x("refused")}},[]);Vt.useEffect(()=>{I()},[I]);const L=Vt.useRef(null),[V,D]=Vt.useState(null),B=Vt.useRef(null),w=Vt.useCallback(b=>{var _e;let N=L.current;if(!N){N=new Audio,N.crossOrigin="anonymous",N.loop=!0,L.current=N;const xe=new AudioContext,pe=xe.createMediaElementSource(N),H=xe.createAnalyser();H.fftSize=2048,H.smoothingTimeConstant=.55,pe.connect(H),H.connect(xe.destination),B.current={ctx:xe,analyser:H,data:new Uint8Array(H.frequencyBinCount),state:mw()}}if((_e=B.current)==null||_e.ctx.resume(),V===b){N.pause(),D(null);return}N.src=j0[b].src,N.play(),D(b)},[V]),[F,Y]=Vt.useState(new Set),[z,Q]=Vt.useState(!0),oe=Vt.useCallback(b=>Y(N=>N.has(b)?N:new Set(N).add(b)),[]);Vt.useEffect(()=>{V!==null&&oe("play")},[V,oe]);const ie=Ff.find(b=>!F.has(b.key));Vt.useEffect(()=>{const b=r.current,N=b.getContext("2d"),_e=document.createElement("canvas"),xe=_e.getContext("2d");let pe=null,H=1,ue=performance.now(),fe=0;const Ae=Mw(),Le=()=>{const dt=Math.min(window.devicePixelRatio||1,1920/Math.max(1,window.innerWidth)),qe=Math.round(window.innerWidth*dt),it=Math.round(window.innerHeight*dt);(b.width!==qe||b.height!==it)&&(b.width=qe,b.height=it),(_e.width!==qe||_e.height!==it)&&(_e.width=qe,_e.height=it)},Oe=dt=>{var Rt,Fe,Lt,P;fe=requestAnimationFrame(Oe);const qe=Math.min(.1,(dt-ue)/1e3);ue=dt,Le();const it=s.current;!pe||pe.v!==it?(H-=qe*3,(H<=0||!pe)&&((Fe=pe==null?void 0:(Rt=pe.r).destroy)==null||Fe.call(Rt),pe={v:it,r:Rw(it,_e,xe),amount:-1},H=0)):H=Math.min(1,H+qe*1.2);const rt=R.current;rt.closed+=((rt.down&&dt-rt.down>220?1:0)-rt.closed)*Math.min(1,qe*10);let st=S.current;!st.left&&!st.right&&rt.on&&dt-rt.moved<4e3&&(st={left:Nw(rt.x,rt.y,rt.closed),right:null,clapping:dt-rt.clapAt<120,clapIntensity:1});let At=Dw;const Et=B.current;Et&&L.current&&!L.current.paused&&(Et.analyser.getByteFrequencyData(Et.data),At={...vw(Et.data,Et.ctx.sampleRate,Et.state,.5,Date.now()),live:!0}),rA(qe,[yw(st,Ae,qe)]),sA(0);const Mt=g.current,U=Mt.amounts[pe.v];Math.abs(U-pe.amount)>.001&&((P=(Lt=pe.r).setParams)==null||P.call(Lt,bw(pe.v,U)),pe.amount=U),pe.r.render(st,Ug[pe.v].colors,At),N.globalCompositeOperation="source-over";const gt=Mt.trail*Mt.trail*1.5,nt=gt<.005?0:Math.exp(-qe*Math.LN2/gt);N.globalAlpha=1-nt,N.fillStyle="#000",N.fillRect(0,0,b.width,b.height),N.globalAlpha=1,N.globalCompositeOperation=nt>0?"lighten":"source-over",N.filter=Mt.hue?pe.v==="dust"?`sepia(1) saturate(5) hue-rotate(${Mt.hue-40}deg)`:`hue-rotate(${Mt.hue}deg)`:"none",N.drawImage(_e,0,0),N.filter="none",N.globalCompositeOperation="source-over",N.globalAlpha=1,H<1&&(N.globalCompositeOperation="source-over",N.globalAlpha=1-H,N.fillStyle="#000",N.fillRect(0,0,b.width,b.height),N.globalAlpha=1)};return fe=requestAnimationFrame(Oe),()=>{var dt,qe;cancelAnimationFrame(fe),(qe=pe==null?void 0:(dt=pe.r).destroy)==null||qe.call(dt)}},[]);const j=b=>{const N=R.current;N.x=b.clientX/window.innerWidth,N.y=b.clientY/window.innerHeight,N.on=!0,N.moved=performance.now(),C!=="on"&&oe("hand")},$=b=>{j(b),R.current.down=performance.now()},X=()=>{const b=R.current,N=performance.now()-b.down;b.down&&N<220&&(b.clapAt=performance.now(),oe("clap")),b.down&&N>400&&oe("fist"),b.down=0},q=Vt.useCallback(b=>{var N,_e;S.current=b,(b.left||b.right)&&oe("hand"),(((N=b.left)==null?void 0:N.gesture)==="fist"||((_e=b.right)==null?void 0:_e.gesture)==="fist")&&oe("fist"),b.clapping&&oe("clap")},[oe]),[O,J]=Vt.useState(null);return ze.jsxs(ze.Fragment,{children:[ze.jsx("canvas",{ref:r,className:"stage",onPointerMove:j,onPointerDown:$,onPointerUp:X,onPointerLeave:()=>{R.current.on=!1,R.current.down=0}}),M&&ze.jsx(ew,{videoElement:M,onHandData:q}),ze.jsxs("header",{className:"top",children:[ze.jsx("div",{className:"brand",children:"<N4TH>"}),ze.jsx("nav",{children:["about","instrument","performances"].map(b=>ze.jsx("button",{onClick:()=>J(b),children:b},b))})]}),z&&ie&&!O&&ze.jsxs("div",{className:`guide g${Lw}`,style:Pw(ie.at),"data-at":ie.at,children:[ze.jsxs("span",{className:"count",children:[Ff.indexOf(ie)+1,"/",Ff.length]}),ze.jsx("span",{children:ie.text}),ie.key==="hand"&&C!=="on"&&ze.jsx("button",{className:"cam",onClick:I,disabled:C==="asking",children:C==="refused"?"camera not allowed — the mouse plays":C==="asking"?"…":"allow camera"}),ze.jsx("button",{className:"x",onClick:()=>Q(!1),title:"Hide the guide",children:"×"})]}),ze.jsxs("aside",{className:`fx ${v?"open":""}`,onPointerDown:()=>oe("fx"),children:[ze.jsx("div",{className:"fxt",children:"EFFECTS"}),ze.jsxs("label",{children:["Trail",ze.jsx("input",{type:"range",min:0,max:1,step:.01,value:a,onChange:b=>l(+b.target.value)})]}),ze.jsxs("label",{children:["Colour",ze.jsx("input",{type:"range",min:0,max:360,step:1,value:u,onChange:b=>h(+b.target.value)})]}),ze.jsxs("label",{children:["Amount",ze.jsx("input",{type:"range",min:0,max:1,step:.01,value:p[e],onChange:b=>d(N=>({...N,[e]:+b.target.value}))})]})]}),ze.jsxs("footer",{className:"desk",children:[ze.jsx("div",{className:"cards",children:Cw.map((b,N)=>ze.jsxs("button",{className:`card ${e===b.id?"on":""}`,onClick:()=>{t(b.id),b.id!=="dust"&&oe("switch")},title:b.note,children:[ze.jsx("img",{src:Ew[b.id],alt:""}),ze.jsx("span",{className:"num",children:N+1}),ze.jsx("span",{className:"name",children:b.name})]},b.id))}),ze.jsx("div",{className:"sep"}),ze.jsx("div",{className:"tracks",children:j0.map((b,N)=>ze.jsxs("button",{className:`track ${V===N?"on":""}`,onClick:()=>w(N),children:[ze.jsx("span",{children:V===N?"❚❚":"▶"})," ",b.name]},b.src))}),ze.jsx("div",{className:"sep"}),ze.jsx("button",{className:`fxbtn ${v?"on":""}`,onClick:()=>{_(b=>!b),oe("fx")},children:"FX"}),ze.jsx("button",{className:`camera ${C==="on"?"on":""}`,onClick:C==="on"?void 0:I,title:"Play with your hand through the camera",children:C==="on"?"● hand":C==="refused"?"mouse":"camera"})]}),O&&ze.jsx(Tw,{page:O,onClose:()=>J(null),onGo:J})]})}A_.createRoot(document.getElementById("root")).render(ze.jsx(Vt.StrictMode,{children:ze.jsx(Uw,{})}));
