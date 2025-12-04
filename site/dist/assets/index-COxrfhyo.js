var Kb=Object.defineProperty;var Qb=(n,t,e)=>t in n?Kb(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var N=(n,t,e)=>Qb(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();var af={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Xb=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const i=n[e++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[e++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[e++],o=n[e++],a=n[e++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[e++],o=n[e++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},hg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),s.push(e[d],e[h],e[f],e[m])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(dg(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Xb(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const l=i<n.length?e[n.charAt(i)]:64;++i;const h=i<n.length?e[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new Jb;const f=r<<2|a>>4;if(s.push(f),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Jb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zb=function(n){const t=dg(n);return hg.encodeByteArray(t,!0)},Sa=function(n){return Zb(n).replace(/\./g,"")},fg=function(n){try{return hg.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function tx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ex=()=>tx().__FIREBASE_DEFAULTS__,nx=()=>{if(typeof process>"u"||typeof af>"u")return;const n=af.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sx=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&fg(n[1]);return t&&JSON.parse(t)},ac=()=>{try{return ex()||nx()||sx()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},pg=n=>{var t,e;return(e=(t=ac())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},mg=n=>{const t=pg(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},gg=()=>{var n;return(n=ac())===null||n===void 0?void 0:n.config},_g=n=>{var t;return(t=ac())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
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
 */function yg(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Sa(JSON.stringify(e)),Sa(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function ox(){var n;const t=(n=ac())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ax(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cx(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function lx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ux(){const n=be();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function dx(){return!ox()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hx(){try{return typeof indexedDB=="object"}catch{return!1}}function fx(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px="FirebaseError";class dn extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=px,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,no.prototype.create)}}class no{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?mx(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dn(i,a,s)}}function mx(n,t){return n.replace(gx,(e,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const gx=/\{\$([^}]+)}/g;function _x(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Ca(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const i of e){if(!s.includes(i))return!1;const r=n[i],o=t[i];if(cf(r)&&cf(o)){if(!Ca(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!e.includes(i))return!1;return!0}function cf(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function fr(n){const t={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}}),t}function pr(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function yx(n,t){const e=new vx(n,t);return e.subscribe.bind(e)}class vx{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let i;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");bx(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:s},i.next===void 0&&(i.next=ll),i.error===void 0&&(i.error=ll),i.complete===void 0&&(i.complete=ll);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bx(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function ll(){}/**
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
 */function zt(n){return n&&n._delegate?n._delegate:n}class es{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const xs="[DEFAULT]";/**
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
 */class xx{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new ix;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ex(t))try{this.getOrInitializeService({instanceIdentifier:xs})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=xs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=xs){return this.instances.has(t)}getOptions(t=xs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,e){var s;const i=this.normalizeInstanceIdentifier(e),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const i of s)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:wx(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=xs){return this.component?this.component.multipleInstances?t:xs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wx(n){return n===xs?void 0:n}function Ex(n){return n.instantiationMode==="EAGER"}/**
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
 */class Tx{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new xx(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(lt||(lt={}));const Ix={debug:lt.DEBUG,verbose:lt.VERBOSE,info:lt.INFO,warn:lt.WARN,error:lt.ERROR,silent:lt.SILENT},Ax=lt.INFO,kx={[lt.DEBUG]:"log",[lt.VERBOSE]:"log",[lt.INFO]:"info",[lt.WARN]:"warn",[lt.ERROR]:"error"},Sx=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),i=kx[t];if(i)console[i](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Bu{constructor(t){this.name=t,this._logLevel=Ax,this._logHandler=Sx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in lt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ix[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,lt.DEBUG,...t),this._logHandler(this,lt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,lt.VERBOSE,...t),this._logHandler(this,lt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,lt.INFO,...t),this._logHandler(this,lt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,lt.WARN,...t),this._logHandler(this,lt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,lt.ERROR,...t),this._logHandler(this,lt.ERROR,...t)}}const Cx=(n,t)=>t.some(e=>n instanceof e);let lf,uf;function Rx(){return lf||(lf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Px(){return uf||(uf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vg=new WeakMap,Hl=new WeakMap,bg=new WeakMap,ul=new WeakMap,Uu=new WeakMap;function Dx(n){const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(Qn(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&vg.set(e,n)}).catch(()=>{}),Uu.set(t,n),t}function Mx(n){if(Hl.has(n))return;const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Hl.set(n,t)}let ql={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Hl.get(n);if(t==="objectStoreNames")return n.objectStoreNames||bg.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Qn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Ox(n){ql=n(ql)}function Nx(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(dl(this),t,...e);return bg.set(s,t.sort?t.sort():[t]),Qn(s)}:Px().includes(n)?function(...t){return n.apply(dl(this),t),Qn(vg.get(this))}:function(...t){return Qn(n.apply(dl(this),t))}}function Lx(n){return typeof n=="function"?Nx(n):(n instanceof IDBTransaction&&Mx(n),Cx(n,Rx())?new Proxy(n,ql):n)}function Qn(n){if(n instanceof IDBRequest)return Dx(n);if(ul.has(n))return ul.get(n);const t=Lx(n);return t!==n&&(ul.set(n,t),Uu.set(t,n)),t}const dl=n=>Uu.get(n);function Vx(n,t,{blocked:e,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,t),a=Qn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Qn(o.result),c.oldVersion,c.newVersion,Qn(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Fx=["get","getKey","getAll","getAllKeys","count"],$x=["put","add","delete","clear"],hl=new Map;function df(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(hl.get(t))return hl.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,i=$x.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Fx.includes(e)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),i&&c.done]))[0]};return hl.set(t,r),r}Ox(n=>({...n,get:(t,e,s)=>df(t,e)||n.get(t,e,s),has:(t,e)=>!!df(t,e)||n.has(t,e)}));/**
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
 */class Bx{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ux(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function Ux(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Wl="@firebase/app",hf="0.10.13";/**
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
 */const Sn=new Bu("@firebase/app"),jx="@firebase/app-compat",zx="@firebase/analytics-compat",Hx="@firebase/analytics",qx="@firebase/app-check-compat",Wx="@firebase/app-check",Gx="@firebase/auth",Yx="@firebase/auth-compat",Kx="@firebase/database",Qx="@firebase/data-connect",Xx="@firebase/database-compat",Jx="@firebase/functions",Zx="@firebase/functions-compat",t0="@firebase/installations",e0="@firebase/installations-compat",n0="@firebase/messaging",s0="@firebase/messaging-compat",i0="@firebase/performance",r0="@firebase/performance-compat",o0="@firebase/remote-config",a0="@firebase/remote-config-compat",c0="@firebase/storage",l0="@firebase/storage-compat",u0="@firebase/firestore",d0="@firebase/vertexai-preview",h0="@firebase/firestore-compat",f0="firebase",p0="10.14.1";/**
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
 */const Gl="[DEFAULT]",m0={[Wl]:"fire-core",[jx]:"fire-core-compat",[Hx]:"fire-analytics",[zx]:"fire-analytics-compat",[Wx]:"fire-app-check",[qx]:"fire-app-check-compat",[Gx]:"fire-auth",[Yx]:"fire-auth-compat",[Kx]:"fire-rtdb",[Qx]:"fire-data-connect",[Xx]:"fire-rtdb-compat",[Jx]:"fire-fn",[Zx]:"fire-fn-compat",[t0]:"fire-iid",[e0]:"fire-iid-compat",[n0]:"fire-fcm",[s0]:"fire-fcm-compat",[i0]:"fire-perf",[r0]:"fire-perf-compat",[o0]:"fire-rc",[a0]:"fire-rc-compat",[c0]:"fire-gcs",[l0]:"fire-gcs-compat",[u0]:"fire-fst",[h0]:"fire-fst-compat",[d0]:"fire-vertex","fire-js":"fire-js",[f0]:"fire-js-all"};/**
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
 */const Ra=new Map,g0=new Map,Yl=new Map;function ff(n,t){try{n.container.addComponent(t)}catch(e){Sn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Ns(n){const t=n.name;if(Yl.has(t))return Sn.debug(`There were multiple attempts to register component ${t}.`),!1;Yl.set(t,n);for(const e of Ra.values())ff(e,n);for(const e of g0.values())ff(e,n);return!0}function cc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function vn(n){return n.settings!==void 0}/**
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
 */const _0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new no("app","Firebase",_0);/**
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
 */class y0{constructor(t,e,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
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
 */const zs=p0;function xg(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Gl,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw Xn.create("bad-app-name",{appName:String(i)});if(e||(e=gg()),!e)throw Xn.create("no-options");const r=Ra.get(i);if(r){if(Ca(e,r.options)&&Ca(s,r.config))return r;throw Xn.create("duplicate-app",{appName:i})}const o=new Tx(i);for(const c of Yl.values())o.addComponent(c);const a=new y0(e,s,o);return Ra.set(i,a),a}function ju(n=Gl){const t=Ra.get(n);if(!t&&n===Gl&&gg())return xg();if(!t)throw Xn.create("no-app",{appName:n});return t}function en(n,t,e){var s;let i=(s=m0[n])!==null&&s!==void 0?s:n;e&&(i+=`-${e}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Sn.warn(a.join(" "));return}Ns(new es(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const v0="firebase-heartbeat-database",b0=1,Vr="firebase-heartbeat-store";let fl=null;function wg(){return fl||(fl=Vx(v0,b0,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Vr)}catch(e){console.warn(e)}}}}).catch(n=>{throw Xn.create("idb-open",{originalErrorMessage:n.message})})),fl}async function x0(n){try{const e=(await wg()).transaction(Vr),s=await e.objectStore(Vr).get(Eg(n));return await e.done,s}catch(t){if(t instanceof dn)Sn.warn(t.message);else{const e=Xn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Sn.warn(e.message)}}}async function pf(n,t){try{const s=(await wg()).transaction(Vr,"readwrite");await s.objectStore(Vr).put(t,Eg(n)),await s.done}catch(e){if(e instanceof dn)Sn.warn(e.message);else{const s=Xn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(s.message)}}}function Eg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const w0=1024,E0=30*24*60*60*1e3;class T0{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new A0(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=mf();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=E0}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Sn.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mf(),{heartbeatsToSend:s,unsentEntries:i}=I0(this._heartbeatsCache.heartbeats),r=Sa(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Sn.warn(e),""}}}function mf(){return new Date().toISOString().substring(0,10)}function I0(n,t=w0){const e=[];let s=n.slice();for(const i of n){const r=e.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),gf(e)>t){r.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),gf(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class A0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hx()?fx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await x0(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return pf(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return pf(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function gf(n){return Sa(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function k0(n){Ns(new es("platform-logger",t=>new Bx(t),"PRIVATE")),Ns(new es("heartbeat",t=>new T0(t),"PRIVATE")),en(Wl,hf,n),en(Wl,hf,"esm2017"),en("fire-js","")}k0("");var S0="firebase",C0="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(S0,C0,"app");var _f=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ss,Tg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,b){function x(){}x.prototype=b.prototype,w.D=b.prototype,w.prototype=new x,w.prototype.constructor=w,w.C=function(A,S,R){for(var I=Array(arguments.length-2),U=2;U<arguments.length;U++)I[U-2]=arguments[U];return b.prototype[S].apply(A,I)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,e),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,b,x){x||(x=0);var A=Array(16);if(typeof b=="string")for(var S=0;16>S;++S)A[S]=b.charCodeAt(x++)|b.charCodeAt(x++)<<8|b.charCodeAt(x++)<<16|b.charCodeAt(x++)<<24;else for(S=0;16>S;++S)A[S]=b[x++]|b[x++]<<8|b[x++]<<16|b[x++]<<24;b=w.g[0],x=w.g[1],S=w.g[2];var R=w.g[3],I=b+(R^x&(S^R))+A[0]+3614090360&4294967295;b=x+(I<<7&4294967295|I>>>25),I=R+(S^b&(x^S))+A[1]+3905402710&4294967295,R=b+(I<<12&4294967295|I>>>20),I=S+(x^R&(b^x))+A[2]+606105819&4294967295,S=R+(I<<17&4294967295|I>>>15),I=x+(b^S&(R^b))+A[3]+3250441966&4294967295,x=S+(I<<22&4294967295|I>>>10),I=b+(R^x&(S^R))+A[4]+4118548399&4294967295,b=x+(I<<7&4294967295|I>>>25),I=R+(S^b&(x^S))+A[5]+1200080426&4294967295,R=b+(I<<12&4294967295|I>>>20),I=S+(x^R&(b^x))+A[6]+2821735955&4294967295,S=R+(I<<17&4294967295|I>>>15),I=x+(b^S&(R^b))+A[7]+4249261313&4294967295,x=S+(I<<22&4294967295|I>>>10),I=b+(R^x&(S^R))+A[8]+1770035416&4294967295,b=x+(I<<7&4294967295|I>>>25),I=R+(S^b&(x^S))+A[9]+2336552879&4294967295,R=b+(I<<12&4294967295|I>>>20),I=S+(x^R&(b^x))+A[10]+4294925233&4294967295,S=R+(I<<17&4294967295|I>>>15),I=x+(b^S&(R^b))+A[11]+2304563134&4294967295,x=S+(I<<22&4294967295|I>>>10),I=b+(R^x&(S^R))+A[12]+1804603682&4294967295,b=x+(I<<7&4294967295|I>>>25),I=R+(S^b&(x^S))+A[13]+4254626195&4294967295,R=b+(I<<12&4294967295|I>>>20),I=S+(x^R&(b^x))+A[14]+2792965006&4294967295,S=R+(I<<17&4294967295|I>>>15),I=x+(b^S&(R^b))+A[15]+1236535329&4294967295,x=S+(I<<22&4294967295|I>>>10),I=b+(S^R&(x^S))+A[1]+4129170786&4294967295,b=x+(I<<5&4294967295|I>>>27),I=R+(x^S&(b^x))+A[6]+3225465664&4294967295,R=b+(I<<9&4294967295|I>>>23),I=S+(b^x&(R^b))+A[11]+643717713&4294967295,S=R+(I<<14&4294967295|I>>>18),I=x+(R^b&(S^R))+A[0]+3921069994&4294967295,x=S+(I<<20&4294967295|I>>>12),I=b+(S^R&(x^S))+A[5]+3593408605&4294967295,b=x+(I<<5&4294967295|I>>>27),I=R+(x^S&(b^x))+A[10]+38016083&4294967295,R=b+(I<<9&4294967295|I>>>23),I=S+(b^x&(R^b))+A[15]+3634488961&4294967295,S=R+(I<<14&4294967295|I>>>18),I=x+(R^b&(S^R))+A[4]+3889429448&4294967295,x=S+(I<<20&4294967295|I>>>12),I=b+(S^R&(x^S))+A[9]+568446438&4294967295,b=x+(I<<5&4294967295|I>>>27),I=R+(x^S&(b^x))+A[14]+3275163606&4294967295,R=b+(I<<9&4294967295|I>>>23),I=S+(b^x&(R^b))+A[3]+4107603335&4294967295,S=R+(I<<14&4294967295|I>>>18),I=x+(R^b&(S^R))+A[8]+1163531501&4294967295,x=S+(I<<20&4294967295|I>>>12),I=b+(S^R&(x^S))+A[13]+2850285829&4294967295,b=x+(I<<5&4294967295|I>>>27),I=R+(x^S&(b^x))+A[2]+4243563512&4294967295,R=b+(I<<9&4294967295|I>>>23),I=S+(b^x&(R^b))+A[7]+1735328473&4294967295,S=R+(I<<14&4294967295|I>>>18),I=x+(R^b&(S^R))+A[12]+2368359562&4294967295,x=S+(I<<20&4294967295|I>>>12),I=b+(x^S^R)+A[5]+4294588738&4294967295,b=x+(I<<4&4294967295|I>>>28),I=R+(b^x^S)+A[8]+2272392833&4294967295,R=b+(I<<11&4294967295|I>>>21),I=S+(R^b^x)+A[11]+1839030562&4294967295,S=R+(I<<16&4294967295|I>>>16),I=x+(S^R^b)+A[14]+4259657740&4294967295,x=S+(I<<23&4294967295|I>>>9),I=b+(x^S^R)+A[1]+2763975236&4294967295,b=x+(I<<4&4294967295|I>>>28),I=R+(b^x^S)+A[4]+1272893353&4294967295,R=b+(I<<11&4294967295|I>>>21),I=S+(R^b^x)+A[7]+4139469664&4294967295,S=R+(I<<16&4294967295|I>>>16),I=x+(S^R^b)+A[10]+3200236656&4294967295,x=S+(I<<23&4294967295|I>>>9),I=b+(x^S^R)+A[13]+681279174&4294967295,b=x+(I<<4&4294967295|I>>>28),I=R+(b^x^S)+A[0]+3936430074&4294967295,R=b+(I<<11&4294967295|I>>>21),I=S+(R^b^x)+A[3]+3572445317&4294967295,S=R+(I<<16&4294967295|I>>>16),I=x+(S^R^b)+A[6]+76029189&4294967295,x=S+(I<<23&4294967295|I>>>9),I=b+(x^S^R)+A[9]+3654602809&4294967295,b=x+(I<<4&4294967295|I>>>28),I=R+(b^x^S)+A[12]+3873151461&4294967295,R=b+(I<<11&4294967295|I>>>21),I=S+(R^b^x)+A[15]+530742520&4294967295,S=R+(I<<16&4294967295|I>>>16),I=x+(S^R^b)+A[2]+3299628645&4294967295,x=S+(I<<23&4294967295|I>>>9),I=b+(S^(x|~R))+A[0]+4096336452&4294967295,b=x+(I<<6&4294967295|I>>>26),I=R+(x^(b|~S))+A[7]+1126891415&4294967295,R=b+(I<<10&4294967295|I>>>22),I=S+(b^(R|~x))+A[14]+2878612391&4294967295,S=R+(I<<15&4294967295|I>>>17),I=x+(R^(S|~b))+A[5]+4237533241&4294967295,x=S+(I<<21&4294967295|I>>>11),I=b+(S^(x|~R))+A[12]+1700485571&4294967295,b=x+(I<<6&4294967295|I>>>26),I=R+(x^(b|~S))+A[3]+2399980690&4294967295,R=b+(I<<10&4294967295|I>>>22),I=S+(b^(R|~x))+A[10]+4293915773&4294967295,S=R+(I<<15&4294967295|I>>>17),I=x+(R^(S|~b))+A[1]+2240044497&4294967295,x=S+(I<<21&4294967295|I>>>11),I=b+(S^(x|~R))+A[8]+1873313359&4294967295,b=x+(I<<6&4294967295|I>>>26),I=R+(x^(b|~S))+A[15]+4264355552&4294967295,R=b+(I<<10&4294967295|I>>>22),I=S+(b^(R|~x))+A[6]+2734768916&4294967295,S=R+(I<<15&4294967295|I>>>17),I=x+(R^(S|~b))+A[13]+1309151649&4294967295,x=S+(I<<21&4294967295|I>>>11),I=b+(S^(x|~R))+A[4]+4149444226&4294967295,b=x+(I<<6&4294967295|I>>>26),I=R+(x^(b|~S))+A[11]+3174756917&4294967295,R=b+(I<<10&4294967295|I>>>22),I=S+(b^(R|~x))+A[2]+718787259&4294967295,S=R+(I<<15&4294967295|I>>>17),I=x+(R^(S|~b))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+b&4294967295,w.g[1]=w.g[1]+(S+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+S&4294967295,w.g[3]=w.g[3]+R&4294967295}s.prototype.u=function(w,b){b===void 0&&(b=w.length);for(var x=b-this.blockSize,A=this.B,S=this.h,R=0;R<b;){if(S==0)for(;R<=x;)i(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<b;)if(A[S++]=w.charCodeAt(R++),S==this.blockSize){i(this,A),S=0;break}}else for(;R<b;)if(A[S++]=w[R++],S==this.blockSize){i(this,A),S=0;break}}this.h=S,this.o+=b},s.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var b=1;b<w.length-8;++b)w[b]=0;var x=8*this.o;for(b=w.length-8;b<w.length;++b)w[b]=x&255,x/=256;for(this.u(w),w=Array(16),b=x=0;4>b;++b)for(var A=0;32>A;A+=8)w[x++]=this.g[b]>>>A&255;return w};function r(w,b){var x=a;return Object.prototype.hasOwnProperty.call(x,w)?x[w]:x[w]=b(w)}function o(w,b){this.h=b;for(var x=[],A=!0,S=w.length-1;0<=S;S--){var R=w[S]|0;A&&R==b||(x[S]=R,A=!1)}this.g=x}var a={};function c(w){return-128<=w&&128>w?r(w,function(b){return new o([b|0],0>b?-1:0)}):new o([w|0],0>w?-1:0)}function l(w){if(isNaN(w)||!isFinite(w))return h;if(0>w)return v(l(-w));for(var b=[],x=1,A=0;w>=x;A++)b[A]=w/x|0,x*=4294967296;return new o(b,0)}function d(w,b){if(w.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(w.charAt(0)=="-")return v(d(w.substring(1),b));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=l(Math.pow(b,8)),A=h,S=0;S<w.length;S+=8){var R=Math.min(8,w.length-S),I=parseInt(w.substring(S,S+R),b);8>R?(R=l(Math.pow(b,R)),A=A.j(R).add(l(I))):(A=A.j(x),A=A.add(l(I)))}return A}var h=c(0),f=c(1),m=c(16777216);n=o.prototype,n.m=function(){if(y(this))return-v(this).m();for(var w=0,b=1,x=0;x<this.g.length;x++){var A=this.i(x);w+=(0<=A?A:4294967296+A)*b,b*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(g(this))return"0";if(y(this))return"-"+v(this).toString(w);for(var b=l(Math.pow(w,6)),x=this,A="";;){var S=P(x,b).g;x=T(x,S.j(b));var R=((0<x.g.length?x.g[0]:x.h)>>>0).toString(w);if(x=S,g(x))return R+A;for(;6>R.length;)R="0"+R;A=R+A}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function g(w){if(w.h!=0)return!1;for(var b=0;b<w.g.length;b++)if(w.g[b]!=0)return!1;return!0}function y(w){return w.h==-1}n.l=function(w){return w=T(this,w),y(w)?-1:g(w)?0:1};function v(w){for(var b=w.g.length,x=[],A=0;A<b;A++)x[A]=~w.g[A];return new o(x,~w.h).add(f)}n.abs=function(){return y(this)?v(this):this},n.add=function(w){for(var b=Math.max(this.g.length,w.g.length),x=[],A=0,S=0;S<=b;S++){var R=A+(this.i(S)&65535)+(w.i(S)&65535),I=(R>>>16)+(this.i(S)>>>16)+(w.i(S)>>>16);A=I>>>16,R&=65535,I&=65535,x[S]=I<<16|R}return new o(x,x[x.length-1]&-2147483648?-1:0)};function T(w,b){return w.add(v(b))}n.j=function(w){if(g(this)||g(w))return h;if(y(this))return y(w)?v(this).j(v(w)):v(v(this).j(w));if(y(w))return v(this.j(v(w)));if(0>this.l(m)&&0>w.l(m))return l(this.m()*w.m());for(var b=this.g.length+w.g.length,x=[],A=0;A<2*b;A++)x[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<w.g.length;S++){var R=this.i(A)>>>16,I=this.i(A)&65535,U=w.i(S)>>>16,H=w.i(S)&65535;x[2*A+2*S]+=I*H,k(x,2*A+2*S),x[2*A+2*S+1]+=R*H,k(x,2*A+2*S+1),x[2*A+2*S+1]+=I*U,k(x,2*A+2*S+1),x[2*A+2*S+2]+=R*U,k(x,2*A+2*S+2)}for(A=0;A<b;A++)x[A]=x[2*A+1]<<16|x[2*A];for(A=b;A<2*b;A++)x[A]=0;return new o(x,0)};function k(w,b){for(;(w[b]&65535)!=w[b];)w[b+1]+=w[b]>>>16,w[b]&=65535,b++}function C(w,b){this.g=w,this.h=b}function P(w,b){if(g(b))throw Error("division by zero");if(g(w))return new C(h,h);if(y(w))return b=P(v(w),b),new C(v(b.g),v(b.h));if(y(b))return b=P(w,v(b)),new C(v(b.g),b.h);if(30<w.g.length){if(y(w)||y(b))throw Error("slowDivide_ only works with positive integers.");for(var x=f,A=b;0>=A.l(w);)x=M(x),A=M(A);var S=D(x,1),R=D(A,1);for(A=D(A,2),x=D(x,2);!g(A);){var I=R.add(A);0>=I.l(w)&&(S=S.add(x),R=I),A=D(A,1),x=D(x,1)}return b=T(w,S.j(b)),new C(S,b)}for(S=h;0<=w.l(b);){for(x=Math.max(1,Math.floor(w.m()/b.m())),A=Math.ceil(Math.log(x)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),R=l(x),I=R.j(b);y(I)||0<I.l(w);)x-=A,R=l(x),I=R.j(b);g(R)&&(R=f),S=S.add(R),w=T(w,I)}return new C(S,w)}n.A=function(w){return P(this,w).h},n.and=function(w){for(var b=Math.max(this.g.length,w.g.length),x=[],A=0;A<b;A++)x[A]=this.i(A)&w.i(A);return new o(x,this.h&w.h)},n.or=function(w){for(var b=Math.max(this.g.length,w.g.length),x=[],A=0;A<b;A++)x[A]=this.i(A)|w.i(A);return new o(x,this.h|w.h)},n.xor=function(w){for(var b=Math.max(this.g.length,w.g.length),x=[],A=0;A<b;A++)x[A]=this.i(A)^w.i(A);return new o(x,this.h^w.h)};function M(w){for(var b=w.g.length+1,x=[],A=0;A<b;A++)x[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(x,w.h)}function D(w,b){var x=b>>5;b%=32;for(var A=w.g.length-x,S=[],R=0;R<A;R++)S[R]=0<b?w.i(R+x)>>>b|w.i(R+x+1)<<32-b:w.i(R+x);return new o(S,w.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Tg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,Ss=o}).apply(typeof _f<"u"?_f:typeof self<"u"?self:typeof window<"u"?window:{});var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ig,mr,Ag,la,Kl,kg,Sg,Cg;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,_){return u==Array.prototype||u==Object.prototype||(u[p]=_.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bo=="object"&&Bo];for(var p=0;p<u.length;++p){var _=u[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=e(this);function i(u,p){if(p)t:{var _=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var O=u[E];if(!(O in _))break t;_=_[O]}u=u[u.length-1],E=_[u],p=p(E),p!=E&&p!=null&&t(_,u,{configurable:!0,writable:!0,value:p})}}function r(u,p){u instanceof String&&(u+="");var _=0,E=!1,O={next:function(){if(!E&&_<u.length){var L=_++;return{value:p(L,u[L]),done:!1}}return E=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(u){return u||function(){return r(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function l(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function d(u,p,_){return u.call.apply(u.bind,arguments)}function h(u,p,_){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,E),u.apply(p,O)}}return function(){return u.apply(p,arguments)}}function f(u,p,_){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,f.apply(null,arguments)}function m(u,p){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function g(u,p){function _(){}_.prototype=p.prototype,u.aa=p.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(E,O,L){for(var j=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)j[Tt-2]=arguments[Tt];return p.prototype[O].apply(E,j)}}function y(u){const p=u.length;if(0<p){const _=Array(p);for(let E=0;E<p;E++)_[E]=u[E];return _}return[]}function v(u,p){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(c(E)){const O=u.length||0,L=E.length||0;u.length=O+L;for(let j=0;j<L;j++)u[O+j]=E[j]}else u.push(E)}}class T{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function k(u){return/^[\s\xa0]*$/.test(u)}function C(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function P(u){return P[" "](u),u}P[" "]=function(){};var M=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function D(u,p,_){for(const E in u)p.call(_,u[E],E,u)}function w(u,p){for(const _ in u)p.call(void 0,u[_],_,u)}function b(u){const p={};for(const _ in u)p[_]=u[_];return p}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,p){let _,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(_ in E)u[_]=E[_];for(let L=0;L<x.length;L++)_=x[L],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function S(u){var p=1;u=u.split(":");const _=[];for(;0<p&&u.length;)_.push(u.shift()),p--;return u.length&&_.push(u.join(":")),_}function R(u){a.setTimeout(()=>{throw u},0)}function I(){var u=st;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class U{constructor(){this.h=this.g=null}add(p,_){const E=H.get();E.set(p,_),this.h?this.h.next=E:this.g=E,this.h=E}}var H=new T(()=>new X,u=>u.reset());class X{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,ut=!1,st=new U,Ot=()=>{const u=a.Promise.resolve(void 0);nt=()=>{u.then(Bt)}};var Bt=()=>{for(var u;u=I();){try{u.h.call(u.g)}catch(_){R(_)}var p=H;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ut=!1};function kt(){this.s=this.s,this.C=this.C}kt.prototype.s=!1,kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Y(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var Et=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};a.addEventListener("test",_,p),a.removeEventListener("test",_,p)}catch{}return u}();function we(u,p){if(Y.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(M){t:{try{P(p.nodeName);var O=!0;break t}catch{}O=!1}O||(p=null)}}else _=="mouseover"?p=u.fromElement:_=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Pe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&we.aa.h.call(this)}}g(we,Y);var Pe={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ds="closure_listenable_"+(1e6*Math.random()|0),yb=0;function vb(u,p,_,E,O){this.listener=u,this.proxy=null,this.src=p,this.type=_,this.capture=!!E,this.ha=O,this.key=++yb,this.da=this.fa=!1}function wo(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Eo(u){this.src=u,this.g={},this.h=0}Eo.prototype.add=function(u,p,_,E,O){var L=u.toString();u=this.g[L],u||(u=this.g[L]=[],this.h++);var j=Uc(u,p,E,O);return-1<j?(p=u[j],_||(p.fa=!1)):(p=new vb(p,this.src,L,!!E,O),p.fa=_,u.push(p)),p};function Bc(u,p){var _=p.type;if(_ in u.g){var E=u.g[_],O=Array.prototype.indexOf.call(E,p,void 0),L;(L=0<=O)&&Array.prototype.splice.call(E,O,1),L&&(wo(p),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Uc(u,p,_,E){for(var O=0;O<u.length;++O){var L=u[O];if(!L.da&&L.listener==p&&L.capture==!!_&&L.ha==E)return O}return-1}var jc="closure_lm_"+(1e6*Math.random()|0),zc={};function ah(u,p,_,E,O){if(Array.isArray(p)){for(var L=0;L<p.length;L++)ah(u,p[L],_,E,O);return null}return _=uh(_),u&&u[ds]?u.K(p,_,l(E)?!!E.capture:!1,O):bb(u,p,_,!1,E,O)}function bb(u,p,_,E,O,L){if(!p)throw Error("Invalid event type");var j=l(O)?!!O.capture:!!O,Tt=qc(u);if(Tt||(u[jc]=Tt=new Eo(u)),_=Tt.add(p,_,E,j,L),_.proxy)return _;if(E=xb(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)Et||(O=j),O===void 0&&(O=!1),u.addEventListener(p.toString(),E,O);else if(u.attachEvent)u.attachEvent(lh(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function xb(){function u(_){return p.call(u.src,u.listener,_)}const p=wb;return u}function ch(u,p,_,E,O){if(Array.isArray(p))for(var L=0;L<p.length;L++)ch(u,p[L],_,E,O);else E=l(E)?!!E.capture:!!E,_=uh(_),u&&u[ds]?(u=u.i,p=String(p).toString(),p in u.g&&(L=u.g[p],_=Uc(L,_,E,O),-1<_&&(wo(L[_]),Array.prototype.splice.call(L,_,1),L.length==0&&(delete u.g[p],u.h--)))):u&&(u=qc(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Uc(p,_,E,O)),(_=-1<u?p[u]:null)&&Hc(_))}function Hc(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[ds])Bc(p.i,u);else{var _=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(_,E,u.capture):p.detachEvent?p.detachEvent(lh(_),E):p.addListener&&p.removeListener&&p.removeListener(E),(_=qc(p))?(Bc(_,u),_.h==0&&(_.src=null,p[jc]=null)):wo(u)}}}function lh(u){return u in zc?zc[u]:zc[u]="on"+u}function wb(u,p){if(u.da)u=!0;else{p=new we(p,this);var _=u.listener,E=u.ha||u.src;u.fa&&Hc(u),u=_.call(E,p)}return u}function qc(u){return u=u[jc],u instanceof Eo?u:null}var Wc="__closure_events_fn_"+(1e9*Math.random()>>>0);function uh(u){return typeof u=="function"?u:(u[Wc]||(u[Wc]=function(p){return u.handleEvent(p)}),u[Wc])}function le(){kt.call(this),this.i=new Eo(this),this.M=this,this.F=null}g(le,kt),le.prototype[ds]=!0,le.prototype.removeEventListener=function(u,p,_,E){ch(this,u,p,_,E)};function Ee(u,p){var _,E=u.F;if(E)for(_=[];E;E=E.F)_.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new Y(p,u);else if(p instanceof Y)p.target=p.target||u;else{var O=p;p=new Y(E,u),A(p,O)}if(O=!0,_)for(var L=_.length-1;0<=L;L--){var j=p.g=_[L];O=To(j,E,!0,p)&&O}if(j=p.g=u,O=To(j,E,!0,p)&&O,O=To(j,E,!1,p)&&O,_)for(L=0;L<_.length;L++)j=p.g=_[L],O=To(j,E,!1,p)&&O}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var _=u.g[p],E=0;E<_.length;E++)wo(_[E]);delete u.g[p],u.h--}}this.F=null},le.prototype.K=function(u,p,_,E){return this.i.add(String(u),p,!1,_,E)},le.prototype.L=function(u,p,_,E){return this.i.add(String(u),p,!0,_,E)};function To(u,p,_,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var O=!0,L=0;L<p.length;++L){var j=p[L];if(j&&!j.da&&j.capture==_){var Tt=j.listener,se=j.ha||j.src;j.fa&&Bc(u.i,j),O=Tt.call(se,E)!==!1&&O}}return O&&!E.defaultPrevented}function dh(u,p,_){if(typeof u=="function")_&&(u=f(u,_));else if(u&&typeof u.handleEvent=="function")u=f(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function hh(u){u.g=dh(()=>{u.g=null,u.i&&(u.i=!1,hh(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Eb extends kt{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:hh(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ji(u){kt.call(this),this.h=u,this.g={}}g(ji,kt);var fh=[];function ph(u){D(u.g,function(p,_){this.g.hasOwnProperty(_)&&Hc(p)},u),u.g={}}ji.prototype.N=function(){ji.aa.N.call(this),ph(this)},ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gc=a.JSON.stringify,Tb=a.JSON.parse,Ib=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Yc(){}Yc.prototype.h=null;function mh(u){return u.h||(u.h=u.i())}function gh(){}var zi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kc(){Y.call(this,"d")}g(Kc,Y);function Qc(){Y.call(this,"c")}g(Qc,Y);var hs={},_h=null;function Io(){return _h=_h||new le}hs.La="serverreachability";function yh(u){Y.call(this,hs.La,u)}g(yh,Y);function Hi(u){const p=Io();Ee(p,new yh(p))}hs.STAT_EVENT="statevent";function vh(u,p){Y.call(this,hs.STAT_EVENT,u),this.stat=p}g(vh,Y);function Te(u){const p=Io();Ee(p,new vh(p,u))}hs.Ma="timingevent";function bh(u,p){Y.call(this,hs.Ma,u),this.size=p}g(bh,Y);function qi(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function Wi(){this.g=!0}Wi.prototype.xa=function(){this.g=!1};function Ab(u,p,_,E,O,L){u.info(function(){if(u.g)if(L)for(var j="",Tt=L.split("&"),se=0;se<Tt.length;se++){var ft=Tt[se].split("=");if(1<ft.length){var ue=ft[0];ft=ft[1];var de=ue.split("_");j=2<=de.length&&de[1]=="type"?j+(ue+"="+ft+"&"):j+(ue+"=redacted&")}}else j=null;else j=L;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+p+`
`+_+`
`+j})}function kb(u,p,_,E,O,L,j){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+p+`
`+_+`
`+L+" "+j})}function Xs(u,p,_,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Cb(u,_)+(E?" "+E:"")})}function Sb(u,p){u.info(function(){return"TIMEOUT: "+p})}Wi.prototype.info=function(){};function Cb(u,p){if(!u.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var E=_[u];if(!(2>E.length)){var O=E[1];if(Array.isArray(O)&&!(1>O.length)){var L=O[0];if(L!="noop"&&L!="stop"&&L!="close")for(var j=1;j<O.length;j++)O[j]=""}}}}return Gc(_)}catch{return p}}var Ao={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xc;function ko(){}g(ko,Yc),ko.prototype.g=function(){return new XMLHttpRequest},ko.prototype.i=function(){return{}},Xc=new ko;function Mn(u,p,_,E){this.j=u,this.i=p,this.l=_,this.R=E||1,this.U=new ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wh}function wh(){this.i=null,this.g="",this.h=!1}var Eh={},Jc={};function Zc(u,p,_){u.L=1,u.v=Po(hn(p)),u.m=_,u.P=!0,Th(u,null)}function Th(u,p){u.F=Date.now(),So(u),u.A=hn(u.v);var _=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Fh(_.i,"t",E),u.C=0,_=u.j.J,u.h=new wh,u.g=nf(u.j,_?p:null,!u.m),0<u.O&&(u.M=new Eb(f(u.Y,u,u.g),u.O)),p=u.U,_=u.g,E=u.ca;var O="readystatechange";Array.isArray(O)||(O&&(fh[0]=O.toString()),O=fh);for(var L=0;L<O.length;L++){var j=ah(_,O[L],E||p.handleEvent,!1,p.h||p);if(!j)break;p.g[j.key]=j}p=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Hi(),Ab(u.i,u.u,u.A,u.l,u.R,u.m)}Mn.prototype.ca=function(u){u=u.target;const p=this.M;p&&fn(u)==3?p.j():this.Y(u)},Mn.prototype.Y=function(u){try{if(u==this.g)t:{const de=fn(this.g);var p=this.g.Ba();const ti=this.g.Z();if(!(3>de)&&(de!=3||this.g&&(this.h.h||this.g.oa()||qh(this.g)))){this.J||de!=4||p==7||(p==8||0>=ti?Hi(3):Hi(2)),tl(this);var _=this.g.Z();this.X=_;e:if(Ih(this)){var E=qh(this.g);u="";var O=E.length,L=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fs(this),Gi(this);var j="";break e}this.h.i=new a.TextDecoder}for(p=0;p<O;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(L&&p==O-1)});E.length=0,this.h.g+=u,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=_==200,kb(this.i,this.u,this.A,this.l,this.R,de,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Tt,se=this.g;if((Tt=se.g?se.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(Tt)){var ft=Tt;break e}}ft=null}if(_=ft)Xs(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,el(this,_);else{this.o=!1,this.s=3,Te(12),fs(this),Gi(this);break t}}if(this.P){_=!0;let $e;for(;!this.J&&this.C<j.length;)if($e=Rb(this,j),$e==Jc){de==4&&(this.s=4,Te(14),_=!1),Xs(this.i,this.l,null,"[Incomplete Response]");break}else if($e==Eh){this.s=4,Te(15),Xs(this.i,this.l,j,"[Invalid Chunk]"),_=!1;break}else Xs(this.i,this.l,$e,null),el(this,$e);if(Ih(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),de!=4||j.length!=0||this.h.h||(this.s=1,Te(16),_=!1),this.o=this.o&&_,!_)Xs(this.i,this.l,j,"[Invalid Chunked Response]"),fs(this),Gi(this);else if(0<j.length&&!this.W){this.W=!0;var ue=this.j;ue.g==this&&ue.ba&&!ue.M&&(ue.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),al(ue),ue.M=!0,Te(11))}}else Xs(this.i,this.l,j,null),el(this,j);de==4&&fs(this),this.o&&!this.J&&(de==4?Jh(this.j,this):(this.o=!1,So(this)))}else Gb(this.g),_==400&&0<j.indexOf("Unknown SID")?(this.s=3,Te(12)):(this.s=0,Te(13)),fs(this),Gi(this)}}}catch{}finally{}};function Ih(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Rb(u,p){var _=u.C,E=p.indexOf(`
`,_);return E==-1?Jc:(_=Number(p.substring(_,E)),isNaN(_)?Eh:(E+=1,E+_>p.length?Jc:(p=p.slice(E,E+_),u.C=E+_,p)))}Mn.prototype.cancel=function(){this.J=!0,fs(this)};function So(u){u.S=Date.now()+u.I,Ah(u,u.I)}function Ah(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=qi(f(u.ba,u),p)}function tl(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Mn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Sb(this.i,this.A),this.L!=2&&(Hi(),Te(17)),fs(this),this.s=2,Gi(this)):Ah(this,this.S-u)};function Gi(u){u.j.G==0||u.J||Jh(u.j,u)}function fs(u){tl(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,ph(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function el(u,p){try{var _=u.j;if(_.G!=0&&(_.g==u||nl(_.h,u))){if(!u.K&&nl(_.h,u)&&_.G==3){try{var E=_.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Vo(_),No(_);else break t;ol(_),Te(18)}}else _.za=O[1],0<_.za-_.T&&37500>O[2]&&_.F&&_.v==0&&!_.C&&(_.C=qi(f(_.Za,_),6e3));if(1>=Ch(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else ms(_,11)}else if((u.K||_.g==u)&&Vo(_),!k(p))for(O=_.Da.g.parse(p),p=0;p<O.length;p++){let ft=O[p];if(_.T=ft[0],ft=ft[1],_.G==2)if(ft[0]=="c"){_.K=ft[1],_.ia=ft[2];const ue=ft[3];ue!=null&&(_.la=ue,_.j.info("VER="+_.la));const de=ft[4];de!=null&&(_.Aa=de,_.j.info("SVER="+_.Aa));const ti=ft[5];ti!=null&&typeof ti=="number"&&0<ti&&(E=1.5*ti,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const $e=u.g;if($e){const $o=$e.g?$e.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($o){var L=E.h;L.g||$o.indexOf("spdy")==-1&&$o.indexOf("quic")==-1&&$o.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(sl(L,L.h),L.h=null))}if(E.D){const cl=$e.g?$e.g.getResponseHeader("X-HTTP-Session-Id"):null;cl&&(E.ya=cl,St(E.I,E.D,cl))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var j=u;if(E.qa=ef(E,E.J?E.ia:null,E.W),j.K){Rh(E.h,j);var Tt=j,se=E.L;se&&(Tt.I=se),Tt.B&&(tl(Tt),So(Tt)),E.g=j}else Qh(E);0<_.i.length&&Lo(_)}else ft[0]!="stop"&&ft[0]!="close"||ms(_,7);else _.G==3&&(ft[0]=="stop"||ft[0]=="close"?ft[0]=="stop"?ms(_,7):rl(_):ft[0]!="noop"&&_.l&&_.l.ta(ft),_.v=0)}}Hi(4)}catch{}}var Pb=class{constructor(u,p){this.g=u,this.map=p}};function kh(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sh(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ch(u){return u.h?1:u.g?u.g.size:0}function nl(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function sl(u,p){u.g?u.g.add(p):u.h=p}function Rh(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}kh.prototype.cancel=function(){if(this.i=Ph(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Ph(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const _ of u.g.values())p=p.concat(_.D);return p}return y(u.i)}function Db(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(c(u)){for(var p=[],_=u.length,E=0;E<_;E++)p.push(u[E]);return p}p=[],_=0;for(E in u)p[_++]=u[E];return p}function Mb(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(c(u)||typeof u=="string"){var p=[];u=u.length;for(var _=0;_<u;_++)p.push(_);return p}p=[],_=0;for(const E in u)p[_++]=E;return p}}}function Dh(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(c(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var _=Mb(u),E=Db(u),O=E.length,L=0;L<O;L++)p.call(void 0,E[L],_&&_[L],u)}var Mh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ob(u,p){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var E=u[_].indexOf("="),O=null;if(0<=E){var L=u[_].substring(0,E);O=u[_].substring(E+1)}else L=u[_];p(L,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function ps(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ps){this.h=u.h,Co(this,u.j),this.o=u.o,this.g=u.g,Ro(this,u.s),this.l=u.l;var p=u.i,_=new Qi;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),Oh(this,_),this.m=u.m}else u&&(p=String(u).match(Mh))?(this.h=!1,Co(this,p[1]||"",!0),this.o=Yi(p[2]||""),this.g=Yi(p[3]||"",!0),Ro(this,p[4]),this.l=Yi(p[5]||"",!0),Oh(this,p[6]||"",!0),this.m=Yi(p[7]||"")):(this.h=!1,this.i=new Qi(null,this.h))}ps.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Ki(p,Nh,!0),":");var _=this.g;return(_||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Ki(p,Nh,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Ki(_,_.charAt(0)=="/"?Vb:Lb,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Ki(_,$b)),u.join("")};function hn(u){return new ps(u)}function Co(u,p,_){u.j=_?Yi(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Ro(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Oh(u,p,_){p instanceof Qi?(u.i=p,Bb(u.i,u.h)):(_||(p=Ki(p,Fb)),u.i=new Qi(p,u.h))}function St(u,p,_){u.i.set(p,_)}function Po(u){return St(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Yi(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ki(u,p,_){return typeof u=="string"?(u=encodeURI(u).replace(p,Nb),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Nb(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Nh=/[#\/\?@]/g,Lb=/[#\?:]/g,Vb=/[#\?]/g,Fb=/[#\?@]/g,$b=/#/g;function Qi(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function On(u){u.g||(u.g=new Map,u.h=0,u.i&&Ob(u.i,function(p,_){u.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}n=Qi.prototype,n.add=function(u,p){On(this),this.i=null,u=Js(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(p),this.h+=1,this};function Lh(u,p){On(u),p=Js(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Vh(u,p){return On(u),p=Js(u,p),u.g.has(p)}n.forEach=function(u,p){On(this),this.g.forEach(function(_,E){_.forEach(function(O){u.call(p,O,E,this)},this)},this)},n.na=function(){On(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let E=0;E<p.length;E++){const O=u[E];for(let L=0;L<O.length;L++)_.push(p[E])}return _},n.V=function(u){On(this);let p=[];if(typeof u=="string")Vh(this,u)&&(p=p.concat(this.g.get(Js(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)p=p.concat(u[_])}return p},n.set=function(u,p){return On(this),this.i=null,u=Js(this,u),Vh(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Fh(u,p,_){Lh(u,p),0<_.length&&(u.i=null,u.g.set(Js(u,p),y(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var E=p[_];const L=encodeURIComponent(String(E)),j=this.V(E);for(E=0;E<j.length;E++){var O=L;j[E]!==""&&(O+="="+encodeURIComponent(String(j[E]))),u.push(O)}}return this.i=u.join("&")};function Js(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Bb(u,p){p&&!u.j&&(On(u),u.i=null,u.g.forEach(function(_,E){var O=E.toLowerCase();E!=O&&(Lh(this,E),Fh(this,O,_))},u)),u.j=p}function Ub(u,p){const _=new Wi;if(a.Image){const E=new Image;E.onload=m(Nn,_,"TestLoadImage: loaded",!0,p,E),E.onerror=m(Nn,_,"TestLoadImage: error",!1,p,E),E.onabort=m(Nn,_,"TestLoadImage: abort",!1,p,E),E.ontimeout=m(Nn,_,"TestLoadImage: timeout",!1,p,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function jb(u,p){const _=new Wi,E=new AbortController,O=setTimeout(()=>{E.abort(),Nn(_,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(L=>{clearTimeout(O),L.ok?Nn(_,"TestPingServer: ok",!0,p):Nn(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(O),Nn(_,"TestPingServer: error",!1,p)})}function Nn(u,p,_,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(_)}catch{}}function zb(){this.g=new Ib}function Hb(u,p,_){const E=_||"";try{Dh(u,function(O,L){let j=O;l(O)&&(j=Gc(O)),p.push(E+L+"="+encodeURIComponent(j))})}catch(O){throw p.push(E+"type="+encodeURIComponent("_badmap")),O}}function Do(u){this.l=u.Ub||null,this.j=u.eb||!1}g(Do,Yc),Do.prototype.g=function(){return new Mo(this.l,this.j)},Do.prototype.i=function(u){return function(){return u}}({});function Mo(u,p){le.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}g(Mo,le),n=Mo.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Ji(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xi(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ji(this)),this.g&&(this.readyState=3,Ji(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$h(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function $h(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Xi(this):Ji(this),this.readyState==3&&$h(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Xi(this))},n.Qa=function(u){this.g&&(this.response=u,Xi(this))},n.ga=function(){this.g&&Xi(this)};function Xi(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ji(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=p.next();return u.join(`\r
`)};function Ji(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Bh(u){let p="";return D(u,function(_,E){p+=E,p+=":",p+=_,p+=`\r
`}),p}function il(u,p,_){t:{for(E in _){var E=!1;break t}E=!0}E||(_=Bh(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):St(u,p,_))}function Ut(u){le.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}g(Ut,le);var qb=/^https?$/i,Wb=["POST","PUT"];n=Ut.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xc.g(),this.v=this.o?mh(this.o):mh(Xc),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(L){Uh(this,L);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)_.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const L of E.keys())_.set(L,E.get(L));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(L=>L.toLowerCase()=="content-type"),O=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Wb,p,void 0))||E||O||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,j]of _)this.g.setRequestHeader(L,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hh(this),this.u=!0,this.g.send(u),this.u=!1}catch(L){Uh(this,L)}};function Uh(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,jh(u),Oo(u)}function jh(u){u.A||(u.A=!0,Ee(u,"complete"),Ee(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ee(this,"complete"),Ee(this,"abort"),Oo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oo(this,!0)),Ut.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?zh(this):this.bb())},n.bb=function(){zh(this)};function zh(u){if(u.h&&typeof o<"u"&&(!u.v[1]||fn(u)!=4||u.Z()!=2)){if(u.u&&fn(u)==4)dh(u.Ea,0,u);else if(Ee(u,"readystatechange"),fn(u)==4){u.h=!1;try{const j=u.Z();t:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var _;if(!(_=p)){var E;if(E=j===0){var O=String(u.D).match(Mh)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),E=!qb.test(O?O.toLowerCase():"")}_=E}if(_)Ee(u,"complete"),Ee(u,"success");else{u.m=6;try{var L=2<fn(u)?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.Z()+"]",jh(u)}}finally{Oo(u)}}}}function Oo(u,p){if(u.g){Hh(u);const _=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||Ee(u,"ready");try{_.onreadystatechange=E}catch{}}}function Hh(u){u.I&&(a.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function fn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Tb(p)}};function qh(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Gb(u){const p={};u=(u.g&&2<=fn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(k(u[E]))continue;var _=S(u[E]);const O=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const L=p[O]||[];p[O]=L,L.push(_)}w(p,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zi(u,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||p}function Wh(u){this.Aa=0,this.i=[],this.j=new Wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zi("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zi("baseRetryDelayMs",5e3,u),this.cb=Zi("retryDelaySeedMs",1e4,u),this.Wa=Zi("forwardChannelMaxRetries",2,u),this.wa=Zi("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new kh(u&&u.concurrentRequestLimit),this.Da=new zb,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Wh.prototype,n.la=8,n.G=1,n.connect=function(u,p,_,E){Te(0),this.W=u,this.H=p||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=ef(this,null,this.W),Lo(this)};function rl(u){if(Gh(u),u.G==3){var p=u.U++,_=hn(u.I);if(St(_,"SID",u.K),St(_,"RID",p),St(_,"TYPE","terminate"),tr(u,_),p=new Mn(u,u.j,p),p.L=2,p.v=Po(hn(_)),_=!1,a.navigator&&a.navigator.sendBeacon)try{_=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&a.Image&&(new Image().src=p.v,_=!0),_||(p.g=nf(p.j,null),p.g.ea(p.v)),p.F=Date.now(),So(p)}tf(u)}function No(u){u.g&&(al(u),u.g.cancel(),u.g=null)}function Gh(u){No(u),u.u&&(a.clearTimeout(u.u),u.u=null),Vo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Lo(u){if(!Sh(u.h)&&!u.s){u.s=!0;var p=u.Ga;nt||Ot(),ut||(nt(),ut=!0),st.add(p,u),u.B=0}}function Yb(u,p){return Ch(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=qi(f(u.Ga,u,p),Zh(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const O=new Mn(this,this.j,u);let L=this.o;if(this.S&&(L?(L=b(L),A(L,this.S)):L=this.S),this.m!==null||this.O||(O.H=L,L=null),this.P)t:{for(var p=0,_=0;_<this.i.length;_++){e:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break e}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=_;break t}if(p===4096||_===this.i.length-1){p=_+1;break t}}p=1e3}else p=1e3;p=Kh(this,O,p),_=hn(this.I),St(_,"RID",u),St(_,"CVER",22),this.D&&St(_,"X-HTTP-Session-Id",this.D),tr(this,_),L&&(this.O?p="headers="+encodeURIComponent(String(Bh(L)))+"&"+p:this.m&&il(_,this.m,L)),sl(this.h,O),this.Ua&&St(_,"TYPE","init"),this.P?(St(_,"$req",p),St(_,"SID","null"),O.T=!0,Zc(O,_,null)):Zc(O,_,p),this.G=2}}else this.G==3&&(u?Yh(this,u):this.i.length==0||Sh(this.h)||Yh(this))};function Yh(u,p){var _;p?_=p.l:_=u.U++;const E=hn(u.I);St(E,"SID",u.K),St(E,"RID",_),St(E,"AID",u.T),tr(u,E),u.m&&u.o&&il(E,u.m,u.o),_=new Mn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Kh(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),sl(u.h,_),Zc(_,E,p)}function tr(u,p){u.H&&D(u.H,function(_,E){St(p,E,_)}),u.l&&Dh({},function(_,E){St(p,E,_)})}function Kh(u,p,_){_=Math.min(u.i.length,_);var E=u.l?f(u.l.Na,u.l,u):null;t:{var O=u.i;let L=-1;for(;;){const j=["count="+_];L==-1?0<_?(L=O[0].g,j.push("ofs="+L)):L=0:j.push("ofs="+L);let Tt=!0;for(let se=0;se<_;se++){let ft=O[se].g;const ue=O[se].map;if(ft-=L,0>ft)L=Math.max(0,O[se].g-100),Tt=!1;else try{Hb(ue,j,"req"+ft+"_")}catch{E&&E(ue)}}if(Tt){E=j.join("&");break t}}}return u=u.i.splice(0,_),p.D=u,E}function Qh(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;nt||Ot(),ut||(nt(),ut=!0),st.add(p,u),u.v=0}}function ol(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=qi(f(u.Fa,u),Zh(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Xh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=qi(f(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Te(10),No(this),Xh(this))};function al(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Xh(u){u.g=new Mn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=hn(u.qa);St(p,"RID","rpc"),St(p,"SID",u.K),St(p,"AID",u.T),St(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&St(p,"TO",u.ja),St(p,"TYPE","xmlhttp"),tr(u,p),u.m&&u.o&&il(p,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Po(hn(p)),_.m=null,_.P=!0,Th(_,u)}n.Za=function(){this.C!=null&&(this.C=null,No(this),ol(this),Te(19))};function Vo(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Jh(u,p){var _=null;if(u.g==p){Vo(u),al(u),u.g=null;var E=2}else if(nl(u.h,p))_=p.D,Rh(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var O=u.B;E=Io(),Ee(E,new bh(E,_)),Lo(u)}else Qh(u);else if(O=p.s,O==3||O==0&&0<p.X||!(E==1&&Yb(u,p)||E==2&&ol(u)))switch(_&&0<_.length&&(p=u.h,p.i=p.i.concat(_)),O){case 1:ms(u,5);break;case 4:ms(u,10);break;case 3:ms(u,6);break;default:ms(u,2)}}}function Zh(u,p){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*p}function ms(u,p){if(u.j.info("Error code "+p),p==2){var _=f(u.fb,u),E=u.Xa;const O=!E;E=new ps(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Co(E,"https"),Po(E),O?Ub(E.toString(),_):jb(E.toString(),_)}else Te(2);u.G=0,u.l&&u.l.sa(p),tf(u),Gh(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))};function tf(u){if(u.G=0,u.ka=[],u.l){const p=Ph(u.h);(p.length!=0||u.i.length!=0)&&(v(u.ka,p),v(u.ka,u.i),u.h.i.length=0,y(u.i),u.i.length=0),u.l.ra()}}function ef(u,p,_){var E=_ instanceof ps?hn(_):new ps(_);if(E.g!="")p&&(E.g=p+"."+E.g),Ro(E,E.s);else{var O=a.location;E=O.protocol,p=p?p+"."+O.hostname:O.hostname,O=+O.port;var L=new ps(null);E&&Co(L,E),p&&(L.g=p),O&&Ro(L,O),_&&(L.l=_),E=L}return _=u.D,p=u.ya,_&&p&&St(E,_,p),St(E,"VER",u.la),tr(u,E),E}function nf(u,p,_){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ut(new Do({eb:_})):new Ut(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function sf(){}n=sf.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Fo(){}Fo.prototype.g=function(u,p){return new De(u,p)};function De(u,p){le.call(this),this.g=new Wh(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!k(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!k(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Zs(this)}g(De,le),De.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},De.prototype.close=function(){rl(this.g)},De.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Gc(u),u=_);p.i.push(new Pb(p.Ya++,u)),p.G==3&&Lo(p)},De.prototype.N=function(){this.g.l=null,delete this.j,rl(this.g),delete this.g,De.aa.N.call(this)};function rf(u){Kc.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){t:{for(const _ in p){u=_;break t}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}g(rf,Kc);function of(){Qc.call(this),this.status=1}g(of,Qc);function Zs(u){this.g=u}g(Zs,sf),Zs.prototype.ua=function(){Ee(this.g,"a")},Zs.prototype.ta=function(u){Ee(this.g,new rf(u))},Zs.prototype.sa=function(u){Ee(this.g,new of)},Zs.prototype.ra=function(){Ee(this.g,"b")},Fo.prototype.createWebChannel=Fo.prototype.g,De.prototype.send=De.prototype.o,De.prototype.open=De.prototype.m,De.prototype.close=De.prototype.close,Cg=function(){return new Fo},Sg=function(){return Io()},kg=hs,Kl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ao.NO_ERROR=0,Ao.TIMEOUT=8,Ao.HTTP_ERROR=6,la=Ao,xh.COMPLETE="complete",Ag=xh,gh.EventType=zi,zi.OPEN="a",zi.CLOSE="b",zi.ERROR="c",zi.MESSAGE="d",le.prototype.listen=le.prototype.K,mr=gh,Ut.prototype.listenOnce=Ut.prototype.L,Ut.prototype.getLastError=Ut.prototype.Ka,Ut.prototype.getLastErrorCode=Ut.prototype.Ba,Ut.prototype.getStatus=Ut.prototype.Z,Ut.prototype.getResponseJson=Ut.prototype.Oa,Ut.prototype.getResponseText=Ut.prototype.oa,Ut.prototype.send=Ut.prototype.ea,Ut.prototype.setWithCredentials=Ut.prototype.Ha,Ig=Ut}).apply(typeof Bo<"u"?Bo:typeof self<"u"?self:typeof window<"u"?window:{});const yf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}me.UNAUTHENTICATED=new me(null),me.GOOGLE_CREDENTIALS=new me("google-credentials-uid"),me.FIRST_PARTY=new me("first-party-uid"),me.MOCK_USER=new me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ni="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new Bu("@firebase/firestore");function er(){return Ls.logLevel}function q(n,...t){if(Ls.logLevel<=lt.DEBUG){const e=t.map(zu);Ls.debug(`Firestore (${Ni}): ${n}`,...e)}}function Cn(n,...t){if(Ls.logLevel<=lt.ERROR){const e=t.map(zu);Ls.error(`Firestore (${Ni}): ${n}`,...e)}}function Ei(n,...t){if(Ls.logLevel<=lt.WARN){const e=t.map(zu);Ls.warn(`Firestore (${Ni}): ${n}`,...e)}}function zu(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Q(n="Unexpected state"){const t=`FIRESTORE (${Ni}) INTERNAL ASSERTION FAILED: `+n;throw Cn(t),new Error(t)}function wt(n,t){n||Q()}function tt(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends dn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class R0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(me.UNAUTHENTICATED))}shutdown(){}}class P0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class D0{constructor(t){this.t=t,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){wt(this.o===void 0);let s=this.i;const i=c=>this.i!==s?(s=this.i,e(c)):Promise.resolve();let r=new An;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new An,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new An)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(wt(typeof s.accessToken=="string"),new Rg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return wt(t===null||typeof t=="string"),new me(t)}}class M0{constructor(t,e,s){this.l=t,this.h=e,this.P=s,this.type="FirstParty",this.user=me.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class O0{constructor(t,e,s){this.l=t,this.h=e,this.P=s}getToken(){return Promise.resolve(new M0(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L0{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){wt(this.o===void 0);const s=r=>{r.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(wt(typeof e.token=="string"),this.R=e.token,new N0(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=V0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<e&&(s+=t.charAt(i[r]%t.length))}return s}}function pt(n,t){return n<t?-1:n>t?1:0}function Ti(n,t,e){return n.length===t.length&&n.every((s,i)=>e(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Vt.fromMillis(Date.now())}static fromDate(t){return Vt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*e));return new Vt(e,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?pt(this.nanoseconds,t.nanoseconds):pt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.timestamp=t}static fromTimestamp(t){return new J(t)}static min(){return new J(new Vt(0,0))}static max(){return new J(new Vt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e,s){e===void 0?e=0:e>t.length&&Q(),s===void 0?s=t.length-e:s>t.length-e&&Q(),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return Fr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Fr?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let i=0;i<s;i++){const r=t.get(i),o=e.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ct extends Fr{construct(t,e,s){return new Ct(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(i=>i.length>0))}return new Ct(e)}static emptyPath(){return new Ct([])}}const F0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oe extends Fr{construct(t,e,s){return new oe(t,e,s)}static isValidIdentifier(t){return F0.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new oe(["__name__"])}static fromServerFormat(t){const e=[];let s="",i=0;const r=()=>{if(s.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new oe(e)}static emptyPath(){return new oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.path=t}static fromPath(t){return new W(Ct.fromString(t))}static fromName(t){return new W(Ct.fromString(t).popFirst(5))}static empty(){return new W(Ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ct.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Ct.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new W(new Ct(t.slice()))}}function $0(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=J.fromTimestamp(s===1e9?new Vt(e+1,0):new Vt(e,s));return new ns(i,W.empty(),t)}function B0(n){return new ns(n.readTime,n.key,-1)}class ns{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new ns(J.min(),W.empty(),-1)}static max(){return new ns(J.max(),W.empty(),-1)}}function U0(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=W.comparator(n.documentKey,t.documentKey),e!==0?e:pt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class z0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==j0)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new $((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(e,r).next(s,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof $?e:$.resolve(e)}catch(e){return $.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):$.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):$.reject(e)}static resolve(t){return new $((e,s)=>{e(t)})}static reject(t){return new $((e,s)=>{s(t)})}static waitFor(t){return new $((e,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&e()},c=>s(c))}),o=!0,r===i&&e()})}static or(t){let e=$.resolve(!1);for(const s of t)e=e.next(i=>i?$.resolve(i):s());return e}static forEach(t,e){const s=[];return t.forEach((i,r)=>{s.push(e.call(this,i,r))}),this.waitFor(s)}static mapArray(t,e){return new $((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;e(t[l]).next(d=>{o[l]=d,++a,a===r&&s(o)},d=>i(d))}})}static doWhile(t,e){return new $((s,i)=>{const r=()=>{t()===!0?e().next(()=>{r()},i):s()};r()})}}function H0(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ro(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Hu{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ie(s),this.se=s=>e.writeSequenceNumber(s))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Hu.oe=-1;function lc(n){return n==null}function Pa(n){return n===0&&1/n==-1/0}function q0(n){return typeof n=="number"&&Number.isInteger(n)&&!Pa(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Hs(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Dg(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e){this.comparator=t,this.root=e||re.EMPTY}insert(t,e){return new Ft(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,re.BLACK,null,null))}remove(t){return new Ft(this.comparator,this.root.remove(t,this.comparator).copy(null,null,re.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return e+s.left.size;i<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Uo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Uo(this.root,t,this.comparator,!1)}getReverseIterator(){return new Uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Uo(this.root,t,this.comparator,!0)}}class Uo{constructor(t,e,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?s(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class re{constructor(t,e,s,i,r){this.key=t,this.value=e,this.color=s??re.RED,this.left=i??re.EMPTY,this.right=r??re.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,i,r){return new re(t??this.key,e??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,s),null):r===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return re.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return re.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,re.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const t=this.left.check();if(t!==this.right.check())throw Q();return t+(this.isRed()?0:1)}}re.EMPTY=null,re.RED=!0,re.BLACK=!1;re.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,s,i,r){return this}insert(t,e,s){return new re(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t){this.comparator=t,this.data=new Ft(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new bf(this.data.getIterator())}getIteratorFrom(t){return new bf(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof ae)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ae(this.comparator);return e.data=t,e}}class bf{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this.fields=t,t.sort(oe.comparator)}static empty(){return new Oe([])}unionWith(t){let e=new ae(oe.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new Oe(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ti(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
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
 */class Mg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Mg("Invalid base64 string: "+r):r}}(t);return new ce(e)}static fromUint8Array(t){const e=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(t);return new ce(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return pt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ce.EMPTY_BYTE_STRING=new ce("");const W0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ss(n){if(wt(!!n),typeof n=="string"){let t=0;const e=W0.exec(n);if(wt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Wt(n.seconds),nanos:Wt(n.nanos)}}function Wt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vs(n){return typeof n=="string"?ce.fromBase64String(n):ce.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Wu(n){const t=n.mapValue.fields.__previous_value__;return qu(t)?Wu(t):t}function $r(n){const t=ss(n.mapValue.fields.__local_write_time__.timestampValue);return new Vt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(t,e,s,i,r,o,a,c,l){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Br{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Br("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Br&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo={mapValue:{}};function Fs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qu(n)?4:K0(n)?9007199254740991:Y0(n)?10:11:Q()}function cn(n,t){if(n===t)return!0;const e=Fs(n);if(e!==Fs(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return $r(n).isEqual($r(t));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=ss(i.timestampValue),a=ss(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,r){return Vs(i.bytesValue).isEqual(Vs(r.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,r){return Wt(i.geoPointValue.latitude)===Wt(r.geoPointValue.latitude)&&Wt(i.geoPointValue.longitude)===Wt(r.geoPointValue.longitude)}(n,t);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Wt(i.integerValue)===Wt(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Wt(i.doubleValue),a=Wt(r.doubleValue);return o===a?Pa(o)===Pa(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Ti(n.arrayValue.values||[],t.arrayValue.values||[],cn);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(vf(o)!==vf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!cn(o[c],a[c])))return!1;return!0}(n,t);default:return Q()}}function Ur(n,t){return(n.values||[]).find(e=>cn(e,t))!==void 0}function Ii(n,t){if(n===t)return 0;const e=Fs(n),s=Fs(t);if(e!==s)return pt(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return pt(n.booleanValue,t.booleanValue);case 2:return function(r,o){const a=Wt(r.integerValue||r.doubleValue),c=Wt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return xf(n.timestampValue,t.timestampValue);case 4:return xf($r(n),$r(t));case 5:return pt(n.stringValue,t.stringValue);case 6:return function(r,o){const a=Vs(r),c=Vs(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const d=pt(a[l],c[l]);if(d!==0)return d}return pt(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(r,o){const a=pt(Wt(r.latitude),Wt(o.latitude));return a!==0?a:pt(Wt(r.longitude),Wt(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return wf(n.arrayValue,t.arrayValue);case 10:return function(r,o){var a,c,l,d;const h=r.fields||{},f=o.fields||{},m=(a=h.value)===null||a===void 0?void 0:a.arrayValue,g=(c=f.value)===null||c===void 0?void 0:c.arrayValue,y=pt(((l=m==null?void 0:m.values)===null||l===void 0?void 0:l.length)||0,((d=g==null?void 0:g.values)===null||d===void 0?void 0:d.length)||0);return y!==0?y:wf(m,g)}(n.mapValue,t.mapValue);case 11:return function(r,o){if(r===jo.mapValue&&o===jo.mapValue)return 0;if(r===jo.mapValue)return 1;if(o===jo.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),l=o.fields||{},d=Object.keys(l);c.sort(),d.sort();for(let h=0;h<c.length&&h<d.length;++h){const f=pt(c[h],d[h]);if(f!==0)return f;const m=Ii(a[c[h]],l[d[h]]);if(m!==0)return m}return pt(c.length,d.length)}(n.mapValue,t.mapValue);default:throw Q()}}function xf(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return pt(n,t);const e=ss(n),s=ss(t),i=pt(e.seconds,s.seconds);return i!==0?i:pt(e.nanos,s.nanos)}function wf(n,t){const e=n.values||[],s=t.values||[];for(let i=0;i<e.length&&i<s.length;++i){const r=Ii(e[i],s[i]);if(r)return r}return pt(e.length,s.length)}function Ai(n){return Ql(n)}function Ql(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=ss(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Vs(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return W.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",i=!0;for(const r of e.values||[])i?i=!1:s+=",",s+=Ql(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Ql(e.fields[o])}`;return i+"}"}(n.mapValue):Q()}function Ef(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Xl(n){return!!n&&"integerValue"in n}function Gu(n){return!!n&&"arrayValue"in n}function Tf(n){return!!n&&"nullValue"in n}function If(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ua(n){return!!n&&"mapValue"in n}function Y0(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ir(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Hs(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=Ir(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ir(n.arrayValue.values[e]);return t}return Object.assign({},n)}function K0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this.value=t}static empty(){return new Ce({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!ua(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ir(e)}setAll(t){let e=oe.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,s,i),s={},i=[],e=a.popLast()}o?s[a.lastSegment()]=Ir(o):i.push(a.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,s,i)}delete(t){const e=this.field(t.popLast());ua(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return cn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=e.mapValue.fields[t.get(s)];ua(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,s){Hs(e,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new Ce(Ir(this.value))}}function Og(n){const t=[];return Hs(n.fields,(e,s)=>{const i=new oe([e]);if(ua(s)){const r=Og(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new Oe(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t,e,s,i,r,o,a){this.key=t,this.documentType=e,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ye(t,0,J.min(),J.min(),J.min(),Ce.empty(),0)}static newFoundDocument(t,e,s,i){return new ye(t,1,e,J.min(),s,i,0)}static newNoDocument(t,e){return new ye(t,2,e,J.min(),J.min(),Ce.empty(),0)}static newUnknownDocument(t,e){return new ye(t,3,e,J.min(),J.min(),Ce.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ce.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ye&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Da{constructor(t,e){this.position=t,this.inclusive=e}}function Af(n,t,e){let s=0;for(let i=0;i<n.position.length;i++){const r=t[i],o=n.position[i];if(r.field.isKeyField()?s=W.comparator(W.fromName(o.referenceValue),e.key):s=Ii(o,e.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function kf(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!cn(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class jr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Q0(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ng{}class Jt extends Ng{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new J0(t,e,s):e==="array-contains"?new ew(t,s):e==="in"?new nw(t,s):e==="not-in"?new sw(t,s):e==="array-contains-any"?new iw(t,s):new Jt(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new Z0(t,s):new tw(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ii(e,this.value)):e!==null&&Fs(this.value)===Fs(e)&&this.matchesComparison(Ii(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qe extends Ng{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new qe(t,e)}matches(t){return Lg(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Lg(n){return n.op==="and"}function Vg(n){return X0(n)&&Lg(n)}function X0(n){for(const t of n.filters)if(t instanceof qe)return!1;return!0}function Jl(n){if(n instanceof Jt)return n.field.canonicalString()+n.op.toString()+Ai(n.value);if(Vg(n))return n.filters.map(t=>Jl(t)).join(",");{const t=n.filters.map(e=>Jl(e)).join(",");return`${n.op}(${t})`}}function Fg(n,t){return n instanceof Jt?function(s,i){return i instanceof Jt&&s.op===i.op&&s.field.isEqual(i.field)&&cn(s.value,i.value)}(n,t):n instanceof qe?function(s,i){return i instanceof qe&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&Fg(o,i.filters[a]),!0):!1}(n,t):void Q()}function $g(n){return n instanceof Jt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ai(e.value)}`}(n):n instanceof qe?function(e){return e.op.toString()+" {"+e.getFilters().map($g).join(" ,")+"}"}(n):"Filter"}class J0 extends Jt{constructor(t,e,s){super(t,e,s),this.key=W.fromName(s.referenceValue)}matches(t){const e=W.comparator(t.key,this.key);return this.matchesComparison(e)}}class Z0 extends Jt{constructor(t,e){super(t,"in",e),this.keys=Bg("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class tw extends Jt{constructor(t,e){super(t,"not-in",e),this.keys=Bg("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Bg(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>W.fromName(s.referenceValue))}class ew extends Jt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Gu(e)&&Ur(e.arrayValue,this.value)}}class nw extends Jt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ur(this.value.arrayValue,e)}}class sw extends Jt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Ur(this.value.arrayValue,e)}}class iw extends Jt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Gu(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>Ur(this.value.arrayValue,s))}}/**
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
 */class rw{constructor(t,e=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ue=null}}function Sf(n,t=null,e=[],s=[],i=null,r=null,o=null){return new rw(n,t,e,s,i,r,o)}function Yu(n){const t=tt(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>Jl(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),lc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>Ai(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>Ai(s)).join(",")),t.ue=e}return t.ue}function Ku(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Q0(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Fg(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!kf(n.startAt,t.startAt)&&kf(n.endAt,t.endAt)}function Zl(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t,e=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ow(n,t,e,s,i,r,o,a){return new Li(n,t,e,s,i,r,o,a)}function Qu(n){return new Li(n)}function Cf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ug(n){return n.collectionGroup!==null}function Ar(n){const t=tt(n);if(t.ce===null){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ae(oe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new jr(r,s))}),e.has(oe.keyField().canonicalString())||t.ce.push(new jr(oe.keyField(),s))}return t.ce}function nn(n){const t=tt(n);return t.le||(t.le=aw(t,Ar(n))),t.le}function aw(n,t){if(n.limitType==="F")return Sf(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new jr(i.field,r)});const e=n.endAt?new Da(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Da(n.startAt.position,n.startAt.inclusive):null;return Sf(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function tu(n,t){const e=n.filters.concat([t]);return new Li(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ma(n,t,e){return new Li(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function uc(n,t){return Ku(nn(n),nn(t))&&n.limitType===t.limitType}function jg(n){return`${Yu(nn(n))}|lt:${n.limitType}`}function li(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(i=>$g(i)).join(", ")}]`),lc(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(i=>Ai(i)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(i=>Ai(i)).join(",")),`Target(${s})`}(nn(n))}; limitType=${n.limitType})`}function dc(n,t){return t.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):W.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,t)&&function(s,i){for(const r of Ar(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,t)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(n,t)&&function(s,i){return!(s.startAt&&!function(o,a,c){const l=Af(o,a,c);return o.inclusive?l<=0:l<0}(s.startAt,Ar(s),i)||s.endAt&&!function(o,a,c){const l=Af(o,a,c);return o.inclusive?l>=0:l>0}(s.endAt,Ar(s),i))}(n,t)}function cw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function zg(n){return(t,e)=>{let s=!1;for(const i of Ar(n)){const r=lw(i,t,e);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function lw(n,t,e){const s=n.field.isKeyField()?W.comparator(t.key,e.key):function(r,o,a){const c=o.data.field(r),l=a.data.field(r);return c!==null&&l!==null?Ii(c,l):Q()}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[e]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Hs(this.inner,(e,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return Dg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=new Ft(W.comparator);function Rn(){return uw}const Hg=new Ft(W.comparator);function gr(...n){let t=Hg;for(const e of n)t=t.insert(e.key,e);return t}function qg(n){let t=Hg;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function As(){return kr()}function Wg(){return kr()}function kr(){return new Vi(n=>n.toString(),(n,t)=>n.isEqual(t))}const dw=new Ft(W.comparator),hw=new ae(W.comparator);function at(...n){let t=hw;for(const e of n)t=t.add(e);return t}const fw=new ae(pt);function pw(){return fw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pa(t)?"-0":t}}function Gg(n){return{integerValue:""+n}}function mw(n,t){return q0(t)?Gg(t):Xu(n,t)}/**
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
 */class hc{constructor(){this._=void 0}}function gw(n,t,e){return n instanceof Oa?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&qu(r)&&(r=Wu(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(e,t):n instanceof zr?Kg(n,t):n instanceof Hr?Qg(n,t):function(i,r){const o=Yg(i,r),a=Rf(o)+Rf(i.Pe);return Xl(o)&&Xl(i.Pe)?Gg(a):Xu(i.serializer,a)}(n,t)}function _w(n,t,e){return n instanceof zr?Kg(n,t):n instanceof Hr?Qg(n,t):e}function Yg(n,t){return n instanceof Na?function(s){return Xl(s)||function(r){return!!r&&"doubleValue"in r}(s)}(t)?t:{integerValue:0}:null}class Oa extends hc{}class zr extends hc{constructor(t){super(),this.elements=t}}function Kg(n,t){const e=Xg(t);for(const s of n.elements)e.some(i=>cn(i,s))||e.push(s);return{arrayValue:{values:e}}}class Hr extends hc{constructor(t){super(),this.elements=t}}function Qg(n,t){let e=Xg(t);for(const s of n.elements)e=e.filter(i=>!cn(i,s));return{arrayValue:{values:e}}}class Na extends hc{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Rf(n){return Wt(n.integerValue||n.doubleValue)}function Xg(n){return Gu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function yw(n,t){return n.field.isEqual(t.field)&&function(s,i){return s instanceof zr&&i instanceof zr||s instanceof Hr&&i instanceof Hr?Ti(s.elements,i.elements,cn):s instanceof Na&&i instanceof Na?cn(s.Pe,i.Pe):s instanceof Oa&&i instanceof Oa}(n.transform,t.transform)}class vw{constructor(t,e){this.version=t,this.transformResults=e}}class Fe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Fe}static exists(t){return new Fe(void 0,t)}static updateTime(t){return new Fe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function da(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class fc{}function Jg(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ju(n.key,Fe.none()):new oo(n.key,n.data,Fe.none());{const e=n.data,s=Ce.empty();let i=new ae(oe.comparator);for(let r of t.fields)if(!i.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new as(n.key,s,new Oe(i.toArray()),Fe.none())}}function bw(n,t,e){n instanceof oo?function(i,r,o){const a=i.value.clone(),c=Df(i.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof as?function(i,r,o){if(!da(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Df(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(Zg(i)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Sr(n,t,e,s){return n instanceof oo?function(r,o,a,c){if(!da(r.precondition,o))return a;const l=r.value.clone(),d=Mf(r.fieldTransforms,c,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,t,e,s):n instanceof as?function(r,o,a,c){if(!da(r.precondition,o))return a;const l=Mf(r.fieldTransforms,c,o),d=o.data;return d.setAll(Zg(r)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(n,t,e,s):function(r,o,a){return da(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function xw(n,t){let e=null;for(const s of n.fieldTransforms){const i=t.data.field(s.field),r=Yg(s.transform,i||null);r!=null&&(e===null&&(e=Ce.empty()),e.set(s.field,r))}return e||null}function Pf(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Ti(s,i,(r,o)=>yw(r,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class oo extends fc{constructor(t,e,s,i=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class as extends fc{constructor(t,e,s,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Zg(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function Df(n,t,e){const s=new Map;wt(n.length===e.length);for(let i=0;i<e.length;i++){const r=n[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,_w(o,a,e[i]))}return s}function Mf(n,t,e){const s=new Map;for(const i of n){const r=i.transform,o=e.data.field(i.field);s.set(i.field,gw(r,o,t))}return s}class Ju extends fc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ww extends fc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(t,e,s,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&bw(r,t,s[i])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=Sr(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=Sr(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=Wg();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(i.key)?null:a;const c=Jg(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),at())}isEqual(t){return this.batchId===t.batchId&&Ti(this.mutations,t.mutations,(e,s)=>Pf(e,s))&&Ti(this.baseMutations,t.baseMutations,(e,s)=>Pf(e,s))}}class Zu{constructor(t,e,s,i){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=i}static from(t,e,s){wt(t.mutations.length===s.length);let i=function(){return dw}();const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Zu(t,e,s,i)}}/**
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
 */class Tw{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Iw{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qt,dt;function Aw(n){switch(n){default:return Q();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function t_(n){if(n===void 0)return Cn("GRPC error has no .code"),V.UNKNOWN;switch(n){case Qt.OK:return V.OK;case Qt.CANCELLED:return V.CANCELLED;case Qt.UNKNOWN:return V.UNKNOWN;case Qt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Qt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Qt.INTERNAL:return V.INTERNAL;case Qt.UNAVAILABLE:return V.UNAVAILABLE;case Qt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Qt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Qt.NOT_FOUND:return V.NOT_FOUND;case Qt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Qt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Qt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Qt.ABORTED:return V.ABORTED;case Qt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Qt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Qt.DATA_LOSS:return V.DATA_LOSS;default:return Q()}}(dt=Qt||(Qt={}))[dt.OK=0]="OK",dt[dt.CANCELLED=1]="CANCELLED",dt[dt.UNKNOWN=2]="UNKNOWN",dt[dt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",dt[dt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",dt[dt.NOT_FOUND=5]="NOT_FOUND",dt[dt.ALREADY_EXISTS=6]="ALREADY_EXISTS",dt[dt.PERMISSION_DENIED=7]="PERMISSION_DENIED",dt[dt.UNAUTHENTICATED=16]="UNAUTHENTICATED",dt[dt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",dt[dt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",dt[dt.ABORTED=10]="ABORTED",dt[dt.OUT_OF_RANGE=11]="OUT_OF_RANGE",dt[dt.UNIMPLEMENTED=12]="UNIMPLEMENTED",dt[dt.INTERNAL=13]="INTERNAL",dt[dt.UNAVAILABLE=14]="UNAVAILABLE",dt[dt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function kw(){return new TextEncoder}/**
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
 */const Sw=new Ss([4294967295,4294967295],0);function Of(n){const t=kw().encode(n),e=new Tg;return e.update(t),new Uint8Array(e.digest())}function Nf(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Ss([e,s],0),new Ss([i,r],0)]}class td{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new _r(`Invalid padding: ${e}`);if(s<0)throw new _r(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new _r(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new _r(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Ss.fromNumber(this.Ie)}Ee(t,e,s){let i=t.add(e.multiply(Ss.fromNumber(s)));return i.compare(Sw)===1&&(i=new Ss([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Of(t),[s,i]=Nf(e);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);if(!this.de(o))return!1}return!0}static create(t,e,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new td(r,i,e);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=Of(t),[s,i]=Nf(e);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class _r extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,e,s,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const i=new Map;return i.set(t,ao.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new pc(J.min(),i,new Ft(pt),Rn(),at())}}class ao{constructor(t,e,s,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new ao(s,e,at(),at(),at())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t,e,s,i){this.Re=t,this.removedTargetIds=e,this.key=s,this.Ve=i}}class e_{constructor(t,e){this.targetId=t,this.me=e}}class n_{constructor(t,e,s=ce.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=i}}class Lf{constructor(){this.fe=0,this.ge=Ff(),this.pe=ce.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=at(),e=at(),s=at();return this.ge.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:s=s.add(i);break;default:Q()}}),new ao(this.pe,this.ye,t,e,s)}Ce(){this.we=!1,this.ge=Ff()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,wt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Cw{constructor(t){this.Le=t,this.Be=new Map,this.ke=Rn(),this.qe=Vf(),this.Qe=new Ft(pt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const s=this.Ge(e);switch(t.state){case 0:this.ze(e)&&s.De(t.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(t.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(s.Ne(),s.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),s.De(t.resumeToken));break;default:Q()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((s,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,s=t.me.count,i=this.Je(e);if(i){const r=i.target;if(Zl(r))if(s===0){const o=new W(r.path);this.Ue(e,o,ye.newNoDocument(o,J.min()))}else wt(s===1);else{const o=this.Ye(e);if(o!==s){const a=this.Ze(t),c=a?this.Xe(a,t,o):1;if(c!==0){this.je(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,l)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=e;let o,a;try{o=Vs(s).toUint8Array()}catch(c){if(c instanceof Mg)return Ei("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new td(o,i,r)}catch(c){return Ei(c instanceof _r?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(t,e,s){return e.me.count===s-this.nt(t,e.targetId)?0:2}nt(t,e){const s=this.Le.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,r,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((r,o)=>{const a=this.Je(o);if(a){if(r.current&&Zl(a.target)){const c=new W(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,ye.newNoDocument(c,t))}r.be&&(e.set(o,r.ve()),r.Ce())}});let s=at();this.qe.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(t));const i=new pc(t,e,this.Qe,this.ke,s);return this.ke=Rn(),this.qe=Vf(),this.Qe=new Ft(pt),i}$e(t,e){if(!this.ze(t))return;const s=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,s),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,s){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),s&&(this.ke=this.ke.insert(e,s))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Lf,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ae(pt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||q("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Lf),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Vf(){return new Ft(W.comparator)}function Ff(){return new Ft(W.comparator)}const Rw={asc:"ASCENDING",desc:"DESCENDING"},Pw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Dw={and:"AND",or:"OR"};class Mw{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function eu(n,t){return n.useProto3Json||lc(t)?t:{value:t}}function La(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function s_(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ow(n,t){return La(n,t.toTimestamp())}function sn(n){return wt(!!n),J.fromTimestamp(function(e){const s=ss(e);return new Vt(s.seconds,s.nanos)}(n))}function ed(n,t){return nu(n,t).canonicalString()}function nu(n,t){const e=function(i){return new Ct(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function i_(n){const t=Ct.fromString(n);return wt(l_(t)),t}function su(n,t){return ed(n.databaseId,t.path)}function pl(n,t){const e=i_(t);if(e.get(1)!==n.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new W(o_(e))}function r_(n,t){return ed(n.databaseId,t)}function Nw(n){const t=i_(n);return t.length===4?Ct.emptyPath():o_(t)}function iu(n){return new Ct(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function o_(n){return wt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function $f(n,t,e){return{name:su(n,t),fields:e.value.mapValue.fields}}function Lw(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Q()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(l,d){return l.useProto3Json?(wt(d===void 0||typeof d=="string"),ce.fromBase64String(d||"")):(wt(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ce.fromUint8Array(d||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const d=l.code===void 0?V.UNKNOWN:t_(l.code);return new z(d,l.message||"")}(o);e=new n_(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=pl(n,s.document.name),r=sn(s.document.updateTime),o=s.document.createTime?sn(s.document.createTime):J.min(),a=new Ce({mapValue:{fields:s.document.fields}}),c=ye.newFoundDocument(i,r,o,a),l=s.targetIds||[],d=s.removedTargetIds||[];e=new ha(l,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=pl(n,s.document),r=s.readTime?sn(s.readTime):J.min(),o=ye.newNoDocument(i,r),a=s.removedTargetIds||[];e=new ha([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=pl(n,s.document),r=s.removedTargetIds||[];e=new ha([],r,i,null)}else{if(!("filter"in t))return Q();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new Iw(i,r),a=s.targetId;e=new e_(a,o)}}return e}function Vw(n,t){let e;if(t instanceof oo)e={update:$f(n,t.key,t.value)};else if(t instanceof Ju)e={delete:su(n,t.key)};else if(t instanceof as)e={update:$f(n,t.key,t.data),updateMask:Ww(t.fieldMask)};else{if(!(t instanceof ww))return Q();e={verify:su(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Oa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Hr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Na)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Q()}(0,s))),t.precondition.isNone||(e.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:Ow(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Q()}(n,t.precondition)),e}function Fw(n,t){return n&&n.length>0?(wt(t!==void 0),n.map(e=>function(i,r){let o=i.updateTime?sn(i.updateTime):sn(r);return o.isEqual(J.min())&&(o=sn(r)),new vw(o,i.transformResults||[])}(e,t))):[]}function $w(n,t){return{documents:[r_(n,t.path)]}}function Bw(n,t){const e={structuredQuery:{}},s=t.path;let i;t.collectionGroup!==null?(i=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=r_(n,i);const r=function(l){if(l.length!==0)return c_(qe.create(l,"and"))}(t.filters);r&&(e.structuredQuery.where=r);const o=function(l){if(l.length!==0)return l.map(d=>function(f){return{field:ui(f.field),direction:zw(f.dir)}}(d))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=eu(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),{_t:e,parent:i}}function Uw(n){let t=Nw(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let i=null;if(s>0){wt(s===1);const d=e.from[0];d.allDescendants?i=d.collectionId:t=t.child(d.collectionId)}let r=[];e.where&&(r=function(h){const f=a_(h);return f instanceof qe&&Vg(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(f=>function(g){return new jr(di(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,lc(f)?null:f}(e.limit));let c=null;e.startAt&&(c=function(h){const f=!!h.before,m=h.values||[];return new Da(m,f)}(e.startAt));let l=null;return e.endAt&&(l=function(h){const f=!h.before,m=h.values||[];return new Da(m,f)}(e.endAt)),ow(t,i,o,r,a,"F",c,l)}function jw(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function a_(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=di(e.unaryFilter.field);return Jt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=di(e.unaryFilter.field);return Jt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=di(e.unaryFilter.field);return Jt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=di(e.unaryFilter.field);return Jt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(n):n.fieldFilter!==void 0?function(e){return Jt.create(di(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return qe.create(e.compositeFilter.filters.map(s=>a_(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(e.compositeFilter.op))}(n):Q()}function zw(n){return Rw[n]}function Hw(n){return Pw[n]}function qw(n){return Dw[n]}function ui(n){return{fieldPath:n.canonicalString()}}function di(n){return oe.fromServerFormat(n.fieldPath)}function c_(n){return n instanceof Jt?function(e){if(e.op==="=="){if(If(e.value))return{unaryFilter:{field:ui(e.field),op:"IS_NAN"}};if(Tf(e.value))return{unaryFilter:{field:ui(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(If(e.value))return{unaryFilter:{field:ui(e.field),op:"IS_NOT_NAN"}};if(Tf(e.value))return{unaryFilter:{field:ui(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ui(e.field),op:Hw(e.op),value:e.value}}}(n):n instanceof qe?function(e){const s=e.getFilters().map(i=>c_(i));return s.length===1?s[0]:{compositeFilter:{op:qw(e.op),filters:s}}}(n):Q()}function Ww(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function l_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,e,s,i,r=J.min(),o=J.min(),a=ce.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Hn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(t){this.ct=t}}function Yw(n){const t=Uw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ma(t,t.limit,"L"):t}/**
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
 */class Kw{constructor(){this.un=new Qw}addToCollectionParentIndex(t,e){return this.un.add(e),$.resolve()}getCollectionParents(t,e){return $.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return $.resolve()}deleteFieldIndex(t,e){return $.resolve()}deleteAllFieldIndexes(t){return $.resolve()}createTargetIndexes(t,e){return $.resolve()}getDocumentsMatchingTarget(t,e){return $.resolve(null)}getIndexType(t,e){return $.resolve(0)}getFieldIndexes(t,e){return $.resolve([])}getNextCollectionGroupToUpdate(t){return $.resolve(null)}getMinOffset(t,e){return $.resolve(ns.min())}getMinOffsetFromCollectionGroup(t,e){return $.resolve(ns.min())}updateCollectionGroup(t,e,s){return $.resolve()}updateIndexEntries(t,e){return $.resolve()}}class Qw{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e]||new ae(Ct.comparator),r=!i.has(s);return this.index[e]=i.add(s),r}has(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e];return i&&i.has(s)}getEntries(t){return(this.index[t]||new ae(Ct.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new ki(0)}static kn(){return new ki(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.changes=new Vi(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ye.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?$.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jw{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(t,e,s,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(s!==null&&Sr(s.mutation,i,Oe.empty(),Vt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,at()).next(()=>s))}getLocalViewOfDocuments(t,e,s=at()){const i=As();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,s).next(r=>{let o=gr();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const s=As();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,at()))}populateOverlays(t,e,s){const i=[];return s.forEach(r=>{e.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,s,i){let r=Rn();const o=kr(),a=function(){return kr()}();return e.forEach((c,l)=>{const d=s.get(l.key);i.has(l.key)&&(d===void 0||d.mutation instanceof as)?r=r.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),Sr(d.mutation,l,d.mutation.getFieldMask(),Vt.now())):o.set(l.key,Oe.empty())}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((l,d)=>o.set(l,d)),e.forEach((l,d)=>{var h;return a.set(l,new Jw(d,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const s=kr();let i=new Ft((o,a)=>o-a),r=at();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=e.get(c);if(l===null)return;let d=s.get(c)||Oe.empty();d=a.applyToLocalView(l,d),s.set(c,d);const h=(i.get(a.batchId)||at()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,d=c.value,h=Wg();d.forEach(f=>{if(!r.has(f)){const m=Jg(e.get(f),s.get(f));m!==null&&h.set(f,m),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return $.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ug(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,i):this.getDocumentsMatchingCollectionQuery(t,e,s,i)}getNextDocuments(t,e,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,i-r.size):$.resolve(As());let a=-1,c=r;return o.next(l=>$.forEach(l,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(d)?$.resolve():this.remoteDocumentCache.getEntry(t,d).next(f=>{c=c.insert(d,f)}))).next(()=>this.populateOverlays(t,l,r)).next(()=>this.computeViews(t,c,l,at())).next(d=>({batchId:a,changes:qg(d)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new W(e)).next(s=>{let i=gr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,s,i){const r=e.collectionGroup;let o=gr();return this.indexManager.getCollectionParents(t,r).next(a=>$.forEach(a,c=>{const l=function(h,f){return new Li(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,c.child(r));return this.getDocumentsMatchingCollectionQuery(t,l,s,i).next(d=>{d.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,r,i))).next(o=>{r.forEach((c,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,ye.newInvalidDocument(d)))});let a=gr();return o.forEach((c,l)=>{const d=r.get(c);d!==void 0&&Sr(d.mutation,l,Oe.empty(),Vt.now()),dc(e,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return $.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:sn(i.createTime)}}(e)),$.resolve()}getNamedQuery(t,e){return $.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:Yw(i.bundledQuery),readTime:sn(i.readTime)}}(e)),$.resolve()}}/**
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
 */class eE{constructor(){this.overlays=new Ft(W.comparator),this.Ir=new Map}getOverlay(t,e){return $.resolve(this.overlays.get(e))}getOverlays(t,e){const s=As();return $.forEach(e,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((i,r)=>{this.ht(t,e,r)}),$.resolve()}removeOverlaysForBatchId(t,e,s){const i=this.Ir.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Ir.delete(s)),$.resolve()}getOverlaysForCollection(t,e,s){const i=As(),r=e.length+1,o=new W(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return $.resolve(i)}getOverlaysForCollectionGroup(t,e,s,i){let r=new Ft((l,d)=>l-d);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>s){let d=r.get(l.largestBatchId);d===null&&(d=As(),r=r.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const a=As(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,d)=>a.set(l,d)),!(a.size()>=i)););return $.resolve(a)}ht(t,e,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(s.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Tw(e,s));let r=this.Ir.get(e);r===void 0&&(r=at(),this.Ir.set(e,r)),this.Ir.set(e,r.add(s.key))}}/**
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
 */class nE{constructor(){this.sessionToken=ce.EMPTY_BYTE_STRING}getSessionToken(t){return $.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(){this.Tr=new ae(te.Er),this.dr=new ae(te.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const s=new te(t,e);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.Vr(new te(t,e))}mr(t,e){t.forEach(s=>this.removeReference(s,e))}gr(t){const e=new W(new Ct([])),s=new te(e,t),i=new te(e,t+1),r=[];return this.dr.forEachInRange([s,i],o=>{this.Vr(o),r.push(o.key)}),r}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new W(new Ct([])),s=new te(e,t),i=new te(e,t+1);let r=at();return this.dr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const e=new te(t,0),s=this.Tr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class te{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return W.comparator(t.key,e.key)||pt(t.wr,e.wr)}static Ar(t,e){return pt(t.wr,e.wr)||W.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ae(te.Er)}checkEmpty(t){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,i){const r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ew(r,e,s,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new te(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(t,e){return $.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,i=this.vr(s),r=i<0?0:i;return $.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new te(e,0),i=new te(e,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([s,i],o=>{const a=this.Dr(o.wr);r.push(a)}),$.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new ae(pt);return e.forEach(i=>{const r=new te(i,0),o=new te(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([r,o],a=>{s=s.add(a.wr)})}),$.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,i=s.length+1;let r=s;W.isDocumentKey(r)||(r=r.child(""));const o=new te(new W(r),0);let a=new ae(pt);return this.br.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.wr)),!0)},o),$.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(s=>{const i=this.Dr(s);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){wt(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return $.forEach(e.mutations,i=>{const r=new te(i.key,e.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=s})}On(t){}containsKey(t,e){const s=new te(e,0),i=this.br.firstAfterOrEqual(s);return $.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,$.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(t){this.Mr=t,this.docs=function(){return new Ft(W.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.Mr(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return $.resolve(s?s.document.mutableCopy():ye.newInvalidDocument(e))}getEntries(t,e){let s=Rn();return e.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ye.newInvalidDocument(i))}),$.resolve(s)}getDocumentsMatchingQuery(t,e,s,i){let r=Rn();const o=e.path,a=new W(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:d}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||U0(B0(d),s)<=0||(i.has(d.key)||dc(e,d))&&(r=r.insert(d.key,d.mutableCopy()))}return $.resolve(r)}getAllFromCollectionGroup(t,e,s,i){Q()}Or(t,e){return $.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new rE(this)}getSize(t){return $.resolve(this.size)}}class rE extends Xw{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(s)}),$.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(t){this.persistence=t,this.Nr=new Vi(e=>Yu(e),Ku),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new nd,this.targetCount=0,this.kr=ki.Bn()}forEachTarget(t,e){return this.Nr.forEach((s,i)=>e(i)),$.resolve()}getLastRemoteSnapshotVersion(t){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return $.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.Lr&&(this.Lr=e),$.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new ki(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,$.resolve()}updateTargetData(t,e){return this.Kn(e),$.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,$.resolve()}removeTargets(t,e,s){let i=0;const r=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=e&&s.get(a.targetId)===null&&(this.Nr.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),$.waitFor(r).next(()=>i)}getTargetCount(t){return $.resolve(this.targetCount)}getTargetData(t,e){const s=this.Nr.get(e)||null;return $.resolve(s)}addMatchingKeys(t,e,s){return this.Br.Rr(e,s),$.resolve()}removeMatchingKeys(t,e,s){this.Br.mr(e,s);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),$.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),$.resolve()}getMatchingKeysForTargetId(t,e){const s=this.Br.yr(e);return $.resolve(s)}containsKey(t,e){return $.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Hu(0),this.Kr=!1,this.Kr=!0,this.$r=new nE,this.referenceDelegate=t(this),this.Ur=new oE(this),this.indexManager=new Kw,this.remoteDocumentCache=function(i){return new iE(i)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new Gw(e),this.Gr=new tE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new eE,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.qr[t.toKey()];return s||(s=new sE(e,this.referenceDelegate),this.qr[t.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,s){q("MemoryPersistence","Starting transaction:",t);const i=new cE(this.Qr.next());return this.referenceDelegate.zr(),s(i).next(r=>this.referenceDelegate.jr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Hr(t,e){return $.or(Object.values(this.qr).map(s=>()=>s.containsKey(t,e)))}}class cE extends z0{constructor(t){super(),this.currentSequenceNumber=t}}class sd{constructor(t){this.persistence=t,this.Jr=new nd,this.Yr=null}static Zr(t){return new sd(t)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(t,e,s){return this.Jr.addReference(s,e),this.Xr.delete(s.toString()),$.resolve()}removeReference(t,e,s){return this.Jr.removeReference(s,e),this.Xr.add(s.toString()),$.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),$.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(r=>this.Xr.add(r.toString()))}).next(()=>s.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,s=>{const i=W.fromPath(s);return this.ei(t,i).next(r=>{r||e.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(s=>{s?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return $.or([()=>$.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t,e,s,i){this.targetId=t,this.fromCache=e,this.$i=s,this.Ui=i}static Wi(t,e){let s=at(),i=at();for(const r of e.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new id(t,e.fromCache,s,i)}}/**
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
 */class lE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class uE{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return dx()?8:H0(be())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,s,i){const r={result:null};return this.Yi(t,e).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Zi(t,e,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new lE;return this.Xi(t,e,o).next(a=>{if(r.result=a,this.zi)return this.es(t,e,o,a.size)})}).next(()=>r.result)}es(t,e,s,i){return s.documentReadCount<this.ji?(er()<=lt.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",li(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(er()<=lt.DEBUG&&q("QueryEngine","Query:",li(e),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Hi*i?(er()<=lt.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",li(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,nn(e))):$.resolve())}Yi(t,e){if(Cf(e))return $.resolve(null);let s=nn(e);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Ma(e,null,"F"),s=nn(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=at(...r);return this.Ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const l=this.ts(e,a);return this.ns(e,l,o,c.readTime)?this.Yi(t,Ma(e,null,"F")):this.rs(t,l,e,c)}))})))}Zi(t,e,s,i){return Cf(e)||i.isEqual(J.min())?$.resolve(null):this.Ji.getDocuments(t,s).next(r=>{const o=this.ts(e,r);return this.ns(e,o,s,i)?$.resolve(null):(er()<=lt.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),li(e)),this.rs(t,o,e,$0(i,-1)).next(a=>a))})}ts(t,e){let s=new ae(zg(t));return e.forEach((i,r)=>{dc(t,r)&&(s=s.add(r))}),s}ns(t,e,s,i){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Xi(t,e,s){return er()<=lt.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",li(e)),this.Ji.getDocumentsMatchingQuery(t,e,ns.min(),s)}rs(t,e,s,i){return this.Ji.getDocumentsMatchingQuery(t,s,i).next(r=>(e.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(t,e,s,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new Ft(pt),this._s=new Vi(r=>Yu(r),Ku),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(s)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Zw(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function hE(n,t,e,s){return new dE(n,t,e,s)}async function u_(n,t){const e=tt(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let i;return e.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,e.ls(t),e.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=at();for(const l of i){o.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}for(const l of r){a.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}return e.localDocuments.getDocuments(s,c).next(l=>({hs:l,removedBatchIds:o,addedBatchIds:a}))})})}function fE(n,t){const e=tt(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=e.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,l,d){const h=l.batch,f=h.keys();let m=$.resolve();return f.forEach(g=>{m=m.next(()=>d.getEntry(c,g)).next(y=>{const v=l.docVersions.get(g);wt(v!==null),y.version.compareTo(v)<0&&(h.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),d.addEntry(y)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,s,t,r).next(()=>r.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=at();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>e.localDocuments.getDocuments(s,i))})}function d_(n){const t=tt(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function pE(n,t){const e=tt(n),s=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const a=[];t.targetChanges.forEach((d,h)=>{const f=i.get(h);if(!f)return;a.push(e.Ur.removeMatchingKeys(r,d.removedDocuments,h).next(()=>e.Ur.addMatchingKeys(r,d.addedDocuments,h)));let m=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(ce.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(d.resumeToken,s)),i=i.insert(h,m),function(y,v,T){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,m,d)&&a.push(e.Ur.updateTargetData(r,m))});let c=Rn(),l=at();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,d))}),a.push(mE(r,o,t.documentUpdates).next(d=>{c=d.Ps,l=d.Is})),!s.isEqual(J.min())){const d=e.Ur.getLastRemoteSnapshotVersion(r).next(h=>e.Ur.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(d)}return $.waitFor(a).next(()=>o.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(e.os=i,r))}function mE(n,t,e){let s=at(),i=at();return e.forEach(r=>s=s.add(r)),t.getEntries(n,s).next(r=>{let o=Rn();return e.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function gE(n,t){const e=tt(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function _E(n,t){const e=tt(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return e.Ur.getTargetData(s,t).next(r=>r?(i=r,$.resolve(i)):e.Ur.allocateTargetId(s).next(o=>(i=new Hn(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.Ur.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=e.os.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(s.targetId,s),e._s.set(t,s.targetId)),s})}async function ru(n,t,e){const s=tt(n),i=s.os.get(t),r=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ro(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.os=s.os.remove(t),s._s.delete(i.target)}function Bf(n,t,e){const s=tt(n);let i=J.min(),r=at();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,d){const h=tt(c),f=h._s.get(d);return f!==void 0?$.resolve(h.os.get(f)):h.Ur.getTargetData(l,d)}(s,o,nn(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.ss.getDocumentsMatchingQuery(o,t,e?i:J.min(),e?r:at())).next(a=>(yE(s,cw(t),a),{documents:a,Ts:r})))}function yE(n,t,e){let s=n.us.get(t)||J.min();e.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.us.set(t,s)}class Uf{constructor(){this.activeTargetIds=pw()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vE{constructor(){this.so=new Uf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,s){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Uf,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class bE{_o(t){}shutdown(){}}/**
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
 */class jf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zo=null;function ml(){return zo===null?zo=function(){return 268435456+Math.round(2147483648*Math.random())}():zo++,"0x"+zo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he="WebChannelConnection";class EE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const s=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+e.host,this.vo=`projects/${i}/databases/${r}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Fo(){return!1}Mo(e,s,i,r,o){const a=ml(),c=this.xo(e,s.toUriEncodedString());q("RestConnection",`Sending RPC '${e}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(l,r,o),this.No(e,c,l,i).then(d=>(q("RestConnection",`Received RPC '${e}' ${a}: `,d),d),d=>{throw Ei("RestConnection",`RPC '${e}' ${a} failed with error: `,d,"url: ",c,"request:",i),d})}Lo(e,s,i,r,o,a){return this.Mo(e,s,i,r,o)}Oo(e,s,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ni}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>e[o]=r),i&&i.headers.forEach((r,o)=>e[o]=r)}xo(e,s){const i=xE[e];return`${this.Do}/v1/${s}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,s,i){const r=ml();return new Promise((o,a)=>{const c=new Ig;c.setWithCredentials(!0),c.listenOnce(Ag.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case la.NO_ERROR:const d=c.getResponseJson();q(he,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(d)),o(d);break;case la.TIMEOUT:q(he,`RPC '${t}' ${r} timed out`),a(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case la.HTTP_ERROR:const h=c.getStatus();if(q(he,`RPC '${t}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const g=function(v){const T=v.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(T)>=0?T:V.UNKNOWN}(m.status);a(new z(g,m.message))}else a(new z(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new z(V.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{q(he,`RPC '${t}' ${r} completed.`)}});const l=JSON.stringify(i);q(he,`RPC '${t}' ${r} sending request:`,i),c.send(e,"POST",l,s,15)})}Bo(t,e,s){const i=ml(),r=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Cg(),a=Sg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,s),c.encodeInitMessageHeaders=!0;const d=r.join("");q(he,`Creating RPC '${t}' stream ${i}: ${d}`,c);const h=o.createWebChannel(d,c);let f=!1,m=!1;const g=new wE({Io:v=>{m?q(he,`Not sending because RPC '${t}' stream ${i} is closed:`,v):(f||(q(he,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),q(he,`RPC '${t}' stream ${i} sending:`,v),h.send(v))},To:()=>h.close()}),y=(v,T,k)=>{v.listen(T,C=>{try{k(C)}catch(P){setTimeout(()=>{throw P},0)}})};return y(h,mr.EventType.OPEN,()=>{m||(q(he,`RPC '${t}' stream ${i} transport opened.`),g.yo())}),y(h,mr.EventType.CLOSE,()=>{m||(m=!0,q(he,`RPC '${t}' stream ${i} transport closed`),g.So())}),y(h,mr.EventType.ERROR,v=>{m||(m=!0,Ei(he,`RPC '${t}' stream ${i} transport errored:`,v),g.So(new z(V.UNAVAILABLE,"The operation could not be completed")))}),y(h,mr.EventType.MESSAGE,v=>{var T;if(!m){const k=v.data[0];wt(!!k);const C=k,P=C.error||((T=C[0])===null||T===void 0?void 0:T.error);if(P){q(he,`RPC '${t}' stream ${i} received error:`,P);const M=P.status;let D=function(x){const A=Qt[x];if(A!==void 0)return t_(A)}(M),w=P.message;D===void 0&&(D=V.INTERNAL,w="Unknown error status: "+M+" with message "+P.message),m=!0,g.So(new z(D,w)),h.close()}else q(he,`RPC '${t}' stream ${i} received:`,k),g.bo(k)}}),y(a,kg.STAT_EVENT,v=>{v.stat===Kl.PROXY?q(he,`RPC '${t}' stream ${i} detected buffering proxy`):v.stat===Kl.NOPROXY&&q(he,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.wo()},0),g}}function gl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(n){return new Mw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(t,e,s=1e3,i=1.5,r=6e4){this.ui=t,this.timerId=e,this.ko=s,this.qo=i,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-s);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(t,e,s,i,r,o,a,c){this.ui=t,this.Ho=s,this.Jo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new h_(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Cn(e.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Yo===e&&this.P_(s,i)},s=>{t(()=>{const i=new z(V.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(i)})})}P_(t,e){const s=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{s(()=>this.I_(i))}),this.stream.onMessage(i=>{s(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return q("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TE extends f_{constructor(t,e,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Lw(this.serializer,t),s=function(r){if(!("targetChange"in r))return J.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?sn(o.readTime):J.min()}(t);return this.listener.d_(e,s)}A_(t){const e={};e.database=iu(this.serializer),e.addTarget=function(r,o){let a;const c=o.target;if(a=Zl(c)?{documents:$w(r,c)}:{query:Bw(r,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=s_(r,o.resumeToken);const l=eu(r,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=La(r,o.snapshotVersion.toTimestamp());const l=eu(r,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const s=jw(this.serializer,t);s&&(e.labels=s),this.a_(e)}R_(t){const e={};e.database=iu(this.serializer),e.removeTarget=t,this.a_(e)}}class IE extends f_{constructor(t,e,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return wt(!!t.streamToken),this.lastStreamToken=t.streamToken,wt(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){wt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Fw(t.writeResults,t.commitTime),s=sn(t.commitTime);return this.listener.g_(s,e)}p_(){const t={};t.database=iu(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>Vw(this.serializer,s))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE extends class{}{constructor(t,e,s,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Mo(t,nu(e,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(V.UNKNOWN,r.toString())})}Lo(t,e,s,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(t,nu(e,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class kE{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Cn(e),this.D_=!1):q("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(t,e,s,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o(o=>{s.enqueueAndForget(async()=>{qs(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=tt(c);l.L_.add(4),await co(l),l.q_.set("Unknown"),l.L_.delete(4),await gc(l)}(this))})}),this.q_=new kE(s,i)}}async function gc(n){if(qs(n))for(const t of n.B_)await t(!0)}async function co(n){for(const t of n.B_)await t(!1)}function p_(n,t){const e=tt(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),cd(e)?ad(e):Fi(e).r_()&&od(e,t))}function rd(n,t){const e=tt(n),s=Fi(e);e.N_.delete(t),s.r_()&&m_(e,t),e.N_.size===0&&(s.r_()?s.o_():qs(e)&&e.q_.set("Unknown"))}function od(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(J.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Fi(n).A_(t)}function m_(n,t){n.Q_.xe(t),Fi(n).R_(t)}function ad(n){n.Q_=new Cw({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Fi(n).start(),n.q_.v_()}function cd(n){return qs(n)&&!Fi(n).n_()&&n.N_.size>0}function qs(n){return tt(n).L_.size===0}function g_(n){n.Q_=void 0}async function CE(n){n.q_.set("Online")}async function RE(n){n.N_.forEach((t,e)=>{od(n,t)})}async function PE(n,t){g_(n),cd(n)?(n.q_.M_(t),ad(n)):n.q_.set("Unknown")}async function DE(n,t,e){if(n.q_.set("Online"),t instanceof n_&&t.state===2&&t.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,t)}catch(s){q("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Va(n,s)}else if(t instanceof ha?n.Q_.Ke(t):t instanceof e_?n.Q_.He(t):n.Q_.We(t),!e.isEqual(J.min()))try{const s=await d_(n.localStore);e.compareTo(s)>=0&&await function(r,o){const a=r.Q_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.N_.get(l);d&&r.N_.set(l,d.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const d=r.N_.get(c);if(!d)return;r.N_.set(c,d.withResumeToken(ce.EMPTY_BYTE_STRING,d.snapshotVersion)),m_(r,c);const h=new Hn(d.target,c,l,d.sequenceNumber);od(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(s){q("RemoteStore","Failed to raise snapshot:",s),await Va(n,s)}}async function Va(n,t,e){if(!ro(t))throw t;n.L_.add(1),await co(n),n.q_.set("Offline"),e||(e=()=>d_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await gc(n)})}function __(n,t){return t().catch(e=>Va(n,e,t))}async function _c(n){const t=tt(n),e=is(t);let s=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;ME(t);)try{const i=await gE(t.localStore,s);if(i===null){t.O_.length===0&&e.o_();break}s=i.batchId,OE(t,i)}catch(i){await Va(t,i)}y_(t)&&v_(t)}function ME(n){return qs(n)&&n.O_.length<10}function OE(n,t){n.O_.push(t);const e=is(n);e.r_()&&e.V_&&e.m_(t.mutations)}function y_(n){return qs(n)&&!is(n).n_()&&n.O_.length>0}function v_(n){is(n).start()}async function NE(n){is(n).p_()}async function LE(n){const t=is(n);for(const e of n.O_)t.m_(e.mutations)}async function VE(n,t,e){const s=n.O_.shift(),i=Zu.from(s,t,e);await __(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await _c(n)}async function FE(n,t){t&&is(n).V_&&await async function(s,i){if(function(o){return Aw(o)&&o!==V.ABORTED}(i.code)){const r=s.O_.shift();is(s).s_(),await __(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await _c(s)}}(n,t),y_(n)&&v_(n)}async function zf(n,t){const e=tt(n);e.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const s=qs(e);e.L_.add(3),await co(e),s&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await gc(e)}async function $E(n,t){const e=tt(n);t?(e.L_.delete(2),await gc(e)):t||(e.L_.add(2),await co(e),e.q_.set("Unknown"))}function Fi(n){return n.K_||(n.K_=function(e,s,i){const r=tt(e);return r.w_(),new TE(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:CE.bind(null,n),Ro:RE.bind(null,n),mo:PE.bind(null,n),d_:DE.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),cd(n)?ad(n):n.q_.set("Unknown")):(await n.K_.stop(),g_(n))})),n.K_}function is(n){return n.U_||(n.U_=function(e,s,i){const r=tt(e);return r.w_(),new IE(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:NE.bind(null,n),mo:FE.bind(null,n),f_:LE.bind(null,n),g_:VE.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await _c(n)):(await n.U_.stop(),n.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t,e,s,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new An,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,i,r){const o=Date.now()+s,a=new ld(t,e,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ud(n,t){if(Cn("AsyncQueue",`${t}: ${n}`),ro(n))return new z(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t){this.comparator=t?(e,s)=>t(e,s)||W.comparator(e.key,s.key):(e,s)=>W.comparator(e.key,s.key),this.keyedMap=gr(),this.sortedSet=new Ft(this.comparator)}static emptySet(t){return new _i(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof _i)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new _i;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this.W_=new Ft(W.comparator)}track(t){const e=t.doc.key,s=this.W_.get(e);s?t.type!==0&&s.type===3?this.W_=this.W_.insert(e,t):t.type===3&&s.type!==1?this.W_=this.W_.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.W_=this.W_.remove(e):t.type===1&&s.type===2?this.W_=this.W_.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):Q():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,s)=>{t.push(s)}),t}}class Si{constructor(t,e,s,i,r,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,s,i,r){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Si(t,e,_i.emptySet(e),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&uc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==s[i].type||!e[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class UE{constructor(){this.queries=qf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,s){const i=tt(e),r=i.queries;i.queries=qf(),r.forEach((o,a)=>{for(const c of a.j_)c.onError(s)})})(this,new z(V.ABORTED,"Firestore shutting down"))}}function qf(){return new Vi(n=>jg(n),uc)}async function b_(n,t){const e=tt(n);let s=3;const i=t.query;let r=e.queries.get(i);r?!r.H_()&&t.J_()&&(s=2):(r=new BE,s=t.J_()?0:1);try{switch(s){case 0:r.z_=await e.onListen(i,!0);break;case 1:r.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(o){const a=ud(o,`Initialization of query '${li(t.query)}' failed`);return void t.onError(a)}e.queries.set(i,r),r.j_.push(t),t.Z_(e.onlineState),r.z_&&t.X_(r.z_)&&dd(e)}async function x_(n,t){const e=tt(n),s=t.query;let i=3;const r=e.queries.get(s);if(r){const o=r.j_.indexOf(t);o>=0&&(r.j_.splice(o,1),r.j_.length===0?i=t.J_()?0:1:!r.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function jE(n,t){const e=tt(n);let s=!1;for(const i of t){const r=i.query,o=e.queries.get(r);if(o){for(const a of o.j_)a.X_(i)&&(s=!0);o.z_=i}}s&&dd(e)}function zE(n,t,e){const s=tt(n),i=s.queries.get(t);if(i)for(const r of i.j_)r.onError(e);s.queries.delete(t)}function dd(n){n.Y_.forEach(t=>{t.next()})}var ou,Wf;(Wf=ou||(ou={})).ea="default",Wf.Cache="cache";class w_{constructor(t,e,s){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Si(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const s=e!=="Offline";return(!this.options._a||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Si.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==ou.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(t){this.key=t}}class T_{constructor(t){this.key=t}}class HE{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=at(),this.mutatedKeys=at(),this.Aa=zg(t),this.Ra=new _i(this.Aa)}get Va(){return this.Ta}ma(t,e){const s=e?e.fa:new Hf,i=e?e.Ra:this.Ra;let r=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((d,h)=>{const f=i.get(d),m=dc(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let v=!1;f&&m?f.data.isEqual(m.data)?g!==y&&(s.track({type:3,doc:m}),v=!0):this.ga(f,m)||(s.track({type:2,doc:m}),v=!0,(c&&this.Aa(m,c)>0||l&&this.Aa(m,l)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),v=!0):f&&!m&&(s.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(m?(o=o.add(m),r=y?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),s.track({type:1,doc:d})}return{Ra:o,fa:s,ns:a,mutatedKeys:r}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,i){const r=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((d,h)=>function(m,g){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return y(m)-y(g)}(d.type,h.type)||this.Aa(d.doc,h.doc)),this.pa(s),i=i!=null&&i;const a=e&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,l=c!==this.Ea;return this.Ea=c,o.length!==0||l?{snapshot:new Si(this.query,t.Ra,r,o,t.mutatedKeys,c===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Hf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=at(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const e=[];return t.forEach(s=>{this.da.has(s)||e.push(new T_(s))}),this.da.forEach(s=>{t.has(s)||e.push(new E_(s))}),e}ba(t){this.Ta=t.Ts,this.da=at();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Si.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class qE{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class WE{constructor(t){this.key=t,this.va=!1}}class GE{constructor(t,e,s,i,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Vi(a=>jg(a),uc),this.Ma=new Map,this.xa=new Set,this.Oa=new Ft(W.comparator),this.Na=new Map,this.La=new nd,this.Ba={},this.ka=new Map,this.qa=ki.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function YE(n,t,e=!0){const s=R_(n);let i;const r=s.Fa.get(t);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Da()):i=await I_(s,t,e,!0),i}async function KE(n,t){const e=R_(n);await I_(e,t,!0,!1)}async function I_(n,t,e,s){const i=await _E(n.localStore,nn(t)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return s&&(a=await QE(n,t,r,o==="current",i.resumeToken)),n.isPrimaryClient&&e&&p_(n.remoteStore,i),a}async function QE(n,t,e,s,i){n.Ka=(h,f,m)=>async function(y,v,T,k){let C=v.view.ma(T);C.ns&&(C=await Bf(y.localStore,v.query,!1).then(({documents:w})=>v.view.ma(w,C)));const P=k&&k.targetChanges.get(v.targetId),M=k&&k.targetMismatches.get(v.targetId)!=null,D=v.view.applyChanges(C,y.isPrimaryClient,P,M);return Yf(y,v.targetId,D.wa),D.snapshot}(n,h,f,m);const r=await Bf(n.localStore,t,!0),o=new HE(t,r.Ts),a=o.ma(r.documents),c=ao.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);Yf(n,e,l.wa);const d=new qE(t,e,o);return n.Fa.set(t,d),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),l.snapshot}async function XE(n,t,e){const s=tt(n),i=s.Fa.get(t),r=s.Ma.get(i.targetId);if(r.length>1)return s.Ma.set(i.targetId,r.filter(o=>!uc(o,t))),void s.Fa.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await ru(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),e&&rd(s.remoteStore,i.targetId),au(s,i.targetId)}).catch(io)):(au(s,i.targetId),await ru(s.localStore,i.targetId,!0))}async function JE(n,t){const e=tt(n),s=e.Fa.get(t),i=e.Ma.get(s.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),rd(e.remoteStore,s.targetId))}async function ZE(n,t,e){const s=oT(n);try{const i=await function(o,a){const c=tt(o),l=Vt.now(),d=a.reduce((m,g)=>m.add(g.key),at());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let g=Rn(),y=at();return c.cs.getEntries(m,d).next(v=>{g=v,g.forEach((T,k)=>{k.isValidDocument()||(y=y.add(T))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,g)).next(v=>{h=v;const T=[];for(const k of a){const C=xw(k,h.get(k.key).overlayedDocument);C!=null&&T.push(new as(k.key,C,Og(C.value.mapValue),Fe.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,T,a)}).next(v=>{f=v;const T=v.applyToLocalDocumentSet(h,y);return c.documentOverlayCache.saveOverlays(m,v.batchId,T)})}).then(()=>({batchId:f.batchId,changes:qg(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.Ba[o.currentUser.toKey()];l||(l=new Ft(pt)),l=l.insert(a,c),o.Ba[o.currentUser.toKey()]=l}(s,i.batchId,e),await lo(s,i.changes),await _c(s.remoteStore)}catch(i){const r=ud(i,"Failed to persist write");e.reject(r)}}async function A_(n,t){const e=tt(n);try{const s=await pE(e.localStore,t);t.targetChanges.forEach((i,r)=>{const o=e.Na.get(r);o&&(wt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?wt(o.va):i.removedDocuments.size>0&&(wt(o.va),o.va=!1))}),await lo(e,s,t)}catch(s){await io(s)}}function Gf(n,t,e){const s=tt(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const i=[];s.Fa.forEach((r,o)=>{const a=o.view.Z_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=tt(o);c.onlineState=a;let l=!1;c.queries.forEach((d,h)=>{for(const f of h.j_)f.Z_(a)&&(l=!0)}),l&&dd(c)}(s.eventManager,t),i.length&&s.Ca.d_(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function tT(n,t,e){const s=tt(n);s.sharedClientState.updateQueryState(t,"rejected",e);const i=s.Na.get(t),r=i&&i.key;if(r){let o=new Ft(W.comparator);o=o.insert(r,ye.newNoDocument(r,J.min()));const a=at().add(r),c=new pc(J.min(),new Map,new Ft(pt),o,a);await A_(s,c),s.Oa=s.Oa.remove(r),s.Na.delete(t),hd(s)}else await ru(s.localStore,t,!1).then(()=>au(s,t,e)).catch(io)}async function eT(n,t){const e=tt(n),s=t.batch.batchId;try{const i=await fE(e.localStore,t);S_(e,s,null),k_(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await lo(e,i)}catch(i){await io(i)}}async function nT(n,t,e){const s=tt(n);try{const i=await function(o,a){const c=tt(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let d;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(wt(h!==null),d=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,d,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d)).next(()=>c.localDocuments.getDocuments(l,d))})}(s.localStore,t);S_(s,t,e),k_(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await lo(s,i)}catch(i){await io(i)}}function k_(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function S_(n,t,e){const s=tt(n);let i=s.Ba[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(e?r.reject(e):r.resolve(),i=i.remove(t)),s.Ba[s.currentUser.toKey()]=i}}function au(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Ma.get(t))n.Fa.delete(s),e&&n.Ca.$a(s,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(s=>{n.La.containsKey(s)||C_(n,s)})}function C_(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(rd(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),hd(n))}function Yf(n,t,e){for(const s of e)s instanceof E_?(n.La.addReference(s.key,t),sT(n,s)):s instanceof T_?(q("SyncEngine","Document no longer in limbo: "+s.key),n.La.removeReference(s.key,t),n.La.containsKey(s.key)||C_(n,s.key)):Q()}function sT(n,t){const e=t.key,s=e.path.canonicalString();n.Oa.get(e)||n.xa.has(s)||(q("SyncEngine","New document in limbo: "+e),n.xa.add(s),hd(n))}function hd(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new W(Ct.fromString(t)),s=n.qa.next();n.Na.set(s,new WE(e)),n.Oa=n.Oa.insert(e,s),p_(n.remoteStore,new Hn(nn(Qu(e.path)),s,"TargetPurposeLimboResolution",Hu.oe))}}async function lo(n,t,e){const s=tt(n),i=[],r=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((a,c)=>{o.push(s.Ka(c,t,e).then(l=>{var d;if((l||e)&&s.isPrimaryClient){const h=l?!l.fromCache:(d=e==null?void 0:e.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;s.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(l){i.push(l);const h=id.Wi(c.targetId,l);r.push(h)}}))}),await Promise.all(o),s.Ca.d_(i),await async function(c,l){const d=tt(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>$.forEach(l,f=>$.forEach(f.$i,m=>d.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>$.forEach(f.Ui,m=>d.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!ro(h))throw h;q("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const m=d.os.get(f),g=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(g);d.os=d.os.insert(f,y)}}}(s.localStore,r))}async function iT(n,t){const e=tt(n);if(!e.currentUser.isEqual(t)){q("SyncEngine","User change. New user:",t.toKey());const s=await u_(e.localStore,t);e.currentUser=t,function(r,o){r.ka.forEach(a=>{a.forEach(c=>{c.reject(new z(V.CANCELLED,o))})}),r.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await lo(e,s.hs)}}function rT(n,t){const e=tt(n),s=e.Na.get(t);if(s&&s.va)return at().add(s.key);{let i=at();const r=e.Ma.get(t);if(!r)return i;for(const o of r){const a=e.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function R_(n){const t=tt(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=A_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=rT.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=tT.bind(null,t),t.Ca.d_=jE.bind(null,t.eventManager),t.Ca.$a=zE.bind(null,t.eventManager),t}function oT(n){const t=tt(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=eT.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=nT.bind(null,t),t}class Fa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=mc(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return hE(this.persistence,new uE,t.initialUser,this.serializer)}Ga(t){return new aE(sd.Zr,this.serializer)}Wa(t){return new vE}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fa.provider={build:()=>new Fa};class cu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Gf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=iT.bind(null,this.syncEngine),await $E(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new UE}()}createDatastore(t){const e=mc(t.databaseInfo.databaseId),s=function(r){return new EE(r)}(t.databaseInfo);return function(r,o,a,c){return new AE(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,i,r,o,a){return new SE(s,i,r,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Gf(this.syncEngine,e,0),function(){return jf.D()?new jf:new bE}())}createSyncEngine(t,e){return function(i,r,o,a,c,l,d){const h=new GE(i,r,o,a,c,l);return d&&(h.Qa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const r=tt(i);q("RemoteStore","RemoteStore shutting down."),r.L_.add(5),await co(r),r.k_.shutdown(),r.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}cu.provider={build:()=>new cu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class P_{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Cn("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(t,e,s,i,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=i,this.user=me.UNAUTHENTICATED,this.clientId=Pg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new An;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=ud(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function _l(n,t){n.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await u_(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Kf(n,t){n.asyncQueue.verifyOperationInProgress();const e=await cT(n);q("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>zf(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>zf(t.remoteStore,i)),n._onlineComponents=t}async function cT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await _l(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ei("Error using user provided cache. Falling back to memory cache: "+e),await _l(n,new Fa)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await _l(n,new Fa);return n._offlineComponents}async function D_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Kf(n,n._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Kf(n,new cu))),n._onlineComponents}function lT(n){return D_(n).then(t=>t.syncEngine)}async function M_(n){const t=await D_(n),e=t.eventManager;return e.onListen=YE.bind(null,t.syncEngine),e.onUnlisten=XE.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=KE.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=JE.bind(null,t.syncEngine),e}function uT(n,t,e={}){const s=new An;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const d=new P_({next:f=>{d.Za(),o.enqueueAndForget(()=>x_(r,h));const m=f.docs.has(a);!m&&f.fromCache?l.reject(new z(V.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&f.fromCache&&c&&c.source==="server"?l.reject(new z(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new w_(Qu(a.path),d,{includeMetadataChanges:!0,_a:!0});return b_(r,h)}(await M_(n),n.asyncQueue,t,e,s)),s.promise}function dT(n,t,e={}){const s=new An;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const d=new P_({next:f=>{d.Za(),o.enqueueAndForget(()=>x_(r,h)),f.fromCache&&c.source==="server"?l.reject(new z(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new w_(a,d,{includeMetadataChanges:!0,_a:!0});return b_(r,h)}(await M_(n),n.asyncQueue,t,e,s)),s.promise}/**
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
 */function O_(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(n,t,e){if(!e)throw new z(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function hT(n,t,e,s){if(t===!0&&s===!0)throw new z(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Xf(n){if(!W.isDocumentKey(n))throw new z(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Jf(n){if(W.isDocumentKey(n))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function yc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":Q()}function We(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=yc(n);throw new z(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function fT(n,t){if(t<=0)throw new z(V.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}hT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=O_((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class vc{constructor(t,e,s,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zf(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new R0;switch(s.type){case"firstParty":return new O0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=Qf.get(e);s&&(q("ComponentProvider","Removing Datastore"),Qf.delete(e),s.terminate())}(this),Promise.resolve()}}function pT(n,t,e,s={}){var i;const r=(n=We(n,vc))._getSettings(),o=`${t}:${e}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=me.MOCK_USER;else{a=yg(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new me(l)}n._authCredentials=new P0(new Rg(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new cs(this.firestore,t,this._query)}}class Ae{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ae(this.firestore,t,this._key)}}class Jn extends cs{constructor(t,e,s){super(t,e,Qu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ae(this.firestore,null,new W(t))}withConverter(t){return new Jn(this.firestore,t,this._path)}}function xt(n,t,...e){if(n=zt(n),N_("collection","path",t),n instanceof vc){const s=Ct.fromString(t,...e);return Jf(s),new Jn(n,null,s)}{if(!(n instanceof Ae||n instanceof Jn))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ct.fromString(t,...e));return Jf(s),new Jn(n.firestore,null,s)}}function ne(n,t,...e){if(n=zt(n),arguments.length===1&&(t=Pg.newId()),N_("doc","path",t),n instanceof vc){const s=Ct.fromString(t,...e);return Xf(s),new Ae(n,null,new W(s))}{if(!(n instanceof Ae||n instanceof Jn))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ct.fromString(t,...e));return Xf(s),new Ae(n.firestore,n instanceof Jn?n.converter:null,new W(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new h_(this,"async_queue_retry"),this.Vu=()=>{const s=gl();s&&q("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=t;const e=gl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=gl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new An;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!ro(t))throw t;q("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(s=>{this.Eu=s,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Cn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.du=!1,s))));return this.mu=e,e}enqueueAfterDelay(t,e,s){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=ld.createAndSchedule(this,t,e,s,r=>this.yu(r));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Ws extends vc{constructor(t,e,s,i){super(t,e,s,i),this.type="firestore",this._queue=new tp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new tp(t),this._firestoreClient=void 0,await t}}}function mT(n,t){const e=typeof n=="object"?n:ju(),s=typeof n=="string"?n:"(default)",i=cc(e,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=mg("firestore");r&&pT(i,...r)}return i}function fd(n){if(n._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||gT(n),n._firestoreClient}function gT(n){var t,e,s;const i=n._freezeSettings(),r=function(a,c,l,d){return new G0(a,c,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,O_(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new aT(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ci(ce.fromBase64String(t))}catch(e){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ci(ce.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return pt(this._lat,t._lat)||pt(this._long,t._long)}}/**
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
 */class gd{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=/^__.*__$/;class yT{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new as(t,this.data,this.fieldMask,e,this.fieldTransforms):new oo(t,this.data,e,this.fieldTransforms)}}class L_{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return new as(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function V_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class _d{constructor(t,e,s,i,r,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new _d(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.Ou(t),i}Nu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return $a(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(V_(this.Cu)&&_T.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class vT{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||mc(t)}Qu(t,e,s,i=!1){return new _d({Cu:t,methodName:e,qu:s,path:oe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xc(n){const t=n._freezeSettings(),e=mc(n._databaseId);return new vT(n._databaseId,!!t.ignoreUndefinedProperties,e)}function F_(n,t,e,s,i,r={}){const o=n.Qu(r.merge||r.mergeFields?2:0,t,e,i);yd("Data must be an object, but it was:",o,s);const a=$_(s,o);let c,l;if(r.merge)c=new Oe(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const h of r.mergeFields){const f=lu(t,h,e);if(!o.contains(f))throw new z(V.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);U_(d,f)||d.push(f)}c=new Oe(d),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new yT(new Ce(a),c,l)}class wc extends pd{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof wc}}function bT(n,t,e,s){const i=n.Qu(1,t,e);yd("Data must be an object, but it was:",i,s);const r=[],o=Ce.empty();Hs(s,(c,l)=>{const d=vd(t,c,e);l=zt(l);const h=i.Nu(d);if(l instanceof wc)r.push(d);else{const f=uo(l,h);f!=null&&(r.push(d),o.set(d,f))}});const a=new Oe(r);return new L_(o,a,i.fieldTransforms)}function xT(n,t,e,s,i,r){const o=n.Qu(1,t,e),a=[lu(t,s,e)],c=[i];if(r.length%2!=0)throw new z(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(lu(t,r[f])),c.push(r[f+1]);const l=[],d=Ce.empty();for(let f=a.length-1;f>=0;--f)if(!U_(l,a[f])){const m=a[f];let g=c[f];g=zt(g);const y=o.Nu(m);if(g instanceof wc)l.push(m);else{const v=uo(g,y);v!=null&&(l.push(m),d.set(m,v))}}const h=new Oe(l);return new L_(d,h,o.fieldTransforms)}function wT(n,t,e,s=!1){return uo(e,n.Qu(s?4:3,t))}function uo(n,t){if(B_(n=zt(n)))return yd("Unsupported field value:",t,n),$_(n,t);if(n instanceof pd)return function(s,i){if(!V_(i.Cu))throw i.Bu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let c=uo(a,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(n,t)}return function(s,i){if((s=zt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return mw(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Vt.fromDate(s);return{timestampValue:La(i.serializer,r)}}if(s instanceof Vt){const r=new Vt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:La(i.serializer,r)}}if(s instanceof md)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ci)return{bytesValue:s_(i.serializer,s._byteString)};if(s instanceof Ae){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ed(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof gd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return Xu(a.serializer,c)})}}}}}}(s,i);throw i.Bu(`Unsupported field value: ${yc(s)}`)}(n,t)}function $_(n,t){const e={};return Dg(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Hs(n,(s,i)=>{const r=uo(i,t.Mu(s));r!=null&&(e[s]=r)}),{mapValue:{fields:e}}}function B_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Vt||n instanceof md||n instanceof Ci||n instanceof Ae||n instanceof pd||n instanceof gd)}function yd(n,t,e){if(!B_(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const s=yc(e);throw s==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+s)}}function lu(n,t,e){if((t=zt(t))instanceof bc)return t._internalPath;if(typeof t=="string")return vd(n,t);throw $a("Field path arguments must be of type string or ",n,!1,void 0,e)}const ET=new RegExp("[~\\*/\\[\\]]");function vd(n,t,e){if(t.search(ET)>=0)throw $a(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new bc(...t.split("."))._internalPath}catch{throw $a(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function $a(n,t,e,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new z(V.INVALID_ARGUMENT,a+n+c)}function U_(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(t,e,s,i,r){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new TT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ec("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class TT extends j_{data(){return super.data()}}function Ec(n,t){return typeof t=="string"?vd(n,t):t instanceof bc?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bd{}class xd extends bd{}function ge(n,t,...e){let s=[];t instanceof bd&&s.push(t),s=s.concat(e),function(r){const o=r.filter(c=>c instanceof wd).length,a=r.filter(c=>c instanceof Tc).length;if(o>1||o>0&&a>0)throw new z(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class Tc extends xd{constructor(t,e,s){super(),this._field=t,this._op=e,this._value=s,this.type="where"}static _create(t,e,s){return new Tc(t,e,s)}_apply(t){const e=this._parse(t);return z_(t._query,e),new cs(t.firestore,t.converter,tu(t._query,e))}_parse(t){const e=xc(t.firestore);return function(r,o,a,c,l,d,h){let f;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){np(h,d);const m=[];for(const g of h)m.push(ep(c,r,g));f={arrayValue:{values:m}}}else f=ep(c,r,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||np(h,d),f=wT(a,o,h,d==="in"||d==="not-in");return Jt.create(l,d,f)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Xt(n,t,e){const s=t,i=Ec("where",n);return Tc._create(i,s,e)}class wd extends bd{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new wd(t,e)}_parse(t){const e=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return e.length===1?e[0]:qe.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,r){let o=i;const a=r.getFlattenedFilters();for(const c of a)z_(o,c),o=tu(o,c)}(t._query,e),new cs(t.firestore,t.converter,tu(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ed extends xd{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ed(t,e)}_apply(t){const e=function(i,r,o){if(i.startAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new jr(r,o)}(t._query,this._field,this._direction);return new cs(t.firestore,t.converter,function(i,r){const o=i.explicitOrderBy.concat([r]);return new Li(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function uu(n,t="asc"){const e=t,s=Ec("orderBy",n);return Ed._create(s,e)}class Td extends xd{constructor(t,e,s){super(),this.type=t,this._limit=e,this._limitType=s}static _create(t,e,s){return new Td(t,e,s)}_apply(t){return new cs(t.firestore,t.converter,Ma(t._query,this._limit,this._limitType))}}function fa(n){return fT("limit",n),Td._create("limit",n,"F")}function ep(n,t,e){if(typeof(e=zt(e))=="string"){if(e==="")throw new z(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ug(t)&&e.indexOf("/")!==-1)throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const s=t.path.child(Ct.fromString(e));if(!W.isDocumentKey(s))throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ef(n,new W(s))}if(e instanceof Ae)return Ef(n,e._key);throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yc(e)}.`)}function np(n,t){if(!Array.isArray(n)||n.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function z_(n,t){const e=function(i,r){for(const o of i)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class AT{convertValue(t,e="none"){switch(Fs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Wt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Vs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw Q()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return Hs(t,(i,r)=>{s[i]=this.convertValue(r,e)}),s}convertVectorValue(t){var e,s,i;const r=(i=(s=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>Wt(o.doubleValue));return new gd(r)}convertGeoPoint(t){return new md(Wt(t.latitude),Wt(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=Wu(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp($r(t));default:return null}}convertTimestamp(t){const e=ss(t);return new Vt(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=Ct.fromString(t);wt(l_(s));const i=new Br(s.get(1),s.get(3)),r=new W(s.popFirst(5));return i.isEqual(e)||Cn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(n,t,e){let s;return s=n?n.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class q_ extends j_{constructor(t,e,s,i,r,o){super(t,e,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new pa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(Ec("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}}class pa extends q_{data(t={}){return super.data(t)}}class kT{constructor(t,e,s,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new yr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new pa(this._firestore,this._userDataWriter,s.key,s,new yr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new pa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new yr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new pa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new yr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,d=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:ST(a.type),doc:c,oldIndex:l,newIndex:d}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ST(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(n){n=We(n,Ae);const t=We(n.firestore,Ws);return uT(fd(t),n._key).then(e=>RT(t,n,e))}class W_ extends AT{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ci(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ae(this.firestore,null,e)}}function yt(n){n=We(n,cs);const t=We(n.firestore,Ws),e=fd(t),s=new W_(t);return IT(n._query),dT(e,n._query).then(i=>new kT(t,s,n,i))}function CT(n,t,e){n=We(n,Ae);const s=We(n.firestore,Ws),i=H_(n.converter,t);return Ic(s,[F_(xc(s),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Fe.none())])}function ln(n,t,e,...s){n=We(n,Ae);const i=We(n.firestore,Ws),r=xc(i);let o;return o=typeof(t=zt(t))=="string"||t instanceof bc?xT(r,"updateDoc",n._key,t,e,s):bT(r,"updateDoc",n._key,t),Ic(i,[o.toMutation(n._key,Fe.exists(!0))])}function G_(n){return Ic(We(n.firestore,Ws),[new Ju(n._key,Fe.none())])}function $i(n,t){const e=We(n.firestore,Ws),s=ne(n),i=H_(n.converter,t);return Ic(e,[F_(xc(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,Fe.exists(!1))]).then(()=>s)}function Ic(n,t){return function(s,i){const r=new An;return s.asyncQueue.enqueueAndForget(async()=>ZE(await lT(s),i,r)),r.promise}(fd(n),t)}function RT(n,t,e){const s=e.docs.get(t._key),i=new W_(n);return new q_(n,i,t._key,s,new yr(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Ni=i})(zs),Ns(new es("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new Ws(new D0(s.getProvider("auth-internal")),new L0(s.getProvider("app-check-internal")),function(l,d){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Br(l.options.projectId,d)}(o,i),o);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),en(yf,"4.7.3",t),en(yf,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_="firebasestorage.googleapis.com",K_="storageBucket",PT=2*60*1e3,DT=10*60*1e3,MT=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends dn{constructor(t,e,s=0){super(yl(t),`Firebase Storage: ${e} (${yl(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$t.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return yl(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pt||(Pt={}));function yl(n){return"storage/"+n}function Id(){const n="An unknown error occurred, please check the error payload for server response.";return new $t(Pt.UNKNOWN,n)}function OT(n){return new $t(Pt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function NT(n){return new $t(Pt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function LT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new $t(Pt.UNAUTHENTICATED,n)}function VT(){return new $t(Pt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function FT(n){return new $t(Pt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Q_(){return new $t(Pt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function X_(){return new $t(Pt.CANCELED,"User canceled the upload/download.")}function $T(n){return new $t(Pt.INVALID_URL,"Invalid URL '"+n+"'.")}function BT(n){return new $t(Pt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function UT(){return new $t(Pt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+K_+"' property when initializing the app?")}function J_(){return new $t(Pt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function jT(){return new $t(Pt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function zT(){return new $t(Pt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function HT(n){return new $t(Pt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function du(n){return new $t(Pt.INVALID_ARGUMENT,n)}function Z_(){return new $t(Pt.APP_DELETED,"The Firebase app was deleted.")}function qT(n){return new $t(Pt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Cr(n,t){return new $t(Pt.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function nr(n){throw new $t(Pt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=Ne.makeFromUrl(t,e)}catch{return new Ne(t,"")}if(s.path==="")return s;throw BT(t)}static makeFromUrl(t,e){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(P){P.path_=decodeURIComponent(P.path)}const d="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${d}/b/${i}/o${f}`,"i"),g={bucket:1,path:3},y=e===Y_?"(?:storage.googleapis.com|storage.cloud.google.com)":e,v="([^?#]*)",T=new RegExp(`^https?://${y}/${i}/${v}`,"i"),C=[{regex:a,indices:c,postModify:r},{regex:m,indices:g,postModify:l},{regex:T,indices:{bucket:1,path:2},postModify:l}];for(let P=0;P<C.length;P++){const M=C[P],D=M.regex.exec(t);if(D){const w=D[M.indices.bucket];let b=D[M.indices.path];b||(b=""),s=new Ne(w,b),M.postModify(s);break}}if(s==null)throw $T(t);return s}}class WT{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(n,t,e){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function d(...v){l||(l=!0,t.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,n(m,c())},v)}function f(){r&&clearTimeout(r)}function m(v,...T){if(l){f();return}if(v){f(),d.call(null,v,...T);return}if(c()||o){f(),d.call(null,v,...T);return}s<64&&(s*=2);let C;a===1?(a=2,C=0):C=(s+Math.random())*1e3,h(C)}let g=!1;function y(v){g||(g=!0,f(),!l&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},e),y}function YT(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(n){return n!==void 0}function QT(n){return typeof n=="function"}function XT(n){return typeof n=="object"&&!Array.isArray(n)}function Ac(n){return typeof n=="string"||n instanceof String}function sp(n){return Ad()&&n instanceof Blob}function Ad(){return typeof Blob<"u"}function ip(n,t,e,s){if(s<t)throw du(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw du(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(n,t,e){let s=t;return e==null&&(s=`https://${t}`),`${e}://${s}/v0${n}`}function ty(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const i=t(s)+"="+t(n[s]);e=e+i+"&"}return e=e.slice(0,-1),e}var Cs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Cs||(Cs={}));/**
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
 */function ey(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=t.indexOf(n)!==-1;return e||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(t,e,s,i,r,o,a,c,l,d,h,f=!0){this.url_=t,this.method_=e,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,g)=>{this.resolve_=m,this.reject_=g,this.start_()})}start_(){const t=(s,i)=>{if(i){s(!1,new Ho(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Cs.NO_ERROR,c=r.getStatus();if(!a||ey(c,this.additionalRetryCodes_)&&this.retry){const d=r.getErrorCode()===Cs.ABORT;s(!1,new Ho(!1,null,d));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Ho(l,r))})},e=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());KT(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=Id();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Z_():X_();o(c)}else{const c=Q_();o(c)}};this.canceled_?e(!1,new Ho(!1,null,!0)):this.backoffId_=GT(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&YT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ho{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function ZT(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function tI(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function eI(n,t){t&&(n["X-Firebase-GMPID"]=t)}function nI(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function sI(n,t,e,s,i,r,o=!0){const a=ty(n.urlParams),c=n.url+a,l=Object.assign({},n.headers);return eI(l,t),ZT(l,e),tI(l,r),nI(l,s),new JT(c,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function rI(...n){const t=iI();if(t!==void 0){const e=new t;for(let s=0;s<n.length;s++)e.append(n[s]);return e.getBlob()}else{if(Ad())return new Blob(n);throw new $t(Pt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function oI(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function aI(n){if(typeof atob>"u")throw HT("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class vl{constructor(t,e){this.data=t,this.contentType=e||null}}function cI(n,t){switch(n){case tn.RAW:return new vl(ny(t));case tn.BASE64:case tn.BASE64URL:return new vl(sy(n,t));case tn.DATA_URL:return new vl(uI(t),dI(t))}throw Id()}function ny(n){const t=[];for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const r=s,o=n.charCodeAt(++e);s=65536|(r&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function lI(n){let t;try{t=decodeURIComponent(n)}catch{throw Cr(tn.DATA_URL,"Malformed data URL.")}return ny(t)}function sy(n,t){switch(n){case tn.BASE64:{const i=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(i||r)throw Cr(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case tn.BASE64URL:{const i=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(i||r)throw Cr(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=aI(t)}catch(i){throw i.message.includes("polyfill")?i:Cr(n,"Invalid character found")}const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}class iy{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw Cr(tn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;s!=null&&(this.base64=hI(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function uI(n){const t=new iy(n);return t.base64?sy(tn.BASE64,t.rest):lI(t.rest)}function dI(n){return new iy(n).contentType}function hI(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e){let s=0,i="";sp(t)?(this.data_=t,s=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(sp(this.data_)){const s=this.data_,i=oI(s,t,e);return i===null?null:new $n(i)}else{const s=new Uint8Array(this.data_.buffer,t,e-t);return new $n(s,!0)}}static getBlob(...t){if(Ad()){const e=t.map(s=>s instanceof $n?s.data_:s);return new $n(rI.apply(null,e))}else{const e=t.map(o=>Ac(o)?cI(tn.RAW,o).data:o.data_);let s=0;e.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return e.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new $n(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(n){let t;try{t=JSON.parse(n)}catch{return null}return XT(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function pI(n,t){const e=t.split("/").filter(s=>s.length>0).join("/");return n.length===0?e:n+"/"+e}function oy(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(n,t){return t}class Ie{constructor(t,e,s,i){this.server=t,this.local=e||t,this.writable=!!s,this.xform=i||mI}}let qo=null;function gI(n){return!Ac(n)||n.length<2?n:oy(n)}function ay(){if(qo)return qo;const n=[];n.push(new Ie("bucket")),n.push(new Ie("generation")),n.push(new Ie("metageneration")),n.push(new Ie("name","fullPath",!0));function t(r,o){return gI(o)}const e=new Ie("name");e.xform=t,n.push(e);function s(r,o){return o!==void 0?Number(o):o}const i=new Ie("size");return i.xform=s,n.push(i),n.push(new Ie("timeCreated")),n.push(new Ie("updated")),n.push(new Ie("md5Hash",null,!0)),n.push(new Ie("cacheControl",null,!0)),n.push(new Ie("contentDisposition",null,!0)),n.push(new Ie("contentEncoding",null,!0)),n.push(new Ie("contentLanguage",null,!0)),n.push(new Ie("contentType",null,!0)),n.push(new Ie("metadata","customMetadata",!0)),qo=n,qo}function _I(n,t){function e(){const s=n.bucket,i=n.fullPath,r=new Ne(s,i);return t._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:e})}function yI(n,t,e){const s={};s.type="file";const i=e.length;for(let r=0;r<i;r++){const o=e[r];s[o.local]=o.xform(s,t[o.server])}return _I(s,n),s}function cy(n,t,e){const s=ry(t);return s===null?null:yI(n,s,e)}function vI(n,t,e,s){const i=ry(t);if(i===null||!Ac(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(l=>{const d=n.bucket,h=n.fullPath,f="/b/"+o(d)+"/o/"+o(h),m=ho(f,e,s),g=ty({alt:"media",token:l});return m+g})[0]}function ly(n,t){const e={},s=t.length;for(let i=0;i<s;i++){const r=t[i];r.writable&&(e[r.server]=n[r.local])}return JSON.stringify(e)}class Bi{constructor(t,e,s,i){this.url=t,this.method=e,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(n){if(!n)throw Id()}function kd(n,t){function e(s,i){const r=cy(n,i,t);return kn(r!==null),r}return e}function bI(n,t){function e(s,i){const r=cy(n,i,t);return kn(r!==null),vI(r,i,n.host,n._protocol)}return e}function fo(n){function t(e,s){let i;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?i=VT():i=LT():e.getStatus()===402?i=NT(n.bucket):e.getStatus()===403?i=FT(n.path):i=s,i.status=e.getStatus(),i.serverResponse=s.serverResponse,i}return t}function uy(n){const t=fo(n);function e(s,i){let r=t(s,i);return s.getStatus()===404&&(r=OT(n.path)),r.serverResponse=i.serverResponse,r}return e}function xI(n,t,e){const s=t.fullServerUrl(),i=ho(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new Bi(i,r,kd(n,e),o);return a.errorHandler=uy(t),a}function wI(n,t,e){const s=t.fullServerUrl(),i=ho(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new Bi(i,r,bI(n,e),o);return a.errorHandler=uy(t),a}function EI(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function dy(n,t,e){const s=Object.assign({},e);return s.fullPath=n.path,s.size=t.size(),s.contentType||(s.contentType=EI(null,t)),s}function TI(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let P=0;P<2;P++)C=C+Math.random().toString().slice(2);return C}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=dy(t,s,i),d=ly(l,e),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",m=$n.getBlob(h,s,f);if(m===null)throw J_();const g={name:l.fullPath},y=ho(r,n.host,n._protocol),v="POST",T=n.maxUploadRetryTime,k=new Bi(y,v,kd(n,e),T);return k.urlParams=g,k.headers=o,k.body=m.uploadData(),k.errorHandler=fo(t),k}class Ua{constructor(t,e,s,i){this.current=t,this.total=e,this.finalized=!!s,this.metadata=i||null}}function Sd(n,t){let e=null;try{e=n.getResponseHeader("X-Goog-Upload-Status")}catch{kn(!1)}return kn(!!e&&(t||["active"]).indexOf(e)!==-1),e}function II(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o=dy(t,s,i),a={name:o.fullPath},c=ho(r,n.host,n._protocol),l="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=ly(o,e),f=n.maxUploadRetryTime;function m(y){Sd(y);let v;try{v=y.getResponseHeader("X-Goog-Upload-URL")}catch{kn(!1)}return kn(Ac(v)),v}const g=new Bi(c,l,m,f);return g.urlParams=a,g.headers=d,g.body=h,g.errorHandler=fo(t),g}function AI(n,t,e,s){const i={"X-Goog-Upload-Command":"query"};function r(l){const d=Sd(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{kn(!1)}h||kn(!1);const f=Number(h);return kn(!isNaN(f)),new Ua(f,s.size(),d==="final")}const o="POST",a=n.maxUploadRetryTime,c=new Bi(e,o,r,a);return c.headers=i,c.errorHandler=fo(t),c}const rp=256*1024;function kI(n,t,e,s,i,r,o,a){const c=new Ua(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw jT();const l=c.total-c.current;let d=l;i>0&&(d=Math.min(d,i));const h=c.current,f=h+d;let m="";d===0?m="finalize":l===d?m="upload, finalize":m="upload";const g={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${c.current}`},y=s.slice(h,f);if(y===null)throw J_();function v(P,M){const D=Sd(P,["active","final"]),w=c.current+d,b=s.size();let x;return D==="final"?x=kd(t,r)(P,M):x=null,new Ua(w,b,D==="final",x)}const T="POST",k=t.maxUploadRetryTime,C=new Bi(e,T,v,k);return C.headers=g,C.body=y.uploadData(),C.progressCallback=a||null,C.errorHandler=fo(n),C}const Se={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function bl(n){switch(n){case"running":case"pausing":case"canceling":return Se.RUNNING;case"paused":return Se.PAUSED;case"success":return Se.SUCCESS;case"canceled":return Se.CANCELED;case"error":return Se.ERROR;default:return Se.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(t,e,s){if(QT(t)||e!=null||s!=null)this.next=t,this.error=e??void 0,this.complete=s??void 0;else{const r=t;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(n){return(...t)=>{Promise.resolve().then(()=>n(...t))}}class CI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Cs.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Cs.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Cs.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,s,i){if(this.sent_)throw nr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw nr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw nr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw nr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw nr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class RI extends CI{initXhr(){this.xhr_.responseType="text"}}function hi(){return new RI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(t,e,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=s,this._mappings=ay(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Pt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(ey(i.status,[]))if(r)i=Q_();else{this.sleepTime=Math.max(this.sleepTime*2,MT),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Pt.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,s])=>{switch(this._state){case"running":t(e,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const s=II(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,hi,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,s)=>{const i=AI(this._ref.storage,this._ref._location,t,this._blob),r=this._ref.storage._makeRequest(i,hi,e,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=rp*this._chunkMultiplier,e=new Ua(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=kI(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,hi,i,r,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){rp*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const s=xI(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,hi,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const s=TI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,hi,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e=this._state==="paused";this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=X_(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=bl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,s,i){const r=new SI(e||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);e!==-1&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(bl(this._state)){case Se.SUCCESS:ei(this._resolve.bind(null,this.snapshot))();break;case Se.CANCELED:case Se.ERROR:const e=this._reject;ei(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(bl(this._state)){case Se.RUNNING:case Se.PAUSED:t.next&&ei(t.next.bind(t,this.snapshot))();break;case Se.SUCCESS:t.complete&&ei(t.complete.bind(t))();break;case Se.CANCELED:case Se.ERROR:t.error&&ei(t.error.bind(t,this._error))();break;default:t.error&&ei(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
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
 */class $s{constructor(t,e){this._service=t,e instanceof Ne?this._location=e:this._location=Ne.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new $s(t,e)}get root(){const t=new Ne(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return oy(this._location.path)}get storage(){return this._service}get parent(){const t=fI(this._location.path);if(t===null)return null;const e=new Ne(this._location.bucket,t);return new $s(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw qT(t)}}function DI(n,t,e){return n._throwIfRoot("uploadBytesResumable"),new PI(n,new $n(t),e)}function MI(n){n._throwIfRoot("getDownloadURL");const t=wI(n.storage,n._location,ay());return n.storage.makeRequestWithTokens(t,hi).then(e=>{if(e===null)throw zT();return e})}function OI(n,t){const e=pI(n._location.path,t),s=new Ne(n._location.bucket,e);return new $s(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(n){return/^[A-Za-z]+:\/\//.test(n)}function LI(n,t){return new $s(n,t)}function hy(n,t){if(n instanceof Cd){const e=n;if(e._bucket==null)throw UT();const s=new $s(e,e._bucket);return t!=null?hy(s,t):s}else return t!==void 0?OI(n,t):n}function VI(n,t){if(t&&NI(t)){if(n instanceof Cd)return LI(n,t);throw du("To use ref(service, url), the first argument must be a Storage instance.")}else return hy(n,t)}function op(n,t){const e=t==null?void 0:t[K_];return e==null?null:Ne.makeFromBucketSpec(e,n)}function FI(n,t,e,s={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:yg(i,n.app.options.projectId))}class Cd{constructor(t,e,s,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Y_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=PT,this._maxUploadRetryTime=DT,this._requests=new Set,i!=null?this._bucket=Ne.makeFromBucketSpec(i,this._host):this._bucket=op(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Ne.makeFromBucketSpec(this._url,t):this._bucket=op(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ip("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ip("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new $s(this,t)}_makeRequest(t,e,s,i,r=!0){if(this._deleted)return new WT(Z_());{const o=sI(t,this._appId,s,i,e,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,e){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,i).getPromise()}}const ap="@firebase/storage",cp="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="storage";function $I(n,t,e){return n=zt(n),DI(n,t,e)}function BI(n){return n=zt(n),MI(n)}function UI(n,t){return n=zt(n),VI(n,t)}function jI(n=ju(),t){n=zt(n);const s=cc(n,fy).getImmediate({identifier:t}),i=mg("storage");return i&&zI(s,...i),s}function zI(n,t,e,s={}){FI(n,t,e,s)}function HI(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Cd(e,s,i,t,zs)}function qI(){Ns(new es(fy,HI,"PUBLIC").setMultipleInstances(!0)),en(ap,cp,""),en(ap,cp,"esm2017")}qI();function Rd(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(e[s[i]]=n[s[i]]);return e}function py(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WI=py,my=new no("auth","Firebase",py());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=new Bu("@firebase/auth");function GI(n,...t){ja.logLevel<=lt.WARN&&ja.warn(`Auth (${zs}): ${n}`,...t)}function ma(n,...t){ja.logLevel<=lt.ERROR&&ja.error(`Auth (${zs}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(n,...t){throw Pd(n,...t)}function rn(n,...t){return Pd(n,...t)}function gy(n,t,e){const s=Object.assign(Object.assign({},WI()),{[t]:e});return new no("auth","Firebase",s).create(t,{appName:n.name})}function Zn(n){return gy(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pd(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return my.create(n,...t)}function G(n,t,...e){if(!n)throw Pd(t,...e)}function bn(n){const t="INTERNAL ASSERTION FAILED: "+n;throw ma(t),new Error(t)}function Pn(n,t){n||bn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function YI(){return lp()==="http:"||lp()==="https:"}function lp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YI()||cx()||"connection"in navigator)?navigator.onLine:!0}function QI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t,e){this.shortDelay=t,this.longDelay=e,Pn(e>t,"Short delay should be less than long delay!"),this.isMobile=rx()||lx()}get(){return KI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(n,t){Pn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=new po(3e4,6e4);function ls(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Dn(n,t,e,s,i={}){return yy(n,i,async()=>{let r={},o={};s&&(t==="GET"?o=s:r={body:JSON.stringify(s)});const a=so(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:t,headers:c},r);return ax()||(l.referrerPolicy="no-referrer"),_y.fetch()(vy(n,n.config.apiHost,e,a),l)})}async function yy(n,t,e){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},XI),t);try{const i=new tA(n),r=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Wo(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wo(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Wo(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Wo(n,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw gy(n,d,l);Ge(n,d)}}catch(i){if(i instanceof dn)throw i;Ge(n,"network-request-failed",{message:String(i)})}}async function kc(n,t,e,s,i={}){const r=await Dn(n,t,e,s,i);return"mfaPendingCredential"in r&&Ge(n,"multi-factor-auth-required",{_serverResponse:r}),r}function vy(n,t,e,s){const i=`${t}${e}?${s}`;return n.config.emulator?Dd(n.config,i):`${n.config.apiScheme}://${i}`}function ZI(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tA{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(rn(this.auth,"network-request-failed")),JI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wo(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const i=rn(n,t,s);return i.customData._tokenResponse=e,i}function up(n){return n!==void 0&&n.enterprise!==void 0}class eA{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return ZI(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function nA(n,t){return Dn(n,"GET","/v2/recaptchaConfig",ls(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(n,t){return Dn(n,"POST","/v1/accounts:delete",t)}async function by(n,t){return Dn(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function iA(n,t=!1){const e=zt(n),s=await e.getIdToken(t),i=Md(s);G(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Rr(xl(i.auth_time)),issuedAtTime:Rr(xl(i.iat)),expirationTime:Rr(xl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function xl(n){return Number(n)*1e3}function Md(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return ma("JWT malformed, contained fewer than 3 sections"),null;try{const i=fg(e);return i?JSON.parse(i):(ma("Failed to decode base64 JWT payload"),null)}catch(i){return ma("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dp(n){const t=Md(n);return G(t,"internal-error"),G(typeof t.exp<"u","internal-error"),G(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof dn&&rA(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function rA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rr(this.lastLoginAt),this.creationTime=Rr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function za(n){var t;const e=n.auth,s=await n.getIdToken(),i=await qr(n,by(e,{idToken:s}));G(i==null?void 0:i.users.length,e,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?xy(r.providerUserInfo):[],a=cA(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new fu(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function aA(n){const t=zt(n);await za(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function cA(n,t){return[...n.filter(s=>!t.some(i=>i.providerId===s.providerId)),...t]}function xy(n){return n.map(t=>{var{providerId:e}=t,s=Rd(t,["providerId"]);return{providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(n,t){const e=await yy(n,{},async()=>{const s=so({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=vy(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_y.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function uA(n,t){return Dn(n,"POST","/v2/accounts:revokeToken",ls(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){G(t.idToken,"internal-error"),G(typeof t.idToken<"u","internal-error"),G(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):dp(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){G(t.length!==0,"internal-error");const e=dp(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:i,expiresIn:r}=await lA(t,e);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:i,expirationTime:r}=e,o=new yi;return s&&(G(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),i&&(G(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),r&&(G(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new yi,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(n,t){G(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class xn{constructor(t){var{uid:e,auth:s,stsTokenManager:i}=t,r=Rd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new fu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await qr(this,this.stsTokenManager.getToken(this.auth,t));return G(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return iA(this,t)}reload(){return aA(this)}_assign(t){this!==t&&(G(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new xn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await za(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vn(this.auth.app))return Promise.reject(Zn(this.auth));const t=await this.getIdToken();return await qr(this,sA(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var s,i,r,o,a,c,l,d;const h=(s=e.displayName)!==null&&s!==void 0?s:void 0,f=(i=e.email)!==null&&i!==void 0?i:void 0,m=(r=e.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=e.photoURL)!==null&&o!==void 0?o:void 0,y=(a=e.tenantId)!==null&&a!==void 0?a:void 0,v=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=e.createdAt)!==null&&l!==void 0?l:void 0,k=(d=e.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:C,emailVerified:P,isAnonymous:M,providerData:D,stsTokenManager:w}=e;G(C&&w,t,"internal-error");const b=yi.fromJSON(this.name,w);G(typeof C=="string",t,"internal-error"),Ln(h,t.name),Ln(f,t.name),G(typeof P=="boolean",t,"internal-error"),G(typeof M=="boolean",t,"internal-error"),Ln(m,t.name),Ln(g,t.name),Ln(y,t.name),Ln(v,t.name),Ln(T,t.name),Ln(k,t.name);const x=new xn({uid:C,auth:t,email:f,emailVerified:P,displayName:h,isAnonymous:M,photoURL:g,phoneNumber:m,tenantId:y,stsTokenManager:b,createdAt:T,lastLoginAt:k});return D&&Array.isArray(D)&&(x.providerData=D.map(A=>Object.assign({},A))),v&&(x._redirectEventId=v),x}static async _fromIdTokenResponse(t,e,s=!1){const i=new yi;i.updateFromServerResponse(e);const r=new xn({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:s});return await za(r),r}static async _fromGetAccountInfoResponse(t,e,s){const i=e.users[0];G(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?xy(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new yi;a.updateFromIdToken(s);const c=new xn({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new fu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=new Map;function wn(n){Pn(n instanceof Function,"Expected a class definition");let t=hp.get(n);return t?(Pn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,hp.set(n,t),t)}/**
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
 */class wy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}wy.type="NONE";const fp=wy;/**
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
 */function ga(n,t,e){return`firebase:${n}:${t}:${e}`}class vi{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ga(this.userKey,i.apiKey,r),this.fullPersistenceKey=ga("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?xn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new vi(wn(fp),t,s);const i=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||wn(fp);const o=ga(s,t.config.apiKey,t.name);let a=null;for(const l of e)try{const d=await l._get(o);if(d){const h=xn._fromJSON(t,d);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new vi(r,t,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new vi(r,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ay(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ey(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Sy(t))return"Blackberry";if(Cy(t))return"Webos";if(Ty(t))return"Safari";if((t.includes("chrome/")||Iy(t))&&!t.includes("edge/"))return"Chrome";if(ky(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ey(n=be()){return/firefox\//i.test(n)}function Ty(n=be()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Iy(n=be()){return/crios\//i.test(n)}function Ay(n=be()){return/iemobile/i.test(n)}function ky(n=be()){return/android/i.test(n)}function Sy(n=be()){return/blackberry/i.test(n)}function Cy(n=be()){return/webos/i.test(n)}function Od(n=be()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dA(n=be()){var t;return Od(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function hA(){return ux()&&document.documentMode===10}function Ry(n=be()){return Od(n)||ky(n)||Cy(n)||Sy(n)||/windows phone/i.test(n)||Ay(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(n,t=[]){let e;switch(n){case"Browser":e=pp(be());break;case"Worker":e=`${pp(be())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${zs}/${s}`}/**
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
 */class fA{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const s=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});s.onAbort=e,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const s of this.queue)await s(t),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function pA(n,t={}){return Dn(n,"GET","/v2/passwordPolicy",ls(n,t))}/**
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
 */const mA=6;class gA{constructor(t){var e,s,i,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:mA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let i=0;i<t.length;i++)s=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(t,e,s,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mp(this),this.idTokenSubscription=new mp(this),this.beforeStateQueue=new fA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=my,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=wn(e)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await vi.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await by(this,{idToken:t}),s=await xn._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(vn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await za(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=QI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(vn(this.app))return Promise.reject(Zn(this));const e=t?zt(t):null;return e&&G(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&G(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return vn(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return vn(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await pA(this),e=new gA(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new no("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await uA(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&wn(t)||this._popupRedirectResolver;G(e,this,"argument-error"),this.redirectPersistenceManager=await vi.create(this,[wn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,s;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,i){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,s,i);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Py(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(e["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&GI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Gs(n){return zt(n)}class mp{constructor(t){this.auth=t,this.observer=null,this.addObserver=yx(e=>this.observer=e)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yA(n){Sc=n}function Dy(n){return Sc.loadJS(n)}function vA(){return Sc.recaptchaEnterpriseScript}function bA(){return Sc.gapiScript}function xA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const wA="recaptcha-enterprise",EA="NO_RECAPTCHA";class TA{constructor(t){this.type=wA,this.auth=Gs(t)}async verify(t="verify",e=!1){async function s(r){if(!e){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{nA(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new eA(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;up(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:t}).then(l=>{o(l)}).catch(()=>{o(EA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!e&&up(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=vA();c.length!==0&&(c+=a),Dy(c).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function gp(n,t,e,s=!1){const i=new TA(n);let r;try{r=await i.verify(e)}catch{r=await i.verify(e,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function pu(n,t,e,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await gp(n,t,e,e==="getOobCode");return s(n,r)}else return s(n,t).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await gp(n,t,e,e==="getOobCode");return s(n,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(n,t){const e=cc(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),r=e.getOptions();if(Ca(r,t??{}))return i;Ge(i,"already-initialized")}return e.initialize({options:t})}function AA(n,t){const e=(t==null?void 0:t.persistence)||[],s=(Array.isArray(e)?e:[e]).map(wn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function kA(n,t,e){const s=Gs(n);G(s._canInitEmulator,s,"emulator-config-failed"),G(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!1,r=My(t),{host:o,port:a}=SA(t),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),CA()}function My(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function SA(n){const t=My(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:_p(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:_p(o)}}}function _p(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function CA(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return bn("not implemented")}_getIdTokenResponse(t){return bn("not implemented")}_linkToIdToken(t,e){return bn("not implemented")}_getReauthenticationResolver(t){return bn("not implemented")}}async function RA(n,t){return Dn(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(n,t){return kc(n,"POST","/v1/accounts:signInWithPassword",ls(n,t))}async function DA(n,t){return Dn(n,"POST","/v1/accounts:sendOobCode",ls(n,t))}async function MA(n,t){return DA(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(n,t){return kc(n,"POST","/v1/accounts:signInWithEmailLink",ls(n,t))}async function NA(n,t){return kc(n,"POST","/v1/accounts:signInWithEmailLink",ls(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Nd{constructor(t,e,s,i=null){super("password",s),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Wr(t,e,"password")}static _fromEmailAndCode(t,e,s=null){return new Wr(t,e,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pu(t,e,"signInWithPassword",PA);case"emailLink":return OA(t,{email:this._email,oobCode:this._password});default:Ge(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const s={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pu(t,s,"signUpPassword",RA);case"emailLink":return NA(t,{idToken:e,email:this._email,oobCode:this._password});default:Ge(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(n,t){return kc(n,"POST","/v1/accounts:signInWithIdp",ls(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA="http://localhost";class Bs extends Nd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Bs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Ge("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:i}=e,r=Rd(e,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Bs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return bi(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,bi(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,bi(t,e)}buildRequest(){const t={requestUri:LA,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=so(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FA(n){const t=fr(pr(n)).link,e=t?fr(pr(t)).deep_link_id:null,s=fr(pr(n)).deep_link_id;return(s?fr(pr(s)).link:null)||s||e||t||n}class Ld{constructor(t){var e,s,i,r,o,a;const c=fr(pr(t)),l=(e=c.apiKey)!==null&&e!==void 0?e:null,d=(s=c.oobCode)!==null&&s!==void 0?s:null,h=VA((i=c.mode)!==null&&i!==void 0?i:null);G(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=FA(t);try{return new Ld(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.providerId=Ui.PROVIDER_ID}static credential(t,e){return Wr._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const s=Ld.parseLink(e);return G(s,"argument-error"),Wr._fromEmailAndCode(t,s.code,s.tenantId)}}Ui.PROVIDER_ID="password";Ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mo extends Oy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends mo{constructor(){super("facebook.com")}static credential(t){return Bs._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bn.credentialFromTaggedObject(t)}static credentialFromError(t){return Bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Bn.credential(t.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends mo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Bs._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Un.credentialFromTaggedObject(t)}static credentialFromError(t){return Un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return Un.credential(e,s)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends mo{constructor(){super("github.com")}static credential(t){return Bs._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jn.credentialFromTaggedObject(t)}static credentialFromError(t){return jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jn.credential(t.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends mo{constructor(){super("twitter.com")}static credential(t,e){return Bs._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return zn.credentialFromTaggedObject(t)}static credentialFromError(t){return zn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return zn.credential(e,s)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,i=!1){const r=await xn._fromIdTokenResponse(t,s,i),o=yp(s);return new Ri({user:r,providerId:o,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const i=yp(s);return new Ri({user:t,providerId:i,_tokenResponse:s,operationType:e})}}function yp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends dn{constructor(t,e,s,i){var r;super(e.code,e.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ha.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,i){return new Ha(t,e,s,i)}}function Ny(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ha._fromErrorAndOperation(n,r,t,s):r})}async function $A(n,t,e=!1){const s=await qr(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Ri._forOperation(n,"link",s)}/**
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
 */async function BA(n,t,e=!1){const{auth:s}=n;if(vn(s.app))return Promise.reject(Zn(s));const i="reauthenticate";try{const r=await qr(n,Ny(s,i,t,n),e);G(r.idToken,s,"internal-error");const o=Md(r.idToken);G(o,s,"internal-error");const{sub:a}=o;return G(n.uid===a,s,"user-mismatch"),Ri._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ge(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ly(n,t,e=!1){if(vn(n.app))return Promise.reject(Zn(n));const s="signIn",i=await Ny(n,s,t),r=await Ri._fromIdTokenResponse(n,s,i);return e||await n._updateCurrentUser(r.user),r}async function UA(n,t){return Ly(Gs(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(n){const t=Gs(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function zA(n,t,e){const s=Gs(n);await pu(s,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",MA)}function HA(n,t,e){return vn(n.app)?Promise.reject(Zn(n)):UA(zt(n),Ui.credential(t,e)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&jA(n),s})}function qA(n,t,e,s){return zt(n).onIdTokenChanged(t,e,s)}function WA(n,t,e){return zt(n).beforeAuthStateChanged(t,e)}function GA(n,t,e,s){return zt(n).onAuthStateChanged(t,e,s)}function YA(n){return zt(n).signOut()}const qa="__sak";/**
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
 */class Vy{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(qa,"1"),this.storage.removeItem(qa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=1e3,QA=10;class Fy extends Vy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ry(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),i=this.localCache[e];s!==i&&t(e,i,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!e&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);hA()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,QA):i()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},KA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Fy.type="LOCAL";const XA=Fy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y extends Vy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}$y.type="SESSION";const By=$y;/**
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
 */function JA(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Cc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const s=new Cc(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:i,data:r}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(e.origin,r)),c=await JA(a);e.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n="",t=10){let e="";for(let s=0;s<t;s++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class ZA{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Vd("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function tk(n){on().location.href=n}/**
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
 */function Uy(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function ek(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function sk(){return Uy()?self:null}/**
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
 */const jy="firebaseLocalStorageDb",ik=1,Wa="firebaseLocalStorage",zy="fbase_key";class go{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Rc(n,t){return n.transaction([Wa],t?"readwrite":"readonly").objectStore(Wa)}function rk(){const n=indexedDB.deleteDatabase(jy);return new go(n).toPromise()}function mu(){const n=indexedDB.open(jy,ik);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Wa,{keyPath:zy})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Wa)?t(s):(s.close(),await rk(),t(await mu()))})})}async function vp(n,t,e){const s=Rc(n,!0).put({[zy]:t,value:e});return new go(s).toPromise()}async function ok(n,t){const e=Rc(n,!1).get(t),s=await new go(e).toPromise();return s===void 0?null:s.value}function bp(n,t){const e=Rc(n,!0).delete(t);return new go(e).toPromise()}const ak=800,ck=3;class Hy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mu(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>ck)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cc._getInstance(sk()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await ek(),!this.activeServiceWorker)return;this.sender=new ZA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((e=s[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||nk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await mu();return await vp(t,qa,"1"),await bp(t,qa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>vp(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>ok(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>bp(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const r=Rc(i,!1).getAll();return new go(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:i,value:r}of t)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ak)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hy.type="LOCAL";const lk=Hy;new po(3e4,6e4);/**
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
 */function uk(n,t){return t?wn(t):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Fd extends Nd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return bi(t,this._buildIdpRequest())}_linkToIdToken(t,e){return bi(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return bi(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function dk(n){return Ly(n.auth,new Fd(n),n.bypassAuthState)}function hk(n){const{auth:t,user:e}=n;return G(e,t,"internal-error"),BA(e,new Fd(n),n.bypassAuthState)}async function fk(n){const{auth:t,user:e}=n;return G(e,t,"internal-error"),$A(e,new Fd(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(t,e,s,i,r=!1){this.auth=t,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return dk;case"linkViaPopup":case"linkViaRedirect":return fk;case"reauthViaPopup":case"reauthViaRedirect":return hk;default:Ge(this.auth,"internal-error")}}resolve(t){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=new po(2e3,1e4);class mi extends qy{constructor(t,e,s,i,r){super(t,e,i,r),this.provider=s,this.authWindow=null,this.pollId=null,mi.currentPopupAction&&mi.currentPopupAction.cancel(),mi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return G(t,this.auth,"internal-error"),t}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const t=Vd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,s;if(!((s=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,pk.get())};t()}}mi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk="pendingRedirect",_a=new Map;class gk extends qy{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=_a.get(this.auth._key());if(!t){try{const s=await _k(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(e){t=()=>Promise.reject(e)}_a.set(this.auth._key(),t)}return this.bypassAuthState||_a.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _k(n,t){const e=bk(t),s=vk(n);if(!await s._isAvailable())return!1;const i=await s._get(e)==="true";return await s._remove(e),i}function yk(n,t){_a.set(n._key(),t)}function vk(n){return wn(n._redirectPersistence)}function bk(n){return ga(mk,n.config.apiKey,n.name)}async function xk(n,t,e=!1){if(vn(n.app))return Promise.reject(Zn(n));const s=Gs(n),i=uk(s,t),o=await new gk(s,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=10*60*1e3;class Ek{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Tk(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var s;if(t.error&&!Wy(t)){const i=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";e.onError(rn(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=wk&&this.cachedEventUids.clear(),this.cachedEventUids.has(xp(t))}saveEventToCache(t){this.cachedEventUids.add(xp(t)),this.lastProcessedEventTime=Date.now()}}function xp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Wy({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Tk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wy(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ik(n,t={}){return Dn(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kk=/^https?/;async function Sk(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Ik(n);for(const e of t)try{if(Ck(e))return}catch{}Ge(n,"unauthorized-domain")}function Ck(n){const t=hu(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===s}if(!kk.test(e))return!1;if(Ak.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Rk=new po(3e4,6e4);function wp(){const n=on().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Pk(n){return new Promise((t,e)=>{var s,i,r;function o(){wp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{wp(),e(rn(n,"network-request-failed"))},timeout:Rk.get()})}if(!((i=(s=on().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((r=on().gapi)===null||r===void 0)&&r.load)o();else{const a=xA("iframefcb");return on()[a]=()=>{gapi.load?o():e(rn(n,"network-request-failed"))},Dy(`${bA()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw ya=null,t})}let ya=null;function Dk(n){return ya=ya||Pk(n),ya}/**
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
 */const Mk=new po(5e3,15e3),Ok="__/auth/iframe",Nk="emulator/auth/iframe",Lk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fk(n){const t=n.config;G(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Dd(t,Nk):`https://${n.config.authDomain}/${Ok}`,s={apiKey:t.apiKey,appName:n.name,v:zs},i=Vk.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${e}?${so(s).slice(1)}`}async function $k(n){const t=await Dk(n),e=on().gapi;return G(e,n,"internal-error"),t.open({where:document.body,url:Fk(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lk,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=rn(n,"network-request-failed"),a=on().setTimeout(()=>{r(o)},Mk.get());function c(){on().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const Bk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Uk=500,jk=600,zk="_blank",Hk="http://localhost";class Ep{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qk(n,t,e,s=Uk,i=jk){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Bk),{width:s.toString(),height:i.toString(),top:r,left:o}),l=be().toLowerCase();e&&(a=Iy(l)?zk:e),Ey(l)&&(t=t||Hk,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(dA(l)&&a!=="_self")return Wk(t||"",a),new Ep(null);const h=window.open(t||"",a,d);G(h,n,"popup-blocked");try{h.focus()}catch{}return new Ep(h)}function Wk(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
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
 */const Gk="__/auth/handler",Yk="emulator/auth/handler",Kk=encodeURIComponent("fac");async function Tp(n,t,e,s,i,r){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:zs,eventId:i};if(t instanceof Oy){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",_x(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(t instanceof mo){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${Kk}=${encodeURIComponent(c)}`:"";return`${Qk(n)}?${so(a).slice(1)}${l}`}function Qk({config:n}){return n.emulator?Dd(n,Yk):`https://${n.authDomain}/${Gk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="webStorageSupport";class Xk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=By,this._completeRedirectFn=xk,this._overrideRedirectResult=yk}async _openPopup(t,e,s,i){var r;Pn((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Tp(t,e,s,hu(),i);return qk(t,o,Vd())}async _openRedirect(t,e,s,i){await this._originValidation(t);const r=await Tp(t,e,s,hu(),i);return tk(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:r}=this.eventManagers[e];return i?Promise.resolve(i):(Pn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await $k(t),s=new Ek(t);return e.register("authEvent",i=>(G(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(wl,{type:wl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[wl];o!==void 0&&e(!!o),Ge(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Sk(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ry()||Ty()||Od()}}const Jk=Xk;var Ip="@firebase/auth",Ap="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eS(n){Ns(new es("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Py(n)},l=new _A(s,i,r,c);return AA(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),Ns(new es("auth-internal",t=>{const e=Gs(t.getProvider("auth").getImmediate());return(s=>new Zk(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(Ip,Ap,tS(n)),en(Ip,Ap,"esm2017")}/**
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
 */const nS=5*60,sS=_g("authIdTokenMaxAge")||nS;let kp=null;const iS=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>sS)return;const i=e==null?void 0:e.token;kp!==i&&(kp=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rS(n=ju()){const t=cc(n,"auth");if(t.isInitialized())return t.getImmediate();const e=IA(n,{popupRedirectResolver:Jk,persistence:[lk,XA,By]}),s=_g("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=iS(r.toString());WA(e,o,()=>o(e.currentUser)),qA(e,a=>o(a))}}const i=pg("auth");return i&&kA(e,`http://${i}`),e}function oS(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}yA({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=i=>{const r=rn("internal-error");r.customData=i,e(r)},s.type="text/javascript",s.charset="UTF-8",oS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eS("Browser");const Gy={},Yy=n=>typeof window<"u"&&window[n]?window[n]:typeof globalThis<"u"&&globalThis[n]?globalThis[n]:null,aS={apiKey:"AIzaSyAuJIZeL0ipjVAdoSjH5Wq5IIwdjWexoaE",authDomain:"controle-de-obras-axel.firebaseapp.com",projectId:"controle-de-obras-axel",storageBucket:"controle-de-obras-axel.firebasestorage.app",messagingSenderId:"438724917414",appId:"1:438724917414:web:cb9674cdc557bdf2a7dc67"},cS=()=>{const n=Yy("__FIREBASE_CONFIG");if(n)return n;const t=import.meta&&Gy||{},e={apiKey:t.VITE_FIREBASE_API_KEY,authDomain:t.VITE_FIREBASE_AUTH_DOMAIN,projectId:t.VITE_FIREBASE_PROJECT_ID,storageBucket:t.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:t.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:t.VITE_FIREBASE_APP_ID};return Object.values(e).every(Boolean)?e:(console.warn("[Config] Firebase config não encontrada em globals/ENV; usando fallback padrão legado."),aS)},lS=()=>{const n=Yy("__RDO_API_CONFIG");if(n)return n;const t=import.meta&&Gy||{},e=t.VITE_RDO_API_TOKEN||t.VITE_RDO_TOKEN,s=t.VITE_RDO_API_BASE||"https://rdo.axelindustrial.com.br/api";return e?{TOKEN:e,BASE_URL:s}:{TOKEN:"",BASE_URL:s}},uS=cS(),Pc=xg(uS),K=mT(Pc),dS=jI(Pc),Go=rS(Pc),hS=async()=>(console.log("[Firebase] Configuração carregada com sucesso"),Pc),bt={state:{currentUser:null,currentTheme:localStorage.getItem("theme")||"dark",currentObra:null,sidebarCollapsed:localStorage.getItem("sidebarCollapsed")==="true"},listeners:[],subscribe(n){return this.listeners.push(n),()=>{this.listeners=this.listeners.filter(t=>t!==n)}},setState(n){this.state={...this.state,...n},this.notify()},notify(){this.listeners.forEach(n=>n(this.state))},setUser(n){this.setState({currentUser:n})},setTheme(n){localStorage.setItem("theme",n),this.applyTheme(n)},applyTheme(n){this.setState({currentTheme:n});const t=document.documentElement;t.classList.remove("dark","theme-light"),n==="dark"||n==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?(t.classList.add("dark"),t.setAttribute("data-theme","dark")):(t.classList.add("theme-light"),t.setAttribute("data-theme","light"))},toggleSidebar(){const n=!this.state.sidebarCollapsed;localStorage.setItem("sidebarCollapsed",n),this.setState({sidebarCollapsed:n})}},Ga={init:()=>new Promise(n=>{GA(Go,async t=>{if(t)try{const e=await Ba(ne(K,"usuarios",t.uid));if(e.exists()){const s={uid:t.uid,email:t.email,...e.data()};bt.setUser(s)}else bt.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}catch(e){console.warn("Erro ao buscar perfil (usando fallback):",e.message),bt.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}else bt.setUser(null);n(bt.state.currentUser)})}),login:async(n,t)=>{try{const s=(await HA(Go,n,t)).user,i=await Ba(ne(K,"usuarios",s.uid));if(i.exists()){const r={uid:s.uid,email:s.email,...i.data()};return bt.setUser(r),r}else throw new Error("Perfil de usuário não encontrado.")}catch(e){throw e}},logout:async()=>{await YA(Go),bt.setUser(null)},recoverPassword:async n=>{await zA(Go,n)}},It={routes:{},currentRoute:null,init(){window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())},on(n,t){this.routes[n]=t},navigate(n){window.location.hash=n},matchRoute(n){if(this.routes[n])return{handler:this.routes[n],params:{}};const t=n.split("/").filter(Boolean);for(const[e,s]of Object.entries(this.routes)){const i=e.split("/").filter(Boolean);if(i.length!==t.length)continue;const r={};let o=!0;for(let a=0;a<i.length;a++){const c=i[a],l=t[a];if(c.startsWith(":"))r[c.slice(1)]=decodeURIComponent(l);else if(c!==l){o=!1;break}}if(o)return{handler:s,params:r}}return null},async handleRoute(){const n=window.location.hash.slice(1)||"/";if(!bt.state.currentUser&&n!=="/login"&&n!=="/forgot-password"){this.navigate("/login");return}if(bt.state.currentUser&&(n==="/login"||n==="/forgot-password")){this.navigate("/");return}const t=this.matchRoute(n),e=(t==null?void 0:t.handler)||this.routes["/404"]||(()=>console.warn("Rota não encontrada:",n)),s=(t==null?void 0:t.params)||{};this.currentRoute=n,await e(s)}},F={createInput:({type:n="text",id:t,label:e,placeholder:s="",value:i="",required:r=!1,className:o=""})=>`
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
        `},Sp={renderLogin:()=>`
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
        `},Cp={initLogin:()=>{const n=document.getElementById("app");n.innerHTML=Sp.renderLogin(),document.getElementById("login-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email").value,i=document.getElementById("password").value,r=document.getElementById("btn-login");try{r.disabled=!0,r.innerHTML=F.createLoader(),await Ga.login(s,i),F.createToast("Login realizado com sucesso!"),It.navigate("/")}catch(o){console.error(o);let a="Erro ao realizar login.";o.code==="auth/invalid-credential"&&(a="Email ou senha incorretos."),F.createToast(a,"error"),r.disabled=!1,r.innerHTML="<span>Entrar</span>"}})},initForgotPassword:()=>{const n=document.getElementById("app");n.innerHTML=Sp.renderForgotPassword(),document.getElementById("forgot-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email-recovery").value,i=document.getElementById("btn-recover");try{i.disabled=!0,i.innerHTML=F.createLoader(),await Ga.recoverPassword(s),F.createToast("Email de recuperação enviado!"),setTimeout(()=>It.navigate("/login"),2e3)}catch(r){F.createToast("Erro ao enviar email: "+r.message,"error"),i.disabled=!1,i.innerHTML="<span>Enviar</span>"}})}},fS="modulepreload",pS=function(n){return"/"+n},Rp={},Ya=function(t,e,s){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(e.map(c=>{if(c=pS(c),c in Rp)return;Rp[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":fS,l||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),l)return new Promise((f,m)=>{h.addEventListener("load",f),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},mS=async n=>{if(!n)return null;const t=await yt(ge(xt(K,"obras"),Xt("__name__","==",n)));if(t.empty)return null;const e=t.docs[0].data(),s=Number(e.orcamento||e.valor_orcado||0),i=Number(e.tolerancia_percentual||0),r=s+s*i,a=(await yt(ge(xt(K,"compras"),Xt("obraId","==",n)))).docs.map(l=>l.data());let c=0;return a.forEach(l=>{const d=(l.status_compra||"").toLowerCase(),h=!l.estouro_orcamento||l.status_aprovacao==="Aprovado";(d==="comprado"||d==="recebido"||d==="entregue")&&h&&(c+=Number(l.valor_total||l.valor_estimado||0))}),{limite_real:r,comprometido:c,orcado:s}},gS=async n=>{var t,e,s;try{const{ObrasService:i}=await Ya(async()=>{const{ObrasService:l}=await Promise.resolve().then(()=>TD);return{ObrasService:l}},void 0),r=await((t=i.getObraById)==null?void 0:t.call(i,n)),o=(r==null?void 0:r.numero_os)||(r==null?void 0:r.numeroOS)||n;if(!o)return null;const{RDOService:a}=await Ya(async()=>{const{RDOService:l}=await Promise.resolve().then(()=>_b);return{RDOService:l}},void 0),c=await a.getIntegratedDataForObra(o);if((e=c==null?void 0:c.reports)!=null&&e.length){const l=a.processRDOData(c.reports);return{...l,quantidadeRelatorios:c.quantidadeRelatorios||((s=l.reports)==null?void 0:s.length)||0}}return c?{quantidadeRelatorios:c.quantidadeRelatorios||0,totalHoras:Number(c.totalHoras||0)}:null}catch(i){return console.warn("[Dashboard] RDO fetch fail",(i==null?void 0:i.message)||i),null}},pn={getCompradorStats:async()=>{const n=xt(K,"compras"),t=ge(n,Xt("status_compra","==","Pendente")),e=await yt(t),s=ge(n,Xt("status_compra","==","Em Cotação")),i=await yt(s),r=ge(n,uu("data_solicitacao","desc"),fa(5)),o=await yt(r),a=await yt(n);let c=0,l=0,d=0,h=0,f=0,m=0;const g={},y={},v=await yt(xt(K,"centrosCusto")),T=new Map(v.docs.map(D=>[D.id,D.data().nome||D.data().codigo||D.id])),k=await yt(xt(K,"obras")),C=new Map(k.docs.map(D=>[D.id,D.data().nome_obra||D.data().apelido_obra||D.id]));a.docs.forEach(D=>{const w=D.data(),b=Number(w.valor_estimado||w.valor_total||0);m+=b;const x=w.previsao_entrega?new Date(w.previsao_entrega):null,A=w.data_recebimento?new Date(w.data_recebimento):null;if(x&&w.status_compra!=="Entregue"&&w.status_compra!=="Recebido"&&x<new Date&&c++,A&&x&&(l++,A<=x&&d++),w.data_emissao&&(A||x)){const I=A||x,U=Math.max(0,(new Date(I)-new Date(w.data_emissao))/(1e3*60*60*24));h+=U,f++}const S=(w.natureza_compra||"Outros").trim();g[S]=(g[S]||0)+b;const R=T.get(w.centroCustoId)||w.centroCustoNome||w.centro_custo||w.centroCustoId||"N/D";y[R]=(y[R]||0)+b});const P=l?d/l*100:0,M=f?h/f:0;return{pendentes:e.size,emCotacao:i.size,recentes:o.docs.map(D=>{const w=D.data();return{id:D.id,...w,obraNome:C.get(w.obraId)||w.obra||w.obraId||"N/D"}}),atrasos:c,sla:P,lead:M,totalValor:m,naturezaTotais:g,ccTotais:y}},getObraStats:async n=>{if(!n)return{pendentes:0,transito:0,entregues:0,recentes:[]};const t=xt(K,"compras"),e=ge(t,Xt("obraId","==",n),Xt("status_compra","in",["Pendente","Em Cotação","Aprovado"])),s=await yt(e),i=ge(t,Xt("obraId","==",n),Xt("status_compra","==","Comprado")),r=await yt(i),o=ge(t,Xt("obraId","==",n),Xt("status_compra","in",["Entregue","Recebido"])),a=await yt(o),c=ge(t,Xt("obraId","==",n),uu("data_solicitacao","desc"),fa(5)),l=await yt(c);let d=0,h=0,f=0,m=0,g=0;const y=await mS(n),v=(y==null?void 0:y.comprometido)||0,T=(y==null?void 0:y.limite_real)||(y==null?void 0:y.orcado)||0,k=T>0?v/T*100:0,C=Math.max(0,T-v);l.docs.forEach(M=>{const D=M.data(),w=D.previsao_entrega?new Date(D.previsao_entrega):null,b=D.data_recebimento?new Date(D.data_recebimento):null;if(w&&D.status_compra!=="Entregue"&&D.status_compra!=="Recebido"&&w<new Date&&d++,b&&w&&(h++,b<=w&&f++),D.data_emissao&&(b||w)){const x=b||w,A=Math.max(0,(new Date(x)-new Date(D.data_emissao))/(1e3*60*60*24));m+=A,g++}});const P=await gS(n);return{pendentes:s.size,transito:r.size,entregues:a.size,recentes:l.docs.map(M=>({id:M.id,...M.data()})),atrasos:d,sla:h?f/h*100:0,lead:g?m/g:0,economia:C,curvaPercent:k,comprometido:v,limiteReal:T,rdoData:P}},getObras:async()=>(await yt(xt(K,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getDiretorStats:async()=>{const n=xt(K,"compras"),t=ge(n,fa(500)),e=await yt(t);let s=0,i={},r={},o=0,a=0,c=0,l=0,d=0,h=0,f=0;const m={},g={},y={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0},v=[];e.forEach(M=>{const D=M.data(),w=Number(D.valor_estimado||D.valor_total||0);v.push({id:M.id,...D}),s+=w,i[D.status_compra]=(i[D.status_compra]||0)+1,D.status_compra!=="Entregue"&&D.status_compra!=="Recebido"&&D.previsao_entrega&&new Date(D.previsao_entrega)<new Date&&(c++,y.atrasados++);const b=D.previsao_entrega?new Date(D.previsao_entrega):null,x=D.data_recebimento?new Date(D.data_recebimento):null;if(x&&b&&(l++,x<=b&&d++),D.data_emissao&&(x||b)){const U=x||b,H=Math.max(0,(new Date(U)-new Date(D.data_emissao))/(1e3*60*60*24));h+=H,f++}if(D.limite_real&&(o+=Number(D.limite_real)),D.comprometido&&(a+=Number(D.comprometido)),D.data_solicitacao){const U=new Date(D.data_solicitacao),H=`${U.getFullYear()}-${String(U.getMonth()+1).padStart(2,"0")}`;r[H]=(r[H]||0)+w}const A=(D.natureza_compra||"Outros").trim();m[A]=(m[A]||0)+w;const S=D.centroCustoNome||D.centro_custo||D.centroCustoId||"N/D";g[S]=(g[S]||0)+w,!D.previsao_entrega&&D.status_compra!=="Recebido"&&D.status_compra!=="Entregue"&&y.sem_previsao++,(D.status_aprovacao||"").toLowerCase()==="pendente"&&y.pendente_aprovacao++,(D.status_compra||"").toLowerCase().includes("cot")&&y.cotacao++});const T=o>0?a/o*100:0,k=l?d/l*100:0,C=f?h/f:0,P=Math.max(0,o-a);return{totalGasto:s,porStatus:i,totalPedidos:e.size,gastosPorMes:r,limiteReal:o,comprometido:a,curvaPercent:T,atrasos:c,sla:k,lead:C,economia:P,naturezaTotais:m,ccTotais:g,alerts:y,_allCompras:v}}},it={formatCurrency:n=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n),formatDate:n=>{if(!n)return"-";const t=new Date(n);return Number.isNaN(t.getTime())?"-":t.toLocaleDateString("pt-BR")},formatCurrencyInput:(n,t=!1)=>{let s=(typeof n=="number"?n.toFixed(2):String(n??"")).replace(/\D/g,"");return s=(s/100).toFixed(2)+"",s=s.replace(".",","),s=s.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1."),t?`R$ ${s}`:s},parseCurrency:n=>{if(typeof n=="number")return n;if(!n)return 0;const t=String(n).replace("R$ ","").replace(/\./g,"").replace(",","."),e=parseFloat(t);return Number.isNaN(e)?0:e},formatCnpjInput:n=>{if(!n)return"";let t=n.replace(/\D/g,"");return t=t.substring(0,14),t=t.replace(/^(\d{2})(\d)/,"$1.$2"),t=t.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3"),t=t.replace(/\.(\d{3})(\d)/,".$1/$2"),t=t.replace(/(\d{4})(\d)/,"$1-$2"),t},validateCNPJ:n=>{if(!n)return!0;const t=n.replace(/\D/g,"");if(t.length!==14||/^(\d)\1{13}$/.test(t))return!1;let e=0,s=5;for(let a=0;a<8;a++)e+=parseInt(t[a],10)*s,s=s===2?9:s-1;let i=e%11,r=i<2?0:11-i;if(parseInt(t[8],10)!==r)return!1;e=0,s=6;for(let a=0;a<9;a++)e+=parseInt(t[a],10)*s,s=s===2?9:s-1;i=e%11;let o=i<2?0:11-i;return parseInt(t[9],10)===o},renderStatusBadge:(n,t)=>{const e=new Date;e.setHours(0,0,0,0);let s=null;if(t){const o=new Date(t);Number.isNaN(o.getTime())||(s=o)}const i=(n||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return i!=="recebido"&&s&&s<e?'<span class="px-2 py-1 text-xs font-display rounded bg-alert text-canvas uppercase">Atrasado</span>':i.includes("recebido")||i.includes("entregue")?`<span class="px-2 py-1 text-xs font-display rounded bg-primary text-canvas uppercase">${n}</span>`:i.includes("comprado")?`<span class="px-2 py-1 text-xs font-display rounded bg-indigo-500 text-canvas uppercase">${n}</span>`:i.includes("aprov")?`<span class="px-2 py-1 text-xs font-display rounded bg-emerald-500 text-canvas uppercase">${n}</span>`:i.includes("cot")||i.includes("cota")?`<span class="px-2 py-1 text-xs font-display rounded bg-amber-400 text-gray-900 uppercase">${n}</span>`:`<span class="px-2 py-1 text-xs font-display rounded bg-border text-text uppercase">${n||"N/D"}</span>`},debounce:(n,t)=>{let e;return(...s)=>{clearTimeout(e),e=setTimeout(()=>n(...s),t)}}},Nt={dashboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>',shoppingCart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>',chart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.212 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',logout:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>',bell:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>',moon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" /></svg>',pencil:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.75 19.901l-4.5.75.75-4.5L16.862 4.487z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.6l2.651 2.651" /></svg>',trash:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5h10.5M9.75 7.5v-1.5a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v1.5m-9 0v12a1.5 1.5 0 001.5 1.5h7.5a1.5 1.5 0 001.5-1.5v-12" /></svg>'},El={renderComprador:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Visão Geral - Compras</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
                    ${F.createCard({title:"Pendentes",content:`<p class="text-4xl font-display text-alert uppercase">${n.pendentes}</p><p class="text-sm heading-muted">Aguardando ação</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Em Cotação",content:`<p class="text-4xl font-display text-primary uppercase">${n.emCotacao}</p><p class="text-sm heading-muted">Processando</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted">Previsão vencida</p>`,className:"accent-left"})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">On-time vs entregues</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Total Estimado",content:`<p class="text-4xl font-display text-primary uppercase">${it.formatCurrency(n.totalValor||0)}</p><p class="text-sm heading-muted mt-1">Amostra 5 recentes</p>`})}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="card">
                        <h3 class="text-lg font-display text-text mb-3">Top Naturezas (recentes)</h3>
                        <div class="space-y-2">
                            ${Object.entries(n.naturezaTotais||{}).sort((t,e)=>e[1]-t[1]).slice(0,5).map(([t,e])=>`
                                <div class="flex items-center justify-between text-sm">
                                    <span class="text-text">${t}</span>
                                    <span class="text-primary font-display">${it.formatCurrency(e)}</span>
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
                                    <span class="text-primary font-display">${it.formatCurrency(e)}</span>
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
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Descrição</th>
                                    <th class="px-6 py-3 text-right text-xs font-display text-text-muted uppercase tracking-wide">Valor</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Status</th>
                                    <th class="px-6 py-3 text-right text-xs font-display text-text-muted uppercase tracking-wide">Ações</th>
                                </tr>
                            </thead>
                            <tbody class="bg-surface divide-y divide-border">
                                ${n.recentes.map(t=>`
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${it.formatDate(t.data_solicitacao||t.data_emissao)}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-display text-text uppercase" title="${t.obraNome||t.obraId||"N/A"}">${t.obraNome||t.obraId||"N/A"}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-text truncate max-w-[200px]" title="${t.descricao_compra||t.descricao||"-"}">${t.descricao_compra||t.descricao||"-"}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-text text-right">${it.formatCurrency(Number(t.valor_total||t.valor_estimado||0))}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                                            <span class="px-2 inline-flex text-xs leading-5 font-display rounded bg-canvas border border-border text-text">
                                                ${t.status_compra}
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div class="inline-flex items-center gap-3">
                                            <button class="text-text-muted hover:text-text" data-action="view" data-id="${t.id}" title="Ver">${Nt.eye}</button>
                                            <button class="text-primary hover:text-primary-strong" data-action="edit" data-id="${t.id}" title="Editar">${Nt.pencil}</button>
                                            <button class="text-alert hover:text-alert/80" data-action="delete" data-id="${t.id}" title="Excluir">${Nt.trash}</button>
                                        </div>
                                        </td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `,renderObra:n=>{var t,e,s,i,r,o,a,c,l,d,h,f,m,g;return`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Minha Obra</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${F.createCard({title:"Solicitados",content:`<p class="text-4xl font-display text-text uppercase">${n.pendentes}</p><p class="text-sm heading-muted">Em processamento</p>`})}
                    ${F.createCard({title:"Em Trânsito",content:`<p class="text-4xl font-display text-primary uppercase">${n.transito}</p><p class="text-sm heading-muted">A caminho</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Entregues",content:`<p class="text-4xl font-display text-primary uppercase">${n.entregues}</p><p class="text-sm heading-muted">Finalizados</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Entregues no prazo</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia vs Orçamento",content:`<p class="text-4xl font-display text-${(n.economia||0)<0?"alert":"primary"} uppercase">${it.formatCurrency(n.economia||0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(n.curvaPercent||0).toFixed(1)}%</p>`})}
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    ${F.createCard({title:"RDO - Total Horas",content:`<p class="text-3xl font-display text-primary uppercase">${((s=(e=((t=n.rdoData)==null?void 0:t.totalHoras)||0).toFixed)==null?void 0:s.call(e,1))||0}</p><p class="text-sm heading-muted">Relatórios: ${((i=n.rdoData)==null?void 0:i.quantidadeRelatorios)||0}</p>`})}
                    ${F.createCard({title:"RDO - Horas Extras",content:`<p class="text-3xl font-display text-text uppercase">${((a=(o=((r=n.rdoData)==null?void 0:r.totalExtras)||0).toFixed)==null?void 0:a.call(o,1))||0}</p><p class="text-sm heading-muted">Acima do padrão</p>`})}
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
        `},renderDiretor:n=>{var t,e,s,i;return`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Visão Executiva</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    ${F.createCard({title:"Total Gasto (Amostra)",content:`<p class="text-4xl font-display text-primary uppercase">${it.formatCurrency(n.totalGasto)}</p>`})}
                    ${F.createCard({title:"Total de Pedidos",content:`<p class="text-4xl font-display text-primary uppercase">${n.totalPedidos}</p>`})}
                    ${F.createCard({title:"% Curva S (Comprometido vs Limite)",content:`<p class="text-4xl font-display text-${n.curvaPercent>100?"alert":"primary"} uppercase">${(n.curvaPercent||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Limite: ${it.formatCurrency(n.limiteReal||0)} • Comprometido: ${it.formatCurrency(n.comprometido||0)}</p>`})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted mt-1">Com previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">On-time vs entregues</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia (Limite - Comprometido)",content:`<p class="text-4xl font-display text-primary uppercase">${it.formatCurrency(n.economia||0)}</p>`})}
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
 */function _o(n){return n+.5|0}const qn=(n,t,e)=>Math.max(Math.min(n,e),t);function vr(n){return qn(_o(n*2.55),0,255)}function ts(n){return qn(_o(n*255),0,255)}function yn(n){return qn(_o(n/2.55)/100,0,1)}function Pp(n){return qn(_o(n*100),0,100)}const Le={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},gu=[..."0123456789ABCDEF"],_S=n=>gu[n&15],yS=n=>gu[(n&240)>>4]+gu[n&15],Yo=n=>(n&240)>>4===(n&15),vS=n=>Yo(n.r)&&Yo(n.g)&&Yo(n.b)&&Yo(n.a);function bS(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&Le[n[1]]*17,g:255&Le[n[2]]*17,b:255&Le[n[3]]*17,a:t===5?Le[n[4]]*17:255}:(t===7||t===9)&&(e={r:Le[n[1]]<<4|Le[n[2]],g:Le[n[3]]<<4|Le[n[4]],b:Le[n[5]]<<4|Le[n[6]],a:t===9?Le[n[7]]<<4|Le[n[8]]:255})),e}const xS=(n,t)=>n<255?t(n):"";function wS(n){var t=vS(n)?_S:yS;return n?"#"+t(n.r)+t(n.g)+t(n.b)+xS(n.a,t):void 0}const ES=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ky(n,t,e){const s=t*Math.min(e,1-e),i=(r,o=(r+n/30)%12)=>e-s*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function TS(n,t,e){const s=(i,r=(i+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[s(5),s(3),s(1)]}function IS(n,t,e){const s=Ky(n,1,.5);let i;for(t+e>1&&(i=1/(t+e),t*=i,e*=i),i=0;i<3;i++)s[i]*=1-t-e,s[i]+=t;return s}function AS(n,t,e,s,i){return n===i?(t-e)/s+(t<e?6:0):t===i?(e-n)/s+2:(n-t)/s+4}function $d(n){const e=n.r/255,s=n.g/255,i=n.b/255,r=Math.max(e,s,i),o=Math.min(e,s,i),a=(r+o)/2;let c,l,d;return r!==o&&(d=r-o,l=a>.5?d/(2-r-o):d/(r+o),c=AS(e,s,i,d,r),c=c*60+.5),[c|0,l||0,a]}function Bd(n,t,e,s){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,s)).map(ts)}function Ud(n,t,e){return Bd(Ky,n,t,e)}function kS(n,t,e){return Bd(IS,n,t,e)}function SS(n,t,e){return Bd(TS,n,t,e)}function Qy(n){return(n%360+360)%360}function CS(n){const t=ES.exec(n);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?vr(+t[5]):ts(+t[5]));const i=Qy(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?s=kS(i,r,o):t[1]==="hsv"?s=SS(i,r,o):s=Ud(i,r,o),{r:s[0],g:s[1],b:s[2],a:e}}function RS(n,t){var e=$d(n);e[0]=Qy(e[0]+t),e=Ud(e),n.r=e[0],n.g=e[1],n.b=e[2]}function PS(n){if(!n)return;const t=$d(n),e=t[0],s=Pp(t[1]),i=Pp(t[2]);return n.a<255?`hsla(${e}, ${s}%, ${i}%, ${yn(n.a)})`:`hsl(${e}, ${s}%, ${i}%)`}const Dp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Mp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function DS(){const n={},t=Object.keys(Mp),e=Object.keys(Dp);let s,i,r,o,a;for(s=0;s<t.length;s++){for(o=a=t[s],i=0;i<e.length;i++)r=e[i],a=a.replace(r,Dp[r]);r=parseInt(Mp[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let Ko;function MS(n){Ko||(Ko=DS(),Ko.transparent=[0,0,0,0]);const t=Ko[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const OS=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function NS(n){const t=OS.exec(n);let e=255,s,i,r;if(t){if(t[7]!==s){const o=+t[7];e=t[8]?vr(o):qn(o*255,0,255)}return s=+t[1],i=+t[3],r=+t[5],s=255&(t[2]?vr(s):qn(s,0,255)),i=255&(t[4]?vr(i):qn(i,0,255)),r=255&(t[6]?vr(r):qn(r,0,255)),{r:s,g:i,b:r,a:e}}}function LS(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${yn(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const Tl=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,ni=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function VS(n,t,e){const s=ni(yn(n.r)),i=ni(yn(n.g)),r=ni(yn(n.b));return{r:ts(Tl(s+e*(ni(yn(t.r))-s))),g:ts(Tl(i+e*(ni(yn(t.g))-i))),b:ts(Tl(r+e*(ni(yn(t.b))-r))),a:n.a+e*(t.a-n.a)}}function Qo(n,t,e){if(n){let s=$d(n);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=Ud(s),n.r=s[0],n.g=s[1],n.b=s[2]}}function Xy(n,t){return n&&Object.assign(t||{},n)}function Op(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=ts(n[3]))):(t=Xy(n,{r:0,g:0,b:0,a:1}),t.a=ts(t.a)),t}function FS(n){return n.charAt(0)==="r"?NS(n):CS(n)}class Gr{constructor(t){if(t instanceof Gr)return t;const e=typeof t;let s;e==="object"?s=Op(t):e==="string"&&(s=bS(t)||MS(t)||FS(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=Xy(this._rgb);return t&&(t.a=yn(t.a)),t}set rgb(t){this._rgb=Op(t)}rgbString(){return this._valid?LS(this._rgb):void 0}hexString(){return this._valid?wS(this._rgb):void 0}hslString(){return this._valid?PS(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,i=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,c=s.a-i.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-l,s.r=255&l*s.r+r*i.r+.5,s.g=255&l*s.g+r*i.g+.5,s.b=255&l*s.b+r*i.b+.5,s.a=o*s.a+(1-o)*i.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=VS(this._rgb,t._rgb,e)),this}clone(){return new Gr(this.rgb)}alpha(t){return this._rgb.a=ts(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=_o(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Qo(this._rgb,2,t),this}darken(t){return Qo(this._rgb,2,-t),this}saturate(t){return Qo(this._rgb,1,t),this}desaturate(t){return Qo(this._rgb,1,-t),this}rotate(t){return RS(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function mn(){}const $S=(()=>{let n=0;return()=>n++})();function rt(n){return n==null}function Dt(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function ct(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function jt(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function Me(n,t){return jt(n)?n:t}function Z(n,t){return typeof n>"u"?t:n}const BS=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,Jy=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function At(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function vt(n,t,e,s){let i,r,o;if(Dt(n))for(r=n.length,i=0;i<r;i++)t.call(e,n[i],i);else if(ct(n))for(o=Object.keys(n),r=o.length,i=0;i<r;i++)t.call(e,n[o[i]],o[i])}function Ka(n,t){let e,s,i,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,s=n.length;e<s;++e)if(i=n[e],r=t[e],i.datasetIndex!==r.datasetIndex||i.index!==r.index)return!1;return!0}function Qa(n){if(Dt(n))return n.map(Qa);if(ct(n)){const t=Object.create(null),e=Object.keys(n),s=e.length;let i=0;for(;i<s;++i)t[e[i]]=Qa(n[e[i]]);return t}return n}function Zy(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function US(n,t,e,s){if(!Zy(n))return;const i=t[n],r=e[n];ct(i)&&ct(r)?Yr(i,r,s):t[n]=Qa(r)}function Yr(n,t,e){const s=Dt(t)?t:[t],i=s.length;if(!ct(n))return n;e=e||{};const r=e.merger||US;let o;for(let a=0;a<i;++a){if(o=s[a],!ct(o))continue;const c=Object.keys(o);for(let l=0,d=c.length;l<d;++l)r(c[l],n,o,e)}return n}function Pr(n,t){return Yr(n,t,{merger:jS})}function jS(n,t,e){if(!Zy(n))return;const s=t[n],i=e[n];ct(s)&&ct(i)?Pr(s,i):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=Qa(i))}const Np={"":n=>n,x:n=>n.x,y:n=>n.y};function zS(n){const t=n.split("."),e=[];let s="";for(const i of t)s+=i,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function HS(n){const t=zS(n);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function rs(n,t){return(Np[t]||(Np[t]=HS(t)))(n)}function jd(n){return n.charAt(0).toUpperCase()+n.slice(1)}const Kr=n=>typeof n<"u",os=n=>typeof n=="function",Lp=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function qS(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const mt=Math.PI,Rt=2*mt,WS=Rt+mt,Xa=Number.POSITIVE_INFINITY,GS=mt/180,Gt=mt/2,gs=mt/4,Vp=mt*2/3,Wn=Math.log10,an=Math.sign;function Dr(n,t,e){return Math.abs(n-t)<e}function Fp(n){const t=Math.round(n);n=Dr(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(Wn(n))),s=n/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function YS(n){const t=[],e=Math.sqrt(n);let s;for(s=1;s<e;s++)n%s===0&&(t.push(s),t.push(n/s));return e===(e|0)&&t.push(e),t.sort((i,r)=>i-r).pop(),t}function KS(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function Pi(n){return!KS(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function QS(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function tv(n,t,e){let s,i,r;for(s=0,i=n.length;s<i;s++)r=n[s][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function ze(n){return n*(mt/180)}function zd(n){return n*(180/mt)}function $p(n){if(!jt(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function ev(n,t){const e=t.x-n.x,s=t.y-n.y,i=Math.sqrt(e*e+s*s);let r=Math.atan2(s,e);return r<-.5*mt&&(r+=Rt),{angle:r,distance:i}}function _u(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function XS(n,t){return(n-t+WS)%Rt-mt}function _e(n){return(n%Rt+Rt)%Rt}function Qr(n,t,e,s){const i=_e(n),r=_e(t),o=_e(e),a=_e(r-i),c=_e(o-i),l=_e(i-r),d=_e(i-o);return i===r||i===o||s&&r===o||a>c&&l<d}function ee(n,t,e){return Math.max(t,Math.min(e,n))}function JS(n){return ee(n,-32768,32767)}function En(n,t,e,s=1e-6){return n>=Math.min(t,e)-s&&n<=Math.max(t,e)+s}function Hd(n,t,e){e=e||(o=>n[o]<t);let s=n.length-1,i=0,r;for(;s-i>1;)r=i+s>>1,e(r)?i=r:s=r;return{lo:i,hi:s}}const Tn=(n,t,e,s)=>Hd(n,e,s?i=>{const r=n[i][t];return r<e||r===e&&n[i+1][t]===e}:i=>n[i][t]<e),ZS=(n,t,e)=>Hd(n,e,s=>n[s][t]>=e);function t1(n,t,e){let s=0,i=n.length;for(;s<i&&n[s]<t;)s++;for(;i>s&&n[i-1]>e;)i--;return s>0||i<n.length?n.slice(s,i):n}const nv=["push","pop","shift","splice","unshift"];function e1(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),nv.forEach(e=>{const s="_onData"+jd(e),i=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=i.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...r)}),o}})})}function Bp(n,t){const e=n._chartjs;if(!e)return;const s=e.listeners,i=s.indexOf(t);i!==-1&&s.splice(i,1),!(s.length>0)&&(nv.forEach(r=>{delete n[r]}),delete n._chartjs)}function sv(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const iv=function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame}();function rv(n,t){let e=[],s=!1;return function(...i){e=i,s||(s=!0,iv.call(window,()=>{s=!1,n.apply(t,e)}))}}function n1(n,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(n,t,s)):n.apply(this,s),t}}const qd=n=>n==="start"?"left":n==="end"?"right":"center",pe=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,s1=(n,t,e,s)=>n===(s?"left":"right")?e:n==="center"?(t+e)/2:t;function ov(n,t,e){const s=t.length;let i=0,r=s;if(n._sorted){const{iScale:o,vScale:a,_parsed:c}=n,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,d=o.axis,{min:h,max:f,minDefined:m,maxDefined:g}=o.getUserBounds();if(m){if(i=Math.min(Tn(c,d,h).lo,e?s:Tn(t,d,o.getPixelForValue(h)).lo),l){const y=c.slice(0,i+1).reverse().findIndex(v=>!rt(v[a.axis]));i-=Math.max(0,y)}i=ee(i,0,s-1)}if(g){let y=Math.max(Tn(c,o.axis,f,!0).hi+1,e?0:Tn(t,d,o.getPixelForValue(f),!0).hi+1);if(l){const v=c.slice(y-1).findIndex(T=>!rt(T[a.axis]));y+=Math.max(0,v)}r=ee(y,i,s)-i}else r=s-i}return{start:i,count:r}}function av(n){const{xScale:t,yScale:e,_scaleRanges:s}=n,i={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return n._scaleRanges=i,!0;const r=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,i),r}const Xo=n=>n===0||n===1,Up=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*Rt/e)),jp=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*Rt/e)+1,Mr={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Gt)+1,easeOutSine:n=>Math.sin(n*Gt),easeInOutSine:n=>-.5*(Math.cos(mt*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>Xo(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>Xo(n)?n:Up(n,.075,.3),easeOutElastic:n=>Xo(n)?n:jp(n,.075,.3),easeInOutElastic(n){return Xo(n)?n:n<.5?.5*Up(n*2,.1125,.45):.5+.5*jp(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Mr.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Mr.easeInBounce(n*2)*.5:Mr.easeOutBounce(n*2-1)*.5+.5};function Wd(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function zp(n){return Wd(n)?n:new Gr(n)}function Il(n){return Wd(n)?n:new Gr(n).saturate(.5).darken(.1).hexString()}const i1=["x","y","borderWidth","radius","tension"],r1=["color","borderColor","backgroundColor"];function o1(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:r1},numbers:{type:"number",properties:i1}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function a1(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Hp=new Map;function c1(n,t){t=t||{};const e=n+JSON.stringify(t);let s=Hp.get(e);return s||(s=new Intl.NumberFormat(n,t),Hp.set(e,s)),s}function yo(n,t,e){return c1(t,e).format(n)}const cv={values(n){return Dt(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const s=this.chart.options.locale;let i,r=n;if(e.length>1){const l=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(l<1e-4||l>1e15)&&(i="scientific"),r=l1(n,e)}const o=Wn(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),yo(n,s,c)},logarithmic(n,t,e){if(n===0)return"0";const s=e[t].significand||n/Math.pow(10,Math.floor(Wn(n)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?cv.numeric.call(this,n,t,e):""}};function l1(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var Dc={formatters:cv};function u1(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Dc.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Us=Object.create(null),yu=Object.create(null);function Or(n,t){if(!t)return n;const e=t.split(".");for(let s=0,i=e.length;s<i;++s){const r=e[s];n=n[r]||(n[r]=Object.create(null))}return n}function Al(n,t,e){return typeof t=="string"?Yr(Or(n,t),e):Yr(Or(n,""),t)}class d1{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,i)=>Il(i.backgroundColor),this.hoverBorderColor=(s,i)=>Il(i.borderColor),this.hoverColor=(s,i)=>Il(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Al(this,t,e)}get(t){return Or(this,t)}describe(t,e){return Al(yu,t,e)}override(t,e){return Al(Us,t,e)}route(t,e,s,i){const r=Or(this,t),o=Or(this,s),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[a],l=o[i];return ct(c)?Object.assign({},l,c):Z(c,l)},set(c){this[a]=c}}})}apply(t){t.forEach(e=>e(this))}}var Mt=new d1({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[o1,a1,u1]);function h1(n){return!n||rt(n.size)||rt(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function Ja(n,t,e,s,i){let r=t[i];return r||(r=t[i]=n.measureText(i).width,e.push(i)),r>s&&(s=r),s}function f1(n,t,e,s){s=s||{};let i=s.data=s.data||{},r=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(i=s.data={},r=s.garbageCollect=[],s.font=t),n.save(),n.font=t;let o=0;const a=e.length;let c,l,d,h,f;for(c=0;c<a;c++)if(h=e[c],h!=null&&!Dt(h))o=Ja(n,i,r,o,h);else if(Dt(h))for(l=0,d=h.length;l<d;l++)f=h[l],f!=null&&!Dt(f)&&(o=Ja(n,i,r,o,f));n.restore();const m=r.length/2;if(m>e.length){for(c=0;c<m;c++)delete i[r[c]];r.splice(0,m)}return o}function _s(n,t,e){const s=n.currentDevicePixelRatio,i=e!==0?Math.max(e/2,.5):0;return Math.round((t-i)*s)/s+i}function qp(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function vu(n,t,e,s){lv(n,t,e,s,null)}function lv(n,t,e,s,i){let r,o,a,c,l,d,h,f;const m=t.pointStyle,g=t.rotation,y=t.radius;let v=(g||0)*GS;if(m&&typeof m=="object"&&(r=m.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,s),n.rotate(v),n.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),n.restore();return}if(!(isNaN(y)||y<=0)){switch(n.beginPath(),m){default:i?n.ellipse(e,s,i/2,y,0,0,Rt):n.arc(e,s,y,0,Rt),n.closePath();break;case"triangle":d=i?i/2:y,n.moveTo(e+Math.sin(v)*d,s-Math.cos(v)*y),v+=Vp,n.lineTo(e+Math.sin(v)*d,s-Math.cos(v)*y),v+=Vp,n.lineTo(e+Math.sin(v)*d,s-Math.cos(v)*y),n.closePath();break;case"rectRounded":l=y*.516,c=y-l,o=Math.cos(v+gs)*c,h=Math.cos(v+gs)*(i?i/2-l:c),a=Math.sin(v+gs)*c,f=Math.sin(v+gs)*(i?i/2-l:c),n.arc(e-h,s-a,l,v-mt,v-Gt),n.arc(e+f,s-o,l,v-Gt,v),n.arc(e+h,s+a,l,v,v+Gt),n.arc(e-f,s+o,l,v+Gt,v+mt),n.closePath();break;case"rect":if(!g){c=Math.SQRT1_2*y,d=i?i/2:c,n.rect(e-d,s-c,2*d,2*c);break}v+=gs;case"rectRot":h=Math.cos(v)*(i?i/2:y),o=Math.cos(v)*y,a=Math.sin(v)*y,f=Math.sin(v)*(i?i/2:y),n.moveTo(e-h,s-a),n.lineTo(e+f,s-o),n.lineTo(e+h,s+a),n.lineTo(e-f,s+o),n.closePath();break;case"crossRot":v+=gs;case"cross":h=Math.cos(v)*(i?i/2:y),o=Math.cos(v)*y,a=Math.sin(v)*y,f=Math.sin(v)*(i?i/2:y),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o);break;case"star":h=Math.cos(v)*(i?i/2:y),o=Math.cos(v)*y,a=Math.sin(v)*y,f=Math.sin(v)*(i?i/2:y),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o),v+=gs,h=Math.cos(v)*(i?i/2:y),o=Math.cos(v)*y,a=Math.sin(v)*y,f=Math.sin(v)*(i?i/2:y),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o);break;case"line":o=i?i/2:Math.cos(v)*y,a=Math.sin(v)*y,n.moveTo(e-o,s-a),n.lineTo(e+o,s+a);break;case"dash":n.moveTo(e,s),n.lineTo(e+Math.cos(v)*(i?i/2:y),s+Math.sin(v)*y);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function In(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function Mc(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function Oc(n){n.restore()}function p1(n,t,e,s,i){if(!t)return n.lineTo(e.x,e.y);if(i==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else i==="after"!=!!s?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function m1(n,t,e,s){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function g1(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),rt(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function _1(n,t,e,s,i){if(i.strikethrough||i.underline){const r=n.measureText(s),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,c=e-r.actualBoundingBoxAscent,l=e+r.actualBoundingBoxDescent,d=i.strikethrough?(c+l)/2:l;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=i.decorationWidth||2,n.moveTo(o,d),n.lineTo(a,d),n.stroke()}}function y1(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function js(n,t,e,s,i,r={}){const o=Dt(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let c,l;for(n.save(),n.font=i.string,g1(n,r),c=0;c<o.length;++c)l=o[c],r.backdrop&&y1(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),rt(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(l,e,s,r.maxWidth)),n.fillText(l,e,s,r.maxWidth),_1(n,e,s,l,r),s+=Number(i.lineHeight);n.restore()}function Xr(n,t){const{x:e,y:s,w:i,h:r,radius:o}=t;n.arc(e+o.topLeft,s+o.topLeft,o.topLeft,1.5*mt,mt,!0),n.lineTo(e,s+r-o.bottomLeft),n.arc(e+o.bottomLeft,s+r-o.bottomLeft,o.bottomLeft,mt,Gt,!0),n.lineTo(e+i-o.bottomRight,s+r),n.arc(e+i-o.bottomRight,s+r-o.bottomRight,o.bottomRight,Gt,0,!0),n.lineTo(e+i,s+o.topRight),n.arc(e+i-o.topRight,s+o.topRight,o.topRight,0,-Gt,!0),n.lineTo(e+o.topLeft,s)}const v1=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,b1=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function x1(n,t){const e=(""+n).match(v1);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const w1=n=>+n||0;function Gd(n,t){const e={},s=ct(t),i=s?Object.keys(t):t,r=ct(n)?s?o=>Z(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of i)e[o]=w1(r(o));return e}function uv(n){return Gd(n,{top:"y",right:"x",bottom:"y",left:"x"})}function Rs(n){return Gd(n,["topLeft","topRight","bottomLeft","bottomRight"])}function xe(n){const t=uv(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Zt(n,t){n=n||{},t=t||Mt.font;let e=Z(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=Z(n.style,t.style);s&&!(""+s).match(b1)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const i={family:Z(n.family,t.family),lineHeight:x1(Z(n.lineHeight,t.lineHeight),e),size:e,style:s,weight:Z(n.weight,t.weight),string:""};return i.string=h1(i),i}function br(n,t,e,s){let i,r,o;for(i=0,r=n.length;i<r;++i)if(o=n[i],o!==void 0&&o!==void 0)return o}function E1(n,t,e){const{min:s,max:i}=n,r=Jy(t,(i-s)/2),o=(a,c)=>e&&a===0?0:a+c;return{min:o(s,-Math.abs(r)),max:o(i,r)}}function us(n,t){return Object.assign(Object.create(n),t)}function Yd(n,t=[""],e,s,i=()=>n[0]){const r=e||n;typeof s>"u"&&(s=pv("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:s,_getTarget:i,override:a=>Yd([a,...n],t,r,s)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete n[0][c],!0},get(a,c){return hv(a,c,()=>P1(c,t,n,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,c){return Gp(a).includes(c)},ownKeys(a){return Gp(a)},set(a,c,l){const d=a._storage||(a._storage=i());return a[c]=d[c]=l,delete a._keys,!0}})}function Di(n,t,e,s){const i={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:dv(n,s),setContext:r=>Di(n,r,e,s),override:r=>Di(n.override(r),t,e,s)};return new Proxy(i,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return hv(r,o,()=>I1(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function dv(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:i=t.allKeys}=n;return{allKeys:i,scriptable:e,indexable:s,isScriptable:os(e)?e:()=>e,isIndexable:os(s)?s:()=>s}}const T1=(n,t)=>n?n+jd(t):t,Kd=(n,t)=>ct(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function hv(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const s=e();return n[t]=s,s}function I1(n,t,e){const{_proxy:s,_context:i,_subProxy:r,_descriptors:o}=n;let a=s[t];return os(a)&&o.isScriptable(t)&&(a=A1(t,a,n,e)),Dt(a)&&a.length&&(a=k1(t,a,n,o.isIndexable)),Kd(t,a)&&(a=Di(a,i,r&&r[t],o)),a}function A1(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let c=t(r,o||s);return a.delete(n),Kd(n,c)&&(c=Qd(i._scopes,i,n,c)),c}function k1(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&s(n))return t[r.index%t.length];if(ct(t[0])){const c=t,l=i._scopes.filter(d=>d!==c);t=[];for(const d of c){const h=Qd(l,i,n,d);t.push(Di(h,r,o&&o[n],a))}}return t}function fv(n,t,e){return os(n)?n(t,e):n}const S1=(n,t)=>n===!0?t:typeof n=="string"?rs(t,n):void 0;function C1(n,t,e,s,i){for(const r of t){const o=S1(e,r);if(o){n.add(o);const a=fv(o._fallback,e,i);if(typeof a<"u"&&a!==e&&a!==s)return a}else if(o===!1&&typeof s<"u"&&e!==s)return null}return!1}function Qd(n,t,e,s){const i=t._rootScopes,r=fv(t._fallback,e,s),o=[...n,...i],a=new Set;a.add(s);let c=Wp(a,o,e,r||e,s);return c===null||typeof r<"u"&&r!==e&&(c=Wp(a,o,r,c,s),c===null)?!1:Yd(Array.from(a),[""],i,r,()=>R1(t,e,s))}function Wp(n,t,e,s,i){for(;e;)e=C1(n,t,e,s,i);return e}function R1(n,t,e){const s=n._getTarget();t in s||(s[t]={});const i=s[t];return Dt(i)&&ct(e)?e:i||{}}function P1(n,t,e,s){let i;for(const r of t)if(i=pv(T1(r,n),e),typeof i<"u")return Kd(n,i)?Qd(e,s,n,i):i}function pv(n,t){for(const e of t){if(!e)continue;const s=e[n];if(typeof s<"u")return s}}function Gp(n){let t=n._keys;return t||(t=n._keys=D1(n._scopes)),t}function D1(n){const t=new Set;for(const e of n)for(const s of Object.keys(e).filter(i=>!i.startsWith("_")))t.add(s);return Array.from(t)}function mv(n,t,e,s){const{iScale:i}=n,{key:r="r"}=this._parsing,o=new Array(s);let a,c,l,d;for(a=0,c=s;a<c;++a)l=a+e,d=t[l],o[a]={r:i.parse(rs(d,r),l)};return o}const M1=Number.EPSILON||1e-14,Mi=(n,t)=>t<n.length&&!n[t].skip&&n[t],gv=n=>n==="x"?"y":"x";function O1(n,t,e,s){const i=n.skip?t:n,r=t,o=e.skip?t:e,a=_u(r,i),c=_u(o,r);let l=a/(a+c),d=c/(a+c);l=isNaN(l)?0:l,d=isNaN(d)?0:d;const h=s*l,f=s*d;return{previous:{x:r.x-h*(o.x-i.x),y:r.y-h*(o.y-i.y)},next:{x:r.x+f*(o.x-i.x),y:r.y+f*(o.y-i.y)}}}function N1(n,t,e){const s=n.length;let i,r,o,a,c,l=Mi(n,0);for(let d=0;d<s-1;++d)if(c=l,l=Mi(n,d+1),!(!c||!l)){if(Dr(t[d],0,M1)){e[d]=e[d+1]=0;continue}i=e[d]/t[d],r=e[d+1]/t[d],a=Math.pow(i,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[d]=i*o*t[d],e[d+1]=r*o*t[d])}}function L1(n,t,e="x"){const s=gv(e),i=n.length;let r,o,a,c=Mi(n,0);for(let l=0;l<i;++l){if(o=a,a=c,c=Mi(n,l+1),!a)continue;const d=a[e],h=a[s];o&&(r=(d-o[e])/3,a[`cp1${e}`]=d-r,a[`cp1${s}`]=h-r*t[l]),c&&(r=(c[e]-d)/3,a[`cp2${e}`]=d+r,a[`cp2${s}`]=h+r*t[l])}}function V1(n,t="x"){const e=gv(t),s=n.length,i=Array(s).fill(0),r=Array(s);let o,a,c,l=Mi(n,0);for(o=0;o<s;++o)if(a=c,c=l,l=Mi(n,o+1),!!c){if(l){const d=l[t]-c[t];i[o]=d!==0?(l[e]-c[e])/d:0}r[o]=a?l?an(i[o-1])!==an(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}N1(n,i,r),L1(n,r,t)}function Jo(n,t,e){return Math.max(Math.min(n,e),t)}function F1(n,t){let e,s,i,r,o,a=In(n[0],t);for(e=0,s=n.length;e<s;++e)o=r,r=a,a=e<s-1&&In(n[e+1],t),r&&(i=n[e],o&&(i.cp1x=Jo(i.cp1x,t.left,t.right),i.cp1y=Jo(i.cp1y,t.top,t.bottom)),a&&(i.cp2x=Jo(i.cp2x,t.left,t.right),i.cp2y=Jo(i.cp2y,t.top,t.bottom)))}function $1(n,t,e,s,i){let r,o,a,c;if(t.spanGaps&&(n=n.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")V1(n,i);else{let l=s?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],c=O1(l,a,n[Math.min(r+1,o-(s?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}t.capBezierPoints&&F1(n,e)}function Xd(){return typeof window<"u"&&typeof document<"u"}function Jd(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Za(n,t,e){let s;return typeof n=="string"?(s=parseInt(n,10),n.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=n,s}const Nc=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function B1(n,t){return Nc(n).getPropertyValue(t)}const U1=["top","right","bottom","left"];function Ps(n,t,e){const s={};e=e?"-"+e:"";for(let i=0;i<4;i++){const r=U1[i];s[r]=parseFloat(n[t+"-"+r+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const j1=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function z1(n,t){const e=n.touches,s=e&&e.length?e[0]:n,{offsetX:i,offsetY:r}=s;let o=!1,a,c;if(j1(i,r,n.target))a=i,c=r;else{const l=t.getBoundingClientRect();a=s.clientX-l.left,c=s.clientY-l.top,o=!0}return{x:a,y:c,box:o}}function ws(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:s}=t,i=Nc(e),r=i.boxSizing==="border-box",o=Ps(i,"padding"),a=Ps(i,"border","width"),{x:c,y:l,box:d}=z1(n,e),h=o.left+(d&&a.left),f=o.top+(d&&a.top);let{width:m,height:g}=t;return r&&(m-=o.width+a.width,g-=o.height+a.height),{x:Math.round((c-h)/m*e.width/s),y:Math.round((l-f)/g*e.height/s)}}function H1(n,t,e){let s,i;if(t===void 0||e===void 0){const r=n&&Jd(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=Nc(r),c=Ps(a,"border","width"),l=Ps(a,"padding");t=o.width-l.width-c.width,e=o.height-l.height-c.height,s=Za(a.maxWidth,r,"clientWidth"),i=Za(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:s||Xa,maxHeight:i||Xa}}const Gn=n=>Math.round(n*10)/10;function q1(n,t,e,s){const i=Nc(n),r=Ps(i,"margin"),o=Za(i.maxWidth,n,"clientWidth")||Xa,a=Za(i.maxHeight,n,"clientHeight")||Xa,c=H1(n,t,e);let{width:l,height:d}=c;if(i.boxSizing==="content-box"){const f=Ps(i,"border","width"),m=Ps(i,"padding");l-=m.width+f.width,d-=m.height+f.height}return l=Math.max(0,l-r.width),d=Math.max(0,s?l/s:d-r.height),l=Gn(Math.min(l,o,c.maxWidth)),d=Gn(Math.min(d,a,c.maxHeight)),l&&!d&&(d=Gn(l/2)),(t!==void 0||e!==void 0)&&s&&c.height&&d>c.height&&(d=c.height,l=Gn(Math.floor(d*s))),{width:l,height:d}}function Yp(n,t,e){const s=t||1,i=Gn(n.height*s),r=Gn(n.width*s);n.height=Gn(n.height),n.width=Gn(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==s||o.height!==i||o.width!==r?(n.currentDevicePixelRatio=s,o.height=i,o.width=r,n.ctx.setTransform(s,0,0,s,0,0),!0):!1}const W1=function(){let n=!1;try{const t={get passive(){return n=!0,!1}};Xd()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n}();function Kp(n,t){const e=B1(n,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function Es(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function G1(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:s==="middle"?e<.5?n.y:t.y:s==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function Y1(n,t,e,s){const i={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=Es(n,i,e),a=Es(i,r,e),c=Es(r,t,e),l=Es(o,a,e),d=Es(a,c,e);return Es(l,d,e)}const K1=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},Q1=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function xi(n,t,e){return n?K1(t,e):Q1()}function _v(n,t){let e,s;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=s)}function yv(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function vv(n){return n==="angle"?{between:Qr,compare:XS,normalize:_e}:{between:En,compare:(t,e)=>t-e,normalize:t=>t}}function Qp({start:n,end:t,count:e,loop:s,style:i}){return{start:n%e,end:t%e,loop:s&&(t-n+1)%e===0,style:i}}function X1(n,t,e){const{property:s,start:i,end:r}=e,{between:o,normalize:a}=vv(s),c=t.length;let{start:l,end:d,loop:h}=n,f,m;if(h){for(l+=c,d+=c,f=0,m=c;f<m&&o(a(t[l%c][s]),i,r);++f)l--,d--;l%=c,d%=c}return d<l&&(d+=c),{start:l,end:d,loop:h,style:n.style}}function bv(n,t,e){if(!e)return[n];const{property:s,start:i,end:r}=e,o=t.length,{compare:a,between:c,normalize:l}=vv(s),{start:d,end:h,loop:f,style:m}=X1(n,t,e),g=[];let y=!1,v=null,T,k,C;const P=()=>c(i,C,T)&&a(i,C)!==0,M=()=>a(r,T)===0||c(r,C,T),D=()=>y||P(),w=()=>!y||M();for(let b=d,x=d;b<=h;++b)k=t[b%o],!k.skip&&(T=l(k[s]),T!==C&&(y=c(T,i,r),v===null&&D()&&(v=a(T,i)===0?b:x),v!==null&&w()&&(g.push(Qp({start:v,end:b,loop:f,count:o,style:m})),v=null),x=b,C=T));return v!==null&&g.push(Qp({start:v,end:h,loop:f,count:o,style:m})),g}function xv(n,t){const e=[],s=n.segments;for(let i=0;i<s.length;i++){const r=bv(s[i],n.points,t);r.length&&e.push(...r)}return e}function J1(n,t,e,s){let i=0,r=t-1;if(e&&!s)for(;i<t&&!n[i].skip;)i++;for(;i<t&&n[i].skip;)i++;for(i%=t,e&&(r+=i);r>i&&n[r%t].skip;)r--;return r%=t,{start:i,end:r}}function Z1(n,t,e,s){const i=n.length,r=[];let o=t,a=n[t],c;for(c=t+1;c<=e;++c){const l=n[c%i];l.skip||l.stop?a.skip||(s=!1,r.push({start:t%i,end:(c-1)%i,loop:s}),t=o=l.stop?c:null):(o=c,a.skip&&(t=c)),a=l}return o!==null&&r.push({start:t%i,end:o%i,loop:s}),r}function tC(n,t){const e=n.points,s=n.options.spanGaps,i=e.length;if(!i)return[];const r=!!n._loop,{start:o,end:a}=J1(e,i,r,s);if(s===!0)return Xp(n,[{start:o,end:a,loop:r}],e,t);const c=a<o?a+i:a,l=!!n._fullLoop&&o===0&&a===i-1;return Xp(n,Z1(e,o,c,l),e,t)}function Xp(n,t,e,s){return!s||!s.setContext||!e?t:eC(n,t,e,s)}function eC(n,t,e,s){const i=n._chart.getContext(),r=Jp(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,c=e.length,l=[];let d=r,h=t[0].start,f=h;function m(g,y,v,T){const k=a?-1:1;if(g!==y){for(g+=c;e[g%c].skip;)g-=k;for(;e[y%c].skip;)y+=k;g%c!==y%c&&(l.push({start:g%c,end:y%c,loop:v,style:T}),d=T,h=y%c)}}for(const g of t){h=a?h:g.start;let y=e[h%c],v;for(f=h+1;f<=g.end;f++){const T=e[f%c];v=Jp(s.setContext(us(i,{type:"segment",p0:y,p1:T,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),nC(v,d)&&m(h,f-1,g.loop,d),y=T,d=v}h<f-1&&m(h,f-1,g.loop,d)}return l}function Jp(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function nC(n,t){if(!t)return!1;const e=[],s=function(i,r){return Wd(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,s)!==JSON.stringify(t,s)}function Zo(n,t,e){return n.options.clip?n[e]:t[e]}function sC(n,t){const{xScale:e,yScale:s}=n;return e&&s?{left:Zo(e,t,"left"),right:Zo(e,t,"right"),top:Zo(s,t,"top"),bottom:Zo(s,t,"bottom")}:t}function wv(n,t){const e=t._clip;if(e.disabled)return!1;const s=sC(t,n.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class iC{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,i){const r=e.listeners[i],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(s-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=iv.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,i)=>{if(!s.running||!s.items.length)return;const r=s.items;let o=r.length-1,a=!1,c;for(;o>=0;--o)c=r[o],c._active?(c._total>s.duration&&(s.duration=c._total),c.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(i.draw(),this._notify(i,s,t,"progress")),r.length||(s.running=!1,this._notify(i,s,t,"complete"),s.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,i)=>Math.max(s,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let i=s.length-1;for(;i>=0;--i)s[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var gn=new iC;const Zp="transparent",rC={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const s=zp(n||Zp),i=s.valid&&zp(t||Zp);return i&&i.valid?i.mix(s,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class oC{constructor(t,e,s,i){const r=e[s];i=br([t.to,i,r,t.from]);const o=br([t.from,r,i]);this._active=!0,this._fn=t.fn||rC[t.type||typeof o],this._easing=Mr[t.easing]||Mr.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const i=this._target[this._prop],r=s-this._start,o=this._duration-r;this._start=s,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=br([t.to,e,i,t.from]),this._from=br([t.from,i,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,i=this._prop,r=this._from,o=this._loop,a=this._to;let c;if(this._active=r!==a&&(o||e<s),!this._active){this._target[i]=a,this._notify(!0);return}if(e<0){this._target[i]=r;return}c=e/s%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[i]=this._fn(r,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let i=0;i<s.length;i++)s[i][e]()}}class Ev{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!ct(t))return;const e=Object.keys(Mt.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const r=t[i];if(!ct(r))return;const o={};for(const a of e)o[a]=r[a];(Dt(r.properties)&&r.properties||[i]).forEach(a=>{(a===i||!s.has(a))&&s.set(a,o)})})}_animateOptions(t,e){const s=e.options,i=cC(t,s);if(!i)return[];const r=this._createAnimations(i,s);return s.$shared&&aC(t.options.$animations,s).then(()=>{t.options=s},()=>{}),r}_createAnimations(t,e){const s=this._properties,i=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){i.push(...this._animateOptions(t,e));continue}const d=e[l];let h=r[l];const f=s.get(l);if(h)if(f&&h.active()){h.update(f,d,a);continue}else h.cancel();if(!f||!f.duration){t[l]=d;continue}r[l]=h=new oC(f,t,l,d),i.push(h)}return i}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return gn.add(this._chart,s),!0}}function aC(n,t){const e=[],s=Object.keys(t);for(let i=0;i<s.length;i++){const r=n[s[i]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function cC(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function tm(n,t){const e=n&&n.options||{},s=e.reverse,i=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:s?r:i,end:s?i:r}}function lC(n,t,e){if(e===!1)return!1;const s=tm(n,e),i=tm(t,e);return{top:i.end,right:s.end,bottom:i.start,left:s.start}}function uC(n){let t,e,s,i;return ct(n)?(t=n.top,e=n.right,s=n.bottom,i=n.left):t=e=s=i=n,{top:t,right:e,bottom:s,left:i,disabled:n===!1}}function Tv(n,t){const e=[],s=n._getSortedDatasetMetas(t);let i,r;for(i=0,r=s.length;i<r;++i)e.push(s[i].index);return e}function em(n,t,e,s={}){const i=n.keys,r=s.mode==="single";let o,a,c,l;if(t===null)return;let d=!1;for(o=0,a=i.length;o<a;++o){if(c=+i[o],c===e){if(d=!0,s.all)continue;break}l=n.values[c],jt(l)&&(r||t===0||an(t)===an(l))&&(t+=l)}return!d&&!s.all?0:t}function dC(n,t){const{iScale:e,vScale:s}=t,i=e.axis==="x"?"x":"y",r=s.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let c,l,d;for(c=0,l=o.length;c<l;++c)d=o[c],a[c]={[i]:d,[r]:n[d]};return a}function kl(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function hC(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function fC(n){const{min:t,max:e,minDefined:s,maxDefined:i}=n.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:i?e:Number.POSITIVE_INFINITY}}function pC(n,t,e){const s=n[t]||(n[t]={});return s[e]||(s[e]={})}function nm(n,t,e,s){for(const i of t.getMatchingVisibleMetas(s).reverse()){const r=n[i.index];if(e&&r>0||!e&&r<0)return i.index}return null}function sm(n,t){const{chart:e,_cachedMeta:s}=n,i=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=s,c=r.axis,l=o.axis,d=hC(r,o,s),h=t.length;let f;for(let m=0;m<h;++m){const g=t[m],{[c]:y,[l]:v}=g,T=g._stacks||(g._stacks={});f=T[l]=pC(i,d,y),f[a]=v,f._top=nm(f,o,!0,s.type),f._bottom=nm(f,o,!1,s.type);const k=f._visualValues||(f._visualValues={});k[a]=v}}function Sl(n,t){const e=n.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function mC(n,t){return us(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function gC(n,t,e){return us(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function sr(n,t){const e=n.controller.index,s=n.vScale&&n.vScale.axis;if(s){t=t||n._parsed;for(const i of t){const r=i._stacks;if(!r||r[s]===void 0||r[s][e]===void 0)return;delete r[s][e],r[s]._visualValues!==void 0&&r[s]._visualValues[e]!==void 0&&delete r[s]._visualValues[e]}}}const Cl=n=>n==="reset"||n==="none",im=(n,t)=>t?n:Object.assign({},n),_C=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:Tv(e,!0),values:null};class He{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=kl(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&sr(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),i=(h,f,m,g)=>h==="x"?f:h==="r"?g:m,r=e.xAxisID=Z(s.xAxisID,Sl(t,"x")),o=e.yAxisID=Z(s.yAxisID,Sl(t,"y")),a=e.rAxisID=Z(s.rAxisID,Sl(t,"r")),c=e.indexAxis,l=e.iAxisID=i(c,r,o,a),d=e.vAxisID=i(c,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Bp(this._data,this),t._stacked&&sr(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(ct(e)){const i=this._cachedMeta;this._data=dC(e,i)}else if(s!==e){if(s){Bp(s,this);const i=this._cachedMeta;sr(i),i._parsed=[]}e&&Object.isExtensible(e)&&e1(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let i=!1;this._dataCheck();const r=e._stacked;e._stacked=kl(e.vScale,e),e.stack!==s.stack&&(i=!0,sr(e),e.stack=s.stack),this._resyncElements(t),(i||r!==e._stacked)&&(sm(this,e._parsed),e._stacked=kl(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:i}=this,{iScale:r,_stacked:o}=s,a=r.axis;let c=t===0&&e===i.length?!0:s._sorted,l=t>0&&s._parsed[t-1],d,h,f;if(this._parsing===!1)s._parsed=i,s._sorted=!0,f=i;else{Dt(i[t])?f=this.parseArrayData(s,i,t,e):ct(i[t])?f=this.parseObjectData(s,i,t,e):f=this.parsePrimitiveData(s,i,t,e);const m=()=>h[a]===null||l&&h[a]<l[a];for(d=0;d<e;++d)s._parsed[d+t]=h=f[d],c&&(m()&&(c=!1),l=h);s._sorted=c}o&&sm(this,f)}parsePrimitiveData(t,e,s,i){const{iScale:r,vScale:o}=t,a=r.axis,c=o.axis,l=r.getLabels(),d=r===o,h=new Array(i);let f,m,g;for(f=0,m=i;f<m;++f)g=f+s,h[f]={[a]:d||r.parse(l[g],g),[c]:o.parse(e[g],g)};return h}parseArrayData(t,e,s,i){const{xScale:r,yScale:o}=t,a=new Array(i);let c,l,d,h;for(c=0,l=i;c<l;++c)d=c+s,h=e[d],a[c]={x:r.parse(h[0],d),y:o.parse(h[1],d)};return a}parseObjectData(t,e,s,i){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(i);let d,h,f,m;for(d=0,h=i;d<h;++d)f=d+s,m=e[f],l[d]={x:r.parse(rs(m,a),f),y:o.parse(rs(m,c),f)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const i=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:Tv(i,!0),values:e._stacks[t.axis]._visualValues};return em(a,o,r.index,{mode:s})}updateRangeFromParsed(t,e,s,i){const r=s[e.axis];let o=r===null?NaN:r;const a=i&&s._stacks[e.axis];i&&a&&(i.values=a,o=em(i,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const s=this._cachedMeta,i=s._parsed,r=s._sorted&&t===s.iScale,o=i.length,a=this._getOtherScale(t),c=_C(e,s,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=fC(a);let f,m;function g(){m=i[f];const y=m[a.axis];return!jt(m[t.axis])||d>y||h<y}for(f=0;f<o&&!(!g()&&(this.updateRangeFromParsed(l,t,m,c),r));++f);if(r){for(f=o-1;f>=0;--f)if(!g()){this.updateRangeFromParsed(l,t,m,c);break}}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let i,r,o;for(i=0,r=e.length;i<r;++i)o=e[i][t.axis],jt(o)&&s.push(o);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,i=e.vScale,r=this.getParsed(t);return{label:s?""+s.getLabelForValue(r[s.axis]):"",value:i?""+i.getLabelForValue(r[i.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=uC(Z(this.options.clip,lC(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,i=s.data||[],r=e.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||i.length-a,l=this.options.drawActiveElementsOnTop;let d;for(s.dataset&&s.dataset.draw(t,r,a,c),d=a;d<a+c;++d){const h=i[d];h.hidden||(h.active&&l?o.push(h):h.draw(t,r))}for(d=0;d<o.length;++d)o[d].draw(t,r)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const i=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=gC(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=i.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=mC(this.chart.getContext(),this.index)),r.dataset=i,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=s,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const i=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],c=this.enableOptionSharing&&Kr(s);if(a)return im(a,c);const l=this.chart.config,d=l.datasetElementScopeKeys(this._type,t),h=i?[`${t}Hover`,"hover",t,""]:[t,""],f=l.getOptionScopes(this.getDataset(),d),m=Object.keys(Mt.elements[t]),g=()=>this.getContext(s,i,e),y=l.resolveNamedOptions(f,m,g,h);return y.$shared&&(y.$shared=c,r[o]=Object.freeze(im(y,c))),y}_resolveAnimations(t,e,s){const i=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let c;if(i.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,e),f=d.getOptionScopes(this.getDataset(),h);c=d.createResolver(f,this.getContext(t,s,e))}const l=new Ev(i,c&&c.animations);return c&&c._cacheable&&(r[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Cl(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),i=this._sharedOptions,r=this.getSharedOptions(s),o=this.includeOptions(e,r)||r!==i;return this.updateSharedOptions(r,e,s),{sharedOptions:r,includeOptions:o}}updateElement(t,e,s,i){Cl(i)?Object.assign(t,s):this._resolveAnimations(e,i).update(t,s)}updateSharedOptions(t,e,s){t&&!Cl(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,i){t.active=i;const r=this.getStyle(e,i);this._resolveAnimations(e,s,i).update(t,{options:!i&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const i=s.length,r=e.length,o=Math.min(r,i);o&&this.parse(0,o),r>i?this._insertElements(i,r-i,t):r<i&&this._removeElements(r,i-r)}_insertElements(t,e,s=!0){const i=this._cachedMeta,r=i.data,o=t+e;let a;const c=l=>{for(l.length+=e,a=l.length-1;a>=o;a--)l[a]=l[a-e]};for(c(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&c(i._parsed),this.parse(t,e),s&&this.updateElements(r,t,e,"reset")}updateElements(t,e,s,i){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const i=s._parsed.splice(t,e);s._stacked&&sr(s,i)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,i]=t;this[e](s,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}N(He,"defaults",{}),N(He,"datasetElementType",null),N(He,"dataElementType",null);function yC(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let s=[];for(let i=0,r=e.length;i<r;i++)s=s.concat(e[i].controller.getAllParsedValues(n));n._cache.$bar=sv(s.sort((i,r)=>i-r))}return n._cache.$bar}function vC(n){const t=n.iScale,e=yC(t,n.type);let s=t._length,i,r,o,a;const c=()=>{o===32767||o===-32768||(Kr(a)&&(s=Math.min(s,Math.abs(o-a)||s)),a=o)};for(i=0,r=e.length;i<r;++i)o=t.getPixelForValue(e[i]),c();for(a=void 0,i=0,r=t.ticks.length;i<r;++i)o=t.getPixelForTick(i),c();return s}function bC(n,t,e,s){const i=e.barThickness;let r,o;return rt(i)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=i*s,o=1),{chunk:r/s,ratio:o,start:t.pixels[n]-r/2}}function xC(n,t,e,s){const i=t.pixels,r=i[n];let o=n>0?i[n-1]:null,a=n<i.length-1?i[n+1]:null;const c=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const l=r-(r-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/s,ratio:e.barPercentage,start:l}}function wC(n,t,e,s){const i=e.parse(n[0],s),r=e.parse(n[1],s),o=Math.min(i,r),a=Math.max(i,r);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),t[e.axis]=l,t._custom={barStart:c,barEnd:l,start:i,end:r,min:o,max:a}}function Iv(n,t,e,s){return Dt(n)?wC(n,t,e,s):t[e.axis]=e.parse(n,s),t}function rm(n,t,e,s){const i=n.iScale,r=n.vScale,o=i.getLabels(),a=i===r,c=[];let l,d,h,f;for(l=e,d=e+s;l<d;++l)f=t[l],h={},h[i.axis]=a||i.parse(o[l],l),c.push(Iv(f,h,r,l));return c}function Rl(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function EC(n,t,e){return n!==0?an(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function TC(n){let t,e,s,i,r;return n.horizontal?(t=n.base>n.x,e="left",s="right"):(t=n.base<n.y,e="bottom",s="top"),t?(i="end",r="start"):(i="start",r="end"),{start:e,end:s,reverse:t,top:i,bottom:r}}function IC(n,t,e,s){let i=t.borderSkipped;const r={};if(!i){n.borderSkipped=r;return}if(i===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:l,bottom:d}=TC(n);i==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===s?i=l:(e._bottom||0)===s?i=d:(r[om(d,o,a,c)]=!0,i=l)),r[om(i,o,a,c)]=!0,n.borderSkipped=r}function om(n,t,e,s){return s?(n=AC(n,t,e),n=am(n,e,t)):n=am(n,t,e),n}function AC(n,t,e){return n===t?e:n===e?t:n}function am(n,t,e){return n==="start"?t:n==="end"?e:n}function kC(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class va extends He{parsePrimitiveData(t,e,s,i){return rm(t,e,s,i)}parseArrayData(t,e,s,i){return rm(t,e,s,i)}parseObjectData(t,e,s,i){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=r.axis==="x"?a:c,d=o.axis==="x"?a:c,h=[];let f,m,g,y;for(f=s,m=s+i;f<m;++f)y=e[f],g={},g[r.axis]=r.parse(rs(y,l),f),h.push(Iv(rs(y,d),g,o,f));return h}updateRangeFromParsed(t,e,s,i){super.updateRangeFromParsed(t,e,s,i);const r=s._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:i}=e,r=this.getParsed(t),o=r._custom,a=Rl(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(r[i.axis]);return{label:""+s.getLabelForValue(r[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,i){const r=i==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),l=a.isHorizontal(),d=this._getRuler(),{sharedOptions:h,includeOptions:f}=this._getSharedOptions(e,i);for(let m=e;m<e+s;m++){const g=this.getParsed(m),y=r||rt(g[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(m),v=this._calculateBarIndexPixels(m,d),T=(g._stacks||{})[a.axis],k={horizontal:l,base:y.base,enableBorderRadius:!T||Rl(g._custom)||o===T._top||o===T._bottom,x:l?y.head:v.center,y:l?v.center:y.head,height:l?v.size:Math.abs(y.size),width:l?Math.abs(y.size):v.size};f&&(k.options=h||this.resolveDataElementOptions(m,t[m].active?"active":i));const C=k.options||t[m].options;IC(k,C,T,o),kC(k,C,d.ratio),this.updateElement(t[m],m,k,i)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,i=s.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),r=s.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),c=a&&a[s.axis],l=d=>{const h=d._parsed.find(m=>m[s.axis]===c),f=h&&h[d.vScale.axis];if(rt(f)||isNaN(f))return!0};for(const d of i)if(!(e!==void 0&&l(d))&&((r===!1||o.indexOf(d.stack)===-1||r===void 0&&d.stack===void 0)&&o.push(d.stack),d.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[Z(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const i=this._getStacks(t,s),r=e!==void 0?i.indexOf(e):-1;return r===-1?i.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,i=[];let r,o;for(r=0,o=e.data.length;r<o;++r)i.push(s.getPixelForValue(this.getParsed(r)[s.axis],r));const a=t.barThickness;return{min:a||vC(e),pixels:i,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:i},options:{base:r,minBarLength:o}}=this,a=r||0,c=this.getParsed(t),l=c._custom,d=Rl(l);let h=c[e.axis],f=0,m=s?this.applyStack(e,c,s):h,g,y;m!==h&&(f=m-h,m=h),d&&(h=l.barStart,m=l.barEnd-l.barStart,h!==0&&an(h)!==an(l.barEnd)&&(f=0),f+=h);const v=!rt(r)&&!d?r:f;let T=e.getPixelForValue(v);if(this.chart.getDataVisibility(t)?g=e.getPixelForValue(f+m):g=T,y=g-T,Math.abs(y)<o){y=EC(y,e,a)*o,h===a&&(T-=y/2);const k=e.getPixelForDecimal(0),C=e.getPixelForDecimal(1),P=Math.min(k,C),M=Math.max(k,C);T=Math.max(Math.min(T,M),P),g=T+y,s&&!d&&(c._stacks[e.axis]._visualValues[i]=e.getValueForPixel(g)-e.getValueForPixel(T))}if(T===e.getPixelForValue(a)){const k=an(y)*e.getLineWidthForValue(a)/2;T+=k,y-=k}return{size:y,base:T,head:g,center:g+y/2}}_calculateBarIndexPixels(t,e){const s=e.scale,i=this.options,r=i.skipNull,o=Z(i.maxBarThickness,1/0);let a,c;const l=this._getAxisCount();if(e.grouped){const d=r?this._getStackCount(t):e.stackCount,h=i.barThickness==="flex"?xC(t,e,i,d*l):bC(t,e,i,d*l),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,m=this._getAxis().indexOf(Z(f,this.getFirstScaleIdForIndexAxis())),g=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+m;a=h.start+h.chunk*g+h.chunk/2,c=Math.min(o,h.chunk*h.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,i=s.length;let r=0;for(;r<i;++r)this.getParsed(r)[e.axis]!==null&&!s[r].hidden&&s[r].draw(this._ctx)}}N(va,"id","bar"),N(va,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),N(va,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class ba extends He{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,i){const r=super.parsePrimitiveData(t,e,s,i);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+s).radius;return r}parseArrayData(t,e,s,i){const r=super.parseArrayData(t,e,s,i);for(let o=0;o<r.length;o++){const a=e[s+o];r[o]._custom=Z(a[2],this.resolveDataElementOptions(o+s).radius)}return r}parseObjectData(t,e,s,i){const r=super.parseObjectData(t,e,s,i);for(let o=0;o<r.length;o++){const a=e[s+o];r[o]._custom=Z(a&&a.r&&+a.r,this.resolveDataElementOptions(o+s).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),c=r.getLabelForValue(o.y),l=o._custom;return{label:s[t]||"",value:"("+a+", "+c+(l?", "+l:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:l}=this._getSharedOptions(e,i),d=o.axis,h=a.axis;for(let f=e;f<e+s;f++){const m=t[f],g=!r&&this.getParsed(f),y={},v=y[d]=r?o.getPixelForDecimal(.5):o.getPixelForValue(g[d]),T=y[h]=r?a.getBasePixel():a.getPixelForValue(g[h]);y.skip=isNaN(v)||isNaN(T),l&&(y.options=c||this.resolveDataElementOptions(f,m.active?"active":i),r&&(y.options.radius=0)),this.updateElement(m,f,y,i)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let i=super.resolveDataElementOptions(t,e);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const r=i.radius;return e!=="active"&&(i.radius=0),i.radius+=Z(s&&s._custom,r),i}}N(ba,"id","bubble"),N(ba,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),N(ba,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function SC(n,t,e){let s=1,i=1,r=0,o=0;if(t<Rt){const a=n,c=a+t,l=Math.cos(a),d=Math.sin(a),h=Math.cos(c),f=Math.sin(c),m=(C,P,M)=>Qr(C,a,c,!0)?1:Math.max(P,P*e,M,M*e),g=(C,P,M)=>Qr(C,a,c,!0)?-1:Math.min(P,P*e,M,M*e),y=m(0,l,h),v=m(Gt,d,f),T=g(mt,l,h),k=g(mt+Gt,d,f);s=(y-T)/2,i=(v-k)/2,r=-(y+T)/2,o=-(v+k)/2}return{ratioX:s,ratioY:i,offsetX:r,offsetY:o}}class ks extends He{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=s;else{let r=c=>+s[c];if(ct(s[t])){const{key:c="value"}=this._parsing;r=l=>+rs(s[l],c)}let o,a;for(o=t,a=t+e;o<a;++o)i._parsed[o]=r(o)}}_getRotation(){return ze(this.options.rotation-90)}_getCircumference(){return ze(this.options.circumference)}_getRotationExtents(){let t=Rt,e=-Rt;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const i=this.chart.getDatasetMeta(s).controller,r=i._getRotation(),o=i._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,i=this._cachedMeta,r=i.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-o)/2,0),c=Math.min(BS(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:d,rotation:h}=this._getRotationExtents(),{ratioX:f,ratioY:m,offsetX:g,offsetY:y}=SC(h,d,c),v=(s.width-o)/f,T=(s.height-o)/m,k=Math.max(Math.min(v,T)/2,0),C=Jy(this.options.radius,k),P=Math.max(C*c,0),M=(C-P)/this._getVisibleDatasetWeightTotal();this.offsetX=g*C,this.offsetY=y*C,i.total=this.calculateTotal(),this.outerRadius=C-M*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-M*l,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const s=this.options,i=this._cachedMeta,r=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*r/Rt)}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,d=(a.left+a.right)/2,h=(a.top+a.bottom)/2,f=r&&l.animateScale,m=f?0:this.innerRadius,g=f?0:this.outerRadius,{sharedOptions:y,includeOptions:v}=this._getSharedOptions(e,i);let T=this._getRotation(),k;for(k=0;k<e;++k)T+=this._circumference(k,r);for(k=e;k<e+s;++k){const C=this._circumference(k,r),P=t[k],M={x:d+this.offsetX,y:h+this.offsetY,startAngle:T,endAngle:T+C,circumference:C,outerRadius:g,innerRadius:m};v&&(M.options=y||this.resolveDataElementOptions(k,P.active?"active":i)),T+=C,this.updateElement(P,k,M,i)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,i;for(i=0;i<e.length;i++){const r=t._parsed[i];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(i)&&!e[i].hidden&&(s+=Math.abs(r))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?Rt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=yo(e._parsed[t],s.options.locale);return{label:i[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const s=this.chart;let i,r,o,a,c;if(!t){for(i=0,r=s.data.datasets.length;i<r;++i)if(s.isDatasetVisible(i)){o=s.getDatasetMeta(i),t=o.data,a=o.controller;break}}if(!t)return 0;for(i=0,r=t.length;i<r;++i)c=a.resolveDataElementOptions(i),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,i=t.length;s<i;++s){const r=this.resolveDataElementOptions(s);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(Z(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}N(ks,"id","doughnut"),N(ks,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),N(ks,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),N(ks,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,l)=>{const h=t.getDatasetMeta(0).controller.getStyle(l);return{text:c,fillStyle:h.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(l),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:i,pointStyle:s,borderRadius:o&&(a||h.borderRadius),index:l}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class xa extends He{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:i=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=ov(e,i,o);this._drawStart=a,this._drawCount=c,av(e)&&(a=0,c=i.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!r._decimated,s.points=i;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:l},t),this.updateElements(i,a,c,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(e,i),f=o.axis,m=a.axis,{spanGaps:g,segment:y}=this.options,v=Pi(g)?g:Number.POSITIVE_INFINITY,T=this.chart._animationsDisabled||r||i==="none",k=e+s,C=t.length;let P=e>0&&this.getParsed(e-1);for(let M=0;M<C;++M){const D=t[M],w=T?D:{};if(M<e||M>=k){w.skip=!0;continue}const b=this.getParsed(M),x=rt(b[m]),A=w[f]=o.getPixelForValue(b[f],M),S=w[m]=r||x?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,b,c):b[m],M);w.skip=isNaN(A)||isNaN(S)||x,w.stop=M>0&&Math.abs(b[f]-P[f])>v,y&&(w.parsed=b,w.raw=l.data[M]),h&&(w.options=d||this.resolveDataElementOptions(M,D.active?"active":i)),T||this.updateElement(D,M,w,i),P=b}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,i=t.data||[];if(!i.length)return s;const r=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(s,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}N(xa,"id","line"),N(xa,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),N(xa,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Nr extends He{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=yo(e._parsed[t].r,s.options.locale);return{label:i[t]||"",value:r}}parseObjectData(t,e,s,i){return mv.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,i)=>{const r=this.getParsed(i).r;!isNaN(r)&&this.chart.getDataVisibility(i)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,i=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(i/2,0),o=Math.max(s.cutoutPercentage?r/100*s.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,c=o.options.animation,l=this._cachedMeta.rScale,d=l.xCenter,h=l.yCenter,f=l.getIndexAngle(0)-.5*mt;let m=f,g;const y=360/this.countVisibleElements();for(g=0;g<e;++g)m+=this._computeAngle(g,i,y);for(g=e;g<e+s;g++){const v=t[g];let T=m,k=m+this._computeAngle(g,i,y),C=o.getDataVisibility(g)?l.getDistanceFromCenterForValue(this.getParsed(g).r):0;m=k,r&&(c.animateScale&&(C=0),c.animateRotate&&(T=k=f));const P={x:d,y:h,innerRadius:0,outerRadius:C,startAngle:T,endAngle:k,options:this.resolveDataElementOptions(g,v.active?"active":i)};this.updateElement(v,g,P,i)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?ze(this.resolveDataElementOptions(t,e).angle||s):0}}N(Nr,"id","polarArea"),N(Nr,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),N(Nr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:i}}=t.legend.options;return e.labels.map((r,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:i,lineWidth:c.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class bu extends ks{}N(bu,"id","pie"),N(bu,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class wa extends He{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,i){return mv.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta,s=e.dataset,i=e.data||[],r=e.iScale.getLabels();if(s.points=i,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===i.length,options:o};this.updateElement(s,void 0,a,t)}this.updateElements(i,0,i.length,t)}updateElements(t,e,s,i){const r=this._cachedMeta.rScale,o=i==="reset";for(let a=e;a<e+s;a++){const c=t[a],l=this.resolveDataElementOptions(a,c.active?"active":i),d=r.getPointPositionForValue(a,this.getParsed(a).r),h=o?r.xCenter:d.x,f=o?r.yCenter:d.y,m={x:h,y:f,angle:d.angle,skip:isNaN(h)||isNaN(f),options:l};this.updateElement(c,a,m,i)}}}N(wa,"id","radar"),N(wa,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),N(wa,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Ea extends He{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),c=r.getLabelForValue(o.y);return{label:s[t]||"",value:"("+a+", "+c+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,i=this.chart._animationsDisabled;let{start:r,count:o}=ov(e,s,i);if(this._drawStart=r,this._drawCount=o,av(e)&&(r=0,o=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:c}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=s;const l=this.resolveDatasetElementOptions(t);l.segment=this.options.segment,this.updateElement(a,void 0,{animated:!i,options:l},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,d=this.resolveDataElementOptions(e,i),h=this.getSharedOptions(d),f=this.includeOptions(i,h),m=o.axis,g=a.axis,{spanGaps:y,segment:v}=this.options,T=Pi(y)?y:Number.POSITIVE_INFINITY,k=this.chart._animationsDisabled||r||i==="none";let C=e>0&&this.getParsed(e-1);for(let P=e;P<e+s;++P){const M=t[P],D=this.getParsed(P),w=k?M:{},b=rt(D[g]),x=w[m]=o.getPixelForValue(D[m],P),A=w[g]=r||b?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,D,c):D[g],P);w.skip=isNaN(x)||isNaN(A)||b,w.stop=P>0&&Math.abs(D[m]-C[m])>T,v&&(w.parsed=D,w.raw=l.data[P]),f&&(w.options=h||this.resolveDataElementOptions(P,M.active?"active":i)),k||this.updateElement(M,P,w,i),C=D}this.updateSharedOptions(h,i,d)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let c=e.length-1;c>=0;--c)a=Math.max(a,e[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const s=t.dataset,i=s.options&&s.options.borderWidth||0;if(!e.length)return i;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(i,r,o)/2}}N(Ea,"id","scatter"),N(Ea,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),N(Ea,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var CC=Object.freeze({__proto__:null,BarController:va,BubbleController:ba,DoughnutController:ks,LineController:xa,PieController:bu,PolarAreaController:Nr,RadarController:wa,ScatterController:Ea});function ys(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Zd{constructor(t){N(this,"options");this.options=t||{}}static override(t){Object.assign(Zd.prototype,t)}init(){}formats(){return ys()}parse(){return ys()}format(){return ys()}add(){return ys()}diff(){return ys()}startOf(){return ys()}endOf(){return ys()}}var Av={_date:Zd};function RC(n,t,e,s){const{controller:i,data:r,_sorted:o}=n,a=i._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const l=a._reversePixels?ZS:Tn;if(s){if(i._sharedOptions){const d=r[0],h=typeof d.getRange=="function"&&d.getRange(t);if(h){const f=l(r,t,e-h),m=l(r,t,e+h);return{lo:f.lo,hi:m.hi}}}}else{const d=l(r,t,e);if(c){const{vScale:h}=i._cachedMeta,{_parsed:f}=n,m=f.slice(0,d.lo+1).reverse().findIndex(y=>!rt(y[h.axis]));d.lo-=Math.max(0,m);const g=f.slice(d.hi).findIndex(y=>!rt(y[h.axis]));d.hi+=Math.max(0,g)}return d}}return{lo:0,hi:r.length-1}}function Lc(n,t,e,s,i){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,c=r.length;a<c;++a){const{index:l,data:d}=r[a],{lo:h,hi:f}=RC(r[a],t,o,i);for(let m=h;m<=f;++m){const g=d[m];g.skip||s(g,l,m)}}}function PC(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(s,i){const r=t?Math.abs(s.x-i.x):0,o=e?Math.abs(s.y-i.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Pl(n,t,e,s,i){const r=[];return!i&&!n.isPointInArea(t)||Lc(n,e,t,function(a,c,l){!i&&!In(a,n.chartArea,0)||a.inRange(t.x,t.y,s)&&r.push({element:a,datasetIndex:c,index:l})},!0),r}function DC(n,t,e,s){let i=[];function r(o,a,c){const{startAngle:l,endAngle:d}=o.getProps(["startAngle","endAngle"],s),{angle:h}=ev(o,{x:t.x,y:t.y});Qr(h,l,d)&&i.push({element:o,datasetIndex:a,index:c})}return Lc(n,e,t,r),i}function MC(n,t,e,s,i,r){let o=[];const a=PC(e);let c=Number.POSITIVE_INFINITY;function l(d,h,f){const m=d.inRange(t.x,t.y,i);if(s&&!m)return;const g=d.getCenterPoint(i);if(!(!!r||n.isPointInArea(g))&&!m)return;const v=a(t,g);v<c?(o=[{element:d,datasetIndex:h,index:f}],c=v):v===c&&o.push({element:d,datasetIndex:h,index:f})}return Lc(n,e,t,l),o}function Dl(n,t,e,s,i,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!s?DC(n,t,e,i):MC(n,t,e,s,i,r)}function cm(n,t,e,s,i){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return Lc(n,e,t,(c,l,d)=>{c[o]&&c[o](t[e],i)&&(r.push({element:c,datasetIndex:l,index:d}),a=a||c.inRange(t.x,t.y,i))}),s&&!a?[]:r}var OC={modes:{index(n,t,e,s){const i=ws(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Pl(n,i,r,s,o):Dl(n,i,r,!1,s,o),c=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(l=>{const d=a[0].index,h=l.data[d];h&&!h.skip&&c.push({element:h,datasetIndex:l.index,index:d})}),c):[]},dataset(n,t,e,s){const i=ws(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Pl(n,i,r,s,o):Dl(n,i,r,!1,s,o);if(a.length>0){const c=a[0].datasetIndex,l=n.getDatasetMeta(c).data;a=[];for(let d=0;d<l.length;++d)a.push({element:l[d],datasetIndex:c,index:d})}return a},point(n,t,e,s){const i=ws(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Pl(n,i,r,s,o)},nearest(n,t,e,s){const i=ws(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Dl(n,i,r,e.intersect,s,o)},x(n,t,e,s){const i=ws(t,n);return cm(n,i,"x",e.intersect,s)},y(n,t,e,s){const i=ws(t,n);return cm(n,i,"y",e.intersect,s)}}};const kv=["left","top","right","bottom"];function ir(n,t){return n.filter(e=>e.pos===t)}function lm(n,t){return n.filter(e=>kv.indexOf(e.pos)===-1&&e.box.axis===t)}function rr(n,t){return n.sort((e,s)=>{const i=t?s:e,r=t?e:s;return i.weight===r.weight?i.index-r.index:i.weight-r.weight})}function NC(n){const t=[];let e,s,i,r,o,a;for(e=0,s=(n||[]).length;e<s;++e)i=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=i,t.push({index:e,box:i,pos:r,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&r+o,stackWeight:a});return t}function LC(n){const t={};for(const e of n){const{stack:s,pos:i,stackWeight:r}=e;if(!s||!kv.includes(i))continue;const o=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function VC(n,t){const e=LC(n),{vBoxMaxWidth:s,hBoxMaxHeight:i}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:c}=a.box,l=e[a.stack],d=l&&a.stackWeight/l.weight;a.horizontal?(a.width=d?d*s:c&&t.availableWidth,a.height=i):(a.width=s,a.height=d?d*i:c&&t.availableHeight)}return e}function FC(n){const t=NC(n),e=rr(t.filter(l=>l.box.fullSize),!0),s=rr(ir(t,"left"),!0),i=rr(ir(t,"right")),r=rr(ir(t,"top"),!0),o=rr(ir(t,"bottom")),a=lm(t,"x"),c=lm(t,"y");return{fullSize:e,leftAndTop:s.concat(r),rightAndBottom:i.concat(c).concat(o).concat(a),chartArea:ir(t,"chartArea"),vertical:s.concat(i).concat(c),horizontal:r.concat(o).concat(a)}}function um(n,t,e,s){return Math.max(n[e],t[e])+Math.max(n[s],t[s])}function Sv(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function $C(n,t,e,s){const{pos:i,box:r}=e,o=n.maxPadding;if(!ct(i)){e.size&&(n[i]-=e.size);const h=s[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?r.height:r.width),e.size=h.size/h.count,n[i]+=e.size}r.getPadding&&Sv(o,r.getPadding());const a=Math.max(0,t.outerWidth-um(o,n,"left","right")),c=Math.max(0,t.outerHeight-um(o,n,"top","bottom")),l=a!==n.w,d=c!==n.h;return n.w=a,n.h=c,e.horizontal?{same:l,other:d}:{same:d,other:l}}function BC(n){const t=n.maxPadding;function e(s){const i=Math.max(t[s]-n[s],0);return n[s]+=i,i}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function UC(n,t){const e=t.maxPadding;function s(i){const r={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return s(n?["left","right"]:["top","bottom"])}function xr(n,t,e,s){const i=[];let r,o,a,c,l,d;for(r=0,o=n.length,l=0;r<o;++r){a=n[r],c=a.box,c.update(a.width||t.w,a.height||t.h,UC(a.horizontal,t));const{same:h,other:f}=$C(t,e,a,s);l|=h&&i.length,d=d||f,c.fullSize||i.push(a)}return l&&xr(i,t,e,s)||d}function ta(n,t,e,s,i){n.top=e,n.left=t,n.right=t+s,n.bottom=e+i,n.width=s,n.height=i}function dm(n,t,e,s){const i=e.padding;let{x:r,y:o}=t;for(const a of n){const c=a.box,l=s[a.stack]||{placed:0,weight:1},d=a.stackWeight/l.weight||1;if(a.horizontal){const h=t.w*d,f=l.size||c.height;Kr(l.start)&&(o=l.start),c.fullSize?ta(c,i.left,o,e.outerWidth-i.right-i.left,f):ta(c,t.left+l.placed,o,h,f),l.start=o,l.placed+=h,o=c.bottom}else{const h=t.h*d,f=l.size||c.width;Kr(l.start)&&(r=l.start),c.fullSize?ta(c,r,i.top,f,e.outerHeight-i.bottom-i.top):ta(c,r,t.top+l.placed,f,h),l.start=r,l.placed+=h,r=c.right}}t.x=r,t.y=o}var ve={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,s){if(!n)return;const i=xe(n.options.layout.padding),r=Math.max(t-i.width,0),o=Math.max(e-i.height,0),a=FC(n.boxes),c=a.vertical,l=a.horizontal;vt(n.boxes,y=>{typeof y.beforeLayout=="function"&&y.beforeLayout()});const d=c.reduce((y,v)=>v.box.options&&v.box.options.display===!1?y:y+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:i,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/d,hBoxMaxHeight:o/2}),f=Object.assign({},i);Sv(f,xe(s));const m=Object.assign({maxPadding:f,w:r,h:o,x:i.left,y:i.top},i),g=VC(c.concat(l),h);xr(a.fullSize,m,h,g),xr(c,m,h,g),xr(l,m,h,g)&&xr(c,m,h,g),BC(m),dm(a.leftAndTop,m,h,g),m.x+=m.w,m.y+=m.h,dm(a.rightAndBottom,m,h,g),n.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},vt(a.chartArea,y=>{const v=y.box;Object.assign(v,n.chartArea),v.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class Cv{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,i){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):s)}}isAttached(t){return!0}updateConfig(t){}}class jC extends Cv{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Ta="$chartjs",zC={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},hm=n=>n===null||n==="";function HC(n,t){const e=n.style,s=n.getAttribute("height"),i=n.getAttribute("width");if(n[Ta]={initial:{height:s,width:i,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",hm(i)){const r=Kp(n,"width");r!==void 0&&(n.width=r)}if(hm(s))if(n.style.height==="")n.height=n.width/(t||2);else{const r=Kp(n,"height");r!==void 0&&(n.height=r)}return n}const Rv=W1?{passive:!0}:!1;function qC(n,t,e){n&&n.addEventListener(t,e,Rv)}function WC(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,Rv)}function GC(n,t){const e=zC[n.type]||n.type,{x:s,y:i}=ws(n,t);return{type:e,chart:t,native:n,x:s!==void 0?s:null,y:i!==void 0?i:null}}function tc(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function YC(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||tc(a.addedNodes,s),o=o&&!tc(a.removedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}function KC(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||tc(a.removedNodes,s),o=o&&!tc(a.addedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}const Jr=new Map;let fm=0;function Pv(){const n=window.devicePixelRatio;n!==fm&&(fm=n,Jr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function QC(n,t){Jr.size||window.addEventListener("resize",Pv),Jr.set(n,t)}function XC(n){Jr.delete(n),Jr.size||window.removeEventListener("resize",Pv)}function JC(n,t,e){const s=n.canvas,i=s&&Jd(s);if(!i)return;const r=rv((a,c)=>{const l=i.clientWidth;e(a,c),l<i.clientWidth&&e()},window),o=new ResizeObserver(a=>{const c=a[0],l=c.contentRect.width,d=c.contentRect.height;l===0&&d===0||r(l,d)});return o.observe(i),QC(n,r),o}function Ml(n,t,e){e&&e.disconnect(),t==="resize"&&XC(n)}function ZC(n,t,e){const s=n.canvas,i=rv(r=>{n.ctx!==null&&e(GC(r,n))},n);return qC(s,t,i),i}class tR extends Cv{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(HC(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[Ta])return!1;const s=e[Ta].initial;["height","width"].forEach(r=>{const o=s[r];rt(o)?e.removeAttribute(r):e.setAttribute(r,o)});const i=s.style||{};return Object.keys(i).forEach(r=>{e.style[r]=i[r]}),e.width=e.width,delete e[Ta],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const i=t.$proxies||(t.$proxies={}),o={attach:YC,detach:KC,resize:JC}[e]||ZC;i[e]=o(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),i=s[e];if(!i)return;({attach:Ml,detach:Ml,resize:Ml}[e]||WC)(t,e,i),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,i){return q1(t,e,s,i)}isAttached(t){const e=t&&Jd(t);return!!(e&&e.isConnected)}}function eR(n){return!Xd()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?jC:tR}class Ye{constructor(){N(this,"x");N(this,"y");N(this,"active",!1);N(this,"options");N(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return Pi(this.x)&&Pi(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const i={};return t.forEach(r=>{i[r]=s[r]&&s[r].active()?s[r]._to:this[r]}),i}}N(Ye,"defaults",{}),N(Ye,"defaultRoutes");function nR(n,t){const e=n.options.ticks,s=sR(n),i=Math.min(e.maxTicksLimit||s,s),r=e.major.enabled?rR(t):[],o=r.length,a=r[0],c=r[o-1],l=[];if(o>i)return oR(t,l,r,o/i),l;const d=iR(r,t,i);if(o>0){let h,f;const m=o>1?Math.round((c-a)/(o-1)):null;for(ea(t,l,d,rt(m)?0:a-m,a),h=0,f=o-1;h<f;h++)ea(t,l,d,r[h],r[h+1]);return ea(t,l,d,c,rt(m)?t.length:c+m),l}return ea(t,l,d),l}function sR(n){const t=n.options.offset,e=n._tickSize(),s=n._length/e+(t?0:1),i=n._maxLength/e;return Math.floor(Math.min(s,i))}function iR(n,t,e){const s=aR(n),i=t.length/e;if(!s)return Math.max(i,1);const r=YS(s);for(let o=0,a=r.length-1;o<a;o++){const c=r[o];if(c>i)return c}return Math.max(i,1)}function rR(n){const t=[];let e,s;for(e=0,s=n.length;e<s;e++)n[e].major&&t.push(e);return t}function oR(n,t,e,s){let i=0,r=e[0],o;for(s=Math.ceil(s),o=0;o<n.length;o++)o===r&&(t.push(n[o]),i++,r=e[i*s])}function ea(n,t,e,s,i){const r=Z(s,0),o=Math.min(Z(i,n.length),n.length);let a=0,c,l,d;for(e=Math.ceil(e),i&&(c=i-s,e=c/Math.floor(c/e)),d=r;d<0;)a++,d=Math.round(r+a*e);for(l=Math.max(r,0);l<o;l++)l===d&&(t.push(n[l]),a++,d=Math.round(r+a*e))}function aR(n){const t=n.length;let e,s;if(t<2)return!1;for(s=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==s)return!1;return s}const cR=n=>n==="left"?"right":n==="right"?"left":n,pm=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,mm=(n,t)=>Math.min(t||n,n);function gm(n,t){const e=[],s=n.length/t,i=n.length;let r=0;for(;r<i;r+=s)e.push(n[Math.floor(r)]);return e}function lR(n,t,e){const s=n.ticks.length,i=Math.min(t,s-1),r=n._startPixel,o=n._endPixel,a=1e-6;let c=n.getPixelForTick(i),l;if(!(e&&(s===1?l=Math.max(c-r,o-c):t===0?l=(n.getPixelForTick(1)-c)/2:l=(c-n.getPixelForTick(i-1))/2,c+=i<t?l:-l,c<r-a||c>o+a)))return c}function uR(n,t){vt(n,e=>{const s=e.gc,i=s.length/2;let r;if(i>t){for(r=0;r<i;++r)delete e.data[s[r]];s.splice(0,i)}})}function or(n){return n.drawTicks?n.tickLength:0}function _m(n,t){if(!n.display)return 0;const e=Zt(n.font,t),s=xe(n.padding);return(Dt(n.text)?n.text.length:1)*e.lineHeight+s.height}function dR(n,t){return us(n,{scale:t,type:"scale"})}function hR(n,t,e){return us(n,{tick:e,index:t,type:"tick"})}function fR(n,t,e){let s=qd(n);return(e&&t!=="right"||!e&&t==="right")&&(s=cR(s)),s}function pR(n,t,e,s){const{top:i,left:r,bottom:o,right:a,chart:c}=n,{chartArea:l,scales:d}=c;let h=0,f,m,g;const y=o-i,v=a-r;if(n.isHorizontal()){if(m=pe(s,r,a),ct(e)){const T=Object.keys(e)[0],k=e[T];g=d[T].getPixelForValue(k)+y-t}else e==="center"?g=(l.bottom+l.top)/2+y-t:g=pm(n,e,t);f=a-r}else{if(ct(e)){const T=Object.keys(e)[0],k=e[T];m=d[T].getPixelForValue(k)-v+t}else e==="center"?m=(l.left+l.right)/2-v+t:m=pm(n,e,t);g=pe(s,o,i),h=e==="left"?-Gt:Gt}return{titleX:m,titleY:g,maxWidth:f,rotation:h}}class Ys extends Ye{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:i}=this;return t=Me(t,Number.POSITIVE_INFINITY),e=Me(e,Number.NEGATIVE_INFINITY),s=Me(s,Number.POSITIVE_INFINITY),i=Me(i,Number.NEGATIVE_INFINITY),{min:Me(t,s),max:Me(e,i),minDefined:jt(t),maxDefined:jt(e)}}getMinMax(t){let{min:e,max:s,minDefined:i,maxDefined:r}=this.getUserBounds(),o;if(i&&r)return{min:e,max:s};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,t),i||(e=Math.min(e,o.min)),r||(s=Math.max(s,o.max));return e=r&&e>s?s:e,s=i&&e>s?e:s,{min:Me(e,Me(s,e)),max:Me(s,Me(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){At(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:i,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=E1(this,r,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?gm(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=nR(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){At(this.options.afterUpdate,[this])}beforeSetDimensions(){At(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){At(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),At(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){At(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,i,r;for(s=0,i=t.length;s<i;s++)r=t[s],r.label=At(e.callback,[r.value,s,t],this)}afterTickToLabelConversion(){At(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){At(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=mm(this.ticks.length,t.ticks.maxTicksLimit),i=e.minRotation||0,r=e.maxRotation;let o=i,a,c,l;if(!this._isVisible()||!e.display||i>=r||s<=1||!this.isHorizontal()){this.labelRotation=i;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,m=ee(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/s:m/(s-1),h+6>a&&(a=m/(s-(t.offset?.5:1)),c=this.maxHeight-or(t.grid)-e.padding-_m(t.title,this.chart.options.font),l=Math.sqrt(h*h+f*f),o=zd(Math.min(Math.asin(ee((d.highest.height+6)/a,-1,1)),Math.asin(ee(c/l,-1,1))-Math.asin(ee(f/l,-1,1)))),o=Math.max(i,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){At(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){At(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:i,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=_m(i,e.options.font);if(a?(t.width=this.maxWidth,t.height=or(r)+c):(t.height=this.maxHeight,t.width=or(r)+c),s.display&&this.ticks.length){const{first:l,last:d,widest:h,highest:f}=this._getLabelSizes(),m=s.padding*2,g=ze(this.labelRotation),y=Math.cos(g),v=Math.sin(g);if(a){const T=s.mirror?0:v*h.width+y*f.height;t.height=Math.min(this.maxHeight,t.height+T+m)}else{const T=s.mirror?0:y*h.width+v*f.height;t.width=Math.min(this.maxWidth,t.width+T+m)}this._calculatePadding(l,d,v,y)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,i){const{ticks:{align:r,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,m=0;c?l?(f=i*t.width,m=s*e.height):(f=s*t.height,m=i*e.width):r==="start"?m=e.width:r==="end"?f=t.width:r!=="inner"&&(f=t.width/2,m=e.width/2),this.paddingLeft=Math.max((f-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((m-h+o)*this.width/(this.width-h),0)}else{let d=e.height/2,h=t.height/2;r==="start"?(d=0,h=t.height):r==="end"&&(d=e.height,h=0),this.paddingTop=d+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){At(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)rt(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=gm(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:i,_longestTextCache:r}=this,o=[],a=[],c=Math.floor(e/mm(e,s));let l=0,d=0,h,f,m,g,y,v,T,k,C,P,M;for(h=0;h<e;h+=c){if(g=t[h].label,y=this._resolveTickFontOptions(h),i.font=v=y.string,T=r[v]=r[v]||{data:{},gc:[]},k=y.lineHeight,C=P=0,!rt(g)&&!Dt(g))C=Ja(i,T.data,T.gc,C,g),P=k;else if(Dt(g))for(f=0,m=g.length;f<m;++f)M=g[f],!rt(M)&&!Dt(M)&&(C=Ja(i,T.data,T.gc,C,M),P+=k);o.push(C),a.push(P),l=Math.max(C,l),d=Math.max(P,d)}uR(r,e);const D=o.indexOf(l),w=a.indexOf(d),b=x=>({width:o[x]||0,height:a[x]||0});return{first:b(0),last:b(e-1),widest:b(D),highest:b(w),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return JS(this._alignToPixels?_s(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=hR(this.getContext(),t,s))}return this.$context||(this.$context=dR(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=ze(this.labelRotation),s=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,c=r?r.highest.height+o:0;return this.isHorizontal()?c*s>a*i?a/s:c/i:c*i<a*s?c/s:a/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,i=this.options,{grid:r,position:o,border:a}=i,c=r.offset,l=this.isHorizontal(),h=this.ticks.length+(c?1:0),f=or(r),m=[],g=a.setContext(this.getContext()),y=g.display?g.width:0,v=y/2,T=function(X){return _s(s,X,y)};let k,C,P,M,D,w,b,x,A,S,R,I;if(o==="top")k=T(this.bottom),w=this.bottom-f,x=k-v,S=T(t.top)+v,I=t.bottom;else if(o==="bottom")k=T(this.top),S=t.top,I=T(t.bottom)-v,w=k+v,x=this.top+f;else if(o==="left")k=T(this.right),D=this.right-f,b=k-v,A=T(t.left)+v,R=t.right;else if(o==="right")k=T(this.left),A=t.left,R=T(t.right)-v,D=k+v,b=this.left+f;else if(e==="x"){if(o==="center")k=T((t.top+t.bottom)/2+.5);else if(ct(o)){const X=Object.keys(o)[0],nt=o[X];k=T(this.chart.scales[X].getPixelForValue(nt))}S=t.top,I=t.bottom,w=k+v,x=w+f}else if(e==="y"){if(o==="center")k=T((t.left+t.right)/2);else if(ct(o)){const X=Object.keys(o)[0],nt=o[X];k=T(this.chart.scales[X].getPixelForValue(nt))}D=k-v,b=D-f,A=t.left,R=t.right}const U=Z(i.ticks.maxTicksLimit,h),H=Math.max(1,Math.ceil(h/U));for(C=0;C<h;C+=H){const X=this.getContext(C),nt=r.setContext(X),ut=a.setContext(X),st=nt.lineWidth,Ot=nt.color,Bt=ut.dash||[],kt=ut.dashOffset,Y=nt.tickWidth,Et=nt.tickColor,we=nt.tickBorderDash||[],Pe=nt.tickBorderDashOffset;P=lR(this,C,c),P!==void 0&&(M=_s(s,P,st),l?D=b=A=R=M:w=x=S=I=M,m.push({tx1:D,ty1:w,tx2:b,ty2:x,x1:A,y1:S,x2:R,y2:I,width:st,color:Ot,borderDash:Bt,borderDashOffset:kt,tickWidth:Y,tickColor:Et,tickBorderDash:we,tickBorderDashOffset:Pe}))}return this._ticksLength=h,this._borderValue=k,m}_computeLabelItems(t){const e=this.axis,s=this.options,{position:i,ticks:r}=s,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:d,mirror:h}=r,f=or(s.grid),m=f+d,g=h?-d:m,y=-ze(this.labelRotation),v=[];let T,k,C,P,M,D,w,b,x,A,S,R,I="middle";if(i==="top")D=this.bottom-g,w=this._getXAxisLabelAlignment();else if(i==="bottom")D=this.top+g,w=this._getXAxisLabelAlignment();else if(i==="left"){const H=this._getYAxisLabelAlignment(f);w=H.textAlign,M=H.x}else if(i==="right"){const H=this._getYAxisLabelAlignment(f);w=H.textAlign,M=H.x}else if(e==="x"){if(i==="center")D=(t.top+t.bottom)/2+m;else if(ct(i)){const H=Object.keys(i)[0],X=i[H];D=this.chart.scales[H].getPixelForValue(X)+m}w=this._getXAxisLabelAlignment()}else if(e==="y"){if(i==="center")M=(t.left+t.right)/2-m;else if(ct(i)){const H=Object.keys(i)[0],X=i[H];M=this.chart.scales[H].getPixelForValue(X)}w=this._getYAxisLabelAlignment(f).textAlign}e==="y"&&(c==="start"?I="top":c==="end"&&(I="bottom"));const U=this._getLabelSizes();for(T=0,k=a.length;T<k;++T){C=a[T],P=C.label;const H=r.setContext(this.getContext(T));b=this.getPixelForTick(T)+r.labelOffset,x=this._resolveTickFontOptions(T),A=x.lineHeight,S=Dt(P)?P.length:1;const X=S/2,nt=H.color,ut=H.textStrokeColor,st=H.textStrokeWidth;let Ot=w;o?(M=b,w==="inner"&&(T===k-1?Ot=this.options.reverse?"left":"right":T===0?Ot=this.options.reverse?"right":"left":Ot="center"),i==="top"?l==="near"||y!==0?R=-S*A+A/2:l==="center"?R=-U.highest.height/2-X*A+A:R=-U.highest.height+A/2:l==="near"||y!==0?R=A/2:l==="center"?R=U.highest.height/2-X*A:R=U.highest.height-S*A,h&&(R*=-1),y!==0&&!H.showLabelBackdrop&&(M+=A/2*Math.sin(y))):(D=b,R=(1-S)*A/2);let Bt;if(H.showLabelBackdrop){const kt=xe(H.backdropPadding),Y=U.heights[T],Et=U.widths[T];let we=R-kt.top,Pe=0-kt.left;switch(I){case"middle":we-=Y/2;break;case"bottom":we-=Y;break}switch(w){case"center":Pe-=Et/2;break;case"right":Pe-=Et;break;case"inner":T===k-1?Pe-=Et:T>0&&(Pe-=Et/2);break}Bt={left:Pe,top:we,width:Et+kt.width,height:Y+kt.height,color:H.backdropColor}}v.push({label:P,font:x,textOffset:R,options:{rotation:y,color:nt,strokeColor:ut,strokeWidth:st,textAlign:Ot,textBaseline:I,translation:[M,D],backdrop:Bt}})}return v}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-ze(this.labelRotation))return t==="top"?"left":"right";let i="center";return e.align==="start"?i="left":e.align==="end"?i="right":e.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:i,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,c=o.widest.width;let l,d;return e==="left"?i?(d=this.right+r,s==="near"?l="left":s==="center"?(l="center",d+=c/2):(l="right",d+=c)):(d=this.right-a,s==="near"?l="right":s==="center"?(l="center",d-=c/2):(l="left",d=this.left)):e==="right"?i?(d=this.left+r,s==="near"?l="right":s==="center"?(l="center",d-=c/2):(l="left",d-=c)):(d=this.left+a,s==="near"?l="left":s==="center"?(l="center",d+=c/2):(l="right",d=this.right)):l="right",{textAlign:l,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:i,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,i,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex(r=>r.value===t);return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(c,l,d)=>{!d.width||!d.color||(s.save(),s.lineWidth=d.width,s.strokeStyle=d.color,s.setLineDash(d.borderDash||[]),s.lineDashOffset=d.borderDashOffset,s.beginPath(),s.moveTo(c.x,c.y),s.lineTo(l.x,l.y),s.stroke(),s.restore())};if(e.display)for(r=0,o=i.length;r<o;++r){const c=i[r];e.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:i}}=this,r=s.setContext(this.getContext()),o=s.display?r.width:0;if(!o)return;const a=i.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,d,h,f;this.isHorizontal()?(l=_s(t,this.left,o)-o/2,d=_s(t,this.right,a)+a/2,h=f=c):(h=_s(t,this.top,o)-o/2,f=_s(t,this.bottom,a)+a/2,l=d=c),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(l,h),e.lineTo(d,f),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,i=this._computeLabelArea();i&&Mc(s,i);const r=this.getLabelItems(t);for(const o of r){const a=o.options,c=o.font,l=o.label,d=o.textOffset;js(s,l,0,d,c,a)}i&&Oc(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:i}}=this;if(!s.display)return;const r=Zt(s.font),o=xe(s.padding),a=s.align;let c=r.lineHeight/2;e==="bottom"||e==="center"||ct(e)?(c+=o.bottom,Dt(s.text)&&(c+=r.lineHeight*(s.text.length-1))):c+=o.top;const{titleX:l,titleY:d,maxWidth:h,rotation:f}=pR(this,c,e,a);js(t,s.text,0,0,r,{color:s.color,maxWidth:h,rotation:f,textAlign:fR(a,e,i),textBaseline:"middle",translation:[l,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=Z(t.grid&&t.grid.z,-1),i=Z(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Ys.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:s,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",i=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[s]===this.id&&(!t||a.type===t)&&i.push(a)}return i}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Zt(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class na{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;_R(e)&&(s=this.register(e));const i=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in i||(i[r]=t,mR(t,o,s),this.override&&Mt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,i=this.scope;s in e&&delete e[s],i&&s in Mt[i]&&(delete Mt[i][s],this.override&&delete Us[s])}}function mR(n,t,e){const s=Yr(Object.create(null),[e?Mt.get(e):{},Mt.get(t),n.defaults]);Mt.set(t,s),n.defaultRoutes&&gR(t,n.defaultRoutes),n.descriptors&&Mt.describe(t,n.descriptors)}function gR(n,t){Object.keys(t).forEach(e=>{const s=e.split("."),i=s.pop(),r=[n].concat(s).join("."),o=t[e].split("."),a=o.pop(),c=o.join(".");Mt.route(r,i,c,a)})}function _R(n){return"id"in n&&"defaults"in n}class yR{constructor(){this.controllers=new na(He,"datasets",!0),this.elements=new na(Ye,"elements"),this.plugins=new na(Object,"plugins"),this.scales=new na(Ys,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(i=>{const r=s||this._getRegistryForType(i);s||r.isForType(i)||r===this.plugins&&i.id?this._exec(t,r,i):vt(i,o=>{const a=s||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,s){const i=jd(t);At(s["before"+i],[],s),e[t](s),At(s["after"+i],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const i=e.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return i}}var Xe=new yR;class vR{constructor(){this._init=void 0}notify(t,e,s,i){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=i?this._descriptors(t).filter(i):this._descriptors(t),o=this._notify(r,t,e,s);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,s,i){i=i||{};for(const r of t){const o=r.plugin,a=o[s],c=[e,i,r.options];if(At(a,c,o)===!1&&i.cancelable)return!1}return!0}invalidate(){rt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,i=Z(s.options&&s.options.plugins,{}),r=bR(s);return i===!1&&!e?[]:wR(t,r,i,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,i=(r,o)=>r.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(i(e,s),t,"stop"),this._notify(i(s,e),t,"start")}}function bR(n){const t={},e=[],s=Object.keys(Xe.plugins.items);for(let r=0;r<s.length;r++)e.push(Xe.getPlugin(s[r]));const i=n.plugins||[];for(let r=0;r<i.length;r++){const o=i[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function xR(n,t){return!t&&n===!1?null:n===!0?{}:n}function wR(n,{plugins:t,localIds:e},s,i){const r=[],o=n.getContext();for(const a of t){const c=a.id,l=xR(s[c],i);l!==null&&r.push({plugin:a,options:ER(n.config,{plugin:a,local:e[c]},l,o)})}return r}function ER(n,{plugin:t,local:e},s,i){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(s,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function xu(n,t){const e=Mt.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function TR(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function IR(n,t){return n===t?"_index_":"_value_"}function ym(n){if(n==="x"||n==="y"||n==="r")return n}function AR(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function wu(n,...t){if(ym(n))return n;for(const e of t){const s=e.axis||AR(e.position)||n.length>1&&ym(n[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function vm(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function kR(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===n||s.yAxisID===n);if(e.length)return vm(n,"x",e[0])||vm(n,"y",e[0])}return{}}function SR(n,t){const e=Us[n.type]||{scales:{}},s=t.scales||{},i=xu(n.type,t),r=Object.create(null);return Object.keys(s).forEach(o=>{const a=s[o];if(!ct(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=wu(o,a,kR(o,n),Mt.scales[a.type]),l=IR(c,i),d=e.scales||{};r[o]=Pr(Object.create(null),[{axis:c},a,d[c],d[l]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,c=o.indexAxis||xu(a,t),d=(Us[a]||{}).scales||{};Object.keys(d).forEach(h=>{const f=TR(h,c),m=o[f+"AxisID"]||f;r[m]=r[m]||Object.create(null),Pr(r[m],[{axis:f},s[m],d[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];Pr(a,[Mt.scales[a.type],Mt.scale])}),r}function Dv(n){const t=n.options||(n.options={});t.plugins=Z(t.plugins,{}),t.scales=SR(n,t)}function Mv(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function CR(n){return n=n||{},n.data=Mv(n.data),Dv(n),n}const bm=new Map,Ov=new Set;function sa(n,t){let e=bm.get(n);return e||(e=t(),bm.set(n,e),Ov.add(e)),e}const ar=(n,t,e)=>{const s=rs(t,e);s!==void 0&&n.add(s)};class RR{constructor(t){this._config=CR(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Mv(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Dv(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return sa(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return sa(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return sa(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return sa(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let i=s.get(t);return(!i||e)&&(i=new Map,s.set(t,i)),i}getOptionScopes(t,e,s){const{options:i,type:r}=this,o=this._cachedScopes(t,s),a=o.get(e);if(a)return a;const c=new Set;e.forEach(d=>{t&&(c.add(t),d.forEach(h=>ar(c,t,h))),d.forEach(h=>ar(c,i,h)),d.forEach(h=>ar(c,Us[r]||{},h)),d.forEach(h=>ar(c,Mt,h)),d.forEach(h=>ar(c,yu,h))});const l=Array.from(c);return l.length===0&&l.push(Object.create(null)),Ov.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,Us[e]||{},Mt.datasets[e]||{},{type:e},Mt,yu]}resolveNamedOptions(t,e,s,i=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=xm(this._resolverCache,t,i);let c=o;if(DR(o,e)){r.$shared=!1,s=os(s)?s():s;const l=this.createResolver(t,s,a);c=Di(o,s,l)}for(const l of e)r[l]=c[l];return r}createResolver(t,e,s=[""],i){const{resolver:r}=xm(this._resolverCache,t,s);return ct(e)?Di(r,e,void 0,i):r}}function xm(n,t,e){let s=n.get(t);s||(s=new Map,n.set(t,s));const i=e.join();let r=s.get(i);return r||(r={resolver:Yd(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},s.set(i,r)),r}const PR=n=>ct(n)&&Object.getOwnPropertyNames(n).some(t=>os(n[t]));function DR(n,t){const{isScriptable:e,isIndexable:s}=dv(n);for(const i of t){const r=e(i),o=s(i),a=(o||r)&&n[i];if(r&&(os(a)||PR(a))||o&&Dt(a))return!0}return!1}var MR="4.5.1";const OR=["top","bottom","left","right","chartArea"];function wm(n,t){return n==="top"||n==="bottom"||OR.indexOf(n)===-1&&t==="x"}function Em(n,t){return function(e,s){return e[n]===s[n]?e[t]-s[t]:e[n]-s[n]}}function Tm(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),At(e&&e.onComplete,[n],t)}function NR(n){const t=n.chart,e=t.options.animation;At(e&&e.onProgress,[n],t)}function Nv(n){return Xd()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const Ia={},Im=n=>{const t=Nv(n);return Object.values(Ia).filter(e=>e.canvas===t).pop()};function LR(n,t,e){const s=Object.keys(n);for(const i of s){const r=+i;if(r>=t){const o=n[i];delete n[i],(e>0||r>t)&&(n[r+e]=o)}}}function VR(n,t,e,s){return!e||n.type==="mouseout"?null:s?t:n}class ht{static register(...t){Xe.add(...t),Am()}static unregister(...t){Xe.remove(...t),Am()}constructor(t,e){const s=this.config=new RR(e),i=Nv(t),r=Im(i);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||eR(i)),this.platform.updateConfig(s);const a=this.platform.acquireContext(i,o.aspectRatio),c=a&&a.canvas,l=c&&c.height,d=c&&c.width;if(this.id=$S(),this.ctx=a,this.canvas=c,this.width=d,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new vR,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=n1(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],Ia[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}gn.listen(this,"complete",Tm),gn.listen(this,"progress",NR),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:i,_aspectRatio:r}=this;return rt(t)?e&&r?r:i?s/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Xe}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Yp(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return qp(this.canvas,this.ctx),this}stop(){return gn.stop(this),this}resize(t,e){gn.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,i=this.canvas,r=s.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,t,e,r),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Yp(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),At(s.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};vt(e,(s,i)=>{s.id=i})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,i=Object.keys(s).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],c=wu(o,a),l=c==="r",d=c==="x";return{options:a,dposition:l?"chartArea":d?"bottom":"left",dtype:l?"radialLinear":d?"category":"linear"}}))),vt(r,o=>{const a=o.options,c=a.id,l=wu(c,a),d=Z(a.type,o.dtype);(a.position===void 0||wm(a.position,l)!==wm(o.dposition))&&(a.position=o.dposition),i[c]=!0;let h=null;if(c in s&&s[c].type===d)h=s[c];else{const f=Xe.getScale(d);h=new f({id:c,type:d,ctx:this.ctx,chart:this}),s[h.id]=h}h.init(a,t)}),vt(i,(o,a)=>{o||delete s[a]}),vt(s,o=>{ve.configure(this,o,o.options),ve.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((i,r)=>i.index-r.index),s>e){for(let i=e;i<s;++i)this._destroyDatasetMeta(i);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(Em("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,i)=>{e.filter(r=>r===s._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,i;for(this._removeUnreferencedMetasets(),s=0,i=e.length;s<i;s++){const r=e[s];let o=this.getDatasetMeta(s);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(s),o=this.getDatasetMeta(s)),o.type=a,o.indexAxis=r.indexAxis||xu(a,this.options),o.order=r.order||0,o.index=s,o.label=""+r.label,o.visible=this.isDatasetVisible(s),o.controller)o.controller.updateIndex(s),o.controller.linkScales();else{const c=Xe.getController(a),{datasetElementType:l,dataElementType:d}=Mt.datasets[a];Object.assign(c,{dataElementType:Xe.getElement(d),datasetElementType:l&&Xe.getElement(l)}),o.controller=new c(this,s),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){vt(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,d=this.data.datasets.length;l<d;l++){const{controller:h}=this.getDatasetMeta(l),f=!i&&r.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=s.layout.autoPadding?o:0,this._updateLayout(o),i||vt(r,l=>{l.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Em("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){vt(this.scales,t=>{ve.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Lp(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:i,count:r}of e){const o=s==="_removeElements"?-r:r;LR(t,i,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),i=s(0);for(let r=1;r<e;r++)if(!Lp(i,s(r)))return;return Array.from(i).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ve.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],vt(this.boxes,i=>{s&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,r)=>{i._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,os(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),i={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(s.controller._update(e),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(gn.has(this)?this.attached&&!gn.running(this)&&gn.start(this):(this.draw(),Tm({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let i,r;for(i=0,r=e.length;i<r;++i){const o=e[i];(!t||o.visible)&&s.push(o)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},i=wv(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(i&&Mc(e,i),t.controller.draw(),i&&Oc(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return In(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,i){const r=OC.modes[e];return typeof r=="function"?r(this,t,s,i):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let i=s.filter(r=>r&&r._dataset===e).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(i)),i}getContext(){return this.$context||(this.$context=us(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const i=s?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,i);Kr(e)?(r.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),o.update(r,{visible:s}),this.update(a=>a.datasetIndex===t?i:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),gn.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),qp(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Ia[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},i=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};vt(this.options.events,r=>s(r,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(c,l)=>{e.addEventListener(this,c,l),t[c]=l},i=(c,l)=>{t[c]&&(e.removeEventListener(this,c,l),delete t[c])},r=(c,l)=>{this.canvas&&this.resize(c,l)};let o;const a=()=>{i("attach",a),this.attached=!0,this.resize(),s("resize",r),s("detach",o)};o=()=>{this.attached=!1,i("resize",r),this._stop(),this._resize(0,0),s("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){vt(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},vt(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const i=s?"set":"remove";let r,o,a,c;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+i+"DatasetHoverStyle"]()),a=0,c=t.length;a<c;++a){o=t[a];const l=o&&this.getDatasetMeta(o.datasetIndex).controller;l&&l[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!Ka(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const i=this.options.hover,r=(c,l)=>c.filter(d=>!l.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),o=r(e,t),a=s?t:r(t,e);o.length&&this.updateHoverStyle(o,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},i=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,i)===!1)return;const r=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,i),(r||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:i=[],options:r}=this,o=e,a=this._getActiveElements(t,i,s,o),c=qS(t),l=VR(t,this._lastEvent,s,c);s&&(this._lastEvent=null,At(r.onHover,[t,a,this],this),c&&At(r.onClick,[t,a,this],this));const d=!Ka(a,i);return(d||e)&&(this._active=a,this._updateHoverStyles(a,i,e)),this._lastEvent=l,d}_getActiveElements(t,e,s,i){if(t.type==="mouseout")return[];if(!s)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,i)}}N(ht,"defaults",Mt),N(ht,"instances",Ia),N(ht,"overrides",Us),N(ht,"registry",Xe),N(ht,"version",MR),N(ht,"getChart",Im);function Am(){return vt(ht.instances,n=>n._plugins.invalidate())}function FR(n,t,e){const{startAngle:s,x:i,y:r,outerRadius:o,innerRadius:a,options:c}=t,{borderWidth:l,borderJoinStyle:d}=c,h=Math.min(l/o,_e(s-e));if(n.beginPath(),n.arc(i,r,o-l/2,s+h/2,e-h/2),a>0){const f=Math.min(l/a,_e(s-e));n.arc(i,r,a+l/2,e-f/2,s+f/2,!0)}else{const f=Math.min(l/2,o*_e(s-e));if(d==="round")n.arc(i,r,f,e-mt/2,s+mt/2,!0);else if(d==="bevel"){const m=2*f*f,g=-m*Math.cos(e+mt/2)+i,y=-m*Math.sin(e+mt/2)+r,v=m*Math.cos(s+mt/2)+i,T=m*Math.sin(s+mt/2)+r;n.lineTo(g,y),n.lineTo(v,T)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function $R(n,t,e){const{startAngle:s,pixelMargin:i,x:r,y:o,outerRadius:a,innerRadius:c}=t;let l=i/a;n.beginPath(),n.arc(r,o,a,s-l,e+l),c>i?(l=i/c,n.arc(r,o,c,e+l,s-l,!0)):n.arc(r,o,i,e+Gt,s-Gt),n.closePath(),n.clip()}function BR(n){return Gd(n,["outerStart","outerEnd","innerStart","innerEnd"])}function UR(n,t,e,s){const i=BR(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,s*t/2),a=c=>{const l=(e-Math.min(r,c))*s/2;return ee(c,0,Math.min(r,l))};return{outerStart:a(i.outerStart),outerEnd:a(i.outerEnd),innerStart:ee(i.innerStart,0,o),innerEnd:ee(i.innerEnd,0,o)}}function si(n,t,e,s){return{x:e+n*Math.cos(t),y:s+n*Math.sin(t)}}function ec(n,t,e,s,i,r){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:d}=t,h=Math.max(t.outerRadius+s+e-l,0),f=d>0?d+s+e+l:0;let m=0;const g=i-c;if(s){const H=d>0?d-s:0,X=h>0?h-s:0,nt=(H+X)/2,ut=nt!==0?g*nt/(nt+s):g;m=(g-ut)/2}const y=Math.max(.001,g*h-e/mt)/h,v=(g-y)/2,T=c+v+m,k=i-v-m,{outerStart:C,outerEnd:P,innerStart:M,innerEnd:D}=UR(t,f,h,k-T),w=h-C,b=h-P,x=T+C/w,A=k-P/b,S=f+M,R=f+D,I=T+M/S,U=k-D/R;if(n.beginPath(),r){const H=(x+A)/2;if(n.arc(o,a,h,x,H),n.arc(o,a,h,H,A),P>0){const st=si(b,A,o,a);n.arc(st.x,st.y,P,A,k+Gt)}const X=si(R,k,o,a);if(n.lineTo(X.x,X.y),D>0){const st=si(R,U,o,a);n.arc(st.x,st.y,D,k+Gt,U+Math.PI)}const nt=(k-D/f+(T+M/f))/2;if(n.arc(o,a,f,k-D/f,nt,!0),n.arc(o,a,f,nt,T+M/f,!0),M>0){const st=si(S,I,o,a);n.arc(st.x,st.y,M,I+Math.PI,T-Gt)}const ut=si(w,T,o,a);if(n.lineTo(ut.x,ut.y),C>0){const st=si(w,x,o,a);n.arc(st.x,st.y,C,T-Gt,x)}}else{n.moveTo(o,a);const H=Math.cos(x)*h+o,X=Math.sin(x)*h+a;n.lineTo(H,X);const nt=Math.cos(A)*h+o,ut=Math.sin(A)*h+a;n.lineTo(nt,ut)}n.closePath()}function jR(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a}=t;let c=t.endAngle;if(r){ec(n,t,e,s,c,i);for(let l=0;l<r;++l)n.fill();isNaN(a)||(c=o+(a%Rt||Rt))}return ec(n,t,e,s,c,i),n.fill(),c}function zR(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a,options:c}=t,{borderWidth:l,borderJoinStyle:d,borderDash:h,borderDashOffset:f,borderRadius:m}=c,g=c.borderAlign==="inner";if(!l)return;n.setLineDash(h||[]),n.lineDashOffset=f,g?(n.lineWidth=l*2,n.lineJoin=d||"round"):(n.lineWidth=l,n.lineJoin=d||"bevel");let y=t.endAngle;if(r){ec(n,t,e,s,y,i);for(let v=0;v<r;++v)n.stroke();isNaN(a)||(y=o+(a%Rt||Rt))}g&&$R(n,t,y),c.selfJoin&&y-o>=mt&&m===0&&d!=="miter"&&FR(n,t,y),r||(ec(n,t,e,s,y,i),n.stroke())}class wr extends Ye{constructor(e){super();N(this,"circumference");N(this,"endAngle");N(this,"fullCircles");N(this,"innerRadius");N(this,"outerRadius");N(this,"pixelMargin");N(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.getProps(["x","y"],i),{angle:o,distance:a}=ev(r,{x:e,y:s}),{startAngle:c,endAngle:l,innerRadius:d,outerRadius:h,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),m=(this.options.spacing+this.options.borderWidth)/2,g=Z(f,l-c),y=Qr(o,c,l)&&c!==l,v=g>=Rt||y,T=En(a,d+m,h+m);return v&&T}getCenterPoint(e){const{x:s,y:i,startAngle:r,endAngle:o,innerRadius:a,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:l,spacing:d}=this.options,h=(r+o)/2,f=(a+c+d+l)/2;return{x:s+Math.cos(h)*f,y:i+Math.sin(h)*f}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:i}=this,r=(s.offset||0)/4,o=(s.spacing||0)/2,a=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=i>Rt?Math.floor(i/Rt):0,i===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*r,Math.sin(c)*r);const l=1-Math.sin(Math.min(mt,i||0)),d=r*l;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,jR(e,this,d,o,a),zR(e,this,d,o,a),e.restore()}}N(wr,"id","arc"),N(wr,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),N(wr,"defaultRoutes",{backgroundColor:"backgroundColor"}),N(wr,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function Lv(n,t,e=t){n.lineCap=Z(e.borderCapStyle,t.borderCapStyle),n.setLineDash(Z(e.borderDash,t.borderDash)),n.lineDashOffset=Z(e.borderDashOffset,t.borderDashOffset),n.lineJoin=Z(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=Z(e.borderWidth,t.borderWidth),n.strokeStyle=Z(e.borderColor,t.borderColor)}function HR(n,t,e){n.lineTo(e.x,e.y)}function qR(n){return n.stepped?p1:n.tension||n.cubicInterpolationMode==="monotone"?m1:HR}function Vv(n,t,e={}){const s=n.length,{start:i=0,end:r=s-1}=e,{start:o,end:a}=t,c=Math.max(i,o),l=Math.min(r,a),d=i<o&&r<o||i>a&&r>a;return{count:s,start:c,loop:t.loop,ilen:l<c&&!d?s+l-c:l-c}}function WR(n,t,e,s){const{points:i,options:r}=t,{count:o,start:a,loop:c,ilen:l}=Vv(i,e,s),d=qR(r);let{move:h=!0,reverse:f}=s||{},m,g,y;for(m=0;m<=l;++m)g=i[(a+(f?l-m:m))%o],!g.skip&&(h?(n.moveTo(g.x,g.y),h=!1):d(n,y,g,f,r.stepped),y=g);return c&&(g=i[(a+(f?l:0))%o],d(n,y,g,f,r.stepped)),!!c}function GR(n,t,e,s){const i=t.points,{count:r,start:o,ilen:a}=Vv(i,e,s),{move:c=!0,reverse:l}=s||{};let d=0,h=0,f,m,g,y,v,T;const k=P=>(o+(l?a-P:P))%r,C=()=>{y!==v&&(n.lineTo(d,v),n.lineTo(d,y),n.lineTo(d,T))};for(c&&(m=i[k(0)],n.moveTo(m.x,m.y)),f=0;f<=a;++f){if(m=i[k(f)],m.skip)continue;const P=m.x,M=m.y,D=P|0;D===g?(M<y?y=M:M>v&&(v=M),d=(h*d+P)/++h):(C(),n.lineTo(P,M),g=D,h=0,y=v=M),T=M}C()}function Eu(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?GR:WR}function YR(n){return n.stepped?G1:n.tension||n.cubicInterpolationMode==="monotone"?Y1:Es}function KR(n,t,e,s){let i=t._path;i||(i=t._path=new Path2D,t.path(i,e,s)&&i.closePath()),Lv(n,t.options),n.stroke(i)}function QR(n,t,e,s){const{segments:i,options:r}=t,o=Eu(t);for(const a of i)Lv(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+s-1})&&n.closePath(),n.stroke()}const XR=typeof Path2D=="function";function JR(n,t,e,s){XR&&!t.options.segment?KR(n,t,e,s):QR(n,t,e,s)}class Yn extends Ye{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const i=s.spanGaps?this._loop:this._fullLoop;$1(this._points,s,t,i,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=tC(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,i=t[e],r=this.points,o=xv(this,{property:e,start:i,end:i});if(!o.length)return;const a=[],c=YR(s);let l,d;for(l=0,d=o.length;l<d;++l){const{start:h,end:f}=o[l],m=r[h],g=r[f];if(m===g){a.push(m);continue}const y=Math.abs((i-m[e])/(g[e]-m[e])),v=c(m,g,y,s.stepped);v[e]=t[e],a.push(v)}return a.length===1?a[0]:a}pathSegment(t,e,s){return Eu(this)(t,this,e,s)}path(t,e,s){const i=this.segments,r=Eu(this);let o=this._loop;e=e||0,s=s||this.points.length-e;for(const a of i)o&=r(t,this,a,{start:e,end:e+s-1});return!!o}draw(t,e,s,i){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),JR(t,this,s,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}N(Yn,"id","line"),N(Yn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),N(Yn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),N(Yn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function km(n,t,e,s){const i=n.options,{[e]:r}=n.getProps([e],s);return Math.abs(t-r)<i.radius+i.hitRadius}class Aa extends Ye{constructor(e){super();N(this,"parsed");N(this,"skip");N(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],i);return Math.pow(e-o,2)+Math.pow(s-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,s){return km(this,e,"x",s)}inYRange(e,s){return km(this,e,"y",s)}getCenterPoint(e){const{x:s,y:i}=this.getProps(["x","y"],e);return{x:s,y:i}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const i=s&&e.borderWidth||0;return(s+i)*2}draw(e,s){const i=this.options;this.skip||i.radius<.1||!In(this,s,this.size(i)/2)||(e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.fillStyle=i.backgroundColor,vu(e,i,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}N(Aa,"id","point"),N(Aa,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),N(Aa,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Fv(n,t){const{x:e,y:s,base:i,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,c,l,d,h;return n.horizontal?(h=o/2,a=Math.min(e,i),c=Math.max(e,i),l=s-h,d=s+h):(h=r/2,a=e-h,c=e+h,l=Math.min(s,i),d=Math.max(s,i)),{left:a,top:l,right:c,bottom:d}}function Kn(n,t,e,s){return n?0:ee(t,e,s)}function ZR(n,t,e){const s=n.options.borderWidth,i=n.borderSkipped,r=uv(s);return{t:Kn(i.top,r.top,0,e),r:Kn(i.right,r.right,0,t),b:Kn(i.bottom,r.bottom,0,e),l:Kn(i.left,r.left,0,t)}}function tP(n,t,e){const{enableBorderRadius:s}=n.getProps(["enableBorderRadius"]),i=n.options.borderRadius,r=Rs(i),o=Math.min(t,e),a=n.borderSkipped,c=s||ct(i);return{topLeft:Kn(!c||a.top||a.left,r.topLeft,0,o),topRight:Kn(!c||a.top||a.right,r.topRight,0,o),bottomLeft:Kn(!c||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:Kn(!c||a.bottom||a.right,r.bottomRight,0,o)}}function eP(n){const t=Fv(n),e=t.right-t.left,s=t.bottom-t.top,i=ZR(n,e/2,s/2),r=tP(n,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:r},inner:{x:t.left+i.l,y:t.top+i.t,w:e-i.l-i.r,h:s-i.t-i.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,r.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(i.b,i.r))}}}}function Ol(n,t,e,s){const i=t===null,r=e===null,a=n&&!(i&&r)&&Fv(n,s);return a&&(i||En(t,a.left,a.right))&&(r||En(e,a.top,a.bottom))}function nP(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function sP(n,t){n.rect(t.x,t.y,t.w,t.h)}function Nl(n,t,e={}){const s=n.x!==e.x?-t:0,i=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-s,o=(n.y+n.h!==e.y+e.h?t:0)-i;return{x:n.x+s,y:n.y+i,w:n.w+r,h:n.h+o,radius:n.radius}}class ka extends Ye{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:i}}=this,{inner:r,outer:o}=eP(this),a=nP(o.radius)?Xr:sP;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,Nl(o,e,r)),t.clip(),a(t,Nl(r,-e,o)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,Nl(r,e)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,e,s){return Ol(this,t,e,s)}inXRange(t,e){return Ol(this,t,null,e)}inYRange(t,e){return Ol(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:i,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+i)/2:e,y:r?s:(s+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}N(ka,"id","bar"),N(ka,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),N(ka,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var iP=Object.freeze({__proto__:null,ArcElement:wr,BarElement:ka,LineElement:Yn,PointElement:Aa});const Tu=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Sm=Tu.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function $v(n){return Tu[n%Tu.length]}function Bv(n){return Sm[n%Sm.length]}function rP(n,t){return n.borderColor=$v(t),n.backgroundColor=Bv(t),++t}function oP(n,t){return n.backgroundColor=n.data.map(()=>$v(t++)),t}function aP(n,t){return n.backgroundColor=n.data.map(()=>Bv(t++)),t}function cP(n){let t=0;return(e,s)=>{const i=n.getDatasetMeta(s).controller;i instanceof ks?t=oP(e,t):i instanceof Nr?t=aP(e,t):i&&(t=rP(e,t))}}function Cm(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function lP(n){return n&&(n.borderColor||n.backgroundColor)}function uP(){return Mt.borderColor!=="rgba(0,0,0,0.1)"||Mt.backgroundColor!=="rgba(0,0,0,0.1)"}var dP={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:s},options:i}=n.config,{elements:r}=i,o=Cm(s)||lP(i)||r&&Cm(r)||uP();if(!e.forceOverride&&o)return;const a=cP(n);s.forEach(a)}};function hP(n,t,e,s,i){const r=i.samples||s;if(r>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(r-2);let c=0;const l=t+e-1;let d=t,h,f,m,g,y;for(o[c++]=n[d],h=0;h<r-2;h++){let v=0,T=0,k;const C=Math.floor((h+1)*a)+1+t,P=Math.min(Math.floor((h+2)*a)+1,e)+t,M=P-C;for(k=C;k<P;k++)v+=n[k].x,T+=n[k].y;v/=M,T/=M;const D=Math.floor(h*a)+1+t,w=Math.min(Math.floor((h+1)*a)+1,e)+t,{x:b,y:x}=n[d];for(m=g=-1,k=D;k<w;k++)g=.5*Math.abs((b-v)*(n[k].y-x)-(b-n[k].x)*(T-x)),g>m&&(m=g,f=n[k],y=k);o[c++]=f,d=y}return o[c++]=n[l],o}function fP(n,t,e,s){let i=0,r=0,o,a,c,l,d,h,f,m,g,y;const v=[],T=t+e-1,k=n[t].x,P=n[T].x-k;for(o=t;o<t+e;++o){a=n[o],c=(a.x-k)/P*s,l=a.y;const M=c|0;if(M===d)l<g?(g=l,h=o):l>y&&(y=l,f=o),i=(r*i+a.x)/++r;else{const D=o-1;if(!rt(h)&&!rt(f)){const w=Math.min(h,f),b=Math.max(h,f);w!==m&&w!==D&&v.push({...n[w],x:i}),b!==m&&b!==D&&v.push({...n[b],x:i})}o>0&&D!==m&&v.push(n[D]),v.push(a),d=M,r=0,g=y=l,h=f=m=o}}return v}function Uv(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Rm(n){n.data.datasets.forEach(t=>{Uv(t)})}function pP(n,t){const e=t.length;let s=0,i;const{iScale:r}=n,{min:o,max:a,minDefined:c,maxDefined:l}=r.getUserBounds();return c&&(s=ee(Tn(t,r.axis,o).lo,0,e-1)),l?i=ee(Tn(t,r.axis,a).hi+1,s,e)-s:i=e-s,{start:s,count:i}}var mP={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){Rm(n);return}const s=n.width;n.data.datasets.forEach((i,r)=>{const{_data:o,indexAxis:a}=i,c=n.getDatasetMeta(r),l=o||i.data;if(br([a,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const d=n.scales[c.xAxisID];if(d.type!=="linear"&&d.type!=="time"||n.options.parsing)return;let{start:h,count:f}=pP(c,l);const m=e.threshold||4*s;if(f<=m){Uv(i);return}rt(o)&&(i._data=l,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(y){this._data=y}}));let g;switch(e.algorithm){case"lttb":g=hP(l,h,f,s,e);break;case"min-max":g=fP(l,h,f,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}i._decimated=g})},destroy(n){Rm(n)}};function gP(n,t,e){const s=n.segments,i=n.points,r=t.points,o=[];for(const a of s){let{start:c,end:l}=a;l=Vc(c,l,i);const d=Iu(e,i[c],i[l],a.loop);if(!t.segments){o.push({source:a,target:d,start:i[c],end:i[l]});continue}const h=xv(t,d);for(const f of h){const m=Iu(e,r[f.start],r[f.end],f.loop),g=bv(a,i,m);for(const y of g)o.push({source:y,target:f,start:{[e]:Pm(d,m,"start",Math.max)},end:{[e]:Pm(d,m,"end",Math.min)}})}}return o}function Iu(n,t,e,s){if(s)return;let i=t[n],r=e[n];return n==="angle"&&(i=_e(i),r=_e(r)),{property:n,start:i,end:r}}function _P(n,t){const{x:e=null,y:s=null}=n||{},i=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=Vc(o,a,i);const c=i[o],l=i[a];s!==null?(r.push({x:c.x,y:s}),r.push({x:l.x,y:s})):e!==null&&(r.push({x:e,y:c.y}),r.push({x:e,y:l.y}))}),r}function Vc(n,t,e){for(;t>n;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function Pm(n,t,e,s){return n&&t?s(n[e],t[e]):n?n[e]:t?t[e]:0}function jv(n,t){let e=[],s=!1;return Dt(n)?(s=!0,e=n):e=_P(n,t),e.length?new Yn({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function Dm(n){return n&&n.fill!==!1}function yP(n,t,e){let i=n[t].fill;const r=[t];let o;if(!e)return i;for(;i!==!1&&r.indexOf(i)===-1;){if(!jt(i))return i;if(o=n[i],!o)return!1;if(o.visible)return i;r.push(i),i=o.fill}return!1}function vP(n,t,e){const s=EP(n);if(ct(s))return isNaN(s.value)?!1:s;let i=parseFloat(s);return jt(i)&&Math.floor(i)===i?bP(s[0],t,i,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function bP(n,t,e,s){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function xP(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:ct(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function wP(n,t,e){let s;return n==="start"?s=e:n==="end"?s=t.options.reverse?t.min:t.max:ct(n)?s=n.value:s=t.getBaseValue(),s}function EP(n){const t=n.options,e=t.fill;let s=Z(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function TP(n){const{scale:t,index:e,line:s}=n,i=[],r=s.segments,o=s.points,a=IP(t,e);a.push(jv({x:null,y:t.bottom},s));for(let c=0;c<r.length;c++){const l=r[c];for(let d=l.start;d<=l.end;d++)AP(i,o[d],a)}return new Yn({points:i,options:{}})}function IP(n,t){const e=[],s=n.getMatchingVisibleMetas("line");for(let i=0;i<s.length;i++){const r=s[i];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function AP(n,t,e){const s=[];for(let i=0;i<e.length;i++){const r=e[i],{first:o,last:a,point:c}=kP(r,t,"x");if(!(!c||o&&a)){if(o)s.unshift(c);else if(n.push(c),!a)break}}n.push(...s)}function kP(n,t,e){const s=n.interpolate(t,e);if(!s)return{};const i=s[e],r=n.segments,o=n.points;let a=!1,c=!1;for(let l=0;l<r.length;l++){const d=r[l],h=o[d.start][e],f=o[d.end][e];if(En(i,h,f)){a=i===h,c=i===f;break}}return{first:a,last:c,point:s}}class zv{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:i,y:r,radius:o}=this;return e=e||{start:0,end:Rt},t.arc(i,r,o,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:i}=this,r=t.angle;return{x:e+Math.cos(r)*i,y:s+Math.sin(r)*i,angle:r}}}function SP(n){const{chart:t,fill:e,line:s}=n;if(jt(e))return CP(t,e);if(e==="stack")return TP(n);if(e==="shape")return!0;const i=RP(n);return i instanceof zv?i:jv(i,s)}function CP(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function RP(n){return(n.scale||{}).getPointPositionForValue?DP(n):PP(n)}function PP(n){const{scale:t={},fill:e}=n,s=xP(e,t);if(jt(s)){const i=t.isHorizontal();return{x:i?s:null,y:i?null:s}}return null}function DP(n){const{scale:t,fill:e}=n,s=t.options,i=t.getLabels().length,r=s.reverse?t.max:t.min,o=wP(e,t,r),a=[];if(s.grid.circular){const c=t.getPointPositionForValue(0,r);return new zv({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<i;++c)a.push(t.getPointPositionForValue(c,o));return a}function Ll(n,t,e){const s=SP(t),{chart:i,index:r,line:o,scale:a,axis:c}=t,l=o.options,d=l.fill,h=l.backgroundColor,{above:f=h,below:m=h}=d||{},g=i.getDatasetMeta(r),y=wv(i,g);s&&o.points.length&&(Mc(n,e),MP(n,{line:o,target:s,above:f,below:m,area:e,scale:a,axis:c,clip:y}),Oc(n))}function MP(n,t){const{line:e,target:s,above:i,below:r,area:o,scale:a,clip:c}=t,l=e._loop?"angle":t.axis;n.save();let d=r;r!==i&&(l==="x"?(Mm(n,s,o.top),Vl(n,{line:e,target:s,color:i,scale:a,property:l,clip:c}),n.restore(),n.save(),Mm(n,s,o.bottom)):l==="y"&&(Om(n,s,o.left),Vl(n,{line:e,target:s,color:r,scale:a,property:l,clip:c}),n.restore(),n.save(),Om(n,s,o.right),d=i)),Vl(n,{line:e,target:s,color:d,scale:a,property:l,clip:c}),n.restore()}function Mm(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:l}=a,d=i[c],h=i[Vc(c,l,i)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(d.x,e),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(h.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function Om(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:l}=a,d=i[c],h=i[Vc(c,l,i)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(e,d.y),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,h.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function Vl(n,t){const{line:e,target:s,property:i,color:r,scale:o,clip:a}=t,c=gP(e,s,i);for(const{source:l,target:d,start:h,end:f}of c){const{style:{backgroundColor:m=r}={}}=l,g=s!==!0;n.save(),n.fillStyle=m,OP(n,o,a,g&&Iu(i,h,f)),n.beginPath();const y=!!e.pathSegment(n,l);let v;if(g){y?n.closePath():Nm(n,s,f,i);const T=!!s.pathSegment(n,d,{move:y,reverse:!0});v=y&&T,v||Nm(n,s,h,i)}n.closePath(),n.fill(v?"evenodd":"nonzero"),n.restore()}}function OP(n,t,e,s){const i=t.chart.chartArea,{property:r,start:o,end:a}=s||{};if(r==="x"||r==="y"){let c,l,d,h;r==="x"?(c=o,l=i.top,d=a,h=i.bottom):(c=i.left,l=o,d=i.right,h=a),n.beginPath(),e&&(c=Math.max(c,e.left),d=Math.min(d,e.right),l=Math.max(l,e.top),h=Math.min(h,e.bottom)),n.rect(c,l,d-c,h-l),n.clip()}}function Nm(n,t,e,s){const i=t.interpolate(e,s);i&&n.lineTo(i.x,i.y)}var NP={id:"filler",afterDatasetsUpdate(n,t,e){const s=(n.data.datasets||[]).length,i=[];let r,o,a,c;for(o=0;o<s;++o)r=n.getDatasetMeta(o),a=r.dataset,c=null,a&&a.options&&a instanceof Yn&&(c={visible:n.isDatasetVisible(o),index:o,fill:vP(a,o,s),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=c,i.push(c);for(o=0;o<s;++o)c=i[o],!(!c||c.fill===!1)&&(c.fill=yP(i,o,e.propagate))},beforeDraw(n,t,e){const s=e.drawTime==="beforeDraw",i=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=i.length-1;o>=0;--o){const a=i[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),s&&a.fill&&Ll(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=n.getSortedVisibleDatasetMetas();for(let i=s.length-1;i>=0;--i){const r=s[i].$filler;Dm(r)&&Ll(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const s=t.meta.$filler;!Dm(s)||e.drawTime!=="beforeDatasetDraw"||Ll(n.ctx,s,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Lm=(n,t)=>{let{boxHeight:e=t,boxWidth:s=t}=n;return n.usePointStyle&&(e=Math.min(e,t),s=n.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},LP=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Vm extends Ye{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=At(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,i)=>t.sort(s,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,i=Zt(s.font),r=i.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=Lm(s,r);let l,d;e.font=i.string,this.isHorizontal()?(l=this.maxWidth,d=this._fitRows(o,r,a,c)+10):(d=this.maxHeight,l=this._fitCols(o,i,a,c)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,i){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],d=i+a;let h=t;r.textAlign="left",r.textBaseline="middle";let f=-1,m=-d;return this.legendItems.forEach((g,y)=>{const v=s+e/2+r.measureText(g.text).width;(y===0||l[l.length-1]+v+2*a>o)&&(h+=d,l[l.length-(y>0?0:1)]=0,m+=d,f++),c[y]={left:0,top:m,row:f,width:v,height:i},l[l.length-1]+=v+a}),h}_fitCols(t,e,s,i){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],d=o-t;let h=a,f=0,m=0,g=0,y=0;return this.legendItems.forEach((v,T)=>{const{itemWidth:k,itemHeight:C}=VP(s,e,r,v,i);T>0&&m+C+2*a>d&&(h+=f+a,l.push({width:f,height:m}),g+=f+a,y++,f=m=0),c[T]={left:g,top:m,col:y,width:k,height:C},f=Math.max(f,k),m+=C+a}),h+=f,l.push({width:f,height:m}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:i},rtl:r}}=this,o=xi(r,this.left,this.width);if(this.isHorizontal()){let a=0,c=pe(s,this.left+i,this.right-this.lineWidths[a]);for(const l of e)a!==l.row&&(a=l.row,c=pe(s,this.left+i,this.right-this.lineWidths[a])),l.top+=this.top+t+i,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+i}else{let a=0,c=pe(s,this.top+t+i,this.bottom-this.columnSizes[a].height);for(const l of e)l.col!==a&&(a=l.col,c=pe(s,this.top+t+i,this.bottom-this.columnSizes[a].height)),l.top=c,l.left+=this.left+i,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Mc(t,this),this._draw(),Oc(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:i}=this,{align:r,labels:o}=t,a=Mt.color,c=xi(t.rtl,this.left,this.width),l=Zt(o.font),{padding:d}=o,h=l.size,f=h/2;let m;this.drawTitle(),i.textAlign=c.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=l.string;const{boxWidth:g,boxHeight:y,itemHeight:v}=Lm(o,h),T=function(D,w,b){if(isNaN(g)||g<=0||isNaN(y)||y<0)return;i.save();const x=Z(b.lineWidth,1);if(i.fillStyle=Z(b.fillStyle,a),i.lineCap=Z(b.lineCap,"butt"),i.lineDashOffset=Z(b.lineDashOffset,0),i.lineJoin=Z(b.lineJoin,"miter"),i.lineWidth=x,i.strokeStyle=Z(b.strokeStyle,a),i.setLineDash(Z(b.lineDash,[])),o.usePointStyle){const A={radius:y*Math.SQRT2/2,pointStyle:b.pointStyle,rotation:b.rotation,borderWidth:x},S=c.xPlus(D,g/2),R=w+f;lv(i,A,S,R,o.pointStyleWidth&&g)}else{const A=w+Math.max((h-y)/2,0),S=c.leftForLtr(D,g),R=Rs(b.borderRadius);i.beginPath(),Object.values(R).some(I=>I!==0)?Xr(i,{x:S,y:A,w:g,h:y,radius:R}):i.rect(S,A,g,y),i.fill(),x!==0&&i.stroke()}i.restore()},k=function(D,w,b){js(i,b.text,D,w+v/2,l,{strikethrough:b.hidden,textAlign:c.textAlign(b.textAlign)})},C=this.isHorizontal(),P=this._computeTitleHeight();C?m={x:pe(r,this.left+d,this.right-s[0]),y:this.top+d+P,line:0}:m={x:this.left+d,y:pe(r,this.top+P+d,this.bottom-e[0].height),line:0},_v(this.ctx,t.textDirection);const M=v+d;this.legendItems.forEach((D,w)=>{i.strokeStyle=D.fontColor,i.fillStyle=D.fontColor;const b=i.measureText(D.text).width,x=c.textAlign(D.textAlign||(D.textAlign=o.textAlign)),A=g+f+b;let S=m.x,R=m.y;c.setWidth(this.width),C?w>0&&S+A+d>this.right&&(R=m.y+=M,m.line++,S=m.x=pe(r,this.left+d,this.right-s[m.line])):w>0&&R+M>this.bottom&&(S=m.x=S+e[m.line].width+d,m.line++,R=m.y=pe(r,this.top+P+d,this.bottom-e[m.line].height));const I=c.x(S);if(T(I,R,D),S=s1(x,S+g+f,C?S+A:this.right,t.rtl),k(c.x(S),R,D),C)m.x+=A+d;else if(typeof D.text!="string"){const U=l.lineHeight;m.y+=Hv(D,U)+d}else m.y+=M}),yv(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=Zt(e.font),i=xe(e.padding);if(!e.display)return;const r=xi(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=s.size/2,l=i.top+c;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+l,h=pe(t.align,h,this.right-f);else{const g=this.columnSizes.reduce((y,v)=>Math.max(y,v.height),0);d=l+pe(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const m=pe(a,h,h+f);o.textAlign=r.textAlign(qd(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=s.string,js(o,e.text,m,d,s)}_computeTitleHeight(){const t=this.options.title,e=Zt(t.font),s=xe(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,i,r;if(En(t,this.left,this.right)&&En(e,this.top,this.bottom)){for(r=this.legendHitBoxes,s=0;s<r.length;++s)if(i=r[s],En(t,i.left,i.left+i.width)&&En(e,i.top,i.top+i.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!BP(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,r=LP(i,s);i&&!r&&At(e.onLeave,[t,i,this],this),this._hoveredItem=s,s&&!r&&At(e.onHover,[t,s,this],this)}else s&&At(e.onClick,[t,s,this],this)}}function VP(n,t,e,s,i){const r=FP(s,n,t,e),o=$P(i,s,t.lineHeight);return{itemWidth:r,itemHeight:o}}function FP(n,t,e,s){let i=n.text;return i&&typeof i!="string"&&(i=i.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+s.measureText(i).width}function $P(n,t,e){let s=n;return typeof t.text!="string"&&(s=Hv(t,e)),s}function Hv(n,t){const e=n.text?n.text.length:0;return t*e}function BP(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var UP={id:"legend",_element:Vm,start(n,t,e){const s=n.legend=new Vm({ctx:n.ctx,options:e,chart:n});ve.configure(n,s,e),ve.addBox(n,s)},stop(n){ve.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const s=n.legend;ve.configure(n,s,e),s.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const s=t.datasetIndex,i=e.chart;i.isDatasetVisible(s)?(i.hide(s),t.hidden=!0):(i.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const l=c.controller.getStyle(e?0:void 0),d=xe(l.borderWidth);return{text:t[c.index].label,fillStyle:l.backgroundColor,fontColor:r,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:l.borderColor,pointStyle:s||l.pointStyle,rotation:l.rotation,textAlign:i||l.textAlign,borderRadius:o&&(a||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class th extends Ye{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const i=Dt(s.text)?s.text.length:1;this._padding=xe(s.padding);const r=i*Zt(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:i,right:r,options:o}=this,a=o.align;let c=0,l,d,h;return this.isHorizontal()?(d=pe(a,s,r),h=e+t,l=r-s):(o.position==="left"?(d=s+t,h=pe(a,i,e),c=mt*-.5):(d=r-t,h=pe(a,e,i),c=mt*.5),l=i-e),{titleX:d,titleY:h,maxWidth:l,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=Zt(e.font),r=s.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(r);js(t,e.text,0,0,s,{color:e.color,maxWidth:c,rotation:l,textAlign:qd(e.align),textBaseline:"middle",translation:[o,a]})}}function jP(n,t){const e=new th({ctx:n.ctx,options:t,chart:n});ve.configure(n,e,t),ve.addBox(n,e),n.titleBlock=e}var zP={id:"title",_element:th,start(n,t,e){jP(n,e)},stop(n){const t=n.titleBlock;ve.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const s=n.titleBlock;ve.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ia=new WeakMap;var HP={id:"subtitle",start(n,t,e){const s=new th({ctx:n.ctx,options:e,chart:n});ve.configure(n,s,e),ve.addBox(n,s),ia.set(n,s)},stop(n){ve.removeBox(n,ia.get(n)),ia.delete(n)},beforeUpdate(n,t,e){const s=ia.get(n);ve.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Er={average(n){if(!n.length)return!1;let t,e,s=new Set,i=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const c=a.tooltipPosition();s.add(c.x),i+=c.y,++r}}return r===0||s.size===0?!1:{x:[...s].reduce((a,c)=>a+c)/s.size,y:i/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,s=t.y,i=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const c=n[r].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),d=_u(t,l);d<i&&(i=d,a=c)}}if(a){const c=a.tooltipPosition();e=c.x,s=c.y}return{x:e,y:s}}};function Qe(n,t){return t&&(Dt(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function _n(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function qP(n,t){const{element:e,datasetIndex:s,index:i}=t,r=n.getDatasetMeta(s).controller,{label:o,value:a}=r.getLabelAndValue(i);return{chart:n,label:o,parsed:r.getParsed(i),raw:n.data.datasets[s].data[i],formattedValue:a,dataset:r.getDataset(),dataIndex:i,datasetIndex:s,element:e}}function Fm(n,t){const e=n.chart.ctx,{body:s,footer:i,title:r}=n,{boxWidth:o,boxHeight:a}=t,c=Zt(t.bodyFont),l=Zt(t.titleFont),d=Zt(t.footerFont),h=r.length,f=i.length,m=s.length,g=xe(t.padding);let y=g.height,v=0,T=s.reduce((P,M)=>P+M.before.length+M.lines.length+M.after.length,0);if(T+=n.beforeBody.length+n.afterBody.length,h&&(y+=h*l.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),T){const P=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;y+=m*P+(T-m)*c.lineHeight+(T-1)*t.bodySpacing}f&&(y+=t.footerMarginTop+f*d.lineHeight+(f-1)*t.footerSpacing);let k=0;const C=function(P){v=Math.max(v,e.measureText(P).width+k)};return e.save(),e.font=l.string,vt(n.title,C),e.font=c.string,vt(n.beforeBody.concat(n.afterBody),C),k=t.displayColors?o+2+t.boxPadding:0,vt(s,P=>{vt(P.before,C),vt(P.lines,C),vt(P.after,C)}),k=0,e.font=d.string,vt(n.footer,C),e.restore(),v+=g.width,{width:v,height:y}}function WP(n,t){const{y:e,height:s}=t;return e<s/2?"top":e>n.height-s/2?"bottom":"center"}function GP(n,t,e,s){const{x:i,width:r}=s,o=e.caretSize+e.caretPadding;if(n==="left"&&i+r+o>t.width||n==="right"&&i-r-o<0)return!0}function YP(n,t,e,s){const{x:i,width:r}=e,{width:o,chartArea:{left:a,right:c}}=n;let l="center";return s==="center"?l=i<=(a+c)/2?"left":"right":i<=r/2?l="left":i>=o-r/2&&(l="right"),GP(l,n,t,e)&&(l="center"),l}function $m(n,t,e){const s=e.yAlign||t.yAlign||WP(n,e);return{xAlign:e.xAlign||t.xAlign||YP(n,t,e,s),yAlign:s}}function KP(n,t){let{x:e,width:s}=n;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function QP(n,t,e){let{y:s,height:i}=n;return t==="top"?s+=e:t==="bottom"?s-=i+e:s-=i/2,s}function Bm(n,t,e,s){const{caretSize:i,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:c}=e,l=i+r,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:m}=Rs(o);let g=KP(t,a);const y=QP(t,c,l);return c==="center"?a==="left"?g+=l:a==="right"&&(g-=l):a==="left"?g-=Math.max(d,f)+i:a==="right"&&(g+=Math.max(h,m)+i),{x:ee(g,0,s.width-t.width),y:ee(y,0,s.height-t.height)}}function ra(n,t,e){const s=xe(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-s.right:n.x+s.left}function Um(n){return Qe([],_n(n))}function XP(n,t,e){return us(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function jm(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const qv={beforeTitle:mn,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:mn,beforeBody:mn,beforeLabel:mn,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return rt(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:mn,afterBody:mn,beforeFooter:mn,footer:mn,afterFooter:mn};function ke(n,t,e,s){const i=n[t].call(e,s);return typeof i>"u"?qv[t].call(e,s):i}class Au extends Ye{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),i=s.enabled&&e.options.animation&&s.animations,r=new Ev(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=XP(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,i=ke(s,"beforeTitle",this,t),r=ke(s,"title",this,t),o=ke(s,"afterTitle",this,t);let a=[];return a=Qe(a,_n(i)),a=Qe(a,_n(r)),a=Qe(a,_n(o)),a}getBeforeBody(t,e){return Um(ke(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,i=[];return vt(t,r=>{const o={before:[],lines:[],after:[]},a=jm(s,r);Qe(o.before,_n(ke(a,"beforeLabel",this,r))),Qe(o.lines,ke(a,"label",this,r)),Qe(o.after,_n(ke(a,"afterLabel",this,r))),i.push(o)}),i}getAfterBody(t,e){return Um(ke(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,i=ke(s,"beforeFooter",this,t),r=ke(s,"footer",this,t),o=ke(s,"afterFooter",this,t);let a=[];return a=Qe(a,_n(i)),a=Qe(a,_n(r)),a=Qe(a,_n(o)),a}_createItems(t){const e=this._active,s=this.chart.data,i=[],r=[],o=[];let a=[],c,l;for(c=0,l=e.length;c<l;++c)a.push(qP(this.chart,e[c]));return t.filter&&(a=a.filter((d,h,f)=>t.filter(d,h,f,s))),t.itemSort&&(a=a.sort((d,h)=>t.itemSort(d,h,s))),vt(a,d=>{const h=jm(t.callbacks,d);i.push(ke(h,"labelColor",this,d)),r.push(ke(h,"labelPointStyle",this,d)),o.push(ke(h,"labelTextColor",this,d))}),this.labelColors=i,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const s=this.options.setContext(this.getContext()),i=this._active;let r,o=[];if(!i.length)this.opacity!==0&&(r={opacity:0});else{const a=Er[s.position].call(this,i,this._eventPosition);o=this._createItems(s),this.title=this.getTitle(o,s),this.beforeBody=this.getBeforeBody(o,s),this.body=this.getBody(o,s),this.afterBody=this.getAfterBody(o,s),this.footer=this.getFooter(o,s);const c=this._size=Fm(this,s),l=Object.assign({},a,c),d=$m(this.chart,s,l),h=Bm(s,l,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,r={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,i){const r=this.getCaretPosition(t,s,i);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,s){const{xAlign:i,yAlign:r}=this,{caretSize:o,cornerRadius:a}=s,{topLeft:c,topRight:l,bottomLeft:d,bottomRight:h}=Rs(a),{x:f,y:m}=t,{width:g,height:y}=e;let v,T,k,C,P,M;return r==="center"?(P=m+y/2,i==="left"?(v=f,T=v-o,C=P+o,M=P-o):(v=f+g,T=v+o,C=P-o,M=P+o),k=v):(i==="left"?T=f+Math.max(c,d)+o:i==="right"?T=f+g-Math.max(l,h)-o:T=this.caretX,r==="top"?(C=m,P=C-o,v=T-o,k=T+o):(C=m+y,P=C+o,v=T+o,k=T-o),M=C),{x1:v,x2:T,x3:k,y1:C,y2:P,y3:M}}drawTitle(t,e,s){const i=this.title,r=i.length;let o,a,c;if(r){const l=xi(s.rtl,this.x,this.width);for(t.x=ra(this,s.titleAlign,s),e.textAlign=l.textAlign(s.titleAlign),e.textBaseline="middle",o=Zt(s.titleFont),a=s.titleSpacing,e.fillStyle=s.titleColor,e.font=o.string,c=0;c<r;++c)e.fillText(i[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===r&&(t.y+=s.titleMarginBottom-a)}}_drawColorBox(t,e,s,i,r){const o=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:c,boxWidth:l}=r,d=Zt(r.bodyFont),h=ra(this,"left",r),f=i.x(h),m=c<d.lineHeight?(d.lineHeight-c)/2:0,g=e.y+m;if(r.usePointStyle){const y={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},v=i.leftForLtr(f,l)+l/2,T=g+c/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,vu(t,y,v,T),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,vu(t,y,v,T)}else{t.lineWidth=ct(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const y=i.leftForLtr(f,l),v=i.leftForLtr(i.xPlus(f,1),l-2),T=Rs(o.borderRadius);Object.values(T).some(k=>k!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,Xr(t,{x:y,y:g,w:l,h:c,radius:T}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Xr(t,{x:v,y:g+1,w:l-2,h:c-2,radius:T}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(y,g,l,c),t.strokeRect(y,g,l,c),t.fillStyle=o.backgroundColor,t.fillRect(v,g+1,l-2,c-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:i}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:d}=s,h=Zt(s.bodyFont);let f=h.lineHeight,m=0;const g=xi(s.rtl,this.x,this.width),y=function(b){e.fillText(b,g.x(t.x+m),t.y+f/2),t.y+=f+r},v=g.textAlign(o);let T,k,C,P,M,D,w;for(e.textAlign=o,e.textBaseline="middle",e.font=h.string,t.x=ra(this,v,s),e.fillStyle=s.bodyColor,vt(this.beforeBody,y),m=a&&v!=="right"?o==="center"?l/2+d:l+2+d:0,P=0,D=i.length;P<D;++P){for(T=i[P],k=this.labelTextColors[P],e.fillStyle=k,vt(T.before,y),C=T.lines,a&&C.length&&(this._drawColorBox(e,t,P,g,s),f=Math.max(h.lineHeight,c)),M=0,w=C.length;M<w;++M)y(C[M]),f=h.lineHeight;vt(T.after,y)}m=0,f=h.lineHeight,vt(this.afterBody,y),t.y-=r}drawFooter(t,e,s){const i=this.footer,r=i.length;let o,a;if(r){const c=xi(s.rtl,this.x,this.width);for(t.x=ra(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=c.textAlign(s.footerAlign),e.textBaseline="middle",o=Zt(s.footerFont),e.fillStyle=s.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(i[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+s.footerSpacing}}drawBackground(t,e,s,i){const{xAlign:r,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:d}=s,{topLeft:h,topRight:f,bottomLeft:m,bottomRight:g}=Rs(i.cornerRadius);e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.beginPath(),e.moveTo(a+h,c),o==="top"&&this.drawCaret(t,e,s,i),e.lineTo(a+l-f,c),e.quadraticCurveTo(a+l,c,a+l,c+f),o==="center"&&r==="right"&&this.drawCaret(t,e,s,i),e.lineTo(a+l,c+d-g),e.quadraticCurveTo(a+l,c+d,a+l-g,c+d),o==="bottom"&&this.drawCaret(t,e,s,i),e.lineTo(a+m,c+d),e.quadraticCurveTo(a,c+d,a,c+d-m),o==="center"&&r==="left"&&this.drawCaret(t,e,s,i),e.lineTo(a,c+h),e.quadraticCurveTo(a,c,a+h,c),e.closePath(),e.fill(),i.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,i=s&&s.x,r=s&&s.y;if(i||r){const o=Er[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Fm(this,t),c=Object.assign({},o,this._size),l=$m(e,t,c),d=Bm(t,c,l,e);(i._to!==d.x||r._to!==d.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const i={width:this.width,height:this.height},r={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const o=xe(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=s,this.drawBackground(r,t,i,e),_v(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),yv(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,i=t.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),r=!Ka(s,i),o=this._positionChanged(i,e);(r||o)&&(this._active=i,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,s),a=this._positionChanged(o,t),c=e||!Ka(o,r)||a;return c&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,s,i){const r=this.options;if(t.type==="mouseout")return[];if(!i)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,s);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:s,caretY:i,options:r}=this,o=Er[r.position].call(this,t,e);return o!==!1&&(s!==o.x||i!==o.y)}}N(Au,"positioners",Er);var JP={id:"tooltip",_element:Au,positioners:Er,afterInit(n,t,e){e&&(n.tooltip=new Au({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:qv},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},ZP=Object.freeze({__proto__:null,Colors:dP,Decimation:mP,Filler:NP,Legend:UP,SubTitle:HP,Title:zP,Tooltip:JP});const tD=(n,t,e,s)=>(typeof t=="string"?(e=n.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function eD(n,t,e,s){const i=n.indexOf(t);if(i===-1)return tD(n,t,e,s);const r=n.lastIndexOf(t);return i!==r?e:i}const nD=(n,t)=>n===null?null:ee(Math.round(n),0,t);function zm(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class ku extends Ys{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:i,label:r}of e)s[i]===r&&s.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(rt(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:eD(s,t,Z(e,t),this._addedLabels),nD(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(i=this.getLabels().length-1)),this.min=s,this.max=i}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,i=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let o=t;o<=e;o++)i.push({value:o});return i}getLabelForValue(t){return zm.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}N(ku,"id","category"),N(ku,"defaults",{ticks:{callback:zm}});function sD(n,t){const e=[],{bounds:i,step:r,min:o,max:a,precision:c,count:l,maxTicks:d,maxDigits:h,includeBounds:f}=n,m=r||1,g=d-1,{min:y,max:v}=t,T=!rt(o),k=!rt(a),C=!rt(l),P=(v-y)/(h+1);let M=Fp((v-y)/g/m)*m,D,w,b,x;if(M<1e-14&&!T&&!k)return[{value:y},{value:v}];x=Math.ceil(v/M)-Math.floor(y/M),x>g&&(M=Fp(x*M/g/m)*m),rt(c)||(D=Math.pow(10,c),M=Math.ceil(M*D)/D),i==="ticks"?(w=Math.floor(y/M)*M,b=Math.ceil(v/M)*M):(w=y,b=v),T&&k&&r&&QS((a-o)/r,M/1e3)?(x=Math.round(Math.min((a-o)/M,d)),M=(a-o)/x,w=o,b=a):C?(w=T?o:w,b=k?a:b,x=l-1,M=(b-w)/x):(x=(b-w)/M,Dr(x,Math.round(x),M/1e3)?x=Math.round(x):x=Math.ceil(x));const A=Math.max($p(M),$p(w));D=Math.pow(10,rt(c)?A:c),w=Math.round(w*D)/D,b=Math.round(b*D)/D;let S=0;for(T&&(f&&w!==o?(e.push({value:o}),w<o&&S++,Dr(Math.round((w+S*M)*D)/D,o,Hm(o,P,n))&&S++):w<o&&S++);S<x;++S){const R=Math.round((w+S*M)*D)/D;if(k&&R>a)break;e.push({value:R})}return k&&f&&b!==a?e.length&&Dr(e[e.length-1].value,a,Hm(a,P,n))?e[e.length-1].value=a:e.push({value:a}):(!k||b===a)&&e.push({value:b}),e}function Hm(n,t,{horizontal:e,minRotation:s}){const i=ze(s),r=(e?Math.sin(i):Math.cos(i))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class nc extends Ys{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return rt(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:i,max:r}=this;const o=c=>i=e?i:c,a=c=>r=s?r:c;if(t){const c=an(i),l=an(r);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(i===r){let c=r===0?1:Math.abs(r*.05);a(r+c),t||o(i-c)}this.min=i,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,i;return s?(i=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),e=e||11),e&&(i=Math.min(e,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const i={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=sD(i,r);return t.bounds==="ticks"&&tv(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const i=(s-e)/Math.max(t.length-1,1)/2;e-=i,s+=i}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return yo(t,this.chart.options.locale,this.options.ticks.format)}}class Su extends nc{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=jt(t)?t:0,this.max=jt(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=ze(this.options.ticks.minRotation),i=(t?Math.sin(s):Math.cos(s))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}N(Su,"id","linear"),N(Su,"defaults",{ticks:{callback:Dc.formatters.numeric}});const Zr=n=>Math.floor(Wn(n)),vs=(n,t)=>Math.pow(10,Zr(n)+t);function qm(n){return n/Math.pow(10,Zr(n))===1}function Wm(n,t,e){const s=Math.pow(10,e),i=Math.floor(n/s);return Math.ceil(t/s)-i}function iD(n,t){const e=t-n;let s=Zr(e);for(;Wm(n,t,s)>10;)s++;for(;Wm(n,t,s)<10;)s--;return Math.min(s,Zr(n))}function rD(n,{min:t,max:e}){t=Me(n.min,t);const s=[],i=Zr(t);let r=iD(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),c=i>r?Math.pow(10,i):0,l=Math.round((t-c)*o)/o,d=Math.floor((t-c)/a/10)*a*10;let h=Math.floor((l-d)/Math.pow(10,r)),f=Me(n.min,Math.round((c+d+h*Math.pow(10,r))*o)/o);for(;f<e;)s.push({value:f,major:qm(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),f=Math.round((c+d+h*Math.pow(10,r))*o)/o;const m=Me(n.max,f);return s.push({value:m,major:qm(m),significand:h}),s}class Cu extends Ys{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=nc.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return jt(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=jt(t)?Math.max(0,t):null,this.max=jt(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!jt(this._userMin)&&(this.min=t===vs(this.min,0)?vs(this.min,-1):vs(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,i=this.max;const r=a=>s=t?s:a,o=a=>i=e?i:a;s===i&&(s<=0?(r(1),o(10)):(r(vs(s,-1)),o(vs(i,1)))),s<=0&&r(vs(i,-1)),i<=0&&o(vs(s,1)),this.min=s,this.max=i}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=rD(e,this);return t.bounds==="ticks"&&tv(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":yo(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Wn(t),this._valueRange=Wn(this.max)-Wn(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Wn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}N(Cu,"id","logarithmic"),N(Cu,"defaults",{ticks:{callback:Dc.formatters.logarithmic,major:{enabled:!0}}});function Ru(n){const t=n.ticks;if(t.display&&n.display){const e=xe(t.backdropPadding);return Z(t.font&&t.font.size,Mt.font.size)+e.height}return 0}function oD(n,t,e){return e=Dt(e)?e:[e],{w:f1(n,t.string,e),h:e.length*t.lineHeight}}function Gm(n,t,e,s,i){return n===s||n===i?{start:t-e/2,end:t+e/2}:n<s||n>i?{start:t-e,end:t}:{start:t,end:t+e}}function aD(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),s=[],i=[],r=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?mt/r:0;for(let c=0;c<r;c++){const l=o.setContext(n.getPointLabelContext(c));i[c]=l.padding;const d=n.getPointPosition(c,n.drawingArea+i[c],a),h=Zt(l.font),f=oD(n.ctx,h,n._pointLabels[c]);s[c]=f;const m=_e(n.getIndexAngle(c)+a),g=Math.round(zd(m)),y=Gm(g,d.x,f.w,0,180),v=Gm(g,d.y,f.h,90,270);cD(e,t,m,y,v)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=dD(n,s,i)}function cD(n,t,e,s,i){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,c=0;s.start<t.l?(a=(t.l-s.start)/r,n.l=Math.min(n.l,t.l-a)):s.end>t.r&&(a=(s.end-t.r)/r,n.r=Math.max(n.r,t.r+a)),i.start<t.t?(c=(t.t-i.start)/o,n.t=Math.min(n.t,t.t-c)):i.end>t.b&&(c=(i.end-t.b)/o,n.b=Math.max(n.b,t.b+c))}function lD(n,t,e){const s=n.drawingArea,{extra:i,additionalAngle:r,padding:o,size:a}=e,c=n.getPointPosition(t,s+i+o,r),l=Math.round(zd(_e(c.angle+Gt))),d=pD(c.y,a.h,l),h=hD(l),f=fD(c.x,a.w,h);return{visible:!0,x:c.x,y:d,textAlign:h,left:f,top:d,right:f+a.w,bottom:d+a.h}}function uD(n,t){if(!t)return!0;const{left:e,top:s,right:i,bottom:r}=n;return!(In({x:e,y:s},t)||In({x:e,y:r},t)||In({x:i,y:s},t)||In({x:i,y:r},t))}function dD(n,t,e){const s=[],i=n._pointLabels.length,r=n.options,{centerPointLabels:o,display:a}=r.pointLabels,c={extra:Ru(r)/2,additionalAngle:o?mt/i:0};let l;for(let d=0;d<i;d++){c.padding=e[d],c.size=t[d];const h=lD(n,d,c);s.push(h),a==="auto"&&(h.visible=uD(h,l),h.visible&&(l=h))}return s}function hD(n){return n===0||n===180?"center":n<180?"left":"right"}function fD(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function pD(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function mD(n,t,e){const{left:s,top:i,right:r,bottom:o}=e,{backdropColor:a}=t;if(!rt(a)){const c=Rs(t.borderRadius),l=xe(t.backdropPadding);n.fillStyle=a;const d=s-l.left,h=i-l.top,f=r-s+l.width,m=o-i+l.height;Object.values(c).some(g=>g!==0)?(n.beginPath(),Xr(n,{x:d,y:h,w:f,h:m,radius:c}),n.fill()):n.fillRect(d,h,f,m)}}function gD(n,t){const{ctx:e,options:{pointLabels:s}}=n;for(let i=t-1;i>=0;i--){const r=n._pointLabelItems[i];if(!r.visible)continue;const o=s.setContext(n.getPointLabelContext(i));mD(e,o,r);const a=Zt(o.font),{x:c,y:l,textAlign:d}=r;js(e,n._pointLabels[i],c,l+a.lineHeight/2,a,{color:o.color,textAlign:d,textBaseline:"middle"})}}function Wv(n,t,e,s){const{ctx:i}=n;if(e)i.arc(n.xCenter,n.yCenter,t,0,Rt);else{let r=n.getPointPosition(0,t);i.moveTo(r.x,r.y);for(let o=1;o<s;o++)r=n.getPointPosition(o,t),i.lineTo(r.x,r.y)}}function _D(n,t,e,s,i){const r=n.ctx,o=t.circular,{color:a,lineWidth:c}=t;!o&&!s||!a||!c||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=c,r.setLineDash(i.dash||[]),r.lineDashOffset=i.dashOffset,r.beginPath(),Wv(n,e,o,s),r.closePath(),r.stroke(),r.restore())}function yD(n,t,e){return us(n,{label:e,index:t,type:"pointLabel"})}class Tr extends nc{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=xe(Ru(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=jt(t)&&!isNaN(t)?t:0,this.max=jt(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Ru(this.options))}generateTickLabels(t){nc.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const i=At(this.options.pointLabels.callback,[e,s],this);return i||i===0?i:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?aD(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,i){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,i))}getIndexAngle(t){const e=Rt/(this._pointLabels.length||1),s=this.options.startAngle||0;return _e(t*e+ze(s))}getDistanceFromCenterForValue(t){if(rt(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(rt(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return yD(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const i=this.getIndexAngle(t)-Gt+s;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter,angle:i}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:i,bottom:r}=this._pointLabelItems[t];return{left:e,top:s,right:i,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),Wv(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:i,border:r}=e,o=this._pointLabels.length;let a,c,l;if(e.pointLabels.display&&gD(this,o),i.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){c=this.getDistanceFromCenterForValue(d.value);const f=this.getContext(h),m=i.setContext(f),g=r.setContext(f);_D(this,m,c,o,g)}}),s.display){for(t.save(),a=o-1;a>=0;a--){const d=s.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=d;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),l=this.getPointPosition(a,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const i=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const l=s.setContext(this.getContext(c)),d=Zt(l.font);if(r=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){t.font=d.string,o=t.measureText(a.label).width,t.fillStyle=l.backdropColor;const h=xe(l.backdropPadding);t.fillRect(-o/2-h.left,-r-d.size/2-h.top,o+h.width,d.size+h.height)}js(t,a.label,0,-r,d,{color:l.color,strokeColor:l.textStrokeColor,strokeWidth:l.textStrokeWidth})}),t.restore()}drawTitle(){}}N(Tr,"id","radialLinear"),N(Tr,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Dc.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),N(Tr,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),N(Tr,"descriptors",{angleLines:{_fallback:"grid"}});const Fc={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Re=Object.keys(Fc);function Ym(n,t){return n-t}function Km(n,t){if(rt(t))return null;const e=n._adapter,{parser:s,round:i,isoWeekday:r}=n._parseOpts;let o=t;return typeof s=="function"&&(o=s(o)),jt(o)||(o=typeof s=="string"?e.parse(o,s):e.parse(o)),o===null?null:(i&&(o=i==="week"&&(Pi(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,i)),+o)}function Qm(n,t,e,s){const i=Re.length;for(let r=Re.indexOf(n);r<i-1;++r){const o=Fc[Re[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=s)return Re[r]}return Re[i-1]}function vD(n,t,e,s,i){for(let r=Re.length-1;r>=Re.indexOf(e);r--){const o=Re[r];if(Fc[o].common&&n._adapter.diff(i,s,o)>=t-1)return o}return Re[e?Re.indexOf(e):0]}function bD(n){for(let t=Re.indexOf(n)+1,e=Re.length;t<e;++t)if(Fc[Re[t]].common)return Re[t]}function Xm(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:s,hi:i}=Hd(e,t),r=e[s]>=t?e[s]:e[i];n[r]=!0}}function xD(n,t,e,s){const i=n._adapter,r=+i.startOf(t[0].value,s),o=t[t.length-1].value;let a,c;for(a=r;a<=o;a=+i.add(a,1,s))c=e[a],c>=0&&(t[c].major=!0);return t}function Jm(n,t,e){const s=[],i={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],i[a]=o,s.push({value:a,major:!1});return r===0||!e?s:xD(n,s,i,e)}class to extends Ys{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),i=this._adapter=new Av._date(t.adapters.date);i.init(e),Pr(s.displayFormats,i.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Km(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:i,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(i=Math.min(i,l.min)),!a&&!isNaN(l.max)&&(r=Math.max(r,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),i=jt(i)&&!isNaN(i)?i:+e.startOf(Date.now(),s),r=jt(r)&&!isNaN(r)?r:+e.endOf(Date.now(),s)+1,this.min=Math.min(i,r-1),this.max=Math.max(i+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,i=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const r=this.min,o=this.max,a=t1(i,r,o);return this._unit=e.unit||(s.autoSkip?Qm(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):vD(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:bD(this._unit),this.initOffsets(i),t.reverse&&a.reverse(),Jm(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,i,r;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?e=1-i:e=(this.getDecimalForValue(t[1])-i)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?s=r:s=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=ee(e,0,o),s=ee(s,0,o),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,i=this.options,r=i.time,o=r.unit||Qm(r.minUnit,e,s,this._getLabelCapacity(e)),a=Z(i.ticks.stepSize,1),c=o==="week"?r.isoWeekday:!1,l=Pi(c)||c===!0,d={};let h=e,f,m;if(l&&(h=+t.startOf(h,"isoWeek",c)),h=+t.startOf(h,l?"day":o),t.diff(s,e,o)>1e5*a)throw new Error(e+" and "+s+" are too far apart with stepSize of "+a+" "+o);const g=i.ticks.source==="data"&&this.getDataTimestamps();for(f=h,m=0;f<s;f=+t.add(f,a,o),m++)Xm(d,f,g);return(f===s||i.bounds==="ticks"||m===1)&&Xm(d,f,g),Object.keys(d).sort(Ym).map(y=>+y)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const i=this.options.time.displayFormats,r=this._unit,o=e||i[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,s,i){const r=this.options,o=r.ticks.callback;if(o)return At(o,[t,e,s],this);const a=r.time.displayFormats,c=this._unit,l=this._majorUnit,d=c&&a[c],h=l&&a[l],f=s[e],m=l&&h&&f&&f.major;return this._adapter.format(t,i||(m?h:d))}generateTickLabels(t){let e,s,i;for(e=0,s=t.length;e<s;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,i=ze(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(i),o=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:s*r+a*o,h:s*o+a*r}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,i=s[e.unit]||s.millisecond,r=this._tickFormatFunction(t,0,Jm(this,[t],this._majorUnit),i),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(e=0,s=i.length;e<s;++e)t=t.concat(i[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const i=this.getLabels();for(e=0,s=i.length;e<s;++e)t.push(Km(this,i[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return sv(t.sort(Ym))}}N(to,"id","time"),N(to,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function oa(n,t,e){let s=0,i=n.length-1,r,o,a,c;e?(t>=n[s].pos&&t<=n[i].pos&&({lo:s,hi:i}=Tn(n,"pos",t)),{pos:r,time:a}=n[s],{pos:o,time:c}=n[i]):(t>=n[s].time&&t<=n[i].time&&({lo:s,hi:i}=Tn(n,"time",t)),{time:r,pos:a}=n[s],{time:o,pos:c}=n[i]);const l=o-r;return l?a+(c-a)*(t-r)/l:a}class Pu extends to{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=oa(e,this.min),this._tableRange=oa(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,i=[],r=[];let o,a,c,l,d;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=s&&i.push(l);if(i.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(o=0,a=i.length;o<a;++o)d=i[o+1],c=i[o-1],l=i[o],Math.round((d+c)/2)!==l&&r.push({time:l,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((i,r)=>i-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(oa(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return oa(this._table,s*this._tableRange+this._minPos,!0)}}N(Pu,"id","timeseries"),N(Pu,"defaults",to.defaults);var wD=Object.freeze({__proto__:null,CategoryScale:ku,LinearScale:Su,LogarithmicScale:Cu,RadialLinearScale:Tr,TimeScale:to,TimeSeriesScale:Pu});const ED=[CC,iP,ZP,wD];ht.register(...ED);const cr="rgba(255,255,255,0.08)",ii="#a1a1aa",Ue={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};ht.defaults.color="#e5e5e5";ht.defaults.font.family=Ue.family;ht.defaults.font.weight=Ue.weight;const lr={renderCurvaS:(n,t=[],e=[],s=[])=>{const i=document.getElementById(n);if(!i)return;i.chart&&i.chart.destroy();const r=s.length?s:t.map((o,a)=>`M${a+1}`);i.chart=new ht(i,{type:"line",data:{labels:r,datasets:[{label:"Planejado",data:t,borderColor:"#16a34a",backgroundColor:"rgba(34, 197, 94, 0.15)",tension:.35,fill:!0,borderWidth:3},{label:"Realizado",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.05)",tension:.35,fill:!0,borderWidth:3}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Ue,usePointStyle:!0}}},scales:{x:{grid:{color:cr},ticks:{color:ii,font:Ue}},y:{grid:{color:cr},ticks:{color:ii,font:Ue}}}}})},renderGastosPorMes:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:cr},ticks:{color:ii,font:Ue}},y:{grid:{color:cr},ticks:{color:ii,font:Ue}}}}})},renderStatusPie:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Ue,padding:12,usePointStyle:!0}}}}})},renderNatureza:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"bar",data:{labels:s,datasets:[{label:"Por Natureza",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:ii,font:Ue}},y:{grid:{color:cr},ticks:{color:ii,font:Ue,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}}}})},renderCentrosCusto:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e","#0ea5e9","#f59e0b"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:Ue,padding:12,usePointStyle:!0}}}}})}},ot={render:n=>{const t=document.getElementById("app"),e=bt.state.currentUser;if(!e){t.innerHTML=n;return}const s=bt.state.sidebarCollapsed,i=bt.state.currentTheme;t.innerHTML=`
            <div class="flex h-screen bg-canvas text-text transition-colors duration-200">
                <!-- Sidebar -->
                <aside id="sidebar" class="${s?"w-20":"w-64"} bg-surface border-r border-border flex flex-col transition-all duration-300 z-20 hidden md:flex shadow-heavy">
                    <div class="h-16 flex items-center justify-center border-b border-border">
                        <span class="text-2xl font-display text-primary">AXEL</span>
                        <span data-logo-text class="${s?"hidden":"ml-2 text-text font-display tracking-wide"}">GESTÃO</span>
                    </div>

                    <nav class="flex-1 overflow-y-auto py-4 space-y-1 px-3">
                        ${ot.createNavItem("/","Dashboard",Nt.dashboard,s)}
                        ${ot.createNavItem("/compras","Compras",Nt.shoppingCart,s)}
                        ${ot.createNavItem("/relatorios","Relatórios",Nt.clipboard,s)}
                        ${ot.createNavItem("/obras","Obras",Nt.chart,s)}
                        ${ot.createNavItem("/cadastros","Cadastros",Nt.settings,s)}
                        <div class="pt-4 mt-4 border-t border-border">
                            ${ot.createNavItem("/configuracoes","Configurações",Nt.settings,s)}
                        </div>
                    </nav>

                    <div class="p-4 border-t border-border">
                        <button id="btn-logout" class="flex items-center gap-3 text-text-muted hover:text-alert w-full p-2 rounded transition-colors uppercase tracking-wide font-display">
                            ${Nt.logout}
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
                                ${Nt.menu}
                            </button>
                            
                            <!-- Global Search -->
                            <div class="relative hidden md:block w-96">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-text-muted">
                                    ${Nt.search}
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
                                ${i==="dark"?Nt.sun:Nt.moon}
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
        `,ot.bindEvents()},createNavItem:(n,t,e,s)=>{var o;const r=It.currentRoute===n||((o=It.currentRoute)==null?void 0:o.startsWith(`${n}/`))?"text-primary accent-left bg-surface shadow-heavy":"text-text-muted hover:text-text hover:bg-canvas";return`
            <a href="#${n}" class="flex items-center gap-3 px-3 py-2 rounded transition-colors mb-1 border border-transparent ${r}" title="${t}">
                ${e}
                <span class="${s?"hidden":"font-display tracking-wide uppercase"}">${t}</span>
            </a>
        `},bindEvents:()=>{var n,t,e;(n=document.getElementById("btn-toggle-sidebar"))==null||n.addEventListener("click",()=>{bt.toggleSidebar();const s=document.getElementById("sidebar"),i=s.querySelectorAll("span"),r=s.querySelector("[data-logo-text]");bt.state.sidebarCollapsed?(s.classList.remove("w-64"),s.classList.add("w-20"),i.forEach(o=>o.classList.add("hidden")),r&&r.classList.add("hidden")):(s.classList.remove("w-20"),s.classList.add("w-64"),i.forEach(o=>o.classList.remove("hidden")),r&&r.classList.remove("hidden"))}),(t=document.getElementById("btn-theme-toggle"))==null||t.addEventListener("click",()=>{const i=bt.state.currentTheme==="dark"?"light":"dark";bt.setTheme(i);const r=document.getElementById("btn-theme-toggle");r.innerHTML=i==="dark"?Nt.sun:Nt.moon}),(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",async()=>{try{await Ga.logout(),It.navigate("/login")}catch(s){console.error(s)}}),document.addEventListener("keydown",s=>{var i;(s.ctrlKey||s.metaKey)&&s.key==="k"&&(s.preventDefault(),(i=document.getElementById("global-search"))==null||i.focus())})}},je={getObras:async()=>(await yt(xt(K,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getObraById:async n=>{const e=(await yt(xt(K,"obras"))).docs.find(s=>s.id===n);return e?{id:e.id,...e.data()}:null},createObra:async n=>(await $i(xt(K,"obras"),{...n,created_at:new Date().toISOString()})).id,updateObra:async(n,t)=>{await ln(ne(K,"obras",n),{...t,updated_at:new Date().toISOString()})},deleteObra:async n=>{await G_(ne(K,"obras",n))},getObraStats:async(n,t=!1)=>{const e=xt(K,"compras"),s=ge(e,Xt("obraId","==",n)),r=(await yt(s)).docs.map(I=>({id:I.id,...I.data()}));let o=0;const a={},c={},l={},d={},h={};let f=null,m=null,g=0,y=0,v=0,T=0,k=0;const C={},P={},M=(I="")=>{const U=(I||"").toLowerCase();return U.includes("desperd")?"Desperdício":U.includes("lista")||U.includes("inicial")?"Lista inicial":"Material adicional"},D=I=>{const U=new Date(I.getTime()),H=(U.getDay()+6)%7;U.setDate(U.getDate()-H+3);const X=U.getTime();U.setMonth(0,1),U.getDay()!==4&&U.setMonth(0,1+(4-U.getDay()+7)%7);const nt=1+Math.ceil((X-U)/6048e5);return`${U.getFullYear()}-W${String(nt).padStart(2,"0")}`};r.forEach(I=>{const U=Number(I.valor_total??I.valor_estimado??0);o+=U,a[I.status_compra]=(a[I.status_compra]||0)+1;const H=I.previsao_entrega?new Date(I.previsao_entrega):null,X=I.data_recebimento?new Date(I.data_recebimento):null;if(I.status_compra!=="Entregue"&&H&&H<new Date&&g++,X&&H&&(y++,X<=H&&v++),I.data_emissao&&(X||H)){const Bt=X||H,kt=Math.max(0,(new Date(Bt)-new Date(I.data_emissao))/(1e3*60*60*24));T+=kt,k++}const nt=M(I.natureza_compra||I.categoria||"Outros");c[nt]=(c[nt]||0)+U;const ut=(I.natureza_compra||"Outros").trim();C[ut]=(C[ut]||0)+U;const st=I.centroCustoNome||I.centro_custo||I.centroCustoId||"N/D";P[st]=(P[st]||0)+U;const Ot=I.data_recebimento||I.data_emissao||I.previsao_entrega||I.data_solicitacao;if(Ot){const Bt=new Date(Ot);if(!Number.isNaN(Bt.getTime())){(!f||Bt<f)&&(f=Bt),(!m||Bt>m)&&(m=Bt);const kt=`${Bt.getFullYear()}-${String(Bt.getMonth()+1).padStart(2,"0")}`;l[kt]=(l[kt]||0)+U;const Y=Bt.toISOString().split("T")[0];d[Y]=(d[Y]||0)+U;const Et=D(Bt);h[Et]=(h[Et]||0)+U}}});const w=o,b=je.calculateCurvaS(w,h,{start:obra.data_prevista_inicio||obra.data_inicio||f,end:obra.data_prevista_fim||obra.data_fim||m}),x=y?v/y*100:0,A=k?T/k:0,S=[...r].sort((I,U)=>{const H=I.data_solicitacao||I.data_emissao||"";return(U.data_solicitacao||U.data_emissao||"").localeCompare(H)}),R={totalCompras:r.length,totalGasto:o,porStatus:a,gastosPorCategoria:c,gastosMensais:l,gastosDiarios:d,curvaS:b,comprasRecentes:S.slice(0,10),comprasCalendar:S,atrasos:g,sla:x,lead:A,naturezaTotais:C,ccTotais:P};if(t)try{const{RDOService:I}=await Ya(async()=>{const{RDOService:H}=await Promise.resolve().then(()=>_b);return{RDOService:H}},void 0),U=await je.getObraById(n);if(U!=null&&U.numero_os){const H=new Date().toISOString().split("T")[0],X=new Date(Date.now()-30*24*60*60*1e3).toISOString().split("T")[0],nt=await I.getByObra(U.numero_os,X,H);nt&&nt.length>0&&(R.rdoData=I.processRDOData(nt))}}catch(I){console.warn("Erro ao buscar dados RDO:",I)}return R},calculateCurvaS:(n,t,{start:e,end:s}={})=>{const i=[],r=[],o=[];let a=0;const c=24*60*60*1e3,l=[],d=e?new Date(e):null,h=s?new Date(s):null;if(d&&!Number.isNaN(d)&&h&&!Number.isNaN(h)&&d<=h){const m=new Date(d);m.setHours(12,0,0,0);const g=m.getDay(),y=g===0?-6:1-g;for(m.setDate(m.getDate()+y);m<=h;){const v=m.getFullYear(),T=new Date(v,0,1),k=Math.floor((m-T)/c),C=Math.ceil((k+T.getDay()+1)/7);l.push(`${v}-W${String(C).padStart(2,"0")}`),m.setDate(m.getDate()+7)}}else l.push(...Object.keys(t).sort());const f=l.length||1;return l.forEach((m,g)=>{const y=(g+1)/f,v=1/(1+Math.exp(-10*(y-.5)));i.push(n*v),t[m]&&(a+=t[m]),r.push(a),o.push(m)}),{planejado:i,realizado:r,labels:o}}},TD=Object.freeze(Object.defineProperty({__proto__:null,ObrasService:je},Symbol.toStringTag,{value:"Module"})),Gv=6048e5,ID=864e5,vo=6e4,bo=36e5,AD=1e3,Zm=Symbol.for("constructDateFrom");function Ht(n,t){return typeof n=="function"?n(t):n&&typeof n=="object"&&Zm in n?n[Zm](t):n instanceof Date?new n.constructor(t):new Date(t)}function et(n,t){return Ht(t||n,n)}function $c(n,t,e){const s=et(n,e==null?void 0:e.in);return isNaN(t)?Ht((e==null?void 0:e.in)||n,NaN):(t&&s.setDate(s.getDate()+t),s)}function eh(n,t,e){const s=et(n,e==null?void 0:e.in);if(isNaN(t))return Ht(n,NaN);if(!t)return s;const i=s.getDate(),r=Ht(n,s.getTime());r.setMonth(s.getMonth()+t+1,0);const o=r.getDate();return i>=o?r:(s.setFullYear(r.getFullYear(),r.getMonth(),i),s)}function nh(n,t,e){return Ht(n,+et(n)+t)}function kD(n,t,e){return nh(n,t*bo)}let SD={};function Ks(){return SD}function un(n,t){var a,c,l,d;const e=Ks(),s=(t==null?void 0:t.weekStartsOn)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??e.weekStartsOn??((d=(l=e.locale)==null?void 0:l.options)==null?void 0:d.weekStartsOn)??0,i=et(n,t==null?void 0:t.in),r=i.getDay(),o=(r<s?7:0)+r-s;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function Oi(n,t){return un(n,{...t,weekStartsOn:1})}function Yv(n,t){const e=et(n,t==null?void 0:t.in),s=e.getFullYear(),i=Ht(e,0);i.setFullYear(s+1,0,4),i.setHours(0,0,0,0);const r=Oi(i),o=Ht(e,0);o.setFullYear(s,0,4),o.setHours(0,0,0,0);const a=Oi(o);return e.getTime()>=r.getTime()?s+1:e.getTime()>=a.getTime()?s:s-1}function sc(n){const t=et(n),e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+n-+e}function Qs(n,...t){const e=Ht.bind(null,t.find(s=>typeof s=="object"));return t.map(e)}function Du(n,t){const e=et(n,t==null?void 0:t.in);return e.setHours(0,0,0,0),e}function Kv(n,t,e){const[s,i]=Qs(e==null?void 0:e.in,n,t),r=Du(s),o=Du(i),a=+r-sc(r),c=+o-sc(o);return Math.round((a-c)/ID)}function CD(n,t){const e=Yv(n,t),s=Ht(n,0);return s.setFullYear(e,0,4),s.setHours(0,0,0,0),Oi(s)}function RD(n,t,e){const s=et(n,e==null?void 0:e.in);return s.setTime(s.getTime()+t*vo),s}function PD(n,t,e){return eh(n,t*3,e)}function DD(n,t,e){return nh(n,t*1e3)}function MD(n,t,e){return $c(n,t*7,e)}function OD(n,t,e){return eh(n,t*12,e)}function Lr(n,t){const e=+et(n)-+et(t);return e<0?-1:e>0?1:e}function ND(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function Qv(n){return!(!ND(n)&&typeof n!="number"||isNaN(+et(n)))}function LD(n,t,e){const[s,i]=Qs(e==null?void 0:e.in,n,t),r=s.getFullYear()-i.getFullYear(),o=s.getMonth()-i.getMonth();return r*12+o}function VD(n,t,e){const[s,i]=Qs(e==null?void 0:e.in,n,t);return s.getFullYear()-i.getFullYear()}function Xv(n,t,e){const[s,i]=Qs(e==null?void 0:e.in,n,t),r=tg(s,i),o=Math.abs(Kv(s,i));s.setDate(s.getDate()-r*o);const a=+(tg(s,i)===-r),c=r*(o-a);return c===0?0:c}function tg(n,t){const e=n.getFullYear()-t.getFullYear()||n.getMonth()-t.getMonth()||n.getDate()-t.getDate()||n.getHours()-t.getHours()||n.getMinutes()-t.getMinutes()||n.getSeconds()-t.getSeconds()||n.getMilliseconds()-t.getMilliseconds();return e<0?-1:e>0?1:e}function xo(n){return t=>{const s=(n?Math[n]:Math.trunc)(t);return s===0?0:s}}function FD(n,t,e){const[s,i]=Qs(e==null?void 0:e.in,n,t),r=(+s-+i)/bo;return xo(e==null?void 0:e.roundingMethod)(r)}function sh(n,t){return+et(n)-+et(t)}function $D(n,t,e){const s=sh(n,t)/vo;return xo(e==null?void 0:e.roundingMethod)(s)}function Jv(n,t){const e=et(n,t==null?void 0:t.in);return e.setHours(23,59,59,999),e}function Zv(n,t){const e=et(n,t==null?void 0:t.in),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(23,59,59,999),e}function BD(n,t){const e=et(n,t==null?void 0:t.in);return+Jv(e,t)==+Zv(e,t)}function tb(n,t,e){const[s,i,r]=Qs(e==null?void 0:e.in,n,n,t),o=Lr(i,r),a=Math.abs(LD(i,r));if(a<1)return 0;i.getMonth()===1&&i.getDate()>27&&i.setDate(30),i.setMonth(i.getMonth()-o*a);let c=Lr(i,r)===-o;BD(s)&&a===1&&Lr(s,r)===1&&(c=!1);const l=o*(a-+c);return l===0?0:l}function UD(n,t,e){const s=tb(n,t,e)/3;return xo(e==null?void 0:e.roundingMethod)(s)}function jD(n,t,e){const s=sh(n,t)/1e3;return xo(e==null?void 0:e.roundingMethod)(s)}function zD(n,t,e){const s=Xv(n,t,e)/7;return xo(e==null?void 0:e.roundingMethod)(s)}function HD(n,t,e){const[s,i]=Qs(e==null?void 0:e.in,n,t),r=Lr(s,i),o=Math.abs(VD(s,i));s.setFullYear(1584),i.setFullYear(1584);const a=Lr(s,i)===-r,c=r*(o-+a);return c===0?0:c}function qD(n,t){const e=et(n,t==null?void 0:t.in),s=e.getMonth(),i=s-s%3;return e.setMonth(i,1),e.setHours(0,0,0,0),e}function WD(n,t){const e=et(n,t==null?void 0:t.in);return e.setDate(1),e.setHours(0,0,0,0),e}function GD(n,t){const e=et(n,t==null?void 0:t.in),s=e.getFullYear();return e.setFullYear(s+1,0,0),e.setHours(23,59,59,999),e}function eb(n,t){const e=et(n,t==null?void 0:t.in);return e.setFullYear(e.getFullYear(),0,1),e.setHours(0,0,0,0),e}function YD(n,t){const e=et(n,t==null?void 0:t.in);return e.setMinutes(59,59,999),e}function KD(n,t){var a,c;const e=Ks(),s=e.weekStartsOn??((c=(a=e.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??0,i=et(n,t==null?void 0:t.in),r=i.getDay(),o=(r<s?-7:0)+6-(r-s);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}function QD(n,t){const e=et(n,t==null?void 0:t.in);return e.setSeconds(59,999),e}function XD(n,t){const e=et(n,t==null?void 0:t.in),s=e.getMonth(),i=s-s%3+3;return e.setMonth(i,0),e.setHours(23,59,59,999),e}function JD(n,t){const e=et(n,t==null?void 0:t.in);return e.setMilliseconds(999),e}const ZD={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},t2=(n,t,e)=>{let s;const i=ZD[n];return typeof i=="string"?s=i:t===1?s=i.one:s=i.other.replace("{{count}}",t.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+s:s+" ago":s};function Fl(n){return(t={})=>{const e=t.width?String(t.width):n.defaultWidth;return n.formats[e]||n.formats[n.defaultWidth]}}const e2={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},n2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},s2={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},i2={date:Fl({formats:e2,defaultWidth:"full"}),time:Fl({formats:n2,defaultWidth:"full"}),dateTime:Fl({formats:s2,defaultWidth:"full"})},r2={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},o2=(n,t,e,s)=>r2[n];function ur(n){return(t,e)=>{const s=e!=null&&e.context?String(e.context):"standalone";let i;if(s==="formatting"&&n.formattingValues){const o=n.defaultFormattingWidth||n.defaultWidth,a=e!=null&&e.width?String(e.width):o;i=n.formattingValues[a]||n.formattingValues[o]}else{const o=n.defaultWidth,a=e!=null&&e.width?String(e.width):n.defaultWidth;i=n.values[a]||n.values[o]}const r=n.argumentCallback?n.argumentCallback(t):t;return i[r]}}const a2={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},c2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},l2={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},u2={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},d2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},h2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},f2=(n,t)=>{const e=Number(n),s=e%100;if(s>20||s<10)switch(s%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},p2={ordinalNumber:f2,era:ur({values:a2,defaultWidth:"wide"}),quarter:ur({values:c2,defaultWidth:"wide",argumentCallback:n=>n-1}),month:ur({values:l2,defaultWidth:"wide"}),day:ur({values:u2,defaultWidth:"wide"}),dayPeriod:ur({values:d2,defaultWidth:"wide",formattingValues:h2,defaultFormattingWidth:"wide"})};function dr(n){return(t,e={})=>{const s=e.width,i=s&&n.matchPatterns[s]||n.matchPatterns[n.defaultMatchWidth],r=t.match(i);if(!r)return null;const o=r[0],a=s&&n.parsePatterns[s]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(a)?g2(a,h=>h.test(o)):m2(a,h=>h.test(o));let l;l=n.valueCallback?n.valueCallback(c):c,l=e.valueCallback?e.valueCallback(l):l;const d=t.slice(o.length);return{value:l,rest:d}}}function m2(n,t){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&t(n[e]))return e}function g2(n,t){for(let e=0;e<n.length;e++)if(t(n[e]))return e}function _2(n){return(t,e={})=>{const s=t.match(n.matchPattern);if(!s)return null;const i=s[0],r=t.match(n.parsePattern);if(!r)return null;let o=n.valueCallback?n.valueCallback(r[0]):r[0];o=e.valueCallback?e.valueCallback(o):o;const a=t.slice(i.length);return{value:o,rest:a}}}const y2=/^(\d+)(th|st|nd|rd)?/i,v2=/\d+/i,b2={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},x2={any:[/^b/i,/^(a|c)/i]},w2={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},E2={any:[/1/i,/2/i,/3/i,/4/i]},T2={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},I2={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},A2={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},k2={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},S2={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},C2={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},R2={ordinalNumber:_2({matchPattern:y2,parsePattern:v2,valueCallback:n=>parseInt(n,10)}),era:dr({matchPatterns:b2,defaultMatchWidth:"wide",parsePatterns:x2,defaultParseWidth:"any"}),quarter:dr({matchPatterns:w2,defaultMatchWidth:"wide",parsePatterns:E2,defaultParseWidth:"any",valueCallback:n=>n+1}),month:dr({matchPatterns:T2,defaultMatchWidth:"wide",parsePatterns:I2,defaultParseWidth:"any"}),day:dr({matchPatterns:A2,defaultMatchWidth:"wide",parsePatterns:k2,defaultParseWidth:"any"}),dayPeriod:dr({matchPatterns:S2,defaultMatchWidth:"any",parsePatterns:C2,defaultParseWidth:"any"})},nb={code:"en-US",formatDistance:t2,formatLong:i2,formatRelative:o2,localize:p2,match:R2,options:{weekStartsOn:0,firstWeekContainsDate:1}};function P2(n,t){const e=et(n,t==null?void 0:t.in);return Kv(e,eb(e))+1}function sb(n,t){const e=et(n,t==null?void 0:t.in),s=+Oi(e)-+CD(e);return Math.round(s/Gv)+1}function ih(n,t){var d,h,f,m;const e=et(n,t==null?void 0:t.in),s=e.getFullYear(),i=Ks(),r=(t==null?void 0:t.firstWeekContainsDate)??((h=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??i.firstWeekContainsDate??((m=(f=i.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=Ht((t==null?void 0:t.in)||n,0);o.setFullYear(s+1,0,r),o.setHours(0,0,0,0);const a=un(o,t),c=Ht((t==null?void 0:t.in)||n,0);c.setFullYear(s,0,r),c.setHours(0,0,0,0);const l=un(c,t);return+e>=+a?s+1:+e>=+l?s:s-1}function D2(n,t){var a,c,l,d;const e=Ks(),s=(t==null?void 0:t.firstWeekContainsDate)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.firstWeekContainsDate)??e.firstWeekContainsDate??((d=(l=e.locale)==null?void 0:l.options)==null?void 0:d.firstWeekContainsDate)??1,i=ih(n,t),r=Ht((t==null?void 0:t.in)||n,0);return r.setFullYear(i,0,s),r.setHours(0,0,0,0),un(r,t)}function ib(n,t){const e=et(n,t==null?void 0:t.in),s=+un(e,t)-+D2(e,t);return Math.round(s/Gv)+1}function _t(n,t){const e=n<0?"-":"",s=Math.abs(n).toString().padStart(t,"0");return e+s}const Vn={y(n,t){const e=n.getFullYear(),s=e>0?e:1-e;return _t(t==="yy"?s%100:s,t.length)},M(n,t){const e=n.getMonth();return t==="M"?String(e+1):_t(e+1,2)},d(n,t){return _t(n.getDate(),t.length)},a(n,t){const e=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h(n,t){return _t(n.getHours()%12||12,t.length)},H(n,t){return _t(n.getHours(),t.length)},m(n,t){return _t(n.getMinutes(),t.length)},s(n,t){return _t(n.getSeconds(),t.length)},S(n,t){const e=t.length,s=n.getMilliseconds(),i=Math.trunc(s*Math.pow(10,e-3));return _t(i,t.length)}},ri={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},eg={G:function(n,t,e){const s=n.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(s,{width:"abbreviated"});case"GGGGG":return e.era(s,{width:"narrow"});case"GGGG":default:return e.era(s,{width:"wide"})}},y:function(n,t,e){if(t==="yo"){const s=n.getFullYear(),i=s>0?s:1-s;return e.ordinalNumber(i,{unit:"year"})}return Vn.y(n,t)},Y:function(n,t,e,s){const i=ih(n,s),r=i>0?i:1-i;if(t==="YY"){const o=r%100;return _t(o,2)}return t==="Yo"?e.ordinalNumber(r,{unit:"year"}):_t(r,t.length)},R:function(n,t){const e=Yv(n);return _t(e,t.length)},u:function(n,t){const e=n.getFullYear();return _t(e,t.length)},Q:function(n,t,e){const s=Math.ceil((n.getMonth()+1)/3);switch(t){case"Q":return String(s);case"QQ":return _t(s,2);case"Qo":return e.ordinalNumber(s,{unit:"quarter"});case"QQQ":return e.quarter(s,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(s,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(s,{width:"wide",context:"formatting"})}},q:function(n,t,e){const s=Math.ceil((n.getMonth()+1)/3);switch(t){case"q":return String(s);case"qq":return _t(s,2);case"qo":return e.ordinalNumber(s,{unit:"quarter"});case"qqq":return e.quarter(s,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(s,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(s,{width:"wide",context:"standalone"})}},M:function(n,t,e){const s=n.getMonth();switch(t){case"M":case"MM":return Vn.M(n,t);case"Mo":return e.ordinalNumber(s+1,{unit:"month"});case"MMM":return e.month(s,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(s,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(s,{width:"wide",context:"formatting"})}},L:function(n,t,e){const s=n.getMonth();switch(t){case"L":return String(s+1);case"LL":return _t(s+1,2);case"Lo":return e.ordinalNumber(s+1,{unit:"month"});case"LLL":return e.month(s,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(s,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(s,{width:"wide",context:"standalone"})}},w:function(n,t,e,s){const i=ib(n,s);return t==="wo"?e.ordinalNumber(i,{unit:"week"}):_t(i,t.length)},I:function(n,t,e){const s=sb(n);return t==="Io"?e.ordinalNumber(s,{unit:"week"}):_t(s,t.length)},d:function(n,t,e){return t==="do"?e.ordinalNumber(n.getDate(),{unit:"date"}):Vn.d(n,t)},D:function(n,t,e){const s=P2(n);return t==="Do"?e.ordinalNumber(s,{unit:"dayOfYear"}):_t(s,t.length)},E:function(n,t,e){const s=n.getDay();switch(t){case"E":case"EE":case"EEE":return e.day(s,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(s,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(s,{width:"short",context:"formatting"});case"EEEE":default:return e.day(s,{width:"wide",context:"formatting"})}},e:function(n,t,e,s){const i=n.getDay(),r=(i-s.weekStartsOn+8)%7||7;switch(t){case"e":return String(r);case"ee":return _t(r,2);case"eo":return e.ordinalNumber(r,{unit:"day"});case"eee":return e.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(i,{width:"short",context:"formatting"});case"eeee":default:return e.day(i,{width:"wide",context:"formatting"})}},c:function(n,t,e,s){const i=n.getDay(),r=(i-s.weekStartsOn+8)%7||7;switch(t){case"c":return String(r);case"cc":return _t(r,t.length);case"co":return e.ordinalNumber(r,{unit:"day"});case"ccc":return e.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(i,{width:"narrow",context:"standalone"});case"cccccc":return e.day(i,{width:"short",context:"standalone"});case"cccc":default:return e.day(i,{width:"wide",context:"standalone"})}},i:function(n,t,e){const s=n.getDay(),i=s===0?7:s;switch(t){case"i":return String(i);case"ii":return _t(i,t.length);case"io":return e.ordinalNumber(i,{unit:"day"});case"iii":return e.day(s,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(s,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(s,{width:"short",context:"formatting"});case"iiii":default:return e.day(s,{width:"wide",context:"formatting"})}},a:function(n,t,e){const i=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(n,t,e){const s=n.getHours();let i;switch(s===12?i=ri.noon:s===0?i=ri.midnight:i=s/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(n,t,e){const s=n.getHours();let i;switch(s>=17?i=ri.evening:s>=12?i=ri.afternoon:s>=4?i=ri.morning:i=ri.night,t){case"B":case"BB":case"BBB":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(n,t,e){if(t==="ho"){let s=n.getHours()%12;return s===0&&(s=12),e.ordinalNumber(s,{unit:"hour"})}return Vn.h(n,t)},H:function(n,t,e){return t==="Ho"?e.ordinalNumber(n.getHours(),{unit:"hour"}):Vn.H(n,t)},K:function(n,t,e){const s=n.getHours()%12;return t==="Ko"?e.ordinalNumber(s,{unit:"hour"}):_t(s,t.length)},k:function(n,t,e){let s=n.getHours();return s===0&&(s=24),t==="ko"?e.ordinalNumber(s,{unit:"hour"}):_t(s,t.length)},m:function(n,t,e){return t==="mo"?e.ordinalNumber(n.getMinutes(),{unit:"minute"}):Vn.m(n,t)},s:function(n,t,e){return t==="so"?e.ordinalNumber(n.getSeconds(),{unit:"second"}):Vn.s(n,t)},S:function(n,t){return Vn.S(n,t)},X:function(n,t,e){const s=n.getTimezoneOffset();if(s===0)return"Z";switch(t){case"X":return sg(s);case"XXXX":case"XX":return Ts(s);case"XXXXX":case"XXX":default:return Ts(s,":")}},x:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"x":return sg(s);case"xxxx":case"xx":return Ts(s);case"xxxxx":case"xxx":default:return Ts(s,":")}},O:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ng(s,":");case"OOOO":default:return"GMT"+Ts(s,":")}},z:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ng(s,":");case"zzzz":default:return"GMT"+Ts(s,":")}},t:function(n,t,e){const s=Math.trunc(+n/1e3);return _t(s,t.length)},T:function(n,t,e){return _t(+n,t.length)}};function ng(n,t=""){const e=n>0?"-":"+",s=Math.abs(n),i=Math.trunc(s/60),r=s%60;return r===0?e+String(i):e+String(i)+t+_t(r,2)}function sg(n,t){return n%60===0?(n>0?"-":"+")+_t(Math.abs(n)/60,2):Ts(n,t)}function Ts(n,t=""){const e=n>0?"-":"+",s=Math.abs(n),i=_t(Math.trunc(s/60),2),r=_t(s%60,2);return e+i+t+r}const ig=(n,t)=>{switch(n){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},rb=(n,t)=>{switch(n){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},M2=(n,t)=>{const e=n.match(/(P+)(p+)?/)||[],s=e[1],i=e[2];if(!i)return ig(n,t);let r;switch(s){case"P":r=t.dateTime({width:"short"});break;case"PP":r=t.dateTime({width:"medium"});break;case"PPP":r=t.dateTime({width:"long"});break;case"PPPP":default:r=t.dateTime({width:"full"});break}return r.replace("{{date}}",ig(s,t)).replace("{{time}}",rb(i,t))},Mu={p:rb,P:M2},O2=/^D+$/,N2=/^Y+$/,L2=["D","DD","YY","YYYY"];function ob(n){return O2.test(n)}function ab(n){return N2.test(n)}function Ou(n,t,e){const s=V2(n,t,e);if(console.warn(s),L2.includes(n))throw new RangeError(s)}function V2(n,t,e){const s=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${s} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const F2=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,$2=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,B2=/^'([^]*?)'?$/,U2=/''/g,j2=/[a-zA-Z]/;function z2(n,t,e){var d,h,f,m,g,y,v,T;const s=Ks(),i=(e==null?void 0:e.locale)??s.locale??nb,r=(e==null?void 0:e.firstWeekContainsDate)??((h=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??s.firstWeekContainsDate??((m=(f=s.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=(e==null?void 0:e.weekStartsOn)??((y=(g=e==null?void 0:e.locale)==null?void 0:g.options)==null?void 0:y.weekStartsOn)??s.weekStartsOn??((T=(v=s.locale)==null?void 0:v.options)==null?void 0:T.weekStartsOn)??0,a=et(n,e==null?void 0:e.in);if(!Qv(a))throw new RangeError("Invalid time value");let c=t.match($2).map(k=>{const C=k[0];if(C==="p"||C==="P"){const P=Mu[C];return P(k,i.formatLong)}return k}).join("").match(F2).map(k=>{if(k==="''")return{isToken:!1,value:"'"};const C=k[0];if(C==="'")return{isToken:!1,value:H2(k)};if(eg[C])return{isToken:!0,value:k};if(C.match(j2))throw new RangeError("Format string contains an unescaped latin alphabet character `"+C+"`");return{isToken:!1,value:k}});i.localize.preprocessor&&(c=i.localize.preprocessor(a,c));const l={firstWeekContainsDate:r,weekStartsOn:o,locale:i};return c.map(k=>{if(!k.isToken)return k.value;const C=k.value;(!(e!=null&&e.useAdditionalWeekYearTokens)&&ab(C)||!(e!=null&&e.useAdditionalDayOfYearTokens)&&ob(C))&&Ou(C,t,String(n));const P=eg[C[0]];return P(a,C,i.localize,l)}).join("")}function H2(n){const t=n.match(B2);return t?t[1].replace(U2,"'"):n}function q2(){return Object.assign({},Ks())}function W2(n,t){const e=et(n,t==null?void 0:t.in).getDay();return e===0?7:e}function G2(n,t){const e=Y2(t)?new t(0):Ht(t,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function Y2(n){var t;return typeof n=="function"&&((t=n.prototype)==null?void 0:t.constructor)===n}const K2=10;class cb{constructor(){N(this,"subPriority",0)}validate(t,e){return!0}}class Q2 extends cb{constructor(t,e,s,i,r){super(),this.value=t,this.validateValue=e,this.setValue=s,this.priority=i,r&&(this.subPriority=r)}validate(t,e){return this.validateValue(t,this.value,e)}set(t,e,s){return this.setValue(t,e,this.value,s)}}class X2 extends cb{constructor(e,s){super();N(this,"priority",K2);N(this,"subPriority",-1);this.context=e||(i=>Ht(s,i))}set(e,s){return s.timestampIsSet?e:Ht(e,G2(e,this.context))}}class gt{run(t,e,s,i){const r=this.parse(t,e,s,i);return r?{setter:new Q2(r.value,this.validate,this.set,this.priority,this.subPriority),rest:r.rest}:null}validate(t,e,s){return!0}}class J2 extends gt{constructor(){super(...arguments);N(this,"priority",140);N(this,"incompatibleTokens",["R","u","t","T"])}parse(e,s,i){switch(s){case"G":case"GG":case"GGG":return i.era(e,{width:"abbreviated"})||i.era(e,{width:"narrow"});case"GGGGG":return i.era(e,{width:"narrow"});case"GGGG":default:return i.era(e,{width:"wide"})||i.era(e,{width:"abbreviated"})||i.era(e,{width:"narrow"})}}set(e,s,i){return s.era=i,e.setFullYear(i,0,1),e.setHours(0,0,0,0),e}}const Yt={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Je={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Kt(n,t){return n&&{value:t(n.value),rest:n.rest}}function Lt(n,t){const e=t.match(n);return e?{value:parseInt(e[0],10),rest:t.slice(e[0].length)}:null}function Ze(n,t){const e=t.match(n);if(!e)return null;if(e[0]==="Z")return{value:0,rest:t.slice(1)};const s=e[1]==="+"?1:-1,i=e[2]?parseInt(e[2],10):0,r=e[3]?parseInt(e[3],10):0,o=e[5]?parseInt(e[5],10):0;return{value:s*(i*bo+r*vo+o*AD),rest:t.slice(e[0].length)}}function lb(n){return Lt(Yt.anyDigitsSigned,n)}function qt(n,t){switch(n){case 1:return Lt(Yt.singleDigit,t);case 2:return Lt(Yt.twoDigits,t);case 3:return Lt(Yt.threeDigits,t);case 4:return Lt(Yt.fourDigits,t);default:return Lt(new RegExp("^\\d{1,"+n+"}"),t)}}function ic(n,t){switch(n){case 1:return Lt(Yt.singleDigitSigned,t);case 2:return Lt(Yt.twoDigitsSigned,t);case 3:return Lt(Yt.threeDigitsSigned,t);case 4:return Lt(Yt.fourDigitsSigned,t);default:return Lt(new RegExp("^-?\\d{1,"+n+"}"),t)}}function rh(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function ub(n,t){const e=t>0,s=e?t:1-t;let i;if(s<=50)i=n||100;else{const r=s+50,o=Math.trunc(r/100)*100,a=n>=r%100;i=n+o-(a?100:0)}return e?i:1-i}function db(n){return n%400===0||n%4===0&&n%100!==0}class Z2 extends gt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(e,s,i){const r=o=>({year:o,isTwoDigitYear:s==="yy"});switch(s){case"y":return Kt(qt(4,e),r);case"yo":return Kt(i.ordinalNumber(e,{unit:"year"}),r);default:return Kt(qt(s.length,e),r)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,i){const r=e.getFullYear();if(i.isTwoDigitYear){const a=ub(i.year,r);return e.setFullYear(a,0,1),e.setHours(0,0,0,0),e}const o=!("era"in s)||s.era===1?i.year:1-i.year;return e.setFullYear(o,0,1),e.setHours(0,0,0,0),e}}class tM extends gt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(e,s,i){const r=o=>({year:o,isTwoDigitYear:s==="YY"});switch(s){case"Y":return Kt(qt(4,e),r);case"Yo":return Kt(i.ordinalNumber(e,{unit:"year"}),r);default:return Kt(qt(s.length,e),r)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,i,r){const o=ih(e,r);if(i.isTwoDigitYear){const c=ub(i.year,o);return e.setFullYear(c,0,r.firstWeekContainsDate),e.setHours(0,0,0,0),un(e,r)}const a=!("era"in s)||s.era===1?i.year:1-i.year;return e.setFullYear(a,0,r.firstWeekContainsDate),e.setHours(0,0,0,0),un(e,r)}}class eM extends gt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(e,s){return ic(s==="R"?4:s.length,e)}set(e,s,i){const r=Ht(e,0);return r.setFullYear(i,0,4),r.setHours(0,0,0,0),Oi(r)}}class nM extends gt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(e,s){return ic(s==="u"?4:s.length,e)}set(e,s,i){return e.setFullYear(i,0,1),e.setHours(0,0,0,0),e}}class sM extends gt{constructor(){super(...arguments);N(this,"priority",120);N(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,i){switch(s){case"Q":case"QQ":return qt(s.length,e);case"Qo":return i.ordinalNumber(e,{unit:"quarter"});case"QQQ":return i.quarter(e,{width:"abbreviated",context:"formatting"})||i.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return i.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return i.quarter(e,{width:"wide",context:"formatting"})||i.quarter(e,{width:"abbreviated",context:"formatting"})||i.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=1&&s<=4}set(e,s,i){return e.setMonth((i-1)*3,1),e.setHours(0,0,0,0),e}}class iM extends gt{constructor(){super(...arguments);N(this,"priority",120);N(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,i){switch(s){case"q":case"qq":return qt(s.length,e);case"qo":return i.ordinalNumber(e,{unit:"quarter"});case"qqq":return i.quarter(e,{width:"abbreviated",context:"standalone"})||i.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return i.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return i.quarter(e,{width:"wide",context:"standalone"})||i.quarter(e,{width:"abbreviated",context:"standalone"})||i.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=1&&s<=4}set(e,s,i){return e.setMonth((i-1)*3,1),e.setHours(0,0,0,0),e}}class rM extends gt{constructor(){super(...arguments);N(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);N(this,"priority",110)}parse(e,s,i){const r=o=>o-1;switch(s){case"M":return Kt(Lt(Yt.month,e),r);case"MM":return Kt(qt(2,e),r);case"Mo":return Kt(i.ordinalNumber(e,{unit:"month"}),r);case"MMM":return i.month(e,{width:"abbreviated",context:"formatting"})||i.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return i.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return i.month(e,{width:"wide",context:"formatting"})||i.month(e,{width:"abbreviated",context:"formatting"})||i.month(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=11}set(e,s,i){return e.setMonth(i,1),e.setHours(0,0,0,0),e}}class oM extends gt{constructor(){super(...arguments);N(this,"priority",110);N(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(e,s,i){const r=o=>o-1;switch(s){case"L":return Kt(Lt(Yt.month,e),r);case"LL":return Kt(qt(2,e),r);case"Lo":return Kt(i.ordinalNumber(e,{unit:"month"}),r);case"LLL":return i.month(e,{width:"abbreviated",context:"standalone"})||i.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return i.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return i.month(e,{width:"wide",context:"standalone"})||i.month(e,{width:"abbreviated",context:"standalone"})||i.month(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=11}set(e,s,i){return e.setMonth(i,1),e.setHours(0,0,0,0),e}}function aM(n,t,e){const s=et(n,e==null?void 0:e.in),i=ib(s,e)-t;return s.setDate(s.getDate()-i*7),et(s,e==null?void 0:e.in)}class cM extends gt{constructor(){super(...arguments);N(this,"priority",100);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(e,s,i){switch(s){case"w":return Lt(Yt.week,e);case"wo":return i.ordinalNumber(e,{unit:"week"});default:return qt(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,i,r){return un(aM(e,i,r),r)}}function lM(n,t,e){const s=et(n,e==null?void 0:e.in),i=sb(s,e)-t;return s.setDate(s.getDate()-i*7),s}class uM extends gt{constructor(){super(...arguments);N(this,"priority",100);N(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(e,s,i){switch(s){case"I":return Lt(Yt.week,e);case"Io":return i.ordinalNumber(e,{unit:"week"});default:return qt(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,i){return Oi(lM(e,i))}}const dM=[31,28,31,30,31,30,31,31,30,31,30,31],hM=[31,29,31,30,31,30,31,31,30,31,30,31];class fM extends gt{constructor(){super(...arguments);N(this,"priority",90);N(this,"subPriority",1);N(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(e,s,i){switch(s){case"d":return Lt(Yt.date,e);case"do":return i.ordinalNumber(e,{unit:"date"});default:return qt(s.length,e)}}validate(e,s){const i=e.getFullYear(),r=db(i),o=e.getMonth();return r?s>=1&&s<=hM[o]:s>=1&&s<=dM[o]}set(e,s,i){return e.setDate(i),e.setHours(0,0,0,0),e}}class pM extends gt{constructor(){super(...arguments);N(this,"priority",90);N(this,"subpriority",1);N(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(e,s,i){switch(s){case"D":case"DD":return Lt(Yt.dayOfYear,e);case"Do":return i.ordinalNumber(e,{unit:"date"});default:return qt(s.length,e)}}validate(e,s){const i=e.getFullYear();return db(i)?s>=1&&s<=366:s>=1&&s<=365}set(e,s,i){return e.setMonth(0,i),e.setHours(0,0,0,0),e}}function oh(n,t,e){var h,f,m,g;const s=Ks(),i=(e==null?void 0:e.weekStartsOn)??((f=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:f.weekStartsOn)??s.weekStartsOn??((g=(m=s.locale)==null?void 0:m.options)==null?void 0:g.weekStartsOn)??0,r=et(n,e==null?void 0:e.in),o=r.getDay(),c=(t%7+7)%7,l=7-i,d=t<0||t>6?t-(o+l)%7:(c+l)%7-(o+l)%7;return $c(r,d,e)}class mM extends gt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(e,s,i){switch(s){case"E":case"EE":case"EEE":return i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return i.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,i,r){return e=oh(e,i,r),e.setHours(0,0,0,0),e}}class gM extends gt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(e,s,i,r){const o=a=>{const c=Math.floor((a-1)/7)*7;return(a+r.weekStartsOn+6)%7+c};switch(s){case"e":case"ee":return Kt(qt(s.length,e),o);case"eo":return Kt(i.ordinalNumber(e,{unit:"day"}),o);case"eee":return i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"eeeee":return i.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,i,r){return e=oh(e,i,r),e.setHours(0,0,0,0),e}}class _M extends gt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(e,s,i,r){const o=a=>{const c=Math.floor((a-1)/7)*7;return(a+r.weekStartsOn+6)%7+c};switch(s){case"c":case"cc":return Kt(qt(s.length,e),o);case"co":return Kt(i.ordinalNumber(e,{unit:"day"}),o);case"ccc":return i.day(e,{width:"abbreviated",context:"standalone"})||i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"});case"ccccc":return i.day(e,{width:"narrow",context:"standalone"});case"cccccc":return i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return i.day(e,{width:"wide",context:"standalone"})||i.day(e,{width:"abbreviated",context:"standalone"})||i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=6}set(e,s,i,r){return e=oh(e,i,r),e.setHours(0,0,0,0),e}}function yM(n,t,e){const s=et(n,e==null?void 0:e.in),i=W2(s,e),r=t-i;return $c(s,r,e)}class vM extends gt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(e,s,i){const r=o=>o===0?7:o;switch(s){case"i":case"ii":return qt(s.length,e);case"io":return i.ordinalNumber(e,{unit:"day"});case"iii":return Kt(i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),r);case"iiiii":return Kt(i.day(e,{width:"narrow",context:"formatting"}),r);case"iiiiii":return Kt(i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),r);case"iiii":default:return Kt(i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),r)}}validate(e,s){return s>=1&&s<=7}set(e,s,i){return e=yM(e,i),e.setHours(0,0,0,0),e}}class bM extends gt{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(e,s,i){switch(s){case"a":case"aa":case"aaa":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,i){return e.setHours(rh(i),0,0,0),e}}class xM extends gt{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(e,s,i){switch(s){case"b":case"bb":case"bbb":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,i){return e.setHours(rh(i),0,0,0),e}}class wM extends gt{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["a","b","t","T"])}parse(e,s,i){switch(s){case"B":case"BB":case"BBB":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,i){return e.setHours(rh(i),0,0,0),e}}class EM extends gt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["H","K","k","t","T"])}parse(e,s,i){switch(s){case"h":return Lt(Yt.hour12h,e);case"ho":return i.ordinalNumber(e,{unit:"hour"});default:return qt(s.length,e)}}validate(e,s){return s>=1&&s<=12}set(e,s,i){const r=e.getHours()>=12;return r&&i<12?e.setHours(i+12,0,0,0):!r&&i===12?e.setHours(0,0,0,0):e.setHours(i,0,0,0),e}}class TM extends gt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(e,s,i){switch(s){case"H":return Lt(Yt.hour23h,e);case"Ho":return i.ordinalNumber(e,{unit:"hour"});default:return qt(s.length,e)}}validate(e,s){return s>=0&&s<=23}set(e,s,i){return e.setHours(i,0,0,0),e}}class IM extends gt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["h","H","k","t","T"])}parse(e,s,i){switch(s){case"K":return Lt(Yt.hour11h,e);case"Ko":return i.ordinalNumber(e,{unit:"hour"});default:return qt(s.length,e)}}validate(e,s){return s>=0&&s<=11}set(e,s,i){return e.getHours()>=12&&i<12?e.setHours(i+12,0,0,0):e.setHours(i,0,0,0),e}}class AM extends gt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(e,s,i){switch(s){case"k":return Lt(Yt.hour24h,e);case"ko":return i.ordinalNumber(e,{unit:"hour"});default:return qt(s.length,e)}}validate(e,s){return s>=1&&s<=24}set(e,s,i){const r=i<=24?i%24:i;return e.setHours(r,0,0,0),e}}class kM extends gt{constructor(){super(...arguments);N(this,"priority",60);N(this,"incompatibleTokens",["t","T"])}parse(e,s,i){switch(s){case"m":return Lt(Yt.minute,e);case"mo":return i.ordinalNumber(e,{unit:"minute"});default:return qt(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,i){return e.setMinutes(i,0,0),e}}class SM extends gt{constructor(){super(...arguments);N(this,"priority",50);N(this,"incompatibleTokens",["t","T"])}parse(e,s,i){switch(s){case"s":return Lt(Yt.second,e);case"so":return i.ordinalNumber(e,{unit:"second"});default:return qt(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,i){return e.setSeconds(i,0),e}}class CM extends gt{constructor(){super(...arguments);N(this,"priority",30);N(this,"incompatibleTokens",["t","T"])}parse(e,s){const i=r=>Math.trunc(r*Math.pow(10,-s.length+3));return Kt(qt(s.length,e),i)}set(e,s,i){return e.setMilliseconds(i),e}}class RM extends gt{constructor(){super(...arguments);N(this,"priority",10);N(this,"incompatibleTokens",["t","T","x"])}parse(e,s){switch(s){case"X":return Ze(Je.basicOptionalMinutes,e);case"XX":return Ze(Je.basic,e);case"XXXX":return Ze(Je.basicOptionalSeconds,e);case"XXXXX":return Ze(Je.extendedOptionalSeconds,e);case"XXX":default:return Ze(Je.extended,e)}}set(e,s,i){return s.timestampIsSet?e:Ht(e,e.getTime()-sc(e)-i)}}class PM extends gt{constructor(){super(...arguments);N(this,"priority",10);N(this,"incompatibleTokens",["t","T","X"])}parse(e,s){switch(s){case"x":return Ze(Je.basicOptionalMinutes,e);case"xx":return Ze(Je.basic,e);case"xxxx":return Ze(Je.basicOptionalSeconds,e);case"xxxxx":return Ze(Je.extendedOptionalSeconds,e);case"xxx":default:return Ze(Je.extended,e)}}set(e,s,i){return s.timestampIsSet?e:Ht(e,e.getTime()-sc(e)-i)}}class DM extends gt{constructor(){super(...arguments);N(this,"priority",40);N(this,"incompatibleTokens","*")}parse(e){return lb(e)}set(e,s,i){return[Ht(e,i*1e3),{timestampIsSet:!0}]}}class MM extends gt{constructor(){super(...arguments);N(this,"priority",20);N(this,"incompatibleTokens","*")}parse(e){return lb(e)}set(e,s,i){return[Ht(e,i),{timestampIsSet:!0}]}}const OM={G:new J2,y:new Z2,Y:new tM,R:new eM,u:new nM,Q:new sM,q:new iM,M:new rM,L:new oM,w:new cM,I:new uM,d:new fM,D:new pM,E:new mM,e:new gM,c:new _M,i:new vM,a:new bM,b:new xM,B:new wM,h:new EM,H:new TM,K:new IM,k:new AM,m:new kM,s:new SM,S:new CM,X:new RM,x:new PM,t:new DM,T:new MM},NM=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,LM=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,VM=/^'([^]*?)'?$/,FM=/''/g,$M=/\S/,BM=/[a-zA-Z]/;function UM(n,t,e,s){var v,T,k,C,P,M,D,w;const i=()=>Ht((s==null?void 0:s.in)||e,NaN),r=q2(),o=(s==null?void 0:s.locale)??r.locale??nb,a=(s==null?void 0:s.firstWeekContainsDate)??((T=(v=s==null?void 0:s.locale)==null?void 0:v.options)==null?void 0:T.firstWeekContainsDate)??r.firstWeekContainsDate??((C=(k=r.locale)==null?void 0:k.options)==null?void 0:C.firstWeekContainsDate)??1,c=(s==null?void 0:s.weekStartsOn)??((M=(P=s==null?void 0:s.locale)==null?void 0:P.options)==null?void 0:M.weekStartsOn)??r.weekStartsOn??((w=(D=r.locale)==null?void 0:D.options)==null?void 0:w.weekStartsOn)??0;if(!t)return n?i():et(e,s==null?void 0:s.in);const l={firstWeekContainsDate:a,weekStartsOn:c,locale:o},d=[new X2(s==null?void 0:s.in,e)],h=t.match(LM).map(b=>{const x=b[0];if(x in Mu){const A=Mu[x];return A(b,o.formatLong)}return b}).join("").match(NM),f=[];for(let b of h){!(s!=null&&s.useAdditionalWeekYearTokens)&&ab(b)&&Ou(b,t,n),!(s!=null&&s.useAdditionalDayOfYearTokens)&&ob(b)&&Ou(b,t,n);const x=b[0],A=OM[x];if(A){const{incompatibleTokens:S}=A;if(Array.isArray(S)){const I=f.find(U=>S.includes(U.token)||U.token===x);if(I)throw new RangeError(`The format string mustn't contain \`${I.fullToken}\` and \`${b}\` at the same time`)}else if(A.incompatibleTokens==="*"&&f.length>0)throw new RangeError(`The format string mustn't contain \`${b}\` and any other token at the same time`);f.push({token:x,fullToken:b});const R=A.run(n,b,o.match,l);if(!R)return i();d.push(R.setter),n=R.rest}else{if(x.match(BM))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");if(b==="''"?b="'":x==="'"&&(b=jM(b)),n.indexOf(b)===0)n=n.slice(b.length);else return i()}}if(n.length>0&&$M.test(n))return i();const m=d.map(b=>b.priority).sort((b,x)=>x-b).filter((b,x,A)=>A.indexOf(b)===x).map(b=>d.filter(x=>x.priority===b).sort((x,A)=>A.subPriority-x.subPriority)).map(b=>b[0]);let g=et(e,s==null?void 0:s.in);if(isNaN(+g))return i();const y={};for(const b of m){if(!b.validate(g,l))return i();const x=b.set(g,y,l);Array.isArray(x)?(g=x[0],Object.assign(y,x[1])):g=x}return g}function jM(n){return n.match(VM)[1].replace(FM,"'")}function zM(n,t){const e=et(n,t==null?void 0:t.in);return e.setMinutes(0,0,0),e}function HM(n,t){const e=et(n,t==null?void 0:t.in);return e.setSeconds(0,0),e}function qM(n,t){const e=et(n,t==null?void 0:t.in);return e.setMilliseconds(0),e}function WM(n,t){const e=()=>Ht(t==null?void 0:t.in,NaN),s=(t==null?void 0:t.additionalDigits)??2,i=QM(n);let r;if(i.date){const l=XM(i.date,s);r=JM(l.restDateString,l.year)}if(!r||isNaN(+r))return e();const o=+r;let a=0,c;if(i.time&&(a=ZM(i.time),isNaN(a)))return e();if(i.timezone){if(c=tO(i.timezone),isNaN(c))return e()}else{const l=new Date(o+a),d=et(0,t==null?void 0:t.in);return d.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),d.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),d}return et(o+a+c,t==null?void 0:t.in)}const aa={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},GM=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,YM=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,KM=/^([+-])(\d{2})(?::?(\d{2}))?$/;function QM(n){const t={},e=n.split(aa.dateTimeDelimiter);let s;if(e.length>2)return t;if(/:/.test(e[0])?s=e[0]:(t.date=e[0],s=e[1],aa.timeZoneDelimiter.test(t.date)&&(t.date=n.split(aa.timeZoneDelimiter)[0],s=n.substr(t.date.length,n.length))),s){const i=aa.timezone.exec(s);i?(t.time=s.replace(i[1],""),t.timezone=i[1]):t.time=s}return t}function XM(n,t){const e=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),s=n.match(e);if(!s)return{year:NaN,restDateString:""};const i=s[1]?parseInt(s[1]):null,r=s[2]?parseInt(s[2]):null;return{year:r===null?i:r*100,restDateString:n.slice((s[1]||s[2]).length)}}function JM(n,t){if(t===null)return new Date(NaN);const e=n.match(GM);if(!e)return new Date(NaN);const s=!!e[4],i=hr(e[1]),r=hr(e[2])-1,o=hr(e[3]),a=hr(e[4]),c=hr(e[5])-1;if(s)return rO(t,a,c)?eO(t,a,c):new Date(NaN);{const l=new Date(0);return!sO(t,r,o)||!iO(t,i)?new Date(NaN):(l.setUTCFullYear(t,r,Math.max(i,o)),l)}}function hr(n){return n?parseInt(n):1}function ZM(n){const t=n.match(YM);if(!t)return NaN;const e=$l(t[1]),s=$l(t[2]),i=$l(t[3]);return oO(e,s,i)?e*bo+s*vo+i*1e3:NaN}function $l(n){return n&&parseFloat(n.replace(",","."))||0}function tO(n){if(n==="Z")return 0;const t=n.match(KM);if(!t)return 0;const e=t[1]==="+"?-1:1,s=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return aO(s,i)?e*(s*bo+i*vo):NaN}function eO(n,t,e){const s=new Date(0);s.setUTCFullYear(n,0,4);const i=s.getUTCDay()||7,r=(t-1)*7+e+1-i;return s.setUTCDate(s.getUTCDate()+r),s}const nO=[31,null,31,30,31,30,31,31,30,31,30,31];function hb(n){return n%400===0||n%4===0&&n%100!==0}function sO(n,t,e){return t>=0&&t<=11&&e>=1&&e<=(nO[t]||(hb(n)?29:28))}function iO(n,t){return t>=1&&t<=(hb(n)?366:365)}function rO(n,t,e){return t>=1&&t<=53&&e>=0&&e<=6}function oO(n,t,e){return n===24?t===0&&e===0:e>=0&&e<60&&t>=0&&t<60&&n>=0&&n<25}function aO(n,t){return t>=0&&t<=59}/*!
 * chartjs-adapter-date-fns v3.0.0
 * https://www.chartjs.org
 * (c) 2022 chartjs-adapter-date-fns Contributors
 * Released under the MIT license
 */const cO={datetime:"MMM d, yyyy, h:mm:ss aaaa",millisecond:"h:mm:ss.SSS aaaa",second:"h:mm:ss aaaa",minute:"h:mm aaaa",hour:"ha",day:"MMM d",week:"PP",month:"MMM yyyy",quarter:"qqq - yyyy",year:"yyyy"};Av._date.override({_id:"date-fns",formats:function(){return cO},parse:function(n,t){if(n===null||typeof n>"u")return null;const e=typeof n;return e==="number"||n instanceof Date?n=et(n):e==="string"&&(typeof t=="string"?n=UM(n,t,new Date,this.options):n=WM(n,this.options)),Qv(n)?n.getTime():null},format:function(n,t){return z2(n,t,this.options)},add:function(n,t,e){switch(e){case"millisecond":return nh(n,t);case"second":return DD(n,t);case"minute":return RD(n,t);case"hour":return kD(n,t);case"day":return $c(n,t);case"week":return MD(n,t);case"month":return eh(n,t);case"quarter":return PD(n,t);case"year":return OD(n,t);default:return n}},diff:function(n,t,e){switch(e){case"millisecond":return sh(n,t);case"second":return jD(n,t);case"minute":return $D(n,t);case"hour":return FD(n,t);case"day":return Xv(n,t);case"week":return zD(n,t);case"month":return tb(n,t);case"quarter":return UD(n,t);case"year":return HD(n,t);default:return 0}},startOf:function(n,t,e){switch(t){case"second":return qM(n);case"minute":return HM(n);case"hour":return zM(n);case"day":return Du(n);case"week":return un(n);case"isoWeek":return un(n,{weekStartsOn:+e});case"month":return WD(n);case"quarter":return qD(n);case"year":return eb(n);default:return n}},endOf:function(n,t){switch(t){case"second":return JD(n);case"minute":return QD(n);case"hour":return YD(n);case"day":return Jv(n);case"week":return KD(n);case"month":return Zv(n);case"quarter":return XD(n);case"year":return GD(n);default:return n}}});const Bl="rgba(255,255,255,0.08)",ca="#a1a1aa",oi={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"},ie={renderEmpty:n=>{const t=document.getElementById(n);if(!t)return;const e=t.parentElement;if(!e)return;t.style.display="none";let s=e.querySelector(".chart-placeholder");s||(s=document.createElement("div"),s.className="chart-placeholder text-center text-sm text-text-muted py-6",e.appendChild(s)),s.textContent="Sem dados"},renderHorasNormaisExtras:(n,t={},e={})=>{const s=document.getElementById(n);if(!s)return;const i=Array.from(new Set([...Object.keys(t),...Object.keys(e)])).sort(),r=i.map(a=>t[a]||0),o=i.map(a=>e[a]||0);s.chart&&s.chart.destroy(),s.chart=new ht(s,{type:"bar",data:{labels:i.map(a=>{const c=new Date(a);return c.setHours(12,0,0,0),c.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}),datasets:[{label:"Horas Normais",data:r,backgroundColor:"#22c55e"},{label:"Horas Extras",data:o,backgroundColor:"#ef4444"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:"#e5e5e5",font:oi}}},scales:{x:{stacked:!0,grid:{display:!1},ticks:{color:ca,font:oi,maxRotation:45,autoSkip:!0}},y:{stacked:!0,grid:{color:Bl},ticks:{color:ca,font:oi},beginAtZero:!0}}}})},renderCurvaHoras:(n,t=[],e=[])=>{const s=document.getElementById(n);if(!s)return;s.chart&&s.chart.destroy();const i=[...t||[]].sort((a,c)=>new Date(a.x)-new Date(c.x)),r=[...e||[]].sort((a,c)=>new Date(a.x)-new Date(c.x)),o={id:"weekendShade",beforeDraw(a){const c=a.scales.x,l=a.ctx,d=c.min,h=c.max;if(!d||!h)return;const f=24*60*60*1e3;let m=d-(new Date(d).getDay()+7)%7*f;for(;m<=h+f*7;){const g=new Date(m),y=g.getDay();if(y===0||y===6){const v=c.getPixelForValue(g),T=c.getPixelForValue(new Date(m+f));l.save(),l.fillStyle="rgba(255,255,255,0.03)",l.fillRect(v,a.chartArea.top,T-v,a.chartArea.bottom-a.chartArea.top),l.restore()}m+=f}}};s.chart=new ht(s,{type:"line",data:{datasets:[{label:"Horas Planejadas",data:i,borderColor:"#22c55e",backgroundColor:"rgba(34,197,94,0.12)",fill:!0,tension:.3,borderWidth:2,pointRadius:0,parsing:{xAxisKey:"x",yAxisKey:"y"}},{label:"Horas Executadas",data:r,borderColor:"#ef4444",backgroundColor:"rgba(239,68,68,0.1)",fill:!0,tension:.3,borderWidth:3,pointRadius:3,parsing:{xAxisKey:"x",yAxisKey:"y"}}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"time",time:{unit:"day"},grid:{color:Bl},offset:!1,ticks:{source:"data",color:ca,font:oi,callback:a=>{const c=new Date(a),l=c.toLocaleDateString("en-US",{month:"short",day:"numeric"}),d=c.getDay();return d===1?`${l} (Mon)`:d===5?`${l} (Fri)`:l}}},y:{grid:{color:Bl},ticks:{color:ca,font:oi},beginAtZero:!0}},plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:oi,usePointStyle:!0}},weekendShade:!0}},plugins:[o]})}},eo=n=>n instanceof Date&&!isNaN(n),lO=(n,t)=>{const e=new Date(n),s=new Date(t);if(!eo(e)||!eo(s)||e>s)return[];const i=[];for(let r=new Date(e);r<=s;r.setDate(r.getDate()+1))i.push(new Date(r));return i},fb=n=>eo(n)?n.toISOString().split("T")[0]:null,pb=n=>{if(!(n!=null&&n.data_inicio)||!(n!=null&&n.data_prevista_fim))return[];const t=new Date(n.data_inicio),e=new Date(n.data_prevista_fim);if(!eo(t)||!eo(e)||t>e)return[];const s=lO(t,e),i=s.length?(n.orcamento||0)/s.length:0;let r=0;return s.map(o=>{r+=i;const a=fb(o);return a?{x:a,y:r}:null}).filter(Boolean)},mb=(n=[],t={},e=0,s=0,i={})=>{const r={};n.forEach(c=>{const l=c.data_recebimento||c.data_emissao||c.previsao_entrega||c.data_solicitacao;if(!l)return;const d=fb(new Date(l));if(!d)return;const h=Number(c.valor_total||c.valor_estimado||0);r[d]=(r[d]||0)+h}),Object.entries(t||{}).forEach(([c,l])=>{const d=Number(l)||0,h=Number(i==null?void 0:i[c])||0,m=Math.max(0,d-h)*e+(h*s||e);r[c]=(r[c]||0)+m});const o=Object.keys(r).sort();let a=0;return o.map(c=>(a+=r[c],{x:c,y:a}))},rc={create:async n=>(await $i(xt(K,"notificacoes"),{...n,lida:!1,created_at:new Date().toISOString()})).id,getByUser:async(n,t=10)=>{const e=ge(xt(K,"notificacoes"),Xt("userId","==",n),uu("created_at","desc"),fa(t));return(await yt(e)).docs.map(i=>({id:i.id,...i.data()}))},markAsRead:async n=>{await ln(ne(K,"notificacoes",n),{lida:!0,read_at:new Date().toISOString()})},markAllAsRead:async n=>{const t=ge(xt(K,"notificacoes"),Xt("userId","==",n),Xt("lida","==",!1)),s=(await yt(t)).docs.map(i=>ln(ne(K,"notificacoes",i.id),{lida:!0,read_at:new Date().toISOString()}));await Promise.all(s)},checkAndNotify:async()=>{const n=new Date;n.setDate(n.getDate()+3);const t=ge(xt(K,"compras"),Xt("status_compra","in",["Comprado","Em Trânsito"]),Xt("data_entrega_prevista","<=",n.toISOString())),e=await yt(t),s=[];for(const i of e.docs){const r=i.data(),o=Math.ceil((new Date(r.data_entrega_prevista)-new Date)/(1e3*60*60*24));o>=0&&o<=3&&s.push({userId:r.solicitante_id,tipo:"entrega_proxima",titulo:"Entrega Próxima",mensagem:`${r.descricao} - Entrega prevista em ${o} dia(s)`,link:`/compras/${i.id}`,prioridade:o===0?"alta":"normal"})}for(const i of s)await rc.create(i);return s.length}},fi={getCompras:async(n={})=>{let e=(await yt(xt(K,"compras"))).docs.map(k=>({id:k.id,...k.data()}));const{search:s="",status:i="",obra:r="",prioridade:o="",natureza:a="",cc:c="",dateStart:l="",dateEnd:d="",onlyDelayed:h=!1,fornecedor:f="",comprador:m=""}=n,g=s.toLowerCase(),y=l?new Date(l):null,v=d?new Date(d):null,T=new Date;return T.setHours(0,0,0,0),e=e.filter(k=>{if(g&&!(k.descricao_compra||k.descricao||"").toLowerCase().includes(g)||i&&k.status_compra!==i||r&&k.obraId!==r||o&&k.prioridade!==o||a&&(k.natureza_compra||"").trim()!==a||c&&k.centroCustoId!==c||f&&k.fornecedorId!==f||m&&k.compradorId!==m)return!1;const C=k.data_solicitacao?new Date(k.data_solicitacao):null;if(y&&C&&C<y||v&&C&&C>v)return!1;if(h){const P=k.previsao_entrega?new Date(k.previsao_entrega):k.data_entrega_prevista?new Date(k.data_entrega_prevista):null;if(!P||P>=T||k.status_compra==="Entregue"||k.status_compra==="Recebido")return!1}return!0}),e.sort((k,C)=>{const P=k.data_solicitacao||k.data_emissao||"";return(C.data_solicitacao||C.data_emissao||"").localeCompare(P)}),e},updateStatus:async(n,t)=>{const e=ne(K,"compras",n);await ln(e,{status_compra:t})},updateCompra:async(n,t)=>{const e=ne(K,"compras",n);await ln(e,t)},deleteCompra:async n=>{const t=ne(K,"compras",n);await G_(t)}},Nu={init:async()=>{var t,e,s,i;const n=bt.state.currentUser;if(n){ot.render(F.createLoader());try{let r="";if(n.role==="comprador"){const o=await pn.getCompradorStats();r=El.renderComprador(o),ot.render(r),Nu.bindRecentActions(),o.atrasos>0&&F.createToast(`Existem ${o.atrasos} pedidos em atraso.`,"warning")}else if(n.role==="obra"||n.role==="engenheiro"){let o=n.obraPadrao||null;if(!o){const c=await((t=pn.getObras)==null?void 0:t.call(pn));c&&c.length&&(o=c[0].id)}const a=await pn.getObraStats(o);r=El.renderObra(a),ot.render(r),a.atrasos>0&&F.createToast(`Esta obra tem ${a.atrasos} pedido(s) em atraso.`,"warning"),setTimeout(()=>{a.rdoData?(a.rdoData.horasPorDia?ie.renderHorasPorDia("chart-rdo-horas",a.rdoData.horasPorDia):ie.renderEmpty("chart-rdo-horas"),a.rdoData.horasPorFuncao?ie.renderHorasPorFuncao("chart-rdo-funcao",a.rdoData.horasPorFuncao):ie.renderEmpty("chart-rdo-funcao"),a.rdoData.funcionariosPorDia?ie.renderFuncionariosPorDia("chart-rdo-funcionarios",a.rdoData.funcionariosPorDia):ie.renderEmpty("chart-rdo-funcionarios")):(ie.renderEmpty("chart-rdo-horas"),ie.renderEmpty("chart-rdo-funcao"),ie.renderEmpty("chart-rdo-funcionarios"))},100)}else{const o=await pn.getDiretorStats(),a=await((e=pn.getObras)==null?void 0:e.call(pn))||await je.getObras(),c=o._allCompras||[],l=[],d=[];a.forEach(T=>{pb({data_inicio:T.data_inicio||T.data_prevista_inicio,data_prevista_fim:T.data_prevista_fim||T.data_fim,orcamento:T.orcamento||T.valor_orcado||0}).forEach(M=>l.push(M));const C=c.filter(M=>M.obraId===T.id);mb(C,{},0,0).forEach(M=>d.push(M))});const h=Array.from(new Set([...l.map(T=>T.x),...d.map(T=>T.x)])).sort();let f=0,m=0;const g=[],y=[],v=[];h.forEach(T=>{const k=l.filter(P=>P.x===T).map(P=>P.y).pop(),C=d.filter(P=>P.x===T).map(P=>P.y).pop();k!==void 0&&(f=k),C!==void 0&&(m=C),v.push(T),g.push(f),y.push(m)}),r=El.renderDiretor({...o,curvaS:{planejado:g,realizado:y,labels:v},obras:a}),ot.render(r),setTimeout(()=>{(g.length||y.length)&&lr.renderCurvaS("chart-curva",g,y,v),lr.renderStatusPie("chart-status",o.porStatus),o.naturezaTotais&&lr.renderNatureza("chart-natureza-dir",o.naturezaTotais),o.ccTotais&&lr.renderCentrosCusto("chart-cc-dir",o.ccTotais),o.gastosPorMes&&lr.renderGastosPorMes("chart-gastos-mes",o.gastosPorMes)},100),o.atrasos>0&&F.createToast(`Há ${o.atrasos} compras com previsão vencida.`,"warning"),((s=o.alerts)==null?void 0:s.sem_previsao)>0&&F.createToast(`${o.alerts.sem_previsao} pedidos sem previsão de entrega.`,"warning"),((i=o.alerts)==null?void 0:i.pendente_aprovacao)>0&&F.createToast(`${o.alerts.pendente_aprovacao} pedidos com aprovação pendente.`,"warning"),Nu._maybeNotify(o.alerts)}}catch(r){console.error(r),ot.render(`<div class="text-red-500 p-4">Erro ao carregar dashboard: ${r.message}</div>`)}}},bindRecentActions:()=>{document.querySelectorAll('[data-action="view"]').forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.id;t&&(window.location.hash=`/compras/${t}`)})}),document.querySelectorAll('[data-action="edit"]').forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.id;t&&(window.location.hash=`/compras/${t}/editar`)})}),document.querySelectorAll('[data-action="delete"]').forEach(n=>{n.addEventListener("click",async()=>{const t=n.dataset.id;if(t&&confirm("Confirma exclusão desta compra?"))try{await fi.deleteCompra(t),F.createToast("Compra excluída.");const e=n.closest("tr");e==null||e.remove()}catch(e){F.createToast("Erro ao excluir: "+e.message,"error")}})})},_maybeNotify:async(n={})=>{const t=bt.state.currentUser;if(!t)return;const e=new Date().toISOString().slice(0,10),s=async(i,r,o)=>{const a=`notif_${i}_${e}_${t.uid}`;localStorage.getItem(a)||(await rc.create({userId:t.uid,tipo:i,titulo:r,mensagem:o,link:"#/relatorios",prioridade:"normal"}),localStorage.setItem(a,"1"))};(n==null?void 0:n.atrasados)>0&&await s("atrasados","Pedidos atrasados",`${n.atrasados} pedido(s) com previsão vencida.`),(n==null?void 0:n.sem_previsao)>0&&await s("sem_previsao","Pedidos sem previsão",`${n.sem_previsao} pedido(s) sem data de entrega.`),(n==null?void 0:n.pendente_aprovacao)>0&&await s("pendente_aprovacao","Aprovação pendente",`${n.pendente_aprovacao} pedido(s) aguardando aprovação.`)}},uO=async n=>{if(!n)return{limiteReal:0,toleranciaPercentual:0,orcamento:0};const t=await Ba(ne(K,"obras",n));if(!t.exists())return{limiteReal:0,toleranciaPercentual:0,orcamento:0};const e=t.data(),s=Number(e.valor_orcado||e.orcamento||0),i=Number(e.tolerancia_percentual||0);return{limiteReal:s+s*i,toleranciaPercentual:i,orcamento:s}},rg=async(n,t,e)=>{const{limiteReal:s}=await uO(n),i=s>0&&t>s;if(i&&!e){const r=new Error("JUSTIFICATIVA_NECESSARIA");throw r.code="JUSTIFICATIVA_NECESSARIA",r}return{estouro_orcamento:i,status_aprovacao:i?"Pendente":"Aprovado"}},ai={checkDuplicidade:async(n,t)=>{const e=ge(xt(K,"compras"),Xt("obraId","==",n),Xt("status_compra","in",["Pendente","Em Cotação"])),s=await yt(e),i=t.toLowerCase();return s.docs.some(r=>{const o=r.data(),a=(o.descricao_compra||o.descricao||"").toLowerCase(),c=o.itens||[];return a.includes(i)||c.some(l=>(l.nome||"").toLowerCase().includes(i))})},uploadArquivo:(n,t,e)=>new Promise((s,i)=>{const r=UI(dS,t),o=$I(r,n);o.on("state_changed",a=>{const c=a.bytesTransferred/a.totalBytes*100;e&&e(c)},a=>i(a),async()=>{const a=await BI(o.snapshot.ref);s(a)})}),salvarCompra:async n=>{const t=Number(n.valor_total||0),e=n.justificativa_estouro_orcamento||n.justificativa||"",s=await rg(n.obraId,t,e),i={...n,descricao_compra:n.descricao_compra||n.descricao||"",valor_total:t,justificativa_estouro_orcamento:e||null,estouro_orcamento:s.estouro_orcamento,status_aprovacao:n.status_aprovacao||s.status_aprovacao,data_solicitacao:Vt.now().toDate().toISOString(),status_compra:n.status_compra||"Pendente",criado_em:Vt.now(),criado_por:n.criado_por||null};return i.nf_conferida&&(i.nf_conferida_em=i.nf_conferida_em||Vt.now(),i.nf_conferida_por=i.nf_conferida_por||i.criado_por||null),(await $i(xt(K,"compras"),i)).id},atualizarCompra:async(n,t)=>{const e=Number(t.valor_total||0),s=t.justificativa_estouro_orcamento||t.justificativa||"",i=await rg(t.obraId,e,s),r=ne(K,"compras",n);await ln(r,{...t,descricao_compra:t.descricao_compra||t.descricao||"",valor_total:e,justificativa_estouro_orcamento:s||null,estouro_orcamento:i.estouro_orcamento,status_aprovacao:t.status_aprovacao||i.status_aprovacao,nf_conferida_em:t.nf_conferida?t.nf_conferida_em||Vt.now():null,nf_conferida_por:t.nf_conferida&&(t.nf_conferida_por||t.criado_por)||null})},getCompra:async n=>{const t=await Ba(ne(K,"compras",n));return t.exists()?{id:t.id,...t.data()}:null}},og={renderForm:({obras:n=[],fornecedores:t=[],centros:e=[],compradores:s=[],compra:i=null}={})=>{const r=!!i,o=["Pendente","Em Cotação","Aprovado","Comprado","Entregue","Recebido","Cancelado"],a=["Aprovado","Pendente","Reprovado"],c=["Lista de Material inicial","Compra emergencial","Serviço","Transporte","Outros"],l=["Normal","Alta","Crítica"],d=v=>{if(!v)return"";const T=v!=null&&v.toDate?v.toDate():new Date(v);return Number.isNaN(T.getTime())?"":T.toISOString().split("T")[0]},h=v=>String(v??"").replace(/"/g,"&quot;"),f=(v,T)=>T?v.includes(T)?v:[T,...v]:v,m=f(c,i==null?void 0:i.natureza_compra),g=f(a,i==null?void 0:i.status_aprovacao),y=f(o,i==null?void 0:i.status_compra);return`
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
                                    ${n.map(v=>`
                                        <option value="${v.id}" ${(i==null?void 0:i.obraId)===v.id?"selected":""}>${v.nome_obra||v.apelido_obra||v.id}</option>
                                    `).join("")}
                                </select>
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Status</label>
                                <select id="status_compra" name="status_compra" class="input">
                                    ${y.map(v=>`<option value="${v}" ${(i==null?void 0:i.status_compra)===v?"selected":""}>${v}</option>`).join("")}
                                </select>
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Prioridade</label>
                                <select id="prioridade" name="prioridade" class="input">
                                    ${l.map(v=>`<option value="${v}" ${(i==null?void 0:i.prioridade)===v?"selected":""}>${v}</option>`).join("")}
                                </select>
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Natureza</label>
                                <select id="natureza_compra" name="natureza_compra" class="input">
                                    ${m.map(v=>`<option value="${v}" ${(i==null?void 0:i.natureza_compra)===v?"selected":""}>${v}</option>`).join("")}
                                </select>
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Status de Aprovação</label>
                                <select id="status_aprovacao" name="status_aprovacao" class="input">
                                    ${g.map(v=>`<option value="${v}" ${(i==null?void 0:i.status_aprovacao)===v?"selected":""}>${v}</option>`).join("")}
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
                                <input id="valor_total" name="valor_total" type="text" inputmode="decimal" data-type="currency" class="input" placeholder="0,00" value="${i?(i.valor_total??"").toString().replace(".",","):""}" required />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Fornecedor</label>
                                <select id="fornecedorId" name="fornecedorId" class="input">
                                    <option value="">Selecione...</option>
                                    ${t.map(v=>`
                                        <option value="${v.id}" data-name="${v.nome||v.empresa||""}" ${(i==null?void 0:i.fornecedorId)===v.id?"selected":""}>${v.nome||v.empresa||v.id}</option>
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
                                    ${e.map(v=>`
                                        <option value="${v.id}" ${(i==null?void 0:i.centroCustoId)===v.id?"selected":""}>${v.nome||v.codigo||v.id}</option>
                                    `).join("")}
                                </select>
                            </div>
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Comprador</label>
                                <select id="compradorId" name="compradorId" class="input">
                                    <option value="">Selecione...</option>
                                    ${s.map(v=>`
                                        <option value="${v.id}" ${(i==null?void 0:i.compradorId)===v.id?"selected":""}>${v.nome||v.email||v.id}</option>
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
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">CT-e (PDF)</label>
                                <input id="cte-upload" type="file" accept="application/pdf,image/*" class="input file:mr-2 file:px-3 file:py-2 file:border-0 file:bg-primary file:text-canvas">
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Comprovante / RC</label>
                                <input id="rc-upload" type="file" accept="application/pdf,image/*" class="input file:mr-2 file:px-3 file:py-2 file:border-0 file:bg-primary file:text-canvas">
                            </div>
                        </div>
                        <div id="drop-zone" class="border-2 border-dashed border-border rounded p-6 text-center cursor-pointer hover:border-primary transition-colors">
                            <p class="text-text-muted">Arquivos adicionais (clique ou arraste)</p>
                        </div>
                        <div id="file-list" class="space-y-2"></div>
                    </div>

                    <div class="flex justify-end gap-2">
                        ${F.createButton({id:"btn-submit",text:r?"Salvar Alterações":"Registrar Solicitação",type:"submit"})}
                        ${F.createButton({id:"btn-cancel",text:"Cancelar",variant:"secondary",onClick:"window.history.back()"})}
                    </div>
                </form>
            </div>
        `}},Ds={list:async()=>(await yt(xt(K,"centrosCusto"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await $i(xt(K,"centrosCusto"),n)},update:async(n,t)=>{await ln(ne(K,"centrosCusto",n),t)}},Ms={list:async()=>(await yt(xt(K,"compradores"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await $i(xt(K,"compradores"),n)},update:async(n,t)=>{await ln(ne(K,"compradores",n),t)}},Os={list:async()=>(await yt(xt(K,"fornecedores"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await $i(xt(K,"fornecedores"),n)},update:async(n,t)=>{await ln(ne(K,"fornecedores",n),t)}},oc={init:async()=>{ot.render(F.createLoader());try{const[n,t,e,s]=await Promise.all([yt(xt(K,"obras")),Os.list(),Ds.list(),Ms.list()]),i=n.docs.map(r=>({id:r.id,...r.data()}));ot.render(og.renderForm({obras:i,fornecedores:t,centros:e,compradores:s})),oc.bindEvents()}catch(n){console.error(n),ot.render(`<div class="text-red-500">Erro ao carregar formulário: ${n.message}</div>`)}},initEdit:async n=>{ot.render(F.createLoader());try{const[t,e,s,i,r]=await Promise.all([yt(xt(K,"obras")),Os.list(),Ds.list(),Ms.list(),ai.getCompra(n)]),o=t.docs.map(a=>({id:a.id,...a.data()}));ot.render(og.renderForm({obras:o,fornecedores:e,centros:s,compradores:i,compra:r})),oc.bindEvents(n,r,e)}catch(t){console.error(t),ot.render(`<div class="text-red-500">Erro ao carregar compra: ${t.message}</div>`)}},bindEvents:(n=null,t=null,e=[])=>{const s=document.getElementById("form-compra"),i=document.getElementById("file-upload"),r=document.getElementById("nf-upload"),o=document.getElementById("cte-upload"),a=document.getElementById("rc-upload"),c=document.getElementById("drop-zone"),l=document.getElementById("descricao_compra"),d=document.getElementById("obraId"),h=document.getElementById("status_compra"),f=document.getElementById("previsao_entrega"),m=document.getElementById("data_recebimento"),g=document.getElementById("data_emissao"),y=document.getElementById("retirada_estoque"),v=document.getElementById("fornecedorId");let T=[],k=null;const C=document.getElementById("valor_total");c.addEventListener("click",()=>i.click()),i.addEventListener("change",w=>P(w.target.files));const P=w=>{T=[...T,...Array.from(w)],M()},M=()=>{const w=document.getElementById("file-list");w.innerHTML=T.map((b,x)=>`
                <div class="flex items-center justify-between bg-surface border border-border p-2 rounded">
                    <span class="text-sm truncate text-text">${b.name}</span>
                    <button type="button" class="text-alert hover:text-alert/80" onclick="document.getElementById('form-compra').dispatchEvent(new CustomEvent('remove-file', {detail: ${x}}))">
                        ${F.createButton({text:"X",variant:"secondary",className:"px-2 py-0 text-xs"})}
                    </button>
                </div>
            `).join("")};s.addEventListener("remove-file",w=>{T.splice(w.detail,1),M()}),l==null||l.addEventListener("blur",async()=>{const w=d.value,b=l.value;w&&b.length>3&&await ai.checkDuplicidade(w,b)&&F.createToast("Atenção: Já existe um pedido similar para esta obra!","warning")}),C==null||C.addEventListener("input",w=>{let b=w.target.value;b=b.replace(/\D/g,""),b=(parseInt(b||0)/100).toFixed(2),b=b.replace(".",","),b=b.replace(/\B(?=(\d{3})+(?!\d))/g,"."),w.target.value=b}),C==null||C.addEventListener("blur",async()=>{const w=d==null?void 0:d.value,b=C.value,x=it.parseCurrency(b),A=document.getElementById("justificativa-container"),S=document.getElementById("justificativa");if(w&&x>0)try{const R=await yt(ge(xt(K,"obras"),Xt("__name__","==",w)));if(!R.empty){const I=R.docs[0].data(),U=Number(I.valor_orcado||I.orcamento||0),H=Number(I.tolerancia_percentual||0),X=U+U*H;X>0&&x>X?(A.classList.remove("hidden"),S.required=!0,F.createToast("Valor ultrapassa o orçamento da obra! Justificativa necessária.","warning")):(A.classList.add("hidden"),S.required=!1)}}catch(R){console.error("Erro ao validar orçamento:",R)}});const D=w=>{const b=new Date().toISOString().split("T")[0];if(w){if(h&&(h.value="Recebido"),g&&(g.value=b,g.readOnly=!0),v){k||(k=v.value);const x=Array.from(v.options).find(A=>{var R;return(((R=A.dataset)==null?void 0:R.name)||A.textContent||"").toLowerCase().includes("estoque axel")});x&&(v.value=x.value),v.disabled=!0}f&&(f.value=f.value||b,f.readOnly=!0),m&&(m.value=m.value||b,m.readOnly=!0),g&&!g.value&&(g.value=b)}else h&&h.value==="Recebido"&&!t&&(h.value="Pendente"),v&&(v.disabled=!1,k&&(v.value=k)),g&&(g.readOnly=!1),f&&(f.readOnly=!1),m&&(m.readOnly=!1)};if(t){if(s.obraId.value=t.obraId||"",s.prioridade&&(s.prioridade.value=t.prioridade||"Normal"),s.descricao_compra.value=t.descricao_compra||t.descricao||"",s.valor_total.value=it.formatCurrencyInput(t.valor_total||0),s.fornecedorId&&(s.fornecedorId.value=t.fornecedorId||""),s.data_emissao.value=(t.data_emissao||"").split("T")[0]||"",s.previsao_entrega.value=(t.previsao_entrega||"").split("T")[0]||"",s.data_recebimento.value=(t.data_recebimento||"").split("T")[0]||"",s.status_compra.value=t.status_compra||"Pendente",s.centroCustoId&&(s.centroCustoId.value=t.centroCustoId||""),s.natureza_compra&&(s.natureza_compra.value=t.natureza_compra||""),s.compradorId&&(s.compradorId.value=t.compradorId||""),s.numero_nf&&(s.numero_nf.value=t.numero_nf||""),s.status_aprovacao&&(s.status_aprovacao.value=t.status_aprovacao||"Aprovado"),s.nf_conferida&&(s.nf_conferida.checked=!!t.nf_conferida),t.justificativa_estouro_orcamento){const w=document.getElementById("justificativa-container"),b=document.getElementById("justificativa");w.classList.remove("hidden"),b.value=t.justificativa_estouro_orcamento}t.solicitante&&s.solicitante&&(s.solicitante.value=t.solicitante),s.retirada_estoque.checked=t.retirada_estoque===!0||t.retirada_estoque==="on"}y&&(D(y.checked),y.addEventListener("change",w=>D(w.target.checked))),C&&!C.value&&(C.value=it.formatCurrencyInput(0)),s.addEventListener("submit",async w=>{var x,A,S,R,I;w.preventDefault();const b=document.getElementById("btn-submit");try{b.disabled=!0,b.innerHTML=F.createLoader();const U=[];let H=(t==null?void 0:t.pdf_nf_path)||null,X=(t==null?void 0:t.pdf_cte_path)||null,nt=(t==null?void 0:t.comprovante_rc_path)||null;const ut=async(Et,we)=>{var ds;const Pe=(ds=Et==null?void 0:Et.files)==null?void 0:ds[0];return Pe?ai.uploadArquivo(Pe,`${we}/${Date.now()}_${Pe.name}`):null};H=await ut(r,"compras/nf")||H,X=await ut(o,"compras/cte")||X,nt=await ut(a,"compras/rc")||nt;for(const Et of T){const we=await ai.uploadArquivo(Et,`compras/${Date.now()}_${Et.name}`);U.push({nome:Et.name,url:we})}const st=new FormData(s),Ot=Object.fromEntries(st.entries()),Bt=it.parseCurrency(Ot.valor_total||0),kt=(Ot.justificativa||Ot.justificativa_estouro_orcamento||"").trim(),Y={...Ot,pdf_nf_path:H,pdf_cte_path:X,comprovante_rc_path:nt,descricao_compra:Ot.descricao_compra,solicitante:Ot.solicitante||((x=bt.state.currentUser)==null?void 0:x.nome)||((A=bt.state.currentUser)==null?void 0:A.email),anexos:U,valor_total:Bt,justificativa_estouro_orcamento:kt||null,criado_por:((S=bt.state.currentUser)==null?void 0:S.email)||null};Y.retirada_estoque=s.retirada_estoque.checked,Y.nf_conferida=((R=s.nf_conferida)==null?void 0:R.checked)||!1,Y.nf_conferida&&(Y.nf_conferida_por=((I=bt.state.currentUser)==null?void 0:I.email)||Y.criado_por||null,Y.nf_conferida_em=Y.nf_conferida_em||new Date().toISOString()),Y.status_compra||(Y.status_compra="Pendente"),Y.status_aprovacao||(Y.status_aprovacao="Aprovado"),["data_emissao","previsao_entrega","data_recebimento"].forEach(Et=>{Y[Et]===""&&delete Y[Et]}),n?(await ai.atualizarCompra(n,Y),F.createToast("Compra atualizada com sucesso!")):(await ai.salvarCompra(Y),F.createToast("Compra registrada com sucesso!")),It.navigate("/compras")}catch(U){console.error(U);const H=(U==null?void 0:U.code)==="JUSTIFICATIVA_NECESSARIA"?"Justificativa é obrigatória quando ultrapassa o orçamento da obra.":"Erro ao registrar: "+U.message;F.createToast(H,"error"),b.disabled=!1,b.innerHTML="<span>Registrar Solicitação</span>"}})}},Ul={renderControls:(n="table",t=[])=>`
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
                                <th class="px-6 py-3 text-right text-xs font-display text-text-muted uppercase tracking-wide">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-border">
                            ${n.map(e=>`
                                <tr class="hover:bg-canvas transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${it.formatDate(e.data_solicitacao||e.data_emissao)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-display text-text">${t.get(e.obraId)||e.obraId||"-"}</td>
                                    <td class="px-6 py-4 text-sm text-text max-w-xs truncate" title="${e.descricao_compra||e.descricao||""}">${e.descricao_compra||e.descricao||"-"}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${it.formatCurrency(e.valor_total??e.valor_estimado??0)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        ${it.renderStatusBadge(e.status_compra,e.previsao_entrega||e.data_entrega_prevista)}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div class="inline-flex items-center justify-end gap-2">
                                            <button class="text-text-muted hover:text-text inline-flex items-center" data-action="view" data-id="${e.id}" title="Ver">${Nt.eye}</button>
                                            <button class="text-primary hover:text-primary-strong inline-flex items-center" data-action="edit" data-id="${e.id}" title="Editar">${Nt.pencil}</button>
                                            <button class="text-alert hover:text-alert/80 inline-flex items-center" data-action="delete" data-id="${e.id}" title="Excluir">${Nt.trash}</button>
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
                                            <span class="text-xs text-text-muted">${it.formatDate(r.data_solicitacao)}</span>
                                        </div>
                                        <p class="text-sm font-display text-text mb-2 line-clamp-2">${r.descricao_compra||r.descricao||"-"}</p>
                                        <div class="flex justify-between items-center mt-3">
                                            <span class="text-sm font-display text-primary uppercase">${it.formatCurrency(r.valor_total??r.valor_estimado??0)}</span>
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
        `},B={currentView:"table",compras:[],filters:{},obras:[],fornecedores:[],compradores:[],centros:[],obraMap:new Map,fornecedorMap:new Map,compradorMap:new Map,centroMap:new Map,init:async()=>{await B.load(),await B.render()},decorateCompras:()=>{B.obraMap=new Map(B.obras.map(n=>[n.id,n.nome_obra||n.apelido_obra||n.id])),B.fornecedorMap=new Map(B.fornecedores.map(n=>[n.id,n.nome||n.empresa||n.id])),B.compradorMap=new Map(B.compradores.map(n=>[n.id,n.nome||n.email||n.id])),B.centroMap=new Map(B.centros.map(n=>[n.id,n.nome||n.codigo||n.id])),B.compras=B.compras.map(n=>{const t=Number(n.valor_total??n.valor_estimado??0);return{...n,valor_total:t,obraNome:B.obraMap.get(n.obraId)||n.obraId||"-",fornecedorNome:B.fornecedorMap.get(n.fornecedorId)||n.fornecedor||"",compradorNome:B.compradorMap.get(n.compradorId)||n.comprador||"",centroCustoNome:B.centroMap.get(n.centroCustoId)||n.centro_custo||n.centroCustoId||""}})},load:async()=>{const[n,t,e,s,i]=await Promise.all([fi.getCompras(),je.getObras(),Os.list(),Ms.list(),Ds.list()]);B.compras=n,B.obras=t,B.fornecedores=e,B.compradores=s,B.centros=i,B.decorateCompras()},render:async()=>{const n=document.createElement("div");n.innerHTML=Ul.renderControls(B.currentView,B.obras);const t=document.createElement("div");t.id="reports-content",t.innerHTML=B.currentView==="table"?Ul.renderTable(B.compras,B.obraMap):Ul.renderKanban(B.compras,B.obraMap),n.appendChild(t),ot.render(n.innerHTML),B.bindEvents()},applyFilters:async()=>{var g,y,v,T,k,C,P,M,D,w,b,x,A,S;const n=((g=document.getElementById("filter-search"))==null?void 0:g.value.toLowerCase())||"",t=((y=document.getElementById("filter-status"))==null?void 0:y.value)||"",e=((v=document.getElementById("filter-obra"))==null?void 0:v.value)||"",s=((T=document.getElementById("filter-prioridade"))==null?void 0:T.value)||"",i=((k=document.getElementById("filter-natureza"))==null?void 0:k.value)||"",r=((C=document.getElementById("filter-cc"))==null?void 0:C.value)||"",o=((P=document.getElementById("filter-fornecedor"))==null?void 0:P.value)||"",a=((M=document.getElementById("filter-comprador"))==null?void 0:M.value)||"",c=((D=document.getElementById("filter-status-aprov"))==null?void 0:D.value)||"",l=((w=document.getElementById("filter-nf-conferida"))==null?void 0:w.checked)||!1,d=((b=document.getElementById("filter-nf"))==null?void 0:b.value)||"",h=((x=document.getElementById("filter-date-start"))==null?void 0:x.value)||"",f=((A=document.getElementById("filter-date-end"))==null?void 0:A.value)||"",m=((S=document.getElementById("filter-only-delayed"))==null?void 0:S.checked)||!1;B.filters={search:n,status:t,obra:e,prioridade:s,natureza:i,cc:r,fornecedor:o,comprador:a,statusAprov:c,nfConferida:l,nf:d,dateStart:h,dateEnd:f,onlyDelayed:m},B.compras=await fi.getCompras(B.filters),B.decorateCompras(),B.render()},bindEvents:()=>{var a,c,l,d,h,f,m;const n=(g,y)=>{const v=document.getElementById(g);v&&(v.value=y??"")};n("filter-search",B.filters.search||""),n("filter-status",B.filters.status||""),n("filter-obra",B.filters.obra||""),n("filter-prioridade",B.filters.prioridade||""),n("filter-natureza",B.filters.natureza||""),n("filter-cc",B.filters.cc||""),n("filter-fornecedor",B.filters.fornecedor||""),n("filter-comprador",B.filters.comprador||""),n("filter-status-aprov",B.filters.statusAprov||""),n("filter-nf",B.filters.nf||""),n("filter-date-start",B.filters.dateStart||""),n("filter-date-end",B.filters.dateEnd||"");const t=document.getElementById("filter-only-delayed");t&&(t.checked=!!B.filters.onlyDelayed);const e=document.getElementById("filter-nf-conferida");e&&(e.checked=!!B.filters.nfConferida),(a=document.getElementById("view-table"))==null||a.addEventListener("click",()=>{B.currentView="table",B.render()}),(c=document.getElementById("view-kanban"))==null||c.addEventListener("click",()=>{B.currentView="kanban",B.render()});const s=document.getElementById("filter-natureza"),i=document.getElementById("filter-cc"),r=document.getElementById("filter-fornecedor"),o=document.getElementById("filter-comprador");if(s){const g=Array.from(new Set(B.compras.map(y=>(y.natureza_compra||"Outros").trim())));s.innerHTML='<option value="">Todas Naturezas</option>'+g.map(y=>`<option value="${y}">${y}</option>`).join("")}i&&(i.innerHTML='<option value="">Todos Centros de Custo</option>'+B.centros.map(g=>`<option value="${g.id}">${g.nome||g.codigo||g.id}</option>`).join("")),r&&(r.innerHTML='<option value="">Todos Fornecedores</option>'+B.fornecedores.map(g=>`<option value="${g.id}">${g.nome||g.empresa||g.id}</option>`).join("")),o&&(o.innerHTML='<option value="">Todos Compradores</option>'+B.compradores.map(g=>`<option value="${g.id}">${g.nome||g.id}</option>`).join("")),n("filter-natureza",B.filters.natureza||""),n("filter-cc",B.filters.cc||""),n("filter-fornecedor",B.filters.fornecedor||""),n("filter-comprador",B.filters.comprador||""),n("filter-status-aprov",B.filters.statusAprov||""),(l=document.getElementById("btn-apply-filters"))==null||l.addEventListener("click",()=>{B.applyFilters()}),(d=document.getElementById("btn-clear-filters"))==null||d.addEventListener("click",()=>{document.getElementById("filter-search").value="",document.getElementById("filter-status").value="",document.getElementById("filter-obra").value="",document.getElementById("filter-prioridade").value="",document.getElementById("filter-natureza").value="",document.getElementById("filter-cc").value="";const g=document.getElementById("filter-fornecedor"),y=document.getElementById("filter-comprador"),v=document.getElementById("filter-nf"),T=document.getElementById("filter-status-aprov");g&&(g.value=""),y&&(y.value=""),v&&(v.value=""),T&&(T.value=""),document.getElementById("filter-date-start").value="",document.getElementById("filter-date-end").value="",document.getElementById("filter-only-delayed").checked=!1;const k=document.getElementById("filter-nf-conferida");k&&(k.checked=!1),B.applyFilters()}),(h=document.getElementById("btn-export-csv"))==null||h.addEventListener("click",()=>{try{B.exportCsv()}catch(g){F.createToast("Erro ao exportar: "+g.message,"error")}}),(f=document.getElementById("btn-export-obra"))==null||f.addEventListener("click",()=>{try{B.exportGrouped("obra")}catch(g){F.createToast("Erro ao exportar: "+g.message,"error")}}),(m=document.getElementById("btn-export-fornecedor"))==null||m.addEventListener("click",()=>{try{B.exportGrouped("fornecedor")}catch(g){F.createToast("Erro ao exportar: "+g.message,"error")}}),document.querySelectorAll('[data-action="view"]').forEach(g=>{g.addEventListener("click",()=>{const y=g.dataset.id,v=B.compras.find(T=>T.id===y);if(!v)return alert("Compra não encontrada.");B.showModal(v,!1)})}),document.querySelectorAll('[data-action="edit"]').forEach(g=>{g.addEventListener("click",()=>{const y=g.dataset.id,v=B.compras.find(T=>T.id===y);if(!v)return alert("Compra não encontrada.");B.showModal(v,!0)})}),document.querySelectorAll('[data-action="delete"]').forEach(g=>{g.addEventListener("click",async()=>{const y=g.dataset.id;if(confirm("Confirmar exclusão da compra?"))try{await fi.deleteCompra(y),F.createToast("Compra excluída."),await B.load(),B.render()}catch(v){F.createToast("Erro ao excluir: "+v.message,"error")}})}),document.addEventListener("kanban-move-next",async g=>{const{id:y,current:v}=g.detail,T=["Pendente","Em Cotação","Aprovado","Comprado","Entregue"],k=T.indexOf(v)+1;if(k<T.length){const C=T[k];try{await fi.updateStatus(y,C),F.createToast(`Movido para ${C}`),await B.load(),B.render()}catch(P){F.createToast("Erro ao mover: "+P.message,"error")}}})},showModal:(n,t=!1)=>{var o,a,c;const e=document.createElement("div");e.className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4";const s=(l=[],d,h=f=>f.label)=>l.map(f=>{const m=f.value??f.id,g=h(f);return`<option value="${m}" ${d===m?"selected":""}>${g}</option>`}).join(""),i=(l,d)=>`
            <div>
                <label class="text-xs heading-muted uppercase">${l}</label>
                ${d}
            </div>
        `;e.innerHTML=`
            <div class="bg-surface border border-border rounded shadow-heavy w-full max-w-4xl">
                <div class="flex justify-between items-center px-4 py-3 border-b border-border">
                    <h3 class="text-lg font-display text-text">${t?"Editar Compra":"Detalhes da Compra"}</h3>
                    <button id="modal-close" class="text-text-muted hover:text-text">${Nt.close}</button>
                </div>
                <div class="p-4 space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${i("Obra",t?`<select id="modal-obra" class="input">
                                    ${s(B.obras,n.obraId,l=>l.nome_obra||l.apelido_obra||l.id)}
                                </select>`:`<p class="text-text">${n.obraNome||n.obraId||"-"}</p>`)}
                        ${i("Status",t?`<select id="modal-status" class="input">${["Pendente","Em Cotação","Aprovado","Comprado","Entregue","Recebido","Cancelado"].map(l=>`<option value="${l}" ${n.status_compra===l?"selected":""}>${l}</option>`).join("")}</select>`:`<p class="text-text">${n.status_compra||"-"}</p>`)}
                        ${i("Descrição",t?`<input id="modal-desc" class="input" value="${(n.descricao_compra||n.descricao||"").replace(/"/g,"&quot;")}">`:`<p class="text-text">${n.descricao_compra||n.descricao||"-"}</p>`)}
                        ${i("Valor",t?`<input id="modal-valor" type="number" step="0.01" class="input" value="${n.valor_total??n.valor_estimado??0}">`:`<p class="text-text">${it.formatCurrency(n.valor_total??n.valor_estimado??0)}</p>`)}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${i("Fornecedor",t?`<select id="modal-fornecedor" class="input"><option value="">Selecione...</option>${s(B.fornecedores,n.fornecedorId,l=>l.nome||l.empresa||l.id)}</select>`:`<p class="text-text">${n.fornecedorNome||n.fornecedor||"-"}</p>`)}
                        ${i("Comprador",t?`<select id="modal-comprador" class="input"><option value="">Selecione...</option>${s(B.compradores,n.compradorId,l=>l.nome||l.email||l.id)}</select>`:`<p class="text-text">${n.compradorNome||n.comprador||"-"}</p>`)}
                        ${i("Centro de Custo",t?`<select id="modal-cc" class="input"><option value="">Selecione...</option>${s(B.centros,n.centroCustoId,l=>l.nome||l.codigo||l.id)}</select>`:`<p class="text-text">${n.centroCustoNome||"-"}</p>`)}
                        ${i("Natureza",t?`<input id="modal-natureza" class="input" value="${(n.natureza_compra||"").replace(/"/g,"&quot;")}" />`:`<p class="text-text">${n.natureza_compra||"-"}</p>`)}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        ${i("Data Emissão",t?`<input id="modal-emissao" type="date" class="input" value="${(n.data_emissao||"").split("T")[0]}">`:`<p class="text-text">${it.formatDate(n.data_emissao)}</p>`)}
                        ${i("Prev. Entrega",t?`<input id="modal-prev" type="date" class="input" value="${(n.previsao_entrega||n.data_entrega_prevista||"").split("T")[0]}">`:`<p class="text-text">${it.formatDate(n.previsao_entrega||n.data_entrega_prevista)}</p>`)}
                        ${i("Recebimento",t?`<input id="modal-receb" type="date" class="input" value="${(n.data_recebimento||"").split("T")[0]}">`:`<p class="text-text">${it.formatDate(n.data_recebimento)}</p>`)}
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
        `,document.body.appendChild(e);const r=()=>e.remove();(o=e.querySelector("#modal-close"))==null||o.addEventListener("click",r),(a=e.querySelector("#modal-close-2"))==null||a.addEventListener("click",r),t&&((c=e.querySelector("#modal-save"))==null||c.addEventListener("click",async()=>{var d,h,f,m,g,y,v,T,k,C,P,M,D,w;const l={obraId:((d=e.querySelector("#modal-obra"))==null?void 0:d.value)||n.obraId,status_compra:((h=e.querySelector("#modal-status"))==null?void 0:h.value)||n.status_compra,descricao_compra:((f=e.querySelector("#modal-desc"))==null?void 0:f.value)||"",valor_total:Number(((m=e.querySelector("#modal-valor"))==null?void 0:m.value)||0),fornecedorId:((g=e.querySelector("#modal-fornecedor"))==null?void 0:g.value)||"",compradorId:((y=e.querySelector("#modal-comprador"))==null?void 0:y.value)||"",centroCustoId:((v=e.querySelector("#modal-cc"))==null?void 0:v.value)||"",natureza_compra:((T=e.querySelector("#modal-natureza"))==null?void 0:T.value)||"",numero_nf:((k=e.querySelector("#modal-nf"))==null?void 0:k.value)||"",status_aprovacao:((C=e.querySelector("#modal-aprov"))==null?void 0:C.value)||n.status_aprovacao,data_emissao:((P=e.querySelector("#modal-emissao"))==null?void 0:P.value)||"",previsao_entrega:((M=e.querySelector("#modal-prev"))==null?void 0:M.value)||"",data_recebimento:((D=e.querySelector("#modal-receb"))==null?void 0:D.value)||"",nf_conferida:((w=e.querySelector("#modal-nf-conferida"))==null?void 0:w.checked)||!1};["data_emissao","previsao_entrega","data_recebimento"].forEach(b=>{l[b]===""&&delete l[b]});try{await fi.updateCompra(n.id,l),r(),await B.load(),B.render(),F.createToast("Compra atualizada.")}catch(b){alert("Erro ao salvar: "+b.message)}}))},exportCsv:()=>{if(!B.compras.length){F.createToast("Sem dados para exportar.","warning");return}const n=new Map(B.obras.map(d=>[d.id,d.nome_obra||d.apelido_obra||d.id])),t=new Map(B.fornecedores.map(d=>[d.id,d.nome||d.empresa||d.id])),e=new Map(B.compradores.map(d=>[d.id,d.nome||d.id])),s=new Map(B.centros.map(d=>[d.id,d.nome||d.codigo||d.id])),i=["Obra","NF-e","Valor","Data Emissao","Status","Data Recebimento","Prev. Entrega","Natureza","Centro Custo","Comprador","Fornecedor","Justificativa Estouro","Status Aprovacao"],r=B.compras.map(d=>[`"${n.get(d.obraId)||d.obraId||""}"`,`"${d.numero_nf||""}"`,String(d.valor_total||d.valor_estimado||0).replace(".",","),d.data_emissao||"",d.status_compra||"",d.data_recebimento||"",d.previsao_entrega||d.data_entrega_prevista||"",d.natureza_compra||"",s.get(d.centroCustoId)||d.centroCustoNome||d.centro_custo||d.centroCustoId||"",e.get(d.compradorId)||d.comprador||"",t.get(d.fornecedorId)||d.fornecedor||"",(d.justificativa_estouro_orcamento||"").replace(/"/g,"'"),d.status_aprovacao||""]);let o="\uFEFF"+i.join(";")+`
`;o+=r.map(d=>d.join(";")).join(`
`);const a=new Blob([o],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(a),l=document.createElement("a");l.href=c,l.download=`compras_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(c)}},ag={getUsers:async()=>(await yt(xt(K,"usuarios"))).docs.map(t=>({id:t.id,...t.data()})),updateUser:async(n,t)=>{await ln(ne(K,"usuarios",n),t)},createUserProfile:async(n,t)=>{await CT(ne(K,"usuarios",n),t)}},dO={render:n=>`
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
        `},hO=n=>(Array.isArray(n)?n:[n]).filter(Boolean),Is={hasRole:(n,t=bt.state.currentUser)=>{const e=hO(n);return!t||!e.length?!1:t.role==="administrador"?!0:e.includes(t.role)},guard:(n,t)=>{if(!Is.hasRole(n)){const e=new Error("Acesso negado para esta ação.");throw e.code="PERMISSION_DENIED",e}return t()},canEditObra:n=>Is.hasRole(["diretor","comprador","obra"],n),canDeleteObra:n=>Is.hasRole(["diretor"],n),canEditCompra:n=>Is.hasRole(["diretor","comprador"],n),canApproveCompra:n=>Is.hasRole(["diretor","financeiro"],n),canEditCadastros:n=>Is.hasRole(["diretor"],n)},Lu={init:async()=>{ot.render(F.createLoader());try{Is.guard(["administrador","diretor"],async()=>{const n=await ag.getUsers();ot.render(dO.render(n)),Lu.bindEvents()})}catch(n){ot.render(`<div class="text-red-500">Erro: ${n.message}</div>`)}},bindEvents:()=>{document.addEventListener("edit-user",n=>{const t=n.detail,e=prompt("Nova função (comprador, obra, diretor, administrador):");e&&ag.updateUser(t,{role:e}).then(()=>{F.createToast("Usuário atualizado!"),Lu.init()}).catch(s=>F.createToast("Erro: "+s.message,"error"))})}};let Be=new Date().getMonth(),bs=new Date().getFullYear();const gi={setMonth:(n,t)=>{Be=n,bs=t},changeMonth:n=>{Be+=n,Be<0&&(Be=11,bs-=1),Be>11&&(Be=0,bs+=1)},render:(n=[])=>{const t=new Date,e={};n.forEach(l=>{const d=l.previsao_entrega||l.data_entrega_prevista;if(d){const h=new Date(d);if(Number.isNaN(h.getTime()))return;const f=h.toISOString().split("T")[0];e[f]||(e[f]=[]),e[f].push(l)}});const s=new Date(bs,Be,1),r=new Date(bs,Be+1,0).getDate(),o=s.getDay();let c=`
            <div class="card">
                <div class="flex justify-between items-center mb-4">
                    <button id="cal-prev" class="text-text-muted hover:text-text px-2 py-1 border border-border rounded">&larr;</button>
                    <h3 class="text-lg font-display text-text">Calendário de Entregas - ${["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][Be]} ${bs}</h3>
                    <button id="cal-next" class="text-text-muted hover:text-text px-2 py-1 border border-border rounded">&rarr;</button>
                </div>
                
                <div class="grid grid-cols-7 gap-2">
                    ${["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].map(l=>`<div class="text-center text-xs font-display text-text-muted uppercase tracking-wide py-2">${l}</div>`).join("")}
        `;for(let l=0;l<o;l++)c+='<div class="aspect-square"></div>';for(let l=1;l<=r;l++){const d=new Date(bs,Be,l),h=d.toISOString().split("T")[0],f=e[h]||[],m=l===t.getDate()&&Be===t.getMonth(),g=d<t&&!m;c+=`
                <div class="aspect-square border border-border rounded p-1 ${m?"bg-primary/10 border-primary":"bg-surface"} ${g?"opacity-50":""} hover:bg-canvas transition-colors cursor-pointer">
                    <div class="text-xs font-display ${m?"text-primary font-bold":"text-text"}">${l}</div>
                    ${f.length>0?`
                        <div class="mt-1 space-y-1">
                            ${f.slice(0,2).map(y=>`
                                <div class="text-[10px] bg-primary/20 border border-primary rounded px-1 truncate" title="${y.descricao_compra||y.descricao||"Compra"}">
                                    ${(y.descricao_compra||y.descricao||"Compra").substring(0,15)}
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
                    `:t.map(e=>{const s=new Date(e.previsao_entrega||e.data_entrega_prevista),i=Math.ceil((s-new Date)/(1e3*60*60*24)),r=i<=3;return`
                            <div class="flex items-start gap-3 p-3 rounded border ${r?"border-alert bg-alert/5":"border-border bg-surface"} hover:bg-canvas transition-colors">
                                <div class="flex-shrink-0 w-12 text-center">
                                    <div class="text-xs font-display text-text-muted uppercase">${s.toLocaleDateString("pt-BR",{month:"short"})}</div>
                                    <div class="text-2xl font-display ${r?"text-alert":"text-primary"}">${s.getDate()}</div>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-display text-text truncate">${e.descricao_compra||e.descricao||"Compra"}</p>
                                    <p class="text-xs text-text-muted mt-1">
                                        ${e.fornecedorNome||e.fornecedor||"Fornecedor não definido"} • ${e.status_compra||""}
                                    </p>
                                    ${r?`<p class="text-xs text-alert mt-1 font-display uppercase">⚠️ Entrega em ${i} dia(s)</p>`:""}
                                </div>
                            </div>
                        `}).join("")}
                </div>
            </div>
        `}},jl={renderList:n=>`
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
                                ${t.valor_orcado?`<p class="heading-muted"><span class="text-text">Orçamento:</span> ${it.formatCurrency(t.valor_orcado)}</p>`:""}
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
        `},renderDashboard:(n,t)=>{var e,s,i,r,o,a,c,l;return`
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
                    ${F.createCard({title:"Total Gasto",content:`<p class="text-4xl font-display text-text uppercase">${it.formatCurrency(t.totalGasto)}</p><p class="text-sm heading-muted mt-1">Orçamento: ${it.formatCurrency(n.valor_orcado||0)}</p>`})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${t.atrasos||0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(t.sla||0)<80?"alert":"primary"} uppercase">${(t.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Entregues no prazo</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(t.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia vs Orçamento",content:`<p class="text-4xl font-display text-${(t.economia||0)<0?"alert":"primary"} uppercase">${it.formatCurrency(t.economia||0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(t.curvaPercent||0).toFixed(1)}%</p>`})}
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
                                                    <td class="px-4 py-2 text-sm text-text text-right">${it.formatCurrency(m.valor)}</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right">${d?(m.valor/d*100).toFixed(1):"0.0"}%</td>
                                                </tr>
                                            `).join(""),f=`
                                            <tr class="bg-canvas">
                                                <td class="px-4 py-2 text-sm font-display text-text">Total</td>
                                                <td class="px-4 py-2 text-sm font-display text-text text-right">${it.formatCurrency(d)}</td>
                                                <td class="px-4 py-2 text-sm font-display text-text text-right">100%</td>
                                            </tr>`;return!h||h.trim().length===0?'<tr><td colspan="3" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>':h+f})()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div id="calendar-wrapper" class="lg:col-span-2">
                        ${gi.render(t.comprasCalendar||t.comprasRecentes)}
                    </div>
                    <div id="timeline-wrapper">
                        ${gi.renderTimeline(t.comprasCalendar||t.comprasRecentes)}
                    </div>
                </div>

                <div class="space-y-6">
                    <h3 class="text-xl font-display text-text tracking-wide">Análise de Mão de Obra (RDO)</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-6 gap-6">
                        ${F.createCard({title:"Total de Horas",content:`<p id="kpi-rdo-total" class="text-4xl font-display text-primary uppercase">${(((e=t.rdoData)==null?void 0:e.totalHoras)||0).toFixed(0)}</p>`,className:"accent-left"})}
                        ${F.createCard({title:"Média Horas/Dia",content:`<p id="kpi-rdo-media-dia" class="text-4xl font-display text-text uppercase">${(((s=t.rdoData)==null?void 0:s.mediaHorasDia)||0).toFixed(1)}</p>`})}
                        ${F.createCard({title:"Total Funcionários",content:`<p id="kpi-rdo-func" class="text-4xl font-display text-text uppercase">${((i=t.rdoData)==null?void 0:i.totalFuncionarios)||0}</p>`})}
                        ${F.createCard({title:"Média Func./Dia",content:`<p id="kpi-rdo-media-func-dia" class="text-4xl font-display text-text uppercase">${(((r=t.rdoData)==null?void 0:r.mediaFuncionariosDia)||0).toFixed(1)}</p>`})}
                        ${F.createCard({title:"Horas Orçadas",content:`<p id="kpi-rdo-orcadas" class="text-4xl font-display text-text uppercase">${(Number(n.horas_previstas||0)+1.5*Number(n.horas_extras_previstas||0)).toFixed(1)}</p>`})}
                        ${F.createCard({title:"Horas Extras Gastas",content:`<p id="kpi-rdo-extras" class="text-4xl font-display text-alert uppercase">${(((o=t.rdoData)==null?void 0:o.totalExtras)||0).toFixed(1)}</p>`})}
                        ${F.createCard({title:"Saldo de Horas",content:`<p id="kpi-rdo-saldo" class="text-4xl font-display text-text uppercase">${(Number(n.horas_previstas||0)+Number(n.horas_extras_previstas||0)-Number((((a=t.rdoData)==null?void 0:a.totalHoras)||0)+(((c=t.rdoData)==null?void 0:c.totalExtras)||0))).toFixed(1)}</p>`})}
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

                    <div class="card">
                        <h3 class="text-lg font-display text-text mb-4">Relatórios RDO</h3>
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-border">
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
                                        <td class="px-6 py-4 text-sm text-text-muted">${it.formatDate(d.data_solicitacao||d.data_emissao)}</td>
                                        <td class="px-6 py-4 text-sm text-text" title="${d.descricao_compra||d.descricao||"-"}">${d.descricao_compra||d.descricao||"-"}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${it.formatCurrency(d.valor_total??d.valor_estimado??0)}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${it.formatDate(d.previsao_entrega||d.data_entrega_prevista)}</td>
                                        <td class="px-6 py-4 text-sm text-text">${d.compradorNome||d.comprador||d.compradorId||"-"}</td>
                                        <td class="px-6 py-4 text-sm">
                                            ${it.renderStatusBadge(d.status_compra,d.previsao_entrega||d.data_entrega_prevista)}
                                        </td>
                                        <td class="px-6 py-4 text-sm text-right">
                                            ${d.id?`
                                                <div class="flex items-center justify-end gap-2">
                                                    <button class="text-text-muted hover:text-text" data-action="view-compra" data-id="${d.id}" title="Ver compra">${Nt.eye}</button>
                                                    <button class="text-primary hover:text-primary-strong" data-action="edit-compra" data-id="${d.id}" title="Editar compra">${Nt.pencil}</button>
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
        `}},Fn="rgba(255,255,255,0.08)",Ke="#a1a1aa",fe={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};ht.defaults.color="#e5e5e5";ht.defaults.font.family=fe.family;ht.defaults.font.weight=fe.weight;const fO=n=>{ht.defaults.color=n?"#0b0b0b":"#e5e5e5",ht.defaults.plugins.legend.labels.color=ht.defaults.color,ht.defaults.scales=ht.defaults.scales||{}},pO={id:"percentLabels",afterDraw(n){if(n.config.type!=="doughnut")return;const{ctx:t}=n;n.data.datasets.forEach(e=>{const s=n.getDatasetMeta(0),i=e.data.reduce((r,o)=>r+o,0);s.data.forEach((r,o)=>{const a=e.data[o];if(!a||!i)return;const c=`${(a/i*100).toFixed(1)}%`;t.save(),t.fillStyle="#e5e5e5",t.font="600 11px "+fe.family,t.textAlign="center",t.textBaseline="middle";const l=r.tooltipPosition();t.fillText(c,l.x,l.y),t.restore()})})}};ht.register(pO);const ci={renderCategorias:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Fn},ticks:{color:Ke,font:fe}},y:{grid:{color:Fn},ticks:{color:Ke,font:fe}}}}})},renderStatusObra:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:10},plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:fe,padding:12,usePointStyle:!0}},tooltip:{callbacks:{label:r=>{const o=r.dataset.data.reduce((c,l)=>c+l,0),a=o?(r.parsed/o*100).toFixed(1):0;return`${r.label}: ${a}% (${r.parsed})`}}}},cutout:"65%",pluginsCustom:!0}})},renderCentrosCusto:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"bar",data:{labels:s,datasets:[{data:i,backgroundColor:"#22c55e",borderRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Fn},ticks:{color:Ke,font:fe,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0},y:{grid:{display:!1},ticks:{color:Ke,font:fe,autoSkip:!1}}},indexAxis:"y"}})},renderFinancePVAV:(n,t=[],e=[])=>{const s=document.getElementById(n);s&&(s.chart&&s.chart.destroy(),s.chart=new ht(s,{type:"line",data:{datasets:[{label:"Planejado (PV)",data:t,borderColor:"#16a34a",backgroundColor:"rgba(34,197,94,0.12)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}},{label:"Real (AV)",data:e,borderColor:"#ef4444",backgroundColor:"rgba(239,68,68,0.08)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"time",time:{unit:"day"},grid:{color:Fn},ticks:{color:Ke}},y:{grid:{color:Fn},ticks:{color:Ke,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}},plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:fe,usePointStyle:!0}}}}}))},renderCurvaS:(n,t=[],e=[],s=[])=>{const i=document.getElementById(n);i&&(i.chart&&i.chart.destroy(),i.chart=new ht(i,{type:"line",data:{labels:t.length?t:e.map((r,o)=>`Semana ${o+1}`),datasets:[{label:"Planejado",data:e,borderColor:"#a1a1aa",backgroundColor:"transparent",borderWidth:2,borderDash:[5,5],tension:.4,pointRadius:0},{label:"Realizado",data:s,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.1)",borderWidth:3,tension:.4,fill:!0,pointRadius:4,pointBackgroundColor:"#22c55e",pointBorderColor:"#121212",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"top",labels:{color:"#e5e5e5",font:fe,usePointStyle:!0}},tooltip:{backgroundColor:"#1c1c1e",titleColor:"#e5e5e5",bodyColor:"#a1a1aa",borderColor:"#333333",borderWidth:1,titleFont:fe,bodyFont:fe}},scales:{x:{grid:{color:Fn},ticks:{color:Ke,font:fe}},y:{grid:{color:Fn},ticks:{color:Ke,font:fe,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}}}}))},renderGastosMensais:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new ht(e,{type:"line",data:{labels:s.map(r=>{const o=new Date(r);return Number.isNaN(o.getTime())?r:o.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}),datasets:[{label:"Gastos Diários",data:i,borderColor:"#22c55e",backgroundColor:"rgba(34,197,94,0.1)",borderWidth:2,tension:.3,fill:!0,pointRadius:3,pointBackgroundColor:"#22c55e"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{type:"category",grid:{display:!1},ticks:{color:Ke,font:fe,maxRotation:45,autoSkip:!0,maxTicksLimit:10}},y:{grid:{color:Fn},ticks:{color:Ke,font:fe,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}}}})}},gb=lS(),cg=gb.BASE_URL||"https://apiexterna.diariodeobra.app/v1",mO=()=>{const n=gb.TOKEN||(typeof window<"u"?window.__RDO_API_TOKEN:"");if(n)return n;try{const t=localStorage.getItem("axel_rdo_token");if(t)return t}catch{}return""};async function zl(n,t={}){const e=mO();if(!e)return console.warn("[RDO] Token não encontrado; defina __RDO_API_CONFIG.TOKEN ou localStorage.axel_rdo_token"),null;const s={...t.headers,token:e,"Content-Type":"application/json"},i=await fetch(`${cg}${n}`,{...t,headers:s});if(console.info("[RDO] Request:",`${cg}${n}`,"status:",i.status),!i.ok)return console.warn(`Erro na API RDO ao acessar ${n}: ${i.status} ${i.statusText}`),null;const r=await i.json();return console.info("[RDO] Response data size:",Array.isArray(r)?r.length:Object.keys(r||{}).length),r}const wi={getObraByOs:async n=>{const t=await zl("/obras");if(!Array.isArray(t))return null;const e=String(n||"").trim();if(!e)return null;const s=t.find(o=>String(o._id)===e);if(s)return s;const i=t.find(o=>{const a=(o.nome||"").match(/(\d+)$/);return a&&a[1]===e});if(i)return i;const r=t.find(o=>(o.nome||"").includes(e));return r||null},getRelatoriosByObra:async n=>{const t=await zl(`/obras/${n}/relatorios`);return Array.isArray(t)?t:[]},getRelatorioDetalhe:async(n,t)=>zl(`/obras/${n}/relatorios/${t}`),getIntegratedDataForObra:async n=>{const t=await wi.getObraByOs(n);if(!t)return console.warn("[RDO] Obra não localizada para OS:",n),null;console.info("[RDO] Obra encontrada para OS:",n,"->",t._id,t.nome);const e=await wi.getRelatoriosByObra(t._id);if(!e.length)return console.warn("[RDO] Nenhum relatório retornado para obra",t._id),{quantidadeRelatorios:0,totalHoras:"0.00",totalHorasExtras:"0.00",reports:[]};const s=(await Promise.all(e.map(c=>wi.getRelatorioDetalhe(t._id,c._id)))).filter(Boolean);let i=0,r=0;const o=9,a=c=>{if(!c||typeof c!="string")return 0;const[l,d]=c.split(":").map(Number);return(l||0)+(d||0)/60};return s.forEach(c=>{var h,f;(((h=c==null?void 0:c.maoDeObra)==null?void 0:h.padrao)||[]).forEach(m=>{const g=Number(m.quantidade)||0;i+=g,g>o&&(r+=g-o)}),(((f=c==null?void 0:c.maoDeObra)==null?void 0:f.personalizada)||[]).forEach(m=>{const g=a(m.horasTrabalhadas);i+=g,g>o&&(r+=g-o)})}),{quantidadeRelatorios:s.length,totalHoras:i.toFixed(2),totalHorasExtras:r.toFixed(2),reports:s,relatoriosRaw:s}},processRDOData:(n=[])=>{const t={},e={},s={},i={},r={};let o=0,a=0;const c=new Set,l=9,d={},h=y=>{if(typeof y=="number")return y;if(typeof y=="string"){if(y.includes(":")){const[T,k]=y.split(":").map(Number);return(T||0)+(k||0)/60}const v=Number(y);return Number.isNaN(v)?0:v}return 0},f=y=>{if(!y)return null;let v=null;if(y instanceof Date?v=new Date(y.getTime()):typeof y=="number"&&(v=new Date(y)),typeof y=="string"){let T=y;if(T.includes("T")&&(T=T.split("T")[0]),T.includes("/")&&T.split("/").length===3){const[k,C,P]=T.split("/"),M=P.length===2?`20${P}`:P;v=new Date(`${M}-${C}-${k}`)}if(T.includes("-")){const[k,C,P]=T.split("-");v=new Date(Number(k),Number(C)-1,Number(P))}}return!v||Number.isNaN(v.getTime())?null:(v.setHours(12,0,0,0),v.setDate(v.getDate()+2),v)};n.forEach(y=>{var D,w;const v=y.data||y.data_inicio||y.dataInicio||y.createdAt||y.dataReferencia||y.dataServiço||y.dataServico||y.dataRelatorio||y.dataRel,T=f(v);if(!T||Number.isNaN(T.getTime()))return;const k=b=>String(b).padStart(2,"0"),C=`${T.getFullYear()}-${k(T.getMonth()+1)}-${k(T.getDate())}`;t[C]||(t[C]=0),e[C]||(e[C]=0),s[C]||(s[C]=0);const P=((D=y==null?void 0:y.maoDeObra)==null?void 0:D.padrao)||[],M=((w=y==null?void 0:y.maoDeObra)==null?void 0:w.personalizada)||[];P.forEach(b=>{const x=Number(b.quantidade)||0,A=Math.max(0,x-l),S=x-A;t[C]+=x,e[C]+=A,s[C]+=S;const R=b.funcao||"Outros";i[R]=(i[R]||0)+x,b.funcionario_id&&(r[C]||(r[C]=new Set),r[C].add(b.funcionario_id),c.add(b.funcionario_id));const I=b.nome||b.funcionario||b.descricao||"Técnico";d[I]=(d[I]||0)+x,o+=x,a+=A}),M.forEach(b=>{const x=h(b.horasTrabalhadas),A=Math.max(0,x-l),S=x-A;t[C]+=x,e[C]+=A,s[C]+=S;const R=b.funcao||"Outros";i[R]=(i[R]||0)+x,b.funcionario_id&&(r[C]||(r[C]=new Set),r[C].add(b.funcionario_id),c.add(b.funcionario_id));const I=b.nome||b.funcionario||b.descricao||"Técnico";d[I]=(d[I]||0)+x,o+=x,a+=A})});const m={};Object.keys(r).forEach(y=>{m[y]=r[y].size});const g=Object.keys(t).sort().map(y=>({data:y,horasNormais:s[y]||0,horasExtras:e[y]||0,total:t[y]||0,funcionarios:m[y]||0}));return{horasPorDia:t,horasNormaisPorDia:s,horasExtrasPorDia:e,horasPorFuncao:i,funcionariosPorDia:m,totalHoras:o,totalExtras:a,totalFuncionarios:c.size,mediaHorasDia:o/Math.max(1,Object.keys(t).length),mediaFuncionariosDia:Object.keys(m).length?Object.values(m).reduce((y,v)=>y+v,0)/Object.keys(m).length:0,techHours:d,diarios:g}}},_b=Object.freeze(Object.defineProperty({__proto__:null,RDOService:wi},Symbol.toStringTag,{value:"Module"})),lg=n=>{if(!n)return null;if(n instanceof Date)return n;if(n.toDate)return n.toDate();if(typeof n=="number")return new Date(n);if(typeof n=="string"){if(n.includes("/")&&n.split("/").length===3){const[e,s,i]=n.split("/"),r=i.length===2?`20${i}`:i,o=new Date(`${r}-${s}-${e}`);return o.setHours(12,0,0,0),o}const t=new Date(n);return t.setHours(12,0,0,0),t}return null},pi={initList:async()=>{ot.render(F.createLoader());try{const n=await je.getObras();ot.render(jl.renderList(n))}catch(n){console.error(n),ot.render(`<div class="text-red-500 p-4">Erro ao carregar obras: ${n.message}</div>`)}},initForm:async(n=null)=>{ot.render(F.createLoader());try{let t=null;n&&(t=await je.getObraById(n)),ot.render(jl.renderForm(t)),pi.bindFormEvents(n)}catch(t){console.error(t),ot.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},initDashboard:async n=>{ot.render(F.createLoader());try{fO(document.documentElement.classList.contains("theme-light"));const t=await je.getObraById(n);if(!t){ot.render('<div class="text-red-500 p-4">Obra não encontrada.</div>');return}const e=await je.getObraStats(n,!1),s=Number(t.valor_orcado||0);s>0?(e.economia=s-e.totalGasto,e.curvaPercent=e.totalGasto/s*100):(e.economia=0,e.curvaPercent=0);const i=[];!t.horas_previstas&&!t.horas_extras_previstas&&i.push("Horas da obra não informadas."),t.data_prevista_inicio||i.push("Data de início prevista não informada."),t.data_prevista_fim||i.push("Data de término prevista não informada."),s||i.push("Orçamento da obra não informado."),t.numero_os||i.push("Número da OS não informado; integração RDO pode falhar."),e.osNumber=t.numero_os||t.id,e.alerts=i;const[r,o,a]=await Promise.all([Ms.list(),Os.list(),Ds.list()]),c=new Map(r.map(g=>[g.id,g.nome||g.email||g.id])),l=new Map(o.map(g=>[g.id,g.nome||g.empresa||g.id])),d=new Map(a.map(g=>[g.id,g.nome||g.codigo||g.id]));e.comprasRecentes=(e.comprasRecentes||[]).map(g=>({...g,compradorNome:c.get(g.compradorId)||g.comprador||"",fornecedorNome:l.get(g.fornecedorId)||g.fornecedor||"",centroCustoNome:d.get(g.centroCustoId)||g.centroCustoNome||g.centro_custo||g.centroCustoId||""})),e.comprasCalendar=(e.comprasCalendar||[]).map(g=>({...g,compradorNome:c.get(g.compradorId)||g.comprador||"",fornecedorNome:l.get(g.fornecedorId)||g.fornecedor||"",centroCustoNome:d.get(g.centroCustoId)||g.centroCustoNome||g.centro_custo||g.centroCustoId||""}));const h={};Object.entries(e.ccTotais||{}).forEach(([g,y])=>{const v=d.get(g)||g;h[v]=(h[v]||0)+y}),e.ccTotais=h,e.ccTable=Object.entries(h).map(([g,y])=>({nome:g,valor:y})),ot.render(jl.renderDashboard(t,e)),(()=>{const g=y=>{var k;const v=document.createElement("div");v.className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4",v.innerHTML=`
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
                                        <div class="mt-1">${it.renderStatusBadge(y.status_compra,y.previsao_entrega||y.data_entrega_prevista)}</div>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Descrição</label>
                                        <p class="text-text">${y.descricao_compra||y.descricao||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Valor</label>
                                        <p class="text-text">${it.formatCurrency(y.valor_total??y.valor_estimado??0)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Fornecedor</label>
                                        <p class="text-text">${y.fornecedorNome||y.fornecedor||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Comprador</label>
                                        <p class="text-text">${y.compradorNome||y.comprador||y.compradorId||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Prev. Entrega</label>
                                        <p class="text-text">${it.formatDate(y.previsao_entrega||y.data_entrega_prevista)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Data Emissão</label>
                                        <p class="text-text">${it.formatDate(y.data_emissao)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Número NF</label>
                                        <p class="text-text">${y.numero_nf||"-"}</p>
                                    </div>
                                </div>
                                <div class="flex justify-end gap-2">
                                    <button class="btn-secondary" data-close>Fechar</button>
                                    ${y.id?`<button class="btn" data-edit-id="${y.id}">Editar</button>`:""}
                                </div>
                            </div>
                        </div>
                    `,document.body.appendChild(v),(k=v.querySelectorAll("[data-close]"))==null||k.forEach(C=>C.addEventListener("click",()=>v.remove()));const T=v.querySelector("[data-edit-id]");T&&T.addEventListener("click",()=>{It.navigate(`/compras/${y.id}/editar`),v.remove()})};document.querySelectorAll('[data-action="edit-compra"]').forEach(y=>{y.addEventListener("click",()=>{const v=y.dataset.id;v&&It.navigate(`/compras/${v}/editar`)})}),document.querySelectorAll('[data-action="view-compra"]').forEach(y=>{y.addEventListener("click",()=>{const v=y.dataset.id,T=e.comprasRecentes.find(k=>k.id===v);T&&g(T)})})})();const m=()=>{const g=document.getElementById("calendar-wrapper"),y=document.getElementById("timeline-wrapper");g&&(g.innerHTML=gi.render(e.comprasCalendar||e.comprasRecentes)),y&&(y.innerHTML=gi.renderTimeline(e.comprasCalendar||e.comprasRecentes));const v=document.getElementById("cal-prev"),T=document.getElementById("cal-next");v==null||v.addEventListener("click",()=>{gi.changeMonth(-1),m()}),T==null||T.addEventListener("click",()=>{gi.changeMonth(1),m()})};m(),setTimeout(async()=>{var k;ci.renderCategorias("chart-categorias",e.gastosPorCategoria),ci.renderStatusObra("chart-status-obra",e.porStatus),e.curvaS&&ci.renderCurvaS("chart-curva-s",e.curvaS.labels||[],e.curvaS.planejado,e.curvaS.realizado),e.gastosDiarios&&ci.renderGastosMensais("chart-gastos-diarios",e.gastosDiarios),e.ccTotais&&ci.renderCentrosCusto("chart-cc",e.ccTotais);const{COST_PER_HOUR:g,COST_PER_OVERTIME_HOUR:y}=await Ya(async()=>{const{COST_PER_HOUR:C,COST_PER_OVERTIME_HOUR:P}=await import("./costs-CbBns5TW.js");return{COST_PER_HOUR:C,COST_PER_OVERTIME_HOUR:P}},[]),v=pb({data_inicio:t.data_prevista_inicio,data_prevista_fim:t.data_prevista_fim,orcamento:t.valor_orcado}),T=mb(e.comprasCalendar||e.comprasRecentes||[],((k=e.rdoData)==null?void 0:k.horasPorDia)||{},g,y);(v.length||T.length)&&ci.renderFinancePVAV("chart-finance-pvav",v,T);try{const C=t.numero_os||t.numeroOS||t.id;if(C){const P=await wi.getIntegratedDataForObra(C);if(P&&P.reports){const M=wi.processRDOData(P.reports);if(M){e.rdoData=M,e.rdoOk=!0;const D=(R,I)=>{const U=document.getElementById(R);U&&(U.textContent=I)},w=Number(t.horas_previstas||0),b=Number(t.horas_extras_previstas||0),x=w+1.5*b,A=x-(Number(M.totalHoras||0)+Number(M.totalExtras||0));if(D("kpi-rdo-total",M.totalHoras.toFixed(1)),D("kpi-rdo-media-dia",M.mediaHorasDia.toFixed(1)),D("kpi-rdo-func",String(M.totalFuncionarios||0)),D("kpi-rdo-media-func-dia",M.mediaFuncionariosDia.toFixed(1)),D("kpi-rdo-orcadas",x.toFixed(1)),D("kpi-rdo-extras",M.totalExtras.toFixed(1)),D("kpi-rdo-saldo",A.toFixed(1)),M.totalHoras>0){ie.renderHorasNormaisExtras("chart-rdo-horas-normais-extras",M.horasNormaisPorDia,M.horasExtrasPorDia);const R=[],I=[],U=lg(t.data_prevista_inicio),H=lg(t.data_prevista_fim);if(U&&H&&!Number.isNaN(U)&&!Number.isNaN(H)&&U<=H&&x>0){const ut=[],st=new Date(U);st.setHours(12,0,0,0);const Ot=new Date(H);for(Ot.setDate(Ot.getDate()+1);st<=Ot;){const Y=st.getDay();Y!==0&&Y!==6&&ut.push(new Date(st)),st.setDate(st.getDate()+1)}const Bt=ut.length?x/ut.length:0;let kt=0;ut.forEach(Y=>{kt+=Bt;const Et=new Date(Y);Et.setDate(Et.getDate()+0),R.push({x:Et,y:Number(kt.toFixed(2))})})}const X=Object.keys(M.horasPorDia||{}).sort((ut,st)=>new Date(ut)-new Date(st));let nt=0;X.forEach(ut=>{const st=new Date(ut);st.setHours(12,0,0,0),!Number.isNaN(st.getTime())&&(nt+=M.horasPorDia[ut],I.push({x:st,y:Number(nt.toFixed(2))}))}),ie.renderCurvaHoras("chart-rdo-curva-horas",R,I)}else ie.renderEmpty("chart-rdo-horas-normais-extras"),ie.renderEmpty("chart-rdo-curva-horas");const S=document.querySelector("#table-rdo tbody");if(S){const R=M.diarios||[];R.length?S.innerHTML=R.map(I=>`
                                            <tr>
                                                <td class="px-4 py-2 text-sm text-text">${new Date(I.data).toLocaleDateString("pt-BR")}</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${I.horasNormais.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${I.horasExtras.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right font-display">${I.total.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${I.funcionarios}</td>
                                            </tr>
                                        `).join(""):S.innerHTML='<tr><td colspan="5" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>'}}}else e.rdoData=e.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},ie.renderEmpty("chart-rdo-horas-normais-extras"),ie.renderEmpty("chart-rdo-curva-horas")}}catch(C){console.warn("Erro ao carregar dados RDO (legacy):",(C==null?void 0:C.message)||C),e.rdoData=e.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},ie.renderEmpty("chart-rdo-horas-normais-extras"),ie.renderEmpty("chart-rdo-curva-horas")}},100)}catch(t){console.error(t),ot.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},bindFormEvents:n=>{const t=document.getElementById("form-obra");t.addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("btn-submit");try{s.disabled=!0,s.innerHTML=F.createLoader();const i=new FormData(t),r=Object.fromEntries(i.entries());r.valor_orcado=r.valor_orcado?Number(r.valor_orcado):0,r.tolerancia_percentual=r.tolerancia_percentual?Number(r.tolerancia_percentual)/100:0,r.valor_deslocamento_km=r.valor_deslocamento_km?Number(r.valor_deslocamento_km):0,r.horas_previstas=r.horas_previstas?Number(r.horas_previstas):0,r.horas_extras_previstas=r.horas_extras_previstas?Number(r.horas_extras_previstas):0,r.qtd_refeicoes=r.qtd_refeicoes?Number(r.qtd_refeicoes):0,r.qtd_hospedagens=r.qtd_hospedagens?Number(r.qtd_hospedagens):0,r.is_obra_filha=t.is_obra_filha.checked,n?(await je.updateObra(n,r),F.createToast("Obra atualizada com sucesso!")):(await je.createObra(r),F.createToast("Obra criada com sucesso!")),It.navigate("/obras")}catch(i){console.error(i),F.createToast("Erro ao salvar obra: "+i.message,"error"),s.disabled=!1,s.innerHTML=`<span>${n?"Salvar Alterações":"Criar Obra"}</span>`}})}},gO={renderMenu:()=>`
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
    `},_O={init:async()=>{ot.render(gO.renderMenu())}},yO={render:(n=[])=>`
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
    `},Vu={init:async()=>{const n=await Os.list();ot.render(yO.render(n)),Vu.bind()},bind:()=>{const n=document.getElementById("fornecedor-form"),t=document.getElementById("btn-novo-fornecedor"),e=document.getElementById("btn-salvar-fornecedor"),s=document.getElementById("btn-cancelar-fornecedor"),i=document.querySelector("#fornecedor-table");t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden"));let r=null;i==null||i.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(r=a.dataset.id,document.getElementById("forn-nome").value=a.dataset.nome||"",document.getElementById("forn-email").value=a.dataset.email||"",document.getElementById("forn-telefone").value=a.dataset.telefone||"",document.getElementById("forn-cnpj").value=a.dataset.cnpj||"",n==null||n.classList.remove("hidden"))}),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("forn-nome").value,email:document.getElementById("forn-email").value,telefone:document.getElementById("forn-telefone").value,cnpj:document.getElementById("forn-cnpj").value};r?await Os.update(r,o):await Os.create(o),Vu.init()})}},vO={render:(n=[])=>`
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
    `},Fu={init:async()=>{const n=await Ds.list();ot.render(vO.render(n)),Fu.bind()},bind:()=>{const n=document.getElementById("cc-form"),t=document.getElementById("btn-novo-cc"),e=document.getElementById("btn-salvar-cc"),s=document.getElementById("btn-cancelar-cc"),i=document.getElementById("cc-table");let r=null;t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden")),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("cc-nome").value,codigo:document.getElementById("cc-codigo").value};r?await Ds.update(r,o):await Ds.create(o),Fu.init()}),i==null||i.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(r=a.dataset.id,document.getElementById("cc-nome").value=a.dataset.nome||"",document.getElementById("cc-codigo").value=a.dataset.codigo||"",n==null||n.classList.remove("hidden"))})}},bO={render:(n=[])=>`
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
    `},$u={init:async()=>{const n=await Ms.list();ot.render(bO.render(n)),$u.bind()},bind:()=>{const n=document.getElementById("comprador-form"),t=document.getElementById("btn-novo-comprador"),e=document.getElementById("btn-salvar-comprador"),s=document.getElementById("btn-cancelar-comprador"),i=document.getElementById("compr-table");let r=null;t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden")),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("compr-nome").value,email:document.getElementById("compr-email").value};r?await Ms.update(r,o):await Ms.create(o),$u.init()}),i==null||i.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(r=a.dataset.id,document.getElementById("compr-nome").value=a.dataset.nome||"",document.getElementById("compr-email").value=a.dataset.email||"",n==null||n.classList.remove("hidden"))})}},ug={renderBell:(n=0)=>`
            <button id="notifications-bell" class="relative p-2 rounded-lg hover:bg-surface transition-colors">
                ${Nt.bell}
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
        `},Ve={notifications:[],unreadCount:0,init:async()=>{bt.state.currentUser&&(await Ve.load(),Ve.render(),Ve.bindEvents(),setInterval(()=>Ve.load(),12e4))},load:async()=>{const n=bt.state.currentUser;Ve.notifications=await rc.getByUser(n.uid,20),Ve.unreadCount=Ve.notifications.filter(t=>!t.lida).length,Ve.render()},render:()=>{const n=document.getElementById("notifications-container");if(!n)return;n.innerHTML=ug.renderBell(Ve.unreadCount);const t=document.createElement("div");t.className="relative",t.innerHTML=ug.renderDropdown(Ve.notifications),n.appendChild(t)},bindEvents:()=>{document.addEventListener("click",n=>{const t=document.getElementById("notifications-bell"),e=document.getElementById("notifications-dropdown");t&&t.contains(n.target)?e==null||e.classList.toggle("hidden"):e&&!e.contains(n.target)&&e.classList.add("hidden")}),document.addEventListener("click",async n=>{if(n.target.id==="mark-all-read"){const t=bt.state.currentUser;await rc.markAllAsRead(t.uid),await Ve.load()}})}};console.log("[Main] Inicializando aplicação...");const xO=async()=>{try{await hS(),console.log("[Main] Firebase inicializado."),bt.applyTheme(bt.state.currentTheme||"dark"),await Ga.init(),bt.state.currentUser&&await Ve.init(),It.init(),It.on("/",Nu.init),It.on("/login",Cp.initLogin),It.on("/forgot-password",Cp.initForgotPassword),It.on("/compras",oc.init),It.on("/relatorios",B.init),It.on("/configuracoes",Lu.init),It.on("/compras/:id/editar",({id:t})=>oc.initEdit(t)),It.on("/cadastros",_O.init),It.on("/cadastros/fornecedores",Vu.init),It.on("/cadastros/centros-custo",Fu.init),It.on("/cadastros/compradores",$u.init),It.on("/obras",pi.initList),It.on("/obras/nova",()=>pi.initForm()),It.on("/obras/:id",({id:t})=>pi.initDashboard(t)),It.on("/obras/:id/dashboard",({id:t})=>pi.initDashboard(t)),It.on("/obras/:id/editar",({id:t})=>pi.initForm(t)),It.handleRoute();const n=document.getElementById("loader");n&&n.remove()}catch(n){console.error("[Main] Erro fatal:",n),document.body.innerHTML=`<div class="p-10 text-red-600">Erro fatal: ${n.message}</div>`}};xO();
