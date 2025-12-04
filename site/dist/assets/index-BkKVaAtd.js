var Wb=Object.defineProperty;var Gb=(n,t,e)=>t in n?Wb(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var N=(n,t,e)=>Gb(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();var nf={};/**
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
 */const ag=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Yb=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const i=n[e++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[e++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[e++],o=n[e++],a=n[e++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[e++],o=n[e++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},cg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),s.push(e[d],e[h],e[f],e[m])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ag(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Yb(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const l=i<n.length?e[n.charAt(i)]:64;++i;const h=i<n.length?e[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new Kb;const f=r<<2|a>>4;if(s.push(f),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const _=l<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Kb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qb=function(n){const t=ag(n);return cg.encodeByteArray(t,!0)},Ia=function(n){return Qb(n).replace(/\./g,"")},lg=function(n){try{return cg.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Xb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Jb=()=>Xb().__FIREBASE_DEFAULTS__,Zb=()=>{if(typeof process>"u"||typeof nf>"u")return;const n=nf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},t0=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&lg(n[1]);return t&&JSON.parse(t)},ic=()=>{try{return Jb()||Zb()||t0()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ug=n=>{var t,e;return(e=(t=ic())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},dg=n=>{const t=ug(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},hg=()=>{var n;return(n=ic())===null||n===void 0?void 0:n.config},fg=n=>{var t;return(t=ic())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class e0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
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
 */function pg(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ia(JSON.stringify(e)),Ia(JSON.stringify(o)),""].join(".")}/**
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
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function n0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function s0(){var n;const t=(n=ic())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function i0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function r0(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function o0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function a0(){const n=me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function c0(){return!s0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function l0(){try{return typeof indexedDB=="object"}catch{return!1}}function u0(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
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
 */const d0="FirebaseError";class on extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=d0,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jr.prototype.create)}}class Jr{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?h0(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new on(i,a,s)}}function h0(n,t){return n.replace(f0,(e,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const f0=/\{\$([^}]+)}/g;function p0(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Aa(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const i of e){if(!s.includes(i))return!1;const r=n[i],o=t[i];if(sf(r)&&sf(o)){if(!Aa(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!e.includes(i))return!1;return!0}function sf(n){return n!==null&&typeof n=="object"}/**
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
 */function Zr(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function lr(n){const t={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}}),t}function ur(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function m0(n,t){const e=new g0(n,t);return e.subscribe.bind(e)}class g0{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let i;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");_0(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:s},i.next===void 0&&(i.next=ol),i.error===void 0&&(i.error=ol),i.complete===void 0&&(i.complete=ol);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _0(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function ol(){}/**
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
 */function Lt(n){return n&&n._delegate?n._delegate:n}class Zn{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ys="[DEFAULT]";/**
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
 */class y0{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new e0;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(b0(t))try{this.getOrInitializeService({instanceIdentifier:ys})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=ys){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ys){return this.instances.has(t)}getOptions(t=ys){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,e){var s;const i=this.normalizeInstanceIdentifier(e),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const i of s)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:v0(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=ys){return this.component?this.component.multipleInstances?t:ys:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function v0(n){return n===ys?void 0:n}function b0(n){return n.instantiationMode==="EAGER"}/**
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
 */class w0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new y0(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var rt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(rt||(rt={}));const x0={debug:rt.DEBUG,verbose:rt.VERBOSE,info:rt.INFO,warn:rt.WARN,error:rt.ERROR,silent:rt.SILENT},E0=rt.INFO,T0={[rt.DEBUG]:"log",[rt.VERBOSE]:"log",[rt.INFO]:"info",[rt.WARN]:"warn",[rt.ERROR]:"error"},I0=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),i=T0[t];if(i)console[i](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Lu{constructor(t){this.name=t,this._logLevel=E0,this._logHandler=I0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in rt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?x0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,rt.DEBUG,...t),this._logHandler(this,rt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,rt.VERBOSE,...t),this._logHandler(this,rt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,rt.INFO,...t),this._logHandler(this,rt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,rt.WARN,...t),this._logHandler(this,rt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,rt.ERROR,...t),this._logHandler(this,rt.ERROR,...t)}}const A0=(n,t)=>t.some(e=>n instanceof e);let rf,of;function k0(){return rf||(rf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function S0(){return of||(of=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mg=new WeakMap,Ul=new WeakMap,gg=new WeakMap,al=new WeakMap,Vu=new WeakMap;function R0(n){const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(Yn(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&mg.set(e,n)}).catch(()=>{}),Vu.set(t,n),t}function P0(n){if(Ul.has(n))return;const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ul.set(n,t)}let jl={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ul.get(n);if(t==="objectStoreNames")return n.objectStoreNames||gg.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Yn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function C0(n){jl=n(jl)}function D0(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(cl(this),t,...e);return gg.set(s,t.sort?t.sort():[t]),Yn(s)}:S0().includes(n)?function(...t){return n.apply(cl(this),t),Yn(mg.get(this))}:function(...t){return Yn(n.apply(cl(this),t))}}function O0(n){return typeof n=="function"?D0(n):(n instanceof IDBTransaction&&P0(n),A0(n,k0())?new Proxy(n,jl):n)}function Yn(n){if(n instanceof IDBRequest)return R0(n);if(al.has(n))return al.get(n);const t=O0(n);return t!==n&&(al.set(n,t),Vu.set(t,n)),t}const cl=n=>Vu.get(n);function M0(n,t,{blocked:e,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,t),a=Yn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Yn(o.result),c.oldVersion,c.newVersion,Yn(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const N0=["get","getKey","getAll","getAllKeys","count"],L0=["put","add","delete","clear"],ll=new Map;function af(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ll.get(t))return ll.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,i=L0.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(i||N0.includes(e)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),i&&c.done]))[0]};return ll.set(t,r),r}C0(n=>({...n,get:(t,e,s)=>af(t,e)||n.get(t,e,s),has:(t,e)=>!!af(t,e)||n.has(t,e)}));/**
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
 */class V0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(F0(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function F0(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const zl="@firebase/app",cf="0.10.13";/**
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
 */const An=new Lu("@firebase/app"),$0="@firebase/app-compat",B0="@firebase/analytics-compat",U0="@firebase/analytics",j0="@firebase/app-check-compat",z0="@firebase/app-check",H0="@firebase/auth",q0="@firebase/auth-compat",W0="@firebase/database",G0="@firebase/data-connect",Y0="@firebase/database-compat",K0="@firebase/functions",Q0="@firebase/functions-compat",X0="@firebase/installations",J0="@firebase/installations-compat",Z0="@firebase/messaging",tw="@firebase/messaging-compat",ew="@firebase/performance",nw="@firebase/performance-compat",sw="@firebase/remote-config",iw="@firebase/remote-config-compat",rw="@firebase/storage",ow="@firebase/storage-compat",aw="@firebase/firestore",cw="@firebase/vertexai-preview",lw="@firebase/firestore-compat",uw="firebase",dw="10.14.1";/**
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
 */const Hl="[DEFAULT]",hw={[zl]:"fire-core",[$0]:"fire-core-compat",[U0]:"fire-analytics",[B0]:"fire-analytics-compat",[z0]:"fire-app-check",[j0]:"fire-app-check-compat",[H0]:"fire-auth",[q0]:"fire-auth-compat",[W0]:"fire-rtdb",[G0]:"fire-data-connect",[Y0]:"fire-rtdb-compat",[K0]:"fire-fn",[Q0]:"fire-fn-compat",[X0]:"fire-iid",[J0]:"fire-iid-compat",[Z0]:"fire-fcm",[tw]:"fire-fcm-compat",[ew]:"fire-perf",[nw]:"fire-perf-compat",[sw]:"fire-rc",[iw]:"fire-rc-compat",[rw]:"fire-gcs",[ow]:"fire-gcs-compat",[aw]:"fire-fst",[lw]:"fire-fst-compat",[cw]:"fire-vertex","fire-js":"fire-js",[uw]:"fire-js-all"};/**
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
 */const ka=new Map,fw=new Map,ql=new Map;function lf(n,t){try{n.container.addComponent(t)}catch(e){An.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Cs(n){const t=n.name;if(ql.has(t))return An.debug(`There were multiple attempts to register component ${t}.`),!1;ql.set(t,n);for(const e of ka.values())lf(e,n);for(const e of fw.values())lf(e,n);return!0}function rc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function _n(n){return n.settings!==void 0}/**
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
 */const pw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new Jr("app","Firebase",pw);/**
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
 */class mw{constructor(t,e,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
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
 */const $s=dw;function _g(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Hl,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw Kn.create("bad-app-name",{appName:String(i)});if(e||(e=hg()),!e)throw Kn.create("no-options");const r=ka.get(i);if(r){if(Aa(e,r.options)&&Aa(s,r.config))return r;throw Kn.create("duplicate-app",{appName:i})}const o=new w0(i);for(const c of ql.values())o.addComponent(c);const a=new mw(e,s,o);return ka.set(i,a),a}function Fu(n=Hl){const t=ka.get(n);if(!t&&n===Hl&&hg())return _g();if(!t)throw Kn.create("no-app",{appName:n});return t}function Qe(n,t,e){var s;let i=(s=hw[n])!==null&&s!==void 0?s:n;e&&(i+=`-${e}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),An.warn(a.join(" "));return}Cs(new Zn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const gw="firebase-heartbeat-database",_w=1,Or="firebase-heartbeat-store";let ul=null;function yg(){return ul||(ul=M0(gw,_w,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Or)}catch(e){console.warn(e)}}}}).catch(n=>{throw Kn.create("idb-open",{originalErrorMessage:n.message})})),ul}async function yw(n){try{const e=(await yg()).transaction(Or),s=await e.objectStore(Or).get(vg(n));return await e.done,s}catch(t){if(t instanceof on)An.warn(t.message);else{const e=Kn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});An.warn(e.message)}}}async function uf(n,t){try{const s=(await yg()).transaction(Or,"readwrite");await s.objectStore(Or).put(t,vg(n)),await s.done}catch(e){if(e instanceof on)An.warn(e.message);else{const s=Kn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});An.warn(s.message)}}}function vg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const vw=1024,bw=30*24*60*60*1e3;class ww{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ew(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=df();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=bw}),this._storage.overwrite(this._heartbeatsCache))}catch(s){An.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=df(),{heartbeatsToSend:s,unsentEntries:i}=xw(this._heartbeatsCache.heartbeats),r=Ia(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return An.warn(e),""}}}function df(){return new Date().toISOString().substring(0,10)}function xw(n,t=vw){const e=[];let s=n.slice();for(const i of n){const r=e.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),hf(e)>t){r.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),hf(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class Ew{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return l0()?u0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await yw(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return uf(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return uf(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function hf(n){return Ia(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Tw(n){Cs(new Zn("platform-logger",t=>new V0(t),"PRIVATE")),Cs(new Zn("heartbeat",t=>new ww(t),"PRIVATE")),Qe(zl,cf,n),Qe(zl,cf,"esm2017"),Qe("fire-js","")}Tw("");var Iw="firebase",Aw="10.14.1";/**
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
 */Qe(Iw,Aw,"app");var ff=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Is,bg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(x,v){function w(){}w.prototype=v.prototype,x.D=v.prototype,x.prototype=new w,x.prototype.constructor=x,x.C=function(A,S,P){for(var k=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)k[tt-2]=arguments[tt];return v.prototype[S].apply(A,k)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,e),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(x,v,w){w||(w=0);var A=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)A[S]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(S=0;16>S;++S)A[S]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=x.g[0],w=x.g[1],S=x.g[2];var P=x.g[3],k=v+(P^w&(S^P))+A[0]+3614090360&4294967295;v=w+(k<<7&4294967295|k>>>25),k=P+(S^v&(w^S))+A[1]+3905402710&4294967295,P=v+(k<<12&4294967295|k>>>20),k=S+(w^P&(v^w))+A[2]+606105819&4294967295,S=P+(k<<17&4294967295|k>>>15),k=w+(v^S&(P^v))+A[3]+3250441966&4294967295,w=S+(k<<22&4294967295|k>>>10),k=v+(P^w&(S^P))+A[4]+4118548399&4294967295,v=w+(k<<7&4294967295|k>>>25),k=P+(S^v&(w^S))+A[5]+1200080426&4294967295,P=v+(k<<12&4294967295|k>>>20),k=S+(w^P&(v^w))+A[6]+2821735955&4294967295,S=P+(k<<17&4294967295|k>>>15),k=w+(v^S&(P^v))+A[7]+4249261313&4294967295,w=S+(k<<22&4294967295|k>>>10),k=v+(P^w&(S^P))+A[8]+1770035416&4294967295,v=w+(k<<7&4294967295|k>>>25),k=P+(S^v&(w^S))+A[9]+2336552879&4294967295,P=v+(k<<12&4294967295|k>>>20),k=S+(w^P&(v^w))+A[10]+4294925233&4294967295,S=P+(k<<17&4294967295|k>>>15),k=w+(v^S&(P^v))+A[11]+2304563134&4294967295,w=S+(k<<22&4294967295|k>>>10),k=v+(P^w&(S^P))+A[12]+1804603682&4294967295,v=w+(k<<7&4294967295|k>>>25),k=P+(S^v&(w^S))+A[13]+4254626195&4294967295,P=v+(k<<12&4294967295|k>>>20),k=S+(w^P&(v^w))+A[14]+2792965006&4294967295,S=P+(k<<17&4294967295|k>>>15),k=w+(v^S&(P^v))+A[15]+1236535329&4294967295,w=S+(k<<22&4294967295|k>>>10),k=v+(S^P&(w^S))+A[1]+4129170786&4294967295,v=w+(k<<5&4294967295|k>>>27),k=P+(w^S&(v^w))+A[6]+3225465664&4294967295,P=v+(k<<9&4294967295|k>>>23),k=S+(v^w&(P^v))+A[11]+643717713&4294967295,S=P+(k<<14&4294967295|k>>>18),k=w+(P^v&(S^P))+A[0]+3921069994&4294967295,w=S+(k<<20&4294967295|k>>>12),k=v+(S^P&(w^S))+A[5]+3593408605&4294967295,v=w+(k<<5&4294967295|k>>>27),k=P+(w^S&(v^w))+A[10]+38016083&4294967295,P=v+(k<<9&4294967295|k>>>23),k=S+(v^w&(P^v))+A[15]+3634488961&4294967295,S=P+(k<<14&4294967295|k>>>18),k=w+(P^v&(S^P))+A[4]+3889429448&4294967295,w=S+(k<<20&4294967295|k>>>12),k=v+(S^P&(w^S))+A[9]+568446438&4294967295,v=w+(k<<5&4294967295|k>>>27),k=P+(w^S&(v^w))+A[14]+3275163606&4294967295,P=v+(k<<9&4294967295|k>>>23),k=S+(v^w&(P^v))+A[3]+4107603335&4294967295,S=P+(k<<14&4294967295|k>>>18),k=w+(P^v&(S^P))+A[8]+1163531501&4294967295,w=S+(k<<20&4294967295|k>>>12),k=v+(S^P&(w^S))+A[13]+2850285829&4294967295,v=w+(k<<5&4294967295|k>>>27),k=P+(w^S&(v^w))+A[2]+4243563512&4294967295,P=v+(k<<9&4294967295|k>>>23),k=S+(v^w&(P^v))+A[7]+1735328473&4294967295,S=P+(k<<14&4294967295|k>>>18),k=w+(P^v&(S^P))+A[12]+2368359562&4294967295,w=S+(k<<20&4294967295|k>>>12),k=v+(w^S^P)+A[5]+4294588738&4294967295,v=w+(k<<4&4294967295|k>>>28),k=P+(v^w^S)+A[8]+2272392833&4294967295,P=v+(k<<11&4294967295|k>>>21),k=S+(P^v^w)+A[11]+1839030562&4294967295,S=P+(k<<16&4294967295|k>>>16),k=w+(S^P^v)+A[14]+4259657740&4294967295,w=S+(k<<23&4294967295|k>>>9),k=v+(w^S^P)+A[1]+2763975236&4294967295,v=w+(k<<4&4294967295|k>>>28),k=P+(v^w^S)+A[4]+1272893353&4294967295,P=v+(k<<11&4294967295|k>>>21),k=S+(P^v^w)+A[7]+4139469664&4294967295,S=P+(k<<16&4294967295|k>>>16),k=w+(S^P^v)+A[10]+3200236656&4294967295,w=S+(k<<23&4294967295|k>>>9),k=v+(w^S^P)+A[13]+681279174&4294967295,v=w+(k<<4&4294967295|k>>>28),k=P+(v^w^S)+A[0]+3936430074&4294967295,P=v+(k<<11&4294967295|k>>>21),k=S+(P^v^w)+A[3]+3572445317&4294967295,S=P+(k<<16&4294967295|k>>>16),k=w+(S^P^v)+A[6]+76029189&4294967295,w=S+(k<<23&4294967295|k>>>9),k=v+(w^S^P)+A[9]+3654602809&4294967295,v=w+(k<<4&4294967295|k>>>28),k=P+(v^w^S)+A[12]+3873151461&4294967295,P=v+(k<<11&4294967295|k>>>21),k=S+(P^v^w)+A[15]+530742520&4294967295,S=P+(k<<16&4294967295|k>>>16),k=w+(S^P^v)+A[2]+3299628645&4294967295,w=S+(k<<23&4294967295|k>>>9),k=v+(S^(w|~P))+A[0]+4096336452&4294967295,v=w+(k<<6&4294967295|k>>>26),k=P+(w^(v|~S))+A[7]+1126891415&4294967295,P=v+(k<<10&4294967295|k>>>22),k=S+(v^(P|~w))+A[14]+2878612391&4294967295,S=P+(k<<15&4294967295|k>>>17),k=w+(P^(S|~v))+A[5]+4237533241&4294967295,w=S+(k<<21&4294967295|k>>>11),k=v+(S^(w|~P))+A[12]+1700485571&4294967295,v=w+(k<<6&4294967295|k>>>26),k=P+(w^(v|~S))+A[3]+2399980690&4294967295,P=v+(k<<10&4294967295|k>>>22),k=S+(v^(P|~w))+A[10]+4293915773&4294967295,S=P+(k<<15&4294967295|k>>>17),k=w+(P^(S|~v))+A[1]+2240044497&4294967295,w=S+(k<<21&4294967295|k>>>11),k=v+(S^(w|~P))+A[8]+1873313359&4294967295,v=w+(k<<6&4294967295|k>>>26),k=P+(w^(v|~S))+A[15]+4264355552&4294967295,P=v+(k<<10&4294967295|k>>>22),k=S+(v^(P|~w))+A[6]+2734768916&4294967295,S=P+(k<<15&4294967295|k>>>17),k=w+(P^(S|~v))+A[13]+1309151649&4294967295,w=S+(k<<21&4294967295|k>>>11),k=v+(S^(w|~P))+A[4]+4149444226&4294967295,v=w+(k<<6&4294967295|k>>>26),k=P+(w^(v|~S))+A[11]+3174756917&4294967295,P=v+(k<<10&4294967295|k>>>22),k=S+(v^(P|~w))+A[2]+718787259&4294967295,S=P+(k<<15&4294967295|k>>>17),k=w+(P^(S|~v))+A[9]+3951481745&4294967295,x.g[0]=x.g[0]+v&4294967295,x.g[1]=x.g[1]+(S+(k<<21&4294967295|k>>>11))&4294967295,x.g[2]=x.g[2]+S&4294967295,x.g[3]=x.g[3]+P&4294967295}s.prototype.u=function(x,v){v===void 0&&(v=x.length);for(var w=v-this.blockSize,A=this.B,S=this.h,P=0;P<v;){if(S==0)for(;P<=w;)i(this,x,P),P+=this.blockSize;if(typeof x=="string"){for(;P<v;)if(A[S++]=x.charCodeAt(P++),S==this.blockSize){i(this,A),S=0;break}}else for(;P<v;)if(A[S++]=x[P++],S==this.blockSize){i(this,A),S=0;break}}this.h=S,this.o+=v},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var v=1;v<x.length-8;++v)x[v]=0;var w=8*this.o;for(v=x.length-8;v<x.length;++v)x[v]=w&255,w/=256;for(this.u(x),x=Array(16),v=w=0;4>v;++v)for(var A=0;32>A;A+=8)x[w++]=this.g[v]>>>A&255;return x};function r(x,v){var w=a;return Object.prototype.hasOwnProperty.call(w,x)?w[x]:w[x]=v(x)}function o(x,v){this.h=v;for(var w=[],A=!0,S=x.length-1;0<=S;S--){var P=x[S]|0;A&&P==v||(w[S]=P,A=!1)}this.g=w}var a={};function c(x){return-128<=x&&128>x?r(x,function(v){return new o([v|0],0>v?-1:0)}):new o([x|0],0>x?-1:0)}function l(x){if(isNaN(x)||!isFinite(x))return h;if(0>x)return y(l(-x));for(var v=[],w=1,A=0;x>=w;A++)v[A]=x/w|0,w*=4294967296;return new o(v,0)}function d(x,v){if(x.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(x.charAt(0)=="-")return y(d(x.substring(1),v));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=l(Math.pow(v,8)),A=h,S=0;S<x.length;S+=8){var P=Math.min(8,x.length-S),k=parseInt(x.substring(S,S+P),v);8>P?(P=l(Math.pow(v,P)),A=A.j(P).add(l(k))):(A=A.j(w),A=A.add(l(k)))}return A}var h=c(0),f=c(1),m=c(16777216);n=o.prototype,n.m=function(){if(b(this))return-y(this).m();for(var x=0,v=1,w=0;w<this.g.length;w++){var A=this.i(w);x+=(0<=A?A:4294967296+A)*v,v*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(_(this))return"0";if(b(this))return"-"+y(this).toString(x);for(var v=l(Math.pow(x,6)),w=this,A="";;){var S=R(w,v).g;w=T(w,S.j(v));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(x);if(w=S,_(w))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function _(x){if(x.h!=0)return!1;for(var v=0;v<x.g.length;v++)if(x.g[v]!=0)return!1;return!0}function b(x){return x.h==-1}n.l=function(x){return x=T(this,x),b(x)?-1:_(x)?0:1};function y(x){for(var v=x.g.length,w=[],A=0;A<v;A++)w[A]=~x.g[A];return new o(w,~x.h).add(f)}n.abs=function(){return b(this)?y(this):this},n.add=function(x){for(var v=Math.max(this.g.length,x.g.length),w=[],A=0,S=0;S<=v;S++){var P=A+(this.i(S)&65535)+(x.i(S)&65535),k=(P>>>16)+(this.i(S)>>>16)+(x.i(S)>>>16);A=k>>>16,P&=65535,k&=65535,w[S]=k<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function T(x,v){return x.add(y(v))}n.j=function(x){if(_(this)||_(x))return h;if(b(this))return b(x)?y(this).j(y(x)):y(y(this).j(x));if(b(x))return y(this.j(y(x)));if(0>this.l(m)&&0>x.l(m))return l(this.m()*x.m());for(var v=this.g.length+x.g.length,w=[],A=0;A<2*v;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<x.g.length;S++){var P=this.i(A)>>>16,k=this.i(A)&65535,tt=x.i(S)>>>16,W=x.i(S)&65535;w[2*A+2*S]+=k*W,I(w,2*A+2*S),w[2*A+2*S+1]+=P*W,I(w,2*A+2*S+1),w[2*A+2*S+1]+=k*tt,I(w,2*A+2*S+1),w[2*A+2*S+2]+=P*tt,I(w,2*A+2*S+2)}for(A=0;A<v;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=v;A<2*v;A++)w[A]=0;return new o(w,0)};function I(x,v){for(;(x[v]&65535)!=x[v];)x[v+1]+=x[v]>>>16,x[v]&=65535,v++}function C(x,v){this.g=x,this.h=v}function R(x,v){if(_(v))throw Error("division by zero");if(_(x))return new C(h,h);if(b(x))return v=R(y(x),v),new C(y(v.g),y(v.h));if(b(v))return v=R(x,y(v)),new C(y(v.g),v.h);if(30<x.g.length){if(b(x)||b(v))throw Error("slowDivide_ only works with positive integers.");for(var w=f,A=v;0>=A.l(x);)w=D(w),A=D(A);var S=O(w,1),P=O(A,1);for(A=O(A,2),w=O(w,2);!_(A);){var k=P.add(A);0>=k.l(x)&&(S=S.add(w),P=k),A=O(A,1),w=O(w,1)}return v=T(x,S.j(v)),new C(S,v)}for(S=h;0<=x.l(v);){for(w=Math.max(1,Math.floor(x.m()/v.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=l(w),k=P.j(v);b(k)||0<k.l(x);)w-=A,P=l(w),k=P.j(v);_(P)&&(P=f),S=S.add(P),x=T(x,k)}return new C(S,x)}n.A=function(x){return R(this,x).h},n.and=function(x){for(var v=Math.max(this.g.length,x.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)&x.i(A);return new o(w,this.h&x.h)},n.or=function(x){for(var v=Math.max(this.g.length,x.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)|x.i(A);return new o(w,this.h|x.h)},n.xor=function(x){for(var v=Math.max(this.g.length,x.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)^x.i(A);return new o(w,this.h^x.h)};function D(x){for(var v=x.g.length+1,w=[],A=0;A<v;A++)w[A]=x.i(A)<<1|x.i(A-1)>>>31;return new o(w,x.h)}function O(x,v){var w=v>>5;v%=32;for(var A=x.g.length-w,S=[],P=0;P<A;P++)S[P]=0<v?x.i(P+w)>>>v|x.i(P+w+1)<<32-v:x.i(P+w);return new o(S,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,bg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,Is=o}).apply(typeof ff<"u"?ff:typeof self<"u"?self:typeof window<"u"?window:{});var Vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wg,dr,xg,oa,Wl,Eg,Tg,Ig;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,g){return u==Array.prototype||u==Object.prototype||(u[p]=g.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vo=="object"&&Vo];for(var p=0;p<u.length;++p){var g=u[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=e(this);function i(u,p){if(p)t:{var g=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var M=u[E];if(!(M in g))break t;g=g[M]}u=u[u.length-1],E=g[u],p=p(E),p!=E&&p!=null&&t(g,u,{configurable:!0,writable:!0,value:p})}}function r(u,p){u instanceof String&&(u+="");var g=0,E=!1,M={next:function(){if(!E&&g<u.length){var L=g++;return{value:p(L,u[L]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}i("Array.prototype.values",function(u){return u||function(){return r(this,function(p,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function l(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function d(u,p,g){return u.call.apply(u.bind,arguments)}function h(u,p,g){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),u.apply(p,M)}}return function(){return u.apply(p,arguments)}}function f(u,p,g){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,f.apply(null,arguments)}function m(u,p){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function _(u,p){function g(){}g.prototype=p.prototype,u.aa=p.prototype,u.prototype=new g,u.prototype.constructor=u,u.Qb=function(E,M,L){for(var U=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)U[yt-2]=arguments[yt];return p.prototype[M].apply(E,U)}}function b(u){const p=u.length;if(0<p){const g=Array(p);for(let E=0;E<p;E++)g[E]=u[E];return g}return[]}function y(u,p){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(c(E)){const M=u.length||0,L=E.length||0;u.length=M+L;for(let U=0;U<L;U++)u[M+U]=E[U]}else u.push(E)}}class T{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function I(u){return/^[\s\xa0]*$/.test(u)}function C(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function R(u){return R[" "](u),u}R[" "]=function(){};var D=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function O(u,p,g){for(const E in u)p.call(g,u[E],E,u)}function x(u,p){for(const g in u)p.call(void 0,u[g],g,u)}function v(u){const p={};for(const g in u)p[g]=u[g];return p}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,p){let g,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(g in E)u[g]=E[g];for(let L=0;L<w.length;L++)g=w[L],Object.prototype.hasOwnProperty.call(E,g)&&(u[g]=E[g])}}function S(u){var p=1;u=u.split(":");const g=[];for(;0<p&&u.length;)g.push(u.shift()),p--;return u.length&&g.push(u.join(":")),g}function P(u){a.setTimeout(()=>{throw u},0)}function k(){var u=Ht;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class tt{constructor(){this.h=this.g=null}add(p,g){const E=W.get();E.set(p,g),this.h?this.h.next=E:this.g=E,this.h=E}}var W=new T(()=>new Z,u=>u.reset());class Z{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ot,Yt=!1,Ht=new tt,an=()=>{const u=a.Promise.resolve(void 0);ot=()=>{u.then(Gs)}};var Gs=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(g){P(g)}var p=W;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}Yt=!1};function _e(){this.s=this.s,this.C=this.C}_e.prototype.s=!1,_e.prototype.ma=function(){this.s||(this.s=!0,this.N())},_e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ot(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}Ot.prototype.h=function(){this.defaultPrevented=!0};var cn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const g=()=>{};a.addEventListener("test",g,p),a.removeEventListener("test",g,p)}catch{}return u}();function Me(u,p){if(Ot.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var g=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(D){t:{try{R(p.nodeName);var M=!0;break t}catch{}M=!1}M||(p=null)}}else g=="mouseover"?p=u.fromElement:g=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:ln[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Me.aa.h.call(this)}}_(Me,Ot);var ln={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var yo="closure_listenable_"+(1e6*Math.random()|0),mb=0;function gb(u,p,g,E,M){this.listener=u,this.proxy=null,this.src=p,this.type=g,this.capture=!!E,this.ha=M,this.key=++mb,this.da=this.fa=!1}function vo(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function bo(u){this.src=u,this.g={},this.h=0}bo.prototype.add=function(u,p,g,E,M){var L=u.toString();u=this.g[L],u||(u=this.g[L]=[],this.h++);var U=Fc(u,p,E,M);return-1<U?(p=u[U],g||(p.fa=!1)):(p=new gb(p,this.src,L,!!E,M),p.fa=g,u.push(p)),p};function Vc(u,p){var g=p.type;if(g in u.g){var E=u.g[g],M=Array.prototype.indexOf.call(E,p,void 0),L;(L=0<=M)&&Array.prototype.splice.call(E,M,1),L&&(vo(p),u.g[g].length==0&&(delete u.g[g],u.h--))}}function Fc(u,p,g,E){for(var M=0;M<u.length;++M){var L=u[M];if(!L.da&&L.listener==p&&L.capture==!!g&&L.ha==E)return M}return-1}var $c="closure_lm_"+(1e6*Math.random()|0),Bc={};function sh(u,p,g,E,M){if(Array.isArray(p)){for(var L=0;L<p.length;L++)sh(u,p[L],g,E,M);return null}return g=oh(g),u&&u[yo]?u.K(p,g,l(E)?!!E.capture:!1,M):_b(u,p,g,!1,E,M)}function _b(u,p,g,E,M,L){if(!p)throw Error("Invalid event type");var U=l(M)?!!M.capture:!!M,yt=jc(u);if(yt||(u[$c]=yt=new bo(u)),g=yt.add(p,g,E,U,L),g.proxy)return g;if(E=yb(),g.proxy=E,E.src=u,E.listener=g,u.addEventListener)cn||(M=U),M===void 0&&(M=!1),u.addEventListener(p.toString(),E,M);else if(u.attachEvent)u.attachEvent(rh(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function yb(){function u(g){return p.call(u.src,u.listener,g)}const p=vb;return u}function ih(u,p,g,E,M){if(Array.isArray(p))for(var L=0;L<p.length;L++)ih(u,p[L],g,E,M);else E=l(E)?!!E.capture:!!E,g=oh(g),u&&u[yo]?(u=u.i,p=String(p).toString(),p in u.g&&(L=u.g[p],g=Fc(L,g,E,M),-1<g&&(vo(L[g]),Array.prototype.splice.call(L,g,1),L.length==0&&(delete u.g[p],u.h--)))):u&&(u=jc(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Fc(p,g,E,M)),(g=-1<u?p[u]:null)&&Uc(g))}function Uc(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[yo])Vc(p.i,u);else{var g=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(g,E,u.capture):p.detachEvent?p.detachEvent(rh(g),E):p.addListener&&p.removeListener&&p.removeListener(E),(g=jc(p))?(Vc(g,u),g.h==0&&(g.src=null,p[$c]=null)):vo(u)}}}function rh(u){return u in Bc?Bc[u]:Bc[u]="on"+u}function vb(u,p){if(u.da)u=!0;else{p=new Me(p,this);var g=u.listener,E=u.ha||u.src;u.fa&&Uc(u),u=g.call(E,p)}return u}function jc(u){return u=u[$c],u instanceof bo?u:null}var zc="__closure_events_fn_"+(1e9*Math.random()>>>0);function oh(u){return typeof u=="function"?u:(u[zc]||(u[zc]=function(p){return u.handleEvent(p)}),u[zc])}function re(){_e.call(this),this.i=new bo(this),this.M=this,this.F=null}_(re,_e),re.prototype[yo]=!0,re.prototype.removeEventListener=function(u,p,g,E){ih(this,u,p,g,E)};function ye(u,p){var g,E=u.F;if(E)for(g=[];E;E=E.F)g.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new Ot(p,u);else if(p instanceof Ot)p.target=p.target||u;else{var M=p;p=new Ot(E,u),A(p,M)}if(M=!0,g)for(var L=g.length-1;0<=L;L--){var U=p.g=g[L];M=wo(U,E,!0,p)&&M}if(U=p.g=u,M=wo(U,E,!0,p)&&M,M=wo(U,E,!1,p)&&M,g)for(L=0;L<g.length;L++)U=p.g=g[L],M=wo(U,E,!1,p)&&M}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var g=u.g[p],E=0;E<g.length;E++)vo(g[E]);delete u.g[p],u.h--}}this.F=null},re.prototype.K=function(u,p,g,E){return this.i.add(String(u),p,!1,g,E)},re.prototype.L=function(u,p,g,E){return this.i.add(String(u),p,!0,g,E)};function wo(u,p,g,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var M=!0,L=0;L<p.length;++L){var U=p[L];if(U&&!U.da&&U.capture==g){var yt=U.listener,te=U.ha||U.src;U.fa&&Vc(u.i,U),M=yt.call(te,E)!==!1&&M}}return M&&!E.defaultPrevented}function ah(u,p,g){if(typeof u=="function")g&&(u=f(u,g));else if(u&&typeof u.handleEvent=="function")u=f(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function ch(u){u.g=ah(()=>{u.g=null,u.i&&(u.i=!1,ch(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class bb extends _e{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:ch(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ni(u){_e.call(this),this.h=u,this.g={}}_(Ni,_e);var lh=[];function uh(u){O(u.g,function(p,g){this.g.hasOwnProperty(g)&&Uc(p)},u),u.g={}}Ni.prototype.N=function(){Ni.aa.N.call(this),uh(this)},Ni.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hc=a.JSON.stringify,wb=a.JSON.parse,xb=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function qc(){}qc.prototype.h=null;function dh(u){return u.h||(u.h=u.i())}function hh(){}var Li={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wc(){Ot.call(this,"d")}_(Wc,Ot);function Gc(){Ot.call(this,"c")}_(Gc,Ot);var ls={},fh=null;function xo(){return fh=fh||new re}ls.La="serverreachability";function ph(u){Ot.call(this,ls.La,u)}_(ph,Ot);function Vi(u){const p=xo();ye(p,new ph(p))}ls.STAT_EVENT="statevent";function mh(u,p){Ot.call(this,ls.STAT_EVENT,u),this.stat=p}_(mh,Ot);function ve(u){const p=xo();ye(p,new mh(p,u))}ls.Ma="timingevent";function gh(u,p){Ot.call(this,ls.Ma,u),this.size=p}_(gh,Ot);function Fi(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function $i(){this.g=!0}$i.prototype.xa=function(){this.g=!1};function Eb(u,p,g,E,M,L){u.info(function(){if(u.g)if(L)for(var U="",yt=L.split("&"),te=0;te<yt.length;te++){var ct=yt[te].split("=");if(1<ct.length){var oe=ct[0];ct=ct[1];var ae=oe.split("_");U=2<=ae.length&&ae[1]=="type"?U+(oe+"="+ct+"&"):U+(oe+"=redacted&")}}else U=null;else U=L;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+g+`
`+U})}function Tb(u,p,g,E,M,L,U){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+g+`
`+L+" "+U})}function Ys(u,p,g,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Ab(u,g)+(E?" "+E:"")})}function Ib(u,p){u.info(function(){return"TIMEOUT: "+p})}$i.prototype.info=function(){};function Ab(u,p){if(!u.g)return p;if(!p)return null;try{var g=JSON.parse(p);if(g){for(u=0;u<g.length;u++)if(Array.isArray(g[u])){var E=g[u];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var L=M[0];if(L!="noop"&&L!="stop"&&L!="close")for(var U=1;U<M.length;U++)M[U]=""}}}}return Hc(g)}catch{return p}}var Eo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_h={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yc;function To(){}_(To,qc),To.prototype.g=function(){return new XMLHttpRequest},To.prototype.i=function(){return{}},Yc=new To;function Cn(u,p,g,E){this.j=u,this.i=p,this.l=g,this.R=E||1,this.U=new Ni(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yh}function yh(){this.i=null,this.g="",this.h=!1}var vh={},Kc={};function Qc(u,p,g){u.L=1,u.v=So(un(p)),u.m=g,u.P=!0,bh(u,null)}function bh(u,p){u.F=Date.now(),Io(u),u.A=un(u.v);var g=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Mh(g.i,"t",E),u.C=0,g=u.j.J,u.h=new yh,u.g=Jh(u.j,g?p:null,!u.m),0<u.O&&(u.M=new bb(f(u.Y,u,u.g),u.O)),p=u.U,g=u.g,E=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(lh[0]=M.toString()),M=lh);for(var L=0;L<M.length;L++){var U=sh(g,M[L],E||p.handleEvent,!1,p.h||p);if(!U)break;p.g[U.key]=U}p=u.H?v(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Vi(),Eb(u.i,u.u,u.A,u.l,u.R,u.m)}Cn.prototype.ca=function(u){u=u.target;const p=this.M;p&&dn(u)==3?p.j():this.Y(u)},Cn.prototype.Y=function(u){try{if(u==this.g)t:{const ae=dn(this.g);var p=this.g.Ba();const Xs=this.g.Z();if(!(3>ae)&&(ae!=3||this.g&&(this.h.h||this.g.oa()||Uh(this.g)))){this.J||ae!=4||p==7||(p==8||0>=Xs?Vi(3):Vi(2)),Xc(this);var g=this.g.Z();this.X=g;e:if(wh(this)){var E=Uh(this.g);u="";var M=E.length,L=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){us(this),Bi(this);var U="";break e}this.h.i=new a.TextDecoder}for(p=0;p<M;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(L&&p==M-1)});E.length=0,this.h.g+=u,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=g==200,Tb(this.i,this.u,this.A,this.l,this.R,ae,g),this.o){if(this.T&&!this.K){e:{if(this.g){var yt,te=this.g;if((yt=te.g?te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(yt)){var ct=yt;break e}}ct=null}if(g=ct)Ys(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jc(this,g);else{this.o=!1,this.s=3,ve(12),us(this),Bi(this);break t}}if(this.P){g=!0;let Ne;for(;!this.J&&this.C<U.length;)if(Ne=kb(this,U),Ne==Kc){ae==4&&(this.s=4,ve(14),g=!1),Ys(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==vh){this.s=4,ve(15),Ys(this.i,this.l,U,"[Invalid Chunk]"),g=!1;break}else Ys(this.i,this.l,Ne,null),Jc(this,Ne);if(wh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||U.length!=0||this.h.h||(this.s=1,ve(16),g=!1),this.o=this.o&&g,!g)Ys(this.i,this.l,U,"[Invalid Chunked Response]"),us(this),Bi(this);else if(0<U.length&&!this.W){this.W=!0;var oe=this.j;oe.g==this&&oe.ba&&!oe.M&&(oe.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),il(oe),oe.M=!0,ve(11))}}else Ys(this.i,this.l,U,null),Jc(this,U);ae==4&&us(this),this.o&&!this.J&&(ae==4?Yh(this.j,this):(this.o=!1,Io(this)))}else Hb(this.g),g==400&&0<U.indexOf("Unknown SID")?(this.s=3,ve(12)):(this.s=0,ve(13)),us(this),Bi(this)}}}catch{}finally{}};function wh(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function kb(u,p){var g=u.C,E=p.indexOf(`
`,g);return E==-1?Kc:(g=Number(p.substring(g,E)),isNaN(g)?vh:(E+=1,E+g>p.length?Kc:(p=p.slice(E,E+g),u.C=E+g,p)))}Cn.prototype.cancel=function(){this.J=!0,us(this)};function Io(u){u.S=Date.now()+u.I,xh(u,u.I)}function xh(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Fi(f(u.ba,u),p)}function Xc(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Cn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Ib(this.i,this.A),this.L!=2&&(Vi(),ve(17)),us(this),this.s=2,Bi(this)):xh(this,this.S-u)};function Bi(u){u.j.G==0||u.J||Yh(u.j,u)}function us(u){Xc(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,uh(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Jc(u,p){try{var g=u.j;if(g.G!=0&&(g.g==u||Zc(g.h,u))){if(!u.K&&Zc(g.h,u)&&g.G==3){try{var E=g.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){t:if(!g.u){if(g.g)if(g.g.F+3e3<u.F)Mo(g),Do(g);else break t;sl(g),ve(18)}}else g.za=M[1],0<g.za-g.T&&37500>M[2]&&g.F&&g.v==0&&!g.C&&(g.C=Fi(f(g.Za,g),6e3));if(1>=Ih(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else hs(g,11)}else if((u.K||g.g==u)&&Mo(g),!I(p))for(M=g.Da.g.parse(p),p=0;p<M.length;p++){let ct=M[p];if(g.T=ct[0],ct=ct[1],g.G==2)if(ct[0]=="c"){g.K=ct[1],g.ia=ct[2];const oe=ct[3];oe!=null&&(g.la=oe,g.j.info("VER="+g.la));const ae=ct[4];ae!=null&&(g.Aa=ae,g.j.info("SVER="+g.Aa));const Xs=ct[5];Xs!=null&&typeof Xs=="number"&&0<Xs&&(E=1.5*Xs,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const Ne=u.g;if(Ne){const Lo=Ne.g?Ne.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Lo){var L=E.h;L.g||Lo.indexOf("spdy")==-1&&Lo.indexOf("quic")==-1&&Lo.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(tl(L,L.h),L.h=null))}if(E.D){const rl=Ne.g?Ne.g.getResponseHeader("X-HTTP-Session-Id"):null;rl&&(E.ya=rl,xt(E.I,E.D,rl))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-u.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var U=u;if(E.qa=Xh(E,E.J?E.ia:null,E.W),U.K){Ah(E.h,U);var yt=U,te=E.L;te&&(yt.I=te),yt.B&&(Xc(yt),Io(yt)),E.g=U}else Wh(E);0<g.i.length&&Oo(g)}else ct[0]!="stop"&&ct[0]!="close"||hs(g,7);else g.G==3&&(ct[0]=="stop"||ct[0]=="close"?ct[0]=="stop"?hs(g,7):nl(g):ct[0]!="noop"&&g.l&&g.l.ta(ct),g.v=0)}}Vi(4)}catch{}}var Sb=class{constructor(u,p){this.g=u,this.map=p}};function Eh(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Th(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ih(u){return u.h?1:u.g?u.g.size:0}function Zc(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function tl(u,p){u.g?u.g.add(p):u.h=p}function Ah(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Eh.prototype.cancel=function(){if(this.i=kh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function kh(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const g of u.g.values())p=p.concat(g.D);return p}return b(u.i)}function Rb(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(c(u)){for(var p=[],g=u.length,E=0;E<g;E++)p.push(u[E]);return p}p=[],g=0;for(E in u)p[g++]=u[E];return p}function Pb(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(c(u)||typeof u=="string"){var p=[];u=u.length;for(var g=0;g<u;g++)p.push(g);return p}p=[],g=0;for(const E in u)p[g++]=E;return p}}}function Sh(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(c(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var g=Pb(u),E=Rb(u),M=E.length,L=0;L<M;L++)p.call(void 0,E[L],g&&g[L],u)}var Rh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cb(u,p){if(u){u=u.split("&");for(var g=0;g<u.length;g++){var E=u[g].indexOf("="),M=null;if(0<=E){var L=u[g].substring(0,E);M=u[g].substring(E+1)}else L=u[g];p(L,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function ds(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ds){this.h=u.h,Ao(this,u.j),this.o=u.o,this.g=u.g,ko(this,u.s),this.l=u.l;var p=u.i,g=new zi;g.i=p.i,p.g&&(g.g=new Map(p.g),g.h=p.h),Ph(this,g),this.m=u.m}else u&&(p=String(u).match(Rh))?(this.h=!1,Ao(this,p[1]||"",!0),this.o=Ui(p[2]||""),this.g=Ui(p[3]||"",!0),ko(this,p[4]),this.l=Ui(p[5]||"",!0),Ph(this,p[6]||"",!0),this.m=Ui(p[7]||"")):(this.h=!1,this.i=new zi(null,this.h))}ds.prototype.toString=function(){var u=[],p=this.j;p&&u.push(ji(p,Ch,!0),":");var g=this.g;return(g||p=="file")&&(u.push("//"),(p=this.o)&&u.push(ji(p,Ch,!0),"@"),u.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&u.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&u.push("/"),u.push(ji(g,g.charAt(0)=="/"?Mb:Ob,!0))),(g=this.i.toString())&&u.push("?",g),(g=this.m)&&u.push("#",ji(g,Lb)),u.join("")};function un(u){return new ds(u)}function Ao(u,p,g){u.j=g?Ui(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function ko(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Ph(u,p,g){p instanceof zi?(u.i=p,Vb(u.i,u.h)):(g||(p=ji(p,Nb)),u.i=new zi(p,u.h))}function xt(u,p,g){u.i.set(p,g)}function So(u){return xt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ui(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ji(u,p,g){return typeof u=="string"?(u=encodeURI(u).replace(p,Db),g&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Db(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ch=/[#\/\?@]/g,Ob=/[#\?:]/g,Mb=/[#\?]/g,Nb=/[#\?@]/g,Lb=/#/g;function zi(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Dn(u){u.g||(u.g=new Map,u.h=0,u.i&&Cb(u.i,function(p,g){u.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}n=zi.prototype,n.add=function(u,p){Dn(this),this.i=null,u=Ks(this,u);var g=this.g.get(u);return g||this.g.set(u,g=[]),g.push(p),this.h+=1,this};function Dh(u,p){Dn(u),p=Ks(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Oh(u,p){return Dn(u),p=Ks(u,p),u.g.has(p)}n.forEach=function(u,p){Dn(this),this.g.forEach(function(g,E){g.forEach(function(M){u.call(p,M,E,this)},this)},this)},n.na=function(){Dn(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),g=[];for(let E=0;E<p.length;E++){const M=u[E];for(let L=0;L<M.length;L++)g.push(p[E])}return g},n.V=function(u){Dn(this);let p=[];if(typeof u=="string")Oh(this,u)&&(p=p.concat(this.g.get(Ks(this,u))));else{u=Array.from(this.g.values());for(let g=0;g<u.length;g++)p=p.concat(u[g])}return p},n.set=function(u,p){return Dn(this),this.i=null,u=Ks(this,u),Oh(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Mh(u,p,g){Dh(u,p),0<g.length&&(u.i=null,u.g.set(Ks(u,p),b(g)),u.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var g=0;g<p.length;g++){var E=p[g];const L=encodeURIComponent(String(E)),U=this.V(E);for(E=0;E<U.length;E++){var M=L;U[E]!==""&&(M+="="+encodeURIComponent(String(U[E]))),u.push(M)}}return this.i=u.join("&")};function Ks(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Vb(u,p){p&&!u.j&&(Dn(u),u.i=null,u.g.forEach(function(g,E){var M=E.toLowerCase();E!=M&&(Dh(this,E),Mh(this,M,g))},u)),u.j=p}function Fb(u,p){const g=new $i;if(a.Image){const E=new Image;E.onload=m(On,g,"TestLoadImage: loaded",!0,p,E),E.onerror=m(On,g,"TestLoadImage: error",!1,p,E),E.onabort=m(On,g,"TestLoadImage: abort",!1,p,E),E.ontimeout=m(On,g,"TestLoadImage: timeout",!1,p,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function $b(u,p){const g=new $i,E=new AbortController,M=setTimeout(()=>{E.abort(),On(g,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(L=>{clearTimeout(M),L.ok?On(g,"TestPingServer: ok",!0,p):On(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),On(g,"TestPingServer: error",!1,p)})}function On(u,p,g,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(g)}catch{}}function Bb(){this.g=new xb}function Ub(u,p,g){const E=g||"";try{Sh(u,function(M,L){let U=M;l(M)&&(U=Hc(M)),p.push(E+L+"="+encodeURIComponent(U))})}catch(M){throw p.push(E+"type="+encodeURIComponent("_badmap")),M}}function Ro(u){this.l=u.Ub||null,this.j=u.eb||!1}_(Ro,qc),Ro.prototype.g=function(){return new Po(this.l,this.j)},Ro.prototype.i=function(u){return function(){return u}}({});function Po(u,p){re.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(Po,re),n=Po.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,qi(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hi(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,qi(this)),this.g&&(this.readyState=3,qi(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nh(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Nh(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Hi(this):qi(this),this.readyState==3&&Nh(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Hi(this))},n.Qa=function(u){this.g&&(this.response=u,Hi(this))},n.ga=function(){this.g&&Hi(this)};function Hi(u){u.readyState=4,u.l=null,u.j=null,u.v=null,qi(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,u.push(g[0]+": "+g[1]),g=p.next();return u.join(`\r
`)};function qi(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Po.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Lh(u){let p="";return O(u,function(g,E){p+=E,p+=":",p+=g,p+=`\r
`}),p}function el(u,p,g){t:{for(E in g){var E=!1;break t}E=!0}E||(g=Lh(g),typeof u=="string"?g!=null&&encodeURIComponent(String(g)):xt(u,p,g))}function Mt(u){re.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(Mt,re);var jb=/^https?$/i,zb=["POST","PUT"];n=Mt.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yc.g(),this.v=this.o?dh(this.o):dh(Yc),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(L){Vh(this,L);return}if(u=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)g.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const L of E.keys())g.set(L,E.get(L));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),M=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(zb,p,void 0))||E||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,U]of g)this.g.setRequestHeader(L,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bh(this),this.u=!0,this.g.send(u),this.u=!1}catch(L){Vh(this,L)}};function Vh(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Fh(u),Co(u)}function Fh(u){u.A||(u.A=!0,ye(u,"complete"),ye(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ye(this,"complete"),ye(this,"abort"),Co(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Co(this,!0)),Mt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?$h(this):this.bb())},n.bb=function(){$h(this)};function $h(u){if(u.h&&typeof o<"u"&&(!u.v[1]||dn(u)!=4||u.Z()!=2)){if(u.u&&dn(u)==4)ah(u.Ea,0,u);else if(ye(u,"readystatechange"),dn(u)==4){u.h=!1;try{const U=u.Z();t:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var g;if(!(g=p)){var E;if(E=U===0){var M=String(u.D).match(Rh)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),E=!jb.test(M?M.toLowerCase():"")}g=E}if(g)ye(u,"complete"),ye(u,"success");else{u.m=6;try{var L=2<dn(u)?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.Z()+"]",Fh(u)}}finally{Co(u)}}}}function Co(u,p){if(u.g){Bh(u);const g=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||ye(u,"ready");try{g.onreadystatechange=E}catch{}}}function Bh(u){u.I&&(a.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function dn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),wb(p)}};function Uh(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Hb(u){const p={};u=(u.g&&2<=dn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(I(u[E]))continue;var g=S(u[E]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=p[M]||[];p[M]=L,L.push(g)}x(p,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wi(u,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[u]||p}function jh(u){this.Aa=0,this.i=[],this.j=new $i,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wi("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wi("baseRetryDelayMs",5e3,u),this.cb=Wi("retryDelaySeedMs",1e4,u),this.Wa=Wi("forwardChannelMaxRetries",2,u),this.wa=Wi("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Eh(u&&u.concurrentRequestLimit),this.Da=new Bb,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=jh.prototype,n.la=8,n.G=1,n.connect=function(u,p,g,E){ve(0),this.W=u,this.H=p||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=Xh(this,null,this.W),Oo(this)};function nl(u){if(zh(u),u.G==3){var p=u.U++,g=un(u.I);if(xt(g,"SID",u.K),xt(g,"RID",p),xt(g,"TYPE","terminate"),Gi(u,g),p=new Cn(u,u.j,p),p.L=2,p.v=So(un(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=p.v,g=!0),g||(p.g=Jh(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Io(p)}Qh(u)}function Do(u){u.g&&(il(u),u.g.cancel(),u.g=null)}function zh(u){Do(u),u.u&&(a.clearTimeout(u.u),u.u=null),Mo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Oo(u){if(!Th(u.h)&&!u.s){u.s=!0;var p=u.Ga;ot||an(),Yt||(ot(),Yt=!0),Ht.add(p,u),u.B=0}}function qb(u,p){return Ih(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Fi(f(u.Ga,u,p),Kh(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new Cn(this,this.j,u);let L=this.o;if(this.S&&(L?(L=v(L),A(L,this.S)):L=this.S),this.m!==null||this.O||(M.H=L,L=null),this.P)t:{for(var p=0,g=0;g<this.i.length;g++){e:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break e}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=g;break t}if(p===4096||g===this.i.length-1){p=g+1;break t}}p=1e3}else p=1e3;p=qh(this,M,p),g=un(this.I),xt(g,"RID",u),xt(g,"CVER",22),this.D&&xt(g,"X-HTTP-Session-Id",this.D),Gi(this,g),L&&(this.O?p="headers="+encodeURIComponent(String(Lh(L)))+"&"+p:this.m&&el(g,this.m,L)),tl(this.h,M),this.Ua&&xt(g,"TYPE","init"),this.P?(xt(g,"$req",p),xt(g,"SID","null"),M.T=!0,Qc(M,g,null)):Qc(M,g,p),this.G=2}}else this.G==3&&(u?Hh(this,u):this.i.length==0||Th(this.h)||Hh(this))};function Hh(u,p){var g;p?g=p.l:g=u.U++;const E=un(u.I);xt(E,"SID",u.K),xt(E,"RID",g),xt(E,"AID",u.T),Gi(u,E),u.m&&u.o&&el(E,u.m,u.o),g=new Cn(u,u.j,g,u.B+1),u.m===null&&(g.H=u.o),p&&(u.i=p.D.concat(u.i)),p=qh(u,g,1e3),g.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),tl(u.h,g),Qc(g,E,p)}function Gi(u,p){u.H&&O(u.H,function(g,E){xt(p,E,g)}),u.l&&Sh({},function(g,E){xt(p,E,g)})}function qh(u,p,g){g=Math.min(u.i.length,g);var E=u.l?f(u.l.Na,u.l,u):null;t:{var M=u.i;let L=-1;for(;;){const U=["count="+g];L==-1?0<g?(L=M[0].g,U.push("ofs="+L)):L=0:U.push("ofs="+L);let yt=!0;for(let te=0;te<g;te++){let ct=M[te].g;const oe=M[te].map;if(ct-=L,0>ct)L=Math.max(0,M[te].g-100),yt=!1;else try{Ub(oe,U,"req"+ct+"_")}catch{E&&E(oe)}}if(yt){E=U.join("&");break t}}}return u=u.i.splice(0,g),p.D=u,E}function Wh(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;ot||an(),Yt||(ot(),Yt=!0),Ht.add(p,u),u.v=0}}function sl(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Fi(f(u.Fa,u),Kh(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Gh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Fi(f(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ve(10),Do(this),Gh(this))};function il(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Gh(u){u.g=new Cn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=un(u.qa);xt(p,"RID","rpc"),xt(p,"SID",u.K),xt(p,"AID",u.T),xt(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&xt(p,"TO",u.ja),xt(p,"TYPE","xmlhttp"),Gi(u,p),u.m&&u.o&&el(p,u.m,u.o),u.L&&(u.g.I=u.L);var g=u.g;u=u.ia,g.L=1,g.v=So(un(p)),g.m=null,g.P=!0,bh(g,u)}n.Za=function(){this.C!=null&&(this.C=null,Do(this),sl(this),ve(19))};function Mo(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Yh(u,p){var g=null;if(u.g==p){Mo(u),il(u),u.g=null;var E=2}else if(Zc(u.h,p))g=p.D,Ah(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){g=p.m?p.m.length:0,p=Date.now()-p.F;var M=u.B;E=xo(),ye(E,new gh(E,g)),Oo(u)}else Wh(u);else if(M=p.s,M==3||M==0&&0<p.X||!(E==1&&qb(u,p)||E==2&&sl(u)))switch(g&&0<g.length&&(p=u.h,p.i=p.i.concat(g)),M){case 1:hs(u,5);break;case 4:hs(u,10);break;case 3:hs(u,6);break;default:hs(u,2)}}}function Kh(u,p){let g=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(g*=2),g*p}function hs(u,p){if(u.j.info("Error code "+p),p==2){var g=f(u.fb,u),E=u.Xa;const M=!E;E=new ds(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ao(E,"https"),So(E),M?Fb(E.toString(),g):$b(E.toString(),g)}else ve(2);u.G=0,u.l&&u.l.sa(p),Qh(u),zh(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function Qh(u){if(u.G=0,u.ka=[],u.l){const p=kh(u.h);(p.length!=0||u.i.length!=0)&&(y(u.ka,p),y(u.ka,u.i),u.h.i.length=0,b(u.i),u.i.length=0),u.l.ra()}}function Xh(u,p,g){var E=g instanceof ds?un(g):new ds(g);if(E.g!="")p&&(E.g=p+"."+E.g),ko(E,E.s);else{var M=a.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;var L=new ds(null);E&&Ao(L,E),p&&(L.g=p),M&&ko(L,M),g&&(L.l=g),E=L}return g=u.D,p=u.ya,g&&p&&xt(E,g,p),xt(E,"VER",u.la),Gi(u,E),E}function Jh(u,p,g){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Mt(new Ro({eb:g})):new Mt(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zh(){}n=Zh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function No(){}No.prototype.g=function(u,p){return new ke(u,p)};function ke(u,p){re.call(this),this.g=new jh(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!I(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!I(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Qs(this)}_(ke,re),ke.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ke.prototype.close=function(){nl(this.g)},ke.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var g={};g.__data__=u,u=g}else this.u&&(g={},g.__data__=Hc(u),u=g);p.i.push(new Sb(p.Ya++,u)),p.G==3&&Oo(p)},ke.prototype.N=function(){this.g.l=null,delete this.j,nl(this.g),delete this.g,ke.aa.N.call(this)};function tf(u){Wc.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){t:{for(const g in p){u=g;break t}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}_(tf,Wc);function ef(){Gc.call(this),this.status=1}_(ef,Gc);function Qs(u){this.g=u}_(Qs,Zh),Qs.prototype.ua=function(){ye(this.g,"a")},Qs.prototype.ta=function(u){ye(this.g,new tf(u))},Qs.prototype.sa=function(u){ye(this.g,new ef)},Qs.prototype.ra=function(){ye(this.g,"b")},No.prototype.createWebChannel=No.prototype.g,ke.prototype.send=ke.prototype.o,ke.prototype.open=ke.prototype.m,ke.prototype.close=ke.prototype.close,Ig=function(){return new No},Tg=function(){return xo()},Eg=ls,Wl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Eo.NO_ERROR=0,Eo.TIMEOUT=8,Eo.HTTP_ERROR=6,oa=Eo,_h.COMPLETE="complete",xg=_h,hh.EventType=Li,Li.OPEN="a",Li.CLOSE="b",Li.ERROR="c",Li.MESSAGE="d",re.prototype.listen=re.prototype.K,dr=hh,Mt.prototype.listenOnce=Mt.prototype.L,Mt.prototype.getLastError=Mt.prototype.Ka,Mt.prototype.getLastErrorCode=Mt.prototype.Ba,Mt.prototype.getStatus=Mt.prototype.Z,Mt.prototype.getResponseJson=Mt.prototype.Oa,Mt.prototype.getResponseText=Mt.prototype.oa,Mt.prototype.send=Mt.prototype.ea,Mt.prototype.setWithCredentials=Mt.prototype.Ha,wg=Mt}).apply(typeof Vo<"u"?Vo:typeof self<"u"?self:typeof window<"u"?window:{});const pf="@firebase/firestore";/**
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
 */class de{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}de.UNAUTHENTICATED=new de(null),de.GOOGLE_CREDENTIALS=new de("google-credentials-uid"),de.FIRST_PARTY=new de("first-party-uid"),de.MOCK_USER=new de("mock-user");/**
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
 */let Si="10.14.0";/**
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
 */const Ds=new Lu("@firebase/firestore");function Yi(){return Ds.logLevel}function z(n,...t){if(Ds.logLevel<=rt.DEBUG){const e=t.map($u);Ds.debug(`Firestore (${Si}): ${n}`,...e)}}function kn(n,...t){if(Ds.logLevel<=rt.ERROR){const e=t.map($u);Ds.error(`Firestore (${Si}): ${n}`,...e)}}function gi(n,...t){if(Ds.logLevel<=rt.WARN){const e=t.map($u);Ds.warn(`Firestore (${Si}): ${n}`,...e)}}function $u(n){if(typeof n=="string")return n;try{/**
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
 */function G(n="Unexpected state"){const t=`FIRESTORE (${Si}) INTERNAL ASSERTION FAILED: `+n;throw kn(t),new Error(t)}function _t(n,t){n||G()}function Q(n,t){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends on{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Ag{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class kw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(de.UNAUTHENTICATED))}shutdown(){}}class Sw{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Rw{constructor(t){this.t=t,this.currentUser=de.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){_t(this.o===void 0);let s=this.i;const i=c=>this.i!==s?(s=this.i,e(c)):Promise.resolve();let r=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Tn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Tn)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(_t(typeof s.accessToken=="string"),new Ag(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return _t(t===null||typeof t=="string"),new de(t)}}class Pw{constructor(t,e,s){this.l=t,this.h=e,this.P=s,this.type="FirstParty",this.user=de.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Cw{constructor(t,e,s){this.l=t,this.h=e,this.P=s}getToken(){return Promise.resolve(new Pw(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(de.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dw{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ow{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){_t(this.o===void 0);const s=r=>{r.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(_t(typeof e.token=="string"),this.R=e.token,new Dw(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Mw(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
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
 */class kg{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Mw(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<e&&(s+=t.charAt(i[r]%t.length))}return s}}function lt(n,t){return n<t?-1:n>t?1:0}function _i(n,t,e){return n.length===t.length&&n.every((s,i)=>e(s,t[i]))}/**
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
 */class Pt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Pt.fromMillis(Date.now())}static fromDate(t){return Pt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*e));return new Pt(e,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?lt(this.nanoseconds,t.nanoseconds):lt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Y(t)}static min(){return new Y(new Pt(0,0))}static max(){return new Y(new Pt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Mr{constructor(t,e,s){e===void 0?e=0:e>t.length&&G(),s===void 0?s=t.length-e:s>t.length-e&&G(),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return Mr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Mr?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let i=0;i<s;i++){const r=t.get(i),o=e.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Tt extends Mr{construct(t,e,s){return new Tt(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new j(V.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(i=>i.length>0))}return new Tt(e)}static emptyPath(){return new Tt([])}}const Nw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ne extends Mr{construct(t,e,s){return new ne(t,e,s)}static isValidIdentifier(t){return Nw.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ne.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ne(["__name__"])}static fromServerFormat(t){const e=[];let s="",i=0;const r=()=>{if(s.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new j(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new j(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ne(e)}static emptyPath(){return new ne([])}}/**
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
 */class H{constructor(t){this.path=t}static fromPath(t){return new H(Tt.fromString(t))}static fromName(t){return new H(Tt.fromString(t).popFirst(5))}static empty(){return new H(Tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new H(new Tt(t.slice()))}}function Lw(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(s===1e9?new Pt(e+1,0):new Pt(e,s));return new ts(i,H.empty(),t)}function Vw(n){return new ts(n.readTime,n.key,-1)}class ts{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new ts(Y.min(),H.empty(),-1)}static max(){return new ts(Y.max(),H.empty(),-1)}}function Fw(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=H.comparator(n.documentKey,t.documentKey),e!==0?e:lt(n.largestBatchId,t.largestBatchId))}/**
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
 */const $w="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function to(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==$w)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new $((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(e,r).next(s,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof $?e:$.resolve(e)}catch(e){return $.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):$.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):$.reject(e)}static resolve(t){return new $((e,s)=>{e(t)})}static reject(t){return new $((e,s)=>{s(t)})}static waitFor(t){return new $((e,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&e()},c=>s(c))}),o=!0,r===i&&e()})}static or(t){let e=$.resolve(!1);for(const s of t)e=e.next(i=>i?$.resolve(i):s());return e}static forEach(t,e){const s=[];return t.forEach((i,r)=>{s.push(e.call(this,i,r))}),this.waitFor(s)}static mapArray(t,e){return new $((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;e(t[l]).next(d=>{o[l]=d,++a,a===r&&s(o)},d=>i(d))}})}static doWhile(t,e){return new $((s,i)=>{const r=()=>{t()===!0?e().next(()=>{r()},i):s()};r()})}}function Uw(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function eo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Bu{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ie(s),this.se=s=>e.writeSequenceNumber(s))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Bu.oe=-1;function oc(n){return n==null}function Sa(n){return n===0&&1/n==-1/0}function jw(n){return typeof n=="number"&&Number.isInteger(n)&&!Sa(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function mf(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Bs(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Sg(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Ct{constructor(t,e){this.comparator=t,this.root=e||ee.EMPTY}insert(t,e){return new Ct(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ee.BLACK,null,null))}remove(t){return new Ct(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ee.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return e+s.left.size;i<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Fo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Fo(this.root,t,this.comparator,!1)}getReverseIterator(){return new Fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Fo(this.root,t,this.comparator,!0)}}class Fo{constructor(t,e,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?s(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ee{constructor(t,e,s,i,r){this.key=t,this.value=e,this.color=s??ee.RED,this.left=i??ee.EMPTY,this.right=r??ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,i,r){return new ee(t??this.key,e??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,s),null):r===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ee.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ee.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const t=this.left.check();if(t!==this.right.check())throw G();return t+(this.isRed()?0:1)}}ee.EMPTY=null,ee.RED=!0,ee.BLACK=!1;ee.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,s,i,r){return this}insert(t,e,s){return new ee(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class se{constructor(t){this.comparator=t,this.data=new Ct(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new gf(this.data.getIterator())}getIteratorFrom(t){return new gf(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof se)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new se(this.comparator);return e.data=t,e}}class gf{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Re{constructor(t){this.fields=t,t.sort(ne.comparator)}static empty(){return new Re([])}unionWith(t){let e=new se(ne.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new Re(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _i(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
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
 */class Rg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ie{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Rg("Invalid base64 string: "+r):r}}(t);return new ie(e)}static fromUint8Array(t){const e=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(t);return new ie(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return lt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ie.EMPTY_BYTE_STRING=new ie("");const zw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function es(n){if(_t(!!n),typeof n=="string"){let t=0;const e=zw.exec(n);if(_t(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Bt(n.seconds),nanos:Bt(n.nanos)}}function Bt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Os(n){return typeof n=="string"?ie.fromBase64String(n):ie.fromUint8Array(n)}/**
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
 */function Uu(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ju(n){const t=n.mapValue.fields.__previous_value__;return Uu(t)?ju(t):t}function Nr(n){const t=es(n.mapValue.fields.__local_write_time__.timestampValue);return new Pt(t.seconds,t.nanos)}/**
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
 */class Hw{constructor(t,e,s,i,r,o,a,c,l){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Lr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Lr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Lr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const $o={mapValue:{}};function Ms(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Uu(n)?4:Ww(n)?9007199254740991:qw(n)?10:11:G()}function nn(n,t){if(n===t)return!0;const e=Ms(n);if(e!==Ms(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Nr(n).isEqual(Nr(t));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=es(i.timestampValue),a=es(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,r){return Os(i.bytesValue).isEqual(Os(r.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,r){return Bt(i.geoPointValue.latitude)===Bt(r.geoPointValue.latitude)&&Bt(i.geoPointValue.longitude)===Bt(r.geoPointValue.longitude)}(n,t);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Bt(i.integerValue)===Bt(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Bt(i.doubleValue),a=Bt(r.doubleValue);return o===a?Sa(o)===Sa(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return _i(n.arrayValue.values||[],t.arrayValue.values||[],nn);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(mf(o)!==mf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!nn(o[c],a[c])))return!1;return!0}(n,t);default:return G()}}function Vr(n,t){return(n.values||[]).find(e=>nn(e,t))!==void 0}function yi(n,t){if(n===t)return 0;const e=Ms(n),s=Ms(t);if(e!==s)return lt(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return lt(n.booleanValue,t.booleanValue);case 2:return function(r,o){const a=Bt(r.integerValue||r.doubleValue),c=Bt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return _f(n.timestampValue,t.timestampValue);case 4:return _f(Nr(n),Nr(t));case 5:return lt(n.stringValue,t.stringValue);case 6:return function(r,o){const a=Os(r),c=Os(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const d=lt(a[l],c[l]);if(d!==0)return d}return lt(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(r,o){const a=lt(Bt(r.latitude),Bt(o.latitude));return a!==0?a:lt(Bt(r.longitude),Bt(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return yf(n.arrayValue,t.arrayValue);case 10:return function(r,o){var a,c,l,d;const h=r.fields||{},f=o.fields||{},m=(a=h.value)===null||a===void 0?void 0:a.arrayValue,_=(c=f.value)===null||c===void 0?void 0:c.arrayValue,b=lt(((l=m==null?void 0:m.values)===null||l===void 0?void 0:l.length)||0,((d=_==null?void 0:_.values)===null||d===void 0?void 0:d.length)||0);return b!==0?b:yf(m,_)}(n.mapValue,t.mapValue);case 11:return function(r,o){if(r===$o.mapValue&&o===$o.mapValue)return 0;if(r===$o.mapValue)return 1;if(o===$o.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),l=o.fields||{},d=Object.keys(l);c.sort(),d.sort();for(let h=0;h<c.length&&h<d.length;++h){const f=lt(c[h],d[h]);if(f!==0)return f;const m=yi(a[c[h]],l[d[h]]);if(m!==0)return m}return lt(c.length,d.length)}(n.mapValue,t.mapValue);default:throw G()}}function _f(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return lt(n,t);const e=es(n),s=es(t),i=lt(e.seconds,s.seconds);return i!==0?i:lt(e.nanos,s.nanos)}function yf(n,t){const e=n.values||[],s=t.values||[];for(let i=0;i<e.length&&i<s.length;++i){const r=yi(e[i],s[i]);if(r)return r}return lt(e.length,s.length)}function vi(n){return Gl(n)}function Gl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=es(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Os(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return H.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",i=!0;for(const r of e.values||[])i?i=!1:s+=",",s+=Gl(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Gl(e.fields[o])}`;return i+"}"}(n.mapValue):G()}function vf(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Yl(n){return!!n&&"integerValue"in n}function zu(n){return!!n&&"arrayValue"in n}function bf(n){return!!n&&"nullValue"in n}function wf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function aa(n){return!!n&&"mapValue"in n}function qw(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function wr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Bs(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=wr(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=wr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Ww(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ie{constructor(t){this.value=t}static empty(){return new Ie({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!aa(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=wr(e)}setAll(t){let e=ne.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,s,i),s={},i=[],e=a.popLast()}o?s[a.lastSegment()]=wr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,s,i)}delete(t){const e=this.field(t.popLast());aa(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return nn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=e.mapValue.fields[t.get(s)];aa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,s){Bs(e,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new Ie(wr(this.value))}}function Pg(n){const t=[];return Bs(n.fields,(e,s)=>{const i=new ne([e]);if(aa(s)){const r=Pg(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new Re(t)}/**
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
 */class fe{constructor(t,e,s,i,r,o,a){this.key=t,this.documentType=e,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new fe(t,0,Y.min(),Y.min(),Y.min(),Ie.empty(),0)}static newFoundDocument(t,e,s,i){return new fe(t,1,e,Y.min(),s,i,0)}static newNoDocument(t,e){return new fe(t,2,e,Y.min(),Y.min(),Ie.empty(),0)}static newUnknownDocument(t,e){return new fe(t,3,e,Y.min(),Y.min(),Ie.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ie.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof fe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ra{constructor(t,e){this.position=t,this.inclusive=e}}function xf(n,t,e){let s=0;for(let i=0;i<n.position.length;i++){const r=t[i],o=n.position[i];if(r.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),e.key):s=yi(o,e.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ef(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!nn(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Fr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Gw(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Cg{}class Gt extends Cg{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new Kw(t,e,s):e==="array-contains"?new Jw(t,s):e==="in"?new Zw(t,s):e==="not-in"?new tx(t,s):e==="array-contains-any"?new ex(t,s):new Gt(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new Qw(t,s):new Xw(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(yi(e,this.value)):e!==null&&Ms(this.value)===Ms(e)&&this.matchesComparison(yi(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Be extends Cg{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Be(t,e)}matches(t){return Dg(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Dg(n){return n.op==="and"}function Og(n){return Yw(n)&&Dg(n)}function Yw(n){for(const t of n.filters)if(t instanceof Be)return!1;return!0}function Kl(n){if(n instanceof Gt)return n.field.canonicalString()+n.op.toString()+vi(n.value);if(Og(n))return n.filters.map(t=>Kl(t)).join(",");{const t=n.filters.map(e=>Kl(e)).join(",");return`${n.op}(${t})`}}function Mg(n,t){return n instanceof Gt?function(s,i){return i instanceof Gt&&s.op===i.op&&s.field.isEqual(i.field)&&nn(s.value,i.value)}(n,t):n instanceof Be?function(s,i){return i instanceof Be&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&Mg(o,i.filters[a]),!0):!1}(n,t):void G()}function Ng(n){return n instanceof Gt?function(e){return`${e.field.canonicalString()} ${e.op} ${vi(e.value)}`}(n):n instanceof Be?function(e){return e.op.toString()+" {"+e.getFilters().map(Ng).join(" ,")+"}"}(n):"Filter"}class Kw extends Gt{constructor(t,e,s){super(t,e,s),this.key=H.fromName(s.referenceValue)}matches(t){const e=H.comparator(t.key,this.key);return this.matchesComparison(e)}}class Qw extends Gt{constructor(t,e){super(t,"in",e),this.keys=Lg("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Xw extends Gt{constructor(t,e){super(t,"not-in",e),this.keys=Lg("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Lg(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>H.fromName(s.referenceValue))}class Jw extends Gt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return zu(e)&&Vr(e.arrayValue,this.value)}}class Zw extends Gt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Vr(this.value.arrayValue,e)}}class tx extends Gt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Vr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Vr(this.value.arrayValue,e)}}class ex extends Gt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!zu(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>Vr(this.value.arrayValue,s))}}/**
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
 */class nx{constructor(t,e=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ue=null}}function Tf(n,t=null,e=[],s=[],i=null,r=null,o=null){return new nx(n,t,e,s,i,r,o)}function Hu(n){const t=Q(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>Kl(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),oc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>vi(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>vi(s)).join(",")),t.ue=e}return t.ue}function qu(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Gw(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Mg(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ef(n.startAt,t.startAt)&&Ef(n.endAt,t.endAt)}function Ql(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ri{constructor(t,e=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sx(n,t,e,s,i,r,o,a){return new Ri(n,t,e,s,i,r,o,a)}function Wu(n){return new Ri(n)}function If(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Vg(n){return n.collectionGroup!==null}function xr(n){const t=Q(n);if(t.ce===null){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new se(ne.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new Fr(r,s))}),e.has(ne.keyField().canonicalString())||t.ce.push(new Fr(ne.keyField(),s))}return t.ce}function Xe(n){const t=Q(n);return t.le||(t.le=ix(t,xr(n))),t.le}function ix(n,t){if(n.limitType==="F")return Tf(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Fr(i.field,r)});const e=n.endAt?new Ra(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Ra(n.startAt.position,n.startAt.inclusive):null;return Tf(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function Xl(n,t){const e=n.filters.concat([t]);return new Ri(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Pa(n,t,e){return new Ri(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ac(n,t){return qu(Xe(n),Xe(t))&&n.limitType===t.limitType}function Fg(n){return`${Hu(Xe(n))}|lt:${n.limitType}`}function si(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(i=>Ng(i)).join(", ")}]`),oc(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(i=>vi(i)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(i=>vi(i)).join(",")),`Target(${s})`}(Xe(n))}; limitType=${n.limitType})`}function cc(n,t){return t.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):H.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,t)&&function(s,i){for(const r of xr(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,t)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(n,t)&&function(s,i){return!(s.startAt&&!function(o,a,c){const l=xf(o,a,c);return o.inclusive?l<=0:l<0}(s.startAt,xr(s),i)||s.endAt&&!function(o,a,c){const l=xf(o,a,c);return o.inclusive?l>=0:l>0}(s.endAt,xr(s),i))}(n,t)}function rx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function $g(n){return(t,e)=>{let s=!1;for(const i of xr(n)){const r=ox(i,t,e);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function ox(n,t,e){const s=n.field.isKeyField()?H.comparator(t.key,e.key):function(r,o,a){const c=o.data.field(r),l=a.data.field(r);return c!==null&&l!==null?yi(c,l):G()}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
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
 */class Pi{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[e]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Bs(this.inner,(e,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return Sg(this.inner)}size(){return this.innerSize}}/**
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
 */const ax=new Ct(H.comparator);function Sn(){return ax}const Bg=new Ct(H.comparator);function hr(...n){let t=Bg;for(const e of n)t=t.insert(e.key,e);return t}function Ug(n){let t=Bg;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function Es(){return Er()}function jg(){return Er()}function Er(){return new Pi(n=>n.toString(),(n,t)=>n.isEqual(t))}const cx=new Ct(H.comparator),lx=new se(H.comparator);function st(...n){let t=lx;for(const e of n)t=t.add(e);return t}const ux=new se(lt);function dx(){return ux}/**
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
 */function Gu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sa(t)?"-0":t}}function zg(n){return{integerValue:""+n}}function hx(n,t){return jw(t)?zg(t):Gu(n,t)}/**
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
 */class lc{constructor(){this._=void 0}}function fx(n,t,e){return n instanceof Ca?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Uu(r)&&(r=ju(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(e,t):n instanceof $r?qg(n,t):n instanceof Br?Wg(n,t):function(i,r){const o=Hg(i,r),a=Af(o)+Af(i.Pe);return Yl(o)&&Yl(i.Pe)?zg(a):Gu(i.serializer,a)}(n,t)}function px(n,t,e){return n instanceof $r?qg(n,t):n instanceof Br?Wg(n,t):e}function Hg(n,t){return n instanceof Da?function(s){return Yl(s)||function(r){return!!r&&"doubleValue"in r}(s)}(t)?t:{integerValue:0}:null}class Ca extends lc{}class $r extends lc{constructor(t){super(),this.elements=t}}function qg(n,t){const e=Gg(t);for(const s of n.elements)e.some(i=>nn(i,s))||e.push(s);return{arrayValue:{values:e}}}class Br extends lc{constructor(t){super(),this.elements=t}}function Wg(n,t){let e=Gg(t);for(const s of n.elements)e=e.filter(i=>!nn(i,s));return{arrayValue:{values:e}}}class Da extends lc{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Af(n){return Bt(n.integerValue||n.doubleValue)}function Gg(n){return zu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function mx(n,t){return n.field.isEqual(t.field)&&function(s,i){return s instanceof $r&&i instanceof $r||s instanceof Br&&i instanceof Br?_i(s.elements,i.elements,nn):s instanceof Da&&i instanceof Da?nn(s.Pe,i.Pe):s instanceof Ca&&i instanceof Ca}(n.transform,t.transform)}class gx{constructor(t,e){this.version=t,this.transformResults=e}}class Oe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Oe}static exists(t){return new Oe(void 0,t)}static updateTime(t){return new Oe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ca(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class uc{}function Yg(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Yu(n.key,Oe.none()):new no(n.key,n.data,Oe.none());{const e=n.data,s=Ie.empty();let i=new se(ne.comparator);for(let r of t.fields)if(!i.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new rs(n.key,s,new Re(i.toArray()),Oe.none())}}function _x(n,t,e){n instanceof no?function(i,r,o){const a=i.value.clone(),c=Sf(i.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof rs?function(i,r,o){if(!ca(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Sf(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(Kg(i)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Tr(n,t,e,s){return n instanceof no?function(r,o,a,c){if(!ca(r.precondition,o))return a;const l=r.value.clone(),d=Rf(r.fieldTransforms,c,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,t,e,s):n instanceof rs?function(r,o,a,c){if(!ca(r.precondition,o))return a;const l=Rf(r.fieldTransforms,c,o),d=o.data;return d.setAll(Kg(r)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(n,t,e,s):function(r,o,a){return ca(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function yx(n,t){let e=null;for(const s of n.fieldTransforms){const i=t.data.field(s.field),r=Hg(s.transform,i||null);r!=null&&(e===null&&(e=Ie.empty()),e.set(s.field,r))}return e||null}function kf(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&_i(s,i,(r,o)=>mx(r,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class no extends uc{constructor(t,e,s,i=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class rs extends uc{constructor(t,e,s,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Kg(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function Sf(n,t,e){const s=new Map;_t(n.length===e.length);for(let i=0;i<e.length;i++){const r=n[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,px(o,a,e[i]))}return s}function Rf(n,t,e){const s=new Map;for(const i of n){const r=i.transform,o=e.data.field(i.field);s.set(i.field,fx(r,o,t))}return s}class Yu extends uc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vx extends uc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bx{constructor(t,e,s,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&_x(r,t,s[i])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=Tr(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=Tr(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=jg();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(i.key)?null:a;const c=Yg(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),st())}isEqual(t){return this.batchId===t.batchId&&_i(this.mutations,t.mutations,(e,s)=>kf(e,s))&&_i(this.baseMutations,t.baseMutations,(e,s)=>kf(e,s))}}class Ku{constructor(t,e,s,i){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=i}static from(t,e,s){_t(t.mutations.length===s.length);let i=function(){return cx}();const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Ku(t,e,s,i)}}/**
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
 */class wx{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class xx{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var qt,at;function Ex(n){switch(n){default:return G();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Qg(n){if(n===void 0)return kn("GRPC error has no .code"),V.UNKNOWN;switch(n){case qt.OK:return V.OK;case qt.CANCELLED:return V.CANCELLED;case qt.UNKNOWN:return V.UNKNOWN;case qt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case qt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case qt.INTERNAL:return V.INTERNAL;case qt.UNAVAILABLE:return V.UNAVAILABLE;case qt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case qt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case qt.NOT_FOUND:return V.NOT_FOUND;case qt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case qt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case qt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case qt.ABORTED:return V.ABORTED;case qt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case qt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case qt.DATA_LOSS:return V.DATA_LOSS;default:return G()}}(at=qt||(qt={}))[at.OK=0]="OK",at[at.CANCELLED=1]="CANCELLED",at[at.UNKNOWN=2]="UNKNOWN",at[at.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",at[at.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",at[at.NOT_FOUND=5]="NOT_FOUND",at[at.ALREADY_EXISTS=6]="ALREADY_EXISTS",at[at.PERMISSION_DENIED=7]="PERMISSION_DENIED",at[at.UNAUTHENTICATED=16]="UNAUTHENTICATED",at[at.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",at[at.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",at[at.ABORTED=10]="ABORTED",at[at.OUT_OF_RANGE=11]="OUT_OF_RANGE",at[at.UNIMPLEMENTED=12]="UNIMPLEMENTED",at[at.INTERNAL=13]="INTERNAL",at[at.UNAVAILABLE=14]="UNAVAILABLE",at[at.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Tx(){return new TextEncoder}/**
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
 */const Ix=new Is([4294967295,4294967295],0);function Pf(n){const t=Tx().encode(n),e=new bg;return e.update(t),new Uint8Array(e.digest())}function Cf(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Is([e,s],0),new Is([i,r],0)]}class Qu{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new fr(`Invalid padding: ${e}`);if(s<0)throw new fr(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new fr(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new fr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Is.fromNumber(this.Ie)}Ee(t,e,s){let i=t.add(e.multiply(Is.fromNumber(s)));return i.compare(Ix)===1&&(i=new Is([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Pf(t),[s,i]=Cf(e);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);if(!this.de(o))return!1}return!0}static create(t,e,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new Qu(r,i,e);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=Pf(t),[s,i]=Cf(e);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class fr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class dc{constructor(t,e,s,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const i=new Map;return i.set(t,so.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new dc(Y.min(),i,new Ct(lt),Sn(),st())}}class so{constructor(t,e,s,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new so(s,e,st(),st(),st())}}/**
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
 */class la{constructor(t,e,s,i){this.Re=t,this.removedTargetIds=e,this.key=s,this.Ve=i}}class Xg{constructor(t,e){this.targetId=t,this.me=e}}class Jg{constructor(t,e,s=ie.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=i}}class Df{constructor(){this.fe=0,this.ge=Mf(),this.pe=ie.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=st(),e=st(),s=st();return this.ge.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:s=s.add(i);break;default:G()}}),new so(this.pe,this.ye,t,e,s)}Ce(){this.we=!1,this.ge=Mf()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,_t(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ax{constructor(t){this.Le=t,this.Be=new Map,this.ke=Sn(),this.qe=Of(),this.Qe=new Ct(lt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const s=this.Ge(e);switch(t.state){case 0:this.ze(e)&&s.De(t.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(t.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(s.Ne(),s.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),s.De(t.resumeToken));break;default:G()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((s,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,s=t.me.count,i=this.Je(e);if(i){const r=i.target;if(Ql(r))if(s===0){const o=new H(r.path);this.Ue(e,o,fe.newNoDocument(o,Y.min()))}else _t(s===1);else{const o=this.Ye(e);if(o!==s){const a=this.Ze(t),c=a?this.Xe(a,t,o):1;if(c!==0){this.je(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,l)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=e;let o,a;try{o=Os(s).toUint8Array()}catch(c){if(c instanceof Rg)return gi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Qu(o,i,r)}catch(c){return gi(c instanceof fr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(t,e,s){return e.me.count===s-this.nt(t,e.targetId)?0:2}nt(t,e){const s=this.Le.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,r,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((r,o)=>{const a=this.Je(o);if(a){if(r.current&&Ql(a.target)){const c=new H(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,fe.newNoDocument(c,t))}r.be&&(e.set(o,r.ve()),r.Ce())}});let s=st();this.qe.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(t));const i=new dc(t,e,this.Qe,this.ke,s);return this.ke=Sn(),this.qe=Of(),this.Qe=new Ct(lt),i}$e(t,e){if(!this.ze(t))return;const s=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,s),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,s){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),s&&(this.ke=this.ke.insert(e,s))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Df,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new se(lt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||z("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Df),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Of(){return new Ct(H.comparator)}function Mf(){return new Ct(H.comparator)}const kx={asc:"ASCENDING",desc:"DESCENDING"},Sx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Rx={and:"AND",or:"OR"};class Px{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Jl(n,t){return n.useProto3Json||oc(t)?t:{value:t}}function Oa(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Zg(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Cx(n,t){return Oa(n,t.toTimestamp())}function Je(n){return _t(!!n),Y.fromTimestamp(function(e){const s=es(e);return new Pt(s.seconds,s.nanos)}(n))}function Xu(n,t){return Zl(n,t).canonicalString()}function Zl(n,t){const e=function(i){return new Tt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function t_(n){const t=Tt.fromString(n);return _t(r_(t)),t}function tu(n,t){return Xu(n.databaseId,t.path)}function dl(n,t){const e=t_(t);if(e.get(1)!==n.databaseId.projectId)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new H(n_(e))}function e_(n,t){return Xu(n.databaseId,t)}function Dx(n){const t=t_(n);return t.length===4?Tt.emptyPath():n_(t)}function eu(n){return new Tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function n_(n){return _t(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Nf(n,t,e){return{name:tu(n,t),fields:e.value.mapValue.fields}}function Ox(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(l,d){return l.useProto3Json?(_t(d===void 0||typeof d=="string"),ie.fromBase64String(d||"")):(_t(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ie.fromUint8Array(d||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const d=l.code===void 0?V.UNKNOWN:Qg(l.code);return new j(d,l.message||"")}(o);e=new Jg(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=dl(n,s.document.name),r=Je(s.document.updateTime),o=s.document.createTime?Je(s.document.createTime):Y.min(),a=new Ie({mapValue:{fields:s.document.fields}}),c=fe.newFoundDocument(i,r,o,a),l=s.targetIds||[],d=s.removedTargetIds||[];e=new la(l,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=dl(n,s.document),r=s.readTime?Je(s.readTime):Y.min(),o=fe.newNoDocument(i,r),a=s.removedTargetIds||[];e=new la([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=dl(n,s.document),r=s.removedTargetIds||[];e=new la([],r,i,null)}else{if(!("filter"in t))return G();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new xx(i,r),a=s.targetId;e=new Xg(a,o)}}return e}function Mx(n,t){let e;if(t instanceof no)e={update:Nf(n,t.key,t.value)};else if(t instanceof Yu)e={delete:tu(n,t.key)};else if(t instanceof rs)e={update:Nf(n,t.key,t.data),updateMask:zx(t.fieldMask)};else{if(!(t instanceof vx))return G();e={verify:tu(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof $r)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Br)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Da)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw G()}(0,s))),t.precondition.isNone||(e.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:Cx(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:G()}(n,t.precondition)),e}function Nx(n,t){return n&&n.length>0?(_t(t!==void 0),n.map(e=>function(i,r){let o=i.updateTime?Je(i.updateTime):Je(r);return o.isEqual(Y.min())&&(o=Je(r)),new gx(o,i.transformResults||[])}(e,t))):[]}function Lx(n,t){return{documents:[e_(n,t.path)]}}function Vx(n,t){const e={structuredQuery:{}},s=t.path;let i;t.collectionGroup!==null?(i=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=e_(n,i);const r=function(l){if(l.length!==0)return i_(Be.create(l,"and"))}(t.filters);r&&(e.structuredQuery.where=r);const o=function(l){if(l.length!==0)return l.map(d=>function(f){return{field:ii(f.field),direction:Bx(f.dir)}}(d))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=Jl(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),{_t:e,parent:i}}function Fx(n){let t=Dx(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let i=null;if(s>0){_t(s===1);const d=e.from[0];d.allDescendants?i=d.collectionId:t=t.child(d.collectionId)}let r=[];e.where&&(r=function(h){const f=s_(h);return f instanceof Be&&Og(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(f=>function(_){return new Fr(ri(_.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,oc(f)?null:f}(e.limit));let c=null;e.startAt&&(c=function(h){const f=!!h.before,m=h.values||[];return new Ra(m,f)}(e.startAt));let l=null;return e.endAt&&(l=function(h){const f=!h.before,m=h.values||[];return new Ra(m,f)}(e.endAt)),sx(t,i,o,r,a,"F",c,l)}function $x(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function s_(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=ri(e.unaryFilter.field);return Gt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=ri(e.unaryFilter.field);return Gt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ri(e.unaryFilter.field);return Gt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ri(e.unaryFilter.field);return Gt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(e){return Gt.create(ri(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Be.create(e.compositeFilter.filters.map(s=>s_(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(n):G()}function Bx(n){return kx[n]}function Ux(n){return Sx[n]}function jx(n){return Rx[n]}function ii(n){return{fieldPath:n.canonicalString()}}function ri(n){return ne.fromServerFormat(n.fieldPath)}function i_(n){return n instanceof Gt?function(e){if(e.op==="=="){if(wf(e.value))return{unaryFilter:{field:ii(e.field),op:"IS_NAN"}};if(bf(e.value))return{unaryFilter:{field:ii(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(wf(e.value))return{unaryFilter:{field:ii(e.field),op:"IS_NOT_NAN"}};if(bf(e.value))return{unaryFilter:{field:ii(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ii(e.field),op:Ux(e.op),value:e.value}}}(n):n instanceof Be?function(e){const s=e.getFilters().map(i=>i_(i));return s.length===1?s[0]:{compositeFilter:{op:jx(e.op),filters:s}}}(n):G()}function zx(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function r_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class jn{constructor(t,e,s,i,r=Y.min(),o=Y.min(),a=ie.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new jn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Hx{constructor(t){this.ct=t}}function qx(n){const t=Fx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Pa(t,t.limit,"L"):t}/**
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
 */class Wx{constructor(){this.un=new Gx}addToCollectionParentIndex(t,e){return this.un.add(e),$.resolve()}getCollectionParents(t,e){return $.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return $.resolve()}deleteFieldIndex(t,e){return $.resolve()}deleteAllFieldIndexes(t){return $.resolve()}createTargetIndexes(t,e){return $.resolve()}getDocumentsMatchingTarget(t,e){return $.resolve(null)}getIndexType(t,e){return $.resolve(0)}getFieldIndexes(t,e){return $.resolve([])}getNextCollectionGroupToUpdate(t){return $.resolve(null)}getMinOffset(t,e){return $.resolve(ts.min())}getMinOffsetFromCollectionGroup(t,e){return $.resolve(ts.min())}updateCollectionGroup(t,e,s){return $.resolve()}updateIndexEntries(t,e){return $.resolve()}}class Gx{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e]||new se(Tt.comparator),r=!i.has(s);return this.index[e]=i.add(s),r}has(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e];return i&&i.has(s)}getEntries(t){return(this.index[t]||new se(Tt.comparator)).toArray()}}/**
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
 */class bi{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new bi(0)}static kn(){return new bi(-1)}}/**
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
 */class Yx{constructor(){this.changes=new Pi(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,fe.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?$.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Kx{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Qx{constructor(t,e,s,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(s!==null&&Tr(s.mutation,i,Re.empty(),Pt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,st()).next(()=>s))}getLocalViewOfDocuments(t,e,s=st()){const i=Es();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,s).next(r=>{let o=hr();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const s=Es();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,st()))}populateOverlays(t,e,s){const i=[];return s.forEach(r=>{e.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,s,i){let r=Sn();const o=Er(),a=function(){return Er()}();return e.forEach((c,l)=>{const d=s.get(l.key);i.has(l.key)&&(d===void 0||d.mutation instanceof rs)?r=r.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),Tr(d.mutation,l,d.mutation.getFieldMask(),Pt.now())):o.set(l.key,Re.empty())}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((l,d)=>o.set(l,d)),e.forEach((l,d)=>{var h;return a.set(l,new Kx(d,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const s=Er();let i=new Ct((o,a)=>o-a),r=st();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=e.get(c);if(l===null)return;let d=s.get(c)||Re.empty();d=a.applyToLocalView(l,d),s.set(c,d);const h=(i.get(a.batchId)||st()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,d=c.value,h=jg();d.forEach(f=>{if(!r.has(f)){const m=Yg(e.get(f),s.get(f));m!==null&&h.set(f,m),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return $.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vg(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,i):this.getDocumentsMatchingCollectionQuery(t,e,s,i)}getNextDocuments(t,e,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,i-r.size):$.resolve(Es());let a=-1,c=r;return o.next(l=>$.forEach(l,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(d)?$.resolve():this.remoteDocumentCache.getEntry(t,d).next(f=>{c=c.insert(d,f)}))).next(()=>this.populateOverlays(t,l,r)).next(()=>this.computeViews(t,c,l,st())).next(d=>({batchId:a,changes:Ug(d)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new H(e)).next(s=>{let i=hr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,s,i){const r=e.collectionGroup;let o=hr();return this.indexManager.getCollectionParents(t,r).next(a=>$.forEach(a,c=>{const l=function(h,f){return new Ri(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,c.child(r));return this.getDocumentsMatchingCollectionQuery(t,l,s,i).next(d=>{d.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,r,i))).next(o=>{r.forEach((c,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,fe.newInvalidDocument(d)))});let a=hr();return o.forEach((c,l)=>{const d=r.get(c);d!==void 0&&Tr(d.mutation,l,Re.empty(),Pt.now()),cc(e,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class Xx{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return $.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Je(i.createTime)}}(e)),$.resolve()}getNamedQuery(t,e){return $.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:qx(i.bundledQuery),readTime:Je(i.readTime)}}(e)),$.resolve()}}/**
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
 */class Jx{constructor(){this.overlays=new Ct(H.comparator),this.Ir=new Map}getOverlay(t,e){return $.resolve(this.overlays.get(e))}getOverlays(t,e){const s=Es();return $.forEach(e,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((i,r)=>{this.ht(t,e,r)}),$.resolve()}removeOverlaysForBatchId(t,e,s){const i=this.Ir.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Ir.delete(s)),$.resolve()}getOverlaysForCollection(t,e,s){const i=Es(),r=e.length+1,o=new H(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return $.resolve(i)}getOverlaysForCollectionGroup(t,e,s,i){let r=new Ct((l,d)=>l-d);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>s){let d=r.get(l.largestBatchId);d===null&&(d=Es(),r=r.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const a=Es(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,d)=>a.set(l,d)),!(a.size()>=i)););return $.resolve(a)}ht(t,e,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(s.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new wx(e,s));let r=this.Ir.get(e);r===void 0&&(r=st(),this.Ir.set(e,r)),this.Ir.set(e,r.add(s.key))}}/**
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
 */class Zx{constructor(){this.sessionToken=ie.EMPTY_BYTE_STRING}getSessionToken(t){return $.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,$.resolve()}}/**
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
 */class Ju{constructor(){this.Tr=new se(Xt.Er),this.dr=new se(Xt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const s=new Xt(t,e);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.Vr(new Xt(t,e))}mr(t,e){t.forEach(s=>this.removeReference(s,e))}gr(t){const e=new H(new Tt([])),s=new Xt(e,t),i=new Xt(e,t+1),r=[];return this.dr.forEachInRange([s,i],o=>{this.Vr(o),r.push(o.key)}),r}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new H(new Tt([])),s=new Xt(e,t),i=new Xt(e,t+1);let r=st();return this.dr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const e=new Xt(t,0),s=this.Tr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class Xt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return H.comparator(t.key,e.key)||lt(t.wr,e.wr)}static Ar(t,e){return lt(t.wr,e.wr)||H.comparator(t.key,e.key)}}/**
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
 */class tE{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new se(Xt.Er)}checkEmpty(t){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,i){const r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bx(r,e,s,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Xt(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(t,e){return $.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,i=this.vr(s),r=i<0?0:i;return $.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new Xt(e,0),i=new Xt(e,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([s,i],o=>{const a=this.Dr(o.wr);r.push(a)}),$.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new se(lt);return e.forEach(i=>{const r=new Xt(i,0),o=new Xt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([r,o],a=>{s=s.add(a.wr)})}),$.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,i=s.length+1;let r=s;H.isDocumentKey(r)||(r=r.child(""));const o=new Xt(new H(r),0);let a=new se(lt);return this.br.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.wr)),!0)},o),$.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(s=>{const i=this.Dr(s);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){_t(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return $.forEach(e.mutations,i=>{const r=new Xt(i.key,e.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=s})}On(t){}containsKey(t,e){const s=new Xt(e,0),i=this.br.firstAfterOrEqual(s);return $.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,$.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class eE{constructor(t){this.Mr=t,this.docs=function(){return new Ct(H.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.Mr(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return $.resolve(s?s.document.mutableCopy():fe.newInvalidDocument(e))}getEntries(t,e){let s=Sn();return e.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():fe.newInvalidDocument(i))}),$.resolve(s)}getDocumentsMatchingQuery(t,e,s,i){let r=Sn();const o=e.path,a=new H(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:d}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Fw(Vw(d),s)<=0||(i.has(d.key)||cc(e,d))&&(r=r.insert(d.key,d.mutableCopy()))}return $.resolve(r)}getAllFromCollectionGroup(t,e,s,i){G()}Or(t,e){return $.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new nE(this)}getSize(t){return $.resolve(this.size)}}class nE extends Yx{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(s)}),$.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class sE{constructor(t){this.persistence=t,this.Nr=new Pi(e=>Hu(e),qu),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ju,this.targetCount=0,this.kr=bi.Bn()}forEachTarget(t,e){return this.Nr.forEach((s,i)=>e(i)),$.resolve()}getLastRemoteSnapshotVersion(t){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return $.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.Lr&&(this.Lr=e),$.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new bi(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,$.resolve()}updateTargetData(t,e){return this.Kn(e),$.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,$.resolve()}removeTargets(t,e,s){let i=0;const r=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=e&&s.get(a.targetId)===null&&(this.Nr.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),$.waitFor(r).next(()=>i)}getTargetCount(t){return $.resolve(this.targetCount)}getTargetData(t,e){const s=this.Nr.get(e)||null;return $.resolve(s)}addMatchingKeys(t,e,s){return this.Br.Rr(e,s),$.resolve()}removeMatchingKeys(t,e,s){this.Br.mr(e,s);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),$.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),$.resolve()}getMatchingKeysForTargetId(t,e){const s=this.Br.yr(e);return $.resolve(s)}containsKey(t,e){return $.resolve(this.Br.containsKey(e))}}/**
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
 */class iE{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Bu(0),this.Kr=!1,this.Kr=!0,this.$r=new Zx,this.referenceDelegate=t(this),this.Ur=new sE(this),this.indexManager=new Wx,this.remoteDocumentCache=function(i){return new eE(i)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new Hx(e),this.Gr=new Xx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Jx,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.qr[t.toKey()];return s||(s=new tE(e,this.referenceDelegate),this.qr[t.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,s){z("MemoryPersistence","Starting transaction:",t);const i=new rE(this.Qr.next());return this.referenceDelegate.zr(),s(i).next(r=>this.referenceDelegate.jr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Hr(t,e){return $.or(Object.values(this.qr).map(s=>()=>s.containsKey(t,e)))}}class rE extends Bw{constructor(t){super(),this.currentSequenceNumber=t}}class Zu{constructor(t){this.persistence=t,this.Jr=new Ju,this.Yr=null}static Zr(t){return new Zu(t)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(t,e,s){return this.Jr.addReference(s,e),this.Xr.delete(s.toString()),$.resolve()}removeReference(t,e,s){return this.Jr.removeReference(s,e),this.Xr.add(s.toString()),$.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),$.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(r=>this.Xr.add(r.toString()))}).next(()=>s.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,s=>{const i=H.fromPath(s);return this.ei(t,i).next(r=>{r||e.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(s=>{s?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return $.or([()=>$.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class td{constructor(t,e,s,i){this.targetId=t,this.fromCache=e,this.$i=s,this.Ui=i}static Wi(t,e){let s=st(),i=st();for(const r of e.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new td(t,e.fromCache,s,i)}}/**
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
 */class oE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class aE{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return c0()?8:Uw(me())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,s,i){const r={result:null};return this.Yi(t,e).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Zi(t,e,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new oE;return this.Xi(t,e,o).next(a=>{if(r.result=a,this.zi)return this.es(t,e,o,a.size)})}).next(()=>r.result)}es(t,e,s,i){return s.documentReadCount<this.ji?(Yi()<=rt.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",si(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Yi()<=rt.DEBUG&&z("QueryEngine","Query:",si(e),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Hi*i?(Yi()<=rt.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",si(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Xe(e))):$.resolve())}Yi(t,e){if(If(e))return $.resolve(null);let s=Xe(e);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Pa(e,null,"F"),s=Xe(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=st(...r);return this.Ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const l=this.ts(e,a);return this.ns(e,l,o,c.readTime)?this.Yi(t,Pa(e,null,"F")):this.rs(t,l,e,c)}))})))}Zi(t,e,s,i){return If(e)||i.isEqual(Y.min())?$.resolve(null):this.Ji.getDocuments(t,s).next(r=>{const o=this.ts(e,r);return this.ns(e,o,s,i)?$.resolve(null):(Yi()<=rt.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),si(e)),this.rs(t,o,e,Lw(i,-1)).next(a=>a))})}ts(t,e){let s=new se($g(t));return e.forEach((i,r)=>{cc(t,r)&&(s=s.add(r))}),s}ns(t,e,s,i){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Xi(t,e,s){return Yi()<=rt.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",si(e)),this.Ji.getDocumentsMatchingQuery(t,e,ts.min(),s)}rs(t,e,s,i){return this.Ji.getDocumentsMatchingQuery(t,s,i).next(r=>(e.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class cE{constructor(t,e,s,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new Ct(lt),this._s=new Pi(r=>Hu(r),qu),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(s)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Qx(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function lE(n,t,e,s){return new cE(n,t,e,s)}async function o_(n,t){const e=Q(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let i;return e.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,e.ls(t),e.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=st();for(const l of i){o.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}for(const l of r){a.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}return e.localDocuments.getDocuments(s,c).next(l=>({hs:l,removedBatchIds:o,addedBatchIds:a}))})})}function uE(n,t){const e=Q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=e.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,l,d){const h=l.batch,f=h.keys();let m=$.resolve();return f.forEach(_=>{m=m.next(()=>d.getEntry(c,_)).next(b=>{const y=l.docVersions.get(_);_t(y!==null),b.version.compareTo(y)<0&&(h.applyToRemoteDocument(b,l),b.isValidDocument()&&(b.setReadTime(l.commitVersion),d.addEntry(b)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,s,t,r).next(()=>r.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=st();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>e.localDocuments.getDocuments(s,i))})}function a_(n){const t=Q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function dE(n,t){const e=Q(n),s=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const a=[];t.targetChanges.forEach((d,h)=>{const f=i.get(h);if(!f)return;a.push(e.Ur.removeMatchingKeys(r,d.removedDocuments,h).next(()=>e.Ur.addMatchingKeys(r,d.addedDocuments,h)));let m=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(ie.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(d.resumeToken,s)),i=i.insert(h,m),function(b,y,T){return b.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,m,d)&&a.push(e.Ur.updateTargetData(r,m))});let c=Sn(),l=st();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,d))}),a.push(hE(r,o,t.documentUpdates).next(d=>{c=d.Ps,l=d.Is})),!s.isEqual(Y.min())){const d=e.Ur.getLastRemoteSnapshotVersion(r).next(h=>e.Ur.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(d)}return $.waitFor(a).next(()=>o.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(e.os=i,r))}function hE(n,t,e){let s=st(),i=st();return e.forEach(r=>s=s.add(r)),t.getEntries(n,s).next(r=>{let o=Sn();return e.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function fE(n,t){const e=Q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function pE(n,t){const e=Q(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return e.Ur.getTargetData(s,t).next(r=>r?(i=r,$.resolve(i)):e.Ur.allocateTargetId(s).next(o=>(i=new jn(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.Ur.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=e.os.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(s.targetId,s),e._s.set(t,s.targetId)),s})}async function nu(n,t,e){const s=Q(n),i=s.os.get(t),r=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!eo(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.os=s.os.remove(t),s._s.delete(i.target)}function Lf(n,t,e){const s=Q(n);let i=Y.min(),r=st();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,d){const h=Q(c),f=h._s.get(d);return f!==void 0?$.resolve(h.os.get(f)):h.Ur.getTargetData(l,d)}(s,o,Xe(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.ss.getDocumentsMatchingQuery(o,t,e?i:Y.min(),e?r:st())).next(a=>(mE(s,rx(t),a),{documents:a,Ts:r})))}function mE(n,t,e){let s=n.us.get(t)||Y.min();e.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.us.set(t,s)}class Vf{constructor(){this.activeTargetIds=dx()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gE{constructor(){this.so=new Vf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,s){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Vf,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class _E{_o(t){}shutdown(){}}/**
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
 */class Ff{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bo=null;function hl(){return Bo===null?Bo=function(){return 268435456+Math.round(2147483648*Math.random())}():Bo++,"0x"+Bo.toString(16)}/**
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
 */const yE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class vE{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const ce="WebChannelConnection";class bE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const s=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+e.host,this.vo=`projects/${i}/databases/${r}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Fo(){return!1}Mo(e,s,i,r,o){const a=hl(),c=this.xo(e,s.toUriEncodedString());z("RestConnection",`Sending RPC '${e}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(l,r,o),this.No(e,c,l,i).then(d=>(z("RestConnection",`Received RPC '${e}' ${a}: `,d),d),d=>{throw gi("RestConnection",`RPC '${e}' ${a} failed with error: `,d,"url: ",c,"request:",i),d})}Lo(e,s,i,r,o,a){return this.Mo(e,s,i,r,o)}Oo(e,s,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Si}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>e[o]=r),i&&i.headers.forEach((r,o)=>e[o]=r)}xo(e,s){const i=yE[e];return`${this.Do}/v1/${s}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,s,i){const r=hl();return new Promise((o,a)=>{const c=new wg;c.setWithCredentials(!0),c.listenOnce(xg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case oa.NO_ERROR:const d=c.getResponseJson();z(ce,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(d)),o(d);break;case oa.TIMEOUT:z(ce,`RPC '${t}' ${r} timed out`),a(new j(V.DEADLINE_EXCEEDED,"Request time out"));break;case oa.HTTP_ERROR:const h=c.getStatus();if(z(ce,`RPC '${t}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const _=function(y){const T=y.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(T)>=0?T:V.UNKNOWN}(m.status);a(new j(_,m.message))}else a(new j(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new j(V.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{z(ce,`RPC '${t}' ${r} completed.`)}});const l=JSON.stringify(i);z(ce,`RPC '${t}' ${r} sending request:`,i),c.send(e,"POST",l,s,15)})}Bo(t,e,s){const i=hl(),r=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Ig(),a=Tg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,s),c.encodeInitMessageHeaders=!0;const d=r.join("");z(ce,`Creating RPC '${t}' stream ${i}: ${d}`,c);const h=o.createWebChannel(d,c);let f=!1,m=!1;const _=new vE({Io:y=>{m?z(ce,`Not sending because RPC '${t}' stream ${i} is closed:`,y):(f||(z(ce,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),z(ce,`RPC '${t}' stream ${i} sending:`,y),h.send(y))},To:()=>h.close()}),b=(y,T,I)=>{y.listen(T,C=>{try{I(C)}catch(R){setTimeout(()=>{throw R},0)}})};return b(h,dr.EventType.OPEN,()=>{m||(z(ce,`RPC '${t}' stream ${i} transport opened.`),_.yo())}),b(h,dr.EventType.CLOSE,()=>{m||(m=!0,z(ce,`RPC '${t}' stream ${i} transport closed`),_.So())}),b(h,dr.EventType.ERROR,y=>{m||(m=!0,gi(ce,`RPC '${t}' stream ${i} transport errored:`,y),_.So(new j(V.UNAVAILABLE,"The operation could not be completed")))}),b(h,dr.EventType.MESSAGE,y=>{var T;if(!m){const I=y.data[0];_t(!!I);const C=I,R=C.error||((T=C[0])===null||T===void 0?void 0:T.error);if(R){z(ce,`RPC '${t}' stream ${i} received error:`,R);const D=R.status;let O=function(w){const A=qt[w];if(A!==void 0)return Qg(A)}(D),x=R.message;O===void 0&&(O=V.INTERNAL,x="Unknown error status: "+D+" with message "+R.message),m=!0,_.So(new j(O,x)),h.close()}else z(ce,`RPC '${t}' stream ${i} received:`,I),_.bo(I)}}),b(a,Eg.STAT_EVENT,y=>{y.stat===Wl.PROXY?z(ce,`RPC '${t}' stream ${i} detected buffering proxy`):y.stat===Wl.NOPROXY&&z(ce,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.wo()},0),_}}function fl(){return typeof document<"u"?document:null}/**
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
 */function hc(n){return new Px(n,!0)}/**
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
 */class c_{constructor(t,e,s=1e3,i=1.5,r=6e4){this.ui=t,this.timerId=e,this.ko=s,this.qo=i,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-s);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class l_{constructor(t,e,s,i,r,o,a,c){this.ui=t,this.Ho=s,this.Jo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new c_(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(kn(e.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Yo===e&&this.P_(s,i)},s=>{t(()=>{const i=new j(V.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(i)})})}P_(t,e){const s=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{s(()=>this.I_(i))}),this.stream.onMessage(i=>{s(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return z("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wE extends l_{constructor(t,e,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Ox(this.serializer,t),s=function(r){if(!("targetChange"in r))return Y.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Je(o.readTime):Y.min()}(t);return this.listener.d_(e,s)}A_(t){const e={};e.database=eu(this.serializer),e.addTarget=function(r,o){let a;const c=o.target;if(a=Ql(c)?{documents:Lx(r,c)}:{query:Vx(r,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Zg(r,o.resumeToken);const l=Jl(r,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=Oa(r,o.snapshotVersion.toTimestamp());const l=Jl(r,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const s=$x(this.serializer,t);s&&(e.labels=s),this.a_(e)}R_(t){const e={};e.database=eu(this.serializer),e.removeTarget=t,this.a_(e)}}class xE extends l_{constructor(t,e,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return _t(!!t.streamToken),this.lastStreamToken=t.streamToken,_t(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){_t(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Nx(t.writeResults,t.commitTime),s=Je(t.commitTime);return this.listener.g_(s,e)}p_(){const t={};t.database=eu(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>Mx(this.serializer,s))};this.a_(e)}}/**
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
 */class EE extends class{}{constructor(t,e,s,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Mo(t,Zl(e,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(V.UNKNOWN,r.toString())})}Lo(t,e,s,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(t,Zl(e,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class TE{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(kn(e),this.D_=!1):z("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class IE{constructor(t,e,s,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o(o=>{s.enqueueAndForget(async()=>{Us(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=Q(c);l.L_.add(4),await io(l),l.q_.set("Unknown"),l.L_.delete(4),await fc(l)}(this))})}),this.q_=new TE(s,i)}}async function fc(n){if(Us(n))for(const t of n.B_)await t(!0)}async function io(n){for(const t of n.B_)await t(!1)}function u_(n,t){const e=Q(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),id(e)?sd(e):Ci(e).r_()&&nd(e,t))}function ed(n,t){const e=Q(n),s=Ci(e);e.N_.delete(t),s.r_()&&d_(e,t),e.N_.size===0&&(s.r_()?s.o_():Us(e)&&e.q_.set("Unknown"))}function nd(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Y.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ci(n).A_(t)}function d_(n,t){n.Q_.xe(t),Ci(n).R_(t)}function sd(n){n.Q_=new Ax({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Ci(n).start(),n.q_.v_()}function id(n){return Us(n)&&!Ci(n).n_()&&n.N_.size>0}function Us(n){return Q(n).L_.size===0}function h_(n){n.Q_=void 0}async function AE(n){n.q_.set("Online")}async function kE(n){n.N_.forEach((t,e)=>{nd(n,t)})}async function SE(n,t){h_(n),id(n)?(n.q_.M_(t),sd(n)):n.q_.set("Unknown")}async function RE(n,t,e){if(n.q_.set("Online"),t instanceof Jg&&t.state===2&&t.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,t)}catch(s){z("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Ma(n,s)}else if(t instanceof la?n.Q_.Ke(t):t instanceof Xg?n.Q_.He(t):n.Q_.We(t),!e.isEqual(Y.min()))try{const s=await a_(n.localStore);e.compareTo(s)>=0&&await function(r,o){const a=r.Q_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.N_.get(l);d&&r.N_.set(l,d.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const d=r.N_.get(c);if(!d)return;r.N_.set(c,d.withResumeToken(ie.EMPTY_BYTE_STRING,d.snapshotVersion)),d_(r,c);const h=new jn(d.target,c,l,d.sequenceNumber);nd(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(s){z("RemoteStore","Failed to raise snapshot:",s),await Ma(n,s)}}async function Ma(n,t,e){if(!eo(t))throw t;n.L_.add(1),await io(n),n.q_.set("Offline"),e||(e=()=>a_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await fc(n)})}function f_(n,t){return t().catch(e=>Ma(n,e,t))}async function pc(n){const t=Q(n),e=ns(t);let s=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;PE(t);)try{const i=await fE(t.localStore,s);if(i===null){t.O_.length===0&&e.o_();break}s=i.batchId,CE(t,i)}catch(i){await Ma(t,i)}p_(t)&&m_(t)}function PE(n){return Us(n)&&n.O_.length<10}function CE(n,t){n.O_.push(t);const e=ns(n);e.r_()&&e.V_&&e.m_(t.mutations)}function p_(n){return Us(n)&&!ns(n).n_()&&n.O_.length>0}function m_(n){ns(n).start()}async function DE(n){ns(n).p_()}async function OE(n){const t=ns(n);for(const e of n.O_)t.m_(e.mutations)}async function ME(n,t,e){const s=n.O_.shift(),i=Ku.from(s,t,e);await f_(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await pc(n)}async function NE(n,t){t&&ns(n).V_&&await async function(s,i){if(function(o){return Ex(o)&&o!==V.ABORTED}(i.code)){const r=s.O_.shift();ns(s).s_(),await f_(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await pc(s)}}(n,t),p_(n)&&m_(n)}async function $f(n,t){const e=Q(n);e.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const s=Us(e);e.L_.add(3),await io(e),s&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await fc(e)}async function LE(n,t){const e=Q(n);t?(e.L_.delete(2),await fc(e)):t||(e.L_.add(2),await io(e),e.q_.set("Unknown"))}function Ci(n){return n.K_||(n.K_=function(e,s,i){const r=Q(e);return r.w_(),new wE(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:AE.bind(null,n),Ro:kE.bind(null,n),mo:SE.bind(null,n),d_:RE.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),id(n)?sd(n):n.q_.set("Unknown")):(await n.K_.stop(),h_(n))})),n.K_}function ns(n){return n.U_||(n.U_=function(e,s,i){const r=Q(e);return r.w_(),new xE(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:DE.bind(null,n),mo:NE.bind(null,n),f_:OE.bind(null,n),g_:ME.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await pc(n)):(await n.U_.stop(),n.O_.length>0&&(z("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class rd{constructor(t,e,s,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,i,r){const o=Date.now()+s,a=new rd(t,e,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function od(n,t){if(kn("AsyncQueue",`${t}: ${n}`),eo(n))return new j(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class li{constructor(t){this.comparator=t?(e,s)=>t(e,s)||H.comparator(e.key,s.key):(e,s)=>H.comparator(e.key,s.key),this.keyedMap=hr(),this.sortedSet=new Ct(this.comparator)}static emptySet(t){return new li(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof li)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new li;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
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
 */class Bf{constructor(){this.W_=new Ct(H.comparator)}track(t){const e=t.doc.key,s=this.W_.get(e);s?t.type!==0&&s.type===3?this.W_=this.W_.insert(e,t):t.type===3&&s.type!==1?this.W_=this.W_.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.W_=this.W_.remove(e):t.type===1&&s.type===2?this.W_=this.W_.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):G():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,s)=>{t.push(s)}),t}}class wi{constructor(t,e,s,i,r,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,s,i,r){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new wi(t,e,li.emptySet(e),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ac(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==s[i].type||!e[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class VE{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class FE{constructor(){this.queries=Uf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,s){const i=Q(e),r=i.queries;i.queries=Uf(),r.forEach((o,a)=>{for(const c of a.j_)c.onError(s)})})(this,new j(V.ABORTED,"Firestore shutting down"))}}function Uf(){return new Pi(n=>Fg(n),ac)}async function g_(n,t){const e=Q(n);let s=3;const i=t.query;let r=e.queries.get(i);r?!r.H_()&&t.J_()&&(s=2):(r=new VE,s=t.J_()?0:1);try{switch(s){case 0:r.z_=await e.onListen(i,!0);break;case 1:r.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(o){const a=od(o,`Initialization of query '${si(t.query)}' failed`);return void t.onError(a)}e.queries.set(i,r),r.j_.push(t),t.Z_(e.onlineState),r.z_&&t.X_(r.z_)&&ad(e)}async function __(n,t){const e=Q(n),s=t.query;let i=3;const r=e.queries.get(s);if(r){const o=r.j_.indexOf(t);o>=0&&(r.j_.splice(o,1),r.j_.length===0?i=t.J_()?0:1:!r.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function $E(n,t){const e=Q(n);let s=!1;for(const i of t){const r=i.query,o=e.queries.get(r);if(o){for(const a of o.j_)a.X_(i)&&(s=!0);o.z_=i}}s&&ad(e)}function BE(n,t,e){const s=Q(n),i=s.queries.get(t);if(i)for(const r of i.j_)r.onError(e);s.queries.delete(t)}function ad(n){n.Y_.forEach(t=>{t.next()})}var su,jf;(jf=su||(su={})).ea="default",jf.Cache="cache";class y_{constructor(t,e,s){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new wi(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const s=e!=="Offline";return(!this.options._a||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=wi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==su.Cache}}/**
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
 */class v_{constructor(t){this.key=t}}class b_{constructor(t){this.key=t}}class UE{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=st(),this.mutatedKeys=st(),this.Aa=$g(t),this.Ra=new li(this.Aa)}get Va(){return this.Ta}ma(t,e){const s=e?e.fa:new Bf,i=e?e.Ra:this.Ra;let r=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((d,h)=>{const f=i.get(d),m=cc(this.query,h)?h:null,_=!!f&&this.mutatedKeys.has(f.key),b=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let y=!1;f&&m?f.data.isEqual(m.data)?_!==b&&(s.track({type:3,doc:m}),y=!0):this.ga(f,m)||(s.track({type:2,doc:m}),y=!0,(c&&this.Aa(m,c)>0||l&&this.Aa(m,l)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),y=!0):f&&!m&&(s.track({type:1,doc:f}),y=!0,(c||l)&&(a=!0)),y&&(m?(o=o.add(m),r=b?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),s.track({type:1,doc:d})}return{Ra:o,fa:s,ns:a,mutatedKeys:r}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,i){const r=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((d,h)=>function(m,_){const b=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return b(m)-b(_)}(d.type,h.type)||this.Aa(d.doc,h.doc)),this.pa(s),i=i!=null&&i;const a=e&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,l=c!==this.Ea;return this.Ea=c,o.length!==0||l?{snapshot:new wi(this.query,t.Ra,r,o,t.mutatedKeys,c===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Bf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=st(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const e=[];return t.forEach(s=>{this.da.has(s)||e.push(new b_(s))}),this.da.forEach(s=>{t.has(s)||e.push(new v_(s))}),e}ba(t){this.Ta=t.Ts,this.da=st();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return wi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class jE{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class zE{constructor(t){this.key=t,this.va=!1}}class HE{constructor(t,e,s,i,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Pi(a=>Fg(a),ac),this.Ma=new Map,this.xa=new Set,this.Oa=new Ct(H.comparator),this.Na=new Map,this.La=new Ju,this.Ba={},this.ka=new Map,this.qa=bi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function qE(n,t,e=!0){const s=A_(n);let i;const r=s.Fa.get(t);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Da()):i=await w_(s,t,e,!0),i}async function WE(n,t){const e=A_(n);await w_(e,t,!0,!1)}async function w_(n,t,e,s){const i=await pE(n.localStore,Xe(t)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return s&&(a=await GE(n,t,r,o==="current",i.resumeToken)),n.isPrimaryClient&&e&&u_(n.remoteStore,i),a}async function GE(n,t,e,s,i){n.Ka=(h,f,m)=>async function(b,y,T,I){let C=y.view.ma(T);C.ns&&(C=await Lf(b.localStore,y.query,!1).then(({documents:x})=>y.view.ma(x,C)));const R=I&&I.targetChanges.get(y.targetId),D=I&&I.targetMismatches.get(y.targetId)!=null,O=y.view.applyChanges(C,b.isPrimaryClient,R,D);return Hf(b,y.targetId,O.wa),O.snapshot}(n,h,f,m);const r=await Lf(n.localStore,t,!0),o=new UE(t,r.Ts),a=o.ma(r.documents),c=so.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);Hf(n,e,l.wa);const d=new jE(t,e,o);return n.Fa.set(t,d),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),l.snapshot}async function YE(n,t,e){const s=Q(n),i=s.Fa.get(t),r=s.Ma.get(i.targetId);if(r.length>1)return s.Ma.set(i.targetId,r.filter(o=>!ac(o,t))),void s.Fa.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await nu(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),e&&ed(s.remoteStore,i.targetId),iu(s,i.targetId)}).catch(to)):(iu(s,i.targetId),await nu(s.localStore,i.targetId,!0))}async function KE(n,t){const e=Q(n),s=e.Fa.get(t),i=e.Ma.get(s.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),ed(e.remoteStore,s.targetId))}async function QE(n,t,e){const s=sT(n);try{const i=await function(o,a){const c=Q(o),l=Pt.now(),d=a.reduce((m,_)=>m.add(_.key),st());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let _=Sn(),b=st();return c.cs.getEntries(m,d).next(y=>{_=y,_.forEach((T,I)=>{I.isValidDocument()||(b=b.add(T))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,_)).next(y=>{h=y;const T=[];for(const I of a){const C=yx(I,h.get(I.key).overlayedDocument);C!=null&&T.push(new rs(I.key,C,Pg(C.value.mapValue),Oe.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,T,a)}).next(y=>{f=y;const T=y.applyToLocalDocumentSet(h,b);return c.documentOverlayCache.saveOverlays(m,y.batchId,T)})}).then(()=>({batchId:f.batchId,changes:Ug(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.Ba[o.currentUser.toKey()];l||(l=new Ct(lt)),l=l.insert(a,c),o.Ba[o.currentUser.toKey()]=l}(s,i.batchId,e),await ro(s,i.changes),await pc(s.remoteStore)}catch(i){const r=od(i,"Failed to persist write");e.reject(r)}}async function x_(n,t){const e=Q(n);try{const s=await dE(e.localStore,t);t.targetChanges.forEach((i,r)=>{const o=e.Na.get(r);o&&(_t(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?_t(o.va):i.removedDocuments.size>0&&(_t(o.va),o.va=!1))}),await ro(e,s,t)}catch(s){await to(s)}}function zf(n,t,e){const s=Q(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const i=[];s.Fa.forEach((r,o)=>{const a=o.view.Z_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=Q(o);c.onlineState=a;let l=!1;c.queries.forEach((d,h)=>{for(const f of h.j_)f.Z_(a)&&(l=!0)}),l&&ad(c)}(s.eventManager,t),i.length&&s.Ca.d_(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function XE(n,t,e){const s=Q(n);s.sharedClientState.updateQueryState(t,"rejected",e);const i=s.Na.get(t),r=i&&i.key;if(r){let o=new Ct(H.comparator);o=o.insert(r,fe.newNoDocument(r,Y.min()));const a=st().add(r),c=new dc(Y.min(),new Map,new Ct(lt),o,a);await x_(s,c),s.Oa=s.Oa.remove(r),s.Na.delete(t),cd(s)}else await nu(s.localStore,t,!1).then(()=>iu(s,t,e)).catch(to)}async function JE(n,t){const e=Q(n),s=t.batch.batchId;try{const i=await uE(e.localStore,t);T_(e,s,null),E_(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await ro(e,i)}catch(i){await to(i)}}async function ZE(n,t,e){const s=Q(n);try{const i=await function(o,a){const c=Q(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let d;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(_t(h!==null),d=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,d,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d)).next(()=>c.localDocuments.getDocuments(l,d))})}(s.localStore,t);T_(s,t,e),E_(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await ro(s,i)}catch(i){await to(i)}}function E_(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function T_(n,t,e){const s=Q(n);let i=s.Ba[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(e?r.reject(e):r.resolve(),i=i.remove(t)),s.Ba[s.currentUser.toKey()]=i}}function iu(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Ma.get(t))n.Fa.delete(s),e&&n.Ca.$a(s,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(s=>{n.La.containsKey(s)||I_(n,s)})}function I_(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(ed(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),cd(n))}function Hf(n,t,e){for(const s of e)s instanceof v_?(n.La.addReference(s.key,t),tT(n,s)):s instanceof b_?(z("SyncEngine","Document no longer in limbo: "+s.key),n.La.removeReference(s.key,t),n.La.containsKey(s.key)||I_(n,s.key)):G()}function tT(n,t){const e=t.key,s=e.path.canonicalString();n.Oa.get(e)||n.xa.has(s)||(z("SyncEngine","New document in limbo: "+e),n.xa.add(s),cd(n))}function cd(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new H(Tt.fromString(t)),s=n.qa.next();n.Na.set(s,new zE(e)),n.Oa=n.Oa.insert(e,s),u_(n.remoteStore,new jn(Xe(Wu(e.path)),s,"TargetPurposeLimboResolution",Bu.oe))}}async function ro(n,t,e){const s=Q(n),i=[],r=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((a,c)=>{o.push(s.Ka(c,t,e).then(l=>{var d;if((l||e)&&s.isPrimaryClient){const h=l?!l.fromCache:(d=e==null?void 0:e.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;s.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(l){i.push(l);const h=td.Wi(c.targetId,l);r.push(h)}}))}),await Promise.all(o),s.Ca.d_(i),await async function(c,l){const d=Q(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>$.forEach(l,f=>$.forEach(f.$i,m=>d.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>$.forEach(f.Ui,m=>d.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!eo(h))throw h;z("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const m=d.os.get(f),_=m.snapshotVersion,b=m.withLastLimboFreeSnapshotVersion(_);d.os=d.os.insert(f,b)}}}(s.localStore,r))}async function eT(n,t){const e=Q(n);if(!e.currentUser.isEqual(t)){z("SyncEngine","User change. New user:",t.toKey());const s=await o_(e.localStore,t);e.currentUser=t,function(r,o){r.ka.forEach(a=>{a.forEach(c=>{c.reject(new j(V.CANCELLED,o))})}),r.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await ro(e,s.hs)}}function nT(n,t){const e=Q(n),s=e.Na.get(t);if(s&&s.va)return st().add(s.key);{let i=st();const r=e.Ma.get(t);if(!r)return i;for(const o of r){const a=e.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function A_(n){const t=Q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=x_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=nT.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=XE.bind(null,t),t.Ca.d_=$E.bind(null,t.eventManager),t.Ca.$a=BE.bind(null,t.eventManager),t}function sT(n){const t=Q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=JE.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ZE.bind(null,t),t}class Na{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=hc(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return lE(this.persistence,new aE,t.initialUser,this.serializer)}Ga(t){return new iE(Zu.Zr,this.serializer)}Wa(t){return new gE}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Na.provider={build:()=>new Na};class ru{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>zf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=eT.bind(null,this.syncEngine),await LE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new FE}()}createDatastore(t){const e=hc(t.databaseInfo.databaseId),s=function(r){return new bE(r)}(t.databaseInfo);return function(r,o,a,c){return new EE(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,i,r,o,a){return new IE(s,i,r,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>zf(this.syncEngine,e,0),function(){return Ff.D()?new Ff:new _E}())}createSyncEngine(t,e){return function(i,r,o,a,c,l,d){const h=new HE(i,r,o,a,c,l);return d&&(h.Qa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const r=Q(i);z("RemoteStore","RemoteStore shutting down."),r.L_.add(5),await io(r),r.k_.shutdown(),r.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ru.provider={build:()=>new ru};/**
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
 */class k_{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):kn("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class iT{constructor(t,e,s,i,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=i,this.user=de.UNAUTHENTICATED,this.clientId=kg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=od(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function pl(n,t){n.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await o_(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function qf(n,t){n.asyncQueue.verifyOperationInProgress();const e=await rT(n);z("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>$f(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>$f(t.remoteStore,i)),n._onlineComponents=t}async function rT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await pl(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;gi("Error using user provided cache. Falling back to memory cache: "+e),await pl(n,new Na)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await pl(n,new Na);return n._offlineComponents}async function S_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await qf(n,n._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await qf(n,new ru))),n._onlineComponents}function oT(n){return S_(n).then(t=>t.syncEngine)}async function R_(n){const t=await S_(n),e=t.eventManager;return e.onListen=qE.bind(null,t.syncEngine),e.onUnlisten=YE.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=WE.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=KE.bind(null,t.syncEngine),e}function aT(n,t,e={}){const s=new Tn;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const d=new k_({next:f=>{d.Za(),o.enqueueAndForget(()=>__(r,h));const m=f.docs.has(a);!m&&f.fromCache?l.reject(new j(V.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&f.fromCache&&c&&c.source==="server"?l.reject(new j(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new y_(Wu(a.path),d,{includeMetadataChanges:!0,_a:!0});return g_(r,h)}(await R_(n),n.asyncQueue,t,e,s)),s.promise}function cT(n,t,e={}){const s=new Tn;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const d=new k_({next:f=>{d.Za(),o.enqueueAndForget(()=>__(r,h)),f.fromCache&&c.source==="server"?l.reject(new j(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new y_(a,d,{includeMetadataChanges:!0,_a:!0});return g_(r,h)}(await R_(n),n.asyncQueue,t,e,s)),s.promise}/**
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
 */function P_(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Wf=new Map;/**
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
 */function C_(n,t,e){if(!e)throw new j(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function lT(n,t,e,s){if(t===!0&&s===!0)throw new j(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Gf(n){if(!H.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Yf(n){if(H.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function mc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":G()}function Ue(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new j(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=mc(n);throw new j(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function uT(n,t){if(t<=0)throw new j(V.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
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
 */class Kf{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new j(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new j(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}lT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=P_((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class gc{constructor(t,e,s,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new j(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kf(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new kw;switch(s.type){case"firstParty":return new Cw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new j(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=Wf.get(e);s&&(z("ComponentProvider","Removing Datastore"),Wf.delete(e),s.terminate())}(this),Promise.resolve()}}function dT(n,t,e,s={}){var i;const r=(n=Ue(n,gc))._getSettings(),o=`${t}:${e}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&gi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=de.MOCK_USER;else{a=pg(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new j(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new de(l)}n._authCredentials=new Sw(new Ag(a,c))}}/**
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
 */class os{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new os(this.firestore,t,this._query)}}class xe{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new xe(this.firestore,t,this._key)}}class Qn extends os{constructor(t,e,s){super(t,e,Wu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new xe(this.firestore,null,new H(t))}withConverter(t){return new Qn(this.firestore,t,this._path)}}function wt(n,t,...e){if(n=Lt(n),C_("collection","path",t),n instanceof gc){const s=Tt.fromString(t,...e);return Yf(s),new Qn(n,null,s)}{if(!(n instanceof xe||n instanceof Qn))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Tt.fromString(t,...e));return Yf(s),new Qn(n.firestore,null,s)}}function Zt(n,t,...e){if(n=Lt(n),arguments.length===1&&(t=kg.newId()),C_("doc","path",t),n instanceof gc){const s=Tt.fromString(t,...e);return Gf(s),new xe(n,null,new H(s))}{if(!(n instanceof xe||n instanceof Qn))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Tt.fromString(t,...e));return Gf(s),new xe(n.firestore,n instanceof Qn?n.converter:null,new H(s))}}/**
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
 */class Qf{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new c_(this,"async_queue_retry"),this.Vu=()=>{const s=fl();s&&z("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=t;const e=fl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=fl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Tn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!eo(t))throw t;z("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(s=>{this.Eu=s,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw kn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.du=!1,s))));return this.mu=e,e}enqueueAfterDelay(t,e,s){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=rd.createAndSchedule(this,t,e,s,r=>this.yu(r));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class js extends gc{constructor(t,e,s,i){super(t,e,s,i),this.type="firestore",this._queue=new Qf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Qf(t),this._firestoreClient=void 0,await t}}}function hT(n,t){const e=typeof n=="object"?n:Fu(),s=typeof n=="string"?n:"(default)",i=rc(e,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=dg("firestore");r&&dT(i,...r)}return i}function ld(n){if(n._terminated)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||fT(n),n._firestoreClient}function fT(n){var t,e,s;const i=n._freezeSettings(),r=function(a,c,l,d){return new Hw(a,c,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,P_(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new iT(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class xi{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xi(ie.fromBase64String(t))}catch(e){throw new j(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new xi(ie.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class _c{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new j(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ne(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ud{constructor(t){this._methodName=t}}/**
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
 */class dd{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new j(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new j(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return lt(this._lat,t._lat)||lt(this._long,t._long)}}/**
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
 */class hd{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,t._values)}}/**
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
 */const pT=/^__.*__$/;class mT{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new rs(t,this.data,this.fieldMask,e,this.fieldTransforms):new no(t,this.data,e,this.fieldTransforms)}}class D_{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return new rs(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function O_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class fd{constructor(t,e,s,i,r,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new fd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.Ou(t),i}Nu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return La(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(O_(this.Cu)&&pT.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class gT{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||hc(t)}Qu(t,e,s,i=!1){return new fd({Cu:t,methodName:e,qu:s,path:ne.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yc(n){const t=n._freezeSettings(),e=hc(n._databaseId);return new gT(n._databaseId,!!t.ignoreUndefinedProperties,e)}function M_(n,t,e,s,i,r={}){const o=n.Qu(r.merge||r.mergeFields?2:0,t,e,i);pd("Data must be an object, but it was:",o,s);const a=N_(s,o);let c,l;if(r.merge)c=new Re(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const h of r.mergeFields){const f=ou(t,h,e);if(!o.contains(f))throw new j(V.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);V_(d,f)||d.push(f)}c=new Re(d),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new mT(new Ie(a),c,l)}class vc extends ud{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof vc}}function _T(n,t,e,s){const i=n.Qu(1,t,e);pd("Data must be an object, but it was:",i,s);const r=[],o=Ie.empty();Bs(s,(c,l)=>{const d=md(t,c,e);l=Lt(l);const h=i.Nu(d);if(l instanceof vc)r.push(d);else{const f=oo(l,h);f!=null&&(r.push(d),o.set(d,f))}});const a=new Re(r);return new D_(o,a,i.fieldTransforms)}function yT(n,t,e,s,i,r){const o=n.Qu(1,t,e),a=[ou(t,s,e)],c=[i];if(r.length%2!=0)throw new j(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(ou(t,r[f])),c.push(r[f+1]);const l=[],d=Ie.empty();for(let f=a.length-1;f>=0;--f)if(!V_(l,a[f])){const m=a[f];let _=c[f];_=Lt(_);const b=o.Nu(m);if(_ instanceof vc)l.push(m);else{const y=oo(_,b);y!=null&&(l.push(m),d.set(m,y))}}const h=new Re(l);return new D_(d,h,o.fieldTransforms)}function vT(n,t,e,s=!1){return oo(e,n.Qu(s?4:3,t))}function oo(n,t){if(L_(n=Lt(n)))return pd("Unsupported field value:",t,n),N_(n,t);if(n instanceof ud)return function(s,i){if(!O_(i.Cu))throw i.Bu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let c=oo(a,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(n,t)}return function(s,i){if((s=Lt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return hx(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Pt.fromDate(s);return{timestampValue:Oa(i.serializer,r)}}if(s instanceof Pt){const r=new Pt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Oa(i.serializer,r)}}if(s instanceof dd)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof xi)return{bytesValue:Zg(i.serializer,s._byteString)};if(s instanceof xe){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Xu(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof hd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return Gu(a.serializer,c)})}}}}}}(s,i);throw i.Bu(`Unsupported field value: ${mc(s)}`)}(n,t)}function N_(n,t){const e={};return Sg(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Bs(n,(s,i)=>{const r=oo(i,t.Mu(s));r!=null&&(e[s]=r)}),{mapValue:{fields:e}}}function L_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Pt||n instanceof dd||n instanceof xi||n instanceof xe||n instanceof ud||n instanceof hd)}function pd(n,t,e){if(!L_(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const s=mc(e);throw s==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+s)}}function ou(n,t,e){if((t=Lt(t))instanceof _c)return t._internalPath;if(typeof t=="string")return md(n,t);throw La("Field path arguments must be of type string or ",n,!1,void 0,e)}const bT=new RegExp("[~\\*/\\[\\]]");function md(n,t,e){if(t.search(bT)>=0)throw La(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new _c(...t.split("."))._internalPath}catch{throw La(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function La(n,t,e,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new j(V.INVALID_ARGUMENT,a+n+c)}function V_(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class F_{constructor(t,e,s,i,r){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new wT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(bc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class wT extends F_{data(){return super.data()}}function bc(n,t){return typeof t=="string"?md(n,t):t instanceof _c?t._internalPath:t._delegate._internalPath}/**
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
 */function xT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gd{}class _d extends gd{}function we(n,t,...e){let s=[];t instanceof gd&&s.push(t),s=s.concat(e),function(r){const o=r.filter(c=>c instanceof yd).length,a=r.filter(c=>c instanceof wc).length;if(o>1||o>0&&a>0)throw new j(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class wc extends _d{constructor(t,e,s){super(),this._field=t,this._op=e,this._value=s,this.type="where"}static _create(t,e,s){return new wc(t,e,s)}_apply(t){const e=this._parse(t);return $_(t._query,e),new os(t.firestore,t.converter,Xl(t._query,e))}_parse(t){const e=yc(t.firestore);return function(r,o,a,c,l,d,h){let f;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new j(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Jf(h,d);const m=[];for(const _ of h)m.push(Xf(c,r,_));f={arrayValue:{values:m}}}else f=Xf(c,r,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Jf(h,d),f=vT(a,o,h,d==="in"||d==="not-in");return Gt.create(l,d,f)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Kt(n,t,e){const s=t,i=bc("where",n);return wc._create(i,s,e)}class yd extends gd{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new yd(t,e)}_parse(t){const e=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return e.length===1?e[0]:Be.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,r){let o=i;const a=r.getFlattenedFilters();for(const c of a)$_(o,c),o=Xl(o,c)}(t._query,e),new os(t.firestore,t.converter,Xl(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vd extends _d{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new vd(t,e)}_apply(t){const e=function(i,r,o){if(i.startAt!==null)throw new j(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new j(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fr(r,o)}(t._query,this._field,this._direction);return new os(t.firestore,t.converter,function(i,r){const o=i.explicitOrderBy.concat([r]);return new Ri(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function au(n,t="asc"){const e=t,s=bc("orderBy",n);return vd._create(s,e)}class bd extends _d{constructor(t,e,s){super(),this.type=t,this._limit=e,this._limitType=s}static _create(t,e,s){return new bd(t,e,s)}_apply(t){return new os(t.firestore,t.converter,Pa(t._query,this._limit,this._limitType))}}function ua(n){return uT("limit",n),bd._create("limit",n,"F")}function Xf(n,t,e){if(typeof(e=Lt(e))=="string"){if(e==="")throw new j(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vg(t)&&e.indexOf("/")!==-1)throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const s=t.path.child(Tt.fromString(e));if(!H.isDocumentKey(s))throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return vf(n,new H(s))}if(e instanceof xe)return vf(n,e._key);throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mc(e)}.`)}function Jf(n,t){if(!Array.isArray(n)||n.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function $_(n,t){const e=function(i,r){for(const o of i)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class ET{convertValue(t,e="none"){switch(Ms(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Bt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Os(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw G()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return Bs(t,(i,r)=>{s[i]=this.convertValue(r,e)}),s}convertVectorValue(t){var e,s,i;const r=(i=(s=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>Bt(o.doubleValue));return new hd(r)}convertGeoPoint(t){return new dd(Bt(t.latitude),Bt(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=ju(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(Nr(t));default:return null}}convertTimestamp(t){const e=es(t);return new Pt(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=Tt.fromString(t);_t(r_(s));const i=new Lr(s.get(1),s.get(3)),r=new H(s.popFirst(5));return i.isEqual(e)||kn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
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
 */function B_(n,t,e){let s;return s=n?n.toFirestore(t):t,s}/**
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
 */class pr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class U_ extends F_{constructor(t,e,s,i,r,o){super(t,e,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new da(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(bc("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}}class da extends U_{data(t={}){return super.data(t)}}class TT{constructor(t,e,s,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new pr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new da(this._firestore,this._userDataWriter,s.key,s,new pr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new j(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new da(i._firestore,i._userDataWriter,a.doc.key,a.doc,new pr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new da(i._firestore,i._userDataWriter,a.doc.key,a.doc,new pr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,d=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:IT(a.type),doc:c,oldIndex:l,newIndex:d}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function IT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function Va(n){n=Ue(n,xe);const t=Ue(n.firestore,js);return aT(ld(t),n._key).then(e=>kT(t,n,e))}class j_ extends ET{constructor(t){super(),this.firestore=t}convertBytes(t){return new xi(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new xe(this.firestore,null,e)}}function Et(n){n=Ue(n,os);const t=Ue(n.firestore,js),e=ld(t),s=new j_(t);return xT(n._query),cT(e,n._query).then(i=>new TT(t,s,n,i))}function AT(n,t,e){n=Ue(n,xe);const s=Ue(n.firestore,js),i=B_(n.converter,t);return xc(s,[M_(yc(s),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Oe.none())])}function sn(n,t,e,...s){n=Ue(n,xe);const i=Ue(n.firestore,js),r=yc(i);let o;return o=typeof(t=Lt(t))=="string"||t instanceof _c?yT(r,"updateDoc",n._key,t,e,s):_T(r,"updateDoc",n._key,t),xc(i,[o.toMutation(n._key,Oe.exists(!0))])}function z_(n){return xc(Ue(n.firestore,js),[new Yu(n._key,Oe.none())])}function Di(n,t){const e=Ue(n.firestore,js),s=Zt(n),i=B_(n.converter,t);return xc(e,[M_(yc(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,Oe.exists(!1))]).then(()=>s)}function xc(n,t){return function(s,i){const r=new Tn;return s.asyncQueue.enqueueAndForget(async()=>QE(await oT(s),i,r)),r.promise}(ld(n),t)}function kT(n,t,e){const s=e.docs.get(t._key),i=new j_(n);return new U_(n,i,t._key,s,new pr(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Si=i})($s),Cs(new Zn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new js(new Rw(s.getProvider("auth-internal")),new Ow(s.getProvider("app-check-internal")),function(l,d){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new j(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lr(l.options.projectId,d)}(o,i),o);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Qe(pf,"4.7.3",t),Qe(pf,"4.7.3","esm2017")})();/**
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
 */const H_="firebasestorage.googleapis.com",q_="storageBucket",ST=2*60*1e3,RT=10*60*1e3,PT=1e3;/**
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
 */class Dt extends on{constructor(t,e,s=0){super(ml(t),`Firebase Storage: ${e} (${ml(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Dt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ml(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var At;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(At||(At={}));function ml(n){return"storage/"+n}function wd(){const n="An unknown error occurred, please check the error payload for server response.";return new Dt(At.UNKNOWN,n)}function CT(n){return new Dt(At.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function DT(n){return new Dt(At.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function OT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Dt(At.UNAUTHENTICATED,n)}function MT(){return new Dt(At.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function NT(n){return new Dt(At.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function W_(){return new Dt(At.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function G_(){return new Dt(At.CANCELED,"User canceled the upload/download.")}function LT(n){return new Dt(At.INVALID_URL,"Invalid URL '"+n+"'.")}function VT(n){return new Dt(At.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function FT(){return new Dt(At.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+q_+"' property when initializing the app?")}function Y_(){return new Dt(At.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $T(){return new Dt(At.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function BT(){return new Dt(At.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function UT(n){return new Dt(At.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function cu(n){return new Dt(At.INVALID_ARGUMENT,n)}function K_(){return new Dt(At.APP_DELETED,"The Firebase app was deleted.")}function jT(n){return new Dt(At.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ir(n,t){return new Dt(At.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function Ki(n){throw new Dt(At.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Pe{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=Pe.makeFromUrl(t,e)}catch{return new Pe(t,"")}if(s.path==="")return s;throw VT(t)}static makeFromUrl(t,e){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(R){R.path_=decodeURIComponent(R.path)}const d="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${d}/b/${i}/o${f}`,"i"),_={bucket:1,path:3},b=e===H_?"(?:storage.googleapis.com|storage.cloud.google.com)":e,y="([^?#]*)",T=new RegExp(`^https?://${b}/${i}/${y}`,"i"),C=[{regex:a,indices:c,postModify:r},{regex:m,indices:_,postModify:l},{regex:T,indices:{bucket:1,path:2},postModify:l}];for(let R=0;R<C.length;R++){const D=C[R],O=D.regex.exec(t);if(O){const x=O[D.indices.bucket];let v=O[D.indices.path];v||(v=""),s=new Pe(x,v),D.postModify(s);break}}if(s==null)throw LT(t);return s}}class zT{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function HT(n,t,e){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function d(...y){l||(l=!0,t.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,n(m,c())},y)}function f(){r&&clearTimeout(r)}function m(y,...T){if(l){f();return}if(y){f(),d.call(null,y,...T);return}if(c()||o){f(),d.call(null,y,...T);return}s<64&&(s*=2);let C;a===1?(a=2,C=0):C=(s+Math.random())*1e3,h(C)}let _=!1;function b(y){_||(_=!0,f(),!l&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,b(!0)},e),b}function qT(n){n(!1)}/**
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
 */function WT(n){return n!==void 0}function GT(n){return typeof n=="function"}function YT(n){return typeof n=="object"&&!Array.isArray(n)}function Ec(n){return typeof n=="string"||n instanceof String}function Zf(n){return xd()&&n instanceof Blob}function xd(){return typeof Blob<"u"}function tp(n,t,e,s){if(s<t)throw cu(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw cu(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
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
 */function ao(n,t,e){let s=t;return e==null&&(s=`https://${t}`),`${e}://${s}/v0${n}`}function Q_(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const i=t(s)+"="+t(n[s]);e=e+i+"&"}return e=e.slice(0,-1),e}var As;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(As||(As={}));/**
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
 */function X_(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=t.indexOf(n)!==-1;return e||i||r}/**
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
 */class KT{constructor(t,e,s,i,r,o,a,c,l,d,h,f=!0){this.url_=t,this.method_=e,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,_)=>{this.resolve_=m,this.reject_=_,this.start_()})}start_(){const t=(s,i)=>{if(i){s(!1,new Uo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===As.NO_ERROR,c=r.getStatus();if(!a||X_(c,this.additionalRetryCodes_)&&this.retry){const d=r.getErrorCode()===As.ABORT;s(!1,new Uo(!1,null,d));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Uo(l,r))})},e=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());WT(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=wd();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?K_():G_();o(c)}else{const c=W_();o(c)}};this.canceled_?e(!1,new Uo(!1,null,!0)):this.backoffId_=HT(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&qT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Uo{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function QT(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function XT(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function JT(n,t){t&&(n["X-Firebase-GMPID"]=t)}function ZT(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function tI(n,t,e,s,i,r,o=!0){const a=Q_(n.urlParams),c=n.url+a,l=Object.assign({},n.headers);return JT(l,t),QT(l,e),XT(l,r),ZT(l,s),new KT(c,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
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
 */function eI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function nI(...n){const t=eI();if(t!==void 0){const e=new t;for(let s=0;s<n.length;s++)e.append(n[s]);return e.getBlob()}else{if(xd())return new Blob(n);throw new Dt(At.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function sI(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function iI(n){if(typeof atob>"u")throw UT("base-64");return atob(n)}/**
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
 */const Ke={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gl{constructor(t,e){this.data=t,this.contentType=e||null}}function rI(n,t){switch(n){case Ke.RAW:return new gl(J_(t));case Ke.BASE64:case Ke.BASE64URL:return new gl(Z_(n,t));case Ke.DATA_URL:return new gl(aI(t),cI(t))}throw wd()}function J_(n){const t=[];for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const r=s,o=n.charCodeAt(++e);s=65536|(r&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function oI(n){let t;try{t=decodeURIComponent(n)}catch{throw Ir(Ke.DATA_URL,"Malformed data URL.")}return J_(t)}function Z_(n,t){switch(n){case Ke.BASE64:{const i=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(i||r)throw Ir(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ke.BASE64URL:{const i=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(i||r)throw Ir(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=iI(t)}catch(i){throw i.message.includes("polyfill")?i:Ir(n,"Invalid character found")}const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}class ty{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw Ir(Ke.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;s!=null&&(this.base64=lI(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function aI(n){const t=new ty(n);return t.base64?Z_(Ke.BASE64,t.rest):oI(t.rest)}function cI(n){return new ty(n).contentType}function lI(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
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
 */class Vn{constructor(t,e){let s=0,i="";Zf(t)?(this.data_=t,s=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(Zf(this.data_)){const s=this.data_,i=sI(s,t,e);return i===null?null:new Vn(i)}else{const s=new Uint8Array(this.data_.buffer,t,e-t);return new Vn(s,!0)}}static getBlob(...t){if(xd()){const e=t.map(s=>s instanceof Vn?s.data_:s);return new Vn(nI.apply(null,e))}else{const e=t.map(o=>Ec(o)?rI(Ke.RAW,o).data:o.data_);let s=0;e.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return e.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Vn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function ey(n){let t;try{t=JSON.parse(n)}catch{return null}return YT(t)?t:null}/**
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
 */function uI(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function dI(n,t){const e=t.split("/").filter(s=>s.length>0).join("/");return n.length===0?e:n+"/"+e}function ny(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
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
 */function hI(n,t){return t}class be{constructor(t,e,s,i){this.server=t,this.local=e||t,this.writable=!!s,this.xform=i||hI}}let jo=null;function fI(n){return!Ec(n)||n.length<2?n:ny(n)}function sy(){if(jo)return jo;const n=[];n.push(new be("bucket")),n.push(new be("generation")),n.push(new be("metageneration")),n.push(new be("name","fullPath",!0));function t(r,o){return fI(o)}const e=new be("name");e.xform=t,n.push(e);function s(r,o){return o!==void 0?Number(o):o}const i=new be("size");return i.xform=s,n.push(i),n.push(new be("timeCreated")),n.push(new be("updated")),n.push(new be("md5Hash",null,!0)),n.push(new be("cacheControl",null,!0)),n.push(new be("contentDisposition",null,!0)),n.push(new be("contentEncoding",null,!0)),n.push(new be("contentLanguage",null,!0)),n.push(new be("contentType",null,!0)),n.push(new be("metadata","customMetadata",!0)),jo=n,jo}function pI(n,t){function e(){const s=n.bucket,i=n.fullPath,r=new Pe(s,i);return t._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:e})}function mI(n,t,e){const s={};s.type="file";const i=e.length;for(let r=0;r<i;r++){const o=e[r];s[o.local]=o.xform(s,t[o.server])}return pI(s,n),s}function iy(n,t,e){const s=ey(t);return s===null?null:mI(n,s,e)}function gI(n,t,e,s){const i=ey(t);if(i===null||!Ec(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(l=>{const d=n.bucket,h=n.fullPath,f="/b/"+o(d)+"/o/"+o(h),m=ao(f,e,s),_=Q_({alt:"media",token:l});return m+_})[0]}function ry(n,t){const e={},s=t.length;for(let i=0;i<s;i++){const r=t[i];r.writable&&(e[r.server]=n[r.local])}return JSON.stringify(e)}class Oi{constructor(t,e,s,i){this.url=t,this.method=e,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function In(n){if(!n)throw wd()}function Ed(n,t){function e(s,i){const r=iy(n,i,t);return In(r!==null),r}return e}function _I(n,t){function e(s,i){const r=iy(n,i,t);return In(r!==null),gI(r,i,n.host,n._protocol)}return e}function co(n){function t(e,s){let i;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?i=MT():i=OT():e.getStatus()===402?i=DT(n.bucket):e.getStatus()===403?i=NT(n.path):i=s,i.status=e.getStatus(),i.serverResponse=s.serverResponse,i}return t}function oy(n){const t=co(n);function e(s,i){let r=t(s,i);return s.getStatus()===404&&(r=CT(n.path)),r.serverResponse=i.serverResponse,r}return e}function yI(n,t,e){const s=t.fullServerUrl(),i=ao(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new Oi(i,r,Ed(n,e),o);return a.errorHandler=oy(t),a}function vI(n,t,e){const s=t.fullServerUrl(),i=ao(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new Oi(i,r,_I(n,e),o);return a.errorHandler=oy(t),a}function bI(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function ay(n,t,e){const s=Object.assign({},e);return s.fullPath=n.path,s.size=t.size(),s.contentType||(s.contentType=bI(null,t)),s}function wI(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let R=0;R<2;R++)C=C+Math.random().toString().slice(2);return C}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=ay(t,s,i),d=ry(l,e),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",m=Vn.getBlob(h,s,f);if(m===null)throw Y_();const _={name:l.fullPath},b=ao(r,n.host,n._protocol),y="POST",T=n.maxUploadRetryTime,I=new Oi(b,y,Ed(n,e),T);return I.urlParams=_,I.headers=o,I.body=m.uploadData(),I.errorHandler=co(t),I}class Fa{constructor(t,e,s,i){this.current=t,this.total=e,this.finalized=!!s,this.metadata=i||null}}function Td(n,t){let e=null;try{e=n.getResponseHeader("X-Goog-Upload-Status")}catch{In(!1)}return In(!!e&&(t||["active"]).indexOf(e)!==-1),e}function xI(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o=ay(t,s,i),a={name:o.fullPath},c=ao(r,n.host,n._protocol),l="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=ry(o,e),f=n.maxUploadRetryTime;function m(b){Td(b);let y;try{y=b.getResponseHeader("X-Goog-Upload-URL")}catch{In(!1)}return In(Ec(y)),y}const _=new Oi(c,l,m,f);return _.urlParams=a,_.headers=d,_.body=h,_.errorHandler=co(t),_}function EI(n,t,e,s){const i={"X-Goog-Upload-Command":"query"};function r(l){const d=Td(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{In(!1)}h||In(!1);const f=Number(h);return In(!isNaN(f)),new Fa(f,s.size(),d==="final")}const o="POST",a=n.maxUploadRetryTime,c=new Oi(e,o,r,a);return c.headers=i,c.errorHandler=co(t),c}const ep=256*1024;function TI(n,t,e,s,i,r,o,a){const c=new Fa(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw $T();const l=c.total-c.current;let d=l;i>0&&(d=Math.min(d,i));const h=c.current,f=h+d;let m="";d===0?m="finalize":l===d?m="upload, finalize":m="upload";const _={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${c.current}`},b=s.slice(h,f);if(b===null)throw Y_();function y(R,D){const O=Td(R,["active","final"]),x=c.current+d,v=s.size();let w;return O==="final"?w=Ed(t,r)(R,D):w=null,new Fa(x,v,O==="final",w)}const T="POST",I=t.maxUploadRetryTime,C=new Oi(e,T,y,I);return C.headers=_,C.body=b.uploadData(),C.progressCallback=a||null,C.errorHandler=co(n),C}const Te={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function _l(n){switch(n){case"running":case"pausing":case"canceling":return Te.RUNNING;case"paused":return Te.PAUSED;case"success":return Te.SUCCESS;case"canceled":return Te.CANCELED;case"error":return Te.ERROR;default:return Te.ERROR}}/**
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
 */class II{constructor(t,e,s){if(GT(t)||e!=null||s!=null)this.next=t,this.error=e??void 0,this.complete=s??void 0;else{const r=t;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
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
 */function Js(n){return(...t)=>{Promise.resolve().then(()=>n(...t))}}class AI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=As.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=As.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=As.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,s,i){if(this.sent_)throw Ki("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ki("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ki("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ki("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ki("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class kI extends AI{initXhr(){this.xhr_.responseType="text"}}function oi(){return new kI}/**
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
 */class SI{constructor(t,e,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=s,this._mappings=sy(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(At.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(X_(i.status,[]))if(r)i=W_();else{this.sleepTime=Math.max(this.sleepTime*2,PT),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(At.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,s])=>{switch(this._state){case"running":t(e,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const s=xI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,oi,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,s)=>{const i=EI(this._ref.storage,this._ref._location,t,this._blob),r=this._ref.storage._makeRequest(i,oi,e,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=ep*this._chunkMultiplier,e=new Fa(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=TI(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,oi,i,r,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){ep*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const s=yI(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,oi,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const s=wI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,oi,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e=this._state==="paused";this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=G_(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=_l(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,s,i){const r=new II(e||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);e!==-1&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(_l(this._state)){case Te.SUCCESS:Js(this._resolve.bind(null,this.snapshot))();break;case Te.CANCELED:case Te.ERROR:const e=this._reject;Js(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(_l(this._state)){case Te.RUNNING:case Te.PAUSED:t.next&&Js(t.next.bind(t,this.snapshot))();break;case Te.SUCCESS:t.complete&&Js(t.complete.bind(t))();break;case Te.CANCELED:case Te.ERROR:t.error&&Js(t.error.bind(t,this._error))();break;default:t.error&&Js(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
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
 */class Ns{constructor(t,e){this._service=t,e instanceof Pe?this._location=e:this._location=Pe.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Ns(t,e)}get root(){const t=new Pe(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ny(this._location.path)}get storage(){return this._service}get parent(){const t=uI(this._location.path);if(t===null)return null;const e=new Pe(this._location.bucket,t);return new Ns(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw jT(t)}}function RI(n,t,e){return n._throwIfRoot("uploadBytesResumable"),new SI(n,new Vn(t),e)}function PI(n){n._throwIfRoot("getDownloadURL");const t=vI(n.storage,n._location,sy());return n.storage.makeRequestWithTokens(t,oi).then(e=>{if(e===null)throw BT();return e})}function CI(n,t){const e=dI(n._location.path,t),s=new Pe(n._location.bucket,e);return new Ns(n.storage,s)}/**
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
 */function DI(n){return/^[A-Za-z]+:\/\//.test(n)}function OI(n,t){return new Ns(n,t)}function cy(n,t){if(n instanceof Id){const e=n;if(e._bucket==null)throw FT();const s=new Ns(e,e._bucket);return t!=null?cy(s,t):s}else return t!==void 0?CI(n,t):n}function MI(n,t){if(t&&DI(t)){if(n instanceof Id)return OI(n,t);throw cu("To use ref(service, url), the first argument must be a Storage instance.")}else return cy(n,t)}function np(n,t){const e=t==null?void 0:t[q_];return e==null?null:Pe.makeFromBucketSpec(e,n)}function NI(n,t,e,s={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:pg(i,n.app.options.projectId))}class Id{constructor(t,e,s,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=H_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ST,this._maxUploadRetryTime=RT,this._requests=new Set,i!=null?this._bucket=Pe.makeFromBucketSpec(i,this._host):this._bucket=np(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Pe.makeFromBucketSpec(this._url,t):this._bucket=np(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){tp("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){tp("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ns(this,t)}_makeRequest(t,e,s,i,r=!0){if(this._deleted)return new zT(K_());{const o=tI(t,this._appId,s,i,e,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,e){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,i).getPromise()}}const sp="@firebase/storage",ip="0.13.2";/**
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
 */const ly="storage";function LI(n,t,e){return n=Lt(n),RI(n,t,e)}function VI(n){return n=Lt(n),PI(n)}function FI(n,t){return n=Lt(n),MI(n,t)}function $I(n=Fu(),t){n=Lt(n);const s=rc(n,ly).getImmediate({identifier:t}),i=dg("storage");return i&&BI(s,...i),s}function BI(n,t,e,s={}){NI(n,t,e,s)}function UI(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Id(e,s,i,t,$s)}function jI(){Cs(new Zn(ly,UI,"PUBLIC").setMultipleInstances(!0)),Qe(sp,ip,""),Qe(sp,ip,"esm2017")}jI();function Ad(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(e[s[i]]=n[s[i]]);return e}function uy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zI=uy,dy=new Jr("auth","Firebase",uy());/**
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
 */const $a=new Lu("@firebase/auth");function HI(n,...t){$a.logLevel<=rt.WARN&&$a.warn(`Auth (${$s}): ${n}`,...t)}function ha(n,...t){$a.logLevel<=rt.ERROR&&$a.error(`Auth (${$s}): ${n}`,...t)}/**
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
 */function je(n,...t){throw kd(n,...t)}function Ze(n,...t){return kd(n,...t)}function hy(n,t,e){const s=Object.assign(Object.assign({},zI()),{[t]:e});return new Jr("auth","Firebase",s).create(t,{appName:n.name})}function Xn(n){return hy(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kd(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return dy.create(n,...t)}function q(n,t,...e){if(!n)throw kd(t,...e)}function yn(n){const t="INTERNAL ASSERTION FAILED: "+n;throw ha(t),new Error(t)}function Rn(n,t){n||yn(t)}/**
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
 */function lu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function qI(){return rp()==="http:"||rp()==="https:"}function rp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function WI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qI()||r0()||"connection"in navigator)?navigator.onLine:!0}function GI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class lo{constructor(t,e){this.shortDelay=t,this.longDelay=e,Rn(e>t,"Short delay should be less than long delay!"),this.isMobile=n0()||o0()}get(){return WI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sd(n,t){Rn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class fy{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const YI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const KI=new lo(3e4,6e4);function as(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Pn(n,t,e,s,i={}){return py(n,i,async()=>{let r={},o={};s&&(t==="GET"?o=s:r={body:JSON.stringify(s)});const a=Zr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:t,headers:c},r);return i0()||(l.referrerPolicy="no-referrer"),fy.fetch()(my(n,n.config.apiHost,e,a),l)})}async function py(n,t,e){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},YI),t);try{const i=new XI(n),r=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw zo(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw zo(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw zo(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw zo(n,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw hy(n,d,l);je(n,d)}}catch(i){if(i instanceof on)throw i;je(n,"network-request-failed",{message:String(i)})}}async function Tc(n,t,e,s,i={}){const r=await Pn(n,t,e,s,i);return"mfaPendingCredential"in r&&je(n,"multi-factor-auth-required",{_serverResponse:r}),r}function my(n,t,e,s){const i=`${t}${e}?${s}`;return n.config.emulator?Sd(n.config,i):`${n.config.apiScheme}://${i}`}function QI(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XI{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(Ze(this.auth,"network-request-failed")),KI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zo(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const i=Ze(n,t,s);return i.customData._tokenResponse=e,i}function op(n){return n!==void 0&&n.enterprise!==void 0}class JI{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return QI(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function ZI(n,t){return Pn(n,"GET","/v2/recaptchaConfig",as(n,t))}/**
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
 */async function tA(n,t){return Pn(n,"POST","/v1/accounts:delete",t)}async function gy(n,t){return Pn(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ar(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function eA(n,t=!1){const e=Lt(n),s=await e.getIdToken(t),i=Rd(s);q(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ar(yl(i.auth_time)),issuedAtTime:Ar(yl(i.iat)),expirationTime:Ar(yl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function yl(n){return Number(n)*1e3}function Rd(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return ha("JWT malformed, contained fewer than 3 sections"),null;try{const i=lg(e);return i?JSON.parse(i):(ha("Failed to decode base64 JWT payload"),null)}catch(i){return ha("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ap(n){const t=Rd(n);return q(t,"internal-error"),q(typeof t.exp<"u","internal-error"),q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ur(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof on&&nA(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function nA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class sA{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class uu{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ar(this.lastLoginAt),this.creationTime=Ar(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ba(n){var t;const e=n.auth,s=await n.getIdToken(),i=await Ur(n,gy(e,{idToken:s}));q(i==null?void 0:i.users.length,e,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?_y(r.providerUserInfo):[],a=rA(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new uu(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function iA(n){const t=Lt(n);await Ba(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function rA(n,t){return[...n.filter(s=>!t.some(i=>i.providerId===s.providerId)),...t]}function _y(n){return n.map(t=>{var{providerId:e}=t,s=Ad(t,["providerId"]);return{providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function oA(n,t){const e=await py(n,{},async()=>{const s=Zr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=my(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function aA(n,t){return Pn(n,"POST","/v2/accounts:revokeToken",as(n,t))}/**
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
 */class ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){q(t.idToken,"internal-error"),q(typeof t.idToken<"u","internal-error"),q(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ap(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){q(t.length!==0,"internal-error");const e=ap(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:i,expiresIn:r}=await oA(t,e);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:i,expirationTime:r}=e,o=new ui;return s&&(q(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),i&&(q(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),r&&(q(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ui,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
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
 */function Mn(n,t){q(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class vn{constructor(t){var{uid:e,auth:s,stsTokenManager:i}=t,r=Ad(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new uu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Ur(this,this.stsTokenManager.getToken(this.auth,t));return q(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return eA(this,t)}reload(){return iA(this)}_assign(t){this!==t&&(q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new vn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await Ba(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(Xn(this.auth));const t=await this.getIdToken();return await Ur(this,tA(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var s,i,r,o,a,c,l,d;const h=(s=e.displayName)!==null&&s!==void 0?s:void 0,f=(i=e.email)!==null&&i!==void 0?i:void 0,m=(r=e.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=e.photoURL)!==null&&o!==void 0?o:void 0,b=(a=e.tenantId)!==null&&a!==void 0?a:void 0,y=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=e.createdAt)!==null&&l!==void 0?l:void 0,I=(d=e.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:C,emailVerified:R,isAnonymous:D,providerData:O,stsTokenManager:x}=e;q(C&&x,t,"internal-error");const v=ui.fromJSON(this.name,x);q(typeof C=="string",t,"internal-error"),Mn(h,t.name),Mn(f,t.name),q(typeof R=="boolean",t,"internal-error"),q(typeof D=="boolean",t,"internal-error"),Mn(m,t.name),Mn(_,t.name),Mn(b,t.name),Mn(y,t.name),Mn(T,t.name),Mn(I,t.name);const w=new vn({uid:C,auth:t,email:f,emailVerified:R,displayName:h,isAnonymous:D,photoURL:_,phoneNumber:m,tenantId:b,stsTokenManager:v,createdAt:T,lastLoginAt:I});return O&&Array.isArray(O)&&(w.providerData=O.map(A=>Object.assign({},A))),y&&(w._redirectEventId=y),w}static async _fromIdTokenResponse(t,e,s=!1){const i=new ui;i.updateFromServerResponse(e);const r=new vn({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:s});return await Ba(r),r}static async _fromGetAccountInfoResponse(t,e,s){const i=e.users[0];q(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?_y(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new ui;a.updateFromIdToken(s);const c=new vn({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new uu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
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
 */const cp=new Map;function bn(n){Rn(n instanceof Function,"Expected a class definition");let t=cp.get(n);return t?(Rn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,cp.set(n,t),t)}/**
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
 */class yy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}yy.type="NONE";const lp=yy;/**
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
 */function fa(n,t,e){return`firebase:${n}:${t}:${e}`}class di{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=fa(this.userKey,i.apiKey,r),this.fullPersistenceKey=fa("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?vn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new di(bn(lp),t,s);const i=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||bn(lp);const o=fa(s,t.config.apiKey,t.name);let a=null;for(const l of e)try{const d=await l._get(o);if(d){const h=vn._fromJSON(t,d);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new di(r,t,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new di(r,t,s))}}/**
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
 */function up(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(xy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(vy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ty(t))return"Blackberry";if(Iy(t))return"Webos";if(by(t))return"Safari";if((t.includes("chrome/")||wy(t))&&!t.includes("edge/"))return"Chrome";if(Ey(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function vy(n=me()){return/firefox\//i.test(n)}function by(n=me()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function wy(n=me()){return/crios\//i.test(n)}function xy(n=me()){return/iemobile/i.test(n)}function Ey(n=me()){return/android/i.test(n)}function Ty(n=me()){return/blackberry/i.test(n)}function Iy(n=me()){return/webos/i.test(n)}function Pd(n=me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function cA(n=me()){var t;return Pd(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function lA(){return a0()&&document.documentMode===10}function Ay(n=me()){return Pd(n)||Ey(n)||Iy(n)||Ty(n)||/windows phone/i.test(n)||xy(n)}/**
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
 */function ky(n,t=[]){let e;switch(n){case"Browser":e=up(me());break;case"Worker":e=`${up(me())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${$s}/${s}`}/**
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
 */class uA{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const s=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});s.onAbort=e,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const s of this.queue)await s(t),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function dA(n,t={}){return Pn(n,"GET","/v2/passwordPolicy",as(n,t))}/**
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
 */const hA=6;class fA{constructor(t){var e,s,i,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:hA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let i=0;i<t.length;i++)s=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
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
 */class pA{constructor(t,e,s,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dp(this),this.idTokenSubscription=new dp(this),this.beforeStateQueue=new uA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=bn(e)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await di.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await gy(this,{idToken:t}),s=await vn._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(_n(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Ba(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=GI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(_n(this.app))return Promise.reject(Xn(this));const e=t?Lt(t):null;return e&&q(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return _n(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await dA(this),e=new fA(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Jr("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await aA(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&bn(t)||this._popupRedirectResolver;q(e,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[bn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,s;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,i){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,s,i);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ky(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(e["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&HI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function zs(n){return Lt(n)}class dp{constructor(t){this.auth=t,this.observer=null,this.addObserver=m0(e=>this.observer=e)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mA(n){Ic=n}function Sy(n){return Ic.loadJS(n)}function gA(){return Ic.recaptchaEnterpriseScript}function _A(){return Ic.gapiScript}function yA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const vA="recaptcha-enterprise",bA="NO_RECAPTCHA";class wA{constructor(t){this.type=vA,this.auth=zs(t)}async verify(t="verify",e=!1){async function s(r){if(!e){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{ZI(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new JI(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;op(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:t}).then(l=>{o(l)}).catch(()=>{o(bA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!e&&op(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=gA();c.length!==0&&(c+=a),Sy(c).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function hp(n,t,e,s=!1){const i=new wA(n);let r;try{r=await i.verify(e)}catch{r=await i.verify(e,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function du(n,t,e,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await hp(n,t,e,e==="getOobCode");return s(n,r)}else return s(n,t).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await hp(n,t,e,e==="getOobCode");return s(n,o)}else return Promise.reject(r)})}/**
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
 */function xA(n,t){const e=rc(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),r=e.getOptions();if(Aa(r,t??{}))return i;je(i,"already-initialized")}return e.initialize({options:t})}function EA(n,t){const e=(t==null?void 0:t.persistence)||[],s=(Array.isArray(e)?e:[e]).map(bn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function TA(n,t,e){const s=zs(n);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!1,r=Ry(t),{host:o,port:a}=IA(t),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),AA()}function Ry(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function IA(n){const t=Ry(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:fp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:fp(o)}}}function fp(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function AA(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Cd{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return yn("not implemented")}_getIdTokenResponse(t){return yn("not implemented")}_linkToIdToken(t,e){return yn("not implemented")}_getReauthenticationResolver(t){return yn("not implemented")}}async function kA(n,t){return Pn(n,"POST","/v1/accounts:signUp",t)}/**
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
 */async function SA(n,t){return Tc(n,"POST","/v1/accounts:signInWithPassword",as(n,t))}async function RA(n,t){return Pn(n,"POST","/v1/accounts:sendOobCode",as(n,t))}async function PA(n,t){return RA(n,t)}/**
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
 */async function CA(n,t){return Tc(n,"POST","/v1/accounts:signInWithEmailLink",as(n,t))}async function DA(n,t){return Tc(n,"POST","/v1/accounts:signInWithEmailLink",as(n,t))}/**
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
 */class jr extends Cd{constructor(t,e,s,i=null){super("password",s),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new jr(t,e,"password")}static _fromEmailAndCode(t,e,s=null){return new jr(t,e,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return du(t,e,"signInWithPassword",SA);case"emailLink":return CA(t,{email:this._email,oobCode:this._password});default:je(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const s={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return du(t,s,"signUpPassword",kA);case"emailLink":return DA(t,{idToken:e,email:this._email,oobCode:this._password});default:je(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function hi(n,t){return Tc(n,"POST","/v1/accounts:signInWithIdp",as(n,t))}/**
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
 */const OA="http://localhost";class Ls extends Cd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ls(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):je("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:i}=e,r=Ad(e,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ls(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return hi(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,hi(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,hi(t,e)}buildRequest(){const t={requestUri:OA,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Zr(e)}return t}}/**
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
 */function MA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NA(n){const t=lr(ur(n)).link,e=t?lr(ur(t)).deep_link_id:null,s=lr(ur(n)).deep_link_id;return(s?lr(ur(s)).link:null)||s||e||t||n}class Dd{constructor(t){var e,s,i,r,o,a;const c=lr(ur(t)),l=(e=c.apiKey)!==null&&e!==void 0?e:null,d=(s=c.oobCode)!==null&&s!==void 0?s:null,h=MA((i=c.mode)!==null&&i!==void 0?i:null);q(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=NA(t);try{return new Dd(e)}catch{return null}}}/**
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
 */class Mi{constructor(){this.providerId=Mi.PROVIDER_ID}static credential(t,e){return jr._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const s=Dd.parseLink(e);return q(s,"argument-error"),jr._fromEmailAndCode(t,s.code,s.tenantId)}}Mi.PROVIDER_ID="password";Mi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Py{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class uo extends Py{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fn extends uo{constructor(){super("facebook.com")}static credential(t){return Ls._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Fn.credentialFromTaggedObject(t)}static credentialFromError(t){return Fn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Fn.credential(t.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
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
 */class $n extends uo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ls._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return $n.credentialFromTaggedObject(t)}static credentialFromError(t){return $n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return $n.credential(e,s)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
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
 */class Bn extends uo{constructor(){super("github.com")}static credential(t){return Ls._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bn.credentialFromTaggedObject(t)}static credentialFromError(t){return Bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Bn.credential(t.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
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
 */class Un extends uo{constructor(){super("twitter.com")}static credential(t,e){return Ls._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Un.credentialFromTaggedObject(t)}static credentialFromError(t){return Un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return Un.credential(e,s)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
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
 */class Ei{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,i=!1){const r=await vn._fromIdTokenResponse(t,s,i),o=pp(s);return new Ei({user:r,providerId:o,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const i=pp(s);return new Ei({user:t,providerId:i,_tokenResponse:s,operationType:e})}}function pp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ua extends on{constructor(t,e,s,i){var r;super(e.code,e.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ua.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,i){return new Ua(t,e,s,i)}}function Cy(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ua._fromErrorAndOperation(n,r,t,s):r})}async function LA(n,t,e=!1){const s=await Ur(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Ei._forOperation(n,"link",s)}/**
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
 */async function VA(n,t,e=!1){const{auth:s}=n;if(_n(s.app))return Promise.reject(Xn(s));const i="reauthenticate";try{const r=await Ur(n,Cy(s,i,t,n),e);q(r.idToken,s,"internal-error");const o=Rd(r.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(n.uid===a,s,"user-mismatch"),Ei._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&je(s,"user-mismatch"),r}}/**
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
 */async function Dy(n,t,e=!1){if(_n(n.app))return Promise.reject(Xn(n));const s="signIn",i=await Cy(n,s,t),r=await Ei._fromIdTokenResponse(n,s,i);return e||await n._updateCurrentUser(r.user),r}async function FA(n,t){return Dy(zs(n),t)}/**
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
 */async function $A(n){const t=zs(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function BA(n,t,e){const s=zs(n);await du(s,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",PA)}function UA(n,t,e){return _n(n.app)?Promise.reject(Xn(n)):FA(Lt(n),Mi.credential(t,e)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&$A(n),s})}function jA(n,t,e,s){return Lt(n).onIdTokenChanged(t,e,s)}function zA(n,t,e){return Lt(n).beforeAuthStateChanged(t,e)}function HA(n,t,e,s){return Lt(n).onAuthStateChanged(t,e,s)}function qA(n){return Lt(n).signOut()}const ja="__sak";/**
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
 */class Oy{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ja,"1"),this.storage.removeItem(ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const WA=1e3,GA=10;class My extends Oy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ay(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),i=this.localCache[e];s!==i&&t(e,i,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!e&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);lA()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,GA):i()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},WA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}My.type="LOCAL";const YA=My;/**
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
 */class Ny extends Oy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ny.type="SESSION";const Ly=Ny;/**
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
 */function KA(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Ac{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const s=new Ac(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:i,data:r}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(e.origin,r)),c=await KA(a);e.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ac.receivers=[];/**
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
 */function Od(n="",t=10){let e="";for(let s=0;s<t;s++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class QA{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Od("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tn(){return window}function XA(n){tn().location.href=n}/**
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
 */function Vy(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function JA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function tk(){return Vy()?self:null}/**
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
 */const Fy="firebaseLocalStorageDb",ek=1,za="firebaseLocalStorage",$y="fbase_key";class ho{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function kc(n,t){return n.transaction([za],t?"readwrite":"readonly").objectStore(za)}function nk(){const n=indexedDB.deleteDatabase(Fy);return new ho(n).toPromise()}function hu(){const n=indexedDB.open(Fy,ek);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(za,{keyPath:$y})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(za)?t(s):(s.close(),await nk(),t(await hu()))})})}async function mp(n,t,e){const s=kc(n,!0).put({[$y]:t,value:e});return new ho(s).toPromise()}async function sk(n,t){const e=kc(n,!1).get(t),s=await new ho(e).toPromise();return s===void 0?null:s.value}function gp(n,t){const e=kc(n,!0).delete(t);return new ho(e).toPromise()}const ik=800,rk=3;class By{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hu(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>rk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ac._getInstance(tk()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await JA(),!this.activeServiceWorker)return;this.sender=new QA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((e=s[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ZA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await hu();return await mp(t,ja,"1"),await gp(t,ja),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>mp(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>sk(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>gp(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const r=kc(i,!1).getAll();return new ho(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:i,value:r}of t)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ik)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}By.type="LOCAL";const ok=By;new lo(3e4,6e4);/**
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
 */function ak(n,t){return t?bn(t):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Md extends Cd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return hi(t,this._buildIdpRequest())}_linkToIdToken(t,e){return hi(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return hi(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function ck(n){return Dy(n.auth,new Md(n),n.bypassAuthState)}function lk(n){const{auth:t,user:e}=n;return q(e,t,"internal-error"),VA(e,new Md(n),n.bypassAuthState)}async function uk(n){const{auth:t,user:e}=n;return q(e,t,"internal-error"),LA(e,new Md(n),n.bypassAuthState)}/**
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
 */class Uy{constructor(t,e,s,i,r=!1){this.auth=t,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ck;case"linkViaPopup":case"linkViaRedirect":return uk;case"reauthViaPopup":case"reauthViaRedirect":return lk;default:je(this.auth,"internal-error")}}resolve(t){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dk=new lo(2e3,1e4);class ci extends Uy{constructor(t,e,s,i,r){super(t,e,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return q(t,this.auth,"internal-error"),t}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const t=Od();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,s;if(!((s=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,dk.get())};t()}}ci.currentPopupAction=null;/**
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
 */const hk="pendingRedirect",pa=new Map;class fk extends Uy{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=pa.get(this.auth._key());if(!t){try{const s=await pk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(e){t=()=>Promise.reject(e)}pa.set(this.auth._key(),t)}return this.bypassAuthState||pa.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pk(n,t){const e=_k(t),s=gk(n);if(!await s._isAvailable())return!1;const i=await s._get(e)==="true";return await s._remove(e),i}function mk(n,t){pa.set(n._key(),t)}function gk(n){return bn(n._redirectPersistence)}function _k(n){return fa(hk,n.config.apiKey,n.name)}async function yk(n,t,e=!1){if(_n(n.app))return Promise.reject(Xn(n));const s=zs(n),i=ak(s,t),o=await new fk(s,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
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
 */const vk=10*60*1e3;class bk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!wk(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var s;if(t.error&&!jy(t)){const i=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";e.onError(Ze(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=vk&&this.cachedEventUids.clear(),this.cachedEventUids.has(_p(t))}saveEventToCache(t){this.cachedEventUids.add(_p(t)),this.lastProcessedEventTime=Date.now()}}function _p(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function jy({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function wk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jy(n);default:return!1}}/**
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
 */async function xk(n,t={}){return Pn(n,"GET","/v1/projects",t)}/**
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
 */const Ek=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tk=/^https?/;async function Ik(n){if(n.config.emulator)return;const{authorizedDomains:t}=await xk(n);for(const e of t)try{if(Ak(e))return}catch{}je(n,"unauthorized-domain")}function Ak(n){const t=lu(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===s}if(!Tk.test(e))return!1;if(Ek.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const kk=new lo(3e4,6e4);function yp(){const n=tn().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Sk(n){return new Promise((t,e)=>{var s,i,r;function o(){yp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yp(),e(Ze(n,"network-request-failed"))},timeout:kk.get()})}if(!((i=(s=tn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((r=tn().gapi)===null||r===void 0)&&r.load)o();else{const a=yA("iframefcb");return tn()[a]=()=>{gapi.load?o():e(Ze(n,"network-request-failed"))},Sy(`${_A()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw ma=null,t})}let ma=null;function Rk(n){return ma=ma||Sk(n),ma}/**
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
 */const Pk=new lo(5e3,15e3),Ck="__/auth/iframe",Dk="emulator/auth/iframe",Ok={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nk(n){const t=n.config;q(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Sd(t,Dk):`https://${n.config.authDomain}/${Ck}`,s={apiKey:t.apiKey,appName:n.name,v:$s},i=Mk.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${e}?${Zr(s).slice(1)}`}async function Lk(n){const t=await Rk(n),e=tn().gapi;return q(e,n,"internal-error"),t.open({where:document.body,url:Nk(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ok,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ze(n,"network-request-failed"),a=tn().setTimeout(()=>{r(o)},Pk.get());function c(){tn().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const Vk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fk=500,$k=600,Bk="_blank",Uk="http://localhost";class vp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jk(n,t,e,s=Fk,i=$k){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Vk),{width:s.toString(),height:i.toString(),top:r,left:o}),l=me().toLowerCase();e&&(a=wy(l)?Bk:e),vy(l)&&(t=t||Uk,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[m,_])=>`${f}${m}=${_},`,"");if(cA(l)&&a!=="_self")return zk(t||"",a),new vp(null);const h=window.open(t||"",a,d);q(h,n,"popup-blocked");try{h.focus()}catch{}return new vp(h)}function zk(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
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
 */const Hk="__/auth/handler",qk="emulator/auth/handler",Wk=encodeURIComponent("fac");async function bp(n,t,e,s,i,r){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:$s,eventId:i};if(t instanceof Py){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",p0(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(t instanceof uo){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${Wk}=${encodeURIComponent(c)}`:"";return`${Gk(n)}?${Zr(a).slice(1)}${l}`}function Gk({config:n}){return n.emulator?Sd(n,qk):`https://${n.authDomain}/${Hk}`}/**
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
 */const vl="webStorageSupport";class Yk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ly,this._completeRedirectFn=yk,this._overrideRedirectResult=mk}async _openPopup(t,e,s,i){var r;Rn((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await bp(t,e,s,lu(),i);return jk(t,o,Od())}async _openRedirect(t,e,s,i){await this._originValidation(t);const r=await bp(t,e,s,lu(),i);return XA(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:r}=this.eventManagers[e];return i?Promise.resolve(i):(Rn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await Lk(t),s=new bk(t);return e.register("authEvent",i=>(q(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(vl,{type:vl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[vl];o!==void 0&&e(!!o),je(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Ik(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ay()||by()||Pd()}}const Kk=Yk;var wp="@firebase/auth",xp="1.7.9";/**
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
 */class Qk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Xk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jk(n){Cs(new Zn("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ky(n)},l=new pA(s,i,r,c);return EA(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),Cs(new Zn("auth-internal",t=>{const e=zs(t.getProvider("auth").getImmediate());return(s=>new Qk(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(wp,xp,Xk(n)),Qe(wp,xp,"esm2017")}/**
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
 */const Zk=5*60,tS=fg("authIdTokenMaxAge")||Zk;let Ep=null;const eS=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>tS)return;const i=e==null?void 0:e.token;Ep!==i&&(Ep=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nS(n=Fu()){const t=rc(n,"auth");if(t.isInitialized())return t.getImmediate();const e=xA(n,{popupRedirectResolver:Kk,persistence:[ok,YA,Ly]}),s=fg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=eS(r.toString());zA(e,o,()=>o(e.currentUser)),jA(e,a=>o(a))}}const i=ug("auth");return i&&TA(e,`http://${i}`),e}function sS(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}mA({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=i=>{const r=Ze("internal-error");r.customData=i,e(r)},s.type="text/javascript",s.charset="UTF-8",sS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jk("Browser");const zy={},Hy=n=>typeof window<"u"&&window[n]?window[n]:typeof globalThis<"u"&&globalThis[n]?globalThis[n]:null,iS={apiKey:"AIzaSyAuJIZeL0ipjVAdoSjH5Wq5IIwdjWexoaE",authDomain:"controle-de-obras-axel.firebaseapp.com",projectId:"controle-de-obras-axel",storageBucket:"controle-de-obras-axel.firebasestorage.app",messagingSenderId:"438724917414",appId:"1:438724917414:web:cb9674cdc557bdf2a7dc67"},rS=()=>{const n=Hy("__FIREBASE_CONFIG");if(n)return n;const t=import.meta&&zy||{},e={apiKey:t.VITE_FIREBASE_API_KEY,authDomain:t.VITE_FIREBASE_AUTH_DOMAIN,projectId:t.VITE_FIREBASE_PROJECT_ID,storageBucket:t.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:t.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:t.VITE_FIREBASE_APP_ID};return Object.values(e).every(Boolean)?e:(console.warn("[Config] Firebase config não encontrada em globals/ENV; usando fallback padrão legado."),iS)},oS=()=>{const n=Hy("__RDO_API_CONFIG");if(n)return n;const t=import.meta&&zy||{},e=t.VITE_RDO_API_TOKEN||t.VITE_RDO_TOKEN,s=t.VITE_RDO_API_BASE||"https://rdo.axelindustrial.com.br/api";return e?{TOKEN:e,BASE_URL:s}:{TOKEN:"",BASE_URL:s}},aS=rS(),Sc=_g(aS),J=hT(Sc),cS=$I(Sc),Ho=nS(Sc),lS=async()=>(console.log("[Firebase] Configuração carregada com sucesso"),Sc),mt={state:{currentUser:null,currentTheme:localStorage.getItem("theme")||"dark",currentObra:null,sidebarCollapsed:localStorage.getItem("sidebarCollapsed")==="true"},listeners:[],subscribe(n){return this.listeners.push(n),()=>{this.listeners=this.listeners.filter(t=>t!==n)}},setState(n){this.state={...this.state,...n},this.notify()},notify(){this.listeners.forEach(n=>n(this.state))},setUser(n){this.setState({currentUser:n})},setTheme(n){localStorage.setItem("theme",n),this.applyTheme(n)},applyTheme(n){this.setState({currentTheme:n});const t=document.documentElement;t.classList.remove("dark","theme-light"),n==="dark"||n==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?(t.classList.add("dark"),t.setAttribute("data-theme","dark")):(t.classList.add("theme-light"),t.setAttribute("data-theme","light"))},toggleSidebar(){const n=!this.state.sidebarCollapsed;localStorage.setItem("sidebarCollapsed",n),this.setState({sidebarCollapsed:n})}},Ha={init:()=>new Promise(n=>{HA(Ho,async t=>{if(t)try{const e=await Va(Zt(J,"usuarios",t.uid));if(e.exists()){const s={uid:t.uid,email:t.email,...e.data()};mt.setUser(s)}else mt.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}catch(e){console.warn("Erro ao buscar perfil (usando fallback):",e.message),mt.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}else mt.setUser(null);n(mt.state.currentUser)})}),login:async(n,t)=>{try{const s=(await UA(Ho,n,t)).user,i=await Va(Zt(J,"usuarios",s.uid));if(i.exists()){const r={uid:s.uid,email:s.email,...i.data()};return mt.setUser(r),r}else throw new Error("Perfil de usuário não encontrado.")}catch(e){throw e}},logout:async()=>{await qA(Ho),mt.setUser(null)},recoverPassword:async n=>{await BA(Ho,n)}},vt={routes:{},currentRoute:null,init(){window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())},on(n,t){this.routes[n]=t},navigate(n){window.location.hash=n},matchRoute(n){if(this.routes[n])return{handler:this.routes[n],params:{}};const t=n.split("/").filter(Boolean);for(const[e,s]of Object.entries(this.routes)){const i=e.split("/").filter(Boolean);if(i.length!==t.length)continue;const r={};let o=!0;for(let a=0;a<i.length;a++){const c=i[a],l=t[a];if(c.startsWith(":"))r[c.slice(1)]=decodeURIComponent(l);else if(c!==l){o=!1;break}}if(o)return{handler:s,params:r}}return null},async handleRoute(){const n=window.location.hash.slice(1)||"/";if(!mt.state.currentUser&&n!=="/login"&&n!=="/forgot-password"){this.navigate("/login");return}if(mt.state.currentUser&&(n==="/login"||n==="/forgot-password")){this.navigate("/");return}const t=this.matchRoute(n),e=(t==null?void 0:t.handler)||this.routes["/404"]||(()=>console.warn("Rota não encontrada:",n)),s=(t==null?void 0:t.params)||{};this.currentRoute=n,await e(s)}},F={createInput:({type:n="text",id:t,label:e,placeholder:s="",value:i="",required:r=!1,className:o=""})=>`
            <div class="flex flex-col gap-1 ${o}">
                ${e?`<label for="${t}" class="text-xs font-display tracking-wide text-text-muted uppercase">${e}</label>`:""}
                <input 
                    type="${n}" 
                    id="${t}" 
                    name="${t}" 
                    placeholder="${s}" 
                    value="${i}"
                    ${r?"required":""}
                    class="input"
                />
            </div>
        `,createButton:({id:n,text:t,type:e="button",variant:s="primary",icon:i="",onClick:r="",className:o=""})=>`
            <button 
                id="${n}" 
                type="${e}" 
                class="${s==="primary"?"btn":"btn-secondary"} ${o}"
                ${r?`onclick="${r}"`:""}
            >
                ${i}
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
        `},Tp={renderLogin:()=>`
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
        `},Ip={initLogin:()=>{const n=document.getElementById("app");n.innerHTML=Tp.renderLogin(),document.getElementById("login-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email").value,i=document.getElementById("password").value,r=document.getElementById("btn-login");try{r.disabled=!0,r.innerHTML=F.createLoader(),await Ha.login(s,i),F.createToast("Login realizado com sucesso!"),vt.navigate("/")}catch(o){console.error(o);let a="Erro ao realizar login.";o.code==="auth/invalid-credential"&&(a="Email ou senha incorretos."),F.createToast(a,"error"),r.disabled=!1,r.innerHTML="<span>Entrar</span>"}})},initForgotPassword:()=>{const n=document.getElementById("app");n.innerHTML=Tp.renderForgotPassword(),document.getElementById("forgot-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email-recovery").value,i=document.getElementById("btn-recover");try{i.disabled=!0,i.innerHTML=F.createLoader(),await Ha.recoverPassword(s),F.createToast("Email de recuperação enviado!"),setTimeout(()=>vt.navigate("/login"),2e3)}catch(r){F.createToast("Erro ao enviar email: "+r.message,"error"),i.disabled=!1,i.innerHTML="<span>Enviar</span>"}})}},uS="modulepreload",dS=function(n){return"/"+n},Ap={},qa=function(t,e,s){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(e.map(c=>{if(c=dS(c),c in Ap)return;Ap[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":uS,l||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),l)return new Promise((f,m)=>{h.addEventListener("load",f),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},hS=async n=>{if(!n)return null;const t=await Et(we(wt(J,"obras"),Kt("__name__","==",n)));if(t.empty)return null;const e=t.docs[0].data(),s=Number(e.orcamento||e.valor_orcado||0),i=Number(e.tolerancia_percentual||0),r=s+s*i,a=(await Et(we(wt(J,"compras"),Kt("obraId","==",n)))).docs.map(l=>l.data());let c=0;return a.forEach(l=>{const d=(l.status_compra||"").toLowerCase(),h=!l.estouro_orcamento||l.status_aprovacao==="Aprovado";(d==="comprado"||d==="recebido"||d==="entregue")&&h&&(c+=Number(l.valor_total||l.valor_estimado||0))}),{limite_real:r,comprometido:c,orcado:s}},fS=async n=>{var t,e,s;try{const{ObrasService:i}=await qa(async()=>{const{ObrasService:l}=await Promise.resolve().then(()=>wD);return{ObrasService:l}},void 0),r=await((t=i.getObraById)==null?void 0:t.call(i,n)),o=(r==null?void 0:r.numero_os)||(r==null?void 0:r.numeroOS)||n;if(!o)return null;const{RDOService:a}=await qa(async()=>{const{RDOService:l}=await Promise.resolve().then(()=>pb);return{RDOService:l}},void 0),c=await a.getIntegratedDataForObra(o);if((e=c==null?void 0:c.reports)!=null&&e.length){const l=a.processRDOData(c.reports);return{...l,quantidadeRelatorios:c.quantidadeRelatorios||((s=l.reports)==null?void 0:s.length)||0}}return c?{quantidadeRelatorios:c.quantidadeRelatorios||0,totalHoras:Number(c.totalHoras||0)}:null}catch(i){return console.warn("[Dashboard] RDO fetch fail",(i==null?void 0:i.message)||i),null}},hn={getCompradorStats:async()=>{const n=wt(J,"compras"),t=we(n,Kt("status_compra","==","Pendente")),e=await Et(t),s=we(n,Kt("status_compra","==","Em Cotação")),i=await Et(s),r=we(n,au("data_solicitacao","desc"),ua(5)),o=await Et(r);let a=0,c=0,l=0,d=0,h=0,f=0;const m={},_={};o.docs.forEach(T=>{const I=T.data(),C=Number(I.valor_estimado||I.valor_total||0);f+=C;const R=I.previsao_entrega?new Date(I.previsao_entrega):null,D=I.data_recebimento?new Date(I.data_recebimento):null;if(I.status_compra!=="Entregue"&&I.status_compra!=="Recebido"&&R&&R<new Date&&a++,D&&R&&(c++,D<=R&&l++),I.data_emissao&&(D||R)){const v=D||R,w=Math.max(0,(new Date(v)-new Date(I.data_emissao))/(1e3*60*60*24));d+=w,h++}const O=(I.natureza_compra||"Outros").trim();m[O]=(m[O]||0)+C;const x=I.centroCustoNome||I.centro_custo||I.centroCustoId||"N/D";_[x]=(_[x]||0)+C});const b=c?l/c*100:0,y=h?d/h:0;return{pendentes:e.size,emCotacao:i.size,recentes:o.docs.map(T=>({id:T.id,...T.data()})),atrasos:a,sla:b,lead:y,totalValor:f,naturezaTotais:m,ccTotais:_}},getObraStats:async n=>{if(!n)return{pendentes:0,transito:0,entregues:0,recentes:[]};const t=wt(J,"compras"),e=we(t,Kt("obraId","==",n),Kt("status_compra","in",["Pendente","Em Cotação","Aprovado"])),s=await Et(e),i=we(t,Kt("obraId","==",n),Kt("status_compra","==","Comprado")),r=await Et(i),o=we(t,Kt("obraId","==",n),Kt("status_compra","in",["Entregue","Recebido"])),a=await Et(o),c=we(t,Kt("obraId","==",n),au("data_solicitacao","desc"),ua(5)),l=await Et(c);let d=0,h=0,f=0,m=0,_=0;const b=await hS(n),y=(b==null?void 0:b.comprometido)||0,T=(b==null?void 0:b.limite_real)||(b==null?void 0:b.orcado)||0,I=T>0?y/T*100:0,C=Math.max(0,T-y);l.docs.forEach(D=>{const O=D.data(),x=O.previsao_entrega?new Date(O.previsao_entrega):null,v=O.data_recebimento?new Date(O.data_recebimento):null;if(O.status_compra!=="Entregue"&&O.status_compra!=="Recebido"&&x&&x<new Date&&d++,v&&x&&(h++,v<=x&&f++),O.data_emissao&&(v||x)){const w=v||x,A=Math.max(0,(new Date(w)-new Date(O.data_emissao))/(1e3*60*60*24));m+=A,_++}});const R=await fS(n);return{pendentes:s.size,transito:r.size,entregues:a.size,recentes:l.docs.map(D=>({id:D.id,...D.data()})),atrasos:d,sla:h?f/h*100:0,lead:_?m/_:0,economia:C,curvaPercent:I,comprometido:y,limiteReal:T,rdoData:R}},getObras:async()=>(await Et(wt(J,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getDiretorStats:async()=>{const n=wt(J,"compras"),t=we(n,ua(500)),e=await Et(t);let s=0,i={},r={},o=0,a=0,c=0,l=0,d=0,h=0,f=0;const m={},_={},b={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0},y=[];e.forEach(D=>{const O=D.data(),x=Number(O.valor_estimado||O.valor_total||0);y.push({id:D.id,...O}),s+=x,i[O.status_compra]=(i[O.status_compra]||0)+1,O.status_compra!=="Entregue"&&O.status_compra!=="Recebido"&&O.previsao_entrega&&new Date(O.previsao_entrega)<new Date&&(c++,b.atrasados++);const v=O.previsao_entrega?new Date(O.previsao_entrega):null,w=O.data_recebimento?new Date(O.data_recebimento):null;if(w&&v&&(l++,w<=v&&d++),O.data_emissao&&(w||v)){const tt=w||v,W=Math.max(0,(new Date(tt)-new Date(O.data_emissao))/(1e3*60*60*24));h+=W,f++}if(O.limite_real&&(o+=Number(O.limite_real)),O.comprometido&&(a+=Number(O.comprometido)),O.data_solicitacao){const tt=new Date(O.data_solicitacao),W=`${tt.getFullYear()}-${String(tt.getMonth()+1).padStart(2,"0")}`;r[W]=(r[W]||0)+x}const A=(O.natureza_compra||"Outros").trim();m[A]=(m[A]||0)+x;const S=O.centroCustoNome||O.centro_custo||O.centroCustoId||"N/D";_[S]=(_[S]||0)+x,!O.previsao_entrega&&O.status_compra!=="Recebido"&&O.status_compra!=="Entregue"&&b.sem_previsao++,(O.status_aprovacao||"").toLowerCase()==="pendente"&&b.pendente_aprovacao++,(O.status_compra||"").toLowerCase().includes("cot")&&b.cotacao++});const T=o>0?a/o*100:0,I=l?d/l*100:0,C=f?h/f:0,R=Math.max(0,o-a);return{totalGasto:s,porStatus:i,totalPedidos:e.size,gastosPorMes:r,limiteReal:o,comprometido:a,curvaPercent:T,atrasos:c,sla:I,lead:C,economia:R,naturezaTotais:m,ccTotais:_,alerts:b,_allCompras:y}}},ht={formatCurrency:n=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n),formatDate:n=>{if(!n)return"-";const t=new Date(n);return Number.isNaN(t.getTime())?"-":t.toLocaleDateString("pt-BR")},formatCurrencyInput:(n,t=!1)=>{let s=(typeof n=="number"?n.toFixed(2):String(n??"")).replace(/\D/g,"");return s=(s/100).toFixed(2)+"",s=s.replace(".",","),s=s.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1."),t?`R$ ${s}`:s},parseCurrency:n=>{if(typeof n=="number")return n;if(!n)return 0;const t=String(n).replace("R$ ","").replace(/\./g,"").replace(",","."),e=parseFloat(t);return Number.isNaN(e)?0:e},formatCnpjInput:n=>{if(!n)return"";let t=n.replace(/\D/g,"");return t=t.substring(0,14),t=t.replace(/^(\d{2})(\d)/,"$1.$2"),t=t.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3"),t=t.replace(/\.(\d{3})(\d)/,".$1/$2"),t=t.replace(/(\d{4})(\d)/,"$1-$2"),t},validateCNPJ:n=>{if(!n)return!0;const t=n.replace(/\D/g,"");if(t.length!==14||/^(\d)\1{13}$/.test(t))return!1;let e=0,s=5;for(let a=0;a<8;a++)e+=parseInt(t[a],10)*s,s=s===2?9:s-1;let i=e%11,r=i<2?0:11-i;if(parseInt(t[8],10)!==r)return!1;e=0,s=6;for(let a=0;a<9;a++)e+=parseInt(t[a],10)*s,s=s===2?9:s-1;i=e%11;let o=i<2?0:11-i;return parseInt(t[9],10)===o},renderStatusBadge:(n,t)=>{const e=new Date;e.setHours(0,0,0,0);let s=null;if(t){const o=new Date(t);Number.isNaN(o.getTime())||(s=o)}const i=(n||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return i!=="recebido"&&s&&s<e?'<span class="px-2 py-1 text-xs font-display rounded bg-alert text-canvas uppercase">Atrasado</span>':i.includes("recebido")||i.includes("entregue")?`<span class="px-2 py-1 text-xs font-display rounded bg-primary text-canvas uppercase">${n}</span>`:i.includes("comprado")?`<span class="px-2 py-1 text-xs font-display rounded bg-indigo-500 text-canvas uppercase">${n}</span>`:i.includes("aprov")?`<span class="px-2 py-1 text-xs font-display rounded bg-emerald-500 text-canvas uppercase">${n}</span>`:i.includes("cot")||i.includes("cota")?`<span class="px-2 py-1 text-xs font-display rounded bg-amber-400 text-gray-900 uppercase">${n}</span>`:`<span class="px-2 py-1 text-xs font-display rounded bg-border text-text uppercase">${n||"N/D"}</span>`},debounce:(n,t)=>{let e;return(...s)=>{clearTimeout(e),e=setTimeout(()=>n(...s),t)}}},bl={renderComprador:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Visão Geral - Compras</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
                    ${F.createCard({title:"Pendentes",content:`<p class="text-4xl font-display text-alert uppercase">${n.pendentes}</p><p class="text-sm heading-muted">Aguardando ação</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Em Cotação",content:`<p class="text-4xl font-display text-primary uppercase">${n.emCotacao}</p><p class="text-sm heading-muted">Processando</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted">Previsão vencida</p>`,className:"accent-left"})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">On-time vs entregues</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Total Estimado",content:`<p class="text-4xl font-display text-primary uppercase">${ht.formatCurrency(n.totalValor||0)}</p><p class="text-sm heading-muted mt-1">Amostra 5 recentes</p>`})}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="card">
                        <h3 class="text-lg font-display text-text mb-3">Top Naturezas (recentes)</h3>
                        <div class="space-y-2">
                            ${Object.entries(n.naturezaTotais||{}).sort((t,e)=>e[1]-t[1]).slice(0,5).map(([t,e])=>`
                                <div class="flex items-center justify-between text-sm">
                                    <span class="text-text">${t}</span>
                                    <span class="text-primary font-display">${ht.formatCurrency(e)}</span>
                                </div>
                            `).join("")||'<p class="heading-muted text-sm">Sem dados</p>'}
                        </div>
                    </div>
                    <div class="card">
                        <h3 class="text-lg font-display text-text mb-3">Top Centros de Custo (recentes)</h3>
                        <div class="space-y-2">
                            ${Object.entries(n.ccTotais||{}).sort((t,e)=>e[1]-t[1]).slice(0,5).map(([t,e])=>`
                                <div class="flex items-center justify-between text-sm">
                                    <span class="text-text">${t}</span>
                                    <span class="text-primary font-display">${ht.formatCurrency(e)}</span>
                                </div>
                            `).join("")||'<p class="heading-muted text-sm">Sem dados</p>'}
                        </div>
                    </div>
                </div>

                <div class="bg-surface border border-border shadow-heavy rounded overflow-hidden">
                    <div class="px-6 py-4 border-b border-border">
                        <h3 class="text-lg font-display text-text">Últimas Solicitações</h3>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-border">
                            <thead class="bg-canvas">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Data</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Obra</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Status</th>
                                    <th class="px-6 py-3 text-right text-xs font-display text-text-muted uppercase tracking-wide">Ação</th>
                                </tr>
                            </thead>
                            <tbody class="bg-surface divide-y divide-border">
                                ${n.recentes.map(t=>`
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${t.data_solicitacao||"-"}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-display text-text uppercase">${t.obraId||"N/A"}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                                            <span class="px-2 inline-flex text-xs leading-5 font-display rounded bg-canvas border border-border text-text">
                                                ${t.status_compra}
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#/compras/${t.id}" class="text-primary hover:text-primary-strong font-display uppercase tracking-wide">Ver</a>
                                        </td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `,renderObra:n=>{var t,e,s,i,r,o,a,c,l,d,h,f,m,_;return`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Minha Obra</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${F.createCard({title:"Solicitados",content:`<p class="text-4xl font-display text-text uppercase">${n.pendentes}</p><p class="text-sm heading-muted">Em processamento</p>`})}
                    ${F.createCard({title:"Em Trânsito",content:`<p class="text-4xl font-display text-primary uppercase">${n.transito}</p><p class="text-sm heading-muted">A caminho</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Entregues",content:`<p class="text-4xl font-display text-primary uppercase">${n.entregues}</p><p class="text-sm heading-muted">Finalizados</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Entregues no prazo</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia vs Orçamento",content:`<p class="text-4xl font-display text-${(n.economia||0)<0?"alert":"primary"} uppercase">${ht.formatCurrency(n.economia||0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(n.curvaPercent||0).toFixed(1)}%</p>`})}
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    ${F.createCard({title:"RDO - Total Horas",content:`<p class="text-3xl font-display text-primary uppercase">${((s=(e=((t=n.rdoData)==null?void 0:t.totalHoras)||0).toFixed)==null?void 0:s.call(e,1))||0}</p><p class="text-sm heading-muted">Relatórios: ${((i=n.rdoData)==null?void 0:i.quantidadeRelatorios)||0}</p>`})}
                    ${F.createCard({title:"RDO - Horas Extras",content:`<p class="text-3xl font-display text-text uppercase">${((a=(o=((r=n.rdoData)==null?void 0:r.totalExtras)||0).toFixed)==null?void 0:a.call(o,1))||0}</p><p class="text-sm heading-muted">Acima do padrão</p>`})}
                    ${F.createCard({title:"RDO - Média Horas/Dia",content:`<p class="text-3xl font-display text-text uppercase">${((d=(l=((c=n.rdoData)==null?void 0:c.mediaHorasDia)||0).toFixed)==null?void 0:d.call(l,1))||0}</p>`})}
                    ${F.createCard({title:"RDO - Total Funcionários",content:`<p class="text-3xl font-display text-text uppercase">${((h=n.rdoData)==null?void 0:h.totalFuncionarios)||0}</p><p class="text-sm heading-muted">Média/Dia: ${((_=(m=((f=n.rdoData)==null?void 0:f.mediaFuncionariosDia)||0).toFixed)==null?void 0:_.call(m,1))||0}</p>`})}
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
        `},renderDiretor:n=>{var t,e,s,i;return`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Visão Executiva</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    ${F.createCard({title:"Total Gasto (Amostra)",content:`<p class="text-4xl font-display text-primary uppercase">${ht.formatCurrency(n.totalGasto)}</p>`})}
                    ${F.createCard({title:"Total de Pedidos",content:`<p class="text-4xl font-display text-primary uppercase">${n.totalPedidos}</p>`})}
                    ${F.createCard({title:"% Curva S (Comprometido vs Limite)",content:`<p class="text-4xl font-display text-${n.curvaPercent>100?"alert":"primary"} uppercase">${(n.curvaPercent||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Limite: ${ht.formatCurrency(n.limiteReal||0)} • Comprometido: ${ht.formatCurrency(n.comprometido||0)}</p>`})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted mt-1">Com previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">On-time vs entregues</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia (Limite - Comprometido)",content:`<p class="text-4xl font-display text-primary uppercase">${ht.formatCurrency(n.economia||0)}</p>`})}
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    ${F.createCard({title:"Atrasos",content:`<p class="text-3xl font-display text-alert uppercase">${((t=n.alerts)==null?void 0:t.atrasados)||0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`})}
                    ${F.createCard({title:"Sem Previsão",content:`<p class="text-3xl font-display text-text uppercase">${((e=n.alerts)==null?void 0:e.sem_previsao)||0}</p><p class="text-sm heading-muted mt-1">Pedidos sem data</p>`})}
                    ${F.createCard({title:"Pend. Aprovação",content:`<p class="text-3xl font-display text-text uppercase">${((s=n.alerts)==null?void 0:s.pendente_aprovacao)||0}</p><p class="text-sm heading-muted mt-1">Estouro orç. pendente</p>`})}
                    ${F.createCard({title:"Em Cotação",content:`<p class="text-3xl font-display text-text uppercase">${((i=n.alerts)==null?void 0:i.cotacao)||0}</p><p class="text-sm heading-muted mt-1">Ped. em cotação</p>`})}
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
                </div>
            </div>
        `}};/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function fo(n){return n+.5|0}const zn=(n,t,e)=>Math.max(Math.min(n,e),t);function mr(n){return zn(fo(n*2.55),0,255)}function Jn(n){return zn(fo(n*255),0,255)}function gn(n){return zn(fo(n/2.55)/100,0,1)}function kp(n){return zn(fo(n*100),0,100)}const Ce={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},fu=[..."0123456789ABCDEF"],pS=n=>fu[n&15],mS=n=>fu[(n&240)>>4]+fu[n&15],qo=n=>(n&240)>>4===(n&15),gS=n=>qo(n.r)&&qo(n.g)&&qo(n.b)&&qo(n.a);function _S(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&Ce[n[1]]*17,g:255&Ce[n[2]]*17,b:255&Ce[n[3]]*17,a:t===5?Ce[n[4]]*17:255}:(t===7||t===9)&&(e={r:Ce[n[1]]<<4|Ce[n[2]],g:Ce[n[3]]<<4|Ce[n[4]],b:Ce[n[5]]<<4|Ce[n[6]],a:t===9?Ce[n[7]]<<4|Ce[n[8]]:255})),e}const yS=(n,t)=>n<255?t(n):"";function vS(n){var t=gS(n)?pS:mS;return n?"#"+t(n.r)+t(n.g)+t(n.b)+yS(n.a,t):void 0}const bS=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function qy(n,t,e){const s=t*Math.min(e,1-e),i=(r,o=(r+n/30)%12)=>e-s*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function wS(n,t,e){const s=(i,r=(i+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[s(5),s(3),s(1)]}function xS(n,t,e){const s=qy(n,1,.5);let i;for(t+e>1&&(i=1/(t+e),t*=i,e*=i),i=0;i<3;i++)s[i]*=1-t-e,s[i]+=t;return s}function ES(n,t,e,s,i){return n===i?(t-e)/s+(t<e?6:0):t===i?(e-n)/s+2:(n-t)/s+4}function Nd(n){const e=n.r/255,s=n.g/255,i=n.b/255,r=Math.max(e,s,i),o=Math.min(e,s,i),a=(r+o)/2;let c,l,d;return r!==o&&(d=r-o,l=a>.5?d/(2-r-o):d/(r+o),c=ES(e,s,i,d,r),c=c*60+.5),[c|0,l||0,a]}function Ld(n,t,e,s){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,s)).map(Jn)}function Vd(n,t,e){return Ld(qy,n,t,e)}function TS(n,t,e){return Ld(xS,n,t,e)}function IS(n,t,e){return Ld(wS,n,t,e)}function Wy(n){return(n%360+360)%360}function AS(n){const t=bS.exec(n);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?mr(+t[5]):Jn(+t[5]));const i=Wy(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?s=TS(i,r,o):t[1]==="hsv"?s=IS(i,r,o):s=Vd(i,r,o),{r:s[0],g:s[1],b:s[2],a:e}}function kS(n,t){var e=Nd(n);e[0]=Wy(e[0]+t),e=Vd(e),n.r=e[0],n.g=e[1],n.b=e[2]}function SS(n){if(!n)return;const t=Nd(n),e=t[0],s=kp(t[1]),i=kp(t[2]);return n.a<255?`hsla(${e}, ${s}%, ${i}%, ${gn(n.a)})`:`hsl(${e}, ${s}%, ${i}%)`}const Sp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Rp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function RS(){const n={},t=Object.keys(Rp),e=Object.keys(Sp);let s,i,r,o,a;for(s=0;s<t.length;s++){for(o=a=t[s],i=0;i<e.length;i++)r=e[i],a=a.replace(r,Sp[r]);r=parseInt(Rp[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let Wo;function PS(n){Wo||(Wo=RS(),Wo.transparent=[0,0,0,0]);const t=Wo[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const CS=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function DS(n){const t=CS.exec(n);let e=255,s,i,r;if(t){if(t[7]!==s){const o=+t[7];e=t[8]?mr(o):zn(o*255,0,255)}return s=+t[1],i=+t[3],r=+t[5],s=255&(t[2]?mr(s):zn(s,0,255)),i=255&(t[4]?mr(i):zn(i,0,255)),r=255&(t[6]?mr(r):zn(r,0,255)),{r:s,g:i,b:r,a:e}}}function OS(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${gn(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const wl=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,Zs=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function MS(n,t,e){const s=Zs(gn(n.r)),i=Zs(gn(n.g)),r=Zs(gn(n.b));return{r:Jn(wl(s+e*(Zs(gn(t.r))-s))),g:Jn(wl(i+e*(Zs(gn(t.g))-i))),b:Jn(wl(r+e*(Zs(gn(t.b))-r))),a:n.a+e*(t.a-n.a)}}function Go(n,t,e){if(n){let s=Nd(n);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=Vd(s),n.r=s[0],n.g=s[1],n.b=s[2]}}function Gy(n,t){return n&&Object.assign(t||{},n)}function Pp(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=Jn(n[3]))):(t=Gy(n,{r:0,g:0,b:0,a:1}),t.a=Jn(t.a)),t}function NS(n){return n.charAt(0)==="r"?DS(n):AS(n)}class zr{constructor(t){if(t instanceof zr)return t;const e=typeof t;let s;e==="object"?s=Pp(t):e==="string"&&(s=_S(t)||PS(t)||NS(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=Gy(this._rgb);return t&&(t.a=gn(t.a)),t}set rgb(t){this._rgb=Pp(t)}rgbString(){return this._valid?OS(this._rgb):void 0}hexString(){return this._valid?vS(this._rgb):void 0}hslString(){return this._valid?SS(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,i=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,c=s.a-i.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-l,s.r=255&l*s.r+r*i.r+.5,s.g=255&l*s.g+r*i.g+.5,s.b=255&l*s.b+r*i.b+.5,s.a=o*s.a+(1-o)*i.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=MS(this._rgb,t._rgb,e)),this}clone(){return new zr(this.rgb)}alpha(t){return this._rgb.a=Jn(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=fo(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Go(this._rgb,2,t),this}darken(t){return Go(this._rgb,2,-t),this}saturate(t){return Go(this._rgb,1,t),this}desaturate(t){return Go(this._rgb,1,-t),this}rotate(t){return kS(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function fn(){}const LS=(()=>{let n=0;return()=>n++})();function et(n){return n==null}function kt(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function it(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function Nt(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function Se(n,t){return Nt(n)?n:t}function K(n,t){return typeof n>"u"?t:n}const VS=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,Yy=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function bt(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function pt(n,t,e,s){let i,r,o;if(kt(n))for(r=n.length,i=0;i<r;i++)t.call(e,n[i],i);else if(it(n))for(o=Object.keys(n),r=o.length,i=0;i<r;i++)t.call(e,n[o[i]],o[i])}function Wa(n,t){let e,s,i,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,s=n.length;e<s;++e)if(i=n[e],r=t[e],i.datasetIndex!==r.datasetIndex||i.index!==r.index)return!1;return!0}function Ga(n){if(kt(n))return n.map(Ga);if(it(n)){const t=Object.create(null),e=Object.keys(n),s=e.length;let i=0;for(;i<s;++i)t[e[i]]=Ga(n[e[i]]);return t}return n}function Ky(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function FS(n,t,e,s){if(!Ky(n))return;const i=t[n],r=e[n];it(i)&&it(r)?Hr(i,r,s):t[n]=Ga(r)}function Hr(n,t,e){const s=kt(t)?t:[t],i=s.length;if(!it(n))return n;e=e||{};const r=e.merger||FS;let o;for(let a=0;a<i;++a){if(o=s[a],!it(o))continue;const c=Object.keys(o);for(let l=0,d=c.length;l<d;++l)r(c[l],n,o,e)}return n}function kr(n,t){return Hr(n,t,{merger:$S})}function $S(n,t,e){if(!Ky(n))return;const s=t[n],i=e[n];it(s)&&it(i)?kr(s,i):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=Ga(i))}const Cp={"":n=>n,x:n=>n.x,y:n=>n.y};function BS(n){const t=n.split("."),e=[];let s="";for(const i of t)s+=i,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function US(n){const t=BS(n);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function ss(n,t){return(Cp[t]||(Cp[t]=US(t)))(n)}function Fd(n){return n.charAt(0).toUpperCase()+n.slice(1)}const qr=n=>typeof n<"u",is=n=>typeof n=="function",Dp=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function jS(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const ut=Math.PI,It=2*ut,zS=It+ut,Ya=Number.POSITIVE_INFINITY,HS=ut/180,Ut=ut/2,fs=ut/4,Op=ut*2/3,Hn=Math.log10,en=Math.sign;function Sr(n,t,e){return Math.abs(n-t)<e}function Mp(n){const t=Math.round(n);n=Sr(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(Hn(n))),s=n/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function qS(n){const t=[],e=Math.sqrt(n);let s;for(s=1;s<e;s++)n%s===0&&(t.push(s),t.push(n/s));return e===(e|0)&&t.push(e),t.sort((i,r)=>i-r).pop(),t}function WS(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function Ti(n){return!WS(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function GS(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function Qy(n,t,e){let s,i,r;for(s=0,i=n.length;s<i;s++)r=n[s][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function Fe(n){return n*(ut/180)}function $d(n){return n*(180/ut)}function Np(n){if(!Nt(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function Xy(n,t){const e=t.x-n.x,s=t.y-n.y,i=Math.sqrt(e*e+s*s);let r=Math.atan2(s,e);return r<-.5*ut&&(r+=It),{angle:r,distance:i}}function pu(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function YS(n,t){return(n-t+zS)%It-ut}function he(n){return(n%It+It)%It}function Wr(n,t,e,s){const i=he(n),r=he(t),o=he(e),a=he(r-i),c=he(o-i),l=he(i-r),d=he(i-o);return i===r||i===o||s&&r===o||a>c&&l<d}function Jt(n,t,e){return Math.max(t,Math.min(e,n))}function KS(n){return Jt(n,-32768,32767)}function wn(n,t,e,s=1e-6){return n>=Math.min(t,e)-s&&n<=Math.max(t,e)+s}function Bd(n,t,e){e=e||(o=>n[o]<t);let s=n.length-1,i=0,r;for(;s-i>1;)r=i+s>>1,e(r)?i=r:s=r;return{lo:i,hi:s}}const xn=(n,t,e,s)=>Bd(n,e,s?i=>{const r=n[i][t];return r<e||r===e&&n[i+1][t]===e}:i=>n[i][t]<e),QS=(n,t,e)=>Bd(n,e,s=>n[s][t]>=e);function XS(n,t,e){let s=0,i=n.length;for(;s<i&&n[s]<t;)s++;for(;i>s&&n[i-1]>e;)i--;return s>0||i<n.length?n.slice(s,i):n}const Jy=["push","pop","shift","splice","unshift"];function JS(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Jy.forEach(e=>{const s="_onData"+Fd(e),i=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=i.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...r)}),o}})})}function Lp(n,t){const e=n._chartjs;if(!e)return;const s=e.listeners,i=s.indexOf(t);i!==-1&&s.splice(i,1),!(s.length>0)&&(Jy.forEach(r=>{delete n[r]}),delete n._chartjs)}function Zy(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const tv=function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame}();function ev(n,t){let e=[],s=!1;return function(...i){e=i,s||(s=!0,tv.call(window,()=>{s=!1,n.apply(t,e)}))}}function ZS(n,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(n,t,s)):n.apply(this,s),t}}const Ud=n=>n==="start"?"left":n==="end"?"right":"center",ue=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,t1=(n,t,e,s)=>n===(s?"left":"right")?e:n==="center"?(t+e)/2:t;function nv(n,t,e){const s=t.length;let i=0,r=s;if(n._sorted){const{iScale:o,vScale:a,_parsed:c}=n,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,d=o.axis,{min:h,max:f,minDefined:m,maxDefined:_}=o.getUserBounds();if(m){if(i=Math.min(xn(c,d,h).lo,e?s:xn(t,d,o.getPixelForValue(h)).lo),l){const b=c.slice(0,i+1).reverse().findIndex(y=>!et(y[a.axis]));i-=Math.max(0,b)}i=Jt(i,0,s-1)}if(_){let b=Math.max(xn(c,o.axis,f,!0).hi+1,e?0:xn(t,d,o.getPixelForValue(f),!0).hi+1);if(l){const y=c.slice(b-1).findIndex(T=>!et(T[a.axis]));b+=Math.max(0,y)}r=Jt(b,i,s)-i}else r=s-i}return{start:i,count:r}}function sv(n){const{xScale:t,yScale:e,_scaleRanges:s}=n,i={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return n._scaleRanges=i,!0;const r=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,i),r}const Yo=n=>n===0||n===1,Vp=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*It/e)),Fp=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*It/e)+1,Rr={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Ut)+1,easeOutSine:n=>Math.sin(n*Ut),easeInOutSine:n=>-.5*(Math.cos(ut*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>Yo(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>Yo(n)?n:Vp(n,.075,.3),easeOutElastic:n=>Yo(n)?n:Fp(n,.075,.3),easeInOutElastic(n){return Yo(n)?n:n<.5?.5*Vp(n*2,.1125,.45):.5+.5*Fp(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Rr.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Rr.easeInBounce(n*2)*.5:Rr.easeOutBounce(n*2-1)*.5+.5};function jd(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function $p(n){return jd(n)?n:new zr(n)}function xl(n){return jd(n)?n:new zr(n).saturate(.5).darken(.1).hexString()}const e1=["x","y","borderWidth","radius","tension"],n1=["color","borderColor","backgroundColor"];function s1(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:n1},numbers:{type:"number",properties:e1}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function i1(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Bp=new Map;function r1(n,t){t=t||{};const e=n+JSON.stringify(t);let s=Bp.get(e);return s||(s=new Intl.NumberFormat(n,t),Bp.set(e,s)),s}function po(n,t,e){return r1(t,e).format(n)}const iv={values(n){return kt(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const s=this.chart.options.locale;let i,r=n;if(e.length>1){const l=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(l<1e-4||l>1e15)&&(i="scientific"),r=o1(n,e)}const o=Hn(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),po(n,s,c)},logarithmic(n,t,e){if(n===0)return"0";const s=e[t].significand||n/Math.pow(10,Math.floor(Hn(n)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?iv.numeric.call(this,n,t,e):""}};function o1(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var Rc={formatters:iv};function a1(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Rc.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Vs=Object.create(null),mu=Object.create(null);function Pr(n,t){if(!t)return n;const e=t.split(".");for(let s=0,i=e.length;s<i;++s){const r=e[s];n=n[r]||(n[r]=Object.create(null))}return n}function El(n,t,e){return typeof t=="string"?Hr(Pr(n,t),e):Hr(Pr(n,""),t)}class c1{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,i)=>xl(i.backgroundColor),this.hoverBorderColor=(s,i)=>xl(i.borderColor),this.hoverColor=(s,i)=>xl(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return El(this,t,e)}get(t){return Pr(this,t)}describe(t,e){return El(mu,t,e)}override(t,e){return El(Vs,t,e)}route(t,e,s,i){const r=Pr(this,t),o=Pr(this,s),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[a],l=o[i];return it(c)?Object.assign({},l,c):K(c,l)},set(c){this[a]=c}}})}apply(t){t.forEach(e=>e(this))}}var St=new c1({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[s1,i1,a1]);function l1(n){return!n||et(n.size)||et(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function Ka(n,t,e,s,i){let r=t[i];return r||(r=t[i]=n.measureText(i).width,e.push(i)),r>s&&(s=r),s}function u1(n,t,e,s){s=s||{};let i=s.data=s.data||{},r=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(i=s.data={},r=s.garbageCollect=[],s.font=t),n.save(),n.font=t;let o=0;const a=e.length;let c,l,d,h,f;for(c=0;c<a;c++)if(h=e[c],h!=null&&!kt(h))o=Ka(n,i,r,o,h);else if(kt(h))for(l=0,d=h.length;l<d;l++)f=h[l],f!=null&&!kt(f)&&(o=Ka(n,i,r,o,f));n.restore();const m=r.length/2;if(m>e.length){for(c=0;c<m;c++)delete i[r[c]];r.splice(0,m)}return o}function ps(n,t,e){const s=n.currentDevicePixelRatio,i=e!==0?Math.max(e/2,.5):0;return Math.round((t-i)*s)/s+i}function Up(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function gu(n,t,e,s){rv(n,t,e,s,null)}function rv(n,t,e,s,i){let r,o,a,c,l,d,h,f;const m=t.pointStyle,_=t.rotation,b=t.radius;let y=(_||0)*HS;if(m&&typeof m=="object"&&(r=m.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,s),n.rotate(y),n.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),n.restore();return}if(!(isNaN(b)||b<=0)){switch(n.beginPath(),m){default:i?n.ellipse(e,s,i/2,b,0,0,It):n.arc(e,s,b,0,It),n.closePath();break;case"triangle":d=i?i/2:b,n.moveTo(e+Math.sin(y)*d,s-Math.cos(y)*b),y+=Op,n.lineTo(e+Math.sin(y)*d,s-Math.cos(y)*b),y+=Op,n.lineTo(e+Math.sin(y)*d,s-Math.cos(y)*b),n.closePath();break;case"rectRounded":l=b*.516,c=b-l,o=Math.cos(y+fs)*c,h=Math.cos(y+fs)*(i?i/2-l:c),a=Math.sin(y+fs)*c,f=Math.sin(y+fs)*(i?i/2-l:c),n.arc(e-h,s-a,l,y-ut,y-Ut),n.arc(e+f,s-o,l,y-Ut,y),n.arc(e+h,s+a,l,y,y+Ut),n.arc(e-f,s+o,l,y+Ut,y+ut),n.closePath();break;case"rect":if(!_){c=Math.SQRT1_2*b,d=i?i/2:c,n.rect(e-d,s-c,2*d,2*c);break}y+=fs;case"rectRot":h=Math.cos(y)*(i?i/2:b),o=Math.cos(y)*b,a=Math.sin(y)*b,f=Math.sin(y)*(i?i/2:b),n.moveTo(e-h,s-a),n.lineTo(e+f,s-o),n.lineTo(e+h,s+a),n.lineTo(e-f,s+o),n.closePath();break;case"crossRot":y+=fs;case"cross":h=Math.cos(y)*(i?i/2:b),o=Math.cos(y)*b,a=Math.sin(y)*b,f=Math.sin(y)*(i?i/2:b),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o);break;case"star":h=Math.cos(y)*(i?i/2:b),o=Math.cos(y)*b,a=Math.sin(y)*b,f=Math.sin(y)*(i?i/2:b),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o),y+=fs,h=Math.cos(y)*(i?i/2:b),o=Math.cos(y)*b,a=Math.sin(y)*b,f=Math.sin(y)*(i?i/2:b),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o);break;case"line":o=i?i/2:Math.cos(y)*b,a=Math.sin(y)*b,n.moveTo(e-o,s-a),n.lineTo(e+o,s+a);break;case"dash":n.moveTo(e,s),n.lineTo(e+Math.cos(y)*(i?i/2:b),s+Math.sin(y)*b);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function En(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function Pc(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function Cc(n){n.restore()}function d1(n,t,e,s,i){if(!t)return n.lineTo(e.x,e.y);if(i==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else i==="after"!=!!s?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function h1(n,t,e,s){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function f1(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),et(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function p1(n,t,e,s,i){if(i.strikethrough||i.underline){const r=n.measureText(s),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,c=e-r.actualBoundingBoxAscent,l=e+r.actualBoundingBoxDescent,d=i.strikethrough?(c+l)/2:l;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=i.decorationWidth||2,n.moveTo(o,d),n.lineTo(a,d),n.stroke()}}function m1(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function Fs(n,t,e,s,i,r={}){const o=kt(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let c,l;for(n.save(),n.font=i.string,f1(n,r),c=0;c<o.length;++c)l=o[c],r.backdrop&&m1(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),et(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(l,e,s,r.maxWidth)),n.fillText(l,e,s,r.maxWidth),p1(n,e,s,l,r),s+=Number(i.lineHeight);n.restore()}function Gr(n,t){const{x:e,y:s,w:i,h:r,radius:o}=t;n.arc(e+o.topLeft,s+o.topLeft,o.topLeft,1.5*ut,ut,!0),n.lineTo(e,s+r-o.bottomLeft),n.arc(e+o.bottomLeft,s+r-o.bottomLeft,o.bottomLeft,ut,Ut,!0),n.lineTo(e+i-o.bottomRight,s+r),n.arc(e+i-o.bottomRight,s+r-o.bottomRight,o.bottomRight,Ut,0,!0),n.lineTo(e+i,s+o.topRight),n.arc(e+i-o.topRight,s+o.topRight,o.topRight,0,-Ut,!0),n.lineTo(e+o.topLeft,s)}const g1=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,_1=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function y1(n,t){const e=(""+n).match(g1);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const v1=n=>+n||0;function zd(n,t){const e={},s=it(t),i=s?Object.keys(t):t,r=it(n)?s?o=>K(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of i)e[o]=v1(r(o));return e}function ov(n){return zd(n,{top:"y",right:"x",bottom:"y",left:"x"})}function ks(n){return zd(n,["topLeft","topRight","bottomLeft","bottomRight"])}function ge(n){const t=ov(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Qt(n,t){n=n||{},t=t||St.font;let e=K(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=K(n.style,t.style);s&&!(""+s).match(_1)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const i={family:K(n.family,t.family),lineHeight:y1(K(n.lineHeight,t.lineHeight),e),size:e,style:s,weight:K(n.weight,t.weight),string:""};return i.string=l1(i),i}function gr(n,t,e,s){let i,r,o;for(i=0,r=n.length;i<r;++i)if(o=n[i],o!==void 0&&o!==void 0)return o}function b1(n,t,e){const{min:s,max:i}=n,r=Yy(t,(i-s)/2),o=(a,c)=>e&&a===0?0:a+c;return{min:o(s,-Math.abs(r)),max:o(i,r)}}function cs(n,t){return Object.assign(Object.create(n),t)}function Hd(n,t=[""],e,s,i=()=>n[0]){const r=e||n;typeof s>"u"&&(s=uv("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:s,_getTarget:i,override:a=>Hd([a,...n],t,r,s)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete n[0][c],!0},get(a,c){return cv(a,c,()=>S1(c,t,n,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,c){return zp(a).includes(c)},ownKeys(a){return zp(a)},set(a,c,l){const d=a._storage||(a._storage=i());return a[c]=d[c]=l,delete a._keys,!0}})}function Ii(n,t,e,s){const i={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:av(n,s),setContext:r=>Ii(n,r,e,s),override:r=>Ii(n.override(r),t,e,s)};return new Proxy(i,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return cv(r,o,()=>x1(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function av(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:i=t.allKeys}=n;return{allKeys:i,scriptable:e,indexable:s,isScriptable:is(e)?e:()=>e,isIndexable:is(s)?s:()=>s}}const w1=(n,t)=>n?n+Fd(t):t,qd=(n,t)=>it(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function cv(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const s=e();return n[t]=s,s}function x1(n,t,e){const{_proxy:s,_context:i,_subProxy:r,_descriptors:o}=n;let a=s[t];return is(a)&&o.isScriptable(t)&&(a=E1(t,a,n,e)),kt(a)&&a.length&&(a=T1(t,a,n,o.isIndexable)),qd(t,a)&&(a=Ii(a,i,r&&r[t],o)),a}function E1(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let c=t(r,o||s);return a.delete(n),qd(n,c)&&(c=Wd(i._scopes,i,n,c)),c}function T1(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&s(n))return t[r.index%t.length];if(it(t[0])){const c=t,l=i._scopes.filter(d=>d!==c);t=[];for(const d of c){const h=Wd(l,i,n,d);t.push(Ii(h,r,o&&o[n],a))}}return t}function lv(n,t,e){return is(n)?n(t,e):n}const I1=(n,t)=>n===!0?t:typeof n=="string"?ss(t,n):void 0;function A1(n,t,e,s,i){for(const r of t){const o=I1(e,r);if(o){n.add(o);const a=lv(o._fallback,e,i);if(typeof a<"u"&&a!==e&&a!==s)return a}else if(o===!1&&typeof s<"u"&&e!==s)return null}return!1}function Wd(n,t,e,s){const i=t._rootScopes,r=lv(t._fallback,e,s),o=[...n,...i],a=new Set;a.add(s);let c=jp(a,o,e,r||e,s);return c===null||typeof r<"u"&&r!==e&&(c=jp(a,o,r,c,s),c===null)?!1:Hd(Array.from(a),[""],i,r,()=>k1(t,e,s))}function jp(n,t,e,s,i){for(;e;)e=A1(n,t,e,s,i);return e}function k1(n,t,e){const s=n._getTarget();t in s||(s[t]={});const i=s[t];return kt(i)&&it(e)?e:i||{}}function S1(n,t,e,s){let i;for(const r of t)if(i=uv(w1(r,n),e),typeof i<"u")return qd(n,i)?Wd(e,s,n,i):i}function uv(n,t){for(const e of t){if(!e)continue;const s=e[n];if(typeof s<"u")return s}}function zp(n){let t=n._keys;return t||(t=n._keys=R1(n._scopes)),t}function R1(n){const t=new Set;for(const e of n)for(const s of Object.keys(e).filter(i=>!i.startsWith("_")))t.add(s);return Array.from(t)}function dv(n,t,e,s){const{iScale:i}=n,{key:r="r"}=this._parsing,o=new Array(s);let a,c,l,d;for(a=0,c=s;a<c;++a)l=a+e,d=t[l],o[a]={r:i.parse(ss(d,r),l)};return o}const P1=Number.EPSILON||1e-14,Ai=(n,t)=>t<n.length&&!n[t].skip&&n[t],hv=n=>n==="x"?"y":"x";function C1(n,t,e,s){const i=n.skip?t:n,r=t,o=e.skip?t:e,a=pu(r,i),c=pu(o,r);let l=a/(a+c),d=c/(a+c);l=isNaN(l)?0:l,d=isNaN(d)?0:d;const h=s*l,f=s*d;return{previous:{x:r.x-h*(o.x-i.x),y:r.y-h*(o.y-i.y)},next:{x:r.x+f*(o.x-i.x),y:r.y+f*(o.y-i.y)}}}function D1(n,t,e){const s=n.length;let i,r,o,a,c,l=Ai(n,0);for(let d=0;d<s-1;++d)if(c=l,l=Ai(n,d+1),!(!c||!l)){if(Sr(t[d],0,P1)){e[d]=e[d+1]=0;continue}i=e[d]/t[d],r=e[d+1]/t[d],a=Math.pow(i,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[d]=i*o*t[d],e[d+1]=r*o*t[d])}}function O1(n,t,e="x"){const s=hv(e),i=n.length;let r,o,a,c=Ai(n,0);for(let l=0;l<i;++l){if(o=a,a=c,c=Ai(n,l+1),!a)continue;const d=a[e],h=a[s];o&&(r=(d-o[e])/3,a[`cp1${e}`]=d-r,a[`cp1${s}`]=h-r*t[l]),c&&(r=(c[e]-d)/3,a[`cp2${e}`]=d+r,a[`cp2${s}`]=h+r*t[l])}}function M1(n,t="x"){const e=hv(t),s=n.length,i=Array(s).fill(0),r=Array(s);let o,a,c,l=Ai(n,0);for(o=0;o<s;++o)if(a=c,c=l,l=Ai(n,o+1),!!c){if(l){const d=l[t]-c[t];i[o]=d!==0?(l[e]-c[e])/d:0}r[o]=a?l?en(i[o-1])!==en(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}D1(n,i,r),O1(n,r,t)}function Ko(n,t,e){return Math.max(Math.min(n,e),t)}function N1(n,t){let e,s,i,r,o,a=En(n[0],t);for(e=0,s=n.length;e<s;++e)o=r,r=a,a=e<s-1&&En(n[e+1],t),r&&(i=n[e],o&&(i.cp1x=Ko(i.cp1x,t.left,t.right),i.cp1y=Ko(i.cp1y,t.top,t.bottom)),a&&(i.cp2x=Ko(i.cp2x,t.left,t.right),i.cp2y=Ko(i.cp2y,t.top,t.bottom)))}function L1(n,t,e,s,i){let r,o,a,c;if(t.spanGaps&&(n=n.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")M1(n,i);else{let l=s?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],c=C1(l,a,n[Math.min(r+1,o-(s?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}t.capBezierPoints&&N1(n,e)}function Gd(){return typeof window<"u"&&typeof document<"u"}function Yd(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Qa(n,t,e){let s;return typeof n=="string"?(s=parseInt(n,10),n.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=n,s}const Dc=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function V1(n,t){return Dc(n).getPropertyValue(t)}const F1=["top","right","bottom","left"];function Ss(n,t,e){const s={};e=e?"-"+e:"";for(let i=0;i<4;i++){const r=F1[i];s[r]=parseFloat(n[t+"-"+r+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const $1=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function B1(n,t){const e=n.touches,s=e&&e.length?e[0]:n,{offsetX:i,offsetY:r}=s;let o=!1,a,c;if($1(i,r,n.target))a=i,c=r;else{const l=t.getBoundingClientRect();a=s.clientX-l.left,c=s.clientY-l.top,o=!0}return{x:a,y:c,box:o}}function vs(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:s}=t,i=Dc(e),r=i.boxSizing==="border-box",o=Ss(i,"padding"),a=Ss(i,"border","width"),{x:c,y:l,box:d}=B1(n,e),h=o.left+(d&&a.left),f=o.top+(d&&a.top);let{width:m,height:_}=t;return r&&(m-=o.width+a.width,_-=o.height+a.height),{x:Math.round((c-h)/m*e.width/s),y:Math.round((l-f)/_*e.height/s)}}function U1(n,t,e){let s,i;if(t===void 0||e===void 0){const r=n&&Yd(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=Dc(r),c=Ss(a,"border","width"),l=Ss(a,"padding");t=o.width-l.width-c.width,e=o.height-l.height-c.height,s=Qa(a.maxWidth,r,"clientWidth"),i=Qa(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:s||Ya,maxHeight:i||Ya}}const qn=n=>Math.round(n*10)/10;function j1(n,t,e,s){const i=Dc(n),r=Ss(i,"margin"),o=Qa(i.maxWidth,n,"clientWidth")||Ya,a=Qa(i.maxHeight,n,"clientHeight")||Ya,c=U1(n,t,e);let{width:l,height:d}=c;if(i.boxSizing==="content-box"){const f=Ss(i,"border","width"),m=Ss(i,"padding");l-=m.width+f.width,d-=m.height+f.height}return l=Math.max(0,l-r.width),d=Math.max(0,s?l/s:d-r.height),l=qn(Math.min(l,o,c.maxWidth)),d=qn(Math.min(d,a,c.maxHeight)),l&&!d&&(d=qn(l/2)),(t!==void 0||e!==void 0)&&s&&c.height&&d>c.height&&(d=c.height,l=qn(Math.floor(d*s))),{width:l,height:d}}function Hp(n,t,e){const s=t||1,i=qn(n.height*s),r=qn(n.width*s);n.height=qn(n.height),n.width=qn(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==s||o.height!==i||o.width!==r?(n.currentDevicePixelRatio=s,o.height=i,o.width=r,n.ctx.setTransform(s,0,0,s,0,0),!0):!1}const z1=function(){let n=!1;try{const t={get passive(){return n=!0,!1}};Gd()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n}();function qp(n,t){const e=V1(n,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function bs(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function H1(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:s==="middle"?e<.5?n.y:t.y:s==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function q1(n,t,e,s){const i={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=bs(n,i,e),a=bs(i,r,e),c=bs(r,t,e),l=bs(o,a,e),d=bs(a,c,e);return bs(l,d,e)}const W1=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},G1=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function fi(n,t,e){return n?W1(t,e):G1()}function fv(n,t){let e,s;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=s)}function pv(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function mv(n){return n==="angle"?{between:Wr,compare:YS,normalize:he}:{between:wn,compare:(t,e)=>t-e,normalize:t=>t}}function Wp({start:n,end:t,count:e,loop:s,style:i}){return{start:n%e,end:t%e,loop:s&&(t-n+1)%e===0,style:i}}function Y1(n,t,e){const{property:s,start:i,end:r}=e,{between:o,normalize:a}=mv(s),c=t.length;let{start:l,end:d,loop:h}=n,f,m;if(h){for(l+=c,d+=c,f=0,m=c;f<m&&o(a(t[l%c][s]),i,r);++f)l--,d--;l%=c,d%=c}return d<l&&(d+=c),{start:l,end:d,loop:h,style:n.style}}function gv(n,t,e){if(!e)return[n];const{property:s,start:i,end:r}=e,o=t.length,{compare:a,between:c,normalize:l}=mv(s),{start:d,end:h,loop:f,style:m}=Y1(n,t,e),_=[];let b=!1,y=null,T,I,C;const R=()=>c(i,C,T)&&a(i,C)!==0,D=()=>a(r,T)===0||c(r,C,T),O=()=>b||R(),x=()=>!b||D();for(let v=d,w=d;v<=h;++v)I=t[v%o],!I.skip&&(T=l(I[s]),T!==C&&(b=c(T,i,r),y===null&&O()&&(y=a(T,i)===0?v:w),y!==null&&x()&&(_.push(Wp({start:y,end:v,loop:f,count:o,style:m})),y=null),w=v,C=T));return y!==null&&_.push(Wp({start:y,end:h,loop:f,count:o,style:m})),_}function _v(n,t){const e=[],s=n.segments;for(let i=0;i<s.length;i++){const r=gv(s[i],n.points,t);r.length&&e.push(...r)}return e}function K1(n,t,e,s){let i=0,r=t-1;if(e&&!s)for(;i<t&&!n[i].skip;)i++;for(;i<t&&n[i].skip;)i++;for(i%=t,e&&(r+=i);r>i&&n[r%t].skip;)r--;return r%=t,{start:i,end:r}}function Q1(n,t,e,s){const i=n.length,r=[];let o=t,a=n[t],c;for(c=t+1;c<=e;++c){const l=n[c%i];l.skip||l.stop?a.skip||(s=!1,r.push({start:t%i,end:(c-1)%i,loop:s}),t=o=l.stop?c:null):(o=c,a.skip&&(t=c)),a=l}return o!==null&&r.push({start:t%i,end:o%i,loop:s}),r}function X1(n,t){const e=n.points,s=n.options.spanGaps,i=e.length;if(!i)return[];const r=!!n._loop,{start:o,end:a}=K1(e,i,r,s);if(s===!0)return Gp(n,[{start:o,end:a,loop:r}],e,t);const c=a<o?a+i:a,l=!!n._fullLoop&&o===0&&a===i-1;return Gp(n,Q1(e,o,c,l),e,t)}function Gp(n,t,e,s){return!s||!s.setContext||!e?t:J1(n,t,e,s)}function J1(n,t,e,s){const i=n._chart.getContext(),r=Yp(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,c=e.length,l=[];let d=r,h=t[0].start,f=h;function m(_,b,y,T){const I=a?-1:1;if(_!==b){for(_+=c;e[_%c].skip;)_-=I;for(;e[b%c].skip;)b+=I;_%c!==b%c&&(l.push({start:_%c,end:b%c,loop:y,style:T}),d=T,h=b%c)}}for(const _ of t){h=a?h:_.start;let b=e[h%c],y;for(f=h+1;f<=_.end;f++){const T=e[f%c];y=Yp(s.setContext(cs(i,{type:"segment",p0:b,p1:T,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),Z1(y,d)&&m(h,f-1,_.loop,d),b=T,d=y}h<f-1&&m(h,f-1,_.loop,d)}return l}function Yp(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function Z1(n,t){if(!t)return!1;const e=[],s=function(i,r){return jd(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,s)!==JSON.stringify(t,s)}function Qo(n,t,e){return n.options.clip?n[e]:t[e]}function tR(n,t){const{xScale:e,yScale:s}=n;return e&&s?{left:Qo(e,t,"left"),right:Qo(e,t,"right"),top:Qo(s,t,"top"),bottom:Qo(s,t,"bottom")}:t}function yv(n,t){const e=t._clip;if(e.disabled)return!1;const s=tR(t,n.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class eR{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,i){const r=e.listeners[i],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(s-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=tv.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,i)=>{if(!s.running||!s.items.length)return;const r=s.items;let o=r.length-1,a=!1,c;for(;o>=0;--o)c=r[o],c._active?(c._total>s.duration&&(s.duration=c._total),c.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(i.draw(),this._notify(i,s,t,"progress")),r.length||(s.running=!1,this._notify(i,s,t,"complete"),s.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,i)=>Math.max(s,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let i=s.length-1;for(;i>=0;--i)s[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var pn=new eR;const Kp="transparent",nR={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const s=$p(n||Kp),i=s.valid&&$p(t||Kp);return i&&i.valid?i.mix(s,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class sR{constructor(t,e,s,i){const r=e[s];i=gr([t.to,i,r,t.from]);const o=gr([t.from,r,i]);this._active=!0,this._fn=t.fn||nR[t.type||typeof o],this._easing=Rr[t.easing]||Rr.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const i=this._target[this._prop],r=s-this._start,o=this._duration-r;this._start=s,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=gr([t.to,e,i,t.from]),this._from=gr([t.from,i,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,i=this._prop,r=this._from,o=this._loop,a=this._to;let c;if(this._active=r!==a&&(o||e<s),!this._active){this._target[i]=a,this._notify(!0);return}if(e<0){this._target[i]=r;return}c=e/s%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[i]=this._fn(r,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let i=0;i<s.length;i++)s[i][e]()}}class vv{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!it(t))return;const e=Object.keys(St.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const r=t[i];if(!it(r))return;const o={};for(const a of e)o[a]=r[a];(kt(r.properties)&&r.properties||[i]).forEach(a=>{(a===i||!s.has(a))&&s.set(a,o)})})}_animateOptions(t,e){const s=e.options,i=rR(t,s);if(!i)return[];const r=this._createAnimations(i,s);return s.$shared&&iR(t.options.$animations,s).then(()=>{t.options=s},()=>{}),r}_createAnimations(t,e){const s=this._properties,i=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){i.push(...this._animateOptions(t,e));continue}const d=e[l];let h=r[l];const f=s.get(l);if(h)if(f&&h.active()){h.update(f,d,a);continue}else h.cancel();if(!f||!f.duration){t[l]=d;continue}r[l]=h=new sR(f,t,l,d),i.push(h)}return i}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return pn.add(this._chart,s),!0}}function iR(n,t){const e=[],s=Object.keys(t);for(let i=0;i<s.length;i++){const r=n[s[i]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function rR(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Qp(n,t){const e=n&&n.options||{},s=e.reverse,i=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:s?r:i,end:s?i:r}}function oR(n,t,e){if(e===!1)return!1;const s=Qp(n,e),i=Qp(t,e);return{top:i.end,right:s.end,bottom:i.start,left:s.start}}function aR(n){let t,e,s,i;return it(n)?(t=n.top,e=n.right,s=n.bottom,i=n.left):t=e=s=i=n,{top:t,right:e,bottom:s,left:i,disabled:n===!1}}function bv(n,t){const e=[],s=n._getSortedDatasetMetas(t);let i,r;for(i=0,r=s.length;i<r;++i)e.push(s[i].index);return e}function Xp(n,t,e,s={}){const i=n.keys,r=s.mode==="single";let o,a,c,l;if(t===null)return;let d=!1;for(o=0,a=i.length;o<a;++o){if(c=+i[o],c===e){if(d=!0,s.all)continue;break}l=n.values[c],Nt(l)&&(r||t===0||en(t)===en(l))&&(t+=l)}return!d&&!s.all?0:t}function cR(n,t){const{iScale:e,vScale:s}=t,i=e.axis==="x"?"x":"y",r=s.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let c,l,d;for(c=0,l=o.length;c<l;++c)d=o[c],a[c]={[i]:d,[r]:n[d]};return a}function Tl(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function lR(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function uR(n){const{min:t,max:e,minDefined:s,maxDefined:i}=n.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:i?e:Number.POSITIVE_INFINITY}}function dR(n,t,e){const s=n[t]||(n[t]={});return s[e]||(s[e]={})}function Jp(n,t,e,s){for(const i of t.getMatchingVisibleMetas(s).reverse()){const r=n[i.index];if(e&&r>0||!e&&r<0)return i.index}return null}function Zp(n,t){const{chart:e,_cachedMeta:s}=n,i=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=s,c=r.axis,l=o.axis,d=lR(r,o,s),h=t.length;let f;for(let m=0;m<h;++m){const _=t[m],{[c]:b,[l]:y}=_,T=_._stacks||(_._stacks={});f=T[l]=dR(i,d,b),f[a]=y,f._top=Jp(f,o,!0,s.type),f._bottom=Jp(f,o,!1,s.type);const I=f._visualValues||(f._visualValues={});I[a]=y}}function Il(n,t){const e=n.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function hR(n,t){return cs(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function fR(n,t,e){return cs(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function Qi(n,t){const e=n.controller.index,s=n.vScale&&n.vScale.axis;if(s){t=t||n._parsed;for(const i of t){const r=i._stacks;if(!r||r[s]===void 0||r[s][e]===void 0)return;delete r[s][e],r[s]._visualValues!==void 0&&r[s]._visualValues[e]!==void 0&&delete r[s]._visualValues[e]}}}const Al=n=>n==="reset"||n==="none",tm=(n,t)=>t?n:Object.assign({},n),pR=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:bv(e,!0),values:null};class $e{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Tl(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Qi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),i=(h,f,m,_)=>h==="x"?f:h==="r"?_:m,r=e.xAxisID=K(s.xAxisID,Il(t,"x")),o=e.yAxisID=K(s.yAxisID,Il(t,"y")),a=e.rAxisID=K(s.rAxisID,Il(t,"r")),c=e.indexAxis,l=e.iAxisID=i(c,r,o,a),d=e.vAxisID=i(c,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Lp(this._data,this),t._stacked&&Qi(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(it(e)){const i=this._cachedMeta;this._data=cR(e,i)}else if(s!==e){if(s){Lp(s,this);const i=this._cachedMeta;Qi(i),i._parsed=[]}e&&Object.isExtensible(e)&&JS(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let i=!1;this._dataCheck();const r=e._stacked;e._stacked=Tl(e.vScale,e),e.stack!==s.stack&&(i=!0,Qi(e),e.stack=s.stack),this._resyncElements(t),(i||r!==e._stacked)&&(Zp(this,e._parsed),e._stacked=Tl(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:i}=this,{iScale:r,_stacked:o}=s,a=r.axis;let c=t===0&&e===i.length?!0:s._sorted,l=t>0&&s._parsed[t-1],d,h,f;if(this._parsing===!1)s._parsed=i,s._sorted=!0,f=i;else{kt(i[t])?f=this.parseArrayData(s,i,t,e):it(i[t])?f=this.parseObjectData(s,i,t,e):f=this.parsePrimitiveData(s,i,t,e);const m=()=>h[a]===null||l&&h[a]<l[a];for(d=0;d<e;++d)s._parsed[d+t]=h=f[d],c&&(m()&&(c=!1),l=h);s._sorted=c}o&&Zp(this,f)}parsePrimitiveData(t,e,s,i){const{iScale:r,vScale:o}=t,a=r.axis,c=o.axis,l=r.getLabels(),d=r===o,h=new Array(i);let f,m,_;for(f=0,m=i;f<m;++f)_=f+s,h[f]={[a]:d||r.parse(l[_],_),[c]:o.parse(e[_],_)};return h}parseArrayData(t,e,s,i){const{xScale:r,yScale:o}=t,a=new Array(i);let c,l,d,h;for(c=0,l=i;c<l;++c)d=c+s,h=e[d],a[c]={x:r.parse(h[0],d),y:o.parse(h[1],d)};return a}parseObjectData(t,e,s,i){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(i);let d,h,f,m;for(d=0,h=i;d<h;++d)f=d+s,m=e[f],l[d]={x:r.parse(ss(m,a),f),y:o.parse(ss(m,c),f)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const i=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:bv(i,!0),values:e._stacks[t.axis]._visualValues};return Xp(a,o,r.index,{mode:s})}updateRangeFromParsed(t,e,s,i){const r=s[e.axis];let o=r===null?NaN:r;const a=i&&s._stacks[e.axis];i&&a&&(i.values=a,o=Xp(i,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const s=this._cachedMeta,i=s._parsed,r=s._sorted&&t===s.iScale,o=i.length,a=this._getOtherScale(t),c=pR(e,s,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=uR(a);let f,m;function _(){m=i[f];const b=m[a.axis];return!Nt(m[t.axis])||d>b||h<b}for(f=0;f<o&&!(!_()&&(this.updateRangeFromParsed(l,t,m,c),r));++f);if(r){for(f=o-1;f>=0;--f)if(!_()){this.updateRangeFromParsed(l,t,m,c);break}}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let i,r,o;for(i=0,r=e.length;i<r;++i)o=e[i][t.axis],Nt(o)&&s.push(o);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,i=e.vScale,r=this.getParsed(t);return{label:s?""+s.getLabelForValue(r[s.axis]):"",value:i?""+i.getLabelForValue(r[i.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=aR(K(this.options.clip,oR(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,i=s.data||[],r=e.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||i.length-a,l=this.options.drawActiveElementsOnTop;let d;for(s.dataset&&s.dataset.draw(t,r,a,c),d=a;d<a+c;++d){const h=i[d];h.hidden||(h.active&&l?o.push(h):h.draw(t,r))}for(d=0;d<o.length;++d)o[d].draw(t,r)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const i=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=fR(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=i.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=hR(this.chart.getContext(),this.index)),r.dataset=i,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=s,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const i=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],c=this.enableOptionSharing&&qr(s);if(a)return tm(a,c);const l=this.chart.config,d=l.datasetElementScopeKeys(this._type,t),h=i?[`${t}Hover`,"hover",t,""]:[t,""],f=l.getOptionScopes(this.getDataset(),d),m=Object.keys(St.elements[t]),_=()=>this.getContext(s,i,e),b=l.resolveNamedOptions(f,m,_,h);return b.$shared&&(b.$shared=c,r[o]=Object.freeze(tm(b,c))),b}_resolveAnimations(t,e,s){const i=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let c;if(i.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,e),f=d.getOptionScopes(this.getDataset(),h);c=d.createResolver(f,this.getContext(t,s,e))}const l=new vv(i,c&&c.animations);return c&&c._cacheable&&(r[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Al(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),i=this._sharedOptions,r=this.getSharedOptions(s),o=this.includeOptions(e,r)||r!==i;return this.updateSharedOptions(r,e,s),{sharedOptions:r,includeOptions:o}}updateElement(t,e,s,i){Al(i)?Object.assign(t,s):this._resolveAnimations(e,i).update(t,s)}updateSharedOptions(t,e,s){t&&!Al(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,i){t.active=i;const r=this.getStyle(e,i);this._resolveAnimations(e,s,i).update(t,{options:!i&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const i=s.length,r=e.length,o=Math.min(r,i);o&&this.parse(0,o),r>i?this._insertElements(i,r-i,t):r<i&&this._removeElements(r,i-r)}_insertElements(t,e,s=!0){const i=this._cachedMeta,r=i.data,o=t+e;let a;const c=l=>{for(l.length+=e,a=l.length-1;a>=o;a--)l[a]=l[a-e]};for(c(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&c(i._parsed),this.parse(t,e),s&&this.updateElements(r,t,e,"reset")}updateElements(t,e,s,i){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const i=s._parsed.splice(t,e);s._stacked&&Qi(s,i)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,i]=t;this[e](s,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}N($e,"defaults",{}),N($e,"datasetElementType",null),N($e,"dataElementType",null);function mR(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let s=[];for(let i=0,r=e.length;i<r;i++)s=s.concat(e[i].controller.getAllParsedValues(n));n._cache.$bar=Zy(s.sort((i,r)=>i-r))}return n._cache.$bar}function gR(n){const t=n.iScale,e=mR(t,n.type);let s=t._length,i,r,o,a;const c=()=>{o===32767||o===-32768||(qr(a)&&(s=Math.min(s,Math.abs(o-a)||s)),a=o)};for(i=0,r=e.length;i<r;++i)o=t.getPixelForValue(e[i]),c();for(a=void 0,i=0,r=t.ticks.length;i<r;++i)o=t.getPixelForTick(i),c();return s}function _R(n,t,e,s){const i=e.barThickness;let r,o;return et(i)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=i*s,o=1),{chunk:r/s,ratio:o,start:t.pixels[n]-r/2}}function yR(n,t,e,s){const i=t.pixels,r=i[n];let o=n>0?i[n-1]:null,a=n<i.length-1?i[n+1]:null;const c=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const l=r-(r-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/s,ratio:e.barPercentage,start:l}}function vR(n,t,e,s){const i=e.parse(n[0],s),r=e.parse(n[1],s),o=Math.min(i,r),a=Math.max(i,r);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),t[e.axis]=l,t._custom={barStart:c,barEnd:l,start:i,end:r,min:o,max:a}}function wv(n,t,e,s){return kt(n)?vR(n,t,e,s):t[e.axis]=e.parse(n,s),t}function em(n,t,e,s){const i=n.iScale,r=n.vScale,o=i.getLabels(),a=i===r,c=[];let l,d,h,f;for(l=e,d=e+s;l<d;++l)f=t[l],h={},h[i.axis]=a||i.parse(o[l],l),c.push(wv(f,h,r,l));return c}function kl(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function bR(n,t,e){return n!==0?en(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function wR(n){let t,e,s,i,r;return n.horizontal?(t=n.base>n.x,e="left",s="right"):(t=n.base<n.y,e="bottom",s="top"),t?(i="end",r="start"):(i="start",r="end"),{start:e,end:s,reverse:t,top:i,bottom:r}}function xR(n,t,e,s){let i=t.borderSkipped;const r={};if(!i){n.borderSkipped=r;return}if(i===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:l,bottom:d}=wR(n);i==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===s?i=l:(e._bottom||0)===s?i=d:(r[nm(d,o,a,c)]=!0,i=l)),r[nm(i,o,a,c)]=!0,n.borderSkipped=r}function nm(n,t,e,s){return s?(n=ER(n,t,e),n=sm(n,e,t)):n=sm(n,t,e),n}function ER(n,t,e){return n===t?e:n===e?t:n}function sm(n,t,e){return n==="start"?t:n==="end"?e:n}function TR(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class ga extends $e{parsePrimitiveData(t,e,s,i){return em(t,e,s,i)}parseArrayData(t,e,s,i){return em(t,e,s,i)}parseObjectData(t,e,s,i){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=r.axis==="x"?a:c,d=o.axis==="x"?a:c,h=[];let f,m,_,b;for(f=s,m=s+i;f<m;++f)b=e[f],_={},_[r.axis]=r.parse(ss(b,l),f),h.push(wv(ss(b,d),_,o,f));return h}updateRangeFromParsed(t,e,s,i){super.updateRangeFromParsed(t,e,s,i);const r=s._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:i}=e,r=this.getParsed(t),o=r._custom,a=kl(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(r[i.axis]);return{label:""+s.getLabelForValue(r[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,i){const r=i==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),l=a.isHorizontal(),d=this._getRuler(),{sharedOptions:h,includeOptions:f}=this._getSharedOptions(e,i);for(let m=e;m<e+s;m++){const _=this.getParsed(m),b=r||et(_[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(m),y=this._calculateBarIndexPixels(m,d),T=(_._stacks||{})[a.axis],I={horizontal:l,base:b.base,enableBorderRadius:!T||kl(_._custom)||o===T._top||o===T._bottom,x:l?b.head:y.center,y:l?y.center:b.head,height:l?y.size:Math.abs(b.size),width:l?Math.abs(b.size):y.size};f&&(I.options=h||this.resolveDataElementOptions(m,t[m].active?"active":i));const C=I.options||t[m].options;xR(I,C,T,o),TR(I,C,d.ratio),this.updateElement(t[m],m,I,i)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,i=s.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),r=s.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),c=a&&a[s.axis],l=d=>{const h=d._parsed.find(m=>m[s.axis]===c),f=h&&h[d.vScale.axis];if(et(f)||isNaN(f))return!0};for(const d of i)if(!(e!==void 0&&l(d))&&((r===!1||o.indexOf(d.stack)===-1||r===void 0&&d.stack===void 0)&&o.push(d.stack),d.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[K(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const i=this._getStacks(t,s),r=e!==void 0?i.indexOf(e):-1;return r===-1?i.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,i=[];let r,o;for(r=0,o=e.data.length;r<o;++r)i.push(s.getPixelForValue(this.getParsed(r)[s.axis],r));const a=t.barThickness;return{min:a||gR(e),pixels:i,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:i},options:{base:r,minBarLength:o}}=this,a=r||0,c=this.getParsed(t),l=c._custom,d=kl(l);let h=c[e.axis],f=0,m=s?this.applyStack(e,c,s):h,_,b;m!==h&&(f=m-h,m=h),d&&(h=l.barStart,m=l.barEnd-l.barStart,h!==0&&en(h)!==en(l.barEnd)&&(f=0),f+=h);const y=!et(r)&&!d?r:f;let T=e.getPixelForValue(y);if(this.chart.getDataVisibility(t)?_=e.getPixelForValue(f+m):_=T,b=_-T,Math.abs(b)<o){b=bR(b,e,a)*o,h===a&&(T-=b/2);const I=e.getPixelForDecimal(0),C=e.getPixelForDecimal(1),R=Math.min(I,C),D=Math.max(I,C);T=Math.max(Math.min(T,D),R),_=T+b,s&&!d&&(c._stacks[e.axis]._visualValues[i]=e.getValueForPixel(_)-e.getValueForPixel(T))}if(T===e.getPixelForValue(a)){const I=en(b)*e.getLineWidthForValue(a)/2;T+=I,b-=I}return{size:b,base:T,head:_,center:_+b/2}}_calculateBarIndexPixels(t,e){const s=e.scale,i=this.options,r=i.skipNull,o=K(i.maxBarThickness,1/0);let a,c;const l=this._getAxisCount();if(e.grouped){const d=r?this._getStackCount(t):e.stackCount,h=i.barThickness==="flex"?yR(t,e,i,d*l):_R(t,e,i,d*l),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,m=this._getAxis().indexOf(K(f,this.getFirstScaleIdForIndexAxis())),_=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+m;a=h.start+h.chunk*_+h.chunk/2,c=Math.min(o,h.chunk*h.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,i=s.length;let r=0;for(;r<i;++r)this.getParsed(r)[e.axis]!==null&&!s[r].hidden&&s[r].draw(this._ctx)}}N(ga,"id","bar"),N(ga,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),N(ga,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class _a extends $e{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,i){const r=super.parsePrimitiveData(t,e,s,i);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+s).radius;return r}parseArrayData(t,e,s,i){const r=super.parseArrayData(t,e,s,i);for(let o=0;o<r.length;o++){const a=e[s+o];r[o]._custom=K(a[2],this.resolveDataElementOptions(o+s).radius)}return r}parseObjectData(t,e,s,i){const r=super.parseObjectData(t,e,s,i);for(let o=0;o<r.length;o++){const a=e[s+o];r[o]._custom=K(a&&a.r&&+a.r,this.resolveDataElementOptions(o+s).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),c=r.getLabelForValue(o.y),l=o._custom;return{label:s[t]||"",value:"("+a+", "+c+(l?", "+l:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:l}=this._getSharedOptions(e,i),d=o.axis,h=a.axis;for(let f=e;f<e+s;f++){const m=t[f],_=!r&&this.getParsed(f),b={},y=b[d]=r?o.getPixelForDecimal(.5):o.getPixelForValue(_[d]),T=b[h]=r?a.getBasePixel():a.getPixelForValue(_[h]);b.skip=isNaN(y)||isNaN(T),l&&(b.options=c||this.resolveDataElementOptions(f,m.active?"active":i),r&&(b.options.radius=0)),this.updateElement(m,f,b,i)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let i=super.resolveDataElementOptions(t,e);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const r=i.radius;return e!=="active"&&(i.radius=0),i.radius+=K(s&&s._custom,r),i}}N(_a,"id","bubble"),N(_a,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),N(_a,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function IR(n,t,e){let s=1,i=1,r=0,o=0;if(t<It){const a=n,c=a+t,l=Math.cos(a),d=Math.sin(a),h=Math.cos(c),f=Math.sin(c),m=(C,R,D)=>Wr(C,a,c,!0)?1:Math.max(R,R*e,D,D*e),_=(C,R,D)=>Wr(C,a,c,!0)?-1:Math.min(R,R*e,D,D*e),b=m(0,l,h),y=m(Ut,d,f),T=_(ut,l,h),I=_(ut+Ut,d,f);s=(b-T)/2,i=(y-I)/2,r=-(b+T)/2,o=-(y+I)/2}return{ratioX:s,ratioY:i,offsetX:r,offsetY:o}}class Ts extends $e{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=s;else{let r=c=>+s[c];if(it(s[t])){const{key:c="value"}=this._parsing;r=l=>+ss(s[l],c)}let o,a;for(o=t,a=t+e;o<a;++o)i._parsed[o]=r(o)}}_getRotation(){return Fe(this.options.rotation-90)}_getCircumference(){return Fe(this.options.circumference)}_getRotationExtents(){let t=It,e=-It;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const i=this.chart.getDatasetMeta(s).controller,r=i._getRotation(),o=i._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,i=this._cachedMeta,r=i.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-o)/2,0),c=Math.min(VS(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:d,rotation:h}=this._getRotationExtents(),{ratioX:f,ratioY:m,offsetX:_,offsetY:b}=IR(h,d,c),y=(s.width-o)/f,T=(s.height-o)/m,I=Math.max(Math.min(y,T)/2,0),C=Yy(this.options.radius,I),R=Math.max(C*c,0),D=(C-R)/this._getVisibleDatasetWeightTotal();this.offsetX=_*C,this.offsetY=b*C,i.total=this.calculateTotal(),this.outerRadius=C-D*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-D*l,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const s=this.options,i=this._cachedMeta,r=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*r/It)}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,d=(a.left+a.right)/2,h=(a.top+a.bottom)/2,f=r&&l.animateScale,m=f?0:this.innerRadius,_=f?0:this.outerRadius,{sharedOptions:b,includeOptions:y}=this._getSharedOptions(e,i);let T=this._getRotation(),I;for(I=0;I<e;++I)T+=this._circumference(I,r);for(I=e;I<e+s;++I){const C=this._circumference(I,r),R=t[I],D={x:d+this.offsetX,y:h+this.offsetY,startAngle:T,endAngle:T+C,circumference:C,outerRadius:_,innerRadius:m};y&&(D.options=b||this.resolveDataElementOptions(I,R.active?"active":i)),T+=C,this.updateElement(R,I,D,i)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,i;for(i=0;i<e.length;i++){const r=t._parsed[i];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(i)&&!e[i].hidden&&(s+=Math.abs(r))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?It*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=po(e._parsed[t],s.options.locale);return{label:i[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const s=this.chart;let i,r,o,a,c;if(!t){for(i=0,r=s.data.datasets.length;i<r;++i)if(s.isDatasetVisible(i)){o=s.getDatasetMeta(i),t=o.data,a=o.controller;break}}if(!t)return 0;for(i=0,r=t.length;i<r;++i)c=a.resolveDataElementOptions(i),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,i=t.length;s<i;++s){const r=this.resolveDataElementOptions(s);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(K(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}N(Ts,"id","doughnut"),N(Ts,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),N(Ts,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),N(Ts,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,l)=>{const h=t.getDatasetMeta(0).controller.getStyle(l);return{text:c,fillStyle:h.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(l),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:i,pointStyle:s,borderRadius:o&&(a||h.borderRadius),index:l}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class ya extends $e{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:i=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=nv(e,i,o);this._drawStart=a,this._drawCount=c,sv(e)&&(a=0,c=i.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!r._decimated,s.points=i;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:l},t),this.updateElements(i,a,c,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(e,i),f=o.axis,m=a.axis,{spanGaps:_,segment:b}=this.options,y=Ti(_)?_:Number.POSITIVE_INFINITY,T=this.chart._animationsDisabled||r||i==="none",I=e+s,C=t.length;let R=e>0&&this.getParsed(e-1);for(let D=0;D<C;++D){const O=t[D],x=T?O:{};if(D<e||D>=I){x.skip=!0;continue}const v=this.getParsed(D),w=et(v[m]),A=x[f]=o.getPixelForValue(v[f],D),S=x[m]=r||w?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,v,c):v[m],D);x.skip=isNaN(A)||isNaN(S)||w,x.stop=D>0&&Math.abs(v[f]-R[f])>y,b&&(x.parsed=v,x.raw=l.data[D]),h&&(x.options=d||this.resolveDataElementOptions(D,O.active?"active":i)),T||this.updateElement(O,D,x,i),R=v}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,i=t.data||[];if(!i.length)return s;const r=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(s,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}N(ya,"id","line"),N(ya,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),N(ya,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Cr extends $e{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=po(e._parsed[t].r,s.options.locale);return{label:i[t]||"",value:r}}parseObjectData(t,e,s,i){return dv.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,i)=>{const r=this.getParsed(i).r;!isNaN(r)&&this.chart.getDataVisibility(i)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,i=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(i/2,0),o=Math.max(s.cutoutPercentage?r/100*s.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,c=o.options.animation,l=this._cachedMeta.rScale,d=l.xCenter,h=l.yCenter,f=l.getIndexAngle(0)-.5*ut;let m=f,_;const b=360/this.countVisibleElements();for(_=0;_<e;++_)m+=this._computeAngle(_,i,b);for(_=e;_<e+s;_++){const y=t[_];let T=m,I=m+this._computeAngle(_,i,b),C=o.getDataVisibility(_)?l.getDistanceFromCenterForValue(this.getParsed(_).r):0;m=I,r&&(c.animateScale&&(C=0),c.animateRotate&&(T=I=f));const R={x:d,y:h,innerRadius:0,outerRadius:C,startAngle:T,endAngle:I,options:this.resolveDataElementOptions(_,y.active?"active":i)};this.updateElement(y,_,R,i)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?Fe(this.resolveDataElementOptions(t,e).angle||s):0}}N(Cr,"id","polarArea"),N(Cr,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),N(Cr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:i}}=t.legend.options;return e.labels.map((r,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:i,lineWidth:c.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class _u extends Ts{}N(_u,"id","pie"),N(_u,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class va extends $e{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,i){return dv.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta,s=e.dataset,i=e.data||[],r=e.iScale.getLabels();if(s.points=i,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===i.length,options:o};this.updateElement(s,void 0,a,t)}this.updateElements(i,0,i.length,t)}updateElements(t,e,s,i){const r=this._cachedMeta.rScale,o=i==="reset";for(let a=e;a<e+s;a++){const c=t[a],l=this.resolveDataElementOptions(a,c.active?"active":i),d=r.getPointPositionForValue(a,this.getParsed(a).r),h=o?r.xCenter:d.x,f=o?r.yCenter:d.y,m={x:h,y:f,angle:d.angle,skip:isNaN(h)||isNaN(f),options:l};this.updateElement(c,a,m,i)}}}N(va,"id","radar"),N(va,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),N(va,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class ba extends $e{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),c=r.getLabelForValue(o.y);return{label:s[t]||"",value:"("+a+", "+c+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,i=this.chart._animationsDisabled;let{start:r,count:o}=nv(e,s,i);if(this._drawStart=r,this._drawCount=o,sv(e)&&(r=0,o=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:c}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=s;const l=this.resolveDatasetElementOptions(t);l.segment=this.options.segment,this.updateElement(a,void 0,{animated:!i,options:l},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,d=this.resolveDataElementOptions(e,i),h=this.getSharedOptions(d),f=this.includeOptions(i,h),m=o.axis,_=a.axis,{spanGaps:b,segment:y}=this.options,T=Ti(b)?b:Number.POSITIVE_INFINITY,I=this.chart._animationsDisabled||r||i==="none";let C=e>0&&this.getParsed(e-1);for(let R=e;R<e+s;++R){const D=t[R],O=this.getParsed(R),x=I?D:{},v=et(O[_]),w=x[m]=o.getPixelForValue(O[m],R),A=x[_]=r||v?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,O,c):O[_],R);x.skip=isNaN(w)||isNaN(A)||v,x.stop=R>0&&Math.abs(O[m]-C[m])>T,y&&(x.parsed=O,x.raw=l.data[R]),f&&(x.options=h||this.resolveDataElementOptions(R,D.active?"active":i)),I||this.updateElement(D,R,x,i),C=O}this.updateSharedOptions(h,i,d)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let c=e.length-1;c>=0;--c)a=Math.max(a,e[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const s=t.dataset,i=s.options&&s.options.borderWidth||0;if(!e.length)return i;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(i,r,o)/2}}N(ba,"id","scatter"),N(ba,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),N(ba,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var AR=Object.freeze({__proto__:null,BarController:ga,BubbleController:_a,DoughnutController:Ts,LineController:ya,PieController:_u,PolarAreaController:Cr,RadarController:va,ScatterController:ba});function ms(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Kd{constructor(t){N(this,"options");this.options=t||{}}static override(t){Object.assign(Kd.prototype,t)}init(){}formats(){return ms()}parse(){return ms()}format(){return ms()}add(){return ms()}diff(){return ms()}startOf(){return ms()}endOf(){return ms()}}var xv={_date:Kd};function kR(n,t,e,s){const{controller:i,data:r,_sorted:o}=n,a=i._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const l=a._reversePixels?QS:xn;if(s){if(i._sharedOptions){const d=r[0],h=typeof d.getRange=="function"&&d.getRange(t);if(h){const f=l(r,t,e-h),m=l(r,t,e+h);return{lo:f.lo,hi:m.hi}}}}else{const d=l(r,t,e);if(c){const{vScale:h}=i._cachedMeta,{_parsed:f}=n,m=f.slice(0,d.lo+1).reverse().findIndex(b=>!et(b[h.axis]));d.lo-=Math.max(0,m);const _=f.slice(d.hi).findIndex(b=>!et(b[h.axis]));d.hi+=Math.max(0,_)}return d}}return{lo:0,hi:r.length-1}}function Oc(n,t,e,s,i){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,c=r.length;a<c;++a){const{index:l,data:d}=r[a],{lo:h,hi:f}=kR(r[a],t,o,i);for(let m=h;m<=f;++m){const _=d[m];_.skip||s(_,l,m)}}}function SR(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(s,i){const r=t?Math.abs(s.x-i.x):0,o=e?Math.abs(s.y-i.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Sl(n,t,e,s,i){const r=[];return!i&&!n.isPointInArea(t)||Oc(n,e,t,function(a,c,l){!i&&!En(a,n.chartArea,0)||a.inRange(t.x,t.y,s)&&r.push({element:a,datasetIndex:c,index:l})},!0),r}function RR(n,t,e,s){let i=[];function r(o,a,c){const{startAngle:l,endAngle:d}=o.getProps(["startAngle","endAngle"],s),{angle:h}=Xy(o,{x:t.x,y:t.y});Wr(h,l,d)&&i.push({element:o,datasetIndex:a,index:c})}return Oc(n,e,t,r),i}function PR(n,t,e,s,i,r){let o=[];const a=SR(e);let c=Number.POSITIVE_INFINITY;function l(d,h,f){const m=d.inRange(t.x,t.y,i);if(s&&!m)return;const _=d.getCenterPoint(i);if(!(!!r||n.isPointInArea(_))&&!m)return;const y=a(t,_);y<c?(o=[{element:d,datasetIndex:h,index:f}],c=y):y===c&&o.push({element:d,datasetIndex:h,index:f})}return Oc(n,e,t,l),o}function Rl(n,t,e,s,i,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!s?RR(n,t,e,i):PR(n,t,e,s,i,r)}function im(n,t,e,s,i){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return Oc(n,e,t,(c,l,d)=>{c[o]&&c[o](t[e],i)&&(r.push({element:c,datasetIndex:l,index:d}),a=a||c.inRange(t.x,t.y,i))}),s&&!a?[]:r}var CR={modes:{index(n,t,e,s){const i=vs(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Sl(n,i,r,s,o):Rl(n,i,r,!1,s,o),c=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(l=>{const d=a[0].index,h=l.data[d];h&&!h.skip&&c.push({element:h,datasetIndex:l.index,index:d})}),c):[]},dataset(n,t,e,s){const i=vs(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Sl(n,i,r,s,o):Rl(n,i,r,!1,s,o);if(a.length>0){const c=a[0].datasetIndex,l=n.getDatasetMeta(c).data;a=[];for(let d=0;d<l.length;++d)a.push({element:l[d],datasetIndex:c,index:d})}return a},point(n,t,e,s){const i=vs(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Sl(n,i,r,s,o)},nearest(n,t,e,s){const i=vs(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Rl(n,i,r,e.intersect,s,o)},x(n,t,e,s){const i=vs(t,n);return im(n,i,"x",e.intersect,s)},y(n,t,e,s){const i=vs(t,n);return im(n,i,"y",e.intersect,s)}}};const Ev=["left","top","right","bottom"];function Xi(n,t){return n.filter(e=>e.pos===t)}function rm(n,t){return n.filter(e=>Ev.indexOf(e.pos)===-1&&e.box.axis===t)}function Ji(n,t){return n.sort((e,s)=>{const i=t?s:e,r=t?e:s;return i.weight===r.weight?i.index-r.index:i.weight-r.weight})}function DR(n){const t=[];let e,s,i,r,o,a;for(e=0,s=(n||[]).length;e<s;++e)i=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=i,t.push({index:e,box:i,pos:r,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&r+o,stackWeight:a});return t}function OR(n){const t={};for(const e of n){const{stack:s,pos:i,stackWeight:r}=e;if(!s||!Ev.includes(i))continue;const o=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function MR(n,t){const e=OR(n),{vBoxMaxWidth:s,hBoxMaxHeight:i}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:c}=a.box,l=e[a.stack],d=l&&a.stackWeight/l.weight;a.horizontal?(a.width=d?d*s:c&&t.availableWidth,a.height=i):(a.width=s,a.height=d?d*i:c&&t.availableHeight)}return e}function NR(n){const t=DR(n),e=Ji(t.filter(l=>l.box.fullSize),!0),s=Ji(Xi(t,"left"),!0),i=Ji(Xi(t,"right")),r=Ji(Xi(t,"top"),!0),o=Ji(Xi(t,"bottom")),a=rm(t,"x"),c=rm(t,"y");return{fullSize:e,leftAndTop:s.concat(r),rightAndBottom:i.concat(c).concat(o).concat(a),chartArea:Xi(t,"chartArea"),vertical:s.concat(i).concat(c),horizontal:r.concat(o).concat(a)}}function om(n,t,e,s){return Math.max(n[e],t[e])+Math.max(n[s],t[s])}function Tv(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function LR(n,t,e,s){const{pos:i,box:r}=e,o=n.maxPadding;if(!it(i)){e.size&&(n[i]-=e.size);const h=s[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?r.height:r.width),e.size=h.size/h.count,n[i]+=e.size}r.getPadding&&Tv(o,r.getPadding());const a=Math.max(0,t.outerWidth-om(o,n,"left","right")),c=Math.max(0,t.outerHeight-om(o,n,"top","bottom")),l=a!==n.w,d=c!==n.h;return n.w=a,n.h=c,e.horizontal?{same:l,other:d}:{same:d,other:l}}function VR(n){const t=n.maxPadding;function e(s){const i=Math.max(t[s]-n[s],0);return n[s]+=i,i}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function FR(n,t){const e=t.maxPadding;function s(i){const r={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return s(n?["left","right"]:["top","bottom"])}function _r(n,t,e,s){const i=[];let r,o,a,c,l,d;for(r=0,o=n.length,l=0;r<o;++r){a=n[r],c=a.box,c.update(a.width||t.w,a.height||t.h,FR(a.horizontal,t));const{same:h,other:f}=LR(t,e,a,s);l|=h&&i.length,d=d||f,c.fullSize||i.push(a)}return l&&_r(i,t,e,s)||d}function Xo(n,t,e,s,i){n.top=e,n.left=t,n.right=t+s,n.bottom=e+i,n.width=s,n.height=i}function am(n,t,e,s){const i=e.padding;let{x:r,y:o}=t;for(const a of n){const c=a.box,l=s[a.stack]||{placed:0,weight:1},d=a.stackWeight/l.weight||1;if(a.horizontal){const h=t.w*d,f=l.size||c.height;qr(l.start)&&(o=l.start),c.fullSize?Xo(c,i.left,o,e.outerWidth-i.right-i.left,f):Xo(c,t.left+l.placed,o,h,f),l.start=o,l.placed+=h,o=c.bottom}else{const h=t.h*d,f=l.size||c.width;qr(l.start)&&(r=l.start),c.fullSize?Xo(c,r,i.top,f,e.outerHeight-i.bottom-i.top):Xo(c,r,t.top+l.placed,f,h),l.start=r,l.placed+=h,r=c.right}}t.x=r,t.y=o}var pe={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,s){if(!n)return;const i=ge(n.options.layout.padding),r=Math.max(t-i.width,0),o=Math.max(e-i.height,0),a=NR(n.boxes),c=a.vertical,l=a.horizontal;pt(n.boxes,b=>{typeof b.beforeLayout=="function"&&b.beforeLayout()});const d=c.reduce((b,y)=>y.box.options&&y.box.options.display===!1?b:b+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:i,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/d,hBoxMaxHeight:o/2}),f=Object.assign({},i);Tv(f,ge(s));const m=Object.assign({maxPadding:f,w:r,h:o,x:i.left,y:i.top},i),_=MR(c.concat(l),h);_r(a.fullSize,m,h,_),_r(c,m,h,_),_r(l,m,h,_)&&_r(c,m,h,_),VR(m),am(a.leftAndTop,m,h,_),m.x+=m.w,m.y+=m.h,am(a.rightAndBottom,m,h,_),n.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},pt(a.chartArea,b=>{const y=b.box;Object.assign(y,n.chartArea),y.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class Iv{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,i){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):s)}}isAttached(t){return!0}updateConfig(t){}}class $R extends Iv{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const wa="$chartjs",BR={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},cm=n=>n===null||n==="";function UR(n,t){const e=n.style,s=n.getAttribute("height"),i=n.getAttribute("width");if(n[wa]={initial:{height:s,width:i,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",cm(i)){const r=qp(n,"width");r!==void 0&&(n.width=r)}if(cm(s))if(n.style.height==="")n.height=n.width/(t||2);else{const r=qp(n,"height");r!==void 0&&(n.height=r)}return n}const Av=z1?{passive:!0}:!1;function jR(n,t,e){n&&n.addEventListener(t,e,Av)}function zR(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,Av)}function HR(n,t){const e=BR[n.type]||n.type,{x:s,y:i}=vs(n,t);return{type:e,chart:t,native:n,x:s!==void 0?s:null,y:i!==void 0?i:null}}function Xa(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function qR(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Xa(a.addedNodes,s),o=o&&!Xa(a.removedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}function WR(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Xa(a.removedNodes,s),o=o&&!Xa(a.addedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}const Yr=new Map;let lm=0;function kv(){const n=window.devicePixelRatio;n!==lm&&(lm=n,Yr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function GR(n,t){Yr.size||window.addEventListener("resize",kv),Yr.set(n,t)}function YR(n){Yr.delete(n),Yr.size||window.removeEventListener("resize",kv)}function KR(n,t,e){const s=n.canvas,i=s&&Yd(s);if(!i)return;const r=ev((a,c)=>{const l=i.clientWidth;e(a,c),l<i.clientWidth&&e()},window),o=new ResizeObserver(a=>{const c=a[0],l=c.contentRect.width,d=c.contentRect.height;l===0&&d===0||r(l,d)});return o.observe(i),GR(n,r),o}function Pl(n,t,e){e&&e.disconnect(),t==="resize"&&YR(n)}function QR(n,t,e){const s=n.canvas,i=ev(r=>{n.ctx!==null&&e(HR(r,n))},n);return jR(s,t,i),i}class XR extends Iv{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(UR(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[wa])return!1;const s=e[wa].initial;["height","width"].forEach(r=>{const o=s[r];et(o)?e.removeAttribute(r):e.setAttribute(r,o)});const i=s.style||{};return Object.keys(i).forEach(r=>{e.style[r]=i[r]}),e.width=e.width,delete e[wa],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const i=t.$proxies||(t.$proxies={}),o={attach:qR,detach:WR,resize:KR}[e]||QR;i[e]=o(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),i=s[e];if(!i)return;({attach:Pl,detach:Pl,resize:Pl}[e]||zR)(t,e,i),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,i){return j1(t,e,s,i)}isAttached(t){const e=t&&Yd(t);return!!(e&&e.isConnected)}}function JR(n){return!Gd()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?$R:XR}class ze{constructor(){N(this,"x");N(this,"y");N(this,"active",!1);N(this,"options");N(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return Ti(this.x)&&Ti(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const i={};return t.forEach(r=>{i[r]=s[r]&&s[r].active()?s[r]._to:this[r]}),i}}N(ze,"defaults",{}),N(ze,"defaultRoutes");function ZR(n,t){const e=n.options.ticks,s=tP(n),i=Math.min(e.maxTicksLimit||s,s),r=e.major.enabled?nP(t):[],o=r.length,a=r[0],c=r[o-1],l=[];if(o>i)return sP(t,l,r,o/i),l;const d=eP(r,t,i);if(o>0){let h,f;const m=o>1?Math.round((c-a)/(o-1)):null;for(Jo(t,l,d,et(m)?0:a-m,a),h=0,f=o-1;h<f;h++)Jo(t,l,d,r[h],r[h+1]);return Jo(t,l,d,c,et(m)?t.length:c+m),l}return Jo(t,l,d),l}function tP(n){const t=n.options.offset,e=n._tickSize(),s=n._length/e+(t?0:1),i=n._maxLength/e;return Math.floor(Math.min(s,i))}function eP(n,t,e){const s=iP(n),i=t.length/e;if(!s)return Math.max(i,1);const r=qS(s);for(let o=0,a=r.length-1;o<a;o++){const c=r[o];if(c>i)return c}return Math.max(i,1)}function nP(n){const t=[];let e,s;for(e=0,s=n.length;e<s;e++)n[e].major&&t.push(e);return t}function sP(n,t,e,s){let i=0,r=e[0],o;for(s=Math.ceil(s),o=0;o<n.length;o++)o===r&&(t.push(n[o]),i++,r=e[i*s])}function Jo(n,t,e,s,i){const r=K(s,0),o=Math.min(K(i,n.length),n.length);let a=0,c,l,d;for(e=Math.ceil(e),i&&(c=i-s,e=c/Math.floor(c/e)),d=r;d<0;)a++,d=Math.round(r+a*e);for(l=Math.max(r,0);l<o;l++)l===d&&(t.push(n[l]),a++,d=Math.round(r+a*e))}function iP(n){const t=n.length;let e,s;if(t<2)return!1;for(s=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==s)return!1;return s}const rP=n=>n==="left"?"right":n==="right"?"left":n,um=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,dm=(n,t)=>Math.min(t||n,n);function hm(n,t){const e=[],s=n.length/t,i=n.length;let r=0;for(;r<i;r+=s)e.push(n[Math.floor(r)]);return e}function oP(n,t,e){const s=n.ticks.length,i=Math.min(t,s-1),r=n._startPixel,o=n._endPixel,a=1e-6;let c=n.getPixelForTick(i),l;if(!(e&&(s===1?l=Math.max(c-r,o-c):t===0?l=(n.getPixelForTick(1)-c)/2:l=(c-n.getPixelForTick(i-1))/2,c+=i<t?l:-l,c<r-a||c>o+a)))return c}function aP(n,t){pt(n,e=>{const s=e.gc,i=s.length/2;let r;if(i>t){for(r=0;r<i;++r)delete e.data[s[r]];s.splice(0,i)}})}function Zi(n){return n.drawTicks?n.tickLength:0}function fm(n,t){if(!n.display)return 0;const e=Qt(n.font,t),s=ge(n.padding);return(kt(n.text)?n.text.length:1)*e.lineHeight+s.height}function cP(n,t){return cs(n,{scale:t,type:"scale"})}function lP(n,t,e){return cs(n,{tick:e,index:t,type:"tick"})}function uP(n,t,e){let s=Ud(n);return(e&&t!=="right"||!e&&t==="right")&&(s=rP(s)),s}function dP(n,t,e,s){const{top:i,left:r,bottom:o,right:a,chart:c}=n,{chartArea:l,scales:d}=c;let h=0,f,m,_;const b=o-i,y=a-r;if(n.isHorizontal()){if(m=ue(s,r,a),it(e)){const T=Object.keys(e)[0],I=e[T];_=d[T].getPixelForValue(I)+b-t}else e==="center"?_=(l.bottom+l.top)/2+b-t:_=um(n,e,t);f=a-r}else{if(it(e)){const T=Object.keys(e)[0],I=e[T];m=d[T].getPixelForValue(I)-y+t}else e==="center"?m=(l.left+l.right)/2-y+t:m=um(n,e,t);_=ue(s,o,i),h=e==="left"?-Ut:Ut}return{titleX:m,titleY:_,maxWidth:f,rotation:h}}class Hs extends ze{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:i}=this;return t=Se(t,Number.POSITIVE_INFINITY),e=Se(e,Number.NEGATIVE_INFINITY),s=Se(s,Number.POSITIVE_INFINITY),i=Se(i,Number.NEGATIVE_INFINITY),{min:Se(t,s),max:Se(e,i),minDefined:Nt(t),maxDefined:Nt(e)}}getMinMax(t){let{min:e,max:s,minDefined:i,maxDefined:r}=this.getUserBounds(),o;if(i&&r)return{min:e,max:s};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,t),i||(e=Math.min(e,o.min)),r||(s=Math.max(s,o.max));return e=r&&e>s?s:e,s=i&&e>s?e:s,{min:Se(e,Se(s,e)),max:Se(s,Se(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){bt(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:i,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=b1(this,r,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?hm(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=ZR(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){bt(this.options.afterUpdate,[this])}beforeSetDimensions(){bt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){bt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),bt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){bt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,i,r;for(s=0,i=t.length;s<i;s++)r=t[s],r.label=bt(e.callback,[r.value,s,t],this)}afterTickToLabelConversion(){bt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){bt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=dm(this.ticks.length,t.ticks.maxTicksLimit),i=e.minRotation||0,r=e.maxRotation;let o=i,a,c,l;if(!this._isVisible()||!e.display||i>=r||s<=1||!this.isHorizontal()){this.labelRotation=i;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,m=Jt(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/s:m/(s-1),h+6>a&&(a=m/(s-(t.offset?.5:1)),c=this.maxHeight-Zi(t.grid)-e.padding-fm(t.title,this.chart.options.font),l=Math.sqrt(h*h+f*f),o=$d(Math.min(Math.asin(Jt((d.highest.height+6)/a,-1,1)),Math.asin(Jt(c/l,-1,1))-Math.asin(Jt(f/l,-1,1)))),o=Math.max(i,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){bt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){bt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:i,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=fm(i,e.options.font);if(a?(t.width=this.maxWidth,t.height=Zi(r)+c):(t.height=this.maxHeight,t.width=Zi(r)+c),s.display&&this.ticks.length){const{first:l,last:d,widest:h,highest:f}=this._getLabelSizes(),m=s.padding*2,_=Fe(this.labelRotation),b=Math.cos(_),y=Math.sin(_);if(a){const T=s.mirror?0:y*h.width+b*f.height;t.height=Math.min(this.maxHeight,t.height+T+m)}else{const T=s.mirror?0:b*h.width+y*f.height;t.width=Math.min(this.maxWidth,t.width+T+m)}this._calculatePadding(l,d,y,b)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,i){const{ticks:{align:r,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,m=0;c?l?(f=i*t.width,m=s*e.height):(f=s*t.height,m=i*e.width):r==="start"?m=e.width:r==="end"?f=t.width:r!=="inner"&&(f=t.width/2,m=e.width/2),this.paddingLeft=Math.max((f-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((m-h+o)*this.width/(this.width-h),0)}else{let d=e.height/2,h=t.height/2;r==="start"?(d=0,h=t.height):r==="end"&&(d=e.height,h=0),this.paddingTop=d+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){bt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)et(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=hm(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:i,_longestTextCache:r}=this,o=[],a=[],c=Math.floor(e/dm(e,s));let l=0,d=0,h,f,m,_,b,y,T,I,C,R,D;for(h=0;h<e;h+=c){if(_=t[h].label,b=this._resolveTickFontOptions(h),i.font=y=b.string,T=r[y]=r[y]||{data:{},gc:[]},I=b.lineHeight,C=R=0,!et(_)&&!kt(_))C=Ka(i,T.data,T.gc,C,_),R=I;else if(kt(_))for(f=0,m=_.length;f<m;++f)D=_[f],!et(D)&&!kt(D)&&(C=Ka(i,T.data,T.gc,C,D),R+=I);o.push(C),a.push(R),l=Math.max(C,l),d=Math.max(R,d)}aP(r,e);const O=o.indexOf(l),x=a.indexOf(d),v=w=>({width:o[w]||0,height:a[w]||0});return{first:v(0),last:v(e-1),widest:v(O),highest:v(x),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return KS(this._alignToPixels?ps(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=lP(this.getContext(),t,s))}return this.$context||(this.$context=cP(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Fe(this.labelRotation),s=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,c=r?r.highest.height+o:0;return this.isHorizontal()?c*s>a*i?a/s:c/i:c*i<a*s?c/s:a/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,i=this.options,{grid:r,position:o,border:a}=i,c=r.offset,l=this.isHorizontal(),h=this.ticks.length+(c?1:0),f=Zi(r),m=[],_=a.setContext(this.getContext()),b=_.display?_.width:0,y=b/2,T=function(Z){return ps(s,Z,b)};let I,C,R,D,O,x,v,w,A,S,P,k;if(o==="top")I=T(this.bottom),x=this.bottom-f,w=I-y,S=T(t.top)+y,k=t.bottom;else if(o==="bottom")I=T(this.top),S=t.top,k=T(t.bottom)-y,x=I+y,w=this.top+f;else if(o==="left")I=T(this.right),O=this.right-f,v=I-y,A=T(t.left)+y,P=t.right;else if(o==="right")I=T(this.left),A=t.left,P=T(t.right)-y,O=I+y,v=this.left+f;else if(e==="x"){if(o==="center")I=T((t.top+t.bottom)/2+.5);else if(it(o)){const Z=Object.keys(o)[0],ot=o[Z];I=T(this.chart.scales[Z].getPixelForValue(ot))}S=t.top,k=t.bottom,x=I+y,w=x+f}else if(e==="y"){if(o==="center")I=T((t.left+t.right)/2);else if(it(o)){const Z=Object.keys(o)[0],ot=o[Z];I=T(this.chart.scales[Z].getPixelForValue(ot))}O=I-y,v=O-f,A=t.left,P=t.right}const tt=K(i.ticks.maxTicksLimit,h),W=Math.max(1,Math.ceil(h/tt));for(C=0;C<h;C+=W){const Z=this.getContext(C),ot=r.setContext(Z),Yt=a.setContext(Z),Ht=ot.lineWidth,an=ot.color,Gs=Yt.dash||[],_e=Yt.dashOffset,Ot=ot.tickWidth,cn=ot.tickColor,Me=ot.tickBorderDash||[],ln=ot.tickBorderDashOffset;R=oP(this,C,c),R!==void 0&&(D=ps(s,R,Ht),l?O=v=A=P=D:x=w=S=k=D,m.push({tx1:O,ty1:x,tx2:v,ty2:w,x1:A,y1:S,x2:P,y2:k,width:Ht,color:an,borderDash:Gs,borderDashOffset:_e,tickWidth:Ot,tickColor:cn,tickBorderDash:Me,tickBorderDashOffset:ln}))}return this._ticksLength=h,this._borderValue=I,m}_computeLabelItems(t){const e=this.axis,s=this.options,{position:i,ticks:r}=s,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:d,mirror:h}=r,f=Zi(s.grid),m=f+d,_=h?-d:m,b=-Fe(this.labelRotation),y=[];let T,I,C,R,D,O,x,v,w,A,S,P,k="middle";if(i==="top")O=this.bottom-_,x=this._getXAxisLabelAlignment();else if(i==="bottom")O=this.top+_,x=this._getXAxisLabelAlignment();else if(i==="left"){const W=this._getYAxisLabelAlignment(f);x=W.textAlign,D=W.x}else if(i==="right"){const W=this._getYAxisLabelAlignment(f);x=W.textAlign,D=W.x}else if(e==="x"){if(i==="center")O=(t.top+t.bottom)/2+m;else if(it(i)){const W=Object.keys(i)[0],Z=i[W];O=this.chart.scales[W].getPixelForValue(Z)+m}x=this._getXAxisLabelAlignment()}else if(e==="y"){if(i==="center")D=(t.left+t.right)/2-m;else if(it(i)){const W=Object.keys(i)[0],Z=i[W];D=this.chart.scales[W].getPixelForValue(Z)}x=this._getYAxisLabelAlignment(f).textAlign}e==="y"&&(c==="start"?k="top":c==="end"&&(k="bottom"));const tt=this._getLabelSizes();for(T=0,I=a.length;T<I;++T){C=a[T],R=C.label;const W=r.setContext(this.getContext(T));v=this.getPixelForTick(T)+r.labelOffset,w=this._resolveTickFontOptions(T),A=w.lineHeight,S=kt(R)?R.length:1;const Z=S/2,ot=W.color,Yt=W.textStrokeColor,Ht=W.textStrokeWidth;let an=x;o?(D=v,x==="inner"&&(T===I-1?an=this.options.reverse?"left":"right":T===0?an=this.options.reverse?"right":"left":an="center"),i==="top"?l==="near"||b!==0?P=-S*A+A/2:l==="center"?P=-tt.highest.height/2-Z*A+A:P=-tt.highest.height+A/2:l==="near"||b!==0?P=A/2:l==="center"?P=tt.highest.height/2-Z*A:P=tt.highest.height-S*A,h&&(P*=-1),b!==0&&!W.showLabelBackdrop&&(D+=A/2*Math.sin(b))):(O=v,P=(1-S)*A/2);let Gs;if(W.showLabelBackdrop){const _e=ge(W.backdropPadding),Ot=tt.heights[T],cn=tt.widths[T];let Me=P-_e.top,ln=0-_e.left;switch(k){case"middle":Me-=Ot/2;break;case"bottom":Me-=Ot;break}switch(x){case"center":ln-=cn/2;break;case"right":ln-=cn;break;case"inner":T===I-1?ln-=cn:T>0&&(ln-=cn/2);break}Gs={left:ln,top:Me,width:cn+_e.width,height:Ot+_e.height,color:W.backdropColor}}y.push({label:R,font:w,textOffset:P,options:{rotation:b,color:ot,strokeColor:Yt,strokeWidth:Ht,textAlign:an,textBaseline:k,translation:[D,O],backdrop:Gs}})}return y}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Fe(this.labelRotation))return t==="top"?"left":"right";let i="center";return e.align==="start"?i="left":e.align==="end"?i="right":e.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:i,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,c=o.widest.width;let l,d;return e==="left"?i?(d=this.right+r,s==="near"?l="left":s==="center"?(l="center",d+=c/2):(l="right",d+=c)):(d=this.right-a,s==="near"?l="right":s==="center"?(l="center",d-=c/2):(l="left",d=this.left)):e==="right"?i?(d=this.left+r,s==="near"?l="right":s==="center"?(l="center",d-=c/2):(l="left",d-=c)):(d=this.left+a,s==="near"?l="left":s==="center"?(l="center",d+=c/2):(l="right",d=this.right)):l="right",{textAlign:l,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:i,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,i,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex(r=>r.value===t);return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(c,l,d)=>{!d.width||!d.color||(s.save(),s.lineWidth=d.width,s.strokeStyle=d.color,s.setLineDash(d.borderDash||[]),s.lineDashOffset=d.borderDashOffset,s.beginPath(),s.moveTo(c.x,c.y),s.lineTo(l.x,l.y),s.stroke(),s.restore())};if(e.display)for(r=0,o=i.length;r<o;++r){const c=i[r];e.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:i}}=this,r=s.setContext(this.getContext()),o=s.display?r.width:0;if(!o)return;const a=i.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,d,h,f;this.isHorizontal()?(l=ps(t,this.left,o)-o/2,d=ps(t,this.right,a)+a/2,h=f=c):(h=ps(t,this.top,o)-o/2,f=ps(t,this.bottom,a)+a/2,l=d=c),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(l,h),e.lineTo(d,f),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,i=this._computeLabelArea();i&&Pc(s,i);const r=this.getLabelItems(t);for(const o of r){const a=o.options,c=o.font,l=o.label,d=o.textOffset;Fs(s,l,0,d,c,a)}i&&Cc(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:i}}=this;if(!s.display)return;const r=Qt(s.font),o=ge(s.padding),a=s.align;let c=r.lineHeight/2;e==="bottom"||e==="center"||it(e)?(c+=o.bottom,kt(s.text)&&(c+=r.lineHeight*(s.text.length-1))):c+=o.top;const{titleX:l,titleY:d,maxWidth:h,rotation:f}=dP(this,c,e,a);Fs(t,s.text,0,0,r,{color:s.color,maxWidth:h,rotation:f,textAlign:uP(a,e,i),textBaseline:"middle",translation:[l,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=K(t.grid&&t.grid.z,-1),i=K(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Hs.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:s,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",i=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[s]===this.id&&(!t||a.type===t)&&i.push(a)}return i}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Qt(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Zo{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;pP(e)&&(s=this.register(e));const i=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in i||(i[r]=t,hP(t,o,s),this.override&&St.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,i=this.scope;s in e&&delete e[s],i&&s in St[i]&&(delete St[i][s],this.override&&delete Vs[s])}}function hP(n,t,e){const s=Hr(Object.create(null),[e?St.get(e):{},St.get(t),n.defaults]);St.set(t,s),n.defaultRoutes&&fP(t,n.defaultRoutes),n.descriptors&&St.describe(t,n.descriptors)}function fP(n,t){Object.keys(t).forEach(e=>{const s=e.split("."),i=s.pop(),r=[n].concat(s).join("."),o=t[e].split("."),a=o.pop(),c=o.join(".");St.route(r,i,c,a)})}function pP(n){return"id"in n&&"defaults"in n}class mP{constructor(){this.controllers=new Zo($e,"datasets",!0),this.elements=new Zo(ze,"elements"),this.plugins=new Zo(Object,"plugins"),this.scales=new Zo(Hs,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(i=>{const r=s||this._getRegistryForType(i);s||r.isForType(i)||r===this.plugins&&i.id?this._exec(t,r,i):pt(i,o=>{const a=s||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,s){const i=Fd(t);bt(s["before"+i],[],s),e[t](s),bt(s["after"+i],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const i=e.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return i}}var We=new mP;class gP{constructor(){this._init=void 0}notify(t,e,s,i){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=i?this._descriptors(t).filter(i):this._descriptors(t),o=this._notify(r,t,e,s);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,s,i){i=i||{};for(const r of t){const o=r.plugin,a=o[s],c=[e,i,r.options];if(bt(a,c,o)===!1&&i.cancelable)return!1}return!0}invalidate(){et(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,i=K(s.options&&s.options.plugins,{}),r=_P(s);return i===!1&&!e?[]:vP(t,r,i,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,i=(r,o)=>r.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(i(e,s),t,"stop"),this._notify(i(s,e),t,"start")}}function _P(n){const t={},e=[],s=Object.keys(We.plugins.items);for(let r=0;r<s.length;r++)e.push(We.getPlugin(s[r]));const i=n.plugins||[];for(let r=0;r<i.length;r++){const o=i[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function yP(n,t){return!t&&n===!1?null:n===!0?{}:n}function vP(n,{plugins:t,localIds:e},s,i){const r=[],o=n.getContext();for(const a of t){const c=a.id,l=yP(s[c],i);l!==null&&r.push({plugin:a,options:bP(n.config,{plugin:a,local:e[c]},l,o)})}return r}function bP(n,{plugin:t,local:e},s,i){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(s,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function yu(n,t){const e=St.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function wP(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function xP(n,t){return n===t?"_index_":"_value_"}function pm(n){if(n==="x"||n==="y"||n==="r")return n}function EP(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function vu(n,...t){if(pm(n))return n;for(const e of t){const s=e.axis||EP(e.position)||n.length>1&&pm(n[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function mm(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function TP(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===n||s.yAxisID===n);if(e.length)return mm(n,"x",e[0])||mm(n,"y",e[0])}return{}}function IP(n,t){const e=Vs[n.type]||{scales:{}},s=t.scales||{},i=yu(n.type,t),r=Object.create(null);return Object.keys(s).forEach(o=>{const a=s[o];if(!it(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=vu(o,a,TP(o,n),St.scales[a.type]),l=xP(c,i),d=e.scales||{};r[o]=kr(Object.create(null),[{axis:c},a,d[c],d[l]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,c=o.indexAxis||yu(a,t),d=(Vs[a]||{}).scales||{};Object.keys(d).forEach(h=>{const f=wP(h,c),m=o[f+"AxisID"]||f;r[m]=r[m]||Object.create(null),kr(r[m],[{axis:f},s[m],d[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];kr(a,[St.scales[a.type],St.scale])}),r}function Sv(n){const t=n.options||(n.options={});t.plugins=K(t.plugins,{}),t.scales=IP(n,t)}function Rv(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function AP(n){return n=n||{},n.data=Rv(n.data),Sv(n),n}const gm=new Map,Pv=new Set;function ta(n,t){let e=gm.get(n);return e||(e=t(),gm.set(n,e),Pv.add(e)),e}const tr=(n,t,e)=>{const s=ss(t,e);s!==void 0&&n.add(s)};class kP{constructor(t){this._config=AP(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Rv(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Sv(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return ta(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return ta(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return ta(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return ta(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let i=s.get(t);return(!i||e)&&(i=new Map,s.set(t,i)),i}getOptionScopes(t,e,s){const{options:i,type:r}=this,o=this._cachedScopes(t,s),a=o.get(e);if(a)return a;const c=new Set;e.forEach(d=>{t&&(c.add(t),d.forEach(h=>tr(c,t,h))),d.forEach(h=>tr(c,i,h)),d.forEach(h=>tr(c,Vs[r]||{},h)),d.forEach(h=>tr(c,St,h)),d.forEach(h=>tr(c,mu,h))});const l=Array.from(c);return l.length===0&&l.push(Object.create(null)),Pv.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,Vs[e]||{},St.datasets[e]||{},{type:e},St,mu]}resolveNamedOptions(t,e,s,i=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=_m(this._resolverCache,t,i);let c=o;if(RP(o,e)){r.$shared=!1,s=is(s)?s():s;const l=this.createResolver(t,s,a);c=Ii(o,s,l)}for(const l of e)r[l]=c[l];return r}createResolver(t,e,s=[""],i){const{resolver:r}=_m(this._resolverCache,t,s);return it(e)?Ii(r,e,void 0,i):r}}function _m(n,t,e){let s=n.get(t);s||(s=new Map,n.set(t,s));const i=e.join();let r=s.get(i);return r||(r={resolver:Hd(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},s.set(i,r)),r}const SP=n=>it(n)&&Object.getOwnPropertyNames(n).some(t=>is(n[t]));function RP(n,t){const{isScriptable:e,isIndexable:s}=av(n);for(const i of t){const r=e(i),o=s(i),a=(o||r)&&n[i];if(r&&(is(a)||SP(a))||o&&kt(a))return!0}return!1}var PP="4.5.1";const CP=["top","bottom","left","right","chartArea"];function ym(n,t){return n==="top"||n==="bottom"||CP.indexOf(n)===-1&&t==="x"}function vm(n,t){return function(e,s){return e[n]===s[n]?e[t]-s[t]:e[n]-s[n]}}function bm(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),bt(e&&e.onComplete,[n],t)}function DP(n){const t=n.chart,e=t.options.animation;bt(e&&e.onProgress,[n],t)}function Cv(n){return Gd()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const xa={},wm=n=>{const t=Cv(n);return Object.values(xa).filter(e=>e.canvas===t).pop()};function OP(n,t,e){const s=Object.keys(n);for(const i of s){const r=+i;if(r>=t){const o=n[i];delete n[i],(e>0||r>t)&&(n[r+e]=o)}}}function MP(n,t,e,s){return!e||n.type==="mouseout"?null:s?t:n}class gt{static register(...t){We.add(...t),xm()}static unregister(...t){We.remove(...t),xm()}constructor(t,e){const s=this.config=new kP(e),i=Cv(t),r=wm(i);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||JR(i)),this.platform.updateConfig(s);const a=this.platform.acquireContext(i,o.aspectRatio),c=a&&a.canvas,l=c&&c.height,d=c&&c.width;if(this.id=LS(),this.ctx=a,this.canvas=c,this.width=d,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new gP,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=ZS(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],xa[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}pn.listen(this,"complete",bm),pn.listen(this,"progress",DP),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:i,_aspectRatio:r}=this;return et(t)?e&&r?r:i?s/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return We}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Hp(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Up(this.canvas,this.ctx),this}stop(){return pn.stop(this),this}resize(t,e){pn.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,i=this.canvas,r=s.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,t,e,r),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Hp(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),bt(s.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};pt(e,(s,i)=>{s.id=i})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,i=Object.keys(s).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],c=vu(o,a),l=c==="r",d=c==="x";return{options:a,dposition:l?"chartArea":d?"bottom":"left",dtype:l?"radialLinear":d?"category":"linear"}}))),pt(r,o=>{const a=o.options,c=a.id,l=vu(c,a),d=K(a.type,o.dtype);(a.position===void 0||ym(a.position,l)!==ym(o.dposition))&&(a.position=o.dposition),i[c]=!0;let h=null;if(c in s&&s[c].type===d)h=s[c];else{const f=We.getScale(d);h=new f({id:c,type:d,ctx:this.ctx,chart:this}),s[h.id]=h}h.init(a,t)}),pt(i,(o,a)=>{o||delete s[a]}),pt(s,o=>{pe.configure(this,o,o.options),pe.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((i,r)=>i.index-r.index),s>e){for(let i=e;i<s;++i)this._destroyDatasetMeta(i);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(vm("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,i)=>{e.filter(r=>r===s._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,i;for(this._removeUnreferencedMetasets(),s=0,i=e.length;s<i;s++){const r=e[s];let o=this.getDatasetMeta(s);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(s),o=this.getDatasetMeta(s)),o.type=a,o.indexAxis=r.indexAxis||yu(a,this.options),o.order=r.order||0,o.index=s,o.label=""+r.label,o.visible=this.isDatasetVisible(s),o.controller)o.controller.updateIndex(s),o.controller.linkScales();else{const c=We.getController(a),{datasetElementType:l,dataElementType:d}=St.datasets[a];Object.assign(c,{dataElementType:We.getElement(d),datasetElementType:l&&We.getElement(l)}),o.controller=new c(this,s),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){pt(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,d=this.data.datasets.length;l<d;l++){const{controller:h}=this.getDatasetMeta(l),f=!i&&r.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=s.layout.autoPadding?o:0,this._updateLayout(o),i||pt(r,l=>{l.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(vm("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){pt(this.scales,t=>{pe.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Dp(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:i,count:r}of e){const o=s==="_removeElements"?-r:r;OP(t,i,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),i=s(0);for(let r=1;r<e;r++)if(!Dp(i,s(r)))return;return Array.from(i).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;pe.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],pt(this.boxes,i=>{s&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,r)=>{i._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,is(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),i={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(s.controller._update(e),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(pn.has(this)?this.attached&&!pn.running(this)&&pn.start(this):(this.draw(),bm({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let i,r;for(i=0,r=e.length;i<r;++i){const o=e[i];(!t||o.visible)&&s.push(o)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},i=yv(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(i&&Pc(e,i),t.controller.draw(),i&&Cc(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return En(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,i){const r=CR.modes[e];return typeof r=="function"?r(this,t,s,i):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let i=s.filter(r=>r&&r._dataset===e).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(i)),i}getContext(){return this.$context||(this.$context=cs(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const i=s?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,i);qr(e)?(r.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),o.update(r,{visible:s}),this.update(a=>a.datasetIndex===t?i:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),pn.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Up(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete xa[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},i=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};pt(this.options.events,r=>s(r,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(c,l)=>{e.addEventListener(this,c,l),t[c]=l},i=(c,l)=>{t[c]&&(e.removeEventListener(this,c,l),delete t[c])},r=(c,l)=>{this.canvas&&this.resize(c,l)};let o;const a=()=>{i("attach",a),this.attached=!0,this.resize(),s("resize",r),s("detach",o)};o=()=>{this.attached=!1,i("resize",r),this._stop(),this._resize(0,0),s("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){pt(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},pt(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const i=s?"set":"remove";let r,o,a,c;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+i+"DatasetHoverStyle"]()),a=0,c=t.length;a<c;++a){o=t[a];const l=o&&this.getDatasetMeta(o.datasetIndex).controller;l&&l[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!Wa(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const i=this.options.hover,r=(c,l)=>c.filter(d=>!l.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),o=r(e,t),a=s?t:r(t,e);o.length&&this.updateHoverStyle(o,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},i=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,i)===!1)return;const r=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,i),(r||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:i=[],options:r}=this,o=e,a=this._getActiveElements(t,i,s,o),c=jS(t),l=MP(t,this._lastEvent,s,c);s&&(this._lastEvent=null,bt(r.onHover,[t,a,this],this),c&&bt(r.onClick,[t,a,this],this));const d=!Wa(a,i);return(d||e)&&(this._active=a,this._updateHoverStyles(a,i,e)),this._lastEvent=l,d}_getActiveElements(t,e,s,i){if(t.type==="mouseout")return[];if(!s)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,i)}}N(gt,"defaults",St),N(gt,"instances",xa),N(gt,"overrides",Vs),N(gt,"registry",We),N(gt,"version",PP),N(gt,"getChart",wm);function xm(){return pt(gt.instances,n=>n._plugins.invalidate())}function NP(n,t,e){const{startAngle:s,x:i,y:r,outerRadius:o,innerRadius:a,options:c}=t,{borderWidth:l,borderJoinStyle:d}=c,h=Math.min(l/o,he(s-e));if(n.beginPath(),n.arc(i,r,o-l/2,s+h/2,e-h/2),a>0){const f=Math.min(l/a,he(s-e));n.arc(i,r,a+l/2,e-f/2,s+f/2,!0)}else{const f=Math.min(l/2,o*he(s-e));if(d==="round")n.arc(i,r,f,e-ut/2,s+ut/2,!0);else if(d==="bevel"){const m=2*f*f,_=-m*Math.cos(e+ut/2)+i,b=-m*Math.sin(e+ut/2)+r,y=m*Math.cos(s+ut/2)+i,T=m*Math.sin(s+ut/2)+r;n.lineTo(_,b),n.lineTo(y,T)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function LP(n,t,e){const{startAngle:s,pixelMargin:i,x:r,y:o,outerRadius:a,innerRadius:c}=t;let l=i/a;n.beginPath(),n.arc(r,o,a,s-l,e+l),c>i?(l=i/c,n.arc(r,o,c,e+l,s-l,!0)):n.arc(r,o,i,e+Ut,s-Ut),n.closePath(),n.clip()}function VP(n){return zd(n,["outerStart","outerEnd","innerStart","innerEnd"])}function FP(n,t,e,s){const i=VP(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,s*t/2),a=c=>{const l=(e-Math.min(r,c))*s/2;return Jt(c,0,Math.min(r,l))};return{outerStart:a(i.outerStart),outerEnd:a(i.outerEnd),innerStart:Jt(i.innerStart,0,o),innerEnd:Jt(i.innerEnd,0,o)}}function ti(n,t,e,s){return{x:e+n*Math.cos(t),y:s+n*Math.sin(t)}}function Ja(n,t,e,s,i,r){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:d}=t,h=Math.max(t.outerRadius+s+e-l,0),f=d>0?d+s+e+l:0;let m=0;const _=i-c;if(s){const W=d>0?d-s:0,Z=h>0?h-s:0,ot=(W+Z)/2,Yt=ot!==0?_*ot/(ot+s):_;m=(_-Yt)/2}const b=Math.max(.001,_*h-e/ut)/h,y=(_-b)/2,T=c+y+m,I=i-y-m,{outerStart:C,outerEnd:R,innerStart:D,innerEnd:O}=FP(t,f,h,I-T),x=h-C,v=h-R,w=T+C/x,A=I-R/v,S=f+D,P=f+O,k=T+D/S,tt=I-O/P;if(n.beginPath(),r){const W=(w+A)/2;if(n.arc(o,a,h,w,W),n.arc(o,a,h,W,A),R>0){const Ht=ti(v,A,o,a);n.arc(Ht.x,Ht.y,R,A,I+Ut)}const Z=ti(P,I,o,a);if(n.lineTo(Z.x,Z.y),O>0){const Ht=ti(P,tt,o,a);n.arc(Ht.x,Ht.y,O,I+Ut,tt+Math.PI)}const ot=(I-O/f+(T+D/f))/2;if(n.arc(o,a,f,I-O/f,ot,!0),n.arc(o,a,f,ot,T+D/f,!0),D>0){const Ht=ti(S,k,o,a);n.arc(Ht.x,Ht.y,D,k+Math.PI,T-Ut)}const Yt=ti(x,T,o,a);if(n.lineTo(Yt.x,Yt.y),C>0){const Ht=ti(x,w,o,a);n.arc(Ht.x,Ht.y,C,T-Ut,w)}}else{n.moveTo(o,a);const W=Math.cos(w)*h+o,Z=Math.sin(w)*h+a;n.lineTo(W,Z);const ot=Math.cos(A)*h+o,Yt=Math.sin(A)*h+a;n.lineTo(ot,Yt)}n.closePath()}function $P(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a}=t;let c=t.endAngle;if(r){Ja(n,t,e,s,c,i);for(let l=0;l<r;++l)n.fill();isNaN(a)||(c=o+(a%It||It))}return Ja(n,t,e,s,c,i),n.fill(),c}function BP(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a,options:c}=t,{borderWidth:l,borderJoinStyle:d,borderDash:h,borderDashOffset:f,borderRadius:m}=c,_=c.borderAlign==="inner";if(!l)return;n.setLineDash(h||[]),n.lineDashOffset=f,_?(n.lineWidth=l*2,n.lineJoin=d||"round"):(n.lineWidth=l,n.lineJoin=d||"bevel");let b=t.endAngle;if(r){Ja(n,t,e,s,b,i);for(let y=0;y<r;++y)n.stroke();isNaN(a)||(b=o+(a%It||It))}_&&LP(n,t,b),c.selfJoin&&b-o>=ut&&m===0&&d!=="miter"&&NP(n,t,b),r||(Ja(n,t,e,s,b,i),n.stroke())}class yr extends ze{constructor(e){super();N(this,"circumference");N(this,"endAngle");N(this,"fullCircles");N(this,"innerRadius");N(this,"outerRadius");N(this,"pixelMargin");N(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.getProps(["x","y"],i),{angle:o,distance:a}=Xy(r,{x:e,y:s}),{startAngle:c,endAngle:l,innerRadius:d,outerRadius:h,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),m=(this.options.spacing+this.options.borderWidth)/2,_=K(f,l-c),b=Wr(o,c,l)&&c!==l,y=_>=It||b,T=wn(a,d+m,h+m);return y&&T}getCenterPoint(e){const{x:s,y:i,startAngle:r,endAngle:o,innerRadius:a,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:l,spacing:d}=this.options,h=(r+o)/2,f=(a+c+d+l)/2;return{x:s+Math.cos(h)*f,y:i+Math.sin(h)*f}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:i}=this,r=(s.offset||0)/4,o=(s.spacing||0)/2,a=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=i>It?Math.floor(i/It):0,i===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*r,Math.sin(c)*r);const l=1-Math.sin(Math.min(ut,i||0)),d=r*l;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,$P(e,this,d,o,a),BP(e,this,d,o,a),e.restore()}}N(yr,"id","arc"),N(yr,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),N(yr,"defaultRoutes",{backgroundColor:"backgroundColor"}),N(yr,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function Dv(n,t,e=t){n.lineCap=K(e.borderCapStyle,t.borderCapStyle),n.setLineDash(K(e.borderDash,t.borderDash)),n.lineDashOffset=K(e.borderDashOffset,t.borderDashOffset),n.lineJoin=K(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=K(e.borderWidth,t.borderWidth),n.strokeStyle=K(e.borderColor,t.borderColor)}function UP(n,t,e){n.lineTo(e.x,e.y)}function jP(n){return n.stepped?d1:n.tension||n.cubicInterpolationMode==="monotone"?h1:UP}function Ov(n,t,e={}){const s=n.length,{start:i=0,end:r=s-1}=e,{start:o,end:a}=t,c=Math.max(i,o),l=Math.min(r,a),d=i<o&&r<o||i>a&&r>a;return{count:s,start:c,loop:t.loop,ilen:l<c&&!d?s+l-c:l-c}}function zP(n,t,e,s){const{points:i,options:r}=t,{count:o,start:a,loop:c,ilen:l}=Ov(i,e,s),d=jP(r);let{move:h=!0,reverse:f}=s||{},m,_,b;for(m=0;m<=l;++m)_=i[(a+(f?l-m:m))%o],!_.skip&&(h?(n.moveTo(_.x,_.y),h=!1):d(n,b,_,f,r.stepped),b=_);return c&&(_=i[(a+(f?l:0))%o],d(n,b,_,f,r.stepped)),!!c}function HP(n,t,e,s){const i=t.points,{count:r,start:o,ilen:a}=Ov(i,e,s),{move:c=!0,reverse:l}=s||{};let d=0,h=0,f,m,_,b,y,T;const I=R=>(o+(l?a-R:R))%r,C=()=>{b!==y&&(n.lineTo(d,y),n.lineTo(d,b),n.lineTo(d,T))};for(c&&(m=i[I(0)],n.moveTo(m.x,m.y)),f=0;f<=a;++f){if(m=i[I(f)],m.skip)continue;const R=m.x,D=m.y,O=R|0;O===_?(D<b?b=D:D>y&&(y=D),d=(h*d+R)/++h):(C(),n.lineTo(R,D),_=O,h=0,b=y=D),T=D}C()}function bu(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?HP:zP}function qP(n){return n.stepped?H1:n.tension||n.cubicInterpolationMode==="monotone"?q1:bs}function WP(n,t,e,s){let i=t._path;i||(i=t._path=new Path2D,t.path(i,e,s)&&i.closePath()),Dv(n,t.options),n.stroke(i)}function GP(n,t,e,s){const{segments:i,options:r}=t,o=bu(t);for(const a of i)Dv(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+s-1})&&n.closePath(),n.stroke()}const YP=typeof Path2D=="function";function KP(n,t,e,s){YP&&!t.options.segment?WP(n,t,e,s):GP(n,t,e,s)}class Wn extends ze{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const i=s.spanGaps?this._loop:this._fullLoop;L1(this._points,s,t,i,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=X1(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,i=t[e],r=this.points,o=_v(this,{property:e,start:i,end:i});if(!o.length)return;const a=[],c=qP(s);let l,d;for(l=0,d=o.length;l<d;++l){const{start:h,end:f}=o[l],m=r[h],_=r[f];if(m===_){a.push(m);continue}const b=Math.abs((i-m[e])/(_[e]-m[e])),y=c(m,_,b,s.stepped);y[e]=t[e],a.push(y)}return a.length===1?a[0]:a}pathSegment(t,e,s){return bu(this)(t,this,e,s)}path(t,e,s){const i=this.segments,r=bu(this);let o=this._loop;e=e||0,s=s||this.points.length-e;for(const a of i)o&=r(t,this,a,{start:e,end:e+s-1});return!!o}draw(t,e,s,i){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),KP(t,this,s,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}N(Wn,"id","line"),N(Wn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),N(Wn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),N(Wn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Em(n,t,e,s){const i=n.options,{[e]:r}=n.getProps([e],s);return Math.abs(t-r)<i.radius+i.hitRadius}class Ea extends ze{constructor(e){super();N(this,"parsed");N(this,"skip");N(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],i);return Math.pow(e-o,2)+Math.pow(s-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,s){return Em(this,e,"x",s)}inYRange(e,s){return Em(this,e,"y",s)}getCenterPoint(e){const{x:s,y:i}=this.getProps(["x","y"],e);return{x:s,y:i}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const i=s&&e.borderWidth||0;return(s+i)*2}draw(e,s){const i=this.options;this.skip||i.radius<.1||!En(this,s,this.size(i)/2)||(e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.fillStyle=i.backgroundColor,gu(e,i,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}N(Ea,"id","point"),N(Ea,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),N(Ea,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Mv(n,t){const{x:e,y:s,base:i,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,c,l,d,h;return n.horizontal?(h=o/2,a=Math.min(e,i),c=Math.max(e,i),l=s-h,d=s+h):(h=r/2,a=e-h,c=e+h,l=Math.min(s,i),d=Math.max(s,i)),{left:a,top:l,right:c,bottom:d}}function Gn(n,t,e,s){return n?0:Jt(t,e,s)}function QP(n,t,e){const s=n.options.borderWidth,i=n.borderSkipped,r=ov(s);return{t:Gn(i.top,r.top,0,e),r:Gn(i.right,r.right,0,t),b:Gn(i.bottom,r.bottom,0,e),l:Gn(i.left,r.left,0,t)}}function XP(n,t,e){const{enableBorderRadius:s}=n.getProps(["enableBorderRadius"]),i=n.options.borderRadius,r=ks(i),o=Math.min(t,e),a=n.borderSkipped,c=s||it(i);return{topLeft:Gn(!c||a.top||a.left,r.topLeft,0,o),topRight:Gn(!c||a.top||a.right,r.topRight,0,o),bottomLeft:Gn(!c||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:Gn(!c||a.bottom||a.right,r.bottomRight,0,o)}}function JP(n){const t=Mv(n),e=t.right-t.left,s=t.bottom-t.top,i=QP(n,e/2,s/2),r=XP(n,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:r},inner:{x:t.left+i.l,y:t.top+i.t,w:e-i.l-i.r,h:s-i.t-i.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,r.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(i.b,i.r))}}}}function Cl(n,t,e,s){const i=t===null,r=e===null,a=n&&!(i&&r)&&Mv(n,s);return a&&(i||wn(t,a.left,a.right))&&(r||wn(e,a.top,a.bottom))}function ZP(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function tC(n,t){n.rect(t.x,t.y,t.w,t.h)}function Dl(n,t,e={}){const s=n.x!==e.x?-t:0,i=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-s,o=(n.y+n.h!==e.y+e.h?t:0)-i;return{x:n.x+s,y:n.y+i,w:n.w+r,h:n.h+o,radius:n.radius}}class Ta extends ze{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:i}}=this,{inner:r,outer:o}=JP(this),a=ZP(o.radius)?Gr:tC;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,Dl(o,e,r)),t.clip(),a(t,Dl(r,-e,o)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,Dl(r,e)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,e,s){return Cl(this,t,e,s)}inXRange(t,e){return Cl(this,t,null,e)}inYRange(t,e){return Cl(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:i,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+i)/2:e,y:r?s:(s+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}N(Ta,"id","bar"),N(Ta,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),N(Ta,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var eC=Object.freeze({__proto__:null,ArcElement:yr,BarElement:Ta,LineElement:Wn,PointElement:Ea});const wu=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Tm=wu.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function Nv(n){return wu[n%wu.length]}function Lv(n){return Tm[n%Tm.length]}function nC(n,t){return n.borderColor=Nv(t),n.backgroundColor=Lv(t),++t}function sC(n,t){return n.backgroundColor=n.data.map(()=>Nv(t++)),t}function iC(n,t){return n.backgroundColor=n.data.map(()=>Lv(t++)),t}function rC(n){let t=0;return(e,s)=>{const i=n.getDatasetMeta(s).controller;i instanceof Ts?t=sC(e,t):i instanceof Cr?t=iC(e,t):i&&(t=nC(e,t))}}function Im(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function oC(n){return n&&(n.borderColor||n.backgroundColor)}function aC(){return St.borderColor!=="rgba(0,0,0,0.1)"||St.backgroundColor!=="rgba(0,0,0,0.1)"}var cC={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:s},options:i}=n.config,{elements:r}=i,o=Im(s)||oC(i)||r&&Im(r)||aC();if(!e.forceOverride&&o)return;const a=rC(n);s.forEach(a)}};function lC(n,t,e,s,i){const r=i.samples||s;if(r>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(r-2);let c=0;const l=t+e-1;let d=t,h,f,m,_,b;for(o[c++]=n[d],h=0;h<r-2;h++){let y=0,T=0,I;const C=Math.floor((h+1)*a)+1+t,R=Math.min(Math.floor((h+2)*a)+1,e)+t,D=R-C;for(I=C;I<R;I++)y+=n[I].x,T+=n[I].y;y/=D,T/=D;const O=Math.floor(h*a)+1+t,x=Math.min(Math.floor((h+1)*a)+1,e)+t,{x:v,y:w}=n[d];for(m=_=-1,I=O;I<x;I++)_=.5*Math.abs((v-y)*(n[I].y-w)-(v-n[I].x)*(T-w)),_>m&&(m=_,f=n[I],b=I);o[c++]=f,d=b}return o[c++]=n[l],o}function uC(n,t,e,s){let i=0,r=0,o,a,c,l,d,h,f,m,_,b;const y=[],T=t+e-1,I=n[t].x,R=n[T].x-I;for(o=t;o<t+e;++o){a=n[o],c=(a.x-I)/R*s,l=a.y;const D=c|0;if(D===d)l<_?(_=l,h=o):l>b&&(b=l,f=o),i=(r*i+a.x)/++r;else{const O=o-1;if(!et(h)&&!et(f)){const x=Math.min(h,f),v=Math.max(h,f);x!==m&&x!==O&&y.push({...n[x],x:i}),v!==m&&v!==O&&y.push({...n[v],x:i})}o>0&&O!==m&&y.push(n[O]),y.push(a),d=D,r=0,_=b=l,h=f=m=o}}return y}function Vv(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Am(n){n.data.datasets.forEach(t=>{Vv(t)})}function dC(n,t){const e=t.length;let s=0,i;const{iScale:r}=n,{min:o,max:a,minDefined:c,maxDefined:l}=r.getUserBounds();return c&&(s=Jt(xn(t,r.axis,o).lo,0,e-1)),l?i=Jt(xn(t,r.axis,a).hi+1,s,e)-s:i=e-s,{start:s,count:i}}var hC={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){Am(n);return}const s=n.width;n.data.datasets.forEach((i,r)=>{const{_data:o,indexAxis:a}=i,c=n.getDatasetMeta(r),l=o||i.data;if(gr([a,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const d=n.scales[c.xAxisID];if(d.type!=="linear"&&d.type!=="time"||n.options.parsing)return;let{start:h,count:f}=dC(c,l);const m=e.threshold||4*s;if(f<=m){Vv(i);return}et(o)&&(i._data=l,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(b){this._data=b}}));let _;switch(e.algorithm){case"lttb":_=lC(l,h,f,s,e);break;case"min-max":_=uC(l,h,f,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}i._decimated=_})},destroy(n){Am(n)}};function fC(n,t,e){const s=n.segments,i=n.points,r=t.points,o=[];for(const a of s){let{start:c,end:l}=a;l=Mc(c,l,i);const d=xu(e,i[c],i[l],a.loop);if(!t.segments){o.push({source:a,target:d,start:i[c],end:i[l]});continue}const h=_v(t,d);for(const f of h){const m=xu(e,r[f.start],r[f.end],f.loop),_=gv(a,i,m);for(const b of _)o.push({source:b,target:f,start:{[e]:km(d,m,"start",Math.max)},end:{[e]:km(d,m,"end",Math.min)}})}}return o}function xu(n,t,e,s){if(s)return;let i=t[n],r=e[n];return n==="angle"&&(i=he(i),r=he(r)),{property:n,start:i,end:r}}function pC(n,t){const{x:e=null,y:s=null}=n||{},i=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=Mc(o,a,i);const c=i[o],l=i[a];s!==null?(r.push({x:c.x,y:s}),r.push({x:l.x,y:s})):e!==null&&(r.push({x:e,y:c.y}),r.push({x:e,y:l.y}))}),r}function Mc(n,t,e){for(;t>n;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function km(n,t,e,s){return n&&t?s(n[e],t[e]):n?n[e]:t?t[e]:0}function Fv(n,t){let e=[],s=!1;return kt(n)?(s=!0,e=n):e=pC(n,t),e.length?new Wn({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function Sm(n){return n&&n.fill!==!1}function mC(n,t,e){let i=n[t].fill;const r=[t];let o;if(!e)return i;for(;i!==!1&&r.indexOf(i)===-1;){if(!Nt(i))return i;if(o=n[i],!o)return!1;if(o.visible)return i;r.push(i),i=o.fill}return!1}function gC(n,t,e){const s=bC(n);if(it(s))return isNaN(s.value)?!1:s;let i=parseFloat(s);return Nt(i)&&Math.floor(i)===i?_C(s[0],t,i,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function _C(n,t,e,s){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function yC(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:it(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function vC(n,t,e){let s;return n==="start"?s=e:n==="end"?s=t.options.reverse?t.min:t.max:it(n)?s=n.value:s=t.getBaseValue(),s}function bC(n){const t=n.options,e=t.fill;let s=K(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function wC(n){const{scale:t,index:e,line:s}=n,i=[],r=s.segments,o=s.points,a=xC(t,e);a.push(Fv({x:null,y:t.bottom},s));for(let c=0;c<r.length;c++){const l=r[c];for(let d=l.start;d<=l.end;d++)EC(i,o[d],a)}return new Wn({points:i,options:{}})}function xC(n,t){const e=[],s=n.getMatchingVisibleMetas("line");for(let i=0;i<s.length;i++){const r=s[i];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function EC(n,t,e){const s=[];for(let i=0;i<e.length;i++){const r=e[i],{first:o,last:a,point:c}=TC(r,t,"x");if(!(!c||o&&a)){if(o)s.unshift(c);else if(n.push(c),!a)break}}n.push(...s)}function TC(n,t,e){const s=n.interpolate(t,e);if(!s)return{};const i=s[e],r=n.segments,o=n.points;let a=!1,c=!1;for(let l=0;l<r.length;l++){const d=r[l],h=o[d.start][e],f=o[d.end][e];if(wn(i,h,f)){a=i===h,c=i===f;break}}return{first:a,last:c,point:s}}class $v{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:i,y:r,radius:o}=this;return e=e||{start:0,end:It},t.arc(i,r,o,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:i}=this,r=t.angle;return{x:e+Math.cos(r)*i,y:s+Math.sin(r)*i,angle:r}}}function IC(n){const{chart:t,fill:e,line:s}=n;if(Nt(e))return AC(t,e);if(e==="stack")return wC(n);if(e==="shape")return!0;const i=kC(n);return i instanceof $v?i:Fv(i,s)}function AC(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function kC(n){return(n.scale||{}).getPointPositionForValue?RC(n):SC(n)}function SC(n){const{scale:t={},fill:e}=n,s=yC(e,t);if(Nt(s)){const i=t.isHorizontal();return{x:i?s:null,y:i?null:s}}return null}function RC(n){const{scale:t,fill:e}=n,s=t.options,i=t.getLabels().length,r=s.reverse?t.max:t.min,o=vC(e,t,r),a=[];if(s.grid.circular){const c=t.getPointPositionForValue(0,r);return new $v({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<i;++c)a.push(t.getPointPositionForValue(c,o));return a}function Ol(n,t,e){const s=IC(t),{chart:i,index:r,line:o,scale:a,axis:c}=t,l=o.options,d=l.fill,h=l.backgroundColor,{above:f=h,below:m=h}=d||{},_=i.getDatasetMeta(r),b=yv(i,_);s&&o.points.length&&(Pc(n,e),PC(n,{line:o,target:s,above:f,below:m,area:e,scale:a,axis:c,clip:b}),Cc(n))}function PC(n,t){const{line:e,target:s,above:i,below:r,area:o,scale:a,clip:c}=t,l=e._loop?"angle":t.axis;n.save();let d=r;r!==i&&(l==="x"?(Rm(n,s,o.top),Ml(n,{line:e,target:s,color:i,scale:a,property:l,clip:c}),n.restore(),n.save(),Rm(n,s,o.bottom)):l==="y"&&(Pm(n,s,o.left),Ml(n,{line:e,target:s,color:r,scale:a,property:l,clip:c}),n.restore(),n.save(),Pm(n,s,o.right),d=i)),Ml(n,{line:e,target:s,color:d,scale:a,property:l,clip:c}),n.restore()}function Rm(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:l}=a,d=i[c],h=i[Mc(c,l,i)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(d.x,e),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(h.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function Pm(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:l}=a,d=i[c],h=i[Mc(c,l,i)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(e,d.y),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,h.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function Ml(n,t){const{line:e,target:s,property:i,color:r,scale:o,clip:a}=t,c=fC(e,s,i);for(const{source:l,target:d,start:h,end:f}of c){const{style:{backgroundColor:m=r}={}}=l,_=s!==!0;n.save(),n.fillStyle=m,CC(n,o,a,_&&xu(i,h,f)),n.beginPath();const b=!!e.pathSegment(n,l);let y;if(_){b?n.closePath():Cm(n,s,f,i);const T=!!s.pathSegment(n,d,{move:b,reverse:!0});y=b&&T,y||Cm(n,s,h,i)}n.closePath(),n.fill(y?"evenodd":"nonzero"),n.restore()}}function CC(n,t,e,s){const i=t.chart.chartArea,{property:r,start:o,end:a}=s||{};if(r==="x"||r==="y"){let c,l,d,h;r==="x"?(c=o,l=i.top,d=a,h=i.bottom):(c=i.left,l=o,d=i.right,h=a),n.beginPath(),e&&(c=Math.max(c,e.left),d=Math.min(d,e.right),l=Math.max(l,e.top),h=Math.min(h,e.bottom)),n.rect(c,l,d-c,h-l),n.clip()}}function Cm(n,t,e,s){const i=t.interpolate(e,s);i&&n.lineTo(i.x,i.y)}var DC={id:"filler",afterDatasetsUpdate(n,t,e){const s=(n.data.datasets||[]).length,i=[];let r,o,a,c;for(o=0;o<s;++o)r=n.getDatasetMeta(o),a=r.dataset,c=null,a&&a.options&&a instanceof Wn&&(c={visible:n.isDatasetVisible(o),index:o,fill:gC(a,o,s),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=c,i.push(c);for(o=0;o<s;++o)c=i[o],!(!c||c.fill===!1)&&(c.fill=mC(i,o,e.propagate))},beforeDraw(n,t,e){const s=e.drawTime==="beforeDraw",i=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=i.length-1;o>=0;--o){const a=i[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),s&&a.fill&&Ol(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=n.getSortedVisibleDatasetMetas();for(let i=s.length-1;i>=0;--i){const r=s[i].$filler;Sm(r)&&Ol(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const s=t.meta.$filler;!Sm(s)||e.drawTime!=="beforeDatasetDraw"||Ol(n.ctx,s,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Dm=(n,t)=>{let{boxHeight:e=t,boxWidth:s=t}=n;return n.usePointStyle&&(e=Math.min(e,t),s=n.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},OC=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Om extends ze{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=bt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,i)=>t.sort(s,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,i=Qt(s.font),r=i.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=Dm(s,r);let l,d;e.font=i.string,this.isHorizontal()?(l=this.maxWidth,d=this._fitRows(o,r,a,c)+10):(d=this.maxHeight,l=this._fitCols(o,i,a,c)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,i){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],d=i+a;let h=t;r.textAlign="left",r.textBaseline="middle";let f=-1,m=-d;return this.legendItems.forEach((_,b)=>{const y=s+e/2+r.measureText(_.text).width;(b===0||l[l.length-1]+y+2*a>o)&&(h+=d,l[l.length-(b>0?0:1)]=0,m+=d,f++),c[b]={left:0,top:m,row:f,width:y,height:i},l[l.length-1]+=y+a}),h}_fitCols(t,e,s,i){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],d=o-t;let h=a,f=0,m=0,_=0,b=0;return this.legendItems.forEach((y,T)=>{const{itemWidth:I,itemHeight:C}=MC(s,e,r,y,i);T>0&&m+C+2*a>d&&(h+=f+a,l.push({width:f,height:m}),_+=f+a,b++,f=m=0),c[T]={left:_,top:m,col:b,width:I,height:C},f=Math.max(f,I),m+=C+a}),h+=f,l.push({width:f,height:m}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:i},rtl:r}}=this,o=fi(r,this.left,this.width);if(this.isHorizontal()){let a=0,c=ue(s,this.left+i,this.right-this.lineWidths[a]);for(const l of e)a!==l.row&&(a=l.row,c=ue(s,this.left+i,this.right-this.lineWidths[a])),l.top+=this.top+t+i,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+i}else{let a=0,c=ue(s,this.top+t+i,this.bottom-this.columnSizes[a].height);for(const l of e)l.col!==a&&(a=l.col,c=ue(s,this.top+t+i,this.bottom-this.columnSizes[a].height)),l.top=c,l.left+=this.left+i,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Pc(t,this),this._draw(),Cc(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:i}=this,{align:r,labels:o}=t,a=St.color,c=fi(t.rtl,this.left,this.width),l=Qt(o.font),{padding:d}=o,h=l.size,f=h/2;let m;this.drawTitle(),i.textAlign=c.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=l.string;const{boxWidth:_,boxHeight:b,itemHeight:y}=Dm(o,h),T=function(O,x,v){if(isNaN(_)||_<=0||isNaN(b)||b<0)return;i.save();const w=K(v.lineWidth,1);if(i.fillStyle=K(v.fillStyle,a),i.lineCap=K(v.lineCap,"butt"),i.lineDashOffset=K(v.lineDashOffset,0),i.lineJoin=K(v.lineJoin,"miter"),i.lineWidth=w,i.strokeStyle=K(v.strokeStyle,a),i.setLineDash(K(v.lineDash,[])),o.usePointStyle){const A={radius:b*Math.SQRT2/2,pointStyle:v.pointStyle,rotation:v.rotation,borderWidth:w},S=c.xPlus(O,_/2),P=x+f;rv(i,A,S,P,o.pointStyleWidth&&_)}else{const A=x+Math.max((h-b)/2,0),S=c.leftForLtr(O,_),P=ks(v.borderRadius);i.beginPath(),Object.values(P).some(k=>k!==0)?Gr(i,{x:S,y:A,w:_,h:b,radius:P}):i.rect(S,A,_,b),i.fill(),w!==0&&i.stroke()}i.restore()},I=function(O,x,v){Fs(i,v.text,O,x+y/2,l,{strikethrough:v.hidden,textAlign:c.textAlign(v.textAlign)})},C=this.isHorizontal(),R=this._computeTitleHeight();C?m={x:ue(r,this.left+d,this.right-s[0]),y:this.top+d+R,line:0}:m={x:this.left+d,y:ue(r,this.top+R+d,this.bottom-e[0].height),line:0},fv(this.ctx,t.textDirection);const D=y+d;this.legendItems.forEach((O,x)=>{i.strokeStyle=O.fontColor,i.fillStyle=O.fontColor;const v=i.measureText(O.text).width,w=c.textAlign(O.textAlign||(O.textAlign=o.textAlign)),A=_+f+v;let S=m.x,P=m.y;c.setWidth(this.width),C?x>0&&S+A+d>this.right&&(P=m.y+=D,m.line++,S=m.x=ue(r,this.left+d,this.right-s[m.line])):x>0&&P+D>this.bottom&&(S=m.x=S+e[m.line].width+d,m.line++,P=m.y=ue(r,this.top+R+d,this.bottom-e[m.line].height));const k=c.x(S);if(T(k,P,O),S=t1(w,S+_+f,C?S+A:this.right,t.rtl),I(c.x(S),P,O),C)m.x+=A+d;else if(typeof O.text!="string"){const tt=l.lineHeight;m.y+=Bv(O,tt)+d}else m.y+=D}),pv(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=Qt(e.font),i=ge(e.padding);if(!e.display)return;const r=fi(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=s.size/2,l=i.top+c;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+l,h=ue(t.align,h,this.right-f);else{const _=this.columnSizes.reduce((b,y)=>Math.max(b,y.height),0);d=l+ue(t.align,this.top,this.bottom-_-t.labels.padding-this._computeTitleHeight())}const m=ue(a,h,h+f);o.textAlign=r.textAlign(Ud(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=s.string,Fs(o,e.text,m,d,s)}_computeTitleHeight(){const t=this.options.title,e=Qt(t.font),s=ge(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,i,r;if(wn(t,this.left,this.right)&&wn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,s=0;s<r.length;++s)if(i=r[s],wn(t,i.left,i.left+i.width)&&wn(e,i.top,i.top+i.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!VC(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,r=OC(i,s);i&&!r&&bt(e.onLeave,[t,i,this],this),this._hoveredItem=s,s&&!r&&bt(e.onHover,[t,s,this],this)}else s&&bt(e.onClick,[t,s,this],this)}}function MC(n,t,e,s,i){const r=NC(s,n,t,e),o=LC(i,s,t.lineHeight);return{itemWidth:r,itemHeight:o}}function NC(n,t,e,s){let i=n.text;return i&&typeof i!="string"&&(i=i.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+s.measureText(i).width}function LC(n,t,e){let s=n;return typeof t.text!="string"&&(s=Bv(t,e)),s}function Bv(n,t){const e=n.text?n.text.length:0;return t*e}function VC(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var FC={id:"legend",_element:Om,start(n,t,e){const s=n.legend=new Om({ctx:n.ctx,options:e,chart:n});pe.configure(n,s,e),pe.addBox(n,s)},stop(n){pe.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const s=n.legend;pe.configure(n,s,e),s.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const s=t.datasetIndex,i=e.chart;i.isDatasetVisible(s)?(i.hide(s),t.hidden=!0):(i.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const l=c.controller.getStyle(e?0:void 0),d=ge(l.borderWidth);return{text:t[c.index].label,fillStyle:l.backgroundColor,fontColor:r,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:l.borderColor,pointStyle:s||l.pointStyle,rotation:l.rotation,textAlign:i||l.textAlign,borderRadius:o&&(a||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class Qd extends ze{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const i=kt(s.text)?s.text.length:1;this._padding=ge(s.padding);const r=i*Qt(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:i,right:r,options:o}=this,a=o.align;let c=0,l,d,h;return this.isHorizontal()?(d=ue(a,s,r),h=e+t,l=r-s):(o.position==="left"?(d=s+t,h=ue(a,i,e),c=ut*-.5):(d=r-t,h=ue(a,e,i),c=ut*.5),l=i-e),{titleX:d,titleY:h,maxWidth:l,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=Qt(e.font),r=s.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(r);Fs(t,e.text,0,0,s,{color:e.color,maxWidth:c,rotation:l,textAlign:Ud(e.align),textBaseline:"middle",translation:[o,a]})}}function $C(n,t){const e=new Qd({ctx:n.ctx,options:t,chart:n});pe.configure(n,e,t),pe.addBox(n,e),n.titleBlock=e}var BC={id:"title",_element:Qd,start(n,t,e){$C(n,e)},stop(n){const t=n.titleBlock;pe.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const s=n.titleBlock;pe.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ea=new WeakMap;var UC={id:"subtitle",start(n,t,e){const s=new Qd({ctx:n.ctx,options:e,chart:n});pe.configure(n,s,e),pe.addBox(n,s),ea.set(n,s)},stop(n){pe.removeBox(n,ea.get(n)),ea.delete(n)},beforeUpdate(n,t,e){const s=ea.get(n);pe.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const vr={average(n){if(!n.length)return!1;let t,e,s=new Set,i=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const c=a.tooltipPosition();s.add(c.x),i+=c.y,++r}}return r===0||s.size===0?!1:{x:[...s].reduce((a,c)=>a+c)/s.size,y:i/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,s=t.y,i=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const c=n[r].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),d=pu(t,l);d<i&&(i=d,a=c)}}if(a){const c=a.tooltipPosition();e=c.x,s=c.y}return{x:e,y:s}}};function qe(n,t){return t&&(kt(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function mn(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function jC(n,t){const{element:e,datasetIndex:s,index:i}=t,r=n.getDatasetMeta(s).controller,{label:o,value:a}=r.getLabelAndValue(i);return{chart:n,label:o,parsed:r.getParsed(i),raw:n.data.datasets[s].data[i],formattedValue:a,dataset:r.getDataset(),dataIndex:i,datasetIndex:s,element:e}}function Mm(n,t){const e=n.chart.ctx,{body:s,footer:i,title:r}=n,{boxWidth:o,boxHeight:a}=t,c=Qt(t.bodyFont),l=Qt(t.titleFont),d=Qt(t.footerFont),h=r.length,f=i.length,m=s.length,_=ge(t.padding);let b=_.height,y=0,T=s.reduce((R,D)=>R+D.before.length+D.lines.length+D.after.length,0);if(T+=n.beforeBody.length+n.afterBody.length,h&&(b+=h*l.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),T){const R=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;b+=m*R+(T-m)*c.lineHeight+(T-1)*t.bodySpacing}f&&(b+=t.footerMarginTop+f*d.lineHeight+(f-1)*t.footerSpacing);let I=0;const C=function(R){y=Math.max(y,e.measureText(R).width+I)};return e.save(),e.font=l.string,pt(n.title,C),e.font=c.string,pt(n.beforeBody.concat(n.afterBody),C),I=t.displayColors?o+2+t.boxPadding:0,pt(s,R=>{pt(R.before,C),pt(R.lines,C),pt(R.after,C)}),I=0,e.font=d.string,pt(n.footer,C),e.restore(),y+=_.width,{width:y,height:b}}function zC(n,t){const{y:e,height:s}=t;return e<s/2?"top":e>n.height-s/2?"bottom":"center"}function HC(n,t,e,s){const{x:i,width:r}=s,o=e.caretSize+e.caretPadding;if(n==="left"&&i+r+o>t.width||n==="right"&&i-r-o<0)return!0}function qC(n,t,e,s){const{x:i,width:r}=e,{width:o,chartArea:{left:a,right:c}}=n;let l="center";return s==="center"?l=i<=(a+c)/2?"left":"right":i<=r/2?l="left":i>=o-r/2&&(l="right"),HC(l,n,t,e)&&(l="center"),l}function Nm(n,t,e){const s=e.yAlign||t.yAlign||zC(n,e);return{xAlign:e.xAlign||t.xAlign||qC(n,t,e,s),yAlign:s}}function WC(n,t){let{x:e,width:s}=n;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function GC(n,t,e){let{y:s,height:i}=n;return t==="top"?s+=e:t==="bottom"?s-=i+e:s-=i/2,s}function Lm(n,t,e,s){const{caretSize:i,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:c}=e,l=i+r,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:m}=ks(o);let _=WC(t,a);const b=GC(t,c,l);return c==="center"?a==="left"?_+=l:a==="right"&&(_-=l):a==="left"?_-=Math.max(d,f)+i:a==="right"&&(_+=Math.max(h,m)+i),{x:Jt(_,0,s.width-t.width),y:Jt(b,0,s.height-t.height)}}function na(n,t,e){const s=ge(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-s.right:n.x+s.left}function Vm(n){return qe([],mn(n))}function YC(n,t,e){return cs(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Fm(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const Uv={beforeTitle:fn,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:fn,beforeBody:fn,beforeLabel:fn,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return et(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:fn,afterBody:fn,beforeFooter:fn,footer:fn,afterFooter:fn};function Ee(n,t,e,s){const i=n[t].call(e,s);return typeof i>"u"?Uv[t].call(e,s):i}class Eu extends ze{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),i=s.enabled&&e.options.animation&&s.animations,r=new vv(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=YC(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,i=Ee(s,"beforeTitle",this,t),r=Ee(s,"title",this,t),o=Ee(s,"afterTitle",this,t);let a=[];return a=qe(a,mn(i)),a=qe(a,mn(r)),a=qe(a,mn(o)),a}getBeforeBody(t,e){return Vm(Ee(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,i=[];return pt(t,r=>{const o={before:[],lines:[],after:[]},a=Fm(s,r);qe(o.before,mn(Ee(a,"beforeLabel",this,r))),qe(o.lines,Ee(a,"label",this,r)),qe(o.after,mn(Ee(a,"afterLabel",this,r))),i.push(o)}),i}getAfterBody(t,e){return Vm(Ee(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,i=Ee(s,"beforeFooter",this,t),r=Ee(s,"footer",this,t),o=Ee(s,"afterFooter",this,t);let a=[];return a=qe(a,mn(i)),a=qe(a,mn(r)),a=qe(a,mn(o)),a}_createItems(t){const e=this._active,s=this.chart.data,i=[],r=[],o=[];let a=[],c,l;for(c=0,l=e.length;c<l;++c)a.push(jC(this.chart,e[c]));return t.filter&&(a=a.filter((d,h,f)=>t.filter(d,h,f,s))),t.itemSort&&(a=a.sort((d,h)=>t.itemSort(d,h,s))),pt(a,d=>{const h=Fm(t.callbacks,d);i.push(Ee(h,"labelColor",this,d)),r.push(Ee(h,"labelPointStyle",this,d)),o.push(Ee(h,"labelTextColor",this,d))}),this.labelColors=i,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const s=this.options.setContext(this.getContext()),i=this._active;let r,o=[];if(!i.length)this.opacity!==0&&(r={opacity:0});else{const a=vr[s.position].call(this,i,this._eventPosition);o=this._createItems(s),this.title=this.getTitle(o,s),this.beforeBody=this.getBeforeBody(o,s),this.body=this.getBody(o,s),this.afterBody=this.getAfterBody(o,s),this.footer=this.getFooter(o,s);const c=this._size=Mm(this,s),l=Object.assign({},a,c),d=Nm(this.chart,s,l),h=Lm(s,l,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,r={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,i){const r=this.getCaretPosition(t,s,i);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,s){const{xAlign:i,yAlign:r}=this,{caretSize:o,cornerRadius:a}=s,{topLeft:c,topRight:l,bottomLeft:d,bottomRight:h}=ks(a),{x:f,y:m}=t,{width:_,height:b}=e;let y,T,I,C,R,D;return r==="center"?(R=m+b/2,i==="left"?(y=f,T=y-o,C=R+o,D=R-o):(y=f+_,T=y+o,C=R-o,D=R+o),I=y):(i==="left"?T=f+Math.max(c,d)+o:i==="right"?T=f+_-Math.max(l,h)-o:T=this.caretX,r==="top"?(C=m,R=C-o,y=T-o,I=T+o):(C=m+b,R=C+o,y=T+o,I=T-o),D=C),{x1:y,x2:T,x3:I,y1:C,y2:R,y3:D}}drawTitle(t,e,s){const i=this.title,r=i.length;let o,a,c;if(r){const l=fi(s.rtl,this.x,this.width);for(t.x=na(this,s.titleAlign,s),e.textAlign=l.textAlign(s.titleAlign),e.textBaseline="middle",o=Qt(s.titleFont),a=s.titleSpacing,e.fillStyle=s.titleColor,e.font=o.string,c=0;c<r;++c)e.fillText(i[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===r&&(t.y+=s.titleMarginBottom-a)}}_drawColorBox(t,e,s,i,r){const o=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:c,boxWidth:l}=r,d=Qt(r.bodyFont),h=na(this,"left",r),f=i.x(h),m=c<d.lineHeight?(d.lineHeight-c)/2:0,_=e.y+m;if(r.usePointStyle){const b={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},y=i.leftForLtr(f,l)+l/2,T=_+c/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,gu(t,b,y,T),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,gu(t,b,y,T)}else{t.lineWidth=it(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const b=i.leftForLtr(f,l),y=i.leftForLtr(i.xPlus(f,1),l-2),T=ks(o.borderRadius);Object.values(T).some(I=>I!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,Gr(t,{x:b,y:_,w:l,h:c,radius:T}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Gr(t,{x:y,y:_+1,w:l-2,h:c-2,radius:T}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(b,_,l,c),t.strokeRect(b,_,l,c),t.fillStyle=o.backgroundColor,t.fillRect(y,_+1,l-2,c-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:i}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:d}=s,h=Qt(s.bodyFont);let f=h.lineHeight,m=0;const _=fi(s.rtl,this.x,this.width),b=function(v){e.fillText(v,_.x(t.x+m),t.y+f/2),t.y+=f+r},y=_.textAlign(o);let T,I,C,R,D,O,x;for(e.textAlign=o,e.textBaseline="middle",e.font=h.string,t.x=na(this,y,s),e.fillStyle=s.bodyColor,pt(this.beforeBody,b),m=a&&y!=="right"?o==="center"?l/2+d:l+2+d:0,R=0,O=i.length;R<O;++R){for(T=i[R],I=this.labelTextColors[R],e.fillStyle=I,pt(T.before,b),C=T.lines,a&&C.length&&(this._drawColorBox(e,t,R,_,s),f=Math.max(h.lineHeight,c)),D=0,x=C.length;D<x;++D)b(C[D]),f=h.lineHeight;pt(T.after,b)}m=0,f=h.lineHeight,pt(this.afterBody,b),t.y-=r}drawFooter(t,e,s){const i=this.footer,r=i.length;let o,a;if(r){const c=fi(s.rtl,this.x,this.width);for(t.x=na(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=c.textAlign(s.footerAlign),e.textBaseline="middle",o=Qt(s.footerFont),e.fillStyle=s.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(i[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+s.footerSpacing}}drawBackground(t,e,s,i){const{xAlign:r,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:d}=s,{topLeft:h,topRight:f,bottomLeft:m,bottomRight:_}=ks(i.cornerRadius);e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.beginPath(),e.moveTo(a+h,c),o==="top"&&this.drawCaret(t,e,s,i),e.lineTo(a+l-f,c),e.quadraticCurveTo(a+l,c,a+l,c+f),o==="center"&&r==="right"&&this.drawCaret(t,e,s,i),e.lineTo(a+l,c+d-_),e.quadraticCurveTo(a+l,c+d,a+l-_,c+d),o==="bottom"&&this.drawCaret(t,e,s,i),e.lineTo(a+m,c+d),e.quadraticCurveTo(a,c+d,a,c+d-m),o==="center"&&r==="left"&&this.drawCaret(t,e,s,i),e.lineTo(a,c+h),e.quadraticCurveTo(a,c,a+h,c),e.closePath(),e.fill(),i.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,i=s&&s.x,r=s&&s.y;if(i||r){const o=vr[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Mm(this,t),c=Object.assign({},o,this._size),l=Nm(e,t,c),d=Lm(t,c,l,e);(i._to!==d.x||r._to!==d.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const i={width:this.width,height:this.height},r={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const o=ge(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=s,this.drawBackground(r,t,i,e),fv(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),pv(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,i=t.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),r=!Wa(s,i),o=this._positionChanged(i,e);(r||o)&&(this._active=i,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,s),a=this._positionChanged(o,t),c=e||!Wa(o,r)||a;return c&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,s,i){const r=this.options;if(t.type==="mouseout")return[];if(!i)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,s);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:s,caretY:i,options:r}=this,o=vr[r.position].call(this,t,e);return o!==!1&&(s!==o.x||i!==o.y)}}N(Eu,"positioners",vr);var KC={id:"tooltip",_element:Eu,positioners:vr,afterInit(n,t,e){e&&(n.tooltip=new Eu({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Uv},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},QC=Object.freeze({__proto__:null,Colors:cC,Decimation:hC,Filler:DC,Legend:FC,SubTitle:UC,Title:BC,Tooltip:KC});const XC=(n,t,e,s)=>(typeof t=="string"?(e=n.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function JC(n,t,e,s){const i=n.indexOf(t);if(i===-1)return XC(n,t,e,s);const r=n.lastIndexOf(t);return i!==r?e:i}const ZC=(n,t)=>n===null?null:Jt(Math.round(n),0,t);function $m(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class Tu extends Hs{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:i,label:r}of e)s[i]===r&&s.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(et(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:JC(s,t,K(e,t),this._addedLabels),ZC(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(i=this.getLabels().length-1)),this.min=s,this.max=i}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,i=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let o=t;o<=e;o++)i.push({value:o});return i}getLabelForValue(t){return $m.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}N(Tu,"id","category"),N(Tu,"defaults",{ticks:{callback:$m}});function tD(n,t){const e=[],{bounds:i,step:r,min:o,max:a,precision:c,count:l,maxTicks:d,maxDigits:h,includeBounds:f}=n,m=r||1,_=d-1,{min:b,max:y}=t,T=!et(o),I=!et(a),C=!et(l),R=(y-b)/(h+1);let D=Mp((y-b)/_/m)*m,O,x,v,w;if(D<1e-14&&!T&&!I)return[{value:b},{value:y}];w=Math.ceil(y/D)-Math.floor(b/D),w>_&&(D=Mp(w*D/_/m)*m),et(c)||(O=Math.pow(10,c),D=Math.ceil(D*O)/O),i==="ticks"?(x=Math.floor(b/D)*D,v=Math.ceil(y/D)*D):(x=b,v=y),T&&I&&r&&GS((a-o)/r,D/1e3)?(w=Math.round(Math.min((a-o)/D,d)),D=(a-o)/w,x=o,v=a):C?(x=T?o:x,v=I?a:v,w=l-1,D=(v-x)/w):(w=(v-x)/D,Sr(w,Math.round(w),D/1e3)?w=Math.round(w):w=Math.ceil(w));const A=Math.max(Np(D),Np(x));O=Math.pow(10,et(c)?A:c),x=Math.round(x*O)/O,v=Math.round(v*O)/O;let S=0;for(T&&(f&&x!==o?(e.push({value:o}),x<o&&S++,Sr(Math.round((x+S*D)*O)/O,o,Bm(o,R,n))&&S++):x<o&&S++);S<w;++S){const P=Math.round((x+S*D)*O)/O;if(I&&P>a)break;e.push({value:P})}return I&&f&&v!==a?e.length&&Sr(e[e.length-1].value,a,Bm(a,R,n))?e[e.length-1].value=a:e.push({value:a}):(!I||v===a)&&e.push({value:v}),e}function Bm(n,t,{horizontal:e,minRotation:s}){const i=Fe(s),r=(e?Math.sin(i):Math.cos(i))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class Za extends Hs{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return et(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:i,max:r}=this;const o=c=>i=e?i:c,a=c=>r=s?r:c;if(t){const c=en(i),l=en(r);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(i===r){let c=r===0?1:Math.abs(r*.05);a(r+c),t||o(i-c)}this.min=i,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,i;return s?(i=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),e=e||11),e&&(i=Math.min(e,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const i={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=tD(i,r);return t.bounds==="ticks"&&Qy(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const i=(s-e)/Math.max(t.length-1,1)/2;e-=i,s+=i}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return po(t,this.chart.options.locale,this.options.ticks.format)}}class Iu extends Za{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Nt(t)?t:0,this.max=Nt(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=Fe(this.options.ticks.minRotation),i=(t?Math.sin(s):Math.cos(s))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}N(Iu,"id","linear"),N(Iu,"defaults",{ticks:{callback:Rc.formatters.numeric}});const Kr=n=>Math.floor(Hn(n)),gs=(n,t)=>Math.pow(10,Kr(n)+t);function Um(n){return n/Math.pow(10,Kr(n))===1}function jm(n,t,e){const s=Math.pow(10,e),i=Math.floor(n/s);return Math.ceil(t/s)-i}function eD(n,t){const e=t-n;let s=Kr(e);for(;jm(n,t,s)>10;)s++;for(;jm(n,t,s)<10;)s--;return Math.min(s,Kr(n))}function nD(n,{min:t,max:e}){t=Se(n.min,t);const s=[],i=Kr(t);let r=eD(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),c=i>r?Math.pow(10,i):0,l=Math.round((t-c)*o)/o,d=Math.floor((t-c)/a/10)*a*10;let h=Math.floor((l-d)/Math.pow(10,r)),f=Se(n.min,Math.round((c+d+h*Math.pow(10,r))*o)/o);for(;f<e;)s.push({value:f,major:Um(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),f=Math.round((c+d+h*Math.pow(10,r))*o)/o;const m=Se(n.max,f);return s.push({value:m,major:Um(m),significand:h}),s}class Au extends Hs{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=Za.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return Nt(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Nt(t)?Math.max(0,t):null,this.max=Nt(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Nt(this._userMin)&&(this.min=t===gs(this.min,0)?gs(this.min,-1):gs(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,i=this.max;const r=a=>s=t?s:a,o=a=>i=e?i:a;s===i&&(s<=0?(r(1),o(10)):(r(gs(s,-1)),o(gs(i,1)))),s<=0&&r(gs(i,-1)),i<=0&&o(gs(s,1)),this.min=s,this.max=i}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=nD(e,this);return t.bounds==="ticks"&&Qy(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":po(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Hn(t),this._valueRange=Hn(this.max)-Hn(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Hn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}N(Au,"id","logarithmic"),N(Au,"defaults",{ticks:{callback:Rc.formatters.logarithmic,major:{enabled:!0}}});function ku(n){const t=n.ticks;if(t.display&&n.display){const e=ge(t.backdropPadding);return K(t.font&&t.font.size,St.font.size)+e.height}return 0}function sD(n,t,e){return e=kt(e)?e:[e],{w:u1(n,t.string,e),h:e.length*t.lineHeight}}function zm(n,t,e,s,i){return n===s||n===i?{start:t-e/2,end:t+e/2}:n<s||n>i?{start:t-e,end:t}:{start:t,end:t+e}}function iD(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),s=[],i=[],r=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?ut/r:0;for(let c=0;c<r;c++){const l=o.setContext(n.getPointLabelContext(c));i[c]=l.padding;const d=n.getPointPosition(c,n.drawingArea+i[c],a),h=Qt(l.font),f=sD(n.ctx,h,n._pointLabels[c]);s[c]=f;const m=he(n.getIndexAngle(c)+a),_=Math.round($d(m)),b=zm(_,d.x,f.w,0,180),y=zm(_,d.y,f.h,90,270);rD(e,t,m,b,y)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=cD(n,s,i)}function rD(n,t,e,s,i){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,c=0;s.start<t.l?(a=(t.l-s.start)/r,n.l=Math.min(n.l,t.l-a)):s.end>t.r&&(a=(s.end-t.r)/r,n.r=Math.max(n.r,t.r+a)),i.start<t.t?(c=(t.t-i.start)/o,n.t=Math.min(n.t,t.t-c)):i.end>t.b&&(c=(i.end-t.b)/o,n.b=Math.max(n.b,t.b+c))}function oD(n,t,e){const s=n.drawingArea,{extra:i,additionalAngle:r,padding:o,size:a}=e,c=n.getPointPosition(t,s+i+o,r),l=Math.round($d(he(c.angle+Ut))),d=dD(c.y,a.h,l),h=lD(l),f=uD(c.x,a.w,h);return{visible:!0,x:c.x,y:d,textAlign:h,left:f,top:d,right:f+a.w,bottom:d+a.h}}function aD(n,t){if(!t)return!0;const{left:e,top:s,right:i,bottom:r}=n;return!(En({x:e,y:s},t)||En({x:e,y:r},t)||En({x:i,y:s},t)||En({x:i,y:r},t))}function cD(n,t,e){const s=[],i=n._pointLabels.length,r=n.options,{centerPointLabels:o,display:a}=r.pointLabels,c={extra:ku(r)/2,additionalAngle:o?ut/i:0};let l;for(let d=0;d<i;d++){c.padding=e[d],c.size=t[d];const h=oD(n,d,c);s.push(h),a==="auto"&&(h.visible=aD(h,l),h.visible&&(l=h))}return s}function lD(n){return n===0||n===180?"center":n<180?"left":"right"}function uD(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function dD(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function hD(n,t,e){const{left:s,top:i,right:r,bottom:o}=e,{backdropColor:a}=t;if(!et(a)){const c=ks(t.borderRadius),l=ge(t.backdropPadding);n.fillStyle=a;const d=s-l.left,h=i-l.top,f=r-s+l.width,m=o-i+l.height;Object.values(c).some(_=>_!==0)?(n.beginPath(),Gr(n,{x:d,y:h,w:f,h:m,radius:c}),n.fill()):n.fillRect(d,h,f,m)}}function fD(n,t){const{ctx:e,options:{pointLabels:s}}=n;for(let i=t-1;i>=0;i--){const r=n._pointLabelItems[i];if(!r.visible)continue;const o=s.setContext(n.getPointLabelContext(i));hD(e,o,r);const a=Qt(o.font),{x:c,y:l,textAlign:d}=r;Fs(e,n._pointLabels[i],c,l+a.lineHeight/2,a,{color:o.color,textAlign:d,textBaseline:"middle"})}}function jv(n,t,e,s){const{ctx:i}=n;if(e)i.arc(n.xCenter,n.yCenter,t,0,It);else{let r=n.getPointPosition(0,t);i.moveTo(r.x,r.y);for(let o=1;o<s;o++)r=n.getPointPosition(o,t),i.lineTo(r.x,r.y)}}function pD(n,t,e,s,i){const r=n.ctx,o=t.circular,{color:a,lineWidth:c}=t;!o&&!s||!a||!c||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=c,r.setLineDash(i.dash||[]),r.lineDashOffset=i.dashOffset,r.beginPath(),jv(n,e,o,s),r.closePath(),r.stroke(),r.restore())}function mD(n,t,e){return cs(n,{label:e,index:t,type:"pointLabel"})}class br extends Za{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=ge(ku(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=Nt(t)&&!isNaN(t)?t:0,this.max=Nt(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/ku(this.options))}generateTickLabels(t){Za.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const i=bt(this.options.pointLabels.callback,[e,s],this);return i||i===0?i:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?iD(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,i){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,i))}getIndexAngle(t){const e=It/(this._pointLabels.length||1),s=this.options.startAngle||0;return he(t*e+Fe(s))}getDistanceFromCenterForValue(t){if(et(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(et(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return mD(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const i=this.getIndexAngle(t)-Ut+s;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter,angle:i}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:i,bottom:r}=this._pointLabelItems[t];return{left:e,top:s,right:i,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),jv(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:i,border:r}=e,o=this._pointLabels.length;let a,c,l;if(e.pointLabels.display&&fD(this,o),i.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){c=this.getDistanceFromCenterForValue(d.value);const f=this.getContext(h),m=i.setContext(f),_=r.setContext(f);pD(this,m,c,o,_)}}),s.display){for(t.save(),a=o-1;a>=0;a--){const d=s.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=d;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),l=this.getPointPosition(a,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const i=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const l=s.setContext(this.getContext(c)),d=Qt(l.font);if(r=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){t.font=d.string,o=t.measureText(a.label).width,t.fillStyle=l.backdropColor;const h=ge(l.backdropPadding);t.fillRect(-o/2-h.left,-r-d.size/2-h.top,o+h.width,d.size+h.height)}Fs(t,a.label,0,-r,d,{color:l.color,strokeColor:l.textStrokeColor,strokeWidth:l.textStrokeWidth})}),t.restore()}drawTitle(){}}N(br,"id","radialLinear"),N(br,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Rc.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),N(br,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),N(br,"descriptors",{angleLines:{_fallback:"grid"}});const Nc={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ae=Object.keys(Nc);function Hm(n,t){return n-t}function qm(n,t){if(et(t))return null;const e=n._adapter,{parser:s,round:i,isoWeekday:r}=n._parseOpts;let o=t;return typeof s=="function"&&(o=s(o)),Nt(o)||(o=typeof s=="string"?e.parse(o,s):e.parse(o)),o===null?null:(i&&(o=i==="week"&&(Ti(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,i)),+o)}function Wm(n,t,e,s){const i=Ae.length;for(let r=Ae.indexOf(n);r<i-1;++r){const o=Nc[Ae[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=s)return Ae[r]}return Ae[i-1]}function gD(n,t,e,s,i){for(let r=Ae.length-1;r>=Ae.indexOf(e);r--){const o=Ae[r];if(Nc[o].common&&n._adapter.diff(i,s,o)>=t-1)return o}return Ae[e?Ae.indexOf(e):0]}function _D(n){for(let t=Ae.indexOf(n)+1,e=Ae.length;t<e;++t)if(Nc[Ae[t]].common)return Ae[t]}function Gm(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:s,hi:i}=Bd(e,t),r=e[s]>=t?e[s]:e[i];n[r]=!0}}function yD(n,t,e,s){const i=n._adapter,r=+i.startOf(t[0].value,s),o=t[t.length-1].value;let a,c;for(a=r;a<=o;a=+i.add(a,1,s))c=e[a],c>=0&&(t[c].major=!0);return t}function Ym(n,t,e){const s=[],i={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],i[a]=o,s.push({value:a,major:!1});return r===0||!e?s:yD(n,s,i,e)}class Qr extends Hs{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),i=this._adapter=new xv._date(t.adapters.date);i.init(e),kr(s.displayFormats,i.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:qm(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:i,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(i=Math.min(i,l.min)),!a&&!isNaN(l.max)&&(r=Math.max(r,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),i=Nt(i)&&!isNaN(i)?i:+e.startOf(Date.now(),s),r=Nt(r)&&!isNaN(r)?r:+e.endOf(Date.now(),s)+1,this.min=Math.min(i,r-1),this.max=Math.max(i+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,i=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const r=this.min,o=this.max,a=XS(i,r,o);return this._unit=e.unit||(s.autoSkip?Wm(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):gD(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:_D(this._unit),this.initOffsets(i),t.reverse&&a.reverse(),Ym(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,i,r;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?e=1-i:e=(this.getDecimalForValue(t[1])-i)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?s=r:s=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=Jt(e,0,o),s=Jt(s,0,o),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,i=this.options,r=i.time,o=r.unit||Wm(r.minUnit,e,s,this._getLabelCapacity(e)),a=K(i.ticks.stepSize,1),c=o==="week"?r.isoWeekday:!1,l=Ti(c)||c===!0,d={};let h=e,f,m;if(l&&(h=+t.startOf(h,"isoWeek",c)),h=+t.startOf(h,l?"day":o),t.diff(s,e,o)>1e5*a)throw new Error(e+" and "+s+" are too far apart with stepSize of "+a+" "+o);const _=i.ticks.source==="data"&&this.getDataTimestamps();for(f=h,m=0;f<s;f=+t.add(f,a,o),m++)Gm(d,f,_);return(f===s||i.bounds==="ticks"||m===1)&&Gm(d,f,_),Object.keys(d).sort(Hm).map(b=>+b)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const i=this.options.time.displayFormats,r=this._unit,o=e||i[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,s,i){const r=this.options,o=r.ticks.callback;if(o)return bt(o,[t,e,s],this);const a=r.time.displayFormats,c=this._unit,l=this._majorUnit,d=c&&a[c],h=l&&a[l],f=s[e],m=l&&h&&f&&f.major;return this._adapter.format(t,i||(m?h:d))}generateTickLabels(t){let e,s,i;for(e=0,s=t.length;e<s;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,i=Fe(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(i),o=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:s*r+a*o,h:s*o+a*r}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,i=s[e.unit]||s.millisecond,r=this._tickFormatFunction(t,0,Ym(this,[t],this._majorUnit),i),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(e=0,s=i.length;e<s;++e)t=t.concat(i[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const i=this.getLabels();for(e=0,s=i.length;e<s;++e)t.push(qm(this,i[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Zy(t.sort(Hm))}}N(Qr,"id","time"),N(Qr,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function sa(n,t,e){let s=0,i=n.length-1,r,o,a,c;e?(t>=n[s].pos&&t<=n[i].pos&&({lo:s,hi:i}=xn(n,"pos",t)),{pos:r,time:a}=n[s],{pos:o,time:c}=n[i]):(t>=n[s].time&&t<=n[i].time&&({lo:s,hi:i}=xn(n,"time",t)),{time:r,pos:a}=n[s],{time:o,pos:c}=n[i]);const l=o-r;return l?a+(c-a)*(t-r)/l:a}class Su extends Qr{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=sa(e,this.min),this._tableRange=sa(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,i=[],r=[];let o,a,c,l,d;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=s&&i.push(l);if(i.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(o=0,a=i.length;o<a;++o)d=i[o+1],c=i[o-1],l=i[o],Math.round((d+c)/2)!==l&&r.push({time:l,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((i,r)=>i-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(sa(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return sa(this._table,s*this._tableRange+this._minPos,!0)}}N(Su,"id","timeseries"),N(Su,"defaults",Qr.defaults);var vD=Object.freeze({__proto__:null,CategoryScale:Tu,LinearScale:Iu,LogarithmicScale:Au,RadialLinearScale:br,TimeScale:Qr,TimeSeriesScale:Su});const bD=[AR,eC,QC,vD];gt.register(...bD);const er="rgba(255,255,255,0.08)",ei="#a1a1aa",Le={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};gt.defaults.color="#e5e5e5";gt.defaults.font.family=Le.family;gt.defaults.font.weight=Le.weight;const nr={renderCurvaS:(n,t=[],e=[],s=[])=>{const i=document.getElementById(n);if(!i)return;i.chart&&i.chart.destroy();const r=s.length?s:t.map((o,a)=>`M${a+1}`);i.chart=new gt(i,{type:"line",data:{labels:r,datasets:[{label:"Planejado",data:t,borderColor:"#16a34a",backgroundColor:"rgba(34, 197, 94, 0.15)",tension:.35,fill:!0,borderWidth:3},{label:"Realizado",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.05)",tension:.35,fill:!0,borderWidth:3}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Le,usePointStyle:!0}}},scales:{x:{grid:{color:er},ticks:{color:ei,font:Le}},y:{grid:{color:er},ticks:{color:ei,font:Le}}}}})},renderGastosPorMes:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new gt(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:er},ticks:{color:ei,font:Le}},y:{grid:{color:er},ticks:{color:ei,font:Le}}}}})},renderStatusPie:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new gt(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Le,padding:12,usePointStyle:!0}}}}})},renderNatureza:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new gt(e,{type:"bar",data:{labels:s,datasets:[{label:"Por Natureza",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:ei,font:Le}},y:{grid:{color:er},ticks:{color:ei,font:Le,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}}}})},renderCentrosCusto:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new gt(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e","#0ea5e9","#f59e0b"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:Le,padding:12,usePointStyle:!0}}}}})}},Wt={dashboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>',shoppingCart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>',chart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.212 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',logout:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>',bell:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>',moon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" /></svg>',pencil:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.75 19.901l-4.5.75.75-4.5L16.862 4.487z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.6l2.651 2.651" /></svg>',trash:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5h10.5M9.75 7.5v-1.5a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v1.5m-9 0v12a1.5 1.5 0 001.5 1.5h7.5a1.5 1.5 0 001.5-1.5v-12" /></svg>'},nt={render:n=>{const t=document.getElementById("app"),e=mt.state.currentUser;if(!e){t.innerHTML=n;return}const s=mt.state.sidebarCollapsed,i=mt.state.currentTheme;t.innerHTML=`
            <div class="flex h-screen bg-canvas text-text transition-colors duration-200">
                <!-- Sidebar -->
                <aside id="sidebar" class="${s?"w-20":"w-64"} bg-surface border-r border-border flex flex-col transition-all duration-300 z-20 hidden md:flex shadow-heavy">
                    <div class="h-16 flex items-center justify-center border-b border-border">
                        <span class="text-2xl font-display text-primary">AXEL</span>
                        <span data-logo-text class="${s?"hidden":"ml-2 text-text font-display tracking-wide"}">GESTÃO</span>
                    </div>

                    <nav class="flex-1 overflow-y-auto py-4 space-y-1 px-3">
                        ${nt.createNavItem("/","Dashboard",Wt.dashboard,s)}
                        ${nt.createNavItem("/compras","Compras",Wt.shoppingCart,s)}
                        ${nt.createNavItem("/relatorios","Relatórios",Wt.clipboard,s)}
                        ${nt.createNavItem("/obras","Obras",Wt.chart,s)}
                        ${nt.createNavItem("/cadastros","Cadastros",Wt.settings,s)}
                        <div class="pt-4 mt-4 border-t border-border">
                            ${nt.createNavItem("/configuracoes","Configurações",Wt.settings,s)}
                        </div>
                    </nav>

                    <div class="p-4 border-t border-border">
                        <button id="btn-logout" class="flex items-center gap-3 text-text-muted hover:text-alert w-full p-2 rounded transition-colors uppercase tracking-wide font-display">
                            ${Wt.logout}
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
                                ${Wt.menu}
                            </button>
                            
                            <!-- Global Search -->
                            <div class="relative hidden md:block w-96">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-text-muted">
                                    ${Wt.search}
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
                                ${i==="dark"?Wt.sun:Wt.moon}
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
        `,nt.bindEvents()},createNavItem:(n,t,e,s)=>{var o;const r=vt.currentRoute===n||((o=vt.currentRoute)==null?void 0:o.startsWith(`${n}/`))?"text-primary accent-left bg-surface shadow-heavy":"text-text-muted hover:text-text hover:bg-canvas";return`
            <a href="#${n}" class="flex items-center gap-3 px-3 py-2 rounded transition-colors mb-1 border border-transparent ${r}" title="${t}">
                ${e}
                <span class="${s?"hidden":"font-display tracking-wide uppercase"}">${t}</span>
            </a>
        `},bindEvents:()=>{var n,t,e;(n=document.getElementById("btn-toggle-sidebar"))==null||n.addEventListener("click",()=>{mt.toggleSidebar();const s=document.getElementById("sidebar"),i=s.querySelectorAll("span"),r=s.querySelector("[data-logo-text]");mt.state.sidebarCollapsed?(s.classList.remove("w-64"),s.classList.add("w-20"),i.forEach(o=>o.classList.add("hidden")),r&&r.classList.add("hidden")):(s.classList.remove("w-20"),s.classList.add("w-64"),i.forEach(o=>o.classList.remove("hidden")),r&&r.classList.remove("hidden"))}),(t=document.getElementById("btn-theme-toggle"))==null||t.addEventListener("click",()=>{const i=mt.state.currentTheme==="dark"?"light":"dark";mt.setTheme(i);const r=document.getElementById("btn-theme-toggle");r.innerHTML=i==="dark"?Wt.sun:Wt.moon}),(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",async()=>{try{await Ha.logout(),vt.navigate("/login")}catch(s){console.error(s)}}),document.addEventListener("keydown",s=>{var i;(s.ctrlKey||s.metaKey)&&s.key==="k"&&(s.preventDefault(),(i=document.getElementById("global-search"))==null||i.focus())})}},Ve={getObras:async()=>(await Et(wt(J,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getObraById:async n=>{const e=(await Et(wt(J,"obras"))).docs.find(s=>s.id===n);return e?{id:e.id,...e.data()}:null},createObra:async n=>(await Di(wt(J,"obras"),{...n,created_at:new Date().toISOString()})).id,updateObra:async(n,t)=>{await sn(Zt(J,"obras",n),{...t,updated_at:new Date().toISOString()})},deleteObra:async n=>{await z_(Zt(J,"obras",n))},getObraStats:async(n,t=!1)=>{const e=wt(J,"compras"),s=we(e,Kt("obraId","==",n)),r=(await Et(s)).docs.map(x=>({id:x.id,...x.data()}));let o=0;const a={},c={},l={};let d=0,h=0,f=0,m=0,_=0;const b={},y={};r.forEach(x=>{const v=Number(x.valor_total??x.valor_estimado??0);o+=v,a[x.status_compra]=(a[x.status_compra]||0)+1;const w=x.previsao_entrega?new Date(x.previsao_entrega):null,A=x.data_recebimento?new Date(x.data_recebimento):null;if(x.status_compra!=="Entregue"&&w&&w<new Date&&d++,A&&w&&(h++,A<=w&&f++),x.data_emissao&&(A||w)){const tt=A||w,W=Math.max(0,(new Date(tt)-new Date(x.data_emissao))/(1e3*60*60*24));m+=W,_++}const S=x.categoria||"Outros";c[S]=(c[S]||0)+v;const P=(x.natureza_compra||"Outros").trim();b[P]=(b[P]||0)+v;const k=x.centroCustoNome||x.centro_custo||x.centroCustoId||"N/D";if(y[k]=(y[k]||0)+v,x.data_solicitacao){const tt=new Date(x.data_solicitacao),W=`${tt.getFullYear()}-${String(tt.getMonth()+1).padStart(2,"0")}`;l[W]=(l[W]||0)+v}});const T=Object.keys(l).length||1,I=Ve.calculateCurvaS(o,T,l),C=h?f/h*100:0,R=_?m/_:0,D=[...r].sort((x,v)=>{const w=x.data_solicitacao||x.data_emissao||"";return(v.data_solicitacao||v.data_emissao||"").localeCompare(w)}),O={totalCompras:r.length,totalGasto:o,porStatus:a,gastosPorCategoria:c,gastosMensais:l,curvaS:I,comprasRecentes:D.slice(0,10),atrasos:d,sla:C,lead:R,naturezaTotais:b,ccTotais:y};if(t)try{const{RDOService:x}=await qa(async()=>{const{RDOService:w}=await Promise.resolve().then(()=>pb);return{RDOService:w}},void 0),v=await Ve.getObraById(n);if(v!=null&&v.numero_os){const w=new Date().toISOString().split("T")[0],A=new Date(Date.now()-30*24*60*60*1e3).toISOString().split("T")[0],S=await x.getByObra(v.numero_os,A,w);S&&S.length>0&&(O.rdoData=x.processRDOData(S))}}catch(x){console.warn("Erro ao buscar dados RDO:",x)}return O},calculateCurvaS:(n,t,e)=>{const s=[],i=[];let r=0;const o=Object.keys(e).sort();for(let a=0;a<t;a++){const c=(a+1)/t,l=1/(1+Math.exp(-10*(c-.5)));s.push(n*l),o[a]&&(r+=e[o[a]]),i.push(r)}return{planejado:s,realizado:i}}},wD=Object.freeze(Object.defineProperty({__proto__:null,ObrasService:Ve},Symbol.toStringTag,{value:"Module"})),Nl="rgba(255,255,255,0.08)",ia="#a1a1aa",sr={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"},$t={renderEmpty:n=>{const t=document.getElementById(n);if(!t)return;const e=t.parentElement;if(!e)return;t.style.display="none";let s=e.querySelector(".chart-placeholder");s||(s=document.createElement("div"),s.className="chart-placeholder text-center text-sm text-text-muted py-6",e.appendChild(s)),s.textContent="Sem dados"},renderHorasPorDia:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new gt(e,{type:"line",data:{labels:s.map(r=>new Date(r).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})),datasets:[{label:"Horas Trabalhadas",data:i,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.1)",borderWidth:2,fill:!0,tension:.4,pointRadius:4,pointBackgroundColor:"#22c55e",pointBorderColor:"#121212",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Nl},ticks:{color:ia,font:sr}},y:{grid:{color:Nl},ticks:{color:ia,font:sr},beginAtZero:!0}}}})},renderHorasPorFuncao:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new gt(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e","#0ea5e9"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:sr,padding:12,usePointStyle:!0}}}}})},renderFuncionariosPorDia:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new gt(e,{type:"bar",data:{labels:s.map(r=>new Date(r).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})),datasets:[{label:"Funcionários",data:i,backgroundColor:"#0ea5e9",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:ia,font:sr}},y:{grid:{color:Nl},ticks:{color:ia,font:sr,stepSize:1},beginAtZero:!0}}}})}},Xr=n=>n instanceof Date&&!isNaN(n),xD=(n,t)=>{const e=new Date(n),s=new Date(t);if(!Xr(e)||!Xr(s)||e>s)return[];const i=[];for(let r=new Date(e);r<=s;r.setDate(r.getDate()+1))i.push(new Date(r));return i},zv=n=>Xr(n)?n.toISOString().split("T")[0]:null,Hv=n=>{if(!(n!=null&&n.data_inicio)||!(n!=null&&n.data_prevista_fim))return[];const t=new Date(n.data_inicio),e=new Date(n.data_prevista_fim);if(!Xr(t)||!Xr(e)||t>e)return[];const s=xD(t,e),i=s.length?(n.orcamento||0)/s.length:0;let r=0;return s.map(o=>{r+=i;const a=zv(o);return a?{x:a,y:r}:null}).filter(Boolean)},qv=(n=[],t={},e=0,s=0,i={})=>{const r={};n.forEach(c=>{if(!c.data_solicitacao)return;const l=zv(new Date(c.data_solicitacao));if(!l)return;const d=Number(c.valor_estimado||c.valor_total||0);r[l]=(r[l]||0)+d}),Object.entries(t||{}).forEach(([c,l])=>{const d=Number(l)||0,h=Number(i==null?void 0:i[c])||0,m=Math.max(0,d-h)*e+(h*s||e);r[c]=(r[c]||0)+m});const o=Object.keys(r).sort();let a=0;return o.map(c=>(a+=r[c],{x:c,y:a}))},tc={create:async n=>(await Di(wt(J,"notificacoes"),{...n,lida:!1,created_at:new Date().toISOString()})).id,getByUser:async(n,t=10)=>{const e=we(wt(J,"notificacoes"),Kt("userId","==",n),au("created_at","desc"),ua(t));return(await Et(e)).docs.map(i=>({id:i.id,...i.data()}))},markAsRead:async n=>{await sn(Zt(J,"notificacoes",n),{lida:!0,read_at:new Date().toISOString()})},markAllAsRead:async n=>{const t=we(wt(J,"notificacoes"),Kt("userId","==",n),Kt("lida","==",!1)),s=(await Et(t)).docs.map(i=>sn(Zt(J,"notificacoes",i.id),{lida:!0,read_at:new Date().toISOString()}));await Promise.all(s)},checkAndNotify:async()=>{const n=new Date;n.setDate(n.getDate()+3);const t=we(wt(J,"compras"),Kt("status_compra","in",["Comprado","Em Trânsito"]),Kt("data_entrega_prevista","<=",n.toISOString())),e=await Et(t),s=[];for(const i of e.docs){const r=i.data(),o=Math.ceil((new Date(r.data_entrega_prevista)-new Date)/(1e3*60*60*24));o>=0&&o<=3&&s.push({userId:r.solicitante_id,tipo:"entrega_proxima",titulo:"Entrega Próxima",mensagem:`${r.descricao} - Entrega prevista em ${o} dia(s)`,link:`/compras/${i.id}`,prioridade:o===0?"alta":"normal"})}for(const i of s)await tc.create(i);return s.length}},Wv={init:async()=>{var t,e,s,i;const n=mt.state.currentUser;if(n){nt.render(F.createLoader());try{let r="";if(n.role==="comprador"){const o=await hn.getCompradorStats();r=bl.renderComprador(o),nt.render(r),o.atrasos>0&&F.createToast(`Existem ${o.atrasos} pedidos em atraso.`,"warning")}else if(n.role==="obra"||n.role==="engenheiro"){let o=n.obraPadrao||null;if(!o){const c=await((t=hn.getObras)==null?void 0:t.call(hn));c&&c.length&&(o=c[0].id)}const a=await hn.getObraStats(o);r=bl.renderObra(a),nt.render(r),a.atrasos>0&&F.createToast(`Esta obra tem ${a.atrasos} pedido(s) em atraso.`,"warning"),setTimeout(()=>{a.rdoData?(a.rdoData.horasPorDia?$t.renderHorasPorDia("chart-rdo-horas",a.rdoData.horasPorDia):$t.renderEmpty("chart-rdo-horas"),a.rdoData.horasPorFuncao?$t.renderHorasPorFuncao("chart-rdo-funcao",a.rdoData.horasPorFuncao):$t.renderEmpty("chart-rdo-funcao"),a.rdoData.funcionariosPorDia?$t.renderFuncionariosPorDia("chart-rdo-funcionarios",a.rdoData.funcionariosPorDia):$t.renderEmpty("chart-rdo-funcionarios")):($t.renderEmpty("chart-rdo-horas"),$t.renderEmpty("chart-rdo-funcao"),$t.renderEmpty("chart-rdo-funcionarios"))},100)}else{const o=await hn.getDiretorStats(),a=await((e=hn.getObras)==null?void 0:e.call(hn))||await Ve.getObras(),c=o._allCompras||[],l=[],d=[];a.forEach(T=>{Hv({data_inicio:T.data_inicio||T.data_prevista_inicio,data_prevista_fim:T.data_prevista_fim||T.data_fim,orcamento:T.orcamento||T.valor_orcado||0}).forEach(D=>l.push(D));const C=c.filter(D=>D.obraId===T.id);qv(C,{},0,0).forEach(D=>d.push(D))});const h=Array.from(new Set([...l.map(T=>T.x),...d.map(T=>T.x)])).sort();let f=0,m=0;const _=[],b=[],y=[];h.forEach(T=>{const I=l.filter(R=>R.x===T).map(R=>R.y).pop(),C=d.filter(R=>R.x===T).map(R=>R.y).pop();I!==void 0&&(f=I),C!==void 0&&(m=C),y.push(T),_.push(f),b.push(m)}),r=bl.renderDiretor({...o,curvaS:{planejado:_,realizado:b,labels:y},obras:a}),nt.render(r),setTimeout(()=>{(_.length||b.length)&&nr.renderCurvaS("chart-curva",_,b,y),nr.renderStatusPie("chart-status",o.porStatus),o.naturezaTotais&&nr.renderNatureza("chart-natureza-dir",o.naturezaTotais),o.ccTotais&&nr.renderCentrosCusto("chart-cc-dir",o.ccTotais),o.gastosPorMes&&nr.renderGastosPorMes("chart-gastos-mes",o.gastosPorMes)},100),o.atrasos>0&&F.createToast(`Há ${o.atrasos} compras com previsão vencida.`,"warning"),((s=o.alerts)==null?void 0:s.sem_previsao)>0&&F.createToast(`${o.alerts.sem_previsao} pedidos sem previsão de entrega.`,"warning"),((i=o.alerts)==null?void 0:i.pendente_aprovacao)>0&&F.createToast(`${o.alerts.pendente_aprovacao} pedidos com aprovação pendente.`,"warning"),Wv._maybeNotify(o.alerts)}}catch(r){console.error(r),nt.render(`<div class="text-red-500 p-4">Erro ao carregar dashboard: ${r.message}</div>`)}}},_maybeNotify:async(n={})=>{const t=mt.state.currentUser;if(!t)return;const e=new Date().toISOString().slice(0,10),s=async(i,r,o)=>{const a=`notif_${i}_${e}_${t.uid}`;localStorage.getItem(a)||(await tc.create({userId:t.uid,tipo:i,titulo:r,mensagem:o,link:"#/relatorios",prioridade:"normal"}),localStorage.setItem(a,"1"))};(n==null?void 0:n.atrasados)>0&&await s("atrasados","Pedidos atrasados",`${n.atrasados} pedido(s) com previsão vencida.`),(n==null?void 0:n.sem_previsao)>0&&await s("sem_previsao","Pedidos sem previsão",`${n.sem_previsao} pedido(s) sem data de entrega.`),(n==null?void 0:n.pendente_aprovacao)>0&&await s("pendente_aprovacao","Aprovação pendente",`${n.pendente_aprovacao} pedido(s) aguardando aprovação.`)}},ED=async n=>{if(!n)return{limiteReal:0,toleranciaPercentual:0,orcamento:0};const t=await Va(Zt(J,"obras",n));if(!t.exists())return{limiteReal:0,toleranciaPercentual:0,orcamento:0};const e=t.data(),s=Number(e.valor_orcado||e.orcamento||0),i=Number(e.tolerancia_percentual||0);return{limiteReal:s+s*i,toleranciaPercentual:i,orcamento:s}},Km=async(n,t,e)=>{const{limiteReal:s}=await ED(n),i=s>0&&t>s;if(i&&!e){const r=new Error("JUSTIFICATIVA_NECESSARIA");throw r.code="JUSTIFICATIVA_NECESSARIA",r}return{estouro_orcamento:i,status_aprovacao:i?"Pendente":"Aprovado"}},ir={checkDuplicidade:async(n,t)=>{const e=we(wt(J,"compras"),Kt("obraId","==",n),Kt("status_compra","in",["Pendente","Em Cotação"])),s=await Et(e),i=t.toLowerCase();return s.docs.some(r=>{const o=r.data(),a=(o.descricao_compra||o.descricao||"").toLowerCase(),c=o.itens||[];return a.includes(i)||c.some(l=>(l.nome||"").toLowerCase().includes(i))})},uploadArquivo:(n,t,e)=>new Promise((s,i)=>{const r=FI(cS,t),o=LI(r,n);o.on("state_changed",a=>{const c=a.bytesTransferred/a.totalBytes*100;e&&e(c)},a=>i(a),async()=>{const a=await VI(o.snapshot.ref);s(a)})}),salvarCompra:async n=>{const t=Number(n.valor_total||0),e=n.justificativa_estouro_orcamento||n.justificativa||"",s=await Km(n.obraId,t,e),i={...n,descricao_compra:n.descricao_compra||n.descricao||"",valor_total:t,justificativa_estouro_orcamento:e||null,estouro_orcamento:s.estouro_orcamento,status_aprovacao:n.status_aprovacao||s.status_aprovacao,data_solicitacao:Pt.now().toDate().toISOString(),status_compra:n.status_compra||"Pendente",criado_em:Pt.now(),criado_por:n.criado_por||null};return i.nf_conferida&&(i.nf_conferida_em=i.nf_conferida_em||Pt.now(),i.nf_conferida_por=i.nf_conferida_por||i.criado_por||null),(await Di(wt(J,"compras"),i)).id},atualizarCompra:async(n,t)=>{const e=Number(t.valor_total||0),s=t.justificativa_estouro_orcamento||t.justificativa||"",i=await Km(t.obraId,e,s),r=Zt(J,"compras",n);await sn(r,{...t,descricao_compra:t.descricao_compra||t.descricao||"",valor_total:e,justificativa_estouro_orcamento:s||null,estouro_orcamento:i.estouro_orcamento,status_aprovacao:t.status_aprovacao||i.status_aprovacao,nf_conferida_em:t.nf_conferida?t.nf_conferida_em||Pt.now():null,nf_conferida_por:t.nf_conferida&&(t.nf_conferida_por||t.criado_por)||null})},getCompra:async n=>{const t=await Va(Zt(J,"compras",n));return t.exists()?{id:t.id,...t.data()}:null}},Qm={renderForm:({obras:n=[],fornecedores:t=[],centros:e=[],compradores:s=[],compra:i=null}={})=>{const r=!!i,o=["Pendente","Em Cotação","Aprovado","Comprado","Entregue","Recebido","Cancelado"],a=["Aprovado","Pendente","Reprovado"],c=["Lista de Material inicial","Compra emergencial","Serviço","Transporte","Outros"],l=["Normal","Alta","Crítica"],d=y=>{if(!y)return"";const T=y!=null&&y.toDate?y.toDate():new Date(y);return Number.isNaN(T.getTime())?"":T.toISOString().split("T")[0]},h=y=>String(y??"").replace(/"/g,"&quot;"),f=(y,T)=>T?y.includes(T)?y:[T,...y]:y,m=f(c,i==null?void 0:i.natureza_compra),_=f(a,i==null?void 0:i.status_aprovacao),b=f(o,i==null?void 0:i.status_compra);return`
            <div class="max-w-5xl mx-auto space-y-6">
                <div class="flex items-center justify-between">
                    <h2 class="text-2xl font-display text-text tracking-wide">${r?"Editar Compra":"Nova Compra"}</h2>
                    <button class="btn-secondary" onclick="window.history.back()">Voltar</button>
                </div>

                <form id="form-compra" class="space-y-6">
                    <div class="card space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Obra</label>
                                <select id="obraId" name="obraId" class="input" required>
                                    <option value="">Selecione...</option>
                                    ${n.map(y=>`
                                        <option value="${y.id}" ${(i==null?void 0:i.obraId)===y.id?"selected":""}>${y.nome_obra||y.apelido_obra||y.id}</option>
                                    `).join("")}
                                </select>
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Status</label>
                                <select id="status_compra" name="status_compra" class="input">
                                    ${b.map(y=>`<option value="${y}" ${(i==null?void 0:i.status_compra)===y?"selected":""}>${y}</option>`).join("")}
                                </select>
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Prioridade</label>
                                <select id="prioridade" name="prioridade" class="input">
                                    ${l.map(y=>`<option value="${y}" ${(i==null?void 0:i.prioridade)===y?"selected":""}>${y}</option>`).join("")}
                                </select>
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Natureza</label>
                                <select id="natureza_compra" name="natureza_compra" class="input">
                                    ${m.map(y=>`<option value="${y}" ${(i==null?void 0:i.natureza_compra)===y?"selected":""}>${y}</option>`).join("")}
                                </select>
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Status de Aprovação</label>
                                <select id="status_aprovacao" name="status_aprovacao" class="input">
                                    ${_.map(y=>`<option value="${y}" ${(i==null?void 0:i.status_aprovacao)===y?"selected":""}>${y}</option>`).join("")}
                                </select>
                            </div>
                            <div class="flex items-center gap-3 pt-6">
                                <label class="flex items-center gap-2 text-sm text-text cursor-pointer">
                                    <input type="checkbox" id="retirada_estoque" name="retirada_estoque" class="rounded border-border text-primary focus:ring-primary" ${i!=null&&i.retirada_estoque?"checked":""}>
                                    <span class="font-display uppercase tracking-wide">Retirada de estoque</span>
                                </label>
                                <label class="flex items-center gap-2 text-sm text-text cursor-pointer">
                                    <input type="checkbox" id="nf_conferida" name="nf_conferida" class="rounded border-border text-primary focus:ring-primary" ${i!=null&&i.nf_conferida?"checked":""}>
                                    <span class="font-display uppercase tracking-wide">NF Conferida</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="card space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Descrição</label>
                                <input id="descricao_compra" name="descricao_compra" class="input" placeholder="Descreva a compra" value="${h((i==null?void 0:i.descricao_compra)||(i==null?void 0:i.descricao)||"")}" required />
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Valor Total (R$)</label>
                                <input id="valor_total" name="valor_total" type="number" step="0.01" min="0" class="input" value="${(i==null?void 0:i.valor_total)||""}" required />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Fornecedor</label>
                                <select id="fornecedorId" name="fornecedorId" class="input">
                                    <option value="">Selecione...</option>
                                    ${t.map(y=>`
                                        <option value="${y.id}" data-name="${y.nome||y.empresa||""}" ${(i==null?void 0:i.fornecedorId)===y.id?"selected":""}>${y.nome||y.empresa||y.id}</option>
                                    `).join("")}
                                </select>
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Data de Emissão</label>
                                <input id="data_emissao" name="data_emissao" type="date" class="input" value="${d(i==null?void 0:i.data_emissao)}" />
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Previsão de Entrega</label>
                                <input id="previsao_entrega" name="previsao_entrega" type="date" class="input" value="${d((i==null?void 0:i.previsao_entrega)||(i==null?void 0:i.data_entrega_prevista))}" />
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Data de Recebimento</label>
                                <input id="data_recebimento" name="data_recebimento" type="date" class="input" value="${d(i==null?void 0:i.data_recebimento)}" />
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Centro de Custo</label>
                                <select id="centroCustoId" name="centroCustoId" class="input">
                                    <option value="">Selecione...</option>
                                    ${e.map(y=>`
                                        <option value="${y.id}" ${(i==null?void 0:i.centroCustoId)===y.id?"selected":""}>${y.nome||y.codigo||y.id}</option>
                                    `).join("")}
                                </select>
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Comprador</label>
                                <select id="compradorId" name="compradorId" class="input">
                                    <option value="">Selecione...</option>
                                    ${s.map(y=>`
                                        <option value="${y.id}" ${(i==null?void 0:i.compradorId)===y.id?"selected":""}>${y.nome||y.email||y.id}</option>
                                    `).join("")}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="card space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Solicitante</label>
                                <input id="solicitante" name="solicitante" class="input" placeholder="Quem solicitou" value="${h((i==null?void 0:i.solicitante)||"")}" />
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Número NF-e</label>
                                <input id="numero_nf" name="numero_nf" class="input" placeholder="Ex: 123456" value="${h((i==null?void 0:i.numero_nf)||"")}" />
                            </div>
                        </div>

                        <div id="justificativa-container" class="${i!=null&&i.justificativa_estouro_orcamento?"":"hidden"}">
                            <label class="text-xs font-display text-text-muted uppercase tracking-wide">Justificativa (estouro de orçamento)</label>
                            <textarea id="justificativa" name="justificativa" class="input h-24" placeholder="Explique o motivo...">${h((i==null?void 0:i.justificativa_estouro_orcamento)||"")}</textarea>
                        </div>
                    </div>

                    <div class="card space-y-3">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-lg font-display text-text">Anexos</h3>
                                <p class="text-sm text-text-muted">Envie NF, CTE ou comprovantes.</p>
                            </div>
                            <input id="file-upload" type="file" class="hidden" multiple />
                        </div>
                        <div id="drop-zone" class="border-2 border-dashed border-border rounded p-6 text-center cursor-pointer hover:border-primary transition-colors">
                            <p class="text-text-muted">Clique ou arraste arquivos para anexar</p>
                        </div>
                        <div id="file-list" class="space-y-2"></div>
                    </div>

                    <div class="flex justify-end gap-2">
                        ${F.createButton({id:"btn-submit",text:r?"Salvar Alterações":"Registrar Solicitação",type:"submit"})}
                        ${F.createButton({id:"btn-cancel",text:"Cancelar",variant:"secondary",onClick:"window.history.back()"})}
                    </div>
                </form>
            </div>
        `}},pi={list:async()=>(await Et(wt(J,"centrosCusto"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await Di(wt(J,"centrosCusto"),n)},update:async(n,t)=>{await sn(Zt(J,"centrosCusto",n),t)}},Rs={list:async()=>(await Et(wt(J,"compradores"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await Di(wt(J,"compradores"),n)},update:async(n,t)=>{await sn(Zt(J,"compradores",n),t)}},Ps={list:async()=>(await Et(wt(J,"fornecedores"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await Di(wt(J,"fornecedores"),n)},update:async(n,t)=>{await sn(Zt(J,"fornecedores",n),t)}},ec={init:async()=>{nt.render(F.createLoader());try{const[n,t,e,s]=await Promise.all([Et(wt(J,"obras")),Ps.list(),pi.list(),Rs.list()]),i=n.docs.map(r=>({id:r.id,...r.data()}));nt.render(Qm.renderForm({obras:i,fornecedores:t,centros:e,compradores:s})),ec.bindEvents()}catch(n){console.error(n),nt.render(`<div class="text-red-500">Erro ao carregar formulário: ${n.message}</div>`)}},initEdit:async n=>{nt.render(F.createLoader());try{const[t,e,s,i,r]=await Promise.all([Et(wt(J,"obras")),Ps.list(),pi.list(),Rs.list(),ir.getCompra(n)]),o=t.docs.map(a=>({id:a.id,...a.data()}));nt.render(Qm.renderForm({obras:o,fornecedores:e,centros:s,compradores:i,compra:r})),ec.bindEvents(n,r,e)}catch(t){console.error(t),nt.render(`<div class="text-red-500">Erro ao carregar compra: ${t.message}</div>`)}},bindEvents:(n=null,t=null,e=[])=>{const s=document.getElementById("form-compra"),i=document.getElementById("file-upload"),r=document.getElementById("drop-zone"),o=document.getElementById("descricao_compra"),a=document.getElementById("obraId"),c=document.getElementById("status_compra"),l=document.getElementById("previsao_entrega"),d=document.getElementById("data_recebimento"),h=document.getElementById("data_emissao"),f=document.getElementById("retirada_estoque"),m=document.getElementById("fornecedorId");let _=[],b=null;r.addEventListener("click",()=>i.click()),i.addEventListener("change",R=>y(R.target.files));const y=R=>{_=[..._,...Array.from(R)],T()},T=()=>{const R=document.getElementById("file-list");R.innerHTML=_.map((D,O)=>`
                <div class="flex items-center justify-between bg-surface border border-border p-2 rounded">
                    <span class="text-sm truncate text-text">${D.name}</span>
                    <button type="button" class="text-alert hover:text-alert/80" onclick="document.getElementById('form-compra').dispatchEvent(new CustomEvent('remove-file', {detail: ${O}}))">
                        ${F.createButton({text:"X",variant:"secondary",className:"px-2 py-0 text-xs"})}
                    </button>
                </div>
            `).join("")};s.addEventListener("remove-file",R=>{_.splice(R.detail,1),T()}),o==null||o.addEventListener("blur",async()=>{const R=a.value,D=o.value;R&&D.length>3&&await ir.checkDuplicidade(R,D)&&F.createToast("Atenção: Já existe um pedido similar para esta obra!","warning")});const I=document.getElementById("valor_total");I==null||I.addEventListener("input",R=>{const D=parseFloat(R.target.value),O=document.getElementById("justificativa-container"),x=document.getElementById("justificativa");D>5e3?(O.classList.remove("hidden"),x.required=!0):(O.classList.add("hidden"),x.required=!1)});const C=R=>{const D=new Date().toISOString().split("T")[0];if(R){if(c&&(c.value="Recebido"),h&&(h.value=D,h.readOnly=!0),m){b||(b=m.value);const O=Array.from(m.options).find(x=>{var w;return(((w=x.dataset)==null?void 0:w.name)||x.textContent||"").toLowerCase().includes("estoque axel")});O&&(m.value=O.value),m.disabled=!0}l&&(l.value=l.value||D,l.readOnly=!0),d&&(d.value=d.value||D,d.readOnly=!0),h&&!h.value&&(h.value=D)}else c&&c.value==="Recebido"&&!t&&(c.value="Pendente"),m&&(m.disabled=!1,b&&(m.value=b)),h&&(h.readOnly=!1),l&&(l.readOnly=!1),d&&(d.readOnly=!1)};if(t){if(s.obraId.value=t.obraId||"",s.prioridade&&(s.prioridade.value=t.prioridade||"Normal"),s.descricao_compra.value=t.descricao_compra||t.descricao||"",s.valor_total.value=t.valor_total||"",s.fornecedorId&&(s.fornecedorId.value=t.fornecedorId||""),s.data_emissao.value=(t.data_emissao||"").split("T")[0]||"",s.previsao_entrega.value=(t.previsao_entrega||"").split("T")[0]||"",s.data_recebimento.value=(t.data_recebimento||"").split("T")[0]||"",s.status_compra.value=t.status_compra||"Pendente",s.centroCustoId&&(s.centroCustoId.value=t.centroCustoId||""),s.natureza_compra&&(s.natureza_compra.value=t.natureza_compra||""),s.compradorId&&(s.compradorId.value=t.compradorId||""),s.numero_nf&&(s.numero_nf.value=t.numero_nf||""),s.status_aprovacao&&(s.status_aprovacao.value=t.status_aprovacao||"Aprovado"),s.nf_conferida&&(s.nf_conferida.checked=!!t.nf_conferida),t.justificativa_estouro_orcamento){const R=document.getElementById("justificativa-container"),D=document.getElementById("justificativa");R.classList.remove("hidden"),D.value=t.justificativa_estouro_orcamento}t.solicitante&&s.solicitante&&(s.solicitante.value=t.solicitante),s.retirada_estoque.checked=t.retirada_estoque===!0||t.retirada_estoque==="on"}f&&(C(f.checked),f.addEventListener("change",R=>C(R.target.checked))),s.addEventListener("submit",async R=>{var O,x,v,w,A;R.preventDefault();const D=document.getElementById("btn-submit");try{D.disabled=!0,D.innerHTML=F.createLoader();const S=[];for(const ot of _){const Yt=await ir.uploadArquivo(ot,`compras/${Date.now()}_${ot.name}`);S.push({nome:ot.name,url:Yt})}const P=new FormData(s),k=Object.fromEntries(P.entries()),tt=ht.parseCurrency(k.valor_total||0),W=(k.justificativa||k.justificativa_estouro_orcamento||"").trim(),Z={...k,descricao_compra:k.descricao_compra,solicitante:k.solicitante||((O=mt.state.currentUser)==null?void 0:O.nome)||((x=mt.state.currentUser)==null?void 0:x.email),anexos:S,valor_total:tt,justificativa_estouro_orcamento:W||null,criado_por:((v=mt.state.currentUser)==null?void 0:v.email)||null};Z.retirada_estoque=s.retirada_estoque.checked,Z.nf_conferida=((w=s.nf_conferida)==null?void 0:w.checked)||!1,Z.nf_conferida&&(Z.nf_conferida_por=((A=mt.state.currentUser)==null?void 0:A.email)||Z.criado_por||null,Z.nf_conferida_em=Z.nf_conferida_em||new Date().toISOString()),Z.status_compra||(Z.status_compra="Pendente"),Z.status_aprovacao||(Z.status_aprovacao="Aprovado"),["data_emissao","previsao_entrega","data_recebimento"].forEach(ot=>{Z[ot]===""&&delete Z[ot]}),n?(await ir.atualizarCompra(n,Z),F.createToast("Compra atualizada com sucesso!")):(await ir.salvarCompra(Z),F.createToast("Compra registrada com sucesso!")),vt.navigate("/compras")}catch(S){console.error(S);const P=(S==null?void 0:S.code)==="JUSTIFICATIVA_NECESSARIA"?"Justificativa é obrigatória quando ultrapassa o orçamento da obra.":"Erro ao registrar: "+S.message;F.createToast(P,"error"),D.disabled=!1,D.innerHTML="<span>Registrar Solicitação</span>"}})}},rr={getCompras:async(n={})=>{let e=(await Et(wt(J,"compras"))).docs.map(I=>({id:I.id,...I.data()}));const{search:s="",status:i="",obra:r="",prioridade:o="",natureza:a="",cc:c="",dateStart:l="",dateEnd:d="",onlyDelayed:h=!1,fornecedor:f="",comprador:m=""}=n,_=s.toLowerCase(),b=l?new Date(l):null,y=d?new Date(d):null,T=new Date;return T.setHours(0,0,0,0),e=e.filter(I=>{if(_&&!(I.descricao_compra||I.descricao||"").toLowerCase().includes(_)||i&&I.status_compra!==i||r&&I.obraId!==r||o&&I.prioridade!==o||a&&(I.natureza_compra||"").trim()!==a||c&&I.centroCustoId!==c||f&&I.fornecedorId!==f||m&&I.compradorId!==m)return!1;const C=I.data_solicitacao?new Date(I.data_solicitacao):null;if(b&&C&&C<b||y&&C&&C>y)return!1;if(h){const R=I.previsao_entrega?new Date(I.previsao_entrega):I.data_entrega_prevista?new Date(I.data_entrega_prevista):null;if(!R||R>=T||I.status_compra==="Entregue"||I.status_compra==="Recebido")return!1}return!0}),e.sort((I,C)=>{const R=I.data_solicitacao||I.data_emissao||"";return(C.data_solicitacao||C.data_emissao||"").localeCompare(R)}),e},updateStatus:async(n,t)=>{const e=Zt(J,"compras",n);await sn(e,{status_compra:t})},updateCompra:async(n,t)=>{const e=Zt(J,"compras",n);await sn(e,t)},deleteCompra:async n=>{const t=Zt(J,"compras",n);await z_(t)}},Ll={renderControls:(n="table",t=[])=>`
            <div class="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 class="text-2xl font-display text-text tracking-wide">Relatório de Compras</h2>
                <div class="flex items-center gap-3">
                    <button id="btn-export-csv" class="btn-secondary text-sm px-4 py-2 font-display uppercase tracking-wide">Exportar CSV</button>
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
                    <div class="flex items-center gap-2">
                        <label class="flex items-center gap-2 text-sm text-text cursor-pointer">
                            <input type="checkbox" id="filter-only-delayed" class="rounded border-border text-primary focus:ring-primary">
                            <span class="font-display uppercase tracking-wide">Apenas Atrasados</span>
                        </label>
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
                                <th class="px-6 py-3 text-right text-xs font-display text-text-muted uppercase tracking-wide">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-border">
                            ${n.map(e=>`
                                <tr class="hover:bg-canvas transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${ht.formatDate(e.data_solicitacao||e.data_emissao)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-display text-text">${t.get(e.obraId)||e.obraId||"-"}</td>
                                    <td class="px-6 py-4 text-sm text-text max-w-xs truncate" title="${e.descricao_compra||e.descricao||""}">${e.descricao_compra||e.descricao||"-"}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${ht.formatCurrency(e.valor_total??e.valor_estimado??0)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        ${ht.renderStatusBadge(e.status_compra,e.previsao_entrega||e.data_entrega_prevista)}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div class="inline-flex items-center justify-end gap-2">
                                            <button class="text-text-muted hover:text-text inline-flex items-center" data-action="view" data-id="${e.id}" title="Ver">${Wt.eye}</button>
                                            <button class="text-primary hover:text-primary-strong inline-flex items-center" data-action="edit" data-id="${e.id}" title="Editar">${Wt.pencil}</button>
                                            <button class="text-alert hover:text-alert/80 inline-flex items-center" data-action="delete" data-id="${e.id}" title="Excluir">${Wt.trash}</button>
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
                ${["Pendente","Em Cotação","Aprovado","Comprado","Entregue"].map(s=>{const i=n.filter(r=>r.status_compra===s);return`
                        <div class="min-w-[300px] w-[300px] flex flex-col bg-surface border border-border rounded p-3 shadow-heavy">
                            <div class="flex justify-between items-center mb-3 px-1">
                                <h3 class="font-display text-text">${s}</h3>
                                <span class="bg-canvas text-text-muted text-xs px-2 py-1 rounded border border-border font-display">${i.length}</span>
                            </div>
                            <div class="flex-1 overflow-y-auto space-y-3 custom-scrollbar" ondragover="event.preventDefault()" ondrop="document.dispatchEvent(new CustomEvent('kanban-drop', {detail: {status: '${s}'}}))">
                                ${i.map(r=>`
                                    <div class="bg-surface p-4 rounded shadow-heavy border border-border cursor-move hover:border-primary transition-colors" draggable="true" data-id="${r.id}">
                                        <div class="flex justify-between items-start mb-2">
                                            <span class="text-xs font-display text-primary bg-canvas px-2 py-0.5 rounded border border-primary">${t.get(r.obraId)||r.obraId}</span>
                                            <span class="text-xs text-text-muted">${ht.formatDate(r.data_solicitacao)}</span>
                                        </div>
                                        <p class="text-sm font-display text-text mb-2 line-clamp-2">${r.descricao_compra||r.descricao||"-"}</p>
                                        <div class="flex justify-between items-center mt-3">
                                            <span class="text-sm font-display text-primary uppercase">${ht.formatCurrency(r.valor_total??r.valor_estimado??0)}</span>
                                            <button class="text-text-muted hover:text-primary" title="Mover Próximo" onclick="document.dispatchEvent(new CustomEvent('kanban-move-next', {detail: {id: '${r.id}', current: '${s}'}}))">
                                                →
                                            </button>
                                        </div>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                    `}).join("")}
            </div>
        `},B={currentView:"table",compras:[],filters:{},obras:[],fornecedores:[],compradores:[],centros:[],obraMap:new Map,fornecedorMap:new Map,compradorMap:new Map,centroMap:new Map,init:async()=>{await B.load(),await B.render()},decorateCompras:()=>{B.obraMap=new Map(B.obras.map(n=>[n.id,n.nome_obra||n.apelido_obra||n.id])),B.fornecedorMap=new Map(B.fornecedores.map(n=>[n.id,n.nome||n.empresa||n.id])),B.compradorMap=new Map(B.compradores.map(n=>[n.id,n.nome||n.email||n.id])),B.centroMap=new Map(B.centros.map(n=>[n.id,n.nome||n.codigo||n.id])),B.compras=B.compras.map(n=>{const t=Number(n.valor_total??n.valor_estimado??0);return{...n,valor_total:t,obraNome:B.obraMap.get(n.obraId)||n.obraId||"-",fornecedorNome:B.fornecedorMap.get(n.fornecedorId)||n.fornecedor||"",compradorNome:B.compradorMap.get(n.compradorId)||n.comprador||"",centroCustoNome:B.centroMap.get(n.centroCustoId)||n.centro_custo||n.centroCustoId||""}})},load:async()=>{const[n,t,e,s,i]=await Promise.all([rr.getCompras(),Ve.getObras(),Ps.list(),Rs.list(),pi.list()]);B.compras=n,B.obras=t,B.fornecedores=e,B.compradores=s,B.centros=i,B.decorateCompras()},render:async()=>{const n=document.createElement("div");n.innerHTML=Ll.renderControls(B.currentView,B.obras);const t=document.createElement("div");t.id="reports-content",t.innerHTML=B.currentView==="table"?Ll.renderTable(B.compras,B.obraMap):Ll.renderKanban(B.compras,B.obraMap),n.appendChild(t),nt.render(n.innerHTML),B.bindEvents()},applyFilters:async()=>{var h,f,m,_,b,y,T,I,C,R,D;const n=((h=document.getElementById("filter-search"))==null?void 0:h.value.toLowerCase())||"",t=((f=document.getElementById("filter-status"))==null?void 0:f.value)||"",e=((m=document.getElementById("filter-obra"))==null?void 0:m.value)||"",s=((_=document.getElementById("filter-prioridade"))==null?void 0:_.value)||"",i=((b=document.getElementById("filter-natureza"))==null?void 0:b.value)||"",r=((y=document.getElementById("filter-cc"))==null?void 0:y.value)||"",o=((T=document.getElementById("filter-fornecedor"))==null?void 0:T.value)||"",a=((I=document.getElementById("filter-comprador"))==null?void 0:I.value)||"",c=((C=document.getElementById("filter-date-start"))==null?void 0:C.value)||"",l=((R=document.getElementById("filter-date-end"))==null?void 0:R.value)||"",d=((D=document.getElementById("filter-only-delayed"))==null?void 0:D.checked)||!1;B.filters={search:n,status:t,obra:e,prioridade:s,natureza:i,cc:r,fornecedor:o,comprador:a,dateStart:c,dateEnd:l,onlyDelayed:d},B.compras=await rr.getCompras(B.filters),B.decorateCompras(),B.render()},bindEvents:()=>{var o,a,c,l,d;const n=(h,f)=>{const m=document.getElementById(h);m&&(m.value=f??"")};n("filter-search",B.filters.search||""),n("filter-status",B.filters.status||""),n("filter-obra",B.filters.obra||""),n("filter-prioridade",B.filters.prioridade||""),n("filter-natureza",B.filters.natureza||""),n("filter-cc",B.filters.cc||""),n("filter-fornecedor",B.filters.fornecedor||""),n("filter-comprador",B.filters.comprador||""),n("filter-date-start",B.filters.dateStart||""),n("filter-date-end",B.filters.dateEnd||"");const t=document.getElementById("filter-only-delayed");t&&(t.checked=!!B.filters.onlyDelayed),(o=document.getElementById("view-table"))==null||o.addEventListener("click",()=>{B.currentView="table",B.render()}),(a=document.getElementById("view-kanban"))==null||a.addEventListener("click",()=>{B.currentView="kanban",B.render()});const e=document.getElementById("filter-natureza"),s=document.getElementById("filter-cc"),i=document.getElementById("filter-fornecedor"),r=document.getElementById("filter-comprador");if(e){const h=Array.from(new Set(B.compras.map(f=>(f.natureza_compra||"Outros").trim())));e.innerHTML='<option value="">Todas Naturezas</option>'+h.map(f=>`<option value="${f}">${f}</option>`).join("")}s&&(s.innerHTML='<option value="">Todos Centros de Custo</option>'+B.centros.map(h=>`<option value="${h.id}">${h.nome||h.codigo||h.id}</option>`).join("")),i&&(i.innerHTML='<option value="">Todos Fornecedores</option>'+B.fornecedores.map(h=>`<option value="${h.id}">${h.nome||h.empresa||h.id}</option>`).join("")),r&&(r.innerHTML='<option value="">Todos Compradores</option>'+B.compradores.map(h=>`<option value="${h.id}">${h.nome||h.id}</option>`).join("")),n("filter-natureza",B.filters.natureza||""),n("filter-cc",B.filters.cc||""),n("filter-fornecedor",B.filters.fornecedor||""),n("filter-comprador",B.filters.comprador||""),(c=document.getElementById("btn-apply-filters"))==null||c.addEventListener("click",()=>{B.applyFilters()}),(l=document.getElementById("btn-clear-filters"))==null||l.addEventListener("click",()=>{document.getElementById("filter-search").value="",document.getElementById("filter-status").value="",document.getElementById("filter-obra").value="",document.getElementById("filter-prioridade").value="",document.getElementById("filter-natureza").value="",document.getElementById("filter-cc").value="";const h=document.getElementById("filter-fornecedor"),f=document.getElementById("filter-comprador");h&&(h.value=""),f&&(f.value=""),document.getElementById("filter-date-start").value="",document.getElementById("filter-date-end").value="",document.getElementById("filter-only-delayed").checked=!1,B.applyFilters()}),(d=document.getElementById("btn-export-csv"))==null||d.addEventListener("click",()=>{try{B.exportCsv()}catch(h){F.createToast("Erro ao exportar: "+h.message,"error")}}),document.querySelectorAll('[data-action="view"]').forEach(h=>{h.addEventListener("click",()=>{const f=h.dataset.id,m=B.compras.find(_=>_.id===f);if(!m)return alert("Compra não encontrada.");B.showModal(m,!1)})}),document.querySelectorAll('[data-action="edit"]').forEach(h=>{h.addEventListener("click",()=>{const f=h.dataset.id,m=B.compras.find(_=>_.id===f);if(!m)return alert("Compra não encontrada.");B.showModal(m,!0)})}),document.querySelectorAll('[data-action="delete"]').forEach(h=>{h.addEventListener("click",async()=>{const f=h.dataset.id;if(confirm("Confirmar exclusão da compra?"))try{await rr.deleteCompra(f),F.createToast("Compra excluída."),await B.load(),B.render()}catch(m){F.createToast("Erro ao excluir: "+m.message,"error")}})}),document.addEventListener("kanban-move-next",async h=>{const{id:f,current:m}=h.detail,_=["Pendente","Em Cotação","Aprovado","Comprado","Entregue"],b=_.indexOf(m)+1;if(b<_.length){const y=_[b];try{await rr.updateStatus(f,y),F.createToast(`Movido para ${y}`),await B.load(),B.render()}catch(T){F.createToast("Erro ao mover: "+T.message,"error")}}})},showModal:(n,t=!1)=>{var o,a,c;const e=document.createElement("div");e.className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4";const s=(l=[],d,h=f=>f.label)=>l.map(f=>{const m=f.value??f.id,_=h(f);return`<option value="${m}" ${d===m?"selected":""}>${_}</option>`}).join(""),i=(l,d)=>`
            <div>
                <label class="text-xs heading-muted uppercase">${l}</label>
                ${d}
            </div>
        `;e.innerHTML=`
            <div class="bg-surface border border-border rounded shadow-heavy w-full max-w-4xl">
                <div class="flex justify-between items-center px-4 py-3 border-b border-border">
                    <h3 class="text-lg font-display text-text">${t?"Editar Compra":"Detalhes da Compra"}</h3>
                    <button id="modal-close" class="text-text-muted hover:text-text">${Wt.close}</button>
                </div>
                <div class="p-4 space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${i("Obra",t?`<select id="modal-obra" class="input">
                                    ${s(B.obras,n.obraId,l=>l.nome_obra||l.apelido_obra||l.id)}
                                </select>`:`<p class="text-text">${n.obraNome||n.obraId||"-"}</p>`)}
                        ${i("Status",t?`<select id="modal-status" class="input">${["Pendente","Em Cotação","Aprovado","Comprado","Entregue","Recebido","Cancelado"].map(l=>`<option value="${l}" ${n.status_compra===l?"selected":""}>${l}</option>`).join("")}</select>`:`<p class="text-text">${n.status_compra||"-"}</p>`)}
                        ${i("Descrição",t?`<input id="modal-desc" class="input" value="${(n.descricao_compra||n.descricao||"").replace(/"/g,"&quot;")}">`:`<p class="text-text">${n.descricao_compra||n.descricao||"-"}</p>`)}
                        ${i("Valor",t?`<input id="modal-valor" type="number" step="0.01" class="input" value="${n.valor_total??n.valor_estimado??0}">`:`<p class="text-text">${ht.formatCurrency(n.valor_total??n.valor_estimado??0)}</p>`)}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${i("Fornecedor",t?`<select id="modal-fornecedor" class="input"><option value="">Selecione...</option>${s(B.fornecedores,n.fornecedorId,l=>l.nome||l.empresa||l.id)}</select>`:`<p class="text-text">${n.fornecedorNome||n.fornecedor||"-"}</p>`)}
                        ${i("Comprador",t?`<select id="modal-comprador" class="input"><option value="">Selecione...</option>${s(B.compradores,n.compradorId,l=>l.nome||l.email||l.id)}</select>`:`<p class="text-text">${n.compradorNome||n.comprador||"-"}</p>`)}
                        ${i("Centro de Custo",t?`<select id="modal-cc" class="input"><option value="">Selecione...</option>${s(B.centros,n.centroCustoId,l=>l.nome||l.codigo||l.id)}</select>`:`<p class="text-text">${n.centroCustoNome||"-"}</p>`)}
                        ${i("Natureza",t?`<input id="modal-natureza" class="input" value="${(n.natureza_compra||"").replace(/"/g,"&quot;")}" />`:`<p class="text-text">${n.natureza_compra||"-"}</p>`)}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        ${i("Data Emissão",t?`<input id="modal-emissao" type="date" class="input" value="${(n.data_emissao||"").split("T")[0]}">`:`<p class="text-text">${ht.formatDate(n.data_emissao)}</p>`)}
                        ${i("Prev. Entrega",t?`<input id="modal-prev" type="date" class="input" value="${(n.previsao_entrega||n.data_entrega_prevista||"").split("T")[0]}">`:`<p class="text-text">${ht.formatDate(n.previsao_entrega||n.data_entrega_prevista)}</p>`)}
                        ${i("Recebimento",t?`<input id="modal-receb" type="date" class="input" value="${(n.data_recebimento||"").split("T")[0]}">`:`<p class="text-text">${ht.formatDate(n.data_recebimento)}</p>`)}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${i("Número NF-e",t?`<input id="modal-nf" class="input" value="${(n.numero_nf||"").replace(/"/g,"&quot;")}">`:`<p class="text-text">${n.numero_nf||"-"}</p>`)}
                        ${i("Status Aprovação",t?`<select id="modal-aprov" class="input">${["Aprovado","Pendente","Reprovado"].map(l=>`<option value="${l}" ${n.status_aprovacao===l?"selected":""}>${l}</option>`).join("")}</select>`:`<p class="text-text">${n.status_aprovacao||"-"}</p>`)}
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
        `,document.body.appendChild(e);const r=()=>e.remove();(o=e.querySelector("#modal-close"))==null||o.addEventListener("click",r),(a=e.querySelector("#modal-close-2"))==null||a.addEventListener("click",r),t&&((c=e.querySelector("#modal-save"))==null||c.addEventListener("click",async()=>{var d,h,f,m,_,b,y,T,I,C,R,D,O,x;const l={obraId:((d=e.querySelector("#modal-obra"))==null?void 0:d.value)||n.obraId,status_compra:((h=e.querySelector("#modal-status"))==null?void 0:h.value)||n.status_compra,descricao_compra:((f=e.querySelector("#modal-desc"))==null?void 0:f.value)||"",valor_total:Number(((m=e.querySelector("#modal-valor"))==null?void 0:m.value)||0),fornecedorId:((_=e.querySelector("#modal-fornecedor"))==null?void 0:_.value)||"",compradorId:((b=e.querySelector("#modal-comprador"))==null?void 0:b.value)||"",centroCustoId:((y=e.querySelector("#modal-cc"))==null?void 0:y.value)||"",natureza_compra:((T=e.querySelector("#modal-natureza"))==null?void 0:T.value)||"",numero_nf:((I=e.querySelector("#modal-nf"))==null?void 0:I.value)||"",status_aprovacao:((C=e.querySelector("#modal-aprov"))==null?void 0:C.value)||n.status_aprovacao,data_emissao:((R=e.querySelector("#modal-emissao"))==null?void 0:R.value)||"",previsao_entrega:((D=e.querySelector("#modal-prev"))==null?void 0:D.value)||"",data_recebimento:((O=e.querySelector("#modal-receb"))==null?void 0:O.value)||"",nf_conferida:((x=e.querySelector("#modal-nf-conferida"))==null?void 0:x.checked)||!1};["data_emissao","previsao_entrega","data_recebimento"].forEach(v=>{l[v]===""&&delete l[v]});try{await rr.updateCompra(n.id,l),r(),await B.load(),B.render(),F.createToast("Compra atualizada.")}catch(v){alert("Erro ao salvar: "+v.message)}}))},exportCsv:()=>{if(!B.compras.length){F.createToast("Sem dados para exportar.","warning");return}const n=new Map(B.obras.map(d=>[d.id,d.nome_obra||d.apelido_obra||d.id])),t=new Map(B.fornecedores.map(d=>[d.id,d.nome||d.empresa||d.id])),e=new Map(B.compradores.map(d=>[d.id,d.nome||d.id])),s=new Map(B.centros.map(d=>[d.id,d.nome||d.codigo||d.id])),i=["Obra","NF-e","Valor","Data Emissao","Status","Data Recebimento","Prev. Entrega","Natureza","Centro Custo","Comprador","Fornecedor","Justificativa Estouro","Status Aprovacao"],r=B.compras.map(d=>[`"${n.get(d.obraId)||d.obraId||""}"`,`"${d.numero_nf||""}"`,String(d.valor_total||d.valor_estimado||0).replace(".",","),d.data_emissao||"",d.status_compra||"",d.data_recebimento||"",d.previsao_entrega||d.data_entrega_prevista||"",d.natureza_compra||"",s.get(d.centroCustoId)||d.centroCustoNome||d.centro_custo||d.centroCustoId||"",e.get(d.compradorId)||d.comprador||"",t.get(d.fornecedorId)||d.fornecedor||"",(d.justificativa_estouro_orcamento||"").replace(/"/g,"'"),d.status_aprovacao||""]);let o="\uFEFF"+i.join(";")+`
`;o+=r.map(d=>d.join(";")).join(`
`);const a=new Blob([o],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(a),l=document.createElement("a");l.href=c,l.download=`compras_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(c)}},Xm={getUsers:async()=>(await Et(wt(J,"usuarios"))).docs.map(t=>({id:t.id,...t.data()})),updateUser:async(n,t)=>{await sn(Zt(J,"usuarios",n),t)},createUserProfile:async(n,t)=>{await AT(Zt(J,"usuarios",n),t)}},TD={render:n=>`
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
        `},ID=n=>(Array.isArray(n)?n:[n]).filter(Boolean),ws={hasRole:(n,t=mt.state.currentUser)=>{const e=ID(n);return!t||!e.length?!1:t.role==="administrador"?!0:e.includes(t.role)},guard:(n,t)=>{if(!ws.hasRole(n)){const e=new Error("Acesso negado para esta ação.");throw e.code="PERMISSION_DENIED",e}return t()},canEditObra:n=>ws.hasRole(["diretor","comprador","obra"],n),canDeleteObra:n=>ws.hasRole(["diretor"],n),canEditCompra:n=>ws.hasRole(["diretor","comprador"],n),canApproveCompra:n=>ws.hasRole(["diretor","financeiro"],n),canEditCadastros:n=>ws.hasRole(["diretor"],n)},Ru={init:async()=>{nt.render(F.createLoader());try{ws.guard(["administrador","diretor"],async()=>{const n=await Xm.getUsers();nt.render(TD.render(n)),Ru.bindEvents()})}catch(n){nt.render(`<div class="text-red-500">Erro: ${n.message}</div>`)}},bindEvents:()=>{document.addEventListener("edit-user",n=>{const t=n.detail,e=prompt("Nova função (comprador, obra, diretor, administrador):");e&&Xm.updateUser(t,{role:e}).then(()=>{F.createToast("Usuário atualizado!"),Ru.init()}).catch(s=>F.createToast("Erro: "+s.message,"error"))})}},Jm={render:(n=[])=>{const t=new Date,e=t.getMonth(),s=t.getFullYear(),i={};n.forEach(h=>{if(h.data_entrega_prevista){const m=new Date(h.data_entrega_prevista).toISOString().split("T")[0];i[m]||(i[m]=[]),i[m].push(h)}});const r=new Date(s,e,1),a=new Date(s,e+1,0).getDate(),c=r.getDay();let d=`
            <div class="card">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-display text-text">Calendário de Entregas - ${["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][e]} ${s}</h3>
                </div>
                
                <div class="grid grid-cols-7 gap-2">
                    ${["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].map(h=>`<div class="text-center text-xs font-display text-text-muted uppercase tracking-wide py-2">${h}</div>`).join("")}
        `;for(let h=0;h<c;h++)d+='<div class="aspect-square"></div>';for(let h=1;h<=a;h++){const f=new Date(s,e,h),m=f.toISOString().split("T")[0],_=i[m]||[],b=h===t.getDate()&&e===t.getMonth(),y=f<t&&!b;d+=`
                <div class="aspect-square border border-border rounded p-1 ${b?"bg-primary/10 border-primary":"bg-surface"} ${y?"opacity-50":""} hover:bg-canvas transition-colors cursor-pointer">
                    <div class="text-xs font-display ${b?"text-primary font-bold":"text-text"}">${h}</div>
                    ${_.length>0?`
                        <div class="mt-1 space-y-1">
                            ${_.slice(0,2).map(T=>{var I;return`
                                <div class="text-[10px] bg-primary/20 border border-primary rounded px-1 truncate" title="${T.descricao}">
                                    ${((I=T.descricao)==null?void 0:I.substring(0,15))||"Compra"}
                                </div>
                            `}).join("")}
                            ${_.length>2?`<div class="text-[9px] text-text-muted">+${_.length-2}</div>`:""}
                        </div>
                    `:""}
                </div>
            `}return d+=`
                </div>
            </div>
        `,d},renderTimeline:(n=[])=>{const t=n.filter(e=>e.data_entrega_prevista&&new Date(e.data_entrega_prevista)>=new Date).sort((e,s)=>new Date(e.data_entrega_prevista)-new Date(s.data_entrega_prevista)).slice(0,10);return`
            <div class="card">
                <h3 class="text-lg font-display text-text mb-4">Próximas Entregas</h3>
                <div class="space-y-3">
                    ${t.length===0?`
                        <p class="text-text-muted text-sm">Nenhuma entrega prevista</p>
                    `:t.map(e=>{const s=new Date(e.data_entrega_prevista),i=Math.ceil((s-new Date)/(1e3*60*60*24)),r=i<=3;return`
                            <div class="flex items-start gap-3 p-3 rounded border ${r?"border-alert bg-alert/5":"border-border bg-surface"} hover:bg-canvas transition-colors">
                                <div class="flex-shrink-0 w-12 text-center">
                                    <div class="text-xs font-display text-text-muted uppercase">${s.toLocaleDateString("pt-BR",{month:"short"})}</div>
                                    <div class="text-2xl font-display ${r?"text-alert":"text-primary"}">${s.getDate()}</div>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-display text-text truncate">${e.descricao}</p>
                                    <p class="text-xs text-text-muted mt-1">
                                        ${e.fornecedor||"Fornecedor não definido"} • ${e.status_compra}
                                    </p>
                                    ${r?`<p class="text-xs text-alert mt-1 font-display uppercase">⚠️ Entrega em ${i} dia(s)</p>`:""}
                                </div>
                            </div>
                        `}).join("")}
                </div>
            </div>
        `}},Vl={renderList:n=>`
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
                                ${t.valor_orcado?`<p class="heading-muted"><span class="text-text">Orçamento:</span> ${ht.formatCurrency(t.valor_orcado)}</p>`:""}
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
        `},renderDashboard:(n,t)=>{var e,s,i,r,o;return`
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
                    ${F.createCard({title:"Total Gasto",content:`<p class="text-4xl font-display text-text uppercase">${ht.formatCurrency(t.totalGasto)}</p><p class="text-sm heading-muted mt-1">Orçamento: ${ht.formatCurrency(n.valor_orcado||0)}</p>`})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${t.atrasos||0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(t.sla||0)<80?"alert":"primary"} uppercase">${(t.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Entregues no prazo</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(t.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia vs Orçamento",content:`<p class="text-4xl font-display text-${(t.economia||0)<0?"alert":"primary"} uppercase">${ht.formatCurrency(t.economia||0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(t.curvaPercent||0).toFixed(1)}%</p>`})}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Gastos por Categoria</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-categorias"></canvas>
                        </div>
                    </div>
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Status das Compras</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-status-obra"></canvas>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="card h-96">
                        <h3 class="text-lg font-display text-text mb-4">Curva S - Planejado vs Realizado</h3>
                        <div class="h-80 relative">
                            <canvas id="chart-curva-s"></canvas>
                        </div>
                    </div>
                    <div class="card h-96">
                        <h3 class="text-lg font-display text-text mb-4">Evolução Mensal dos Gastos</h3>
                        <div class="h-80 relative">
                            <canvas id="chart-gastos-mensais"></canvas>
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
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Por Natureza</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-natureza"></canvas>
                        </div>
                    </div>
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Por Centro de Custo</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-cc"></canvas>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="lg:col-span-2">
                        ${Jm.render(t.comprasRecentes)}
                    </div>
                    <div>
                        ${Jm.renderTimeline(t.comprasRecentes)}
                    </div>
                </div>

                <div class="space-y-6">
                    <h3 class="text-xl font-display text-text tracking-wide">Análise de Mão de Obra (RDO)</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                        ${F.createCard({title:"Total de Horas",content:`<p id="kpi-rdo-total" class="text-4xl font-display text-primary uppercase">${(((e=t.rdoData)==null?void 0:e.totalHoras)||0).toFixed(0)}</p>`,className:"accent-left"})}
                        ${F.createCard({title:"Média Horas/Dia",content:`<p id="kpi-rdo-media-dia" class="text-4xl font-display text-text uppercase">${(((s=t.rdoData)==null?void 0:s.mediaHorasDia)||0).toFixed(1)}</p>`})}
                        ${F.createCard({title:"Total Funcionários",content:`<p id="kpi-rdo-func" class="text-4xl font-display text-text uppercase">${((i=t.rdoData)==null?void 0:i.totalFuncionarios)||0}</p>`})}
                        ${F.createCard({title:"Média Func./Dia",content:`<p id="kpi-rdo-media-func-dia" class="text-4xl font-display text-text uppercase">${(((r=t.rdoData)==null?void 0:r.mediaFuncionariosDia)||0).toFixed(1)}</p>`})}
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div class="card h-80">
                            <h3 class="text-lg font-display text-text mb-4">Horas Trabalhadas por Dia</h3>
                            <div class="h-64 relative">
                                <canvas id="chart-rdo-horas"></canvas>
                            </div>
                        </div>
                        <div class="card h-80">
                            <h3 class="text-lg font-display text-text mb-4">Horas por Função</h3>
                            <div class="h-64 relative">
                                <canvas id="chart-rdo-funcao"></canvas>
                            </div>
                        </div>
                        <div class="card h-80">
                            <h3 class="text-lg font-display text-text mb-4">Funcionários por Dia</h3>
                            <div class="h-64 relative">
                                <canvas id="chart-rdo-funcionarios"></canvas>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <h3 class="text-lg font-display text-text mb-4">Top Técnicos (Horas)</h3>
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-border">
                                <thead class="bg-canvas">
                                    <tr>
                                        <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Técnico</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Horas</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-border">
                                    ${Object.entries(((o=t.rdoData)==null?void 0:o.techHours)||{}).sort((a,c)=>c[1]-a[1]).slice(0,5).map(([a,c])=>`
                                        <tr>
                                            <td class="px-4 py-2 text-sm text-text">${a}</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${c.toFixed(1)}h</td>
                                        </tr>
                                    `).join("")||'<tr><td colspan="2" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>'}
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
                                ${t.comprasRecentes.map(a=>`
                                    <tr class="hover:bg-canvas">
                                        <td class="px-6 py-4 text-sm text-text-muted">${ht.formatDate(a.data_solicitacao||a.data_emissao)}</td>
                                        <td class="px-6 py-4 text-sm text-text" title="${a.descricao_compra||a.descricao||"-"}">${a.descricao_compra||a.descricao||"-"}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${ht.formatCurrency(a.valor_total??a.valor_estimado??0)}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${ht.formatDate(a.previsao_entrega||a.data_entrega_prevista)}</td>
                                        <td class="px-6 py-4 text-sm text-text">${a.compradorNome||a.comprador||a.compradorId||"-"}</td>
                                        <td class="px-6 py-4 text-sm">
                                            ${ht.renderStatusBadge(a.status_compra,a.previsao_entrega||a.data_entrega_prevista)}
                                        </td>
                                        <td class="px-6 py-4 text-sm text-right">
                                            ${a.id?`
                                                <div class="flex items-center justify-end gap-2">
                                                    <button class="text-text-muted hover:text-text" data-action="view-compra" data-id="${a.id}" title="Ver compra">${Wt.eye}</button>
                                                    <button class="text-primary hover:text-primary-strong" data-action="edit-compra" data-id="${a.id}" title="Editar compra">${Wt.pencil}</button>
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
        `}},Gv=6048e5,AD=864e5,mo=6e4,go=36e5,kD=1e3,Zm=Symbol.for("constructDateFrom");function Vt(n,t){return typeof n=="function"?n(t):n&&typeof n=="object"&&Zm in n?n[Zm](t):n instanceof Date?new n.constructor(t):new Date(t)}function X(n,t){return Vt(t||n,n)}function Lc(n,t,e){const s=X(n,e==null?void 0:e.in);return isNaN(t)?Vt((e==null?void 0:e.in)||n,NaN):(t&&s.setDate(s.getDate()+t),s)}function Xd(n,t,e){const s=X(n,e==null?void 0:e.in);if(isNaN(t))return Vt(n,NaN);if(!t)return s;const i=s.getDate(),r=Vt(n,s.getTime());r.setMonth(s.getMonth()+t+1,0);const o=r.getDate();return i>=o?r:(s.setFullYear(r.getFullYear(),r.getMonth(),i),s)}function Jd(n,t,e){return Vt(n,+X(n)+t)}function SD(n,t,e){return Jd(n,t*go)}let RD={};function qs(){return RD}function rn(n,t){var a,c,l,d;const e=qs(),s=(t==null?void 0:t.weekStartsOn)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??e.weekStartsOn??((d=(l=e.locale)==null?void 0:l.options)==null?void 0:d.weekStartsOn)??0,i=X(n,t==null?void 0:t.in),r=i.getDay(),o=(r<s?7:0)+r-s;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function ki(n,t){return rn(n,{...t,weekStartsOn:1})}function Yv(n,t){const e=X(n,t==null?void 0:t.in),s=e.getFullYear(),i=Vt(e,0);i.setFullYear(s+1,0,4),i.setHours(0,0,0,0);const r=ki(i),o=Vt(e,0);o.setFullYear(s,0,4),o.setHours(0,0,0,0);const a=ki(o);return e.getTime()>=r.getTime()?s+1:e.getTime()>=a.getTime()?s:s-1}function nc(n){const t=X(n),e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+n-+e}function Ws(n,...t){const e=Vt.bind(null,t.find(s=>typeof s=="object"));return t.map(e)}function Pu(n,t){const e=X(n,t==null?void 0:t.in);return e.setHours(0,0,0,0),e}function Kv(n,t,e){const[s,i]=Ws(e==null?void 0:e.in,n,t),r=Pu(s),o=Pu(i),a=+r-nc(r),c=+o-nc(o);return Math.round((a-c)/AD)}function PD(n,t){const e=Yv(n,t),s=Vt(n,0);return s.setFullYear(e,0,4),s.setHours(0,0,0,0),ki(s)}function CD(n,t,e){const s=X(n,e==null?void 0:e.in);return s.setTime(s.getTime()+t*mo),s}function DD(n,t,e){return Xd(n,t*3,e)}function OD(n,t,e){return Jd(n,t*1e3)}function MD(n,t,e){return Lc(n,t*7,e)}function ND(n,t,e){return Xd(n,t*12,e)}function Dr(n,t){const e=+X(n)-+X(t);return e<0?-1:e>0?1:e}function LD(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function Qv(n){return!(!LD(n)&&typeof n!="number"||isNaN(+X(n)))}function VD(n,t,e){const[s,i]=Ws(e==null?void 0:e.in,n,t),r=s.getFullYear()-i.getFullYear(),o=s.getMonth()-i.getMonth();return r*12+o}function FD(n,t,e){const[s,i]=Ws(e==null?void 0:e.in,n,t);return s.getFullYear()-i.getFullYear()}function Xv(n,t,e){const[s,i]=Ws(e==null?void 0:e.in,n,t),r=tg(s,i),o=Math.abs(Kv(s,i));s.setDate(s.getDate()-r*o);const a=+(tg(s,i)===-r),c=r*(o-a);return c===0?0:c}function tg(n,t){const e=n.getFullYear()-t.getFullYear()||n.getMonth()-t.getMonth()||n.getDate()-t.getDate()||n.getHours()-t.getHours()||n.getMinutes()-t.getMinutes()||n.getSeconds()-t.getSeconds()||n.getMilliseconds()-t.getMilliseconds();return e<0?-1:e>0?1:e}function _o(n){return t=>{const s=(n?Math[n]:Math.trunc)(t);return s===0?0:s}}function $D(n,t,e){const[s,i]=Ws(e==null?void 0:e.in,n,t),r=(+s-+i)/go;return _o(e==null?void 0:e.roundingMethod)(r)}function Zd(n,t){return+X(n)-+X(t)}function BD(n,t,e){const s=Zd(n,t)/mo;return _o(e==null?void 0:e.roundingMethod)(s)}function Jv(n,t){const e=X(n,t==null?void 0:t.in);return e.setHours(23,59,59,999),e}function Zv(n,t){const e=X(n,t==null?void 0:t.in),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(23,59,59,999),e}function UD(n,t){const e=X(n,t==null?void 0:t.in);return+Jv(e,t)==+Zv(e,t)}function tb(n,t,e){const[s,i,r]=Ws(e==null?void 0:e.in,n,n,t),o=Dr(i,r),a=Math.abs(VD(i,r));if(a<1)return 0;i.getMonth()===1&&i.getDate()>27&&i.setDate(30),i.setMonth(i.getMonth()-o*a);let c=Dr(i,r)===-o;UD(s)&&a===1&&Dr(s,r)===1&&(c=!1);const l=o*(a-+c);return l===0?0:l}function jD(n,t,e){const s=tb(n,t,e)/3;return _o(e==null?void 0:e.roundingMethod)(s)}function zD(n,t,e){const s=Zd(n,t)/1e3;return _o(e==null?void 0:e.roundingMethod)(s)}function HD(n,t,e){const s=Xv(n,t,e)/7;return _o(e==null?void 0:e.roundingMethod)(s)}function qD(n,t,e){const[s,i]=Ws(e==null?void 0:e.in,n,t),r=Dr(s,i),o=Math.abs(FD(s,i));s.setFullYear(1584),i.setFullYear(1584);const a=Dr(s,i)===-r,c=r*(o-+a);return c===0?0:c}function WD(n,t){const e=X(n,t==null?void 0:t.in),s=e.getMonth(),i=s-s%3;return e.setMonth(i,1),e.setHours(0,0,0,0),e}function GD(n,t){const e=X(n,t==null?void 0:t.in);return e.setDate(1),e.setHours(0,0,0,0),e}function YD(n,t){const e=X(n,t==null?void 0:t.in),s=e.getFullYear();return e.setFullYear(s+1,0,0),e.setHours(23,59,59,999),e}function eb(n,t){const e=X(n,t==null?void 0:t.in);return e.setFullYear(e.getFullYear(),0,1),e.setHours(0,0,0,0),e}function KD(n,t){const e=X(n,t==null?void 0:t.in);return e.setMinutes(59,59,999),e}function QD(n,t){var a,c;const e=qs(),s=e.weekStartsOn??((c=(a=e.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??0,i=X(n,t==null?void 0:t.in),r=i.getDay(),o=(r<s?-7:0)+6-(r-s);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}function XD(n,t){const e=X(n,t==null?void 0:t.in);return e.setSeconds(59,999),e}function JD(n,t){const e=X(n,t==null?void 0:t.in),s=e.getMonth(),i=s-s%3+3;return e.setMonth(i,0),e.setHours(23,59,59,999),e}function ZD(n,t){const e=X(n,t==null?void 0:t.in);return e.setMilliseconds(999),e}const t2={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},e2=(n,t,e)=>{let s;const i=t2[n];return typeof i=="string"?s=i:t===1?s=i.one:s=i.other.replace("{{count}}",t.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+s:s+" ago":s};function Fl(n){return(t={})=>{const e=t.width?String(t.width):n.defaultWidth;return n.formats[e]||n.formats[n.defaultWidth]}}const n2={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},s2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},i2={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},r2={date:Fl({formats:n2,defaultWidth:"full"}),time:Fl({formats:s2,defaultWidth:"full"}),dateTime:Fl({formats:i2,defaultWidth:"full"})},o2={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},a2=(n,t,e,s)=>o2[n];function or(n){return(t,e)=>{const s=e!=null&&e.context?String(e.context):"standalone";let i;if(s==="formatting"&&n.formattingValues){const o=n.defaultFormattingWidth||n.defaultWidth,a=e!=null&&e.width?String(e.width):o;i=n.formattingValues[a]||n.formattingValues[o]}else{const o=n.defaultWidth,a=e!=null&&e.width?String(e.width):n.defaultWidth;i=n.values[a]||n.values[o]}const r=n.argumentCallback?n.argumentCallback(t):t;return i[r]}}const c2={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},l2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},u2={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},d2={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},h2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},f2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},p2=(n,t)=>{const e=Number(n),s=e%100;if(s>20||s<10)switch(s%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},m2={ordinalNumber:p2,era:or({values:c2,defaultWidth:"wide"}),quarter:or({values:l2,defaultWidth:"wide",argumentCallback:n=>n-1}),month:or({values:u2,defaultWidth:"wide"}),day:or({values:d2,defaultWidth:"wide"}),dayPeriod:or({values:h2,defaultWidth:"wide",formattingValues:f2,defaultFormattingWidth:"wide"})};function ar(n){return(t,e={})=>{const s=e.width,i=s&&n.matchPatterns[s]||n.matchPatterns[n.defaultMatchWidth],r=t.match(i);if(!r)return null;const o=r[0],a=s&&n.parsePatterns[s]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(a)?_2(a,h=>h.test(o)):g2(a,h=>h.test(o));let l;l=n.valueCallback?n.valueCallback(c):c,l=e.valueCallback?e.valueCallback(l):l;const d=t.slice(o.length);return{value:l,rest:d}}}function g2(n,t){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&t(n[e]))return e}function _2(n,t){for(let e=0;e<n.length;e++)if(t(n[e]))return e}function y2(n){return(t,e={})=>{const s=t.match(n.matchPattern);if(!s)return null;const i=s[0],r=t.match(n.parsePattern);if(!r)return null;let o=n.valueCallback?n.valueCallback(r[0]):r[0];o=e.valueCallback?e.valueCallback(o):o;const a=t.slice(i.length);return{value:o,rest:a}}}const v2=/^(\d+)(th|st|nd|rd)?/i,b2=/\d+/i,w2={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},x2={any:[/^b/i,/^(a|c)/i]},E2={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},T2={any:[/1/i,/2/i,/3/i,/4/i]},I2={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},A2={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},k2={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},S2={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},R2={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},P2={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},C2={ordinalNumber:y2({matchPattern:v2,parsePattern:b2,valueCallback:n=>parseInt(n,10)}),era:ar({matchPatterns:w2,defaultMatchWidth:"wide",parsePatterns:x2,defaultParseWidth:"any"}),quarter:ar({matchPatterns:E2,defaultMatchWidth:"wide",parsePatterns:T2,defaultParseWidth:"any",valueCallback:n=>n+1}),month:ar({matchPatterns:I2,defaultMatchWidth:"wide",parsePatterns:A2,defaultParseWidth:"any"}),day:ar({matchPatterns:k2,defaultMatchWidth:"wide",parsePatterns:S2,defaultParseWidth:"any"}),dayPeriod:ar({matchPatterns:R2,defaultMatchWidth:"any",parsePatterns:P2,defaultParseWidth:"any"})},nb={code:"en-US",formatDistance:e2,formatLong:r2,formatRelative:a2,localize:m2,match:C2,options:{weekStartsOn:0,firstWeekContainsDate:1}};function D2(n,t){const e=X(n,t==null?void 0:t.in);return Kv(e,eb(e))+1}function sb(n,t){const e=X(n,t==null?void 0:t.in),s=+ki(e)-+PD(e);return Math.round(s/Gv)+1}function th(n,t){var d,h,f,m;const e=X(n,t==null?void 0:t.in),s=e.getFullYear(),i=qs(),r=(t==null?void 0:t.firstWeekContainsDate)??((h=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??i.firstWeekContainsDate??((m=(f=i.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=Vt((t==null?void 0:t.in)||n,0);o.setFullYear(s+1,0,r),o.setHours(0,0,0,0);const a=rn(o,t),c=Vt((t==null?void 0:t.in)||n,0);c.setFullYear(s,0,r),c.setHours(0,0,0,0);const l=rn(c,t);return+e>=+a?s+1:+e>=+l?s:s-1}function O2(n,t){var a,c,l,d;const e=qs(),s=(t==null?void 0:t.firstWeekContainsDate)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.firstWeekContainsDate)??e.firstWeekContainsDate??((d=(l=e.locale)==null?void 0:l.options)==null?void 0:d.firstWeekContainsDate)??1,i=th(n,t),r=Vt((t==null?void 0:t.in)||n,0);return r.setFullYear(i,0,s),r.setHours(0,0,0,0),rn(r,t)}function ib(n,t){const e=X(n,t==null?void 0:t.in),s=+rn(e,t)-+O2(e,t);return Math.round(s/Gv)+1}function ft(n,t){const e=n<0?"-":"",s=Math.abs(n).toString().padStart(t,"0");return e+s}const Nn={y(n,t){const e=n.getFullYear(),s=e>0?e:1-e;return ft(t==="yy"?s%100:s,t.length)},M(n,t){const e=n.getMonth();return t==="M"?String(e+1):ft(e+1,2)},d(n,t){return ft(n.getDate(),t.length)},a(n,t){const e=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h(n,t){return ft(n.getHours()%12||12,t.length)},H(n,t){return ft(n.getHours(),t.length)},m(n,t){return ft(n.getMinutes(),t.length)},s(n,t){return ft(n.getSeconds(),t.length)},S(n,t){const e=t.length,s=n.getMilliseconds(),i=Math.trunc(s*Math.pow(10,e-3));return ft(i,t.length)}},ni={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},eg={G:function(n,t,e){const s=n.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(s,{width:"abbreviated"});case"GGGGG":return e.era(s,{width:"narrow"});case"GGGG":default:return e.era(s,{width:"wide"})}},y:function(n,t,e){if(t==="yo"){const s=n.getFullYear(),i=s>0?s:1-s;return e.ordinalNumber(i,{unit:"year"})}return Nn.y(n,t)},Y:function(n,t,e,s){const i=th(n,s),r=i>0?i:1-i;if(t==="YY"){const o=r%100;return ft(o,2)}return t==="Yo"?e.ordinalNumber(r,{unit:"year"}):ft(r,t.length)},R:function(n,t){const e=Yv(n);return ft(e,t.length)},u:function(n,t){const e=n.getFullYear();return ft(e,t.length)},Q:function(n,t,e){const s=Math.ceil((n.getMonth()+1)/3);switch(t){case"Q":return String(s);case"QQ":return ft(s,2);case"Qo":return e.ordinalNumber(s,{unit:"quarter"});case"QQQ":return e.quarter(s,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(s,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(s,{width:"wide",context:"formatting"})}},q:function(n,t,e){const s=Math.ceil((n.getMonth()+1)/3);switch(t){case"q":return String(s);case"qq":return ft(s,2);case"qo":return e.ordinalNumber(s,{unit:"quarter"});case"qqq":return e.quarter(s,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(s,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(s,{width:"wide",context:"standalone"})}},M:function(n,t,e){const s=n.getMonth();switch(t){case"M":case"MM":return Nn.M(n,t);case"Mo":return e.ordinalNumber(s+1,{unit:"month"});case"MMM":return e.month(s,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(s,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(s,{width:"wide",context:"formatting"})}},L:function(n,t,e){const s=n.getMonth();switch(t){case"L":return String(s+1);case"LL":return ft(s+1,2);case"Lo":return e.ordinalNumber(s+1,{unit:"month"});case"LLL":return e.month(s,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(s,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(s,{width:"wide",context:"standalone"})}},w:function(n,t,e,s){const i=ib(n,s);return t==="wo"?e.ordinalNumber(i,{unit:"week"}):ft(i,t.length)},I:function(n,t,e){const s=sb(n);return t==="Io"?e.ordinalNumber(s,{unit:"week"}):ft(s,t.length)},d:function(n,t,e){return t==="do"?e.ordinalNumber(n.getDate(),{unit:"date"}):Nn.d(n,t)},D:function(n,t,e){const s=D2(n);return t==="Do"?e.ordinalNumber(s,{unit:"dayOfYear"}):ft(s,t.length)},E:function(n,t,e){const s=n.getDay();switch(t){case"E":case"EE":case"EEE":return e.day(s,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(s,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(s,{width:"short",context:"formatting"});case"EEEE":default:return e.day(s,{width:"wide",context:"formatting"})}},e:function(n,t,e,s){const i=n.getDay(),r=(i-s.weekStartsOn+8)%7||7;switch(t){case"e":return String(r);case"ee":return ft(r,2);case"eo":return e.ordinalNumber(r,{unit:"day"});case"eee":return e.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(i,{width:"short",context:"formatting"});case"eeee":default:return e.day(i,{width:"wide",context:"formatting"})}},c:function(n,t,e,s){const i=n.getDay(),r=(i-s.weekStartsOn+8)%7||7;switch(t){case"c":return String(r);case"cc":return ft(r,t.length);case"co":return e.ordinalNumber(r,{unit:"day"});case"ccc":return e.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(i,{width:"narrow",context:"standalone"});case"cccccc":return e.day(i,{width:"short",context:"standalone"});case"cccc":default:return e.day(i,{width:"wide",context:"standalone"})}},i:function(n,t,e){const s=n.getDay(),i=s===0?7:s;switch(t){case"i":return String(i);case"ii":return ft(i,t.length);case"io":return e.ordinalNumber(i,{unit:"day"});case"iii":return e.day(s,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(s,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(s,{width:"short",context:"formatting"});case"iiii":default:return e.day(s,{width:"wide",context:"formatting"})}},a:function(n,t,e){const i=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(n,t,e){const s=n.getHours();let i;switch(s===12?i=ni.noon:s===0?i=ni.midnight:i=s/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(n,t,e){const s=n.getHours();let i;switch(s>=17?i=ni.evening:s>=12?i=ni.afternoon:s>=4?i=ni.morning:i=ni.night,t){case"B":case"BB":case"BBB":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(n,t,e){if(t==="ho"){let s=n.getHours()%12;return s===0&&(s=12),e.ordinalNumber(s,{unit:"hour"})}return Nn.h(n,t)},H:function(n,t,e){return t==="Ho"?e.ordinalNumber(n.getHours(),{unit:"hour"}):Nn.H(n,t)},K:function(n,t,e){const s=n.getHours()%12;return t==="Ko"?e.ordinalNumber(s,{unit:"hour"}):ft(s,t.length)},k:function(n,t,e){let s=n.getHours();return s===0&&(s=24),t==="ko"?e.ordinalNumber(s,{unit:"hour"}):ft(s,t.length)},m:function(n,t,e){return t==="mo"?e.ordinalNumber(n.getMinutes(),{unit:"minute"}):Nn.m(n,t)},s:function(n,t,e){return t==="so"?e.ordinalNumber(n.getSeconds(),{unit:"second"}):Nn.s(n,t)},S:function(n,t){return Nn.S(n,t)},X:function(n,t,e){const s=n.getTimezoneOffset();if(s===0)return"Z";switch(t){case"X":return sg(s);case"XXXX":case"XX":return xs(s);case"XXXXX":case"XXX":default:return xs(s,":")}},x:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"x":return sg(s);case"xxxx":case"xx":return xs(s);case"xxxxx":case"xxx":default:return xs(s,":")}},O:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ng(s,":");case"OOOO":default:return"GMT"+xs(s,":")}},z:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ng(s,":");case"zzzz":default:return"GMT"+xs(s,":")}},t:function(n,t,e){const s=Math.trunc(+n/1e3);return ft(s,t.length)},T:function(n,t,e){return ft(+n,t.length)}};function ng(n,t=""){const e=n>0?"-":"+",s=Math.abs(n),i=Math.trunc(s/60),r=s%60;return r===0?e+String(i):e+String(i)+t+ft(r,2)}function sg(n,t){return n%60===0?(n>0?"-":"+")+ft(Math.abs(n)/60,2):xs(n,t)}function xs(n,t=""){const e=n>0?"-":"+",s=Math.abs(n),i=ft(Math.trunc(s/60),2),r=ft(s%60,2);return e+i+t+r}const ig=(n,t)=>{switch(n){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},rb=(n,t)=>{switch(n){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},M2=(n,t)=>{const e=n.match(/(P+)(p+)?/)||[],s=e[1],i=e[2];if(!i)return ig(n,t);let r;switch(s){case"P":r=t.dateTime({width:"short"});break;case"PP":r=t.dateTime({width:"medium"});break;case"PPP":r=t.dateTime({width:"long"});break;case"PPPP":default:r=t.dateTime({width:"full"});break}return r.replace("{{date}}",ig(s,t)).replace("{{time}}",rb(i,t))},Cu={p:rb,P:M2},N2=/^D+$/,L2=/^Y+$/,V2=["D","DD","YY","YYYY"];function ob(n){return N2.test(n)}function ab(n){return L2.test(n)}function Du(n,t,e){const s=F2(n,t,e);if(console.warn(s),V2.includes(n))throw new RangeError(s)}function F2(n,t,e){const s=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${s} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const $2=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,B2=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,U2=/^'([^]*?)'?$/,j2=/''/g,z2=/[a-zA-Z]/;function H2(n,t,e){var d,h,f,m,_,b,y,T;const s=qs(),i=(e==null?void 0:e.locale)??s.locale??nb,r=(e==null?void 0:e.firstWeekContainsDate)??((h=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??s.firstWeekContainsDate??((m=(f=s.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=(e==null?void 0:e.weekStartsOn)??((b=(_=e==null?void 0:e.locale)==null?void 0:_.options)==null?void 0:b.weekStartsOn)??s.weekStartsOn??((T=(y=s.locale)==null?void 0:y.options)==null?void 0:T.weekStartsOn)??0,a=X(n,e==null?void 0:e.in);if(!Qv(a))throw new RangeError("Invalid time value");let c=t.match(B2).map(I=>{const C=I[0];if(C==="p"||C==="P"){const R=Cu[C];return R(I,i.formatLong)}return I}).join("").match($2).map(I=>{if(I==="''")return{isToken:!1,value:"'"};const C=I[0];if(C==="'")return{isToken:!1,value:q2(I)};if(eg[C])return{isToken:!0,value:I};if(C.match(z2))throw new RangeError("Format string contains an unescaped latin alphabet character `"+C+"`");return{isToken:!1,value:I}});i.localize.preprocessor&&(c=i.localize.preprocessor(a,c));const l={firstWeekContainsDate:r,weekStartsOn:o,locale:i};return c.map(I=>{if(!I.isToken)return I.value;const C=I.value;(!(e!=null&&e.useAdditionalWeekYearTokens)&&ab(C)||!(e!=null&&e.useAdditionalDayOfYearTokens)&&ob(C))&&Du(C,t,String(n));const R=eg[C[0]];return R(a,C,i.localize,l)}).join("")}function q2(n){const t=n.match(U2);return t?t[1].replace(j2,"'"):n}function W2(){return Object.assign({},qs())}function G2(n,t){const e=X(n,t==null?void 0:t.in).getDay();return e===0?7:e}function Y2(n,t){const e=K2(t)?new t(0):Vt(t,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function K2(n){var t;return typeof n=="function"&&((t=n.prototype)==null?void 0:t.constructor)===n}const Q2=10;class cb{constructor(){N(this,"subPriority",0)}validate(t,e){return!0}}class X2 extends cb{constructor(t,e,s,i,r){super(),this.value=t,this.validateValue=e,this.setValue=s,this.priority=i,r&&(this.subPriority=r)}validate(t,e){return this.validateValue(t,this.value,e)}set(t,e,s){return this.setValue(t,e,this.value,s)}}class J2 extends cb{constructor(e,s){super();N(this,"priority",Q2);N(this,"subPriority",-1);this.context=e||(i=>Vt(s,i))}set(e,s){return s.timestampIsSet?e:Vt(e,Y2(e,this.context))}}class dt{run(t,e,s,i){const r=this.parse(t,e,s,i);return r?{setter:new X2(r.value,this.validate,this.set,this.priority,this.subPriority),rest:r.rest}:null}validate(t,e,s){return!0}}class Z2 extends dt{constructor(){super(...arguments);N(this,"priority",140);N(this,"incompatibleTokens",["R","u","t","T"])}parse(e,s,i){switch(s){case"G":case"GG":case"GGG":return i.era(e,{width:"abbreviated"})||i.era(e,{width:"narrow"});case"GGGGG":return i.era(e,{width:"narrow"});case"GGGG":default:return i.era(e,{width:"wide"})||i.era(e,{width:"abbreviated"})||i.era(e,{width:"narrow"})}}set(e,s,i){return s.era=i,e.setFullYear(i,0,1),e.setHours(0,0,0,0),e}}const jt={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Ge={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function zt(n,t){return n&&{value:t(n.value),rest:n.rest}}function Rt(n,t){const e=t.match(n);return e?{value:parseInt(e[0],10),rest:t.slice(e[0].length)}:null}function Ye(n,t){const e=t.match(n);if(!e)return null;if(e[0]==="Z")return{value:0,rest:t.slice(1)};const s=e[1]==="+"?1:-1,i=e[2]?parseInt(e[2],10):0,r=e[3]?parseInt(e[3],10):0,o=e[5]?parseInt(e[5],10):0;return{value:s*(i*go+r*mo+o*kD),rest:t.slice(e[0].length)}}function lb(n){return Rt(jt.anyDigitsSigned,n)}function Ft(n,t){switch(n){case 1:return Rt(jt.singleDigit,t);case 2:return Rt(jt.twoDigits,t);case 3:return Rt(jt.threeDigits,t);case 4:return Rt(jt.fourDigits,t);default:return Rt(new RegExp("^\\d{1,"+n+"}"),t)}}function sc(n,t){switch(n){case 1:return Rt(jt.singleDigitSigned,t);case 2:return Rt(jt.twoDigitsSigned,t);case 3:return Rt(jt.threeDigitsSigned,t);case 4:return Rt(jt.fourDigitsSigned,t);default:return Rt(new RegExp("^-?\\d{1,"+n+"}"),t)}}function eh(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function ub(n,t){const e=t>0,s=e?t:1-t;let i;if(s<=50)i=n||100;else{const r=s+50,o=Math.trunc(r/100)*100,a=n>=r%100;i=n+o-(a?100:0)}return e?i:1-i}function db(n){return n%400===0||n%4===0&&n%100!==0}class tO extends dt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(e,s,i){const r=o=>({year:o,isTwoDigitYear:s==="yy"});switch(s){case"y":return zt(Ft(4,e),r);case"yo":return zt(i.ordinalNumber(e,{unit:"year"}),r);default:return zt(Ft(s.length,e),r)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,i){const r=e.getFullYear();if(i.isTwoDigitYear){const a=ub(i.year,r);return e.setFullYear(a,0,1),e.setHours(0,0,0,0),e}const o=!("era"in s)||s.era===1?i.year:1-i.year;return e.setFullYear(o,0,1),e.setHours(0,0,0,0),e}}class eO extends dt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(e,s,i){const r=o=>({year:o,isTwoDigitYear:s==="YY"});switch(s){case"Y":return zt(Ft(4,e),r);case"Yo":return zt(i.ordinalNumber(e,{unit:"year"}),r);default:return zt(Ft(s.length,e),r)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,i,r){const o=th(e,r);if(i.isTwoDigitYear){const c=ub(i.year,o);return e.setFullYear(c,0,r.firstWeekContainsDate),e.setHours(0,0,0,0),rn(e,r)}const a=!("era"in s)||s.era===1?i.year:1-i.year;return e.setFullYear(a,0,r.firstWeekContainsDate),e.setHours(0,0,0,0),rn(e,r)}}class nO extends dt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(e,s){return sc(s==="R"?4:s.length,e)}set(e,s,i){const r=Vt(e,0);return r.setFullYear(i,0,4),r.setHours(0,0,0,0),ki(r)}}class sO extends dt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(e,s){return sc(s==="u"?4:s.length,e)}set(e,s,i){return e.setFullYear(i,0,1),e.setHours(0,0,0,0),e}}class iO extends dt{constructor(){super(...arguments);N(this,"priority",120);N(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,i){switch(s){case"Q":case"QQ":return Ft(s.length,e);case"Qo":return i.ordinalNumber(e,{unit:"quarter"});case"QQQ":return i.quarter(e,{width:"abbreviated",context:"formatting"})||i.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return i.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return i.quarter(e,{width:"wide",context:"formatting"})||i.quarter(e,{width:"abbreviated",context:"formatting"})||i.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=1&&s<=4}set(e,s,i){return e.setMonth((i-1)*3,1),e.setHours(0,0,0,0),e}}class rO extends dt{constructor(){super(...arguments);N(this,"priority",120);N(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,i){switch(s){case"q":case"qq":return Ft(s.length,e);case"qo":return i.ordinalNumber(e,{unit:"quarter"});case"qqq":return i.quarter(e,{width:"abbreviated",context:"standalone"})||i.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return i.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return i.quarter(e,{width:"wide",context:"standalone"})||i.quarter(e,{width:"abbreviated",context:"standalone"})||i.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=1&&s<=4}set(e,s,i){return e.setMonth((i-1)*3,1),e.setHours(0,0,0,0),e}}class oO extends dt{constructor(){super(...arguments);N(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);N(this,"priority",110)}parse(e,s,i){const r=o=>o-1;switch(s){case"M":return zt(Rt(jt.month,e),r);case"MM":return zt(Ft(2,e),r);case"Mo":return zt(i.ordinalNumber(e,{unit:"month"}),r);case"MMM":return i.month(e,{width:"abbreviated",context:"formatting"})||i.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return i.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return i.month(e,{width:"wide",context:"formatting"})||i.month(e,{width:"abbreviated",context:"formatting"})||i.month(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=11}set(e,s,i){return e.setMonth(i,1),e.setHours(0,0,0,0),e}}class aO extends dt{constructor(){super(...arguments);N(this,"priority",110);N(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(e,s,i){const r=o=>o-1;switch(s){case"L":return zt(Rt(jt.month,e),r);case"LL":return zt(Ft(2,e),r);case"Lo":return zt(i.ordinalNumber(e,{unit:"month"}),r);case"LLL":return i.month(e,{width:"abbreviated",context:"standalone"})||i.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return i.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return i.month(e,{width:"wide",context:"standalone"})||i.month(e,{width:"abbreviated",context:"standalone"})||i.month(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=11}set(e,s,i){return e.setMonth(i,1),e.setHours(0,0,0,0),e}}function cO(n,t,e){const s=X(n,e==null?void 0:e.in),i=ib(s,e)-t;return s.setDate(s.getDate()-i*7),X(s,e==null?void 0:e.in)}class lO extends dt{constructor(){super(...arguments);N(this,"priority",100);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(e,s,i){switch(s){case"w":return Rt(jt.week,e);case"wo":return i.ordinalNumber(e,{unit:"week"});default:return Ft(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,i,r){return rn(cO(e,i,r),r)}}function uO(n,t,e){const s=X(n,e==null?void 0:e.in),i=sb(s,e)-t;return s.setDate(s.getDate()-i*7),s}class dO extends dt{constructor(){super(...arguments);N(this,"priority",100);N(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(e,s,i){switch(s){case"I":return Rt(jt.week,e);case"Io":return i.ordinalNumber(e,{unit:"week"});default:return Ft(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,i){return ki(uO(e,i))}}const hO=[31,28,31,30,31,30,31,31,30,31,30,31],fO=[31,29,31,30,31,30,31,31,30,31,30,31];class pO extends dt{constructor(){super(...arguments);N(this,"priority",90);N(this,"subPriority",1);N(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(e,s,i){switch(s){case"d":return Rt(jt.date,e);case"do":return i.ordinalNumber(e,{unit:"date"});default:return Ft(s.length,e)}}validate(e,s){const i=e.getFullYear(),r=db(i),o=e.getMonth();return r?s>=1&&s<=fO[o]:s>=1&&s<=hO[o]}set(e,s,i){return e.setDate(i),e.setHours(0,0,0,0),e}}class mO extends dt{constructor(){super(...arguments);N(this,"priority",90);N(this,"subpriority",1);N(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(e,s,i){switch(s){case"D":case"DD":return Rt(jt.dayOfYear,e);case"Do":return i.ordinalNumber(e,{unit:"date"});default:return Ft(s.length,e)}}validate(e,s){const i=e.getFullYear();return db(i)?s>=1&&s<=366:s>=1&&s<=365}set(e,s,i){return e.setMonth(0,i),e.setHours(0,0,0,0),e}}function nh(n,t,e){var h,f,m,_;const s=qs(),i=(e==null?void 0:e.weekStartsOn)??((f=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:f.weekStartsOn)??s.weekStartsOn??((_=(m=s.locale)==null?void 0:m.options)==null?void 0:_.weekStartsOn)??0,r=X(n,e==null?void 0:e.in),o=r.getDay(),c=(t%7+7)%7,l=7-i,d=t<0||t>6?t-(o+l)%7:(c+l)%7-(o+l)%7;return Lc(r,d,e)}class gO extends dt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(e,s,i){switch(s){case"E":case"EE":case"EEE":return i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return i.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,i,r){return e=nh(e,i,r),e.setHours(0,0,0,0),e}}class _O extends dt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(e,s,i,r){const o=a=>{const c=Math.floor((a-1)/7)*7;return(a+r.weekStartsOn+6)%7+c};switch(s){case"e":case"ee":return zt(Ft(s.length,e),o);case"eo":return zt(i.ordinalNumber(e,{unit:"day"}),o);case"eee":return i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"eeeee":return i.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,i,r){return e=nh(e,i,r),e.setHours(0,0,0,0),e}}class yO extends dt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(e,s,i,r){const o=a=>{const c=Math.floor((a-1)/7)*7;return(a+r.weekStartsOn+6)%7+c};switch(s){case"c":case"cc":return zt(Ft(s.length,e),o);case"co":return zt(i.ordinalNumber(e,{unit:"day"}),o);case"ccc":return i.day(e,{width:"abbreviated",context:"standalone"})||i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"});case"ccccc":return i.day(e,{width:"narrow",context:"standalone"});case"cccccc":return i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return i.day(e,{width:"wide",context:"standalone"})||i.day(e,{width:"abbreviated",context:"standalone"})||i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=6}set(e,s,i,r){return e=nh(e,i,r),e.setHours(0,0,0,0),e}}function vO(n,t,e){const s=X(n,e==null?void 0:e.in),i=G2(s,e),r=t-i;return Lc(s,r,e)}class bO extends dt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(e,s,i){const r=o=>o===0?7:o;switch(s){case"i":case"ii":return Ft(s.length,e);case"io":return i.ordinalNumber(e,{unit:"day"});case"iii":return zt(i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),r);case"iiiii":return zt(i.day(e,{width:"narrow",context:"formatting"}),r);case"iiiiii":return zt(i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),r);case"iiii":default:return zt(i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),r)}}validate(e,s){return s>=1&&s<=7}set(e,s,i){return e=vO(e,i),e.setHours(0,0,0,0),e}}class wO extends dt{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(e,s,i){switch(s){case"a":case"aa":case"aaa":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,i){return e.setHours(eh(i),0,0,0),e}}class xO extends dt{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(e,s,i){switch(s){case"b":case"bb":case"bbb":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,i){return e.setHours(eh(i),0,0,0),e}}class EO extends dt{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["a","b","t","T"])}parse(e,s,i){switch(s){case"B":case"BB":case"BBB":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,i){return e.setHours(eh(i),0,0,0),e}}class TO extends dt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["H","K","k","t","T"])}parse(e,s,i){switch(s){case"h":return Rt(jt.hour12h,e);case"ho":return i.ordinalNumber(e,{unit:"hour"});default:return Ft(s.length,e)}}validate(e,s){return s>=1&&s<=12}set(e,s,i){const r=e.getHours()>=12;return r&&i<12?e.setHours(i+12,0,0,0):!r&&i===12?e.setHours(0,0,0,0):e.setHours(i,0,0,0),e}}class IO extends dt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(e,s,i){switch(s){case"H":return Rt(jt.hour23h,e);case"Ho":return i.ordinalNumber(e,{unit:"hour"});default:return Ft(s.length,e)}}validate(e,s){return s>=0&&s<=23}set(e,s,i){return e.setHours(i,0,0,0),e}}class AO extends dt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["h","H","k","t","T"])}parse(e,s,i){switch(s){case"K":return Rt(jt.hour11h,e);case"Ko":return i.ordinalNumber(e,{unit:"hour"});default:return Ft(s.length,e)}}validate(e,s){return s>=0&&s<=11}set(e,s,i){return e.getHours()>=12&&i<12?e.setHours(i+12,0,0,0):e.setHours(i,0,0,0),e}}class kO extends dt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(e,s,i){switch(s){case"k":return Rt(jt.hour24h,e);case"ko":return i.ordinalNumber(e,{unit:"hour"});default:return Ft(s.length,e)}}validate(e,s){return s>=1&&s<=24}set(e,s,i){const r=i<=24?i%24:i;return e.setHours(r,0,0,0),e}}class SO extends dt{constructor(){super(...arguments);N(this,"priority",60);N(this,"incompatibleTokens",["t","T"])}parse(e,s,i){switch(s){case"m":return Rt(jt.minute,e);case"mo":return i.ordinalNumber(e,{unit:"minute"});default:return Ft(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,i){return e.setMinutes(i,0,0),e}}class RO extends dt{constructor(){super(...arguments);N(this,"priority",50);N(this,"incompatibleTokens",["t","T"])}parse(e,s,i){switch(s){case"s":return Rt(jt.second,e);case"so":return i.ordinalNumber(e,{unit:"second"});default:return Ft(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,i){return e.setSeconds(i,0),e}}class PO extends dt{constructor(){super(...arguments);N(this,"priority",30);N(this,"incompatibleTokens",["t","T"])}parse(e,s){const i=r=>Math.trunc(r*Math.pow(10,-s.length+3));return zt(Ft(s.length,e),i)}set(e,s,i){return e.setMilliseconds(i),e}}class CO extends dt{constructor(){super(...arguments);N(this,"priority",10);N(this,"incompatibleTokens",["t","T","x"])}parse(e,s){switch(s){case"X":return Ye(Ge.basicOptionalMinutes,e);case"XX":return Ye(Ge.basic,e);case"XXXX":return Ye(Ge.basicOptionalSeconds,e);case"XXXXX":return Ye(Ge.extendedOptionalSeconds,e);case"XXX":default:return Ye(Ge.extended,e)}}set(e,s,i){return s.timestampIsSet?e:Vt(e,e.getTime()-nc(e)-i)}}class DO extends dt{constructor(){super(...arguments);N(this,"priority",10);N(this,"incompatibleTokens",["t","T","X"])}parse(e,s){switch(s){case"x":return Ye(Ge.basicOptionalMinutes,e);case"xx":return Ye(Ge.basic,e);case"xxxx":return Ye(Ge.basicOptionalSeconds,e);case"xxxxx":return Ye(Ge.extendedOptionalSeconds,e);case"xxx":default:return Ye(Ge.extended,e)}}set(e,s,i){return s.timestampIsSet?e:Vt(e,e.getTime()-nc(e)-i)}}class OO extends dt{constructor(){super(...arguments);N(this,"priority",40);N(this,"incompatibleTokens","*")}parse(e){return lb(e)}set(e,s,i){return[Vt(e,i*1e3),{timestampIsSet:!0}]}}class MO extends dt{constructor(){super(...arguments);N(this,"priority",20);N(this,"incompatibleTokens","*")}parse(e){return lb(e)}set(e,s,i){return[Vt(e,i),{timestampIsSet:!0}]}}const NO={G:new Z2,y:new tO,Y:new eO,R:new nO,u:new sO,Q:new iO,q:new rO,M:new oO,L:new aO,w:new lO,I:new dO,d:new pO,D:new mO,E:new gO,e:new _O,c:new yO,i:new bO,a:new wO,b:new xO,B:new EO,h:new TO,H:new IO,K:new AO,k:new kO,m:new SO,s:new RO,S:new PO,X:new CO,x:new DO,t:new OO,T:new MO},LO=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,VO=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,FO=/^'([^]*?)'?$/,$O=/''/g,BO=/\S/,UO=/[a-zA-Z]/;function jO(n,t,e,s){var y,T,I,C,R,D,O,x;const i=()=>Vt((s==null?void 0:s.in)||e,NaN),r=W2(),o=(s==null?void 0:s.locale)??r.locale??nb,a=(s==null?void 0:s.firstWeekContainsDate)??((T=(y=s==null?void 0:s.locale)==null?void 0:y.options)==null?void 0:T.firstWeekContainsDate)??r.firstWeekContainsDate??((C=(I=r.locale)==null?void 0:I.options)==null?void 0:C.firstWeekContainsDate)??1,c=(s==null?void 0:s.weekStartsOn)??((D=(R=s==null?void 0:s.locale)==null?void 0:R.options)==null?void 0:D.weekStartsOn)??r.weekStartsOn??((x=(O=r.locale)==null?void 0:O.options)==null?void 0:x.weekStartsOn)??0;if(!t)return n?i():X(e,s==null?void 0:s.in);const l={firstWeekContainsDate:a,weekStartsOn:c,locale:o},d=[new J2(s==null?void 0:s.in,e)],h=t.match(VO).map(v=>{const w=v[0];if(w in Cu){const A=Cu[w];return A(v,o.formatLong)}return v}).join("").match(LO),f=[];for(let v of h){!(s!=null&&s.useAdditionalWeekYearTokens)&&ab(v)&&Du(v,t,n),!(s!=null&&s.useAdditionalDayOfYearTokens)&&ob(v)&&Du(v,t,n);const w=v[0],A=NO[w];if(A){const{incompatibleTokens:S}=A;if(Array.isArray(S)){const k=f.find(tt=>S.includes(tt.token)||tt.token===w);if(k)throw new RangeError(`The format string mustn't contain \`${k.fullToken}\` and \`${v}\` at the same time`)}else if(A.incompatibleTokens==="*"&&f.length>0)throw new RangeError(`The format string mustn't contain \`${v}\` and any other token at the same time`);f.push({token:w,fullToken:v});const P=A.run(n,v,o.match,l);if(!P)return i();d.push(P.setter),n=P.rest}else{if(w.match(UO))throw new RangeError("Format string contains an unescaped latin alphabet character `"+w+"`");if(v==="''"?v="'":w==="'"&&(v=zO(v)),n.indexOf(v)===0)n=n.slice(v.length);else return i()}}if(n.length>0&&BO.test(n))return i();const m=d.map(v=>v.priority).sort((v,w)=>w-v).filter((v,w,A)=>A.indexOf(v)===w).map(v=>d.filter(w=>w.priority===v).sort((w,A)=>A.subPriority-w.subPriority)).map(v=>v[0]);let _=X(e,s==null?void 0:s.in);if(isNaN(+_))return i();const b={};for(const v of m){if(!v.validate(_,l))return i();const w=v.set(_,b,l);Array.isArray(w)?(_=w[0],Object.assign(b,w[1])):_=w}return _}function zO(n){return n.match(FO)[1].replace($O,"'")}function HO(n,t){const e=X(n,t==null?void 0:t.in);return e.setMinutes(0,0,0),e}function qO(n,t){const e=X(n,t==null?void 0:t.in);return e.setSeconds(0,0),e}function WO(n,t){const e=X(n,t==null?void 0:t.in);return e.setMilliseconds(0),e}function GO(n,t){const e=()=>Vt(t==null?void 0:t.in,NaN),s=(t==null?void 0:t.additionalDigits)??2,i=XO(n);let r;if(i.date){const l=JO(i.date,s);r=ZO(l.restDateString,l.year)}if(!r||isNaN(+r))return e();const o=+r;let a=0,c;if(i.time&&(a=tM(i.time),isNaN(a)))return e();if(i.timezone){if(c=eM(i.timezone),isNaN(c))return e()}else{const l=new Date(o+a),d=X(0,t==null?void 0:t.in);return d.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),d.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),d}return X(o+a+c,t==null?void 0:t.in)}const ra={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},YO=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,KO=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,QO=/^([+-])(\d{2})(?::?(\d{2}))?$/;function XO(n){const t={},e=n.split(ra.dateTimeDelimiter);let s;if(e.length>2)return t;if(/:/.test(e[0])?s=e[0]:(t.date=e[0],s=e[1],ra.timeZoneDelimiter.test(t.date)&&(t.date=n.split(ra.timeZoneDelimiter)[0],s=n.substr(t.date.length,n.length))),s){const i=ra.timezone.exec(s);i?(t.time=s.replace(i[1],""),t.timezone=i[1]):t.time=s}return t}function JO(n,t){const e=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),s=n.match(e);if(!s)return{year:NaN,restDateString:""};const i=s[1]?parseInt(s[1]):null,r=s[2]?parseInt(s[2]):null;return{year:r===null?i:r*100,restDateString:n.slice((s[1]||s[2]).length)}}function ZO(n,t){if(t===null)return new Date(NaN);const e=n.match(YO);if(!e)return new Date(NaN);const s=!!e[4],i=cr(e[1]),r=cr(e[2])-1,o=cr(e[3]),a=cr(e[4]),c=cr(e[5])-1;if(s)return oM(t,a,c)?nM(t,a,c):new Date(NaN);{const l=new Date(0);return!iM(t,r,o)||!rM(t,i)?new Date(NaN):(l.setUTCFullYear(t,r,Math.max(i,o)),l)}}function cr(n){return n?parseInt(n):1}function tM(n){const t=n.match(KO);if(!t)return NaN;const e=$l(t[1]),s=$l(t[2]),i=$l(t[3]);return aM(e,s,i)?e*go+s*mo+i*1e3:NaN}function $l(n){return n&&parseFloat(n.replace(",","."))||0}function eM(n){if(n==="Z")return 0;const t=n.match(QO);if(!t)return 0;const e=t[1]==="+"?-1:1,s=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return cM(s,i)?e*(s*go+i*mo):NaN}function nM(n,t,e){const s=new Date(0);s.setUTCFullYear(n,0,4);const i=s.getUTCDay()||7,r=(t-1)*7+e+1-i;return s.setUTCDate(s.getUTCDate()+r),s}const sM=[31,null,31,30,31,30,31,31,30,31,30,31];function hb(n){return n%400===0||n%4===0&&n%100!==0}function iM(n,t,e){return t>=0&&t<=11&&e>=1&&e<=(sM[t]||(hb(n)?29:28))}function rM(n,t){return t>=1&&t<=(hb(n)?366:365)}function oM(n,t,e){return t>=1&&t<=53&&e>=0&&e<=6}function aM(n,t,e){return n===24?t===0&&e===0:e>=0&&e<60&&t>=0&&t<60&&n>=0&&n<25}function cM(n,t){return t>=0&&t<=59}/*!
 * chartjs-adapter-date-fns v3.0.0
 * https://www.chartjs.org
 * (c) 2022 chartjs-adapter-date-fns Contributors
 * Released under the MIT license
 */const lM={datetime:"MMM d, yyyy, h:mm:ss aaaa",millisecond:"h:mm:ss.SSS aaaa",second:"h:mm:ss aaaa",minute:"h:mm aaaa",hour:"ha",day:"MMM d",week:"PP",month:"MMM yyyy",quarter:"qqq - yyyy",year:"yyyy"};xv._date.override({_id:"date-fns",formats:function(){return lM},parse:function(n,t){if(n===null||typeof n>"u")return null;const e=typeof n;return e==="number"||n instanceof Date?n=X(n):e==="string"&&(typeof t=="string"?n=jO(n,t,new Date,this.options):n=GO(n,this.options)),Qv(n)?n.getTime():null},format:function(n,t){return H2(n,t,this.options)},add:function(n,t,e){switch(e){case"millisecond":return Jd(n,t);case"second":return OD(n,t);case"minute":return CD(n,t);case"hour":return SD(n,t);case"day":return Lc(n,t);case"week":return MD(n,t);case"month":return Xd(n,t);case"quarter":return DD(n,t);case"year":return ND(n,t);default:return n}},diff:function(n,t,e){switch(e){case"millisecond":return Zd(n,t);case"second":return zD(n,t);case"minute":return BD(n,t);case"hour":return $D(n,t);case"day":return Xv(n,t);case"week":return HD(n,t);case"month":return tb(n,t);case"quarter":return jD(n,t);case"year":return qD(n,t);default:return 0}},startOf:function(n,t,e){switch(t){case"second":return WO(n);case"minute":return qO(n);case"hour":return HO(n);case"day":return Pu(n);case"week":return rn(n);case"isoWeek":return rn(n,{weekStartsOn:+e});case"month":return GD(n);case"quarter":return WD(n);case"year":return eb(n);default:return n}},endOf:function(n,t){switch(t){case"second":return ZD(n);case"minute":return XD(n);case"hour":return KD(n);case"day":return Jv(n);case"week":return QD(n);case"month":return Zv(n);case"quarter":return JD(n);case"year":return YD(n);default:return n}}});const Ln="rgba(255,255,255,0.08)",He="#a1a1aa",le={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};gt.defaults.color="#e5e5e5";gt.defaults.font.family=le.family;gt.defaults.font.weight=le.weight;const _s={renderCategorias:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new gt(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Ln},ticks:{color:He,font:le}},y:{grid:{color:Ln},ticks:{color:He,font:le}}}}})},renderStatusObra:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new gt(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:le,padding:12,usePointStyle:!0}}}}})},renderNatureza:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new gt(e,{type:"bar",data:{labels:s,datasets:[{label:"Por Natureza",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:He,font:le}},y:{grid:{color:Ln},ticks:{color:He,font:le,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}}}})},renderCentrosCusto:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new gt(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e","#0ea5e9","#f59e0b"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:le,padding:12,usePointStyle:!0}}}}})},renderFinancePVAV:(n,t=[],e=[])=>{const s=document.getElementById(n);s&&(s.chart&&s.chart.destroy(),s.chart=new gt(s,{type:"line",data:{datasets:[{label:"Planejado (PV)",data:t,borderColor:"#16a34a",backgroundColor:"rgba(34,197,94,0.12)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}},{label:"Real (AV)",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34,197,94,0.05)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"time",time:{unit:"day"},grid:{color:Ln},ticks:{color:He}},y:{grid:{color:Ln},ticks:{color:He,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}},plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:le,usePointStyle:!0}}}}}))},renderCurvaS:(n,t=[],e=[])=>{const s=document.getElementById(n);s&&(s.chart&&s.chart.destroy(),s.chart=new gt(s,{type:"line",data:{labels:t.map((i,r)=>`Mês ${r+1}`),datasets:[{label:"Planejado",data:t,borderColor:"#a1a1aa",backgroundColor:"transparent",borderWidth:2,borderDash:[5,5],tension:.4,pointRadius:0},{label:"Realizado",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.1)",borderWidth:3,tension:.4,fill:!0,pointRadius:4,pointBackgroundColor:"#22c55e",pointBorderColor:"#121212",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"top",labels:{color:"#e5e5e5",font:le,usePointStyle:!0}},tooltip:{backgroundColor:"#1c1c1e",titleColor:"#e5e5e5",bodyColor:"#a1a1aa",borderColor:"#333333",borderWidth:1,titleFont:le,bodyFont:le}},scales:{x:{grid:{color:Ln},ticks:{color:He,font:le}},y:{grid:{color:Ln},ticks:{color:He,font:le,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}}}}))},renderGastosMensais:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new gt(e,{type:"bar",data:{labels:s.map(r=>{const[o,a]=r.split("-");return`${a}/${o.slice(2)}`}),datasets:[{label:"Gastos Mensais",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:He,font:le}},y:{grid:{color:Ln},ticks:{color:He,font:le,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}}}})}},fb=oS(),rg=fb.BASE_URL||"https://apiexterna.diariodeobra.app/v1",uM=()=>{const n=fb.TOKEN||(typeof window<"u"?window.__RDO_API_TOKEN:"");if(n)return n;try{const t=localStorage.getItem("axel_rdo_token");if(t)return t}catch{}return""};async function Bl(n,t={}){const e=uM();if(!e)return console.warn("[RDO] Token não encontrado; defina __RDO_API_CONFIG.TOKEN ou localStorage.axel_rdo_token"),null;const s={...t.headers,token:e,"Content-Type":"application/json"},i=await fetch(`${rg}${n}`,{...t,headers:s});if(console.info("[RDO] Request:",`${rg}${n}`,"status:",i.status),!i.ok)return console.warn(`Erro na API RDO ao acessar ${n}: ${i.status} ${i.statusText}`),null;const r=await i.json();return console.info("[RDO] Response data size:",Array.isArray(r)?r.length:Object.keys(r||{}).length),r}const mi={getObraByOs:async n=>{const t=await Bl("/obras");if(!Array.isArray(t))return null;const e=String(n||"").trim();if(!e)return null;const s=t.find(o=>String(o._id)===e);if(s)return s;const i=t.find(o=>{const a=(o.nome||"").match(/(\d+)$/);return a&&a[1]===e});if(i)return i;const r=t.find(o=>(o.nome||"").includes(e));return r||null},getRelatoriosByObra:async n=>{const t=await Bl(`/obras/${n}/relatorios`);return Array.isArray(t)?t:[]},getRelatorioDetalhe:async(n,t)=>Bl(`/obras/${n}/relatorios/${t}`),getIntegratedDataForObra:async n=>{const t=await mi.getObraByOs(n);if(!t)return console.warn("[RDO] Obra não localizada para OS:",n),null;console.info("[RDO] Obra encontrada para OS:",n,"->",t._id,t.nome);const e=await mi.getRelatoriosByObra(t._id);if(!e.length)return console.warn("[RDO] Nenhum relatório retornado para obra",t._id),{quantidadeRelatorios:0,totalHoras:"0.00",totalHorasExtras:"0.00",reports:[]};const s=(await Promise.all(e.map(c=>mi.getRelatorioDetalhe(t._id,c._id)))).filter(Boolean);let i=0,r=0;const o=9,a=c=>{if(!c||typeof c!="string")return 0;const[l,d]=c.split(":").map(Number);return(l||0)+(d||0)/60};return s.forEach(c=>{var h,f;(((h=c==null?void 0:c.maoDeObra)==null?void 0:h.padrao)||[]).forEach(m=>{const _=Number(m.quantidade)||0;i+=_,_>o&&(r+=_-o)}),(((f=c==null?void 0:c.maoDeObra)==null?void 0:f.personalizada)||[]).forEach(m=>{const _=a(m.horasTrabalhadas);i+=_,_>o&&(r+=_-o)})}),{quantidadeRelatorios:s.length,totalHoras:i.toFixed(2),totalHorasExtras:r.toFixed(2),reports:s}},processRDOData:(n=[])=>{const t={},e={},s={};let i=0,r=0;const o=new Set,a=9,c={},l=h=>{if(typeof h=="number")return h;if(typeof h=="string"){const[f,m]=h.split(":").map(Number);return(f||0)+(m||0)/60}return 0};n.forEach(h=>{var b,y;const f=h.data||h.createdAt||h.data_inicio||h.dataInicio;if(!f)return;t[f]||(t[f]=0);const m=((b=h==null?void 0:h.maoDeObra)==null?void 0:b.padrao)||[],_=((y=h==null?void 0:h.maoDeObra)==null?void 0:y.personalizada)||[];m.forEach(T=>{const I=Number(T.quantidade)||0,C=Math.max(0,I-a);t[f]+=I;const R=T.funcao||"Outros";e[R]=(e[R]||0)+I,T.funcionario_id&&(s[f]||(s[f]=new Set),s[f].add(T.funcionario_id),o.add(T.funcionario_id));const D=T.nome||T.funcionario||T.descricao||"Técnico";c[D]=(c[D]||0)+I,i+=I,r+=C}),_.forEach(T=>{const I=l(T.horasTrabalhadas),C=Math.max(0,I-a);t[f]+=I;const R=T.funcao||"Outros";e[R]=(e[R]||0)+I,T.funcionario_id&&(s[f]||(s[f]=new Set),s[f].add(T.funcionario_id),o.add(T.funcionario_id));const D=T.nome||T.funcionario||T.descricao||"Técnico";c[D]=(c[D]||0)+I,i+=I,r+=C})});const d={};return Object.keys(s).forEach(h=>{d[h]=s[h].size}),{horasPorDia:t,horasPorFuncao:e,funcionariosPorDia:d,totalHoras:i,totalExtras:r,totalFuncionarios:o.size,mediaHorasDia:i/Math.max(1,Object.keys(t).length),mediaFuncionariosDia:Object.keys(d).length?Object.values(d).reduce((h,f)=>h+f,0)/Object.keys(d).length:0,techHours:c}}},pb=Object.freeze(Object.defineProperty({__proto__:null,RDOService:mi},Symbol.toStringTag,{value:"Module"})),ai={initList:async()=>{nt.render(F.createLoader());try{const n=await Ve.getObras();nt.render(Vl.renderList(n))}catch(n){console.error(n),nt.render(`<div class="text-red-500 p-4">Erro ao carregar obras: ${n.message}</div>`)}},initForm:async(n=null)=>{nt.render(F.createLoader());try{let t=null;n&&(t=await Ve.getObraById(n)),nt.render(Vl.renderForm(t)),ai.bindFormEvents(n)}catch(t){console.error(t),nt.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},initDashboard:async n=>{nt.render(F.createLoader());try{const t=await Ve.getObraById(n);if(!t){nt.render('<div class="text-red-500 p-4">Obra não encontrada.</div>');return}const e=await Ve.getObraStats(n,!1),s=Number(t.valor_orcado||0);s>0?(e.economia=s-e.totalGasto,e.curvaPercent=e.totalGasto/s*100):(e.economia=0,e.curvaPercent=0);const i=[];!t.horas_previstas&&!t.horas_extras_previstas&&i.push("Horas da obra não informadas."),t.data_prevista_inicio||i.push("Data de início prevista não informada."),t.data_prevista_fim||i.push("Data de término prevista não informada."),s||i.push("Orçamento da obra não informado."),t.numero_os||i.push("Número da OS não informado; integração RDO pode falhar."),e.osNumber=t.numero_os||t.id,e.alerts=i;const[r,o]=await Promise.all([Rs.list(),Ps.list()]),a=new Map(r.map(d=>[d.id,d.nome||d.email||d.id])),c=new Map(o.map(d=>[d.id,d.nome||d.empresa||d.id]));e.comprasRecentes=(e.comprasRecentes||[]).map(d=>({...d,compradorNome:a.get(d.compradorId)||d.comprador||"",fornecedorNome:c.get(d.fornecedorId)||d.fornecedor||""})),nt.render(Vl.renderDashboard(t,e)),(()=>{const d=h=>{var _;const f=document.createElement("div");f.className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4",f.innerHTML=`
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
                                        <div class="mt-1">${ht.renderStatusBadge(h.status_compra,h.previsao_entrega||h.data_entrega_prevista)}</div>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Descrição</label>
                                        <p class="text-text">${h.descricao_compra||h.descricao||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Valor</label>
                                        <p class="text-text">${ht.formatCurrency(h.valor_total??h.valor_estimado??0)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Fornecedor</label>
                                        <p class="text-text">${h.fornecedorNome||h.fornecedor||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Comprador</label>
                                        <p class="text-text">${h.compradorNome||h.comprador||h.compradorId||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Prev. Entrega</label>
                                        <p class="text-text">${ht.formatDate(h.previsao_entrega||h.data_entrega_prevista)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Data Emissão</label>
                                        <p class="text-text">${ht.formatDate(h.data_emissao)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Número NF</label>
                                        <p class="text-text">${h.numero_nf||"-"}</p>
                                    </div>
                                </div>
                                <div class="flex justify-end gap-2">
                                    <button class="btn-secondary" data-close>Fechar</button>
                                    ${h.id?`<button class="btn" data-edit-id="${h.id}">Editar</button>`:""}
                                </div>
                            </div>
                        </div>
                    `,document.body.appendChild(f),(_=f.querySelectorAll("[data-close]"))==null||_.forEach(b=>b.addEventListener("click",()=>f.remove()));const m=f.querySelector("[data-edit-id]");m&&m.addEventListener("click",()=>{vt.navigate(`/compras/${h.id}/editar`),f.remove()})};document.querySelectorAll('[data-action="edit-compra"]').forEach(h=>{h.addEventListener("click",()=>{const f=h.dataset.id;f&&vt.navigate(`/compras/${f}/editar`)})}),document.querySelectorAll('[data-action="view-compra"]').forEach(h=>{h.addEventListener("click",()=>{const f=h.dataset.id,m=e.comprasRecentes.find(_=>_.id===f);m&&d(m)})})})(),setTimeout(async()=>{var _;_s.renderCategorias("chart-categorias",e.gastosPorCategoria),_s.renderStatusObra("chart-status-obra",e.porStatus),e.curvaS&&_s.renderCurvaS("chart-curva-s",e.curvaS.planejado,e.curvaS.realizado),e.gastosMensais&&_s.renderGastosMensais("chart-gastos-mensais",e.gastosMensais),e.naturezaTotais&&_s.renderNatureza("chart-natureza",e.naturezaTotais),e.ccTotais&&_s.renderCentrosCusto("chart-cc",e.ccTotais);const{COST_PER_HOUR:d,COST_PER_OVERTIME_HOUR:h}=await qa(async()=>{const{COST_PER_HOUR:b,COST_PER_OVERTIME_HOUR:y}=await import("./costs-CbBns5TW.js");return{COST_PER_HOUR:b,COST_PER_OVERTIME_HOUR:y}},[]),f=Hv({data_inicio:t.data_prevista_inicio,data_prevista_fim:t.data_prevista_fim,orcamento:t.valor_orcado}),m=qv(e.comprasRecentes||[],((_=e.rdoData)==null?void 0:_.horasPorDia)||{},d,h);(f.length||m.length)&&_s.renderFinancePVAV("chart-finance-pvav",f,m);try{const b=t.numero_os||t.numeroOS||t.id;if(b){const y=await mi.getIntegratedDataForObra(b);if(y&&y.reports){const T=mi.processRDOData(y.reports);if(T){e.rdoData=T,e.rdoOk=!0;const I=(C,R)=>{const D=document.getElementById(C);D&&(D.textContent=R)};I("kpi-rdo-total",T.totalHoras.toFixed(1)),I("kpi-rdo-media-dia",T.mediaHorasDia.toFixed(1)),I("kpi-rdo-func",String(T.totalFuncionarios||0)),I("kpi-rdo-media-func-dia",T.mediaFuncionariosDia.toFixed(1)),T.totalHoras>0?($t.renderHorasPorDia("chart-rdo-horas",T.horasPorDia),$t.renderHorasPorFuncao("chart-rdo-funcao",T.horasPorFuncao),$t.renderFuncionariosPorDia("chart-rdo-funcionarios",T.funcionariosPorDia)):($t.renderEmpty("chart-rdo-horas"),$t.renderEmpty("chart-rdo-funcao"),$t.renderEmpty("chart-rdo-funcionarios"))}}else e.rdoData=e.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},$t.renderEmpty("chart-rdo-horas"),$t.renderEmpty("chart-rdo-funcao"),$t.renderEmpty("chart-rdo-funcionarios")}}catch(b){console.warn("Erro ao carregar dados RDO (legacy):",(b==null?void 0:b.message)||b),e.rdoData=e.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},$t.renderEmpty("chart-rdo-horas"),$t.renderEmpty("chart-rdo-funcao"),$t.renderEmpty("chart-rdo-funcionarios")}},100)}catch(t){console.error(t),nt.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},bindFormEvents:n=>{const t=document.getElementById("form-obra");t.addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("btn-submit");try{s.disabled=!0,s.innerHTML=F.createLoader();const i=new FormData(t),r=Object.fromEntries(i.entries());r.valor_orcado=r.valor_orcado?Number(r.valor_orcado):0,r.tolerancia_percentual=r.tolerancia_percentual?Number(r.tolerancia_percentual)/100:0,r.valor_deslocamento_km=r.valor_deslocamento_km?Number(r.valor_deslocamento_km):0,r.horas_previstas=r.horas_previstas?Number(r.horas_previstas):0,r.horas_extras_previstas=r.horas_extras_previstas?Number(r.horas_extras_previstas):0,r.qtd_refeicoes=r.qtd_refeicoes?Number(r.qtd_refeicoes):0,r.qtd_hospedagens=r.qtd_hospedagens?Number(r.qtd_hospedagens):0,r.is_obra_filha=t.is_obra_filha.checked,n?(await Ve.updateObra(n,r),F.createToast("Obra atualizada com sucesso!")):(await Ve.createObra(r),F.createToast("Obra criada com sucesso!")),vt.navigate("/obras")}catch(i){console.error(i),F.createToast("Erro ao salvar obra: "+i.message,"error"),s.disabled=!1,s.innerHTML=`<span>${n?"Salvar Alterações":"Criar Obra"}</span>`}})}},dM={renderMenu:()=>`
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
    `},hM={init:async()=>{nt.render(dM.renderMenu())}},fM={render:(n=[])=>`
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
    `},Ou={init:async()=>{const n=await Ps.list();nt.render(fM.render(n)),Ou.bind()},bind:()=>{const n=document.getElementById("fornecedor-form"),t=document.getElementById("btn-novo-fornecedor"),e=document.getElementById("btn-salvar-fornecedor"),s=document.getElementById("btn-cancelar-fornecedor"),i=document.querySelector("#fornecedor-table");t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden"));let r=null;i==null||i.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(r=a.dataset.id,document.getElementById("forn-nome").value=a.dataset.nome||"",document.getElementById("forn-email").value=a.dataset.email||"",document.getElementById("forn-telefone").value=a.dataset.telefone||"",document.getElementById("forn-cnpj").value=a.dataset.cnpj||"",n==null||n.classList.remove("hidden"))}),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("forn-nome").value,email:document.getElementById("forn-email").value,telefone:document.getElementById("forn-telefone").value,cnpj:document.getElementById("forn-cnpj").value};r?await Ps.update(r,o):await Ps.create(o),Ou.init()})}},pM={render:(n=[])=>`
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
    `},Mu={init:async()=>{const n=await pi.list();nt.render(pM.render(n)),Mu.bind()},bind:()=>{const n=document.getElementById("cc-form"),t=document.getElementById("btn-novo-cc"),e=document.getElementById("btn-salvar-cc"),s=document.getElementById("btn-cancelar-cc"),i=document.getElementById("cc-table");let r=null;t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden")),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("cc-nome").value,codigo:document.getElementById("cc-codigo").value};r?await pi.update(r,o):await pi.create(o),Mu.init()}),i==null||i.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(r=a.dataset.id,document.getElementById("cc-nome").value=a.dataset.nome||"",document.getElementById("cc-codigo").value=a.dataset.codigo||"",n==null||n.classList.remove("hidden"))})}},mM={render:(n=[])=>`
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
    `},Nu={init:async()=>{const n=await Rs.list();nt.render(mM.render(n)),Nu.bind()},bind:()=>{const n=document.getElementById("comprador-form"),t=document.getElementById("btn-novo-comprador"),e=document.getElementById("btn-salvar-comprador"),s=document.getElementById("btn-cancelar-comprador"),i=document.getElementById("compr-table");let r=null;t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden")),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("compr-nome").value,email:document.getElementById("compr-email").value};r?await Rs.update(r,o):await Rs.create(o),Nu.init()}),i==null||i.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(r=a.dataset.id,document.getElementById("compr-nome").value=a.dataset.nome||"",document.getElementById("compr-email").value=a.dataset.email||"",n==null||n.classList.remove("hidden"))})}},og={renderBell:(n=0)=>`
            <button id="notifications-bell" class="relative p-2 rounded-lg hover:bg-surface transition-colors">
                ${Wt.bell}
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
                             onclick="window.location.hash = '${t.link||"#"}'">
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
        `},De={notifications:[],unreadCount:0,init:async()=>{mt.state.currentUser&&(await De.load(),De.render(),De.bindEvents(),setInterval(()=>De.load(),12e4))},load:async()=>{const n=mt.state.currentUser;De.notifications=await tc.getByUser(n.uid,20),De.unreadCount=De.notifications.filter(t=>!t.lida).length,De.render()},render:()=>{const n=document.getElementById("notifications-container");if(!n)return;n.innerHTML=og.renderBell(De.unreadCount);const t=document.createElement("div");t.className="relative",t.innerHTML=og.renderDropdown(De.notifications),n.appendChild(t)},bindEvents:()=>{document.addEventListener("click",n=>{const t=document.getElementById("notifications-bell"),e=document.getElementById("notifications-dropdown");t&&t.contains(n.target)?e==null||e.classList.toggle("hidden"):e&&!e.contains(n.target)&&e.classList.add("hidden")}),document.addEventListener("click",async n=>{if(n.target.id==="mark-all-read"){const t=mt.state.currentUser;await tc.markAllAsRead(t.uid),await De.load()}})}};console.log("[Main] Inicializando aplicação...");const gM=async()=>{try{await lS(),console.log("[Main] Firebase inicializado."),mt.applyTheme(mt.state.currentTheme||"dark"),await Ha.init(),mt.state.currentUser&&await De.init(),vt.init(),vt.on("/",Wv.init),vt.on("/login",Ip.initLogin),vt.on("/forgot-password",Ip.initForgotPassword),vt.on("/compras",ec.init),vt.on("/relatorios",B.init),vt.on("/configuracoes",Ru.init),vt.on("/compras/:id/editar",({id:t})=>ec.initEdit(t)),vt.on("/cadastros",hM.init),vt.on("/cadastros/fornecedores",Ou.init),vt.on("/cadastros/centros-custo",Mu.init),vt.on("/cadastros/compradores",Nu.init),vt.on("/obras",ai.initList),vt.on("/obras/nova",()=>ai.initForm()),vt.on("/obras/:id",({id:t})=>ai.initDashboard(t)),vt.on("/obras/:id/dashboard",({id:t})=>ai.initDashboard(t)),vt.on("/obras/:id/editar",({id:t})=>ai.initForm(t)),vt.handleRoute();const n=document.getElementById("loader");n&&n.remove()}catch(n){console.error("[Main] Erro fatal:",n),document.body.innerHTML=`<div class="p-10 text-red-600">Erro fatal: ${n.message}</div>`}};gM();
