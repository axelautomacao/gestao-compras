var qb=Object.defineProperty;var Gb=(n,t,e)=>t in n?qb(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var N=(n,t,e)=>Gb(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();var sf={};/**
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
 */const cg=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Yb=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const i=n[e++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[e++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[e++],o=n[e++],a=n[e++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[e++],o=n[e++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},lg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),s.push(e[d],e[h],e[f],e[m])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(cg(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Yb(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const l=i<n.length?e[n.charAt(i)]:64;++i;const h=i<n.length?e[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new Kb;const f=r<<2|a>>4;if(s.push(f),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const _=l<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Kb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qb=function(n){const t=cg(n);return lg.encodeByteArray(t,!0)},Ia=function(n){return Qb(n).replace(/\./g,"")},ug=function(n){try{return lg.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const Jb=()=>Xb().__FIREBASE_DEFAULTS__,Zb=()=>{if(typeof process>"u"||typeof sf>"u")return;const n=sf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},t0=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ug(n[1]);return t&&JSON.parse(t)},sc=()=>{try{return Jb()||Zb()||t0()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},dg=n=>{var t,e;return(e=(t=sc())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},hg=n=>{const t=dg(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},fg=()=>{var n;return(n=sc())===null||n===void 0?void 0:n.config},pg=n=>{var t;return(t=sc())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */function mg(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ia(JSON.stringify(e)),Ia(JSON.stringify(o)),""].join(".")}/**
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
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function n0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function s0(){var n;const t=(n=sc())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function i0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function r0(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function o0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function a0(){const n=me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function c0(){return!s0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function l0(){try{return typeof indexedDB=="object"}catch{return!1}}function u0(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
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
 */const d0="FirebaseError";class on extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=d0,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kr.prototype.create)}}class Kr{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?h0(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new on(i,a,s)}}function h0(n,t){return n.replace(f0,(e,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const f0=/\{\$([^}]+)}/g;function p0(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Aa(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const i of e){if(!s.includes(i))return!1;const r=n[i],o=t[i];if(rf(r)&&rf(o)){if(!Aa(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!e.includes(i))return!1;return!0}function rf(n){return n!==null&&typeof n=="object"}/**
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
 */function Qr(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function rr(n){const t={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}}),t}function or(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function m0(n,t){const e=new g0(n,t);return e.subscribe.bind(e)}class g0{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let i;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");_0(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:s},i.next===void 0&&(i.next=rl),i.error===void 0&&(i.error=rl),i.complete===void 0&&(i.complete=rl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _0(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function rl(){}/**
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
 */function Mt(n){return n&&n._delegate?n._delegate:n}class Zn{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var it;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(it||(it={}));const x0={debug:it.DEBUG,verbose:it.VERBOSE,info:it.INFO,warn:it.WARN,error:it.ERROR,silent:it.SILENT},E0=it.INFO,T0={[it.DEBUG]:"log",[it.VERBOSE]:"log",[it.INFO]:"info",[it.WARN]:"warn",[it.ERROR]:"error"},I0=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),i=T0[t];if(i)console[i](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Lu{constructor(t){this.name=t,this._logLevel=E0,this._logHandler=I0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in it))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?x0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,it.DEBUG,...t),this._logHandler(this,it.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,it.VERBOSE,...t),this._logHandler(this,it.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,it.INFO,...t),this._logHandler(this,it.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,it.WARN,...t),this._logHandler(this,it.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,it.ERROR,...t),this._logHandler(this,it.ERROR,...t)}}const A0=(n,t)=>t.some(e=>n instanceof e);let of,af;function k0(){return of||(of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function R0(){return af||(af=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gg=new WeakMap,Ul=new WeakMap,_g=new WeakMap,ol=new WeakMap,Vu=new WeakMap;function P0(n){const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(Yn(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&gg.set(e,n)}).catch(()=>{}),Vu.set(t,n),t}function S0(n){if(Ul.has(n))return;const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ul.set(n,t)}let jl={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ul.get(n);if(t==="objectStoreNames")return n.objectStoreNames||_g.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Yn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function C0(n){jl=n(jl)}function D0(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(al(this),t,...e);return _g.set(s,t.sort?t.sort():[t]),Yn(s)}:R0().includes(n)?function(...t){return n.apply(al(this),t),Yn(gg.get(this))}:function(...t){return Yn(n.apply(al(this),t))}}function O0(n){return typeof n=="function"?D0(n):(n instanceof IDBTransaction&&S0(n),A0(n,k0())?new Proxy(n,jl):n)}function Yn(n){if(n instanceof IDBRequest)return P0(n);if(ol.has(n))return ol.get(n);const t=O0(n);return t!==n&&(ol.set(n,t),Vu.set(t,n)),t}const al=n=>Vu.get(n);function M0(n,t,{blocked:e,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,t),a=Yn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Yn(o.result),c.oldVersion,c.newVersion,Yn(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const N0=["get","getKey","getAll","getAllKeys","count"],L0=["put","add","delete","clear"],cl=new Map;function cf(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(cl.get(t))return cl.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,i=L0.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(i||N0.includes(e)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),i&&c.done]))[0]};return cl.set(t,r),r}C0(n=>({...n,get:(t,e,s)=>cf(t,e)||n.get(t,e,s),has:(t,e)=>!!cf(t,e)||n.has(t,e)}));/**
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
 */class V0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(F0(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function F0(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const zl="@firebase/app",lf="0.10.13";/**
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
 */const An=new Lu("@firebase/app"),B0="@firebase/app-compat",$0="@firebase/analytics-compat",U0="@firebase/analytics",j0="@firebase/app-check-compat",z0="@firebase/app-check",H0="@firebase/auth",W0="@firebase/auth-compat",q0="@firebase/database",G0="@firebase/data-connect",Y0="@firebase/database-compat",K0="@firebase/functions",Q0="@firebase/functions-compat",X0="@firebase/installations",J0="@firebase/installations-compat",Z0="@firebase/messaging",tw="@firebase/messaging-compat",ew="@firebase/performance",nw="@firebase/performance-compat",sw="@firebase/remote-config",iw="@firebase/remote-config-compat",rw="@firebase/storage",ow="@firebase/storage-compat",aw="@firebase/firestore",cw="@firebase/vertexai-preview",lw="@firebase/firestore-compat",uw="firebase",dw="10.14.1";/**
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
 */const Hl="[DEFAULT]",hw={[zl]:"fire-core",[B0]:"fire-core-compat",[U0]:"fire-analytics",[$0]:"fire-analytics-compat",[z0]:"fire-app-check",[j0]:"fire-app-check-compat",[H0]:"fire-auth",[W0]:"fire-auth-compat",[q0]:"fire-rtdb",[G0]:"fire-data-connect",[Y0]:"fire-rtdb-compat",[K0]:"fire-fn",[Q0]:"fire-fn-compat",[X0]:"fire-iid",[J0]:"fire-iid-compat",[Z0]:"fire-fcm",[tw]:"fire-fcm-compat",[ew]:"fire-perf",[nw]:"fire-perf-compat",[sw]:"fire-rc",[iw]:"fire-rc-compat",[rw]:"fire-gcs",[ow]:"fire-gcs-compat",[aw]:"fire-fst",[lw]:"fire-fst-compat",[cw]:"fire-vertex","fire-js":"fire-js",[uw]:"fire-js-all"};/**
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
 */const ka=new Map,fw=new Map,Wl=new Map;function uf(n,t){try{n.container.addComponent(t)}catch(e){An.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Ps(n){const t=n.name;if(Wl.has(t))return An.debug(`There were multiple attempts to register component ${t}.`),!1;Wl.set(t,n);for(const e of ka.values())uf(e,n);for(const e of fw.values())uf(e,n);return!0}function ic(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function _n(n){return n.settings!==void 0}/**
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
 */const pw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new Kr("app","Firebase",pw);/**
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
 */const Vs=dw;function yg(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Hl,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw Kn.create("bad-app-name",{appName:String(i)});if(e||(e=fg()),!e)throw Kn.create("no-options");const r=ka.get(i);if(r){if(Aa(e,r.options)&&Aa(s,r.config))return r;throw Kn.create("duplicate-app",{appName:i})}const o=new w0(i);for(const c of Wl.values())o.addComponent(c);const a=new mw(e,s,o);return ka.set(i,a),a}function Fu(n=Hl){const t=ka.get(n);if(!t&&n===Hl&&fg())return yg();if(!t)throw Kn.create("no-app",{appName:n});return t}function Qe(n,t,e){var s;let i=(s=hw[n])!==null&&s!==void 0?s:n;e&&(i+=`-${e}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),An.warn(a.join(" "));return}Ps(new Zn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const gw="firebase-heartbeat-database",_w=1,Pr="firebase-heartbeat-store";let ll=null;function vg(){return ll||(ll=M0(gw,_w,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Pr)}catch(e){console.warn(e)}}}}).catch(n=>{throw Kn.create("idb-open",{originalErrorMessage:n.message})})),ll}async function yw(n){try{const e=(await vg()).transaction(Pr),s=await e.objectStore(Pr).get(bg(n));return await e.done,s}catch(t){if(t instanceof on)An.warn(t.message);else{const e=Kn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});An.warn(e.message)}}}async function df(n,t){try{const s=(await vg()).transaction(Pr,"readwrite");await s.objectStore(Pr).put(t,bg(n)),await s.done}catch(e){if(e instanceof on)An.warn(e.message);else{const s=Kn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});An.warn(s.message)}}}function bg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const vw=1024,bw=30*24*60*60*1e3;class ww{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ew(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hf();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=bw}),this._storage.overwrite(this._heartbeatsCache))}catch(s){An.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hf(),{heartbeatsToSend:s,unsentEntries:i}=xw(this._heartbeatsCache.heartbeats),r=Ia(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return An.warn(e),""}}}function hf(){return new Date().toISOString().substring(0,10)}function xw(n,t=vw){const e=[];let s=n.slice();for(const i of n){const r=e.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ff(e)>t){r.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),ff(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class Ew{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return l0()?u0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await yw(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return df(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return df(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ff(n){return Ia(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Tw(n){Ps(new Zn("platform-logger",t=>new V0(t),"PRIVATE")),Ps(new Zn("heartbeat",t=>new ww(t),"PRIVATE")),Qe(zl,lf,n),Qe(zl,lf,"esm2017"),Qe("fire-js","")}Tw("");var Iw="firebase",Aw="10.14.1";/**
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
 */Qe(Iw,Aw,"app");var pf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Is,wg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,y){function x(){}x.prototype=y.prototype,E.D=y.prototype,E.prototype=new x,E.prototype.constructor=E,E.C=function(A,R,P){for(var k=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)k[Z-2]=arguments[Z];return y.prototype[R].apply(A,k)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,e),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,x){x||(x=0);var A=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)A[R]=y.charCodeAt(x++)|y.charCodeAt(x++)<<8|y.charCodeAt(x++)<<16|y.charCodeAt(x++)<<24;else for(R=0;16>R;++R)A[R]=y[x++]|y[x++]<<8|y[x++]<<16|y[x++]<<24;y=E.g[0],x=E.g[1],R=E.g[2];var P=E.g[3],k=y+(P^x&(R^P))+A[0]+3614090360&4294967295;y=x+(k<<7&4294967295|k>>>25),k=P+(R^y&(x^R))+A[1]+3905402710&4294967295,P=y+(k<<12&4294967295|k>>>20),k=R+(x^P&(y^x))+A[2]+606105819&4294967295,R=P+(k<<17&4294967295|k>>>15),k=x+(y^R&(P^y))+A[3]+3250441966&4294967295,x=R+(k<<22&4294967295|k>>>10),k=y+(P^x&(R^P))+A[4]+4118548399&4294967295,y=x+(k<<7&4294967295|k>>>25),k=P+(R^y&(x^R))+A[5]+1200080426&4294967295,P=y+(k<<12&4294967295|k>>>20),k=R+(x^P&(y^x))+A[6]+2821735955&4294967295,R=P+(k<<17&4294967295|k>>>15),k=x+(y^R&(P^y))+A[7]+4249261313&4294967295,x=R+(k<<22&4294967295|k>>>10),k=y+(P^x&(R^P))+A[8]+1770035416&4294967295,y=x+(k<<7&4294967295|k>>>25),k=P+(R^y&(x^R))+A[9]+2336552879&4294967295,P=y+(k<<12&4294967295|k>>>20),k=R+(x^P&(y^x))+A[10]+4294925233&4294967295,R=P+(k<<17&4294967295|k>>>15),k=x+(y^R&(P^y))+A[11]+2304563134&4294967295,x=R+(k<<22&4294967295|k>>>10),k=y+(P^x&(R^P))+A[12]+1804603682&4294967295,y=x+(k<<7&4294967295|k>>>25),k=P+(R^y&(x^R))+A[13]+4254626195&4294967295,P=y+(k<<12&4294967295|k>>>20),k=R+(x^P&(y^x))+A[14]+2792965006&4294967295,R=P+(k<<17&4294967295|k>>>15),k=x+(y^R&(P^y))+A[15]+1236535329&4294967295,x=R+(k<<22&4294967295|k>>>10),k=y+(R^P&(x^R))+A[1]+4129170786&4294967295,y=x+(k<<5&4294967295|k>>>27),k=P+(x^R&(y^x))+A[6]+3225465664&4294967295,P=y+(k<<9&4294967295|k>>>23),k=R+(y^x&(P^y))+A[11]+643717713&4294967295,R=P+(k<<14&4294967295|k>>>18),k=x+(P^y&(R^P))+A[0]+3921069994&4294967295,x=R+(k<<20&4294967295|k>>>12),k=y+(R^P&(x^R))+A[5]+3593408605&4294967295,y=x+(k<<5&4294967295|k>>>27),k=P+(x^R&(y^x))+A[10]+38016083&4294967295,P=y+(k<<9&4294967295|k>>>23),k=R+(y^x&(P^y))+A[15]+3634488961&4294967295,R=P+(k<<14&4294967295|k>>>18),k=x+(P^y&(R^P))+A[4]+3889429448&4294967295,x=R+(k<<20&4294967295|k>>>12),k=y+(R^P&(x^R))+A[9]+568446438&4294967295,y=x+(k<<5&4294967295|k>>>27),k=P+(x^R&(y^x))+A[14]+3275163606&4294967295,P=y+(k<<9&4294967295|k>>>23),k=R+(y^x&(P^y))+A[3]+4107603335&4294967295,R=P+(k<<14&4294967295|k>>>18),k=x+(P^y&(R^P))+A[8]+1163531501&4294967295,x=R+(k<<20&4294967295|k>>>12),k=y+(R^P&(x^R))+A[13]+2850285829&4294967295,y=x+(k<<5&4294967295|k>>>27),k=P+(x^R&(y^x))+A[2]+4243563512&4294967295,P=y+(k<<9&4294967295|k>>>23),k=R+(y^x&(P^y))+A[7]+1735328473&4294967295,R=P+(k<<14&4294967295|k>>>18),k=x+(P^y&(R^P))+A[12]+2368359562&4294967295,x=R+(k<<20&4294967295|k>>>12),k=y+(x^R^P)+A[5]+4294588738&4294967295,y=x+(k<<4&4294967295|k>>>28),k=P+(y^x^R)+A[8]+2272392833&4294967295,P=y+(k<<11&4294967295|k>>>21),k=R+(P^y^x)+A[11]+1839030562&4294967295,R=P+(k<<16&4294967295|k>>>16),k=x+(R^P^y)+A[14]+4259657740&4294967295,x=R+(k<<23&4294967295|k>>>9),k=y+(x^R^P)+A[1]+2763975236&4294967295,y=x+(k<<4&4294967295|k>>>28),k=P+(y^x^R)+A[4]+1272893353&4294967295,P=y+(k<<11&4294967295|k>>>21),k=R+(P^y^x)+A[7]+4139469664&4294967295,R=P+(k<<16&4294967295|k>>>16),k=x+(R^P^y)+A[10]+3200236656&4294967295,x=R+(k<<23&4294967295|k>>>9),k=y+(x^R^P)+A[13]+681279174&4294967295,y=x+(k<<4&4294967295|k>>>28),k=P+(y^x^R)+A[0]+3936430074&4294967295,P=y+(k<<11&4294967295|k>>>21),k=R+(P^y^x)+A[3]+3572445317&4294967295,R=P+(k<<16&4294967295|k>>>16),k=x+(R^P^y)+A[6]+76029189&4294967295,x=R+(k<<23&4294967295|k>>>9),k=y+(x^R^P)+A[9]+3654602809&4294967295,y=x+(k<<4&4294967295|k>>>28),k=P+(y^x^R)+A[12]+3873151461&4294967295,P=y+(k<<11&4294967295|k>>>21),k=R+(P^y^x)+A[15]+530742520&4294967295,R=P+(k<<16&4294967295|k>>>16),k=x+(R^P^y)+A[2]+3299628645&4294967295,x=R+(k<<23&4294967295|k>>>9),k=y+(R^(x|~P))+A[0]+4096336452&4294967295,y=x+(k<<6&4294967295|k>>>26),k=P+(x^(y|~R))+A[7]+1126891415&4294967295,P=y+(k<<10&4294967295|k>>>22),k=R+(y^(P|~x))+A[14]+2878612391&4294967295,R=P+(k<<15&4294967295|k>>>17),k=x+(P^(R|~y))+A[5]+4237533241&4294967295,x=R+(k<<21&4294967295|k>>>11),k=y+(R^(x|~P))+A[12]+1700485571&4294967295,y=x+(k<<6&4294967295|k>>>26),k=P+(x^(y|~R))+A[3]+2399980690&4294967295,P=y+(k<<10&4294967295|k>>>22),k=R+(y^(P|~x))+A[10]+4293915773&4294967295,R=P+(k<<15&4294967295|k>>>17),k=x+(P^(R|~y))+A[1]+2240044497&4294967295,x=R+(k<<21&4294967295|k>>>11),k=y+(R^(x|~P))+A[8]+1873313359&4294967295,y=x+(k<<6&4294967295|k>>>26),k=P+(x^(y|~R))+A[15]+4264355552&4294967295,P=y+(k<<10&4294967295|k>>>22),k=R+(y^(P|~x))+A[6]+2734768916&4294967295,R=P+(k<<15&4294967295|k>>>17),k=x+(P^(R|~y))+A[13]+1309151649&4294967295,x=R+(k<<21&4294967295|k>>>11),k=y+(R^(x|~P))+A[4]+4149444226&4294967295,y=x+(k<<6&4294967295|k>>>26),k=P+(x^(y|~R))+A[11]+3174756917&4294967295,P=y+(k<<10&4294967295|k>>>22),k=R+(y^(P|~x))+A[2]+718787259&4294967295,R=P+(k<<15&4294967295|k>>>17),k=x+(P^(R|~y))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(R+(k<<21&4294967295|k>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+P&4294967295}s.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var x=y-this.blockSize,A=this.B,R=this.h,P=0;P<y;){if(R==0)for(;P<=x;)i(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<y;)if(A[R++]=E.charCodeAt(P++),R==this.blockSize){i(this,A),R=0;break}}else for(;P<y;)if(A[R++]=E[P++],R==this.blockSize){i(this,A),R=0;break}}this.h=R,this.o+=y},s.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var x=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=x&255,x/=256;for(this.u(E),E=Array(16),y=x=0;4>y;++y)for(var A=0;32>A;A+=8)E[x++]=this.g[y]>>>A&255;return E};function r(E,y){var x=a;return Object.prototype.hasOwnProperty.call(x,E)?x[E]:x[E]=y(E)}function o(E,y){this.h=y;for(var x=[],A=!0,R=E.length-1;0<=R;R--){var P=E[R]|0;A&&P==y||(x[R]=P,A=!1)}this.g=x}var a={};function c(E){return-128<=E&&128>E?r(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function l(E){if(isNaN(E)||!isFinite(E))return h;if(0>E)return b(l(-E));for(var y=[],x=1,A=0;E>=x;A++)y[A]=E/x|0,x*=4294967296;return new o(y,0)}function d(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return b(d(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=l(Math.pow(y,8)),A=h,R=0;R<E.length;R+=8){var P=Math.min(8,E.length-R),k=parseInt(E.substring(R,R+P),y);8>P?(P=l(Math.pow(y,P)),A=A.j(P).add(l(k))):(A=A.j(x),A=A.add(l(k)))}return A}var h=c(0),f=c(1),m=c(16777216);n=o.prototype,n.m=function(){if(v(this))return-b(this).m();for(var E=0,y=1,x=0;x<this.g.length;x++){var A=this.i(x);E+=(0<=A?A:4294967296+A)*y,y*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(_(this))return"0";if(v(this))return"-"+b(this).toString(E);for(var y=l(Math.pow(E,6)),x=this,A="";;){var R=C(x,y).g;x=T(x,R.j(y));var P=((0<x.g.length?x.g[0]:x.h)>>>0).toString(E);if(x=R,_(x))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function _(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function v(E){return E.h==-1}n.l=function(E){return E=T(this,E),v(E)?-1:_(E)?0:1};function b(E){for(var y=E.g.length,x=[],A=0;A<y;A++)x[A]=~E.g[A];return new o(x,~E.h).add(f)}n.abs=function(){return v(this)?b(this):this},n.add=function(E){for(var y=Math.max(this.g.length,E.g.length),x=[],A=0,R=0;R<=y;R++){var P=A+(this.i(R)&65535)+(E.i(R)&65535),k=(P>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);A=k>>>16,P&=65535,k&=65535,x[R]=k<<16|P}return new o(x,x[x.length-1]&-2147483648?-1:0)};function T(E,y){return E.add(b(y))}n.j=function(E){if(_(this)||_(E))return h;if(v(this))return v(E)?b(this).j(b(E)):b(b(this).j(E));if(v(E))return b(this.j(b(E)));if(0>this.l(m)&&0>E.l(m))return l(this.m()*E.m());for(var y=this.g.length+E.g.length,x=[],A=0;A<2*y;A++)x[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<E.g.length;R++){var P=this.i(A)>>>16,k=this.i(A)&65535,Z=E.i(R)>>>16,J=E.i(R)&65535;x[2*A+2*R]+=k*J,I(x,2*A+2*R),x[2*A+2*R+1]+=P*J,I(x,2*A+2*R+1),x[2*A+2*R+1]+=k*Z,I(x,2*A+2*R+1),x[2*A+2*R+2]+=P*Z,I(x,2*A+2*R+2)}for(A=0;A<y;A++)x[A]=x[2*A+1]<<16|x[2*A];for(A=y;A<2*y;A++)x[A]=0;return new o(x,0)};function I(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function S(E,y){this.g=E,this.h=y}function C(E,y){if(_(y))throw Error("division by zero");if(_(E))return new S(h,h);if(v(E))return y=C(b(E),y),new S(b(y.g),b(y.h));if(v(y))return y=C(E,b(y)),new S(b(y.g),y.h);if(30<E.g.length){if(v(E)||v(y))throw Error("slowDivide_ only works with positive integers.");for(var x=f,A=y;0>=A.l(E);)x=O(x),A=O(A);var R=D(x,1),P=D(A,1);for(A=D(A,2),x=D(x,2);!_(A);){var k=P.add(A);0>=k.l(E)&&(R=R.add(x),P=k),A=D(A,1),x=D(x,1)}return y=T(E,R.j(y)),new S(R,y)}for(R=h;0<=E.l(y);){for(x=Math.max(1,Math.floor(E.m()/y.m())),A=Math.ceil(Math.log(x)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=l(x),k=P.j(y);v(k)||0<k.l(E);)x-=A,P=l(x),k=P.j(y);_(P)&&(P=f),R=R.add(P),E=T(E,k)}return new S(R,E)}n.A=function(E){return C(this,E).h},n.and=function(E){for(var y=Math.max(this.g.length,E.g.length),x=[],A=0;A<y;A++)x[A]=this.i(A)&E.i(A);return new o(x,this.h&E.h)},n.or=function(E){for(var y=Math.max(this.g.length,E.g.length),x=[],A=0;A<y;A++)x[A]=this.i(A)|E.i(A);return new o(x,this.h|E.h)},n.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),x=[],A=0;A<y;A++)x[A]=this.i(A)^E.i(A);return new o(x,this.h^E.h)};function O(E){for(var y=E.g.length+1,x=[],A=0;A<y;A++)x[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(x,E.h)}function D(E,y){var x=y>>5;y%=32;for(var A=E.g.length-x,R=[],P=0;P<A;P++)R[P]=0<y?E.i(P+x)>>>y|E.i(P+x+1)<<32-y:E.i(P+x);return new o(R,E.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,wg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,Is=o}).apply(typeof pf<"u"?pf:typeof self<"u"?self:typeof window<"u"?window:{});var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xg,ar,Eg,ia,ql,Tg,Ig,Ag;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,g){return u==Array.prototype||u==Object.prototype||(u[p]=g.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mo=="object"&&Mo];for(var p=0;p<u.length;++p){var g=u[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=e(this);function i(u,p){if(p)t:{var g=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var M=u[w];if(!(M in g))break t;g=g[M]}u=u[u.length-1],w=g[u],p=p(w),p!=w&&p!=null&&t(g,u,{configurable:!0,writable:!0,value:p})}}function r(u,p){u instanceof String&&(u+="");var g=0,w=!1,M={next:function(){if(!w&&g<u.length){var L=g++;return{value:p(L,u[L]),done:!1}}return w=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}i("Array.prototype.values",function(u){return u||function(){return r(this,function(p,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function l(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function d(u,p,g){return u.call.apply(u.bind,arguments)}function h(u,p,g){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,w),u.apply(p,M)}}return function(){return u.apply(p,arguments)}}function f(u,p,g){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,f.apply(null,arguments)}function m(u,p){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function _(u,p){function g(){}g.prototype=p.prototype,u.aa=p.prototype,u.prototype=new g,u.prototype.constructor=u,u.Qb=function(w,M,L){for(var $=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)$[gt-2]=arguments[gt];return p.prototype[M].apply(w,$)}}function v(u){const p=u.length;if(0<p){const g=Array(p);for(let w=0;w<p;w++)g[w]=u[w];return g}return[]}function b(u,p){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(c(w)){const M=u.length||0,L=w.length||0;u.length=M+L;for(let $=0;$<L;$++)u[M+$]=w[$]}else u.push(w)}}class T{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function I(u){return/^[\s\xa0]*$/.test(u)}function S(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function C(u){return C[" "](u),u}C[" "]=function(){};var O=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function D(u,p,g){for(const w in u)p.call(g,u[w],w,u)}function E(u,p){for(const g in u)p.call(void 0,u[g],g,u)}function y(u){const p={};for(const g in u)p[g]=u[g];return p}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,p){let g,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(g in w)u[g]=w[g];for(let L=0;L<x.length;L++)g=x[L],Object.prototype.hasOwnProperty.call(w,g)&&(u[g]=w[g])}}function R(u){var p=1;u=u.split(":");const g=[];for(;0<p&&u.length;)g.push(u.shift()),p--;return u.length&&g.push(u.join(":")),g}function P(u){a.setTimeout(()=>{throw u},0)}function k(){var u=zt;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class Z{constructor(){this.h=this.g=null}add(p,g){const w=J.get();w.set(p,g),this.h?this.h.next=w:this.g=w,this.h=w}}var J=new T(()=>new vt,u=>u.reset());class vt{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let mt,Xt=!1,zt=new Z,an=()=>{const u=a.Promise.resolve(void 0);mt=()=>{u.then(Ws)}};var Ws=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(g){P(g)}var p=J;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}Xt=!1};function _e(){this.s=this.s,this.C=this.C}_e.prototype.s=!1,_e.prototype.ma=function(){this.s||(this.s=!0,this.N())},_e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ct(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}Ct.prototype.h=function(){this.defaultPrevented=!0};var cn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const g=()=>{};a.addEventListener("test",g,p),a.removeEventListener("test",g,p)}catch{}return u}();function Me(u,p){if(Ct.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var g=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(O){t:{try{C(p.nodeName);var M=!0;break t}catch{}M=!1}M||(p=null)}}else g=="mouseover"?p=u.fromElement:g=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:ln[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Me.aa.h.call(this)}}_(Me,Ct);var ln={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var mo="closure_listenable_"+(1e6*Math.random()|0),mb=0;function gb(u,p,g,w,M){this.listener=u,this.proxy=null,this.src=p,this.type=g,this.capture=!!w,this.ha=M,this.key=++mb,this.da=this.fa=!1}function go(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function _o(u){this.src=u,this.g={},this.h=0}_o.prototype.add=function(u,p,g,w,M){var L=u.toString();u=this.g[L],u||(u=this.g[L]=[],this.h++);var $=Vc(u,p,w,M);return-1<$?(p=u[$],g||(p.fa=!1)):(p=new gb(p,this.src,L,!!w,M),p.fa=g,u.push(p)),p};function Lc(u,p){var g=p.type;if(g in u.g){var w=u.g[g],M=Array.prototype.indexOf.call(w,p,void 0),L;(L=0<=M)&&Array.prototype.splice.call(w,M,1),L&&(go(p),u.g[g].length==0&&(delete u.g[g],u.h--))}}function Vc(u,p,g,w){for(var M=0;M<u.length;++M){var L=u[M];if(!L.da&&L.listener==p&&L.capture==!!g&&L.ha==w)return M}return-1}var Fc="closure_lm_"+(1e6*Math.random()|0),Bc={};function ih(u,p,g,w,M){if(Array.isArray(p)){for(var L=0;L<p.length;L++)ih(u,p[L],g,w,M);return null}return g=ah(g),u&&u[mo]?u.K(p,g,l(w)?!!w.capture:!1,M):_b(u,p,g,!1,w,M)}function _b(u,p,g,w,M,L){if(!p)throw Error("Invalid event type");var $=l(M)?!!M.capture:!!M,gt=Uc(u);if(gt||(u[Fc]=gt=new _o(u)),g=gt.add(p,g,w,$,L),g.proxy)return g;if(w=yb(),g.proxy=w,w.src=u,w.listener=g,u.addEventListener)cn||(M=$),M===void 0&&(M=!1),u.addEventListener(p.toString(),w,M);else if(u.attachEvent)u.attachEvent(oh(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function yb(){function u(g){return p.call(u.src,u.listener,g)}const p=vb;return u}function rh(u,p,g,w,M){if(Array.isArray(p))for(var L=0;L<p.length;L++)rh(u,p[L],g,w,M);else w=l(w)?!!w.capture:!!w,g=ah(g),u&&u[mo]?(u=u.i,p=String(p).toString(),p in u.g&&(L=u.g[p],g=Vc(L,g,w,M),-1<g&&(go(L[g]),Array.prototype.splice.call(L,g,1),L.length==0&&(delete u.g[p],u.h--)))):u&&(u=Uc(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Vc(p,g,w,M)),(g=-1<u?p[u]:null)&&$c(g))}function $c(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[mo])Lc(p.i,u);else{var g=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(g,w,u.capture):p.detachEvent?p.detachEvent(oh(g),w):p.addListener&&p.removeListener&&p.removeListener(w),(g=Uc(p))?(Lc(g,u),g.h==0&&(g.src=null,p[Fc]=null)):go(u)}}}function oh(u){return u in Bc?Bc[u]:Bc[u]="on"+u}function vb(u,p){if(u.da)u=!0;else{p=new Me(p,this);var g=u.listener,w=u.ha||u.src;u.fa&&$c(u),u=g.call(w,p)}return u}function Uc(u){return u=u[Fc],u instanceof _o?u:null}var jc="__closure_events_fn_"+(1e9*Math.random()>>>0);function ah(u){return typeof u=="function"?u:(u[jc]||(u[jc]=function(p){return u.handleEvent(p)}),u[jc])}function re(){_e.call(this),this.i=new _o(this),this.M=this,this.F=null}_(re,_e),re.prototype[mo]=!0,re.prototype.removeEventListener=function(u,p,g,w){rh(this,u,p,g,w)};function ye(u,p){var g,w=u.F;if(w)for(g=[];w;w=w.F)g.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new Ct(p,u);else if(p instanceof Ct)p.target=p.target||u;else{var M=p;p=new Ct(w,u),A(p,M)}if(M=!0,g)for(var L=g.length-1;0<=L;L--){var $=p.g=g[L];M=yo($,w,!0,p)&&M}if($=p.g=u,M=yo($,w,!0,p)&&M,M=yo($,w,!1,p)&&M,g)for(L=0;L<g.length;L++)$=p.g=g[L],M=yo($,w,!1,p)&&M}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var g=u.g[p],w=0;w<g.length;w++)go(g[w]);delete u.g[p],u.h--}}this.F=null},re.prototype.K=function(u,p,g,w){return this.i.add(String(u),p,!1,g,w)},re.prototype.L=function(u,p,g,w){return this.i.add(String(u),p,!0,g,w)};function yo(u,p,g,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var M=!0,L=0;L<p.length;++L){var $=p[L];if($&&!$.da&&$.capture==g){var gt=$.listener,Jt=$.ha||$.src;$.fa&&Lc(u.i,$),M=gt.call(Jt,w)!==!1&&M}}return M&&!w.defaultPrevented}function ch(u,p,g){if(typeof u=="function")g&&(u=f(u,g));else if(u&&typeof u.handleEvent=="function")u=f(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function lh(u){u.g=ch(()=>{u.g=null,u.i&&(u.i=!1,lh(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class bb extends _e{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:lh(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Di(u){_e.call(this),this.h=u,this.g={}}_(Di,_e);var uh=[];function dh(u){D(u.g,function(p,g){this.g.hasOwnProperty(g)&&$c(p)},u),u.g={}}Di.prototype.N=function(){Di.aa.N.call(this),dh(this)},Di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zc=a.JSON.stringify,wb=a.JSON.parse,xb=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Hc(){}Hc.prototype.h=null;function hh(u){return u.h||(u.h=u.i())}function fh(){}var Oi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wc(){Ct.call(this,"d")}_(Wc,Ct);function qc(){Ct.call(this,"c")}_(qc,Ct);var ls={},ph=null;function vo(){return ph=ph||new re}ls.La="serverreachability";function mh(u){Ct.call(this,ls.La,u)}_(mh,Ct);function Mi(u){const p=vo();ye(p,new mh(p))}ls.STAT_EVENT="statevent";function gh(u,p){Ct.call(this,ls.STAT_EVENT,u),this.stat=p}_(gh,Ct);function ve(u){const p=vo();ye(p,new gh(p,u))}ls.Ma="timingevent";function _h(u,p){Ct.call(this,ls.Ma,u),this.size=p}_(_h,Ct);function Ni(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function Li(){this.g=!0}Li.prototype.xa=function(){this.g=!1};function Eb(u,p,g,w,M,L){u.info(function(){if(u.g)if(L)for(var $="",gt=L.split("&"),Jt=0;Jt<gt.length;Jt++){var ot=gt[Jt].split("=");if(1<ot.length){var oe=ot[0];ot=ot[1];var ae=oe.split("_");$=2<=ae.length&&ae[1]=="type"?$+(oe+"="+ot+"&"):$+(oe+"=redacted&")}}else $=null;else $=L;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+p+`
`+g+`
`+$})}function Tb(u,p,g,w,M,L,$){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+p+`
`+g+`
`+L+" "+$})}function qs(u,p,g,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Ab(u,g)+(w?" "+w:"")})}function Ib(u,p){u.info(function(){return"TIMEOUT: "+p})}Li.prototype.info=function(){};function Ab(u,p){if(!u.g)return p;if(!p)return null;try{var g=JSON.parse(p);if(g){for(u=0;u<g.length;u++)if(Array.isArray(g[u])){var w=g[u];if(!(2>w.length)){var M=w[1];if(Array.isArray(M)&&!(1>M.length)){var L=M[0];if(L!="noop"&&L!="stop"&&L!="close")for(var $=1;$<M.length;$++)M[$]=""}}}}return zc(g)}catch{return p}}var bo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gc;function wo(){}_(wo,Hc),wo.prototype.g=function(){return new XMLHttpRequest},wo.prototype.i=function(){return{}},Gc=new wo;function Cn(u,p,g,w){this.j=u,this.i=p,this.l=g,this.R=w||1,this.U=new Di(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vh}function vh(){this.i=null,this.g="",this.h=!1}var bh={},Yc={};function Kc(u,p,g){u.L=1,u.v=Io(un(p)),u.m=g,u.P=!0,wh(u,null)}function wh(u,p){u.F=Date.now(),xo(u),u.A=un(u.v);var g=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Nh(g.i,"t",w),u.C=0,g=u.j.J,u.h=new vh,u.g=Zh(u.j,g?p:null,!u.m),0<u.O&&(u.M=new bb(f(u.Y,u,u.g),u.O)),p=u.U,g=u.g,w=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(uh[0]=M.toString()),M=uh);for(var L=0;L<M.length;L++){var $=ih(g,M[L],w||p.handleEvent,!1,p.h||p);if(!$)break;p.g[$.key]=$}p=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Mi(),Eb(u.i,u.u,u.A,u.l,u.R,u.m)}Cn.prototype.ca=function(u){u=u.target;const p=this.M;p&&dn(u)==3?p.j():this.Y(u)},Cn.prototype.Y=function(u){try{if(u==this.g)t:{const ae=dn(this.g);var p=this.g.Ba();const Ks=this.g.Z();if(!(3>ae)&&(ae!=3||this.g&&(this.h.h||this.g.oa()||jh(this.g)))){this.J||ae!=4||p==7||(p==8||0>=Ks?Mi(3):Mi(2)),Qc(this);var g=this.g.Z();this.X=g;e:if(xh(this)){var w=jh(this.g);u="";var M=w.length,L=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){us(this),Vi(this);var $="";break e}this.h.i=new a.TextDecoder}for(p=0;p<M;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(L&&p==M-1)});w.length=0,this.h.g+=u,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=g==200,Tb(this.i,this.u,this.A,this.l,this.R,ae,g),this.o){if(this.T&&!this.K){e:{if(this.g){var gt,Jt=this.g;if((gt=Jt.g?Jt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(gt)){var ot=gt;break e}}ot=null}if(g=ot)qs(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xc(this,g);else{this.o=!1,this.s=3,ve(12),us(this),Vi(this);break t}}if(this.P){g=!0;let Ne;for(;!this.J&&this.C<$.length;)if(Ne=kb(this,$),Ne==Yc){ae==4&&(this.s=4,ve(14),g=!1),qs(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==bh){this.s=4,ve(15),qs(this.i,this.l,$,"[Invalid Chunk]"),g=!1;break}else qs(this.i,this.l,Ne,null),Xc(this,Ne);if(xh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||$.length!=0||this.h.h||(this.s=1,ve(16),g=!1),this.o=this.o&&g,!g)qs(this.i,this.l,$,"[Invalid Chunked Response]"),us(this),Vi(this);else if(0<$.length&&!this.W){this.W=!0;var oe=this.j;oe.g==this&&oe.ba&&!oe.M&&(oe.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),sl(oe),oe.M=!0,ve(11))}}else qs(this.i,this.l,$,null),Xc(this,$);ae==4&&us(this),this.o&&!this.J&&(ae==4?Kh(this.j,this):(this.o=!1,xo(this)))}else Hb(this.g),g==400&&0<$.indexOf("Unknown SID")?(this.s=3,ve(12)):(this.s=0,ve(13)),us(this),Vi(this)}}}catch{}finally{}};function xh(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function kb(u,p){var g=u.C,w=p.indexOf(`
`,g);return w==-1?Yc:(g=Number(p.substring(g,w)),isNaN(g)?bh:(w+=1,w+g>p.length?Yc:(p=p.slice(w,w+g),u.C=w+g,p)))}Cn.prototype.cancel=function(){this.J=!0,us(this)};function xo(u){u.S=Date.now()+u.I,Eh(u,u.I)}function Eh(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Ni(f(u.ba,u),p)}function Qc(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Cn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Ib(this.i,this.A),this.L!=2&&(Mi(),ve(17)),us(this),this.s=2,Vi(this)):Eh(this,this.S-u)};function Vi(u){u.j.G==0||u.J||Kh(u.j,u)}function us(u){Qc(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,dh(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Xc(u,p){try{var g=u.j;if(g.G!=0&&(g.g==u||Jc(g.h,u))){if(!u.K&&Jc(g.h,u)&&g.G==3){try{var w=g.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){t:if(!g.u){if(g.g)if(g.g.F+3e3<u.F)Co(g),Po(g);else break t;nl(g),ve(18)}}else g.za=M[1],0<g.za-g.T&&37500>M[2]&&g.F&&g.v==0&&!g.C&&(g.C=Ni(f(g.Za,g),6e3));if(1>=Ah(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else hs(g,11)}else if((u.K||g.g==u)&&Co(g),!I(p))for(M=g.Da.g.parse(p),p=0;p<M.length;p++){let ot=M[p];if(g.T=ot[0],ot=ot[1],g.G==2)if(ot[0]=="c"){g.K=ot[1],g.ia=ot[2];const oe=ot[3];oe!=null&&(g.la=oe,g.j.info("VER="+g.la));const ae=ot[4];ae!=null&&(g.Aa=ae,g.j.info("SVER="+g.Aa));const Ks=ot[5];Ks!=null&&typeof Ks=="number"&&0<Ks&&(w=1.5*Ks,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const Ne=u.g;if(Ne){const Oo=Ne.g?Ne.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oo){var L=w.h;L.g||Oo.indexOf("spdy")==-1&&Oo.indexOf("quic")==-1&&Oo.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Zc(L,L.h),L.h=null))}if(w.D){const il=Ne.g?Ne.g.getResponseHeader("X-HTTP-Session-Id"):null;il&&(w.ya=il,wt(w.I,w.D,il))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-u.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var $=u;if(w.qa=Jh(w,w.J?w.ia:null,w.W),$.K){kh(w.h,$);var gt=$,Jt=w.L;Jt&&(gt.I=Jt),gt.B&&(Qc(gt),xo(gt)),w.g=$}else Gh(w);0<g.i.length&&So(g)}else ot[0]!="stop"&&ot[0]!="close"||hs(g,7);else g.G==3&&(ot[0]=="stop"||ot[0]=="close"?ot[0]=="stop"?hs(g,7):el(g):ot[0]!="noop"&&g.l&&g.l.ta(ot),g.v=0)}}Mi(4)}catch{}}var Rb=class{constructor(u,p){this.g=u,this.map=p}};function Th(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ih(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ah(u){return u.h?1:u.g?u.g.size:0}function Jc(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Zc(u,p){u.g?u.g.add(p):u.h=p}function kh(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Th.prototype.cancel=function(){if(this.i=Rh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Rh(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const g of u.g.values())p=p.concat(g.D);return p}return v(u.i)}function Pb(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(c(u)){for(var p=[],g=u.length,w=0;w<g;w++)p.push(u[w]);return p}p=[],g=0;for(w in u)p[g++]=u[w];return p}function Sb(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(c(u)||typeof u=="string"){var p=[];u=u.length;for(var g=0;g<u;g++)p.push(g);return p}p=[],g=0;for(const w in u)p[g++]=w;return p}}}function Ph(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(c(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var g=Sb(u),w=Pb(u),M=w.length,L=0;L<M;L++)p.call(void 0,w[L],g&&g[L],u)}var Sh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cb(u,p){if(u){u=u.split("&");for(var g=0;g<u.length;g++){var w=u[g].indexOf("="),M=null;if(0<=w){var L=u[g].substring(0,w);M=u[g].substring(w+1)}else L=u[g];p(L,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function ds(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ds){this.h=u.h,Eo(this,u.j),this.o=u.o,this.g=u.g,To(this,u.s),this.l=u.l;var p=u.i,g=new $i;g.i=p.i,p.g&&(g.g=new Map(p.g),g.h=p.h),Ch(this,g),this.m=u.m}else u&&(p=String(u).match(Sh))?(this.h=!1,Eo(this,p[1]||"",!0),this.o=Fi(p[2]||""),this.g=Fi(p[3]||"",!0),To(this,p[4]),this.l=Fi(p[5]||"",!0),Ch(this,p[6]||"",!0),this.m=Fi(p[7]||"")):(this.h=!1,this.i=new $i(null,this.h))}ds.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Bi(p,Dh,!0),":");var g=this.g;return(g||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Bi(p,Dh,!0),"@"),u.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&u.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&u.push("/"),u.push(Bi(g,g.charAt(0)=="/"?Mb:Ob,!0))),(g=this.i.toString())&&u.push("?",g),(g=this.m)&&u.push("#",Bi(g,Lb)),u.join("")};function un(u){return new ds(u)}function Eo(u,p,g){u.j=g?Fi(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function To(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Ch(u,p,g){p instanceof $i?(u.i=p,Vb(u.i,u.h)):(g||(p=Bi(p,Nb)),u.i=new $i(p,u.h))}function wt(u,p,g){u.i.set(p,g)}function Io(u){return wt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Fi(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Bi(u,p,g){return typeof u=="string"?(u=encodeURI(u).replace(p,Db),g&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Db(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Dh=/[#\/\?@]/g,Ob=/[#\?:]/g,Mb=/[#\?]/g,Nb=/[#\?@]/g,Lb=/#/g;function $i(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Dn(u){u.g||(u.g=new Map,u.h=0,u.i&&Cb(u.i,function(p,g){u.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}n=$i.prototype,n.add=function(u,p){Dn(this),this.i=null,u=Gs(this,u);var g=this.g.get(u);return g||this.g.set(u,g=[]),g.push(p),this.h+=1,this};function Oh(u,p){Dn(u),p=Gs(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Mh(u,p){return Dn(u),p=Gs(u,p),u.g.has(p)}n.forEach=function(u,p){Dn(this),this.g.forEach(function(g,w){g.forEach(function(M){u.call(p,M,w,this)},this)},this)},n.na=function(){Dn(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),g=[];for(let w=0;w<p.length;w++){const M=u[w];for(let L=0;L<M.length;L++)g.push(p[w])}return g},n.V=function(u){Dn(this);let p=[];if(typeof u=="string")Mh(this,u)&&(p=p.concat(this.g.get(Gs(this,u))));else{u=Array.from(this.g.values());for(let g=0;g<u.length;g++)p=p.concat(u[g])}return p},n.set=function(u,p){return Dn(this),this.i=null,u=Gs(this,u),Mh(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Nh(u,p,g){Oh(u,p),0<g.length&&(u.i=null,u.g.set(Gs(u,p),v(g)),u.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var g=0;g<p.length;g++){var w=p[g];const L=encodeURIComponent(String(w)),$=this.V(w);for(w=0;w<$.length;w++){var M=L;$[w]!==""&&(M+="="+encodeURIComponent(String($[w]))),u.push(M)}}return this.i=u.join("&")};function Gs(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Vb(u,p){p&&!u.j&&(Dn(u),u.i=null,u.g.forEach(function(g,w){var M=w.toLowerCase();w!=M&&(Oh(this,w),Nh(this,M,g))},u)),u.j=p}function Fb(u,p){const g=new Li;if(a.Image){const w=new Image;w.onload=m(On,g,"TestLoadImage: loaded",!0,p,w),w.onerror=m(On,g,"TestLoadImage: error",!1,p,w),w.onabort=m(On,g,"TestLoadImage: abort",!1,p,w),w.ontimeout=m(On,g,"TestLoadImage: timeout",!1,p,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function Bb(u,p){const g=new Li,w=new AbortController,M=setTimeout(()=>{w.abort(),On(g,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(L=>{clearTimeout(M),L.ok?On(g,"TestPingServer: ok",!0,p):On(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),On(g,"TestPingServer: error",!1,p)})}function On(u,p,g,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(g)}catch{}}function $b(){this.g=new xb}function Ub(u,p,g){const w=g||"";try{Ph(u,function(M,L){let $=M;l(M)&&($=zc(M)),p.push(w+L+"="+encodeURIComponent($))})}catch(M){throw p.push(w+"type="+encodeURIComponent("_badmap")),M}}function Ao(u){this.l=u.Ub||null,this.j=u.eb||!1}_(Ao,Hc),Ao.prototype.g=function(){return new ko(this.l,this.j)},Ao.prototype.i=function(u){return function(){return u}}({});function ko(u,p){re.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(ko,re),n=ko.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,ji(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ui(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ji(this)),this.g&&(this.readyState=3,ji(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lh(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lh(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Ui(this):ji(this),this.readyState==3&&Lh(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Ui(this))},n.Qa=function(u){this.g&&(this.response=u,Ui(this))},n.ga=function(){this.g&&Ui(this)};function Ui(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ji(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,u.push(g[0]+": "+g[1]),g=p.next();return u.join(`\r
`)};function ji(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ko.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Vh(u){let p="";return D(u,function(g,w){p+=w,p+=":",p+=g,p+=`\r
`}),p}function tl(u,p,g){t:{for(w in g){var w=!1;break t}w=!0}w||(g=Vh(g),typeof u=="string"?g!=null&&encodeURIComponent(String(g)):wt(u,p,g))}function Dt(u){re.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(Dt,re);var jb=/^https?$/i,zb=["POST","PUT"];n=Dt.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gc.g(),this.v=this.o?hh(this.o):hh(Gc),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(L){Fh(this,L);return}if(u=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)g.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const L of w.keys())g.set(L,w.get(L));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),M=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(zb,p,void 0))||w||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of g)this.g.setRequestHeader(L,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Uh(this),this.u=!0,this.g.send(u),this.u=!1}catch(L){Fh(this,L)}};function Fh(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Bh(u),Ro(u)}function Bh(u){u.A||(u.A=!0,ye(u,"complete"),ye(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ye(this,"complete"),ye(this,"abort"),Ro(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ro(this,!0)),Dt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?$h(this):this.bb())},n.bb=function(){$h(this)};function $h(u){if(u.h&&typeof o<"u"&&(!u.v[1]||dn(u)!=4||u.Z()!=2)){if(u.u&&dn(u)==4)ch(u.Ea,0,u);else if(ye(u,"readystatechange"),dn(u)==4){u.h=!1;try{const $=u.Z();t:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var g;if(!(g=p)){var w;if(w=$===0){var M=String(u.D).match(Sh)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),w=!jb.test(M?M.toLowerCase():"")}g=w}if(g)ye(u,"complete"),ye(u,"success");else{u.m=6;try{var L=2<dn(u)?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.Z()+"]",Bh(u)}}finally{Ro(u)}}}}function Ro(u,p){if(u.g){Uh(u);const g=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||ye(u,"ready");try{g.onreadystatechange=w}catch{}}}function Uh(u){u.I&&(a.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function dn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),wb(p)}};function jh(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Hb(u){const p={};u=(u.g&&2<=dn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(I(u[w]))continue;var g=R(u[w]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=p[M]||[];p[M]=L,L.push(g)}E(p,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zi(u,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[u]||p}function zh(u){this.Aa=0,this.i=[],this.j=new Li,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zi("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zi("baseRetryDelayMs",5e3,u),this.cb=zi("retryDelaySeedMs",1e4,u),this.Wa=zi("forwardChannelMaxRetries",2,u),this.wa=zi("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Th(u&&u.concurrentRequestLimit),this.Da=new $b,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=zh.prototype,n.la=8,n.G=1,n.connect=function(u,p,g,w){ve(0),this.W=u,this.H=p||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=Jh(this,null,this.W),So(this)};function el(u){if(Hh(u),u.G==3){var p=u.U++,g=un(u.I);if(wt(g,"SID",u.K),wt(g,"RID",p),wt(g,"TYPE","terminate"),Hi(u,g),p=new Cn(u,u.j,p),p.L=2,p.v=Io(un(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=p.v,g=!0),g||(p.g=Zh(p.j,null),p.g.ea(p.v)),p.F=Date.now(),xo(p)}Xh(u)}function Po(u){u.g&&(sl(u),u.g.cancel(),u.g=null)}function Hh(u){Po(u),u.u&&(a.clearTimeout(u.u),u.u=null),Co(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function So(u){if(!Ih(u.h)&&!u.s){u.s=!0;var p=u.Ga;mt||an(),Xt||(mt(),Xt=!0),zt.add(p,u),u.B=0}}function Wb(u,p){return Ah(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Ni(f(u.Ga,u,p),Qh(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new Cn(this,this.j,u);let L=this.o;if(this.S&&(L?(L=y(L),A(L,this.S)):L=this.S),this.m!==null||this.O||(M.H=L,L=null),this.P)t:{for(var p=0,g=0;g<this.i.length;g++){e:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break e}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=g;break t}if(p===4096||g===this.i.length-1){p=g+1;break t}}p=1e3}else p=1e3;p=qh(this,M,p),g=un(this.I),wt(g,"RID",u),wt(g,"CVER",22),this.D&&wt(g,"X-HTTP-Session-Id",this.D),Hi(this,g),L&&(this.O?p="headers="+encodeURIComponent(String(Vh(L)))+"&"+p:this.m&&tl(g,this.m,L)),Zc(this.h,M),this.Ua&&wt(g,"TYPE","init"),this.P?(wt(g,"$req",p),wt(g,"SID","null"),M.T=!0,Kc(M,g,null)):Kc(M,g,p),this.G=2}}else this.G==3&&(u?Wh(this,u):this.i.length==0||Ih(this.h)||Wh(this))};function Wh(u,p){var g;p?g=p.l:g=u.U++;const w=un(u.I);wt(w,"SID",u.K),wt(w,"RID",g),wt(w,"AID",u.T),Hi(u,w),u.m&&u.o&&tl(w,u.m,u.o),g=new Cn(u,u.j,g,u.B+1),u.m===null&&(g.H=u.o),p&&(u.i=p.D.concat(u.i)),p=qh(u,g,1e3),g.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Zc(u.h,g),Kc(g,w,p)}function Hi(u,p){u.H&&D(u.H,function(g,w){wt(p,w,g)}),u.l&&Ph({},function(g,w){wt(p,w,g)})}function qh(u,p,g){g=Math.min(u.i.length,g);var w=u.l?f(u.l.Na,u.l,u):null;t:{var M=u.i;let L=-1;for(;;){const $=["count="+g];L==-1?0<g?(L=M[0].g,$.push("ofs="+L)):L=0:$.push("ofs="+L);let gt=!0;for(let Jt=0;Jt<g;Jt++){let ot=M[Jt].g;const oe=M[Jt].map;if(ot-=L,0>ot)L=Math.max(0,M[Jt].g-100),gt=!1;else try{Ub(oe,$,"req"+ot+"_")}catch{w&&w(oe)}}if(gt){w=$.join("&");break t}}}return u=u.i.splice(0,g),p.D=u,w}function Gh(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;mt||an(),Xt||(mt(),Xt=!0),zt.add(p,u),u.v=0}}function nl(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Ni(f(u.Fa,u),Qh(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Yh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Ni(f(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ve(10),Po(this),Yh(this))};function sl(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Yh(u){u.g=new Cn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=un(u.qa);wt(p,"RID","rpc"),wt(p,"SID",u.K),wt(p,"AID",u.T),wt(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&wt(p,"TO",u.ja),wt(p,"TYPE","xmlhttp"),Hi(u,p),u.m&&u.o&&tl(p,u.m,u.o),u.L&&(u.g.I=u.L);var g=u.g;u=u.ia,g.L=1,g.v=Io(un(p)),g.m=null,g.P=!0,wh(g,u)}n.Za=function(){this.C!=null&&(this.C=null,Po(this),nl(this),ve(19))};function Co(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Kh(u,p){var g=null;if(u.g==p){Co(u),sl(u),u.g=null;var w=2}else if(Jc(u.h,p))g=p.D,kh(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){g=p.m?p.m.length:0,p=Date.now()-p.F;var M=u.B;w=vo(),ye(w,new _h(w,g)),So(u)}else Gh(u);else if(M=p.s,M==3||M==0&&0<p.X||!(w==1&&Wb(u,p)||w==2&&nl(u)))switch(g&&0<g.length&&(p=u.h,p.i=p.i.concat(g)),M){case 1:hs(u,5);break;case 4:hs(u,10);break;case 3:hs(u,6);break;default:hs(u,2)}}}function Qh(u,p){let g=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(g*=2),g*p}function hs(u,p){if(u.j.info("Error code "+p),p==2){var g=f(u.fb,u),w=u.Xa;const M=!w;w=new ds(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Eo(w,"https"),Io(w),M?Fb(w.toString(),g):Bb(w.toString(),g)}else ve(2);u.G=0,u.l&&u.l.sa(p),Xh(u),Hh(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function Xh(u){if(u.G=0,u.ka=[],u.l){const p=Rh(u.h);(p.length!=0||u.i.length!=0)&&(b(u.ka,p),b(u.ka,u.i),u.h.i.length=0,v(u.i),u.i.length=0),u.l.ra()}}function Jh(u,p,g){var w=g instanceof ds?un(g):new ds(g);if(w.g!="")p&&(w.g=p+"."+w.g),To(w,w.s);else{var M=a.location;w=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;var L=new ds(null);w&&Eo(L,w),p&&(L.g=p),M&&To(L,M),g&&(L.l=g),w=L}return g=u.D,p=u.ya,g&&p&&wt(w,g,p),wt(w,"VER",u.la),Hi(u,w),w}function Zh(u,p,g){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Dt(new Ao({eb:g})):new Dt(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function tf(){}n=tf.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Do(){}Do.prototype.g=function(u,p){return new ke(u,p)};function ke(u,p){re.call(this),this.g=new zh(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!I(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!I(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Ys(this)}_(ke,re),ke.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ke.prototype.close=function(){el(this.g)},ke.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var g={};g.__data__=u,u=g}else this.u&&(g={},g.__data__=zc(u),u=g);p.i.push(new Rb(p.Ya++,u)),p.G==3&&So(p)},ke.prototype.N=function(){this.g.l=null,delete this.j,el(this.g),delete this.g,ke.aa.N.call(this)};function ef(u){Wc.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){t:{for(const g in p){u=g;break t}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}_(ef,Wc);function nf(){qc.call(this),this.status=1}_(nf,qc);function Ys(u){this.g=u}_(Ys,tf),Ys.prototype.ua=function(){ye(this.g,"a")},Ys.prototype.ta=function(u){ye(this.g,new ef(u))},Ys.prototype.sa=function(u){ye(this.g,new nf)},Ys.prototype.ra=function(){ye(this.g,"b")},Do.prototype.createWebChannel=Do.prototype.g,ke.prototype.send=ke.prototype.o,ke.prototype.open=ke.prototype.m,ke.prototype.close=ke.prototype.close,Ag=function(){return new Do},Ig=function(){return vo()},Tg=ls,ql={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bo.NO_ERROR=0,bo.TIMEOUT=8,bo.HTTP_ERROR=6,ia=bo,yh.COMPLETE="complete",Eg=yh,fh.EventType=Oi,Oi.OPEN="a",Oi.CLOSE="b",Oi.ERROR="c",Oi.MESSAGE="d",re.prototype.listen=re.prototype.K,ar=fh,Dt.prototype.listenOnce=Dt.prototype.L,Dt.prototype.getLastError=Dt.prototype.Ka,Dt.prototype.getLastErrorCode=Dt.prototype.Ba,Dt.prototype.getStatus=Dt.prototype.Z,Dt.prototype.getResponseJson=Dt.prototype.Oa,Dt.prototype.getResponseText=Dt.prototype.oa,Dt.prototype.send=Dt.prototype.ea,Dt.prototype.setWithCredentials=Dt.prototype.Ha,xg=Dt}).apply(typeof Mo<"u"?Mo:typeof self<"u"?self:typeof window<"u"?window:{});const mf="@firebase/firestore";/**
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
 */let Ii="10.14.0";/**
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
 */const Ss=new Lu("@firebase/firestore");function Wi(){return Ss.logLevel}function j(n,...t){if(Ss.logLevel<=it.DEBUG){const e=t.map(Bu);Ss.debug(`Firestore (${Ii}): ${n}`,...e)}}function kn(n,...t){if(Ss.logLevel<=it.ERROR){const e=t.map(Bu);Ss.error(`Firestore (${Ii}): ${n}`,...e)}}function fi(n,...t){if(Ss.logLevel<=it.WARN){const e=t.map(Bu);Ss.warn(`Firestore (${Ii}): ${n}`,...e)}}function Bu(n){if(typeof n=="string")return n;try{/**
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
 */function W(n="Unexpected state"){const t=`FIRESTORE (${Ii}) INTERNAL ASSERTION FAILED: `+n;throw kn(t),new Error(t)}function ft(n,t){n||W()}function K(n,t){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends on{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kg{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class kw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(de.UNAUTHENTICATED))}shutdown(){}}class Rw{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Pw{constructor(t){this.t=t,this.currentUser=de.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ft(this.o===void 0);let s=this.i;const i=c=>this.i!==s?(s=this.i,e(c)):Promise.resolve();let r=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Tn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Tn)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ft(typeof s.accessToken=="string"),new kg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ft(t===null||typeof t=="string"),new de(t)}}class Sw{constructor(t,e,s){this.l=t,this.h=e,this.P=s,this.type="FirstParty",this.user=de.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Cw{constructor(t,e,s){this.l=t,this.h=e,this.P=s}getToken(){return Promise.resolve(new Sw(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(de.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dw{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ow{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){ft(this.o===void 0);const s=r=>{r.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ft(typeof e.token=="string"),this.R=e.token,new Dw(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Rg{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Mw(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<e&&(s+=t.charAt(i[r]%t.length))}return s}}function at(n,t){return n<t?-1:n>t?1:0}function pi(n,t,e){return n.length===t.length&&n.every((s,i)=>e(s,t[i]))}/**
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
 */class jt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new U(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new U(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new U(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new U(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return jt.fromMillis(Date.now())}static fromDate(t){return jt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*e));return new jt(e,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?at(this.nanoseconds,t.nanoseconds):at(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new q(t)}static min(){return new q(new jt(0,0))}static max(){return new q(new jt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Sr{constructor(t,e,s){e===void 0?e=0:e>t.length&&W(),s===void 0?s=t.length-e:s>t.length-e&&W(),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return Sr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Sr?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let i=0;i<s;i++){const r=t.get(i),o=e.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Et extends Sr{construct(t,e,s){return new Et(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new U(V.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(i=>i.length>0))}return new Et(e)}static emptyPath(){return new Et([])}}const Nw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ee extends Sr{construct(t,e,s){return new ee(t,e,s)}static isValidIdentifier(t){return Nw.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ee.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ee(["__name__"])}static fromServerFormat(t){const e=[];let s="",i=0;const r=()=>{if(s.length===0)throw new U(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new U(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new U(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ee(e)}static emptyPath(){return new ee([])}}/**
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
 */class z{constructor(t){this.path=t}static fromPath(t){return new z(Et.fromString(t))}static fromName(t){return new z(Et.fromString(t).popFirst(5))}static empty(){return new z(Et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new z(new Et(t.slice()))}}function Lw(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(s===1e9?new jt(e+1,0):new jt(e,s));return new ts(i,z.empty(),t)}function Vw(n){return new ts(n.readTime,n.key,-1)}class ts{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new ts(q.min(),z.empty(),-1)}static max(){return new ts(q.max(),z.empty(),-1)}}function Fw(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=z.comparator(n.documentKey,t.documentKey),e!==0?e:at(n.largestBatchId,t.largestBatchId))}/**
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
 */const Bw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $w{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Xr(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==Bw)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new B((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(e,r).next(s,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof B?e:B.resolve(e)}catch(e){return B.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):B.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):B.reject(e)}static resolve(t){return new B((e,s)=>{e(t)})}static reject(t){return new B((e,s)=>{s(t)})}static waitFor(t){return new B((e,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&e()},c=>s(c))}),o=!0,r===i&&e()})}static or(t){let e=B.resolve(!1);for(const s of t)e=e.next(i=>i?B.resolve(i):s());return e}static forEach(t,e){const s=[];return t.forEach((i,r)=>{s.push(e.call(this,i,r))}),this.waitFor(s)}static mapArray(t,e){return new B((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;e(t[l]).next(d=>{o[l]=d,++a,a===r&&s(o)},d=>i(d))}})}static doWhile(t,e){return new B((s,i)=>{const r=()=>{t()===!0?e().next(()=>{r()},i):s()};r()})}}function Uw(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Jr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class $u{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ie(s),this.se=s=>e.writeSequenceNumber(s))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}$u.oe=-1;function rc(n){return n==null}function Ra(n){return n===0&&1/n==-1/0}function jw(n){return typeof n=="number"&&Number.isInteger(n)&&!Ra(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function gf(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Fs(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Pg(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Pt{constructor(t,e){this.comparator=t,this.root=e||te.EMPTY}insert(t,e){return new Pt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,te.BLACK,null,null))}remove(t){return new Pt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,te.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return e+s.left.size;i<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new No(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new No(this.root,t,this.comparator,!1)}getReverseIterator(){return new No(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new No(this.root,t,this.comparator,!0)}}class No{constructor(t,e,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?s(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class te{constructor(t,e,s,i,r){this.key=t,this.value=e,this.color=s??te.RED,this.left=i??te.EMPTY,this.right=r??te.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,i,r){return new te(t??this.key,e??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,s),null):r===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return te.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return te.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,te.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const t=this.left.check();if(t!==this.right.check())throw W();return t+(this.isRed()?0:1)}}te.EMPTY=null,te.RED=!0,te.BLACK=!1;te.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,s,i,r){return this}insert(t,e,s){return new te(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ne{constructor(t){this.comparator=t,this.data=new Pt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new _f(this.data.getIterator())}getIteratorFrom(t){return new _f(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof ne)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ne(this.comparator);return e.data=t,e}}class _f{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pe{constructor(t){this.fields=t,t.sort(ee.comparator)}static empty(){return new Pe([])}unionWith(t){let e=new ne(ee.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new Pe(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return pi(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
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
 */class Sg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class se{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Sg("Invalid base64 string: "+r):r}}(t);return new se(e)}static fromUint8Array(t){const e=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(t);return new se(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return at(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}se.EMPTY_BYTE_STRING=new se("");const zw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function es(n){if(ft(!!n),typeof n=="string"){let t=0;const e=zw.exec(n);if(ft(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Ft(n.seconds),nanos:Ft(n.nanos)}}function Ft(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Cs(n){return typeof n=="string"?se.fromBase64String(n):se.fromUint8Array(n)}/**
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
 */function Uu(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ju(n){const t=n.mapValue.fields.__previous_value__;return Uu(t)?ju(t):t}function Cr(n){const t=es(n.mapValue.fields.__local_write_time__.timestampValue);return new jt(t.seconds,t.nanos)}/**
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
 */class Hw{constructor(t,e,s,i,r,o,a,c,l){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Dr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Dr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Dr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Lo={mapValue:{}};function Ds(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Uu(n)?4:qw(n)?9007199254740991:Ww(n)?10:11:W()}function nn(n,t){if(n===t)return!0;const e=Ds(n);if(e!==Ds(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Cr(n).isEqual(Cr(t));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=es(i.timestampValue),a=es(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,r){return Cs(i.bytesValue).isEqual(Cs(r.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,r){return Ft(i.geoPointValue.latitude)===Ft(r.geoPointValue.latitude)&&Ft(i.geoPointValue.longitude)===Ft(r.geoPointValue.longitude)}(n,t);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Ft(i.integerValue)===Ft(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Ft(i.doubleValue),a=Ft(r.doubleValue);return o===a?Ra(o)===Ra(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return pi(n.arrayValue.values||[],t.arrayValue.values||[],nn);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(gf(o)!==gf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!nn(o[c],a[c])))return!1;return!0}(n,t);default:return W()}}function Or(n,t){return(n.values||[]).find(e=>nn(e,t))!==void 0}function mi(n,t){if(n===t)return 0;const e=Ds(n),s=Ds(t);if(e!==s)return at(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return at(n.booleanValue,t.booleanValue);case 2:return function(r,o){const a=Ft(r.integerValue||r.doubleValue),c=Ft(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return yf(n.timestampValue,t.timestampValue);case 4:return yf(Cr(n),Cr(t));case 5:return at(n.stringValue,t.stringValue);case 6:return function(r,o){const a=Cs(r),c=Cs(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const d=at(a[l],c[l]);if(d!==0)return d}return at(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(r,o){const a=at(Ft(r.latitude),Ft(o.latitude));return a!==0?a:at(Ft(r.longitude),Ft(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return vf(n.arrayValue,t.arrayValue);case 10:return function(r,o){var a,c,l,d;const h=r.fields||{},f=o.fields||{},m=(a=h.value)===null||a===void 0?void 0:a.arrayValue,_=(c=f.value)===null||c===void 0?void 0:c.arrayValue,v=at(((l=m==null?void 0:m.values)===null||l===void 0?void 0:l.length)||0,((d=_==null?void 0:_.values)===null||d===void 0?void 0:d.length)||0);return v!==0?v:vf(m,_)}(n.mapValue,t.mapValue);case 11:return function(r,o){if(r===Lo.mapValue&&o===Lo.mapValue)return 0;if(r===Lo.mapValue)return 1;if(o===Lo.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),l=o.fields||{},d=Object.keys(l);c.sort(),d.sort();for(let h=0;h<c.length&&h<d.length;++h){const f=at(c[h],d[h]);if(f!==0)return f;const m=mi(a[c[h]],l[d[h]]);if(m!==0)return m}return at(c.length,d.length)}(n.mapValue,t.mapValue);default:throw W()}}function yf(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return at(n,t);const e=es(n),s=es(t),i=at(e.seconds,s.seconds);return i!==0?i:at(e.nanos,s.nanos)}function vf(n,t){const e=n.values||[],s=t.values||[];for(let i=0;i<e.length&&i<s.length;++i){const r=mi(e[i],s[i]);if(r)return r}return at(e.length,s.length)}function gi(n){return Gl(n)}function Gl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=es(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Cs(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return z.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",i=!0;for(const r of e.values||[])i?i=!1:s+=",",s+=Gl(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Gl(e.fields[o])}`;return i+"}"}(n.mapValue):W()}function bf(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Yl(n){return!!n&&"integerValue"in n}function zu(n){return!!n&&"arrayValue"in n}function wf(n){return!!n&&"nullValue"in n}function xf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ra(n){return!!n&&"mapValue"in n}function Ww(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function _r(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Fs(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=_r(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=_r(n.arrayValue.values[e]);return t}return Object.assign({},n)}function qw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ie{constructor(t){this.value=t}static empty(){return new Ie({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!ra(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=_r(e)}setAll(t){let e=ee.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,s,i),s={},i=[],e=a.popLast()}o?s[a.lastSegment()]=_r(o):i.push(a.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,s,i)}delete(t){const e=this.field(t.popLast());ra(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return nn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=e.mapValue.fields[t.get(s)];ra(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,s){Fs(e,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new Ie(_r(this.value))}}function Cg(n){const t=[];return Fs(n.fields,(e,s)=>{const i=new ee([e]);if(ra(s)){const r=Cg(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new Pe(t)}/**
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
 */class fe{constructor(t,e,s,i,r,o,a){this.key=t,this.documentType=e,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new fe(t,0,q.min(),q.min(),q.min(),Ie.empty(),0)}static newFoundDocument(t,e,s,i){return new fe(t,1,e,q.min(),s,i,0)}static newNoDocument(t,e){return new fe(t,2,e,q.min(),q.min(),Ie.empty(),0)}static newUnknownDocument(t,e){return new fe(t,3,e,q.min(),q.min(),Ie.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ie.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof fe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pa{constructor(t,e){this.position=t,this.inclusive=e}}function Ef(n,t,e){let s=0;for(let i=0;i<n.position.length;i++){const r=t[i],o=n.position[i];if(r.field.isKeyField()?s=z.comparator(z.fromName(o.referenceValue),e.key):s=mi(o,e.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Tf(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!nn(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Mr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Gw(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Dg{}class qt extends Dg{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new Kw(t,e,s):e==="array-contains"?new Jw(t,s):e==="in"?new Zw(t,s):e==="not-in"?new tx(t,s):e==="array-contains-any"?new ex(t,s):new qt(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new Qw(t,s):new Xw(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(mi(e,this.value)):e!==null&&Ds(this.value)===Ds(e)&&this.matchesComparison(mi(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $e extends Dg{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new $e(t,e)}matches(t){return Og(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Og(n){return n.op==="and"}function Mg(n){return Yw(n)&&Og(n)}function Yw(n){for(const t of n.filters)if(t instanceof $e)return!1;return!0}function Kl(n){if(n instanceof qt)return n.field.canonicalString()+n.op.toString()+gi(n.value);if(Mg(n))return n.filters.map(t=>Kl(t)).join(",");{const t=n.filters.map(e=>Kl(e)).join(",");return`${n.op}(${t})`}}function Ng(n,t){return n instanceof qt?function(s,i){return i instanceof qt&&s.op===i.op&&s.field.isEqual(i.field)&&nn(s.value,i.value)}(n,t):n instanceof $e?function(s,i){return i instanceof $e&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&Ng(o,i.filters[a]),!0):!1}(n,t):void W()}function Lg(n){return n instanceof qt?function(e){return`${e.field.canonicalString()} ${e.op} ${gi(e.value)}`}(n):n instanceof $e?function(e){return e.op.toString()+" {"+e.getFilters().map(Lg).join(" ,")+"}"}(n):"Filter"}class Kw extends qt{constructor(t,e,s){super(t,e,s),this.key=z.fromName(s.referenceValue)}matches(t){const e=z.comparator(t.key,this.key);return this.matchesComparison(e)}}class Qw extends qt{constructor(t,e){super(t,"in",e),this.keys=Vg("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Xw extends qt{constructor(t,e){super(t,"not-in",e),this.keys=Vg("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Vg(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>z.fromName(s.referenceValue))}class Jw extends qt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return zu(e)&&Or(e.arrayValue,this.value)}}class Zw extends qt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Or(this.value.arrayValue,e)}}class tx extends qt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Or(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Or(this.value.arrayValue,e)}}class ex extends qt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!zu(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>Or(this.value.arrayValue,s))}}/**
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
 */class nx{constructor(t,e=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ue=null}}function If(n,t=null,e=[],s=[],i=null,r=null,o=null){return new nx(n,t,e,s,i,r,o)}function Hu(n){const t=K(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>Kl(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),rc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>gi(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>gi(s)).join(",")),t.ue=e}return t.ue}function Wu(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Gw(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ng(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Tf(n.startAt,t.startAt)&&Tf(n.endAt,t.endAt)}function Ql(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ai{constructor(t,e=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sx(n,t,e,s,i,r,o,a){return new Ai(n,t,e,s,i,r,o,a)}function qu(n){return new Ai(n)}function Af(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Fg(n){return n.collectionGroup!==null}function yr(n){const t=K(n);if(t.ce===null){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ne(ee.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new Mr(r,s))}),e.has(ee.keyField().canonicalString())||t.ce.push(new Mr(ee.keyField(),s))}return t.ce}function Xe(n){const t=K(n);return t.le||(t.le=ix(t,yr(n))),t.le}function ix(n,t){if(n.limitType==="F")return If(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Mr(i.field,r)});const e=n.endAt?new Pa(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Pa(n.startAt.position,n.startAt.inclusive):null;return If(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function Xl(n,t){const e=n.filters.concat([t]);return new Ai(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Sa(n,t,e){return new Ai(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function oc(n,t){return Wu(Xe(n),Xe(t))&&n.limitType===t.limitType}function Bg(n){return`${Hu(Xe(n))}|lt:${n.limitType}`}function ei(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(i=>Lg(i)).join(", ")}]`),rc(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(i=>gi(i)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(i=>gi(i)).join(",")),`Target(${s})`}(Xe(n))}; limitType=${n.limitType})`}function ac(n,t){return t.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):z.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,t)&&function(s,i){for(const r of yr(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,t)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(n,t)&&function(s,i){return!(s.startAt&&!function(o,a,c){const l=Ef(o,a,c);return o.inclusive?l<=0:l<0}(s.startAt,yr(s),i)||s.endAt&&!function(o,a,c){const l=Ef(o,a,c);return o.inclusive?l>=0:l>0}(s.endAt,yr(s),i))}(n,t)}function rx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function $g(n){return(t,e)=>{let s=!1;for(const i of yr(n)){const r=ox(i,t,e);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function ox(n,t,e){const s=n.field.isKeyField()?z.comparator(t.key,e.key):function(r,o,a){const c=o.data.field(r),l=a.data.field(r);return c!==null&&l!==null?mi(c,l):W()}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return W()}}/**
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
 */class ki{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[e]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Fs(this.inner,(e,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return Pg(this.inner)}size(){return this.innerSize}}/**
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
 */const ax=new Pt(z.comparator);function Rn(){return ax}const Ug=new Pt(z.comparator);function cr(...n){let t=Ug;for(const e of n)t=t.insert(e.key,e);return t}function jg(n){let t=Ug;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function Es(){return vr()}function zg(){return vr()}function vr(){return new ki(n=>n.toString(),(n,t)=>n.isEqual(t))}const cx=new Pt(z.comparator),lx=new ne(z.comparator);function nt(...n){let t=lx;for(const e of n)t=t.add(e);return t}const ux=new ne(at);function dx(){return ux}/**
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
 */function Gu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ra(t)?"-0":t}}function Hg(n){return{integerValue:""+n}}function hx(n,t){return jw(t)?Hg(t):Gu(n,t)}/**
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
 */class cc{constructor(){this._=void 0}}function fx(n,t,e){return n instanceof Ca?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Uu(r)&&(r=ju(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(e,t):n instanceof Nr?qg(n,t):n instanceof Lr?Gg(n,t):function(i,r){const o=Wg(i,r),a=kf(o)+kf(i.Pe);return Yl(o)&&Yl(i.Pe)?Hg(a):Gu(i.serializer,a)}(n,t)}function px(n,t,e){return n instanceof Nr?qg(n,t):n instanceof Lr?Gg(n,t):e}function Wg(n,t){return n instanceof Da?function(s){return Yl(s)||function(r){return!!r&&"doubleValue"in r}(s)}(t)?t:{integerValue:0}:null}class Ca extends cc{}class Nr extends cc{constructor(t){super(),this.elements=t}}function qg(n,t){const e=Yg(t);for(const s of n.elements)e.some(i=>nn(i,s))||e.push(s);return{arrayValue:{values:e}}}class Lr extends cc{constructor(t){super(),this.elements=t}}function Gg(n,t){let e=Yg(t);for(const s of n.elements)e=e.filter(i=>!nn(i,s));return{arrayValue:{values:e}}}class Da extends cc{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function kf(n){return Ft(n.integerValue||n.doubleValue)}function Yg(n){return zu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function mx(n,t){return n.field.isEqual(t.field)&&function(s,i){return s instanceof Nr&&i instanceof Nr||s instanceof Lr&&i instanceof Lr?pi(s.elements,i.elements,nn):s instanceof Da&&i instanceof Da?nn(s.Pe,i.Pe):s instanceof Ca&&i instanceof Ca}(n.transform,t.transform)}class gx{constructor(t,e){this.version=t,this.transformResults=e}}class Oe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Oe}static exists(t){return new Oe(void 0,t)}static updateTime(t){return new Oe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function oa(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class lc{}function Kg(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Yu(n.key,Oe.none()):new Zr(n.key,n.data,Oe.none());{const e=n.data,s=Ie.empty();let i=new ne(ee.comparator);for(let r of t.fields)if(!i.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new rs(n.key,s,new Pe(i.toArray()),Oe.none())}}function _x(n,t,e){n instanceof Zr?function(i,r,o){const a=i.value.clone(),c=Pf(i.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof rs?function(i,r,o){if(!oa(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Pf(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(Qg(i)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function br(n,t,e,s){return n instanceof Zr?function(r,o,a,c){if(!oa(r.precondition,o))return a;const l=r.value.clone(),d=Sf(r.fieldTransforms,c,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,t,e,s):n instanceof rs?function(r,o,a,c){if(!oa(r.precondition,o))return a;const l=Sf(r.fieldTransforms,c,o),d=o.data;return d.setAll(Qg(r)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(n,t,e,s):function(r,o,a){return oa(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function yx(n,t){let e=null;for(const s of n.fieldTransforms){const i=t.data.field(s.field),r=Wg(s.transform,i||null);r!=null&&(e===null&&(e=Ie.empty()),e.set(s.field,r))}return e||null}function Rf(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&pi(s,i,(r,o)=>mx(r,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Zr extends lc{constructor(t,e,s,i=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class rs extends lc{constructor(t,e,s,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Qg(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function Pf(n,t,e){const s=new Map;ft(n.length===e.length);for(let i=0;i<e.length;i++){const r=n[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,px(o,a,e[i]))}return s}function Sf(n,t,e){const s=new Map;for(const i of n){const r=i.transform,o=e.data.field(i.field);s.set(i.field,fx(r,o,t))}return s}class Yu extends lc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vx extends lc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bx{constructor(t,e,s,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&_x(r,t,s[i])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=br(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=br(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=zg();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(i.key)?null:a;const c=Kg(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(q.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),nt())}isEqual(t){return this.batchId===t.batchId&&pi(this.mutations,t.mutations,(e,s)=>Rf(e,s))&&pi(this.baseMutations,t.baseMutations,(e,s)=>Rf(e,s))}}class Ku{constructor(t,e,s,i){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=i}static from(t,e,s){ft(t.mutations.length===s.length);let i=function(){return cx}();const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Ku(t,e,s,i)}}/**
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
 */var Ht,rt;function Ex(n){switch(n){default:return W();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Xg(n){if(n===void 0)return kn("GRPC error has no .code"),V.UNKNOWN;switch(n){case Ht.OK:return V.OK;case Ht.CANCELLED:return V.CANCELLED;case Ht.UNKNOWN:return V.UNKNOWN;case Ht.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ht.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ht.INTERNAL:return V.INTERNAL;case Ht.UNAVAILABLE:return V.UNAVAILABLE;case Ht.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ht.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ht.NOT_FOUND:return V.NOT_FOUND;case Ht.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ht.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ht.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ht.ABORTED:return V.ABORTED;case Ht.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ht.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ht.DATA_LOSS:return V.DATA_LOSS;default:return W()}}(rt=Ht||(Ht={}))[rt.OK=0]="OK",rt[rt.CANCELLED=1]="CANCELLED",rt[rt.UNKNOWN=2]="UNKNOWN",rt[rt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",rt[rt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",rt[rt.NOT_FOUND=5]="NOT_FOUND",rt[rt.ALREADY_EXISTS=6]="ALREADY_EXISTS",rt[rt.PERMISSION_DENIED=7]="PERMISSION_DENIED",rt[rt.UNAUTHENTICATED=16]="UNAUTHENTICATED",rt[rt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",rt[rt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",rt[rt.ABORTED=10]="ABORTED",rt[rt.OUT_OF_RANGE=11]="OUT_OF_RANGE",rt[rt.UNIMPLEMENTED=12]="UNIMPLEMENTED",rt[rt.INTERNAL=13]="INTERNAL",rt[rt.UNAVAILABLE=14]="UNAVAILABLE",rt[rt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Ix=new Is([4294967295,4294967295],0);function Cf(n){const t=Tx().encode(n),e=new wg;return e.update(t),new Uint8Array(e.digest())}function Df(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Is([e,s],0),new Is([i,r],0)]}class Qu{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new lr(`Invalid padding: ${e}`);if(s<0)throw new lr(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new lr(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new lr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Is.fromNumber(this.Ie)}Ee(t,e,s){let i=t.add(e.multiply(Is.fromNumber(s)));return i.compare(Ix)===1&&(i=new Is([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Cf(t),[s,i]=Df(e);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);if(!this.de(o))return!1}return!0}static create(t,e,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new Qu(r,i,e);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=Cf(t),[s,i]=Df(e);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class lr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class uc{constructor(t,e,s,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const i=new Map;return i.set(t,to.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new uc(q.min(),i,new Pt(at),Rn(),nt())}}class to{constructor(t,e,s,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new to(s,e,nt(),nt(),nt())}}/**
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
 */class aa{constructor(t,e,s,i){this.Re=t,this.removedTargetIds=e,this.key=s,this.Ve=i}}class Jg{constructor(t,e){this.targetId=t,this.me=e}}class Zg{constructor(t,e,s=se.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=i}}class Of{constructor(){this.fe=0,this.ge=Nf(),this.pe=se.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=nt(),e=nt(),s=nt();return this.ge.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:s=s.add(i);break;default:W()}}),new to(this.pe,this.ye,t,e,s)}Ce(){this.we=!1,this.ge=Nf()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,ft(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ax{constructor(t){this.Le=t,this.Be=new Map,this.ke=Rn(),this.qe=Mf(),this.Qe=new Pt(at)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const s=this.Ge(e);switch(t.state){case 0:this.ze(e)&&s.De(t.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(t.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(s.Ne(),s.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),s.De(t.resumeToken));break;default:W()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((s,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,s=t.me.count,i=this.Je(e);if(i){const r=i.target;if(Ql(r))if(s===0){const o=new z(r.path);this.Ue(e,o,fe.newNoDocument(o,q.min()))}else ft(s===1);else{const o=this.Ye(e);if(o!==s){const a=this.Ze(t),c=a?this.Xe(a,t,o):1;if(c!==0){this.je(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,l)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=e;let o,a;try{o=Cs(s).toUint8Array()}catch(c){if(c instanceof Sg)return fi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Qu(o,i,r)}catch(c){return fi(c instanceof lr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(t,e,s){return e.me.count===s-this.nt(t,e.targetId)?0:2}nt(t,e){const s=this.Le.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,r,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((r,o)=>{const a=this.Je(o);if(a){if(r.current&&Ql(a.target)){const c=new z(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,fe.newNoDocument(c,t))}r.be&&(e.set(o,r.ve()),r.Ce())}});let s=nt();this.qe.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(t));const i=new uc(t,e,this.Qe,this.ke,s);return this.ke=Rn(),this.qe=Mf(),this.Qe=new Pt(at),i}$e(t,e){if(!this.ze(t))return;const s=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,s),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,s){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),s&&(this.ke=this.ke.insert(e,s))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Of,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ne(at),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||j("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Of),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Mf(){return new Pt(z.comparator)}function Nf(){return new Pt(z.comparator)}const kx={asc:"ASCENDING",desc:"DESCENDING"},Rx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Px={and:"AND",or:"OR"};class Sx{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Jl(n,t){return n.useProto3Json||rc(t)?t:{value:t}}function Oa(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function t_(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Cx(n,t){return Oa(n,t.toTimestamp())}function Je(n){return ft(!!n),q.fromTimestamp(function(e){const s=es(e);return new jt(s.seconds,s.nanos)}(n))}function Xu(n,t){return Zl(n,t).canonicalString()}function Zl(n,t){const e=function(i){return new Et(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function e_(n){const t=Et.fromString(n);return ft(o_(t)),t}function tu(n,t){return Xu(n.databaseId,t.path)}function ul(n,t){const e=e_(t);if(e.get(1)!==n.databaseId.projectId)throw new U(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new U(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new z(s_(e))}function n_(n,t){return Xu(n.databaseId,t)}function Dx(n){const t=e_(n);return t.length===4?Et.emptyPath():s_(t)}function eu(n){return new Et(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function s_(n){return ft(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Lf(n,t,e){return{name:tu(n,t),fields:e.value.mapValue.fields}}function Ox(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:W()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(l,d){return l.useProto3Json?(ft(d===void 0||typeof d=="string"),se.fromBase64String(d||"")):(ft(d===void 0||d instanceof Buffer||d instanceof Uint8Array),se.fromUint8Array(d||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const d=l.code===void 0?V.UNKNOWN:Xg(l.code);return new U(d,l.message||"")}(o);e=new Zg(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=ul(n,s.document.name),r=Je(s.document.updateTime),o=s.document.createTime?Je(s.document.createTime):q.min(),a=new Ie({mapValue:{fields:s.document.fields}}),c=fe.newFoundDocument(i,r,o,a),l=s.targetIds||[],d=s.removedTargetIds||[];e=new aa(l,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=ul(n,s.document),r=s.readTime?Je(s.readTime):q.min(),o=fe.newNoDocument(i,r),a=s.removedTargetIds||[];e=new aa([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=ul(n,s.document),r=s.removedTargetIds||[];e=new aa([],r,i,null)}else{if(!("filter"in t))return W();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new xx(i,r),a=s.targetId;e=new Jg(a,o)}}return e}function Mx(n,t){let e;if(t instanceof Zr)e={update:Lf(n,t.key,t.value)};else if(t instanceof Yu)e={delete:tu(n,t.key)};else if(t instanceof rs)e={update:Lf(n,t.key,t.data),updateMask:zx(t.fieldMask)};else{if(!(t instanceof vx))return W();e={verify:tu(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Nr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Lr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Da)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw W()}(0,s))),t.precondition.isNone||(e.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:Cx(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:W()}(n,t.precondition)),e}function Nx(n,t){return n&&n.length>0?(ft(t!==void 0),n.map(e=>function(i,r){let o=i.updateTime?Je(i.updateTime):Je(r);return o.isEqual(q.min())&&(o=Je(r)),new gx(o,i.transformResults||[])}(e,t))):[]}function Lx(n,t){return{documents:[n_(n,t.path)]}}function Vx(n,t){const e={structuredQuery:{}},s=t.path;let i;t.collectionGroup!==null?(i=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=n_(n,i);const r=function(l){if(l.length!==0)return r_($e.create(l,"and"))}(t.filters);r&&(e.structuredQuery.where=r);const o=function(l){if(l.length!==0)return l.map(d=>function(f){return{field:ni(f.field),direction:$x(f.dir)}}(d))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=Jl(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),{_t:e,parent:i}}function Fx(n){let t=Dx(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let i=null;if(s>0){ft(s===1);const d=e.from[0];d.allDescendants?i=d.collectionId:t=t.child(d.collectionId)}let r=[];e.where&&(r=function(h){const f=i_(h);return f instanceof $e&&Mg(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(f=>function(_){return new Mr(si(_.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,rc(f)?null:f}(e.limit));let c=null;e.startAt&&(c=function(h){const f=!!h.before,m=h.values||[];return new Pa(m,f)}(e.startAt));let l=null;return e.endAt&&(l=function(h){const f=!h.before,m=h.values||[];return new Pa(m,f)}(e.endAt)),sx(t,i,o,r,a,"F",c,l)}function Bx(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function i_(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=si(e.unaryFilter.field);return qt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=si(e.unaryFilter.field);return qt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=si(e.unaryFilter.field);return qt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=si(e.unaryFilter.field);return qt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(n):n.fieldFilter!==void 0?function(e){return qt.create(si(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return $e.create(e.compositeFilter.filters.map(s=>i_(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(e.compositeFilter.op))}(n):W()}function $x(n){return kx[n]}function Ux(n){return Rx[n]}function jx(n){return Px[n]}function ni(n){return{fieldPath:n.canonicalString()}}function si(n){return ee.fromServerFormat(n.fieldPath)}function r_(n){return n instanceof qt?function(e){if(e.op==="=="){if(xf(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NAN"}};if(wf(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xf(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NOT_NAN"}};if(wf(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ni(e.field),op:Ux(e.op),value:e.value}}}(n):n instanceof $e?function(e){const s=e.getFilters().map(i=>r_(i));return s.length===1?s[0]:{compositeFilter:{op:jx(e.op),filters:s}}}(n):W()}function zx(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function o_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class jn{constructor(t,e,s,i,r=q.min(),o=q.min(),a=se.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new jn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Hx{constructor(t){this.ct=t}}function Wx(n){const t=Fx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Sa(t,t.limit,"L"):t}/**
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
 */class qx{constructor(){this.un=new Gx}addToCollectionParentIndex(t,e){return this.un.add(e),B.resolve()}getCollectionParents(t,e){return B.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return B.resolve()}deleteFieldIndex(t,e){return B.resolve()}deleteAllFieldIndexes(t){return B.resolve()}createTargetIndexes(t,e){return B.resolve()}getDocumentsMatchingTarget(t,e){return B.resolve(null)}getIndexType(t,e){return B.resolve(0)}getFieldIndexes(t,e){return B.resolve([])}getNextCollectionGroupToUpdate(t){return B.resolve(null)}getMinOffset(t,e){return B.resolve(ts.min())}getMinOffsetFromCollectionGroup(t,e){return B.resolve(ts.min())}updateCollectionGroup(t,e,s){return B.resolve()}updateIndexEntries(t,e){return B.resolve()}}class Gx{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e]||new ne(Et.comparator),r=!i.has(s);return this.index[e]=i.add(s),r}has(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e];return i&&i.has(s)}getEntries(t){return(this.index[t]||new ne(Et.comparator)).toArray()}}/**
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
 */class _i{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new _i(0)}static kn(){return new _i(-1)}}/**
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
 */class Yx{constructor(){this.changes=new ki(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,fe.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?B.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Qx{constructor(t,e,s,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(s!==null&&br(s.mutation,i,Pe.empty(),jt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,nt()).next(()=>s))}getLocalViewOfDocuments(t,e,s=nt()){const i=Es();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,s).next(r=>{let o=cr();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const s=Es();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,nt()))}populateOverlays(t,e,s){const i=[];return s.forEach(r=>{e.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,s,i){let r=Rn();const o=vr(),a=function(){return vr()}();return e.forEach((c,l)=>{const d=s.get(l.key);i.has(l.key)&&(d===void 0||d.mutation instanceof rs)?r=r.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),br(d.mutation,l,d.mutation.getFieldMask(),jt.now())):o.set(l.key,Pe.empty())}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((l,d)=>o.set(l,d)),e.forEach((l,d)=>{var h;return a.set(l,new Kx(d,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const s=vr();let i=new Pt((o,a)=>o-a),r=nt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=e.get(c);if(l===null)return;let d=s.get(c)||Pe.empty();d=a.applyToLocalView(l,d),s.set(c,d);const h=(i.get(a.batchId)||nt()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,d=c.value,h=zg();d.forEach(f=>{if(!r.has(f)){const m=Kg(e.get(f),s.get(f));m!==null&&h.set(f,m),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return B.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,i){return function(o){return z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Fg(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,i):this.getDocumentsMatchingCollectionQuery(t,e,s,i)}getNextDocuments(t,e,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,i-r.size):B.resolve(Es());let a=-1,c=r;return o.next(l=>B.forEach(l,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(d)?B.resolve():this.remoteDocumentCache.getEntry(t,d).next(f=>{c=c.insert(d,f)}))).next(()=>this.populateOverlays(t,l,r)).next(()=>this.computeViews(t,c,l,nt())).next(d=>({batchId:a,changes:jg(d)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new z(e)).next(s=>{let i=cr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,s,i){const r=e.collectionGroup;let o=cr();return this.indexManager.getCollectionParents(t,r).next(a=>B.forEach(a,c=>{const l=function(h,f){return new Ai(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,c.child(r));return this.getDocumentsMatchingCollectionQuery(t,l,s,i).next(d=>{d.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,r,i))).next(o=>{r.forEach((c,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,fe.newInvalidDocument(d)))});let a=cr();return o.forEach((c,l)=>{const d=r.get(c);d!==void 0&&br(d.mutation,l,Pe.empty(),jt.now()),ac(e,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class Xx{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return B.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Je(i.createTime)}}(e)),B.resolve()}getNamedQuery(t,e){return B.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:Wx(i.bundledQuery),readTime:Je(i.readTime)}}(e)),B.resolve()}}/**
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
 */class Jx{constructor(){this.overlays=new Pt(z.comparator),this.Ir=new Map}getOverlay(t,e){return B.resolve(this.overlays.get(e))}getOverlays(t,e){const s=Es();return B.forEach(e,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((i,r)=>{this.ht(t,e,r)}),B.resolve()}removeOverlaysForBatchId(t,e,s){const i=this.Ir.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Ir.delete(s)),B.resolve()}getOverlaysForCollection(t,e,s){const i=Es(),r=e.length+1,o=new z(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return B.resolve(i)}getOverlaysForCollectionGroup(t,e,s,i){let r=new Pt((l,d)=>l-d);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>s){let d=r.get(l.largestBatchId);d===null&&(d=Es(),r=r.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const a=Es(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,d)=>a.set(l,d)),!(a.size()>=i)););return B.resolve(a)}ht(t,e,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(s.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new wx(e,s));let r=this.Ir.get(e);r===void 0&&(r=nt(),this.Ir.set(e,r)),this.Ir.set(e,r.add(s.key))}}/**
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
 */class Zx{constructor(){this.sessionToken=se.EMPTY_BYTE_STRING}getSessionToken(t){return B.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,B.resolve()}}/**
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
 */class Ju{constructor(){this.Tr=new ne(Kt.Er),this.dr=new ne(Kt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const s=new Kt(t,e);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.Vr(new Kt(t,e))}mr(t,e){t.forEach(s=>this.removeReference(s,e))}gr(t){const e=new z(new Et([])),s=new Kt(e,t),i=new Kt(e,t+1),r=[];return this.dr.forEachInRange([s,i],o=>{this.Vr(o),r.push(o.key)}),r}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new z(new Et([])),s=new Kt(e,t),i=new Kt(e,t+1);let r=nt();return this.dr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const e=new Kt(t,0),s=this.Tr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class Kt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return z.comparator(t.key,e.key)||at(t.wr,e.wr)}static Ar(t,e){return at(t.wr,e.wr)||z.comparator(t.key,e.key)}}/**
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
 */class tE{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ne(Kt.Er)}checkEmpty(t){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,i){const r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bx(r,e,s,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Kt(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(t,e){return B.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,i=this.vr(s),r=i<0?0:i;return B.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new Kt(e,0),i=new Kt(e,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([s,i],o=>{const a=this.Dr(o.wr);r.push(a)}),B.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new ne(at);return e.forEach(i=>{const r=new Kt(i,0),o=new Kt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([r,o],a=>{s=s.add(a.wr)})}),B.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,i=s.length+1;let r=s;z.isDocumentKey(r)||(r=r.child(""));const o=new Kt(new z(r),0);let a=new ne(at);return this.br.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.wr)),!0)},o),B.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(s=>{const i=this.Dr(s);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){ft(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return B.forEach(e.mutations,i=>{const r=new Kt(i.key,e.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=s})}On(t){}containsKey(t,e){const s=new Kt(e,0),i=this.br.firstAfterOrEqual(s);return B.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,B.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class eE{constructor(t){this.Mr=t,this.docs=function(){return new Pt(z.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.Mr(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return B.resolve(s?s.document.mutableCopy():fe.newInvalidDocument(e))}getEntries(t,e){let s=Rn();return e.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():fe.newInvalidDocument(i))}),B.resolve(s)}getDocumentsMatchingQuery(t,e,s,i){let r=Rn();const o=e.path,a=new z(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:d}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Fw(Vw(d),s)<=0||(i.has(d.key)||ac(e,d))&&(r=r.insert(d.key,d.mutableCopy()))}return B.resolve(r)}getAllFromCollectionGroup(t,e,s,i){W()}Or(t,e){return B.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new nE(this)}getSize(t){return B.resolve(this.size)}}class nE extends Yx{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(s)}),B.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class sE{constructor(t){this.persistence=t,this.Nr=new ki(e=>Hu(e),Wu),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ju,this.targetCount=0,this.kr=_i.Bn()}forEachTarget(t,e){return this.Nr.forEach((s,i)=>e(i)),B.resolve()}getLastRemoteSnapshotVersion(t){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return B.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.Lr&&(this.Lr=e),B.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new _i(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,B.resolve()}updateTargetData(t,e){return this.Kn(e),B.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,B.resolve()}removeTargets(t,e,s){let i=0;const r=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=e&&s.get(a.targetId)===null&&(this.Nr.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),B.waitFor(r).next(()=>i)}getTargetCount(t){return B.resolve(this.targetCount)}getTargetData(t,e){const s=this.Nr.get(e)||null;return B.resolve(s)}addMatchingKeys(t,e,s){return this.Br.Rr(e,s),B.resolve()}removeMatchingKeys(t,e,s){this.Br.mr(e,s);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),B.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),B.resolve()}getMatchingKeysForTargetId(t,e){const s=this.Br.yr(e);return B.resolve(s)}containsKey(t,e){return B.resolve(this.Br.containsKey(e))}}/**
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
 */class iE{constructor(t,e){this.qr={},this.overlays={},this.Qr=new $u(0),this.Kr=!1,this.Kr=!0,this.$r=new Zx,this.referenceDelegate=t(this),this.Ur=new sE(this),this.indexManager=new qx,this.remoteDocumentCache=function(i){return new eE(i)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new Hx(e),this.Gr=new Xx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Jx,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.qr[t.toKey()];return s||(s=new tE(e,this.referenceDelegate),this.qr[t.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,s){j("MemoryPersistence","Starting transaction:",t);const i=new rE(this.Qr.next());return this.referenceDelegate.zr(),s(i).next(r=>this.referenceDelegate.jr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Hr(t,e){return B.or(Object.values(this.qr).map(s=>()=>s.containsKey(t,e)))}}class rE extends $w{constructor(t){super(),this.currentSequenceNumber=t}}class Zu{constructor(t){this.persistence=t,this.Jr=new Ju,this.Yr=null}static Zr(t){return new Zu(t)}get Xr(){if(this.Yr)return this.Yr;throw W()}addReference(t,e,s){return this.Jr.addReference(s,e),this.Xr.delete(s.toString()),B.resolve()}removeReference(t,e,s){return this.Jr.removeReference(s,e),this.Xr.add(s.toString()),B.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),B.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(r=>this.Xr.add(r.toString()))}).next(()=>s.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,s=>{const i=z.fromPath(s);return this.ei(t,i).next(r=>{r||e.removeEntry(i,q.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(s=>{s?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return B.or([()=>B.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class td{constructor(t,e,s,i){this.targetId=t,this.fromCache=e,this.$i=s,this.Ui=i}static Wi(t,e){let s=nt(),i=nt();for(const r of e.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new td(t,e.fromCache,s,i)}}/**
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
 */class aE{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return c0()?8:Uw(me())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,s,i){const r={result:null};return this.Yi(t,e).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Zi(t,e,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new oE;return this.Xi(t,e,o).next(a=>{if(r.result=a,this.zi)return this.es(t,e,o,a.size)})}).next(()=>r.result)}es(t,e,s,i){return s.documentReadCount<this.ji?(Wi()<=it.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",ei(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(Wi()<=it.DEBUG&&j("QueryEngine","Query:",ei(e),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Hi*i?(Wi()<=it.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",ei(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Xe(e))):B.resolve())}Yi(t,e){if(Af(e))return B.resolve(null);let s=Xe(e);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Sa(e,null,"F"),s=Xe(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=nt(...r);return this.Ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const l=this.ts(e,a);return this.ns(e,l,o,c.readTime)?this.Yi(t,Sa(e,null,"F")):this.rs(t,l,e,c)}))})))}Zi(t,e,s,i){return Af(e)||i.isEqual(q.min())?B.resolve(null):this.Ji.getDocuments(t,s).next(r=>{const o=this.ts(e,r);return this.ns(e,o,s,i)?B.resolve(null):(Wi()<=it.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ei(e)),this.rs(t,o,e,Lw(i,-1)).next(a=>a))})}ts(t,e){let s=new ne($g(t));return e.forEach((i,r)=>{ac(t,r)&&(s=s.add(r))}),s}ns(t,e,s,i){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Xi(t,e,s){return Wi()<=it.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",ei(e)),this.Ji.getDocumentsMatchingQuery(t,e,ts.min(),s)}rs(t,e,s,i){return this.Ji.getDocumentsMatchingQuery(t,s,i).next(r=>(e.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class cE{constructor(t,e,s,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new Pt(at),this._s=new ki(r=>Hu(r),Wu),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(s)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Qx(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function lE(n,t,e,s){return new cE(n,t,e,s)}async function a_(n,t){const e=K(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let i;return e.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,e.ls(t),e.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=nt();for(const l of i){o.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}for(const l of r){a.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}return e.localDocuments.getDocuments(s,c).next(l=>({hs:l,removedBatchIds:o,addedBatchIds:a}))})})}function uE(n,t){const e=K(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=e.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,l,d){const h=l.batch,f=h.keys();let m=B.resolve();return f.forEach(_=>{m=m.next(()=>d.getEntry(c,_)).next(v=>{const b=l.docVersions.get(_);ft(b!==null),v.version.compareTo(b)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),d.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,s,t,r).next(()=>r.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=nt();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>e.localDocuments.getDocuments(s,i))})}function c_(n){const t=K(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function dE(n,t){const e=K(n),s=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const a=[];t.targetChanges.forEach((d,h)=>{const f=i.get(h);if(!f)return;a.push(e.Ur.removeMatchingKeys(r,d.removedDocuments,h).next(()=>e.Ur.addMatchingKeys(r,d.addedDocuments,h)));let m=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(se.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):d.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(d.resumeToken,s)),i=i.insert(h,m),function(v,b,T){return v.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,m,d)&&a.push(e.Ur.updateTargetData(r,m))});let c=Rn(),l=nt();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,d))}),a.push(hE(r,o,t.documentUpdates).next(d=>{c=d.Ps,l=d.Is})),!s.isEqual(q.min())){const d=e.Ur.getLastRemoteSnapshotVersion(r).next(h=>e.Ur.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(d)}return B.waitFor(a).next(()=>o.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(e.os=i,r))}function hE(n,t,e){let s=nt(),i=nt();return e.forEach(r=>s=s.add(r)),t.getEntries(n,s).next(r=>{let o=Rn();return e.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(q.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function fE(n,t){const e=K(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function pE(n,t){const e=K(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return e.Ur.getTargetData(s,t).next(r=>r?(i=r,B.resolve(i)):e.Ur.allocateTargetId(s).next(o=>(i=new jn(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.Ur.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=e.os.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(s.targetId,s),e._s.set(t,s.targetId)),s})}async function nu(n,t,e){const s=K(n),i=s.os.get(t),r=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Jr(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.os=s.os.remove(t),s._s.delete(i.target)}function Vf(n,t,e){const s=K(n);let i=q.min(),r=nt();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,d){const h=K(c),f=h._s.get(d);return f!==void 0?B.resolve(h.os.get(f)):h.Ur.getTargetData(l,d)}(s,o,Xe(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.ss.getDocumentsMatchingQuery(o,t,e?i:q.min(),e?r:nt())).next(a=>(mE(s,rx(t),a),{documents:a,Ts:r})))}function mE(n,t,e){let s=n.us.get(t)||q.min();e.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.us.set(t,s)}class Ff{constructor(){this.activeTargetIds=dx()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gE{constructor(){this.so=new Ff,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,s){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ff,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Bf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vo=null;function dl(){return Vo===null?Vo=function(){return 268435456+Math.round(2147483648*Math.random())}():Vo++,"0x"+Vo.toString(16)}/**
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
 */const ce="WebChannelConnection";class bE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const s=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+e.host,this.vo=`projects/${i}/databases/${r}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Fo(){return!1}Mo(e,s,i,r,o){const a=dl(),c=this.xo(e,s.toUriEncodedString());j("RestConnection",`Sending RPC '${e}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(l,r,o),this.No(e,c,l,i).then(d=>(j("RestConnection",`Received RPC '${e}' ${a}: `,d),d),d=>{throw fi("RestConnection",`RPC '${e}' ${a} failed with error: `,d,"url: ",c,"request:",i),d})}Lo(e,s,i,r,o,a){return this.Mo(e,s,i,r,o)}Oo(e,s,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ii}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>e[o]=r),i&&i.headers.forEach((r,o)=>e[o]=r)}xo(e,s){const i=yE[e];return`${this.Do}/v1/${s}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,s,i){const r=dl();return new Promise((o,a)=>{const c=new xg;c.setWithCredentials(!0),c.listenOnce(Eg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ia.NO_ERROR:const d=c.getResponseJson();j(ce,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(d)),o(d);break;case ia.TIMEOUT:j(ce,`RPC '${t}' ${r} timed out`),a(new U(V.DEADLINE_EXCEEDED,"Request time out"));break;case ia.HTTP_ERROR:const h=c.getStatus();if(j(ce,`RPC '${t}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const _=function(b){const T=b.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(T)>=0?T:V.UNKNOWN}(m.status);a(new U(_,m.message))}else a(new U(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new U(V.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{j(ce,`RPC '${t}' ${r} completed.`)}});const l=JSON.stringify(i);j(ce,`RPC '${t}' ${r} sending request:`,i),c.send(e,"POST",l,s,15)})}Bo(t,e,s){const i=dl(),r=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Ag(),a=Ig(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,s),c.encodeInitMessageHeaders=!0;const d=r.join("");j(ce,`Creating RPC '${t}' stream ${i}: ${d}`,c);const h=o.createWebChannel(d,c);let f=!1,m=!1;const _=new vE({Io:b=>{m?j(ce,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(f||(j(ce,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),j(ce,`RPC '${t}' stream ${i} sending:`,b),h.send(b))},To:()=>h.close()}),v=(b,T,I)=>{b.listen(T,S=>{try{I(S)}catch(C){setTimeout(()=>{throw C},0)}})};return v(h,ar.EventType.OPEN,()=>{m||(j(ce,`RPC '${t}' stream ${i} transport opened.`),_.yo())}),v(h,ar.EventType.CLOSE,()=>{m||(m=!0,j(ce,`RPC '${t}' stream ${i} transport closed`),_.So())}),v(h,ar.EventType.ERROR,b=>{m||(m=!0,fi(ce,`RPC '${t}' stream ${i} transport errored:`,b),_.So(new U(V.UNAVAILABLE,"The operation could not be completed")))}),v(h,ar.EventType.MESSAGE,b=>{var T;if(!m){const I=b.data[0];ft(!!I);const S=I,C=S.error||((T=S[0])===null||T===void 0?void 0:T.error);if(C){j(ce,`RPC '${t}' stream ${i} received error:`,C);const O=C.status;let D=function(x){const A=Ht[x];if(A!==void 0)return Xg(A)}(O),E=C.message;D===void 0&&(D=V.INTERNAL,E="Unknown error status: "+O+" with message "+C.message),m=!0,_.So(new U(D,E)),h.close()}else j(ce,`RPC '${t}' stream ${i} received:`,I),_.bo(I)}}),v(a,Tg.STAT_EVENT,b=>{b.stat===ql.PROXY?j(ce,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===ql.NOPROXY&&j(ce,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.wo()},0),_}}function hl(){return typeof document<"u"?document:null}/**
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
 */function dc(n){return new Sx(n,!0)}/**
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
 */class l_{constructor(t,e,s=1e3,i=1.5,r=6e4){this.ui=t,this.timerId=e,this.ko=s,this.qo=i,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-s);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class u_{constructor(t,e,s,i,r,o,a,c){this.ui=t,this.Ho=s,this.Jo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new l_(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(kn(e.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Yo===e&&this.P_(s,i)},s=>{t(()=>{const i=new U(V.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(i)})})}P_(t,e){const s=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{s(()=>this.I_(i))}),this.stream.onMessage(i=>{s(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return j("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wE extends u_{constructor(t,e,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Ox(this.serializer,t),s=function(r){if(!("targetChange"in r))return q.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?Je(o.readTime):q.min()}(t);return this.listener.d_(e,s)}A_(t){const e={};e.database=eu(this.serializer),e.addTarget=function(r,o){let a;const c=o.target;if(a=Ql(c)?{documents:Lx(r,c)}:{query:Vx(r,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=t_(r,o.resumeToken);const l=Jl(r,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(q.min())>0){a.readTime=Oa(r,o.snapshotVersion.toTimestamp());const l=Jl(r,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const s=Bx(this.serializer,t);s&&(e.labels=s),this.a_(e)}R_(t){const e={};e.database=eu(this.serializer),e.removeTarget=t,this.a_(e)}}class xE extends u_{constructor(t,e,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return ft(!!t.streamToken),this.lastStreamToken=t.streamToken,ft(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){ft(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Nx(t.writeResults,t.commitTime),s=Je(t.commitTime);return this.listener.g_(s,e)}p_(){const t={};t.database=eu(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>Mx(this.serializer,s))};this.a_(e)}}/**
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
 */class EE extends class{}{constructor(t,e,s,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new U(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Mo(t,Zl(e,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(V.UNKNOWN,r.toString())})}Lo(t,e,s,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(t,Zl(e,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class TE{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(kn(e),this.D_=!1):j("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class IE{constructor(t,e,s,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o(o=>{s.enqueueAndForget(async()=>{Bs(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=K(c);l.L_.add(4),await eo(l),l.q_.set("Unknown"),l.L_.delete(4),await hc(l)}(this))})}),this.q_=new TE(s,i)}}async function hc(n){if(Bs(n))for(const t of n.B_)await t(!0)}async function eo(n){for(const t of n.B_)await t(!1)}function d_(n,t){const e=K(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),id(e)?sd(e):Ri(e).r_()&&nd(e,t))}function ed(n,t){const e=K(n),s=Ri(e);e.N_.delete(t),s.r_()&&h_(e,t),e.N_.size===0&&(s.r_()?s.o_():Bs(e)&&e.q_.set("Unknown"))}function nd(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ri(n).A_(t)}function h_(n,t){n.Q_.xe(t),Ri(n).R_(t)}function sd(n){n.Q_=new Ax({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Ri(n).start(),n.q_.v_()}function id(n){return Bs(n)&&!Ri(n).n_()&&n.N_.size>0}function Bs(n){return K(n).L_.size===0}function f_(n){n.Q_=void 0}async function AE(n){n.q_.set("Online")}async function kE(n){n.N_.forEach((t,e)=>{nd(n,t)})}async function RE(n,t){f_(n),id(n)?(n.q_.M_(t),sd(n)):n.q_.set("Unknown")}async function PE(n,t,e){if(n.q_.set("Online"),t instanceof Zg&&t.state===2&&t.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,t)}catch(s){j("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Ma(n,s)}else if(t instanceof aa?n.Q_.Ke(t):t instanceof Jg?n.Q_.He(t):n.Q_.We(t),!e.isEqual(q.min()))try{const s=await c_(n.localStore);e.compareTo(s)>=0&&await function(r,o){const a=r.Q_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.N_.get(l);d&&r.N_.set(l,d.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const d=r.N_.get(c);if(!d)return;r.N_.set(c,d.withResumeToken(se.EMPTY_BYTE_STRING,d.snapshotVersion)),h_(r,c);const h=new jn(d.target,c,l,d.sequenceNumber);nd(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(s){j("RemoteStore","Failed to raise snapshot:",s),await Ma(n,s)}}async function Ma(n,t,e){if(!Jr(t))throw t;n.L_.add(1),await eo(n),n.q_.set("Offline"),e||(e=()=>c_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await hc(n)})}function p_(n,t){return t().catch(e=>Ma(n,e,t))}async function fc(n){const t=K(n),e=ns(t);let s=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;SE(t);)try{const i=await fE(t.localStore,s);if(i===null){t.O_.length===0&&e.o_();break}s=i.batchId,CE(t,i)}catch(i){await Ma(t,i)}m_(t)&&g_(t)}function SE(n){return Bs(n)&&n.O_.length<10}function CE(n,t){n.O_.push(t);const e=ns(n);e.r_()&&e.V_&&e.m_(t.mutations)}function m_(n){return Bs(n)&&!ns(n).n_()&&n.O_.length>0}function g_(n){ns(n).start()}async function DE(n){ns(n).p_()}async function OE(n){const t=ns(n);for(const e of n.O_)t.m_(e.mutations)}async function ME(n,t,e){const s=n.O_.shift(),i=Ku.from(s,t,e);await p_(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await fc(n)}async function NE(n,t){t&&ns(n).V_&&await async function(s,i){if(function(o){return Ex(o)&&o!==V.ABORTED}(i.code)){const r=s.O_.shift();ns(s).s_(),await p_(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await fc(s)}}(n,t),m_(n)&&g_(n)}async function $f(n,t){const e=K(n);e.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const s=Bs(e);e.L_.add(3),await eo(e),s&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await hc(e)}async function LE(n,t){const e=K(n);t?(e.L_.delete(2),await hc(e)):t||(e.L_.add(2),await eo(e),e.q_.set("Unknown"))}function Ri(n){return n.K_||(n.K_=function(e,s,i){const r=K(e);return r.w_(),new wE(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:AE.bind(null,n),Ro:kE.bind(null,n),mo:RE.bind(null,n),d_:PE.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),id(n)?sd(n):n.q_.set("Unknown")):(await n.K_.stop(),f_(n))})),n.K_}function ns(n){return n.U_||(n.U_=function(e,s,i){const r=K(e);return r.w_(),new xE(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:DE.bind(null,n),mo:NE.bind(null,n),f_:OE.bind(null,n),g_:ME.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await fc(n)):(await n.U_.stop(),n.O_.length>0&&(j("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class rd{constructor(t,e,s,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,i,r){const o=Date.now()+s,a=new rd(t,e,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function od(n,t){if(kn("AsyncQueue",`${t}: ${n}`),Jr(n))return new U(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class ai{constructor(t){this.comparator=t?(e,s)=>t(e,s)||z.comparator(e.key,s.key):(e,s)=>z.comparator(e.key,s.key),this.keyedMap=cr(),this.sortedSet=new Pt(this.comparator)}static emptySet(t){return new ai(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ai)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new ai;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
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
 */class Uf{constructor(){this.W_=new Pt(z.comparator)}track(t){const e=t.doc.key,s=this.W_.get(e);s?t.type!==0&&s.type===3?this.W_=this.W_.insert(e,t):t.type===3&&s.type!==1?this.W_=this.W_.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.W_=this.W_.remove(e):t.type===1&&s.type===2?this.W_=this.W_.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):W():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,s)=>{t.push(s)}),t}}class yi{constructor(t,e,s,i,r,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,s,i,r){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new yi(t,e,ai.emptySet(e),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&oc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==s[i].type||!e[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class VE{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class FE{constructor(){this.queries=jf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,s){const i=K(e),r=i.queries;i.queries=jf(),r.forEach((o,a)=>{for(const c of a.j_)c.onError(s)})})(this,new U(V.ABORTED,"Firestore shutting down"))}}function jf(){return new ki(n=>Bg(n),oc)}async function __(n,t){const e=K(n);let s=3;const i=t.query;let r=e.queries.get(i);r?!r.H_()&&t.J_()&&(s=2):(r=new VE,s=t.J_()?0:1);try{switch(s){case 0:r.z_=await e.onListen(i,!0);break;case 1:r.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(o){const a=od(o,`Initialization of query '${ei(t.query)}' failed`);return void t.onError(a)}e.queries.set(i,r),r.j_.push(t),t.Z_(e.onlineState),r.z_&&t.X_(r.z_)&&ad(e)}async function y_(n,t){const e=K(n),s=t.query;let i=3;const r=e.queries.get(s);if(r){const o=r.j_.indexOf(t);o>=0&&(r.j_.splice(o,1),r.j_.length===0?i=t.J_()?0:1:!r.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function BE(n,t){const e=K(n);let s=!1;for(const i of t){const r=i.query,o=e.queries.get(r);if(o){for(const a of o.j_)a.X_(i)&&(s=!0);o.z_=i}}s&&ad(e)}function $E(n,t,e){const s=K(n),i=s.queries.get(t);if(i)for(const r of i.j_)r.onError(e);s.queries.delete(t)}function ad(n){n.Y_.forEach(t=>{t.next()})}var su,zf;(zf=su||(su={})).ea="default",zf.Cache="cache";class v_{constructor(t,e,s){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new yi(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const s=e!=="Offline";return(!this.options._a||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=yi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==su.Cache}}/**
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
 */class b_{constructor(t){this.key=t}}class w_{constructor(t){this.key=t}}class UE{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=nt(),this.mutatedKeys=nt(),this.Aa=$g(t),this.Ra=new ai(this.Aa)}get Va(){return this.Ta}ma(t,e){const s=e?e.fa:new Uf,i=e?e.Ra:this.Ra;let r=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((d,h)=>{const f=i.get(d),m=ac(this.query,h)?h:null,_=!!f&&this.mutatedKeys.has(f.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let b=!1;f&&m?f.data.isEqual(m.data)?_!==v&&(s.track({type:3,doc:m}),b=!0):this.ga(f,m)||(s.track({type:2,doc:m}),b=!0,(c&&this.Aa(m,c)>0||l&&this.Aa(m,l)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),b=!0):f&&!m&&(s.track({type:1,doc:f}),b=!0,(c||l)&&(a=!0)),b&&(m?(o=o.add(m),r=v?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),s.track({type:1,doc:d})}return{Ra:o,fa:s,ns:a,mutatedKeys:r}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,i){const r=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((d,h)=>function(m,_){const v=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return v(m)-v(_)}(d.type,h.type)||this.Aa(d.doc,h.doc)),this.pa(s),i=i!=null&&i;const a=e&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,l=c!==this.Ea;return this.Ea=c,o.length!==0||l?{snapshot:new yi(this.query,t.Ra,r,o,t.mutatedKeys,c===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Uf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=nt(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const e=[];return t.forEach(s=>{this.da.has(s)||e.push(new w_(s))}),this.da.forEach(s=>{t.has(s)||e.push(new b_(s))}),e}ba(t){this.Ta=t.Ts,this.da=nt();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return yi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class jE{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class zE{constructor(t){this.key=t,this.va=!1}}class HE{constructor(t,e,s,i,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ki(a=>Bg(a),oc),this.Ma=new Map,this.xa=new Set,this.Oa=new Pt(z.comparator),this.Na=new Map,this.La=new Ju,this.Ba={},this.ka=new Map,this.qa=_i.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function WE(n,t,e=!0){const s=k_(n);let i;const r=s.Fa.get(t);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Da()):i=await x_(s,t,e,!0),i}async function qE(n,t){const e=k_(n);await x_(e,t,!0,!1)}async function x_(n,t,e,s){const i=await pE(n.localStore,Xe(t)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return s&&(a=await GE(n,t,r,o==="current",i.resumeToken)),n.isPrimaryClient&&e&&d_(n.remoteStore,i),a}async function GE(n,t,e,s,i){n.Ka=(h,f,m)=>async function(v,b,T,I){let S=b.view.ma(T);S.ns&&(S=await Vf(v.localStore,b.query,!1).then(({documents:E})=>b.view.ma(E,S)));const C=I&&I.targetChanges.get(b.targetId),O=I&&I.targetMismatches.get(b.targetId)!=null,D=b.view.applyChanges(S,v.isPrimaryClient,C,O);return Wf(v,b.targetId,D.wa),D.snapshot}(n,h,f,m);const r=await Vf(n.localStore,t,!0),o=new UE(t,r.Ts),a=o.ma(r.documents),c=to.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);Wf(n,e,l.wa);const d=new jE(t,e,o);return n.Fa.set(t,d),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),l.snapshot}async function YE(n,t,e){const s=K(n),i=s.Fa.get(t),r=s.Ma.get(i.targetId);if(r.length>1)return s.Ma.set(i.targetId,r.filter(o=>!oc(o,t))),void s.Fa.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await nu(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),e&&ed(s.remoteStore,i.targetId),iu(s,i.targetId)}).catch(Xr)):(iu(s,i.targetId),await nu(s.localStore,i.targetId,!0))}async function KE(n,t){const e=K(n),s=e.Fa.get(t),i=e.Ma.get(s.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),ed(e.remoteStore,s.targetId))}async function QE(n,t,e){const s=sT(n);try{const i=await function(o,a){const c=K(o),l=jt.now(),d=a.reduce((m,_)=>m.add(_.key),nt());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let _=Rn(),v=nt();return c.cs.getEntries(m,d).next(b=>{_=b,_.forEach((T,I)=>{I.isValidDocument()||(v=v.add(T))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,_)).next(b=>{h=b;const T=[];for(const I of a){const S=yx(I,h.get(I.key).overlayedDocument);S!=null&&T.push(new rs(I.key,S,Cg(S.value.mapValue),Oe.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,T,a)}).next(b=>{f=b;const T=b.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(m,b.batchId,T)})}).then(()=>({batchId:f.batchId,changes:jg(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.Ba[o.currentUser.toKey()];l||(l=new Pt(at)),l=l.insert(a,c),o.Ba[o.currentUser.toKey()]=l}(s,i.batchId,e),await no(s,i.changes),await fc(s.remoteStore)}catch(i){const r=od(i,"Failed to persist write");e.reject(r)}}async function E_(n,t){const e=K(n);try{const s=await dE(e.localStore,t);t.targetChanges.forEach((i,r)=>{const o=e.Na.get(r);o&&(ft(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ft(o.va):i.removedDocuments.size>0&&(ft(o.va),o.va=!1))}),await no(e,s,t)}catch(s){await Xr(s)}}function Hf(n,t,e){const s=K(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const i=[];s.Fa.forEach((r,o)=>{const a=o.view.Z_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=K(o);c.onlineState=a;let l=!1;c.queries.forEach((d,h)=>{for(const f of h.j_)f.Z_(a)&&(l=!0)}),l&&ad(c)}(s.eventManager,t),i.length&&s.Ca.d_(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function XE(n,t,e){const s=K(n);s.sharedClientState.updateQueryState(t,"rejected",e);const i=s.Na.get(t),r=i&&i.key;if(r){let o=new Pt(z.comparator);o=o.insert(r,fe.newNoDocument(r,q.min()));const a=nt().add(r),c=new uc(q.min(),new Map,new Pt(at),o,a);await E_(s,c),s.Oa=s.Oa.remove(r),s.Na.delete(t),cd(s)}else await nu(s.localStore,t,!1).then(()=>iu(s,t,e)).catch(Xr)}async function JE(n,t){const e=K(n),s=t.batch.batchId;try{const i=await uE(e.localStore,t);I_(e,s,null),T_(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await no(e,i)}catch(i){await Xr(i)}}async function ZE(n,t,e){const s=K(n);try{const i=await function(o,a){const c=K(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let d;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(ft(h!==null),d=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,d,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d)).next(()=>c.localDocuments.getDocuments(l,d))})}(s.localStore,t);I_(s,t,e),T_(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await no(s,i)}catch(i){await Xr(i)}}function T_(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function I_(n,t,e){const s=K(n);let i=s.Ba[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(e?r.reject(e):r.resolve(),i=i.remove(t)),s.Ba[s.currentUser.toKey()]=i}}function iu(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Ma.get(t))n.Fa.delete(s),e&&n.Ca.$a(s,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(s=>{n.La.containsKey(s)||A_(n,s)})}function A_(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(ed(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),cd(n))}function Wf(n,t,e){for(const s of e)s instanceof b_?(n.La.addReference(s.key,t),tT(n,s)):s instanceof w_?(j("SyncEngine","Document no longer in limbo: "+s.key),n.La.removeReference(s.key,t),n.La.containsKey(s.key)||A_(n,s.key)):W()}function tT(n,t){const e=t.key,s=e.path.canonicalString();n.Oa.get(e)||n.xa.has(s)||(j("SyncEngine","New document in limbo: "+e),n.xa.add(s),cd(n))}function cd(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new z(Et.fromString(t)),s=n.qa.next();n.Na.set(s,new zE(e)),n.Oa=n.Oa.insert(e,s),d_(n.remoteStore,new jn(Xe(qu(e.path)),s,"TargetPurposeLimboResolution",$u.oe))}}async function no(n,t,e){const s=K(n),i=[],r=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((a,c)=>{o.push(s.Ka(c,t,e).then(l=>{var d;if((l||e)&&s.isPrimaryClient){const h=l?!l.fromCache:(d=e==null?void 0:e.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;s.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(l){i.push(l);const h=td.Wi(c.targetId,l);r.push(h)}}))}),await Promise.all(o),s.Ca.d_(i),await async function(c,l){const d=K(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>B.forEach(l,f=>B.forEach(f.$i,m=>d.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>B.forEach(f.Ui,m=>d.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!Jr(h))throw h;j("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const m=d.os.get(f),_=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(_);d.os=d.os.insert(f,v)}}}(s.localStore,r))}async function eT(n,t){const e=K(n);if(!e.currentUser.isEqual(t)){j("SyncEngine","User change. New user:",t.toKey());const s=await a_(e.localStore,t);e.currentUser=t,function(r,o){r.ka.forEach(a=>{a.forEach(c=>{c.reject(new U(V.CANCELLED,o))})}),r.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await no(e,s.hs)}}function nT(n,t){const e=K(n),s=e.Na.get(t);if(s&&s.va)return nt().add(s.key);{let i=nt();const r=e.Ma.get(t);if(!r)return i;for(const o of r){const a=e.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function k_(n){const t=K(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=E_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=nT.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=XE.bind(null,t),t.Ca.d_=BE.bind(null,t.eventManager),t.Ca.$a=$E.bind(null,t.eventManager),t}function sT(n){const t=K(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=JE.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ZE.bind(null,t),t}class Na{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=dc(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return lE(this.persistence,new aE,t.initialUser,this.serializer)}Ga(t){return new iE(Zu.Zr,this.serializer)}Wa(t){return new gE}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Na.provider={build:()=>new Na};class ru{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Hf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=eT.bind(null,this.syncEngine),await LE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new FE}()}createDatastore(t){const e=dc(t.databaseInfo.databaseId),s=function(r){return new bE(r)}(t.databaseInfo);return function(r,o,a,c){return new EE(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,i,r,o,a){return new IE(s,i,r,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Hf(this.syncEngine,e,0),function(){return Bf.D()?new Bf:new _E}())}createSyncEngine(t,e){return function(i,r,o,a,c,l,d){const h=new HE(i,r,o,a,c,l);return d&&(h.Qa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const r=K(i);j("RemoteStore","RemoteStore shutting down."),r.L_.add(5),await eo(r),r.k_.shutdown(),r.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ru.provider={build:()=>new ru};/**
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
 */class R_{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):kn("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class iT{constructor(t,e,s,i,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=i,this.user=de.UNAUTHENTICATED,this.clientId=Rg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{j("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(j("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=od(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function fl(n,t){n.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await a_(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function qf(n,t){n.asyncQueue.verifyOperationInProgress();const e=await rT(n);j("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>$f(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>$f(t.remoteStore,i)),n._onlineComponents=t}async function rT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await fl(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;fi("Error using user provided cache. Falling back to memory cache: "+e),await fl(n,new Na)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await fl(n,new Na);return n._offlineComponents}async function P_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await qf(n,n._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await qf(n,new ru))),n._onlineComponents}function oT(n){return P_(n).then(t=>t.syncEngine)}async function S_(n){const t=await P_(n),e=t.eventManager;return e.onListen=WE.bind(null,t.syncEngine),e.onUnlisten=YE.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=qE.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=KE.bind(null,t.syncEngine),e}function aT(n,t,e={}){const s=new Tn;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const d=new R_({next:f=>{d.Za(),o.enqueueAndForget(()=>y_(r,h));const m=f.docs.has(a);!m&&f.fromCache?l.reject(new U(V.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&f.fromCache&&c&&c.source==="server"?l.reject(new U(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new v_(qu(a.path),d,{includeMetadataChanges:!0,_a:!0});return __(r,h)}(await S_(n),n.asyncQueue,t,e,s)),s.promise}function cT(n,t,e={}){const s=new Tn;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const d=new R_({next:f=>{d.Za(),o.enqueueAndForget(()=>y_(r,h)),f.fromCache&&c.source==="server"?l.reject(new U(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new v_(a,d,{includeMetadataChanges:!0,_a:!0});return __(r,h)}(await S_(n),n.asyncQueue,t,e,s)),s.promise}/**
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
 */function C_(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Gf=new Map;/**
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
 */function D_(n,t,e){if(!e)throw new U(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function lT(n,t,e,s){if(t===!0&&s===!0)throw new U(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Yf(n){if(!z.isDocumentKey(n))throw new U(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Kf(n){if(z.isDocumentKey(n))throw new U(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function pc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":W()}function Ue(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new U(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=pc(n);throw new U(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function uT(n,t){if(t<=0)throw new U(V.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
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
 */class Qf{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new U(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new U(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}lT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=C_((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new U(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new U(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new U(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class mc{constructor(t,e,s,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new U(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qf(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new kw;switch(s.type){case"firstParty":return new Cw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new U(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=Gf.get(e);s&&(j("ComponentProvider","Removing Datastore"),Gf.delete(e),s.terminate())}(this),Promise.resolve()}}function dT(n,t,e,s={}){var i;const r=(n=Ue(n,mc))._getSettings(),o=`${t}:${e}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&fi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=de.MOCK_USER;else{a=mg(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new U(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new de(l)}n._authCredentials=new Rw(new kg(a,c))}}/**
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
 */class os{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new os(this.firestore,t,this._query)}}class xe{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new xe(this.firestore,t,this._key)}}class Qn extends os{constructor(t,e,s){super(t,e,qu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new xe(this.firestore,null,new z(t))}withConverter(t){return new Qn(this.firestore,t,this._path)}}function pt(n,t,...e){if(n=Mt(n),D_("collection","path",t),n instanceof mc){const s=Et.fromString(t,...e);return Kf(s),new Qn(n,null,s)}{if(!(n instanceof xe||n instanceof Qn))throw new U(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Et.fromString(t,...e));return Kf(s),new Qn(n.firestore,null,s)}}function ie(n,t,...e){if(n=Mt(n),arguments.length===1&&(t=Rg.newId()),D_("doc","path",t),n instanceof mc){const s=Et.fromString(t,...e);return Yf(s),new xe(n,null,new z(s))}{if(!(n instanceof xe||n instanceof Qn))throw new U(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Et.fromString(t,...e));return Yf(s),new xe(n.firestore,n instanceof Qn?n.converter:null,new z(s))}}/**
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
 */class Xf{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new l_(this,"async_queue_retry"),this.Vu=()=>{const s=hl();s&&j("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=t;const e=hl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=hl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Tn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Jr(t))throw t;j("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(s=>{this.Eu=s,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw kn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.du=!1,s))));return this.mu=e,e}enqueueAfterDelay(t,e,s){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=rd.createAndSchedule(this,t,e,s,r=>this.yu(r));return this.Tu.push(i),i}fu(){this.Eu&&W()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class $s extends mc{constructor(t,e,s,i){super(t,e,s,i),this.type="firestore",this._queue=new Xf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Xf(t),this._firestoreClient=void 0,await t}}}function hT(n,t){const e=typeof n=="object"?n:Fu(),s=typeof n=="string"?n:"(default)",i=ic(e,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=hg("firestore");r&&dT(i,...r)}return i}function ld(n){if(n._terminated)throw new U(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||fT(n),n._firestoreClient}function fT(n){var t,e,s;const i=n._freezeSettings(),r=function(a,c,l,d){return new Hw(a,c,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,C_(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new iT(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class vi{constructor(t){this._byteString=t}static fromBase64String(t){try{return new vi(se.fromBase64String(t))}catch(e){throw new U(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new vi(se.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class gc{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new U(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ee(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class dd{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new U(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new U(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return at(this._lat,t._lat)||at(this._long,t._long)}}/**
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
 */const pT=/^__.*__$/;class mT{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new rs(t,this.data,this.fieldMask,e,this.fieldTransforms):new Zr(t,this.data,e,this.fieldTransforms)}}class O_{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return new rs(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function M_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class fd{constructor(t,e,s,i,r,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new fd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.Ou(t),i}Nu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return La(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(M_(this.Cu)&&pT.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class gT{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||dc(t)}Qu(t,e,s,i=!1){return new fd({Cu:t,methodName:e,qu:s,path:ee.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _c(n){const t=n._freezeSettings(),e=dc(n._databaseId);return new gT(n._databaseId,!!t.ignoreUndefinedProperties,e)}function N_(n,t,e,s,i,r={}){const o=n.Qu(r.merge||r.mergeFields?2:0,t,e,i);pd("Data must be an object, but it was:",o,s);const a=L_(s,o);let c,l;if(r.merge)c=new Pe(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const h of r.mergeFields){const f=ou(t,h,e);if(!o.contains(f))throw new U(V.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);F_(d,f)||d.push(f)}c=new Pe(d),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new mT(new Ie(a),c,l)}class yc extends ud{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof yc}}function _T(n,t,e,s){const i=n.Qu(1,t,e);pd("Data must be an object, but it was:",i,s);const r=[],o=Ie.empty();Fs(s,(c,l)=>{const d=md(t,c,e);l=Mt(l);const h=i.Nu(d);if(l instanceof yc)r.push(d);else{const f=so(l,h);f!=null&&(r.push(d),o.set(d,f))}});const a=new Pe(r);return new O_(o,a,i.fieldTransforms)}function yT(n,t,e,s,i,r){const o=n.Qu(1,t,e),a=[ou(t,s,e)],c=[i];if(r.length%2!=0)throw new U(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(ou(t,r[f])),c.push(r[f+1]);const l=[],d=Ie.empty();for(let f=a.length-1;f>=0;--f)if(!F_(l,a[f])){const m=a[f];let _=c[f];_=Mt(_);const v=o.Nu(m);if(_ instanceof yc)l.push(m);else{const b=so(_,v);b!=null&&(l.push(m),d.set(m,b))}}const h=new Pe(l);return new O_(d,h,o.fieldTransforms)}function vT(n,t,e,s=!1){return so(e,n.Qu(s?4:3,t))}function so(n,t){if(V_(n=Mt(n)))return pd("Unsupported field value:",t,n),L_(n,t);if(n instanceof ud)return function(s,i){if(!M_(i.Cu))throw i.Bu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let c=so(a,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(n,t)}return function(s,i){if((s=Mt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return hx(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=jt.fromDate(s);return{timestampValue:Oa(i.serializer,r)}}if(s instanceof jt){const r=new jt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Oa(i.serializer,r)}}if(s instanceof dd)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof vi)return{bytesValue:t_(i.serializer,s._byteString)};if(s instanceof xe){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Xu(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof hd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return Gu(a.serializer,c)})}}}}}}(s,i);throw i.Bu(`Unsupported field value: ${pc(s)}`)}(n,t)}function L_(n,t){const e={};return Pg(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Fs(n,(s,i)=>{const r=so(i,t.Mu(s));r!=null&&(e[s]=r)}),{mapValue:{fields:e}}}function V_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof jt||n instanceof dd||n instanceof vi||n instanceof xe||n instanceof ud||n instanceof hd)}function pd(n,t,e){if(!V_(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const s=pc(e);throw s==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+s)}}function ou(n,t,e){if((t=Mt(t))instanceof gc)return t._internalPath;if(typeof t=="string")return md(n,t);throw La("Field path arguments must be of type string or ",n,!1,void 0,e)}const bT=new RegExp("[~\\*/\\[\\]]");function md(n,t,e){if(t.search(bT)>=0)throw La(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new gc(...t.split("."))._internalPath}catch{throw La(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function La(n,t,e,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new U(V.INVALID_ARGUMENT,a+n+c)}function F_(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class B_{constructor(t,e,s,i,r){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new wT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(vc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class wT extends B_{data(){return super.data()}}function vc(n,t){return typeof t=="string"?md(n,t):t instanceof gc?t._internalPath:t._delegate._internalPath}/**
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
 */function xT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gd{}class _d extends gd{}function we(n,t,...e){let s=[];t instanceof gd&&s.push(t),s=s.concat(e),function(r){const o=r.filter(c=>c instanceof yd).length,a=r.filter(c=>c instanceof bc).length;if(o>1||o>0&&a>0)throw new U(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class bc extends _d{constructor(t,e,s){super(),this._field=t,this._op=e,this._value=s,this.type="where"}static _create(t,e,s){return new bc(t,e,s)}_apply(t){const e=this._parse(t);return $_(t._query,e),new os(t.firestore,t.converter,Xl(t._query,e))}_parse(t){const e=_c(t.firestore);return function(r,o,a,c,l,d,h){let f;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new U(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Zf(h,d);const m=[];for(const _ of h)m.push(Jf(c,r,_));f={arrayValue:{values:m}}}else f=Jf(c,r,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Zf(h,d),f=vT(a,o,h,d==="in"||d==="not-in");return qt.create(l,d,f)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Gt(n,t,e){const s=t,i=vc("where",n);return bc._create(i,s,e)}class yd extends gd{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new yd(t,e)}_parse(t){const e=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return e.length===1?e[0]:$e.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,r){let o=i;const a=r.getFlattenedFilters();for(const c of a)$_(o,c),o=Xl(o,c)}(t._query,e),new os(t.firestore,t.converter,Xl(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vd extends _d{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new vd(t,e)}_apply(t){const e=function(i,r,o){if(i.startAt!==null)throw new U(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new U(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mr(r,o)}(t._query,this._field,this._direction);return new os(t.firestore,t.converter,function(i,r){const o=i.explicitOrderBy.concat([r]);return new Ai(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function au(n,t="asc"){const e=t,s=vc("orderBy",n);return vd._create(s,e)}class bd extends _d{constructor(t,e,s){super(),this.type=t,this._limit=e,this._limitType=s}static _create(t,e,s){return new bd(t,e,s)}_apply(t){return new os(t.firestore,t.converter,Sa(t._query,this._limit,this._limitType))}}function ca(n){return uT("limit",n),bd._create("limit",n,"F")}function Jf(n,t,e){if(typeof(e=Mt(e))=="string"){if(e==="")throw new U(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fg(t)&&e.indexOf("/")!==-1)throw new U(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const s=t.path.child(Et.fromString(e));if(!z.isDocumentKey(s))throw new U(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return bf(n,new z(s))}if(e instanceof xe)return bf(n,e._key);throw new U(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pc(e)}.`)}function Zf(n,t){if(!Array.isArray(n)||n.length===0)throw new U(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function $_(n,t){const e=function(i,r){for(const o of i)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new U(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new U(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class ET{convertValue(t,e="none"){switch(Ds(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ft(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Cs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw W()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return Fs(t,(i,r)=>{s[i]=this.convertValue(r,e)}),s}convertVectorValue(t){var e,s,i;const r=(i=(s=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>Ft(o.doubleValue));return new hd(r)}convertGeoPoint(t){return new dd(Ft(t.latitude),Ft(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=ju(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(Cr(t));default:return null}}convertTimestamp(t){const e=es(t);return new jt(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=Et.fromString(t);ft(o_(s));const i=new Dr(s.get(1),s.get(3)),r=new z(s.popFirst(5));return i.isEqual(e)||kn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
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
 */function U_(n,t,e){let s;return s=n?n.toFirestore(t):t,s}/**
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
 */class ur{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class j_ extends B_{constructor(t,e,s,i,r,o){super(t,e,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new la(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(vc("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}}class la extends j_{data(t={}){return super.data(t)}}class TT{constructor(t,e,s,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new ur(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new la(this._firestore,this._userDataWriter,s.key,s,new ur(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new U(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new la(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ur(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new la(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ur(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,d=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:IT(a.type),doc:c,oldIndex:l,newIndex:d}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function IT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
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
 */function Va(n){n=Ue(n,xe);const t=Ue(n.firestore,$s);return aT(ld(t),n._key).then(e=>RT(t,n,e))}class z_ extends ET{constructor(t){super(),this.firestore=t}convertBytes(t){return new vi(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new xe(this.firestore,null,e)}}function _t(n){n=Ue(n,os);const t=Ue(n.firestore,$s),e=ld(t),s=new z_(t);return xT(n._query),cT(e,n._query).then(i=>new TT(t,s,n,i))}function AT(n,t,e){n=Ue(n,xe);const s=Ue(n.firestore,$s),i=U_(n.converter,t);return wc(s,[N_(_c(s),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Oe.none())])}function sn(n,t,e,...s){n=Ue(n,xe);const i=Ue(n.firestore,$s),r=_c(i);let o;return o=typeof(t=Mt(t))=="string"||t instanceof gc?yT(r,"updateDoc",n._key,t,e,s):_T(r,"updateDoc",n._key,t),wc(i,[o.toMutation(n._key,Oe.exists(!0))])}function kT(n){return wc(Ue(n.firestore,$s),[new Yu(n._key,Oe.none())])}function Pi(n,t){const e=Ue(n.firestore,$s),s=ie(n),i=U_(n.converter,t);return wc(e,[N_(_c(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,Oe.exists(!1))]).then(()=>s)}function wc(n,t){return function(s,i){const r=new Tn;return s.asyncQueue.enqueueAndForget(async()=>QE(await oT(s),i,r)),r.promise}(ld(n),t)}function RT(n,t,e){const s=e.docs.get(t._key),i=new z_(n);return new j_(n,i,t._key,s,new ur(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Ii=i})(Vs),Ps(new Zn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new $s(new Pw(s.getProvider("auth-internal")),new Ow(s.getProvider("app-check-internal")),function(l,d){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new U(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dr(l.options.projectId,d)}(o,i),o);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Qe(mf,"4.7.3",t),Qe(mf,"4.7.3","esm2017")})();/**
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
 */const H_="firebasestorage.googleapis.com",W_="storageBucket",PT=2*60*1e3,ST=10*60*1e3,CT=1e3;/**
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
 */class St extends on{constructor(t,e,s=0){super(pl(t),`Firebase Storage: ${e} (${pl(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,St.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return pl(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var It;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(It||(It={}));function pl(n){return"storage/"+n}function wd(){const n="An unknown error occurred, please check the error payload for server response.";return new St(It.UNKNOWN,n)}function DT(n){return new St(It.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function OT(n){return new St(It.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function MT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new St(It.UNAUTHENTICATED,n)}function NT(){return new St(It.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function LT(n){return new St(It.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function q_(){return new St(It.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function G_(){return new St(It.CANCELED,"User canceled the upload/download.")}function VT(n){return new St(It.INVALID_URL,"Invalid URL '"+n+"'.")}function FT(n){return new St(It.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function BT(){return new St(It.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+W_+"' property when initializing the app?")}function Y_(){return new St(It.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $T(){return new St(It.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function UT(){return new St(It.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jT(n){return new St(It.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function cu(n){return new St(It.INVALID_ARGUMENT,n)}function K_(){return new St(It.APP_DELETED,"The Firebase app was deleted.")}function zT(n){return new St(It.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wr(n,t){return new St(It.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function qi(n){throw new St(It.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Se{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=Se.makeFromUrl(t,e)}catch{return new Se(t,"")}if(s.path==="")return s;throw FT(t)}static makeFromUrl(t,e){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(C){C.path_=decodeURIComponent(C.path)}const d="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${d}/b/${i}/o${f}`,"i"),_={bucket:1,path:3},v=e===H_?"(?:storage.googleapis.com|storage.cloud.google.com)":e,b="([^?#]*)",T=new RegExp(`^https?://${v}/${i}/${b}`,"i"),S=[{regex:a,indices:c,postModify:r},{regex:m,indices:_,postModify:l},{regex:T,indices:{bucket:1,path:2},postModify:l}];for(let C=0;C<S.length;C++){const O=S[C],D=O.regex.exec(t);if(D){const E=D[O.indices.bucket];let y=D[O.indices.path];y||(y=""),s=new Se(E,y),O.postModify(s);break}}if(s==null)throw VT(t);return s}}class HT{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function WT(n,t,e){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function d(...b){l||(l=!0,t.apply(null,b))}function h(b){i=setTimeout(()=>{i=null,n(m,c())},b)}function f(){r&&clearTimeout(r)}function m(b,...T){if(l){f();return}if(b){f(),d.call(null,b,...T);return}if(c()||o){f(),d.call(null,b,...T);return}s<64&&(s*=2);let S;a===1?(a=2,S=0):S=(s+Math.random())*1e3,h(S)}let _=!1;function v(b){_||(_=!0,f(),!l&&(i!==null?(b||(a=2),clearTimeout(i),h(0)):b||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,v(!0)},e),v}function qT(n){n(!1)}/**
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
 */function GT(n){return n!==void 0}function YT(n){return typeof n=="function"}function KT(n){return typeof n=="object"&&!Array.isArray(n)}function xc(n){return typeof n=="string"||n instanceof String}function tp(n){return xd()&&n instanceof Blob}function xd(){return typeof Blob<"u"}function ep(n,t,e,s){if(s<t)throw cu(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw cu(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
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
 */function io(n,t,e){let s=t;return e==null&&(s=`https://${t}`),`${e}://${s}/v0${n}`}function Q_(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const i=t(s)+"="+t(n[s]);e=e+i+"&"}return e=e.slice(0,-1),e}var As;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(As||(As={}));/**
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
 */class QT{constructor(t,e,s,i,r,o,a,c,l,d,h,f=!0){this.url_=t,this.method_=e,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,_)=>{this.resolve_=m,this.reject_=_,this.start_()})}start_(){const t=(s,i)=>{if(i){s(!1,new Fo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===As.NO_ERROR,c=r.getStatus();if(!a||X_(c,this.additionalRetryCodes_)&&this.retry){const d=r.getErrorCode()===As.ABORT;s(!1,new Fo(!1,null,d));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Fo(l,r))})},e=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());GT(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=wd();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?K_():G_();o(c)}else{const c=q_();o(c)}};this.canceled_?e(!1,new Fo(!1,null,!0)):this.backoffId_=WT(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&qT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fo{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function XT(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function JT(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function ZT(n,t){t&&(n["X-Firebase-GMPID"]=t)}function tI(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function eI(n,t,e,s,i,r,o=!0){const a=Q_(n.urlParams),c=n.url+a,l=Object.assign({},n.headers);return ZT(l,t),XT(l,e),JT(l,r),tI(l,s),new QT(c,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
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
 */function nI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sI(...n){const t=nI();if(t!==void 0){const e=new t;for(let s=0;s<n.length;s++)e.append(n[s]);return e.getBlob()}else{if(xd())return new Blob(n);throw new St(It.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function iI(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function rI(n){if(typeof atob>"u")throw jT("base-64");return atob(n)}/**
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
 */const Ke={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ml{constructor(t,e){this.data=t,this.contentType=e||null}}function oI(n,t){switch(n){case Ke.RAW:return new ml(J_(t));case Ke.BASE64:case Ke.BASE64URL:return new ml(Z_(n,t));case Ke.DATA_URL:return new ml(cI(t),lI(t))}throw wd()}function J_(n){const t=[];for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const r=s,o=n.charCodeAt(++e);s=65536|(r&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function aI(n){let t;try{t=decodeURIComponent(n)}catch{throw wr(Ke.DATA_URL,"Malformed data URL.")}return J_(t)}function Z_(n,t){switch(n){case Ke.BASE64:{const i=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(i||r)throw wr(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ke.BASE64URL:{const i=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(i||r)throw wr(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=rI(t)}catch(i){throw i.message.includes("polyfill")?i:wr(n,"Invalid character found")}const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}class ty{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw wr(Ke.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;s!=null&&(this.base64=uI(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function cI(n){const t=new ty(n);return t.base64?Z_(Ke.BASE64,t.rest):aI(t.rest)}function lI(n){return new ty(n).contentType}function uI(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
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
 */class Vn{constructor(t,e){let s=0,i="";tp(t)?(this.data_=t,s=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(tp(this.data_)){const s=this.data_,i=iI(s,t,e);return i===null?null:new Vn(i)}else{const s=new Uint8Array(this.data_.buffer,t,e-t);return new Vn(s,!0)}}static getBlob(...t){if(xd()){const e=t.map(s=>s instanceof Vn?s.data_:s);return new Vn(sI.apply(null,e))}else{const e=t.map(o=>xc(o)?oI(Ke.RAW,o).data:o.data_);let s=0;e.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return e.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Vn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function ey(n){let t;try{t=JSON.parse(n)}catch{return null}return KT(t)?t:null}/**
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
 */function dI(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function hI(n,t){const e=t.split("/").filter(s=>s.length>0).join("/");return n.length===0?e:n+"/"+e}function ny(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
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
 */function fI(n,t){return t}class be{constructor(t,e,s,i){this.server=t,this.local=e||t,this.writable=!!s,this.xform=i||fI}}let Bo=null;function pI(n){return!xc(n)||n.length<2?n:ny(n)}function sy(){if(Bo)return Bo;const n=[];n.push(new be("bucket")),n.push(new be("generation")),n.push(new be("metageneration")),n.push(new be("name","fullPath",!0));function t(r,o){return pI(o)}const e=new be("name");e.xform=t,n.push(e);function s(r,o){return o!==void 0?Number(o):o}const i=new be("size");return i.xform=s,n.push(i),n.push(new be("timeCreated")),n.push(new be("updated")),n.push(new be("md5Hash",null,!0)),n.push(new be("cacheControl",null,!0)),n.push(new be("contentDisposition",null,!0)),n.push(new be("contentEncoding",null,!0)),n.push(new be("contentLanguage",null,!0)),n.push(new be("contentType",null,!0)),n.push(new be("metadata","customMetadata",!0)),Bo=n,Bo}function mI(n,t){function e(){const s=n.bucket,i=n.fullPath,r=new Se(s,i);return t._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:e})}function gI(n,t,e){const s={};s.type="file";const i=e.length;for(let r=0;r<i;r++){const o=e[r];s[o.local]=o.xform(s,t[o.server])}return mI(s,n),s}function iy(n,t,e){const s=ey(t);return s===null?null:gI(n,s,e)}function _I(n,t,e,s){const i=ey(t);if(i===null||!xc(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(l=>{const d=n.bucket,h=n.fullPath,f="/b/"+o(d)+"/o/"+o(h),m=io(f,e,s),_=Q_({alt:"media",token:l});return m+_})[0]}function ry(n,t){const e={},s=t.length;for(let i=0;i<s;i++){const r=t[i];r.writable&&(e[r.server]=n[r.local])}return JSON.stringify(e)}class Si{constructor(t,e,s,i){this.url=t,this.method=e,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function In(n){if(!n)throw wd()}function Ed(n,t){function e(s,i){const r=iy(n,i,t);return In(r!==null),r}return e}function yI(n,t){function e(s,i){const r=iy(n,i,t);return In(r!==null),_I(r,i,n.host,n._protocol)}return e}function ro(n){function t(e,s){let i;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?i=NT():i=MT():e.getStatus()===402?i=OT(n.bucket):e.getStatus()===403?i=LT(n.path):i=s,i.status=e.getStatus(),i.serverResponse=s.serverResponse,i}return t}function oy(n){const t=ro(n);function e(s,i){let r=t(s,i);return s.getStatus()===404&&(r=DT(n.path)),r.serverResponse=i.serverResponse,r}return e}function vI(n,t,e){const s=t.fullServerUrl(),i=io(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new Si(i,r,Ed(n,e),o);return a.errorHandler=oy(t),a}function bI(n,t,e){const s=t.fullServerUrl(),i=io(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new Si(i,r,yI(n,e),o);return a.errorHandler=oy(t),a}function wI(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function ay(n,t,e){const s=Object.assign({},e);return s.fullPath=n.path,s.size=t.size(),s.contentType||(s.contentType=wI(null,t)),s}function xI(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let C=0;C<2;C++)S=S+Math.random().toString().slice(2);return S}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=ay(t,s,i),d=ry(l,e),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",m=Vn.getBlob(h,s,f);if(m===null)throw Y_();const _={name:l.fullPath},v=io(r,n.host,n._protocol),b="POST",T=n.maxUploadRetryTime,I=new Si(v,b,Ed(n,e),T);return I.urlParams=_,I.headers=o,I.body=m.uploadData(),I.errorHandler=ro(t),I}class Fa{constructor(t,e,s,i){this.current=t,this.total=e,this.finalized=!!s,this.metadata=i||null}}function Td(n,t){let e=null;try{e=n.getResponseHeader("X-Goog-Upload-Status")}catch{In(!1)}return In(!!e&&(t||["active"]).indexOf(e)!==-1),e}function EI(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o=ay(t,s,i),a={name:o.fullPath},c=io(r,n.host,n._protocol),l="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=ry(o,e),f=n.maxUploadRetryTime;function m(v){Td(v);let b;try{b=v.getResponseHeader("X-Goog-Upload-URL")}catch{In(!1)}return In(xc(b)),b}const _=new Si(c,l,m,f);return _.urlParams=a,_.headers=d,_.body=h,_.errorHandler=ro(t),_}function TI(n,t,e,s){const i={"X-Goog-Upload-Command":"query"};function r(l){const d=Td(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{In(!1)}h||In(!1);const f=Number(h);return In(!isNaN(f)),new Fa(f,s.size(),d==="final")}const o="POST",a=n.maxUploadRetryTime,c=new Si(e,o,r,a);return c.headers=i,c.errorHandler=ro(t),c}const np=256*1024;function II(n,t,e,s,i,r,o,a){const c=new Fa(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw $T();const l=c.total-c.current;let d=l;i>0&&(d=Math.min(d,i));const h=c.current,f=h+d;let m="";d===0?m="finalize":l===d?m="upload, finalize":m="upload";const _={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${c.current}`},v=s.slice(h,f);if(v===null)throw Y_();function b(C,O){const D=Td(C,["active","final"]),E=c.current+d,y=s.size();let x;return D==="final"?x=Ed(t,r)(C,O):x=null,new Fa(E,y,D==="final",x)}const T="POST",I=t.maxUploadRetryTime,S=new Si(e,T,b,I);return S.headers=_,S.body=v.uploadData(),S.progressCallback=a||null,S.errorHandler=ro(n),S}const Te={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function gl(n){switch(n){case"running":case"pausing":case"canceling":return Te.RUNNING;case"paused":return Te.PAUSED;case"success":return Te.SUCCESS;case"canceled":return Te.CANCELED;case"error":return Te.ERROR;default:return Te.ERROR}}/**
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
 */class AI{constructor(t,e,s){if(YT(t)||e!=null||s!=null)this.next=t,this.error=e??void 0,this.complete=s??void 0;else{const r=t;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
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
 */function Qs(n){return(...t)=>{Promise.resolve().then(()=>n(...t))}}class kI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=As.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=As.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=As.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,s,i){if(this.sent_)throw qi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw qi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class RI extends kI{initXhr(){this.xhr_.responseType="text"}}function ii(){return new RI}/**
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
 */class PI{constructor(t,e,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=s,this._mappings=sy(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(It.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(X_(i.status,[]))if(r)i=q_();else{this.sleepTime=Math.max(this.sleepTime*2,CT),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(It.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,s])=>{switch(this._state){case"running":t(e,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const s=EI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,ii,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,s)=>{const i=TI(this._ref.storage,this._ref._location,t,this._blob),r=this._ref.storage._makeRequest(i,ii,e,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=np*this._chunkMultiplier,e=new Fa(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=II(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ii,i,r,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){np*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const s=vI(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,ii,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const s=xI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,ii,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e=this._state==="paused";this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=G_(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=gl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,s,i){const r=new AI(e||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);e!==-1&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(gl(this._state)){case Te.SUCCESS:Qs(this._resolve.bind(null,this.snapshot))();break;case Te.CANCELED:case Te.ERROR:const e=this._reject;Qs(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(gl(this._state)){case Te.RUNNING:case Te.PAUSED:t.next&&Qs(t.next.bind(t,this.snapshot))();break;case Te.SUCCESS:t.complete&&Qs(t.complete.bind(t))();break;case Te.CANCELED:case Te.ERROR:t.error&&Qs(t.error.bind(t,this._error))();break;default:t.error&&Qs(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
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
 */class Os{constructor(t,e){this._service=t,e instanceof Se?this._location=e:this._location=Se.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Os(t,e)}get root(){const t=new Se(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ny(this._location.path)}get storage(){return this._service}get parent(){const t=dI(this._location.path);if(t===null)return null;const e=new Se(this._location.bucket,t);return new Os(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw zT(t)}}function SI(n,t,e){return n._throwIfRoot("uploadBytesResumable"),new PI(n,new Vn(t),e)}function CI(n){n._throwIfRoot("getDownloadURL");const t=bI(n.storage,n._location,sy());return n.storage.makeRequestWithTokens(t,ii).then(e=>{if(e===null)throw UT();return e})}function DI(n,t){const e=hI(n._location.path,t),s=new Se(n._location.bucket,e);return new Os(n.storage,s)}/**
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
 */function OI(n){return/^[A-Za-z]+:\/\//.test(n)}function MI(n,t){return new Os(n,t)}function cy(n,t){if(n instanceof Id){const e=n;if(e._bucket==null)throw BT();const s=new Os(e,e._bucket);return t!=null?cy(s,t):s}else return t!==void 0?DI(n,t):n}function NI(n,t){if(t&&OI(t)){if(n instanceof Id)return MI(n,t);throw cu("To use ref(service, url), the first argument must be a Storage instance.")}else return cy(n,t)}function sp(n,t){const e=t==null?void 0:t[W_];return e==null?null:Se.makeFromBucketSpec(e,n)}function LI(n,t,e,s={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:mg(i,n.app.options.projectId))}class Id{constructor(t,e,s,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=H_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=PT,this._maxUploadRetryTime=ST,this._requests=new Set,i!=null?this._bucket=Se.makeFromBucketSpec(i,this._host):this._bucket=sp(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Se.makeFromBucketSpec(this._url,t):this._bucket=sp(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ep("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ep("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Os(this,t)}_makeRequest(t,e,s,i,r=!0){if(this._deleted)return new HT(K_());{const o=eI(t,this._appId,s,i,e,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,e){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,i).getPromise()}}const ip="@firebase/storage",rp="0.13.2";/**
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
 */const ly="storage";function VI(n,t,e){return n=Mt(n),SI(n,t,e)}function FI(n){return n=Mt(n),CI(n)}function BI(n,t){return n=Mt(n),NI(n,t)}function $I(n=Fu(),t){n=Mt(n);const s=ic(n,ly).getImmediate({identifier:t}),i=hg("storage");return i&&UI(s,...i),s}function UI(n,t,e,s={}){LI(n,t,e,s)}function jI(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Id(e,s,i,t,Vs)}function zI(){Ps(new Zn(ly,jI,"PUBLIC").setMultipleInstances(!0)),Qe(ip,rp,""),Qe(ip,rp,"esm2017")}zI();function Ad(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(e[s[i]]=n[s[i]]);return e}function uy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HI=uy,dy=new Kr("auth","Firebase",uy());/**
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
 */const Ba=new Lu("@firebase/auth");function WI(n,...t){Ba.logLevel<=it.WARN&&Ba.warn(`Auth (${Vs}): ${n}`,...t)}function ua(n,...t){Ba.logLevel<=it.ERROR&&Ba.error(`Auth (${Vs}): ${n}`,...t)}/**
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
 */function je(n,...t){throw kd(n,...t)}function Ze(n,...t){return kd(n,...t)}function hy(n,t,e){const s=Object.assign(Object.assign({},HI()),{[t]:e});return new Kr("auth","Firebase",s).create(t,{appName:n.name})}function Xn(n){return hy(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kd(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return dy.create(n,...t)}function H(n,t,...e){if(!n)throw kd(t,...e)}function yn(n){const t="INTERNAL ASSERTION FAILED: "+n;throw ua(t),new Error(t)}function Pn(n,t){n||yn(t)}/**
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
 */function lu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function qI(){return op()==="http:"||op()==="https:"}function op(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function GI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qI()||r0()||"connection"in navigator)?navigator.onLine:!0}function YI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class oo{constructor(t,e){this.shortDelay=t,this.longDelay=e,Pn(e>t,"Short delay should be less than long delay!"),this.isMobile=n0()||o0()}get(){return GI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rd(n,t){Pn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */const KI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QI=new oo(3e4,6e4);function as(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Sn(n,t,e,s,i={}){return py(n,i,async()=>{let r={},o={};s&&(t==="GET"?o=s:r={body:JSON.stringify(s)});const a=Qr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:t,headers:c},r);return i0()||(l.referrerPolicy="no-referrer"),fy.fetch()(my(n,n.config.apiHost,e,a),l)})}async function py(n,t,e){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},KI),t);try{const i=new JI(n),r=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw $o(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw $o(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw $o(n,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw hy(n,d,l);je(n,d)}}catch(i){if(i instanceof on)throw i;je(n,"network-request-failed",{message:String(i)})}}async function Ec(n,t,e,s,i={}){const r=await Sn(n,t,e,s,i);return"mfaPendingCredential"in r&&je(n,"multi-factor-auth-required",{_serverResponse:r}),r}function my(n,t,e,s){const i=`${t}${e}?${s}`;return n.config.emulator?Rd(n.config,i):`${n.config.apiScheme}://${i}`}function XI(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JI{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(Ze(this.auth,"network-request-failed")),QI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $o(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const i=Ze(n,t,s);return i.customData._tokenResponse=e,i}function ap(n){return n!==void 0&&n.enterprise!==void 0}class ZI{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return XI(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function tA(n,t){return Sn(n,"GET","/v2/recaptchaConfig",as(n,t))}/**
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
 */async function eA(n,t){return Sn(n,"POST","/v1/accounts:delete",t)}async function gy(n,t){return Sn(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function xr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function nA(n,t=!1){const e=Mt(n),s=await e.getIdToken(t),i=Pd(s);H(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:xr(_l(i.auth_time)),issuedAtTime:xr(_l(i.iat)),expirationTime:xr(_l(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function _l(n){return Number(n)*1e3}function Pd(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return ua("JWT malformed, contained fewer than 3 sections"),null;try{const i=ug(e);return i?JSON.parse(i):(ua("Failed to decode base64 JWT payload"),null)}catch(i){return ua("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cp(n){const t=Pd(n);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Vr(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof on&&sA(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function sA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class iA{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class uu{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=xr(this.lastLoginAt),this.creationTime=xr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $a(n){var t;const e=n.auth,s=await n.getIdToken(),i=await Vr(n,gy(e,{idToken:s}));H(i==null?void 0:i.users.length,e,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?_y(r.providerUserInfo):[],a=oA(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new uu(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function rA(n){const t=Mt(n);await $a(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oA(n,t){return[...n.filter(s=>!t.some(i=>i.providerId===s.providerId)),...t]}function _y(n){return n.map(t=>{var{providerId:e}=t,s=Ad(t,["providerId"]);return{providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function aA(n,t){const e=await py(n,{},async()=>{const s=Qr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=my(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function cA(n,t){return Sn(n,"POST","/v2/accounts:revokeToken",as(n,t))}/**
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
 */class ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):cp(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){H(t.length!==0,"internal-error");const e=cp(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:i,expiresIn:r}=await aA(t,e);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:i,expirationTime:r}=e,o=new ci;return s&&(H(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),i&&(H(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),r&&(H(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ci,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
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
 */function Mn(n,t){H(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class vn{constructor(t){var{uid:e,auth:s,stsTokenManager:i}=t,r=Ad(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new uu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Vr(this,this.stsTokenManager.getToken(this.auth,t));return H(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return nA(this,t)}reload(){return rA(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new vn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await $a(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(Xn(this.auth));const t=await this.getIdToken();return await Vr(this,eA(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var s,i,r,o,a,c,l,d;const h=(s=e.displayName)!==null&&s!==void 0?s:void 0,f=(i=e.email)!==null&&i!==void 0?i:void 0,m=(r=e.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=e.photoURL)!==null&&o!==void 0?o:void 0,v=(a=e.tenantId)!==null&&a!==void 0?a:void 0,b=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=e.createdAt)!==null&&l!==void 0?l:void 0,I=(d=e.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:C,isAnonymous:O,providerData:D,stsTokenManager:E}=e;H(S&&E,t,"internal-error");const y=ci.fromJSON(this.name,E);H(typeof S=="string",t,"internal-error"),Mn(h,t.name),Mn(f,t.name),H(typeof C=="boolean",t,"internal-error"),H(typeof O=="boolean",t,"internal-error"),Mn(m,t.name),Mn(_,t.name),Mn(v,t.name),Mn(b,t.name),Mn(T,t.name),Mn(I,t.name);const x=new vn({uid:S,auth:t,email:f,emailVerified:C,displayName:h,isAnonymous:O,photoURL:_,phoneNumber:m,tenantId:v,stsTokenManager:y,createdAt:T,lastLoginAt:I});return D&&Array.isArray(D)&&(x.providerData=D.map(A=>Object.assign({},A))),b&&(x._redirectEventId=b),x}static async _fromIdTokenResponse(t,e,s=!1){const i=new ci;i.updateFromServerResponse(e);const r=new vn({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:s});return await $a(r),r}static async _fromGetAccountInfoResponse(t,e,s){const i=e.users[0];H(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?_y(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new ci;a.updateFromIdToken(s);const c=new vn({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new uu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
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
 */const lp=new Map;function bn(n){Pn(n instanceof Function,"Expected a class definition");let t=lp.get(n);return t?(Pn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,lp.set(n,t),t)}/**
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
 */class yy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}yy.type="NONE";const up=yy;/**
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
 */function da(n,t,e){return`firebase:${n}:${t}:${e}`}class li{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=da(this.userKey,i.apiKey,r),this.fullPersistenceKey=da("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?vn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new li(bn(up),t,s);const i=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||bn(up);const o=da(s,t.config.apiKey,t.name);let a=null;for(const l of e)try{const d=await l._get(o);if(d){const h=vn._fromJSON(t,d);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new li(r,t,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new li(r,t,s))}}/**
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
 */function dp(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(xy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(vy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ty(t))return"Blackberry";if(Iy(t))return"Webos";if(by(t))return"Safari";if((t.includes("chrome/")||wy(t))&&!t.includes("edge/"))return"Chrome";if(Ey(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function vy(n=me()){return/firefox\//i.test(n)}function by(n=me()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function wy(n=me()){return/crios\//i.test(n)}function xy(n=me()){return/iemobile/i.test(n)}function Ey(n=me()){return/android/i.test(n)}function Ty(n=me()){return/blackberry/i.test(n)}function Iy(n=me()){return/webos/i.test(n)}function Sd(n=me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function lA(n=me()){var t;return Sd(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function uA(){return a0()&&document.documentMode===10}function Ay(n=me()){return Sd(n)||Ey(n)||Iy(n)||Ty(n)||/windows phone/i.test(n)||xy(n)}/**
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
 */function ky(n,t=[]){let e;switch(n){case"Browser":e=dp(me());break;case"Worker":e=`${dp(me())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Vs}/${s}`}/**
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
 */class dA{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const s=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});s.onAbort=e,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const s of this.queue)await s(t),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function hA(n,t={}){return Sn(n,"GET","/v2/passwordPolicy",as(n,t))}/**
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
 */const fA=6;class pA{constructor(t){var e,s,i,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:fA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let i=0;i<t.length;i++)s=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
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
 */class mA{constructor(t,e,s,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hp(this),this.idTokenSubscription=new hp(this),this.beforeStateQueue=new dA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=bn(e)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await li.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await gy(this,{idToken:t}),s=await vn._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(_n(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await $a(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=YI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(_n(this.app))return Promise.reject(Xn(this));const e=t?Mt(t):null;return e&&H(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return _n(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await hA(this),e=new pA(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Kr("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await cA(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&bn(t)||this._popupRedirectResolver;H(e,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[bn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,s;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,i){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,s,i);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ky(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(e["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&WI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Us(n){return Mt(n)}class hp{constructor(t){this.auth=t,this.observer=null,this.addObserver=m0(e=>this.observer=e)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gA(n){Tc=n}function Ry(n){return Tc.loadJS(n)}function _A(){return Tc.recaptchaEnterpriseScript}function yA(){return Tc.gapiScript}function vA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const bA="recaptcha-enterprise",wA="NO_RECAPTCHA";class xA{constructor(t){this.type=bA,this.auth=Us(t)}async verify(t="verify",e=!1){async function s(r){if(!e){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{tA(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new ZI(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;ap(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:t}).then(l=>{o(l)}).catch(()=>{o(wA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!e&&ap(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=_A();c.length!==0&&(c+=a),Ry(c).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function fp(n,t,e,s=!1){const i=new xA(n);let r;try{r=await i.verify(e)}catch{r=await i.verify(e,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function du(n,t,e,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await fp(n,t,e,e==="getOobCode");return s(n,r)}else return s(n,t).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await fp(n,t,e,e==="getOobCode");return s(n,o)}else return Promise.reject(r)})}/**
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
 */function EA(n,t){const e=ic(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),r=e.getOptions();if(Aa(r,t??{}))return i;je(i,"already-initialized")}return e.initialize({options:t})}function TA(n,t){const e=(t==null?void 0:t.persistence)||[],s=(Array.isArray(e)?e:[e]).map(bn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function IA(n,t,e){const s=Us(n);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!1,r=Py(t),{host:o,port:a}=AA(t),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),kA()}function Py(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function AA(n){const t=Py(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:pp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:pp(o)}}}function pp(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function kA(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Cd{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return yn("not implemented")}_getIdTokenResponse(t){return yn("not implemented")}_linkToIdToken(t,e){return yn("not implemented")}_getReauthenticationResolver(t){return yn("not implemented")}}async function RA(n,t){return Sn(n,"POST","/v1/accounts:signUp",t)}/**
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
 */async function PA(n,t){return Ec(n,"POST","/v1/accounts:signInWithPassword",as(n,t))}async function SA(n,t){return Sn(n,"POST","/v1/accounts:sendOobCode",as(n,t))}async function CA(n,t){return SA(n,t)}/**
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
 */async function DA(n,t){return Ec(n,"POST","/v1/accounts:signInWithEmailLink",as(n,t))}async function OA(n,t){return Ec(n,"POST","/v1/accounts:signInWithEmailLink",as(n,t))}/**
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
 */class Fr extends Cd{constructor(t,e,s,i=null){super("password",s),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Fr(t,e,"password")}static _fromEmailAndCode(t,e,s=null){return new Fr(t,e,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return du(t,e,"signInWithPassword",PA);case"emailLink":return DA(t,{email:this._email,oobCode:this._password});default:je(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const s={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return du(t,s,"signUpPassword",RA);case"emailLink":return OA(t,{idToken:e,email:this._email,oobCode:this._password});default:je(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function ui(n,t){return Ec(n,"POST","/v1/accounts:signInWithIdp",as(n,t))}/**
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
 */const MA="http://localhost";class Ms extends Cd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ms(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):je("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:i}=e,r=Ad(e,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ms(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return ui(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,ui(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ui(t,e)}buildRequest(){const t={requestUri:MA,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Qr(e)}return t}}/**
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
 */function NA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LA(n){const t=rr(or(n)).link,e=t?rr(or(t)).deep_link_id:null,s=rr(or(n)).deep_link_id;return(s?rr(or(s)).link:null)||s||e||t||n}class Dd{constructor(t){var e,s,i,r,o,a;const c=rr(or(t)),l=(e=c.apiKey)!==null&&e!==void 0?e:null,d=(s=c.oobCode)!==null&&s!==void 0?s:null,h=NA((i=c.mode)!==null&&i!==void 0?i:null);H(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=LA(t);try{return new Dd(e)}catch{return null}}}/**
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
 */class Ci{constructor(){this.providerId=Ci.PROVIDER_ID}static credential(t,e){return Fr._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const s=Dd.parseLink(e);return H(s,"argument-error"),Fr._fromEmailAndCode(t,s.code,s.tenantId)}}Ci.PROVIDER_ID="password";Ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Sy{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ao extends Sy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fn extends ao{constructor(){super("facebook.com")}static credential(t){return Ms._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Fn.credentialFromTaggedObject(t)}static credentialFromError(t){return Fn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Fn.credential(t.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
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
 */class Bn extends ao{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ms._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Bn.credentialFromTaggedObject(t)}static credentialFromError(t){return Bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return Bn.credential(e,s)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
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
 */class $n extends ao{constructor(){super("github.com")}static credential(t){return Ms._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $n.credentialFromTaggedObject(t)}static credentialFromError(t){return $n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $n.credential(t.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
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
 */class Un extends ao{constructor(){super("twitter.com")}static credential(t,e){return Ms._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Un.credentialFromTaggedObject(t)}static credentialFromError(t){return Un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return Un.credential(e,s)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
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
 */class bi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,i=!1){const r=await vn._fromIdTokenResponse(t,s,i),o=mp(s);return new bi({user:r,providerId:o,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const i=mp(s);return new bi({user:t,providerId:i,_tokenResponse:s,operationType:e})}}function mp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ua extends on{constructor(t,e,s,i){var r;super(e.code,e.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ua.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,i){return new Ua(t,e,s,i)}}function Cy(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ua._fromErrorAndOperation(n,r,t,s):r})}async function VA(n,t,e=!1){const s=await Vr(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return bi._forOperation(n,"link",s)}/**
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
 */async function FA(n,t,e=!1){const{auth:s}=n;if(_n(s.app))return Promise.reject(Xn(s));const i="reauthenticate";try{const r=await Vr(n,Cy(s,i,t,n),e);H(r.idToken,s,"internal-error");const o=Pd(r.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(n.uid===a,s,"user-mismatch"),bi._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&je(s,"user-mismatch"),r}}/**
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
 */async function Dy(n,t,e=!1){if(_n(n.app))return Promise.reject(Xn(n));const s="signIn",i=await Cy(n,s,t),r=await bi._fromIdTokenResponse(n,s,i);return e||await n._updateCurrentUser(r.user),r}async function BA(n,t){return Dy(Us(n),t)}/**
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
 */async function $A(n){const t=Us(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function UA(n,t,e){const s=Us(n);await du(s,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",CA)}function jA(n,t,e){return _n(n.app)?Promise.reject(Xn(n)):BA(Mt(n),Ci.credential(t,e)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&$A(n),s})}function zA(n,t,e,s){return Mt(n).onIdTokenChanged(t,e,s)}function HA(n,t,e){return Mt(n).beforeAuthStateChanged(t,e)}function WA(n,t,e,s){return Mt(n).onAuthStateChanged(t,e,s)}function qA(n){return Mt(n).signOut()}const ja="__sak";/**
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
 */const GA=1e3,YA=10;class My extends Oy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ay(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),i=this.localCache[e];s!==i&&t(e,i,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!e&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);uA()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,YA):i()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},GA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}My.type="LOCAL";const KA=My;/**
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
 */function QA(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Ic{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const s=new Ic(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:i,data:r}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(e.origin,r)),c=await QA(a);e.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ic.receivers=[];/**
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
 */class XA{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Od("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tn(){return window}function JA(n){tn().location.href=n}/**
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
 */function Vy(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function ZA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ek(){return Vy()?self:null}/**
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
 */const Fy="firebaseLocalStorageDb",nk=1,za="firebaseLocalStorage",By="fbase_key";class co{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Ac(n,t){return n.transaction([za],t?"readwrite":"readonly").objectStore(za)}function sk(){const n=indexedDB.deleteDatabase(Fy);return new co(n).toPromise()}function hu(){const n=indexedDB.open(Fy,nk);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(za,{keyPath:By})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(za)?t(s):(s.close(),await sk(),t(await hu()))})})}async function gp(n,t,e){const s=Ac(n,!0).put({[By]:t,value:e});return new co(s).toPromise()}async function ik(n,t){const e=Ac(n,!1).get(t),s=await new co(e).toPromise();return s===void 0?null:s.value}function _p(n,t){const e=Ac(n,!0).delete(t);return new co(e).toPromise()}const rk=800,ok=3;class $y{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hu(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>ok)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ic._getInstance(ek()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await ZA(),!this.activeServiceWorker)return;this.sender=new XA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((e=s[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||tk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await hu();return await gp(t,ja,"1"),await _p(t,ja),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>gp(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>ik(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>_p(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const r=Ac(i,!1).getAll();return new co(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:i,value:r}of t)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$y.type="LOCAL";const ak=$y;new oo(3e4,6e4);/**
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
 */function ck(n,t){return t?bn(t):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Md extends Cd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ui(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ui(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ui(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function lk(n){return Dy(n.auth,new Md(n),n.bypassAuthState)}function uk(n){const{auth:t,user:e}=n;return H(e,t,"internal-error"),FA(e,new Md(n),n.bypassAuthState)}async function dk(n){const{auth:t,user:e}=n;return H(e,t,"internal-error"),VA(e,new Md(n),n.bypassAuthState)}/**
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
 */class Uy{constructor(t,e,s,i,r=!1){this.auth=t,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return lk;case"linkViaPopup":case"linkViaRedirect":return dk;case"reauthViaPopup":case"reauthViaRedirect":return uk;default:je(this.auth,"internal-error")}}resolve(t){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hk=new oo(2e3,1e4);class oi extends Uy{constructor(t,e,s,i,r){super(t,e,i,r),this.provider=s,this.authWindow=null,this.pollId=null,oi.currentPopupAction&&oi.currentPopupAction.cancel(),oi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const t=Od();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,s;if(!((s=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,hk.get())};t()}}oi.currentPopupAction=null;/**
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
 */const fk="pendingRedirect",ha=new Map;class pk extends Uy{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=ha.get(this.auth._key());if(!t){try{const s=await mk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(e){t=()=>Promise.reject(e)}ha.set(this.auth._key(),t)}return this.bypassAuthState||ha.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mk(n,t){const e=yk(t),s=_k(n);if(!await s._isAvailable())return!1;const i=await s._get(e)==="true";return await s._remove(e),i}function gk(n,t){ha.set(n._key(),t)}function _k(n){return bn(n._redirectPersistence)}function yk(n){return da(fk,n.config.apiKey,n.name)}async function vk(n,t,e=!1){if(_n(n.app))return Promise.reject(Xn(n));const s=Us(n),i=ck(s,t),o=await new pk(s,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
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
 */const bk=10*60*1e3;class wk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!xk(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var s;if(t.error&&!jy(t)){const i=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";e.onError(Ze(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=bk&&this.cachedEventUids.clear(),this.cachedEventUids.has(yp(t))}saveEventToCache(t){this.cachedEventUids.add(yp(t)),this.lastProcessedEventTime=Date.now()}}function yp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function jy({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function xk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jy(n);default:return!1}}/**
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
 */async function Ek(n,t={}){return Sn(n,"GET","/v1/projects",t)}/**
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
 */const Tk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ik=/^https?/;async function Ak(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Ek(n);for(const e of t)try{if(kk(e))return}catch{}je(n,"unauthorized-domain")}function kk(n){const t=lu(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===s}if(!Ik.test(e))return!1;if(Tk.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Rk=new oo(3e4,6e4);function vp(){const n=tn().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Pk(n){return new Promise((t,e)=>{var s,i,r;function o(){vp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{vp(),e(Ze(n,"network-request-failed"))},timeout:Rk.get()})}if(!((i=(s=tn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((r=tn().gapi)===null||r===void 0)&&r.load)o();else{const a=vA("iframefcb");return tn()[a]=()=>{gapi.load?o():e(Ze(n,"network-request-failed"))},Ry(`${yA()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw fa=null,t})}let fa=null;function Sk(n){return fa=fa||Pk(n),fa}/**
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
 */const Ck=new oo(5e3,15e3),Dk="__/auth/iframe",Ok="emulator/auth/iframe",Mk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Lk(n){const t=n.config;H(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Rd(t,Ok):`https://${n.config.authDomain}/${Dk}`,s={apiKey:t.apiKey,appName:n.name,v:Vs},i=Nk.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${e}?${Qr(s).slice(1)}`}async function Vk(n){const t=await Sk(n),e=tn().gapi;return H(e,n,"internal-error"),t.open({where:document.body,url:Lk(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mk,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ze(n,"network-request-failed"),a=tn().setTimeout(()=>{r(o)},Ck.get());function c(){tn().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const Fk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bk=500,$k=600,Uk="_blank",jk="http://localhost";class bp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zk(n,t,e,s=Bk,i=$k){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Fk),{width:s.toString(),height:i.toString(),top:r,left:o}),l=me().toLowerCase();e&&(a=wy(l)?Uk:e),vy(l)&&(t=t||jk,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[m,_])=>`${f}${m}=${_},`,"");if(lA(l)&&a!=="_self")return Hk(t||"",a),new bp(null);const h=window.open(t||"",a,d);H(h,n,"popup-blocked");try{h.focus()}catch{}return new bp(h)}function Hk(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
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
 */const Wk="__/auth/handler",qk="emulator/auth/handler",Gk=encodeURIComponent("fac");async function wp(n,t,e,s,i,r){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:Vs,eventId:i};if(t instanceof Sy){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",p0(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(t instanceof ao){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${Gk}=${encodeURIComponent(c)}`:"";return`${Yk(n)}?${Qr(a).slice(1)}${l}`}function Yk({config:n}){return n.emulator?Rd(n,qk):`https://${n.authDomain}/${Wk}`}/**
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
 */const yl="webStorageSupport";class Kk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ly,this._completeRedirectFn=vk,this._overrideRedirectResult=gk}async _openPopup(t,e,s,i){var r;Pn((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await wp(t,e,s,lu(),i);return zk(t,o,Od())}async _openRedirect(t,e,s,i){await this._originValidation(t);const r=await wp(t,e,s,lu(),i);return JA(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:r}=this.eventManagers[e];return i?Promise.resolve(i):(Pn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await Vk(t),s=new wk(t);return e.register("authEvent",i=>(H(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(yl,{type:yl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[yl];o!==void 0&&e(!!o),je(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Ak(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ay()||by()||Sd()}}const Qk=Kk;var xp="@firebase/auth",Ep="1.7.9";/**
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
 */class Xk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Jk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Zk(n){Ps(new Zn("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ky(n)},l=new mA(s,i,r,c);return TA(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),Ps(new Zn("auth-internal",t=>{const e=Us(t.getProvider("auth").getImmediate());return(s=>new Xk(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(xp,Ep,Jk(n)),Qe(xp,Ep,"esm2017")}/**
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
 */const tR=5*60,eR=pg("authIdTokenMaxAge")||tR;let Tp=null;const nR=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>eR)return;const i=e==null?void 0:e.token;Tp!==i&&(Tp=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sR(n=Fu()){const t=ic(n,"auth");if(t.isInitialized())return t.getImmediate();const e=EA(n,{popupRedirectResolver:Qk,persistence:[ak,KA,Ly]}),s=pg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=nR(r.toString());HA(e,o,()=>o(e.currentUser)),zA(e,a=>o(a))}}const i=dg("auth");return i&&IA(e,`http://${i}`),e}function iR(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}gA({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=i=>{const r=Ze("internal-error");r.customData=i,e(r)},s.type="text/javascript",s.charset="UTF-8",iR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Zk("Browser");const zy={},Hy=n=>typeof window<"u"&&window[n]?window[n]:typeof globalThis<"u"&&globalThis[n]?globalThis[n]:null,rR={apiKey:"AIzaSyAuJIZeL0ipjVAdoSjH5Wq5IIwdjWexoaE",authDomain:"controle-de-obras-axel.firebaseapp.com",projectId:"controle-de-obras-axel",storageBucket:"controle-de-obras-axel.firebasestorage.app",messagingSenderId:"438724917414",appId:"1:438724917414:web:cb9674cdc557bdf2a7dc67"},oR=()=>{const n=Hy("__FIREBASE_CONFIG");if(n)return n;const t=import.meta&&zy||{},e={apiKey:t.VITE_FIREBASE_API_KEY,authDomain:t.VITE_FIREBASE_AUTH_DOMAIN,projectId:t.VITE_FIREBASE_PROJECT_ID,storageBucket:t.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:t.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:t.VITE_FIREBASE_APP_ID};return Object.values(e).every(Boolean)?e:(console.warn("[Config] Firebase config não encontrada em globals/ENV; usando fallback padrão legado."),rR)},aR=()=>{const n=Hy("__RDO_API_CONFIG");if(n)return n;const t=import.meta&&zy||{},e=t.VITE_RDO_API_TOKEN||t.VITE_RDO_TOKEN,s=t.VITE_RDO_API_BASE||"https://rdo.axelindustrial.com.br/api";return e?{TOKEN:e,BASE_URL:s}:{TOKEN:"",BASE_URL:s}},cR=oR(),kc=yg(cR),Y=hT(kc),lR=$I(kc),Uo=sR(kc),uR=async()=>(console.log("[Firebase] Configuração carregada com sucesso"),kc),yt={state:{currentUser:null,currentTheme:localStorage.getItem("theme")||"dark",currentObra:null,sidebarCollapsed:localStorage.getItem("sidebarCollapsed")==="true"},listeners:[],subscribe(n){return this.listeners.push(n),()=>{this.listeners=this.listeners.filter(t=>t!==n)}},setState(n){this.state={...this.state,...n},this.notify()},notify(){this.listeners.forEach(n=>n(this.state))},setUser(n){this.setState({currentUser:n})},setTheme(n){localStorage.setItem("theme",n),this.applyTheme(n)},applyTheme(n){this.setState({currentTheme:n});const t=document.documentElement;t.classList.remove("dark","theme-light"),n==="dark"||n==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?(t.classList.add("dark"),t.setAttribute("data-theme","dark")):(t.classList.add("theme-light"),t.setAttribute("data-theme","light"))},toggleSidebar(){const n=!this.state.sidebarCollapsed;localStorage.setItem("sidebarCollapsed",n),this.setState({sidebarCollapsed:n})}},Ha={init:()=>new Promise(n=>{WA(Uo,async t=>{if(t)try{const e=await Va(ie(Y,"usuarios",t.uid));if(e.exists()){const s={uid:t.uid,email:t.email,...e.data()};yt.setUser(s)}else yt.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}catch(e){console.warn("Erro ao buscar perfil (usando fallback):",e.message),yt.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}else yt.setUser(null);n(yt.state.currentUser)})}),login:async(n,t)=>{try{const s=(await jA(Uo,n,t)).user,i=await Va(ie(Y,"usuarios",s.uid));if(i.exists()){const r={uid:s.uid,email:s.email,...i.data()};return yt.setUser(r),r}else throw new Error("Perfil de usuário não encontrado.")}catch(e){throw e}},logout:async()=>{await qA(Uo),yt.setUser(null)},recoverPassword:async n=>{await UA(Uo,n)}},xt={routes:{},currentRoute:null,init(){window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())},on(n,t){this.routes[n]=t},navigate(n){window.location.hash=n},matchRoute(n){if(this.routes[n])return{handler:this.routes[n],params:{}};const t=n.split("/").filter(Boolean);for(const[e,s]of Object.entries(this.routes)){const i=e.split("/").filter(Boolean);if(i.length!==t.length)continue;const r={};let o=!0;for(let a=0;a<i.length;a++){const c=i[a],l=t[a];if(c.startsWith(":"))r[c.slice(1)]=decodeURIComponent(l);else if(c!==l){o=!1;break}}if(o)return{handler:s,params:r}}return null},async handleRoute(){const n=window.location.hash.slice(1)||"/";if(!yt.state.currentUser&&n!=="/login"&&n!=="/forgot-password"){this.navigate("/login");return}if(yt.state.currentUser&&(n==="/login"||n==="/forgot-password")){this.navigate("/");return}const t=this.matchRoute(n),e=(t==null?void 0:t.handler)||this.routes["/404"]||(()=>console.warn("Rota não encontrada:",n)),s=(t==null?void 0:t.params)||{};this.currentRoute=n,await e(s)}},F={createInput:({type:n="text",id:t,label:e,placeholder:s="",value:i="",required:r=!1,className:o=""})=>`
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
        `},Ip={renderLogin:()=>`
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
        `},Ap={initLogin:()=>{const n=document.getElementById("app");n.innerHTML=Ip.renderLogin(),document.getElementById("login-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email").value,i=document.getElementById("password").value,r=document.getElementById("btn-login");try{r.disabled=!0,r.innerHTML=F.createLoader(),await Ha.login(s,i),F.createToast("Login realizado com sucesso!"),xt.navigate("/")}catch(o){console.error(o);let a="Erro ao realizar login.";o.code==="auth/invalid-credential"&&(a="Email ou senha incorretos."),F.createToast(a,"error"),r.disabled=!1,r.innerHTML="<span>Entrar</span>"}})},initForgotPassword:()=>{const n=document.getElementById("app");n.innerHTML=Ip.renderForgotPassword(),document.getElementById("forgot-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email-recovery").value,i=document.getElementById("btn-recover");try{i.disabled=!0,i.innerHTML=F.createLoader(),await Ha.recoverPassword(s),F.createToast("Email de recuperação enviado!"),setTimeout(()=>xt.navigate("/login"),2e3)}catch(r){F.createToast("Erro ao enviar email: "+r.message,"error"),i.disabled=!1,i.innerHTML="<span>Enviar</span>"}})}},dR="modulepreload",hR=function(n){return"/"+n},kp={},Br=function(t,e,s){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(e.map(c=>{if(c=hR(c),c in kp)return;kp[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":dR,l||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),l)return new Promise((f,m)=>{h.addEventListener("load",f),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},fR=async n=>{if(!n)return null;const t=await _t(we(pt(Y,"obras"),Gt("__name__","==",n)));if(t.empty)return null;const e=t.docs[0].data(),s=Number(e.orcamento||e.valor_orcado||0),i=Number(e.tolerancia_percentual||0),r=s+s*i,a=(await _t(we(pt(Y,"compras"),Gt("obraId","==",n)))).docs.map(l=>l.data());let c=0;return a.forEach(l=>{const d=(l.status_compra||"").toLowerCase(),h=!l.estouro_orcamento||l.status_aprovacao==="Aprovado";(d==="comprado"||d==="recebido"||d==="entregue")&&h&&(c+=Number(l.valor_total||l.valor_estimado||0))}),{limite_real:r,comprometido:c,orcado:s}},pR=async n=>{var t,e,s;try{const{ObrasService:i}=await Br(async()=>{const{ObrasService:l}=await Promise.resolve().then(()=>xD);return{ObrasService:l}},void 0),r=await((t=i.getObraById)==null?void 0:t.call(i,n)),o=(r==null?void 0:r.numero_os)||(r==null?void 0:r.numeroOS)||n;if(!o)return null;const{RDOService:a}=await Br(async()=>{const{RDOService:l}=await Promise.resolve().then(()=>pb);return{RDOService:l}},void 0),c=await a.getIntegratedDataForObra(o);if((e=c==null?void 0:c.reports)!=null&&e.length){const l=a.processRDOData(c.reports);return{...l,quantidadeRelatorios:c.quantidadeRelatorios||((s=l.reports)==null?void 0:s.length)||0}}return c?{quantidadeRelatorios:c.quantidadeRelatorios||0,totalHoras:Number(c.totalHoras||0)}:null}catch(i){return console.warn("[Dashboard] RDO fetch fail",(i==null?void 0:i.message)||i),null}},hn={getCompradorStats:async()=>{const n=pt(Y,"compras"),t=we(n,Gt("status_compra","==","Pendente")),e=await _t(t),s=we(n,Gt("status_compra","==","Em Cotação")),i=await _t(s),r=we(n,au("data_solicitacao","desc"),ca(5)),o=await _t(r);let a=0,c=0,l=0,d=0,h=0,f=0;const m={},_={};o.docs.forEach(T=>{const I=T.data(),S=Number(I.valor_estimado||I.valor_total||0);f+=S;const C=I.previsao_entrega?new Date(I.previsao_entrega):null,O=I.data_recebimento?new Date(I.data_recebimento):null;if(I.status_compra!=="Entregue"&&I.status_compra!=="Recebido"&&C&&C<new Date&&a++,O&&C&&(c++,O<=C&&l++),I.data_emissao&&(O||C)){const y=O||C,x=Math.max(0,(new Date(y)-new Date(I.data_emissao))/(1e3*60*60*24));d+=x,h++}const D=(I.natureza_compra||"Outros").trim();m[D]=(m[D]||0)+S;const E=I.centroCustoNome||I.centro_custo||I.centroCustoId||"N/D";_[E]=(_[E]||0)+S});const v=c?l/c*100:0,b=h?d/h:0;return{pendentes:e.size,emCotacao:i.size,recentes:o.docs.map(T=>({id:T.id,...T.data()})),atrasos:a,sla:v,lead:b,totalValor:f,naturezaTotais:m,ccTotais:_}},getObraStats:async n=>{if(!n)return{pendentes:0,transito:0,entregues:0,recentes:[]};const t=pt(Y,"compras"),e=we(t,Gt("obraId","==",n),Gt("status_compra","in",["Pendente","Em Cotação","Aprovado"])),s=await _t(e),i=we(t,Gt("obraId","==",n),Gt("status_compra","==","Comprado")),r=await _t(i),o=we(t,Gt("obraId","==",n),Gt("status_compra","in",["Entregue","Recebido"])),a=await _t(o),c=we(t,Gt("obraId","==",n),au("data_solicitacao","desc"),ca(5)),l=await _t(c);let d=0,h=0,f=0,m=0,_=0;const v=await fR(n),b=(v==null?void 0:v.comprometido)||0,T=(v==null?void 0:v.limite_real)||(v==null?void 0:v.orcado)||0,I=T>0?b/T*100:0,S=Math.max(0,T-b);l.docs.forEach(O=>{const D=O.data(),E=D.previsao_entrega?new Date(D.previsao_entrega):null,y=D.data_recebimento?new Date(D.data_recebimento):null;if(D.status_compra!=="Entregue"&&D.status_compra!=="Recebido"&&E&&E<new Date&&d++,y&&E&&(h++,y<=E&&f++),D.data_emissao&&(y||E)){const x=y||E,A=Math.max(0,(new Date(x)-new Date(D.data_emissao))/(1e3*60*60*24));m+=A,_++}});const C=await pR(n);return{pendentes:s.size,transito:r.size,entregues:a.size,recentes:l.docs.map(O=>({id:O.id,...O.data()})),atrasos:d,sla:h?f/h*100:0,lead:_?m/_:0,economia:S,curvaPercent:I,comprometido:b,limiteReal:T,rdoData:C}},getObras:async()=>(await _t(pt(Y,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getDiretorStats:async()=>{const n=pt(Y,"compras"),t=we(n,ca(500)),e=await _t(t);let s=0,i={},r={},o=0,a=0,c=0,l=0,d=0,h=0,f=0;const m={},_={},v={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0},b=[];e.forEach(O=>{const D=O.data(),E=Number(D.valor_estimado||D.valor_total||0);b.push({id:O.id,...D}),s+=E,i[D.status_compra]=(i[D.status_compra]||0)+1,D.status_compra!=="Entregue"&&D.status_compra!=="Recebido"&&D.previsao_entrega&&new Date(D.previsao_entrega)<new Date&&(c++,v.atrasados++);const y=D.previsao_entrega?new Date(D.previsao_entrega):null,x=D.data_recebimento?new Date(D.data_recebimento):null;if(x&&y&&(l++,x<=y&&d++),D.data_emissao&&(x||y)){const Z=x||y,J=Math.max(0,(new Date(Z)-new Date(D.data_emissao))/(1e3*60*60*24));h+=J,f++}if(D.limite_real&&(o+=Number(D.limite_real)),D.comprometido&&(a+=Number(D.comprometido)),D.data_solicitacao){const Z=new Date(D.data_solicitacao),J=`${Z.getFullYear()}-${String(Z.getMonth()+1).padStart(2,"0")}`;r[J]=(r[J]||0)+E}const A=(D.natureza_compra||"Outros").trim();m[A]=(m[A]||0)+E;const R=D.centroCustoNome||D.centro_custo||D.centroCustoId||"N/D";_[R]=(_[R]||0)+E,!D.previsao_entrega&&D.status_compra!=="Recebido"&&D.status_compra!=="Entregue"&&v.sem_previsao++,(D.status_aprovacao||"").toLowerCase()==="pendente"&&v.pendente_aprovacao++,(D.status_compra||"").toLowerCase().includes("cot")&&v.cotacao++});const T=o>0?a/o*100:0,I=l?d/l*100:0,S=f?h/f:0,C=Math.max(0,o-a);return{totalGasto:s,porStatus:i,totalPedidos:e.size,gastosPorMes:r,limiteReal:o,comprometido:a,curvaPercent:T,atrasos:c,sla:I,lead:S,economia:C,naturezaTotais:m,ccTotais:_,alerts:v,_allCompras:b}}},Wt={formatCurrency:n=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n),formatDate:n=>{if(!n)return"-";const t=new Date(n);return Number.isNaN(t.getTime())?"-":t.toLocaleDateString("pt-BR")},formatCurrencyInput:(n,t=!1)=>{let s=(typeof n=="number"?n.toFixed(2):String(n??"")).replace(/\D/g,"");return s=(s/100).toFixed(2)+"",s=s.replace(".",","),s=s.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1."),t?`R$ ${s}`:s},parseCurrency:n=>{if(typeof n=="number")return n;if(!n)return 0;const t=String(n).replace("R$ ","").replace(/\./g,"").replace(",","."),e=parseFloat(t);return Number.isNaN(e)?0:e},formatCnpjInput:n=>{if(!n)return"";let t=n.replace(/\D/g,"");return t=t.substring(0,14),t=t.replace(/^(\d{2})(\d)/,"$1.$2"),t=t.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3"),t=t.replace(/\.(\d{3})(\d)/,".$1/$2"),t=t.replace(/(\d{4})(\d)/,"$1-$2"),t},validateCNPJ:n=>{if(!n)return!0;const t=n.replace(/\D/g,"");if(t.length!==14||/^(\d)\1{13}$/.test(t))return!1;let e=0,s=5;for(let a=0;a<8;a++)e+=parseInt(t[a],10)*s,s=s===2?9:s-1;let i=e%11,r=i<2?0:11-i;if(parseInt(t[8],10)!==r)return!1;e=0,s=6;for(let a=0;a<9;a++)e+=parseInt(t[a],10)*s,s=s===2?9:s-1;i=e%11;let o=i<2?0:11-i;return parseInt(t[9],10)===o},renderStatusBadge:(n,t)=>{const e=new Date;e.setHours(0,0,0,0);let s=null;if(t){const o=new Date(t);Number.isNaN(o.getTime())||(s=o)}const i=(n||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return i!=="recebido"&&s&&s<e?'<span class="px-2 py-1 text-xs font-display rounded bg-alert text-canvas uppercase">Atrasado</span>':i.includes("recebido")||i.includes("entregue")?`<span class="px-2 py-1 text-xs font-display rounded bg-primary text-canvas uppercase">${n}</span>`:i.includes("comprado")?`<span class="px-2 py-1 text-xs font-display rounded bg-indigo-500 text-canvas uppercase">${n}</span>`:i.includes("aprov")?`<span class="px-2 py-1 text-xs font-display rounded bg-emerald-500 text-canvas uppercase">${n}</span>`:i.includes("cot")||i.includes("cota")?`<span class="px-2 py-1 text-xs font-display rounded bg-amber-400 text-gray-900 uppercase">${n}</span>`:`<span class="px-2 py-1 text-xs font-display rounded bg-border text-text uppercase">${n||"N/D"}</span>`},debounce:(n,t)=>{let e;return(...s)=>{clearTimeout(e),e=setTimeout(()=>n(...s),t)}}},vl={renderComprador:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Visão Geral - Compras</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
                    ${F.createCard({title:"Pendentes",content:`<p class="text-4xl font-display text-alert uppercase">${n.pendentes}</p><p class="text-sm heading-muted">Aguardando ação</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Em Cotação",content:`<p class="text-4xl font-display text-primary uppercase">${n.emCotacao}</p><p class="text-sm heading-muted">Processando</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted">Previsão vencida</p>`,className:"accent-left"})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">On-time vs entregues</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Total Estimado",content:`<p class="text-4xl font-display text-primary uppercase">${Wt.formatCurrency(n.totalValor||0)}</p><p class="text-sm heading-muted mt-1">Amostra 5 recentes</p>`})}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="card">
                        <h3 class="text-lg font-display text-text mb-3">Top Naturezas (recentes)</h3>
                        <div class="space-y-2">
                            ${Object.entries(n.naturezaTotais||{}).sort((t,e)=>e[1]-t[1]).slice(0,5).map(([t,e])=>`
                                <div class="flex items-center justify-between text-sm">
                                    <span class="text-text">${t}</span>
                                    <span class="text-primary font-display">${Wt.formatCurrency(e)}</span>
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
                                    <span class="text-primary font-display">${Wt.formatCurrency(e)}</span>
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
                    ${F.createCard({title:"Economia vs Orçamento",content:`<p class="text-4xl font-display text-${(n.economia||0)<0?"alert":"primary"} uppercase">${Wt.formatCurrency(n.economia||0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(n.curvaPercent||0).toFixed(1)}%</p>`})}
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
                    ${F.createCard({title:"Total Gasto (Amostra)",content:`<p class="text-4xl font-display text-primary uppercase">${Wt.formatCurrency(n.totalGasto)}</p>`})}
                    ${F.createCard({title:"Total de Pedidos",content:`<p class="text-4xl font-display text-primary uppercase">${n.totalPedidos}</p>`})}
                    ${F.createCard({title:"% Curva S (Comprometido vs Limite)",content:`<p class="text-4xl font-display text-${n.curvaPercent>100?"alert":"primary"} uppercase">${(n.curvaPercent||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Limite: ${Wt.formatCurrency(n.limiteReal||0)} • Comprometido: ${Wt.formatCurrency(n.comprometido||0)}</p>`})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted mt-1">Com previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">On-time vs entregues</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia (Limite - Comprometido)",content:`<p class="text-4xl font-display text-primary uppercase">${Wt.formatCurrency(n.economia||0)}</p>`})}
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
 */function lo(n){return n+.5|0}const zn=(n,t,e)=>Math.max(Math.min(n,e),t);function dr(n){return zn(lo(n*2.55),0,255)}function Jn(n){return zn(lo(n*255),0,255)}function gn(n){return zn(lo(n/2.55)/100,0,1)}function Rp(n){return zn(lo(n*100),0,100)}const Ce={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},fu=[..."0123456789ABCDEF"],mR=n=>fu[n&15],gR=n=>fu[(n&240)>>4]+fu[n&15],jo=n=>(n&240)>>4===(n&15),_R=n=>jo(n.r)&&jo(n.g)&&jo(n.b)&&jo(n.a);function yR(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&Ce[n[1]]*17,g:255&Ce[n[2]]*17,b:255&Ce[n[3]]*17,a:t===5?Ce[n[4]]*17:255}:(t===7||t===9)&&(e={r:Ce[n[1]]<<4|Ce[n[2]],g:Ce[n[3]]<<4|Ce[n[4]],b:Ce[n[5]]<<4|Ce[n[6]],a:t===9?Ce[n[7]]<<4|Ce[n[8]]:255})),e}const vR=(n,t)=>n<255?t(n):"";function bR(n){var t=_R(n)?mR:gR;return n?"#"+t(n.r)+t(n.g)+t(n.b)+vR(n.a,t):void 0}const wR=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Wy(n,t,e){const s=t*Math.min(e,1-e),i=(r,o=(r+n/30)%12)=>e-s*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function xR(n,t,e){const s=(i,r=(i+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[s(5),s(3),s(1)]}function ER(n,t,e){const s=Wy(n,1,.5);let i;for(t+e>1&&(i=1/(t+e),t*=i,e*=i),i=0;i<3;i++)s[i]*=1-t-e,s[i]+=t;return s}function TR(n,t,e,s,i){return n===i?(t-e)/s+(t<e?6:0):t===i?(e-n)/s+2:(n-t)/s+4}function Nd(n){const e=n.r/255,s=n.g/255,i=n.b/255,r=Math.max(e,s,i),o=Math.min(e,s,i),a=(r+o)/2;let c,l,d;return r!==o&&(d=r-o,l=a>.5?d/(2-r-o):d/(r+o),c=TR(e,s,i,d,r),c=c*60+.5),[c|0,l||0,a]}function Ld(n,t,e,s){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,s)).map(Jn)}function Vd(n,t,e){return Ld(Wy,n,t,e)}function IR(n,t,e){return Ld(ER,n,t,e)}function AR(n,t,e){return Ld(xR,n,t,e)}function qy(n){return(n%360+360)%360}function kR(n){const t=wR.exec(n);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?dr(+t[5]):Jn(+t[5]));const i=qy(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?s=IR(i,r,o):t[1]==="hsv"?s=AR(i,r,o):s=Vd(i,r,o),{r:s[0],g:s[1],b:s[2],a:e}}function RR(n,t){var e=Nd(n);e[0]=qy(e[0]+t),e=Vd(e),n.r=e[0],n.g=e[1],n.b=e[2]}function PR(n){if(!n)return;const t=Nd(n),e=t[0],s=Rp(t[1]),i=Rp(t[2]);return n.a<255?`hsla(${e}, ${s}%, ${i}%, ${gn(n.a)})`:`hsl(${e}, ${s}%, ${i}%)`}const Pp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Sp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function SR(){const n={},t=Object.keys(Sp),e=Object.keys(Pp);let s,i,r,o,a;for(s=0;s<t.length;s++){for(o=a=t[s],i=0;i<e.length;i++)r=e[i],a=a.replace(r,Pp[r]);r=parseInt(Sp[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let zo;function CR(n){zo||(zo=SR(),zo.transparent=[0,0,0,0]);const t=zo[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const DR=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function OR(n){const t=DR.exec(n);let e=255,s,i,r;if(t){if(t[7]!==s){const o=+t[7];e=t[8]?dr(o):zn(o*255,0,255)}return s=+t[1],i=+t[3],r=+t[5],s=255&(t[2]?dr(s):zn(s,0,255)),i=255&(t[4]?dr(i):zn(i,0,255)),r=255&(t[6]?dr(r):zn(r,0,255)),{r:s,g:i,b:r,a:e}}}function MR(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${gn(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const bl=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,Xs=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function NR(n,t,e){const s=Xs(gn(n.r)),i=Xs(gn(n.g)),r=Xs(gn(n.b));return{r:Jn(bl(s+e*(Xs(gn(t.r))-s))),g:Jn(bl(i+e*(Xs(gn(t.g))-i))),b:Jn(bl(r+e*(Xs(gn(t.b))-r))),a:n.a+e*(t.a-n.a)}}function Ho(n,t,e){if(n){let s=Nd(n);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=Vd(s),n.r=s[0],n.g=s[1],n.b=s[2]}}function Gy(n,t){return n&&Object.assign(t||{},n)}function Cp(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=Jn(n[3]))):(t=Gy(n,{r:0,g:0,b:0,a:1}),t.a=Jn(t.a)),t}function LR(n){return n.charAt(0)==="r"?OR(n):kR(n)}class $r{constructor(t){if(t instanceof $r)return t;const e=typeof t;let s;e==="object"?s=Cp(t):e==="string"&&(s=yR(t)||CR(t)||LR(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=Gy(this._rgb);return t&&(t.a=gn(t.a)),t}set rgb(t){this._rgb=Cp(t)}rgbString(){return this._valid?MR(this._rgb):void 0}hexString(){return this._valid?bR(this._rgb):void 0}hslString(){return this._valid?PR(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,i=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,c=s.a-i.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-l,s.r=255&l*s.r+r*i.r+.5,s.g=255&l*s.g+r*i.g+.5,s.b=255&l*s.b+r*i.b+.5,s.a=o*s.a+(1-o)*i.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=NR(this._rgb,t._rgb,e)),this}clone(){return new $r(this.rgb)}alpha(t){return this._rgb.a=Jn(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=lo(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Ho(this._rgb,2,t),this}darken(t){return Ho(this._rgb,2,-t),this}saturate(t){return Ho(this._rgb,1,t),this}desaturate(t){return Ho(this._rgb,1,-t),this}rotate(t){return RR(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function fn(){}const VR=(()=>{let n=0;return()=>n++})();function tt(n){return n==null}function At(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function st(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function Ot(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function Re(n,t){return Ot(n)?n:t}function G(n,t){return typeof n>"u"?t:n}const FR=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,Yy=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function bt(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function dt(n,t,e,s){let i,r,o;if(At(n))for(r=n.length,i=0;i<r;i++)t.call(e,n[i],i);else if(st(n))for(o=Object.keys(n),r=o.length,i=0;i<r;i++)t.call(e,n[o[i]],o[i])}function Wa(n,t){let e,s,i,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,s=n.length;e<s;++e)if(i=n[e],r=t[e],i.datasetIndex!==r.datasetIndex||i.index!==r.index)return!1;return!0}function qa(n){if(At(n))return n.map(qa);if(st(n)){const t=Object.create(null),e=Object.keys(n),s=e.length;let i=0;for(;i<s;++i)t[e[i]]=qa(n[e[i]]);return t}return n}function Ky(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function BR(n,t,e,s){if(!Ky(n))return;const i=t[n],r=e[n];st(i)&&st(r)?Ur(i,r,s):t[n]=qa(r)}function Ur(n,t,e){const s=At(t)?t:[t],i=s.length;if(!st(n))return n;e=e||{};const r=e.merger||BR;let o;for(let a=0;a<i;++a){if(o=s[a],!st(o))continue;const c=Object.keys(o);for(let l=0,d=c.length;l<d;++l)r(c[l],n,o,e)}return n}function Er(n,t){return Ur(n,t,{merger:$R})}function $R(n,t,e){if(!Ky(n))return;const s=t[n],i=e[n];st(s)&&st(i)?Er(s,i):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=qa(i))}const Dp={"":n=>n,x:n=>n.x,y:n=>n.y};function UR(n){const t=n.split("."),e=[];let s="";for(const i of t)s+=i,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function jR(n){const t=UR(n);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function ss(n,t){return(Dp[t]||(Dp[t]=jR(t)))(n)}function Fd(n){return n.charAt(0).toUpperCase()+n.slice(1)}const jr=n=>typeof n<"u",is=n=>typeof n=="function",Op=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function zR(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const ct=Math.PI,Tt=2*ct,HR=Tt+ct,Ga=Number.POSITIVE_INFINITY,WR=ct/180,Bt=ct/2,fs=ct/4,Mp=ct*2/3,Hn=Math.log10,en=Math.sign;function Tr(n,t,e){return Math.abs(n-t)<e}function Np(n){const t=Math.round(n);n=Tr(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(Hn(n))),s=n/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function qR(n){const t=[],e=Math.sqrt(n);let s;for(s=1;s<e;s++)n%s===0&&(t.push(s),t.push(n/s));return e===(e|0)&&t.push(e),t.sort((i,r)=>i-r).pop(),t}function GR(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function wi(n){return!GR(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function YR(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function Qy(n,t,e){let s,i,r;for(s=0,i=n.length;s<i;s++)r=n[s][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function Fe(n){return n*(ct/180)}function Bd(n){return n*(180/ct)}function Lp(n){if(!Ot(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function Xy(n,t){const e=t.x-n.x,s=t.y-n.y,i=Math.sqrt(e*e+s*s);let r=Math.atan2(s,e);return r<-.5*ct&&(r+=Tt),{angle:r,distance:i}}function pu(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function KR(n,t){return(n-t+HR)%Tt-ct}function he(n){return(n%Tt+Tt)%Tt}function zr(n,t,e,s){const i=he(n),r=he(t),o=he(e),a=he(r-i),c=he(o-i),l=he(i-r),d=he(i-o);return i===r||i===o||s&&r===o||a>c&&l<d}function Qt(n,t,e){return Math.max(t,Math.min(e,n))}function QR(n){return Qt(n,-32768,32767)}function wn(n,t,e,s=1e-6){return n>=Math.min(t,e)-s&&n<=Math.max(t,e)+s}function $d(n,t,e){e=e||(o=>n[o]<t);let s=n.length-1,i=0,r;for(;s-i>1;)r=i+s>>1,e(r)?i=r:s=r;return{lo:i,hi:s}}const xn=(n,t,e,s)=>$d(n,e,s?i=>{const r=n[i][t];return r<e||r===e&&n[i+1][t]===e}:i=>n[i][t]<e),XR=(n,t,e)=>$d(n,e,s=>n[s][t]>=e);function JR(n,t,e){let s=0,i=n.length;for(;s<i&&n[s]<t;)s++;for(;i>s&&n[i-1]>e;)i--;return s>0||i<n.length?n.slice(s,i):n}const Jy=["push","pop","shift","splice","unshift"];function ZR(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Jy.forEach(e=>{const s="_onData"+Fd(e),i=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=i.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...r)}),o}})})}function Vp(n,t){const e=n._chartjs;if(!e)return;const s=e.listeners,i=s.indexOf(t);i!==-1&&s.splice(i,1),!(s.length>0)&&(Jy.forEach(r=>{delete n[r]}),delete n._chartjs)}function Zy(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const tv=function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame}();function ev(n,t){let e=[],s=!1;return function(...i){e=i,s||(s=!0,tv.call(window,()=>{s=!1,n.apply(t,e)}))}}function tP(n,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(n,t,s)):n.apply(this,s),t}}const Ud=n=>n==="start"?"left":n==="end"?"right":"center",ue=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,eP=(n,t,e,s)=>n===(s?"left":"right")?e:n==="center"?(t+e)/2:t;function nv(n,t,e){const s=t.length;let i=0,r=s;if(n._sorted){const{iScale:o,vScale:a,_parsed:c}=n,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,d=o.axis,{min:h,max:f,minDefined:m,maxDefined:_}=o.getUserBounds();if(m){if(i=Math.min(xn(c,d,h).lo,e?s:xn(t,d,o.getPixelForValue(h)).lo),l){const v=c.slice(0,i+1).reverse().findIndex(b=>!tt(b[a.axis]));i-=Math.max(0,v)}i=Qt(i,0,s-1)}if(_){let v=Math.max(xn(c,o.axis,f,!0).hi+1,e?0:xn(t,d,o.getPixelForValue(f),!0).hi+1);if(l){const b=c.slice(v-1).findIndex(T=>!tt(T[a.axis]));v+=Math.max(0,b)}r=Qt(v,i,s)-i}else r=s-i}return{start:i,count:r}}function sv(n){const{xScale:t,yScale:e,_scaleRanges:s}=n,i={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return n._scaleRanges=i,!0;const r=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,i),r}const Wo=n=>n===0||n===1,Fp=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*Tt/e)),Bp=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*Tt/e)+1,Ir={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Bt)+1,easeOutSine:n=>Math.sin(n*Bt),easeInOutSine:n=>-.5*(Math.cos(ct*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>Wo(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>Wo(n)?n:Fp(n,.075,.3),easeOutElastic:n=>Wo(n)?n:Bp(n,.075,.3),easeInOutElastic(n){return Wo(n)?n:n<.5?.5*Fp(n*2,.1125,.45):.5+.5*Bp(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Ir.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Ir.easeInBounce(n*2)*.5:Ir.easeOutBounce(n*2-1)*.5+.5};function jd(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function $p(n){return jd(n)?n:new $r(n)}function wl(n){return jd(n)?n:new $r(n).saturate(.5).darken(.1).hexString()}const nP=["x","y","borderWidth","radius","tension"],sP=["color","borderColor","backgroundColor"];function iP(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:sP},numbers:{type:"number",properties:nP}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function rP(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Up=new Map;function oP(n,t){t=t||{};const e=n+JSON.stringify(t);let s=Up.get(e);return s||(s=new Intl.NumberFormat(n,t),Up.set(e,s)),s}function uo(n,t,e){return oP(t,e).format(n)}const iv={values(n){return At(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const s=this.chart.options.locale;let i,r=n;if(e.length>1){const l=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(l<1e-4||l>1e15)&&(i="scientific"),r=aP(n,e)}const o=Hn(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),uo(n,s,c)},logarithmic(n,t,e){if(n===0)return"0";const s=e[t].significand||n/Math.pow(10,Math.floor(Hn(n)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?iv.numeric.call(this,n,t,e):""}};function aP(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var Rc={formatters:iv};function cP(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Rc.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Ns=Object.create(null),mu=Object.create(null);function Ar(n,t){if(!t)return n;const e=t.split(".");for(let s=0,i=e.length;s<i;++s){const r=e[s];n=n[r]||(n[r]=Object.create(null))}return n}function xl(n,t,e){return typeof t=="string"?Ur(Ar(n,t),e):Ur(Ar(n,""),t)}class lP{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,i)=>wl(i.backgroundColor),this.hoverBorderColor=(s,i)=>wl(i.borderColor),this.hoverColor=(s,i)=>wl(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return xl(this,t,e)}get(t){return Ar(this,t)}describe(t,e){return xl(mu,t,e)}override(t,e){return xl(Ns,t,e)}route(t,e,s,i){const r=Ar(this,t),o=Ar(this,s),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[a],l=o[i];return st(c)?Object.assign({},l,c):G(c,l)},set(c){this[a]=c}}})}apply(t){t.forEach(e=>e(this))}}var kt=new lP({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[iP,rP,cP]);function uP(n){return!n||tt(n.size)||tt(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function Ya(n,t,e,s,i){let r=t[i];return r||(r=t[i]=n.measureText(i).width,e.push(i)),r>s&&(s=r),s}function dP(n,t,e,s){s=s||{};let i=s.data=s.data||{},r=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(i=s.data={},r=s.garbageCollect=[],s.font=t),n.save(),n.font=t;let o=0;const a=e.length;let c,l,d,h,f;for(c=0;c<a;c++)if(h=e[c],h!=null&&!At(h))o=Ya(n,i,r,o,h);else if(At(h))for(l=0,d=h.length;l<d;l++)f=h[l],f!=null&&!At(f)&&(o=Ya(n,i,r,o,f));n.restore();const m=r.length/2;if(m>e.length){for(c=0;c<m;c++)delete i[r[c]];r.splice(0,m)}return o}function ps(n,t,e){const s=n.currentDevicePixelRatio,i=e!==0?Math.max(e/2,.5):0;return Math.round((t-i)*s)/s+i}function jp(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function gu(n,t,e,s){rv(n,t,e,s,null)}function rv(n,t,e,s,i){let r,o,a,c,l,d,h,f;const m=t.pointStyle,_=t.rotation,v=t.radius;let b=(_||0)*WR;if(m&&typeof m=="object"&&(r=m.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,s),n.rotate(b),n.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),n.restore();return}if(!(isNaN(v)||v<=0)){switch(n.beginPath(),m){default:i?n.ellipse(e,s,i/2,v,0,0,Tt):n.arc(e,s,v,0,Tt),n.closePath();break;case"triangle":d=i?i/2:v,n.moveTo(e+Math.sin(b)*d,s-Math.cos(b)*v),b+=Mp,n.lineTo(e+Math.sin(b)*d,s-Math.cos(b)*v),b+=Mp,n.lineTo(e+Math.sin(b)*d,s-Math.cos(b)*v),n.closePath();break;case"rectRounded":l=v*.516,c=v-l,o=Math.cos(b+fs)*c,h=Math.cos(b+fs)*(i?i/2-l:c),a=Math.sin(b+fs)*c,f=Math.sin(b+fs)*(i?i/2-l:c),n.arc(e-h,s-a,l,b-ct,b-Bt),n.arc(e+f,s-o,l,b-Bt,b),n.arc(e+h,s+a,l,b,b+Bt),n.arc(e-f,s+o,l,b+Bt,b+ct),n.closePath();break;case"rect":if(!_){c=Math.SQRT1_2*v,d=i?i/2:c,n.rect(e-d,s-c,2*d,2*c);break}b+=fs;case"rectRot":h=Math.cos(b)*(i?i/2:v),o=Math.cos(b)*v,a=Math.sin(b)*v,f=Math.sin(b)*(i?i/2:v),n.moveTo(e-h,s-a),n.lineTo(e+f,s-o),n.lineTo(e+h,s+a),n.lineTo(e-f,s+o),n.closePath();break;case"crossRot":b+=fs;case"cross":h=Math.cos(b)*(i?i/2:v),o=Math.cos(b)*v,a=Math.sin(b)*v,f=Math.sin(b)*(i?i/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o);break;case"star":h=Math.cos(b)*(i?i/2:v),o=Math.cos(b)*v,a=Math.sin(b)*v,f=Math.sin(b)*(i?i/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o),b+=fs,h=Math.cos(b)*(i?i/2:v),o=Math.cos(b)*v,a=Math.sin(b)*v,f=Math.sin(b)*(i?i/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o);break;case"line":o=i?i/2:Math.cos(b)*v,a=Math.sin(b)*v,n.moveTo(e-o,s-a),n.lineTo(e+o,s+a);break;case"dash":n.moveTo(e,s),n.lineTo(e+Math.cos(b)*(i?i/2:v),s+Math.sin(b)*v);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function En(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function Pc(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function Sc(n){n.restore()}function hP(n,t,e,s,i){if(!t)return n.lineTo(e.x,e.y);if(i==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else i==="after"!=!!s?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function fP(n,t,e,s){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function pP(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),tt(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function mP(n,t,e,s,i){if(i.strikethrough||i.underline){const r=n.measureText(s),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,c=e-r.actualBoundingBoxAscent,l=e+r.actualBoundingBoxDescent,d=i.strikethrough?(c+l)/2:l;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=i.decorationWidth||2,n.moveTo(o,d),n.lineTo(a,d),n.stroke()}}function gP(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function Ls(n,t,e,s,i,r={}){const o=At(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let c,l;for(n.save(),n.font=i.string,pP(n,r),c=0;c<o.length;++c)l=o[c],r.backdrop&&gP(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),tt(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(l,e,s,r.maxWidth)),n.fillText(l,e,s,r.maxWidth),mP(n,e,s,l,r),s+=Number(i.lineHeight);n.restore()}function Hr(n,t){const{x:e,y:s,w:i,h:r,radius:o}=t;n.arc(e+o.topLeft,s+o.topLeft,o.topLeft,1.5*ct,ct,!0),n.lineTo(e,s+r-o.bottomLeft),n.arc(e+o.bottomLeft,s+r-o.bottomLeft,o.bottomLeft,ct,Bt,!0),n.lineTo(e+i-o.bottomRight,s+r),n.arc(e+i-o.bottomRight,s+r-o.bottomRight,o.bottomRight,Bt,0,!0),n.lineTo(e+i,s+o.topRight),n.arc(e+i-o.topRight,s+o.topRight,o.topRight,0,-Bt,!0),n.lineTo(e+o.topLeft,s)}const _P=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,yP=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function vP(n,t){const e=(""+n).match(_P);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const bP=n=>+n||0;function zd(n,t){const e={},s=st(t),i=s?Object.keys(t):t,r=st(n)?s?o=>G(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of i)e[o]=bP(r(o));return e}function ov(n){return zd(n,{top:"y",right:"x",bottom:"y",left:"x"})}function ks(n){return zd(n,["topLeft","topRight","bottomLeft","bottomRight"])}function ge(n){const t=ov(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Yt(n,t){n=n||{},t=t||kt.font;let e=G(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=G(n.style,t.style);s&&!(""+s).match(yP)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const i={family:G(n.family,t.family),lineHeight:vP(G(n.lineHeight,t.lineHeight),e),size:e,style:s,weight:G(n.weight,t.weight),string:""};return i.string=uP(i),i}function hr(n,t,e,s){let i,r,o;for(i=0,r=n.length;i<r;++i)if(o=n[i],o!==void 0&&o!==void 0)return o}function wP(n,t,e){const{min:s,max:i}=n,r=Yy(t,(i-s)/2),o=(a,c)=>e&&a===0?0:a+c;return{min:o(s,-Math.abs(r)),max:o(i,r)}}function cs(n,t){return Object.assign(Object.create(n),t)}function Hd(n,t=[""],e,s,i=()=>n[0]){const r=e||n;typeof s>"u"&&(s=uv("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:s,_getTarget:i,override:a=>Hd([a,...n],t,r,s)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete n[0][c],!0},get(a,c){return cv(a,c,()=>PP(c,t,n,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,c){return Hp(a).includes(c)},ownKeys(a){return Hp(a)},set(a,c,l){const d=a._storage||(a._storage=i());return a[c]=d[c]=l,delete a._keys,!0}})}function xi(n,t,e,s){const i={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:av(n,s),setContext:r=>xi(n,r,e,s),override:r=>xi(n.override(r),t,e,s)};return new Proxy(i,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return cv(r,o,()=>EP(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function av(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:i=t.allKeys}=n;return{allKeys:i,scriptable:e,indexable:s,isScriptable:is(e)?e:()=>e,isIndexable:is(s)?s:()=>s}}const xP=(n,t)=>n?n+Fd(t):t,Wd=(n,t)=>st(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function cv(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const s=e();return n[t]=s,s}function EP(n,t,e){const{_proxy:s,_context:i,_subProxy:r,_descriptors:o}=n;let a=s[t];return is(a)&&o.isScriptable(t)&&(a=TP(t,a,n,e)),At(a)&&a.length&&(a=IP(t,a,n,o.isIndexable)),Wd(t,a)&&(a=xi(a,i,r&&r[t],o)),a}function TP(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let c=t(r,o||s);return a.delete(n),Wd(n,c)&&(c=qd(i._scopes,i,n,c)),c}function IP(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&s(n))return t[r.index%t.length];if(st(t[0])){const c=t,l=i._scopes.filter(d=>d!==c);t=[];for(const d of c){const h=qd(l,i,n,d);t.push(xi(h,r,o&&o[n],a))}}return t}function lv(n,t,e){return is(n)?n(t,e):n}const AP=(n,t)=>n===!0?t:typeof n=="string"?ss(t,n):void 0;function kP(n,t,e,s,i){for(const r of t){const o=AP(e,r);if(o){n.add(o);const a=lv(o._fallback,e,i);if(typeof a<"u"&&a!==e&&a!==s)return a}else if(o===!1&&typeof s<"u"&&e!==s)return null}return!1}function qd(n,t,e,s){const i=t._rootScopes,r=lv(t._fallback,e,s),o=[...n,...i],a=new Set;a.add(s);let c=zp(a,o,e,r||e,s);return c===null||typeof r<"u"&&r!==e&&(c=zp(a,o,r,c,s),c===null)?!1:Hd(Array.from(a),[""],i,r,()=>RP(t,e,s))}function zp(n,t,e,s,i){for(;e;)e=kP(n,t,e,s,i);return e}function RP(n,t,e){const s=n._getTarget();t in s||(s[t]={});const i=s[t];return At(i)&&st(e)?e:i||{}}function PP(n,t,e,s){let i;for(const r of t)if(i=uv(xP(r,n),e),typeof i<"u")return Wd(n,i)?qd(e,s,n,i):i}function uv(n,t){for(const e of t){if(!e)continue;const s=e[n];if(typeof s<"u")return s}}function Hp(n){let t=n._keys;return t||(t=n._keys=SP(n._scopes)),t}function SP(n){const t=new Set;for(const e of n)for(const s of Object.keys(e).filter(i=>!i.startsWith("_")))t.add(s);return Array.from(t)}function dv(n,t,e,s){const{iScale:i}=n,{key:r="r"}=this._parsing,o=new Array(s);let a,c,l,d;for(a=0,c=s;a<c;++a)l=a+e,d=t[l],o[a]={r:i.parse(ss(d,r),l)};return o}const CP=Number.EPSILON||1e-14,Ei=(n,t)=>t<n.length&&!n[t].skip&&n[t],hv=n=>n==="x"?"y":"x";function DP(n,t,e,s){const i=n.skip?t:n,r=t,o=e.skip?t:e,a=pu(r,i),c=pu(o,r);let l=a/(a+c),d=c/(a+c);l=isNaN(l)?0:l,d=isNaN(d)?0:d;const h=s*l,f=s*d;return{previous:{x:r.x-h*(o.x-i.x),y:r.y-h*(o.y-i.y)},next:{x:r.x+f*(o.x-i.x),y:r.y+f*(o.y-i.y)}}}function OP(n,t,e){const s=n.length;let i,r,o,a,c,l=Ei(n,0);for(let d=0;d<s-1;++d)if(c=l,l=Ei(n,d+1),!(!c||!l)){if(Tr(t[d],0,CP)){e[d]=e[d+1]=0;continue}i=e[d]/t[d],r=e[d+1]/t[d],a=Math.pow(i,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[d]=i*o*t[d],e[d+1]=r*o*t[d])}}function MP(n,t,e="x"){const s=hv(e),i=n.length;let r,o,a,c=Ei(n,0);for(let l=0;l<i;++l){if(o=a,a=c,c=Ei(n,l+1),!a)continue;const d=a[e],h=a[s];o&&(r=(d-o[e])/3,a[`cp1${e}`]=d-r,a[`cp1${s}`]=h-r*t[l]),c&&(r=(c[e]-d)/3,a[`cp2${e}`]=d+r,a[`cp2${s}`]=h+r*t[l])}}function NP(n,t="x"){const e=hv(t),s=n.length,i=Array(s).fill(0),r=Array(s);let o,a,c,l=Ei(n,0);for(o=0;o<s;++o)if(a=c,c=l,l=Ei(n,o+1),!!c){if(l){const d=l[t]-c[t];i[o]=d!==0?(l[e]-c[e])/d:0}r[o]=a?l?en(i[o-1])!==en(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}OP(n,i,r),MP(n,r,t)}function qo(n,t,e){return Math.max(Math.min(n,e),t)}function LP(n,t){let e,s,i,r,o,a=En(n[0],t);for(e=0,s=n.length;e<s;++e)o=r,r=a,a=e<s-1&&En(n[e+1],t),r&&(i=n[e],o&&(i.cp1x=qo(i.cp1x,t.left,t.right),i.cp1y=qo(i.cp1y,t.top,t.bottom)),a&&(i.cp2x=qo(i.cp2x,t.left,t.right),i.cp2y=qo(i.cp2y,t.top,t.bottom)))}function VP(n,t,e,s,i){let r,o,a,c;if(t.spanGaps&&(n=n.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")NP(n,i);else{let l=s?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],c=DP(l,a,n[Math.min(r+1,o-(s?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}t.capBezierPoints&&LP(n,e)}function Gd(){return typeof window<"u"&&typeof document<"u"}function Yd(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Ka(n,t,e){let s;return typeof n=="string"?(s=parseInt(n,10),n.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=n,s}const Cc=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function FP(n,t){return Cc(n).getPropertyValue(t)}const BP=["top","right","bottom","left"];function Rs(n,t,e){const s={};e=e?"-"+e:"";for(let i=0;i<4;i++){const r=BP[i];s[r]=parseFloat(n[t+"-"+r+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const $P=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function UP(n,t){const e=n.touches,s=e&&e.length?e[0]:n,{offsetX:i,offsetY:r}=s;let o=!1,a,c;if($P(i,r,n.target))a=i,c=r;else{const l=t.getBoundingClientRect();a=s.clientX-l.left,c=s.clientY-l.top,o=!0}return{x:a,y:c,box:o}}function vs(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:s}=t,i=Cc(e),r=i.boxSizing==="border-box",o=Rs(i,"padding"),a=Rs(i,"border","width"),{x:c,y:l,box:d}=UP(n,e),h=o.left+(d&&a.left),f=o.top+(d&&a.top);let{width:m,height:_}=t;return r&&(m-=o.width+a.width,_-=o.height+a.height),{x:Math.round((c-h)/m*e.width/s),y:Math.round((l-f)/_*e.height/s)}}function jP(n,t,e){let s,i;if(t===void 0||e===void 0){const r=n&&Yd(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=Cc(r),c=Rs(a,"border","width"),l=Rs(a,"padding");t=o.width-l.width-c.width,e=o.height-l.height-c.height,s=Ka(a.maxWidth,r,"clientWidth"),i=Ka(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:s||Ga,maxHeight:i||Ga}}const Wn=n=>Math.round(n*10)/10;function zP(n,t,e,s){const i=Cc(n),r=Rs(i,"margin"),o=Ka(i.maxWidth,n,"clientWidth")||Ga,a=Ka(i.maxHeight,n,"clientHeight")||Ga,c=jP(n,t,e);let{width:l,height:d}=c;if(i.boxSizing==="content-box"){const f=Rs(i,"border","width"),m=Rs(i,"padding");l-=m.width+f.width,d-=m.height+f.height}return l=Math.max(0,l-r.width),d=Math.max(0,s?l/s:d-r.height),l=Wn(Math.min(l,o,c.maxWidth)),d=Wn(Math.min(d,a,c.maxHeight)),l&&!d&&(d=Wn(l/2)),(t!==void 0||e!==void 0)&&s&&c.height&&d>c.height&&(d=c.height,l=Wn(Math.floor(d*s))),{width:l,height:d}}function Wp(n,t,e){const s=t||1,i=Wn(n.height*s),r=Wn(n.width*s);n.height=Wn(n.height),n.width=Wn(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==s||o.height!==i||o.width!==r?(n.currentDevicePixelRatio=s,o.height=i,o.width=r,n.ctx.setTransform(s,0,0,s,0,0),!0):!1}const HP=function(){let n=!1;try{const t={get passive(){return n=!0,!1}};Gd()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n}();function qp(n,t){const e=FP(n,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function bs(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function WP(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:s==="middle"?e<.5?n.y:t.y:s==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function qP(n,t,e,s){const i={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=bs(n,i,e),a=bs(i,r,e),c=bs(r,t,e),l=bs(o,a,e),d=bs(a,c,e);return bs(l,d,e)}const GP=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},YP=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function di(n,t,e){return n?GP(t,e):YP()}function fv(n,t){let e,s;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=s)}function pv(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function mv(n){return n==="angle"?{between:zr,compare:KR,normalize:he}:{between:wn,compare:(t,e)=>t-e,normalize:t=>t}}function Gp({start:n,end:t,count:e,loop:s,style:i}){return{start:n%e,end:t%e,loop:s&&(t-n+1)%e===0,style:i}}function KP(n,t,e){const{property:s,start:i,end:r}=e,{between:o,normalize:a}=mv(s),c=t.length;let{start:l,end:d,loop:h}=n,f,m;if(h){for(l+=c,d+=c,f=0,m=c;f<m&&o(a(t[l%c][s]),i,r);++f)l--,d--;l%=c,d%=c}return d<l&&(d+=c),{start:l,end:d,loop:h,style:n.style}}function gv(n,t,e){if(!e)return[n];const{property:s,start:i,end:r}=e,o=t.length,{compare:a,between:c,normalize:l}=mv(s),{start:d,end:h,loop:f,style:m}=KP(n,t,e),_=[];let v=!1,b=null,T,I,S;const C=()=>c(i,S,T)&&a(i,S)!==0,O=()=>a(r,T)===0||c(r,S,T),D=()=>v||C(),E=()=>!v||O();for(let y=d,x=d;y<=h;++y)I=t[y%o],!I.skip&&(T=l(I[s]),T!==S&&(v=c(T,i,r),b===null&&D()&&(b=a(T,i)===0?y:x),b!==null&&E()&&(_.push(Gp({start:b,end:y,loop:f,count:o,style:m})),b=null),x=y,S=T));return b!==null&&_.push(Gp({start:b,end:h,loop:f,count:o,style:m})),_}function _v(n,t){const e=[],s=n.segments;for(let i=0;i<s.length;i++){const r=gv(s[i],n.points,t);r.length&&e.push(...r)}return e}function QP(n,t,e,s){let i=0,r=t-1;if(e&&!s)for(;i<t&&!n[i].skip;)i++;for(;i<t&&n[i].skip;)i++;for(i%=t,e&&(r+=i);r>i&&n[r%t].skip;)r--;return r%=t,{start:i,end:r}}function XP(n,t,e,s){const i=n.length,r=[];let o=t,a=n[t],c;for(c=t+1;c<=e;++c){const l=n[c%i];l.skip||l.stop?a.skip||(s=!1,r.push({start:t%i,end:(c-1)%i,loop:s}),t=o=l.stop?c:null):(o=c,a.skip&&(t=c)),a=l}return o!==null&&r.push({start:t%i,end:o%i,loop:s}),r}function JP(n,t){const e=n.points,s=n.options.spanGaps,i=e.length;if(!i)return[];const r=!!n._loop,{start:o,end:a}=QP(e,i,r,s);if(s===!0)return Yp(n,[{start:o,end:a,loop:r}],e,t);const c=a<o?a+i:a,l=!!n._fullLoop&&o===0&&a===i-1;return Yp(n,XP(e,o,c,l),e,t)}function Yp(n,t,e,s){return!s||!s.setContext||!e?t:ZP(n,t,e,s)}function ZP(n,t,e,s){const i=n._chart.getContext(),r=Kp(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,c=e.length,l=[];let d=r,h=t[0].start,f=h;function m(_,v,b,T){const I=a?-1:1;if(_!==v){for(_+=c;e[_%c].skip;)_-=I;for(;e[v%c].skip;)v+=I;_%c!==v%c&&(l.push({start:_%c,end:v%c,loop:b,style:T}),d=T,h=v%c)}}for(const _ of t){h=a?h:_.start;let v=e[h%c],b;for(f=h+1;f<=_.end;f++){const T=e[f%c];b=Kp(s.setContext(cs(i,{type:"segment",p0:v,p1:T,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),tS(b,d)&&m(h,f-1,_.loop,d),v=T,d=b}h<f-1&&m(h,f-1,_.loop,d)}return l}function Kp(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function tS(n,t){if(!t)return!1;const e=[],s=function(i,r){return jd(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,s)!==JSON.stringify(t,s)}function Go(n,t,e){return n.options.clip?n[e]:t[e]}function eS(n,t){const{xScale:e,yScale:s}=n;return e&&s?{left:Go(e,t,"left"),right:Go(e,t,"right"),top:Go(s,t,"top"),bottom:Go(s,t,"bottom")}:t}function yv(n,t){const e=t._clip;if(e.disabled)return!1;const s=eS(t,n.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class nS{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,i){const r=e.listeners[i],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(s-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=tv.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,i)=>{if(!s.running||!s.items.length)return;const r=s.items;let o=r.length-1,a=!1,c;for(;o>=0;--o)c=r[o],c._active?(c._total>s.duration&&(s.duration=c._total),c.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(i.draw(),this._notify(i,s,t,"progress")),r.length||(s.running=!1,this._notify(i,s,t,"complete"),s.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,i)=>Math.max(s,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let i=s.length-1;for(;i>=0;--i)s[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var pn=new nS;const Qp="transparent",sS={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const s=$p(n||Qp),i=s.valid&&$p(t||Qp);return i&&i.valid?i.mix(s,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class iS{constructor(t,e,s,i){const r=e[s];i=hr([t.to,i,r,t.from]);const o=hr([t.from,r,i]);this._active=!0,this._fn=t.fn||sS[t.type||typeof o],this._easing=Ir[t.easing]||Ir.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const i=this._target[this._prop],r=s-this._start,o=this._duration-r;this._start=s,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=hr([t.to,e,i,t.from]),this._from=hr([t.from,i,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,i=this._prop,r=this._from,o=this._loop,a=this._to;let c;if(this._active=r!==a&&(o||e<s),!this._active){this._target[i]=a,this._notify(!0);return}if(e<0){this._target[i]=r;return}c=e/s%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[i]=this._fn(r,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let i=0;i<s.length;i++)s[i][e]()}}class vv{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!st(t))return;const e=Object.keys(kt.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const r=t[i];if(!st(r))return;const o={};for(const a of e)o[a]=r[a];(At(r.properties)&&r.properties||[i]).forEach(a=>{(a===i||!s.has(a))&&s.set(a,o)})})}_animateOptions(t,e){const s=e.options,i=oS(t,s);if(!i)return[];const r=this._createAnimations(i,s);return s.$shared&&rS(t.options.$animations,s).then(()=>{t.options=s},()=>{}),r}_createAnimations(t,e){const s=this._properties,i=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){i.push(...this._animateOptions(t,e));continue}const d=e[l];let h=r[l];const f=s.get(l);if(h)if(f&&h.active()){h.update(f,d,a);continue}else h.cancel();if(!f||!f.duration){t[l]=d;continue}r[l]=h=new iS(f,t,l,d),i.push(h)}return i}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return pn.add(this._chart,s),!0}}function rS(n,t){const e=[],s=Object.keys(t);for(let i=0;i<s.length;i++){const r=n[s[i]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function oS(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Xp(n,t){const e=n&&n.options||{},s=e.reverse,i=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:s?r:i,end:s?i:r}}function aS(n,t,e){if(e===!1)return!1;const s=Xp(n,e),i=Xp(t,e);return{top:i.end,right:s.end,bottom:i.start,left:s.start}}function cS(n){let t,e,s,i;return st(n)?(t=n.top,e=n.right,s=n.bottom,i=n.left):t=e=s=i=n,{top:t,right:e,bottom:s,left:i,disabled:n===!1}}function bv(n,t){const e=[],s=n._getSortedDatasetMetas(t);let i,r;for(i=0,r=s.length;i<r;++i)e.push(s[i].index);return e}function Jp(n,t,e,s={}){const i=n.keys,r=s.mode==="single";let o,a,c,l;if(t===null)return;let d=!1;for(o=0,a=i.length;o<a;++o){if(c=+i[o],c===e){if(d=!0,s.all)continue;break}l=n.values[c],Ot(l)&&(r||t===0||en(t)===en(l))&&(t+=l)}return!d&&!s.all?0:t}function lS(n,t){const{iScale:e,vScale:s}=t,i=e.axis==="x"?"x":"y",r=s.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let c,l,d;for(c=0,l=o.length;c<l;++c)d=o[c],a[c]={[i]:d,[r]:n[d]};return a}function El(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function uS(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function dS(n){const{min:t,max:e,minDefined:s,maxDefined:i}=n.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:i?e:Number.POSITIVE_INFINITY}}function hS(n,t,e){const s=n[t]||(n[t]={});return s[e]||(s[e]={})}function Zp(n,t,e,s){for(const i of t.getMatchingVisibleMetas(s).reverse()){const r=n[i.index];if(e&&r>0||!e&&r<0)return i.index}return null}function tm(n,t){const{chart:e,_cachedMeta:s}=n,i=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=s,c=r.axis,l=o.axis,d=uS(r,o,s),h=t.length;let f;for(let m=0;m<h;++m){const _=t[m],{[c]:v,[l]:b}=_,T=_._stacks||(_._stacks={});f=T[l]=hS(i,d,v),f[a]=b,f._top=Zp(f,o,!0,s.type),f._bottom=Zp(f,o,!1,s.type);const I=f._visualValues||(f._visualValues={});I[a]=b}}function Tl(n,t){const e=n.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function fS(n,t){return cs(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function pS(n,t,e){return cs(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function Gi(n,t){const e=n.controller.index,s=n.vScale&&n.vScale.axis;if(s){t=t||n._parsed;for(const i of t){const r=i._stacks;if(!r||r[s]===void 0||r[s][e]===void 0)return;delete r[s][e],r[s]._visualValues!==void 0&&r[s]._visualValues[e]!==void 0&&delete r[s]._visualValues[e]}}}const Il=n=>n==="reset"||n==="none",em=(n,t)=>t?n:Object.assign({},n),mS=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:bv(e,!0),values:null};class Be{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=El(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Gi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),i=(h,f,m,_)=>h==="x"?f:h==="r"?_:m,r=e.xAxisID=G(s.xAxisID,Tl(t,"x")),o=e.yAxisID=G(s.yAxisID,Tl(t,"y")),a=e.rAxisID=G(s.rAxisID,Tl(t,"r")),c=e.indexAxis,l=e.iAxisID=i(c,r,o,a),d=e.vAxisID=i(c,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Vp(this._data,this),t._stacked&&Gi(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(st(e)){const i=this._cachedMeta;this._data=lS(e,i)}else if(s!==e){if(s){Vp(s,this);const i=this._cachedMeta;Gi(i),i._parsed=[]}e&&Object.isExtensible(e)&&ZR(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let i=!1;this._dataCheck();const r=e._stacked;e._stacked=El(e.vScale,e),e.stack!==s.stack&&(i=!0,Gi(e),e.stack=s.stack),this._resyncElements(t),(i||r!==e._stacked)&&(tm(this,e._parsed),e._stacked=El(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:i}=this,{iScale:r,_stacked:o}=s,a=r.axis;let c=t===0&&e===i.length?!0:s._sorted,l=t>0&&s._parsed[t-1],d,h,f;if(this._parsing===!1)s._parsed=i,s._sorted=!0,f=i;else{At(i[t])?f=this.parseArrayData(s,i,t,e):st(i[t])?f=this.parseObjectData(s,i,t,e):f=this.parsePrimitiveData(s,i,t,e);const m=()=>h[a]===null||l&&h[a]<l[a];for(d=0;d<e;++d)s._parsed[d+t]=h=f[d],c&&(m()&&(c=!1),l=h);s._sorted=c}o&&tm(this,f)}parsePrimitiveData(t,e,s,i){const{iScale:r,vScale:o}=t,a=r.axis,c=o.axis,l=r.getLabels(),d=r===o,h=new Array(i);let f,m,_;for(f=0,m=i;f<m;++f)_=f+s,h[f]={[a]:d||r.parse(l[_],_),[c]:o.parse(e[_],_)};return h}parseArrayData(t,e,s,i){const{xScale:r,yScale:o}=t,a=new Array(i);let c,l,d,h;for(c=0,l=i;c<l;++c)d=c+s,h=e[d],a[c]={x:r.parse(h[0],d),y:o.parse(h[1],d)};return a}parseObjectData(t,e,s,i){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(i);let d,h,f,m;for(d=0,h=i;d<h;++d)f=d+s,m=e[f],l[d]={x:r.parse(ss(m,a),f),y:o.parse(ss(m,c),f)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const i=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:bv(i,!0),values:e._stacks[t.axis]._visualValues};return Jp(a,o,r.index,{mode:s})}updateRangeFromParsed(t,e,s,i){const r=s[e.axis];let o=r===null?NaN:r;const a=i&&s._stacks[e.axis];i&&a&&(i.values=a,o=Jp(i,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const s=this._cachedMeta,i=s._parsed,r=s._sorted&&t===s.iScale,o=i.length,a=this._getOtherScale(t),c=mS(e,s,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=dS(a);let f,m;function _(){m=i[f];const v=m[a.axis];return!Ot(m[t.axis])||d>v||h<v}for(f=0;f<o&&!(!_()&&(this.updateRangeFromParsed(l,t,m,c),r));++f);if(r){for(f=o-1;f>=0;--f)if(!_()){this.updateRangeFromParsed(l,t,m,c);break}}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let i,r,o;for(i=0,r=e.length;i<r;++i)o=e[i][t.axis],Ot(o)&&s.push(o);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,i=e.vScale,r=this.getParsed(t);return{label:s?""+s.getLabelForValue(r[s.axis]):"",value:i?""+i.getLabelForValue(r[i.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=cS(G(this.options.clip,aS(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,i=s.data||[],r=e.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||i.length-a,l=this.options.drawActiveElementsOnTop;let d;for(s.dataset&&s.dataset.draw(t,r,a,c),d=a;d<a+c;++d){const h=i[d];h.hidden||(h.active&&l?o.push(h):h.draw(t,r))}for(d=0;d<o.length;++d)o[d].draw(t,r)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const i=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=pS(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=i.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=fS(this.chart.getContext(),this.index)),r.dataset=i,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=s,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const i=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],c=this.enableOptionSharing&&jr(s);if(a)return em(a,c);const l=this.chart.config,d=l.datasetElementScopeKeys(this._type,t),h=i?[`${t}Hover`,"hover",t,""]:[t,""],f=l.getOptionScopes(this.getDataset(),d),m=Object.keys(kt.elements[t]),_=()=>this.getContext(s,i,e),v=l.resolveNamedOptions(f,m,_,h);return v.$shared&&(v.$shared=c,r[o]=Object.freeze(em(v,c))),v}_resolveAnimations(t,e,s){const i=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let c;if(i.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,e),f=d.getOptionScopes(this.getDataset(),h);c=d.createResolver(f,this.getContext(t,s,e))}const l=new vv(i,c&&c.animations);return c&&c._cacheable&&(r[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Il(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),i=this._sharedOptions,r=this.getSharedOptions(s),o=this.includeOptions(e,r)||r!==i;return this.updateSharedOptions(r,e,s),{sharedOptions:r,includeOptions:o}}updateElement(t,e,s,i){Il(i)?Object.assign(t,s):this._resolveAnimations(e,i).update(t,s)}updateSharedOptions(t,e,s){t&&!Il(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,i){t.active=i;const r=this.getStyle(e,i);this._resolveAnimations(e,s,i).update(t,{options:!i&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const i=s.length,r=e.length,o=Math.min(r,i);o&&this.parse(0,o),r>i?this._insertElements(i,r-i,t):r<i&&this._removeElements(r,i-r)}_insertElements(t,e,s=!0){const i=this._cachedMeta,r=i.data,o=t+e;let a;const c=l=>{for(l.length+=e,a=l.length-1;a>=o;a--)l[a]=l[a-e]};for(c(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&c(i._parsed),this.parse(t,e),s&&this.updateElements(r,t,e,"reset")}updateElements(t,e,s,i){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const i=s._parsed.splice(t,e);s._stacked&&Gi(s,i)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,i]=t;this[e](s,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}N(Be,"defaults",{}),N(Be,"datasetElementType",null),N(Be,"dataElementType",null);function gS(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let s=[];for(let i=0,r=e.length;i<r;i++)s=s.concat(e[i].controller.getAllParsedValues(n));n._cache.$bar=Zy(s.sort((i,r)=>i-r))}return n._cache.$bar}function _S(n){const t=n.iScale,e=gS(t,n.type);let s=t._length,i,r,o,a;const c=()=>{o===32767||o===-32768||(jr(a)&&(s=Math.min(s,Math.abs(o-a)||s)),a=o)};for(i=0,r=e.length;i<r;++i)o=t.getPixelForValue(e[i]),c();for(a=void 0,i=0,r=t.ticks.length;i<r;++i)o=t.getPixelForTick(i),c();return s}function yS(n,t,e,s){const i=e.barThickness;let r,o;return tt(i)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=i*s,o=1),{chunk:r/s,ratio:o,start:t.pixels[n]-r/2}}function vS(n,t,e,s){const i=t.pixels,r=i[n];let o=n>0?i[n-1]:null,a=n<i.length-1?i[n+1]:null;const c=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const l=r-(r-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/s,ratio:e.barPercentage,start:l}}function bS(n,t,e,s){const i=e.parse(n[0],s),r=e.parse(n[1],s),o=Math.min(i,r),a=Math.max(i,r);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),t[e.axis]=l,t._custom={barStart:c,barEnd:l,start:i,end:r,min:o,max:a}}function wv(n,t,e,s){return At(n)?bS(n,t,e,s):t[e.axis]=e.parse(n,s),t}function nm(n,t,e,s){const i=n.iScale,r=n.vScale,o=i.getLabels(),a=i===r,c=[];let l,d,h,f;for(l=e,d=e+s;l<d;++l)f=t[l],h={},h[i.axis]=a||i.parse(o[l],l),c.push(wv(f,h,r,l));return c}function Al(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function wS(n,t,e){return n!==0?en(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function xS(n){let t,e,s,i,r;return n.horizontal?(t=n.base>n.x,e="left",s="right"):(t=n.base<n.y,e="bottom",s="top"),t?(i="end",r="start"):(i="start",r="end"),{start:e,end:s,reverse:t,top:i,bottom:r}}function ES(n,t,e,s){let i=t.borderSkipped;const r={};if(!i){n.borderSkipped=r;return}if(i===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:l,bottom:d}=xS(n);i==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===s?i=l:(e._bottom||0)===s?i=d:(r[sm(d,o,a,c)]=!0,i=l)),r[sm(i,o,a,c)]=!0,n.borderSkipped=r}function sm(n,t,e,s){return s?(n=TS(n,t,e),n=im(n,e,t)):n=im(n,t,e),n}function TS(n,t,e){return n===t?e:n===e?t:n}function im(n,t,e){return n==="start"?t:n==="end"?e:n}function IS(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class pa extends Be{parsePrimitiveData(t,e,s,i){return nm(t,e,s,i)}parseArrayData(t,e,s,i){return nm(t,e,s,i)}parseObjectData(t,e,s,i){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=r.axis==="x"?a:c,d=o.axis==="x"?a:c,h=[];let f,m,_,v;for(f=s,m=s+i;f<m;++f)v=e[f],_={},_[r.axis]=r.parse(ss(v,l),f),h.push(wv(ss(v,d),_,o,f));return h}updateRangeFromParsed(t,e,s,i){super.updateRangeFromParsed(t,e,s,i);const r=s._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:i}=e,r=this.getParsed(t),o=r._custom,a=Al(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(r[i.axis]);return{label:""+s.getLabelForValue(r[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,i){const r=i==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),l=a.isHorizontal(),d=this._getRuler(),{sharedOptions:h,includeOptions:f}=this._getSharedOptions(e,i);for(let m=e;m<e+s;m++){const _=this.getParsed(m),v=r||tt(_[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(m),b=this._calculateBarIndexPixels(m,d),T=(_._stacks||{})[a.axis],I={horizontal:l,base:v.base,enableBorderRadius:!T||Al(_._custom)||o===T._top||o===T._bottom,x:l?v.head:b.center,y:l?b.center:v.head,height:l?b.size:Math.abs(v.size),width:l?Math.abs(v.size):b.size};f&&(I.options=h||this.resolveDataElementOptions(m,t[m].active?"active":i));const S=I.options||t[m].options;ES(I,S,T,o),IS(I,S,d.ratio),this.updateElement(t[m],m,I,i)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,i=s.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),r=s.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),c=a&&a[s.axis],l=d=>{const h=d._parsed.find(m=>m[s.axis]===c),f=h&&h[d.vScale.axis];if(tt(f)||isNaN(f))return!0};for(const d of i)if(!(e!==void 0&&l(d))&&((r===!1||o.indexOf(d.stack)===-1||r===void 0&&d.stack===void 0)&&o.push(d.stack),d.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[G(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const i=this._getStacks(t,s),r=e!==void 0?i.indexOf(e):-1;return r===-1?i.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,i=[];let r,o;for(r=0,o=e.data.length;r<o;++r)i.push(s.getPixelForValue(this.getParsed(r)[s.axis],r));const a=t.barThickness;return{min:a||_S(e),pixels:i,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:i},options:{base:r,minBarLength:o}}=this,a=r||0,c=this.getParsed(t),l=c._custom,d=Al(l);let h=c[e.axis],f=0,m=s?this.applyStack(e,c,s):h,_,v;m!==h&&(f=m-h,m=h),d&&(h=l.barStart,m=l.barEnd-l.barStart,h!==0&&en(h)!==en(l.barEnd)&&(f=0),f+=h);const b=!tt(r)&&!d?r:f;let T=e.getPixelForValue(b);if(this.chart.getDataVisibility(t)?_=e.getPixelForValue(f+m):_=T,v=_-T,Math.abs(v)<o){v=wS(v,e,a)*o,h===a&&(T-=v/2);const I=e.getPixelForDecimal(0),S=e.getPixelForDecimal(1),C=Math.min(I,S),O=Math.max(I,S);T=Math.max(Math.min(T,O),C),_=T+v,s&&!d&&(c._stacks[e.axis]._visualValues[i]=e.getValueForPixel(_)-e.getValueForPixel(T))}if(T===e.getPixelForValue(a)){const I=en(v)*e.getLineWidthForValue(a)/2;T+=I,v-=I}return{size:v,base:T,head:_,center:_+v/2}}_calculateBarIndexPixels(t,e){const s=e.scale,i=this.options,r=i.skipNull,o=G(i.maxBarThickness,1/0);let a,c;const l=this._getAxisCount();if(e.grouped){const d=r?this._getStackCount(t):e.stackCount,h=i.barThickness==="flex"?vS(t,e,i,d*l):yS(t,e,i,d*l),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,m=this._getAxis().indexOf(G(f,this.getFirstScaleIdForIndexAxis())),_=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+m;a=h.start+h.chunk*_+h.chunk/2,c=Math.min(o,h.chunk*h.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,i=s.length;let r=0;for(;r<i;++r)this.getParsed(r)[e.axis]!==null&&!s[r].hidden&&s[r].draw(this._ctx)}}N(pa,"id","bar"),N(pa,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),N(pa,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class ma extends Be{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,i){const r=super.parsePrimitiveData(t,e,s,i);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+s).radius;return r}parseArrayData(t,e,s,i){const r=super.parseArrayData(t,e,s,i);for(let o=0;o<r.length;o++){const a=e[s+o];r[o]._custom=G(a[2],this.resolveDataElementOptions(o+s).radius)}return r}parseObjectData(t,e,s,i){const r=super.parseObjectData(t,e,s,i);for(let o=0;o<r.length;o++){const a=e[s+o];r[o]._custom=G(a&&a.r&&+a.r,this.resolveDataElementOptions(o+s).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),c=r.getLabelForValue(o.y),l=o._custom;return{label:s[t]||"",value:"("+a+", "+c+(l?", "+l:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:l}=this._getSharedOptions(e,i),d=o.axis,h=a.axis;for(let f=e;f<e+s;f++){const m=t[f],_=!r&&this.getParsed(f),v={},b=v[d]=r?o.getPixelForDecimal(.5):o.getPixelForValue(_[d]),T=v[h]=r?a.getBasePixel():a.getPixelForValue(_[h]);v.skip=isNaN(b)||isNaN(T),l&&(v.options=c||this.resolveDataElementOptions(f,m.active?"active":i),r&&(v.options.radius=0)),this.updateElement(m,f,v,i)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let i=super.resolveDataElementOptions(t,e);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const r=i.radius;return e!=="active"&&(i.radius=0),i.radius+=G(s&&s._custom,r),i}}N(ma,"id","bubble"),N(ma,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),N(ma,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function AS(n,t,e){let s=1,i=1,r=0,o=0;if(t<Tt){const a=n,c=a+t,l=Math.cos(a),d=Math.sin(a),h=Math.cos(c),f=Math.sin(c),m=(S,C,O)=>zr(S,a,c,!0)?1:Math.max(C,C*e,O,O*e),_=(S,C,O)=>zr(S,a,c,!0)?-1:Math.min(C,C*e,O,O*e),v=m(0,l,h),b=m(Bt,d,f),T=_(ct,l,h),I=_(ct+Bt,d,f);s=(v-T)/2,i=(b-I)/2,r=-(v+T)/2,o=-(b+I)/2}return{ratioX:s,ratioY:i,offsetX:r,offsetY:o}}class Ts extends Be{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=s;else{let r=c=>+s[c];if(st(s[t])){const{key:c="value"}=this._parsing;r=l=>+ss(s[l],c)}let o,a;for(o=t,a=t+e;o<a;++o)i._parsed[o]=r(o)}}_getRotation(){return Fe(this.options.rotation-90)}_getCircumference(){return Fe(this.options.circumference)}_getRotationExtents(){let t=Tt,e=-Tt;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const i=this.chart.getDatasetMeta(s).controller,r=i._getRotation(),o=i._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,i=this._cachedMeta,r=i.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-o)/2,0),c=Math.min(FR(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:d,rotation:h}=this._getRotationExtents(),{ratioX:f,ratioY:m,offsetX:_,offsetY:v}=AS(h,d,c),b=(s.width-o)/f,T=(s.height-o)/m,I=Math.max(Math.min(b,T)/2,0),S=Yy(this.options.radius,I),C=Math.max(S*c,0),O=(S-C)/this._getVisibleDatasetWeightTotal();this.offsetX=_*S,this.offsetY=v*S,i.total=this.calculateTotal(),this.outerRadius=S-O*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-O*l,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const s=this.options,i=this._cachedMeta,r=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*r/Tt)}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,d=(a.left+a.right)/2,h=(a.top+a.bottom)/2,f=r&&l.animateScale,m=f?0:this.innerRadius,_=f?0:this.outerRadius,{sharedOptions:v,includeOptions:b}=this._getSharedOptions(e,i);let T=this._getRotation(),I;for(I=0;I<e;++I)T+=this._circumference(I,r);for(I=e;I<e+s;++I){const S=this._circumference(I,r),C=t[I],O={x:d+this.offsetX,y:h+this.offsetY,startAngle:T,endAngle:T+S,circumference:S,outerRadius:_,innerRadius:m};b&&(O.options=v||this.resolveDataElementOptions(I,C.active?"active":i)),T+=S,this.updateElement(C,I,O,i)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,i;for(i=0;i<e.length;i++){const r=t._parsed[i];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(i)&&!e[i].hidden&&(s+=Math.abs(r))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?Tt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=uo(e._parsed[t],s.options.locale);return{label:i[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const s=this.chart;let i,r,o,a,c;if(!t){for(i=0,r=s.data.datasets.length;i<r;++i)if(s.isDatasetVisible(i)){o=s.getDatasetMeta(i),t=o.data,a=o.controller;break}}if(!t)return 0;for(i=0,r=t.length;i<r;++i)c=a.resolveDataElementOptions(i),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,i=t.length;s<i;++s){const r=this.resolveDataElementOptions(s);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(G(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}N(Ts,"id","doughnut"),N(Ts,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),N(Ts,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),N(Ts,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,l)=>{const h=t.getDatasetMeta(0).controller.getStyle(l);return{text:c,fillStyle:h.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(l),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:i,pointStyle:s,borderRadius:o&&(a||h.borderRadius),index:l}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class ga extends Be{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:i=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=nv(e,i,o);this._drawStart=a,this._drawCount=c,sv(e)&&(a=0,c=i.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!r._decimated,s.points=i;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:l},t),this.updateElements(i,a,c,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(e,i),f=o.axis,m=a.axis,{spanGaps:_,segment:v}=this.options,b=wi(_)?_:Number.POSITIVE_INFINITY,T=this.chart._animationsDisabled||r||i==="none",I=e+s,S=t.length;let C=e>0&&this.getParsed(e-1);for(let O=0;O<S;++O){const D=t[O],E=T?D:{};if(O<e||O>=I){E.skip=!0;continue}const y=this.getParsed(O),x=tt(y[m]),A=E[f]=o.getPixelForValue(y[f],O),R=E[m]=r||x?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,y,c):y[m],O);E.skip=isNaN(A)||isNaN(R)||x,E.stop=O>0&&Math.abs(y[f]-C[f])>b,v&&(E.parsed=y,E.raw=l.data[O]),h&&(E.options=d||this.resolveDataElementOptions(O,D.active?"active":i)),T||this.updateElement(D,O,E,i),C=y}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,i=t.data||[];if(!i.length)return s;const r=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(s,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}N(ga,"id","line"),N(ga,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),N(ga,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class kr extends Be{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=uo(e._parsed[t].r,s.options.locale);return{label:i[t]||"",value:r}}parseObjectData(t,e,s,i){return dv.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,i)=>{const r=this.getParsed(i).r;!isNaN(r)&&this.chart.getDataVisibility(i)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,i=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(i/2,0),o=Math.max(s.cutoutPercentage?r/100*s.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,c=o.options.animation,l=this._cachedMeta.rScale,d=l.xCenter,h=l.yCenter,f=l.getIndexAngle(0)-.5*ct;let m=f,_;const v=360/this.countVisibleElements();for(_=0;_<e;++_)m+=this._computeAngle(_,i,v);for(_=e;_<e+s;_++){const b=t[_];let T=m,I=m+this._computeAngle(_,i,v),S=o.getDataVisibility(_)?l.getDistanceFromCenterForValue(this.getParsed(_).r):0;m=I,r&&(c.animateScale&&(S=0),c.animateRotate&&(T=I=f));const C={x:d,y:h,innerRadius:0,outerRadius:S,startAngle:T,endAngle:I,options:this.resolveDataElementOptions(_,b.active?"active":i)};this.updateElement(b,_,C,i)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?Fe(this.resolveDataElementOptions(t,e).angle||s):0}}N(kr,"id","polarArea"),N(kr,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),N(kr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:i}}=t.legend.options;return e.labels.map((r,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:i,lineWidth:c.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class _u extends Ts{}N(_u,"id","pie"),N(_u,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class _a extends Be{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,i){return dv.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta,s=e.dataset,i=e.data||[],r=e.iScale.getLabels();if(s.points=i,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===i.length,options:o};this.updateElement(s,void 0,a,t)}this.updateElements(i,0,i.length,t)}updateElements(t,e,s,i){const r=this._cachedMeta.rScale,o=i==="reset";for(let a=e;a<e+s;a++){const c=t[a],l=this.resolveDataElementOptions(a,c.active?"active":i),d=r.getPointPositionForValue(a,this.getParsed(a).r),h=o?r.xCenter:d.x,f=o?r.yCenter:d.y,m={x:h,y:f,angle:d.angle,skip:isNaN(h)||isNaN(f),options:l};this.updateElement(c,a,m,i)}}}N(_a,"id","radar"),N(_a,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),N(_a,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class ya extends Be{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),c=r.getLabelForValue(o.y);return{label:s[t]||"",value:"("+a+", "+c+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,i=this.chart._animationsDisabled;let{start:r,count:o}=nv(e,s,i);if(this._drawStart=r,this._drawCount=o,sv(e)&&(r=0,o=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:c}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=s;const l=this.resolveDatasetElementOptions(t);l.segment=this.options.segment,this.updateElement(a,void 0,{animated:!i,options:l},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,d=this.resolveDataElementOptions(e,i),h=this.getSharedOptions(d),f=this.includeOptions(i,h),m=o.axis,_=a.axis,{spanGaps:v,segment:b}=this.options,T=wi(v)?v:Number.POSITIVE_INFINITY,I=this.chart._animationsDisabled||r||i==="none";let S=e>0&&this.getParsed(e-1);for(let C=e;C<e+s;++C){const O=t[C],D=this.getParsed(C),E=I?O:{},y=tt(D[_]),x=E[m]=o.getPixelForValue(D[m],C),A=E[_]=r||y?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,D,c):D[_],C);E.skip=isNaN(x)||isNaN(A)||y,E.stop=C>0&&Math.abs(D[m]-S[m])>T,b&&(E.parsed=D,E.raw=l.data[C]),f&&(E.options=h||this.resolveDataElementOptions(C,O.active?"active":i)),I||this.updateElement(O,C,E,i),S=D}this.updateSharedOptions(h,i,d)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let c=e.length-1;c>=0;--c)a=Math.max(a,e[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const s=t.dataset,i=s.options&&s.options.borderWidth||0;if(!e.length)return i;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(i,r,o)/2}}N(ya,"id","scatter"),N(ya,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),N(ya,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var kS=Object.freeze({__proto__:null,BarController:pa,BubbleController:ma,DoughnutController:Ts,LineController:ga,PieController:_u,PolarAreaController:kr,RadarController:_a,ScatterController:ya});function ms(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Kd{constructor(t){N(this,"options");this.options=t||{}}static override(t){Object.assign(Kd.prototype,t)}init(){}formats(){return ms()}parse(){return ms()}format(){return ms()}add(){return ms()}diff(){return ms()}startOf(){return ms()}endOf(){return ms()}}var xv={_date:Kd};function RS(n,t,e,s){const{controller:i,data:r,_sorted:o}=n,a=i._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const l=a._reversePixels?XR:xn;if(s){if(i._sharedOptions){const d=r[0],h=typeof d.getRange=="function"&&d.getRange(t);if(h){const f=l(r,t,e-h),m=l(r,t,e+h);return{lo:f.lo,hi:m.hi}}}}else{const d=l(r,t,e);if(c){const{vScale:h}=i._cachedMeta,{_parsed:f}=n,m=f.slice(0,d.lo+1).reverse().findIndex(v=>!tt(v[h.axis]));d.lo-=Math.max(0,m);const _=f.slice(d.hi).findIndex(v=>!tt(v[h.axis]));d.hi+=Math.max(0,_)}return d}}return{lo:0,hi:r.length-1}}function Dc(n,t,e,s,i){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,c=r.length;a<c;++a){const{index:l,data:d}=r[a],{lo:h,hi:f}=RS(r[a],t,o,i);for(let m=h;m<=f;++m){const _=d[m];_.skip||s(_,l,m)}}}function PS(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(s,i){const r=t?Math.abs(s.x-i.x):0,o=e?Math.abs(s.y-i.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function kl(n,t,e,s,i){const r=[];return!i&&!n.isPointInArea(t)||Dc(n,e,t,function(a,c,l){!i&&!En(a,n.chartArea,0)||a.inRange(t.x,t.y,s)&&r.push({element:a,datasetIndex:c,index:l})},!0),r}function SS(n,t,e,s){let i=[];function r(o,a,c){const{startAngle:l,endAngle:d}=o.getProps(["startAngle","endAngle"],s),{angle:h}=Xy(o,{x:t.x,y:t.y});zr(h,l,d)&&i.push({element:o,datasetIndex:a,index:c})}return Dc(n,e,t,r),i}function CS(n,t,e,s,i,r){let o=[];const a=PS(e);let c=Number.POSITIVE_INFINITY;function l(d,h,f){const m=d.inRange(t.x,t.y,i);if(s&&!m)return;const _=d.getCenterPoint(i);if(!(!!r||n.isPointInArea(_))&&!m)return;const b=a(t,_);b<c?(o=[{element:d,datasetIndex:h,index:f}],c=b):b===c&&o.push({element:d,datasetIndex:h,index:f})}return Dc(n,e,t,l),o}function Rl(n,t,e,s,i,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!s?SS(n,t,e,i):CS(n,t,e,s,i,r)}function rm(n,t,e,s,i){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return Dc(n,e,t,(c,l,d)=>{c[o]&&c[o](t[e],i)&&(r.push({element:c,datasetIndex:l,index:d}),a=a||c.inRange(t.x,t.y,i))}),s&&!a?[]:r}var DS={modes:{index(n,t,e,s){const i=vs(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?kl(n,i,r,s,o):Rl(n,i,r,!1,s,o),c=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(l=>{const d=a[0].index,h=l.data[d];h&&!h.skip&&c.push({element:h,datasetIndex:l.index,index:d})}),c):[]},dataset(n,t,e,s){const i=vs(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?kl(n,i,r,s,o):Rl(n,i,r,!1,s,o);if(a.length>0){const c=a[0].datasetIndex,l=n.getDatasetMeta(c).data;a=[];for(let d=0;d<l.length;++d)a.push({element:l[d],datasetIndex:c,index:d})}return a},point(n,t,e,s){const i=vs(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return kl(n,i,r,s,o)},nearest(n,t,e,s){const i=vs(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Rl(n,i,r,e.intersect,s,o)},x(n,t,e,s){const i=vs(t,n);return rm(n,i,"x",e.intersect,s)},y(n,t,e,s){const i=vs(t,n);return rm(n,i,"y",e.intersect,s)}}};const Ev=["left","top","right","bottom"];function Yi(n,t){return n.filter(e=>e.pos===t)}function om(n,t){return n.filter(e=>Ev.indexOf(e.pos)===-1&&e.box.axis===t)}function Ki(n,t){return n.sort((e,s)=>{const i=t?s:e,r=t?e:s;return i.weight===r.weight?i.index-r.index:i.weight-r.weight})}function OS(n){const t=[];let e,s,i,r,o,a;for(e=0,s=(n||[]).length;e<s;++e)i=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=i,t.push({index:e,box:i,pos:r,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&r+o,stackWeight:a});return t}function MS(n){const t={};for(const e of n){const{stack:s,pos:i,stackWeight:r}=e;if(!s||!Ev.includes(i))continue;const o=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function NS(n,t){const e=MS(n),{vBoxMaxWidth:s,hBoxMaxHeight:i}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:c}=a.box,l=e[a.stack],d=l&&a.stackWeight/l.weight;a.horizontal?(a.width=d?d*s:c&&t.availableWidth,a.height=i):(a.width=s,a.height=d?d*i:c&&t.availableHeight)}return e}function LS(n){const t=OS(n),e=Ki(t.filter(l=>l.box.fullSize),!0),s=Ki(Yi(t,"left"),!0),i=Ki(Yi(t,"right")),r=Ki(Yi(t,"top"),!0),o=Ki(Yi(t,"bottom")),a=om(t,"x"),c=om(t,"y");return{fullSize:e,leftAndTop:s.concat(r),rightAndBottom:i.concat(c).concat(o).concat(a),chartArea:Yi(t,"chartArea"),vertical:s.concat(i).concat(c),horizontal:r.concat(o).concat(a)}}function am(n,t,e,s){return Math.max(n[e],t[e])+Math.max(n[s],t[s])}function Tv(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function VS(n,t,e,s){const{pos:i,box:r}=e,o=n.maxPadding;if(!st(i)){e.size&&(n[i]-=e.size);const h=s[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?r.height:r.width),e.size=h.size/h.count,n[i]+=e.size}r.getPadding&&Tv(o,r.getPadding());const a=Math.max(0,t.outerWidth-am(o,n,"left","right")),c=Math.max(0,t.outerHeight-am(o,n,"top","bottom")),l=a!==n.w,d=c!==n.h;return n.w=a,n.h=c,e.horizontal?{same:l,other:d}:{same:d,other:l}}function FS(n){const t=n.maxPadding;function e(s){const i=Math.max(t[s]-n[s],0);return n[s]+=i,i}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function BS(n,t){const e=t.maxPadding;function s(i){const r={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return s(n?["left","right"]:["top","bottom"])}function fr(n,t,e,s){const i=[];let r,o,a,c,l,d;for(r=0,o=n.length,l=0;r<o;++r){a=n[r],c=a.box,c.update(a.width||t.w,a.height||t.h,BS(a.horizontal,t));const{same:h,other:f}=VS(t,e,a,s);l|=h&&i.length,d=d||f,c.fullSize||i.push(a)}return l&&fr(i,t,e,s)||d}function Yo(n,t,e,s,i){n.top=e,n.left=t,n.right=t+s,n.bottom=e+i,n.width=s,n.height=i}function cm(n,t,e,s){const i=e.padding;let{x:r,y:o}=t;for(const a of n){const c=a.box,l=s[a.stack]||{placed:0,weight:1},d=a.stackWeight/l.weight||1;if(a.horizontal){const h=t.w*d,f=l.size||c.height;jr(l.start)&&(o=l.start),c.fullSize?Yo(c,i.left,o,e.outerWidth-i.right-i.left,f):Yo(c,t.left+l.placed,o,h,f),l.start=o,l.placed+=h,o=c.bottom}else{const h=t.h*d,f=l.size||c.width;jr(l.start)&&(r=l.start),c.fullSize?Yo(c,r,i.top,f,e.outerHeight-i.bottom-i.top):Yo(c,r,t.top+l.placed,f,h),l.start=r,l.placed+=h,r=c.right}}t.x=r,t.y=o}var pe={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,s){if(!n)return;const i=ge(n.options.layout.padding),r=Math.max(t-i.width,0),o=Math.max(e-i.height,0),a=LS(n.boxes),c=a.vertical,l=a.horizontal;dt(n.boxes,v=>{typeof v.beforeLayout=="function"&&v.beforeLayout()});const d=c.reduce((v,b)=>b.box.options&&b.box.options.display===!1?v:v+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:i,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/d,hBoxMaxHeight:o/2}),f=Object.assign({},i);Tv(f,ge(s));const m=Object.assign({maxPadding:f,w:r,h:o,x:i.left,y:i.top},i),_=NS(c.concat(l),h);fr(a.fullSize,m,h,_),fr(c,m,h,_),fr(l,m,h,_)&&fr(c,m,h,_),FS(m),cm(a.leftAndTop,m,h,_),m.x+=m.w,m.y+=m.h,cm(a.rightAndBottom,m,h,_),n.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},dt(a.chartArea,v=>{const b=v.box;Object.assign(b,n.chartArea),b.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class Iv{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,i){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):s)}}isAttached(t){return!0}updateConfig(t){}}class $S extends Iv{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const va="$chartjs",US={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},lm=n=>n===null||n==="";function jS(n,t){const e=n.style,s=n.getAttribute("height"),i=n.getAttribute("width");if(n[va]={initial:{height:s,width:i,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",lm(i)){const r=qp(n,"width");r!==void 0&&(n.width=r)}if(lm(s))if(n.style.height==="")n.height=n.width/(t||2);else{const r=qp(n,"height");r!==void 0&&(n.height=r)}return n}const Av=HP?{passive:!0}:!1;function zS(n,t,e){n&&n.addEventListener(t,e,Av)}function HS(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,Av)}function WS(n,t){const e=US[n.type]||n.type,{x:s,y:i}=vs(n,t);return{type:e,chart:t,native:n,x:s!==void 0?s:null,y:i!==void 0?i:null}}function Qa(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function qS(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Qa(a.addedNodes,s),o=o&&!Qa(a.removedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}function GS(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Qa(a.removedNodes,s),o=o&&!Qa(a.addedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}const Wr=new Map;let um=0;function kv(){const n=window.devicePixelRatio;n!==um&&(um=n,Wr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function YS(n,t){Wr.size||window.addEventListener("resize",kv),Wr.set(n,t)}function KS(n){Wr.delete(n),Wr.size||window.removeEventListener("resize",kv)}function QS(n,t,e){const s=n.canvas,i=s&&Yd(s);if(!i)return;const r=ev((a,c)=>{const l=i.clientWidth;e(a,c),l<i.clientWidth&&e()},window),o=new ResizeObserver(a=>{const c=a[0],l=c.contentRect.width,d=c.contentRect.height;l===0&&d===0||r(l,d)});return o.observe(i),YS(n,r),o}function Pl(n,t,e){e&&e.disconnect(),t==="resize"&&KS(n)}function XS(n,t,e){const s=n.canvas,i=ev(r=>{n.ctx!==null&&e(WS(r,n))},n);return zS(s,t,i),i}class JS extends Iv{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(jS(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[va])return!1;const s=e[va].initial;["height","width"].forEach(r=>{const o=s[r];tt(o)?e.removeAttribute(r):e.setAttribute(r,o)});const i=s.style||{};return Object.keys(i).forEach(r=>{e.style[r]=i[r]}),e.width=e.width,delete e[va],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const i=t.$proxies||(t.$proxies={}),o={attach:qS,detach:GS,resize:QS}[e]||XS;i[e]=o(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),i=s[e];if(!i)return;({attach:Pl,detach:Pl,resize:Pl}[e]||HS)(t,e,i),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,i){return zP(t,e,s,i)}isAttached(t){const e=t&&Yd(t);return!!(e&&e.isConnected)}}function ZS(n){return!Gd()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?$S:JS}class ze{constructor(){N(this,"x");N(this,"y");N(this,"active",!1);N(this,"options");N(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return wi(this.x)&&wi(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const i={};return t.forEach(r=>{i[r]=s[r]&&s[r].active()?s[r]._to:this[r]}),i}}N(ze,"defaults",{}),N(ze,"defaultRoutes");function t1(n,t){const e=n.options.ticks,s=e1(n),i=Math.min(e.maxTicksLimit||s,s),r=e.major.enabled?s1(t):[],o=r.length,a=r[0],c=r[o-1],l=[];if(o>i)return i1(t,l,r,o/i),l;const d=n1(r,t,i);if(o>0){let h,f;const m=o>1?Math.round((c-a)/(o-1)):null;for(Ko(t,l,d,tt(m)?0:a-m,a),h=0,f=o-1;h<f;h++)Ko(t,l,d,r[h],r[h+1]);return Ko(t,l,d,c,tt(m)?t.length:c+m),l}return Ko(t,l,d),l}function e1(n){const t=n.options.offset,e=n._tickSize(),s=n._length/e+(t?0:1),i=n._maxLength/e;return Math.floor(Math.min(s,i))}function n1(n,t,e){const s=r1(n),i=t.length/e;if(!s)return Math.max(i,1);const r=qR(s);for(let o=0,a=r.length-1;o<a;o++){const c=r[o];if(c>i)return c}return Math.max(i,1)}function s1(n){const t=[];let e,s;for(e=0,s=n.length;e<s;e++)n[e].major&&t.push(e);return t}function i1(n,t,e,s){let i=0,r=e[0],o;for(s=Math.ceil(s),o=0;o<n.length;o++)o===r&&(t.push(n[o]),i++,r=e[i*s])}function Ko(n,t,e,s,i){const r=G(s,0),o=Math.min(G(i,n.length),n.length);let a=0,c,l,d;for(e=Math.ceil(e),i&&(c=i-s,e=c/Math.floor(c/e)),d=r;d<0;)a++,d=Math.round(r+a*e);for(l=Math.max(r,0);l<o;l++)l===d&&(t.push(n[l]),a++,d=Math.round(r+a*e))}function r1(n){const t=n.length;let e,s;if(t<2)return!1;for(s=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==s)return!1;return s}const o1=n=>n==="left"?"right":n==="right"?"left":n,dm=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,hm=(n,t)=>Math.min(t||n,n);function fm(n,t){const e=[],s=n.length/t,i=n.length;let r=0;for(;r<i;r+=s)e.push(n[Math.floor(r)]);return e}function a1(n,t,e){const s=n.ticks.length,i=Math.min(t,s-1),r=n._startPixel,o=n._endPixel,a=1e-6;let c=n.getPixelForTick(i),l;if(!(e&&(s===1?l=Math.max(c-r,o-c):t===0?l=(n.getPixelForTick(1)-c)/2:l=(c-n.getPixelForTick(i-1))/2,c+=i<t?l:-l,c<r-a||c>o+a)))return c}function c1(n,t){dt(n,e=>{const s=e.gc,i=s.length/2;let r;if(i>t){for(r=0;r<i;++r)delete e.data[s[r]];s.splice(0,i)}})}function Qi(n){return n.drawTicks?n.tickLength:0}function pm(n,t){if(!n.display)return 0;const e=Yt(n.font,t),s=ge(n.padding);return(At(n.text)?n.text.length:1)*e.lineHeight+s.height}function l1(n,t){return cs(n,{scale:t,type:"scale"})}function u1(n,t,e){return cs(n,{tick:e,index:t,type:"tick"})}function d1(n,t,e){let s=Ud(n);return(e&&t!=="right"||!e&&t==="right")&&(s=o1(s)),s}function h1(n,t,e,s){const{top:i,left:r,bottom:o,right:a,chart:c}=n,{chartArea:l,scales:d}=c;let h=0,f,m,_;const v=o-i,b=a-r;if(n.isHorizontal()){if(m=ue(s,r,a),st(e)){const T=Object.keys(e)[0],I=e[T];_=d[T].getPixelForValue(I)+v-t}else e==="center"?_=(l.bottom+l.top)/2+v-t:_=dm(n,e,t);f=a-r}else{if(st(e)){const T=Object.keys(e)[0],I=e[T];m=d[T].getPixelForValue(I)-b+t}else e==="center"?m=(l.left+l.right)/2-b+t:m=dm(n,e,t);_=ue(s,o,i),h=e==="left"?-Bt:Bt}return{titleX:m,titleY:_,maxWidth:f,rotation:h}}class js extends ze{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:i}=this;return t=Re(t,Number.POSITIVE_INFINITY),e=Re(e,Number.NEGATIVE_INFINITY),s=Re(s,Number.POSITIVE_INFINITY),i=Re(i,Number.NEGATIVE_INFINITY),{min:Re(t,s),max:Re(e,i),minDefined:Ot(t),maxDefined:Ot(e)}}getMinMax(t){let{min:e,max:s,minDefined:i,maxDefined:r}=this.getUserBounds(),o;if(i&&r)return{min:e,max:s};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,t),i||(e=Math.min(e,o.min)),r||(s=Math.max(s,o.max));return e=r&&e>s?s:e,s=i&&e>s?e:s,{min:Re(e,Re(s,e)),max:Re(s,Re(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){bt(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:i,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=wP(this,r,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?fm(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=t1(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){bt(this.options.afterUpdate,[this])}beforeSetDimensions(){bt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){bt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),bt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){bt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,i,r;for(s=0,i=t.length;s<i;s++)r=t[s],r.label=bt(e.callback,[r.value,s,t],this)}afterTickToLabelConversion(){bt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){bt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=hm(this.ticks.length,t.ticks.maxTicksLimit),i=e.minRotation||0,r=e.maxRotation;let o=i,a,c,l;if(!this._isVisible()||!e.display||i>=r||s<=1||!this.isHorizontal()){this.labelRotation=i;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,m=Qt(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/s:m/(s-1),h+6>a&&(a=m/(s-(t.offset?.5:1)),c=this.maxHeight-Qi(t.grid)-e.padding-pm(t.title,this.chart.options.font),l=Math.sqrt(h*h+f*f),o=Bd(Math.min(Math.asin(Qt((d.highest.height+6)/a,-1,1)),Math.asin(Qt(c/l,-1,1))-Math.asin(Qt(f/l,-1,1)))),o=Math.max(i,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){bt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){bt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:i,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=pm(i,e.options.font);if(a?(t.width=this.maxWidth,t.height=Qi(r)+c):(t.height=this.maxHeight,t.width=Qi(r)+c),s.display&&this.ticks.length){const{first:l,last:d,widest:h,highest:f}=this._getLabelSizes(),m=s.padding*2,_=Fe(this.labelRotation),v=Math.cos(_),b=Math.sin(_);if(a){const T=s.mirror?0:b*h.width+v*f.height;t.height=Math.min(this.maxHeight,t.height+T+m)}else{const T=s.mirror?0:v*h.width+b*f.height;t.width=Math.min(this.maxWidth,t.width+T+m)}this._calculatePadding(l,d,b,v)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,i){const{ticks:{align:r,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,m=0;c?l?(f=i*t.width,m=s*e.height):(f=s*t.height,m=i*e.width):r==="start"?m=e.width:r==="end"?f=t.width:r!=="inner"&&(f=t.width/2,m=e.width/2),this.paddingLeft=Math.max((f-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((m-h+o)*this.width/(this.width-h),0)}else{let d=e.height/2,h=t.height/2;r==="start"?(d=0,h=t.height):r==="end"&&(d=e.height,h=0),this.paddingTop=d+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){bt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)tt(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=fm(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:i,_longestTextCache:r}=this,o=[],a=[],c=Math.floor(e/hm(e,s));let l=0,d=0,h,f,m,_,v,b,T,I,S,C,O;for(h=0;h<e;h+=c){if(_=t[h].label,v=this._resolveTickFontOptions(h),i.font=b=v.string,T=r[b]=r[b]||{data:{},gc:[]},I=v.lineHeight,S=C=0,!tt(_)&&!At(_))S=Ya(i,T.data,T.gc,S,_),C=I;else if(At(_))for(f=0,m=_.length;f<m;++f)O=_[f],!tt(O)&&!At(O)&&(S=Ya(i,T.data,T.gc,S,O),C+=I);o.push(S),a.push(C),l=Math.max(S,l),d=Math.max(C,d)}c1(r,e);const D=o.indexOf(l),E=a.indexOf(d),y=x=>({width:o[x]||0,height:a[x]||0});return{first:y(0),last:y(e-1),widest:y(D),highest:y(E),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return QR(this._alignToPixels?ps(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=u1(this.getContext(),t,s))}return this.$context||(this.$context=l1(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Fe(this.labelRotation),s=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,c=r?r.highest.height+o:0;return this.isHorizontal()?c*s>a*i?a/s:c/i:c*i<a*s?c/s:a/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,i=this.options,{grid:r,position:o,border:a}=i,c=r.offset,l=this.isHorizontal(),h=this.ticks.length+(c?1:0),f=Qi(r),m=[],_=a.setContext(this.getContext()),v=_.display?_.width:0,b=v/2,T=function(vt){return ps(s,vt,v)};let I,S,C,O,D,E,y,x,A,R,P,k;if(o==="top")I=T(this.bottom),E=this.bottom-f,x=I-b,R=T(t.top)+b,k=t.bottom;else if(o==="bottom")I=T(this.top),R=t.top,k=T(t.bottom)-b,E=I+b,x=this.top+f;else if(o==="left")I=T(this.right),D=this.right-f,y=I-b,A=T(t.left)+b,P=t.right;else if(o==="right")I=T(this.left),A=t.left,P=T(t.right)-b,D=I+b,y=this.left+f;else if(e==="x"){if(o==="center")I=T((t.top+t.bottom)/2+.5);else if(st(o)){const vt=Object.keys(o)[0],mt=o[vt];I=T(this.chart.scales[vt].getPixelForValue(mt))}R=t.top,k=t.bottom,E=I+b,x=E+f}else if(e==="y"){if(o==="center")I=T((t.left+t.right)/2);else if(st(o)){const vt=Object.keys(o)[0],mt=o[vt];I=T(this.chart.scales[vt].getPixelForValue(mt))}D=I-b,y=D-f,A=t.left,P=t.right}const Z=G(i.ticks.maxTicksLimit,h),J=Math.max(1,Math.ceil(h/Z));for(S=0;S<h;S+=J){const vt=this.getContext(S),mt=r.setContext(vt),Xt=a.setContext(vt),zt=mt.lineWidth,an=mt.color,Ws=Xt.dash||[],_e=Xt.dashOffset,Ct=mt.tickWidth,cn=mt.tickColor,Me=mt.tickBorderDash||[],ln=mt.tickBorderDashOffset;C=a1(this,S,c),C!==void 0&&(O=ps(s,C,zt),l?D=y=A=P=O:E=x=R=k=O,m.push({tx1:D,ty1:E,tx2:y,ty2:x,x1:A,y1:R,x2:P,y2:k,width:zt,color:an,borderDash:Ws,borderDashOffset:_e,tickWidth:Ct,tickColor:cn,tickBorderDash:Me,tickBorderDashOffset:ln}))}return this._ticksLength=h,this._borderValue=I,m}_computeLabelItems(t){const e=this.axis,s=this.options,{position:i,ticks:r}=s,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:d,mirror:h}=r,f=Qi(s.grid),m=f+d,_=h?-d:m,v=-Fe(this.labelRotation),b=[];let T,I,S,C,O,D,E,y,x,A,R,P,k="middle";if(i==="top")D=this.bottom-_,E=this._getXAxisLabelAlignment();else if(i==="bottom")D=this.top+_,E=this._getXAxisLabelAlignment();else if(i==="left"){const J=this._getYAxisLabelAlignment(f);E=J.textAlign,O=J.x}else if(i==="right"){const J=this._getYAxisLabelAlignment(f);E=J.textAlign,O=J.x}else if(e==="x"){if(i==="center")D=(t.top+t.bottom)/2+m;else if(st(i)){const J=Object.keys(i)[0],vt=i[J];D=this.chart.scales[J].getPixelForValue(vt)+m}E=this._getXAxisLabelAlignment()}else if(e==="y"){if(i==="center")O=(t.left+t.right)/2-m;else if(st(i)){const J=Object.keys(i)[0],vt=i[J];O=this.chart.scales[J].getPixelForValue(vt)}E=this._getYAxisLabelAlignment(f).textAlign}e==="y"&&(c==="start"?k="top":c==="end"&&(k="bottom"));const Z=this._getLabelSizes();for(T=0,I=a.length;T<I;++T){S=a[T],C=S.label;const J=r.setContext(this.getContext(T));y=this.getPixelForTick(T)+r.labelOffset,x=this._resolveTickFontOptions(T),A=x.lineHeight,R=At(C)?C.length:1;const vt=R/2,mt=J.color,Xt=J.textStrokeColor,zt=J.textStrokeWidth;let an=E;o?(O=y,E==="inner"&&(T===I-1?an=this.options.reverse?"left":"right":T===0?an=this.options.reverse?"right":"left":an="center"),i==="top"?l==="near"||v!==0?P=-R*A+A/2:l==="center"?P=-Z.highest.height/2-vt*A+A:P=-Z.highest.height+A/2:l==="near"||v!==0?P=A/2:l==="center"?P=Z.highest.height/2-vt*A:P=Z.highest.height-R*A,h&&(P*=-1),v!==0&&!J.showLabelBackdrop&&(O+=A/2*Math.sin(v))):(D=y,P=(1-R)*A/2);let Ws;if(J.showLabelBackdrop){const _e=ge(J.backdropPadding),Ct=Z.heights[T],cn=Z.widths[T];let Me=P-_e.top,ln=0-_e.left;switch(k){case"middle":Me-=Ct/2;break;case"bottom":Me-=Ct;break}switch(E){case"center":ln-=cn/2;break;case"right":ln-=cn;break;case"inner":T===I-1?ln-=cn:T>0&&(ln-=cn/2);break}Ws={left:ln,top:Me,width:cn+_e.width,height:Ct+_e.height,color:J.backdropColor}}b.push({label:C,font:x,textOffset:P,options:{rotation:v,color:mt,strokeColor:Xt,strokeWidth:zt,textAlign:an,textBaseline:k,translation:[O,D],backdrop:Ws}})}return b}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Fe(this.labelRotation))return t==="top"?"left":"right";let i="center";return e.align==="start"?i="left":e.align==="end"?i="right":e.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:i,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,c=o.widest.width;let l,d;return e==="left"?i?(d=this.right+r,s==="near"?l="left":s==="center"?(l="center",d+=c/2):(l="right",d+=c)):(d=this.right-a,s==="near"?l="right":s==="center"?(l="center",d-=c/2):(l="left",d=this.left)):e==="right"?i?(d=this.left+r,s==="near"?l="right":s==="center"?(l="center",d-=c/2):(l="left",d-=c)):(d=this.left+a,s==="near"?l="left":s==="center"?(l="center",d+=c/2):(l="right",d=this.right)):l="right",{textAlign:l,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:i,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,i,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex(r=>r.value===t);return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(c,l,d)=>{!d.width||!d.color||(s.save(),s.lineWidth=d.width,s.strokeStyle=d.color,s.setLineDash(d.borderDash||[]),s.lineDashOffset=d.borderDashOffset,s.beginPath(),s.moveTo(c.x,c.y),s.lineTo(l.x,l.y),s.stroke(),s.restore())};if(e.display)for(r=0,o=i.length;r<o;++r){const c=i[r];e.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:i}}=this,r=s.setContext(this.getContext()),o=s.display?r.width:0;if(!o)return;const a=i.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,d,h,f;this.isHorizontal()?(l=ps(t,this.left,o)-o/2,d=ps(t,this.right,a)+a/2,h=f=c):(h=ps(t,this.top,o)-o/2,f=ps(t,this.bottom,a)+a/2,l=d=c),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(l,h),e.lineTo(d,f),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,i=this._computeLabelArea();i&&Pc(s,i);const r=this.getLabelItems(t);for(const o of r){const a=o.options,c=o.font,l=o.label,d=o.textOffset;Ls(s,l,0,d,c,a)}i&&Sc(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:i}}=this;if(!s.display)return;const r=Yt(s.font),o=ge(s.padding),a=s.align;let c=r.lineHeight/2;e==="bottom"||e==="center"||st(e)?(c+=o.bottom,At(s.text)&&(c+=r.lineHeight*(s.text.length-1))):c+=o.top;const{titleX:l,titleY:d,maxWidth:h,rotation:f}=h1(this,c,e,a);Ls(t,s.text,0,0,r,{color:s.color,maxWidth:h,rotation:f,textAlign:d1(a,e,i),textBaseline:"middle",translation:[l,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=G(t.grid&&t.grid.z,-1),i=G(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==js.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:s,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",i=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[s]===this.id&&(!t||a.type===t)&&i.push(a)}return i}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Yt(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Qo{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;m1(e)&&(s=this.register(e));const i=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in i||(i[r]=t,f1(t,o,s),this.override&&kt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,i=this.scope;s in e&&delete e[s],i&&s in kt[i]&&(delete kt[i][s],this.override&&delete Ns[s])}}function f1(n,t,e){const s=Ur(Object.create(null),[e?kt.get(e):{},kt.get(t),n.defaults]);kt.set(t,s),n.defaultRoutes&&p1(t,n.defaultRoutes),n.descriptors&&kt.describe(t,n.descriptors)}function p1(n,t){Object.keys(t).forEach(e=>{const s=e.split("."),i=s.pop(),r=[n].concat(s).join("."),o=t[e].split("."),a=o.pop(),c=o.join(".");kt.route(r,i,c,a)})}function m1(n){return"id"in n&&"defaults"in n}class g1{constructor(){this.controllers=new Qo(Be,"datasets",!0),this.elements=new Qo(ze,"elements"),this.plugins=new Qo(Object,"plugins"),this.scales=new Qo(js,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(i=>{const r=s||this._getRegistryForType(i);s||r.isForType(i)||r===this.plugins&&i.id?this._exec(t,r,i):dt(i,o=>{const a=s||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,s){const i=Fd(t);bt(s["before"+i],[],s),e[t](s),bt(s["after"+i],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const i=e.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return i}}var qe=new g1;class _1{constructor(){this._init=void 0}notify(t,e,s,i){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=i?this._descriptors(t).filter(i):this._descriptors(t),o=this._notify(r,t,e,s);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,s,i){i=i||{};for(const r of t){const o=r.plugin,a=o[s],c=[e,i,r.options];if(bt(a,c,o)===!1&&i.cancelable)return!1}return!0}invalidate(){tt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,i=G(s.options&&s.options.plugins,{}),r=y1(s);return i===!1&&!e?[]:b1(t,r,i,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,i=(r,o)=>r.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(i(e,s),t,"stop"),this._notify(i(s,e),t,"start")}}function y1(n){const t={},e=[],s=Object.keys(qe.plugins.items);for(let r=0;r<s.length;r++)e.push(qe.getPlugin(s[r]));const i=n.plugins||[];for(let r=0;r<i.length;r++){const o=i[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function v1(n,t){return!t&&n===!1?null:n===!0?{}:n}function b1(n,{plugins:t,localIds:e},s,i){const r=[],o=n.getContext();for(const a of t){const c=a.id,l=v1(s[c],i);l!==null&&r.push({plugin:a,options:w1(n.config,{plugin:a,local:e[c]},l,o)})}return r}function w1(n,{plugin:t,local:e},s,i){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(s,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function yu(n,t){const e=kt.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function x1(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function E1(n,t){return n===t?"_index_":"_value_"}function mm(n){if(n==="x"||n==="y"||n==="r")return n}function T1(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function vu(n,...t){if(mm(n))return n;for(const e of t){const s=e.axis||T1(e.position)||n.length>1&&mm(n[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function gm(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function I1(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===n||s.yAxisID===n);if(e.length)return gm(n,"x",e[0])||gm(n,"y",e[0])}return{}}function A1(n,t){const e=Ns[n.type]||{scales:{}},s=t.scales||{},i=yu(n.type,t),r=Object.create(null);return Object.keys(s).forEach(o=>{const a=s[o];if(!st(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=vu(o,a,I1(o,n),kt.scales[a.type]),l=E1(c,i),d=e.scales||{};r[o]=Er(Object.create(null),[{axis:c},a,d[c],d[l]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,c=o.indexAxis||yu(a,t),d=(Ns[a]||{}).scales||{};Object.keys(d).forEach(h=>{const f=x1(h,c),m=o[f+"AxisID"]||f;r[m]=r[m]||Object.create(null),Er(r[m],[{axis:f},s[m],d[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];Er(a,[kt.scales[a.type],kt.scale])}),r}function Rv(n){const t=n.options||(n.options={});t.plugins=G(t.plugins,{}),t.scales=A1(n,t)}function Pv(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function k1(n){return n=n||{},n.data=Pv(n.data),Rv(n),n}const _m=new Map,Sv=new Set;function Xo(n,t){let e=_m.get(n);return e||(e=t(),_m.set(n,e),Sv.add(e)),e}const Xi=(n,t,e)=>{const s=ss(t,e);s!==void 0&&n.add(s)};class R1{constructor(t){this._config=k1(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Pv(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Rv(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Xo(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return Xo(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return Xo(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return Xo(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let i=s.get(t);return(!i||e)&&(i=new Map,s.set(t,i)),i}getOptionScopes(t,e,s){const{options:i,type:r}=this,o=this._cachedScopes(t,s),a=o.get(e);if(a)return a;const c=new Set;e.forEach(d=>{t&&(c.add(t),d.forEach(h=>Xi(c,t,h))),d.forEach(h=>Xi(c,i,h)),d.forEach(h=>Xi(c,Ns[r]||{},h)),d.forEach(h=>Xi(c,kt,h)),d.forEach(h=>Xi(c,mu,h))});const l=Array.from(c);return l.length===0&&l.push(Object.create(null)),Sv.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,Ns[e]||{},kt.datasets[e]||{},{type:e},kt,mu]}resolveNamedOptions(t,e,s,i=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=ym(this._resolverCache,t,i);let c=o;if(S1(o,e)){r.$shared=!1,s=is(s)?s():s;const l=this.createResolver(t,s,a);c=xi(o,s,l)}for(const l of e)r[l]=c[l];return r}createResolver(t,e,s=[""],i){const{resolver:r}=ym(this._resolverCache,t,s);return st(e)?xi(r,e,void 0,i):r}}function ym(n,t,e){let s=n.get(t);s||(s=new Map,n.set(t,s));const i=e.join();let r=s.get(i);return r||(r={resolver:Hd(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},s.set(i,r)),r}const P1=n=>st(n)&&Object.getOwnPropertyNames(n).some(t=>is(n[t]));function S1(n,t){const{isScriptable:e,isIndexable:s}=av(n);for(const i of t){const r=e(i),o=s(i),a=(o||r)&&n[i];if(r&&(is(a)||P1(a))||o&&At(a))return!0}return!1}var C1="4.5.1";const D1=["top","bottom","left","right","chartArea"];function vm(n,t){return n==="top"||n==="bottom"||D1.indexOf(n)===-1&&t==="x"}function bm(n,t){return function(e,s){return e[n]===s[n]?e[t]-s[t]:e[n]-s[n]}}function wm(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),bt(e&&e.onComplete,[n],t)}function O1(n){const t=n.chart,e=t.options.animation;bt(e&&e.onProgress,[n],t)}function Cv(n){return Gd()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const ba={},xm=n=>{const t=Cv(n);return Object.values(ba).filter(e=>e.canvas===t).pop()};function M1(n,t,e){const s=Object.keys(n);for(const i of s){const r=+i;if(r>=t){const o=n[i];delete n[i],(e>0||r>t)&&(n[r+e]=o)}}}function N1(n,t,e,s){return!e||n.type==="mouseout"?null:s?t:n}class ht{static register(...t){qe.add(...t),Em()}static unregister(...t){qe.remove(...t),Em()}constructor(t,e){const s=this.config=new R1(e),i=Cv(t),r=xm(i);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||ZS(i)),this.platform.updateConfig(s);const a=this.platform.acquireContext(i,o.aspectRatio),c=a&&a.canvas,l=c&&c.height,d=c&&c.width;if(this.id=VR(),this.ctx=a,this.canvas=c,this.width=d,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new _1,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=tP(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],ba[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}pn.listen(this,"complete",wm),pn.listen(this,"progress",O1),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:i,_aspectRatio:r}=this;return tt(t)?e&&r?r:i?s/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return qe}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Wp(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return jp(this.canvas,this.ctx),this}stop(){return pn.stop(this),this}resize(t,e){pn.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,i=this.canvas,r=s.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,t,e,r),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Wp(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),bt(s.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};dt(e,(s,i)=>{s.id=i})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,i=Object.keys(s).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],c=vu(o,a),l=c==="r",d=c==="x";return{options:a,dposition:l?"chartArea":d?"bottom":"left",dtype:l?"radialLinear":d?"category":"linear"}}))),dt(r,o=>{const a=o.options,c=a.id,l=vu(c,a),d=G(a.type,o.dtype);(a.position===void 0||vm(a.position,l)!==vm(o.dposition))&&(a.position=o.dposition),i[c]=!0;let h=null;if(c in s&&s[c].type===d)h=s[c];else{const f=qe.getScale(d);h=new f({id:c,type:d,ctx:this.ctx,chart:this}),s[h.id]=h}h.init(a,t)}),dt(i,(o,a)=>{o||delete s[a]}),dt(s,o=>{pe.configure(this,o,o.options),pe.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((i,r)=>i.index-r.index),s>e){for(let i=e;i<s;++i)this._destroyDatasetMeta(i);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(bm("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,i)=>{e.filter(r=>r===s._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,i;for(this._removeUnreferencedMetasets(),s=0,i=e.length;s<i;s++){const r=e[s];let o=this.getDatasetMeta(s);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(s),o=this.getDatasetMeta(s)),o.type=a,o.indexAxis=r.indexAxis||yu(a,this.options),o.order=r.order||0,o.index=s,o.label=""+r.label,o.visible=this.isDatasetVisible(s),o.controller)o.controller.updateIndex(s),o.controller.linkScales();else{const c=qe.getController(a),{datasetElementType:l,dataElementType:d}=kt.datasets[a];Object.assign(c,{dataElementType:qe.getElement(d),datasetElementType:l&&qe.getElement(l)}),o.controller=new c(this,s),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){dt(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,d=this.data.datasets.length;l<d;l++){const{controller:h}=this.getDatasetMeta(l),f=!i&&r.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=s.layout.autoPadding?o:0,this._updateLayout(o),i||dt(r,l=>{l.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(bm("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){dt(this.scales,t=>{pe.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Op(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:i,count:r}of e){const o=s==="_removeElements"?-r:r;M1(t,i,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),i=s(0);for(let r=1;r<e;r++)if(!Op(i,s(r)))return;return Array.from(i).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;pe.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],dt(this.boxes,i=>{s&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,r)=>{i._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,is(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),i={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(s.controller._update(e),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(pn.has(this)?this.attached&&!pn.running(this)&&pn.start(this):(this.draw(),wm({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let i,r;for(i=0,r=e.length;i<r;++i){const o=e[i];(!t||o.visible)&&s.push(o)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},i=yv(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(i&&Pc(e,i),t.controller.draw(),i&&Sc(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return En(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,i){const r=DS.modes[e];return typeof r=="function"?r(this,t,s,i):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let i=s.filter(r=>r&&r._dataset===e).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(i)),i}getContext(){return this.$context||(this.$context=cs(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const i=s?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,i);jr(e)?(r.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),o.update(r,{visible:s}),this.update(a=>a.datasetIndex===t?i:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),pn.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),jp(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete ba[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},i=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};dt(this.options.events,r=>s(r,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(c,l)=>{e.addEventListener(this,c,l),t[c]=l},i=(c,l)=>{t[c]&&(e.removeEventListener(this,c,l),delete t[c])},r=(c,l)=>{this.canvas&&this.resize(c,l)};let o;const a=()=>{i("attach",a),this.attached=!0,this.resize(),s("resize",r),s("detach",o)};o=()=>{this.attached=!1,i("resize",r),this._stop(),this._resize(0,0),s("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){dt(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},dt(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const i=s?"set":"remove";let r,o,a,c;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+i+"DatasetHoverStyle"]()),a=0,c=t.length;a<c;++a){o=t[a];const l=o&&this.getDatasetMeta(o.datasetIndex).controller;l&&l[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!Wa(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const i=this.options.hover,r=(c,l)=>c.filter(d=>!l.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),o=r(e,t),a=s?t:r(t,e);o.length&&this.updateHoverStyle(o,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},i=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,i)===!1)return;const r=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,i),(r||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:i=[],options:r}=this,o=e,a=this._getActiveElements(t,i,s,o),c=zR(t),l=N1(t,this._lastEvent,s,c);s&&(this._lastEvent=null,bt(r.onHover,[t,a,this],this),c&&bt(r.onClick,[t,a,this],this));const d=!Wa(a,i);return(d||e)&&(this._active=a,this._updateHoverStyles(a,i,e)),this._lastEvent=l,d}_getActiveElements(t,e,s,i){if(t.type==="mouseout")return[];if(!s)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,i)}}N(ht,"defaults",kt),N(ht,"instances",ba),N(ht,"overrides",Ns),N(ht,"registry",qe),N(ht,"version",C1),N(ht,"getChart",xm);function Em(){return dt(ht.instances,n=>n._plugins.invalidate())}function L1(n,t,e){const{startAngle:s,x:i,y:r,outerRadius:o,innerRadius:a,options:c}=t,{borderWidth:l,borderJoinStyle:d}=c,h=Math.min(l/o,he(s-e));if(n.beginPath(),n.arc(i,r,o-l/2,s+h/2,e-h/2),a>0){const f=Math.min(l/a,he(s-e));n.arc(i,r,a+l/2,e-f/2,s+f/2,!0)}else{const f=Math.min(l/2,o*he(s-e));if(d==="round")n.arc(i,r,f,e-ct/2,s+ct/2,!0);else if(d==="bevel"){const m=2*f*f,_=-m*Math.cos(e+ct/2)+i,v=-m*Math.sin(e+ct/2)+r,b=m*Math.cos(s+ct/2)+i,T=m*Math.sin(s+ct/2)+r;n.lineTo(_,v),n.lineTo(b,T)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function V1(n,t,e){const{startAngle:s,pixelMargin:i,x:r,y:o,outerRadius:a,innerRadius:c}=t;let l=i/a;n.beginPath(),n.arc(r,o,a,s-l,e+l),c>i?(l=i/c,n.arc(r,o,c,e+l,s-l,!0)):n.arc(r,o,i,e+Bt,s-Bt),n.closePath(),n.clip()}function F1(n){return zd(n,["outerStart","outerEnd","innerStart","innerEnd"])}function B1(n,t,e,s){const i=F1(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,s*t/2),a=c=>{const l=(e-Math.min(r,c))*s/2;return Qt(c,0,Math.min(r,l))};return{outerStart:a(i.outerStart),outerEnd:a(i.outerEnd),innerStart:Qt(i.innerStart,0,o),innerEnd:Qt(i.innerEnd,0,o)}}function Js(n,t,e,s){return{x:e+n*Math.cos(t),y:s+n*Math.sin(t)}}function Xa(n,t,e,s,i,r){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:d}=t,h=Math.max(t.outerRadius+s+e-l,0),f=d>0?d+s+e+l:0;let m=0;const _=i-c;if(s){const J=d>0?d-s:0,vt=h>0?h-s:0,mt=(J+vt)/2,Xt=mt!==0?_*mt/(mt+s):_;m=(_-Xt)/2}const v=Math.max(.001,_*h-e/ct)/h,b=(_-v)/2,T=c+b+m,I=i-b-m,{outerStart:S,outerEnd:C,innerStart:O,innerEnd:D}=B1(t,f,h,I-T),E=h-S,y=h-C,x=T+S/E,A=I-C/y,R=f+O,P=f+D,k=T+O/R,Z=I-D/P;if(n.beginPath(),r){const J=(x+A)/2;if(n.arc(o,a,h,x,J),n.arc(o,a,h,J,A),C>0){const zt=Js(y,A,o,a);n.arc(zt.x,zt.y,C,A,I+Bt)}const vt=Js(P,I,o,a);if(n.lineTo(vt.x,vt.y),D>0){const zt=Js(P,Z,o,a);n.arc(zt.x,zt.y,D,I+Bt,Z+Math.PI)}const mt=(I-D/f+(T+O/f))/2;if(n.arc(o,a,f,I-D/f,mt,!0),n.arc(o,a,f,mt,T+O/f,!0),O>0){const zt=Js(R,k,o,a);n.arc(zt.x,zt.y,O,k+Math.PI,T-Bt)}const Xt=Js(E,T,o,a);if(n.lineTo(Xt.x,Xt.y),S>0){const zt=Js(E,x,o,a);n.arc(zt.x,zt.y,S,T-Bt,x)}}else{n.moveTo(o,a);const J=Math.cos(x)*h+o,vt=Math.sin(x)*h+a;n.lineTo(J,vt);const mt=Math.cos(A)*h+o,Xt=Math.sin(A)*h+a;n.lineTo(mt,Xt)}n.closePath()}function $1(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a}=t;let c=t.endAngle;if(r){Xa(n,t,e,s,c,i);for(let l=0;l<r;++l)n.fill();isNaN(a)||(c=o+(a%Tt||Tt))}return Xa(n,t,e,s,c,i),n.fill(),c}function U1(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a,options:c}=t,{borderWidth:l,borderJoinStyle:d,borderDash:h,borderDashOffset:f,borderRadius:m}=c,_=c.borderAlign==="inner";if(!l)return;n.setLineDash(h||[]),n.lineDashOffset=f,_?(n.lineWidth=l*2,n.lineJoin=d||"round"):(n.lineWidth=l,n.lineJoin=d||"bevel");let v=t.endAngle;if(r){Xa(n,t,e,s,v,i);for(let b=0;b<r;++b)n.stroke();isNaN(a)||(v=o+(a%Tt||Tt))}_&&V1(n,t,v),c.selfJoin&&v-o>=ct&&m===0&&d!=="miter"&&L1(n,t,v),r||(Xa(n,t,e,s,v,i),n.stroke())}class pr extends ze{constructor(e){super();N(this,"circumference");N(this,"endAngle");N(this,"fullCircles");N(this,"innerRadius");N(this,"outerRadius");N(this,"pixelMargin");N(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.getProps(["x","y"],i),{angle:o,distance:a}=Xy(r,{x:e,y:s}),{startAngle:c,endAngle:l,innerRadius:d,outerRadius:h,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),m=(this.options.spacing+this.options.borderWidth)/2,_=G(f,l-c),v=zr(o,c,l)&&c!==l,b=_>=Tt||v,T=wn(a,d+m,h+m);return b&&T}getCenterPoint(e){const{x:s,y:i,startAngle:r,endAngle:o,innerRadius:a,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:l,spacing:d}=this.options,h=(r+o)/2,f=(a+c+d+l)/2;return{x:s+Math.cos(h)*f,y:i+Math.sin(h)*f}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:i}=this,r=(s.offset||0)/4,o=(s.spacing||0)/2,a=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=i>Tt?Math.floor(i/Tt):0,i===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*r,Math.sin(c)*r);const l=1-Math.sin(Math.min(ct,i||0)),d=r*l;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,$1(e,this,d,o,a),U1(e,this,d,o,a),e.restore()}}N(pr,"id","arc"),N(pr,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),N(pr,"defaultRoutes",{backgroundColor:"backgroundColor"}),N(pr,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function Dv(n,t,e=t){n.lineCap=G(e.borderCapStyle,t.borderCapStyle),n.setLineDash(G(e.borderDash,t.borderDash)),n.lineDashOffset=G(e.borderDashOffset,t.borderDashOffset),n.lineJoin=G(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=G(e.borderWidth,t.borderWidth),n.strokeStyle=G(e.borderColor,t.borderColor)}function j1(n,t,e){n.lineTo(e.x,e.y)}function z1(n){return n.stepped?hP:n.tension||n.cubicInterpolationMode==="monotone"?fP:j1}function Ov(n,t,e={}){const s=n.length,{start:i=0,end:r=s-1}=e,{start:o,end:a}=t,c=Math.max(i,o),l=Math.min(r,a),d=i<o&&r<o||i>a&&r>a;return{count:s,start:c,loop:t.loop,ilen:l<c&&!d?s+l-c:l-c}}function H1(n,t,e,s){const{points:i,options:r}=t,{count:o,start:a,loop:c,ilen:l}=Ov(i,e,s),d=z1(r);let{move:h=!0,reverse:f}=s||{},m,_,v;for(m=0;m<=l;++m)_=i[(a+(f?l-m:m))%o],!_.skip&&(h?(n.moveTo(_.x,_.y),h=!1):d(n,v,_,f,r.stepped),v=_);return c&&(_=i[(a+(f?l:0))%o],d(n,v,_,f,r.stepped)),!!c}function W1(n,t,e,s){const i=t.points,{count:r,start:o,ilen:a}=Ov(i,e,s),{move:c=!0,reverse:l}=s||{};let d=0,h=0,f,m,_,v,b,T;const I=C=>(o+(l?a-C:C))%r,S=()=>{v!==b&&(n.lineTo(d,b),n.lineTo(d,v),n.lineTo(d,T))};for(c&&(m=i[I(0)],n.moveTo(m.x,m.y)),f=0;f<=a;++f){if(m=i[I(f)],m.skip)continue;const C=m.x,O=m.y,D=C|0;D===_?(O<v?v=O:O>b&&(b=O),d=(h*d+C)/++h):(S(),n.lineTo(C,O),_=D,h=0,v=b=O),T=O}S()}function bu(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?W1:H1}function q1(n){return n.stepped?WP:n.tension||n.cubicInterpolationMode==="monotone"?qP:bs}function G1(n,t,e,s){let i=t._path;i||(i=t._path=new Path2D,t.path(i,e,s)&&i.closePath()),Dv(n,t.options),n.stroke(i)}function Y1(n,t,e,s){const{segments:i,options:r}=t,o=bu(t);for(const a of i)Dv(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+s-1})&&n.closePath(),n.stroke()}const K1=typeof Path2D=="function";function Q1(n,t,e,s){K1&&!t.options.segment?G1(n,t,e,s):Y1(n,t,e,s)}class qn extends ze{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const i=s.spanGaps?this._loop:this._fullLoop;VP(this._points,s,t,i,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=JP(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,i=t[e],r=this.points,o=_v(this,{property:e,start:i,end:i});if(!o.length)return;const a=[],c=q1(s);let l,d;for(l=0,d=o.length;l<d;++l){const{start:h,end:f}=o[l],m=r[h],_=r[f];if(m===_){a.push(m);continue}const v=Math.abs((i-m[e])/(_[e]-m[e])),b=c(m,_,v,s.stepped);b[e]=t[e],a.push(b)}return a.length===1?a[0]:a}pathSegment(t,e,s){return bu(this)(t,this,e,s)}path(t,e,s){const i=this.segments,r=bu(this);let o=this._loop;e=e||0,s=s||this.points.length-e;for(const a of i)o&=r(t,this,a,{start:e,end:e+s-1});return!!o}draw(t,e,s,i){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),Q1(t,this,s,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}N(qn,"id","line"),N(qn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),N(qn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),N(qn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Tm(n,t,e,s){const i=n.options,{[e]:r}=n.getProps([e],s);return Math.abs(t-r)<i.radius+i.hitRadius}class wa extends ze{constructor(e){super();N(this,"parsed");N(this,"skip");N(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],i);return Math.pow(e-o,2)+Math.pow(s-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,s){return Tm(this,e,"x",s)}inYRange(e,s){return Tm(this,e,"y",s)}getCenterPoint(e){const{x:s,y:i}=this.getProps(["x","y"],e);return{x:s,y:i}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const i=s&&e.borderWidth||0;return(s+i)*2}draw(e,s){const i=this.options;this.skip||i.radius<.1||!En(this,s,this.size(i)/2)||(e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.fillStyle=i.backgroundColor,gu(e,i,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}N(wa,"id","point"),N(wa,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),N(wa,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Mv(n,t){const{x:e,y:s,base:i,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,c,l,d,h;return n.horizontal?(h=o/2,a=Math.min(e,i),c=Math.max(e,i),l=s-h,d=s+h):(h=r/2,a=e-h,c=e+h,l=Math.min(s,i),d=Math.max(s,i)),{left:a,top:l,right:c,bottom:d}}function Gn(n,t,e,s){return n?0:Qt(t,e,s)}function X1(n,t,e){const s=n.options.borderWidth,i=n.borderSkipped,r=ov(s);return{t:Gn(i.top,r.top,0,e),r:Gn(i.right,r.right,0,t),b:Gn(i.bottom,r.bottom,0,e),l:Gn(i.left,r.left,0,t)}}function J1(n,t,e){const{enableBorderRadius:s}=n.getProps(["enableBorderRadius"]),i=n.options.borderRadius,r=ks(i),o=Math.min(t,e),a=n.borderSkipped,c=s||st(i);return{topLeft:Gn(!c||a.top||a.left,r.topLeft,0,o),topRight:Gn(!c||a.top||a.right,r.topRight,0,o),bottomLeft:Gn(!c||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:Gn(!c||a.bottom||a.right,r.bottomRight,0,o)}}function Z1(n){const t=Mv(n),e=t.right-t.left,s=t.bottom-t.top,i=X1(n,e/2,s/2),r=J1(n,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:r},inner:{x:t.left+i.l,y:t.top+i.t,w:e-i.l-i.r,h:s-i.t-i.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,r.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(i.b,i.r))}}}}function Sl(n,t,e,s){const i=t===null,r=e===null,a=n&&!(i&&r)&&Mv(n,s);return a&&(i||wn(t,a.left,a.right))&&(r||wn(e,a.top,a.bottom))}function tC(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function eC(n,t){n.rect(t.x,t.y,t.w,t.h)}function Cl(n,t,e={}){const s=n.x!==e.x?-t:0,i=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-s,o=(n.y+n.h!==e.y+e.h?t:0)-i;return{x:n.x+s,y:n.y+i,w:n.w+r,h:n.h+o,radius:n.radius}}class xa extends ze{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:i}}=this,{inner:r,outer:o}=Z1(this),a=tC(o.radius)?Hr:eC;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,Cl(o,e,r)),t.clip(),a(t,Cl(r,-e,o)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,Cl(r,e)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,e,s){return Sl(this,t,e,s)}inXRange(t,e){return Sl(this,t,null,e)}inYRange(t,e){return Sl(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:i,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+i)/2:e,y:r?s:(s+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}N(xa,"id","bar"),N(xa,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),N(xa,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var nC=Object.freeze({__proto__:null,ArcElement:pr,BarElement:xa,LineElement:qn,PointElement:wa});const wu=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Im=wu.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function Nv(n){return wu[n%wu.length]}function Lv(n){return Im[n%Im.length]}function sC(n,t){return n.borderColor=Nv(t),n.backgroundColor=Lv(t),++t}function iC(n,t){return n.backgroundColor=n.data.map(()=>Nv(t++)),t}function rC(n,t){return n.backgroundColor=n.data.map(()=>Lv(t++)),t}function oC(n){let t=0;return(e,s)=>{const i=n.getDatasetMeta(s).controller;i instanceof Ts?t=iC(e,t):i instanceof kr?t=rC(e,t):i&&(t=sC(e,t))}}function Am(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function aC(n){return n&&(n.borderColor||n.backgroundColor)}function cC(){return kt.borderColor!=="rgba(0,0,0,0.1)"||kt.backgroundColor!=="rgba(0,0,0,0.1)"}var lC={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:s},options:i}=n.config,{elements:r}=i,o=Am(s)||aC(i)||r&&Am(r)||cC();if(!e.forceOverride&&o)return;const a=oC(n);s.forEach(a)}};function uC(n,t,e,s,i){const r=i.samples||s;if(r>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(r-2);let c=0;const l=t+e-1;let d=t,h,f,m,_,v;for(o[c++]=n[d],h=0;h<r-2;h++){let b=0,T=0,I;const S=Math.floor((h+1)*a)+1+t,C=Math.min(Math.floor((h+2)*a)+1,e)+t,O=C-S;for(I=S;I<C;I++)b+=n[I].x,T+=n[I].y;b/=O,T/=O;const D=Math.floor(h*a)+1+t,E=Math.min(Math.floor((h+1)*a)+1,e)+t,{x:y,y:x}=n[d];for(m=_=-1,I=D;I<E;I++)_=.5*Math.abs((y-b)*(n[I].y-x)-(y-n[I].x)*(T-x)),_>m&&(m=_,f=n[I],v=I);o[c++]=f,d=v}return o[c++]=n[l],o}function dC(n,t,e,s){let i=0,r=0,o,a,c,l,d,h,f,m,_,v;const b=[],T=t+e-1,I=n[t].x,C=n[T].x-I;for(o=t;o<t+e;++o){a=n[o],c=(a.x-I)/C*s,l=a.y;const O=c|0;if(O===d)l<_?(_=l,h=o):l>v&&(v=l,f=o),i=(r*i+a.x)/++r;else{const D=o-1;if(!tt(h)&&!tt(f)){const E=Math.min(h,f),y=Math.max(h,f);E!==m&&E!==D&&b.push({...n[E],x:i}),y!==m&&y!==D&&b.push({...n[y],x:i})}o>0&&D!==m&&b.push(n[D]),b.push(a),d=O,r=0,_=v=l,h=f=m=o}}return b}function Vv(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function km(n){n.data.datasets.forEach(t=>{Vv(t)})}function hC(n,t){const e=t.length;let s=0,i;const{iScale:r}=n,{min:o,max:a,minDefined:c,maxDefined:l}=r.getUserBounds();return c&&(s=Qt(xn(t,r.axis,o).lo,0,e-1)),l?i=Qt(xn(t,r.axis,a).hi+1,s,e)-s:i=e-s,{start:s,count:i}}var fC={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){km(n);return}const s=n.width;n.data.datasets.forEach((i,r)=>{const{_data:o,indexAxis:a}=i,c=n.getDatasetMeta(r),l=o||i.data;if(hr([a,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const d=n.scales[c.xAxisID];if(d.type!=="linear"&&d.type!=="time"||n.options.parsing)return;let{start:h,count:f}=hC(c,l);const m=e.threshold||4*s;if(f<=m){Vv(i);return}tt(o)&&(i._data=l,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(v){this._data=v}}));let _;switch(e.algorithm){case"lttb":_=uC(l,h,f,s,e);break;case"min-max":_=dC(l,h,f,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}i._decimated=_})},destroy(n){km(n)}};function pC(n,t,e){const s=n.segments,i=n.points,r=t.points,o=[];for(const a of s){let{start:c,end:l}=a;l=Oc(c,l,i);const d=xu(e,i[c],i[l],a.loop);if(!t.segments){o.push({source:a,target:d,start:i[c],end:i[l]});continue}const h=_v(t,d);for(const f of h){const m=xu(e,r[f.start],r[f.end],f.loop),_=gv(a,i,m);for(const v of _)o.push({source:v,target:f,start:{[e]:Rm(d,m,"start",Math.max)},end:{[e]:Rm(d,m,"end",Math.min)}})}}return o}function xu(n,t,e,s){if(s)return;let i=t[n],r=e[n];return n==="angle"&&(i=he(i),r=he(r)),{property:n,start:i,end:r}}function mC(n,t){const{x:e=null,y:s=null}=n||{},i=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=Oc(o,a,i);const c=i[o],l=i[a];s!==null?(r.push({x:c.x,y:s}),r.push({x:l.x,y:s})):e!==null&&(r.push({x:e,y:c.y}),r.push({x:e,y:l.y}))}),r}function Oc(n,t,e){for(;t>n;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function Rm(n,t,e,s){return n&&t?s(n[e],t[e]):n?n[e]:t?t[e]:0}function Fv(n,t){let e=[],s=!1;return At(n)?(s=!0,e=n):e=mC(n,t),e.length?new qn({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function Pm(n){return n&&n.fill!==!1}function gC(n,t,e){let i=n[t].fill;const r=[t];let o;if(!e)return i;for(;i!==!1&&r.indexOf(i)===-1;){if(!Ot(i))return i;if(o=n[i],!o)return!1;if(o.visible)return i;r.push(i),i=o.fill}return!1}function _C(n,t,e){const s=wC(n);if(st(s))return isNaN(s.value)?!1:s;let i=parseFloat(s);return Ot(i)&&Math.floor(i)===i?yC(s[0],t,i,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function yC(n,t,e,s){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function vC(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:st(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function bC(n,t,e){let s;return n==="start"?s=e:n==="end"?s=t.options.reverse?t.min:t.max:st(n)?s=n.value:s=t.getBaseValue(),s}function wC(n){const t=n.options,e=t.fill;let s=G(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function xC(n){const{scale:t,index:e,line:s}=n,i=[],r=s.segments,o=s.points,a=EC(t,e);a.push(Fv({x:null,y:t.bottom},s));for(let c=0;c<r.length;c++){const l=r[c];for(let d=l.start;d<=l.end;d++)TC(i,o[d],a)}return new qn({points:i,options:{}})}function EC(n,t){const e=[],s=n.getMatchingVisibleMetas("line");for(let i=0;i<s.length;i++){const r=s[i];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function TC(n,t,e){const s=[];for(let i=0;i<e.length;i++){const r=e[i],{first:o,last:a,point:c}=IC(r,t,"x");if(!(!c||o&&a)){if(o)s.unshift(c);else if(n.push(c),!a)break}}n.push(...s)}function IC(n,t,e){const s=n.interpolate(t,e);if(!s)return{};const i=s[e],r=n.segments,o=n.points;let a=!1,c=!1;for(let l=0;l<r.length;l++){const d=r[l],h=o[d.start][e],f=o[d.end][e];if(wn(i,h,f)){a=i===h,c=i===f;break}}return{first:a,last:c,point:s}}class Bv{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:i,y:r,radius:o}=this;return e=e||{start:0,end:Tt},t.arc(i,r,o,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:i}=this,r=t.angle;return{x:e+Math.cos(r)*i,y:s+Math.sin(r)*i,angle:r}}}function AC(n){const{chart:t,fill:e,line:s}=n;if(Ot(e))return kC(t,e);if(e==="stack")return xC(n);if(e==="shape")return!0;const i=RC(n);return i instanceof Bv?i:Fv(i,s)}function kC(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function RC(n){return(n.scale||{}).getPointPositionForValue?SC(n):PC(n)}function PC(n){const{scale:t={},fill:e}=n,s=vC(e,t);if(Ot(s)){const i=t.isHorizontal();return{x:i?s:null,y:i?null:s}}return null}function SC(n){const{scale:t,fill:e}=n,s=t.options,i=t.getLabels().length,r=s.reverse?t.max:t.min,o=bC(e,t,r),a=[];if(s.grid.circular){const c=t.getPointPositionForValue(0,r);return new Bv({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<i;++c)a.push(t.getPointPositionForValue(c,o));return a}function Dl(n,t,e){const s=AC(t),{chart:i,index:r,line:o,scale:a,axis:c}=t,l=o.options,d=l.fill,h=l.backgroundColor,{above:f=h,below:m=h}=d||{},_=i.getDatasetMeta(r),v=yv(i,_);s&&o.points.length&&(Pc(n,e),CC(n,{line:o,target:s,above:f,below:m,area:e,scale:a,axis:c,clip:v}),Sc(n))}function CC(n,t){const{line:e,target:s,above:i,below:r,area:o,scale:a,clip:c}=t,l=e._loop?"angle":t.axis;n.save();let d=r;r!==i&&(l==="x"?(Sm(n,s,o.top),Ol(n,{line:e,target:s,color:i,scale:a,property:l,clip:c}),n.restore(),n.save(),Sm(n,s,o.bottom)):l==="y"&&(Cm(n,s,o.left),Ol(n,{line:e,target:s,color:r,scale:a,property:l,clip:c}),n.restore(),n.save(),Cm(n,s,o.right),d=i)),Ol(n,{line:e,target:s,color:d,scale:a,property:l,clip:c}),n.restore()}function Sm(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:l}=a,d=i[c],h=i[Oc(c,l,i)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(d.x,e),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(h.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function Cm(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:l}=a,d=i[c],h=i[Oc(c,l,i)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(e,d.y),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,h.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function Ol(n,t){const{line:e,target:s,property:i,color:r,scale:o,clip:a}=t,c=pC(e,s,i);for(const{source:l,target:d,start:h,end:f}of c){const{style:{backgroundColor:m=r}={}}=l,_=s!==!0;n.save(),n.fillStyle=m,DC(n,o,a,_&&xu(i,h,f)),n.beginPath();const v=!!e.pathSegment(n,l);let b;if(_){v?n.closePath():Dm(n,s,f,i);const T=!!s.pathSegment(n,d,{move:v,reverse:!0});b=v&&T,b||Dm(n,s,h,i)}n.closePath(),n.fill(b?"evenodd":"nonzero"),n.restore()}}function DC(n,t,e,s){const i=t.chart.chartArea,{property:r,start:o,end:a}=s||{};if(r==="x"||r==="y"){let c,l,d,h;r==="x"?(c=o,l=i.top,d=a,h=i.bottom):(c=i.left,l=o,d=i.right,h=a),n.beginPath(),e&&(c=Math.max(c,e.left),d=Math.min(d,e.right),l=Math.max(l,e.top),h=Math.min(h,e.bottom)),n.rect(c,l,d-c,h-l),n.clip()}}function Dm(n,t,e,s){const i=t.interpolate(e,s);i&&n.lineTo(i.x,i.y)}var OC={id:"filler",afterDatasetsUpdate(n,t,e){const s=(n.data.datasets||[]).length,i=[];let r,o,a,c;for(o=0;o<s;++o)r=n.getDatasetMeta(o),a=r.dataset,c=null,a&&a.options&&a instanceof qn&&(c={visible:n.isDatasetVisible(o),index:o,fill:_C(a,o,s),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=c,i.push(c);for(o=0;o<s;++o)c=i[o],!(!c||c.fill===!1)&&(c.fill=gC(i,o,e.propagate))},beforeDraw(n,t,e){const s=e.drawTime==="beforeDraw",i=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=i.length-1;o>=0;--o){const a=i[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),s&&a.fill&&Dl(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=n.getSortedVisibleDatasetMetas();for(let i=s.length-1;i>=0;--i){const r=s[i].$filler;Pm(r)&&Dl(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const s=t.meta.$filler;!Pm(s)||e.drawTime!=="beforeDatasetDraw"||Dl(n.ctx,s,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Om=(n,t)=>{let{boxHeight:e=t,boxWidth:s=t}=n;return n.usePointStyle&&(e=Math.min(e,t),s=n.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},MC=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Mm extends ze{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=bt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,i)=>t.sort(s,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,i=Yt(s.font),r=i.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=Om(s,r);let l,d;e.font=i.string,this.isHorizontal()?(l=this.maxWidth,d=this._fitRows(o,r,a,c)+10):(d=this.maxHeight,l=this._fitCols(o,i,a,c)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,i){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],d=i+a;let h=t;r.textAlign="left",r.textBaseline="middle";let f=-1,m=-d;return this.legendItems.forEach((_,v)=>{const b=s+e/2+r.measureText(_.text).width;(v===0||l[l.length-1]+b+2*a>o)&&(h+=d,l[l.length-(v>0?0:1)]=0,m+=d,f++),c[v]={left:0,top:m,row:f,width:b,height:i},l[l.length-1]+=b+a}),h}_fitCols(t,e,s,i){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],d=o-t;let h=a,f=0,m=0,_=0,v=0;return this.legendItems.forEach((b,T)=>{const{itemWidth:I,itemHeight:S}=NC(s,e,r,b,i);T>0&&m+S+2*a>d&&(h+=f+a,l.push({width:f,height:m}),_+=f+a,v++,f=m=0),c[T]={left:_,top:m,col:v,width:I,height:S},f=Math.max(f,I),m+=S+a}),h+=f,l.push({width:f,height:m}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:i},rtl:r}}=this,o=di(r,this.left,this.width);if(this.isHorizontal()){let a=0,c=ue(s,this.left+i,this.right-this.lineWidths[a]);for(const l of e)a!==l.row&&(a=l.row,c=ue(s,this.left+i,this.right-this.lineWidths[a])),l.top+=this.top+t+i,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+i}else{let a=0,c=ue(s,this.top+t+i,this.bottom-this.columnSizes[a].height);for(const l of e)l.col!==a&&(a=l.col,c=ue(s,this.top+t+i,this.bottom-this.columnSizes[a].height)),l.top=c,l.left+=this.left+i,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Pc(t,this),this._draw(),Sc(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:i}=this,{align:r,labels:o}=t,a=kt.color,c=di(t.rtl,this.left,this.width),l=Yt(o.font),{padding:d}=o,h=l.size,f=h/2;let m;this.drawTitle(),i.textAlign=c.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=l.string;const{boxWidth:_,boxHeight:v,itemHeight:b}=Om(o,h),T=function(D,E,y){if(isNaN(_)||_<=0||isNaN(v)||v<0)return;i.save();const x=G(y.lineWidth,1);if(i.fillStyle=G(y.fillStyle,a),i.lineCap=G(y.lineCap,"butt"),i.lineDashOffset=G(y.lineDashOffset,0),i.lineJoin=G(y.lineJoin,"miter"),i.lineWidth=x,i.strokeStyle=G(y.strokeStyle,a),i.setLineDash(G(y.lineDash,[])),o.usePointStyle){const A={radius:v*Math.SQRT2/2,pointStyle:y.pointStyle,rotation:y.rotation,borderWidth:x},R=c.xPlus(D,_/2),P=E+f;rv(i,A,R,P,o.pointStyleWidth&&_)}else{const A=E+Math.max((h-v)/2,0),R=c.leftForLtr(D,_),P=ks(y.borderRadius);i.beginPath(),Object.values(P).some(k=>k!==0)?Hr(i,{x:R,y:A,w:_,h:v,radius:P}):i.rect(R,A,_,v),i.fill(),x!==0&&i.stroke()}i.restore()},I=function(D,E,y){Ls(i,y.text,D,E+b/2,l,{strikethrough:y.hidden,textAlign:c.textAlign(y.textAlign)})},S=this.isHorizontal(),C=this._computeTitleHeight();S?m={x:ue(r,this.left+d,this.right-s[0]),y:this.top+d+C,line:0}:m={x:this.left+d,y:ue(r,this.top+C+d,this.bottom-e[0].height),line:0},fv(this.ctx,t.textDirection);const O=b+d;this.legendItems.forEach((D,E)=>{i.strokeStyle=D.fontColor,i.fillStyle=D.fontColor;const y=i.measureText(D.text).width,x=c.textAlign(D.textAlign||(D.textAlign=o.textAlign)),A=_+f+y;let R=m.x,P=m.y;c.setWidth(this.width),S?E>0&&R+A+d>this.right&&(P=m.y+=O,m.line++,R=m.x=ue(r,this.left+d,this.right-s[m.line])):E>0&&P+O>this.bottom&&(R=m.x=R+e[m.line].width+d,m.line++,P=m.y=ue(r,this.top+C+d,this.bottom-e[m.line].height));const k=c.x(R);if(T(k,P,D),R=eP(x,R+_+f,S?R+A:this.right,t.rtl),I(c.x(R),P,D),S)m.x+=A+d;else if(typeof D.text!="string"){const Z=l.lineHeight;m.y+=$v(D,Z)+d}else m.y+=O}),pv(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=Yt(e.font),i=ge(e.padding);if(!e.display)return;const r=di(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=s.size/2,l=i.top+c;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+l,h=ue(t.align,h,this.right-f);else{const _=this.columnSizes.reduce((v,b)=>Math.max(v,b.height),0);d=l+ue(t.align,this.top,this.bottom-_-t.labels.padding-this._computeTitleHeight())}const m=ue(a,h,h+f);o.textAlign=r.textAlign(Ud(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=s.string,Ls(o,e.text,m,d,s)}_computeTitleHeight(){const t=this.options.title,e=Yt(t.font),s=ge(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,i,r;if(wn(t,this.left,this.right)&&wn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,s=0;s<r.length;++s)if(i=r[s],wn(t,i.left,i.left+i.width)&&wn(e,i.top,i.top+i.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!FC(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,r=MC(i,s);i&&!r&&bt(e.onLeave,[t,i,this],this),this._hoveredItem=s,s&&!r&&bt(e.onHover,[t,s,this],this)}else s&&bt(e.onClick,[t,s,this],this)}}function NC(n,t,e,s,i){const r=LC(s,n,t,e),o=VC(i,s,t.lineHeight);return{itemWidth:r,itemHeight:o}}function LC(n,t,e,s){let i=n.text;return i&&typeof i!="string"&&(i=i.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+s.measureText(i).width}function VC(n,t,e){let s=n;return typeof t.text!="string"&&(s=$v(t,e)),s}function $v(n,t){const e=n.text?n.text.length:0;return t*e}function FC(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var BC={id:"legend",_element:Mm,start(n,t,e){const s=n.legend=new Mm({ctx:n.ctx,options:e,chart:n});pe.configure(n,s,e),pe.addBox(n,s)},stop(n){pe.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const s=n.legend;pe.configure(n,s,e),s.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const s=t.datasetIndex,i=e.chart;i.isDatasetVisible(s)?(i.hide(s),t.hidden=!0):(i.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const l=c.controller.getStyle(e?0:void 0),d=ge(l.borderWidth);return{text:t[c.index].label,fillStyle:l.backgroundColor,fontColor:r,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:l.borderColor,pointStyle:s||l.pointStyle,rotation:l.rotation,textAlign:i||l.textAlign,borderRadius:o&&(a||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class Qd extends ze{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const i=At(s.text)?s.text.length:1;this._padding=ge(s.padding);const r=i*Yt(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:i,right:r,options:o}=this,a=o.align;let c=0,l,d,h;return this.isHorizontal()?(d=ue(a,s,r),h=e+t,l=r-s):(o.position==="left"?(d=s+t,h=ue(a,i,e),c=ct*-.5):(d=r-t,h=ue(a,e,i),c=ct*.5),l=i-e),{titleX:d,titleY:h,maxWidth:l,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=Yt(e.font),r=s.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(r);Ls(t,e.text,0,0,s,{color:e.color,maxWidth:c,rotation:l,textAlign:Ud(e.align),textBaseline:"middle",translation:[o,a]})}}function $C(n,t){const e=new Qd({ctx:n.ctx,options:t,chart:n});pe.configure(n,e,t),pe.addBox(n,e),n.titleBlock=e}var UC={id:"title",_element:Qd,start(n,t,e){$C(n,e)},stop(n){const t=n.titleBlock;pe.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const s=n.titleBlock;pe.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Jo=new WeakMap;var jC={id:"subtitle",start(n,t,e){const s=new Qd({ctx:n.ctx,options:e,chart:n});pe.configure(n,s,e),pe.addBox(n,s),Jo.set(n,s)},stop(n){pe.removeBox(n,Jo.get(n)),Jo.delete(n)},beforeUpdate(n,t,e){const s=Jo.get(n);pe.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const mr={average(n){if(!n.length)return!1;let t,e,s=new Set,i=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const c=a.tooltipPosition();s.add(c.x),i+=c.y,++r}}return r===0||s.size===0?!1:{x:[...s].reduce((a,c)=>a+c)/s.size,y:i/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,s=t.y,i=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const c=n[r].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),d=pu(t,l);d<i&&(i=d,a=c)}}if(a){const c=a.tooltipPosition();e=c.x,s=c.y}return{x:e,y:s}}};function We(n,t){return t&&(At(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function mn(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function zC(n,t){const{element:e,datasetIndex:s,index:i}=t,r=n.getDatasetMeta(s).controller,{label:o,value:a}=r.getLabelAndValue(i);return{chart:n,label:o,parsed:r.getParsed(i),raw:n.data.datasets[s].data[i],formattedValue:a,dataset:r.getDataset(),dataIndex:i,datasetIndex:s,element:e}}function Nm(n,t){const e=n.chart.ctx,{body:s,footer:i,title:r}=n,{boxWidth:o,boxHeight:a}=t,c=Yt(t.bodyFont),l=Yt(t.titleFont),d=Yt(t.footerFont),h=r.length,f=i.length,m=s.length,_=ge(t.padding);let v=_.height,b=0,T=s.reduce((C,O)=>C+O.before.length+O.lines.length+O.after.length,0);if(T+=n.beforeBody.length+n.afterBody.length,h&&(v+=h*l.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),T){const C=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;v+=m*C+(T-m)*c.lineHeight+(T-1)*t.bodySpacing}f&&(v+=t.footerMarginTop+f*d.lineHeight+(f-1)*t.footerSpacing);let I=0;const S=function(C){b=Math.max(b,e.measureText(C).width+I)};return e.save(),e.font=l.string,dt(n.title,S),e.font=c.string,dt(n.beforeBody.concat(n.afterBody),S),I=t.displayColors?o+2+t.boxPadding:0,dt(s,C=>{dt(C.before,S),dt(C.lines,S),dt(C.after,S)}),I=0,e.font=d.string,dt(n.footer,S),e.restore(),b+=_.width,{width:b,height:v}}function HC(n,t){const{y:e,height:s}=t;return e<s/2?"top":e>n.height-s/2?"bottom":"center"}function WC(n,t,e,s){const{x:i,width:r}=s,o=e.caretSize+e.caretPadding;if(n==="left"&&i+r+o>t.width||n==="right"&&i-r-o<0)return!0}function qC(n,t,e,s){const{x:i,width:r}=e,{width:o,chartArea:{left:a,right:c}}=n;let l="center";return s==="center"?l=i<=(a+c)/2?"left":"right":i<=r/2?l="left":i>=o-r/2&&(l="right"),WC(l,n,t,e)&&(l="center"),l}function Lm(n,t,e){const s=e.yAlign||t.yAlign||HC(n,e);return{xAlign:e.xAlign||t.xAlign||qC(n,t,e,s),yAlign:s}}function GC(n,t){let{x:e,width:s}=n;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function YC(n,t,e){let{y:s,height:i}=n;return t==="top"?s+=e:t==="bottom"?s-=i+e:s-=i/2,s}function Vm(n,t,e,s){const{caretSize:i,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:c}=e,l=i+r,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:m}=ks(o);let _=GC(t,a);const v=YC(t,c,l);return c==="center"?a==="left"?_+=l:a==="right"&&(_-=l):a==="left"?_-=Math.max(d,f)+i:a==="right"&&(_+=Math.max(h,m)+i),{x:Qt(_,0,s.width-t.width),y:Qt(v,0,s.height-t.height)}}function Zo(n,t,e){const s=ge(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-s.right:n.x+s.left}function Fm(n){return We([],mn(n))}function KC(n,t,e){return cs(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Bm(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const Uv={beforeTitle:fn,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:fn,beforeBody:fn,beforeLabel:fn,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return tt(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:fn,afterBody:fn,beforeFooter:fn,footer:fn,afterFooter:fn};function Ee(n,t,e,s){const i=n[t].call(e,s);return typeof i>"u"?Uv[t].call(e,s):i}class Eu extends ze{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),i=s.enabled&&e.options.animation&&s.animations,r=new vv(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=KC(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,i=Ee(s,"beforeTitle",this,t),r=Ee(s,"title",this,t),o=Ee(s,"afterTitle",this,t);let a=[];return a=We(a,mn(i)),a=We(a,mn(r)),a=We(a,mn(o)),a}getBeforeBody(t,e){return Fm(Ee(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,i=[];return dt(t,r=>{const o={before:[],lines:[],after:[]},a=Bm(s,r);We(o.before,mn(Ee(a,"beforeLabel",this,r))),We(o.lines,Ee(a,"label",this,r)),We(o.after,mn(Ee(a,"afterLabel",this,r))),i.push(o)}),i}getAfterBody(t,e){return Fm(Ee(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,i=Ee(s,"beforeFooter",this,t),r=Ee(s,"footer",this,t),o=Ee(s,"afterFooter",this,t);let a=[];return a=We(a,mn(i)),a=We(a,mn(r)),a=We(a,mn(o)),a}_createItems(t){const e=this._active,s=this.chart.data,i=[],r=[],o=[];let a=[],c,l;for(c=0,l=e.length;c<l;++c)a.push(zC(this.chart,e[c]));return t.filter&&(a=a.filter((d,h,f)=>t.filter(d,h,f,s))),t.itemSort&&(a=a.sort((d,h)=>t.itemSort(d,h,s))),dt(a,d=>{const h=Bm(t.callbacks,d);i.push(Ee(h,"labelColor",this,d)),r.push(Ee(h,"labelPointStyle",this,d)),o.push(Ee(h,"labelTextColor",this,d))}),this.labelColors=i,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const s=this.options.setContext(this.getContext()),i=this._active;let r,o=[];if(!i.length)this.opacity!==0&&(r={opacity:0});else{const a=mr[s.position].call(this,i,this._eventPosition);o=this._createItems(s),this.title=this.getTitle(o,s),this.beforeBody=this.getBeforeBody(o,s),this.body=this.getBody(o,s),this.afterBody=this.getAfterBody(o,s),this.footer=this.getFooter(o,s);const c=this._size=Nm(this,s),l=Object.assign({},a,c),d=Lm(this.chart,s,l),h=Vm(s,l,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,r={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,i){const r=this.getCaretPosition(t,s,i);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,s){const{xAlign:i,yAlign:r}=this,{caretSize:o,cornerRadius:a}=s,{topLeft:c,topRight:l,bottomLeft:d,bottomRight:h}=ks(a),{x:f,y:m}=t,{width:_,height:v}=e;let b,T,I,S,C,O;return r==="center"?(C=m+v/2,i==="left"?(b=f,T=b-o,S=C+o,O=C-o):(b=f+_,T=b+o,S=C-o,O=C+o),I=b):(i==="left"?T=f+Math.max(c,d)+o:i==="right"?T=f+_-Math.max(l,h)-o:T=this.caretX,r==="top"?(S=m,C=S-o,b=T-o,I=T+o):(S=m+v,C=S+o,b=T+o,I=T-o),O=S),{x1:b,x2:T,x3:I,y1:S,y2:C,y3:O}}drawTitle(t,e,s){const i=this.title,r=i.length;let o,a,c;if(r){const l=di(s.rtl,this.x,this.width);for(t.x=Zo(this,s.titleAlign,s),e.textAlign=l.textAlign(s.titleAlign),e.textBaseline="middle",o=Yt(s.titleFont),a=s.titleSpacing,e.fillStyle=s.titleColor,e.font=o.string,c=0;c<r;++c)e.fillText(i[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===r&&(t.y+=s.titleMarginBottom-a)}}_drawColorBox(t,e,s,i,r){const o=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:c,boxWidth:l}=r,d=Yt(r.bodyFont),h=Zo(this,"left",r),f=i.x(h),m=c<d.lineHeight?(d.lineHeight-c)/2:0,_=e.y+m;if(r.usePointStyle){const v={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},b=i.leftForLtr(f,l)+l/2,T=_+c/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,gu(t,v,b,T),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,gu(t,v,b,T)}else{t.lineWidth=st(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const v=i.leftForLtr(f,l),b=i.leftForLtr(i.xPlus(f,1),l-2),T=ks(o.borderRadius);Object.values(T).some(I=>I!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,Hr(t,{x:v,y:_,w:l,h:c,radius:T}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Hr(t,{x:b,y:_+1,w:l-2,h:c-2,radius:T}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(v,_,l,c),t.strokeRect(v,_,l,c),t.fillStyle=o.backgroundColor,t.fillRect(b,_+1,l-2,c-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:i}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:d}=s,h=Yt(s.bodyFont);let f=h.lineHeight,m=0;const _=di(s.rtl,this.x,this.width),v=function(y){e.fillText(y,_.x(t.x+m),t.y+f/2),t.y+=f+r},b=_.textAlign(o);let T,I,S,C,O,D,E;for(e.textAlign=o,e.textBaseline="middle",e.font=h.string,t.x=Zo(this,b,s),e.fillStyle=s.bodyColor,dt(this.beforeBody,v),m=a&&b!=="right"?o==="center"?l/2+d:l+2+d:0,C=0,D=i.length;C<D;++C){for(T=i[C],I=this.labelTextColors[C],e.fillStyle=I,dt(T.before,v),S=T.lines,a&&S.length&&(this._drawColorBox(e,t,C,_,s),f=Math.max(h.lineHeight,c)),O=0,E=S.length;O<E;++O)v(S[O]),f=h.lineHeight;dt(T.after,v)}m=0,f=h.lineHeight,dt(this.afterBody,v),t.y-=r}drawFooter(t,e,s){const i=this.footer,r=i.length;let o,a;if(r){const c=di(s.rtl,this.x,this.width);for(t.x=Zo(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=c.textAlign(s.footerAlign),e.textBaseline="middle",o=Yt(s.footerFont),e.fillStyle=s.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(i[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+s.footerSpacing}}drawBackground(t,e,s,i){const{xAlign:r,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:d}=s,{topLeft:h,topRight:f,bottomLeft:m,bottomRight:_}=ks(i.cornerRadius);e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.beginPath(),e.moveTo(a+h,c),o==="top"&&this.drawCaret(t,e,s,i),e.lineTo(a+l-f,c),e.quadraticCurveTo(a+l,c,a+l,c+f),o==="center"&&r==="right"&&this.drawCaret(t,e,s,i),e.lineTo(a+l,c+d-_),e.quadraticCurveTo(a+l,c+d,a+l-_,c+d),o==="bottom"&&this.drawCaret(t,e,s,i),e.lineTo(a+m,c+d),e.quadraticCurveTo(a,c+d,a,c+d-m),o==="center"&&r==="left"&&this.drawCaret(t,e,s,i),e.lineTo(a,c+h),e.quadraticCurveTo(a,c,a+h,c),e.closePath(),e.fill(),i.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,i=s&&s.x,r=s&&s.y;if(i||r){const o=mr[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Nm(this,t),c=Object.assign({},o,this._size),l=Lm(e,t,c),d=Vm(t,c,l,e);(i._to!==d.x||r._to!==d.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const i={width:this.width,height:this.height},r={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const o=ge(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=s,this.drawBackground(r,t,i,e),fv(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),pv(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,i=t.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),r=!Wa(s,i),o=this._positionChanged(i,e);(r||o)&&(this._active=i,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,s),a=this._positionChanged(o,t),c=e||!Wa(o,r)||a;return c&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,s,i){const r=this.options;if(t.type==="mouseout")return[];if(!i)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,s);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:s,caretY:i,options:r}=this,o=mr[r.position].call(this,t,e);return o!==!1&&(s!==o.x||i!==o.y)}}N(Eu,"positioners",mr);var QC={id:"tooltip",_element:Eu,positioners:mr,afterInit(n,t,e){e&&(n.tooltip=new Eu({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Uv},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},XC=Object.freeze({__proto__:null,Colors:lC,Decimation:fC,Filler:OC,Legend:BC,SubTitle:jC,Title:UC,Tooltip:QC});const JC=(n,t,e,s)=>(typeof t=="string"?(e=n.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function ZC(n,t,e,s){const i=n.indexOf(t);if(i===-1)return JC(n,t,e,s);const r=n.lastIndexOf(t);return i!==r?e:i}const tD=(n,t)=>n===null?null:Qt(Math.round(n),0,t);function $m(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class Tu extends js{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:i,label:r}of e)s[i]===r&&s.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(tt(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:ZC(s,t,G(e,t),this._addedLabels),tD(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(i=this.getLabels().length-1)),this.min=s,this.max=i}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,i=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let o=t;o<=e;o++)i.push({value:o});return i}getLabelForValue(t){return $m.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}N(Tu,"id","category"),N(Tu,"defaults",{ticks:{callback:$m}});function eD(n,t){const e=[],{bounds:i,step:r,min:o,max:a,precision:c,count:l,maxTicks:d,maxDigits:h,includeBounds:f}=n,m=r||1,_=d-1,{min:v,max:b}=t,T=!tt(o),I=!tt(a),S=!tt(l),C=(b-v)/(h+1);let O=Np((b-v)/_/m)*m,D,E,y,x;if(O<1e-14&&!T&&!I)return[{value:v},{value:b}];x=Math.ceil(b/O)-Math.floor(v/O),x>_&&(O=Np(x*O/_/m)*m),tt(c)||(D=Math.pow(10,c),O=Math.ceil(O*D)/D),i==="ticks"?(E=Math.floor(v/O)*O,y=Math.ceil(b/O)*O):(E=v,y=b),T&&I&&r&&YR((a-o)/r,O/1e3)?(x=Math.round(Math.min((a-o)/O,d)),O=(a-o)/x,E=o,y=a):S?(E=T?o:E,y=I?a:y,x=l-1,O=(y-E)/x):(x=(y-E)/O,Tr(x,Math.round(x),O/1e3)?x=Math.round(x):x=Math.ceil(x));const A=Math.max(Lp(O),Lp(E));D=Math.pow(10,tt(c)?A:c),E=Math.round(E*D)/D,y=Math.round(y*D)/D;let R=0;for(T&&(f&&E!==o?(e.push({value:o}),E<o&&R++,Tr(Math.round((E+R*O)*D)/D,o,Um(o,C,n))&&R++):E<o&&R++);R<x;++R){const P=Math.round((E+R*O)*D)/D;if(I&&P>a)break;e.push({value:P})}return I&&f&&y!==a?e.length&&Tr(e[e.length-1].value,a,Um(a,C,n))?e[e.length-1].value=a:e.push({value:a}):(!I||y===a)&&e.push({value:y}),e}function Um(n,t,{horizontal:e,minRotation:s}){const i=Fe(s),r=(e?Math.sin(i):Math.cos(i))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class Ja extends js{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return tt(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:i,max:r}=this;const o=c=>i=e?i:c,a=c=>r=s?r:c;if(t){const c=en(i),l=en(r);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(i===r){let c=r===0?1:Math.abs(r*.05);a(r+c),t||o(i-c)}this.min=i,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,i;return s?(i=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),e=e||11),e&&(i=Math.min(e,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const i={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=eD(i,r);return t.bounds==="ticks"&&Qy(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const i=(s-e)/Math.max(t.length-1,1)/2;e-=i,s+=i}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return uo(t,this.chart.options.locale,this.options.ticks.format)}}class Iu extends Ja{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Ot(t)?t:0,this.max=Ot(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=Fe(this.options.ticks.minRotation),i=(t?Math.sin(s):Math.cos(s))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}N(Iu,"id","linear"),N(Iu,"defaults",{ticks:{callback:Rc.formatters.numeric}});const qr=n=>Math.floor(Hn(n)),gs=(n,t)=>Math.pow(10,qr(n)+t);function jm(n){return n/Math.pow(10,qr(n))===1}function zm(n,t,e){const s=Math.pow(10,e),i=Math.floor(n/s);return Math.ceil(t/s)-i}function nD(n,t){const e=t-n;let s=qr(e);for(;zm(n,t,s)>10;)s++;for(;zm(n,t,s)<10;)s--;return Math.min(s,qr(n))}function sD(n,{min:t,max:e}){t=Re(n.min,t);const s=[],i=qr(t);let r=nD(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),c=i>r?Math.pow(10,i):0,l=Math.round((t-c)*o)/o,d=Math.floor((t-c)/a/10)*a*10;let h=Math.floor((l-d)/Math.pow(10,r)),f=Re(n.min,Math.round((c+d+h*Math.pow(10,r))*o)/o);for(;f<e;)s.push({value:f,major:jm(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),f=Math.round((c+d+h*Math.pow(10,r))*o)/o;const m=Re(n.max,f);return s.push({value:m,major:jm(m),significand:h}),s}class Au extends js{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=Ja.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return Ot(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Ot(t)?Math.max(0,t):null,this.max=Ot(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Ot(this._userMin)&&(this.min=t===gs(this.min,0)?gs(this.min,-1):gs(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,i=this.max;const r=a=>s=t?s:a,o=a=>i=e?i:a;s===i&&(s<=0?(r(1),o(10)):(r(gs(s,-1)),o(gs(i,1)))),s<=0&&r(gs(i,-1)),i<=0&&o(gs(s,1)),this.min=s,this.max=i}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=sD(e,this);return t.bounds==="ticks"&&Qy(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":uo(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Hn(t),this._valueRange=Hn(this.max)-Hn(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Hn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}N(Au,"id","logarithmic"),N(Au,"defaults",{ticks:{callback:Rc.formatters.logarithmic,major:{enabled:!0}}});function ku(n){const t=n.ticks;if(t.display&&n.display){const e=ge(t.backdropPadding);return G(t.font&&t.font.size,kt.font.size)+e.height}return 0}function iD(n,t,e){return e=At(e)?e:[e],{w:dP(n,t.string,e),h:e.length*t.lineHeight}}function Hm(n,t,e,s,i){return n===s||n===i?{start:t-e/2,end:t+e/2}:n<s||n>i?{start:t-e,end:t}:{start:t,end:t+e}}function rD(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),s=[],i=[],r=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?ct/r:0;for(let c=0;c<r;c++){const l=o.setContext(n.getPointLabelContext(c));i[c]=l.padding;const d=n.getPointPosition(c,n.drawingArea+i[c],a),h=Yt(l.font),f=iD(n.ctx,h,n._pointLabels[c]);s[c]=f;const m=he(n.getIndexAngle(c)+a),_=Math.round(Bd(m)),v=Hm(_,d.x,f.w,0,180),b=Hm(_,d.y,f.h,90,270);oD(e,t,m,v,b)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=lD(n,s,i)}function oD(n,t,e,s,i){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,c=0;s.start<t.l?(a=(t.l-s.start)/r,n.l=Math.min(n.l,t.l-a)):s.end>t.r&&(a=(s.end-t.r)/r,n.r=Math.max(n.r,t.r+a)),i.start<t.t?(c=(t.t-i.start)/o,n.t=Math.min(n.t,t.t-c)):i.end>t.b&&(c=(i.end-t.b)/o,n.b=Math.max(n.b,t.b+c))}function aD(n,t,e){const s=n.drawingArea,{extra:i,additionalAngle:r,padding:o,size:a}=e,c=n.getPointPosition(t,s+i+o,r),l=Math.round(Bd(he(c.angle+Bt))),d=hD(c.y,a.h,l),h=uD(l),f=dD(c.x,a.w,h);return{visible:!0,x:c.x,y:d,textAlign:h,left:f,top:d,right:f+a.w,bottom:d+a.h}}function cD(n,t){if(!t)return!0;const{left:e,top:s,right:i,bottom:r}=n;return!(En({x:e,y:s},t)||En({x:e,y:r},t)||En({x:i,y:s},t)||En({x:i,y:r},t))}function lD(n,t,e){const s=[],i=n._pointLabels.length,r=n.options,{centerPointLabels:o,display:a}=r.pointLabels,c={extra:ku(r)/2,additionalAngle:o?ct/i:0};let l;for(let d=0;d<i;d++){c.padding=e[d],c.size=t[d];const h=aD(n,d,c);s.push(h),a==="auto"&&(h.visible=cD(h,l),h.visible&&(l=h))}return s}function uD(n){return n===0||n===180?"center":n<180?"left":"right"}function dD(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function hD(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function fD(n,t,e){const{left:s,top:i,right:r,bottom:o}=e,{backdropColor:a}=t;if(!tt(a)){const c=ks(t.borderRadius),l=ge(t.backdropPadding);n.fillStyle=a;const d=s-l.left,h=i-l.top,f=r-s+l.width,m=o-i+l.height;Object.values(c).some(_=>_!==0)?(n.beginPath(),Hr(n,{x:d,y:h,w:f,h:m,radius:c}),n.fill()):n.fillRect(d,h,f,m)}}function pD(n,t){const{ctx:e,options:{pointLabels:s}}=n;for(let i=t-1;i>=0;i--){const r=n._pointLabelItems[i];if(!r.visible)continue;const o=s.setContext(n.getPointLabelContext(i));fD(e,o,r);const a=Yt(o.font),{x:c,y:l,textAlign:d}=r;Ls(e,n._pointLabels[i],c,l+a.lineHeight/2,a,{color:o.color,textAlign:d,textBaseline:"middle"})}}function jv(n,t,e,s){const{ctx:i}=n;if(e)i.arc(n.xCenter,n.yCenter,t,0,Tt);else{let r=n.getPointPosition(0,t);i.moveTo(r.x,r.y);for(let o=1;o<s;o++)r=n.getPointPosition(o,t),i.lineTo(r.x,r.y)}}function mD(n,t,e,s,i){const r=n.ctx,o=t.circular,{color:a,lineWidth:c}=t;!o&&!s||!a||!c||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=c,r.setLineDash(i.dash||[]),r.lineDashOffset=i.dashOffset,r.beginPath(),jv(n,e,o,s),r.closePath(),r.stroke(),r.restore())}function gD(n,t,e){return cs(n,{label:e,index:t,type:"pointLabel"})}class gr extends Ja{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=ge(ku(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=Ot(t)&&!isNaN(t)?t:0,this.max=Ot(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/ku(this.options))}generateTickLabels(t){Ja.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const i=bt(this.options.pointLabels.callback,[e,s],this);return i||i===0?i:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?rD(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,i){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,i))}getIndexAngle(t){const e=Tt/(this._pointLabels.length||1),s=this.options.startAngle||0;return he(t*e+Fe(s))}getDistanceFromCenterForValue(t){if(tt(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(tt(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return gD(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const i=this.getIndexAngle(t)-Bt+s;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter,angle:i}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:i,bottom:r}=this._pointLabelItems[t];return{left:e,top:s,right:i,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),jv(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:i,border:r}=e,o=this._pointLabels.length;let a,c,l;if(e.pointLabels.display&&pD(this,o),i.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){c=this.getDistanceFromCenterForValue(d.value);const f=this.getContext(h),m=i.setContext(f),_=r.setContext(f);mD(this,m,c,o,_)}}),s.display){for(t.save(),a=o-1;a>=0;a--){const d=s.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=d;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),l=this.getPointPosition(a,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const i=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const l=s.setContext(this.getContext(c)),d=Yt(l.font);if(r=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){t.font=d.string,o=t.measureText(a.label).width,t.fillStyle=l.backdropColor;const h=ge(l.backdropPadding);t.fillRect(-o/2-h.left,-r-d.size/2-h.top,o+h.width,d.size+h.height)}Ls(t,a.label,0,-r,d,{color:l.color,strokeColor:l.textStrokeColor,strokeWidth:l.textStrokeWidth})}),t.restore()}drawTitle(){}}N(gr,"id","radialLinear"),N(gr,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Rc.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),N(gr,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),N(gr,"descriptors",{angleLines:{_fallback:"grid"}});const Mc={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ae=Object.keys(Mc);function Wm(n,t){return n-t}function qm(n,t){if(tt(t))return null;const e=n._adapter,{parser:s,round:i,isoWeekday:r}=n._parseOpts;let o=t;return typeof s=="function"&&(o=s(o)),Ot(o)||(o=typeof s=="string"?e.parse(o,s):e.parse(o)),o===null?null:(i&&(o=i==="week"&&(wi(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,i)),+o)}function Gm(n,t,e,s){const i=Ae.length;for(let r=Ae.indexOf(n);r<i-1;++r){const o=Mc[Ae[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=s)return Ae[r]}return Ae[i-1]}function _D(n,t,e,s,i){for(let r=Ae.length-1;r>=Ae.indexOf(e);r--){const o=Ae[r];if(Mc[o].common&&n._adapter.diff(i,s,o)>=t-1)return o}return Ae[e?Ae.indexOf(e):0]}function yD(n){for(let t=Ae.indexOf(n)+1,e=Ae.length;t<e;++t)if(Mc[Ae[t]].common)return Ae[t]}function Ym(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:s,hi:i}=$d(e,t),r=e[s]>=t?e[s]:e[i];n[r]=!0}}function vD(n,t,e,s){const i=n._adapter,r=+i.startOf(t[0].value,s),o=t[t.length-1].value;let a,c;for(a=r;a<=o;a=+i.add(a,1,s))c=e[a],c>=0&&(t[c].major=!0);return t}function Km(n,t,e){const s=[],i={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],i[a]=o,s.push({value:a,major:!1});return r===0||!e?s:vD(n,s,i,e)}class Gr extends js{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),i=this._adapter=new xv._date(t.adapters.date);i.init(e),Er(s.displayFormats,i.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:qm(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:i,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(i=Math.min(i,l.min)),!a&&!isNaN(l.max)&&(r=Math.max(r,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),i=Ot(i)&&!isNaN(i)?i:+e.startOf(Date.now(),s),r=Ot(r)&&!isNaN(r)?r:+e.endOf(Date.now(),s)+1,this.min=Math.min(i,r-1),this.max=Math.max(i+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,i=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const r=this.min,o=this.max,a=JR(i,r,o);return this._unit=e.unit||(s.autoSkip?Gm(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):_D(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:yD(this._unit),this.initOffsets(i),t.reverse&&a.reverse(),Km(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,i,r;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?e=1-i:e=(this.getDecimalForValue(t[1])-i)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?s=r:s=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=Qt(e,0,o),s=Qt(s,0,o),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,i=this.options,r=i.time,o=r.unit||Gm(r.minUnit,e,s,this._getLabelCapacity(e)),a=G(i.ticks.stepSize,1),c=o==="week"?r.isoWeekday:!1,l=wi(c)||c===!0,d={};let h=e,f,m;if(l&&(h=+t.startOf(h,"isoWeek",c)),h=+t.startOf(h,l?"day":o),t.diff(s,e,o)>1e5*a)throw new Error(e+" and "+s+" are too far apart with stepSize of "+a+" "+o);const _=i.ticks.source==="data"&&this.getDataTimestamps();for(f=h,m=0;f<s;f=+t.add(f,a,o),m++)Ym(d,f,_);return(f===s||i.bounds==="ticks"||m===1)&&Ym(d,f,_),Object.keys(d).sort(Wm).map(v=>+v)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const i=this.options.time.displayFormats,r=this._unit,o=e||i[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,s,i){const r=this.options,o=r.ticks.callback;if(o)return bt(o,[t,e,s],this);const a=r.time.displayFormats,c=this._unit,l=this._majorUnit,d=c&&a[c],h=l&&a[l],f=s[e],m=l&&h&&f&&f.major;return this._adapter.format(t,i||(m?h:d))}generateTickLabels(t){let e,s,i;for(e=0,s=t.length;e<s;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,i=Fe(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(i),o=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:s*r+a*o,h:s*o+a*r}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,i=s[e.unit]||s.millisecond,r=this._tickFormatFunction(t,0,Km(this,[t],this._majorUnit),i),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(e=0,s=i.length;e<s;++e)t=t.concat(i[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const i=this.getLabels();for(e=0,s=i.length;e<s;++e)t.push(qm(this,i[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Zy(t.sort(Wm))}}N(Gr,"id","time"),N(Gr,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function ta(n,t,e){let s=0,i=n.length-1,r,o,a,c;e?(t>=n[s].pos&&t<=n[i].pos&&({lo:s,hi:i}=xn(n,"pos",t)),{pos:r,time:a}=n[s],{pos:o,time:c}=n[i]):(t>=n[s].time&&t<=n[i].time&&({lo:s,hi:i}=xn(n,"time",t)),{time:r,pos:a}=n[s],{time:o,pos:c}=n[i]);const l=o-r;return l?a+(c-a)*(t-r)/l:a}class Ru extends Gr{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=ta(e,this.min),this._tableRange=ta(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,i=[],r=[];let o,a,c,l,d;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=s&&i.push(l);if(i.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(o=0,a=i.length;o<a;++o)d=i[o+1],c=i[o-1],l=i[o],Math.round((d+c)/2)!==l&&r.push({time:l,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((i,r)=>i-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(ta(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return ta(this._table,s*this._tableRange+this._minPos,!0)}}N(Ru,"id","timeseries"),N(Ru,"defaults",Gr.defaults);var bD=Object.freeze({__proto__:null,CategoryScale:Tu,LinearScale:Iu,LogarithmicScale:Au,RadialLinearScale:gr,TimeScale:Gr,TimeSeriesScale:Ru});const wD=[kS,nC,XC,bD];ht.register(...wD);const Ji="rgba(255,255,255,0.08)",Zs="#a1a1aa",Le={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};ht.defaults.color="#e5e5e5";ht.defaults.font.family=Le.family;ht.defaults.font.weight=Le.weight;const Zi={renderCurvaS:(n,t=[],e=[],s=[])=>{const i=document.getElementById(n);if(!i)return;i.chart&&i.chart.destroy();const r=s.length?s:t.map((o,a)=>`M${a+1}`);i.chart=new ht(i,{type:"line",data:{labels:r,datasets:[{label:"Planejado",data:t,borderColor:"#16a34a",backgroundColor:"rgba(34, 197, 94, 0.15)",tension:.35,fill:!0,borderWidth:3},{label:"Realizado",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.05)",tension:.35,fill:!0,borderWidth:3}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Le,usePointStyle:!0}}},scales:{x:{grid:{color:Ji},ticks:{color:Zs,font:Le}},y:{grid:{color:Ji},ticks:{color:Zs,font:Le}}}}})},renderGastosPorMes:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Ji},ticks:{color:Zs,font:Le}},y:{grid:{color:Ji},ticks:{color:Zs,font:Le}}}}})},renderStatusPie:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Le,padding:12,usePointStyle:!0}}}}})},renderNatureza:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"bar",data:{labels:s,datasets:[{label:"Por Natureza",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:Zs,font:Le}},y:{grid:{color:Ji},ticks:{color:Zs,font:Le,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}}}})},renderCentrosCusto:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e","#0ea5e9","#f59e0b"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:Le,padding:12,usePointStyle:!0}}}}})}},Zt={dashboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>',shoppingCart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>',chart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.212 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',logout:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>',bell:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>',moon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" /></svg>',pencil:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.75 19.901l-4.5.75.75-4.5L16.862 4.487z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.6l2.651 2.651" /></svg>'},et={render:n=>{const t=document.getElementById("app"),e=yt.state.currentUser;if(!e){t.innerHTML=n;return}const s=yt.state.sidebarCollapsed,i=yt.state.currentTheme;t.innerHTML=`
            <div class="flex h-screen bg-canvas text-text transition-colors duration-200">
                <!-- Sidebar -->
                <aside id="sidebar" class="${s?"w-20":"w-64"} bg-surface border-r border-border flex flex-col transition-all duration-300 z-20 hidden md:flex shadow-heavy">
                    <div class="h-16 flex items-center justify-center border-b border-border">
                        <span class="text-2xl font-display text-primary">AXEL</span>
                        <span data-logo-text class="${s?"hidden":"ml-2 text-text font-display tracking-wide"}">GESTÃO</span>
                    </div>

                    <nav class="flex-1 overflow-y-auto py-4 space-y-1 px-3">
                        ${et.createNavItem("/","Dashboard",Zt.dashboard,s)}
                        ${et.createNavItem("/compras","Compras",Zt.shoppingCart,s)}
                        ${et.createNavItem("/relatorios","Relatórios",Zt.clipboard,s)}
                        ${et.createNavItem("/obras","Obras",Zt.chart,s)}
                        ${et.createNavItem("/cadastros","Cadastros",Zt.settings,s)}
                        <div class="pt-4 mt-4 border-t border-border">
                            ${et.createNavItem("/configuracoes","Configurações",Zt.settings,s)}
                        </div>
                    </nav>

                    <div class="p-4 border-t border-border">
                        <button id="btn-logout" class="flex items-center gap-3 text-text-muted hover:text-alert w-full p-2 rounded transition-colors uppercase tracking-wide font-display">
                            ${Zt.logout}
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
                                ${Zt.menu}
                            </button>
                            
                            <!-- Global Search -->
                            <div class="relative hidden md:block w-96">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-text-muted">
                                    ${Zt.search}
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
                                ${i==="dark"?Zt.sun:Zt.moon}
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
        `,et.bindEvents()},createNavItem:(n,t,e,s)=>{var o;const r=xt.currentRoute===n||((o=xt.currentRoute)==null?void 0:o.startsWith(`${n}/`))?"text-primary accent-left bg-surface shadow-heavy":"text-text-muted hover:text-text hover:bg-canvas";return`
            <a href="#${n}" class="flex items-center gap-3 px-3 py-2 rounded transition-colors mb-1 border border-transparent ${r}" title="${t}">
                ${e}
                <span class="${s?"hidden":"font-display tracking-wide uppercase"}">${t}</span>
            </a>
        `},bindEvents:()=>{var n,t,e;(n=document.getElementById("btn-toggle-sidebar"))==null||n.addEventListener("click",()=>{yt.toggleSidebar();const s=document.getElementById("sidebar"),i=s.querySelectorAll("span"),r=s.querySelector("[data-logo-text]");yt.state.sidebarCollapsed?(s.classList.remove("w-64"),s.classList.add("w-20"),i.forEach(o=>o.classList.add("hidden")),r&&r.classList.add("hidden")):(s.classList.remove("w-20"),s.classList.add("w-64"),i.forEach(o=>o.classList.remove("hidden")),r&&r.classList.remove("hidden"))}),(t=document.getElementById("btn-theme-toggle"))==null||t.addEventListener("click",()=>{const i=yt.state.currentTheme==="dark"?"light":"dark";yt.setTheme(i);const r=document.getElementById("btn-theme-toggle");r.innerHTML=i==="dark"?Zt.sun:Zt.moon}),(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",async()=>{try{await Ha.logout(),xt.navigate("/login")}catch(s){console.error(s)}}),document.addEventListener("keydown",s=>{var i;(s.ctrlKey||s.metaKey)&&s.key==="k"&&(s.preventDefault(),(i=document.getElementById("global-search"))==null||i.focus())})}},Ve={getObras:async()=>(await _t(pt(Y,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getObraById:async n=>{const e=(await _t(pt(Y,"obras"))).docs.find(s=>s.id===n);return e?{id:e.id,...e.data()}:null},createObra:async n=>(await Pi(pt(Y,"obras"),{...n,created_at:new Date().toISOString()})).id,updateObra:async(n,t)=>{await sn(ie(Y,"obras",n),{...t,updated_at:new Date().toISOString()})},deleteObra:async n=>{await kT(ie(Y,"obras",n))},getObraStats:async(n,t=!1)=>{const e=pt(Y,"compras"),s=we(e,Gt("obraId","==",n)),r=(await _t(s)).docs.map(D=>({id:D.id,...D.data()}));let o=0;const a={},c={},l={};let d=0,h=0,f=0,m=0,_=0;const v={},b={};r.forEach(D=>{const E=Number(D.valor_estimado||D.valor_total||0);o+=E,a[D.status_compra]=(a[D.status_compra]||0)+1;const y=D.previsao_entrega?new Date(D.previsao_entrega):null,x=D.data_recebimento?new Date(D.data_recebimento):null;if(D.status_compra!=="Entregue"&&y&&y<new Date&&d++,x&&y&&(h++,x<=y&&f++),D.data_emissao&&(x||y)){const k=x||y,Z=Math.max(0,(new Date(k)-new Date(D.data_emissao))/(1e3*60*60*24));m+=Z,_++}const A=D.categoria||"Outros";c[A]=(c[A]||0)+E;const R=(D.natureza_compra||"Outros").trim();v[R]=(v[R]||0)+E;const P=D.centroCustoNome||D.centro_custo||D.centroCustoId||"N/D";if(b[P]=(b[P]||0)+E,D.data_solicitacao){const k=new Date(D.data_solicitacao),Z=`${k.getFullYear()}-${String(k.getMonth()+1).padStart(2,"0")}`;l[Z]=(l[Z]||0)+E}});const T=Object.keys(l).length||1,I=Ve.calculateCurvaS(o,T,l),S=h?f/h*100:0,C=_?m/_:0,O={totalCompras:r.length,totalGasto:o,porStatus:a,gastosPorCategoria:c,gastosMensais:l,curvaS:I,comprasRecentes:r.slice(0,10),atrasos:d,sla:S,lead:C,naturezaTotais:v,ccTotais:b};if(t)try{const{RDOService:D}=await Br(async()=>{const{RDOService:y}=await Promise.resolve().then(()=>pb);return{RDOService:y}},void 0),E=await Ve.getObraById(n);if(E!=null&&E.numero_os){const y=new Date().toISOString().split("T")[0],x=new Date(Date.now()-30*24*60*60*1e3).toISOString().split("T")[0],A=await D.getByObra(E.numero_os,x,y);A&&A.length>0&&(O.rdoData=D.processRDOData(A))}}catch(D){console.warn("Erro ao buscar dados RDO:",D)}return O},calculateCurvaS:(n,t,e)=>{const s=[],i=[];let r=0;const o=Object.keys(e).sort();for(let a=0;a<t;a++){const c=(a+1)/t,l=1/(1+Math.exp(-10*(c-.5)));s.push(n*l),o[a]&&(r+=e[o[a]]),i.push(r)}return{planejado:s,realizado:i}}},xD=Object.freeze(Object.defineProperty({__proto__:null,ObrasService:Ve},Symbol.toStringTag,{value:"Module"})),Ml="rgba(255,255,255,0.08)",ea="#a1a1aa",tr={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"},Vt={renderEmpty:n=>{const t=document.getElementById(n);if(!t)return;const e=t.parentElement;if(!e)return;t.style.display="none";let s=e.querySelector(".chart-placeholder");s||(s=document.createElement("div"),s.className="chart-placeholder text-center text-sm text-text-muted py-6",e.appendChild(s)),s.textContent="Sem dados"},renderHorasPorDia:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"line",data:{labels:s.map(r=>new Date(r).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})),datasets:[{label:"Horas Trabalhadas",data:i,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.1)",borderWidth:2,fill:!0,tension:.4,pointRadius:4,pointBackgroundColor:"#22c55e",pointBorderColor:"#121212",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Ml},ticks:{color:ea,font:tr}},y:{grid:{color:Ml},ticks:{color:ea,font:tr},beginAtZero:!0}}}})},renderHorasPorFuncao:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e","#0ea5e9"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:tr,padding:12,usePointStyle:!0}}}}})},renderFuncionariosPorDia:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"bar",data:{labels:s.map(r=>new Date(r).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})),datasets:[{label:"Funcionários",data:i,backgroundColor:"#0ea5e9",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:ea,font:tr}},y:{grid:{color:Ml},ticks:{color:ea,font:tr,stepSize:1},beginAtZero:!0}}}})}},Yr=n=>n instanceof Date&&!isNaN(n),zv=(n,t)=>{const e=new Date(n),s=new Date(t);if(!Yr(e)||!Yr(s)||e>s)return[];const i=[];for(let r=new Date(e);r<=s;r.setDate(r.getDate()+1))i.push(new Date(r));return i},Xd=n=>Yr(n)?n.toISOString().split("T")[0]:null,Hv=n=>{if(!(n!=null&&n.data_inicio)||!(n!=null&&n.data_prevista_fim))return[];const t=new Date(n.data_inicio),e=new Date(n.data_prevista_fim);if(!Yr(t)||!Yr(e)||t>e)return[];const s=zv(t,e),i=s.length?(n.orcamento||0)/s.length:0;let r=0;return s.map(o=>{r+=i;const a=Xd(o);return a?{x:a,y:r}:null}).filter(Boolean)},Wv=(n=[],t={},e=0,s=0,i={})=>{const r={};n.forEach(c=>{if(!c.data_solicitacao)return;const l=Xd(new Date(c.data_solicitacao));if(!l)return;const d=Number(c.valor_estimado||c.valor_total||0);r[l]=(r[l]||0)+d}),Object.entries(t||{}).forEach(([c,l])=>{const d=Number(l)||0,h=Number(i==null?void 0:i[c])||0,m=Math.max(0,d-h)*e+(h*s||e);r[c]=(r[c]||0)+m});const o=Object.keys(r).sort();let a=0;return o.map(c=>(a+=r[c],{x:c,y:a}))},ED=Object.freeze(Object.defineProperty({__proto__:null,formatDate:Xd,generateActualValue:Wv,generatePlannedValue:Hv,getDaysArray:zv},Symbol.toStringTag,{value:"Module"})),Za={create:async n=>(await Pi(pt(Y,"notificacoes"),{...n,lida:!1,created_at:new Date().toISOString()})).id,getByUser:async(n,t=10)=>{const e=we(pt(Y,"notificacoes"),Gt("userId","==",n),au("created_at","desc"),ca(t));return(await _t(e)).docs.map(i=>({id:i.id,...i.data()}))},markAsRead:async n=>{await sn(ie(Y,"notificacoes",n),{lida:!0,read_at:new Date().toISOString()})},markAllAsRead:async n=>{const t=we(pt(Y,"notificacoes"),Gt("userId","==",n),Gt("lida","==",!1)),s=(await _t(t)).docs.map(i=>sn(ie(Y,"notificacoes",i.id),{lida:!0,read_at:new Date().toISOString()}));await Promise.all(s)},checkAndNotify:async()=>{const n=new Date;n.setDate(n.getDate()+3);const t=we(pt(Y,"compras"),Gt("status_compra","in",["Comprado","Em Trânsito"]),Gt("data_entrega_prevista","<=",n.toISOString())),e=await _t(t),s=[];for(const i of e.docs){const r=i.data(),o=Math.ceil((new Date(r.data_entrega_prevista)-new Date)/(1e3*60*60*24));o>=0&&o<=3&&s.push({userId:r.solicitante_id,tipo:"entrega_proxima",titulo:"Entrega Próxima",mensagem:`${r.descricao} - Entrega prevista em ${o} dia(s)`,link:`/compras/${i.id}`,prioridade:o===0?"alta":"normal"})}for(const i of s)await Za.create(i);return s.length}},qv={init:async()=>{var t,e,s,i;const n=yt.state.currentUser;if(n){et.render(F.createLoader());try{let r="";if(n.role==="comprador"){const o=await hn.getCompradorStats();r=vl.renderComprador(o),et.render(r),o.atrasos>0&&F.createToast(`Existem ${o.atrasos} pedidos em atraso.`,"warning")}else if(n.role==="obra"||n.role==="engenheiro"){let o=n.obraPadrao||null;if(!o){const c=await((t=hn.getObras)==null?void 0:t.call(hn));c&&c.length&&(o=c[0].id)}const a=await hn.getObraStats(o);r=vl.renderObra(a),et.render(r),a.atrasos>0&&F.createToast(`Esta obra tem ${a.atrasos} pedido(s) em atraso.`,"warning"),setTimeout(()=>{a.rdoData?(a.rdoData.horasPorDia?Vt.renderHorasPorDia("chart-rdo-horas",a.rdoData.horasPorDia):Vt.renderEmpty("chart-rdo-horas"),a.rdoData.horasPorFuncao?Vt.renderHorasPorFuncao("chart-rdo-funcao",a.rdoData.horasPorFuncao):Vt.renderEmpty("chart-rdo-funcao"),a.rdoData.funcionariosPorDia?Vt.renderFuncionariosPorDia("chart-rdo-funcionarios",a.rdoData.funcionariosPorDia):Vt.renderEmpty("chart-rdo-funcionarios")):(Vt.renderEmpty("chart-rdo-horas"),Vt.renderEmpty("chart-rdo-funcao"),Vt.renderEmpty("chart-rdo-funcionarios"))},100)}else{const o=await hn.getDiretorStats(),a=await((e=hn.getObras)==null?void 0:e.call(hn))||await Ve.getObras(),c=o._allCompras||[],l=[],d=[];a.forEach(T=>{Hv({data_inicio:T.data_inicio||T.data_prevista_inicio,data_prevista_fim:T.data_prevista_fim||T.data_fim,orcamento:T.orcamento||T.valor_orcado||0}).forEach(O=>l.push(O));const S=c.filter(O=>O.obraId===T.id);Wv(S,{},0,0).forEach(O=>d.push(O))});const h=Array.from(new Set([...l.map(T=>T.x),...d.map(T=>T.x)])).sort();let f=0,m=0;const _=[],v=[],b=[];h.forEach(T=>{const I=l.filter(C=>C.x===T).map(C=>C.y).pop(),S=d.filter(C=>C.x===T).map(C=>C.y).pop();I!==void 0&&(f=I),S!==void 0&&(m=S),b.push(T),_.push(f),v.push(m)}),r=vl.renderDiretor({...o,curvaS:{planejado:_,realizado:v,labels:b},obras:a}),et.render(r),setTimeout(()=>{(_.length||v.length)&&Zi.renderCurvaS("chart-curva",_,v,b),Zi.renderStatusPie("chart-status",o.porStatus),o.naturezaTotais&&Zi.renderNatureza("chart-natureza-dir",o.naturezaTotais),o.ccTotais&&Zi.renderCentrosCusto("chart-cc-dir",o.ccTotais),o.gastosPorMes&&Zi.renderGastosPorMes("chart-gastos-mes",o.gastosPorMes)},100),o.atrasos>0&&F.createToast(`Há ${o.atrasos} compras com previsão vencida.`,"warning"),((s=o.alerts)==null?void 0:s.sem_previsao)>0&&F.createToast(`${o.alerts.sem_previsao} pedidos sem previsão de entrega.`,"warning"),((i=o.alerts)==null?void 0:i.pendente_aprovacao)>0&&F.createToast(`${o.alerts.pendente_aprovacao} pedidos com aprovação pendente.`,"warning"),qv._maybeNotify(o.alerts)}}catch(r){console.error(r),et.render(`<div class="text-red-500 p-4">Erro ao carregar dashboard: ${r.message}</div>`)}}},_maybeNotify:async(n={})=>{const t=yt.state.currentUser;if(!t)return;const e=new Date().toISOString().slice(0,10),s=async(i,r,o)=>{const a=`notif_${i}_${e}_${t.uid}`;localStorage.getItem(a)||(await Za.create({userId:t.uid,tipo:i,titulo:r,mensagem:o,link:"#/relatorios",prioridade:"normal"}),localStorage.setItem(a,"1"))};(n==null?void 0:n.atrasados)>0&&await s("atrasados","Pedidos atrasados",`${n.atrasados} pedido(s) com previsão vencida.`),(n==null?void 0:n.sem_previsao)>0&&await s("sem_previsao","Pedidos sem previsão",`${n.sem_previsao} pedido(s) sem data de entrega.`),(n==null?void 0:n.pendente_aprovacao)>0&&await s("pendente_aprovacao","Aprovação pendente",`${n.pendente_aprovacao} pedido(s) aguardando aprovação.`)}},TD=async n=>{if(!n)return{limiteReal:0,toleranciaPercentual:0,orcamento:0};const t=await Va(ie(Y,"obras",n));if(!t.exists())return{limiteReal:0,toleranciaPercentual:0,orcamento:0};const e=t.data(),s=Number(e.orcamento||e.valor_orcado||0),i=Number(e.tolerancia_percentual||0);return{limiteReal:s+s*i,toleranciaPercentual:i,orcamento:s}},Qm=async(n,t,e)=>{const{limiteReal:s}=await TD(n),i=s>0&&t>s;if(i&&!e){const r=new Error("JUSTIFICATIVA_NECESSARIA");throw r.code="JUSTIFICATIVA_NECESSARIA",r}return{estouro_orcamento:i,status_aprovacao:i?"Pendente":"Aprovado"}},er={checkDuplicidade:async(n,t)=>{const e=we(pt(Y,"compras"),Gt("obraId","==",n),Gt("status_compra","in",["Pendente","Em Cotação"]));return(await _t(e)).docs.filter(r=>{const o=r.data(),a=(o.descricao||"").toLowerCase(),c=o.itens||[],l=t.toLowerCase();return a.includes(l)||c.some(d=>(d.nome||"").toLowerCase().includes(l))}).length>0},uploadArquivo:(n,t,e)=>new Promise((s,i)=>{const r=BI(lR,t),o=VI(r,n);o.on("state_changed",a=>{const c=a.bytesTransferred/a.totalBytes*100;e&&e(c)},a=>i(a),async()=>{const a=await FI(o.snapshot.ref);s(a)})}),salvarCompra:async n=>{const t=Number(n.valor_total||n.valor_estimado||0),e=n.justificativa||n.justificativa_estouro_orcamento,s=await Qm(n.obraId,t,e),i={...n,valor_total:t,valor_estimado:t,justificativa_estouro_orcamento:e||null,estouro_orcamento:s.estouro_orcamento,status_aprovacao:s.status_aprovacao,data_solicitacao:jt.now().toDate().toISOString(),status_compra:n.status_compra||"Pendente",created_at:jt.now()};return(await Pi(pt(Y,"compras"),i)).id},atualizarCompra:async(n,t)=>{const e=Number(t.valor_total||t.valor_estimado||0),s=t.justificativa||t.justificativa_estouro_orcamento,i=await Qm(t.obraId,e,s),r=ie(Y,"compras",n);await sn(r,{...t,valor_total:e,valor_estimado:e,justificativa_estouro_orcamento:s||null,estouro_orcamento:i.estouro_orcamento,status_aprovacao:i.status_aprovacao})},getCompra:async n=>{const t=await Va(ie(Y,"compras",n));return t.exists()?{id:t.id,...t.data()}:null}},Xm={renderForm:(n=[],t=[],e=null)=>`
            <div class="max-w-4xl mx-auto">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-2xl font-display text-text tracking-wide">${e?"Editar Solicitação de Compra":"Nova Solicitação de Compra"}</h2>
                </div>

                <form id="form-compra" class="space-y-8">
                    <!-- Passo 1: Informações Básicas -->
                    <div class="card">
                        <h3 class="text-lg font-display text-text mb-4">1. Dados da Obra</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display tracking-wide text-text-muted uppercase">Obra *</label>
                                <select id="obraId" name="obraId" required class="input">
                                    <option value="">Selecione a Obra...</option>
                                    ${n.map(s=>`<option value="${s.id}">${s.nome_obra}</option>`).join("")}
                                </select>
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display tracking-wide text-text-muted uppercase">Prioridade</label>
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
                        <h3 class="text-lg font-display mb-4 text-text">2. Itens e Valores</h3>
                        
                        ${F.createInput({id:"descricao",label:"Descrição Resumida (ex: 50 sacos de cimento)",required:!0,className:"mb-4"})}

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display tracking-wide text-text-muted uppercase">Fornecedor Sugerido</label>
                                <select name="fornecedorId" class="input">
                                    <option value="">Sem preferência</option>
                                    ${t.map(s=>`<option value="${s.id}">${s.nome}</option>`).join("")}
                                </select>
                            </div>
                            ${F.createInput({id:"valor_estimado",type:"number",label:"Valor Estimado (R$)",placeholder:"0,00"})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            ${F.createInput({id:"data_emissao",type:"date",label:"Data Emissão"})}
                            ${F.createInput({id:"previsao_entrega",type:"date",label:"Previsão de Entrega"})}
                            ${F.createInput({id:"data_recebimento",type:"date",label:"Data de Recebimento"})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display tracking-wide text-text-muted uppercase">Status</label>
                                <select id="status_compra" name="status_compra" class="input">
                                    <option value="Pendente">Pendente</option>
                                    <option value="Em Cotação">Em Cotação</option>
                                    <option value="Aprovado">Aprovado</option>
                                    <option value="Comprado">Comprado</option>
                                    <option value="Entregue">Entregue</option>
                                    <option value="Recebido">Recebido</option>
                                    <option value="Cancelado">Cancelado</option>
                                </select>
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display tracking-wide text-text-muted uppercase">Centro de Custo</label>
                                <input id="centro_custo" name="centro_custo" class="input" placeholder="Centro de custo">
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display tracking-wide text-text-muted uppercase">Natureza</label>
                                <input id="natureza_compra" name="natureza_compra" class="input" placeholder="Natureza">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div class="flex items-center gap-2">
                                <input type="checkbox" id="retirada_estoque" name="retirada_estoque" class="rounded border-border text-primary">
                                <label for="retirada_estoque" class="text-sm text-text">Retirada de estoque</label>
                            </div>
                            ${F.createInput({id:"comprador",label:"Comprador",placeholder:"Nome do comprador"})}
                        </div>

                        <div class="flex flex-col gap-1 mb-4">
                            <label class="text-xs font-display tracking-wide text-text-muted uppercase">Itens / Observações</label>
                            <textarea id="itens" name="itens" class="input h-24" placeholder="Liste itens ou observações">${(e==null?void 0:e.itens)||""}</textarea>
                        </div>

                        <!-- Área de Justificativa (Oculta por padrão) -->
                        <div id="justificativa-container" class="hidden bg-canvas p-4 rounded border border-alert/60">
                            <p class="text-alert text-sm mb-2 font-display uppercase tracking-wide">⚠️ Valor acima do orçamento ou crítico. Justifique:</p>
                            <textarea id="justificativa" name="justificativa" class="input h-24" placeholder="Explique a necessidade..."></textarea>
                        </div>
                    </div>

                    <!-- Passo 3: Anexos -->
                    <div class="card">
                        <h3 class="text-lg font-display text-text mb-4">3. Anexos</h3>
                        <div class="border-2 border-dashed border-border rounded p-6 text-center hover:bg-canvas transition-colors cursor-pointer" id="drop-zone">
                            <input type="file" id="file-upload" multiple class="hidden">
                            <p class="text-text">Clique para adicionar arquivos ou arraste aqui</p>
                            <p class="text-xs heading-muted mt-1">PDF, Imagens (Max 5MB)</p>
                        </div>
                        <div id="file-list" class="mt-4 space-y-2"></div>
                    </div>

                    <div class="flex justify-end gap-4">
                        ${F.createButton({id:"btn-cancel",text:"Cancelar",variant:"secondary",onClick:"window.history.back()"})}
                        ${F.createButton({id:"btn-submit",text:"Registrar Solicitação",type:"submit"})}
                    </div>
                </form>
            </div>
        `},tc={init:async()=>{et.render(F.createLoader());try{const[n,t]=await Promise.all([_t(pt(Y,"obras")),_t(pt(Y,"fornecedores"))]),e=n.docs.map(i=>({id:i.id,...i.data()})),s=t.docs.map(i=>({id:i.id,...i.data()}));et.render(Xm.renderForm(e,s)),tc.bindEvents()}catch(n){console.error(n),et.render(`<div class="text-red-500">Erro ao carregar formulário: ${n.message}</div>`)}},initEdit:async n=>{et.render(F.createLoader());try{const[t,e,s]=await Promise.all([_t(pt(Y,"obras")),_t(pt(Y,"fornecedores")),er.getCompra(n)]),i=t.docs.map(o=>({id:o.id,...o.data()})),r=e.docs.map(o=>({id:o.id,...o.data()}));et.render(Xm.renderForm(i,r,s)),tc.bindEvents(n,s)}catch(t){console.error(t),et.render(`<div class="text-red-500">Erro ao carregar compra: ${t.message}</div>`)}},bindEvents:(n=null,t=null)=>{const e=document.getElementById("form-compra"),s=document.getElementById("file-upload"),i=document.getElementById("drop-zone"),r=document.getElementById("descricao"),o=document.getElementById("obraId"),a=document.getElementById("status_compra"),c=document.getElementById("previsao_entrega"),l=document.getElementById("data_recebimento"),d=document.getElementById("data_emissao"),h=document.getElementById("retirada_estoque");let f=[];i.addEventListener("click",()=>s.click()),s.addEventListener("change",b=>m(b.target.files));const m=b=>{f=[...f,...Array.from(b)],_()},_=()=>{const b=document.getElementById("file-list");b.innerHTML=f.map((T,I)=>`
                <div class="flex items-center justify-between bg-surface border border-border p-2 rounded">
                    <span class="text-sm truncate text-text">${T.name}</span>
                    <button type="button" class="text-alert hover:text-alert/80" onclick="document.getElementById('form-compra').dispatchEvent(new CustomEvent('remove-file', {detail: ${I}}))">
                        ${F.createButton({text:"X",variant:"secondary",className:"px-2 py-0 text-xs"})}
                    </button>
                </div>
            `).join("")};e.addEventListener("remove-file",b=>{f.splice(b.detail,1),_()}),r.addEventListener("blur",async()=>{const b=o.value,T=r.value;b&&T.length>3&&await er.checkDuplicidade(b,T)&&F.createToast("Atenção: Já existe um pedido similar para esta obra!","warning")}),document.getElementById("valor_estimado").addEventListener("input",b=>{const T=parseFloat(b.target.value),I=document.getElementById("justificativa-container"),S=document.getElementById("justificativa");T>5e3?(I.classList.remove("hidden"),S.required=!0):(I.classList.add("hidden"),S.required=!1)});const v=b=>{const T=new Date().toISOString().split("T")[0];b?(a&&(a.value="Recebido"),c&&(c.value=c.value||T,c.readOnly=!0),l&&(l.value=l.value||T,l.readOnly=!0),d&&!d.value&&(d.value=T)):(a&&a.value==="Recebido"&&!t&&(a.value="Pendente"),c&&(c.readOnly=!1),l&&(l.readOnly=!1))};if(t&&(e.obraId.value=t.obraId||"",e.prioridade.value=t.prioridade||"Normal",e.descricao.value=t.descricao||"",e.valor_estimado.value=t.valor_estimado||t.valor_total||"",e.fornecedorId.value=t.fornecedorId||"",e.data_emissao.value=(t.data_emissao||"").split("T")[0]||"",e.previsao_entrega.value=(t.previsao_entrega||"").split("T")[0]||"",e.data_recebimento.value=(t.data_recebimento||"").split("T")[0]||"",e.status_compra.value=t.status_compra||"Pendente",e.centro_custo.value=t.centro_custo||"",e.natureza_compra.value=t.natureza_compra||"",e.comprador.value=t.comprador||"",e.itens.value=t.itens||"",e.retirada_estoque.checked=t.retirada_estoque===!0||t.retirada_estoque==="on",t.justificativa||t.justificativa_estouro_orcamento)){const b=document.getElementById("justificativa-container"),T=document.getElementById("justificativa");b.classList.remove("hidden"),T.value=t.justificativa||t.justificativa_estouro_orcamento}h&&(v(h.checked),h.addEventListener("change",b=>v(b.target.checked))),e.addEventListener("submit",async b=>{b.preventDefault();const T=document.getElementById("btn-submit");try{T.disabled=!0,T.innerHTML=F.createLoader();const I=[];for(const y of f){const x=await er.uploadArquivo(y,`compras/${Date.now()}_${y.name}`);I.push({nome:y.name,url:x})}const S=new FormData(e),C=Object.fromEntries(S.entries()),O=Wt.parseCurrency(C.valor_estimado||C.valor_total||0),D=(C.justificativa||C.justificativa_estouro_orcamento||"").trim(),E={...C,anexos:I,solicitanteId:yt.state.currentUser.uid,solicitanteNome:yt.state.currentUser.nome,valor_total:O,valor_estimado:O,justificativa:D};E.retirada_estoque=e.retirada_estoque.checked,E.status_compra||(E.status_compra="Pendente"),["data_emissao","previsao_entrega","data_recebimento"].forEach(y=>{E[y]===""&&delete E[y]}),n?(await er.atualizarCompra(n,E),F.createToast("Compra atualizada com sucesso!")):(await er.salvarCompra(E),F.createToast("Compra registrada com sucesso!")),xt.navigate("/compras")}catch(I){console.error(I);const S=(I==null?void 0:I.code)==="JUSTIFICATIVA_NECESSARIA"?"Justificativa é obrigatória quando ultrapassa o orçamento da obra.":"Erro ao registrar: "+I.message;F.createToast(S,"error"),T.disabled=!1,T.innerHTML="<span>Registrar Solicitação</span>"}})}},na={getCompras:async(n={})=>{let e=(await _t(pt(Y,"compras"))).docs.map(I=>({id:I.id,...I.data()}));const{search:s="",status:i="",obra:r="",prioridade:o="",natureza:a="",cc:c="",dateStart:l="",dateEnd:d="",onlyDelayed:h=!1,fornecedor:f="",comprador:m=""}=n,_=s.toLowerCase(),v=l?new Date(l):null,b=d?new Date(d):null,T=new Date;return T.setHours(0,0,0,0),e=e.filter(I=>{if(_&&!(I.descricao||"").toLowerCase().includes(_)||i&&I.status_compra!==i||r&&I.obraId!==r||o&&I.prioridade!==o||a&&(I.natureza_compra||"").trim()!==a)return!1;const S=I.centroCustoNome||I.centro_custo||I.centroCustoId||"";if(c&&S!==c||f&&I.fornecedorId!==f||m&&I.compradorId!==m)return!1;const C=I.data_solicitacao?new Date(I.data_solicitacao):null;if(v&&C&&C<v||b&&C&&C>b)return!1;if(h){const O=I.previsao_entrega?new Date(I.previsao_entrega):I.data_entrega_prevista?new Date(I.data_entrega_prevista):null;if(!O||O>=T||I.status_compra==="Entregue"||I.status_compra==="Recebido")return!1}return!0}),e.sort((I,S)=>{const C=I.data_solicitacao||I.data_emissao||"";return(S.data_solicitacao||S.data_emissao||"").localeCompare(C)}),e},updateStatus:async(n,t)=>{const e=ie(Y,"compras",n);await sn(e,{status_compra:t})},updateCompra:async(n,t)=>{const e=ie(Y,"compras",n);await sn(e,t)}},Nl={renderControls:(n="table",t=[])=>`
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${Wt.formatDate(e.data_solicitacao)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-display text-text">${t.get(e.obraId)||e.obraId||"-"}</td>
                                    <td class="px-6 py-4 text-sm text-text max-w-xs truncate" title="${e.descricao}">${e.descricao||"-"}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${Wt.formatCurrency(e.valor_estimado||0)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        ${Wt.renderStatusBadge(e.status_compra,e.previsao_entrega||e.data_entrega_prevista)}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button class="text-text-muted hover:text-text mr-3 font-display uppercase tracking-wide inline-flex items-center gap-1" data-action="view" data-id="${e.id}">${Zt.eye} Ver</button>
                                        <button class="text-primary hover:text-primary-strong font-display uppercase tracking-wide inline-flex items-center gap-1" data-action="edit" data-id="${e.id}">${Zt.pencil} Editar</button>
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
                                            <span class="text-xs text-text-muted">${Wt.formatDate(r.data_solicitacao)}</span>
                                        </div>
                                        <p class="text-sm font-display text-text mb-2 line-clamp-2">${r.descricao||"-"}</p>
                                        <div class="flex justify-between items-center mt-3">
                                            <span class="text-sm font-display text-primary uppercase">${Wt.formatCurrency(r.valor_estimado||0)}</span>
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
        `},Ea={list:async()=>(await _t(pt(Y,"fornecedores"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await Pi(pt(Y,"fornecedores"),n)},update:async(n,t)=>{await sn(ie(Y,"fornecedores",n),t)}},Ta={list:async()=>(await _t(pt(Y,"compradores"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await Pi(pt(Y,"compradores"),n)},update:async(n,t)=>{await sn(ie(Y,"compradores",n),t)}},X={currentView:"table",compras:[],filters:{},obras:[],fornecedores:[],compradores:[],init:async()=>{await X.load(),await X.render()},load:async()=>{X.compras=await na.getCompras(),X.obras=await Ve.getObras(),X.fornecedores=await Ea.list(),X.compradores=await Ta.list()},render:async()=>{const n=document.createElement("div");n.innerHTML=Nl.renderControls(X.currentView,X.obras);const t=document.createElement("div");t.id="reports-content";const e=new Map(X.obras.map(s=>[s.id,s.nome_obra||s.apelido_obra||s.id]));t.innerHTML=X.currentView==="table"?Nl.renderTable(X.compras,e):Nl.renderKanban(X.compras,e),n.appendChild(t),et.render(n.innerHTML),X.bindEvents()},applyFilters:async()=>{var h,f,m,_,v,b,T,I,S,C,O;const n=((h=document.getElementById("filter-search"))==null?void 0:h.value.toLowerCase())||"",t=((f=document.getElementById("filter-status"))==null?void 0:f.value)||"",e=((m=document.getElementById("filter-obra"))==null?void 0:m.value)||"",s=((_=document.getElementById("filter-prioridade"))==null?void 0:_.value)||"",i=((v=document.getElementById("filter-natureza"))==null?void 0:v.value)||"",r=((b=document.getElementById("filter-cc"))==null?void 0:b.value)||"",o=((T=document.getElementById("filter-fornecedor"))==null?void 0:T.value)||"",a=((I=document.getElementById("filter-comprador"))==null?void 0:I.value)||"",c=((S=document.getElementById("filter-date-start"))==null?void 0:S.value)||"",l=((C=document.getElementById("filter-date-end"))==null?void 0:C.value)||"",d=((O=document.getElementById("filter-only-delayed"))==null?void 0:O.checked)||!1;X.filters={search:n,status:t,obra:e,prioridade:s,natureza:i,cc:r,fornecedor:o,comprador:a,dateStart:c,dateEnd:l,onlyDelayed:d},X.compras=await na.getCompras(X.filters),X.render()},bindEvents:()=>{var i,r,o,a,c;(i=document.getElementById("view-table"))==null||i.addEventListener("click",()=>{X.currentView="table",X.render()}),(r=document.getElementById("view-kanban"))==null||r.addEventListener("click",()=>{X.currentView="kanban",X.render()});const n=document.getElementById("filter-natureza"),t=document.getElementById("filter-cc"),e=document.getElementById("filter-fornecedor"),s=document.getElementById("filter-comprador");if(n){const l=Array.from(new Set(X.compras.map(d=>(d.natureza_compra||"Outros").trim())));n.innerHTML='<option value="">Todas Naturezas</option>'+l.map(d=>`<option value="${d}">${d}</option>`).join("")}if(t){const l=Array.from(new Set(X.compras.map(d=>d.centroCustoNome||d.centro_custo||d.centroCustoId||"N/D")));t.innerHTML='<option value="">Todos Centros de Custo</option>'+l.map(d=>`<option value="${d}">${d}</option>`).join("")}e&&(e.innerHTML='<option value="">Todos Fornecedores</option>'+X.fornecedores.map(l=>`<option value="${l.id}">${l.nome||l.empresa||l.id}</option>`).join("")),s&&(s.innerHTML='<option value="">Todos Compradores</option>'+X.compradores.map(l=>`<option value="${l.id}">${l.nome||l.id}</option>`).join("")),(o=document.getElementById("btn-apply-filters"))==null||o.addEventListener("click",()=>{X.applyFilters()}),(a=document.getElementById("btn-clear-filters"))==null||a.addEventListener("click",()=>{document.getElementById("filter-search").value="",document.getElementById("filter-status").value="",document.getElementById("filter-obra").value="",document.getElementById("filter-prioridade").value="",document.getElementById("filter-natureza").value="",document.getElementById("filter-cc").value="",document.getElementById("filter-date-start").value="",document.getElementById("filter-date-end").value="",document.getElementById("filter-only-delayed").checked=!1,X.applyFilters()}),(c=document.getElementById("btn-export-csv"))==null||c.addEventListener("click",()=>{try{X.exportCsv()}catch(l){F.createToast("Erro ao exportar: "+l.message,"error")}}),document.querySelectorAll('[data-action="view"]').forEach(l=>{l.addEventListener("click",()=>{const d=l.dataset.id,h=X.compras.find(f=>f.id===d);if(!h)return alert("Compra não encontrada.");X.showModal(h,!1)})}),document.querySelectorAll('[data-action="edit"]').forEach(l=>{l.addEventListener("click",()=>{const d=l.dataset.id,h=X.compras.find(f=>f.id===d);if(!h)return alert("Compra não encontrada.");X.showModal(h,!0)})}),document.addEventListener("kanban-move-next",async l=>{const{id:d,current:h}=l.detail,f=["Pendente","Em Cotação","Aprovado","Comprado","Entregue"],m=f.indexOf(h)+1;if(m<f.length){const _=f[m];try{await na.updateStatus(d,_),F.createToast(`Movido para ${_}`),await X.load(),X.render()}catch(v){F.createToast("Erro ao mover: "+v.message,"error")}}})},showModal:(n,t=!1)=>{var i,r,o;const e=document.createElement("div");e.className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4",e.innerHTML=`
            <div class="bg-surface border border-border rounded shadow-heavy w-full max-w-2xl">
                <div class="flex justify-between items-center px-4 py-3 border-b border-border">
                    <h3 class="text-lg font-display text-text">${t?"Editar Compra":"Detalhes da Compra"}</h3>
                    <button id="modal-close" class="text-text-muted hover:text-text">${Zt.close}</button>
                </div>
                <div class="p-4 space-y-3">
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="text-xs heading-muted uppercase">Obra</label>
                            <p class="text-text">${n.obraNome||n.obraId||"-"}</p>
                        </div>
                        <div>
                            <label class="text-xs heading-muted uppercase">Status</label>
                            ${t?`<select id="modal-status" class="input">${["Pendente","Em Cotação","Aprovado","Comprado","Entregue","Recebido","Cancelado"].map(a=>`<option value="${a}" ${n.status_compra===a?"selected":""}>${a}</option>`).join("")}</select>`:`<p class="text-text">${n.status_compra||"-"}</p>`}
                        </div>
                        <div>
                            <label class="text-xs heading-muted uppercase">Descrição</label>
                            ${t?`<input id="modal-desc" class="input" value="${n.descricao||""}">`:`<p class="text-text">${n.descricao||"-"}</p>`}
                        </div>
                        <div>
                            <label class="text-xs heading-muted uppercase">Valor</label>
                            ${t?`<input id="modal-valor" type="number" class="input" value="${n.valor_estimado||0}">`:`<p class="text-text">${(n.valor_estimado||n.valor_total||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}</p>`}
                        </div>
                    </div>
                    <div class="flex justify-end gap-2">
                        ${t?'<button id="modal-save" class="btn">Salvar</button>':""}
                        <button id="modal-close-2" class="btn-secondary">Fechar</button>
                    </div>
                </div>
            </div>
        `,document.body.appendChild(e);const s=()=>e.remove();(i=e.querySelector("#modal-close"))==null||i.addEventListener("click",s),(r=e.querySelector("#modal-close-2"))==null||r.addEventListener("click",s),t&&((o=e.querySelector("#modal-save"))==null||o.addEventListener("click",async()=>{var c,l,d;const a={descricao:((c=e.querySelector("#modal-desc"))==null?void 0:c.value)||"",valor_estimado:Number(((l=e.querySelector("#modal-valor"))==null?void 0:l.value)||0),status_compra:((d=e.querySelector("#modal-status"))==null?void 0:d.value)||n.status_compra};try{await na.updateCompra(n.id,a),s(),await X.load(),X.render()}catch(h){alert("Erro ao salvar: "+h.message)}}))},exportCsv:()=>{if(!X.compras.length){F.createToast("Sem dados para exportar.","warning");return}const n=new Map(X.obras.map(l=>[l.id,l.nome_obra||l.apelido_obra||l.id])),t=new Map(X.fornecedores.map(l=>[l.id,l.nome||l.empresa||l.id])),e=new Map(X.compradores.map(l=>[l.id,l.nome||l.id])),s=["Obra","NF-e","Valor","Data Emissao","Status","Data Recebimento","Prev. Entrega","Natureza","Centro Custo","Comprador","Fornecedor","Justificativa Estouro","Status Aprovacao"],i=X.compras.map(l=>[`"${n.get(l.obraId)||l.obraId||""}"`,`"${l.numero_nf||""}"`,String(l.valor_total||l.valor_estimado||0).replace(".",","),l.data_emissao||"",l.status_compra||"",l.data_recebimento||"",l.previsao_entrega||l.data_entrega_prevista||"",l.natureza_compra||"",l.centroCustoNome||l.centro_custo||l.centroCustoId||"",e.get(l.compradorId)||l.comprador||"",t.get(l.fornecedorId)||l.fornecedor||"",(l.justificativa_estouro_orcamento||"").replace(/"/g,"'"),l.status_aprovacao||""]);let r="\uFEFF"+s.join(";")+`
`;r+=i.map(l=>l.join(";")).join(`
`);const o=new Blob([r],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(o),c=document.createElement("a");c.href=a,c.download=`compras_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(a)}},Jm={getUsers:async()=>(await _t(pt(Y,"usuarios"))).docs.map(t=>({id:t.id,...t.data()})),updateUser:async(n,t)=>{await sn(ie(Y,"usuarios",n),t)},createUserProfile:async(n,t)=>{await AT(ie(Y,"usuarios",n),t)}},ID={render:n=>`
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
        `},AD=n=>(Array.isArray(n)?n:[n]).filter(Boolean),ws={hasRole:(n,t=yt.state.currentUser)=>{const e=AD(n);return!t||!e.length?!1:t.role==="administrador"?!0:e.includes(t.role)},guard:(n,t)=>{if(!ws.hasRole(n)){const e=new Error("Acesso negado para esta ação.");throw e.code="PERMISSION_DENIED",e}return t()},canEditObra:n=>ws.hasRole(["diretor","comprador","obra"],n),canDeleteObra:n=>ws.hasRole(["diretor"],n),canEditCompra:n=>ws.hasRole(["diretor","comprador"],n),canApproveCompra:n=>ws.hasRole(["diretor","financeiro"],n),canEditCadastros:n=>ws.hasRole(["diretor"],n)},Pu={init:async()=>{et.render(F.createLoader());try{ws.guard(["administrador","diretor"],async()=>{const n=await Jm.getUsers();et.render(ID.render(n)),Pu.bindEvents()})}catch(n){et.render(`<div class="text-red-500">Erro: ${n.message}</div>`)}},bindEvents:()=>{document.addEventListener("edit-user",n=>{const t=n.detail,e=prompt("Nova função (comprador, obra, diretor, administrador):");e&&Jm.updateUser(t,{role:e}).then(()=>{F.createToast("Usuário atualizado!"),Pu.init()}).catch(s=>F.createToast("Erro: "+s.message,"error"))})}},Zm={render:(n=[])=>{const t=new Date,e=t.getMonth(),s=t.getFullYear(),i={};n.forEach(h=>{if(h.data_entrega_prevista){const m=new Date(h.data_entrega_prevista).toISOString().split("T")[0];i[m]||(i[m]=[]),i[m].push(h)}});const r=new Date(s,e,1),a=new Date(s,e+1,0).getDate(),c=r.getDay();let d=`
            <div class="card">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-display text-text">Calendário de Entregas - ${["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][e]} ${s}</h3>
                </div>
                
                <div class="grid grid-cols-7 gap-2">
                    ${["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].map(h=>`<div class="text-center text-xs font-display text-text-muted uppercase tracking-wide py-2">${h}</div>`).join("")}
        `;for(let h=0;h<c;h++)d+='<div class="aspect-square"></div>';for(let h=1;h<=a;h++){const f=new Date(s,e,h),m=f.toISOString().split("T")[0],_=i[m]||[],v=h===t.getDate()&&e===t.getMonth(),b=f<t&&!v;d+=`
                <div class="aspect-square border border-border rounded p-1 ${v?"bg-primary/10 border-primary":"bg-surface"} ${b?"opacity-50":""} hover:bg-canvas transition-colors cursor-pointer">
                    <div class="text-xs font-display ${v?"text-primary font-bold":"text-text"}">${h}</div>
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
        `}},Ll={renderList:n=>`
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
                                    <p class="text-sm heading-muted">${t.apelido_obra||""}</p>
                                </div>
                                <span class="px-2 py-1 text-xs rounded border border-border text-text font-display uppercase tracking-wide">
                                    ${t.status||"Ativa"}
                                </span>
                            </div>
                            
                            <div class="space-y-2 text-sm text-text">
                                <p class="heading-muted"><span class="text-text">Centro de Custo:</span> ${t.centro_custo||"-"}</p>
                                <p class="heading-muted"><span class="text-text">Responsável:</span> ${t.responsavel||"-"}</p>
                                ${t.orcamento?`<p class="heading-muted"><span class="text-text">Orçamento:</span> ${Wt.formatCurrency(t.orcamento)}</p>`:""}
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
        `,renderForm:(n=null)=>{const t=!!n;return`
            <div class="max-w-3xl mx-auto">
                <h2 class="text-2xl font-display text-text tracking-wide mb-6">
                    ${t?"Editar Obra":"Nova Obra"}
                </h2>

                <form id="form-obra" class="space-y-6">
                    <div class="card">
                        <h3 class="text-lg font-display mb-4 text-text">Informações Básicas</h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${F.createInput({id:"nome_obra",label:"Nome da Obra *",value:(n==null?void 0:n.nome_obra)||"",required:!0})}
                            ${F.createInput({id:"apelido_obra",label:"Apelido/Nome Curto",value:(n==null?void 0:n.apelido_obra)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${F.createInput({id:"centro_custo",label:"Centro de Custo *",value:(n==null?void 0:n.centro_custo)||"",required:!0})}
                            ${F.createInput({id:"responsavel",label:"Responsável",value:(n==null?void 0:n.responsavel)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${F.createInput({id:"orcamento",label:"Orçamento Total (R$)",type:"number",value:(n==null?void 0:n.orcamento)||"",placeholder:"0.00"})}
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display tracking-wide text-text-muted uppercase">Status</label>
                                <select id="status" name="status" class="input">
                                    <option value="Ativa" ${(n==null?void 0:n.status)==="Ativa"?"selected":""}>Ativa</option>
                                    <option value="Pausada" ${(n==null?void 0:n.status)==="Pausada"?"selected":""}>Pausada</option>
                                    <option value="Concluída" ${(n==null?void 0:n.status)==="Concluída"?"selected":""}>Concluída</option>
                                </select>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${F.createInput({id:"descricao",label:"Descrição da Obra",value:(n==null?void 0:n.descricao)||"",placeholder:"Resumo da obra"})}
                            ${F.createInput({id:"numero_os",label:"Número da OS",value:(n==null?void 0:n.numero_os)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            ${F.createInput({id:"horas_previstas",label:"Horas Previstas",type:"number",value:(n==null?void 0:n.horas_previstas)||""})}
                            ${F.createInput({id:"horas_extras_previstas",label:"Horas Extras Previstas",type:"number",value:(n==null?void 0:n.horas_extras_previstas)||""})}
                            ${F.createInput({id:"deslocamento",label:"Deslocamento (km ou h)",value:(n==null?void 0:n.deslocamento)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            ${F.createInput({id:"data_inicio",label:"Data de Início",type:"date",value:(n==null?void 0:n.data_inicio)||(n==null?void 0:n.data_prevista_inicio)||""})}
                            ${F.createInput({id:"data_prevista_inicio",label:"Data Prevista de Início",type:"date",value:(n==null?void 0:n.data_prevista_inicio)||""})}
                            ${F.createInput({id:"data_prevista_fim",label:"Data Prevista de Fim",type:"date",value:(n==null?void 0:n.data_prevista_fim)||(n==null?void 0:n.data_fim)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${F.createInput({id:"cliente",label:"Cliente",value:(n==null?void 0:n.cliente)||""})}
                            ${F.createInput({id:"empresa",label:"Empresa",value:(n==null?void 0:n.empresa)||""})}
                        </div>

                        <div class="flex items-center gap-2 mt-4">
                            <input type="checkbox" id="obra_filha" name="obra_filha" class="rounded border-border text-primary" ${n!=null&&n.obra_filha?"checked":""}>
                            <label for="obra_filha" class="text-sm text-text">Obra filha</label>
                        </div>
                    </div>

                    <div class="card">
                        <h3 class="text-lg font-display mb-4 text-text">Localização</h3>
                        
                        ${F.createInput({id:"endereco",label:"Endereço Completo",value:(n==null?void 0:n.endereco)||"",className:"mb-4"})}

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            ${F.createInput({id:"cidade",label:"Cidade",value:(n==null?void 0:n.cidade)||""})}
                            ${F.createInput({id:"estado",label:"Estado",value:(n==null?void 0:n.estado)||"",placeholder:"UF"})}
                            ${F.createInput({id:"cep",label:"CEP",value:(n==null?void 0:n.cep)||"",placeholder:"00000-000"})}
                        </div>
                    </div>

                    <div class="flex justify-end gap-4">
                        ${F.createButton({id:"btn-cancel",text:"Cancelar",variant:"secondary",onClick:"window.location.hash = '/obras'"})}
                        ${F.createButton({id:"btn-submit",text:t?"Salvar Alterações":"Criar Obra",type:"submit"})}
                    </div>
                </form>
            </div>
        `},renderDashboard:(n,t)=>{var e,s,i,r,o;return`
            <div class="space-y-6">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-2xl font-display text-text tracking-wide">${n.nome_obra}</h2>
                        <p class="heading-muted">${n.apelido_obra||""} • ${n.centro_custo||""} ${t.osNumber?`• OS: ${t.osNumber}`:""}</p>
                ${t.alerts&&t.alerts.length?`
                            <div class="mt-3 p-3 border border-alert text-alert rounded bg-canvas">
                                <p class="font-display uppercase tracking-wide text-sm mb-1">Atenção</p>
                                <ul class="list-disc list-inside text-sm text-text">
                                    ${t.alerts.map(a=>`<li>${a}</li>`).join("")}
                                    ${!t.rdoData||(t.rdoData.totalHoras||0)===0?"<li>Sem conexão com RDO ou dados inexistentes.</li>":""}
                                </ul>
                            </div>
                        `:!t.rdoData||(t.rdoData.totalHoras||0)===0?`
                            <div class="mt-3 p-3 border border-alert text-alert rounded bg-canvas">
                                <p class="font-display uppercase tracking-wide text-sm mb-1">Atenção</p>
                                <p class="text-sm text-text">Sem conexão com RDO ou dados inexistentes.</p>
                            </div>
                        `:""}
                    </div>
                    <button onclick="window.location.hash = '/obras/${n.id}/editar'" 
                            class="btn-secondary">
                        Editar Obra
                    </button>
                </div>

                <!-- KPIs -->
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    ${F.createCard({title:"Total de Compras",content:`<p class="text-4xl font-display text-primary uppercase">${t.totalCompras}</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Total Gasto",content:`<p class="text-4xl font-display text-text uppercase">${Wt.formatCurrency(t.totalGasto)}</p><p class="text-sm heading-muted mt-1">Orçamento: ${Wt.formatCurrency(n.orcamento||0)}</p>`})}
                    ${F.createCard({title:"Pendentes",content:`<p class="text-4xl font-display text-alert uppercase">${t.porStatus.Pendente||0}</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Entregues",content:`<p class="text-4xl font-display text-primary uppercase">${t.porStatus.Entregue||0}</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${t.atrasos||0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(t.sla||0)<80?"alert":"primary"} uppercase">${(t.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Entregues no prazo</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(t.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia vs Orçamento",content:`<p class="text-4xl font-display text-${(t.economia||0)<0?"alert":"primary"} uppercase">${Wt.formatCurrency(t.economia||0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(t.curvaPercent||0).toFixed(1)}%</p>`})}
                </div>

                <!-- Gráficos -->
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

                <!-- Curva S e Gastos Mensais -->
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

                <!-- Curva Financeira PV/AV -->
                <div class="card h-96">
                    <h3 class="text-lg font-display text-text mb-4">Curva Financeira (PV x AV)</h3>
                    <div class="h-80 relative">
                        <canvas id="chart-finance-pvav"></canvas>
                    </div>
                </div>

                <!-- Natureza / Centro de Custo -->
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

                <!-- Calendário e Timeline -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="lg:col-span-2">
                        ${Zm.render(t.comprasRecentes)}
                    </div>
                    <div>
                        ${Zm.renderTimeline(t.comprasRecentes)}
                    </div>
                </div>

                <!-- Análise de RDO (Diário de Obra) -->
                    <div class="space-y-6">
                    <h3 class="text-xl font-display text-text tracking-wide">Análise de Mão de Obra (RDO)</h3>
                    
                    <!-- KPIs RDO -->
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                        ${F.createCard({title:"Total de Horas",content:`<p id="kpi-rdo-total" class="text-4xl font-display text-primary uppercase">${(((e=t.rdoData)==null?void 0:e.totalHoras)||0).toFixed(0)}</p>`,className:"accent-left"})}
                        ${F.createCard({title:"Média Horas/Dia",content:`<p id="kpi-rdo-media-dia" class="text-4xl font-display text-text uppercase">${(((s=t.rdoData)==null?void 0:s.mediaHorasDia)||0).toFixed(1)}</p>`})}
                        ${F.createCard({title:"Total Funcionários",content:`<p id="kpi-rdo-func" class="text-4xl font-display text-text uppercase">${((i=t.rdoData)==null?void 0:i.totalFuncionarios)||0}</p>`})}
                        ${F.createCard({title:"Média Func./Dia",content:`<p id="kpi-rdo-media-func-dia" class="text-4xl font-display text-text uppercase">${(((r=t.rdoData)==null?void 0:r.mediaFuncionariosDia)||0).toFixed(1)}</p>`})}
                    </div>

                    <!-- Gráficos RDO -->
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
                    
                    <!-- Top Técnicos -->
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

                <!-- Últimas Compras -->
                <div class="card">
                    <h3 class="text-lg font-display text-text mb-4">Últimas Compras</h3>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-border">
                            <thead class="bg-canvas">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Data</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Descrição</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Valor</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Status</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-border">
                                ${t.comprasRecentes.map(a=>`
                                    <tr class="hover:bg-canvas">
                                        <td class="px-6 py-4 text-sm text-text-muted">${Wt.formatDate(a.data_solicitacao)}</td>
                                        <td class="px-6 py-4 text-sm text-text">${a.descricao||"-"}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${Wt.formatCurrency(a.valor_estimado||0)}</td>
                                        <td class="px-6 py-4 text-sm">
                                            <span class="px-2 py-1 text-xs rounded border border-border text-text font-display uppercase tracking-wide">
                                                ${a.status_compra}
                                            </span>
                                        </td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `}},Gv=6048e5,kD=864e5,ho=6e4,fo=36e5,RD=1e3,tg=Symbol.for("constructDateFrom");function Nt(n,t){return typeof n=="function"?n(t):n&&typeof n=="object"&&tg in n?n[tg](t):n instanceof Date?new n.constructor(t):new Date(t)}function Q(n,t){return Nt(t||n,n)}function Nc(n,t,e){const s=Q(n,e==null?void 0:e.in);return isNaN(t)?Nt((e==null?void 0:e.in)||n,NaN):(t&&s.setDate(s.getDate()+t),s)}function Jd(n,t,e){const s=Q(n,e==null?void 0:e.in);if(isNaN(t))return Nt(n,NaN);if(!t)return s;const i=s.getDate(),r=Nt(n,s.getTime());r.setMonth(s.getMonth()+t+1,0);const o=r.getDate();return i>=o?r:(s.setFullYear(r.getFullYear(),r.getMonth(),i),s)}function Zd(n,t,e){return Nt(n,+Q(n)+t)}function PD(n,t,e){return Zd(n,t*fo)}let SD={};function zs(){return SD}function rn(n,t){var a,c,l,d;const e=zs(),s=(t==null?void 0:t.weekStartsOn)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??e.weekStartsOn??((d=(l=e.locale)==null?void 0:l.options)==null?void 0:d.weekStartsOn)??0,i=Q(n,t==null?void 0:t.in),r=i.getDay(),o=(r<s?7:0)+r-s;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function Ti(n,t){return rn(n,{...t,weekStartsOn:1})}function Yv(n,t){const e=Q(n,t==null?void 0:t.in),s=e.getFullYear(),i=Nt(e,0);i.setFullYear(s+1,0,4),i.setHours(0,0,0,0);const r=Ti(i),o=Nt(e,0);o.setFullYear(s,0,4),o.setHours(0,0,0,0);const a=Ti(o);return e.getTime()>=r.getTime()?s+1:e.getTime()>=a.getTime()?s:s-1}function ec(n){const t=Q(n),e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+n-+e}function Hs(n,...t){const e=Nt.bind(null,t.find(s=>typeof s=="object"));return t.map(e)}function Su(n,t){const e=Q(n,t==null?void 0:t.in);return e.setHours(0,0,0,0),e}function Kv(n,t,e){const[s,i]=Hs(e==null?void 0:e.in,n,t),r=Su(s),o=Su(i),a=+r-ec(r),c=+o-ec(o);return Math.round((a-c)/kD)}function CD(n,t){const e=Yv(n,t),s=Nt(n,0);return s.setFullYear(e,0,4),s.setHours(0,0,0,0),Ti(s)}function DD(n,t,e){const s=Q(n,e==null?void 0:e.in);return s.setTime(s.getTime()+t*ho),s}function OD(n,t,e){return Jd(n,t*3,e)}function MD(n,t,e){return Zd(n,t*1e3)}function ND(n,t,e){return Nc(n,t*7,e)}function LD(n,t,e){return Jd(n,t*12,e)}function Rr(n,t){const e=+Q(n)-+Q(t);return e<0?-1:e>0?1:e}function VD(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function Qv(n){return!(!VD(n)&&typeof n!="number"||isNaN(+Q(n)))}function FD(n,t,e){const[s,i]=Hs(e==null?void 0:e.in,n,t),r=s.getFullYear()-i.getFullYear(),o=s.getMonth()-i.getMonth();return r*12+o}function BD(n,t,e){const[s,i]=Hs(e==null?void 0:e.in,n,t);return s.getFullYear()-i.getFullYear()}function Xv(n,t,e){const[s,i]=Hs(e==null?void 0:e.in,n,t),r=eg(s,i),o=Math.abs(Kv(s,i));s.setDate(s.getDate()-r*o);const a=+(eg(s,i)===-r),c=r*(o-a);return c===0?0:c}function eg(n,t){const e=n.getFullYear()-t.getFullYear()||n.getMonth()-t.getMonth()||n.getDate()-t.getDate()||n.getHours()-t.getHours()||n.getMinutes()-t.getMinutes()||n.getSeconds()-t.getSeconds()||n.getMilliseconds()-t.getMilliseconds();return e<0?-1:e>0?1:e}function po(n){return t=>{const s=(n?Math[n]:Math.trunc)(t);return s===0?0:s}}function $D(n,t,e){const[s,i]=Hs(e==null?void 0:e.in,n,t),r=(+s-+i)/fo;return po(e==null?void 0:e.roundingMethod)(r)}function th(n,t){return+Q(n)-+Q(t)}function UD(n,t,e){const s=th(n,t)/ho;return po(e==null?void 0:e.roundingMethod)(s)}function Jv(n,t){const e=Q(n,t==null?void 0:t.in);return e.setHours(23,59,59,999),e}function Zv(n,t){const e=Q(n,t==null?void 0:t.in),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(23,59,59,999),e}function jD(n,t){const e=Q(n,t==null?void 0:t.in);return+Jv(e,t)==+Zv(e,t)}function tb(n,t,e){const[s,i,r]=Hs(e==null?void 0:e.in,n,n,t),o=Rr(i,r),a=Math.abs(FD(i,r));if(a<1)return 0;i.getMonth()===1&&i.getDate()>27&&i.setDate(30),i.setMonth(i.getMonth()-o*a);let c=Rr(i,r)===-o;jD(s)&&a===1&&Rr(s,r)===1&&(c=!1);const l=o*(a-+c);return l===0?0:l}function zD(n,t,e){const s=tb(n,t,e)/3;return po(e==null?void 0:e.roundingMethod)(s)}function HD(n,t,e){const s=th(n,t)/1e3;return po(e==null?void 0:e.roundingMethod)(s)}function WD(n,t,e){const s=Xv(n,t,e)/7;return po(e==null?void 0:e.roundingMethod)(s)}function qD(n,t,e){const[s,i]=Hs(e==null?void 0:e.in,n,t),r=Rr(s,i),o=Math.abs(BD(s,i));s.setFullYear(1584),i.setFullYear(1584);const a=Rr(s,i)===-r,c=r*(o-+a);return c===0?0:c}function GD(n,t){const e=Q(n,t==null?void 0:t.in),s=e.getMonth(),i=s-s%3;return e.setMonth(i,1),e.setHours(0,0,0,0),e}function YD(n,t){const e=Q(n,t==null?void 0:t.in);return e.setDate(1),e.setHours(0,0,0,0),e}function KD(n,t){const e=Q(n,t==null?void 0:t.in),s=e.getFullYear();return e.setFullYear(s+1,0,0),e.setHours(23,59,59,999),e}function eb(n,t){const e=Q(n,t==null?void 0:t.in);return e.setFullYear(e.getFullYear(),0,1),e.setHours(0,0,0,0),e}function QD(n,t){const e=Q(n,t==null?void 0:t.in);return e.setMinutes(59,59,999),e}function XD(n,t){var a,c;const e=zs(),s=e.weekStartsOn??((c=(a=e.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??0,i=Q(n,t==null?void 0:t.in),r=i.getDay(),o=(r<s?-7:0)+6-(r-s);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}function JD(n,t){const e=Q(n,t==null?void 0:t.in);return e.setSeconds(59,999),e}function ZD(n,t){const e=Q(n,t==null?void 0:t.in),s=e.getMonth(),i=s-s%3+3;return e.setMonth(i,0),e.setHours(23,59,59,999),e}function t2(n,t){const e=Q(n,t==null?void 0:t.in);return e.setMilliseconds(999),e}const e2={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},n2=(n,t,e)=>{let s;const i=e2[n];return typeof i=="string"?s=i:t===1?s=i.one:s=i.other.replace("{{count}}",t.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+s:s+" ago":s};function Vl(n){return(t={})=>{const e=t.width?String(t.width):n.defaultWidth;return n.formats[e]||n.formats[n.defaultWidth]}}const s2={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},i2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},r2={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},o2={date:Vl({formats:s2,defaultWidth:"full"}),time:Vl({formats:i2,defaultWidth:"full"}),dateTime:Vl({formats:r2,defaultWidth:"full"})},a2={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},c2=(n,t,e,s)=>a2[n];function nr(n){return(t,e)=>{const s=e!=null&&e.context?String(e.context):"standalone";let i;if(s==="formatting"&&n.formattingValues){const o=n.defaultFormattingWidth||n.defaultWidth,a=e!=null&&e.width?String(e.width):o;i=n.formattingValues[a]||n.formattingValues[o]}else{const o=n.defaultWidth,a=e!=null&&e.width?String(e.width):n.defaultWidth;i=n.values[a]||n.values[o]}const r=n.argumentCallback?n.argumentCallback(t):t;return i[r]}}const l2={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},u2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},d2={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},h2={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},f2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},p2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},m2=(n,t)=>{const e=Number(n),s=e%100;if(s>20||s<10)switch(s%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},g2={ordinalNumber:m2,era:nr({values:l2,defaultWidth:"wide"}),quarter:nr({values:u2,defaultWidth:"wide",argumentCallback:n=>n-1}),month:nr({values:d2,defaultWidth:"wide"}),day:nr({values:h2,defaultWidth:"wide"}),dayPeriod:nr({values:f2,defaultWidth:"wide",formattingValues:p2,defaultFormattingWidth:"wide"})};function sr(n){return(t,e={})=>{const s=e.width,i=s&&n.matchPatterns[s]||n.matchPatterns[n.defaultMatchWidth],r=t.match(i);if(!r)return null;const o=r[0],a=s&&n.parsePatterns[s]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(a)?y2(a,h=>h.test(o)):_2(a,h=>h.test(o));let l;l=n.valueCallback?n.valueCallback(c):c,l=e.valueCallback?e.valueCallback(l):l;const d=t.slice(o.length);return{value:l,rest:d}}}function _2(n,t){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&t(n[e]))return e}function y2(n,t){for(let e=0;e<n.length;e++)if(t(n[e]))return e}function v2(n){return(t,e={})=>{const s=t.match(n.matchPattern);if(!s)return null;const i=s[0],r=t.match(n.parsePattern);if(!r)return null;let o=n.valueCallback?n.valueCallback(r[0]):r[0];o=e.valueCallback?e.valueCallback(o):o;const a=t.slice(i.length);return{value:o,rest:a}}}const b2=/^(\d+)(th|st|nd|rd)?/i,w2=/\d+/i,x2={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},E2={any:[/^b/i,/^(a|c)/i]},T2={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},I2={any:[/1/i,/2/i,/3/i,/4/i]},A2={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},k2={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},R2={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},P2={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},S2={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},C2={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},D2={ordinalNumber:v2({matchPattern:b2,parsePattern:w2,valueCallback:n=>parseInt(n,10)}),era:sr({matchPatterns:x2,defaultMatchWidth:"wide",parsePatterns:E2,defaultParseWidth:"any"}),quarter:sr({matchPatterns:T2,defaultMatchWidth:"wide",parsePatterns:I2,defaultParseWidth:"any",valueCallback:n=>n+1}),month:sr({matchPatterns:A2,defaultMatchWidth:"wide",parsePatterns:k2,defaultParseWidth:"any"}),day:sr({matchPatterns:R2,defaultMatchWidth:"wide",parsePatterns:P2,defaultParseWidth:"any"}),dayPeriod:sr({matchPatterns:S2,defaultMatchWidth:"any",parsePatterns:C2,defaultParseWidth:"any"})},nb={code:"en-US",formatDistance:n2,formatLong:o2,formatRelative:c2,localize:g2,match:D2,options:{weekStartsOn:0,firstWeekContainsDate:1}};function O2(n,t){const e=Q(n,t==null?void 0:t.in);return Kv(e,eb(e))+1}function sb(n,t){const e=Q(n,t==null?void 0:t.in),s=+Ti(e)-+CD(e);return Math.round(s/Gv)+1}function eh(n,t){var d,h,f,m;const e=Q(n,t==null?void 0:t.in),s=e.getFullYear(),i=zs(),r=(t==null?void 0:t.firstWeekContainsDate)??((h=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??i.firstWeekContainsDate??((m=(f=i.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=Nt((t==null?void 0:t.in)||n,0);o.setFullYear(s+1,0,r),o.setHours(0,0,0,0);const a=rn(o,t),c=Nt((t==null?void 0:t.in)||n,0);c.setFullYear(s,0,r),c.setHours(0,0,0,0);const l=rn(c,t);return+e>=+a?s+1:+e>=+l?s:s-1}function M2(n,t){var a,c,l,d;const e=zs(),s=(t==null?void 0:t.firstWeekContainsDate)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.firstWeekContainsDate)??e.firstWeekContainsDate??((d=(l=e.locale)==null?void 0:l.options)==null?void 0:d.firstWeekContainsDate)??1,i=eh(n,t),r=Nt((t==null?void 0:t.in)||n,0);return r.setFullYear(i,0,s),r.setHours(0,0,0,0),rn(r,t)}function ib(n,t){const e=Q(n,t==null?void 0:t.in),s=+rn(e,t)-+M2(e,t);return Math.round(s/Gv)+1}function ut(n,t){const e=n<0?"-":"",s=Math.abs(n).toString().padStart(t,"0");return e+s}const Nn={y(n,t){const e=n.getFullYear(),s=e>0?e:1-e;return ut(t==="yy"?s%100:s,t.length)},M(n,t){const e=n.getMonth();return t==="M"?String(e+1):ut(e+1,2)},d(n,t){return ut(n.getDate(),t.length)},a(n,t){const e=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h(n,t){return ut(n.getHours()%12||12,t.length)},H(n,t){return ut(n.getHours(),t.length)},m(n,t){return ut(n.getMinutes(),t.length)},s(n,t){return ut(n.getSeconds(),t.length)},S(n,t){const e=t.length,s=n.getMilliseconds(),i=Math.trunc(s*Math.pow(10,e-3));return ut(i,t.length)}},ti={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ng={G:function(n,t,e){const s=n.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(s,{width:"abbreviated"});case"GGGGG":return e.era(s,{width:"narrow"});case"GGGG":default:return e.era(s,{width:"wide"})}},y:function(n,t,e){if(t==="yo"){const s=n.getFullYear(),i=s>0?s:1-s;return e.ordinalNumber(i,{unit:"year"})}return Nn.y(n,t)},Y:function(n,t,e,s){const i=eh(n,s),r=i>0?i:1-i;if(t==="YY"){const o=r%100;return ut(o,2)}return t==="Yo"?e.ordinalNumber(r,{unit:"year"}):ut(r,t.length)},R:function(n,t){const e=Yv(n);return ut(e,t.length)},u:function(n,t){const e=n.getFullYear();return ut(e,t.length)},Q:function(n,t,e){const s=Math.ceil((n.getMonth()+1)/3);switch(t){case"Q":return String(s);case"QQ":return ut(s,2);case"Qo":return e.ordinalNumber(s,{unit:"quarter"});case"QQQ":return e.quarter(s,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(s,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(s,{width:"wide",context:"formatting"})}},q:function(n,t,e){const s=Math.ceil((n.getMonth()+1)/3);switch(t){case"q":return String(s);case"qq":return ut(s,2);case"qo":return e.ordinalNumber(s,{unit:"quarter"});case"qqq":return e.quarter(s,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(s,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(s,{width:"wide",context:"standalone"})}},M:function(n,t,e){const s=n.getMonth();switch(t){case"M":case"MM":return Nn.M(n,t);case"Mo":return e.ordinalNumber(s+1,{unit:"month"});case"MMM":return e.month(s,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(s,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(s,{width:"wide",context:"formatting"})}},L:function(n,t,e){const s=n.getMonth();switch(t){case"L":return String(s+1);case"LL":return ut(s+1,2);case"Lo":return e.ordinalNumber(s+1,{unit:"month"});case"LLL":return e.month(s,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(s,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(s,{width:"wide",context:"standalone"})}},w:function(n,t,e,s){const i=ib(n,s);return t==="wo"?e.ordinalNumber(i,{unit:"week"}):ut(i,t.length)},I:function(n,t,e){const s=sb(n);return t==="Io"?e.ordinalNumber(s,{unit:"week"}):ut(s,t.length)},d:function(n,t,e){return t==="do"?e.ordinalNumber(n.getDate(),{unit:"date"}):Nn.d(n,t)},D:function(n,t,e){const s=O2(n);return t==="Do"?e.ordinalNumber(s,{unit:"dayOfYear"}):ut(s,t.length)},E:function(n,t,e){const s=n.getDay();switch(t){case"E":case"EE":case"EEE":return e.day(s,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(s,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(s,{width:"short",context:"formatting"});case"EEEE":default:return e.day(s,{width:"wide",context:"formatting"})}},e:function(n,t,e,s){const i=n.getDay(),r=(i-s.weekStartsOn+8)%7||7;switch(t){case"e":return String(r);case"ee":return ut(r,2);case"eo":return e.ordinalNumber(r,{unit:"day"});case"eee":return e.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(i,{width:"short",context:"formatting"});case"eeee":default:return e.day(i,{width:"wide",context:"formatting"})}},c:function(n,t,e,s){const i=n.getDay(),r=(i-s.weekStartsOn+8)%7||7;switch(t){case"c":return String(r);case"cc":return ut(r,t.length);case"co":return e.ordinalNumber(r,{unit:"day"});case"ccc":return e.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(i,{width:"narrow",context:"standalone"});case"cccccc":return e.day(i,{width:"short",context:"standalone"});case"cccc":default:return e.day(i,{width:"wide",context:"standalone"})}},i:function(n,t,e){const s=n.getDay(),i=s===0?7:s;switch(t){case"i":return String(i);case"ii":return ut(i,t.length);case"io":return e.ordinalNumber(i,{unit:"day"});case"iii":return e.day(s,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(s,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(s,{width:"short",context:"formatting"});case"iiii":default:return e.day(s,{width:"wide",context:"formatting"})}},a:function(n,t,e){const i=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(n,t,e){const s=n.getHours();let i;switch(s===12?i=ti.noon:s===0?i=ti.midnight:i=s/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(n,t,e){const s=n.getHours();let i;switch(s>=17?i=ti.evening:s>=12?i=ti.afternoon:s>=4?i=ti.morning:i=ti.night,t){case"B":case"BB":case"BBB":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(n,t,e){if(t==="ho"){let s=n.getHours()%12;return s===0&&(s=12),e.ordinalNumber(s,{unit:"hour"})}return Nn.h(n,t)},H:function(n,t,e){return t==="Ho"?e.ordinalNumber(n.getHours(),{unit:"hour"}):Nn.H(n,t)},K:function(n,t,e){const s=n.getHours()%12;return t==="Ko"?e.ordinalNumber(s,{unit:"hour"}):ut(s,t.length)},k:function(n,t,e){let s=n.getHours();return s===0&&(s=24),t==="ko"?e.ordinalNumber(s,{unit:"hour"}):ut(s,t.length)},m:function(n,t,e){return t==="mo"?e.ordinalNumber(n.getMinutes(),{unit:"minute"}):Nn.m(n,t)},s:function(n,t,e){return t==="so"?e.ordinalNumber(n.getSeconds(),{unit:"second"}):Nn.s(n,t)},S:function(n,t){return Nn.S(n,t)},X:function(n,t,e){const s=n.getTimezoneOffset();if(s===0)return"Z";switch(t){case"X":return ig(s);case"XXXX":case"XX":return xs(s);case"XXXXX":case"XXX":default:return xs(s,":")}},x:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"x":return ig(s);case"xxxx":case"xx":return xs(s);case"xxxxx":case"xxx":default:return xs(s,":")}},O:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+sg(s,":");case"OOOO":default:return"GMT"+xs(s,":")}},z:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+sg(s,":");case"zzzz":default:return"GMT"+xs(s,":")}},t:function(n,t,e){const s=Math.trunc(+n/1e3);return ut(s,t.length)},T:function(n,t,e){return ut(+n,t.length)}};function sg(n,t=""){const e=n>0?"-":"+",s=Math.abs(n),i=Math.trunc(s/60),r=s%60;return r===0?e+String(i):e+String(i)+t+ut(r,2)}function ig(n,t){return n%60===0?(n>0?"-":"+")+ut(Math.abs(n)/60,2):xs(n,t)}function xs(n,t=""){const e=n>0?"-":"+",s=Math.abs(n),i=ut(Math.trunc(s/60),2),r=ut(s%60,2);return e+i+t+r}const rg=(n,t)=>{switch(n){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},rb=(n,t)=>{switch(n){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},N2=(n,t)=>{const e=n.match(/(P+)(p+)?/)||[],s=e[1],i=e[2];if(!i)return rg(n,t);let r;switch(s){case"P":r=t.dateTime({width:"short"});break;case"PP":r=t.dateTime({width:"medium"});break;case"PPP":r=t.dateTime({width:"long"});break;case"PPPP":default:r=t.dateTime({width:"full"});break}return r.replace("{{date}}",rg(s,t)).replace("{{time}}",rb(i,t))},Cu={p:rb,P:N2},L2=/^D+$/,V2=/^Y+$/,F2=["D","DD","YY","YYYY"];function ob(n){return L2.test(n)}function ab(n){return V2.test(n)}function Du(n,t,e){const s=B2(n,t,e);if(console.warn(s),F2.includes(n))throw new RangeError(s)}function B2(n,t,e){const s=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${s} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const $2=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,U2=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,j2=/^'([^]*?)'?$/,z2=/''/g,H2=/[a-zA-Z]/;function W2(n,t,e){var d,h,f,m,_,v,b,T;const s=zs(),i=(e==null?void 0:e.locale)??s.locale??nb,r=(e==null?void 0:e.firstWeekContainsDate)??((h=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??s.firstWeekContainsDate??((m=(f=s.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=(e==null?void 0:e.weekStartsOn)??((v=(_=e==null?void 0:e.locale)==null?void 0:_.options)==null?void 0:v.weekStartsOn)??s.weekStartsOn??((T=(b=s.locale)==null?void 0:b.options)==null?void 0:T.weekStartsOn)??0,a=Q(n,e==null?void 0:e.in);if(!Qv(a))throw new RangeError("Invalid time value");let c=t.match(U2).map(I=>{const S=I[0];if(S==="p"||S==="P"){const C=Cu[S];return C(I,i.formatLong)}return I}).join("").match($2).map(I=>{if(I==="''")return{isToken:!1,value:"'"};const S=I[0];if(S==="'")return{isToken:!1,value:q2(I)};if(ng[S])return{isToken:!0,value:I};if(S.match(H2))throw new RangeError("Format string contains an unescaped latin alphabet character `"+S+"`");return{isToken:!1,value:I}});i.localize.preprocessor&&(c=i.localize.preprocessor(a,c));const l={firstWeekContainsDate:r,weekStartsOn:o,locale:i};return c.map(I=>{if(!I.isToken)return I.value;const S=I.value;(!(e!=null&&e.useAdditionalWeekYearTokens)&&ab(S)||!(e!=null&&e.useAdditionalDayOfYearTokens)&&ob(S))&&Du(S,t,String(n));const C=ng[S[0]];return C(a,S,i.localize,l)}).join("")}function q2(n){const t=n.match(j2);return t?t[1].replace(z2,"'"):n}function G2(){return Object.assign({},zs())}function Y2(n,t){const e=Q(n,t==null?void 0:t.in).getDay();return e===0?7:e}function K2(n,t){const e=Q2(t)?new t(0):Nt(t,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function Q2(n){var t;return typeof n=="function"&&((t=n.prototype)==null?void 0:t.constructor)===n}const X2=10;class cb{constructor(){N(this,"subPriority",0)}validate(t,e){return!0}}class J2 extends cb{constructor(t,e,s,i,r){super(),this.value=t,this.validateValue=e,this.setValue=s,this.priority=i,r&&(this.subPriority=r)}validate(t,e){return this.validateValue(t,this.value,e)}set(t,e,s){return this.setValue(t,e,this.value,s)}}class Z2 extends cb{constructor(e,s){super();N(this,"priority",X2);N(this,"subPriority",-1);this.context=e||(i=>Nt(s,i))}set(e,s){return s.timestampIsSet?e:Nt(e,K2(e,this.context))}}class lt{run(t,e,s,i){const r=this.parse(t,e,s,i);return r?{setter:new J2(r.value,this.validate,this.set,this.priority,this.subPriority),rest:r.rest}:null}validate(t,e,s){return!0}}class tO extends lt{constructor(){super(...arguments);N(this,"priority",140);N(this,"incompatibleTokens",["R","u","t","T"])}parse(e,s,i){switch(s){case"G":case"GG":case"GGG":return i.era(e,{width:"abbreviated"})||i.era(e,{width:"narrow"});case"GGGGG":return i.era(e,{width:"narrow"});case"GGGG":default:return i.era(e,{width:"wide"})||i.era(e,{width:"abbreviated"})||i.era(e,{width:"narrow"})}}set(e,s,i){return s.era=i,e.setFullYear(i,0,1),e.setHours(0,0,0,0),e}}const $t={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Ge={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Ut(n,t){return n&&{value:t(n.value),rest:n.rest}}function Rt(n,t){const e=t.match(n);return e?{value:parseInt(e[0],10),rest:t.slice(e[0].length)}:null}function Ye(n,t){const e=t.match(n);if(!e)return null;if(e[0]==="Z")return{value:0,rest:t.slice(1)};const s=e[1]==="+"?1:-1,i=e[2]?parseInt(e[2],10):0,r=e[3]?parseInt(e[3],10):0,o=e[5]?parseInt(e[5],10):0;return{value:s*(i*fo+r*ho+o*RD),rest:t.slice(e[0].length)}}function lb(n){return Rt($t.anyDigitsSigned,n)}function Lt(n,t){switch(n){case 1:return Rt($t.singleDigit,t);case 2:return Rt($t.twoDigits,t);case 3:return Rt($t.threeDigits,t);case 4:return Rt($t.fourDigits,t);default:return Rt(new RegExp("^\\d{1,"+n+"}"),t)}}function nc(n,t){switch(n){case 1:return Rt($t.singleDigitSigned,t);case 2:return Rt($t.twoDigitsSigned,t);case 3:return Rt($t.threeDigitsSigned,t);case 4:return Rt($t.fourDigitsSigned,t);default:return Rt(new RegExp("^-?\\d{1,"+n+"}"),t)}}function nh(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function ub(n,t){const e=t>0,s=e?t:1-t;let i;if(s<=50)i=n||100;else{const r=s+50,o=Math.trunc(r/100)*100,a=n>=r%100;i=n+o-(a?100:0)}return e?i:1-i}function db(n){return n%400===0||n%4===0&&n%100!==0}class eO extends lt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(e,s,i){const r=o=>({year:o,isTwoDigitYear:s==="yy"});switch(s){case"y":return Ut(Lt(4,e),r);case"yo":return Ut(i.ordinalNumber(e,{unit:"year"}),r);default:return Ut(Lt(s.length,e),r)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,i){const r=e.getFullYear();if(i.isTwoDigitYear){const a=ub(i.year,r);return e.setFullYear(a,0,1),e.setHours(0,0,0,0),e}const o=!("era"in s)||s.era===1?i.year:1-i.year;return e.setFullYear(o,0,1),e.setHours(0,0,0,0),e}}class nO extends lt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(e,s,i){const r=o=>({year:o,isTwoDigitYear:s==="YY"});switch(s){case"Y":return Ut(Lt(4,e),r);case"Yo":return Ut(i.ordinalNumber(e,{unit:"year"}),r);default:return Ut(Lt(s.length,e),r)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,i,r){const o=eh(e,r);if(i.isTwoDigitYear){const c=ub(i.year,o);return e.setFullYear(c,0,r.firstWeekContainsDate),e.setHours(0,0,0,0),rn(e,r)}const a=!("era"in s)||s.era===1?i.year:1-i.year;return e.setFullYear(a,0,r.firstWeekContainsDate),e.setHours(0,0,0,0),rn(e,r)}}class sO extends lt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(e,s){return nc(s==="R"?4:s.length,e)}set(e,s,i){const r=Nt(e,0);return r.setFullYear(i,0,4),r.setHours(0,0,0,0),Ti(r)}}class iO extends lt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(e,s){return nc(s==="u"?4:s.length,e)}set(e,s,i){return e.setFullYear(i,0,1),e.setHours(0,0,0,0),e}}class rO extends lt{constructor(){super(...arguments);N(this,"priority",120);N(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,i){switch(s){case"Q":case"QQ":return Lt(s.length,e);case"Qo":return i.ordinalNumber(e,{unit:"quarter"});case"QQQ":return i.quarter(e,{width:"abbreviated",context:"formatting"})||i.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return i.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return i.quarter(e,{width:"wide",context:"formatting"})||i.quarter(e,{width:"abbreviated",context:"formatting"})||i.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=1&&s<=4}set(e,s,i){return e.setMonth((i-1)*3,1),e.setHours(0,0,0,0),e}}class oO extends lt{constructor(){super(...arguments);N(this,"priority",120);N(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,i){switch(s){case"q":case"qq":return Lt(s.length,e);case"qo":return i.ordinalNumber(e,{unit:"quarter"});case"qqq":return i.quarter(e,{width:"abbreviated",context:"standalone"})||i.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return i.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return i.quarter(e,{width:"wide",context:"standalone"})||i.quarter(e,{width:"abbreviated",context:"standalone"})||i.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=1&&s<=4}set(e,s,i){return e.setMonth((i-1)*3,1),e.setHours(0,0,0,0),e}}class aO extends lt{constructor(){super(...arguments);N(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);N(this,"priority",110)}parse(e,s,i){const r=o=>o-1;switch(s){case"M":return Ut(Rt($t.month,e),r);case"MM":return Ut(Lt(2,e),r);case"Mo":return Ut(i.ordinalNumber(e,{unit:"month"}),r);case"MMM":return i.month(e,{width:"abbreviated",context:"formatting"})||i.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return i.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return i.month(e,{width:"wide",context:"formatting"})||i.month(e,{width:"abbreviated",context:"formatting"})||i.month(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=11}set(e,s,i){return e.setMonth(i,1),e.setHours(0,0,0,0),e}}class cO extends lt{constructor(){super(...arguments);N(this,"priority",110);N(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(e,s,i){const r=o=>o-1;switch(s){case"L":return Ut(Rt($t.month,e),r);case"LL":return Ut(Lt(2,e),r);case"Lo":return Ut(i.ordinalNumber(e,{unit:"month"}),r);case"LLL":return i.month(e,{width:"abbreviated",context:"standalone"})||i.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return i.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return i.month(e,{width:"wide",context:"standalone"})||i.month(e,{width:"abbreviated",context:"standalone"})||i.month(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=11}set(e,s,i){return e.setMonth(i,1),e.setHours(0,0,0,0),e}}function lO(n,t,e){const s=Q(n,e==null?void 0:e.in),i=ib(s,e)-t;return s.setDate(s.getDate()-i*7),Q(s,e==null?void 0:e.in)}class uO extends lt{constructor(){super(...arguments);N(this,"priority",100);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(e,s,i){switch(s){case"w":return Rt($t.week,e);case"wo":return i.ordinalNumber(e,{unit:"week"});default:return Lt(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,i,r){return rn(lO(e,i,r),r)}}function dO(n,t,e){const s=Q(n,e==null?void 0:e.in),i=sb(s,e)-t;return s.setDate(s.getDate()-i*7),s}class hO extends lt{constructor(){super(...arguments);N(this,"priority",100);N(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(e,s,i){switch(s){case"I":return Rt($t.week,e);case"Io":return i.ordinalNumber(e,{unit:"week"});default:return Lt(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,i){return Ti(dO(e,i))}}const fO=[31,28,31,30,31,30,31,31,30,31,30,31],pO=[31,29,31,30,31,30,31,31,30,31,30,31];class mO extends lt{constructor(){super(...arguments);N(this,"priority",90);N(this,"subPriority",1);N(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(e,s,i){switch(s){case"d":return Rt($t.date,e);case"do":return i.ordinalNumber(e,{unit:"date"});default:return Lt(s.length,e)}}validate(e,s){const i=e.getFullYear(),r=db(i),o=e.getMonth();return r?s>=1&&s<=pO[o]:s>=1&&s<=fO[o]}set(e,s,i){return e.setDate(i),e.setHours(0,0,0,0),e}}class gO extends lt{constructor(){super(...arguments);N(this,"priority",90);N(this,"subpriority",1);N(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(e,s,i){switch(s){case"D":case"DD":return Rt($t.dayOfYear,e);case"Do":return i.ordinalNumber(e,{unit:"date"});default:return Lt(s.length,e)}}validate(e,s){const i=e.getFullYear();return db(i)?s>=1&&s<=366:s>=1&&s<=365}set(e,s,i){return e.setMonth(0,i),e.setHours(0,0,0,0),e}}function sh(n,t,e){var h,f,m,_;const s=zs(),i=(e==null?void 0:e.weekStartsOn)??((f=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:f.weekStartsOn)??s.weekStartsOn??((_=(m=s.locale)==null?void 0:m.options)==null?void 0:_.weekStartsOn)??0,r=Q(n,e==null?void 0:e.in),o=r.getDay(),c=(t%7+7)%7,l=7-i,d=t<0||t>6?t-(o+l)%7:(c+l)%7-(o+l)%7;return Nc(r,d,e)}class _O extends lt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(e,s,i){switch(s){case"E":case"EE":case"EEE":return i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return i.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,i,r){return e=sh(e,i,r),e.setHours(0,0,0,0),e}}class yO extends lt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(e,s,i,r){const o=a=>{const c=Math.floor((a-1)/7)*7;return(a+r.weekStartsOn+6)%7+c};switch(s){case"e":case"ee":return Ut(Lt(s.length,e),o);case"eo":return Ut(i.ordinalNumber(e,{unit:"day"}),o);case"eee":return i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"eeeee":return i.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,i,r){return e=sh(e,i,r),e.setHours(0,0,0,0),e}}class vO extends lt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(e,s,i,r){const o=a=>{const c=Math.floor((a-1)/7)*7;return(a+r.weekStartsOn+6)%7+c};switch(s){case"c":case"cc":return Ut(Lt(s.length,e),o);case"co":return Ut(i.ordinalNumber(e,{unit:"day"}),o);case"ccc":return i.day(e,{width:"abbreviated",context:"standalone"})||i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"});case"ccccc":return i.day(e,{width:"narrow",context:"standalone"});case"cccccc":return i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return i.day(e,{width:"wide",context:"standalone"})||i.day(e,{width:"abbreviated",context:"standalone"})||i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=6}set(e,s,i,r){return e=sh(e,i,r),e.setHours(0,0,0,0),e}}function bO(n,t,e){const s=Q(n,e==null?void 0:e.in),i=Y2(s,e),r=t-i;return Nc(s,r,e)}class wO extends lt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(e,s,i){const r=o=>o===0?7:o;switch(s){case"i":case"ii":return Lt(s.length,e);case"io":return i.ordinalNumber(e,{unit:"day"});case"iii":return Ut(i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),r);case"iiiii":return Ut(i.day(e,{width:"narrow",context:"formatting"}),r);case"iiiiii":return Ut(i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),r);case"iiii":default:return Ut(i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),r)}}validate(e,s){return s>=1&&s<=7}set(e,s,i){return e=bO(e,i),e.setHours(0,0,0,0),e}}class xO extends lt{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(e,s,i){switch(s){case"a":case"aa":case"aaa":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,i){return e.setHours(nh(i),0,0,0),e}}class EO extends lt{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(e,s,i){switch(s){case"b":case"bb":case"bbb":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,i){return e.setHours(nh(i),0,0,0),e}}class TO extends lt{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["a","b","t","T"])}parse(e,s,i){switch(s){case"B":case"BB":case"BBB":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,i){return e.setHours(nh(i),0,0,0),e}}class IO extends lt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["H","K","k","t","T"])}parse(e,s,i){switch(s){case"h":return Rt($t.hour12h,e);case"ho":return i.ordinalNumber(e,{unit:"hour"});default:return Lt(s.length,e)}}validate(e,s){return s>=1&&s<=12}set(e,s,i){const r=e.getHours()>=12;return r&&i<12?e.setHours(i+12,0,0,0):!r&&i===12?e.setHours(0,0,0,0):e.setHours(i,0,0,0),e}}class AO extends lt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(e,s,i){switch(s){case"H":return Rt($t.hour23h,e);case"Ho":return i.ordinalNumber(e,{unit:"hour"});default:return Lt(s.length,e)}}validate(e,s){return s>=0&&s<=23}set(e,s,i){return e.setHours(i,0,0,0),e}}class kO extends lt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["h","H","k","t","T"])}parse(e,s,i){switch(s){case"K":return Rt($t.hour11h,e);case"Ko":return i.ordinalNumber(e,{unit:"hour"});default:return Lt(s.length,e)}}validate(e,s){return s>=0&&s<=11}set(e,s,i){return e.getHours()>=12&&i<12?e.setHours(i+12,0,0,0):e.setHours(i,0,0,0),e}}class RO extends lt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(e,s,i){switch(s){case"k":return Rt($t.hour24h,e);case"ko":return i.ordinalNumber(e,{unit:"hour"});default:return Lt(s.length,e)}}validate(e,s){return s>=1&&s<=24}set(e,s,i){const r=i<=24?i%24:i;return e.setHours(r,0,0,0),e}}class PO extends lt{constructor(){super(...arguments);N(this,"priority",60);N(this,"incompatibleTokens",["t","T"])}parse(e,s,i){switch(s){case"m":return Rt($t.minute,e);case"mo":return i.ordinalNumber(e,{unit:"minute"});default:return Lt(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,i){return e.setMinutes(i,0,0),e}}class SO extends lt{constructor(){super(...arguments);N(this,"priority",50);N(this,"incompatibleTokens",["t","T"])}parse(e,s,i){switch(s){case"s":return Rt($t.second,e);case"so":return i.ordinalNumber(e,{unit:"second"});default:return Lt(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,i){return e.setSeconds(i,0),e}}class CO extends lt{constructor(){super(...arguments);N(this,"priority",30);N(this,"incompatibleTokens",["t","T"])}parse(e,s){const i=r=>Math.trunc(r*Math.pow(10,-s.length+3));return Ut(Lt(s.length,e),i)}set(e,s,i){return e.setMilliseconds(i),e}}class DO extends lt{constructor(){super(...arguments);N(this,"priority",10);N(this,"incompatibleTokens",["t","T","x"])}parse(e,s){switch(s){case"X":return Ye(Ge.basicOptionalMinutes,e);case"XX":return Ye(Ge.basic,e);case"XXXX":return Ye(Ge.basicOptionalSeconds,e);case"XXXXX":return Ye(Ge.extendedOptionalSeconds,e);case"XXX":default:return Ye(Ge.extended,e)}}set(e,s,i){return s.timestampIsSet?e:Nt(e,e.getTime()-ec(e)-i)}}class OO extends lt{constructor(){super(...arguments);N(this,"priority",10);N(this,"incompatibleTokens",["t","T","X"])}parse(e,s){switch(s){case"x":return Ye(Ge.basicOptionalMinutes,e);case"xx":return Ye(Ge.basic,e);case"xxxx":return Ye(Ge.basicOptionalSeconds,e);case"xxxxx":return Ye(Ge.extendedOptionalSeconds,e);case"xxx":default:return Ye(Ge.extended,e)}}set(e,s,i){return s.timestampIsSet?e:Nt(e,e.getTime()-ec(e)-i)}}class MO extends lt{constructor(){super(...arguments);N(this,"priority",40);N(this,"incompatibleTokens","*")}parse(e){return lb(e)}set(e,s,i){return[Nt(e,i*1e3),{timestampIsSet:!0}]}}class NO extends lt{constructor(){super(...arguments);N(this,"priority",20);N(this,"incompatibleTokens","*")}parse(e){return lb(e)}set(e,s,i){return[Nt(e,i),{timestampIsSet:!0}]}}const LO={G:new tO,y:new eO,Y:new nO,R:new sO,u:new iO,Q:new rO,q:new oO,M:new aO,L:new cO,w:new uO,I:new hO,d:new mO,D:new gO,E:new _O,e:new yO,c:new vO,i:new wO,a:new xO,b:new EO,B:new TO,h:new IO,H:new AO,K:new kO,k:new RO,m:new PO,s:new SO,S:new CO,X:new DO,x:new OO,t:new MO,T:new NO},VO=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,FO=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,BO=/^'([^]*?)'?$/,$O=/''/g,UO=/\S/,jO=/[a-zA-Z]/;function zO(n,t,e,s){var b,T,I,S,C,O,D,E;const i=()=>Nt((s==null?void 0:s.in)||e,NaN),r=G2(),o=(s==null?void 0:s.locale)??r.locale??nb,a=(s==null?void 0:s.firstWeekContainsDate)??((T=(b=s==null?void 0:s.locale)==null?void 0:b.options)==null?void 0:T.firstWeekContainsDate)??r.firstWeekContainsDate??((S=(I=r.locale)==null?void 0:I.options)==null?void 0:S.firstWeekContainsDate)??1,c=(s==null?void 0:s.weekStartsOn)??((O=(C=s==null?void 0:s.locale)==null?void 0:C.options)==null?void 0:O.weekStartsOn)??r.weekStartsOn??((E=(D=r.locale)==null?void 0:D.options)==null?void 0:E.weekStartsOn)??0;if(!t)return n?i():Q(e,s==null?void 0:s.in);const l={firstWeekContainsDate:a,weekStartsOn:c,locale:o},d=[new Z2(s==null?void 0:s.in,e)],h=t.match(FO).map(y=>{const x=y[0];if(x in Cu){const A=Cu[x];return A(y,o.formatLong)}return y}).join("").match(VO),f=[];for(let y of h){!(s!=null&&s.useAdditionalWeekYearTokens)&&ab(y)&&Du(y,t,n),!(s!=null&&s.useAdditionalDayOfYearTokens)&&ob(y)&&Du(y,t,n);const x=y[0],A=LO[x];if(A){const{incompatibleTokens:R}=A;if(Array.isArray(R)){const k=f.find(Z=>R.includes(Z.token)||Z.token===x);if(k)throw new RangeError(`The format string mustn't contain \`${k.fullToken}\` and \`${y}\` at the same time`)}else if(A.incompatibleTokens==="*"&&f.length>0)throw new RangeError(`The format string mustn't contain \`${y}\` and any other token at the same time`);f.push({token:x,fullToken:y});const P=A.run(n,y,o.match,l);if(!P)return i();d.push(P.setter),n=P.rest}else{if(x.match(jO))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");if(y==="''"?y="'":x==="'"&&(y=HO(y)),n.indexOf(y)===0)n=n.slice(y.length);else return i()}}if(n.length>0&&UO.test(n))return i();const m=d.map(y=>y.priority).sort((y,x)=>x-y).filter((y,x,A)=>A.indexOf(y)===x).map(y=>d.filter(x=>x.priority===y).sort((x,A)=>A.subPriority-x.subPriority)).map(y=>y[0]);let _=Q(e,s==null?void 0:s.in);if(isNaN(+_))return i();const v={};for(const y of m){if(!y.validate(_,l))return i();const x=y.set(_,v,l);Array.isArray(x)?(_=x[0],Object.assign(v,x[1])):_=x}return _}function HO(n){return n.match(BO)[1].replace($O,"'")}function WO(n,t){const e=Q(n,t==null?void 0:t.in);return e.setMinutes(0,0,0),e}function qO(n,t){const e=Q(n,t==null?void 0:t.in);return e.setSeconds(0,0),e}function GO(n,t){const e=Q(n,t==null?void 0:t.in);return e.setMilliseconds(0),e}function YO(n,t){const e=()=>Nt(t==null?void 0:t.in,NaN),s=(t==null?void 0:t.additionalDigits)??2,i=JO(n);let r;if(i.date){const l=ZO(i.date,s);r=tM(l.restDateString,l.year)}if(!r||isNaN(+r))return e();const o=+r;let a=0,c;if(i.time&&(a=eM(i.time),isNaN(a)))return e();if(i.timezone){if(c=nM(i.timezone),isNaN(c))return e()}else{const l=new Date(o+a),d=Q(0,t==null?void 0:t.in);return d.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),d.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),d}return Q(o+a+c,t==null?void 0:t.in)}const sa={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},KO=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,QO=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,XO=/^([+-])(\d{2})(?::?(\d{2}))?$/;function JO(n){const t={},e=n.split(sa.dateTimeDelimiter);let s;if(e.length>2)return t;if(/:/.test(e[0])?s=e[0]:(t.date=e[0],s=e[1],sa.timeZoneDelimiter.test(t.date)&&(t.date=n.split(sa.timeZoneDelimiter)[0],s=n.substr(t.date.length,n.length))),s){const i=sa.timezone.exec(s);i?(t.time=s.replace(i[1],""),t.timezone=i[1]):t.time=s}return t}function ZO(n,t){const e=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),s=n.match(e);if(!s)return{year:NaN,restDateString:""};const i=s[1]?parseInt(s[1]):null,r=s[2]?parseInt(s[2]):null;return{year:r===null?i:r*100,restDateString:n.slice((s[1]||s[2]).length)}}function tM(n,t){if(t===null)return new Date(NaN);const e=n.match(KO);if(!e)return new Date(NaN);const s=!!e[4],i=ir(e[1]),r=ir(e[2])-1,o=ir(e[3]),a=ir(e[4]),c=ir(e[5])-1;if(s)return aM(t,a,c)?sM(t,a,c):new Date(NaN);{const l=new Date(0);return!rM(t,r,o)||!oM(t,i)?new Date(NaN):(l.setUTCFullYear(t,r,Math.max(i,o)),l)}}function ir(n){return n?parseInt(n):1}function eM(n){const t=n.match(QO);if(!t)return NaN;const e=Fl(t[1]),s=Fl(t[2]),i=Fl(t[3]);return cM(e,s,i)?e*fo+s*ho+i*1e3:NaN}function Fl(n){return n&&parseFloat(n.replace(",","."))||0}function nM(n){if(n==="Z")return 0;const t=n.match(XO);if(!t)return 0;const e=t[1]==="+"?-1:1,s=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return lM(s,i)?e*(s*fo+i*ho):NaN}function sM(n,t,e){const s=new Date(0);s.setUTCFullYear(n,0,4);const i=s.getUTCDay()||7,r=(t-1)*7+e+1-i;return s.setUTCDate(s.getUTCDate()+r),s}const iM=[31,null,31,30,31,30,31,31,30,31,30,31];function hb(n){return n%400===0||n%4===0&&n%100!==0}function rM(n,t,e){return t>=0&&t<=11&&e>=1&&e<=(iM[t]||(hb(n)?29:28))}function oM(n,t){return t>=1&&t<=(hb(n)?366:365)}function aM(n,t,e){return t>=1&&t<=53&&e>=0&&e<=6}function cM(n,t,e){return n===24?t===0&&e===0:e>=0&&e<60&&t>=0&&t<60&&n>=0&&n<25}function lM(n,t){return t>=0&&t<=59}/*!
 * chartjs-adapter-date-fns v3.0.0
 * https://www.chartjs.org
 * (c) 2022 chartjs-adapter-date-fns Contributors
 * Released under the MIT license
 */const uM={datetime:"MMM d, yyyy, h:mm:ss aaaa",millisecond:"h:mm:ss.SSS aaaa",second:"h:mm:ss aaaa",minute:"h:mm aaaa",hour:"ha",day:"MMM d",week:"PP",month:"MMM yyyy",quarter:"qqq - yyyy",year:"yyyy"};xv._date.override({_id:"date-fns",formats:function(){return uM},parse:function(n,t){if(n===null||typeof n>"u")return null;const e=typeof n;return e==="number"||n instanceof Date?n=Q(n):e==="string"&&(typeof t=="string"?n=zO(n,t,new Date,this.options):n=YO(n,this.options)),Qv(n)?n.getTime():null},format:function(n,t){return W2(n,t,this.options)},add:function(n,t,e){switch(e){case"millisecond":return Zd(n,t);case"second":return MD(n,t);case"minute":return DD(n,t);case"hour":return PD(n,t);case"day":return Nc(n,t);case"week":return ND(n,t);case"month":return Jd(n,t);case"quarter":return OD(n,t);case"year":return LD(n,t);default:return n}},diff:function(n,t,e){switch(e){case"millisecond":return th(n,t);case"second":return HD(n,t);case"minute":return UD(n,t);case"hour":return $D(n,t);case"day":return Xv(n,t);case"week":return WD(n,t);case"month":return tb(n,t);case"quarter":return zD(n,t);case"year":return qD(n,t);default:return 0}},startOf:function(n,t,e){switch(t){case"second":return GO(n);case"minute":return qO(n);case"hour":return WO(n);case"day":return Su(n);case"week":return rn(n);case"isoWeek":return rn(n,{weekStartsOn:+e});case"month":return YD(n);case"quarter":return GD(n);case"year":return eb(n);default:return n}},endOf:function(n,t){switch(t){case"second":return t2(n);case"minute":return JD(n);case"hour":return QD(n);case"day":return Jv(n);case"week":return XD(n);case"month":return Zv(n);case"quarter":return ZD(n);case"year":return KD(n);default:return n}}});const Ln="rgba(255,255,255,0.08)",He="#a1a1aa",le={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};ht.defaults.color="#e5e5e5";ht.defaults.font.family=le.family;ht.defaults.font.weight=le.weight;const _s={renderCategorias:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Ln},ticks:{color:He,font:le}},y:{grid:{color:Ln},ticks:{color:He,font:le}}}}})},renderStatusObra:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:le,padding:12,usePointStyle:!0}}}}})},renderNatureza:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"bar",data:{labels:s,datasets:[{label:"Por Natureza",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:He,font:le}},y:{grid:{color:Ln},ticks:{color:He,font:le,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}}}})},renderCentrosCusto:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e","#0ea5e9","#f59e0b"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:le,padding:12,usePointStyle:!0}}}}})},renderFinancePVAV:(n,t=[],e=[])=>{const s=document.getElementById(n);s&&(s.chart&&s.chart.destroy(),s.chart=new ht(s,{type:"line",data:{datasets:[{label:"Planejado (PV)",data:t,borderColor:"#16a34a",backgroundColor:"rgba(34,197,94,0.12)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}},{label:"Real (AV)",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34,197,94,0.05)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"time",time:{unit:"day"},grid:{color:Ln},ticks:{color:He}},y:{grid:{color:Ln},ticks:{color:He,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}},plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:le,usePointStyle:!0}}}}}))},renderCurvaS:(n,t=[],e=[])=>{const s=document.getElementById(n);s&&(s.chart&&s.chart.destroy(),s.chart=new ht(s,{type:"line",data:{labels:t.map((i,r)=>`Mês ${r+1}`),datasets:[{label:"Planejado",data:t,borderColor:"#a1a1aa",backgroundColor:"transparent",borderWidth:2,borderDash:[5,5],tension:.4,pointRadius:0},{label:"Realizado",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.1)",borderWidth:3,tension:.4,fill:!0,pointRadius:4,pointBackgroundColor:"#22c55e",pointBorderColor:"#121212",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"top",labels:{color:"#e5e5e5",font:le,usePointStyle:!0}},tooltip:{backgroundColor:"#1c1c1e",titleColor:"#e5e5e5",bodyColor:"#a1a1aa",borderColor:"#333333",borderWidth:1,titleFont:le,bodyFont:le}},scales:{x:{grid:{color:Ln},ticks:{color:He,font:le}},y:{grid:{color:Ln},ticks:{color:He,font:le,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}}}}))},renderGastosMensais:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"bar",data:{labels:s.map(r=>{const[o,a]=r.split("-");return`${a}/${o.slice(2)}`}),datasets:[{label:"Gastos Mensais",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:He,font:le}},y:{grid:{color:Ln},ticks:{color:He,font:le,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}}}})}},fb=aR(),og=fb.BASE_URL||"https://apiexterna.diariodeobra.app/v1",dM=()=>{const n=fb.TOKEN||(typeof window<"u"?window.__RDO_API_TOKEN:"");if(n)return n;try{const t=localStorage.getItem("axel_rdo_token");if(t)return t}catch{}return""};async function Bl(n,t={}){const e=dM();if(!e)return console.warn("[RDO] Token não encontrado; defina __RDO_API_CONFIG.TOKEN ou localStorage.axel_rdo_token"),null;const s={...t.headers,token:e,"Content-Type":"application/json"},i=await fetch(`${og}${n}`,{...t,headers:s});if(console.info("[RDO] Request:",`${og}${n}`,"status:",i.status),!i.ok)return console.warn(`Erro na API RDO ao acessar ${n}: ${i.status} ${i.statusText}`),null;const r=await i.json();return console.info("[RDO] Response data size:",Array.isArray(r)?r.length:Object.keys(r||{}).length),r}const hi={getObraByOs:async n=>{const t=await Bl("/obras");if(!Array.isArray(t))return null;const e=String(n||"").trim();if(!e)return null;const s=t.find(o=>String(o._id)===e);if(s)return s;const i=t.find(o=>{const a=(o.nome||"").match(/(\d+)$/);return a&&a[1]===e});if(i)return i;const r=t.find(o=>(o.nome||"").includes(e));return r||null},getRelatoriosByObra:async n=>{const t=await Bl(`/obras/${n}/relatorios`);return Array.isArray(t)?t:[]},getRelatorioDetalhe:async(n,t)=>Bl(`/obras/${n}/relatorios/${t}`),getIntegratedDataForObra:async n=>{const t=await hi.getObraByOs(n);if(!t)return console.warn("[RDO] Obra não localizada para OS:",n),null;console.info("[RDO] Obra encontrada para OS:",n,"->",t._id,t.nome);const e=await hi.getRelatoriosByObra(t._id);if(!e.length)return console.warn("[RDO] Nenhum relatório retornado para obra",t._id),{quantidadeRelatorios:0,totalHoras:"0.00",totalHorasExtras:"0.00",reports:[]};const s=(await Promise.all(e.map(c=>hi.getRelatorioDetalhe(t._id,c._id)))).filter(Boolean);let i=0,r=0;const o=9,a=c=>{if(!c||typeof c!="string")return 0;const[l,d]=c.split(":").map(Number);return(l||0)+(d||0)/60};return s.forEach(c=>{var h,f;(((h=c==null?void 0:c.maoDeObra)==null?void 0:h.padrao)||[]).forEach(m=>{const _=Number(m.quantidade)||0;i+=_,_>o&&(r+=_-o)}),(((f=c==null?void 0:c.maoDeObra)==null?void 0:f.personalizada)||[]).forEach(m=>{const _=a(m.horasTrabalhadas);i+=_,_>o&&(r+=_-o)})}),{quantidadeRelatorios:s.length,totalHoras:i.toFixed(2),totalHorasExtras:r.toFixed(2),reports:s}},processRDOData:(n=[])=>{const t={},e={},s={};let i=0,r=0;const o=new Set,a=9,c={},l=h=>{if(typeof h=="number")return h;if(typeof h=="string"){const[f,m]=h.split(":").map(Number);return(f||0)+(m||0)/60}return 0};n.forEach(h=>{var v,b;const f=h.data||h.createdAt||h.data_inicio||h.dataInicio;if(!f)return;t[f]||(t[f]=0);const m=((v=h==null?void 0:h.maoDeObra)==null?void 0:v.padrao)||[],_=((b=h==null?void 0:h.maoDeObra)==null?void 0:b.personalizada)||[];m.forEach(T=>{const I=Number(T.quantidade)||0,S=Math.max(0,I-a);t[f]+=I;const C=T.funcao||"Outros";e[C]=(e[C]||0)+I,T.funcionario_id&&(s[f]||(s[f]=new Set),s[f].add(T.funcionario_id),o.add(T.funcionario_id));const O=T.nome||T.funcionario||T.descricao||"Técnico";c[O]=(c[O]||0)+I,i+=I,r+=S}),_.forEach(T=>{const I=l(T.horasTrabalhadas),S=Math.max(0,I-a);t[f]+=I;const C=T.funcao||"Outros";e[C]=(e[C]||0)+I,T.funcionario_id&&(s[f]||(s[f]=new Set),s[f].add(T.funcionario_id),o.add(T.funcionario_id));const O=T.nome||T.funcionario||T.descricao||"Técnico";c[O]=(c[O]||0)+I,i+=I,r+=S})});const d={};return Object.keys(s).forEach(h=>{d[h]=s[h].size}),{horasPorDia:t,horasPorFuncao:e,funcionariosPorDia:d,totalHoras:i,totalExtras:r,totalFuncionarios:o.size,mediaHorasDia:i/Math.max(1,Object.keys(t).length),mediaFuncionariosDia:Object.keys(d).length?Object.values(d).reduce((h,f)=>h+f,0)/Object.keys(d).length:0,techHours:c}}},pb=Object.freeze(Object.defineProperty({__proto__:null,RDOService:hi},Symbol.toStringTag,{value:"Module"})),ri={initList:async()=>{et.render(F.createLoader());try{const n=await Ve.getObras();et.render(Ll.renderList(n))}catch(n){console.error(n),et.render(`<div class="text-red-500 p-4">Erro ao carregar obras: ${n.message}</div>`)}},initForm:async(n=null)=>{et.render(F.createLoader());try{let t=null;n&&(t=await Ve.getObraById(n)),et.render(Ll.renderForm(t)),ri.bindFormEvents(n)}catch(t){console.error(t),et.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},initDashboard:async n=>{et.render(F.createLoader());try{const t=await Ve.getObraById(n);if(!t){et.render('<div class="text-red-500 p-4">Obra não encontrada.</div>');return}const e=await Ve.getObraStats(n,!1),s=Number(t.orcamento||0);s>0?(e.economia=s-e.totalGasto,e.curvaPercent=e.totalGasto/s*100):(e.economia=0,e.curvaPercent=0);const i=[];!t.horas_previstas&&!t.horas_extras_previstas&&i.push("Horas da obra não informadas."),!t.data_inicio&&!t.data_prevista_inicio&&i.push("Data de início não informada."),!t.data_fim&&!t.data_prevista_fim&&i.push("Data de término não informada."),s||i.push("Orçamento da obra não informado."),t.numero_os||i.push("Número da OS não informado; integração RDO pode falhar."),e.osNumber=t.numero_os||t.id,e.rdoData={totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},e.alerts=i,et.render(Ll.renderDashboard(t,e)),setTimeout(async()=>{var h;_s.renderCategorias("chart-categorias",e.gastosPorCategoria),_s.renderStatusObra("chart-status-obra",e.porStatus),e.curvaS&&_s.renderCurvaS("chart-curva-s",e.curvaS.planejado,e.curvaS.realizado),e.gastosMensais&&_s.renderGastosMensais("chart-gastos-mensais",e.gastosMensais),e.naturezaTotais&&_s.renderNatureza("chart-natureza",e.naturezaTotais),e.ccTotais&&_s.renderCentrosCusto("chart-cc",e.ccTotais);const{generatePlannedValue:r,generateActualValue:o}=await Br(async()=>{const{generatePlannedValue:f,generateActualValue:m}=await Promise.resolve().then(()=>ED);return{generatePlannedValue:f,generateActualValue:m}},void 0),{COST_PER_HOUR:a,COST_PER_OVERTIME_HOUR:c}=await Br(async()=>{const{COST_PER_HOUR:f,COST_PER_OVERTIME_HOUR:m}=await import("./costs-CbBns5TW.js");return{COST_PER_HOUR:f,COST_PER_OVERTIME_HOUR:m}},[]),l=r({data_inicio:t.data_inicio,data_prevista_fim:t.data_prevista_fim,orcamento:t.orcamento}),d=o(e.comprasRecentes||[],((h=e.rdoData)==null?void 0:h.horasPorDia)||{},a,c);(l.length||d.length)&&_s.renderFinancePVAV("chart-finance-pvav",l,d);try{const f=t.numero_os||t.numeroOS||t.id;if(!f)e.alerts.push("Número da OS não informado; integração RDO pode falhar.");else{console.info("[RDO] Buscando dados para OS:",f);const m=await hi.getIntegratedDataForObra(f);if(m&&m.reports){const _=hi.processRDOData(m.reports);if(_){e.rdoData=_,e.rdoOk=!0,e.alerts=(e.alerts||[]).filter(b=>!b.toLowerCase().includes("rdo"));const v=(b,T)=>{const I=document.getElementById(b);I&&(I.textContent=T)};v("kpi-rdo-total",_.totalHoras.toFixed(1)),v("kpi-rdo-media-dia",_.mediaHorasDia.toFixed(1)),v("kpi-rdo-func",String(_.totalFuncionarios||0)),v("kpi-rdo-media-func-dia",_.mediaFuncionariosDia.toFixed(1)),_.totalHoras>0?(Vt.renderHorasPorDia("chart-rdo-horas",_.horasPorDia),Vt.renderHorasPorFuncao("chart-rdo-funcao",_.horasPorFuncao),Vt.renderFuncionariosPorDia("chart-rdo-funcionarios",_.funcionariosPorDia)):(e.alerts.push("RDO sem horas registradas para esta OS."),Vt.renderEmpty("chart-rdo-horas"),Vt.renderEmpty("chart-rdo-funcao"),Vt.renderEmpty("chart-rdo-funcionarios"))}}else e.alerts.push("Sem conexão com RDO ou OS não encontrada."),e.rdoData=e.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},Vt.renderEmpty("chart-rdo-horas"),Vt.renderEmpty("chart-rdo-funcao"),Vt.renderEmpty("chart-rdo-funcionarios")}}catch(f){console.warn("Erro ao carregar dados RDO (legacy):",(f==null?void 0:f.message)||f),e.alerts.push("Falha ao carregar dados RDO."),e.rdoData=e.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},Vt.renderEmpty("chart-rdo-horas"),Vt.renderEmpty("chart-rdo-funcao"),Vt.renderEmpty("chart-rdo-funcionarios")}},100)}catch(t){console.error(t),et.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},bindFormEvents:n=>{const t=document.getElementById("form-obra");t.addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("btn-submit");try{s.disabled=!0,s.innerHTML=F.createLoader();const i=new FormData(t),r=Object.fromEntries(i.entries());r.orcamento&&(r.orcamento=Number(r.orcamento)),r.horas_previstas&&(r.horas_previstas=Number(r.horas_previstas)),r.horas_extras_previstas&&(r.horas_extras_previstas=Number(r.horas_extras_previstas)),r.obra_filha=t.obra_filha.checked,n?(await Ve.updateObra(n,r),F.createToast("Obra atualizada com sucesso!")):(await Ve.createObra(r),F.createToast("Obra criada com sucesso!")),xt.navigate("/obras")}catch(i){console.error(i),F.createToast("Erro ao salvar: "+i.message,"error"),s.disabled=!1,s.innerHTML=`<span>${n?"Salvar Alterações":"Criar Obra"}</span>`}})}},hM={renderMenu:()=>`
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
    `},fM={init:async()=>{et.render(hM.renderMenu())}},pM={render:(n=[])=>`
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
    `},Ou={init:async()=>{const n=await Ea.list();et.render(pM.render(n)),Ou.bind()},bind:()=>{const n=document.getElementById("fornecedor-form"),t=document.getElementById("btn-novo-fornecedor"),e=document.getElementById("btn-salvar-fornecedor"),s=document.getElementById("btn-cancelar-fornecedor"),i=document.querySelector("#fornecedor-table");t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden"));let r=null;i==null||i.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(r=a.dataset.id,document.getElementById("forn-nome").value=a.dataset.nome||"",document.getElementById("forn-email").value=a.dataset.email||"",document.getElementById("forn-telefone").value=a.dataset.telefone||"",document.getElementById("forn-cnpj").value=a.dataset.cnpj||"",n==null||n.classList.remove("hidden"))}),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("forn-nome").value,email:document.getElementById("forn-email").value,telefone:document.getElementById("forn-telefone").value,cnpj:document.getElementById("forn-cnpj").value};r?await Ea.update(r,o):await Ea.create(o),Ou.init()})}},mM={render:(n=[])=>`
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
    `},$l={list:async()=>(await _t(pt(Y,"centrosCusto"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await Pi(pt(Y,"centrosCusto"),n)},update:async(n,t)=>{await sn(ie(Y,"centrosCusto",n),t)}},Mu={init:async()=>{const n=await $l.list();et.render(mM.render(n)),Mu.bind()},bind:()=>{const n=document.getElementById("cc-form"),t=document.getElementById("btn-novo-cc"),e=document.getElementById("btn-salvar-cc"),s=document.getElementById("btn-cancelar-cc"),i=document.getElementById("cc-table");let r=null;t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden")),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("cc-nome").value,codigo:document.getElementById("cc-codigo").value};r?await $l.update(r,o):await $l.create(o),Mu.init()}),i==null||i.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(r=a.dataset.id,document.getElementById("cc-nome").value=a.dataset.nome||"",document.getElementById("cc-codigo").value=a.dataset.codigo||"",n==null||n.classList.remove("hidden"))})}},gM={render:(n=[])=>`
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
    `},Nu={init:async()=>{const n=await Ta.list();et.render(gM.render(n)),Nu.bind()},bind:()=>{const n=document.getElementById("comprador-form"),t=document.getElementById("btn-novo-comprador"),e=document.getElementById("btn-salvar-comprador"),s=document.getElementById("btn-cancelar-comprador"),i=document.getElementById("compr-table");let r=null;t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden")),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("compr-nome").value,email:document.getElementById("compr-email").value};r?await Ta.update(r,o):await Ta.create(o),Nu.init()}),i==null||i.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(r=a.dataset.id,document.getElementById("compr-nome").value=a.dataset.nome||"",document.getElementById("compr-email").value=a.dataset.email||"",n==null||n.classList.remove("hidden"))})}},ag={renderBell:(n=0)=>`
            <button id="notifications-bell" class="relative p-2 rounded-lg hover:bg-surface transition-colors">
                ${Zt.bell}
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
        `},De={notifications:[],unreadCount:0,init:async()=>{yt.state.currentUser&&(await De.load(),De.render(),De.bindEvents(),setInterval(()=>De.load(),12e4))},load:async()=>{const n=yt.state.currentUser;De.notifications=await Za.getByUser(n.uid,20),De.unreadCount=De.notifications.filter(t=>!t.lida).length,De.render()},render:()=>{const n=document.getElementById("notifications-container");if(!n)return;n.innerHTML=ag.renderBell(De.unreadCount);const t=document.createElement("div");t.className="relative",t.innerHTML=ag.renderDropdown(De.notifications),n.appendChild(t)},bindEvents:()=>{document.addEventListener("click",n=>{const t=document.getElementById("notifications-bell"),e=document.getElementById("notifications-dropdown");t&&t.contains(n.target)?e==null||e.classList.toggle("hidden"):e&&!e.contains(n.target)&&e.classList.add("hidden")}),document.addEventListener("click",async n=>{if(n.target.id==="mark-all-read"){const t=yt.state.currentUser;await Za.markAllAsRead(t.uid),await De.load()}})}};console.log("[Main] Inicializando aplicação...");const _M=async()=>{try{await uR(),console.log("[Main] Firebase inicializado."),yt.applyTheme(yt.state.currentTheme||"dark"),await Ha.init(),yt.state.currentUser&&await De.init(),xt.init(),xt.on("/",qv.init),xt.on("/login",Ap.initLogin),xt.on("/forgot-password",Ap.initForgotPassword),xt.on("/compras",tc.init),xt.on("/relatorios",X.init),xt.on("/configuracoes",Pu.init),xt.on("/compras/:id/editar",({id:t})=>tc.initEdit(t)),xt.on("/cadastros",fM.init),xt.on("/cadastros/fornecedores",Ou.init),xt.on("/cadastros/centros-custo",Mu.init),xt.on("/cadastros/compradores",Nu.init),xt.on("/obras",ri.initList),xt.on("/obras/nova",()=>ri.initForm()),xt.on("/obras/:id",({id:t})=>ri.initDashboard(t)),xt.on("/obras/:id/dashboard",({id:t})=>ri.initDashboard(t)),xt.on("/obras/:id/editar",({id:t})=>ri.initForm(t)),xt.handleRoute();const n=document.getElementById("loader");n&&n.remove()}catch(n){console.error("[Main] Erro fatal:",n),document.body.innerHTML=`<div class="p-10 text-red-600">Erro fatal: ${n.message}</div>`}};_M();
