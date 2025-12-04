var ux=Object.defineProperty;var dx=(n,t,e)=>t in n?ux(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var N=(n,t,e)=>dx(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();var vf={};/**
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
 */const Tg=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},hx=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const r=n[e++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[e++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[e++],o=n[e++],a=n[e++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[e++],o=n[e++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Ig={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,l=c?n[r+2]:0,d=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),s.push(e[d],e[h],e[f],e[m])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Tg(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):hx(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=e[n.charAt(r++)],a=r<n.length?e[n.charAt(r)]:0;++r;const l=r<n.length?e[n.charAt(r)]:64;++r;const h=r<n.length?e[n.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new fx;const f=i<<2|a>>4;if(s.push(f),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const px=function(n){const t=Tg(n);return Ig.encodeByteArray(t,!0)},Ga=function(n){return px(n).replace(/\./g,"")},Ag=function(n){try{return Ig.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function mx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gx=()=>mx().__FIREBASE_DEFAULTS__,_x=()=>{if(typeof process>"u"||typeof vf>"u")return;const n=vf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yx=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ag(n[1]);return t&&JSON.parse(t)},Tc=()=>{try{return gx()||_x()||yx()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kg=n=>{var t,e;return(e=(t=Tc())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Sg=n=>{const t=kg(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},Cg=()=>{var n;return(n=Tc())===null||n===void 0?void 0:n.config},Rg=n=>{var t;return(t=Tc())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class vx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
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
 */function Pg(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ga(JSON.stringify(e)),Ga(JSON.stringify(o)),""].join(".")}/**
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
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function xx(){var n;const t=(n=Tc())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ex(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Tx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ix(){const n=Ie();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ax(){return!xx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kx(){try{return typeof indexedDB=="object"}catch{return!1}}function Sx(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
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
 */const Cx="FirebaseError";class _n extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=Cx,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wo.prototype.create)}}class wo{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Rx(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new _n(r,a,s)}}function Rx(n,t){return n.replace(Px,(e,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Px=/\{\$([^}]+)}/g;function Dx(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Ya(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const r of e){if(!s.includes(r))return!1;const i=n[r],o=t[r];if(bf(i)&&bf(o)){if(!Ya(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!e.includes(r))return!1;return!0}function bf(n){return n!==null&&typeof n=="object"}/**
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
 */function Eo(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Pi(n){const t={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");t[decodeURIComponent(r)]=decodeURIComponent(i)}}),t}function Di(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Mx(n,t){const e=new Ox(n,t);return e.subscribe.bind(e)}class Ox{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let r;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");Nx(t,["next","error","complete"])?r=t:r={next:t,error:e,complete:s},r.next===void 0&&(r.next=kl),r.error===void 0&&(r.error=kl),r.complete===void 0&&(r.complete=kl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nx(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function kl(){}/**
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
 */function qt(n){return n&&n._delegate?n._delegate:n}class ls{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Cs="[DEFAULT]";/**
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
 */class Lx{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new vx;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fx(t))try{this.getOrInitializeService({instanceIdentifier:Cs})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Cs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Cs){return this.instances.has(t)}getOptions(t=Cs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,e){var s;const r=this.normalizeInstanceIdentifier(e),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const r of s)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Vx(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Cs){return this.component?this.component.multipleInstances?t:Cs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vx(n){return n===Cs?void 0:n}function Fx(n){return n.instantiationMode==="EAGER"}/**
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
 */class $x{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Lx(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ft;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ft||(ft={}));const Bx={debug:ft.DEBUG,verbose:ft.VERBOSE,info:ft.INFO,warn:ft.WARN,error:ft.ERROR,silent:ft.SILENT},Ux=ft.INFO,jx={[ft.DEBUG]:"log",[ft.VERBOSE]:"log",[ft.INFO]:"info",[ft.WARN]:"warn",[ft.ERROR]:"error"},zx=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),r=jx[t];if(r)console[r](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class rd{constructor(t){this.name=t,this._logLevel=Ux,this._logHandler=zx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ft))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Bx[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ft.DEBUG,...t),this._logHandler(this,ft.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ft.VERBOSE,...t),this._logHandler(this,ft.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ft.INFO,...t),this._logHandler(this,ft.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ft.WARN,...t),this._logHandler(this,ft.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ft.ERROR,...t),this._logHandler(this,ft.ERROR,...t)}}const Hx=(n,t)=>t.some(e=>n instanceof e);let xf,wf;function qx(){return xf||(xf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wx(){return wf||(wf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dg=new WeakMap,lu=new WeakMap,Mg=new WeakMap,Sl=new WeakMap,id=new WeakMap;function Gx(n){const t=new Promise((e,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{e(is(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Dg.set(e,n)}).catch(()=>{}),id.set(t,n),t}function Yx(n){if(lu.has(n))return;const t=new Promise((e,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});lu.set(n,t)}let uu={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return lu.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Mg.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return is(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Kx(n){uu=n(uu)}function Qx(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(Cl(this),t,...e);return Mg.set(s,t.sort?t.sort():[t]),is(s)}:Wx().includes(n)?function(...t){return n.apply(Cl(this),t),is(Dg.get(this))}:function(...t){return is(n.apply(Cl(this),t))}}function Xx(n){return typeof n=="function"?Qx(n):(n instanceof IDBTransaction&&Yx(n),Hx(n,qx())?new Proxy(n,uu):n)}function is(n){if(n instanceof IDBRequest)return Gx(n);if(Sl.has(n))return Sl.get(n);const t=Xx(n);return t!==n&&(Sl.set(n,t),id.set(t,n)),t}const Cl=n=>id.get(n);function Jx(n,t,{blocked:e,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,t),a=is(o);return s&&o.addEventListener("upgradeneeded",c=>{s(is(o.result),c.oldVersion,c.newVersion,is(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Zx=["get","getKey","getAll","getAllKeys","count"],t0=["put","add","delete","clear"],Rl=new Map;function Ef(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Rl.get(t))return Rl.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,r=t0.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Zx.includes(e)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),r&&c.done]))[0]};return Rl.set(t,i),i}Kx(n=>({...n,get:(t,e,s)=>Ef(t,e)||n.get(t,e,s),has:(t,e)=>!!Ef(t,e)||n.has(t,e)}));/**
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
 */class e0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(n0(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function n0(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const du="@firebase/app",Tf="0.10.13";/**
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
 */const Nn=new rd("@firebase/app"),s0="@firebase/app-compat",r0="@firebase/analytics-compat",i0="@firebase/analytics",o0="@firebase/app-check-compat",a0="@firebase/app-check",c0="@firebase/auth",l0="@firebase/auth-compat",u0="@firebase/database",d0="@firebase/data-connect",h0="@firebase/database-compat",f0="@firebase/functions",p0="@firebase/functions-compat",m0="@firebase/installations",g0="@firebase/installations-compat",_0="@firebase/messaging",y0="@firebase/messaging-compat",v0="@firebase/performance",b0="@firebase/performance-compat",x0="@firebase/remote-config",w0="@firebase/remote-config-compat",E0="@firebase/storage",T0="@firebase/storage-compat",I0="@firebase/firestore",A0="@firebase/vertexai-preview",k0="@firebase/firestore-compat",S0="firebase",C0="10.14.1";/**
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
 */const hu="[DEFAULT]",R0={[du]:"fire-core",[s0]:"fire-core-compat",[i0]:"fire-analytics",[r0]:"fire-analytics-compat",[a0]:"fire-app-check",[o0]:"fire-app-check-compat",[c0]:"fire-auth",[l0]:"fire-auth-compat",[u0]:"fire-rtdb",[d0]:"fire-data-connect",[h0]:"fire-rtdb-compat",[f0]:"fire-fn",[p0]:"fire-fn-compat",[m0]:"fire-iid",[g0]:"fire-iid-compat",[_0]:"fire-fcm",[y0]:"fire-fcm-compat",[v0]:"fire-perf",[b0]:"fire-perf-compat",[x0]:"fire-rc",[w0]:"fire-rc-compat",[E0]:"fire-gcs",[T0]:"fire-gcs-compat",[I0]:"fire-fst",[k0]:"fire-fst-compat",[A0]:"fire-vertex","fire-js":"fire-js",[S0]:"fire-js-all"};/**
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
 */const Ka=new Map,P0=new Map,fu=new Map;function If(n,t){try{n.container.addComponent(t)}catch(e){Nn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Hs(n){const t=n.name;if(fu.has(t))return Nn.debug(`There were multiple attempts to register component ${t}.`),!1;fu.set(t,n);for(const e of Ka.values())If(e,n);for(const e of P0.values())If(e,n);return!0}function Ic(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function In(n){return n.settings!==void 0}/**
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
 */const D0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},os=new wo("app","Firebase",D0);/**
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
 */class M0{constructor(t,e,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw os.create("app-deleted",{appName:this._name})}}/**
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
 */const tr=C0;function Og(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s=Object.assign({name:hu,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw os.create("bad-app-name",{appName:String(r)});if(e||(e=Cg()),!e)throw os.create("no-options");const i=Ka.get(r);if(i){if(Ya(e,i.options)&&Ya(s,i.config))return i;throw os.create("duplicate-app",{appName:r})}const o=new $x(r);for(const c of fu.values())o.addComponent(c);const a=new M0(e,s,o);return Ka.set(r,a),a}function od(n=hu){const t=Ka.get(n);if(!t&&n===hu&&Cg())return Og();if(!t)throw os.create("no-app",{appName:n});return t}function ln(n,t,e){var s;let r=(s=R0[n])!==null&&s!==void 0?s:n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Nn.warn(a.join(" "));return}Hs(new ls(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const O0="firebase-heartbeat-database",N0=1,eo="firebase-heartbeat-store";let Pl=null;function Ng(){return Pl||(Pl=Jx(O0,N0,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(eo)}catch(e){console.warn(e)}}}}).catch(n=>{throw os.create("idb-open",{originalErrorMessage:n.message})})),Pl}async function L0(n){try{const e=(await Ng()).transaction(eo),s=await e.objectStore(eo).get(Lg(n));return await e.done,s}catch(t){if(t instanceof _n)Nn.warn(t.message);else{const e=os.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Nn.warn(e.message)}}}async function Af(n,t){try{const s=(await Ng()).transaction(eo,"readwrite");await s.objectStore(eo).put(t,Lg(n)),await s.done}catch(e){if(e instanceof _n)Nn.warn(e.message);else{const s=os.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(s.message)}}}function Lg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const V0=1024,F0=30*24*60*60*1e3;class $0{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new U0(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=kf();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=F0}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Nn.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=kf(),{heartbeatsToSend:s,unsentEntries:r}=B0(this._heartbeatsCache.heartbeats),i=Ga(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Nn.warn(e),""}}}function kf(){return new Date().toISOString().substring(0,10)}function B0(n,t=V0){const e=[];let s=n.slice();for(const r of n){const i=e.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Sf(e)>t){i.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),Sf(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class U0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kx()?Sx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await L0(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return Af(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return Af(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Sf(n){return Ga(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function j0(n){Hs(new ls("platform-logger",t=>new e0(t),"PRIVATE")),Hs(new ls("heartbeat",t=>new $0(t),"PRIVATE")),ln(du,Tf,n),ln(du,Tf,"esm2017"),ln("fire-js","")}j0("");var z0="firebase",H0="10.14.1";/**
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
 */ln(z0,H0,"app");var Cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ls,Vg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,b){function x(){}x.prototype=b.prototype,T.D=b.prototype,T.prototype=new x,T.prototype.constructor=T,T.C=function(I,S,P){for(var k=Array(arguments.length-2),X=2;X<arguments.length;X++)k[X-2]=arguments[X];return b.prototype[S].apply(I,k)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,e),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(T,b,x){x||(x=0);var I=Array(16);if(typeof b=="string")for(var S=0;16>S;++S)I[S]=b.charCodeAt(x++)|b.charCodeAt(x++)<<8|b.charCodeAt(x++)<<16|b.charCodeAt(x++)<<24;else for(S=0;16>S;++S)I[S]=b[x++]|b[x++]<<8|b[x++]<<16|b[x++]<<24;b=T.g[0],x=T.g[1],S=T.g[2];var P=T.g[3],k=b+(P^x&(S^P))+I[0]+3614090360&4294967295;b=x+(k<<7&4294967295|k>>>25),k=P+(S^b&(x^S))+I[1]+3905402710&4294967295,P=b+(k<<12&4294967295|k>>>20),k=S+(x^P&(b^x))+I[2]+606105819&4294967295,S=P+(k<<17&4294967295|k>>>15),k=x+(b^S&(P^b))+I[3]+3250441966&4294967295,x=S+(k<<22&4294967295|k>>>10),k=b+(P^x&(S^P))+I[4]+4118548399&4294967295,b=x+(k<<7&4294967295|k>>>25),k=P+(S^b&(x^S))+I[5]+1200080426&4294967295,P=b+(k<<12&4294967295|k>>>20),k=S+(x^P&(b^x))+I[6]+2821735955&4294967295,S=P+(k<<17&4294967295|k>>>15),k=x+(b^S&(P^b))+I[7]+4249261313&4294967295,x=S+(k<<22&4294967295|k>>>10),k=b+(P^x&(S^P))+I[8]+1770035416&4294967295,b=x+(k<<7&4294967295|k>>>25),k=P+(S^b&(x^S))+I[9]+2336552879&4294967295,P=b+(k<<12&4294967295|k>>>20),k=S+(x^P&(b^x))+I[10]+4294925233&4294967295,S=P+(k<<17&4294967295|k>>>15),k=x+(b^S&(P^b))+I[11]+2304563134&4294967295,x=S+(k<<22&4294967295|k>>>10),k=b+(P^x&(S^P))+I[12]+1804603682&4294967295,b=x+(k<<7&4294967295|k>>>25),k=P+(S^b&(x^S))+I[13]+4254626195&4294967295,P=b+(k<<12&4294967295|k>>>20),k=S+(x^P&(b^x))+I[14]+2792965006&4294967295,S=P+(k<<17&4294967295|k>>>15),k=x+(b^S&(P^b))+I[15]+1236535329&4294967295,x=S+(k<<22&4294967295|k>>>10),k=b+(S^P&(x^S))+I[1]+4129170786&4294967295,b=x+(k<<5&4294967295|k>>>27),k=P+(x^S&(b^x))+I[6]+3225465664&4294967295,P=b+(k<<9&4294967295|k>>>23),k=S+(b^x&(P^b))+I[11]+643717713&4294967295,S=P+(k<<14&4294967295|k>>>18),k=x+(P^b&(S^P))+I[0]+3921069994&4294967295,x=S+(k<<20&4294967295|k>>>12),k=b+(S^P&(x^S))+I[5]+3593408605&4294967295,b=x+(k<<5&4294967295|k>>>27),k=P+(x^S&(b^x))+I[10]+38016083&4294967295,P=b+(k<<9&4294967295|k>>>23),k=S+(b^x&(P^b))+I[15]+3634488961&4294967295,S=P+(k<<14&4294967295|k>>>18),k=x+(P^b&(S^P))+I[4]+3889429448&4294967295,x=S+(k<<20&4294967295|k>>>12),k=b+(S^P&(x^S))+I[9]+568446438&4294967295,b=x+(k<<5&4294967295|k>>>27),k=P+(x^S&(b^x))+I[14]+3275163606&4294967295,P=b+(k<<9&4294967295|k>>>23),k=S+(b^x&(P^b))+I[3]+4107603335&4294967295,S=P+(k<<14&4294967295|k>>>18),k=x+(P^b&(S^P))+I[8]+1163531501&4294967295,x=S+(k<<20&4294967295|k>>>12),k=b+(S^P&(x^S))+I[13]+2850285829&4294967295,b=x+(k<<5&4294967295|k>>>27),k=P+(x^S&(b^x))+I[2]+4243563512&4294967295,P=b+(k<<9&4294967295|k>>>23),k=S+(b^x&(P^b))+I[7]+1735328473&4294967295,S=P+(k<<14&4294967295|k>>>18),k=x+(P^b&(S^P))+I[12]+2368359562&4294967295,x=S+(k<<20&4294967295|k>>>12),k=b+(x^S^P)+I[5]+4294588738&4294967295,b=x+(k<<4&4294967295|k>>>28),k=P+(b^x^S)+I[8]+2272392833&4294967295,P=b+(k<<11&4294967295|k>>>21),k=S+(P^b^x)+I[11]+1839030562&4294967295,S=P+(k<<16&4294967295|k>>>16),k=x+(S^P^b)+I[14]+4259657740&4294967295,x=S+(k<<23&4294967295|k>>>9),k=b+(x^S^P)+I[1]+2763975236&4294967295,b=x+(k<<4&4294967295|k>>>28),k=P+(b^x^S)+I[4]+1272893353&4294967295,P=b+(k<<11&4294967295|k>>>21),k=S+(P^b^x)+I[7]+4139469664&4294967295,S=P+(k<<16&4294967295|k>>>16),k=x+(S^P^b)+I[10]+3200236656&4294967295,x=S+(k<<23&4294967295|k>>>9),k=b+(x^S^P)+I[13]+681279174&4294967295,b=x+(k<<4&4294967295|k>>>28),k=P+(b^x^S)+I[0]+3936430074&4294967295,P=b+(k<<11&4294967295|k>>>21),k=S+(P^b^x)+I[3]+3572445317&4294967295,S=P+(k<<16&4294967295|k>>>16),k=x+(S^P^b)+I[6]+76029189&4294967295,x=S+(k<<23&4294967295|k>>>9),k=b+(x^S^P)+I[9]+3654602809&4294967295,b=x+(k<<4&4294967295|k>>>28),k=P+(b^x^S)+I[12]+3873151461&4294967295,P=b+(k<<11&4294967295|k>>>21),k=S+(P^b^x)+I[15]+530742520&4294967295,S=P+(k<<16&4294967295|k>>>16),k=x+(S^P^b)+I[2]+3299628645&4294967295,x=S+(k<<23&4294967295|k>>>9),k=b+(S^(x|~P))+I[0]+4096336452&4294967295,b=x+(k<<6&4294967295|k>>>26),k=P+(x^(b|~S))+I[7]+1126891415&4294967295,P=b+(k<<10&4294967295|k>>>22),k=S+(b^(P|~x))+I[14]+2878612391&4294967295,S=P+(k<<15&4294967295|k>>>17),k=x+(P^(S|~b))+I[5]+4237533241&4294967295,x=S+(k<<21&4294967295|k>>>11),k=b+(S^(x|~P))+I[12]+1700485571&4294967295,b=x+(k<<6&4294967295|k>>>26),k=P+(x^(b|~S))+I[3]+2399980690&4294967295,P=b+(k<<10&4294967295|k>>>22),k=S+(b^(P|~x))+I[10]+4293915773&4294967295,S=P+(k<<15&4294967295|k>>>17),k=x+(P^(S|~b))+I[1]+2240044497&4294967295,x=S+(k<<21&4294967295|k>>>11),k=b+(S^(x|~P))+I[8]+1873313359&4294967295,b=x+(k<<6&4294967295|k>>>26),k=P+(x^(b|~S))+I[15]+4264355552&4294967295,P=b+(k<<10&4294967295|k>>>22),k=S+(b^(P|~x))+I[6]+2734768916&4294967295,S=P+(k<<15&4294967295|k>>>17),k=x+(P^(S|~b))+I[13]+1309151649&4294967295,x=S+(k<<21&4294967295|k>>>11),k=b+(S^(x|~P))+I[4]+4149444226&4294967295,b=x+(k<<6&4294967295|k>>>26),k=P+(x^(b|~S))+I[11]+3174756917&4294967295,P=b+(k<<10&4294967295|k>>>22),k=S+(b^(P|~x))+I[2]+718787259&4294967295,S=P+(k<<15&4294967295|k>>>17),k=x+(P^(S|~b))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+b&4294967295,T.g[1]=T.g[1]+(S+(k<<21&4294967295|k>>>11))&4294967295,T.g[2]=T.g[2]+S&4294967295,T.g[3]=T.g[3]+P&4294967295}s.prototype.u=function(T,b){b===void 0&&(b=T.length);for(var x=b-this.blockSize,I=this.B,S=this.h,P=0;P<b;){if(S==0)for(;P<=x;)r(this,T,P),P+=this.blockSize;if(typeof T=="string"){for(;P<b;)if(I[S++]=T.charCodeAt(P++),S==this.blockSize){r(this,I),S=0;break}}else for(;P<b;)if(I[S++]=T[P++],S==this.blockSize){r(this,I),S=0;break}}this.h=S,this.o+=b},s.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var b=1;b<T.length-8;++b)T[b]=0;var x=8*this.o;for(b=T.length-8;b<T.length;++b)T[b]=x&255,x/=256;for(this.u(T),T=Array(16),b=x=0;4>b;++b)for(var I=0;32>I;I+=8)T[x++]=this.g[b]>>>I&255;return T};function i(T,b){var x=a;return Object.prototype.hasOwnProperty.call(x,T)?x[T]:x[T]=b(T)}function o(T,b){this.h=b;for(var x=[],I=!0,S=T.length-1;0<=S;S--){var P=T[S]|0;I&&P==b||(x[S]=P,I=!1)}this.g=x}var a={};function c(T){return-128<=T&&128>T?i(T,function(b){return new o([b|0],0>b?-1:0)}):new o([T|0],0>T?-1:0)}function l(T){if(isNaN(T)||!isFinite(T))return h;if(0>T)return y(l(-T));for(var b=[],x=1,I=0;T>=x;I++)b[I]=T/x|0,x*=4294967296;return new o(b,0)}function d(T,b){if(T.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(T.charAt(0)=="-")return y(d(T.substring(1),b));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=l(Math.pow(b,8)),I=h,S=0;S<T.length;S+=8){var P=Math.min(8,T.length-S),k=parseInt(T.substring(S,S+P),b);8>P?(P=l(Math.pow(b,P)),I=I.j(P).add(l(k))):(I=I.j(x),I=I.add(l(k)))}return I}var h=c(0),f=c(1),m=c(16777216);n=o.prototype,n.m=function(){if(v(this))return-y(this).m();for(var T=0,b=1,x=0;x<this.g.length;x++){var I=this.i(x);T+=(0<=I?I:4294967296+I)*b,b*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(g(this))return"0";if(v(this))return"-"+y(this).toString(T);for(var b=l(Math.pow(T,6)),x=this,I="";;){var S=D(x,b).g;x=E(x,S.j(b));var P=((0<x.g.length?x.g[0]:x.h)>>>0).toString(T);if(x=S,g(x))return P+I;for(;6>P.length;)P="0"+P;I=P+I}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function g(T){if(T.h!=0)return!1;for(var b=0;b<T.g.length;b++)if(T.g[b]!=0)return!1;return!0}function v(T){return T.h==-1}n.l=function(T){return T=E(this,T),v(T)?-1:g(T)?0:1};function y(T){for(var b=T.g.length,x=[],I=0;I<b;I++)x[I]=~T.g[I];return new o(x,~T.h).add(f)}n.abs=function(){return v(this)?y(this):this},n.add=function(T){for(var b=Math.max(this.g.length,T.g.length),x=[],I=0,S=0;S<=b;S++){var P=I+(this.i(S)&65535)+(T.i(S)&65535),k=(P>>>16)+(this.i(S)>>>16)+(T.i(S)>>>16);I=k>>>16,P&=65535,k&=65535,x[S]=k<<16|P}return new o(x,x[x.length-1]&-2147483648?-1:0)};function E(T,b){return T.add(y(b))}n.j=function(T){if(g(this)||g(T))return h;if(v(this))return v(T)?y(this).j(y(T)):y(y(this).j(T));if(v(T))return y(this.j(y(T)));if(0>this.l(m)&&0>T.l(m))return l(this.m()*T.m());for(var b=this.g.length+T.g.length,x=[],I=0;I<2*b;I++)x[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<T.g.length;S++){var P=this.i(I)>>>16,k=this.i(I)&65535,X=T.i(S)>>>16,j=T.i(S)&65535;x[2*I+2*S]+=k*j,A(x,2*I+2*S),x[2*I+2*S+1]+=P*j,A(x,2*I+2*S+1),x[2*I+2*S+1]+=k*X,A(x,2*I+2*S+1),x[2*I+2*S+2]+=P*X,A(x,2*I+2*S+2)}for(I=0;I<b;I++)x[I]=x[2*I+1]<<16|x[2*I];for(I=b;I<2*b;I++)x[I]=0;return new o(x,0)};function A(T,b){for(;(T[b]&65535)!=T[b];)T[b+1]+=T[b]>>>16,T[b]&=65535,b++}function C(T,b){this.g=T,this.h=b}function D(T,b){if(g(b))throw Error("division by zero");if(g(T))return new C(h,h);if(v(T))return b=D(y(T),b),new C(y(b.g),y(b.h));if(v(b))return b=D(T,y(b)),new C(y(b.g),b.h);if(30<T.g.length){if(v(T)||v(b))throw Error("slowDivide_ only works with positive integers.");for(var x=f,I=b;0>=I.l(T);)x=R(x),I=R(I);var S=M(x,1),P=M(I,1);for(I=M(I,2),x=M(x,2);!g(I);){var k=P.add(I);0>=k.l(T)&&(S=S.add(x),P=k),I=M(I,1),x=M(x,1)}return b=E(T,S.j(b)),new C(S,b)}for(S=h;0<=T.l(b);){for(x=Math.max(1,Math.floor(T.m()/b.m())),I=Math.ceil(Math.log(x)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),P=l(x),k=P.j(b);v(k)||0<k.l(T);)x-=I,P=l(x),k=P.j(b);g(P)&&(P=f),S=S.add(P),T=E(T,k)}return new C(S,T)}n.A=function(T){return D(this,T).h},n.and=function(T){for(var b=Math.max(this.g.length,T.g.length),x=[],I=0;I<b;I++)x[I]=this.i(I)&T.i(I);return new o(x,this.h&T.h)},n.or=function(T){for(var b=Math.max(this.g.length,T.g.length),x=[],I=0;I<b;I++)x[I]=this.i(I)|T.i(I);return new o(x,this.h|T.h)},n.xor=function(T){for(var b=Math.max(this.g.length,T.g.length),x=[],I=0;I<b;I++)x[I]=this.i(I)^T.i(I);return new o(x,this.h^T.h)};function R(T){for(var b=T.g.length+1,x=[],I=0;I<b;I++)x[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(x,T.h)}function M(T,b){var x=b>>5;b%=32;for(var I=T.g.length-x,S=[],P=0;P<I;P++)S[P]=0<b?T.i(P+x)>>>b|T.i(P+x+1)<<32-b:T.i(P+x);return new o(S,T.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Vg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,Ls=o}).apply(typeof Cf<"u"?Cf:typeof self<"u"?self:typeof window<"u"?window:{});var oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fg,Mi,$g,Ra,pu,Bg,Ug,jg;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,_){return u==Array.prototype||u==Object.prototype||(u[p]=_.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof oa=="object"&&oa];for(var p=0;p<u.length;++p){var _=u[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=e(this);function r(u,p){if(p)t:{var _=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var O=u[w];if(!(O in _))break t;_=_[O]}u=u[u.length-1],w=_[u],p=p(w),p!=w&&p!=null&&t(_,u,{configurable:!0,writable:!0,value:p})}}function i(u,p){u instanceof String&&(u+="");var _=0,w=!1,O={next:function(){if(!w&&_<u.length){var L=_++;return{value:p(L,u[L]),done:!1}}return w=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}r("Array.prototype.values",function(u){return u||function(){return i(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function l(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function d(u,p,_){return u.call.apply(u.bind,arguments)}function h(u,p,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,w),u.apply(p,O)}}return function(){return u.apply(p,arguments)}}function f(u,p,_){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,f.apply(null,arguments)}function m(u,p){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function g(u,p){function _(){}_.prototype=p.prototype,u.aa=p.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,O,L){for(var H=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)H[Ct-2]=arguments[Ct];return p.prototype[O].apply(w,H)}}function v(u){const p=u.length;if(0<p){const _=Array(p);for(let w=0;w<p;w++)_[w]=u[w];return _}return[]}function y(u,p){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(c(w)){const O=u.length||0,L=w.length||0;u.length=O+L;for(let H=0;H<L;H++)u[O+H]=w[H]}else u.push(w)}}class E{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function A(u){return/^[\s\xa0]*$/.test(u)}function C(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function D(u){return D[" "](u),u}D[" "]=function(){};var R=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function M(u,p,_){for(const w in u)p.call(_,u[w],w,u)}function T(u,p){for(const _ in u)p.call(void 0,u[_],_,u)}function b(u){const p={};for(const _ in u)p[_]=u[_];return p}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(u,p){let _,w;for(let O=1;O<arguments.length;O++){w=arguments[O];for(_ in w)u[_]=w[_];for(let L=0;L<x.length;L++)_=x[L],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function S(u){var p=1;u=u.split(":");const _=[];for(;0<p&&u.length;)_.push(u.shift()),p--;return u.length&&_.push(u.join(":")),_}function P(u){a.setTimeout(()=>{throw u},0)}function k(){var u=W;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class X{constructor(){this.h=this.g=null}add(p,_){const w=j.get();w.set(p,_),this.h?this.h.next=w:this.g=w,this.h=w}}var j=new E(()=>new B,u=>u.reset());class B{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let V,q=!1,W=new X,tt=()=>{const u=a.Promise.resolve(void 0);V=()=>{u.then(at)}};var at=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(_){P(_)}var p=j;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}q=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function K(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}K.prototype.h=function(){this.defaultPrevented=!0};var wt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};a.addEventListener("test",_,p),a.removeEventListener("test",_,p)}catch{}return u}();function St(u,p){if(K.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(R){t:{try{D(p.nodeName);var O=!0;break t}catch{}O=!1}O||(p=null)}}else _=="mouseover"?p=u.fromElement:_=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:ue[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&St.aa.h.call(this)}}g(St,K);var ue={2:"touch",3:"pen",4:"mouse"};St.prototype.h=function(){St.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var tn="closure_listenable_"+(1e6*Math.random()|0),Jr=0;function Zr(u,p,_,w,O){this.listener=u,this.proxy=null,this.src=p,this.type=_,this.capture=!!w,this.ha=O,this.key=++Jr,this.da=this.fa=!1}function Un(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function cr(u){this.src=u,this.g={},this.h=0}cr.prototype.add=function(u,p,_,w,O){var L=u.toString();u=this.g[L],u||(u=this.g[L]=[],this.h++);var H=ti(u,p,w,O);return-1<H?(p=u[H],_||(p.fa=!1)):(p=new Zr(p,this.src,L,!!w,O),p.fa=_,u.push(p)),p};function He(u,p){var _=p.type;if(_ in u.g){var w=u.g[_],O=Array.prototype.indexOf.call(w,p,void 0),L;(L=0<=O)&&Array.prototype.splice.call(w,O,1),L&&(Un(p),u.g[_].length==0&&(delete u.g[_],u.h--))}}function ti(u,p,_,w){for(var O=0;O<u.length;++O){var L=u[O];if(!L.da&&L.listener==p&&L.capture==!!_&&L.ha==w)return O}return-1}var ei="closure_lm_"+(1e6*Math.random()|0),ne={};function Oe(u,p,_,w,O){if(Array.isArray(p)){for(var L=0;L<p.length;L++)Oe(u,p[L],_,w,O);return null}return _=wh(_),u&&u[tn]?u.K(p,_,l(w)?!!w.capture:!1,O):ni(u,p,_,!1,w,O)}function ni(u,p,_,w,O,L){if(!p)throw Error("Invalid event type");var H=l(O)?!!O.capture:!!O,Ct=ll(u);if(Ct||(u[ei]=Ct=new cr(u)),_=Ct.add(p,_,w,H,L),_.proxy)return _;if(w=si(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)wt||(O=H),O===void 0&&(O=!1),u.addEventListener(p.toString(),w,O);else if(u.attachEvent)u.attachEvent(xh(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function si(){function u(_){return p.call(u.src,u.listener,_)}const p=Vb;return u}function ri(u,p,_,w,O){if(Array.isArray(p))for(var L=0;L<p.length;L++)ri(u,p[L],_,w,O);else w=l(w)?!!w.capture:!!w,_=wh(_),u&&u[tn]?(u=u.i,p=String(p).toString(),p in u.g&&(L=u.g[p],_=ti(L,_,w,O),-1<_&&(Un(L[_]),Array.prototype.splice.call(L,_,1),L.length==0&&(delete u.g[p],u.h--)))):u&&(u=ll(u))&&(p=u.g[p.toString()],u=-1,p&&(u=ti(p,_,w,O)),(_=-1<u?p[u]:null)&&cl(_))}function cl(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[tn])He(p.i,u);else{var _=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(_,w,u.capture):p.detachEvent?p.detachEvent(xh(_),w):p.addListener&&p.removeListener&&p.removeListener(w),(_=ll(p))?(He(_,u),_.h==0&&(_.src=null,p[ei]=null)):Un(u)}}}function xh(u){return u in ne?ne[u]:ne[u]="on"+u}function Vb(u,p){if(u.da)u=!0;else{p=new St(p,this);var _=u.listener,w=u.ha||u.src;u.fa&&cl(u),u=_.call(w,p)}return u}function ll(u){return u=u[ei],u instanceof cr?u:null}var ul="__closure_events_fn_"+(1e9*Math.random()>>>0);function wh(u){return typeof u=="function"?u:(u[ul]||(u[ul]=function(p){return u.handleEvent(p)}),u[ul])}function pe(){ht.call(this),this.i=new cr(this),this.M=this,this.F=null}g(pe,ht),pe.prototype[tn]=!0,pe.prototype.removeEventListener=function(u,p,_,w){ri(this,u,p,_,w)};function ke(u,p){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new K(p,u);else if(p instanceof K)p.target=p.target||u;else{var O=p;p=new K(w,u),I(p,O)}if(O=!0,_)for(var L=_.length-1;0<=L;L--){var H=p.g=_[L];O=Ho(H,w,!0,p)&&O}if(H=p.g=u,O=Ho(H,w,!0,p)&&O,O=Ho(H,w,!1,p)&&O,_)for(L=0;L<_.length;L++)H=p.g=_[L],O=Ho(H,w,!1,p)&&O}pe.prototype.N=function(){if(pe.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var _=u.g[p],w=0;w<_.length;w++)Un(_[w]);delete u.g[p],u.h--}}this.F=null},pe.prototype.K=function(u,p,_,w){return this.i.add(String(u),p,!1,_,w)},pe.prototype.L=function(u,p,_,w){return this.i.add(String(u),p,!0,_,w)};function Ho(u,p,_,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var O=!0,L=0;L<p.length;++L){var H=p[L];if(H&&!H.da&&H.capture==_){var Ct=H.listener,de=H.ha||H.src;H.fa&&He(u.i,H),O=Ct.call(de,w)!==!1&&O}}return O&&!w.defaultPrevented}function Eh(u,p,_){if(typeof u=="function")_&&(u=f(u,_));else if(u&&typeof u.handleEvent=="function")u=f(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function Th(u){u.g=Eh(()=>{u.g=null,u.i&&(u.i=!1,Th(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Fb extends ht{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Th(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ii(u){ht.call(this),this.h=u,this.g={}}g(ii,ht);var Ih=[];function Ah(u){M(u.g,function(p,_){this.g.hasOwnProperty(_)&&cl(p)},u),u.g={}}ii.prototype.N=function(){ii.aa.N.call(this),Ah(this)},ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dl=a.JSON.stringify,$b=a.JSON.parse,Bb=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function hl(){}hl.prototype.h=null;function kh(u){return u.h||(u.h=u.i())}function Sh(){}var oi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fl(){K.call(this,"d")}g(fl,K);function pl(){K.call(this,"c")}g(pl,K);var vs={},Ch=null;function qo(){return Ch=Ch||new pe}vs.La="serverreachability";function Rh(u){K.call(this,vs.La,u)}g(Rh,K);function ai(u){const p=qo();ke(p,new Rh(p))}vs.STAT_EVENT="statevent";function Ph(u,p){K.call(this,vs.STAT_EVENT,u),this.stat=p}g(Ph,K);function Se(u){const p=qo();ke(p,new Ph(p,u))}vs.Ma="timingevent";function Dh(u,p){K.call(this,vs.Ma,u),this.size=p}g(Dh,K);function ci(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function li(){this.g=!0}li.prototype.xa=function(){this.g=!1};function Ub(u,p,_,w,O,L){u.info(function(){if(u.g)if(L)for(var H="",Ct=L.split("&"),de=0;de<Ct.length;de++){var _t=Ct[de].split("=");if(1<_t.length){var me=_t[0];_t=_t[1];var ge=me.split("_");H=2<=ge.length&&ge[1]=="type"?H+(me+"="+_t+"&"):H+(me+"=redacted&")}}else H=null;else H=L;return"XMLHTTP REQ ("+w+") [attempt "+O+"]: "+p+`
`+_+`
`+H})}function jb(u,p,_,w,O,L,H){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+O+"]: "+p+`
`+_+`
`+L+" "+H})}function lr(u,p,_,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Hb(u,_)+(w?" "+w:"")})}function zb(u,p){u.info(function(){return"TIMEOUT: "+p})}li.prototype.info=function(){};function Hb(u,p){if(!u.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var O=w[1];if(Array.isArray(O)&&!(1>O.length)){var L=O[0];if(L!="noop"&&L!="stop"&&L!="close")for(var H=1;H<O.length;H++)O[H]=""}}}}return dl(_)}catch{return p}}var Wo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ml;function Go(){}g(Go,hl),Go.prototype.g=function(){return new XMLHttpRequest},Go.prototype.i=function(){return{}},ml=new Go;function jn(u,p,_,w){this.j=u,this.i=p,this.l=_,this.R=w||1,this.U=new ii(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oh}function Oh(){this.i=null,this.g="",this.h=!1}var Nh={},gl={};function _l(u,p,_){u.L=1,u.v=Xo(yn(p)),u.m=_,u.P=!0,Lh(u,null)}function Lh(u,p){u.F=Date.now(),Yo(u),u.A=yn(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Qh(_.i,"t",w),u.C=0,_=u.j.J,u.h=new Oh,u.g=mf(u.j,_?p:null,!u.m),0<u.O&&(u.M=new Fb(f(u.Y,u,u.g),u.O)),p=u.U,_=u.g,w=u.ca;var O="readystatechange";Array.isArray(O)||(O&&(Ih[0]=O.toString()),O=Ih);for(var L=0;L<O.length;L++){var H=Oe(_,O[L],w||p.handleEvent,!1,p.h||p);if(!H)break;p.g[H.key]=H}p=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),ai(),Ub(u.i,u.u,u.A,u.l,u.R,u.m)}jn.prototype.ca=function(u){u=u.target;const p=this.M;p&&vn(u)==3?p.j():this.Y(u)},jn.prototype.Y=function(u){try{if(u==this.g)t:{const ge=vn(this.g);var p=this.g.Ba();const hr=this.g.Z();if(!(3>ge)&&(ge!=3||this.g&&(this.h.h||this.g.oa()||sf(this.g)))){this.J||ge!=4||p==7||(p==8||0>=hr?ai(3):ai(2)),yl(this);var _=this.g.Z();this.X=_;e:if(Vh(this)){var w=sf(this.g);u="";var O=w.length,L=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bs(this),ui(this);var H="";break e}this.h.i=new a.TextDecoder}for(p=0;p<O;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(L&&p==O-1)});w.length=0,this.h.g+=u,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=_==200,jb(this.i,this.u,this.A,this.l,this.R,ge,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Ct,de=this.g;if((Ct=de.g?de.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(Ct)){var _t=Ct;break e}}_t=null}if(_=_t)lr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vl(this,_);else{this.o=!1,this.s=3,Se(12),bs(this),ui(this);break t}}if(this.P){_=!0;let qe;for(;!this.J&&this.C<H.length;)if(qe=qb(this,H),qe==gl){ge==4&&(this.s=4,Se(14),_=!1),lr(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==Nh){this.s=4,Se(15),lr(this.i,this.l,H,"[Invalid Chunk]"),_=!1;break}else lr(this.i,this.l,qe,null),vl(this,qe);if(Vh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ge!=4||H.length!=0||this.h.h||(this.s=1,Se(16),_=!1),this.o=this.o&&_,!_)lr(this.i,this.l,H,"[Invalid Chunked Response]"),bs(this),ui(this);else if(0<H.length&&!this.W){this.W=!0;var me=this.j;me.g==this&&me.ba&&!me.M&&(me.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Il(me),me.M=!0,Se(11))}}else lr(this.i,this.l,H,null),vl(this,H);ge==4&&bs(this),this.o&&!this.J&&(ge==4?df(this.j,this):(this.o=!1,Yo(this)))}else cx(this.g),_==400&&0<H.indexOf("Unknown SID")?(this.s=3,Se(12)):(this.s=0,Se(13)),bs(this),ui(this)}}}catch{}finally{}};function Vh(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function qb(u,p){var _=u.C,w=p.indexOf(`
`,_);return w==-1?gl:(_=Number(p.substring(_,w)),isNaN(_)?Nh:(w+=1,w+_>p.length?gl:(p=p.slice(w,w+_),u.C=w+_,p)))}jn.prototype.cancel=function(){this.J=!0,bs(this)};function Yo(u){u.S=Date.now()+u.I,Fh(u,u.I)}function Fh(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=ci(f(u.ba,u),p)}function yl(u){u.B&&(a.clearTimeout(u.B),u.B=null)}jn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(zb(this.i,this.A),this.L!=2&&(ai(),Se(17)),bs(this),this.s=2,ui(this)):Fh(this,this.S-u)};function ui(u){u.j.G==0||u.J||df(u.j,u)}function bs(u){yl(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Ah(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function vl(u,p){try{var _=u.j;if(_.G!=0&&(_.g==u||bl(_.h,u))){if(!u.K&&bl(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var O=w;if(O[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)sa(_),ea(_);else break t;Tl(_),Se(18)}}else _.za=O[1],0<_.za-_.T&&37500>O[2]&&_.F&&_.v==0&&!_.C&&(_.C=ci(f(_.Za,_),6e3));if(1>=Uh(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else ws(_,11)}else if((u.K||_.g==u)&&sa(_),!A(p))for(O=_.Da.g.parse(p),p=0;p<O.length;p++){let _t=O[p];if(_.T=_t[0],_t=_t[1],_.G==2)if(_t[0]=="c"){_.K=_t[1],_.ia=_t[2];const me=_t[3];me!=null&&(_.la=me,_.j.info("VER="+_.la));const ge=_t[4];ge!=null&&(_.Aa=ge,_.j.info("SVER="+_.Aa));const hr=_t[5];hr!=null&&typeof hr=="number"&&0<hr&&(w=1.5*hr,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const qe=u.g;if(qe){const ia=qe.g?qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ia){var L=w.h;L.g||ia.indexOf("spdy")==-1&&ia.indexOf("quic")==-1&&ia.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(xl(L,L.h),L.h=null))}if(w.D){const Al=qe.g?qe.g.getResponseHeader("X-HTTP-Session-Id"):null;Al&&(w.ya=Al,Dt(w.I,w.D,Al))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var H=u;if(w.qa=pf(w,w.J?w.ia:null,w.W),H.K){jh(w.h,H);var Ct=H,de=w.L;de&&(Ct.I=de),Ct.B&&(yl(Ct),Yo(Ct)),w.g=H}else lf(w);0<_.i.length&&na(_)}else _t[0]!="stop"&&_t[0]!="close"||ws(_,7);else _.G==3&&(_t[0]=="stop"||_t[0]=="close"?_t[0]=="stop"?ws(_,7):El(_):_t[0]!="noop"&&_.l&&_.l.ta(_t),_.v=0)}}ai(4)}catch{}}var Wb=class{constructor(u,p){this.g=u,this.map=p}};function $h(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bh(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Uh(u){return u.h?1:u.g?u.g.size:0}function bl(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function xl(u,p){u.g?u.g.add(p):u.h=p}function jh(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}$h.prototype.cancel=function(){if(this.i=zh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function zh(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const _ of u.g.values())p=p.concat(_.D);return p}return v(u.i)}function Gb(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(c(u)){for(var p=[],_=u.length,w=0;w<_;w++)p.push(u[w]);return p}p=[],_=0;for(w in u)p[_++]=u[w];return p}function Yb(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(c(u)||typeof u=="string"){var p=[];u=u.length;for(var _=0;_<u;_++)p.push(_);return p}p=[],_=0;for(const w in u)p[_++]=w;return p}}}function Hh(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(c(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var _=Yb(u),w=Gb(u),O=w.length,L=0;L<O;L++)p.call(void 0,w[L],_&&_[L],u)}var qh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kb(u,p){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),O=null;if(0<=w){var L=u[_].substring(0,w);O=u[_].substring(w+1)}else L=u[_];p(L,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function xs(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof xs){this.h=u.h,Ko(this,u.j),this.o=u.o,this.g=u.g,Qo(this,u.s),this.l=u.l;var p=u.i,_=new fi;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),Wh(this,_),this.m=u.m}else u&&(p=String(u).match(qh))?(this.h=!1,Ko(this,p[1]||"",!0),this.o=di(p[2]||""),this.g=di(p[3]||"",!0),Qo(this,p[4]),this.l=di(p[5]||"",!0),Wh(this,p[6]||"",!0),this.m=di(p[7]||"")):(this.h=!1,this.i=new fi(null,this.h))}xs.prototype.toString=function(){var u=[],p=this.j;p&&u.push(hi(p,Gh,!0),":");var _=this.g;return(_||p=="file")&&(u.push("//"),(p=this.o)&&u.push(hi(p,Gh,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(hi(_,_.charAt(0)=="/"?Jb:Xb,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",hi(_,tx)),u.join("")};function yn(u){return new xs(u)}function Ko(u,p,_){u.j=_?di(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Qo(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Wh(u,p,_){p instanceof fi?(u.i=p,ex(u.i,u.h)):(_||(p=hi(p,Zb)),u.i=new fi(p,u.h))}function Dt(u,p,_){u.i.set(p,_)}function Xo(u){return Dt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function di(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function hi(u,p,_){return typeof u=="string"?(u=encodeURI(u).replace(p,Qb),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Qb(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Gh=/[#\/\?@]/g,Xb=/[#\?:]/g,Jb=/[#\?]/g,Zb=/[#\?@]/g,tx=/#/g;function fi(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function zn(u){u.g||(u.g=new Map,u.h=0,u.i&&Kb(u.i,function(p,_){u.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}n=fi.prototype,n.add=function(u,p){zn(this),this.i=null,u=ur(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(p),this.h+=1,this};function Yh(u,p){zn(u),p=ur(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Kh(u,p){return zn(u),p=ur(u,p),u.g.has(p)}n.forEach=function(u,p){zn(this),this.g.forEach(function(_,w){_.forEach(function(O){u.call(p,O,w,this)},this)},this)},n.na=function(){zn(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let w=0;w<p.length;w++){const O=u[w];for(let L=0;L<O.length;L++)_.push(p[w])}return _},n.V=function(u){zn(this);let p=[];if(typeof u=="string")Kh(this,u)&&(p=p.concat(this.g.get(ur(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)p=p.concat(u[_])}return p},n.set=function(u,p){return zn(this),this.i=null,u=ur(this,u),Kh(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Qh(u,p,_){Yh(u,p),0<_.length&&(u.i=null,u.g.set(ur(u,p),v(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var w=p[_];const L=encodeURIComponent(String(w)),H=this.V(w);for(w=0;w<H.length;w++){var O=L;H[w]!==""&&(O+="="+encodeURIComponent(String(H[w]))),u.push(O)}}return this.i=u.join("&")};function ur(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function ex(u,p){p&&!u.j&&(zn(u),u.i=null,u.g.forEach(function(_,w){var O=w.toLowerCase();w!=O&&(Yh(this,w),Qh(this,O,_))},u)),u.j=p}function nx(u,p){const _=new li;if(a.Image){const w=new Image;w.onload=m(Hn,_,"TestLoadImage: loaded",!0,p,w),w.onerror=m(Hn,_,"TestLoadImage: error",!1,p,w),w.onabort=m(Hn,_,"TestLoadImage: abort",!1,p,w),w.ontimeout=m(Hn,_,"TestLoadImage: timeout",!1,p,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function sx(u,p){const _=new li,w=new AbortController,O=setTimeout(()=>{w.abort(),Hn(_,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(L=>{clearTimeout(O),L.ok?Hn(_,"TestPingServer: ok",!0,p):Hn(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(O),Hn(_,"TestPingServer: error",!1,p)})}function Hn(u,p,_,w,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),w(_)}catch{}}function rx(){this.g=new Bb}function ix(u,p,_){const w=_||"";try{Hh(u,function(O,L){let H=O;l(O)&&(H=dl(O)),p.push(w+L+"="+encodeURIComponent(H))})}catch(O){throw p.push(w+"type="+encodeURIComponent("_badmap")),O}}function Jo(u){this.l=u.Ub||null,this.j=u.eb||!1}g(Jo,hl),Jo.prototype.g=function(){return new Zo(this.l,this.j)},Jo.prototype.i=function(u){return function(){return u}}({});function Zo(u,p){pe.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}g(Zo,pe),n=Zo.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,mi(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,mi(this)),this.g&&(this.readyState=3,mi(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xh(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xh(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?pi(this):mi(this),this.readyState==3&&Xh(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,pi(this))},n.Qa=function(u){this.g&&(this.response=u,pi(this))},n.ga=function(){this.g&&pi(this)};function pi(u){u.readyState=4,u.l=null,u.j=null,u.v=null,mi(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=p.next();return u.join(`\r
`)};function mi(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Zo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Jh(u){let p="";return M(u,function(_,w){p+=w,p+=":",p+=_,p+=`\r
`}),p}function wl(u,p,_){t:{for(w in _){var w=!1;break t}w=!0}w||(_=Jh(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Dt(u,p,_))}function zt(u){pe.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}g(zt,pe);var ox=/^https?$/i,ax=["POST","PUT"];n=zt.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ml.g(),this.v=this.o?kh(this.o):kh(ml),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(L){Zh(this,L);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var O in w)_.set(O,w[O]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const L of w.keys())_.set(L,w.get(L));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(L=>L.toLowerCase()=="content-type"),O=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(ax,p,void 0))||w||O||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,H]of _)this.g.setRequestHeader(L,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nf(this),this.u=!0,this.g.send(u),this.u=!1}catch(L){Zh(this,L)}};function Zh(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,tf(u),ta(u)}function tf(u){u.A||(u.A=!0,ke(u,"complete"),ke(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ke(this,"complete"),ke(this,"abort"),ta(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ta(this,!0)),zt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ef(this):this.bb())},n.bb=function(){ef(this)};function ef(u){if(u.h&&typeof o<"u"&&(!u.v[1]||vn(u)!=4||u.Z()!=2)){if(u.u&&vn(u)==4)Eh(u.Ea,0,u);else if(ke(u,"readystatechange"),vn(u)==4){u.h=!1;try{const H=u.Z();t:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var _;if(!(_=p)){var w;if(w=H===0){var O=String(u.D).match(qh)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),w=!ox.test(O?O.toLowerCase():"")}_=w}if(_)ke(u,"complete"),ke(u,"success");else{u.m=6;try{var L=2<vn(u)?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.Z()+"]",tf(u)}}finally{ta(u)}}}}function ta(u,p){if(u.g){nf(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||ke(u,"ready");try{_.onreadystatechange=w}catch{}}}function nf(u){u.I&&(a.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function vn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),$b(p)}};function sf(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function cx(u){const p={};u=(u.g&&2<=vn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(A(u[w]))continue;var _=S(u[w]);const O=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const L=p[O]||[];p[O]=L,L.push(_)}T(p,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gi(u,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||p}function rf(u){this.Aa=0,this.i=[],this.j=new li,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gi("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gi("baseRetryDelayMs",5e3,u),this.cb=gi("retryDelaySeedMs",1e4,u),this.Wa=gi("forwardChannelMaxRetries",2,u),this.wa=gi("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new $h(u&&u.concurrentRequestLimit),this.Da=new rx,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=rf.prototype,n.la=8,n.G=1,n.connect=function(u,p,_,w){Se(0),this.W=u,this.H=p||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=pf(this,null,this.W),na(this)};function El(u){if(of(u),u.G==3){var p=u.U++,_=yn(u.I);if(Dt(_,"SID",u.K),Dt(_,"RID",p),Dt(_,"TYPE","terminate"),_i(u,_),p=new jn(u,u.j,p),p.L=2,p.v=Xo(yn(_)),_=!1,a.navigator&&a.navigator.sendBeacon)try{_=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&a.Image&&(new Image().src=p.v,_=!0),_||(p.g=mf(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Yo(p)}ff(u)}function ea(u){u.g&&(Il(u),u.g.cancel(),u.g=null)}function of(u){ea(u),u.u&&(a.clearTimeout(u.u),u.u=null),sa(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function na(u){if(!Bh(u.h)&&!u.s){u.s=!0;var p=u.Ga;V||tt(),q||(V(),q=!0),W.add(p,u),u.B=0}}function lx(u,p){return Uh(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=ci(f(u.Ga,u,p),hf(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const O=new jn(this,this.j,u);let L=this.o;if(this.S&&(L?(L=b(L),I(L,this.S)):L=this.S),this.m!==null||this.O||(O.H=L,L=null),this.P)t:{for(var p=0,_=0;_<this.i.length;_++){e:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break e}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=_;break t}if(p===4096||_===this.i.length-1){p=_+1;break t}}p=1e3}else p=1e3;p=cf(this,O,p),_=yn(this.I),Dt(_,"RID",u),Dt(_,"CVER",22),this.D&&Dt(_,"X-HTTP-Session-Id",this.D),_i(this,_),L&&(this.O?p="headers="+encodeURIComponent(String(Jh(L)))+"&"+p:this.m&&wl(_,this.m,L)),xl(this.h,O),this.Ua&&Dt(_,"TYPE","init"),this.P?(Dt(_,"$req",p),Dt(_,"SID","null"),O.T=!0,_l(O,_,null)):_l(O,_,p),this.G=2}}else this.G==3&&(u?af(this,u):this.i.length==0||Bh(this.h)||af(this))};function af(u,p){var _;p?_=p.l:_=u.U++;const w=yn(u.I);Dt(w,"SID",u.K),Dt(w,"RID",_),Dt(w,"AID",u.T),_i(u,w),u.m&&u.o&&wl(w,u.m,u.o),_=new jn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),p&&(u.i=p.D.concat(u.i)),p=cf(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),xl(u.h,_),_l(_,w,p)}function _i(u,p){u.H&&M(u.H,function(_,w){Dt(p,w,_)}),u.l&&Hh({},function(_,w){Dt(p,w,_)})}function cf(u,p,_){_=Math.min(u.i.length,_);var w=u.l?f(u.l.Na,u.l,u):null;t:{var O=u.i;let L=-1;for(;;){const H=["count="+_];L==-1?0<_?(L=O[0].g,H.push("ofs="+L)):L=0:H.push("ofs="+L);let Ct=!0;for(let de=0;de<_;de++){let _t=O[de].g;const me=O[de].map;if(_t-=L,0>_t)L=Math.max(0,O[de].g-100),Ct=!1;else try{ix(me,H,"req"+_t+"_")}catch{w&&w(me)}}if(Ct){w=H.join("&");break t}}}return u=u.i.splice(0,_),p.D=u,w}function lf(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;V||tt(),q||(V(),q=!0),W.add(p,u),u.v=0}}function Tl(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=ci(f(u.Fa,u),hf(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,uf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=ci(f(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Se(10),ea(this),uf(this))};function Il(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function uf(u){u.g=new jn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=yn(u.qa);Dt(p,"RID","rpc"),Dt(p,"SID",u.K),Dt(p,"AID",u.T),Dt(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&Dt(p,"TO",u.ja),Dt(p,"TYPE","xmlhttp"),_i(u,p),u.m&&u.o&&wl(p,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Xo(yn(p)),_.m=null,_.P=!0,Lh(_,u)}n.Za=function(){this.C!=null&&(this.C=null,ea(this),Tl(this),Se(19))};function sa(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function df(u,p){var _=null;if(u.g==p){sa(u),Il(u),u.g=null;var w=2}else if(bl(u.h,p))_=p.D,jh(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var O=u.B;w=qo(),ke(w,new Dh(w,_)),na(u)}else lf(u);else if(O=p.s,O==3||O==0&&0<p.X||!(w==1&&lx(u,p)||w==2&&Tl(u)))switch(_&&0<_.length&&(p=u.h,p.i=p.i.concat(_)),O){case 1:ws(u,5);break;case 4:ws(u,10);break;case 3:ws(u,6);break;default:ws(u,2)}}}function hf(u,p){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*p}function ws(u,p){if(u.j.info("Error code "+p),p==2){var _=f(u.fb,u),w=u.Xa;const O=!w;w=new xs(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ko(w,"https"),Xo(w),O?nx(w.toString(),_):sx(w.toString(),_)}else Se(2);u.G=0,u.l&&u.l.sa(p),ff(u),of(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function ff(u){if(u.G=0,u.ka=[],u.l){const p=zh(u.h);(p.length!=0||u.i.length!=0)&&(y(u.ka,p),y(u.ka,u.i),u.h.i.length=0,v(u.i),u.i.length=0),u.l.ra()}}function pf(u,p,_){var w=_ instanceof xs?yn(_):new xs(_);if(w.g!="")p&&(w.g=p+"."+w.g),Qo(w,w.s);else{var O=a.location;w=O.protocol,p=p?p+"."+O.hostname:O.hostname,O=+O.port;var L=new xs(null);w&&Ko(L,w),p&&(L.g=p),O&&Qo(L,O),_&&(L.l=_),w=L}return _=u.D,p=u.ya,_&&p&&Dt(w,_,p),Dt(w,"VER",u.la),_i(u,w),w}function mf(u,p,_){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new zt(new Jo({eb:_})):new zt(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function gf(){}n=gf.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ra(){}ra.prototype.g=function(u,p){return new Ne(u,p)};function Ne(u,p){pe.call(this),this.g=new rf(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!A(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!A(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new dr(this)}g(Ne,pe),Ne.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ne.prototype.close=function(){El(this.g)},Ne.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=dl(u),u=_);p.i.push(new Wb(p.Ya++,u)),p.G==3&&na(p)},Ne.prototype.N=function(){this.g.l=null,delete this.j,El(this.g),delete this.g,Ne.aa.N.call(this)};function _f(u){fl.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){t:{for(const _ in p){u=_;break t}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}g(_f,fl);function yf(){pl.call(this),this.status=1}g(yf,pl);function dr(u){this.g=u}g(dr,gf),dr.prototype.ua=function(){ke(this.g,"a")},dr.prototype.ta=function(u){ke(this.g,new _f(u))},dr.prototype.sa=function(u){ke(this.g,new yf)},dr.prototype.ra=function(){ke(this.g,"b")},ra.prototype.createWebChannel=ra.prototype.g,Ne.prototype.send=Ne.prototype.o,Ne.prototype.open=Ne.prototype.m,Ne.prototype.close=Ne.prototype.close,jg=function(){return new ra},Ug=function(){return qo()},Bg=vs,pu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wo.NO_ERROR=0,Wo.TIMEOUT=8,Wo.HTTP_ERROR=6,Ra=Wo,Mh.COMPLETE="complete",$g=Mh,Sh.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",pe.prototype.listen=pe.prototype.K,Mi=Sh,zt.prototype.listenOnce=zt.prototype.L,zt.prototype.getLastError=zt.prototype.Ka,zt.prototype.getLastErrorCode=zt.prototype.Ba,zt.prototype.getStatus=zt.prototype.Z,zt.prototype.getResponseJson=zt.prototype.Oa,zt.prototype.getResponseText=zt.prototype.oa,zt.prototype.send=zt.prototype.ea,zt.prototype.setWithCredentials=zt.prototype.Ha,Fg=zt}).apply(typeof oa<"u"?oa:typeof self<"u"?self:typeof window<"u"?window:{});const Rf="@firebase/firestore";/**
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
 */class be{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
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
 */let Wr="10.14.0";/**
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
 */const qs=new rd("@firebase/firestore");function yi(){return qs.logLevel}function Y(n,...t){if(qs.logLevel<=ft.DEBUG){const e=t.map(ad);qs.debug(`Firestore (${Wr}): ${n}`,...e)}}function Ln(n,...t){if(qs.logLevel<=ft.ERROR){const e=t.map(ad);qs.error(`Firestore (${Wr}): ${n}`,...e)}}function Ws(n,...t){if(qs.logLevel<=ft.WARN){const e=t.map(ad);qs.warn(`Firestore (${Wr}): ${n}`,...e)}}function ad(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function nt(n="Unexpected state"){const t=`FIRESTORE (${Wr}) INTERNAL ASSERTION FAILED: `+n;throw Ln(t),new Error(t)}function kt(n,t){n||nt()}function it(n,t){return n}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends _n{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class zg{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Hg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(be.UNAUTHENTICATED))}shutdown(){}}class q0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class W0{constructor(t){this.t=t,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){kt(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,e(c)):Promise.resolve();let i=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dn,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dn)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(kt(typeof s.accessToken=="string"),new zg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return kt(t===null||typeof t=="string"),new be(t)}}class G0{constructor(t,e,s){this.l=t,this.h=e,this.P=s,this.type="FirstParty",this.user=be.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Y0{constructor(t,e,s){this.l=t,this.h=e,this.P=s}getToken(){return Promise.resolve(new G0(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class K0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Q0{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){kt(this.o===void 0);const s=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(kt(typeof e.token=="string"),this.R=e.token,new K0(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function X0(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
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
 */class cd{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=X0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<e&&(s+=t.charAt(r[i]%t.length))}return s}}function yt(n,t){return n<t?-1:n>t?1:0}function Nr(n,t,e){return n.length===t.length&&n.every((s,r)=>e(s,t[r]))}/**
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
 */class Ft{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new G($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new G($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new G($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new G($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ft.fromMillis(Date.now())}static fromDate(t){return Ft.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*e));return new Ft(e,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?yt(this.nanoseconds,t.nanoseconds):yt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class st{constructor(t){this.timestamp=t}static fromTimestamp(t){return new st(t)}static min(){return new st(new Ft(0,0))}static max(){return new st(new Ft(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class no{constructor(t,e,s){e===void 0?e=0:e>t.length&&nt(),s===void 0?s=t.length-e:s>t.length-e&&nt(),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return no.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof no?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let r=0;r<s;r++){const i=t.get(r),o=e.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ot extends no{construct(t,e,s){return new Ot(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new G($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(r=>r.length>0))}return new Ot(e)}static emptyPath(){return new Ot([])}}const J0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends no{construct(t,e,s){return new ae(t,e,s)}static isValidIdentifier(t){return J0.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ae(["__name__"])}static fromServerFormat(t){const e=[];let s="",r=0;const i=()=>{if(s.length===0)throw new G($.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new G($.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new G($.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ae(e)}static emptyPath(){return new ae([])}}/**
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
 */class Q{constructor(t){this.path=t}static fromPath(t){return new Q(Ot.fromString(t))}static fromName(t){return new Q(Ot.fromString(t).popFirst(5))}static empty(){return new Q(Ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ot.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Ot.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Q(new Ot(t.slice()))}}function Z0(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=st.fromTimestamp(s===1e9?new Ft(e+1,0):new Ft(e,s));return new us(r,Q.empty(),t)}function tw(n){return new us(n.readTime,n.key,-1)}class us{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new us(st.min(),Q.empty(),-1)}static max(){return new us(st.max(),Q.empty(),-1)}}function ew(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=Q.comparator(n.documentKey,t.documentKey),e!==0?e:yt(n.largestBatchId,t.largestBatchId))}/**
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
 */const nw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function To(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==nw)throw n;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&nt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new U((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(e,i).next(s,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof U?e:U.resolve(e)}catch(e){return U.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):U.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):U.reject(e)}static resolve(t){return new U((e,s)=>{e(t)})}static reject(t){return new U((e,s)=>{s(t)})}static waitFor(t){return new U((e,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&e()},c=>s(c))}),o=!0,i===r&&e()})}static or(t){let e=U.resolve(!1);for(const s of t)e=e.next(r=>r?U.resolve(r):s());return e}static forEach(t,e){const s=[];return t.forEach((r,i)=>{s.push(e.call(this,r,i))}),this.waitFor(s)}static mapArray(t,e){return new U((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;e(t[l]).next(d=>{o[l]=d,++a,a===i&&s(o)},d=>r(d))}})}static doWhile(t,e){return new U((s,r)=>{const i=()=>{t()===!0?e().next(()=>{i()},r):s()};i()})}}function rw(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Io(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ld{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ie(s),this.se=s=>e.writeSequenceNumber(s))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ld.oe=-1;function Ac(n){return n==null}function Qa(n){return n===0&&1/n==-1/0}function iw(n){return typeof n=="number"&&Number.isInteger(n)&&!Qa(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Pf(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function er(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function qg(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Ut{constructor(t,e){this.comparator=t,this.root=e||he.EMPTY}insert(t,e){return new Ut(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,he.BLACK,null,null))}remove(t){return new Ut(this.comparator,this.root.remove(t,this.comparator).copy(null,null,he.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return e+s.left.size;r<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new aa(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new aa(this.root,t,this.comparator,!1)}getReverseIterator(){return new aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new aa(this.root,t,this.comparator,!0)}}class aa{constructor(t,e,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?s(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class he{constructor(t,e,s,r,i){this.key=t,this.value=e,this.color=s??he.RED,this.left=r??he.EMPTY,this.right=i??he.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,r,i){return new he(t??this.key,e??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,s),null):i===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return he.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return he.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw nt();const t=this.left.check();if(t!==this.right.check())throw nt();return t+(this.isRed()?0:1)}}he.EMPTY=null,he.RED=!0,he.BLACK=!1;he.EMPTY=new class{constructor(){this.size=0}get key(){throw nt()}get value(){throw nt()}get color(){throw nt()}get left(){throw nt()}get right(){throw nt()}copy(t,e,s,r,i){return this}insert(t,e,s){return new he(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class fe{constructor(t){this.comparator=t,this.data=new Ut(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Df(this.data.getIterator())}getIteratorFrom(t){return new Df(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof fe)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new fe(this.comparator);return e.data=t,e}}class Df{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ve{constructor(t){this.fields=t,t.sort(ae.comparator)}static empty(){return new Ve([])}unionWith(t){let e=new fe(ae.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new Ve(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Nr(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
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
 */class Wg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class le{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Wg("Invalid base64 string: "+i):i}}(t);return new le(e)}static fromUint8Array(t){const e=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(t);return new le(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let r=0;r<e.length;r++)s[r]=e.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return yt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}le.EMPTY_BYTE_STRING=new le("");const ow=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ds(n){if(kt(!!n),typeof n=="string"){let t=0;const e=ow.exec(n);if(kt(!!e),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Kt(n.seconds),nanos:Kt(n.nanos)}}function Kt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Gs(n){return typeof n=="string"?le.fromBase64String(n):le.fromUint8Array(n)}/**
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
 */function ud(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function dd(n){const t=n.mapValue.fields.__previous_value__;return ud(t)?dd(t):t}function so(n){const t=ds(n.mapValue.fields.__local_write_time__.timestampValue);return new Ft(t.seconds,t.nanos)}/**
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
 */class aw{constructor(t,e,s,r,i,o,a,c,l){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Lr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Lr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Lr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ca={mapValue:{}};function Ys(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ud(n)?4:lw(n)?9007199254740991:cw(n)?10:11:nt()}function mn(n,t){if(n===t)return!0;const e=Ys(n);if(e!==Ys(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return so(n).isEqual(so(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=ds(r.timestampValue),a=ds(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(r,i){return Gs(r.bytesValue).isEqual(Gs(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(r,i){return Kt(r.geoPointValue.latitude)===Kt(i.geoPointValue.latitude)&&Kt(r.geoPointValue.longitude)===Kt(i.geoPointValue.longitude)}(n,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Kt(r.integerValue)===Kt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Kt(r.doubleValue),a=Kt(i.doubleValue);return o===a?Qa(o)===Qa(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Nr(n.arrayValue.values||[],t.arrayValue.values||[],mn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(Pf(o)!==Pf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!mn(o[c],a[c])))return!1;return!0}(n,t);default:return nt()}}function ro(n,t){return(n.values||[]).find(e=>mn(e,t))!==void 0}function Vr(n,t){if(n===t)return 0;const e=Ys(n),s=Ys(t);if(e!==s)return yt(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return yt(n.booleanValue,t.booleanValue);case 2:return function(i,o){const a=Kt(i.integerValue||i.doubleValue),c=Kt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return Mf(n.timestampValue,t.timestampValue);case 4:return Mf(so(n),so(t));case 5:return yt(n.stringValue,t.stringValue);case 6:return function(i,o){const a=Gs(i),c=Gs(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const d=yt(a[l],c[l]);if(d!==0)return d}return yt(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,o){const a=yt(Kt(i.latitude),Kt(o.latitude));return a!==0?a:yt(Kt(i.longitude),Kt(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Of(n.arrayValue,t.arrayValue);case 10:return function(i,o){var a,c,l,d;const h=i.fields||{},f=o.fields||{},m=(a=h.value)===null||a===void 0?void 0:a.arrayValue,g=(c=f.value)===null||c===void 0?void 0:c.arrayValue,v=yt(((l=m==null?void 0:m.values)===null||l===void 0?void 0:l.length)||0,((d=g==null?void 0:g.values)===null||d===void 0?void 0:d.length)||0);return v!==0?v:Of(m,g)}(n.mapValue,t.mapValue);case 11:return function(i,o){if(i===ca.mapValue&&o===ca.mapValue)return 0;if(i===ca.mapValue)return 1;if(o===ca.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},d=Object.keys(l);c.sort(),d.sort();for(let h=0;h<c.length&&h<d.length;++h){const f=yt(c[h],d[h]);if(f!==0)return f;const m=Vr(a[c[h]],l[d[h]]);if(m!==0)return m}return yt(c.length,d.length)}(n.mapValue,t.mapValue);default:throw nt()}}function Mf(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return yt(n,t);const e=ds(n),s=ds(t),r=yt(e.seconds,s.seconds);return r!==0?r:yt(e.nanos,s.nanos)}function Of(n,t){const e=n.values||[],s=t.values||[];for(let r=0;r<e.length&&r<s.length;++r){const i=Vr(e[r],s[r]);if(i)return i}return yt(e.length,s.length)}function Fr(n){return mu(n)}function mu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=ds(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Gs(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return Q.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",r=!0;for(const i of e.values||[])r?r=!1:s+=",",s+=mu(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${mu(e.fields[o])}`;return r+"}"}(n.mapValue):nt()}function Nf(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function gu(n){return!!n&&"integerValue"in n}function hd(n){return!!n&&"arrayValue"in n}function Lf(n){return!!n&&"nullValue"in n}function Vf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Pa(n){return!!n&&"mapValue"in n}function cw(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function ji(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return er(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=ji(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ji(n.arrayValue.values[e]);return t}return Object.assign({},n)}function lw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class De{constructor(t){this.value=t}static empty(){return new De({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!Pa(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ji(e)}setAll(t){let e=ae.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,s,r),s={},r=[],e=a.popLast()}o?s[a.lastSegment()]=ji(o):r.push(a.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,s,r)}delete(t){const e=this.field(t.popLast());Pa(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return mn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=e.mapValue.fields[t.get(s)];Pa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,s){er(e,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new De(ji(this.value))}}function Gg(n){const t=[];return er(n.fields,(e,s)=>{const r=new ae([e]);if(Pa(s)){const i=Gg(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new Ve(t)}/**
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
 */class we{constructor(t,e,s,r,i,o,a){this.key=t,this.documentType=e,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new we(t,0,st.min(),st.min(),st.min(),De.empty(),0)}static newFoundDocument(t,e,s,r){return new we(t,1,e,st.min(),s,r,0)}static newNoDocument(t,e){return new we(t,2,e,st.min(),st.min(),De.empty(),0)}static newUnknownDocument(t,e){return new we(t,3,e,st.min(),st.min(),De.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(st.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=st.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof we&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new we(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xa{constructor(t,e){this.position=t,this.inclusive=e}}function Ff(n,t,e){let s=0;for(let r=0;r<n.position.length;r++){const i=t[r],o=n.position[r];if(i.field.isKeyField()?s=Q.comparator(Q.fromName(o.referenceValue),e.key):s=Vr(o,e.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function $f(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!mn(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class io{constructor(t,e="asc"){this.field=t,this.dir=e}}function uw(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Yg{}class te extends Yg{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new hw(t,e,s):e==="array-contains"?new mw(t,s):e==="in"?new gw(t,s):e==="not-in"?new _w(t,s):e==="array-contains-any"?new yw(t,s):new te(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new fw(t,s):new pw(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Vr(e,this.value)):e!==null&&Ys(this.value)===Ys(e)&&this.matchesComparison(Vr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return nt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xe extends Yg{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Xe(t,e)}matches(t){return Kg(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Kg(n){return n.op==="and"}function Qg(n){return dw(n)&&Kg(n)}function dw(n){for(const t of n.filters)if(t instanceof Xe)return!1;return!0}function _u(n){if(n instanceof te)return n.field.canonicalString()+n.op.toString()+Fr(n.value);if(Qg(n))return n.filters.map(t=>_u(t)).join(",");{const t=n.filters.map(e=>_u(e)).join(",");return`${n.op}(${t})`}}function Xg(n,t){return n instanceof te?function(s,r){return r instanceof te&&s.op===r.op&&s.field.isEqual(r.field)&&mn(s.value,r.value)}(n,t):n instanceof Xe?function(s,r){return r instanceof Xe&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&Xg(o,r.filters[a]),!0):!1}(n,t):void nt()}function Jg(n){return n instanceof te?function(e){return`${e.field.canonicalString()} ${e.op} ${Fr(e.value)}`}(n):n instanceof Xe?function(e){return e.op.toString()+" {"+e.getFilters().map(Jg).join(" ,")+"}"}(n):"Filter"}class hw extends te{constructor(t,e,s){super(t,e,s),this.key=Q.fromName(s.referenceValue)}matches(t){const e=Q.comparator(t.key,this.key);return this.matchesComparison(e)}}class fw extends te{constructor(t,e){super(t,"in",e),this.keys=Zg("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class pw extends te{constructor(t,e){super(t,"not-in",e),this.keys=Zg("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Zg(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>Q.fromName(s.referenceValue))}class mw extends te{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return hd(e)&&ro(e.arrayValue,this.value)}}class gw extends te{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ro(this.value.arrayValue,e)}}class _w extends te{constructor(t,e){super(t,"not-in",e)}matches(t){if(ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ro(this.value.arrayValue,e)}}class yw extends te{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!hd(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>ro(this.value.arrayValue,s))}}/**
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
 */class vw{constructor(t,e=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Bf(n,t=null,e=[],s=[],r=null,i=null,o=null){return new vw(n,t,e,s,r,i,o)}function fd(n){const t=it(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>_u(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ac(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>Fr(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>Fr(s)).join(",")),t.ue=e}return t.ue}function pd(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!uw(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Xg(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!$f(n.startAt,t.startAt)&&$f(n.endAt,t.endAt)}function yu(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Gr{constructor(t,e=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bw(n,t,e,s,r,i,o,a){return new Gr(n,t,e,s,r,i,o,a)}function md(n){return new Gr(n)}function Uf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function t_(n){return n.collectionGroup!==null}function zi(n){const t=it(n);if(t.ce===null){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new fe(ae.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new io(i,s))}),e.has(ae.keyField().canonicalString())||t.ce.push(new io(ae.keyField(),s))}return t.ce}function un(n){const t=it(n);return t.le||(t.le=xw(t,zi(n))),t.le}function xw(n,t){if(n.limitType==="F")return Bf(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new io(r.field,i)});const e=n.endAt?new Xa(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Xa(n.startAt.position,n.startAt.inclusive):null;return Bf(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function vu(n,t){const e=n.filters.concat([t]);return new Gr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ja(n,t,e){return new Gr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function kc(n,t){return pd(un(n),un(t))&&n.limitType===t.limitType}function e_(n){return`${fd(un(n))}|lt:${n.limitType}`}function br(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(r=>Jg(r)).join(", ")}]`),Ac(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(r=>Fr(r)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(r=>Fr(r)).join(",")),`Target(${s})`}(un(n))}; limitType=${n.limitType})`}function Sc(n,t){return t.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):Q.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,t)&&function(s,r){for(const i of zi(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,t)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,t)&&function(s,r){return!(s.startAt&&!function(o,a,c){const l=Ff(o,a,c);return o.inclusive?l<=0:l<0}(s.startAt,zi(s),r)||s.endAt&&!function(o,a,c){const l=Ff(o,a,c);return o.inclusive?l>=0:l>0}(s.endAt,zi(s),r))}(n,t)}function ww(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function n_(n){return(t,e)=>{let s=!1;for(const r of zi(n)){const i=Ew(r,t,e);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Ew(n,t,e){const s=n.field.isKeyField()?Q.comparator(t.key,e.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Vr(c,l):nt()}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return nt()}}/**
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
 */class Yr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[e]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){er(this.inner,(e,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return qg(this.inner)}size(){return this.innerSize}}/**
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
 */const Tw=new Ut(Q.comparator);function Vn(){return Tw}const s_=new Ut(Q.comparator);function Oi(...n){let t=s_;for(const e of n)t=t.insert(e.key,e);return t}function r_(n){let t=s_;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function Os(){return Hi()}function i_(){return Hi()}function Hi(){return new Yr(n=>n.toString(),(n,t)=>n.isEqual(t))}const Iw=new Ut(Q.comparator),Aw=new fe(Q.comparator);function ut(...n){let t=Aw;for(const e of n)t=t.add(e);return t}const kw=new fe(yt);function Sw(){return kw}/**
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
 */function gd(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qa(t)?"-0":t}}function o_(n){return{integerValue:""+n}}function Cw(n,t){return iw(t)?o_(t):gd(n,t)}/**
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
 */class Cc{constructor(){this._=void 0}}function Rw(n,t,e){return n instanceof Za?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&ud(i)&&(i=dd(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(e,t):n instanceof oo?c_(n,t):n instanceof ao?l_(n,t):function(r,i){const o=a_(r,i),a=jf(o)+jf(r.Pe);return gu(o)&&gu(r.Pe)?o_(a):gd(r.serializer,a)}(n,t)}function Pw(n,t,e){return n instanceof oo?c_(n,t):n instanceof ao?l_(n,t):e}function a_(n,t){return n instanceof tc?function(s){return gu(s)||function(i){return!!i&&"doubleValue"in i}(s)}(t)?t:{integerValue:0}:null}class Za extends Cc{}class oo extends Cc{constructor(t){super(),this.elements=t}}function c_(n,t){const e=u_(t);for(const s of n.elements)e.some(r=>mn(r,s))||e.push(s);return{arrayValue:{values:e}}}class ao extends Cc{constructor(t){super(),this.elements=t}}function l_(n,t){let e=u_(t);for(const s of n.elements)e=e.filter(r=>!mn(r,s));return{arrayValue:{values:e}}}class tc extends Cc{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function jf(n){return Kt(n.integerValue||n.doubleValue)}function u_(n){return hd(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Dw(n,t){return n.field.isEqual(t.field)&&function(s,r){return s instanceof oo&&r instanceof oo||s instanceof ao&&r instanceof ao?Nr(s.elements,r.elements,mn):s instanceof tc&&r instanceof tc?mn(s.Pe,r.Pe):s instanceof Za&&r instanceof Za}(n.transform,t.transform)}class Mw{constructor(t,e){this.version=t,this.transformResults=e}}class Ue{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ue}static exists(t){return new Ue(void 0,t)}static updateTime(t){return new Ue(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Da(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Rc{}function d_(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new _d(n.key,Ue.none()):new Ao(n.key,n.data,Ue.none());{const e=n.data,s=De.empty();let r=new fe(ae.comparator);for(let i of t.fields)if(!r.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ms(n.key,s,new Ve(r.toArray()),Ue.none())}}function Ow(n,t,e){n instanceof Ao?function(r,i,o){const a=r.value.clone(),c=Hf(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof ms?function(r,i,o){if(!Da(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Hf(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(h_(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function qi(n,t,e,s){return n instanceof Ao?function(i,o,a,c){if(!Da(i.precondition,o))return a;const l=i.value.clone(),d=qf(i.fieldTransforms,c,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,t,e,s):n instanceof ms?function(i,o,a,c){if(!Da(i.precondition,o))return a;const l=qf(i.fieldTransforms,c,o),d=o.data;return d.setAll(h_(i)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,t,e,s):function(i,o,a){return Da(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Nw(n,t){let e=null;for(const s of n.fieldTransforms){const r=t.data.field(s.field),i=a_(s.transform,r||null);i!=null&&(e===null&&(e=De.empty()),e.set(s.field,i))}return e||null}function zf(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Nr(s,r,(i,o)=>Dw(i,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ao extends Rc{constructor(t,e,s,r=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ms extends Rc{constructor(t,e,s,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function h_(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function Hf(n,t,e){const s=new Map;kt(n.length===e.length);for(let r=0;r<e.length;r++){const i=n[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Pw(o,a,e[r]))}return s}function qf(n,t,e){const s=new Map;for(const r of n){const i=r.transform,o=e.data.field(r.field);s.set(r.field,Rw(i,o,t))}return s}class _d extends Rc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lw extends Rc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Vw{constructor(t,e,s,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Ow(i,t,s[r])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=qi(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=qi(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=i_();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=e.has(r.key)?null:a;const c=d_(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(st.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ut())}isEqual(t){return this.batchId===t.batchId&&Nr(this.mutations,t.mutations,(e,s)=>zf(e,s))&&Nr(this.baseMutations,t.baseMutations,(e,s)=>zf(e,s))}}class yd{constructor(t,e,s,r){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=r}static from(t,e,s){kt(t.mutations.length===s.length);let r=function(){return Iw}();const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new yd(t,e,s,r)}}/**
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
 */class Fw{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class $w{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Zt,pt;function Bw(n){switch(n){default:return nt();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function f_(n){if(n===void 0)return Ln("GRPC error has no .code"),$.UNKNOWN;switch(n){case Zt.OK:return $.OK;case Zt.CANCELLED:return $.CANCELLED;case Zt.UNKNOWN:return $.UNKNOWN;case Zt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Zt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Zt.INTERNAL:return $.INTERNAL;case Zt.UNAVAILABLE:return $.UNAVAILABLE;case Zt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Zt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Zt.NOT_FOUND:return $.NOT_FOUND;case Zt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Zt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Zt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Zt.ABORTED:return $.ABORTED;case Zt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Zt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Zt.DATA_LOSS:return $.DATA_LOSS;default:return nt()}}(pt=Zt||(Zt={}))[pt.OK=0]="OK",pt[pt.CANCELLED=1]="CANCELLED",pt[pt.UNKNOWN=2]="UNKNOWN",pt[pt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pt[pt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pt[pt.NOT_FOUND=5]="NOT_FOUND",pt[pt.ALREADY_EXISTS=6]="ALREADY_EXISTS",pt[pt.PERMISSION_DENIED=7]="PERMISSION_DENIED",pt[pt.UNAUTHENTICATED=16]="UNAUTHENTICATED",pt[pt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pt[pt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pt[pt.ABORTED=10]="ABORTED",pt[pt.OUT_OF_RANGE=11]="OUT_OF_RANGE",pt[pt.UNIMPLEMENTED=12]="UNIMPLEMENTED",pt[pt.INTERNAL=13]="INTERNAL",pt[pt.UNAVAILABLE=14]="UNAVAILABLE",pt[pt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Uw(){return new TextEncoder}/**
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
 */const jw=new Ls([4294967295,4294967295],0);function Wf(n){const t=Uw().encode(n),e=new Vg;return e.update(t),new Uint8Array(e.digest())}function Gf(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Ls([e,s],0),new Ls([r,i],0)]}class vd{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new Ni(`Invalid padding: ${e}`);if(s<0)throw new Ni(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Ni(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new Ni(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Ls.fromNumber(this.Ie)}Ee(t,e,s){let r=t.add(e.multiply(Ls.fromNumber(s)));return r.compare(jw)===1&&(r=new Ls([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Wf(t),[s,r]=Gf(e);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(t,e,s){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new vd(i,r,e);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=Wf(t),[s,r]=Gf(e);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class Ni extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pc{constructor(t,e,s,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const r=new Map;return r.set(t,ko.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new Pc(st.min(),r,new Ut(yt),Vn(),ut())}}class ko{constructor(t,e,s,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new ko(s,e,ut(),ut(),ut())}}/**
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
 */class Ma{constructor(t,e,s,r){this.Re=t,this.removedTargetIds=e,this.key=s,this.Ve=r}}class p_{constructor(t,e){this.targetId=t,this.me=e}}class m_{constructor(t,e,s=le.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=r}}class Yf{constructor(){this.fe=0,this.ge=Qf(),this.pe=le.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=ut(),e=ut(),s=ut();return this.ge.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:s=s.add(r);break;default:nt()}}),new ko(this.pe,this.ye,t,e,s)}Ce(){this.we=!1,this.ge=Qf()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,kt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class zw{constructor(t){this.Le=t,this.Be=new Map,this.ke=Vn(),this.qe=Kf(),this.Qe=new Ut(yt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const s=this.Ge(e);switch(t.state){case 0:this.ze(e)&&s.De(t.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(t.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(s.Ne(),s.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),s.De(t.resumeToken));break;default:nt()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((s,r)=>{this.ze(r)&&e(r)})}He(t){const e=t.targetId,s=t.me.count,r=this.Je(e);if(r){const i=r.target;if(yu(i))if(s===0){const o=new Q(i.path);this.Ue(e,o,we.newNoDocument(o,st.min()))}else kt(s===1);else{const o=this.Ye(e);if(o!==s){const a=this.Ze(t),c=a?this.Xe(a,t,o):1;if(c!==0){this.je(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,l)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=e;let o,a;try{o=Gs(s).toUint8Array()}catch(c){if(c instanceof Wg)return Ws("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new vd(o,r,i)}catch(c){return Ws(c instanceof Ni?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(t,e,s){return e.me.count===s-this.nt(t,e.targetId)?0:2}nt(t,e){const s=this.Le.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,i,null),r++)}),r}rt(t){const e=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&yu(a.target)){const c=new Q(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,we.newNoDocument(c,t))}i.be&&(e.set(o,i.ve()),i.Ce())}});let s=ut();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(t));const r=new Pc(t,e,this.Qe,this.ke,s);return this.ke=Vn(),this.qe=Kf(),this.Qe=new Ut(yt),r}$e(t,e){if(!this.ze(t))return;const s=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,s),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,s){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),s&&(this.ke=this.ke.insert(e,s))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Yf,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new fe(yt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||Y("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Yf),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Kf(){return new Ut(Q.comparator)}function Qf(){return new Ut(Q.comparator)}const Hw={asc:"ASCENDING",desc:"DESCENDING"},qw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ww={and:"AND",or:"OR"};class Gw{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function bu(n,t){return n.useProto3Json||Ac(t)?t:{value:t}}function ec(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function g_(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Yw(n,t){return ec(n,t.toTimestamp())}function dn(n){return kt(!!n),st.fromTimestamp(function(e){const s=ds(e);return new Ft(s.seconds,s.nanos)}(n))}function bd(n,t){return xu(n,t).canonicalString()}function xu(n,t){const e=function(r){return new Ot(["projects",r.projectId,"databases",r.database])}(n).child("documents");return t===void 0?e:e.child(t)}function __(n){const t=Ot.fromString(n);return kt(w_(t)),t}function wu(n,t){return bd(n.databaseId,t.path)}function Dl(n,t){const e=__(t);if(e.get(1)!==n.databaseId.projectId)throw new G($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new G($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new Q(v_(e))}function y_(n,t){return bd(n.databaseId,t)}function Kw(n){const t=__(n);return t.length===4?Ot.emptyPath():v_(t)}function Eu(n){return new Ot(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function v_(n){return kt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Xf(n,t,e){return{name:wu(n,t),fields:e.value.mapValue.fields}}function Qw(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:nt()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(l,d){return l.useProto3Json?(kt(d===void 0||typeof d=="string"),le.fromBase64String(d||"")):(kt(d===void 0||d instanceof Buffer||d instanceof Uint8Array),le.fromUint8Array(d||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const d=l.code===void 0?$.UNKNOWN:f_(l.code);return new G(d,l.message||"")}(o);e=new m_(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Dl(n,s.document.name),i=dn(s.document.updateTime),o=s.document.createTime?dn(s.document.createTime):st.min(),a=new De({mapValue:{fields:s.document.fields}}),c=we.newFoundDocument(r,i,o,a),l=s.targetIds||[],d=s.removedTargetIds||[];e=new Ma(l,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Dl(n,s.document),i=s.readTime?dn(s.readTime):st.min(),o=we.newNoDocument(r,i),a=s.removedTargetIds||[];e=new Ma([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Dl(n,s.document),i=s.removedTargetIds||[];e=new Ma([],i,r,null)}else{if(!("filter"in t))return nt();{t.filter;const s=t.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new $w(r,i),a=s.targetId;e=new p_(a,o)}}return e}function Xw(n,t){let e;if(t instanceof Ao)e={update:Xf(n,t.key,t.value)};else if(t instanceof _d)e={delete:wu(n,t.key)};else if(t instanceof ms)e={update:Xf(n,t.key,t.data),updateMask:oE(t.fieldMask)};else{if(!(t instanceof Lw))return nt();e={verify:wu(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof Za)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof oo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ao)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof tc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw nt()}(0,s))),t.precondition.isNone||(e.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Yw(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:nt()}(n,t.precondition)),e}function Jw(n,t){return n&&n.length>0?(kt(t!==void 0),n.map(e=>function(r,i){let o=r.updateTime?dn(r.updateTime):dn(i);return o.isEqual(st.min())&&(o=dn(i)),new Mw(o,r.transformResults||[])}(e,t))):[]}function Zw(n,t){return{documents:[y_(n,t.path)]}}function tE(n,t){const e={structuredQuery:{}},s=t.path;let r;t.collectionGroup!==null?(r=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=y_(n,r);const i=function(l){if(l.length!==0)return x_(Xe.create(l,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(d=>function(f){return{field:xr(f.field),direction:sE(f.dir)}}(d))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=bu(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),{_t:e,parent:r}}function eE(n){let t=Kw(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let r=null;if(s>0){kt(s===1);const d=e.from[0];d.allDescendants?r=d.collectionId:t=t.child(d.collectionId)}let i=[];e.where&&(i=function(h){const f=b_(h);return f instanceof Xe&&Qg(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(f=>function(g){return new io(wr(g.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Ac(f)?null:f}(e.limit));let c=null;e.startAt&&(c=function(h){const f=!!h.before,m=h.values||[];return new Xa(m,f)}(e.startAt));let l=null;return e.endAt&&(l=function(h){const f=!h.before,m=h.values||[];return new Xa(m,f)}(e.endAt)),bw(t,r,o,i,a,"F",c,l)}function nE(n,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return nt()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function b_(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=wr(e.unaryFilter.field);return te.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=wr(e.unaryFilter.field);return te.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=wr(e.unaryFilter.field);return te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=wr(e.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return nt()}}(n):n.fieldFilter!==void 0?function(e){return te.create(wr(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return nt()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Xe.create(e.compositeFilter.filters.map(s=>b_(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return nt()}}(e.compositeFilter.op))}(n):nt()}function sE(n){return Hw[n]}function rE(n){return qw[n]}function iE(n){return Ww[n]}function xr(n){return{fieldPath:n.canonicalString()}}function wr(n){return ae.fromServerFormat(n.fieldPath)}function x_(n){return n instanceof te?function(e){if(e.op==="=="){if(Vf(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NAN"}};if(Lf(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Vf(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NOT_NAN"}};if(Lf(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xr(e.field),op:rE(e.op),value:e.value}}}(n):n instanceof Xe?function(e){const s=e.getFilters().map(r=>x_(r));return s.length===1?s[0]:{compositeFilter:{op:iE(e.op),filters:s}}}(n):nt()}function oE(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function w_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Zn{constructor(t,e,s,r,i=st.min(),o=st.min(),a=le.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Zn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class aE{constructor(t){this.ct=t}}function cE(n){const t=eE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ja(t,t.limit,"L"):t}/**
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
 */class lE{constructor(){this.un=new uE}addToCollectionParentIndex(t,e){return this.un.add(e),U.resolve()}getCollectionParents(t,e){return U.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return U.resolve()}deleteFieldIndex(t,e){return U.resolve()}deleteAllFieldIndexes(t){return U.resolve()}createTargetIndexes(t,e){return U.resolve()}getDocumentsMatchingTarget(t,e){return U.resolve(null)}getIndexType(t,e){return U.resolve(0)}getFieldIndexes(t,e){return U.resolve([])}getNextCollectionGroupToUpdate(t){return U.resolve(null)}getMinOffset(t,e){return U.resolve(us.min())}getMinOffsetFromCollectionGroup(t,e){return U.resolve(us.min())}updateCollectionGroup(t,e,s){return U.resolve()}updateIndexEntries(t,e){return U.resolve()}}class uE{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),r=this.index[e]||new fe(Ot.comparator),i=!r.has(s);return this.index[e]=r.add(s),i}has(t){const e=t.lastSegment(),s=t.popLast(),r=this.index[e];return r&&r.has(s)}getEntries(t){return(this.index[t]||new fe(Ot.comparator)).toArray()}}/**
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
 */class $r{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new $r(0)}static kn(){return new $r(-1)}}/**
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
 */class dE{constructor(){this.changes=new Yr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,we.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?U.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class hE{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class fE{constructor(t,e,s,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(s!==null&&qi(s.mutation,r,Ve.empty(),Ft.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,ut()).next(()=>s))}getLocalViewOfDocuments(t,e,s=ut()){const r=Os();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,s).next(i=>{let o=Oi();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const s=Os();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,ut()))}populateOverlays(t,e,s){const r=[];return s.forEach(i=>{e.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,s,r){let i=Vn();const o=Hi(),a=function(){return Hi()}();return e.forEach((c,l)=>{const d=s.get(l.key);r.has(l.key)&&(d===void 0||d.mutation instanceof ms)?i=i.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),qi(d.mutation,l,d.mutation.getFieldMask(),Ft.now())):o.set(l.key,Ve.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,d)=>o.set(l,d)),e.forEach((l,d)=>{var h;return a.set(l,new hE(d,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const s=Hi();let r=new Ut((o,a)=>o-a),i=ut();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=e.get(c);if(l===null)return;let d=s.get(c)||Ve.empty();d=a.applyToLocalView(l,d),s.set(c,d);const h=(r.get(a.batchId)||ut()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,d=c.value,h=i_();d.forEach(f=>{if(!i.has(f)){const m=d_(e.get(f),s.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return U.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,r){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):t_(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,r):this.getDocumentsMatchingCollectionQuery(t,e,s,r)}getNextDocuments(t,e,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,r-i.size):U.resolve(Os());let a=-1,c=i;return o.next(l=>U.forEach(l,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(t,d).next(f=>{c=c.insert(d,f)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,ut())).next(d=>({batchId:a,changes:r_(d)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Q(e)).next(s=>{let r=Oi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,s,r){const i=e.collectionGroup;let o=Oi();return this.indexManager.getCollectionParents(t,i).next(a=>U.forEach(a,c=>{const l=function(h,f){return new Gr(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,s,r).next(d=>{d.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,i,r))).next(o=>{i.forEach((c,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,we.newInvalidDocument(d)))});let a=Oi();return o.forEach((c,l)=>{const d=i.get(c);d!==void 0&&qi(d.mutation,l,Ve.empty(),Ft.now()),Sc(e,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class pE{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return U.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:dn(r.createTime)}}(e)),U.resolve()}getNamedQuery(t,e){return U.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(r){return{name:r.name,query:cE(r.bundledQuery),readTime:dn(r.readTime)}}(e)),U.resolve()}}/**
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
 */class mE{constructor(){this.overlays=new Ut(Q.comparator),this.Ir=new Map}getOverlay(t,e){return U.resolve(this.overlays.get(e))}getOverlays(t,e){const s=Os();return U.forEach(e,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((r,i)=>{this.ht(t,e,i)}),U.resolve()}removeOverlaysForBatchId(t,e,s){const r=this.Ir.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(s)),U.resolve()}getOverlaysForCollection(t,e,s){const r=Os(),i=e.length+1,o=new Q(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return U.resolve(r)}getOverlaysForCollectionGroup(t,e,s,r){let i=new Ut((l,d)=>l-d);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>s){let d=i.get(l.largestBatchId);d===null&&(d=Os(),i=i.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const a=Os(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,d)=>a.set(l,d)),!(a.size()>=r)););return U.resolve(a)}ht(t,e,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Ir.get(r.largestBatchId).delete(s.key);this.Ir.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Fw(e,s));let i=this.Ir.get(e);i===void 0&&(i=ut(),this.Ir.set(e,i)),this.Ir.set(e,i.add(s.key))}}/**
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
 */class gE{constructor(){this.sessionToken=le.EMPTY_BYTE_STRING}getSessionToken(t){return U.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,U.resolve()}}/**
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
 */class xd{constructor(){this.Tr=new fe(ie.Er),this.dr=new fe(ie.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const s=new ie(t,e);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.Vr(new ie(t,e))}mr(t,e){t.forEach(s=>this.removeReference(s,e))}gr(t){const e=new Q(new Ot([])),s=new ie(e,t),r=new ie(e,t+1),i=[];return this.dr.forEachInRange([s,r],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new Q(new Ot([])),s=new ie(e,t),r=new ie(e,t+1);let i=ut();return this.dr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const e=new ie(t,0),s=this.Tr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class ie{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return Q.comparator(t.key,e.key)||yt(t.wr,e.wr)}static Ar(t,e){return yt(t.wr,e.wr)||Q.comparator(t.key,e.key)}}/**
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
 */class _E{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new fe(ie.Er)}checkEmpty(t){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Vw(i,e,s,r);this.mutationQueue.push(o);for(const a of r)this.br=this.br.add(new ie(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(t,e){return U.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,r=this.vr(s),i=r<0?0:r;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new ie(e,0),r=new ie(e,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([s,r],o=>{const a=this.Dr(o.wr);i.push(a)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new fe(yt);return e.forEach(r=>{const i=new ie(r,0),o=new ie(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{s=s.add(a.wr)})}),U.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,r=s.length+1;let i=s;Q.isDocumentKey(i)||(i=i.child(""));const o=new ie(new Q(i),0);let a=new fe(yt);return this.br.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.wr)),!0)},o),U.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(s=>{const r=this.Dr(s);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){kt(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return U.forEach(e.mutations,r=>{const i=new ie(r.key,e.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.br=s})}On(t){}containsKey(t,e){const s=new ie(e,0),r=this.br.firstAfterOrEqual(s);return U.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,U.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class yE{constructor(t){this.Mr=t,this.docs=function(){return new Ut(Q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,r=this.docs.get(s),i=r?r.size:0,o=this.Mr(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return U.resolve(s?s.document.mutableCopy():we.newInvalidDocument(e))}getEntries(t,e){let s=Vn();return e.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():we.newInvalidDocument(r))}),U.resolve(s)}getDocumentsMatchingQuery(t,e,s,r){let i=Vn();const o=e.path,a=new Q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:d}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||ew(tw(d),s)<=0||(r.has(d.key)||Sc(e,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(t,e,s,r){nt()}Or(t,e){return U.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new vE(this)}getSize(t){return U.resolve(this.size)}}class vE extends dE{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(s)}),U.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class bE{constructor(t){this.persistence=t,this.Nr=new Yr(e=>fd(e),pd),this.lastRemoteSnapshotVersion=st.min(),this.highestTargetId=0,this.Lr=0,this.Br=new xd,this.targetCount=0,this.kr=$r.Bn()}forEachTarget(t,e){return this.Nr.forEach((s,r)=>e(r)),U.resolve()}getLastRemoteSnapshotVersion(t){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return U.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.Lr&&(this.Lr=e),U.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new $r(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,U.resolve()}updateTargetData(t,e){return this.Kn(e),U.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,U.resolve()}removeTargets(t,e,s){let r=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=e&&s.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),U.waitFor(i).next(()=>r)}getTargetCount(t){return U.resolve(this.targetCount)}getTargetData(t,e){const s=this.Nr.get(e)||null;return U.resolve(s)}addMatchingKeys(t,e,s){return this.Br.Rr(e,s),U.resolve()}removeMatchingKeys(t,e,s){this.Br.mr(e,s);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),U.resolve()}getMatchingKeysForTargetId(t,e){const s=this.Br.yr(e);return U.resolve(s)}containsKey(t,e){return U.resolve(this.Br.containsKey(e))}}/**
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
 */class xE{constructor(t,e){this.qr={},this.overlays={},this.Qr=new ld(0),this.Kr=!1,this.Kr=!0,this.$r=new gE,this.referenceDelegate=t(this),this.Ur=new bE(this),this.indexManager=new lE,this.remoteDocumentCache=function(r){return new yE(r)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new aE(e),this.Gr=new pE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new mE,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.qr[t.toKey()];return s||(s=new _E(e,this.referenceDelegate),this.qr[t.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,s){Y("MemoryPersistence","Starting transaction:",t);const r=new wE(this.Qr.next());return this.referenceDelegate.zr(),s(r).next(i=>this.referenceDelegate.jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Hr(t,e){return U.or(Object.values(this.qr).map(s=>()=>s.containsKey(t,e)))}}class wE extends sw{constructor(t){super(),this.currentSequenceNumber=t}}class wd{constructor(t){this.persistence=t,this.Jr=new xd,this.Yr=null}static Zr(t){return new wd(t)}get Xr(){if(this.Yr)return this.Yr;throw nt()}addReference(t,e,s){return this.Jr.addReference(s,e),this.Xr.delete(s.toString()),U.resolve()}removeReference(t,e,s){return this.Jr.removeReference(s,e),this.Xr.add(s.toString()),U.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),U.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(r=>this.Xr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(i=>this.Xr.add(i.toString()))}).next(()=>s.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,s=>{const r=Q.fromPath(s);return this.ei(t,r).next(i=>{i||e.removeEntry(r,st.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(s=>{s?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return U.or([()=>U.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class Ed{constructor(t,e,s,r){this.targetId=t,this.fromCache=e,this.$i=s,this.Ui=r}static Wi(t,e){let s=ut(),r=ut();for(const i of e.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ed(t,e.fromCache,s,r)}}/**
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
 */class EE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class TE{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ax()?8:rw(Ie())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,s,r){const i={result:null};return this.Yi(t,e).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(t,e,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new EE;return this.Xi(t,e,o).next(a=>{if(i.result=a,this.zi)return this.es(t,e,o,a.size)})}).next(()=>i.result)}es(t,e,s,r){return s.documentReadCount<this.ji?(yi()<=ft.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",br(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(yi()<=ft.DEBUG&&Y("QueryEngine","Query:",br(e),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Hi*r?(yi()<=ft.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",br(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,un(e))):U.resolve())}Yi(t,e){if(Uf(e))return U.resolve(null);let s=un(e);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=Ja(e,null,"F"),s=un(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=ut(...i);return this.Ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const l=this.ts(e,a);return this.ns(e,l,o,c.readTime)?this.Yi(t,Ja(e,null,"F")):this.rs(t,l,e,c)}))})))}Zi(t,e,s,r){return Uf(e)||r.isEqual(st.min())?U.resolve(null):this.Ji.getDocuments(t,s).next(i=>{const o=this.ts(e,i);return this.ns(e,o,s,r)?U.resolve(null):(yi()<=ft.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),br(e)),this.rs(t,o,e,Z0(r,-1)).next(a=>a))})}ts(t,e){let s=new fe(n_(t));return e.forEach((r,i)=>{Sc(t,i)&&(s=s.add(i))}),s}ns(t,e,s,r){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(t,e,s){return yi()<=ft.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",br(e)),this.Ji.getDocumentsMatchingQuery(t,e,us.min(),s)}rs(t,e,s,r){return this.Ji.getDocumentsMatchingQuery(t,s,r).next(i=>(e.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class IE{constructor(t,e,s,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new Ut(yt),this._s=new Yr(i=>fd(i),pd),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(s)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new fE(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function AE(n,t,e,s){return new IE(n,t,e,s)}async function E_(n,t){const e=it(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let r;return e.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,e.ls(t),e.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ut();for(const l of r){o.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}for(const l of i){a.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}return e.localDocuments.getDocuments(s,c).next(l=>({hs:l,removedBatchIds:o,addedBatchIds:a}))})})}function kE(n,t){const e=it(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=e.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,l,d){const h=l.batch,f=h.keys();let m=U.resolve();return f.forEach(g=>{m=m.next(()=>d.getEntry(c,g)).next(v=>{const y=l.docVersions.get(g);kt(y!==null),v.version.compareTo(y)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),d.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,s,t,i).next(()=>i.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=ut();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>e.localDocuments.getDocuments(s,r))})}function T_(n){const t=it(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function SE(n,t){const e=it(n),s=t.snapshotVersion;let r=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=e.cs.newChangeBuffer({trackRemovals:!0});r=e.os;const a=[];t.targetChanges.forEach((d,h)=>{const f=r.get(h);if(!f)return;a.push(e.Ur.removeMatchingKeys(i,d.removedDocuments,h).next(()=>e.Ur.addMatchingKeys(i,d.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(le.EMPTY_BYTE_STRING,st.min()).withLastLimboFreeSnapshotVersion(st.min()):d.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(d.resumeToken,s)),r=r.insert(h,m),function(v,y,E){return v.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,m,d)&&a.push(e.Ur.updateTargetData(i,m))});let c=Vn(),l=ut();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,d))}),a.push(CE(i,o,t.documentUpdates).next(d=>{c=d.Ps,l=d.Is})),!s.isEqual(st.min())){const d=e.Ur.getLastRemoteSnapshotVersion(i).next(h=>e.Ur.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(d)}return U.waitFor(a).next(()=>o.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(e.os=r,i))}function CE(n,t,e){let s=ut(),r=ut();return e.forEach(i=>s=s.add(i)),t.getEntries(n,s).next(i=>{let o=Vn();return e.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(st.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Ps:o,Is:r}})}function RE(n,t){const e=it(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function PE(n,t){const e=it(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return e.Ur.getTargetData(s,t).next(i=>i?(r=i,U.resolve(r)):e.Ur.allocateTargetId(s).next(o=>(r=new Zn(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.Ur.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=e.os.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.os=e.os.insert(s.targetId,s),e._s.set(t,s.targetId)),s})}async function Tu(n,t,e){const s=it(n),r=s.os.get(t),i=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Io(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.os=s.os.remove(t),s._s.delete(r.target)}function Jf(n,t,e){const s=it(n);let r=st.min(),i=ut();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,d){const h=it(c),f=h._s.get(d);return f!==void 0?U.resolve(h.os.get(f)):h.Ur.getTargetData(l,d)}(s,o,un(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.ss.getDocumentsMatchingQuery(o,t,e?r:st.min(),e?i:ut())).next(a=>(DE(s,ww(t),a),{documents:a,Ts:i})))}function DE(n,t,e){let s=n.us.get(t)||st.min();e.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.us.set(t,s)}class Zf{constructor(){this.activeTargetIds=Sw()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ME{constructor(){this.so=new Zf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,s){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Zf,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class OE{_o(t){}shutdown(){}}/**
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
 */class tp{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let la=null;function Ml(){return la===null?la=function(){return 268435456+Math.round(2147483648*Math.random())}():la++,"0x"+la.toString(16)}/**
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
 */const NE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class LE{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const _e="WebChannelConnection";class VE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const s=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+e.host,this.vo=`projects/${r}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get Fo(){return!1}Mo(e,s,r,i,o){const a=Ml(),c=this.xo(e,s.toUriEncodedString());Y("RestConnection",`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(l,i,o),this.No(e,c,l,r).then(d=>(Y("RestConnection",`Received RPC '${e}' ${a}: `,d),d),d=>{throw Ws("RestConnection",`RPC '${e}' ${a} failed with error: `,d,"url: ",c,"request:",r),d})}Lo(e,s,r,i,o,a){return this.Mo(e,s,r,i,o)}Oo(e,s,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}xo(e,s){const r=NE[e];return`${this.Do}/v1/${s}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,s,r){const i=Ml();return new Promise((o,a)=>{const c=new Fg;c.setWithCredentials(!0),c.listenOnce($g.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ra.NO_ERROR:const d=c.getResponseJson();Y(_e,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(d)),o(d);break;case Ra.TIMEOUT:Y(_e,`RPC '${t}' ${i} timed out`),a(new G($.DEADLINE_EXCEEDED,"Request time out"));break;case Ra.HTTP_ERROR:const h=c.getStatus();if(Y(_e,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const g=function(y){const E=y.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(E)>=0?E:$.UNKNOWN}(m.status);a(new G(g,m.message))}else a(new G($.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new G($.UNAVAILABLE,"Connection failed."));break;default:nt()}}finally{Y(_e,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(r);Y(_e,`RPC '${t}' ${i} sending request:`,r),c.send(e,"POST",l,s,15)})}Bo(t,e,s){const r=Ml(),i=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=jg(),a=Ug(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,s),c.encodeInitMessageHeaders=!0;const d=i.join("");Y(_e,`Creating RPC '${t}' stream ${r}: ${d}`,c);const h=o.createWebChannel(d,c);let f=!1,m=!1;const g=new LE({Io:y=>{m?Y(_e,`Not sending because RPC '${t}' stream ${r} is closed:`,y):(f||(Y(_e,`Opening RPC '${t}' stream ${r} transport.`),h.open(),f=!0),Y(_e,`RPC '${t}' stream ${r} sending:`,y),h.send(y))},To:()=>h.close()}),v=(y,E,A)=>{y.listen(E,C=>{try{A(C)}catch(D){setTimeout(()=>{throw D},0)}})};return v(h,Mi.EventType.OPEN,()=>{m||(Y(_e,`RPC '${t}' stream ${r} transport opened.`),g.yo())}),v(h,Mi.EventType.CLOSE,()=>{m||(m=!0,Y(_e,`RPC '${t}' stream ${r} transport closed`),g.So())}),v(h,Mi.EventType.ERROR,y=>{m||(m=!0,Ws(_e,`RPC '${t}' stream ${r} transport errored:`,y),g.So(new G($.UNAVAILABLE,"The operation could not be completed")))}),v(h,Mi.EventType.MESSAGE,y=>{var E;if(!m){const A=y.data[0];kt(!!A);const C=A,D=C.error||((E=C[0])===null||E===void 0?void 0:E.error);if(D){Y(_e,`RPC '${t}' stream ${r} received error:`,D);const R=D.status;let M=function(x){const I=Zt[x];if(I!==void 0)return f_(I)}(R),T=D.message;M===void 0&&(M=$.INTERNAL,T="Unknown error status: "+R+" with message "+D.message),m=!0,g.So(new G(M,T)),h.close()}else Y(_e,`RPC '${t}' stream ${r} received:`,A),g.bo(A)}}),v(a,Bg.STAT_EVENT,y=>{y.stat===pu.PROXY?Y(_e,`RPC '${t}' stream ${r} detected buffering proxy`):y.stat===pu.NOPROXY&&Y(_e,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.wo()},0),g}}function Ol(){return typeof document<"u"?document:null}/**
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
 */function Dc(n){return new Gw(n,!0)}/**
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
 */class I_{constructor(t,e,s=1e3,r=1.5,i=6e4){this.ui=t,this.timerId=e,this.ko=s,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-s);r>0&&Y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class A_{constructor(t,e,s,r,i,o,a,c){this.ui=t,this.Ho=s,this.Jo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new I_(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===$.RESOURCE_EXHAUSTED?(Ln(e.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Yo===e&&this.P_(s,r)},s=>{t(()=>{const r=new G($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(r)})})}P_(t,e){const s=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{s(()=>this.I_(r))}),this.stream.onMessage(r=>{s(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return Y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FE extends A_{constructor(t,e,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,r,o),this.serializer=i}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Qw(this.serializer,t),s=function(i){if(!("targetChange"in i))return st.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?st.min():o.readTime?dn(o.readTime):st.min()}(t);return this.listener.d_(e,s)}A_(t){const e={};e.database=Eu(this.serializer),e.addTarget=function(i,o){let a;const c=o.target;if(a=yu(c)?{documents:Zw(i,c)}:{query:tE(i,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=g_(i,o.resumeToken);const l=bu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(st.min())>0){a.readTime=ec(i,o.snapshotVersion.toTimestamp());const l=bu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const s=nE(this.serializer,t);s&&(e.labels=s),this.a_(e)}R_(t){const e={};e.database=Eu(this.serializer),e.removeTarget=t,this.a_(e)}}class $E extends A_{constructor(t,e,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,r,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return kt(!!t.streamToken),this.lastStreamToken=t.streamToken,kt(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){kt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Jw(t.writeResults,t.commitTime),s=dn(t.commitTime);return this.listener.g_(s,e)}p_(){const t={};t.database=Eu(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>Xw(this.serializer,s))};this.a_(e)}}/**
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
 */class BE extends class{}{constructor(t,e,s,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new G($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,s,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(t,xu(e,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G($.UNKNOWN,i.toString())})}Lo(t,e,s,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(t,xu(e,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class UE{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ln(e),this.D_=!1):Y("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class jE{constructor(t,e,s,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{s.enqueueAndForget(async()=>{nr(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=it(c);l.L_.add(4),await So(l),l.q_.set("Unknown"),l.L_.delete(4),await Mc(l)}(this))})}),this.q_=new UE(s,r)}}async function Mc(n){if(nr(n))for(const t of n.B_)await t(!0)}async function So(n){for(const t of n.B_)await t(!1)}function k_(n,t){const e=it(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),kd(e)?Ad(e):Kr(e).r_()&&Id(e,t))}function Td(n,t){const e=it(n),s=Kr(e);e.N_.delete(t),s.r_()&&S_(e,t),e.N_.size===0&&(s.r_()?s.o_():nr(e)&&e.q_.set("Unknown"))}function Id(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(st.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Kr(n).A_(t)}function S_(n,t){n.Q_.xe(t),Kr(n).R_(t)}function Ad(n){n.Q_=new zw({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Kr(n).start(),n.q_.v_()}function kd(n){return nr(n)&&!Kr(n).n_()&&n.N_.size>0}function nr(n){return it(n).L_.size===0}function C_(n){n.Q_=void 0}async function zE(n){n.q_.set("Online")}async function HE(n){n.N_.forEach((t,e)=>{Id(n,t)})}async function qE(n,t){C_(n),kd(n)?(n.q_.M_(t),Ad(n)):n.q_.set("Unknown")}async function WE(n,t,e){if(n.q_.set("Online"),t instanceof m_&&t.state===2&&t.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.N_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.N_.delete(a),r.Q_.removeTarget(a))}(n,t)}catch(s){Y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await nc(n,s)}else if(t instanceof Ma?n.Q_.Ke(t):t instanceof p_?n.Q_.He(t):n.Q_.We(t),!e.isEqual(st.min()))try{const s=await T_(n.localStore);e.compareTo(s)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(l);d&&i.N_.set(l,d.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(le.EMPTY_BYTE_STRING,d.snapshotVersion)),S_(i,c);const h=new Zn(d.target,c,l,d.sequenceNumber);Id(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(s){Y("RemoteStore","Failed to raise snapshot:",s),await nc(n,s)}}async function nc(n,t,e){if(!Io(t))throw t;n.L_.add(1),await So(n),n.q_.set("Offline"),e||(e=()=>T_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Mc(n)})}function R_(n,t){return t().catch(e=>nc(n,e,t))}async function Oc(n){const t=it(n),e=hs(t);let s=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;GE(t);)try{const r=await RE(t.localStore,s);if(r===null){t.O_.length===0&&e.o_();break}s=r.batchId,YE(t,r)}catch(r){await nc(t,r)}P_(t)&&D_(t)}function GE(n){return nr(n)&&n.O_.length<10}function YE(n,t){n.O_.push(t);const e=hs(n);e.r_()&&e.V_&&e.m_(t.mutations)}function P_(n){return nr(n)&&!hs(n).n_()&&n.O_.length>0}function D_(n){hs(n).start()}async function KE(n){hs(n).p_()}async function QE(n){const t=hs(n);for(const e of n.O_)t.m_(e.mutations)}async function XE(n,t,e){const s=n.O_.shift(),r=yd.from(s,t,e);await R_(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Oc(n)}async function JE(n,t){t&&hs(n).V_&&await async function(s,r){if(function(o){return Bw(o)&&o!==$.ABORTED}(r.code)){const i=s.O_.shift();hs(s).s_(),await R_(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Oc(s)}}(n,t),P_(n)&&D_(n)}async function ep(n,t){const e=it(n);e.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const s=nr(e);e.L_.add(3),await So(e),s&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Mc(e)}async function ZE(n,t){const e=it(n);t?(e.L_.delete(2),await Mc(e)):t||(e.L_.add(2),await So(e),e.q_.set("Unknown"))}function Kr(n){return n.K_||(n.K_=function(e,s,r){const i=it(e);return i.w_(),new FE(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Eo:zE.bind(null,n),Ro:HE.bind(null,n),mo:qE.bind(null,n),d_:WE.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),kd(n)?Ad(n):n.q_.set("Unknown")):(await n.K_.stop(),C_(n))})),n.K_}function hs(n){return n.U_||(n.U_=function(e,s,r){const i=it(e);return i.w_(),new $E(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:KE.bind(null,n),mo:JE.bind(null,n),f_:QE.bind(null,n),g_:XE.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Oc(n)):(await n.U_.stop(),n.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Sd{constructor(t,e,s,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,r,i){const o=Date.now()+s,a=new Sd(t,e,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G($.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cd(n,t){if(Ln("AsyncQueue",`${t}: ${n}`),Io(n))return new G($.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Rr{constructor(t){this.comparator=t?(e,s)=>t(e,s)||Q.comparator(e.key,s.key):(e,s)=>Q.comparator(e.key,s.key),this.keyedMap=Oi(),this.sortedSet=new Ut(this.comparator)}static emptySet(t){return new Rr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Rr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new Rr;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
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
 */class np{constructor(){this.W_=new Ut(Q.comparator)}track(t){const e=t.doc.key,s=this.W_.get(e);s?t.type!==0&&s.type===3?this.W_=this.W_.insert(e,t):t.type===3&&s.type!==1?this.W_=this.W_.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.W_=this.W_.remove(e):t.type===1&&s.type===2?this.W_=this.W_.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):nt():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,s)=>{t.push(s)}),t}}class Br{constructor(t,e,s,r,i,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,s,r,i){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Br(t,e,Rr.emptySet(e),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&kc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==s[r].type||!e[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class tT{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class eT{constructor(){this.queries=sp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,s){const r=it(e),i=r.queries;r.queries=sp(),i.forEach((o,a)=>{for(const c of a.j_)c.onError(s)})})(this,new G($.ABORTED,"Firestore shutting down"))}}function sp(){return new Yr(n=>e_(n),kc)}async function M_(n,t){const e=it(n);let s=3;const r=t.query;let i=e.queries.get(r);i?!i.H_()&&t.J_()&&(s=2):(i=new tT,s=t.J_()?0:1);try{switch(s){case 0:i.z_=await e.onListen(r,!0);break;case 1:i.z_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(o){const a=Cd(o,`Initialization of query '${br(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,i),i.j_.push(t),t.Z_(e.onlineState),i.z_&&t.X_(i.z_)&&Rd(e)}async function O_(n,t){const e=it(n),s=t.query;let r=3;const i=e.queries.get(s);if(i){const o=i.j_.indexOf(t);o>=0&&(i.j_.splice(o,1),i.j_.length===0?r=t.J_()?0:1:!i.H_()&&t.J_()&&(r=2))}switch(r){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function nT(n,t){const e=it(n);let s=!1;for(const r of t){const i=r.query,o=e.queries.get(i);if(o){for(const a of o.j_)a.X_(r)&&(s=!0);o.z_=r}}s&&Rd(e)}function sT(n,t,e){const s=it(n),r=s.queries.get(t);if(r)for(const i of r.j_)i.onError(e);s.queries.delete(t)}function Rd(n){n.Y_.forEach(t=>{t.next()})}var Iu,rp;(rp=Iu||(Iu={})).ea="default",rp.Cache="cache";class N_{constructor(t,e,s){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Br(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const s=e!=="Offline";return(!this.options._a||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Br.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Iu.Cache}}/**
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
 */class L_{constructor(t){this.key=t}}class V_{constructor(t){this.key=t}}class rT{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ut(),this.mutatedKeys=ut(),this.Aa=n_(t),this.Ra=new Rr(this.Aa)}get Va(){return this.Ta}ma(t,e){const s=e?e.fa:new np,r=e?e.Ra:this.Ra;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((d,h)=>{const f=r.get(d),m=Sc(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let y=!1;f&&m?f.data.isEqual(m.data)?g!==v&&(s.track({type:3,doc:m}),y=!0):this.ga(f,m)||(s.track({type:2,doc:m}),y=!0,(c&&this.Aa(m,c)>0||l&&this.Aa(m,l)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),y=!0):f&&!m&&(s.track({type:1,doc:f}),y=!0,(c||l)&&(a=!0)),y&&(m?(o=o.add(m),i=v?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),s.track({type:1,doc:d})}return{Ra:o,fa:s,ns:a,mutatedKeys:i}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,r){const i=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((d,h)=>function(m,g){const v=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return nt()}};return v(m)-v(g)}(d.type,h.type)||this.Aa(d.doc,h.doc)),this.pa(s),r=r!=null&&r;const a=e&&!r?this.ya():[],c=this.da.size===0&&this.current&&!r?1:0,l=c!==this.Ea;return this.Ea=c,o.length!==0||l?{snapshot:new Br(this.query,t.Ra,i,o,t.mutatedKeys,c===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new np,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=ut(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const e=[];return t.forEach(s=>{this.da.has(s)||e.push(new V_(s))}),this.da.forEach(s=>{t.has(s)||e.push(new L_(s))}),e}ba(t){this.Ta=t.Ts,this.da=ut();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Br.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class iT{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class oT{constructor(t){this.key=t,this.va=!1}}class aT{constructor(t,e,s,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Yr(a=>e_(a),kc),this.Ma=new Map,this.xa=new Set,this.Oa=new Ut(Q.comparator),this.Na=new Map,this.La=new xd,this.Ba={},this.ka=new Map,this.qa=$r.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function cT(n,t,e=!0){const s=z_(n);let r;const i=s.Fa.get(t);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Da()):r=await F_(s,t,e,!0),r}async function lT(n,t){const e=z_(n);await F_(e,t,!0,!1)}async function F_(n,t,e,s){const r=await PE(n.localStore,un(t)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,e);let a;return s&&(a=await uT(n,t,i,o==="current",r.resumeToken)),n.isPrimaryClient&&e&&k_(n.remoteStore,r),a}async function uT(n,t,e,s,r){n.Ka=(h,f,m)=>async function(v,y,E,A){let C=y.view.ma(E);C.ns&&(C=await Jf(v.localStore,y.query,!1).then(({documents:T})=>y.view.ma(T,C)));const D=A&&A.targetChanges.get(y.targetId),R=A&&A.targetMismatches.get(y.targetId)!=null,M=y.view.applyChanges(C,v.isPrimaryClient,D,R);return op(v,y.targetId,M.wa),M.snapshot}(n,h,f,m);const i=await Jf(n.localStore,t,!0),o=new rT(t,i.Ts),a=o.ma(i.documents),c=ko.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",r),l=o.applyChanges(a,n.isPrimaryClient,c);op(n,e,l.wa);const d=new iT(t,e,o);return n.Fa.set(t,d),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),l.snapshot}async function dT(n,t,e){const s=it(n),r=s.Fa.get(t),i=s.Ma.get(r.targetId);if(i.length>1)return s.Ma.set(r.targetId,i.filter(o=>!kc(o,t))),void s.Fa.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Tu(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),e&&Td(s.remoteStore,r.targetId),Au(s,r.targetId)}).catch(To)):(Au(s,r.targetId),await Tu(s.localStore,r.targetId,!0))}async function hT(n,t){const e=it(n),s=e.Fa.get(t),r=e.Ma.get(s.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),Td(e.remoteStore,s.targetId))}async function fT(n,t,e){const s=bT(n);try{const r=await function(o,a){const c=it(o),l=Ft.now(),d=a.reduce((m,g)=>m.add(g.key),ut());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let g=Vn(),v=ut();return c.cs.getEntries(m,d).next(y=>{g=y,g.forEach((E,A)=>{A.isValidDocument()||(v=v.add(E))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,g)).next(y=>{h=y;const E=[];for(const A of a){const C=Nw(A,h.get(A.key).overlayedDocument);C!=null&&E.push(new ms(A.key,C,Gg(C.value.mapValue),Ue.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,E,a)}).next(y=>{f=y;const E=y.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(m,y.batchId,E)})}).then(()=>({batchId:f.batchId,changes:r_(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let l=o.Ba[o.currentUser.toKey()];l||(l=new Ut(yt)),l=l.insert(a,c),o.Ba[o.currentUser.toKey()]=l}(s,r.batchId,e),await Co(s,r.changes),await Oc(s.remoteStore)}catch(r){const i=Cd(r,"Failed to persist write");e.reject(i)}}async function $_(n,t){const e=it(n);try{const s=await SE(e.localStore,t);t.targetChanges.forEach((r,i)=>{const o=e.Na.get(i);o&&(kt(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.va=!0:r.modifiedDocuments.size>0?kt(o.va):r.removedDocuments.size>0&&(kt(o.va),o.va=!1))}),await Co(e,s,t)}catch(s){await To(s)}}function ip(n,t,e){const s=it(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const r=[];s.Fa.forEach((i,o)=>{const a=o.view.Z_(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=it(o);c.onlineState=a;let l=!1;c.queries.forEach((d,h)=>{for(const f of h.j_)f.Z_(a)&&(l=!0)}),l&&Rd(c)}(s.eventManager,t),r.length&&s.Ca.d_(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function pT(n,t,e){const s=it(n);s.sharedClientState.updateQueryState(t,"rejected",e);const r=s.Na.get(t),i=r&&r.key;if(i){let o=new Ut(Q.comparator);o=o.insert(i,we.newNoDocument(i,st.min()));const a=ut().add(i),c=new Pc(st.min(),new Map,new Ut(yt),o,a);await $_(s,c),s.Oa=s.Oa.remove(i),s.Na.delete(t),Pd(s)}else await Tu(s.localStore,t,!1).then(()=>Au(s,t,e)).catch(To)}async function mT(n,t){const e=it(n),s=t.batch.batchId;try{const r=await kE(e.localStore,t);U_(e,s,null),B_(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await Co(e,r)}catch(r){await To(r)}}async function gT(n,t,e){const s=it(n);try{const r=await function(o,a){const c=it(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let d;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(kt(h!==null),d=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,d,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d)).next(()=>c.localDocuments.getDocuments(l,d))})}(s.localStore,t);U_(s,t,e),B_(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await Co(s,r)}catch(r){await To(r)}}function B_(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function U_(n,t,e){const s=it(n);let r=s.Ba[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(e?i.reject(e):i.resolve(),r=r.remove(t)),s.Ba[s.currentUser.toKey()]=r}}function Au(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Ma.get(t))n.Fa.delete(s),e&&n.Ca.$a(s,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(s=>{n.La.containsKey(s)||j_(n,s)})}function j_(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Td(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Pd(n))}function op(n,t,e){for(const s of e)s instanceof L_?(n.La.addReference(s.key,t),_T(n,s)):s instanceof V_?(Y("SyncEngine","Document no longer in limbo: "+s.key),n.La.removeReference(s.key,t),n.La.containsKey(s.key)||j_(n,s.key)):nt()}function _T(n,t){const e=t.key,s=e.path.canonicalString();n.Oa.get(e)||n.xa.has(s)||(Y("SyncEngine","New document in limbo: "+e),n.xa.add(s),Pd(n))}function Pd(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new Q(Ot.fromString(t)),s=n.qa.next();n.Na.set(s,new oT(e)),n.Oa=n.Oa.insert(e,s),k_(n.remoteStore,new Zn(un(md(e.path)),s,"TargetPurposeLimboResolution",ld.oe))}}async function Co(n,t,e){const s=it(n),r=[],i=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((a,c)=>{o.push(s.Ka(c,t,e).then(l=>{var d;if((l||e)&&s.isPrimaryClient){const h=l?!l.fromCache:(d=e==null?void 0:e.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;s.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(l){r.push(l);const h=Ed.Wi(c.targetId,l);i.push(h)}}))}),await Promise.all(o),s.Ca.d_(r),await async function(c,l){const d=it(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>U.forEach(l,f=>U.forEach(f.$i,m=>d.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>U.forEach(f.Ui,m=>d.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!Io(h))throw h;Y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const m=d.os.get(f),g=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(g);d.os=d.os.insert(f,v)}}}(s.localStore,i))}async function yT(n,t){const e=it(n);if(!e.currentUser.isEqual(t)){Y("SyncEngine","User change. New user:",t.toKey());const s=await E_(e.localStore,t);e.currentUser=t,function(i,o){i.ka.forEach(a=>{a.forEach(c=>{c.reject(new G($.CANCELLED,o))})}),i.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Co(e,s.hs)}}function vT(n,t){const e=it(n),s=e.Na.get(t);if(s&&s.va)return ut().add(s.key);{let r=ut();const i=e.Ma.get(t);if(!i)return r;for(const o of i){const a=e.Fa.get(o);r=r.unionWith(a.view.Va)}return r}}function z_(n){const t=it(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=$_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=vT.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=pT.bind(null,t),t.Ca.d_=nT.bind(null,t.eventManager),t.Ca.$a=sT.bind(null,t.eventManager),t}function bT(n){const t=it(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=mT.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=gT.bind(null,t),t}class sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Dc(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return AE(this.persistence,new TE,t.initialUser,this.serializer)}Ga(t){return new xE(wd.Zr,this.serializer)}Wa(t){return new ME}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sc.provider={build:()=>new sc};class ku{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ip(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=yT.bind(null,this.syncEngine),await ZE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new eT}()}createDatastore(t){const e=Dc(t.databaseInfo.databaseId),s=function(i){return new VE(i)}(t.databaseInfo);return function(i,o,a,c){return new BE(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,r,i,o,a){return new jE(s,r,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>ip(this.syncEngine,e,0),function(){return tp.D()?new tp:new OE}())}createSyncEngine(t,e){return function(r,i,o,a,c,l,d){const h=new aT(r,i,o,a,c,l);return d&&(h.Qa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const i=it(r);Y("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await So(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ku.provider={build:()=>new ku};/**
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
 */class H_{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Ln("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class xT{constructor(t,e,s,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=r,this.user=be.UNAUTHENTICATED,this.clientId=cd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=Cd(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Nl(n,t){n.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await E_(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ap(n,t){n.asyncQueue.verifyOperationInProgress();const e=await wT(n);Y("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>ep(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>ep(t.remoteStore,r)),n._onlineComponents=t}async function wT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nl(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===$.FAILED_PRECONDITION||r.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;Ws("Error using user provided cache. Falling back to memory cache: "+e),await Nl(n,new sc)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await Nl(n,new sc);return n._offlineComponents}async function q_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await ap(n,n._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await ap(n,new ku))),n._onlineComponents}function ET(n){return q_(n).then(t=>t.syncEngine)}async function W_(n){const t=await q_(n),e=t.eventManager;return e.onListen=cT.bind(null,t.syncEngine),e.onUnlisten=dT.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=lT.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=hT.bind(null,t.syncEngine),e}function TT(n,t,e={}){const s=new Dn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const d=new H_({next:f=>{d.Za(),o.enqueueAndForget(()=>O_(i,h));const m=f.docs.has(a);!m&&f.fromCache?l.reject(new G($.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&f.fromCache&&c&&c.source==="server"?l.reject(new G($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new N_(md(a.path),d,{includeMetadataChanges:!0,_a:!0});return M_(i,h)}(await W_(n),n.asyncQueue,t,e,s)),s.promise}function IT(n,t,e={}){const s=new Dn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const d=new H_({next:f=>{d.Za(),o.enqueueAndForget(()=>O_(i,h)),f.fromCache&&c.source==="server"?l.reject(new G($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new N_(a,d,{includeMetadataChanges:!0,_a:!0});return M_(i,h)}(await W_(n),n.asyncQueue,t,e,s)),s.promise}/**
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
 */function G_(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const cp=new Map;/**
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
 */function Y_(n,t,e){if(!e)throw new G($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function K_(n,t,e,s){if(t===!0&&s===!0)throw new G($.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function lp(n){if(!Q.isDocumentKey(n))throw new G($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function up(n){if(Q.isDocumentKey(n))throw new G($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Nc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":nt()}function ze(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new G($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Nc(n);throw new G($.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function AT(n,t){if(t<=0)throw new G($.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
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
 */class dp{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new G($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new G($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}K_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=G_((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Lc{constructor(t,e,s,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new G($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dp(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Hg;switch(s.type){case"firstParty":return new Y0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new G($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=cp.get(e);s&&(Y("ComponentProvider","Removing Datastore"),cp.delete(e),s.terminate())}(this),Promise.resolve()}}function Q_(n,t,e,s={}){var r;const i=(n=ze(n,Lc))._getSettings(),o=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=be.MOCK_USER;else{a=Pg(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new G($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new be(l)}n._authCredentials=new q0(new zg(a,c))}}/**
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
 */class $n{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new $n(this.firestore,t,this._query)}}class Te{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Te(this.firestore,t,this._key)}}class Mn extends $n{constructor(t,e,s){super(t,e,md(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Te(this.firestore,null,new Q(t))}withConverter(t){return new Mn(this.firestore,t,this._path)}}function gt(n,t,...e){if(n=qt(n),Y_("collection","path",t),n instanceof Lc){const s=Ot.fromString(t,...e);return up(s),new Mn(n,null,s)}{if(!(n instanceof Te||n instanceof Mn))throw new G($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ot.fromString(t,...e));return up(s),new Mn(n.firestore,null,s)}}function ee(n,t,...e){if(n=qt(n),arguments.length===1&&(t=cd.newId()),Y_("doc","path",t),n instanceof Lc){const s=Ot.fromString(t,...e);return lp(s),new Te(n,null,new Q(s))}{if(!(n instanceof Te||n instanceof Mn))throw new G($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ot.fromString(t,...e));return lp(s),new Te(n.firestore,n instanceof Mn?n.converter:null,new Q(s))}}/**
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
 */class hp{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new I_(this,"async_queue_retry"),this.Vu=()=>{const s=Ol();s&&Y("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=t;const e=Ol();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Ol();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Dn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Io(t))throw t;Y("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(s=>{this.Eu=s,this.du=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Ln("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.du=!1,s))));return this.mu=e,e}enqueueAfterDelay(t,e,s){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const r=Sd.createAndSchedule(this,t,e,s,i=>this.yu(i));return this.Tu.push(r),r}fu(){this.Eu&&nt()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class gs extends Lc{constructor(t,e,s,r){super(t,e,s,r),this.type="firestore",this._queue=new hp,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new hp(t),this._firestoreClient=void 0,await t}}}function X_(n,t){const e=typeof n=="object"?n:od(),s=typeof n=="string"?n:"(default)",r=Ic(e,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Sg("firestore");i&&Q_(r,...i)}return r}function Vc(n){if(n._terminated)throw new G($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||kT(n),n._firestoreClient}function kT(n){var t,e,s;const r=n._freezeSettings(),i=function(a,c,l,d){return new aw(a,c,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,G_(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new xT(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class Ks{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ks(le.fromBase64String(t))}catch(e){throw new G($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ks(le.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ro{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new G($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Fc{constructor(t){this._methodName=t}}/**
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
 */class $c{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new G($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new G($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return yt(this._lat,t._lat)||yt(this._long,t._long)}}/**
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
 */class Bc{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,t._values)}}/**
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
 */const ST=/^__.*__$/;class CT{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new ms(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ao(t,this.data,e,this.fieldTransforms)}}class J_{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return new ms(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Z_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw nt()}}class Dd{constructor(t,e,s,r,i,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Dd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:s,xu:!1});return r.Ou(t),r}Nu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:s,xu:!1});return r.vu(),r}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return rc(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Z_(this.Cu)&&ST.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class RT{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||Dc(t)}Qu(t,e,s,r=!1){return new Dd({Cu:t,methodName:e,qu:s,path:ae.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uc(n){const t=n._freezeSettings(),e=Dc(n._databaseId);return new RT(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ty(n,t,e,s,r,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,t,e,r);Md("Data must be an object, but it was:",o,s);const a=ey(s,o);let c,l;if(i.merge)c=new Ve(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const h of i.mergeFields){const f=Su(t,h,e);if(!o.contains(f))throw new G($.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);sy(d,f)||d.push(f)}c=new Ve(d),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new CT(new De(a),c,l)}class jc extends Fc{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof jc}}function PT(n,t,e,s){const r=n.Qu(1,t,e);Md("Data must be an object, but it was:",r,s);const i=[],o=De.empty();er(s,(c,l)=>{const d=Od(t,c,e);l=qt(l);const h=r.Nu(d);if(l instanceof jc)i.push(d);else{const f=Po(l,h);f!=null&&(i.push(d),o.set(d,f))}});const a=new Ve(i);return new J_(o,a,r.fieldTransforms)}function DT(n,t,e,s,r,i){const o=n.Qu(1,t,e),a=[Su(t,s,e)],c=[r];if(i.length%2!=0)throw new G($.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Su(t,i[f])),c.push(i[f+1]);const l=[],d=De.empty();for(let f=a.length-1;f>=0;--f)if(!sy(l,a[f])){const m=a[f];let g=c[f];g=qt(g);const v=o.Nu(m);if(g instanceof jc)l.push(m);else{const y=Po(g,v);y!=null&&(l.push(m),d.set(m,y))}}const h=new Ve(l);return new J_(d,h,o.fieldTransforms)}function MT(n,t,e,s=!1){return Po(e,n.Qu(s?4:3,t))}function Po(n,t){if(ny(n=qt(n)))return Md("Unsupported field value:",t,n),ey(n,t);if(n instanceof Fc)return function(s,r){if(!Z_(r.Cu))throw r.Bu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=Po(a,r.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,t)}return function(s,r){if((s=qt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Cw(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Ft.fromDate(s);return{timestampValue:ec(r.serializer,i)}}if(s instanceof Ft){const i=new Ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ec(r.serializer,i)}}if(s instanceof $c)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ks)return{bytesValue:g_(r.serializer,s._byteString)};if(s instanceof Te){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bd(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Bc)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return gd(a.serializer,c)})}}}}}}(s,r);throw r.Bu(`Unsupported field value: ${Nc(s)}`)}(n,t)}function ey(n,t){const e={};return qg(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):er(n,(s,r)=>{const i=Po(r,t.Mu(s));i!=null&&(e[s]=i)}),{mapValue:{fields:e}}}function ny(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ft||n instanceof $c||n instanceof Ks||n instanceof Te||n instanceof Fc||n instanceof Bc)}function Md(n,t,e){if(!ny(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const s=Nc(e);throw s==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+s)}}function Su(n,t,e){if((t=qt(t))instanceof Ro)return t._internalPath;if(typeof t=="string")return Od(n,t);throw rc("Field path arguments must be of type string or ",n,!1,void 0,e)}const OT=new RegExp("[~\\*/\\[\\]]");function Od(n,t,e){if(t.search(OT)>=0)throw rc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ro(...t.split("."))._internalPath}catch{throw rc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function rc(n,t,e,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new G($.INVALID_ARGUMENT,a+n+c)}function sy(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class ry{constructor(t,e,s,r,i){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new NT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(zc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class NT extends ry{data(){return super.data()}}function zc(n,t){return typeof t=="string"?Od(n,t):t instanceof Ro?t._internalPath:t._delegate._internalPath}/**
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
 */function LT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nd{}class Hc extends Nd{}function Yt(n,t,...e){let s=[];t instanceof Nd&&s.push(t),s=s.concat(e),function(i){const o=i.filter(c=>c instanceof qc).length,a=i.filter(c=>c instanceof Do).length;if(o>1||o>0&&a>0)throw new G($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class Do extends Hc{constructor(t,e,s){super(),this._field=t,this._op=e,this._value=s,this.type="where"}static _create(t,e,s){return new Do(t,e,s)}_apply(t){const e=this._parse(t);return iy(t._query,e),new $n(t.firestore,t.converter,vu(t._query,e))}_parse(t){const e=Uc(t.firestore);return function(i,o,a,c,l,d,h){let f;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new G($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){pp(h,d);const m=[];for(const g of h)m.push(fp(c,i,g));f={arrayValue:{values:m}}}else f=fp(c,i,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||pp(h,d),f=MT(a,o,h,d==="in"||d==="not-in");return te.create(l,d,f)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Rt(n,t,e){const s=t,r=zc("where",n);return Do._create(r,s,e)}class qc extends Nd{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new qc(t,e)}_parse(t){const e=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return e.length===1?e[0]:Xe.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)iy(o,c),o=vu(o,c)}(t._query,e),new $n(t.firestore,t.converter,vu(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Wc extends Hc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Wc(t,e)}_apply(t){const e=function(r,i,o){if(r.startAt!==null)throw new G($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new G($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new io(i,o)}(t._query,this._field,this._direction);return new $n(t.firestore,t.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new Gr(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,e))}}function Ld(n,t="asc"){const e=t,s=zc("orderBy",n);return Wc._create(s,e)}class Gc extends Hc{constructor(t,e,s){super(),this.type=t,this._limit=e,this._limitType=s}static _create(t,e,s){return new Gc(t,e,s)}_apply(t){return new $n(t.firestore,t.converter,Ja(t._query,this._limit,this._limitType))}}function ic(n){return AT("limit",n),Gc._create("limit",n,"F")}function fp(n,t,e){if(typeof(e=qt(e))=="string"){if(e==="")throw new G($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!t_(t)&&e.indexOf("/")!==-1)throw new G($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const s=t.path.child(Ot.fromString(e));if(!Q.isDocumentKey(s))throw new G($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Nf(n,new Q(s))}if(e instanceof Te)return Nf(n,e._key);throw new G($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nc(e)}.`)}function pp(n,t){if(!Array.isArray(n)||n.length===0)throw new G($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function iy(n,t){const e=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new G($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new G($.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class oy{convertValue(t,e="none"){switch(Ys(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Kt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Gs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw nt()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return er(t,(r,i)=>{s[r]=this.convertValue(i,e)}),s}convertVectorValue(t){var e,s,r;const i=(r=(s=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>Kt(o.doubleValue));return new Bc(i)}convertGeoPoint(t){return new $c(Kt(t.latitude),Kt(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=dd(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(so(t));default:return null}}convertTimestamp(t){const e=ds(t);return new Ft(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=Ot.fromString(t);kt(w_(s));const r=new Lr(s.get(1),s.get(3)),i=new Q(s.popFirst(5));return r.isEqual(e)||Ln(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function ay(n,t,e){let s;return s=n?n.toFirestore(t):t,s}/**
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
 */class Ar{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Vd extends ry{constructor(t,e,s,r,i,o){super(t,e,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Wi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(zc("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}}class Wi extends Vd{data(t={}){return super.data(t)}}class cy{constructor(t,e,s,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Ar(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new Wi(this._firestore,this._userDataWriter,s.key,s,new Ar(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new G($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new Wi(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Ar(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Wi(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Ar(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,d=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:VT(a.type),doc:c,oldIndex:l,newIndex:d}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function VT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return nt()}}/**
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
 */function co(n){n=ze(n,Te);const t=ze(n.firestore,gs);return TT(Vc(t),n._key).then(e=>FT(t,n,e))}class ly extends oy{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ks(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Te(this.firestore,null,e)}}function bt(n){n=ze(n,$n);const t=ze(n.firestore,gs),e=Vc(t),s=new ly(t);return LT(n._query),IT(e,n._query).then(r=>new cy(t,s,n,r))}function uy(n,t,e){n=ze(n,Te);const s=ze(n.firestore,gs),r=ay(n.converter,t);return Mo(s,[ty(Uc(s),"setDoc",n._key,r,n.converter!==null,e).toMutation(n._key,Ue.none())])}function je(n,t,e,...s){n=ze(n,Te);const r=ze(n.firestore,gs),i=Uc(r);let o;return o=typeof(t=qt(t))=="string"||t instanceof Ro?DT(i,"updateDoc",n._key,t,e,s):PT(i,"updateDoc",n._key,t),Mo(r,[o.toMutation(n._key,Ue.exists(!0))])}function Fd(n){return Mo(ze(n.firestore,gs),[new _d(n._key,Ue.none())])}function sr(n,t){const e=ze(n.firestore,gs),s=ee(n),r=ay(n.converter,t);return Mo(e,[ty(Uc(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,Ue.exists(!1))]).then(()=>s)}function Mo(n,t){return function(s,r){const i=new Dn;return s.asyncQueue.enqueueAndForget(async()=>fT(await ET(s),r,i)),i.promise}(Vc(n),t)}function FT(n,t,e){const s=e.docs.get(t._key),r=new ly(n);return new Vd(n,r,t._key,s,new Ar(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(r){Wr=r})(tr),Hs(new ls("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new gs(new W0(s.getProvider("auth-internal")),new Q0(s.getProvider("app-check-internal")),function(l,d){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new G($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lr(l.options.projectId,d)}(o,r),o);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ln(Rf,"4.7.3",t),ln(Rf,"4.7.3","esm2017")})();const $T=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:oy,Bytes:Ks,CollectionReference:Mn,DocumentReference:Te,DocumentSnapshot:Vd,FieldPath:Ro,FieldValue:Fc,Firestore:gs,FirestoreError:G,GeoPoint:$c,Query:$n,QueryCompositeFilterConstraint:qc,QueryConstraint:Hc,QueryDocumentSnapshot:Wi,QueryFieldFilterConstraint:Do,QueryLimitConstraint:Gc,QueryOrderByConstraint:Wc,QuerySnapshot:cy,SnapshotMetadata:Ar,Timestamp:Ft,VectorValue:Bc,_AutoId:cd,_ByteString:le,_DatabaseId:Lr,_DocumentKey:Q,_EmptyAuthCredentialsProvider:Hg,_FieldPath:ae,_cast:ze,_logWarn:Ws,_validateIsNotUsedTogether:K_,addDoc:sr,collection:gt,connectFirestoreEmulator:Q_,deleteDoc:Fd,doc:ee,ensureFirestoreConfigured:Vc,executeWrite:Mo,getDoc:co,getDocs:bt,getFirestore:X_,limit:ic,orderBy:Ld,query:Yt,setDoc:uy,updateDoc:je,where:Rt},Symbol.toStringTag,{value:"Module"}));/**
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
 */const dy="firebasestorage.googleapis.com",hy="storageBucket",BT=2*60*1e3,UT=10*60*1e3,jT=1e3;/**
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
 */class jt extends _n{constructor(t,e,s=0){super(Ll(t),`Firebase Storage: ${e} (${Ll(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,jt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ll(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Lt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Lt||(Lt={}));function Ll(n){return"storage/"+n}function $d(){const n="An unknown error occurred, please check the error payload for server response.";return new jt(Lt.UNKNOWN,n)}function zT(n){return new jt(Lt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function HT(n){return new jt(Lt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new jt(Lt.UNAUTHENTICATED,n)}function WT(){return new jt(Lt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function GT(n){return new jt(Lt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function fy(){return new jt(Lt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function py(){return new jt(Lt.CANCELED,"User canceled the upload/download.")}function YT(n){return new jt(Lt.INVALID_URL,"Invalid URL '"+n+"'.")}function KT(n){return new jt(Lt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function QT(){return new jt(Lt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+hy+"' property when initializing the app?")}function my(){return new jt(Lt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function XT(){return new jt(Lt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function JT(){return new jt(Lt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ZT(n){return new jt(Lt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Cu(n){return new jt(Lt.INVALID_ARGUMENT,n)}function gy(){return new jt(Lt.APP_DELETED,"The Firebase app was deleted.")}function tI(n){return new jt(Lt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Gi(n,t){return new jt(Lt.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function vi(n){throw new jt(Lt.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Fe{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=Fe.makeFromUrl(t,e)}catch{return new Fe(t,"")}if(s.path==="")return s;throw KT(t)}static makeFromUrl(t,e){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(D){D.path_=decodeURIComponent(D.path)}const d="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${d}/b/${r}/o${f}`,"i"),g={bucket:1,path:3},v=e===dy?"(?:storage.googleapis.com|storage.cloud.google.com)":e,y="([^?#]*)",E=new RegExp(`^https?://${v}/${r}/${y}`,"i"),C=[{regex:a,indices:c,postModify:i},{regex:m,indices:g,postModify:l},{regex:E,indices:{bucket:1,path:2},postModify:l}];for(let D=0;D<C.length;D++){const R=C[D],M=R.regex.exec(t);if(M){const T=M[R.indices.bucket];let b=M[R.indices.path];b||(b=""),s=new Fe(T,b),R.postModify(s);break}}if(s==null)throw YT(t);return s}}class eI{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function nI(n,t,e){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function d(...y){l||(l=!0,t.apply(null,y))}function h(y){r=setTimeout(()=>{r=null,n(m,c())},y)}function f(){i&&clearTimeout(i)}function m(y,...E){if(l){f();return}if(y){f(),d.call(null,y,...E);return}if(c()||o){f(),d.call(null,y,...E);return}s<64&&(s*=2);let C;a===1?(a=2,C=0):C=(s+Math.random())*1e3,h(C)}let g=!1;function v(y){g||(g=!0,f(),!l&&(r!==null?(y||(a=2),clearTimeout(r),h(0)):y||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},e),v}function sI(n){n(!1)}/**
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
 */function rI(n){return n!==void 0}function iI(n){return typeof n=="function"}function oI(n){return typeof n=="object"&&!Array.isArray(n)}function Yc(n){return typeof n=="string"||n instanceof String}function mp(n){return Bd()&&n instanceof Blob}function Bd(){return typeof Blob<"u"}function gp(n,t,e,s){if(s<t)throw Cu(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw Cu(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
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
 */function Oo(n,t,e){let s=t;return e==null&&(s=`https://${t}`),`${e}://${s}/v0${n}`}function _y(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const r=t(s)+"="+t(n[s]);e=e+r+"&"}return e=e.slice(0,-1),e}var Vs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Vs||(Vs={}));/**
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
 */function yy(n,t){const e=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,i=t.indexOf(n)!==-1;return e||r||i}/**
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
 */class aI{constructor(t,e,s,r,i,o,a,c,l,d,h,f=!0){this.url_=t,this.method_=e,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,g)=>{this.resolve_=m,this.reject_=g,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new ua(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Vs.NO_ERROR,c=i.getStatus();if(!a||yy(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Vs.ABORT;s(!1,new ua(!1,null,d));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new ua(l,i))})},e=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());rI(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=$d();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?gy():py();o(c)}else{const c=fy();o(c)}};this.canceled_?e(!1,new ua(!1,null,!0)):this.backoffId_=nI(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&sI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ua{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function cI(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function lI(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function uI(n,t){t&&(n["X-Firebase-GMPID"]=t)}function dI(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function hI(n,t,e,s,r,i,o=!0){const a=_y(n.urlParams),c=n.url+a,l=Object.assign({},n.headers);return uI(l,t),cI(l,e),lI(l,i),dI(l,s),new aI(c,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,o)}/**
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
 */function fI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function pI(...n){const t=fI();if(t!==void 0){const e=new t;for(let s=0;s<n.length;s++)e.append(n[s]);return e.getBlob()}else{if(Bd())return new Blob(n);throw new jt(Lt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function mI(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function gI(n){if(typeof atob>"u")throw ZT("base-64");return atob(n)}/**
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
 */const cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Vl{constructor(t,e){this.data=t,this.contentType=e||null}}function _I(n,t){switch(n){case cn.RAW:return new Vl(vy(t));case cn.BASE64:case cn.BASE64URL:return new Vl(by(n,t));case cn.DATA_URL:return new Vl(vI(t),bI(t))}throw $d()}function vy(n){const t=[];for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const i=s,o=n.charCodeAt(++e);s=65536|(i&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function yI(n){let t;try{t=decodeURIComponent(n)}catch{throw Gi(cn.DATA_URL,"Malformed data URL.")}return vy(t)}function by(n,t){switch(n){case cn.BASE64:{const r=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(r||i)throw Gi(n,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case cn.BASE64URL:{const r=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(r||i)throw Gi(n,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=gI(t)}catch(r){throw r.message.includes("polyfill")?r:Gi(n,"Invalid character found")}const s=new Uint8Array(e.length);for(let r=0;r<e.length;r++)s[r]=e.charCodeAt(r);return s}class xy{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw Gi(cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;s!=null&&(this.base64=xI(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function vI(n){const t=new xy(n);return t.base64?by(cn.BASE64,t.rest):yI(t.rest)}function bI(n){return new xy(n).contentType}function xI(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
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
 */class Yn{constructor(t,e){let s=0,r="";mp(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(mp(this.data_)){const s=this.data_,r=mI(s,t,e);return r===null?null:new Yn(r)}else{const s=new Uint8Array(this.data_.buffer,t,e-t);return new Yn(s,!0)}}static getBlob(...t){if(Bd()){const e=t.map(s=>s instanceof Yn?s.data_:s);return new Yn(pI.apply(null,e))}else{const e=t.map(o=>Yc(o)?_I(cn.RAW,o).data:o.data_);let s=0;e.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return e.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Yn(r,!0)}}uploadData(){return this.data_}}/**
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
 */function wy(n){let t;try{t=JSON.parse(n)}catch{return null}return oI(t)?t:null}/**
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
 */function wI(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function EI(n,t){const e=t.split("/").filter(s=>s.length>0).join("/");return n.length===0?e:n+"/"+e}function Ey(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
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
 */function TI(n,t){return t}class Ce{constructor(t,e,s,r){this.server=t,this.local=e||t,this.writable=!!s,this.xform=r||TI}}let da=null;function II(n){return!Yc(n)||n.length<2?n:Ey(n)}function Ty(){if(da)return da;const n=[];n.push(new Ce("bucket")),n.push(new Ce("generation")),n.push(new Ce("metageneration")),n.push(new Ce("name","fullPath",!0));function t(i,o){return II(o)}const e=new Ce("name");e.xform=t,n.push(e);function s(i,o){return o!==void 0?Number(o):o}const r=new Ce("size");return r.xform=s,n.push(r),n.push(new Ce("timeCreated")),n.push(new Ce("updated")),n.push(new Ce("md5Hash",null,!0)),n.push(new Ce("cacheControl",null,!0)),n.push(new Ce("contentDisposition",null,!0)),n.push(new Ce("contentEncoding",null,!0)),n.push(new Ce("contentLanguage",null,!0)),n.push(new Ce("contentType",null,!0)),n.push(new Ce("metadata","customMetadata",!0)),da=n,da}function AI(n,t){function e(){const s=n.bucket,r=n.fullPath,i=new Fe(s,r);return t._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:e})}function kI(n,t,e){const s={};s.type="file";const r=e.length;for(let i=0;i<r;i++){const o=e[i];s[o.local]=o.xform(s,t[o.server])}return AI(s,n),s}function Iy(n,t,e){const s=wy(t);return s===null?null:kI(n,s,e)}function SI(n,t,e,s){const r=wy(t);if(r===null||!Yc(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const d=n.bucket,h=n.fullPath,f="/b/"+o(d)+"/o/"+o(h),m=Oo(f,e,s),g=_y({alt:"media",token:l});return m+g})[0]}function Ay(n,t){const e={},s=t.length;for(let r=0;r<s;r++){const i=t[r];i.writable&&(e[i.server]=n[i.local])}return JSON.stringify(e)}class Qr{constructor(t,e,s,r){this.url=t,this.method=e,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function On(n){if(!n)throw $d()}function Ud(n,t){function e(s,r){const i=Iy(n,r,t);return On(i!==null),i}return e}function CI(n,t){function e(s,r){const i=Iy(n,r,t);return On(i!==null),SI(i,r,n.host,n._protocol)}return e}function No(n){function t(e,s){let r;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?r=WT():r=qT():e.getStatus()===402?r=HT(n.bucket):e.getStatus()===403?r=GT(n.path):r=s,r.status=e.getStatus(),r.serverResponse=s.serverResponse,r}return t}function ky(n){const t=No(n);function e(s,r){let i=t(s,r);return s.getStatus()===404&&(i=zT(n.path)),i.serverResponse=r.serverResponse,i}return e}function RI(n,t,e){const s=t.fullServerUrl(),r=Oo(s,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new Qr(r,i,Ud(n,e),o);return a.errorHandler=ky(t),a}function PI(n,t,e){const s=t.fullServerUrl(),r=Oo(s,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new Qr(r,i,CI(n,e),o);return a.errorHandler=ky(t),a}function DI(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function Sy(n,t,e){const s=Object.assign({},e);return s.fullPath=n.path,s.size=t.size(),s.contentType||(s.contentType=DI(null,t)),s}function MI(n,t,e,s,r){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let D=0;D<2;D++)C=C+Math.random().toString().slice(2);return C}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Sy(t,s,r),d=Ay(l,e),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",m=Yn.getBlob(h,s,f);if(m===null)throw my();const g={name:l.fullPath},v=Oo(i,n.host,n._protocol),y="POST",E=n.maxUploadRetryTime,A=new Qr(v,y,Ud(n,e),E);return A.urlParams=g,A.headers=o,A.body=m.uploadData(),A.errorHandler=No(t),A}class oc{constructor(t,e,s,r){this.current=t,this.total=e,this.finalized=!!s,this.metadata=r||null}}function jd(n,t){let e=null;try{e=n.getResponseHeader("X-Goog-Upload-Status")}catch{On(!1)}return On(!!e&&(t||["active"]).indexOf(e)!==-1),e}function OI(n,t,e,s,r){const i=t.bucketOnlyServerUrl(),o=Sy(t,s,r),a={name:o.fullPath},c=Oo(i,n.host,n._protocol),l="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Ay(o,e),f=n.maxUploadRetryTime;function m(v){jd(v);let y;try{y=v.getResponseHeader("X-Goog-Upload-URL")}catch{On(!1)}return On(Yc(y)),y}const g=new Qr(c,l,m,f);return g.urlParams=a,g.headers=d,g.body=h,g.errorHandler=No(t),g}function NI(n,t,e,s){const r={"X-Goog-Upload-Command":"query"};function i(l){const d=jd(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{On(!1)}h||On(!1);const f=Number(h);return On(!isNaN(f)),new oc(f,s.size(),d==="final")}const o="POST",a=n.maxUploadRetryTime,c=new Qr(e,o,i,a);return c.headers=r,c.errorHandler=No(t),c}const _p=256*1024;function LI(n,t,e,s,r,i,o,a){const c=new oc(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw XT();const l=c.total-c.current;let d=l;r>0&&(d=Math.min(d,r));const h=c.current,f=h+d;let m="";d===0?m="finalize":l===d?m="upload, finalize":m="upload";const g={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${c.current}`},v=s.slice(h,f);if(v===null)throw my();function y(D,R){const M=jd(D,["active","final"]),T=c.current+d,b=s.size();let x;return M==="final"?x=Ud(t,i)(D,R):x=null,new oc(T,b,M==="final",x)}const E="POST",A=t.maxUploadRetryTime,C=new Qr(e,E,y,A);return C.headers=g,C.body=v.uploadData(),C.progressCallback=a||null,C.errorHandler=No(n),C}const Pe={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Fl(n){switch(n){case"running":case"pausing":case"canceling":return Pe.RUNNING;case"paused":return Pe.PAUSED;case"success":return Pe.SUCCESS;case"canceled":return Pe.CANCELED;case"error":return Pe.ERROR;default:return Pe.ERROR}}/**
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
 */class VI{constructor(t,e,s){if(iI(t)||e!=null||s!=null)this.next=t,this.error=e??void 0,this.complete=s??void 0;else{const i=t;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function fr(n){return(...t)=>{Promise.resolve().then(()=>n(...t))}}class FI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Vs.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Vs.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Vs.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,s,r){if(this.sent_)throw vi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw vi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class $I extends FI{initXhr(){this.xhr_.responseType="text"}}function Er(){return new $I}/**
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
 */class BI{constructor(t,e,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=s,this._mappings=Ty(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(Lt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(yy(r.status,[]))if(i)r=fy();else{this.sleepTime=Math.max(this.sleepTime*2,jT),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(Lt.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,s])=>{switch(this._state){case"running":t(e,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const s=OI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Er,t,e);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,s)=>{const r=NI(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(r,Er,e,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=_p*this._chunkMultiplier,e=new oc(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=LI(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Er,r,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){_p*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const s=RI(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,Er,t,e);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const s=MI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Er,t,e);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e=this._state==="paused";this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=py(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Fl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,s,r){const i=new VI(e||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);e!==-1&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Fl(this._state)){case Pe.SUCCESS:fr(this._resolve.bind(null,this.snapshot))();break;case Pe.CANCELED:case Pe.ERROR:const e=this._reject;fr(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Fl(this._state)){case Pe.RUNNING:case Pe.PAUSED:t.next&&fr(t.next.bind(t,this.snapshot))();break;case Pe.SUCCESS:t.complete&&fr(t.complete.bind(t))();break;case Pe.CANCELED:case Pe.ERROR:t.error&&fr(t.error.bind(t,this._error))();break;default:t.error&&fr(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
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
 */class Qs{constructor(t,e){this._service=t,e instanceof Fe?this._location=e:this._location=Fe.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Qs(t,e)}get root(){const t=new Fe(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ey(this._location.path)}get storage(){return this._service}get parent(){const t=wI(this._location.path);if(t===null)return null;const e=new Fe(this._location.bucket,t);return new Qs(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw tI(t)}}function UI(n,t,e){return n._throwIfRoot("uploadBytesResumable"),new BI(n,new Yn(t),e)}function jI(n){n._throwIfRoot("getDownloadURL");const t=PI(n.storage,n._location,Ty());return n.storage.makeRequestWithTokens(t,Er).then(e=>{if(e===null)throw JT();return e})}function zI(n,t){const e=EI(n._location.path,t),s=new Fe(n._location.bucket,e);return new Qs(n.storage,s)}/**
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
 */function HI(n){return/^[A-Za-z]+:\/\//.test(n)}function qI(n,t){return new Qs(n,t)}function Cy(n,t){if(n instanceof zd){const e=n;if(e._bucket==null)throw QT();const s=new Qs(e,e._bucket);return t!=null?Cy(s,t):s}else return t!==void 0?zI(n,t):n}function WI(n,t){if(t&&HI(t)){if(n instanceof zd)return qI(n,t);throw Cu("To use ref(service, url), the first argument must be a Storage instance.")}else return Cy(n,t)}function yp(n,t){const e=t==null?void 0:t[hy];return e==null?null:Fe.makeFromBucketSpec(e,n)}function GI(n,t,e,s={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:r}=s;r&&(n._overrideAuthToken=typeof r=="string"?r:Pg(r,n.app.options.projectId))}class zd{constructor(t,e,s,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=dy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=BT,this._maxUploadRetryTime=UT,this._requests=new Set,r!=null?this._bucket=Fe.makeFromBucketSpec(r,this._host):this._bucket=yp(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Fe.makeFromBucketSpec(this._url,t):this._bucket=yp(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){gp("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){gp("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Qs(this,t)}_makeRequest(t,e,s,r,i=!0){if(this._deleted)return new eI(gy());{const o=hI(t,this._appId,s,r,e,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,e){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,r).getPromise()}}const vp="@firebase/storage",bp="0.13.2";/**
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
 */const Ry="storage";function YI(n,t,e){return n=qt(n),UI(n,t,e)}function KI(n){return n=qt(n),jI(n)}function QI(n,t){return n=qt(n),WI(n,t)}function XI(n=od(),t){n=qt(n);const s=Ic(n,Ry).getImmediate({identifier:t}),r=Sg("storage");return r&&JI(s,...r),s}function JI(n,t,e,s={}){GI(n,t,e,s)}function ZI(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new zd(e,s,r,t,tr)}function tA(){Hs(new ls(Ry,ZI,"PUBLIC").setMultipleInstances(!0)),ln(vp,bp,""),ln(vp,bp,"esm2017")}tA();function Hd(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(e[s[r]]=n[s[r]]);return e}function Py(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eA=Py,Dy=new wo("auth","Firebase",Py());/**
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
 */const ac=new rd("@firebase/auth");function nA(n,...t){ac.logLevel<=ft.WARN&&ac.warn(`Auth (${tr}): ${n}`,...t)}function Oa(n,...t){ac.logLevel<=ft.ERROR&&ac.error(`Auth (${tr}): ${n}`,...t)}/**
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
 */function Je(n,...t){throw qd(n,...t)}function hn(n,...t){return qd(n,...t)}function My(n,t,e){const s=Object.assign(Object.assign({},eA()),{[t]:e});return new wo("auth","Firebase",s).create(t,{appName:n.name})}function as(n){return My(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qd(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return Dy.create(n,...t)}function Z(n,t,...e){if(!n)throw qd(t,...e)}function An(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Oa(t),new Error(t)}function Fn(n,t){n||An(t)}/**
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
 */function Ru(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function sA(){return xp()==="http:"||xp()==="https:"}function xp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function rA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sA()||Ex()||"connection"in navigator)?navigator.onLine:!0}function iA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Lo{constructor(t,e){this.shortDelay=t,this.longDelay=e,Fn(e>t,"Short delay should be less than long delay!"),this.isMobile=bx()||Tx()}get(){return rA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wd(n,t){Fn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class Oy{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const aA=new Lo(3e4,6e4);function _s(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Bn(n,t,e,s,r={}){return Ny(n,r,async()=>{let i={},o={};s&&(t==="GET"?o=s:i={body:JSON.stringify(s)});const a=Eo(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:t,headers:c},i);return wx()||(l.referrerPolicy="no-referrer"),Oy.fetch()(Ly(n,n.config.apiHost,e,a),l)})}async function Ny(n,t,e){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},oA),t);try{const r=new lA(n),i=await Promise.race([e(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ha(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ha(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ha(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ha(n,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw My(n,d,l);Je(n,d)}}catch(r){if(r instanceof _n)throw r;Je(n,"network-request-failed",{message:String(r)})}}async function Kc(n,t,e,s,r={}){const i=await Bn(n,t,e,s,r);return"mfaPendingCredential"in i&&Je(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Ly(n,t,e,s){const r=`${t}${e}?${s}`;return n.config.emulator?Wd(n.config,r):`${n.config.apiScheme}://${r}`}function cA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lA{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(hn(this.auth,"network-request-failed")),aA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ha(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const r=hn(n,t,s);return r.customData._tokenResponse=e,r}function wp(n){return n!==void 0&&n.enterprise!==void 0}class uA{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return cA(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function dA(n,t){return Bn(n,"GET","/v2/recaptchaConfig",_s(n,t))}/**
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
 */async function hA(n,t){return Bn(n,"POST","/v1/accounts:delete",t)}async function Vy(n,t){return Bn(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function Yi(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function fA(n,t=!1){const e=qt(n),s=await e.getIdToken(t),r=Gd(s);Z(r&&r.exp&&r.auth_time&&r.iat,e.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Yi($l(r.auth_time)),issuedAtTime:Yi($l(r.iat)),expirationTime:Yi($l(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $l(n){return Number(n)*1e3}function Gd(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return Oa("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ag(e);return r?JSON.parse(r):(Oa("Failed to decode base64 JWT payload"),null)}catch(r){return Oa("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ep(n){const t=Gd(n);return Z(t,"internal-error"),Z(typeof t.exp<"u","internal-error"),Z(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function lo(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof _n&&pA(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function pA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class mA{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Pu{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yi(this.lastLoginAt),this.creationTime=Yi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cc(n){var t;const e=n.auth,s=await n.getIdToken(),r=await lo(n,Vy(e,{idToken:s}));Z(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Fy(i.providerUserInfo):[],a=_A(n.providerData,o),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Pu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function gA(n){const t=qt(n);await cc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _A(n,t){return[...n.filter(s=>!t.some(r=>r.providerId===s.providerId)),...t]}function Fy(n){return n.map(t=>{var{providerId:e}=t,s=Hd(t,["providerId"]);return{providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function yA(n,t){const e=await Ny(n,{},async()=>{const s=Eo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=Ly(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Oy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function vA(n,t){return Bn(n,"POST","/v2/accounts:revokeToken",_s(n,t))}/**
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
 */class Pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Z(t.idToken,"internal-error"),Z(typeof t.idToken<"u","internal-error"),Z(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ep(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){Z(t.length!==0,"internal-error");const e=Ep(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:r,expiresIn:i}=await yA(t,e);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:r,expirationTime:i}=e,o=new Pr;return s&&(Z(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),r&&(Z(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),i&&(Z(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Pr,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function qn(n,t){Z(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class kn{constructor(t){var{uid:e,auth:s,stsTokenManager:r}=t,i=Hd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await lo(this,this.stsTokenManager.getToken(this.auth,t));return Z(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return fA(this,t)}reload(){return gA(this)}_assign(t){this!==t&&(Z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new kn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await cc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(In(this.auth.app))return Promise.reject(as(this.auth));const t=await this.getIdToken();return await lo(this,hA(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var s,r,i,o,a,c,l,d;const h=(s=e.displayName)!==null&&s!==void 0?s:void 0,f=(r=e.email)!==null&&r!==void 0?r:void 0,m=(i=e.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=e.photoURL)!==null&&o!==void 0?o:void 0,v=(a=e.tenantId)!==null&&a!==void 0?a:void 0,y=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=e.createdAt)!==null&&l!==void 0?l:void 0,A=(d=e.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:C,emailVerified:D,isAnonymous:R,providerData:M,stsTokenManager:T}=e;Z(C&&T,t,"internal-error");const b=Pr.fromJSON(this.name,T);Z(typeof C=="string",t,"internal-error"),qn(h,t.name),qn(f,t.name),Z(typeof D=="boolean",t,"internal-error"),Z(typeof R=="boolean",t,"internal-error"),qn(m,t.name),qn(g,t.name),qn(v,t.name),qn(y,t.name),qn(E,t.name),qn(A,t.name);const x=new kn({uid:C,auth:t,email:f,emailVerified:D,displayName:h,isAnonymous:R,photoURL:g,phoneNumber:m,tenantId:v,stsTokenManager:b,createdAt:E,lastLoginAt:A});return M&&Array.isArray(M)&&(x.providerData=M.map(I=>Object.assign({},I))),y&&(x._redirectEventId=y),x}static async _fromIdTokenResponse(t,e,s=!1){const r=new Pr;r.updateFromServerResponse(e);const i=new kn({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:s});return await cc(i),i}static async _fromGetAccountInfoResponse(t,e,s){const r=e.users[0];Z(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Fy(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Pr;a.updateFromIdToken(s);const c=new kn({uid:r.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Pu(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const Tp=new Map;function Sn(n){Fn(n instanceof Function,"Expected a class definition");let t=Tp.get(n);return t?(Fn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Tp.set(n,t),t)}/**
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
 */class $y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}$y.type="NONE";const Ip=$y;/**
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
 */function Na(n,t,e){return`firebase:${n}:${t}:${e}`}class Dr{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Na(this.userKey,r.apiKey,i),this.fullPersistenceKey=Na("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?kn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new Dr(Sn(Ip),t,s);const r=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Sn(Ip);const o=Na(s,t.config.apiKey,t.name);let a=null;for(const l of e)try{const d=await l._get(o);if(d){const h=kn._fromJSON(t,d);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Dr(i,t,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Dr(i,t,s))}}/**
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
 */function Ap(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(zy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(By(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(qy(t))return"Blackberry";if(Wy(t))return"Webos";if(Uy(t))return"Safari";if((t.includes("chrome/")||jy(t))&&!t.includes("edge/"))return"Chrome";if(Hy(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function By(n=Ie()){return/firefox\//i.test(n)}function Uy(n=Ie()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function jy(n=Ie()){return/crios\//i.test(n)}function zy(n=Ie()){return/iemobile/i.test(n)}function Hy(n=Ie()){return/android/i.test(n)}function qy(n=Ie()){return/blackberry/i.test(n)}function Wy(n=Ie()){return/webos/i.test(n)}function Yd(n=Ie()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function bA(n=Ie()){var t;return Yd(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function xA(){return Ix()&&document.documentMode===10}function Gy(n=Ie()){return Yd(n)||Hy(n)||Wy(n)||qy(n)||/windows phone/i.test(n)||zy(n)}/**
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
 */function Yy(n,t=[]){let e;switch(n){case"Browser":e=Ap(Ie());break;case"Worker":e=`${Ap(Ie())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${tr}/${s}`}/**
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
 */class wA{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const s=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});s.onAbort=e,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const s of this.queue)await s(t),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const r of e)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function EA(n,t={}){return Bn(n,"GET","/v2/passwordPolicy",_s(n,t))}/**
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
 */const TA=6;class IA{constructor(t){var e,s,r,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:TA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let r=0;r<t.length;r++)s=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class AA{constructor(t,e,s,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kp(this),this.idTokenSubscription=new kp(this),this.beforeStateQueue=new wA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Sn(e)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Dr.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Vy(this,{idToken:t}),s=await kn._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(In(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await cc(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=iA()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(In(this.app))return Promise.reject(as(this));const e=t?qt(t):null;return e&&Z(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&Z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return In(this.app)?Promise.reject(as(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return In(this.app)?Promise.reject(as(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await EA(this),e=new IA(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new wo("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await vA(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Sn(t)||this._popupRedirectResolver;Z(e,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[Sn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,s;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,r){if(this._deleted)return()=>{};const i=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,s,r);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Yy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(e["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&nA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function rr(n){return qt(n)}class kp{constructor(t){this.auth=t,this.observer=null,this.addObserver=Mx(e=>this.observer=e)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kA(n){Qc=n}function Ky(n){return Qc.loadJS(n)}function SA(){return Qc.recaptchaEnterpriseScript}function CA(){return Qc.gapiScript}function RA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const PA="recaptcha-enterprise",DA="NO_RECAPTCHA";class MA{constructor(t){this.type=PA,this.auth=rr(t)}async verify(t="verify",e=!1){async function s(i){if(!e){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{dA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new uA(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;wp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(DA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!e&&wp(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=SA();c.length!==0&&(c+=a),Ky(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Sp(n,t,e,s=!1){const r=new MA(n);let i;try{i=await r.verify(e)}catch{i=await r.verify(e,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Du(n,t,e,s){var r;if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Sp(n,t,e,e==="getOobCode");return s(n,i)}else return s(n,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Sp(n,t,e,e==="getOobCode");return s(n,o)}else return Promise.reject(i)})}/**
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
 */function OA(n,t){const e=Ic(n,"auth");if(e.isInitialized()){const r=e.getImmediate(),i=e.getOptions();if(Ya(i,t??{}))return r;Je(r,"already-initialized")}return e.initialize({options:t})}function NA(n,t){const e=(t==null?void 0:t.persistence)||[],s=(Array.isArray(e)?e:[e]).map(Sn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function LA(n,t,e){const s=rr(n);Z(s._canInitEmulator,s,"emulator-config-failed"),Z(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const r=!1,i=Qy(t),{host:o,port:a}=VA(t),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),FA()}function Qy(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function VA(n){const t=Qy(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Cp(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Cp(o)}}}function Cp(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function FA(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Kd{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return An("not implemented")}_getIdTokenResponse(t){return An("not implemented")}_linkToIdToken(t,e){return An("not implemented")}_getReauthenticationResolver(t){return An("not implemented")}}async function $A(n,t){return Bn(n,"POST","/v1/accounts:signUp",t)}/**
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
 */async function BA(n,t){return Kc(n,"POST","/v1/accounts:signInWithPassword",_s(n,t))}async function UA(n,t){return Bn(n,"POST","/v1/accounts:sendOobCode",_s(n,t))}async function jA(n,t){return UA(n,t)}/**
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
 */async function zA(n,t){return Kc(n,"POST","/v1/accounts:signInWithEmailLink",_s(n,t))}async function HA(n,t){return Kc(n,"POST","/v1/accounts:signInWithEmailLink",_s(n,t))}/**
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
 */class uo extends Kd{constructor(t,e,s,r=null){super("password",s),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new uo(t,e,"password")}static _fromEmailAndCode(t,e,s=null){return new uo(t,e,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Du(t,e,"signInWithPassword",BA);case"emailLink":return zA(t,{email:this._email,oobCode:this._password});default:Je(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const s={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Du(t,s,"signUpPassword",$A);case"emailLink":return HA(t,{idToken:e,email:this._email,oobCode:this._password});default:Je(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Mr(n,t){return Kc(n,"POST","/v1/accounts:signInWithIdp",_s(n,t))}/**
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
 */const qA="http://localhost";class Xs extends Kd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Xs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Je("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:r}=e,i=Hd(e,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Xs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Mr(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,Mr(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Mr(t,e)}buildRequest(){const t={requestUri:qA,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Eo(e)}return t}}/**
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
 */function WA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GA(n){const t=Pi(Di(n)).link,e=t?Pi(Di(t)).deep_link_id:null,s=Pi(Di(n)).deep_link_id;return(s?Pi(Di(s)).link:null)||s||e||t||n}class Qd{constructor(t){var e,s,r,i,o,a;const c=Pi(Di(t)),l=(e=c.apiKey)!==null&&e!==void 0?e:null,d=(s=c.oobCode)!==null&&s!==void 0?s:null,h=WA((r=c.mode)!==null&&r!==void 0?r:null);Z(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=GA(t);try{return new Qd(e)}catch{return null}}}/**
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
 */class Xr{constructor(){this.providerId=Xr.PROVIDER_ID}static credential(t,e){return uo._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const s=Qd.parseLink(e);return Z(s,"argument-error"),uo._fromEmailAndCode(t,s.code,s.tenantId)}}Xr.PROVIDER_ID="password";Xr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Xy{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vo extends Xy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kn extends Vo{constructor(){super("facebook.com")}static credential(t){return Xs._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kn.credentialFromTaggedObject(t)}static credentialFromError(t){return Kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Kn.credential(t.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
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
 */class Qn extends Vo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Xs._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Qn.credentialFromTaggedObject(t)}static credentialFromError(t){return Qn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return Qn.credential(e,s)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
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
 */class Xn extends Vo{constructor(){super("github.com")}static credential(t){return Xs._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xn.credentialFromTaggedObject(t)}static credentialFromError(t){return Xn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Xn.credential(t.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
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
 */class Jn extends Vo{constructor(){super("twitter.com")}static credential(t,e){return Xs._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Jn.credentialFromTaggedObject(t)}static credentialFromError(t){return Jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return Jn.credential(e,s)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
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
 */class Ur{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,r=!1){const i=await kn._fromIdTokenResponse(t,s,r),o=Rp(s);return new Ur({user:i,providerId:o,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const r=Rp(s);return new Ur({user:t,providerId:r,_tokenResponse:s,operationType:e})}}function Rp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class lc extends _n{constructor(t,e,s,r){var i;super(e.code,e.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,lc.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,r){return new lc(t,e,s,r)}}function Jy(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lc._fromErrorAndOperation(n,i,t,s):i})}async function YA(n,t,e=!1){const s=await lo(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Ur._forOperation(n,"link",s)}/**
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
 */async function KA(n,t,e=!1){const{auth:s}=n;if(In(s.app))return Promise.reject(as(s));const r="reauthenticate";try{const i=await lo(n,Jy(s,r,t,n),e);Z(i.idToken,s,"internal-error");const o=Gd(i.idToken);Z(o,s,"internal-error");const{sub:a}=o;return Z(n.uid===a,s,"user-mismatch"),Ur._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Je(s,"user-mismatch"),i}}/**
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
 */async function Zy(n,t,e=!1){if(In(n.app))return Promise.reject(as(n));const s="signIn",r=await Jy(n,s,t),i=await Ur._fromIdTokenResponse(n,s,r);return e||await n._updateCurrentUser(i.user),i}async function QA(n,t){return Zy(rr(n),t)}/**
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
 */async function XA(n){const t=rr(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function JA(n,t,e){const s=rr(n);await Du(s,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",jA)}function ZA(n,t,e){return In(n.app)?Promise.reject(as(n)):QA(qt(n),Xr.credential(t,e)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&XA(n),s})}function tk(n,t,e,s){return qt(n).onIdTokenChanged(t,e,s)}function ek(n,t,e){return qt(n).beforeAuthStateChanged(t,e)}function nk(n,t,e,s){return qt(n).onAuthStateChanged(t,e,s)}function sk(n){return qt(n).signOut()}const uc="__sak";/**
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
 */class tv{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(uc,"1"),this.storage.removeItem(uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rk=1e3,ik=10;class ev extends tv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gy(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),r=this.localCache[e];s!==r&&t(e,r,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;e?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!e&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);xA()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,ik):r()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},rk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ev.type="LOCAL";const ok=ev;/**
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
 */class nv extends tv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}nv.type="SESSION";const sv=nv;/**
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
 */function ak(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Xc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(r=>r.isListeningto(t));if(e)return e;const s=new Xc(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(e.origin,i)),c=await ak(a);e.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xc.receivers=[];/**
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
 */function Xd(n="",t=10){let e="";for(let s=0;s<t;s++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class ck{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Xd("",20);r.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function fn(){return window}function lk(n){fn().location.href=n}/**
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
 */function rv(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function uk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function hk(){return rv()?self:null}/**
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
 */const iv="firebaseLocalStorageDb",fk=1,dc="firebaseLocalStorage",ov="fbase_key";class Fo{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Jc(n,t){return n.transaction([dc],t?"readwrite":"readonly").objectStore(dc)}function pk(){const n=indexedDB.deleteDatabase(iv);return new Fo(n).toPromise()}function Mu(){const n=indexedDB.open(iv,fk);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(dc,{keyPath:ov})}catch(r){e(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(dc)?t(s):(s.close(),await pk(),t(await Mu()))})})}async function Pp(n,t,e){const s=Jc(n,!0).put({[ov]:t,value:e});return new Fo(s).toPromise()}async function mk(n,t){const e=Jc(n,!1).get(t),s=await new Fo(e).toPromise();return s===void 0?null:s.value}function Dp(n,t){const e=Jc(n,!0).delete(t);return new Fo(e).toPromise()}const gk=800,_k=3;class av{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mu(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>_k)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xc._getInstance(hk()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await uk(),!this.activeServiceWorker)return;this.sender=new ck(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((e=s[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||dk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Mu();return await Pp(t,uc,"1"),await Dp(t,uc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>Pp(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>mk(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Dp(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const i=Jc(r,!1).getAll();return new Fo(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:r,value:i}of t)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}av.type="LOCAL";const yk=av;new Lo(3e4,6e4);/**
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
 */function vk(n,t){return t?Sn(t):(Z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Jd extends Kd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Mr(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Mr(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Mr(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function bk(n){return Zy(n.auth,new Jd(n),n.bypassAuthState)}function xk(n){const{auth:t,user:e}=n;return Z(e,t,"internal-error"),KA(e,new Jd(n),n.bypassAuthState)}async function wk(n){const{auth:t,user:e}=n;return Z(e,t,"internal-error"),YA(e,new Jd(n),n.bypassAuthState)}/**
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
 */class cv{constructor(t,e,s,r,i=!1){this.auth=t,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return bk;case"linkViaPopup":case"linkViaRedirect":return wk;case"reauthViaPopup":case"reauthViaRedirect":return xk;default:Je(this.auth,"internal-error")}}resolve(t){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ek=new Lo(2e3,1e4);class kr extends cv{constructor(t,e,s,r,i){super(t,e,r,i),this.provider=s,this.authWindow=null,this.pollId=null,kr.currentPopupAction&&kr.currentPopupAction.cancel(),kr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Z(t,this.auth,"internal-error"),t}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const t=Xd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,s;if(!((s=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Ek.get())};t()}}kr.currentPopupAction=null;/**
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
 */const Tk="pendingRedirect",La=new Map;class Ik extends cv{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=La.get(this.auth._key());if(!t){try{const s=await Ak(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(e){t=()=>Promise.reject(e)}La.set(this.auth._key(),t)}return this.bypassAuthState||La.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ak(n,t){const e=Ck(t),s=Sk(n);if(!await s._isAvailable())return!1;const r=await s._get(e)==="true";return await s._remove(e),r}function kk(n,t){La.set(n._key(),t)}function Sk(n){return Sn(n._redirectPersistence)}function Ck(n){return Na(Tk,n.config.apiKey,n.name)}async function Rk(n,t,e=!1){if(In(n.app))return Promise.reject(as(n));const s=rr(n),r=vk(s,t),o=await new Ik(s,r,e).execute();return o&&!e&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
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
 */const Pk=10*60*1e3;class Dk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Mk(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var s;if(t.error&&!lv(t)){const r=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";e.onError(hn(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Pk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mp(t))}saveEventToCache(t){this.cachedEventUids.add(Mp(t)),this.lastProcessedEventTime=Date.now()}}function Mp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function lv({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Mk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lv(n);default:return!1}}/**
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
 */async function Ok(n,t={}){return Bn(n,"GET","/v1/projects",t)}/**
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
 */const Nk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lk=/^https?/;async function Vk(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Ok(n);for(const e of t)try{if(Fk(e))return}catch{}Je(n,"unauthorized-domain")}function Fk(n){const t=Ru(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===s}if(!Lk.test(e))return!1;if(Nk.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const $k=new Lo(3e4,6e4);function Op(){const n=fn().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Bk(n){return new Promise((t,e)=>{var s,r,i;function o(){Op(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Op(),e(hn(n,"network-request-failed"))},timeout:$k.get()})}if(!((r=(s=fn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((i=fn().gapi)===null||i===void 0)&&i.load)o();else{const a=RA("iframefcb");return fn()[a]=()=>{gapi.load?o():e(hn(n,"network-request-failed"))},Ky(`${CA()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw Va=null,t})}let Va=null;function Uk(n){return Va=Va||Bk(n),Va}/**
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
 */const jk=new Lo(5e3,15e3),zk="__/auth/iframe",Hk="emulator/auth/iframe",qk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gk(n){const t=n.config;Z(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Wd(t,Hk):`https://${n.config.authDomain}/${zk}`,s={apiKey:t.apiKey,appName:n.name,v:tr},r=Wk.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${e}?${Eo(s).slice(1)}`}async function Yk(n){const t=await Uk(n),e=fn().gapi;return Z(e,n,"internal-error"),t.open({where:document.body,url:Gk(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qk,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=hn(n,"network-request-failed"),a=fn().setTimeout(()=>{i(o)},jk.get());function c(){fn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Kk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qk=500,Xk=600,Jk="_blank",Zk="http://localhost";class Np{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function t1(n,t,e,s=Qk,r=Xk){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Kk),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Ie().toLowerCase();e&&(a=jy(l)?Jk:e),By(l)&&(t=t||Zk,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(bA(l)&&a!=="_self")return e1(t||"",a),new Np(null);const h=window.open(t||"",a,d);Z(h,n,"popup-blocked");try{h.focus()}catch{}return new Np(h)}function e1(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
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
 */const n1="__/auth/handler",s1="emulator/auth/handler",r1=encodeURIComponent("fac");async function Lp(n,t,e,s,r,i){Z(n.config.authDomain,n,"auth-domain-config-required"),Z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:tr,eventId:r};if(t instanceof Xy){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Dx(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(t instanceof Vo){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${r1}=${encodeURIComponent(c)}`:"";return`${i1(n)}?${Eo(a).slice(1)}${l}`}function i1({config:n}){return n.emulator?Wd(n,s1):`https://${n.authDomain}/${n1}`}/**
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
 */const Bl="webStorageSupport";class o1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sv,this._completeRedirectFn=Rk,this._overrideRedirectResult=kk}async _openPopup(t,e,s,r){var i;Fn((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Lp(t,e,s,Ru(),r);return t1(t,o,Xd())}async _openRedirect(t,e,s,r){await this._originValidation(t);const i=await Lp(t,e,s,Ru(),r);return lk(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:r,promise:i}=this.eventManagers[e];return r?Promise.resolve(r):(Fn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await Yk(t),s=new Dk(t);return e.register("authEvent",r=>(Z(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Bl,{type:Bl},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Bl];o!==void 0&&e(!!o),Je(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Vk(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Gy()||Uy()||Yd()}}const a1=o1;var Vp="@firebase/auth",Fp="1.7.9";/**
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
 */class c1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function l1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function u1(n){Hs(new ls("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yy(n)},l=new AA(s,r,i,c);return NA(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),Hs(new ls("auth-internal",t=>{const e=rr(t.getProvider("auth").getImmediate());return(s=>new c1(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(Vp,Fp,l1(n)),ln(Vp,Fp,"esm2017")}/**
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
 */const d1=5*60,h1=Rg("authIdTokenMaxAge")||d1;let $p=null;const f1=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>h1)return;const r=e==null?void 0:e.token;$p!==r&&($p=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function p1(n=od()){const t=Ic(n,"auth");if(t.isInitialized())return t.getImmediate();const e=OA(n,{popupRedirectResolver:a1,persistence:[yk,ok,sv]}),s=Rg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=f1(i.toString());ek(e,o,()=>o(e.currentUser)),tk(e,a=>o(a))}}const r=kg("auth");return r&&LA(e,`http://${r}`),e}function m1(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}kA({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=r=>{const i=hn("internal-error");i.customData=r,e(i)},s.type="text/javascript",s.charset="UTF-8",m1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});u1("Browser");const uv={},dv=n=>typeof window<"u"&&window[n]?window[n]:typeof globalThis<"u"&&globalThis[n]?globalThis[n]:null,g1={apiKey:"AIzaSyAuJIZeL0ipjVAdoSjH5Wq5IIwdjWexoaE",authDomain:"controle-de-obras-axel.firebaseapp.com",projectId:"controle-de-obras-axel",storageBucket:"controle-de-obras-axel.firebasestorage.app",messagingSenderId:"438724917414",appId:"1:438724917414:web:cb9674cdc557bdf2a7dc67"},_1=()=>{const n=dv("__FIREBASE_CONFIG");if(n)return n;const t=import.meta&&uv||{},e={apiKey:t.VITE_FIREBASE_API_KEY,authDomain:t.VITE_FIREBASE_AUTH_DOMAIN,projectId:t.VITE_FIREBASE_PROJECT_ID,storageBucket:t.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:t.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:t.VITE_FIREBASE_APP_ID};return Object.values(e).every(Boolean)?e:(console.warn("[Config] Firebase config não encontrada em globals/ENV; usando fallback padrão legado."),g1)},y1=()=>{const n=dv("__RDO_API_CONFIG");if(n)return n;const t=import.meta&&uv||{},e=t.VITE_RDO_API_TOKEN||t.VITE_RDO_TOKEN,s=t.VITE_RDO_API_BASE||"https://rdo.axelindustrial.com.br/api";return e?{TOKEN:e,BASE_URL:s}:{TOKEN:"",BASE_URL:s}},v1=_1(),Zc=Og(v1),J=X_(Zc),b1=XI(Zc),fa=p1(Zc),x1=async()=>(console.log("[Firebase] Configuração carregada com sucesso"),Zc),At={state:{currentUser:null,currentTheme:localStorage.getItem("theme")||"dark",currentObra:null,sidebarCollapsed:localStorage.getItem("sidebarCollapsed")==="true"},listeners:[],subscribe(n){return this.listeners.push(n),()=>{this.listeners=this.listeners.filter(t=>t!==n)}},setState(n){this.state={...this.state,...n},this.notify()},notify(){this.listeners.forEach(n=>n(this.state))},setUser(n){this.setState({currentUser:n})},setTheme(n){localStorage.setItem("theme",n),this.applyTheme(n)},applyTheme(n){this.setState({currentTheme:n});const t=document.documentElement;t.classList.remove("dark","theme-light"),n==="dark"||n==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?(t.classList.add("dark"),t.setAttribute("data-theme","dark")):(t.classList.add("theme-light"),t.setAttribute("data-theme","light"))},toggleSidebar(){const n=!this.state.sidebarCollapsed;localStorage.setItem("sidebarCollapsed",n),this.setState({sidebarCollapsed:n})}},hc={init:()=>new Promise(n=>{nk(fa,async t=>{if(t)try{const e=await co(ee(J,"usuarios",t.uid));if(e.exists()){const s={uid:t.uid,email:t.email,...e.data()};At.setUser(s)}else At.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}catch(e){console.warn("Erro ao buscar perfil (usando fallback):",e.message),At.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}else At.setUser(null);n(At.state.currentUser)})}),login:async(n,t)=>{try{const s=(await ZA(fa,n,t)).user,r=await co(ee(J,"usuarios",s.uid));if(r.exists()){const i={uid:s.uid,email:s.email,...r.data()};return At.setUser(i),i}else throw new Error("Perfil de usuário não encontrado.")}catch(e){throw e}},logout:async()=>{await sk(fa),At.setUser(null)},recoverPassword:async n=>{await JA(fa,n)}},Et={routes:{},currentRoute:null,init(){window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())},on(n,t){this.routes[n]=t},navigate(n){window.location.hash=n},matchRoute(n){if(this.routes[n])return{handler:this.routes[n],params:{}};const t=n.split("/").filter(Boolean);for(const[e,s]of Object.entries(this.routes)){const r=e.split("/").filter(Boolean);if(r.length!==t.length)continue;const i={};let o=!0;for(let a=0;a<r.length;a++){const c=r[a],l=t[a];if(c.startsWith(":"))i[c.slice(1)]=decodeURIComponent(l);else if(c!==l){o=!1;break}}if(o)return{handler:s,params:i}}return null},async handleRoute(){const n=window.location.hash.slice(1)||"/";if(!At.state.currentUser&&n!=="/login"&&n!=="/forgot-password"){this.navigate("/login");return}if(At.state.currentUser&&(n==="/login"||n==="/forgot-password")){this.navigate("/");return}const t=this.matchRoute(n),e=(t==null?void 0:t.handler)||this.routes["/404"]||(()=>console.warn("Rota não encontrada:",n)),s=(t==null?void 0:t.params)||{};this.currentRoute=n,await e(s)}},F={createInput:({type:n="text",id:t,label:e,placeholder:s="",value:r="",required:i=!1,className:o=""})=>`
            <div class="flex flex-col gap-1 ${o}">
                ${e?`<label for="${t}" class="text-xs font-display tracking-wide text-text-muted uppercase">${e}</label>`:""}
                <input 
                    type="${n}" 
                    id="${t}" 
                    name="${t}" 
                    placeholder="${s}" 
                    value="${r}"
                    ${i?"required":""}
                    class="input"
                />
            </div>
        `,createButton:({id:n,text:t,type:e="button",variant:s="primary",icon:r="",onClick:i="",className:o=""})=>`
            <button 
                id="${n}" 
                type="${e}" 
                class="${s==="primary"?"btn":"btn-secondary"} ${o}"
                ${i?`onclick="${i}"`:""}
            >
                ${r}
                <span>${t}</span>
            </button>
        `,createCard:({title:n,content:t,footer:e="",className:s=""})=>`
            <div class="card ${s}">
                ${n?`<h3 class="text-lg font-display text-text mb-4">${n}</h3>`:""}
                <div class="text-text">
                    ${t}
                </div>
                ${e?`<div class="mt-4 pt-4 border-t border-border">${e}</div>`:""}
            </div>
        `,createToast:(n,t="success")=>{const e=document.createElement("div"),s=t==="success"?"bg-primary":t==="error"?"bg-alert":"bg-primary";e.className=`fixed top-4 right-4 ${s} text-canvas px-6 py-3 rounded shadow-heavy transform transition-all duration-300 translate-y-[-100%] z-50 flex items-center gap-2 font-display uppercase tracking-wide`,e.innerHTML=`<span>${n}</span>`,document.body.appendChild(e),requestAnimationFrame(()=>{e.classList.remove("translate-y-[-100%]")}),setTimeout(()=>{e.classList.add("opacity-0","translate-y-[-100%]"),setTimeout(()=>e.remove(),300)},3e3)},createLoader:()=>`
            <div class="flex justify-center items-center p-4">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
        `},Bp={renderLogin:()=>`
            <div class="min-h-screen flex items-center justify-center bg-canvas px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8 bg-surface border border-border shadow-heavy p-8 rounded">
                    <div class="text-center space-y-2">
                        <h2 class="text-3xl font-display text-primary tracking-wide">
                            AXEL GESTÃO
                        </h2>
                        <p class="text-sm heading-muted">
                            Entre com suas credenciais para acessar
                        </p>
                    </div>
                    <form id="login-form" class="space-y-6">
                        <div class="space-y-4">
                            ${F.createInput({id:"email",type:"email",label:"Email",placeholder:"seu@email.com",required:!0,className:"mb-4"})}
                            ${F.createInput({id:"password",type:"password",label:"Senha",placeholder:"••••••••",required:!0})}
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="text-sm">
                                <a href="#/forgot-password" class="font-display uppercase tracking-wide text-primary hover:text-primary-strong">
                                    Esqueceu a senha?
                                </a>
                            </div>
                        </div>

                        <div>
                            ${F.createButton({id:"btn-login",text:"Entrar",type:"submit",className:"w-full justify-center"})}
                        </div>
                    </form>
                </div>
            </div>
        `,renderForgotPassword:()=>`
            <div class="min-h-screen flex items-center justify-center bg-canvas px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8 bg-surface border border-border shadow-heavy p-8 rounded">
                    <div class="text-center space-y-2">
                        <h2 class="text-3xl font-display text-primary tracking-wide">
                            Recuperar Senha
                        </h2>
                        <p class="text-sm heading-muted">
                            Informe seu email para receber o link
                        </p>
                    </div>
                    <form id="forgot-form" class="space-y-6">
                        ${F.createInput({id:"email-recovery",type:"email",label:"Email",required:!0})}

                        <div class="flex gap-4">
                            ${F.createButton({id:"btn-back",text:"Voltar",variant:"secondary",className:"w-full justify-center",onClick:"window.location.hash = '/login'"})}
                            ${F.createButton({id:"btn-recover",text:"Enviar",type:"submit",className:"w-full justify-center"})}
                        </div>
                    </form>
                </div>
            </div>
        `},Up={initLogin:()=>{const n=document.getElementById("app");n.innerHTML=Bp.renderLogin(),document.getElementById("login-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email").value,r=document.getElementById("password").value,i=document.getElementById("btn-login");try{i.disabled=!0,i.innerHTML=F.createLoader(),await hc.login(s,r),F.createToast("Login realizado com sucesso!"),Et.navigate("/")}catch(o){console.error(o);let a="Erro ao realizar login.";o.code==="auth/invalid-credential"&&(a="Email ou senha incorretos."),F.createToast(a,"error"),i.disabled=!1,i.innerHTML="<span>Entrar</span>"}})},initForgotPassword:()=>{const n=document.getElementById("app");n.innerHTML=Bp.renderForgotPassword(),document.getElementById("forgot-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email-recovery").value,r=document.getElementById("btn-recover");try{r.disabled=!0,r.innerHTML=F.createLoader(),await hc.recoverPassword(s),F.createToast("Email de recuperação enviado!"),setTimeout(()=>Et.navigate("/login"),2e3)}catch(i){F.createToast("Erro ao enviar email: "+i.message,"error"),r.disabled=!1,r.innerHTML="<span>Enviar</span>"}})}},w1="modulepreload",E1=function(n){return"/"+n},jp={},ho=function(t,e,s){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(e.map(c=>{if(c=E1(c),c in jp)return;jp[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":w1,l||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),l)return new Promise((f,m)=>{h.addEventListener("load",f),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},T1=async n=>{if(!n)return null;const t=await bt(Yt(gt(J,"obras"),Rt("__name__","==",n)));if(t.empty)return null;const e=t.docs[0].data(),s=Number(e.orcamento||e.valor_orcado||0),r=Number(e.tolerancia_percentual||0),i=s+s*r,a=(await bt(Yt(gt(J,"compras"),Rt("obraId","==",n)))).docs.map(l=>l.data());let c=0;return a.forEach(l=>{const d=(l.status_compra||"").toLowerCase(),h=!l.estouro_orcamento||l.status_aprovacao==="Aprovado";(d==="comprado"||d==="recebido"||d==="entregue")&&h&&(c+=Number(l.valor_total||l.valor_estimado||0))}),{limite_real:i,comprometido:c,orcado:s}},I1=async n=>{var t,e,s;try{const{ObrasService:r}=await ho(async()=>{const{ObrasService:l}=await Promise.resolve().then(()=>LD);return{ObrasService:l}},void 0),i=await((t=r.getObraById)==null?void 0:t.call(r,n)),o=(i==null?void 0:i.numero_os)||(i==null?void 0:i.numeroOS)||n;if(!o)return null;const{RDOService:a}=await ho(async()=>{const{RDOService:l}=await Promise.resolve().then(()=>Lb);return{RDOService:l}},void 0),c=await a.getIntegratedDataForObra(o);if((e=c==null?void 0:c.reports)!=null&&e.length){const l=a.processRDOData(c.reports);return{...l,quantidadeRelatorios:c.quantidadeRelatorios||((s=l.reports)==null?void 0:s.length)||0}}return c?{quantidadeRelatorios:c.quantidadeRelatorios||0,totalHoras:Number(c.totalHoras||0)}:null}catch(r){return console.warn("[Dashboard] RDO fetch fail",(r==null?void 0:r.message)||r),null}},A1=n=>{const t=new Date,e=new Date(t.getTime()-7*24*60*60*1e3),s=new Date(t.getFullYear(),t.getMonth(),1),r=new Date(t.getTime()-14*24*60*60*1e3),i=n.filter(m=>{const g=new Date(m.data_emissao||m.data_solicitacao);return g>=e&&g<=t}),o=n.filter(m=>{const g=new Date(m.data_emissao||m.data_solicitacao);return g>=s&&g<=t}),a=n.filter(m=>{const g=new Date(m.data_emissao||m.data_solicitacao);return g>=r&&g<e}),c=i.reduce((m,g)=>m+Number(g.valor_total||g.valor_estimado||0),0),l=o.reduce((m,g)=>m+Number(g.valor_total||g.valor_estimado||0),0),d=a.reduce((m,g)=>m+Number(g.valor_total||g.valor_estimado||0),0),h=d>0?(c-d)/d*100:0,f=o.length>0?l/o.length:0;return{semana:{quantidade:i.length,valor:c},mes:{quantidade:o.length,valor:l},variacaoSemanal:h,ticketMedio:f}},k1=n=>{const t=new Date,e=n.previsao_entrega?new Date(n.previsao_entrega):null,s=n.ultima_atualizacao?new Date(n.ultima_atualizacao):n.data_emissao?new Date(n.data_emissao):null;let r=0,i="baixa",o="";const a=(n.status_compra||"").toLowerCase();if(["entregue","recebido","cancelado"].includes(a))return{score:0,criticidade:"baixa",motivo:""};if(e&&e<t){const c=Math.floor((t-e)/864e5);r=100+c,i="alta",o=`Atrasado há ${c} dias`}else if(e){const c=Math.floor((e-t)/864e5);c<=3&&c>=0&&(r=80+(3-c)*5,i="media",o=`Vence em ${c} dias`)}else if(s&&a==="comprado"){const c=Math.floor((t-s)/864e5);c>=5&&(r=60+c,i="media",o=`Sem atualização há ${c} dias`)}else if(a==="pendente"&&n.data_solicitacao){const c=Math.floor((t-new Date(n.data_solicitacao))/864e5);c>=7&&(r=50+c,i="media",o=`Pendente há ${c} dias`)}else!e&&a==="comprado"&&(r=40,i="baixa",o="Sem previsão de entrega");return{score:r,criticidade:i,motivo:o}},$e={getCompradorStats:async(n={})=>{const t=gt(J,"compras");let e=Yt(t);n.obraId&&(e=Yt(t,Rt("obraId","==",n.obraId)));let r=(await bt(e)).docs.map(V=>({id:V.id,...V.data()}));if(n.periodo){const{start:V,end:q}=n.periodo,W=V?new Date(V):null,tt=q?new Date(q):null;(W||tt)&&(r=r.filter(at=>{const ht=at.data_emissao||at.data_solicitacao;if(!ht)return!1;const K=new Date(ht);return!(W&&K<W||tt&&K>tt)}))}const i=r.filter(V=>V.status_compra==="Pendente"),o=r.filter(V=>V.status_compra==="Em Cotação"),a=r.sort((V,q)=>new Date(q.data_solicitacao||0)-new Date(V.data_solicitacao||0)).slice(0,5);let c=0,l=0,d=0,h=0,f=0,m=0;const g={},v={},y={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0},E=await bt(gt(J,"centrosCusto")),A=new Map(E.docs.map(V=>[V.id,V.data().nome||V.data().codigo||V.id])),C=await bt(gt(J,"obras")),D=new Map(C.docs.map(V=>[V.id,V.data().nome_obra||V.data().apelido_obra||V.id])),M=r.map(V=>{const{score:q,criticidade:W,motivo:tt}=k1(V);return{...V,obraNome:D.get(V.obraId)||V.obra||V.obraId||"N/D",score:q,criticidade:W,motivo:tt}}).filter(V=>V.score>0).sort((V,q)=>q.score-V.score).slice(0,10);r.forEach(V=>{const q=Number(V.valor_estimado||V.valor_total||0);m+=q;const W=V.previsao_entrega?new Date(V.previsao_entrega):null,tt=V.data_recebimento?new Date(V.data_recebimento):null;if(W&&V.status_compra!=="Entregue"&&V.status_compra!=="Recebido"&&W<new Date&&c++,tt&&W&&(l++,tt<=W&&d++),V.data_emissao&&(tt||W)){const ue=tt||W,tn=Math.max(0,(new Date(ue)-new Date(V.data_emissao))/(1e3*60*60*24));h+=tn,f++}const at=(V.status_compra||"").toLowerCase();at.includes("cot")&&y.cotacao++,!W&&at!=="recebido"&&at!=="entregue"&&y.sem_previsao++,W&&W<new Date&&at!=="recebido"&&at!=="entregue"&&y.atrasados++;const K=(V.status_aprovacao||"").toLowerCase();(V.estouro_orcamento||K==="pendente")&&y.pendente_aprovacao++;const wt=(V.natureza_compra||"Outros").trim();g[wt]=(g[wt]||0)+q;const St=A.get(V.centroCustoId)||V.centroCustoNome||V.centro_custo||V.centroCustoId||"N/D";v[St]=(v[St]||0)+q});const T=l?d/l*100:0,b=f?h/f:0,x=A1(r),I=new Date,S=new Date(I.getTime()+3*24*60*60*1e3);let P=c;r.forEach(V=>{const q=V.previsao_entrega?new Date(V.previsao_entrega):null,W=(V.status_compra||"").toLowerCase();q&&q>=I&&q<=S&&W!=="recebido"&&W!=="entregue"&&P++});const k=i.length+o.length,X=3;let j=0;r.forEach(V=>{const q=(V.status_compra||"").toLowerCase();if(q==="comprado"||q==="aprovado"){const W=V.ultima_atualizacao||V.data_emissao||V.data_solicitacao;W&&Math.floor((I-new Date(W))/864e5)>=X&&j++}});const B=y.sem_previsao;return{pendentes:i.length,emCotacao:o.length,recentes:a,atrasos:c,sla:T,lead:b,totalValor:m,naturezaTotais:g,ccTotais:v,alerts:y,atividade:x,urgentes:P,aguardandoAcao:k,precisamAtualizacao:j,semPrevisao:B,comprasCriticas:M}},getTimelineData:async(n=null)=>{const t=gt(J,"compras");let e=Yt(t);n&&(e=Yt(t,Rt("obraId","==",n)));const s=await bt(e),r=new Date;r.setHours(0,0,0,0);const i=new Date(r);i.setDate(r.getDate()+7);const o=[];return s.docs.forEach(a=>{const c=a.data();if(!c.previsao_entrega)return;const l=new Date(c.previsao_entrega);l.setHours(0,0,0,0),l>=r&&l<=i&&o.push({id:a.id,...c,date:l})}),o.sort((a,c)=>a.date-c.date)},getObraStats:async n=>{if(!n)return{pendentes:0,transito:0,entregues:0,recentes:[]};const t=gt(J,"compras"),e=Yt(t,Rt("obraId","==",n),Rt("status_compra","in",["Pendente","Em Cotação","Aprovado"])),s=await bt(e),r=Yt(t,Rt("obraId","==",n),Rt("status_compra","==","Comprado")),i=await bt(r),o=Yt(t,Rt("obraId","==",n),Rt("status_compra","in",["Entregue","Recebido"])),a=await bt(o),c=Yt(t,Rt("obraId","==",n),Ld("data_solicitacao","desc"),ic(5)),l=await bt(c),d=await bt(Yt(t,Rt("obraId","==",n)));let h=0,f=0,m=0,g=0,v=0;const y=await T1(n),E=(y==null?void 0:y.comprometido)||0,A=(y==null?void 0:y.limite_real)||(y==null?void 0:y.orcado)||0,C=A>0?E/A*100:0,D=Math.max(0,A-E),R={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0};d.docs.forEach(T=>{const b=T.data(),x=b.previsao_entrega?new Date(b.previsao_entrega):null,I=b.data_recebimento?new Date(b.data_recebimento):null,S=(b.status_compra||"").toLowerCase();if(x&&S!=="entregue"&&S!=="recebido"&&x<new Date&&(h++,R.atrasados++),I&&x&&(f++,I<=x&&m++),b.data_emissao&&(I||x)){const k=I||x,X=Math.max(0,(new Date(k)-new Date(b.data_emissao))/(1e3*60*60*24));g+=X,v++}!x&&S!=="recebido"&&S!=="entregue"&&R.sem_previsao++;const P=(b.status_aprovacao||"").toLowerCase();(b.estouro_orcamento||P==="pendente")&&R.pendente_aprovacao++,S.includes("cot")&&R.cotacao++});const M=await I1(n);return{pendentes:s.size,transito:i.size,entregues:a.size,recentes:l.docs.map(T=>({id:T.id,...T.data()})),atrasos:h,sla:f?m/f*100:0,lead:v?g/v:0,economia:D,curvaPercent:C,comprometido:E,limiteReal:A,rdoData:M,alerts:R}},getObras:async()=>(await bt(gt(J,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getDiretorStats:async()=>{const n=gt(J,"compras"),t=Yt(n,ic(500)),e=await bt(t);let s=0,r={},i={},o=0,a=0,c=0,l=0,d=0,h=0,f=0;const m={},g={},v={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0},y=[];e.forEach(R=>{const M=R.data(),T=Number(M.valor_estimado||M.valor_total||0);y.push({id:R.id,...M}),s+=T,r[M.status_compra]=(r[M.status_compra]||0)+1,M.status_compra!=="Entregue"&&M.status_compra!=="Recebido"&&M.previsao_entrega&&new Date(M.previsao_entrega)<new Date&&(c++,v.atrasados++);const b=M.previsao_entrega?new Date(M.previsao_entrega):null,x=M.data_recebimento?new Date(M.data_recebimento):null;if(x&&b&&(l++,x<=b&&d++),M.data_emissao&&(x||b)){const X=x||b,j=Math.max(0,(new Date(X)-new Date(M.data_emissao))/(1e3*60*60*24));h+=j,f++}if(M.limite_real&&(o+=Number(M.limite_real)),M.comprometido&&(a+=Number(M.comprometido)),M.data_solicitacao){const X=new Date(M.data_solicitacao),j=`${X.getFullYear()}-${String(X.getMonth()+1).padStart(2,"0")}`;i[j]=(i[j]||0)+T}const I=(M.natureza_compra||"Outros").trim();m[I]=(m[I]||0)+T;const S=M.centroCustoNome||M.centro_custo||M.centroCustoId||"N/D";g[S]=(g[S]||0)+T,!M.previsao_entrega&&M.status_compra!=="Recebido"&&M.status_compra!=="Entregue"&&v.sem_previsao++,(M.status_aprovacao||"").toLowerCase()==="pendente"&&v.pendente_aprovacao++,(M.status_compra||"").toLowerCase().includes("cot")&&v.cotacao++});const E=o>0?a/o*100:0,A=l?d/l*100:0,C=f?h/f:0,D=Math.max(0,o-a);return{totalGasto:s,porStatus:r,totalPedidos:e.size,gastosPorMes:i,limiteReal:o,comprometido:a,curvaPercent:E,atrasos:c,sla:A,lead:C,economia:D,naturezaTotais:m,ccTotais:g,alerts:v,_allCompras:y}},markAsDelivered:async n=>{const{doc:t,updateDoc:e}=await ho(async()=>{const{doc:r,updateDoc:i}=await Promise.resolve().then(()=>$T);return{doc:r,updateDoc:i}},void 0),s=t(J,"compras",n);await e(s,{status_compra:"Entregue",data_recebimento:new Date().toISOString(),ultima_atualizacao:new Date().toISOString()})}},et={formatCurrency:n=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n),formatDate:n=>{if(!n)return"-";const t=new Date(n);return Number.isNaN(t.getTime())?"-":t.toLocaleDateString("pt-BR")},formatCurrencyInput:(n,t=!1)=>{let s=(typeof n=="number"?n.toFixed(2):String(n??"")).replace(/\D/g,"");return s=(s/100).toFixed(2)+"",s=s.replace(".",","),s=s.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1."),t?`R$ ${s}`:s},parseCurrency:n=>{if(typeof n=="number")return n;if(!n)return 0;const t=String(n).replace("R$ ","").replace(/\./g,"").replace(",","."),e=parseFloat(t);return Number.isNaN(e)?0:e},formatCnpjInput:n=>{if(!n)return"";let t=n.replace(/\D/g,"");return t=t.substring(0,14),t=t.replace(/^(\d{2})(\d)/,"$1.$2"),t=t.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3"),t=t.replace(/\.(\d{3})(\d)/,".$1/$2"),t=t.replace(/(\d{4})(\d)/,"$1-$2"),t},validateCNPJ:n=>{if(!n)return!0;const t=n.replace(/\D/g,"");if(t.length!==14||/^(\d)\1{13}$/.test(t))return!1;let e=0,s=5;for(let a=0;a<8;a++)e+=parseInt(t[a],10)*s,s=s===2?9:s-1;let r=e%11,i=r<2?0:11-r;if(parseInt(t[8],10)!==i)return!1;e=0,s=6;for(let a=0;a<9;a++)e+=parseInt(t[a],10)*s,s=s===2?9:s-1;r=e%11;let o=r<2?0:11-r;return parseInt(t[9],10)===o},renderStatusBadge:(n,t)=>{const e=new Date;e.setHours(0,0,0,0);let s=null;if(t){const o=new Date(t);Number.isNaN(o.getTime())||(s=o)}const r=(n||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return r!=="recebido"&&s&&s<e?'<span class="px-2 py-1 text-xs font-display rounded bg-alert text-canvas uppercase">Atrasado</span>':r.includes("recebido")||r.includes("entregue")?`<span class="px-2 py-1 text-xs font-display rounded bg-primary text-canvas uppercase">${n}</span>`:r.includes("comprado")?`<span class="px-2 py-1 text-xs font-display rounded bg-indigo-500 text-canvas uppercase">${n}</span>`:r.includes("aprov")?`<span class="px-2 py-1 text-xs font-display rounded bg-emerald-500 text-canvas uppercase">${n}</span>`:r.includes("cot")||r.includes("cota")?`<span class="px-2 py-1 text-xs font-display rounded bg-amber-400 text-gray-900 uppercase">${n}</span>`:`<span class="px-2 py-1 text-xs font-display rounded bg-border text-text uppercase">${n||"N/D"}</span>`},debounce:(n,t)=>{let e;return(...s)=>{clearTimeout(e),e=setTimeout(()=>n(...s),t)}},getGreeting:()=>{const n=new Date().getHours();return n<12?"Bom dia":n<18?"Boa tarde":"Boa noite"},getContextualMessage:n=>{const t=[];return n.urgentes>0?t.push(`Você tem <strong>${n.urgentes} compras urgentes</strong> que precisam de atenção`):n.aguardandoAcao>0?t.push(`Há <strong>${n.aguardandoAcao} compras aguardando</strong> sua ação`):n.pendentes===0&&n.emCotacao===0?t.push("Tudo em dia! Continue o ótimo trabalho 🎉"):t.push("Aqui está o resumo das suas compras"),n.sla>=90&&t.push(`Seu SLA está excelente: <strong>${n.sla.toFixed(1)}%</strong> ✨`),t.join(" • ")},formatRelativeTime:n=>{if(!n)return"";const t=new Date(n),s=new Date-t,r=Math.floor(s/6e4),i=Math.floor(s/36e5),o=Math.floor(s/864e5);return r<1?"agora mesmo":r<60?`há ${r} minuto${r>1?"s":""}`:i<24?`há ${i} hora${i>1?"s":""}`:o===1?"ontem":o<7?`há ${o} dias`:o<30?`há ${Math.floor(o/7)} semana${Math.floor(o/7)>1?"s":""}`:et.formatDate(n)},daysBetween:(n,t)=>{const e=new Date(n),s=new Date(t),r=Math.abs(s-e);return Math.floor(r/(1e3*60*60*24))}},Mt={dashboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>',shoppingCart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>',chart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.212 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',logout:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>',bell:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>',moon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" /></svg>',pencil:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.75 19.901l-4.5.75.75-4.5L16.862 4.487z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.6l2.651 2.651" /></svg>',trash:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5h10.5M9.75 7.5v-1.5a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v1.5m-9 0v12a1.5 1.5 0 001.5 1.5h7.5a1.5 1.5 0 001.5-1.5v-12" /></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',alert:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>'},S1=n=>{const t=[];return n.semPrevisao>5&&t.push(`Você tem ${n.semPrevisao} compras sem previsão de entrega. Que tal entrar em contato com os fornecedores?`),n.precisamAtualizacao>10&&t.push(`${n.precisamAtualizacao} compras estão há dias sem atualização. Mantenha o status sempre atualizado!`),n.sla<80&&t.push(`Seu SLA está em ${n.sla.toFixed(1)}%. Foque em acompanhar as previsões de entrega para melhorar!`),n.lead>15&&t.push(`Seu lead time médio é ${n.lead.toFixed(1)} dias. Negocie prazos menores com fornecedores!`),n.urgentes>5&&t.push(`Atenção! ${n.urgentes} compras urgentes precisam de ação imediata.`),t.length===0&&t.push("Excelente trabalho! Seus indicadores estão ótimos. Continue assim! 🎉"),t[Math.floor(Math.random()*t.length)]},pa={renderTimeline:n=>{if(!n||n.length===0)return`
                <div class="card bg-surface border border-border p-4 text-center">
                    <p class="text-text-muted text-sm">Nenhuma entrega prevista para os próximos 7 dias.</p>
                </div>
            `;const t=new Date;return t.setHours(0,0,0,0),`
            <div class="card overflow-hidden">
                <h3 class="text-lg font-display text-text mb-4 flex items-center gap-2">
                    📅 Próximas Entregas (7 dias)
                </h3>
                <div class="relative pt-2 pb-4 overflow-x-auto">
                    <div class="flex items-center min-w-max space-x-8 px-4">
                        ${n.map((e,s)=>{const r=new Date(e.date),i=r.getTime()===t.getTime(),o=r.toLocaleDateString("pt-BR",{weekday:"short"}),a=r.getDate();return`
                                <div class="relative flex flex-col items-center group cursor-pointer" 
                                     onclick="window.location.hash='/compras/${e.id}'"
                                     title="${e.descricao_compra} - ${e.fornecedorNome||""}">
                                    
                                    <!-- Linha conectora -->
                                    ${s<n.length-1?'<div class="absolute top-4 left-1/2 w-full h-0.5 bg-border -z-10"></div>':""}
                                    
                                    <!-- Bolinha do dia -->
                                    <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 
                                        ${i?"bg-primary border-primary text-canvas":"bg-surface border-border text-text-muted group-hover:border-primary transition-colors"}">
                                        ${a}
                                    </div>
                                    
                                    <!-- Dia da semana -->
                                    <span class="text-[10px] uppercase mt-1 text-text-muted font-display">${o}</span>
                                    
                                    <!-- Card flutuante (Tooltip simplificado) -->
                                    <div class="mt-2 bg-surface border border-border p-2 rounded shadow-lg w-32 text-center">
                                        <p class="text-xs font-medium text-text truncate">${e.descricao_compra}</p>
                                        <p class="text-[10px] text-text-muted truncate">${e.obraNome}</p>
                                    </div>
                                </div>
                            `}).join("")}
                    </div>
                </div>
            </div>
        `},renderComprador:(n,t,e=[])=>{const s=n.atividade||{semana:{quantidade:0,valor:0},mes:{quantidade:0,valor:0},variacaoSemanal:0,ticketMedio:0};return`
            <div class="space-y-6">
                <!-- Cabeçalho com Boas-Vindas e Clima -->
                <div class="flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <h1 class="text-3xl font-display text-text mb-2">
                            ${et.getGreeting()}, ${(t==null?void 0:t.nome)||(t==null?void 0:t.email)||"Comprador"}! 👋
                        </h1>
                        <p class="text-text-muted">
                            ${et.getContextualMessage(n)}
                        </p>
                    </div>
                    
                    <!-- Widget de Clima (será preenchido via JS) -->
                    <div id="weather-widget" class="hidden items-center gap-3 bg-canvas px-4 py-3 rounded-lg border border-border shadow-md">
                        <div class="text-4xl" id="weather-icon">🌤️</div>
                        <div>
                            <p class="text-2xl font-display text-text" id="weather-temp">--°C</p>
                            <p class="text-xs text-text-muted" id="weather-location">Carregando...</p>
                        </div>
                    </div>
                </div>

                <!-- Barra de Filtros (Sprint 1) -->
                <div class="bg-surface border border-border p-3 rounded flex flex-wrap items-center gap-4">
                    <div class="flex items-center gap-2">
                        <span class="text-sm font-display text-text-muted uppercase">Filtrar por:</span>
                    </div>
                    
                    <!-- Filtro de Período -->
                    <select id="dashboard-filter-periodo" class="bg-canvas border border-border text-text text-sm rounded px-3 py-1.5 focus:border-primary outline-none">
                        <option value="30">Últimos 30 dias</option>
                        <option value="7">Últimos 7 dias</option>
                        <option value="thisMonth">Este Mês</option>
                        <option value="lastMonth">Mês Passado</option>
                        <option value="all">Todo o Período</option>
                    </select>

                    <button id="btn-apply-filters" class="btn-sm btn-primary ml-auto">
                        Aplicar
                    </button>
                </div>

                <!-- Atalhos Rápidos -->
                <div class="flex items-center gap-3 overflow-x-auto pb-2">
                    <a href="#/compras/nova" class="btn btn-primary flex items-center gap-2 whitespace-nowrap">
                        ${Mt.plus} Nova Compra
                    </a>
                    <a href="#/relatorios?status=Pendente" class="btn btn-secondary flex items-center gap-2 whitespace-nowrap">
                        ${Mt.clock} Ver Pendentes
                    </a>
                    <a href="#/relatorios?urgente=true" class="btn btn-secondary text-alert border-alert/30 hover:bg-alert/5 flex items-center gap-2 whitespace-nowrap">
                        ${Mt.alert} Ver Urgentes
                    </a>
                    <a href="#/relatorios" class="btn btn-ghost flex items-center gap-2 whitespace-nowrap">
                        ${Mt.chart} Todos Relatórios
                    </a>
                </div>

                <!-- Grid de KPIs Acionáveis -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <!-- Aguardando Ação -->
                    ${F.createCard({title:"🔴 Aguardando Ação",content:`
                            <p class="text-4xl font-display text-alert uppercase">${n.aguardandoAcao||0}</p>
                            <p class="text-sm text-text-muted mt-1">Pendentes + Em Cotação</p>
                            <a href="#/relatorios?status=Pendente,Em Cotação" class="text-xs text-primary hover:underline mt-2 inline-block">Ver todas →</a>
                        `,className:"hover:shadow-xl transition-shadow cursor-pointer"})}

                    <!-- Urgentes -->
                    ${F.createCard({title:"⚠️ Urgentes",content:`
                            <p class="text-4xl font-display text-${n.urgentes>0?"alert":"text"} uppercase">${n.urgentes||0}</p>
                            <p class="text-sm text-text-muted mt-1">Atrasados + Vence em 3 dias</p>
                            ${n.urgentes>0?'<a href="#/relatorios?urgente=true" class="text-xs text-alert hover:underline mt-2 inline-block">Ver urgentes →</a>':""}
                        `,className:"hover:shadow-xl transition-shadow"})}

                    <!-- Precisam Atualização -->
                    ${F.createCard({title:"📝 Precisam Atualização",content:`
                            <p class="text-4xl font-display text-${n.precisamAtualizacao>0?"amber-500":"text"} uppercase">${n.precisamAtualizacao||0}</p>
                            <p class="text-sm text-text-muted mt-1">Sem update há 3+ dias</p>
                            ${n.precisamAtualizacao>0?'<a href="#/relatorios" class="text-xs text-primary hover:underline mt-2 inline-block">Atualizar →</a>':""}
                        `,className:"hover:shadow-xl transition-shadow"})}

                    <!-- Sem Previsão -->
                    ${F.createCard({title:"❓ Sem Previsão",content:`
                            <p class="text-4xl font-display text-text uppercase">${n.semPrevisao||0}</p>
                            <p class="text-sm text-text-muted mt-1">Comprados sem data</p>
                        `,className:"hover:shadow-xl transition-shadow"})}

                    <!-- SLA Entregas -->
                    ${F.createCard({title:"✅ SLA Entregas",content:`
                            <p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p>
                            <p class="text-sm text-text-muted mt-1">Entregas no prazo</p>
                        `})}

                    <!-- Lead Médio -->
                    ${F.createCard({title:"⏱️ Lead Médio",content:`
                            <p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p>
                            <p class="text-sm text-text-muted mt-1">Emissão → Entrega</p>
                        `})}

                    <!-- Card de Atividade -->
                    <div class="card lg:col-span-2">
                        <h3 class="text-lg font-display text-text mb-4 flex items-center gap-2">
                            📊 Sua Atividade
                        </h3>
                        
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <!-- Última Semana -->
                            <div class="bg-canvas p-4 rounded border border-border">
                                <p class="text-xs text-text-muted uppercase tracking-wide mb-2">Última Semana</p>
                                <p class="text-2xl font-display text-primary">${s.semana.quantidade}</p>
                                <p class="text-sm text-text-muted">compras</p>
                                <p class="text-lg font-display text-text mt-2">${et.formatCurrency(s.semana.valor)}</p>
                            </div>
                            
                            <!-- Este Mês -->
                            <div class="bg-canvas p-4 rounded border border-border">
                                <p class="text-xs text-text-muted uppercase tracking-wide mb-2">Este Mês</p>
                                <p class="text-2xl font-display text-primary">${s.mes.quantidade}</p>
                                <p class="text-sm text-text-muted">compras</p>
                                <p class="text-lg font-display text-text mt-2">${et.formatCurrency(s.mes.valor)}</p>
                            </div>
                        </div>
                        
                        <!-- Métricas adicionais -->
                        <div class="space-y-2 pt-3 border-t border-border">
                            <div class="flex items-center justify-between text-sm">
                                <span class="text-text-muted">Variação semanal:</span>
                                <span class="font-display ${s.variacaoSemanal>=0?"text-primary":"text-alert"}">
                                    ${s.variacaoSemanal>=0?"📈":"📉"} 
                                    ${s.variacaoSemanal>=0?"+":""}${s.variacaoSemanal.toFixed(1)}%
                                </span>
                            </div>
                            <div class="flex items-center justify-between text-sm">
                                <span class="text-text-muted">Ticket médio:</span>
                                <span class="font-display text-text">${et.formatCurrency(s.ticketMedio)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Dica do Dia -->
                <div class="card bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary">
                    <div class="flex items-start gap-3">
                        <span class="text-2xl">💡</span>
                        <div>
                            <h4 class="font-display text-text mb-1">Dica do Dia</h4>
                            <p class="text-sm text-text-muted">${S1(n)}</p>
                        </div>
                    </div>
                </div>

                <!-- Timeline de Entregas (Sprint 1) -->
                <div id="timeline-container">
                    <!-- Será preenchido via JS -->
                    <div class="card p-4 text-center">
                        <div class="animate-pulse flex space-x-4 justify-center">
                            <div class="h-2 bg-border rounded w-1/2"></div>
                        </div>
                    </div>
                </div>

                <!-- Precisa da Sua Atenção (Top Críticos) -->
                <div class="bg-surface border border-border shadow-heavy rounded overflow-hidden">
                    <div class="px-6 py-4 border-b border-border flex justify-between items-center">
                        <h3 class="text-lg font-display text-text flex items-center gap-2">
                            🎯 Precisa da Sua Atenção
                            <span class="text-xs font-normal text-text-muted bg-canvas px-2 py-1 rounded-full border border-border">
                                Top 10 Críticos
                            </span>
                        </h3>
                        <a href="#/relatorios" class="text-sm text-primary hover:underline">Ver todas →</a>
                    </div>
                    <div class="divide-y divide-border">
                        ${(n.comprasCriticas||[]).map(r=>`
                            <div class="p-4 hover:bg-canvas transition-colors flex items-center gap-4 border-l-4 ${r.criticidade==="alta"?"border-alert":r.criticidade==="media"?"border-amber-500":"border-blue-500"}">
                                <!-- Indicador Visual -->
                                <div class="flex-shrink-0 text-2xl" title="${r.motivo}">
                                    ${r.criticidade==="alta"?"🔴":r.criticidade==="media"?"⚠️":"📝"}
                                </div>

                                <!-- Informações Principais -->
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center gap-2 mb-1">
                                        <p class="font-display text-text truncate" title="${r.descricao_compra}">${r.descricao_compra}</p>
                                        <span class="text-xs px-2 py-0.5 rounded bg-canvas border border-border text-text-muted">
                                            #${r.id.slice(0,6)}
                                        </span>
                                    </div>
                                    <p class="text-sm text-text-muted flex items-center gap-2">
                                        <span class="font-medium text-text">${r.obraNome}</span>
                                        <span>•</span>
                                        <span>${r.fornecedorNome||"Sem fornecedor"}</span>
                                        <span>•</span>
                                        <span>${et.formatCurrency(r.valor_total||r.valor_estimado)}</span>
                                    </p>
                                </div>

                                <!-- Status e Motivo -->
                                <div class="flex-shrink-0 text-right hidden sm:block">
                                    ${et.renderStatusBadge(r.status_compra,r.previsao_entrega)}
                                    <p class="text-xs text-alert font-medium mt-1">${r.motivo}</p>
                                </div>

                                <!-- Ações Rápidas (Sprint 1) -->
                                <div class="flex-shrink-0 flex items-center gap-2">
                                    <button class="btn-sm btn-secondary text-xs" 
                                            data-action="cobrar" 
                                            data-id="${r.id}" 
                                            data-fornecedor="${r.fornecedorNome||""}"
                                            title="Cobrar Fornecedor">
                                        📢 Cobrar
                                    </button>
                                    <button class="btn-sm btn-primary text-xs" 
                                            data-action="receber" 
                                            data-id="${r.id}" 
                                            title="Marcar como Entregue">
                                        ✅ Receber
                                    </button>
                                    <button class="btn-sm btn-ghost text-xs" 
                                            data-action="edit" 
                                            data-id="${r.id}" 
                                            title="Editar">
                                        ${Mt.pencil}
                                    </button>
                                </div>
                            </div>
                        `).join("")||'<div class="p-8 text-center text-text-muted">Nenhuma compra crítica no momento! 🎉</div>'}
                    </div>
                </div>
            </div>
        `},renderObra:n=>{var t,e,s,r,i,o,a,c,l,d,h,f,m,g;return`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Minha Obra</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${F.createCard({title:"Solicitados",content:`<p class="text-4xl font-display text-text uppercase">${n.pendentes}</p><p class="text-sm heading-muted">Em processamento</p>`})}
                    ${F.createCard({title:"Em Trânsito",content:`<p class="text-4xl font-display text-primary uppercase">${n.transito}</p><p class="text-sm heading-muted">A caminho</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Entregues",content:`<p class="text-4xl font-display text-primary uppercase">${n.entregues}</p><p class="text-sm heading-muted">Finalizados</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Entregues no prazo</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia vs Orçamento",content:`<p class="text-4xl font-display text-${(n.economia||0)<0?"alert":"primary"} uppercase">${et.formatCurrency(n.economia||0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(n.curvaPercent||0).toFixed(1)}%</p>`})}
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    ${F.createCard({title:"RDO - Total Horas",content:`<p class="text-3xl font-display text-primary uppercase">${((s=(e=((t=n.rdoData)==null?void 0:t.totalHoras)||0).toFixed)==null?void 0:s.call(e,1))||0}</p><p class="text-sm heading-muted">Relatórios: ${((r=n.rdoData)==null?void 0:r.quantidadeRelatorios)||0}</p>`})}
                    ${F.createCard({title:"RDO - Horas Extras",content:`<p class="text-3xl font-display text-text uppercase">${((a=(o=((i=n.rdoData)==null?void 0:i.totalExtras)||0).toFixed)==null?void 0:a.call(o,1))||0}</p><p class="text-sm heading-muted">Acima do padrão</p>`})}
                    ${F.createCard({title:"RDO - Média Horas/Dia",content:`<p class="text-3xl font-display text-text uppercase">${((d=(l=((c=n.rdoData)==null?void 0:c.mediaHorasDia)||0).toFixed)==null?void 0:d.call(l,1))||0}</p>`})}
                    ${F.createCard({title:"RDO - Total Funcionários",content:`<p class="text-3xl font-display text-text uppercase">${((h=n.rdoData)==null?void 0:h.totalFuncionarios)||0}</p><p class="text-sm heading-muted">Média/Dia: ${((g=(m=((f=n.rdoData)==null?void 0:f.mediaFuncionariosDia)||0).toFixed)==null?void 0:g.call(m,1))||0}</p>`})}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">RDO: Horas por Dia</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-rdo-horas"></canvas>
                        </div>
                    </div>
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">RDO: Horas por Função</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-rdo-funcao"></canvas>
                        </div>
                    </div>
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">RDO: Funcionários por Dia</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-rdo-funcionarios"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        `},renderDiretor:n=>{var t,e,s,r;return`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Visão Executiva</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    ${F.createCard({title:"Total Gasto (Amostra)",content:`<p class="text-4xl font-display text-primary uppercase">${et.formatCurrency(n.totalGasto)}</p>`})}
                    ${F.createCard({title:"Total de Pedidos",content:`<p class="text-4xl font-display text-primary uppercase">${n.totalPedidos}</p>`})}
                    ${F.createCard({title:"% Curva S (Comprometido vs Limite)",content:`<p class="text-4xl font-display text-${n.curvaPercent>100?"alert":"primary"} uppercase">${(n.curvaPercent||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Limite: ${et.formatCurrency(n.limiteReal||0)} • Comprometido: ${et.formatCurrency(n.comprometido||0)}</p>`})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted mt-1">Com previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">On-time vs entregues</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia (Limite - Comprometido)",content:`<p class="text-4xl font-display text-primary uppercase">${et.formatCurrency(n.economia||0)}</p>`})}
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    ${F.createCard({title:"Atrasos",content:`<p class="text-3xl font-display text-alert uppercase">${((t=n.alerts)==null?void 0:t.atrasados)||0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`})}
                    ${F.createCard({title:"Sem Previsão",content:`<p class="text-3xl font-display text-text uppercase">${((e=n.alerts)==null?void 0:e.sem_previsao)||0}</p><p class="text-sm heading-muted mt-1">Pedidos sem data</p>`})}
                    ${F.createCard({title:"Pend. Aprovação",content:`<p class="text-3xl font-display text-text uppercase">${((s=n.alerts)==null?void 0:s.pendente_aprovacao)||0}</p><p class="text-sm heading-muted mt-1">Estouro orç. pendente</p>`})}
                    ${F.createCard({title:"Em Cotação",content:`<p class="text-3xl font-display text-text uppercase">${((r=n.alerts)==null?void 0:r.cotacao)||0}</p><p class="text-sm heading-muted mt-1">Ped. em cotação</p>`})}
                </div>
                
                <!-- Gráficos -->
                <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <div class="card h-80 xl:col-span-2">
                        <h3 class="text-lg font-display text-text mb-4">Curva S (Planejado vs Realizado)</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-curva"></canvas>
                        </div>
                    </div>
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Status dos Pedidos</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-status"></canvas>
                        </div>
                    </div>
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Evolução Mensal</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-gastos-mes"></canvas>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Top Naturezas</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-natureza-dir"></canvas>
                        </div>
                    </div>
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Centros de Custo</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-cc-dir"></canvas>
                        </div>
                    </div>
                    <div class="card">
                        <h3 class="text-lg font-display text-text mb-4">Orçamento por Obra (Top)</h3>
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-border">
                                <thead class="bg-canvas">
                                    <tr>
                                        <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase tracking-wide">Obra</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase tracking-wide">Limite</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase tracking-wide">Comprometido</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase tracking-wide">% Curva</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-border">
                                    ${(n.budgetByObra||[]).map(i=>`
                                        <tr>
                                            <td class="px-4 py-2 text-sm text-text">${i.nome}</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${et.formatCurrency(i.limite)}</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${et.formatCurrency(i.comprometido)}</td>
                                            <td class="px-4 py-2 text-sm text-${i.percent>100?"alert":"text"} text-right">${i.percent.toFixed(1)}%</td>
                                        </tr>
                                    `).join("")||'<tr><td colspan="4" class="px-4 py-3 text-sm heading-muted text-center">Sem dados</td></tr>'}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `}};/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function $o(n){return n+.5|0}const ts=(n,t,e)=>Math.max(Math.min(n,e),t);function Li(n){return ts($o(n*2.55),0,255)}function cs(n){return ts($o(n*255),0,255)}function En(n){return ts($o(n/2.55)/100,0,1)}function zp(n){return ts($o(n*100),0,100)}const Be={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ou=[..."0123456789ABCDEF"],C1=n=>Ou[n&15],R1=n=>Ou[(n&240)>>4]+Ou[n&15],ma=n=>(n&240)>>4===(n&15),P1=n=>ma(n.r)&&ma(n.g)&&ma(n.b)&&ma(n.a);function D1(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&Be[n[1]]*17,g:255&Be[n[2]]*17,b:255&Be[n[3]]*17,a:t===5?Be[n[4]]*17:255}:(t===7||t===9)&&(e={r:Be[n[1]]<<4|Be[n[2]],g:Be[n[3]]<<4|Be[n[4]],b:Be[n[5]]<<4|Be[n[6]],a:t===9?Be[n[7]]<<4|Be[n[8]]:255})),e}const M1=(n,t)=>n<255?t(n):"";function O1(n){var t=P1(n)?C1:R1;return n?"#"+t(n.r)+t(n.g)+t(n.b)+M1(n.a,t):void 0}const N1=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function hv(n,t,e){const s=t*Math.min(e,1-e),r=(i,o=(i+n/30)%12)=>e-s*Math.max(Math.min(o-3,9-o,1),-1);return[r(0),r(8),r(4)]}function L1(n,t,e){const s=(r,i=(r+n/60)%6)=>e-e*t*Math.max(Math.min(i,4-i,1),0);return[s(5),s(3),s(1)]}function V1(n,t,e){const s=hv(n,1,.5);let r;for(t+e>1&&(r=1/(t+e),t*=r,e*=r),r=0;r<3;r++)s[r]*=1-t-e,s[r]+=t;return s}function F1(n,t,e,s,r){return n===r?(t-e)/s+(t<e?6:0):t===r?(e-n)/s+2:(n-t)/s+4}function Zd(n){const e=n.r/255,s=n.g/255,r=n.b/255,i=Math.max(e,s,r),o=Math.min(e,s,r),a=(i+o)/2;let c,l,d;return i!==o&&(d=i-o,l=a>.5?d/(2-i-o):d/(i+o),c=F1(e,s,r,d,i),c=c*60+.5),[c|0,l||0,a]}function th(n,t,e,s){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,s)).map(cs)}function eh(n,t,e){return th(hv,n,t,e)}function $1(n,t,e){return th(V1,n,t,e)}function B1(n,t,e){return th(L1,n,t,e)}function fv(n){return(n%360+360)%360}function U1(n){const t=N1.exec(n);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?Li(+t[5]):cs(+t[5]));const r=fv(+t[2]),i=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?s=$1(r,i,o):t[1]==="hsv"?s=B1(r,i,o):s=eh(r,i,o),{r:s[0],g:s[1],b:s[2],a:e}}function j1(n,t){var e=Zd(n);e[0]=fv(e[0]+t),e=eh(e),n.r=e[0],n.g=e[1],n.b=e[2]}function z1(n){if(!n)return;const t=Zd(n),e=t[0],s=zp(t[1]),r=zp(t[2]);return n.a<255?`hsla(${e}, ${s}%, ${r}%, ${En(n.a)})`:`hsl(${e}, ${s}%, ${r}%)`}const Hp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},qp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function H1(){const n={},t=Object.keys(qp),e=Object.keys(Hp);let s,r,i,o,a;for(s=0;s<t.length;s++){for(o=a=t[s],r=0;r<e.length;r++)i=e[r],a=a.replace(i,Hp[i]);i=parseInt(qp[o],16),n[a]=[i>>16&255,i>>8&255,i&255]}return n}let ga;function q1(n){ga||(ga=H1(),ga.transparent=[0,0,0,0]);const t=ga[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const W1=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function G1(n){const t=W1.exec(n);let e=255,s,r,i;if(t){if(t[7]!==s){const o=+t[7];e=t[8]?Li(o):ts(o*255,0,255)}return s=+t[1],r=+t[3],i=+t[5],s=255&(t[2]?Li(s):ts(s,0,255)),r=255&(t[4]?Li(r):ts(r,0,255)),i=255&(t[6]?Li(i):ts(i,0,255)),{r:s,g:r,b:i,a:e}}}function Y1(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${En(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const Ul=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,pr=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function K1(n,t,e){const s=pr(En(n.r)),r=pr(En(n.g)),i=pr(En(n.b));return{r:cs(Ul(s+e*(pr(En(t.r))-s))),g:cs(Ul(r+e*(pr(En(t.g))-r))),b:cs(Ul(i+e*(pr(En(t.b))-i))),a:n.a+e*(t.a-n.a)}}function _a(n,t,e){if(n){let s=Zd(n);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=eh(s),n.r=s[0],n.g=s[1],n.b=s[2]}}function pv(n,t){return n&&Object.assign(t||{},n)}function Wp(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=cs(n[3]))):(t=pv(n,{r:0,g:0,b:0,a:1}),t.a=cs(t.a)),t}function Q1(n){return n.charAt(0)==="r"?G1(n):U1(n)}class fo{constructor(t){if(t instanceof fo)return t;const e=typeof t;let s;e==="object"?s=Wp(t):e==="string"&&(s=D1(t)||q1(t)||Q1(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=pv(this._rgb);return t&&(t.a=En(t.a)),t}set rgb(t){this._rgb=Wp(t)}rgbString(){return this._valid?Y1(this._rgb):void 0}hexString(){return this._valid?O1(this._rgb):void 0}hslString(){return this._valid?z1(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,r=t.rgb;let i;const o=e===i?.5:e,a=2*o-1,c=s.a-r.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;i=1-l,s.r=255&l*s.r+i*r.r+.5,s.g=255&l*s.g+i*r.g+.5,s.b=255&l*s.b+i*r.b+.5,s.a=o*s.a+(1-o)*r.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=K1(this._rgb,t._rgb,e)),this}clone(){return new fo(this.rgb)}alpha(t){return this._rgb.a=cs(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=$o(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return _a(this._rgb,2,t),this}darken(t){return _a(this._rgb,2,-t),this}saturate(t){return _a(this._rgb,1,t),this}desaturate(t){return _a(this._rgb,1,-t),this}rotate(t){return j1(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function bn(){}const X1=(()=>{let n=0;return()=>n++})();function ct(n){return n==null}function Vt(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function dt(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function Ht(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function Le(n,t){return Ht(n)?n:t}function rt(n,t){return typeof n>"u"?t:n}const J1=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,mv=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function Pt(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function It(n,t,e,s){let r,i,o;if(Vt(n))for(i=n.length,r=0;r<i;r++)t.call(e,n[r],r);else if(dt(n))for(o=Object.keys(n),i=o.length,r=0;r<i;r++)t.call(e,n[o[r]],o[r])}function fc(n,t){let e,s,r,i;if(!n||!t||n.length!==t.length)return!1;for(e=0,s=n.length;e<s;++e)if(r=n[e],i=t[e],r.datasetIndex!==i.datasetIndex||r.index!==i.index)return!1;return!0}function pc(n){if(Vt(n))return n.map(pc);if(dt(n)){const t=Object.create(null),e=Object.keys(n),s=e.length;let r=0;for(;r<s;++r)t[e[r]]=pc(n[e[r]]);return t}return n}function gv(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function Z1(n,t,e,s){if(!gv(n))return;const r=t[n],i=e[n];dt(r)&&dt(i)?po(r,i,s):t[n]=pc(i)}function po(n,t,e){const s=Vt(t)?t:[t],r=s.length;if(!dt(n))return n;e=e||{};const i=e.merger||Z1;let o;for(let a=0;a<r;++a){if(o=s[a],!dt(o))continue;const c=Object.keys(o);for(let l=0,d=c.length;l<d;++l)i(c[l],n,o,e)}return n}function Ki(n,t){return po(n,t,{merger:tS})}function tS(n,t,e){if(!gv(n))return;const s=t[n],r=e[n];dt(s)&&dt(r)?Ki(s,r):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=pc(r))}const Gp={"":n=>n,x:n=>n.x,y:n=>n.y};function eS(n){const t=n.split("."),e=[];let s="";for(const r of t)s+=r,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function nS(n){const t=eS(n);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function fs(n,t){return(Gp[t]||(Gp[t]=nS(t)))(n)}function nh(n){return n.charAt(0).toUpperCase()+n.slice(1)}const mo=n=>typeof n<"u",ps=n=>typeof n=="function",Yp=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function sS(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const vt=Math.PI,Nt=2*vt,rS=Nt+vt,mc=Number.POSITIVE_INFINITY,iS=vt/180,Qt=vt/2,Es=vt/4,Kp=vt*2/3,es=Math.log10,pn=Math.sign;function Qi(n,t,e){return Math.abs(n-t)<e}function Qp(n){const t=Math.round(n);n=Qi(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(es(n))),s=n/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function oS(n){const t=[],e=Math.sqrt(n);let s;for(s=1;s<e;s++)n%s===0&&(t.push(s),t.push(n/s));return e===(e|0)&&t.push(e),t.sort((r,i)=>r-i).pop(),t}function aS(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function jr(n){return!aS(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function cS(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function _v(n,t,e){let s,r,i;for(s=0,r=n.length;s<r;s++)i=n[s][e],isNaN(i)||(t.min=Math.min(t.min,i),t.max=Math.max(t.max,i))}function Ke(n){return n*(vt/180)}function sh(n){return n*(180/vt)}function Xp(n){if(!Ht(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function yv(n,t){const e=t.x-n.x,s=t.y-n.y,r=Math.sqrt(e*e+s*s);let i=Math.atan2(s,e);return i<-.5*vt&&(i+=Nt),{angle:i,distance:r}}function Nu(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function lS(n,t){return(n-t+rS)%Nt-vt}function xe(n){return(n%Nt+Nt)%Nt}function go(n,t,e,s){const r=xe(n),i=xe(t),o=xe(e),a=xe(i-r),c=xe(o-r),l=xe(r-i),d=xe(r-o);return r===i||r===o||s&&i===o||a>c&&l<d}function ce(n,t,e){return Math.max(t,Math.min(e,n))}function uS(n){return ce(n,-32768,32767)}function Cn(n,t,e,s=1e-6){return n>=Math.min(t,e)-s&&n<=Math.max(t,e)+s}function rh(n,t,e){e=e||(o=>n[o]<t);let s=n.length-1,r=0,i;for(;s-r>1;)i=r+s>>1,e(i)?r=i:s=i;return{lo:r,hi:s}}const Rn=(n,t,e,s)=>rh(n,e,s?r=>{const i=n[r][t];return i<e||i===e&&n[r+1][t]===e}:r=>n[r][t]<e),dS=(n,t,e)=>rh(n,e,s=>n[s][t]>=e);function hS(n,t,e){let s=0,r=n.length;for(;s<r&&n[s]<t;)s++;for(;r>s&&n[r-1]>e;)r--;return s>0||r<n.length?n.slice(s,r):n}const vv=["push","pop","shift","splice","unshift"];function fS(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),vv.forEach(e=>{const s="_onData"+nh(e),r=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...i){const o=r.apply(this,i);return n._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...i)}),o}})})}function Jp(n,t){const e=n._chartjs;if(!e)return;const s=e.listeners,r=s.indexOf(t);r!==-1&&s.splice(r,1),!(s.length>0)&&(vv.forEach(i=>{delete n[i]}),delete n._chartjs)}function bv(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const xv=function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame}();function wv(n,t){let e=[],s=!1;return function(...r){e=r,s||(s=!0,xv.call(window,()=>{s=!1,n.apply(t,e)}))}}function pS(n,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(n,t,s)):n.apply(this,s),t}}const ih=n=>n==="start"?"left":n==="end"?"right":"center",ve=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,mS=(n,t,e,s)=>n===(s?"left":"right")?e:n==="center"?(t+e)/2:t;function Ev(n,t,e){const s=t.length;let r=0,i=s;if(n._sorted){const{iScale:o,vScale:a,_parsed:c}=n,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,d=o.axis,{min:h,max:f,minDefined:m,maxDefined:g}=o.getUserBounds();if(m){if(r=Math.min(Rn(c,d,h).lo,e?s:Rn(t,d,o.getPixelForValue(h)).lo),l){const v=c.slice(0,r+1).reverse().findIndex(y=>!ct(y[a.axis]));r-=Math.max(0,v)}r=ce(r,0,s-1)}if(g){let v=Math.max(Rn(c,o.axis,f,!0).hi+1,e?0:Rn(t,d,o.getPixelForValue(f),!0).hi+1);if(l){const y=c.slice(v-1).findIndex(E=>!ct(E[a.axis]));v+=Math.max(0,y)}i=ce(v,r,s)-r}else i=s-r}return{start:r,count:i}}function Tv(n){const{xScale:t,yScale:e,_scaleRanges:s}=n,r={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return n._scaleRanges=r,!0;const i=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,r),i}const ya=n=>n===0||n===1,Zp=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*Nt/e)),tm=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*Nt/e)+1,Xi={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Qt)+1,easeOutSine:n=>Math.sin(n*Qt),easeInOutSine:n=>-.5*(Math.cos(vt*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>ya(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>ya(n)?n:Zp(n,.075,.3),easeOutElastic:n=>ya(n)?n:tm(n,.075,.3),easeInOutElastic(n){return ya(n)?n:n<.5?.5*Zp(n*2,.1125,.45):.5+.5*tm(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Xi.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Xi.easeInBounce(n*2)*.5:Xi.easeOutBounce(n*2-1)*.5+.5};function oh(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function em(n){return oh(n)?n:new fo(n)}function jl(n){return oh(n)?n:new fo(n).saturate(.5).darken(.1).hexString()}const gS=["x","y","borderWidth","radius","tension"],_S=["color","borderColor","backgroundColor"];function yS(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:_S},numbers:{type:"number",properties:gS}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function vS(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const nm=new Map;function bS(n,t){t=t||{};const e=n+JSON.stringify(t);let s=nm.get(e);return s||(s=new Intl.NumberFormat(n,t),nm.set(e,s)),s}function Bo(n,t,e){return bS(t,e).format(n)}const Iv={values(n){return Vt(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const s=this.chart.options.locale;let r,i=n;if(e.length>1){const l=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(l<1e-4||l>1e15)&&(r="scientific"),i=xS(n,e)}const o=es(Math.abs(i)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:r,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),Bo(n,s,c)},logarithmic(n,t,e){if(n===0)return"0";const s=e[t].significand||n/Math.pow(10,Math.floor(es(n)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?Iv.numeric.call(this,n,t,e):""}};function xS(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var tl={formatters:Iv};function wS(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:tl.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Js=Object.create(null),Lu=Object.create(null);function Ji(n,t){if(!t)return n;const e=t.split(".");for(let s=0,r=e.length;s<r;++s){const i=e[s];n=n[i]||(n[i]=Object.create(null))}return n}function zl(n,t,e){return typeof t=="string"?po(Ji(n,t),e):po(Ji(n,""),t)}class ES{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,r)=>jl(r.backgroundColor),this.hoverBorderColor=(s,r)=>jl(r.borderColor),this.hoverColor=(s,r)=>jl(r.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return zl(this,t,e)}get(t){return Ji(this,t)}describe(t,e){return zl(Lu,t,e)}override(t,e){return zl(Js,t,e)}route(t,e,s,r){const i=Ji(this,t),o=Ji(this,s),a="_"+e;Object.defineProperties(i,{[a]:{value:i[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[a],l=o[r];return dt(c)?Object.assign({},l,c):rt(c,l)},set(c){this[a]=c}}})}apply(t){t.forEach(e=>e(this))}}var $t=new ES({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[yS,vS,wS]);function TS(n){return!n||ct(n.size)||ct(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function gc(n,t,e,s,r){let i=t[r];return i||(i=t[r]=n.measureText(r).width,e.push(r)),i>s&&(s=i),s}function IS(n,t,e,s){s=s||{};let r=s.data=s.data||{},i=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(r=s.data={},i=s.garbageCollect=[],s.font=t),n.save(),n.font=t;let o=0;const a=e.length;let c,l,d,h,f;for(c=0;c<a;c++)if(h=e[c],h!=null&&!Vt(h))o=gc(n,r,i,o,h);else if(Vt(h))for(l=0,d=h.length;l<d;l++)f=h[l],f!=null&&!Vt(f)&&(o=gc(n,r,i,o,f));n.restore();const m=i.length/2;if(m>e.length){for(c=0;c<m;c++)delete r[i[c]];i.splice(0,m)}return o}function Ts(n,t,e){const s=n.currentDevicePixelRatio,r=e!==0?Math.max(e/2,.5):0;return Math.round((t-r)*s)/s+r}function sm(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function Vu(n,t,e,s){Av(n,t,e,s,null)}function Av(n,t,e,s,r){let i,o,a,c,l,d,h,f;const m=t.pointStyle,g=t.rotation,v=t.radius;let y=(g||0)*iS;if(m&&typeof m=="object"&&(i=m.toString(),i==="[object HTMLImageElement]"||i==="[object HTMLCanvasElement]")){n.save(),n.translate(e,s),n.rotate(y),n.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),n.restore();return}if(!(isNaN(v)||v<=0)){switch(n.beginPath(),m){default:r?n.ellipse(e,s,r/2,v,0,0,Nt):n.arc(e,s,v,0,Nt),n.closePath();break;case"triangle":d=r?r/2:v,n.moveTo(e+Math.sin(y)*d,s-Math.cos(y)*v),y+=Kp,n.lineTo(e+Math.sin(y)*d,s-Math.cos(y)*v),y+=Kp,n.lineTo(e+Math.sin(y)*d,s-Math.cos(y)*v),n.closePath();break;case"rectRounded":l=v*.516,c=v-l,o=Math.cos(y+Es)*c,h=Math.cos(y+Es)*(r?r/2-l:c),a=Math.sin(y+Es)*c,f=Math.sin(y+Es)*(r?r/2-l:c),n.arc(e-h,s-a,l,y-vt,y-Qt),n.arc(e+f,s-o,l,y-Qt,y),n.arc(e+h,s+a,l,y,y+Qt),n.arc(e-f,s+o,l,y+Qt,y+vt),n.closePath();break;case"rect":if(!g){c=Math.SQRT1_2*v,d=r?r/2:c,n.rect(e-d,s-c,2*d,2*c);break}y+=Es;case"rectRot":h=Math.cos(y)*(r?r/2:v),o=Math.cos(y)*v,a=Math.sin(y)*v,f=Math.sin(y)*(r?r/2:v),n.moveTo(e-h,s-a),n.lineTo(e+f,s-o),n.lineTo(e+h,s+a),n.lineTo(e-f,s+o),n.closePath();break;case"crossRot":y+=Es;case"cross":h=Math.cos(y)*(r?r/2:v),o=Math.cos(y)*v,a=Math.sin(y)*v,f=Math.sin(y)*(r?r/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o);break;case"star":h=Math.cos(y)*(r?r/2:v),o=Math.cos(y)*v,a=Math.sin(y)*v,f=Math.sin(y)*(r?r/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o),y+=Es,h=Math.cos(y)*(r?r/2:v),o=Math.cos(y)*v,a=Math.sin(y)*v,f=Math.sin(y)*(r?r/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o);break;case"line":o=r?r/2:Math.cos(y)*v,a=Math.sin(y)*v,n.moveTo(e-o,s-a),n.lineTo(e+o,s+a);break;case"dash":n.moveTo(e,s),n.lineTo(e+Math.cos(y)*(r?r/2:v),s+Math.sin(y)*v);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function Pn(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function el(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function nl(n){n.restore()}function AS(n,t,e,s,r){if(!t)return n.lineTo(e.x,e.y);if(r==="middle"){const i=(t.x+e.x)/2;n.lineTo(i,t.y),n.lineTo(i,e.y)}else r==="after"!=!!s?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function kS(n,t,e,s){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function SS(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),ct(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function CS(n,t,e,s,r){if(r.strikethrough||r.underline){const i=n.measureText(s),o=t-i.actualBoundingBoxLeft,a=t+i.actualBoundingBoxRight,c=e-i.actualBoundingBoxAscent,l=e+i.actualBoundingBoxDescent,d=r.strikethrough?(c+l)/2:l;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=r.decorationWidth||2,n.moveTo(o,d),n.lineTo(a,d),n.stroke()}}function RS(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function Zs(n,t,e,s,r,i={}){const o=Vt(t)?t:[t],a=i.strokeWidth>0&&i.strokeColor!=="";let c,l;for(n.save(),n.font=r.string,SS(n,i),c=0;c<o.length;++c)l=o[c],i.backdrop&&RS(n,i.backdrop),a&&(i.strokeColor&&(n.strokeStyle=i.strokeColor),ct(i.strokeWidth)||(n.lineWidth=i.strokeWidth),n.strokeText(l,e,s,i.maxWidth)),n.fillText(l,e,s,i.maxWidth),CS(n,e,s,l,i),s+=Number(r.lineHeight);n.restore()}function _o(n,t){const{x:e,y:s,w:r,h:i,radius:o}=t;n.arc(e+o.topLeft,s+o.topLeft,o.topLeft,1.5*vt,vt,!0),n.lineTo(e,s+i-o.bottomLeft),n.arc(e+o.bottomLeft,s+i-o.bottomLeft,o.bottomLeft,vt,Qt,!0),n.lineTo(e+r-o.bottomRight,s+i),n.arc(e+r-o.bottomRight,s+i-o.bottomRight,o.bottomRight,Qt,0,!0),n.lineTo(e+r,s+o.topRight),n.arc(e+r-o.topRight,s+o.topRight,o.topRight,0,-Qt,!0),n.lineTo(e+o.topLeft,s)}const PS=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,DS=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function MS(n,t){const e=(""+n).match(PS);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const OS=n=>+n||0;function ah(n,t){const e={},s=dt(t),r=s?Object.keys(t):t,i=dt(n)?s?o=>rt(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of r)e[o]=OS(i(o));return e}function kv(n){return ah(n,{top:"y",right:"x",bottom:"y",left:"x"})}function Fs(n){return ah(n,["topLeft","topRight","bottomLeft","bottomRight"])}function Ae(n){const t=kv(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function se(n,t){n=n||{},t=t||$t.font;let e=rt(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=rt(n.style,t.style);s&&!(""+s).match(DS)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const r={family:rt(n.family,t.family),lineHeight:MS(rt(n.lineHeight,t.lineHeight),e),size:e,style:s,weight:rt(n.weight,t.weight),string:""};return r.string=TS(r),r}function Vi(n,t,e,s){let r,i,o;for(r=0,i=n.length;r<i;++r)if(o=n[r],o!==void 0&&o!==void 0)return o}function NS(n,t,e){const{min:s,max:r}=n,i=mv(t,(r-s)/2),o=(a,c)=>e&&a===0?0:a+c;return{min:o(s,-Math.abs(i)),max:o(r,i)}}function ys(n,t){return Object.assign(Object.create(n),t)}function ch(n,t=[""],e,s,r=()=>n[0]){const i=e||n;typeof s>"u"&&(s=Pv("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:i,_fallback:s,_getTarget:r,override:a=>ch([a,...n],t,i,s)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete n[0][c],!0},get(a,c){return Cv(a,c,()=>zS(c,t,n,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,c){return im(a).includes(c)},ownKeys(a){return im(a)},set(a,c,l){const d=a._storage||(a._storage=r());return a[c]=d[c]=l,delete a._keys,!0}})}function zr(n,t,e,s){const r={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:Sv(n,s),setContext:i=>zr(n,i,e,s),override:i=>zr(n.override(i),t,e,s)};return new Proxy(r,{deleteProperty(i,o){return delete i[o],delete n[o],!0},get(i,o,a){return Cv(i,o,()=>VS(i,o,a))},getOwnPropertyDescriptor(i,o){return i._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(i,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(i,o,a){return n[o]=a,delete i[o],!0}})}function Sv(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:r=t.allKeys}=n;return{allKeys:r,scriptable:e,indexable:s,isScriptable:ps(e)?e:()=>e,isIndexable:ps(s)?s:()=>s}}const LS=(n,t)=>n?n+nh(t):t,lh=(n,t)=>dt(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Cv(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const s=e();return n[t]=s,s}function VS(n,t,e){const{_proxy:s,_context:r,_subProxy:i,_descriptors:o}=n;let a=s[t];return ps(a)&&o.isScriptable(t)&&(a=FS(t,a,n,e)),Vt(a)&&a.length&&(a=$S(t,a,n,o.isIndexable)),lh(t,a)&&(a=zr(a,r,i&&i[t],o)),a}function FS(n,t,e,s){const{_proxy:r,_context:i,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let c=t(i,o||s);return a.delete(n),lh(n,c)&&(c=uh(r._scopes,r,n,c)),c}function $S(n,t,e,s){const{_proxy:r,_context:i,_subProxy:o,_descriptors:a}=e;if(typeof i.index<"u"&&s(n))return t[i.index%t.length];if(dt(t[0])){const c=t,l=r._scopes.filter(d=>d!==c);t=[];for(const d of c){const h=uh(l,r,n,d);t.push(zr(h,i,o&&o[n],a))}}return t}function Rv(n,t,e){return ps(n)?n(t,e):n}const BS=(n,t)=>n===!0?t:typeof n=="string"?fs(t,n):void 0;function US(n,t,e,s,r){for(const i of t){const o=BS(e,i);if(o){n.add(o);const a=Rv(o._fallback,e,r);if(typeof a<"u"&&a!==e&&a!==s)return a}else if(o===!1&&typeof s<"u"&&e!==s)return null}return!1}function uh(n,t,e,s){const r=t._rootScopes,i=Rv(t._fallback,e,s),o=[...n,...r],a=new Set;a.add(s);let c=rm(a,o,e,i||e,s);return c===null||typeof i<"u"&&i!==e&&(c=rm(a,o,i,c,s),c===null)?!1:ch(Array.from(a),[""],r,i,()=>jS(t,e,s))}function rm(n,t,e,s,r){for(;e;)e=US(n,t,e,s,r);return e}function jS(n,t,e){const s=n._getTarget();t in s||(s[t]={});const r=s[t];return Vt(r)&&dt(e)?e:r||{}}function zS(n,t,e,s){let r;for(const i of t)if(r=Pv(LS(i,n),e),typeof r<"u")return lh(n,r)?uh(e,s,n,r):r}function Pv(n,t){for(const e of t){if(!e)continue;const s=e[n];if(typeof s<"u")return s}}function im(n){let t=n._keys;return t||(t=n._keys=HS(n._scopes)),t}function HS(n){const t=new Set;for(const e of n)for(const s of Object.keys(e).filter(r=>!r.startsWith("_")))t.add(s);return Array.from(t)}function Dv(n,t,e,s){const{iScale:r}=n,{key:i="r"}=this._parsing,o=new Array(s);let a,c,l,d;for(a=0,c=s;a<c;++a)l=a+e,d=t[l],o[a]={r:r.parse(fs(d,i),l)};return o}const qS=Number.EPSILON||1e-14,Hr=(n,t)=>t<n.length&&!n[t].skip&&n[t],Mv=n=>n==="x"?"y":"x";function WS(n,t,e,s){const r=n.skip?t:n,i=t,o=e.skip?t:e,a=Nu(i,r),c=Nu(o,i);let l=a/(a+c),d=c/(a+c);l=isNaN(l)?0:l,d=isNaN(d)?0:d;const h=s*l,f=s*d;return{previous:{x:i.x-h*(o.x-r.x),y:i.y-h*(o.y-r.y)},next:{x:i.x+f*(o.x-r.x),y:i.y+f*(o.y-r.y)}}}function GS(n,t,e){const s=n.length;let r,i,o,a,c,l=Hr(n,0);for(let d=0;d<s-1;++d)if(c=l,l=Hr(n,d+1),!(!c||!l)){if(Qi(t[d],0,qS)){e[d]=e[d+1]=0;continue}r=e[d]/t[d],i=e[d+1]/t[d],a=Math.pow(r,2)+Math.pow(i,2),!(a<=9)&&(o=3/Math.sqrt(a),e[d]=r*o*t[d],e[d+1]=i*o*t[d])}}function YS(n,t,e="x"){const s=Mv(e),r=n.length;let i,o,a,c=Hr(n,0);for(let l=0;l<r;++l){if(o=a,a=c,c=Hr(n,l+1),!a)continue;const d=a[e],h=a[s];o&&(i=(d-o[e])/3,a[`cp1${e}`]=d-i,a[`cp1${s}`]=h-i*t[l]),c&&(i=(c[e]-d)/3,a[`cp2${e}`]=d+i,a[`cp2${s}`]=h+i*t[l])}}function KS(n,t="x"){const e=Mv(t),s=n.length,r=Array(s).fill(0),i=Array(s);let o,a,c,l=Hr(n,0);for(o=0;o<s;++o)if(a=c,c=l,l=Hr(n,o+1),!!c){if(l){const d=l[t]-c[t];r[o]=d!==0?(l[e]-c[e])/d:0}i[o]=a?l?pn(r[o-1])!==pn(r[o])?0:(r[o-1]+r[o])/2:r[o-1]:r[o]}GS(n,r,i),YS(n,i,t)}function va(n,t,e){return Math.max(Math.min(n,e),t)}function QS(n,t){let e,s,r,i,o,a=Pn(n[0],t);for(e=0,s=n.length;e<s;++e)o=i,i=a,a=e<s-1&&Pn(n[e+1],t),i&&(r=n[e],o&&(r.cp1x=va(r.cp1x,t.left,t.right),r.cp1y=va(r.cp1y,t.top,t.bottom)),a&&(r.cp2x=va(r.cp2x,t.left,t.right),r.cp2y=va(r.cp2y,t.top,t.bottom)))}function XS(n,t,e,s,r){let i,o,a,c;if(t.spanGaps&&(n=n.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")KS(n,r);else{let l=s?n[n.length-1]:n[0];for(i=0,o=n.length;i<o;++i)a=n[i],c=WS(l,a,n[Math.min(i+1,o-(s?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}t.capBezierPoints&&QS(n,e)}function dh(){return typeof window<"u"&&typeof document<"u"}function hh(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function _c(n,t,e){let s;return typeof n=="string"?(s=parseInt(n,10),n.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=n,s}const sl=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function JS(n,t){return sl(n).getPropertyValue(t)}const ZS=["top","right","bottom","left"];function $s(n,t,e){const s={};e=e?"-"+e:"";for(let r=0;r<4;r++){const i=ZS[r];s[i]=parseFloat(n[t+"-"+i+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const tC=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function eC(n,t){const e=n.touches,s=e&&e.length?e[0]:n,{offsetX:r,offsetY:i}=s;let o=!1,a,c;if(tC(r,i,n.target))a=r,c=i;else{const l=t.getBoundingClientRect();a=s.clientX-l.left,c=s.clientY-l.top,o=!0}return{x:a,y:c,box:o}}function Rs(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:s}=t,r=sl(e),i=r.boxSizing==="border-box",o=$s(r,"padding"),a=$s(r,"border","width"),{x:c,y:l,box:d}=eC(n,e),h=o.left+(d&&a.left),f=o.top+(d&&a.top);let{width:m,height:g}=t;return i&&(m-=o.width+a.width,g-=o.height+a.height),{x:Math.round((c-h)/m*e.width/s),y:Math.round((l-f)/g*e.height/s)}}function nC(n,t,e){let s,r;if(t===void 0||e===void 0){const i=n&&hh(n);if(!i)t=n.clientWidth,e=n.clientHeight;else{const o=i.getBoundingClientRect(),a=sl(i),c=$s(a,"border","width"),l=$s(a,"padding");t=o.width-l.width-c.width,e=o.height-l.height-c.height,s=_c(a.maxWidth,i,"clientWidth"),r=_c(a.maxHeight,i,"clientHeight")}}return{width:t,height:e,maxWidth:s||mc,maxHeight:r||mc}}const ns=n=>Math.round(n*10)/10;function sC(n,t,e,s){const r=sl(n),i=$s(r,"margin"),o=_c(r.maxWidth,n,"clientWidth")||mc,a=_c(r.maxHeight,n,"clientHeight")||mc,c=nC(n,t,e);let{width:l,height:d}=c;if(r.boxSizing==="content-box"){const f=$s(r,"border","width"),m=$s(r,"padding");l-=m.width+f.width,d-=m.height+f.height}return l=Math.max(0,l-i.width),d=Math.max(0,s?l/s:d-i.height),l=ns(Math.min(l,o,c.maxWidth)),d=ns(Math.min(d,a,c.maxHeight)),l&&!d&&(d=ns(l/2)),(t!==void 0||e!==void 0)&&s&&c.height&&d>c.height&&(d=c.height,l=ns(Math.floor(d*s))),{width:l,height:d}}function om(n,t,e){const s=t||1,r=ns(n.height*s),i=ns(n.width*s);n.height=ns(n.height),n.width=ns(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==s||o.height!==r||o.width!==i?(n.currentDevicePixelRatio=s,o.height=r,o.width=i,n.ctx.setTransform(s,0,0,s,0,0),!0):!1}const rC=function(){let n=!1;try{const t={get passive(){return n=!0,!1}};dh()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n}();function am(n,t){const e=JS(n,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function Ps(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function iC(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:s==="middle"?e<.5?n.y:t.y:s==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function oC(n,t,e,s){const r={x:n.cp2x,y:n.cp2y},i={x:t.cp1x,y:t.cp1y},o=Ps(n,r,e),a=Ps(r,i,e),c=Ps(i,t,e),l=Ps(o,a,e),d=Ps(a,c,e);return Ps(l,d,e)}const aC=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},cC=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function Or(n,t,e){return n?aC(t,e):cC()}function Ov(n,t){let e,s;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=s)}function Nv(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function Lv(n){return n==="angle"?{between:go,compare:lS,normalize:xe}:{between:Cn,compare:(t,e)=>t-e,normalize:t=>t}}function cm({start:n,end:t,count:e,loop:s,style:r}){return{start:n%e,end:t%e,loop:s&&(t-n+1)%e===0,style:r}}function lC(n,t,e){const{property:s,start:r,end:i}=e,{between:o,normalize:a}=Lv(s),c=t.length;let{start:l,end:d,loop:h}=n,f,m;if(h){for(l+=c,d+=c,f=0,m=c;f<m&&o(a(t[l%c][s]),r,i);++f)l--,d--;l%=c,d%=c}return d<l&&(d+=c),{start:l,end:d,loop:h,style:n.style}}function Vv(n,t,e){if(!e)return[n];const{property:s,start:r,end:i}=e,o=t.length,{compare:a,between:c,normalize:l}=Lv(s),{start:d,end:h,loop:f,style:m}=lC(n,t,e),g=[];let v=!1,y=null,E,A,C;const D=()=>c(r,C,E)&&a(r,C)!==0,R=()=>a(i,E)===0||c(i,C,E),M=()=>v||D(),T=()=>!v||R();for(let b=d,x=d;b<=h;++b)A=t[b%o],!A.skip&&(E=l(A[s]),E!==C&&(v=c(E,r,i),y===null&&M()&&(y=a(E,r)===0?b:x),y!==null&&T()&&(g.push(cm({start:y,end:b,loop:f,count:o,style:m})),y=null),x=b,C=E));return y!==null&&g.push(cm({start:y,end:h,loop:f,count:o,style:m})),g}function Fv(n,t){const e=[],s=n.segments;for(let r=0;r<s.length;r++){const i=Vv(s[r],n.points,t);i.length&&e.push(...i)}return e}function uC(n,t,e,s){let r=0,i=t-1;if(e&&!s)for(;r<t&&!n[r].skip;)r++;for(;r<t&&n[r].skip;)r++;for(r%=t,e&&(i+=r);i>r&&n[i%t].skip;)i--;return i%=t,{start:r,end:i}}function dC(n,t,e,s){const r=n.length,i=[];let o=t,a=n[t],c;for(c=t+1;c<=e;++c){const l=n[c%r];l.skip||l.stop?a.skip||(s=!1,i.push({start:t%r,end:(c-1)%r,loop:s}),t=o=l.stop?c:null):(o=c,a.skip&&(t=c)),a=l}return o!==null&&i.push({start:t%r,end:o%r,loop:s}),i}function hC(n,t){const e=n.points,s=n.options.spanGaps,r=e.length;if(!r)return[];const i=!!n._loop,{start:o,end:a}=uC(e,r,i,s);if(s===!0)return lm(n,[{start:o,end:a,loop:i}],e,t);const c=a<o?a+r:a,l=!!n._fullLoop&&o===0&&a===r-1;return lm(n,dC(e,o,c,l),e,t)}function lm(n,t,e,s){return!s||!s.setContext||!e?t:fC(n,t,e,s)}function fC(n,t,e,s){const r=n._chart.getContext(),i=um(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,c=e.length,l=[];let d=i,h=t[0].start,f=h;function m(g,v,y,E){const A=a?-1:1;if(g!==v){for(g+=c;e[g%c].skip;)g-=A;for(;e[v%c].skip;)v+=A;g%c!==v%c&&(l.push({start:g%c,end:v%c,loop:y,style:E}),d=E,h=v%c)}}for(const g of t){h=a?h:g.start;let v=e[h%c],y;for(f=h+1;f<=g.end;f++){const E=e[f%c];y=um(s.setContext(ys(r,{type:"segment",p0:v,p1:E,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),pC(y,d)&&m(h,f-1,g.loop,d),v=E,d=y}h<f-1&&m(h,f-1,g.loop,d)}return l}function um(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function pC(n,t){if(!t)return!1;const e=[],s=function(r,i){return oh(i)?(e.includes(i)||e.push(i),e.indexOf(i)):i};return JSON.stringify(n,s)!==JSON.stringify(t,s)}function ba(n,t,e){return n.options.clip?n[e]:t[e]}function mC(n,t){const{xScale:e,yScale:s}=n;return e&&s?{left:ba(e,t,"left"),right:ba(e,t,"right"),top:ba(s,t,"top"),bottom:ba(s,t,"bottom")}:t}function $v(n,t){const e=t._clip;if(e.disabled)return!1;const s=mC(t,n.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class gC{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,r){const i=e.listeners[r],o=e.duration;i.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(s-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=xv.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,r)=>{if(!s.running||!s.items.length)return;const i=s.items;let o=i.length-1,a=!1,c;for(;o>=0;--o)c=i[o],c._active?(c._total>s.duration&&(s.duration=c._total),c.tick(t),a=!0):(i[o]=i[i.length-1],i.pop());a&&(r.draw(),this._notify(r,s,t,"progress")),i.length||(s.running=!1,this._notify(r,s,t,"complete"),s.initial=!1),e+=i.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,r)=>Math.max(s,r._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let r=s.length-1;for(;r>=0;--r)s[r].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var xn=new gC;const dm="transparent",_C={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const s=em(n||dm),r=s.valid&&em(t||dm);return r&&r.valid?r.mix(s,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class yC{constructor(t,e,s,r){const i=e[s];r=Vi([t.to,r,i,t.from]);const o=Vi([t.from,i,r]);this._active=!0,this._fn=t.fn||_C[t.type||typeof o],this._easing=Xi[t.easing]||Xi.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=o,this._to=r,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const r=this._target[this._prop],i=s-this._start,o=this._duration-i;this._start=s,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=i,this._loop=!!t.loop,this._to=Vi([t.to,e,r,t.from]),this._from=Vi([t.from,r,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,r=this._prop,i=this._from,o=this._loop,a=this._to;let c;if(this._active=i!==a&&(o||e<s),!this._active){this._target[r]=a,this._notify(!0);return}if(e<0){this._target[r]=i;return}c=e/s%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[r]=this._fn(i,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let r=0;r<s.length;r++)s[r][e]()}}class Bv{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!dt(t))return;const e=Object.keys($t.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(r=>{const i=t[r];if(!dt(i))return;const o={};for(const a of e)o[a]=i[a];(Vt(i.properties)&&i.properties||[r]).forEach(a=>{(a===r||!s.has(a))&&s.set(a,o)})})}_animateOptions(t,e){const s=e.options,r=bC(t,s);if(!r)return[];const i=this._createAnimations(r,s);return s.$shared&&vC(t.options.$animations,s).then(()=>{t.options=s},()=>{}),i}_createAnimations(t,e){const s=this._properties,r=[],i=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){r.push(...this._animateOptions(t,e));continue}const d=e[l];let h=i[l];const f=s.get(l);if(h)if(f&&h.active()){h.update(f,d,a);continue}else h.cancel();if(!f||!f.duration){t[l]=d;continue}i[l]=h=new yC(f,t,l,d),r.push(h)}return r}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return xn.add(this._chart,s),!0}}function vC(n,t){const e=[],s=Object.keys(t);for(let r=0;r<s.length;r++){const i=n[s[r]];i&&i.active()&&e.push(i.wait())}return Promise.all(e)}function bC(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function hm(n,t){const e=n&&n.options||{},s=e.reverse,r=e.min===void 0?t:0,i=e.max===void 0?t:0;return{start:s?i:r,end:s?r:i}}function xC(n,t,e){if(e===!1)return!1;const s=hm(n,e),r=hm(t,e);return{top:r.end,right:s.end,bottom:r.start,left:s.start}}function wC(n){let t,e,s,r;return dt(n)?(t=n.top,e=n.right,s=n.bottom,r=n.left):t=e=s=r=n,{top:t,right:e,bottom:s,left:r,disabled:n===!1}}function Uv(n,t){const e=[],s=n._getSortedDatasetMetas(t);let r,i;for(r=0,i=s.length;r<i;++r)e.push(s[r].index);return e}function fm(n,t,e,s={}){const r=n.keys,i=s.mode==="single";let o,a,c,l;if(t===null)return;let d=!1;for(o=0,a=r.length;o<a;++o){if(c=+r[o],c===e){if(d=!0,s.all)continue;break}l=n.values[c],Ht(l)&&(i||t===0||pn(t)===pn(l))&&(t+=l)}return!d&&!s.all?0:t}function EC(n,t){const{iScale:e,vScale:s}=t,r=e.axis==="x"?"x":"y",i=s.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let c,l,d;for(c=0,l=o.length;c<l;++c)d=o[c],a[c]={[r]:d,[i]:n[d]};return a}function Hl(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function TC(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function IC(n){const{min:t,max:e,minDefined:s,maxDefined:r}=n.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:r?e:Number.POSITIVE_INFINITY}}function AC(n,t,e){const s=n[t]||(n[t]={});return s[e]||(s[e]={})}function pm(n,t,e,s){for(const r of t.getMatchingVisibleMetas(s).reverse()){const i=n[r.index];if(e&&i>0||!e&&i<0)return r.index}return null}function mm(n,t){const{chart:e,_cachedMeta:s}=n,r=e._stacks||(e._stacks={}),{iScale:i,vScale:o,index:a}=s,c=i.axis,l=o.axis,d=TC(i,o,s),h=t.length;let f;for(let m=0;m<h;++m){const g=t[m],{[c]:v,[l]:y}=g,E=g._stacks||(g._stacks={});f=E[l]=AC(r,d,v),f[a]=y,f._top=pm(f,o,!0,s.type),f._bottom=pm(f,o,!1,s.type);const A=f._visualValues||(f._visualValues={});A[a]=y}}function ql(n,t){const e=n.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function kC(n,t){return ys(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function SC(n,t,e){return ys(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function bi(n,t){const e=n.controller.index,s=n.vScale&&n.vScale.axis;if(s){t=t||n._parsed;for(const r of t){const i=r._stacks;if(!i||i[s]===void 0||i[s][e]===void 0)return;delete i[s][e],i[s]._visualValues!==void 0&&i[s]._visualValues[e]!==void 0&&delete i[s]._visualValues[e]}}}const Wl=n=>n==="reset"||n==="none",gm=(n,t)=>t?n:Object.assign({},n),CC=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:Uv(e,!0),values:null};class Qe{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Hl(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&bi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),r=(h,f,m,g)=>h==="x"?f:h==="r"?g:m,i=e.xAxisID=rt(s.xAxisID,ql(t,"x")),o=e.yAxisID=rt(s.yAxisID,ql(t,"y")),a=e.rAxisID=rt(s.rAxisID,ql(t,"r")),c=e.indexAxis,l=e.iAxisID=r(c,i,o,a),d=e.vAxisID=r(c,o,i,a);e.xScale=this.getScaleForId(i),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Jp(this._data,this),t._stacked&&bi(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(dt(e)){const r=this._cachedMeta;this._data=EC(e,r)}else if(s!==e){if(s){Jp(s,this);const r=this._cachedMeta;bi(r),r._parsed=[]}e&&Object.isExtensible(e)&&fS(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let r=!1;this._dataCheck();const i=e._stacked;e._stacked=Hl(e.vScale,e),e.stack!==s.stack&&(r=!0,bi(e),e.stack=s.stack),this._resyncElements(t),(r||i!==e._stacked)&&(mm(this,e._parsed),e._stacked=Hl(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:r}=this,{iScale:i,_stacked:o}=s,a=i.axis;let c=t===0&&e===r.length?!0:s._sorted,l=t>0&&s._parsed[t-1],d,h,f;if(this._parsing===!1)s._parsed=r,s._sorted=!0,f=r;else{Vt(r[t])?f=this.parseArrayData(s,r,t,e):dt(r[t])?f=this.parseObjectData(s,r,t,e):f=this.parsePrimitiveData(s,r,t,e);const m=()=>h[a]===null||l&&h[a]<l[a];for(d=0;d<e;++d)s._parsed[d+t]=h=f[d],c&&(m()&&(c=!1),l=h);s._sorted=c}o&&mm(this,f)}parsePrimitiveData(t,e,s,r){const{iScale:i,vScale:o}=t,a=i.axis,c=o.axis,l=i.getLabels(),d=i===o,h=new Array(r);let f,m,g;for(f=0,m=r;f<m;++f)g=f+s,h[f]={[a]:d||i.parse(l[g],g),[c]:o.parse(e[g],g)};return h}parseArrayData(t,e,s,r){const{xScale:i,yScale:o}=t,a=new Array(r);let c,l,d,h;for(c=0,l=r;c<l;++c)d=c+s,h=e[d],a[c]={x:i.parse(h[0],d),y:o.parse(h[1],d)};return a}parseObjectData(t,e,s,r){const{xScale:i,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(r);let d,h,f,m;for(d=0,h=r;d<h;++d)f=d+s,m=e[f],l[d]={x:i.parse(fs(m,a),f),y:o.parse(fs(m,c),f)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const r=this.chart,i=this._cachedMeta,o=e[t.axis],a={keys:Uv(r,!0),values:e._stacks[t.axis]._visualValues};return fm(a,o,i.index,{mode:s})}updateRangeFromParsed(t,e,s,r){const i=s[e.axis];let o=i===null?NaN:i;const a=r&&s._stacks[e.axis];r&&a&&(r.values=a,o=fm(r,i,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const s=this._cachedMeta,r=s._parsed,i=s._sorted&&t===s.iScale,o=r.length,a=this._getOtherScale(t),c=CC(e,s,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=IC(a);let f,m;function g(){m=r[f];const v=m[a.axis];return!Ht(m[t.axis])||d>v||h<v}for(f=0;f<o&&!(!g()&&(this.updateRangeFromParsed(l,t,m,c),i));++f);if(i){for(f=o-1;f>=0;--f)if(!g()){this.updateRangeFromParsed(l,t,m,c);break}}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let r,i,o;for(r=0,i=e.length;r<i;++r)o=e[r][t.axis],Ht(o)&&s.push(o);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,r=e.vScale,i=this.getParsed(t);return{label:s?""+s.getLabelForValue(i[s.axis]):"",value:r?""+r.getLabelForValue(i[r.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=wC(rt(this.options.clip,xC(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,r=s.data||[],i=e.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||r.length-a,l=this.options.drawActiveElementsOnTop;let d;for(s.dataset&&s.dataset.draw(t,i,a,c),d=a;d<a+c;++d){const h=r[d];h.hidden||(h.active&&l?o.push(h):h.draw(t,i))}for(d=0;d<o.length;++d)o[d].draw(t,i)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const r=this.getDataset();let i;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];i=o.$context||(o.$context=SC(this.getContext(),t,o)),i.parsed=this.getParsed(t),i.raw=r.data[t],i.index=i.dataIndex=t}else i=this.$context||(this.$context=kC(this.chart.getContext(),this.index)),i.dataset=r,i.index=i.datasetIndex=this.index;return i.active=!!e,i.mode=s,i}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const r=e==="active",i=this._cachedDataOpts,o=t+"-"+e,a=i[o],c=this.enableOptionSharing&&mo(s);if(a)return gm(a,c);const l=this.chart.config,d=l.datasetElementScopeKeys(this._type,t),h=r?[`${t}Hover`,"hover",t,""]:[t,""],f=l.getOptionScopes(this.getDataset(),d),m=Object.keys($t.elements[t]),g=()=>this.getContext(s,r,e),v=l.resolveNamedOptions(f,m,g,h);return v.$shared&&(v.$shared=c,i[o]=Object.freeze(gm(v,c))),v}_resolveAnimations(t,e,s){const r=this.chart,i=this._cachedDataOpts,o=`animation-${e}`,a=i[o];if(a)return a;let c;if(r.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,e),f=d.getOptionScopes(this.getDataset(),h);c=d.createResolver(f,this.getContext(t,s,e))}const l=new Bv(r,c&&c.animations);return c&&c._cacheable&&(i[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Wl(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),r=this._sharedOptions,i=this.getSharedOptions(s),o=this.includeOptions(e,i)||i!==r;return this.updateSharedOptions(i,e,s),{sharedOptions:i,includeOptions:o}}updateElement(t,e,s,r){Wl(r)?Object.assign(t,s):this._resolveAnimations(e,r).update(t,s)}updateSharedOptions(t,e,s){t&&!Wl(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,r){t.active=r;const i=this.getStyle(e,r);this._resolveAnimations(e,s,r).update(t,{options:!r&&this.getSharedOptions(i)||i})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const r=s.length,i=e.length,o=Math.min(i,r);o&&this.parse(0,o),i>r?this._insertElements(r,i-r,t):i<r&&this._removeElements(i,r-i)}_insertElements(t,e,s=!0){const r=this._cachedMeta,i=r.data,o=t+e;let a;const c=l=>{for(l.length+=e,a=l.length-1;a>=o;a--)l[a]=l[a-e]};for(c(i),a=t;a<o;++a)i[a]=new this.dataElementType;this._parsing&&c(r._parsed),this.parse(t,e),s&&this.updateElements(i,t,e,"reset")}updateElements(t,e,s,r){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const r=s._parsed.splice(t,e);s._stacked&&bi(s,r)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,r]=t;this[e](s,r)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}N(Qe,"defaults",{}),N(Qe,"datasetElementType",null),N(Qe,"dataElementType",null);function RC(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let s=[];for(let r=0,i=e.length;r<i;r++)s=s.concat(e[r].controller.getAllParsedValues(n));n._cache.$bar=bv(s.sort((r,i)=>r-i))}return n._cache.$bar}function PC(n){const t=n.iScale,e=RC(t,n.type);let s=t._length,r,i,o,a;const c=()=>{o===32767||o===-32768||(mo(a)&&(s=Math.min(s,Math.abs(o-a)||s)),a=o)};for(r=0,i=e.length;r<i;++r)o=t.getPixelForValue(e[r]),c();for(a=void 0,r=0,i=t.ticks.length;r<i;++r)o=t.getPixelForTick(r),c();return s}function DC(n,t,e,s){const r=e.barThickness;let i,o;return ct(r)?(i=t.min*e.categoryPercentage,o=e.barPercentage):(i=r*s,o=1),{chunk:i/s,ratio:o,start:t.pixels[n]-i/2}}function MC(n,t,e,s){const r=t.pixels,i=r[n];let o=n>0?r[n-1]:null,a=n<r.length-1?r[n+1]:null;const c=e.categoryPercentage;o===null&&(o=i-(a===null?t.end-t.start:a-i)),a===null&&(a=i+i-o);const l=i-(i-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/s,ratio:e.barPercentage,start:l}}function OC(n,t,e,s){const r=e.parse(n[0],s),i=e.parse(n[1],s),o=Math.min(r,i),a=Math.max(r,i);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),t[e.axis]=l,t._custom={barStart:c,barEnd:l,start:r,end:i,min:o,max:a}}function jv(n,t,e,s){return Vt(n)?OC(n,t,e,s):t[e.axis]=e.parse(n,s),t}function _m(n,t,e,s){const r=n.iScale,i=n.vScale,o=r.getLabels(),a=r===i,c=[];let l,d,h,f;for(l=e,d=e+s;l<d;++l)f=t[l],h={},h[r.axis]=a||r.parse(o[l],l),c.push(jv(f,h,i,l));return c}function Gl(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function NC(n,t,e){return n!==0?pn(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function LC(n){let t,e,s,r,i;return n.horizontal?(t=n.base>n.x,e="left",s="right"):(t=n.base<n.y,e="bottom",s="top"),t?(r="end",i="start"):(r="start",i="end"),{start:e,end:s,reverse:t,top:r,bottom:i}}function VC(n,t,e,s){let r=t.borderSkipped;const i={};if(!r){n.borderSkipped=i;return}if(r===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:l,bottom:d}=LC(n);r==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===s?r=l:(e._bottom||0)===s?r=d:(i[ym(d,o,a,c)]=!0,r=l)),i[ym(r,o,a,c)]=!0,n.borderSkipped=i}function ym(n,t,e,s){return s?(n=FC(n,t,e),n=vm(n,e,t)):n=vm(n,t,e),n}function FC(n,t,e){return n===t?e:n===e?t:n}function vm(n,t,e){return n==="start"?t:n==="end"?e:n}function $C(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class Fa extends Qe{parsePrimitiveData(t,e,s,r){return _m(t,e,s,r)}parseArrayData(t,e,s,r){return _m(t,e,s,r)}parseObjectData(t,e,s,r){const{iScale:i,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=i.axis==="x"?a:c,d=o.axis==="x"?a:c,h=[];let f,m,g,v;for(f=s,m=s+r;f<m;++f)v=e[f],g={},g[i.axis]=i.parse(fs(v,l),f),h.push(jv(fs(v,d),g,o,f));return h}updateRangeFromParsed(t,e,s,r){super.updateRangeFromParsed(t,e,s,r);const i=s._custom;i&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,i.min),t.max=Math.max(t.max,i.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:r}=e,i=this.getParsed(t),o=i._custom,a=Gl(o)?"["+o.start+", "+o.end+"]":""+r.getLabelForValue(i[r.axis]);return{label:""+s.getLabelForValue(i[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,r){const i=r==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),l=a.isHorizontal(),d=this._getRuler(),{sharedOptions:h,includeOptions:f}=this._getSharedOptions(e,r);for(let m=e;m<e+s;m++){const g=this.getParsed(m),v=i||ct(g[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(m),y=this._calculateBarIndexPixels(m,d),E=(g._stacks||{})[a.axis],A={horizontal:l,base:v.base,enableBorderRadius:!E||Gl(g._custom)||o===E._top||o===E._bottom,x:l?v.head:y.center,y:l?y.center:v.head,height:l?y.size:Math.abs(v.size),width:l?Math.abs(v.size):y.size};f&&(A.options=h||this.resolveDataElementOptions(m,t[m].active?"active":r));const C=A.options||t[m].options;VC(A,C,E,o),$C(A,C,d.ratio),this.updateElement(t[m],m,A,r)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,r=s.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),i=s.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),c=a&&a[s.axis],l=d=>{const h=d._parsed.find(m=>m[s.axis]===c),f=h&&h[d.vScale.axis];if(ct(f)||isNaN(f))return!0};for(const d of r)if(!(e!==void 0&&l(d))&&((i===!1||o.indexOf(d.stack)===-1||i===void 0&&d.stack===void 0)&&o.push(d.stack),d.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[rt(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const r=this._getStacks(t,s),i=e!==void 0?r.indexOf(e):-1;return i===-1?r.length-1:i}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,r=[];let i,o;for(i=0,o=e.data.length;i<o;++i)r.push(s.getPixelForValue(this.getParsed(i)[s.axis],i));const a=t.barThickness;return{min:a||PC(e),pixels:r,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:r},options:{base:i,minBarLength:o}}=this,a=i||0,c=this.getParsed(t),l=c._custom,d=Gl(l);let h=c[e.axis],f=0,m=s?this.applyStack(e,c,s):h,g,v;m!==h&&(f=m-h,m=h),d&&(h=l.barStart,m=l.barEnd-l.barStart,h!==0&&pn(h)!==pn(l.barEnd)&&(f=0),f+=h);const y=!ct(i)&&!d?i:f;let E=e.getPixelForValue(y);if(this.chart.getDataVisibility(t)?g=e.getPixelForValue(f+m):g=E,v=g-E,Math.abs(v)<o){v=NC(v,e,a)*o,h===a&&(E-=v/2);const A=e.getPixelForDecimal(0),C=e.getPixelForDecimal(1),D=Math.min(A,C),R=Math.max(A,C);E=Math.max(Math.min(E,R),D),g=E+v,s&&!d&&(c._stacks[e.axis]._visualValues[r]=e.getValueForPixel(g)-e.getValueForPixel(E))}if(E===e.getPixelForValue(a)){const A=pn(v)*e.getLineWidthForValue(a)/2;E+=A,v-=A}return{size:v,base:E,head:g,center:g+v/2}}_calculateBarIndexPixels(t,e){const s=e.scale,r=this.options,i=r.skipNull,o=rt(r.maxBarThickness,1/0);let a,c;const l=this._getAxisCount();if(e.grouped){const d=i?this._getStackCount(t):e.stackCount,h=r.barThickness==="flex"?MC(t,e,r,d*l):DC(t,e,r,d*l),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,m=this._getAxis().indexOf(rt(f,this.getFirstScaleIdForIndexAxis())),g=this._getStackIndex(this.index,this._cachedMeta.stack,i?t:void 0)+m;a=h.start+h.chunk*g+h.chunk/2,c=Math.min(o,h.chunk*h.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,r=s.length;let i=0;for(;i<r;++i)this.getParsed(i)[e.axis]!==null&&!s[i].hidden&&s[i].draw(this._ctx)}}N(Fa,"id","bar"),N(Fa,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),N(Fa,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class $a extends Qe{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,r){const i=super.parsePrimitiveData(t,e,s,r);for(let o=0;o<i.length;o++)i[o]._custom=this.resolveDataElementOptions(o+s).radius;return i}parseArrayData(t,e,s,r){const i=super.parseArrayData(t,e,s,r);for(let o=0;o<i.length;o++){const a=e[s+o];i[o]._custom=rt(a[2],this.resolveDataElementOptions(o+s).radius)}return i}parseObjectData(t,e,s,r){const i=super.parseObjectData(t,e,s,r);for(let o=0;o<i.length;o++){const a=e[s+o];i[o]._custom=rt(a&&a.r&&+a.r,this.resolveDataElementOptions(o+s).radius)}return i}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:r,yScale:i}=e,o=this.getParsed(t),a=r.getLabelForValue(o.x),c=i.getLabelForValue(o.y),l=o._custom;return{label:s[t]||"",value:"("+a+", "+c+(l?", "+l:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,r){const i=r==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:l}=this._getSharedOptions(e,r),d=o.axis,h=a.axis;for(let f=e;f<e+s;f++){const m=t[f],g=!i&&this.getParsed(f),v={},y=v[d]=i?o.getPixelForDecimal(.5):o.getPixelForValue(g[d]),E=v[h]=i?a.getBasePixel():a.getPixelForValue(g[h]);v.skip=isNaN(y)||isNaN(E),l&&(v.options=c||this.resolveDataElementOptions(f,m.active?"active":r),i&&(v.options.radius=0)),this.updateElement(m,f,v,r)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let r=super.resolveDataElementOptions(t,e);r.$shared&&(r=Object.assign({},r,{$shared:!1}));const i=r.radius;return e!=="active"&&(r.radius=0),r.radius+=rt(s&&s._custom,i),r}}N($a,"id","bubble"),N($a,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),N($a,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function BC(n,t,e){let s=1,r=1,i=0,o=0;if(t<Nt){const a=n,c=a+t,l=Math.cos(a),d=Math.sin(a),h=Math.cos(c),f=Math.sin(c),m=(C,D,R)=>go(C,a,c,!0)?1:Math.max(D,D*e,R,R*e),g=(C,D,R)=>go(C,a,c,!0)?-1:Math.min(D,D*e,R,R*e),v=m(0,l,h),y=m(Qt,d,f),E=g(vt,l,h),A=g(vt+Qt,d,f);s=(v-E)/2,r=(y-A)/2,i=-(v+E)/2,o=-(y+A)/2}return{ratioX:s,ratioY:r,offsetX:i,offsetY:o}}class Ns extends Qe{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,r=this._cachedMeta;if(this._parsing===!1)r._parsed=s;else{let i=c=>+s[c];if(dt(s[t])){const{key:c="value"}=this._parsing;i=l=>+fs(s[l],c)}let o,a;for(o=t,a=t+e;o<a;++o)r._parsed[o]=i(o)}}_getRotation(){return Ke(this.options.rotation-90)}_getCircumference(){return Ke(this.options.circumference)}_getRotationExtents(){let t=Nt,e=-Nt;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const r=this.chart.getDatasetMeta(s).controller,i=r._getRotation(),o=r._getCircumference();t=Math.min(t,i),e=Math.max(e,i+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,r=this._cachedMeta,i=r.data,o=this.getMaxBorderWidth()+this.getMaxOffset(i)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-o)/2,0),c=Math.min(J1(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:d,rotation:h}=this._getRotationExtents(),{ratioX:f,ratioY:m,offsetX:g,offsetY:v}=BC(h,d,c),y=(s.width-o)/f,E=(s.height-o)/m,A=Math.max(Math.min(y,E)/2,0),C=mv(this.options.radius,A),D=Math.max(C*c,0),R=(C-D)/this._getVisibleDatasetWeightTotal();this.offsetX=g*C,this.offsetY=v*C,r.total=this.calculateTotal(),this.outerRadius=C-R*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-R*l,0),this.updateElements(i,0,i.length,t)}_circumference(t,e){const s=this.options,r=this._cachedMeta,i=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||r._parsed[t]===null||r.data[t].hidden?0:this.calculateCircumference(r._parsed[t]*i/Nt)}updateElements(t,e,s,r){const i=r==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,d=(a.left+a.right)/2,h=(a.top+a.bottom)/2,f=i&&l.animateScale,m=f?0:this.innerRadius,g=f?0:this.outerRadius,{sharedOptions:v,includeOptions:y}=this._getSharedOptions(e,r);let E=this._getRotation(),A;for(A=0;A<e;++A)E+=this._circumference(A,i);for(A=e;A<e+s;++A){const C=this._circumference(A,i),D=t[A],R={x:d+this.offsetX,y:h+this.offsetY,startAngle:E,endAngle:E+C,circumference:C,outerRadius:g,innerRadius:m};y&&(R.options=v||this.resolveDataElementOptions(A,D.active?"active":r)),E+=C,this.updateElement(D,A,R,r)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,r;for(r=0;r<e.length;r++){const i=t._parsed[r];i!==null&&!isNaN(i)&&this.chart.getDataVisibility(r)&&!e[r].hidden&&(s+=Math.abs(i))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?Nt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,r=s.data.labels||[],i=Bo(e._parsed[t],s.options.locale);return{label:r[t]||"",value:i}}getMaxBorderWidth(t){let e=0;const s=this.chart;let r,i,o,a,c;if(!t){for(r=0,i=s.data.datasets.length;r<i;++r)if(s.isDatasetVisible(r)){o=s.getDatasetMeta(r),t=o.data,a=o.controller;break}}if(!t)return 0;for(r=0,i=t.length;r<i;++r)c=a.resolveDataElementOptions(r),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,r=t.length;s<r;++s){const i=this.resolveDataElementOptions(s);e=Math.max(e,i.offset||0,i.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(rt(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}N(Ns,"id","doughnut"),N(Ns,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),N(Ns,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),N(Ns,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:r,color:i,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,l)=>{const h=t.getDatasetMeta(0).controller.getStyle(l);return{text:c,fillStyle:h.backgroundColor,fontColor:i,hidden:!t.getDataVisibility(l),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:r,pointStyle:s,borderRadius:o&&(a||h.borderRadius),index:l}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class Ba extends Qe{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:r=[],_dataset:i}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=Ev(e,r,o);this._drawStart=a,this._drawCount=c,Tv(e)&&(a=0,c=r.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!i._decimated,s.points=r;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:l},t),this.updateElements(r,a,c,t)}updateElements(t,e,s,r){const i=r==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(e,r),f=o.axis,m=a.axis,{spanGaps:g,segment:v}=this.options,y=jr(g)?g:Number.POSITIVE_INFINITY,E=this.chart._animationsDisabled||i||r==="none",A=e+s,C=t.length;let D=e>0&&this.getParsed(e-1);for(let R=0;R<C;++R){const M=t[R],T=E?M:{};if(R<e||R>=A){T.skip=!0;continue}const b=this.getParsed(R),x=ct(b[m]),I=T[f]=o.getPixelForValue(b[f],R),S=T[m]=i||x?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,b,c):b[m],R);T.skip=isNaN(I)||isNaN(S)||x,T.stop=R>0&&Math.abs(b[f]-D[f])>y,v&&(T.parsed=b,T.raw=l.data[R]),h&&(T.options=d||this.resolveDataElementOptions(R,M.active?"active":r)),E||this.updateElement(M,R,T,r),D=b}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,r=t.data||[];if(!r.length)return s;const i=r[0].size(this.resolveDataElementOptions(0)),o=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(s,i,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}N(Ba,"id","line"),N(Ba,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),N(Ba,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Zi extends Qe{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,r=s.data.labels||[],i=Bo(e._parsed[t].r,s.options.locale);return{label:r[t]||"",value:i}}parseObjectData(t,e,s,r){return Dv.bind(this)(t,e,s,r)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,r)=>{const i=this.getParsed(r).r;!isNaN(i)&&this.chart.getDataVisibility(r)&&(i<e.min&&(e.min=i),i>e.max&&(e.max=i))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,r=Math.min(e.right-e.left,e.bottom-e.top),i=Math.max(r/2,0),o=Math.max(s.cutoutPercentage?i/100*s.cutoutPercentage:1,0),a=(i-o)/t.getVisibleDatasetCount();this.outerRadius=i-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,s,r){const i=r==="reset",o=this.chart,c=o.options.animation,l=this._cachedMeta.rScale,d=l.xCenter,h=l.yCenter,f=l.getIndexAngle(0)-.5*vt;let m=f,g;const v=360/this.countVisibleElements();for(g=0;g<e;++g)m+=this._computeAngle(g,r,v);for(g=e;g<e+s;g++){const y=t[g];let E=m,A=m+this._computeAngle(g,r,v),C=o.getDataVisibility(g)?l.getDistanceFromCenterForValue(this.getParsed(g).r):0;m=A,i&&(c.animateScale&&(C=0),c.animateRotate&&(E=A=f));const D={x:d,y:h,innerRadius:0,outerRadius:C,startAngle:E,endAngle:A,options:this.resolveDataElementOptions(g,y.active?"active":r)};this.updateElement(y,g,D,r)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,r)=>{!isNaN(this.getParsed(r).r)&&this.chart.getDataVisibility(r)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?Ke(this.resolveDataElementOptions(t,e).angle||s):0}}N(Zi,"id","polarArea"),N(Zi,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),N(Zi,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:r}}=t.legend.options;return e.labels.map((i,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:i,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:r,lineWidth:c.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Fu extends Ns{}N(Fu,"id","pie"),N(Fu,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Ua extends Qe{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,r){return Dv.bind(this)(t,e,s,r)}update(t){const e=this._cachedMeta,s=e.dataset,r=e.data||[],i=e.iScale.getLabels();if(s.points=r,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:i.length===r.length,options:o};this.updateElement(s,void 0,a,t)}this.updateElements(r,0,r.length,t)}updateElements(t,e,s,r){const i=this._cachedMeta.rScale,o=r==="reset";for(let a=e;a<e+s;a++){const c=t[a],l=this.resolveDataElementOptions(a,c.active?"active":r),d=i.getPointPositionForValue(a,this.getParsed(a).r),h=o?i.xCenter:d.x,f=o?i.yCenter:d.y,m={x:h,y:f,angle:d.angle,skip:isNaN(h)||isNaN(f),options:l};this.updateElement(c,a,m,r)}}}N(Ua,"id","radar"),N(Ua,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),N(Ua,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class ja extends Qe{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:r,yScale:i}=e,o=this.getParsed(t),a=r.getLabelForValue(o.x),c=i.getLabelForValue(o.y);return{label:s[t]||"",value:"("+a+", "+c+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,r=this.chart._animationsDisabled;let{start:i,count:o}=Ev(e,s,r);if(this._drawStart=i,this._drawCount=o,Tv(e)&&(i=0,o=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:c}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=s;const l=this.resolveDatasetElementOptions(t);l.segment=this.options.segment,this.updateElement(a,void 0,{animated:!r,options:l},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,i,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,r){const i=r==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,d=this.resolveDataElementOptions(e,r),h=this.getSharedOptions(d),f=this.includeOptions(r,h),m=o.axis,g=a.axis,{spanGaps:v,segment:y}=this.options,E=jr(v)?v:Number.POSITIVE_INFINITY,A=this.chart._animationsDisabled||i||r==="none";let C=e>0&&this.getParsed(e-1);for(let D=e;D<e+s;++D){const R=t[D],M=this.getParsed(D),T=A?R:{},b=ct(M[g]),x=T[m]=o.getPixelForValue(M[m],D),I=T[g]=i||b?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,M,c):M[g],D);T.skip=isNaN(x)||isNaN(I)||b,T.stop=D>0&&Math.abs(M[m]-C[m])>E,y&&(T.parsed=M,T.raw=l.data[D]),f&&(T.options=h||this.resolveDataElementOptions(D,R.active?"active":r)),A||this.updateElement(R,D,T,r),C=M}this.updateSharedOptions(h,r,d)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let c=e.length-1;c>=0;--c)a=Math.max(a,e[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const s=t.dataset,r=s.options&&s.options.borderWidth||0;if(!e.length)return r;const i=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(r,i,o)/2}}N(ja,"id","scatter"),N(ja,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),N(ja,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var UC=Object.freeze({__proto__:null,BarController:Fa,BubbleController:$a,DoughnutController:Ns,LineController:Ba,PieController:Fu,PolarAreaController:Zi,RadarController:Ua,ScatterController:ja});function Is(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class fh{constructor(t){N(this,"options");this.options=t||{}}static override(t){Object.assign(fh.prototype,t)}init(){}formats(){return Is()}parse(){return Is()}format(){return Is()}add(){return Is()}diff(){return Is()}startOf(){return Is()}endOf(){return Is()}}var zv={_date:fh};function jC(n,t,e,s){const{controller:r,data:i,_sorted:o}=n,a=r._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&i.length){const l=a._reversePixels?dS:Rn;if(s){if(r._sharedOptions){const d=i[0],h=typeof d.getRange=="function"&&d.getRange(t);if(h){const f=l(i,t,e-h),m=l(i,t,e+h);return{lo:f.lo,hi:m.hi}}}}else{const d=l(i,t,e);if(c){const{vScale:h}=r._cachedMeta,{_parsed:f}=n,m=f.slice(0,d.lo+1).reverse().findIndex(v=>!ct(v[h.axis]));d.lo-=Math.max(0,m);const g=f.slice(d.hi).findIndex(v=>!ct(v[h.axis]));d.hi+=Math.max(0,g)}return d}}return{lo:0,hi:i.length-1}}function rl(n,t,e,s,r){const i=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,c=i.length;a<c;++a){const{index:l,data:d}=i[a],{lo:h,hi:f}=jC(i[a],t,o,r);for(let m=h;m<=f;++m){const g=d[m];g.skip||s(g,l,m)}}}function zC(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(s,r){const i=t?Math.abs(s.x-r.x):0,o=e?Math.abs(s.y-r.y):0;return Math.sqrt(Math.pow(i,2)+Math.pow(o,2))}}function Yl(n,t,e,s,r){const i=[];return!r&&!n.isPointInArea(t)||rl(n,e,t,function(a,c,l){!r&&!Pn(a,n.chartArea,0)||a.inRange(t.x,t.y,s)&&i.push({element:a,datasetIndex:c,index:l})},!0),i}function HC(n,t,e,s){let r=[];function i(o,a,c){const{startAngle:l,endAngle:d}=o.getProps(["startAngle","endAngle"],s),{angle:h}=yv(o,{x:t.x,y:t.y});go(h,l,d)&&r.push({element:o,datasetIndex:a,index:c})}return rl(n,e,t,i),r}function qC(n,t,e,s,r,i){let o=[];const a=zC(e);let c=Number.POSITIVE_INFINITY;function l(d,h,f){const m=d.inRange(t.x,t.y,r);if(s&&!m)return;const g=d.getCenterPoint(r);if(!(!!i||n.isPointInArea(g))&&!m)return;const y=a(t,g);y<c?(o=[{element:d,datasetIndex:h,index:f}],c=y):y===c&&o.push({element:d,datasetIndex:h,index:f})}return rl(n,e,t,l),o}function Kl(n,t,e,s,r,i){return!i&&!n.isPointInArea(t)?[]:e==="r"&&!s?HC(n,t,e,r):qC(n,t,e,s,r,i)}function bm(n,t,e,s,r){const i=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return rl(n,e,t,(c,l,d)=>{c[o]&&c[o](t[e],r)&&(i.push({element:c,datasetIndex:l,index:d}),a=a||c.inRange(t.x,t.y,r))}),s&&!a?[]:i}var WC={modes:{index(n,t,e,s){const r=Rs(t,n),i=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Yl(n,r,i,s,o):Kl(n,r,i,!1,s,o),c=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(l=>{const d=a[0].index,h=l.data[d];h&&!h.skip&&c.push({element:h,datasetIndex:l.index,index:d})}),c):[]},dataset(n,t,e,s){const r=Rs(t,n),i=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Yl(n,r,i,s,o):Kl(n,r,i,!1,s,o);if(a.length>0){const c=a[0].datasetIndex,l=n.getDatasetMeta(c).data;a=[];for(let d=0;d<l.length;++d)a.push({element:l[d],datasetIndex:c,index:d})}return a},point(n,t,e,s){const r=Rs(t,n),i=e.axis||"xy",o=e.includeInvisible||!1;return Yl(n,r,i,s,o)},nearest(n,t,e,s){const r=Rs(t,n),i=e.axis||"xy",o=e.includeInvisible||!1;return Kl(n,r,i,e.intersect,s,o)},x(n,t,e,s){const r=Rs(t,n);return bm(n,r,"x",e.intersect,s)},y(n,t,e,s){const r=Rs(t,n);return bm(n,r,"y",e.intersect,s)}}};const Hv=["left","top","right","bottom"];function xi(n,t){return n.filter(e=>e.pos===t)}function xm(n,t){return n.filter(e=>Hv.indexOf(e.pos)===-1&&e.box.axis===t)}function wi(n,t){return n.sort((e,s)=>{const r=t?s:e,i=t?e:s;return r.weight===i.weight?r.index-i.index:r.weight-i.weight})}function GC(n){const t=[];let e,s,r,i,o,a;for(e=0,s=(n||[]).length;e<s;++e)r=n[e],{position:i,options:{stack:o,stackWeight:a=1}}=r,t.push({index:e,box:r,pos:i,horizontal:r.isHorizontal(),weight:r.weight,stack:o&&i+o,stackWeight:a});return t}function YC(n){const t={};for(const e of n){const{stack:s,pos:r,stackWeight:i}=e;if(!s||!Hv.includes(r))continue;const o=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=i}return t}function KC(n,t){const e=YC(n),{vBoxMaxWidth:s,hBoxMaxHeight:r}=t;let i,o,a;for(i=0,o=n.length;i<o;++i){a=n[i];const{fullSize:c}=a.box,l=e[a.stack],d=l&&a.stackWeight/l.weight;a.horizontal?(a.width=d?d*s:c&&t.availableWidth,a.height=r):(a.width=s,a.height=d?d*r:c&&t.availableHeight)}return e}function QC(n){const t=GC(n),e=wi(t.filter(l=>l.box.fullSize),!0),s=wi(xi(t,"left"),!0),r=wi(xi(t,"right")),i=wi(xi(t,"top"),!0),o=wi(xi(t,"bottom")),a=xm(t,"x"),c=xm(t,"y");return{fullSize:e,leftAndTop:s.concat(i),rightAndBottom:r.concat(c).concat(o).concat(a),chartArea:xi(t,"chartArea"),vertical:s.concat(r).concat(c),horizontal:i.concat(o).concat(a)}}function wm(n,t,e,s){return Math.max(n[e],t[e])+Math.max(n[s],t[s])}function qv(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function XC(n,t,e,s){const{pos:r,box:i}=e,o=n.maxPadding;if(!dt(r)){e.size&&(n[r]-=e.size);const h=s[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?i.height:i.width),e.size=h.size/h.count,n[r]+=e.size}i.getPadding&&qv(o,i.getPadding());const a=Math.max(0,t.outerWidth-wm(o,n,"left","right")),c=Math.max(0,t.outerHeight-wm(o,n,"top","bottom")),l=a!==n.w,d=c!==n.h;return n.w=a,n.h=c,e.horizontal?{same:l,other:d}:{same:d,other:l}}function JC(n){const t=n.maxPadding;function e(s){const r=Math.max(t[s]-n[s],0);return n[s]+=r,r}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function ZC(n,t){const e=t.maxPadding;function s(r){const i={left:0,top:0,right:0,bottom:0};return r.forEach(o=>{i[o]=Math.max(t[o],e[o])}),i}return s(n?["left","right"]:["top","bottom"])}function Fi(n,t,e,s){const r=[];let i,o,a,c,l,d;for(i=0,o=n.length,l=0;i<o;++i){a=n[i],c=a.box,c.update(a.width||t.w,a.height||t.h,ZC(a.horizontal,t));const{same:h,other:f}=XC(t,e,a,s);l|=h&&r.length,d=d||f,c.fullSize||r.push(a)}return l&&Fi(r,t,e,s)||d}function xa(n,t,e,s,r){n.top=e,n.left=t,n.right=t+s,n.bottom=e+r,n.width=s,n.height=r}function Em(n,t,e,s){const r=e.padding;let{x:i,y:o}=t;for(const a of n){const c=a.box,l=s[a.stack]||{placed:0,weight:1},d=a.stackWeight/l.weight||1;if(a.horizontal){const h=t.w*d,f=l.size||c.height;mo(l.start)&&(o=l.start),c.fullSize?xa(c,r.left,o,e.outerWidth-r.right-r.left,f):xa(c,t.left+l.placed,o,h,f),l.start=o,l.placed+=h,o=c.bottom}else{const h=t.h*d,f=l.size||c.width;mo(l.start)&&(i=l.start),c.fullSize?xa(c,i,r.top,f,e.outerHeight-r.bottom-r.top):xa(c,i,t.top+l.placed,f,h),l.start=i,l.placed+=h,i=c.right}}t.x=i,t.y=o}var Ee={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,s){if(!n)return;const r=Ae(n.options.layout.padding),i=Math.max(t-r.width,0),o=Math.max(e-r.height,0),a=QC(n.boxes),c=a.vertical,l=a.horizontal;It(n.boxes,v=>{typeof v.beforeLayout=="function"&&v.beforeLayout()});const d=c.reduce((v,y)=>y.box.options&&y.box.options.display===!1?v:v+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:r,availableWidth:i,availableHeight:o,vBoxMaxWidth:i/2/d,hBoxMaxHeight:o/2}),f=Object.assign({},r);qv(f,Ae(s));const m=Object.assign({maxPadding:f,w:i,h:o,x:r.left,y:r.top},r),g=KC(c.concat(l),h);Fi(a.fullSize,m,h,g),Fi(c,m,h,g),Fi(l,m,h,g)&&Fi(c,m,h,g),JC(m),Em(a.leftAndTop,m,h,g),m.x+=m.w,m.y+=m.h,Em(a.rightAndBottom,m,h,g),n.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},It(a.chartArea,v=>{const y=v.box;Object.assign(y,n.chartArea),y.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class Wv{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,r){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,r?Math.floor(e/r):s)}}isAttached(t){return!0}updateConfig(t){}}class tR extends Wv{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const za="$chartjs",eR={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Tm=n=>n===null||n==="";function nR(n,t){const e=n.style,s=n.getAttribute("height"),r=n.getAttribute("width");if(n[za]={initial:{height:s,width:r,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Tm(r)){const i=am(n,"width");i!==void 0&&(n.width=i)}if(Tm(s))if(n.style.height==="")n.height=n.width/(t||2);else{const i=am(n,"height");i!==void 0&&(n.height=i)}return n}const Gv=rC?{passive:!0}:!1;function sR(n,t,e){n&&n.addEventListener(t,e,Gv)}function rR(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,Gv)}function iR(n,t){const e=eR[n.type]||n.type,{x:s,y:r}=Rs(n,t);return{type:e,chart:t,native:n,x:s!==void 0?s:null,y:r!==void 0?r:null}}function yc(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function oR(n,t,e){const s=n.canvas,r=new MutationObserver(i=>{let o=!1;for(const a of i)o=o||yc(a.addedNodes,s),o=o&&!yc(a.removedNodes,s);o&&e()});return r.observe(document,{childList:!0,subtree:!0}),r}function aR(n,t,e){const s=n.canvas,r=new MutationObserver(i=>{let o=!1;for(const a of i)o=o||yc(a.removedNodes,s),o=o&&!yc(a.addedNodes,s);o&&e()});return r.observe(document,{childList:!0,subtree:!0}),r}const yo=new Map;let Im=0;function Yv(){const n=window.devicePixelRatio;n!==Im&&(Im=n,yo.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function cR(n,t){yo.size||window.addEventListener("resize",Yv),yo.set(n,t)}function lR(n){yo.delete(n),yo.size||window.removeEventListener("resize",Yv)}function uR(n,t,e){const s=n.canvas,r=s&&hh(s);if(!r)return;const i=wv((a,c)=>{const l=r.clientWidth;e(a,c),l<r.clientWidth&&e()},window),o=new ResizeObserver(a=>{const c=a[0],l=c.contentRect.width,d=c.contentRect.height;l===0&&d===0||i(l,d)});return o.observe(r),cR(n,i),o}function Ql(n,t,e){e&&e.disconnect(),t==="resize"&&lR(n)}function dR(n,t,e){const s=n.canvas,r=wv(i=>{n.ctx!==null&&e(iR(i,n))},n);return sR(s,t,r),r}class hR extends Wv{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(nR(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[za])return!1;const s=e[za].initial;["height","width"].forEach(i=>{const o=s[i];ct(o)?e.removeAttribute(i):e.setAttribute(i,o)});const r=s.style||{};return Object.keys(r).forEach(i=>{e.style[i]=r[i]}),e.width=e.width,delete e[za],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const r=t.$proxies||(t.$proxies={}),o={attach:oR,detach:aR,resize:uR}[e]||dR;r[e]=o(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),r=s[e];if(!r)return;({attach:Ql,detach:Ql,resize:Ql}[e]||rR)(t,e,r),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,r){return sC(t,e,s,r)}isAttached(t){const e=t&&hh(t);return!!(e&&e.isConnected)}}function fR(n){return!dh()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?tR:hR}class Ze{constructor(){N(this,"x");N(this,"y");N(this,"active",!1);N(this,"options");N(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return jr(this.x)&&jr(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const r={};return t.forEach(i=>{r[i]=s[i]&&s[i].active()?s[i]._to:this[i]}),r}}N(Ze,"defaults",{}),N(Ze,"defaultRoutes");function pR(n,t){const e=n.options.ticks,s=mR(n),r=Math.min(e.maxTicksLimit||s,s),i=e.major.enabled?_R(t):[],o=i.length,a=i[0],c=i[o-1],l=[];if(o>r)return yR(t,l,i,o/r),l;const d=gR(i,t,r);if(o>0){let h,f;const m=o>1?Math.round((c-a)/(o-1)):null;for(wa(t,l,d,ct(m)?0:a-m,a),h=0,f=o-1;h<f;h++)wa(t,l,d,i[h],i[h+1]);return wa(t,l,d,c,ct(m)?t.length:c+m),l}return wa(t,l,d),l}function mR(n){const t=n.options.offset,e=n._tickSize(),s=n._length/e+(t?0:1),r=n._maxLength/e;return Math.floor(Math.min(s,r))}function gR(n,t,e){const s=vR(n),r=t.length/e;if(!s)return Math.max(r,1);const i=oS(s);for(let o=0,a=i.length-1;o<a;o++){const c=i[o];if(c>r)return c}return Math.max(r,1)}function _R(n){const t=[];let e,s;for(e=0,s=n.length;e<s;e++)n[e].major&&t.push(e);return t}function yR(n,t,e,s){let r=0,i=e[0],o;for(s=Math.ceil(s),o=0;o<n.length;o++)o===i&&(t.push(n[o]),r++,i=e[r*s])}function wa(n,t,e,s,r){const i=rt(s,0),o=Math.min(rt(r,n.length),n.length);let a=0,c,l,d;for(e=Math.ceil(e),r&&(c=r-s,e=c/Math.floor(c/e)),d=i;d<0;)a++,d=Math.round(i+a*e);for(l=Math.max(i,0);l<o;l++)l===d&&(t.push(n[l]),a++,d=Math.round(i+a*e))}function vR(n){const t=n.length;let e,s;if(t<2)return!1;for(s=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==s)return!1;return s}const bR=n=>n==="left"?"right":n==="right"?"left":n,Am=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,km=(n,t)=>Math.min(t||n,n);function Sm(n,t){const e=[],s=n.length/t,r=n.length;let i=0;for(;i<r;i+=s)e.push(n[Math.floor(i)]);return e}function xR(n,t,e){const s=n.ticks.length,r=Math.min(t,s-1),i=n._startPixel,o=n._endPixel,a=1e-6;let c=n.getPixelForTick(r),l;if(!(e&&(s===1?l=Math.max(c-i,o-c):t===0?l=(n.getPixelForTick(1)-c)/2:l=(c-n.getPixelForTick(r-1))/2,c+=r<t?l:-l,c<i-a||c>o+a)))return c}function wR(n,t){It(n,e=>{const s=e.gc,r=s.length/2;let i;if(r>t){for(i=0;i<r;++i)delete e.data[s[i]];s.splice(0,r)}})}function Ei(n){return n.drawTicks?n.tickLength:0}function Cm(n,t){if(!n.display)return 0;const e=se(n.font,t),s=Ae(n.padding);return(Vt(n.text)?n.text.length:1)*e.lineHeight+s.height}function ER(n,t){return ys(n,{scale:t,type:"scale"})}function TR(n,t,e){return ys(n,{tick:e,index:t,type:"tick"})}function IR(n,t,e){let s=ih(n);return(e&&t!=="right"||!e&&t==="right")&&(s=bR(s)),s}function AR(n,t,e,s){const{top:r,left:i,bottom:o,right:a,chart:c}=n,{chartArea:l,scales:d}=c;let h=0,f,m,g;const v=o-r,y=a-i;if(n.isHorizontal()){if(m=ve(s,i,a),dt(e)){const E=Object.keys(e)[0],A=e[E];g=d[E].getPixelForValue(A)+v-t}else e==="center"?g=(l.bottom+l.top)/2+v-t:g=Am(n,e,t);f=a-i}else{if(dt(e)){const E=Object.keys(e)[0],A=e[E];m=d[E].getPixelForValue(A)-y+t}else e==="center"?m=(l.left+l.right)/2-y+t:m=Am(n,e,t);g=ve(s,o,r),h=e==="left"?-Qt:Qt}return{titleX:m,titleY:g,maxWidth:f,rotation:h}}class ir extends Ze{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:r}=this;return t=Le(t,Number.POSITIVE_INFINITY),e=Le(e,Number.NEGATIVE_INFINITY),s=Le(s,Number.POSITIVE_INFINITY),r=Le(r,Number.NEGATIVE_INFINITY),{min:Le(t,s),max:Le(e,r),minDefined:Ht(t),maxDefined:Ht(e)}}getMinMax(t){let{min:e,max:s,minDefined:r,maxDefined:i}=this.getUserBounds(),o;if(r&&i)return{min:e,max:s};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,t),r||(e=Math.min(e,o.min)),i||(s=Math.max(s,o.max));return e=i&&e>s?s:e,s=r&&e>s?e:s,{min:Le(e,Le(s,e)),max:Le(s,Le(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Pt(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:r,grace:i,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=NS(this,i,r),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?Sm(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=pR(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Pt(this.options.afterUpdate,[this])}beforeSetDimensions(){Pt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Pt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Pt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Pt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,r,i;for(s=0,r=t.length;s<r;s++)i=t[s],i.label=Pt(e.callback,[i.value,s,t],this)}afterTickToLabelConversion(){Pt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Pt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=km(this.ticks.length,t.ticks.maxTicksLimit),r=e.minRotation||0,i=e.maxRotation;let o=r,a,c,l;if(!this._isVisible()||!e.display||r>=i||s<=1||!this.isHorizontal()){this.labelRotation=r;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,m=ce(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/s:m/(s-1),h+6>a&&(a=m/(s-(t.offset?.5:1)),c=this.maxHeight-Ei(t.grid)-e.padding-Cm(t.title,this.chart.options.font),l=Math.sqrt(h*h+f*f),o=sh(Math.min(Math.asin(ce((d.highest.height+6)/a,-1,1)),Math.asin(ce(c/l,-1,1))-Math.asin(ce(f/l,-1,1)))),o=Math.max(r,Math.min(i,o))),this.labelRotation=o}afterCalculateLabelRotation(){Pt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Pt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:r,grid:i}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=Cm(r,e.options.font);if(a?(t.width=this.maxWidth,t.height=Ei(i)+c):(t.height=this.maxHeight,t.width=Ei(i)+c),s.display&&this.ticks.length){const{first:l,last:d,widest:h,highest:f}=this._getLabelSizes(),m=s.padding*2,g=Ke(this.labelRotation),v=Math.cos(g),y=Math.sin(g);if(a){const E=s.mirror?0:y*h.width+v*f.height;t.height=Math.min(this.maxHeight,t.height+E+m)}else{const E=s.mirror?0:v*h.width+y*f.height;t.width=Math.min(this.maxWidth,t.width+E+m)}this._calculatePadding(l,d,y,v)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,r){const{ticks:{align:i,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,m=0;c?l?(f=r*t.width,m=s*e.height):(f=s*t.height,m=r*e.width):i==="start"?m=e.width:i==="end"?f=t.width:i!=="inner"&&(f=t.width/2,m=e.width/2),this.paddingLeft=Math.max((f-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((m-h+o)*this.width/(this.width-h),0)}else{let d=e.height/2,h=t.height/2;i==="start"?(d=0,h=t.height):i==="end"&&(d=e.height,h=0),this.paddingTop=d+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Pt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)ct(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=Sm(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:r,_longestTextCache:i}=this,o=[],a=[],c=Math.floor(e/km(e,s));let l=0,d=0,h,f,m,g,v,y,E,A,C,D,R;for(h=0;h<e;h+=c){if(g=t[h].label,v=this._resolveTickFontOptions(h),r.font=y=v.string,E=i[y]=i[y]||{data:{},gc:[]},A=v.lineHeight,C=D=0,!ct(g)&&!Vt(g))C=gc(r,E.data,E.gc,C,g),D=A;else if(Vt(g))for(f=0,m=g.length;f<m;++f)R=g[f],!ct(R)&&!Vt(R)&&(C=gc(r,E.data,E.gc,C,R),D+=A);o.push(C),a.push(D),l=Math.max(C,l),d=Math.max(D,d)}wR(i,e);const M=o.indexOf(l),T=a.indexOf(d),b=x=>({width:o[x]||0,height:a[x]||0});return{first:b(0),last:b(e-1),widest:b(M),highest:b(T),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return uS(this._alignToPixels?Ts(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=TR(this.getContext(),t,s))}return this.$context||(this.$context=ER(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Ke(this.labelRotation),s=Math.abs(Math.cos(e)),r=Math.abs(Math.sin(e)),i=this._getLabelSizes(),o=t.autoSkipPadding||0,a=i?i.widest.width+o:0,c=i?i.highest.height+o:0;return this.isHorizontal()?c*s>a*r?a/s:c/r:c*r<a*s?c/s:a/r}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,r=this.options,{grid:i,position:o,border:a}=r,c=i.offset,l=this.isHorizontal(),h=this.ticks.length+(c?1:0),f=Ei(i),m=[],g=a.setContext(this.getContext()),v=g.display?g.width:0,y=v/2,E=function(B){return Ts(s,B,v)};let A,C,D,R,M,T,b,x,I,S,P,k;if(o==="top")A=E(this.bottom),T=this.bottom-f,x=A-y,S=E(t.top)+y,k=t.bottom;else if(o==="bottom")A=E(this.top),S=t.top,k=E(t.bottom)-y,T=A+y,x=this.top+f;else if(o==="left")A=E(this.right),M=this.right-f,b=A-y,I=E(t.left)+y,P=t.right;else if(o==="right")A=E(this.left),I=t.left,P=E(t.right)-y,M=A+y,b=this.left+f;else if(e==="x"){if(o==="center")A=E((t.top+t.bottom)/2+.5);else if(dt(o)){const B=Object.keys(o)[0],V=o[B];A=E(this.chart.scales[B].getPixelForValue(V))}S=t.top,k=t.bottom,T=A+y,x=T+f}else if(e==="y"){if(o==="center")A=E((t.left+t.right)/2);else if(dt(o)){const B=Object.keys(o)[0],V=o[B];A=E(this.chart.scales[B].getPixelForValue(V))}M=A-y,b=M-f,I=t.left,P=t.right}const X=rt(r.ticks.maxTicksLimit,h),j=Math.max(1,Math.ceil(h/X));for(C=0;C<h;C+=j){const B=this.getContext(C),V=i.setContext(B),q=a.setContext(B),W=V.lineWidth,tt=V.color,at=q.dash||[],ht=q.dashOffset,K=V.tickWidth,wt=V.tickColor,St=V.tickBorderDash||[],ue=V.tickBorderDashOffset;D=xR(this,C,c),D!==void 0&&(R=Ts(s,D,W),l?M=b=I=P=R:T=x=S=k=R,m.push({tx1:M,ty1:T,tx2:b,ty2:x,x1:I,y1:S,x2:P,y2:k,width:W,color:tt,borderDash:at,borderDashOffset:ht,tickWidth:K,tickColor:wt,tickBorderDash:St,tickBorderDashOffset:ue}))}return this._ticksLength=h,this._borderValue=A,m}_computeLabelItems(t){const e=this.axis,s=this.options,{position:r,ticks:i}=s,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:d,mirror:h}=i,f=Ei(s.grid),m=f+d,g=h?-d:m,v=-Ke(this.labelRotation),y=[];let E,A,C,D,R,M,T,b,x,I,S,P,k="middle";if(r==="top")M=this.bottom-g,T=this._getXAxisLabelAlignment();else if(r==="bottom")M=this.top+g,T=this._getXAxisLabelAlignment();else if(r==="left"){const j=this._getYAxisLabelAlignment(f);T=j.textAlign,R=j.x}else if(r==="right"){const j=this._getYAxisLabelAlignment(f);T=j.textAlign,R=j.x}else if(e==="x"){if(r==="center")M=(t.top+t.bottom)/2+m;else if(dt(r)){const j=Object.keys(r)[0],B=r[j];M=this.chart.scales[j].getPixelForValue(B)+m}T=this._getXAxisLabelAlignment()}else if(e==="y"){if(r==="center")R=(t.left+t.right)/2-m;else if(dt(r)){const j=Object.keys(r)[0],B=r[j];R=this.chart.scales[j].getPixelForValue(B)}T=this._getYAxisLabelAlignment(f).textAlign}e==="y"&&(c==="start"?k="top":c==="end"&&(k="bottom"));const X=this._getLabelSizes();for(E=0,A=a.length;E<A;++E){C=a[E],D=C.label;const j=i.setContext(this.getContext(E));b=this.getPixelForTick(E)+i.labelOffset,x=this._resolveTickFontOptions(E),I=x.lineHeight,S=Vt(D)?D.length:1;const B=S/2,V=j.color,q=j.textStrokeColor,W=j.textStrokeWidth;let tt=T;o?(R=b,T==="inner"&&(E===A-1?tt=this.options.reverse?"left":"right":E===0?tt=this.options.reverse?"right":"left":tt="center"),r==="top"?l==="near"||v!==0?P=-S*I+I/2:l==="center"?P=-X.highest.height/2-B*I+I:P=-X.highest.height+I/2:l==="near"||v!==0?P=I/2:l==="center"?P=X.highest.height/2-B*I:P=X.highest.height-S*I,h&&(P*=-1),v!==0&&!j.showLabelBackdrop&&(R+=I/2*Math.sin(v))):(M=b,P=(1-S)*I/2);let at;if(j.showLabelBackdrop){const ht=Ae(j.backdropPadding),K=X.heights[E],wt=X.widths[E];let St=P-ht.top,ue=0-ht.left;switch(k){case"middle":St-=K/2;break;case"bottom":St-=K;break}switch(T){case"center":ue-=wt/2;break;case"right":ue-=wt;break;case"inner":E===A-1?ue-=wt:E>0&&(ue-=wt/2);break}at={left:ue,top:St,width:wt+ht.width,height:K+ht.height,color:j.backdropColor}}y.push({label:D,font:x,textOffset:P,options:{rotation:v,color:V,strokeColor:q,strokeWidth:W,textAlign:tt,textBaseline:k,translation:[R,M],backdrop:at}})}return y}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Ke(this.labelRotation))return t==="top"?"left":"right";let r="center";return e.align==="start"?r="left":e.align==="end"?r="right":e.align==="inner"&&(r="inner"),r}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:r,padding:i}}=this.options,o=this._getLabelSizes(),a=t+i,c=o.widest.width;let l,d;return e==="left"?r?(d=this.right+i,s==="near"?l="left":s==="center"?(l="center",d+=c/2):(l="right",d+=c)):(d=this.right-a,s==="near"?l="right":s==="center"?(l="center",d-=c/2):(l="left",d=this.left)):e==="right"?r?(d=this.left+i,s==="near"?l="right":s==="center"?(l="center",d-=c/2):(l="left",d-=c)):(d=this.left+a,s==="near"?l="left":s==="center"?(l="center",d+=c/2):(l="right",d=this.right)):l="right",{textAlign:l,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:r,width:i,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,r,i,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const r=this.ticks.findIndex(i=>i.value===t);return r>=0?e.setContext(this.getContext(r)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,r=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let i,o;const a=(c,l,d)=>{!d.width||!d.color||(s.save(),s.lineWidth=d.width,s.strokeStyle=d.color,s.setLineDash(d.borderDash||[]),s.lineDashOffset=d.borderDashOffset,s.beginPath(),s.moveTo(c.x,c.y),s.lineTo(l.x,l.y),s.stroke(),s.restore())};if(e.display)for(i=0,o=r.length;i<o;++i){const c=r[i];e.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:r}}=this,i=s.setContext(this.getContext()),o=s.display?i.width:0;if(!o)return;const a=r.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,d,h,f;this.isHorizontal()?(l=Ts(t,this.left,o)-o/2,d=Ts(t,this.right,a)+a/2,h=f=c):(h=Ts(t,this.top,o)-o/2,f=Ts(t,this.bottom,a)+a/2,l=d=c),e.save(),e.lineWidth=i.width,e.strokeStyle=i.color,e.beginPath(),e.moveTo(l,h),e.lineTo(d,f),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,r=this._computeLabelArea();r&&el(s,r);const i=this.getLabelItems(t);for(const o of i){const a=o.options,c=o.font,l=o.label,d=o.textOffset;Zs(s,l,0,d,c,a)}r&&nl(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:r}}=this;if(!s.display)return;const i=se(s.font),o=Ae(s.padding),a=s.align;let c=i.lineHeight/2;e==="bottom"||e==="center"||dt(e)?(c+=o.bottom,Vt(s.text)&&(c+=i.lineHeight*(s.text.length-1))):c+=o.top;const{titleX:l,titleY:d,maxWidth:h,rotation:f}=AR(this,c,e,a);Zs(t,s.text,0,0,i,{color:s.color,maxWidth:h,rotation:f,textAlign:IR(a,e,r),textBaseline:"middle",translation:[l,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=rt(t.grid&&t.grid.z,-1),r=rt(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==ir.prototype.draw?[{z:e,draw:i=>{this.draw(i)}}]:[{z:s,draw:i=>{this.drawBackground(),this.drawGrid(i),this.drawTitle()}},{z:r,draw:()=>{this.drawBorder()}},{z:e,draw:i=>{this.drawLabels(i)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",r=[];let i,o;for(i=0,o=e.length;i<o;++i){const a=e[i];a[s]===this.id&&(!t||a.type===t)&&r.push(a)}return r}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return se(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Ea{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;CR(e)&&(s=this.register(e));const r=this.items,i=t.id,o=this.scope+"."+i;if(!i)throw new Error("class does not have id: "+t);return i in r||(r[i]=t,kR(t,o,s),this.override&&$t.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,r=this.scope;s in e&&delete e[s],r&&s in $t[r]&&(delete $t[r][s],this.override&&delete Js[s])}}function kR(n,t,e){const s=po(Object.create(null),[e?$t.get(e):{},$t.get(t),n.defaults]);$t.set(t,s),n.defaultRoutes&&SR(t,n.defaultRoutes),n.descriptors&&$t.describe(t,n.descriptors)}function SR(n,t){Object.keys(t).forEach(e=>{const s=e.split("."),r=s.pop(),i=[n].concat(s).join("."),o=t[e].split("."),a=o.pop(),c=o.join(".");$t.route(i,r,c,a)})}function CR(n){return"id"in n&&"defaults"in n}class RR{constructor(){this.controllers=new Ea(Qe,"datasets",!0),this.elements=new Ea(Ze,"elements"),this.plugins=new Ea(Object,"plugins"),this.scales=new Ea(ir,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(r=>{const i=s||this._getRegistryForType(r);s||i.isForType(r)||i===this.plugins&&r.id?this._exec(t,i,r):It(r,o=>{const a=s||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,s){const r=nh(t);Pt(s["before"+r],[],s),e[t](s),Pt(s["after"+r],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const r=e.get(t);if(r===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return r}}var rn=new RR;class PR{constructor(){this._init=void 0}notify(t,e,s,r){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const i=r?this._descriptors(t).filter(r):this._descriptors(t),o=this._notify(i,t,e,s);return e==="afterDestroy"&&(this._notify(i,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,s,r){r=r||{};for(const i of t){const o=i.plugin,a=o[s],c=[e,r,i.options];if(Pt(a,c,o)===!1&&r.cancelable)return!1}return!0}invalidate(){ct(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,r=rt(s.options&&s.options.plugins,{}),i=DR(s);return r===!1&&!e?[]:OR(t,i,r,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,r=(i,o)=>i.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(r(e,s),t,"stop"),this._notify(r(s,e),t,"start")}}function DR(n){const t={},e=[],s=Object.keys(rn.plugins.items);for(let i=0;i<s.length;i++)e.push(rn.getPlugin(s[i]));const r=n.plugins||[];for(let i=0;i<r.length;i++){const o=r[i];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function MR(n,t){return!t&&n===!1?null:n===!0?{}:n}function OR(n,{plugins:t,localIds:e},s,r){const i=[],o=n.getContext();for(const a of t){const c=a.id,l=MR(s[c],r);l!==null&&i.push({plugin:a,options:NR(n.config,{plugin:a,local:e[c]},l,o)})}return i}function NR(n,{plugin:t,local:e},s,r){const i=n.pluginScopeKeys(t),o=n.getOptionScopes(s,i);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function $u(n,t){const e=$t.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function LR(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function VR(n,t){return n===t?"_index_":"_value_"}function Rm(n){if(n==="x"||n==="y"||n==="r")return n}function FR(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Bu(n,...t){if(Rm(n))return n;for(const e of t){const s=e.axis||FR(e.position)||n.length>1&&Rm(n[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function Pm(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function $R(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===n||s.yAxisID===n);if(e.length)return Pm(n,"x",e[0])||Pm(n,"y",e[0])}return{}}function BR(n,t){const e=Js[n.type]||{scales:{}},s=t.scales||{},r=$u(n.type,t),i=Object.create(null);return Object.keys(s).forEach(o=>{const a=s[o];if(!dt(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=Bu(o,a,$R(o,n),$t.scales[a.type]),l=VR(c,r),d=e.scales||{};i[o]=Ki(Object.create(null),[{axis:c},a,d[c],d[l]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,c=o.indexAxis||$u(a,t),d=(Js[a]||{}).scales||{};Object.keys(d).forEach(h=>{const f=LR(h,c),m=o[f+"AxisID"]||f;i[m]=i[m]||Object.create(null),Ki(i[m],[{axis:f},s[m],d[h]])})}),Object.keys(i).forEach(o=>{const a=i[o];Ki(a,[$t.scales[a.type],$t.scale])}),i}function Kv(n){const t=n.options||(n.options={});t.plugins=rt(t.plugins,{}),t.scales=BR(n,t)}function Qv(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function UR(n){return n=n||{},n.data=Qv(n.data),Kv(n),n}const Dm=new Map,Xv=new Set;function Ta(n,t){let e=Dm.get(n);return e||(e=t(),Dm.set(n,e),Xv.add(e)),e}const Ti=(n,t,e)=>{const s=fs(t,e);s!==void 0&&n.add(s)};class jR{constructor(t){this._config=UR(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Qv(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Kv(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Ta(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return Ta(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return Ta(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return Ta(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let r=s.get(t);return(!r||e)&&(r=new Map,s.set(t,r)),r}getOptionScopes(t,e,s){const{options:r,type:i}=this,o=this._cachedScopes(t,s),a=o.get(e);if(a)return a;const c=new Set;e.forEach(d=>{t&&(c.add(t),d.forEach(h=>Ti(c,t,h))),d.forEach(h=>Ti(c,r,h)),d.forEach(h=>Ti(c,Js[i]||{},h)),d.forEach(h=>Ti(c,$t,h)),d.forEach(h=>Ti(c,Lu,h))});const l=Array.from(c);return l.length===0&&l.push(Object.create(null)),Xv.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,Js[e]||{},$t.datasets[e]||{},{type:e},$t,Lu]}resolveNamedOptions(t,e,s,r=[""]){const i={$shared:!0},{resolver:o,subPrefixes:a}=Mm(this._resolverCache,t,r);let c=o;if(HR(o,e)){i.$shared=!1,s=ps(s)?s():s;const l=this.createResolver(t,s,a);c=zr(o,s,l)}for(const l of e)i[l]=c[l];return i}createResolver(t,e,s=[""],r){const{resolver:i}=Mm(this._resolverCache,t,s);return dt(e)?zr(i,e,void 0,r):i}}function Mm(n,t,e){let s=n.get(t);s||(s=new Map,n.set(t,s));const r=e.join();let i=s.get(r);return i||(i={resolver:ch(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},s.set(r,i)),i}const zR=n=>dt(n)&&Object.getOwnPropertyNames(n).some(t=>ps(n[t]));function HR(n,t){const{isScriptable:e,isIndexable:s}=Sv(n);for(const r of t){const i=e(r),o=s(r),a=(o||i)&&n[r];if(i&&(ps(a)||zR(a))||o&&Vt(a))return!0}return!1}var qR="4.5.1";const WR=["top","bottom","left","right","chartArea"];function Om(n,t){return n==="top"||n==="bottom"||WR.indexOf(n)===-1&&t==="x"}function Nm(n,t){return function(e,s){return e[n]===s[n]?e[t]-s[t]:e[n]-s[n]}}function Lm(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),Pt(e&&e.onComplete,[n],t)}function GR(n){const t=n.chart,e=t.options.animation;Pt(e&&e.onProgress,[n],t)}function Jv(n){return dh()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const Ha={},Vm=n=>{const t=Jv(n);return Object.values(Ha).filter(e=>e.canvas===t).pop()};function YR(n,t,e){const s=Object.keys(n);for(const r of s){const i=+r;if(i>=t){const o=n[r];delete n[r],(e>0||i>t)&&(n[i+e]=o)}}}function KR(n,t,e,s){return!e||n.type==="mouseout"?null:s?t:n}class mt{static register(...t){rn.add(...t),Fm()}static unregister(...t){rn.remove(...t),Fm()}constructor(t,e){const s=this.config=new jR(e),r=Jv(t),i=Vm(r);if(i)throw new Error("Canvas is already in use. Chart with ID '"+i.id+"' must be destroyed before the canvas with ID '"+i.canvas.id+"' can be reused.");const o=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||fR(r)),this.platform.updateConfig(s);const a=this.platform.acquireContext(r,o.aspectRatio),c=a&&a.canvas,l=c&&c.height,d=c&&c.width;if(this.id=X1(),this.ctx=a,this.canvas=c,this.width=d,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new PR,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=pS(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],Ha[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}xn.listen(this,"complete",Lm),xn.listen(this,"progress",GR),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:r,_aspectRatio:i}=this;return ct(t)?e&&i?i:r?s/r:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return rn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():om(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return sm(this.canvas,this.ctx),this}stop(){return xn.stop(this),this}resize(t,e){xn.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,r=this.canvas,i=s.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(r,t,e,i),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,om(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Pt(s.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};It(e,(s,r)=>{s.id=r})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,r=Object.keys(s).reduce((o,a)=>(o[a]=!1,o),{});let i=[];e&&(i=i.concat(Object.keys(e).map(o=>{const a=e[o],c=Bu(o,a),l=c==="r",d=c==="x";return{options:a,dposition:l?"chartArea":d?"bottom":"left",dtype:l?"radialLinear":d?"category":"linear"}}))),It(i,o=>{const a=o.options,c=a.id,l=Bu(c,a),d=rt(a.type,o.dtype);(a.position===void 0||Om(a.position,l)!==Om(o.dposition))&&(a.position=o.dposition),r[c]=!0;let h=null;if(c in s&&s[c].type===d)h=s[c];else{const f=rn.getScale(d);h=new f({id:c,type:d,ctx:this.ctx,chart:this}),s[h.id]=h}h.init(a,t)}),It(r,(o,a)=>{o||delete s[a]}),It(s,o=>{Ee.configure(this,o,o.options),Ee.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((r,i)=>r.index-i.index),s>e){for(let r=e;r<s;++r)this._destroyDatasetMeta(r);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(Nm("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,r)=>{e.filter(i=>i===s._dataset).length===0&&this._destroyDatasetMeta(r)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,r;for(this._removeUnreferencedMetasets(),s=0,r=e.length;s<r;s++){const i=e[s];let o=this.getDatasetMeta(s);const a=i.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(s),o=this.getDatasetMeta(s)),o.type=a,o.indexAxis=i.indexAxis||$u(a,this.options),o.order=i.order||0,o.index=s,o.label=""+i.label,o.visible=this.isDatasetVisible(s),o.controller)o.controller.updateIndex(s),o.controller.linkScales();else{const c=rn.getController(a),{datasetElementType:l,dataElementType:d}=$t.datasets[a];Object.assign(c,{dataElementType:rn.getElement(d),datasetElementType:l&&rn.getElement(l)}),o.controller=new c(this,s),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){It(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const i=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,d=this.data.datasets.length;l<d;l++){const{controller:h}=this.getDatasetMeta(l),f=!r&&i.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=s.layout.autoPadding?o:0,this._updateLayout(o),r||It(i,l=>{l.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Nm("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){It(this.scales,t=>{Ee.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Yp(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:r,count:i}of e){const o=s==="_removeElements"?-i:i;YR(t,r,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=i=>new Set(t.filter(o=>o[0]===i).map((o,a)=>a+","+o.splice(1).join(","))),r=s(0);for(let i=1;i<e;i++)if(!Yp(r,s(i)))return;return Array.from(r).map(i=>i.split(",")).map(i=>({method:i[1],start:+i[2],count:+i[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Ee.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],It(this.boxes,r=>{s&&r.position==="chartArea"||(r.configure&&r.configure(),this._layers.push(...r._layers()))},this),this._layers.forEach((r,i)=>{r._idx=i}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,ps(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),r={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",r)!==!1&&(s.controller._update(e),r.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",r))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(xn.has(this)?this.attached&&!xn.running(this)&&xn.start(this):(this.draw(),Lm({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:r}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,r)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let r,i;for(r=0,i=e.length;r<i;++r){const o=e[r];(!t||o.visible)&&s.push(o)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},r=$v(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(r&&el(e,r),t.controller.draw(),r&&nl(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return Pn(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,r){const i=WC.modes[e];return typeof i=="function"?i(this,t,s,r):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let r=s.filter(i=>i&&i._dataset===e).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(r)),r}getContext(){return this.$context||(this.$context=ys(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const r=s?"show":"hide",i=this.getDatasetMeta(t),o=i.controller._resolveAnimations(void 0,r);mo(e)?(i.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),o.update(i,{visible:s}),this.update(a=>a.datasetIndex===t?r:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),xn.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),sm(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Ha[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(i,o)=>{e.addEventListener(this,i,o),t[i]=o},r=(i,o,a)=>{i.offsetX=o,i.offsetY=a,this._eventHandler(i)};It(this.options.events,i=>s(i,r))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(c,l)=>{e.addEventListener(this,c,l),t[c]=l},r=(c,l)=>{t[c]&&(e.removeEventListener(this,c,l),delete t[c])},i=(c,l)=>{this.canvas&&this.resize(c,l)};let o;const a=()=>{r("attach",a),this.attached=!0,this.resize(),s("resize",i),s("detach",o)};o=()=>{this.attached=!1,r("resize",i),this._stop(),this._resize(0,0),s("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){It(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},It(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const r=s?"set":"remove";let i,o,a,c;for(e==="dataset"&&(i=this.getDatasetMeta(t[0].datasetIndex),i.controller["_"+r+"DatasetHoverStyle"]()),a=0,c=t.length;a<c;++a){o=t[a];const l=o&&this.getDatasetMeta(o.datasetIndex).controller;l&&l[r+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:i,index:o})=>{const a=this.getDatasetMeta(i);if(!a)throw new Error("No dataset found at index "+i);return{datasetIndex:i,element:a.data[o],index:o}});!fc(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const r=this.options.hover,i=(c,l)=>c.filter(d=>!l.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),o=i(e,t),a=s?t:i(t,e);o.length&&this.updateHoverStyle(o,r.mode,!1),a.length&&r.mode&&this.updateHoverStyle(a,r.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},r=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,r)===!1)return;const i=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,r),(i||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:r=[],options:i}=this,o=e,a=this._getActiveElements(t,r,s,o),c=sS(t),l=KR(t,this._lastEvent,s,c);s&&(this._lastEvent=null,Pt(i.onHover,[t,a,this],this),c&&Pt(i.onClick,[t,a,this],this));const d=!fc(a,r);return(d||e)&&(this._active=a,this._updateHoverStyles(a,r,e)),this._lastEvent=l,d}_getActiveElements(t,e,s,r){if(t.type==="mouseout")return[];if(!s)return e;const i=this.options.hover;return this.getElementsAtEventForMode(t,i.mode,i,r)}}N(mt,"defaults",$t),N(mt,"instances",Ha),N(mt,"overrides",Js),N(mt,"registry",rn),N(mt,"version",qR),N(mt,"getChart",Vm);function Fm(){return It(mt.instances,n=>n._plugins.invalidate())}function QR(n,t,e){const{startAngle:s,x:r,y:i,outerRadius:o,innerRadius:a,options:c}=t,{borderWidth:l,borderJoinStyle:d}=c,h=Math.min(l/o,xe(s-e));if(n.beginPath(),n.arc(r,i,o-l/2,s+h/2,e-h/2),a>0){const f=Math.min(l/a,xe(s-e));n.arc(r,i,a+l/2,e-f/2,s+f/2,!0)}else{const f=Math.min(l/2,o*xe(s-e));if(d==="round")n.arc(r,i,f,e-vt/2,s+vt/2,!0);else if(d==="bevel"){const m=2*f*f,g=-m*Math.cos(e+vt/2)+r,v=-m*Math.sin(e+vt/2)+i,y=m*Math.cos(s+vt/2)+r,E=m*Math.sin(s+vt/2)+i;n.lineTo(g,v),n.lineTo(y,E)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function XR(n,t,e){const{startAngle:s,pixelMargin:r,x:i,y:o,outerRadius:a,innerRadius:c}=t;let l=r/a;n.beginPath(),n.arc(i,o,a,s-l,e+l),c>r?(l=r/c,n.arc(i,o,c,e+l,s-l,!0)):n.arc(i,o,r,e+Qt,s-Qt),n.closePath(),n.clip()}function JR(n){return ah(n,["outerStart","outerEnd","innerStart","innerEnd"])}function ZR(n,t,e,s){const r=JR(n.options.borderRadius),i=(e-t)/2,o=Math.min(i,s*t/2),a=c=>{const l=(e-Math.min(i,c))*s/2;return ce(c,0,Math.min(i,l))};return{outerStart:a(r.outerStart),outerEnd:a(r.outerEnd),innerStart:ce(r.innerStart,0,o),innerEnd:ce(r.innerEnd,0,o)}}function mr(n,t,e,s){return{x:e+n*Math.cos(t),y:s+n*Math.sin(t)}}function vc(n,t,e,s,r,i){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:d}=t,h=Math.max(t.outerRadius+s+e-l,0),f=d>0?d+s+e+l:0;let m=0;const g=r-c;if(s){const j=d>0?d-s:0,B=h>0?h-s:0,V=(j+B)/2,q=V!==0?g*V/(V+s):g;m=(g-q)/2}const v=Math.max(.001,g*h-e/vt)/h,y=(g-v)/2,E=c+y+m,A=r-y-m,{outerStart:C,outerEnd:D,innerStart:R,innerEnd:M}=ZR(t,f,h,A-E),T=h-C,b=h-D,x=E+C/T,I=A-D/b,S=f+R,P=f+M,k=E+R/S,X=A-M/P;if(n.beginPath(),i){const j=(x+I)/2;if(n.arc(o,a,h,x,j),n.arc(o,a,h,j,I),D>0){const W=mr(b,I,o,a);n.arc(W.x,W.y,D,I,A+Qt)}const B=mr(P,A,o,a);if(n.lineTo(B.x,B.y),M>0){const W=mr(P,X,o,a);n.arc(W.x,W.y,M,A+Qt,X+Math.PI)}const V=(A-M/f+(E+R/f))/2;if(n.arc(o,a,f,A-M/f,V,!0),n.arc(o,a,f,V,E+R/f,!0),R>0){const W=mr(S,k,o,a);n.arc(W.x,W.y,R,k+Math.PI,E-Qt)}const q=mr(T,E,o,a);if(n.lineTo(q.x,q.y),C>0){const W=mr(T,x,o,a);n.arc(W.x,W.y,C,E-Qt,x)}}else{n.moveTo(o,a);const j=Math.cos(x)*h+o,B=Math.sin(x)*h+a;n.lineTo(j,B);const V=Math.cos(I)*h+o,q=Math.sin(I)*h+a;n.lineTo(V,q)}n.closePath()}function tP(n,t,e,s,r){const{fullCircles:i,startAngle:o,circumference:a}=t;let c=t.endAngle;if(i){vc(n,t,e,s,c,r);for(let l=0;l<i;++l)n.fill();isNaN(a)||(c=o+(a%Nt||Nt))}return vc(n,t,e,s,c,r),n.fill(),c}function eP(n,t,e,s,r){const{fullCircles:i,startAngle:o,circumference:a,options:c}=t,{borderWidth:l,borderJoinStyle:d,borderDash:h,borderDashOffset:f,borderRadius:m}=c,g=c.borderAlign==="inner";if(!l)return;n.setLineDash(h||[]),n.lineDashOffset=f,g?(n.lineWidth=l*2,n.lineJoin=d||"round"):(n.lineWidth=l,n.lineJoin=d||"bevel");let v=t.endAngle;if(i){vc(n,t,e,s,v,r);for(let y=0;y<i;++y)n.stroke();isNaN(a)||(v=o+(a%Nt||Nt))}g&&XR(n,t,v),c.selfJoin&&v-o>=vt&&m===0&&d!=="miter"&&QR(n,t,v),i||(vc(n,t,e,s,v,r),n.stroke())}class $i extends Ze{constructor(e){super();N(this,"circumference");N(this,"endAngle");N(this,"fullCircles");N(this,"innerRadius");N(this,"outerRadius");N(this,"pixelMargin");N(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,r){const i=this.getProps(["x","y"],r),{angle:o,distance:a}=yv(i,{x:e,y:s}),{startAngle:c,endAngle:l,innerRadius:d,outerRadius:h,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],r),m=(this.options.spacing+this.options.borderWidth)/2,g=rt(f,l-c),v=go(o,c,l)&&c!==l,y=g>=Nt||v,E=Cn(a,d+m,h+m);return y&&E}getCenterPoint(e){const{x:s,y:r,startAngle:i,endAngle:o,innerRadius:a,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:l,spacing:d}=this.options,h=(i+o)/2,f=(a+c+d+l)/2;return{x:s+Math.cos(h)*f,y:r+Math.sin(h)*f}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:r}=this,i=(s.offset||0)/4,o=(s.spacing||0)/2,a=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=r>Nt?Math.floor(r/Nt):0,r===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*i,Math.sin(c)*i);const l=1-Math.sin(Math.min(vt,r||0)),d=i*l;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,tP(e,this,d,o,a),eP(e,this,d,o,a),e.restore()}}N($i,"id","arc"),N($i,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),N($i,"defaultRoutes",{backgroundColor:"backgroundColor"}),N($i,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function Zv(n,t,e=t){n.lineCap=rt(e.borderCapStyle,t.borderCapStyle),n.setLineDash(rt(e.borderDash,t.borderDash)),n.lineDashOffset=rt(e.borderDashOffset,t.borderDashOffset),n.lineJoin=rt(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=rt(e.borderWidth,t.borderWidth),n.strokeStyle=rt(e.borderColor,t.borderColor)}function nP(n,t,e){n.lineTo(e.x,e.y)}function sP(n){return n.stepped?AS:n.tension||n.cubicInterpolationMode==="monotone"?kS:nP}function tb(n,t,e={}){const s=n.length,{start:r=0,end:i=s-1}=e,{start:o,end:a}=t,c=Math.max(r,o),l=Math.min(i,a),d=r<o&&i<o||r>a&&i>a;return{count:s,start:c,loop:t.loop,ilen:l<c&&!d?s+l-c:l-c}}function rP(n,t,e,s){const{points:r,options:i}=t,{count:o,start:a,loop:c,ilen:l}=tb(r,e,s),d=sP(i);let{move:h=!0,reverse:f}=s||{},m,g,v;for(m=0;m<=l;++m)g=r[(a+(f?l-m:m))%o],!g.skip&&(h?(n.moveTo(g.x,g.y),h=!1):d(n,v,g,f,i.stepped),v=g);return c&&(g=r[(a+(f?l:0))%o],d(n,v,g,f,i.stepped)),!!c}function iP(n,t,e,s){const r=t.points,{count:i,start:o,ilen:a}=tb(r,e,s),{move:c=!0,reverse:l}=s||{};let d=0,h=0,f,m,g,v,y,E;const A=D=>(o+(l?a-D:D))%i,C=()=>{v!==y&&(n.lineTo(d,y),n.lineTo(d,v),n.lineTo(d,E))};for(c&&(m=r[A(0)],n.moveTo(m.x,m.y)),f=0;f<=a;++f){if(m=r[A(f)],m.skip)continue;const D=m.x,R=m.y,M=D|0;M===g?(R<v?v=R:R>y&&(y=R),d=(h*d+D)/++h):(C(),n.lineTo(D,R),g=M,h=0,v=y=R),E=R}C()}function Uu(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?iP:rP}function oP(n){return n.stepped?iC:n.tension||n.cubicInterpolationMode==="monotone"?oC:Ps}function aP(n,t,e,s){let r=t._path;r||(r=t._path=new Path2D,t.path(r,e,s)&&r.closePath()),Zv(n,t.options),n.stroke(r)}function cP(n,t,e,s){const{segments:r,options:i}=t,o=Uu(t);for(const a of r)Zv(n,i,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+s-1})&&n.closePath(),n.stroke()}const lP=typeof Path2D=="function";function uP(n,t,e,s){lP&&!t.options.segment?aP(n,t,e,s):cP(n,t,e,s)}class ss extends Ze{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const r=s.spanGaps?this._loop:this._fullLoop;XS(this._points,s,t,r,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=hC(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,r=t[e],i=this.points,o=Fv(this,{property:e,start:r,end:r});if(!o.length)return;const a=[],c=oP(s);let l,d;for(l=0,d=o.length;l<d;++l){const{start:h,end:f}=o[l],m=i[h],g=i[f];if(m===g){a.push(m);continue}const v=Math.abs((r-m[e])/(g[e]-m[e])),y=c(m,g,v,s.stepped);y[e]=t[e],a.push(y)}return a.length===1?a[0]:a}pathSegment(t,e,s){return Uu(this)(t,this,e,s)}path(t,e,s){const r=this.segments,i=Uu(this);let o=this._loop;e=e||0,s=s||this.points.length-e;for(const a of r)o&=i(t,this,a,{start:e,end:e+s-1});return!!o}draw(t,e,s,r){const i=this.options||{};(this.points||[]).length&&i.borderWidth&&(t.save(),uP(t,this,s,r),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}N(ss,"id","line"),N(ss,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),N(ss,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),N(ss,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function $m(n,t,e,s){const r=n.options,{[e]:i}=n.getProps([e],s);return Math.abs(t-i)<r.radius+r.hitRadius}class qa extends Ze{constructor(e){super();N(this,"parsed");N(this,"skip");N(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,r){const i=this.options,{x:o,y:a}=this.getProps(["x","y"],r);return Math.pow(e-o,2)+Math.pow(s-a,2)<Math.pow(i.hitRadius+i.radius,2)}inXRange(e,s){return $m(this,e,"x",s)}inYRange(e,s){return $m(this,e,"y",s)}getCenterPoint(e){const{x:s,y:r}=this.getProps(["x","y"],e);return{x:s,y:r}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const r=s&&e.borderWidth||0;return(s+r)*2}draw(e,s){const r=this.options;this.skip||r.radius<.1||!Pn(this,s,this.size(r)/2)||(e.strokeStyle=r.borderColor,e.lineWidth=r.borderWidth,e.fillStyle=r.backgroundColor,Vu(e,r,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}N(qa,"id","point"),N(qa,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),N(qa,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function eb(n,t){const{x:e,y:s,base:r,width:i,height:o}=n.getProps(["x","y","base","width","height"],t);let a,c,l,d,h;return n.horizontal?(h=o/2,a=Math.min(e,r),c=Math.max(e,r),l=s-h,d=s+h):(h=i/2,a=e-h,c=e+h,l=Math.min(s,r),d=Math.max(s,r)),{left:a,top:l,right:c,bottom:d}}function rs(n,t,e,s){return n?0:ce(t,e,s)}function dP(n,t,e){const s=n.options.borderWidth,r=n.borderSkipped,i=kv(s);return{t:rs(r.top,i.top,0,e),r:rs(r.right,i.right,0,t),b:rs(r.bottom,i.bottom,0,e),l:rs(r.left,i.left,0,t)}}function hP(n,t,e){const{enableBorderRadius:s}=n.getProps(["enableBorderRadius"]),r=n.options.borderRadius,i=Fs(r),o=Math.min(t,e),a=n.borderSkipped,c=s||dt(r);return{topLeft:rs(!c||a.top||a.left,i.topLeft,0,o),topRight:rs(!c||a.top||a.right,i.topRight,0,o),bottomLeft:rs(!c||a.bottom||a.left,i.bottomLeft,0,o),bottomRight:rs(!c||a.bottom||a.right,i.bottomRight,0,o)}}function fP(n){const t=eb(n),e=t.right-t.left,s=t.bottom-t.top,r=dP(n,e/2,s/2),i=hP(n,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:i},inner:{x:t.left+r.l,y:t.top+r.t,w:e-r.l-r.r,h:s-r.t-r.b,radius:{topLeft:Math.max(0,i.topLeft-Math.max(r.t,r.l)),topRight:Math.max(0,i.topRight-Math.max(r.t,r.r)),bottomLeft:Math.max(0,i.bottomLeft-Math.max(r.b,r.l)),bottomRight:Math.max(0,i.bottomRight-Math.max(r.b,r.r))}}}}function Xl(n,t,e,s){const r=t===null,i=e===null,a=n&&!(r&&i)&&eb(n,s);return a&&(r||Cn(t,a.left,a.right))&&(i||Cn(e,a.top,a.bottom))}function pP(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function mP(n,t){n.rect(t.x,t.y,t.w,t.h)}function Jl(n,t,e={}){const s=n.x!==e.x?-t:0,r=n.y!==e.y?-t:0,i=(n.x+n.w!==e.x+e.w?t:0)-s,o=(n.y+n.h!==e.y+e.h?t:0)-r;return{x:n.x+s,y:n.y+r,w:n.w+i,h:n.h+o,radius:n.radius}}class Wa extends Ze{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:r}}=this,{inner:i,outer:o}=fP(this),a=pP(o.radius)?_o:mP;t.save(),(o.w!==i.w||o.h!==i.h)&&(t.beginPath(),a(t,Jl(o,e,i)),t.clip(),a(t,Jl(i,-e,o)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,Jl(i,e)),t.fillStyle=r,t.fill(),t.restore()}inRange(t,e,s){return Xl(this,t,e,s)}inXRange(t,e){return Xl(this,t,null,e)}inYRange(t,e){return Xl(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:r,horizontal:i}=this.getProps(["x","y","base","horizontal"],t);return{x:i?(e+r)/2:e,y:i?s:(s+r)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}N(Wa,"id","bar"),N(Wa,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),N(Wa,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var gP=Object.freeze({__proto__:null,ArcElement:$i,BarElement:Wa,LineElement:ss,PointElement:qa});const ju=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Bm=ju.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function nb(n){return ju[n%ju.length]}function sb(n){return Bm[n%Bm.length]}function _P(n,t){return n.borderColor=nb(t),n.backgroundColor=sb(t),++t}function yP(n,t){return n.backgroundColor=n.data.map(()=>nb(t++)),t}function vP(n,t){return n.backgroundColor=n.data.map(()=>sb(t++)),t}function bP(n){let t=0;return(e,s)=>{const r=n.getDatasetMeta(s).controller;r instanceof Ns?t=yP(e,t):r instanceof Zi?t=vP(e,t):r&&(t=_P(e,t))}}function Um(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function xP(n){return n&&(n.borderColor||n.backgroundColor)}function wP(){return $t.borderColor!=="rgba(0,0,0,0.1)"||$t.backgroundColor!=="rgba(0,0,0,0.1)"}var EP={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:s},options:r}=n.config,{elements:i}=r,o=Um(s)||xP(r)||i&&Um(i)||wP();if(!e.forceOverride&&o)return;const a=bP(n);s.forEach(a)}};function TP(n,t,e,s,r){const i=r.samples||s;if(i>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(i-2);let c=0;const l=t+e-1;let d=t,h,f,m,g,v;for(o[c++]=n[d],h=0;h<i-2;h++){let y=0,E=0,A;const C=Math.floor((h+1)*a)+1+t,D=Math.min(Math.floor((h+2)*a)+1,e)+t,R=D-C;for(A=C;A<D;A++)y+=n[A].x,E+=n[A].y;y/=R,E/=R;const M=Math.floor(h*a)+1+t,T=Math.min(Math.floor((h+1)*a)+1,e)+t,{x:b,y:x}=n[d];for(m=g=-1,A=M;A<T;A++)g=.5*Math.abs((b-y)*(n[A].y-x)-(b-n[A].x)*(E-x)),g>m&&(m=g,f=n[A],v=A);o[c++]=f,d=v}return o[c++]=n[l],o}function IP(n,t,e,s){let r=0,i=0,o,a,c,l,d,h,f,m,g,v;const y=[],E=t+e-1,A=n[t].x,D=n[E].x-A;for(o=t;o<t+e;++o){a=n[o],c=(a.x-A)/D*s,l=a.y;const R=c|0;if(R===d)l<g?(g=l,h=o):l>v&&(v=l,f=o),r=(i*r+a.x)/++i;else{const M=o-1;if(!ct(h)&&!ct(f)){const T=Math.min(h,f),b=Math.max(h,f);T!==m&&T!==M&&y.push({...n[T],x:r}),b!==m&&b!==M&&y.push({...n[b],x:r})}o>0&&M!==m&&y.push(n[M]),y.push(a),d=R,i=0,g=v=l,h=f=m=o}}return y}function rb(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function jm(n){n.data.datasets.forEach(t=>{rb(t)})}function AP(n,t){const e=t.length;let s=0,r;const{iScale:i}=n,{min:o,max:a,minDefined:c,maxDefined:l}=i.getUserBounds();return c&&(s=ce(Rn(t,i.axis,o).lo,0,e-1)),l?r=ce(Rn(t,i.axis,a).hi+1,s,e)-s:r=e-s,{start:s,count:r}}var kP={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){jm(n);return}const s=n.width;n.data.datasets.forEach((r,i)=>{const{_data:o,indexAxis:a}=r,c=n.getDatasetMeta(i),l=o||r.data;if(Vi([a,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const d=n.scales[c.xAxisID];if(d.type!=="linear"&&d.type!=="time"||n.options.parsing)return;let{start:h,count:f}=AP(c,l);const m=e.threshold||4*s;if(f<=m){rb(r);return}ct(o)&&(r._data=l,delete r.data,Object.defineProperty(r,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(v){this._data=v}}));let g;switch(e.algorithm){case"lttb":g=TP(l,h,f,s,e);break;case"min-max":g=IP(l,h,f,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}r._decimated=g})},destroy(n){jm(n)}};function SP(n,t,e){const s=n.segments,r=n.points,i=t.points,o=[];for(const a of s){let{start:c,end:l}=a;l=il(c,l,r);const d=zu(e,r[c],r[l],a.loop);if(!t.segments){o.push({source:a,target:d,start:r[c],end:r[l]});continue}const h=Fv(t,d);for(const f of h){const m=zu(e,i[f.start],i[f.end],f.loop),g=Vv(a,r,m);for(const v of g)o.push({source:v,target:f,start:{[e]:zm(d,m,"start",Math.max)},end:{[e]:zm(d,m,"end",Math.min)}})}}return o}function zu(n,t,e,s){if(s)return;let r=t[n],i=e[n];return n==="angle"&&(r=xe(r),i=xe(i)),{property:n,start:r,end:i}}function CP(n,t){const{x:e=null,y:s=null}=n||{},r=t.points,i=[];return t.segments.forEach(({start:o,end:a})=>{a=il(o,a,r);const c=r[o],l=r[a];s!==null?(i.push({x:c.x,y:s}),i.push({x:l.x,y:s})):e!==null&&(i.push({x:e,y:c.y}),i.push({x:e,y:l.y}))}),i}function il(n,t,e){for(;t>n;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function zm(n,t,e,s){return n&&t?s(n[e],t[e]):n?n[e]:t?t[e]:0}function ib(n,t){let e=[],s=!1;return Vt(n)?(s=!0,e=n):e=CP(n,t),e.length?new ss({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function Hm(n){return n&&n.fill!==!1}function RP(n,t,e){let r=n[t].fill;const i=[t];let o;if(!e)return r;for(;r!==!1&&i.indexOf(r)===-1;){if(!Ht(r))return r;if(o=n[r],!o)return!1;if(o.visible)return r;i.push(r),r=o.fill}return!1}function PP(n,t,e){const s=NP(n);if(dt(s))return isNaN(s.value)?!1:s;let r=parseFloat(s);return Ht(r)&&Math.floor(r)===r?DP(s[0],t,r,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function DP(n,t,e,s){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function MP(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:dt(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function OP(n,t,e){let s;return n==="start"?s=e:n==="end"?s=t.options.reverse?t.min:t.max:dt(n)?s=n.value:s=t.getBaseValue(),s}function NP(n){const t=n.options,e=t.fill;let s=rt(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function LP(n){const{scale:t,index:e,line:s}=n,r=[],i=s.segments,o=s.points,a=VP(t,e);a.push(ib({x:null,y:t.bottom},s));for(let c=0;c<i.length;c++){const l=i[c];for(let d=l.start;d<=l.end;d++)FP(r,o[d],a)}return new ss({points:r,options:{}})}function VP(n,t){const e=[],s=n.getMatchingVisibleMetas("line");for(let r=0;r<s.length;r++){const i=s[r];if(i.index===t)break;i.hidden||e.unshift(i.dataset)}return e}function FP(n,t,e){const s=[];for(let r=0;r<e.length;r++){const i=e[r],{first:o,last:a,point:c}=$P(i,t,"x");if(!(!c||o&&a)){if(o)s.unshift(c);else if(n.push(c),!a)break}}n.push(...s)}function $P(n,t,e){const s=n.interpolate(t,e);if(!s)return{};const r=s[e],i=n.segments,o=n.points;let a=!1,c=!1;for(let l=0;l<i.length;l++){const d=i[l],h=o[d.start][e],f=o[d.end][e];if(Cn(r,h,f)){a=r===h,c=r===f;break}}return{first:a,last:c,point:s}}class ob{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:r,y:i,radius:o}=this;return e=e||{start:0,end:Nt},t.arc(r,i,o,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:r}=this,i=t.angle;return{x:e+Math.cos(i)*r,y:s+Math.sin(i)*r,angle:i}}}function BP(n){const{chart:t,fill:e,line:s}=n;if(Ht(e))return UP(t,e);if(e==="stack")return LP(n);if(e==="shape")return!0;const r=jP(n);return r instanceof ob?r:ib(r,s)}function UP(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function jP(n){return(n.scale||{}).getPointPositionForValue?HP(n):zP(n)}function zP(n){const{scale:t={},fill:e}=n,s=MP(e,t);if(Ht(s)){const r=t.isHorizontal();return{x:r?s:null,y:r?null:s}}return null}function HP(n){const{scale:t,fill:e}=n,s=t.options,r=t.getLabels().length,i=s.reverse?t.max:t.min,o=OP(e,t,i),a=[];if(s.grid.circular){const c=t.getPointPositionForValue(0,i);return new ob({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<r;++c)a.push(t.getPointPositionForValue(c,o));return a}function Zl(n,t,e){const s=BP(t),{chart:r,index:i,line:o,scale:a,axis:c}=t,l=o.options,d=l.fill,h=l.backgroundColor,{above:f=h,below:m=h}=d||{},g=r.getDatasetMeta(i),v=$v(r,g);s&&o.points.length&&(el(n,e),qP(n,{line:o,target:s,above:f,below:m,area:e,scale:a,axis:c,clip:v}),nl(n))}function qP(n,t){const{line:e,target:s,above:r,below:i,area:o,scale:a,clip:c}=t,l=e._loop?"angle":t.axis;n.save();let d=i;i!==r&&(l==="x"?(qm(n,s,o.top),tu(n,{line:e,target:s,color:r,scale:a,property:l,clip:c}),n.restore(),n.save(),qm(n,s,o.bottom)):l==="y"&&(Wm(n,s,o.left),tu(n,{line:e,target:s,color:i,scale:a,property:l,clip:c}),n.restore(),n.save(),Wm(n,s,o.right),d=r)),tu(n,{line:e,target:s,color:d,scale:a,property:l,clip:c}),n.restore()}function qm(n,t,e){const{segments:s,points:r}=t;let i=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:l}=a,d=r[c],h=r[il(c,l,r)];i?(n.moveTo(d.x,d.y),i=!1):(n.lineTo(d.x,e),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(h.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function Wm(n,t,e){const{segments:s,points:r}=t;let i=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:l}=a,d=r[c],h=r[il(c,l,r)];i?(n.moveTo(d.x,d.y),i=!1):(n.lineTo(e,d.y),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,h.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function tu(n,t){const{line:e,target:s,property:r,color:i,scale:o,clip:a}=t,c=SP(e,s,r);for(const{source:l,target:d,start:h,end:f}of c){const{style:{backgroundColor:m=i}={}}=l,g=s!==!0;n.save(),n.fillStyle=m,WP(n,o,a,g&&zu(r,h,f)),n.beginPath();const v=!!e.pathSegment(n,l);let y;if(g){v?n.closePath():Gm(n,s,f,r);const E=!!s.pathSegment(n,d,{move:v,reverse:!0});y=v&&E,y||Gm(n,s,h,r)}n.closePath(),n.fill(y?"evenodd":"nonzero"),n.restore()}}function WP(n,t,e,s){const r=t.chart.chartArea,{property:i,start:o,end:a}=s||{};if(i==="x"||i==="y"){let c,l,d,h;i==="x"?(c=o,l=r.top,d=a,h=r.bottom):(c=r.left,l=o,d=r.right,h=a),n.beginPath(),e&&(c=Math.max(c,e.left),d=Math.min(d,e.right),l=Math.max(l,e.top),h=Math.min(h,e.bottom)),n.rect(c,l,d-c,h-l),n.clip()}}function Gm(n,t,e,s){const r=t.interpolate(e,s);r&&n.lineTo(r.x,r.y)}var GP={id:"filler",afterDatasetsUpdate(n,t,e){const s=(n.data.datasets||[]).length,r=[];let i,o,a,c;for(o=0;o<s;++o)i=n.getDatasetMeta(o),a=i.dataset,c=null,a&&a.options&&a instanceof ss&&(c={visible:n.isDatasetVisible(o),index:o,fill:PP(a,o,s),chart:n,axis:i.controller.options.indexAxis,scale:i.vScale,line:a}),i.$filler=c,r.push(c);for(o=0;o<s;++o)c=r[o],!(!c||c.fill===!1)&&(c.fill=RP(r,o,e.propagate))},beforeDraw(n,t,e){const s=e.drawTime==="beforeDraw",r=n.getSortedVisibleDatasetMetas(),i=n.chartArea;for(let o=r.length-1;o>=0;--o){const a=r[o].$filler;a&&(a.line.updateControlPoints(i,a.axis),s&&a.fill&&Zl(n.ctx,a,i))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=n.getSortedVisibleDatasetMetas();for(let r=s.length-1;r>=0;--r){const i=s[r].$filler;Hm(i)&&Zl(n.ctx,i,n.chartArea)}},beforeDatasetDraw(n,t,e){const s=t.meta.$filler;!Hm(s)||e.drawTime!=="beforeDatasetDraw"||Zl(n.ctx,s,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Ym=(n,t)=>{let{boxHeight:e=t,boxWidth:s=t}=n;return n.usePointStyle&&(e=Math.min(e,t),s=n.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},YP=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Km extends Ze{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=Pt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,r)=>t.sort(s,r,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,r=se(s.font),i=r.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=Ym(s,i);let l,d;e.font=r.string,this.isHorizontal()?(l=this.maxWidth,d=this._fitRows(o,i,a,c)+10):(d=this.maxHeight,l=this._fitCols(o,r,a,c)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,r){const{ctx:i,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],d=r+a;let h=t;i.textAlign="left",i.textBaseline="middle";let f=-1,m=-d;return this.legendItems.forEach((g,v)=>{const y=s+e/2+i.measureText(g.text).width;(v===0||l[l.length-1]+y+2*a>o)&&(h+=d,l[l.length-(v>0?0:1)]=0,m+=d,f++),c[v]={left:0,top:m,row:f,width:y,height:r},l[l.length-1]+=y+a}),h}_fitCols(t,e,s,r){const{ctx:i,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],d=o-t;let h=a,f=0,m=0,g=0,v=0;return this.legendItems.forEach((y,E)=>{const{itemWidth:A,itemHeight:C}=KP(s,e,i,y,r);E>0&&m+C+2*a>d&&(h+=f+a,l.push({width:f,height:m}),g+=f+a,v++,f=m=0),c[E]={left:g,top:m,col:v,width:A,height:C},f=Math.max(f,A),m+=C+a}),h+=f,l.push({width:f,height:m}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:r},rtl:i}}=this,o=Or(i,this.left,this.width);if(this.isHorizontal()){let a=0,c=ve(s,this.left+r,this.right-this.lineWidths[a]);for(const l of e)a!==l.row&&(a=l.row,c=ve(s,this.left+r,this.right-this.lineWidths[a])),l.top+=this.top+t+r,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+r}else{let a=0,c=ve(s,this.top+t+r,this.bottom-this.columnSizes[a].height);for(const l of e)l.col!==a&&(a=l.col,c=ve(s,this.top+t+r,this.bottom-this.columnSizes[a].height)),l.top=c,l.left+=this.left+r,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+r}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;el(t,this),this._draw(),nl(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:r}=this,{align:i,labels:o}=t,a=$t.color,c=Or(t.rtl,this.left,this.width),l=se(o.font),{padding:d}=o,h=l.size,f=h/2;let m;this.drawTitle(),r.textAlign=c.textAlign("left"),r.textBaseline="middle",r.lineWidth=.5,r.font=l.string;const{boxWidth:g,boxHeight:v,itemHeight:y}=Ym(o,h),E=function(M,T,b){if(isNaN(g)||g<=0||isNaN(v)||v<0)return;r.save();const x=rt(b.lineWidth,1);if(r.fillStyle=rt(b.fillStyle,a),r.lineCap=rt(b.lineCap,"butt"),r.lineDashOffset=rt(b.lineDashOffset,0),r.lineJoin=rt(b.lineJoin,"miter"),r.lineWidth=x,r.strokeStyle=rt(b.strokeStyle,a),r.setLineDash(rt(b.lineDash,[])),o.usePointStyle){const I={radius:v*Math.SQRT2/2,pointStyle:b.pointStyle,rotation:b.rotation,borderWidth:x},S=c.xPlus(M,g/2),P=T+f;Av(r,I,S,P,o.pointStyleWidth&&g)}else{const I=T+Math.max((h-v)/2,0),S=c.leftForLtr(M,g),P=Fs(b.borderRadius);r.beginPath(),Object.values(P).some(k=>k!==0)?_o(r,{x:S,y:I,w:g,h:v,radius:P}):r.rect(S,I,g,v),r.fill(),x!==0&&r.stroke()}r.restore()},A=function(M,T,b){Zs(r,b.text,M,T+y/2,l,{strikethrough:b.hidden,textAlign:c.textAlign(b.textAlign)})},C=this.isHorizontal(),D=this._computeTitleHeight();C?m={x:ve(i,this.left+d,this.right-s[0]),y:this.top+d+D,line:0}:m={x:this.left+d,y:ve(i,this.top+D+d,this.bottom-e[0].height),line:0},Ov(this.ctx,t.textDirection);const R=y+d;this.legendItems.forEach((M,T)=>{r.strokeStyle=M.fontColor,r.fillStyle=M.fontColor;const b=r.measureText(M.text).width,x=c.textAlign(M.textAlign||(M.textAlign=o.textAlign)),I=g+f+b;let S=m.x,P=m.y;c.setWidth(this.width),C?T>0&&S+I+d>this.right&&(P=m.y+=R,m.line++,S=m.x=ve(i,this.left+d,this.right-s[m.line])):T>0&&P+R>this.bottom&&(S=m.x=S+e[m.line].width+d,m.line++,P=m.y=ve(i,this.top+D+d,this.bottom-e[m.line].height));const k=c.x(S);if(E(k,P,M),S=mS(x,S+g+f,C?S+I:this.right,t.rtl),A(c.x(S),P,M),C)m.x+=I+d;else if(typeof M.text!="string"){const X=l.lineHeight;m.y+=ab(M,X)+d}else m.y+=R}),Nv(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=se(e.font),r=Ae(e.padding);if(!e.display)return;const i=Or(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=s.size/2,l=r.top+c;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+l,h=ve(t.align,h,this.right-f);else{const g=this.columnSizes.reduce((v,y)=>Math.max(v,y.height),0);d=l+ve(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const m=ve(a,h,h+f);o.textAlign=i.textAlign(ih(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=s.string,Zs(o,e.text,m,d,s)}_computeTitleHeight(){const t=this.options.title,e=se(t.font),s=Ae(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,r,i;if(Cn(t,this.left,this.right)&&Cn(e,this.top,this.bottom)){for(i=this.legendHitBoxes,s=0;s<i.length;++s)if(r=i[s],Cn(t,r.left,r.left+r.width)&&Cn(e,r.top,r.top+r.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!JP(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const r=this._hoveredItem,i=YP(r,s);r&&!i&&Pt(e.onLeave,[t,r,this],this),this._hoveredItem=s,s&&!i&&Pt(e.onHover,[t,s,this],this)}else s&&Pt(e.onClick,[t,s,this],this)}}function KP(n,t,e,s,r){const i=QP(s,n,t,e),o=XP(r,s,t.lineHeight);return{itemWidth:i,itemHeight:o}}function QP(n,t,e,s){let r=n.text;return r&&typeof r!="string"&&(r=r.reduce((i,o)=>i.length>o.length?i:o)),t+e.size/2+s.measureText(r).width}function XP(n,t,e){let s=n;return typeof t.text!="string"&&(s=ab(t,e)),s}function ab(n,t){const e=n.text?n.text.length:0;return t*e}function JP(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var ZP={id:"legend",_element:Km,start(n,t,e){const s=n.legend=new Km({ctx:n.ctx,options:e,chart:n});Ee.configure(n,s,e),Ee.addBox(n,s)},stop(n){Ee.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const s=n.legend;Ee.configure(n,s,e),s.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const s=t.datasetIndex,r=e.chart;r.isDatasetVisible(s)?(r.hide(s),t.hidden=!0):(r.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:r,color:i,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const l=c.controller.getStyle(e?0:void 0),d=Ae(l.borderWidth);return{text:t[c.index].label,fillStyle:l.backgroundColor,fontColor:i,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:l.borderColor,pointStyle:s||l.pointStyle,rotation:l.rotation,textAlign:r||l.textAlign,borderRadius:o&&(a||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class ph extends Ze{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const r=Vt(s.text)?s.text.length:1;this._padding=Ae(s.padding);const i=r*se(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=i:this.width=i}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:r,right:i,options:o}=this,a=o.align;let c=0,l,d,h;return this.isHorizontal()?(d=ve(a,s,i),h=e+t,l=i-s):(o.position==="left"?(d=s+t,h=ve(a,r,e),c=vt*-.5):(d=i-t,h=ve(a,e,r),c=vt*.5),l=r-e),{titleX:d,titleY:h,maxWidth:l,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=se(e.font),i=s.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(i);Zs(t,e.text,0,0,s,{color:e.color,maxWidth:c,rotation:l,textAlign:ih(e.align),textBaseline:"middle",translation:[o,a]})}}function tD(n,t){const e=new ph({ctx:n.ctx,options:t,chart:n});Ee.configure(n,e,t),Ee.addBox(n,e),n.titleBlock=e}var eD={id:"title",_element:ph,start(n,t,e){tD(n,e)},stop(n){const t=n.titleBlock;Ee.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const s=n.titleBlock;Ee.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ia=new WeakMap;var nD={id:"subtitle",start(n,t,e){const s=new ph({ctx:n.ctx,options:e,chart:n});Ee.configure(n,s,e),Ee.addBox(n,s),Ia.set(n,s)},stop(n){Ee.removeBox(n,Ia.get(n)),Ia.delete(n)},beforeUpdate(n,t,e){const s=Ia.get(n);Ee.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Bi={average(n){if(!n.length)return!1;let t,e,s=new Set,r=0,i=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const c=a.tooltipPosition();s.add(c.x),r+=c.y,++i}}return i===0||s.size===0?!1:{x:[...s].reduce((a,c)=>a+c)/s.size,y:r/i}},nearest(n,t){if(!n.length)return!1;let e=t.x,s=t.y,r=Number.POSITIVE_INFINITY,i,o,a;for(i=0,o=n.length;i<o;++i){const c=n[i].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),d=Nu(t,l);d<r&&(r=d,a=c)}}if(a){const c=a.tooltipPosition();e=c.x,s=c.y}return{x:e,y:s}}};function nn(n,t){return t&&(Vt(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function wn(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function sD(n,t){const{element:e,datasetIndex:s,index:r}=t,i=n.getDatasetMeta(s).controller,{label:o,value:a}=i.getLabelAndValue(r);return{chart:n,label:o,parsed:i.getParsed(r),raw:n.data.datasets[s].data[r],formattedValue:a,dataset:i.getDataset(),dataIndex:r,datasetIndex:s,element:e}}function Qm(n,t){const e=n.chart.ctx,{body:s,footer:r,title:i}=n,{boxWidth:o,boxHeight:a}=t,c=se(t.bodyFont),l=se(t.titleFont),d=se(t.footerFont),h=i.length,f=r.length,m=s.length,g=Ae(t.padding);let v=g.height,y=0,E=s.reduce((D,R)=>D+R.before.length+R.lines.length+R.after.length,0);if(E+=n.beforeBody.length+n.afterBody.length,h&&(v+=h*l.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),E){const D=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;v+=m*D+(E-m)*c.lineHeight+(E-1)*t.bodySpacing}f&&(v+=t.footerMarginTop+f*d.lineHeight+(f-1)*t.footerSpacing);let A=0;const C=function(D){y=Math.max(y,e.measureText(D).width+A)};return e.save(),e.font=l.string,It(n.title,C),e.font=c.string,It(n.beforeBody.concat(n.afterBody),C),A=t.displayColors?o+2+t.boxPadding:0,It(s,D=>{It(D.before,C),It(D.lines,C),It(D.after,C)}),A=0,e.font=d.string,It(n.footer,C),e.restore(),y+=g.width,{width:y,height:v}}function rD(n,t){const{y:e,height:s}=t;return e<s/2?"top":e>n.height-s/2?"bottom":"center"}function iD(n,t,e,s){const{x:r,width:i}=s,o=e.caretSize+e.caretPadding;if(n==="left"&&r+i+o>t.width||n==="right"&&r-i-o<0)return!0}function oD(n,t,e,s){const{x:r,width:i}=e,{width:o,chartArea:{left:a,right:c}}=n;let l="center";return s==="center"?l=r<=(a+c)/2?"left":"right":r<=i/2?l="left":r>=o-i/2&&(l="right"),iD(l,n,t,e)&&(l="center"),l}function Xm(n,t,e){const s=e.yAlign||t.yAlign||rD(n,e);return{xAlign:e.xAlign||t.xAlign||oD(n,t,e,s),yAlign:s}}function aD(n,t){let{x:e,width:s}=n;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function cD(n,t,e){let{y:s,height:r}=n;return t==="top"?s+=e:t==="bottom"?s-=r+e:s-=r/2,s}function Jm(n,t,e,s){const{caretSize:r,caretPadding:i,cornerRadius:o}=n,{xAlign:a,yAlign:c}=e,l=r+i,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:m}=Fs(o);let g=aD(t,a);const v=cD(t,c,l);return c==="center"?a==="left"?g+=l:a==="right"&&(g-=l):a==="left"?g-=Math.max(d,f)+r:a==="right"&&(g+=Math.max(h,m)+r),{x:ce(g,0,s.width-t.width),y:ce(v,0,s.height-t.height)}}function Aa(n,t,e){const s=Ae(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-s.right:n.x+s.left}function Zm(n){return nn([],wn(n))}function lD(n,t,e){return ys(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function tg(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const cb={beforeTitle:bn,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:bn,beforeBody:bn,beforeLabel:bn,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return ct(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:bn,afterBody:bn,beforeFooter:bn,footer:bn,afterFooter:bn};function Re(n,t,e,s){const r=n[t].call(e,s);return typeof r>"u"?cb[t].call(e,s):r}class Hu extends Ze{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),r=s.enabled&&e.options.animation&&s.animations,i=new Bv(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||(this.$context=lD(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,r=Re(s,"beforeTitle",this,t),i=Re(s,"title",this,t),o=Re(s,"afterTitle",this,t);let a=[];return a=nn(a,wn(r)),a=nn(a,wn(i)),a=nn(a,wn(o)),a}getBeforeBody(t,e){return Zm(Re(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,r=[];return It(t,i=>{const o={before:[],lines:[],after:[]},a=tg(s,i);nn(o.before,wn(Re(a,"beforeLabel",this,i))),nn(o.lines,Re(a,"label",this,i)),nn(o.after,wn(Re(a,"afterLabel",this,i))),r.push(o)}),r}getAfterBody(t,e){return Zm(Re(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,r=Re(s,"beforeFooter",this,t),i=Re(s,"footer",this,t),o=Re(s,"afterFooter",this,t);let a=[];return a=nn(a,wn(r)),a=nn(a,wn(i)),a=nn(a,wn(o)),a}_createItems(t){const e=this._active,s=this.chart.data,r=[],i=[],o=[];let a=[],c,l;for(c=0,l=e.length;c<l;++c)a.push(sD(this.chart,e[c]));return t.filter&&(a=a.filter((d,h,f)=>t.filter(d,h,f,s))),t.itemSort&&(a=a.sort((d,h)=>t.itemSort(d,h,s))),It(a,d=>{const h=tg(t.callbacks,d);r.push(Re(h,"labelColor",this,d)),i.push(Re(h,"labelPointStyle",this,d)),o.push(Re(h,"labelTextColor",this,d))}),this.labelColors=r,this.labelPointStyles=i,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const s=this.options.setContext(this.getContext()),r=this._active;let i,o=[];if(!r.length)this.opacity!==0&&(i={opacity:0});else{const a=Bi[s.position].call(this,r,this._eventPosition);o=this._createItems(s),this.title=this.getTitle(o,s),this.beforeBody=this.getBeforeBody(o,s),this.body=this.getBody(o,s),this.afterBody=this.getAfterBody(o,s),this.footer=this.getFooter(o,s);const c=this._size=Qm(this,s),l=Object.assign({},a,c),d=Xm(this.chart,s,l),h=Jm(s,l,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,i={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,i&&this._resolveAnimations().update(this,i),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,r){const i=this.getCaretPosition(t,s,r);e.lineTo(i.x1,i.y1),e.lineTo(i.x2,i.y2),e.lineTo(i.x3,i.y3)}getCaretPosition(t,e,s){const{xAlign:r,yAlign:i}=this,{caretSize:o,cornerRadius:a}=s,{topLeft:c,topRight:l,bottomLeft:d,bottomRight:h}=Fs(a),{x:f,y:m}=t,{width:g,height:v}=e;let y,E,A,C,D,R;return i==="center"?(D=m+v/2,r==="left"?(y=f,E=y-o,C=D+o,R=D-o):(y=f+g,E=y+o,C=D-o,R=D+o),A=y):(r==="left"?E=f+Math.max(c,d)+o:r==="right"?E=f+g-Math.max(l,h)-o:E=this.caretX,i==="top"?(C=m,D=C-o,y=E-o,A=E+o):(C=m+v,D=C+o,y=E+o,A=E-o),R=C),{x1:y,x2:E,x3:A,y1:C,y2:D,y3:R}}drawTitle(t,e,s){const r=this.title,i=r.length;let o,a,c;if(i){const l=Or(s.rtl,this.x,this.width);for(t.x=Aa(this,s.titleAlign,s),e.textAlign=l.textAlign(s.titleAlign),e.textBaseline="middle",o=se(s.titleFont),a=s.titleSpacing,e.fillStyle=s.titleColor,e.font=o.string,c=0;c<i;++c)e.fillText(r[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===i&&(t.y+=s.titleMarginBottom-a)}}_drawColorBox(t,e,s,r,i){const o=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:c,boxWidth:l}=i,d=se(i.bodyFont),h=Aa(this,"left",i),f=r.x(h),m=c<d.lineHeight?(d.lineHeight-c)/2:0,g=e.y+m;if(i.usePointStyle){const v={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},y=r.leftForLtr(f,l)+l/2,E=g+c/2;t.strokeStyle=i.multiKeyBackground,t.fillStyle=i.multiKeyBackground,Vu(t,v,y,E),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Vu(t,v,y,E)}else{t.lineWidth=dt(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const v=r.leftForLtr(f,l),y=r.leftForLtr(r.xPlus(f,1),l-2),E=Fs(o.borderRadius);Object.values(E).some(A=>A!==0)?(t.beginPath(),t.fillStyle=i.multiKeyBackground,_o(t,{x:v,y:g,w:l,h:c,radius:E}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),_o(t,{x:y,y:g+1,w:l-2,h:c-2,radius:E}),t.fill()):(t.fillStyle=i.multiKeyBackground,t.fillRect(v,g,l,c),t.strokeRect(v,g,l,c),t.fillStyle=o.backgroundColor,t.fillRect(y,g+1,l-2,c-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:r}=this,{bodySpacing:i,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:d}=s,h=se(s.bodyFont);let f=h.lineHeight,m=0;const g=Or(s.rtl,this.x,this.width),v=function(b){e.fillText(b,g.x(t.x+m),t.y+f/2),t.y+=f+i},y=g.textAlign(o);let E,A,C,D,R,M,T;for(e.textAlign=o,e.textBaseline="middle",e.font=h.string,t.x=Aa(this,y,s),e.fillStyle=s.bodyColor,It(this.beforeBody,v),m=a&&y!=="right"?o==="center"?l/2+d:l+2+d:0,D=0,M=r.length;D<M;++D){for(E=r[D],A=this.labelTextColors[D],e.fillStyle=A,It(E.before,v),C=E.lines,a&&C.length&&(this._drawColorBox(e,t,D,g,s),f=Math.max(h.lineHeight,c)),R=0,T=C.length;R<T;++R)v(C[R]),f=h.lineHeight;It(E.after,v)}m=0,f=h.lineHeight,It(this.afterBody,v),t.y-=i}drawFooter(t,e,s){const r=this.footer,i=r.length;let o,a;if(i){const c=Or(s.rtl,this.x,this.width);for(t.x=Aa(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=c.textAlign(s.footerAlign),e.textBaseline="middle",o=se(s.footerFont),e.fillStyle=s.footerColor,e.font=o.string,a=0;a<i;++a)e.fillText(r[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+s.footerSpacing}}drawBackground(t,e,s,r){const{xAlign:i,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:d}=s,{topLeft:h,topRight:f,bottomLeft:m,bottomRight:g}=Fs(r.cornerRadius);e.fillStyle=r.backgroundColor,e.strokeStyle=r.borderColor,e.lineWidth=r.borderWidth,e.beginPath(),e.moveTo(a+h,c),o==="top"&&this.drawCaret(t,e,s,r),e.lineTo(a+l-f,c),e.quadraticCurveTo(a+l,c,a+l,c+f),o==="center"&&i==="right"&&this.drawCaret(t,e,s,r),e.lineTo(a+l,c+d-g),e.quadraticCurveTo(a+l,c+d,a+l-g,c+d),o==="bottom"&&this.drawCaret(t,e,s,r),e.lineTo(a+m,c+d),e.quadraticCurveTo(a,c+d,a,c+d-m),o==="center"&&i==="left"&&this.drawCaret(t,e,s,r),e.lineTo(a,c+h),e.quadraticCurveTo(a,c,a+h,c),e.closePath(),e.fill(),r.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,r=s&&s.x,i=s&&s.y;if(r||i){const o=Bi[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Qm(this,t),c=Object.assign({},o,this._size),l=Xm(e,t,c),d=Jm(t,c,l,e);(r._to!==d.x||i._to!==d.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const r={width:this.width,height:this.height},i={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const o=Ae(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=s,this.drawBackground(i,t,r,e),Ov(t,e.textDirection),i.y+=o.top,this.drawTitle(i,t,e),this.drawBody(i,t,e),this.drawFooter(i,t,e),Nv(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,r=t.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),i=!fc(s,r),o=this._positionChanged(r,e);(i||o)&&(this._active=r,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const r=this.options,i=this._active||[],o=this._getActiveElements(t,i,e,s),a=this._positionChanged(o,t),c=e||!fc(o,i)||a;return c&&(this._active=o,(r.enabled||r.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,s,r){const i=this.options;if(t.type==="mouseout")return[];if(!r)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,i.mode,i,s);return i.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:s,caretY:r,options:i}=this,o=Bi[i.position].call(this,t,e);return o!==!1&&(s!==o.x||r!==o.y)}}N(Hu,"positioners",Bi);var uD={id:"tooltip",_element:Hu,positioners:Bi,afterInit(n,t,e){e&&(n.tooltip=new Hu({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:cb},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},dD=Object.freeze({__proto__:null,Colors:EP,Decimation:kP,Filler:GP,Legend:ZP,SubTitle:nD,Title:eD,Tooltip:uD});const hD=(n,t,e,s)=>(typeof t=="string"?(e=n.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function fD(n,t,e,s){const r=n.indexOf(t);if(r===-1)return hD(n,t,e,s);const i=n.lastIndexOf(t);return r!==i?e:r}const pD=(n,t)=>n===null?null:ce(Math.round(n),0,t);function eg(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class qu extends ir{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:r,label:i}of e)s[r]===i&&s.splice(r,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(ct(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:fD(s,t,rt(e,t),this._addedLabels),pD(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:r}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(r=this.getLabels().length-1)),this.min=s,this.max=r}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,r=[];let i=this.getLabels();i=t===0&&e===i.length-1?i:i.slice(t,e+1),this._valueRange=Math.max(i.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let o=t;o<=e;o++)r.push({value:o});return r}getLabelForValue(t){return eg.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}N(qu,"id","category"),N(qu,"defaults",{ticks:{callback:eg}});function mD(n,t){const e=[],{bounds:r,step:i,min:o,max:a,precision:c,count:l,maxTicks:d,maxDigits:h,includeBounds:f}=n,m=i||1,g=d-1,{min:v,max:y}=t,E=!ct(o),A=!ct(a),C=!ct(l),D=(y-v)/(h+1);let R=Qp((y-v)/g/m)*m,M,T,b,x;if(R<1e-14&&!E&&!A)return[{value:v},{value:y}];x=Math.ceil(y/R)-Math.floor(v/R),x>g&&(R=Qp(x*R/g/m)*m),ct(c)||(M=Math.pow(10,c),R=Math.ceil(R*M)/M),r==="ticks"?(T=Math.floor(v/R)*R,b=Math.ceil(y/R)*R):(T=v,b=y),E&&A&&i&&cS((a-o)/i,R/1e3)?(x=Math.round(Math.min((a-o)/R,d)),R=(a-o)/x,T=o,b=a):C?(T=E?o:T,b=A?a:b,x=l-1,R=(b-T)/x):(x=(b-T)/R,Qi(x,Math.round(x),R/1e3)?x=Math.round(x):x=Math.ceil(x));const I=Math.max(Xp(R),Xp(T));M=Math.pow(10,ct(c)?I:c),T=Math.round(T*M)/M,b=Math.round(b*M)/M;let S=0;for(E&&(f&&T!==o?(e.push({value:o}),T<o&&S++,Qi(Math.round((T+S*R)*M)/M,o,ng(o,D,n))&&S++):T<o&&S++);S<x;++S){const P=Math.round((T+S*R)*M)/M;if(A&&P>a)break;e.push({value:P})}return A&&f&&b!==a?e.length&&Qi(e[e.length-1].value,a,ng(a,D,n))?e[e.length-1].value=a:e.push({value:a}):(!A||b===a)&&e.push({value:b}),e}function ng(n,t,{horizontal:e,minRotation:s}){const r=Ke(s),i=(e?Math.sin(r):Math.cos(r))||.001,o=.75*t*(""+n).length;return Math.min(t/i,o)}class bc extends ir{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return ct(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:r,max:i}=this;const o=c=>r=e?r:c,a=c=>i=s?i:c;if(t){const c=pn(r),l=pn(i);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(r===i){let c=i===0?1:Math.abs(i*.05);a(i+c),t||o(r-c)}this.min=r,this.max=i}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,r;return s?(r=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,r>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${r} ticks. Limiting to 1000.`),r=1e3)):(r=this.computeTickLimit(),e=e||11),e&&(r=Math.min(e,r)),r}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const r={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},i=this._range||this,o=mD(r,i);return t.bounds==="ticks"&&_v(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const r=(s-e)/Math.max(t.length-1,1)/2;e-=r,s+=r}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return Bo(t,this.chart.options.locale,this.options.ticks.format)}}class Wu extends bc{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Ht(t)?t:0,this.max=Ht(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=Ke(this.options.ticks.minRotation),r=(t?Math.sin(s):Math.cos(s))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,i.lineHeight/r))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}N(Wu,"id","linear"),N(Wu,"defaults",{ticks:{callback:tl.formatters.numeric}});const vo=n=>Math.floor(es(n)),As=(n,t)=>Math.pow(10,vo(n)+t);function sg(n){return n/Math.pow(10,vo(n))===1}function rg(n,t,e){const s=Math.pow(10,e),r=Math.floor(n/s);return Math.ceil(t/s)-r}function gD(n,t){const e=t-n;let s=vo(e);for(;rg(n,t,s)>10;)s++;for(;rg(n,t,s)<10;)s--;return Math.min(s,vo(n))}function _D(n,{min:t,max:e}){t=Le(n.min,t);const s=[],r=vo(t);let i=gD(t,e),o=i<0?Math.pow(10,Math.abs(i)):1;const a=Math.pow(10,i),c=r>i?Math.pow(10,r):0,l=Math.round((t-c)*o)/o,d=Math.floor((t-c)/a/10)*a*10;let h=Math.floor((l-d)/Math.pow(10,i)),f=Le(n.min,Math.round((c+d+h*Math.pow(10,i))*o)/o);for(;f<e;)s.push({value:f,major:sg(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(i++,h=2,o=i>=0?1:o),f=Math.round((c+d+h*Math.pow(10,i))*o)/o;const m=Le(n.max,f);return s.push({value:m,major:sg(m),significand:h}),s}class Gu extends ir{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=bc.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return Ht(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Ht(t)?Math.max(0,t):null,this.max=Ht(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Ht(this._userMin)&&(this.min=t===As(this.min,0)?As(this.min,-1):As(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,r=this.max;const i=a=>s=t?s:a,o=a=>r=e?r:a;s===r&&(s<=0?(i(1),o(10)):(i(As(s,-1)),o(As(r,1)))),s<=0&&i(As(r,-1)),r<=0&&o(As(s,1)),this.min=s,this.max=r}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=_D(e,this);return t.bounds==="ticks"&&_v(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":Bo(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=es(t),this._valueRange=es(this.max)-es(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(es(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}N(Gu,"id","logarithmic"),N(Gu,"defaults",{ticks:{callback:tl.formatters.logarithmic,major:{enabled:!0}}});function Yu(n){const t=n.ticks;if(t.display&&n.display){const e=Ae(t.backdropPadding);return rt(t.font&&t.font.size,$t.font.size)+e.height}return 0}function yD(n,t,e){return e=Vt(e)?e:[e],{w:IS(n,t.string,e),h:e.length*t.lineHeight}}function ig(n,t,e,s,r){return n===s||n===r?{start:t-e/2,end:t+e/2}:n<s||n>r?{start:t-e,end:t}:{start:t,end:t+e}}function vD(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),s=[],r=[],i=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?vt/i:0;for(let c=0;c<i;c++){const l=o.setContext(n.getPointLabelContext(c));r[c]=l.padding;const d=n.getPointPosition(c,n.drawingArea+r[c],a),h=se(l.font),f=yD(n.ctx,h,n._pointLabels[c]);s[c]=f;const m=xe(n.getIndexAngle(c)+a),g=Math.round(sh(m)),v=ig(g,d.x,f.w,0,180),y=ig(g,d.y,f.h,90,270);bD(e,t,m,v,y)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=ED(n,s,r)}function bD(n,t,e,s,r){const i=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,c=0;s.start<t.l?(a=(t.l-s.start)/i,n.l=Math.min(n.l,t.l-a)):s.end>t.r&&(a=(s.end-t.r)/i,n.r=Math.max(n.r,t.r+a)),r.start<t.t?(c=(t.t-r.start)/o,n.t=Math.min(n.t,t.t-c)):r.end>t.b&&(c=(r.end-t.b)/o,n.b=Math.max(n.b,t.b+c))}function xD(n,t,e){const s=n.drawingArea,{extra:r,additionalAngle:i,padding:o,size:a}=e,c=n.getPointPosition(t,s+r+o,i),l=Math.round(sh(xe(c.angle+Qt))),d=AD(c.y,a.h,l),h=TD(l),f=ID(c.x,a.w,h);return{visible:!0,x:c.x,y:d,textAlign:h,left:f,top:d,right:f+a.w,bottom:d+a.h}}function wD(n,t){if(!t)return!0;const{left:e,top:s,right:r,bottom:i}=n;return!(Pn({x:e,y:s},t)||Pn({x:e,y:i},t)||Pn({x:r,y:s},t)||Pn({x:r,y:i},t))}function ED(n,t,e){const s=[],r=n._pointLabels.length,i=n.options,{centerPointLabels:o,display:a}=i.pointLabels,c={extra:Yu(i)/2,additionalAngle:o?vt/r:0};let l;for(let d=0;d<r;d++){c.padding=e[d],c.size=t[d];const h=xD(n,d,c);s.push(h),a==="auto"&&(h.visible=wD(h,l),h.visible&&(l=h))}return s}function TD(n){return n===0||n===180?"center":n<180?"left":"right"}function ID(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function AD(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function kD(n,t,e){const{left:s,top:r,right:i,bottom:o}=e,{backdropColor:a}=t;if(!ct(a)){const c=Fs(t.borderRadius),l=Ae(t.backdropPadding);n.fillStyle=a;const d=s-l.left,h=r-l.top,f=i-s+l.width,m=o-r+l.height;Object.values(c).some(g=>g!==0)?(n.beginPath(),_o(n,{x:d,y:h,w:f,h:m,radius:c}),n.fill()):n.fillRect(d,h,f,m)}}function SD(n,t){const{ctx:e,options:{pointLabels:s}}=n;for(let r=t-1;r>=0;r--){const i=n._pointLabelItems[r];if(!i.visible)continue;const o=s.setContext(n.getPointLabelContext(r));kD(e,o,i);const a=se(o.font),{x:c,y:l,textAlign:d}=i;Zs(e,n._pointLabels[r],c,l+a.lineHeight/2,a,{color:o.color,textAlign:d,textBaseline:"middle"})}}function lb(n,t,e,s){const{ctx:r}=n;if(e)r.arc(n.xCenter,n.yCenter,t,0,Nt);else{let i=n.getPointPosition(0,t);r.moveTo(i.x,i.y);for(let o=1;o<s;o++)i=n.getPointPosition(o,t),r.lineTo(i.x,i.y)}}function CD(n,t,e,s,r){const i=n.ctx,o=t.circular,{color:a,lineWidth:c}=t;!o&&!s||!a||!c||e<0||(i.save(),i.strokeStyle=a,i.lineWidth=c,i.setLineDash(r.dash||[]),i.lineDashOffset=r.dashOffset,i.beginPath(),lb(n,e,o,s),i.closePath(),i.stroke(),i.restore())}function RD(n,t,e){return ys(n,{label:e,index:t,type:"pointLabel"})}class Ui extends bc{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Ae(Yu(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=Ht(t)&&!isNaN(t)?t:0,this.max=Ht(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Yu(this.options))}generateTickLabels(t){bc.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const r=Pt(this.options.pointLabels.callback,[e,s],this);return r||r===0?r:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?vD(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,r){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,r))}getIndexAngle(t){const e=Nt/(this._pointLabels.length||1),s=this.options.startAngle||0;return xe(t*e+Ke(s))}getDistanceFromCenterForValue(t){if(ct(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(ct(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return RD(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const r=this.getIndexAngle(t)-Qt+s;return{x:Math.cos(r)*e+this.xCenter,y:Math.sin(r)*e+this.yCenter,angle:r}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:r,bottom:i}=this._pointLabelItems[t];return{left:e,top:s,right:r,bottom:i}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),lb(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:r,border:i}=e,o=this._pointLabels.length;let a,c,l;if(e.pointLabels.display&&SD(this,o),r.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){c=this.getDistanceFromCenterForValue(d.value);const f=this.getContext(h),m=r.setContext(f),g=i.setContext(f);CD(this,m,c,o,g)}}),s.display){for(t.save(),a=o-1;a>=0;a--){const d=s.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=d;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),l=this.getPointPosition(a,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const r=this.getIndexAngle(0);let i,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(r),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const l=s.setContext(this.getContext(c)),d=se(l.font);if(i=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){t.font=d.string,o=t.measureText(a.label).width,t.fillStyle=l.backdropColor;const h=Ae(l.backdropPadding);t.fillRect(-o/2-h.left,-i-d.size/2-h.top,o+h.width,d.size+h.height)}Zs(t,a.label,0,-i,d,{color:l.color,strokeColor:l.textStrokeColor,strokeWidth:l.textStrokeWidth})}),t.restore()}drawTitle(){}}N(Ui,"id","radialLinear"),N(Ui,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:tl.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),N(Ui,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),N(Ui,"descriptors",{angleLines:{_fallback:"grid"}});const ol={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Me=Object.keys(ol);function og(n,t){return n-t}function ag(n,t){if(ct(t))return null;const e=n._adapter,{parser:s,round:r,isoWeekday:i}=n._parseOpts;let o=t;return typeof s=="function"&&(o=s(o)),Ht(o)||(o=typeof s=="string"?e.parse(o,s):e.parse(o)),o===null?null:(r&&(o=r==="week"&&(jr(i)||i===!0)?e.startOf(o,"isoWeek",i):e.startOf(o,r)),+o)}function cg(n,t,e,s){const r=Me.length;for(let i=Me.indexOf(n);i<r-1;++i){const o=ol[Me[i]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=s)return Me[i]}return Me[r-1]}function PD(n,t,e,s,r){for(let i=Me.length-1;i>=Me.indexOf(e);i--){const o=Me[i];if(ol[o].common&&n._adapter.diff(r,s,o)>=t-1)return o}return Me[e?Me.indexOf(e):0]}function DD(n){for(let t=Me.indexOf(n)+1,e=Me.length;t<e;++t)if(ol[Me[t]].common)return Me[t]}function lg(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:s,hi:r}=rh(e,t),i=e[s]>=t?e[s]:e[r];n[i]=!0}}function MD(n,t,e,s){const r=n._adapter,i=+r.startOf(t[0].value,s),o=t[t.length-1].value;let a,c;for(a=i;a<=o;a=+r.add(a,1,s))c=e[a],c>=0&&(t[c].major=!0);return t}function ug(n,t,e){const s=[],r={},i=t.length;let o,a;for(o=0;o<i;++o)a=t[o],r[a]=o,s.push({value:a,major:!1});return i===0||!e?s:MD(n,s,r,e)}class bo extends ir{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),r=this._adapter=new zv._date(t.adapters.date);r.init(e),Ki(s.displayFormats,r.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:ag(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:r,max:i,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(r=Math.min(r,l.min)),!a&&!isNaN(l.max)&&(i=Math.max(i,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),r=Ht(r)&&!isNaN(r)?r:+e.startOf(Date.now(),s),i=Ht(i)&&!isNaN(i)?i:+e.endOf(Date.now(),s)+1,this.min=Math.min(r,i-1),this.max=Math.max(r+1,i)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,r=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);const i=this.min,o=this.max,a=hS(r,i,o);return this._unit=e.unit||(s.autoSkip?cg(e.minUnit,this.min,this.max,this._getLabelCapacity(i)):PD(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:DD(this._unit),this.initOffsets(r),t.reverse&&a.reverse(),ug(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,r,i;this.options.offset&&t.length&&(r=this.getDecimalForValue(t[0]),t.length===1?e=1-r:e=(this.getDecimalForValue(t[1])-r)/2,i=this.getDecimalForValue(t[t.length-1]),t.length===1?s=i:s=(i-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=ce(e,0,o),s=ce(s,0,o),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,r=this.options,i=r.time,o=i.unit||cg(i.minUnit,e,s,this._getLabelCapacity(e)),a=rt(r.ticks.stepSize,1),c=o==="week"?i.isoWeekday:!1,l=jr(c)||c===!0,d={};let h=e,f,m;if(l&&(h=+t.startOf(h,"isoWeek",c)),h=+t.startOf(h,l?"day":o),t.diff(s,e,o)>1e5*a)throw new Error(e+" and "+s+" are too far apart with stepSize of "+a+" "+o);const g=r.ticks.source==="data"&&this.getDataTimestamps();for(f=h,m=0;f<s;f=+t.add(f,a,o),m++)lg(d,f,g);return(f===s||r.bounds==="ticks"||m===1)&&lg(d,f,g),Object.keys(d).sort(og).map(v=>+v)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const r=this.options.time.displayFormats,i=this._unit,o=e||r[i];return this._adapter.format(t,o)}_tickFormatFunction(t,e,s,r){const i=this.options,o=i.ticks.callback;if(o)return Pt(o,[t,e,s],this);const a=i.time.displayFormats,c=this._unit,l=this._majorUnit,d=c&&a[c],h=l&&a[l],f=s[e],m=l&&h&&f&&f.major;return this._adapter.format(t,r||(m?h:d))}generateTickLabels(t){let e,s,r;for(e=0,s=t.length;e<s;++e)r=t[e],r.label=this._tickFormatFunction(r.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,r=Ke(this.isHorizontal()?e.maxRotation:e.minRotation),i=Math.cos(r),o=Math.sin(r),a=this._resolveTickFontOptions(0).size;return{w:s*i+a*o,h:s*o+a*i}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,r=s[e.unit]||s.millisecond,i=this._tickFormatFunction(t,0,ug(this,[t],this._majorUnit),r),o=this._getLabelSize(i),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(e=0,s=r.length;e<s;++e)t=t.concat(r[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const r=this.getLabels();for(e=0,s=r.length;e<s;++e)t.push(ag(this,r[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return bv(t.sort(og))}}N(bo,"id","time"),N(bo,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function ka(n,t,e){let s=0,r=n.length-1,i,o,a,c;e?(t>=n[s].pos&&t<=n[r].pos&&({lo:s,hi:r}=Rn(n,"pos",t)),{pos:i,time:a}=n[s],{pos:o,time:c}=n[r]):(t>=n[s].time&&t<=n[r].time&&({lo:s,hi:r}=Rn(n,"time",t)),{time:i,pos:a}=n[s],{time:o,pos:c}=n[r]);const l=o-i;return l?a+(c-a)*(t-i)/l:a}class Ku extends bo{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=ka(e,this.min),this._tableRange=ka(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,r=[],i=[];let o,a,c,l,d;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=s&&r.push(l);if(r.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(o=0,a=r.length;o<a;++o)d=r[o+1],c=r[o-1],l=r[o],Math.round((d+c)/2)!==l&&i.push({time:l,pos:o/(a-1)});return i}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((r,i)=>r-i)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(ka(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return ka(this._table,s*this._tableRange+this._minPos,!0)}}N(Ku,"id","timeseries"),N(Ku,"defaults",bo.defaults);var OD=Object.freeze({__proto__:null,CategoryScale:qu,LinearScale:Wu,LogarithmicScale:Gu,RadialLinearScale:Ui,TimeScale:bo,TimeSeriesScale:Ku});const ND=[UC,gP,dD,OD];mt.register(...ND);const Ii="rgba(255,255,255,0.08)",gr="#a1a1aa",Ge={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};mt.defaults.color="#e5e5e5";mt.defaults.font.family=Ge.family;mt.defaults.font.weight=Ge.weight;const Ai={renderCurvaS:(n,t=[],e=[],s=[])=>{const r=document.getElementById(n);if(!r)return;r.chart&&r.chart.destroy();const i=s.length?s:t.map((o,a)=>`M${a+1}`);r.chart=new mt(r,{type:"line",data:{labels:i,datasets:[{label:"Planejado",data:t,borderColor:"#16a34a",backgroundColor:"rgba(34, 197, 94, 0.15)",tension:.35,fill:!0,borderWidth:3},{label:"Realizado",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.05)",tension:.35,fill:!0,borderWidth:3}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Ge,usePointStyle:!0}}},scales:{x:{grid:{color:Ii},ticks:{color:gr,font:Ge}},y:{grid:{color:Ii},ticks:{color:gr,font:Ge}}}}})},renderGastosPorMes:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),r=s.map(i=>t[i]);e.chart&&e.chart.destroy(),e.chart=new mt(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:r,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Ii},ticks:{color:gr,font:Ge}},y:{grid:{color:Ii},ticks:{color:gr,font:Ge}}}}})},renderStatusPie:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),r=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new mt(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Ge,padding:12,usePointStyle:!0}}}}})},renderNatureza:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),r=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new mt(e,{type:"bar",data:{labels:s,datasets:[{label:"Por Natureza",data:r,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:gr,font:Ge}},y:{grid:{color:Ii},ticks:{color:gr,font:Ge,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}}}})},renderCentrosCusto:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),r=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new mt(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e","#0ea5e9","#f59e0b"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:Ge,padding:12,usePointStyle:!0}}}}})}},lt={render:n=>{const t=document.getElementById("app"),e=At.state.currentUser;if(!e){t.innerHTML=n;return}const s=At.state.sidebarCollapsed,r=At.state.currentTheme;t.innerHTML=`
            <div class="flex h-screen bg-canvas text-text transition-colors duration-200">
                <!-- Sidebar -->
                <aside id="sidebar" class="${s?"w-20":"w-64"} bg-surface border-r border-border flex flex-col transition-all duration-300 z-20 hidden md:flex shadow-heavy">
                    <div class="h-16 flex items-center justify-center border-b border-border">
                        <span class="text-2xl font-display text-primary">AXEL</span>
                        <span data-logo-text class="${s?"hidden":"ml-2 text-text font-display tracking-wide"}">GESTÃO</span>
                    </div>

                    <nav class="flex-1 overflow-y-auto py-4 space-y-1 px-3">
                        ${lt.createNavItem("/","Dashboard",Mt.dashboard,s)}
                        ${lt.createNavItem("/compras","Compras",Mt.shoppingCart,s)}
                        ${lt.createNavItem("/relatorios","Relatórios",Mt.clipboard,s)}
                        ${lt.createNavItem("/obras","Obras",Mt.chart,s)}
                        ${lt.createNavItem("/cadastros","Cadastros",Mt.settings,s)}
                        <div class="pt-4 mt-4 border-t border-border">
                            ${lt.createNavItem("/configuracoes","Configurações",Mt.settings,s)}
                        </div>
                    </nav>

                    <div class="p-4 border-t border-border">
                        <button id="btn-logout" class="flex items-center gap-3 text-text-muted hover:text-alert w-full p-2 rounded transition-colors uppercase tracking-wide font-display">
                            ${Mt.logout}
                            <span class="${s?"hidden":""}">Sair</span>
                        </button>
                    </div>
                </aside>

                <!-- Mobile Sidebar Backdrop -->
                <div id="sidebar-backdrop" class="fixed inset-0 bg-black/50 z-10 hidden md:hidden glass"></div>

                <!-- Main Content -->
                <div class="flex-1 flex flex-col overflow-hidden">
                    <!-- Header -->
                    <header class="h-16 bg-surface border-b border-border flex items-center justify-between px-4 md:px-6 z-10 shadow-heavy">
                        <div class="flex items-center gap-4">
                            <button id="btn-toggle-sidebar" class="text-text-muted hover:text-primary focus:outline-none">
                                ${Mt.menu}
                            </button>
                            
                            <!-- Global Search -->
                            <div class="relative hidden md:block w-96">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-text-muted">
                                    ${Mt.search}
                                </span>
                                <input 
                                    type="text" 
                                    id="global-search"
                                    placeholder="Buscar (Ctrl+K)..." 
                                    class="w-full pl-10 pr-4 py-2 bg-canvas border border-border rounded text-text text-sm focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-text-muted"
                                >
                            </div>
                        </div>

                        <div class="flex items-center gap-4">
                            <!-- Notifications -->
                            <div id="notifications-container" class="relative"></div>
                            
                            <button id="btn-theme-toggle" class="text-text-muted hover:text-primary transition-colors">
                                ${r==="dark"?Mt.sun:Mt.moon}
                            </button>
                            
                            <div class="flex items-center gap-3 pl-4 border-l border-border">
                                <div class="text-right hidden sm:block">
                                    <p class="text-sm font-display text-text">${e.nome||e.email}</p>
                                    <p class="text-xs text-text-muted capitalize">${e.role||"Usuário"}</p>
                                </div>
                                <div class="h-8 w-8 rounded bg-primary flex items-center justify-center text-canvas font-bold shadow-heavy">
                                    ${(e.nome||e.email||"U").charAt(0).toUpperCase()}
                                </div>
                            </div>
                        </div>
                    </header>

                    <!-- Page Content -->
                    <main class="flex-1 overflow-auto p-4 md:p-6 relative bg-canvas">
                        ${n}
                    </main>
                </div>
            </div>
        `,lt.bindEvents(),window.dispatchEvent(new CustomEvent("layout:rendered"))},createNavItem:(n,t,e,s)=>{var o;const i=Et.currentRoute===n||((o=Et.currentRoute)==null?void 0:o.startsWith(`${n}/`))?"text-primary accent-left bg-surface shadow-heavy":"text-text-muted hover:text-text hover:bg-canvas";return`
            <a href="#${n}" class="flex items-center gap-3 px-3 py-2 rounded transition-colors mb-1 border border-transparent ${i}" title="${t}">
                ${e}
                <span class="${s?"hidden":"font-display tracking-wide uppercase"}">${t}</span>
            </a>
        `},bindEvents:()=>{var n,t,e;(n=document.getElementById("btn-toggle-sidebar"))==null||n.addEventListener("click",()=>{At.toggleSidebar();const s=document.getElementById("sidebar"),r=s.querySelectorAll("span"),i=s.querySelector("[data-logo-text]");At.state.sidebarCollapsed?(s.classList.remove("w-64"),s.classList.add("w-20"),r.forEach(o=>o.classList.add("hidden")),i&&i.classList.add("hidden")):(s.classList.remove("w-20"),s.classList.add("w-64"),r.forEach(o=>o.classList.remove("hidden")),i&&i.classList.remove("hidden"))}),(t=document.getElementById("btn-theme-toggle"))==null||t.addEventListener("click",()=>{const r=At.state.currentTheme==="dark"?"light":"dark";At.setTheme(r);const i=document.getElementById("btn-theme-toggle");i.innerHTML=r==="dark"?Mt.sun:Mt.moon}),(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",async()=>{try{await hc.logout(),Et.navigate("/login")}catch(s){console.error(s)}}),document.addEventListener("keydown",s=>{var r;(s.ctrlKey||s.metaKey)&&s.key==="k"&&(s.preventDefault(),(r=document.getElementById("global-search"))==null||r.focus())})}},Ye={getObras:async()=>(await bt(gt(J,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getObraById:async n=>{const e=(await bt(gt(J,"obras"))).docs.find(s=>s.id===n);return e?{id:e.id,...e.data()}:null},createObra:async n=>(await sr(gt(J,"obras"),{...n,created_at:new Date().toISOString()})).id,updateObra:async(n,t)=>{await je(ee(J,"obras",n),{...t,updated_at:new Date().toISOString()})},deleteObra:async n=>{await Fd(ee(J,"obras",n))},getObraStats:async(n,t=!1)=>{const e=await Ye.getObraById(n),s=gt(J,"compras"),r=Yt(s,Rt("obraId","==",n)),o=(await bt(r)).docs.map(j=>({id:j.id,...j.data()}));let a=0,c=Number((e==null?void 0:e.valor_orcado)||0);const l={},d={},h={},f={},m={};let g=null,v=null,y=0,E=0,A=0,C=0,D=0;const R={},M={},T=(j="")=>{const B=(j||"").toLowerCase();return B.includes("desperd")?"Desperd�cio":B.includes("lista")||B.includes("inicial")?"Lista inicial":"Material adicional"},b=j=>{const B=new Date(j.getTime()),V=(B.getDay()+6)%7;B.setDate(B.getDate()-V+3);const q=B.getTime();B.setMonth(0,1),B.getDay()!==4&&B.setMonth(0,1+(4-B.getDay()+7)%7);const W=1+Math.ceil((q-B)/6048e5);return`${B.getFullYear()}-W${String(W).padStart(2,"0")}`};o.forEach(j=>{const B=Number(j.valor_total??j.valor_estimado??0);a+=B,l[j.status_compra]=(l[j.status_compra]||0)+1;const V=j.previsao_entrega?new Date(j.previsao_entrega):null,q=j.data_recebimento?new Date(j.data_recebimento):null;if(j.status_compra!=="Entregue"&&V&&V<new Date&&y++,q&&V&&(E++,q<=V&&A++),j.data_emissao&&(q||V)){const K=q||V,wt=Math.max(0,(new Date(K)-new Date(j.data_emissao))/(1e3*60*60*24));C+=wt,D++}const W=T(j.natureza_compra||j.categoria||"Outros");d[W]=(d[W]||0)+B;const tt=(j.natureza_compra||"Outros").trim();R[tt]=(R[tt]||0)+B;const at=j.centroCustoNome||j.centro_custo||j.centroCustoId||"N/D";M[at]=(M[at]||0)+B;const ht=j.data_recebimento||j.data_emissao||j.previsao_entrega||j.data_solicitacao;if(ht){const K=new Date(ht);if(!Number.isNaN(K.getTime())){(!g||K<g)&&(g=K),(!v||K>v)&&(v=K);const wt=`${K.getFullYear()}-${String(K.getMonth()+1).padStart(2,"0")}`;h[wt]=(h[wt]||0)+B;const St=K.toISOString().split("T")[0];f[St]=(f[St]||0)+B;const ue=b(K);m[ue]=(m[ue]||0)+B}}});const x=Number(c||0)||a,I=Ye.calculateCurvaS(x,m,{start:(e==null?void 0:e.data_prevista_inicio)||(e==null?void 0:e.data_inicio)||g,end:(e==null?void 0:e.data_prevista_fim)||(e==null?void 0:e.data_fim)||v}),S=E?A/E*100:0,P=D?C/D:0,k=[...o].sort((j,B)=>{const V=j.data_solicitacao||j.data_emissao||"";return(B.data_solicitacao||B.data_emissao||"").localeCompare(V)}),X={totalCompras:o.length,totalGasto:a,porStatus:l,gastosPorCategoria:d,gastosMensais:h,gastosDiarios:f,curvaS:I,comprasRecentes:k.slice(0,10),comprasCalendar:k,atrasos:y,sla:S,lead:P,naturezaTotais:R,ccTotais:M};if(t)try{const{RDOService:j}=await ho(async()=>{const{RDOService:B}=await Promise.resolve().then(()=>Lb);return{RDOService:B}},void 0);if(e!=null&&e.numero_os){const B=new Date().toISOString().split("T")[0],V=new Date(Date.now()-30*24*60*60*1e3).toISOString().split("T")[0],q=await j.getByObra(e.numero_os,V,B);q&&q.length>0&&(X.rdoData=j.processRDOData(q))}}catch(j){console.warn("Erro ao buscar dados RDO:",j)}return X},calculateCurvaS:(n,t,{start:e,end:s}={})=>{const r=[],i=[],o=[];let a=0;const c=24*60*60*1e3,l=[],d=e?new Date(e):null,h=s?new Date(s):null;if(d&&!Number.isNaN(d)&&h&&!Number.isNaN(h)&&d<=h){const m=new Date(d);m.setHours(12,0,0,0);const g=m.getDay(),v=g===0?-6:1-g;for(m.setDate(m.getDate()+v);m<=h;){const y=m.getFullYear(),E=new Date(y,0,1),A=Math.floor((m-E)/c),C=Math.ceil((A+E.getDay()+1)/7);l.push(`${y}-W${String(C).padStart(2,"0")}`),m.setDate(m.getDate()+7)}}else l.push(...Object.keys(t).sort());const f=l.length||1;return l.forEach((m,g)=>{const v=(g+1)/f,y=1/(1+Math.exp(-10*(v-.5)));r.push(n*y),t[m]&&(a+=t[m]),i.push(a),o.push(m)}),{planejado:r,realizado:i,labels:o}}},LD=Object.freeze(Object.defineProperty({__proto__:null,ObrasService:Ye},Symbol.toStringTag,{value:"Module"})),ub=6048e5,VD=864e5,Uo=6e4,jo=36e5,FD=1e3,dg=Symbol.for("constructDateFrom");function Wt(n,t){return typeof n=="function"?n(t):n&&typeof n=="object"&&dg in n?n[dg](t):n instanceof Date?new n.constructor(t):new Date(t)}function ot(n,t){return Wt(t||n,n)}function al(n,t,e){const s=ot(n,e==null?void 0:e.in);return isNaN(t)?Wt((e==null?void 0:e.in)||n,NaN):(t&&s.setDate(s.getDate()+t),s)}function mh(n,t,e){const s=ot(n,e==null?void 0:e.in);if(isNaN(t))return Wt(n,NaN);if(!t)return s;const r=s.getDate(),i=Wt(n,s.getTime());i.setMonth(s.getMonth()+t+1,0);const o=i.getDate();return r>=o?i:(s.setFullYear(i.getFullYear(),i.getMonth(),r),s)}function gh(n,t,e){return Wt(n,+ot(n)+t)}function $D(n,t,e){return gh(n,t*jo)}let BD={};function or(){return BD}function gn(n,t){var a,c,l,d;const e=or(),s=(t==null?void 0:t.weekStartsOn)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??e.weekStartsOn??((d=(l=e.locale)==null?void 0:l.options)==null?void 0:d.weekStartsOn)??0,r=ot(n,t==null?void 0:t.in),i=r.getDay(),o=(i<s?7:0)+i-s;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r}function qr(n,t){return gn(n,{...t,weekStartsOn:1})}function db(n,t){const e=ot(n,t==null?void 0:t.in),s=e.getFullYear(),r=Wt(e,0);r.setFullYear(s+1,0,4),r.setHours(0,0,0,0);const i=qr(r),o=Wt(e,0);o.setFullYear(s,0,4),o.setHours(0,0,0,0);const a=qr(o);return e.getTime()>=i.getTime()?s+1:e.getTime()>=a.getTime()?s:s-1}function xc(n){const t=ot(n),e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+n-+e}function ar(n,...t){const e=Wt.bind(null,t.find(s=>typeof s=="object"));return t.map(e)}function Qu(n,t){const e=ot(n,t==null?void 0:t.in);return e.setHours(0,0,0,0),e}function hb(n,t,e){const[s,r]=ar(e==null?void 0:e.in,n,t),i=Qu(s),o=Qu(r),a=+i-xc(i),c=+o-xc(o);return Math.round((a-c)/VD)}function UD(n,t){const e=db(n,t),s=Wt(n,0);return s.setFullYear(e,0,4),s.setHours(0,0,0,0),qr(s)}function jD(n,t,e){const s=ot(n,e==null?void 0:e.in);return s.setTime(s.getTime()+t*Uo),s}function zD(n,t,e){return mh(n,t*3,e)}function HD(n,t,e){return gh(n,t*1e3)}function qD(n,t,e){return al(n,t*7,e)}function WD(n,t,e){return mh(n,t*12,e)}function to(n,t){const e=+ot(n)-+ot(t);return e<0?-1:e>0?1:e}function GD(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function fb(n){return!(!GD(n)&&typeof n!="number"||isNaN(+ot(n)))}function YD(n,t,e){const[s,r]=ar(e==null?void 0:e.in,n,t),i=s.getFullYear()-r.getFullYear(),o=s.getMonth()-r.getMonth();return i*12+o}function KD(n,t,e){const[s,r]=ar(e==null?void 0:e.in,n,t);return s.getFullYear()-r.getFullYear()}function pb(n,t,e){const[s,r]=ar(e==null?void 0:e.in,n,t),i=hg(s,r),o=Math.abs(hb(s,r));s.setDate(s.getDate()-i*o);const a=+(hg(s,r)===-i),c=i*(o-a);return c===0?0:c}function hg(n,t){const e=n.getFullYear()-t.getFullYear()||n.getMonth()-t.getMonth()||n.getDate()-t.getDate()||n.getHours()-t.getHours()||n.getMinutes()-t.getMinutes()||n.getSeconds()-t.getSeconds()||n.getMilliseconds()-t.getMilliseconds();return e<0?-1:e>0?1:e}function zo(n){return t=>{const s=(n?Math[n]:Math.trunc)(t);return s===0?0:s}}function QD(n,t,e){const[s,r]=ar(e==null?void 0:e.in,n,t),i=(+s-+r)/jo;return zo(e==null?void 0:e.roundingMethod)(i)}function _h(n,t){return+ot(n)-+ot(t)}function XD(n,t,e){const s=_h(n,t)/Uo;return zo(e==null?void 0:e.roundingMethod)(s)}function mb(n,t){const e=ot(n,t==null?void 0:t.in);return e.setHours(23,59,59,999),e}function gb(n,t){const e=ot(n,t==null?void 0:t.in),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(23,59,59,999),e}function JD(n,t){const e=ot(n,t==null?void 0:t.in);return+mb(e,t)==+gb(e,t)}function _b(n,t,e){const[s,r,i]=ar(e==null?void 0:e.in,n,n,t),o=to(r,i),a=Math.abs(YD(r,i));if(a<1)return 0;r.getMonth()===1&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-o*a);let c=to(r,i)===-o;JD(s)&&a===1&&to(s,i)===1&&(c=!1);const l=o*(a-+c);return l===0?0:l}function ZD(n,t,e){const s=_b(n,t,e)/3;return zo(e==null?void 0:e.roundingMethod)(s)}function t2(n,t,e){const s=_h(n,t)/1e3;return zo(e==null?void 0:e.roundingMethod)(s)}function e2(n,t,e){const s=pb(n,t,e)/7;return zo(e==null?void 0:e.roundingMethod)(s)}function n2(n,t,e){const[s,r]=ar(e==null?void 0:e.in,n,t),i=to(s,r),o=Math.abs(KD(s,r));s.setFullYear(1584),r.setFullYear(1584);const a=to(s,r)===-i,c=i*(o-+a);return c===0?0:c}function s2(n,t){const e=ot(n,t==null?void 0:t.in),s=e.getMonth(),r=s-s%3;return e.setMonth(r,1),e.setHours(0,0,0,0),e}function r2(n,t){const e=ot(n,t==null?void 0:t.in);return e.setDate(1),e.setHours(0,0,0,0),e}function i2(n,t){const e=ot(n,t==null?void 0:t.in),s=e.getFullYear();return e.setFullYear(s+1,0,0),e.setHours(23,59,59,999),e}function yb(n,t){const e=ot(n,t==null?void 0:t.in);return e.setFullYear(e.getFullYear(),0,1),e.setHours(0,0,0,0),e}function o2(n,t){const e=ot(n,t==null?void 0:t.in);return e.setMinutes(59,59,999),e}function a2(n,t){var a,c;const e=or(),s=e.weekStartsOn??((c=(a=e.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??0,r=ot(n,t==null?void 0:t.in),i=r.getDay(),o=(i<s?-7:0)+6-(i-s);return r.setDate(r.getDate()+o),r.setHours(23,59,59,999),r}function c2(n,t){const e=ot(n,t==null?void 0:t.in);return e.setSeconds(59,999),e}function l2(n,t){const e=ot(n,t==null?void 0:t.in),s=e.getMonth(),r=s-s%3+3;return e.setMonth(r,0),e.setHours(23,59,59,999),e}function u2(n,t){const e=ot(n,t==null?void 0:t.in);return e.setMilliseconds(999),e}const d2={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},h2=(n,t,e)=>{let s;const r=d2[n];return typeof r=="string"?s=r:t===1?s=r.one:s=r.other.replace("{{count}}",t.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+s:s+" ago":s};function eu(n){return(t={})=>{const e=t.width?String(t.width):n.defaultWidth;return n.formats[e]||n.formats[n.defaultWidth]}}const f2={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},p2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},m2={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},g2={date:eu({formats:f2,defaultWidth:"full"}),time:eu({formats:p2,defaultWidth:"full"}),dateTime:eu({formats:m2,defaultWidth:"full"})},_2={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},y2=(n,t,e,s)=>_2[n];function ki(n){return(t,e)=>{const s=e!=null&&e.context?String(e.context):"standalone";let r;if(s==="formatting"&&n.formattingValues){const o=n.defaultFormattingWidth||n.defaultWidth,a=e!=null&&e.width?String(e.width):o;r=n.formattingValues[a]||n.formattingValues[o]}else{const o=n.defaultWidth,a=e!=null&&e.width?String(e.width):n.defaultWidth;r=n.values[a]||n.values[o]}const i=n.argumentCallback?n.argumentCallback(t):t;return r[i]}}const v2={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},b2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},x2={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},w2={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},E2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},T2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},I2=(n,t)=>{const e=Number(n),s=e%100;if(s>20||s<10)switch(s%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},A2={ordinalNumber:I2,era:ki({values:v2,defaultWidth:"wide"}),quarter:ki({values:b2,defaultWidth:"wide",argumentCallback:n=>n-1}),month:ki({values:x2,defaultWidth:"wide"}),day:ki({values:w2,defaultWidth:"wide"}),dayPeriod:ki({values:E2,defaultWidth:"wide",formattingValues:T2,defaultFormattingWidth:"wide"})};function Si(n){return(t,e={})=>{const s=e.width,r=s&&n.matchPatterns[s]||n.matchPatterns[n.defaultMatchWidth],i=t.match(r);if(!i)return null;const o=i[0],a=s&&n.parsePatterns[s]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(a)?S2(a,h=>h.test(o)):k2(a,h=>h.test(o));let l;l=n.valueCallback?n.valueCallback(c):c,l=e.valueCallback?e.valueCallback(l):l;const d=t.slice(o.length);return{value:l,rest:d}}}function k2(n,t){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&t(n[e]))return e}function S2(n,t){for(let e=0;e<n.length;e++)if(t(n[e]))return e}function C2(n){return(t,e={})=>{const s=t.match(n.matchPattern);if(!s)return null;const r=s[0],i=t.match(n.parsePattern);if(!i)return null;let o=n.valueCallback?n.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;const a=t.slice(r.length);return{value:o,rest:a}}}const R2=/^(\d+)(th|st|nd|rd)?/i,P2=/\d+/i,D2={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},M2={any:[/^b/i,/^(a|c)/i]},O2={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},N2={any:[/1/i,/2/i,/3/i,/4/i]},L2={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},V2={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},F2={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},$2={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},B2={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},U2={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},j2={ordinalNumber:C2({matchPattern:R2,parsePattern:P2,valueCallback:n=>parseInt(n,10)}),era:Si({matchPatterns:D2,defaultMatchWidth:"wide",parsePatterns:M2,defaultParseWidth:"any"}),quarter:Si({matchPatterns:O2,defaultMatchWidth:"wide",parsePatterns:N2,defaultParseWidth:"any",valueCallback:n=>n+1}),month:Si({matchPatterns:L2,defaultMatchWidth:"wide",parsePatterns:V2,defaultParseWidth:"any"}),day:Si({matchPatterns:F2,defaultMatchWidth:"wide",parsePatterns:$2,defaultParseWidth:"any"}),dayPeriod:Si({matchPatterns:B2,defaultMatchWidth:"any",parsePatterns:U2,defaultParseWidth:"any"})},vb={code:"en-US",formatDistance:h2,formatLong:g2,formatRelative:y2,localize:A2,match:j2,options:{weekStartsOn:0,firstWeekContainsDate:1}};function z2(n,t){const e=ot(n,t==null?void 0:t.in);return hb(e,yb(e))+1}function bb(n,t){const e=ot(n,t==null?void 0:t.in),s=+qr(e)-+UD(e);return Math.round(s/ub)+1}function yh(n,t){var d,h,f,m;const e=ot(n,t==null?void 0:t.in),s=e.getFullYear(),r=or(),i=(t==null?void 0:t.firstWeekContainsDate)??((h=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(f=r.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=Wt((t==null?void 0:t.in)||n,0);o.setFullYear(s+1,0,i),o.setHours(0,0,0,0);const a=gn(o,t),c=Wt((t==null?void 0:t.in)||n,0);c.setFullYear(s,0,i),c.setHours(0,0,0,0);const l=gn(c,t);return+e>=+a?s+1:+e>=+l?s:s-1}function H2(n,t){var a,c,l,d;const e=or(),s=(t==null?void 0:t.firstWeekContainsDate)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.firstWeekContainsDate)??e.firstWeekContainsDate??((d=(l=e.locale)==null?void 0:l.options)==null?void 0:d.firstWeekContainsDate)??1,r=yh(n,t),i=Wt((t==null?void 0:t.in)||n,0);return i.setFullYear(r,0,s),i.setHours(0,0,0,0),gn(i,t)}function xb(n,t){const e=ot(n,t==null?void 0:t.in),s=+gn(e,t)-+H2(e,t);return Math.round(s/ub)+1}function Tt(n,t){const e=n<0?"-":"",s=Math.abs(n).toString().padStart(t,"0");return e+s}const Wn={y(n,t){const e=n.getFullYear(),s=e>0?e:1-e;return Tt(t==="yy"?s%100:s,t.length)},M(n,t){const e=n.getMonth();return t==="M"?String(e+1):Tt(e+1,2)},d(n,t){return Tt(n.getDate(),t.length)},a(n,t){const e=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h(n,t){return Tt(n.getHours()%12||12,t.length)},H(n,t){return Tt(n.getHours(),t.length)},m(n,t){return Tt(n.getMinutes(),t.length)},s(n,t){return Tt(n.getSeconds(),t.length)},S(n,t){const e=t.length,s=n.getMilliseconds(),r=Math.trunc(s*Math.pow(10,e-3));return Tt(r,t.length)}},_r={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},fg={G:function(n,t,e){const s=n.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(s,{width:"abbreviated"});case"GGGGG":return e.era(s,{width:"narrow"});case"GGGG":default:return e.era(s,{width:"wide"})}},y:function(n,t,e){if(t==="yo"){const s=n.getFullYear(),r=s>0?s:1-s;return e.ordinalNumber(r,{unit:"year"})}return Wn.y(n,t)},Y:function(n,t,e,s){const r=yh(n,s),i=r>0?r:1-r;if(t==="YY"){const o=i%100;return Tt(o,2)}return t==="Yo"?e.ordinalNumber(i,{unit:"year"}):Tt(i,t.length)},R:function(n,t){const e=db(n);return Tt(e,t.length)},u:function(n,t){const e=n.getFullYear();return Tt(e,t.length)},Q:function(n,t,e){const s=Math.ceil((n.getMonth()+1)/3);switch(t){case"Q":return String(s);case"QQ":return Tt(s,2);case"Qo":return e.ordinalNumber(s,{unit:"quarter"});case"QQQ":return e.quarter(s,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(s,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(s,{width:"wide",context:"formatting"})}},q:function(n,t,e){const s=Math.ceil((n.getMonth()+1)/3);switch(t){case"q":return String(s);case"qq":return Tt(s,2);case"qo":return e.ordinalNumber(s,{unit:"quarter"});case"qqq":return e.quarter(s,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(s,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(s,{width:"wide",context:"standalone"})}},M:function(n,t,e){const s=n.getMonth();switch(t){case"M":case"MM":return Wn.M(n,t);case"Mo":return e.ordinalNumber(s+1,{unit:"month"});case"MMM":return e.month(s,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(s,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(s,{width:"wide",context:"formatting"})}},L:function(n,t,e){const s=n.getMonth();switch(t){case"L":return String(s+1);case"LL":return Tt(s+1,2);case"Lo":return e.ordinalNumber(s+1,{unit:"month"});case"LLL":return e.month(s,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(s,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(s,{width:"wide",context:"standalone"})}},w:function(n,t,e,s){const r=xb(n,s);return t==="wo"?e.ordinalNumber(r,{unit:"week"}):Tt(r,t.length)},I:function(n,t,e){const s=bb(n);return t==="Io"?e.ordinalNumber(s,{unit:"week"}):Tt(s,t.length)},d:function(n,t,e){return t==="do"?e.ordinalNumber(n.getDate(),{unit:"date"}):Wn.d(n,t)},D:function(n,t,e){const s=z2(n);return t==="Do"?e.ordinalNumber(s,{unit:"dayOfYear"}):Tt(s,t.length)},E:function(n,t,e){const s=n.getDay();switch(t){case"E":case"EE":case"EEE":return e.day(s,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(s,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(s,{width:"short",context:"formatting"});case"EEEE":default:return e.day(s,{width:"wide",context:"formatting"})}},e:function(n,t,e,s){const r=n.getDay(),i=(r-s.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return Tt(i,2);case"eo":return e.ordinalNumber(i,{unit:"day"});case"eee":return e.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(r,{width:"short",context:"formatting"});case"eeee":default:return e.day(r,{width:"wide",context:"formatting"})}},c:function(n,t,e,s){const r=n.getDay(),i=(r-s.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return Tt(i,t.length);case"co":return e.ordinalNumber(i,{unit:"day"});case"ccc":return e.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(r,{width:"narrow",context:"standalone"});case"cccccc":return e.day(r,{width:"short",context:"standalone"});case"cccc":default:return e.day(r,{width:"wide",context:"standalone"})}},i:function(n,t,e){const s=n.getDay(),r=s===0?7:s;switch(t){case"i":return String(r);case"ii":return Tt(r,t.length);case"io":return e.ordinalNumber(r,{unit:"day"});case"iii":return e.day(s,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(s,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(s,{width:"short",context:"formatting"});case"iiii":default:return e.day(s,{width:"wide",context:"formatting"})}},a:function(n,t,e){const r=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(n,t,e){const s=n.getHours();let r;switch(s===12?r=_r.noon:s===0?r=_r.midnight:r=s/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(n,t,e){const s=n.getHours();let r;switch(s>=17?r=_r.evening:s>=12?r=_r.afternoon:s>=4?r=_r.morning:r=_r.night,t){case"B":case"BB":case"BBB":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(n,t,e){if(t==="ho"){let s=n.getHours()%12;return s===0&&(s=12),e.ordinalNumber(s,{unit:"hour"})}return Wn.h(n,t)},H:function(n,t,e){return t==="Ho"?e.ordinalNumber(n.getHours(),{unit:"hour"}):Wn.H(n,t)},K:function(n,t,e){const s=n.getHours()%12;return t==="Ko"?e.ordinalNumber(s,{unit:"hour"}):Tt(s,t.length)},k:function(n,t,e){let s=n.getHours();return s===0&&(s=24),t==="ko"?e.ordinalNumber(s,{unit:"hour"}):Tt(s,t.length)},m:function(n,t,e){return t==="mo"?e.ordinalNumber(n.getMinutes(),{unit:"minute"}):Wn.m(n,t)},s:function(n,t,e){return t==="so"?e.ordinalNumber(n.getSeconds(),{unit:"second"}):Wn.s(n,t)},S:function(n,t){return Wn.S(n,t)},X:function(n,t,e){const s=n.getTimezoneOffset();if(s===0)return"Z";switch(t){case"X":return mg(s);case"XXXX":case"XX":return Ds(s);case"XXXXX":case"XXX":default:return Ds(s,":")}},x:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"x":return mg(s);case"xxxx":case"xx":return Ds(s);case"xxxxx":case"xxx":default:return Ds(s,":")}},O:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+pg(s,":");case"OOOO":default:return"GMT"+Ds(s,":")}},z:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+pg(s,":");case"zzzz":default:return"GMT"+Ds(s,":")}},t:function(n,t,e){const s=Math.trunc(+n/1e3);return Tt(s,t.length)},T:function(n,t,e){return Tt(+n,t.length)}};function pg(n,t=""){const e=n>0?"-":"+",s=Math.abs(n),r=Math.trunc(s/60),i=s%60;return i===0?e+String(r):e+String(r)+t+Tt(i,2)}function mg(n,t){return n%60===0?(n>0?"-":"+")+Tt(Math.abs(n)/60,2):Ds(n,t)}function Ds(n,t=""){const e=n>0?"-":"+",s=Math.abs(n),r=Tt(Math.trunc(s/60),2),i=Tt(s%60,2);return e+r+t+i}const gg=(n,t)=>{switch(n){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},wb=(n,t)=>{switch(n){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},q2=(n,t)=>{const e=n.match(/(P+)(p+)?/)||[],s=e[1],r=e[2];if(!r)return gg(n,t);let i;switch(s){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",gg(s,t)).replace("{{time}}",wb(r,t))},Xu={p:wb,P:q2},W2=/^D+$/,G2=/^Y+$/,Y2=["D","DD","YY","YYYY"];function Eb(n){return W2.test(n)}function Tb(n){return G2.test(n)}function Ju(n,t,e){const s=K2(n,t,e);if(console.warn(s),Y2.includes(n))throw new RangeError(s)}function K2(n,t,e){const s=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${s} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Q2=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,X2=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,J2=/^'([^]*?)'?$/,Z2=/''/g,tM=/[a-zA-Z]/;function eM(n,t,e){var d,h,f,m,g,v,y,E;const s=or(),r=(e==null?void 0:e.locale)??s.locale??vb,i=(e==null?void 0:e.firstWeekContainsDate)??((h=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??s.firstWeekContainsDate??((m=(f=s.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=(e==null?void 0:e.weekStartsOn)??((v=(g=e==null?void 0:e.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??s.weekStartsOn??((E=(y=s.locale)==null?void 0:y.options)==null?void 0:E.weekStartsOn)??0,a=ot(n,e==null?void 0:e.in);if(!fb(a))throw new RangeError("Invalid time value");let c=t.match(X2).map(A=>{const C=A[0];if(C==="p"||C==="P"){const D=Xu[C];return D(A,r.formatLong)}return A}).join("").match(Q2).map(A=>{if(A==="''")return{isToken:!1,value:"'"};const C=A[0];if(C==="'")return{isToken:!1,value:nM(A)};if(fg[C])return{isToken:!0,value:A};if(C.match(tM))throw new RangeError("Format string contains an unescaped latin alphabet character `"+C+"`");return{isToken:!1,value:A}});r.localize.preprocessor&&(c=r.localize.preprocessor(a,c));const l={firstWeekContainsDate:i,weekStartsOn:o,locale:r};return c.map(A=>{if(!A.isToken)return A.value;const C=A.value;(!(e!=null&&e.useAdditionalWeekYearTokens)&&Tb(C)||!(e!=null&&e.useAdditionalDayOfYearTokens)&&Eb(C))&&Ju(C,t,String(n));const D=fg[C[0]];return D(a,C,r.localize,l)}).join("")}function nM(n){const t=n.match(J2);return t?t[1].replace(Z2,"'"):n}function sM(){return Object.assign({},or())}function rM(n,t){const e=ot(n,t==null?void 0:t.in).getDay();return e===0?7:e}function iM(n,t){const e=oM(t)?new t(0):Wt(t,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function oM(n){var t;return typeof n=="function"&&((t=n.prototype)==null?void 0:t.constructor)===n}const aM=10;class Ib{constructor(){N(this,"subPriority",0)}validate(t,e){return!0}}class cM extends Ib{constructor(t,e,s,r,i){super(),this.value=t,this.validateValue=e,this.setValue=s,this.priority=r,i&&(this.subPriority=i)}validate(t,e){return this.validateValue(t,this.value,e)}set(t,e,s){return this.setValue(t,e,this.value,s)}}class lM extends Ib{constructor(e,s){super();N(this,"priority",aM);N(this,"subPriority",-1);this.context=e||(r=>Wt(s,r))}set(e,s){return s.timestampIsSet?e:Wt(e,iM(e,this.context))}}class xt{run(t,e,s,r){const i=this.parse(t,e,s,r);return i?{setter:new cM(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(t,e,s){return!0}}class uM extends xt{constructor(){super(...arguments);N(this,"priority",140);N(this,"incompatibleTokens",["R","u","t","T"])}parse(e,s,r){switch(s){case"G":case"GG":case"GGG":return r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"});case"GGGGG":return r.era(e,{width:"narrow"});case"GGGG":default:return r.era(e,{width:"wide"})||r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"})}}set(e,s,r){return s.era=r,e.setFullYear(r,0,1),e.setHours(0,0,0,0),e}}const Xt={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},on={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Jt(n,t){return n&&{value:t(n.value),rest:n.rest}}function Bt(n,t){const e=t.match(n);return e?{value:parseInt(e[0],10),rest:t.slice(e[0].length)}:null}function an(n,t){const e=t.match(n);if(!e)return null;if(e[0]==="Z")return{value:0,rest:t.slice(1)};const s=e[1]==="+"?1:-1,r=e[2]?parseInt(e[2],10):0,i=e[3]?parseInt(e[3],10):0,o=e[5]?parseInt(e[5],10):0;return{value:s*(r*jo+i*Uo+o*FD),rest:t.slice(e[0].length)}}function Ab(n){return Bt(Xt.anyDigitsSigned,n)}function Gt(n,t){switch(n){case 1:return Bt(Xt.singleDigit,t);case 2:return Bt(Xt.twoDigits,t);case 3:return Bt(Xt.threeDigits,t);case 4:return Bt(Xt.fourDigits,t);default:return Bt(new RegExp("^\\d{1,"+n+"}"),t)}}function wc(n,t){switch(n){case 1:return Bt(Xt.singleDigitSigned,t);case 2:return Bt(Xt.twoDigitsSigned,t);case 3:return Bt(Xt.threeDigitsSigned,t);case 4:return Bt(Xt.fourDigitsSigned,t);default:return Bt(new RegExp("^-?\\d{1,"+n+"}"),t)}}function vh(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function kb(n,t){const e=t>0,s=e?t:1-t;let r;if(s<=50)r=n||100;else{const i=s+50,o=Math.trunc(i/100)*100,a=n>=i%100;r=n+o-(a?100:0)}return e?r:1-r}function Sb(n){return n%400===0||n%4===0&&n%100!==0}class dM extends xt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(e,s,r){const i=o=>({year:o,isTwoDigitYear:s==="yy"});switch(s){case"y":return Jt(Gt(4,e),i);case"yo":return Jt(r.ordinalNumber(e,{unit:"year"}),i);default:return Jt(Gt(s.length,e),i)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,r){const i=e.getFullYear();if(r.isTwoDigitYear){const a=kb(r.year,i);return e.setFullYear(a,0,1),e.setHours(0,0,0,0),e}const o=!("era"in s)||s.era===1?r.year:1-r.year;return e.setFullYear(o,0,1),e.setHours(0,0,0,0),e}}class hM extends xt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(e,s,r){const i=o=>({year:o,isTwoDigitYear:s==="YY"});switch(s){case"Y":return Jt(Gt(4,e),i);case"Yo":return Jt(r.ordinalNumber(e,{unit:"year"}),i);default:return Jt(Gt(s.length,e),i)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,r,i){const o=yh(e,i);if(r.isTwoDigitYear){const c=kb(r.year,o);return e.setFullYear(c,0,i.firstWeekContainsDate),e.setHours(0,0,0,0),gn(e,i)}const a=!("era"in s)||s.era===1?r.year:1-r.year;return e.setFullYear(a,0,i.firstWeekContainsDate),e.setHours(0,0,0,0),gn(e,i)}}class fM extends xt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(e,s){return wc(s==="R"?4:s.length,e)}set(e,s,r){const i=Wt(e,0);return i.setFullYear(r,0,4),i.setHours(0,0,0,0),qr(i)}}class pM extends xt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(e,s){return wc(s==="u"?4:s.length,e)}set(e,s,r){return e.setFullYear(r,0,1),e.setHours(0,0,0,0),e}}class mM extends xt{constructor(){super(...arguments);N(this,"priority",120);N(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,r){switch(s){case"Q":case"QQ":return Gt(s.length,e);case"Qo":return r.ordinalNumber(e,{unit:"quarter"});case"QQQ":return r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return r.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(e,{width:"wide",context:"formatting"})||r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=1&&s<=4}set(e,s,r){return e.setMonth((r-1)*3,1),e.setHours(0,0,0,0),e}}class gM extends xt{constructor(){super(...arguments);N(this,"priority",120);N(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,r){switch(s){case"q":case"qq":return Gt(s.length,e);case"qo":return r.ordinalNumber(e,{unit:"quarter"});case"qqq":return r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return r.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(e,{width:"wide",context:"standalone"})||r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=1&&s<=4}set(e,s,r){return e.setMonth((r-1)*3,1),e.setHours(0,0,0,0),e}}class _M extends xt{constructor(){super(...arguments);N(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);N(this,"priority",110)}parse(e,s,r){const i=o=>o-1;switch(s){case"M":return Jt(Bt(Xt.month,e),i);case"MM":return Jt(Gt(2,e),i);case"Mo":return Jt(r.ordinalNumber(e,{unit:"month"}),i);case"MMM":return r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return r.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(e,{width:"wide",context:"formatting"})||r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=11}set(e,s,r){return e.setMonth(r,1),e.setHours(0,0,0,0),e}}class yM extends xt{constructor(){super(...arguments);N(this,"priority",110);N(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(e,s,r){const i=o=>o-1;switch(s){case"L":return Jt(Bt(Xt.month,e),i);case"LL":return Jt(Gt(2,e),i);case"Lo":return Jt(r.ordinalNumber(e,{unit:"month"}),i);case"LLL":return r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return r.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(e,{width:"wide",context:"standalone"})||r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=11}set(e,s,r){return e.setMonth(r,1),e.setHours(0,0,0,0),e}}function vM(n,t,e){const s=ot(n,e==null?void 0:e.in),r=xb(s,e)-t;return s.setDate(s.getDate()-r*7),ot(s,e==null?void 0:e.in)}class bM extends xt{constructor(){super(...arguments);N(this,"priority",100);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(e,s,r){switch(s){case"w":return Bt(Xt.week,e);case"wo":return r.ordinalNumber(e,{unit:"week"});default:return Gt(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,r,i){return gn(vM(e,r,i),i)}}function xM(n,t,e){const s=ot(n,e==null?void 0:e.in),r=bb(s,e)-t;return s.setDate(s.getDate()-r*7),s}class wM extends xt{constructor(){super(...arguments);N(this,"priority",100);N(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(e,s,r){switch(s){case"I":return Bt(Xt.week,e);case"Io":return r.ordinalNumber(e,{unit:"week"});default:return Gt(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,r){return qr(xM(e,r))}}const EM=[31,28,31,30,31,30,31,31,30,31,30,31],TM=[31,29,31,30,31,30,31,31,30,31,30,31];class IM extends xt{constructor(){super(...arguments);N(this,"priority",90);N(this,"subPriority",1);N(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(e,s,r){switch(s){case"d":return Bt(Xt.date,e);case"do":return r.ordinalNumber(e,{unit:"date"});default:return Gt(s.length,e)}}validate(e,s){const r=e.getFullYear(),i=Sb(r),o=e.getMonth();return i?s>=1&&s<=TM[o]:s>=1&&s<=EM[o]}set(e,s,r){return e.setDate(r),e.setHours(0,0,0,0),e}}class AM extends xt{constructor(){super(...arguments);N(this,"priority",90);N(this,"subpriority",1);N(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(e,s,r){switch(s){case"D":case"DD":return Bt(Xt.dayOfYear,e);case"Do":return r.ordinalNumber(e,{unit:"date"});default:return Gt(s.length,e)}}validate(e,s){const r=e.getFullYear();return Sb(r)?s>=1&&s<=366:s>=1&&s<=365}set(e,s,r){return e.setMonth(0,r),e.setHours(0,0,0,0),e}}function bh(n,t,e){var h,f,m,g;const s=or(),r=(e==null?void 0:e.weekStartsOn)??((f=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:f.weekStartsOn)??s.weekStartsOn??((g=(m=s.locale)==null?void 0:m.options)==null?void 0:g.weekStartsOn)??0,i=ot(n,e==null?void 0:e.in),o=i.getDay(),c=(t%7+7)%7,l=7-r,d=t<0||t>6?t-(o+l)%7:(c+l)%7-(o+l)%7;return al(i,d,e)}class kM extends xt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(e,s,r){switch(s){case"E":case"EE":case"EEE":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return r.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,r,i){return e=bh(e,r,i),e.setHours(0,0,0,0),e}}class SM extends xt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(e,s,r,i){const o=a=>{const c=Math.floor((a-1)/7)*7;return(a+i.weekStartsOn+6)%7+c};switch(s){case"e":case"ee":return Jt(Gt(s.length,e),o);case"eo":return Jt(r.ordinalNumber(e,{unit:"day"}),o);case"eee":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"eeeee":return r.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,r,i){return e=bh(e,r,i),e.setHours(0,0,0,0),e}}class CM extends xt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(e,s,r,i){const o=a=>{const c=Math.floor((a-1)/7)*7;return(a+i.weekStartsOn+6)%7+c};switch(s){case"c":case"cc":return Jt(Gt(s.length,e),o);case"co":return Jt(r.ordinalNumber(e,{unit:"day"}),o);case"ccc":return r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});case"ccccc":return r.day(e,{width:"narrow",context:"standalone"});case"cccccc":return r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return r.day(e,{width:"wide",context:"standalone"})||r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=6}set(e,s,r,i){return e=bh(e,r,i),e.setHours(0,0,0,0),e}}function RM(n,t,e){const s=ot(n,e==null?void 0:e.in),r=rM(s,e),i=t-r;return al(s,i,e)}class PM extends xt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(e,s,r){const i=o=>o===0?7:o;switch(s){case"i":case"ii":return Gt(s.length,e);case"io":return r.ordinalNumber(e,{unit:"day"});case"iii":return Jt(r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),i);case"iiiii":return Jt(r.day(e,{width:"narrow",context:"formatting"}),i);case"iiiiii":return Jt(r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),i);case"iiii":default:return Jt(r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),i)}}validate(e,s){return s>=1&&s<=7}set(e,s,r){return e=RM(e,r),e.setHours(0,0,0,0),e}}class DM extends xt{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(e,s,r){switch(s){case"a":case"aa":case"aaa":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,r){return e.setHours(vh(r),0,0,0),e}}class MM extends xt{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(e,s,r){switch(s){case"b":case"bb":case"bbb":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,r){return e.setHours(vh(r),0,0,0),e}}class OM extends xt{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["a","b","t","T"])}parse(e,s,r){switch(s){case"B":case"BB":case"BBB":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,r){return e.setHours(vh(r),0,0,0),e}}class NM extends xt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["H","K","k","t","T"])}parse(e,s,r){switch(s){case"h":return Bt(Xt.hour12h,e);case"ho":return r.ordinalNumber(e,{unit:"hour"});default:return Gt(s.length,e)}}validate(e,s){return s>=1&&s<=12}set(e,s,r){const i=e.getHours()>=12;return i&&r<12?e.setHours(r+12,0,0,0):!i&&r===12?e.setHours(0,0,0,0):e.setHours(r,0,0,0),e}}class LM extends xt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(e,s,r){switch(s){case"H":return Bt(Xt.hour23h,e);case"Ho":return r.ordinalNumber(e,{unit:"hour"});default:return Gt(s.length,e)}}validate(e,s){return s>=0&&s<=23}set(e,s,r){return e.setHours(r,0,0,0),e}}class VM extends xt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["h","H","k","t","T"])}parse(e,s,r){switch(s){case"K":return Bt(Xt.hour11h,e);case"Ko":return r.ordinalNumber(e,{unit:"hour"});default:return Gt(s.length,e)}}validate(e,s){return s>=0&&s<=11}set(e,s,r){return e.getHours()>=12&&r<12?e.setHours(r+12,0,0,0):e.setHours(r,0,0,0),e}}class FM extends xt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(e,s,r){switch(s){case"k":return Bt(Xt.hour24h,e);case"ko":return r.ordinalNumber(e,{unit:"hour"});default:return Gt(s.length,e)}}validate(e,s){return s>=1&&s<=24}set(e,s,r){const i=r<=24?r%24:r;return e.setHours(i,0,0,0),e}}class $M extends xt{constructor(){super(...arguments);N(this,"priority",60);N(this,"incompatibleTokens",["t","T"])}parse(e,s,r){switch(s){case"m":return Bt(Xt.minute,e);case"mo":return r.ordinalNumber(e,{unit:"minute"});default:return Gt(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,r){return e.setMinutes(r,0,0),e}}class BM extends xt{constructor(){super(...arguments);N(this,"priority",50);N(this,"incompatibleTokens",["t","T"])}parse(e,s,r){switch(s){case"s":return Bt(Xt.second,e);case"so":return r.ordinalNumber(e,{unit:"second"});default:return Gt(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,r){return e.setSeconds(r,0),e}}class UM extends xt{constructor(){super(...arguments);N(this,"priority",30);N(this,"incompatibleTokens",["t","T"])}parse(e,s){const r=i=>Math.trunc(i*Math.pow(10,-s.length+3));return Jt(Gt(s.length,e),r)}set(e,s,r){return e.setMilliseconds(r),e}}class jM extends xt{constructor(){super(...arguments);N(this,"priority",10);N(this,"incompatibleTokens",["t","T","x"])}parse(e,s){switch(s){case"X":return an(on.basicOptionalMinutes,e);case"XX":return an(on.basic,e);case"XXXX":return an(on.basicOptionalSeconds,e);case"XXXXX":return an(on.extendedOptionalSeconds,e);case"XXX":default:return an(on.extended,e)}}set(e,s,r){return s.timestampIsSet?e:Wt(e,e.getTime()-xc(e)-r)}}class zM extends xt{constructor(){super(...arguments);N(this,"priority",10);N(this,"incompatibleTokens",["t","T","X"])}parse(e,s){switch(s){case"x":return an(on.basicOptionalMinutes,e);case"xx":return an(on.basic,e);case"xxxx":return an(on.basicOptionalSeconds,e);case"xxxxx":return an(on.extendedOptionalSeconds,e);case"xxx":default:return an(on.extended,e)}}set(e,s,r){return s.timestampIsSet?e:Wt(e,e.getTime()-xc(e)-r)}}class HM extends xt{constructor(){super(...arguments);N(this,"priority",40);N(this,"incompatibleTokens","*")}parse(e){return Ab(e)}set(e,s,r){return[Wt(e,r*1e3),{timestampIsSet:!0}]}}class qM extends xt{constructor(){super(...arguments);N(this,"priority",20);N(this,"incompatibleTokens","*")}parse(e){return Ab(e)}set(e,s,r){return[Wt(e,r),{timestampIsSet:!0}]}}const WM={G:new uM,y:new dM,Y:new hM,R:new fM,u:new pM,Q:new mM,q:new gM,M:new _M,L:new yM,w:new bM,I:new wM,d:new IM,D:new AM,E:new kM,e:new SM,c:new CM,i:new PM,a:new DM,b:new MM,B:new OM,h:new NM,H:new LM,K:new VM,k:new FM,m:new $M,s:new BM,S:new UM,X:new jM,x:new zM,t:new HM,T:new qM},GM=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,YM=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,KM=/^'([^]*?)'?$/,QM=/''/g,XM=/\S/,JM=/[a-zA-Z]/;function ZM(n,t,e,s){var y,E,A,C,D,R,M,T;const r=()=>Wt((s==null?void 0:s.in)||e,NaN),i=sM(),o=(s==null?void 0:s.locale)??i.locale??vb,a=(s==null?void 0:s.firstWeekContainsDate)??((E=(y=s==null?void 0:s.locale)==null?void 0:y.options)==null?void 0:E.firstWeekContainsDate)??i.firstWeekContainsDate??((C=(A=i.locale)==null?void 0:A.options)==null?void 0:C.firstWeekContainsDate)??1,c=(s==null?void 0:s.weekStartsOn)??((R=(D=s==null?void 0:s.locale)==null?void 0:D.options)==null?void 0:R.weekStartsOn)??i.weekStartsOn??((T=(M=i.locale)==null?void 0:M.options)==null?void 0:T.weekStartsOn)??0;if(!t)return n?r():ot(e,s==null?void 0:s.in);const l={firstWeekContainsDate:a,weekStartsOn:c,locale:o},d=[new lM(s==null?void 0:s.in,e)],h=t.match(YM).map(b=>{const x=b[0];if(x in Xu){const I=Xu[x];return I(b,o.formatLong)}return b}).join("").match(GM),f=[];for(let b of h){!(s!=null&&s.useAdditionalWeekYearTokens)&&Tb(b)&&Ju(b,t,n),!(s!=null&&s.useAdditionalDayOfYearTokens)&&Eb(b)&&Ju(b,t,n);const x=b[0],I=WM[x];if(I){const{incompatibleTokens:S}=I;if(Array.isArray(S)){const k=f.find(X=>S.includes(X.token)||X.token===x);if(k)throw new RangeError(`The format string mustn't contain \`${k.fullToken}\` and \`${b}\` at the same time`)}else if(I.incompatibleTokens==="*"&&f.length>0)throw new RangeError(`The format string mustn't contain \`${b}\` and any other token at the same time`);f.push({token:x,fullToken:b});const P=I.run(n,b,o.match,l);if(!P)return r();d.push(P.setter),n=P.rest}else{if(x.match(JM))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");if(b==="''"?b="'":x==="'"&&(b=tO(b)),n.indexOf(b)===0)n=n.slice(b.length);else return r()}}if(n.length>0&&XM.test(n))return r();const m=d.map(b=>b.priority).sort((b,x)=>x-b).filter((b,x,I)=>I.indexOf(b)===x).map(b=>d.filter(x=>x.priority===b).sort((x,I)=>I.subPriority-x.subPriority)).map(b=>b[0]);let g=ot(e,s==null?void 0:s.in);if(isNaN(+g))return r();const v={};for(const b of m){if(!b.validate(g,l))return r();const x=b.set(g,v,l);Array.isArray(x)?(g=x[0],Object.assign(v,x[1])):g=x}return g}function tO(n){return n.match(KM)[1].replace(QM,"'")}function eO(n,t){const e=ot(n,t==null?void 0:t.in);return e.setMinutes(0,0,0),e}function nO(n,t){const e=ot(n,t==null?void 0:t.in);return e.setSeconds(0,0),e}function sO(n,t){const e=ot(n,t==null?void 0:t.in);return e.setMilliseconds(0),e}function rO(n,t){const e=()=>Wt(t==null?void 0:t.in,NaN),s=(t==null?void 0:t.additionalDigits)??2,r=cO(n);let i;if(r.date){const l=lO(r.date,s);i=uO(l.restDateString,l.year)}if(!i||isNaN(+i))return e();const o=+i;let a=0,c;if(r.time&&(a=dO(r.time),isNaN(a)))return e();if(r.timezone){if(c=hO(r.timezone),isNaN(c))return e()}else{const l=new Date(o+a),d=ot(0,t==null?void 0:t.in);return d.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),d.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),d}return ot(o+a+c,t==null?void 0:t.in)}const Sa={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},iO=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,oO=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,aO=/^([+-])(\d{2})(?::?(\d{2}))?$/;function cO(n){const t={},e=n.split(Sa.dateTimeDelimiter);let s;if(e.length>2)return t;if(/:/.test(e[0])?s=e[0]:(t.date=e[0],s=e[1],Sa.timeZoneDelimiter.test(t.date)&&(t.date=n.split(Sa.timeZoneDelimiter)[0],s=n.substr(t.date.length,n.length))),s){const r=Sa.timezone.exec(s);r?(t.time=s.replace(r[1],""),t.timezone=r[1]):t.time=s}return t}function lO(n,t){const e=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),s=n.match(e);if(!s)return{year:NaN,restDateString:""};const r=s[1]?parseInt(s[1]):null,i=s[2]?parseInt(s[2]):null;return{year:i===null?r:i*100,restDateString:n.slice((s[1]||s[2]).length)}}function uO(n,t){if(t===null)return new Date(NaN);const e=n.match(iO);if(!e)return new Date(NaN);const s=!!e[4],r=Ci(e[1]),i=Ci(e[2])-1,o=Ci(e[3]),a=Ci(e[4]),c=Ci(e[5])-1;if(s)return _O(t,a,c)?fO(t,a,c):new Date(NaN);{const l=new Date(0);return!mO(t,i,o)||!gO(t,r)?new Date(NaN):(l.setUTCFullYear(t,i,Math.max(r,o)),l)}}function Ci(n){return n?parseInt(n):1}function dO(n){const t=n.match(oO);if(!t)return NaN;const e=nu(t[1]),s=nu(t[2]),r=nu(t[3]);return yO(e,s,r)?e*jo+s*Uo+r*1e3:NaN}function nu(n){return n&&parseFloat(n.replace(",","."))||0}function hO(n){if(n==="Z")return 0;const t=n.match(aO);if(!t)return 0;const e=t[1]==="+"?-1:1,s=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return vO(s,r)?e*(s*jo+r*Uo):NaN}function fO(n,t,e){const s=new Date(0);s.setUTCFullYear(n,0,4);const r=s.getUTCDay()||7,i=(t-1)*7+e+1-r;return s.setUTCDate(s.getUTCDate()+i),s}const pO=[31,null,31,30,31,30,31,31,30,31,30,31];function Cb(n){return n%400===0||n%4===0&&n%100!==0}function mO(n,t,e){return t>=0&&t<=11&&e>=1&&e<=(pO[t]||(Cb(n)?29:28))}function gO(n,t){return t>=1&&t<=(Cb(n)?366:365)}function _O(n,t,e){return t>=1&&t<=53&&e>=0&&e<=6}function yO(n,t,e){return n===24?t===0&&e===0:e>=0&&e<60&&t>=0&&t<60&&n>=0&&n<25}function vO(n,t){return t>=0&&t<=59}/*!
 * chartjs-adapter-date-fns v3.0.0
 * https://www.chartjs.org
 * (c) 2022 chartjs-adapter-date-fns Contributors
 * Released under the MIT license
 */const bO={datetime:"MMM d, yyyy, h:mm:ss aaaa",millisecond:"h:mm:ss.SSS aaaa",second:"h:mm:ss aaaa",minute:"h:mm aaaa",hour:"ha",day:"MMM d",week:"PP",month:"MMM yyyy",quarter:"qqq - yyyy",year:"yyyy"};zv._date.override({_id:"date-fns",formats:function(){return bO},parse:function(n,t){if(n===null||typeof n>"u")return null;const e=typeof n;return e==="number"||n instanceof Date?n=ot(n):e==="string"&&(typeof t=="string"?n=ZM(n,t,new Date,this.options):n=rO(n,this.options)),fb(n)?n.getTime():null},format:function(n,t){return eM(n,t,this.options)},add:function(n,t,e){switch(e){case"millisecond":return gh(n,t);case"second":return HD(n,t);case"minute":return jD(n,t);case"hour":return $D(n,t);case"day":return al(n,t);case"week":return qD(n,t);case"month":return mh(n,t);case"quarter":return zD(n,t);case"year":return WD(n,t);default:return n}},diff:function(n,t,e){switch(e){case"millisecond":return _h(n,t);case"second":return t2(n,t);case"minute":return XD(n,t);case"hour":return QD(n,t);case"day":return pb(n,t);case"week":return e2(n,t);case"month":return _b(n,t);case"quarter":return ZD(n,t);case"year":return n2(n,t);default:return 0}},startOf:function(n,t,e){switch(t){case"second":return sO(n);case"minute":return nO(n);case"hour":return eO(n);case"day":return Qu(n);case"week":return gn(n);case"isoWeek":return gn(n,{weekStartsOn:+e});case"month":return r2(n);case"quarter":return s2(n);case"year":return yb(n);default:return n}},endOf:function(n,t){switch(t){case"second":return u2(n);case"minute":return c2(n);case"hour":return o2(n);case"day":return mb(n);case"week":return a2(n);case"month":return gb(n);case"quarter":return l2(n);case"year":return i2(n);default:return n}}});const su="rgba(255,255,255,0.08)",Ca="#a1a1aa",ks={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"},oe={renderEmpty:n=>{const t=document.getElementById(n);if(!t)return;const e=t.parentElement;if(!e)return;t.style.display="none";let s=e.querySelector(".chart-placeholder");s||(s=document.createElement("div"),s.className="chart-placeholder text-center text-sm text-text-muted py-6",e.appendChild(s)),s.textContent="Sem dados"},renderHorasNormaisExtras:(n,t={},e={})=>{const s=document.getElementById(n);if(!s)return;const r=Array.from(new Set([...Object.keys(t),...Object.keys(e)])).sort(),i=r.map(a=>t[a]||0),o=r.map(a=>e[a]||0);s.chart&&s.chart.destroy(),s.chart=new mt(s,{type:"bar",data:{labels:r.map(a=>{const c=new Date(a);return c.setHours(12,0,0,0),c.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}),datasets:[{label:"Horas Normais",data:i,backgroundColor:"#22c55e"},{label:"Horas Extras",data:o,backgroundColor:"#ef4444"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:"#e5e5e5",font:ks}}},scales:{x:{stacked:!0,grid:{display:!1},ticks:{color:Ca,font:ks,maxRotation:45,autoSkip:!0}},y:{stacked:!0,grid:{color:su},ticks:{color:Ca,font:ks},beginAtZero:!0}}}})},renderCurvaHoras:(n,t=[],e=[])=>{const s=document.getElementById(n);if(!s)return;s.chart&&s.chart.destroy();const r=[...t||[]].sort((a,c)=>new Date(a.x)-new Date(c.x)),i=[...e||[]].sort((a,c)=>new Date(a.x)-new Date(c.x)),o={id:"weekendShade",beforeDraw(a){const c=a.scales.x,l=a.ctx,d=c.min,h=c.max;if(!d||!h)return;const f=24*60*60*1e3;let m=d-(new Date(d).getDay()+7)%7*f;for(;m<=h+f*7;){const g=new Date(m),v=g.getDay();if(v===0||v===6){const y=c.getPixelForValue(g),E=c.getPixelForValue(new Date(m+f));l.save(),l.fillStyle="rgba(255,255,255,0.03)",l.fillRect(y,a.chartArea.top,E-y,a.chartArea.bottom-a.chartArea.top),l.restore()}m+=f}}};s.chart=new mt(s,{type:"line",data:{datasets:[{label:"Horas Planejadas",data:r,borderColor:"#22c55e",backgroundColor:"rgba(34,197,94,0.12)",fill:!0,tension:.3,borderWidth:2,pointRadius:0,parsing:{xAxisKey:"x",yAxisKey:"y"}},{label:"Horas Executadas",data:i,borderColor:"#ef4444",backgroundColor:"rgba(239,68,68,0.1)",fill:!0,tension:.3,borderWidth:3,pointRadius:3,parsing:{xAxisKey:"x",yAxisKey:"y"}}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"time",time:{unit:"day"},grid:{color:su},offset:!1,ticks:{source:"data",color:Ca,font:ks,callback:a=>{const c=new Date(a),l=c.toLocaleDateString("en-US",{month:"short",day:"numeric"}),d=c.getDay();return d===1?`${l} (Mon)`:d===5?`${l} (Fri)`:l}}},y:{grid:{color:su},ticks:{color:Ca,font:ks},beginAtZero:!0}},plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:ks,usePointStyle:!0}},weekendShade:!0}},plugins:[o]})},renderHorasPorFuncao:(n,t={})=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),r=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new mt(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:["#22c55e","#16a34a","#0ea5e9","#f59e0b","#ef4444","#a855f7","#6366f1"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:ks,usePointStyle:!0}}}}})}},xo=n=>n instanceof Date&&!isNaN(n),xO=(n,t)=>{const e=new Date(n),s=new Date(t);if(!xo(e)||!xo(s)||e>s)return[];const r=[];for(let i=new Date(e);i<=s;i.setDate(i.getDate()+1))r.push(new Date(i));return r},Rb=n=>xo(n)?n.toISOString().split("T")[0]:null,Pb=n=>{if(!(n!=null&&n.data_inicio)||!(n!=null&&n.data_prevista_fim))return[];const t=new Date(n.data_inicio),e=new Date(n.data_prevista_fim);if(!xo(t)||!xo(e)||t>e)return[];const s=xO(t,e),r=s.length?(n.orcamento||0)/s.length:0;let i=0;return s.map(o=>{i+=r;const a=Rb(o);return a?{x:a,y:i}:null}).filter(Boolean)},Db=(n=[],t={},e=0,s=0,r={})=>{const i={};n.forEach(c=>{const l=c.data_recebimento||c.data_emissao||c.previsao_entrega||c.data_solicitacao;if(!l)return;const d=Rb(new Date(l));if(!d)return;const h=Number(c.valor_total||c.valor_estimado||0);i[d]=(i[d]||0)+h}),Object.entries(t||{}).forEach(([c,l])=>{const d=Number(l)||0,h=Number(r==null?void 0:r[c])||0,m=Math.max(0,d-h)*e+(h*s||e);i[c]=(i[c]||0)+m});const o=Object.keys(i).sort();let a=0;return o.map(c=>(a+=i[c],{x:c,y:a}))},Bs={create:async n=>(await sr(gt(J,"notificacoes"),{...n,lida:!1,created_at:new Date().toISOString()})).id,getByUser:async(n,t=10)=>{const e=Yt(gt(J,"notificacoes"),Rt("userId","==",n),Ld("created_at","desc"),ic(t));return(await bt(e)).docs.map(r=>({id:r.id,...r.data()}))},markAsRead:async n=>{await je(ee(J,"notificacoes",n),{lida:!0,read_at:new Date().toISOString()})},markAllAsRead:async n=>{const t=Yt(gt(J,"notificacoes"),Rt("userId","==",n),Rt("lida","==",!1)),s=(await bt(t)).docs.map(r=>je(ee(J,"notificacoes",r.id),{lida:!0,read_at:new Date().toISOString()}));await Promise.all(s)},markByType:async(n,t,e=null)=>{if(!n||!t)return;const s=[Rt("userId","==",n),Rt("tipo","==",t),Rt("lida","==",!1)];e&&s.push(Rt("obraId","==",e));const r=Yt(gt(J,"notificacoes"),...s),o=(await bt(r)).docs.map(a=>je(ee(J,"notificacoes",a.id),{lida:!0,read_at:new Date().toISOString()}));await Promise.all(o)},checkAndNotify:async()=>{const n=new Date;n.setDate(n.getDate()+3);const t=Yt(gt(J,"compras"),Rt("status_compra","in",["Comprado","Em Trânsito"]),Rt("data_entrega_prevista","<=",n.toISOString())),e=await bt(t),s=[];for(const r of e.docs){const i=r.data(),o=Math.ceil((new Date(i.data_entrega_prevista)-new Date)/(1e3*60*60*24));o>=0&&o<=3&&s.push({userId:i.solicitante_id,tipo:"entrega_proxima",titulo:"Entrega Próxima",mensagem:`${i.descricao} - Entrega prevista em ${o} dia(s)`,link:`/compras/${r.id}`,prioridade:o===0?"alta":"normal"})}for(const r of s)await Bs.create(r);return s.length}},Tr={getCompras:async(n={})=>{let e=(await bt(gt(J,"compras"))).docs.map(R=>({id:R.id,...R.data()}));const{search:s="",status:r="",obra:i="",prioridade:o="",natureza:a="",cc:c="",dateStart:l="",dateEnd:d="",onlyDelayed:h=!1,fornecedor:f="",comprador:m="",statusAprov:g="",nfConferida:v=!1,nf:y=""}=n,E=s.toLowerCase(),A=l?new Date(l):null,C=d?new Date(d):null,D=new Date;return D.setHours(0,0,0,0),e=e.filter(R=>{if(E&&!(R.descricao_compra||R.descricao||"").toLowerCase().includes(E)||r&&R.status_compra!==r||i&&R.obraId!==i||o&&R.prioridade!==o||a&&(R.natureza_compra||"").trim()!==a||c&&R.centroCustoId!==c||f&&R.fornecedorId!==f||m&&R.compradorId!==m||g&&(R.status_aprovacao||"")!==g||v&&!R.nf_conferida||y&&!(R.numero_nf||"").toLowerCase().includes(y.toLowerCase()))return!1;const M=R.data_solicitacao?new Date(R.data_solicitacao):null;if(A&&M&&M<A||C&&M&&M>C)return!1;if(h){const T=R.previsao_entrega?new Date(R.previsao_entrega):R.data_entrega_prevista?new Date(R.data_entrega_prevista):null;if(!T||T>=D||R.status_compra==="Entregue"||R.status_compra==="Recebido")return!1}return!0}),e.sort((R,M)=>{const T=R.data_solicitacao||R.data_emissao||"";return(M.data_solicitacao||M.data_emissao||"").localeCompare(T)}),e},updateStatus:async(n,t)=>{const e=ee(J,"compras",n);await je(e,{status_compra:t})},updateCompra:async(n,t)=>{const e=ee(J,"compras",n);await je(e,t)},deleteCompra:async n=>{const t=ee(J,"compras",n);await Fd(t)}},Zu=(n="")=>n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),wO=(n="")=>{const t=Zu(n);return t.includes("receb")||t.includes("entreg")},ru={getAlertSummary:async({obraId:n=null}={})=>{const t=gt(J,"compras"),e=n?Yt(t,Rt("obraId","==",n)):t,s=await bt(e),r=new Date;r.setHours(0,0,0,0);const i={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0,estoque:0};return s.docs.forEach(o=>{const a=o.data(),c=Zu(a.status_compra||""),l=wO(c),d=a.previsao_entrega||a.data_entrega_prevista,h=d?new Date(d):null;!l&&h&&h<r&&i.atrasados++,!l&&!h&&i.sem_previsao++,(a.estouro_orcamento||Zu(a.status_aprovacao||"")==="pendente")&&i.pendente_aprovacao++,c.includes("cot")&&i.cotacao++,a.retirada_estoque&&!l&&i.estoque++}),i},notifySummary:async(n={},t,{scope:e="global",obraId:s=null}={})=>{if(!t||!n)return;const r=new Date().toISOString().slice(0,10),i=async(a,c,l,d="normal")=>{const h=`notif_${a}_${e}_${s||"all"}_${r}_${t}`;localStorage.getItem(h)||(await Bs.create({userId:t,tipo:a,titulo:c,mensagem:l,link:s?`#/obras/${s}`:"#/relatorios",prioridade:d,obraId:s}),localStorage.setItem(h,"1"))},o=[{key:"atrasados",title:"Pedidos atrasados",msg:`${n.atrasados} pedido(s) com previsão vencida.`,prio:"alta"},{key:"sem_previsao",title:"Pedidos sem previsão",msg:`${n.sem_previsao} pedido(s) sem data de entrega.`,prio:"normal"},{key:"pendente_aprovacao",title:"Aprovação pendente",msg:`${n.pendente_aprovacao} pedido(s) aguardando aprovação.`,prio:"normal"},{key:"cotacao",title:"Pedidos em cotação",msg:`${n.cotacao} pedido(s) em cotação.`,prio:"normal"},{key:"estoque",title:"Retiradas de estoque",msg:`${n.estoque} pedido(s) aguardando baixa de estoque.`,prio:"normal"}];for(const a of o)(n[a.key]||0)>0?await i(a.key,a.title,a.msg,a.prio):await Bs.markByType(t,a.key,s)}},Mb=[];let iu=!1;const Ob=()=>{if(iu)return;const n=Mb.shift();n&&(iu=!0,F.createToast(n.message,n.type),setTimeout(()=>{iu=!1,Ob()},3500))},EO=({title:n="Confirmação",message:t="",confirmText:e="Confirmar",cancelText:s="Cancelar"})=>{const r=document.createElement("div");return r.className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",r.innerHTML=`
        <div class="bg-surface border border-border rounded shadow-heavy max-w-lg w-full">
            <div class="px-4 py-3 border-b border-border flex justify-between items-center">
                <h3 class="text-lg font-display text-text">${n}</h3>
                <button id="notif-modal-close" class="text-text-muted hover:text-text">✕</button>
            </div>
            <div class="p-4 text-text">${t}</div>
            <div class="px-4 py-3 border-t border-border flex justify-end gap-2">
                <button id="notif-modal-cancel" class="btn-secondary">${s}</button>
                <button id="notif-modal-confirm" class="btn">${e}</button>
            </div>
        </div>
    `,r},Ec={toast:(n,t="success")=>{Mb.push({message:n,type:t}),Ob()},confirm:({title:n="Confirmação",message:t="Deseja prosseguir?",confirmText:e="Confirmar",cancelText:s="Cancelar"}={})=>new Promise(r=>{var a,c,l;const i=EO({title:n,message:t,confirmText:e,cancelText:s}),o=d=>{i.remove(),r(d)};(a=i.querySelector("#notif-modal-close"))==null||a.addEventListener("click",()=>o(!1)),(c=i.querySelector("#notif-modal-cancel"))==null||c.addEventListener("click",()=>o(!1)),(l=i.querySelector("#notif-modal-confirm"))==null||l.addEventListener("click",()=>o(!0)),document.body.appendChild(i)}),badge:(n=0)=>{const t=document.querySelector("#notifications-container");t&&(t.dataset.badge=n)}},TO="bbb1b9bda22e7d16e1ea3ed3f8455530",IO=30*60*1e3,Ri="weather_cache",_g={async getWeather(n,t){const e=this.getFromCache();if(e)return console.log("[Weather] Usando dados em cache"),e;try{const s=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${n}&lon=${t}&units=metric&lang=pt_br&appid=${TO}`);if(!s.ok)throw new Error(`API Error: ${s.status}`);const r=await s.json(),i={temp:Math.round(r.main.temp),feelsLike:Math.round(r.main.feels_like),description:r.weather[0].description,icon:this.getWeatherIcon(r.weather[0].id),location:r.name,humidity:r.main.humidity,windSpeed:r.wind.speed,timestamp:Date.now()};return this.saveToCache(i),console.log("[Weather] Dados atualizados:",i.location,i.temp+"°C"),i}catch(s){return console.error("[Weather] Erro ao buscar clima:",s),null}},async getLocation(){return new Promise(n=>{const t=this.getSavedLocation();if(t){console.log("[Weather] Usando localização salva:",t.city),n(t);return}if(!navigator.geolocation){console.warn("[Weather] Geolocalização não disponível, usando padrão"),n(this.getDefaultLocation());return}navigator.geolocation.getCurrentPosition(e=>{const s={lat:e.coords.latitude,lon:e.coords.longitude};console.log("[Weather] Geolocalização obtida:",s),n(s)},e=>{console.warn("[Weather] Geolocalização negada:",e.message),n(this.getDefaultLocation())},{timeout:5e3,maximumAge:6e5})})},getDefaultLocation(){return{lat:-23.5505,lon:-46.6333,city:"São Paulo"}},getSavedLocation(){const n=localStorage.getItem("user_location");return n?JSON.parse(n):null},saveLocation(n,t,e){localStorage.setItem("user_location",JSON.stringify({lat:n,lon:t,city:e}))},getWeatherIcon(n){return n>=200&&n<300?"⛈️":n>=300&&n<400||n>=500&&n<600?"🌧️":n>=600&&n<700?"❄️":n>=700&&n<800?"🌫️":n===800?"☀️":n===801?"🌤️":n===802?"⛅":n>=803?"☁️":"🌤️"},getFromCache(){const n=localStorage.getItem(Ri);if(!n)return null;try{const t=JSON.parse(n);return Date.now()-t.timestamp>IO?(console.log("[Weather] Cache expirado"),localStorage.removeItem(Ri),null):t}catch(t){return console.error("[Weather] Erro ao ler cache:",t),localStorage.removeItem(Ri),null}},saveToCache(n){try{localStorage.setItem(Ri,JSON.stringify(n))}catch(t){console.error("[Weather] Erro ao salvar cache:",t)}},clearCache(){localStorage.removeItem(Ri)}},sn={currentFilters:{obraId:"",periodo:{start:null,end:null}},init:async()=>{var t,e,s,r;const n=At.state.currentUser;if(n){lt.render(F.createLoader());try{let i="";if(n.role==="comprador"){const o=await $e.getObras(),a=await $e.getCompradorStats(sn.currentFilters);i=pa.renderComprador(a,n,o),lt.render(i),sn.initWeatherWidget(),sn.loadTimeline(),sn.bindRecentActions(),sn.bindFilters(),a.atrasos>0&&F.createToast(`Existem ${a.atrasos} pedidos em atraso.`,"warning"),await ru.notifySummary(a.alerts,n.uid,{scope:"comprador"})}else if(n.role==="obra"||n.role==="engenheiro"){let o=n.obraPadrao||null;if(!o){const c=await((t=$e.getObras)==null?void 0:t.call($e));c&&c.length&&(o=c[0].id)}const a=await $e.getObraStats(o);i=pa.renderObra(a),lt.render(i),a.atrasos>0&&F.createToast(`Esta obra tem ${a.atrasos} pedido(s) em atraso.`,"warning"),await ru.notifySummary(a.alerts,n.uid,{scope:"obra",obraId:o}),setTimeout(()=>{a.rdoData?(a.rdoData.horasPorDia?oe.renderHorasPorDia("chart-rdo-horas",a.rdoData.horasPorDia):oe.renderEmpty("chart-rdo-horas"),a.rdoData.horasPorFuncao?oe.renderHorasPorFuncao("chart-rdo-funcao",a.rdoData.horasPorFuncao):oe.renderEmpty("chart-rdo-funcao"),a.rdoData.funcionariosPorDia?oe.renderFuncionariosPorDia("chart-rdo-funcionarios",a.rdoData.funcionariosPorDia):oe.renderEmpty("chart-rdo-funcionarios")):(oe.renderEmpty("chart-rdo-horas"),oe.renderEmpty("chart-rdo-funcao"),oe.renderEmpty("chart-rdo-funcionarios"))},100)}else{const o=await $e.getDiretorStats(),a=await((e=$e.getObras)==null?void 0:e.call($e))||await Ye.getObras(),c=o._allCompras||[],l=a.map(A=>{const C=Number(A.orcamento||A.valor_orcado||0),D=Number(A.tolerancia_percentual||0),R=C+C*D,T=c.filter(x=>x.obraId===A.id).reduce((x,I)=>{const S=(I.status_compra||"").toLowerCase(),P=!I.estouro_orcamento||I.status_aprovacao==="Aprovado";return(S.includes("compr")||S.includes("receb")||S.includes("entreg")||S.includes("aprov"))&&P?x+Number(I.valor_total||I.valor_estimado||0):x},0),b=R>0?T/R*100:0;return{id:A.id,nome:A.nome_obra||A.apelido_obra||A.id,limite:R,comprometido:T,percent:b}}).filter(A=>A.limite>0||A.comprometido>0).sort((A,C)=>C.percent-A.percent).slice(0,8),d=[],h=[];a.forEach(A=>{Pb({data_inicio:A.data_inicio||A.data_prevista_inicio,data_prevista_fim:A.data_prevista_fim||A.data_fim,orcamento:A.orcamento||A.valor_orcado||0}).forEach(M=>d.push(M));const D=c.filter(M=>M.obraId===A.id);Db(D,{},0,0).forEach(M=>h.push(M))});const f=Array.from(new Set([...d.map(A=>A.x),...h.map(A=>A.x)])).sort();let m=0,g=0;const v=[],y=[],E=[];f.forEach(A=>{const C=d.filter(R=>R.x===A).map(R=>R.y).pop(),D=h.filter(R=>R.x===A).map(R=>R.y).pop();C!==void 0&&(m=C),D!==void 0&&(g=D),E.push(A),v.push(m),y.push(g)}),i=pa.renderDiretor({...o,curvaS:{planejado:v,realizado:y,labels:E},obras:a,budgetByObra:l}),lt.render(i),setTimeout(()=>{(v.length||y.length)&&Ai.renderCurvaS("chart-curva",v,y,E),Ai.renderStatusPie("chart-status",o.porStatus),o.naturezaTotais&&Ai.renderNatureza("chart-natureza-dir",o.naturezaTotais),o.ccTotais&&Ai.renderCentrosCusto("chart-cc-dir",o.ccTotais),o.gastosPorMes&&Ai.renderGastosPorMes("chart-gastos-mes",o.gastosPorMes)},100),o.atrasos>0&&F.createToast(`Há ${o.atrasos} compras com previsão vencida.`,"warning"),((s=o.alerts)==null?void 0:s.sem_previsao)>0&&F.createToast(`${o.alerts.sem_previsao} pedidos sem previsão de entrega.`,"warning"),((r=o.alerts)==null?void 0:r.pendente_aprovacao)>0&&F.createToast(`${o.alerts.pendente_aprovacao} pedidos com aprovação pendente.`,"warning"),await ru.notifySummary(o.alerts,n.uid,{scope:"diretor"})}}catch(i){console.error(i),lt.render(`<div class="text-red-500 p-4">Erro ao carregar dashboard: ${i.message}</div>`)}}},loadTimeline:async()=>{const n=document.getElementById("timeline-container");if(n)try{const t=await $e.getTimelineData(sn.currentFilters.obraId);n.innerHTML=pa.renderTimeline(t)}catch(t){console.error("[Dashboard] Erro timeline:",t),n.innerHTML='<p class="text-xs text-alert p-2">Erro ao carregar timeline</p>'}},bindFilters:()=>{const n=document.getElementById("dashboard-filter-obra"),t=document.getElementById("dashboard-filter-periodo"),e=document.getElementById("btn-apply-filters");e&&e.addEventListener("click",async()=>{const s=(n==null?void 0:n.value)||"",r=(t==null?void 0:t.value)||"30";let i=null,o=new Date;r==="7"?(i=new Date,i.setDate(o.getDate()-7)):r==="30"?(i=new Date,i.setDate(o.getDate()-30)):r==="thisMonth"?i=new Date(o.getFullYear(),o.getMonth(),1):r==="lastMonth"&&(i=new Date(o.getFullYear(),o.getMonth()-1,1),o=new Date(o.getFullYear(),o.getMonth(),0)),sn.currentFilters={obraId:s,periodo:i?{start:i,end:o}:null},sn.init()})},bindRecentActions:()=>{document.querySelectorAll('[data-action="view"]').forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.id;t&&(window.location.hash=`/compras/${t}`)})}),document.querySelectorAll('[data-action="edit"]').forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.id;t&&(window.location.hash=`/compras/${t}/editar`)})}),document.querySelectorAll('[data-action="cobrar"]').forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.fornecedor,e=n.dataset.id,s=`Olá ${t}, gostaria de uma posição sobre o pedido #${e.slice(0,6)}.`,r=`https://wa.me/?text=${encodeURIComponent(s)}`;window.open(r,"_blank")})}),document.querySelectorAll('[data-action="receber"]').forEach(n=>{n.addEventListener("click",async()=>{const t=n.dataset.id;if(!t)return;if(await Ec.confirm({message:"Confirmar recebimento deste pedido? O status será alterado para Entregue."}))try{await $e.markAsDelivered(t),F.createToast("Pedido marcado como Entregue! 🎉"),sn.init()}catch(s){F.createToast("Erro ao atualizar: "+s.message,"error")}})}),document.querySelectorAll('[data-action="delete"]').forEach(n=>{n.addEventListener("click",async()=>{const t=n.dataset.id;if(!(!t||!await Ec.confirm({message:"Confirma exclusão desta compra?"})))try{await Tr.deleteCompra(t),F.createToast("Compra excluída.");const s=n.closest("tr");s==null||s.remove()}catch(s){F.createToast("Erro ao excluir: "+s.message,"error")}})})},initWeatherWidget:async()=>{const n=document.getElementById("weather-widget");if(n)try{const t=await _g.getLocation(),e=await _g.getWeather(t.lat,t.lon);if(e){const s=document.getElementById("weather-icon"),r=document.getElementById("weather-temp"),i=document.getElementById("weather-location");s&&(s.textContent=e.icon),r&&(r.textContent=`${e.temp}°C`),i&&(i.textContent=e.location),n.title=e.description.charAt(0).toUpperCase()+e.description.slice(1),n.classList.remove("hidden"),n.classList.add("flex")}}catch(t){console.error("[Dashboard] Erro ao carregar clima:",t),n.style.display="none"}},_maybeNotify:async(n={})=>{const t=At.state.currentUser;if(!t)return;const e=new Date().toISOString().slice(0,10),s=async(r,i,o)=>{const a=`notif_${r}_${e}_${t.uid}`;localStorage.getItem(a)||(await Bs.create({userId:t.uid,tipo:r,titulo:i,mensagem:o,link:"#/relatorios",prioridade:"normal"}),localStorage.setItem(a,"1"))};(n==null?void 0:n.atrasados)>0&&await s("atrasados","Pedidos atrasados",`${n.atrasados} pedido(s) com previsão vencida.`),(n==null?void 0:n.sem_previsao)>0&&await s("sem_previsao","Pedidos sem previsão",`${n.sem_previsao} pedido(s) sem data de entrega.`),(n==null?void 0:n.pendente_aprovacao)>0&&await s("pendente_aprovacao","Aprovação pendente",`${n.pendente_aprovacao} pedido(s) aguardando aprovação.`)}},AO=async n=>{if(!n)return{limiteReal:0,toleranciaPercentual:0,orcamento:0};const t=await co(ee(J,"obras",n));if(!t.exists())return{limiteReal:0,toleranciaPercentual:0,orcamento:0};const e=t.data(),s=Number(e.valor_orcado||e.orcamento||0),r=Number(e.tolerancia_percentual||0);return{limiteReal:s+s*r,toleranciaPercentual:r,orcamento:s}},yg=async(n,t,e)=>{const{limiteReal:s}=await AO(n),r=s>0&&t>s;if(r&&!e){const i=new Error("JUSTIFICATIVA_NECESSARIA");throw i.code="JUSTIFICATIVA_NECESSARIA",i}return{estouro_orcamento:r,status_aprovacao:r?"Pendente":"Aprovado"}},yr={checkDuplicidade:async(n,t)=>{const e=Yt(gt(J,"compras"),Rt("obraId","==",n),Rt("status_compra","in",["Pendente","Em Cotação"])),s=await bt(e),r=t.toLowerCase();return s.docs.some(i=>{const o=i.data(),a=(o.descricao_compra||o.descricao||"").toLowerCase(),c=o.itens||[];return a.includes(r)||c.some(l=>(l.nome||"").toLowerCase().includes(r))})},uploadArquivo:(n,t,e)=>new Promise((s,r)=>{const i=QI(b1,t),o=YI(i,n);o.on("state_changed",a=>{const c=a.bytesTransferred/a.totalBytes*100;e&&e(c)},a=>r(a),async()=>{const a=await KI(o.snapshot.ref);s(a)})}),salvarCompra:async n=>{const t=Number(n.valor_total||0),e=n.justificativa_estouro_orcamento||n.justificativa||"",s=await yg(n.obraId,t,e),r={...n,descricao_compra:n.descricao_compra||n.descricao||"",valor_total:t,justificativa_estouro_orcamento:e||null,estouro_orcamento:s.estouro_orcamento,status_aprovacao:n.status_aprovacao||s.status_aprovacao,data_solicitacao:Ft.now().toDate().toISOString(),status_compra:n.status_compra||"Pendente",criado_em:Ft.now(),criado_por:n.criado_por||null,ultima_atualizacao:new Date().toISOString(),atualizado_por:n.criado_por||null};return r.nf_conferida&&(r.nf_conferida_em=r.nf_conferida_em||Ft.now(),r.nf_conferida_por=r.nf_conferida_por||r.criado_por||null),(await sr(gt(J,"compras"),r)).id},atualizarCompra:async(n,t)=>{const e=Number(t.valor_total||0),s=t.justificativa_estouro_orcamento||t.justificativa||"";let r={estouro_orcamento:!1,status_aprovacao:t.status_aprovacao};(t.valor_total||t.obraId)&&(r=await yg(t.obraId,e,s));const i=ee(J,"compras",n);await je(i,{...t,descricao_compra:t.descricao_compra||t.descricao||"",valor_total:e,justificativa_estouro_orcamento:s||null,estouro_orcamento:r.estouro_orcamento,status_aprovacao:t.status_aprovacao||r.status_aprovacao,nf_conferida_em:t.nf_conferida?t.nf_conferida_em||Ft.now():null,nf_conferida_por:t.nf_conferida&&(t.nf_conferida_por||t.criado_por)||null,ultima_atualizacao:new Date().toISOString(),atualizado_por:t.atualizado_por||t.criado_por||null})},getCompra:async n=>{const t=await co(ee(J,"compras",n));return t.exists()?{id:t.id,...t.data()}:null}},vg={renderForm:({obras:n=[],fornecedores:t=[],centros:e=[],compradores:s=[],compra:r=null}={})=>{const i=!!r,o=["Pendente","Em Cotação","Aprovado","Comprado","Entregue","Recebido","Cancelado"],a=["Aprovado","Pendente","Reprovado"],c=["Lista de Material inicial","Compra emergencial","Serviço","Transporte","Outros"],l=["Normal","Alta","Crítica"],d=y=>{if(!y)return"";const E=y!=null&&y.toDate?y.toDate():new Date(y);return Number.isNaN(E.getTime())?"":E.toISOString().split("T")[0]},h=y=>String(y??"").replace(/"/g,"&quot;"),f=(y,E)=>E?y.includes(E)?y:[E,...y]:y,m=f(c,r==null?void 0:r.natureza_compra),g=f(a,r==null?void 0:r.status_aprovacao),v=f(o,r==null?void 0:r.status_compra);return`
            <div class="max-w-5xl mx-auto space-y-6">
                <div class="flex items-center justify-between">
                    <h2 class="text-2xl font-display text-text tracking-wide">${i?"Editar Compra":"Nova Compra"}</h2>
                    <button class="btn-secondary" onclick="window.history.back()">Voltar</button>
                </div>

                <div class="flex items-center gap-2 text-sm font-display uppercase tracking-wide text-text-muted">
                    <div class="step-indicator" data-step="1">1. Dados Gerais</div>
                    <div class="step-indicator" data-step="2">2. Itens e Datas</div>
                    <div class="step-indicator" data-step="3">3. Anexos</div>
                </div>

                <form id="form-compra" class="space-y-6">
                    <div class="wizard-step" data-step="1">
                        <div class="card space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Obra</label>
                                    <select id="obraId" name="obraId" class="input" required>
                                        <option value="">Selecione...</option>
                                        ${n.map(y=>`
                                            <option value="${y.id}" ${(r==null?void 0:r.obraId)===y.id?"selected":""}>${y.nome_obra||y.apelido_obra||y.id}</option>
                                        `).join("")}
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Status</label>
                                    <select id="status_compra" name="status_compra" class="input">
                                        ${v.map(y=>`<option value="${y}" ${(r==null?void 0:r.status_compra)===y?"selected":""}>${y}</option>`).join("")}
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Prioridade</label>
                                    <select id="prioridade" name="prioridade" class="input">
                                        ${l.map(y=>`<option value="${y}" ${(r==null?void 0:r.prioridade)===y?"selected":""}>${y}</option>`).join("")}
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Natureza</label>
                                    <select id="natureza_compra" name="natureza_compra" class="input">
                                        ${m.map(y=>`<option value="${y}" ${(r==null?void 0:r.natureza_compra)===y?"selected":""}>${y}</option>`).join("")}
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Status de Aprovação</label>
                                    <select id="status_aprovacao" name="status_aprovacao" class="input">
                                        ${g.map(y=>`<option value="${y}" ${(r==null?void 0:r.status_aprovacao)===y?"selected":""}>${y}</option>`).join("")}
                                    </select>
                                </div>
                                <div class="flex items-center gap-3 pt-6">
                                    <label class="flex items-center gap-2 text-sm text-text cursor-pointer">
                                        <input type="checkbox" id="retirada_estoque" name="retirada_estoque" class="rounded border-border text-primary focus:ring-primary" ${r!=null&&r.retirada_estoque?"checked":""}>
                                        <span class="font-display uppercase tracking-wide">Retirada de estoque</span>
                                    </label>
                                    <label class="flex items-center gap-2 text-sm text-text cursor-pointer">
                                        <input type="checkbox" id="nf_conferida" name="nf_conferida" class="rounded border-border text-primary focus:ring-primary" ${r!=null&&r.nf_conferida?"checked":""}>
                                        <span class="font-display uppercase tracking-wide">NF Conferida</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="wizard-step hidden" data-step="2">
                        <div class="card space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Descrição</label>
                                    <input id="descricao_compra" name="descricao_compra" class="input" placeholder="Descreva a compra" value="${h((r==null?void 0:r.descricao_compra)||(r==null?void 0:r.descricao)||"")}" required />
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Valor Total (R$)</label>
                                    <input id="valor_total" name="valor_total" type="text" inputmode="decimal" class="input" value="${r?(r.valor_total??"").toString().replace(".",","):""}" required />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Fornecedor</label>
                                    <select id="fornecedorId" name="fornecedorId" class="input">
                                        <option value="">Selecione...</option>
                                        ${t.map(y=>`
                                            <option value="${y.id}" data-name="${y.nome||y.empresa||""}" ${(r==null?void 0:r.fornecedorId)===y.id?"selected":""}>${y.nome||y.empresa||y.id}</option>
                                        `).join("")}
                                    </select>
                                    <input id="cnpj_fornecedor" name="cnpj_fornecedor" class="input mt-2" placeholder="CNPJ (opcional)" value="${h((r==null?void 0:r.cnpj_fornecedor)||"")}" />
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Data de Emissão</label>
                                    <input id="data_emissao" name="data_emissao" type="date" class="input" value="${d(r==null?void 0:r.data_emissao)}" />
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Previsão de Entrega</label>
                                    <input id="previsao_entrega" name="previsao_entrega" type="date" class="input" value="${d((r==null?void 0:r.previsao_entrega)||(r==null?void 0:r.data_entrega_prevista))}" />
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Data de Recebimento</label>
                                    <input id="data_recebimento" name="data_recebimento" type="date" class="input" value="${d(r==null?void 0:r.data_recebimento)}" />
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Centro de Custo</label>
                                    <select id="centroCustoId" name="centroCustoId" class="input">
                                        <option value="">Selecione...</option>
                                        ${e.map(y=>`
                                            <option value="${y.id}" ${(r==null?void 0:r.centroCustoId)===y.id?"selected":""}>${y.nome||y.codigo||y.id}</option>
                                        `).join("")}
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Comprador</label>
                                    <select id="compradorId" name="compradorId" class="input">
                                        <option value="">Selecione...</option>
                                        ${s.map(y=>`
                                            <option value="${y.id}" ${(r==null?void 0:r.compradorId)===y.id?"selected":""}>${y.nome||y.email||y.id}</option>
                                        `).join("")}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="card space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Solicitante</label>
                                    <input id="solicitante" name="solicitante" class="input" placeholder="Quem solicitou" value="${h((r==null?void 0:r.solicitante)||"")}" />
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Número NF-e</label>
                                    <input id="numero_nf" name="numero_nf" class="input" placeholder="Ex: 123456" value="${h((r==null?void 0:r.numero_nf)||"")}" />
                                </div>
                            </div>

                            <div id="justificativa-container" class="${r!=null&&r.justificativa_estouro_orcamento?"":"hidden"}">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Justificativa (estouro de orçamento)</label>
                                <textarea id="justificativa" name="justificativa" class="input h-24" placeholder="Explique o motivo...">${h((r==null?void 0:r.justificativa_estouro_orcamento)||"")}</textarea>
                            </div>
                        </div>
                    </div>

                    <div class="wizard-step hidden" data-step="3">
                        <div class="card space-y-4">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h3 class="text-lg font-display text-text">Anexos</h3>
                                    <p class="text-sm text-text-muted">Envie NF, CTE e comprovante/RC.</p>
                                </div>
                                <input id="file-upload" type="file" class="hidden" multiple />
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div class="flex flex-col gap-2">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">NF-e (PDF)</label>
                                    <input id="nf-upload" type="file" accept="application/pdf,image/*" class="input file:mr-2 file:px-3 file:py-2 file:border-0 file:bg-primary file:text-canvas">
                                    <p id="nf-upload-label" class="text-xs text-text-muted truncate"></p>
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">CT-e (PDF)</label>
                                    <input id="cte-upload" type="file" accept="application/pdf,image/*" class="input file:mr-2 file:px-3 file:py-2 file:border-0 file:bg-primary file:text-canvas">
                                    <p id="cte-upload-label" class="text-xs text-text-muted truncate"></p>
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Comprovante / RC</label>
                                    <input id="rc-upload" type="file" accept="application/pdf,image/*" class="input file:mr-2 file:px-3 file:py-2 file:border-0 file:bg-primary file:text-canvas">
                                    <p id="rc-upload-label" class="text-xs text-text-muted truncate"></p>
                                </div>
                            </div>
                            <div id="drop-zone" class="border-2 border-dashed border-border rounded p-6 text-center cursor-pointer hover:border-primary transition-colors">
                                <p class="text-text-muted">Arquivos adicionais (clique ou arraste)</p>
                            </div>
                            <div id="file-list" class="space-y-2"></div>
                        </div>
                    </div>

                    <div class="flex justify-between gap-2">
                        ${F.createButton({id:"btn-prev",text:"Voltar",type:"button",variant:"secondary",className:"hidden"})}
                        <div class="flex-1"></div>
                        ${F.createButton({id:"btn-next",text:"Próximo",type:"button",variant:"secondary"})}
                        ${F.createButton({id:"btn-submit",text:i?"Salvar Alterações":"Registrar Solicitação",type:"submit",className:"hidden"})}
                        ${F.createButton({id:"btn-cancel",text:"Cancelar",variant:"secondary",onClick:"window.history.back()"})}
                    </div>
                </form>
            </div>
        `}},Us={list:async()=>(await bt(gt(J,"centrosCusto"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await sr(gt(J,"centrosCusto"),n)},update:async(n,t)=>{await je(ee(J,"centrosCusto",n),t)}},js={list:async()=>(await bt(gt(J,"compradores"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await sr(gt(J,"compradores"),n)},update:async(n,t)=>{await je(ee(J,"compradores",n),t)}},zs={list:async()=>(await bt(gt(J,"fornecedores"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await sr(gt(J,"fornecedores"),n)},update:async(n,t)=>{await je(ee(J,"fornecedores",n),t)}},Sr={init:async()=>{lt.render(F.createLoader());try{const[n,t,e,s]=await Promise.all([bt(gt(J,"obras")),zs.list(),Us.list(),js.list()]),r=n.docs.map(i=>({id:i.id,...i.data()}));lt.render(vg.renderForm({obras:r,fornecedores:t,centros:e,compradores:s})),Sr.bindEvents()}catch(n){console.error(n),lt.render(`<div class="text-red-500">Erro ao carregar formulário: ${n.message}</div>`)}},initEdit:async n=>{lt.render(F.createLoader());try{const[t,e,s,r,i]=await Promise.all([bt(gt(J,"obras")),zs.list(),Us.list(),js.list(),yr.getCompra(n)]),o=t.docs.map(a=>({id:a.id,...a.data()}));lt.render(vg.renderForm({obras:o,fornecedores:e,centros:s,compradores:r,compra:i})),Sr.bindEvents(n,i,e)}catch(t){console.error(t),lt.render(`<div class="text-red-500">Erro ao carregar compra: ${t.message}</div>`)}},bindEvents:(n=null,t=null,e=[])=>{const s=document.getElementById("form-compra"),r=document.getElementById("file-upload"),i=document.getElementById("nf-upload"),o=document.getElementById("cte-upload"),a=document.getElementById("rc-upload"),c=document.getElementById("drop-zone"),l=document.getElementById("descricao_compra"),d=document.getElementById("obraId"),h=document.getElementById("status_compra"),f=document.getElementById("previsao_entrega"),m=document.getElementById("data_recebimento"),g=document.getElementById("data_emissao"),v=document.getElementById("retirada_estoque"),y=document.getElementById("fornecedorId");let E=[],A=null;const C=document.getElementById("valor_total"),D=document.getElementById("cnpj_fornecedor");let R=1;const M=document.querySelectorAll(".wizard-step"),T=document.querySelectorAll(".step-indicator"),b=document.getElementById("btn-prev"),x=document.getElementById("btn-next"),I=document.getElementById("btn-submit"),S=B=>{R=B,M.forEach(V=>V.classList.toggle("hidden",Number(V.dataset.step)!==B)),T.forEach(V=>{const q=Number(V.dataset.step)===B;V.classList.toggle("text-text",q),V.classList.toggle("text-text-muted",!q),V.classList.toggle("font-semibold",q)}),b&&b.classList.toggle("hidden",B===1),x&&x.classList.toggle("hidden",B===3),I&&I.classList.toggle("hidden",B!==3)};b==null||b.addEventListener("click",()=>S(Math.max(1,R-1))),x==null||x.addEventListener("click",()=>S(Math.min(3,R+1))),S(R),c==null||c.addEventListener("click",()=>r==null?void 0:r.click()),r==null||r.addEventListener("change",B=>P(B.target.files));const P=B=>{E=[...E,...Array.from(B)],k()},k=()=>{const B=document.getElementById("file-list");B&&(B.innerHTML=E.map((V,q)=>`
                <div class="flex items-center justify-between bg-surface border border-border p-2 rounded">
                    <span class="text-sm truncate text-text">${V.name}</span>
                    <button type="button" class="text-alert hover:text-alert/80" onclick="document.getElementById('form-compra').dispatchEvent(new CustomEvent('remove-file', {detail: ${q}}))">
                        ${F.createButton({text:"X",variant:"secondary",className:"px-2 py-0 text-xs"})}
                    </button>
                </div>
            `).join(""))};s.addEventListener("remove-file",B=>{E.splice(B.detail,1),k()}),l==null||l.addEventListener("blur",async()=>{const B=d.value,V=l.value;B&&V.length>3&&await yr.checkDuplicidade(B,V)&&F.createToast("Atenção: Já existe um pedido similar para esta obra!","warning")}),C==null||C.addEventListener("input",B=>{B.target.value=et.formatCurrencyInput(B.target.value)}),D==null||D.addEventListener("input",B=>{B.target.value=et.formatCnpjInput(B.target.value)}),D==null||D.addEventListener("blur",B=>{const V=B.target.value;V&&!et.validateCNPJ(V)&&F.createToast("CNPJ inválido.","warning")}),C==null||C.addEventListener("blur",async()=>{const B=d==null?void 0:d.value,V=C.value,q=et.parseCurrency(V),W=document.getElementById("justificativa-container"),tt=document.getElementById("justificativa");if(B&&q>0)try{const at=await bt(Yt(gt(J,"obras"),Rt("__name__","==",B)));if(!at.empty){const ht=at.docs[0].data(),K=Number(ht.valor_orcado||ht.orcamento||0),wt=Number(ht.tolerancia_percentual||0),St=K+K*wt;St>0&&q>St?(W.classList.remove("hidden"),tt.required=!0,F.createToast("Valor ultrapassa o orçamento da obra! Justificativa necessária.","warning")):(W.classList.add("hidden"),tt.required=!1)}}catch(at){console.error("Erro ao validar orçamento:",at)}});const X=B=>{const V=new Date().toISOString().split("T")[0];if(B){if(h&&(h.value="Recebido"),g&&(g.value=V,g.readOnly=!0),y){A||(A=y.value);const q=Array.from(y.options).find(W=>{var at;return(((at=W.dataset)==null?void 0:at.name)||W.textContent||"").toLowerCase().includes("estoque axel")});q&&(y.value=q.value),y.disabled=!0}f&&(f.value=f.value||V,f.readOnly=!0),m&&(m.value=m.value||V,m.readOnly=!0),g&&!g.value&&(g.value=V)}else h&&h.value==="Recebido"&&!t&&(h.value="Pendente"),y&&(y.disabled=!1,A&&(y.value=A)),g&&(g.readOnly=!1),f&&(f.readOnly=!1),m&&(m.readOnly=!1)},j=(B,V)=>{var W;const q=document.getElementById(V);!q||!((W=B==null?void 0:B.files)!=null&&W.length)||(q.textContent=B.files[0].name)};if(i==null||i.addEventListener("change",()=>j(i,"nf-upload-label")),o==null||o.addEventListener("change",()=>j(o,"cte-upload-label")),a==null||a.addEventListener("change",()=>j(a,"rc-upload-label")),t){if(s.obraId.value=t.obraId||"",s.prioridade&&(s.prioridade.value=t.prioridade||"Normal"),s.descricao_compra.value=t.descricao_compra||t.descricao||"",s.valor_total.value=et.formatCurrencyInput(t.valor_total||0),s.fornecedorId&&(s.fornecedorId.value=t.fornecedorId||""),s.data_emissao.value=(t.data_emissao||"").split("T")[0]||"",s.previsao_entrega.value=(t.previsao_entrega||"").split("T")[0]||"",s.data_recebimento.value=(t.data_recebimento||"").split("T")[0]||"",s.status_compra.value=t.status_compra||"Pendente",s.centroCustoId&&(s.centroCustoId.value=t.centroCustoId||""),s.natureza_compra&&(s.natureza_compra.value=t.natureza_compra||""),s.compradorId&&(s.compradorId.value=t.compradorId||""),s.numero_nf&&(s.numero_nf.value=t.numero_nf||""),s.status_aprovacao&&(s.status_aprovacao.value=t.status_aprovacao||"Aprovado"),s.nf_conferida&&(s.nf_conferida.checked=!!t.nf_conferida),t.justificativa_estouro_orcamento){const B=document.getElementById("justificativa-container"),V=document.getElementById("justificativa");B.classList.remove("hidden"),V.value=t.justificativa_estouro_orcamento}t.solicitante&&s.solicitante&&(s.solicitante.value=t.solicitante),s.retirada_estoque.checked=t.retirada_estoque===!0||t.retirada_estoque==="on"}v&&(X(v.checked),v.addEventListener("change",B=>X(B.target.checked))),C&&!C.value&&(C.value=et.formatCurrencyInput(0)),s.addEventListener("submit",async B=>{var q,W,tt,at,ht;B.preventDefault();const V=document.getElementById("btn-submit");try{if(D&&D.value&&!et.validateCNPJ(D.value)){F.createToast("CNPJ inválido.","warning"),D.focus();return}const K=g!=null&&g.value?new Date(g.value):null,wt=f!=null&&f.value?new Date(f.value):null,St=m!=null&&m.value?new Date(m.value):null;if(K&&wt&&K>wt){F.createToast("Data de emissão não pode ser após a previsão de entrega.","warning"),f==null||f.focus();return}if(K&&St&&K>St){F.createToast("Data de emissão não pode ser após o recebimento.","warning"),m==null||m.focus();return}V.disabled=!0,V.innerHTML=F.createLoader();const ue=[];let tn=(t==null?void 0:t.pdf_nf_path)||null,Jr=(t==null?void 0:t.pdf_cte_path)||null,Zr=(t==null?void 0:t.comprovante_rc_path)||null;const Un=async(Oe,ni)=>{var ri;const si=(ri=Oe==null?void 0:Oe.files)==null?void 0:ri[0];return si?yr.uploadArquivo(si,`${ni}/${Date.now()}_${si.name}`):null};tn=await Un(i,"compras/nf")||tn,Jr=await Un(o,"compras/cte")||Jr,Zr=await Un(a,"compras/rc")||Zr;for(const Oe of E){const ni=await yr.uploadArquivo(Oe,`compras/${Date.now()}_${Oe.name}`);ue.push({nome:Oe.name,url:ni})}const cr=new FormData(s),He=Object.fromEntries(cr.entries()),ti=et.parseCurrency(He.valor_total||0),ei=(He.justificativa||He.justificativa_estouro_orcamento||"").trim(),ne={...He,pdf_nf_path:tn,pdf_cte_path:Jr,comprovante_rc_path:Zr,descricao_compra:He.descricao_compra,solicitante:He.solicitante||((q=At.state.currentUser)==null?void 0:q.nome)||((W=At.state.currentUser)==null?void 0:W.email),anexos:ue,valor_total:ti,justificativa_estouro_orcamento:ei||null,criado_por:((tt=At.state.currentUser)==null?void 0:tt.email)||null,cnpj_fornecedor:He.cnpj_fornecedor||null};ne.retirada_estoque=s.retirada_estoque.checked,ne.nf_conferida=((at=s.nf_conferida)==null?void 0:at.checked)||!1,ne.nf_conferida&&(ne.nf_conferida_por=((ht=At.state.currentUser)==null?void 0:ht.email)||ne.criado_por||null,ne.nf_conferida_em=ne.nf_conferida_em||new Date().toISOString()),ne.status_compra||(ne.status_compra="Pendente"),ne.status_aprovacao||(ne.status_aprovacao="Aprovado"),["data_emissao","previsao_entrega","data_recebimento"].forEach(Oe=>{ne[Oe]===""&&delete ne[Oe]}),n?(await yr.atualizarCompra(n,ne),F.createToast("Compra atualizada com sucesso!")):(await yr.salvarCompra(ne),F.createToast("Compra registrada com sucesso!")),Et.navigate("/compras")}catch(K){console.error(K);const wt=(K==null?void 0:K.code)==="JUSTIFICATIVA_NECESSARIA"?"Justificativa é obrigatória quando ultrapassa o orçamento da obra.":"Erro ao registrar: "+K.message;F.createToast(wt,"error"),V.disabled=!1,V.innerHTML="<span>Registrar Solicitação</span>"}})}},ou={renderControls:(n="table",t=[])=>`
            <div class="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 class="text-2xl font-display text-text tracking-wide">Relatório de Compras</h2>
                <div class="flex items-center gap-3 flex-wrap">
                    <button id="btn-export-csv" class="btn-secondary text-sm px-4 py-2 font-display uppercase tracking-wide">Exportar CSV</button>
                    <button id="btn-export-obra" class="btn-secondary text-sm px-4 py-2 font-display uppercase tracking-wide">CSV por Obra</button>
                    <button id="btn-export-fornecedor" class="btn-secondary text-sm px-4 py-2 font-display uppercase tracking-wide">CSV por Fornecedor</button>
                    <div class="flex gap-2 bg-surface border border-border p-1 rounded shadow-heavy">
                        <button id="view-table" class="px-4 py-2 rounded text-sm font-display uppercase tracking-wide transition-colors ${n==="table"?"bg-primary text-canvas":"text-text-muted hover:text-text"}">
                            Tabela
                        </button>
                        <button id="view-kanban" class="px-4 py-2 rounded text-sm font-display uppercase tracking-wide transition-colors ${n==="kanban"?"bg-primary text-canvas":"text-text-muted hover:text-text"}">
                            Kanban
                        </button>
                    </div>
                </div>
            </div>

            <!-- Filters -->
            <div class="card mb-6">
                <h3 class="text-sm font-display text-text mb-4 uppercase tracking-wide">Filtros Avançados</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <input type="text" id="filter-search" placeholder="Buscar descrição..." class="input text-sm">
                    <select id="filter-status" class="input text-sm">
                        <option value="">Todos os Status</option>
                        <option value="Pendente">Pendente</option>
                        <option value="Em Cotação">Em Cotação</option>
                        <option value="Aprovado">Aprovado</option>
                        <option value="Comprado">Comprado</option>
                        <option value="Recebido">Recebido</option>
                        <option value="Entregue">Entregue</option>
                        <option value="Cancelado">Cancelado</option>
                    </select>
                    <select id="filter-obra" class="input text-sm">
                        <option value="">Todas as Obras</option>
                        ${t.map(e=>`<option value="${e.id}">${e.nome_obra||e.apelido_obra||e.id}</option>`).join("")}
                    </select>
                    <select id="filter-prioridade" class="input text-sm">
                        <option value="">Todas Prioridades</option>
                        <option value="Normal">Normal</option>
                        <option value="Alta">Alta</option>
                        <option value="Critica">Crítica</option>
                    </select>
                    <select id="filter-status-aprov" class="input text-sm">
                        <option value="">Status Aprovação</option>
                        <option value="Aprovado">Aprovado</option>
                        <option value="Pendente">Pendente</option>
                        <option value="Reprovado">Reprovado</option>
                    </select>
                    <select id="filter-fornecedor" class="input text-sm">
                        <option value="">Todos Fornecedores</option>
                    </select>
                    <select id="filter-comprador" class="input text-sm">
                        <option value="">Todos Compradores</option>
                    </select>
                    <select id="filter-natureza" class="input text-sm">
                        <option value="">Todas Naturezas</option>
                    </select>
                    <select id="filter-cc" class="input text-sm">
                        <option value="">Todos Centros de Custo</option>
                    </select>
                    <div class="flex gap-2">
                        <button id="btn-apply-filters" class="btn text-sm flex-1">Aplicar</button>
                        <button id="btn-clear-filters" class="btn-secondary text-sm">Limpar</button>
                    </div>
                </div>
                
                <!-- Date Range -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-border">
                    <input type="date" id="filter-date-start" class="input text-sm" placeholder="Data Início">
                    <input type="date" id="filter-date-end" class="input text-sm" placeholder="Data Fim">
                    <div class="flex items-center gap-4 flex-wrap">
                        <label class="flex items-center gap-2 text-sm text-text cursor-pointer">
                            <input type="checkbox" id="filter-only-delayed" class="rounded border-border text-primary focus:ring-primary">
                            <span class="font-display uppercase tracking-wide">Apenas Atrasados</span>
                        </label>
                        <label class="flex items-center gap-2 text-sm text-text cursor-pointer">
                            <input type="checkbox" id="filter-nf-conferida" class="rounded border-border text-primary focus:ring-primary">
                            <span class="font-display uppercase tracking-wide">NF Conferida</span>
                        </label>
                        <input type="text" id="filter-nf" class="input text-sm flex-1" placeholder="Número NF-e">
                    </div>
                </div>
            </div>
        `,renderTable:(n,t=new Map)=>n.length?`
            <div class="bg-surface rounded shadow-heavy border border-border overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-border">
                        <thead class="bg-canvas">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Data</th>
                                <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Obra</th>
                                <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Descrição</th>
                                <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Valor</th>
                                <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Status</th>
                                <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">NF/CTE/RC</th>
                                <th class="px-6 py-3 text-right text-xs font-display text-text-muted uppercase tracking-wide">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-border">
                            ${n.map(e=>`
                                <tr class="hover:bg-canvas transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${et.formatDate(e.data_solicitacao||e.data_emissao)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-display text-text">${t.get(e.obraId)||e.obraId||"-"}</td>
                                    <td class="px-6 py-4 text-sm text-text max-w-xs truncate" title="${e.descricao_compra||e.descricao||""}">${e.descricao_compra||e.descricao||"-"}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${et.formatCurrency(e.valor_total??e.valor_estimado??0)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        ${et.renderStatusBadge(e.status_compra,e.previsao_entrega||e.data_entrega_prevista)}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">
                                        ${e.pdf_nf_path?`<a href="${e.pdf_nf_path}" target="_blank" class="text-primary underline text-xs">NF</a>`:"-"}
                                        ${e.pdf_cte_path?`<a href="${e.pdf_cte_path}" target="_blank" class="text-primary underline text-xs ml-2">CTE</a>`:""}
                                        ${e.comprovante_rc_path?`<a href="${e.comprovante_rc_path}" target="_blank" class="text-primary underline text-xs ml-2">RC</a>`:""}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div class="inline-flex items-center justify-end gap-2">
                                            <button class="text-text-muted hover:text-text inline-flex items-center" data-action="view" data-id="${e.id}" title="Ver">${Mt.eye}</button>
                                            <button class="text-primary hover:text-primary-strong inline-flex items-center" data-action="edit" data-id="${e.id}" title="Editar">${Mt.pencil}</button>
                                            <button class="text-alert hover:text-alert/80 inline-flex items-center" data-action="delete" data-id="${e.id}" title="Excluir">${Mt.trash}</button>
                                        </div>
                                    </td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        `:'<div class="text-center py-10 heading-muted">Nenhum registro encontrado.</div>',renderKanban:(n,t=new Map)=>`
            <div class="flex overflow-x-auto gap-4 pb-4 h-[calc(100vh-250px)]">
                ${["Pendente","Em Cotação","Aprovado","Comprado","Entregue"].map(s=>{const r=n.filter(i=>i.status_compra===s);return`
                        <div class="min-w-[300px] w-[300px] flex flex-col bg-surface border border-border rounded p-3 shadow-heavy">
                            <div class="flex justify-between items-center mb-3 px-1">
                                <h3 class="font-display text-text">${s}</h3>
                                <span class="bg-canvas text-text-muted text-xs px-2 py-1 rounded border border-border font-display">${r.length}</span>
                            </div>
                            <div class="flex-1 overflow-y-auto space-y-3 custom-scrollbar" ondragover="event.preventDefault()" ondrop="document.dispatchEvent(new CustomEvent('kanban-drop', {detail: {status: '${s}'}}))">
                                ${r.map(i=>`
                                    <div class="bg-surface p-4 rounded shadow-heavy border border-border cursor-move hover:border-primary transition-colors" draggable="true" data-id="${i.id}">
                                        <div class="flex justify-between items-start mb-2">
                                            <span class="text-xs font-display text-primary bg-canvas px-2 py-0.5 rounded border border-primary">${t.get(i.obraId)||i.obraId}</span>
                                            <span class="text-xs text-text-muted">${et.formatDate(i.data_solicitacao)}</span>
                                        </div>
                                        <p class="text-sm font-display text-text mb-2 line-clamp-2">${i.descricao_compra||i.descricao||"-"}</p>
                                        <div class="flex justify-between items-center mt-3">
                                            <span class="text-sm font-display text-primary uppercase">${et.formatCurrency(i.valor_total??i.valor_estimado??0)}</span>
                                            <div class="flex items-center gap-2">
                                                ${i.pdf_nf_path?`<a href="${i.pdf_nf_path}" target="_blank" class="text-primary underline text-xs" title="NF">NF</a>`:""}
                                                ${i.pdf_cte_path?`<a href="${i.pdf_cte_path}" target="_blank" class="text-primary underline text-xs" title="CTE">CTE</a>`:""}
                                                ${i.comprovante_rc_path?`<a href="${i.comprovante_rc_path}" target="_blank" class="text-primary underline text-xs" title="RC">RC</a>`:""}
                                                <button class="text-text-muted hover:text-primary" title="Mover Próximo" onclick="document.dispatchEvent(new CustomEvent('kanban-move-next', {detail: {id: '${i.id}', current: '${s}'}}))">
                                                    →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                    `}).join("")}
            </div>
        `},z={currentView:"table",compras:[],filters:{},obras:[],fornecedores:[],compradores:[],centros:[],obraMap:new Map,fornecedorMap:new Map,compradorMap:new Map,centroMap:new Map,init:async()=>{await z.load(),await z.render()},decorateCompras:()=>{z.obraMap=new Map(z.obras.map(n=>[n.id,n.nome_obra||n.apelido_obra||n.id])),z.fornecedorMap=new Map(z.fornecedores.map(n=>[n.id,n.nome||n.empresa||n.id])),z.compradorMap=new Map(z.compradores.map(n=>[n.id,n.nome||n.email||n.id])),z.centroMap=new Map(z.centros.map(n=>[n.id,n.nome||n.codigo||n.id])),z.compras=z.compras.map(n=>{const t=Number(n.valor_total??n.valor_estimado??0);return{...n,valor_total:t,obraNome:z.obraMap.get(n.obraId)||n.obraId||"-",fornecedorNome:z.fornecedorMap.get(n.fornecedorId)||n.fornecedor||"",compradorNome:z.compradorMap.get(n.compradorId)||n.comprador||"",centroCustoNome:z.centroMap.get(n.centroCustoId)||n.centro_custo||n.centroCustoId||"",pdf_nf_path:n.pdf_nf_path||null,pdf_cte_path:n.pdf_cte_path||null,comprovante_rc_path:n.comprovante_rc_path||null,anexos:n.anexos||[]}})},load:async()=>{const[n,t,e,s,r]=await Promise.all([Tr.getCompras(),Ye.getObras(),zs.list(),js.list(),Us.list()]);z.compras=n,z.obras=t,z.fornecedores=e,z.compradores=s,z.centros=r,z.decorateCompras()},render:async()=>{const n=document.createElement("div");n.innerHTML=ou.renderControls(z.currentView,z.obras);const t=document.createElement("div");t.id="reports-content",t.innerHTML=z.currentView==="table"?ou.renderTable(z.compras,z.obraMap):ou.renderKanban(z.compras,z.obraMap),n.appendChild(t),lt.render(n.innerHTML),z.bindEvents()},applyFilters:async()=>{var g,v,y,E,A,C,D,R,M,T,b,x,I,S;const n=((g=document.getElementById("filter-search"))==null?void 0:g.value.toLowerCase())||"",t=((v=document.getElementById("filter-status"))==null?void 0:v.value)||"",e=((y=document.getElementById("filter-obra"))==null?void 0:y.value)||"",s=((E=document.getElementById("filter-prioridade"))==null?void 0:E.value)||"",r=((A=document.getElementById("filter-natureza"))==null?void 0:A.value)||"",i=((C=document.getElementById("filter-cc"))==null?void 0:C.value)||"",o=((D=document.getElementById("filter-fornecedor"))==null?void 0:D.value)||"",a=((R=document.getElementById("filter-comprador"))==null?void 0:R.value)||"",c=((M=document.getElementById("filter-status-aprov"))==null?void 0:M.value)||"",l=((T=document.getElementById("filter-nf-conferida"))==null?void 0:T.checked)||!1,d=((b=document.getElementById("filter-nf"))==null?void 0:b.value)||"",h=((x=document.getElementById("filter-date-start"))==null?void 0:x.value)||"",f=((I=document.getElementById("filter-date-end"))==null?void 0:I.value)||"",m=((S=document.getElementById("filter-only-delayed"))==null?void 0:S.checked)||!1;z.filters={search:n,status:t,obra:e,prioridade:s,natureza:r,cc:i,fornecedor:o,comprador:a,statusAprov:c,nfConferida:l,nf:d,dateStart:h,dateEnd:f,onlyDelayed:m},z.compras=await Tr.getCompras(z.filters),z.decorateCompras(),z.render()},bindEvents:()=>{var a,c,l,d,h,f,m;const n=(g,v)=>{const y=document.getElementById(g);y&&(y.value=v??"")};n("filter-search",z.filters.search||""),n("filter-status",z.filters.status||""),n("filter-obra",z.filters.obra||""),n("filter-prioridade",z.filters.prioridade||""),n("filter-natureza",z.filters.natureza||""),n("filter-cc",z.filters.cc||""),n("filter-fornecedor",z.filters.fornecedor||""),n("filter-comprador",z.filters.comprador||""),n("filter-status-aprov",z.filters.statusAprov||""),n("filter-nf",z.filters.nf||""),n("filter-date-start",z.filters.dateStart||""),n("filter-date-end",z.filters.dateEnd||"");const t=document.getElementById("filter-only-delayed");t&&(t.checked=!!z.filters.onlyDelayed);const e=document.getElementById("filter-nf-conferida");e&&(e.checked=!!z.filters.nfConferida),(a=document.getElementById("view-table"))==null||a.addEventListener("click",()=>{z.currentView="table",z.render()}),(c=document.getElementById("view-kanban"))==null||c.addEventListener("click",()=>{z.currentView="kanban",z.render()});const s=document.getElementById("filter-natureza"),r=document.getElementById("filter-cc"),i=document.getElementById("filter-fornecedor"),o=document.getElementById("filter-comprador");if(s){const g=Array.from(new Set(z.compras.map(v=>(v.natureza_compra||"Outros").trim())));s.innerHTML='<option value="">Todas Naturezas</option>'+g.map(v=>`<option value="${v}">${v}</option>`).join("")}r&&(r.innerHTML='<option value="">Todos Centros de Custo</option>'+z.centros.map(g=>`<option value="${g.id}">${g.nome||g.codigo||g.id}</option>`).join("")),i&&(i.innerHTML='<option value="">Todos Fornecedores</option>'+z.fornecedores.map(g=>`<option value="${g.id}">${g.nome||g.empresa||g.id}</option>`).join("")),o&&(o.innerHTML='<option value="">Todos Compradores</option>'+z.compradores.map(g=>`<option value="${g.id}">${g.nome||g.id}</option>`).join("")),n("filter-natureza",z.filters.natureza||""),n("filter-cc",z.filters.cc||""),n("filter-fornecedor",z.filters.fornecedor||""),n("filter-comprador",z.filters.comprador||""),n("filter-status-aprov",z.filters.statusAprov||""),(l=document.getElementById("btn-apply-filters"))==null||l.addEventListener("click",()=>{z.applyFilters()}),(d=document.getElementById("btn-clear-filters"))==null||d.addEventListener("click",()=>{document.getElementById("filter-search").value="",document.getElementById("filter-status").value="",document.getElementById("filter-obra").value="",document.getElementById("filter-prioridade").value="",document.getElementById("filter-natureza").value="",document.getElementById("filter-cc").value="";const g=document.getElementById("filter-fornecedor"),v=document.getElementById("filter-comprador"),y=document.getElementById("filter-nf"),E=document.getElementById("filter-status-aprov");g&&(g.value=""),v&&(v.value=""),y&&(y.value=""),E&&(E.value=""),document.getElementById("filter-date-start").value="",document.getElementById("filter-date-end").value="",document.getElementById("filter-only-delayed").checked=!1;const A=document.getElementById("filter-nf-conferida");A&&(A.checked=!1),z.applyFilters()}),(h=document.getElementById("btn-export-csv"))==null||h.addEventListener("click",()=>{try{z.exportCsv()}catch(g){F.createToast("Erro ao exportar: "+g.message,"error")}}),(f=document.getElementById("btn-export-obra"))==null||f.addEventListener("click",()=>{try{z.exportGrouped("obra")}catch(g){F.createToast("Erro ao exportar: "+g.message,"error")}}),(m=document.getElementById("btn-export-fornecedor"))==null||m.addEventListener("click",()=>{try{z.exportGrouped("fornecedor")}catch(g){F.createToast("Erro ao exportar: "+g.message,"error")}}),document.querySelectorAll('[data-action="view"]').forEach(g=>{g.addEventListener("click",()=>{const v=g.dataset.id,y=z.compras.find(E=>E.id===v);if(!y)return alert("Compra não encontrada.");z.showModal(y,!1)})}),document.querySelectorAll('[data-action="edit"]').forEach(g=>{g.addEventListener("click",()=>{const v=g.dataset.id,y=z.compras.find(E=>E.id===v);if(!y)return alert("Compra não encontrada.");z.showModal(y,!0)})}),document.querySelectorAll('[data-action="delete"]').forEach(g=>{g.addEventListener("click",async()=>{const v=g.dataset.id;if(await Ec.confirm({message:"Confirmar exclusão da compra?"}))try{await Tr.deleteCompra(v),F.createToast("Compra excluída."),await z.load(),z.render()}catch(E){F.createToast("Erro ao excluir: "+E.message,"error")}})}),document.addEventListener("kanban-move-next",async g=>{const{id:v,current:y}=g.detail,E=["Pendente","Em Cotação","Aprovado","Comprado","Entregue"],A=E.indexOf(y)+1;if(A<E.length){const C=E[A];try{await Tr.updateStatus(v,C),F.createToast(`Movido para ${C}`),await z.load(),z.render()}catch(D){F.createToast("Erro ao mover: "+D.message,"error")}}})},showModal:(n,t=!1)=>{var o,a,c,l;const e=document.createElement("div");e.className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4";const s=(d=[],h,f=m=>m.label)=>d.map(m=>{const g=m.value??m.id,v=f(m);return`<option value="${g}" ${h===g?"selected":""}>${v}</option>`}).join(""),r=(d,h)=>`
            <div>
                <label class="text-xs heading-muted uppercase">${d}</label>
                ${h}
            </div>
        `;e.innerHTML=`
            <div class="bg-surface border border-border rounded shadow-heavy w-full max-w-4xl">
                <div class="flex justify-between items-center px-4 py-3 border-b border-border">
                    <h3 class="text-lg font-display text-text">${t?"Editar Compra":"Detalhes da Compra"}</h3>
                    <button id="modal-close" class="text-text-muted hover:text-text">${Mt.close}</button>
                </div>
                <div class="p-4 space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${r("Obra",t?`<select id="modal-obra" class="input">
                                    ${s(z.obras,n.obraId,d=>d.nome_obra||d.apelido_obra||d.id)}
                                </select>`:`<p class="text-text">${n.obraNome||n.obraId||"-"}</p>`)}
                        ${r("Status",t?`<select id="modal-status" class="input">${["Pendente","Em Cotação","Aprovado","Comprado","Entregue","Recebido","Cancelado"].map(d=>`<option value="${d}" ${n.status_compra===d?"selected":""}>${d}</option>`).join("")}</select>`:`<p class="text-text">${n.status_compra||"-"}</p>`)}
                        ${r("Descrição",t?`<input id="modal-desc" class="input" value="${(n.descricao_compra||n.descricao||"").replace(/"/g,"&quot;")}">`:`<p class="text-text">${n.descricao_compra||n.descricao||"-"}</p>`)}
                        ${r("Valor",t?`<input id="modal-valor" type="number" step="0.01" class="input" value="${n.valor_total??n.valor_estimado??0}">`:`<p class="text-text">${et.formatCurrency(n.valor_total??n.valor_estimado??0)}</p>`)}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${r("Fornecedor",t?`<select id="modal-fornecedor" class="input"><option value="">Selecione...</option>${s(z.fornecedores,n.fornecedorId,d=>d.nome||d.empresa||d.id)}</select>`:`<p class="text-text">${n.fornecedorNome||n.fornecedor||"-"}</p>`)}
                        ${r("Comprador",t?`<select id="modal-comprador" class="input"><option value="">Selecione...</option>${s(z.compradores,n.compradorId,d=>d.nome||d.email||d.id)}</select>`:`<p class="text-text">${n.compradorNome||n.comprador||"-"}</p>`)}
                        ${r("Centro de Custo",t?`<select id="modal-cc" class="input"><option value="">Selecione...</option>${s(z.centros,n.centroCustoId,d=>d.nome||d.codigo||d.id)}</select>`:`<p class="text-text">${n.centroCustoNome||"-"}</p>`)}
                        ${r("Natureza",t?`<input id="modal-natureza" class="input" value="${(n.natureza_compra||"").replace(/"/g,"&quot;")}" />`:`<p class="text-text">${n.natureza_compra||"-"}</p>`)}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        ${r("NF-e",n.pdf_nf_path?`<a href="${n.pdf_nf_path}" target="_blank" class="text-primary underline break-all">Abrir NF</a>`:"-")}
                        ${r("CT-e",n.pdf_cte_path?`<a href="${n.pdf_cte_path}" target="_blank" class="text-primary underline break-all">Abrir CT-e</a>`:"-")}
                        ${r("Comprovante/RC",n.comprovante_rc_path?`<a href="${n.comprovante_rc_path}" target="_blank" class="text-primary underline break-all">Abrir RC</a>`:"-")}
                    </div>
                    ${(o=n.anexos)!=null&&o.length?`
                        <div class="space-y-2">
                            <label class="text-xs heading-muted uppercase">Anexos</label>
                            <ul class="list-disc list-inside text-sm text-text">
                                ${n.anexos.map(d=>`<li><a class="text-primary underline break-all" target="_blank" href="${d.url}">${d.nome||"Arquivo"}</a></li>`).join("")}
                            </ul>
                        </div>
                    `:""}

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        ${r("Data Emissão",t?`<input id="modal-emissao" type="date" class="input" value="${(n.data_emissao||"").split("T")[0]}">`:`<p class="text-text">${et.formatDate(n.data_emissao)}</p>`)}
                        ${r("Prev. Entrega",t?`<input id="modal-prev" type="date" class="input" value="${(n.previsao_entrega||n.data_entrega_prevista||"").split("T")[0]}">`:`<p class="text-text">${et.formatDate(n.previsao_entrega||n.data_entrega_prevista)}</p>`)}
                        ${r("Recebimento",t?`<input id="modal-receb" type="date" class="input" value="${(n.data_recebimento||"").split("T")[0]}">`:`<p class="text-text">${et.formatDate(n.data_recebimento)}</p>`)}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${r("Número NF-e",t?`<input id="modal-nf" class="input" value="${(n.numero_nf||"").replace(/"/g,"&quot;")}">`:`<p class="text-text">${n.numero_nf||"-"}</p>`)}
                        ${r("CNPJ Fornecedor",t?`<input id="modal-cnpj" class="input" value="${(n.cnpj_fornecedor||"").replace(/"/g,"&quot;")}" />`:`<p class="text-text">${n.cnpj_fornecedor||"-"}</p>`)}
                        ${r("Status Aprovação",t?`<select id="modal-aprov" class="input">${["Aprovado","Pendente","Reprovado"].map(d=>`<option value="${d}" ${n.status_aprovacao===d?"selected":""}>${d}</option>`).join("")}</select>`:`<p class="text-text">${n.status_aprovacao||"-"}</p>`)}
                    </div>

                    ${t?`
                        <label class="inline-flex items-center gap-2 text-sm text-text cursor-pointer">
                            <input id="modal-nf-conferida" type="checkbox" class="rounded border-border text-primary focus:ring-primary" ${n.nf_conferida?"checked":""}>
                            <span class="font-display uppercase tracking-wide">NF Conferida</span>
                        </label>
                    `:""}

                    <div class="flex justify-end gap-2">
                        ${t?'<button id="modal-save" class="btn">Salvar</button>':""}
                        <button id="modal-close-2" class="btn-secondary">Fechar</button>
                    </div>
                </div>
            </div>
        `,document.body.appendChild(e);const i=()=>e.remove();(a=e.querySelector("#modal-close"))==null||a.addEventListener("click",i),(c=e.querySelector("#modal-close-2"))==null||c.addEventListener("click",i),t&&((l=e.querySelector("#modal-save"))==null||l.addEventListener("click",async()=>{var h,f,m,g,v,y,E,A,C,D,R,M,T,b,x;const d={obraId:((h=e.querySelector("#modal-obra"))==null?void 0:h.value)||n.obraId,status_compra:((f=e.querySelector("#modal-status"))==null?void 0:f.value)||n.status_compra,descricao_compra:((m=e.querySelector("#modal-desc"))==null?void 0:m.value)||"",valor_total:Number(((g=e.querySelector("#modal-valor"))==null?void 0:g.value)||0),fornecedorId:((v=e.querySelector("#modal-fornecedor"))==null?void 0:v.value)||"",compradorId:((y=e.querySelector("#modal-comprador"))==null?void 0:y.value)||"",centroCustoId:((E=e.querySelector("#modal-cc"))==null?void 0:E.value)||"",natureza_compra:((A=e.querySelector("#modal-natureza"))==null?void 0:A.value)||"",numero_nf:((C=e.querySelector("#modal-nf"))==null?void 0:C.value)||"",cnpj_fornecedor:((D=e.querySelector("#modal-cnpj"))==null?void 0:D.value)||"",status_aprovacao:((R=e.querySelector("#modal-aprov"))==null?void 0:R.value)||n.status_aprovacao,data_emissao:((M=e.querySelector("#modal-emissao"))==null?void 0:M.value)||"",previsao_entrega:((T=e.querySelector("#modal-prev"))==null?void 0:T.value)||"",data_recebimento:((b=e.querySelector("#modal-receb"))==null?void 0:b.value)||"",nf_conferida:((x=e.querySelector("#modal-nf-conferida"))==null?void 0:x.checked)||!1};["data_emissao","previsao_entrega","data_recebimento"].forEach(I=>{d[I]===""&&delete d[I]});try{if(d.cnpj_fornecedor&&!et.validateCNPJ(d.cnpj_fornecedor)){alert("CNPJ inválido.");return}await Tr.updateCompra(n.id,d),i(),await z.load(),z.render(),F.createToast("Compra atualizada.")}catch(I){alert("Erro ao salvar: "+I.message)}}))},exportCsv:()=>{if(!z.compras.length){F.createToast("Sem dados para exportar.","warning");return}const n=new Map(z.obras.map(d=>[d.id,d.nome_obra||d.apelido_obra||d.id])),t=new Map(z.fornecedores.map(d=>[d.id,d.nome||d.empresa||d.id])),e=new Map(z.compradores.map(d=>[d.id,d.nome||d.id])),s=new Map(z.centros.map(d=>[d.id,d.nome||d.codigo||d.id])),r=["Obra","NF-e","Valor","Data Emissao","Status","Data Recebimento","Prev. Entrega","Natureza","Centro Custo","Comprador","Fornecedor","CNPJ Fornecedor","Justificativa Estouro","Status Aprovacao"],i=z.compras.map(d=>[`"${n.get(d.obraId)||d.obraId||""}"`,`"${d.numero_nf||""}"`,String(d.valor_total||d.valor_estimado||0).replace(".",","),d.data_emissao||"",d.status_compra||"",d.data_recebimento||"",d.previsao_entrega||d.data_entrega_prevista||"",d.natureza_compra||"",s.get(d.centroCustoId)||d.centroCustoNome||d.centro_custo||d.centroCustoId||"",e.get(d.compradorId)||d.comprador||"",t.get(d.fornecedorId)||d.fornecedor||"",d.cnpj_fornecedor||"",(d.justificativa_estouro_orcamento||"").replace(/"/g,"'"),d.status_aprovacao||""]);let o="\uFEFF"+r.join(";")+`
`;o+=i.map(d=>d.join(";")).join(`
`);const a=new Blob([o],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(a),l=document.createElement("a");l.href=c,l.download=`compras_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(c)},exportGrouped:(n="obra")=>{const t=z.compras||[];if(!t.length){F.createToast("Sem dados para exportar.","warning");return}const e=n==="obra",s=e?["Obra","Qtd","Total (R$)"]:["Fornecedor","Qtd","Total (R$)"],r=new Map;t.forEach(d=>{const h=e?z.obraMap.get(d.obraId)||d.obraId||"N/D":z.fornecedorMap.get(d.fornecedorId)||d.fornecedor||"N/D",f=r.get(h)||{qtd:0,total:0};f.qtd+=1,f.total+=Number(d.valor_total??d.valor_estimado??0),r.set(h,f)});const i=Array.from(r.entries()).map(([d,h])=>[`"${d}"`,h.qtd,h.total.toFixed(2).replace(".",",")]);let o="\uFEFF"+s.join(";")+`
`;o+=i.map(d=>d.join(";")).join(`
`);const a=new Blob([o],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(a),l=document.createElement("a");l.href=c,l.download=`compras_${n}_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(c)}},bg={getUsers:async()=>(await bt(gt(J,"usuarios"))).docs.map(t=>({id:t.id,...t.data()})),updateUser:async(n,t)=>{await je(ee(J,"usuarios",n),t)},createUserProfile:async(n,t)=>{await uy(ee(J,"usuarios",n),t)}},kO={render:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Configurações</h2>
                
                <div class="card">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-display text-text">Usuários do Sistema</h3>
                        ${F.createButton({text:"Novo Usuário",onClick:"alert('Funcionalidade requer Admin SDK ou Cloud Functions')"})}
                    </div>
                    
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-border">
                            <thead class="bg-canvas">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Nome</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Email</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Função (Role)</th>
                                    <th class="px-6 py-3 text-right text-xs font-display text-text-muted uppercase tracking-wide">Ações</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-border">
                                ${n.map(t=>`
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-display text-text">${t.nome||"-"}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${t.email}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted capitalize">${t.role||"obra"}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button class="text-primary hover:text-primary-strong font-display uppercase tracking-wide" onclick="document.dispatchEvent(new CustomEvent('edit-user', {detail: '${t.id}'}))">Editar</button>
                                        </td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `},SO=n=>(Array.isArray(n)?n:[n]).filter(Boolean),Ms={hasRole:(n,t=At.state.currentUser)=>{const e=SO(n);return!t||!e.length?!1:t.role==="administrador"?!0:e.includes(t.role)},guard:(n,t)=>{if(!Ms.hasRole(n)){const e=new Error("Acesso negado para esta ação.");throw e.code="PERMISSION_DENIED",e}return t()},canEditObra:n=>Ms.hasRole(["diretor","comprador","obra"],n),canDeleteObra:n=>Ms.hasRole(["diretor"],n),canEditCompra:n=>Ms.hasRole(["diretor","comprador"],n),canApproveCompra:n=>Ms.hasRole(["diretor","financeiro"],n),canEditCadastros:n=>Ms.hasRole(["diretor"],n)},td={init:async()=>{lt.render(F.createLoader());try{Ms.guard(["administrador","diretor"],async()=>{const n=await bg.getUsers();lt.render(kO.render(n)),td.bindEvents()})}catch(n){lt.render(`<div class="text-red-500">Erro: ${n.message}</div>`)}},bindEvents:()=>{document.addEventListener("edit-user",n=>{const t=n.detail,e=prompt("Nova função (comprador, obra, diretor, administrador):");e&&bg.updateUser(t,{role:e}).then(()=>{F.createToast("Usuário atualizado!"),td.init()}).catch(s=>F.createToast("Erro: "+s.message,"error"))})}};let We=new Date().getMonth(),Ss=new Date().getFullYear();const Cr={setMonth:(n,t)=>{We=n,Ss=t},changeMonth:n=>{We+=n,We<0&&(We=11,Ss-=1),We>11&&(We=0,Ss+=1)},render:(n=[])=>{const t=new Date,e={};n.forEach(l=>{const d=l.previsao_entrega||l.data_entrega_prevista;if(d){const h=new Date(d);if(Number.isNaN(h.getTime()))return;const f=h.toISOString().split("T")[0];e[f]||(e[f]=[]),e[f].push(l)}});const s=new Date(Ss,We,1),i=new Date(Ss,We+1,0).getDate(),o=s.getDay();let c=`
            <div class="card">
                <div class="flex justify-between items-center mb-4">
                    <button id="cal-prev" class="text-text-muted hover:text-text px-2 py-1 border border-border rounded">&larr;</button>
                    <h3 class="text-lg font-display text-text">Calendário de Entregas - ${["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][We]} ${Ss}</h3>
                    <button id="cal-next" class="text-text-muted hover:text-text px-2 py-1 border border-border rounded">&rarr;</button>
                </div>
                
                <div class="grid grid-cols-7 gap-2">
                    ${["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].map(l=>`<div class="text-center text-xs font-display text-text-muted uppercase tracking-wide py-2">${l}</div>`).join("")}
        `;for(let l=0;l<o;l++)c+='<div class="aspect-square"></div>';for(let l=1;l<=i;l++){const d=new Date(Ss,We,l),h=d.toISOString().split("T")[0],f=e[h]||[],m=l===t.getDate()&&We===t.getMonth(),g=d<t&&!m;c+=`
                <div class="aspect-square border border-border rounded p-1 ${m?"bg-primary/10 border-primary":"bg-surface"} ${g?"opacity-50":""} hover:bg-canvas transition-colors cursor-pointer">
                    <div class="text-xs font-display ${m?"text-primary font-bold":"text-text"}">${l}</div>
                    ${f.length>0?`
                        <div class="mt-1 space-y-1">
                            ${f.slice(0,2).map(v=>`
                                <div class="text-[10px] bg-primary/20 border border-primary rounded px-1 truncate" title="${v.descricao_compra||v.descricao||"Compra"}">
                                    ${(v.descricao_compra||v.descricao||"Compra").substring(0,15)}
                                </div>
                            `).join("")}
                            ${f.length>2?`<div class="text-[9px] text-text-muted">+${f.length-2}</div>`:""}
                        </div>
                    `:""}
                </div>
            `}return c+=`
                </div>
            </div>
        `,c},renderTimeline:(n=[])=>{const t=n.filter(e=>(e.previsao_entrega||e.data_entrega_prevista)&&new Date(e.previsao_entrega||e.data_entrega_prevista)>=new Date).sort((e,s)=>new Date(e.previsao_entrega||e.data_entrega_prevista)-new Date(s.previsao_entrega||s.data_entrega_prevista)).slice(0,10);return`
            <div class="card">
                <h3 class="text-lg font-display text-text mb-4">Próximas Entregas</h3>
                <div class="space-y-3">
                    ${t.length===0?`
                        <p class="text-text-muted text-sm">Nenhuma entrega prevista</p>
                    `:t.map(e=>{const s=new Date(e.previsao_entrega||e.data_entrega_prevista),r=Math.ceil((s-new Date)/(1e3*60*60*24)),i=r<=3;return`
                            <div class="flex items-start gap-3 p-3 rounded border ${i?"border-alert bg-alert/5":"border-border bg-surface"} hover:bg-canvas transition-colors">
                                <div class="flex-shrink-0 w-12 text-center">
                                    <div class="text-xs font-display text-text-muted uppercase">${s.toLocaleDateString("pt-BR",{month:"short"})}</div>
                                    <div class="text-2xl font-display ${i?"text-alert":"text-primary"}">${s.getDate()}</div>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-display text-text truncate">${e.descricao_compra||e.descricao||"Compra"}</p>
                                    <p class="text-xs text-text-muted mt-1">
                                        ${e.fornecedorNome||e.fornecedor||"Fornecedor não definido"} • ${e.status_compra||""}
                                    </p>
                                    ${i?`<p class="text-xs text-alert mt-1 font-display uppercase">⚠️ Entrega em ${r} dia(s)</p>`:""}
                                </div>
                            </div>
                        `}).join("")}
                </div>
            </div>
        `}},au={renderList:n=>`
            <div class="space-y-6">
                <div class="flex justify-between items-center">
                    <h2 class="text-2xl font-display text-text tracking-wide">Gestão de Obras</h2>
                    ${F.createButton({id:"btn-nova-obra",text:"Nova Obra",onClick:"window.location.hash = '/obras/nova'"})}
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${n.map(t=>`
                        <div class="card hover:shadow-heavy transition-shadow cursor-pointer" onclick="window.location.hash = '/obras/${t.id}'">
                            <div class="flex justify-between items-start mb-4">
                                <div>
                                    <h3 class="text-lg font-display text-text">${t.nome_obra||"Sem nome"}</h3>
                                    <p class="text-sm heading-muted">${t.numero_os?`OS: ${t.numero_os}`:""}</p>
                                </div>
                                <span class="px-2 py-1 text-xs rounded border border-border text-text font-display uppercase tracking-wide">
                                    ${t.status||"Em Andamento"}
                                </span>
                            </div>
                            
                            <div class="space-y-2 text-sm text-text">
                                <p class="heading-muted"><span class="text-text">Empresa:</span> ${t.empresa||"-"}</p>
                                <p class="heading-muted"><span class="text-text">Local:</span> ${t.local_realizacao||"-"}</p>
                                ${t.valor_orcado?`<p class="heading-muted"><span class="text-text">Orçamento:</span> ${et.formatCurrency(t.valor_orcado)}</p>`:""}
                            </div>

                            <div class="mt-4 pt-4 border-t border-border flex gap-2">
                                <button onclick="event.stopPropagation(); window.location.hash = '/obras/${t.id}/dashboard'" 
                                        class="text-primary hover:text-primary-strong text-sm font-display uppercase tracking-wide">
                                    Ver Dashboard
                                </button>
                                <button onclick="event.stopPropagation(); window.location.hash = '/obras/${t.id}/editar'" 
                                        class="text-text-muted hover:text-text text-sm font-display uppercase tracking-wide">
                                    Editar
                                </button>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `,renderForm:(n=null)=>{const t=!!n,e=((n==null?void 0:n.tolerancia_percentual)||0)*100||0;return`
            <div class="max-w-3xl mx-auto">
                <h2 class="text-2xl font-display text-text tracking-wide mb-6">
                    ${t?"Editar Obra":"Nova Obra"}
                </h2>

                <form id="form-obra" class="space-y-6">
                    <div class="card">
                        <h3 class="text-lg font-display mb-4 text-text">Informações Básicas</h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${F.createInput({id:"nome_obra",label:"Nome da Obra *",value:(n==null?void 0:n.nome_obra)||"",required:!0})}
                            ${F.createInput({id:"numero_os",label:"Número da OS",value:(n==null?void 0:n.numero_os)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${F.createInput({id:"empresa",label:"Empresa",value:(n==null?void 0:n.empresa)||""})}
                            ${F.createInput({id:"local_realizacao",label:"Local de Realização",value:(n==null?void 0:n.local_realizacao)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${F.createInput({id:"valor_orcado",label:"Valor Orçado (R$)",type:"number",value:(n==null?void 0:n.valor_orcado)||"",placeholder:"0.00"})}
                            ${F.createInput({id:"tolerancia_percentual",label:"Tolerância (%)",type:"number",value:e,placeholder:"0"})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${F.createInput({id:"valor_deslocamento_km",label:"Valor Deslocamento/KM",type:"number",value:(n==null?void 0:n.valor_deslocamento_km)||"",placeholder:"0.00"})}
                            ${F.createInput({id:"descricao_obra",label:"Descrição da Obra",value:(n==null?void 0:n.descricao_obra)||"",placeholder:"Resumo da obra"})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            ${F.createInput({id:"horas_previstas",label:"Horas Previstas",type:"number",value:(n==null?void 0:n.horas_previstas)||""})}
                            ${F.createInput({id:"horas_extras_previstas",label:"Horas Extras Previstas",type:"number",value:(n==null?void 0:n.horas_extras_previstas)||""})}
                            ${F.createInput({id:"status",label:"Status",value:(n==null?void 0:n.status)||"Em Andamento"})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            ${F.createInput({id:"qtd_refeicoes",label:"Qtd Refeições",type:"number",value:(n==null?void 0:n.qtd_refeicoes)||""})}
                            ${F.createInput({id:"qtd_hospedagens",label:"Qtd Hospedagens",type:"number",value:(n==null?void 0:n.qtd_hospedagens)||""})}
                            ${F.createInput({id:"obra_pai_os",label:"OS da Obra Pai",value:(n==null?void 0:n.obra_pai_os)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${F.createInput({id:"data_prevista_inicio",label:"Data Prevista de Início",type:"date",value:(n==null?void 0:n.data_prevista_inicio)||""})}
                            ${F.createInput({id:"data_prevista_fim",label:"Data Prevista de Fim",type:"date",value:(n==null?void 0:n.data_prevista_fim)||""})}
                        </div>

                        <div class="flex items-center gap-2 mt-4">
                            <input type="checkbox" id="is_obra_filha" name="is_obra_filha" class="rounded border-border text-primary" ${n!=null&&n.is_obra_filha?"checked":""}>
                            <label for="is_obra_filha" class="text-sm text-text">Obra filha</label>
                        </div>
                    </div>

                    <div class="flex justify-end gap-3">
                        ${F.createButton({id:"btn-cancel-obra",text:"Cancelar",variant:"secondary",onClick:"window.location.hash = '/obras'"})}
                        ${F.createButton({id:"btn-submit",type:"submit",text:t?"Salvar Alterações":"Criar Obra"})}
                    </div>
                </form>
            </div>
        `},renderDashboard:(n,t)=>{var e,s,r,i,o,a,c,l;return`
            <div class="space-y-6">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-2xl font-display text-text tracking-wide">${n.nome_obra}</h2>
                        <p class="heading-muted">${n.numero_os?`OS: ${n.numero_os}`:""} ${n.empresa?`• ${n.empresa}`:""}</p>
                    </div>
                    <div class="flex gap-3">
                        <button onclick="window.location.hash = '/obras/${n.id}/editar'" 
                                class="text-primary hover:text-primary-strong text-sm font-display uppercase tracking-wide">
                            Editar Obra
                        </button>
                        <button onclick="window.location.hash = '/obras'" 
                                class="text-text-muted hover:text-text text-sm font-display uppercase tracking-wide">
                            Voltar
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${F.createCard({title:"Total Gasto",content:`<p class="text-4xl font-display text-text uppercase">${et.formatCurrency(t.totalGasto)}</p><p class="text-sm heading-muted mt-1">Orçamento: ${et.formatCurrency(n.valor_orcado||0)}</p>`})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${t.atrasos||0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(t.sla||0)<80?"alert":"primary"} uppercase">${(t.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Entregues no prazo</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(t.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia vs Orçamento",content:`<p class="text-4xl font-display text-${(t.economia||0)<0?"alert":"primary"} uppercase">${et.formatCurrency(t.economia||0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(t.curvaPercent||0).toFixed(1)}%</p>`})}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Gastos por Natureza</h3>
                        <div class="h-64 relative flex items-center justify-center">
                            <canvas id="chart-categorias"></canvas>
                        </div>
                    </div>
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Status das Compras</h3>
                        <div class="h-64 relative flex items-center justify-center">
                            <canvas id="chart-status-obra"></canvas>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="card h-96">
                        <h3 class="text-lg font-display text-text mb-4">Curva S de Compras (Semanal)</h3>
                        <div class="h-80 relative">
                            <canvas id="chart-curva-s"></canvas>
                        </div>
                    </div>
                    <div class="card h-96">
                        <h3 class="text-lg font-display text-text mb-4">Evolução Diária dos Gastos</h3>
                        <div class="h-80 relative">
                            <canvas id="chart-gastos-diarios"></canvas>
                        </div>
                    </div>
                </div>

                <div class="card h-96">
                    <h3 class="text-lg font-display text-text mb-4">Curva Financeira (PV x AV)</h3>
                    <div class="h-80 relative">
                        <canvas id="chart-finance-pvav"></canvas>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="card h-96">
                        <h3 class="text-lg font-display text-text mb-4">Gastos por Centro de Custo</h3>
                        <div class="h-80 relative">
                            <canvas id="chart-cc"></canvas>
                        </div>
                    </div>
                    <div class="card h-96">
                        <h3 class="text-lg font-display text-text mb-4">Resumo por Centro de Custo</h3>
                        <div class="h-80 overflow-y-auto">
                            <table class="min-w-full divide-y divide-border">
                                <thead class="bg-canvas">
                                    <tr>
                                        <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Centro de Custo</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Valor</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">% Total</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-border">
                                    ${(()=>{const d=(t.ccTable||[]).reduce((m,g)=>m+g.valor,0),h=(t.ccTable||[]).sort((m,g)=>g.valor-m.valor).map(m=>`
                                                <tr>
                                                    <td class="px-4 py-2 text-sm text-text">${m.nome}</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right">${et.formatCurrency(m.valor)}</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right">${d?(m.valor/d*100).toFixed(1):"0.0"}%</td>
                                                </tr>
                                            `).join(""),f=`
                                            <tr class="bg-canvas">
                                                <td class="px-4 py-2 text-sm font-display text-text">Total</td>
                                                <td class="px-4 py-2 text-sm font-display text-text text-right">${et.formatCurrency(d)}</td>
                                                <td class="px-4 py-2 text-sm font-display text-text text-right">100%</td>
                                            </tr>`;return!h||h.trim().length===0?'<tr><td colspan="3" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>':h+f})()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div id="calendar-wrapper" class="lg:col-span-2">
                        ${Cr.render(t.comprasCalendar||t.comprasRecentes)}
                    </div>
                    <div id="timeline-wrapper">
                        ${Cr.renderTimeline(t.comprasCalendar||t.comprasRecentes)}
                    </div>
                </div>

                <div class="space-y-6">
                    <h3 class="text-xl font-display text-text tracking-wide">Análise de Mão de Obra (RDO)</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-6 gap-6">
                        ${F.createCard({title:"Total de Horas",content:`<p id="kpi-rdo-total" class="text-4xl font-display text-primary uppercase">${(((e=t.rdoData)==null?void 0:e.totalHoras)||0).toFixed(0)}</p>`,className:"accent-left"})}
                        ${F.createCard({title:"Média Horas/Dia",content:`<p id="kpi-rdo-media-dia" class="text-4xl font-display text-text uppercase">${(((s=t.rdoData)==null?void 0:s.mediaHorasDia)||0).toFixed(1)}</p>`})}
                        ${F.createCard({title:"Total Funcionários",content:`<p id="kpi-rdo-func" class="text-4xl font-display text-text uppercase">${((r=t.rdoData)==null?void 0:r.totalFuncionarios)||0}</p>`})}
                        ${F.createCard({title:"Média Func./Dia",content:`<p id="kpi-rdo-media-func-dia" class="text-4xl font-display text-text uppercase">${(((i=t.rdoData)==null?void 0:i.mediaFuncionariosDia)||0).toFixed(1)}</p>`})}
                        ${F.createCard({title:"Horas Orçadas",content:`<p id="kpi-rdo-orcadas" class="text-4xl font-display text-text uppercase">${(Number(n.horas_previstas||0)+1.5*Number(n.horas_extras_previstas||0)).toFixed(1)}</p>`})}
                        ${F.createCard({title:"Horas Extras Gastas",content:`<p id="kpi-rdo-extras" class="text-4xl font-display text-alert uppercase">${(((o=t.rdoData)==null?void 0:o.totalExtras)||0).toFixed(1)}</p>`})}
                        ${F.createCard({title:"Saldo de Horas",content:`<p id="kpi-rdo-saldo" class="text-4xl font-display text-text uppercase">${(Number(n.horas_previstas||0)+1.5*Number(n.horas_extras_previstas||0)-(Number(((a=t.rdoData)==null?void 0:a.totalHoras)||0)+.5*Number(((c=t.rdoData)==null?void 0:c.totalExtras)||0))).toFixed(1)}</p>`})}
                    </div>

                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Horas Normais x Extras (dia)</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-rdo-horas-normais-extras"></canvas>
                        </div>
                    </div>

                    <div class="card h-96">
                        <h3 class="text-lg font-display text-text mb-4">Curva S de Horas (Planejado x Executado)</h3>
                        <div class="h-80 relative">
                            <canvas id="chart-rdo-curva-horas"></canvas>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div class="card h-80">
                            <h3 class="text-lg font-display text-text mb-4">Horas por Função</h3>
                            <div class="h-64 relative">
                                <canvas id="chart-rdo-funcao"></canvas>
                            </div>
                        </div>
                        <div class="card h-80">
                            <h3 class="text-lg font-display text-text mb-4">Top Técnicos (Horas)</h3>
                            <div class="h-64 overflow-y-auto custom-scrollbar">
                                <table id="table-rdo-tech" class="min-w-full divide-y divide-border">
                                    <thead class="bg-canvas">
                                        <tr>
                                            <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Técnico</th>
                                            <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Horas</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-border">
                                        <tr><td colspan="2" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <h3 class="text-lg font-display text-text mb-4">Relatórios RDO</h3>
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-border" id="table-rdo">
                                <thead class="bg-canvas">
                                    <tr>
                                        <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Data</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Horas Normais</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Horas Extras</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Total</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Funcionários</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-border">
                                    ${(((l=t.rdoData)==null?void 0:l.diarios)||[]).map(d=>`
                                        <tr>
                                            <td class="px-4 py-2 text-sm text-text">${new Date(d.data).toLocaleDateString("pt-BR")}</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${d.horasNormais.toFixed(1)}h</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${d.horasExtras.toFixed(1)}h</td>
                                            <td class="px-4 py-2 text-sm text-text text-right font-display">${d.total.toFixed(1)}h</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${d.funcionarios}</td>
                                        </tr>
                                    `).join("")||'<tr><td colspan="5" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>'}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3 class="text-lg font-display text-text mb-4">Últimas Compras</h3>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-border">
                            <thead class="bg-canvas">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Data</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Descrição</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Valor</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Previsão</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Comprador</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Status</th>
                                    <th class="px-6 py-3 text-right text-xs font-display text-text-muted uppercase tracking-wide">Ações</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-border">
                                ${t.comprasRecentes.map(d=>`
                                    <tr class="hover:bg-canvas">
                                        <td class="px-6 py-4 text-sm text-text-muted">${et.formatDate(d.data_solicitacao||d.data_emissao)}</td>
                                        <td class="px-6 py-4 text-sm text-text" title="${d.descricao_compra||d.descricao||"-"}">${d.descricao_compra||d.descricao||"-"}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${et.formatCurrency(d.valor_total??d.valor_estimado??0)}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${et.formatDate(d.previsao_entrega||d.data_entrega_prevista)}</td>
                                        <td class="px-6 py-4 text-sm text-text">${d.compradorNome||d.comprador||d.compradorId||"-"}</td>
                                        <td class="px-6 py-4 text-sm">
                                            ${et.renderStatusBadge(d.status_compra,d.previsao_entrega||d.data_entrega_prevista)}
                                        </td>
                                        <td class="px-6 py-4 text-sm text-right">
                                            ${d.id?`
                                                <div class="flex items-center justify-end gap-2">
                                                    <button class="text-text-muted hover:text-text" data-action="view-compra" data-id="${d.id}" title="Ver compra">${Mt.eye}</button>
                                                    <button class="text-primary hover:text-primary-strong" data-action="edit-compra" data-id="${d.id}" title="Editar compra">${Mt.pencil}</button>
                                                </div>
                                            `:"-"}
                                        </td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `}},Gn="rgba(255,255,255,0.08)",en="#a1a1aa",ye={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};mt.defaults.color="#e5e5e5";mt.defaults.font.family=ye.family;mt.defaults.font.weight=ye.weight;const CO=n=>{mt.defaults.color=n?"#0b0b0b":"#e5e5e5",mt.defaults.plugins.legend.labels.color=mt.defaults.color,mt.defaults.scales=mt.defaults.scales||{}},RO={id:"percentLabels",afterDraw(n){if(n.config.type!=="doughnut")return;const{ctx:t}=n;n.data.datasets.forEach(e=>{const s=n.getDatasetMeta(0),r=e.data.reduce((i,o)=>i+o,0);s.data.forEach((i,o)=>{const a=e.data[o];if(!a||!r)return;const c=`${(a/r*100).toFixed(1)}%`;t.save(),t.fillStyle="#e5e5e5",t.font="600 11px "+ye.family,t.textAlign="center",t.textBaseline="middle";const l=i.tooltipPosition();t.fillText(c,l.x,l.y),t.restore()})})}};mt.register(RO);const vr={renderCategorias:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),r=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new mt(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:r,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Gn},ticks:{color:en,font:ye}},y:{grid:{color:Gn},ticks:{color:en,font:ye}}}}})},renderStatusObra:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),r=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new mt(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:10},plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:ye,padding:12,usePointStyle:!0}},tooltip:{callbacks:{label:i=>{const o=i.dataset.data.reduce((c,l)=>c+l,0),a=o?(i.parsed/o*100).toFixed(1):0;return`${i.label}: ${a}% (${i.parsed})`}}}},cutout:"65%",pluginsCustom:!0}})},renderCentrosCusto:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),r=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new mt(e,{type:"bar",data:{labels:s,datasets:[{data:r,backgroundColor:"#22c55e",borderRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Gn},ticks:{color:en,font:ye,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0},y:{grid:{display:!1},ticks:{color:en,font:ye,autoSkip:!1}}},indexAxis:"y"}})},renderFinancePVAV:(n,t=[],e=[])=>{const s=document.getElementById(n);s&&(s.chart&&s.chart.destroy(),s.chart=new mt(s,{type:"line",data:{datasets:[{label:"Planejado (PV)",data:t,borderColor:"#16a34a",backgroundColor:"rgba(34,197,94,0.12)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}},{label:"Real (AV)",data:e,borderColor:"#ef4444",backgroundColor:"rgba(239,68,68,0.08)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"time",time:{unit:"day"},grid:{color:Gn},ticks:{color:en}},y:{grid:{color:Gn},ticks:{color:en,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}},plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:ye,usePointStyle:!0}}}}}))},renderCurvaS:(n,t=[],e=[],s=[])=>{const r=document.getElementById(n);r&&(r.chart&&r.chart.destroy(),r.chart=new mt(r,{type:"line",data:{labels:t.length?t:e.map((i,o)=>`Semana ${o+1}`),datasets:[{label:"Planejado",data:e,borderColor:"#a1a1aa",backgroundColor:"transparent",borderWidth:2,borderDash:[5,5],tension:.4,pointRadius:0},{label:"Realizado",data:s,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.1)",borderWidth:3,tension:.4,fill:!0,pointRadius:4,pointBackgroundColor:"#22c55e",pointBorderColor:"#121212",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"top",labels:{color:"#e5e5e5",font:ye,usePointStyle:!0}},tooltip:{backgroundColor:"#1c1c1e",titleColor:"#e5e5e5",bodyColor:"#a1a1aa",borderColor:"#333333",borderWidth:1,titleFont:ye,bodyFont:ye}},scales:{x:{grid:{color:Gn},ticks:{color:en,font:ye}},y:{grid:{color:Gn},ticks:{color:en,font:ye,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}}}}))},renderGastosMensais:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),r=s.map(i=>t[i]);e.chart&&e.chart.destroy(),e.chart=new mt(e,{type:"line",data:{labels:s.map(i=>{const o=new Date(i);return Number.isNaN(o.getTime())?i:o.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}),datasets:[{label:"Gastos Diários",data:r,borderColor:"#22c55e",backgroundColor:"rgba(34,197,94,0.1)",borderWidth:2,tension:.3,fill:!0,pointRadius:3,pointBackgroundColor:"#22c55e"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{type:"category",grid:{display:!1},ticks:{color:en,font:ye,maxRotation:45,autoSkip:!0,maxTicksLimit:10}},y:{grid:{color:Gn},ticks:{color:en,font:ye,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}}}})}},Nb=y1(),xg=Nb.BASE_URL||"https://apiexterna.diariodeobra.app/v1",PO=()=>{const n=Nb.TOKEN||(typeof window<"u"?window.__RDO_API_TOKEN:"");if(n)return n;try{const t=localStorage.getItem("axel_rdo_token");if(t)return t}catch{}return""};async function cu(n,t={}){const e=PO();if(!e)return console.warn("[RDO] Token não encontrado; defina __RDO_API_CONFIG.TOKEN ou localStorage.axel_rdo_token"),null;const s={...t.headers,token:e,"Content-Type":"application/json"},r=await fetch(`${xg}${n}`,{...t,headers:s});if(console.info("[RDO] Request:",`${xg}${n}`,"status:",r.status),!r.ok)return console.warn(`Erro na API RDO ao acessar ${n}: ${r.status} ${r.statusText}`),null;const i=await r.json();return console.info("[RDO] Response data size:",Array.isArray(i)?i.length:Object.keys(i||{}).length),i}const Tn={getByObra:async(n,t,e)=>{const s=await Tn.getObraByOs(n);if(!s)return[];const r=await Tn.getRelatoriosByObra(s._id);if(!r||!r.length)return[];const i=a=>{if(!a)return!0;const c=new Date(a);if(c.setHours(12,0,0,0),t){const l=new Date(t);if(l.setHours(12,0,0,0),c<l)return!1}if(e){const l=new Date(e);if(l.setHours(12,0,0,0),c>l)return!1}return!0},o=[];for(const a of r){const c=await Tn.getRelatorioDetalhe(s._id,a._id);c&&i(c==null?void 0:c.data)&&o.push(c)}return o},getObraByOs:async n=>{const t=await cu("/obras");if(!Array.isArray(t))return null;const e=String(n||"").trim();if(!e)return null;const s=t.find(o=>String(o._id)===e);if(s)return s;const r=t.find(o=>{const a=(o.nome||"").match(/(\d+)$/);return a&&a[1]===e});if(r)return r;const i=t.find(o=>(o.nome||"").includes(e));return i||null},getRelatoriosByObra:async n=>{const t=await cu(`/obras/${n}/relatorios`);return Array.isArray(t)?t:[]},getRelatorioDetalhe:async(n,t)=>cu(`/obras/${n}/relatorios/${t}`),getIntegratedDataForObra:async n=>{const t=await Tn.getObraByOs(n);if(!t)return console.warn("[RDO] Obra não localizada para OS:",n),null;console.info("[RDO] Obra encontrada para OS:",n,"->",t._id,t.nome);const e=await Tn.getRelatoriosByObra(t._id);if(!e.length)return console.warn("[RDO] Nenhum relatório retornado para obra",t._id),{quantidadeRelatorios:0,totalHoras:"0.00",totalHorasExtras:"0.00",reports:[]};const s=(await Promise.all(e.map(c=>Tn.getRelatorioDetalhe(t._id,c._id)))).filter(Boolean);let r=0,i=0;const o=9,a=c=>{if(!c||typeof c!="string")return 0;const[l,d]=c.split(":").map(Number);return(l||0)+(d||0)/60};return s.forEach(c=>{var h,f;(((h=c==null?void 0:c.maoDeObra)==null?void 0:h.padrao)||[]).forEach(m=>{const g=Number(m.quantidade)||0;r+=g,g>o&&(i+=g-o)}),(((f=c==null?void 0:c.maoDeObra)==null?void 0:f.personalizada)||[]).forEach(m=>{const g=a(m.horasTrabalhadas);r+=g,g>o&&(i+=g-o)})}),{quantidadeRelatorios:s.length,totalHoras:r.toFixed(2),totalHorasExtras:i.toFixed(2),reports:s,relatoriosRaw:s}},processRDOData:(n=[])=>{const t={},e={},s={},r={},i={};let o=0,a=0;const c=new Set,l=9,d={},h=v=>{if(typeof v=="number")return v;if(typeof v=="string"){if(v.includes(":")){const[E,A]=v.split(":").map(Number);return(E||0)+(A||0)/60}const y=Number(v);return Number.isNaN(y)?0:y}return 0},f=v=>{if(!v)return null;let y=null;if(v instanceof Date?y=new Date(v.getTime()):typeof v=="number"&&(y=new Date(v)),typeof v=="string"){let E=v;if(E.includes("T")&&(E=E.split("T")[0]),E.includes("/")&&E.split("/").length===3){const[A,C,D]=E.split("/"),R=D.length===2?`20${D}`:D;y=new Date(`${R}-${C}-${A}`)}if(E.includes("-")){const[A,C,D]=E.split("-");y=new Date(Number(A),Number(C)-1,Number(D))}}return!y||Number.isNaN(y.getTime())?null:(y.setHours(12,0,0,0),y.setDate(y.getDate()+2),y)};n.forEach(v=>{var M,T;const y=v.data||v.data_inicio||v.dataInicio||v.createdAt||v.dataReferencia||v.dataServiço||v.dataServico||v.dataRelatorio||v.dataRel,E=f(y);if(!E||Number.isNaN(E.getTime()))return;const A=b=>String(b).padStart(2,"0"),C=`${E.getFullYear()}-${A(E.getMonth()+1)}-${A(E.getDate())}`;t[C]||(t[C]=0),e[C]||(e[C]=0),s[C]||(s[C]=0);const D=((M=v==null?void 0:v.maoDeObra)==null?void 0:M.padrao)||[],R=((T=v==null?void 0:v.maoDeObra)==null?void 0:T.personalizada)||[];D.forEach(b=>{const x=Number(b.quantidade)||0,I=Math.max(0,x-l),S=x-I;t[C]+=x,e[C]+=I,s[C]+=S;const P=b.funcao||"Outros";r[P]=(r[P]||0)+x,b.funcionario_id&&(i[C]||(i[C]=new Set),i[C].add(b.funcionario_id),c.add(b.funcionario_id));const k=b.nome||b.funcionario||b.descricao||"Técnico";d[k]=(d[k]||0)+x,o+=x,a+=I}),R.forEach(b=>{const x=h(b.horasTrabalhadas),I=Math.max(0,x-l),S=x-I;t[C]+=x,e[C]+=I,s[C]+=S;const P=b.funcao||"Outros";r[P]=(r[P]||0)+x,b.funcionario_id&&(i[C]||(i[C]=new Set),i[C].add(b.funcionario_id),c.add(b.funcionario_id));const k=b.nome||b.funcionario||b.descricao||"Técnico";d[k]=(d[k]||0)+x,o+=x,a+=I})});const m={};Object.keys(i).forEach(v=>{m[v]=i[v].size});const g=Object.keys(t).sort().map(v=>({data:v,horasNormais:s[v]||0,horasExtras:e[v]||0,total:t[v]||0,funcionarios:m[v]||0}));return{horasPorDia:t,horasNormaisPorDia:s,horasExtrasPorDia:e,horasPorFuncao:r,funcionariosPorDia:m,totalHoras:o,totalExtras:a,totalFuncionarios:c.size,mediaHorasDia:o/Math.max(1,Object.keys(t).length),mediaFuncionariosDia:Object.keys(m).length?Object.values(m).reduce((v,y)=>v+y,0)/Object.keys(m).length:0,techHours:d,diarios:g}}},Lb=Object.freeze(Object.defineProperty({__proto__:null,RDOService:Tn},Symbol.toStringTag,{value:"Module"})),wg=n=>{if(!n)return null;if(n instanceof Date)return n;if(n.toDate)return n.toDate();if(typeof n=="number")return new Date(n);if(typeof n=="string"){if(n.includes("/")&&n.split("/").length===3){const[e,s,r]=n.split("/"),i=r.length===2?`20${r}`:r,o=new Date(`${i}-${s}-${e}`);return o.setHours(12,0,0,0),o}const t=new Date(n);return t.setHours(12,0,0,0),t}return null},Ir={initList:async()=>{lt.render(F.createLoader());try{const n=await Ye.getObras();lt.render(au.renderList(n))}catch(n){console.error(n),lt.render(`<div class="text-red-500 p-4">Erro ao carregar obras: ${n.message}</div>`)}},initForm:async(n=null)=>{lt.render(F.createLoader());try{let t=null;n&&(t=await Ye.getObraById(n)),lt.render(au.renderForm(t)),Ir.bindFormEvents(n)}catch(t){console.error(t),lt.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},initDashboard:async n=>{lt.render(F.createLoader());try{CO(document.documentElement.classList.contains("theme-light"));const t=await Ye.getObraById(n);if(!t){lt.render('<div class="text-red-500 p-4">Obra não encontrada.</div>');return}const e=await Ye.getObraStats(n,!1),s=Number(t.valor_orcado||0);s>0?(e.economia=s-e.totalGasto,e.curvaPercent=e.totalGasto/s*100):(e.economia=0,e.curvaPercent=0);const r=[];!t.horas_previstas&&!t.horas_extras_previstas&&r.push("Horas da obra não informadas."),t.data_prevista_inicio||r.push("Data de início prevista não informada."),t.data_prevista_fim||r.push("Data de término prevista não informada."),s||r.push("Orçamento da obra não informado."),t.numero_os||r.push("Número da OS não informado; integração RDO pode falhar."),e.osNumber=t.numero_os||t.id,e.alerts=r;const[i,o,a]=await Promise.all([js.list(),zs.list(),Us.list()]),c=new Map(i.map(g=>[g.id,g.nome||g.email||g.id])),l=new Map(o.map(g=>[g.id,g.nome||g.empresa||g.id])),d=new Map(a.map(g=>[g.id,g.nome||g.codigo||g.id]));e.comprasRecentes=(e.comprasRecentes||[]).map(g=>({...g,compradorNome:c.get(g.compradorId)||g.comprador||"",fornecedorNome:l.get(g.fornecedorId)||g.fornecedor||"",centroCustoNome:d.get(g.centroCustoId)||g.centroCustoNome||g.centro_custo||g.centroCustoId||""})),e.comprasCalendar=(e.comprasCalendar||[]).map(g=>({...g,compradorNome:c.get(g.compradorId)||g.comprador||"",fornecedorNome:l.get(g.fornecedorId)||g.fornecedor||"",centroCustoNome:d.get(g.centroCustoId)||g.centroCustoNome||g.centro_custo||g.centroCustoId||""}));const h={};Object.entries(e.ccTotais||{}).forEach(([g,v])=>{const y=d.get(g)||g;h[y]=(h[y]||0)+v}),e.ccTotais=h,e.ccTable=Object.entries(h).map(([g,v])=>({nome:g,valor:v})),lt.render(au.renderDashboard(t,e)),(()=>{const g=v=>{var A;const y=document.createElement("div");y.className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4",y.innerHTML=`
                        <div class="bg-surface border border-border rounded shadow-heavy w-full max-w-2xl">
                            <div class="flex justify-between items-center px-4 py-3 border-b border-border">
                                <h3 class="text-lg font-display text-text">Compra</h3>
                                <button data-close class="text-text-muted hover:text-text">&times;</button>
                            </div>
                            <div class="p-4 space-y-3">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Obra</label>
                                        <p class="text-text">${t.nome_obra||t.apelido_obra||t.id}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Status</label>
                                        <div class="mt-1">${et.renderStatusBadge(v.status_compra,v.previsao_entrega||v.data_entrega_prevista)}</div>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Descrição</label>
                                        <p class="text-text">${v.descricao_compra||v.descricao||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Valor</label>
                                        <p class="text-text">${et.formatCurrency(v.valor_total??v.valor_estimado??0)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Fornecedor</label>
                                        <p class="text-text">${v.fornecedorNome||v.fornecedor||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Comprador</label>
                                        <p class="text-text">${v.compradorNome||v.comprador||v.compradorId||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Prev. Entrega</label>
                                        <p class="text-text">${et.formatDate(v.previsao_entrega||v.data_entrega_prevista)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Data Emissão</label>
                                        <p class="text-text">${et.formatDate(v.data_emissao)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Número NF</label>
                                        <p class="text-text">${v.numero_nf||"-"}</p>
                                    </div>
                                </div>
                                <div class="flex justify-end gap-2">
                                    <button class="btn-secondary" data-close>Fechar</button>
                                    ${v.id?`<button class="btn" data-edit-id="${v.id}">Editar</button>`:""}
                                </div>
                            </div>
                        </div>
                    `,document.body.appendChild(y),(A=y.querySelectorAll("[data-close]"))==null||A.forEach(C=>C.addEventListener("click",()=>y.remove()));const E=y.querySelector("[data-edit-id]");E&&E.addEventListener("click",()=>{Et.navigate(`/compras/${v.id}/editar`),y.remove()})};document.querySelectorAll('[data-action="edit-compra"]').forEach(v=>{v.addEventListener("click",()=>{const y=v.dataset.id;y&&Et.navigate(`/compras/${y}/editar`)})}),document.querySelectorAll('[data-action="view-compra"]').forEach(v=>{v.addEventListener("click",()=>{const y=v.dataset.id,E=e.comprasRecentes.find(A=>A.id===y);E&&g(E)})})})();const m=()=>{const g=document.getElementById("calendar-wrapper"),v=document.getElementById("timeline-wrapper");g&&(g.innerHTML=Cr.render(e.comprasCalendar||e.comprasRecentes)),v&&(v.innerHTML=Cr.renderTimeline(e.comprasCalendar||e.comprasRecentes));const y=document.getElementById("cal-prev"),E=document.getElementById("cal-next");y==null||y.addEventListener("click",()=>{Cr.changeMonth(-1),m()}),E==null||E.addEventListener("click",()=>{Cr.changeMonth(1),m()})};m(),setTimeout(async()=>{var A;vr.renderCategorias("chart-categorias",e.gastosPorCategoria),vr.renderStatusObra("chart-status-obra",e.porStatus),e.curvaS&&vr.renderCurvaS("chart-curva-s",e.curvaS.labels||[],e.curvaS.planejado,e.curvaS.realizado),e.gastosDiarios&&vr.renderGastosMensais("chart-gastos-diarios",e.gastosDiarios),e.ccTotais&&vr.renderCentrosCusto("chart-cc",e.ccTotais);const{COST_PER_HOUR:g,COST_PER_OVERTIME_HOUR:v}=await ho(async()=>{const{COST_PER_HOUR:C,COST_PER_OVERTIME_HOUR:D}=await import("./costs-CbBns5TW.js");return{COST_PER_HOUR:C,COST_PER_OVERTIME_HOUR:D}},[]),y=Pb({data_inicio:t.data_prevista_inicio,data_prevista_fim:t.data_prevista_fim,orcamento:t.valor_orcado}),E=Db(e.comprasCalendar||e.comprasRecentes||[],((A=e.rdoData)==null?void 0:A.horasPorDia)||{},g,v);(y.length||E.length)&&vr.renderFinancePVAV("chart-finance-pvav",y,E);try{const C=t.numero_os||t.numeroOS||t.id;if(C){const D=await Tn.getIntegratedDataForObra(C);if(D&&D.reports){const R=Tn.processRDOData(D.reports);if(R){e.rdoData=R,e.rdoOk=!0;const M=(k,X)=>{const j=document.getElementById(k);j&&(j.textContent=X)},T=Number(t.horas_previstas||0),b=Number(t.horas_extras_previstas||0),x=T+1.5*b,I=Number(R.totalHoras||0)+.5*Number(R.totalExtras||0),S=x-I;if(M("kpi-rdo-total",R.totalHoras.toFixed(1)),M("kpi-rdo-media-dia",R.mediaHorasDia.toFixed(1)),M("kpi-rdo-func",String(R.totalFuncionarios||0)),M("kpi-rdo-media-func-dia",R.mediaFuncionariosDia.toFixed(1)),M("kpi-rdo-orcadas",x.toFixed(1)),M("kpi-rdo-extras",R.totalExtras.toFixed(1)),M("kpi-rdo-saldo",S.toFixed(1)),R.totalHoras>0){oe.renderHorasNormaisExtras("chart-rdo-horas-normais-extras",R.horasNormaisPorDia,R.horasExtrasPorDia);const k=[],X=[],j=wg(t.data_prevista_inicio),B=wg(t.data_prevista_fim);if(j&&B&&!Number.isNaN(j)&&!Number.isNaN(B)&&j<=B&&x>0){const W=[],tt=new Date(j);tt.setHours(12,0,0,0);const at=new Date(B);for(at.setDate(at.getDate()+1);tt<=at;){const wt=tt.getDay();wt!==0&&wt!==6&&W.push(new Date(tt)),tt.setDate(tt.getDate()+1)}const ht=W.length?x/W.length:0;let K=0;W.forEach(wt=>{K+=ht;const St=new Date(wt);St.setDate(St.getDate()+0),k.push({x:St,y:Number(K.toFixed(2))})})}const V=Object.keys(R.horasPorDia||{}).sort((W,tt)=>new Date(W)-new Date(tt));let q=0;if(V.forEach(W=>{const tt=new Date(W);tt.setHours(12,0,0,0),!Number.isNaN(tt.getTime())&&(q+=R.horasPorDia[W],X.push({x:tt,y:Number(q.toFixed(2))}))}),oe.renderCurvaHoras("chart-rdo-curva-horas",k,X),R.horasPorFuncao&&oe.renderHorasPorFuncao("chart-rdo-funcao",R.horasPorFuncao),R.techHours){const W=Object.entries(R.techHours||{}).sort((at,ht)=>ht[1]-at[1]).slice(0,10),tt=document.querySelector("#table-rdo-tech tbody");tt&&(tt.innerHTML=W.map(([at,ht])=>`
                                                <tr>
                                                    <td class="px-4 py-2 text-sm text-text">${at}</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right font-display">${ht.toFixed(1)}h</td>
                                                </tr>
                                            `).join("")||'<tr><td colspan="2" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>')}}else oe.renderEmpty("chart-rdo-horas-normais-extras"),oe.renderEmpty("chart-rdo-curva-horas");const P=document.querySelector("#table-rdo tbody");if(P){const k=R.diarios||[];k.length?P.innerHTML=k.map(X=>`
                                            <tr>
                                                <td class="px-4 py-2 text-sm text-text">${new Date(X.data).toLocaleDateString("pt-BR")}</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${X.horasNormais.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${X.horasExtras.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right font-display">${X.total.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${X.funcionarios}</td>
                                            </tr>
                                        `).join(""):P.innerHTML='<tr><td colspan="5" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>'}}}else e.rdoData=e.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},oe.renderEmpty("chart-rdo-horas-normais-extras"),oe.renderEmpty("chart-rdo-curva-horas")}}catch(C){console.warn("Erro ao carregar dados RDO (legacy):",(C==null?void 0:C.message)||C),e.rdoData=e.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},oe.renderEmpty("chart-rdo-horas-normais-extras"),oe.renderEmpty("chart-rdo-curva-horas")}},100)}catch(t){console.error(t),lt.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},bindFormEvents:n=>{const t=document.getElementById("form-obra");t.addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("btn-submit");try{s.disabled=!0,s.innerHTML=F.createLoader();const r=new FormData(t),i=Object.fromEntries(r.entries());i.valor_orcado=i.valor_orcado?Number(i.valor_orcado):0,i.tolerancia_percentual=i.tolerancia_percentual?Number(i.tolerancia_percentual)/100:0,i.valor_deslocamento_km=i.valor_deslocamento_km?Number(i.valor_deslocamento_km):0,i.horas_previstas=i.horas_previstas?Number(i.horas_previstas):0,i.horas_extras_previstas=i.horas_extras_previstas?Number(i.horas_extras_previstas):0,i.qtd_refeicoes=i.qtd_refeicoes?Number(i.qtd_refeicoes):0,i.qtd_hospedagens=i.qtd_hospedagens?Number(i.qtd_hospedagens):0,i.is_obra_filha=t.is_obra_filha.checked,n?(await Ye.updateObra(n,i),F.createToast("Obra atualizada com sucesso!")):(await Ye.createObra(i),F.createToast("Obra criada com sucesso!")),Et.navigate("/obras")}catch(r){console.error(r),F.createToast("Erro ao salvar obra: "+r.message,"error"),s.disabled=!1,s.innerHTML=`<span>${n?"Salvar Alterações":"Criar Obra"}</span>`}})}},DO={renderMenu:()=>`
        <div class="space-y-4">
            <h2 class="text-2xl font-display text-text tracking-wide">Cadastros</h2>
            <p class="heading-muted">Selecione o cadastro para gerenciar.</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="#/cadastros/fornecedores" class="card hover:border-primary hover:text-primary transition-colors">
                    <h3 class="text-lg font-display text-text mb-2">Fornecedores</h3>
                    <p class="heading-muted text-sm">Gerencie fornecedores.</p>
                </a>
                <a href="#/cadastros/centros-custo" class="card hover:border-primary hover:text-primary transition-colors">
                    <h3 class="text-lg font-display text-text mb-2">Centros de Custo</h3>
                    <p class="heading-muted text-sm">Gerencie centros de custo.</p>
                </a>
                <a href="#/cadastros/compradores" class="card hover:border-primary hover:text-primary transition-colors">
                    <h3 class="text-lg font-display text-text mb-2">Compradores</h3>
                    <p class="heading-muted text-sm">Gerencie compradores.</p>
                </a>
            </div>
        </div>
    `},MO={init:async()=>{lt.render(DO.renderMenu())}},OO={render:(n=[])=>`
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <h2 class="text-2xl font-display text-text tracking-wide">Fornecedores</h2>
                <button class="btn" id="btn-novo-fornecedor">Novo Fornecedor</button>
            </div>
            <div id="fornecedor-form" class="hidden card p-4 space-y-3">
                <h3 class="text-lg font-display text-text">Fornecedor</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input id="forn-nome" class="input" placeholder="Nome">
                    <input id="forn-email" class="input" placeholder="Email">
                    <input id="forn-telefone" class="input" placeholder="Telefone">
                    <input id="forn-cnpj" class="input" placeholder="CNPJ">
                </div>
                <div class="flex gap-2">
                    <button id="btn-salvar-fornecedor" class="btn">Salvar</button>
                    <button id="btn-cancelar-fornecedor" class="btn-secondary">Cancelar</button>
                </div>
            </div>
            <div class="card">
                <div class="overflow-x-auto">
                    <table id="fornecedor-table" class="min-w-full divide-y divide-border">
                        <thead class="bg-canvas">
                            <tr>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Nome</th>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Contato</th>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Email</th>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-border">
                            ${n.map(t=>`
                                <tr data-id="${t.id}" data-nome="${t.nome||""}" data-email="${t.email||""}" data-telefone="${t.telefone||""}" data-cnpj="${t.cnpj||""}">
                                    <td class="px-4 py-2 text-sm text-text">${t.nome||"-"}</td>
                                    <td class="px-4 py-2 text-sm text-text-muted">${t.telefone||"-"}</td>
                                    <td class="px-4 py-2 text-sm text-text-muted">${t.email||"-"}</td>
                                    <td class="px-4 py-2 text-sm text-primary">Editar</td>
                                </tr>
                            `).join("")||'<tr><td colspan="4" class="px-4 py-4 text-center heading-muted">Nenhum fornecedor</td></tr>'}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `},ed={init:async()=>{const n=await zs.list();lt.render(OO.render(n)),ed.bind()},bind:()=>{const n=document.getElementById("fornecedor-form"),t=document.getElementById("btn-novo-fornecedor"),e=document.getElementById("btn-salvar-fornecedor"),s=document.getElementById("btn-cancelar-fornecedor"),r=document.querySelector("#fornecedor-table");t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden"));let i=null;r==null||r.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(i=a.dataset.id,document.getElementById("forn-nome").value=a.dataset.nome||"",document.getElementById("forn-email").value=a.dataset.email||"",document.getElementById("forn-telefone").value=a.dataset.telefone||"",document.getElementById("forn-cnpj").value=a.dataset.cnpj||"",n==null||n.classList.remove("hidden"))}),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("forn-nome").value,email:document.getElementById("forn-email").value,telefone:document.getElementById("forn-telefone").value,cnpj:document.getElementById("forn-cnpj").value};i?await zs.update(i,o):await zs.create(o),ed.init()})}},NO={render:(n=[])=>`
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <h2 class="text-2xl font-display text-text tracking-wide">Centros de Custo</h2>
                <button class="btn" id="btn-novo-cc">Novo Centro de Custo</button>
            </div>
            <div id="cc-form" class="hidden card p-4 space-y-3">
                <h3 class="text-lg font-display text-text">Centro de Custo</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input id="cc-nome" class="input" placeholder="Nome">
                    <input id="cc-codigo" class="input" placeholder="Código">
                </div>
                <div class="flex gap-2">
                    <button id="btn-salvar-cc" class="btn">Salvar</button>
                    <button id="btn-cancelar-cc" class="btn-secondary">Cancelar</button>
                </div>
            </div>
            <div class="card">
                <div class="overflow-x-auto">
                    <table id="cc-table" class="min-w-full divide-y divide-border">
                        <thead class="bg-canvas">
                            <tr>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Nome</th>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Código</th>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-border">
                            ${n.map(t=>`
                                <tr data-id="${t.id}" data-nome="${t.nome||""}" data-codigo="${t.codigo||""}">
                                    <td class="px-4 py-2 text-sm text-text">${t.nome||"-"}</td>
                                    <td class="px-4 py-2 text-sm text-text-muted">${t.codigo||t.id||"-"}</td>
                                    <td class="px-4 py-2 text-sm text-primary">Editar</td>
                                </tr>
                            `).join("")||'<tr><td colspan="3" class="px-4 py-4 text-center heading-muted">Nenhum centro de custo</td></tr>'}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `},nd={init:async()=>{const n=await Us.list();lt.render(NO.render(n)),nd.bind()},bind:()=>{const n=document.getElementById("cc-form"),t=document.getElementById("btn-novo-cc"),e=document.getElementById("btn-salvar-cc"),s=document.getElementById("btn-cancelar-cc"),r=document.getElementById("cc-table");let i=null;t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden")),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("cc-nome").value,codigo:document.getElementById("cc-codigo").value};i?await Us.update(i,o):await Us.create(o),nd.init()}),r==null||r.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(i=a.dataset.id,document.getElementById("cc-nome").value=a.dataset.nome||"",document.getElementById("cc-codigo").value=a.dataset.codigo||"",n==null||n.classList.remove("hidden"))})}},LO={render:(n=[])=>`
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <h2 class="text-2xl font-display text-text tracking-wide">Compradores</h2>
                <button class="btn" id="btn-novo-comprador">Novo Comprador</button>
            </div>
            <div id="comprador-form" class="hidden card p-4 space-y-3">
                <h3 class="text-lg font-display text-text">Comprador</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input id="compr-nome" class="input" placeholder="Nome">
                    <input id="compr-email" class="input" placeholder="Email">
                </div>
                <div class="flex gap-2">
                    <button id="btn-salvar-comprador" class="btn">Salvar</button>
                    <button id="btn-cancelar-comprador" class="btn-secondary">Cancelar</button>
                </div>
            </div>
            <div class="card">
                <div class="overflow-x-auto">
                    <table id="compr-table" class="min-w-full divide-y divide-border">
                        <thead class="bg-canvas">
                            <tr>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Nome</th>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Email</th>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-border">
                            ${n.map(t=>`
                                <tr data-id="${t.id}" data-nome="${t.nome||""}" data-email="${t.email||""}">
                                    <td class="px-4 py-2 text-sm text-text">${t.nome||"-"}</td>
                                    <td class="px-4 py-2 text-sm text-text-muted">${t.email||"-"}</td>
                                    <td class="px-4 py-2 text-sm text-primary">Editar</td>
                                </tr>
                            `).join("")||'<tr><td colspan="3" class="px-4 py-4 text-center heading-muted">Nenhum comprador</td></tr>'}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `},sd={init:async()=>{const n=await js.list();lt.render(LO.render(n)),sd.bind()},bind:()=>{const n=document.getElementById("comprador-form"),t=document.getElementById("btn-novo-comprador"),e=document.getElementById("btn-salvar-comprador"),s=document.getElementById("btn-cancelar-comprador"),r=document.getElementById("compr-table");let i=null;t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden")),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("compr-nome").value,email:document.getElementById("compr-email").value};i?await js.update(i,o):await js.create(o),sd.init()}),r==null||r.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(i=a.dataset.id,document.getElementById("compr-nome").value=a.dataset.nome||"",document.getElementById("compr-email").value=a.dataset.email||"",n==null||n.classList.remove("hidden"))})}},Eg={renderBell:(n=0)=>`
            <button id="notifications-bell" class="relative p-2 rounded-lg hover:bg-surface transition-colors">
                ${Mt.bell}
                ${n>0?`
                    <span class="absolute top-0 right-0 bg-alert text-white text-[10px] font-display rounded-full w-5 h-5 flex items-center justify-center">
                        ${n>9?"9+":n}
                    </span>
                `:""}
            </button>
        `,renderDropdown:(n=[])=>`
            <div id="notifications-dropdown" class="absolute right-0 mt-2 w-80 bg-surface border border-border rounded shadow-heavy max-h-96 overflow-y-auto hidden z-50">
                <div class="p-4 border-b border-border flex justify-between items-center">
                    <h3 class="font-display text-text">Notificações</h3>
                    ${n.some(t=>!t.lida)?`
                        <button id="mark-all-read" class="text-xs text-primary hover:text-primary-strong font-display uppercase tracking-wide">
                            Marcar todas como lidas
                        </button>
                    `:""}
                </div>
                
                <div class="divide-y divide-border">
                    ${n.length===0?`
                        <div class="p-6 text-center text-text-muted">
                            <p class="text-sm">Nenhuma notificação</p>
                        </div>
                    `:n.map(t=>`
                        <div class="p-4 hover:bg-canvas transition-colors cursor-pointer ${t.lida?"":"bg-primary/5"}" 
                             data-notification-id="${t.id}" data-link="${t.link||"#"}">
                            <div class="flex items-start gap-3">
                                <div class="flex-shrink-0 w-8 h-8 rounded-full ${t.prioridade==="alta"?"bg-alert":"bg-primary"} flex items-center justify-center">
                                    <span class="text-white text-xs">!</span>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-display text-text ${t.lida?"":"font-bold"}">${t.titulo}</p>
                                    <p class="text-xs text-text-muted mt-1">${t.mensagem}</p>
                                    <p class="text-xs text-text-muted mt-1">${new Date(t.created_at).toLocaleString("pt-BR")}</p>
                                </div>
                                ${t.lida?"":'<div class="w-2 h-2 bg-primary rounded-full"></div>'}
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `},re={notifications:[],unreadCount:0,eventsBound:!1,init:async()=>{At.state.currentUser&&(window.addEventListener("layout:rendered",()=>{re.render(),re.bindEvents()}),await re.load(),re.render(),re.bindEvents(),setInterval(()=>re.load(),12e4))},load:async()=>{const n=At.state.currentUser;re.notifications=await Bs.getByUser(n.uid,20),re.unreadCount=re.notifications.filter(t=>!t.lida).length,re.render(),Ec.badge(re.unreadCount)},render:()=>{const n=document.getElementById("notifications-container");if(!n)return;n.innerHTML=Eg.renderBell(re.unreadCount);const t=document.createElement("div");t.className="relative",t.innerHTML=Eg.renderDropdown(re.notifications),n.appendChild(t)},bindEvents:()=>{re.eventsBound||(re.eventsBound=!0,document.addEventListener("click",n=>{const t=document.getElementById("notifications-bell"),e=document.getElementById("notifications-dropdown");t&&t.contains(n.target)?e==null||e.classList.toggle("hidden"):e&&!e.contains(n.target)&&e.classList.add("hidden")}),document.addEventListener("click",async n=>{if(n.target.id==="mark-all-read"){const t=At.state.currentUser;await Bs.markAllAsRead(t.uid),await re.load()}}),document.addEventListener("click",async n=>{var r,i;const t=(i=(r=n.target).closest)==null?void 0:i.call(r,"[data-notification-id]");if(!t)return;const e=t.dataset.notificationId,s=t.dataset.link||"#";try{await Bs.markAsRead(e),await re.load()}finally{window.location.hash=s.startsWith("#")?s.slice(1):s}}))}};console.log("[Main] Inicializando aplicação...");const VO=async()=>{try{await x1(),console.log("[Main] Firebase inicializado."),At.applyTheme(At.state.currentTheme||"dark"),await hc.init(),At.state.currentUser&&await re.init(),Et.init(),Et.on("/",sn.init),Et.on("/login",Up.initLogin),Et.on("/forgot-password",Up.initForgotPassword),Et.on("/compras",Sr.init),Et.on("/compras/nova",Sr.init),Et.on("/relatorios",z.init),Et.on("/configuracoes",td.init),Et.on("/compras/:id",({id:t})=>Sr.initEdit(t)),Et.on("/compras/:id/editar",({id:t})=>Sr.initEdit(t)),Et.on("/cadastros",MO.init),Et.on("/cadastros/fornecedores",ed.init),Et.on("/cadastros/centros-custo",nd.init),Et.on("/cadastros/compradores",sd.init),Et.on("/obras",Ir.initList),Et.on("/obras/nova",()=>Ir.initForm()),Et.on("/obras/:id",({id:t})=>Ir.initDashboard(t)),Et.on("/obras/:id/dashboard",({id:t})=>Ir.initDashboard(t)),Et.on("/obras/:id/editar",({id:t})=>Ir.initForm(t)),Et.handleRoute();const n=document.getElementById("loader");n&&n.remove()}catch(n){console.error("[Main] Erro fatal:",n),document.body.innerHTML=`<div class="p-10 text-red-600">Erro fatal: ${n.message}</div>`}};VO();
