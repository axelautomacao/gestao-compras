var lx=Object.defineProperty;var ux=(n,t,e)=>t in n?lx(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var N=(n,t,e)=>ux(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();var yf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},dx=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const r=n[e++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[e++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[e++],o=n[e++],a=n[e++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[e++],o=n[e++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Tg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,l=c?n[r+2]:0,d=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),s.push(e[d],e[h],e[f],e[m])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Eg(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):dx(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=e[n.charAt(r++)],a=r<n.length?e[n.charAt(r)]:0;++r;const l=r<n.length?e[n.charAt(r)]:64;++r;const h=r<n.length?e[n.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new hx;const f=i<<2|a>>4;if(s.push(f),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fx=function(n){const t=Eg(n);return Tg.encodeByteArray(t,!0)},qa=function(n){return fx(n).replace(/\./g,"")},Ig=function(n){try{return Tg.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function px(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mx=()=>px().__FIREBASE_DEFAULTS__,gx=()=>{if(typeof process>"u"||typeof yf>"u")return;const n=yf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},_x=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ig(n[1]);return t&&JSON.parse(t)},wc=()=>{try{return mx()||gx()||_x()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ag=n=>{var t,e;return(e=(t=wc())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},kg=n=>{const t=Ag(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},Sg=()=>{var n;return(n=wc())===null||n===void 0?void 0:n.config},Cg=n=>{var t;return(t=wc())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
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
 */function Rg(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[qa(JSON.stringify(e)),qa(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function bx(){var n;const t=(n=wc())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wx(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ex(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tx(){const n=Ie();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ix(){return!bx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ax(){try{return typeof indexedDB=="object"}catch{return!1}}function kx(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx="FirebaseError";class yn extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=Sx,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xo.prototype.create)}}class xo{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Cx(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new yn(r,a,s)}}function Cx(n,t){return n.replace(Rx,(e,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Rx=/\{\$([^}]+)}/g;function Px(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Wa(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const r of e){if(!s.includes(r))return!1;const i=n[r],o=t[r];if(vf(i)&&vf(o)){if(!Wa(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!e.includes(r))return!1;return!0}function vf(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Ri(n){const t={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");t[decodeURIComponent(r)]=decodeURIComponent(i)}}),t}function Pi(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Dx(n,t){const e=new Mx(n,t);return e.subscribe.bind(e)}class Mx{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let r;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");Ox(t,["next","error","complete"])?r=t:r={next:t,error:e,complete:s},r.next===void 0&&(r.next=Il),r.error===void 0&&(r.error=Il),r.complete===void 0&&(r.complete=Il);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ox(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Il(){}/**
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
 */function Wt(n){return n&&n._delegate?n._delegate:n}class us{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Rs="[DEFAULT]";/**
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
 */class Nx{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new yx;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Vx(t))try{this.getOrInitializeService({instanceIdentifier:Rs})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Rs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rs){return this.instances.has(t)}getOptions(t=Rs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,e){var s;const r=this.normalizeInstanceIdentifier(e),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const r of s)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Lx(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Rs){return this.component?this.component.multipleInstances?t:Rs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lx(n){return n===Rs?void 0:n}function Vx(n){return n.instantiationMode==="EAGER"}/**
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
 */class Fx{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Nx(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(dt||(dt={}));const $x={debug:dt.DEBUG,verbose:dt.VERBOSE,info:dt.INFO,warn:dt.WARN,error:dt.ERROR,silent:dt.SILENT},Bx=dt.INFO,Ux={[dt.DEBUG]:"log",[dt.VERBOSE]:"log",[dt.INFO]:"info",[dt.WARN]:"warn",[dt.ERROR]:"error"},jx=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),r=Ux[t];if(r)console[r](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class nd{constructor(t){this.name=t,this._logLevel=Bx,this._logHandler=jx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in dt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$x[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,dt.DEBUG,...t),this._logHandler(this,dt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,dt.VERBOSE,...t),this._logHandler(this,dt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,dt.INFO,...t),this._logHandler(this,dt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,dt.WARN,...t),this._logHandler(this,dt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,dt.ERROR,...t),this._logHandler(this,dt.ERROR,...t)}}const zx=(n,t)=>t.some(e=>n instanceof e);let bf,xf;function Hx(){return bf||(bf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qx(){return xf||(xf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pg=new WeakMap,au=new WeakMap,Dg=new WeakMap,Al=new WeakMap,sd=new WeakMap;function Wx(n){const t=new Promise((e,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{e(os(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Pg.set(e,n)}).catch(()=>{}),sd.set(t,n),t}function Gx(n){if(au.has(n))return;const t=new Promise((e,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});au.set(n,t)}let cu={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return au.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Dg.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return os(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Yx(n){cu=n(cu)}function Kx(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(kl(this),t,...e);return Dg.set(s,t.sort?t.sort():[t]),os(s)}:qx().includes(n)?function(...t){return n.apply(kl(this),t),os(Pg.get(this))}:function(...t){return os(n.apply(kl(this),t))}}function Qx(n){return typeof n=="function"?Kx(n):(n instanceof IDBTransaction&&Gx(n),zx(n,Hx())?new Proxy(n,cu):n)}function os(n){if(n instanceof IDBRequest)return Wx(n);if(Al.has(n))return Al.get(n);const t=Qx(n);return t!==n&&(Al.set(n,t),sd.set(t,n)),t}const kl=n=>sd.get(n);function Xx(n,t,{blocked:e,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,t),a=os(o);return s&&o.addEventListener("upgradeneeded",c=>{s(os(o.result),c.oldVersion,c.newVersion,os(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Jx=["get","getKey","getAll","getAllKeys","count"],Zx=["put","add","delete","clear"],Sl=new Map;function wf(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Sl.get(t))return Sl.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,r=Zx.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Jx.includes(e)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),r&&c.done]))[0]};return Sl.set(t,i),i}Yx(n=>({...n,get:(t,e,s)=>wf(t,e)||n.get(t,e,s),has:(t,e)=>!!wf(t,e)||n.has(t,e)}));/**
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
 */class t0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(e0(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function e0(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const lu="@firebase/app",Ef="0.10.13";/**
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
 */const Ln=new nd("@firebase/app"),n0="@firebase/app-compat",s0="@firebase/analytics-compat",r0="@firebase/analytics",i0="@firebase/app-check-compat",o0="@firebase/app-check",a0="@firebase/auth",c0="@firebase/auth-compat",l0="@firebase/database",u0="@firebase/data-connect",d0="@firebase/database-compat",h0="@firebase/functions",f0="@firebase/functions-compat",p0="@firebase/installations",m0="@firebase/installations-compat",g0="@firebase/messaging",_0="@firebase/messaging-compat",y0="@firebase/performance",v0="@firebase/performance-compat",b0="@firebase/remote-config",x0="@firebase/remote-config-compat",w0="@firebase/storage",E0="@firebase/storage-compat",T0="@firebase/firestore",I0="@firebase/vertexai-preview",A0="@firebase/firestore-compat",k0="firebase",S0="10.14.1";/**
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
 */const uu="[DEFAULT]",C0={[lu]:"fire-core",[n0]:"fire-core-compat",[r0]:"fire-analytics",[s0]:"fire-analytics-compat",[o0]:"fire-app-check",[i0]:"fire-app-check-compat",[a0]:"fire-auth",[c0]:"fire-auth-compat",[l0]:"fire-rtdb",[u0]:"fire-data-connect",[d0]:"fire-rtdb-compat",[h0]:"fire-fn",[f0]:"fire-fn-compat",[p0]:"fire-iid",[m0]:"fire-iid-compat",[g0]:"fire-fcm",[_0]:"fire-fcm-compat",[y0]:"fire-perf",[v0]:"fire-perf-compat",[b0]:"fire-rc",[x0]:"fire-rc-compat",[w0]:"fire-gcs",[E0]:"fire-gcs-compat",[T0]:"fire-fst",[A0]:"fire-fst-compat",[I0]:"fire-vertex","fire-js":"fire-js",[k0]:"fire-js-all"};/**
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
 */const Ga=new Map,R0=new Map,du=new Map;function Tf(n,t){try{n.container.addComponent(t)}catch(e){Ln.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function qs(n){const t=n.name;if(du.has(t))return Ln.debug(`There were multiple attempts to register component ${t}.`),!1;du.set(t,n);for(const e of Ga.values())Tf(e,n);for(const e of R0.values())Tf(e,n);return!0}function Ec(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function An(n){return n.settings!==void 0}/**
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
 */const P0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},as=new xo("app","Firebase",P0);/**
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
 */class D0{constructor(t,e,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw as.create("app-deleted",{appName:this._name})}}/**
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
 */const er=S0;function Mg(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s=Object.assign({name:uu,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw as.create("bad-app-name",{appName:String(r)});if(e||(e=Sg()),!e)throw as.create("no-options");const i=Ga.get(r);if(i){if(Wa(e,i.options)&&Wa(s,i.config))return i;throw as.create("duplicate-app",{appName:r})}const o=new Fx(r);for(const c of du.values())o.addComponent(c);const a=new D0(e,s,o);return Ga.set(r,a),a}function rd(n=uu){const t=Ga.get(n);if(!t&&n===uu&&Sg())return Mg();if(!t)throw as.create("no-app",{appName:n});return t}function un(n,t,e){var s;let r=(s=C0[n])!==null&&s!==void 0?s:n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ln.warn(a.join(" "));return}qs(new us(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const M0="firebase-heartbeat-database",O0=1,to="firebase-heartbeat-store";let Cl=null;function Og(){return Cl||(Cl=Xx(M0,O0,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(to)}catch(e){console.warn(e)}}}}).catch(n=>{throw as.create("idb-open",{originalErrorMessage:n.message})})),Cl}async function N0(n){try{const e=(await Og()).transaction(to),s=await e.objectStore(to).get(Ng(n));return await e.done,s}catch(t){if(t instanceof yn)Ln.warn(t.message);else{const e=as.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ln.warn(e.message)}}}async function If(n,t){try{const s=(await Og()).transaction(to,"readwrite");await s.objectStore(to).put(t,Ng(n)),await s.done}catch(e){if(e instanceof yn)Ln.warn(e.message);else{const s=as.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(s.message)}}}function Ng(n){return`${n.name}!${n.options.appId}`}/**
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
 */const L0=1024,V0=30*24*60*60*1e3;class F0{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new B0(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Af();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=V0}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Ln.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Af(),{heartbeatsToSend:s,unsentEntries:r}=$0(this._heartbeatsCache.heartbeats),i=qa(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Ln.warn(e),""}}}function Af(){return new Date().toISOString().substring(0,10)}function $0(n,t=L0){const e=[];let s=n.slice();for(const r of n){const i=e.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),kf(e)>t){i.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),kf(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class B0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ax()?kx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await N0(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return If(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return If(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function kf(n){return qa(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function U0(n){qs(new us("platform-logger",t=>new t0(t),"PRIVATE")),qs(new us("heartbeat",t=>new F0(t),"PRIVATE")),un(lu,Ef,n),un(lu,Ef,"esm2017"),un("fire-js","")}U0("");var j0="firebase",z0="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un(j0,z0,"app");var Sf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vs,Lg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,b){function x(){}x.prototype=b.prototype,I.D=b.prototype,I.prototype=new x,I.prototype.constructor=I,I.C=function(A,C,R){for(var S=Array(arguments.length-2),et=2;et<arguments.length;et++)S[et-2]=arguments[et];return b.prototype[C].apply(A,S)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,e),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,b,x){x||(x=0);var A=Array(16);if(typeof b=="string")for(var C=0;16>C;++C)A[C]=b.charCodeAt(x++)|b.charCodeAt(x++)<<8|b.charCodeAt(x++)<<16|b.charCodeAt(x++)<<24;else for(C=0;16>C;++C)A[C]=b[x++]|b[x++]<<8|b[x++]<<16|b[x++]<<24;b=I.g[0],x=I.g[1],C=I.g[2];var R=I.g[3],S=b+(R^x&(C^R))+A[0]+3614090360&4294967295;b=x+(S<<7&4294967295|S>>>25),S=R+(C^b&(x^C))+A[1]+3905402710&4294967295,R=b+(S<<12&4294967295|S>>>20),S=C+(x^R&(b^x))+A[2]+606105819&4294967295,C=R+(S<<17&4294967295|S>>>15),S=x+(b^C&(R^b))+A[3]+3250441966&4294967295,x=C+(S<<22&4294967295|S>>>10),S=b+(R^x&(C^R))+A[4]+4118548399&4294967295,b=x+(S<<7&4294967295|S>>>25),S=R+(C^b&(x^C))+A[5]+1200080426&4294967295,R=b+(S<<12&4294967295|S>>>20),S=C+(x^R&(b^x))+A[6]+2821735955&4294967295,C=R+(S<<17&4294967295|S>>>15),S=x+(b^C&(R^b))+A[7]+4249261313&4294967295,x=C+(S<<22&4294967295|S>>>10),S=b+(R^x&(C^R))+A[8]+1770035416&4294967295,b=x+(S<<7&4294967295|S>>>25),S=R+(C^b&(x^C))+A[9]+2336552879&4294967295,R=b+(S<<12&4294967295|S>>>20),S=C+(x^R&(b^x))+A[10]+4294925233&4294967295,C=R+(S<<17&4294967295|S>>>15),S=x+(b^C&(R^b))+A[11]+2304563134&4294967295,x=C+(S<<22&4294967295|S>>>10),S=b+(R^x&(C^R))+A[12]+1804603682&4294967295,b=x+(S<<7&4294967295|S>>>25),S=R+(C^b&(x^C))+A[13]+4254626195&4294967295,R=b+(S<<12&4294967295|S>>>20),S=C+(x^R&(b^x))+A[14]+2792965006&4294967295,C=R+(S<<17&4294967295|S>>>15),S=x+(b^C&(R^b))+A[15]+1236535329&4294967295,x=C+(S<<22&4294967295|S>>>10),S=b+(C^R&(x^C))+A[1]+4129170786&4294967295,b=x+(S<<5&4294967295|S>>>27),S=R+(x^C&(b^x))+A[6]+3225465664&4294967295,R=b+(S<<9&4294967295|S>>>23),S=C+(b^x&(R^b))+A[11]+643717713&4294967295,C=R+(S<<14&4294967295|S>>>18),S=x+(R^b&(C^R))+A[0]+3921069994&4294967295,x=C+(S<<20&4294967295|S>>>12),S=b+(C^R&(x^C))+A[5]+3593408605&4294967295,b=x+(S<<5&4294967295|S>>>27),S=R+(x^C&(b^x))+A[10]+38016083&4294967295,R=b+(S<<9&4294967295|S>>>23),S=C+(b^x&(R^b))+A[15]+3634488961&4294967295,C=R+(S<<14&4294967295|S>>>18),S=x+(R^b&(C^R))+A[4]+3889429448&4294967295,x=C+(S<<20&4294967295|S>>>12),S=b+(C^R&(x^C))+A[9]+568446438&4294967295,b=x+(S<<5&4294967295|S>>>27),S=R+(x^C&(b^x))+A[14]+3275163606&4294967295,R=b+(S<<9&4294967295|S>>>23),S=C+(b^x&(R^b))+A[3]+4107603335&4294967295,C=R+(S<<14&4294967295|S>>>18),S=x+(R^b&(C^R))+A[8]+1163531501&4294967295,x=C+(S<<20&4294967295|S>>>12),S=b+(C^R&(x^C))+A[13]+2850285829&4294967295,b=x+(S<<5&4294967295|S>>>27),S=R+(x^C&(b^x))+A[2]+4243563512&4294967295,R=b+(S<<9&4294967295|S>>>23),S=C+(b^x&(R^b))+A[7]+1735328473&4294967295,C=R+(S<<14&4294967295|S>>>18),S=x+(R^b&(C^R))+A[12]+2368359562&4294967295,x=C+(S<<20&4294967295|S>>>12),S=b+(x^C^R)+A[5]+4294588738&4294967295,b=x+(S<<4&4294967295|S>>>28),S=R+(b^x^C)+A[8]+2272392833&4294967295,R=b+(S<<11&4294967295|S>>>21),S=C+(R^b^x)+A[11]+1839030562&4294967295,C=R+(S<<16&4294967295|S>>>16),S=x+(C^R^b)+A[14]+4259657740&4294967295,x=C+(S<<23&4294967295|S>>>9),S=b+(x^C^R)+A[1]+2763975236&4294967295,b=x+(S<<4&4294967295|S>>>28),S=R+(b^x^C)+A[4]+1272893353&4294967295,R=b+(S<<11&4294967295|S>>>21),S=C+(R^b^x)+A[7]+4139469664&4294967295,C=R+(S<<16&4294967295|S>>>16),S=x+(C^R^b)+A[10]+3200236656&4294967295,x=C+(S<<23&4294967295|S>>>9),S=b+(x^C^R)+A[13]+681279174&4294967295,b=x+(S<<4&4294967295|S>>>28),S=R+(b^x^C)+A[0]+3936430074&4294967295,R=b+(S<<11&4294967295|S>>>21),S=C+(R^b^x)+A[3]+3572445317&4294967295,C=R+(S<<16&4294967295|S>>>16),S=x+(C^R^b)+A[6]+76029189&4294967295,x=C+(S<<23&4294967295|S>>>9),S=b+(x^C^R)+A[9]+3654602809&4294967295,b=x+(S<<4&4294967295|S>>>28),S=R+(b^x^C)+A[12]+3873151461&4294967295,R=b+(S<<11&4294967295|S>>>21),S=C+(R^b^x)+A[15]+530742520&4294967295,C=R+(S<<16&4294967295|S>>>16),S=x+(C^R^b)+A[2]+3299628645&4294967295,x=C+(S<<23&4294967295|S>>>9),S=b+(C^(x|~R))+A[0]+4096336452&4294967295,b=x+(S<<6&4294967295|S>>>26),S=R+(x^(b|~C))+A[7]+1126891415&4294967295,R=b+(S<<10&4294967295|S>>>22),S=C+(b^(R|~x))+A[14]+2878612391&4294967295,C=R+(S<<15&4294967295|S>>>17),S=x+(R^(C|~b))+A[5]+4237533241&4294967295,x=C+(S<<21&4294967295|S>>>11),S=b+(C^(x|~R))+A[12]+1700485571&4294967295,b=x+(S<<6&4294967295|S>>>26),S=R+(x^(b|~C))+A[3]+2399980690&4294967295,R=b+(S<<10&4294967295|S>>>22),S=C+(b^(R|~x))+A[10]+4293915773&4294967295,C=R+(S<<15&4294967295|S>>>17),S=x+(R^(C|~b))+A[1]+2240044497&4294967295,x=C+(S<<21&4294967295|S>>>11),S=b+(C^(x|~R))+A[8]+1873313359&4294967295,b=x+(S<<6&4294967295|S>>>26),S=R+(x^(b|~C))+A[15]+4264355552&4294967295,R=b+(S<<10&4294967295|S>>>22),S=C+(b^(R|~x))+A[6]+2734768916&4294967295,C=R+(S<<15&4294967295|S>>>17),S=x+(R^(C|~b))+A[13]+1309151649&4294967295,x=C+(S<<21&4294967295|S>>>11),S=b+(C^(x|~R))+A[4]+4149444226&4294967295,b=x+(S<<6&4294967295|S>>>26),S=R+(x^(b|~C))+A[11]+3174756917&4294967295,R=b+(S<<10&4294967295|S>>>22),S=C+(b^(R|~x))+A[2]+718787259&4294967295,C=R+(S<<15&4294967295|S>>>17),S=x+(R^(C|~b))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+b&4294967295,I.g[1]=I.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,I.g[2]=I.g[2]+C&4294967295,I.g[3]=I.g[3]+R&4294967295}s.prototype.u=function(I,b){b===void 0&&(b=I.length);for(var x=b-this.blockSize,A=this.B,C=this.h,R=0;R<b;){if(C==0)for(;R<=x;)r(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<b;)if(A[C++]=I.charCodeAt(R++),C==this.blockSize){r(this,A),C=0;break}}else for(;R<b;)if(A[C++]=I[R++],C==this.blockSize){r(this,A),C=0;break}}this.h=C,this.o+=b},s.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var b=1;b<I.length-8;++b)I[b]=0;var x=8*this.o;for(b=I.length-8;b<I.length;++b)I[b]=x&255,x/=256;for(this.u(I),I=Array(16),b=x=0;4>b;++b)for(var A=0;32>A;A+=8)I[x++]=this.g[b]>>>A&255;return I};function i(I,b){var x=a;return Object.prototype.hasOwnProperty.call(x,I)?x[I]:x[I]=b(I)}function o(I,b){this.h=b;for(var x=[],A=!0,C=I.length-1;0<=C;C--){var R=I[C]|0;A&&R==b||(x[C]=R,A=!1)}this.g=x}var a={};function c(I){return-128<=I&&128>I?i(I,function(b){return new o([b|0],0>b?-1:0)}):new o([I|0],0>I?-1:0)}function l(I){if(isNaN(I)||!isFinite(I))return h;if(0>I)return y(l(-I));for(var b=[],x=1,A=0;I>=x;A++)b[A]=I/x|0,x*=4294967296;return new o(b,0)}function d(I,b){if(I.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(I.charAt(0)=="-")return y(d(I.substring(1),b));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=l(Math.pow(b,8)),A=h,C=0;C<I.length;C+=8){var R=Math.min(8,I.length-C),S=parseInt(I.substring(C,C+R),b);8>R?(R=l(Math.pow(b,R)),A=A.j(R).add(l(S))):(A=A.j(x),A=A.add(l(S)))}return A}var h=c(0),f=c(1),m=c(16777216);n=o.prototype,n.m=function(){if(v(this))return-y(this).m();for(var I=0,b=1,x=0;x<this.g.length;x++){var A=this.i(x);I+=(0<=A?A:4294967296+A)*b,b*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(g(this))return"0";if(v(this))return"-"+y(this).toString(I);for(var b=l(Math.pow(I,6)),x=this,A="";;){var C=D(x,b).g;x=w(x,C.j(b));var R=((0<x.g.length?x.g[0]:x.h)>>>0).toString(I);if(x=C,g(x))return R+A;for(;6>R.length;)R="0"+R;A=R+A}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function g(I){if(I.h!=0)return!1;for(var b=0;b<I.g.length;b++)if(I.g[b]!=0)return!1;return!0}function v(I){return I.h==-1}n.l=function(I){return I=w(this,I),v(I)?-1:g(I)?0:1};function y(I){for(var b=I.g.length,x=[],A=0;A<b;A++)x[A]=~I.g[A];return new o(x,~I.h).add(f)}n.abs=function(){return v(this)?y(this):this},n.add=function(I){for(var b=Math.max(this.g.length,I.g.length),x=[],A=0,C=0;C<=b;C++){var R=A+(this.i(C)&65535)+(I.i(C)&65535),S=(R>>>16)+(this.i(C)>>>16)+(I.i(C)>>>16);A=S>>>16,R&=65535,S&=65535,x[C]=S<<16|R}return new o(x,x[x.length-1]&-2147483648?-1:0)};function w(I,b){return I.add(y(b))}n.j=function(I){if(g(this)||g(I))return h;if(v(this))return v(I)?y(this).j(y(I)):y(y(this).j(I));if(v(I))return y(this.j(y(I)));if(0>this.l(m)&&0>I.l(m))return l(this.m()*I.m());for(var b=this.g.length+I.g.length,x=[],A=0;A<2*b;A++)x[A]=0;for(A=0;A<this.g.length;A++)for(var C=0;C<I.g.length;C++){var R=this.i(A)>>>16,S=this.i(A)&65535,et=I.i(C)>>>16,z=I.i(C)&65535;x[2*A+2*C]+=S*z,T(x,2*A+2*C),x[2*A+2*C+1]+=R*z,T(x,2*A+2*C+1),x[2*A+2*C+1]+=S*et,T(x,2*A+2*C+1),x[2*A+2*C+2]+=R*et,T(x,2*A+2*C+2)}for(A=0;A<b;A++)x[A]=x[2*A+1]<<16|x[2*A];for(A=b;A<2*b;A++)x[A]=0;return new o(x,0)};function T(I,b){for(;(I[b]&65535)!=I[b];)I[b+1]+=I[b]>>>16,I[b]&=65535,b++}function k(I,b){this.g=I,this.h=b}function D(I,b){if(g(b))throw Error("division by zero");if(g(I))return new k(h,h);if(v(I))return b=D(y(I),b),new k(y(b.g),y(b.h));if(v(b))return b=D(I,y(b)),new k(y(b.g),b.h);if(30<I.g.length){if(v(I)||v(b))throw Error("slowDivide_ only works with positive integers.");for(var x=f,A=b;0>=A.l(I);)x=P(x),A=P(A);var C=M(x,1),R=M(A,1);for(A=M(A,2),x=M(x,2);!g(A);){var S=R.add(A);0>=S.l(I)&&(C=C.add(x),R=S),A=M(A,1),x=M(x,1)}return b=w(I,C.j(b)),new k(C,b)}for(C=h;0<=I.l(b);){for(x=Math.max(1,Math.floor(I.m()/b.m())),A=Math.ceil(Math.log(x)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),R=l(x),S=R.j(b);v(S)||0<S.l(I);)x-=A,R=l(x),S=R.j(b);g(R)&&(R=f),C=C.add(R),I=w(I,S)}return new k(C,I)}n.A=function(I){return D(this,I).h},n.and=function(I){for(var b=Math.max(this.g.length,I.g.length),x=[],A=0;A<b;A++)x[A]=this.i(A)&I.i(A);return new o(x,this.h&I.h)},n.or=function(I){for(var b=Math.max(this.g.length,I.g.length),x=[],A=0;A<b;A++)x[A]=this.i(A)|I.i(A);return new o(x,this.h|I.h)},n.xor=function(I){for(var b=Math.max(this.g.length,I.g.length),x=[],A=0;A<b;A++)x[A]=this.i(A)^I.i(A);return new o(x,this.h^I.h)};function P(I){for(var b=I.g.length+1,x=[],A=0;A<b;A++)x[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(x,I.h)}function M(I,b){var x=b>>5;b%=32;for(var A=I.g.length-x,C=[],R=0;R<A;R++)C[R]=0<b?I.i(R+x)>>>b|I.i(R+x+1)<<32-b:I.i(R+x);return new o(C,I.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Lg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,Vs=o}).apply(typeof Sf<"u"?Sf:typeof self<"u"?self:typeof window<"u"?window:{});var ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vg,Di,Fg,Sa,hu,$g,Bg,Ug;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,_){return u==Array.prototype||u==Object.prototype||(u[p]=_.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ia=="object"&&ia];for(var p=0;p<u.length;++p){var _=u[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=e(this);function r(u,p){if(p)t:{var _=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var O=u[E];if(!(O in _))break t;_=_[O]}u=u[u.length-1],E=_[u],p=p(E),p!=E&&p!=null&&t(_,u,{configurable:!0,writable:!0,value:p})}}function i(u,p){u instanceof String&&(u+="");var _=0,E=!1,O={next:function(){if(!E&&_<u.length){var V=_++;return{value:p(V,u[V]),done:!1}}return E=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}r("Array.prototype.values",function(u){return u||function(){return i(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function l(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function d(u,p,_){return u.call.apply(u.bind,arguments)}function h(u,p,_){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,E),u.apply(p,O)}}return function(){return u.apply(p,arguments)}}function f(u,p,_){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,f.apply(null,arguments)}function m(u,p){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function g(u,p){function _(){}_.prototype=p.prototype,u.aa=p.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(E,O,V){for(var H=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)H[Ct-2]=arguments[Ct];return p.prototype[O].apply(E,H)}}function v(u){const p=u.length;if(0<p){const _=Array(p);for(let E=0;E<p;E++)_[E]=u[E];return _}return[]}function y(u,p){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(c(E)){const O=u.length||0,V=E.length||0;u.length=O+V;for(let H=0;H<V;H++)u[O+H]=E[H]}else u.push(E)}}class w{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function T(u){return/^[\s\xa0]*$/.test(u)}function k(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function D(u){return D[" "](u),u}D[" "]=function(){};var P=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function M(u,p,_){for(const E in u)p.call(_,u[E],E,u)}function I(u,p){for(const _ in u)p.call(void 0,u[_],_,u)}function b(u){const p={};for(const _ in u)p[_]=u[_];return p}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,p){let _,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(_ in E)u[_]=E[_];for(let V=0;V<x.length;V++)_=x[V],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function C(u){var p=1;u=u.split(":");const _=[];for(;0<p&&u.length;)_.push(u.shift()),p--;return u.length&&_.push(u.join(":")),_}function R(u){a.setTimeout(()=>{throw u},0)}function S(){var u=Y;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class et{constructor(){this.h=this.g=null}add(p,_){const E=z.get();E.set(p,_),this.h?this.h.next=E:this.g=E,this.h=E}}var z=new w(()=>new B,u=>u.reset());class B{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let L,q=!1,Y=new et,ft=()=>{const u=a.Promise.resolve(void 0);L=()=>{u.then(mt)}};var mt=()=>{for(var u;u=S();){try{u.h.call(u.g)}catch(_){R(_)}var p=z;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}q=!1};function bt(){this.s=this.s,this.C=this.C}bt.prototype.s=!1,bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function G(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}G.prototype.h=function(){this.defaultPrevented=!0};var ot=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};a.addEventListener("test",_,p),a.removeEventListener("test",_,p)}catch{}return u}();function xt(u,p){if(G.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(P){t:{try{D(p.nodeName);var O=!0;break t}catch{}O=!1}O||(p=null)}}else _=="mouseover"?p=u.fromElement:_=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Bt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&xt.aa.h.call(this)}}g(xt,G);var Bt={2:"touch",3:"pen",4:"mouse"};xt.prototype.h=function(){xt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),nn=0;function vn(u,p,_,E,O){this.listener=u,this.proxy=null,this.src=p,this.type=_,this.capture=!!E,this.ha=O,this.key=++nn,this.da=this.fa=!1}function jn(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function lr(u){this.src=u,this.g={},this.h=0}lr.prototype.add=function(u,p,_,E,O){var V=u.toString();u=this.g[V],u||(u=this.g[V]=[],this.h++);var H=Zr(u,p,E,O);return-1<H?(p=u[H],_||(p.fa=!1)):(p=new vn(p,this.src,V,!!E,O),p.fa=_,u.push(p)),p};function qe(u,p){var _=p.type;if(_ in u.g){var E=u.g[_],O=Array.prototype.indexOf.call(E,p,void 0),V;(V=0<=O)&&Array.prototype.splice.call(E,O,1),V&&(jn(p),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Zr(u,p,_,E){for(var O=0;O<u.length;++O){var V=u[O];if(!V.da&&V.listener==p&&V.capture==!!_&&V.ha==E)return O}return-1}var ti="closure_lm_"+(1e6*Math.random()|0),se={};function Ne(u,p,_,E,O){if(Array.isArray(p)){for(var V=0;V<p.length;V++)Ne(u,p[V],_,E,O);return null}return _=xh(_),u&&u[Oe]?u.K(p,_,l(E)?!!E.capture:!1,O):ei(u,p,_,!1,E,O)}function ei(u,p,_,E,O,V){if(!p)throw Error("Invalid event type");var H=l(O)?!!O.capture:!!O,Ct=al(u);if(Ct||(u[ti]=Ct=new lr(u)),_=Ct.add(p,_,E,H,V),_.proxy)return _;if(E=ni(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)ot||(O=H),O===void 0&&(O=!1),u.addEventListener(p.toString(),E,O);else if(u.attachEvent)u.attachEvent(bh(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ni(){function u(_){return p.call(u.src,u.listener,_)}const p=Lb;return u}function si(u,p,_,E,O){if(Array.isArray(p))for(var V=0;V<p.length;V++)si(u,p[V],_,E,O);else E=l(E)?!!E.capture:!!E,_=xh(_),u&&u[Oe]?(u=u.i,p=String(p).toString(),p in u.g&&(V=u.g[p],_=Zr(V,_,E,O),-1<_&&(jn(V[_]),Array.prototype.splice.call(V,_,1),V.length==0&&(delete u.g[p],u.h--)))):u&&(u=al(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Zr(p,_,E,O)),(_=-1<u?p[u]:null)&&ol(_))}function ol(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Oe])qe(p.i,u);else{var _=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(_,E,u.capture):p.detachEvent?p.detachEvent(bh(_),E):p.addListener&&p.removeListener&&p.removeListener(E),(_=al(p))?(qe(_,u),_.h==0&&(_.src=null,p[ti]=null)):jn(u)}}}function bh(u){return u in se?se[u]:se[u]="on"+u}function Lb(u,p){if(u.da)u=!0;else{p=new xt(p,this);var _=u.listener,E=u.ha||u.src;u.fa&&ol(u),u=_.call(E,p)}return u}function al(u){return u=u[ti],u instanceof lr?u:null}var cl="__closure_events_fn_"+(1e9*Math.random()>>>0);function xh(u){return typeof u=="function"?u:(u[cl]||(u[cl]=function(p){return u.handleEvent(p)}),u[cl])}function pe(){bt.call(this),this.i=new lr(this),this.M=this,this.F=null}g(pe,bt),pe.prototype[Oe]=!0,pe.prototype.removeEventListener=function(u,p,_,E){si(this,u,p,_,E)};function ke(u,p){var _,E=u.F;if(E)for(_=[];E;E=E.F)_.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new G(p,u);else if(p instanceof G)p.target=p.target||u;else{var O=p;p=new G(E,u),A(p,O)}if(O=!0,_)for(var V=_.length-1;0<=V;V--){var H=p.g=_[V];O=zo(H,E,!0,p)&&O}if(H=p.g=u,O=zo(H,E,!0,p)&&O,O=zo(H,E,!1,p)&&O,_)for(V=0;V<_.length;V++)H=p.g=_[V],O=zo(H,E,!1,p)&&O}pe.prototype.N=function(){if(pe.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var _=u.g[p],E=0;E<_.length;E++)jn(_[E]);delete u.g[p],u.h--}}this.F=null},pe.prototype.K=function(u,p,_,E){return this.i.add(String(u),p,!1,_,E)},pe.prototype.L=function(u,p,_,E){return this.i.add(String(u),p,!0,_,E)};function zo(u,p,_,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var O=!0,V=0;V<p.length;++V){var H=p[V];if(H&&!H.da&&H.capture==_){var Ct=H.listener,de=H.ha||H.src;H.fa&&qe(u.i,H),O=Ct.call(de,E)!==!1&&O}}return O&&!E.defaultPrevented}function wh(u,p,_){if(typeof u=="function")_&&(u=f(u,_));else if(u&&typeof u.handleEvent=="function")u=f(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function Eh(u){u.g=wh(()=>{u.g=null,u.i&&(u.i=!1,Eh(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Vb extends bt{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Eh(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ri(u){bt.call(this),this.h=u,this.g={}}g(ri,bt);var Th=[];function Ih(u){M(u.g,function(p,_){this.g.hasOwnProperty(_)&&ol(p)},u),u.g={}}ri.prototype.N=function(){ri.aa.N.call(this),Ih(this)},ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ll=a.JSON.stringify,Fb=a.JSON.parse,$b=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function ul(){}ul.prototype.h=null;function Ah(u){return u.h||(u.h=u.i())}function kh(){}var ii={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function dl(){G.call(this,"d")}g(dl,G);function hl(){G.call(this,"c")}g(hl,G);var bs={},Sh=null;function Ho(){return Sh=Sh||new pe}bs.La="serverreachability";function Ch(u){G.call(this,bs.La,u)}g(Ch,G);function oi(u){const p=Ho();ke(p,new Ch(p))}bs.STAT_EVENT="statevent";function Rh(u,p){G.call(this,bs.STAT_EVENT,u),this.stat=p}g(Rh,G);function Se(u){const p=Ho();ke(p,new Rh(p,u))}bs.Ma="timingevent";function Ph(u,p){G.call(this,bs.Ma,u),this.size=p}g(Ph,G);function ai(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function ci(){this.g=!0}ci.prototype.xa=function(){this.g=!1};function Bb(u,p,_,E,O,V){u.info(function(){if(u.g)if(V)for(var H="",Ct=V.split("&"),de=0;de<Ct.length;de++){var gt=Ct[de].split("=");if(1<gt.length){var me=gt[0];gt=gt[1];var ge=me.split("_");H=2<=ge.length&&ge[1]=="type"?H+(me+"="+gt+"&"):H+(me+"=redacted&")}}else H=null;else H=V;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+p+`
`+_+`
`+H})}function Ub(u,p,_,E,O,V,H){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+p+`
`+_+`
`+V+" "+H})}function ur(u,p,_,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+zb(u,_)+(E?" "+E:"")})}function jb(u,p){u.info(function(){return"TIMEOUT: "+p})}ci.prototype.info=function(){};function zb(u,p){if(!u.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var E=_[u];if(!(2>E.length)){var O=E[1];if(Array.isArray(O)&&!(1>O.length)){var V=O[0];if(V!="noop"&&V!="stop"&&V!="close")for(var H=1;H<O.length;H++)O[H]=""}}}}return ll(_)}catch{return p}}var qo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fl;function Wo(){}g(Wo,ul),Wo.prototype.g=function(){return new XMLHttpRequest},Wo.prototype.i=function(){return{}},fl=new Wo;function zn(u,p,_,E){this.j=u,this.i=p,this.l=_,this.R=E||1,this.U=new ri(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mh}function Mh(){this.i=null,this.g="",this.h=!1}var Oh={},pl={};function ml(u,p,_){u.L=1,u.v=Qo(bn(p)),u.m=_,u.P=!0,Nh(u,null)}function Nh(u,p){u.F=Date.now(),Go(u),u.A=bn(u.v);var _=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Kh(_.i,"t",E),u.C=0,_=u.j.J,u.h=new Mh,u.g=pf(u.j,_?p:null,!u.m),0<u.O&&(u.M=new Vb(f(u.Y,u,u.g),u.O)),p=u.U,_=u.g,E=u.ca;var O="readystatechange";Array.isArray(O)||(O&&(Th[0]=O.toString()),O=Th);for(var V=0;V<O.length;V++){var H=Ne(_,O[V],E||p.handleEvent,!1,p.h||p);if(!H)break;p.g[H.key]=H}p=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),oi(),Bb(u.i,u.u,u.A,u.l,u.R,u.m)}zn.prototype.ca=function(u){u=u.target;const p=this.M;p&&xn(u)==3?p.j():this.Y(u)},zn.prototype.Y=function(u){try{if(u==this.g)t:{const ge=xn(this.g);var p=this.g.Ba();const fr=this.g.Z();if(!(3>ge)&&(ge!=3||this.g&&(this.h.h||this.g.oa()||nf(this.g)))){this.J||ge!=4||p==7||(p==8||0>=fr?oi(3):oi(2)),gl(this);var _=this.g.Z();this.X=_;e:if(Lh(this)){var E=nf(this.g);u="";var O=E.length,V=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xs(this),li(this);var H="";break e}this.h.i=new a.TextDecoder}for(p=0;p<O;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(V&&p==O-1)});E.length=0,this.h.g+=u,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=_==200,Ub(this.i,this.u,this.A,this.l,this.R,ge,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Ct,de=this.g;if((Ct=de.g?de.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(Ct)){var gt=Ct;break e}}gt=null}if(_=gt)ur(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_l(this,_);else{this.o=!1,this.s=3,Se(12),xs(this),li(this);break t}}if(this.P){_=!0;let We;for(;!this.J&&this.C<H.length;)if(We=Hb(this,H),We==pl){ge==4&&(this.s=4,Se(14),_=!1),ur(this.i,this.l,null,"[Incomplete Response]");break}else if(We==Oh){this.s=4,Se(15),ur(this.i,this.l,H,"[Invalid Chunk]"),_=!1;break}else ur(this.i,this.l,We,null),_l(this,We);if(Lh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ge!=4||H.length!=0||this.h.h||(this.s=1,Se(16),_=!1),this.o=this.o&&_,!_)ur(this.i,this.l,H,"[Invalid Chunked Response]"),xs(this),li(this);else if(0<H.length&&!this.W){this.W=!0;var me=this.j;me.g==this&&me.ba&&!me.M&&(me.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),El(me),me.M=!0,Se(11))}}else ur(this.i,this.l,H,null),_l(this,H);ge==4&&xs(this),this.o&&!this.J&&(ge==4?uf(this.j,this):(this.o=!1,Go(this)))}else ax(this.g),_==400&&0<H.indexOf("Unknown SID")?(this.s=3,Se(12)):(this.s=0,Se(13)),xs(this),li(this)}}}catch{}finally{}};function Lh(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Hb(u,p){var _=u.C,E=p.indexOf(`
`,_);return E==-1?pl:(_=Number(p.substring(_,E)),isNaN(_)?Oh:(E+=1,E+_>p.length?pl:(p=p.slice(E,E+_),u.C=E+_,p)))}zn.prototype.cancel=function(){this.J=!0,xs(this)};function Go(u){u.S=Date.now()+u.I,Vh(u,u.I)}function Vh(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=ai(f(u.ba,u),p)}function gl(u){u.B&&(a.clearTimeout(u.B),u.B=null)}zn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(jb(this.i,this.A),this.L!=2&&(oi(),Se(17)),xs(this),this.s=2,li(this)):Vh(this,this.S-u)};function li(u){u.j.G==0||u.J||uf(u.j,u)}function xs(u){gl(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Ih(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function _l(u,p){try{var _=u.j;if(_.G!=0&&(_.g==u||yl(_.h,u))){if(!u.K&&yl(_.h,u)&&_.G==3){try{var E=_.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)na(_),ta(_);else break t;wl(_),Se(18)}}else _.za=O[1],0<_.za-_.T&&37500>O[2]&&_.F&&_.v==0&&!_.C&&(_.C=ai(f(_.Za,_),6e3));if(1>=Bh(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Es(_,11)}else if((u.K||_.g==u)&&na(_),!T(p))for(O=_.Da.g.parse(p),p=0;p<O.length;p++){let gt=O[p];if(_.T=gt[0],gt=gt[1],_.G==2)if(gt[0]=="c"){_.K=gt[1],_.ia=gt[2];const me=gt[3];me!=null&&(_.la=me,_.j.info("VER="+_.la));const ge=gt[4];ge!=null&&(_.Aa=ge,_.j.info("SVER="+_.Aa));const fr=gt[5];fr!=null&&typeof fr=="number"&&0<fr&&(E=1.5*fr,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const We=u.g;if(We){const ra=We.g?We.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ra){var V=E.h;V.g||ra.indexOf("spdy")==-1&&ra.indexOf("quic")==-1&&ra.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(vl(V,V.h),V.h=null))}if(E.D){const Tl=We.g?We.g.getResponseHeader("X-HTTP-Session-Id"):null;Tl&&(E.ya=Tl,Dt(E.I,E.D,Tl))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var H=u;if(E.qa=ff(E,E.J?E.ia:null,E.W),H.K){Uh(E.h,H);var Ct=H,de=E.L;de&&(Ct.I=de),Ct.B&&(gl(Ct),Go(Ct)),E.g=H}else cf(E);0<_.i.length&&ea(_)}else gt[0]!="stop"&&gt[0]!="close"||Es(_,7);else _.G==3&&(gt[0]=="stop"||gt[0]=="close"?gt[0]=="stop"?Es(_,7):xl(_):gt[0]!="noop"&&_.l&&_.l.ta(gt),_.v=0)}}oi(4)}catch{}}var qb=class{constructor(u,p){this.g=u,this.map=p}};function Fh(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $h(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Bh(u){return u.h?1:u.g?u.g.size:0}function yl(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function vl(u,p){u.g?u.g.add(p):u.h=p}function Uh(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Fh.prototype.cancel=function(){if(this.i=jh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function jh(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const _ of u.g.values())p=p.concat(_.D);return p}return v(u.i)}function Wb(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(c(u)){for(var p=[],_=u.length,E=0;E<_;E++)p.push(u[E]);return p}p=[],_=0;for(E in u)p[_++]=u[E];return p}function Gb(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(c(u)||typeof u=="string"){var p=[];u=u.length;for(var _=0;_<u;_++)p.push(_);return p}p=[],_=0;for(const E in u)p[_++]=E;return p}}}function zh(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(c(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var _=Gb(u),E=Wb(u),O=E.length,V=0;V<O;V++)p.call(void 0,E[V],_&&_[V],u)}var Hh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yb(u,p){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var E=u[_].indexOf("="),O=null;if(0<=E){var V=u[_].substring(0,E);O=u[_].substring(E+1)}else V=u[_];p(V,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function ws(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ws){this.h=u.h,Yo(this,u.j),this.o=u.o,this.g=u.g,Ko(this,u.s),this.l=u.l;var p=u.i,_=new hi;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),qh(this,_),this.m=u.m}else u&&(p=String(u).match(Hh))?(this.h=!1,Yo(this,p[1]||"",!0),this.o=ui(p[2]||""),this.g=ui(p[3]||"",!0),Ko(this,p[4]),this.l=ui(p[5]||"",!0),qh(this,p[6]||"",!0),this.m=ui(p[7]||"")):(this.h=!1,this.i=new hi(null,this.h))}ws.prototype.toString=function(){var u=[],p=this.j;p&&u.push(di(p,Wh,!0),":");var _=this.g;return(_||p=="file")&&(u.push("//"),(p=this.o)&&u.push(di(p,Wh,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(di(_,_.charAt(0)=="/"?Xb:Qb,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",di(_,Zb)),u.join("")};function bn(u){return new ws(u)}function Yo(u,p,_){u.j=_?ui(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Ko(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function qh(u,p,_){p instanceof hi?(u.i=p,tx(u.i,u.h)):(_||(p=di(p,Jb)),u.i=new hi(p,u.h))}function Dt(u,p,_){u.i.set(p,_)}function Qo(u){return Dt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ui(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function di(u,p,_){return typeof u=="string"?(u=encodeURI(u).replace(p,Kb),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Kb(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Wh=/[#\/\?@]/g,Qb=/[#\?:]/g,Xb=/[#\?]/g,Jb=/[#\?@]/g,Zb=/#/g;function hi(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Hn(u){u.g||(u.g=new Map,u.h=0,u.i&&Yb(u.i,function(p,_){u.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}n=hi.prototype,n.add=function(u,p){Hn(this),this.i=null,u=dr(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(p),this.h+=1,this};function Gh(u,p){Hn(u),p=dr(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Yh(u,p){return Hn(u),p=dr(u,p),u.g.has(p)}n.forEach=function(u,p){Hn(this),this.g.forEach(function(_,E){_.forEach(function(O){u.call(p,O,E,this)},this)},this)},n.na=function(){Hn(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let E=0;E<p.length;E++){const O=u[E];for(let V=0;V<O.length;V++)_.push(p[E])}return _},n.V=function(u){Hn(this);let p=[];if(typeof u=="string")Yh(this,u)&&(p=p.concat(this.g.get(dr(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)p=p.concat(u[_])}return p},n.set=function(u,p){return Hn(this),this.i=null,u=dr(this,u),Yh(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Kh(u,p,_){Gh(u,p),0<_.length&&(u.i=null,u.g.set(dr(u,p),v(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var E=p[_];const V=encodeURIComponent(String(E)),H=this.V(E);for(E=0;E<H.length;E++){var O=V;H[E]!==""&&(O+="="+encodeURIComponent(String(H[E]))),u.push(O)}}return this.i=u.join("&")};function dr(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function tx(u,p){p&&!u.j&&(Hn(u),u.i=null,u.g.forEach(function(_,E){var O=E.toLowerCase();E!=O&&(Gh(this,E),Kh(this,O,_))},u)),u.j=p}function ex(u,p){const _=new ci;if(a.Image){const E=new Image;E.onload=m(qn,_,"TestLoadImage: loaded",!0,p,E),E.onerror=m(qn,_,"TestLoadImage: error",!1,p,E),E.onabort=m(qn,_,"TestLoadImage: abort",!1,p,E),E.ontimeout=m(qn,_,"TestLoadImage: timeout",!1,p,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function nx(u,p){const _=new ci,E=new AbortController,O=setTimeout(()=>{E.abort(),qn(_,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(V=>{clearTimeout(O),V.ok?qn(_,"TestPingServer: ok",!0,p):qn(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(O),qn(_,"TestPingServer: error",!1,p)})}function qn(u,p,_,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(_)}catch{}}function sx(){this.g=new $b}function rx(u,p,_){const E=_||"";try{zh(u,function(O,V){let H=O;l(O)&&(H=ll(O)),p.push(E+V+"="+encodeURIComponent(H))})}catch(O){throw p.push(E+"type="+encodeURIComponent("_badmap")),O}}function Xo(u){this.l=u.Ub||null,this.j=u.eb||!1}g(Xo,ul),Xo.prototype.g=function(){return new Jo(this.l,this.j)},Xo.prototype.i=function(u){return function(){return u}}({});function Jo(u,p){pe.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}g(Jo,pe),n=Jo.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,pi(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fi(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,pi(this)),this.g&&(this.readyState=3,pi(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qh(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qh(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?fi(this):pi(this),this.readyState==3&&Qh(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,fi(this))},n.Qa=function(u){this.g&&(this.response=u,fi(this))},n.ga=function(){this.g&&fi(this)};function fi(u){u.readyState=4,u.l=null,u.j=null,u.v=null,pi(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=p.next();return u.join(`\r
`)};function pi(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Xh(u){let p="";return M(u,function(_,E){p+=E,p+=":",p+=_,p+=`\r
`}),p}function bl(u,p,_){t:{for(E in _){var E=!1;break t}E=!0}E||(_=Xh(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Dt(u,p,_))}function Ht(u){pe.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}g(Ht,pe);var ix=/^https?$/i,ox=["POST","PUT"];n=Ht.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fl.g(),this.v=this.o?Ah(this.o):Ah(fl),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(V){Jh(this,V);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)_.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const V of E.keys())_.set(V,E.get(V));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(V=>V.toLowerCase()=="content-type"),O=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(ox,p,void 0))||E||O||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,H]of _)this.g.setRequestHeader(V,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ef(this),this.u=!0,this.g.send(u),this.u=!1}catch(V){Jh(this,V)}};function Jh(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Zh(u),Zo(u)}function Zh(u){u.A||(u.A=!0,ke(u,"complete"),ke(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ke(this,"complete"),ke(this,"abort"),Zo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zo(this,!0)),Ht.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?tf(this):this.bb())},n.bb=function(){tf(this)};function tf(u){if(u.h&&typeof o<"u"&&(!u.v[1]||xn(u)!=4||u.Z()!=2)){if(u.u&&xn(u)==4)wh(u.Ea,0,u);else if(ke(u,"readystatechange"),xn(u)==4){u.h=!1;try{const H=u.Z();t:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var _;if(!(_=p)){var E;if(E=H===0){var O=String(u.D).match(Hh)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),E=!ix.test(O?O.toLowerCase():"")}_=E}if(_)ke(u,"complete"),ke(u,"success");else{u.m=6;try{var V=2<xn(u)?u.g.statusText:""}catch{V=""}u.l=V+" ["+u.Z()+"]",Zh(u)}}finally{Zo(u)}}}}function Zo(u,p){if(u.g){ef(u);const _=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||ke(u,"ready");try{_.onreadystatechange=E}catch{}}}function ef(u){u.I&&(a.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function xn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Fb(p)}};function nf(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ax(u){const p={};u=(u.g&&2<=xn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(T(u[E]))continue;var _=C(u[E]);const O=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const V=p[O]||[];p[O]=V,V.push(_)}I(p,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function mi(u,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||p}function sf(u){this.Aa=0,this.i=[],this.j=new ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=mi("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=mi("baseRetryDelayMs",5e3,u),this.cb=mi("retryDelaySeedMs",1e4,u),this.Wa=mi("forwardChannelMaxRetries",2,u),this.wa=mi("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Fh(u&&u.concurrentRequestLimit),this.Da=new sx,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=sf.prototype,n.la=8,n.G=1,n.connect=function(u,p,_,E){Se(0),this.W=u,this.H=p||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=ff(this,null,this.W),ea(this)};function xl(u){if(rf(u),u.G==3){var p=u.U++,_=bn(u.I);if(Dt(_,"SID",u.K),Dt(_,"RID",p),Dt(_,"TYPE","terminate"),gi(u,_),p=new zn(u,u.j,p),p.L=2,p.v=Qo(bn(_)),_=!1,a.navigator&&a.navigator.sendBeacon)try{_=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&a.Image&&(new Image().src=p.v,_=!0),_||(p.g=pf(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Go(p)}hf(u)}function ta(u){u.g&&(El(u),u.g.cancel(),u.g=null)}function rf(u){ta(u),u.u&&(a.clearTimeout(u.u),u.u=null),na(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function ea(u){if(!$h(u.h)&&!u.s){u.s=!0;var p=u.Ga;L||ft(),q||(L(),q=!0),Y.add(p,u),u.B=0}}function cx(u,p){return Bh(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=ai(f(u.Ga,u,p),df(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const O=new zn(this,this.j,u);let V=this.o;if(this.S&&(V?(V=b(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(O.H=V,V=null),this.P)t:{for(var p=0,_=0;_<this.i.length;_++){e:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break e}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=_;break t}if(p===4096||_===this.i.length-1){p=_+1;break t}}p=1e3}else p=1e3;p=af(this,O,p),_=bn(this.I),Dt(_,"RID",u),Dt(_,"CVER",22),this.D&&Dt(_,"X-HTTP-Session-Id",this.D),gi(this,_),V&&(this.O?p="headers="+encodeURIComponent(String(Xh(V)))+"&"+p:this.m&&bl(_,this.m,V)),vl(this.h,O),this.Ua&&Dt(_,"TYPE","init"),this.P?(Dt(_,"$req",p),Dt(_,"SID","null"),O.T=!0,ml(O,_,null)):ml(O,_,p),this.G=2}}else this.G==3&&(u?of(this,u):this.i.length==0||$h(this.h)||of(this))};function of(u,p){var _;p?_=p.l:_=u.U++;const E=bn(u.I);Dt(E,"SID",u.K),Dt(E,"RID",_),Dt(E,"AID",u.T),gi(u,E),u.m&&u.o&&bl(E,u.m,u.o),_=new zn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),p&&(u.i=p.D.concat(u.i)),p=af(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),vl(u.h,_),ml(_,E,p)}function gi(u,p){u.H&&M(u.H,function(_,E){Dt(p,E,_)}),u.l&&zh({},function(_,E){Dt(p,E,_)})}function af(u,p,_){_=Math.min(u.i.length,_);var E=u.l?f(u.l.Na,u.l,u):null;t:{var O=u.i;let V=-1;for(;;){const H=["count="+_];V==-1?0<_?(V=O[0].g,H.push("ofs="+V)):V=0:H.push("ofs="+V);let Ct=!0;for(let de=0;de<_;de++){let gt=O[de].g;const me=O[de].map;if(gt-=V,0>gt)V=Math.max(0,O[de].g-100),Ct=!1;else try{rx(me,H,"req"+gt+"_")}catch{E&&E(me)}}if(Ct){E=H.join("&");break t}}}return u=u.i.splice(0,_),p.D=u,E}function cf(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;L||ft(),q||(L(),q=!0),Y.add(p,u),u.v=0}}function wl(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=ai(f(u.Fa,u),df(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,lf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=ai(f(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Se(10),ta(this),lf(this))};function El(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function lf(u){u.g=new zn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=bn(u.qa);Dt(p,"RID","rpc"),Dt(p,"SID",u.K),Dt(p,"AID",u.T),Dt(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&Dt(p,"TO",u.ja),Dt(p,"TYPE","xmlhttp"),gi(u,p),u.m&&u.o&&bl(p,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Qo(bn(p)),_.m=null,_.P=!0,Nh(_,u)}n.Za=function(){this.C!=null&&(this.C=null,ta(this),wl(this),Se(19))};function na(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function uf(u,p){var _=null;if(u.g==p){na(u),El(u),u.g=null;var E=2}else if(yl(u.h,p))_=p.D,Uh(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var O=u.B;E=Ho(),ke(E,new Ph(E,_)),ea(u)}else cf(u);else if(O=p.s,O==3||O==0&&0<p.X||!(E==1&&cx(u,p)||E==2&&wl(u)))switch(_&&0<_.length&&(p=u.h,p.i=p.i.concat(_)),O){case 1:Es(u,5);break;case 4:Es(u,10);break;case 3:Es(u,6);break;default:Es(u,2)}}}function df(u,p){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*p}function Es(u,p){if(u.j.info("Error code "+p),p==2){var _=f(u.fb,u),E=u.Xa;const O=!E;E=new ws(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Yo(E,"https"),Qo(E),O?ex(E.toString(),_):nx(E.toString(),_)}else Se(2);u.G=0,u.l&&u.l.sa(p),hf(u),rf(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function hf(u){if(u.G=0,u.ka=[],u.l){const p=jh(u.h);(p.length!=0||u.i.length!=0)&&(y(u.ka,p),y(u.ka,u.i),u.h.i.length=0,v(u.i),u.i.length=0),u.l.ra()}}function ff(u,p,_){var E=_ instanceof ws?bn(_):new ws(_);if(E.g!="")p&&(E.g=p+"."+E.g),Ko(E,E.s);else{var O=a.location;E=O.protocol,p=p?p+"."+O.hostname:O.hostname,O=+O.port;var V=new ws(null);E&&Yo(V,E),p&&(V.g=p),O&&Ko(V,O),_&&(V.l=_),E=V}return _=u.D,p=u.ya,_&&p&&Dt(E,_,p),Dt(E,"VER",u.la),gi(u,E),E}function pf(u,p,_){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ht(new Xo({eb:_})):new Ht(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function mf(){}n=mf.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function sa(){}sa.prototype.g=function(u,p){return new Le(u,p)};function Le(u,p){pe.call(this),this.g=new sf(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!T(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!T(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new hr(this)}g(Le,pe),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){xl(this.g)},Le.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=ll(u),u=_);p.i.push(new qb(p.Ya++,u)),p.G==3&&ea(p)},Le.prototype.N=function(){this.g.l=null,delete this.j,xl(this.g),delete this.g,Le.aa.N.call(this)};function gf(u){dl.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){t:{for(const _ in p){u=_;break t}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}g(gf,dl);function _f(){hl.call(this),this.status=1}g(_f,hl);function hr(u){this.g=u}g(hr,mf),hr.prototype.ua=function(){ke(this.g,"a")},hr.prototype.ta=function(u){ke(this.g,new gf(u))},hr.prototype.sa=function(u){ke(this.g,new _f)},hr.prototype.ra=function(){ke(this.g,"b")},sa.prototype.createWebChannel=sa.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,Ug=function(){return new sa},Bg=function(){return Ho()},$g=bs,hu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qo.NO_ERROR=0,qo.TIMEOUT=8,qo.HTTP_ERROR=6,Sa=qo,Dh.COMPLETE="complete",Fg=Dh,kh.EventType=ii,ii.OPEN="a",ii.CLOSE="b",ii.ERROR="c",ii.MESSAGE="d",pe.prototype.listen=pe.prototype.K,Di=kh,Ht.prototype.listenOnce=Ht.prototype.L,Ht.prototype.getLastError=Ht.prototype.Ka,Ht.prototype.getLastErrorCode=Ht.prototype.Ba,Ht.prototype.getStatus=Ht.prototype.Z,Ht.prototype.getResponseJson=Ht.prototype.Oa,Ht.prototype.getResponseText=Ht.prototype.oa,Ht.prototype.send=Ht.prototype.ea,Ht.prototype.setWithCredentials=Ht.prototype.Ha,Vg=Ht}).apply(typeof ia<"u"?ia:typeof self<"u"?self:typeof window<"u"?window:{});const Cf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Gr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new nd("@firebase/firestore");function _i(){return Ws.logLevel}function K(n,...t){if(Ws.logLevel<=dt.DEBUG){const e=t.map(id);Ws.debug(`Firestore (${Gr}): ${n}`,...e)}}function Vn(n,...t){if(Ws.logLevel<=dt.ERROR){const e=t.map(id);Ws.error(`Firestore (${Gr}): ${n}`,...e)}}function Gs(n,...t){if(Ws.logLevel<=dt.WARN){const e=t.map(id);Ws.warn(`Firestore (${Gr}): ${n}`,...e)}}function id(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function tt(n="Unexpected state"){const t=`FIRESTORE (${Gr}) INTERNAL ASSERTION FAILED: `+n;throw Vn(t),new Error(t)}function St(n,t){n||tt()}function rt(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends yn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(be.UNAUTHENTICATED))}shutdown(){}}class H0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class q0{constructor(t){this.t=t,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){St(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,e(c)):Promise.resolve();let i=new Mn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mn,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mn)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(St(typeof s.accessToken=="string"),new jg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return St(t===null||typeof t=="string"),new be(t)}}class W0{constructor(t,e,s){this.l=t,this.h=e,this.P=s,this.type="FirstParty",this.user=be.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class G0{constructor(t,e,s){this.l=t,this.h=e,this.P=s}getToken(){return Promise.resolve(new W0(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Y0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class K0{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){St(this.o===void 0);const s=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(St(typeof e.token=="string"),this.R=e.token,new Y0(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=Q0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<e&&(s+=t.charAt(r[i]%t.length))}return s}}function _t(n,t){return n<t?-1:n>t?1:0}function Lr(n,t,e){return n.length===t.length&&n.every((s,r)=>e(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new W($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new W($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new W($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new W($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ft.fromMillis(Date.now())}static fromDate(t){return Ft.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*e));return new Ft(e,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_t(this.nanoseconds,t.nanoseconds):_t(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new nt(t)}static min(){return new nt(new Ft(0,0))}static max(){return new nt(new Ft(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t,e,s){e===void 0?e=0:e>t.length&&tt(),s===void 0?s=t.length-e:s>t.length-e&&tt(),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return eo.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof eo?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let r=0;r<s;r++){const i=t.get(r),o=e.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ot extends eo{construct(t,e,s){return new Ot(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new W($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(r=>r.length>0))}return new Ot(e)}static emptyPath(){return new Ot([])}}const X0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ce extends eo{construct(t,e,s){return new ce(t,e,s)}static isValidIdentifier(t){return X0.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ce.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ce(["__name__"])}static fromServerFormat(t){const e=[];let s="",r=0;const i=()=>{if(s.length===0)throw new W($.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new W($.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new W($.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ce(e)}static emptyPath(){return new ce([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.path=t}static fromPath(t){return new Q(Ot.fromString(t))}static fromName(t){return new Q(Ot.fromString(t).popFirst(5))}static empty(){return new Q(Ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ot.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Ot.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Q(new Ot(t.slice()))}}function J0(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=nt.fromTimestamp(s===1e9?new Ft(e+1,0):new Ft(e,s));return new ds(r,Q.empty(),t)}function Z0(n){return new ds(n.readTime,n.key,-1)}class ds{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new ds(nt.min(),Q.empty(),-1)}static max(){return new ds(nt.max(),Q.empty(),-1)}}function tw(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=Q.comparator(n.documentKey,t.documentKey),e!==0?e:_t(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==ew)throw n;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&tt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new U((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(e,i).next(s,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof U?e:U.resolve(e)}catch(e){return U.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):U.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):U.reject(e)}static resolve(t){return new U((e,s)=>{e(t)})}static reject(t){return new U((e,s)=>{s(t)})}static waitFor(t){return new U((e,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&e()},c=>s(c))}),o=!0,i===r&&e()})}static or(t){let e=U.resolve(!1);for(const s of t)e=e.next(r=>r?U.resolve(r):s());return e}static forEach(t,e){const s=[];return t.forEach((r,i)=>{s.push(e.call(this,r,i))}),this.waitFor(s)}static mapArray(t,e){return new U((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;e(t[l]).next(d=>{o[l]=d,++a,a===i&&s(o)},d=>r(d))}})}static doWhile(t,e){return new U((s,r)=>{const i=()=>{t()===!0?e().next(()=>{i()},r):s()};i()})}}function sw(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function To(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ad{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ie(s),this.se=s=>e.writeSequenceNumber(s))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ad.oe=-1;function Tc(n){return n==null}function Ya(n){return n===0&&1/n==-1/0}function rw(n){return typeof n=="number"&&Number.isInteger(n)&&!Ya(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function nr(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Hg(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t,e){this.comparator=t,this.root=e||he.EMPTY}insert(t,e){return new jt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,he.BLACK,null,null))}remove(t){return new jt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,he.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return e+s.left.size;r<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new oa(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new oa(this.root,t,this.comparator,!1)}getReverseIterator(){return new oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new oa(this.root,t,this.comparator,!0)}}class oa{constructor(t,e,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?s(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class he{constructor(t,e,s,r,i){this.key=t,this.value=e,this.color=s??he.RED,this.left=r??he.EMPTY,this.right=i??he.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,r,i){return new he(t??this.key,e??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,s),null):i===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return he.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return he.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw tt();const t=this.left.check();if(t!==this.right.check())throw tt();return t+(this.isRed()?0:1)}}he.EMPTY=null,he.RED=!0,he.BLACK=!1;he.EMPTY=new class{constructor(){this.size=0}get key(){throw tt()}get value(){throw tt()}get color(){throw tt()}get left(){throw tt()}get right(){throw tt()}copy(t,e,s,r,i){return this}insert(t,e,s){return new he(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this.comparator=t,this.data=new jt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Pf(this.data.getIterator())}getIteratorFrom(t){return new Pf(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof fe)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new fe(this.comparator);return e.data=t,e}}class Pf{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.fields=t,t.sort(ce.comparator)}static empty(){return new Fe([])}unionWith(t){let e=new fe(ce.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new Fe(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Lr(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
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
 */class qg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qg("Invalid base64 string: "+i):i}}(t);return new ue(e)}static fromUint8Array(t){const e=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(t);return new ue(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let r=0;r<e.length;r++)s[r]=e.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _t(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ue.EMPTY_BYTE_STRING=new ue("");const iw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hs(n){if(St(!!n),typeof n=="string"){let t=0;const e=iw.exec(n);if(St(!!e),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Qt(n.seconds),nanos:Qt(n.nanos)}}function Qt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ys(n){return typeof n=="string"?ue.fromBase64String(n):ue.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ld(n){const t=n.mapValue.fields.__previous_value__;return cd(t)?ld(t):t}function no(n){const t=hs(n.mapValue.fields.__local_write_time__.timestampValue);return new Ft(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(t,e,s,r,i,o,a,c,l){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Vr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Vr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Vr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa={mapValue:{}};function Ks(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?cd(n)?4:cw(n)?9007199254740991:aw(n)?10:11:tt()}function gn(n,t){if(n===t)return!0;const e=Ks(n);if(e!==Ks(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return no(n).isEqual(no(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=hs(r.timestampValue),a=hs(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(r,i){return Ys(r.bytesValue).isEqual(Ys(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(r,i){return Qt(r.geoPointValue.latitude)===Qt(i.geoPointValue.latitude)&&Qt(r.geoPointValue.longitude)===Qt(i.geoPointValue.longitude)}(n,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Qt(r.integerValue)===Qt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Qt(r.doubleValue),a=Qt(i.doubleValue);return o===a?Ya(o)===Ya(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Lr(n.arrayValue.values||[],t.arrayValue.values||[],gn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(Rf(o)!==Rf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!gn(o[c],a[c])))return!1;return!0}(n,t);default:return tt()}}function so(n,t){return(n.values||[]).find(e=>gn(e,t))!==void 0}function Fr(n,t){if(n===t)return 0;const e=Ks(n),s=Ks(t);if(e!==s)return _t(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return _t(n.booleanValue,t.booleanValue);case 2:return function(i,o){const a=Qt(i.integerValue||i.doubleValue),c=Qt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return Df(n.timestampValue,t.timestampValue);case 4:return Df(no(n),no(t));case 5:return _t(n.stringValue,t.stringValue);case 6:return function(i,o){const a=Ys(i),c=Ys(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const d=_t(a[l],c[l]);if(d!==0)return d}return _t(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,o){const a=_t(Qt(i.latitude),Qt(o.latitude));return a!==0?a:_t(Qt(i.longitude),Qt(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Mf(n.arrayValue,t.arrayValue);case 10:return function(i,o){var a,c,l,d;const h=i.fields||{},f=o.fields||{},m=(a=h.value)===null||a===void 0?void 0:a.arrayValue,g=(c=f.value)===null||c===void 0?void 0:c.arrayValue,v=_t(((l=m==null?void 0:m.values)===null||l===void 0?void 0:l.length)||0,((d=g==null?void 0:g.values)===null||d===void 0?void 0:d.length)||0);return v!==0?v:Mf(m,g)}(n.mapValue,t.mapValue);case 11:return function(i,o){if(i===aa.mapValue&&o===aa.mapValue)return 0;if(i===aa.mapValue)return 1;if(o===aa.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},d=Object.keys(l);c.sort(),d.sort();for(let h=0;h<c.length&&h<d.length;++h){const f=_t(c[h],d[h]);if(f!==0)return f;const m=Fr(a[c[h]],l[d[h]]);if(m!==0)return m}return _t(c.length,d.length)}(n.mapValue,t.mapValue);default:throw tt()}}function Df(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return _t(n,t);const e=hs(n),s=hs(t),r=_t(e.seconds,s.seconds);return r!==0?r:_t(e.nanos,s.nanos)}function Mf(n,t){const e=n.values||[],s=t.values||[];for(let r=0;r<e.length&&r<s.length;++r){const i=Fr(e[r],s[r]);if(i)return i}return _t(e.length,s.length)}function $r(n){return fu(n)}function fu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=hs(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ys(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return Q.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",r=!0;for(const i of e.values||[])r?r=!1:s+=",",s+=fu(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${fu(e.fields[o])}`;return r+"}"}(n.mapValue):tt()}function Of(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function pu(n){return!!n&&"integerValue"in n}function ud(n){return!!n&&"arrayValue"in n}function Nf(n){return!!n&&"nullValue"in n}function Lf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ca(n){return!!n&&"mapValue"in n}function aw(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ui(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return nr(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=Ui(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ui(n.arrayValue.values[e]);return t}return Object.assign({},n)}function cw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this.value=t}static empty(){return new De({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!Ca(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ui(e)}setAll(t){let e=ce.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,s,r),s={},r=[],e=a.popLast()}o?s[a.lastSegment()]=Ui(o):r.push(a.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,s,r)}delete(t){const e=this.field(t.popLast());Ca(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return gn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=e.mapValue.fields[t.get(s)];Ca(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,s){nr(e,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new De(Ui(this.value))}}function Wg(n){const t=[];return nr(n.fields,(e,s)=>{const r=new ce([e]);if(Ca(s)){const i=Wg(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new Fe(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e,s,r,i,o,a){this.key=t,this.documentType=e,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new we(t,0,nt.min(),nt.min(),nt.min(),De.empty(),0)}static newFoundDocument(t,e,s,r){return new we(t,1,e,nt.min(),s,r,0)}static newNoDocument(t,e){return new we(t,2,e,nt.min(),nt.min(),De.empty(),0)}static newUnknownDocument(t,e){return new we(t,3,e,nt.min(),nt.min(),De.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(nt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof we&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new we(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ka{constructor(t,e){this.position=t,this.inclusive=e}}function Vf(n,t,e){let s=0;for(let r=0;r<n.position.length;r++){const i=t[r],o=n.position[r];if(i.field.isKeyField()?s=Q.comparator(Q.fromName(o.referenceValue),e.key):s=Fr(o,e.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ff(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!gn(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class ro{constructor(t,e="asc"){this.field=t,this.dir=e}}function lw(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Gg{}class ee extends Gg{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new dw(t,e,s):e==="array-contains"?new pw(t,s):e==="in"?new mw(t,s):e==="not-in"?new gw(t,s):e==="array-contains-any"?new _w(t,s):new ee(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new hw(t,s):new fw(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Fr(e,this.value)):e!==null&&Ks(this.value)===Ks(e)&&this.matchesComparison(Fr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return tt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ze extends Gg{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ze(t,e)}matches(t){return Yg(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Yg(n){return n.op==="and"}function Kg(n){return uw(n)&&Yg(n)}function uw(n){for(const t of n.filters)if(t instanceof Ze)return!1;return!0}function mu(n){if(n instanceof ee)return n.field.canonicalString()+n.op.toString()+$r(n.value);if(Kg(n))return n.filters.map(t=>mu(t)).join(",");{const t=n.filters.map(e=>mu(e)).join(",");return`${n.op}(${t})`}}function Qg(n,t){return n instanceof ee?function(s,r){return r instanceof ee&&s.op===r.op&&s.field.isEqual(r.field)&&gn(s.value,r.value)}(n,t):n instanceof Ze?function(s,r){return r instanceof Ze&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&Qg(o,r.filters[a]),!0):!1}(n,t):void tt()}function Xg(n){return n instanceof ee?function(e){return`${e.field.canonicalString()} ${e.op} ${$r(e.value)}`}(n):n instanceof Ze?function(e){return e.op.toString()+" {"+e.getFilters().map(Xg).join(" ,")+"}"}(n):"Filter"}class dw extends ee{constructor(t,e,s){super(t,e,s),this.key=Q.fromName(s.referenceValue)}matches(t){const e=Q.comparator(t.key,this.key);return this.matchesComparison(e)}}class hw extends ee{constructor(t,e){super(t,"in",e),this.keys=Jg("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class fw extends ee{constructor(t,e){super(t,"not-in",e),this.keys=Jg("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Jg(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>Q.fromName(s.referenceValue))}class pw extends ee{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ud(e)&&so(e.arrayValue,this.value)}}class mw extends ee{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&so(this.value.arrayValue,e)}}class gw extends ee{constructor(t,e){super(t,"not-in",e)}matches(t){if(so(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!so(this.value.arrayValue,e)}}class _w extends ee{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ud(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>so(this.value.arrayValue,s))}}/**
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
 */class yw{constructor(t,e=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function $f(n,t=null,e=[],s=[],r=null,i=null,o=null){return new yw(n,t,e,s,r,i,o)}function dd(n){const t=rt(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>mu(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Tc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>$r(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>$r(s)).join(",")),t.ue=e}return t.ue}function hd(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!lw(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Qg(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ff(n.startAt,t.startAt)&&Ff(n.endAt,t.endAt)}function gu(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t,e=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function vw(n,t,e,s,r,i,o,a){return new Yr(n,t,e,s,r,i,o,a)}function fd(n){return new Yr(n)}function Bf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Zg(n){return n.collectionGroup!==null}function ji(n){const t=rt(n);if(t.ce===null){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new fe(ce.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new ro(i,s))}),e.has(ce.keyField().canonicalString())||t.ce.push(new ro(ce.keyField(),s))}return t.ce}function dn(n){const t=rt(n);return t.le||(t.le=bw(t,ji(n))),t.le}function bw(n,t){if(n.limitType==="F")return $f(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new ro(r.field,i)});const e=n.endAt?new Ka(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Ka(n.startAt.position,n.startAt.inclusive):null;return $f(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function _u(n,t){const e=n.filters.concat([t]);return new Yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Qa(n,t,e){return new Yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ic(n,t){return hd(dn(n),dn(t))&&n.limitType===t.limitType}function t_(n){return`${dd(dn(n))}|lt:${n.limitType}`}function xr(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(r=>Xg(r)).join(", ")}]`),Tc(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(r=>$r(r)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(r=>$r(r)).join(",")),`Target(${s})`}(dn(n))}; limitType=${n.limitType})`}function Ac(n,t){return t.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):Q.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,t)&&function(s,r){for(const i of ji(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,t)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,t)&&function(s,r){return!(s.startAt&&!function(o,a,c){const l=Vf(o,a,c);return o.inclusive?l<=0:l<0}(s.startAt,ji(s),r)||s.endAt&&!function(o,a,c){const l=Vf(o,a,c);return o.inclusive?l>=0:l>0}(s.endAt,ji(s),r))}(n,t)}function xw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function e_(n){return(t,e)=>{let s=!1;for(const r of ji(n)){const i=ww(r,t,e);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function ww(n,t,e){const s=n.field.isKeyField()?Q.comparator(t.key,e.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Fr(c,l):tt()}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return tt()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[e]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){nr(this.inner,(e,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Hg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=new jt(Q.comparator);function Fn(){return Ew}const n_=new jt(Q.comparator);function Mi(...n){let t=n_;for(const e of n)t=t.insert(e.key,e);return t}function s_(n){let t=n_;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function Ns(){return zi()}function r_(){return zi()}function zi(){return new Kr(n=>n.toString(),(n,t)=>n.isEqual(t))}const Tw=new jt(Q.comparator),Iw=new fe(Q.comparator);function lt(...n){let t=Iw;for(const e of n)t=t.add(e);return t}const Aw=new fe(_t);function kw(){return Aw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ya(t)?"-0":t}}function i_(n){return{integerValue:""+n}}function Sw(n,t){return rw(t)?i_(t):pd(n,t)}/**
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
 */class kc{constructor(){this._=void 0}}function Cw(n,t,e){return n instanceof Xa?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&cd(i)&&(i=ld(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(e,t):n instanceof io?a_(n,t):n instanceof oo?c_(n,t):function(r,i){const o=o_(r,i),a=Uf(o)+Uf(r.Pe);return pu(o)&&pu(r.Pe)?i_(a):pd(r.serializer,a)}(n,t)}function Rw(n,t,e){return n instanceof io?a_(n,t):n instanceof oo?c_(n,t):e}function o_(n,t){return n instanceof Ja?function(s){return pu(s)||function(i){return!!i&&"doubleValue"in i}(s)}(t)?t:{integerValue:0}:null}class Xa extends kc{}class io extends kc{constructor(t){super(),this.elements=t}}function a_(n,t){const e=l_(t);for(const s of n.elements)e.some(r=>gn(r,s))||e.push(s);return{arrayValue:{values:e}}}class oo extends kc{constructor(t){super(),this.elements=t}}function c_(n,t){let e=l_(t);for(const s of n.elements)e=e.filter(r=>!gn(r,s));return{arrayValue:{values:e}}}class Ja extends kc{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Uf(n){return Qt(n.integerValue||n.doubleValue)}function l_(n){return ud(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Pw(n,t){return n.field.isEqual(t.field)&&function(s,r){return s instanceof io&&r instanceof io||s instanceof oo&&r instanceof oo?Lr(s.elements,r.elements,gn):s instanceof Ja&&r instanceof Ja?gn(s.Pe,r.Pe):s instanceof Xa&&r instanceof Xa}(n.transform,t.transform)}class Dw{constructor(t,e){this.version=t,this.transformResults=e}}class je{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new je}static exists(t){return new je(void 0,t)}static updateTime(t){return new je(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ra(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Sc{}function u_(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new md(n.key,je.none()):new Io(n.key,n.data,je.none());{const e=n.data,s=De.empty();let r=new fe(ce.comparator);for(let i of t.fields)if(!r.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new gs(n.key,s,new Fe(r.toArray()),je.none())}}function Mw(n,t,e){n instanceof Io?function(r,i,o){const a=r.value.clone(),c=zf(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof gs?function(r,i,o){if(!Ra(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=zf(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(d_(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Hi(n,t,e,s){return n instanceof Io?function(i,o,a,c){if(!Ra(i.precondition,o))return a;const l=i.value.clone(),d=Hf(i.fieldTransforms,c,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,t,e,s):n instanceof gs?function(i,o,a,c){if(!Ra(i.precondition,o))return a;const l=Hf(i.fieldTransforms,c,o),d=o.data;return d.setAll(d_(i)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,t,e,s):function(i,o,a){return Ra(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Ow(n,t){let e=null;for(const s of n.fieldTransforms){const r=t.data.field(s.field),i=o_(s.transform,r||null);i!=null&&(e===null&&(e=De.empty()),e.set(s.field,i))}return e||null}function jf(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Lr(s,r,(i,o)=>Pw(i,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Io extends Sc{constructor(t,e,s,r=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class gs extends Sc{constructor(t,e,s,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function d_(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function zf(n,t,e){const s=new Map;St(n.length===e.length);for(let r=0;r<e.length;r++){const i=n[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Rw(o,a,e[r]))}return s}function Hf(n,t,e){const s=new Map;for(const r of n){const i=r.transform,o=e.data.field(r.field);s.set(r.field,Cw(i,o,t))}return s}class md extends Sc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nw extends Sc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(t,e,s,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Mw(i,t,s[r])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=Hi(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=Hi(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=r_();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=e.has(r.key)?null:a;const c=u_(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(nt.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),lt())}isEqual(t){return this.batchId===t.batchId&&Lr(this.mutations,t.mutations,(e,s)=>jf(e,s))&&Lr(this.baseMutations,t.baseMutations,(e,s)=>jf(e,s))}}class gd{constructor(t,e,s,r){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=r}static from(t,e,s){St(t.mutations.length===s.length);let r=function(){return Tw}();const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new gd(t,e,s,r)}}/**
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
 */class Vw{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Fw{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te,ht;function $w(n){switch(n){default:return tt();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function h_(n){if(n===void 0)return Vn("GRPC error has no .code"),$.UNKNOWN;switch(n){case te.OK:return $.OK;case te.CANCELLED:return $.CANCELLED;case te.UNKNOWN:return $.UNKNOWN;case te.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case te.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case te.INTERNAL:return $.INTERNAL;case te.UNAVAILABLE:return $.UNAVAILABLE;case te.UNAUTHENTICATED:return $.UNAUTHENTICATED;case te.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case te.NOT_FOUND:return $.NOT_FOUND;case te.ALREADY_EXISTS:return $.ALREADY_EXISTS;case te.PERMISSION_DENIED:return $.PERMISSION_DENIED;case te.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case te.ABORTED:return $.ABORTED;case te.OUT_OF_RANGE:return $.OUT_OF_RANGE;case te.UNIMPLEMENTED:return $.UNIMPLEMENTED;case te.DATA_LOSS:return $.DATA_LOSS;default:return tt()}}(ht=te||(te={}))[ht.OK=0]="OK",ht[ht.CANCELLED=1]="CANCELLED",ht[ht.UNKNOWN=2]="UNKNOWN",ht[ht.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ht[ht.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ht[ht.NOT_FOUND=5]="NOT_FOUND",ht[ht.ALREADY_EXISTS=6]="ALREADY_EXISTS",ht[ht.PERMISSION_DENIED=7]="PERMISSION_DENIED",ht[ht.UNAUTHENTICATED=16]="UNAUTHENTICATED",ht[ht.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ht[ht.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ht[ht.ABORTED=10]="ABORTED",ht[ht.OUT_OF_RANGE=11]="OUT_OF_RANGE",ht[ht.UNIMPLEMENTED=12]="UNIMPLEMENTED",ht[ht.INTERNAL=13]="INTERNAL",ht[ht.UNAVAILABLE=14]="UNAVAILABLE",ht[ht.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Bw(){return new TextEncoder}/**
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
 */const Uw=new Vs([4294967295,4294967295],0);function qf(n){const t=Bw().encode(n),e=new Lg;return e.update(t),new Uint8Array(e.digest())}function Wf(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Vs([e,s],0),new Vs([r,i],0)]}class _d{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new Oi(`Invalid padding: ${e}`);if(s<0)throw new Oi(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Oi(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new Oi(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Vs.fromNumber(this.Ie)}Ee(t,e,s){let r=t.add(e.multiply(Vs.fromNumber(s)));return r.compare(Uw)===1&&(r=new Vs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=qf(t),[s,r]=Wf(e);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(t,e,s){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new _d(i,r,e);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=qf(t),[s,r]=Wf(e);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class Oi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e,s,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const r=new Map;return r.set(t,Ao.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new Cc(nt.min(),r,new jt(_t),Fn(),lt())}}class Ao{constructor(t,e,s,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new Ao(s,e,lt(),lt(),lt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,e,s,r){this.Re=t,this.removedTargetIds=e,this.key=s,this.Ve=r}}class f_{constructor(t,e){this.targetId=t,this.me=e}}class p_{constructor(t,e,s=ue.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=r}}class Gf{constructor(){this.fe=0,this.ge=Kf(),this.pe=ue.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=lt(),e=lt(),s=lt();return this.ge.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:s=s.add(r);break;default:tt()}}),new Ao(this.pe,this.ye,t,e,s)}Ce(){this.we=!1,this.ge=Kf()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,St(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class jw{constructor(t){this.Le=t,this.Be=new Map,this.ke=Fn(),this.qe=Yf(),this.Qe=new jt(_t)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const s=this.Ge(e);switch(t.state){case 0:this.ze(e)&&s.De(t.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(t.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(s.Ne(),s.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),s.De(t.resumeToken));break;default:tt()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((s,r)=>{this.ze(r)&&e(r)})}He(t){const e=t.targetId,s=t.me.count,r=this.Je(e);if(r){const i=r.target;if(gu(i))if(s===0){const o=new Q(i.path);this.Ue(e,o,we.newNoDocument(o,nt.min()))}else St(s===1);else{const o=this.Ye(e);if(o!==s){const a=this.Ze(t),c=a?this.Xe(a,t,o):1;if(c!==0){this.je(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,l)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=e;let o,a;try{o=Ys(s).toUint8Array()}catch(c){if(c instanceof qg)return Gs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new _d(o,r,i)}catch(c){return Gs(c instanceof Oi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(t,e,s){return e.me.count===s-this.nt(t,e.targetId)?0:2}nt(t,e){const s=this.Le.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,i,null),r++)}),r}rt(t){const e=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&gu(a.target)){const c=new Q(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,we.newNoDocument(c,t))}i.be&&(e.set(o,i.ve()),i.Ce())}});let s=lt();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(t));const r=new Cc(t,e,this.Qe,this.ke,s);return this.ke=Fn(),this.qe=Yf(),this.Qe=new jt(_t),r}$e(t,e){if(!this.ze(t))return;const s=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,s),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,s){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),s&&(this.ke=this.ke.insert(e,s))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Gf,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new fe(_t),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||K("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Gf),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Yf(){return new jt(Q.comparator)}function Kf(){return new jt(Q.comparator)}const zw={asc:"ASCENDING",desc:"DESCENDING"},Hw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qw={and:"AND",or:"OR"};class Ww{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function yu(n,t){return n.useProto3Json||Tc(t)?t:{value:t}}function Za(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function m_(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Gw(n,t){return Za(n,t.toTimestamp())}function hn(n){return St(!!n),nt.fromTimestamp(function(e){const s=hs(e);return new Ft(s.seconds,s.nanos)}(n))}function yd(n,t){return vu(n,t).canonicalString()}function vu(n,t){const e=function(r){return new Ot(["projects",r.projectId,"databases",r.database])}(n).child("documents");return t===void 0?e:e.child(t)}function g_(n){const t=Ot.fromString(n);return St(x_(t)),t}function bu(n,t){return yd(n.databaseId,t.path)}function Rl(n,t){const e=g_(t);if(e.get(1)!==n.databaseId.projectId)throw new W($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new W($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new Q(y_(e))}function __(n,t){return yd(n.databaseId,t)}function Yw(n){const t=g_(n);return t.length===4?Ot.emptyPath():y_(t)}function xu(n){return new Ot(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function y_(n){return St(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Qf(n,t,e){return{name:bu(n,t),fields:e.value.mapValue.fields}}function Kw(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:tt()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(l,d){return l.useProto3Json?(St(d===void 0||typeof d=="string"),ue.fromBase64String(d||"")):(St(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ue.fromUint8Array(d||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const d=l.code===void 0?$.UNKNOWN:h_(l.code);return new W(d,l.message||"")}(o);e=new p_(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Rl(n,s.document.name),i=hn(s.document.updateTime),o=s.document.createTime?hn(s.document.createTime):nt.min(),a=new De({mapValue:{fields:s.document.fields}}),c=we.newFoundDocument(r,i,o,a),l=s.targetIds||[],d=s.removedTargetIds||[];e=new Pa(l,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Rl(n,s.document),i=s.readTime?hn(s.readTime):nt.min(),o=we.newNoDocument(r,i),a=s.removedTargetIds||[];e=new Pa([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Rl(n,s.document),i=s.removedTargetIds||[];e=new Pa([],i,r,null)}else{if(!("filter"in t))return tt();{t.filter;const s=t.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new Fw(r,i),a=s.targetId;e=new f_(a,o)}}return e}function Qw(n,t){let e;if(t instanceof Io)e={update:Qf(n,t.key,t.value)};else if(t instanceof md)e={delete:bu(n,t.key)};else if(t instanceof gs)e={update:Qf(n,t.key,t.data),updateMask:iE(t.fieldMask)};else{if(!(t instanceof Nw))return tt();e={verify:bu(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof Xa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ja)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw tt()}(0,s))),t.precondition.isNone||(e.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Gw(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:tt()}(n,t.precondition)),e}function Xw(n,t){return n&&n.length>0?(St(t!==void 0),n.map(e=>function(r,i){let o=r.updateTime?hn(r.updateTime):hn(i);return o.isEqual(nt.min())&&(o=hn(i)),new Dw(o,r.transformResults||[])}(e,t))):[]}function Jw(n,t){return{documents:[__(n,t.path)]}}function Zw(n,t){const e={structuredQuery:{}},s=t.path;let r;t.collectionGroup!==null?(r=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=__(n,r);const i=function(l){if(l.length!==0)return b_(Ze.create(l,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(d=>function(f){return{field:wr(f.field),direction:nE(f.dir)}}(d))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=yu(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),{_t:e,parent:r}}function tE(n){let t=Yw(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let r=null;if(s>0){St(s===1);const d=e.from[0];d.allDescendants?r=d.collectionId:t=t.child(d.collectionId)}let i=[];e.where&&(i=function(h){const f=v_(h);return f instanceof Ze&&Kg(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(f=>function(g){return new ro(Er(g.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Tc(f)?null:f}(e.limit));let c=null;e.startAt&&(c=function(h){const f=!!h.before,m=h.values||[];return new Ka(m,f)}(e.startAt));let l=null;return e.endAt&&(l=function(h){const f=!h.before,m=h.values||[];return new Ka(m,f)}(e.endAt)),vw(t,r,o,i,a,"F",c,l)}function eE(n,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return tt()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function v_(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=Er(e.unaryFilter.field);return ee.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Er(e.unaryFilter.field);return ee.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Er(e.unaryFilter.field);return ee.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Er(e.unaryFilter.field);return ee.create(o,"!=",{nullValue:"NULL_VALUE"});default:return tt()}}(n):n.fieldFilter!==void 0?function(e){return ee.create(Er(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return tt()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ze.create(e.compositeFilter.filters.map(s=>v_(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return tt()}}(e.compositeFilter.op))}(n):tt()}function nE(n){return zw[n]}function sE(n){return Hw[n]}function rE(n){return qw[n]}function wr(n){return{fieldPath:n.canonicalString()}}function Er(n){return ce.fromServerFormat(n.fieldPath)}function b_(n){return n instanceof ee?function(e){if(e.op==="=="){if(Lf(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NAN"}};if(Nf(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Lf(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NOT_NAN"}};if(Nf(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wr(e.field),op:sE(e.op),value:e.value}}}(n):n instanceof Ze?function(e){const s=e.getFilters().map(r=>b_(r));return s.length===1?s[0]:{compositeFilter:{op:rE(e.op),filters:s}}}(n):tt()}function iE(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function x_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,e,s,r,i=nt.min(),o=nt.min(),a=ue.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new ts(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(t){this.ct=t}}function aE(n){const t=tE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qa(t,t.limit,"L"):t}/**
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
 */class cE{constructor(){this.un=new lE}addToCollectionParentIndex(t,e){return this.un.add(e),U.resolve()}getCollectionParents(t,e){return U.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return U.resolve()}deleteFieldIndex(t,e){return U.resolve()}deleteAllFieldIndexes(t){return U.resolve()}createTargetIndexes(t,e){return U.resolve()}getDocumentsMatchingTarget(t,e){return U.resolve(null)}getIndexType(t,e){return U.resolve(0)}getFieldIndexes(t,e){return U.resolve([])}getNextCollectionGroupToUpdate(t){return U.resolve(null)}getMinOffset(t,e){return U.resolve(ds.min())}getMinOffsetFromCollectionGroup(t,e){return U.resolve(ds.min())}updateCollectionGroup(t,e,s){return U.resolve()}updateIndexEntries(t,e){return U.resolve()}}class lE{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),r=this.index[e]||new fe(Ot.comparator),i=!r.has(s);return this.index[e]=r.add(s),i}has(t){const e=t.lastSegment(),s=t.popLast(),r=this.index[e];return r&&r.has(s)}getEntries(t){return(this.index[t]||new fe(Ot.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Br(0)}static kn(){return new Br(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.changes=new Kr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,we.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?U.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dE{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(t,e,s,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(s!==null&&Hi(s.mutation,r,Fe.empty(),Ft.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,lt()).next(()=>s))}getLocalViewOfDocuments(t,e,s=lt()){const r=Ns();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,s).next(i=>{let o=Mi();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const s=Ns();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,lt()))}populateOverlays(t,e,s){const r=[];return s.forEach(i=>{e.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,s,r){let i=Fn();const o=zi(),a=function(){return zi()}();return e.forEach((c,l)=>{const d=s.get(l.key);r.has(l.key)&&(d===void 0||d.mutation instanceof gs)?i=i.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),Hi(d.mutation,l,d.mutation.getFieldMask(),Ft.now())):o.set(l.key,Fe.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,d)=>o.set(l,d)),e.forEach((l,d)=>{var h;return a.set(l,new dE(d,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const s=zi();let r=new jt((o,a)=>o-a),i=lt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=e.get(c);if(l===null)return;let d=s.get(c)||Fe.empty();d=a.applyToLocalView(l,d),s.set(c,d);const h=(r.get(a.batchId)||lt()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,d=c.value,h=r_();d.forEach(f=>{if(!i.has(f)){const m=u_(e.get(f),s.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return U.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,r){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Zg(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,r):this.getDocumentsMatchingCollectionQuery(t,e,s,r)}getNextDocuments(t,e,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,r-i.size):U.resolve(Ns());let a=-1,c=i;return o.next(l=>U.forEach(l,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(t,d).next(f=>{c=c.insert(d,f)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,lt())).next(d=>({batchId:a,changes:s_(d)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Q(e)).next(s=>{let r=Mi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,s,r){const i=e.collectionGroup;let o=Mi();return this.indexManager.getCollectionParents(t,i).next(a=>U.forEach(a,c=>{const l=function(h,f){return new Yr(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,s,r).next(d=>{d.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,i,r))).next(o=>{i.forEach((c,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,we.newInvalidDocument(d)))});let a=Mi();return o.forEach((c,l)=>{const d=i.get(c);d!==void 0&&Hi(d.mutation,l,Fe.empty(),Ft.now()),Ac(e,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return U.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:hn(r.createTime)}}(e)),U.resolve()}getNamedQuery(t,e){return U.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(r){return{name:r.name,query:aE(r.bundledQuery),readTime:hn(r.readTime)}}(e)),U.resolve()}}/**
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
 */class pE{constructor(){this.overlays=new jt(Q.comparator),this.Ir=new Map}getOverlay(t,e){return U.resolve(this.overlays.get(e))}getOverlays(t,e){const s=Ns();return U.forEach(e,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((r,i)=>{this.ht(t,e,i)}),U.resolve()}removeOverlaysForBatchId(t,e,s){const r=this.Ir.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(s)),U.resolve()}getOverlaysForCollection(t,e,s){const r=Ns(),i=e.length+1,o=new Q(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return U.resolve(r)}getOverlaysForCollectionGroup(t,e,s,r){let i=new jt((l,d)=>l-d);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>s){let d=i.get(l.largestBatchId);d===null&&(d=Ns(),i=i.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const a=Ns(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,d)=>a.set(l,d)),!(a.size()>=r)););return U.resolve(a)}ht(t,e,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Ir.get(r.largestBatchId).delete(s.key);this.Ir.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Vw(e,s));let i=this.Ir.get(e);i===void 0&&(i=lt(),this.Ir.set(e,i)),this.Ir.set(e,i.add(s.key))}}/**
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
 */class mE{constructor(){this.sessionToken=ue.EMPTY_BYTE_STRING}getSessionToken(t){return U.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.Tr=new fe(oe.Er),this.dr=new fe(oe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const s=new oe(t,e);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.Vr(new oe(t,e))}mr(t,e){t.forEach(s=>this.removeReference(s,e))}gr(t){const e=new Q(new Ot([])),s=new oe(e,t),r=new oe(e,t+1),i=[];return this.dr.forEachInRange([s,r],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new Q(new Ot([])),s=new oe(e,t),r=new oe(e,t+1);let i=lt();return this.dr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const e=new oe(t,0),s=this.Tr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class oe{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return Q.comparator(t.key,e.key)||_t(t.wr,e.wr)}static Ar(t,e){return _t(t.wr,e.wr)||Q.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new fe(oe.Er)}checkEmpty(t){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Lw(i,e,s,r);this.mutationQueue.push(o);for(const a of r)this.br=this.br.add(new oe(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(t,e){return U.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,r=this.vr(s),i=r<0?0:r;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new oe(e,0),r=new oe(e,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([s,r],o=>{const a=this.Dr(o.wr);i.push(a)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new fe(_t);return e.forEach(r=>{const i=new oe(r,0),o=new oe(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{s=s.add(a.wr)})}),U.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,r=s.length+1;let i=s;Q.isDocumentKey(i)||(i=i.child(""));const o=new oe(new Q(i),0);let a=new fe(_t);return this.br.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.wr)),!0)},o),U.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(s=>{const r=this.Dr(s);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){St(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return U.forEach(e.mutations,r=>{const i=new oe(r.key,e.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.br=s})}On(t){}containsKey(t,e){const s=new oe(e,0),r=this.br.firstAfterOrEqual(s);return U.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,U.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(t){this.Mr=t,this.docs=function(){return new jt(Q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,r=this.docs.get(s),i=r?r.size:0,o=this.Mr(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return U.resolve(s?s.document.mutableCopy():we.newInvalidDocument(e))}getEntries(t,e){let s=Fn();return e.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():we.newInvalidDocument(r))}),U.resolve(s)}getDocumentsMatchingQuery(t,e,s,r){let i=Fn();const o=e.path,a=new Q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:d}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||tw(Z0(d),s)<=0||(r.has(d.key)||Ac(e,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(t,e,s,r){tt()}Or(t,e){return U.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new yE(this)}getSize(t){return U.resolve(this.size)}}class yE extends uE{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(s)}),U.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(t){this.persistence=t,this.Nr=new Kr(e=>dd(e),hd),this.lastRemoteSnapshotVersion=nt.min(),this.highestTargetId=0,this.Lr=0,this.Br=new vd,this.targetCount=0,this.kr=Br.Bn()}forEachTarget(t,e){return this.Nr.forEach((s,r)=>e(r)),U.resolve()}getLastRemoteSnapshotVersion(t){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return U.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.Lr&&(this.Lr=e),U.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Br(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,U.resolve()}updateTargetData(t,e){return this.Kn(e),U.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,U.resolve()}removeTargets(t,e,s){let r=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=e&&s.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),U.waitFor(i).next(()=>r)}getTargetCount(t){return U.resolve(this.targetCount)}getTargetData(t,e){const s=this.Nr.get(e)||null;return U.resolve(s)}addMatchingKeys(t,e,s){return this.Br.Rr(e,s),U.resolve()}removeMatchingKeys(t,e,s){this.Br.mr(e,s);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),U.resolve()}getMatchingKeysForTargetId(t,e){const s=this.Br.yr(e);return U.resolve(s)}containsKey(t,e){return U.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(t,e){this.qr={},this.overlays={},this.Qr=new ad(0),this.Kr=!1,this.Kr=!0,this.$r=new mE,this.referenceDelegate=t(this),this.Ur=new vE(this),this.indexManager=new cE,this.remoteDocumentCache=function(r){return new _E(r)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new oE(e),this.Gr=new fE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new pE,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.qr[t.toKey()];return s||(s=new gE(e,this.referenceDelegate),this.qr[t.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,s){K("MemoryPersistence","Starting transaction:",t);const r=new xE(this.Qr.next());return this.referenceDelegate.zr(),s(r).next(i=>this.referenceDelegate.jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Hr(t,e){return U.or(Object.values(this.qr).map(s=>()=>s.containsKey(t,e)))}}class xE extends nw{constructor(t){super(),this.currentSequenceNumber=t}}class bd{constructor(t){this.persistence=t,this.Jr=new vd,this.Yr=null}static Zr(t){return new bd(t)}get Xr(){if(this.Yr)return this.Yr;throw tt()}addReference(t,e,s){return this.Jr.addReference(s,e),this.Xr.delete(s.toString()),U.resolve()}removeReference(t,e,s){return this.Jr.removeReference(s,e),this.Xr.add(s.toString()),U.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),U.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(r=>this.Xr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(i=>this.Xr.add(i.toString()))}).next(()=>s.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,s=>{const r=Q.fromPath(s);return this.ei(t,r).next(i=>{i||e.removeEntry(r,nt.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(s=>{s?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return U.or([()=>U.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t,e,s,r){this.targetId=t,this.fromCache=e,this.$i=s,this.Ui=r}static Wi(t,e){let s=lt(),r=lt();for(const i of e.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new xd(t,e.fromCache,s,r)}}/**
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
 */class wE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class EE{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ix()?8:sw(Ie())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,s,r){const i={result:null};return this.Yi(t,e).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(t,e,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new wE;return this.Xi(t,e,o).next(a=>{if(i.result=a,this.zi)return this.es(t,e,o,a.size)})}).next(()=>i.result)}es(t,e,s,r){return s.documentReadCount<this.ji?(_i()<=dt.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",xr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(_i()<=dt.DEBUG&&K("QueryEngine","Query:",xr(e),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Hi*r?(_i()<=dt.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",xr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,dn(e))):U.resolve())}Yi(t,e){if(Bf(e))return U.resolve(null);let s=dn(e);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=Qa(e,null,"F"),s=dn(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=lt(...i);return this.Ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const l=this.ts(e,a);return this.ns(e,l,o,c.readTime)?this.Yi(t,Qa(e,null,"F")):this.rs(t,l,e,c)}))})))}Zi(t,e,s,r){return Bf(e)||r.isEqual(nt.min())?U.resolve(null):this.Ji.getDocuments(t,s).next(i=>{const o=this.ts(e,i);return this.ns(e,o,s,r)?U.resolve(null):(_i()<=dt.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xr(e)),this.rs(t,o,e,J0(r,-1)).next(a=>a))})}ts(t,e){let s=new fe(e_(t));return e.forEach((r,i)=>{Ac(t,i)&&(s=s.add(i))}),s}ns(t,e,s,r){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(t,e,s){return _i()<=dt.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",xr(e)),this.Ji.getDocumentsMatchingQuery(t,e,ds.min(),s)}rs(t,e,s,r){return this.Ji.getDocumentsMatchingQuery(t,s,r).next(i=>(e.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(t,e,s,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new jt(_t),this._s=new Kr(i=>dd(i),hd),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(s)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new hE(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function IE(n,t,e,s){return new TE(n,t,e,s)}async function w_(n,t){const e=rt(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let r;return e.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,e.ls(t),e.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=lt();for(const l of r){o.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}for(const l of i){a.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}return e.localDocuments.getDocuments(s,c).next(l=>({hs:l,removedBatchIds:o,addedBatchIds:a}))})})}function AE(n,t){const e=rt(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=e.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,l,d){const h=l.batch,f=h.keys();let m=U.resolve();return f.forEach(g=>{m=m.next(()=>d.getEntry(c,g)).next(v=>{const y=l.docVersions.get(g);St(y!==null),v.version.compareTo(y)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),d.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,s,t,i).next(()=>i.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=lt();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>e.localDocuments.getDocuments(s,r))})}function E_(n){const t=rt(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function kE(n,t){const e=rt(n),s=t.snapshotVersion;let r=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=e.cs.newChangeBuffer({trackRemovals:!0});r=e.os;const a=[];t.targetChanges.forEach((d,h)=>{const f=r.get(h);if(!f)return;a.push(e.Ur.removeMatchingKeys(i,d.removedDocuments,h).next(()=>e.Ur.addMatchingKeys(i,d.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(ue.EMPTY_BYTE_STRING,nt.min()).withLastLimboFreeSnapshotVersion(nt.min()):d.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(d.resumeToken,s)),r=r.insert(h,m),function(v,y,w){return v.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(f,m,d)&&a.push(e.Ur.updateTargetData(i,m))});let c=Fn(),l=lt();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,d))}),a.push(SE(i,o,t.documentUpdates).next(d=>{c=d.Ps,l=d.Is})),!s.isEqual(nt.min())){const d=e.Ur.getLastRemoteSnapshotVersion(i).next(h=>e.Ur.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(d)}return U.waitFor(a).next(()=>o.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(e.os=r,i))}function SE(n,t,e){let s=lt(),r=lt();return e.forEach(i=>s=s.add(i)),t.getEntries(n,s).next(i=>{let o=Fn();return e.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(nt.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Ps:o,Is:r}})}function CE(n,t){const e=rt(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function RE(n,t){const e=rt(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return e.Ur.getTargetData(s,t).next(i=>i?(r=i,U.resolve(r)):e.Ur.allocateTargetId(s).next(o=>(r=new ts(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.Ur.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=e.os.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.os=e.os.insert(s.targetId,s),e._s.set(t,s.targetId)),s})}async function wu(n,t,e){const s=rt(n),r=s.os.get(t),i=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!To(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.os=s.os.remove(t),s._s.delete(r.target)}function Xf(n,t,e){const s=rt(n);let r=nt.min(),i=lt();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,d){const h=rt(c),f=h._s.get(d);return f!==void 0?U.resolve(h.os.get(f)):h.Ur.getTargetData(l,d)}(s,o,dn(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.ss.getDocumentsMatchingQuery(o,t,e?r:nt.min(),e?i:lt())).next(a=>(PE(s,xw(t),a),{documents:a,Ts:i})))}function PE(n,t,e){let s=n.us.get(t)||nt.min();e.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.us.set(t,s)}class Jf{constructor(){this.activeTargetIds=kw()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class DE{constructor(){this.so=new Jf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,s){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Jf,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ME{_o(t){}shutdown(){}}/**
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
 */class Zf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ca=null;function Pl(){return ca===null?ca=function(){return 268435456+Math.round(2147483648*Math.random())}():ca++,"0x"+ca.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="WebChannelConnection";class LE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const s=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+e.host,this.vo=`projects/${r}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get Fo(){return!1}Mo(e,s,r,i,o){const a=Pl(),c=this.xo(e,s.toUriEncodedString());K("RestConnection",`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(l,i,o),this.No(e,c,l,r).then(d=>(K("RestConnection",`Received RPC '${e}' ${a}: `,d),d),d=>{throw Gs("RestConnection",`RPC '${e}' ${a} failed with error: `,d,"url: ",c,"request:",r),d})}Lo(e,s,r,i,o,a){return this.Mo(e,s,r,i,o)}Oo(e,s,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}xo(e,s){const r=OE[e];return`${this.Do}/v1/${s}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,s,r){const i=Pl();return new Promise((o,a)=>{const c=new Vg;c.setWithCredentials(!0),c.listenOnce(Fg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Sa.NO_ERROR:const d=c.getResponseJson();K(_e,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(d)),o(d);break;case Sa.TIMEOUT:K(_e,`RPC '${t}' ${i} timed out`),a(new W($.DEADLINE_EXCEEDED,"Request time out"));break;case Sa.HTTP_ERROR:const h=c.getStatus();if(K(_e,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const g=function(y){const w=y.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(w)>=0?w:$.UNKNOWN}(m.status);a(new W(g,m.message))}else a(new W($.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new W($.UNAVAILABLE,"Connection failed."));break;default:tt()}}finally{K(_e,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(r);K(_e,`RPC '${t}' ${i} sending request:`,r),c.send(e,"POST",l,s,15)})}Bo(t,e,s){const r=Pl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Ug(),a=Bg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,s),c.encodeInitMessageHeaders=!0;const d=i.join("");K(_e,`Creating RPC '${t}' stream ${r}: ${d}`,c);const h=o.createWebChannel(d,c);let f=!1,m=!1;const g=new NE({Io:y=>{m?K(_e,`Not sending because RPC '${t}' stream ${r} is closed:`,y):(f||(K(_e,`Opening RPC '${t}' stream ${r} transport.`),h.open(),f=!0),K(_e,`RPC '${t}' stream ${r} sending:`,y),h.send(y))},To:()=>h.close()}),v=(y,w,T)=>{y.listen(w,k=>{try{T(k)}catch(D){setTimeout(()=>{throw D},0)}})};return v(h,Di.EventType.OPEN,()=>{m||(K(_e,`RPC '${t}' stream ${r} transport opened.`),g.yo())}),v(h,Di.EventType.CLOSE,()=>{m||(m=!0,K(_e,`RPC '${t}' stream ${r} transport closed`),g.So())}),v(h,Di.EventType.ERROR,y=>{m||(m=!0,Gs(_e,`RPC '${t}' stream ${r} transport errored:`,y),g.So(new W($.UNAVAILABLE,"The operation could not be completed")))}),v(h,Di.EventType.MESSAGE,y=>{var w;if(!m){const T=y.data[0];St(!!T);const k=T,D=k.error||((w=k[0])===null||w===void 0?void 0:w.error);if(D){K(_e,`RPC '${t}' stream ${r} received error:`,D);const P=D.status;let M=function(x){const A=te[x];if(A!==void 0)return h_(A)}(P),I=D.message;M===void 0&&(M=$.INTERNAL,I="Unknown error status: "+P+" with message "+D.message),m=!0,g.So(new W(M,I)),h.close()}else K(_e,`RPC '${t}' stream ${r} received:`,T),g.bo(T)}}),v(a,$g.STAT_EVENT,y=>{y.stat===hu.PROXY?K(_e,`RPC '${t}' stream ${r} detected buffering proxy`):y.stat===hu.NOPROXY&&K(_e,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.wo()},0),g}}function Dl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(n){return new Ww(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(t,e,s=1e3,r=1.5,i=6e4){this.ui=t,this.timerId=e,this.ko=s,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-s);r>0&&K("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(t,e,s,r,i,o,a,c){this.ui=t,this.Ho=s,this.Jo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new T_(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===$.RESOURCE_EXHAUSTED?(Vn(e.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Yo===e&&this.P_(s,r)},s=>{t(()=>{const r=new W($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(r)})})}P_(t,e){const s=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{s(()=>this.I_(r))}),this.stream.onMessage(r=>{s(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return K("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VE extends I_{constructor(t,e,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,r,o),this.serializer=i}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Kw(this.serializer,t),s=function(i){if(!("targetChange"in i))return nt.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?nt.min():o.readTime?hn(o.readTime):nt.min()}(t);return this.listener.d_(e,s)}A_(t){const e={};e.database=xu(this.serializer),e.addTarget=function(i,o){let a;const c=o.target;if(a=gu(c)?{documents:Jw(i,c)}:{query:Zw(i,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=m_(i,o.resumeToken);const l=yu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(nt.min())>0){a.readTime=Za(i,o.snapshotVersion.toTimestamp());const l=yu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const s=eE(this.serializer,t);s&&(e.labels=s),this.a_(e)}R_(t){const e={};e.database=xu(this.serializer),e.removeTarget=t,this.a_(e)}}class FE extends I_{constructor(t,e,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,r,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return St(!!t.streamToken),this.lastStreamToken=t.streamToken,St(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){St(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Xw(t.writeResults,t.commitTime),s=hn(t.commitTime);return this.listener.g_(s,e)}p_(){const t={};t.database=xu(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>Qw(this.serializer,s))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E extends class{}{constructor(t,e,s,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new W($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,s,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(t,vu(e,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W($.UNKNOWN,i.toString())})}Lo(t,e,s,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(t,vu(e,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class BE{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vn(e),this.D_=!1):K("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(t,e,s,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{s.enqueueAndForget(async()=>{sr(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=rt(c);l.L_.add(4),await ko(l),l.q_.set("Unknown"),l.L_.delete(4),await Pc(l)}(this))})}),this.q_=new BE(s,r)}}async function Pc(n){if(sr(n))for(const t of n.B_)await t(!0)}async function ko(n){for(const t of n.B_)await t(!1)}function A_(n,t){const e=rt(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Id(e)?Td(e):Qr(e).r_()&&Ed(e,t))}function wd(n,t){const e=rt(n),s=Qr(e);e.N_.delete(t),s.r_()&&k_(e,t),e.N_.size===0&&(s.r_()?s.o_():sr(e)&&e.q_.set("Unknown"))}function Ed(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(nt.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Qr(n).A_(t)}function k_(n,t){n.Q_.xe(t),Qr(n).R_(t)}function Td(n){n.Q_=new jw({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Qr(n).start(),n.q_.v_()}function Id(n){return sr(n)&&!Qr(n).n_()&&n.N_.size>0}function sr(n){return rt(n).L_.size===0}function S_(n){n.Q_=void 0}async function jE(n){n.q_.set("Online")}async function zE(n){n.N_.forEach((t,e)=>{Ed(n,t)})}async function HE(n,t){S_(n),Id(n)?(n.q_.M_(t),Td(n)):n.q_.set("Unknown")}async function qE(n,t,e){if(n.q_.set("Online"),t instanceof p_&&t.state===2&&t.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.N_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.N_.delete(a),r.Q_.removeTarget(a))}(n,t)}catch(s){K("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await tc(n,s)}else if(t instanceof Pa?n.Q_.Ke(t):t instanceof f_?n.Q_.He(t):n.Q_.We(t),!e.isEqual(nt.min()))try{const s=await E_(n.localStore);e.compareTo(s)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(l);d&&i.N_.set(l,d.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(ue.EMPTY_BYTE_STRING,d.snapshotVersion)),k_(i,c);const h=new ts(d.target,c,l,d.sequenceNumber);Ed(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(s){K("RemoteStore","Failed to raise snapshot:",s),await tc(n,s)}}async function tc(n,t,e){if(!To(t))throw t;n.L_.add(1),await ko(n),n.q_.set("Offline"),e||(e=()=>E_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Pc(n)})}function C_(n,t){return t().catch(e=>tc(n,e,t))}async function Dc(n){const t=rt(n),e=fs(t);let s=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;WE(t);)try{const r=await CE(t.localStore,s);if(r===null){t.O_.length===0&&e.o_();break}s=r.batchId,GE(t,r)}catch(r){await tc(t,r)}R_(t)&&P_(t)}function WE(n){return sr(n)&&n.O_.length<10}function GE(n,t){n.O_.push(t);const e=fs(n);e.r_()&&e.V_&&e.m_(t.mutations)}function R_(n){return sr(n)&&!fs(n).n_()&&n.O_.length>0}function P_(n){fs(n).start()}async function YE(n){fs(n).p_()}async function KE(n){const t=fs(n);for(const e of n.O_)t.m_(e.mutations)}async function QE(n,t,e){const s=n.O_.shift(),r=gd.from(s,t,e);await C_(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Dc(n)}async function XE(n,t){t&&fs(n).V_&&await async function(s,r){if(function(o){return $w(o)&&o!==$.ABORTED}(r.code)){const i=s.O_.shift();fs(s).s_(),await C_(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Dc(s)}}(n,t),R_(n)&&P_(n)}async function tp(n,t){const e=rt(n);e.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const s=sr(e);e.L_.add(3),await ko(e),s&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Pc(e)}async function JE(n,t){const e=rt(n);t?(e.L_.delete(2),await Pc(e)):t||(e.L_.add(2),await ko(e),e.q_.set("Unknown"))}function Qr(n){return n.K_||(n.K_=function(e,s,r){const i=rt(e);return i.w_(),new VE(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Eo:jE.bind(null,n),Ro:zE.bind(null,n),mo:HE.bind(null,n),d_:qE.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Id(n)?Td(n):n.q_.set("Unknown")):(await n.K_.stop(),S_(n))})),n.K_}function fs(n){return n.U_||(n.U_=function(e,s,r){const i=rt(e);return i.w_(),new FE(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:YE.bind(null,n),mo:XE.bind(null,n),f_:KE.bind(null,n),g_:QE.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Dc(n)):(await n.U_.stop(),n.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t,e,s,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,r,i){const o=Date.now()+s,a=new Ad(t,e,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W($.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kd(n,t){if(Vn("AsyncQueue",`${t}: ${n}`),To(n))return new W($.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t){this.comparator=t?(e,s)=>t(e,s)||Q.comparator(e.key,s.key):(e,s)=>Q.comparator(e.key,s.key),this.keyedMap=Mi(),this.sortedSet=new jt(this.comparator)}static emptySet(t){return new Pr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Pr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new Pr;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.W_=new jt(Q.comparator)}track(t){const e=t.doc.key,s=this.W_.get(e);s?t.type!==0&&s.type===3?this.W_=this.W_.insert(e,t):t.type===3&&s.type!==1?this.W_=this.W_.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.W_=this.W_.remove(e):t.type===1&&s.type===2?this.W_=this.W_.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):tt():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,s)=>{t.push(s)}),t}}class Ur{constructor(t,e,s,r,i,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,s,r,i){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Ur(t,e,Pr.emptySet(e),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ic(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==s[r].type||!e[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class tT{constructor(){this.queries=np(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,s){const r=rt(e),i=r.queries;r.queries=np(),i.forEach((o,a)=>{for(const c of a.j_)c.onError(s)})})(this,new W($.ABORTED,"Firestore shutting down"))}}function np(){return new Kr(n=>t_(n),Ic)}async function D_(n,t){const e=rt(n);let s=3;const r=t.query;let i=e.queries.get(r);i?!i.H_()&&t.J_()&&(s=2):(i=new ZE,s=t.J_()?0:1);try{switch(s){case 0:i.z_=await e.onListen(r,!0);break;case 1:i.z_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(o){const a=kd(o,`Initialization of query '${xr(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,i),i.j_.push(t),t.Z_(e.onlineState),i.z_&&t.X_(i.z_)&&Sd(e)}async function M_(n,t){const e=rt(n),s=t.query;let r=3;const i=e.queries.get(s);if(i){const o=i.j_.indexOf(t);o>=0&&(i.j_.splice(o,1),i.j_.length===0?r=t.J_()?0:1:!i.H_()&&t.J_()&&(r=2))}switch(r){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function eT(n,t){const e=rt(n);let s=!1;for(const r of t){const i=r.query,o=e.queries.get(i);if(o){for(const a of o.j_)a.X_(r)&&(s=!0);o.z_=r}}s&&Sd(e)}function nT(n,t,e){const s=rt(n),r=s.queries.get(t);if(r)for(const i of r.j_)i.onError(e);s.queries.delete(t)}function Sd(n){n.Y_.forEach(t=>{t.next()})}var Eu,sp;(sp=Eu||(Eu={})).ea="default",sp.Cache="cache";class O_{constructor(t,e,s){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Ur(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const s=e!=="Offline";return(!this.options._a||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Ur.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Eu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(t){this.key=t}}class L_{constructor(t){this.key=t}}class sT{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=lt(),this.mutatedKeys=lt(),this.Aa=e_(t),this.Ra=new Pr(this.Aa)}get Va(){return this.Ta}ma(t,e){const s=e?e.fa:new ep,r=e?e.Ra:this.Ra;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((d,h)=>{const f=r.get(d),m=Ac(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let y=!1;f&&m?f.data.isEqual(m.data)?g!==v&&(s.track({type:3,doc:m}),y=!0):this.ga(f,m)||(s.track({type:2,doc:m}),y=!0,(c&&this.Aa(m,c)>0||l&&this.Aa(m,l)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),y=!0):f&&!m&&(s.track({type:1,doc:f}),y=!0,(c||l)&&(a=!0)),y&&(m?(o=o.add(m),i=v?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),s.track({type:1,doc:d})}return{Ra:o,fa:s,ns:a,mutatedKeys:i}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,r){const i=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((d,h)=>function(m,g){const v=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return tt()}};return v(m)-v(g)}(d.type,h.type)||this.Aa(d.doc,h.doc)),this.pa(s),r=r!=null&&r;const a=e&&!r?this.ya():[],c=this.da.size===0&&this.current&&!r?1:0,l=c!==this.Ea;return this.Ea=c,o.length!==0||l?{snapshot:new Ur(this.query,t.Ra,i,o,t.mutatedKeys,c===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ep,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=lt(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const e=[];return t.forEach(s=>{this.da.has(s)||e.push(new L_(s))}),this.da.forEach(s=>{t.has(s)||e.push(new N_(s))}),e}ba(t){this.Ta=t.Ts,this.da=lt();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Ur.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class rT{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class iT{constructor(t){this.key=t,this.va=!1}}class oT{constructor(t,e,s,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Kr(a=>t_(a),Ic),this.Ma=new Map,this.xa=new Set,this.Oa=new jt(Q.comparator),this.Na=new Map,this.La=new vd,this.Ba={},this.ka=new Map,this.qa=Br.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function aT(n,t,e=!0){const s=j_(n);let r;const i=s.Fa.get(t);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Da()):r=await V_(s,t,e,!0),r}async function cT(n,t){const e=j_(n);await V_(e,t,!0,!1)}async function V_(n,t,e,s){const r=await RE(n.localStore,dn(t)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,e);let a;return s&&(a=await lT(n,t,i,o==="current",r.resumeToken)),n.isPrimaryClient&&e&&A_(n.remoteStore,r),a}async function lT(n,t,e,s,r){n.Ka=(h,f,m)=>async function(v,y,w,T){let k=y.view.ma(w);k.ns&&(k=await Xf(v.localStore,y.query,!1).then(({documents:I})=>y.view.ma(I,k)));const D=T&&T.targetChanges.get(y.targetId),P=T&&T.targetMismatches.get(y.targetId)!=null,M=y.view.applyChanges(k,v.isPrimaryClient,D,P);return ip(v,y.targetId,M.wa),M.snapshot}(n,h,f,m);const i=await Xf(n.localStore,t,!0),o=new sT(t,i.Ts),a=o.ma(i.documents),c=Ao.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",r),l=o.applyChanges(a,n.isPrimaryClient,c);ip(n,e,l.wa);const d=new rT(t,e,o);return n.Fa.set(t,d),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),l.snapshot}async function uT(n,t,e){const s=rt(n),r=s.Fa.get(t),i=s.Ma.get(r.targetId);if(i.length>1)return s.Ma.set(r.targetId,i.filter(o=>!Ic(o,t))),void s.Fa.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await wu(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),e&&wd(s.remoteStore,r.targetId),Tu(s,r.targetId)}).catch(Eo)):(Tu(s,r.targetId),await wu(s.localStore,r.targetId,!0))}async function dT(n,t){const e=rt(n),s=e.Fa.get(t),r=e.Ma.get(s.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),wd(e.remoteStore,s.targetId))}async function hT(n,t,e){const s=vT(n);try{const r=await function(o,a){const c=rt(o),l=Ft.now(),d=a.reduce((m,g)=>m.add(g.key),lt());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let g=Fn(),v=lt();return c.cs.getEntries(m,d).next(y=>{g=y,g.forEach((w,T)=>{T.isValidDocument()||(v=v.add(w))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,g)).next(y=>{h=y;const w=[];for(const T of a){const k=Ow(T,h.get(T.key).overlayedDocument);k!=null&&w.push(new gs(T.key,k,Wg(k.value.mapValue),je.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,w,a)}).next(y=>{f=y;const w=y.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(m,y.batchId,w)})}).then(()=>({batchId:f.batchId,changes:s_(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let l=o.Ba[o.currentUser.toKey()];l||(l=new jt(_t)),l=l.insert(a,c),o.Ba[o.currentUser.toKey()]=l}(s,r.batchId,e),await So(s,r.changes),await Dc(s.remoteStore)}catch(r){const i=kd(r,"Failed to persist write");e.reject(i)}}async function F_(n,t){const e=rt(n);try{const s=await kE(e.localStore,t);t.targetChanges.forEach((r,i)=>{const o=e.Na.get(i);o&&(St(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.va=!0:r.modifiedDocuments.size>0?St(o.va):r.removedDocuments.size>0&&(St(o.va),o.va=!1))}),await So(e,s,t)}catch(s){await Eo(s)}}function rp(n,t,e){const s=rt(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const r=[];s.Fa.forEach((i,o)=>{const a=o.view.Z_(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=rt(o);c.onlineState=a;let l=!1;c.queries.forEach((d,h)=>{for(const f of h.j_)f.Z_(a)&&(l=!0)}),l&&Sd(c)}(s.eventManager,t),r.length&&s.Ca.d_(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function fT(n,t,e){const s=rt(n);s.sharedClientState.updateQueryState(t,"rejected",e);const r=s.Na.get(t),i=r&&r.key;if(i){let o=new jt(Q.comparator);o=o.insert(i,we.newNoDocument(i,nt.min()));const a=lt().add(i),c=new Cc(nt.min(),new Map,new jt(_t),o,a);await F_(s,c),s.Oa=s.Oa.remove(i),s.Na.delete(t),Cd(s)}else await wu(s.localStore,t,!1).then(()=>Tu(s,t,e)).catch(Eo)}async function pT(n,t){const e=rt(n),s=t.batch.batchId;try{const r=await AE(e.localStore,t);B_(e,s,null),$_(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await So(e,r)}catch(r){await Eo(r)}}async function mT(n,t,e){const s=rt(n);try{const r=await function(o,a){const c=rt(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let d;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(St(h!==null),d=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,d,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d)).next(()=>c.localDocuments.getDocuments(l,d))})}(s.localStore,t);B_(s,t,e),$_(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await So(s,r)}catch(r){await Eo(r)}}function $_(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function B_(n,t,e){const s=rt(n);let r=s.Ba[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(e?i.reject(e):i.resolve(),r=r.remove(t)),s.Ba[s.currentUser.toKey()]=r}}function Tu(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Ma.get(t))n.Fa.delete(s),e&&n.Ca.$a(s,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(s=>{n.La.containsKey(s)||U_(n,s)})}function U_(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(wd(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Cd(n))}function ip(n,t,e){for(const s of e)s instanceof N_?(n.La.addReference(s.key,t),gT(n,s)):s instanceof L_?(K("SyncEngine","Document no longer in limbo: "+s.key),n.La.removeReference(s.key,t),n.La.containsKey(s.key)||U_(n,s.key)):tt()}function gT(n,t){const e=t.key,s=e.path.canonicalString();n.Oa.get(e)||n.xa.has(s)||(K("SyncEngine","New document in limbo: "+e),n.xa.add(s),Cd(n))}function Cd(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new Q(Ot.fromString(t)),s=n.qa.next();n.Na.set(s,new iT(e)),n.Oa=n.Oa.insert(e,s),A_(n.remoteStore,new ts(dn(fd(e.path)),s,"TargetPurposeLimboResolution",ad.oe))}}async function So(n,t,e){const s=rt(n),r=[],i=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((a,c)=>{o.push(s.Ka(c,t,e).then(l=>{var d;if((l||e)&&s.isPrimaryClient){const h=l?!l.fromCache:(d=e==null?void 0:e.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;s.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(l){r.push(l);const h=xd.Wi(c.targetId,l);i.push(h)}}))}),await Promise.all(o),s.Ca.d_(r),await async function(c,l){const d=rt(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>U.forEach(l,f=>U.forEach(f.$i,m=>d.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>U.forEach(f.Ui,m=>d.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!To(h))throw h;K("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const m=d.os.get(f),g=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(g);d.os=d.os.insert(f,v)}}}(s.localStore,i))}async function _T(n,t){const e=rt(n);if(!e.currentUser.isEqual(t)){K("SyncEngine","User change. New user:",t.toKey());const s=await w_(e.localStore,t);e.currentUser=t,function(i,o){i.ka.forEach(a=>{a.forEach(c=>{c.reject(new W($.CANCELLED,o))})}),i.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await So(e,s.hs)}}function yT(n,t){const e=rt(n),s=e.Na.get(t);if(s&&s.va)return lt().add(s.key);{let r=lt();const i=e.Ma.get(t);if(!i)return r;for(const o of i){const a=e.Fa.get(o);r=r.unionWith(a.view.Va)}return r}}function j_(n){const t=rt(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=F_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=yT.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=fT.bind(null,t),t.Ca.d_=eT.bind(null,t.eventManager),t.Ca.$a=nT.bind(null,t.eventManager),t}function vT(n){const t=rt(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=pT.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=mT.bind(null,t),t}class ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Rc(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return IE(this.persistence,new EE,t.initialUser,this.serializer)}Ga(t){return new bE(bd.Zr,this.serializer)}Wa(t){return new DE}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ec.provider={build:()=>new ec};class Iu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>rp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=_T.bind(null,this.syncEngine),await JE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new tT}()}createDatastore(t){const e=Rc(t.databaseInfo.databaseId),s=function(i){return new LE(i)}(t.databaseInfo);return function(i,o,a,c){return new $E(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,r,i,o,a){return new UE(s,r,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>rp(this.syncEngine,e,0),function(){return Zf.D()?new Zf:new ME}())}createSyncEngine(t,e){return function(r,i,o,a,c,l,d){const h=new oT(r,i,o,a,c,l);return d&&(h.Qa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const i=rt(r);K("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ko(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Iu.provider={build:()=>new Iu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class z_{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Vn("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(t,e,s,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=r,this.user=be.UNAUTHENTICATED,this.clientId=od.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{K("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(K("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=kd(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Ml(n,t){n.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await w_(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function op(n,t){n.asyncQueue.verifyOperationInProgress();const e=await xT(n);K("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>tp(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>tp(t.remoteStore,r)),n._onlineComponents=t}async function xT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ml(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===$.FAILED_PRECONDITION||r.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;Gs("Error using user provided cache. Falling back to memory cache: "+e),await Ml(n,new ec)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await Ml(n,new ec);return n._offlineComponents}async function H_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await op(n,n._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await op(n,new Iu))),n._onlineComponents}function wT(n){return H_(n).then(t=>t.syncEngine)}async function q_(n){const t=await H_(n),e=t.eventManager;return e.onListen=aT.bind(null,t.syncEngine),e.onUnlisten=uT.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=cT.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=dT.bind(null,t.syncEngine),e}function ET(n,t,e={}){const s=new Mn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const d=new z_({next:f=>{d.Za(),o.enqueueAndForget(()=>M_(i,h));const m=f.docs.has(a);!m&&f.fromCache?l.reject(new W($.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&f.fromCache&&c&&c.source==="server"?l.reject(new W($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new O_(fd(a.path),d,{includeMetadataChanges:!0,_a:!0});return D_(i,h)}(await q_(n),n.asyncQueue,t,e,s)),s.promise}function TT(n,t,e={}){const s=new Mn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const d=new z_({next:f=>{d.Za(),o.enqueueAndForget(()=>M_(i,h)),f.fromCache&&c.source==="server"?l.reject(new W($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new O_(a,d,{includeMetadataChanges:!0,_a:!0});return D_(i,h)}(await q_(n),n.asyncQueue,t,e,s)),s.promise}/**
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
 */function W_(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(n,t,e){if(!e)throw new W($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Y_(n,t,e,s){if(t===!0&&s===!0)throw new W($.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function cp(n){if(!Q.isDocumentKey(n))throw new W($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function lp(n){if(Q.isDocumentKey(n))throw new W($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Mc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":tt()}function He(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new W($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Mc(n);throw new W($.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function IT(n,t){if(t<=0)throw new W($.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new W($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new W($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Y_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=W_((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Oc{constructor(t,e,s,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new up({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new W($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new up(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new zg;switch(s.type){case"firstParty":return new G0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new W($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=ap.get(e);s&&(K("ComponentProvider","Removing Datastore"),ap.delete(e),s.terminate())}(this),Promise.resolve()}}function K_(n,t,e,s={}){var r;const i=(n=He(n,Oc))._getSettings(),o=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=be.MOCK_USER;else{a=Rg(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new W($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new be(l)}n._authCredentials=new H0(new jg(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Bn(this.firestore,t,this._query)}}class Te{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new On(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Te(this.firestore,t,this._key)}}class On extends Bn{constructor(t,e,s){super(t,e,fd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Te(this.firestore,null,new Q(t))}withConverter(t){return new On(this.firestore,t,this._path)}}function pt(n,t,...e){if(n=Wt(n),G_("collection","path",t),n instanceof Oc){const s=Ot.fromString(t,...e);return lp(s),new On(n,null,s)}{if(!(n instanceof Te||n instanceof On))throw new W($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ot.fromString(t,...e));return lp(s),new On(n.firestore,null,s)}}function ne(n,t,...e){if(n=Wt(n),arguments.length===1&&(t=od.newId()),G_("doc","path",t),n instanceof Oc){const s=Ot.fromString(t,...e);return cp(s),new Te(n,null,new Q(s))}{if(!(n instanceof Te||n instanceof On))throw new W($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ot.fromString(t,...e));return cp(s),new Te(n.firestore,n instanceof On?n.converter:null,new Q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new T_(this,"async_queue_retry"),this.Vu=()=>{const s=Dl();s&&K("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=t;const e=Dl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Dl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Mn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!To(t))throw t;K("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(s=>{this.Eu=s,this.du=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Vn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.du=!1,s))));return this.mu=e,e}enqueueAfterDelay(t,e,s){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const r=Ad.createAndSchedule(this,t,e,s,i=>this.yu(i));return this.Tu.push(r),r}fu(){this.Eu&&tt()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class _s extends Oc{constructor(t,e,s,r){super(t,e,s,r),this.type="firestore",this._queue=new dp,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new dp(t),this._firestoreClient=void 0,await t}}}function Q_(n,t){const e=typeof n=="object"?n:rd(),s=typeof n=="string"?n:"(default)",r=Ec(e,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=kg("firestore");i&&K_(r,...i)}return r}function Nc(n){if(n._terminated)throw new W($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||AT(n),n._firestoreClient}function AT(n){var t,e,s;const r=n._freezeSettings(),i=function(a,c,l,d){return new ow(a,c,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,W_(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new bT(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qs(ue.fromBase64String(t))}catch(e){throw new W($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Qs(ue.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new W($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ce(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new W($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new W($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _t(this._lat,t._lat)||_t(this._long,t._long)}}/**
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
 */class Fc{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=/^__.*__$/;class ST{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new gs(t,this.data,this.fieldMask,e,this.fieldTransforms):new Io(t,this.data,e,this.fieldTransforms)}}class X_{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return new gs(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function J_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw tt()}}class Rd{constructor(t,e,s,r,i,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Rd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:s,xu:!1});return r.Ou(t),r}Nu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:s,xu:!1});return r.vu(),r}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return nc(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(J_(this.Cu)&&kT.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class CT{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||Rc(t)}Qu(t,e,s,r=!1){return new Rd({Cu:t,methodName:e,qu:s,path:ce.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $c(n){const t=n._freezeSettings(),e=Rc(n._databaseId);return new CT(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Z_(n,t,e,s,r,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,t,e,r);Pd("Data must be an object, but it was:",o,s);const a=ty(s,o);let c,l;if(i.merge)c=new Fe(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const h of i.mergeFields){const f=Au(t,h,e);if(!o.contains(f))throw new W($.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);ny(d,f)||d.push(f)}c=new Fe(d),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new ST(new De(a),c,l)}class Bc extends Lc{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Bc}}function RT(n,t,e,s){const r=n.Qu(1,t,e);Pd("Data must be an object, but it was:",r,s);const i=[],o=De.empty();nr(s,(c,l)=>{const d=Dd(t,c,e);l=Wt(l);const h=r.Nu(d);if(l instanceof Bc)i.push(d);else{const f=Ro(l,h);f!=null&&(i.push(d),o.set(d,f))}});const a=new Fe(i);return new X_(o,a,r.fieldTransforms)}function PT(n,t,e,s,r,i){const o=n.Qu(1,t,e),a=[Au(t,s,e)],c=[r];if(i.length%2!=0)throw new W($.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Au(t,i[f])),c.push(i[f+1]);const l=[],d=De.empty();for(let f=a.length-1;f>=0;--f)if(!ny(l,a[f])){const m=a[f];let g=c[f];g=Wt(g);const v=o.Nu(m);if(g instanceof Bc)l.push(m);else{const y=Ro(g,v);y!=null&&(l.push(m),d.set(m,y))}}const h=new Fe(l);return new X_(d,h,o.fieldTransforms)}function DT(n,t,e,s=!1){return Ro(e,n.Qu(s?4:3,t))}function Ro(n,t){if(ey(n=Wt(n)))return Pd("Unsupported field value:",t,n),ty(n,t);if(n instanceof Lc)return function(s,r){if(!J_(r.Cu))throw r.Bu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=Ro(a,r.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,t)}return function(s,r){if((s=Wt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Sw(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Ft.fromDate(s);return{timestampValue:Za(r.serializer,i)}}if(s instanceof Ft){const i=new Ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Za(r.serializer,i)}}if(s instanceof Vc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Qs)return{bytesValue:m_(r.serializer,s._byteString)};if(s instanceof Te){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yd(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Fc)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return pd(a.serializer,c)})}}}}}}(s,r);throw r.Bu(`Unsupported field value: ${Mc(s)}`)}(n,t)}function ty(n,t){const e={};return Hg(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):nr(n,(s,r)=>{const i=Ro(r,t.Mu(s));i!=null&&(e[s]=i)}),{mapValue:{fields:e}}}function ey(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ft||n instanceof Vc||n instanceof Qs||n instanceof Te||n instanceof Lc||n instanceof Fc)}function Pd(n,t,e){if(!ey(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const s=Mc(e);throw s==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+s)}}function Au(n,t,e){if((t=Wt(t))instanceof Co)return t._internalPath;if(typeof t=="string")return Dd(n,t);throw nc("Field path arguments must be of type string or ",n,!1,void 0,e)}const MT=new RegExp("[~\\*/\\[\\]]");function Dd(n,t,e){if(t.search(MT)>=0)throw nc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Co(...t.split("."))._internalPath}catch{throw nc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function nc(n,t,e,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new W($.INVALID_ARGUMENT,a+n+c)}function ny(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(t,e,s,r,i){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new OT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Uc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class OT extends sy{data(){return super.data()}}function Uc(n,t){return typeof t=="string"?Dd(n,t):t instanceof Co?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new W($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Md{}class jc extends Md{}function Kt(n,t,...e){let s=[];t instanceof Md&&s.push(t),s=s.concat(e),function(i){const o=i.filter(c=>c instanceof zc).length,a=i.filter(c=>c instanceof Po).length;if(o>1||o>0&&a>0)throw new W($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class Po extends jc{constructor(t,e,s){super(),this._field=t,this._op=e,this._value=s,this.type="where"}static _create(t,e,s){return new Po(t,e,s)}_apply(t){const e=this._parse(t);return ry(t._query,e),new Bn(t.firestore,t.converter,_u(t._query,e))}_parse(t){const e=$c(t.firestore);return function(i,o,a,c,l,d,h){let f;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){fp(h,d);const m=[];for(const g of h)m.push(hp(c,i,g));f={arrayValue:{values:m}}}else f=hp(c,i,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||fp(h,d),f=DT(a,o,h,d==="in"||d==="not-in");return ee.create(l,d,f)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Rt(n,t,e){const s=t,r=Uc("where",n);return Po._create(r,s,e)}class zc extends Md{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new zc(t,e)}_parse(t){const e=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return e.length===1?e[0]:Ze.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)ry(o,c),o=_u(o,c)}(t._query,e),new Bn(t.firestore,t.converter,_u(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hc extends jc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Hc(t,e)}_apply(t){const e=function(r,i,o){if(r.startAt!==null)throw new W($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new W($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ro(i,o)}(t._query,this._field,this._direction);return new Bn(t.firestore,t.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new Yr(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,e))}}function Od(n,t="asc"){const e=t,s=Uc("orderBy",n);return Hc._create(s,e)}class qc extends jc{constructor(t,e,s){super(),this.type=t,this._limit=e,this._limitType=s}static _create(t,e,s){return new qc(t,e,s)}_apply(t){return new Bn(t.firestore,t.converter,Qa(t._query,this._limit,this._limitType))}}function sc(n){return IT("limit",n),qc._create("limit",n,"F")}function hp(n,t,e){if(typeof(e=Wt(e))=="string"){if(e==="")throw new W($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zg(t)&&e.indexOf("/")!==-1)throw new W($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const s=t.path.child(Ot.fromString(e));if(!Q.isDocumentKey(s))throw new W($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Of(n,new Q(s))}if(e instanceof Te)return Of(n,e._key);throw new W($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mc(e)}.`)}function fp(n,t){if(!Array.isArray(n)||n.length===0)throw new W($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ry(n,t){const e=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new W($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new W($.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class iy{convertValue(t,e="none"){switch(Ks(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Qt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ys(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw tt()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return nr(t,(r,i)=>{s[r]=this.convertValue(i,e)}),s}convertVectorValue(t){var e,s,r;const i=(r=(s=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>Qt(o.doubleValue));return new Fc(i)}convertGeoPoint(t){return new Vc(Qt(t.latitude),Qt(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=ld(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(no(t));default:return null}}convertTimestamp(t){const e=hs(t);return new Ft(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=Ot.fromString(t);St(x_(s));const r=new Vr(s.get(1),s.get(3)),i=new Q(s.popFirst(5));return r.isEqual(e)||Vn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(n,t,e){let s;return s=n?n.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Nd extends sy{constructor(t,e,s,r,i,o){super(t,e,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new qi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(Uc("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}}class qi extends Nd{data(t={}){return super.data(t)}}class ay{constructor(t,e,s,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new kr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new qi(this._firestore,this._userDataWriter,s.key,s,new kr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new W($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new qi(r._firestore,r._userDataWriter,a.doc.key,a.doc,new kr(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new qi(r._firestore,r._userDataWriter,a.doc.key,a.doc,new kr(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,d=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:LT(a.type),doc:c,oldIndex:l,newIndex:d}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function LT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return tt()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(n){n=He(n,Te);const t=He(n.firestore,_s);return ET(Nc(t),n._key).then(e=>VT(t,n,e))}class cy extends iy{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qs(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Te(this.firestore,null,e)}}function wt(n){n=He(n,Bn);const t=He(n.firestore,_s),e=Nc(t),s=new cy(t);return NT(n._query),TT(e,n._query).then(r=>new ay(t,s,n,r))}function ly(n,t,e){n=He(n,Te);const s=He(n.firestore,_s),r=oy(n.converter,t);return Do(s,[Z_($c(s),"setDoc",n._key,r,n.converter!==null,e).toMutation(n._key,je.none())])}function ze(n,t,e,...s){n=He(n,Te);const r=He(n.firestore,_s),i=$c(r);let o;return o=typeof(t=Wt(t))=="string"||t instanceof Co?PT(i,"updateDoc",n._key,t,e,s):RT(i,"updateDoc",n._key,t),Do(r,[o.toMutation(n._key,je.exists(!0))])}function Ld(n){return Do(He(n.firestore,_s),[new md(n._key,je.none())])}function rr(n,t){const e=He(n.firestore,_s),s=ne(n),r=oy(n.converter,t);return Do(e,[Z_($c(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,je.exists(!1))]).then(()=>s)}function Do(n,t){return function(s,r){const i=new Mn;return s.asyncQueue.enqueueAndForget(async()=>hT(await wT(s),r,i)),i.promise}(Nc(n),t)}function VT(n,t,e){const s=e.docs.get(t._key),r=new cy(n);return new Nd(n,r,t._key,s,new kr(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(r){Gr=r})(er),qs(new us("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new _s(new q0(s.getProvider("auth-internal")),new K0(s.getProvider("app-check-internal")),function(l,d){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new W($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vr(l.options.projectId,d)}(o,r),o);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),un(Cf,"4.7.3",t),un(Cf,"4.7.3","esm2017")})();const FT=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:iy,Bytes:Qs,CollectionReference:On,DocumentReference:Te,DocumentSnapshot:Nd,FieldPath:Co,FieldValue:Lc,Firestore:_s,FirestoreError:W,GeoPoint:Vc,Query:Bn,QueryCompositeFilterConstraint:zc,QueryConstraint:jc,QueryDocumentSnapshot:qi,QueryFieldFilterConstraint:Po,QueryLimitConstraint:qc,QueryOrderByConstraint:Hc,QuerySnapshot:ay,SnapshotMetadata:kr,Timestamp:Ft,VectorValue:Fc,_AutoId:od,_ByteString:ue,_DatabaseId:Vr,_DocumentKey:Q,_EmptyAuthCredentialsProvider:zg,_FieldPath:ce,_cast:He,_logWarn:Gs,_validateIsNotUsedTogether:Y_,addDoc:rr,collection:pt,connectFirestoreEmulator:K_,deleteDoc:Ld,doc:ne,ensureFirestoreConfigured:Nc,executeWrite:Do,getDoc:ao,getDocs:wt,getFirestore:Q_,limit:sc,orderBy:Od,query:Kt,setDoc:ly,updateDoc:ze,where:Rt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="firebasestorage.googleapis.com",dy="storageBucket",$T=2*60*1e3,BT=10*60*1e3,UT=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends yn{constructor(t,e,s=0){super(Ol(t),`Firebase Storage: ${e} (${Ol(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,zt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ol(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Lt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Lt||(Lt={}));function Ol(n){return"storage/"+n}function Vd(){const n="An unknown error occurred, please check the error payload for server response.";return new zt(Lt.UNKNOWN,n)}function jT(n){return new zt(Lt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function zT(n){return new zt(Lt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function HT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new zt(Lt.UNAUTHENTICATED,n)}function qT(){return new zt(Lt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function WT(n){return new zt(Lt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function hy(){return new zt(Lt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fy(){return new zt(Lt.CANCELED,"User canceled the upload/download.")}function GT(n){return new zt(Lt.INVALID_URL,"Invalid URL '"+n+"'.")}function YT(n){return new zt(Lt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function KT(){return new zt(Lt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+dy+"' property when initializing the app?")}function py(){return new zt(Lt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function QT(){return new zt(Lt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function XT(){return new zt(Lt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function JT(n){return new zt(Lt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ku(n){return new zt(Lt.INVALID_ARGUMENT,n)}function my(){return new zt(Lt.APP_DELETED,"The Firebase app was deleted.")}function ZT(n){return new zt(Lt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Wi(n,t){return new zt(Lt.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function yi(n){throw new zt(Lt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=$e.makeFromUrl(t,e)}catch{return new $e(t,"")}if(s.path==="")return s;throw YT(t)}static makeFromUrl(t,e){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(D){D.path_=decodeURIComponent(D.path)}const d="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${d}/b/${r}/o${f}`,"i"),g={bucket:1,path:3},v=e===uy?"(?:storage.googleapis.com|storage.cloud.google.com)":e,y="([^?#]*)",w=new RegExp(`^https?://${v}/${r}/${y}`,"i"),k=[{regex:a,indices:c,postModify:i},{regex:m,indices:g,postModify:l},{regex:w,indices:{bucket:1,path:2},postModify:l}];for(let D=0;D<k.length;D++){const P=k[D],M=P.regex.exec(t);if(M){const I=M[P.indices.bucket];let b=M[P.indices.path];b||(b=""),s=new $e(I,b),P.postModify(s);break}}if(s==null)throw GT(t);return s}}class tI{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(n,t,e){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function d(...y){l||(l=!0,t.apply(null,y))}function h(y){r=setTimeout(()=>{r=null,n(m,c())},y)}function f(){i&&clearTimeout(i)}function m(y,...w){if(l){f();return}if(y){f(),d.call(null,y,...w);return}if(c()||o){f(),d.call(null,y,...w);return}s<64&&(s*=2);let k;a===1?(a=2,k=0):k=(s+Math.random())*1e3,h(k)}let g=!1;function v(y){g||(g=!0,f(),!l&&(r!==null?(y||(a=2),clearTimeout(r),h(0)):y||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},e),v}function nI(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(n){return n!==void 0}function rI(n){return typeof n=="function"}function iI(n){return typeof n=="object"&&!Array.isArray(n)}function Wc(n){return typeof n=="string"||n instanceof String}function pp(n){return Fd()&&n instanceof Blob}function Fd(){return typeof Blob<"u"}function mp(n,t,e,s){if(s<t)throw ku(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw ku(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n,t,e){let s=t;return e==null&&(s=`https://${t}`),`${e}://${s}/v0${n}`}function gy(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const r=t(s)+"="+t(n[s]);e=e+r+"&"}return e=e.slice(0,-1),e}var Fs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Fs||(Fs={}));/**
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
 */function _y(n,t){const e=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,i=t.indexOf(n)!==-1;return e||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(t,e,s,r,i,o,a,c,l,d,h,f=!0){this.url_=t,this.method_=e,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,g)=>{this.resolve_=m,this.reject_=g,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new la(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Fs.NO_ERROR,c=i.getStatus();if(!a||_y(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Fs.ABORT;s(!1,new la(!1,null,d));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new la(l,i))})},e=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());sI(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Vd();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?my():fy();o(c)}else{const c=hy();o(c)}};this.canceled_?e(!1,new la(!1,null,!0)):this.backoffId_=eI(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&nI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class la{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function aI(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function cI(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function lI(n,t){t&&(n["X-Firebase-GMPID"]=t)}function uI(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function dI(n,t,e,s,r,i,o=!0){const a=gy(n.urlParams),c=n.url+a,l=Object.assign({},n.headers);return lI(l,t),aI(l,e),cI(l,i),uI(l,s),new oI(c,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function fI(...n){const t=hI();if(t!==void 0){const e=new t;for(let s=0;s<n.length;s++)e.append(n[s]);return e.getBlob()}else{if(Fd())return new Blob(n);throw new zt(Lt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function pI(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function mI(n){if(typeof atob>"u")throw JT("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Nl{constructor(t,e){this.data=t,this.contentType=e||null}}function gI(n,t){switch(n){case ln.RAW:return new Nl(yy(t));case ln.BASE64:case ln.BASE64URL:return new Nl(vy(n,t));case ln.DATA_URL:return new Nl(yI(t),vI(t))}throw Vd()}function yy(n){const t=[];for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const i=s,o=n.charCodeAt(++e);s=65536|(i&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function _I(n){let t;try{t=decodeURIComponent(n)}catch{throw Wi(ln.DATA_URL,"Malformed data URL.")}return yy(t)}function vy(n,t){switch(n){case ln.BASE64:{const r=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(r||i)throw Wi(n,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case ln.BASE64URL:{const r=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(r||i)throw Wi(n,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=mI(t)}catch(r){throw r.message.includes("polyfill")?r:Wi(n,"Invalid character found")}const s=new Uint8Array(e.length);for(let r=0;r<e.length;r++)s[r]=e.charCodeAt(r);return s}class by{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw Wi(ln.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;s!=null&&(this.base64=bI(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function yI(n){const t=new by(n);return t.base64?vy(ln.BASE64,t.rest):_I(t.rest)}function vI(n){return new by(n).contentType}function bI(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e){let s=0,r="";pp(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(pp(this.data_)){const s=this.data_,r=pI(s,t,e);return r===null?null:new Kn(r)}else{const s=new Uint8Array(this.data_.buffer,t,e-t);return new Kn(s,!0)}}static getBlob(...t){if(Fd()){const e=t.map(s=>s instanceof Kn?s.data_:s);return new Kn(fI.apply(null,e))}else{const e=t.map(o=>Wc(o)?gI(ln.RAW,o).data:o.data_);let s=0;e.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return e.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Kn(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n){let t;try{t=JSON.parse(n)}catch{return null}return iI(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function wI(n,t){const e=t.split("/").filter(s=>s.length>0).join("/");return n.length===0?e:n+"/"+e}function wy(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(n,t){return t}class Ce{constructor(t,e,s,r){this.server=t,this.local=e||t,this.writable=!!s,this.xform=r||EI}}let ua=null;function TI(n){return!Wc(n)||n.length<2?n:wy(n)}function Ey(){if(ua)return ua;const n=[];n.push(new Ce("bucket")),n.push(new Ce("generation")),n.push(new Ce("metageneration")),n.push(new Ce("name","fullPath",!0));function t(i,o){return TI(o)}const e=new Ce("name");e.xform=t,n.push(e);function s(i,o){return o!==void 0?Number(o):o}const r=new Ce("size");return r.xform=s,n.push(r),n.push(new Ce("timeCreated")),n.push(new Ce("updated")),n.push(new Ce("md5Hash",null,!0)),n.push(new Ce("cacheControl",null,!0)),n.push(new Ce("contentDisposition",null,!0)),n.push(new Ce("contentEncoding",null,!0)),n.push(new Ce("contentLanguage",null,!0)),n.push(new Ce("contentType",null,!0)),n.push(new Ce("metadata","customMetadata",!0)),ua=n,ua}function II(n,t){function e(){const s=n.bucket,r=n.fullPath,i=new $e(s,r);return t._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:e})}function AI(n,t,e){const s={};s.type="file";const r=e.length;for(let i=0;i<r;i++){const o=e[i];s[o.local]=o.xform(s,t[o.server])}return II(s,n),s}function Ty(n,t,e){const s=xy(t);return s===null?null:AI(n,s,e)}function kI(n,t,e,s){const r=xy(t);if(r===null||!Wc(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const d=n.bucket,h=n.fullPath,f="/b/"+o(d)+"/o/"+o(h),m=Mo(f,e,s),g=gy({alt:"media",token:l});return m+g})[0]}function Iy(n,t){const e={},s=t.length;for(let r=0;r<s;r++){const i=t[r];i.writable&&(e[i.server]=n[i.local])}return JSON.stringify(e)}class Xr{constructor(t,e,s,r){this.url=t,this.method=e,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(n){if(!n)throw Vd()}function $d(n,t){function e(s,r){const i=Ty(n,r,t);return Nn(i!==null),i}return e}function SI(n,t){function e(s,r){const i=Ty(n,r,t);return Nn(i!==null),kI(i,r,n.host,n._protocol)}return e}function Oo(n){function t(e,s){let r;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?r=qT():r=HT():e.getStatus()===402?r=zT(n.bucket):e.getStatus()===403?r=WT(n.path):r=s,r.status=e.getStatus(),r.serverResponse=s.serverResponse,r}return t}function Ay(n){const t=Oo(n);function e(s,r){let i=t(s,r);return s.getStatus()===404&&(i=jT(n.path)),i.serverResponse=r.serverResponse,i}return e}function CI(n,t,e){const s=t.fullServerUrl(),r=Mo(s,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new Xr(r,i,$d(n,e),o);return a.errorHandler=Ay(t),a}function RI(n,t,e){const s=t.fullServerUrl(),r=Mo(s,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new Xr(r,i,SI(n,e),o);return a.errorHandler=Ay(t),a}function PI(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function ky(n,t,e){const s=Object.assign({},e);return s.fullPath=n.path,s.size=t.size(),s.contentType||(s.contentType=PI(null,t)),s}function DI(n,t,e,s,r){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let D=0;D<2;D++)k=k+Math.random().toString().slice(2);return k}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=ky(t,s,r),d=Iy(l,e),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",m=Kn.getBlob(h,s,f);if(m===null)throw py();const g={name:l.fullPath},v=Mo(i,n.host,n._protocol),y="POST",w=n.maxUploadRetryTime,T=new Xr(v,y,$d(n,e),w);return T.urlParams=g,T.headers=o,T.body=m.uploadData(),T.errorHandler=Oo(t),T}class rc{constructor(t,e,s,r){this.current=t,this.total=e,this.finalized=!!s,this.metadata=r||null}}function Bd(n,t){let e=null;try{e=n.getResponseHeader("X-Goog-Upload-Status")}catch{Nn(!1)}return Nn(!!e&&(t||["active"]).indexOf(e)!==-1),e}function MI(n,t,e,s,r){const i=t.bucketOnlyServerUrl(),o=ky(t,s,r),a={name:o.fullPath},c=Mo(i,n.host,n._protocol),l="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Iy(o,e),f=n.maxUploadRetryTime;function m(v){Bd(v);let y;try{y=v.getResponseHeader("X-Goog-Upload-URL")}catch{Nn(!1)}return Nn(Wc(y)),y}const g=new Xr(c,l,m,f);return g.urlParams=a,g.headers=d,g.body=h,g.errorHandler=Oo(t),g}function OI(n,t,e,s){const r={"X-Goog-Upload-Command":"query"};function i(l){const d=Bd(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Nn(!1)}h||Nn(!1);const f=Number(h);return Nn(!isNaN(f)),new rc(f,s.size(),d==="final")}const o="POST",a=n.maxUploadRetryTime,c=new Xr(e,o,i,a);return c.headers=r,c.errorHandler=Oo(t),c}const gp=256*1024;function NI(n,t,e,s,r,i,o,a){const c=new rc(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw QT();const l=c.total-c.current;let d=l;r>0&&(d=Math.min(d,r));const h=c.current,f=h+d;let m="";d===0?m="finalize":l===d?m="upload, finalize":m="upload";const g={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${c.current}`},v=s.slice(h,f);if(v===null)throw py();function y(D,P){const M=Bd(D,["active","final"]),I=c.current+d,b=s.size();let x;return M==="final"?x=$d(t,i)(D,P):x=null,new rc(I,b,M==="final",x)}const w="POST",T=t.maxUploadRetryTime,k=new Xr(e,w,y,T);return k.headers=g,k.body=v.uploadData(),k.progressCallback=a||null,k.errorHandler=Oo(n),k}const Pe={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ll(n){switch(n){case"running":case"pausing":case"canceling":return Pe.RUNNING;case"paused":return Pe.PAUSED;case"success":return Pe.SUCCESS;case"canceled":return Pe.CANCELED;case"error":return Pe.ERROR;default:return Pe.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(t,e,s){if(rI(t)||e!=null||s!=null)this.next=t,this.error=e??void 0,this.complete=s??void 0;else{const i=t;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n){return(...t)=>{Promise.resolve().then(()=>n(...t))}}class VI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Fs.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Fs.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Fs.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,s,r){if(this.sent_)throw yi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw yi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw yi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw yi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw yi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class FI extends VI{initXhr(){this.xhr_.responseType="text"}}function Tr(){return new FI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(t,e,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=s,this._mappings=Ey(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(Lt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(_y(r.status,[]))if(i)r=hy();else{this.sleepTime=Math.max(this.sleepTime*2,UT),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(Lt.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,s])=>{switch(this._state){case"running":t(e,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const s=MI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Tr,t,e);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,s)=>{const r=OI(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(r,Tr,e,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=gp*this._chunkMultiplier,e=new rc(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=NI(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Tr,r,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){gp*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const s=CI(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,Tr,t,e);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const s=DI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Tr,t,e);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e=this._state==="paused";this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=fy(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Ll(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,s,r){const i=new LI(e||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);e!==-1&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Ll(this._state)){case Pe.SUCCESS:pr(this._resolve.bind(null,this.snapshot))();break;case Pe.CANCELED:case Pe.ERROR:const e=this._reject;pr(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Ll(this._state)){case Pe.RUNNING:case Pe.PAUSED:t.next&&pr(t.next.bind(t,this.snapshot))();break;case Pe.SUCCESS:t.complete&&pr(t.complete.bind(t))();break;case Pe.CANCELED:case Pe.ERROR:t.error&&pr(t.error.bind(t,this._error))();break;default:t.error&&pr(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
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
 */class Xs{constructor(t,e){this._service=t,e instanceof $e?this._location=e:this._location=$e.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Xs(t,e)}get root(){const t=new $e(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wy(this._location.path)}get storage(){return this._service}get parent(){const t=xI(this._location.path);if(t===null)return null;const e=new $e(this._location.bucket,t);return new Xs(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw ZT(t)}}function BI(n,t,e){return n._throwIfRoot("uploadBytesResumable"),new $I(n,new Kn(t),e)}function UI(n){n._throwIfRoot("getDownloadURL");const t=RI(n.storage,n._location,Ey());return n.storage.makeRequestWithTokens(t,Tr).then(e=>{if(e===null)throw XT();return e})}function jI(n,t){const e=wI(n._location.path,t),s=new $e(n._location.bucket,e);return new Xs(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(n){return/^[A-Za-z]+:\/\//.test(n)}function HI(n,t){return new Xs(n,t)}function Sy(n,t){if(n instanceof Ud){const e=n;if(e._bucket==null)throw KT();const s=new Xs(e,e._bucket);return t!=null?Sy(s,t):s}else return t!==void 0?jI(n,t):n}function qI(n,t){if(t&&zI(t)){if(n instanceof Ud)return HI(n,t);throw ku("To use ref(service, url), the first argument must be a Storage instance.")}else return Sy(n,t)}function _p(n,t){const e=t==null?void 0:t[dy];return e==null?null:$e.makeFromBucketSpec(e,n)}function WI(n,t,e,s={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:r}=s;r&&(n._overrideAuthToken=typeof r=="string"?r:Rg(r,n.app.options.projectId))}class Ud{constructor(t,e,s,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=uy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$T,this._maxUploadRetryTime=BT,this._requests=new Set,r!=null?this._bucket=$e.makeFromBucketSpec(r,this._host):this._bucket=_p(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=$e.makeFromBucketSpec(this._url,t):this._bucket=_p(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){mp("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){mp("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Xs(this,t)}_makeRequest(t,e,s,r,i=!0){if(this._deleted)return new tI(my());{const o=dI(t,this._appId,s,r,e,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,e){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,r).getPromise()}}const yp="@firebase/storage",vp="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="storage";function GI(n,t,e){return n=Wt(n),BI(n,t,e)}function YI(n){return n=Wt(n),UI(n)}function KI(n,t){return n=Wt(n),qI(n,t)}function QI(n=rd(),t){n=Wt(n);const s=Ec(n,Cy).getImmediate({identifier:t}),r=kg("storage");return r&&XI(s,...r),s}function XI(n,t,e,s={}){WI(n,t,e,s)}function JI(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new Ud(e,s,r,t,er)}function ZI(){qs(new us(Cy,JI,"PUBLIC").setMultipleInstances(!0)),un(yp,vp,""),un(yp,vp,"esm2017")}ZI();function jd(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(e[s[r]]=n[s[r]]);return e}function Ry(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tA=Ry,Py=new xo("auth","Firebase",Ry());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new nd("@firebase/auth");function eA(n,...t){ic.logLevel<=dt.WARN&&ic.warn(`Auth (${er}): ${n}`,...t)}function Da(n,...t){ic.logLevel<=dt.ERROR&&ic.error(`Auth (${er}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(n,...t){throw zd(n,...t)}function fn(n,...t){return zd(n,...t)}function Dy(n,t,e){const s=Object.assign(Object.assign({},tA()),{[t]:e});return new xo("auth","Firebase",s).create(t,{appName:n.name})}function cs(n){return Dy(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zd(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return Py.create(n,...t)}function J(n,t,...e){if(!n)throw zd(t,...e)}function kn(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Da(t),new Error(t)}function $n(n,t){n||kn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function nA(){return bp()==="http:"||bp()==="https:"}function bp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nA()||wx()||"connection"in navigator)?navigator.onLine:!0}function rA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(t,e){this.shortDelay=t,this.longDelay=e,$n(e>t,"Short delay should be less than long delay!"),this.isMobile=vx()||Ex()}get(){return sA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n,t){$n(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=new No(3e4,6e4);function ys(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Un(n,t,e,s,r={}){return Oy(n,r,async()=>{let i={},o={};s&&(t==="GET"?o=s:i={body:JSON.stringify(s)});const a=wo(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:t,headers:c},i);return xx()||(l.referrerPolicy="no-referrer"),My.fetch()(Ny(n,n.config.apiHost,e,a),l)})}async function Oy(n,t,e){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},iA),t);try{const r=new cA(n),i=await Promise.race([e(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw da(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw da(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw da(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw da(n,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Dy(n,d,l);tn(n,d)}}catch(r){if(r instanceof yn)throw r;tn(n,"network-request-failed",{message:String(r)})}}async function Gc(n,t,e,s,r={}){const i=await Un(n,t,e,s,r);return"mfaPendingCredential"in i&&tn(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Ny(n,t,e,s){const r=`${t}${e}?${s}`;return n.config.emulator?Hd(n.config,r):`${n.config.apiScheme}://${r}`}function aA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cA{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(fn(this.auth,"network-request-failed")),oA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function da(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const r=fn(n,t,s);return r.customData._tokenResponse=e,r}function xp(n){return n!==void 0&&n.enterprise!==void 0}class lA{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return aA(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function uA(n,t){return Un(n,"GET","/v2/recaptchaConfig",ys(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(n,t){return Un(n,"POST","/v1/accounts:delete",t)}async function Ly(n,t){return Un(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function hA(n,t=!1){const e=Wt(n),s=await e.getIdToken(t),r=qd(s);J(r&&r.exp&&r.auth_time&&r.iat,e.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Gi(Vl(r.auth_time)),issuedAtTime:Gi(Vl(r.iat)),expirationTime:Gi(Vl(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vl(n){return Number(n)*1e3}function qd(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return Da("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ig(e);return r?JSON.parse(r):(Da("Failed to decode base64 JWT payload"),null)}catch(r){return Da("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function wp(n){const t=qd(n);return J(t,"internal-error"),J(typeof t.exp<"u","internal-error"),J(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof yn&&fA(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function fA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gi(this.lastLoginAt),this.creationTime=Gi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oc(n){var t;const e=n.auth,s=await n.getIdToken(),r=await co(n,Ly(e,{idToken:s}));J(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Vy(i.providerUserInfo):[],a=gA(n.providerData,o),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Cu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function mA(n){const t=Wt(n);await oc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function gA(n,t){return[...n.filter(s=>!t.some(r=>r.providerId===s.providerId)),...t]}function Vy(n){return n.map(t=>{var{providerId:e}=t,s=jd(t,["providerId"]);return{providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A(n,t){const e=await Oy(n,{},async()=>{const s=wo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=Ny(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",My.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function yA(n,t){return Un(n,"POST","/v2/accounts:revokeToken",ys(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){J(t.idToken,"internal-error"),J(typeof t.idToken<"u","internal-error"),J(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):wp(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){J(t.length!==0,"internal-error");const e=wp(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:r,expiresIn:i}=await _A(t,e);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:r,expirationTime:i}=e,o=new Dr;return s&&(J(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),r&&(J(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),i&&(J(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Dr,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(n,t){J(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Sn{constructor(t){var{uid:e,auth:s,stsTokenManager:r}=t,i=jd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Cu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await co(this,this.stsTokenManager.getToken(this.auth,t));return J(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return hA(this,t)}reload(){return mA(this)}_assign(t){this!==t&&(J(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Sn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await oc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(An(this.auth.app))return Promise.reject(cs(this.auth));const t=await this.getIdToken();return await co(this,dA(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var s,r,i,o,a,c,l,d;const h=(s=e.displayName)!==null&&s!==void 0?s:void 0,f=(r=e.email)!==null&&r!==void 0?r:void 0,m=(i=e.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=e.photoURL)!==null&&o!==void 0?o:void 0,v=(a=e.tenantId)!==null&&a!==void 0?a:void 0,y=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=e.createdAt)!==null&&l!==void 0?l:void 0,T=(d=e.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:k,emailVerified:D,isAnonymous:P,providerData:M,stsTokenManager:I}=e;J(k&&I,t,"internal-error");const b=Dr.fromJSON(this.name,I);J(typeof k=="string",t,"internal-error"),Wn(h,t.name),Wn(f,t.name),J(typeof D=="boolean",t,"internal-error"),J(typeof P=="boolean",t,"internal-error"),Wn(m,t.name),Wn(g,t.name),Wn(v,t.name),Wn(y,t.name),Wn(w,t.name),Wn(T,t.name);const x=new Sn({uid:k,auth:t,email:f,emailVerified:D,displayName:h,isAnonymous:P,photoURL:g,phoneNumber:m,tenantId:v,stsTokenManager:b,createdAt:w,lastLoginAt:T});return M&&Array.isArray(M)&&(x.providerData=M.map(A=>Object.assign({},A))),y&&(x._redirectEventId=y),x}static async _fromIdTokenResponse(t,e,s=!1){const r=new Dr;r.updateFromServerResponse(e);const i=new Sn({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:s});return await oc(i),i}static async _fromGetAccountInfoResponse(t,e,s){const r=e.users[0];J(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Vy(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Dr;a.updateFromIdToken(s);const c=new Sn({uid:r.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Cu(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=new Map;function Cn(n){$n(n instanceof Function,"Expected a class definition");let t=Ep.get(n);return t?($n(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Ep.set(n,t),t)}/**
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
 */class Fy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Fy.type="NONE";const Tp=Fy;/**
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
 */function Ma(n,t,e){return`firebase:${n}:${t}:${e}`}class Mr{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ma(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ma("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Sn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new Mr(Cn(Tp),t,s);const r=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Cn(Tp);const o=Ma(s,t.config.apiKey,t.name);let a=null;for(const l of e)try{const d=await l._get(o);if(d){const h=Sn._fromJSON(t,d);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Mr(i,t,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Mr(i,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(jy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if($y(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Hy(t))return"Blackberry";if(qy(t))return"Webos";if(By(t))return"Safari";if((t.includes("chrome/")||Uy(t))&&!t.includes("edge/"))return"Chrome";if(zy(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function $y(n=Ie()){return/firefox\//i.test(n)}function By(n=Ie()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Uy(n=Ie()){return/crios\//i.test(n)}function jy(n=Ie()){return/iemobile/i.test(n)}function zy(n=Ie()){return/android/i.test(n)}function Hy(n=Ie()){return/blackberry/i.test(n)}function qy(n=Ie()){return/webos/i.test(n)}function Wd(n=Ie()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vA(n=Ie()){var t;return Wd(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function bA(){return Tx()&&document.documentMode===10}function Wy(n=Ie()){return Wd(n)||zy(n)||qy(n)||Hy(n)||/windows phone/i.test(n)||jy(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(n,t=[]){let e;switch(n){case"Browser":e=Ip(Ie());break;case"Worker":e=`${Ip(Ie())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${er}/${s}`}/**
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
 */class xA{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const s=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});s.onAbort=e,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const s of this.queue)await s(t),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const r of e)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function wA(n,t={}){return Un(n,"GET","/v2/passwordPolicy",ys(n,t))}/**
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
 */const EA=6;class TA{constructor(t){var e,s,r,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:EA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let r=0;r<t.length;r++)s=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(t,e,s,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ap(this),this.idTokenSubscription=new Ap(this),this.beforeStateQueue=new xA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Py,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Cn(e)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Mr.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Ly(this,{idToken:t}),s=await Sn._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(An(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await oc(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=rA()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(An(this.app))return Promise.reject(cs(this));const e=t?Wt(t):null;return e&&J(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&J(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return An(this.app)?Promise.reject(cs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return An(this.app)?Promise.reject(cs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await wA(this),e=new TA(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new xo("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await yA(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Cn(t)||this._popupRedirectResolver;J(e,this,"argument-error"),this.redirectPersistenceManager=await Mr.create(this,[Cn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,s;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,r){if(this._deleted)return()=>{};const i=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,s,r);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Gy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(e["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&eA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ir(n){return Wt(n)}class Ap{constructor(t){this.auth=t,this.observer=null,this.addObserver=Dx(e=>this.observer=e)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AA(n){Yc=n}function Yy(n){return Yc.loadJS(n)}function kA(){return Yc.recaptchaEnterpriseScript}function SA(){return Yc.gapiScript}function CA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const RA="recaptcha-enterprise",PA="NO_RECAPTCHA";class DA{constructor(t){this.type=RA,this.auth=ir(t)}async verify(t="verify",e=!1){async function s(i){if(!e){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{uA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new lA(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;xp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(PA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!e&&xp(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=kA();c.length!==0&&(c+=a),Yy(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function kp(n,t,e,s=!1){const r=new DA(n);let i;try{i=await r.verify(e)}catch{i=await r.verify(e,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ru(n,t,e,s){var r;if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await kp(n,t,e,e==="getOobCode");return s(n,i)}else return s(n,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await kp(n,t,e,e==="getOobCode");return s(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(n,t){const e=Ec(n,"auth");if(e.isInitialized()){const r=e.getImmediate(),i=e.getOptions();if(Wa(i,t??{}))return r;tn(r,"already-initialized")}return e.initialize({options:t})}function OA(n,t){const e=(t==null?void 0:t.persistence)||[],s=(Array.isArray(e)?e:[e]).map(Cn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function NA(n,t,e){const s=ir(n);J(s._canInitEmulator,s,"emulator-config-failed"),J(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const r=!1,i=Ky(t),{host:o,port:a}=LA(t),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),VA()}function Ky(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function LA(n){const t=Ky(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Sp(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Sp(o)}}}function Sp(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function VA(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return kn("not implemented")}_getIdTokenResponse(t){return kn("not implemented")}_linkToIdToken(t,e){return kn("not implemented")}_getReauthenticationResolver(t){return kn("not implemented")}}async function FA(n,t){return Un(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $A(n,t){return Gc(n,"POST","/v1/accounts:signInWithPassword",ys(n,t))}async function BA(n,t){return Un(n,"POST","/v1/accounts:sendOobCode",ys(n,t))}async function UA(n,t){return BA(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(n,t){return Gc(n,"POST","/v1/accounts:signInWithEmailLink",ys(n,t))}async function zA(n,t){return Gc(n,"POST","/v1/accounts:signInWithEmailLink",ys(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends Gd{constructor(t,e,s,r=null){super("password",s),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new lo(t,e,"password")}static _fromEmailAndCode(t,e,s=null){return new lo(t,e,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ru(t,e,"signInWithPassword",$A);case"emailLink":return jA(t,{email:this._email,oobCode:this._password});default:tn(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const s={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ru(t,s,"signUpPassword",FA);case"emailLink":return zA(t,{idToken:e,email:this._email,oobCode:this._password});default:tn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(n,t){return Gc(n,"POST","/v1/accounts:signInWithIdp",ys(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA="http://localhost";class Js extends Gd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Js(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):tn("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:r}=e,i=jd(e,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Js(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Or(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,Or(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Or(t,e)}buildRequest(){const t={requestUri:HA,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=wo(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WA(n){const t=Ri(Pi(n)).link,e=t?Ri(Pi(t)).deep_link_id:null,s=Ri(Pi(n)).deep_link_id;return(s?Ri(Pi(s)).link:null)||s||e||t||n}class Yd{constructor(t){var e,s,r,i,o,a;const c=Ri(Pi(t)),l=(e=c.apiKey)!==null&&e!==void 0?e:null,d=(s=c.oobCode)!==null&&s!==void 0?s:null,h=qA((r=c.mode)!==null&&r!==void 0?r:null);J(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=WA(t);try{return new Yd(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.providerId=Jr.PROVIDER_ID}static credential(t,e){return lo._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const s=Yd.parseLink(e);return J(s,"argument-error"),lo._fromEmailAndCode(t,s.code,s.tenantId)}}Jr.PROVIDER_ID="password";Jr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lo extends Qy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Lo{constructor(){super("facebook.com")}static credential(t){return Js._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qn.credentialFromTaggedObject(t)}static credentialFromError(t){return Qn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Qn.credential(t.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Lo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Js._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Xn.credentialFromTaggedObject(t)}static credentialFromError(t){return Xn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return Xn.credential(e,s)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Lo{constructor(){super("github.com")}static credential(t){return Js._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jn.credentialFromTaggedObject(t)}static credentialFromError(t){return Jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Jn.credential(t.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Lo{constructor(){super("twitter.com")}static credential(t,e){return Js._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Zn.credentialFromTaggedObject(t)}static credentialFromError(t){return Zn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return Zn.credential(e,s)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,r=!1){const i=await Sn._fromIdTokenResponse(t,s,r),o=Cp(s);return new jr({user:i,providerId:o,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const r=Cp(s);return new jr({user:t,providerId:r,_tokenResponse:s,operationType:e})}}function Cp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends yn{constructor(t,e,s,r){var i;super(e.code,e.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,r){return new ac(t,e,s,r)}}function Xy(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(n,i,t,s):i})}async function GA(n,t,e=!1){const s=await co(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return jr._forOperation(n,"link",s)}/**
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
 */async function YA(n,t,e=!1){const{auth:s}=n;if(An(s.app))return Promise.reject(cs(s));const r="reauthenticate";try{const i=await co(n,Xy(s,r,t,n),e);J(i.idToken,s,"internal-error");const o=qd(i.idToken);J(o,s,"internal-error");const{sub:a}=o;return J(n.uid===a,s,"user-mismatch"),jr._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(n,t,e=!1){if(An(n.app))return Promise.reject(cs(n));const s="signIn",r=await Xy(n,s,t),i=await jr._fromIdTokenResponse(n,s,r);return e||await n._updateCurrentUser(i.user),i}async function KA(n,t){return Jy(ir(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(n){const t=ir(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function XA(n,t,e){const s=ir(n);await Ru(s,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",UA)}function JA(n,t,e){return An(n.app)?Promise.reject(cs(n)):KA(Wt(n),Jr.credential(t,e)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&QA(n),s})}function ZA(n,t,e,s){return Wt(n).onIdTokenChanged(t,e,s)}function tk(n,t,e){return Wt(n).beforeAuthStateChanged(t,e)}function ek(n,t,e,s){return Wt(n).onAuthStateChanged(t,e,s)}function nk(n){return Wt(n).signOut()}const cc="__sak";/**
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
 */class Zy{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(cc,"1"),this.storage.removeItem(cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=1e3,rk=10;class tv extends Zy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wy(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),r=this.localCache[e];s!==r&&t(e,r,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;e?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!e&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);bA()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,rk):r()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},sk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}tv.type="LOCAL";const ik=tv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev extends Zy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}ev.type="SESSION";const nv=ev;/**
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
 */function ok(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Kc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(r=>r.isListeningto(t));if(e)return e;const s=new Kc(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(e.origin,i)),c=await ok(a);e.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n="",t=10){let e="";for(let s=0;s<t;s++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class ak{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Kd("",20);r.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function ck(n){pn().location.href=n}/**
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
 */function sv(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function lk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function dk(){return sv()?self:null}/**
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
 */const rv="firebaseLocalStorageDb",hk=1,lc="firebaseLocalStorage",iv="fbase_key";class Vo{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Qc(n,t){return n.transaction([lc],t?"readwrite":"readonly").objectStore(lc)}function fk(){const n=indexedDB.deleteDatabase(rv);return new Vo(n).toPromise()}function Pu(){const n=indexedDB.open(rv,hk);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(lc,{keyPath:iv})}catch(r){e(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(lc)?t(s):(s.close(),await fk(),t(await Pu()))})})}async function Rp(n,t,e){const s=Qc(n,!0).put({[iv]:t,value:e});return new Vo(s).toPromise()}async function pk(n,t){const e=Qc(n,!1).get(t),s=await new Vo(e).toPromise();return s===void 0?null:s.value}function Pp(n,t){const e=Qc(n,!0).delete(t);return new Vo(e).toPromise()}const mk=800,gk=3;class ov{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pu(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>gk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kc._getInstance(dk()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await lk(),!this.activeServiceWorker)return;this.sender=new ak(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((e=s[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||uk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Pu();return await Rp(t,cc,"1"),await Pp(t,cc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>Rp(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>pk(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Pp(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const i=Qc(r,!1).getAll();return new Vo(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:r,value:i}of t)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ov.type="LOCAL";const _k=ov;new No(3e4,6e4);/**
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
 */function yk(n,t){return t?Cn(t):(J(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Qd extends Gd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Or(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Or(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Or(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function vk(n){return Jy(n.auth,new Qd(n),n.bypassAuthState)}function bk(n){const{auth:t,user:e}=n;return J(e,t,"internal-error"),YA(e,new Qd(n),n.bypassAuthState)}async function xk(n){const{auth:t,user:e}=n;return J(e,t,"internal-error"),GA(e,new Qd(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(t,e,s,r,i=!1){this.auth=t,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return vk;case"linkViaPopup":case"linkViaRedirect":return xk;case"reauthViaPopup":case"reauthViaRedirect":return bk;default:tn(this.auth,"internal-error")}}resolve(t){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=new No(2e3,1e4);class Sr extends av{constructor(t,e,s,r,i){super(t,e,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return J(t,this.auth,"internal-error"),t}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const t=Kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,s;if(!((s=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,wk.get())};t()}}Sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek="pendingRedirect",Oa=new Map;class Tk extends av{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=Oa.get(this.auth._key());if(!t){try{const s=await Ik(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(e){t=()=>Promise.reject(e)}Oa.set(this.auth._key(),t)}return this.bypassAuthState||Oa.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ik(n,t){const e=Sk(t),s=kk(n);if(!await s._isAvailable())return!1;const r=await s._get(e)==="true";return await s._remove(e),r}function Ak(n,t){Oa.set(n._key(),t)}function kk(n){return Cn(n._redirectPersistence)}function Sk(n){return Ma(Ek,n.config.apiKey,n.name)}async function Ck(n,t,e=!1){if(An(n.app))return Promise.reject(cs(n));const s=ir(n),r=yk(s,t),o=await new Tk(s,r,e).execute();return o&&!e&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=10*60*1e3;class Pk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Dk(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var s;if(t.error&&!cv(t)){const r=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";e.onError(fn(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Rk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dp(t))}saveEventToCache(t){this.cachedEventUids.add(Dp(t)),this.lastProcessedEventTime=Date.now()}}function Dp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function cv({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Dk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mk(n,t={}){return Un(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nk=/^https?/;async function Lk(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Mk(n);for(const e of t)try{if(Vk(e))return}catch{}tn(n,"unauthorized-domain")}function Vk(n){const t=Su(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===s}if(!Nk.test(e))return!1;if(Ok.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Fk=new No(3e4,6e4);function Mp(){const n=pn().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function $k(n){return new Promise((t,e)=>{var s,r,i;function o(){Mp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mp(),e(fn(n,"network-request-failed"))},timeout:Fk.get()})}if(!((r=(s=pn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((i=pn().gapi)===null||i===void 0)&&i.load)o();else{const a=CA("iframefcb");return pn()[a]=()=>{gapi.load?o():e(fn(n,"network-request-failed"))},Yy(`${SA()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw Na=null,t})}let Na=null;function Bk(n){return Na=Na||$k(n),Na}/**
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
 */const Uk=new No(5e3,15e3),jk="__/auth/iframe",zk="emulator/auth/iframe",Hk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wk(n){const t=n.config;J(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Hd(t,zk):`https://${n.config.authDomain}/${jk}`,s={apiKey:t.apiKey,appName:n.name,v:er},r=qk.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${e}?${wo(s).slice(1)}`}async function Gk(n){const t=await Bk(n),e=pn().gapi;return J(e,n,"internal-error"),t.open({where:document.body,url:Wk(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hk,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=fn(n,"network-request-failed"),a=pn().setTimeout(()=>{i(o)},Uk.get());function c(){pn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Yk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kk=500,Qk=600,Xk="_blank",Jk="http://localhost";class Op{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zk(n,t,e,s=Kk,r=Qk){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Yk),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Ie().toLowerCase();e&&(a=Uy(l)?Xk:e),$y(l)&&(t=t||Jk,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(vA(l)&&a!=="_self")return tS(t||"",a),new Op(null);const h=window.open(t||"",a,d);J(h,n,"popup-blocked");try{h.focus()}catch{}return new Op(h)}function tS(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
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
 */const eS="__/auth/handler",nS="emulator/auth/handler",sS=encodeURIComponent("fac");async function Np(n,t,e,s,r,i){J(n.config.authDomain,n,"auth-domain-config-required"),J(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:er,eventId:r};if(t instanceof Qy){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Px(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(t instanceof Lo){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${sS}=${encodeURIComponent(c)}`:"";return`${rS(n)}?${wo(a).slice(1)}${l}`}function rS({config:n}){return n.emulator?Hd(n,nS):`https://${n.authDomain}/${eS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="webStorageSupport";class iS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nv,this._completeRedirectFn=Ck,this._overrideRedirectResult=Ak}async _openPopup(t,e,s,r){var i;$n((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Np(t,e,s,Su(),r);return Zk(t,o,Kd())}async _openRedirect(t,e,s,r){await this._originValidation(t);const i=await Np(t,e,s,Su(),r);return ck(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:r,promise:i}=this.eventManagers[e];return r?Promise.resolve(r):($n(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await Gk(t),s=new Pk(t);return e.register("authEvent",r=>(J(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Fl,{type:Fl},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Fl];o!==void 0&&e(!!o),tn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Lk(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Wy()||By()||Wd()}}const oS=iS;var Lp="@firebase/auth",Vp="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lS(n){qs(new us("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gy(n)},l=new IA(s,r,i,c);return OA(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),qs(new us("auth-internal",t=>{const e=ir(t.getProvider("auth").getImmediate());return(s=>new aS(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(Lp,Vp,cS(n)),un(Lp,Vp,"esm2017")}/**
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
 */const uS=5*60,dS=Cg("authIdTokenMaxAge")||uS;let Fp=null;const hS=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>dS)return;const r=e==null?void 0:e.token;Fp!==r&&(Fp=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function fS(n=rd()){const t=Ec(n,"auth");if(t.isInitialized())return t.getImmediate();const e=MA(n,{popupRedirectResolver:oS,persistence:[_k,ik,nv]}),s=Cg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=hS(i.toString());tk(e,o,()=>o(e.currentUser)),ZA(e,a=>o(a))}}const r=Ag("auth");return r&&NA(e,`http://${r}`),e}function pS(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}AA({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=r=>{const i=fn("internal-error");i.customData=r,e(i)},s.type="text/javascript",s.charset="UTF-8",pS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lS("Browser");const lv={},uv=n=>typeof window<"u"&&window[n]?window[n]:typeof globalThis<"u"&&globalThis[n]?globalThis[n]:null,mS={apiKey:"AIzaSyAuJIZeL0ipjVAdoSjH5Wq5IIwdjWexoaE",authDomain:"controle-de-obras-axel.firebaseapp.com",projectId:"controle-de-obras-axel",storageBucket:"controle-de-obras-axel.firebasestorage.app",messagingSenderId:"438724917414",appId:"1:438724917414:web:cb9674cdc557bdf2a7dc67"},gS=()=>{const n=uv("__FIREBASE_CONFIG");if(n)return n;const t=import.meta&&lv||{},e={apiKey:t.VITE_FIREBASE_API_KEY,authDomain:t.VITE_FIREBASE_AUTH_DOMAIN,projectId:t.VITE_FIREBASE_PROJECT_ID,storageBucket:t.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:t.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:t.VITE_FIREBASE_APP_ID};return Object.values(e).every(Boolean)?e:(console.warn("[Config] Firebase config não encontrada em globals/ENV; usando fallback padrão legado."),mS)},_S=()=>{const n=uv("__RDO_API_CONFIG");if(n)return{TOKEN:n.TOKEN,BASE_URL:n.BASE_URL,HOLIDAYS:Array.isArray(n.HOLIDAYS)?n.HOLIDAYS:[]};const t=import.meta&&lv||{},e=t.VITE_RDO_API_TOKEN||t.VITE_RDO_TOKEN,s=t.VITE_RDO_API_BASE||"https://rdo.axelindustrial.com.br/api",r=(t.VITE_RDO_HOLIDAYS||"").split(",").map(i=>i.trim()).filter(Boolean);return e?{TOKEN:e,BASE_URL:s,HOLIDAYS:r}:{TOKEN:"",BASE_URL:s,HOLIDAYS:r}},yS=gS(),Xc=Mg(yS),X=Q_(Xc),vS=QI(Xc),ha=fS(Xc),bS=async()=>(console.log("[Firebase] Configuração carregada com sucesso"),Xc),kt={state:{currentUser:null,currentTheme:localStorage.getItem("theme")||"dark",currentObra:null,sidebarCollapsed:localStorage.getItem("sidebarCollapsed")==="true"},listeners:[],subscribe(n){return this.listeners.push(n),()=>{this.listeners=this.listeners.filter(t=>t!==n)}},setState(n){this.state={...this.state,...n},this.notify()},notify(){this.listeners.forEach(n=>n(this.state))},setUser(n){this.setState({currentUser:n})},setTheme(n){localStorage.setItem("theme",n),this.applyTheme(n)},applyTheme(n){this.setState({currentTheme:n});const t=document.documentElement;t.classList.remove("dark","theme-light"),n==="dark"||n==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?(t.classList.add("dark"),t.setAttribute("data-theme","dark")):(t.classList.add("theme-light"),t.setAttribute("data-theme","light"))},toggleSidebar(){const n=!this.state.sidebarCollapsed;localStorage.setItem("sidebarCollapsed",n),this.setState({sidebarCollapsed:n})}},uc={init:()=>new Promise(n=>{ek(ha,async t=>{if(t)try{const e=await ao(ne(X,"usuarios",t.uid));if(e.exists()){const s={uid:t.uid,email:t.email,...e.data()};kt.setUser(s)}else kt.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}catch(e){console.warn("Erro ao buscar perfil (usando fallback):",e.message),kt.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}else kt.setUser(null);n(kt.state.currentUser)})}),login:async(n,t)=>{try{const s=(await JA(ha,n,t)).user,r=await ao(ne(X,"usuarios",s.uid));if(r.exists()){const i={uid:s.uid,email:s.email,...r.data()};return kt.setUser(i),i}else throw new Error("Perfil de usuário não encontrado.")}catch(e){throw e}},logout:async()=>{await nk(ha),kt.setUser(null)},recoverPassword:async n=>{await XA(ha,n)}},Tt={routes:{},currentRoute:null,init(){window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())},on(n,t){this.routes[n]=t},navigate(n){window.location.hash=n},matchRoute(n){if(this.routes[n])return{handler:this.routes[n],params:{}};const t=n.split("/").filter(Boolean);for(const[e,s]of Object.entries(this.routes)){const r=e.split("/").filter(Boolean);if(r.length!==t.length)continue;const i={};let o=!0;for(let a=0;a<r.length;a++){const c=r[a],l=t[a];if(c.startsWith(":"))i[c.slice(1)]=decodeURIComponent(l);else if(c!==l){o=!1;break}}if(o)return{handler:s,params:i}}return null},async handleRoute(){const n=window.location.hash.slice(1)||"/";if(!kt.state.currentUser&&n!=="/login"&&n!=="/forgot-password"){this.navigate("/login");return}if(kt.state.currentUser&&(n==="/login"||n==="/forgot-password")){this.navigate("/");return}const t=this.matchRoute(n),e=(t==null?void 0:t.handler)||this.routes["/404"]||(()=>console.warn("Rota não encontrada:",n)),s=(t==null?void 0:t.params)||{};this.currentRoute=n,await e(s)}},F={createInput:({type:n="text",id:t,label:e,placeholder:s="",value:r="",required:i=!1,className:o=""})=>`
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
        `},$p={renderLogin:()=>`
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
        `},Bp={initLogin:()=>{const n=document.getElementById("app");n.innerHTML=$p.renderLogin(),document.getElementById("login-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email").value,r=document.getElementById("password").value,i=document.getElementById("btn-login");try{i.disabled=!0,i.innerHTML=F.createLoader(),await uc.login(s,r),F.createToast("Login realizado com sucesso!"),Tt.navigate("/")}catch(o){console.error(o);let a="Erro ao realizar login.";o.code==="auth/invalid-credential"&&(a="Email ou senha incorretos."),F.createToast(a,"error"),i.disabled=!1,i.innerHTML="<span>Entrar</span>"}})},initForgotPassword:()=>{const n=document.getElementById("app");n.innerHTML=$p.renderForgotPassword(),document.getElementById("forgot-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email-recovery").value,r=document.getElementById("btn-recover");try{r.disabled=!0,r.innerHTML=F.createLoader(),await uc.recoverPassword(s),F.createToast("Email de recuperação enviado!"),setTimeout(()=>Tt.navigate("/login"),2e3)}catch(i){F.createToast("Erro ao enviar email: "+i.message,"error"),r.disabled=!1,r.innerHTML="<span>Enviar</span>"}})}},xS="modulepreload",wS=function(n){return"/"+n},Up={},uo=function(t,e,s){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(e.map(c=>{if(c=wS(c),c in Up)return;Up[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":xS,l||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),l)return new Promise((f,m)=>{h.addEventListener("load",f),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},ES=async n=>{if(!n)return null;const t=await wt(Kt(pt(X,"obras"),Rt("__name__","==",n)));if(t.empty)return null;const e=t.docs[0].data(),s=Number(e.orcamento||e.valor_orcado||0),r=Number(e.tolerancia_percentual||0),i=s+s*r,a=(await wt(Kt(pt(X,"compras"),Rt("obraId","==",n)))).docs.map(l=>l.data());let c=0;return a.forEach(l=>{const d=(l.status_compra||"").toLowerCase(),h=!l.estouro_orcamento||l.status_aprovacao==="Aprovado";(d==="comprado"||d==="recebido"||d==="entregue")&&h&&(c+=Number(l.valor_total||l.valor_estimado||0))}),{limite_real:i,comprometido:c,orcado:s}},TS=async n=>{var t,e,s;try{const{ObrasService:r}=await uo(async()=>{const{ObrasService:l}=await Promise.resolve().then(()=>ND);return{ObrasService:l}},void 0),i=await((t=r.getObraById)==null?void 0:t.call(r,n)),o=(i==null?void 0:i.numero_os)||(i==null?void 0:i.numeroOS)||n;if(!o)return null;const{RDOService:a}=await uo(async()=>{const{RDOService:l}=await Promise.resolve().then(()=>Nb);return{RDOService:l}},void 0),c=await a.getIntegratedDataForObra(o);if((e=c==null?void 0:c.reports)!=null&&e.length){const l=a.processRDOData(c.reports);return{...l,quantidadeRelatorios:c.quantidadeRelatorios||((s=l.reports)==null?void 0:s.length)||0}}return c?{quantidadeRelatorios:c.quantidadeRelatorios||0,totalHoras:Number(c.totalHoras||0)}:null}catch(r){return console.warn("[Dashboard] RDO fetch fail",(r==null?void 0:r.message)||r),null}},IS=n=>{const t=new Date,e=new Date(t.getTime()-7*24*60*60*1e3),s=new Date(t.getFullYear(),t.getMonth(),1),r=new Date(t.getTime()-14*24*60*60*1e3),i=n.filter(m=>{const g=new Date(m.data_emissao||m.data_solicitacao);return g>=e&&g<=t}),o=n.filter(m=>{const g=new Date(m.data_emissao||m.data_solicitacao);return g>=s&&g<=t}),a=n.filter(m=>{const g=new Date(m.data_emissao||m.data_solicitacao);return g>=r&&g<e}),c=i.reduce((m,g)=>m+Number(g.valor_total||g.valor_estimado||0),0),l=o.reduce((m,g)=>m+Number(g.valor_total||g.valor_estimado||0),0),d=a.reduce((m,g)=>m+Number(g.valor_total||g.valor_estimado||0),0),h=d>0?(c-d)/d*100:0,f=o.length>0?l/o.length:0;return{semana:{quantidade:i.length,valor:c},mes:{quantidade:o.length,valor:l},variacaoSemanal:h,ticketMedio:f}},AS=n=>{const t=new Date,e=n.previsao_entrega?new Date(n.previsao_entrega):null,s=n.ultima_atualizacao?new Date(n.ultima_atualizacao):n.data_emissao?new Date(n.data_emissao):null;let r=0,i="baixa",o="";const a=(n.status_compra||"").toLowerCase();if(["entregue","recebido","cancelado"].includes(a))return{score:0,criticidade:"baixa",motivo:""};if(e&&e<t){const c=Math.floor((t-e)/864e5);r=100+c,i="alta",o=`Atrasado há ${c} dias`}else if(e){const c=Math.floor((e-t)/864e5);c<=3&&c>=0&&(r=80+(3-c)*5,i="media",o=`Vence em ${c} dias`)}else if(s&&a==="comprado"){const c=Math.floor((t-s)/864e5);c>=5&&(r=60+c,i="media",o=`Sem atualização há ${c} dias`)}else if(a==="pendente"&&n.data_solicitacao){const c=Math.floor((t-new Date(n.data_solicitacao))/864e5);c>=7&&(r=50+c,i="media",o=`Pendente há ${c} dias`)}else!e&&a==="comprado"&&(r=40,i="baixa",o="Sem previsão de entrega");return{score:r,criticidade:i,motivo:o}},Be={getCompradorStats:async(n={})=>{const t=pt(X,"compras");let e=Kt(t);n.obraId&&(e=Kt(t,Rt("obraId","==",n.obraId)));let r=(await wt(e)).docs.map(L=>({id:L.id,...L.data()}));if(n.periodo){const{start:L,end:q}=n.periodo,Y=L?new Date(L):null,ft=q?new Date(q):null;(Y||ft)&&(r=r.filter(mt=>{const bt=mt.data_emissao||mt.data_solicitacao;if(!bt)return!1;const G=new Date(bt);return!(Y&&G<Y||ft&&G>ft)}))}const i=r.filter(L=>L.status_compra==="Pendente"),o=r.filter(L=>L.status_compra==="Em Cotação"),a=r.sort((L,q)=>new Date(q.data_solicitacao||0)-new Date(L.data_solicitacao||0)).slice(0,5);let c=0,l=0,d=0,h=0,f=0,m=0;const g={},v={},y={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0},w=await wt(pt(X,"centrosCusto")),T=new Map(w.docs.map(L=>[L.id,L.data().nome||L.data().codigo||L.id])),k=await wt(pt(X,"obras")),D=new Map(k.docs.map(L=>[L.id,L.data().nome_obra||L.data().apelido_obra||L.id])),M=r.map(L=>{const{score:q,criticidade:Y,motivo:ft}=AS(L);return{...L,obraNome:D.get(L.obraId)||L.obra||L.obraId||"N/D",score:q,criticidade:Y,motivo:ft}}).filter(L=>L.score>0).sort((L,q)=>q.score-L.score).slice(0,10);r.forEach(L=>{const q=Number(L.valor_estimado||L.valor_total||0);m+=q;const Y=L.previsao_entrega?new Date(L.previsao_entrega):null,ft=L.data_recebimento?new Date(L.data_recebimento):null;if(Y&&L.status_compra!=="Entregue"&&L.status_compra!=="Recebido"&&Y<new Date&&c++,ft&&Y&&(l++,ft<=Y&&d++),L.data_emissao&&(ft||Y)){const Bt=ft||Y,Oe=Math.max(0,(new Date(Bt)-new Date(L.data_emissao))/(1e3*60*60*24));h+=Oe,f++}const mt=(L.status_compra||"").toLowerCase();mt.includes("cot")&&y.cotacao++,!Y&&mt!=="recebido"&&mt!=="entregue"&&y.sem_previsao++,Y&&Y<new Date&&mt!=="recebido"&&mt!=="entregue"&&y.atrasados++;const G=(L.status_aprovacao||"").toLowerCase();(L.estouro_orcamento||G==="pendente")&&y.pendente_aprovacao++;const ot=(L.natureza_compra||"Outros").trim();g[ot]=(g[ot]||0)+q;const xt=T.get(L.centroCustoId)||L.centroCustoNome||L.centro_custo||L.centroCustoId||"N/D";v[xt]=(v[xt]||0)+q});const I=l?d/l*100:0,b=f?h/f:0,x=IS(r),A=new Date,C=new Date(A.getTime()+3*24*60*60*1e3);let R=c;r.forEach(L=>{const q=L.previsao_entrega?new Date(L.previsao_entrega):null,Y=(L.status_compra||"").toLowerCase();q&&q>=A&&q<=C&&Y!=="recebido"&&Y!=="entregue"&&R++});const S=i.length+o.length,et=3;let z=0;r.forEach(L=>{const q=(L.status_compra||"").toLowerCase();if(q==="comprado"||q==="aprovado"){const Y=L.ultima_atualizacao||L.data_emissao||L.data_solicitacao;Y&&Math.floor((A-new Date(Y))/864e5)>=et&&z++}});const B=y.sem_previsao;return{pendentes:i.length,emCotacao:o.length,recentes:a,atrasos:c,sla:I,lead:b,totalValor:m,naturezaTotais:g,ccTotais:v,alerts:y,atividade:x,urgentes:R,aguardandoAcao:S,precisamAtualizacao:z,semPrevisao:B,comprasCriticas:M}},getTimelineData:async(n=null)=>{const t=pt(X,"compras");let e=Kt(t);n&&(e=Kt(t,Rt("obraId","==",n)));const s=await wt(e),r=new Date;r.setHours(0,0,0,0);const i=new Date(r);i.setDate(r.getDate()+7);const o=[];return s.docs.forEach(a=>{const c=a.data();if(!c.previsao_entrega)return;const l=new Date(c.previsao_entrega);l.setHours(0,0,0,0),l>=r&&l<=i&&o.push({id:a.id,...c,date:l})}),o.sort((a,c)=>a.date-c.date)},getObraStats:async n=>{if(!n)return{pendentes:0,transito:0,entregues:0,recentes:[]};const t=pt(X,"compras"),e=Kt(t,Rt("obraId","==",n),Rt("status_compra","in",["Pendente","Em Cotação","Aprovado"])),s=await wt(e),r=Kt(t,Rt("obraId","==",n),Rt("status_compra","==","Comprado")),i=await wt(r),o=Kt(t,Rt("obraId","==",n),Rt("status_compra","in",["Entregue","Recebido"])),a=await wt(o),c=Kt(t,Rt("obraId","==",n),Od("data_solicitacao","desc"),sc(5)),l=await wt(c),d=await wt(Kt(t,Rt("obraId","==",n)));let h=0,f=0,m=0,g=0,v=0;const y=await ES(n),w=(y==null?void 0:y.comprometido)||0,T=(y==null?void 0:y.limite_real)||(y==null?void 0:y.orcado)||0,k=T>0?w/T*100:0,D=Math.max(0,T-w),P={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0};d.docs.forEach(I=>{const b=I.data(),x=b.previsao_entrega?new Date(b.previsao_entrega):null,A=b.data_recebimento?new Date(b.data_recebimento):null,C=(b.status_compra||"").toLowerCase();if(x&&C!=="entregue"&&C!=="recebido"&&x<new Date&&(h++,P.atrasados++),A&&x&&(f++,A<=x&&m++),b.data_emissao&&(A||x)){const S=A||x,et=Math.max(0,(new Date(S)-new Date(b.data_emissao))/(1e3*60*60*24));g+=et,v++}!x&&C!=="recebido"&&C!=="entregue"&&P.sem_previsao++;const R=(b.status_aprovacao||"").toLowerCase();(b.estouro_orcamento||R==="pendente")&&P.pendente_aprovacao++,C.includes("cot")&&P.cotacao++});const M=await TS(n);return{pendentes:s.size,transito:i.size,entregues:a.size,recentes:l.docs.map(I=>({id:I.id,...I.data()})),atrasos:h,sla:f?m/f*100:0,lead:v?g/v:0,economia:D,curvaPercent:k,comprometido:w,limiteReal:T,rdoData:M,alerts:P}},getObras:async()=>(await wt(pt(X,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getDiretorStats:async()=>{const n=pt(X,"compras"),t=Kt(n,sc(500)),e=await wt(t);let s=0,r={},i={},o=0,a=0,c=0,l=0,d=0,h=0,f=0;const m={},g={},v={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0},y=[];e.forEach(P=>{const M=P.data(),I=Number(M.valor_estimado||M.valor_total||0);y.push({id:P.id,...M}),s+=I,r[M.status_compra]=(r[M.status_compra]||0)+1,M.status_compra!=="Entregue"&&M.status_compra!=="Recebido"&&M.previsao_entrega&&new Date(M.previsao_entrega)<new Date&&(c++,v.atrasados++);const b=M.previsao_entrega?new Date(M.previsao_entrega):null,x=M.data_recebimento?new Date(M.data_recebimento):null;if(x&&b&&(l++,x<=b&&d++),M.data_emissao&&(x||b)){const et=x||b,z=Math.max(0,(new Date(et)-new Date(M.data_emissao))/(1e3*60*60*24));h+=z,f++}if(M.limite_real&&(o+=Number(M.limite_real)),M.comprometido&&(a+=Number(M.comprometido)),M.data_solicitacao){const et=new Date(M.data_solicitacao),z=`${et.getFullYear()}-${String(et.getMonth()+1).padStart(2,"0")}`;i[z]=(i[z]||0)+I}const A=(M.natureza_compra||"Outros").trim();m[A]=(m[A]||0)+I;const C=M.centroCustoNome||M.centro_custo||M.centroCustoId||"N/D";g[C]=(g[C]||0)+I,!M.previsao_entrega&&M.status_compra!=="Recebido"&&M.status_compra!=="Entregue"&&v.sem_previsao++,(M.status_aprovacao||"").toLowerCase()==="pendente"&&v.pendente_aprovacao++,(M.status_compra||"").toLowerCase().includes("cot")&&v.cotacao++});const w=o>0?a/o*100:0,T=l?d/l*100:0,k=f?h/f:0,D=Math.max(0,o-a);return{totalGasto:s,porStatus:r,totalPedidos:e.size,gastosPorMes:i,limiteReal:o,comprometido:a,curvaPercent:w,atrasos:c,sla:T,lead:k,economia:D,naturezaTotais:m,ccTotais:g,alerts:v,_allCompras:y}},markAsDelivered:async n=>{const{doc:t,updateDoc:e}=await uo(async()=>{const{doc:r,updateDoc:i}=await Promise.resolve().then(()=>FT);return{doc:r,updateDoc:i}},void 0),s=t(X,"compras",n);await e(s,{status_compra:"Entregue",data_recebimento:new Date().toISOString(),ultima_atualizacao:new Date().toISOString()})}},Z={formatCurrency:n=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n),formatDate:n=>{if(!n)return"-";const t=new Date(n);return Number.isNaN(t.getTime())?"-":t.toLocaleDateString("pt-BR")},formatCurrencyInput:(n,t=!1)=>{let s=(typeof n=="number"?n.toFixed(2):String(n??"")).replace(/\D/g,"");return s=(s/100).toFixed(2)+"",s=s.replace(".",","),s=s.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1."),t?`R$ ${s}`:s},parseCurrency:n=>{if(typeof n=="number")return n;if(!n)return 0;const t=String(n).replace("R$ ","").replace(/\./g,"").replace(",","."),e=parseFloat(t);return Number.isNaN(e)?0:e},formatCnpjInput:n=>{if(!n)return"";let t=n.replace(/\D/g,"");return t=t.substring(0,14),t=t.replace(/^(\d{2})(\d)/,"$1.$2"),t=t.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3"),t=t.replace(/\.(\d{3})(\d)/,".$1/$2"),t=t.replace(/(\d{4})(\d)/,"$1-$2"),t},validateCNPJ:n=>{if(!n)return!0;const t=n.replace(/\D/g,"");if(t.length!==14||/^(\d)\1{13}$/.test(t))return!1;let e=0,s=5;for(let a=0;a<8;a++)e+=parseInt(t[a],10)*s,s=s===2?9:s-1;let r=e%11,i=r<2?0:11-r;if(parseInt(t[8],10)!==i)return!1;e=0,s=6;for(let a=0;a<9;a++)e+=parseInt(t[a],10)*s,s=s===2?9:s-1;r=e%11;let o=r<2?0:11-r;return parseInt(t[9],10)===o},renderStatusBadge:(n,t)=>{const e=new Date;e.setHours(0,0,0,0);let s=null;if(t){const o=new Date(t);Number.isNaN(o.getTime())||(s=o)}const r=(n||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return r!=="recebido"&&s&&s<e?'<span class="px-2 py-1 text-xs font-display rounded bg-alert text-canvas uppercase">Atrasado</span>':r.includes("recebido")||r.includes("entregue")?`<span class="px-2 py-1 text-xs font-display rounded bg-primary text-canvas uppercase">${n}</span>`:r.includes("comprado")?`<span class="px-2 py-1 text-xs font-display rounded bg-indigo-500 text-canvas uppercase">${n}</span>`:r.includes("aprov")?`<span class="px-2 py-1 text-xs font-display rounded bg-emerald-500 text-canvas uppercase">${n}</span>`:r.includes("cot")||r.includes("cota")?`<span class="px-2 py-1 text-xs font-display rounded bg-amber-400 text-gray-900 uppercase">${n}</span>`:`<span class="px-2 py-1 text-xs font-display rounded bg-border text-text uppercase">${n||"N/D"}</span>`},debounce:(n,t)=>{let e;return(...s)=>{clearTimeout(e),e=setTimeout(()=>n(...s),t)}},getGreeting:()=>{const n=new Date().getHours();return n<12?"Bom dia":n<18?"Boa tarde":"Boa noite"},getContextualMessage:n=>{const t=[];return n.urgentes>0?t.push(`Você tem <strong>${n.urgentes} compras urgentes</strong> que precisam de atenção`):n.aguardandoAcao>0?t.push(`Há <strong>${n.aguardandoAcao} compras aguardando</strong> sua ação`):n.pendentes===0&&n.emCotacao===0?t.push("Tudo em dia! Continue o ótimo trabalho 🎉"):t.push("Aqui está o resumo das suas compras"),n.sla>=90&&t.push(`Seu SLA está excelente: <strong>${n.sla.toFixed(1)}%</strong> ✨`),t.join(" • ")},formatRelativeTime:n=>{if(!n)return"";const t=new Date(n),s=new Date-t,r=Math.floor(s/6e4),i=Math.floor(s/36e5),o=Math.floor(s/864e5);return r<1?"agora mesmo":r<60?`há ${r} minuto${r>1?"s":""}`:i<24?`há ${i} hora${i>1?"s":""}`:o===1?"ontem":o<7?`há ${o} dias`:o<30?`há ${Math.floor(o/7)} semana${Math.floor(o/7)>1?"s":""}`:Z.formatDate(n)},daysBetween:(n,t)=>{const e=new Date(n),s=new Date(t),r=Math.abs(s-e);return Math.floor(r/(1e3*60*60*24))}},Mt={dashboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>',shoppingCart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>',chart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.212 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',logout:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>',bell:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>',moon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" /></svg>',pencil:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.75 19.901l-4.5.75.75-4.5L16.862 4.487z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.6l2.651 2.651" /></svg>',trash:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5h10.5M9.75 7.5v-1.5a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v1.5m-9 0v12a1.5 1.5 0 001.5 1.5h7.5a1.5 1.5 0 001.5-1.5v-12" /></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',alert:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>'},kS=n=>{const t=[];return n.semPrevisao>5&&t.push(`Você tem ${n.semPrevisao} compras sem previsão de entrega. Que tal entrar em contato com os fornecedores?`),n.precisamAtualizacao>10&&t.push(`${n.precisamAtualizacao} compras estão há dias sem atualização. Mantenha o status sempre atualizado!`),n.sla<80&&t.push(`Seu SLA está em ${n.sla.toFixed(1)}%. Foque em acompanhar as previsões de entrega para melhorar!`),n.lead>15&&t.push(`Seu lead time médio é ${n.lead.toFixed(1)} dias. Negocie prazos menores com fornecedores!`),n.urgentes>5&&t.push(`Atenção! ${n.urgentes} compras urgentes precisam de ação imediata.`),t.length===0&&t.push("Excelente trabalho! Seus indicadores estão ótimos. Continue assim! 🎉"),t[Math.floor(Math.random()*t.length)]},fa={renderTimeline:n=>{if(!n||n.length===0)return`
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
                            ${Z.getGreeting()}, ${(t==null?void 0:t.nome)||(t==null?void 0:t.email)||"Comprador"}! 👋
                        </h1>
                        <p class="text-text-muted">
                            ${Z.getContextualMessage(n)}
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
                                <p class="text-lg font-display text-text mt-2">${Z.formatCurrency(s.semana.valor)}</p>
                            </div>
                            
                            <!-- Este Mês -->
                            <div class="bg-canvas p-4 rounded border border-border">
                                <p class="text-xs text-text-muted uppercase tracking-wide mb-2">Este Mês</p>
                                <p class="text-2xl font-display text-primary">${s.mes.quantidade}</p>
                                <p class="text-sm text-text-muted">compras</p>
                                <p class="text-lg font-display text-text mt-2">${Z.formatCurrency(s.mes.valor)}</p>
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
                                <span class="font-display text-text">${Z.formatCurrency(s.ticketMedio)}</span>
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
                            <p class="text-sm text-text-muted">${kS(n)}</p>
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
                                        <span>${Z.formatCurrency(r.valor_total||r.valor_estimado)}</span>
                                    </p>
                                </div>

                                <!-- Status e Motivo -->
                                <div class="flex-shrink-0 text-right hidden sm:block">
                                    ${Z.renderStatusBadge(r.status_compra,r.previsao_entrega)}
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
                    ${F.createCard({title:"Economia vs Orçamento",content:`<p class="text-4xl font-display text-${(n.economia||0)<0?"alert":"primary"} uppercase">${Z.formatCurrency(n.economia||0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(n.curvaPercent||0).toFixed(1)}%</p>`})}
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
                    ${F.createCard({title:"Total Gasto (Amostra)",content:`<p class="text-4xl font-display text-primary uppercase">${Z.formatCurrency(n.totalGasto)}</p>`})}
                    ${F.createCard({title:"Total de Pedidos",content:`<p class="text-4xl font-display text-primary uppercase">${n.totalPedidos}</p>`})}
                    ${F.createCard({title:"% Curva S (Comprometido vs Limite)",content:`<p class="text-4xl font-display text-${n.curvaPercent>100?"alert":"primary"} uppercase">${(n.curvaPercent||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Limite: ${Z.formatCurrency(n.limiteReal||0)} • Comprometido: ${Z.formatCurrency(n.comprometido||0)}</p>`})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted mt-1">Com previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">On-time vs entregues</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia (Limite - Comprometido)",content:`<p class="text-4xl font-display text-primary uppercase">${Z.formatCurrency(n.economia||0)}</p>`})}
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
                                            <td class="px-4 py-2 text-sm text-text text-right">${Z.formatCurrency(i.limite)}</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${Z.formatCurrency(i.comprometido)}</td>
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
 */function Fo(n){return n+.5|0}const es=(n,t,e)=>Math.max(Math.min(n,e),t);function Ni(n){return es(Fo(n*2.55),0,255)}function ls(n){return es(Fo(n*255),0,255)}function In(n){return es(Fo(n/2.55)/100,0,1)}function jp(n){return es(Fo(n*100),0,100)}const Ue={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Du=[..."0123456789ABCDEF"],SS=n=>Du[n&15],CS=n=>Du[(n&240)>>4]+Du[n&15],pa=n=>(n&240)>>4===(n&15),RS=n=>pa(n.r)&&pa(n.g)&&pa(n.b)&&pa(n.a);function PS(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&Ue[n[1]]*17,g:255&Ue[n[2]]*17,b:255&Ue[n[3]]*17,a:t===5?Ue[n[4]]*17:255}:(t===7||t===9)&&(e={r:Ue[n[1]]<<4|Ue[n[2]],g:Ue[n[3]]<<4|Ue[n[4]],b:Ue[n[5]]<<4|Ue[n[6]],a:t===9?Ue[n[7]]<<4|Ue[n[8]]:255})),e}const DS=(n,t)=>n<255?t(n):"";function MS(n){var t=RS(n)?SS:CS;return n?"#"+t(n.r)+t(n.g)+t(n.b)+DS(n.a,t):void 0}const OS=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function dv(n,t,e){const s=t*Math.min(e,1-e),r=(i,o=(i+n/30)%12)=>e-s*Math.max(Math.min(o-3,9-o,1),-1);return[r(0),r(8),r(4)]}function NS(n,t,e){const s=(r,i=(r+n/60)%6)=>e-e*t*Math.max(Math.min(i,4-i,1),0);return[s(5),s(3),s(1)]}function LS(n,t,e){const s=dv(n,1,.5);let r;for(t+e>1&&(r=1/(t+e),t*=r,e*=r),r=0;r<3;r++)s[r]*=1-t-e,s[r]+=t;return s}function VS(n,t,e,s,r){return n===r?(t-e)/s+(t<e?6:0):t===r?(e-n)/s+2:(n-t)/s+4}function Xd(n){const e=n.r/255,s=n.g/255,r=n.b/255,i=Math.max(e,s,r),o=Math.min(e,s,r),a=(i+o)/2;let c,l,d;return i!==o&&(d=i-o,l=a>.5?d/(2-i-o):d/(i+o),c=VS(e,s,r,d,i),c=c*60+.5),[c|0,l||0,a]}function Jd(n,t,e,s){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,s)).map(ls)}function Zd(n,t,e){return Jd(dv,n,t,e)}function FS(n,t,e){return Jd(LS,n,t,e)}function $S(n,t,e){return Jd(NS,n,t,e)}function hv(n){return(n%360+360)%360}function BS(n){const t=OS.exec(n);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?Ni(+t[5]):ls(+t[5]));const r=hv(+t[2]),i=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?s=FS(r,i,o):t[1]==="hsv"?s=$S(r,i,o):s=Zd(r,i,o),{r:s[0],g:s[1],b:s[2],a:e}}function US(n,t){var e=Xd(n);e[0]=hv(e[0]+t),e=Zd(e),n.r=e[0],n.g=e[1],n.b=e[2]}function jS(n){if(!n)return;const t=Xd(n),e=t[0],s=jp(t[1]),r=jp(t[2]);return n.a<255?`hsla(${e}, ${s}%, ${r}%, ${In(n.a)})`:`hsl(${e}, ${s}%, ${r}%)`}const zp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Hp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function zS(){const n={},t=Object.keys(Hp),e=Object.keys(zp);let s,r,i,o,a;for(s=0;s<t.length;s++){for(o=a=t[s],r=0;r<e.length;r++)i=e[r],a=a.replace(i,zp[i]);i=parseInt(Hp[o],16),n[a]=[i>>16&255,i>>8&255,i&255]}return n}let ma;function HS(n){ma||(ma=zS(),ma.transparent=[0,0,0,0]);const t=ma[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const qS=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function WS(n){const t=qS.exec(n);let e=255,s,r,i;if(t){if(t[7]!==s){const o=+t[7];e=t[8]?Ni(o):es(o*255,0,255)}return s=+t[1],r=+t[3],i=+t[5],s=255&(t[2]?Ni(s):es(s,0,255)),r=255&(t[4]?Ni(r):es(r,0,255)),i=255&(t[6]?Ni(i):es(i,0,255)),{r:s,g:r,b:i,a:e}}}function GS(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${In(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const $l=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,mr=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function YS(n,t,e){const s=mr(In(n.r)),r=mr(In(n.g)),i=mr(In(n.b));return{r:ls($l(s+e*(mr(In(t.r))-s))),g:ls($l(r+e*(mr(In(t.g))-r))),b:ls($l(i+e*(mr(In(t.b))-i))),a:n.a+e*(t.a-n.a)}}function ga(n,t,e){if(n){let s=Xd(n);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=Zd(s),n.r=s[0],n.g=s[1],n.b=s[2]}}function fv(n,t){return n&&Object.assign(t||{},n)}function qp(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=ls(n[3]))):(t=fv(n,{r:0,g:0,b:0,a:1}),t.a=ls(t.a)),t}function KS(n){return n.charAt(0)==="r"?WS(n):BS(n)}class ho{constructor(t){if(t instanceof ho)return t;const e=typeof t;let s;e==="object"?s=qp(t):e==="string"&&(s=PS(t)||HS(t)||KS(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=fv(this._rgb);return t&&(t.a=In(t.a)),t}set rgb(t){this._rgb=qp(t)}rgbString(){return this._valid?GS(this._rgb):void 0}hexString(){return this._valid?MS(this._rgb):void 0}hslString(){return this._valid?jS(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,r=t.rgb;let i;const o=e===i?.5:e,a=2*o-1,c=s.a-r.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;i=1-l,s.r=255&l*s.r+i*r.r+.5,s.g=255&l*s.g+i*r.g+.5,s.b=255&l*s.b+i*r.b+.5,s.a=o*s.a+(1-o)*r.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=YS(this._rgb,t._rgb,e)),this}clone(){return new ho(this.rgb)}alpha(t){return this._rgb.a=ls(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Fo(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return ga(this._rgb,2,t),this}darken(t){return ga(this._rgb,2,-t),this}saturate(t){return ga(this._rgb,1,t),this}desaturate(t){return ga(this._rgb,1,-t),this}rotate(t){return US(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function wn(){}const QS=(()=>{let n=0;return()=>n++})();function at(n){return n==null}function Vt(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function ut(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function qt(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function Ve(n,t){return qt(n)?n:t}function st(n,t){return typeof n>"u"?t:n}const XS=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,pv=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function Pt(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function At(n,t,e,s){let r,i,o;if(Vt(n))for(i=n.length,r=0;r<i;r++)t.call(e,n[r],r);else if(ut(n))for(o=Object.keys(n),i=o.length,r=0;r<i;r++)t.call(e,n[o[r]],o[r])}function dc(n,t){let e,s,r,i;if(!n||!t||n.length!==t.length)return!1;for(e=0,s=n.length;e<s;++e)if(r=n[e],i=t[e],r.datasetIndex!==i.datasetIndex||r.index!==i.index)return!1;return!0}function hc(n){if(Vt(n))return n.map(hc);if(ut(n)){const t=Object.create(null),e=Object.keys(n),s=e.length;let r=0;for(;r<s;++r)t[e[r]]=hc(n[e[r]]);return t}return n}function mv(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function JS(n,t,e,s){if(!mv(n))return;const r=t[n],i=e[n];ut(r)&&ut(i)?fo(r,i,s):t[n]=hc(i)}function fo(n,t,e){const s=Vt(t)?t:[t],r=s.length;if(!ut(n))return n;e=e||{};const i=e.merger||JS;let o;for(let a=0;a<r;++a){if(o=s[a],!ut(o))continue;const c=Object.keys(o);for(let l=0,d=c.length;l<d;++l)i(c[l],n,o,e)}return n}function Yi(n,t){return fo(n,t,{merger:ZS})}function ZS(n,t,e){if(!mv(n))return;const s=t[n],r=e[n];ut(s)&&ut(r)?Yi(s,r):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=hc(r))}const Wp={"":n=>n,x:n=>n.x,y:n=>n.y};function t1(n){const t=n.split("."),e=[];let s="";for(const r of t)s+=r,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function e1(n){const t=t1(n);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function ps(n,t){return(Wp[t]||(Wp[t]=e1(t)))(n)}function th(n){return n.charAt(0).toUpperCase()+n.slice(1)}const po=n=>typeof n<"u",ms=n=>typeof n=="function",Gp=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function n1(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const yt=Math.PI,Nt=2*yt,s1=Nt+yt,fc=Number.POSITIVE_INFINITY,r1=yt/180,Xt=yt/2,Ts=yt/4,Yp=yt*2/3,ns=Math.log10,mn=Math.sign;function Ki(n,t,e){return Math.abs(n-t)<e}function Kp(n){const t=Math.round(n);n=Ki(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(ns(n))),s=n/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function i1(n){const t=[],e=Math.sqrt(n);let s;for(s=1;s<e;s++)n%s===0&&(t.push(s),t.push(n/s));return e===(e|0)&&t.push(e),t.sort((r,i)=>r-i).pop(),t}function o1(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function zr(n){return!o1(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function a1(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function gv(n,t,e){let s,r,i;for(s=0,r=n.length;s<r;s++)i=n[s][e],isNaN(i)||(t.min=Math.min(t.min,i),t.max=Math.max(t.max,i))}function Xe(n){return n*(yt/180)}function eh(n){return n*(180/yt)}function Qp(n){if(!qt(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function _v(n,t){const e=t.x-n.x,s=t.y-n.y,r=Math.sqrt(e*e+s*s);let i=Math.atan2(s,e);return i<-.5*yt&&(i+=Nt),{angle:i,distance:r}}function Mu(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function c1(n,t){return(n-t+s1)%Nt-yt}function xe(n){return(n%Nt+Nt)%Nt}function mo(n,t,e,s){const r=xe(n),i=xe(t),o=xe(e),a=xe(i-r),c=xe(o-r),l=xe(r-i),d=xe(r-o);return r===i||r===o||s&&i===o||a>c&&l<d}function le(n,t,e){return Math.max(t,Math.min(e,n))}function l1(n){return le(n,-32768,32767)}function Rn(n,t,e,s=1e-6){return n>=Math.min(t,e)-s&&n<=Math.max(t,e)+s}function nh(n,t,e){e=e||(o=>n[o]<t);let s=n.length-1,r=0,i;for(;s-r>1;)i=r+s>>1,e(i)?r=i:s=i;return{lo:r,hi:s}}const Pn=(n,t,e,s)=>nh(n,e,s?r=>{const i=n[r][t];return i<e||i===e&&n[r+1][t]===e}:r=>n[r][t]<e),u1=(n,t,e)=>nh(n,e,s=>n[s][t]>=e);function d1(n,t,e){let s=0,r=n.length;for(;s<r&&n[s]<t;)s++;for(;r>s&&n[r-1]>e;)r--;return s>0||r<n.length?n.slice(s,r):n}const yv=["push","pop","shift","splice","unshift"];function h1(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),yv.forEach(e=>{const s="_onData"+th(e),r=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...i){const o=r.apply(this,i);return n._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...i)}),o}})})}function Xp(n,t){const e=n._chartjs;if(!e)return;const s=e.listeners,r=s.indexOf(t);r!==-1&&s.splice(r,1),!(s.length>0)&&(yv.forEach(i=>{delete n[i]}),delete n._chartjs)}function vv(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const bv=function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame}();function xv(n,t){let e=[],s=!1;return function(...r){e=r,s||(s=!0,bv.call(window,()=>{s=!1,n.apply(t,e)}))}}function f1(n,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(n,t,s)):n.apply(this,s),t}}const sh=n=>n==="start"?"left":n==="end"?"right":"center",ve=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,p1=(n,t,e,s)=>n===(s?"left":"right")?e:n==="center"?(t+e)/2:t;function wv(n,t,e){const s=t.length;let r=0,i=s;if(n._sorted){const{iScale:o,vScale:a,_parsed:c}=n,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,d=o.axis,{min:h,max:f,minDefined:m,maxDefined:g}=o.getUserBounds();if(m){if(r=Math.min(Pn(c,d,h).lo,e?s:Pn(t,d,o.getPixelForValue(h)).lo),l){const v=c.slice(0,r+1).reverse().findIndex(y=>!at(y[a.axis]));r-=Math.max(0,v)}r=le(r,0,s-1)}if(g){let v=Math.max(Pn(c,o.axis,f,!0).hi+1,e?0:Pn(t,d,o.getPixelForValue(f),!0).hi+1);if(l){const y=c.slice(v-1).findIndex(w=>!at(w[a.axis]));v+=Math.max(0,y)}i=le(v,r,s)-r}else i=s-r}return{start:r,count:i}}function Ev(n){const{xScale:t,yScale:e,_scaleRanges:s}=n,r={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return n._scaleRanges=r,!0;const i=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,r),i}const _a=n=>n===0||n===1,Jp=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*Nt/e)),Zp=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*Nt/e)+1,Qi={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Xt)+1,easeOutSine:n=>Math.sin(n*Xt),easeInOutSine:n=>-.5*(Math.cos(yt*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>_a(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>_a(n)?n:Jp(n,.075,.3),easeOutElastic:n=>_a(n)?n:Zp(n,.075,.3),easeInOutElastic(n){return _a(n)?n:n<.5?.5*Jp(n*2,.1125,.45):.5+.5*Zp(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Qi.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Qi.easeInBounce(n*2)*.5:Qi.easeOutBounce(n*2-1)*.5+.5};function rh(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function tm(n){return rh(n)?n:new ho(n)}function Bl(n){return rh(n)?n:new ho(n).saturate(.5).darken(.1).hexString()}const m1=["x","y","borderWidth","radius","tension"],g1=["color","borderColor","backgroundColor"];function _1(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:g1},numbers:{type:"number",properties:m1}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function y1(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const em=new Map;function v1(n,t){t=t||{};const e=n+JSON.stringify(t);let s=em.get(e);return s||(s=new Intl.NumberFormat(n,t),em.set(e,s)),s}function $o(n,t,e){return v1(t,e).format(n)}const Tv={values(n){return Vt(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const s=this.chart.options.locale;let r,i=n;if(e.length>1){const l=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(l<1e-4||l>1e15)&&(r="scientific"),i=b1(n,e)}const o=ns(Math.abs(i)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:r,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),$o(n,s,c)},logarithmic(n,t,e){if(n===0)return"0";const s=e[t].significand||n/Math.pow(10,Math.floor(ns(n)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?Tv.numeric.call(this,n,t,e):""}};function b1(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var Jc={formatters:Tv};function x1(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Jc.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Zs=Object.create(null),Ou=Object.create(null);function Xi(n,t){if(!t)return n;const e=t.split(".");for(let s=0,r=e.length;s<r;++s){const i=e[s];n=n[i]||(n[i]=Object.create(null))}return n}function Ul(n,t,e){return typeof t=="string"?fo(Xi(n,t),e):fo(Xi(n,""),t)}class w1{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,r)=>Bl(r.backgroundColor),this.hoverBorderColor=(s,r)=>Bl(r.borderColor),this.hoverColor=(s,r)=>Bl(r.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Ul(this,t,e)}get(t){return Xi(this,t)}describe(t,e){return Ul(Ou,t,e)}override(t,e){return Ul(Zs,t,e)}route(t,e,s,r){const i=Xi(this,t),o=Xi(this,s),a="_"+e;Object.defineProperties(i,{[a]:{value:i[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[a],l=o[r];return ut(c)?Object.assign({},l,c):st(c,l)},set(c){this[a]=c}}})}apply(t){t.forEach(e=>e(this))}}var $t=new w1({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[_1,y1,x1]);function E1(n){return!n||at(n.size)||at(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function pc(n,t,e,s,r){let i=t[r];return i||(i=t[r]=n.measureText(r).width,e.push(r)),i>s&&(s=i),s}function T1(n,t,e,s){s=s||{};let r=s.data=s.data||{},i=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(r=s.data={},i=s.garbageCollect=[],s.font=t),n.save(),n.font=t;let o=0;const a=e.length;let c,l,d,h,f;for(c=0;c<a;c++)if(h=e[c],h!=null&&!Vt(h))o=pc(n,r,i,o,h);else if(Vt(h))for(l=0,d=h.length;l<d;l++)f=h[l],f!=null&&!Vt(f)&&(o=pc(n,r,i,o,f));n.restore();const m=i.length/2;if(m>e.length){for(c=0;c<m;c++)delete r[i[c]];i.splice(0,m)}return o}function Is(n,t,e){const s=n.currentDevicePixelRatio,r=e!==0?Math.max(e/2,.5):0;return Math.round((t-r)*s)/s+r}function nm(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function Nu(n,t,e,s){Iv(n,t,e,s,null)}function Iv(n,t,e,s,r){let i,o,a,c,l,d,h,f;const m=t.pointStyle,g=t.rotation,v=t.radius;let y=(g||0)*r1;if(m&&typeof m=="object"&&(i=m.toString(),i==="[object HTMLImageElement]"||i==="[object HTMLCanvasElement]")){n.save(),n.translate(e,s),n.rotate(y),n.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),n.restore();return}if(!(isNaN(v)||v<=0)){switch(n.beginPath(),m){default:r?n.ellipse(e,s,r/2,v,0,0,Nt):n.arc(e,s,v,0,Nt),n.closePath();break;case"triangle":d=r?r/2:v,n.moveTo(e+Math.sin(y)*d,s-Math.cos(y)*v),y+=Yp,n.lineTo(e+Math.sin(y)*d,s-Math.cos(y)*v),y+=Yp,n.lineTo(e+Math.sin(y)*d,s-Math.cos(y)*v),n.closePath();break;case"rectRounded":l=v*.516,c=v-l,o=Math.cos(y+Ts)*c,h=Math.cos(y+Ts)*(r?r/2-l:c),a=Math.sin(y+Ts)*c,f=Math.sin(y+Ts)*(r?r/2-l:c),n.arc(e-h,s-a,l,y-yt,y-Xt),n.arc(e+f,s-o,l,y-Xt,y),n.arc(e+h,s+a,l,y,y+Xt),n.arc(e-f,s+o,l,y+Xt,y+yt),n.closePath();break;case"rect":if(!g){c=Math.SQRT1_2*v,d=r?r/2:c,n.rect(e-d,s-c,2*d,2*c);break}y+=Ts;case"rectRot":h=Math.cos(y)*(r?r/2:v),o=Math.cos(y)*v,a=Math.sin(y)*v,f=Math.sin(y)*(r?r/2:v),n.moveTo(e-h,s-a),n.lineTo(e+f,s-o),n.lineTo(e+h,s+a),n.lineTo(e-f,s+o),n.closePath();break;case"crossRot":y+=Ts;case"cross":h=Math.cos(y)*(r?r/2:v),o=Math.cos(y)*v,a=Math.sin(y)*v,f=Math.sin(y)*(r?r/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o);break;case"star":h=Math.cos(y)*(r?r/2:v),o=Math.cos(y)*v,a=Math.sin(y)*v,f=Math.sin(y)*(r?r/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o),y+=Ts,h=Math.cos(y)*(r?r/2:v),o=Math.cos(y)*v,a=Math.sin(y)*v,f=Math.sin(y)*(r?r/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o);break;case"line":o=r?r/2:Math.cos(y)*v,a=Math.sin(y)*v,n.moveTo(e-o,s-a),n.lineTo(e+o,s+a);break;case"dash":n.moveTo(e,s),n.lineTo(e+Math.cos(y)*(r?r/2:v),s+Math.sin(y)*v);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function Dn(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function Zc(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function tl(n){n.restore()}function I1(n,t,e,s,r){if(!t)return n.lineTo(e.x,e.y);if(r==="middle"){const i=(t.x+e.x)/2;n.lineTo(i,t.y),n.lineTo(i,e.y)}else r==="after"!=!!s?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function A1(n,t,e,s){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function k1(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),at(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function S1(n,t,e,s,r){if(r.strikethrough||r.underline){const i=n.measureText(s),o=t-i.actualBoundingBoxLeft,a=t+i.actualBoundingBoxRight,c=e-i.actualBoundingBoxAscent,l=e+i.actualBoundingBoxDescent,d=r.strikethrough?(c+l)/2:l;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=r.decorationWidth||2,n.moveTo(o,d),n.lineTo(a,d),n.stroke()}}function C1(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function tr(n,t,e,s,r,i={}){const o=Vt(t)?t:[t],a=i.strokeWidth>0&&i.strokeColor!=="";let c,l;for(n.save(),n.font=r.string,k1(n,i),c=0;c<o.length;++c)l=o[c],i.backdrop&&C1(n,i.backdrop),a&&(i.strokeColor&&(n.strokeStyle=i.strokeColor),at(i.strokeWidth)||(n.lineWidth=i.strokeWidth),n.strokeText(l,e,s,i.maxWidth)),n.fillText(l,e,s,i.maxWidth),S1(n,e,s,l,i),s+=Number(r.lineHeight);n.restore()}function go(n,t){const{x:e,y:s,w:r,h:i,radius:o}=t;n.arc(e+o.topLeft,s+o.topLeft,o.topLeft,1.5*yt,yt,!0),n.lineTo(e,s+i-o.bottomLeft),n.arc(e+o.bottomLeft,s+i-o.bottomLeft,o.bottomLeft,yt,Xt,!0),n.lineTo(e+r-o.bottomRight,s+i),n.arc(e+r-o.bottomRight,s+i-o.bottomRight,o.bottomRight,Xt,0,!0),n.lineTo(e+r,s+o.topRight),n.arc(e+r-o.topRight,s+o.topRight,o.topRight,0,-Xt,!0),n.lineTo(e+o.topLeft,s)}const R1=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,P1=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function D1(n,t){const e=(""+n).match(R1);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const M1=n=>+n||0;function ih(n,t){const e={},s=ut(t),r=s?Object.keys(t):t,i=ut(n)?s?o=>st(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of r)e[o]=M1(i(o));return e}function Av(n){return ih(n,{top:"y",right:"x",bottom:"y",left:"x"})}function $s(n){return ih(n,["topLeft","topRight","bottomLeft","bottomRight"])}function Ae(n){const t=Av(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function re(n,t){n=n||{},t=t||$t.font;let e=st(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=st(n.style,t.style);s&&!(""+s).match(P1)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const r={family:st(n.family,t.family),lineHeight:D1(st(n.lineHeight,t.lineHeight),e),size:e,style:s,weight:st(n.weight,t.weight),string:""};return r.string=E1(r),r}function Li(n,t,e,s){let r,i,o;for(r=0,i=n.length;r<i;++r)if(o=n[r],o!==void 0&&o!==void 0)return o}function O1(n,t,e){const{min:s,max:r}=n,i=pv(t,(r-s)/2),o=(a,c)=>e&&a===0?0:a+c;return{min:o(s,-Math.abs(i)),max:o(r,i)}}function vs(n,t){return Object.assign(Object.create(n),t)}function oh(n,t=[""],e,s,r=()=>n[0]){const i=e||n;typeof s>"u"&&(s=Rv("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:i,_fallback:s,_getTarget:r,override:a=>oh([a,...n],t,i,s)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete n[0][c],!0},get(a,c){return Sv(a,c,()=>j1(c,t,n,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,c){return rm(a).includes(c)},ownKeys(a){return rm(a)},set(a,c,l){const d=a._storage||(a._storage=r());return a[c]=d[c]=l,delete a._keys,!0}})}function Hr(n,t,e,s){const r={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:kv(n,s),setContext:i=>Hr(n,i,e,s),override:i=>Hr(n.override(i),t,e,s)};return new Proxy(r,{deleteProperty(i,o){return delete i[o],delete n[o],!0},get(i,o,a){return Sv(i,o,()=>L1(i,o,a))},getOwnPropertyDescriptor(i,o){return i._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(i,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(i,o,a){return n[o]=a,delete i[o],!0}})}function kv(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:r=t.allKeys}=n;return{allKeys:r,scriptable:e,indexable:s,isScriptable:ms(e)?e:()=>e,isIndexable:ms(s)?s:()=>s}}const N1=(n,t)=>n?n+th(t):t,ah=(n,t)=>ut(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Sv(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const s=e();return n[t]=s,s}function L1(n,t,e){const{_proxy:s,_context:r,_subProxy:i,_descriptors:o}=n;let a=s[t];return ms(a)&&o.isScriptable(t)&&(a=V1(t,a,n,e)),Vt(a)&&a.length&&(a=F1(t,a,n,o.isIndexable)),ah(t,a)&&(a=Hr(a,r,i&&i[t],o)),a}function V1(n,t,e,s){const{_proxy:r,_context:i,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let c=t(i,o||s);return a.delete(n),ah(n,c)&&(c=ch(r._scopes,r,n,c)),c}function F1(n,t,e,s){const{_proxy:r,_context:i,_subProxy:o,_descriptors:a}=e;if(typeof i.index<"u"&&s(n))return t[i.index%t.length];if(ut(t[0])){const c=t,l=r._scopes.filter(d=>d!==c);t=[];for(const d of c){const h=ch(l,r,n,d);t.push(Hr(h,i,o&&o[n],a))}}return t}function Cv(n,t,e){return ms(n)?n(t,e):n}const $1=(n,t)=>n===!0?t:typeof n=="string"?ps(t,n):void 0;function B1(n,t,e,s,r){for(const i of t){const o=$1(e,i);if(o){n.add(o);const a=Cv(o._fallback,e,r);if(typeof a<"u"&&a!==e&&a!==s)return a}else if(o===!1&&typeof s<"u"&&e!==s)return null}return!1}function ch(n,t,e,s){const r=t._rootScopes,i=Cv(t._fallback,e,s),o=[...n,...r],a=new Set;a.add(s);let c=sm(a,o,e,i||e,s);return c===null||typeof i<"u"&&i!==e&&(c=sm(a,o,i,c,s),c===null)?!1:oh(Array.from(a),[""],r,i,()=>U1(t,e,s))}function sm(n,t,e,s,r){for(;e;)e=B1(n,t,e,s,r);return e}function U1(n,t,e){const s=n._getTarget();t in s||(s[t]={});const r=s[t];return Vt(r)&&ut(e)?e:r||{}}function j1(n,t,e,s){let r;for(const i of t)if(r=Rv(N1(i,n),e),typeof r<"u")return ah(n,r)?ch(e,s,n,r):r}function Rv(n,t){for(const e of t){if(!e)continue;const s=e[n];if(typeof s<"u")return s}}function rm(n){let t=n._keys;return t||(t=n._keys=z1(n._scopes)),t}function z1(n){const t=new Set;for(const e of n)for(const s of Object.keys(e).filter(r=>!r.startsWith("_")))t.add(s);return Array.from(t)}function Pv(n,t,e,s){const{iScale:r}=n,{key:i="r"}=this._parsing,o=new Array(s);let a,c,l,d;for(a=0,c=s;a<c;++a)l=a+e,d=t[l],o[a]={r:r.parse(ps(d,i),l)};return o}const H1=Number.EPSILON||1e-14,qr=(n,t)=>t<n.length&&!n[t].skip&&n[t],Dv=n=>n==="x"?"y":"x";function q1(n,t,e,s){const r=n.skip?t:n,i=t,o=e.skip?t:e,a=Mu(i,r),c=Mu(o,i);let l=a/(a+c),d=c/(a+c);l=isNaN(l)?0:l,d=isNaN(d)?0:d;const h=s*l,f=s*d;return{previous:{x:i.x-h*(o.x-r.x),y:i.y-h*(o.y-r.y)},next:{x:i.x+f*(o.x-r.x),y:i.y+f*(o.y-r.y)}}}function W1(n,t,e){const s=n.length;let r,i,o,a,c,l=qr(n,0);for(let d=0;d<s-1;++d)if(c=l,l=qr(n,d+1),!(!c||!l)){if(Ki(t[d],0,H1)){e[d]=e[d+1]=0;continue}r=e[d]/t[d],i=e[d+1]/t[d],a=Math.pow(r,2)+Math.pow(i,2),!(a<=9)&&(o=3/Math.sqrt(a),e[d]=r*o*t[d],e[d+1]=i*o*t[d])}}function G1(n,t,e="x"){const s=Dv(e),r=n.length;let i,o,a,c=qr(n,0);for(let l=0;l<r;++l){if(o=a,a=c,c=qr(n,l+1),!a)continue;const d=a[e],h=a[s];o&&(i=(d-o[e])/3,a[`cp1${e}`]=d-i,a[`cp1${s}`]=h-i*t[l]),c&&(i=(c[e]-d)/3,a[`cp2${e}`]=d+i,a[`cp2${s}`]=h+i*t[l])}}function Y1(n,t="x"){const e=Dv(t),s=n.length,r=Array(s).fill(0),i=Array(s);let o,a,c,l=qr(n,0);for(o=0;o<s;++o)if(a=c,c=l,l=qr(n,o+1),!!c){if(l){const d=l[t]-c[t];r[o]=d!==0?(l[e]-c[e])/d:0}i[o]=a?l?mn(r[o-1])!==mn(r[o])?0:(r[o-1]+r[o])/2:r[o-1]:r[o]}W1(n,r,i),G1(n,i,t)}function ya(n,t,e){return Math.max(Math.min(n,e),t)}function K1(n,t){let e,s,r,i,o,a=Dn(n[0],t);for(e=0,s=n.length;e<s;++e)o=i,i=a,a=e<s-1&&Dn(n[e+1],t),i&&(r=n[e],o&&(r.cp1x=ya(r.cp1x,t.left,t.right),r.cp1y=ya(r.cp1y,t.top,t.bottom)),a&&(r.cp2x=ya(r.cp2x,t.left,t.right),r.cp2y=ya(r.cp2y,t.top,t.bottom)))}function Q1(n,t,e,s,r){let i,o,a,c;if(t.spanGaps&&(n=n.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")Y1(n,r);else{let l=s?n[n.length-1]:n[0];for(i=0,o=n.length;i<o;++i)a=n[i],c=q1(l,a,n[Math.min(i+1,o-(s?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}t.capBezierPoints&&K1(n,e)}function lh(){return typeof window<"u"&&typeof document<"u"}function uh(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function mc(n,t,e){let s;return typeof n=="string"?(s=parseInt(n,10),n.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=n,s}const el=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function X1(n,t){return el(n).getPropertyValue(t)}const J1=["top","right","bottom","left"];function Bs(n,t,e){const s={};e=e?"-"+e:"";for(let r=0;r<4;r++){const i=J1[r];s[i]=parseFloat(n[t+"-"+i+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const Z1=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function tC(n,t){const e=n.touches,s=e&&e.length?e[0]:n,{offsetX:r,offsetY:i}=s;let o=!1,a,c;if(Z1(r,i,n.target))a=r,c=i;else{const l=t.getBoundingClientRect();a=s.clientX-l.left,c=s.clientY-l.top,o=!0}return{x:a,y:c,box:o}}function Ps(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:s}=t,r=el(e),i=r.boxSizing==="border-box",o=Bs(r,"padding"),a=Bs(r,"border","width"),{x:c,y:l,box:d}=tC(n,e),h=o.left+(d&&a.left),f=o.top+(d&&a.top);let{width:m,height:g}=t;return i&&(m-=o.width+a.width,g-=o.height+a.height),{x:Math.round((c-h)/m*e.width/s),y:Math.round((l-f)/g*e.height/s)}}function eC(n,t,e){let s,r;if(t===void 0||e===void 0){const i=n&&uh(n);if(!i)t=n.clientWidth,e=n.clientHeight;else{const o=i.getBoundingClientRect(),a=el(i),c=Bs(a,"border","width"),l=Bs(a,"padding");t=o.width-l.width-c.width,e=o.height-l.height-c.height,s=mc(a.maxWidth,i,"clientWidth"),r=mc(a.maxHeight,i,"clientHeight")}}return{width:t,height:e,maxWidth:s||fc,maxHeight:r||fc}}const ss=n=>Math.round(n*10)/10;function nC(n,t,e,s){const r=el(n),i=Bs(r,"margin"),o=mc(r.maxWidth,n,"clientWidth")||fc,a=mc(r.maxHeight,n,"clientHeight")||fc,c=eC(n,t,e);let{width:l,height:d}=c;if(r.boxSizing==="content-box"){const f=Bs(r,"border","width"),m=Bs(r,"padding");l-=m.width+f.width,d-=m.height+f.height}return l=Math.max(0,l-i.width),d=Math.max(0,s?l/s:d-i.height),l=ss(Math.min(l,o,c.maxWidth)),d=ss(Math.min(d,a,c.maxHeight)),l&&!d&&(d=ss(l/2)),(t!==void 0||e!==void 0)&&s&&c.height&&d>c.height&&(d=c.height,l=ss(Math.floor(d*s))),{width:l,height:d}}function im(n,t,e){const s=t||1,r=ss(n.height*s),i=ss(n.width*s);n.height=ss(n.height),n.width=ss(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==s||o.height!==r||o.width!==i?(n.currentDevicePixelRatio=s,o.height=r,o.width=i,n.ctx.setTransform(s,0,0,s,0,0),!0):!1}const sC=function(){let n=!1;try{const t={get passive(){return n=!0,!1}};lh()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n}();function om(n,t){const e=X1(n,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function Ds(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function rC(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:s==="middle"?e<.5?n.y:t.y:s==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function iC(n,t,e,s){const r={x:n.cp2x,y:n.cp2y},i={x:t.cp1x,y:t.cp1y},o=Ds(n,r,e),a=Ds(r,i,e),c=Ds(i,t,e),l=Ds(o,a,e),d=Ds(a,c,e);return Ds(l,d,e)}const oC=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},aC=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function Nr(n,t,e){return n?oC(t,e):aC()}function Mv(n,t){let e,s;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=s)}function Ov(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function Nv(n){return n==="angle"?{between:mo,compare:c1,normalize:xe}:{between:Rn,compare:(t,e)=>t-e,normalize:t=>t}}function am({start:n,end:t,count:e,loop:s,style:r}){return{start:n%e,end:t%e,loop:s&&(t-n+1)%e===0,style:r}}function cC(n,t,e){const{property:s,start:r,end:i}=e,{between:o,normalize:a}=Nv(s),c=t.length;let{start:l,end:d,loop:h}=n,f,m;if(h){for(l+=c,d+=c,f=0,m=c;f<m&&o(a(t[l%c][s]),r,i);++f)l--,d--;l%=c,d%=c}return d<l&&(d+=c),{start:l,end:d,loop:h,style:n.style}}function Lv(n,t,e){if(!e)return[n];const{property:s,start:r,end:i}=e,o=t.length,{compare:a,between:c,normalize:l}=Nv(s),{start:d,end:h,loop:f,style:m}=cC(n,t,e),g=[];let v=!1,y=null,w,T,k;const D=()=>c(r,k,w)&&a(r,k)!==0,P=()=>a(i,w)===0||c(i,k,w),M=()=>v||D(),I=()=>!v||P();for(let b=d,x=d;b<=h;++b)T=t[b%o],!T.skip&&(w=l(T[s]),w!==k&&(v=c(w,r,i),y===null&&M()&&(y=a(w,r)===0?b:x),y!==null&&I()&&(g.push(am({start:y,end:b,loop:f,count:o,style:m})),y=null),x=b,k=w));return y!==null&&g.push(am({start:y,end:h,loop:f,count:o,style:m})),g}function Vv(n,t){const e=[],s=n.segments;for(let r=0;r<s.length;r++){const i=Lv(s[r],n.points,t);i.length&&e.push(...i)}return e}function lC(n,t,e,s){let r=0,i=t-1;if(e&&!s)for(;r<t&&!n[r].skip;)r++;for(;r<t&&n[r].skip;)r++;for(r%=t,e&&(i+=r);i>r&&n[i%t].skip;)i--;return i%=t,{start:r,end:i}}function uC(n,t,e,s){const r=n.length,i=[];let o=t,a=n[t],c;for(c=t+1;c<=e;++c){const l=n[c%r];l.skip||l.stop?a.skip||(s=!1,i.push({start:t%r,end:(c-1)%r,loop:s}),t=o=l.stop?c:null):(o=c,a.skip&&(t=c)),a=l}return o!==null&&i.push({start:t%r,end:o%r,loop:s}),i}function dC(n,t){const e=n.points,s=n.options.spanGaps,r=e.length;if(!r)return[];const i=!!n._loop,{start:o,end:a}=lC(e,r,i,s);if(s===!0)return cm(n,[{start:o,end:a,loop:i}],e,t);const c=a<o?a+r:a,l=!!n._fullLoop&&o===0&&a===r-1;return cm(n,uC(e,o,c,l),e,t)}function cm(n,t,e,s){return!s||!s.setContext||!e?t:hC(n,t,e,s)}function hC(n,t,e,s){const r=n._chart.getContext(),i=lm(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,c=e.length,l=[];let d=i,h=t[0].start,f=h;function m(g,v,y,w){const T=a?-1:1;if(g!==v){for(g+=c;e[g%c].skip;)g-=T;for(;e[v%c].skip;)v+=T;g%c!==v%c&&(l.push({start:g%c,end:v%c,loop:y,style:w}),d=w,h=v%c)}}for(const g of t){h=a?h:g.start;let v=e[h%c],y;for(f=h+1;f<=g.end;f++){const w=e[f%c];y=lm(s.setContext(vs(r,{type:"segment",p0:v,p1:w,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),fC(y,d)&&m(h,f-1,g.loop,d),v=w,d=y}h<f-1&&m(h,f-1,g.loop,d)}return l}function lm(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function fC(n,t){if(!t)return!1;const e=[],s=function(r,i){return rh(i)?(e.includes(i)||e.push(i),e.indexOf(i)):i};return JSON.stringify(n,s)!==JSON.stringify(t,s)}function va(n,t,e){return n.options.clip?n[e]:t[e]}function pC(n,t){const{xScale:e,yScale:s}=n;return e&&s?{left:va(e,t,"left"),right:va(e,t,"right"),top:va(s,t,"top"),bottom:va(s,t,"bottom")}:t}function Fv(n,t){const e=t._clip;if(e.disabled)return!1;const s=pC(t,n.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class mC{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,r){const i=e.listeners[r],o=e.duration;i.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(s-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=bv.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,r)=>{if(!s.running||!s.items.length)return;const i=s.items;let o=i.length-1,a=!1,c;for(;o>=0;--o)c=i[o],c._active?(c._total>s.duration&&(s.duration=c._total),c.tick(t),a=!0):(i[o]=i[i.length-1],i.pop());a&&(r.draw(),this._notify(r,s,t,"progress")),i.length||(s.running=!1,this._notify(r,s,t,"complete"),s.initial=!1),e+=i.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,r)=>Math.max(s,r._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let r=s.length-1;for(;r>=0;--r)s[r].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var En=new mC;const um="transparent",gC={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const s=tm(n||um),r=s.valid&&tm(t||um);return r&&r.valid?r.mix(s,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class _C{constructor(t,e,s,r){const i=e[s];r=Li([t.to,r,i,t.from]);const o=Li([t.from,i,r]);this._active=!0,this._fn=t.fn||gC[t.type||typeof o],this._easing=Qi[t.easing]||Qi.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=o,this._to=r,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const r=this._target[this._prop],i=s-this._start,o=this._duration-i;this._start=s,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=i,this._loop=!!t.loop,this._to=Li([t.to,e,r,t.from]),this._from=Li([t.from,r,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,r=this._prop,i=this._from,o=this._loop,a=this._to;let c;if(this._active=i!==a&&(o||e<s),!this._active){this._target[r]=a,this._notify(!0);return}if(e<0){this._target[r]=i;return}c=e/s%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[r]=this._fn(i,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let r=0;r<s.length;r++)s[r][e]()}}class $v{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!ut(t))return;const e=Object.keys($t.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(r=>{const i=t[r];if(!ut(i))return;const o={};for(const a of e)o[a]=i[a];(Vt(i.properties)&&i.properties||[r]).forEach(a=>{(a===r||!s.has(a))&&s.set(a,o)})})}_animateOptions(t,e){const s=e.options,r=vC(t,s);if(!r)return[];const i=this._createAnimations(r,s);return s.$shared&&yC(t.options.$animations,s).then(()=>{t.options=s},()=>{}),i}_createAnimations(t,e){const s=this._properties,r=[],i=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){r.push(...this._animateOptions(t,e));continue}const d=e[l];let h=i[l];const f=s.get(l);if(h)if(f&&h.active()){h.update(f,d,a);continue}else h.cancel();if(!f||!f.duration){t[l]=d;continue}i[l]=h=new _C(f,t,l,d),r.push(h)}return r}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return En.add(this._chart,s),!0}}function yC(n,t){const e=[],s=Object.keys(t);for(let r=0;r<s.length;r++){const i=n[s[r]];i&&i.active()&&e.push(i.wait())}return Promise.all(e)}function vC(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function dm(n,t){const e=n&&n.options||{},s=e.reverse,r=e.min===void 0?t:0,i=e.max===void 0?t:0;return{start:s?i:r,end:s?r:i}}function bC(n,t,e){if(e===!1)return!1;const s=dm(n,e),r=dm(t,e);return{top:r.end,right:s.end,bottom:r.start,left:s.start}}function xC(n){let t,e,s,r;return ut(n)?(t=n.top,e=n.right,s=n.bottom,r=n.left):t=e=s=r=n,{top:t,right:e,bottom:s,left:r,disabled:n===!1}}function Bv(n,t){const e=[],s=n._getSortedDatasetMetas(t);let r,i;for(r=0,i=s.length;r<i;++r)e.push(s[r].index);return e}function hm(n,t,e,s={}){const r=n.keys,i=s.mode==="single";let o,a,c,l;if(t===null)return;let d=!1;for(o=0,a=r.length;o<a;++o){if(c=+r[o],c===e){if(d=!0,s.all)continue;break}l=n.values[c],qt(l)&&(i||t===0||mn(t)===mn(l))&&(t+=l)}return!d&&!s.all?0:t}function wC(n,t){const{iScale:e,vScale:s}=t,r=e.axis==="x"?"x":"y",i=s.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let c,l,d;for(c=0,l=o.length;c<l;++c)d=o[c],a[c]={[r]:d,[i]:n[d]};return a}function jl(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function EC(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function TC(n){const{min:t,max:e,minDefined:s,maxDefined:r}=n.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:r?e:Number.POSITIVE_INFINITY}}function IC(n,t,e){const s=n[t]||(n[t]={});return s[e]||(s[e]={})}function fm(n,t,e,s){for(const r of t.getMatchingVisibleMetas(s).reverse()){const i=n[r.index];if(e&&i>0||!e&&i<0)return r.index}return null}function pm(n,t){const{chart:e,_cachedMeta:s}=n,r=e._stacks||(e._stacks={}),{iScale:i,vScale:o,index:a}=s,c=i.axis,l=o.axis,d=EC(i,o,s),h=t.length;let f;for(let m=0;m<h;++m){const g=t[m],{[c]:v,[l]:y}=g,w=g._stacks||(g._stacks={});f=w[l]=IC(r,d,v),f[a]=y,f._top=fm(f,o,!0,s.type),f._bottom=fm(f,o,!1,s.type);const T=f._visualValues||(f._visualValues={});T[a]=y}}function zl(n,t){const e=n.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function AC(n,t){return vs(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function kC(n,t,e){return vs(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function vi(n,t){const e=n.controller.index,s=n.vScale&&n.vScale.axis;if(s){t=t||n._parsed;for(const r of t){const i=r._stacks;if(!i||i[s]===void 0||i[s][e]===void 0)return;delete i[s][e],i[s]._visualValues!==void 0&&i[s]._visualValues[e]!==void 0&&delete i[s]._visualValues[e]}}}const Hl=n=>n==="reset"||n==="none",mm=(n,t)=>t?n:Object.assign({},n),SC=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:Bv(e,!0),values:null};class Je{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=jl(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&vi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),r=(h,f,m,g)=>h==="x"?f:h==="r"?g:m,i=e.xAxisID=st(s.xAxisID,zl(t,"x")),o=e.yAxisID=st(s.yAxisID,zl(t,"y")),a=e.rAxisID=st(s.rAxisID,zl(t,"r")),c=e.indexAxis,l=e.iAxisID=r(c,i,o,a),d=e.vAxisID=r(c,o,i,a);e.xScale=this.getScaleForId(i),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Xp(this._data,this),t._stacked&&vi(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(ut(e)){const r=this._cachedMeta;this._data=wC(e,r)}else if(s!==e){if(s){Xp(s,this);const r=this._cachedMeta;vi(r),r._parsed=[]}e&&Object.isExtensible(e)&&h1(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let r=!1;this._dataCheck();const i=e._stacked;e._stacked=jl(e.vScale,e),e.stack!==s.stack&&(r=!0,vi(e),e.stack=s.stack),this._resyncElements(t),(r||i!==e._stacked)&&(pm(this,e._parsed),e._stacked=jl(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:r}=this,{iScale:i,_stacked:o}=s,a=i.axis;let c=t===0&&e===r.length?!0:s._sorted,l=t>0&&s._parsed[t-1],d,h,f;if(this._parsing===!1)s._parsed=r,s._sorted=!0,f=r;else{Vt(r[t])?f=this.parseArrayData(s,r,t,e):ut(r[t])?f=this.parseObjectData(s,r,t,e):f=this.parsePrimitiveData(s,r,t,e);const m=()=>h[a]===null||l&&h[a]<l[a];for(d=0;d<e;++d)s._parsed[d+t]=h=f[d],c&&(m()&&(c=!1),l=h);s._sorted=c}o&&pm(this,f)}parsePrimitiveData(t,e,s,r){const{iScale:i,vScale:o}=t,a=i.axis,c=o.axis,l=i.getLabels(),d=i===o,h=new Array(r);let f,m,g;for(f=0,m=r;f<m;++f)g=f+s,h[f]={[a]:d||i.parse(l[g],g),[c]:o.parse(e[g],g)};return h}parseArrayData(t,e,s,r){const{xScale:i,yScale:o}=t,a=new Array(r);let c,l,d,h;for(c=0,l=r;c<l;++c)d=c+s,h=e[d],a[c]={x:i.parse(h[0],d),y:o.parse(h[1],d)};return a}parseObjectData(t,e,s,r){const{xScale:i,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(r);let d,h,f,m;for(d=0,h=r;d<h;++d)f=d+s,m=e[f],l[d]={x:i.parse(ps(m,a),f),y:o.parse(ps(m,c),f)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const r=this.chart,i=this._cachedMeta,o=e[t.axis],a={keys:Bv(r,!0),values:e._stacks[t.axis]._visualValues};return hm(a,o,i.index,{mode:s})}updateRangeFromParsed(t,e,s,r){const i=s[e.axis];let o=i===null?NaN:i;const a=r&&s._stacks[e.axis];r&&a&&(r.values=a,o=hm(r,i,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const s=this._cachedMeta,r=s._parsed,i=s._sorted&&t===s.iScale,o=r.length,a=this._getOtherScale(t),c=SC(e,s,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=TC(a);let f,m;function g(){m=r[f];const v=m[a.axis];return!qt(m[t.axis])||d>v||h<v}for(f=0;f<o&&!(!g()&&(this.updateRangeFromParsed(l,t,m,c),i));++f);if(i){for(f=o-1;f>=0;--f)if(!g()){this.updateRangeFromParsed(l,t,m,c);break}}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let r,i,o;for(r=0,i=e.length;r<i;++r)o=e[r][t.axis],qt(o)&&s.push(o);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,r=e.vScale,i=this.getParsed(t);return{label:s?""+s.getLabelForValue(i[s.axis]):"",value:r?""+r.getLabelForValue(i[r.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=xC(st(this.options.clip,bC(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,r=s.data||[],i=e.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||r.length-a,l=this.options.drawActiveElementsOnTop;let d;for(s.dataset&&s.dataset.draw(t,i,a,c),d=a;d<a+c;++d){const h=r[d];h.hidden||(h.active&&l?o.push(h):h.draw(t,i))}for(d=0;d<o.length;++d)o[d].draw(t,i)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const r=this.getDataset();let i;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];i=o.$context||(o.$context=kC(this.getContext(),t,o)),i.parsed=this.getParsed(t),i.raw=r.data[t],i.index=i.dataIndex=t}else i=this.$context||(this.$context=AC(this.chart.getContext(),this.index)),i.dataset=r,i.index=i.datasetIndex=this.index;return i.active=!!e,i.mode=s,i}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const r=e==="active",i=this._cachedDataOpts,o=t+"-"+e,a=i[o],c=this.enableOptionSharing&&po(s);if(a)return mm(a,c);const l=this.chart.config,d=l.datasetElementScopeKeys(this._type,t),h=r?[`${t}Hover`,"hover",t,""]:[t,""],f=l.getOptionScopes(this.getDataset(),d),m=Object.keys($t.elements[t]),g=()=>this.getContext(s,r,e),v=l.resolveNamedOptions(f,m,g,h);return v.$shared&&(v.$shared=c,i[o]=Object.freeze(mm(v,c))),v}_resolveAnimations(t,e,s){const r=this.chart,i=this._cachedDataOpts,o=`animation-${e}`,a=i[o];if(a)return a;let c;if(r.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,e),f=d.getOptionScopes(this.getDataset(),h);c=d.createResolver(f,this.getContext(t,s,e))}const l=new $v(r,c&&c.animations);return c&&c._cacheable&&(i[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Hl(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),r=this._sharedOptions,i=this.getSharedOptions(s),o=this.includeOptions(e,i)||i!==r;return this.updateSharedOptions(i,e,s),{sharedOptions:i,includeOptions:o}}updateElement(t,e,s,r){Hl(r)?Object.assign(t,s):this._resolveAnimations(e,r).update(t,s)}updateSharedOptions(t,e,s){t&&!Hl(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,r){t.active=r;const i=this.getStyle(e,r);this._resolveAnimations(e,s,r).update(t,{options:!r&&this.getSharedOptions(i)||i})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const r=s.length,i=e.length,o=Math.min(i,r);o&&this.parse(0,o),i>r?this._insertElements(r,i-r,t):i<r&&this._removeElements(i,r-i)}_insertElements(t,e,s=!0){const r=this._cachedMeta,i=r.data,o=t+e;let a;const c=l=>{for(l.length+=e,a=l.length-1;a>=o;a--)l[a]=l[a-e]};for(c(i),a=t;a<o;++a)i[a]=new this.dataElementType;this._parsing&&c(r._parsed),this.parse(t,e),s&&this.updateElements(i,t,e,"reset")}updateElements(t,e,s,r){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const r=s._parsed.splice(t,e);s._stacked&&vi(s,r)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,r]=t;this[e](s,r)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}N(Je,"defaults",{}),N(Je,"datasetElementType",null),N(Je,"dataElementType",null);function CC(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let s=[];for(let r=0,i=e.length;r<i;r++)s=s.concat(e[r].controller.getAllParsedValues(n));n._cache.$bar=vv(s.sort((r,i)=>r-i))}return n._cache.$bar}function RC(n){const t=n.iScale,e=CC(t,n.type);let s=t._length,r,i,o,a;const c=()=>{o===32767||o===-32768||(po(a)&&(s=Math.min(s,Math.abs(o-a)||s)),a=o)};for(r=0,i=e.length;r<i;++r)o=t.getPixelForValue(e[r]),c();for(a=void 0,r=0,i=t.ticks.length;r<i;++r)o=t.getPixelForTick(r),c();return s}function PC(n,t,e,s){const r=e.barThickness;let i,o;return at(r)?(i=t.min*e.categoryPercentage,o=e.barPercentage):(i=r*s,o=1),{chunk:i/s,ratio:o,start:t.pixels[n]-i/2}}function DC(n,t,e,s){const r=t.pixels,i=r[n];let o=n>0?r[n-1]:null,a=n<r.length-1?r[n+1]:null;const c=e.categoryPercentage;o===null&&(o=i-(a===null?t.end-t.start:a-i)),a===null&&(a=i+i-o);const l=i-(i-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/s,ratio:e.barPercentage,start:l}}function MC(n,t,e,s){const r=e.parse(n[0],s),i=e.parse(n[1],s),o=Math.min(r,i),a=Math.max(r,i);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),t[e.axis]=l,t._custom={barStart:c,barEnd:l,start:r,end:i,min:o,max:a}}function Uv(n,t,e,s){return Vt(n)?MC(n,t,e,s):t[e.axis]=e.parse(n,s),t}function gm(n,t,e,s){const r=n.iScale,i=n.vScale,o=r.getLabels(),a=r===i,c=[];let l,d,h,f;for(l=e,d=e+s;l<d;++l)f=t[l],h={},h[r.axis]=a||r.parse(o[l],l),c.push(Uv(f,h,i,l));return c}function ql(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function OC(n,t,e){return n!==0?mn(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function NC(n){let t,e,s,r,i;return n.horizontal?(t=n.base>n.x,e="left",s="right"):(t=n.base<n.y,e="bottom",s="top"),t?(r="end",i="start"):(r="start",i="end"),{start:e,end:s,reverse:t,top:r,bottom:i}}function LC(n,t,e,s){let r=t.borderSkipped;const i={};if(!r){n.borderSkipped=i;return}if(r===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:l,bottom:d}=NC(n);r==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===s?r=l:(e._bottom||0)===s?r=d:(i[_m(d,o,a,c)]=!0,r=l)),i[_m(r,o,a,c)]=!0,n.borderSkipped=i}function _m(n,t,e,s){return s?(n=VC(n,t,e),n=ym(n,e,t)):n=ym(n,t,e),n}function VC(n,t,e){return n===t?e:n===e?t:n}function ym(n,t,e){return n==="start"?t:n==="end"?e:n}function FC(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class La extends Je{parsePrimitiveData(t,e,s,r){return gm(t,e,s,r)}parseArrayData(t,e,s,r){return gm(t,e,s,r)}parseObjectData(t,e,s,r){const{iScale:i,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=i.axis==="x"?a:c,d=o.axis==="x"?a:c,h=[];let f,m,g,v;for(f=s,m=s+r;f<m;++f)v=e[f],g={},g[i.axis]=i.parse(ps(v,l),f),h.push(Uv(ps(v,d),g,o,f));return h}updateRangeFromParsed(t,e,s,r){super.updateRangeFromParsed(t,e,s,r);const i=s._custom;i&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,i.min),t.max=Math.max(t.max,i.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:r}=e,i=this.getParsed(t),o=i._custom,a=ql(o)?"["+o.start+", "+o.end+"]":""+r.getLabelForValue(i[r.axis]);return{label:""+s.getLabelForValue(i[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,r){const i=r==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),l=a.isHorizontal(),d=this._getRuler(),{sharedOptions:h,includeOptions:f}=this._getSharedOptions(e,r);for(let m=e;m<e+s;m++){const g=this.getParsed(m),v=i||at(g[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(m),y=this._calculateBarIndexPixels(m,d),w=(g._stacks||{})[a.axis],T={horizontal:l,base:v.base,enableBorderRadius:!w||ql(g._custom)||o===w._top||o===w._bottom,x:l?v.head:y.center,y:l?y.center:v.head,height:l?y.size:Math.abs(v.size),width:l?Math.abs(v.size):y.size};f&&(T.options=h||this.resolveDataElementOptions(m,t[m].active?"active":r));const k=T.options||t[m].options;LC(T,k,w,o),FC(T,k,d.ratio),this.updateElement(t[m],m,T,r)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,r=s.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),i=s.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),c=a&&a[s.axis],l=d=>{const h=d._parsed.find(m=>m[s.axis]===c),f=h&&h[d.vScale.axis];if(at(f)||isNaN(f))return!0};for(const d of r)if(!(e!==void 0&&l(d))&&((i===!1||o.indexOf(d.stack)===-1||i===void 0&&d.stack===void 0)&&o.push(d.stack),d.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[st(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const r=this._getStacks(t,s),i=e!==void 0?r.indexOf(e):-1;return i===-1?r.length-1:i}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,r=[];let i,o;for(i=0,o=e.data.length;i<o;++i)r.push(s.getPixelForValue(this.getParsed(i)[s.axis],i));const a=t.barThickness;return{min:a||RC(e),pixels:r,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:r},options:{base:i,minBarLength:o}}=this,a=i||0,c=this.getParsed(t),l=c._custom,d=ql(l);let h=c[e.axis],f=0,m=s?this.applyStack(e,c,s):h,g,v;m!==h&&(f=m-h,m=h),d&&(h=l.barStart,m=l.barEnd-l.barStart,h!==0&&mn(h)!==mn(l.barEnd)&&(f=0),f+=h);const y=!at(i)&&!d?i:f;let w=e.getPixelForValue(y);if(this.chart.getDataVisibility(t)?g=e.getPixelForValue(f+m):g=w,v=g-w,Math.abs(v)<o){v=OC(v,e,a)*o,h===a&&(w-=v/2);const T=e.getPixelForDecimal(0),k=e.getPixelForDecimal(1),D=Math.min(T,k),P=Math.max(T,k);w=Math.max(Math.min(w,P),D),g=w+v,s&&!d&&(c._stacks[e.axis]._visualValues[r]=e.getValueForPixel(g)-e.getValueForPixel(w))}if(w===e.getPixelForValue(a)){const T=mn(v)*e.getLineWidthForValue(a)/2;w+=T,v-=T}return{size:v,base:w,head:g,center:g+v/2}}_calculateBarIndexPixels(t,e){const s=e.scale,r=this.options,i=r.skipNull,o=st(r.maxBarThickness,1/0);let a,c;const l=this._getAxisCount();if(e.grouped){const d=i?this._getStackCount(t):e.stackCount,h=r.barThickness==="flex"?DC(t,e,r,d*l):PC(t,e,r,d*l),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,m=this._getAxis().indexOf(st(f,this.getFirstScaleIdForIndexAxis())),g=this._getStackIndex(this.index,this._cachedMeta.stack,i?t:void 0)+m;a=h.start+h.chunk*g+h.chunk/2,c=Math.min(o,h.chunk*h.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,r=s.length;let i=0;for(;i<r;++i)this.getParsed(i)[e.axis]!==null&&!s[i].hidden&&s[i].draw(this._ctx)}}N(La,"id","bar"),N(La,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),N(La,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Va extends Je{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,r){const i=super.parsePrimitiveData(t,e,s,r);for(let o=0;o<i.length;o++)i[o]._custom=this.resolveDataElementOptions(o+s).radius;return i}parseArrayData(t,e,s,r){const i=super.parseArrayData(t,e,s,r);for(let o=0;o<i.length;o++){const a=e[s+o];i[o]._custom=st(a[2],this.resolveDataElementOptions(o+s).radius)}return i}parseObjectData(t,e,s,r){const i=super.parseObjectData(t,e,s,r);for(let o=0;o<i.length;o++){const a=e[s+o];i[o]._custom=st(a&&a.r&&+a.r,this.resolveDataElementOptions(o+s).radius)}return i}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:r,yScale:i}=e,o=this.getParsed(t),a=r.getLabelForValue(o.x),c=i.getLabelForValue(o.y),l=o._custom;return{label:s[t]||"",value:"("+a+", "+c+(l?", "+l:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,r){const i=r==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:l}=this._getSharedOptions(e,r),d=o.axis,h=a.axis;for(let f=e;f<e+s;f++){const m=t[f],g=!i&&this.getParsed(f),v={},y=v[d]=i?o.getPixelForDecimal(.5):o.getPixelForValue(g[d]),w=v[h]=i?a.getBasePixel():a.getPixelForValue(g[h]);v.skip=isNaN(y)||isNaN(w),l&&(v.options=c||this.resolveDataElementOptions(f,m.active?"active":r),i&&(v.options.radius=0)),this.updateElement(m,f,v,r)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let r=super.resolveDataElementOptions(t,e);r.$shared&&(r=Object.assign({},r,{$shared:!1}));const i=r.radius;return e!=="active"&&(r.radius=0),r.radius+=st(s&&s._custom,i),r}}N(Va,"id","bubble"),N(Va,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),N(Va,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function $C(n,t,e){let s=1,r=1,i=0,o=0;if(t<Nt){const a=n,c=a+t,l=Math.cos(a),d=Math.sin(a),h=Math.cos(c),f=Math.sin(c),m=(k,D,P)=>mo(k,a,c,!0)?1:Math.max(D,D*e,P,P*e),g=(k,D,P)=>mo(k,a,c,!0)?-1:Math.min(D,D*e,P,P*e),v=m(0,l,h),y=m(Xt,d,f),w=g(yt,l,h),T=g(yt+Xt,d,f);s=(v-w)/2,r=(y-T)/2,i=-(v+w)/2,o=-(y+T)/2}return{ratioX:s,ratioY:r,offsetX:i,offsetY:o}}class Ls extends Je{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,r=this._cachedMeta;if(this._parsing===!1)r._parsed=s;else{let i=c=>+s[c];if(ut(s[t])){const{key:c="value"}=this._parsing;i=l=>+ps(s[l],c)}let o,a;for(o=t,a=t+e;o<a;++o)r._parsed[o]=i(o)}}_getRotation(){return Xe(this.options.rotation-90)}_getCircumference(){return Xe(this.options.circumference)}_getRotationExtents(){let t=Nt,e=-Nt;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const r=this.chart.getDatasetMeta(s).controller,i=r._getRotation(),o=r._getCircumference();t=Math.min(t,i),e=Math.max(e,i+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,r=this._cachedMeta,i=r.data,o=this.getMaxBorderWidth()+this.getMaxOffset(i)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-o)/2,0),c=Math.min(XS(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:d,rotation:h}=this._getRotationExtents(),{ratioX:f,ratioY:m,offsetX:g,offsetY:v}=$C(h,d,c),y=(s.width-o)/f,w=(s.height-o)/m,T=Math.max(Math.min(y,w)/2,0),k=pv(this.options.radius,T),D=Math.max(k*c,0),P=(k-D)/this._getVisibleDatasetWeightTotal();this.offsetX=g*k,this.offsetY=v*k,r.total=this.calculateTotal(),this.outerRadius=k-P*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-P*l,0),this.updateElements(i,0,i.length,t)}_circumference(t,e){const s=this.options,r=this._cachedMeta,i=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||r._parsed[t]===null||r.data[t].hidden?0:this.calculateCircumference(r._parsed[t]*i/Nt)}updateElements(t,e,s,r){const i=r==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,d=(a.left+a.right)/2,h=(a.top+a.bottom)/2,f=i&&l.animateScale,m=f?0:this.innerRadius,g=f?0:this.outerRadius,{sharedOptions:v,includeOptions:y}=this._getSharedOptions(e,r);let w=this._getRotation(),T;for(T=0;T<e;++T)w+=this._circumference(T,i);for(T=e;T<e+s;++T){const k=this._circumference(T,i),D=t[T],P={x:d+this.offsetX,y:h+this.offsetY,startAngle:w,endAngle:w+k,circumference:k,outerRadius:g,innerRadius:m};y&&(P.options=v||this.resolveDataElementOptions(T,D.active?"active":r)),w+=k,this.updateElement(D,T,P,r)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,r;for(r=0;r<e.length;r++){const i=t._parsed[r];i!==null&&!isNaN(i)&&this.chart.getDataVisibility(r)&&!e[r].hidden&&(s+=Math.abs(i))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?Nt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,r=s.data.labels||[],i=$o(e._parsed[t],s.options.locale);return{label:r[t]||"",value:i}}getMaxBorderWidth(t){let e=0;const s=this.chart;let r,i,o,a,c;if(!t){for(r=0,i=s.data.datasets.length;r<i;++r)if(s.isDatasetVisible(r)){o=s.getDatasetMeta(r),t=o.data,a=o.controller;break}}if(!t)return 0;for(r=0,i=t.length;r<i;++r)c=a.resolveDataElementOptions(r),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,r=t.length;s<r;++s){const i=this.resolveDataElementOptions(s);e=Math.max(e,i.offset||0,i.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(st(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}N(Ls,"id","doughnut"),N(Ls,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),N(Ls,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),N(Ls,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:r,color:i,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,l)=>{const h=t.getDatasetMeta(0).controller.getStyle(l);return{text:c,fillStyle:h.backgroundColor,fontColor:i,hidden:!t.getDataVisibility(l),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:r,pointStyle:s,borderRadius:o&&(a||h.borderRadius),index:l}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class Fa extends Je{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:r=[],_dataset:i}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=wv(e,r,o);this._drawStart=a,this._drawCount=c,Ev(e)&&(a=0,c=r.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!i._decimated,s.points=r;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:l},t),this.updateElements(r,a,c,t)}updateElements(t,e,s,r){const i=r==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(e,r),f=o.axis,m=a.axis,{spanGaps:g,segment:v}=this.options,y=zr(g)?g:Number.POSITIVE_INFINITY,w=this.chart._animationsDisabled||i||r==="none",T=e+s,k=t.length;let D=e>0&&this.getParsed(e-1);for(let P=0;P<k;++P){const M=t[P],I=w?M:{};if(P<e||P>=T){I.skip=!0;continue}const b=this.getParsed(P),x=at(b[m]),A=I[f]=o.getPixelForValue(b[f],P),C=I[m]=i||x?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,b,c):b[m],P);I.skip=isNaN(A)||isNaN(C)||x,I.stop=P>0&&Math.abs(b[f]-D[f])>y,v&&(I.parsed=b,I.raw=l.data[P]),h&&(I.options=d||this.resolveDataElementOptions(P,M.active?"active":r)),w||this.updateElement(M,P,I,r),D=b}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,r=t.data||[];if(!r.length)return s;const i=r[0].size(this.resolveDataElementOptions(0)),o=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(s,i,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}N(Fa,"id","line"),N(Fa,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),N(Fa,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Ji extends Je{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,r=s.data.labels||[],i=$o(e._parsed[t].r,s.options.locale);return{label:r[t]||"",value:i}}parseObjectData(t,e,s,r){return Pv.bind(this)(t,e,s,r)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,r)=>{const i=this.getParsed(r).r;!isNaN(i)&&this.chart.getDataVisibility(r)&&(i<e.min&&(e.min=i),i>e.max&&(e.max=i))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,r=Math.min(e.right-e.left,e.bottom-e.top),i=Math.max(r/2,0),o=Math.max(s.cutoutPercentage?i/100*s.cutoutPercentage:1,0),a=(i-o)/t.getVisibleDatasetCount();this.outerRadius=i-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,s,r){const i=r==="reset",o=this.chart,c=o.options.animation,l=this._cachedMeta.rScale,d=l.xCenter,h=l.yCenter,f=l.getIndexAngle(0)-.5*yt;let m=f,g;const v=360/this.countVisibleElements();for(g=0;g<e;++g)m+=this._computeAngle(g,r,v);for(g=e;g<e+s;g++){const y=t[g];let w=m,T=m+this._computeAngle(g,r,v),k=o.getDataVisibility(g)?l.getDistanceFromCenterForValue(this.getParsed(g).r):0;m=T,i&&(c.animateScale&&(k=0),c.animateRotate&&(w=T=f));const D={x:d,y:h,innerRadius:0,outerRadius:k,startAngle:w,endAngle:T,options:this.resolveDataElementOptions(g,y.active?"active":r)};this.updateElement(y,g,D,r)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,r)=>{!isNaN(this.getParsed(r).r)&&this.chart.getDataVisibility(r)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?Xe(this.resolveDataElementOptions(t,e).angle||s):0}}N(Ji,"id","polarArea"),N(Ji,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),N(Ji,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:r}}=t.legend.options;return e.labels.map((i,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:i,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:r,lineWidth:c.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Lu extends Ls{}N(Lu,"id","pie"),N(Lu,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class $a extends Je{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,r){return Pv.bind(this)(t,e,s,r)}update(t){const e=this._cachedMeta,s=e.dataset,r=e.data||[],i=e.iScale.getLabels();if(s.points=r,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:i.length===r.length,options:o};this.updateElement(s,void 0,a,t)}this.updateElements(r,0,r.length,t)}updateElements(t,e,s,r){const i=this._cachedMeta.rScale,o=r==="reset";for(let a=e;a<e+s;a++){const c=t[a],l=this.resolveDataElementOptions(a,c.active?"active":r),d=i.getPointPositionForValue(a,this.getParsed(a).r),h=o?i.xCenter:d.x,f=o?i.yCenter:d.y,m={x:h,y:f,angle:d.angle,skip:isNaN(h)||isNaN(f),options:l};this.updateElement(c,a,m,r)}}}N($a,"id","radar"),N($a,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),N($a,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Ba extends Je{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:r,yScale:i}=e,o=this.getParsed(t),a=r.getLabelForValue(o.x),c=i.getLabelForValue(o.y);return{label:s[t]||"",value:"("+a+", "+c+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,r=this.chart._animationsDisabled;let{start:i,count:o}=wv(e,s,r);if(this._drawStart=i,this._drawCount=o,Ev(e)&&(i=0,o=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:c}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=s;const l=this.resolveDatasetElementOptions(t);l.segment=this.options.segment,this.updateElement(a,void 0,{animated:!r,options:l},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,i,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,r){const i=r==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,d=this.resolveDataElementOptions(e,r),h=this.getSharedOptions(d),f=this.includeOptions(r,h),m=o.axis,g=a.axis,{spanGaps:v,segment:y}=this.options,w=zr(v)?v:Number.POSITIVE_INFINITY,T=this.chart._animationsDisabled||i||r==="none";let k=e>0&&this.getParsed(e-1);for(let D=e;D<e+s;++D){const P=t[D],M=this.getParsed(D),I=T?P:{},b=at(M[g]),x=I[m]=o.getPixelForValue(M[m],D),A=I[g]=i||b?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,M,c):M[g],D);I.skip=isNaN(x)||isNaN(A)||b,I.stop=D>0&&Math.abs(M[m]-k[m])>w,y&&(I.parsed=M,I.raw=l.data[D]),f&&(I.options=h||this.resolveDataElementOptions(D,P.active?"active":r)),T||this.updateElement(P,D,I,r),k=M}this.updateSharedOptions(h,r,d)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let c=e.length-1;c>=0;--c)a=Math.max(a,e[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const s=t.dataset,r=s.options&&s.options.borderWidth||0;if(!e.length)return r;const i=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(r,i,o)/2}}N(Ba,"id","scatter"),N(Ba,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),N(Ba,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var BC=Object.freeze({__proto__:null,BarController:La,BubbleController:Va,DoughnutController:Ls,LineController:Fa,PieController:Lu,PolarAreaController:Ji,RadarController:$a,ScatterController:Ba});function As(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class dh{constructor(t){N(this,"options");this.options=t||{}}static override(t){Object.assign(dh.prototype,t)}init(){}formats(){return As()}parse(){return As()}format(){return As()}add(){return As()}diff(){return As()}startOf(){return As()}endOf(){return As()}}var jv={_date:dh};function UC(n,t,e,s){const{controller:r,data:i,_sorted:o}=n,a=r._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&i.length){const l=a._reversePixels?u1:Pn;if(s){if(r._sharedOptions){const d=i[0],h=typeof d.getRange=="function"&&d.getRange(t);if(h){const f=l(i,t,e-h),m=l(i,t,e+h);return{lo:f.lo,hi:m.hi}}}}else{const d=l(i,t,e);if(c){const{vScale:h}=r._cachedMeta,{_parsed:f}=n,m=f.slice(0,d.lo+1).reverse().findIndex(v=>!at(v[h.axis]));d.lo-=Math.max(0,m);const g=f.slice(d.hi).findIndex(v=>!at(v[h.axis]));d.hi+=Math.max(0,g)}return d}}return{lo:0,hi:i.length-1}}function nl(n,t,e,s,r){const i=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,c=i.length;a<c;++a){const{index:l,data:d}=i[a],{lo:h,hi:f}=UC(i[a],t,o,r);for(let m=h;m<=f;++m){const g=d[m];g.skip||s(g,l,m)}}}function jC(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(s,r){const i=t?Math.abs(s.x-r.x):0,o=e?Math.abs(s.y-r.y):0;return Math.sqrt(Math.pow(i,2)+Math.pow(o,2))}}function Wl(n,t,e,s,r){const i=[];return!r&&!n.isPointInArea(t)||nl(n,e,t,function(a,c,l){!r&&!Dn(a,n.chartArea,0)||a.inRange(t.x,t.y,s)&&i.push({element:a,datasetIndex:c,index:l})},!0),i}function zC(n,t,e,s){let r=[];function i(o,a,c){const{startAngle:l,endAngle:d}=o.getProps(["startAngle","endAngle"],s),{angle:h}=_v(o,{x:t.x,y:t.y});mo(h,l,d)&&r.push({element:o,datasetIndex:a,index:c})}return nl(n,e,t,i),r}function HC(n,t,e,s,r,i){let o=[];const a=jC(e);let c=Number.POSITIVE_INFINITY;function l(d,h,f){const m=d.inRange(t.x,t.y,r);if(s&&!m)return;const g=d.getCenterPoint(r);if(!(!!i||n.isPointInArea(g))&&!m)return;const y=a(t,g);y<c?(o=[{element:d,datasetIndex:h,index:f}],c=y):y===c&&o.push({element:d,datasetIndex:h,index:f})}return nl(n,e,t,l),o}function Gl(n,t,e,s,r,i){return!i&&!n.isPointInArea(t)?[]:e==="r"&&!s?zC(n,t,e,r):HC(n,t,e,s,r,i)}function vm(n,t,e,s,r){const i=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return nl(n,e,t,(c,l,d)=>{c[o]&&c[o](t[e],r)&&(i.push({element:c,datasetIndex:l,index:d}),a=a||c.inRange(t.x,t.y,r))}),s&&!a?[]:i}var qC={modes:{index(n,t,e,s){const r=Ps(t,n),i=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Wl(n,r,i,s,o):Gl(n,r,i,!1,s,o),c=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(l=>{const d=a[0].index,h=l.data[d];h&&!h.skip&&c.push({element:h,datasetIndex:l.index,index:d})}),c):[]},dataset(n,t,e,s){const r=Ps(t,n),i=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Wl(n,r,i,s,o):Gl(n,r,i,!1,s,o);if(a.length>0){const c=a[0].datasetIndex,l=n.getDatasetMeta(c).data;a=[];for(let d=0;d<l.length;++d)a.push({element:l[d],datasetIndex:c,index:d})}return a},point(n,t,e,s){const r=Ps(t,n),i=e.axis||"xy",o=e.includeInvisible||!1;return Wl(n,r,i,s,o)},nearest(n,t,e,s){const r=Ps(t,n),i=e.axis||"xy",o=e.includeInvisible||!1;return Gl(n,r,i,e.intersect,s,o)},x(n,t,e,s){const r=Ps(t,n);return vm(n,r,"x",e.intersect,s)},y(n,t,e,s){const r=Ps(t,n);return vm(n,r,"y",e.intersect,s)}}};const zv=["left","top","right","bottom"];function bi(n,t){return n.filter(e=>e.pos===t)}function bm(n,t){return n.filter(e=>zv.indexOf(e.pos)===-1&&e.box.axis===t)}function xi(n,t){return n.sort((e,s)=>{const r=t?s:e,i=t?e:s;return r.weight===i.weight?r.index-i.index:r.weight-i.weight})}function WC(n){const t=[];let e,s,r,i,o,a;for(e=0,s=(n||[]).length;e<s;++e)r=n[e],{position:i,options:{stack:o,stackWeight:a=1}}=r,t.push({index:e,box:r,pos:i,horizontal:r.isHorizontal(),weight:r.weight,stack:o&&i+o,stackWeight:a});return t}function GC(n){const t={};for(const e of n){const{stack:s,pos:r,stackWeight:i}=e;if(!s||!zv.includes(r))continue;const o=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=i}return t}function YC(n,t){const e=GC(n),{vBoxMaxWidth:s,hBoxMaxHeight:r}=t;let i,o,a;for(i=0,o=n.length;i<o;++i){a=n[i];const{fullSize:c}=a.box,l=e[a.stack],d=l&&a.stackWeight/l.weight;a.horizontal?(a.width=d?d*s:c&&t.availableWidth,a.height=r):(a.width=s,a.height=d?d*r:c&&t.availableHeight)}return e}function KC(n){const t=WC(n),e=xi(t.filter(l=>l.box.fullSize),!0),s=xi(bi(t,"left"),!0),r=xi(bi(t,"right")),i=xi(bi(t,"top"),!0),o=xi(bi(t,"bottom")),a=bm(t,"x"),c=bm(t,"y");return{fullSize:e,leftAndTop:s.concat(i),rightAndBottom:r.concat(c).concat(o).concat(a),chartArea:bi(t,"chartArea"),vertical:s.concat(r).concat(c),horizontal:i.concat(o).concat(a)}}function xm(n,t,e,s){return Math.max(n[e],t[e])+Math.max(n[s],t[s])}function Hv(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function QC(n,t,e,s){const{pos:r,box:i}=e,o=n.maxPadding;if(!ut(r)){e.size&&(n[r]-=e.size);const h=s[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?i.height:i.width),e.size=h.size/h.count,n[r]+=e.size}i.getPadding&&Hv(o,i.getPadding());const a=Math.max(0,t.outerWidth-xm(o,n,"left","right")),c=Math.max(0,t.outerHeight-xm(o,n,"top","bottom")),l=a!==n.w,d=c!==n.h;return n.w=a,n.h=c,e.horizontal?{same:l,other:d}:{same:d,other:l}}function XC(n){const t=n.maxPadding;function e(s){const r=Math.max(t[s]-n[s],0);return n[s]+=r,r}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function JC(n,t){const e=t.maxPadding;function s(r){const i={left:0,top:0,right:0,bottom:0};return r.forEach(o=>{i[o]=Math.max(t[o],e[o])}),i}return s(n?["left","right"]:["top","bottom"])}function Vi(n,t,e,s){const r=[];let i,o,a,c,l,d;for(i=0,o=n.length,l=0;i<o;++i){a=n[i],c=a.box,c.update(a.width||t.w,a.height||t.h,JC(a.horizontal,t));const{same:h,other:f}=QC(t,e,a,s);l|=h&&r.length,d=d||f,c.fullSize||r.push(a)}return l&&Vi(r,t,e,s)||d}function ba(n,t,e,s,r){n.top=e,n.left=t,n.right=t+s,n.bottom=e+r,n.width=s,n.height=r}function wm(n,t,e,s){const r=e.padding;let{x:i,y:o}=t;for(const a of n){const c=a.box,l=s[a.stack]||{placed:0,weight:1},d=a.stackWeight/l.weight||1;if(a.horizontal){const h=t.w*d,f=l.size||c.height;po(l.start)&&(o=l.start),c.fullSize?ba(c,r.left,o,e.outerWidth-r.right-r.left,f):ba(c,t.left+l.placed,o,h,f),l.start=o,l.placed+=h,o=c.bottom}else{const h=t.h*d,f=l.size||c.width;po(l.start)&&(i=l.start),c.fullSize?ba(c,i,r.top,f,e.outerHeight-r.bottom-r.top):ba(c,i,t.top+l.placed,f,h),l.start=i,l.placed+=h,i=c.right}}t.x=i,t.y=o}var Ee={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,s){if(!n)return;const r=Ae(n.options.layout.padding),i=Math.max(t-r.width,0),o=Math.max(e-r.height,0),a=KC(n.boxes),c=a.vertical,l=a.horizontal;At(n.boxes,v=>{typeof v.beforeLayout=="function"&&v.beforeLayout()});const d=c.reduce((v,y)=>y.box.options&&y.box.options.display===!1?v:v+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:r,availableWidth:i,availableHeight:o,vBoxMaxWidth:i/2/d,hBoxMaxHeight:o/2}),f=Object.assign({},r);Hv(f,Ae(s));const m=Object.assign({maxPadding:f,w:i,h:o,x:r.left,y:r.top},r),g=YC(c.concat(l),h);Vi(a.fullSize,m,h,g),Vi(c,m,h,g),Vi(l,m,h,g)&&Vi(c,m,h,g),XC(m),wm(a.leftAndTop,m,h,g),m.x+=m.w,m.y+=m.h,wm(a.rightAndBottom,m,h,g),n.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},At(a.chartArea,v=>{const y=v.box;Object.assign(y,n.chartArea),y.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class qv{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,r){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,r?Math.floor(e/r):s)}}isAttached(t){return!0}updateConfig(t){}}class ZC extends qv{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Ua="$chartjs",tR={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Em=n=>n===null||n==="";function eR(n,t){const e=n.style,s=n.getAttribute("height"),r=n.getAttribute("width");if(n[Ua]={initial:{height:s,width:r,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Em(r)){const i=om(n,"width");i!==void 0&&(n.width=i)}if(Em(s))if(n.style.height==="")n.height=n.width/(t||2);else{const i=om(n,"height");i!==void 0&&(n.height=i)}return n}const Wv=sC?{passive:!0}:!1;function nR(n,t,e){n&&n.addEventListener(t,e,Wv)}function sR(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,Wv)}function rR(n,t){const e=tR[n.type]||n.type,{x:s,y:r}=Ps(n,t);return{type:e,chart:t,native:n,x:s!==void 0?s:null,y:r!==void 0?r:null}}function gc(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function iR(n,t,e){const s=n.canvas,r=new MutationObserver(i=>{let o=!1;for(const a of i)o=o||gc(a.addedNodes,s),o=o&&!gc(a.removedNodes,s);o&&e()});return r.observe(document,{childList:!0,subtree:!0}),r}function oR(n,t,e){const s=n.canvas,r=new MutationObserver(i=>{let o=!1;for(const a of i)o=o||gc(a.removedNodes,s),o=o&&!gc(a.addedNodes,s);o&&e()});return r.observe(document,{childList:!0,subtree:!0}),r}const _o=new Map;let Tm=0;function Gv(){const n=window.devicePixelRatio;n!==Tm&&(Tm=n,_o.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function aR(n,t){_o.size||window.addEventListener("resize",Gv),_o.set(n,t)}function cR(n){_o.delete(n),_o.size||window.removeEventListener("resize",Gv)}function lR(n,t,e){const s=n.canvas,r=s&&uh(s);if(!r)return;const i=xv((a,c)=>{const l=r.clientWidth;e(a,c),l<r.clientWidth&&e()},window),o=new ResizeObserver(a=>{const c=a[0],l=c.contentRect.width,d=c.contentRect.height;l===0&&d===0||i(l,d)});return o.observe(r),aR(n,i),o}function Yl(n,t,e){e&&e.disconnect(),t==="resize"&&cR(n)}function uR(n,t,e){const s=n.canvas,r=xv(i=>{n.ctx!==null&&e(rR(i,n))},n);return nR(s,t,r),r}class dR extends qv{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(eR(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[Ua])return!1;const s=e[Ua].initial;["height","width"].forEach(i=>{const o=s[i];at(o)?e.removeAttribute(i):e.setAttribute(i,o)});const r=s.style||{};return Object.keys(r).forEach(i=>{e.style[i]=r[i]}),e.width=e.width,delete e[Ua],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const r=t.$proxies||(t.$proxies={}),o={attach:iR,detach:oR,resize:lR}[e]||uR;r[e]=o(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),r=s[e];if(!r)return;({attach:Yl,detach:Yl,resize:Yl}[e]||sR)(t,e,r),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,r){return nC(t,e,s,r)}isAttached(t){const e=t&&uh(t);return!!(e&&e.isConnected)}}function hR(n){return!lh()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?ZC:dR}class en{constructor(){N(this,"x");N(this,"y");N(this,"active",!1);N(this,"options");N(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return zr(this.x)&&zr(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const r={};return t.forEach(i=>{r[i]=s[i]&&s[i].active()?s[i]._to:this[i]}),r}}N(en,"defaults",{}),N(en,"defaultRoutes");function fR(n,t){const e=n.options.ticks,s=pR(n),r=Math.min(e.maxTicksLimit||s,s),i=e.major.enabled?gR(t):[],o=i.length,a=i[0],c=i[o-1],l=[];if(o>r)return _R(t,l,i,o/r),l;const d=mR(i,t,r);if(o>0){let h,f;const m=o>1?Math.round((c-a)/(o-1)):null;for(xa(t,l,d,at(m)?0:a-m,a),h=0,f=o-1;h<f;h++)xa(t,l,d,i[h],i[h+1]);return xa(t,l,d,c,at(m)?t.length:c+m),l}return xa(t,l,d),l}function pR(n){const t=n.options.offset,e=n._tickSize(),s=n._length/e+(t?0:1),r=n._maxLength/e;return Math.floor(Math.min(s,r))}function mR(n,t,e){const s=yR(n),r=t.length/e;if(!s)return Math.max(r,1);const i=i1(s);for(let o=0,a=i.length-1;o<a;o++){const c=i[o];if(c>r)return c}return Math.max(r,1)}function gR(n){const t=[];let e,s;for(e=0,s=n.length;e<s;e++)n[e].major&&t.push(e);return t}function _R(n,t,e,s){let r=0,i=e[0],o;for(s=Math.ceil(s),o=0;o<n.length;o++)o===i&&(t.push(n[o]),r++,i=e[r*s])}function xa(n,t,e,s,r){const i=st(s,0),o=Math.min(st(r,n.length),n.length);let a=0,c,l,d;for(e=Math.ceil(e),r&&(c=r-s,e=c/Math.floor(c/e)),d=i;d<0;)a++,d=Math.round(i+a*e);for(l=Math.max(i,0);l<o;l++)l===d&&(t.push(n[l]),a++,d=Math.round(i+a*e))}function yR(n){const t=n.length;let e,s;if(t<2)return!1;for(s=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==s)return!1;return s}const vR=n=>n==="left"?"right":n==="right"?"left":n,Im=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,Am=(n,t)=>Math.min(t||n,n);function km(n,t){const e=[],s=n.length/t,r=n.length;let i=0;for(;i<r;i+=s)e.push(n[Math.floor(i)]);return e}function bR(n,t,e){const s=n.ticks.length,r=Math.min(t,s-1),i=n._startPixel,o=n._endPixel,a=1e-6;let c=n.getPixelForTick(r),l;if(!(e&&(s===1?l=Math.max(c-i,o-c):t===0?l=(n.getPixelForTick(1)-c)/2:l=(c-n.getPixelForTick(r-1))/2,c+=r<t?l:-l,c<i-a||c>o+a)))return c}function xR(n,t){At(n,e=>{const s=e.gc,r=s.length/2;let i;if(r>t){for(i=0;i<r;++i)delete e.data[s[i]];s.splice(0,r)}})}function wi(n){return n.drawTicks?n.tickLength:0}function Sm(n,t){if(!n.display)return 0;const e=re(n.font,t),s=Ae(n.padding);return(Vt(n.text)?n.text.length:1)*e.lineHeight+s.height}function wR(n,t){return vs(n,{scale:t,type:"scale"})}function ER(n,t,e){return vs(n,{tick:e,index:t,type:"tick"})}function TR(n,t,e){let s=sh(n);return(e&&t!=="right"||!e&&t==="right")&&(s=vR(s)),s}function IR(n,t,e,s){const{top:r,left:i,bottom:o,right:a,chart:c}=n,{chartArea:l,scales:d}=c;let h=0,f,m,g;const v=o-r,y=a-i;if(n.isHorizontal()){if(m=ve(s,i,a),ut(e)){const w=Object.keys(e)[0],T=e[w];g=d[w].getPixelForValue(T)+v-t}else e==="center"?g=(l.bottom+l.top)/2+v-t:g=Im(n,e,t);f=a-i}else{if(ut(e)){const w=Object.keys(e)[0],T=e[w];m=d[w].getPixelForValue(T)-y+t}else e==="center"?m=(l.left+l.right)/2-y+t:m=Im(n,e,t);g=ve(s,o,r),h=e==="left"?-Xt:Xt}return{titleX:m,titleY:g,maxWidth:f,rotation:h}}class or extends en{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:r}=this;return t=Ve(t,Number.POSITIVE_INFINITY),e=Ve(e,Number.NEGATIVE_INFINITY),s=Ve(s,Number.POSITIVE_INFINITY),r=Ve(r,Number.NEGATIVE_INFINITY),{min:Ve(t,s),max:Ve(e,r),minDefined:qt(t),maxDefined:qt(e)}}getMinMax(t){let{min:e,max:s,minDefined:r,maxDefined:i}=this.getUserBounds(),o;if(r&&i)return{min:e,max:s};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,t),r||(e=Math.min(e,o.min)),i||(s=Math.max(s,o.max));return e=i&&e>s?s:e,s=r&&e>s?e:s,{min:Ve(e,Ve(s,e)),max:Ve(s,Ve(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Pt(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:r,grace:i,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=O1(this,i,r),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?km(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=fR(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Pt(this.options.afterUpdate,[this])}beforeSetDimensions(){Pt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Pt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Pt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Pt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,r,i;for(s=0,r=t.length;s<r;s++)i=t[s],i.label=Pt(e.callback,[i.value,s,t],this)}afterTickToLabelConversion(){Pt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Pt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=Am(this.ticks.length,t.ticks.maxTicksLimit),r=e.minRotation||0,i=e.maxRotation;let o=r,a,c,l;if(!this._isVisible()||!e.display||r>=i||s<=1||!this.isHorizontal()){this.labelRotation=r;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,m=le(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/s:m/(s-1),h+6>a&&(a=m/(s-(t.offset?.5:1)),c=this.maxHeight-wi(t.grid)-e.padding-Sm(t.title,this.chart.options.font),l=Math.sqrt(h*h+f*f),o=eh(Math.min(Math.asin(le((d.highest.height+6)/a,-1,1)),Math.asin(le(c/l,-1,1))-Math.asin(le(f/l,-1,1)))),o=Math.max(r,Math.min(i,o))),this.labelRotation=o}afterCalculateLabelRotation(){Pt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Pt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:r,grid:i}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=Sm(r,e.options.font);if(a?(t.width=this.maxWidth,t.height=wi(i)+c):(t.height=this.maxHeight,t.width=wi(i)+c),s.display&&this.ticks.length){const{first:l,last:d,widest:h,highest:f}=this._getLabelSizes(),m=s.padding*2,g=Xe(this.labelRotation),v=Math.cos(g),y=Math.sin(g);if(a){const w=s.mirror?0:y*h.width+v*f.height;t.height=Math.min(this.maxHeight,t.height+w+m)}else{const w=s.mirror?0:v*h.width+y*f.height;t.width=Math.min(this.maxWidth,t.width+w+m)}this._calculatePadding(l,d,y,v)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,r){const{ticks:{align:i,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,m=0;c?l?(f=r*t.width,m=s*e.height):(f=s*t.height,m=r*e.width):i==="start"?m=e.width:i==="end"?f=t.width:i!=="inner"&&(f=t.width/2,m=e.width/2),this.paddingLeft=Math.max((f-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((m-h+o)*this.width/(this.width-h),0)}else{let d=e.height/2,h=t.height/2;i==="start"?(d=0,h=t.height):i==="end"&&(d=e.height,h=0),this.paddingTop=d+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Pt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)at(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=km(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:r,_longestTextCache:i}=this,o=[],a=[],c=Math.floor(e/Am(e,s));let l=0,d=0,h,f,m,g,v,y,w,T,k,D,P;for(h=0;h<e;h+=c){if(g=t[h].label,v=this._resolveTickFontOptions(h),r.font=y=v.string,w=i[y]=i[y]||{data:{},gc:[]},T=v.lineHeight,k=D=0,!at(g)&&!Vt(g))k=pc(r,w.data,w.gc,k,g),D=T;else if(Vt(g))for(f=0,m=g.length;f<m;++f)P=g[f],!at(P)&&!Vt(P)&&(k=pc(r,w.data,w.gc,k,P),D+=T);o.push(k),a.push(D),l=Math.max(k,l),d=Math.max(D,d)}xR(i,e);const M=o.indexOf(l),I=a.indexOf(d),b=x=>({width:o[x]||0,height:a[x]||0});return{first:b(0),last:b(e-1),widest:b(M),highest:b(I),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return l1(this._alignToPixels?Is(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=ER(this.getContext(),t,s))}return this.$context||(this.$context=wR(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Xe(this.labelRotation),s=Math.abs(Math.cos(e)),r=Math.abs(Math.sin(e)),i=this._getLabelSizes(),o=t.autoSkipPadding||0,a=i?i.widest.width+o:0,c=i?i.highest.height+o:0;return this.isHorizontal()?c*s>a*r?a/s:c/r:c*r<a*s?c/s:a/r}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,r=this.options,{grid:i,position:o,border:a}=r,c=i.offset,l=this.isHorizontal(),h=this.ticks.length+(c?1:0),f=wi(i),m=[],g=a.setContext(this.getContext()),v=g.display?g.width:0,y=v/2,w=function(B){return Is(s,B,v)};let T,k,D,P,M,I,b,x,A,C,R,S;if(o==="top")T=w(this.bottom),I=this.bottom-f,x=T-y,C=w(t.top)+y,S=t.bottom;else if(o==="bottom")T=w(this.top),C=t.top,S=w(t.bottom)-y,I=T+y,x=this.top+f;else if(o==="left")T=w(this.right),M=this.right-f,b=T-y,A=w(t.left)+y,R=t.right;else if(o==="right")T=w(this.left),A=t.left,R=w(t.right)-y,M=T+y,b=this.left+f;else if(e==="x"){if(o==="center")T=w((t.top+t.bottom)/2+.5);else if(ut(o)){const B=Object.keys(o)[0],L=o[B];T=w(this.chart.scales[B].getPixelForValue(L))}C=t.top,S=t.bottom,I=T+y,x=I+f}else if(e==="y"){if(o==="center")T=w((t.left+t.right)/2);else if(ut(o)){const B=Object.keys(o)[0],L=o[B];T=w(this.chart.scales[B].getPixelForValue(L))}M=T-y,b=M-f,A=t.left,R=t.right}const et=st(r.ticks.maxTicksLimit,h),z=Math.max(1,Math.ceil(h/et));for(k=0;k<h;k+=z){const B=this.getContext(k),L=i.setContext(B),q=a.setContext(B),Y=L.lineWidth,ft=L.color,mt=q.dash||[],bt=q.dashOffset,G=L.tickWidth,ot=L.tickColor,xt=L.tickBorderDash||[],Bt=L.tickBorderDashOffset;D=bR(this,k,c),D!==void 0&&(P=Is(s,D,Y),l?M=b=A=R=P:I=x=C=S=P,m.push({tx1:M,ty1:I,tx2:b,ty2:x,x1:A,y1:C,x2:R,y2:S,width:Y,color:ft,borderDash:mt,borderDashOffset:bt,tickWidth:G,tickColor:ot,tickBorderDash:xt,tickBorderDashOffset:Bt}))}return this._ticksLength=h,this._borderValue=T,m}_computeLabelItems(t){const e=this.axis,s=this.options,{position:r,ticks:i}=s,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:d,mirror:h}=i,f=wi(s.grid),m=f+d,g=h?-d:m,v=-Xe(this.labelRotation),y=[];let w,T,k,D,P,M,I,b,x,A,C,R,S="middle";if(r==="top")M=this.bottom-g,I=this._getXAxisLabelAlignment();else if(r==="bottom")M=this.top+g,I=this._getXAxisLabelAlignment();else if(r==="left"){const z=this._getYAxisLabelAlignment(f);I=z.textAlign,P=z.x}else if(r==="right"){const z=this._getYAxisLabelAlignment(f);I=z.textAlign,P=z.x}else if(e==="x"){if(r==="center")M=(t.top+t.bottom)/2+m;else if(ut(r)){const z=Object.keys(r)[0],B=r[z];M=this.chart.scales[z].getPixelForValue(B)+m}I=this._getXAxisLabelAlignment()}else if(e==="y"){if(r==="center")P=(t.left+t.right)/2-m;else if(ut(r)){const z=Object.keys(r)[0],B=r[z];P=this.chart.scales[z].getPixelForValue(B)}I=this._getYAxisLabelAlignment(f).textAlign}e==="y"&&(c==="start"?S="top":c==="end"&&(S="bottom"));const et=this._getLabelSizes();for(w=0,T=a.length;w<T;++w){k=a[w],D=k.label;const z=i.setContext(this.getContext(w));b=this.getPixelForTick(w)+i.labelOffset,x=this._resolveTickFontOptions(w),A=x.lineHeight,C=Vt(D)?D.length:1;const B=C/2,L=z.color,q=z.textStrokeColor,Y=z.textStrokeWidth;let ft=I;o?(P=b,I==="inner"&&(w===T-1?ft=this.options.reverse?"left":"right":w===0?ft=this.options.reverse?"right":"left":ft="center"),r==="top"?l==="near"||v!==0?R=-C*A+A/2:l==="center"?R=-et.highest.height/2-B*A+A:R=-et.highest.height+A/2:l==="near"||v!==0?R=A/2:l==="center"?R=et.highest.height/2-B*A:R=et.highest.height-C*A,h&&(R*=-1),v!==0&&!z.showLabelBackdrop&&(P+=A/2*Math.sin(v))):(M=b,R=(1-C)*A/2);let mt;if(z.showLabelBackdrop){const bt=Ae(z.backdropPadding),G=et.heights[w],ot=et.widths[w];let xt=R-bt.top,Bt=0-bt.left;switch(S){case"middle":xt-=G/2;break;case"bottom":xt-=G;break}switch(I){case"center":Bt-=ot/2;break;case"right":Bt-=ot;break;case"inner":w===T-1?Bt-=ot:w>0&&(Bt-=ot/2);break}mt={left:Bt,top:xt,width:ot+bt.width,height:G+bt.height,color:z.backdropColor}}y.push({label:D,font:x,textOffset:R,options:{rotation:v,color:L,strokeColor:q,strokeWidth:Y,textAlign:ft,textBaseline:S,translation:[P,M],backdrop:mt}})}return y}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Xe(this.labelRotation))return t==="top"?"left":"right";let r="center";return e.align==="start"?r="left":e.align==="end"?r="right":e.align==="inner"&&(r="inner"),r}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:r,padding:i}}=this.options,o=this._getLabelSizes(),a=t+i,c=o.widest.width;let l,d;return e==="left"?r?(d=this.right+i,s==="near"?l="left":s==="center"?(l="center",d+=c/2):(l="right",d+=c)):(d=this.right-a,s==="near"?l="right":s==="center"?(l="center",d-=c/2):(l="left",d=this.left)):e==="right"?r?(d=this.left+i,s==="near"?l="right":s==="center"?(l="center",d-=c/2):(l="left",d-=c)):(d=this.left+a,s==="near"?l="left":s==="center"?(l="center",d+=c/2):(l="right",d=this.right)):l="right",{textAlign:l,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:r,width:i,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,r,i,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const r=this.ticks.findIndex(i=>i.value===t);return r>=0?e.setContext(this.getContext(r)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,r=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let i,o;const a=(c,l,d)=>{!d.width||!d.color||(s.save(),s.lineWidth=d.width,s.strokeStyle=d.color,s.setLineDash(d.borderDash||[]),s.lineDashOffset=d.borderDashOffset,s.beginPath(),s.moveTo(c.x,c.y),s.lineTo(l.x,l.y),s.stroke(),s.restore())};if(e.display)for(i=0,o=r.length;i<o;++i){const c=r[i];e.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:r}}=this,i=s.setContext(this.getContext()),o=s.display?i.width:0;if(!o)return;const a=r.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,d,h,f;this.isHorizontal()?(l=Is(t,this.left,o)-o/2,d=Is(t,this.right,a)+a/2,h=f=c):(h=Is(t,this.top,o)-o/2,f=Is(t,this.bottom,a)+a/2,l=d=c),e.save(),e.lineWidth=i.width,e.strokeStyle=i.color,e.beginPath(),e.moveTo(l,h),e.lineTo(d,f),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,r=this._computeLabelArea();r&&Zc(s,r);const i=this.getLabelItems(t);for(const o of i){const a=o.options,c=o.font,l=o.label,d=o.textOffset;tr(s,l,0,d,c,a)}r&&tl(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:r}}=this;if(!s.display)return;const i=re(s.font),o=Ae(s.padding),a=s.align;let c=i.lineHeight/2;e==="bottom"||e==="center"||ut(e)?(c+=o.bottom,Vt(s.text)&&(c+=i.lineHeight*(s.text.length-1))):c+=o.top;const{titleX:l,titleY:d,maxWidth:h,rotation:f}=IR(this,c,e,a);tr(t,s.text,0,0,i,{color:s.color,maxWidth:h,rotation:f,textAlign:TR(a,e,r),textBaseline:"middle",translation:[l,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=st(t.grid&&t.grid.z,-1),r=st(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==or.prototype.draw?[{z:e,draw:i=>{this.draw(i)}}]:[{z:s,draw:i=>{this.drawBackground(),this.drawGrid(i),this.drawTitle()}},{z:r,draw:()=>{this.drawBorder()}},{z:e,draw:i=>{this.drawLabels(i)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",r=[];let i,o;for(i=0,o=e.length;i<o;++i){const a=e[i];a[s]===this.id&&(!t||a.type===t)&&r.push(a)}return r}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return re(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class wa{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;SR(e)&&(s=this.register(e));const r=this.items,i=t.id,o=this.scope+"."+i;if(!i)throw new Error("class does not have id: "+t);return i in r||(r[i]=t,AR(t,o,s),this.override&&$t.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,r=this.scope;s in e&&delete e[s],r&&s in $t[r]&&(delete $t[r][s],this.override&&delete Zs[s])}}function AR(n,t,e){const s=fo(Object.create(null),[e?$t.get(e):{},$t.get(t),n.defaults]);$t.set(t,s),n.defaultRoutes&&kR(t,n.defaultRoutes),n.descriptors&&$t.describe(t,n.descriptors)}function kR(n,t){Object.keys(t).forEach(e=>{const s=e.split("."),r=s.pop(),i=[n].concat(s).join("."),o=t[e].split("."),a=o.pop(),c=o.join(".");$t.route(i,r,c,a)})}function SR(n){return"id"in n&&"defaults"in n}class CR{constructor(){this.controllers=new wa(Je,"datasets",!0),this.elements=new wa(en,"elements"),this.plugins=new wa(Object,"plugins"),this.scales=new wa(or,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(r=>{const i=s||this._getRegistryForType(r);s||i.isForType(r)||i===this.plugins&&r.id?this._exec(t,i,r):At(r,o=>{const a=s||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,s){const r=th(t);Pt(s["before"+r],[],s),e[t](s),Pt(s["after"+r],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const r=e.get(t);if(r===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return r}}var on=new CR;class RR{constructor(){this._init=void 0}notify(t,e,s,r){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const i=r?this._descriptors(t).filter(r):this._descriptors(t),o=this._notify(i,t,e,s);return e==="afterDestroy"&&(this._notify(i,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,s,r){r=r||{};for(const i of t){const o=i.plugin,a=o[s],c=[e,r,i.options];if(Pt(a,c,o)===!1&&r.cancelable)return!1}return!0}invalidate(){at(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,r=st(s.options&&s.options.plugins,{}),i=PR(s);return r===!1&&!e?[]:MR(t,i,r,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,r=(i,o)=>i.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(r(e,s),t,"stop"),this._notify(r(s,e),t,"start")}}function PR(n){const t={},e=[],s=Object.keys(on.plugins.items);for(let i=0;i<s.length;i++)e.push(on.getPlugin(s[i]));const r=n.plugins||[];for(let i=0;i<r.length;i++){const o=r[i];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function DR(n,t){return!t&&n===!1?null:n===!0?{}:n}function MR(n,{plugins:t,localIds:e},s,r){const i=[],o=n.getContext();for(const a of t){const c=a.id,l=DR(s[c],r);l!==null&&i.push({plugin:a,options:OR(n.config,{plugin:a,local:e[c]},l,o)})}return i}function OR(n,{plugin:t,local:e},s,r){const i=n.pluginScopeKeys(t),o=n.getOptionScopes(s,i);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Vu(n,t){const e=$t.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function NR(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function LR(n,t){return n===t?"_index_":"_value_"}function Cm(n){if(n==="x"||n==="y"||n==="r")return n}function VR(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Fu(n,...t){if(Cm(n))return n;for(const e of t){const s=e.axis||VR(e.position)||n.length>1&&Cm(n[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function Rm(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function FR(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===n||s.yAxisID===n);if(e.length)return Rm(n,"x",e[0])||Rm(n,"y",e[0])}return{}}function $R(n,t){const e=Zs[n.type]||{scales:{}},s=t.scales||{},r=Vu(n.type,t),i=Object.create(null);return Object.keys(s).forEach(o=>{const a=s[o];if(!ut(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=Fu(o,a,FR(o,n),$t.scales[a.type]),l=LR(c,r),d=e.scales||{};i[o]=Yi(Object.create(null),[{axis:c},a,d[c],d[l]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,c=o.indexAxis||Vu(a,t),d=(Zs[a]||{}).scales||{};Object.keys(d).forEach(h=>{const f=NR(h,c),m=o[f+"AxisID"]||f;i[m]=i[m]||Object.create(null),Yi(i[m],[{axis:f},s[m],d[h]])})}),Object.keys(i).forEach(o=>{const a=i[o];Yi(a,[$t.scales[a.type],$t.scale])}),i}function Yv(n){const t=n.options||(n.options={});t.plugins=st(t.plugins,{}),t.scales=$R(n,t)}function Kv(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function BR(n){return n=n||{},n.data=Kv(n.data),Yv(n),n}const Pm=new Map,Qv=new Set;function Ea(n,t){let e=Pm.get(n);return e||(e=t(),Pm.set(n,e),Qv.add(e)),e}const Ei=(n,t,e)=>{const s=ps(t,e);s!==void 0&&n.add(s)};class UR{constructor(t){this._config=BR(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Kv(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Yv(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Ea(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return Ea(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return Ea(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return Ea(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let r=s.get(t);return(!r||e)&&(r=new Map,s.set(t,r)),r}getOptionScopes(t,e,s){const{options:r,type:i}=this,o=this._cachedScopes(t,s),a=o.get(e);if(a)return a;const c=new Set;e.forEach(d=>{t&&(c.add(t),d.forEach(h=>Ei(c,t,h))),d.forEach(h=>Ei(c,r,h)),d.forEach(h=>Ei(c,Zs[i]||{},h)),d.forEach(h=>Ei(c,$t,h)),d.forEach(h=>Ei(c,Ou,h))});const l=Array.from(c);return l.length===0&&l.push(Object.create(null)),Qv.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,Zs[e]||{},$t.datasets[e]||{},{type:e},$t,Ou]}resolveNamedOptions(t,e,s,r=[""]){const i={$shared:!0},{resolver:o,subPrefixes:a}=Dm(this._resolverCache,t,r);let c=o;if(zR(o,e)){i.$shared=!1,s=ms(s)?s():s;const l=this.createResolver(t,s,a);c=Hr(o,s,l)}for(const l of e)i[l]=c[l];return i}createResolver(t,e,s=[""],r){const{resolver:i}=Dm(this._resolverCache,t,s);return ut(e)?Hr(i,e,void 0,r):i}}function Dm(n,t,e){let s=n.get(t);s||(s=new Map,n.set(t,s));const r=e.join();let i=s.get(r);return i||(i={resolver:oh(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},s.set(r,i)),i}const jR=n=>ut(n)&&Object.getOwnPropertyNames(n).some(t=>ms(n[t]));function zR(n,t){const{isScriptable:e,isIndexable:s}=kv(n);for(const r of t){const i=e(r),o=s(r),a=(o||i)&&n[r];if(i&&(ms(a)||jR(a))||o&&Vt(a))return!0}return!1}var HR="4.5.1";const qR=["top","bottom","left","right","chartArea"];function Mm(n,t){return n==="top"||n==="bottom"||qR.indexOf(n)===-1&&t==="x"}function Om(n,t){return function(e,s){return e[n]===s[n]?e[t]-s[t]:e[n]-s[n]}}function Nm(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),Pt(e&&e.onComplete,[n],t)}function WR(n){const t=n.chart,e=t.options.animation;Pt(e&&e.onProgress,[n],t)}function Xv(n){return lh()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const ja={},Lm=n=>{const t=Xv(n);return Object.values(ja).filter(e=>e.canvas===t).pop()};function GR(n,t,e){const s=Object.keys(n);for(const r of s){const i=+r;if(i>=t){const o=n[r];delete n[r],(e>0||i>t)&&(n[i+e]=o)}}}function YR(n,t,e,s){return!e||n.type==="mouseout"?null:s?t:n}class vt{static register(...t){on.add(...t),Vm()}static unregister(...t){on.remove(...t),Vm()}constructor(t,e){const s=this.config=new UR(e),r=Xv(t),i=Lm(r);if(i)throw new Error("Canvas is already in use. Chart with ID '"+i.id+"' must be destroyed before the canvas with ID '"+i.canvas.id+"' can be reused.");const o=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||hR(r)),this.platform.updateConfig(s);const a=this.platform.acquireContext(r,o.aspectRatio),c=a&&a.canvas,l=c&&c.height,d=c&&c.width;if(this.id=QS(),this.ctx=a,this.canvas=c,this.width=d,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new RR,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=f1(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],ja[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}En.listen(this,"complete",Nm),En.listen(this,"progress",WR),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:r,_aspectRatio:i}=this;return at(t)?e&&i?i:r?s/r:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return on}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():im(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return nm(this.canvas,this.ctx),this}stop(){return En.stop(this),this}resize(t,e){En.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,r=this.canvas,i=s.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(r,t,e,i),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,im(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Pt(s.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};At(e,(s,r)=>{s.id=r})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,r=Object.keys(s).reduce((o,a)=>(o[a]=!1,o),{});let i=[];e&&(i=i.concat(Object.keys(e).map(o=>{const a=e[o],c=Fu(o,a),l=c==="r",d=c==="x";return{options:a,dposition:l?"chartArea":d?"bottom":"left",dtype:l?"radialLinear":d?"category":"linear"}}))),At(i,o=>{const a=o.options,c=a.id,l=Fu(c,a),d=st(a.type,o.dtype);(a.position===void 0||Mm(a.position,l)!==Mm(o.dposition))&&(a.position=o.dposition),r[c]=!0;let h=null;if(c in s&&s[c].type===d)h=s[c];else{const f=on.getScale(d);h=new f({id:c,type:d,ctx:this.ctx,chart:this}),s[h.id]=h}h.init(a,t)}),At(r,(o,a)=>{o||delete s[a]}),At(s,o=>{Ee.configure(this,o,o.options),Ee.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((r,i)=>r.index-i.index),s>e){for(let r=e;r<s;++r)this._destroyDatasetMeta(r);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(Om("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,r)=>{e.filter(i=>i===s._dataset).length===0&&this._destroyDatasetMeta(r)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,r;for(this._removeUnreferencedMetasets(),s=0,r=e.length;s<r;s++){const i=e[s];let o=this.getDatasetMeta(s);const a=i.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(s),o=this.getDatasetMeta(s)),o.type=a,o.indexAxis=i.indexAxis||Vu(a,this.options),o.order=i.order||0,o.index=s,o.label=""+i.label,o.visible=this.isDatasetVisible(s),o.controller)o.controller.updateIndex(s),o.controller.linkScales();else{const c=on.getController(a),{datasetElementType:l,dataElementType:d}=$t.datasets[a];Object.assign(c,{dataElementType:on.getElement(d),datasetElementType:l&&on.getElement(l)}),o.controller=new c(this,s),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){At(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const i=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,d=this.data.datasets.length;l<d;l++){const{controller:h}=this.getDatasetMeta(l),f=!r&&i.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=s.layout.autoPadding?o:0,this._updateLayout(o),r||At(i,l=>{l.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Om("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){At(this.scales,t=>{Ee.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Gp(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:r,count:i}of e){const o=s==="_removeElements"?-i:i;GR(t,r,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=i=>new Set(t.filter(o=>o[0]===i).map((o,a)=>a+","+o.splice(1).join(","))),r=s(0);for(let i=1;i<e;i++)if(!Gp(r,s(i)))return;return Array.from(r).map(i=>i.split(",")).map(i=>({method:i[1],start:+i[2],count:+i[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Ee.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],At(this.boxes,r=>{s&&r.position==="chartArea"||(r.configure&&r.configure(),this._layers.push(...r._layers()))},this),this._layers.forEach((r,i)=>{r._idx=i}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,ms(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),r={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",r)!==!1&&(s.controller._update(e),r.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",r))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(En.has(this)?this.attached&&!En.running(this)&&En.start(this):(this.draw(),Nm({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:r}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,r)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let r,i;for(r=0,i=e.length;r<i;++r){const o=e[r];(!t||o.visible)&&s.push(o)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},r=Fv(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(r&&Zc(e,r),t.controller.draw(),r&&tl(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return Dn(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,r){const i=qC.modes[e];return typeof i=="function"?i(this,t,s,r):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let r=s.filter(i=>i&&i._dataset===e).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(r)),r}getContext(){return this.$context||(this.$context=vs(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const r=s?"show":"hide",i=this.getDatasetMeta(t),o=i.controller._resolveAnimations(void 0,r);po(e)?(i.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),o.update(i,{visible:s}),this.update(a=>a.datasetIndex===t?r:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),En.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),nm(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete ja[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(i,o)=>{e.addEventListener(this,i,o),t[i]=o},r=(i,o,a)=>{i.offsetX=o,i.offsetY=a,this._eventHandler(i)};At(this.options.events,i=>s(i,r))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(c,l)=>{e.addEventListener(this,c,l),t[c]=l},r=(c,l)=>{t[c]&&(e.removeEventListener(this,c,l),delete t[c])},i=(c,l)=>{this.canvas&&this.resize(c,l)};let o;const a=()=>{r("attach",a),this.attached=!0,this.resize(),s("resize",i),s("detach",o)};o=()=>{this.attached=!1,r("resize",i),this._stop(),this._resize(0,0),s("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){At(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},At(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const r=s?"set":"remove";let i,o,a,c;for(e==="dataset"&&(i=this.getDatasetMeta(t[0].datasetIndex),i.controller["_"+r+"DatasetHoverStyle"]()),a=0,c=t.length;a<c;++a){o=t[a];const l=o&&this.getDatasetMeta(o.datasetIndex).controller;l&&l[r+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:i,index:o})=>{const a=this.getDatasetMeta(i);if(!a)throw new Error("No dataset found at index "+i);return{datasetIndex:i,element:a.data[o],index:o}});!dc(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const r=this.options.hover,i=(c,l)=>c.filter(d=>!l.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),o=i(e,t),a=s?t:i(t,e);o.length&&this.updateHoverStyle(o,r.mode,!1),a.length&&r.mode&&this.updateHoverStyle(a,r.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},r=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,r)===!1)return;const i=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,r),(i||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:r=[],options:i}=this,o=e,a=this._getActiveElements(t,r,s,o),c=n1(t),l=YR(t,this._lastEvent,s,c);s&&(this._lastEvent=null,Pt(i.onHover,[t,a,this],this),c&&Pt(i.onClick,[t,a,this],this));const d=!dc(a,r);return(d||e)&&(this._active=a,this._updateHoverStyles(a,r,e)),this._lastEvent=l,d}_getActiveElements(t,e,s,r){if(t.type==="mouseout")return[];if(!s)return e;const i=this.options.hover;return this.getElementsAtEventForMode(t,i.mode,i,r)}}N(vt,"defaults",$t),N(vt,"instances",ja),N(vt,"overrides",Zs),N(vt,"registry",on),N(vt,"version",HR),N(vt,"getChart",Lm);function Vm(){return At(vt.instances,n=>n._plugins.invalidate())}function KR(n,t,e){const{startAngle:s,x:r,y:i,outerRadius:o,innerRadius:a,options:c}=t,{borderWidth:l,borderJoinStyle:d}=c,h=Math.min(l/o,xe(s-e));if(n.beginPath(),n.arc(r,i,o-l/2,s+h/2,e-h/2),a>0){const f=Math.min(l/a,xe(s-e));n.arc(r,i,a+l/2,e-f/2,s+f/2,!0)}else{const f=Math.min(l/2,o*xe(s-e));if(d==="round")n.arc(r,i,f,e-yt/2,s+yt/2,!0);else if(d==="bevel"){const m=2*f*f,g=-m*Math.cos(e+yt/2)+r,v=-m*Math.sin(e+yt/2)+i,y=m*Math.cos(s+yt/2)+r,w=m*Math.sin(s+yt/2)+i;n.lineTo(g,v),n.lineTo(y,w)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function QR(n,t,e){const{startAngle:s,pixelMargin:r,x:i,y:o,outerRadius:a,innerRadius:c}=t;let l=r/a;n.beginPath(),n.arc(i,o,a,s-l,e+l),c>r?(l=r/c,n.arc(i,o,c,e+l,s-l,!0)):n.arc(i,o,r,e+Xt,s-Xt),n.closePath(),n.clip()}function XR(n){return ih(n,["outerStart","outerEnd","innerStart","innerEnd"])}function JR(n,t,e,s){const r=XR(n.options.borderRadius),i=(e-t)/2,o=Math.min(i,s*t/2),a=c=>{const l=(e-Math.min(i,c))*s/2;return le(c,0,Math.min(i,l))};return{outerStart:a(r.outerStart),outerEnd:a(r.outerEnd),innerStart:le(r.innerStart,0,o),innerEnd:le(r.innerEnd,0,o)}}function gr(n,t,e,s){return{x:e+n*Math.cos(t),y:s+n*Math.sin(t)}}function _c(n,t,e,s,r,i){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:d}=t,h=Math.max(t.outerRadius+s+e-l,0),f=d>0?d+s+e+l:0;let m=0;const g=r-c;if(s){const z=d>0?d-s:0,B=h>0?h-s:0,L=(z+B)/2,q=L!==0?g*L/(L+s):g;m=(g-q)/2}const v=Math.max(.001,g*h-e/yt)/h,y=(g-v)/2,w=c+y+m,T=r-y-m,{outerStart:k,outerEnd:D,innerStart:P,innerEnd:M}=JR(t,f,h,T-w),I=h-k,b=h-D,x=w+k/I,A=T-D/b,C=f+P,R=f+M,S=w+P/C,et=T-M/R;if(n.beginPath(),i){const z=(x+A)/2;if(n.arc(o,a,h,x,z),n.arc(o,a,h,z,A),D>0){const Y=gr(b,A,o,a);n.arc(Y.x,Y.y,D,A,T+Xt)}const B=gr(R,T,o,a);if(n.lineTo(B.x,B.y),M>0){const Y=gr(R,et,o,a);n.arc(Y.x,Y.y,M,T+Xt,et+Math.PI)}const L=(T-M/f+(w+P/f))/2;if(n.arc(o,a,f,T-M/f,L,!0),n.arc(o,a,f,L,w+P/f,!0),P>0){const Y=gr(C,S,o,a);n.arc(Y.x,Y.y,P,S+Math.PI,w-Xt)}const q=gr(I,w,o,a);if(n.lineTo(q.x,q.y),k>0){const Y=gr(I,x,o,a);n.arc(Y.x,Y.y,k,w-Xt,x)}}else{n.moveTo(o,a);const z=Math.cos(x)*h+o,B=Math.sin(x)*h+a;n.lineTo(z,B);const L=Math.cos(A)*h+o,q=Math.sin(A)*h+a;n.lineTo(L,q)}n.closePath()}function ZR(n,t,e,s,r){const{fullCircles:i,startAngle:o,circumference:a}=t;let c=t.endAngle;if(i){_c(n,t,e,s,c,r);for(let l=0;l<i;++l)n.fill();isNaN(a)||(c=o+(a%Nt||Nt))}return _c(n,t,e,s,c,r),n.fill(),c}function tP(n,t,e,s,r){const{fullCircles:i,startAngle:o,circumference:a,options:c}=t,{borderWidth:l,borderJoinStyle:d,borderDash:h,borderDashOffset:f,borderRadius:m}=c,g=c.borderAlign==="inner";if(!l)return;n.setLineDash(h||[]),n.lineDashOffset=f,g?(n.lineWidth=l*2,n.lineJoin=d||"round"):(n.lineWidth=l,n.lineJoin=d||"bevel");let v=t.endAngle;if(i){_c(n,t,e,s,v,r);for(let y=0;y<i;++y)n.stroke();isNaN(a)||(v=o+(a%Nt||Nt))}g&&QR(n,t,v),c.selfJoin&&v-o>=yt&&m===0&&d!=="miter"&&KR(n,t,v),i||(_c(n,t,e,s,v,r),n.stroke())}class Fi extends en{constructor(e){super();N(this,"circumference");N(this,"endAngle");N(this,"fullCircles");N(this,"innerRadius");N(this,"outerRadius");N(this,"pixelMargin");N(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,r){const i=this.getProps(["x","y"],r),{angle:o,distance:a}=_v(i,{x:e,y:s}),{startAngle:c,endAngle:l,innerRadius:d,outerRadius:h,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],r),m=(this.options.spacing+this.options.borderWidth)/2,g=st(f,l-c),v=mo(o,c,l)&&c!==l,y=g>=Nt||v,w=Rn(a,d+m,h+m);return y&&w}getCenterPoint(e){const{x:s,y:r,startAngle:i,endAngle:o,innerRadius:a,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:l,spacing:d}=this.options,h=(i+o)/2,f=(a+c+d+l)/2;return{x:s+Math.cos(h)*f,y:r+Math.sin(h)*f}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:r}=this,i=(s.offset||0)/4,o=(s.spacing||0)/2,a=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=r>Nt?Math.floor(r/Nt):0,r===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*i,Math.sin(c)*i);const l=1-Math.sin(Math.min(yt,r||0)),d=i*l;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,ZR(e,this,d,o,a),tP(e,this,d,o,a),e.restore()}}N(Fi,"id","arc"),N(Fi,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),N(Fi,"defaultRoutes",{backgroundColor:"backgroundColor"}),N(Fi,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function Jv(n,t,e=t){n.lineCap=st(e.borderCapStyle,t.borderCapStyle),n.setLineDash(st(e.borderDash,t.borderDash)),n.lineDashOffset=st(e.borderDashOffset,t.borderDashOffset),n.lineJoin=st(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=st(e.borderWidth,t.borderWidth),n.strokeStyle=st(e.borderColor,t.borderColor)}function eP(n,t,e){n.lineTo(e.x,e.y)}function nP(n){return n.stepped?I1:n.tension||n.cubicInterpolationMode==="monotone"?A1:eP}function Zv(n,t,e={}){const s=n.length,{start:r=0,end:i=s-1}=e,{start:o,end:a}=t,c=Math.max(r,o),l=Math.min(i,a),d=r<o&&i<o||r>a&&i>a;return{count:s,start:c,loop:t.loop,ilen:l<c&&!d?s+l-c:l-c}}function sP(n,t,e,s){const{points:r,options:i}=t,{count:o,start:a,loop:c,ilen:l}=Zv(r,e,s),d=nP(i);let{move:h=!0,reverse:f}=s||{},m,g,v;for(m=0;m<=l;++m)g=r[(a+(f?l-m:m))%o],!g.skip&&(h?(n.moveTo(g.x,g.y),h=!1):d(n,v,g,f,i.stepped),v=g);return c&&(g=r[(a+(f?l:0))%o],d(n,v,g,f,i.stepped)),!!c}function rP(n,t,e,s){const r=t.points,{count:i,start:o,ilen:a}=Zv(r,e,s),{move:c=!0,reverse:l}=s||{};let d=0,h=0,f,m,g,v,y,w;const T=D=>(o+(l?a-D:D))%i,k=()=>{v!==y&&(n.lineTo(d,y),n.lineTo(d,v),n.lineTo(d,w))};for(c&&(m=r[T(0)],n.moveTo(m.x,m.y)),f=0;f<=a;++f){if(m=r[T(f)],m.skip)continue;const D=m.x,P=m.y,M=D|0;M===g?(P<v?v=P:P>y&&(y=P),d=(h*d+D)/++h):(k(),n.lineTo(D,P),g=M,h=0,v=y=P),w=P}k()}function $u(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?rP:sP}function iP(n){return n.stepped?rC:n.tension||n.cubicInterpolationMode==="monotone"?iC:Ds}function oP(n,t,e,s){let r=t._path;r||(r=t._path=new Path2D,t.path(r,e,s)&&r.closePath()),Jv(n,t.options),n.stroke(r)}function aP(n,t,e,s){const{segments:r,options:i}=t,o=$u(t);for(const a of r)Jv(n,i,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+s-1})&&n.closePath(),n.stroke()}const cP=typeof Path2D=="function";function lP(n,t,e,s){cP&&!t.options.segment?oP(n,t,e,s):aP(n,t,e,s)}class rs extends en{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const r=s.spanGaps?this._loop:this._fullLoop;Q1(this._points,s,t,r,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=dC(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,r=t[e],i=this.points,o=Vv(this,{property:e,start:r,end:r});if(!o.length)return;const a=[],c=iP(s);let l,d;for(l=0,d=o.length;l<d;++l){const{start:h,end:f}=o[l],m=i[h],g=i[f];if(m===g){a.push(m);continue}const v=Math.abs((r-m[e])/(g[e]-m[e])),y=c(m,g,v,s.stepped);y[e]=t[e],a.push(y)}return a.length===1?a[0]:a}pathSegment(t,e,s){return $u(this)(t,this,e,s)}path(t,e,s){const r=this.segments,i=$u(this);let o=this._loop;e=e||0,s=s||this.points.length-e;for(const a of r)o&=i(t,this,a,{start:e,end:e+s-1});return!!o}draw(t,e,s,r){const i=this.options||{};(this.points||[]).length&&i.borderWidth&&(t.save(),lP(t,this,s,r),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}N(rs,"id","line"),N(rs,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),N(rs,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),N(rs,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Fm(n,t,e,s){const r=n.options,{[e]:i}=n.getProps([e],s);return Math.abs(t-i)<r.radius+r.hitRadius}class za extends en{constructor(e){super();N(this,"parsed");N(this,"skip");N(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,r){const i=this.options,{x:o,y:a}=this.getProps(["x","y"],r);return Math.pow(e-o,2)+Math.pow(s-a,2)<Math.pow(i.hitRadius+i.radius,2)}inXRange(e,s){return Fm(this,e,"x",s)}inYRange(e,s){return Fm(this,e,"y",s)}getCenterPoint(e){const{x:s,y:r}=this.getProps(["x","y"],e);return{x:s,y:r}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const r=s&&e.borderWidth||0;return(s+r)*2}draw(e,s){const r=this.options;this.skip||r.radius<.1||!Dn(this,s,this.size(r)/2)||(e.strokeStyle=r.borderColor,e.lineWidth=r.borderWidth,e.fillStyle=r.backgroundColor,Nu(e,r,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}N(za,"id","point"),N(za,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),N(za,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function tb(n,t){const{x:e,y:s,base:r,width:i,height:o}=n.getProps(["x","y","base","width","height"],t);let a,c,l,d,h;return n.horizontal?(h=o/2,a=Math.min(e,r),c=Math.max(e,r),l=s-h,d=s+h):(h=i/2,a=e-h,c=e+h,l=Math.min(s,r),d=Math.max(s,r)),{left:a,top:l,right:c,bottom:d}}function is(n,t,e,s){return n?0:le(t,e,s)}function uP(n,t,e){const s=n.options.borderWidth,r=n.borderSkipped,i=Av(s);return{t:is(r.top,i.top,0,e),r:is(r.right,i.right,0,t),b:is(r.bottom,i.bottom,0,e),l:is(r.left,i.left,0,t)}}function dP(n,t,e){const{enableBorderRadius:s}=n.getProps(["enableBorderRadius"]),r=n.options.borderRadius,i=$s(r),o=Math.min(t,e),a=n.borderSkipped,c=s||ut(r);return{topLeft:is(!c||a.top||a.left,i.topLeft,0,o),topRight:is(!c||a.top||a.right,i.topRight,0,o),bottomLeft:is(!c||a.bottom||a.left,i.bottomLeft,0,o),bottomRight:is(!c||a.bottom||a.right,i.bottomRight,0,o)}}function hP(n){const t=tb(n),e=t.right-t.left,s=t.bottom-t.top,r=uP(n,e/2,s/2),i=dP(n,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:i},inner:{x:t.left+r.l,y:t.top+r.t,w:e-r.l-r.r,h:s-r.t-r.b,radius:{topLeft:Math.max(0,i.topLeft-Math.max(r.t,r.l)),topRight:Math.max(0,i.topRight-Math.max(r.t,r.r)),bottomLeft:Math.max(0,i.bottomLeft-Math.max(r.b,r.l)),bottomRight:Math.max(0,i.bottomRight-Math.max(r.b,r.r))}}}}function Kl(n,t,e,s){const r=t===null,i=e===null,a=n&&!(r&&i)&&tb(n,s);return a&&(r||Rn(t,a.left,a.right))&&(i||Rn(e,a.top,a.bottom))}function fP(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function pP(n,t){n.rect(t.x,t.y,t.w,t.h)}function Ql(n,t,e={}){const s=n.x!==e.x?-t:0,r=n.y!==e.y?-t:0,i=(n.x+n.w!==e.x+e.w?t:0)-s,o=(n.y+n.h!==e.y+e.h?t:0)-r;return{x:n.x+s,y:n.y+r,w:n.w+i,h:n.h+o,radius:n.radius}}class Ha extends en{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:r}}=this,{inner:i,outer:o}=hP(this),a=fP(o.radius)?go:pP;t.save(),(o.w!==i.w||o.h!==i.h)&&(t.beginPath(),a(t,Ql(o,e,i)),t.clip(),a(t,Ql(i,-e,o)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,Ql(i,e)),t.fillStyle=r,t.fill(),t.restore()}inRange(t,e,s){return Kl(this,t,e,s)}inXRange(t,e){return Kl(this,t,null,e)}inYRange(t,e){return Kl(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:r,horizontal:i}=this.getProps(["x","y","base","horizontal"],t);return{x:i?(e+r)/2:e,y:i?s:(s+r)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}N(Ha,"id","bar"),N(Ha,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),N(Ha,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var mP=Object.freeze({__proto__:null,ArcElement:Fi,BarElement:Ha,LineElement:rs,PointElement:za});const Bu=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],$m=Bu.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function eb(n){return Bu[n%Bu.length]}function nb(n){return $m[n%$m.length]}function gP(n,t){return n.borderColor=eb(t),n.backgroundColor=nb(t),++t}function _P(n,t){return n.backgroundColor=n.data.map(()=>eb(t++)),t}function yP(n,t){return n.backgroundColor=n.data.map(()=>nb(t++)),t}function vP(n){let t=0;return(e,s)=>{const r=n.getDatasetMeta(s).controller;r instanceof Ls?t=_P(e,t):r instanceof Ji?t=yP(e,t):r&&(t=gP(e,t))}}function Bm(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function bP(n){return n&&(n.borderColor||n.backgroundColor)}function xP(){return $t.borderColor!=="rgba(0,0,0,0.1)"||$t.backgroundColor!=="rgba(0,0,0,0.1)"}var wP={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:s},options:r}=n.config,{elements:i}=r,o=Bm(s)||bP(r)||i&&Bm(i)||xP();if(!e.forceOverride&&o)return;const a=vP(n);s.forEach(a)}};function EP(n,t,e,s,r){const i=r.samples||s;if(i>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(i-2);let c=0;const l=t+e-1;let d=t,h,f,m,g,v;for(o[c++]=n[d],h=0;h<i-2;h++){let y=0,w=0,T;const k=Math.floor((h+1)*a)+1+t,D=Math.min(Math.floor((h+2)*a)+1,e)+t,P=D-k;for(T=k;T<D;T++)y+=n[T].x,w+=n[T].y;y/=P,w/=P;const M=Math.floor(h*a)+1+t,I=Math.min(Math.floor((h+1)*a)+1,e)+t,{x:b,y:x}=n[d];for(m=g=-1,T=M;T<I;T++)g=.5*Math.abs((b-y)*(n[T].y-x)-(b-n[T].x)*(w-x)),g>m&&(m=g,f=n[T],v=T);o[c++]=f,d=v}return o[c++]=n[l],o}function TP(n,t,e,s){let r=0,i=0,o,a,c,l,d,h,f,m,g,v;const y=[],w=t+e-1,T=n[t].x,D=n[w].x-T;for(o=t;o<t+e;++o){a=n[o],c=(a.x-T)/D*s,l=a.y;const P=c|0;if(P===d)l<g?(g=l,h=o):l>v&&(v=l,f=o),r=(i*r+a.x)/++i;else{const M=o-1;if(!at(h)&&!at(f)){const I=Math.min(h,f),b=Math.max(h,f);I!==m&&I!==M&&y.push({...n[I],x:r}),b!==m&&b!==M&&y.push({...n[b],x:r})}o>0&&M!==m&&y.push(n[M]),y.push(a),d=P,i=0,g=v=l,h=f=m=o}}return y}function sb(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Um(n){n.data.datasets.forEach(t=>{sb(t)})}function IP(n,t){const e=t.length;let s=0,r;const{iScale:i}=n,{min:o,max:a,minDefined:c,maxDefined:l}=i.getUserBounds();return c&&(s=le(Pn(t,i.axis,o).lo,0,e-1)),l?r=le(Pn(t,i.axis,a).hi+1,s,e)-s:r=e-s,{start:s,count:r}}var AP={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){Um(n);return}const s=n.width;n.data.datasets.forEach((r,i)=>{const{_data:o,indexAxis:a}=r,c=n.getDatasetMeta(i),l=o||r.data;if(Li([a,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const d=n.scales[c.xAxisID];if(d.type!=="linear"&&d.type!=="time"||n.options.parsing)return;let{start:h,count:f}=IP(c,l);const m=e.threshold||4*s;if(f<=m){sb(r);return}at(o)&&(r._data=l,delete r.data,Object.defineProperty(r,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(v){this._data=v}}));let g;switch(e.algorithm){case"lttb":g=EP(l,h,f,s,e);break;case"min-max":g=TP(l,h,f,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}r._decimated=g})},destroy(n){Um(n)}};function kP(n,t,e){const s=n.segments,r=n.points,i=t.points,o=[];for(const a of s){let{start:c,end:l}=a;l=sl(c,l,r);const d=Uu(e,r[c],r[l],a.loop);if(!t.segments){o.push({source:a,target:d,start:r[c],end:r[l]});continue}const h=Vv(t,d);for(const f of h){const m=Uu(e,i[f.start],i[f.end],f.loop),g=Lv(a,r,m);for(const v of g)o.push({source:v,target:f,start:{[e]:jm(d,m,"start",Math.max)},end:{[e]:jm(d,m,"end",Math.min)}})}}return o}function Uu(n,t,e,s){if(s)return;let r=t[n],i=e[n];return n==="angle"&&(r=xe(r),i=xe(i)),{property:n,start:r,end:i}}function SP(n,t){const{x:e=null,y:s=null}=n||{},r=t.points,i=[];return t.segments.forEach(({start:o,end:a})=>{a=sl(o,a,r);const c=r[o],l=r[a];s!==null?(i.push({x:c.x,y:s}),i.push({x:l.x,y:s})):e!==null&&(i.push({x:e,y:c.y}),i.push({x:e,y:l.y}))}),i}function sl(n,t,e){for(;t>n;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function jm(n,t,e,s){return n&&t?s(n[e],t[e]):n?n[e]:t?t[e]:0}function rb(n,t){let e=[],s=!1;return Vt(n)?(s=!0,e=n):e=SP(n,t),e.length?new rs({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function zm(n){return n&&n.fill!==!1}function CP(n,t,e){let r=n[t].fill;const i=[t];let o;if(!e)return r;for(;r!==!1&&i.indexOf(r)===-1;){if(!qt(r))return r;if(o=n[r],!o)return!1;if(o.visible)return r;i.push(r),r=o.fill}return!1}function RP(n,t,e){const s=OP(n);if(ut(s))return isNaN(s.value)?!1:s;let r=parseFloat(s);return qt(r)&&Math.floor(r)===r?PP(s[0],t,r,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function PP(n,t,e,s){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function DP(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:ut(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function MP(n,t,e){let s;return n==="start"?s=e:n==="end"?s=t.options.reverse?t.min:t.max:ut(n)?s=n.value:s=t.getBaseValue(),s}function OP(n){const t=n.options,e=t.fill;let s=st(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function NP(n){const{scale:t,index:e,line:s}=n,r=[],i=s.segments,o=s.points,a=LP(t,e);a.push(rb({x:null,y:t.bottom},s));for(let c=0;c<i.length;c++){const l=i[c];for(let d=l.start;d<=l.end;d++)VP(r,o[d],a)}return new rs({points:r,options:{}})}function LP(n,t){const e=[],s=n.getMatchingVisibleMetas("line");for(let r=0;r<s.length;r++){const i=s[r];if(i.index===t)break;i.hidden||e.unshift(i.dataset)}return e}function VP(n,t,e){const s=[];for(let r=0;r<e.length;r++){const i=e[r],{first:o,last:a,point:c}=FP(i,t,"x");if(!(!c||o&&a)){if(o)s.unshift(c);else if(n.push(c),!a)break}}n.push(...s)}function FP(n,t,e){const s=n.interpolate(t,e);if(!s)return{};const r=s[e],i=n.segments,o=n.points;let a=!1,c=!1;for(let l=0;l<i.length;l++){const d=i[l],h=o[d.start][e],f=o[d.end][e];if(Rn(r,h,f)){a=r===h,c=r===f;break}}return{first:a,last:c,point:s}}class ib{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:r,y:i,radius:o}=this;return e=e||{start:0,end:Nt},t.arc(r,i,o,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:r}=this,i=t.angle;return{x:e+Math.cos(i)*r,y:s+Math.sin(i)*r,angle:i}}}function $P(n){const{chart:t,fill:e,line:s}=n;if(qt(e))return BP(t,e);if(e==="stack")return NP(n);if(e==="shape")return!0;const r=UP(n);return r instanceof ib?r:rb(r,s)}function BP(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function UP(n){return(n.scale||{}).getPointPositionForValue?zP(n):jP(n)}function jP(n){const{scale:t={},fill:e}=n,s=DP(e,t);if(qt(s)){const r=t.isHorizontal();return{x:r?s:null,y:r?null:s}}return null}function zP(n){const{scale:t,fill:e}=n,s=t.options,r=t.getLabels().length,i=s.reverse?t.max:t.min,o=MP(e,t,i),a=[];if(s.grid.circular){const c=t.getPointPositionForValue(0,i);return new ib({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<r;++c)a.push(t.getPointPositionForValue(c,o));return a}function Xl(n,t,e){const s=$P(t),{chart:r,index:i,line:o,scale:a,axis:c}=t,l=o.options,d=l.fill,h=l.backgroundColor,{above:f=h,below:m=h}=d||{},g=r.getDatasetMeta(i),v=Fv(r,g);s&&o.points.length&&(Zc(n,e),HP(n,{line:o,target:s,above:f,below:m,area:e,scale:a,axis:c,clip:v}),tl(n))}function HP(n,t){const{line:e,target:s,above:r,below:i,area:o,scale:a,clip:c}=t,l=e._loop?"angle":t.axis;n.save();let d=i;i!==r&&(l==="x"?(Hm(n,s,o.top),Jl(n,{line:e,target:s,color:r,scale:a,property:l,clip:c}),n.restore(),n.save(),Hm(n,s,o.bottom)):l==="y"&&(qm(n,s,o.left),Jl(n,{line:e,target:s,color:i,scale:a,property:l,clip:c}),n.restore(),n.save(),qm(n,s,o.right),d=r)),Jl(n,{line:e,target:s,color:d,scale:a,property:l,clip:c}),n.restore()}function Hm(n,t,e){const{segments:s,points:r}=t;let i=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:l}=a,d=r[c],h=r[sl(c,l,r)];i?(n.moveTo(d.x,d.y),i=!1):(n.lineTo(d.x,e),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(h.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function qm(n,t,e){const{segments:s,points:r}=t;let i=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:l}=a,d=r[c],h=r[sl(c,l,r)];i?(n.moveTo(d.x,d.y),i=!1):(n.lineTo(e,d.y),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,h.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function Jl(n,t){const{line:e,target:s,property:r,color:i,scale:o,clip:a}=t,c=kP(e,s,r);for(const{source:l,target:d,start:h,end:f}of c){const{style:{backgroundColor:m=i}={}}=l,g=s!==!0;n.save(),n.fillStyle=m,qP(n,o,a,g&&Uu(r,h,f)),n.beginPath();const v=!!e.pathSegment(n,l);let y;if(g){v?n.closePath():Wm(n,s,f,r);const w=!!s.pathSegment(n,d,{move:v,reverse:!0});y=v&&w,y||Wm(n,s,h,r)}n.closePath(),n.fill(y?"evenodd":"nonzero"),n.restore()}}function qP(n,t,e,s){const r=t.chart.chartArea,{property:i,start:o,end:a}=s||{};if(i==="x"||i==="y"){let c,l,d,h;i==="x"?(c=o,l=r.top,d=a,h=r.bottom):(c=r.left,l=o,d=r.right,h=a),n.beginPath(),e&&(c=Math.max(c,e.left),d=Math.min(d,e.right),l=Math.max(l,e.top),h=Math.min(h,e.bottom)),n.rect(c,l,d-c,h-l),n.clip()}}function Wm(n,t,e,s){const r=t.interpolate(e,s);r&&n.lineTo(r.x,r.y)}var WP={id:"filler",afterDatasetsUpdate(n,t,e){const s=(n.data.datasets||[]).length,r=[];let i,o,a,c;for(o=0;o<s;++o)i=n.getDatasetMeta(o),a=i.dataset,c=null,a&&a.options&&a instanceof rs&&(c={visible:n.isDatasetVisible(o),index:o,fill:RP(a,o,s),chart:n,axis:i.controller.options.indexAxis,scale:i.vScale,line:a}),i.$filler=c,r.push(c);for(o=0;o<s;++o)c=r[o],!(!c||c.fill===!1)&&(c.fill=CP(r,o,e.propagate))},beforeDraw(n,t,e){const s=e.drawTime==="beforeDraw",r=n.getSortedVisibleDatasetMetas(),i=n.chartArea;for(let o=r.length-1;o>=0;--o){const a=r[o].$filler;a&&(a.line.updateControlPoints(i,a.axis),s&&a.fill&&Xl(n.ctx,a,i))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=n.getSortedVisibleDatasetMetas();for(let r=s.length-1;r>=0;--r){const i=s[r].$filler;zm(i)&&Xl(n.ctx,i,n.chartArea)}},beforeDatasetDraw(n,t,e){const s=t.meta.$filler;!zm(s)||e.drawTime!=="beforeDatasetDraw"||Xl(n.ctx,s,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Gm=(n,t)=>{let{boxHeight:e=t,boxWidth:s=t}=n;return n.usePointStyle&&(e=Math.min(e,t),s=n.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},GP=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Ym extends en{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=Pt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,r)=>t.sort(s,r,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,r=re(s.font),i=r.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=Gm(s,i);let l,d;e.font=r.string,this.isHorizontal()?(l=this.maxWidth,d=this._fitRows(o,i,a,c)+10):(d=this.maxHeight,l=this._fitCols(o,r,a,c)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,r){const{ctx:i,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],d=r+a;let h=t;i.textAlign="left",i.textBaseline="middle";let f=-1,m=-d;return this.legendItems.forEach((g,v)=>{const y=s+e/2+i.measureText(g.text).width;(v===0||l[l.length-1]+y+2*a>o)&&(h+=d,l[l.length-(v>0?0:1)]=0,m+=d,f++),c[v]={left:0,top:m,row:f,width:y,height:r},l[l.length-1]+=y+a}),h}_fitCols(t,e,s,r){const{ctx:i,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],d=o-t;let h=a,f=0,m=0,g=0,v=0;return this.legendItems.forEach((y,w)=>{const{itemWidth:T,itemHeight:k}=YP(s,e,i,y,r);w>0&&m+k+2*a>d&&(h+=f+a,l.push({width:f,height:m}),g+=f+a,v++,f=m=0),c[w]={left:g,top:m,col:v,width:T,height:k},f=Math.max(f,T),m+=k+a}),h+=f,l.push({width:f,height:m}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:r},rtl:i}}=this,o=Nr(i,this.left,this.width);if(this.isHorizontal()){let a=0,c=ve(s,this.left+r,this.right-this.lineWidths[a]);for(const l of e)a!==l.row&&(a=l.row,c=ve(s,this.left+r,this.right-this.lineWidths[a])),l.top+=this.top+t+r,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+r}else{let a=0,c=ve(s,this.top+t+r,this.bottom-this.columnSizes[a].height);for(const l of e)l.col!==a&&(a=l.col,c=ve(s,this.top+t+r,this.bottom-this.columnSizes[a].height)),l.top=c,l.left+=this.left+r,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+r}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Zc(t,this),this._draw(),tl(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:r}=this,{align:i,labels:o}=t,a=$t.color,c=Nr(t.rtl,this.left,this.width),l=re(o.font),{padding:d}=o,h=l.size,f=h/2;let m;this.drawTitle(),r.textAlign=c.textAlign("left"),r.textBaseline="middle",r.lineWidth=.5,r.font=l.string;const{boxWidth:g,boxHeight:v,itemHeight:y}=Gm(o,h),w=function(M,I,b){if(isNaN(g)||g<=0||isNaN(v)||v<0)return;r.save();const x=st(b.lineWidth,1);if(r.fillStyle=st(b.fillStyle,a),r.lineCap=st(b.lineCap,"butt"),r.lineDashOffset=st(b.lineDashOffset,0),r.lineJoin=st(b.lineJoin,"miter"),r.lineWidth=x,r.strokeStyle=st(b.strokeStyle,a),r.setLineDash(st(b.lineDash,[])),o.usePointStyle){const A={radius:v*Math.SQRT2/2,pointStyle:b.pointStyle,rotation:b.rotation,borderWidth:x},C=c.xPlus(M,g/2),R=I+f;Iv(r,A,C,R,o.pointStyleWidth&&g)}else{const A=I+Math.max((h-v)/2,0),C=c.leftForLtr(M,g),R=$s(b.borderRadius);r.beginPath(),Object.values(R).some(S=>S!==0)?go(r,{x:C,y:A,w:g,h:v,radius:R}):r.rect(C,A,g,v),r.fill(),x!==0&&r.stroke()}r.restore()},T=function(M,I,b){tr(r,b.text,M,I+y/2,l,{strikethrough:b.hidden,textAlign:c.textAlign(b.textAlign)})},k=this.isHorizontal(),D=this._computeTitleHeight();k?m={x:ve(i,this.left+d,this.right-s[0]),y:this.top+d+D,line:0}:m={x:this.left+d,y:ve(i,this.top+D+d,this.bottom-e[0].height),line:0},Mv(this.ctx,t.textDirection);const P=y+d;this.legendItems.forEach((M,I)=>{r.strokeStyle=M.fontColor,r.fillStyle=M.fontColor;const b=r.measureText(M.text).width,x=c.textAlign(M.textAlign||(M.textAlign=o.textAlign)),A=g+f+b;let C=m.x,R=m.y;c.setWidth(this.width),k?I>0&&C+A+d>this.right&&(R=m.y+=P,m.line++,C=m.x=ve(i,this.left+d,this.right-s[m.line])):I>0&&R+P>this.bottom&&(C=m.x=C+e[m.line].width+d,m.line++,R=m.y=ve(i,this.top+D+d,this.bottom-e[m.line].height));const S=c.x(C);if(w(S,R,M),C=p1(x,C+g+f,k?C+A:this.right,t.rtl),T(c.x(C),R,M),k)m.x+=A+d;else if(typeof M.text!="string"){const et=l.lineHeight;m.y+=ob(M,et)+d}else m.y+=P}),Ov(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=re(e.font),r=Ae(e.padding);if(!e.display)return;const i=Nr(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=s.size/2,l=r.top+c;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+l,h=ve(t.align,h,this.right-f);else{const g=this.columnSizes.reduce((v,y)=>Math.max(v,y.height),0);d=l+ve(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const m=ve(a,h,h+f);o.textAlign=i.textAlign(sh(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=s.string,tr(o,e.text,m,d,s)}_computeTitleHeight(){const t=this.options.title,e=re(t.font),s=Ae(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,r,i;if(Rn(t,this.left,this.right)&&Rn(e,this.top,this.bottom)){for(i=this.legendHitBoxes,s=0;s<i.length;++s)if(r=i[s],Rn(t,r.left,r.left+r.width)&&Rn(e,r.top,r.top+r.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!XP(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const r=this._hoveredItem,i=GP(r,s);r&&!i&&Pt(e.onLeave,[t,r,this],this),this._hoveredItem=s,s&&!i&&Pt(e.onHover,[t,s,this],this)}else s&&Pt(e.onClick,[t,s,this],this)}}function YP(n,t,e,s,r){const i=KP(s,n,t,e),o=QP(r,s,t.lineHeight);return{itemWidth:i,itemHeight:o}}function KP(n,t,e,s){let r=n.text;return r&&typeof r!="string"&&(r=r.reduce((i,o)=>i.length>o.length?i:o)),t+e.size/2+s.measureText(r).width}function QP(n,t,e){let s=n;return typeof t.text!="string"&&(s=ob(t,e)),s}function ob(n,t){const e=n.text?n.text.length:0;return t*e}function XP(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var JP={id:"legend",_element:Ym,start(n,t,e){const s=n.legend=new Ym({ctx:n.ctx,options:e,chart:n});Ee.configure(n,s,e),Ee.addBox(n,s)},stop(n){Ee.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const s=n.legend;Ee.configure(n,s,e),s.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const s=t.datasetIndex,r=e.chart;r.isDatasetVisible(s)?(r.hide(s),t.hidden=!0):(r.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:r,color:i,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const l=c.controller.getStyle(e?0:void 0),d=Ae(l.borderWidth);return{text:t[c.index].label,fillStyle:l.backgroundColor,fontColor:i,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:l.borderColor,pointStyle:s||l.pointStyle,rotation:l.rotation,textAlign:r||l.textAlign,borderRadius:o&&(a||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class hh extends en{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const r=Vt(s.text)?s.text.length:1;this._padding=Ae(s.padding);const i=r*re(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=i:this.width=i}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:r,right:i,options:o}=this,a=o.align;let c=0,l,d,h;return this.isHorizontal()?(d=ve(a,s,i),h=e+t,l=i-s):(o.position==="left"?(d=s+t,h=ve(a,r,e),c=yt*-.5):(d=i-t,h=ve(a,e,r),c=yt*.5),l=r-e),{titleX:d,titleY:h,maxWidth:l,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=re(e.font),i=s.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(i);tr(t,e.text,0,0,s,{color:e.color,maxWidth:c,rotation:l,textAlign:sh(e.align),textBaseline:"middle",translation:[o,a]})}}function ZP(n,t){const e=new hh({ctx:n.ctx,options:t,chart:n});Ee.configure(n,e,t),Ee.addBox(n,e),n.titleBlock=e}var tD={id:"title",_element:hh,start(n,t,e){ZP(n,e)},stop(n){const t=n.titleBlock;Ee.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const s=n.titleBlock;Ee.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ta=new WeakMap;var eD={id:"subtitle",start(n,t,e){const s=new hh({ctx:n.ctx,options:e,chart:n});Ee.configure(n,s,e),Ee.addBox(n,s),Ta.set(n,s)},stop(n){Ee.removeBox(n,Ta.get(n)),Ta.delete(n)},beforeUpdate(n,t,e){const s=Ta.get(n);Ee.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const $i={average(n){if(!n.length)return!1;let t,e,s=new Set,r=0,i=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const c=a.tooltipPosition();s.add(c.x),r+=c.y,++i}}return i===0||s.size===0?!1:{x:[...s].reduce((a,c)=>a+c)/s.size,y:r/i}},nearest(n,t){if(!n.length)return!1;let e=t.x,s=t.y,r=Number.POSITIVE_INFINITY,i,o,a;for(i=0,o=n.length;i<o;++i){const c=n[i].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),d=Mu(t,l);d<r&&(r=d,a=c)}}if(a){const c=a.tooltipPosition();e=c.x,s=c.y}return{x:e,y:s}}};function sn(n,t){return t&&(Vt(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function Tn(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function nD(n,t){const{element:e,datasetIndex:s,index:r}=t,i=n.getDatasetMeta(s).controller,{label:o,value:a}=i.getLabelAndValue(r);return{chart:n,label:o,parsed:i.getParsed(r),raw:n.data.datasets[s].data[r],formattedValue:a,dataset:i.getDataset(),dataIndex:r,datasetIndex:s,element:e}}function Km(n,t){const e=n.chart.ctx,{body:s,footer:r,title:i}=n,{boxWidth:o,boxHeight:a}=t,c=re(t.bodyFont),l=re(t.titleFont),d=re(t.footerFont),h=i.length,f=r.length,m=s.length,g=Ae(t.padding);let v=g.height,y=0,w=s.reduce((D,P)=>D+P.before.length+P.lines.length+P.after.length,0);if(w+=n.beforeBody.length+n.afterBody.length,h&&(v+=h*l.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),w){const D=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;v+=m*D+(w-m)*c.lineHeight+(w-1)*t.bodySpacing}f&&(v+=t.footerMarginTop+f*d.lineHeight+(f-1)*t.footerSpacing);let T=0;const k=function(D){y=Math.max(y,e.measureText(D).width+T)};return e.save(),e.font=l.string,At(n.title,k),e.font=c.string,At(n.beforeBody.concat(n.afterBody),k),T=t.displayColors?o+2+t.boxPadding:0,At(s,D=>{At(D.before,k),At(D.lines,k),At(D.after,k)}),T=0,e.font=d.string,At(n.footer,k),e.restore(),y+=g.width,{width:y,height:v}}function sD(n,t){const{y:e,height:s}=t;return e<s/2?"top":e>n.height-s/2?"bottom":"center"}function rD(n,t,e,s){const{x:r,width:i}=s,o=e.caretSize+e.caretPadding;if(n==="left"&&r+i+o>t.width||n==="right"&&r-i-o<0)return!0}function iD(n,t,e,s){const{x:r,width:i}=e,{width:o,chartArea:{left:a,right:c}}=n;let l="center";return s==="center"?l=r<=(a+c)/2?"left":"right":r<=i/2?l="left":r>=o-i/2&&(l="right"),rD(l,n,t,e)&&(l="center"),l}function Qm(n,t,e){const s=e.yAlign||t.yAlign||sD(n,e);return{xAlign:e.xAlign||t.xAlign||iD(n,t,e,s),yAlign:s}}function oD(n,t){let{x:e,width:s}=n;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function aD(n,t,e){let{y:s,height:r}=n;return t==="top"?s+=e:t==="bottom"?s-=r+e:s-=r/2,s}function Xm(n,t,e,s){const{caretSize:r,caretPadding:i,cornerRadius:o}=n,{xAlign:a,yAlign:c}=e,l=r+i,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:m}=$s(o);let g=oD(t,a);const v=aD(t,c,l);return c==="center"?a==="left"?g+=l:a==="right"&&(g-=l):a==="left"?g-=Math.max(d,f)+r:a==="right"&&(g+=Math.max(h,m)+r),{x:le(g,0,s.width-t.width),y:le(v,0,s.height-t.height)}}function Ia(n,t,e){const s=Ae(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-s.right:n.x+s.left}function Jm(n){return sn([],Tn(n))}function cD(n,t,e){return vs(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Zm(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const ab={beforeTitle:wn,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:wn,beforeBody:wn,beforeLabel:wn,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return at(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:wn,afterBody:wn,beforeFooter:wn,footer:wn,afterFooter:wn};function Re(n,t,e,s){const r=n[t].call(e,s);return typeof r>"u"?ab[t].call(e,s):r}class ju extends en{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),r=s.enabled&&e.options.animation&&s.animations,i=new $v(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||(this.$context=cD(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,r=Re(s,"beforeTitle",this,t),i=Re(s,"title",this,t),o=Re(s,"afterTitle",this,t);let a=[];return a=sn(a,Tn(r)),a=sn(a,Tn(i)),a=sn(a,Tn(o)),a}getBeforeBody(t,e){return Jm(Re(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,r=[];return At(t,i=>{const o={before:[],lines:[],after:[]},a=Zm(s,i);sn(o.before,Tn(Re(a,"beforeLabel",this,i))),sn(o.lines,Re(a,"label",this,i)),sn(o.after,Tn(Re(a,"afterLabel",this,i))),r.push(o)}),r}getAfterBody(t,e){return Jm(Re(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,r=Re(s,"beforeFooter",this,t),i=Re(s,"footer",this,t),o=Re(s,"afterFooter",this,t);let a=[];return a=sn(a,Tn(r)),a=sn(a,Tn(i)),a=sn(a,Tn(o)),a}_createItems(t){const e=this._active,s=this.chart.data,r=[],i=[],o=[];let a=[],c,l;for(c=0,l=e.length;c<l;++c)a.push(nD(this.chart,e[c]));return t.filter&&(a=a.filter((d,h,f)=>t.filter(d,h,f,s))),t.itemSort&&(a=a.sort((d,h)=>t.itemSort(d,h,s))),At(a,d=>{const h=Zm(t.callbacks,d);r.push(Re(h,"labelColor",this,d)),i.push(Re(h,"labelPointStyle",this,d)),o.push(Re(h,"labelTextColor",this,d))}),this.labelColors=r,this.labelPointStyles=i,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const s=this.options.setContext(this.getContext()),r=this._active;let i,o=[];if(!r.length)this.opacity!==0&&(i={opacity:0});else{const a=$i[s.position].call(this,r,this._eventPosition);o=this._createItems(s),this.title=this.getTitle(o,s),this.beforeBody=this.getBeforeBody(o,s),this.body=this.getBody(o,s),this.afterBody=this.getAfterBody(o,s),this.footer=this.getFooter(o,s);const c=this._size=Km(this,s),l=Object.assign({},a,c),d=Qm(this.chart,s,l),h=Xm(s,l,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,i={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,i&&this._resolveAnimations().update(this,i),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,r){const i=this.getCaretPosition(t,s,r);e.lineTo(i.x1,i.y1),e.lineTo(i.x2,i.y2),e.lineTo(i.x3,i.y3)}getCaretPosition(t,e,s){const{xAlign:r,yAlign:i}=this,{caretSize:o,cornerRadius:a}=s,{topLeft:c,topRight:l,bottomLeft:d,bottomRight:h}=$s(a),{x:f,y:m}=t,{width:g,height:v}=e;let y,w,T,k,D,P;return i==="center"?(D=m+v/2,r==="left"?(y=f,w=y-o,k=D+o,P=D-o):(y=f+g,w=y+o,k=D-o,P=D+o),T=y):(r==="left"?w=f+Math.max(c,d)+o:r==="right"?w=f+g-Math.max(l,h)-o:w=this.caretX,i==="top"?(k=m,D=k-o,y=w-o,T=w+o):(k=m+v,D=k+o,y=w+o,T=w-o),P=k),{x1:y,x2:w,x3:T,y1:k,y2:D,y3:P}}drawTitle(t,e,s){const r=this.title,i=r.length;let o,a,c;if(i){const l=Nr(s.rtl,this.x,this.width);for(t.x=Ia(this,s.titleAlign,s),e.textAlign=l.textAlign(s.titleAlign),e.textBaseline="middle",o=re(s.titleFont),a=s.titleSpacing,e.fillStyle=s.titleColor,e.font=o.string,c=0;c<i;++c)e.fillText(r[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===i&&(t.y+=s.titleMarginBottom-a)}}_drawColorBox(t,e,s,r,i){const o=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:c,boxWidth:l}=i,d=re(i.bodyFont),h=Ia(this,"left",i),f=r.x(h),m=c<d.lineHeight?(d.lineHeight-c)/2:0,g=e.y+m;if(i.usePointStyle){const v={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},y=r.leftForLtr(f,l)+l/2,w=g+c/2;t.strokeStyle=i.multiKeyBackground,t.fillStyle=i.multiKeyBackground,Nu(t,v,y,w),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Nu(t,v,y,w)}else{t.lineWidth=ut(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const v=r.leftForLtr(f,l),y=r.leftForLtr(r.xPlus(f,1),l-2),w=$s(o.borderRadius);Object.values(w).some(T=>T!==0)?(t.beginPath(),t.fillStyle=i.multiKeyBackground,go(t,{x:v,y:g,w:l,h:c,radius:w}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),go(t,{x:y,y:g+1,w:l-2,h:c-2,radius:w}),t.fill()):(t.fillStyle=i.multiKeyBackground,t.fillRect(v,g,l,c),t.strokeRect(v,g,l,c),t.fillStyle=o.backgroundColor,t.fillRect(y,g+1,l-2,c-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:r}=this,{bodySpacing:i,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:d}=s,h=re(s.bodyFont);let f=h.lineHeight,m=0;const g=Nr(s.rtl,this.x,this.width),v=function(b){e.fillText(b,g.x(t.x+m),t.y+f/2),t.y+=f+i},y=g.textAlign(o);let w,T,k,D,P,M,I;for(e.textAlign=o,e.textBaseline="middle",e.font=h.string,t.x=Ia(this,y,s),e.fillStyle=s.bodyColor,At(this.beforeBody,v),m=a&&y!=="right"?o==="center"?l/2+d:l+2+d:0,D=0,M=r.length;D<M;++D){for(w=r[D],T=this.labelTextColors[D],e.fillStyle=T,At(w.before,v),k=w.lines,a&&k.length&&(this._drawColorBox(e,t,D,g,s),f=Math.max(h.lineHeight,c)),P=0,I=k.length;P<I;++P)v(k[P]),f=h.lineHeight;At(w.after,v)}m=0,f=h.lineHeight,At(this.afterBody,v),t.y-=i}drawFooter(t,e,s){const r=this.footer,i=r.length;let o,a;if(i){const c=Nr(s.rtl,this.x,this.width);for(t.x=Ia(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=c.textAlign(s.footerAlign),e.textBaseline="middle",o=re(s.footerFont),e.fillStyle=s.footerColor,e.font=o.string,a=0;a<i;++a)e.fillText(r[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+s.footerSpacing}}drawBackground(t,e,s,r){const{xAlign:i,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:d}=s,{topLeft:h,topRight:f,bottomLeft:m,bottomRight:g}=$s(r.cornerRadius);e.fillStyle=r.backgroundColor,e.strokeStyle=r.borderColor,e.lineWidth=r.borderWidth,e.beginPath(),e.moveTo(a+h,c),o==="top"&&this.drawCaret(t,e,s,r),e.lineTo(a+l-f,c),e.quadraticCurveTo(a+l,c,a+l,c+f),o==="center"&&i==="right"&&this.drawCaret(t,e,s,r),e.lineTo(a+l,c+d-g),e.quadraticCurveTo(a+l,c+d,a+l-g,c+d),o==="bottom"&&this.drawCaret(t,e,s,r),e.lineTo(a+m,c+d),e.quadraticCurveTo(a,c+d,a,c+d-m),o==="center"&&i==="left"&&this.drawCaret(t,e,s,r),e.lineTo(a,c+h),e.quadraticCurveTo(a,c,a+h,c),e.closePath(),e.fill(),r.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,r=s&&s.x,i=s&&s.y;if(r||i){const o=$i[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Km(this,t),c=Object.assign({},o,this._size),l=Qm(e,t,c),d=Xm(t,c,l,e);(r._to!==d.x||i._to!==d.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const r={width:this.width,height:this.height},i={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const o=Ae(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=s,this.drawBackground(i,t,r,e),Mv(t,e.textDirection),i.y+=o.top,this.drawTitle(i,t,e),this.drawBody(i,t,e),this.drawFooter(i,t,e),Ov(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,r=t.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),i=!dc(s,r),o=this._positionChanged(r,e);(i||o)&&(this._active=r,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const r=this.options,i=this._active||[],o=this._getActiveElements(t,i,e,s),a=this._positionChanged(o,t),c=e||!dc(o,i)||a;return c&&(this._active=o,(r.enabled||r.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,s,r){const i=this.options;if(t.type==="mouseout")return[];if(!r)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,i.mode,i,s);return i.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:s,caretY:r,options:i}=this,o=$i[i.position].call(this,t,e);return o!==!1&&(s!==o.x||r!==o.y)}}N(ju,"positioners",$i);var lD={id:"tooltip",_element:ju,positioners:$i,afterInit(n,t,e){e&&(n.tooltip=new ju({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:ab},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},uD=Object.freeze({__proto__:null,Colors:wP,Decimation:AP,Filler:WP,Legend:JP,SubTitle:eD,Title:tD,Tooltip:lD});const dD=(n,t,e,s)=>(typeof t=="string"?(e=n.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function hD(n,t,e,s){const r=n.indexOf(t);if(r===-1)return dD(n,t,e,s);const i=n.lastIndexOf(t);return r!==i?e:r}const fD=(n,t)=>n===null?null:le(Math.round(n),0,t);function tg(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class zu extends or{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:r,label:i}of e)s[r]===i&&s.splice(r,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(at(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:hD(s,t,st(e,t),this._addedLabels),fD(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:r}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(r=this.getLabels().length-1)),this.min=s,this.max=r}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,r=[];let i=this.getLabels();i=t===0&&e===i.length-1?i:i.slice(t,e+1),this._valueRange=Math.max(i.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let o=t;o<=e;o++)r.push({value:o});return r}getLabelForValue(t){return tg.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}N(zu,"id","category"),N(zu,"defaults",{ticks:{callback:tg}});function pD(n,t){const e=[],{bounds:r,step:i,min:o,max:a,precision:c,count:l,maxTicks:d,maxDigits:h,includeBounds:f}=n,m=i||1,g=d-1,{min:v,max:y}=t,w=!at(o),T=!at(a),k=!at(l),D=(y-v)/(h+1);let P=Kp((y-v)/g/m)*m,M,I,b,x;if(P<1e-14&&!w&&!T)return[{value:v},{value:y}];x=Math.ceil(y/P)-Math.floor(v/P),x>g&&(P=Kp(x*P/g/m)*m),at(c)||(M=Math.pow(10,c),P=Math.ceil(P*M)/M),r==="ticks"?(I=Math.floor(v/P)*P,b=Math.ceil(y/P)*P):(I=v,b=y),w&&T&&i&&a1((a-o)/i,P/1e3)?(x=Math.round(Math.min((a-o)/P,d)),P=(a-o)/x,I=o,b=a):k?(I=w?o:I,b=T?a:b,x=l-1,P=(b-I)/x):(x=(b-I)/P,Ki(x,Math.round(x),P/1e3)?x=Math.round(x):x=Math.ceil(x));const A=Math.max(Qp(P),Qp(I));M=Math.pow(10,at(c)?A:c),I=Math.round(I*M)/M,b=Math.round(b*M)/M;let C=0;for(w&&(f&&I!==o?(e.push({value:o}),I<o&&C++,Ki(Math.round((I+C*P)*M)/M,o,eg(o,D,n))&&C++):I<o&&C++);C<x;++C){const R=Math.round((I+C*P)*M)/M;if(T&&R>a)break;e.push({value:R})}return T&&f&&b!==a?e.length&&Ki(e[e.length-1].value,a,eg(a,D,n))?e[e.length-1].value=a:e.push({value:a}):(!T||b===a)&&e.push({value:b}),e}function eg(n,t,{horizontal:e,minRotation:s}){const r=Xe(s),i=(e?Math.sin(r):Math.cos(r))||.001,o=.75*t*(""+n).length;return Math.min(t/i,o)}class yc extends or{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return at(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:r,max:i}=this;const o=c=>r=e?r:c,a=c=>i=s?i:c;if(t){const c=mn(r),l=mn(i);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(r===i){let c=i===0?1:Math.abs(i*.05);a(i+c),t||o(r-c)}this.min=r,this.max=i}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,r;return s?(r=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,r>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${r} ticks. Limiting to 1000.`),r=1e3)):(r=this.computeTickLimit(),e=e||11),e&&(r=Math.min(e,r)),r}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const r={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},i=this._range||this,o=pD(r,i);return t.bounds==="ticks"&&gv(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const r=(s-e)/Math.max(t.length-1,1)/2;e-=r,s+=r}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return $o(t,this.chart.options.locale,this.options.ticks.format)}}class Hu extends yc{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=qt(t)?t:0,this.max=qt(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=Xe(this.options.ticks.minRotation),r=(t?Math.sin(s):Math.cos(s))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,i.lineHeight/r))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}N(Hu,"id","linear"),N(Hu,"defaults",{ticks:{callback:Jc.formatters.numeric}});const yo=n=>Math.floor(ns(n)),ks=(n,t)=>Math.pow(10,yo(n)+t);function ng(n){return n/Math.pow(10,yo(n))===1}function sg(n,t,e){const s=Math.pow(10,e),r=Math.floor(n/s);return Math.ceil(t/s)-r}function mD(n,t){const e=t-n;let s=yo(e);for(;sg(n,t,s)>10;)s++;for(;sg(n,t,s)<10;)s--;return Math.min(s,yo(n))}function gD(n,{min:t,max:e}){t=Ve(n.min,t);const s=[],r=yo(t);let i=mD(t,e),o=i<0?Math.pow(10,Math.abs(i)):1;const a=Math.pow(10,i),c=r>i?Math.pow(10,r):0,l=Math.round((t-c)*o)/o,d=Math.floor((t-c)/a/10)*a*10;let h=Math.floor((l-d)/Math.pow(10,i)),f=Ve(n.min,Math.round((c+d+h*Math.pow(10,i))*o)/o);for(;f<e;)s.push({value:f,major:ng(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(i++,h=2,o=i>=0?1:o),f=Math.round((c+d+h*Math.pow(10,i))*o)/o;const m=Ve(n.max,f);return s.push({value:m,major:ng(m),significand:h}),s}class qu extends or{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=yc.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return qt(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=qt(t)?Math.max(0,t):null,this.max=qt(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!qt(this._userMin)&&(this.min=t===ks(this.min,0)?ks(this.min,-1):ks(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,r=this.max;const i=a=>s=t?s:a,o=a=>r=e?r:a;s===r&&(s<=0?(i(1),o(10)):(i(ks(s,-1)),o(ks(r,1)))),s<=0&&i(ks(r,-1)),r<=0&&o(ks(s,1)),this.min=s,this.max=r}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=gD(e,this);return t.bounds==="ticks"&&gv(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":$o(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=ns(t),this._valueRange=ns(this.max)-ns(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(ns(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}N(qu,"id","logarithmic"),N(qu,"defaults",{ticks:{callback:Jc.formatters.logarithmic,major:{enabled:!0}}});function Wu(n){const t=n.ticks;if(t.display&&n.display){const e=Ae(t.backdropPadding);return st(t.font&&t.font.size,$t.font.size)+e.height}return 0}function _D(n,t,e){return e=Vt(e)?e:[e],{w:T1(n,t.string,e),h:e.length*t.lineHeight}}function rg(n,t,e,s,r){return n===s||n===r?{start:t-e/2,end:t+e/2}:n<s||n>r?{start:t-e,end:t}:{start:t,end:t+e}}function yD(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),s=[],r=[],i=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?yt/i:0;for(let c=0;c<i;c++){const l=o.setContext(n.getPointLabelContext(c));r[c]=l.padding;const d=n.getPointPosition(c,n.drawingArea+r[c],a),h=re(l.font),f=_D(n.ctx,h,n._pointLabels[c]);s[c]=f;const m=xe(n.getIndexAngle(c)+a),g=Math.round(eh(m)),v=rg(g,d.x,f.w,0,180),y=rg(g,d.y,f.h,90,270);vD(e,t,m,v,y)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=wD(n,s,r)}function vD(n,t,e,s,r){const i=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,c=0;s.start<t.l?(a=(t.l-s.start)/i,n.l=Math.min(n.l,t.l-a)):s.end>t.r&&(a=(s.end-t.r)/i,n.r=Math.max(n.r,t.r+a)),r.start<t.t?(c=(t.t-r.start)/o,n.t=Math.min(n.t,t.t-c)):r.end>t.b&&(c=(r.end-t.b)/o,n.b=Math.max(n.b,t.b+c))}function bD(n,t,e){const s=n.drawingArea,{extra:r,additionalAngle:i,padding:o,size:a}=e,c=n.getPointPosition(t,s+r+o,i),l=Math.round(eh(xe(c.angle+Xt))),d=ID(c.y,a.h,l),h=ED(l),f=TD(c.x,a.w,h);return{visible:!0,x:c.x,y:d,textAlign:h,left:f,top:d,right:f+a.w,bottom:d+a.h}}function xD(n,t){if(!t)return!0;const{left:e,top:s,right:r,bottom:i}=n;return!(Dn({x:e,y:s},t)||Dn({x:e,y:i},t)||Dn({x:r,y:s},t)||Dn({x:r,y:i},t))}function wD(n,t,e){const s=[],r=n._pointLabels.length,i=n.options,{centerPointLabels:o,display:a}=i.pointLabels,c={extra:Wu(i)/2,additionalAngle:o?yt/r:0};let l;for(let d=0;d<r;d++){c.padding=e[d],c.size=t[d];const h=bD(n,d,c);s.push(h),a==="auto"&&(h.visible=xD(h,l),h.visible&&(l=h))}return s}function ED(n){return n===0||n===180?"center":n<180?"left":"right"}function TD(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function ID(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function AD(n,t,e){const{left:s,top:r,right:i,bottom:o}=e,{backdropColor:a}=t;if(!at(a)){const c=$s(t.borderRadius),l=Ae(t.backdropPadding);n.fillStyle=a;const d=s-l.left,h=r-l.top,f=i-s+l.width,m=o-r+l.height;Object.values(c).some(g=>g!==0)?(n.beginPath(),go(n,{x:d,y:h,w:f,h:m,radius:c}),n.fill()):n.fillRect(d,h,f,m)}}function kD(n,t){const{ctx:e,options:{pointLabels:s}}=n;for(let r=t-1;r>=0;r--){const i=n._pointLabelItems[r];if(!i.visible)continue;const o=s.setContext(n.getPointLabelContext(r));AD(e,o,i);const a=re(o.font),{x:c,y:l,textAlign:d}=i;tr(e,n._pointLabels[r],c,l+a.lineHeight/2,a,{color:o.color,textAlign:d,textBaseline:"middle"})}}function cb(n,t,e,s){const{ctx:r}=n;if(e)r.arc(n.xCenter,n.yCenter,t,0,Nt);else{let i=n.getPointPosition(0,t);r.moveTo(i.x,i.y);for(let o=1;o<s;o++)i=n.getPointPosition(o,t),r.lineTo(i.x,i.y)}}function SD(n,t,e,s,r){const i=n.ctx,o=t.circular,{color:a,lineWidth:c}=t;!o&&!s||!a||!c||e<0||(i.save(),i.strokeStyle=a,i.lineWidth=c,i.setLineDash(r.dash||[]),i.lineDashOffset=r.dashOffset,i.beginPath(),cb(n,e,o,s),i.closePath(),i.stroke(),i.restore())}function CD(n,t,e){return vs(n,{label:e,index:t,type:"pointLabel"})}class Bi extends yc{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Ae(Wu(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=qt(t)&&!isNaN(t)?t:0,this.max=qt(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Wu(this.options))}generateTickLabels(t){yc.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const r=Pt(this.options.pointLabels.callback,[e,s],this);return r||r===0?r:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?yD(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,r){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,r))}getIndexAngle(t){const e=Nt/(this._pointLabels.length||1),s=this.options.startAngle||0;return xe(t*e+Xe(s))}getDistanceFromCenterForValue(t){if(at(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(at(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return CD(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const r=this.getIndexAngle(t)-Xt+s;return{x:Math.cos(r)*e+this.xCenter,y:Math.sin(r)*e+this.yCenter,angle:r}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:r,bottom:i}=this._pointLabelItems[t];return{left:e,top:s,right:r,bottom:i}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),cb(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:r,border:i}=e,o=this._pointLabels.length;let a,c,l;if(e.pointLabels.display&&kD(this,o),r.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){c=this.getDistanceFromCenterForValue(d.value);const f=this.getContext(h),m=r.setContext(f),g=i.setContext(f);SD(this,m,c,o,g)}}),s.display){for(t.save(),a=o-1;a>=0;a--){const d=s.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=d;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),l=this.getPointPosition(a,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const r=this.getIndexAngle(0);let i,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(r),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const l=s.setContext(this.getContext(c)),d=re(l.font);if(i=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){t.font=d.string,o=t.measureText(a.label).width,t.fillStyle=l.backdropColor;const h=Ae(l.backdropPadding);t.fillRect(-o/2-h.left,-i-d.size/2-h.top,o+h.width,d.size+h.height)}tr(t,a.label,0,-i,d,{color:l.color,strokeColor:l.textStrokeColor,strokeWidth:l.textStrokeWidth})}),t.restore()}drawTitle(){}}N(Bi,"id","radialLinear"),N(Bi,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Jc.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),N(Bi,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),N(Bi,"descriptors",{angleLines:{_fallback:"grid"}});const rl={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Me=Object.keys(rl);function ig(n,t){return n-t}function og(n,t){if(at(t))return null;const e=n._adapter,{parser:s,round:r,isoWeekday:i}=n._parseOpts;let o=t;return typeof s=="function"&&(o=s(o)),qt(o)||(o=typeof s=="string"?e.parse(o,s):e.parse(o)),o===null?null:(r&&(o=r==="week"&&(zr(i)||i===!0)?e.startOf(o,"isoWeek",i):e.startOf(o,r)),+o)}function ag(n,t,e,s){const r=Me.length;for(let i=Me.indexOf(n);i<r-1;++i){const o=rl[Me[i]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=s)return Me[i]}return Me[r-1]}function RD(n,t,e,s,r){for(let i=Me.length-1;i>=Me.indexOf(e);i--){const o=Me[i];if(rl[o].common&&n._adapter.diff(r,s,o)>=t-1)return o}return Me[e?Me.indexOf(e):0]}function PD(n){for(let t=Me.indexOf(n)+1,e=Me.length;t<e;++t)if(rl[Me[t]].common)return Me[t]}function cg(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:s,hi:r}=nh(e,t),i=e[s]>=t?e[s]:e[r];n[i]=!0}}function DD(n,t,e,s){const r=n._adapter,i=+r.startOf(t[0].value,s),o=t[t.length-1].value;let a,c;for(a=i;a<=o;a=+r.add(a,1,s))c=e[a],c>=0&&(t[c].major=!0);return t}function lg(n,t,e){const s=[],r={},i=t.length;let o,a;for(o=0;o<i;++o)a=t[o],r[a]=o,s.push({value:a,major:!1});return i===0||!e?s:DD(n,s,r,e)}class vo extends or{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),r=this._adapter=new jv._date(t.adapters.date);r.init(e),Yi(s.displayFormats,r.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:og(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:r,max:i,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(r=Math.min(r,l.min)),!a&&!isNaN(l.max)&&(i=Math.max(i,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),r=qt(r)&&!isNaN(r)?r:+e.startOf(Date.now(),s),i=qt(i)&&!isNaN(i)?i:+e.endOf(Date.now(),s)+1,this.min=Math.min(r,i-1),this.max=Math.max(r+1,i)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,r=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);const i=this.min,o=this.max,a=d1(r,i,o);return this._unit=e.unit||(s.autoSkip?ag(e.minUnit,this.min,this.max,this._getLabelCapacity(i)):RD(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:PD(this._unit),this.initOffsets(r),t.reverse&&a.reverse(),lg(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,r,i;this.options.offset&&t.length&&(r=this.getDecimalForValue(t[0]),t.length===1?e=1-r:e=(this.getDecimalForValue(t[1])-r)/2,i=this.getDecimalForValue(t[t.length-1]),t.length===1?s=i:s=(i-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=le(e,0,o),s=le(s,0,o),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,r=this.options,i=r.time,o=i.unit||ag(i.minUnit,e,s,this._getLabelCapacity(e)),a=st(r.ticks.stepSize,1),c=o==="week"?i.isoWeekday:!1,l=zr(c)||c===!0,d={};let h=e,f,m;if(l&&(h=+t.startOf(h,"isoWeek",c)),h=+t.startOf(h,l?"day":o),t.diff(s,e,o)>1e5*a)throw new Error(e+" and "+s+" are too far apart with stepSize of "+a+" "+o);const g=r.ticks.source==="data"&&this.getDataTimestamps();for(f=h,m=0;f<s;f=+t.add(f,a,o),m++)cg(d,f,g);return(f===s||r.bounds==="ticks"||m===1)&&cg(d,f,g),Object.keys(d).sort(ig).map(v=>+v)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const r=this.options.time.displayFormats,i=this._unit,o=e||r[i];return this._adapter.format(t,o)}_tickFormatFunction(t,e,s,r){const i=this.options,o=i.ticks.callback;if(o)return Pt(o,[t,e,s],this);const a=i.time.displayFormats,c=this._unit,l=this._majorUnit,d=c&&a[c],h=l&&a[l],f=s[e],m=l&&h&&f&&f.major;return this._adapter.format(t,r||(m?h:d))}generateTickLabels(t){let e,s,r;for(e=0,s=t.length;e<s;++e)r=t[e],r.label=this._tickFormatFunction(r.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,r=Xe(this.isHorizontal()?e.maxRotation:e.minRotation),i=Math.cos(r),o=Math.sin(r),a=this._resolveTickFontOptions(0).size;return{w:s*i+a*o,h:s*o+a*i}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,r=s[e.unit]||s.millisecond,i=this._tickFormatFunction(t,0,lg(this,[t],this._majorUnit),r),o=this._getLabelSize(i),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(e=0,s=r.length;e<s;++e)t=t.concat(r[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const r=this.getLabels();for(e=0,s=r.length;e<s;++e)t.push(og(this,r[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return vv(t.sort(ig))}}N(vo,"id","time"),N(vo,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Aa(n,t,e){let s=0,r=n.length-1,i,o,a,c;e?(t>=n[s].pos&&t<=n[r].pos&&({lo:s,hi:r}=Pn(n,"pos",t)),{pos:i,time:a}=n[s],{pos:o,time:c}=n[r]):(t>=n[s].time&&t<=n[r].time&&({lo:s,hi:r}=Pn(n,"time",t)),{time:i,pos:a}=n[s],{time:o,pos:c}=n[r]);const l=o-i;return l?a+(c-a)*(t-i)/l:a}class Gu extends vo{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Aa(e,this.min),this._tableRange=Aa(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,r=[],i=[];let o,a,c,l,d;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=s&&r.push(l);if(r.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(o=0,a=r.length;o<a;++o)d=r[o+1],c=r[o-1],l=r[o],Math.round((d+c)/2)!==l&&i.push({time:l,pos:o/(a-1)});return i}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((r,i)=>r-i)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(Aa(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return Aa(this._table,s*this._tableRange+this._minPos,!0)}}N(Gu,"id","timeseries"),N(Gu,"defaults",vo.defaults);var MD=Object.freeze({__proto__:null,CategoryScale:zu,LinearScale:Hu,LogarithmicScale:qu,RadialLinearScale:Bi,TimeScale:vo,TimeSeriesScale:Gu});const OD=[BC,mP,uD,MD];vt.register(...OD);const Ti="rgba(255,255,255,0.08)",_r="#a1a1aa",Ye={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};vt.defaults.color="#e5e5e5";vt.defaults.font.family=Ye.family;vt.defaults.font.weight=Ye.weight;const Ii={renderCurvaS:(n,t=[],e=[],s=[])=>{const r=document.getElementById(n);if(!r)return;r.chart&&r.chart.destroy();const i=s.length?s:t.map((o,a)=>`M${a+1}`);r.chart=new vt(r,{type:"line",data:{labels:i,datasets:[{label:"Planejado",data:t,borderColor:"#16a34a",backgroundColor:"rgba(34, 197, 94, 0.15)",tension:.35,fill:!0,borderWidth:3},{label:"Realizado",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.05)",tension:.35,fill:!0,borderWidth:3}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Ye,usePointStyle:!0}}},scales:{x:{grid:{color:Ti},ticks:{color:_r,font:Ye}},y:{grid:{color:Ti},ticks:{color:_r,font:Ye}}}}})},renderGastosPorMes:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),r=s.map(i=>t[i]);e.chart&&e.chart.destroy(),e.chart=new vt(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:r,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Ti},ticks:{color:_r,font:Ye}},y:{grid:{color:Ti},ticks:{color:_r,font:Ye}}}}})},renderStatusPie:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),r=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new vt(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Ye,padding:12,usePointStyle:!0}}}}})},renderNatureza:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),r=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new vt(e,{type:"bar",data:{labels:s,datasets:[{label:"Por Natureza",data:r,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:_r,font:Ye}},y:{grid:{color:Ti},ticks:{color:_r,font:Ye,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}}}})},renderCentrosCusto:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),r=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new vt(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e","#0ea5e9","#f59e0b"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:Ye,padding:12,usePointStyle:!0}}}}})}},ct={render:n=>{const t=document.getElementById("app"),e=kt.state.currentUser;if(!e){t.innerHTML=n;return}const s=kt.state.sidebarCollapsed,r=kt.state.currentTheme;t.innerHTML=`
            <div class="flex h-screen bg-canvas text-text transition-colors duration-200">
                <!-- Sidebar -->
                <aside id="sidebar" class="${s?"w-20":"w-64"} bg-surface border-r border-border flex flex-col transition-all duration-300 z-20 hidden md:flex shadow-heavy">
                    <div class="h-16 flex items-center justify-center border-b border-border">
                        <span class="text-2xl font-display text-primary">AXEL</span>
                        <span data-logo-text class="${s?"hidden":"ml-2 text-text font-display tracking-wide"}">GESTÃO</span>
                    </div>

                    <nav class="flex-1 overflow-y-auto py-4 space-y-1 px-3">
                        ${ct.createNavItem("/","Dashboard",Mt.dashboard,s)}
                        ${ct.createNavItem("/compras","Compras",Mt.shoppingCart,s)}
                        ${ct.createNavItem("/relatorios","Relatórios",Mt.clipboard,s)}
                        ${ct.createNavItem("/obras","Obras",Mt.chart,s)}
                        ${ct.createNavItem("/cadastros","Cadastros",Mt.settings,s)}
                        <div class="pt-4 mt-4 border-t border-border">
                            ${ct.createNavItem("/configuracoes","Configurações",Mt.settings,s)}
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
        `,ct.bindEvents(),window.dispatchEvent(new CustomEvent("layout:rendered"))},createNavItem:(n,t,e,s)=>{var o;const i=Tt.currentRoute===n||((o=Tt.currentRoute)==null?void 0:o.startsWith(`${n}/`))?"text-primary accent-left bg-surface shadow-heavy":"text-text-muted hover:text-text hover:bg-canvas";return`
            <a href="#${n}" class="flex items-center gap-3 px-3 py-2 rounded transition-colors mb-1 border border-transparent ${i}" title="${t}">
                ${e}
                <span class="${s?"hidden":"font-display tracking-wide uppercase"}">${t}</span>
            </a>
        `},bindEvents:()=>{var n,t,e;(n=document.getElementById("btn-toggle-sidebar"))==null||n.addEventListener("click",()=>{kt.toggleSidebar();const s=document.getElementById("sidebar"),r=s.querySelectorAll("span"),i=s.querySelector("[data-logo-text]");kt.state.sidebarCollapsed?(s.classList.remove("w-64"),s.classList.add("w-20"),r.forEach(o=>o.classList.add("hidden")),i&&i.classList.add("hidden")):(s.classList.remove("w-20"),s.classList.add("w-64"),r.forEach(o=>o.classList.remove("hidden")),i&&i.classList.remove("hidden"))}),(t=document.getElementById("btn-theme-toggle"))==null||t.addEventListener("click",()=>{const r=kt.state.currentTheme==="dark"?"light":"dark";kt.setTheme(r);const i=document.getElementById("btn-theme-toggle");i.innerHTML=r==="dark"?Mt.sun:Mt.moon}),(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",async()=>{try{await uc.logout(),Tt.navigate("/login")}catch(s){console.error(s)}}),document.addEventListener("keydown",s=>{var r;(s.ctrlKey||s.metaKey)&&s.key==="k"&&(s.preventDefault(),(r=document.getElementById("global-search"))==null||r.focus())})}},Ke={getObras:async()=>(await wt(pt(X,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getObraById:async n=>{const e=(await wt(pt(X,"obras"))).docs.find(s=>s.id===n);return e?{id:e.id,...e.data()}:null},createObra:async n=>(await rr(pt(X,"obras"),{...n,created_at:new Date().toISOString()})).id,updateObra:async(n,t)=>{await ze(ne(X,"obras",n),{...t,updated_at:new Date().toISOString()})},deleteObra:async n=>{await Ld(ne(X,"obras",n))},getObraStats:async(n,t=!1)=>{const e=await Ke.getObraById(n),s=pt(X,"compras"),r=Kt(s,Rt("obraId","==",n)),o=(await wt(r)).docs.map(z=>({id:z.id,...z.data()}));let a=0,c=Number((e==null?void 0:e.valor_orcado)||0);const l={},d={},h={},f={},m={};let g=null,v=null,y=0,w=0,T=0,k=0,D=0;const P={},M={},I=(z="")=>{const B=(z||"").toLowerCase();return B.includes("desperd")?"Desperd�cio":B.includes("lista")||B.includes("inicial")?"Lista inicial":"Material adicional"},b=z=>{const B=new Date(z.getTime()),L=(B.getDay()+6)%7;B.setDate(B.getDate()-L+3);const q=B.getTime();B.setMonth(0,1),B.getDay()!==4&&B.setMonth(0,1+(4-B.getDay()+7)%7);const Y=1+Math.ceil((q-B)/6048e5);return`${B.getFullYear()}-W${String(Y).padStart(2,"0")}`};o.forEach(z=>{const B=Number(z.valor_total??z.valor_estimado??0);a+=B,l[z.status_compra]=(l[z.status_compra]||0)+1;const L=z.previsao_entrega?new Date(z.previsao_entrega):null,q=z.data_recebimento?new Date(z.data_recebimento):null;if(z.status_compra!=="Entregue"&&L&&L<new Date&&y++,q&&L&&(w++,q<=L&&T++),z.data_emissao&&(q||L)){const G=q||L,ot=Math.max(0,(new Date(G)-new Date(z.data_emissao))/(1e3*60*60*24));k+=ot,D++}const Y=I(z.natureza_compra||z.categoria||"Outros");d[Y]=(d[Y]||0)+B;const ft=(z.natureza_compra||"Outros").trim();P[ft]=(P[ft]||0)+B;const mt=z.centroCustoNome||z.centro_custo||z.centroCustoId||"N/D";M[mt]=(M[mt]||0)+B;const bt=z.data_recebimento||z.data_emissao||z.previsao_entrega||z.data_solicitacao;if(bt){const G=new Date(bt);if(!Number.isNaN(G.getTime())){(!g||G<g)&&(g=G),(!v||G>v)&&(v=G);const ot=`${G.getFullYear()}-${String(G.getMonth()+1).padStart(2,"0")}`;h[ot]=(h[ot]||0)+B;const xt=G.toISOString().split("T")[0];f[xt]=(f[xt]||0)+B;const Bt=b(G);m[Bt]=(m[Bt]||0)+B}}});const x=Number(c||0)||a,A=Ke.calculateCurvaS(x,m,{start:(e==null?void 0:e.data_prevista_inicio)||(e==null?void 0:e.data_inicio)||g,end:(e==null?void 0:e.data_prevista_fim)||(e==null?void 0:e.data_fim)||v}),C=w?T/w*100:0,R=D?k/D:0,S=[...o].sort((z,B)=>{const L=z.data_solicitacao||z.data_emissao||"";return(B.data_solicitacao||B.data_emissao||"").localeCompare(L)}),et={totalCompras:o.length,totalGasto:a,porStatus:l,gastosPorCategoria:d,gastosMensais:h,gastosDiarios:f,curvaS:A,comprasRecentes:S.slice(0,10),comprasCalendar:S,atrasos:y,sla:C,lead:R,naturezaTotais:P,ccTotais:M};if(t)try{const{RDOService:z}=await uo(async()=>{const{RDOService:B}=await Promise.resolve().then(()=>Nb);return{RDOService:B}},void 0);if(e!=null&&e.numero_os){const B=new Date().toISOString().split("T")[0],L=new Date(Date.now()-30*24*60*60*1e3).toISOString().split("T")[0],q=await z.getByObra(e.numero_os,L,B);q&&q.length>0&&(et.rdoData=z.processRDOData(q))}}catch(z){console.warn("Erro ao buscar dados RDO:",z)}return et},calculateCurvaS:(n,t,{start:e,end:s}={})=>{const r=[],i=[],o=[];let a=0;const c=24*60*60*1e3,l=[],d=e?new Date(e):null,h=s?new Date(s):null;if(d&&!Number.isNaN(d)&&h&&!Number.isNaN(h)&&d<=h){const m=new Date(d);m.setHours(12,0,0,0);const g=m.getDay(),v=g===0?-6:1-g;for(m.setDate(m.getDate()+v);m<=h;){const y=m.getFullYear(),w=new Date(y,0,1),T=Math.floor((m-w)/c),k=Math.ceil((T+w.getDay()+1)/7);l.push(`${y}-W${String(k).padStart(2,"0")}`),m.setDate(m.getDate()+7)}}else l.push(...Object.keys(t).sort());const f=l.length||1;return l.forEach((m,g)=>{const v=(g+1)/f,y=1/(1+Math.exp(-10*(v-.5)));r.push(n*y),t[m]&&(a+=t[m]),i.push(a),o.push(m)}),{planejado:r,realizado:i,labels:o}}},ND=Object.freeze(Object.defineProperty({__proto__:null,ObrasService:Ke},Symbol.toStringTag,{value:"Module"})),lb=6048e5,LD=864e5,Bo=6e4,Uo=36e5,VD=1e3,ug=Symbol.for("constructDateFrom");function Gt(n,t){return typeof n=="function"?n(t):n&&typeof n=="object"&&ug in n?n[ug](t):n instanceof Date?new n.constructor(t):new Date(t)}function it(n,t){return Gt(t||n,n)}function il(n,t,e){const s=it(n,e==null?void 0:e.in);return isNaN(t)?Gt((e==null?void 0:e.in)||n,NaN):(t&&s.setDate(s.getDate()+t),s)}function fh(n,t,e){const s=it(n,e==null?void 0:e.in);if(isNaN(t))return Gt(n,NaN);if(!t)return s;const r=s.getDate(),i=Gt(n,s.getTime());i.setMonth(s.getMonth()+t+1,0);const o=i.getDate();return r>=o?i:(s.setFullYear(i.getFullYear(),i.getMonth(),r),s)}function ph(n,t,e){return Gt(n,+it(n)+t)}function FD(n,t,e){return ph(n,t*Uo)}let $D={};function ar(){return $D}function _n(n,t){var a,c,l,d;const e=ar(),s=(t==null?void 0:t.weekStartsOn)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??e.weekStartsOn??((d=(l=e.locale)==null?void 0:l.options)==null?void 0:d.weekStartsOn)??0,r=it(n,t==null?void 0:t.in),i=r.getDay(),o=(i<s?7:0)+i-s;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r}function Wr(n,t){return _n(n,{...t,weekStartsOn:1})}function ub(n,t){const e=it(n,t==null?void 0:t.in),s=e.getFullYear(),r=Gt(e,0);r.setFullYear(s+1,0,4),r.setHours(0,0,0,0);const i=Wr(r),o=Gt(e,0);o.setFullYear(s,0,4),o.setHours(0,0,0,0);const a=Wr(o);return e.getTime()>=i.getTime()?s+1:e.getTime()>=a.getTime()?s:s-1}function vc(n){const t=it(n),e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+n-+e}function cr(n,...t){const e=Gt.bind(null,t.find(s=>typeof s=="object"));return t.map(e)}function Yu(n,t){const e=it(n,t==null?void 0:t.in);return e.setHours(0,0,0,0),e}function db(n,t,e){const[s,r]=cr(e==null?void 0:e.in,n,t),i=Yu(s),o=Yu(r),a=+i-vc(i),c=+o-vc(o);return Math.round((a-c)/LD)}function BD(n,t){const e=ub(n,t),s=Gt(n,0);return s.setFullYear(e,0,4),s.setHours(0,0,0,0),Wr(s)}function UD(n,t,e){const s=it(n,e==null?void 0:e.in);return s.setTime(s.getTime()+t*Bo),s}function jD(n,t,e){return fh(n,t*3,e)}function zD(n,t,e){return ph(n,t*1e3)}function HD(n,t,e){return il(n,t*7,e)}function qD(n,t,e){return fh(n,t*12,e)}function Zi(n,t){const e=+it(n)-+it(t);return e<0?-1:e>0?1:e}function WD(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function hb(n){return!(!WD(n)&&typeof n!="number"||isNaN(+it(n)))}function GD(n,t,e){const[s,r]=cr(e==null?void 0:e.in,n,t),i=s.getFullYear()-r.getFullYear(),o=s.getMonth()-r.getMonth();return i*12+o}function YD(n,t,e){const[s,r]=cr(e==null?void 0:e.in,n,t);return s.getFullYear()-r.getFullYear()}function fb(n,t,e){const[s,r]=cr(e==null?void 0:e.in,n,t),i=dg(s,r),o=Math.abs(db(s,r));s.setDate(s.getDate()-i*o);const a=+(dg(s,r)===-i),c=i*(o-a);return c===0?0:c}function dg(n,t){const e=n.getFullYear()-t.getFullYear()||n.getMonth()-t.getMonth()||n.getDate()-t.getDate()||n.getHours()-t.getHours()||n.getMinutes()-t.getMinutes()||n.getSeconds()-t.getSeconds()||n.getMilliseconds()-t.getMilliseconds();return e<0?-1:e>0?1:e}function jo(n){return t=>{const s=(n?Math[n]:Math.trunc)(t);return s===0?0:s}}function KD(n,t,e){const[s,r]=cr(e==null?void 0:e.in,n,t),i=(+s-+r)/Uo;return jo(e==null?void 0:e.roundingMethod)(i)}function mh(n,t){return+it(n)-+it(t)}function QD(n,t,e){const s=mh(n,t)/Bo;return jo(e==null?void 0:e.roundingMethod)(s)}function pb(n,t){const e=it(n,t==null?void 0:t.in);return e.setHours(23,59,59,999),e}function mb(n,t){const e=it(n,t==null?void 0:t.in),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(23,59,59,999),e}function XD(n,t){const e=it(n,t==null?void 0:t.in);return+pb(e,t)==+mb(e,t)}function gb(n,t,e){const[s,r,i]=cr(e==null?void 0:e.in,n,n,t),o=Zi(r,i),a=Math.abs(GD(r,i));if(a<1)return 0;r.getMonth()===1&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-o*a);let c=Zi(r,i)===-o;XD(s)&&a===1&&Zi(s,i)===1&&(c=!1);const l=o*(a-+c);return l===0?0:l}function JD(n,t,e){const s=gb(n,t,e)/3;return jo(e==null?void 0:e.roundingMethod)(s)}function ZD(n,t,e){const s=mh(n,t)/1e3;return jo(e==null?void 0:e.roundingMethod)(s)}function t2(n,t,e){const s=fb(n,t,e)/7;return jo(e==null?void 0:e.roundingMethod)(s)}function e2(n,t,e){const[s,r]=cr(e==null?void 0:e.in,n,t),i=Zi(s,r),o=Math.abs(YD(s,r));s.setFullYear(1584),r.setFullYear(1584);const a=Zi(s,r)===-i,c=i*(o-+a);return c===0?0:c}function n2(n,t){const e=it(n,t==null?void 0:t.in),s=e.getMonth(),r=s-s%3;return e.setMonth(r,1),e.setHours(0,0,0,0),e}function s2(n,t){const e=it(n,t==null?void 0:t.in);return e.setDate(1),e.setHours(0,0,0,0),e}function r2(n,t){const e=it(n,t==null?void 0:t.in),s=e.getFullYear();return e.setFullYear(s+1,0,0),e.setHours(23,59,59,999),e}function _b(n,t){const e=it(n,t==null?void 0:t.in);return e.setFullYear(e.getFullYear(),0,1),e.setHours(0,0,0,0),e}function i2(n,t){const e=it(n,t==null?void 0:t.in);return e.setMinutes(59,59,999),e}function o2(n,t){var a,c;const e=ar(),s=e.weekStartsOn??((c=(a=e.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??0,r=it(n,t==null?void 0:t.in),i=r.getDay(),o=(i<s?-7:0)+6-(i-s);return r.setDate(r.getDate()+o),r.setHours(23,59,59,999),r}function a2(n,t){const e=it(n,t==null?void 0:t.in);return e.setSeconds(59,999),e}function c2(n,t){const e=it(n,t==null?void 0:t.in),s=e.getMonth(),r=s-s%3+3;return e.setMonth(r,0),e.setHours(23,59,59,999),e}function l2(n,t){const e=it(n,t==null?void 0:t.in);return e.setMilliseconds(999),e}const u2={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},d2=(n,t,e)=>{let s;const r=u2[n];return typeof r=="string"?s=r:t===1?s=r.one:s=r.other.replace("{{count}}",t.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+s:s+" ago":s};function Zl(n){return(t={})=>{const e=t.width?String(t.width):n.defaultWidth;return n.formats[e]||n.formats[n.defaultWidth]}}const h2={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},f2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},p2={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},m2={date:Zl({formats:h2,defaultWidth:"full"}),time:Zl({formats:f2,defaultWidth:"full"}),dateTime:Zl({formats:p2,defaultWidth:"full"})},g2={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},_2=(n,t,e,s)=>g2[n];function Ai(n){return(t,e)=>{const s=e!=null&&e.context?String(e.context):"standalone";let r;if(s==="formatting"&&n.formattingValues){const o=n.defaultFormattingWidth||n.defaultWidth,a=e!=null&&e.width?String(e.width):o;r=n.formattingValues[a]||n.formattingValues[o]}else{const o=n.defaultWidth,a=e!=null&&e.width?String(e.width):n.defaultWidth;r=n.values[a]||n.values[o]}const i=n.argumentCallback?n.argumentCallback(t):t;return r[i]}}const y2={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},v2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},b2={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},x2={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},w2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},E2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},T2=(n,t)=>{const e=Number(n),s=e%100;if(s>20||s<10)switch(s%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},I2={ordinalNumber:T2,era:Ai({values:y2,defaultWidth:"wide"}),quarter:Ai({values:v2,defaultWidth:"wide",argumentCallback:n=>n-1}),month:Ai({values:b2,defaultWidth:"wide"}),day:Ai({values:x2,defaultWidth:"wide"}),dayPeriod:Ai({values:w2,defaultWidth:"wide",formattingValues:E2,defaultFormattingWidth:"wide"})};function ki(n){return(t,e={})=>{const s=e.width,r=s&&n.matchPatterns[s]||n.matchPatterns[n.defaultMatchWidth],i=t.match(r);if(!i)return null;const o=i[0],a=s&&n.parsePatterns[s]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(a)?k2(a,h=>h.test(o)):A2(a,h=>h.test(o));let l;l=n.valueCallback?n.valueCallback(c):c,l=e.valueCallback?e.valueCallback(l):l;const d=t.slice(o.length);return{value:l,rest:d}}}function A2(n,t){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&t(n[e]))return e}function k2(n,t){for(let e=0;e<n.length;e++)if(t(n[e]))return e}function S2(n){return(t,e={})=>{const s=t.match(n.matchPattern);if(!s)return null;const r=s[0],i=t.match(n.parsePattern);if(!i)return null;let o=n.valueCallback?n.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;const a=t.slice(r.length);return{value:o,rest:a}}}const C2=/^(\d+)(th|st|nd|rd)?/i,R2=/\d+/i,P2={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},D2={any:[/^b/i,/^(a|c)/i]},M2={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},O2={any:[/1/i,/2/i,/3/i,/4/i]},N2={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},L2={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},V2={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},F2={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},$2={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},B2={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},U2={ordinalNumber:S2({matchPattern:C2,parsePattern:R2,valueCallback:n=>parseInt(n,10)}),era:ki({matchPatterns:P2,defaultMatchWidth:"wide",parsePatterns:D2,defaultParseWidth:"any"}),quarter:ki({matchPatterns:M2,defaultMatchWidth:"wide",parsePatterns:O2,defaultParseWidth:"any",valueCallback:n=>n+1}),month:ki({matchPatterns:N2,defaultMatchWidth:"wide",parsePatterns:L2,defaultParseWidth:"any"}),day:ki({matchPatterns:V2,defaultMatchWidth:"wide",parsePatterns:F2,defaultParseWidth:"any"}),dayPeriod:ki({matchPatterns:$2,defaultMatchWidth:"any",parsePatterns:B2,defaultParseWidth:"any"})},yb={code:"en-US",formatDistance:d2,formatLong:m2,formatRelative:_2,localize:I2,match:U2,options:{weekStartsOn:0,firstWeekContainsDate:1}};function j2(n,t){const e=it(n,t==null?void 0:t.in);return db(e,_b(e))+1}function vb(n,t){const e=it(n,t==null?void 0:t.in),s=+Wr(e)-+BD(e);return Math.round(s/lb)+1}function gh(n,t){var d,h,f,m;const e=it(n,t==null?void 0:t.in),s=e.getFullYear(),r=ar(),i=(t==null?void 0:t.firstWeekContainsDate)??((h=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(f=r.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=Gt((t==null?void 0:t.in)||n,0);o.setFullYear(s+1,0,i),o.setHours(0,0,0,0);const a=_n(o,t),c=Gt((t==null?void 0:t.in)||n,0);c.setFullYear(s,0,i),c.setHours(0,0,0,0);const l=_n(c,t);return+e>=+a?s+1:+e>=+l?s:s-1}function z2(n,t){var a,c,l,d;const e=ar(),s=(t==null?void 0:t.firstWeekContainsDate)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.firstWeekContainsDate)??e.firstWeekContainsDate??((d=(l=e.locale)==null?void 0:l.options)==null?void 0:d.firstWeekContainsDate)??1,r=gh(n,t),i=Gt((t==null?void 0:t.in)||n,0);return i.setFullYear(r,0,s),i.setHours(0,0,0,0),_n(i,t)}function bb(n,t){const e=it(n,t==null?void 0:t.in),s=+_n(e,t)-+z2(e,t);return Math.round(s/lb)+1}function It(n,t){const e=n<0?"-":"",s=Math.abs(n).toString().padStart(t,"0");return e+s}const Gn={y(n,t){const e=n.getFullYear(),s=e>0?e:1-e;return It(t==="yy"?s%100:s,t.length)},M(n,t){const e=n.getMonth();return t==="M"?String(e+1):It(e+1,2)},d(n,t){return It(n.getDate(),t.length)},a(n,t){const e=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h(n,t){return It(n.getHours()%12||12,t.length)},H(n,t){return It(n.getHours(),t.length)},m(n,t){return It(n.getMinutes(),t.length)},s(n,t){return It(n.getSeconds(),t.length)},S(n,t){const e=t.length,s=n.getMilliseconds(),r=Math.trunc(s*Math.pow(10,e-3));return It(r,t.length)}},yr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},hg={G:function(n,t,e){const s=n.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(s,{width:"abbreviated"});case"GGGGG":return e.era(s,{width:"narrow"});case"GGGG":default:return e.era(s,{width:"wide"})}},y:function(n,t,e){if(t==="yo"){const s=n.getFullYear(),r=s>0?s:1-s;return e.ordinalNumber(r,{unit:"year"})}return Gn.y(n,t)},Y:function(n,t,e,s){const r=gh(n,s),i=r>0?r:1-r;if(t==="YY"){const o=i%100;return It(o,2)}return t==="Yo"?e.ordinalNumber(i,{unit:"year"}):It(i,t.length)},R:function(n,t){const e=ub(n);return It(e,t.length)},u:function(n,t){const e=n.getFullYear();return It(e,t.length)},Q:function(n,t,e){const s=Math.ceil((n.getMonth()+1)/3);switch(t){case"Q":return String(s);case"QQ":return It(s,2);case"Qo":return e.ordinalNumber(s,{unit:"quarter"});case"QQQ":return e.quarter(s,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(s,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(s,{width:"wide",context:"formatting"})}},q:function(n,t,e){const s=Math.ceil((n.getMonth()+1)/3);switch(t){case"q":return String(s);case"qq":return It(s,2);case"qo":return e.ordinalNumber(s,{unit:"quarter"});case"qqq":return e.quarter(s,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(s,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(s,{width:"wide",context:"standalone"})}},M:function(n,t,e){const s=n.getMonth();switch(t){case"M":case"MM":return Gn.M(n,t);case"Mo":return e.ordinalNumber(s+1,{unit:"month"});case"MMM":return e.month(s,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(s,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(s,{width:"wide",context:"formatting"})}},L:function(n,t,e){const s=n.getMonth();switch(t){case"L":return String(s+1);case"LL":return It(s+1,2);case"Lo":return e.ordinalNumber(s+1,{unit:"month"});case"LLL":return e.month(s,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(s,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(s,{width:"wide",context:"standalone"})}},w:function(n,t,e,s){const r=bb(n,s);return t==="wo"?e.ordinalNumber(r,{unit:"week"}):It(r,t.length)},I:function(n,t,e){const s=vb(n);return t==="Io"?e.ordinalNumber(s,{unit:"week"}):It(s,t.length)},d:function(n,t,e){return t==="do"?e.ordinalNumber(n.getDate(),{unit:"date"}):Gn.d(n,t)},D:function(n,t,e){const s=j2(n);return t==="Do"?e.ordinalNumber(s,{unit:"dayOfYear"}):It(s,t.length)},E:function(n,t,e){const s=n.getDay();switch(t){case"E":case"EE":case"EEE":return e.day(s,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(s,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(s,{width:"short",context:"formatting"});case"EEEE":default:return e.day(s,{width:"wide",context:"formatting"})}},e:function(n,t,e,s){const r=n.getDay(),i=(r-s.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return It(i,2);case"eo":return e.ordinalNumber(i,{unit:"day"});case"eee":return e.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(r,{width:"short",context:"formatting"});case"eeee":default:return e.day(r,{width:"wide",context:"formatting"})}},c:function(n,t,e,s){const r=n.getDay(),i=(r-s.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return It(i,t.length);case"co":return e.ordinalNumber(i,{unit:"day"});case"ccc":return e.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(r,{width:"narrow",context:"standalone"});case"cccccc":return e.day(r,{width:"short",context:"standalone"});case"cccc":default:return e.day(r,{width:"wide",context:"standalone"})}},i:function(n,t,e){const s=n.getDay(),r=s===0?7:s;switch(t){case"i":return String(r);case"ii":return It(r,t.length);case"io":return e.ordinalNumber(r,{unit:"day"});case"iii":return e.day(s,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(s,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(s,{width:"short",context:"formatting"});case"iiii":default:return e.day(s,{width:"wide",context:"formatting"})}},a:function(n,t,e){const r=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(n,t,e){const s=n.getHours();let r;switch(s===12?r=yr.noon:s===0?r=yr.midnight:r=s/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(n,t,e){const s=n.getHours();let r;switch(s>=17?r=yr.evening:s>=12?r=yr.afternoon:s>=4?r=yr.morning:r=yr.night,t){case"B":case"BB":case"BBB":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(n,t,e){if(t==="ho"){let s=n.getHours()%12;return s===0&&(s=12),e.ordinalNumber(s,{unit:"hour"})}return Gn.h(n,t)},H:function(n,t,e){return t==="Ho"?e.ordinalNumber(n.getHours(),{unit:"hour"}):Gn.H(n,t)},K:function(n,t,e){const s=n.getHours()%12;return t==="Ko"?e.ordinalNumber(s,{unit:"hour"}):It(s,t.length)},k:function(n,t,e){let s=n.getHours();return s===0&&(s=24),t==="ko"?e.ordinalNumber(s,{unit:"hour"}):It(s,t.length)},m:function(n,t,e){return t==="mo"?e.ordinalNumber(n.getMinutes(),{unit:"minute"}):Gn.m(n,t)},s:function(n,t,e){return t==="so"?e.ordinalNumber(n.getSeconds(),{unit:"second"}):Gn.s(n,t)},S:function(n,t){return Gn.S(n,t)},X:function(n,t,e){const s=n.getTimezoneOffset();if(s===0)return"Z";switch(t){case"X":return pg(s);case"XXXX":case"XX":return Ms(s);case"XXXXX":case"XXX":default:return Ms(s,":")}},x:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"x":return pg(s);case"xxxx":case"xx":return Ms(s);case"xxxxx":case"xxx":default:return Ms(s,":")}},O:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+fg(s,":");case"OOOO":default:return"GMT"+Ms(s,":")}},z:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+fg(s,":");case"zzzz":default:return"GMT"+Ms(s,":")}},t:function(n,t,e){const s=Math.trunc(+n/1e3);return It(s,t.length)},T:function(n,t,e){return It(+n,t.length)}};function fg(n,t=""){const e=n>0?"-":"+",s=Math.abs(n),r=Math.trunc(s/60),i=s%60;return i===0?e+String(r):e+String(r)+t+It(i,2)}function pg(n,t){return n%60===0?(n>0?"-":"+")+It(Math.abs(n)/60,2):Ms(n,t)}function Ms(n,t=""){const e=n>0?"-":"+",s=Math.abs(n),r=It(Math.trunc(s/60),2),i=It(s%60,2);return e+r+t+i}const mg=(n,t)=>{switch(n){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},xb=(n,t)=>{switch(n){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},H2=(n,t)=>{const e=n.match(/(P+)(p+)?/)||[],s=e[1],r=e[2];if(!r)return mg(n,t);let i;switch(s){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",mg(s,t)).replace("{{time}}",xb(r,t))},Ku={p:xb,P:H2},q2=/^D+$/,W2=/^Y+$/,G2=["D","DD","YY","YYYY"];function wb(n){return q2.test(n)}function Eb(n){return W2.test(n)}function Qu(n,t,e){const s=Y2(n,t,e);if(console.warn(s),G2.includes(n))throw new RangeError(s)}function Y2(n,t,e){const s=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${s} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const K2=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Q2=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,X2=/^'([^]*?)'?$/,J2=/''/g,Z2=/[a-zA-Z]/;function tM(n,t,e){var d,h,f,m,g,v,y,w;const s=ar(),r=(e==null?void 0:e.locale)??s.locale??yb,i=(e==null?void 0:e.firstWeekContainsDate)??((h=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??s.firstWeekContainsDate??((m=(f=s.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=(e==null?void 0:e.weekStartsOn)??((v=(g=e==null?void 0:e.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??s.weekStartsOn??((w=(y=s.locale)==null?void 0:y.options)==null?void 0:w.weekStartsOn)??0,a=it(n,e==null?void 0:e.in);if(!hb(a))throw new RangeError("Invalid time value");let c=t.match(Q2).map(T=>{const k=T[0];if(k==="p"||k==="P"){const D=Ku[k];return D(T,r.formatLong)}return T}).join("").match(K2).map(T=>{if(T==="''")return{isToken:!1,value:"'"};const k=T[0];if(k==="'")return{isToken:!1,value:eM(T)};if(hg[k])return{isToken:!0,value:T};if(k.match(Z2))throw new RangeError("Format string contains an unescaped latin alphabet character `"+k+"`");return{isToken:!1,value:T}});r.localize.preprocessor&&(c=r.localize.preprocessor(a,c));const l={firstWeekContainsDate:i,weekStartsOn:o,locale:r};return c.map(T=>{if(!T.isToken)return T.value;const k=T.value;(!(e!=null&&e.useAdditionalWeekYearTokens)&&Eb(k)||!(e!=null&&e.useAdditionalDayOfYearTokens)&&wb(k))&&Qu(k,t,String(n));const D=hg[k[0]];return D(a,k,r.localize,l)}).join("")}function eM(n){const t=n.match(X2);return t?t[1].replace(J2,"'"):n}function nM(){return Object.assign({},ar())}function sM(n,t){const e=it(n,t==null?void 0:t.in).getDay();return e===0?7:e}function rM(n,t){const e=iM(t)?new t(0):Gt(t,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function iM(n){var t;return typeof n=="function"&&((t=n.prototype)==null?void 0:t.constructor)===n}const oM=10;class Tb{constructor(){N(this,"subPriority",0)}validate(t,e){return!0}}class aM extends Tb{constructor(t,e,s,r,i){super(),this.value=t,this.validateValue=e,this.setValue=s,this.priority=r,i&&(this.subPriority=i)}validate(t,e){return this.validateValue(t,this.value,e)}set(t,e,s){return this.setValue(t,e,this.value,s)}}class cM extends Tb{constructor(e,s){super();N(this,"priority",oM);N(this,"subPriority",-1);this.context=e||(r=>Gt(s,r))}set(e,s){return s.timestampIsSet?e:Gt(e,rM(e,this.context))}}class Et{run(t,e,s,r){const i=this.parse(t,e,s,r);return i?{setter:new aM(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(t,e,s){return!0}}class lM extends Et{constructor(){super(...arguments);N(this,"priority",140);N(this,"incompatibleTokens",["R","u","t","T"])}parse(e,s,r){switch(s){case"G":case"GG":case"GGG":return r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"});case"GGGGG":return r.era(e,{width:"narrow"});case"GGGG":default:return r.era(e,{width:"wide"})||r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"})}}set(e,s,r){return s.era=r,e.setFullYear(r,0,1),e.setHours(0,0,0,0),e}}const Jt={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},an={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Zt(n,t){return n&&{value:t(n.value),rest:n.rest}}function Ut(n,t){const e=t.match(n);return e?{value:parseInt(e[0],10),rest:t.slice(e[0].length)}:null}function cn(n,t){const e=t.match(n);if(!e)return null;if(e[0]==="Z")return{value:0,rest:t.slice(1)};const s=e[1]==="+"?1:-1,r=e[2]?parseInt(e[2],10):0,i=e[3]?parseInt(e[3],10):0,o=e[5]?parseInt(e[5],10):0;return{value:s*(r*Uo+i*Bo+o*VD),rest:t.slice(e[0].length)}}function Ib(n){return Ut(Jt.anyDigitsSigned,n)}function Yt(n,t){switch(n){case 1:return Ut(Jt.singleDigit,t);case 2:return Ut(Jt.twoDigits,t);case 3:return Ut(Jt.threeDigits,t);case 4:return Ut(Jt.fourDigits,t);default:return Ut(new RegExp("^\\d{1,"+n+"}"),t)}}function bc(n,t){switch(n){case 1:return Ut(Jt.singleDigitSigned,t);case 2:return Ut(Jt.twoDigitsSigned,t);case 3:return Ut(Jt.threeDigitsSigned,t);case 4:return Ut(Jt.fourDigitsSigned,t);default:return Ut(new RegExp("^-?\\d{1,"+n+"}"),t)}}function _h(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Ab(n,t){const e=t>0,s=e?t:1-t;let r;if(s<=50)r=n||100;else{const i=s+50,o=Math.trunc(i/100)*100,a=n>=i%100;r=n+o-(a?100:0)}return e?r:1-r}function kb(n){return n%400===0||n%4===0&&n%100!==0}class uM extends Et{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(e,s,r){const i=o=>({year:o,isTwoDigitYear:s==="yy"});switch(s){case"y":return Zt(Yt(4,e),i);case"yo":return Zt(r.ordinalNumber(e,{unit:"year"}),i);default:return Zt(Yt(s.length,e),i)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,r){const i=e.getFullYear();if(r.isTwoDigitYear){const a=Ab(r.year,i);return e.setFullYear(a,0,1),e.setHours(0,0,0,0),e}const o=!("era"in s)||s.era===1?r.year:1-r.year;return e.setFullYear(o,0,1),e.setHours(0,0,0,0),e}}class dM extends Et{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(e,s,r){const i=o=>({year:o,isTwoDigitYear:s==="YY"});switch(s){case"Y":return Zt(Yt(4,e),i);case"Yo":return Zt(r.ordinalNumber(e,{unit:"year"}),i);default:return Zt(Yt(s.length,e),i)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,r,i){const o=gh(e,i);if(r.isTwoDigitYear){const c=Ab(r.year,o);return e.setFullYear(c,0,i.firstWeekContainsDate),e.setHours(0,0,0,0),_n(e,i)}const a=!("era"in s)||s.era===1?r.year:1-r.year;return e.setFullYear(a,0,i.firstWeekContainsDate),e.setHours(0,0,0,0),_n(e,i)}}class hM extends Et{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(e,s){return bc(s==="R"?4:s.length,e)}set(e,s,r){const i=Gt(e,0);return i.setFullYear(r,0,4),i.setHours(0,0,0,0),Wr(i)}}class fM extends Et{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(e,s){return bc(s==="u"?4:s.length,e)}set(e,s,r){return e.setFullYear(r,0,1),e.setHours(0,0,0,0),e}}class pM extends Et{constructor(){super(...arguments);N(this,"priority",120);N(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,r){switch(s){case"Q":case"QQ":return Yt(s.length,e);case"Qo":return r.ordinalNumber(e,{unit:"quarter"});case"QQQ":return r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return r.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(e,{width:"wide",context:"formatting"})||r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=1&&s<=4}set(e,s,r){return e.setMonth((r-1)*3,1),e.setHours(0,0,0,0),e}}class mM extends Et{constructor(){super(...arguments);N(this,"priority",120);N(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,r){switch(s){case"q":case"qq":return Yt(s.length,e);case"qo":return r.ordinalNumber(e,{unit:"quarter"});case"qqq":return r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return r.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(e,{width:"wide",context:"standalone"})||r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=1&&s<=4}set(e,s,r){return e.setMonth((r-1)*3,1),e.setHours(0,0,0,0),e}}class gM extends Et{constructor(){super(...arguments);N(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);N(this,"priority",110)}parse(e,s,r){const i=o=>o-1;switch(s){case"M":return Zt(Ut(Jt.month,e),i);case"MM":return Zt(Yt(2,e),i);case"Mo":return Zt(r.ordinalNumber(e,{unit:"month"}),i);case"MMM":return r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return r.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(e,{width:"wide",context:"formatting"})||r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=11}set(e,s,r){return e.setMonth(r,1),e.setHours(0,0,0,0),e}}class _M extends Et{constructor(){super(...arguments);N(this,"priority",110);N(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(e,s,r){const i=o=>o-1;switch(s){case"L":return Zt(Ut(Jt.month,e),i);case"LL":return Zt(Yt(2,e),i);case"Lo":return Zt(r.ordinalNumber(e,{unit:"month"}),i);case"LLL":return r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return r.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(e,{width:"wide",context:"standalone"})||r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=11}set(e,s,r){return e.setMonth(r,1),e.setHours(0,0,0,0),e}}function yM(n,t,e){const s=it(n,e==null?void 0:e.in),r=bb(s,e)-t;return s.setDate(s.getDate()-r*7),it(s,e==null?void 0:e.in)}class vM extends Et{constructor(){super(...arguments);N(this,"priority",100);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(e,s,r){switch(s){case"w":return Ut(Jt.week,e);case"wo":return r.ordinalNumber(e,{unit:"week"});default:return Yt(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,r,i){return _n(yM(e,r,i),i)}}function bM(n,t,e){const s=it(n,e==null?void 0:e.in),r=vb(s,e)-t;return s.setDate(s.getDate()-r*7),s}class xM extends Et{constructor(){super(...arguments);N(this,"priority",100);N(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(e,s,r){switch(s){case"I":return Ut(Jt.week,e);case"Io":return r.ordinalNumber(e,{unit:"week"});default:return Yt(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,r){return Wr(bM(e,r))}}const wM=[31,28,31,30,31,30,31,31,30,31,30,31],EM=[31,29,31,30,31,30,31,31,30,31,30,31];class TM extends Et{constructor(){super(...arguments);N(this,"priority",90);N(this,"subPriority",1);N(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(e,s,r){switch(s){case"d":return Ut(Jt.date,e);case"do":return r.ordinalNumber(e,{unit:"date"});default:return Yt(s.length,e)}}validate(e,s){const r=e.getFullYear(),i=kb(r),o=e.getMonth();return i?s>=1&&s<=EM[o]:s>=1&&s<=wM[o]}set(e,s,r){return e.setDate(r),e.setHours(0,0,0,0),e}}class IM extends Et{constructor(){super(...arguments);N(this,"priority",90);N(this,"subpriority",1);N(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(e,s,r){switch(s){case"D":case"DD":return Ut(Jt.dayOfYear,e);case"Do":return r.ordinalNumber(e,{unit:"date"});default:return Yt(s.length,e)}}validate(e,s){const r=e.getFullYear();return kb(r)?s>=1&&s<=366:s>=1&&s<=365}set(e,s,r){return e.setMonth(0,r),e.setHours(0,0,0,0),e}}function yh(n,t,e){var h,f,m,g;const s=ar(),r=(e==null?void 0:e.weekStartsOn)??((f=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:f.weekStartsOn)??s.weekStartsOn??((g=(m=s.locale)==null?void 0:m.options)==null?void 0:g.weekStartsOn)??0,i=it(n,e==null?void 0:e.in),o=i.getDay(),c=(t%7+7)%7,l=7-r,d=t<0||t>6?t-(o+l)%7:(c+l)%7-(o+l)%7;return il(i,d,e)}class AM extends Et{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(e,s,r){switch(s){case"E":case"EE":case"EEE":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return r.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,r,i){return e=yh(e,r,i),e.setHours(0,0,0,0),e}}class kM extends Et{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(e,s,r,i){const o=a=>{const c=Math.floor((a-1)/7)*7;return(a+i.weekStartsOn+6)%7+c};switch(s){case"e":case"ee":return Zt(Yt(s.length,e),o);case"eo":return Zt(r.ordinalNumber(e,{unit:"day"}),o);case"eee":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"eeeee":return r.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,r,i){return e=yh(e,r,i),e.setHours(0,0,0,0),e}}class SM extends Et{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(e,s,r,i){const o=a=>{const c=Math.floor((a-1)/7)*7;return(a+i.weekStartsOn+6)%7+c};switch(s){case"c":case"cc":return Zt(Yt(s.length,e),o);case"co":return Zt(r.ordinalNumber(e,{unit:"day"}),o);case"ccc":return r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});case"ccccc":return r.day(e,{width:"narrow",context:"standalone"});case"cccccc":return r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return r.day(e,{width:"wide",context:"standalone"})||r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=6}set(e,s,r,i){return e=yh(e,r,i),e.setHours(0,0,0,0),e}}function CM(n,t,e){const s=it(n,e==null?void 0:e.in),r=sM(s,e),i=t-r;return il(s,i,e)}class RM extends Et{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(e,s,r){const i=o=>o===0?7:o;switch(s){case"i":case"ii":return Yt(s.length,e);case"io":return r.ordinalNumber(e,{unit:"day"});case"iii":return Zt(r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),i);case"iiiii":return Zt(r.day(e,{width:"narrow",context:"formatting"}),i);case"iiiiii":return Zt(r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),i);case"iiii":default:return Zt(r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),i)}}validate(e,s){return s>=1&&s<=7}set(e,s,r){return e=CM(e,r),e.setHours(0,0,0,0),e}}class PM extends Et{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(e,s,r){switch(s){case"a":case"aa":case"aaa":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,r){return e.setHours(_h(r),0,0,0),e}}class DM extends Et{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(e,s,r){switch(s){case"b":case"bb":case"bbb":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,r){return e.setHours(_h(r),0,0,0),e}}class MM extends Et{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["a","b","t","T"])}parse(e,s,r){switch(s){case"B":case"BB":case"BBB":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,r){return e.setHours(_h(r),0,0,0),e}}class OM extends Et{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["H","K","k","t","T"])}parse(e,s,r){switch(s){case"h":return Ut(Jt.hour12h,e);case"ho":return r.ordinalNumber(e,{unit:"hour"});default:return Yt(s.length,e)}}validate(e,s){return s>=1&&s<=12}set(e,s,r){const i=e.getHours()>=12;return i&&r<12?e.setHours(r+12,0,0,0):!i&&r===12?e.setHours(0,0,0,0):e.setHours(r,0,0,0),e}}class NM extends Et{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(e,s,r){switch(s){case"H":return Ut(Jt.hour23h,e);case"Ho":return r.ordinalNumber(e,{unit:"hour"});default:return Yt(s.length,e)}}validate(e,s){return s>=0&&s<=23}set(e,s,r){return e.setHours(r,0,0,0),e}}class LM extends Et{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["h","H","k","t","T"])}parse(e,s,r){switch(s){case"K":return Ut(Jt.hour11h,e);case"Ko":return r.ordinalNumber(e,{unit:"hour"});default:return Yt(s.length,e)}}validate(e,s){return s>=0&&s<=11}set(e,s,r){return e.getHours()>=12&&r<12?e.setHours(r+12,0,0,0):e.setHours(r,0,0,0),e}}class VM extends Et{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(e,s,r){switch(s){case"k":return Ut(Jt.hour24h,e);case"ko":return r.ordinalNumber(e,{unit:"hour"});default:return Yt(s.length,e)}}validate(e,s){return s>=1&&s<=24}set(e,s,r){const i=r<=24?r%24:r;return e.setHours(i,0,0,0),e}}class FM extends Et{constructor(){super(...arguments);N(this,"priority",60);N(this,"incompatibleTokens",["t","T"])}parse(e,s,r){switch(s){case"m":return Ut(Jt.minute,e);case"mo":return r.ordinalNumber(e,{unit:"minute"});default:return Yt(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,r){return e.setMinutes(r,0,0),e}}class $M extends Et{constructor(){super(...arguments);N(this,"priority",50);N(this,"incompatibleTokens",["t","T"])}parse(e,s,r){switch(s){case"s":return Ut(Jt.second,e);case"so":return r.ordinalNumber(e,{unit:"second"});default:return Yt(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,r){return e.setSeconds(r,0),e}}class BM extends Et{constructor(){super(...arguments);N(this,"priority",30);N(this,"incompatibleTokens",["t","T"])}parse(e,s){const r=i=>Math.trunc(i*Math.pow(10,-s.length+3));return Zt(Yt(s.length,e),r)}set(e,s,r){return e.setMilliseconds(r),e}}class UM extends Et{constructor(){super(...arguments);N(this,"priority",10);N(this,"incompatibleTokens",["t","T","x"])}parse(e,s){switch(s){case"X":return cn(an.basicOptionalMinutes,e);case"XX":return cn(an.basic,e);case"XXXX":return cn(an.basicOptionalSeconds,e);case"XXXXX":return cn(an.extendedOptionalSeconds,e);case"XXX":default:return cn(an.extended,e)}}set(e,s,r){return s.timestampIsSet?e:Gt(e,e.getTime()-vc(e)-r)}}class jM extends Et{constructor(){super(...arguments);N(this,"priority",10);N(this,"incompatibleTokens",["t","T","X"])}parse(e,s){switch(s){case"x":return cn(an.basicOptionalMinutes,e);case"xx":return cn(an.basic,e);case"xxxx":return cn(an.basicOptionalSeconds,e);case"xxxxx":return cn(an.extendedOptionalSeconds,e);case"xxx":default:return cn(an.extended,e)}}set(e,s,r){return s.timestampIsSet?e:Gt(e,e.getTime()-vc(e)-r)}}class zM extends Et{constructor(){super(...arguments);N(this,"priority",40);N(this,"incompatibleTokens","*")}parse(e){return Ib(e)}set(e,s,r){return[Gt(e,r*1e3),{timestampIsSet:!0}]}}class HM extends Et{constructor(){super(...arguments);N(this,"priority",20);N(this,"incompatibleTokens","*")}parse(e){return Ib(e)}set(e,s,r){return[Gt(e,r),{timestampIsSet:!0}]}}const qM={G:new lM,y:new uM,Y:new dM,R:new hM,u:new fM,Q:new pM,q:new mM,M:new gM,L:new _M,w:new vM,I:new xM,d:new TM,D:new IM,E:new AM,e:new kM,c:new SM,i:new RM,a:new PM,b:new DM,B:new MM,h:new OM,H:new NM,K:new LM,k:new VM,m:new FM,s:new $M,S:new BM,X:new UM,x:new jM,t:new zM,T:new HM},WM=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,GM=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,YM=/^'([^]*?)'?$/,KM=/''/g,QM=/\S/,XM=/[a-zA-Z]/;function JM(n,t,e,s){var y,w,T,k,D,P,M,I;const r=()=>Gt((s==null?void 0:s.in)||e,NaN),i=nM(),o=(s==null?void 0:s.locale)??i.locale??yb,a=(s==null?void 0:s.firstWeekContainsDate)??((w=(y=s==null?void 0:s.locale)==null?void 0:y.options)==null?void 0:w.firstWeekContainsDate)??i.firstWeekContainsDate??((k=(T=i.locale)==null?void 0:T.options)==null?void 0:k.firstWeekContainsDate)??1,c=(s==null?void 0:s.weekStartsOn)??((P=(D=s==null?void 0:s.locale)==null?void 0:D.options)==null?void 0:P.weekStartsOn)??i.weekStartsOn??((I=(M=i.locale)==null?void 0:M.options)==null?void 0:I.weekStartsOn)??0;if(!t)return n?r():it(e,s==null?void 0:s.in);const l={firstWeekContainsDate:a,weekStartsOn:c,locale:o},d=[new cM(s==null?void 0:s.in,e)],h=t.match(GM).map(b=>{const x=b[0];if(x in Ku){const A=Ku[x];return A(b,o.formatLong)}return b}).join("").match(WM),f=[];for(let b of h){!(s!=null&&s.useAdditionalWeekYearTokens)&&Eb(b)&&Qu(b,t,n),!(s!=null&&s.useAdditionalDayOfYearTokens)&&wb(b)&&Qu(b,t,n);const x=b[0],A=qM[x];if(A){const{incompatibleTokens:C}=A;if(Array.isArray(C)){const S=f.find(et=>C.includes(et.token)||et.token===x);if(S)throw new RangeError(`The format string mustn't contain \`${S.fullToken}\` and \`${b}\` at the same time`)}else if(A.incompatibleTokens==="*"&&f.length>0)throw new RangeError(`The format string mustn't contain \`${b}\` and any other token at the same time`);f.push({token:x,fullToken:b});const R=A.run(n,b,o.match,l);if(!R)return r();d.push(R.setter),n=R.rest}else{if(x.match(XM))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");if(b==="''"?b="'":x==="'"&&(b=ZM(b)),n.indexOf(b)===0)n=n.slice(b.length);else return r()}}if(n.length>0&&QM.test(n))return r();const m=d.map(b=>b.priority).sort((b,x)=>x-b).filter((b,x,A)=>A.indexOf(b)===x).map(b=>d.filter(x=>x.priority===b).sort((x,A)=>A.subPriority-x.subPriority)).map(b=>b[0]);let g=it(e,s==null?void 0:s.in);if(isNaN(+g))return r();const v={};for(const b of m){if(!b.validate(g,l))return r();const x=b.set(g,v,l);Array.isArray(x)?(g=x[0],Object.assign(v,x[1])):g=x}return g}function ZM(n){return n.match(YM)[1].replace(KM,"'")}function tO(n,t){const e=it(n,t==null?void 0:t.in);return e.setMinutes(0,0,0),e}function eO(n,t){const e=it(n,t==null?void 0:t.in);return e.setSeconds(0,0),e}function nO(n,t){const e=it(n,t==null?void 0:t.in);return e.setMilliseconds(0),e}function sO(n,t){const e=()=>Gt(t==null?void 0:t.in,NaN),s=(t==null?void 0:t.additionalDigits)??2,r=aO(n);let i;if(r.date){const l=cO(r.date,s);i=lO(l.restDateString,l.year)}if(!i||isNaN(+i))return e();const o=+i;let a=0,c;if(r.time&&(a=uO(r.time),isNaN(a)))return e();if(r.timezone){if(c=dO(r.timezone),isNaN(c))return e()}else{const l=new Date(o+a),d=it(0,t==null?void 0:t.in);return d.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),d.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),d}return it(o+a+c,t==null?void 0:t.in)}const ka={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},rO=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,iO=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,oO=/^([+-])(\d{2})(?::?(\d{2}))?$/;function aO(n){const t={},e=n.split(ka.dateTimeDelimiter);let s;if(e.length>2)return t;if(/:/.test(e[0])?s=e[0]:(t.date=e[0],s=e[1],ka.timeZoneDelimiter.test(t.date)&&(t.date=n.split(ka.timeZoneDelimiter)[0],s=n.substr(t.date.length,n.length))),s){const r=ka.timezone.exec(s);r?(t.time=s.replace(r[1],""),t.timezone=r[1]):t.time=s}return t}function cO(n,t){const e=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),s=n.match(e);if(!s)return{year:NaN,restDateString:""};const r=s[1]?parseInt(s[1]):null,i=s[2]?parseInt(s[2]):null;return{year:i===null?r:i*100,restDateString:n.slice((s[1]||s[2]).length)}}function lO(n,t){if(t===null)return new Date(NaN);const e=n.match(rO);if(!e)return new Date(NaN);const s=!!e[4],r=Si(e[1]),i=Si(e[2])-1,o=Si(e[3]),a=Si(e[4]),c=Si(e[5])-1;if(s)return gO(t,a,c)?hO(t,a,c):new Date(NaN);{const l=new Date(0);return!pO(t,i,o)||!mO(t,r)?new Date(NaN):(l.setUTCFullYear(t,i,Math.max(r,o)),l)}}function Si(n){return n?parseInt(n):1}function uO(n){const t=n.match(iO);if(!t)return NaN;const e=tu(t[1]),s=tu(t[2]),r=tu(t[3]);return _O(e,s,r)?e*Uo+s*Bo+r*1e3:NaN}function tu(n){return n&&parseFloat(n.replace(",","."))||0}function dO(n){if(n==="Z")return 0;const t=n.match(oO);if(!t)return 0;const e=t[1]==="+"?-1:1,s=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return yO(s,r)?e*(s*Uo+r*Bo):NaN}function hO(n,t,e){const s=new Date(0);s.setUTCFullYear(n,0,4);const r=s.getUTCDay()||7,i=(t-1)*7+e+1-r;return s.setUTCDate(s.getUTCDate()+i),s}const fO=[31,null,31,30,31,30,31,31,30,31,30,31];function Sb(n){return n%400===0||n%4===0&&n%100!==0}function pO(n,t,e){return t>=0&&t<=11&&e>=1&&e<=(fO[t]||(Sb(n)?29:28))}function mO(n,t){return t>=1&&t<=(Sb(n)?366:365)}function gO(n,t,e){return t>=1&&t<=53&&e>=0&&e<=6}function _O(n,t,e){return n===24?t===0&&e===0:e>=0&&e<60&&t>=0&&t<60&&n>=0&&n<25}function yO(n,t){return t>=0&&t<=59}/*!
 * chartjs-adapter-date-fns v3.0.0
 * https://www.chartjs.org
 * (c) 2022 chartjs-adapter-date-fns Contributors
 * Released under the MIT license
 */const vO={datetime:"MMM d, yyyy, h:mm:ss aaaa",millisecond:"h:mm:ss.SSS aaaa",second:"h:mm:ss aaaa",minute:"h:mm aaaa",hour:"ha",day:"MMM d",week:"PP",month:"MMM yyyy",quarter:"qqq - yyyy",year:"yyyy"};jv._date.override({_id:"date-fns",formats:function(){return vO},parse:function(n,t){if(n===null||typeof n>"u")return null;const e=typeof n;return e==="number"||n instanceof Date?n=it(n):e==="string"&&(typeof t=="string"?n=JM(n,t,new Date,this.options):n=sO(n,this.options)),hb(n)?n.getTime():null},format:function(n,t){return tM(n,t,this.options)},add:function(n,t,e){switch(e){case"millisecond":return ph(n,t);case"second":return zD(n,t);case"minute":return UD(n,t);case"hour":return FD(n,t);case"day":return il(n,t);case"week":return HD(n,t);case"month":return fh(n,t);case"quarter":return jD(n,t);case"year":return qD(n,t);default:return n}},diff:function(n,t,e){switch(e){case"millisecond":return mh(n,t);case"second":return ZD(n,t);case"minute":return QD(n,t);case"hour":return KD(n,t);case"day":return fb(n,t);case"week":return t2(n,t);case"month":return gb(n,t);case"quarter":return JD(n,t);case"year":return e2(n,t);default:return 0}},startOf:function(n,t,e){switch(t){case"second":return nO(n);case"minute":return eO(n);case"hour":return tO(n);case"day":return Yu(n);case"week":return _n(n);case"isoWeek":return _n(n,{weekStartsOn:+e});case"month":return s2(n);case"quarter":return n2(n);case"year":return _b(n);default:return n}},endOf:function(n,t){switch(t){case"second":return l2(n);case"minute":return a2(n);case"hour":return i2(n);case"day":return pb(n);case"week":return o2(n);case"month":return mb(n);case"quarter":return c2(n);case"year":return r2(n);default:return n}}});const Ss={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"},eu=()=>{var s,r;const n=typeof window<"u"?getComputedStyle(document.documentElement):null,t=(i,o)=>(n?(n.getPropertyValue(i)||"").trim():"")||o,e=(r=(s=document.documentElement)==null?void 0:s.classList)==null?void 0:r.contains("theme-light");return{isLight:e,text:t("--color-text","#e5e5e5"),muted:t("--color-text-muted","#a1a1aa"),primary:t("--color-primary","#22c55e"),danger:t("--color-alert","#ef4444"),grid:e?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)",weekendShade:e?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.03)",holidayShade:e?"rgba(255,206,86,0.18)":"rgba(255,206,86,0.08)"}},ae={renderEmpty:n=>{const t=document.getElementById(n);if(!t)return;const e=t.parentElement;if(!e)return;t.style.display="none";let s=e.querySelector(".chart-placeholder");s||(s=document.createElement("div"),s.className="chart-placeholder text-center text-sm text-text-muted py-6",e.appendChild(s)),s.textContent="Sem dados"},renderHorasNormaisExtras:(n,t={},e={})=>{const s=eu(),r=document.getElementById(n);if(!r)return;const i=Array.from(new Set([...Object.keys(t),...Object.keys(e)])).sort(),o=i.map(c=>t[c]||0),a=i.map(c=>e[c]||0);r.chart&&r.chart.destroy(),r.chart=new vt(r,{type:"bar",data:{labels:i.map(c=>{const l=new Date(c);return l.setHours(12,0,0,0),l.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}),datasets:[{label:"Horas Normais",data:o,backgroundColor:s.primary},{label:"Horas Extras",data:a,backgroundColor:s.danger}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:s.text,font:Ss}}},scales:{x:{stacked:!0,grid:{display:!1},ticks:{color:s.muted,font:Ss,maxRotation:45,autoSkip:!0}},y:{stacked:!0,grid:{color:s.grid},ticks:{color:s.muted,font:Ss},beginAtZero:!0}}}})},renderCurvaHoras:(n,t=[],e=[],s=[])=>{const r=eu(),i=document.getElementById(n);if(!i)return;i.chart&&i.chart.destroy();const o=[...t||[]].sort((m,g)=>new Date(m.x)-new Date(g.x)),a=[...e||[]].sort((m,g)=>new Date(m.x)-new Date(g.x)),c=[...o,...a].map(m=>new Date(m.x)).filter(m=>!Number.isNaN(m)),l=c.length?new Date(Math.min(...c)):null,d=c.length?new Date(Math.max(...c)):null,h={id:"weekendShade",beforeDraw(m){const g=m.scales.x,v=m.ctx,y=g.min,w=g.max;if(!y||!w)return;const T=24*60*60*1e3;let k=y-(new Date(y).getDay()+7)%7*T;for(;k<=w+T*7;){const D=new Date(k),P=D.getDay();if(P===0||P===6){const M=g.getPixelForValue(D),I=g.getPixelForValue(new Date(k+T));v.save(),v.fillStyle=r.weekendShade,v.fillRect(M,m.chartArea.top,I-M,m.chartArea.bottom-m.chartArea.top),v.restore()}k+=T}}},f={id:"holidayShade",beforeDraw(m){if(!s||!s.length)return;const g=m.scales.x,v=m.ctx;s.forEach(y=>{const w=new Date(y);if(Number.isNaN(w))return;const T=g.getPixelForValue(w),k=g.getPixelForValue(new Date(w.getTime()+24*60*60*1e3));v.save(),v.fillStyle=r.holidayShade,v.fillRect(T,m.chartArea.top,k-T,m.chartArea.bottom-m.chartArea.top),v.restore()})}};i.chart=new vt(i,{type:"line",data:{datasets:[{label:"Horas Planejadas",data:o,borderColor:r.primary,backgroundColor:r.isLight?"rgba(34,197,94,0.15)":"rgba(34,197,94,0.12)",fill:!0,tension:.3,borderWidth:2,pointRadius:0,parsing:{xAxisKey:"x",yAxisKey:"y"}},{label:"Horas Executadas",data:a,borderColor:r.danger,backgroundColor:r.isLight?"rgba(239,68,68,0.12)":"rgba(239,68,68,0.1)",fill:!0,tension:.3,borderWidth:3,pointRadius:3,parsing:{xAxisKey:"x",yAxisKey:"y"}}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"time",time:{unit:"day"},grid:{color:r.grid},offset:!1,bounds:"ticks",min:l||void 0,max:d||void 0,ticks:{source:"data",color:r.muted,font:Ss,autoSkip:!0,maxRotation:0,callback:m=>{const g=new Date(m),v=g.toLocaleDateString("en-US",{month:"short",day:"numeric"}),y=g.getDay();return y===1?`${v} (Mon)`:y===5?`${v} (Fri)`:v}}},y:{grid:{color:r.grid},ticks:{color:r.muted,font:Ss},beginAtZero:!0}},plugins:{legend:{position:"bottom",labels:{color:r.text,font:Ss,usePointStyle:!0}},weekendShade:!0}},plugins:[h,f]})},renderHorasPorFuncao:(n,t={})=>{const e=eu(),s=document.getElementById(n);if(!s)return;const r=Object.keys(t),i=Object.values(t);s.chart&&s.chart.destroy(),s.chart=new vt(s,{type:"doughnut",data:{labels:r,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#0ea5e9","#f59e0b","#ef4444","#a855f7","#6366f1"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:e.text,font:Ss,usePointStyle:!0}}}}})}},bo=n=>n instanceof Date&&!isNaN(n),bO=(n,t)=>{const e=new Date(n),s=new Date(t);if(!bo(e)||!bo(s)||e>s)return[];const r=[];for(let i=new Date(e);i<=s;i.setDate(i.getDate()+1))r.push(new Date(i));return r},Cb=n=>bo(n)?n.toISOString().split("T")[0]:null,Rb=n=>{if(!(n!=null&&n.data_inicio)||!(n!=null&&n.data_prevista_fim))return[];const t=new Date(n.data_inicio),e=new Date(n.data_prevista_fim);if(!bo(t)||!bo(e)||t>e)return[];const s=bO(t,e),r=s.length?(n.orcamento||0)/s.length:0;let i=0;return s.map(o=>{i+=r;const a=Cb(o);return a?{x:a,y:i}:null}).filter(Boolean)},Pb=(n=[],t={},e=0,s=0,r={})=>{const i={};n.forEach(c=>{const l=c.data_recebimento||c.data_emissao||c.previsao_entrega||c.data_solicitacao;if(!l)return;const d=Cb(new Date(l));if(!d)return;const h=Number(c.valor_total||c.valor_estimado||0);i[d]=(i[d]||0)+h}),Object.entries(t||{}).forEach(([c,l])=>{const d=Number(l)||0,h=Number(r==null?void 0:r[c])||0,m=Math.max(0,d-h)*e+(h*s||e);i[c]=(i[c]||0)+m});const o=Object.keys(i).sort();let a=0;return o.map(c=>(a+=i[c],{x:c,y:a}))},Us={create:async n=>(await rr(pt(X,"notificacoes"),{...n,lida:!1,created_at:new Date().toISOString()})).id,getByUser:async(n,t=10)=>{const e=Kt(pt(X,"notificacoes"),Rt("userId","==",n),Od("created_at","desc"),sc(t));return(await wt(e)).docs.map(r=>({id:r.id,...r.data()}))},markAsRead:async n=>{await ze(ne(X,"notificacoes",n),{lida:!0,read_at:new Date().toISOString()})},markAllAsRead:async n=>{const t=Kt(pt(X,"notificacoes"),Rt("userId","==",n),Rt("lida","==",!1)),s=(await wt(t)).docs.map(r=>ze(ne(X,"notificacoes",r.id),{lida:!0,read_at:new Date().toISOString()}));await Promise.all(s)},markByType:async(n,t,e=null)=>{if(!n||!t)return;const s=[Rt("userId","==",n),Rt("tipo","==",t),Rt("lida","==",!1)];e&&s.push(Rt("obraId","==",e));const r=Kt(pt(X,"notificacoes"),...s),o=(await wt(r)).docs.map(a=>ze(ne(X,"notificacoes",a.id),{lida:!0,read_at:new Date().toISOString()}));await Promise.all(o)},checkAndNotify:async()=>{const n=new Date;n.setDate(n.getDate()+3);const t=Kt(pt(X,"compras"),Rt("status_compra","in",["Comprado","Em Trânsito"]),Rt("data_entrega_prevista","<=",n.toISOString())),e=await wt(t),s=[];for(const r of e.docs){const i=r.data(),o=Math.ceil((new Date(i.data_entrega_prevista)-new Date)/(1e3*60*60*24));o>=0&&o<=3&&s.push({userId:i.solicitante_id,tipo:"entrega_proxima",titulo:"Entrega Próxima",mensagem:`${i.descricao} - Entrega prevista em ${o} dia(s)`,link:`/compras/${r.id}`,prioridade:o===0?"alta":"normal"})}for(const r of s)await Us.create(r);return s.length}},Ir={getCompras:async(n={})=>{let e=(await wt(pt(X,"compras"))).docs.map(P=>({id:P.id,...P.data()}));const{search:s="",status:r="",obra:i="",prioridade:o="",natureza:a="",cc:c="",dateStart:l="",dateEnd:d="",onlyDelayed:h=!1,fornecedor:f="",comprador:m="",statusAprov:g="",nfConferida:v=!1,nf:y=""}=n,w=s.toLowerCase(),T=l?new Date(l):null,k=d?new Date(d):null,D=new Date;return D.setHours(0,0,0,0),e=e.filter(P=>{if(w&&!(P.descricao_compra||P.descricao||"").toLowerCase().includes(w)||r&&P.status_compra!==r||i&&P.obraId!==i||o&&P.prioridade!==o||a&&(P.natureza_compra||"").trim()!==a||c&&P.centroCustoId!==c||f&&P.fornecedorId!==f||m&&P.compradorId!==m||g&&(P.status_aprovacao||"")!==g||v&&!P.nf_conferida||y&&!(P.numero_nf||"").toLowerCase().includes(y.toLowerCase()))return!1;const M=P.data_solicitacao?new Date(P.data_solicitacao):null;if(T&&M&&M<T||k&&M&&M>k)return!1;if(h){const I=P.previsao_entrega?new Date(P.previsao_entrega):P.data_entrega_prevista?new Date(P.data_entrega_prevista):null;if(!I||I>=D||P.status_compra==="Entregue"||P.status_compra==="Recebido")return!1}return!0}),e.sort((P,M)=>{const I=P.data_solicitacao||P.data_emissao||"";return(M.data_solicitacao||M.data_emissao||"").localeCompare(I)}),e},updateStatus:async(n,t)=>{const e=ne(X,"compras",n);await ze(e,{status_compra:t})},updateCompra:async(n,t)=>{const e=ne(X,"compras",n);await ze(e,t)},deleteCompra:async n=>{const t=ne(X,"compras",n);await Ld(t)}},Xu=(n="")=>n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),xO=(n="")=>{const t=Xu(n);return t.includes("receb")||t.includes("entreg")},nu={getAlertSummary:async({obraId:n=null}={})=>{const t=pt(X,"compras"),e=n?Kt(t,Rt("obraId","==",n)):t,s=await wt(e),r=new Date;r.setHours(0,0,0,0);const i={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0,estoque:0};return s.docs.forEach(o=>{const a=o.data(),c=Xu(a.status_compra||""),l=xO(c),d=a.previsao_entrega||a.data_entrega_prevista,h=d?new Date(d):null;!l&&h&&h<r&&i.atrasados++,!l&&!h&&i.sem_previsao++,(a.estouro_orcamento||Xu(a.status_aprovacao||"")==="pendente")&&i.pendente_aprovacao++,c.includes("cot")&&i.cotacao++,a.retirada_estoque&&!l&&i.estoque++}),i},notifySummary:async(n={},t,{scope:e="global",obraId:s=null}={})=>{if(!t||!n)return;const r=new Date().toISOString().slice(0,10),i=async(a,c,l,d="normal")=>{const h=`notif_${a}_${e}_${s||"all"}_${r}_${t}`;localStorage.getItem(h)||(await Us.create({userId:t,tipo:a,titulo:c,mensagem:l,link:s?`#/obras/${s}`:"#/relatorios",prioridade:d,obraId:s}),localStorage.setItem(h,"1"))},o=[{key:"atrasados",title:"Pedidos atrasados",msg:`${n.atrasados} pedido(s) com previsão vencida.`,prio:"alta"},{key:"sem_previsao",title:"Pedidos sem previsão",msg:`${n.sem_previsao} pedido(s) sem data de entrega.`,prio:"normal"},{key:"pendente_aprovacao",title:"Aprovação pendente",msg:`${n.pendente_aprovacao} pedido(s) aguardando aprovação.`,prio:"normal"},{key:"cotacao",title:"Pedidos em cotação",msg:`${n.cotacao} pedido(s) em cotação.`,prio:"normal"},{key:"estoque",title:"Retiradas de estoque",msg:`${n.estoque} pedido(s) aguardando baixa de estoque.`,prio:"normal"}];for(const a of o)(n[a.key]||0)>0?await i(a.key,a.title,a.msg,a.prio):await Us.markByType(t,a.key,s)}},Db=[];let su=!1;const Mb=()=>{if(su)return;const n=Db.shift();n&&(su=!0,F.createToast(n.message,n.type),setTimeout(()=>{su=!1,Mb()},3500))},wO=({title:n="Confirmação",message:t="",confirmText:e="Confirmar",cancelText:s="Cancelar"})=>{const r=document.createElement("div");return r.className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",r.innerHTML=`
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
    `,r},xc={toast:(n,t="success")=>{Db.push({message:n,type:t}),Mb()},confirm:({title:n="Confirmação",message:t="Deseja prosseguir?",confirmText:e="Confirmar",cancelText:s="Cancelar"}={})=>new Promise(r=>{var a,c,l;const i=wO({title:n,message:t,confirmText:e,cancelText:s}),o=d=>{i.remove(),r(d)};(a=i.querySelector("#notif-modal-close"))==null||a.addEventListener("click",()=>o(!1)),(c=i.querySelector("#notif-modal-cancel"))==null||c.addEventListener("click",()=>o(!1)),(l=i.querySelector("#notif-modal-confirm"))==null||l.addEventListener("click",()=>o(!0)),document.body.appendChild(i)}),badge:(n=0)=>{const t=document.querySelector("#notifications-container");t&&(t.dataset.badge=n)}},EO="bbb1b9bda22e7d16e1ea3ed3f8455530",TO=30*60*1e3,Ci="weather_cache",gg={async getWeather(n,t){const e=this.getFromCache();if(e)return console.log("[Weather] Usando dados em cache"),e;try{const s=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${n}&lon=${t}&units=metric&lang=pt_br&appid=${EO}`);if(!s.ok)throw new Error(`API Error: ${s.status}`);const r=await s.json(),i={temp:Math.round(r.main.temp),feelsLike:Math.round(r.main.feels_like),description:r.weather[0].description,icon:this.getWeatherIcon(r.weather[0].id),location:r.name,humidity:r.main.humidity,windSpeed:r.wind.speed,timestamp:Date.now()};return this.saveToCache(i),console.log("[Weather] Dados atualizados:",i.location,i.temp+"°C"),i}catch(s){return console.error("[Weather] Erro ao buscar clima:",s),null}},async getLocation(){return new Promise(n=>{const t=this.getSavedLocation();if(t){console.log("[Weather] Usando localização salva:",t.city),n(t);return}if(!navigator.geolocation){console.warn("[Weather] Geolocalização não disponível, usando padrão"),n(this.getDefaultLocation());return}navigator.geolocation.getCurrentPosition(e=>{const s={lat:e.coords.latitude,lon:e.coords.longitude};console.log("[Weather] Geolocalização obtida:",s),n(s)},e=>{console.warn("[Weather] Geolocalização negada:",e.message),n(this.getDefaultLocation())},{timeout:5e3,maximumAge:6e5})})},getDefaultLocation(){return{lat:-23.5505,lon:-46.6333,city:"São Paulo"}},getSavedLocation(){const n=localStorage.getItem("user_location");return n?JSON.parse(n):null},saveLocation(n,t,e){localStorage.setItem("user_location",JSON.stringify({lat:n,lon:t,city:e}))},getWeatherIcon(n){return n>=200&&n<300?"⛈️":n>=300&&n<400||n>=500&&n<600?"🌧️":n>=600&&n<700?"❄️":n>=700&&n<800?"🌫️":n===800?"☀️":n===801?"🌤️":n===802?"⛅":n>=803?"☁️":"🌤️"},getFromCache(){const n=localStorage.getItem(Ci);if(!n)return null;try{const t=JSON.parse(n);return Date.now()-t.timestamp>TO?(console.log("[Weather] Cache expirado"),localStorage.removeItem(Ci),null):t}catch(t){return console.error("[Weather] Erro ao ler cache:",t),localStorage.removeItem(Ci),null}},saveToCache(n){try{localStorage.setItem(Ci,JSON.stringify(n))}catch(t){console.error("[Weather] Erro ao salvar cache:",t)}},clearCache(){localStorage.removeItem(Ci)}},rn={currentFilters:{obraId:"",periodo:{start:null,end:null}},init:async()=>{var t,e,s,r;const n=kt.state.currentUser;if(n){ct.render(F.createLoader());try{let i="";if(n.role==="comprador"){const o=await Be.getObras(),a=await Be.getCompradorStats(rn.currentFilters);i=fa.renderComprador(a,n,o),ct.render(i),rn.initWeatherWidget(),rn.loadTimeline(),rn.bindRecentActions(),rn.bindFilters(),a.atrasos>0&&F.createToast(`Existem ${a.atrasos} pedidos em atraso.`,"warning"),await nu.notifySummary(a.alerts,n.uid,{scope:"comprador"})}else if(n.role==="obra"||n.role==="engenheiro"){let o=n.obraPadrao||null;if(!o){const c=await((t=Be.getObras)==null?void 0:t.call(Be));c&&c.length&&(o=c[0].id)}const a=await Be.getObraStats(o);i=fa.renderObra(a),ct.render(i),a.atrasos>0&&F.createToast(`Esta obra tem ${a.atrasos} pedido(s) em atraso.`,"warning"),await nu.notifySummary(a.alerts,n.uid,{scope:"obra",obraId:o}),setTimeout(()=>{a.rdoData?(a.rdoData.horasPorDia?ae.renderHorasPorDia("chart-rdo-horas",a.rdoData.horasPorDia):ae.renderEmpty("chart-rdo-horas"),a.rdoData.horasPorFuncao?ae.renderHorasPorFuncao("chart-rdo-funcao",a.rdoData.horasPorFuncao):ae.renderEmpty("chart-rdo-funcao"),a.rdoData.funcionariosPorDia?ae.renderFuncionariosPorDia("chart-rdo-funcionarios",a.rdoData.funcionariosPorDia):ae.renderEmpty("chart-rdo-funcionarios")):(ae.renderEmpty("chart-rdo-horas"),ae.renderEmpty("chart-rdo-funcao"),ae.renderEmpty("chart-rdo-funcionarios"))},100)}else{const o=await Be.getDiretorStats(),a=await((e=Be.getObras)==null?void 0:e.call(Be))||await Ke.getObras(),c=o._allCompras||[],l=a.map(T=>{const k=Number(T.orcamento||T.valor_orcado||0),D=Number(T.tolerancia_percentual||0),P=k+k*D,I=c.filter(x=>x.obraId===T.id).reduce((x,A)=>{const C=(A.status_compra||"").toLowerCase(),R=!A.estouro_orcamento||A.status_aprovacao==="Aprovado";return(C.includes("compr")||C.includes("receb")||C.includes("entreg")||C.includes("aprov"))&&R?x+Number(A.valor_total||A.valor_estimado||0):x},0),b=P>0?I/P*100:0;return{id:T.id,nome:T.nome_obra||T.apelido_obra||T.id,limite:P,comprometido:I,percent:b}}).filter(T=>T.limite>0||T.comprometido>0).sort((T,k)=>k.percent-T.percent).slice(0,8),d=[],h=[];a.forEach(T=>{Rb({data_inicio:T.data_inicio||T.data_prevista_inicio,data_prevista_fim:T.data_prevista_fim||T.data_fim,orcamento:T.orcamento||T.valor_orcado||0}).forEach(M=>d.push(M));const D=c.filter(M=>M.obraId===T.id);Pb(D,{},0,0).forEach(M=>h.push(M))});const f=Array.from(new Set([...d.map(T=>T.x),...h.map(T=>T.x)])).sort();let m=0,g=0;const v=[],y=[],w=[];f.forEach(T=>{const k=d.filter(P=>P.x===T).map(P=>P.y).pop(),D=h.filter(P=>P.x===T).map(P=>P.y).pop();k!==void 0&&(m=k),D!==void 0&&(g=D),w.push(T),v.push(m),y.push(g)}),i=fa.renderDiretor({...o,curvaS:{planejado:v,realizado:y,labels:w},obras:a,budgetByObra:l}),ct.render(i),setTimeout(()=>{(v.length||y.length)&&Ii.renderCurvaS("chart-curva",v,y,w),Ii.renderStatusPie("chart-status",o.porStatus),o.naturezaTotais&&Ii.renderNatureza("chart-natureza-dir",o.naturezaTotais),o.ccTotais&&Ii.renderCentrosCusto("chart-cc-dir",o.ccTotais),o.gastosPorMes&&Ii.renderGastosPorMes("chart-gastos-mes",o.gastosPorMes)},100),o.atrasos>0&&F.createToast(`Há ${o.atrasos} compras com previsão vencida.`,"warning"),((s=o.alerts)==null?void 0:s.sem_previsao)>0&&F.createToast(`${o.alerts.sem_previsao} pedidos sem previsão de entrega.`,"warning"),((r=o.alerts)==null?void 0:r.pendente_aprovacao)>0&&F.createToast(`${o.alerts.pendente_aprovacao} pedidos com aprovação pendente.`,"warning"),await nu.notifySummary(o.alerts,n.uid,{scope:"diretor"})}}catch(i){console.error(i),ct.render(`<div class="text-red-500 p-4">Erro ao carregar dashboard: ${i.message}</div>`)}}},loadTimeline:async()=>{const n=document.getElementById("timeline-container");if(n)try{const t=await Be.getTimelineData(rn.currentFilters.obraId);n.innerHTML=fa.renderTimeline(t)}catch(t){console.error("[Dashboard] Erro timeline:",t),n.innerHTML='<p class="text-xs text-alert p-2">Erro ao carregar timeline</p>'}},bindFilters:()=>{const n=document.getElementById("dashboard-filter-obra"),t=document.getElementById("dashboard-filter-periodo"),e=document.getElementById("btn-apply-filters");e&&e.addEventListener("click",async()=>{const s=(n==null?void 0:n.value)||"",r=(t==null?void 0:t.value)||"30";let i=null,o=new Date;r==="7"?(i=new Date,i.setDate(o.getDate()-7)):r==="30"?(i=new Date,i.setDate(o.getDate()-30)):r==="thisMonth"?i=new Date(o.getFullYear(),o.getMonth(),1):r==="lastMonth"&&(i=new Date(o.getFullYear(),o.getMonth()-1,1),o=new Date(o.getFullYear(),o.getMonth(),0)),rn.currentFilters={obraId:s,periodo:i?{start:i,end:o}:null},rn.init()})},bindRecentActions:()=>{document.querySelectorAll('[data-action="view"]').forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.id;t&&(window.location.hash=`/compras/${t}`)})}),document.querySelectorAll('[data-action="edit"]').forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.id;t&&(window.location.hash=`/compras/${t}/editar`)})}),document.querySelectorAll('[data-action="cobrar"]').forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.fornecedor,e=n.dataset.id,s=`Olá ${t}, gostaria de uma posição sobre o pedido #${e.slice(0,6)}.`,r=`https://wa.me/?text=${encodeURIComponent(s)}`;window.open(r,"_blank")})}),document.querySelectorAll('[data-action="receber"]').forEach(n=>{n.addEventListener("click",async()=>{const t=n.dataset.id;if(!t)return;if(await xc.confirm({message:"Confirmar recebimento deste pedido? O status será alterado para Entregue."}))try{await Be.markAsDelivered(t),F.createToast("Pedido marcado como Entregue! 🎉"),rn.init()}catch(s){F.createToast("Erro ao atualizar: "+s.message,"error")}})}),document.querySelectorAll('[data-action="delete"]').forEach(n=>{n.addEventListener("click",async()=>{const t=n.dataset.id;if(!(!t||!await xc.confirm({message:"Confirma exclusão desta compra?"})))try{await Ir.deleteCompra(t),F.createToast("Compra excluída.");const s=n.closest("tr");s==null||s.remove()}catch(s){F.createToast("Erro ao excluir: "+s.message,"error")}})})},initWeatherWidget:async()=>{const n=document.getElementById("weather-widget");if(n)try{const t=await gg.getLocation(),e=await gg.getWeather(t.lat,t.lon);if(e){const s=document.getElementById("weather-icon"),r=document.getElementById("weather-temp"),i=document.getElementById("weather-location");s&&(s.textContent=e.icon),r&&(r.textContent=`${e.temp}°C`),i&&(i.textContent=e.location),n.title=e.description.charAt(0).toUpperCase()+e.description.slice(1),n.classList.remove("hidden"),n.classList.add("flex")}}catch(t){console.error("[Dashboard] Erro ao carregar clima:",t),n.style.display="none"}},_maybeNotify:async(n={})=>{const t=kt.state.currentUser;if(!t)return;const e=new Date().toISOString().slice(0,10),s=async(r,i,o)=>{const a=`notif_${r}_${e}_${t.uid}`;localStorage.getItem(a)||(await Us.create({userId:t.uid,tipo:r,titulo:i,mensagem:o,link:"#/relatorios",prioridade:"normal"}),localStorage.setItem(a,"1"))};(n==null?void 0:n.atrasados)>0&&await s("atrasados","Pedidos atrasados",`${n.atrasados} pedido(s) com previsão vencida.`),(n==null?void 0:n.sem_previsao)>0&&await s("sem_previsao","Pedidos sem previsão",`${n.sem_previsao} pedido(s) sem data de entrega.`),(n==null?void 0:n.pendente_aprovacao)>0&&await s("pendente_aprovacao","Aprovação pendente",`${n.pendente_aprovacao} pedido(s) aguardando aprovação.`)}},IO=async n=>{if(!n)return{limiteReal:0,toleranciaPercentual:0,orcamento:0};const t=await ao(ne(X,"obras",n));if(!t.exists())return{limiteReal:0,toleranciaPercentual:0,orcamento:0};const e=t.data(),s=Number(e.valor_orcado||e.orcamento||0),r=Number(e.tolerancia_percentual||0);return{limiteReal:s+s*r,toleranciaPercentual:r,orcamento:s}},_g=async(n,t,e)=>{const{limiteReal:s}=await IO(n),r=s>0&&t>s;if(r&&!e){const i=new Error("JUSTIFICATIVA_NECESSARIA");throw i.code="JUSTIFICATIVA_NECESSARIA",i}return{estouro_orcamento:r,status_aprovacao:r?"Pendente":"Aprovado"}},vr={checkDuplicidade:async(n,t)=>{const e=Kt(pt(X,"compras"),Rt("obraId","==",n),Rt("status_compra","in",["Pendente","Em Cotação"])),s=await wt(e),r=t.toLowerCase();return s.docs.some(i=>{const o=i.data(),a=(o.descricao_compra||o.descricao||"").toLowerCase(),c=o.itens||[];return a.includes(r)||c.some(l=>(l.nome||"").toLowerCase().includes(r))})},uploadArquivo:(n,t,e)=>new Promise((s,r)=>{const i=KI(vS,t),o=GI(i,n);o.on("state_changed",a=>{const c=a.bytesTransferred/a.totalBytes*100;e&&e(c)},a=>r(a),async()=>{const a=await YI(o.snapshot.ref);s(a)})}),salvarCompra:async n=>{const t=Number(n.valor_total||0),e=n.justificativa_estouro_orcamento||n.justificativa||"",s=await _g(n.obraId,t,e),r={...n,descricao_compra:n.descricao_compra||n.descricao||"",valor_total:t,justificativa_estouro_orcamento:e||null,estouro_orcamento:s.estouro_orcamento,status_aprovacao:n.status_aprovacao||s.status_aprovacao,data_solicitacao:Ft.now().toDate().toISOString(),status_compra:n.status_compra||"Pendente",criado_em:Ft.now(),criado_por:n.criado_por||null,ultima_atualizacao:new Date().toISOString(),atualizado_por:n.criado_por||null};return r.nf_conferida&&(r.nf_conferida_em=r.nf_conferida_em||Ft.now(),r.nf_conferida_por=r.nf_conferida_por||r.criado_por||null),(await rr(pt(X,"compras"),r)).id},atualizarCompra:async(n,t)=>{const e=Number(t.valor_total||0),s=t.justificativa_estouro_orcamento||t.justificativa||"";let r={estouro_orcamento:!1,status_aprovacao:t.status_aprovacao};(t.valor_total||t.obraId)&&(r=await _g(t.obraId,e,s));const i=ne(X,"compras",n);await ze(i,{...t,descricao_compra:t.descricao_compra||t.descricao||"",valor_total:e,justificativa_estouro_orcamento:s||null,estouro_orcamento:r.estouro_orcamento,status_aprovacao:t.status_aprovacao||r.status_aprovacao,nf_conferida_em:t.nf_conferida?t.nf_conferida_em||Ft.now():null,nf_conferida_por:t.nf_conferida&&(t.nf_conferida_por||t.criado_por)||null,ultima_atualizacao:new Date().toISOString(),atualizado_por:t.atualizado_por||t.criado_por||null})},getCompra:async n=>{const t=await ao(ne(X,"compras",n));return t.exists()?{id:t.id,...t.data()}:null}},yg={renderForm:({obras:n=[],fornecedores:t=[],centros:e=[],compradores:s=[],compra:r=null}={})=>{const i=!!r,o=["Pendente","Em Cotação","Aprovado","Comprado","Entregue","Recebido","Cancelado"],a=["Aprovado","Pendente","Reprovado"],c=["Lista de Material inicial","Compra emergencial","Serviço","Transporte","Outros"],l=["Normal","Alta","Crítica"],d=y=>{if(!y)return"";const w=y!=null&&y.toDate?y.toDate():new Date(y);return Number.isNaN(w.getTime())?"":w.toISOString().split("T")[0]},h=y=>String(y??"").replace(/"/g,"&quot;"),f=(y,w)=>w?y.includes(w)?y:[w,...y]:y,m=f(c,r==null?void 0:r.natureza_compra),g=f(a,r==null?void 0:r.status_aprovacao),v=f(o,r==null?void 0:r.status_compra);return`
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
        `}},js={list:async()=>(await wt(pt(X,"centrosCusto"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await rr(pt(X,"centrosCusto"),n)},update:async(n,t)=>{await ze(ne(X,"centrosCusto",n),t)}},zs={list:async()=>(await wt(pt(X,"compradores"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await rr(pt(X,"compradores"),n)},update:async(n,t)=>{await ze(ne(X,"compradores",n),t)}},Hs={list:async()=>(await wt(pt(X,"fornecedores"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await rr(pt(X,"fornecedores"),n)},update:async(n,t)=>{await ze(ne(X,"fornecedores",n),t)}},Cr={init:async()=>{ct.render(F.createLoader());try{const[n,t,e,s]=await Promise.all([wt(pt(X,"obras")),Hs.list(),js.list(),zs.list()]),r=n.docs.map(i=>({id:i.id,...i.data()}));ct.render(yg.renderForm({obras:r,fornecedores:t,centros:e,compradores:s})),Cr.bindEvents()}catch(n){console.error(n),ct.render(`<div class="text-red-500">Erro ao carregar formulário: ${n.message}</div>`)}},initEdit:async n=>{ct.render(F.createLoader());try{const[t,e,s,r,i]=await Promise.all([wt(pt(X,"obras")),Hs.list(),js.list(),zs.list(),vr.getCompra(n)]),o=t.docs.map(a=>({id:a.id,...a.data()}));ct.render(yg.renderForm({obras:o,fornecedores:e,centros:s,compradores:r,compra:i})),Cr.bindEvents(n,i,e)}catch(t){console.error(t),ct.render(`<div class="text-red-500">Erro ao carregar compra: ${t.message}</div>`)}},bindEvents:(n=null,t=null,e=[])=>{const s=document.getElementById("form-compra"),r=document.getElementById("file-upload"),i=document.getElementById("nf-upload"),o=document.getElementById("cte-upload"),a=document.getElementById("rc-upload"),c=document.getElementById("drop-zone"),l=document.getElementById("descricao_compra"),d=document.getElementById("obraId"),h=document.getElementById("status_compra"),f=document.getElementById("previsao_entrega"),m=document.getElementById("data_recebimento"),g=document.getElementById("data_emissao"),v=document.getElementById("retirada_estoque"),y=document.getElementById("fornecedorId");let w=[],T=null;const k=document.getElementById("valor_total"),D=document.getElementById("cnpj_fornecedor");let P=1;const M=document.querySelectorAll(".wizard-step"),I=document.querySelectorAll(".step-indicator"),b=document.getElementById("btn-prev"),x=document.getElementById("btn-next"),A=document.getElementById("btn-submit"),C=B=>{P=B,M.forEach(L=>L.classList.toggle("hidden",Number(L.dataset.step)!==B)),I.forEach(L=>{const q=Number(L.dataset.step)===B;L.classList.toggle("text-text",q),L.classList.toggle("text-text-muted",!q),L.classList.toggle("font-semibold",q)}),b&&b.classList.toggle("hidden",B===1),x&&x.classList.toggle("hidden",B===3),A&&A.classList.toggle("hidden",B!==3)};b==null||b.addEventListener("click",()=>C(Math.max(1,P-1))),x==null||x.addEventListener("click",()=>C(Math.min(3,P+1))),C(P),c==null||c.addEventListener("click",()=>r==null?void 0:r.click()),r==null||r.addEventListener("change",B=>R(B.target.files));const R=B=>{w=[...w,...Array.from(B)],S()},S=()=>{const B=document.getElementById("file-list");B&&(B.innerHTML=w.map((L,q)=>`
                <div class="flex items-center justify-between bg-surface border border-border p-2 rounded">
                    <span class="text-sm truncate text-text">${L.name}</span>
                    <button type="button" class="text-alert hover:text-alert/80" onclick="document.getElementById('form-compra').dispatchEvent(new CustomEvent('remove-file', {detail: ${q}}))">
                        ${F.createButton({text:"X",variant:"secondary",className:"px-2 py-0 text-xs"})}
                    </button>
                </div>
            `).join(""))};s.addEventListener("remove-file",B=>{w.splice(B.detail,1),S()}),l==null||l.addEventListener("blur",async()=>{const B=d.value,L=l.value;B&&L.length>3&&await vr.checkDuplicidade(B,L)&&F.createToast("Atenção: Já existe um pedido similar para esta obra!","warning")}),k==null||k.addEventListener("input",B=>{B.target.value=Z.formatCurrencyInput(B.target.value)}),D==null||D.addEventListener("input",B=>{B.target.value=Z.formatCnpjInput(B.target.value)}),D==null||D.addEventListener("blur",B=>{const L=B.target.value;L&&!Z.validateCNPJ(L)&&F.createToast("CNPJ inválido.","warning")}),k==null||k.addEventListener("blur",async()=>{const B=d==null?void 0:d.value,L=k.value,q=Z.parseCurrency(L),Y=document.getElementById("justificativa-container"),ft=document.getElementById("justificativa");if(B&&q>0)try{const mt=await wt(Kt(pt(X,"obras"),Rt("__name__","==",B)));if(!mt.empty){const bt=mt.docs[0].data(),G=Number(bt.valor_orcado||bt.orcamento||0),ot=Number(bt.tolerancia_percentual||0),xt=G+G*ot;xt>0&&q>xt?(Y.classList.remove("hidden"),ft.required=!0,F.createToast("Valor ultrapassa o orçamento da obra! Justificativa necessária.","warning")):(Y.classList.add("hidden"),ft.required=!1)}}catch(mt){console.error("Erro ao validar orçamento:",mt)}});const et=B=>{const L=new Date().toISOString().split("T")[0];if(B){if(h&&(h.value="Recebido"),g&&(g.value=L,g.readOnly=!0),y){T||(T=y.value);const q=Array.from(y.options).find(Y=>{var mt;return(((mt=Y.dataset)==null?void 0:mt.name)||Y.textContent||"").toLowerCase().includes("estoque axel")});q&&(y.value=q.value),y.disabled=!0}f&&(f.value=f.value||L,f.readOnly=!0),m&&(m.value=m.value||L,m.readOnly=!0),g&&!g.value&&(g.value=L)}else h&&h.value==="Recebido"&&!t&&(h.value="Pendente"),y&&(y.disabled=!1,T&&(y.value=T)),g&&(g.readOnly=!1),f&&(f.readOnly=!1),m&&(m.readOnly=!1)},z=(B,L)=>{var Y;const q=document.getElementById(L);!q||!((Y=B==null?void 0:B.files)!=null&&Y.length)||(q.textContent=B.files[0].name)};if(i==null||i.addEventListener("change",()=>z(i,"nf-upload-label")),o==null||o.addEventListener("change",()=>z(o,"cte-upload-label")),a==null||a.addEventListener("change",()=>z(a,"rc-upload-label")),t){if(s.obraId.value=t.obraId||"",s.prioridade&&(s.prioridade.value=t.prioridade||"Normal"),s.descricao_compra.value=t.descricao_compra||t.descricao||"",s.valor_total.value=Z.formatCurrencyInput(t.valor_total||0),s.fornecedorId&&(s.fornecedorId.value=t.fornecedorId||""),s.data_emissao.value=(t.data_emissao||"").split("T")[0]||"",s.previsao_entrega.value=(t.previsao_entrega||"").split("T")[0]||"",s.data_recebimento.value=(t.data_recebimento||"").split("T")[0]||"",s.status_compra.value=t.status_compra||"Pendente",s.centroCustoId&&(s.centroCustoId.value=t.centroCustoId||""),s.natureza_compra&&(s.natureza_compra.value=t.natureza_compra||""),s.compradorId&&(s.compradorId.value=t.compradorId||""),s.numero_nf&&(s.numero_nf.value=t.numero_nf||""),s.status_aprovacao&&(s.status_aprovacao.value=t.status_aprovacao||"Aprovado"),s.nf_conferida&&(s.nf_conferida.checked=!!t.nf_conferida),t.justificativa_estouro_orcamento){const B=document.getElementById("justificativa-container"),L=document.getElementById("justificativa");B.classList.remove("hidden"),L.value=t.justificativa_estouro_orcamento}t.solicitante&&s.solicitante&&(s.solicitante.value=t.solicitante),s.retirada_estoque.checked=t.retirada_estoque===!0||t.retirada_estoque==="on"}v&&(et(v.checked),v.addEventListener("change",B=>et(B.target.checked))),k&&!k.value&&(k.value=Z.formatCurrencyInput(0)),s.addEventListener("submit",async B=>{var q,Y,ft,mt,bt;B.preventDefault();const L=document.getElementById("btn-submit");try{if(D&&D.value&&!Z.validateCNPJ(D.value)){F.createToast("CNPJ inválido.","warning"),D.focus();return}const G=g!=null&&g.value?new Date(g.value):null,ot=f!=null&&f.value?new Date(f.value):null,xt=m!=null&&m.value?new Date(m.value):null;if(G&&ot&&G>ot){F.createToast("Data de emissão não pode ser após a previsão de entrega.","warning"),f==null||f.focus();return}if(G&&xt&&G>xt){F.createToast("Data de emissão não pode ser após o recebimento.","warning"),m==null||m.focus();return}L.disabled=!0,L.innerHTML=F.createLoader();const Bt=[];let Oe=(t==null?void 0:t.pdf_nf_path)||null,nn=(t==null?void 0:t.pdf_cte_path)||null,vn=(t==null?void 0:t.comprovante_rc_path)||null;const jn=async(Ne,ei)=>{var si;const ni=(si=Ne==null?void 0:Ne.files)==null?void 0:si[0];return ni?vr.uploadArquivo(ni,`${ei}/${Date.now()}_${ni.name}`):null};Oe=await jn(i,"compras/nf")||Oe,nn=await jn(o,"compras/cte")||nn,vn=await jn(a,"compras/rc")||vn;for(const Ne of w){const ei=await vr.uploadArquivo(Ne,`compras/${Date.now()}_${Ne.name}`);Bt.push({nome:Ne.name,url:ei})}const lr=new FormData(s),qe=Object.fromEntries(lr.entries()),Zr=Z.parseCurrency(qe.valor_total||0),ti=(qe.justificativa||qe.justificativa_estouro_orcamento||"").trim(),se={...qe,pdf_nf_path:Oe,pdf_cte_path:nn,comprovante_rc_path:vn,descricao_compra:qe.descricao_compra,solicitante:qe.solicitante||((q=kt.state.currentUser)==null?void 0:q.nome)||((Y=kt.state.currentUser)==null?void 0:Y.email),anexos:Bt,valor_total:Zr,justificativa_estouro_orcamento:ti||null,criado_por:((ft=kt.state.currentUser)==null?void 0:ft.email)||null,cnpj_fornecedor:qe.cnpj_fornecedor||null};se.retirada_estoque=s.retirada_estoque.checked,se.nf_conferida=((mt=s.nf_conferida)==null?void 0:mt.checked)||!1,se.nf_conferida&&(se.nf_conferida_por=((bt=kt.state.currentUser)==null?void 0:bt.email)||se.criado_por||null,se.nf_conferida_em=se.nf_conferida_em||new Date().toISOString()),se.status_compra||(se.status_compra="Pendente"),se.status_aprovacao||(se.status_aprovacao="Aprovado"),["data_emissao","previsao_entrega","data_recebimento"].forEach(Ne=>{se[Ne]===""&&delete se[Ne]}),n?(await vr.atualizarCompra(n,se),F.createToast("Compra atualizada com sucesso!")):(await vr.salvarCompra(se),F.createToast("Compra registrada com sucesso!")),Tt.navigate("/compras")}catch(G){console.error(G);const ot=(G==null?void 0:G.code)==="JUSTIFICATIVA_NECESSARIA"?"Justificativa é obrigatória quando ultrapassa o orçamento da obra.":"Erro ao registrar: "+G.message;F.createToast(ot,"error"),L.disabled=!1,L.innerHTML="<span>Registrar Solicitação</span>"}})}},ru={renderControls:(n="table",t=[])=>`
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${Z.formatDate(e.data_solicitacao||e.data_emissao)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-display text-text">${t.get(e.obraId)||e.obraId||"-"}</td>
                                    <td class="px-6 py-4 text-sm text-text max-w-xs truncate" title="${e.descricao_compra||e.descricao||""}">${e.descricao_compra||e.descricao||"-"}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${Z.formatCurrency(e.valor_total??e.valor_estimado??0)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        ${Z.renderStatusBadge(e.status_compra,e.previsao_entrega||e.data_entrega_prevista)}
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
                                            <span class="text-xs text-text-muted">${Z.formatDate(i.data_solicitacao)}</span>
                                        </div>
                                        <p class="text-sm font-display text-text mb-2 line-clamp-2">${i.descricao_compra||i.descricao||"-"}</p>
                                        <div class="flex justify-between items-center mt-3">
                                            <span class="text-sm font-display text-primary uppercase">${Z.formatCurrency(i.valor_total??i.valor_estimado??0)}</span>
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
        `},j={currentView:"table",compras:[],filters:{},obras:[],fornecedores:[],compradores:[],centros:[],obraMap:new Map,fornecedorMap:new Map,compradorMap:new Map,centroMap:new Map,init:async()=>{await j.load(),await j.render()},decorateCompras:()=>{j.obraMap=new Map(j.obras.map(n=>[n.id,n.nome_obra||n.apelido_obra||n.id])),j.fornecedorMap=new Map(j.fornecedores.map(n=>[n.id,n.nome||n.empresa||n.id])),j.compradorMap=new Map(j.compradores.map(n=>[n.id,n.nome||n.email||n.id])),j.centroMap=new Map(j.centros.map(n=>[n.id,n.nome||n.codigo||n.id])),j.compras=j.compras.map(n=>{const t=Number(n.valor_total??n.valor_estimado??0);return{...n,valor_total:t,obraNome:j.obraMap.get(n.obraId)||n.obraId||"-",fornecedorNome:j.fornecedorMap.get(n.fornecedorId)||n.fornecedor||"",compradorNome:j.compradorMap.get(n.compradorId)||n.comprador||"",centroCustoNome:j.centroMap.get(n.centroCustoId)||n.centro_custo||n.centroCustoId||"",pdf_nf_path:n.pdf_nf_path||null,pdf_cte_path:n.pdf_cte_path||null,comprovante_rc_path:n.comprovante_rc_path||null,anexos:n.anexos||[]}})},load:async()=>{const[n,t,e,s,r]=await Promise.all([Ir.getCompras(),Ke.getObras(),Hs.list(),zs.list(),js.list()]);j.compras=n,j.obras=t,j.fornecedores=e,j.compradores=s,j.centros=r,j.decorateCompras()},render:async()=>{const n=document.createElement("div");n.innerHTML=ru.renderControls(j.currentView,j.obras);const t=document.createElement("div");t.id="reports-content",t.innerHTML=j.currentView==="table"?ru.renderTable(j.compras,j.obraMap):ru.renderKanban(j.compras,j.obraMap),n.appendChild(t),ct.render(n.innerHTML),j.bindEvents()},applyFilters:async()=>{var g,v,y,w,T,k,D,P,M,I,b,x,A,C;const n=((g=document.getElementById("filter-search"))==null?void 0:g.value.toLowerCase())||"",t=((v=document.getElementById("filter-status"))==null?void 0:v.value)||"",e=((y=document.getElementById("filter-obra"))==null?void 0:y.value)||"",s=((w=document.getElementById("filter-prioridade"))==null?void 0:w.value)||"",r=((T=document.getElementById("filter-natureza"))==null?void 0:T.value)||"",i=((k=document.getElementById("filter-cc"))==null?void 0:k.value)||"",o=((D=document.getElementById("filter-fornecedor"))==null?void 0:D.value)||"",a=((P=document.getElementById("filter-comprador"))==null?void 0:P.value)||"",c=((M=document.getElementById("filter-status-aprov"))==null?void 0:M.value)||"",l=((I=document.getElementById("filter-nf-conferida"))==null?void 0:I.checked)||!1,d=((b=document.getElementById("filter-nf"))==null?void 0:b.value)||"",h=((x=document.getElementById("filter-date-start"))==null?void 0:x.value)||"",f=((A=document.getElementById("filter-date-end"))==null?void 0:A.value)||"",m=((C=document.getElementById("filter-only-delayed"))==null?void 0:C.checked)||!1;j.filters={search:n,status:t,obra:e,prioridade:s,natureza:r,cc:i,fornecedor:o,comprador:a,statusAprov:c,nfConferida:l,nf:d,dateStart:h,dateEnd:f,onlyDelayed:m},j.compras=await Ir.getCompras(j.filters),j.decorateCompras(),j.render()},bindEvents:()=>{var a,c,l,d,h,f,m;const n=(g,v)=>{const y=document.getElementById(g);y&&(y.value=v??"")};n("filter-search",j.filters.search||""),n("filter-status",j.filters.status||""),n("filter-obra",j.filters.obra||""),n("filter-prioridade",j.filters.prioridade||""),n("filter-natureza",j.filters.natureza||""),n("filter-cc",j.filters.cc||""),n("filter-fornecedor",j.filters.fornecedor||""),n("filter-comprador",j.filters.comprador||""),n("filter-status-aprov",j.filters.statusAprov||""),n("filter-nf",j.filters.nf||""),n("filter-date-start",j.filters.dateStart||""),n("filter-date-end",j.filters.dateEnd||"");const t=document.getElementById("filter-only-delayed");t&&(t.checked=!!j.filters.onlyDelayed);const e=document.getElementById("filter-nf-conferida");e&&(e.checked=!!j.filters.nfConferida),(a=document.getElementById("view-table"))==null||a.addEventListener("click",()=>{j.currentView="table",j.render()}),(c=document.getElementById("view-kanban"))==null||c.addEventListener("click",()=>{j.currentView="kanban",j.render()});const s=document.getElementById("filter-natureza"),r=document.getElementById("filter-cc"),i=document.getElementById("filter-fornecedor"),o=document.getElementById("filter-comprador");if(s){const g=Array.from(new Set(j.compras.map(v=>(v.natureza_compra||"Outros").trim())));s.innerHTML='<option value="">Todas Naturezas</option>'+g.map(v=>`<option value="${v}">${v}</option>`).join("")}r&&(r.innerHTML='<option value="">Todos Centros de Custo</option>'+j.centros.map(g=>`<option value="${g.id}">${g.nome||g.codigo||g.id}</option>`).join("")),i&&(i.innerHTML='<option value="">Todos Fornecedores</option>'+j.fornecedores.map(g=>`<option value="${g.id}">${g.nome||g.empresa||g.id}</option>`).join("")),o&&(o.innerHTML='<option value="">Todos Compradores</option>'+j.compradores.map(g=>`<option value="${g.id}">${g.nome||g.id}</option>`).join("")),n("filter-natureza",j.filters.natureza||""),n("filter-cc",j.filters.cc||""),n("filter-fornecedor",j.filters.fornecedor||""),n("filter-comprador",j.filters.comprador||""),n("filter-status-aprov",j.filters.statusAprov||""),(l=document.getElementById("btn-apply-filters"))==null||l.addEventListener("click",()=>{j.applyFilters()}),(d=document.getElementById("btn-clear-filters"))==null||d.addEventListener("click",()=>{document.getElementById("filter-search").value="",document.getElementById("filter-status").value="",document.getElementById("filter-obra").value="",document.getElementById("filter-prioridade").value="",document.getElementById("filter-natureza").value="",document.getElementById("filter-cc").value="";const g=document.getElementById("filter-fornecedor"),v=document.getElementById("filter-comprador"),y=document.getElementById("filter-nf"),w=document.getElementById("filter-status-aprov");g&&(g.value=""),v&&(v.value=""),y&&(y.value=""),w&&(w.value=""),document.getElementById("filter-date-start").value="",document.getElementById("filter-date-end").value="",document.getElementById("filter-only-delayed").checked=!1;const T=document.getElementById("filter-nf-conferida");T&&(T.checked=!1),j.applyFilters()}),(h=document.getElementById("btn-export-csv"))==null||h.addEventListener("click",()=>{try{j.exportCsv()}catch(g){F.createToast("Erro ao exportar: "+g.message,"error")}}),(f=document.getElementById("btn-export-obra"))==null||f.addEventListener("click",()=>{try{j.exportGrouped("obra")}catch(g){F.createToast("Erro ao exportar: "+g.message,"error")}}),(m=document.getElementById("btn-export-fornecedor"))==null||m.addEventListener("click",()=>{try{j.exportGrouped("fornecedor")}catch(g){F.createToast("Erro ao exportar: "+g.message,"error")}}),document.querySelectorAll('[data-action="view"]').forEach(g=>{g.addEventListener("click",()=>{const v=g.dataset.id,y=j.compras.find(w=>w.id===v);if(!y)return alert("Compra não encontrada.");j.showModal(y,!1)})}),document.querySelectorAll('[data-action="edit"]').forEach(g=>{g.addEventListener("click",()=>{const v=g.dataset.id,y=j.compras.find(w=>w.id===v);if(!y)return alert("Compra não encontrada.");j.showModal(y,!0)})}),document.querySelectorAll('[data-action="delete"]').forEach(g=>{g.addEventListener("click",async()=>{const v=g.dataset.id;if(await xc.confirm({message:"Confirmar exclusão da compra?"}))try{await Ir.deleteCompra(v),F.createToast("Compra excluída."),await j.load(),j.render()}catch(w){F.createToast("Erro ao excluir: "+w.message,"error")}})}),document.addEventListener("kanban-move-next",async g=>{const{id:v,current:y}=g.detail,w=["Pendente","Em Cotação","Aprovado","Comprado","Entregue"],T=w.indexOf(y)+1;if(T<w.length){const k=w[T];try{await Ir.updateStatus(v,k),F.createToast(`Movido para ${k}`),await j.load(),j.render()}catch(D){F.createToast("Erro ao mover: "+D.message,"error")}}})},showModal:(n,t=!1)=>{var o,a,c,l;const e=document.createElement("div");e.className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4";const s=(d=[],h,f=m=>m.label)=>d.map(m=>{const g=m.value??m.id,v=f(m);return`<option value="${g}" ${h===g?"selected":""}>${v}</option>`}).join(""),r=(d,h)=>`
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
                                    ${s(j.obras,n.obraId,d=>d.nome_obra||d.apelido_obra||d.id)}
                                </select>`:`<p class="text-text">${n.obraNome||n.obraId||"-"}</p>`)}
                        ${r("Status",t?`<select id="modal-status" class="input">${["Pendente","Em Cotação","Aprovado","Comprado","Entregue","Recebido","Cancelado"].map(d=>`<option value="${d}" ${n.status_compra===d?"selected":""}>${d}</option>`).join("")}</select>`:`<p class="text-text">${n.status_compra||"-"}</p>`)}
                        ${r("Descrição",t?`<input id="modal-desc" class="input" value="${(n.descricao_compra||n.descricao||"").replace(/"/g,"&quot;")}">`:`<p class="text-text">${n.descricao_compra||n.descricao||"-"}</p>`)}
                        ${r("Valor",t?`<input id="modal-valor" type="number" step="0.01" class="input" value="${n.valor_total??n.valor_estimado??0}">`:`<p class="text-text">${Z.formatCurrency(n.valor_total??n.valor_estimado??0)}</p>`)}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${r("Fornecedor",t?`<select id="modal-fornecedor" class="input"><option value="">Selecione...</option>${s(j.fornecedores,n.fornecedorId,d=>d.nome||d.empresa||d.id)}</select>`:`<p class="text-text">${n.fornecedorNome||n.fornecedor||"-"}</p>`)}
                        ${r("Comprador",t?`<select id="modal-comprador" class="input"><option value="">Selecione...</option>${s(j.compradores,n.compradorId,d=>d.nome||d.email||d.id)}</select>`:`<p class="text-text">${n.compradorNome||n.comprador||"-"}</p>`)}
                        ${r("Centro de Custo",t?`<select id="modal-cc" class="input"><option value="">Selecione...</option>${s(j.centros,n.centroCustoId,d=>d.nome||d.codigo||d.id)}</select>`:`<p class="text-text">${n.centroCustoNome||"-"}</p>`)}
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
                        ${r("Data Emissão",t?`<input id="modal-emissao" type="date" class="input" value="${(n.data_emissao||"").split("T")[0]}">`:`<p class="text-text">${Z.formatDate(n.data_emissao)}</p>`)}
                        ${r("Prev. Entrega",t?`<input id="modal-prev" type="date" class="input" value="${(n.previsao_entrega||n.data_entrega_prevista||"").split("T")[0]}">`:`<p class="text-text">${Z.formatDate(n.previsao_entrega||n.data_entrega_prevista)}</p>`)}
                        ${r("Recebimento",t?`<input id="modal-receb" type="date" class="input" value="${(n.data_recebimento||"").split("T")[0]}">`:`<p class="text-text">${Z.formatDate(n.data_recebimento)}</p>`)}
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
        `,document.body.appendChild(e);const i=()=>e.remove();(a=e.querySelector("#modal-close"))==null||a.addEventListener("click",i),(c=e.querySelector("#modal-close-2"))==null||c.addEventListener("click",i),t&&((l=e.querySelector("#modal-save"))==null||l.addEventListener("click",async()=>{var h,f,m,g,v,y,w,T,k,D,P,M,I,b,x;const d={obraId:((h=e.querySelector("#modal-obra"))==null?void 0:h.value)||n.obraId,status_compra:((f=e.querySelector("#modal-status"))==null?void 0:f.value)||n.status_compra,descricao_compra:((m=e.querySelector("#modal-desc"))==null?void 0:m.value)||"",valor_total:Number(((g=e.querySelector("#modal-valor"))==null?void 0:g.value)||0),fornecedorId:((v=e.querySelector("#modal-fornecedor"))==null?void 0:v.value)||"",compradorId:((y=e.querySelector("#modal-comprador"))==null?void 0:y.value)||"",centroCustoId:((w=e.querySelector("#modal-cc"))==null?void 0:w.value)||"",natureza_compra:((T=e.querySelector("#modal-natureza"))==null?void 0:T.value)||"",numero_nf:((k=e.querySelector("#modal-nf"))==null?void 0:k.value)||"",cnpj_fornecedor:((D=e.querySelector("#modal-cnpj"))==null?void 0:D.value)||"",status_aprovacao:((P=e.querySelector("#modal-aprov"))==null?void 0:P.value)||n.status_aprovacao,data_emissao:((M=e.querySelector("#modal-emissao"))==null?void 0:M.value)||"",previsao_entrega:((I=e.querySelector("#modal-prev"))==null?void 0:I.value)||"",data_recebimento:((b=e.querySelector("#modal-receb"))==null?void 0:b.value)||"",nf_conferida:((x=e.querySelector("#modal-nf-conferida"))==null?void 0:x.checked)||!1};["data_emissao","previsao_entrega","data_recebimento"].forEach(A=>{d[A]===""&&delete d[A]});try{if(d.cnpj_fornecedor&&!Z.validateCNPJ(d.cnpj_fornecedor)){alert("CNPJ inválido.");return}await Ir.updateCompra(n.id,d),i(),await j.load(),j.render(),F.createToast("Compra atualizada.")}catch(A){alert("Erro ao salvar: "+A.message)}}))},exportCsv:()=>{if(!j.compras.length){F.createToast("Sem dados para exportar.","warning");return}const n=new Map(j.obras.map(d=>[d.id,d.nome_obra||d.apelido_obra||d.id])),t=new Map(j.fornecedores.map(d=>[d.id,d.nome||d.empresa||d.id])),e=new Map(j.compradores.map(d=>[d.id,d.nome||d.id])),s=new Map(j.centros.map(d=>[d.id,d.nome||d.codigo||d.id])),r=["Obra","NF-e","Valor","Data Emissao","Status","Data Recebimento","Prev. Entrega","Natureza","Centro Custo","Comprador","Fornecedor","CNPJ Fornecedor","Justificativa Estouro","Status Aprovacao"],i=j.compras.map(d=>[`"${n.get(d.obraId)||d.obraId||""}"`,`"${d.numero_nf||""}"`,String(d.valor_total||d.valor_estimado||0).replace(".",","),d.data_emissao||"",d.status_compra||"",d.data_recebimento||"",d.previsao_entrega||d.data_entrega_prevista||"",d.natureza_compra||"",s.get(d.centroCustoId)||d.centroCustoNome||d.centro_custo||d.centroCustoId||"",e.get(d.compradorId)||d.comprador||"",t.get(d.fornecedorId)||d.fornecedor||"",d.cnpj_fornecedor||"",(d.justificativa_estouro_orcamento||"").replace(/"/g,"'"),d.status_aprovacao||""]);let o="\uFEFF"+r.join(";")+`
`;o+=i.map(d=>d.join(";")).join(`
`);const a=new Blob([o],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(a),l=document.createElement("a");l.href=c,l.download=`compras_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(c)},exportGrouped:(n="obra")=>{const t=j.compras||[];if(!t.length){F.createToast("Sem dados para exportar.","warning");return}const e=n==="obra",s=e?["Obra","Qtd","Total (R$)"]:["Fornecedor","Qtd","Total (R$)"],r=new Map;t.forEach(d=>{const h=e?j.obraMap.get(d.obraId)||d.obraId||"N/D":j.fornecedorMap.get(d.fornecedorId)||d.fornecedor||"N/D",f=r.get(h)||{qtd:0,total:0};f.qtd+=1,f.total+=Number(d.valor_total??d.valor_estimado??0),r.set(h,f)});const i=Array.from(r.entries()).map(([d,h])=>[`"${d}"`,h.qtd,h.total.toFixed(2).replace(".",",")]);let o="\uFEFF"+s.join(";")+`
`;o+=i.map(d=>d.join(";")).join(`
`);const a=new Blob([o],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(a),l=document.createElement("a");l.href=c,l.download=`compras_${n}_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(c)}},vg={getUsers:async()=>(await wt(pt(X,"usuarios"))).docs.map(t=>({id:t.id,...t.data()})),updateUser:async(n,t)=>{await ze(ne(X,"usuarios",n),t)},createUserProfile:async(n,t)=>{await ly(ne(X,"usuarios",n),t)}},AO={render:n=>`
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
        `},kO=n=>(Array.isArray(n)?n:[n]).filter(Boolean),Os={hasRole:(n,t=kt.state.currentUser)=>{const e=kO(n);return!t||!e.length?!1:t.role==="administrador"?!0:e.includes(t.role)},guard:(n,t)=>{if(!Os.hasRole(n)){const e=new Error("Acesso negado para esta ação.");throw e.code="PERMISSION_DENIED",e}return t()},canEditObra:n=>Os.hasRole(["diretor","comprador","obra"],n),canDeleteObra:n=>Os.hasRole(["diretor"],n),canEditCompra:n=>Os.hasRole(["diretor","comprador"],n),canApproveCompra:n=>Os.hasRole(["diretor","financeiro"],n),canEditCadastros:n=>Os.hasRole(["diretor"],n)},Ju={init:async()=>{ct.render(F.createLoader());try{Os.guard(["administrador","diretor"],async()=>{const n=await vg.getUsers();ct.render(AO.render(n)),Ju.bindEvents()})}catch(n){ct.render(`<div class="text-red-500">Erro: ${n.message}</div>`)}},bindEvents:()=>{document.addEventListener("edit-user",n=>{const t=n.detail,e=prompt("Nova função (comprador, obra, diretor, administrador):");e&&vg.updateUser(t,{role:e}).then(()=>{F.createToast("Usuário atualizado!"),Ju.init()}).catch(s=>F.createToast("Erro: "+s.message,"error"))})}};let Ge=new Date().getMonth(),Cs=new Date().getFullYear();const Rr={setMonth:(n,t)=>{Ge=n,Cs=t},changeMonth:n=>{Ge+=n,Ge<0&&(Ge=11,Cs-=1),Ge>11&&(Ge=0,Cs+=1)},render:(n=[])=>{const t=new Date,e={};(n||[]).forEach(d=>{const h=d.date||d.previsao_entrega||d.data_entrega_prevista;if(!h)return;const f=new Date(h);if(Number.isNaN(f.getTime()))return;const m=f.toISOString().split("T")[0];e[m]||(e[m]=[]),e[m].push(d)});const s=new Date(Cs,Ge,1),i=new Date(Cs,Ge+1,0).getDate(),o=s.getDay();let l=`
            <div class="card">
                <div class="flex justify-between items-center mb-4">
                    <button id="cal-prev" class="text-text-muted hover:text-text px-2 py-1 border border-border rounded">&larr;</button>
                    <h3 class="text-lg font-display text-text">Calendário de Entregas - ${["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][Ge]} ${Cs}</h3>
                    <button id="cal-next" class="text-text-muted hover:text-text px-2 py-1 border border-border rounded">&rarr;</button>
                </div>
                
            <div class="flex items-center gap-3 text-xs text-text-muted mb-2">
                <span class="inline-flex items-center gap-1"><span class="w-3 h-3 inline-block bg-primary/30 border border-primary rounded"></span> Compras</span>
                <span class="inline-flex items-center gap-1"><span class="w-3 h-3 inline-block bg-blue-500/30 border border-blue-500 rounded"></span> RDO</span>
            </div>
        
                
                <div class="grid grid-cols-7 gap-2">
                    ${["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].map(d=>`<div class="text-center text-xs font-display text-text-muted uppercase tracking-wide py-2">${d}</div>`).join("")}
        `;for(let d=0;d<o;d++)l+='<div class="aspect-square"></div>';for(let d=1;d<=i;d++){const h=new Date(Cs,Ge,d),f=h.toISOString().split("T")[0],m=e[f]||[],g=d===t.getDate()&&Ge===t.getMonth(),v=h<t&&!g;l+=`
                <div class="aspect-square border border-border rounded p-1 ${g?"bg-primary/10 border-primary":"bg-surface"} ${v?"opacity-50":""} hover:bg-canvas transition-colors cursor-pointer">
                    <div class="text-xs font-display ${g?"text-primary font-bold":"text-text"}">${d}</div>
                    ${m.length>0?`
                        <div class="mt-1 space-y-1">
                            ${m.slice(0,2).map(y=>{const w=y.type==="rdo";return`
                                <div class="text-[10px] ${w?"bg-blue-500/20 border border-blue-500":"bg-primary/20 border border-primary"} rounded px-1 truncate" title="${y.descricao_compra||y.descricao||y.label||(w?"RDO":"Compra")}">
                                    ${(y.descricao_compra||y.descricao||y.label||(w?"RDO":"Compra")).substring(0,15)}
                                </div>
                            `}).join("")}
                            ${m.length>2?`<div class="text-[9px] text-text-muted">+${m.length-2}</div>`:""}
                        </div>
                    `:""}
                </div>
            `}return l+=`
                </div>
            </div>
        `,l},renderTimeline:(n=[])=>{const t=n.filter(e=>(e.previsao_entrega||e.data_entrega_prevista)&&new Date(e.previsao_entrega||e.data_entrega_prevista)>=new Date).sort((e,s)=>new Date(e.previsao_entrega||e.data_entrega_prevista)-new Date(s.previsao_entrega||s.data_entrega_prevista)).slice(0,10);return`
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
        `}},iu={renderList:n=>`
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
                                ${t.valor_orcado?`<p class="heading-muted"><span class="text-text">Orçamento:</span> ${Z.formatCurrency(t.valor_orcado)}</p>`:""}
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
                    ${F.createCard({title:"Total Gasto",content:`<p class="text-4xl font-display text-text uppercase">${Z.formatCurrency(t.totalGasto)}</p><p class="text-sm heading-muted mt-1">Orçamento: ${Z.formatCurrency(n.valor_orcado||0)}</p>`})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${t.atrasos||0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(t.sla||0)<80?"alert":"primary"} uppercase">${(t.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Entregues no prazo</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(t.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia vs Orçamento",content:`<p class="text-4xl font-display text-${(t.economia||0)<0?"alert":"primary"} uppercase">${Z.formatCurrency(t.economia||0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(t.curvaPercent||0).toFixed(1)}%</p>`})}
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
                                                    <td class="px-4 py-2 text-sm text-text text-right">${Z.formatCurrency(m.valor)}</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right">${d?(m.valor/d*100).toFixed(1):"0.0"}%</td>
                                                </tr>
                                            `).join(""),f=`
                                            <tr class="bg-canvas">
                                                <td class="px-4 py-2 text-sm font-display text-text">Total</td>
                                                <td class="px-4 py-2 text-sm font-display text-text text-right">${Z.formatCurrency(d)}</td>
                                                <td class="px-4 py-2 text-sm font-display text-text text-right">100%</td>
                                            </tr>`;return!h||h.trim().length===0?'<tr><td colspan="3" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>':h+f})()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div id="calendar-wrapper" class="lg:col-span-2">
                        ${Rr.render(t.comprasCalendar||t.comprasRecentes)}
                    </div>
                    <div id="timeline-wrapper">
                        ${Rr.renderTimeline(t.comprasCalendar||t.comprasRecentes)}
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
                                        <td class="px-6 py-4 text-sm text-text-muted">${Z.formatDate(d.data_solicitacao||d.data_emissao)}</td>
                                        <td class="px-6 py-4 text-sm text-text" title="${d.descricao_compra||d.descricao||"-"}">${d.descricao_compra||d.descricao||"-"}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${Z.formatCurrency(d.valor_total??d.valor_estimado??0)}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${Z.formatDate(d.previsao_entrega||d.data_entrega_prevista)}</td>
                                        <td class="px-6 py-4 text-sm text-text">${d.compradorNome||d.comprador||d.compradorId||"-"}</td>
                                        <td class="px-6 py-4 text-sm">
                                            ${Z.renderStatusBadge(d.status_compra,d.previsao_entrega||d.data_entrega_prevista)}
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
        `}},ye={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"},Yn=()=>{var s,r;const n=typeof window<"u"?getComputedStyle(document.documentElement):null,t=(i,o)=>(n?(n.getPropertyValue(i)||"").trim():"")||o,e=(r=(s=document.documentElement)==null?void 0:s.classList)==null?void 0:r.contains("theme-light");return{isLight:e,text:t("--color-text","#e5e5e5"),muted:t("--color-text-muted","#a1a1aa"),primary:t("--color-primary","#22c55e"),primaryStrong:t("--color-primary-strong","#16a34a"),danger:t("--color-alert","#ef4444"),grid:e?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)"}},Ob=()=>{const n=Yn();vt.defaults.color=n.text,vt.defaults.font.family=ye.family,vt.defaults.font.weight=ye.weight,vt.defaults.plugins.legend.labels.color=n.text,vt.defaults.scales=vt.defaults.scales||{}};Ob();const SO=()=>{Ob()},CO={id:"percentLabels",afterDraw(n){if(n.config.type!=="doughnut")return;const t=Yn(),{ctx:e}=n;n.data.datasets.forEach(s=>{const r=n.getDatasetMeta(0),i=s.data.reduce((o,a)=>o+a,0);r.data.forEach((o,a)=>{const c=s.data[a];if(!c||!i)return;const l=`${(c/i*100).toFixed(1)}%`;e.save(),e.fillStyle=t.text,e.font="600 11px "+ye.family,e.textAlign="center",e.textBaseline="middle";const d=o.tooltipPosition();e.fillText(l,d.x,d.y),e.restore()})})}};vt.register(CO);const br={renderCategorias:(n,t)=>{const e=Yn(),s=document.getElementById(n);if(!s)return;const r=Object.keys(t),i=Object.values(t);s.chart&&s.chart.destroy(),s.chart=new vt(s,{type:"bar",data:{labels:r,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:e.primary,borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:e.grid},ticks:{color:e.muted,font:ye}},y:{grid:{color:e.grid},ticks:{color:e.muted,font:ye}}}}})},renderStatusObra:(n,t)=>{const e=Yn(),s=document.getElementById(n);if(!s)return;const r=Object.keys(t),i=Object.values(t);s.chart&&s.chart.destroy(),s.chart=new vt(s,{type:"doughnut",data:{labels:r,datasets:[{data:i,backgroundColor:[e.primary,e.primaryStrong,e.muted,e.danger,"#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:10},plugins:{legend:{position:"bottom",labels:{color:e.text,font:ye,padding:12,usePointStyle:!0}},tooltip:{callbacks:{label:o=>{const a=o.dataset.data.reduce((l,d)=>l+d,0),c=a?(o.parsed/a*100).toFixed(1):0;return`${o.label}: ${c}% (${o.parsed})`}}}},cutout:"65%",pluginsCustom:!0}})},renderCentrosCusto:(n,t)=>{const e=Yn(),s=document.getElementById(n);if(!s)return;const r=Object.keys(t),i=Object.values(t);s.chart&&s.chart.destroy(),s.chart=new vt(s,{type:"bar",data:{labels:r,datasets:[{data:i,backgroundColor:e.primary,borderRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:e.grid},ticks:{color:e.muted,font:ye,callback:o=>`R$ ${(o/1e3).toFixed(0)}k`},beginAtZero:!0},y:{grid:{display:!1},ticks:{color:e.muted,font:ye,autoSkip:!1}}},indexAxis:"y"}})},renderFinancePVAV:(n,t=[],e=[])=>{const s=Yn(),r=document.getElementById(n);r&&(r.chart&&r.chart.destroy(),r.chart=new vt(r,{type:"line",data:{datasets:[{label:"Planejado (PV)",data:t,borderColor:s.primaryStrong,backgroundColor:"rgba(34,197,94,0.12)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}},{label:"Real (AV)",data:e,borderColor:s.danger,backgroundColor:"rgba(239,68,68,0.08)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"time",time:{unit:"day"},grid:{color:s.grid},ticks:{color:s.muted}},y:{grid:{color:s.grid},ticks:{color:s.muted,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}},plugins:{legend:{position:"bottom",labels:{color:s.text,font:ye,usePointStyle:!0}}}}}))},renderCurvaS:(n,t=[],e=[],s=[])=>{const r=Yn(),i=document.getElementById(n);i&&(i.chart&&i.chart.destroy(),i.chart=new vt(i,{type:"line",data:{labels:t.length?t:e.map((o,a)=>`Semana ${a+1}`),datasets:[{label:"Planejado",data:e,borderColor:r.muted,backgroundColor:"transparent",borderWidth:2,borderDash:[5,5],tension:.4,pointRadius:0},{label:"Realizado",data:s,borderColor:r.primary,backgroundColor:"rgba(34, 197, 94, 0.1)",borderWidth:3,tension:.4,fill:!0,pointRadius:4,pointBackgroundColor:r.primary,pointBorderColor:"#121212",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"top",labels:{color:r.text,font:ye,usePointStyle:!0}},tooltip:{backgroundColor:"#1c1c1e",titleColor:r.text,bodyColor:r.muted,borderColor:"#333333",borderWidth:1,titleFont:ye,bodyFont:ye}},scales:{x:{grid:{color:r.grid},ticks:{color:r.muted,font:ye}},y:{grid:{color:r.grid},ticks:{color:r.muted,font:ye,callback:o=>`R$ ${(o/1e3).toFixed(0)}k`},beginAtZero:!0}}}}))},renderGastosMensais:(n,t)=>{const e=Yn(),s=document.getElementById(n);if(!s)return;const r=Object.keys(t).sort(),i=r.map(o=>t[o]);s.chart&&s.chart.destroy(),s.chart=new vt(s,{type:"line",data:{labels:r.map(o=>{const a=new Date(o);return Number.isNaN(a.getTime())?o:a.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}),datasets:[{label:"Gastos Diários",data:i,borderColor:e.primary,backgroundColor:"rgba(34,197,94,0.1)",borderWidth:2,tension:.3,fill:!0,pointRadius:3,pointBackgroundColor:e.primary}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{type:"category",grid:{display:!1},ticks:{color:e.muted,font:ye,maxRotation:45,autoSkip:!0,maxTicksLimit:10}},y:{grid:{color:e.grid},ticks:{color:e.muted,font:ye,callback:o=>`R$ ${(o/1e3).toFixed(0)}k`},beginAtZero:!0}}}})}},vh=_S(),bg=vh.BASE_URL||"https://apiexterna.diariodeobra.app/v1",RO=()=>{const n=vh.TOKEN||(typeof window<"u"?window.__RDO_API_TOKEN:"");if(n)return n;try{const t=localStorage.getItem("axel_rdo_token");if(t)return t}catch{}return""};async function ou(n,t={}){const e=RO();if(!e)return console.warn("[RDO] Token não encontrado; defina __RDO_API_CONFIG.TOKEN ou localStorage.axel_rdo_token"),null;const s={...t.headers,token:e,"Content-Type":"application/json"},r=await fetch(`${bg}${n}`,{...t,headers:s});if(console.info("[RDO] Request:",`${bg}${n}`,"status:",r.status),!r.ok)return console.warn(`Erro na API RDO ao acessar ${n}: ${r.status} ${r.statusText}`),null;const i=await r.json();return console.info("[RDO] Response data size:",Array.isArray(i)?i.length:Object.keys(i||{}).length),i}const Qe={getByObra:async(n,t,e)=>{const s=await Qe.getObraByOs(n);if(!s)return[];const r=await Qe.getRelatoriosByObra(s._id);if(!r||!r.length)return[];const i=a=>{if(!a)return!0;const c=new Date(a);if(c.setHours(12,0,0,0),t){const l=new Date(t);if(l.setHours(12,0,0,0),c<l)return!1}if(e){const l=new Date(e);if(l.setHours(12,0,0,0),c>l)return!1}return!0},o=[];for(const a of r){const c=await Qe.getRelatorioDetalhe(s._id,a._id);c&&i(c==null?void 0:c.data)&&o.push(c)}return o},getObraByOs:async n=>{const t=await ou("/obras");if(!Array.isArray(t))return null;const e=String(n||"").trim();if(!e)return null;const s=t.find(o=>String(o._id)===e);if(s)return s;const r=t.find(o=>{const a=(o.nome||"").match(/(\d+)$/);return a&&a[1]===e});if(r)return r;const i=t.find(o=>(o.nome||"").includes(e));return i||null},getRelatoriosByObra:async n=>{const t=await ou(`/obras/${n}/relatorios`);return Array.isArray(t)?t:[]},getRelatorioDetalhe:async(n,t)=>ou(`/obras/${n}/relatorios/${t}`),getIntegratedDataForObra:async n=>{const t=await Qe.getObraByOs(n);if(!t)return console.warn("[RDO] Obra não localizada para OS:",n),null;console.info("[RDO] Obra encontrada para OS:",n,"->",t._id,t.nome);const e=await Qe.getRelatoriosByObra(t._id);if(!e.length)return console.warn("[RDO] Nenhum relatório retornado para obra",t._id),{quantidadeRelatorios:0,totalHoras:"0.00",totalHorasExtras:"0.00",reports:[]};const s=(await Promise.all(e.map(c=>Qe.getRelatorioDetalhe(t._id,c._id)))).filter(Boolean);let r=0,i=0;const o=9,a=c=>{if(!c||typeof c!="string")return 0;const[l,d]=c.split(":").map(Number);return(l||0)+(d||0)/60};return s.forEach(c=>{var h,f;(((h=c==null?void 0:c.maoDeObra)==null?void 0:h.padrao)||[]).forEach(m=>{const g=Number(m.quantidade)||0;r+=g,g>o&&(i+=g-o)}),(((f=c==null?void 0:c.maoDeObra)==null?void 0:f.personalizada)||[]).forEach(m=>{const g=a(m.horasTrabalhadas);r+=g,g>o&&(i+=g-o)})}),{quantidadeRelatorios:s.length,totalHoras:r.toFixed(2),totalHorasExtras:i.toFixed(2),reports:s,relatoriosRaw:s}},processRDOData:(n=[])=>{const t={},e={},s={},r={},i={};let o=0,a=0;const c=new Set,l=9,d={},h=v=>{if(typeof v=="number")return v;if(typeof v=="string"){if(v.includes(":")){const[w,T]=v.split(":").map(Number);return(w||0)+(T||0)/60}const y=Number(v);return Number.isNaN(y)?0:y}return 0},f=v=>{if(!v)return null;let y=null;if(v instanceof Date?y=new Date(v.getTime()):typeof v=="number"&&(y=new Date(v)),typeof v=="string"){let w=v;if(w.includes("T")&&(w=w.split("T")[0]),w.includes("/")&&w.split("/").length===3){const[T,k,D]=w.split("/"),P=D.length===2?`20${D}`:D;y=new Date(`${P}-${k}-${T}`)}if(w.includes("-")){const[T,k,D]=w.split("-");y=new Date(Number(T),Number(k)-1,Number(D))}}return!y||Number.isNaN(y.getTime())?null:(y.setHours(12,0,0,0),y.setDate(y.getDate()+2),y)};n.forEach(v=>{var M,I;const y=v.data||v.data_inicio||v.dataInicio||v.createdAt||v.dataReferencia||v.dataServiço||v.dataServico||v.dataRelatorio||v.dataRel,w=f(y);if(!w||Number.isNaN(w.getTime()))return;const T=b=>String(b).padStart(2,"0"),k=`${w.getFullYear()}-${T(w.getMonth()+1)}-${T(w.getDate())}`;t[k]||(t[k]=0),e[k]||(e[k]=0),s[k]||(s[k]=0);const D=((M=v==null?void 0:v.maoDeObra)==null?void 0:M.padrao)||[],P=((I=v==null?void 0:v.maoDeObra)==null?void 0:I.personalizada)||[];D.forEach(b=>{const x=Number(b.quantidade)||0,A=Math.max(0,x-l),C=x-A;t[k]+=x,e[k]+=A,s[k]+=C;const R=b.funcao||"Outros";r[R]=(r[R]||0)+x,b.funcionario_id&&(i[k]||(i[k]=new Set),i[k].add(b.funcionario_id),c.add(b.funcionario_id));const S=b.nome||b.funcionario||b.descricao||"Técnico";d[S]=(d[S]||0)+x,o+=x,a+=A}),P.forEach(b=>{const x=h(b.horasTrabalhadas),A=Math.max(0,x-l),C=x-A;t[k]+=x,e[k]+=A,s[k]+=C;const R=b.funcao||"Outros";r[R]=(r[R]||0)+x,b.funcionario_id&&(i[k]||(i[k]=new Set),i[k].add(b.funcionario_id),c.add(b.funcionario_id));const S=b.nome||b.funcionario||b.descricao||"Técnico";d[S]=(d[S]||0)+x,o+=x,a+=A})});const m={};Object.keys(i).forEach(v=>{m[v]=i[v].size});const g=Object.keys(t).sort().map(v=>({data:v,horasNormais:s[v]||0,horasExtras:e[v]||0,total:t[v]||0,funcionarios:m[v]||0}));return{horasPorDia:t,horasNormaisPorDia:s,horasExtrasPorDia:e,horasPorFuncao:r,funcionariosPorDia:m,totalHoras:o,totalExtras:a,totalFuncionarios:c.size,mediaHorasDia:o/Math.max(1,Object.keys(t).length),mediaFuncionariosDia:Object.keys(m).length?Object.values(m).reduce((v,y)=>v+y,0)/Object.keys(m).length:0,techHours:d,diarios:g}},getHolidays:()=>vh.HOLIDAYS||[]},Nb=Object.freeze(Object.defineProperty({__proto__:null,RDOService:Qe},Symbol.toStringTag,{value:"Module"})),xg=n=>{if(!n)return null;if(n instanceof Date)return n;if(n.toDate)return n.toDate();if(typeof n=="number")return new Date(n);if(typeof n=="string"){if(n.includes("/")&&n.split("/").length===3){const[e,s,r]=n.split("/"),i=r.length===2?`20${r}`:r,o=new Date(`${i}-${s}-${e}`);return o.setHours(12,0,0,0),o}const t=new Date(n);return t.setHours(12,0,0,0),t}return null},Ar={initList:async()=>{ct.render(F.createLoader());try{const n=await Ke.getObras();ct.render(iu.renderList(n))}catch(n){console.error(n),ct.render(`<div class="text-red-500 p-4">Erro ao carregar obras: ${n.message}</div>`)}},initForm:async(n=null)=>{ct.render(F.createLoader());try{let t=null;n&&(t=await Ke.getObraById(n)),ct.render(iu.renderForm(t)),Ar.bindFormEvents(n)}catch(t){console.error(t),ct.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},initDashboard:async n=>{var t;ct.render(F.createLoader());try{SO(document.documentElement.classList.contains("theme-light"));const e=await Ke.getObraById(n);if(!e){ct.render('<div class="text-red-500 p-4">Obra não encontrada.</div>');return}const s=await Ke.getObraStats(n,!1),r=Number(e.valor_orcado||0);r>0?(s.economia=r-s.totalGasto,s.curvaPercent=s.totalGasto/r*100):(s.economia=0,s.curvaPercent=0);const i=[];!e.horas_previstas&&!e.horas_extras_previstas&&i.push("Horas da obra não informadas."),e.data_prevista_inicio||i.push("Data de início prevista não informada."),e.data_prevista_fim||i.push("Data de término prevista não informada."),r||i.push("Orçamento da obra não informado."),e.numero_os||i.push("Número da OS não informado; integração RDO pode falhar."),s.osNumber=e.numero_os||e.id,s.alerts=i;const[o,a,c]=await Promise.all([zs.list(),Hs.list(),js.list()]),l=new Map(o.map(w=>[w.id,w.nome||w.email||w.id])),d=new Map(a.map(w=>[w.id,w.nome||w.empresa||w.id])),h=new Map(c.map(w=>[w.id,w.nome||w.codigo||w.id]));s.comprasRecentes=(s.comprasRecentes||[]).map(w=>({...w,compradorNome:l.get(w.compradorId)||w.comprador||"",fornecedorNome:d.get(w.fornecedorId)||w.fornecedor||"",centroCustoNome:h.get(w.centroCustoId)||w.centroCustoNome||w.centro_custo||w.centroCustoId||""})),s.comprasCalendar=(s.comprasCalendar||[]).map(w=>({...w,compradorNome:l.get(w.compradorId)||w.comprador||"",fornecedorNome:d.get(w.fornecedorId)||w.fornecedor||"",centroCustoNome:h.get(w.centroCustoId)||w.centroCustoNome||w.centro_custo||w.centroCustoId||""}));const f=(((t=s.rdoData)==null?void 0:t.diarios)||[]).map(w=>({date:w.data,descricao_compra:"RDO",fornecedorNome:"Mão de obra",type:"rdo"})),m=[...s.comprasCalendar||[],...f],g={};Object.entries(s.ccTotais||{}).forEach(([w,T])=>{const k=h.get(w)||w;g[k]=(g[k]||0)+T}),s.ccTotais=g,s.ccTable=Object.entries(g).map(([w,T])=>({nome:w,valor:T})),ct.render(iu.renderDashboard(e,s)),(()=>{const w=T=>{var P;const k=document.createElement("div");k.className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4",k.innerHTML=`
                        <div class="bg-surface border border-border rounded shadow-heavy w-full max-w-2xl">
                            <div class="flex justify-between items-center px-4 py-3 border-b border-border">
                                <h3 class="text-lg font-display text-text">Compra</h3>
                                <button data-close class="text-text-muted hover:text-text">&times;</button>
                            </div>
                            <div class="p-4 space-y-3">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Obra</label>
                                        <p class="text-text">${e.nome_obra||e.apelido_obra||e.id}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Status</label>
                                        <div class="mt-1">${Z.renderStatusBadge(T.status_compra,T.previsao_entrega||T.data_entrega_prevista)}</div>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Descrição</label>
                                        <p class="text-text">${T.descricao_compra||T.descricao||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Valor</label>
                                        <p class="text-text">${Z.formatCurrency(T.valor_total??T.valor_estimado??0)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Fornecedor</label>
                                        <p class="text-text">${T.fornecedorNome||T.fornecedor||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Comprador</label>
                                        <p class="text-text">${T.compradorNome||T.comprador||T.compradorId||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Prev. Entrega</label>
                                        <p class="text-text">${Z.formatDate(T.previsao_entrega||T.data_entrega_prevista)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Data Emissão</label>
                                        <p class="text-text">${Z.formatDate(T.data_emissao)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Número NF</label>
                                        <p class="text-text">${T.numero_nf||"-"}</p>
                                    </div>
                                </div>
                                <div class="flex justify-end gap-2">
                                    <button class="btn-secondary" data-close>Fechar</button>
                                    ${T.id?`<button class="btn" data-edit-id="${T.id}">Editar</button>`:""}
                                </div>
                            </div>
                        </div>
                    `,document.body.appendChild(k),(P=k.querySelectorAll("[data-close]"))==null||P.forEach(M=>M.addEventListener("click",()=>k.remove()));const D=k.querySelector("[data-edit-id]");D&&D.addEventListener("click",()=>{Tt.navigate(`/compras/${T.id}/editar`),k.remove()})};document.querySelectorAll('[data-action="edit-compra"]').forEach(T=>{T.addEventListener("click",()=>{const k=T.dataset.id;k&&Tt.navigate(`/compras/${k}/editar`)})}),document.querySelectorAll('[data-action="view-compra"]').forEach(T=>{T.addEventListener("click",()=>{const k=T.dataset.id,D=s.comprasRecentes.find(P=>P.id===k);D&&w(D)})})})();const y=()=>{const w=document.getElementById("calendar-wrapper"),T=document.getElementById("timeline-wrapper");w&&(w.innerHTML=Rr.render(m||s.comprasRecentes)),T&&(T.innerHTML=Rr.renderTimeline(s.comprasCalendar||s.comprasRecentes));const k=document.getElementById("cal-prev"),D=document.getElementById("cal-next");k==null||k.addEventListener("click",()=>{Rr.changeMonth(-1),y()}),D==null||D.addEventListener("click",()=>{Rr.changeMonth(1),y()})};y(),setTimeout(async()=>{var P;br.renderCategorias("chart-categorias",s.gastosPorCategoria),br.renderStatusObra("chart-status-obra",s.porStatus),s.curvaS&&br.renderCurvaS("chart-curva-s",s.curvaS.labels||[],s.curvaS.planejado,s.curvaS.realizado),s.gastosDiarios&&br.renderGastosMensais("chart-gastos-diarios",s.gastosDiarios),s.ccTotais&&br.renderCentrosCusto("chart-cc",s.ccTotais);const{COST_PER_HOUR:w,COST_PER_OVERTIME_HOUR:T}=await uo(async()=>{const{COST_PER_HOUR:M,COST_PER_OVERTIME_HOUR:I}=await import("./costs-CbBns5TW.js");return{COST_PER_HOUR:M,COST_PER_OVERTIME_HOUR:I}},[]),k=Rb({data_inicio:e.data_prevista_inicio,data_prevista_fim:e.data_prevista_fim,orcamento:e.valor_orcado}),D=Pb(s.comprasCalendar||s.comprasRecentes||[],((P=s.rdoData)==null?void 0:P.horasPorDia)||{},w,T);(k.length||D.length)&&br.renderFinancePVAV("chart-finance-pvav",k,D);try{const M=e.numero_os||e.numeroOS||e.id;if(M){const I=await Qe.getIntegratedDataForObra(M);if(I&&I.reports){const b=Qe.processRDOData(I.reports);if(b){s.rdoData=b,s.rdoOk=!0;const x=(B,L)=>{const q=document.getElementById(B);q&&(q.textContent=L)},A=Number(e.horas_previstas||0),C=Number(e.horas_extras_previstas||0),R=A+1.5*C,S=Number(b.totalHoras||0)+.5*Number(b.totalExtras||0),et=R-S;if(x("kpi-rdo-total",b.totalHoras.toFixed(1)),x("kpi-rdo-media-dia",b.mediaHorasDia.toFixed(1)),x("kpi-rdo-func",String(b.totalFuncionarios||0)),x("kpi-rdo-media-func-dia",b.mediaFuncionariosDia.toFixed(1)),x("kpi-rdo-orcadas",R.toFixed(1)),x("kpi-rdo-extras",b.totalExtras.toFixed(1)),x("kpi-rdo-saldo",et.toFixed(1)),b.totalHoras>0){ae.renderHorasNormaisExtras("chart-rdo-horas-normais-extras",b.horasNormaisPorDia,b.horasExtrasPorDia);const B=[],L=[],q=xg(e.data_prevista_inicio),Y=xg(e.data_prevista_fim);if(q&&Y&&!Number.isNaN(q)&&!Number.isNaN(Y)&&q<=Y&&R>0){const G=[],ot=new Date(q);ot.setHours(12,0,0,0);const xt=new Date(Y);for(xt.setDate(xt.getDate()+1);ot<=xt;){const nn=ot.getDay();nn!==0&&nn!==6&&G.push(new Date(ot)),ot.setDate(ot.getDate()+1)}const Bt=G.length?R/G.length:0;let Oe=0;G.forEach(nn=>{Oe+=Bt;const vn=new Date(nn);vn.setDate(vn.getDate()+0),B.push({x:vn,y:Number(Oe.toFixed(2))})})}const ft=Object.keys(b.horasPorDia||{}).sort((G,ot)=>new Date(G)-new Date(ot));let mt=0;ft.forEach(G=>{const ot=new Date(G);ot.setHours(12,0,0,0),!Number.isNaN(ot.getTime())&&(mt+=b.horasPorDia[G],L.push({x:ot,y:Number(mt.toFixed(2))}))});const bt=Qe.getHolidays?Qe.getHolidays():[];if(ae.renderCurvaHoras("chart-rdo-curva-horas",B,L,bt),b.horasPorFuncao&&ae.renderHorasPorFuncao("chart-rdo-funcao",b.horasPorFuncao),b.techHours){const G=Object.entries(b.techHours||{}).sort((xt,Bt)=>Bt[1]-xt[1]).slice(0,10),ot=document.querySelector("#table-rdo-tech tbody");ot&&(ot.innerHTML=G.map(([xt,Bt])=>`
                                                <tr>
                                                    <td class="px-4 py-2 text-sm text-text">${xt}</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right font-display">${Bt.toFixed(1)}h</td>
                                                </tr>
                                            `).join("")||'<tr><td colspan="2" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>')}}else ae.renderEmpty("chart-rdo-horas-normais-extras"),ae.renderEmpty("chart-rdo-curva-horas");const z=document.querySelector("#table-rdo tbody");if(z){const B=b.diarios||[];B.length?z.innerHTML=B.map(L=>`
                                            <tr>
                                                <td class="px-4 py-2 text-sm text-text">${new Date(L.data).toLocaleDateString("pt-BR")}</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${L.horasNormais.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${L.horasExtras.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right font-display">${L.total.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${L.funcionarios}</td>
                                            </tr>
                                        `).join(""):z.innerHTML='<tr><td colspan="5" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>'}}}else s.rdoData=s.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},ae.renderEmpty("chart-rdo-horas-normais-extras"),ae.renderEmpty("chart-rdo-curva-horas")}}catch(M){console.warn("Erro ao carregar dados RDO (legacy):",(M==null?void 0:M.message)||M),s.rdoData=s.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},ae.renderEmpty("chart-rdo-horas-normais-extras"),ae.renderEmpty("chart-rdo-curva-horas")}},100)}catch(e){console.error(e),ct.render(`<div class="text-red-500 p-4">Erro: ${e.message}</div>`)}},bindFormEvents:n=>{const t=document.getElementById("form-obra");t.addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("btn-submit");try{s.disabled=!0,s.innerHTML=F.createLoader();const r=new FormData(t),i=Object.fromEntries(r.entries());i.valor_orcado=i.valor_orcado?Number(i.valor_orcado):0,i.tolerancia_percentual=i.tolerancia_percentual?Number(i.tolerancia_percentual)/100:0,i.valor_deslocamento_km=i.valor_deslocamento_km?Number(i.valor_deslocamento_km):0,i.horas_previstas=i.horas_previstas?Number(i.horas_previstas):0,i.horas_extras_previstas=i.horas_extras_previstas?Number(i.horas_extras_previstas):0,i.qtd_refeicoes=i.qtd_refeicoes?Number(i.qtd_refeicoes):0,i.qtd_hospedagens=i.qtd_hospedagens?Number(i.qtd_hospedagens):0,i.is_obra_filha=t.is_obra_filha.checked,n?(await Ke.updateObra(n,i),F.createToast("Obra atualizada com sucesso!")):(await Ke.createObra(i),F.createToast("Obra criada com sucesso!")),Tt.navigate("/obras")}catch(r){console.error(r),F.createToast("Erro ao salvar obra: "+r.message,"error"),s.disabled=!1,s.innerHTML=`<span>${n?"Salvar Alterações":"Criar Obra"}</span>`}})}},PO={renderMenu:()=>`
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
    `},DO={init:async()=>{ct.render(PO.renderMenu())}},MO={render:(n=[])=>`
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
    `},Zu={init:async()=>{const n=await Hs.list();ct.render(MO.render(n)),Zu.bind()},bind:()=>{const n=document.getElementById("fornecedor-form"),t=document.getElementById("btn-novo-fornecedor"),e=document.getElementById("btn-salvar-fornecedor"),s=document.getElementById("btn-cancelar-fornecedor"),r=document.querySelector("#fornecedor-table");t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden"));let i=null;r==null||r.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(i=a.dataset.id,document.getElementById("forn-nome").value=a.dataset.nome||"",document.getElementById("forn-email").value=a.dataset.email||"",document.getElementById("forn-telefone").value=a.dataset.telefone||"",document.getElementById("forn-cnpj").value=a.dataset.cnpj||"",n==null||n.classList.remove("hidden"))}),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("forn-nome").value,email:document.getElementById("forn-email").value,telefone:document.getElementById("forn-telefone").value,cnpj:document.getElementById("forn-cnpj").value};i?await Hs.update(i,o):await Hs.create(o),Zu.init()})}},OO={render:(n=[])=>`
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
    `},td={init:async()=>{const n=await js.list();ct.render(OO.render(n)),td.bind()},bind:()=>{const n=document.getElementById("cc-form"),t=document.getElementById("btn-novo-cc"),e=document.getElementById("btn-salvar-cc"),s=document.getElementById("btn-cancelar-cc"),r=document.getElementById("cc-table");let i=null;t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden")),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("cc-nome").value,codigo:document.getElementById("cc-codigo").value};i?await js.update(i,o):await js.create(o),td.init()}),r==null||r.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(i=a.dataset.id,document.getElementById("cc-nome").value=a.dataset.nome||"",document.getElementById("cc-codigo").value=a.dataset.codigo||"",n==null||n.classList.remove("hidden"))})}},NO={render:(n=[])=>`
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
    `},ed={init:async()=>{const n=await zs.list();ct.render(NO.render(n)),ed.bind()},bind:()=>{const n=document.getElementById("comprador-form"),t=document.getElementById("btn-novo-comprador"),e=document.getElementById("btn-salvar-comprador"),s=document.getElementById("btn-cancelar-comprador"),r=document.getElementById("compr-table");let i=null;t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden")),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("compr-nome").value,email:document.getElementById("compr-email").value};i?await zs.update(i,o):await zs.create(o),ed.init()}),r==null||r.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(i=a.dataset.id,document.getElementById("compr-nome").value=a.dataset.nome||"",document.getElementById("compr-email").value=a.dataset.email||"",n==null||n.classList.remove("hidden"))})}},wg={renderBell:(n=0)=>`
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
        `},ie={notifications:[],unreadCount:0,eventsBound:!1,init:async()=>{kt.state.currentUser&&(window.addEventListener("layout:rendered",()=>{ie.render(),ie.bindEvents()}),await ie.load(),ie.render(),ie.bindEvents(),setInterval(()=>ie.load(),12e4))},load:async()=>{const n=kt.state.currentUser;ie.notifications=await Us.getByUser(n.uid,20),ie.unreadCount=ie.notifications.filter(t=>!t.lida).length,ie.render(),xc.badge(ie.unreadCount)},render:()=>{const n=document.getElementById("notifications-container");if(!n)return;n.innerHTML=wg.renderBell(ie.unreadCount);const t=document.createElement("div");t.className="relative",t.innerHTML=wg.renderDropdown(ie.notifications),n.appendChild(t)},bindEvents:()=>{ie.eventsBound||(ie.eventsBound=!0,document.addEventListener("click",n=>{const t=document.getElementById("notifications-bell"),e=document.getElementById("notifications-dropdown");t&&t.contains(n.target)?e==null||e.classList.toggle("hidden"):e&&!e.contains(n.target)&&e.classList.add("hidden")}),document.addEventListener("click",async n=>{if(n.target.id==="mark-all-read"){const t=kt.state.currentUser;await Us.markAllAsRead(t.uid),await ie.load()}}),document.addEventListener("click",async n=>{var r,i;const t=(i=(r=n.target).closest)==null?void 0:i.call(r,"[data-notification-id]");if(!t)return;const e=t.dataset.notificationId,s=t.dataset.link||"#";try{await Us.markAsRead(e),await ie.load()}finally{window.location.hash=s.startsWith("#")?s.slice(1):s}}))}};console.log("[Main] Inicializando aplicação...");const LO=async()=>{try{await bS(),console.log("[Main] Firebase inicializado."),kt.applyTheme(kt.state.currentTheme||"dark"),await uc.init(),kt.state.currentUser&&await ie.init(),Tt.init(),Tt.on("/",rn.init),Tt.on("/login",Bp.initLogin),Tt.on("/forgot-password",Bp.initForgotPassword),Tt.on("/compras",Cr.init),Tt.on("/compras/nova",Cr.init),Tt.on("/relatorios",j.init),Tt.on("/configuracoes",Ju.init),Tt.on("/compras/:id",({id:t})=>Cr.initEdit(t)),Tt.on("/compras/:id/editar",({id:t})=>Cr.initEdit(t)),Tt.on("/cadastros",DO.init),Tt.on("/cadastros/fornecedores",Zu.init),Tt.on("/cadastros/centros-custo",td.init),Tt.on("/cadastros/compradores",ed.init),Tt.on("/obras",Ar.initList),Tt.on("/obras/nova",()=>Ar.initForm()),Tt.on("/obras/:id",({id:t})=>Ar.initDashboard(t)),Tt.on("/obras/:id/dashboard",({id:t})=>Ar.initDashboard(t)),Tt.on("/obras/:id/editar",({id:t})=>Ar.initForm(t)),Tt.handleRoute();const n=document.getElementById("loader");n&&n.remove()}catch(n){console.error("[Main] Erro fatal:",n),document.body.innerHTML=`<div class="p-10 text-red-600">Erro fatal: ${n.message}</div>`}};LO();
