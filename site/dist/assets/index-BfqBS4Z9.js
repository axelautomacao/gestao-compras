(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const _f="modulepreload",yf=function(n){return"/"+n},Ic={},vf=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(u=>{if(u=yf(u),u in Ic)return;Ic[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":_f,d||(y.as="script"),y.crossOrigin="",y.href=u,c&&y.setAttribute("nonce",c),document.head.appendChild(y),d)return new Promise((T,R)=>{y.addEventListener("load",T),y.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};var bc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ef=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Jl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,p=i>>2,y=(i&3)<<4|c>>4;let T=(c&15)<<2|d>>6,R=d&63;u||(R=64,a||(T=64)),r.push(t[p],t[y],t[T],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ef(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||y==null)throw new wf;const T=i<<2|c>>4;if(r.push(T),d!==64){const R=c<<4&240|d>>2;if(r.push(R),y!==64){const C=d<<6&192|y;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tf=function(n){const e=Yl(n);return Jl.encodeByteArray(e,!0)},vs=function(n){return Tf(n).replace(/\./g,"")},Zl=function(n){try{return Jl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=()=>If().__FIREBASE_DEFAULTS__,Af=()=>{if(typeof process>"u"||typeof bc>"u")return;const n=bc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zl(n[1]);return e&&JSON.parse(e)},Us=()=>{try{return bf()||Af()||Rf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},eu=n=>{var e,t;return(t=(e=Us())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},tu=n=>{const e=eu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},nu=()=>{var n;return(n=Us())===null||n===void 0?void 0:n.config},ru=n=>{var e;return(e=Us())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[vs(JSON.stringify(t)),vs(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Cf(){var n;const e=(n=Us())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Df(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nf(){const n=Se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Vf(){return!Cf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Of(){try{return typeof indexedDB=="object"}catch{return!1}}function Lf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="FirebaseError";class tt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Mf,Object.setPrototypeOf(this,tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ir.prototype.create)}}class Ir{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Uf(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new tt(s,c,r)}}function Uf(n,e){return n.replace(Ff,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ff=/\{\$([^}]+)}/g;function Bf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Es(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Ac(i)&&Ac(a)){if(!Es(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ac(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function er(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function tr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function $f(n,e){const t=new qf(n,e);return t.subscribe.bind(t)}class qf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");jf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=xi),s.error===void 0&&(s.error=xi),s.complete===void 0&&(s.complete=xi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(n){return n&&n._delegate?n._delegate:n}class Dt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Pf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wf(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hf(n){return n===jt?void 0:n}function Wf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const Kf={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Qf=W.INFO,Xf={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Yf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Xf[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Io{constructor(e){this.name=e,this._logLevel=Qf,this._logHandler=Yf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const Jf=(n,e)=>e.some(t=>n instanceof t);let Rc,Pc;function Zf(){return Rc||(Rc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ep(){return Pc||(Pc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iu=new WeakMap,Xi=new WeakMap,ou=new WeakMap,Di=new WeakMap,bo=new WeakMap;function tp(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(St(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&iu.set(t,n)}).catch(()=>{}),bo.set(e,n),e}function np(n){if(Xi.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Xi.set(n,e)}let Yi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ou.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return St(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rp(n){Yi=n(Yi)}function sp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ni(this),e,...t);return ou.set(r,e.sort?e.sort():[e]),St(r)}:ep().includes(n)?function(...e){return n.apply(Ni(this),e),St(iu.get(this))}:function(...e){return St(n.apply(Ni(this),e))}}function ip(n){return typeof n=="function"?sp(n):(n instanceof IDBTransaction&&np(n),Jf(n,Zf())?new Proxy(n,Yi):n)}function St(n){if(n instanceof IDBRequest)return tp(n);if(Di.has(n))return Di.get(n);const e=ip(n);return e!==n&&(Di.set(n,e),bo.set(e,n)),e}const Ni=n=>bo.get(n);function op(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=St(a);return r&&a.addEventListener("upgradeneeded",u=>{r(St(a.result),u.oldVersion,u.newVersion,St(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const ap=["get","getKey","getAll","getAllKeys","count"],cp=["put","add","delete","clear"],Vi=new Map;function Sc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Vi.get(e))return Vi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=cp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ap.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return Vi.set(e,i),i}rp(n=>({...n,get:(e,t,r)=>Sc(e,t)||n.get(e,t,r),has:(e,t)=>!!Sc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(up(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function up(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ji="@firebase/app",Cc="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new Io("@firebase/app"),hp="@firebase/app-compat",dp="@firebase/analytics-compat",fp="@firebase/analytics",pp="@firebase/app-check-compat",mp="@firebase/app-check",gp="@firebase/auth",_p="@firebase/auth-compat",yp="@firebase/database",vp="@firebase/data-connect",Ep="@firebase/database-compat",wp="@firebase/functions",Tp="@firebase/functions-compat",Ip="@firebase/installations",bp="@firebase/installations-compat",Ap="@firebase/messaging",Rp="@firebase/messaging-compat",Pp="@firebase/performance",Sp="@firebase/performance-compat",Cp="@firebase/remote-config",kp="@firebase/remote-config-compat",xp="@firebase/storage",Dp="@firebase/storage-compat",Np="@firebase/firestore",Vp="@firebase/vertexai-preview",Op="@firebase/firestore-compat",Lp="firebase",Mp="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="[DEFAULT]",Up={[Ji]:"fire-core",[hp]:"fire-core-compat",[fp]:"fire-analytics",[dp]:"fire-analytics-compat",[mp]:"fire-app-check",[pp]:"fire-app-check-compat",[gp]:"fire-auth",[_p]:"fire-auth-compat",[yp]:"fire-rtdb",[vp]:"fire-data-connect",[Ep]:"fire-rtdb-compat",[wp]:"fire-fn",[Tp]:"fire-fn-compat",[Ip]:"fire-iid",[bp]:"fire-iid-compat",[Ap]:"fire-fcm",[Rp]:"fire-fcm-compat",[Pp]:"fire-perf",[Sp]:"fire-perf-compat",[Cp]:"fire-rc",[kp]:"fire-rc-compat",[xp]:"fire-gcs",[Dp]:"fire-gcs-compat",[Np]:"fire-fst",[Op]:"fire-fst-compat",[Vp]:"fire-vertex","fire-js":"fire-js",[Lp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Map,Fp=new Map,eo=new Map;function kc(n,e){try{n.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Gt(n){const e=n.name;if(eo.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;eo.set(e,n);for(const t of ws.values())kc(t,n);for(const t of Fp.values())kc(t,n);return!0}function Fs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function it(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ct=new Ir("app","Firebase",Bp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=Mp;function au(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ct.create("bad-app-name",{appName:String(s)});if(t||(t=nu()),!t)throw Ct.create("no-options");const i=ws.get(s);if(i){if(Es(t,i.options)&&Es(r,i.config))return i;throw Ct.create("duplicate-app",{appName:s})}const a=new Gf(s);for(const u of eo.values())a.addComponent(u);const c=new $p(t,r,a);return ws.set(s,c),c}function Ao(n=Zi){const e=ws.get(n);if(!e&&n===Zi&&nu())return au();if(!e)throw Ct.create("no-app",{appName:n});return e}function Ke(n,e,t){var r;let s=(r=Up[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(c.join(" "));return}Gt(new Dt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="firebase-heartbeat-database",jp=1,fr="firebase-heartbeat-store";let Oi=null;function cu(){return Oi||(Oi=op(qp,jp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(fr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ct.create("idb-open",{originalErrorMessage:n.message})})),Oi}async function zp(n){try{const t=(await cu()).transaction(fr),r=await t.objectStore(fr).get(lu(n));return await t.done,r}catch(e){if(e instanceof tt)dt.warn(e.message);else{const t=Ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(t.message)}}}async function xc(n,e){try{const r=(await cu()).transaction(fr,"readwrite");await r.objectStore(fr).put(e,lu(n)),await r.done}catch(t){if(t instanceof tt)dt.warn(t.message);else{const r=Ct.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dt.warn(r.message)}}}function lu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=1024,Wp=30*24*60*60*1e3;class Gp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Qp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Dc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Wp}),this._storage.overwrite(this._heartbeatsCache))}catch(r){dt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dc(),{heartbeatsToSend:r,unsentEntries:s}=Kp(this._heartbeatsCache.heartbeats),i=vs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return dt.warn(t),""}}}function Dc(){return new Date().toISOString().substring(0,10)}function Kp(n,e=Hp){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Nc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Nc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Qp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Of()?Lf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return xc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return xc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Nc(n){return vs(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(n){Gt(new Dt("platform-logger",e=>new lp(e),"PRIVATE")),Gt(new Dt("heartbeat",e=>new Gp(e),"PRIVATE")),Ke(Ji,Cc,n),Ke(Ji,Cc,"esm2017"),Ke("fire-js","")}Xp("");var Yp="firebase",Jp="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke(Yp,Jp,"app");var Vc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ht,uu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function g(){}g.prototype=m.prototype,E.D=m.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(v,w,b){for(var _=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)_[nt-2]=arguments[nt];return m.prototype[w].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,g){g||(g=0);var v=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)v[w]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(w=0;16>w;++w)v[w]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=E.g[0],g=E.g[1],w=E.g[2];var b=E.g[3],_=m+(b^g&(w^b))+v[0]+3614090360&4294967295;m=g+(_<<7&4294967295|_>>>25),_=b+(w^m&(g^w))+v[1]+3905402710&4294967295,b=m+(_<<12&4294967295|_>>>20),_=w+(g^b&(m^g))+v[2]+606105819&4294967295,w=b+(_<<17&4294967295|_>>>15),_=g+(m^w&(b^m))+v[3]+3250441966&4294967295,g=w+(_<<22&4294967295|_>>>10),_=m+(b^g&(w^b))+v[4]+4118548399&4294967295,m=g+(_<<7&4294967295|_>>>25),_=b+(w^m&(g^w))+v[5]+1200080426&4294967295,b=m+(_<<12&4294967295|_>>>20),_=w+(g^b&(m^g))+v[6]+2821735955&4294967295,w=b+(_<<17&4294967295|_>>>15),_=g+(m^w&(b^m))+v[7]+4249261313&4294967295,g=w+(_<<22&4294967295|_>>>10),_=m+(b^g&(w^b))+v[8]+1770035416&4294967295,m=g+(_<<7&4294967295|_>>>25),_=b+(w^m&(g^w))+v[9]+2336552879&4294967295,b=m+(_<<12&4294967295|_>>>20),_=w+(g^b&(m^g))+v[10]+4294925233&4294967295,w=b+(_<<17&4294967295|_>>>15),_=g+(m^w&(b^m))+v[11]+2304563134&4294967295,g=w+(_<<22&4294967295|_>>>10),_=m+(b^g&(w^b))+v[12]+1804603682&4294967295,m=g+(_<<7&4294967295|_>>>25),_=b+(w^m&(g^w))+v[13]+4254626195&4294967295,b=m+(_<<12&4294967295|_>>>20),_=w+(g^b&(m^g))+v[14]+2792965006&4294967295,w=b+(_<<17&4294967295|_>>>15),_=g+(m^w&(b^m))+v[15]+1236535329&4294967295,g=w+(_<<22&4294967295|_>>>10),_=m+(w^b&(g^w))+v[1]+4129170786&4294967295,m=g+(_<<5&4294967295|_>>>27),_=b+(g^w&(m^g))+v[6]+3225465664&4294967295,b=m+(_<<9&4294967295|_>>>23),_=w+(m^g&(b^m))+v[11]+643717713&4294967295,w=b+(_<<14&4294967295|_>>>18),_=g+(b^m&(w^b))+v[0]+3921069994&4294967295,g=w+(_<<20&4294967295|_>>>12),_=m+(w^b&(g^w))+v[5]+3593408605&4294967295,m=g+(_<<5&4294967295|_>>>27),_=b+(g^w&(m^g))+v[10]+38016083&4294967295,b=m+(_<<9&4294967295|_>>>23),_=w+(m^g&(b^m))+v[15]+3634488961&4294967295,w=b+(_<<14&4294967295|_>>>18),_=g+(b^m&(w^b))+v[4]+3889429448&4294967295,g=w+(_<<20&4294967295|_>>>12),_=m+(w^b&(g^w))+v[9]+568446438&4294967295,m=g+(_<<5&4294967295|_>>>27),_=b+(g^w&(m^g))+v[14]+3275163606&4294967295,b=m+(_<<9&4294967295|_>>>23),_=w+(m^g&(b^m))+v[3]+4107603335&4294967295,w=b+(_<<14&4294967295|_>>>18),_=g+(b^m&(w^b))+v[8]+1163531501&4294967295,g=w+(_<<20&4294967295|_>>>12),_=m+(w^b&(g^w))+v[13]+2850285829&4294967295,m=g+(_<<5&4294967295|_>>>27),_=b+(g^w&(m^g))+v[2]+4243563512&4294967295,b=m+(_<<9&4294967295|_>>>23),_=w+(m^g&(b^m))+v[7]+1735328473&4294967295,w=b+(_<<14&4294967295|_>>>18),_=g+(b^m&(w^b))+v[12]+2368359562&4294967295,g=w+(_<<20&4294967295|_>>>12),_=m+(g^w^b)+v[5]+4294588738&4294967295,m=g+(_<<4&4294967295|_>>>28),_=b+(m^g^w)+v[8]+2272392833&4294967295,b=m+(_<<11&4294967295|_>>>21),_=w+(b^m^g)+v[11]+1839030562&4294967295,w=b+(_<<16&4294967295|_>>>16),_=g+(w^b^m)+v[14]+4259657740&4294967295,g=w+(_<<23&4294967295|_>>>9),_=m+(g^w^b)+v[1]+2763975236&4294967295,m=g+(_<<4&4294967295|_>>>28),_=b+(m^g^w)+v[4]+1272893353&4294967295,b=m+(_<<11&4294967295|_>>>21),_=w+(b^m^g)+v[7]+4139469664&4294967295,w=b+(_<<16&4294967295|_>>>16),_=g+(w^b^m)+v[10]+3200236656&4294967295,g=w+(_<<23&4294967295|_>>>9),_=m+(g^w^b)+v[13]+681279174&4294967295,m=g+(_<<4&4294967295|_>>>28),_=b+(m^g^w)+v[0]+3936430074&4294967295,b=m+(_<<11&4294967295|_>>>21),_=w+(b^m^g)+v[3]+3572445317&4294967295,w=b+(_<<16&4294967295|_>>>16),_=g+(w^b^m)+v[6]+76029189&4294967295,g=w+(_<<23&4294967295|_>>>9),_=m+(g^w^b)+v[9]+3654602809&4294967295,m=g+(_<<4&4294967295|_>>>28),_=b+(m^g^w)+v[12]+3873151461&4294967295,b=m+(_<<11&4294967295|_>>>21),_=w+(b^m^g)+v[15]+530742520&4294967295,w=b+(_<<16&4294967295|_>>>16),_=g+(w^b^m)+v[2]+3299628645&4294967295,g=w+(_<<23&4294967295|_>>>9),_=m+(w^(g|~b))+v[0]+4096336452&4294967295,m=g+(_<<6&4294967295|_>>>26),_=b+(g^(m|~w))+v[7]+1126891415&4294967295,b=m+(_<<10&4294967295|_>>>22),_=w+(m^(b|~g))+v[14]+2878612391&4294967295,w=b+(_<<15&4294967295|_>>>17),_=g+(b^(w|~m))+v[5]+4237533241&4294967295,g=w+(_<<21&4294967295|_>>>11),_=m+(w^(g|~b))+v[12]+1700485571&4294967295,m=g+(_<<6&4294967295|_>>>26),_=b+(g^(m|~w))+v[3]+2399980690&4294967295,b=m+(_<<10&4294967295|_>>>22),_=w+(m^(b|~g))+v[10]+4293915773&4294967295,w=b+(_<<15&4294967295|_>>>17),_=g+(b^(w|~m))+v[1]+2240044497&4294967295,g=w+(_<<21&4294967295|_>>>11),_=m+(w^(g|~b))+v[8]+1873313359&4294967295,m=g+(_<<6&4294967295|_>>>26),_=b+(g^(m|~w))+v[15]+4264355552&4294967295,b=m+(_<<10&4294967295|_>>>22),_=w+(m^(b|~g))+v[6]+2734768916&4294967295,w=b+(_<<15&4294967295|_>>>17),_=g+(b^(w|~m))+v[13]+1309151649&4294967295,g=w+(_<<21&4294967295|_>>>11),_=m+(w^(g|~b))+v[4]+4149444226&4294967295,m=g+(_<<6&4294967295|_>>>26),_=b+(g^(m|~w))+v[11]+3174756917&4294967295,b=m+(_<<10&4294967295|_>>>22),_=w+(m^(b|~g))+v[2]+718787259&4294967295,w=b+(_<<15&4294967295|_>>>17),_=g+(b^(w|~m))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+b&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var g=m-this.blockSize,v=this.B,w=this.h,b=0;b<m;){if(w==0)for(;b<=g;)s(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<m;)if(v[w++]=E.charCodeAt(b++),w==this.blockSize){s(this,v),w=0;break}}else for(;b<m;)if(v[w++]=E[b++],w==this.blockSize){s(this,v),w=0;break}}this.h=w,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var g=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=g&255,g/=256;for(this.u(E),E=Array(16),m=g=0;4>m;++m)for(var v=0;32>v;v+=8)E[g++]=this.g[m]>>>v&255;return E};function i(E,m){var g=c;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=m(E)}function a(E,m){this.h=m;for(var g=[],v=!0,w=E.length-1;0<=w;w--){var b=E[w]|0;v&&b==m||(g[w]=b,v=!1)}this.g=g}var c={};function u(E){return-128<=E&&128>E?i(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return y;if(0>E)return k(d(-E));for(var m=[],g=1,v=0;E>=g;v++)m[v]=E/g|0,g*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return k(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(m,8)),v=y,w=0;w<E.length;w+=8){var b=Math.min(8,E.length-w),_=parseInt(E.substring(w,w+b),m);8>b?(b=d(Math.pow(m,b)),v=v.j(b).add(d(_))):(v=v.j(g),v=v.add(d(_)))}return v}var y=u(0),T=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-k(this).m();for(var E=0,m=1,g=0;g<this.g.length;g++){var v=this.i(g);E+=(0<=v?v:4294967296+v)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(D(this))return"-"+k(this).toString(E);for(var m=d(Math.pow(E,6)),g=this,v="";;){var w=z(g,m).g;g=$(g,w.j(m));var b=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=w,C(g))return b+v;for(;6>b.length;)b="0"+b;v=b+v}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function D(E){return E.h==-1}n.l=function(E){return E=$(this,E),D(E)?-1:C(E)?0:1};function k(E){for(var m=E.g.length,g=[],v=0;v<m;v++)g[v]=~E.g[v];return new a(g,~E.h).add(T)}n.abs=function(){return D(this)?k(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],v=0,w=0;w<=m;w++){var b=v+(this.i(w)&65535)+(E.i(w)&65535),_=(b>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);v=_>>>16,b&=65535,_&=65535,g[w]=_<<16|b}return new a(g,g[g.length-1]&-2147483648?-1:0)};function $(E,m){return E.add(k(m))}n.j=function(E){if(C(this)||C(E))return y;if(D(this))return D(E)?k(this).j(k(E)):k(k(this).j(E));if(D(E))return k(this.j(k(E)));if(0>this.l(R)&&0>E.l(R))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,g=[],v=0;v<2*m;v++)g[v]=0;for(v=0;v<this.g.length;v++)for(var w=0;w<E.g.length;w++){var b=this.i(v)>>>16,_=this.i(v)&65535,nt=E.i(w)>>>16,Vn=E.i(w)&65535;g[2*v+2*w]+=_*Vn,q(g,2*v+2*w),g[2*v+2*w+1]+=b*Vn,q(g,2*v+2*w+1),g[2*v+2*w+1]+=_*nt,q(g,2*v+2*w+1),g[2*v+2*w+2]+=b*nt,q(g,2*v+2*w+2)}for(v=0;v<m;v++)g[v]=g[2*v+1]<<16|g[2*v];for(v=m;v<2*m;v++)g[v]=0;return new a(g,0)};function q(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function M(E,m){this.g=E,this.h=m}function z(E,m){if(C(m))throw Error("division by zero");if(C(E))return new M(y,y);if(D(E))return m=z(k(E),m),new M(k(m.g),k(m.h));if(D(m))return m=z(E,k(m)),new M(k(m.g),m.h);if(30<E.g.length){if(D(E)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var g=T,v=m;0>=v.l(E);)g=de(g),v=de(v);var w=Y(g,1),b=Y(v,1);for(v=Y(v,2),g=Y(g,2);!C(v);){var _=b.add(v);0>=_.l(E)&&(w=w.add(g),b=_),v=Y(v,1),g=Y(g,1)}return m=$(E,w.j(m)),new M(w,m)}for(w=y;0<=E.l(m);){for(g=Math.max(1,Math.floor(E.m()/m.m())),v=Math.ceil(Math.log(g)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),b=d(g),_=b.j(m);D(_)||0<_.l(E);)g-=v,b=d(g),_=b.j(m);C(b)&&(b=T),w=w.add(b),E=$(E,_)}return new M(w,E)}n.A=function(E){return z(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],v=0;v<m;v++)g[v]=this.i(v)&E.i(v);return new a(g,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],v=0;v<m;v++)g[v]=this.i(v)|E.i(v);return new a(g,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],v=0;v<m;v++)g[v]=this.i(v)^E.i(v);return new a(g,this.h^E.h)};function de(E){for(var m=E.g.length+1,g=[],v=0;v<m;v++)g[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(g,E.h)}function Y(E,m){var g=m>>5;m%=32;for(var v=E.g.length-g,w=[],b=0;b<v;b++)w[b]=0<m?E.i(b+g)>>>m|E.i(b+g+1)<<32-m:E.i(b+g);return new a(w,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,uu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Ht=a}).apply(typeof Vc<"u"?Vc:typeof self<"u"?self:typeof window<"u"?window:{});var ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hu,nr,du,us,to,fu,pu,mu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ns=="object"&&ns];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var I=o[f];if(!(I in h))break e;h=h[I]}o=o[o.length-1],f=h[o],l=l(f),l!=f&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,f=!1,I={next:function(){if(!f&&h<o.length){var A=h++;return{value:l(A,o[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function p(o,l,h){return o.call.apply(o.bind,arguments)}function y(o,l,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),o.apply(l,I)}}return function(){return o.apply(l,arguments)}}function T(o,l,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,T.apply(null,arguments)}function R(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function C(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,I,A){for(var x=Array(arguments.length-2),J=2;J<arguments.length;J++)x[J-2]=arguments[J];return l.prototype[I].apply(f,x)}}function D(o){const l=o.length;if(0<l){const h=Array(l);for(let f=0;f<l;f++)h[f]=o[f];return h}return[]}function k(o,l){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const I=o.length||0,A=f.length||0;o.length=I+A;for(let x=0;x<A;x++)o[I+x]=f[x]}else o.push(f)}}class ${constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function q(o){return/^[\s\xa0]*$/.test(o)}function M(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var de=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function Y(o,l,h){for(const f in o)l.call(h,o[f],f,o)}function E(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function m(o){const l={};for(const h in o)l[h]=o[h];return l}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,l){let h,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(h in f)o[h]=f[h];for(let A=0;A<g.length;A++)h=g[A],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function w(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function b(o){c.setTimeout(()=>{throw o},0)}function _(){var o=ai;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class nt{constructor(){this.h=this.g=null}add(l,h){const f=Vn.get();f.set(l,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Vn=new $(()=>new Od,o=>o.reset());class Od{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let On,Ln=!1,ai=new nt,Ia=()=>{const o=c.Promise.resolve(void 0);On=()=>{o.then(Ld)}};var Ld=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){b(h)}var l=Vn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Ln=!1};function _t(){this.s=this.s,this.C=this.C}_t.prototype.s=!1,_t.prototype.ma=function(){this.s||(this.s=!0,this.N())},_t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Md=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o}();function Mn(o,l){if(Ee.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(de){e:{try{z(l.nodeName);var I=!0;break e}catch{}I=!1}I||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ud[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Mn.aa.h.call(this)}}C(Mn,Ee);var Ud={2:"touch",3:"pen",4:"mouse"};Mn.prototype.h=function(){Mn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Mr="closure_listenable_"+(1e6*Math.random()|0),Fd=0;function Bd(o,l,h,f,I){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!f,this.ha=I,this.key=++Fd,this.da=this.fa=!1}function Ur(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Fr(o){this.src=o,this.g={},this.h=0}Fr.prototype.add=function(o,l,h,f,I){var A=o.toString();o=this.g[A],o||(o=this.g[A]=[],this.h++);var x=li(o,l,f,I);return-1<x?(l=o[x],h||(l.fa=!1)):(l=new Bd(l,this.src,A,!!f,I),l.fa=h,o.push(l)),l};function ci(o,l){var h=l.type;if(h in o.g){var f=o.g[h],I=Array.prototype.indexOf.call(f,l,void 0),A;(A=0<=I)&&Array.prototype.splice.call(f,I,1),A&&(Ur(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function li(o,l,h,f){for(var I=0;I<o.length;++I){var A=o[I];if(!A.da&&A.listener==l&&A.capture==!!h&&A.ha==f)return I}return-1}var ui="closure_lm_"+(1e6*Math.random()|0),hi={};function ba(o,l,h,f,I){if(Array.isArray(l)){for(var A=0;A<l.length;A++)ba(o,l[A],h,f,I);return null}return h=Pa(h),o&&o[Mr]?o.K(l,h,d(f)?!!f.capture:!1,I):$d(o,l,h,!1,f,I)}function $d(o,l,h,f,I,A){if(!l)throw Error("Invalid event type");var x=d(I)?!!I.capture:!!I,J=fi(o);if(J||(o[ui]=J=new Fr(o)),h=J.add(l,h,f,x,A),h.proxy)return h;if(f=qd(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Md||(I=x),I===void 0&&(I=!1),o.addEventListener(l.toString(),f,I);else if(o.attachEvent)o.attachEvent(Ra(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function qd(){function o(h){return l.call(o.src,o.listener,h)}const l=jd;return o}function Aa(o,l,h,f,I){if(Array.isArray(l))for(var A=0;A<l.length;A++)Aa(o,l[A],h,f,I);else f=d(f)?!!f.capture:!!f,h=Pa(h),o&&o[Mr]?(o=o.i,l=String(l).toString(),l in o.g&&(A=o.g[l],h=li(A,h,f,I),-1<h&&(Ur(A[h]),Array.prototype.splice.call(A,h,1),A.length==0&&(delete o.g[l],o.h--)))):o&&(o=fi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=li(l,h,f,I)),(h=-1<o?l[o]:null)&&di(h))}function di(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Mr])ci(l.i,o);else{var h=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(h,f,o.capture):l.detachEvent?l.detachEvent(Ra(h),f):l.addListener&&l.removeListener&&l.removeListener(f),(h=fi(l))?(ci(h,o),h.h==0&&(h.src=null,l[ui]=null)):Ur(o)}}}function Ra(o){return o in hi?hi[o]:hi[o]="on"+o}function jd(o,l){if(o.da)o=!0;else{l=new Mn(l,this);var h=o.listener,f=o.ha||o.src;o.fa&&di(o),o=h.call(f,l)}return o}function fi(o){return o=o[ui],o instanceof Fr?o:null}var pi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pa(o){return typeof o=="function"?o:(o[pi]||(o[pi]=function(l){return o.handleEvent(l)}),o[pi])}function we(){_t.call(this),this.i=new Fr(this),this.M=this,this.F=null}C(we,_t),we.prototype[Mr]=!0,we.prototype.removeEventListener=function(o,l,h,f){Aa(this,o,l,h,f)};function Ce(o,l){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new Ee(l,o);else if(l instanceof Ee)l.target=l.target||o;else{var I=l;l=new Ee(f,o),v(l,I)}if(I=!0,h)for(var A=h.length-1;0<=A;A--){var x=l.g=h[A];I=Br(x,f,!0,l)&&I}if(x=l.g=o,I=Br(x,f,!0,l)&&I,I=Br(x,f,!1,l)&&I,h)for(A=0;A<h.length;A++)x=l.g=h[A],I=Br(x,f,!1,l)&&I}we.prototype.N=function(){if(we.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],f=0;f<h.length;f++)Ur(h[f]);delete o.g[l],o.h--}}this.F=null},we.prototype.K=function(o,l,h,f){return this.i.add(String(o),l,!1,h,f)},we.prototype.L=function(o,l,h,f){return this.i.add(String(o),l,!0,h,f)};function Br(o,l,h,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var I=!0,A=0;A<l.length;++A){var x=l[A];if(x&&!x.da&&x.capture==h){var J=x.listener,pe=x.ha||x.src;x.fa&&ci(o.i,x),I=J.call(pe,f)!==!1&&I}}return I&&!f.defaultPrevented}function Sa(o,l,h){if(typeof o=="function")h&&(o=T(o,h));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Ca(o){o.g=Sa(()=>{o.g=null,o.i&&(o.i=!1,Ca(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class zd extends _t{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ca(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Un(o){_t.call(this),this.h=o,this.g={}}C(Un,_t);var ka=[];function xa(o){Y(o.g,function(l,h){this.g.hasOwnProperty(h)&&di(l)},o),o.g={}}Un.prototype.N=function(){Un.aa.N.call(this),xa(this)},Un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mi=c.JSON.stringify,Hd=c.JSON.parse,Wd=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function gi(){}gi.prototype.h=null;function Da(o){return o.h||(o.h=o.i())}function Na(){}var Fn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _i(){Ee.call(this,"d")}C(_i,Ee);function yi(){Ee.call(this,"c")}C(yi,Ee);var Ft={},Va=null;function $r(){return Va=Va||new we}Ft.La="serverreachability";function Oa(o){Ee.call(this,Ft.La,o)}C(Oa,Ee);function Bn(o){const l=$r();Ce(l,new Oa(l))}Ft.STAT_EVENT="statevent";function La(o,l){Ee.call(this,Ft.STAT_EVENT,o),this.stat=l}C(La,Ee);function ke(o){const l=$r();Ce(l,new La(l,o))}Ft.Ma="timingevent";function Ma(o,l){Ee.call(this,Ft.Ma,o),this.size=l}C(Ma,Ee);function $n(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function qn(){this.g=!0}qn.prototype.xa=function(){this.g=!1};function Gd(o,l,h,f,I,A){o.info(function(){if(o.g)if(A)for(var x="",J=A.split("&"),pe=0;pe<J.length;pe++){var K=J[pe].split("=");if(1<K.length){var Te=K[0];K=K[1];var Ie=Te.split("_");x=2<=Ie.length&&Ie[1]=="type"?x+(Te+"="+K+"&"):x+(Te+"=redacted&")}}else x=null;else x=A;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+l+`
`+h+`
`+x})}function Kd(o,l,h,f,I,A,x){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+l+`
`+h+`
`+A+" "+x})}function sn(o,l,h,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Xd(o,h)+(f?" "+f:"")})}function Qd(o,l){o.info(function(){return"TIMEOUT: "+l})}qn.prototype.info=function(){};function Xd(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var A=I[0];if(A!="noop"&&A!="stop"&&A!="close")for(var x=1;x<I.length;x++)I[x]=""}}}}return mi(h)}catch{return l}}var qr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ua={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vi;function jr(){}C(jr,gi),jr.prototype.g=function(){return new XMLHttpRequest},jr.prototype.i=function(){return{}},vi=new jr;function yt(o,l,h,f){this.j=o,this.i=l,this.l=h,this.R=f||1,this.U=new Un(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fa}function Fa(){this.i=null,this.g="",this.h=!1}var Ba={},Ei={};function wi(o,l,h){o.L=1,o.v=Gr(rt(l)),o.m=h,o.P=!0,$a(o,null)}function $a(o,l){o.F=Date.now(),zr(o),o.A=rt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),tc(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Fa,o.g=vc(o.j,h?l:null,!o.m),0<o.O&&(o.M=new zd(T(o.Y,o,o.g),o.O)),l=o.U,h=o.g,f=o.ca;var I="readystatechange";Array.isArray(I)||(I&&(ka[0]=I.toString()),I=ka);for(var A=0;A<I.length;A++){var x=ba(h,I[A],f||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Bn(),Gd(o.i,o.u,o.A,o.l,o.R,o.m)}yt.prototype.ca=function(o){o=o.target;const l=this.M;l&&st(o)==3?l.j():this.Y(o)},yt.prototype.Y=function(o){try{if(o==this.g)e:{const Ie=st(this.g);var l=this.g.Ba();const cn=this.g.Z();if(!(3>Ie)&&(Ie!=3||this.g&&(this.h.h||this.g.oa()||cc(this.g)))){this.J||Ie!=4||l==7||(l==8||0>=cn?Bn(3):Bn(2)),Ti(this);var h=this.g.Z();this.X=h;t:if(qa(this)){var f=cc(this.g);o="";var I=f.length,A=st(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bt(this),jn(this);var x="";break t}this.h.i=new c.TextDecoder}for(l=0;l<I;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(A&&l==I-1)});f.length=0,this.h.g+=o,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=h==200,Kd(this.i,this.u,this.A,this.l,this.R,Ie,h),this.o){if(this.T&&!this.K){t:{if(this.g){var J,pe=this.g;if((J=pe.g?pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(J)){var K=J;break t}}K=null}if(h=K)sn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ii(this,h);else{this.o=!1,this.s=3,ke(12),Bt(this),jn(this);break e}}if(this.P){h=!0;let qe;for(;!this.J&&this.C<x.length;)if(qe=Yd(this,x),qe==Ei){Ie==4&&(this.s=4,ke(14),h=!1),sn(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==Ba){this.s=4,ke(15),sn(this.i,this.l,x,"[Invalid Chunk]"),h=!1;break}else sn(this.i,this.l,qe,null),Ii(this,qe);if(qa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||x.length!=0||this.h.h||(this.s=1,ke(16),h=!1),this.o=this.o&&h,!h)sn(this.i,this.l,x,"[Invalid Chunked Response]"),Bt(this),jn(this);else if(0<x.length&&!this.W){this.W=!0;var Te=this.j;Te.g==this&&Te.ba&&!Te.M&&(Te.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),Ci(Te),Te.M=!0,ke(11))}}else sn(this.i,this.l,x,null),Ii(this,x);Ie==4&&Bt(this),this.o&&!this.J&&(Ie==4?mc(this.j,this):(this.o=!1,zr(this)))}else mf(this.g),h==400&&0<x.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Bt(this),jn(this)}}}catch{}finally{}};function qa(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Yd(o,l){var h=o.C,f=l.indexOf(`
`,h);return f==-1?Ei:(h=Number(l.substring(h,f)),isNaN(h)?Ba:(f+=1,f+h>l.length?Ei:(l=l.slice(f,f+h),o.C=f+h,l)))}yt.prototype.cancel=function(){this.J=!0,Bt(this)};function zr(o){o.S=Date.now()+o.I,ja(o,o.I)}function ja(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=$n(T(o.ba,o),l)}function Ti(o){o.B&&(c.clearTimeout(o.B),o.B=null)}yt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Qd(this.i,this.A),this.L!=2&&(Bn(),ke(17)),Bt(this),this.s=2,jn(this)):ja(this,this.S-o)};function jn(o){o.j.G==0||o.J||mc(o.j,o)}function Bt(o){Ti(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,xa(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Ii(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||bi(h.h,o))){if(!o.K&&bi(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Zr(h),Yr(h);else break e;Si(h),ke(18)}}else h.za=I[1],0<h.za-h.T&&37500>I[2]&&h.F&&h.v==0&&!h.C&&(h.C=$n(T(h.Za,h),6e3));if(1>=Wa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else qt(h,11)}else if((o.K||h.g==o)&&Zr(h),!q(l))for(I=h.Da.g.parse(l),l=0;l<I.length;l++){let K=I[l];if(h.T=K[0],K=K[1],h.G==2)if(K[0]=="c"){h.K=K[1],h.ia=K[2];const Te=K[3];Te!=null&&(h.la=Te,h.j.info("VER="+h.la));const Ie=K[4];Ie!=null&&(h.Aa=Ie,h.j.info("SVER="+h.Aa));const cn=K[5];cn!=null&&typeof cn=="number"&&0<cn&&(f=1.5*cn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const qe=o.g;if(qe){const ts=qe.g?qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ts){var A=f.h;A.g||ts.indexOf("spdy")==-1&&ts.indexOf("quic")==-1&&ts.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Ai(A,A.h),A.h=null))}if(f.D){const ki=qe.g?qe.g.getResponseHeader("X-HTTP-Session-Id"):null;ki&&(f.ya=ki,Z(f.I,f.D,ki))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var x=o;if(f.qa=yc(f,f.J?f.ia:null,f.W),x.K){Ga(f.h,x);var J=x,pe=f.L;pe&&(J.I=pe),J.B&&(Ti(J),zr(J)),f.g=x}else fc(f);0<h.i.length&&Jr(h)}else K[0]!="stop"&&K[0]!="close"||qt(h,7);else h.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?qt(h,7):Pi(h):K[0]!="noop"&&h.l&&h.l.ta(K),h.v=0)}}Bn(4)}catch{}}var Jd=class{constructor(o,l){this.g=o,this.map=l}};function za(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ha(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Wa(o){return o.h?1:o.g?o.g.size:0}function bi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Ai(o,l){o.g?o.g.add(l):o.h=l}function Ga(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}za.prototype.cancel=function(){if(this.i=Ka(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ka(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return D(o.i)}function Zd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,f=0;f<h;f++)l.push(o[f]);return l}l=[],h=0;for(f in o)l[h++]=o[f];return l}function ef(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const f in o)l[h++]=f;return l}}}function Qa(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=ef(o),f=Zd(o),I=f.length,A=0;A<I;A++)l.call(void 0,f[A],h&&h[A],o)}var Xa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tf(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),I=null;if(0<=f){var A=o[h].substring(0,f);I=o[h].substring(f+1)}else A=o[h];l(A,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function $t(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof $t){this.h=o.h,Hr(this,o.j),this.o=o.o,this.g=o.g,Wr(this,o.s),this.l=o.l;var l=o.i,h=new Wn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Ya(this,h),this.m=o.m}else o&&(l=String(o).match(Xa))?(this.h=!1,Hr(this,l[1]||"",!0),this.o=zn(l[2]||""),this.g=zn(l[3]||"",!0),Wr(this,l[4]),this.l=zn(l[5]||"",!0),Ya(this,l[6]||"",!0),this.m=zn(l[7]||"")):(this.h=!1,this.i=new Wn(null,this.h))}$t.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Hn(l,Ja,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Hn(l,Ja,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Hn(h,h.charAt(0)=="/"?sf:rf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Hn(h,af)),o.join("")};function rt(o){return new $t(o)}function Hr(o,l,h){o.j=h?zn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Wr(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Ya(o,l,h){l instanceof Wn?(o.i=l,cf(o.i,o.h)):(h||(l=Hn(l,of)),o.i=new Wn(l,o.h))}function Z(o,l,h){o.i.set(l,h)}function Gr(o){return Z(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function zn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Hn(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,nf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function nf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ja=/[#\/\?@]/g,rf=/[#\?:]/g,sf=/[#\?]/g,of=/[#\?@]/g,af=/#/g;function Wn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function vt(o){o.g||(o.g=new Map,o.h=0,o.i&&tf(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Wn.prototype,n.add=function(o,l){vt(this),this.i=null,o=on(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Za(o,l){vt(o),l=on(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function ec(o,l){return vt(o),l=on(o,l),o.g.has(l)}n.forEach=function(o,l){vt(this),this.g.forEach(function(h,f){h.forEach(function(I){o.call(l,I,f,this)},this)},this)},n.na=function(){vt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let f=0;f<l.length;f++){const I=o[f];for(let A=0;A<I.length;A++)h.push(l[f])}return h},n.V=function(o){vt(this);let l=[];if(typeof o=="string")ec(this,o)&&(l=l.concat(this.g.get(on(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return vt(this),this.i=null,o=on(this,o),ec(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function tc(o,l,h){Za(o,l),0<h.length&&(o.i=null,o.g.set(on(o,l),D(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var f=l[h];const A=encodeURIComponent(String(f)),x=this.V(f);for(f=0;f<x.length;f++){var I=A;x[f]!==""&&(I+="="+encodeURIComponent(String(x[f]))),o.push(I)}}return this.i=o.join("&")};function on(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function cf(o,l){l&&!o.j&&(vt(o),o.i=null,o.g.forEach(function(h,f){var I=f.toLowerCase();f!=I&&(Za(this,f),tc(this,I,h))},o)),o.j=l}function lf(o,l){const h=new qn;if(c.Image){const f=new Image;f.onload=R(Et,h,"TestLoadImage: loaded",!0,l,f),f.onerror=R(Et,h,"TestLoadImage: error",!1,l,f),f.onabort=R(Et,h,"TestLoadImage: abort",!1,l,f),f.ontimeout=R(Et,h,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function uf(o,l){const h=new qn,f=new AbortController,I=setTimeout(()=>{f.abort(),Et(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(A=>{clearTimeout(I),A.ok?Et(h,"TestPingServer: ok",!0,l):Et(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(I),Et(h,"TestPingServer: error",!1,l)})}function Et(o,l,h,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(h)}catch{}}function hf(){this.g=new Wd}function df(o,l,h){const f=h||"";try{Qa(o,function(I,A){let x=I;d(I)&&(x=mi(I)),l.push(f+A+"="+encodeURIComponent(x))})}catch(I){throw l.push(f+"type="+encodeURIComponent("_badmap")),I}}function Kr(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Kr,gi),Kr.prototype.g=function(){return new Qr(this.l,this.j)},Kr.prototype.i=function(o){return function(){return o}}({});function Qr(o,l){we.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Qr,we),n=Qr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Kn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Kn(this)),this.g&&(this.readyState=3,Kn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function nc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Gn(this):Kn(this),this.readyState==3&&nc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Gn(this))},n.Qa=function(o){this.g&&(this.response=o,Gn(this))},n.ga=function(){this.g&&Gn(this)};function Gn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Kn(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Kn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function rc(o){let l="";return Y(o,function(h,f){l+=f,l+=":",l+=h,l+=`\r
`}),l}function Ri(o,l,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=rc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Z(o,l,h))}function se(o){we.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(se,we);var ff=/^https?$/i,pf=["POST","PUT"];n=se.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vi.g(),this.v=this.o?Da(this.o):Da(vi),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(A){sc(this,A);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)h.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())h.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(A=>A.toLowerCase()=="content-type"),I=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(pf,l,void 0))||f||I||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,x]of h)this.g.setRequestHeader(A,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ac(this),this.u=!0,this.g.send(o),this.u=!1}catch(A){sc(this,A)}};function sc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,ic(o),Xr(o)}function ic(o){o.A||(o.A=!0,Ce(o,"complete"),Ce(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ce(this,"complete"),Ce(this,"abort"),Xr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xr(this,!0)),se.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?oc(this):this.bb())},n.bb=function(){oc(this)};function oc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||st(o)!=4||o.Z()!=2)){if(o.u&&st(o)==4)Sa(o.Ea,0,o);else if(Ce(o,"readystatechange"),st(o)==4){o.h=!1;try{const x=o.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var f;if(f=x===0){var I=String(o.D).match(Xa)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),f=!ff.test(I?I.toLowerCase():"")}h=f}if(h)Ce(o,"complete"),Ce(o,"success");else{o.m=6;try{var A=2<st(o)?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.Z()+"]",ic(o)}}finally{Xr(o)}}}}function Xr(o,l){if(o.g){ac(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ce(o,"ready");try{h.onreadystatechange=f}catch{}}}function ac(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function st(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<st(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Hd(l)}};function cc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function mf(o){const l={};o=(o.g&&2<=st(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(q(o[f]))continue;var h=w(o[f]);const I=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const A=l[I]||[];l[I]=A,A.push(h)}E(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function lc(o){this.Aa=0,this.i=[],this.j=new qn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qn("baseRetryDelayMs",5e3,o),this.cb=Qn("retryDelaySeedMs",1e4,o),this.Wa=Qn("forwardChannelMaxRetries",2,o),this.wa=Qn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new za(o&&o.concurrentRequestLimit),this.Da=new hf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=lc.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,f){ke(0),this.W=o,this.H=l||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=yc(this,null,this.W),Jr(this)};function Pi(o){if(uc(o),o.G==3){var l=o.U++,h=rt(o.I);if(Z(h,"SID",o.K),Z(h,"RID",l),Z(h,"TYPE","terminate"),Xn(o,h),l=new yt(o,o.j,l),l.L=2,l.v=Gr(rt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=vc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),zr(l)}_c(o)}function Yr(o){o.g&&(Ci(o),o.g.cancel(),o.g=null)}function uc(o){Yr(o),o.u&&(c.clearTimeout(o.u),o.u=null),Zr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Jr(o){if(!Ha(o.h)&&!o.s){o.s=!0;var l=o.Ga;On||Ia(),Ln||(On(),Ln=!0),ai.add(l,o),o.B=0}}function gf(o,l){return Wa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=$n(T(o.Ga,o,l),gc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const I=new yt(this,this.j,o);let A=this.o;if(this.S&&(A?(A=m(A),v(A,this.S)):A=this.S),this.m!==null||this.O||(I.H=A,A=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=dc(this,I,l),h=rt(this.I),Z(h,"RID",o),Z(h,"CVER",22),this.D&&Z(h,"X-HTTP-Session-Id",this.D),Xn(this,h),A&&(this.O?l="headers="+encodeURIComponent(String(rc(A)))+"&"+l:this.m&&Ri(h,this.m,A)),Ai(this.h,I),this.Ua&&Z(h,"TYPE","init"),this.P?(Z(h,"$req",l),Z(h,"SID","null"),I.T=!0,wi(I,h,null)):wi(I,h,l),this.G=2}}else this.G==3&&(o?hc(this,o):this.i.length==0||Ha(this.h)||hc(this))};function hc(o,l){var h;l?h=l.l:h=o.U++;const f=rt(o.I);Z(f,"SID",o.K),Z(f,"RID",h),Z(f,"AID",o.T),Xn(o,f),o.m&&o.o&&Ri(f,o.m,o.o),h=new yt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=dc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ai(o.h,h),wi(h,f,l)}function Xn(o,l){o.H&&Y(o.H,function(h,f){Z(l,f,h)}),o.l&&Qa({},function(h,f){Z(l,f,h)})}function dc(o,l,h){h=Math.min(o.i.length,h);var f=o.l?T(o.l.Na,o.l,o):null;e:{var I=o.i;let A=-1;for(;;){const x=["count="+h];A==-1?0<h?(A=I[0].g,x.push("ofs="+A)):A=0:x.push("ofs="+A);let J=!0;for(let pe=0;pe<h;pe++){let K=I[pe].g;const Te=I[pe].map;if(K-=A,0>K)A=Math.max(0,I[pe].g-100),J=!1;else try{df(Te,x,"req"+K+"_")}catch{f&&f(Te)}}if(J){f=x.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,f}function fc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;On||Ia(),Ln||(On(),Ln=!0),ai.add(l,o),o.v=0}}function Si(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=$n(T(o.Fa,o),gc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,pc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=$n(T(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),Yr(this),pc(this))};function Ci(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function pc(o){o.g=new yt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=rt(o.qa);Z(l,"RID","rpc"),Z(l,"SID",o.K),Z(l,"AID",o.T),Z(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&Z(l,"TO",o.ja),Z(l,"TYPE","xmlhttp"),Xn(o,l),o.m&&o.o&&Ri(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Gr(rt(l)),h.m=null,h.P=!0,$a(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Yr(this),Si(this),ke(19))};function Zr(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function mc(o,l){var h=null;if(o.g==l){Zr(o),Ci(o),o.g=null;var f=2}else if(bi(o.h,l))h=l.D,Ga(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var I=o.B;f=$r(),Ce(f,new Ma(f,h)),Jr(o)}else fc(o);else if(I=l.s,I==3||I==0&&0<l.X||!(f==1&&gf(o,l)||f==2&&Si(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),I){case 1:qt(o,5);break;case 4:qt(o,10);break;case 3:qt(o,6);break;default:qt(o,2)}}}function gc(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function qt(o,l){if(o.j.info("Error code "+l),l==2){var h=T(o.fb,o),f=o.Xa;const I=!f;f=new $t(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Hr(f,"https"),Gr(f),I?lf(f.toString(),h):uf(f.toString(),h)}else ke(2);o.G=0,o.l&&o.l.sa(l),_c(o),uc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function _c(o){if(o.G=0,o.ka=[],o.l){const l=Ka(o.h);(l.length!=0||o.i.length!=0)&&(k(o.ka,l),k(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function yc(o,l,h){var f=h instanceof $t?rt(h):new $t(h);if(f.g!="")l&&(f.g=l+"."+f.g),Wr(f,f.s);else{var I=c.location;f=I.protocol,l=l?l+"."+I.hostname:I.hostname,I=+I.port;var A=new $t(null);f&&Hr(A,f),l&&(A.g=l),I&&Wr(A,I),h&&(A.l=h),f=A}return h=o.D,l=o.ya,h&&l&&Z(f,h,l),Z(f,"VER",o.la),Xn(o,f),f}function vc(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new se(new Kr({eb:h})):new se(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ec(){}n=Ec.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function es(){}es.prototype.g=function(o,l){return new Le(o,l)};function Le(o,l){we.call(this),this.g=new lc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!q(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!q(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new an(this)}C(Le,we),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){Pi(this.g)},Le.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=mi(o),o=h);l.i.push(new Jd(l.Ya++,o)),l.G==3&&Jr(l)},Le.prototype.N=function(){this.g.l=null,delete this.j,Pi(this.g),delete this.g,Le.aa.N.call(this)};function wc(o){_i.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}C(wc,_i);function Tc(){yi.call(this),this.status=1}C(Tc,yi);function an(o){this.g=o}C(an,Ec),an.prototype.ua=function(){Ce(this.g,"a")},an.prototype.ta=function(o){Ce(this.g,new wc(o))},an.prototype.sa=function(o){Ce(this.g,new Tc)},an.prototype.ra=function(){Ce(this.g,"b")},es.prototype.createWebChannel=es.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,mu=function(){return new es},pu=function(){return $r()},fu=Ft,to={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qr.NO_ERROR=0,qr.TIMEOUT=8,qr.HTTP_ERROR=6,us=qr,Ua.COMPLETE="complete",du=Ua,Na.EventType=Fn,Fn.OPEN="a",Fn.CLOSE="b",Fn.ERROR="c",Fn.MESSAGE="d",we.prototype.listen=we.prototype.K,nr=Na,se.prototype.listenOnce=se.prototype.L,se.prototype.getLastError=se.prototype.Ka,se.prototype.getLastErrorCode=se.prototype.Ba,se.prototype.getStatus=se.prototype.Z,se.prototype.getResponseJson=se.prototype.Oa,se.prototype.getResponseText=se.prototype.oa,se.prototype.send=se.prototype.ea,se.prototype.setWithCredentials=se.prototype.Ha,hu=se}).apply(typeof ns<"u"?ns:typeof self<"u"?self:typeof window<"u"?window:{});const Oc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new Io("@firebase/firestore");function Yn(){return Kt.logLevel}function V(n,...e){if(Kt.logLevel<=W.DEBUG){const t=e.map(Ro);Kt.debug(`Firestore (${Pn}): ${n}`,...t)}}function ft(n,...e){if(Kt.logLevel<=W.ERROR){const t=e.map(Ro);Kt.error(`Firestore (${Pn}): ${n}`,...t)}}function vn(n,...e){if(Kt.logLevel<=W.WARN){const t=e.map(Ro);Kt.warn(`Firestore (${Pn}): ${n}`,...t)}}function Ro(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n="Unexpected state"){const e=`FIRESTORE (${Pn}) INTERNAL ASSERTION FAILED: `+n;throw ft(e),new Error(e)}function X(n,e){n||U()}function B(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends tt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ae.UNAUTHENTICATED))}shutdown(){}}class em{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class tm{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new lt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new lt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new lt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new gu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new Ae(e)}}class nm{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class rm{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new nm(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class im{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){X(this.o===void 0);const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string"),this.R=t.token,new sm(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=om(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Q(n,e){return n<e?-1:n>e?1:0}function En(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ae(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new ae(0,0))}static max(){return new F(new ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(),r===void 0?r=e.length-t:r>e.length-t&&U(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return pr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ee extends pr{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ee(t)}static emptyPath(){return new ee([])}}const am=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends pr{construct(e,t,r){return new _e(e,t,r)}static isValidIdentifier(e){return am.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _e(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(t)}static emptyPath(){return new _e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ee.fromString(e))}static fromName(e){return new O(ee.fromString(e).popFirst(5))}static empty(){return new O(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ee(e.slice()))}}function cm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new ae(t+1,0):new ae(t,r));return new Nt(s,O.empty(),e)}function lm(n){return new Nt(n.readTime,n.key,-1)}class Nt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Nt(F.min(),O.empty(),-1)}static max(){return new Nt(F.max(),O.empty(),-1)}}function um(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==hm)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(s=>s?S.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new S((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++c,c===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new S((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function fm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Rr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Po.oe=-1;function Bs(n){return n==null}function Ts(n){return n===0&&1/n==-1/0}function pm(n){return typeof n=="number"&&Number.isInteger(n)&&!Ts(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function tn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function yu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.comparator=e,this.root=t||ge.EMPTY}insert(e,t){return new ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rs(this.root,e,this.comparator,!1)}getReverseIterator(){return new rs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rs(this.root,e,this.comparator,!0)}}class rs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ge{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ge.RED,this.left=s??ge.EMPTY,this.right=i??ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ge(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1;ge.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,t,r,s,i){return this}insert(e,t,r){return new ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Mc(this.data.getIterator())}getIteratorFrom(e){return new Mc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ye(this.comparator);return t.data=e,t}}class Mc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new Fe([])}unionWith(e){let t=new ye(_e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Fe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return En(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new vu("Invalid base64 string: "+i):i}}(e);return new ve(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const mm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vt(n){if(X(!!n),typeof n=="string"){let e=0;const t=mm.exec(n);if(X(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Qt(n){return typeof n=="string"?ve.fromBase64String(n):ve.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Co(n){const e=n.mapValue.fields.__previous_value__;return So(e)?Co(e):e}function mr(n){const e=Vt(n.mapValue.fields.__local_write_time__.timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,t,r,s,i,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}class gr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new gr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss={mapValue:{}};function Xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?So(n)?4:ym(n)?9007199254740991:_m(n)?10:11:U()}function Ze(n,e){if(n===e)return!0;const t=Xt(n);if(t!==Xt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return mr(n).isEqual(mr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Vt(s.timestampValue),c=Vt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Qt(s.bytesValue).isEqual(Qt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return oe(s.geoPointValue.latitude)===oe(i.geoPointValue.latitude)&&oe(s.geoPointValue.longitude)===oe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return oe(s.integerValue)===oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=oe(s.doubleValue),c=oe(i.doubleValue);return a===c?Ts(a)===Ts(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return En(n.arrayValue.values||[],e.arrayValue.values||[],Ze);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Lc(a)!==Lc(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Ze(a[u],c[u])))return!1;return!0}(n,e);default:return U()}}function _r(n,e){return(n.values||[]).find(t=>Ze(t,e))!==void 0}function wn(n,e){if(n===e)return 0;const t=Xt(n),r=Xt(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=oe(i.integerValue||i.doubleValue),u=oe(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Uc(n.timestampValue,e.timestampValue);case 4:return Uc(mr(n),mr(e));case 5:return Q(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Qt(i),u=Qt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const p=Q(c[d],u[d]);if(p!==0)return p}return Q(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=Q(oe(i.latitude),oe(a.latitude));return c!==0?c:Q(oe(i.longitude),oe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Fc(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,u,d,p;const y=i.fields||{},T=a.fields||{},R=(c=y.value)===null||c===void 0?void 0:c.arrayValue,C=(u=T.value)===null||u===void 0?void 0:u.arrayValue,D=Q(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0);return D!==0?D:Fc(R,C)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ss.mapValue&&a===ss.mapValue)return 0;if(i===ss.mapValue)return 1;if(a===ss.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let y=0;y<u.length&&y<p.length;++y){const T=Q(u[y],p[y]);if(T!==0)return T;const R=wn(c[u[y]],d[p[y]]);if(R!==0)return R}return Q(u.length,p.length)}(n.mapValue,e.mapValue);default:throw U()}}function Uc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=Vt(n),r=Vt(e),s=Q(t.seconds,r.seconds);return s!==0?s:Q(t.nanos,r.nanos)}function Fc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=wn(t[s],r[s]);if(i)return i}return Q(t.length,r.length)}function Tn(n){return no(n)}function no(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Vt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Qt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=no(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${no(t.fields[a])}`;return s+"}"}(n.mapValue):U()}function Bc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ro(n){return!!n&&"integerValue"in n}function ko(n){return!!n&&"arrayValue"in n}function $c(n){return!!n&&"nullValue"in n}function qc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function hs(n){return!!n&&"mapValue"in n}function _m(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ar(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return tn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ar(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ar(n.arrayValue.values[t]);return e}return Object.assign({},n)}function ym(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.value=e}static empty(){return new Oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!hs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ar(t)}setAll(e){let t=_e.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=ar(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());hs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];hs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){tn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Oe(ar(this.value))}}function Eu(n){const e=[];return tn(n.fields,(t,r)=>{const s=new _e([t]);if(hs(r)){const i=Eu(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Fe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Re(e,0,F.min(),F.min(),F.min(),Oe.empty(),0)}static newFoundDocument(e,t,r,s){return new Re(e,1,t,F.min(),r,s,0)}static newNoDocument(e,t){return new Re(e,2,t,F.min(),F.min(),Oe.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,F.min(),F.min(),Oe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t){this.position=e,this.inclusive=t}}function jc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),t.key):r=wn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function zc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ze(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,t="asc"){this.field=e,this.dir=t}}function vm(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{}class he extends wu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new wm(e,t,r):t==="array-contains"?new bm(e,r):t==="in"?new Am(e,r):t==="not-in"?new Rm(e,r):t==="array-contains-any"?new Pm(e,r):new he(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Tm(e,r):new Im(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(wn(t,this.value)):t!==null&&Xt(this.value)===Xt(t)&&this.matchesComparison(wn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ze extends wu{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ze(e,t)}matches(e){return Tu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Tu(n){return n.op==="and"}function Iu(n){return Em(n)&&Tu(n)}function Em(n){for(const e of n.filters)if(e instanceof ze)return!1;return!0}function so(n){if(n instanceof he)return n.field.canonicalString()+n.op.toString()+Tn(n.value);if(Iu(n))return n.filters.map(e=>so(e)).join(",");{const e=n.filters.map(t=>so(t)).join(",");return`${n.op}(${e})`}}function bu(n,e){return n instanceof he?function(r,s){return s instanceof he&&r.op===s.op&&r.field.isEqual(s.field)&&Ze(r.value,s.value)}(n,e):n instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&bu(a,s.filters[c]),!0):!1}(n,e):void U()}function Au(n){return n instanceof he?function(t){return`${t.field.canonicalString()} ${t.op} ${Tn(t.value)}`}(n):n instanceof ze?function(t){return t.op.toString()+" {"+t.getFilters().map(Au).join(" ,")+"}"}(n):"Filter"}class wm extends he{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class Tm extends he{constructor(e,t){super(e,"in",t),this.keys=Ru("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Im extends he{constructor(e,t){super(e,"not-in",t),this.keys=Ru("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ru(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>O.fromName(r.referenceValue))}class bm extends he{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ko(t)&&_r(t.arrayValue,this.value)}}class Am extends he{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_r(this.value.arrayValue,t)}}class Rm extends he{constructor(e,t){super(e,"not-in",t)}matches(e){if(_r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!_r(this.value.arrayValue,t)}}class Pm extends he{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ko(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>_r(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function Hc(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Sm(n,e,t,r,s,i,a)}function xo(n){const e=B(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>so(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Bs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Tn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Tn(r)).join(",")),e.ue=t}return e.ue}function Do(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!vm(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!bu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!zc(n.startAt,e.startAt)&&zc(n.endAt,e.endAt)}function io(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Cm(n,e,t,r,s,i,a,c){return new Sn(n,e,t,r,s,i,a,c)}function No(n){return new Sn(n)}function Wc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pu(n){return n.collectionGroup!==null}function cr(n){const e=B(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ye(_e.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new yr(i,r))}),t.has(_e.keyField().canonicalString())||e.ce.push(new yr(_e.keyField(),r))}return e.ce}function Qe(n){const e=B(n);return e.le||(e.le=km(e,cr(n))),e.le}function km(n,e){if(n.limitType==="F")return Hc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new yr(s.field,i)});const t=n.endAt?new Is(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Is(n.startAt.position,n.startAt.inclusive):null;return Hc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function oo(n,e){const t=n.filters.concat([e]);return new Sn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function bs(n,e,t){return new Sn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $s(n,e){return Do(Qe(n),Qe(e))&&n.limitType===e.limitType}function Su(n){return`${xo(Qe(n))}|lt:${n.limitType}`}function un(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Au(s)).join(", ")}]`),Bs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Tn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Tn(s)).join(",")),`Target(${r})`}(Qe(n))}; limitType=${n.limitType})`}function qs(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):O.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of cr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const d=jc(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,cr(r),s)||r.endAt&&!function(a,c,u){const d=jc(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,cr(r),s))}(n,e)}function xm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Cu(n){return(e,t)=>{let r=!1;for(const s of cr(n)){const i=Dm(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Dm(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?wn(u,d):U()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){tn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return yu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=new ne(O.comparator);function pt(){return Nm}const ku=new ne(O.comparator);function rr(...n){let e=ku;for(const t of n)e=e.insert(t.key,t);return e}function xu(n){let e=ku;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function zt(){return lr()}function Du(){return lr()}function lr(){return new Cn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Vm=new ne(O.comparator),Om=new ye(O.comparator);function H(...n){let e=Om;for(const t of n)e=e.add(t);return e}const Lm=new ye(Q);function Mm(){return Lm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ts(e)?"-0":e}}function Nu(n){return{integerValue:""+n}}function Um(n,e){return pm(e)?Nu(e):Vo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this._=void 0}}function Fm(n,e,t){return n instanceof As?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&So(i)&&(i=Co(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof vr?Ou(n,e):n instanceof Er?Lu(n,e):function(s,i){const a=Vu(s,i),c=Gc(a)+Gc(s.Pe);return ro(a)&&ro(s.Pe)?Nu(c):Vo(s.serializer,c)}(n,e)}function Bm(n,e,t){return n instanceof vr?Ou(n,e):n instanceof Er?Lu(n,e):t}function Vu(n,e){return n instanceof Rs?function(r){return ro(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class As extends js{}class vr extends js{constructor(e){super(),this.elements=e}}function Ou(n,e){const t=Mu(e);for(const r of n.elements)t.some(s=>Ze(s,r))||t.push(r);return{arrayValue:{values:t}}}class Er extends js{constructor(e){super(),this.elements=e}}function Lu(n,e){let t=Mu(e);for(const r of n.elements)t=t.filter(s=>!Ze(s,r));return{arrayValue:{values:t}}}class Rs extends js{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Gc(n){return oe(n.integerValue||n.doubleValue)}function Mu(n){return ko(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function $m(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof vr&&s instanceof vr||r instanceof Er&&s instanceof Er?En(r.elements,s.elements,Ze):r instanceof Rs&&s instanceof Rs?Ze(r.Pe,s.Pe):r instanceof As&&s instanceof As}(n.transform,e.transform)}class qm{constructor(e,t){this.version=e,this.transformResults=t}}class je{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new je}static exists(e){return new je(void 0,e)}static updateTime(e){return new je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ds(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class zs{}function Uu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Bu(n.key,je.none()):new Pr(n.key,n.data,je.none());{const t=n.data,r=Oe.empty();let s=new ye(_e.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Lt(n.key,r,new Fe(s.toArray()),je.none())}}function jm(n,e,t){n instanceof Pr?function(s,i,a){const c=s.value.clone(),u=Qc(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Lt?function(s,i,a){if(!ds(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Qc(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Fu(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ur(n,e,t,r){return n instanceof Pr?function(i,a,c,u){if(!ds(i.precondition,a))return c;const d=i.value.clone(),p=Xc(i.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Lt?function(i,a,c,u){if(!ds(i.precondition,a))return c;const d=Xc(i.fieldTransforms,u,a),p=a.data;return p.setAll(Fu(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(i,a,c){return ds(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function zm(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Vu(r.transform,s||null);i!=null&&(t===null&&(t=Oe.empty()),t.set(r.field,i))}return t||null}function Kc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&En(r,s,(i,a)=>$m(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Pr extends zs{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lt extends zs{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Fu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Qc(n,e,t){const r=new Map;X(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Bm(a,c,t[s]))}return r}function Xc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Fm(i,a,e))}return r}class Bu extends zs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hm extends zs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&jm(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ur(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ur(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Du();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Uu(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),H())}isEqual(e){return this.batchId===e.batchId&&En(this.mutations,e.mutations,(t,r)=>Kc(t,r))&&En(this.baseMutations,e.baseMutations,(t,r)=>Kc(t,r))}}class Oo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){X(e.mutations.length===r.length);let s=function(){return Vm}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Oo(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,G;function Qm(n){switch(n){default:return U();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function $u(n){if(n===void 0)return ft("GRPC error has no .code"),P.UNKNOWN;switch(n){case ce.OK:return P.OK;case ce.CANCELLED:return P.CANCELLED;case ce.UNKNOWN:return P.UNKNOWN;case ce.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ce.INTERNAL:return P.INTERNAL;case ce.UNAVAILABLE:return P.UNAVAILABLE;case ce.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ce.NOT_FOUND:return P.NOT_FOUND;case ce.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ce.ABORTED:return P.ABORTED;case ce.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ce.DATA_LOSS:return P.DATA_LOSS;default:return U()}}(G=ce||(ce={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=new Ht([4294967295,4294967295],0);function Yc(n){const e=Xm().encode(n),t=new uu;return t.update(e),new Uint8Array(t.digest())}function Jc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ht([t,r],0),new Ht([s,i],0)]}class Lo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new sr(`Invalid padding: ${t}`);if(r<0)throw new sr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new sr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new sr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ht.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Ht.fromNumber(r)));return s.compare(Ym)===1&&(s=new Ht([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Yc(e),[r,s]=Jc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Lo(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=Yc(e),[r,s]=Jc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class sr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Sr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Hs(F.min(),s,new ne(Q),pt(),H())}}class Sr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Sr(r,t,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class qu{constructor(e,t){this.targetId=e,this.me=t}}class ju{constructor(e,t,r=ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Zc{constructor(){this.fe=0,this.ge=tl(),this.pe=ve.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=H(),t=H(),r=H();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:U()}}),new Sr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=tl()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,X(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Jm{constructor(e){this.Le=e,this.Be=new Map,this.ke=pt(),this.qe=el(),this.Qe=new ne(Q)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:U()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(io(i))if(r===0){const a=new O(i.path);this.Ue(t,a,Re.newNoDocument(a,F.min()))}else X(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Qt(r).toUint8Array()}catch(u){if(u instanceof vu)return vn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Lo(a,s,i)}catch(u){return vn(u instanceof sr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&io(c.target)){const u=new O(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Re.newNoDocument(u,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=H();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Hs(e,t,this.Qe,this.ke,r);return this.ke=pt(),this.qe=el(),this.Qe=new ne(Q),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Zc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ye(Q),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Zc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function el(){return new ne(O.comparator)}function tl(){return new ne(O.comparator)}const Zm={asc:"ASCENDING",desc:"DESCENDING"},eg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tg={and:"AND",or:"OR"};class ng{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ao(n,e){return n.useProto3Json||Bs(e)?e:{value:e}}function Ps(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zu(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function rg(n,e){return Ps(n,e.toTimestamp())}function Xe(n){return X(!!n),F.fromTimestamp(function(t){const r=Vt(t);return new ae(r.seconds,r.nanos)}(n))}function Mo(n,e){return co(n,e).canonicalString()}function co(n,e){const t=function(s){return new ee(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Hu(n){const e=ee.fromString(n);return X(Xu(e)),e}function lo(n,e){return Mo(n.databaseId,e.path)}function Li(n,e){const t=Hu(e);if(t.get(1)!==n.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(Gu(t))}function Wu(n,e){return Mo(n.databaseId,e)}function sg(n){const e=Hu(n);return e.length===4?ee.emptyPath():Gu(e)}function uo(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Gu(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function nl(n,e,t){return{name:lo(n,e),fields:t.value.mapValue.fields}}function ig(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(X(p===void 0||typeof p=="string"),ve.fromBase64String(p||"")):(X(p===void 0||p instanceof Buffer||p instanceof Uint8Array),ve.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const p=d.code===void 0?P.UNKNOWN:$u(d.code);return new N(p,d.message||"")}(a);t=new ju(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Li(n,r.document.name),i=Xe(r.document.updateTime),a=r.document.createTime?Xe(r.document.createTime):F.min(),c=new Oe({mapValue:{fields:r.document.fields}}),u=Re.newFoundDocument(s,i,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new fs(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Li(n,r.document),i=r.readTime?Xe(r.readTime):F.min(),a=Re.newNoDocument(s,i),c=r.removedTargetIds||[];t=new fs([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Li(n,r.document),i=r.removedTargetIds||[];t=new fs([],i,s,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Km(s,i),c=r.targetId;t=new qu(c,a)}}return t}function og(n,e){let t;if(e instanceof Pr)t={update:nl(n,e.key,e.value)};else if(e instanceof Bu)t={delete:lo(n,e.key)};else if(e instanceof Lt)t={update:nl(n,e.key,e.data),updateMask:mg(e.fieldMask)};else{if(!(e instanceof Hm))return U();t={verify:lo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof As)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof vr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Er)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Rs)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw U()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:rg(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(n,e.precondition)),t}function ag(n,e){return n&&n.length>0?(X(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Xe(s.updateTime):Xe(i);return a.isEqual(F.min())&&(a=Xe(i)),new qm(a,s.transformResults||[])}(t,e))):[]}function cg(n,e){return{documents:[Wu(n,e.path)]}}function lg(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Wu(n,s);const i=function(d){if(d.length!==0)return Qu(ze.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(T){return{field:hn(T.field),direction:dg(T.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=ao(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function ug(n){let e=sg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){X(r===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(y){const T=Ku(y);return T instanceof ze&&Iu(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(T=>function(C){return new yr(dn(C.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(T))}(t.orderBy));let c=null;t.limit&&(c=function(y){let T;return T=typeof y=="object"?y.value:y,Bs(T)?null:T}(t.limit));let u=null;t.startAt&&(u=function(y){const T=!!y.before,R=y.values||[];return new Is(R,T)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const T=!y.before,R=y.values||[];return new Is(R,T)}(t.endAt)),Cm(e,s,a,i,c,"F",u,d)}function hg(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ku(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=dn(t.unaryFilter.field);return he.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=dn(t.unaryFilter.field);return he.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=dn(t.unaryFilter.field);return he.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=dn(t.unaryFilter.field);return he.create(a,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(t){return he.create(dn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ze.create(t.compositeFilter.filters.map(r=>Ku(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U()}}(t.compositeFilter.op))}(n):U()}function dg(n){return Zm[n]}function fg(n){return eg[n]}function pg(n){return tg[n]}function hn(n){return{fieldPath:n.canonicalString()}}function dn(n){return _e.fromServerFormat(n.fieldPath)}function Qu(n){return n instanceof he?function(t){if(t.op==="=="){if(qc(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NAN"}};if($c(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(qc(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NOT_NAN"}};if($c(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hn(t.field),op:fg(t.op),value:t.value}}}(n):n instanceof ze?function(t){const r=t.getFilters().map(s=>Qu(s));return r.length===1?r[0]:{compositeFilter:{op:pg(t.op),filters:r}}}(n):U()}function mg(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Xu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t,r,s,i=F.min(),a=F.min(),c=ve.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Pt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.ct=e}}function _g(n){const e=ug({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?bs(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.un=new vg}addToCollectionParentIndex(e,t){return this.un.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(Nt.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(Nt.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class vg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ye(ee.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ye(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new In(0)}static kn(){return new In(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(){this.changes=new Cn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ur(r.mutation,s,Fe.empty(),ae.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,t,r=H()){const s=zt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=rr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=zt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,H()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=pt();const a=lr(),c=function(){return lr()}();return t.forEach((u,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Lt)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),ur(p.mutation,d,p.mutation.getFieldMask(),ae.now())):a.set(d.key,Fe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var y;return c.set(d,new wg(p,(y=a.get(d))!==null&&y!==void 0?y:null))}),c))}recalculateAndSaveOverlays(e,t){const r=lr();let s=new ne((a,c)=>a-c),i=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=r.get(u)||Fe.empty();p=c.applyToLocalView(d,p),r.set(u,p);const y=(s.get(c.batchId)||H()).add(u);s=s.insert(c.batchId,y)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,p=u.value,y=Du();p.forEach(T=>{if(!i.has(T)){const R=Uu(t.get(T),r.get(T));R!==null&&y.set(T,R),i=i.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Pu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):S.resolve(zt());let c=-1,u=i;return a.next(d=>S.forEach(d,(p,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),i.get(p)?S.resolve():this.remoteDocumentCache.getEntry(e,p).next(T=>{u=u.insert(p,T)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,H())).next(p=>({batchId:c,changes:xu(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(r=>{let s=rr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=rr();return this.indexManager.getCollectionParents(e,i).next(c=>S.forEach(c,u=>{const d=function(y,T){return new Sn(T,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((y,T)=>{a=a.insert(y,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Re.newInvalidDocument(p)))});let c=rr();return a.forEach((u,d)=>{const p=i.get(u);p!==void 0&&ur(p.mutation,d,Fe.empty(),ae.now()),qs(t,d)&&(c=c.insert(u,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return S.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Xe(s.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:_g(s.bundledQuery),readTime:Xe(s.readTime)}}(t)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.overlays=new ne(O.comparator),this.Ir=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=zt();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const s=zt(),i=t.length+1,a=new O(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return S.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ne((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=zt(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=zt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=s)););return S.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Gm(t,r));let i=this.Ir.get(t);i===void 0&&(i=H(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(){this.sessionToken=ve.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.Tr=new ye(fe.Er),this.dr=new ye(fe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new fe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new fe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new O(new ee([])),r=new fe(t,e),s=new fe(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new O(new ee([])),r=new fe(t,e),s=new fe(t,e+1);let i=H();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new fe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class fe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return O.comparator(e.key,t.key)||Q(e.wr,t.wr)}static Ar(e,t){return Q(e.wr,t.wr)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ye(fe.Er)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Wm(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new fe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new fe(t,0),s=new fe(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ye(Q);return t.forEach(s=>{const i=new fe(s,0),a=new fe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),S.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;O.isDocumentKey(i)||(i=i.child(""));const a=new fe(new O(i),0);let c=new ye(Q);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.wr)),!0)},a),S.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){X(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return S.forEach(t.mutations,s=>{const i=new fe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new fe(t,0),s=this.br.firstAfterOrEqual(r);return S.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.Mr=e,this.docs=function(){return new ne(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let r=pt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Re.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=pt();const a=t.path,c=new O(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||um(lm(p),r)<=0||(s.has(p.key)||qs(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,t,r,s){U()}Or(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Sg(this)}getSize(e){return S.resolve(this.size)}}class Sg extends Eg{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.persistence=e,this.Nr=new Cn(t=>xo(t),Do),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Uo,this.targetCount=0,this.kr=In.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),S.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new In(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Kn(t),S.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Po(0),this.Kr=!1,this.Kr=!0,this.$r=new Ag,this.referenceDelegate=e(this),this.Ur=new Cg(this),this.indexManager=new yg,this.remoteDocumentCache=function(s){return new Pg(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new gg(t),this.Gr=new Ig(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new bg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Rg(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const s=new xg(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return S.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class xg extends dm{constructor(e){super(),this.currentSequenceNumber=e}}class Fo{constructor(e){this.persistence=e,this.Jr=new Uo,this.Yr=null}static Zr(e){return new Fo(e)}get Xr(){if(this.Yr)return this.Yr;throw U()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),S.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Xr,r=>{const s=O.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,F.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return S.or([()=>S.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=H(),s=H();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Bo(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Vf()?8:fm(Se())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Dg;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Yn()<=W.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",un(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),S.resolve()):(Yn()<=W.DEBUG&&V("QueryEngine","Query:",un(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Yn()<=W.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",un(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qe(t))):S.resolve())}Yi(e,t){if(Wc(t))return S.resolve(null);let r=Qe(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=bs(t,null,"F"),r=Qe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=H(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(t,c);return this.ns(t,d,a,u.readTime)?this.Yi(e,bs(t,null,"F")):this.rs(e,d,t,u)}))})))}Zi(e,t,r,s){return Wc(t)||s.isEqual(F.min())?S.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?S.resolve(null):(Yn()<=W.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),un(t)),this.rs(e,a,t,cm(s,-1)).next(c=>c))})}ts(e,t){let r=new ye(Cu(e));return t.forEach((s,i)=>{qs(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Yn()<=W.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",un(t)),this.Ji.getDocumentsMatchingQuery(e,t,Nt.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new ne(Q),this._s=new Cn(i=>xo(i),Do),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Tg(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Og(n,e,t,r){return new Vg(n,e,t,r)}async function Yu(n,e){const t=B(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=H();for(const d of s){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of i){c.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function Lg(n,e){const t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,d,p){const y=d.batch,T=y.keys();let R=S.resolve();return T.forEach(C=>{R=R.next(()=>p.getEntry(u,C)).next(D=>{const k=d.docVersions.get(C);X(k!==null),D.version.compareTo(k)<0&&(y.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),p.addEntry(D)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(u,y))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=H();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Ju(n){const e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Mg(n,e){const t=B(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((p,y)=>{const T=s.get(y);if(!T)return;c.push(t.Ur.removeMatchingKeys(i,p.removedDocuments,y).next(()=>t.Ur.addMatchingKeys(i,p.addedDocuments,y)));let R=T.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?R=R.withResumeToken(ve.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),s=s.insert(y,R),function(D,k,$){return D.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(T,R,p)&&c.push(t.Ur.updateTargetData(i,R))});let u=pt(),d=H();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),c.push(Ug(i,a,e.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual(F.min())){const p=t.Ur.getLastRemoteSnapshotVersion(i).next(y=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(p)}return S.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.os=s,i))}function Ug(n,e,t){let r=H(),s=H();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=pt();return t.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(F.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Ps:a,Is:s}})}function Fg(n,e){const t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Bg(n,e){const t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new Pt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function ho(n,e,t){const r=B(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Rr(a))throw a;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function rl(n,e,t){const r=B(n);let s=F.min(),i=H();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const y=B(u),T=y._s.get(p);return T!==void 0?S.resolve(y.os.get(T)):y.Ur.getTargetData(d,p)}(r,a,Qe(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:F.min(),t?i:H())).next(c=>($g(r,xm(e),c),{documents:c,Ts:i})))}function $g(n,e,t){let r=n.us.get(e)||F.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class sl{constructor(){this.activeTargetIds=Mm()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qg{constructor(){this.so=new sl,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new sl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is=null;function Mi(){return is===null?is=function(){return 268435456+Math.round(2147483648*Math.random())}():is++,"0x"+is.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="WebChannelConnection";class Wg extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=Mi(),u=this.xo(t,r.toUriEncodedString());V("RestConnection",`Sending RPC '${t}' ${c}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,a),this.No(t,u,d,s).then(p=>(V("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw vn("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=zg[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=Mi();return new Promise((a,c)=>{const u=new hu;u.setWithCredentials(!0),u.listenOnce(du.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case us.NO_ERROR:const p=u.getResponseJson();V(be,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),a(p);break;case us.TIMEOUT:V(be,`RPC '${e}' ${i} timed out`),c(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case us.HTTP_ERROR:const y=u.getStatus();if(V(be,`RPC '${e}' ${i} failed with status:`,y,"response text:",u.getResponseText()),y>0){let T=u.getResponseJson();Array.isArray(T)&&(T=T[0]);const R=T==null?void 0:T.error;if(R&&R.status&&R.message){const C=function(k){const $=k.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf($)>=0?$:P.UNKNOWN}(R.status);c(new N(C,R.message))}else c(new N(P.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new N(P.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{V(be,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);V(be,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",d,r,15)})}Bo(e,t,r){const s=Mi(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=mu(),c=pu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=i.join("");V(be,`Creating RPC '${e}' stream ${s}: ${p}`,u);const y=a.createWebChannel(p,u);let T=!1,R=!1;const C=new Hg({Io:k=>{R?V(be,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(T||(V(be,`Opening RPC '${e}' stream ${s} transport.`),y.open(),T=!0),V(be,`RPC '${e}' stream ${s} sending:`,k),y.send(k))},To:()=>y.close()}),D=(k,$,q)=>{k.listen($,M=>{try{q(M)}catch(z){setTimeout(()=>{throw z},0)}})};return D(y,nr.EventType.OPEN,()=>{R||(V(be,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),D(y,nr.EventType.CLOSE,()=>{R||(R=!0,V(be,`RPC '${e}' stream ${s} transport closed`),C.So())}),D(y,nr.EventType.ERROR,k=>{R||(R=!0,vn(be,`RPC '${e}' stream ${s} transport errored:`,k),C.So(new N(P.UNAVAILABLE,"The operation could not be completed")))}),D(y,nr.EventType.MESSAGE,k=>{var $;if(!R){const q=k.data[0];X(!!q);const M=q,z=M.error||(($=M[0])===null||$===void 0?void 0:$.error);if(z){V(be,`RPC '${e}' stream ${s} received error:`,z);const de=z.status;let Y=function(g){const v=ce[g];if(v!==void 0)return $u(v)}(de),E=z.message;Y===void 0&&(Y=P.INTERNAL,E="Unknown error status: "+de+" with message "+z.message),R=!0,C.So(new N(Y,E)),y.close()}else V(be,`RPC '${e}' stream ${s} received:`,q),C.bo(q)}}),D(c,fu.STAT_EVENT,k=>{k.stat===to.PROXY?V(be,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===to.NOPROXY&&V(be,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Ui(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(n){return new ng(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t,r,s,i,a,c,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Zu(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(ft(t.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new N(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Gg extends eh{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=ig(this.serializer,e),r=function(i){if(!("targetChange"in i))return F.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Xe(a.readTime):F.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=uo(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=io(u)?{documents:cg(i,u)}:{query:lg(i,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=zu(i,a.resumeToken);const d=ao(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){c.readTime=Ps(i,a.snapshotVersion.toTimestamp());const d=ao(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=hg(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=uo(this.serializer),t.removeTarget=e,this.a_(t)}}class Kg extends eh{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return X(!!e.streamToken),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=ag(e.writeResults,e.commitTime),r=Xe(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=uo(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>og(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,co(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(P.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,co(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(P.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Xg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ft(t),this.D_=!1):V("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{nn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=B(u);d.L_.add(4),await Cr(d),d.q_.set("Unknown"),d.L_.delete(4),await Gs(d)}(this))})}),this.q_=new Xg(r,s)}}async function Gs(n){if(nn(n))for(const e of n.B_)await e(!0)}async function Cr(n){for(const e of n.B_)await e(!1)}function th(n,e){const t=B(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),zo(t)?jo(t):kn(t).r_()&&qo(t,e))}function $o(n,e){const t=B(n),r=kn(t);t.N_.delete(e),r.r_()&&nh(t,e),t.N_.size===0&&(r.r_()?r.o_():nn(t)&&t.q_.set("Unknown"))}function qo(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}kn(n).A_(e)}function nh(n,e){n.Q_.xe(e),kn(n).R_(e)}function jo(n){n.Q_=new Jm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),kn(n).start(),n.q_.v_()}function zo(n){return nn(n)&&!kn(n).n_()&&n.N_.size>0}function nn(n){return B(n).L_.size===0}function rh(n){n.Q_=void 0}async function Jg(n){n.q_.set("Online")}async function Zg(n){n.N_.forEach((e,t)=>{qo(n,e)})}async function e_(n,e){rh(n),zo(n)?(n.q_.M_(e),jo(n)):n.q_.set("Unknown")}async function t_(n,e,t){if(n.q_.set("Online"),e instanceof ju&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ss(n,r)}else if(e instanceof fs?n.Q_.Ke(e):e instanceof qu?n.Q_.He(e):n.Q_.We(e),!t.isEqual(F.min()))try{const r=await Ju(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(d);p&&i.N_.set(d,p.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(ve.EMPTY_BYTE_STRING,p.snapshotVersion)),nh(i,u);const y=new Pt(p.target,u,d,p.sequenceNumber);qo(i,y)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Ss(n,r)}}async function Ss(n,e,t){if(!Rr(e))throw e;n.L_.add(1),await Cr(n),n.q_.set("Offline"),t||(t=()=>Ju(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Gs(n)})}function sh(n,e){return e().catch(t=>Ss(n,t,e))}async function Ks(n){const e=B(n),t=Ot(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;n_(e);)try{const s=await Fg(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,r_(e,s)}catch(s){await Ss(e,s)}ih(e)&&oh(e)}function n_(n){return nn(n)&&n.O_.length<10}function r_(n,e){n.O_.push(e);const t=Ot(n);t.r_()&&t.V_&&t.m_(e.mutations)}function ih(n){return nn(n)&&!Ot(n).n_()&&n.O_.length>0}function oh(n){Ot(n).start()}async function s_(n){Ot(n).p_()}async function i_(n){const e=Ot(n);for(const t of n.O_)e.m_(t.mutations)}async function o_(n,e,t){const r=n.O_.shift(),s=Oo.from(r,e,t);await sh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ks(n)}async function a_(n,e){e&&Ot(n).V_&&await async function(r,s){if(function(a){return Qm(a)&&a!==P.ABORTED}(s.code)){const i=r.O_.shift();Ot(r).s_(),await sh(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ks(r)}}(n,e),ih(n)&&oh(n)}async function ol(n,e){const t=B(n);t.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=nn(t);t.L_.add(3),await Cr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Gs(t)}async function c_(n,e){const t=B(n);e?(t.L_.delete(2),await Gs(t)):e||(t.L_.add(2),await Cr(t),t.q_.set("Unknown"))}function kn(n){return n.K_||(n.K_=function(t,r,s){const i=B(t);return i.w_(),new Gg(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Jg.bind(null,n),Ro:Zg.bind(null,n),mo:e_.bind(null,n),d_:t_.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),zo(n)?jo(n):n.q_.set("Unknown")):(await n.K_.stop(),rh(n))})),n.K_}function Ot(n){return n.U_||(n.U_=function(t,r,s){const i=B(t);return i.w_(),new Kg(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:s_.bind(null,n),mo:a_.bind(null,n),f_:i_.bind(null,n),g_:o_.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Ks(n)):(await n.U_.stop(),n.O_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Ho(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wo(n,e){if(ft("AsyncQueue",`${e}: ${n}`),Rr(n))return new N(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=rr(),this.sortedSet=new ne(this.comparator)}static emptySet(e){return new mn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new mn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.W_=new ne(O.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):U():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class bn{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new bn(e,t,mn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$s(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class u_{constructor(){this.queries=cl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=B(t),i=s.queries;s.queries=cl(),i.forEach((a,c)=>{for(const u of c.j_)u.onError(r)})})(this,new N(P.ABORTED,"Firestore shutting down"))}}function cl(){return new Cn(n=>Su(n),$s)}async function ah(n,e){const t=B(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new l_,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Wo(a,`Initialization of query '${un(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Go(t)}async function ch(n,e){const t=B(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function h_(n,e){const t=B(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&Go(t)}function d_(n,e,t){const r=B(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Go(n){n.Y_.forEach(e=>{e.next()})}var fo,ll;(ll=fo||(fo={})).ea="default",ll.Cache="cache";class lh{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new bn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=bn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==fo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.key=e}}class hh{constructor(e){this.key=e}}class f_{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=H(),this.mutatedKeys=H(),this.Aa=Cu(e),this.Ra=new mn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new al,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,y)=>{const T=s.get(p),R=qs(this.query,y)?y:null,C=!!T&&this.mutatedKeys.has(T.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let k=!1;T&&R?T.data.isEqual(R.data)?C!==D&&(r.track({type:3,doc:R}),k=!0):this.ga(T,R)||(r.track({type:2,doc:R}),k=!0,(u&&this.Aa(R,u)>0||d&&this.Aa(R,d)<0)&&(c=!0)):!T&&R?(r.track({type:0,doc:R}),k=!0):T&&!R&&(r.track({type:1,doc:T}),k=!0,(u||d)&&(c=!0)),k&&(R?(a=a.add(R),i=D?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,y)=>function(R,C){const D=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return D(R)-D(C)}(p.type,y.type)||this.Aa(p.doc,y.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new bn(this.query,e.Ra,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new al,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=H(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new hh(r))}),this.da.forEach(r=>{e.has(r)||t.push(new uh(r))}),t}ba(e){this.Ta=e.Ts,this.da=H();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return bn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class p_{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class m_{constructor(e){this.key=e,this.va=!1}}class g_{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Cn(c=>Su(c),$s),this.Ma=new Map,this.xa=new Set,this.Oa=new ne(O.comparator),this.Na=new Map,this.La=new Uo,this.Ba={},this.ka=new Map,this.qa=In.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function __(n,e,t=!0){const r=_h(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await dh(r,e,t,!0),s}async function y_(n,e){const t=_h(n);await dh(t,e,!0,!1)}async function dh(n,e,t,r){const s=await Bg(n.localStore,Qe(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await v_(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&th(n.remoteStore,s),c}async function v_(n,e,t,r,s){n.Ka=(y,T,R)=>async function(D,k,$,q){let M=k.view.ma($);M.ns&&(M=await rl(D.localStore,k.query,!1).then(({documents:E})=>k.view.ma(E,M)));const z=q&&q.targetChanges.get(k.targetId),de=q&&q.targetMismatches.get(k.targetId)!=null,Y=k.view.applyChanges(M,D.isPrimaryClient,z,de);return hl(D,k.targetId,Y.wa),Y.snapshot}(n,y,T,R);const i=await rl(n.localStore,e,!0),a=new f_(e,i.Ts),c=a.ma(i.documents),u=Sr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);hl(n,t,d.wa);const p=new p_(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function E_(n,e,t){const r=B(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!$s(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ho(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&$o(r.remoteStore,s.targetId),po(r,s.targetId)}).catch(Ar)):(po(r,s.targetId),await ho(r.localStore,s.targetId,!0))}async function w_(n,e){const t=B(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),$o(t.remoteStore,r.targetId))}async function T_(n,e,t){const r=C_(n);try{const s=await function(a,c){const u=B(a),d=ae.now(),p=c.reduce((R,C)=>R.add(C.key),H());let y,T;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let C=pt(),D=H();return u.cs.getEntries(R,p).next(k=>{C=k,C.forEach(($,q)=>{q.isValidDocument()||(D=D.add($))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,C)).next(k=>{y=k;const $=[];for(const q of c){const M=zm(q,y.get(q.key).overlayedDocument);M!=null&&$.push(new Lt(q.key,M,Eu(M.value.mapValue),je.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,$,c)}).next(k=>{T=k;const $=k.applyToLocalDocumentSet(y,D);return u.documentOverlayCache.saveOverlays(R,k.batchId,$)})}).then(()=>({batchId:T.batchId,changes:xu(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new ne(Q)),d=d.insert(c,u),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,t),await kr(r,s.changes),await Ks(r.remoteStore)}catch(s){const i=Wo(s,"Failed to persist write");t.reject(i)}}async function fh(n,e){const t=B(n);try{const r=await Mg(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?X(a.va):s.removedDocuments.size>0&&(X(a.va),a.va=!1))}),await kr(t,r,e)}catch(r){await Ar(r)}}function ul(n,e,t){const r=B(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=B(a);u.onlineState=c;let d=!1;u.queries.forEach((p,y)=>{for(const T of y.j_)T.Z_(c)&&(d=!0)}),d&&Go(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function I_(n,e,t){const r=B(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new ne(O.comparator);a=a.insert(i,Re.newNoDocument(i,F.min()));const c=H().add(i),u=new Hs(F.min(),new Map,new ne(Q),a,c);await fh(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Ko(r)}else await ho(r.localStore,e,!1).then(()=>po(r,e,t)).catch(Ar)}async function b_(n,e){const t=B(n),r=e.batch.batchId;try{const s=await Lg(t.localStore,e);mh(t,r,null),ph(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await kr(t,s)}catch(s){await Ar(s)}}async function A_(n,e,t){const r=B(n);try{const s=await function(a,c){const u=B(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,c).next(y=>(X(y!==null),p=y.keys(),u.mutationQueue.removeMutationBatch(d,y))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);mh(r,e,t),ph(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await kr(r,s)}catch(s){await Ar(s)}}function ph(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function mh(n,e,t){const r=B(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function po(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||gh(n,r)})}function gh(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&($o(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Ko(n))}function hl(n,e,t){for(const r of t)r instanceof uh?(n.La.addReference(r.key,e),R_(n,r)):r instanceof hh?(V("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||gh(n,r.key)):U()}function R_(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(V("SyncEngine","New document in limbo: "+t),n.xa.add(r),Ko(n))}function Ko(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new O(ee.fromString(e)),r=n.qa.next();n.Na.set(r,new m_(t)),n.Oa=n.Oa.insert(t,r),th(n.remoteStore,new Pt(Qe(No(t.path)),r,"TargetPurposeLimboResolution",Po.oe))}}async function kr(n,e,t){const r=B(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{a.push(r.Ka(u,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){s.push(d);const y=Bo.Wi(u.targetId,d);i.push(y)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(u,d){const p=B(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>S.forEach(d,T=>S.forEach(T.$i,R=>p.persistence.referenceDelegate.addReference(y,T.targetId,R)).next(()=>S.forEach(T.Ui,R=>p.persistence.referenceDelegate.removeReference(y,T.targetId,R)))))}catch(y){if(!Rr(y))throw y;V("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const T=y.targetId;if(!y.fromCache){const R=p.os.get(T),C=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(C);p.os=p.os.insert(T,D)}}}(r.localStore,i))}async function P_(n,e){const t=B(n);if(!t.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await Yu(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(u=>{u.reject(new N(P.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await kr(t,r.hs)}}function S_(n,e){const t=B(n),r=t.Na.get(e);if(r&&r.va)return H().add(r.key);{let s=H();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function _h(n){const e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=fh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=S_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=I_.bind(null,e),e.Ca.d_=h_.bind(null,e.eventManager),e.Ca.$a=d_.bind(null,e.eventManager),e}function C_(n){const e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=b_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=A_.bind(null,e),e}class Cs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ws(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Og(this.persistence,new Ng,e.initialUser,this.serializer)}Ga(e){return new kg(Fo.Zr,this.serializer)}Wa(e){return new qg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cs.provider={build:()=>new Cs};class mo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ul(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=P_.bind(null,this.syncEngine),await c_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new u_}()}createDatastore(e){const t=Ws(e.databaseInfo.databaseId),r=function(i){return new Wg(i)}(e.databaseInfo);return function(i,a,c,u){return new Qg(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new Yg(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>ul(this.syncEngine,t,0),function(){return il.D()?new il:new jg}())}createSyncEngine(e,t){return function(s,i,a,c,u,d,p){const y=new g_(s,i,a,c,u,d);return p&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=B(s);V("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Cr(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}mo.provider={build:()=>new mo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ft("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ae.UNAUTHENTICATED,this.clientId=_u.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{V("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Wo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fi(n,e){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Yu(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function dl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await x_(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>ol(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ol(e.remoteStore,s)),n._onlineComponents=e}async function x_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;vn("Error using user provided cache. Falling back to memory cache: "+t),await Fi(n,new Cs)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Fi(n,new Cs);return n._offlineComponents}async function vh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await dl(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await dl(n,new mo))),n._onlineComponents}function D_(n){return vh(n).then(e=>e.syncEngine)}async function Eh(n){const e=await vh(n),t=e.eventManager;return t.onListen=__.bind(null,e.syncEngine),t.onUnlisten=E_.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=y_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=w_.bind(null,e.syncEngine),t}function N_(n,e,t={}){const r=new lt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const p=new yh({next:T=>{p.Za(),a.enqueueAndForget(()=>ch(i,y));const R=T.docs.has(c);!R&&T.fromCache?d.reject(new N(P.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&T.fromCache&&u&&u.source==="server"?d.reject(new N(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),y=new lh(No(c.path),p,{includeMetadataChanges:!0,_a:!0});return ah(i,y)}(await Eh(n),n.asyncQueue,e,t,r)),r.promise}function V_(n,e,t={}){const r=new lt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const p=new yh({next:T=>{p.Za(),a.enqueueAndForget(()=>ch(i,y)),T.fromCache&&u.source==="server"?d.reject(new N(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),y=new lh(c,p,{includeMetadataChanges:!0,_a:!0});return ah(i,y)}(await Eh(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n,e,t){if(!t)throw new N(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function O_(n,e,t,r){if(e===!0&&r===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function pl(n){if(!O.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ml(n){if(O.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Qs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U()}function et(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qs(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function L_(n,e){if(e<=0)throw new N(P.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}O_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xs{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gl(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Zp;switch(r.type){case"firstParty":return new rm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=fl.get(t);r&&(V("ComponentProvider","Removing Datastore"),fl.delete(t),r.terminate())}(this),Promise.resolve()}}function M_(n,e,t,r={}){var s;const i=(n=et(n,Xs))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&vn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Ae.MOCK_USER;else{c=su(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ae(d)}n._authCredentials=new em(new gu(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mt(this.firestore,e,this._query)}}class De{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new De(this.firestore,e,this._key)}}class kt extends Mt{constructor(e,t,r){super(e,t,No(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new O(e))}withConverter(e){return new kt(this.firestore,e,this._path)}}function ut(n,e,...t){if(n=ie(n),Th("collection","path",e),n instanceof Xs){const r=ee.fromString(e,...t);return ml(r),new kt(n,null,r)}{if(!(n instanceof De||n instanceof kt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return ml(r),new kt(n.firestore,null,r)}}function Yt(n,e,...t){if(n=ie(n),arguments.length===1&&(e=_u.newId()),Th("doc","path",e),n instanceof Xs){const r=ee.fromString(e,...t);return pl(r),new De(n,null,new O(r))}{if(!(n instanceof De||n instanceof kt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return pl(r),new De(n.firestore,n instanceof kt?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Zu(this,"async_queue_retry"),this.Vu=()=>{const r=Ui();r&&V("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Ui();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ui();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new lt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Rr(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw ft("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Ho.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&U()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class xn extends Xs{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new _l,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _l(e),this._firestoreClient=void 0,await e}}}function U_(n,e){const t=typeof n=="object"?n:Ao(),r=typeof n=="string"?n:"(default)",s=Fs(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=tu("firestore");i&&M_(s,...i)}return s}function Qo(n){if(n._terminated)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||F_(n),n._firestoreClient}function F_(n){var e,t,r;const s=n._freezeSettings(),i=function(c,u,d,p){return new gm(c,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,wh(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new k_(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(ve.fromBase64String(e))}catch(t){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new An(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=/^__.*__$/;class $_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Lt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pr(e,this.data,t,this.fieldTransforms)}}class Ih{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Lt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function bh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Zo{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Zo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ks(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(bh(this.Cu)&&B_.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class q_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ws(e)}Qu(e,t,r,s=!1){return new Zo({Cu:e,methodName:t,qu:r,path:_e.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Js(n){const e=n._freezeSettings(),t=Ws(n._databaseId);return new q_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ah(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);ea("Data must be an object, but it was:",a,r);const c=Rh(r,a);let u,d;if(i.merge)u=new Fe(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const y of i.mergeFields){const T=go(e,y,t);if(!a.contains(T))throw new N(P.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Sh(p,T)||p.push(T)}u=new Fe(p),d=a.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,d=a.fieldTransforms;return new $_(new Oe(c),u,d)}class Zs extends Xo{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zs}}function j_(n,e,t,r){const s=n.Qu(1,e,t);ea("Data must be an object, but it was:",s,r);const i=[],a=Oe.empty();tn(r,(u,d)=>{const p=ta(e,u,t);d=ie(d);const y=s.Nu(p);if(d instanceof Zs)i.push(p);else{const T=xr(d,y);T!=null&&(i.push(p),a.set(p,T))}});const c=new Fe(i);return new Ih(a,c,s.fieldTransforms)}function z_(n,e,t,r,s,i){const a=n.Qu(1,e,t),c=[go(e,r,t)],u=[s];if(i.length%2!=0)throw new N(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<i.length;T+=2)c.push(go(e,i[T])),u.push(i[T+1]);const d=[],p=Oe.empty();for(let T=c.length-1;T>=0;--T)if(!Sh(d,c[T])){const R=c[T];let C=u[T];C=ie(C);const D=a.Nu(R);if(C instanceof Zs)d.push(R);else{const k=xr(C,D);k!=null&&(d.push(R),p.set(R,k))}}const y=new Fe(d);return new Ih(p,y,a.fieldTransforms)}function H_(n,e,t,r=!1){return xr(t,n.Qu(r?4:3,e))}function xr(n,e){if(Ph(n=ie(n)))return ea("Unsupported field value:",e,n),Rh(n,e);if(n instanceof Xo)return function(r,s){if(!bh(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=xr(c,s.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Um(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ae.fromDate(r);return{timestampValue:Ps(s.serializer,i)}}if(r instanceof ae){const i=new ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ps(s.serializer,i)}}if(r instanceof Yo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof An)return{bytesValue:zu(s.serializer,r._byteString)};if(r instanceof De){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Jo)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return Vo(c.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Qs(r)}`)}(n,e)}function Rh(n,e){const t={};return yu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tn(n,(r,s)=>{const i=xr(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Ph(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof Yo||n instanceof An||n instanceof De||n instanceof Xo||n instanceof Jo)}function ea(n,e,t){if(!Ph(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Qs(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function go(n,e,t){if((e=ie(e))instanceof Ys)return e._internalPath;if(typeof e=="string")return ta(n,e);throw ks("Field path arguments must be of type string or ",n,!1,void 0,t)}const W_=new RegExp("[~\\*/\\[\\]]");function ta(n,e,t){if(e.search(W_)>=0)throw ks(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ys(...e.split("."))._internalPath}catch{throw ks(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ks(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new N(P.INVALID_ARGUMENT,c+n+u)}function Sh(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new G_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ei("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class G_ extends Ch{data(){return super.data()}}function ei(n,e){return typeof e=="string"?ta(n,e):e instanceof Ys?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class na{}class ra extends na{}function We(n,e,...t){let r=[];e instanceof na&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof sa).length,c=i.filter(u=>u instanceof ti).length;if(a>1||a>0&&c>0)throw new N(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ti extends ra{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ti(e,t,r)}_apply(e){const t=this._parse(e);return kh(e._query,t),new Mt(e.firestore,e.converter,oo(e._query,t))}_parse(e){const t=Js(e.firestore);return function(i,a,c,u,d,p,y){let T;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new N(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){El(y,p);const R=[];for(const C of y)R.push(vl(u,i,C));T={arrayValue:{values:R}}}else T=vl(u,i,y)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||El(y,p),T=H_(c,a,y,p==="in"||p==="not-in");return he.create(d,p,T)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Me(n,e,t){const r=e,s=ei("where",n);return ti._create(s,r,t)}class sa extends na{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sa(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ze.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)kh(a,u),a=oo(a,u)}(e._query,t),new Mt(e.firestore,e.converter,oo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ia extends ra{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ia(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new yr(i,a)}(e._query,this._field,this._direction);return new Mt(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Sn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function yl(n,e="asc"){const t=e,r=ei("orderBy",n);return ia._create(r,t)}class oa extends ra{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new oa(e,t,r)}_apply(e){return new Mt(e.firestore,e.converter,bs(e._query,this._limit,this._limitType))}}function Bi(n){return L_("limit",n),oa._create("limit",n,"F")}function vl(n,e,t){if(typeof(t=ie(t))=="string"){if(t==="")throw new N(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pu(e)&&t.indexOf("/")!==-1)throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ee.fromString(t));if(!O.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bc(n,new O(r))}if(t instanceof De)return Bc(n,t._key);throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qs(t)}.`)}function El(n,e){if(!Array.isArray(n)||n.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function kh(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Q_{convertValue(e,t="none"){switch(Xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Qt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return tn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>oe(a.doubleValue));return new Jo(i)}convertGeoPoint(e){return new Yo(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Co(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(mr(e));default:return null}}convertTimestamp(e){const t=Vt(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);X(Xu(r));const s=new gr(r.get(1),r.get(3)),i=new O(r.popFirst(5));return s.isEqual(t)||ft(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dh extends Ch{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ps(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ei("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ps extends Dh{data(e={}){return super.data(e)}}class X_{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ir(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ps(this._firestore,this._userDataWriter,r.key,r,new ir(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new ps(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ir(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new ps(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ir(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:Y_(c.type),doc:u,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Y_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n){n=et(n,De);const e=et(n.firestore,xn);return N_(Qo(e),n._key).then(t=>ey(e,n,t))}class Nh extends Q_{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,t)}}function Ue(n){n=et(n,Mt);const e=et(n.firestore,xn),t=Qo(e),r=new Nh(e);return K_(n._query),V_(t,n._query).then(s=>new X_(e,r,n,s))}function J_(n,e,t){n=et(n,De);const r=et(n.firestore,xn),s=xh(n.converter,e);return ca(r,[Ah(Js(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,je.none())])}function aa(n,e,t,...r){n=et(n,De);const s=et(n.firestore,xn),i=Js(s);let a;return a=typeof(e=ie(e))=="string"||e instanceof Ys?z_(i,"updateDoc",n._key,e,t,r):j_(i,"updateDoc",n._key,e),ca(s,[a.toMutation(n._key,je.exists(!0))])}function Z_(n,e){const t=et(n.firestore,xn),r=Yt(n),s=xh(n.converter,e);return ca(t,[Ah(Js(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,je.exists(!1))]).then(()=>r)}function ca(n,e){return function(r,s){const i=new lt;return r.asyncQueue.enqueueAndForget(async()=>T_(await D_(r),s,i)),i.promise}(Qo(n),e)}function ey(n,e,t){const r=t.docs.get(e._key),s=new Nh(n);return new Dh(n,s,e._key,r,new ir(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Pn=s})(en),Gt(new Dt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new xn(new tm(r.getProvider("auth-internal")),new im(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gr(d.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ke(Oc,"4.7.3",e),Ke(Oc,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="firebasestorage.googleapis.com",Oh="storageBucket",ty=2*60*1e3,ny=10*60*1e3,ry=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re extends tt{constructor(e,t,r=0){super($i(e),`Firebase Storage: ${t} (${$i(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,re.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $i(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var te;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(te||(te={}));function $i(n){return"storage/"+n}function la(){const n="An unknown error occurred, please check the error payload for server response.";return new re(te.UNKNOWN,n)}function sy(n){return new re(te.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function iy(n){return new re(te.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function oy(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new re(te.UNAUTHENTICATED,n)}function ay(){return new re(te.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function cy(n){return new re(te.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Lh(){return new re(te.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Mh(){return new re(te.CANCELED,"User canceled the upload/download.")}function ly(n){return new re(te.INVALID_URL,"Invalid URL '"+n+"'.")}function uy(n){return new re(te.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function hy(){return new re(te.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Oh+"' property when initializing the app?")}function Uh(){return new re(te.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function dy(){return new re(te.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function fy(){return new re(te.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function py(n){return new re(te.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _o(n){return new re(te.INVALID_ARGUMENT,n)}function Fh(){return new re(te.APP_DELETED,"The Firebase app was deleted.")}function my(n){return new re(te.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function hr(n,e){return new re(te.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Jn(n){throw new re(te.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Be.makeFromUrl(e,t)}catch{return new Be(e,"")}if(r.path==="")return r;throw uy(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function d(z){z.path_=decodeURIComponent(z.path)}const p="v[A-Za-z0-9_]+",y=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",R=new RegExp(`^https?://${y}/${p}/b/${s}/o${T}`,"i"),C={bucket:1,path:3},D=t===Vh?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",$=new RegExp(`^https?://${D}/${s}/${k}`,"i"),M=[{regex:c,indices:u,postModify:i},{regex:R,indices:C,postModify:d},{regex:$,indices:{bucket:1,path:2},postModify:d}];for(let z=0;z<M.length;z++){const de=M[z],Y=de.regex.exec(e);if(Y){const E=Y[de.indices.bucket];let m=Y[de.indices.path];m||(m=""),r=new Be(E,m),de.postModify(r);break}}if(r==null)throw ly(e);return r}}class gy{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(n,e,t){let r=1,s=null,i=null,a=!1,c=0;function u(){return c===2}let d=!1;function p(...k){d||(d=!0,e.apply(null,k))}function y(k){s=setTimeout(()=>{s=null,n(R,u())},k)}function T(){i&&clearTimeout(i)}function R(k,...$){if(d){T();return}if(k){T(),p.call(null,k,...$);return}if(u()||a){T(),p.call(null,k,...$);return}r<64&&(r*=2);let M;c===1?(c=2,M=0):M=(r+Math.random())*1e3,y(M)}let C=!1;function D(k){C||(C=!0,T(),!d&&(s!==null?(k||(c=2),clearTimeout(s),y(0)):k||(c=1)))}return y(0),i=setTimeout(()=>{a=!0,D(!0)},t),D}function yy(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(n){return n!==void 0}function Ey(n){return typeof n=="function"}function wy(n){return typeof n=="object"&&!Array.isArray(n)}function ni(n){return typeof n=="string"||n instanceof String}function Tl(n){return ua()&&n instanceof Blob}function ua(){return typeof Blob<"u"}function Il(n,e,t,r){if(r<e)throw _o(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw _o(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Bh(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Wt;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Wt||(Wt={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t,r,s,i,a,c,u,d,p,y,T=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=y,this.retry=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,C)=>{this.resolve_=R,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new os(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const u=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===Wt.NO_ERROR,u=i.getStatus();if(!c||$h(u,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===Wt.ABORT;r(!1,new os(!1,null,p));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new os(d,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());vy(u)?i(u):i()}catch(u){a(u)}else if(c!==null){const u=la();u.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,u)):a(u)}else if(s.canceled){const u=this.appDelete_?Fh():Mh();a(u)}else{const u=Lh();a(u)}};this.canceled_?t(!1,new os(!1,null,!0)):this.backoffId_=_y(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&yy(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class os{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Iy(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function by(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ay(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Ry(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Py(n,e,t,r,s,i,a=!0){const c=Bh(n.urlParams),u=n.url+c,d=Object.assign({},n.headers);return Ay(d,e),Iy(d,t),by(d,i),Ry(d,r),new Ty(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Cy(...n){const e=Sy();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(ua())return new Blob(n);throw new re(te.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ky(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n){if(typeof atob>"u")throw py("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qi{constructor(e,t){this.data=e,this.contentType=t||null}}function Dy(n,e){switch(n){case Ge.RAW:return new qi(qh(e));case Ge.BASE64:case Ge.BASE64URL:return new qi(jh(n,e));case Ge.DATA_URL:return new qi(Vy(e),Oy(e))}throw la()}function qh(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Ny(n){let e;try{e=decodeURIComponent(n)}catch{throw hr(Ge.DATA_URL,"Malformed data URL.")}return qh(e)}function jh(n,e){switch(n){case Ge.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw hr(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Ge.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw hr(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=xy(e)}catch(s){throw s.message.includes("polyfill")?s:hr(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class zh{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw hr(Ge.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=Ly(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Vy(n){const e=new zh(n);return e.base64?jh(Ge.BASE64,e.rest):Ny(e.rest)}function Oy(n){return new zh(n).contentType}function Ly(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t){let r=0,s="";Tl(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Tl(this.data_)){const r=this.data_,s=ky(r,e,t);return s===null?null:new Tt(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Tt(r,!0)}}static getBlob(...e){if(ua()){const t=e.map(r=>r instanceof Tt?r.data_:r);return new Tt(Cy.apply(null,t))}else{const t=e.map(a=>ni(a)?Dy(Ge.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let c=0;c<a.length;c++)s[i++]=a[c]}),new Tt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(n){let e;try{e=JSON.parse(n)}catch{return null}return wy(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Uy(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Wh(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(n,e){return e}class xe{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||Fy}}let as=null;function By(n){return!ni(n)||n.length<2?n:Wh(n)}function Gh(){if(as)return as;const n=[];n.push(new xe("bucket")),n.push(new xe("generation")),n.push(new xe("metageneration")),n.push(new xe("name","fullPath",!0));function e(i,a){return By(a)}const t=new xe("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new xe("size");return s.xform=r,n.push(s),n.push(new xe("timeCreated")),n.push(new xe("updated")),n.push(new xe("md5Hash",null,!0)),n.push(new xe("cacheControl",null,!0)),n.push(new xe("contentDisposition",null,!0)),n.push(new xe("contentEncoding",null,!0)),n.push(new xe("contentLanguage",null,!0)),n.push(new xe("contentType",null,!0)),n.push(new xe("metadata","customMetadata",!0)),as=n,as}function $y(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Be(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function qy(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return $y(r,n),r}function Kh(n,e,t){const r=Hh(e);return r===null?null:qy(n,r,t)}function jy(n,e,t,r){const s=Hh(e);if(s===null||!ni(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const p=n.bucket,y=n.fullPath,T="/b/"+a(p)+"/o/"+a(y),R=Dr(T,t,r),C=Bh({alt:"media",token:d});return R+C})[0]}function Qh(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Dn{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n){if(!n)throw la()}function ha(n,e){function t(r,s){const i=Kh(n,s,e);return ht(i!==null),i}return t}function zy(n,e){function t(r,s){const i=Kh(n,s,e);return ht(i!==null),jy(i,s,n.host,n._protocol)}return t}function Nr(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=ay():s=oy():t.getStatus()===402?s=iy(n.bucket):t.getStatus()===403?s=cy(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Xh(n){const e=Nr(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=sy(n.path)),i.serverResponse=s.serverResponse,i}return t}function Hy(n,e,t){const r=e.fullServerUrl(),s=Dr(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new Dn(s,i,ha(n,t),a);return c.errorHandler=Xh(e),c}function Wy(n,e,t){const r=e.fullServerUrl(),s=Dr(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new Dn(s,i,zy(n,t),a);return c.errorHandler=Xh(e),c}function Gy(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Yh(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=Gy(null,e)),r}function Ky(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let z=0;z<2;z++)M=M+Math.random().toString().slice(2);return M}const u=c();a["Content-Type"]="multipart/related; boundary="+u;const d=Yh(e,r,s),p=Qh(d,t),y="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,T=`\r
--`+u+"--",R=Tt.getBlob(y,r,T);if(R===null)throw Uh();const C={name:d.fullPath},D=Dr(i,n.host,n._protocol),k="POST",$=n.maxUploadRetryTime,q=new Dn(D,k,ha(n,t),$);return q.urlParams=C,q.headers=a,q.body=R.uploadData(),q.errorHandler=Nr(e),q}class xs{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function da(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{ht(!1)}return ht(!!t&&(e||["active"]).indexOf(t)!==-1),t}function Qy(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a=Yh(e,r,s),c={name:a.fullPath},u=Dr(i,n.host,n._protocol),d="POST",p={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},y=Qh(a,t),T=n.maxUploadRetryTime;function R(D){da(D);let k;try{k=D.getResponseHeader("X-Goog-Upload-URL")}catch{ht(!1)}return ht(ni(k)),k}const C=new Dn(u,d,R,T);return C.urlParams=c,C.headers=p,C.body=y,C.errorHandler=Nr(e),C}function Xy(n,e,t,r){const s={"X-Goog-Upload-Command":"query"};function i(d){const p=da(d,["active","final"]);let y=null;try{y=d.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ht(!1)}y||ht(!1);const T=Number(y);return ht(!isNaN(T)),new xs(T,r.size(),p==="final")}const a="POST",c=n.maxUploadRetryTime,u=new Dn(t,a,i,c);return u.headers=s,u.errorHandler=Nr(e),u}const bl=256*1024;function Yy(n,e,t,r,s,i,a,c){const u=new xs(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw dy();const d=u.total-u.current;let p=d;s>0&&(p=Math.min(p,s));const y=u.current,T=y+p;let R="";p===0?R="finalize":d===p?R="upload, finalize":R="upload";const C={"X-Goog-Upload-Command":R,"X-Goog-Upload-Offset":`${u.current}`},D=r.slice(y,T);if(D===null)throw Uh();function k(z,de){const Y=da(z,["active","final"]),E=u.current+p,m=r.size();let g;return Y==="final"?g=ha(e,i)(z,de):g=null,new xs(E,m,Y==="final",g)}const $="POST",q=e.maxUploadRetryTime,M=new Dn(t,$,k,q);return M.headers=C,M.body=D.uploadData(),M.progressCallback=c||null,M.errorHandler=Nr(n),M}const Ve={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ji(n){switch(n){case"running":case"pausing":case"canceling":return Ve.RUNNING;case"paused":return Ve.PAUSED;case"success":return Ve.SUCCESS;case"canceled":return Ve.CANCELED;case"error":return Ve.ERROR;default:return Ve.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,t,r){if(Ey(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class Zy{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Wt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Wt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Wt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw Jn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Jn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Jn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Jn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Jn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ev extends Zy{initXhr(){this.xhr_.responseType="text"}}function fn(){return new ev}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=Gh(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(te.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if($h(s.status,[]))if(i)s=Lh();else{this.sleepTime=Math.max(this.sleepTime*2,ry),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(te.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=Qy(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,fn,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const s=Xy(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,fn,t,r);this._request=i,i.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=bl*this._chunkMultiplier,t=new xs(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let a;try{a=Yy(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const c=this._ref.storage._makeRequest(a,fn,s,i,!1);this._request=c,c.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){bl*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=Hy(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,fn,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=Ky(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,fn,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Mh(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ji(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const i=new Jy(t||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ji(this._state)){case Ve.SUCCESS:ln(this._resolve.bind(null,this.snapshot))();break;case Ve.CANCELED:case Ve.ERROR:const t=this._reject;ln(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ji(this._state)){case Ve.RUNNING:case Ve.PAUSED:e.next&&ln(e.next.bind(e,this.snapshot))();break;case Ve.SUCCESS:e.complete&&ln(e.complete.bind(e))();break;case Ve.CANCELED:case Ve.ERROR:e.error&&ln(e.error.bind(e,this._error))();break;default:e.error&&ln(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t){this._service=e,t instanceof Be?this._location=t:this._location=Be.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Jt(e,t)}get root(){const e=new Be(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Wh(this._location.path)}get storage(){return this._service}get parent(){const e=My(this._location.path);if(e===null)return null;const t=new Be(this._location.bucket,e);return new Jt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw my(e)}}function nv(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new tv(n,new Tt(e),t)}function rv(n){n._throwIfRoot("getDownloadURL");const e=Wy(n.storage,n._location,Gh());return n.storage.makeRequestWithTokens(e,fn).then(t=>{if(t===null)throw fy();return t})}function sv(n,e){const t=Uy(n._location.path,e),r=new Be(n._location.bucket,t);return new Jt(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(n){return/^[A-Za-z]+:\/\//.test(n)}function ov(n,e){return new Jt(n,e)}function Jh(n,e){if(n instanceof fa){const t=n;if(t._bucket==null)throw hy();const r=new Jt(t,t._bucket);return e!=null?Jh(r,e):r}else return e!==void 0?sv(n,e):n}function av(n,e){if(e&&iv(e)){if(n instanceof fa)return ov(n,e);throw _o("To use ref(service, url), the first argument must be a Storage instance.")}else return Jh(n,e)}function Al(n,e){const t=e==null?void 0:e[Oh];return t==null?null:Be.makeFromBucketSpec(t,n)}function cv(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:su(s,n.app.options.projectId))}class fa{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Vh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ty,this._maxUploadRetryTime=ny,this._requests=new Set,s!=null?this._bucket=Be.makeFromBucketSpec(s,this._host):this._bucket=Al(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Be.makeFromBucketSpec(this._url,e):this._bucket=Al(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Il("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Il("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Jt(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new gy(Fh());{const a=Py(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Rl="@firebase/storage",Pl="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="storage";function lv(n,e,t){return n=ie(n),nv(n,e,t)}function uv(n){return n=ie(n),rv(n)}function hv(n,e){return n=ie(n),av(n,e)}function dv(n=Ao(),e){n=ie(n);const r=Fs(n,Zh).getImmediate({identifier:e}),s=tu("storage");return s&&fv(r,...s),r}function fv(n,e,t,r={}){cv(n,e,t,r)}function pv(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new fa(t,r,s,e,en)}function mv(){Gt(new Dt(Zh,pv,"PUBLIC").setMultipleInstances(!0)),Ke(Rl,Pl,""),Ke(Rl,Pl,"esm2017")}mv();function pa(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function ed(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gv=ed,td=new Ir("auth","Firebase",ed());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new Io("@firebase/auth");function _v(n,...e){Ds.logLevel<=W.WARN&&Ds.warn(`Auth (${en}): ${n}`,...e)}function ms(n,...e){Ds.logLevel<=W.ERROR&&Ds.error(`Auth (${en}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n,...e){throw ma(n,...e)}function Ye(n,...e){return ma(n,...e)}function nd(n,e,t){const r=Object.assign(Object.assign({},gv()),{[e]:t});return new Ir("auth","Firebase",r).create(e,{appName:n.name})}function xt(n){return nd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ma(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return td.create(n,...e)}function L(n,e,...t){if(!n)throw ma(e,...t)}function ot(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ms(e),new Error(e)}function mt(n,e){n||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function yv(){return Sl()==="http:"||Sl()==="https:"}function Sl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yv()||xf()||"connection"in navigator)?navigator.onLine:!0}function Ev(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t){this.shortDelay=e,this.longDelay=t,mt(t>e,"Short delay should be less than long delay!"),this.isMobile=Sf()||Df()}get(){return vv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(n,e){mt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=new Vr(3e4,6e4);function Ut(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function gt(n,e,t,r,s={}){return sd(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=br(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return kf()||(d.referrerPolicy="no-referrer"),rd.fetch()(id(n,n.config.apiHost,t,c),d)})}async function sd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},wv),e);try{const s=new bv(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw cs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw cs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw cs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw cs(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw nd(n,p,d);He(n,p)}}catch(s){if(s instanceof tt)throw s;He(n,"network-request-failed",{message:String(s)})}}async function ri(n,e,t,r,s={}){const i=await gt(n,e,t,r,s);return"mfaPendingCredential"in i&&He(n,"multi-factor-auth-required",{_serverResponse:i}),i}function id(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?ga(n.config,s):`${n.config.apiScheme}://${s}`}function Iv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),Tv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ye(n,e,r);return s.customData._tokenResponse=t,s}function Cl(n){return n!==void 0&&n.enterprise!==void 0}class Av{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Iv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Rv(n,e){return gt(n,"GET","/v2/recaptchaConfig",Ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(n,e){return gt(n,"POST","/v1/accounts:delete",e)}async function od(n,e){return gt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sv(n,e=!1){const t=ie(n),r=await t.getIdToken(e),s=_a(r);L(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:dr(zi(s.auth_time)),issuedAtTime:dr(zi(s.iat)),expirationTime:dr(zi(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zi(n){return Number(n)*1e3}function _a(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ms("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zl(t);return s?JSON.parse(s):(ms("Failed to decode base64 JWT payload"),null)}catch(s){return ms("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function kl(n){const e=_a(n);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof tt&&Cv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Cv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=dr(this.lastLoginAt),this.creationTime=dr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(n){var e;const t=n.auth,r=await n.getIdToken(),s=await wr(n,od(t,{idToken:r}));L(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ad(i.providerUserInfo):[],c=Dv(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),p=u?d:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new vo(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,y)}async function xv(n){const e=ie(n);await Ns(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dv(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ad(n){return n.map(e=>{var{providerId:t}=e,r=pa(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nv(n,e){const t=await sd(n,{},async()=>{const r=br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=id(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",rd.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Vv(n,e){return gt(n,"POST","/v2/accounts:revokeToken",Ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");const t=kl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Nv(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new gn;return r&&(L(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n,e){L(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class at{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=pa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await wr(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Sv(this,e)}reload(){return xv(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new at(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ns(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(it(this.auth.app))return Promise.reject(xt(this.auth));const e=await this.getIdToken();return await wr(this,Pv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,d,p;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,R=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,k=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,$=(d=t.createdAt)!==null&&d!==void 0?d:void 0,q=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:M,emailVerified:z,isAnonymous:de,providerData:Y,stsTokenManager:E}=t;L(M&&E,e,"internal-error");const m=gn.fromJSON(this.name,E);L(typeof M=="string",e,"internal-error"),wt(y,e.name),wt(T,e.name),L(typeof z=="boolean",e,"internal-error"),L(typeof de=="boolean",e,"internal-error"),wt(R,e.name),wt(C,e.name),wt(D,e.name),wt(k,e.name),wt($,e.name),wt(q,e.name);const g=new at({uid:M,auth:e,email:T,emailVerified:z,displayName:y,isAnonymous:de,photoURL:C,phoneNumber:R,tenantId:D,stsTokenManager:m,createdAt:$,lastLoginAt:q});return Y&&Array.isArray(Y)&&(g.providerData=Y.map(v=>Object.assign({},v))),k&&(g._redirectEventId=k),g}static async _fromIdTokenResponse(e,t,r=!1){const s=new gn;s.updateFromServerResponse(t);const i=new at({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ns(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];L(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ad(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new gn;c.updateFromIdToken(r);const u=new at({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=new Map;function ct(n){mt(n instanceof Function,"Expected a class definition");let e=xl.get(n);return e?(mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,xl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}cd.type="NONE";const Dl=cd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n,e,t){return`firebase:${n}:${e}:${t}`}class _n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=gs(this.userKey,s.apiKey,i),this.fullPersistenceKey=gs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?at._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new _n(ct(Dl),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||ct(Dl);const a=gs(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const p=await d._get(a);if(p){const y=at._fromJSON(e,p);d!==i&&(c=y),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new _n(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new _n(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ld(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pd(e))return"Blackberry";if(md(e))return"Webos";if(ud(e))return"Safari";if((e.includes("chrome/")||hd(e))&&!e.includes("edge/"))return"Chrome";if(fd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ld(n=Se()){return/firefox\//i.test(n)}function ud(n=Se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hd(n=Se()){return/crios\//i.test(n)}function dd(n=Se()){return/iemobile/i.test(n)}function fd(n=Se()){return/android/i.test(n)}function pd(n=Se()){return/blackberry/i.test(n)}function md(n=Se()){return/webos/i.test(n)}function ya(n=Se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ov(n=Se()){var e;return ya(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Lv(){return Nf()&&document.documentMode===10}function gd(n=Se()){return ya(n)||fd(n)||md(n)||pd(n)||/windows phone/i.test(n)||dd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(n,e=[]){let t;switch(n){case"Browser":t=Nl(Se());break;case"Worker":t=`${Nl(Se())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${en}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(n,e={}){return gt(n,"GET","/v2/passwordPolicy",Ut(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=6;class Bv{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Fv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vl(this),this.idTokenSubscription=new Vl(this),this.beforeStateQueue=new Mv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=td,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ct(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await _n.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await od(this,{idToken:e}),r=await at._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(it(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ns(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ev()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(it(this.app))return Promise.reject(xt(this));const t=e?ie(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return it(this.app)?Promise.reject(xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return it(this.app)?Promise.reject(xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Uv(this),t=new Bv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ir("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Vv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ct(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[ct(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_d(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&_v(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function rn(n){return ie(n)}class Vl{constructor(e){this.auth=e,this.observer=null,this.addObserver=$f(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qv(n){si=n}function yd(n){return si.loadJS(n)}function jv(){return si.recaptchaEnterpriseScript}function zv(){return si.gapiScript}function Hv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Wv="recaptcha-enterprise",Gv="NO_RECAPTCHA";class Kv{constructor(e){this.type=Wv,this.auth=rn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Rv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Av(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Cl(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Gv)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Cl(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=jv();u.length!==0&&(u+=c),yd(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Ol(n,e,t,r=!1){const s=new Kv(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Eo(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ol(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ol(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(n,e){const t=Fs(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Es(i,e??{}))return s;He(s,"already-initialized")}return t.initialize({options:e})}function Xv(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ct);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Yv(n,e,t){const r=rn(n);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=vd(e),{host:a,port:c}=Jv(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Zv()}function vd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Jv(n){const e=vd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ll(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Ll(a)}}}function Ll(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Zv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,t){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function eE(n,e){return gt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tE(n,e){return ri(n,"POST","/v1/accounts:signInWithPassword",Ut(n,e))}async function nE(n,e){return gt(n,"POST","/v1/accounts:sendOobCode",Ut(n,e))}async function rE(n,e){return nE(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE(n,e){return ri(n,"POST","/v1/accounts:signInWithEmailLink",Ut(n,e))}async function iE(n,e){return ri(n,"POST","/v1/accounts:signInWithEmailLink",Ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends va{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Tr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Tr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eo(e,t,"signInWithPassword",tE);case"emailLink":return sE(e,{email:this._email,oobCode:this._password});default:He(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eo(e,r,"signUpPassword",eE);case"emailLink":return iE(e,{idToken:t,email:this._email,oobCode:this._password});default:He(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(n,e){return ri(n,"POST","/v1/accounts:signInWithIdp",Ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="http://localhost";class Zt extends va{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):He("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=pa(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Zt(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return yn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,yn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yn(e,t)}buildRequest(){const e={requestUri:oE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=br(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cE(n){const e=er(tr(n)).link,t=e?er(tr(e)).deep_link_id:null,r=er(tr(n)).deep_link_id;return(r?er(tr(r)).link:null)||r||t||e||n}class Ea{constructor(e){var t,r,s,i,a,c;const u=er(tr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,y=aE((s=u.mode)!==null&&s!==void 0?s:null);L(d&&p&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=cE(e);try{return new Ea(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.providerId=Nn.PROVIDER_ID}static credential(e,t){return Tr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ea.parseLink(t);return L(r,"argument-error"),Tr._fromEmailAndCode(e,r.code,r.tenantId)}}Nn.PROVIDER_ID="password";Nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Ed{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Or{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Or{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return bt.credential(t,r)}catch{return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Or{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.GITHUB_SIGN_IN_METHOD="github.com";At.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Or{constructor(){super("twitter.com")}static credential(e,t){return Zt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Rt.credential(t,r)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await at._fromIdTokenResponse(e,r,s),a=Ml(r);return new Rn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Ml(r);return new Rn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Ml(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends tt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Vs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Vs(e,t,r,s)}}function wd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vs._fromErrorAndOperation(n,i,e,r):i})}async function lE(n,e,t=!1){const r=await wr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Rn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uE(n,e,t=!1){const{auth:r}=n;if(it(r.app))return Promise.reject(xt(r));const s="reauthenticate";try{const i=await wr(n,wd(r,s,e,n),t);L(i.idToken,r,"internal-error");const a=_a(i.idToken);L(a,r,"internal-error");const{sub:c}=a;return L(n.uid===c,r,"user-mismatch"),Rn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&He(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Td(n,e,t=!1){if(it(n.app))return Promise.reject(xt(n));const r="signIn",s=await wd(n,r,e),i=await Rn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function hE(n,e){return Td(rn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dE(n){const e=rn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fE(n,e,t){const r=rn(n);await Eo(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",rE)}function pE(n,e,t){return it(n.app)?Promise.reject(xt(n)):hE(ie(n),Nn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dE(n),r})}function mE(n,e,t,r){return ie(n).onIdTokenChanged(e,t,r)}function gE(n,e,t){return ie(n).beforeAuthStateChanged(e,t)}function _E(n,e,t,r){return ie(n).onAuthStateChanged(e,t,r)}function yE(n){return ie(n).signOut()}const Os="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Os,"1"),this.storage.removeItem(Os),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=1e3,EE=10;class bd extends Id{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Lv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,EE):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},vE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bd.type="LOCAL";const wE=bd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad extends Id{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ad.type="SESSION";const Rd=Ad;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ii(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await TE(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ii.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=wa("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const T=y;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(T.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function bE(n){Je().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function AE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function PE(){return Pd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="firebaseLocalStorageDb",SE=1,Ls="firebaseLocalStorage",Cd="fbase_key";class Lr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function oi(n,e){return n.transaction([Ls],e?"readwrite":"readonly").objectStore(Ls)}function CE(){const n=indexedDB.deleteDatabase(Sd);return new Lr(n).toPromise()}function wo(){const n=indexedDB.open(Sd,SE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ls,{keyPath:Cd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ls)?e(r):(r.close(),await CE(),e(await wo()))})})}async function Ul(n,e,t){const r=oi(n,!0).put({[Cd]:e,value:t});return new Lr(r).toPromise()}async function kE(n,e){const t=oi(n,!1).get(e),r=await new Lr(t).toPromise();return r===void 0?null:r.value}function Fl(n,e){const t=oi(n,!0).delete(e);return new Lr(t).toPromise()}const xE=800,DE=3;class kd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>DE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ii._getInstance(PE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await AE(),!this.activeServiceWorker)return;this.sender=new IE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wo();return await Ul(e,Os,"1"),await Fl(e,Os),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ul(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>kE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=oi(s,!1).getAll();return new Lr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kd.type="LOCAL";const NE=kd;new Vr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(n,e){return e?ct(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends va{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function OE(n){return Td(n.auth,new Ta(n),n.bypassAuthState)}function LE(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),uE(t,new Ta(n),n.bypassAuthState)}async function ME(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),lE(t,new Ta(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OE;case"linkViaPopup":case"linkViaRedirect":return ME;case"reauthViaPopup":case"reauthViaRedirect":return LE;default:He(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=new Vr(2e3,1e4);class pn extends xd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,pn.currentPopupAction&&pn.currentPopupAction.cancel(),pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=wa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UE.get())};e()}}pn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="pendingRedirect",_s=new Map;class BE extends xd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=_s.get(this.auth._key());if(!e){try{const r=await $E(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}_s.set(this.auth._key(),e)}return this.bypassAuthState||_s.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $E(n,e){const t=zE(e),r=jE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function qE(n,e){_s.set(n._key(),e)}function jE(n){return ct(n._redirectPersistence)}function zE(n){return gs(FE,n.config.apiKey,n.name)}async function HE(n,e,t=!1){if(it(n.app))return Promise.reject(xt(n));const r=rn(n),s=VE(r,e),a=await new BE(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=10*60*1e3;class GE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Dd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ye(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bl(e))}saveEventToCache(e){this.cachedEventUids.add(Bl(e)),this.lastProcessedEventTime=Date.now()}}function Bl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Dd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE(n,e={}){return gt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YE=/^https?/;async function JE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await QE(n);for(const t of e)try{if(ZE(t))return}catch{}He(n,"unauthorized-domain")}function ZE(n){const e=yo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!YE.test(t))return!1;if(XE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=new Vr(3e4,6e4);function $l(){const n=Je().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function tw(n){return new Promise((e,t)=>{var r,s,i;function a(){$l(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$l(),t(Ye(n,"network-request-failed"))},timeout:ew.get()})}if(!((s=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Je().gapi)===null||i===void 0)&&i.load)a();else{const c=Hv("iframefcb");return Je()[c]=()=>{gapi.load?a():t(Ye(n,"network-request-failed"))},yd(`${zv()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw ys=null,e})}let ys=null;function nw(n){return ys=ys||tw(n),ys}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=new Vr(5e3,15e3),sw="__/auth/iframe",iw="emulator/auth/iframe",ow={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cw(n){const e=n.config;L(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ga(e,iw):`https://${n.config.authDomain}/${sw}`,r={apiKey:e.apiKey,appName:n.name,v:en},s=aw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${br(r).slice(1)}`}async function lw(n){const e=await nw(n),t=Je().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:cw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ow,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ye(n,"network-request-failed"),c=Je().setTimeout(()=>{i(a)},rw.get());function u(){Je().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hw=500,dw=600,fw="_blank",pw="http://localhost";class ql{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mw(n,e,t,r=hw,s=dw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},uw),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Se().toLowerCase();t&&(c=hd(d)?fw:t),ld(d)&&(e=e||pw,u.scrollbars="yes");const p=Object.entries(u).reduce((T,[R,C])=>`${T}${R}=${C},`,"");if(Ov(d)&&c!=="_self")return gw(e||"",c),new ql(null);const y=window.open(e||"",c,p);L(y,n,"popup-blocked");try{y.focus()}catch{}return new ql(y)}function gw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w="__/auth/handler",yw="emulator/auth/handler",vw=encodeURIComponent("fac");async function jl(n,e,t,r,s,i){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:en,eventId:s};if(e instanceof Ed){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Bf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,y]of Object.entries({}))a[p]=y}if(e instanceof Or){const p=e.getScopes().filter(y=>y!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const u=await n._getAppCheckToken(),d=u?`#${vw}=${encodeURIComponent(u)}`:"";return`${Ew(n)}?${br(c).slice(1)}${d}`}function Ew({config:n}){return n.emulator?ga(n,yw):`https://${n.authDomain}/${_w}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="webStorageSupport";class ww{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rd,this._completeRedirectFn=HE,this._overrideRedirectResult=qE}async _openPopup(e,t,r,s){var i;mt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await jl(e,t,r,yo(),s);return mw(e,a,wa())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await jl(e,t,r,yo(),s);return bE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(mt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await lw(e),r=new GE(e);return t.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Hi,{type:Hi},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Hi];a!==void 0&&t(!!a),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=JE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gd()||ud()||ya()}}const Tw=ww;var zl="@firebase/auth",Hl="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Aw(n){Gt(new Dt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_d(n)},d=new $v(r,s,i,u);return Xv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Gt(new Dt("auth-internal",e=>{const t=rn(e.getProvider("auth").getImmediate());return(r=>new Iw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(zl,Hl,bw(n)),Ke(zl,Hl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=5*60,Pw=ru("authIdTokenMaxAge")||Rw;let Wl=null;const Sw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Pw)return;const s=t==null?void 0:t.token;Wl!==s&&(Wl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Cw(n=Ao()){const e=Fs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Qv(n,{popupRedirectResolver:Tw,persistence:[NE,wE,Rd]}),r=ru("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Sw(i.toString());gE(t,a,()=>a(t.currentUser)),mE(t,c=>a(c))}}const s=eu("auth");return s&&Yv(t,`http://${s}`),t}function kw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}qv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ye("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",kw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Aw("Browser");let Zn,Pe,Nd,or;const xw=async()=>{const n={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0};if(!n.apiKey&&window.firebaseConfig&&Object.assign(n,window.firebaseConfig),!n.apiKey)throw new Error("Firebase configuration not found. Please check .env file.");return Zn=au(n),Pe=U_(Zn),Nd=dv(Zn),or=Cw(Zn),Zn},le={state:{currentUser:null,currentTheme:localStorage.getItem("theme")||"system",currentObra:null,sidebarCollapsed:localStorage.getItem("sidebarCollapsed")==="true"},listeners:[],subscribe(n){return this.listeners.push(n),()=>{this.listeners=this.listeners.filter(e=>e!==n)}},setState(n){this.state={...this.state,...n},this.notify()},notify(){this.listeners.forEach(n=>n(this.state))},setUser(n){this.setState({currentUser:n})},setTheme(n){localStorage.setItem("theme",n),this.setState({currentTheme:n});const e=document.documentElement;n==="dark"||n==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?e.classList.add("dark"):e.classList.remove("dark")},toggleSidebar(){const n=!this.state.sidebarCollapsed;localStorage.setItem("sidebarCollapsed",n),this.setState({sidebarCollapsed:n})}},Ms={init:()=>new Promise(n=>{_E(or,async e=>{if(e)try{const t=await wl(Yt(Pe,"usuarios",e.uid));if(t.exists()){const r={uid:e.uid,email:e.email,...t.data()};le.setUser(r)}else le.setUser({uid:e.uid,email:e.email,role:"obra",nome:"Usuário"})}catch(t){console.error("Erro ao buscar perfil:",t),le.setUser(null)}else le.setUser(null);n(le.state.currentUser)})}),login:async(n,e)=>{try{const r=(await pE(or,n,e)).user,s=await wl(Yt(Pe,"usuarios",r.uid));if(s.exists()){const i={uid:r.uid,email:r.email,...s.data()};return le.setUser(i),i}else throw new Error("Perfil de usuário não encontrado.")}catch(t){throw t}},logout:async()=>{await yE(or),le.setUser(null)},recoverPassword:async n=>{await fE(or,n)}},Ne={routes:{},currentRoute:null,init(){window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())},on(n,e){this.routes[n]=e},navigate(n){window.location.hash=n},async handleRoute(){const n=window.location.hash.slice(1)||"/";if(!le.state.currentUser&&n!=="/login"&&n!=="/forgot-password"){this.navigate("/login");return}if(le.state.currentUser&&(n==="/login"||n==="/forgot-password")){this.navigate("/");return}const e=this.routes[n]||this.routes["/404"]||(()=>console.warn("Rota não encontrada:",n));this.currentRoute=n,document.getElementById("app"),await e()}},j={createInput:({type:n="text",id:e,label:t,placeholder:r="",value:s="",required:i=!1,className:a=""})=>`
            <div class="flex flex-col gap-1 ${a}">
                ${t?`<label for="${e}" class="text-sm font-medium text-gray-700 dark:text-gray-300">${t}</label>`:""}
                <input 
                    type="${n}" 
                    id="${e}" 
                    name="${e}" 
                    placeholder="${r}" 
                    value="${s}"
                    ${i?"required":""}
                    class="input"
                />
            </div>
        `,createButton:({id:n,text:e,type:t="button",variant:r="primary",icon:s="",onClick:i="",className:a=""})=>`
            <button 
                id="${n}" 
                type="${t}" 
                class="${r==="primary"?"btn":"btn-secondary"} ${a}"
                ${i?`onclick="${i}"`:""}
            >
                ${s}
                <span>${e}</span>
            </button>
        `,createCard:({title:n,content:e,footer:t="",className:r=""})=>`
            <div class="card ${r}">
                ${n?`<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">${n}</h3>`:""}
                <div class="text-gray-600 dark:text-gray-300">
                    ${e}
                </div>
                ${t?`<div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">${t}</div>`:""}
            </div>
        `,createToast:(n,e="success")=>{const t=document.createElement("div"),r=e==="success"?"bg-green-500":e==="error"?"bg-red-500":"bg-blue-500";t.className=`fixed top-4 right-4 ${r} text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 translate-y-[-100%] z-50 flex items-center gap-2`,t.innerHTML=`<span>${n}</span>`,document.body.appendChild(t),requestAnimationFrame(()=>{t.classList.remove("translate-y-[-100%]")}),setTimeout(()=>{t.classList.add("opacity-0","translate-y-[-100%]"),setTimeout(()=>t.remove(),300)},3e3)},createLoader:()=>`
            <div class="flex justify-center items-center p-4">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            </div>
        `},Gl={renderLogin:()=>`
            <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8">
                    <div class="text-center">
                        <h2 class="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                            Axel Gestão
                        </h2>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Entre com suas credenciais para acessar
                        </p>
                    </div>
                    <form id="login-form" class="mt-8 space-y-6">
                        <div class="rounded-md shadow-sm -space-y-px">
                            ${j.createInput({id:"email",type:"email",label:"Email",placeholder:"seu@email.com",required:!0,className:"mb-4"})}
                            ${j.createInput({id:"password",type:"password",label:"Senha",placeholder:"••••••••",required:!0})}
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="text-sm">
                                <a href="#/forgot-password" class="font-medium text-primary-600 hover:text-primary-500">
                                    Esqueceu a senha?
                                </a>
                            </div>
                        </div>

                        <div>
                            ${j.createButton({id:"btn-login",text:"Entrar",type:"submit",className:"w-full justify-center"})}
                        </div>
                    </form>
                </div>
            </div>
        `,renderForgotPassword:()=>`
            <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8">
                    <div class="text-center">
                        <h2 class="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                            Recuperar Senha
                        </h2>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Informe seu email para receber o link
                        </p>
                    </div>
                    <form id="forgot-form" class="mt-8 space-y-6">
                        ${j.createInput({id:"email-recovery",type:"email",label:"Email",required:!0})}

                        <div class="flex gap-4">
                            ${j.createButton({id:"btn-back",text:"Voltar",variant:"secondary",className:"w-full justify-center",onClick:"window.location.hash = '/login'"})}
                            ${j.createButton({id:"btn-recover",text:"Enviar",type:"submit",className:"w-full justify-center"})}
                        </div>
                    </form>
                </div>
            </div>
        `},Kl={initLogin:()=>{const n=document.getElementById("app");n.innerHTML=Gl.renderLogin(),document.getElementById("login-form").addEventListener("submit",async t=>{t.preventDefault();const r=document.getElementById("email").value,s=document.getElementById("password").value,i=document.getElementById("btn-login");try{i.disabled=!0,i.innerHTML=j.createLoader(),await Ms.login(r,s),j.createToast("Login realizado com sucesso!"),Ne.navigate("/")}catch(a){console.error(a);let c="Erro ao realizar login.";a.code==="auth/invalid-credential"&&(c="Email ou senha incorretos."),j.createToast(c,"error"),i.disabled=!1,i.innerHTML="<span>Entrar</span>"}})},initForgotPassword:()=>{const n=document.getElementById("app");n.innerHTML=Gl.renderForgotPassword(),document.getElementById("forgot-form").addEventListener("submit",async t=>{t.preventDefault();const r=document.getElementById("email-recovery").value,s=document.getElementById("btn-recover");try{s.disabled=!0,s.innerHTML=j.createLoader(),await Ms.recoverPassword(r),j.createToast("Email de recuperação enviado!"),setTimeout(()=>Ne.navigate("/login"),2e3)}catch(i){j.createToast("Erro ao enviar email: "+i.message,"error"),s.disabled=!1,s.innerHTML="<span>Enviar</span>"}})}},Wi={getCompradorStats:async()=>{const n=ut(Pe,"compras"),e=We(n,Me("status_compra","==","Pendente")),t=await Ue(e),r=We(n,Me("status_compra","==","Em Cotação")),s=await Ue(r),i=We(n,yl("data_solicitacao","desc"),Bi(5)),a=await Ue(i);return{pendentes:t.size,emCotacao:s.size,recentes:a.docs.map(c=>({id:c.id,...c.data()}))}},getObraStats:async n=>{if(!n)return{pendentes:0,transito:0,entregues:0,recentes:[]};const e=ut(Pe,"compras"),t=We(e,Me("obraId","==",n),Me("status_compra","in",["Pendente","Em Cotação","Aprovado"])),r=await Ue(t),s=We(e,Me("obraId","==",n),Me("status_compra","==","Comprado")),i=await Ue(s),a=We(e,Me("obraId","==",n),Me("status_compra","==","Entregue")),c=await Ue(a),u=We(e,Me("obraId","==",n),yl("data_solicitacao","desc"),Bi(5)),d=await Ue(u);return{pendentes:r.size,transito:i.size,entregues:c.size,recentes:d.docs.map(p=>({id:p.id,...p.data()}))}},getDiretorStats:async()=>{const n=ut(Pe,"compras"),e=We(n,Bi(100)),t=await Ue(e);let r=0,s={};return t.forEach(i=>{const a=i.data();r+=Number(a.valor_total||0),s[a.status_compra]=(s[a.status_compra]||0)+1}),{totalGasto:r,porStatus:s,totalPedidos:t.size}}},ls={formatCurrency:n=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n),formatDate:n=>n?new Date(n).toLocaleDateString("pt-BR"):"-"},Gi={renderComprador:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Visão Geral - Compras</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${j.createCard({title:"Pendentes",content:`<p class="text-4xl font-bold text-orange-500">${n.pendentes}</p><p class="text-sm text-gray-500">Aguardando ação</p>`,className:"border-l-4 border-orange-500"})}
                    ${j.createCard({title:"Em Cotação",content:`<p class="text-4xl font-bold text-blue-500">${n.emCotacao}</p><p class="text-sm text-gray-500">Processando</p>`,className:"border-l-4 border-blue-500"})}
                    ${j.createCard({title:"Prioridade Alta",content:'<p class="text-4xl font-bold text-red-500">0</p><p class="text-sm text-gray-500">SLA Estourado</p>',className:"border-l-4 border-red-500"})}
                </div>

                <div class="bg-white dark:bg-dark-surface rounded-xl shadow-sm border border-gray-200 dark:border-dark-border overflow-hidden">
                    <div class="px-6 py-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Últimas Solicitações</h3>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Obra</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ação</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-dark-surface divide-y divide-gray-200 dark:divide-gray-700">
                                ${n.recentes.map(e=>`
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${e.data_solicitacao||"-"}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">${e.obraId||"N/A"}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                ${e.status_compra}
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#/compras/${e.id}" class="text-primary-600 hover:text-primary-900">Ver</a>
                                        </td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `,renderObra:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Minha Obra</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${j.createCard({title:"Solicitados",content:`<p class="text-4xl font-bold text-gray-700 dark:text-gray-200">${n.pendentes}</p><p class="text-sm text-gray-500">Em processamento</p>`})}
                    ${j.createCard({title:"Em Trânsito",content:`<p class="text-4xl font-bold text-blue-500">${n.transito}</p><p class="text-sm text-gray-500">A caminho</p>`,className:"border-l-4 border-blue-500"})}
                    ${j.createCard({title:"Entregues",content:`<p class="text-4xl font-bold text-green-500">${n.entregues}</p><p class="text-sm text-gray-500">Finalizados</p>`,className:"border-l-4 border-green-500"})}
                </div>
            </div>
        `,renderDiretor:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Visão Executiva</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${j.createCard({title:"Total Gasto (Amostra)",content:`<p class="text-4xl font-bold text-green-600">R$ ${n.totalGasto.toFixed(2)}</p>`})}
                    ${j.createCard({title:"Total de Pedidos",content:`<p class="text-4xl font-bold text-primary-600">${n.totalPedidos}</p>`})}
                </div>
                
                <!-- Placeholder para gráficos -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="card h-64 flex items-center justify-center text-gray-400">
                        Gráfico de Gastos por Mês (Em breve)
                    </div>
                    <div class="card h-64 flex items-center justify-center text-gray-400">
                        Gráfico de Status (Em breve)
                    </div>
                </div>
            </div>
        `},$e={dashboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>',shoppingCart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>',chart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.212 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',logout:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>',moon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>'},ue={render:n=>{const e=document.getElementById("app"),t=le.state.currentUser;if(!t){e.innerHTML=n;return}const r=le.state.sidebarCollapsed,s=le.state.currentTheme;e.innerHTML=`
            <div class="flex h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-200">
                <!-- Sidebar -->
                <aside id="sidebar" class="${r?"w-20":"w-64"} bg-white dark:bg-dark-surface border-r border-gray-200 dark:border-dark-border flex flex-col transition-all duration-300 z-20 hidden md:flex">
                    <div class="h-16 flex items-center justify-center border-b border-gray-200 dark:border-dark-border">
                        <span class="text-2xl font-bold text-primary-600">Axel</span>
                        <span class="${r?"hidden":"ml-2 text-gray-700 dark:text-white font-semibold"}">Gestão</span>
                    </div>

                    <nav class="flex-1 overflow-y-auto py-4 space-y-1 px-3">
                        ${ue.createNavItem("/","Dashboard",$e.dashboard,r)}
                        ${ue.createNavItem("/compras","Compras",$e.shoppingCart,r)}
                        ${ue.createNavItem("/relatorios","Relatórios",$e.clipboard,r)}
                        ${ue.createNavItem("/obras","Obras",$e.chart,r)}
                        <div class="pt-4 mt-4 border-t border-gray-200 dark:border-dark-border">
                            ${ue.createNavItem("/configuracoes","Configurações",$e.settings,r)}
                        </div>
                    </nav>

                    <div class="p-4 border-t border-gray-200 dark:border-dark-border">
                        <button id="btn-logout" class="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 w-full p-2 rounded-lg transition-colors">
                            ${$e.logout}
                            <span class="${r?"hidden":""}">Sair</span>
                        </button>
                    </div>
                </aside>

                <!-- Mobile Sidebar Backdrop -->
                <div id="sidebar-backdrop" class="fixed inset-0 bg-black/50 z-10 hidden md:hidden glass"></div>

                <!-- Main Content -->
                <div class="flex-1 flex flex-col overflow-hidden">
                    <!-- Header -->
                    <header class="h-16 bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-dark-border flex items-center justify-between px-4 md:px-6 z-10">
                        <div class="flex items-center gap-4">
                            <button id="btn-toggle-sidebar" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white focus:outline-none">
                                ${$e.menu}
                            </button>
                            
                            <!-- Global Search -->
                            <div class="relative hidden md:block w-96">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    ${$e.search}
                                </span>
                                <input 
                                    type="text" 
                                    id="global-search"
                                    placeholder="Buscar (Ctrl+K)..." 
                                    class="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-none rounded-lg focus:ring-2 focus:ring-primary-500 text-sm text-gray-900 dark:text-white"
                                >
                            </div>
                        </div>

                        <div class="flex items-center gap-4">
                            <button id="btn-theme-toggle" class="text-gray-500 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors">
                                ${s==="dark"?$e.sun:$e.moon}
                            </button>
                            
                            <div class="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
                                <div class="text-right hidden sm:block">
                                    <p class="text-sm font-medium text-gray-900 dark:text-white">${t.nome||t.email}</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400 capitalize">${t.role||"Usuário"}</p>
                                </div>
                                <div class="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-700 dark:text-primary-300 font-bold">
                                    ${(t.nome||t.email||"U").charAt(0).toUpperCase()}
                                </div>
                            </div>
                        </div>
                    </header>

                    <!-- Page Content -->
                    <main class="flex-1 overflow-auto p-4 md:p-6 relative">
                        ${n}
                    </main>
                </div>
            </div>
        `,ue.bindEvents()},createNavItem:(n,e,t,r)=>{const i=Ne.currentRoute===n?"bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400":"text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800";return`
            <a href="#${n}" class="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors mb-1 ${i}" title="${e}">
                ${t}
                <span class="${r?"hidden":"font-medium"}">${e}</span>
            </a>
        `},bindEvents:()=>{var n,e,t;(n=document.getElementById("btn-toggle-sidebar"))==null||n.addEventListener("click",()=>{le.toggleSidebar();const r=document.getElementById("sidebar"),s=r.querySelectorAll("span"),i=r.querySelector(".font-bold.text-primary-600").nextElementSibling;le.state.sidebarCollapsed?(r.classList.remove("w-64"),r.classList.add("w-20"),s.forEach(a=>a.classList.add("hidden")),i&&i.classList.add("hidden")):(r.classList.remove("w-20"),r.classList.add("w-64"),s.forEach(a=>a.classList.remove("hidden")),i&&i.classList.remove("hidden"))}),(e=document.getElementById("btn-theme-toggle"))==null||e.addEventListener("click",()=>{const s=le.state.currentTheme==="dark"?"light":"dark";le.setTheme(s);const i=document.getElementById("btn-theme-toggle");i.innerHTML=s==="dark"?$e.sun:$e.moon}),(t=document.getElementById("btn-logout"))==null||t.addEventListener("click",async()=>{try{await Ms.logout(),Ne.navigate("/login")}catch(r){console.error(r)}}),document.addEventListener("keydown",r=>{var s;(r.ctrlKey||r.metaKey)&&r.key==="k"&&(r.preventDefault(),(s=document.getElementById("global-search"))==null||s.focus())})}},Dw=Object.freeze(Object.defineProperty({__proto__:null,Layout:ue},Symbol.toStringTag,{value:"Module"})),Nw={init:async()=>{const n=le.state.currentUser;if(n){ue.render(j.createLoader());try{let e="";if(n.role==="comprador"){const t=await Wi.getCompradorStats();e=Gi.renderComprador(t)}else if(n.role==="obra"||n.role==="engenheiro"){const t=n.obraPadrao||null,r=await Wi.getObraStats(t);e=Gi.renderObra(r)}else{const t=await Wi.getDiretorStats();e=Gi.renderDiretor(t)}ue.render(e)}catch(e){console.error(e),ue.render(`<div class="text-red-500 p-4">Erro ao carregar dashboard: ${e.message}</div>`)}}}},Ki={checkDuplicidade:async(n,e)=>{const t=We(ut(Pe,"compras"),Me("obraId","==",n),Me("status_compra","in",["Pendente","Em Cotação"]));return(await Ue(t)).docs.filter(i=>{const a=i.data(),c=(a.descricao||"").toLowerCase(),u=a.itens||[],d=e.toLowerCase();return c.includes(d)||u.some(p=>p.nome.toLowerCase().includes(d))}).length>0},uploadArquivo:(n,e,t)=>new Promise((r,s)=>{const i=hv(Nd,e),a=lv(i,n);a.on("state_changed",c=>{const u=c.bytesTransferred/c.totalBytes*100;t&&t(u)},c=>s(c),async()=>{const c=await uv(a.snapshot.ref);r(c)})}),salvarCompra:async n=>{const e={...n,data_solicitacao:ae.now().toDate().toISOString(),status_compra:"Pendente",created_at:ae.now()};return(await Z_(ut(Pe,"compras"),e)).id},atualizarCompra:async(n,e)=>{const t=Yt(Pe,"compras",n);await aa(t,e)}},Vw={renderForm:(n=[],e=[])=>`
            <div class="max-w-4xl mx-auto">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Nova Solicitação de Compra</h2>
                </div>

                <form id="form-compra" class="space-y-8">
                    <!-- Passo 1: Informações Básicas -->
                    <div class="card">
                        <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">1. Dados da Obra</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Obra *</label>
                                <select id="obraId" name="obraId" required class="input">
                                    <option value="">Selecione a Obra...</option>
                                    ${n.map(t=>`<option value="${t.id}">${t.nome_obra}</option>`).join("")}
                                </select>
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Prioridade</label>
                                <select name="prioridade" class="input">
                                    <option value="Normal">Normal</option>
                                    <option value="Alta">Alta (Urgente)</option>
                                    <option value="Critica">Crítica (Parada de Obra)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Passo 2: Detalhes do Pedido -->
                    <div class="card">
                        <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">2. Itens e Valores</h3>
                        
                        ${j.createInput({id:"descricao",label:"Descrição Resumida (ex: 50 sacos de cimento)",required:!0,className:"mb-4"})}

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Fornecedor Sugerido</label>
                                <select name="fornecedorId" class="input">
                                    <option value="">Sem preferência</option>
                                    ${e.map(t=>`<option value="${t.id}">${t.nome}</option>`).join("")}
                                </select>
                            </div>
                            ${j.createInput({id:"valor_estimado",type:"number",label:"Valor Estimado (R$)",placeholder:"0,00"})}
                        </div>

                        <!-- Área de Justificativa (Oculta por padrão) -->
                        <div id="justificativa-container" class="hidden bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                            <p class="text-yellow-800 dark:text-yellow-200 text-sm mb-2 font-medium">⚠️ Valor acima do orçamento ou crítico. Justifique:</p>
                            <textarea id="justificativa" name="justificativa" class="input h-24" placeholder="Explique a necessidade..."></textarea>
                        </div>
                    </div>

                    <!-- Passo 3: Anexos -->
                    <div class="card">
                        <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">3. Anexos</h3>
                        <div class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer" id="drop-zone">
                            <input type="file" id="file-upload" multiple class="hidden">
                            <p class="text-gray-500 dark:text-gray-400">Clique para adicionar arquivos ou arraste aqui</p>
                            <p class="text-xs text-gray-400 mt-1">PDF, Imagens (Max 5MB)</p>
                        </div>
                        <div id="file-list" class="mt-4 space-y-2"></div>
                    </div>

                    <div class="flex justify-end gap-4">
                        ${j.createButton({id:"btn-cancel",text:"Cancelar",variant:"secondary",onClick:"window.history.back()"})}
                        ${j.createButton({id:"btn-submit",text:"Registrar Solicitação",type:"submit"})}
                    </div>
                </form>
            </div>
        `},Vd={init:async()=>{ue.render(j.createLoader());try{const[n,e]=await Promise.all([Ue(ut(Pe,"obras")),Ue(ut(Pe,"fornecedores"))]),t=n.docs.map(s=>({id:s.id,...s.data()})),r=e.docs.map(s=>({id:s.id,...s.data()}));ue.render(Vw.renderForm(t,r)),Vd.bindEvents()}catch(n){console.error(n),ue.render(`<div class="text-red-500">Erro ao carregar formulário: ${n.message}</div>`)}},bindEvents:()=>{const n=document.getElementById("form-compra"),e=document.getElementById("file-upload"),t=document.getElementById("drop-zone"),r=document.getElementById("descricao"),s=document.getElementById("obraId");let i=[];t.addEventListener("click",()=>e.click()),e.addEventListener("change",u=>a(u.target.files));const a=u=>{i=[...i,...Array.from(u)],c()},c=()=>{const u=document.getElementById("file-list");u.innerHTML=i.map((d,p)=>`
                <div class="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <span class="text-sm truncate">${d.name}</span>
                    <button type="button" class="text-red-500 hover:text-red-700" onclick="document.getElementById('form-compra').dispatchEvent(new CustomEvent('remove-file', {detail: ${p}}))">
                        ${j.createButton({text:"X",variant:"secondary",className:"px-2 py-0 text-xs"})}
                    </button>
                </div>
            `).join("")};n.addEventListener("remove-file",u=>{i.splice(u.detail,1),c()}),r.addEventListener("blur",async()=>{const u=s.value,d=r.value;u&&d.length>3&&await Ki.checkDuplicidade(u,d)&&j.createToast("⚠️ Atenção: Já existe um pedido similar para esta obra!","warning")}),document.getElementById("valor_estimado").addEventListener("input",u=>{const d=parseFloat(u.target.value),p=document.getElementById("justificativa-container"),y=document.getElementById("justificativa");d>5e3?(p.classList.remove("hidden"),y.required=!0):(p.classList.add("hidden"),y.required=!1)}),n.addEventListener("submit",async u=>{u.preventDefault();const d=document.getElementById("btn-submit");try{d.disabled=!0,d.innerHTML=j.createLoader();const p=[];for(const C of i){const D=await Ki.uploadArquivo(C,`compras/${Date.now()}_${C.name}`);p.push({nome:C.name,url:D})}const y=new FormData(n),R={...Object.fromEntries(y.entries()),anexos:p,solicitanteId:le.state.currentUser.uid,solicitanteNome:le.state.currentUser.nome};await Ki.salvarCompra(R),j.createToast("Solicitação registrada com sucesso!"),Ne.navigate("/")}catch(p){console.error(p),j.createToast("Erro ao registrar: "+p.message,"error"),d.disabled=!1,d.innerHTML="<span>Registrar Solicitação</span>"}})}},Ql={getCompras:async(n={})=>{let e=ut(Pe,"compras");const t=[];n.obraId&&t.push(Me("obraId","==",n.obraId)),n.status&&t.push(Me("status_compra","==",n.status));const r=We(e,...t);let i=(await Ue(r)).docs.map(a=>({id:a.id,...a.data()}));if(n.search){const a=n.search.toLowerCase();i=i.filter(c=>(c.descricao||"").toLowerCase().includes(a)||(c.fornecedorNome||"").toLowerCase().includes(a)||(c.obraNome||"").toLowerCase().includes(a))}return i},updateStatus:async(n,e)=>{const t=Yt(Pe,"compras",n);await aa(t,{status_compra:e})}},Qi={renderControls:(n="table")=>`
            <div class="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Relatório de Compras</h2>
                
                <div class="flex gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                    <button id="view-table" class="px-4 py-2 rounded-md text-sm font-medium transition-colors ${n==="table"?"bg-white dark:bg-dark-surface shadow text-primary-600":"text-gray-500 hover:text-gray-700"}">
                        Tabela
                    </button>
                    <button id="view-kanban" class="px-4 py-2 rounded-md text-sm font-medium transition-colors ${n==="kanban"?"bg-white dark:bg-dark-surface shadow text-primary-600":"text-gray-500 hover:text-gray-700"}">
                        Kanban
                    </button>
                </div>
            </div>

            <!-- Filters -->
            <div class="card mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                ${j.createInput({id:"filter-search",placeholder:"Buscar...",className:""})}
                <select id="filter-status" class="input">
                    <option value="">Todos os Status</option>
                    <option value="Pendente">Pendente</option>
                    <option value="Em Cotação">Em Cotação</option>
                    <option value="Aprovado">Aprovado</option>
                    <option value="Comprado">Comprado</option>
                    <option value="Entregue">Entregue</option>
                </select>
                <!-- Obra Select would be populated dynamically -->
                <select id="filter-obra" class="input">
                    <option value="">Todas as Obras</option>
                </select>
                ${j.createButton({id:"btn-filter",text:"Filtrar",className:"w-full"})}
            </div>
        `,renderTable:n=>n.length?`
            <div class="bg-white dark:bg-dark-surface rounded-xl shadow-sm border border-gray-200 dark:border-dark-border overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Obra</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Descrição</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Valor</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                            ${n.map(e=>`
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ls.formatDate(e.data_solicitacao)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">${e.obraId||"-"}</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 max-w-xs truncate" title="${e.descricao}">${e.descricao}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ls.formatCurrency(e.valor_estimado||0)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                            ${e.status_compra==="Pendente"?"bg-yellow-100 text-yellow-800":e.status_compra==="Entregue"?"bg-green-100 text-green-800":"bg-blue-100 text-blue-800"}">
                                            ${e.status_compra}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button class="text-primary-600 hover:text-primary-900 mr-2">Editar</button>
                                    </td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        `:'<div class="text-center py-10 text-gray-500">Nenhum registro encontrado.</div>',renderKanban:n=>`
            <div class="flex overflow-x-auto gap-4 pb-4 h-[calc(100vh-250px)]">
                ${["Pendente","Em Cotação","Aprovado","Comprado","Entregue"].map(t=>{const r=n.filter(s=>s.status_compra===t);return`
                        <div class="min-w-[300px] w-[300px] flex flex-col bg-gray-100 dark:bg-gray-800 rounded-xl p-3">
                            <div class="flex justify-between items-center mb-3 px-1">
                                <h3 class="font-semibold text-gray-700 dark:text-gray-300">${t}</h3>
                                <span class="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs px-2 py-1 rounded-full">${r.length}</span>
                            </div>
                            <div class="flex-1 overflow-y-auto space-y-3 custom-scrollbar" ondragover="event.preventDefault()" ondrop="document.dispatchEvent(new CustomEvent('kanban-drop', {detail: {status: '${t}'}}))">
                                ${r.map(s=>`
                                    <div class="bg-white dark:bg-dark-surface p-4 rounded-lg shadow-sm border border-gray-200 dark:border-dark-border cursor-move hover:shadow-md transition-shadow" draggable="true" data-id="${s.id}">
                                        <div class="flex justify-between items-start mb-2">
                                            <span class="text-xs font-medium text-primary-600 bg-primary-50 dark:bg-primary-900/20 px-2 py-0.5 rounded">${s.obraId}</span>
                                            <span class="text-xs text-gray-400">${ls.formatDate(s.data_solicitacao)}</span>
                                        </div>
                                        <p class="text-sm font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">${s.descricao}</p>
                                        <div class="flex justify-between items-center mt-3">
                                            <span class="text-sm font-bold text-gray-600 dark:text-gray-300">${ls.formatCurrency(s.valor_estimado||0)}</span>
                                            <button class="text-gray-400 hover:text-primary-600" title="Mover Próximo" onclick="document.dispatchEvent(new CustomEvent('kanban-move-next', {detail: {id: '${s.id}', current: '${t}'}}))">
                                                ➡️
                                            </button>
                                        </div>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                    `}).join("")}
            </div>
        `},me={currentView:"table",filters:{},init:async()=>{await me.render()},render:async()=>{ue.render(j.createLoader());try{const n=await Ql.getCompras(me.filters),e=document.createElement("div");e.innerHTML=Qi.renderControls(me.currentView);const t=document.createElement("div");t.id="reports-content",t.innerHTML=me.currentView==="table"?Qi.renderTable(n):Qi.renderKanban(n),e.appendChild(t),ue.render(e.innerHTML),me.bindEvents()}catch(n){console.error(n),ue.render(`<div class="text-red-500">Erro ao carregar relatórios: ${n.message}</div>`)}},bindEvents:()=>{var n,e,t;(n=document.getElementById("view-table"))==null||n.addEventListener("click",()=>{me.currentView="table",me.render()}),(e=document.getElementById("view-kanban"))==null||e.addEventListener("click",()=>{me.currentView="kanban",me.render()}),(t=document.getElementById("btn-filter"))==null||t.addEventListener("click",()=>{me.filters={search:document.getElementById("filter-search").value,status:document.getElementById("filter-status").value,obraId:document.getElementById("filter-obra").value},me.render()}),document.addEventListener("kanban-move-next",async r=>{const{id:s,current:i}=r.detail,a=["Pendente","Em Cotação","Aprovado","Comprado","Entregue"],c=a.indexOf(i)+1;if(c<a.length){const u=a[c];try{await Ql.updateStatus(s,u),j.createToast(`Movido para ${u}`),me.render()}catch(d){j.createToast("Erro ao mover: "+d.message,"error")}}}),me.filters.search&&(document.getElementById("filter-search").value=me.filters.search),me.filters.status&&(document.getElementById("filter-status").value=me.filters.status)}},Xl={getUsers:async()=>(await Ue(ut(Pe,"usuarios"))).docs.map(e=>({id:e.id,...e.data()})),updateUser:async(n,e)=>{await aa(Yt(Pe,"usuarios",n),e)},createUserProfile:async(n,e)=>{await J_(Yt(Pe,"usuarios",n),e)}},Ow={render:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Configurações</h2>
                
                <div class="card">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Usuários do Sistema</h3>
                        ${j.createButton({text:"Novo Usuário",onClick:"alert('Funcionalidade requer Admin SDK ou Cloud Functions')"})}
                    </div>
                    
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nome</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Função (Role)</th>
                                    <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Ações</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                ${n.map(e=>`
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">${e.nome||"-"}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${e.email}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">${e.role||"obra"}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button class="text-primary-600 hover:text-primary-900" onclick="document.dispatchEvent(new CustomEvent('edit-user', {detail: '${e.id}'}))">Editar</button>
                                        </td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `},To={init:async()=>{const n=le.state.currentUser;if(n.role!=="administrador"&&n.role!=="diretor"){ue.render('<div class="p-6 text-red-500">Acesso negado. Apenas administradores.</div>');return}ue.render(j.createLoader());try{const e=await Xl.getUsers();ue.render(Ow.render(e)),To.bindEvents()}catch(e){ue.render(`<div class="text-red-500">Erro: ${e.message}</div>`)}},bindEvents:()=>{document.addEventListener("edit-user",n=>{const e=n.detail,t=prompt("Nova função (comprador, obra, diretor, administrador):");t&&Xl.updateUser(e,{role:t}).then(()=>{j.createToast("Usuário atualizado!"),To.init()}).catch(r=>j.createToast("Erro: "+r.message,"error"))})}};console.log("[Main] Inicializando aplicação...");const Lw=async()=>{try{await xw(),console.log("[Main] Firebase inicializado."),await Ms.init(),Ne.init(),Ne.on("/",Nw.init),Ne.on("/login",Kl.initLogin),Ne.on("/forgot-password",Kl.initForgotPassword),Ne.on("/compras",Vd.init),Ne.on("/relatorios",me.init),Ne.on("/configuracoes",To.init);const n=t=>async()=>{const{Layout:r}=await vf(async()=>{const{Layout:s}=await Promise.resolve().then(()=>Dw);return{Layout:s}},void 0);r.render(`<div class="p-6 text-xl">Módulo <b>${t}</b> em construção...</div>`)};Ne.on("/obras",n("Gestão de Obras")),Ne.handleRoute();const e=document.getElementById("loader");e&&e.remove()}catch(n){console.error("[Main] Erro fatal:",n),document.body.innerHTML=`<div class="p-10 text-red-600">Erro fatal: ${n.message}</div>`}};Lw();
